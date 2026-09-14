import {
  Student,
  Teacher,
  SchoolClass,
  Material,
  Question,
  Exam,
  ExamResult,
  Assignment,
  Submission,
  AttendanceRecord,
  StudentGrade,
  TeacherJournal,
  TeachingJournal,
  AttitudeRecord,
  Announcement,
  Badge,
  Certificate,
  SchoolProfile,
  StudentProgress,
  GradeRecord,
  VideoItem
} from '../types';

import {
  INITIAL_SCHOOL_PROFILE,
  INITIAL_TEACHER,
  INITIAL_CLASSES,
  INITIAL_STUDENTS,
  INITIAL_VIDEOS,
  INITIAL_EXAMS,
  INITIAL_ASSIGNMENTS,
  INITIAL_SUBMISSIONS,
  INITIAL_ATTENDANCE,
  INITIAL_GRADES,
  INITIAL_JOURNALS,
  INITIAL_ATTITUDES,
  INITIAL_ANNOUNCEMENTS,
  INITIAL_BADGES,
  INITIAL_CERTIFICATES
} from '../data/initialData';

import { INITIAL_MATERIALS } from '../data/materialsData';
import { INITIAL_QUESTIONS } from '../data/questionsData';

const STORAGE_KEYS = {
  PROFILE: 'pai_school_profile',
  TEACHER: 'pai_teacher',
  CLASSES: 'pai_classes',
  STUDENTS: 'pai_students',
  MATERIALS: 'pai_materials',
  VIDEOS: 'pai_videos',
  QUESTIONS: 'pai_questions',
  EXAMS: 'pai_exams',
  EXAM_RESULTS: 'pai_exam_results',
  ASSIGNMENTS: 'pai_assignments',
  SUBMISSIONS: 'pai_submissions',
  ATTENDANCE: 'pai_attendance',
  GRADES: 'pai_grades',
  JOURNALS: 'pai_journals',
  ATTITUDES: 'pai_attitudes',
  ANNOUNCEMENTS: 'pai_announcements',
  BADGES: 'pai_badges',
  CERTIFICATES: 'pai_certificates',
  STUDENT_PROGRESS: 'pai_student_progress',
  DETAILED_GRADES: 'pai_detailed_grades',
  INITIALIZED: 'pai_initialized_v2'
};

export class StorageService {
  public static init(): void {
    if (!localStorage.getItem(STORAGE_KEYS.INITIALIZED)) {
      localStorage.setItem(STORAGE_KEYS.PROFILE, JSON.stringify(INITIAL_SCHOOL_PROFILE));
      localStorage.setItem(STORAGE_KEYS.TEACHER, JSON.stringify(INITIAL_TEACHER));
      localStorage.setItem(STORAGE_KEYS.CLASSES, JSON.stringify(INITIAL_CLASSES));
      localStorage.setItem(STORAGE_KEYS.STUDENTS, JSON.stringify(INITIAL_STUDENTS));
      localStorage.setItem(STORAGE_KEYS.MATERIALS, JSON.stringify(INITIAL_MATERIALS));
      localStorage.setItem(STORAGE_KEYS.VIDEOS, JSON.stringify(INITIAL_VIDEOS));
      localStorage.setItem(STORAGE_KEYS.QUESTIONS, JSON.stringify(INITIAL_QUESTIONS));
      localStorage.setItem(STORAGE_KEYS.EXAMS, JSON.stringify(INITIAL_EXAMS));
      localStorage.setItem(STORAGE_KEYS.EXAM_RESULTS, JSON.stringify([]));
      localStorage.setItem(STORAGE_KEYS.ASSIGNMENTS, JSON.stringify(INITIAL_ASSIGNMENTS));
      localStorage.setItem(STORAGE_KEYS.SUBMISSIONS, JSON.stringify(INITIAL_SUBMISSIONS));
      localStorage.setItem(STORAGE_KEYS.ATTENDANCE, JSON.stringify(INITIAL_ATTENDANCE));
      localStorage.setItem(STORAGE_KEYS.GRADES, JSON.stringify(INITIAL_GRADES));
      localStorage.setItem(STORAGE_KEYS.JOURNALS, JSON.stringify(INITIAL_JOURNALS));
      localStorage.setItem(STORAGE_KEYS.ATTITUDES, JSON.stringify(INITIAL_ATTITUDES));
      localStorage.setItem(STORAGE_KEYS.ANNOUNCEMENTS, JSON.stringify(INITIAL_ANNOUNCEMENTS));
      localStorage.setItem(STORAGE_KEYS.BADGES, JSON.stringify(INITIAL_BADGES));
      localStorage.setItem(STORAGE_KEYS.CERTIFICATES, JSON.stringify(INITIAL_CERTIFICATES));
      localStorage.setItem(STORAGE_KEYS.STUDENT_PROGRESS, JSON.stringify([]));

      // Initial detailed grades seed
      const seedGrades: GradeRecord[] = [
        {
          id: 'grade-1',
          studentId: 'std-1',
          examId: 'exam-1',
          examTitle: 'Penilaian Harian: Thaharah dan Shalat Fardhu',
          score: 88,
          submittedAt: '2025-08-15',
          gradeLevel: 'VII',
          passingScore: 75,
          status: 'TUNTAS'
        },
        {
          id: 'grade-2',
          studentId: 'std-1',
          examId: 'exam-2',
          examTitle: 'Kuis Bab 1: Menuntut Ilmu',
          score: 92,
          submittedAt: '2025-08-28',
          gradeLevel: 'VII',
          passingScore: 75,
          status: 'TUNTAS'
        },
        {
          id: 'grade-3',
          studentId: 'std-2',
          examId: 'exam-1',
          examTitle: 'Penilaian Harian: Thaharah dan Shalat Fardhu',
          score: 72,
          submittedAt: '2025-08-15',
          gradeLevel: 'VII',
          passingScore: 75,
          status: 'BELUM TUNTAS'
        }
      ];
      localStorage.setItem(STORAGE_KEYS.DETAILED_GRADES, JSON.stringify(seedGrades));

      localStorage.setItem(STORAGE_KEYS.INITIALIZED, 'true');
    }
  }

  public static getItem<T>(key: string, defaultValue: T): T {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch {
      return defaultValue;
    }
  }

  public static setItem<T>(key: string, value: T): void {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error('Failed to save to localStorage:', e);
    }
  }

  // School Profile
  public static getSchoolProfile(): SchoolProfile {
    return this.getItem(STORAGE_KEYS.PROFILE, INITIAL_SCHOOL_PROFILE);
  }

  public static updateSchoolProfile(profile: SchoolProfile): void {
    this.setItem(STORAGE_KEYS.PROFILE, profile);
  }

  // Teacher Profile
  public static getTeacherProfile(): Teacher {
    return this.getItem(STORAGE_KEYS.TEACHER, INITIAL_TEACHER);
  }

  public static updateTeacherProfile(teacher: Teacher): void {
    this.setItem(STORAGE_KEYS.TEACHER, teacher);
  }

  // Students
  public static getStudents(): Student[] {
    return this.getItem(STORAGE_KEYS.STUDENTS, INITIAL_STUDENTS);
  }

  public static getStudentById(id: string): Student | undefined {
    return this.getStudents().find(s => s.id === id);
  }

  public static addStudent(student: Student): void {
    const list = this.getStudents();
    list.unshift(student);
    this.setItem(STORAGE_KEYS.STUDENTS, list);
  }

  public static updateStudent(student: Student): void {
    const list = this.getStudents().map(s => s.id === student.id ? student : s);
    this.setItem(STORAGE_KEYS.STUDENTS, list);
  }

  public static deleteStudent(id: string): void {
    const list = this.getStudents().filter(s => s.id !== id);
    this.setItem(STORAGE_KEYS.STUDENTS, list);
  }

  // Classes
  public static getClasses(): SchoolClass[] {
    return this.getItem(STORAGE_KEYS.CLASSES, INITIAL_CLASSES);
  }

  public static addClass(cls: SchoolClass): void {
    const list = this.getClasses();
    list.push(cls);
    this.setItem(STORAGE_KEYS.CLASSES, list);
  }

  public static updateClass(cls: SchoolClass): void {
    const list = this.getClasses().map(c => c.id === cls.id ? cls : c);
    this.setItem(STORAGE_KEYS.CLASSES, list);
  }

  public static deleteClass(id: string): void {
    const list = this.getClasses().filter(c => c.id !== id);
    this.setItem(STORAGE_KEYS.CLASSES, list);
  }

  // Videos
  public static getVideos(): VideoItem[] {
    return this.getItem(STORAGE_KEYS.VIDEOS, INITIAL_VIDEOS);
  }

  public static saveVideo(video: VideoItem): void {
    const list = this.getVideos();
    const index = list.findIndex(v => v.id === video.id);
    if (index >= 0) {
      list[index] = video;
    } else {
      list.unshift(video);
    }
    this.setItem(STORAGE_KEYS.VIDEOS, list);
  }

  public static addVideo(video: VideoItem): void {
    this.saveVideo(video);
  }

  public static updateVideo(video: VideoItem): void {
    this.saveVideo(video);
  }

  public static deleteVideo(id: string): void {
    const list = this.getVideos().filter(v => v.id !== id);
    this.setItem(STORAGE_KEYS.VIDEOS, list);
  }

  // Materials
  public static getMaterials(): Material[] {
    return this.getItem(STORAGE_KEYS.MATERIALS, INITIAL_MATERIALS);
  }

  public static getMaterialById(id: string): Material | undefined {
    return this.getMaterials().find(m => m.id === id);
  }

  public static saveMaterial(material: Material): void {
    const list = this.getMaterials();
    const index = list.findIndex(m => m.id === material.id);
    if (index >= 0) {
      list[index] = material;
    } else {
      list.unshift(material);
    }
    this.setItem(STORAGE_KEYS.MATERIALS, list);
  }

  public static addMaterial(material: Material): void {
    this.saveMaterial(material);
  }

  public static updateMaterial(material: Material): void {
    this.saveMaterial(material);
  }

  public static deleteMaterial(id: string): void {
    const list = this.getMaterials().filter(m => m.id !== id);
    this.setItem(STORAGE_KEYS.MATERIALS, list);
  }

  // Questions
  public static getQuestions(): Question[] {
    return this.getItem(STORAGE_KEYS.QUESTIONS, INITIAL_QUESTIONS);
  }

  public static saveQuestion(q: Question): void {
    const list = this.getQuestions();
    const index = list.findIndex(item => item.id === q.id);
    if (index >= 0) {
      list[index] = q;
    } else {
      list.unshift(q);
    }
    this.setItem(STORAGE_KEYS.QUESTIONS, list);
  }

  public static addQuestion(q: Question): void {
    this.saveQuestion(q);
  }

  public static updateQuestion(q: Question): void {
    this.saveQuestion(q);
  }

  public static deleteQuestion(id: string): void {
    const list = this.getQuestions().filter(q => q.id !== id);
    this.setItem(STORAGE_KEYS.QUESTIONS, list);
  }

  // Exams
  public static getExams(): Exam[] {
    return this.getItem(STORAGE_KEYS.EXAMS, INITIAL_EXAMS);
  }

  public static saveExam(exam: Exam): void {
    const list = this.getExams();
    const index = list.findIndex(e => e.id === exam.id);
    if (index >= 0) {
      list[index] = exam;
    } else {
      list.unshift(exam);
    }
    this.setItem(STORAGE_KEYS.EXAMS, list);
  }

  public static addExam(exam: Exam): void {
    this.saveExam(exam);
  }

  public static updateExam(exam: Exam): void {
    this.saveExam(exam);
  }

  public static deleteExam(id: string): void {
    const list = this.getExams().filter(e => e.id !== id);
    this.setItem(STORAGE_KEYS.EXAMS, list);
  }

  // Exam Results
  public static getExamResults(): ExamResult[] {
    return this.getItem(STORAGE_KEYS.EXAM_RESULTS, []);
  }

  public static saveExamResult(result: ExamResult): void {
    const list = this.getExamResults();
    list.unshift(result);
    this.setItem(STORAGE_KEYS.EXAM_RESULTS, list);
    
    // Also record into detailed grades
    this.addGrade({
      id: `grade-${Date.now()}`,
      studentId: result.studentId,
      examId: result.examId,
      examTitle: result.examTitle,
      score: result.score,
      submittedAt: result.completedAt,
      gradeLevel: result.gradeLevel,
      passingScore: 75,
      status: result.isPassed ? 'TUNTAS' : 'BELUM TUNTAS'
    });

    // Also award XP and update student stats
    this.addStudentXP(result.studentId, 100);
  }

  // Detailed Grades
  public static getAllGrades(): GradeRecord[] {
    return this.getItem<GradeRecord[]>(STORAGE_KEYS.DETAILED_GRADES, []);
  }

  public static getStudentGrades(studentId: string): GradeRecord[] {
    return this.getAllGrades().filter(g => g.studentId === studentId);
  }

  public static addGrade(record: GradeRecord): void {
    const list = this.getAllGrades();
    list.unshift(record);
    this.setItem(STORAGE_KEYS.DETAILED_GRADES, list);
  }

  // Assignments & Submissions
  public static getAssignments(): Assignment[] {
    return this.getItem(STORAGE_KEYS.ASSIGNMENTS, INITIAL_ASSIGNMENTS);
  }

  public static saveAssignment(asg: Assignment): void {
    const list = this.getAssignments();
    const index = list.findIndex(a => a.id === asg.id);
    if (index >= 0) {
      list[index] = asg;
    } else {
      list.unshift(asg);
    }
    this.setItem(STORAGE_KEYS.ASSIGNMENTS, list);
  }

  public static deleteAssignment(id: string): void {
    const list = this.getAssignments().filter(a => a.id !== id);
    this.setItem(STORAGE_KEYS.ASSIGNMENTS, list);
  }

  public static getSubmissions(): Submission[] {
    return this.getItem(STORAGE_KEYS.SUBMISSIONS, INITIAL_SUBMISSIONS);
  }

  public static saveSubmission(sub: Submission): void {
    const list = this.getSubmissions();
    const index = list.findIndex(s => s.id === sub.id);
    if (index >= 0) {
      list[index] = sub;
    } else {
      list.unshift(sub);
    }
    this.setItem(STORAGE_KEYS.SUBMISSIONS, list);
  }

  // Attendance
  public static getAttendance(): AttendanceRecord[] {
    return this.getItem(STORAGE_KEYS.ATTENDANCE, INITIAL_ATTENDANCE);
  }

  public static saveAttendance(record: AttendanceRecord): void {
    const list = this.getAttendance();
    const index = list.findIndex(r => r.id === record.id);
    if (index >= 0) {
      list[index] = record;
    } else {
      list.unshift(record);
    }
    this.setItem(STORAGE_KEYS.ATTENDANCE, list);
  }

  public static deleteAttendance(id: string): void {
    const list = this.getAttendance().filter(r => r.id !== id);
    this.setItem(STORAGE_KEYS.ATTENDANCE, list);
  }

  // Aggregated Grades
  public static getGrades(): StudentGrade[] {
    return this.getItem(STORAGE_KEYS.GRADES, INITIAL_GRADES);
  }

  public static saveGrade(grade: StudentGrade): void {
    const list = this.getGrades();
    const index = list.findIndex(g => g.id === grade.id);
    if (index >= 0) {
      list[index] = grade;
    } else {
      list.unshift(grade);
    }
    this.setItem(STORAGE_KEYS.GRADES, list);
  }

  // Journals
  public static getJournals(): TeacherJournal[] {
    return this.getItem(STORAGE_KEYS.JOURNALS, INITIAL_JOURNALS);
  }

  public static saveJournal(journal: TeacherJournal): void {
    const list = this.getJournals();
    const index = list.findIndex(j => j.id === journal.id);
    if (index >= 0) {
      list[index] = journal;
    } else {
      list.unshift(journal);
    }
    this.setItem(STORAGE_KEYS.JOURNALS, list);
  }

  public static addJournal(journal: TeacherJournal): void {
    this.saveJournal(journal);
  }

  public static updateJournal(journal: TeacherJournal): void {
    this.saveJournal(journal);
  }

  public static deleteJournal(id: string): void {
    const list = this.getJournals().filter(j => j.id !== id);
    this.setItem(STORAGE_KEYS.JOURNALS, list);
  }

  // Attitudes
  public static getAttitudes(): AttitudeRecord[] {
    return this.getItem(STORAGE_KEYS.ATTITUDES, INITIAL_ATTITUDES);
  }

  public static saveAttitude(attitude: AttitudeRecord): void {
    const list = this.getAttitudes();
    const index = list.findIndex(a => a.id === attitude.id);
    if (index >= 0) {
      list[index] = attitude;
    } else {
      list.unshift(attitude);
    }
    this.setItem(STORAGE_KEYS.ATTITUDES, list);
  }

  public static deleteAttitude(id: string): void {
    const list = this.getAttitudes().filter(a => a.id !== id);
    this.setItem(STORAGE_KEYS.ATTITUDES, list);
  }

  // Announcements
  public static getAnnouncements(): Announcement[] {
    return this.getItem(STORAGE_KEYS.ANNOUNCEMENTS, INITIAL_ANNOUNCEMENTS);
  }

  public static saveAnnouncement(anc: Announcement): void {
    const list = this.getAnnouncements();
    const index = list.findIndex(a => a.id === anc.id);
    if (index >= 0) {
      list[index] = anc;
    } else {
      list.unshift(anc);
    }
    this.setItem(STORAGE_KEYS.ANNOUNCEMENTS, list);
  }

  public static deleteAnnouncement(id: string): void {
    const list = this.getAnnouncements().filter(a => a.id !== id);
    this.setItem(STORAGE_KEYS.ANNOUNCEMENTS, list);
  }

  // Badges & Certificates
  public static getBadges(): Badge[] {
    return this.getItem(STORAGE_KEYS.BADGES, INITIAL_BADGES);
  }

  public static getCertificates(): Certificate[] {
    return this.getItem(STORAGE_KEYS.CERTIFICATES, INITIAL_CERTIFICATES);
  }

  public static addCertificate(cert: Certificate): void {
    const list = this.getCertificates();
    list.unshift(cert);
    this.setItem(STORAGE_KEYS.CERTIFICATES, list);
  }

  // Student Progress
  public static getStudentProgress(studentId?: string): StudentProgress[] {
    const all = this.getItem<StudentProgress[]>(STORAGE_KEYS.STUDENT_PROGRESS, []);
    return studentId ? all.filter(p => p.studentId === studentId) : all;
  }

  public static markMaterialCompleted(studentId: string, materialId: string): void {
    const list = this.getStudentProgress();
    const existing = list.find(p => p.studentId === studentId && p.materialId === materialId);
    if (!existing) {
      list.push({
        studentId,
        materialId,
        isCompleted: true,
        scoreAchieved: 100,
        completedAt: new Date().toISOString()
      });
      this.setItem(STORAGE_KEYS.STUDENT_PROGRESS, list);

      // Award XP to student
      this.addStudentXP(studentId, 50);

      // Increment completed count
      const students = this.getStudents();
      const st = students.find(s => s.id === studentId);
      if (st) {
        st.completedMaterialsCount = (st.completedMaterialsCount || 0) + 1;
        this.updateStudent(st);
      }
    }
  }

  public static addStudentXP(studentId: string, amount: number): void {
    const students = this.getStudents();
    const student = students.find(s => s.id === studentId);
    if (student) {
      student.xp += amount;
      if (student.xp >= 1200) student.level = 5;
      else if (student.xp >= 900) student.level = 4;
      else if (student.xp >= 600) student.level = 3;
      else if (student.xp >= 300) student.level = 2;
      else student.level = 1;

      this.updateStudent(student);
    }
  }

  // Backup & Restore
  public static exportAllData(): string {
    const dump: Record<string, unknown> = {};
    for (const [key, storageKey] of Object.entries(STORAGE_KEYS)) {
      dump[key] = this.getItem(storageKey, null);
    }
    return JSON.stringify(dump, null, 2);
  }

  public static importAllData(jsonStr: string): boolean {
    try {
      const parsed = JSON.parse(jsonStr);
      for (const [key, storageKey] of Object.entries(STORAGE_KEYS)) {
        if (parsed[key] !== undefined) {
          localStorage.setItem(storageKey, JSON.stringify(parsed[key]));
        }
      }
      return true;
    } catch (e) {
      console.error('Import failed:', e);
      return false;
    }
  }

  public static resetToDefault(): void {
    localStorage.clear();
    this.init();
  }

  public static resetToDefaults(): void {
    this.resetToDefault();
  }
}
