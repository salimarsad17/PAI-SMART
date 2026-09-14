import { User, UserRole } from '../types';
import { StorageService } from './storageService';

const AUTH_USER_KEY = 'pai_current_user';

export class AuthService {
  private static cachedUser: User | null = null;
  private static cachedRaw: string | null = null;

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

    if (role === 'GURU') {
      if (username === 'guru' && password === 'guru123') {
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
      if (username === 'siswa' && password === 'siswa123') {
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
      const matched = students.find(s => s.nis === username);
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
