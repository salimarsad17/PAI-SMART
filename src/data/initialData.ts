import {
  SchoolProfile,
  Teacher,
  Student,
  SchoolClass,
  VideoItem,
  Exam,
  Assignment,
  Submission,
  AttendanceRecord,
  StudentGrade,
  TeacherJournal,
  AttitudeRecord,
  Announcement,
  Badge,
  Certificate
} from '../types';

export const INITIAL_SCHOOL_PROFILE: SchoolProfile = {
  name: 'UPT SMPN 2 REBANG TANGKAS',
  npsn: '10806421',
  address: 'Jl. Poros Rebang Tangkas, Kec. Rebang Tangkas, Kab. Way Kanan, Lampung 34766',
  headmaster: 'Drs. H. Mulyadi, M.Pd.',
  paiTeacher: 'Ustadz Ahmad Fauzi, S.Pd.I., M.Pd.',
  vision: 'Terwujudnya Peserta Didik yang Beriman dan Bertakwa, Berakhlak Mulia, Unggul dalam Prestasi, serta Berwawasan Lingkungan.',
  missions: [
    'Menumbuhkembangkan penghayatan dan pengamalan nilai-nilai ajaran Islam dalam kehidupan sehari-hari.',
    'Mewujudkan iklim sekolah yang religius melalui pembiasaan salat dhuha, salat berjamaah, dan tadarrus Al-Qur\'an.',
    'Melaksanakan proses pembelajaran PAI yang interaktif, kreatif, inovatif, dan berpusat pada peserta didik.',
    'Membina karakter budi pekerti luhur, kejujuran, disiplin, dan kepedulian sosial antarwarga sekolah.',
    'Meningkatkan literasi digital dan prestasi peserta didik dalam bidang keagamaan dan akademik.'
  ],
  phone: '(0723) 456789 / 0812-3456-7890',
  email: 'smpn2rebangtangkas@gmail.sch.id',
  website: 'https://smpn2rebangtangkas.sch.id',
  accreditation: 'A (Unggul)',
  slogan: 'Belajar PAI dengan Mudah, Interaktif, dan Menyenangkan'
};

export const INITIAL_TEACHER: Teacher = {
  id: 'teacher-1',
  nip: '19820512 200801 1 015',
  name: 'Ahmad Fauzi, S.Pd.I., M.Pd.',
  title: 'Guru PAI & Pembina Rohis',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80',
  phone: '0812-7890-1234',
  email: 'ahmadfauzi.pai@smpn2rebangtangkas.sch.id'
};

export const INITIAL_CLASSES: SchoolClass[] = [
  {
    id: 'VII',
    name: 'Kelas VII (Tujuh)',
    gradeLevel: 'VII',
    academicYear: '2025/2026',
    homeroomTeacher: 'Siti Rohmah, S.Pd.',
    studentCount: 32
  },
  {
    id: 'VIII',
    name: 'Kelas VIII (Delapan)',
    gradeLevel: 'VIII',
    academicYear: '2025/2026',
    homeroomTeacher: 'Budi Santoso, M.Pd.',
    studentCount: 30
  },
  {
    id: 'IX',
    name: 'Kelas IX (Sembilan)',
    gradeLevel: 'IX',
    academicYear: '2025/2026',
    homeroomTeacher: 'Ahmad Fauzi, S.Pd.I.',
    studentCount: 28
  }
];

export const INITIAL_STUDENTS: Student[] = [
  // Kelas VII
  {
    id: 'std-vii-1',
    nis: '252607001',
    name: 'Muhammad Farhan',
    gender: 'L',
    classId: 'VII',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&auto=format&fit=crop&q=80',
    completedMaterialsCount: 8,
    completedExercisesCount: 6,
    averageGrade: 88,
    xp: 680,
    level: 3,
    badges: ['b-1', 'b-2', 'b-3'],
    phone: '0821-0001-0001',
    parentName: 'H. Ridwan'
  },
  {
    id: 'std-vii-2',
    nis: '252607002',
    name: 'Aisyah Putri Azzahra',
    gender: 'P',
    classId: 'VII',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&auto=format&fit=crop&q=80',
    completedMaterialsCount: 10,
    completedExercisesCount: 8,
    averageGrade: 94,
    xp: 920,
    level: 4,
    badges: ['b-1', 'b-2', 'b-3', 'b-4', 'b-5'],
    phone: '0821-0001-0002',
    parentName: 'Dra. Nurhayati'
  },
  {
    id: 'std-vii-3',
    nis: '252607003',
    name: 'Rizky Pratama',
    gender: 'L',
    classId: 'VII',
    avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=120&auto=format&fit=crop&q=80',
    completedMaterialsCount: 4,
    completedExercisesCount: 3,
    averageGrade: 68,
    xp: 320,
    level: 2,
    badges: ['b-1'],
    phone: '0821-0001-0003',
    parentName: 'Bambang Irawan'
  },
  {
    id: 'std-vii-4',
    nis: '252607004',
    name: 'Fatimah Zahra',
    gender: 'P',
    classId: 'VII',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80',
    completedMaterialsCount: 7,
    completedExercisesCount: 5,
    averageGrade: 84,
    xp: 590,
    level: 3,
    badges: ['b-1', 'b-2'],
    phone: '0821-0001-0004',
    parentName: 'Sulaiman'
  },
  {
    id: 'std-vii-5',
    nis: '252607005',
    name: 'Ilham Ramadhan',
    gender: 'L',
    classId: 'VII',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80',
    completedMaterialsCount: 6,
    completedExercisesCount: 5,
    averageGrade: 78,
    xp: 490,
    level: 2,
    badges: ['b-1', 'b-3'],
    phone: '0821-0001-0005',
    parentName: 'H. Syamsudin'
  },

  // Kelas VIII
  {
    id: 'std-viii-1',
    nis: '242508001',
    name: 'Ahmad Bilal Akbar',
    gender: 'L',
    classId: 'VIII',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80',
    completedMaterialsCount: 9,
    completedExercisesCount: 7,
    averageGrade: 91,
    xp: 850,
    level: 4,
    badges: ['b-1', 'b-2', 'b-3', 'b-5'],
    phone: '0821-0002-0001',
    parentName: 'Anwar Sadat'
  },
  {
    id: 'std-viii-2',
    nis: '242508002',
    name: 'Nabila Syakira',
    gender: 'P',
    classId: 'VIII',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80',
    completedMaterialsCount: 8,
    completedExercisesCount: 6,
    averageGrade: 86,
    xp: 730,
    level: 3,
    badges: ['b-1', 'b-2', 'b-4'],
    phone: '0821-0002-0002',
    parentName: 'Mansyur'
  },
  {
    id: 'std-viii-3',
    nis: '242508003',
    name: 'Dimas Wahyu Saputra',
    gender: 'L',
    classId: 'VIII',
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=120&auto=format&fit=crop&q=80',
    completedMaterialsCount: 5,
    completedExercisesCount: 4,
    averageGrade: 72,
    xp: 410,
    level: 2,
    badges: ['b-1'],
    phone: '0821-0002-0003',
    parentName: 'Sugeng'
  },
  {
    id: 'std-viii-4',
    nis: '242508004',
    name: 'Salma Nuraini',
    gender: 'P',
    classId: 'VIII',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&auto=format&fit=crop&q=80',
    completedMaterialsCount: 9,
    completedExercisesCount: 7,
    averageGrade: 89,
    xp: 800,
    level: 4,
    badges: ['b-1', 'b-2', 'b-3'],
    phone: '0821-0002-0004',
    parentName: 'Kuswanto'
  },
  {
    id: 'std-viii-5',
    nis: '242508005',
    name: 'Rian Hidayat',
    gender: 'L',
    classId: 'VIII',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&auto=format&fit=crop&q=80',
    completedMaterialsCount: 4,
    completedExercisesCount: 3,
    averageGrade: 70,
    xp: 350,
    level: 2,
    badges: ['b-1'],
    phone: '0821-0002-0005',
    parentName: 'Suparman'
  },

  // Kelas IX
  {
    id: 'std-ix-1',
    nis: '232409001',
    name: 'Zaky Maulana',
    gender: 'L',
    classId: 'IX',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=120&auto=format&fit=crop&q=80',
    completedMaterialsCount: 10,
    completedExercisesCount: 9,
    averageGrade: 96,
    xp: 1250,
    level: 5,
    badges: ['b-1', 'b-2', 'b-3', 'b-4', 'b-5'],
    phone: '0821-0003-0001',
    parentName: 'H. Lukman Hakim'
  },
  {
    id: 'std-ix-2',
    nis: '232409002',
    name: 'Khadijah Al-Kubro',
    gender: 'P',
    classId: 'IX',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=120&auto=format&fit=crop&q=80',
    completedMaterialsCount: 9,
    completedExercisesCount: 8,
    averageGrade: 92,
    xp: 980,
    level: 4,
    badges: ['b-1', 'b-2', 'b-3', 'b-5'],
    phone: '0821-0003-0002',
    parentName: 'dr. Hendra'
  },
  {
    id: 'std-ix-3',
    nis: '232409003',
    name: 'Bagus Setiawan',
    gender: 'L',
    classId: 'IX',
    avatar: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=120&auto=format&fit=crop&q=80',
    completedMaterialsCount: 7,
    completedExercisesCount: 5,
    averageGrade: 79,
    xp: 610,
    level: 3,
    badges: ['b-1', 'b-2'],
    phone: '0821-0003-0003',
    parentName: 'Sukirno'
  },
  {
    id: 'std-ix-4',
    nis: '232409004',
    name: 'Zahra Amelia',
    gender: 'P',
    classId: 'IX',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&auto=format&fit=crop&q=80',
    completedMaterialsCount: 8,
    completedExercisesCount: 6,
    averageGrade: 87,
    xp: 760,
    level: 3,
    badges: ['b-1', 'b-3'],
    phone: '0821-0003-0004',
    parentName: 'Agus Salim'
  },
  {
    id: 'std-ix-5',
    nis: '232409005',
    name: 'Fikri Haikal',
    gender: 'L',
    classId: 'IX',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&auto=format&fit=crop&q=80',
    completedMaterialsCount: 5,
    completedExercisesCount: 4,
    averageGrade: 74,
    xp: 430,
    level: 2,
    badges: ['b-1'],
    phone: '0821-0003-0005',
    parentName: 'Subagio'
  }
];

export const INITIAL_VIDEOS: VideoItem[] = [
  {
    id: 'vid-1',
    title: 'Tata Cara Wudu yang Benar Sesuai Sunnah Rasulullah SAW',
    gradeLevel: 'VII',
    category: 'FIKIH',
    materialTitle: 'Thaharah: Mensucikan Diri dengan Wudu dan Tayamum',
    youtubeUrl: 'https://www.youtube.com/watch?v=kYv_8E1_r5E',
    youtubeId: 'kYv_8E1_r5E',
    description: 'Panduan visual lengkap tata cara berwudu mulai dari membaca basmalah, niat, membasuh anggota wudu secara tertib, hingga doa sesudah wudu.',
    duration: '08:45',
    thumbnail: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'vid-2',
    title: 'Mengenal Sifat dan Tugas 10 Malaikat Allah',
    gradeLevel: 'VII',
    category: 'AQIDAH',
    materialTitle: 'Iman kepada Malaikat-Malaikat Allah',
    youtubeUrl: 'https://www.youtube.com/watch?v=J---aiyznGQ',
    youtubeId: 'J---aiyznGQ',
    description: 'Animasi pembelajaran edukatif mengenai nama-nama sepuluh malaikat yang wajib diimani serta tugas pokoknya dalam mengatur alam dan mencatat amal manusia.',
    duration: '11:20',
    thumbnail: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'vid-3',
    title: 'Perbedaan Sujud Syukur, Sahwi, dan Tilawah Praktik Lengkap',
    gradeLevel: 'VIII',
    category: 'FIKIH',
    materialTitle: 'Sujud Syukur, Sujud Sahwi, dan Sujud Tilawah',
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    youtubeId: 'dQw4w9WgXcQ',
    description: 'Video demonstrasi rukun, bacaan lafadz doa, serta simulasi gerakan sujud sahwi dalam shalat fardhu dan sujud syukur di luar shalat.',
    duration: '10:15',
    thumbnail: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'vid-4',
    title: 'Baitul Hikmah: Puncak Kejayaan Ilmu Pengetahuan Islam Abbasiyah',
    gradeLevel: 'VIII',
    category: 'SEJARAH KEBUDAYAAN ISLAM',
    materialTitle: 'Kejayaan Dinasti Abbasiyah dan Perkembangan Ilmu Pengetahuan',
    youtubeUrl: 'https://www.youtube.com/watch?v=kJQP7kiw5Fk',
    youtubeId: 'kJQP7kiw5Fk',
    description: 'Dokumenter singkat mengenai kota Baghdad, perpustakaan Baitul Hikmah, dan kontribusi ilmuwan muslim (Ibnu Sina, Al-Khawarizmi, Al-Kindi) bagi peradaban dunia.',
    duration: '14:30',
    thumbnail: 'https://images.unsplash.com/photo-1461360370896-922624d12aa1?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'vid-5',
    title: 'Simulasi Manasik Haji dan Umrah Tingkat SMP',
    gradeLevel: 'IX',
    category: 'FIKIH',
    materialTitle: 'Ibadah Haji dan Umrah',
    youtubeUrl: 'https://www.youtube.com/watch?v=3JZ_D3ELwOQ',
    youtubeId: '3JZ_D3ELwOQ',
    description: 'Tata urutan pelaksanaan haji: pakaian ihram, miqat, wukuf di Arafah, mabit di Muzdalifah, lempar jumrah, tawaf ifadhah, sa\'i, dan tahallul.',
    duration: '16:05',
    thumbnail: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'vid-6',
    title: 'Kisah Perjuangan Dakwah Wali Songo di Nusantara',
    gradeLevel: 'IX',
    category: 'SEJARAH KEBUDAYAAN ISLAM',
    materialTitle: 'Kiprah Dakwah Wali Songo dan Kerajaan Islam di Indonesia',
    youtubeUrl: 'https://www.youtube.com/watch?v=fJ9rUzIMcZQ',
    youtubeId: 'fJ9rUzIMcZQ',
    description: 'Napak tilas sejarah dakwah sembilan wali di tanah Jawa yang menyebarkan Islam dengan pendekatan seni, gamelan, wayang, dan kearifan lokal tanpa kekerasan.',
    duration: '18:10',
    thumbnail: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?w=500&auto=format&fit=crop&q=80'
  }
];

export const INITIAL_EXAMS: Exam[] = [
  {
    id: 'exam-1',
    title: 'Penilaian Tengah Semester (PTS) PAI Kelas VII',
    gradeLevel: 'VII',
    category: "Al-Qur'an, Hadis, & Aqidah",
    questionIds: ['q-vii-1', 'q-vii-2', 'q-vii-3', 'q-vii-4', 'q-vii-5', 'q-vii-6', 'q-vii-7'],
    durationMinutes: 45,
    startDate: '2026-09-01T08:00:00Z',
    endDate: '2026-09-30T23:59:59Z',
    passingScore: 75,
    isRandomize: true,
    status: 'aktif'
  },
  {
    id: 'exam-2',
    title: 'Asesmen Sumatif Bab 1-3 PAI Kelas VIII',
    gradeLevel: 'VIII',
    category: "Kitab Allah, Rasul, & Fikih Ibadah",
    questionIds: ['q-viii-1', 'q-viii-2', 'q-viii-3', 'q-viii-4', 'q-viii-5', 'q-viii-6'],
    durationMinutes: 40,
    startDate: '2026-09-01T08:00:00Z',
    endDate: '2026-09-30T23:59:59Z',
    passingScore: 75,
    isRandomize: true,
    status: 'aktif'
  },
  {
    id: 'exam-3',
    title: 'Ujian Akhir Jenjang (UAS) PAI Kelas IX',
    gradeLevel: 'IX',
    category: "Hari Akhir, Qada-Qadar, & Muamalah",
    questionIds: ['q-ix-1', 'q-ix-2', 'q-ix-3', 'q-ix-4', 'q-ix-5', 'q-ix-6'],
    durationMinutes: 50,
    startDate: '2026-09-01T08:00:00Z',
    endDate: '2026-09-30T23:59:59Z',
    passingScore: 75,
    isRandomize: true,
    status: 'aktif'
  }
];

export const INITIAL_ASSIGNMENTS: Assignment[] = [
  {
    id: 'asg-1',
    title: 'Resume Hikmah Salat Berjamaah dan Tata Tertib Shaf',
    description: 'Tuliskan rangkuman tentang keutamaan salat berjamaah beserta 3 hikmahnya dalam melatih kedisiplinan hidup.',
    gradeLevel: 'VII',
    category: 'FIKIH',
    deadline: '2026-09-25T23:59:00Z',
    instructions: 'Ketikkan minimal 2 paragraf pada kolom jawaban atau unggah tautan dokumen tugas Anda.',
    maxScore: 100,
    createdAt: '2026-09-10T08:00:00Z'
  },
  {
    id: 'asg-2',
    title: 'Hafalan dan Terjemahan Q.S. Al-Hujurat Ayat 13',
    description: 'Kirimkan laporan hafalan ayat toleransi dan sebutkan arti kata kunci (syu\'uba, qaba\'ila, lita\'arafu).',
    gradeLevel: 'VII',
    category: "AL-QUR'AN DAN HADIS",
    deadline: '2026-09-28T23:59:00Z',
    instructions: 'Tuliskan teks latin beserta terjemahannya dan cantumkan nilai keteladanan yang kamu lakukan di sekolah.',
    maxScore: 100,
    createdAt: '2026-09-11T09:00:00Z'
  },
  {
    id: 'asg-3',
    title: 'Tabel Perbandingan Zakat Fitrah dan Zakat Mal',
    description: 'Buatlah tabel komparasi mengenai subjek zakat, nisab/haul, dan mustahik penerima zakat.',
    gradeLevel: 'VIII',
    category: 'FIKIH',
    deadline: '2026-09-27T23:59:00Z',
    instructions: 'Ketikkan rincian perbedaan kedua jenis zakat secara ringkas dan sistematis.',
    maxScore: 100,
    createdAt: '2026-09-10T10:00:00Z'
  },
  {
    id: 'asg-4',
    title: 'Refleksi Kisah Keteladanan 5 Rasul Ulul Azmi',
    description: 'Pilihlah salah satu dari 5 Rasul Ulul Azmi dan deskripsikan keteguhan beliau dalam menghadapi ujian dakwah.',
    gradeLevel: 'VIII',
    category: 'AQIDAH',
    deadline: '2026-09-30T23:59:00Z',
    instructions: 'Ceritakan dengan bahasa sendiri dan hubungkan dengan kehidupan siswa saat belajar tekun menghadapi tantangan.',
    maxScore: 100,
    createdAt: '2026-09-12T07:30:00Z'
  },
  {
    id: 'asg-5',
    title: 'Analisis Pendekatan Budaya Dakwah Sunan Kalijaga',
    description: 'Uraikan bagaimana wayang kulit dan tembang Ilir-Ilir digunakan sebagai instrumen dakwah Islam yang efektif.',
    gradeLevel: 'IX',
    category: 'SEJARAH KEBUDAYAAN ISLAM',
    deadline: '2026-09-26T23:59:00Z',
    instructions: 'Analisis nilai filosofis bait tembang Ilir-Ilir dan relevansinya bagi generasi muda saat ini.',
    maxScore: 100,
    createdAt: '2026-09-11T08:00:00Z'
  }
];

export const INITIAL_SUBMISSIONS: Submission[] = [
  {
    id: 'sub-1',
    assignmentId: 'asg-1',
    studentId: 'std-vii-1',
    studentName: 'Muhammad Farhan',
    gradeLevel: 'VII',
    content: 'Salat berjamaah memberikan pahala 27 derajat. Tiga hikmah utamanya: 1. Melatih disiplin waktu, 2. Menghilangkan sekat kesombongan saat bersanding di shaf, 3. Mempererat tali silaturahmi antarteman di sekolah.',
    submittedAt: '2026-09-12T14:30:00Z',
    status: 'Dinilai',
    grade: 90,
    teacherFeedback: 'Bagus sekali Farhan, pemahaman konsep salat berjamaah sangat mendalam!'
  },
  {
    id: 'sub-2',
    assignmentId: 'asg-1',
    studentId: 'std-vii-2',
    studentName: 'Aisyah Putri Azzahra',
    gradeLevel: 'VII',
    content: 'Alhamdulillah, salat berjamaah mengajarkan kita kepemimpinan dan ketaatan kepada imam selama benar. Di SMPN 2 Rebang Tangkas, salat Dzuhur berjamaah juga mengajarkan antre berwudu secara tertib.',
    submittedAt: '2026-09-12T15:10:00Z',
    status: 'Dinilai',
    grade: 95,
    teacherFeedback: 'Sangat cemerlang! Bahasa runut dan contoh konkret.'
  }
];

export const INITIAL_ATTENDANCE: AttendanceRecord[] = [
  {
    id: 'att-1',
    date: '2026-09-13',
    gradeLevel: 'VII',
    classId: 'VII',
    studentId: 'std-vii-1',
    studentName: 'Muhammad Farhan',
    status: 'Hadir'
  },
  {
    id: 'att-2',
    date: '2026-09-13',
    gradeLevel: 'VII',
    classId: 'VII',
    studentId: 'std-vii-2',
    studentName: 'Aisyah Putri Azzahra',
    status: 'Hadir'
  },
  {
    id: 'att-3',
    date: '2026-09-13',
    gradeLevel: 'VII',
    classId: 'VII',
    studentId: 'std-vii-3',
    studentName: 'Rizky Pratama',
    status: 'Sakit',
    notes: 'Surat dokter terlampir demam'
  },
  {
    id: 'att-4',
    date: '2026-09-13',
    gradeLevel: 'VII',
    classId: 'VII',
    studentId: 'std-vii-4',
    studentName: 'Fatimah Zahra',
    status: 'Hadir'
  },
  {
    id: 'att-5',
    date: '2026-09-13',
    gradeLevel: 'VII',
    classId: 'VII',
    studentId: 'std-vii-5',
    studentName: 'Ilham Ramadhan',
    status: 'Izin',
    notes: 'Keperluan keluarga'
  }
];

export const INITIAL_GRADES: StudentGrade[] = [
  {
    id: 'grd-1',
    studentId: 'std-vii-1',
    studentName: 'Muhammad Farhan',
    gradeLevel: 'VII',
    assignmentAverage: 90,
    exerciseAverage: 88,
    examAverage: 86,
    finalGrade: 88,
    status: 'TUNTAS'
  },
  {
    id: 'grd-2',
    studentId: 'std-vii-2',
    studentName: 'Aisyah Putri Azzahra',
    gradeLevel: 'VII',
    assignmentAverage: 95,
    exerciseAverage: 94,
    examAverage: 93,
    finalGrade: 94,
    status: 'TUNTAS'
  },
  {
    id: 'grd-3',
    studentId: 'std-vii-3',
    studentName: 'Rizky Pratama',
    gradeLevel: 'VII',
    assignmentAverage: 65,
    exerciseAverage: 70,
    examAverage: 68,
    finalGrade: 68,
    status: 'BELUM TUNTAS'
  },
  {
    id: 'grd-4',
    studentId: 'std-vii-4',
    studentName: 'Fatimah Zahra',
    gradeLevel: 'VII',
    assignmentAverage: 85,
    exerciseAverage: 84,
    examAverage: 83,
    finalGrade: 84,
    status: 'TUNTAS'
  },
  {
    id: 'grd-5',
    studentId: 'std-vii-5',
    studentName: 'Ilham Ramadhan',
    gradeLevel: 'VII',
    assignmentAverage: 78,
    exerciseAverage: 77,
    examAverage: 79,
    finalGrade: 78,
    status: 'TUNTAS'
  },
  // VIII
  {
    id: 'grd-6',
    studentId: 'std-viii-1',
    studentName: 'Ahmad Bilal Akbar',
    gradeLevel: 'VIII',
    assignmentAverage: 92,
    exerciseAverage: 90,
    examAverage: 91,
    finalGrade: 91,
    status: 'TUNTAS'
  },
  {
    id: 'grd-7',
    studentId: 'std-viii-2',
    studentName: 'Nabila Syakira',
    gradeLevel: 'VIII',
    assignmentAverage: 87,
    exerciseAverage: 86,
    examAverage: 85,
    finalGrade: 86,
    status: 'TUNTAS'
  },
  {
    id: 'grd-8',
    studentId: 'std-viii-3',
    studentName: 'Dimas Wahyu Saputra',
    gradeLevel: 'VIII',
    assignmentAverage: 70,
    exerciseAverage: 72,
    examAverage: 74,
    finalGrade: 72,
    status: 'BELUM TUNTAS'
  },
  // IX
  {
    id: 'grd-9',
    studentId: 'std-ix-1',
    studentName: 'Zaky Maulana',
    gradeLevel: 'IX',
    assignmentAverage: 98,
    exerciseAverage: 95,
    examAverage: 96,
    finalGrade: 96,
    status: 'TUNTAS'
  },
  {
    id: 'grd-10',
    studentId: 'std-ix-2',
    studentName: 'Khadijah Al-Kubro',
    gradeLevel: 'IX',
    assignmentAverage: 93,
    exerciseAverage: 91,
    examAverage: 92,
    finalGrade: 92,
    status: 'TUNTAS'
  }
];

export const INITIAL_JOURNALS: TeacherJournal[] = [
  {
    id: 'jrn-1',
    date: '2026-09-11',
    gradeLevel: 'VII',
    classId: 'VII',
    material: 'Thaharah: Wudu dan Tayamum',
    learningObjectives: 'Peserta didik mampu mempraktikkan rukun wudu dan tayamum secara tertib sesuai sunnah.',
    activities: 'Penjelasan konsep, demonstrasi tata cara tayamum menggunakan debu dinding suci, praktik mandiri di tempat wudu sekolah.',
    method: 'Demonstrasi dan Praktik Langsung',
    media: 'Buku Ajar, Air Mengalir, Video Animasi',
    obstacles: 'Sebagian siswa masih sering tergesa-gesa membasuh kaki hingga tumit.',
    evaluation: '90% siswa sudah menguasai rukun dan sunnah wudu dengan baik.',
    followUp: 'Bimbingan khusus pada saat pelaksanaan salat dzuhur berjamaah.'
  },
  {
    id: 'jrn-2',
    date: '2026-09-12',
    gradeLevel: 'VIII',
    classId: 'VIII',
    material: 'Sujud Syukur, Sujud Sahwi, dan Sujud Tilawah',
    learningObjectives: 'Siswa mampu melafalkan doa dan tata cara ketiga sujud dengan benar.',
    activities: 'Diskusi kelompok studi kasus salat terlupa rakaat, praktik simulasi sujud sahwi sebelum salam.',
    method: 'Problem Based Learning (PBL)',
    media: 'Slide Presentasi, Sajadah, Lembar Kerja',
    obstacles: 'Perlu penguatan hafalan doa sujud sahwi (Subhana man la yanamu wa la yashu).',
    evaluation: 'Siswa antusias dan aktif berdiskusi.',
    followUp: 'Pemberian kartu saku hafalan doa-doa sujud.'
  }
];

export const INITIAL_ATTITUDES: AttitudeRecord[] = [
  {
    id: 'att-rec-1',
    studentId: 'std-vii-1',
    studentName: 'Muhammad Farhan',
    gradeLevel: 'VII',
    date: '2026-09-12',
    religius: 4,
    jujur: 4,
    disiplin: 4,
    tanggungJawab: 3,
    santun: 4,
    peduli: 3,
    kerjaSama: 4,
    teacherNotes: 'Selalu terdepan dalam adzan dan mengimami zikir setelah salat berjamaah.'
  },
  {
    id: 'att-rec-2',
    studentId: 'std-vii-2',
    studentName: 'Aisyah Putri Azzahra',
    gradeLevel: 'VII',
    date: '2026-09-12',
    religius: 4,
    jujur: 4,
    disiplin: 4,
    tanggungJawab: 4,
    santun: 4,
    peduli: 4,
    kerjaSama: 4,
    teacherNotes: 'Sangat santun kepada bapak/ibu guru dan rajin membimbing kawan yang kesulitan membaca Al-Qur\'an.'
  },
  {
    id: 'att-rec-3',
    studentId: 'std-vii-3',
    studentName: 'Rizky Pratama',
    gradeLevel: 'VII',
    date: '2026-09-12',
    religius: 2,
    jujur: 3,
    disiplin: 2,
    tanggungJawab: 2,
    santun: 3,
    peduli: 3,
    kerjaSama: 3,
    teacherNotes: 'Perlu bimbingan dan motivasi untuk lebih disiplin hadir tepat waktu di musholla.'
  }
];

export const INITIAL_ANNOUNCEMENTS: Announcement[] = [
  {
    id: 'anc-1',
    title: 'Jadwal Penilaian Tengah Semester (PTS) PAI Semester Ganjil',
    content: 'Diumumkan kepada seluruh siswa Kelas VII, VIII, dan IX bahwa PTS PAI Online akan dimulai tanggal 22 September 2026. Mohon menyelesaikan seluruh materi dan latihan bab 1-3.',
    gradeLevel: 'Semua',
    date: '2026-09-12',
    priority: 'Mendesak',
    author: 'Ahmad Fauzi, S.Pd.I.'
  },
  {
    id: 'anc-2',
    title: 'Pembiasaan Salat Dhuha dan Khataman Al-Qur\'an Juz 30',
    content: 'Kegiatan pembiasaan dhuha berjamaah dilaksanakan setiap hari Selasa s.d. Kamis pukul 07.00 WIB di Musholla Nurul Ilmi SMPN 2 Rebang Tangkas.',
    gradeLevel: 'Semua',
    date: '2026-09-10',
    priority: 'Penting',
    author: 'Tim Keagamaan Rohis'
  },
  {
    id: 'anc-3',
    title: 'Tugas Portofolio Praktik Wudu & Tayamum Kelas VII',
    content: 'Bagi siswa kelas VII yang belum mengumpulkan video atau resume praktik wudu, batas akhir penyerahan adalah hari Sabtu pekan ini.',
    gradeLevel: 'VII',
    date: '2026-09-08',
    priority: 'Biasa',
    author: 'Guru PAI Kelas VII'
  }
];

export const INITIAL_BADGES: Badge[] = [
  {
    id: 'b-1',
    name: 'Rajin Belajar',
    description: 'Menyelesaikan modul materi dan membaca secara konsisten',
    icon: 'BookOpen',
    requiredXP: 200,
    category: 'Aktivitas'
  },
  {
    id: 'b-2',
    name: 'Ahli PAI',
    description: 'Menuntaskan seluruh materi pada satu semester dengan pemahaman tuntas',
    icon: 'Award',
    requiredXP: 600,
    category: 'Materi'
  },
  {
    id: 'b-3',
    name: 'Juara Latihan',
    description: 'Menyelesaikan 5 sesi latihan soal dengan skor sempurna',
    icon: 'CheckCircle2',
    requiredXP: 450,
    category: 'Kuis'
  },
  {
    id: 'b-4',
    name: 'Rajin Membaca',
    description: 'Mengkaji ayat Al-Qur\'an, terjemahan, dan hadis pilihan setiap pekan',
    icon: 'Bookmark',
    requiredXP: 500,
    category: 'Literasi'
  },
  {
    id: 'b-5',
    name: 'Nilai Terbaik',
    description: 'Meraih skor 90 ke atas pada Ujian Online Sumatif',
    icon: 'Trophy',
    requiredXP: 800,
    category: 'Ujian'
  }
];

export const INITIAL_CERTIFICATES: Certificate[] = [
  {
    id: 'cert-1',
    studentId: 'std-vii-2',
    studentName: 'Aisyah Putri Azzahra',
    gradeLevel: 'Kelas VII',
    moduleTitle: 'Modul Thaharah & Salat Fardhu Berjamaah',
    issueDate: '2026-09-12',
    score: 94,
    teacherName: 'Ahmad Fauzi, S.Pd.I., M.Pd.',
    schoolName: 'UPT SMPN 2 REBANG TANGKAS',
    certificateNumber: 'SMPN2-RT/PAI-CERT/2026/001'
  },
  {
    id: 'cert-2',
    studentId: 'std-ix-1',
    studentName: 'Zaky Maulana',
    gradeLevel: 'Kelas IX',
    moduleTitle: 'Modul Penguasaan Akidah Hari Akhir & Muamalah Islam',
    issueDate: '2026-09-10',
    score: 96,
    teacherName: 'Ahmad Fauzi, S.Pd.I., M.Pd.',
    schoolName: 'UPT SMPN 2 REBANG TANGKAS',
    certificateNumber: 'SMPN2-RT/PAI-CERT/2026/002'
  }
];
