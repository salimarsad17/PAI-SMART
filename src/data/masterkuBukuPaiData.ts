export interface BukuPaiChapter {
  id: string;
  grade: 'Kelas VII' | 'Kelas VIII' | 'Kelas IX';
  semester: 'Semester 1' | 'Semester 2';
  chapterNumber: number;
  title: string;
  cpElement: 'Al-Qur\'an dan Hadis' | 'Akidah' | 'Akhlak' | 'Fikih' | 'Sejarah Peradaban Islam (SPI)';
  mainDalil: string;
  learningObjectives: string[];
  keyTerms: string[];
  summary: string;
  studentActivities: string[];
  reflectionQuestions: string[];
  hasFullTextbook?: boolean;
}

export const BUKU_PAI_DATA: BukuPaiChapter[] = [
  // ========================== KELAS VII ==========================
  {
    id: 'k7-bab1',
    grade: 'Kelas VII',
    semester: 'Semester 1',
    chapterNumber: 1,
    title: 'Merengkuh Hakikat Iman: Q.S. An-Nisā\': 136, Q.S. Al-Anfāl: 2-4, Hadis Keimanan & Hukum Bacaan Alif Lam',
    cpElement: 'Al-Qur\'an dan Hadis',
    mainDalil: 'Q.S. An-Nisā’: 136, Q.S. Al-Anfāl: 2-4, & Hadis Shahih Keimanan (Muslim & Bukhari)',
    hasFullTextbook: true,
    learningObjectives: [
      'Membaca Q.S. An-Nisā’/4: 136 dan Q.S. Al-Anfāl/8: 2-4 dengan fasih dan benar sesuai kaidah tajwid Alif Lam Qomariyah dan Syamsiyah',
      'Menelaah mufradat perkata dan terjemahan resmi Kemenag RI dari Q.S. An-Nisā’: 136 dan Q.S. Al-Anfāl: 2-4',
      'Menganalisis 5 karakteristik orang beriman sejati (mukmin hakiki) serta balasannya di sisi Allah SWT',
      'Memahami hadis-hadis Rasulullah SAW tentang urgensi iman, cabang-cabang iman (syu\'abul iman), dan manisnya iman (halawatul iman)',
      'Menerapkan tiga dimensi keimanan: tashdiq bil qalbi (keyakinan hati), iqrar bil lisani (ucapan lisan), dan \'amal bil arkani (perbuatan nyata)'
    ],
    keyTerms: [
      'Q.S. An-Nisa: 136',
      'Q.S. Al-Anfal: 2-4',
      'Alif Lam Qomariyah',
      'Alif Lam Syamsiyah',
      'Mufradat Perkata',
      'Mukmin Hakiki',
      'Hadis Iman',
      'Halawatul Iman',
      'Syu\'abul Iman'
    ],
    summary: 'Materi esensial PAI Kelas VII Semester 1 mencakup studi mendalam: (1) Q.S. An-Nisā’ ayat 136 tentang perintah memperkokoh rukun iman kepada Allah, Rasul, kitab-kitab, malaikat, dan hari akhir; (2) Q.S. Al-Anfāl ayat 2-4 tentang lima ciri mukmin hakiki (hati bergetar saat asma Allah disebut, iman bertambah saat Al-Qur\'an dibaca, tawakal, mendirikan salat, dan berinfak); (3) Hadis-hadis Rasulullah SAW mengenai urgensi dan manisnya iman; (4) Kaidah tajwid Alif Lam Qomariyah (Idzhar) dan Alif Lam Syamsiyah (Idgham); serta (5) Kamus mufradat perkata untuk memperkuat hafalan dan pemahaman tafsir.',
    studentActivities: [
      'Tadarus berpasangan membaca Q.S. An-Nisa: 136 dan Q.S. Al-Anfal: 2-4 dengan mencatat contoh Alif Lam Qomariyah & Syamsiyah',
      'Hafalan kosa kata mufradat perkata dengan kartu flashcard interaktif',
      'Mendiskusikan implementasi 5 ciri orang beriman sejati dalam pergaulan di sekolah'
    ],
    reflectionQuestions: [
      'Apakah hatimu tergetar dan segera mengambil air wudu saat mendengar seruan azan berkumandang?',
      'Bagaimana caramu menginfakkan sebagian uang saku untuk membantu teman yang tertimpa kesulitan?'
    ]
  },
  {
    id: 'k7-bab2',
    grade: 'Kelas VII',
    semester: 'Semester 1',
    chapterNumber: 2,
    title: 'Meneladani Asmaul Husna: Hakikat Iman, Makna Al-\'Alīm, As-Samī\', Al-Baṣīr, Al-Khabīr & Karakter Sehari-hari',
    cpElement: 'Akidah',
    mainDalil: 'Q.S. Al-A\'raf: 180, Q.S. An-Nisa: 136, Q.S. Taha: 8 & H.R. Bukhari-Muslim',
    hasFullTextbook: true,
    learningObjectives: [
      'Menjelaskan pengertian iman kepada Allah Swt. secara bahasa, istilah, dan tiga dimensi tauhid (Rububiyyah, Uluhiyyah, Asma\' wa Sifat)',
      'Memahami pengertian Asmaul Husna, dalil-dalil Al-Qur\'an, hadis 99 Asmaul Husna, dan keutamaannya',
      'Menganalisis makna mendalam empat Asmaul Husna utama: Al-\'Alīm (Maha Mengetahui), As-Samī\' (Maha Mendengar), Al-Baṣīr (Maha Melihat), dan Al-Khabīr (Maha Teliti)',
      'Membandingkan kesempurnaan sifat Allah Swt. dengan keterbatasan sifat makhluk',
      'Menerapkan contoh perilaku nyata yang mencerminkan keyakinan terhadap setiap Asmaul Husna di sekolah, rumah, pergaulan, dan era digital'
    ],
    keyTerms: [
      'Iman kepada Allah',
      'Tauhid Rububiyyah',
      'Tauhid Uluhiyyah',
      'Tauhid Asma wa Sifat',
      'Asmaul Husna',
      'Al-\'Alim',
      'As-Sami\'',
      'Al-Bashir',
      'Al-Khabir',
      'Muraqabatullah',
      'Tabayyun',
      'Ghadhdhul Bashar'
    ],
    summary: 'Materi Bab 2 Akidah PAI Kelas VII Semester 1 mencakup studi komprehensif: (1) Hakikat iman kepada Allah Swt. (definisi tasdiq, iqrar, amal, dimensi tauhid, dalil naqli & aqli); (2) Pengertian Asmaul Husna (etimologi Al-Asma\' & Al-Husna, hadis 99 Asmaul Husna man ahsaha dakhalal-jannah, dalil Q.S. Al-A\'raf: 180, Taha: 8, Al-Hasyr: 24); (3) Makna mendalam empat nama agung Allah (Al-\'Alīm, As-Samī\', Al-Baṣīr, Al-Khabīr) beserta dalil teks Arab dan terjemahan Kemenag RI; serta (4) Matriks aksi nyata contoh perilaku sehari-hari di sekolah, rumah, pergaulan sosial, dan ruang digital untuk mewujudkan Profil Pelajar berakhlak mulia.',
    studentActivities: [
      'Mempelajari materi interaktif teks buku pelajaran PAI Bab 2 dengan audio tilawah dan tafsir dalil',
      'Mengerjakan kuis skenario kasus kehidupan nyata untuk mengidentifikasi penerapan Asmaul Husna',
      'Menulis lembar komitmen pembiasaan karakter muraqabah (kejujuran saat ujian, menjaga lisan, dan tabayyun)'
    ],
    reflectionQuestions: [
      'Apakah kamu tetap bersikap jujur saat ulangan di kelas meskipun pengawas sedang lengah atau keluar ruangan?',
      'Bagaimana sifat As-Sami\' dan Al-Bashir memengaruhimu saat berbicara, mengetik komentar, atau menggunakan media sosial sendirian di kamar?'
    ]
  },
  {
    id: 'k7-bab3',
    grade: 'Kelas VII',
    semester: 'Semester 1',
    chapterNumber: 3,
    title: 'Menerapkan Makna Ikhlas dalam Kehidupan Sehari-hari',
    cpElement: 'Akhlak',
    mainDalil: 'Q.S. Al-Bayyinah: 5, Q.S. Al-An\'ām: 162-163, & HR. Bukhari No. 1',
    hasFullTextbook: true,
    learningObjectives: [
      'Memahami hakikat dan pengertian ikhlas secara bahasa (khalasa) dan istilah syar\'i',
      'Menganalisis dalil naqli Al-Qur\'an (Q.S. Al-Bayyinah: 5, Al-An\'am: 162-163) dan Hadis Nabi tentang niat serta keharusan ikhlas',
      'Menunjukkan contoh perilaku ikhlas dalam kehidupan sehari-hari (ibadah, sekolah, rumah, masyarakat, dan media digital)',
      'Menghayati hikmah dan manfaat besar sikap ikhlas di dunia dan akhirat serta waspada terhadap bahaya riya\' dan sum\'ah'
    ],
    keyTerms: [
      'Ikhlas',
      'Mukhlis',
      'Niat',
      'Amal Maqbul',
      'Riya\' (Pamer)',
      'Sum\'ah',
      '\'Ujub',
      'Birrul Walidain'
    ],
    summary: 'Materi Bab 3 Akhlak PAI Kelas VII Semester 1 mencakup studi komprehensif: (1) Pengertian ikhlas secara etimologi (khalasa = murni, suci dari kotoran) dan terminologi syariat (memurnikan niat beramal semata-mata mencari ridha Allah Swt.); (2) Dalil naqli Al-Qur\'an (Q.S. Al-Bayyinah: 5, Q.S. Al-An\'am: 162-163, Q.S. Az-Zumar: 2-3, Q.S. Al-Insan: 8-9) dan Hadis Nabi SAW (HR. Bukhari No. 1 tentang niat, HR. Muslim No. 2564 tentang hati dan amal, HR. Muslim No. 1905 tentang 3 golongan pertama yang dihisab); (3) Contoh perilaku nyata ikhlas di sekolah (piket tanpa diawasi, mengajari teman tanpa pamrih), di rumah (membantu orang tua tanpa upah), di pergaulan (memaafkan teman tanpa dendam), dan di media sosial (tidak pamer ibadah di status/story); serta (4) Manfaat dan hikmah ikhlas bagi ketenteraman batin di dunia dan keselamatan di akhirat.',
    studentActivities: [
      'Mempelajari materi interaktif teks buku pelajaran PAI Bab 3 dengan audio tilawah dan tafsir dalil',
      'Mengerjakan kuis skenario kasus HOTS untuk mengidentifikasi penerapan ikhlas vs riya\'',
      'Menulis jurnal refleksi harian tentang meluruskan niat dalam belajar dan membantu sesama tanpa pamrih'
    ],
    reflectionQuestions: [
      'Ketika kamu berbuat baik kepada teman atau membantu orang tua di rumah, apakah kamu masih sering menggerutu atau mengharapkan imbalan dan pujian?',
      'Apakah kamu pernah membagikan amalan ibadah pribadimu ke media sosial demi mendapatkan likes dan pujian dari orang lain?'
    ]
  },
  {
    id: 'k7-bab4',
    grade: 'Kelas VII',
    semester: 'Semester 1',
    chapterNumber: 4,
    title: 'Menerapkan Ketentuan Macam-Macam Sujud di Luar Rukun Salat',
    cpElement: 'Fikih',
    mainDalil: 'HR. Abu Dawud No. 2774, HR. Muslim No. 571 & No. 81',
    learningObjectives: [
      'Menjelaskan pengertian, hukum, dan sebab-sebab Sujud Syukur, Sujud Sahwi, dan Sujud Tilawah secara mendalam',
      'Melafalkan bacaan dan doa Sujud Syukur, Sujud Sahwi, dan Sujud Tilawah beserta artinya dengan benar',
      'Mendemonstrasikan tata cara pelaksanaan ketiga macam sujud baik di dalam maupun di luar salat',
      'Mengidentifikasi 15 ayat Sajdah dalam mushaf Al-Qur\'an beserta tanda kubah (۩) dan hukum membacanya',
      'Menganalisis manfaat dan hikmah sujud dalam membentuk kepribadian tawadhu\' serta menjauhkan sifat takabur'
    ],
    keyTerms: [
      'Sujud Syukur',
      'Sujud Sahwi',
      'Sujud Tilawah',
      '15 Ayat Sajdah',
      'Sunnah Ab\'adh',
      'As-Sahwu (Lupa)',
      'Tawadhu\''
    ],
    hasFullTextbook: true,
    summary: 'Materi Bab 4 Fikih PAI Kelas VII Semester 1 membahas secara komprehensif: (1) Pengertian, hukum (sunnah mu\'akkadah), dan sebab-sebab terjadinya Sujud Syukur (terima kasih atas nikmat baru/terhindar bahaya), Sujud Sahwi (menutup kekurangan/kelebihan/ragu rakaat karena lupa dalam salat), dan Sujud Tilawah (saat membaca/mendengar ayat Sajdah); (2) Bacaan khusus berharakat lengkap dan doa ma\'tsur untuk setiap jenis sujud; (3) Tata cara langkah-demi-langkah pelaksanaan sujud di dalam salat dan di luar salat serta ketentuan bagi imam dan makmum; (4) Daftar lengkap 15 Ayat Sajdah dalam Al-Qur\'an dari Surah Al-A\'raf hingga Al-\'Alaq dilengkapi audio tilawah qari; dan (5) Manfaat serta hikmah sujud dalam menumbuhkan sikap rendah hati (tawadhu\'), membersihkan jiwa dari kesombongan, meneladani ketaatan malaikat, dan menghinakan godaan setan.',
    studentActivities: [
      'Mempelajari materi interaktif teks buku pelajaran PAI Bab 4 dengan audio tilawah ayat sajdah dan doa ma\'tsur',
      'Mendengarkan tilawah dan menelusuri 15 ayat sajdah dalam mushaf Al-Qur\'an standar Kemenag RI',
      'Mengerjakan kuis skenario kasus HOTS untuk menguji pemahaman fikih tata cara sujud syukur, sahwi, dan tilawah',
      'Mempraktikkan tata cara sujud syukur setelah menerima kabar gembira dan sujud sahwi saat ragu rakaat'
    ],
    reflectionQuestions: [
      'Ketika kamu terhindar dari bahaya kecelakaan atau mendapat nilai ujian yang bagus, apakah kamu langsung bersujud syukur kepada Allah Swt.?',
      'Jika kamu sedang salat sendirian dan merasa ragu antara rakaat ketiga atau keempat, tindakan fikih apa yang kamu ambil?'
    ]
  },
  {
    id: 'k7-bab5',
    grade: 'Kelas VII',
    semester: 'Semester 1',
    chapterNumber: 5,
    title: 'Damai Negeriku: Meneladani Jejak Sejarah Islam Periode Madinah',
    cpElement: 'Sejarah Peradaban Islam (SPI)',
    mainDalil: 'Piagam Madinah (Mitsaq al-Madinah) 622 M',
    learningObjectives: [
      'Menceritakan sejarah peristiwa hijrah Nabi Muhammad SAW ke Madinah',
      'Menganalisis strategi dakwah Rasulullah SAW: membangun masjid, mempersaudarakan kaum Muhajirin-Anshar, dan Piagam Madinah',
      'Meneladani nilai persatuan, toleransi, dan cinta tanah air'
    ],
    keyTerms: ['Hijrah', 'Muhajirin', 'Anshar', 'Piagam Madinah', 'Persaudaraan Ukhuwah'],
    summary: 'Hijrah ke Madinah menandai babak baru peradaban Islam yang beradab dan berkeadilan. Nabi SAW mempersaudarakan kaum Muhajirin dan Anshar, mendirikan Masjid Nabawi sebagai pusat peradaban, dan merumuskan Piagam Madinah sebagai konstitusi tertulis pertama yang menjamin toleransi antarumat beragama.',
    studentActivities: [
      'Bermain peran (role play) musyawarah perumusan Piagam Madinah',
      'Membuat mind map hikmah persaudaraan Muhajirin dan Anshar'
    ],
    reflectionQuestions: [
      'Bagaimana caramu menjaga toleransi antarteman yang berbeda suku di sekolah?',
      'Sikap apa dari kaum Anshar yang paling ingin kamu terapkan dalam berteman?'
    ]
  },
  {
    id: 'k7-bab6',
    grade: 'Kelas VII',
    semester: 'Semester 2',
    chapterNumber: 6,
    title: 'Alam Semesta sebagai Tanda Kekuasaan Allah SWT',
    cpElement: 'Al-Qur\'an dan Hadis',
    mainDalil: 'Q.S. Al-Anbiya: 30 & Q.S. Al-A\'raf: 54',
    learningObjectives: [
      'Membaca dan menghafal ayat-ayat tentang penciptaan langit dan bumi',
      'Menghubungkan fenomena alam sains dengan kebesaran Allah SWT',
      'Membiasakan peduli lingkungan dan tidak merusak alam'
    ],
    keyTerms: ['Ayat Kauniyah', 'Kekuasaan Allah', 'Pelestarian Lingkungan', 'Tadabbur Alam'],
    summary: 'Al-Qur\'an mengajak manusia untuk berpikir kritis (tadabbur) melihat keajaiban alam semesta: pergantian siang dan malam, siklus air hujan, dan keanekaragaman hayati. Manusia diberi amanah sebagai khalifah di bumi untuk merawat alam, bukan mengeksploitasinya secara serakah.',
    studentActivities: [
      'Kegiatan bersih taman sekolah dan menanam pohon penghijauan',
      'Diskusi kelompok keterkaitan teori sains Big Bang dengan Q.S. Al-Anbiya: 30'
    ],
    reflectionQuestions: [
      'Sudahkah kamu membuang sampah pada tempatnya sebagai wujud iman?',
      'Bagaimana caramu menghemat penggunaan air dan listrik di rumah?'
    ]
  },
  {
    id: 'k7-bab7',
    grade: 'Kelas VII',
    semester: 'Semester 2',
    chapterNumber: 7,
    title: 'Mawas Diri dan Introspeksi dalam Menjalani Kehidupan (Iman kepada Malaikat)',
    cpElement: 'Akidah',
    mainDalil: 'Q.S. Al-Anbiya: 19-20 & Q.S. Qaf: 18',
    learningObjectives: [
      'Menjelaskan nama-nama sepuluh malaikat yang wajib diketahui beserta tugasnya',
      'Menunjukkan perilaku yang mencerminkan iman kepada malaikat',
      'Membiasakan introspeksi diri (muhasabah) setiap hari'
    ],
    keyTerms: ['Malaikat', 'Ghaib', 'Raqib dan Atid', 'Muhasabah', 'Mawas Diri'],
    summary: 'Malaikat adalah makhluk ghaib yang diciptakan dari cahaya (nur), selalu taat dan tidak pernah bermaksiat kepada Allah. Menyakini adanya malaikat Raqib dan Atid yang mencatat setiap ucapan dan perbuatan menumbuhkan rasa mawas diri dan motivasi beramal saleh.',
    studentActivities: [
      'Membuat tabel nama 10 malaikat, tugas, dan penerapan perilakunya',
      'Menulis refleksi muhasabah malam sebelum tidur'
    ],
    reflectionQuestions: [
      'Apakah kamu selalu ingat bahwa malaikat mencatat setiap ketikan jarimu di media sosial?',
      'Perbuatan baik apa yang sudah kamu tabung hari ini?'
    ]
  },
  {
    id: 'k7-bab8',
    grade: 'Kelas VII',
    semester: 'Semester 2',
    chapterNumber: 8,
    title: 'Menghindari Ghibah dan Menumbuhkan Sikap Tabayyun',
    cpElement: 'Akhlak',
    mainDalil: 'Q.S. Al-Hujurat: 6 & 12',
    learningObjectives: [
      'Memahami bahaya ghibah, fitnah, dan penyebaran berita bohong (hoaks)',
      'Menerapkan prinsip tabayyun (klarifikasi/cek fakta) sebelum membagikan informasi',
      'Membiasakan berkata baik atau diam'
    ],
    keyTerms: ['Ghibah', 'Tabayyun', 'Fitnah', 'Literasi Digital Islami', 'Menjaga Lisan'],
    summary: 'Ghibah diibaratkan seperti memakan daging bangkai saudara sendiri yang telah mati. Dalam era digital, sikap tabayyun (memeriksa kebenaran berita) adalah keharusan mutlak agar kita tidak menjadi penyebar hoaks yang merugikan orang lain.',
    studentActivities: [
      'Studi kasus analisis berita hoaks di media sosial dan langkah tabayyun-nya',
      'Membuat poster kampanye anti-ghibah di mading sekolah'
    ],
    reflectionQuestions: [
      'Pernahkah kamu membagikan informasi di grup chat tanpa mengecek kebenarannya?',
      'Apa yang kamu lakukan jika mendengar temanmu sedang membicarakan aib orang lain?'
    ]
  },
  {
    id: 'k7-bab9',
    grade: 'Kelas VII',
    semester: 'Semester 2',
    chapterNumber: 9,
    title: 'Ibadah Rukhsah: Kemudahan dari Allah dalam Beribadah',
    cpElement: 'Fikih',
    mainDalil: 'Q.S. Al-Baqarah: 185 & Hadits Shahih Muslim',
    learningObjectives: [
      'Memahami konsep rukhsah (keringanan) dalam syariat Islam',
      'Mempraktikkan salat jamak dan qashar bagi musafir',
      'Mempraktikkan tata cara tayamum dan salat bagi orang yang sakit'
    ],
    keyTerms: ['Rukhsah', '\'Azimah', 'Jamak Taqdim', 'Jamak Ta\'khir', 'Qashar', 'Tayamum'],
    summary: 'Agama Islam itu mudah dan tidak memberatkan umatnya. Ketika seseorang sedang bepergian jauh (safar) atau sakit, Allah memberikan rukhsah berupa salat jamak (menggabungkan dua waktu salat), qashar (meringkas 4 rakaat jadi 2 rakaat), serta tayamum dengan debu bersih ketika ketiadaan air.',
    studentActivities: [
      'Simulasi praktik salat jamak qashar saat perjalanan karya wisata sekolah',
      'Praktik tata cara tayamum sesuai sunnah'
    ],
    reflectionQuestions: [
      'Apakah kamu memanfaatkan fasilitas rukhsah saat mudik atau bepergian jauh?',
      'Mengapa sakit bukan alasan untuk meninggalkan salat fardu?'
    ]
  },
  {
    id: 'k7-bab10',
    grade: 'Kelas VII',
    semester: 'Semester 2',
    chapterNumber: 10,
    title: 'Andalusia: Kejayaan Peradaban Islam di Barat (711 - 1492 M)',
    cpElement: 'Sejarah Peradaban Islam (SPI)',
    mainDalil: 'Sejarah Thariq bin Ziyad & Cordoba',
    learningObjectives: [
      'Meneladani semangat Thariq bin Ziyad dalam penaklukan Andalusia',
      'Mengidentifikasi kemajuan ilmu pengetahuan di Cordoba dan Granada',
      'Menumbuhkan semangat belajar dan cinta literasi ilmiah'
    ],
    keyTerms: ['Andalusia', 'Cordoba', 'Thariq bin Ziyad', 'Perpustakaan Cordoba', 'Akulturasi Keilmuan'],
    summary: 'Andalusia (Spanyol) pernah menjadi mercusuar peradaban dunia di bawah pemerintahan Islam selama hampir 8 abad. Kota Cordoba memiliki universitas ternama, rumah sakit modern, dan perpustakaan megah yang melahirkan tokoh-tokoh besar seperti Ibnu Rusyd (Averroes) dan Az-Zahrawi (bapak bedah modern).',
    studentActivities: [
      'Menulis esai singkat tentang kontribusi kedokteran Az-Zahrawi bagi dunia modern',
      'Membuat peta rute perjalanan Thariq bin Ziyad melintasi Selat Gibraltar'
    ],
    reflectionQuestions: [
      'Inspirasi apa yang bisa kamu ambil dari semangat literasi para ilmuwan Andalusia?',
      'Bagaimana caramu menghidupkan budaya membaca buku di perpustakaan sekolah?'
    ]
  },

  // ========================== KELAS VIII ==========================
  {
    id: 'k8-bab1',
    grade: 'Kelas VIII',
    semester: 'Semester 1',
    chapterNumber: 1,
    title: 'Inspirasi Al-Qur\'an: Melestarikan Alam Menjaga Kehidupan',
    cpElement: 'Al-Qur\'an dan Hadis',
    mainDalil: 'Q.S. Ar-Rum: 41 & Q.S. Ibrahim: 32',
    learningObjectives: [
      'Membaca Q.S. Ar-Rum: 41 dengan tartil menerapkan hukum tajwid ra dan lam jalalah',
      'Menganalisis sebab-sebab kerusakan lingkungan akibat ulah tangan manusia',
      'Berpartisipasi aktif dalam aksi nyata konservasi lingkungan di sekolah dan rumah'
    ],
    keyTerms: ['Fasad', 'Kelestarian Alam', 'Tajwid Ra', 'Tafkhim & Tarqiq', 'Keadilan Ekologis'],
    summary: 'Kerusakan di darat dan di laut terjadi akibat keserakahan manusia yang mengeksploitasi alam tanpa memikirkan keseimbangan ekosistem. Islam mewajibkan setiap muslim menjaga kelestarian air, tanah, dan pepohonan demi kelangsungan hidup generasi mendatang.',
    studentActivities: [
      'Kampanye pengurangan sampah plastik di kantin sekolah',
      'Praktik pilah sampah organik dan anorganik di kelas'
    ],
    reflectionQuestions: [
      'Apa kontribusi nyata yang sudah kamu lakukan untuk menjaga lingkungan sekolah?',
      'Bagaimana caramu menghemat penggunaan kertas dan plastik?'
    ]
  },
  {
    id: 'k8-bab2',
    grade: 'Kelas VIII',
    semester: 'Semester 1',
    chapterNumber: 2,
    title: 'Meyakini Kitab-Kitab Allah: Generasi Pecinta Al-Qur\'an yang Toleran',
    cpElement: 'Akidah',
    mainDalil: 'Q.S. Al-Maidah: 48 & Q.S. Al-Baqarah: 136',
    learningObjectives: [
      'Memahami nama-nama kitab Allah (Taurat, Zabur, Injil, Al-Qur\'an) beserta nabi penerimanya',
      'Menjadikan Al-Qur\'an sebagai muhaimin (penyempurna dan penguji) kitab-kitab sebelumnya',
      'Mengembangkan sikap tasamuh (toleransi) terhadap pemeluk agama lain'
    ],
    keyTerms: ['Kitabullah', 'Suhuf', 'Taurat', 'Zabur', 'Injil', 'Al-Qur\'an Muhaimin'],
    summary: 'Beriman kepada kitab-kitab Allah merupakan rukun iman ketiga. Al-Qur\'an diturunkan sebagai penyempurna seluruh wahyu terdahulu. Orang yang beriman kepada Al-Qur\'an senantiasa menghormati keberagaman dan hidup rukun berdampingan dengan sesama warga negara.',
    studentActivities: [
      'Membuat bagan komparasi 4 kitab suci Allah beserta nabi penerimanya',
      'Tadarus tematik menghafal ayat toleransi beragama'
    ],
    reflectionQuestions: [
      'Bagaimana caramu membuktikan bahwa kamu mencintai Al-Qur\'an dalam kehidupan sehari-hari?',
      'Sikap apa yang harus kamu tunjukkan kepada tetangga yang berbeda keyakinan?'
    ]
  },
  {
    id: 'k8-bab3',
    grade: 'Kelas VIII',
    semester: 'Semester 1',
    chapterNumber: 3,
    title: 'Menjadi Pribadi Berintegritas dengan Sifat Amanah dan Jujur',
    cpElement: 'Akhlak',
    mainDalil: 'Q.S. Al-Anfal: 27 & Q.S. Al-Ahzab: 70',
    learningObjectives: [
      'Menjelaskan pengertian dan macam-macam amanah (kepada Allah, sesama, dan diri sendiri)',
      'Menunjukkan perilaku jujur dalam perkataan, perbuatan, dan pelaksanaan tugas',
      'Membangun budaya antikorupsi sejak dini di lingkungan sekolah'
    ],
    keyTerms: ['Amanah', 'Siddiq', 'Integritas', 'Antikorupsi', 'Tanggung Jawab'],
    summary: 'Amanah dan kejujuran adalah dua pilar integritas seorang muslim. Mengkhianati amanah merupakan tanda kemunafikan. Kejujuran menuntun pada kebaikan hidup, ketenangan batin, dan kepercayaan dari orang lain.',
    studentActivities: [
      'Simulasi pengelolaan kas kelas secara transparan dan akuntabel',
      'Diskusi studi kasus godaan menyontek saat ujian sekolah'
    ],
    reflectionQuestions: [
      'Apakah kamu selalu mengembalikan barang pinjaman teman tepat waktu?',
      'Bagaimana kamu menjaga rahasia yang dipercayakan teman kepadamu?'
    ]
  },
  {
    id: 'k8-bab4',
    grade: 'Kelas VIII',
    semester: 'Semester 1',
    chapterNumber: 4,
    title: 'Salat Gerhana, Istisqa, dan Jenazah: Ibadah Sosial dan Khusus',
    cpElement: 'Fikih',
    mainDalil: 'Q.S. Fussilat: 37 & Hadits Shahih Bukhari',
    learningObjectives: [
      'Menjelaskan ketentuan dan tata cara salat gerhana bulan (khusuf) dan gerhana matahari (kusuf)',
      'Menjelaskan tata cara salat meminta hujan (istisqa)',
      'Mempraktikkan tata cara perawatan jenazah dan salat jenazah (fardu kifayah)'
    ],
    keyTerms: ['Salat Kusuf & Khusuf', 'Salat Istisqa', 'Fardu Kifayah', 'Salat Jenazah', 'Empat Takbir'],
    summary: 'Islam mensyariatkan salat sunnah khusus saat terjadi fenomena alam agar manusia mengingat kebesaran Allah. Ketika ada muslim yang wafat, kewajiban fardu kifayah adalah memandikan, mengafani, menyalatkan (dengan 4 takbir tanpa ruku dan sujud), serta menguburkannya.',
    studentActivities: [
      'Praktik simulasi salat jenazah laki-laki dan perempuan di kelas',
      'Menghafal doa takbir ketiga dan keempat dalam salat jenazah'
    ],
    reflectionQuestions: [
      'Mengapa hukum mengurus jenazah muslim berstatus fardu kifayah?',
      'Pelajaran apa yang kamu dapatkan saat mengingat kematian dalam salat jenazah?'
    ]
  },
  {
    id: 'k8-bab5',
    grade: 'Kelas VIII',
    semester: 'Semester 1',
    chapterNumber: 5,
    title: 'Meneladani Masa Keemasan Dinasti Abbasiyah di Baghdad',
    cpElement: 'Sejarah Peradaban Islam (SPI)',
    mainDalil: 'Sejarah Baitul Hikmah & Khalifah Harun ar-Rasyid',
    learningObjectives: [
      'Menjelaskan sejarah berdirinya Dinasti Abbasiyah di Baghdad (750 - 1258 M)',
      'Mengidentifikasi peran perpustakaan dan pusat riset Baitul Hikmah',
      'Meneladani kecintaan para khalifah dan ilmuwan terhadap sains dan riset'
    ],
    keyTerms: ['Dinasti Abbasiyah', 'Baitul Hikmah', 'Harun ar-Rasyid', 'Al-Ma\'mun', 'Zaman Keemasan Islam'],
    summary: 'Dinasti Abbasiyah mencapai puncak keemasan (The Golden Age of Islam) di bawah kepemimpinan Harun ar-Rasyid dan Al-Ma\'mun. Lembaga riset Baitul Hikmah menjadi pusat penerjemahan karya-karya dunia, astronomi, matematika, dan kedokteran yang mencerahkan peradaban manusia.',
    studentActivities: [
      'Membuat mading biografi tokoh ilmuwan era Abbasiyah',
      'Presentasi kelompok perkembangan ilmu kedokteran dan matematika Islam'
    ],
    reflectionQuestions: [
      'Nilai apa yang bisa ditiru oleh generasi muda saat ini dari Baitul Hikmah?',
      'Bagaimana peran ilmu pengetahuan dalam memajukan peradaban suatu bangsa?'
    ]
  },
  {
    id: 'k8-bab6',
    grade: 'Kelas VIII',
    semester: 'Semester 2',
    chapterNumber: 6,
    title: 'Meneladani Sifat Mulia Rasul-Rasul Allah SWT',
    cpElement: 'Akidah',
    mainDalil: 'Q.S. Al-An\'am: 84-86 & Q.S. Al-Ahzab: 21',
    learningObjectives: [
      'Menjelaskan sifat wajib (Siddiq, Amanah, Tabligh, Fathonah) dan sifat mustahil bagi rasul',
      'Menganalisis mukjizat para rasul Ulul Azmi (Nuh, Ibrahim, Musa, Isa, Muhammad SAW)',
      'Meneladani keteguhan dan kesabaran para nabi dalam menghadapi rintangan'
    ],
    keyTerms: ['Rasulullah', 'Sifat Wajib & Mustahil', 'Ulul Azmi', 'Mukjizat', 'Uswatun Hasanah'],
    summary: 'Rasul adalah manusia pilihan yang menerima wahyu dan berkewajiban menyampaikannya kepada umat. Lima rasul bergelar Ulul Azmi memiliki ketabahan luar biasa dalam berdakwah. Meneladani sifat Siddiq, Amanah, Tabligh, dan Fathonah menjadikan siswa cerdas dan berkarakter mulia.',
    studentActivities: [
      'Membuat tabel sifat wajib, mustahil, dan jaiz bagi rasul beserta artinya',
      'Diskusi kisah ketabahan Nabi Nuh AS dan Nabi Ibrahim AS'
    ],
    reflectionQuestions: [
      'Sifat rasul mana yang paling menantang untuk kamu terapkan di sekolah?',
      'Bagaimana cara melatih sifat fathonah (cerdas) dalam belajar sehari-hari?'
    ]
  },
  {
    id: 'k8-bab7',
    grade: 'Kelas VIII',
    semester: 'Semester 2',
    chapterNumber: 7,
    title: 'Berbakti dan Taat kepada Orang Tua dan Guru',
    cpElement: 'Akhlak',
    mainDalil: 'Q.S. Al-Isra: 23-24 & Q.S. Luqman: 14',
    learningObjectives: [
      'Memahami kewajiban birrul walidain dan menghormati bapak/ibu guru',
      'Menerapkan adab berbicara santun dan tidak membentak orang tua',
      'Mendoakan orang tua dan guru yang masih hidup maupun yang telah wafat'
    ],
    keyTerms: ['Birrul Walidain', 'Adab kepada Guru', 'Mendoakan Orang Tua', 'Sopan Santun'],
    summary: 'Rida Allah tergantung pada rida kedua orang tua, dan murka Allah tergantung pada murka orang tua. Guru adalah orang tua kedua di sekolah yang membimbing rohani dan keilmuan. Menghormati guru adalah kunci keberkahan dan kemudahan dalam memahami pelajaran.',
    studentActivities: [
      'Menulis surat terima kasih penuh kasih kepada ayah dan ibu',
      'Mempraktikkan adab mencium tangan dan menyapa guru dengan hormat'
    ],
    reflectionQuestions: [
      'Pernahkah kamu berkata kasar kepada orang tuamu? Sudahkah kamu meminta maaf?',
      'Bagaimana caramu memuliakan guru yang telah sabar mengajarimu di kelas?'
    ]
  },
  {
    id: 'k8-bab8',
    grade: 'Kelas VIII',
    semester: 'Semester 2',
    chapterNumber: 8,
    title: 'Menghindari Minuman Keras, Judi, dan Pertengkaran',
    cpElement: 'Akhlak',
    mainDalil: 'Q.S. Al-Maidah: 90-91',
    learningObjectives: [
      'Menganalisis bahaya khamar (miras), narkoba, dan judi bagi kesehatan fisik dan masa depan',
      'Menjelaskan strategi menghindari tawuran dan perkelahian antarpelajar',
      'Membangun pertemanan yang positif dan saling menguatkan'
    ],
    keyTerms: ['Khamar', 'Maysir (Judi)', 'Rijsun', 'Sayithan', 'Anti-Tawuran'],
    summary: 'Minuman keras dan judi adalah perbuatan keji dari amalan setan yang menimbulkan permusuhan dan kebencian antarsesama serta melalaikan dari mengingat Allah. Menjauhi pergaulan bebas dan narkoba adalah benteng utama menjaga masa depan pemuda bangsa.',
    studentActivities: [
      'Membuat kampanye poster kreatif: "Generasi Berprestasi Tanpa Narkoba dan Tawuran"',
      'Diskusi panel mengenai bahaya judi online (judol) di kalangan remaja'
    ],
    reflectionQuestions: [
      'Apa yang akan kamu lakukan jika diajak oleh teman mencoba rokok atau miras?',
      'Bagaimana caramu mengelola emosi agar tidak terlibat perkelahian di sekolah?'
    ]
  },
  {
    id: 'k8-bab9',
    grade: 'Kelas VIII',
    semester: 'Semester 2',
    chapterNumber: 9,
    title: 'Menumbuhkan Kepedulian Sosial melalui Sedekah, Hibah, dan Hadiah',
    cpElement: 'Fikih',
    mainDalil: 'Q.S. Al-Baqarah: 261 & Hadits Riwayat Bukhari',
    learningObjectives: [
      'Menjelaskan perbedaan sedekah, hibah, dan hadiah',
      'Menganalisis hikmah dan manfaat filantropi Islam bagi kesejahteraan masyarakat',
      'Membiasakan gemar berbagi dan bersedekah secara ikhlas'
    ],
    keyTerms: ['Sedekah', 'Hibah', 'Hadiah', 'Infaq', 'Filantropi Islam', 'Ukhuwah Insaniyah'],
    summary: 'Sedekah adalah pemberian sukarela mengharap pahala Allah. Hibah adalah pemberian sukarela atas dasar kasih sayang. Hadiah diberikan sebagai bentuk penghargaan atau penghormatan. Saling memberi hadiah menumbuhkan cinta kasih dan mengikis kedengkian di dalam hati.',
    studentActivities: [
      'Program Jumat Berkah: Berbagi makanan atau alat tulis dengan teman yang membutuhkan',
      'Membuat daftar simulasi pembagian zakat, infak, dan sedekah'
    ],
    reflectionQuestions: [
      'Bagaimana perasaanmu ketika berbagi kebahagiaan dengan orang yang kurang mampu?',
      'Apakah kamu sudah membiasakan menyisihkan uang jajan untuk kotak infak?'
    ]
  },
  {
    id: 'k8-bab10',
    grade: 'Kelas VIII',
    semester: 'Semester 2',
    chapterNumber: 10,
    title: 'Ilmuwan Muslim dan Kontribusinya bagi Dunia Modern',
    cpElement: 'Sejarah Peradaban Islam (SPI)',
    mainDalil: 'Biografi Ibnu Sina, Al-Khawarizmi, dan Al-Biruni',
    learningObjectives: [
      'Menganalisis karya Ibnu Sina (Al-Qanun fi at-Tibb) dalam dunia kedokteran',
      'Menganalisis penemuan angka nol dan aljabar oleh Al-Khawarizmi',
      'Menumbuhkan rasa bangga dan percaya diri sebagai generasi muslim pembelajar'
    ],
    keyTerms: ['Ibnu Sina (Avicenna)', 'Al-Khawarizmi', 'Al-Biruni', 'Aljabar', 'Metode Ilmiah'],
    summary: 'Sejarah membuktikan bahwa ajaran Islam mendorong kemajuan sains dan teknologi. Al-Khawarizmi menemukan aljabar dan angka nol yang menjadi dasar komputasi komputer dan algoritma modern. Ibnu Sina menulis ensiklopedia kedokteran yang menjadi rujukan Eropa selama ratusan tahun.',
    studentActivities: [
      'Proyek infografis tokoh ilmuwan muslim dan bidang penemuannya',
      'Kuis interaktif sains Islam'
    ],
    reflectionQuestions: [
      'Bagaimana penemuan Al-Khawarizmi memengaruhi teknologi ponsel dan komputer hari ini?',
      'Cita-cita apa yang ingin kamu raih untuk memberi kontribusi bagi umat dan bangsa?'
    ]
  },

  // ========================== KELAS IX ==========================
  {
    id: 'k9-bab1',
    grade: 'Kelas IX',
    semester: 'Semester 1',
    chapterNumber: 1,
    title: 'Meraih Ketenangan Jiwa dengan Meyakini Hari Akhir',
    cpElement: 'Akidah',
    mainDalil: 'Q.S. Al-Hajj: 7 & Q.S. Az-Zalzalah: 1-8',
    learningObjectives: [
      'Menjelaskan tahapan peristiwa Hari Akhir (Kiamat Sugra, Kiamat Kubra, Ba\'ats, Mahsyar, Hisab, Mizan, Shirath, Surga-Neraka)',
      'Menganalisis tanda-tanda datangnya hari kiamat',
      'Menumbuhkan sikap mawas diri dan memperbanyak bekal amal saleh'
    ],
    keyTerms: ['Hari Akhir (Kiamat)', 'Kiamat Sugra & Kubra', 'Yaumul Ba\'ats', 'Yaumul Hisab', 'Mizan'],
    summary: 'Hari akhir adalah hari berakhirnya seluruh kehidupan di alam semesta. Setiap manusia akan dibangkitkan dan mempertanggungjawabkan segala perbuatannya. Menyakini hari akhir menjadikan hidup terarah, tidak terbuai gemerlap dunia, dan termotivasi melakukan kebajikan.',
    studentActivities: [
      'Membuat linimasa tahapan kehidupan manusia dari alam kubur hingga surga/neraka',
      'Tadarus dan telaah makna Q.S. Al-Qari\'ah dan Q.S. Az-Zalzalah'
    ],
    reflectionQuestions: [
      'Bekal apa yang paling penting untuk kamu siapkan menyongsong hari akhir?',
      'Bagaimana keyakinan hari akhir mengubah cara pandangmu terhadap tugas dan ujian sekolah?'
    ]
  },
  {
    id: 'k9-bab2',
    grade: 'Kelas IX',
    semester: 'Semester 1',
    chapterNumber: 2,
    title: 'Menggapai Rida Allah dengan Bersyukur: Akikah dan Kurban',
    cpElement: 'Fikih',
    mainDalil: 'Q.S. Al-Kautsar: 1-2 & Q.S. Ash-Shaffat: 102',
    learningObjectives: [
      'Menjelaskan ketentuan, hukum, dan tata cara akikah bagi bayi baru lahir',
      'Menjelaskan ketentuan hewan dan waktu penyembelihan kurban (Iduladha dan Hari Tasyrik)',
      'Meneladani keikhlasan Nabi Ibrahim AS dan Nabi Ismail AS'
    ],
    keyTerms: ['Akikah', 'Kurban', 'Hewan Kurban', 'Hari Tasyrik', 'Keteladanan Nabi Ibrahim'],
    summary: 'Akikah merupakan ungkapan syukur orang tua atas kelahiran buah hati dengan menyembelih kambing (2 ekor untuk anak laki-laki, 1 ekor untuk anak perempuan). Kurban adalah ibadah menyembelih hewan ternak pada tanggal 10-13 Dzulhijjah untuk mendekatkan diri kepada Allah dan berbagi daging kepada kaum dhuafa.',
    studentActivities: [
      'Membuat tabel perbandingan perbedaan antara akikah dan kurban',
      'Menulis refleksi keteladanan Nabi Ismail AS yang patuh kepada perintah Allah dan orang tua'
    ],
    reflectionQuestions: [
      'Pernahkah kamu berpartisipasi dalam panitia pembagian daging kurban di lingkunganmu?',
      'Bagaimana caramu menerapkan nilai pengorbanan Nabi Ibrahim dalam belajar?'
    ]
  },
  {
    id: 'k9-bab3',
    grade: 'Kelas IX',
    semester: 'Semester 1',
    chapterNumber: 3,
    title: 'Menata Hati dengan Berbaik Sangka (Husnuzhan) dan Menjauhi Fitnah',
    cpElement: 'Akhlak',
    mainDalil: 'Q.S. Al-Hujurat: 12 & Hadits Qudsi Shahih Bukhari',
    learningObjectives: [
      'Memahami macam-macam husnuzhan (kepada Allah, sesama manusia, dan diri sendiri)',
      'Menghindari su\'uzhan (buruk sangka), ghibah, dan namimah (adu domba)',
      'Menumbuhkan optimisme dan percaya diri dalam menghadapi ujian kelulusan'
    ],
    keyTerms: ['Husnuzhan', 'Su\'uzhan', 'Namimah', 'Optimisme', 'Kesehatan Mental Islami'],
    summary: 'Husnuzhan kepada Allah melahirkan optimisme bahwa setiap takdir dan cobaan pasti mengandung hikmah terbaik. Berbaik sangka kepada teman menjauhkan dari prasangka negatif dan kecurigaan yang merusak tali silaturahmi.',
    studentActivities: [
      'Bermain peran menanggapi prasangka buruk dengan klarifikasi santun',
      'Menulis kata-kata afirmasi positif husnuzhan kepada diri sendiri'
    ],
    reflectionQuestions: [
      'Bagaimana caramu tetap berprasangka baik kepada Allah saat rencanamu belum terwujud?',
      'Apa yang kamu lakukan untuk membangun rasa percaya diri dalam belajar?'
    ]
  },
  {
    id: 'k9-bab4',
    grade: 'Kelas IX',
    semester: 'Semester 1',
    chapterNumber: 4,
    title: 'Sejarah Masuk dan Perkembangan Islam di Nusantara',
    cpElement: 'Sejarah Peradaban Islam (SPI)',
    mainDalil: 'Teori Gujarat, Makkah, Persia, dan China',
    learningObjectives: [
      'Menganalisis 4 teori masuknya Islam ke Nusantara (Makkah, Gujarat, Persia, China)',
      'Menjelaskan jalur penyebaran Islam (perdagangan, perkawinan, pendidikan, tasawuf, dan kesenian)',
      'Menghargai kearifan para penyebar Islam yang berdakwah tanpa kekerasan'
    ],
    keyTerms: ['Teori Makkah', 'Jalur Perdagangan Rempah', 'Akulturasi Budaya', 'Dakwah Damai', 'Nusantara'],
    summary: 'Islam masuk ke Indonesia dengan cara damai tanpa pertumpahan darah melalui jalur perdagangan maritim, perkawinan, pendidikan pesantren, dan kesenian tradisional. Pendekatan kultural yang santun membuat ajaran Islam diterima dengan tangan terbuka oleh masyarakat pribumi.',
    studentActivities: [
      'Membuat peta jalur pelayaran pedagang muslim ke pelabuhan-pelabuhan Nusantara',
      'Debat ilmiah mengenai kelebihan dan bukti masing-masing teori masuknya Islam'
    ],
    reflectionQuestions: [
      'Mengapa dakwah dengan metode damai dan santun lebih mudah diterima masyarakat?',
      'Bagaimana caramu merawat warisan budaya Islam di daerah Lampung/Sumatera?'
    ]
  },
  {
    id: 'k9-bab5',
    grade: 'Kelas IX',
    semester: 'Semester 1',
    chapterNumber: 5,
    title: 'Meneladani Perjuangan Ulama Nusantara dan Kerajaan Islam',
    cpElement: 'Sejarah Peradaban Islam (SPI)',
    mainDalil: 'Wali Songo, Kesultanan Demak, Aceh Darussalam, dan Samudera Pasai',
    learningObjectives: [
      'Meneladani strategi dakwah Wali Songo di Tanah Jawa',
      'Menganalisis peranan kerajaan Islam (Samudera Pasai, Aceh, Demak, Mataram, Banten, Gowa-Tallo, Ternate-Tidore)',
      'Menumbuhkan jiwa patriotisme dan nasionalisme membela tanah air'
    ],
    keyTerms: ['Wali Songo', 'Sunan Kalijaga', 'Samudera Pasai', 'Kesultanan Demak', 'Jihad Bela Negeri'],
    summary: 'Ulama Wali Songo dan raja-raja muslim Nusantara memainkan peran ganda: menyebarkan tauhid serta memimpin perjuangan mengusir penjajah bangsa asing. Kesenian seperti gamelan, tembang, dan wayang disisipi nilai-nilai Islam sebagai media pembelajaran rakyat.',
    studentActivities: [
      'Membuat kliping biografi 9 tokoh Wali Songo beserta metode dakwahnya',
      'Menyanyikan dan mendalami makna lirik tembang Ilir-Ilir ciptaan Sunan Kalijaga'
    ],
    reflectionQuestions: [
      'Karakter apa dari Sunan Kalijaga yang paling menginspirasimu dalam berkarya?',
      'Bagaimana hubungan antara keimanan dengan rasa cinta tanah air (hubbul wathan minal iman)?'
    ]
  },
  {
    id: 'k9-bab6',
    grade: 'Kelas IX',
    semester: 'Semester 2',
    chapterNumber: 6,
    title: 'Harmoni dalam Keberagaman: Mengembangkan Sikap Toleransi (Tasamuh)',
    cpElement: 'Al-Qur\'an dan Hadis',
    mainDalil: 'Q.S. Al-Hujurat: 13 & Q.S. Al-Kafirun: 1-6',
    learningObjectives: [
      'Membaca dan menghafal Q.S. Al-Hujurat: 13 dengan kaidah tajwid yang benar',
      'Menganalisis konsep lita\'arafu (saling mengenal dan menghargai) dalam bingkai kebinekaan',
      'Mempraktikkan sikap moderasi beragama dan toleransi tanpa mencampuradukkan akidah'
    ],
    keyTerms: ['Tasamuh', 'Kebinekaan', 'Lita\'arafu', 'Moderasi Beragama', 'Ukhuwah Wathaniyah'],
    summary: 'Allah SWT menciptakan manusia bersuku-suku dan berbangsa-bangsa agar saling mengenal dan bekerja sama dalam kebaikan, bukan untuk saling bermusuhan. Orang yang paling mulia di sisi Allah adalah orang yang paling bertakwa.',
    studentActivities: [
      'Menyusun piagam deklarasi kerukunan pelajar antarkelas di sekolah',
      'Bedah makna toleransi sejati dalam Q.S. Al-Kafirun'
    ],
    reflectionQuestions: [
      'Bagaimana caramu berteman akrab dengan teman yang berbeda suku dan agama tanpa mengorbankan akidahmu?',
      'Apa makna moderasi beragama bagi generasi penerus bangsa?'
    ]
  },
  {
    id: 'k9-bab7',
    grade: 'Kelas IX',
    semester: 'Semester 2',
    chapterNumber: 7,
    title: 'Meyakini Qadha dan Qadar: Menumbuhkan Semangat Ikhtiar dan Tawakal',
    cpElement: 'Akidah',
    mainDalil: 'Q.S. Ar-Ra\'d: 11 & Q.S. Al-Hadid: 22-23',
    learningObjectives: [
      'Menjelaskan pengertian qadha dan qadar (takdir mu\'allaq dan takdir mubram)',
      'Menganalisis hubungan antara takdir, ikhtiar kerja keras, doa, dan tawakal',
      'Menghindari sikap putus asa dan sombong ketika meraih kesuksesan'
    ],
    keyTerms: ['Qadha', 'Qadar', 'Takdir Mu\'allaq', 'Takdir Mubram', 'Ikhtiar', 'Tawakal'],
    summary: 'Qadha adalah ketetapan Allah sejak zaman azali, sedangkan qadar adalah perwujudan ketetapan tersebut dalam kehidupan nyata. Takdir mu\'allaq dapat diubah dengan doa dan ikhtiar sungguh-sungguh, seperti kepintaran dan kesehatan. Meyakini takdir melahirkan jiwa pemberani dan pantang menyerah.',
    studentActivities: [
      'Membuat diagram alur hubungan doa, ikhtiar, tawakal, dan takdir',
      'Menulis kisah inspiratif tokoh yang berhasil mengubah nasibnya melalui belajar tekun'
    ],
    reflectionQuestions: [
      'Jika takdir sudah ditentukan, mengapa kita tetap wajib belajar dan berikhtiar?',
      'Bagaimana sikapmu ketika hasil ujian belum sesuai dengan harapan yang kamu targetkan?'
    ]
  },
  {
    id: 'k9-bab8',
    grade: 'Kelas IX',
    semester: 'Semester 2',
    chapterNumber: 8,
    title: 'Membangun Generasi Sehat: Menjauhi Pergaulan Bebas dan Pornografi',
    cpElement: 'Akhlak',
    mainDalil: 'Q.S. Al-Isra: 32 & Q.S. An-Nur: 30-31',
    learningObjectives: [
      'Menganalisis dampak buruk pergaulan bebas dan pornografi terhadap kesehatan otak dan masa depan',
      'Menjaga pandangan (gadhul bashar) dan adab berbusana menutup aurat',
      'Memanfaatkan internet dan teknologi informasi secara sehat dan produktif'
    ],
    keyTerms: ['Ghadhul Bashar', 'Menutup Aurat', 'Internet Sehat', 'Menjaga Kehormatan Diri'],
    summary: 'Al-Qur\'an tegas memerintahkan: "Janganlah kamu mendekati zina, sesungguhnya zina itu adalah suatu perbuatan yang keji dan suatu jalan yang buruk." Remaja muslim harus pandai menjaga pergaulan, menundukkan pandangan dari konten pornografi, dan menyibukkan diri dengan ekstrakurikuler serta olahraga positif.',
    studentActivities: [
      'Ikrar bersama anti-pornografi dan deklarasi internet sehat di kelas',
      'Diskusi dampak kecanduan pornografi terhadap kerusakan prefrontal cortex (PFC) otak'
    ],
    reflectionQuestions: [
      'Langkah apa yang kamu ambil ketika konten tidak pantas muncul di linimasa media sosialmu?',
      'Bagaimana caramu menjaga kehormatan diri dalam bergaul dengan lawan jenis?'
    ]
  },
  {
    id: 'k9-bab9',
    grade: 'Kelas IX',
    semester: 'Semester 2',
    chapterNumber: 9,
    title: 'Praktik Muamalah yang Halal dan Berkah',
    cpElement: 'Fikih',
    mainDalil: 'Q.S. Al-Baqarah: 275 & Hadits Riwayat Baihaqi',
    learningObjectives: [
      'Menjelaskan rukun dan syarat jual beli yang sah menurut syariat Islam',
      'Mengidentifikasi macam-macam khiyar (khiyar majelis, syarat, dan aib)',
      'Menghindari transaksi yang mengandung riba, penipuan (gharar), dan kecurangan timbangan'
    ],
    keyTerms: ['Muamalah', 'Jual Beli Halal', 'Khiyar', 'Larangan Riba', 'Kejujuran Perniagaan'],
    summary: 'Allah menghalalkan jual beli dan mengharamkan riba. Dalam berbisnis dan bertransaksi, Islam menekankan prinsip suka sama suka (an-taradin), transparansi barang, dan hak khiyar (memilih melanjutkan atau membatalkan akad demi keadilan kedua pihak).',
    studentActivities: [
      'Simulasi bazar mini kewirausahaan syariah di halaman sekolah',
      'Praktik menghitung timbangan dan membedakan transaksi riba dan bagi hasil'
    ],
    reflectionQuestions: [
      'Mengapa kejujuran penjual sangat dipuji dan dijanjikan bersama para nabi di surga?',
      'Bagaimana adab jual beli online agar terhindar dari penipuan?'
    ]
  },
  {
    id: 'k9-bab10',
    grade: 'Kelas IX',
    semester: 'Semester 2',
    chapterNumber: 10,
    title: 'Tradisi dan Seni Budaya Islam Nusantara',
    cpElement: 'Sejarah Peradaban Islam (SPI)',
    mainDalil: 'Tradisi Sekaten, Grebeg, Halalbihalal, dan Kosidah',
    learningObjectives: [
      'Mengidentifikasi ragam seni dan tradisi Islam di Nusantara (Halalbihalal, Sekaten, Dugderan, Kasidah)',
      'Menilai kesesuaian tradisi lokal dengan nilai-nilai tauhid dan syariat Islam',
      'Melestarikan seni budaya Islam sebagai identitas kebangsaan'
    ],
    keyTerms: ['Tradisi Islam', 'Halalbihalal', 'Sekaten', 'Kaligrafi', 'Kearifan Lokal'],
    summary: 'Tradisi seperti Halalbihalal pasca Idulfitri adalah produk kearifan ulama Indonesia yang mempererat tali silaturahmi bangsa. Seni kaligrafi, arsitektur masjid beratap tumpang, dan musik kasidah/rebana memperkaya khazanah kebudayaan nasional yang bernafaskan nilai-nilai ketuhanan.',
    studentActivities: [
      'Menulis laporan tentang tradisi keislaman khas daerah masing-masing di Lampung/Sumatera',
      'Lomba seni kaligrafi ayat Al-Qur\'an antarkelas'
    ],
    reflectionQuestions: [
      'Tradisi Islam apa yang paling berkesan bagimu saat perayaan Idulfitri?',
      'Bagaimana caramu melestarikan seni budaya Islam di tengah tren budaya barat?'
    ]
  }
];
