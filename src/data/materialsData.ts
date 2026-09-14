import { Material } from '../types';

export const INITIAL_MATERIALS: Material[] = [
  // ================= KELAS VII =================
  {
    id: 'mat-vii-1',
    title: 'Al-Qur\'an sebagai Pedoman Hidup',
    gradeLevel: 'VII',
    chapter: 1,
    chapterTitle: 'Merengkuh Kedamaian dengan Al-Qur\'an',
    category: "AL-QUR'AN DAN HADIS",
    learningObjectives: [
      'Memahami kedudukan Al-Qur\'an sebagai wahyu Allah SWT',
      'Membiasakan membaca dan mentadabburi ayat Al-Qur\'an setiap hari',
      'Menerapkan nilai-nilai Al-Qur\'an dalam pergaulan di sekolah'
    ],
    fullContent: 'Al-Qur\'an adalah kalam Allah SWT yang diturunkan kepada Nabi Muhammad SAW melalui Malaikat Jibril secara berangsur-angsur sebagai pedoman hidup (hudan lin-nas). Al-Qur\'an memuat petunjuk akidah, syariat, dan akhlak.',
    summary: 'Al-Qur\'an merupakan mukjizat abadi dan petunjuk utama umat Islam untuk mencapai keselamatan dunia dan akhirat.',
    quranVerse: {
      arabic: 'إِنَّ هَٰذَا الْقُرْآنَ يَهْدِي لِلَّتِي هِيَ أَقْوَمُ',
      latin: "Inna haadzal-Qur'aana yahdii lillatii hiya aqwam",
      surahName: 'Al-Isra\'',
      verseNumber: '9',
      translation: 'Sungguh, Al-Qur\'an ini memberi petunjuk ke (jalan) yang paling lurus.'
    },
    dailyLifeExample: 'Menjadikan tilawah pagi sebelum belajar sebagai rutinitas kelas VII di UPT SMPN 2 Rebang Tangkas.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    references: ['Buku Teks PAI & Budi Pekerti SMP Kelas VII Kemendikbudristek', 'Tafsir Al-Muyassar'],
    estimatedReadingMinutes: 8,
    xpReward: 50
  },
  {
    id: 'mat-vii-2',
    title: 'Memahami Ayat-Ayat Pilihan tentang Toleransi',
    gradeLevel: 'VII',
    chapter: 2,
    chapterTitle: 'Menjalin Persaudaraan dalam Kebhinekaan',
    category: "AL-QUR'AN DAN HADIS",
    learningObjectives: [
      'Menganalisis kandungan Q.S. Al-Hujurat/49: 13',
      'Menghargai keberagaman suku dan agama',
      'Menjauhi perilaku diskriminasi dan perundungan (bullying)'
    ],
    fullContent: 'Keberagaman suku bangsa dan bahasa adalah sunnatullah (ketetapan Allah). Manusia diciptakan berbeda-beda untuk saling mengenal (lita\'arafu) dan bekerja sama dalam kebajikan.',
    summary: 'Kemuliaan di hadapan Allah semata-mata diukur dari ketakwaan, bukan suku, rupa, atau harta.',
    quranVerse: {
      arabic: 'يَا أَيُّهَا النَّاسُ إِنَّا خَلَقْنَاكُم مِّن ذَكَرٍ وَأُنثَىٰ وَجَعَلْنَاكُمْ شُعُوبًا وَقَبَائِلَ لِتَعَارَفُوا',
      latin: "Yaa ayyuhan-naasu innaa khalaqnaakum min zakariw wa unsaa...",
      surahName: 'Al-Hujurat',
      verseNumber: '13',
      translation: 'Wahai manusia! Sungguh, Kami telah menciptakan kamu dari seorang laki-laki dan seorang perempuan, kemudian Kami jadikan kamu berbangsa-bangsa dan bersuku-suku agar kamu saling mengenal.'
    },
    dailyLifeExample: 'Bekerja kelompok secara rukun tanpa membeda-bedakan latar belakang kawan sekelas di SMP.',
    references: ['Buku PAI Kelas VII', 'Tafsir Ibnu Katsir'],
    estimatedReadingMinutes: 7,
    xpReward: 50
  },
  {
    id: 'mat-vii-3',
    title: 'Hadis tentang Kehidupan dan Menuntut Ilmu',
    gradeLevel: 'VII',
    chapter: 3,
    chapterTitle: 'Semangat Menuntut Ilmu Sepanjang Hayat',
    category: "AL-QUR'AN DAN HADIS",
    learningObjectives: [
      'Membaca dan menghafalkan hadis kewajiban menuntut ilmu',
      'Mengembangkan rasa ingin tahu dan rajin berdiskusi di kelas'
    ],
    fullContent: 'Rasulullah SAW mewajibkan setiap muslim untuk menuntut ilmu. Orang yang menempuh perjalanan untuk mencari ilmu akan dimudahkan jalannya menuju surga.',
    summary: 'Menuntut ilmu adalah ibadah yang meninggikan derajat seorang mukmin di dunia dan akhirat.',
    hadith: {
      arabic: 'طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ',
      narrator: 'HR. Ibnu Majah No. 224',
      translation: 'Menuntut ilmu itu adalah kewajiban bagi setiap orang muslim.'
    },
    dailyLifeExample: 'Menyiapkan buku pelajaran malam hari dan fokus menyimak penjelasan bapak/ibu guru di kelas.',
    references: ['Sunan Ibnu Majah', 'Riyadhus Shalihin'],
    estimatedReadingMinutes: 6,
    xpReward: 45
  },
  {
    id: 'mat-vii-4',
    title: 'Iman kepada Allah SWT dan Makrifatullah',
    gradeLevel: 'VII',
    chapter: 4,
    chapterTitle: 'Mengenal Allah Sang Maha Pencipta',
    category: 'AQIDAH',
    learningObjectives: [
      'Menjelaskan pengertian iman kepada Allah secara bahasa dan istilah',
      'Menunjukkan bukti dalil aqli dan naqli keberadaan Allah SWT'
    ],
    fullContent: 'Iman kepada Allah berarti meyakini dengan hati, mengucapkan dengan lisan, dan mengamalkan dengan perbuatan bahwa Allah adalah Rabb dan Ilah satu-satunya yang menciptakan alam semesta.',
    summary: 'Keteraturan tata surya dan penciptaan diri kita adalah bukti nyata eksistensi dan keagungan Allah SWT.',
    dailyLifeExample: 'Menjaga sholat 5 waktu sebagai bentuk ketaatan tulus kepada Allah SWT.',
    references: ['Aqidatul Awwam', 'PAI Kelas VII Kemdikbud'],
    estimatedReadingMinutes: 9,
    xpReward: 55
  },
  {
    id: 'mat-vii-5',
    title: 'Meneladani Asmaul Husna: Al-\'Alim, Al-Khabir, As-Sami\', Al-Bashir',
    gradeLevel: 'VII',
    chapter: 5,
    chapterTitle: 'Meraih Kemuliaan Hati dengan Asmaul Husna',
    category: 'AQIDAH',
    learningObjectives: [
      'Memahami makna Al-\'Alim (Maha Mengetahui) dan Al-Khabir (Maha Teliti)',
      'Memahami makna As-Sami\' (Maha Mendengar) dan Al-Bashir (Maha Melihat)',
      'Menjaga sikap diri karena meyakini pengawasan Allah yang Maha Meliputi'
    ],
    fullContent: 'Asmaul Husna adalah nama-nama Allah yang terbaik. Meneladani sifat Allah yang Maha Mengetahui dan Maha Melihat membuat seorang siswa senantiasa jujur saat ujian walaupun tanpa pengawasan ketat.',
    summary: 'Kesadaran bahwa Allah selalu melihat dan mendengar melahirkan muraqabah (sikap merasa diawasi Allah).',
    dailyLifeExample: 'Tidak menyontek saat ulangan karena yakin Allah Maha Melihat segala perbuatan tersembunyi.',
    references: ['Kitab Tauhid', 'PAI Kelas VII'],
    estimatedReadingMinutes: 8,
    xpReward: 50
  },
  {
    id: 'mat-vii-6',
    title: 'Iman kepada Malaikat-Malaikat Allah',
    gradeLevel: 'VII',
    chapter: 6,
    chapterTitle: 'Ketaatan Malaikat Teladan Mukmin',
    category: 'AQIDAH',
    learningObjectives: [
      'Menyebutkan nama 10 malaikat dan tugas-tugas pokoknya',
      'Mencontoh ketaatan malaikat dalam menjalankan perintah Allah'
    ],
    fullContent: 'Malaikat diciptakan dari nur (cahaya) dan selalu patuh menjalankan titah Allah tanpa pernah bermaksiat. Malaikat Raqib dan Atid selalu mencatat amal perbuatan kita.',
    summary: 'Keyakinan akan malaikat Raqib dan Atid memotivasi kita memperbanyak amal kebajikan.',
    dailyLifeExample: 'Bersegera berbuat kebajikan dan menahan lisan dari ghibah atau kata-kata kotor.',
    references: ['Buku PAI VII', 'Syarah Aqidah Washithiyyah'],
    estimatedReadingMinutes: 8,
    xpReward: 50
  },
  {
    id: 'mat-vii-7',
    title: 'Indahnya Kejujuran, Amanah, dan Istiqamah',
    gradeLevel: 'VII',
    chapter: 7,
    chapterTitle: 'Pribadi Berintegritas Berbudi Luhur',
    category: 'AKHLAK',
    learningObjectives: [
      'Menjelaskan hakikat kejujuran, amanah, dan istiqamah',
      'Membiasakan diri mengembalikan barang temuan dan menepati janji'
    ],
    fullContent: 'Jujur (shiddiq) adalah kesesuaian antara lisan dan kenyataan. Amanah adalah bertanggung jawab atas kepercayaan. Istiqamah adalah teguh pendirian di atas kebenaran.',
    summary: 'Tiga sifat mulia ini menjadi kunci kepercayaan masyarakat dan keberkahan hidup seorang pelajar.',
    dailyLifeExample: 'Mengembalikan dompet atau alat tulis yang tertinggal di laci kelas kepada pemiliknya atau guru piket.',
    references: ['Ihya Ulumiddin', 'PAI Kelas VII'],
    estimatedReadingMinutes: 7,
    xpReward: 50
  },
  {
    id: 'mat-vii-8',
    title: 'Berbakti kepada Orang Tua dan Menghormati Guru',
    gradeLevel: 'VII',
    chapter: 8,
    chapterTitle: 'Birrul Walidain dan Menghormati Pendidik',
    category: 'AKHLAK',
    learningObjectives: [
      'Menunjukkan cara berbakti kepada orang tua yang masih hidup maupun yang telah wafat',
      'Menerapkan adab berbicara dan menyapa bapak/ibu guru di sekolah'
    ],
    fullContent: 'Orang tua telah berkorban membesarkan kita, sedangkan guru membimbing akal dan ruhani kita dengan ilmu. Menghormati keduanya adalah pintu kemudahan hidup dan keberkahan ilmu.',
    summary: 'Ridha Allah bergantung pada ridha orang tua, dan kesuksesan ilmu bergantung pada ta\'zim kepada guru.',
    dailyLifeExample: 'Mencium tangan orang tua saat pamit ke sekolah dan menyapa guru dengan senyum, salam, dan sapa.',
    references: ['Ta\'limul Muta\'allim', 'PAI Kelas VII'],
    estimatedReadingMinutes: 7,
    xpReward: 45
  },
  {
    id: 'mat-vii-9',
    title: 'Thaharah: Mensucikan Diri dengan Wudu dan Tayamum',
    gradeLevel: 'VII',
    chapter: 9,
    chapterTitle: 'Bersuci Menghadap Sang Pencipta',
    category: 'FIKIH',
    learningObjectives: [
      'Membedakan hadas kecil dan hadas besar serta cara menyucikannya',
      'Mempraktikkan rukun dan sunah wudu secara tertib',
      'Mempraktikkan tata cara tayamum ketika berhalangan air'
    ],
    fullContent: 'Thaharah berarti bersuci dari hadas dan najis. Wudu adalah syarat sah salat untuk hadas kecil, sedangkan tayamum adalah rukhsah (keringanan) menggunakan debu suci jika tidak menemukan air atau sakit.',
    summary: 'Kebersihan jasmani adalah syarat diterimanya ibadah shalat dan cermin kepribadian muslim.',
    dailyLifeExample: 'Berwudu dengan hemat air di musholla UPT SMPN 2 Rebang Tangkas.',
    references: ['Safinatun Najah', 'Fathul Qarib', 'PAI VII'],
    estimatedReadingMinutes: 9,
    xpReward: 60
  },
  {
    id: 'mat-vii-10',
    title: 'Salat Fardu dan Salat Berjamaah',
    gradeLevel: 'VII',
    chapter: 10,
    chapterTitle: 'Meraih Berkah dengan Salat Berjamaah',
    category: 'FIKIH',
    learningObjectives: [
      'Menjelaskan syarat, rukun, dan pembatal salat fardu',
      'Memahami keutamaan salat berjamaah yang berlipat 27 derajat'
    ],
    fullContent: 'Salat adalah tiang agama (imaduddin). Salat berjamaah melatih kedisiplinan, merapatkan shaf persaudaraan, dan bernilai 27 kali lipat dibandingkan salat sendirian.',
    summary: 'Salat fardu lima waktu merupakan kewajiban pokok setiap muslim baligh yang mencegah perbuatan keji dan mungkar.',
    dailyLifeExample: 'Mengikuti salat Zhuhur berjamaah secara khusyuk di sekolah.',
    references: ['Bidayatul Hidayah', 'PAI Kelas VII'],
    estimatedReadingMinutes: 8,
    xpReward: 55
  },

  // ================= KELAS VIII =================
  {
    id: 'mat-viii-1',
    title: 'Memahami Ayat tentang Gaya Hidup Hemat dan Qana\'ah',
    gradeLevel: 'VIII',
    chapter: 1,
    chapterTitle: 'Menjauhi Mubazir dan Berperilaku Sederhana',
    category: "AL-QUR'AN DAN HADIS",
    learningObjectives: [
      'Menganalisis Q.S. Al-Isra\'/17: 26-27 tentang larangan mubazir',
      'Membiasakan hidup sederhana dan bijak mengelola uang jajan'
    ],
    fullContent: 'Pemboros (mubazir) adalah saudara-saudara setan. Islam mengajarkan umatnya agar proporsional dalam membelanjakan harta: tidak kikir dan tidak pula berlebih-lebihan.',
    summary: 'Gaya hidup hemat membawa ketenangan finansial dan jiwa yang senantiasa bersyukur.',
    dailyLifeExample: 'Menabung sebagian uang saku sekolah dan tidak membeli barang-barang yang tidak bermanfaat.',
    references: ['PAI Kelas VIII Kemendikbud', 'Tafsir Jalalain'],
    estimatedReadingMinutes: 7,
    xpReward: 50
  },
  {
    id: 'mat-viii-2',
    title: 'Ayat tentang Toleransi dan Menghargai Perbedaan',
    gradeLevel: 'VIII',
    chapter: 2,
    chapterTitle: 'Membangun Harmoni Sosial Antarumat',
    category: "AL-QUR'AN DAN HADIS",
    learningObjectives: [
      'Mengartikan dan mentadabburi kandungan Q.S. Al-Kafirun/109: 1-6',
      'Membedakan toleransi sosial kemasyarakatan dengan pencampuran akidah'
    ],
    fullContent: 'Prinsip "Lakum diinukum waliyadiin" memberikan batasan jelas: toleransi dan tolong-menolong dalam ranah sosial kemanusiaan adalah keniscayaan, tanpa menggadaikan akidah dan keyakinan ibadah.',
    summary: 'Islam adalah rahmatan lil \'alamin yang menjunjung tinggi perdamaian antarsesama manusia.',
    dailyLifeExample: 'Menjaga ketenangan ketika kawan yang berbeda agama sedang beribadah.',
    references: ['Tafsir Al-Azhar', 'PAI Kelas VIII'],
    estimatedReadingMinutes: 8,
    xpReward: 50
  },
  {
    id: 'mat-viii-3',
    title: 'Iman kepada Kitab-Kitab Allah SWT',
    gradeLevel: 'VIII',
    chapter: 3,
    chapterTitle: 'Cahaya Kitab Suci Menuntun Jiwa',
    category: 'AQIDAH',
    learningObjectives: [
      'Menyebutkan 4 kitab suci (Taurat, Zabur, Injil, Al-Qur\'an) beserta nabi penerimanya',
      'Menjelaskan fungsi Al-Qur\'an sebagai penyempurna kitab-kitab terdahulu'
    ],
    fullContent: 'Beriman kepada kitab Allah berarti meyakini bahwa Allah telah menurunkan wahyu kepada para rasul-Nya sebagai petunjuk manusia. Al-Qur\'an merupakan kitab terakhir yang terpelihara keasliannya hingga akhir zaman.',
    summary: 'Al-Qur\'an membenarkan dan menyempurnakan ajaran tauhid kitab-kitab suci sebelumnya.',
    dailyLifeExample: 'Membaca dan mengkaji terjemahan Al-Qur\'an secara rutin di rumah dan musholla sekolah.',
    references: ['Aqidah Ahlussunnah', 'PAI Kelas VIII'],
    estimatedReadingMinutes: 8,
    xpReward: 50
  },
  {
    id: 'mat-viii-4',
    title: 'Iman kepada Rasul-Rasul Allah dan Mukjizatnya',
    gradeLevel: 'VIII',
    chapter: 4,
    chapterTitle: 'Meneladani Teladan Abadi Rasul Ulul Azmi',
    category: 'AQIDAH',
    learningObjectives: [
      'Memahami sifat wajib, mustahil, dan jaiz bagi para rasul',
      'Mengenal 5 Rasul Ulul Azmi (Nabi Nuh, Ibrahim, Musa, Isa, dan Muhammad SAW)'
    ],
    fullContent: 'Rasul adalah laki-laki pilihan yang menerima wahyu dan bertugas menyampaikannya kepada umat manusia. Mereka dibekali sifat Shiddiq, Amanah, Tabligh, dan Fathanah serta mukjizat untuk membuktikan kebenaran risalah.',
    summary: 'Rasul Ulul Azmi memiliki keteguhan dan kesabaran luar biasa dalam berdakwah membimbing umatnya.',
    dailyLifeExample: 'Berani menyampaikan kebenaran dan bersabar saat menghadapi cobaan belajar.',
    references: ['Sirah Nabawiyah', 'PAI Kelas VIII'],
    estimatedReadingMinutes: 9,
    xpReward: 55
  },
  {
    id: 'mat-viii-5',
    title: 'Rendah Hati (Tawaduk) dan Berprasangka Baik (Husnuzan)',
    gradeLevel: 'VIII',
    chapter: 5,
    chapterTitle: 'Pesona Karakter Tawaduk dan Husnuzan',
    category: 'AKHLAK',
    learningObjectives: [
      'Menjelaskan bahaya sifat sombong (takabur) dan iri dengki (hasad)',
      'Menerapkan sifat tawaduk dan husnuzan kepada Allah dan sesama teman'
    ],
    fullContent: 'Tawaduk adalah sikap rendah hati tanpa merasa lebih mulia dari orang lain. Husnuzan adalah berprasangka baik yang memancarkan energi positif dalam persahabatan dan pergaulan.',
    summary: 'Tawaduk meninggikan derajat seseorang di mata Allah, sedangkan husnuzan mendatangkan ketenangan hati.',
    dailyLifeExample: 'Tidak memamerkan nilai tinggi atau barang mahal di depan teman sekelas.',
    references: ['Akhlaqul Banin', 'PAI Kelas VIII'],
    estimatedReadingMinutes: 7,
    xpReward: 45
  },
  {
    id: 'mat-viii-6',
    title: 'Sujud Syukur, Sujud Sahwi, dan Sujud Tilawah',
    gradeLevel: 'VIII',
    chapter: 6,
    chapterTitle: 'Tunduk Bersimpuh di Hadapan Ilahi',
    category: 'FIKIH',
    learningObjectives: [
      'Mempraktikkan tata cara dan bacaan sujud syukur saat meraih nikmat',
      'Menjelaskan sebab dan waktu sujud sahwi dalam salat',
      'Mempraktikkan sujud tilawah ketika mendengar ayat sajdah'
    ],
    fullContent: 'Sujud adalah simbol kepatuhan tertinggi seorang hamba. Sujud syukur dilakukan saat mendapat karunia atau selamat dari musibah, sujud sahwi karena ragu rakaat salat, dan sujud tilawah saat membaca ayat sajdah.',
    summary: 'Ketiga sujud ini menyempurnakan penghambaan dan ungkapan terima kasih kita kepada Allah SWT.',
    dailyLifeExample: 'Melakukan sujud syukur seketika saat diumumkan lulus ujian dengan nilai memuaskan.',
    references: ['Fathul Mu\'in', 'PAI Kelas VIII'],
    estimatedReadingMinutes: 8,
    xpReward: 55
  },
  {
    id: 'mat-viii-7',
    title: 'Puasa Wajib dan Puasa Sunah',
    gradeLevel: 'VIII',
    chapter: 7,
    chapterTitle: 'Menempa Ketakwaan dan Jiwa Sosial Lewat Puasa',
    category: 'FIKIH',
    learningObjectives: [
      'Menjelaskan syarat, rukun, serta hal yang membatalkan puasa',
      'Menyebutkan ragam puasa sunah: Senin-Kamis, Arafah, dan Ayyamul Bidh',
      'Merasakan hikmah empati terhadap penderitaan kaum dhuafa'
    ],
    fullContent: 'Puasa (shiyam) menahan lapar, haus, dan segala yang membatalkan dari terbit fajar hingga tenggelam matahari dengan niat ikhlas. Puasa menumbuhkan kepekaan sosial dan kesehatan tubuh.',
    summary: 'Puasa melatih pengendalian hawa nafsu dan meningkatkan ketakwaan kepada Allah SWT.',
    dailyLifeExample: 'Berlatih menjalankan puasa sunah Senin dan Kamis bersama teman-teman rohis sekolah.',
    references: ['Fiqhus Sunnah', 'PAI Kelas VIII'],
    estimatedReadingMinutes: 9,
    xpReward: 60
  },
  {
    id: 'mat-viii-8',
    title: 'Zakat Fitrah dan Zakat Mal',
    gradeLevel: 'VIII',
    chapter: 8,
    chapterTitle: 'Membersihkan Jiwa dan Menyuburkan Harta',
    category: 'FIKIH',
    learningObjectives: [
      'Menghitung ketentuan zakat fitrah (beras/makanan pokok)',
      'Mengetahui 8 golongan yang berhak menerima zakat (mustahik)',
      'Menjelaskan fungsi sosial zakat dalam mengentaskan kemiskinan'
    ],
    fullContent: 'Zakat merupakan rukun Islam ketiga yang berfungsi menyucikan jiwa (zakat fitrah) dan membersihkan harta (zakat mal). Penyalurannya diprioritaskan untuk 8 asnaf yang disebutkan dalam surah At-Taubah ayat 60.',
    summary: 'Zakat membangun solidaritas sosial dan mempersempit jurang antara yang kaya dan miskin.',
    dailyLifeExample: 'Menjadi panitia pengumpulan zakat fitrah di sekolah menjelang Idulfitri.',
    references: ['Fiqh Zakat Yusuf Qardhawi', 'PAI Kelas VIII'],
    estimatedReadingMinutes: 8,
    xpReward: 55
  },
  {
    id: 'mat-viii-9',
    title: 'Makanan dan Minuman Halal serta Menjauhi yang Haram',
    gradeLevel: 'VIII',
    chapter: 9,
    chapterTitle: 'Konsumsi Halal Menyehatkan Jiwa dan Raga',
    category: 'FIKIH',
    learningObjectives: [
      'Mengidentifikasi kriteria makanan dan minuman halal menurut syariat',
      'Memahami dampak buruk zat adiktif, khamar, dan makanan haram bagi akal dan raga'
    ],
    fullContent: 'Allah memerintahkan makan makanan yang halal (sah menurut agama) lagi thayyib (baik gizinya dan higienis). Makanan haram merusak kesehatan, menggelapkan hati, dan menolak doa.',
    summary: 'Kriteria halal mencakup halal zatnya (halal li-dzaatihi) dan halal cara memperolehnya (halal li-ghairihi).',
    dailyLifeExample: 'Memilih jajanan kantin yang memiliki sertifikasi halal dan bersih.',
    references: ['Halal Haram dalam Islam', 'PAI Kelas VIII'],
    estimatedReadingMinutes: 7,
    xpReward: 50
  },
  {
    id: 'mat-viii-10',
    title: 'Kejayaan Dinasti Abbasiyah dan Perkembangan Ilmu Pengetahuan',
    gradeLevel: 'VIII',
    chapter: 10,
    chapterTitle: 'Menapaki Jejak Emas Peradaban Islam',
    category: 'SEJARAH KEBUDAYAAN ISLAM',
    learningObjectives: [
      'Menelusuri sejarah berdirinya Dinasti Abbasiyah di Baghdad',
      'Mengenal perpustakaan Baitul Hikmah dan ilmuwan muslim terkemuka (Ibnu Sina, Al-Khawarizmi, Al-Biruni)'
    ],
    fullContent: 'Masa keemasan Islam (The Golden Age of Islam) terjadi pada era Khalifah Harun Ar-Rasyid dan Al-Ma\'mun. Para ilmuwan muslim memadukan nilai keimanan dengan riset sains sehingga menjadi mercusuar dunia.',
    summary: 'Kemajuan peradaban Islam membuktikan bahwa sains dan agama Islam saling menopang dan menguatkan.',
    dailyLifeExample: 'Mempelajari matematika dan sains dengan niat ibadah meneladani para ilmuwan muslim.',
    references: ['Tarikh Khulafa', 'PAI Kelas VIII'],
    estimatedReadingMinutes: 9,
    xpReward: 60
  },

  // ================= KELAS IX =================
  {
    id: 'mat-ix-1',
    title: 'Ayat tentang Kejujuran dalam Muamalah dan Sosial',
    gradeLevel: 'IX',
    chapter: 1,
    chapterTitle: 'Membangun Tatanan Masyarakat Berkeadilan',
    category: "AL-QUR'AN DAN HADIS",
    learningObjectives: [
      'Menganalisis Q.S. Al-Muthaffifin/83: 1-6 tentang kecurangan timbangan',
      'Menjaga kejujuran dalam transaksi, kesepakatan, dan pergaulan modern'
    ],
    fullContent: 'Kecurangan dalam menakar dan menimbang adalah cikal bakal kezaliman ekonomi. Islam menuntut kejujuran penuh dalam jual beli, kontrak sosial, dan tanggung jawab kepemimpinan.',
    summary: 'Integritas muamalah menjamin keberkahan rezeki dan keadilan dalam peradaban masyarakat.',
    dailyLifeExample: 'Menghargai hak milik teman dan transparan dalam mengelola uang kas kelas.',
    references: ['PAI Kelas IX Kemendikbud', 'Tafsir Al-Maraghi'],
    estimatedReadingMinutes: 8,
    xpReward: 55
  },
  {
    id: 'mat-ix-2',
    title: 'Iman kepada Hari Akhir (Kiamat) dan Kehidupan Pasca Kematian',
    gradeLevel: 'IX',
    chapter: 2,
    chapterTitle: 'Mempersiapkan Bekal untuk Kehidupan Sejati',
    category: 'AQIDAH',
    learningObjectives: [
      'Memahami tanda-tanda kiamat sughra dan kubra',
      'Menelusuri tahapan alam akhirat: Barzakh, Ba\'ats, Mahsyar, Mizan, Hisab, Shirath, Surga/Neraka',
      'Menumbuhkan sikap bertanggung jawab atas setiap detik perbuatan di dunia'
    ],
    fullContent: 'Hari Akhir adalah hari hancurnya seluruh alam semesta dan dibangkitkannya manusia untuk mempertanggungjawabkan perbuatannya. Dunia adalah ladang menanam, sedangkan akhirat adalah waktu memanen hasil.',
    summary: 'Keyakinan akan hari pembalasan menumbuhkan mawas diri dan kehati-hatian dalam bertindak.',
    dailyLifeExample: 'Selalu berpikir ulang sebelum berbuat hal tercela karena sadar akan ada hisab di akhirat.',
    references: ['Tadzkirah Imam Qurthubi', 'PAI Kelas IX'],
    estimatedReadingMinutes: 10,
    xpReward: 65
  },
  {
    id: 'mat-ix-3',
    title: 'Iman kepada Qada dan Qadar (Takdir Allah)',
    gradeLevel: 'IX',
    chapter: 3,
    chapterTitle: 'Harmoni Ikhtiar, Doa, dan Tawakal',
    category: 'AQIDAH',
    learningObjectives: [
      'Membedakan takdir muallaq (bisa diupayakan) dan takdir mubram (pasti terjadi)',
      'Menghindari sikap putus asa dan bersikap optimis dalam menatap masa depan'
    ],
    fullContent: 'Qada adalah ketetapan Allah sejak zaman azali, sedangkan qadar adalah perwujudan ketetapan tersebut sesuai kehendak-Nya. Manusia wajib berikhtiar sungguh-sungguh, berdoa, lalu bertawakal kepada takdir terbaik Allah.',
    summary: 'Tawakal setelah ikhtiar optimal menjauhkan manusia dari stres, kesombongan, dan keputusasaan.',
    dailyLifeExample: 'Belajar tekun untuk ujian kelulusan SMP kemudian berserah diri dengan tenang kepada Allah.',
    references: ['Kitab Tauhid', 'PAI Kelas IX'],
    estimatedReadingMinutes: 9,
    xpReward: 60
  },
  {
    id: 'mat-ix-4',
    title: 'Sikap Optimis, Ikhtiar, Tawakal, dan Qana\'ah',
    gradeLevel: 'IX',
    chapter: 4,
    chapterTitle: 'Karakter Tangguh Generasi Muslim Harapan Bangsa',
    category: 'AKHLAK',
    learningObjectives: [
      'Menjelaskan pengertian dan keterkaitan optimis, ikhtiar, dan tawakal',
      'Menampilkan perilaku rela menerima ketentuan Allah (qana\'ah)'
    ],
    fullContent: 'Generasi muda muslim tidak boleh mudah menyerah. Optimisme memicu semangat belajar, ikhtiar mengasah kompetensi, tawakal menenangkan pikiran, dan qana\'ah membentengi diri dari sifat serakah.',
    summary: 'Kombinasi akhlak mulia ini melahirkan pribadi mandiri, berkarakter kuat, dan tangguh menghadapi zaman.',
    dailyLifeExample: 'Bangkit mencoba lagi saat belum berhasil meraih peringkat pertama tanpa mengeluh.',
    references: ['Buku PAI IX', 'Akhlaq Lil Banin'],
    estimatedReadingMinutes: 8,
    xpReward: 50
  },
  {
    id: 'mat-ix-5',
    title: 'Etika Pergaulan Islami dan Bahaya Pergaulan Bebas',
    gradeLevel: 'IX',
    chapter: 5,
    chapterTitle: 'Menjaga Martabat Diri Menyongsong Masa Remaja',
    category: 'AKHLAK',
    learningObjectives: [
      'Menjelaskan batasan aurat dan adab pergaulan antara laki-laki dan perempuan',
      'Menghindari narkoba, minuman keras, tawuran, dan pergaulan bebas'
    ],
    fullContent: 'Islam memberikan tuntunan adab pergaulan guna melindungi kehormatan dan masa depan generasi muda. Menjaga pandangan (ghadhul bashar), menutup aurat, serta memilih sahabat yang saleh adalah kunci keselamatan.',
    summary: 'Pergaulan yang sehat menghasilkan prestasi, pertemanan yang tulus, dan ridha Allah SWT.',
    dailyLifeExample: 'Memilih lingkungan pertemanan yang saling mengajak pada kebaikan dan belajar bersama.',
    references: ['Adabul Mu\'asyarah', 'PAI Kelas IX'],
    estimatedReadingMinutes: 8,
    xpReward: 50
  },
  {
    id: 'mat-ix-6',
    title: 'Ibadah Haji dan Umrah',
    gradeLevel: 'IX',
    chapter: 6,
    chapterTitle: 'Panggilan Suci ke Baitullah',
    category: 'FIKIH',
    learningObjectives: [
      'Menjelaskan syarat, rukun, dan wajib haji serta umrah',
      'Mengetahui miqat, tawaf, sa\'i, wukuf di Arafah, dan tahallul'
    ],
    fullContent: 'Haji adalah rukun Islam kelima bagi yang mampu (istitha\'ah) secara fisik, finansial, dan keamanan perjalanan. Haji melambangkan persatuan umat Islam sedunia di hadapan Allah tanpa sekat status sosial.',
    summary: 'Haji mabrur tiada balasan yang layak baginya kecuali surga yang penuh kenikmatan.',
    dailyLifeExample: 'Mengikuti praktik manasik haji mini yang diselenggarakan di sekolah.',
    references: ['Fiqih Haji & Umrah Kemenag', 'PAI Kelas IX'],
    estimatedReadingMinutes: 9,
    xpReward: 60
  },
  {
    id: 'mat-ix-7',
    title: 'Penyembelihan Hewan, Kurban, dan Akikah',
    gradeLevel: 'IX',
    chapter: 7,
    chapterTitle: 'Menebar Kepedulian dengan Semangat Pengorbanan',
    category: 'FIKIH',
    learningObjectives: [
      'Menjelaskan tata cara penyembelihan hewan sesuai syariat Islam',
      'Membedakan ketentuan kurban (Iduladha) dan akikah (kelahiran anak)'
    ],
    fullContent: 'Penyembelihan hewan dalam Islam harus memperlakukan hewan dengan ihsan (tidak menyiksa, menggunakan pisau tajam, membaca basmalah). Kurban mengenang keteladanan Nabi Ibrahim AS dan Ismail AS.',
    summary: 'Bukan darah dan daging yang sampai kepada Allah, melainkan ketakwaan dan ketulusan hati kita.',
    dailyLifeExample: 'Membantu pembagian daging kurban kepada tetangga sekitar sekolah saat Hari Raya Iduladha.',
    references: ['Fathul Qarib', 'PAI Kelas IX'],
    estimatedReadingMinutes: 8,
    xpReward: 55
  },
  {
    id: 'mat-ix-8',
    title: 'Prinsip Muamalah: Jual Beli, Pinjam-Meminjam, dan Riba',
    gradeLevel: 'IX',
    chapter: 8,
    chapterTitle: 'Berkah Bertransaksi Berlandaskan Syariat',
    category: 'FIKIH',
    learningObjectives: [
      'Menjelaskan rukun dan syarat jual beli yang sah',
      'Mengetahui bahaya dan keharaman riba dalam perekonomian'
    ],
    fullContent: 'Allah menghalalkan jual beli dan mengharamkan riba. Muamalah harus dilandasi kerelaan kedua belah pihak (an-taradin), tanpa unsur penipuan (gharar), perjudian (maysir), atau eksploitasi.',
    summary: 'Muamalah yang bersih menjamin keadilan sosial dan keberkahan harta bagi seluruh lapisan masyarakat.',
    dailyLifeExample: 'Membayar lunas belanjaan di koperasi sekolah dengan jujur dan sesuai harga.',
    references: ['Fiqh Muamalah', 'PAI Kelas IX'],
    estimatedReadingMinutes: 8,
    xpReward: 55
  },
  {
    id: 'mat-ix-9',
    title: 'Sejarah Masuknya Islam di Nusantara',
    gradeLevel: 'IX',
    chapter: 9,
    chapterTitle: 'Cahaya Islam Menyinari Bumi Khatulistiwa',
    category: 'SEJARAH KEBUDAYAAN ISLAM',
    learningObjectives: [
      'Menjelaskan teori masuknya Islam ke Nusantara (Gujarat, Makkah, Persia, dan China)',
      'Mengidentifikasi jalur dakwah perdagangan, perkawinan, pendidikan, dan kesenian'
    ],
    fullContent: 'Islam masuk ke Indonesia secara damai tanpa penaklukan militer melalui para pedagang santun dan ulama sufi. Pendekatan ramah budaya lokal membuat Islam diterima luas oleh masyarakat Nusantara.',
    summary: 'Dakwah Islam di Nusantara mengedepankan kebijaksanaan (hikmah), mau\'izhah hasanah, dan teladan akhlak.',
    dailyLifeExample: 'Menghargai kesenian daerah yang telah bernafaskan nilai-nilai Islam.',
    references: ['Sejarah Kebudayaan Islam Nusantara', 'PAI Kelas IX'],
    estimatedReadingMinutes: 9,
    xpReward: 60
  },
  {
    id: 'mat-ix-10',
    title: 'Kiprah Dakwah Wali Songo dan Kerajaan Islam di Indonesia',
    gradeLevel: 'IX',
    chapter: 10,
    chapterTitle: 'Kearifan Ulama Merajut Kejayaan Bangsa',
    category: 'SEJARAH KEBUDAYAAN ISLAM',
    learningObjectives: [
      'Mengenal biografi dan metode dakwah sembilan wali (Wali Songo) di tanah Jawa',
      'Mempelajari peninggalan kerajaan Islam (Samudera Pasai, Demak, Mataram Islam, Banten, Gowa-Tallo)',
      'Menghidupkan nilai toleransi dan dakwah santun di era modern'
    ],
    fullContent: 'Wali Songo seperti Sunan Kalijaga dan Sunan Kudus menggunakan media wayang, gamelan, tembang, dan kearifan lokal untuk menyebarkan ajaran Islam secara elegan dan memikat hati masyarakat.',
    summary: 'Wali Songo adalah teladan agung integrasi dakwah tauhid dengan kearifan budaya nusantara.',
    dailyLifeExample: 'Menjaga persatuan dan kerukunan warga sekolah berlandaskan nilai kearifan para wali.',
    references: ['Atlas Wali Songo Agus Sunyoto', 'PAI Kelas IX'],
    estimatedReadingMinutes: 9,
    xpReward: 60
  }
];
