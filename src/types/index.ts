export type UserRole = 'GURU' | 'SISWA' | 'guru' | 'siswa';

export interface User {
  id: string;
  username: string;
  name: string;
  role: UserRole;
  email?: string;
  avatar?: string;
  classId?: string; // For students: 'VII', 'VIII', 'IX', or 'VII-A'
  nis?: string;     // For students
  nip?: string;     // For teachers
}

export interface Student {
  id: string;
  nis: string;
  name: string;
  gender: 'L' | 'P';
  classId: 'VII' | 'VIII' | 'IX' | string;
  avatar: string;
  completedMaterialsCount: number;
  completedExercisesCount?: number;
  averageGrade: number;
  attendancePercentage?: number;
  xp: number;
  level: number; // 1-5
  badges: string[]; // Badge IDs
  phone?: string;
  parentName?: string;
}

export interface Teacher {
  id: string;
  nip: string;
  name: string;
  title?: string;
  avatar?: string;
  phone?: string;
  email?: string;
}

export interface SchoolClass {
  id: string;
  name: string; // e.g., 'Kelas VII-A'
  gradeLevel: 'VII' | 'VIII' | 'IX';
  academicYear: string;
  homeroomTeacher: string;
  studentCount: number;
}

export type PAIKategori = 
  | "AL-QUR'AN DAN HADIS"
  | 'AQIDAH'
  | 'AKHLAK'
  | 'FIKIH'
  | 'SEJARAH KEBUDAYAAN ISLAM';

export interface Material {
  id: string;
  title: string;
  gradeLevel: 'VII' | 'VIII' | 'IX' | string;
  chapter: number;
  chapterTitle?: string;
  category: PAIKategori | string;
  learningObjectives?: string[];
  fullContent: string;
  summary: string;
  quranVerse?: {
    arabic: string;
    latin: string;
    surahName: string;
    verseNumber: string;
    translation: string;
  };
  hadith?: {
    arabic: string;
    narrator: string;
    translation: string;
  };
  dailyLifeExample?: string;
  videoUrl?: string;
  thumbnail?: string;
  references?: string[];
  estimatedReadingMinutes?: number;
  xpReward?: number;
}

export interface StudentProgress {
  id?: string;
  studentId: string;
  materialId: string;
  isCompleted: boolean;
  scoreAchieved?: number;
  completedAt?: string;
  quizScore?: number;
  notes?: string;
}

export type StudentMaterialProgress = StudentProgress;

export interface VideoItem {
  id: string;
  title: string;
  gradeLevel: 'VII' | 'VIII' | 'IX' | string;
  category: PAIKategori | string;
  materialTitle?: string;
  youtubeUrl?: string;
  youtubeId?: string;
  videoUrl?: string;
  description: string;
  duration: string;
  thumbnail?: string;
  thumbnailUrl?: string;
  summary?: string;
}

export type QuestionType = 
  | 'pilihan_ganda' 
  | 'benar_salah' 
  | 'pilihan_ganda_kompleks' 
  | 'isian' 
  | 'menjodohkan'
  | 'PILIHAN_GANDA'
  | 'BENAR_SALAH'
  | 'KOMPLEKS'
  | 'ISIAN'
  | 'MENJODOHKAN'
  | string;

export type DifficultyLevel = 'Mudah' | 'Sedang' | 'Sulit' | 'MUDAH' | 'SEDANG' | 'SUKAR' | string;

export interface Question {
  id: string;
  gradeLevel: 'VII' | 'VIII' | 'IX' | string;
  chapter?: number;
  materialId?: string;
  category?: PAIKategori | string;
  type: QuestionType;
  difficulty: DifficultyLevel;
  questionText: string;
  options?: string[]; // for pilihan_ganda & kompleks
  correctAnswer: any; // string | string[] | boolean | number
  explanation: string;
  score: number;
  matchingPairs?: { left: string; right: string }[]; // for menjodohkan
}

export interface Exam {
  id: string;
  title: string;
  gradeLevel: 'VII' | 'VIII' | 'IX' | string;
  category: string;
  questionIds?: string[];
  durationMinutes: number;
  startDate?: string;
  endDate?: string;
  passingScore: number; // KKM (e.g. 75)
  isRandomize?: boolean;
  token?: string;
  status: 'aktif' | 'selesai' | 'draft' | 'active' | 'completed' | string;
}

export interface ExamResult {
  id: string;
  examId: string;
  examTitle: string;
  studentId: string;
  studentName: string;
  gradeLevel: string;
  score: number;
  correctCount: number;
  wrongCount: number;
  totalQuestions: number;
  percentage: number;
  isPassed: boolean; // >= passingScore
  completedAt: string;
}

export interface GradeRecord {
  id?: string;
  studentId: string;
  examId: string;
  examTitle: string;
  score: number;
  submittedAt: string;
  gradeLevel: string;
  passingScore: number;
  status?: 'Tuntas' | 'Remedial' | 'TUNTAS' | 'BELUM TUNTAS' | string;
}

export interface Assignment {
  id: string;
  title: string;
  description: string;
  gradeLevel: 'VII' | 'VIII' | 'IX' | string;
  category: PAIKategori | string;
  deadline: string;
  instructions?: string;
  maxScore: number;
  createdAt: string;
}

export interface Submission {
  id: string;
  assignmentId: string;
  studentId: string;
  studentName: string;
  gradeLevel?: string;
  content: string;
  attachmentUrl?: string;
  submittedAt: string;
  status?: 'Belum dikerjakan' | 'Sudah dikumpulkan' | 'Dinilai' | 'Terlambat' | string;
  grade?: number;
  score?: number;
  teacherFeedback?: string;
  feedback?: string;
}

export type AssignmentSubmission = Submission;

export type AttendanceStatus = 'Hadir' | 'Sakit' | 'Izin' | 'Alpa';

export interface AttendanceRecord {
  id: string;
  date: string; // YYYY-MM-DD
  gradeLevel: 'VII' | 'VIII' | 'IX' | string;
  classId: string;
  studentId: string;
  studentName: string;
  status: AttendanceStatus;
  notes?: string;
}

export interface StudentGrade {
  id: string;
  studentId: string;
  studentName: string;
  gradeLevel: 'VII' | 'VIII' | 'IX' | string;
  assignmentAverage: number;
  exerciseAverage: number;
  examAverage: number;
  finalGrade: number;
  status: 'TUNTAS' | 'BELUM TUNTAS';
}

export interface TeacherJournal {
  id: string;
  date: string;
  gradeLevel: 'VII' | 'VIII' | 'IX' | string;
  classId?: string;
  period?: string;
  meetingNo?: number;
  materialTitle?: string;
  material?: string;
  learningObjective?: string;
  learningObjectives?: string;
  activitiesSummary?: string;
  activities?: string;
  teacherReflection?: string;
  studentNotes?: string;
  status?: 'Selesai' | 'Tertunda' | string;
  method?: string;
  media?: string;
  obstacles?: string;
  evaluation?: string;
  followUp?: string;
}

export type TeachingJournal = TeacherJournal;

export type AttitudeScale = 1 | 2 | 3 | 4; // 1: Perlu Bimbingan, 2: Cukup, 3: Baik, 4: Sangat Baik

export interface AttitudeRecord {
  id: string;
  studentId: string;
  studentName: string;
  gradeLevel: 'VII' | 'VIII' | 'IX' | string;
  date: string;
  religius: AttitudeScale;
  jujur: AttitudeScale;
  disiplin: AttitudeScale;
  tanggungJawab: AttitudeScale;
  santun: AttitudeScale;
  peduli: AttitudeScale;
  kerjaSama: AttitudeScale;
  teacherNotes: string;
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  gradeLevel: 'Semua' | 'VII' | 'VIII' | 'IX' | string;
  date: string;
  priority: 'Biasa' | 'Penting' | 'Mendesak';
  author: string;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  requiredXP: number;
  category: string;
}

export interface Certificate {
  id: string;
  studentId: string;
  studentName: string;
  gradeLevel: string;
  moduleTitle: string;
  issueDate: string;
  score: number;
  teacherName: string;
  schoolName: string;
  certificateNumber: string;
}

export interface SchoolProfile {
  name: string;
  npsn: string;
  address: string;
  headmaster?: string;
  paiTeacher?: string;
  guruPaiName?: string;
  guruPaiNip?: string;
  vision?: string;
  visi?: string;
  missions?: string[];
  misi?: string[];
  phone?: string;
  email: string;
  website?: string;
  accreditation?: string;
  slogan: string;
  status?: string;
  bentukPendidikan?: string;
  statusKepemilikan?: string;
  skPendirian?: string;
  tanggalSkPendirian?: string;
  skOperasional?: string;
  tanggalSkOperasional?: string;
}

export interface QuranSurah {
  number: number;
  name: string;
  arabicName: string;
  translation: string;
  totalAyah: number;
  revelationType: 'Makkiyah' | 'Madaniyah';
  verses: {
    number: number;
    arabic: string;
    latin: string;
    translation: string;
    tafsir: string;
  }[];
}

export interface HadithItem {
  id: string;
  title: string;
  theme: string;
  arabic: string;
  arabicText?: string;
  narrator: string;
  translation: string;
  explanation: string;
  source: string;
  lessons?: string[];
}
