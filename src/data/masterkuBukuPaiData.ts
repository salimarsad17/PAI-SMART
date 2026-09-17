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
    title: 'Merefleksikan Sejarah dan Peran Kekhalifahan Islam Paska Khulafaur Rasyidin: Bani Umayyah Periode Damaskus (41–132 H / 661–750 M)',
    cpElement: 'Sejarah Peradaban Islam (SPI)',
    mainDalil: 'HR. Bukhari No. 2704 (\'Amul Jama\'ah) & Q.S. An-Nahl: 90',
    learningObjectives: [
      'Menjelaskan latar belakang berdirinya Daulah Bani Umayyah di Damaskus dan peristiwa rekonsiliasi \'Amul Jama\'ah (41 H)',
      'Menganalisis biografi, karakter kepemimpinan, dan kebijakan pokok 6 khalifah penting Bani Umayyah Damaskus (Muawiyah, Marwan, Abdul Malik, Al-Walid, Umar bin Abdul Aziz, Hisyam)',
      'Mengidentifikasi kemajuan peradaban dalam bidang administrasi pemerintahan, militer 3 benua, arsitektur monumental, dan kodifikasi hadis pertama',
      'Menganalisis lima faktor kritis penyebab kemunduran dan keruntuhan Daulah Umayyah Damaskus pada tahun 132 H / 750 M',
      'Mengambil hikmah dan ibrah keteladanan kepemimpinan adil, persatuan umat, serta bahaya fanatisme golongan (\'ashabiyah) dalam kehidupan sehari-hari'
    ],
    keyTerms: [
      'Bani Umayyah Damaskus',
      '\'Amul Jama\'ah (41 H)',
      'Muawiyah bin Abi Sufyan',
      'Abdul Malik bin Marwan',
      'Umar bin Abdul Aziz',
      'Ta\'rib ad-Diwan',
      'Kodifikasi Hadis (Tadwin)',
      'Pertempuran Sungai Zab'
    ],
    hasFullTextbook: true,
    summary: 'Materi Bab 5 Sejarah Peradaban Islam (SPI) PAI Kelas VII Semester 1 membahas secara komprehensif: (1) Sejarah berdirinya Daulah Umayyah pasca-wafatnya Khalifah Ali r.a., peristiwa \'Amul Jama\'ah 41 H ketika Sayyidina Hasan r.a. menyerahkan mandat kepada Muawiyah demi persatuan umat, pemindahan ibukota ke Damaskus, dan transformasi sistem syura ke monarki heriditer; (2) Profil dan kebijakan 6 khalifah penting penentu sejarah (Muawiyah I, Marwan I, Abdul Malik sang pemersatu, Al-Walid sang pembangun, Umar bin Abdul Aziz sang khalifah adil-zuhud, dan Hisyam bin Abdul Malik); (3) Kemajuan spektakuler di bidang administrasi (5 Diwan), ekspansi militer 3 benua hingga Andalusia (Spanyol) dan Asia Tengah, arsitektur monumental (Masjid Agung Umayyah Damaskus & Dome of the Rock), serta keilmuan (Arabisasi, tata bahasa nahwu, dan kodifikasi hadis resmi pertama); (4) Analisis kritis 5 faktor kemunduran (sistem putra mahkota ganda, konflik kesukuan Qais vs Yaman, diskriminasi kaum Mawali, hedonisme khalifah akhir, dan revolusi Abbasiyah); serta (5) Hikmah sejarah dalam meneladani keadilan kepemimpinan, menjaga ukhuwah, dan menjauhi fanatisme sempit (\'ashabiyah).',
    studentActivities: [
      'Mempelajari modul buku teks interaktif PAI Bab 5 dengan profil mendalam 6 khalifah penting dan artefak bersejarah',
      'Menganalisis garis waktu kronologi historis dari tahun 40 H hingga keruntuhan pada 132 H (Pertempuran Sungai Zab)',
      'Mengerjakan kuis evaluasi HOTS studi kasus sejarah kekhalifahan Bani Umayyah Damaskus',
      'Membuat refleksi keteladanan kepemimpinan adil Umar bin Abdul Aziz dalam kepengurusan kelas dan pergaulan sekolah'
    ],
    reflectionQuestions: [
      'Pelajaran kepemimpinan apa dari Khalifah Umar bin Abdul Aziz yang paling ingin kamu terapkan ketika memimpin teman-temanmu?',
      'Bagaimana cara kamu mencegah terjadinya perpecahan atau prasangka antarsuku/daerah di lingkungan sekolahmu?'
    ]
  },
  {
    id: 'k7-bab6',
    grade: 'Kelas VII',
    semester: 'Semester 2',
    chapterNumber: 6,
    title: 'Meraih Cinta Allah SWT dengan Ketakwaan: Mengkaji Q.S. Al-Baqarah/2: 103, Ali \'Imran/3: 76, dan Hukum Bacaan Ghunnah',
    cpElement: 'Al-Qur\'an dan Hadis',
    mainDalil: 'Q.S. Al-Baqarah/2: 103, Q.S. Ali \'Imran/3: 76 & H.R. At-Tirmidzi No. 1987',
    learningObjectives: [
      'Membaca Q.S. Al-Baqarah/2: 103 dan Ali \'Imran/3: 76 secara tartil sesuai kaidah tajwid hukum bacaan Ghunnah (Nun dan Mim bertasydid)',
      'Menghafal Q.S. Al-Baqarah/2: 103 dan Ali \'Imran/3: 76 dengan lancar dan benar menggunakan metode Takrar bertahap',
      'Menuliskan lafal Q.S. Al-Baqarah/2: 103, Ali \'Imran/3: 76, dan potongan kata Ghunnah sesuai kaidah khat Naskhi dan imla\' Al-Qur\'an',
      'Menjelaskan mufradat per kata, asbabun nuzul, terjemah, dan pesan pokok kedua ayat tentang hakikat taqwa serta menepati janji (wafa\' bil \'ahdi)',
      'Menganalisis hadis-hadis Nabi SAW tentang bertakwa di mana pun berada (H.R. Tirmidzi 1987), taqwa di dalam hati (H.R. Muslim 2564), dan penyebab terbanyak masuk surga',
      'Meneladani hikmah ketakwaan, menjaga lisan, serta merefleksikan integritas moral dalam kehidupan sehari-hari'
    ],
    keyTerms: [
      'Ketakwaan (Taqwa)',
      'Ghunnah Musyaddadah',
      'Nun Bertasydid (نّ)',
      'Mim Bertasydid (مّ)',
      'Q.S. Al-Baqarah: 103',
      'Q.S. Ali \'Imran: 76',
      'Wafa\' bil \'Ahdi (Menepati Janji)',
      'Muraqabatullah'
    ],
    hasFullTextbook: true,
    summary: 'Materi Bab 6 Al-Qur\'an dan Hadis PAI Kelas VII Semester 2 menguraikan secara komprehensif 4 pilar kecakapan: (1) Membaca secara tartil Q.S. Al-Baqarah: 103 dan Ali \'Imran: 76 dengan menerapkan hukum bacaan Ghunnah Musyaddadah (Nun & Mim bertasydid didengungkan 2 harakat di pangkal hidung al-khaisyum) serta memahami 4 tingkatan Ghunnah (Maratibul Ghunnah); (2) Menghafal kedua ayat dengan metode Takrar 5x dan bantuan audio tilawah interaktif; (3) Menulis ayat dengan kaidah khat Naskhi yang benar, memahami 6 huruf pemutus sambungan (ا، د، ذ، ر، ز، و), serta penempatan tanda tasydid; (4) Menjelaskan mufradat lengkap per kata, asbabun nuzul penolakan sihir dan pengkhianatan janji Ahlul Kitab, serta hadits-hadits Rasulullah SAW tentang taqwa di mana pun berada dan akhlak mulia; dan (5) Mengamalkan hikmah taqwa dalam meraih mahabbatullah (cinta Allah), membiasakan menepati janji tugas dan perkataan, serta menjauhi dusta.',
    studentActivities: [
      'Membaca Q.S. Al-Baqarah: 103 dan Ali \'Imran: 76 dengan tanda warna tajwid hukum bacaan Ghunnah',
      'Menghafal ayat menggunakan kartu hafalan interaktif (Flashcard) dan audio tilawah Qari',
      'Berlatih menulis khat Naskhi ayat pada kanvas digital dan buku latihan imla\'',
      'Mempelajari mufradat kosakata per kata dan mengerjakan kuis evaluasi pemahaman HOTS',
      'Membuat catatan refleksi pembiasaan sikap menepati janji dan jujur saat ujian sekolah'
    ],
    reflectionQuestions: [
      'Apakah kamu sudah berusaha menepati setiap janji yang kamu ucapkan kepada teman, guru, atau orang tua?',
      'Bagaimana caramu menjaga diri agar tetap berbuat baik dan tidak berbuat curang saat tidak ada orang lain yang melihat?'
    ]
  },
  {
    id: 'k7-bab7',
    grade: 'Kelas VII',
    semester: 'Semester 2',
    chapterNumber: 7,
    title: 'Mawas Diri dan Mengintrospeksi Diri dalam Menjalani Kehidupan (Meyakini & Merefleksikan Iman kepada Malaikat Allah Swt.)',
    cpElement: 'Akidah',
    mainDalil: 'Q.S. Al-Baqarah: 285, Q.S. Al-Anbiya\': 19-20, Q.S. At-Tahrim: 6 & Q.S. Qaf: 18',
    learningObjectives: [
      'Menjelaskan pengertian iman kepada malaikat Allah Swt. secara bahasa (al-alukah) dan istilah syariat (tashdiq, iqrar, amal)',
      'Menunjukkan dalil naqli tentang keberadaan, ketaatan, dan penciptaan malaikat dari cahaya (nur) dari Al-Qur\'an dan Hadis',
      'Menyebutkan nama-nama 10 malaikat yang wajib diketahui beserta rincian tugas spesifik masing-masing',
      'Mengidentifikasi 10 sifat dan karakteristik hakiki malaikat serta membandingkannya dengan manusia dan bangsa jin/iblis',
      'Merefleksikan hikmah beriman kepada malaikat dengan menumbuhkan perilaku mawas diri (muraqabatullah) dan muhasabah di sekolah, rumah, dan era digital'
    ],
    keyTerms: [
      'Malaikat (Malak)',
      'Rukun Iman ke-2',
      'Fardhu \'Ain',
      'Makhluk Ghaib',
      'Penciptaan dari Cahaya (Nur)',
      '10 Malaikat Wajib',
      'Ketaatan Mutlak (Ma\'shum)',
      'Mawas Diri (Muraqabatullah)',
      'Introspeksi (Muhasabah)',
      'Raqib dan \'Atid'
    ],
    hasFullTextbook: true,
    summary: 'Materi Bab 7 Akidah PAI Kelas VII Semester 2 mengkaji secara komprehensif 6 pilar keimanan kepada malaikat: (1) Pengertian iman kepada malaikat secara bahasa (al-alukah/risalah) dan istilah syariat (membenarkan dalam hati, ikrar lisan, dan pembuktian amal) dengan hukum Fardhu \'Ain sebagai Rukun Iman ke-2; (2) Dalil naqli Al-Qur\'an (Q.S. Al-Baqarah: 285, Al-Anbiya\': 19-20, At-Tahrim: 6, Qaf: 18, Fatir: 1) dan As-Sunnah (Hadis Jibril dan Hadis penciptaan dari cahaya H.R. Muslim); (3) Nama-nama 10 malaikat Allah yang wajib diimani (Jibril, Mikail, Israfil, Izrail, Munkar, Nakir, Raqib, \'Atid, Malik, Ridwan); (4) Tugas pokok dan fungsi masing-masing malaikat serta dalil rujukannya; (5) Karakteristik dan sifat-sifat malaikat (tidak berhawa nafsu, tidak makan/minum/tidur, tidak berjenis kelamin, selalu bertasbih, mampu menjelma/tatsyl, memiliki sayap) serta tabel komparasi Malaikat vs Manusia vs Jin; dan (6) Enam hikmah agung beriman kepada malaikat, instrumen lembar refleksi muhasabah malam bagi pelajar, serta kuis HOTS evaluasi pemahaman mandiri.',
    studentActivities: [
      'Mengkaji dalil naqli Al-Qur\'an dan As-Sunnah tentang iman kepada malaikat dengan audio tilawah dan tafsir ringkas',
      'Mengeksplorasi kartu interaktif 10 malaikat, dalil tugas, dan penerapan perilaku nyata di sekolah, rumah, dan media sosial',
      'Menganalisis tabel perbandingan komparatif sifat Malaikat vs Manusia vs Bangsa Jin/Iblis',
      'Mempraktikkan lembar instrumen muhasabah malam "Refleksi bersama Raqib dan \'Atid" untuk melatih mawas diri',
      'Mengerjakan kuis evaluasi HOTS 5 butir soal dengan penilaian skor dan pembahasan kunci jawaban mendalam'
    ],
    reflectionQuestions: [
      'Apakah kamu selalu ingat bahwa Malaikat Raqib dan \'Atid mencatat setiap ketikan jemarimu, komentar, dan status di media sosial?',
      'Bagaimana caramu menjaga kejujuran saat ulangan sekolah ketika guru pengawas tidak melihat?',
      'Jika malam ini malaikat maut (Izrail) menjemputmu, apakah tabungan catatan kebaikanmu di Malaikat Raqib sudah mencukupi untuk menjawab pertanyaan Munkar dan Nakir?'
    ]
  },
  {
    id: 'k7-bab8',
    grade: 'Kelas VII',
    semester: 'Semester 2',
    chapterNumber: 8,
    title: 'Menerapkan Makna Bersyukur kepada Allah Swt.',
    cpElement: 'Akhlak',
    mainDalil: 'Q.S. Ibrahim: 7 & Luqman: 12',
    learningObjectives: [
      'Menjelaskan pengertian syukur secara bahasa dan istilah syariat Islam dengan tepat',
      'Menganalisis dalil naqli (Q.S. Ibrahim: 7, Luqman: 12, An-Nahl: 78, Hadits Al-Bukhari & At-Tirmidzi)',
      'Mengklasifikasikan 3 dimensi penerapan syukur (syukur bil qalbi, bil lisan, dan bil arkan) di sekolah, rumah, dan medsos',
      'Mengidentifikasi manfaat syukur bagi kesehatan fisik, kestabilan mental, dan keberkahan hidup',
      'Menjelaskan hikmah perilaku syukur serta mengisi jurnal instrumen muhasabah nikmat harian'
    ],
    keyTerms: ['Syukur', 'Kufur Nikmat', 'Syukur bil Qalbi', 'Syukur bil Lisan', 'Syukur bil Arkan', 'Qana\'ah', 'Q.S. Ibrahim: 7'],
    hasFullTextbook: true,
    summary: 'Materi Bab 8 Akhlak PAI Kelas VII Semester 2 menguraikan secara komprehensif: (1) Pengertian syukur secara etimologi (syakara-yasykuru-syukran) dan terminologi syariat (tunduknya hati, pujian lisan, dan ketaatan fisik) serta bahaya lawan katanya yaitu kufur nikmat; (2) Dalil naqli Al-Qur\'an (Q.S. Ibrahim: 7, Luqman: 12, An-Nahl: 78, Al-Baqarah: 152) dan Hadits Shahih (teladan salat malam Nabi dan sabda berterima kasih kepada manusia); (3) Tiga dimensi contoh konkret perilaku syukur pelajar di lingkungan sekolah, keluarga/rumah, dan media sosial; (4) Empat dimensi manfaat syukur ditinjau dari syariat dan riset sains (kesehatan mental, imunitas fisik, keharmonisan sosial, dan keberkahan rezeki); dan (5) Lima hikmah luhur bersyukur, instrumen jurnal muhasabah harian 5 nikmat utama, serta kuis penilaian HOTS berbasis studi kasus.',
    studentActivities: [
      'Menelaah dalil naqli Q.S. Ibrahim: 7 dan Hadits Shahih dengan audio tilawah dan tafsir ringkas',
      'Mengeksplorasi kartu interaktif 3 dimensi syukur (hati, lisan, raga) di sekolah, rumah, dan media sosial',
      'Menganalisis manfaat syukur secara ilmiah bagi kesehatan mental dan pencegahan stres remaja',
      'Mengisi jurnal muhasabah syukur harian untuk 5 karunia nikmat utama',
      'Mengerjakan kuis evaluasi HOTS 5 butir soal dengan sistem penilaian skor dan pembahasan kunci jawaban'
    ],
    reflectionQuestions: [
      'Apakah kamu sudah membiasakan mengucap "Alhamdulillah" dan berterima kasih kepada orang tua dan guru setiap hari?',
      'Saat melihat barang mewah atau liburan teman di media sosial, apakah kamu merasa iri ataukah tetap qana\'ah dan bersyukur?',
      'Bagaimana caramu memanfaatkan panca indera (mata, telinga, tangan) dan kuota internet sebagai bukti syukur kepada Allah?'
    ]
  },
  {
    id: 'k7-bab9',
    grade: 'Kelas VII',
    semester: 'Semester 2',
    chapterNumber: 9,
    title: 'Menerapkan Ketentuan Rukhsah dalam Ibadah (Shalat, Puasa, Zakat & Haji)',
    cpElement: 'Fikih',
    hasFullTextbook: true,
    mainDalil: 'Q.S. Al-Baqarah: 185, Q.S. An-Nisā\': 101, & H.R. Ahmad (Allah Menyukai Rukhsah-Nya Diambil)',
    learningObjectives: [
      'Menjelaskan ketentuan rukhsah dalam ibadah secara bahasa, istilah syariat, perbedaannya dengan \'azimah, serta hukum-hukum mengambil rukhsah dengan benar',
      'Menganalisis dalil naqli Al-Qur\'an dan As-Sunnah tentang prinsip kemudahan agama Islam',
      'Mengklasifikasikan bentuk dan ketentuan rukhsah dalam 4 ibadah pokok: shalat, puasa, zakat, dan haji',
      'Mempraktikkan tata cara shalat jamak taqdim, jamak ta\'khir, qashar, tayamum, dan shalat bagi orang yang sakit',
      'Menghayati 5 hikmah agung pensyariatan rukhsah dalam kehidupan sehari-hari'
    ],
    keyTerms: [
      'Rukhsah',
      '\'Azimah',
      'Jamak Taqdim',
      'Jamak Ta\'khir',
      'Qashar',
      'Tayamum',
      'Fidyah',
      'Qadha',
      'Ta\'jil Zakat',
      'Badal Haji',
      'Dam Haji'
    ],
    summary: 'Agama Islam berprinsip "Yurīdullāhu bikumul-yusra wa lā yurīdu bikumul-\'usr" (Allah menghendaki kemudahan dan tidak menghendaki kesukaran). Rukhsah adalah keringanan hukum syariat yang dianugerahkan Allah kepada mukallaf dalam kondisi darurat atau kesulitan (safar, sakit, uzur). Materi mencakup ketentuan rukhsah dalam Shalat (jamak, qashar, shalat orang sakit), Puasa (qadha, fidyah), Zakat (ta\'jil zakat, zakat fitrah dengan uang), Haji (badal haji, dam, skuter/kursi roda), panduan langkah praktik bertayamum dan jamak qashar, serta 5 hikmah luhur.',
    studentActivities: [
      'Simulasi praktik salat jamak taqdim dan ta\'khir qashar dengan panduan niat',
      'Praktik tata cara tayamum menggunakan debu suci pada dinding atau meja bersih',
      'Diskusi studi kasus rukhsah puasa bagi lansia renta dan ibu menyusui',
      'Mengerjakan evaluasi mandiri HOTS (5 butir soal analisis kasus)'
    ],
    reflectionQuestions: [
      'Saat melakukan perjalanan jauh (safar), apakah kamu sudah memanfaatkan salat jamak qashar sesuai anjuran Rasulullah Saw.?',
      'Mengapa sakit atau sedang bepergian bukan menjadi alasan untuk meninggalkan kewajiban salat lima waktu?',
      'Bagaimana caramu membimbing teman yang sedang sakit di rumah sakit agar tetap dapat menunaikan salat?'
    ]
  },
  {
    id: 'k7-bab10',
    grade: 'Kelas VII',
    semester: 'Semester 2',
    chapterNumber: 10,
    title: 'Meneladani Kejayaan Peradaban Islam Daulah Bani Umayyah Periode Andalusia',
    cpElement: 'Sejarah Peradaban Islam (SPI)',
    hasFullTextbook: true,
    mainDalil: 'Q.S. Al-Mujadilah: 11, Q.S. Al-Anfal: 46, & Sejarah Thariq bin Ziyad di Jabal Thariq (Gibraltar)',
    learningObjectives: [
      'Menjelaskan sejarah latar belakang dan proses berdirinya Daulah Bani Umayyah periode Andalusia, peran Thariq bin Ziyad, Musa bin Nushair, dan Abdurrahman Ad-Dakhil (Shaqr Quraisy)',
      'Menganalisis masa keemasan peradaban Islam di Cordoba pada masa Abdurrahman III dan Al-Hakam II (The Ornament of the World, 70 perpustakaan, 400.000 jilid buku)',
      'Mengklasifikasikan kontribusi monumental peradaban Andalusia bagi dunia: Kedokteran (Az-Zahrawi), Filsafat (Ibnu Rusyd), Astronomi (Az-Zarqali), Teknologi Penerbangan (Abbas bin Firnas), Pertanian & Arsitektur (Mezquita Cordoba & Alhambra)',
      'Menganalisis faktor kemunduran dan keruntuhan Islam di Andalusia: perpecahan Mulukut Thawaif, upeti parias, gaya hidup hedonisme/wahn, Reconquista, hingga jatuhnya Granada 1492 M',
      'Merefleksikan 5 hikmah agung sejarah Andalusia bagi pembentukan karakter pelajar muslim berdaya saing global'
    ],
    keyTerms: [
      'Andalusia',
      'Thariq bin Ziyad',
      'Jabal Thariq (Gibraltar)',
      'Abdurrahman Ad-Dakhil',
      'Shaqr Quraisy',
      'Cordoba',
      'Abdurrahman III',
      'Al-Hakam II',
      'Az-Zahrawi (Albucasis)',
      'Ibnu Rusyd (Averroes)',
      'Abbas bin Firnas',
      'Mulukut Thawaif',
      'Reconquista',
      'Alhambra'
    ],
    summary: 'Andalusia (Semenanjung Iberia) adalah mercusuar keilmuan dan peradaban dunia Islam di barat Eropa selama hampir 8 abad (711–1492 M). Dimulai dari pendaratan legendaris Thariq bin Ziyad (711 M) dan ketangguhan Abdurrahman Ad-Dakhil mendirikan keamiran (756 M), peradaban ini mencapai puncak keemasan di Cordoba dengan 70 perpustakaan dan universitas terkemuka dunia. Karyanya di bidang bedah medis (Az-Zahrawi), filsafat rasional (Ibnu Rusyd), dan astronomi memicu Renaisans Eropa. Kehancurannya memberi ibrah getir tentang bahaya perpecahan Mulukut Thawaif, keterlenaan materi duniawi, dan pentingnya persatuan.',
    studentActivities: [
      'Menganalisis pidato legendaris Thariq bin Ziyad di Jabal Thariq dan mengidentifikasi nilai filosofisnya',
      'Menelaah biografi dan temuan bedah medis Abu Al-Qasim Az-Zahrawi (At-Tashrif)',
      'Diskusi kelompok tentang faktor internal keruntuhan peradaban pada era Mulukut Thawaif',
      'Mengerjakan evaluasi mandiri HOTS (5 butir soal analisis sejarah)'
    ],
    reflectionQuestions: [
      'Pelajaran apa yang bisa kamu petik dari kegigihan Abdurrahman Ad-Dakhil yang selamat dari ujian berat lalu membangun peradaban baru seorang diri?',
      'Bagaimana cara pelajar Muslim masa kini menghidupkan kembali tradisi literasi dan kecintaan membaca buku perpustakaan seperti era Cordoba?',
      'Mengapa perpecahan dan saling menjatuhkan di kalangan sendiri menjadi awal kehancuran sebuah bangsa?'
    ]
  },

  // ========================== KELAS VIII ==========================
  {
    id: 'k8-bab1',
    grade: 'Kelas VIII',
    semester: 'Semester 1',
    chapterNumber: 1,
    title: 'Inspirasi Al-Qur\'an: Membangun Harmoni Kehidupan melalui Toleransi dan Kedamaian',
    cpElement: 'Al-Qur\'an dan Hadis',
    hasFullTextbook: true,
    mainDalil: 'Q.S. Al-Hujurāt/49: 13 & Q.S. Al-Baqarah/2: 256',
    learningObjectives: [
      'Membaca Q.S. Al-Hujurāt/49: 13 dan Q.S. Al-Baqarah/2: 256 dengan tartil menerapkan hukum tajwid Lam (Jalalah & Ta\'rif) dan Ra\' (Tafkhim & Tarqiq)',
      'Menghafal Q.S. Al-Hujurāt/49: 13, Q.S. Al-Baqarah/2: 256, dan hadis terkait toleransi dengan lancar',
      'Menuliskan ayat-ayat tersebut dengan kaidah khat kaligrafi Arab yang rapi dan benar sesuai kaidah',
      'Menganalisis mufradat (kosakata), asbabun nuzul, terjemahan, dan kandungan tafsir tentang prinsip kesetaraan manusia serta kebebasan beragama tanpa paksaan',
      'Menjelaskan batasan toleransi dalam Islam (tegas dalam akidah-ibadah, inklusif dan santun dalam muamalah sosial-kemanusiaan)'
    ],
    keyTerms: [
      'Toleransi (Tasamuh)',
      'Q.S. Al-Hujurat: 13',
      'Q.S. Al-Baqarah: 256',
      'Lita\'arafu',
      'La Ikraha fid-Din',
      'Al-\'Urwah Al-Wutsqa',
      'Lam Jalalah Tafkhim & Tarqiq',
      'Al Syamsiyah & Al Qamariyah',
      'Ra\' Tafkhim & Tarqiq',
      'Al-Hanifiyyah As-Samhah',
      'Mu\'ahad'
    ],
    summary: 'Islam adalah agama rahmatan lil \'alamin yang menempatkan toleransi (tasamuh) sebagai pilar utama kerukunan umat manusia. Q.S. Al-Hujurāt: 13 mengajarkan prinsip egalitarianisme (kesetaraan martabat manusia) bahwa perbedaan suku dan bangsa adalah sarana saling mengenal (lita\'ārafū), dan kemuliaan tertinggi hanya diukur dari ketakwaan. Q.S. Al-Baqarah: 256 menegaskan prinsip kebebasan beragama tanpa paksaan (lā ikrāha fid-dīn) karena jalan kebenaran telah benderang. Bab ini membimbing siswa menguasai 4 keterampilan utama: Membaca tartil dengan hukum Lam dan Ra\', Menghafal dengan metode tikrar, Menulis khat Arab berkaidah, serta Menjelaskan pesan toleransi proporsional di tengah masyarakat majemuk.',
    studentActivities: [
      'Praktik membaca tartil dan mengidentifikasi hukum Lam Jalalah, Al Syamsiyah/Qamariyah, serta Ra\' Tafkhim/Tarqiq pada Q.S. Al-Hujurat: 13 dan Q.S. Al-Baqarah: 256',
      'Menghafal bertahap dengan metode pengulangan berjenjang (tikrar 5-3-1) dan tasmi\' antar teman',
      'Latihan menulis indah khat Naskhi kedua ayat dengan memperhatikan huruf yang memotong garis buku',
      'Menelaah asbabun nuzul pembebasan Makkah (Bilal r.a.) dan anak-anak Anshar di Madinah',
      'Mengerjakan evaluasi mandiri HOTS (5 soal analisis kasus toleransi kebangsaan)'
    ],
    reflectionQuestions: [
      'Bagaimana caramu menerapkan pesan lita\'arafu ketika bertemu kawan baru yang berbeda suku dan budaya di sekolah?',
      'Mengapa dalam urusan ibadah kita tidak boleh berkompromi, namun dalam urusan tolong-menolong kita wajib merangkul semua orang?',
      'Bagaimana caramu membiasakan membaca Al-Qur\'an dengan kaidah tajwid lam dan ra\' yang benar dalam kehidupan sehari-hari?'
    ]
  },
  {
    id: 'k8-bab2',
    grade: 'Kelas VIII',
    semester: 'Semester 1',
    chapterNumber: 2,
    title: 'Meyakini Kitab-Kitab Allah Swt.: Generasi Pecinta Al-Qur\'an yang Toleran',
    cpElement: 'Akidah',
    hasFullTextbook: true,
    mainDalil: 'Q.S. An-Nisā\': 136, Q.S. Al-Baqarah: 136 & Q.S. Al-Mā\'idah: 48',
    learningObjectives: [
      'Menjelaskan pengertian iman kepada kitab-kitab Allah Swt. secara bahasa dan istilah syariat',
      'Mengidentifikasi dalil Al-Qur\'an dan hadis sahih tentang kewajiban beriman kepada kitabullah',
      'Menyebutkan nama-nama 4 kitab suci (Taurat, Zabur, Injil, Al-Qur\'an) beserta nabi penerimanya dan suhuf para nabi',
      'Menganalisis fungsi dan hikmah beriman kepada kitab-kitab Allah dalam membimbing kehidupan',
      'Menelaah 6 dimensi isi pokok ajaran kitab-kitab Allah Swt.',
      'Menganalisis keistimewaan monumental Al-Qur\'an sebagai penyempurna dan penguji (Al-Muhaimin) bagi wahyu sebelumnya',
      'Menampilkan perilaku generasi pecinta Al-Qur\'an yang mengamalkan 4 pilar (tilawah, tadabbur, tahfiz, \'amal) serta menjunjung tinggi toleransi beragama'
    ],
    keyTerms: [
      'Kitabullah',
      'Suhuf Para Nabi',
      'Taurat (Musa a.s.)',
      'Zabur (Dawud a.s.)',
      'Injil (Isa a.s.)',
      'Al-Qur\'anul Karim',
      'Al-Muhaimin',
      'Iman Ijmali vs Tafshili',
      'Generasi Qur\'ani',
      'Tasamuh (Toleransi)',
      'Lakum Dinukum wa Liya Din'
    ],
    summary: 'Beriman kepada kitab-kitab Allah Swt. adalah rukun iman ke-3 yang wajib diyakini setiap muslim. Kitabullah diturunkan sebagai petunjuk jalan keselamatan hidup (hudan lin-nas). Terdapat 4 kitab suci yang wajib diimani: Taurat (Nabi Musa a.s.), Zabur (Nabi Dawud a.s.), Injil (Nabi Isa a.s.), dan Al-Qur\'an (Nabi Muhammad SAW) serta suhuf-suhuf nabi. Al-Qur\'an berkedudukan sebagai Al-Muhaimin (penyempurna, penguji, dan saksi) bagi kitab-kitab terdahulu. Generasi pecinta Al-Qur\'an senantiasa membaca, mentadabburi, menghafal, dan mengamalkan akhlak Al-Qur\'an serta hidup rukun dan toleran di tengah kemajemukan bangsa.',
    studentActivities: [
      'Menelaah tabel komparasi 4 kitab suci (rasul, bahasa asli, zaman, dan inti ajaran pokok) serta suhuf para nabi',
      'Mendengarkan tilawah audio dan menelaah tafsir Q.S. An-Nisā\': 136, Q.S. Al-Baqarah: 136, dan Q.S. Al-Mā\'idah: 48',
      'Menganalisis 6 keistimewaan agung Al-Qur\'an dan kedudukannya sebagai Al-Muhaimin',
      'Mendiskusikan studi kasus toleransi di sekolah: membedakan antara toleransi muamalah sosial dan ketegasan akidah-ibadah',
      'Mengerjakan evaluasi mandiri HOTS (5 butir soal pemahaman komparatif dan analisis kasus) serta mengisi lembar refleksi karakter'
    ],
    reflectionQuestions: [
      'Bagaimana caramu membuktikan bahwa kamu beriman secara tafshili kepada Al-Qur\'an dalam rutinitas harianmu?',
      'Bagaimana cara terbaik menghormati teman yang berbeda keyakinan di sekolah tanpa mengorbankan prinsip akidah Islam?',
      'Mengapa Al-Qur\'an dijamin keasliannya oleh Allah Swt. langsung hingga hari kiamat sedangkan kitab terdahulu tidak?'
    ]
  },
  {
    id: 'k8-bab3',
    grade: 'Kelas VIII',
    semester: 'Semester 1',
    chapterNumber: 3,
    title: 'Menerapkan Makna Cinta Rasul: Meneladani Akhlak Mulia dan Meraih Syafaat Rasulullah Saw.',
    cpElement: 'Akidah',
    hasFullTextbook: true,
    mainDalil: 'Q.S. Āli \'Imrān: 31, Q.S. At-Taubah: 24, Q.S. Al-Ahzāb: 21 & 56, H.R. Bukhari-Muslim',
    learningObjectives: [
      'Menjelaskan pengertian cinta kepada Rasulullah Saw. secara bahasa (al-mahabbah) dan istilah syariat',
      'Menganalisis dalil naqli Al-Qur\'an (Q.S. Ali \'Imran: 31, Q.S. At-Taubah: 24, Q.S. Al-Ahzab: 21 & 56) dan hadis sahih tentang cinta Rasul',
      'Menelaah 4 sifat wajib (Shiddiq, Amanah, Tabligh, Fathanah) dan sifat mustahil nabi serta contoh penerapannya bagi pelajar',
      'Menampilkan contoh-contoh perilaku cinta Rasul: meneladani akhlak, menghidupkan sunnah harian, memperbanyak shalawat, mengkaji sirah nabawiyah, dan membela syariat',
      'Menganalisis manfaat agung cinta Rasul baik di dunia (manisnya iman, cinta Allah, pedoman hidup) maupun akhirat (syafaat \'uzma, surga firdaus)',
      'Merefleksikan perilaku cinta Rasul melalui pemecahan studi kasus moral, muhasabah harian, dan evaluasi mandiri HOTS'
    ],
    keyTerms: [
      'Mahabbatur Rasul',
      'Ittiba\' Sunnah',
      'Uswatun Hasanah',
      'Halawatul Iman',
      'Syafaat \'Uzma',
      'Shalawat Ibrahimiyah',
      'Sifat Wajib Rasul',
      'Sirah Nabawiyah',
      'Ahlul Bait & Sahabat'
    ],
    summary: 'Mencintai Rasulullah Saw. adalah konsekuensi mutlak dari syahadat kedua dan rukun keimanan. Cinta sejati kepada Rasul dibuktikan melalui ittiba\' (ketaatan syariat dan meneladani akhlak beliau), bukan sekadar klaim lisan. Pelajar yang mencintai Rasul senantiasa menghidupkan sunnah harian, membiasakan shalawat, memegang teguh kejujuran (Shiddiq) dan amanah, serta merefleksikan akhlak mulia dalam memecahkan dilema pergaulan di sekolah demi meraih manisnya iman di dunia dan syafaat di akhirat.',
    studentActivities: [
      'Mendengarkan audio tilawah dan menelaah tafsir Q.S. Ali \'Imran: 31, Q.S. At-Taubah: 24, dan hadis kesempurnaan iman',
      'Menggunakan Digital Shalawat Counter untuk melatih wirid harian minimal 33x shalawat',
      'Menganalisis perbandingan 4 sifat wajib nabi beserta contoh penerapan karakter di sekolah',
      'Mendiskusikan 3 studi kasus dilema moral pelajar (menyontek, bullying di medsos, dan menunda shalat demi game)',
      'Mengisi lembar muhasabah 8 indikator cinta Rasul serta mengerjakan 5 soal kuis HOTS interaktif'
    ],
    reflectionQuestions: [
      'Bagaimana kamu membuktikan secara nyata bahwa cintamu kepada Rasulullah Saw. lebih besar daripada kesenangan duniawi?',
      'Ketika ada ajakan teman untuk berbuat curang atau menyontek, sikap apa yang kamu ambil sebagai bukti meneladani sifat Shiddiq nabi?',
      'Berapa kali dalam sehari kamu bershalawat kepada baginda Nabi Muhammad Saw.?'
    ]
  },
  {
    id: 'k8-bab4',
    grade: 'Kelas VIII',
    semester: 'Semester 1',
    chapterNumber: 4,
    title: 'Menerapkan Ketentuan Kewajiban terhadap Penyelenggaraan Jenazah',
    cpElement: 'Fikih',
    hasFullTextbook: true,
    mainDalil: 'H.R. Muslim No. 2162 (6 Hak Muslim), H.R. Bukhari-Muslim (Pahala 2 Qirath), H.R. Bukhari No. 1294 (Larangan Niyahah)',
    learningObjectives: [
      'Menjelaskan konsep hukum fardhu kifayah dan 4 tahapan kewajiban terhadap jenazah muslim (memandikan, mengafani, menyalatkan, dan menguburkan)',
      'Menganalisis perbedaan ketentuan jenazah biasa dengan jenazah syahid ma\'rakah (gugur di medan perang) dan syahid akhirat',
      'Mempraktikkan tata cara shalat jenazah 4 takbir beserta lafaz niat, shalawat, doa jenazah laki-laki/perempuan/anak, dan salam',
      'Menerapkan ketentuan Islam seputar tindakan awal saat wafat, larangan niyahah (meratap histeris), adab takziah, dan ziarah kubur',
      'Mengidentifikasi hikmah penyelenggaraan jenazah bagi mayit, keluarga duka, masyarakat, dan pembentukan karakter mawas diri pelajar'
    ],
    keyTerms: [
      'Fardhu Kifayah',
      'Ghasl al-Mayyit',
      'Takfin al-Mayyit',
      'Shalat Jenazah',
      'Dafn al-Mayyit',
      'Dua Qirath',
      'Syahid Ma\'rakah',
      'Shalat Ghaib',
      'Larangan Niyahah',
      'Adab Takziah',
      'Ziarah Kubur',
      'Tadzkiratul Maut'
    ],
    summary: 'Pengurusan jenazah adalah kewajiban fardhu kifayah yang merupakan perwujudan ukhuwah islamiyah dan hak sesama muslim. Empat kewajiban pokok meliputi memandikan (membersihkan dan menjaga aib mayit), mengafani (membungkus dengan kain putih bersih 3 lapis bagi pria dan 5 lapis bagi wanita), menyalatkan (4 kali takbir tanpa ruku dan sujud dengan posisi imam sejajar kepala jenazah laki-laki atau pinggang jenazah perempuan), serta menguburkan ke liang lahat menghadap kiblat. Islam melarang keras niyahah (meratap histeris) dan memotret jenazah, mensunnahkan takziah untuk menghibur keluarga duka serta membawakan makanan, dan menganjurkan ziarah kubur sebagai tadzkiratul maut (pengingat kematian).',
    studentActivities: [
      'Menelaah 4 tahapan pokok pengurusan jenazah beserta syarat dan langkah praktisnya',
      'Mempraktikkan simulasi 4 takbir shalat jenazah dengan panduan teks Arab, transliterasi, dan audio pengucapan doa',
      'Menganalisis perbedaan posisi imam shalat jenazah laki-laki vs perempuan dan ketentuan shalat ghaib',
      'Mendiskusikan 3 studi kasus nyata remaja (etika memotret jenazah ke medsos, tradisi jamuan vs sunnah meringankan beban duka, dan jenazah dhuafa terlantar)',
      'Mengisi lembar evaluasi diri 8 dimensi sikap serta mengerjakan 5 soal penalaran HOTS'
    ],
    reflectionQuestions: [
      'Mengapa syariat Islam mewajibkan pengurusan jenazah berstatus fardhu kifayah dan bukan fardhu \'ain?',
      'Sikap apa yang harus kamu ambil ketika ada teman membagikan foto jenazah ke media sosial atau grup WhatsApp?',
      'Pelajaran hidup apa yang paling berharga kamu rasakan saat mengingat bahwa setiap manusia kelak hanya akan dibungkus kain kafan putih ke liang kubur?'
    ]
  },
  {
    id: 'k8-bab5',
    grade: 'Kelas VIII',
    semester: 'Semester 1',
    chapterNumber: 5,
    title: 'Meneladani Sejarah dan Peran Peradaban Daulah Abbasiyah',
    cpElement: 'Sejarah Peradaban Islam (SPI)',
    hasFullTextbook: true,
    mainDalil: 'Q.S. Al-Hasyr: 18, Q.S. Az-Zumar: 9, & H.R. At-Tirmidzi No. 2687',
    learningObjectives: [
      'Menjelaskan latar belakang berdirinya Daulah Abbasiyah (750–1258 M), gerakan bawah tanah di 3 kota, dan pembangunan Kota Bundar Baghdad (Madinat as-Salam)',
      'Mengidentifikasi biografi, peran kepemimpinan, dan keteladanan tokoh penting Abbasiyah (khalifah pendiri, khalifah era keemasan, ilmuwan sains, dan ulama fikih/hadits)',
      'Menganalisis pencapaian puncak kejayaan Islam (The Golden Age) melalui lembaga Baitul Hikmah, gerakan penerjemahan, dan kemajuan multisektoral sains, kedokteran, ekonomi, serta arsitektur',
      'Mengevaluasi faktor internal dan eksternal penyebab kemunduran Daulah Abbasiyah hingga tragedi kehancuran kota Baghdad oleh Hulagu Khan (1258 M)',
      'Merefleksikan hikmah sejarah peradaban Abbasiyah untuk menumbuhkan etos literasi, riset ilmiah, keterbukaan pikiran, toleransi, dan integritas pelajar muslim di era modern'
    ],
    keyTerms: [
      'Daulah Abbasiyah',
      'Madinat as-Salam Baghdad',
      'Baitul Hikmah',
      'The Golden Age of Islam',
      'Abu al-Abbas As-Saffah',
      'Abu Ja\'far al-Mansur',
      'Harun ar-Rasyid',
      'Al-Ma\'mun',
      'Gerakan Tadwin & Tarjamah',
      'Bimaristan',
      'Invasi Mongol Hulagu Khan 1258',
      'Ibrah Sejarah'
    ],
    summary: 'Daulah Abbasiyah (750–1258 M / 132–656 H) merupakan masa keemasan peradaban Islam (The Golden Age of Islam) yang berpusat di Kota Bundar Baghdad (Madinat as-Salam). Didirikan paska runtuhnya Daulah Umayyah melalui gerakan bawah tanah rapi di Al-Humaimah, Kufah, dan Khurasan. Di bawah kepemimpinan Khalifah Harun ar-Rasyid dan Al-Ma\'mun, peradaban Islam memimpin kemajuan dunia melalui lembaga riset raksasa Baitul Hikmah, gerakan penerjemahan naskah kuno berhadiah emas seberat buku, serta lahirnya ilmuwan agung seperti Ibnu Sina, Al-Khawarizmi, dan Ar-Razi. Namun, akibat perpecahan internal, gaya hidup mewah, ketergantungan pada tentara bayaran, serta serangan dahsyat tentara Mongol Hulagu Khan pada 1258 M, Daulah Abbasiyah di Baghdad runtuh. Tragedi ini memberikan ibrah berharga bagi generasi muda muslim untuk menjauhi perpecahan dan membangkitkan kembali etos literasi dan sains modern.',
    studentActivities: [
      'Menelaah 5 periode dinamika kekuasaan Daulah Abbasiyah dari fase keemasan hingga keruntuhan',
      'Mengeksplorasi profil dan karya monumental 10 tokoh penting (khalifah, dokter Ibnu Sina, matematikawan Al-Khawarizmi, kimiawan Ar-Razi, ulama Imam Syafi\'i & Bukhari)',
      'Menganalisis 4 pilar kemajuan peradaban (sains Bimaristan, matematika/astronomi astrolabe, ekonomi cek suftajah, arsitektur & industri kertas)',
      'Membandingkan faktor internal kemunduran dengan invasi bangsa Mongol 1258 M',
      'Mendiskusikan 3 studi kasus moralitas remaja masa kini, mengisi lembar muhasabah 8 dimensi, dan mengerjakan 5 soal HOTS'
    ],
    reflectionQuestions: [
      'Mengapa bangsa yang memiliki budaya membaca dan riset tinggi seperti era Abbasiyah mampu memimpin peradaban dunia?',
      'Pelajaran penting apa yang dapat kamu petik dari kehancuran kota Baghdad agar tidak terulang pada persatuan bangsa kita?',
      'Bagaimana kamu memanfaatkan gawai pintar di sakumu saat ini agar menjadi "Baitul Hikmah digital" yang bermanfaat bagi masa depanmu?'
    ]
  },
  {
    id: 'k8-bab6',
    grade: 'Kelas VIII',
    semester: 'Semester 2',
    chapterNumber: 6,
    title: 'Menebarkan Semangat Cinta Tanah Air: Q.S. An-Nisā\' [4]: 66, Hadis Cinta Tanah Air, & Hukum Bacaan Nun Sukun dan Tanwin',
    cpElement: 'Al-Qur\'an dan Hadis',
    hasFullTextbook: true,
    mainDalil: 'Q.S. An-Nisā\': 66, H.R. At-Tirmidzi No. 3926 (Cinta Makkah), H.R. Al-Bukhari No. 1886 (Cinta Madinah), Piagam Madinah',
    learningObjectives: [
      'Membaca Q.S. An-Nisā\' [4]: 66 dengan tartil dan benar sesuai dengan kaidah tajwid hukum nun sukun dan tanwin',
      'Menghafal Q.S. An-Nisā\' [4]: 66 dengan lancar dan benar menggunakan metode pengulangan terstruktur (tikrar)',
      'Menulis teks Q.S. An-Nisā\' [4]: 66 dengan rapi, indah, dan kaidah khat naskhi / rasm utsmani yang tepat',
      'Menelaah mufradat perkata dan terjemahan resmi Kemenag RI dari Q.S. An-Nisā\' [4]: 66 secara mendalam',
      'Mengidentifikasi dan mengklasifikasikan 5 hukum bacaan nun sukun dan tanwin (Idzhar Halqi, Idgham Bighunnah, Idgham Bilaghunnah, Iqlab, dan Ikhfa Haqiqi) beserta huruf-huruf dan cara membacanya',
      'Menganalisis hadis-hadis Rasulullah Saw. mengenai cinta tanah air dan Piagam Madinah sebagai landasan persatuan kebangsaan',
      'Menerapkan hikmah cinta tanah air (hubbul wathan) melalui sikap patriotisme, cinta damai, toleransi kebhinekaan, dan kepedulian lingkungan bagi pelajar muslim'
    ],
    keyTerms: [
      'Q.S. An-Nisa: 66',
      'Hubbul Wathan (Cinta Tanah Air)',
      'Nun Sukun & Tanwin',
      'Idzhar Halqi',
      'Idgham Bighunnah',
      'Idgham Bilaghunnah',
      'Iqlab',
      'Ikhfa Haqiqi',
      'Idzhar Mutlaq',
      'Hadis Cinta Makkah',
      'Hadis Cinta Madinah',
      'Piagam Madinah',
      'Ukhuwah Wathaniyah',
      'Mufradat Perkata',
      'Khat Naskhi'
    ],
    summary: 'Materi PAI Kelas VIII Semester 2 Bab 6 memuat kajian komprehensif: (1) Q.S. An-Nisā\' [4]: 66 yang menyetarakan kecintaan jiwa dengan kecintaan terhadap tanah air/kampung halaman sebagai bukti fitrah insani yang diakui syariat Islam; (2) Kaidah lengkap hukum bacaan Nun Sukun (نْ) dan Tanwin (ـًـــٍـــٌ) meliputi 5 hukum: Idzhar Halqi (6 huruf), Idgham Bighunnah (4 huruf yanmu) dengan pengecualian Idzhar Mutlaq (dunya, bunyan, qinwan, sinwan), Idgham Bilaghunnah (lam & ra), Iqlab (ba), dan Ikhfa Haqiqi (15 huruf); (3) Kamus mufradat perkata dan terjemahan resmi Kemenag RI dilengkapi flashcard interaktif; (4) Penerapan 4 keterampilan (membaca tartil dengan kaidah makharijul huruf dan sifatul huruf, menghafal metode tikrar 3x3, menulis khat naskhi rasm utsmani, serta menjelaskan refleksi kebangsaan); serta (5) Hikmah luhur cinta tanah air (menjaga kedaulatan, keamanan beribadah, persatuan Bhinneka Tunggal Ika, gotong royong, dan teladan Rasulullah Saw. & para pahlawan kemerdekaan).',
    studentActivities: [
      'Membaca Q.S. An-Nisā\': 66 dengan audio tilawah tartil dan mengidentifikasi hukum nun sukun/tanwin pada tabel tajwid interaktif',
      'Menghafal ayat menggunakan fitur tutup teks Arab dan melatih hafalan kosakata melalui flashcard mufradat',
      'Menyalin lafaz ayat menggunakan kaidah khat naskhi dengan memperhatikan letak huruf di atas dan di bawah garis',
      'Mendiskusikan 3 studi kasus etika kebangsaan remaja (anti-hoaks di medsos, gotong royong fasilitas umum, dan toleransi antarsuku)',
      'Mengisi instrumen evaluasi diri 8 indikator karakter kebangsaan dan mengerjakan 5 soal kuis penalaran HOTS'
    ],
    reflectionQuestions: [
      'Mengapa Allah Swt. dalam Q.S. An-Nisā\' ayat 66 menyandingkan perintah mengorbankan jiwa dengan perintah meninggalkan kampung halaman?',
      'Bagaimana caramu menerapkan hukum bacaan Ikhfa Haqiqi dan Idgham Bighunnah saat membaca Q.S. An-Nisā\' ayat 66 secara tartil?',
      'Sebagai pelajar muslim masa kini, tindakan konkret apa yang dapat kamu lakukan setiap hari di sekolah dan media sosial sebagai bukti nyata cinta tanah air?'
    ]
  },
  {
    id: 'k8-bab7',
    grade: 'Kelas VIII',
    semester: 'Semester 2',
    chapterNumber: 7,
    title: 'Meyakini dan Merefleksikan Iman kepada Para Rasul Allah Swt.',
    cpElement: 'Akidah',
    mainDalil: 'Q.S. An-Nisā\' [4]: 136, Q.S. Al-An\'ām [6]: 48, Q.S. Al-Ahzāb [33]: 21, & Hadits Jibril',
    learningObjectives: [
      'Memahami dan menjelaskan pengertian iman kepada para rasul Allah Swt. secara bahasa maupun istilah syariat dengan tepat',
      'Menganalisis dalil naqli Al-Qur\'an dan Hadis shahih mengenai kewajiban beriman kepada rasul Allah Swt.',
      'Mengidentifikasi nama 25 nabi dan rasul yang wajib diketahui serta keistimewaan 5 Rasul Ulul Azmi (N-I-M-I-M)',
      'Menelaah 5 tugas utama rasul serta mengklasifikasikan 4 sifat wajib, 4 sifat mustahil, dan 1 sifat jaiz bagi para rasul',
      'Meneladani keluhuran akhlak para rasul dan mengaktualisasikannya dalam studi kasus etika pelajar sehari-hari',
      'Menghayati 6 hikmah beriman kepada para rasul dan mengisi lembar evaluasi diri 8 dimensi karakter pelajar'
    ],
    keyTerms: [
      'Iman kepada Rasul',
      'Nabi vs Rasul',
      '25 Nabi & Rasul',
      'Rasul Ulul Azmi',
      'N-I-M-I-M',
      'Sifat Wajib',
      'Aṣ-Ṣiddīq',
      'Al-Amānah',
      'At-Tablīgh',
      'Al-Faṭānah',
      'Sifat Mustahil',
      'Al-Kiżib',
      'Al-Khiyānah',
      'Al-Kitmān',
      'Al-Balādah',
      'Sifat Jaiz',
      'Al-A\'rāḍul Basyariyyah',
      'Uswatun Hasanah',
      'Tazkiyatun Nufus',
      'Hikmah Beriman'
    ],
    summary: 'Materi PAI Kelas VIII Semester 2 Bab 7 membahas secara komprehensif: (1) Pengertian iman kepada rasul secara bahasa dan istilah syariat, rukun iman ke-4, serta perbedaan fundamental antara nabi dan rasul; (2) Dalil naqli Al-Qur\'an (Q.S. An-Nisa: 136, Al-An\'am: 48, Al-Baqarah: 285, Al-Ahzab: 21) dan Hadits Shahih perawi Muslim; (3) Daftar 25 nabi dan rasul yang wajib diketahui serta spotlight 5 Rasul Ulul Azmi (Nuh, Ibrahim, Musa, Isa, Muhammad Saw.) yang memiliki ketabahan luar biasa; (4) 5 tugas utama rasul (Tabligh, Basyir & Nadzir, Uswatun Hasanah, Tazkiyatun Nufus, Iqamatul \'Adl); (5) Sifat-sifat rasul yang meliputi 4 sifat wajib (Siddiq, Amanah, Tabligh, Fathonah), 4 sifat mustahil lawannya (Kizib, Khianat, Kitman, Baladah), serta 1 sifat jaiz kemanusiaan (Al-A\'radhul Basyariyah); (6) Contoh keteladanan akhlak para rasul dan studi kasus etika kejujuran pelajar; serta (7) 6 hikmah beriman kepada rasul dan lembar refleksi muhasabah karakter.',
    studentActivities: [
      'Mengkaji dalil naqli Al-Qur\'an dan Hadits tentang keimanan kepada para rasul dengan mendengarkan audio lafaz dan membaca terjemahan',
      'Mengeksplorasi tabel komparasi nabi vs rasul serta kartu interaktif 25 nabi & 5 rasul Ulul Azmi',
      'Menganalisis perbedaan 4 sifat wajib, 4 sifat mustahil, dan 1 sifat jaiz bagi rasul beserta dalil pendukungnya',
      'Mendiskusikan 3 studi kasus etika integritas pelajar (menolak contek/bocoran kunci ujian, anti-cyberbullying, dan amanah tugas kelompok)',
      'Mengisi lembar muhasabah 8 dimensi karakter pelajar beriman dan mengerjakan 5 butir kuis penalaran HOTS'
    ],
    reflectionQuestions: [
      'Mengapa seorang mukmin tidak boleh membeda-bedakan kewajiban beriman kepada antara satu rasul dengan rasul lainnya?',
      'Bagaimana kamu membuktikan sifat Amanah dan Tabligh ketika dipercaya menjadi pengurus kelas atau kelompok belajar di sekolah?',
      'Mengapa para rasul Allah Swt. dibekali sifat Jaiz (Al-A\'radhul Basyariyah) dan tidak berwujud malaikat semata?'
    ]
  },
  {
    id: 'k8-bab8',
    grade: 'Kelas VIII',
    semester: 'Semester 2',
    chapterNumber: 8,
    title: 'Menerapkan Makna Cinta Ilmu: Menumbuhkan Semangat Literasi dan Riset untuk Kemajuan Bangsa',
    cpElement: 'Akhlak',
    hasFullTextbook: true,
    mainDalil: 'Q.S. Al-Mujādilah [58]: 11, Q.S. Az-Zumar [39]: 9, Q.S. Thāhā [20]: 114, & H.R. Ibnu Majah No. 224',
    learningObjectives: [
      'Menjelaskan pengertian ilmu secara bahasa dan istilah syariat, serta pembagian hukum menuntut ilmu (Fardhu \'Ain vs Fardhu Kifayah)',
      'Menganalisis dalil naqli Al-Qur\'an (Q.S. Al-Mujādilah: 11, Q.S. Az-Zumar: 9, Q.S. Thāhā: 114) dan Hadis-Hadis Shahih tentang keutamaan penuntut ilmu',
      'Mengidentifikasi 6 ciri khas pribadi muslim pecinta ilmu (curiosity tinggi, tekun pantang menyerah, gemar membaca, hormat guru, tawadhu\', dan senang berbagi)',
      'Menelaah manfaat berilmu bagi kehidupan duniawi (pribadi & sosial) dan kehidupan ukhrawi (dimudahkan ke surga & amal jariyah abadi)',
      'Menghayati 6 hikmah cinta ilmu dalam menumbuhkan rasa khosyyah kepada Allah Swt. dan membangkitkan peradaban emas Islam',
      'Mendiskusikan studi kasus literasi dan etika pelajar, mengisi lembar muhasabah 8 dimensi, serta menuntaskan evaluasi HOTS'
    ],
    keyTerms: [
      'Cinta Ilmu',
      'Thalabul \'Ilmi',
      'Fardhu \'Ain',
      'Fardhu Kifayah',
      'Q.S. Al-Mujadilah: 11',
      'Q.S. Az-Zumar: 9',
      'Q.S. Thaha: 114',
      'H.R. Ibnu Majah 224',
      'H.R. Muslim 2699',
      'Waratsatul Anbiya\'',
      'Syaghaf al-Ma\'rifah',
      'Tawqirul Ustadz',
      'Tawadhu\' Intelektual',
      'Amal Jariyah',
      'Khosyyah'
    ],
    summary: 'Materi PAI Kelas VIII Semester 2 Bab 8 menguraikan secara komprehensif 5 pilar cinta ilmu: (1) Pengertian cinta ilmu secara bahasa dan istilah syariat, hakikat thalabul ilmi sebagai ibadah agung, pembagian hukum Fardhu \'Ain (akidah/ibadah fardhu) vs Fardhu Kifayah (sains, kedokteran, teknologi), serta 6 syarat mutlak penuntut ilmu menurut syair Imam Syafi\'i (zaka\', hirsh, ijtihad, dirham, shuhbah ustadz, thulu zaman); (2) Dalil naqli Al-Qur\'an (Q.S. Al-Mujadilah: 11 tentang pengangkatan derajat orang beriman dan berilmu, Q.S. Az-Zumar: 9 tentang perbedaan orang berilmu vs jahil, Q.S. Thaha: 114 doa rabbi zidni \'ilma, Q.S. Fathir: 28 khosyyah ulama) beserta hukum tajwid dan hadits shahih perawi Ibnu Majah, Muslim, Abu Dawud, dan Tirmidzi; (3) 6 Ciri pribadi pecinta ilmu (curiosity ilmiah tinggi, tekun dan ulet, gemar membaca iqra\', hormat dan tawqir guru, rendah hati tawadhu\', dan senang berbagi/tutor sebaya); (4) Manfaat berilmu di ranah duniawi (kredibilitas sosial, problem solver, penangkal hoaks, kemajuan sains) dan ukhrawi (dimudahkan ke surga, ibadah sah, pahala jariyah abadi); serta (5) 6 Hikmah luhur cinta ilmu, studi kasus etika AI/plagiarisme, lembar evaluasi diri 8 indikator, dan kuis evaluasi penalaran HOTS.',
    studentActivities: [
      'Mengkaji lafaz dan hukum tajwid Q.S. Al-Mujadilah: 11 serta mendengarkan audio murattal ayat dan hadits',
      'Menganalisis perbedaan kewajiban ilmu Fardhu \'Ain vs Fardhu Kifayah dan 6 adab penuntut ilmu Imam Syafi\'i',
      'Mengeksplorasi kartu interaktif 6 ciri pribadi pecinta ilmu dan komparasi manfaat duniawi vs ukhrawi',
      'Mendiskusikan 3 studi kasus etika modern pelajar (ketergantungan AI tanpa belajar, sombong nilai, dan adab digital kepada guru)',
      'Mengisi instrumen muhasabah 8 dimensi karakter pecinta ilmu dan mengerjakan 5 butir soal kuis HOTS'
    ],
    reflectionQuestions: [
      'Mengapa Allah Swt. dalam Q.S. Al-Mujadilah: 11 menjanjikan pengangkatan derajat khusus bagi orang yang memadukan keimanan dan keilmuan?',
      'Bagaimana cara kamu memanfaatkan kecerdasan buatan (AI) dan gawai ponsel secara bijak agar tetap menjaga integritas adab penuntut ilmu?',
      'Langkah konkret apa yang sudah kamu lakukan setiap hari untuk mengamalkan ilmu yang kamu miliki agar bermanfaat bagi teman sekelasmu?'
    ]
  },
  {
    id: 'k8-bab9',
    grade: 'Kelas VIII',
    semester: 'Semester 2',
    chapterNumber: 9,
    title: 'Menerapkan Ketentuan Haji dan Umrah: Meneladani Ketaatan dan Mempererat Ukhuwah Islamiyah Dunia',
    cpElement: 'Fikih',
    hasFullTextbook: true,
    mainDalil: "Q.S. Ali 'Imran [3]: 97, Q.S. Al-Baqarah [2]: 196, Q.S. Al-Hajj [22]: 27, H.R. Bukhari No. 1773 & Muslim No. 1349",
    learningObjectives: [
      'Menjelaskan pengertian haji dan umrah secara bahasa dan istilah syariat, hukum kewajiban, serta perbedaan mendasar keduanya',
      'Menganalisis ketentuan syarat wajib haji/umrah, rukun haji (Ihram, Wukuf di Arafah, Thawaf Ifadhah, Sa\'i, Tahallul, Tertib), rukun umrah, wajib haji, larangan ihram, dan macam-macam dam (denda)',
      'Mengidentifikasi dan membedakan 3 tata cara pelaksanaan haji (Ifrad, Tamattu\', dan Qiran) beserta kelebihan, urutan, dan konsekuensi dam nusuk',
      'Memahami dan mensimulasikan alur manasik haji praktis step-by-step (Hari Tarwiyah 8 Dzulhijjah, Wukuf Arafah 9 Dzulhijjah, Mabit Muzdalifah, Jumrah Aqabah, Thawaf Ifadhah, Sa\'i, Mabit Mina, hingga Thawaf Wada\') serta melafalkan bacaan Talbiyah',
      'Menghayati 5 dimensi hikmah luhur ibadah haji dan umrah (spiritual tauhid, kesetaraan sosial dan ukhuwah islamiyah sedunia, pendidikan akhlak dan kesabaran, serta kemaslahatan umat)',
      'Mendiskusikan studi kasus kontekstual seputar ibadah haji modern (antrean panjang, etika bermedsos saat ibadah), mengisi lembar muhasabah 8 indikator, dan menuntaskan evaluasi HOTS'
    ],
    keyTerms: [
      'Haji',
      'Umrah',
      'Istitha\'ah',
      'Rukun Haji',
      'Wajib Haji',
      'Wukuf di Arafah',
      'Thawaf Ifadhah',
      'Sa\'i (Shafa-Marwah)',
      'Tahallul',
      'Miqat Zamani & Makani',
      'Haji Tamattu\'',
      'Haji Ifrad',
      'Haji Qiran',
      'Lafaz Talbiyah',
      'Dam (Denda Haji)',
      'Mabit (Muzdalifah & Mina)',
      'Melontar Jumrah',
      'Haji Mabrur'
    ],
    summary: 'Materi PAI Kelas VIII Semester 2 Bab 9 menyajikan panduan komprehensif Fikih Ibadah Haji dan Umrah mencakup 5 pilar utama: (1) Pengertian haji dan umrah secara etimologi dan syariat, kedudukan rukun Islam kelima, landasan dalil Al-Qur\'an (Q.S. Ali \'Imran: 97, Q.S. Al-Baqarah: 196, Q.S. Al-Hajj: 27) dan Hadis Nabi tentang surga bagi haji mabrur serta peleburan dosa, komparasi perbedaan haji vs umrah; (2) Ketentuan syarat sah dan wajib (Islam, Baligh, Berakal, Merdeka, Istitha\'ah), 6 Rukun Haji (Ihram, Wukuf di Arafah, Thawaf Ifadhah, Sa\'i, Tahallul, Tertib) yang tak tergantikan dam, 5 Rukun Umrah tanpa wukuf, 6 Wajib Haji (Miqat Makani, Mabit Muzdalifah, Mabit Mina, Lempar Jumrah, Thawaf Wada\', jauhi larangan), rincian larangan ihram pria/wanita, serta klasifikasi Dam (Tertib-Taqdir, Tertib-Ta\'dil, Takhyir-Ta\'dil, Takhyir-Taqdir); (3) Tata cara pelaksanaan 3 macam haji: Tamattu\' (dahulukan umrah lalu haji, wajib dam nusuk, paling fleksibel), Ifrad (haji dulu baru umrah, tanpa dam), dan Qiran (niat haji dan umrah sekaligus, wajib dam nusuk); (4) Panduan praktis Manasik Haji alur kronologis 8-13 Dzulhijjah, lafaz Talbiyah Arab-Latin-Arti beserta audio pelafalan, peta 5 Miqat Makani, doa-doa manasik; serta (5) 5 Dimensi hikmah agung haji dan umrah (penyucian jiwa, persaudaraan universal berkain kafan putih tanpa kasta, pembentukan akhlak sabar, napak tilas sejarah Ibrahim-Ismail-Muhammad, dan kemaslahatan ekonomi umat), studi kasus kontekstual, refleksi diri 8 indikator, dan 5 kuis HOTS evaluasi penalaran tingkat tinggi.',
    studentActivities: [
      'Menelaah dalil naqli Q.S. Ali \'Imran: 97 dan melafalkan kalimat Talbiyah dengan tartil dan penghayatan makna',
      'Menganalisis perbedaan prinsipil antara rukun haji (pembatal) vs wajib haji (dapat ditebus dam) dan klasifikasi larangan ihram',
      'Membuat peta komparasi 3 model pelaksanaan haji (Tamattu\', Ifrad, Qiran) beserta kelebihan dan beban amalan',
      'Mensimulasikan alur manasik haji praktis step-by-step mulai dari Miqat, Arafah, Muzdalifah, Mina, hingga Thawaf Wada\' di Makkah',
      'Mendiskusikan studi kasus etika haji masa kini (antrean panjang, fenomena swafoto/live medsos di depan Ka\'bah), mengisi lembar muhasabah 8 dimensi, serta menuntaskan soal HOTS'
    ],
    reflectionQuestions: [
      'Mengapa ibadah haji hanya diwajibkan bagi mereka yang telah memiliki kemampuan (istitha\'ah)? Bagaimana kamu melatih kemandirian sejak dini?',
      'Pelajaran kesetaraan apa yang dapat kamu petik dari pakaian ihram putih tanpa jahitan yang dikenakan seluruh jamaah dari seluruh belahan dunia?',
      'Bagaimana cara kamu menjaga kemabruran nilai-nilai haji (sabar, peduli, tidak berkata kotor/rafats) dalam pergaulan di sekolah sehari-hari?'
    ]
  },
  {
    id: 'k8-bab10',
    grade: 'Kelas VIII',
    semester: 'Semester 2',
    chapterNumber: 10,
    title: 'Merefleksikan Diri terhadap Sejarah dan Peran Kekhalifahan Islam Pasca Khulafaur Rasyidin: Dinasti Turki Usmani',
    cpElement: 'Sejarah Peradaban Islam (SPI)',
    hasFullTextbook: true,
    mainDalil: 'Q.S. Ar-Rūm [30]: 9, Q.S. Al-Anbiyā\' [21]: 105, Q.S. Muhammad [47]: 7, & H.R. Ahmad No. 18977',
    learningObjectives: [
      'Menjelaskan latar belakang sejarah berdirinya Dinasti Turki Usmani (asal-usul suku Kayi, kepemimpinan Ertugrul, deklarasi 1299 M oleh Osman I, wasiat emas Osman, dan perluasan wilayah awal)',
      'Menganalisis masa puncak kejayaan Dinasti Turki Usmani di bawah kepemimpinan 3 sultan besar: Sultan Muhammad Al-Fatih (penaklukan Konstantinopel 1453 M & toleransi Piagam Ahdnama), Sultan Salim I (penyatuan Hijaz & Khadimul Haramain), dan Sultan Sulaiman Al-Qanuni (kodifikasi hukum Kanunname, wilayah 3 benua, dan armada laut Barbarossa)',
      'Mengidentifikasi 3 pilar peradaban Usmani: supremasi hukum Kanunname & sistem Millet yang toleran, kekuatan militer korps Yanisari & Sipahi, serta arsitektur monumental karya Mimar Sinan & sistem sosial wakaf Kulliye',
      'Menganalisis faktor-faktor penyebab kemunduran Dinasti Turki Usmani: faktor internal (kemerosotan moral sultan & hedonisme, intrik politik harem, korupsi jual-beli jabatan, pemberontakan Yanisari, dan kemandekan intelektual larangan mesin cetak) serta faktor eksternal (Renaisans & Revolusi Industri Barat, kekalahan Wina 1683, Perjanjian Karlowitz, The Sick Man of Europe, hingga pembubaran kekhalifahan 1924 M)',
      'Menghayati dan merefleksikan 4 dimensi hikmah sejarah Dinasti Turki Usmani dalam kehidupan sehari-hari (keteladanan visi Al-Fatih, supremasi hukum adil dan toleransi, ibrah bahaya hedonisme/korupsi, serta etos inovasi sains dan literasi teknologi modern)',
      'Mendiskusikan 3 studi kasus reflektif sejarah, mengisi lembar muhasabah 8 dimensi karakter, dan menuntaskan evaluasi penalaran kuis HOTS'
    ],
    keyTerms: [
      'Dinasti Turki Usmani',
      'Ottoman Empire',
      'Suku Kayi',
      'Ertugrul Bey',
      'Osman I (Usman Bey)',
      'Tahun 1299 M',
      'Wasiat Osman',
      'Sultan Muhammad Al-Fatih (Mehmed II)',
      'Penaklukan Konstantinopel 1453 M',
      'Meriam Basilika',
      'Hagia Sophia & Istanbul',
      'Sultan Salim I',
      'Khadimul Haramain',
      'Sultan Sulaiman Al-Qanuni (The Magnificent)',
      'Kanun-i Osmani (Kanunname)',
      'Sistem Millet',
      'Korps Yanisari (Janissary)',
      'Mimar Sinan & Kulliye',
      'Laksamana Khairuddin Barbarossa',
      'The Sick Man of Europe',
      'Pembubaran Kekhalifahan 1924 M'
    ],
    summary: 'Materi PAI Kelas VIII Semester 2 Bab 10 mengkaji secara komprehensif sejarah dan refleksi Dinasti Turki Usmani (1299–1924 M): 1. Sejarah Berdiri: Berawal dari migrasi suku Kayi pimpinan Sulaiman Shah dan Ertugrul yang membantu Kesultanan Seljuk Rum hingga diberi tanah Sogut, kemudian Osman I memproklamasikan kemerdekaan Kesultanan Usmani pada tahun 1299 M yang berlandaskan wasiat ketaatan syariat dan keadilan bagi rakyat; 2. Puncak Kejayaan: Ditandai penaklukan benteng legendaris Konstantinopel pada 29 Mei 1453 M oleh Sultan Muhammad Al-Fatih (usia 21 tahun) membuktikan sabda Rasulullah Saw. dengan strategi kapal ditarik lewat darat Bukit Galata, penyatuan Dua Kota Suci Makkah-Madinah oleh Sultan Salim I (1517 M), hingga puncak peradaban 3 benua pada masa Sultan Sulaiman Al-Qanuni dengan kodifikasi hukum Kanunname, toleransi sistem Millet, arsitektur megah Mimar Sinan, dan armada laut Barbarossa; 3. Faktor Kemunduran: Pelemahan akibat faktor internal (dekadensi moral para sultan hedonis, intrik politik harem, suap jual-beli jabatan, arogansi & pemberontakan korps Yanisari, dan kemandekan intelektual akibat penolakan mesin cetak selama hampir 300 tahun) serta faktor eksternal (Revolusi Industri Eropa, kekalahan Perang Wina 1683, Perjanjian Karlowitz 1699, julukan The Sick Man of Europe, hingga kekalahan PD I dan penghapusan kekhalifahan pada 3 Maret 1924 M); serta 4. 4 Dimensi Hikmah Sejarah: Meneladani visi mulia dan disiplin tahajud Al-Fatih, menjunjung supremasi hukum yang adil dan toleransi kebangsaan, menjauhi korupsi dan hedonisme, serta membekali diri dengan sains-teknologi modern demi kemajuan bangsa.',
    studentActivities: [
      'Menelaah dalil naqli Q.S. Ar-Rum: 9 dan hadits shahih penaklukan Konstantinopel H.R. Ahmad No. 18977',
      'Mengeksplorasi garis waktu kronologis pendirian Usmani dari Suku Kayi, Osman I, hingga penaklukan Bursa dan Gallipoli',
      'Menganalisis komparasi kepemimpinan 3 Sultan Keemasan (Muhammad Al-Fatih, Salim I, Sulaiman Al-Qanuni) dan 3 pilar peradaban (Kanunname, Militer Janissary, Arsitektur Mimar Sinan)',
      'Membuat diagram analisis faktor internal vs eksternal kemunduran Daulah Usmani dan titik balik 1683–1924 M',
      'Mendiskusikan 3 studi kasus etika sejarah (etos sederhana vs istana mewah Dolmabahce, benalu korupsi Yanisari, dan bahaya ketertinggalan literasi mesin cetak)',
      'Mengisi instrumen muhasabah 8 indikator karakter penerus peradaban dan menuntaskan 5 soal kuis penalaran HOTS'
    ],
    reflectionQuestions: [
      'Pelajaran penting apa yang dapat kamu ambil dari strategi Sultan Muhammad Al-Fatih yang memadukan doa malam/tahajud dengan riset sains teknologi persenjataan modern?',
      'Bagaimana cara kamu meneladani prinsip keadilan hukum Sultan Sulaiman Al-Qanuni dalam kehidupan di lingkungan sekolah dan keluarga?',
      'Mengapa peradaban sebesar Turki Usmani yang bertahan lebih dari 6 abad bisa runtuh? Apa yang harus dihindari bangsa Indonesia agar tidak mengalami nasib serupa?'
    ]
  },

  // ========================== KELAS IX ==========================
  {
    id: 'k9-bab1',
    grade: 'Kelas IX',
    semester: 'Semester 1',
    chapterNumber: 1,
    title: 'Meraih Kemuliaan Derajat dengan Semangat Keilmuan: Q.S. Al-Mujādilah [58]: 11 & Q.S. Az-Zumar [39]: 9',
    cpElement: 'Al-Qur\'an dan Hadis',
    mainDalil: 'Q.S. Al-Mujādilah [58]: 11, Q.S. Az-Zumar [39]: 9, & H.R. Ibnu Majah No. 224',
    hasFullTextbook: true,
    learningObjectives: [
      'Membaca Q.S. Al-Mujādilah: 11 dan Q.S. Az-Zumar: 9 secara tartil sesuai kaidah tajwid, khususnya hukum bacaan Mim Sukun (مْ)',
      'Menghafal Q.S. Al-Mujādilah: 11, Q.S. Az-Zumar: 9, dan hadits tentang kewajiban menuntut ilmu dengan lancar dan fasih',
      'Menuliskan penggalan ayat Al-Qur\'an dengan kaidah kaligrafi khat Naskhi yang benar dan rapi sesuai garis dasar buku',
      'Menganalisis mufradat (kosakata kata per kata) dan menerjemahkan ayat ke dalam bahasa Indonesia secara kontekstual',
      'Mengidentifikasi dan menerapkan seluruh hukum bacaan Mim Sukun: Ikhfa Syafawi (huruf Ba\'), Idgham Mimi (huruf Mim), dan Idzhar Syafawi (26 huruf lainnya, khusus Wawu dan Fa\')',
      'Menjelaskan kandungan tafsir ayat tentang etika bermajelis (Tafassuh fil Majalis), keutamaan orang berilmu, dan karakteristik Ulul Albab',
      'Meneladani dan menerapkan 6 dimensi hikmah semangat keilmuan dalam kehidupan sehari-hari serta memecahkan studi kasus etika AI dan integritas penuntut ilmu'
    ],
    keyTerms: [
      'Q.S. Al-Mujādilah: 11',
      'Q.S. Az-Zumar: 9',
      'Mim Sukun (مْ)',
      'Ikhfa Syafawi',
      'Idgham Mimi (Mutamatsilain)',
      'Idzhar Syafawi',
      'Asyaddu Izhhar',
      'Tafassuh fil Majalis',
      'Al-Nusyuz (Bangkit Berdiri)',
      'Yarfa\'illah (Derajat Mulia)',
      'Ulul Albab',
      'Qanit Lail (Tahajud)',
      'Thalabul Ilmi Faridhatun',
      'H.R. Ibnu Majah No. 224',
      'H.R. Muslim No. 2699',
      'Khat Naskhi',
      'Tabayyun & Nalar Kritis'
    ],
    summary: 'Materi PAI Kelas IX Semester 1 Bab 1 membahas secara komprehensif 4 keterampilan Al-Qur\'an (membaca tartil, menghafal, menulis khat Naskhi, dan menjelaskan tafsir) serta penguasaan hukum bacaan Mim Sukun (مْ) berdasarkan Q.S. Al-Mujādilah [58]: 11, Q.S. Az-Zumar [39]: 9, dan hadis-hadis keilmuan: 1. Q.S. Al-Mujādilah: 11 mendidik adab berlapang dada dalam majelis (tafassuh fil majalis), kepatuhan bangkit melakukan kebaikan (insyuzu), dan janji Allah Swt. mengangkat derajat berlipat ganda bagi orang beriman dan berilmu di bawah pengawasan Al-Khabir; 2. Q.S. Az-Zumar: 9 melukiskan karakter Ulul Albab yang tunduk beribadah di waktu malam (qanit lail), menyeimbangkan rasa takut azab (khauf) dan harap rahmat (raja\'), serta menegaskan ketidaksetaraan mutlak antara orang yang berilmu dengan orang yang jahil; 3. Hukum Bacaan Mim Sukun terbagi menjadi tiga: Ikhfa Syafawi (bertemu Ba\', dibaca samar dengung 2 harakat), Idgham Mimi/Mutamatsilain (bertemu sesama Mim, melebur dengung 2 harakat), dan Idzhar Syafawi (bertemu 26 huruf lainnya, dibaca jelas tanpa dengung, dengan peringatan khusus Asyaddu Izhhar pada Wawu dan Fa\'); 4. Hadits Terkait menegaskan bahwa menuntut ilmu adalah fardhu bagi setiap muslim (H.R. Ibnu Majah 224), dimudahkan jalan menuju surga (H.R. Muslim 2699), keutamaan orang berilmu laksana rembulan purnama di atas bintang (H.R. Abu Dawud 3641), dan ilmu bermanfaat merupakan pahala jariyah abadi (H.R. Muslim 1631); serta 5. 6 Dimensi Hikmah Keilmuan mencakup kenaikan derajat, bekal khalifah pemakmur bumi, adab toleransi majelis, integritas anti-mencontek di era AI, budaya literasi membaca, dan integrasi harmonis antara sains dengan spiritualitas iman.',
    studentActivities: [
      'Membaca Q.S. Al-Mujādilah: 11 dan Q.S. Az-Zumar: 9 secara tartil dan menyimak audio tilawah Syaikh Alafasy',
      'Menghafal ayat menggunakan metode Tikrar 3x3x4 dan memanfaatkan fitur interaktif uji hafalan mandiri',
      'Menganalisis tabel mufradat kata per kata lengkap dengan makna pelajaran akhlak',
      'Mengklasifikasikan hukum bacaan Mim Sukun (Ikhfa Syafawi, Idgham Mimi, Idzhar Syafawi) dalam ayat pada tabel interaktif berfilter',
      'Mempraktikkan penulisan kaligrafi khat Naskhi penggalan ayat pada buku bergaris sesuai aturan kedudukan huruf di atas dan di bawah garis',
      'Mendiskusikan 3 studi kasus etika keilmuan era digital (mencontek menggunakan AI, adab gadget saat majelis pengajian, dan keseimbangan prestasi sains vs shalat fardhu)',
      'Mengisi lembar muhasabah diri 8 indikator karakter pelajar pecinta ilmu dan menyelesaikan 5 kuis penalaran HOTS dengan pembahasan tuntas'
    ],
    reflectionQuestions: [
      'Bagaimana kamu mengamalkan adab tafassuh fil majalis (melapangkan ruang) baik di ruang kelas sekolah maupun di grup komunikasi digital?',
      'Mengapa nilai akademis 100 yang diperoleh dari kecurangan mencontek/AI bertentangan dengan prinsip "Wallāhu bimā ta\'malūna khabīr"?',
      'Bagaimana cara kamu membagi waktu antara belajar tekun untuk meraih prestasi sains/sekolah dengan menjaga shalat fardhu dan ibadah malam laksana karakter Qanit dalam Q.S. Az-Zumar: 9?'
    ]
  },
  {
    id: 'k9-bab2',
    grade: 'Kelas IX',
    semester: 'Semester 1',
    chapterNumber: 2,
    title: 'Meyakini dan Merefleksikan Iman kepada Hari Akhir',
    cpElement: 'Akidah',
    mainDalil: 'Q.S. Al-Hajj: 7, Q.S. Az-Zalzalah: 1-8, Q.S. Al-Qāri\'ah: 1-11, & Hadits Shahih Muslim',
    hasFullTextbook: true,
    learningObjectives: [
      'Menjelaskan pengertian beriman kepada Hari Akhir secara bahasa dan istilah syariat serta kedudukannya dalam Rukun Iman ke-5',
      'Menganalisis dalil naqli Al-Qur\'an (Q.S. Al-Hajj: 7, Q.S. Az-Zalzalah: 1-8, Q.S. Al-Qāri\'ah: 1-11) dan hadis tanda kiamat',
      'Mengidentifikasi dan membedakan tanda-tanda Kiamat Sugrā (Kecil) dan 10 tanda besar Kiamat Kubrā (Besar)',
      'Menjelaskan peristiwa alam barzakh (sakaratul maut, fitnah kubur Munkar dan Nakir, nikmat dan siksa kubur, serta amalan penyelamat)',
      'Menguraikan secara kronologis 9 tahapan Hari Akhir (Nafkhatush Sha\'iq, Nafkhatul Ba\'ats, Yaumul Ba\'ats, Yaumul Mahsyar, Syafa\'at \'Uzhma, Yaumul Hisab, Yaumul Mizan, As-Shirath, hingga Yaumul Jaza\' Surga dan Neraka)',
      'Menghubungkan keimanan kepada Hari Akhir dengan fungsi rem moral (moral brake), pembentukan 5 dimensi karakter pelajar, dan penolakan maksiat era digital',
      'Merefleksikan diri melalui 3 studi kasus kontemporer (flexing media sosial, cyberbullying jejak digital, jalan pintas mencontek AI), lembar muhasabah 8 dimensi, dan kuis penalaran HOTS'
    ],
    keyTerms: [
      'Hari Akhir (Kiamat)',
      'Kiamat Sugra & Kubra',
      'Alam Barzakh',
      'Fitnah Munkar & Nakir',
      'Tiupan Sangkakala',
      'Yaumul Ba\'ats',
      'Yaumul Mahsyar',
      'Syafa\'at \'Uzhma',
      'Yaumul Hisab',
      'Yaumul Mizan',
      'As-Shirath',
      'Surga & Neraka',
      'Moral Brake',
      'Mazra\'atul Akhirah',
      'Muraqabatullah'
    ],
    summary: 'Materi PAI Kelas IX Semester 1 Bab 2 membahas secara komprehensif akidah iman kepada Hari Akhir sebagai Rukun Iman kelima: 1. Pengertian secara bahasa ("al-Yaum al-Akhir" / hari penghabisan tanpa hari lagi) dan istilah syariat (keyakinan teguh hancurnya semesta dan dibangkitkannya manusia untuk hisab dan pembalasan abadi di surga atau neraka); 2. 10 Nama Lain Hari Akhir dalam Al-Qur\'an (Yaumul Qiyamah, Yaumul Ba\'ats, Yaumul Hisab, Yaumud Din, Yaumul Hasrah, Yaumul Fashl, Yaumul Khulud, Al-Qari\'ah, Al-Waqi\'ah, Yaumut Talaq); 3. Dalil Naqli Al-Qur\'an dan Hadits (Q.S. Al-Hajj: 7, Q.S. Az-Zalzalah: 1-8 tentang goncangan dahsyat dan keadilan seberat zarrah, Q.S. Al-Qari\'ah: 1-11 tentang laron bertebaran dan neraca Mizan, serta Hadis Riwayat Muslim No. 2901 tentang 10 tanda besar Kiamat Kubra); 4. Klasifikasi Tanda Kiamat terbagi menjadi Kiamat Sugra (kematian personal, bencana lokal, wafatnya ulama, dekadensi moral, meninggikan gedung) dan Kiamat Kubra (Dajjal, Nabi Isa AS, Ya\'juj Ma\'juj, matahari terbit dari barat, Dabbat al-Ardh, Dukhan, 3 penenggelaman bumi, dan api Aden); 5. Peristiwa Alam Barzakh mencakup sakaratul maut, fitnah pertanyaan Munkar-Nakir, nikmat dan siksa kubur, serta 5 amalan penyelamat (khususnya membaca Surah Al-Mulk); 6. Kronologi 9 Tahapan Hari Akhir dari Tiupan Sangkakala 1 pembinasaan (Az-Zumar: 68), Tiupan 2 kebangkitan, Yaumul Ba\'ats, Yaumul Mahsyar dengan matahari didekatkan 1 mil, Syafa\'at \'Uzhma Nabi Muhammad SAW, Yaumul Hisab (mulut dikunci, tangan & kaki bersaksi - Yasin: 65), Yaumul Mizan, jembatan As-Shirath, hingga Yaumul Jaza\' (Surga Firdaus, \'Adn, Na\'im vs Neraka Jahannam, Lazha, Hawiyah); 7. Hubungan dengan Akhlak berfungsi sebagai "Moral Brake" (rem moral) dan penguat integritas anti-curang, anti-cyberbullying, filantropi sosial, dan resiliensi; serta 8. Refleksi diri melalui 3 studi kasus era digital, lembar muhasabah 8 dimensi, matriks kebiasaan harian, dan kuis HOTS 5 butir soal dengan pembahasan lengkap.',
    studentActivities: [
      'Menelaah dalil naqli Al-Qur\'an (Q.S. Al-Hajj: 7, Q.S. Az-Zalzalah: 1-8, Q.S. Al-Qari\'ah: 1-11) dan mendengarkan audio tilawah murottal Syaikh Alafasy',
      'Mengidentifikasi dan membedakan fenomena tanda Kiamat Sugra dan 10 tanda Kiamat Kubra melalui tabel filter interaktif',
      'Mengkaji peristiwa alam barzakh (sakaratul maut, pertanyaan kubur Munkar-Nakir) dan mempraktikkan amalan pelindung (Surah Al-Mulk & doa tasyahud)',
      'Mempelajari visualisasi kronologis 9 tahapan akbar Hari Akhir dari Tiupan Sangkakala hingga pembalasan Surga dan Neraka',
      'Menganalisis hubungan iman Hari Akhir sebagai Moral Brake dalam membendung kecurangan mencontek, cyberbullying, dan gaya hidup pamer (flexing)',
      'Mengisi lembar muhasabah diri 8 indikator karakter mukmin sadar akhirat dan menyelesaikan kuis penalaran HOTS 5 butir soal dengan pembahasan tuntas'
    ],
    reflectionQuestions: [
      'Bagaimana kesadaran bahwa "tangan dan kaki akan bersaksi di Yaumul Hisab" mempengaruhi caramu mengetik komentar dan status di media sosial?',
      'Mengapa nilai 100 yang diperoleh dari hasil mencontek atau plagiarisme AI justru menjadi beban kerugian berat di hadapan Neraca Mizan?',
      'Amalan jariyah dan kebaikan tulus apa yang sudah kamu persiapkan hari ini sebagai bekal jika malaikat maut menjemput secara tiba-tiba?'
    ]
  },
  {
    id: 'k9-bab3',
    grade: 'Kelas IX',
    semester: 'Semester 1',
    chapterNumber: 3,
    title: 'Menerapkan Makna Cinta Lingkungan dalam Kehidupan Sehari-hari',
    cpElement: 'Akhlak',
    mainDalil: 'Q.S. Ar-Rūm: 41, Q.S. Al-A\'rāf: 56, Q.S. Al-Baqarah: 205, & Hadits Shahih Bukhari-Muslim',
    hasFullTextbook: true,
    learningObjectives: [
      'Menjelaskan pengertian cinta lingkungan (ri\'āyah al-bī\'ah) secara bahasa dan istilah syariat serta kedudukannya dalam ajaran Islam',
      'Menganalisis dalil naqli Al-Qur\'an (Q.S. Ar-Rūm: 41, Q.S. Al-A\'rāf: 56, Q.S. Al-Baqarah: 205, Q.S. Al-Anbiyā\': 107) dan Hadits Nabi tentang kelestarian alam dan sedekah menanam pohon',
      'Memahami pentingnya cinta lingkungan berdasarkan konsep kekhalifahan manusia (khalīfah fil ardh), keseimbangan semesta (al-mīzān), dan rahmatan lil \'ālamīn',
      'Mendiagnosis bentuk-bentuk kerusakan lingkungan (fasād fil ardh) seperti deforestasi, sampah plastik, pencemaran air, dan polusi udara',
      'Menerapkan ciri-ciri cinta lingkungan melalui 5 pilar aksi: kebersihan thahārah, hemat air/energi, penghijauan/reboisasi, budaya 3R, dan advokasi amar ma\'ruf lingkungan',
      'Menghayati hikmah luhur cinta lingkungan, merefleksikan studi kasus kontemporer, dan menyelesaikan kuis penalaran HOTS'
    ],
    keyTerms: [
      'Cinta Lingkungan',
      'Fiqh al-Bī\'ah',
      'Khalīfah fil Ardh',
      'Fasād fil Ardh',
      'Al-Mīzān',
      'Sedekah Jariyah Pohon',
      'Anti-Isrāf',
      'Prinsip Himā & Harīm'
    ],
    summary: 'Materi Bab 3 PAI Kelas IX Semester 1 membahas secara komprehensif: (1) Pengertian cinta lingkungan (ri\'āyah al-bī\'ah) dan dalil naqli (Q.S. Ar-Rūm: 41, Q.S. Al-A\'rāf: 56, Q.S. Al-Baqarah: 205, Q.S. Al-Anbiyā\': 107, serta Hadits Shahih Bukhari-Muslim tentang sedekah jariyah menanam pohon dan larangan isrāf boros air); (2) Urgensi pentingnya cinta lingkungan sebagai amanah status Khalifah fil Ardh, menjaga hukum keseimbangan semesta (Al-Mīzān), memelihara ayat kauniyah yang bertasbih, rahmatan lil \'ālamīn, serta warisan generasi mendatang (Hifẓ an-Nasl); (3) Bentuk-bentuk kerusakan lingkungan (fasād fil ardh): deforestasi, gunungan sampah plastik sekali pakai, pencemaran sungai/laut, polusi udara gas rumah kaca, dan kepunahan satwa langka beserta tinjauan dosa syariatnya; (4) Ciri-ciri mukmin pecinta lingkungan: thahārah ekologis, zuhud anti-pemborosan air dan listrik, gemar menanam pohon (greening), budaya 3R (reduce, reuse, recycle), serta pelopor teladan hijau di sekolah; dan (5) Hikmah cinta lingkungan: meraih rida Allah, mengalirkan pahala sedekah jariyah tiada henti, mencegah bencana banjir dan tanah longsor, menjaga kesehatan masyarakat, dilengkapi 3 studi kasus nyata, lembar muhasabah 8 indikator, dan kuis HOTS 5 butir soal.',
    studentActivities: [
      'Menanam bibit pohon/bunga di halaman sekolah sebagai amal sedekah jariyah ekologis',
      'Membawa tumbler dan wadah makan sendiri ke kantin sekolah untuk meminimalisasi sampah plastik sekali pakai',
      'Praktik hemat air saat wudhu sesuai sunnah Rasulullah SAW dan mematikan lampu/kipas kelas saat tidak digunakan'
    ],
    reflectionQuestions: [
      'Mengapa dalam Q.S. Ar-Rum: 41 Allah menegaskan bahwa kerusakan di darat dan di laut adalah akibat tangan manusia sendiri?',
      'Langkah nyata apa yang sudah kamu lakukan hari ini untuk menghemat air dan mengurangi sampah plastik di sekolahmu?'
    ]
  },
  {
    id: 'k9-bab4',
    grade: 'Kelas IX',
    semester: 'Semester 1',
    chapterNumber: 4,
    title: 'Menerapkan Ketentuan Penyembelihan Hewan, serta Kurban dan Akikah',
    cpElement: 'Fikih',
    mainDalil: 'Q.S. Al-Kautsar: 1-3, Q.S. Al-An\'am: 162-163, Q.S. Al-Hajj: 34 & 37, & Hadits Shahih Muslim No. 1955',
    hasFullTextbook: true,
    learningObjectives: [
      'Menjelaskan ketentuan, hakikat, dan dalil naqli penyembelihan hewan (adz-dzabh/an-nahr) sesuai tuntunan syariat Islam',
      'Membedakan syarat penyembelih, syarat hewan yang disembelih, syarat alat penyembelih, dan rukun penyembelihan',
      'Mengidentifikasi 4 urat saluran leher yang wajib terputus (hulqum, mari\', dan wadajain) serta adab sunnah penuh ihsan saat menyembelih',
      'Menganalisis perbandingan komprehensif antara ibadah kurban dan akikah dari aspek hukum, waktu, jenis hewan, dan tata cara pembagian dagingnya',
      'Mengevaluasi ketentuan keabsahan hewan kurban/akikah (kriteria musinnah/jadz\'ah, bebas 4 cacat fisik menurut Hadits Nabi)',
      'Menghayati hikmah spiritual, sosial, dan higienitas ilmiah di balik penyembelihan hewan, kurban, dan akikah dalam kehidupan bermasyarakat modern'
    ],
    keyTerms: [
      'Adz-Dzabh',
      'An-Nahr',
      'Udh-hiyyah (Kurban)',
      '\'Aqīqah (Akikah)',
      'Hulqūm & Marī\'',
      'Al-Wadajain',
      'Musinnah & Jadz\'ah',
      'Ihsan Penyembelihan',
      'Fatwa MUI Stunning'
    ],
    summary: 'Materi Bab 4 PAI Kelas IX Semester 1 membahas secara komprehensif: (1) Ketentuan dan dalil naqli penyembelihan hewan (Q.S. Al-Kautsar: 1-3, Q.S. Al-An\'am: 162-163, Q.S. Al-Hajj: 34 & 37, serta Hadits riwayat Muslim tentang kewajiban berlaku ihsan dan menajamkan pisau); (2) Syarat, rukun, dan tata cara penyembelihan hewan: syarat penyembelih muslim/ahli kitab berakal dan mumayyiz, syarat hewan halal yang masih hidup sempurna (hayat mustaqirrah), syarat alat tajam selain tulang/kuku/gigi, rukun penyembelihan, 4 saluran leher wajib terputus (Hulqum, Mari\', dan sepasang Al-Wadajain), sunnah adab penyembelihan menghadap kiblat dan membaringkan di sisi kiri, hal makruh/diharamkan, serta fatwa MUI tentang pemingsanan terkontrol (stunning); (3) Komparasi mendalam kurban vs akikah dari sisi hukum sunnah mu\'akkadah, waktu pelaksanaan (10-13 Dzulhijjah vs hari ke-7/14/21), jenis & umur hewan musinnah, porsi per orang (1 kambing / 7 sapi vs 2 kambing anak laki-laki & 1 kambing anak perempuan), cara pembagian daging (mentah vs matang manis), serta larangan menjual kulit atau menjadikannya upah jagal; dan (4) Hikmah luhur spiritual, sosial, dan higienitas sains medis (exsanguination maksimal), dilengkapi 3 studi kasus kontemporer, lembar muhasabah 8 indikator, dan kuis evaluasi HOTS 5 butir soal.',
    studentActivities: [
      'Menyaksikan dan menganalisis demonstrasi tata cara penyembelihan hewan halal (Juleha) dengan memperhatikan 4 saluran leher yang terputus',
      'Membuat tabel komparasi perbedaan kurban dan akikah beserta simulasi perhitungan jumlah hewan yang dibutuhkan',
      'Membantu kepanitiaan kurban di sekolah atau masjid dengan menerapkan adab ihsan dan kebersihan lingkungan'
    ],
    reflectionQuestions: [
      'Mengapa Rasulullah SAW melarang keras mengasah pisau di depan hewan yang hendak disembelih?',
      'Bagaimana cara kamu menumbuhkan keikhlasan berkorban seperti yang dicontohkan oleh Nabi Ibrahim AS dan Nabi Ismail AS dalam kehidupan sehari-hari?'
    ]
  },
  {
    id: 'k9-bab5',
    grade: 'Kelas IX',
    semester: 'Semester 1',
    chapterNumber: 5,
    title: 'Merefleksikan Sejarah Masuknya Islam di Indonesia',
    cpElement: 'Sejarah Peradaban Islam (SPI)',
    mainDalil: 'Q.S. An-Nahl: 125, Q.S. Al-Hujurat: 13, Q.S. Ali \'Imran: 159, & Hadits Riwayat Bukhari No. 3461',
    hasFullTextbook: true,
    learningObjectives: [
      'Menganalisis 4 teori masuknya Islam ke Indonesia (Teori Makkah, Gujarat, Persia, dan China) beserta tokoh pendukung, kurun waktu, dan bukti historis-arkeologisnya',
      'Menguraikan 6 jalur penyebaran Islam di kepulauan Nusantara (perdagangan, perkawinan, pendidikan pesantren, tasawuf, kesenian/akulturasi, dan politik kekuasaan)',
      'Mengidentifikasi peranan kerajaan-kerajaan Islam perintis (Samudera Pasai, Kesultanan Demak Bintoro, dan Aceh Darussalam) dalam transformasi dakwah',
      'Menganalisis dalil naqli Al-Qur\'an dan Hadits tentang metode dakwah damai penuh hikmah (bilā \'unfin) dan kesetaraan derajat manusia',
      'Merefleksikan 5 dimensi hikmah mempelajari sejarah masuknya Islam bagi pembentukan karakter toleransi, literasi kritis, persatuan bangsa, dan kearifan kultural di era digital'
    ],
    keyTerms: [
      'Teori Makkah',
      'Teori Gujarat',
      'Teori Persia',
      'Teori China',
      'Dakwah Bilā \'Unfin',
      'Jalur Perdagangan',
      'Pondok Pesantren',
      'Akulturasi Budaya',
      'Jimat Kalimasada',
      'Tasamuh & Al-\'Urf'
    ],
    summary: 'Materi Bab 5 PAI Kelas IX Semester 1 membahas secara komprehensif: (1) 4 Teori masuknya Islam ke Indonesia: Teori Makkah (abad ke-7 M / 1 H oleh Buya Hamka & T.W. Arnold dengan bukti makam Barus 672 M, catatan Dinasti Tang 674 M, mazhab Syafi\'i, dan gelar Al-Malik); Teori Gujarat (abad ke-13 M oleh Snouck Hurgronje dengan bukti nisan pualam Cambay Sultan Malik As-Saleh 1297 M); Teori Persia (abad ke-13 M oleh Hoesein Djajadiningrat dengan bukti tradisi Tabot/Tabuik 10 Muharram dan istilah baris Jabar-Je-er-Pe-es); dan Teori China (abad ke-9/15 M oleh Slamet Muljana dengan bukti kronik Sampo Kong Semarang dan ekspedisi armada damai Laksamana Cheng Ho); (2) 6 Jalur penyebaran Islam di Indonesia yang berlangsung damai tanpa kekerasan (bilā \'unfin): jalur perdagangan maritim, perkawinan bangsawan/pribumi, pendidikan pesantren (Ampeldenta & Giri), tasawuf spiritual pembersihan jiwa, kesenian akulturatif (wayang kulit Jimat Kalimasada, gamelan Sekaten, tembang Ilir-Ilir Sunan Kalijaga), dan politik kekuasaan kesultanan; serta (3) 5 Hikmah luhur mempelajari sejarah masuknya Islam: meneladani karakter dakwah sejuk, menumbuhkan toleransi kultural (tasamuh), etos kerja gigih para musafir, memperkokoh integrasi persatuan bangsa, dilengkapi 3 studi kasus kontemporer, lembar muhasabah 8 indikator, dan kuis penalaran HOTS 5 butir soal.',
    studentActivities: [
      'Membuat peta jalur pelayaran masuknya Islam ke kepulauan Nusantara berdasarkan 4 teori besar',
      'Menganalisis nilai-nilai tauhid dan pesan moral dalam tembang Ilir-Ilir ciptaan Sunan Kalijaga',
      'Melakukan wawancara atau riset mandiri mengenai peninggalan bersejarah Islam (masjid kuno/makam ulama) di daerah masing-masing'
    ],
    reflectionQuestions: [
      'Mengapa para pendakwah Islam di Nusantara lebih memilih jalan akulturasi damai daripada memaksakan kehendak dengan kekerasan?',
      'Bagaimana cara kamu meneladani kejujuran para pedagang muslim perintis dalam kehidupan bersekolah sehari-hari?'
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
