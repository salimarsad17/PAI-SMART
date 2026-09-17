import { User, UserRole, Student } from '../types';
import { StorageService } from './storageService';

const AUTH_USER_KEY = 'pai_current_user';
const REGISTERED_ACCOUNTS_KEY = 'pai_registered_accounts';

export interface RegisteredAccount {
  id: string;
  username: string;
  password: string;
  name: string;
  role: UserRole;
  email?: string;
  phone?: string;
  classId?: string;
  nis?: string;
  nip?: string;
  gender?: 'L' | 'P';
  avatar?: string;
  createdAt: string;
}

export class AuthService {
  private static cachedUser: User | null = null;
  private static cachedRaw: string | null = null;

  public static getRegisteredAccounts(): RegisteredAccount[] {
    try {
      const stored = localStorage.getItem(REGISTERED_ACCOUNTS_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  }

  public static registerAccount(data: {
    name: string;
    username: string;
    password: string;
    role: UserRole;
    classId?: string;
    nis?: string;
    nip?: string;
    phone?: string;
    gender?: 'L' | 'P';
    email?: string;
  }): { success: boolean; message: string; user?: User } {
    StorageService.init();

    const cleanUsername = data.username.trim();
    if (!cleanUsername || !data.password || !data.name.trim()) {
      return { success: false, message: 'Harap lengkapi semua kolom wajib.' };
    }

    if (data.password.length < 4) {
      return { success: false, message: 'Password minimal 4 karakter.' };
    }

    const registered = this.getRegisteredAccounts();
    const existing = registered.find(
      acc => acc.username.toLowerCase() === cleanUsername.toLowerCase()
    );

    // Also check demo usernames
    if (existing || cleanUsername.toLowerCase() === 'guru' || cleanUsername.toLowerCase() === 'siswa') {
      return { success: false, message: `Username "${cleanUsername}" sudah digunakan. Silakan gunakan username lain.` };
    }

    // Default Islamic avatars based on role/gender
    let avatarUrl = 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80';
    if (data.gender === 'P') {
      avatarUrl = 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80';
    } else if (data.gender === 'L') {
      avatarUrl = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80';
    } else if (data.role === 'GURU') {
      avatarUrl = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80';
    }

    const accountId = `${data.role.toLowerCase()}-${Date.now()}`;
    const newAccount: RegisteredAccount = {
      id: accountId,
      username: cleanUsername,
      password: data.password,
      name: data.name.trim(),
      role: data.role,
      classId: data.classId || (data.role === 'SISWA' ? 'IX' : undefined),
      nis: data.nis?.trim() || (data.role === 'SISWA' ? cleanUsername : undefined),
      nip: data.nip?.trim(),
      gender: data.gender || 'L',
      phone: data.phone?.trim(),
      email: data.email?.trim(),
      avatar: avatarUrl,
      createdAt: new Date().toISOString()
    };

    // If student, register into StorageService so they show up in classroom rosters, attendance & grading
    if (data.role === 'SISWA') {
      const newStudent: Student = {
        id: accountId,
        nis: newAccount.nis || cleanUsername,
        name: newAccount.name,
        gender: newAccount.gender || 'L',
        classId: (newAccount.classId as 'VII' | 'VIII' | 'IX') || 'IX',
        avatar: avatarUrl,
        completedMaterialsCount: 0,
        averageGrade: 85,
        xp: 100,
        level: 1,
        badges: ['b1'],
        phone: newAccount.phone
      };
      StorageService.addStudent(newStudent);
    }

    registered.push(newAccount);
    localStorage.setItem(REGISTERED_ACCOUNTS_KEY, JSON.stringify(registered));

    const user: User = {
      id: newAccount.id,
      username: newAccount.username,
      name: newAccount.name,
      role: newAccount.role,
      classId: newAccount.classId,
      nis: newAccount.nis,
      nip: newAccount.nip,
      avatar: newAccount.avatar,
      email: newAccount.email
    };

    this.setCurrentUser(user);
    return {
      success: true,
      message: `Alhamdulillah! Pendaftaran berhasil. Selamat datang, ${user.name}!`,
      user
    };
  }

  public static getCurrentUser(): User | null {
    try {
      const stored = localStorage.getItem(AUTH_USER_KEY);
      if (!stored) {
        // Default to student demo if nothing selected
        const defaultUser: User = {
          id: 'std-vii-2',
          username: 'siswa',
          name: 'Aisyah Putri Azzahra',
          role: 'SISWA',
          classId: 'VII',
          nis: '252607002',
          avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&auto=format&fit=crop&q=80'
        };
        const raw = JSON.stringify(defaultUser);
        localStorage.setItem(AUTH_USER_KEY, raw);
        this.cachedRaw = raw;
        this.cachedUser = defaultUser;
        return defaultUser;
      }
      if (stored === this.cachedRaw && this.cachedUser) {
        return this.cachedUser;
      }
      this.cachedRaw = stored;
      this.cachedUser = JSON.parse(stored);
      return this.cachedUser;
    } catch {
      return null;
    }
  }

  public static setCurrentUser(user: User): void {
    const raw = JSON.stringify(user);
    this.cachedRaw = raw;
    this.cachedUser = user;
    localStorage.setItem(AUTH_USER_KEY, raw);
    window.dispatchEvent(new Event('auth_state_changed'));
  }

  public static logout(): void {
    this.cachedRaw = null;
    this.cachedUser = null;
    localStorage.removeItem(AUTH_USER_KEY);
    window.dispatchEvent(new Event('auth_state_changed'));
  }

  public static login(username: string, password: string, role: UserRole): { success: boolean; message: string; user?: User } {
    StorageService.init();
    const cleanUsername = username.trim().toLowerCase();

    // 1. Check registered accounts first
    const registeredAccounts = this.getRegisteredAccounts();
    const matchedAccount = registeredAccounts.find(
      acc =>
        (acc.username.toLowerCase() === cleanUsername || (acc.nis && acc.nis.toLowerCase() === cleanUsername)) &&
        acc.role.toUpperCase() === role.toUpperCase()
    );

    if (matchedAccount) {
      if (matchedAccount.password === password) {
        const user: User = {
          id: matchedAccount.id,
          username: matchedAccount.username,
          name: matchedAccount.name,
          role: matchedAccount.role,
          classId: matchedAccount.classId,
          nis: matchedAccount.nis,
          nip: matchedAccount.nip,
          avatar: matchedAccount.avatar,
          email: matchedAccount.email
        };
        this.setCurrentUser(user);
        return { success: true, message: `Selamat datang kembali, ${matchedAccount.name}!`, user };
      } else {
        return { success: false, message: 'Password yang Anda masukkan salah.' };
      }
    }

    // 2. Check predefined demo credentials
    if (role === 'GURU') {
      if ((cleanUsername === 'guru' || cleanUsername === '19820512 200801 1 015') && password === 'guru123') {
        const teacher = StorageService.getItem('pai_teacher', {
          id: 'teacher-1',
          name: 'Ahmad Fauzi, S.Pd.I., M.Pd.',
          nip: '19820512 200801 1 015'
        }) as { id: string; name: string; nip: string };

        const user: User = {
          id: teacher.id || 'teacher-1',
          username: 'guru',
          name: teacher.name || 'Ahmad Fauzi, S.Pd.I., M.Pd.',
          role: 'GURU',
          nip: teacher.nip,
          avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80'
        };
        this.setCurrentUser(user);
        return { success: true, message: 'Login Guru Berhasil', user };
      }
      return { success: false, message: 'Username atau Password Guru salah (Demo: guru / guru123)' };
    } else {
      if (cleanUsername === 'siswa' && password === 'siswa123') {
        const students = StorageService.getStudents();
        const std = students[1] || students[0]; // Aisyah Putri Azzahra
        const user: User = {
          id: std.id,
          username: 'siswa',
          name: std.name,
          role: 'SISWA',
          classId: std.classId,
          nis: std.nis,
          avatar: std.avatar
        };
        this.setCurrentUser(user);
        return { success: true, message: 'Login Siswa Berhasil', user };
      }

      // Allow login with student's NIS as username and password 'siswa123'
      const students = StorageService.getStudents();
      const matched = students.find(s => s.nis.toLowerCase() === cleanUsername);
      if (matched && password === 'siswa123') {
        const user: User = {
          id: matched.id,
          username: matched.nis,
          name: matched.name,
          role: 'SISWA',
          classId: matched.classId,
          nis: matched.nis,
          avatar: matched.avatar
        };
        this.setCurrentUser(user);
        return { success: true, message: `Selamat datang, ${matched.name}`, user };
      }

      return { success: false, message: 'Username atau Password Siswa salah (Demo: siswa / siswa123)' };
    }
  }

  public static loginAsDemo(role: UserRole): User {
    if (role === 'GURU') {
      const user: User = {
        id: 'teacher-1',
        username: 'guru',
        name: 'Ahmad Fauzi, S.Pd.I., M.Pd.',
        role: 'GURU',
        nip: '19820512 200801 1 015',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80'
      };
      this.setCurrentUser(user);
      return user;
    } else {
      const students = StorageService.getStudents();
      const std = students[1] || students[0]; // Aisyah
      const user: User = {
        id: std.id,
        username: 'siswa',
        name: std.name,
        role: 'SISWA',
        classId: std.classId,
        nis: std.nis,
        avatar: std.avatar
      };
      this.setCurrentUser(user);
      return user;
    }
  }

  public static switchStudentAccount(studentId: string): void {
    const student = StorageService.getStudentById(studentId);
    if (student) {
      const user: User = {
        id: student.id,
        username: student.nis,
        name: student.name,
        role: 'SISWA',
        classId: student.classId,
        nis: student.nis,
        avatar: student.avatar
      };
      this.setCurrentUser(user);
    }
  }
}
