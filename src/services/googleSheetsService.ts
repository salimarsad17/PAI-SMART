import { StorageService } from './storageService';
import {
  Student,
  Material,
  Question,
  StudentGrade,
  AttendanceRecord,
  Assignment,
  Announcement,
  TeachingJournal
} from '../types';

/**
 * Google Sheets Service layer
 * Communicates with Google Apps Script Web App endpoint if configured via VITE_GOOGLE_SCRIPT_URL or localStorage.
 * Transparently falls back to local StorageService if offline or URL is not configured.
 */
export class GoogleSheetsService {
  private static CUSTOM_URL_KEY = 'pai_custom_sheet_url';

  public static getScriptUrl(): string {
    const custom = localStorage.getItem(this.CUSTOM_URL_KEY);
    if (custom && custom.trim().length > 0) return custom.trim();
    return (import.meta as any).env?.VITE_GOOGLE_SCRIPT_URL || '';
  }

  public static setScriptUrl(url: string): void {
    localStorage.setItem(this.CUSTOM_URL_KEY, url.trim());
  }

  public static isConfigured(): boolean {
    const url = this.getScriptUrl();
    return Boolean(url && url.trim().length > 0);
  }

  public static async testConnection(): Promise<{ success: boolean; message: string }> {
    if (!this.isConfigured()) return { success: false, message: 'URL Google Apps Script belum diisi.' };
    try {
      const response = await fetch(this.getScriptUrl(), {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({ action: 'ping' })
      });
      if (response.ok) {
        const json = await response.json();
        if (json.status === 'success') {
          return {
            success: true,
            message: json.message || 'Koneksi ke Google Sheets Berhasil!'
          };
        }
        return { success: false, message: json.message || 'Respon Google Apps Script tidak valid.' };
      }
      return { success: false, message: `Server Apps Script merespon dengan status HTTP ${response.status}` };
    } catch (err: any) {
      return {
        success: false,
        message: 'Gagal terhubung. Pastikan Web App di-deploy dengan opsi "Who has access: Anyone". Detail: ' + (err?.message || 'Network error')
      };
    }
  }

  private static async sendRequest<T>(action: string, payload?: unknown): Promise<T | null> {
    if (!this.isConfigured()) {
      return null;
    }

    try {
      const response = await fetch(this.getScriptUrl(), {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8'
        },
        body: JSON.stringify({ action, data: payload })
      });

      if (!response.ok) {
        console.warn(`Google Apps Script responded with HTTP ${response.status}`);
        return null;
      }

      const result = await response.json();
      if (result && result.status === 'success') {
        return result.data as T;
      }
      return null;
    } catch (err) {
      console.warn('Google Sheets API request failed, falling back to localStorage:', err);
      return null;
    }
  }

  // ================= STUDENTS =================
  public static async getStudents(): Promise<Student[]> {
    const remote = await this.sendRequest<Student[]>('getStudents');
    if (remote && Array.isArray(remote)) {
      return remote;
    }
    return StorageService.getStudents();
  }

  public static async addStudent(student: Student): Promise<void> {
    StorageService.addStudent(student);
    await this.sendRequest('addStudent', student);
  }

  public static async updateStudent(student: Student): Promise<void> {
    StorageService.updateStudent(student);
    await this.sendRequest('updateStudent', student);
  }

  public static async deleteStudent(id: string): Promise<void> {
    StorageService.deleteStudent(id);
    await this.sendRequest('deleteStudent', { id });
  }

  // ================= MATERIALS =================
  public static async getMaterials(): Promise<Material[]> {
    const remote = await this.sendRequest<Material[]>('getMaterials');
    if (remote && Array.isArray(remote)) {
      return remote;
    }
    return StorageService.getMaterials();
  }

  public static async addMaterial(material: Material): Promise<void> {
    StorageService.saveMaterial(material);
    await this.sendRequest('addMaterial', material);
  }

  public static async updateMaterial(material: Material): Promise<void> {
    StorageService.saveMaterial(material);
    await this.sendRequest('updateMaterial', material);
  }

  public static async deleteMaterial(id: string): Promise<void> {
    StorageService.deleteMaterial(id);
    await this.sendRequest('deleteMaterial', { id });
  }

  // ================= QUESTIONS =================
  public static async getQuestions(): Promise<Question[]> {
    const remote = await this.sendRequest<Question[]>('getQuestions');
    if (remote && Array.isArray(remote)) {
      return remote;
    }
    return StorageService.getQuestions();
  }

  public static async addQuestion(question: Question): Promise<void> {
    StorageService.saveQuestion(question);
    await this.sendRequest('addQuestion', question);
  }

  public static async updateQuestion(question: Question): Promise<void> {
    StorageService.saveQuestion(question);
    await this.sendRequest('updateQuestion', question);
  }

  public static async deleteQuestion(id: string): Promise<void> {
    StorageService.deleteQuestion(id);
    await this.sendRequest('deleteQuestion', { id });
  }

  // ================= GRADES =================
  public static async getGrades(): Promise<StudentGrade[]> {
    const remote = await this.sendRequest<StudentGrade[]>('getGrades');
    if (remote && Array.isArray(remote)) {
      return remote;
    }
    return StorageService.getGrades();
  }

  public static async saveGrade(grade: StudentGrade): Promise<void> {
    StorageService.saveGrade(grade);
    await this.sendRequest('saveGrade', grade);
  }

  // ================= ATTENDANCE =================
  public static async getAttendance(): Promise<AttendanceRecord[]> {
    const remote = await this.sendRequest<AttendanceRecord[]>('getAttendance');
    if (remote && Array.isArray(remote)) {
      return remote;
    }
    return StorageService.getAttendance();
  }

  public static async saveAttendance(record: AttendanceRecord): Promise<void> {
    StorageService.saveAttendance(record);
    await this.sendRequest('saveAttendance', record);
  }

  // ================= ASSIGNMENTS =================
  public static async getAssignments(): Promise<Assignment[]> {
    const remote = await this.sendRequest<Assignment[]>('getAssignments');
    if (remote && Array.isArray(remote)) {
      return remote;
    }
    return StorageService.getAssignments();
  }

  public static async saveAssignment(assignment: Assignment): Promise<void> {
    StorageService.saveAssignment(assignment);
    await this.sendRequest('saveAssignment', assignment);
  }

  // ================= ANNOUNCEMENTS =================
  public static async getAnnouncements(): Promise<Announcement[]> {
    const remote = await this.sendRequest<Announcement[]>('getAnnouncements');
    if (remote && Array.isArray(remote)) {
      return remote;
    }
    return StorageService.getAnnouncements();
  }

  public static async saveAnnouncement(announcement: Announcement): Promise<void> {
    StorageService.saveAnnouncement(announcement);
    await this.sendRequest('saveAnnouncement', announcement);
  }

  // ================= JOURNALS =================
  public static async getJournals(): Promise<TeachingJournal[]> {
    const remote = await this.sendRequest<TeachingJournal[]>('getJournals');
    if (remote && Array.isArray(remote)) {
      return remote;
    }
    return StorageService.getJournals();
  }

  public static async saveJournal(journal: TeachingJournal): Promise<void> {
    StorageService.saveJournal(journal);
    await this.sendRequest('saveJournal', journal);
  }

  // ================= BULK SYNC =================
  public static async syncAllToGoogleSheets(): Promise<{ success: boolean; message: string; processed?: any }> {
    if (!this.isConfigured()) {
      return { success: false, message: 'URL Google Apps Script belum dikonfigurasi di pengaturan.' };
    }

    const payload = {
      students: StorageService.getStudents(),
      materials: StorageService.getMaterials(),
      questions: StorageService.getQuestions(),
      grades: StorageService.getAllGrades(),
      attendance: StorageService.getAttendance(),
      assignments: StorageService.getAssignments(),
      announcements: StorageService.getAnnouncements(),
      journals: StorageService.getJournals()
    };

    try {
      const response = await fetch(this.getScriptUrl(), {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({ action: 'syncAll', data: payload })
      });

      if (!response.ok) {
        return { success: false, message: `Server Apps Script merespon dengan status HTTP ${response.status}` };
      }

      const res = await response.json();
      if (res && res.status === 'success') {
        return {
          success: true,
          message: res.message || 'Semua data lokal berhasil disinkronkan ke Google Spreadsheet!',
          processed: res.processed
        };
      }
      return { success: false, message: res?.message || 'Gagal menyinkronkan data ke Google Spreadsheet.' };
    } catch (err: any) {
      return { success: false, message: 'Gagal mengirim data ke Google Apps Script: ' + (err?.message || 'Network error') };
    }
  }
}
