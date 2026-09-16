export interface KhalifahPenting {
  id: string;
  name: string;
  arabicName: string;
  titleGelar: string;
  reignPeriod: string;
  reignYearsHijri: string;
  avatarIcon: string;
  quoteKataMutiara: string;
  biography: string;
  keyPolicies: {
    title: string;
    description: string;
  }[];
  monumentalAchievements: string[];
  historicalImpact: string;
}

export interface BidangKemajuan {
  id: string;
  title: string;
  arabicTerm: string;
  iconName: string;
  summary: string;
  highlights: {
    name: string;
    detail: string;
  }[];
  famousArtifactOrFigure: {
    title: string;
    description: string;
  };
}

export interface FaktorKemunduran {
  number: number;
  title: string;
  cause: string;
  impact: string;
  analysis: string;
  lesson: string;
}

export interface HikmahSejarah {
  point: number;
  title: string;
  subTitle: string;
  dalilRujukan?: {
    surah: string;
    arabic: string;
    translation: string;
  };
  explanation: string;
  realLifeApplication: string[];
}

export interface QuizQuestionBab5 {
  id: number;
  scenario: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

// ============================================================================
// 1. SEJARAH BERDIRINYA DAULAH BANI UMAYYAH DAMASKUS
// ============================================================================
export const SEJARAH_BERDIRINYA_DATA = {
  title: 'Sejarah Berdirinya Daulah Bani Umayyah Periode Damaskus',
  periodMasehi: '661 – 750 M',
  periodHijriyah: '41 – 132 H',
  capitalCity: 'Damaskus (Suriah)',
  founder: 'Muawiyah bin Abi Sufyan',
  totalKhalifah: 14,
  historicalContext: `Kekhalifahan Bani Umayyah di Damaskus merupakan dinasti kekhalifahan Islam pertama pasca-berakhirnya era Khulafaur Rasyidin (Abu Bakar, Umar, Utsman, dan Ali). Dinasti ini didirikan oleh Muawiyah bin Abi Sufyan r.a. pada tahun 41 Hijriyah (661 Masehi). Berdirinya dinasti ini menandai transformasi monumental dalam tata kelola peradaban Islam, baik dari segi sistem suksesi kepemimpinan, perluasan teritorial antarbenua, hingga peletakan fondasi birokrasi pemerintahan modern.`,
  
  timelineEvents: [
    {
      year: '40 H / 661 M',
      event: 'Wafatnya Khalifah Ali bin Abi Thalib r.a.',
      description: 'Khalifah Ali bin Abi Thalib r.a. wafat syahid akibat serangan pedang beracun Abdurrahman bin Muljam dari kelompok Khawarij di Masjid Kufah. Umat Islam di Kufah kemudian membaiat putra tertuanya, Al-Hasan bin Ali r.a., sebagai khalifah kelima.'
    },
    {
      year: '41 H / 661 M (Rabi\'ul Awwal)',
      event: 'Peristiwa \'Amul Jama\'ah (Tahun Persatuan)',
      description: 'Menyaksikan potensi perang saudara berkepanjangan antara pasukan Kufah dan pasukan Syam yang dipimpin Muawiyah, Sayyidina Hasan bin Ali r.a. dengan jiwa kenegarawanan luhur memilih ishlah (berdamai) dan menyerahkan mandat kekhalifahan kepada Muawiyah bin Abi Sufyan di Kufah dengan syarat menjaga keselamatan umat, Al-Qur\'an, dan Sunnah. Tahun ini diabadikan dalam sejarah Islam sebagai \'Amul Jama\'ah (Tahun Persatuan). Peristiwa ini membuktikan kebenaran nubuwah Rasulullah SAW: "Sesungguhnya cucuku ini adalah sayyid (pemimpin), dan melaluinya Allah akan mendamaikan dua kelompok besar kaum muslimin" (H.R. Bukhari No. 2704).'
    },
    {
      year: '41 H / 661 M',
      event: 'Pemindahan Pusat Pemerintahan ke Damaskus',
      description: 'Muawiyah memindahkan ibukota kekhalifahan dari Madinah/Kufah ke Damaskus (Syam). Damaskus dipilih karena posisinya yang strategis di jalur perdagangan internasional, stabilitas politik wilayah Syam yang telah dipimpin Muawiyah selama 20 tahun sebagai gubernur, serta kedekatannya dengan armada laut Mediterania.'
    },
    {
      year: '60 H / 680 M',
      event: 'Perubahan Sistem Pemerintahan (Syura ke Monarki Heriditer)',
      description: 'Menjelang akhir hayatnya, Muawiyah menetapkan putranya, Yazid bin Muawiyah, sebagai putra mahkota (wali al-\'ahd). Keputusan ini mengubah tradisi pemilihan khalifah dari musyawarah mufakat (Syura) menjadi sistem kerajaan dinasti turun-temurun (Monarki Heriditer / Mulkiyyah al-Wuratsiyyah), yang menuai kritik dari beberapa sahabat senior seperti Husain bin Ali, Abdullah bin Zubair, dan Abdullah bin Umar.'
    }
  ],

  perbandinganSistem: {
    title: 'Perbandingan Sistem Pemerintahan Khulafaur Rasyidin vs Bani Umayyah Damaskus',
    aspects: [
      {
        aspect: 'Sistem Pemilihan Khalifah',
        khulafaurRasyidin: 'Musyawarah mufakat (Syura), ahlul halli wal \'aqdi, tanpa penunjukan dinasti keluarga.',
        baniUmayyah: 'Sistem monarki dinasti heriditer (turun-temurun) melalui penunjukan putra mahkota (wali al-\'ahd).'
      },
      {
        aspect: 'Pusat Pemerintahan',
        khulafaurRasyidin: 'Madinah Al-Munawwarah (lalu berpindah ke Kufah pada masa Khalifah Ali r.a.).',
        baniUmayyah: 'Damaskus (Suriah), sebuah kota metropolis kuno yang sangat strategis di kawasan Syam.'
      },
      {
        aspect: 'Orientasi Birokrasi',
        khulafaurRasyidin: 'Sederhana, berpusat pada masjid, langsung mendengarkan rakyat jelata tanpa protokoler ketat.',
        baniUmayyah: 'Birokrasi bertingkat mengadopsi struktur Persia & Bizantium, dilengkapi departemen (Diwan), pos kilat, dan pengawal pribadi (Haras).'
      },
      {
        aspect: 'Perluasan Wilayah',
        khulafaurRasyidin: 'Jazirah Arab, Syam, Irak, Persia, dan Mesir.',
        baniUmayyah: 'Ekspansi raksasa 3 benua: Afrika Utara, Andalusia (Spanyol/Portugal), Asia Tengah hingga perbatasan Tiongkok & lembah Sungai Indus.'
      }
    ]
  }
};

// ============================================================================
// 2. ENAM KHALIFAH PENTING DINASTI UMAYYAH DAMASKUS
// ============================================================================
export const KHALIFAH_PENTING_LIST: KhalifahPenting[] = [
  {
    id: 'muawiyah-1',
    name: 'Muawiyah bin Abi Sufyan',
    arabicName: 'مُعَاوِيَةُ بْنُ أَبِي سُفْيَانَ',
    titleGelar: 'Pendiri Daulah & Negarawan Ulung (Amirul Mukminin I)',
    reignPeriod: '661 – 680 M',
    reignYearsHijri: '41 – 60 H',
    avatarIcon: '👑',
    quoteKataMutiara: '"Seandainya antara diriku dan orang banyak ada seutas rambut, niscaya rambut itu tidak akan pernah putus. Jika mereka menariknya, aku akan mengulurnya; dan jika mereka mengulurnya, aku akan menariknya." (Prinsip Hilm / Diplomasi Fleksibel Muawiyah)',
    biography: 'Muawiyah bin Abi Sufyan adalah sahabat Nabi SAW sekaligus salah satu penulis wahyu Al-Qur\'an. Beliau menjabat sebagai Gubernur Syam selama kurang lebih 20 tahun pada masa Khalifah Umar bin Khattab dan Utsman bin Affan, sebelum akhirnya mendirikan Dinasti Umayyah di Damaskus pada tahun 41 H setelah peristiwa \'Amul Jama\'ah. Dikenal memiliki kecerdasan politik tingkat tinggi, kesabaran diplomatik (hilm), dan kemampuan manajerial yang luar biasa.',
    keyPolicies: [
      {
        title: 'Mendirikan Departemen Arsip & Stempel Negara (Diwanul Khatam)',
        description: 'Menciptakan sistem segel lilin dan cap negara untuk mencegah pemalsuan surat keputusan resmi khalifah.'
      },
      {
        title: 'Membangun Layanan Pos Cepat (Diwanul Barid)',
        description: 'Menyediakan jaringan stasiun kuda pos kilat untuk menyampaikan instruksi gubernur dan laporan intelijen dari seluruh pelosok negeri dalam hitungan hari.'
      },
      {
        title: 'Membangun Armada Angkatan Laut Islam Pertama',
        description: 'Mendirikan galangan kapal di pesisir Syam dan Mesir, memenangkan Pertempuran Dzatus Sawari (Pertempuran Tiang Kapal) melawan armada Bizantium di Laut Mediterania.'
      }
    ],
    monumentalAchievements: [
      'Menyatukan kembali stabilitas politik umat Islam pasca-perang saudara melalui \'Amul Jama\'ah.',
      'Meletakkan fondasi institusi peradilan independen (Nidzamul Qadha\') dengan menetapkan gaji tetap bagi para qadhi (hakim).',
      'Memperluas wilayah dakwah ke Afrika Utara hingga Tripoli dan perbatasan Khurasan di Asia Tengah.'
    ],
    historicalImpact: 'Meletakkan pilar pertama sistem monarki Islam dan mendirikan birokrasi pemerintahan profesional yang bertahan selama berabad-abad.'
  },
  {
    id: 'marwan-1',
    name: 'Marwan bin Al-Hakam',
    arabicName: 'مَرْوَانُ بْنُ الحَكَمِ',
    titleGelar: 'Penyelamat Dinasti & Leluhur Cabang Marwaniyah',
    reignPeriod: '684 – 685 M',
    reignYearsHijri: '64 – 65 H',
    avatarIcon: '🛡️',
    quoteKataMutiara: '"Kekuasaan tanpa ketegasan akan sirna, dan ketegasan tanpa kehati-hatian akan berbuah kehancuran."',
    biography: 'Setelah wafatnya Muawiyah II (putra Yazid bin Muawiyah) yang berkuasa hanya beberapa bulan, Dinasti Umayyah terancam runtuh total akibat Perang Saudara Kedua (Fitnah Ibnuz Zubair). Para pembesar Bani Umayyah berkumpul di Jabiyah dan membaiat Marwan bin Al-Hakam sebagai khalifah keempat. Beliau berhasil menyatukan faksi pendukung Umayyah melalui Perang Marj Rahith (684 M), merebut kembali Syam dan Mesir, serta mengalihkan garis kepemimpinan dari cabang Sufyaniyah ke cabang Marwaniyah.',
    keyPolicies: [
      {
        title: 'Konsolidasi Militer Suku Yaman (Bani Kalb)',
        description: 'Membangun koalisi dengan suku-suku Arab Yaman di Syam untuk menstabilkan kembali kontrol Umayyah.'
      },
      {
        title: 'Penataan Garis Suksesi Marwani',
        description: 'Menetapkan kedua putranya, Abdul Malik bin Marwan dan Abdul Aziz bin Marwan, sebagai penerus tahta guna menghindari perebutan kekuasaan.'
      }
    ],
    monumentalAchievements: [
      'Mengembalikan kontrol wilayah Syam dan Mesir ke bawah naungan kekhalifahan Umayyah.',
      'Menjadi cikal bakal lahirnya para khalifah besar dinasti Umayyah selanjutnya (seluruh khalifah setelahnya adalah keturunannya).'
    ],
    historicalImpact: 'Menyelamatkan Dinasti Umayyah dari keruntuhan dini dan melahirkan era keemasan cabang Marwaniyah.'
  },
  {
    id: 'abdul-malik',
    name: 'Abdul Malik bin Marwan',
    arabicName: 'عَبْدُ المَلِكِ بْنُ مَرْوَانَ',
    titleGelar: 'Bapak Pemersatu Kedua & Pelopor Kedaulatan Moneter',
    reignPeriod: '685 – 705 M',
    reignYearsHijri: '65 – 86 H',
    avatarIcon: '🏛️',
    quoteKataMutiara: '"Dahulu Al-Qur\'an adalah sahabat setiaku di Masjid Nabawi, kini amanah memimpin umat adalah tanggung jawab yang harus kutegakkan dengan keadilan dan kekuatan."',
    biography: 'Abdul Malik bin Marwan adalah seorang ulama faqih Madinah sebelum naik tahta. Beliau berkuasa selama 20 tahun dan dianggap sebagai pendiri kedua (the second founder) Daulah Umayyah. Di bawah kepemimpinannya, pemberontakan Abdullah bin Zubair di Makkah dan Mukhtar Ats-Tsaqafi di Kufah berhasil ditumpas melalui panglimanya Al-Hajjaj bin Yusuf Ats-Tsaqafi, sehingga seluruh wilayah dunia Islam kembali bersatu di bawah satu panji kepemimpinan.',
    keyPolicies: [
      {
        title: 'Kebijakan Arabisasi Administrasi (Ta\'rib ad-Diwan)',
        description: 'Mengubah bahasa resmi pembukuan dan administrasi negara dari bahasa Yunani (di Syam), Koptik (di Mesir), dan Pahlavi/Persia (di Irak) menjadi Bahasa Arab murni. Hal ini mempercepat penyebaran bahasa Arab sebagai bahasa internasional.'
      },
      {
        title: 'Pencetakan Mata Uang Islam Pertama (Islamisasi Moneter)',
        description: 'Menghentikan peredaran koin Bizantium dan Sasaniyah. Mencetak uang Dinar emas dan Dirham perak dengan kaligrafi kalimat Tauhid (La ilaha illallah Muhammadur Rasulullah), menegaskan kedaulatan ekonomi Islam.'
      },
      {
        title: 'Pembangunan Qubbat As-Sakhrah (Dome of the Rock)',
        description: 'Membangun mahakarya arsitektur kubah batu emas di kompleks Masjid Al-Aqsa, Yerusalem pada 691 M yang tetap berdiri megah hingga saat ini.'
      },
      {
        title: 'Penyempurnaan Mushaf Al-Qur\'an (Titik & Harakat)',
        description: 'Memerintahkan Al-Hajjaj bin Yusuf bersama ulama bahasa (Nashr bin Ashim dan Yahya bin Ya\'mar) untuk membubuhkan titik (nuqath) dan tanda baca harakat pada huruf Arab agar umat non-Arab tidak salah membaca Al-Qur\'an.'
      }
    ],
    monumentalAchievements: [
      'Menyatukan kembali imperium Islam setelah 12 tahun terpecah perang saudara.',
      'Membebaskan ekonomi umat Islam dari ketergantungan mata uang Romawi dan Persia.',
      'Menghasilkan penerus-penerus khalifah cakap yang membawa dinasti ke puncak kejayaan.'
    ],
    historicalImpact: 'Meletakkan kedaulatan bahasa, moneter, dan hukum syariat yang mengokohkan identitas peradaban Islam di pentas global.'
  },
  {
    id: 'walid-bin-abdul-malik',
    name: 'Al-Walid bin Abdul Malik',
    arabicName: 'الْوَلِيدُ بْنُ عَبْدِ المَلِكِ',
    titleGelar: 'Sang Penakluk 3 Benua & Pembangun Mahakarya Arsitektur',
    reignPeriod: '705 – 715 M',
    reignYearsHijri: '86 – 96 H',
    avatarIcon: '🏰',
    quoteKataMutiara: '"Kesejahteraan rakyat adalah mahkota sejati seorang penguasa, dan rumah ibadah yang megah adalah simbol ketundukan hamba kepada Rabbul \'Alamin."',
    biography: 'Masa pemerintahan Al-Walid bin Abdul Malik selama satu dekade sering disebut sebagai The Golden Era (Puncak Keemasan) ekspansi militer dan kemakmuran sosial Daulah Umayyah. Di bawah kepemimpinannya, wilayah Islam mencapai perbatasan terjauh: dari pegunungan Pyrenees di Spanyol hingga Sungai Indus di India dan perbatasan Tiongkok di Asia Tengah.',
    keyPolicies: [
      {
        title: 'Ekspansi Teritorial Akbar',
        description: 'Mengirim panglima legendaris Thariq bin Ziyad dan Musa bin Nushair menaklukkan Semenanjung Iberia (Andalusia/Spanyol, 711 M); Qutaibah bin Muslim menaklukkan Asia Tengah (Bukhara, Samarkand); dan Muhammad bin Qasim menaklukkan Lembah Sungai Indus (Sind/Pakistan).'
      },
      {
        title: 'Pelayanan Sosial dan Kesehatan Pertama (Bimaristan)',
        description: 'Mendirikan Bimaristan (rumah sakit) pertama dalam sejarah peradaban Islam di Damaskus, lengkap dengan dokter spesialis, ruang isolasi kusta/lepra, serta santunan negara bulanan bagi penyandang disabilitas dan orang buta.'
      },
      {
        title: 'Pembangunan Mahakarya Masjid Agung Umayyah (Damaskus)',
        description: 'Membangun Masjid Jami\' Bani Umayyah di Damaskus dengan mosaik emas Bizantium bernilai seni tinggi, serta merenovasi dan memperluas Masjid Nabawi di Madinah dan Masjid Al-Aqsa.'
      }
    ],
    monumentalAchievements: [
      'Menancapkan panji Islam di daratan Eropa (Andalusia/Spanyol) yang kemudian melahirkan era keemasan Islam Cordoba selama hampir 8 abad.',
      'Mewujudkan era zero-kemiskinan semu di mana kas negara melimpah dan sarana publik dinikmati cuma-cuma oleh rakyat.',
      'Membangun sumur-sumur air minum, jalan raya pos, dan bendungan irigasi di seantero negeri.'
    ],
    historicalImpact: 'Menjadikan Daulah Umayyah sebagai adidaya terluas dan termakmur di muka bumi pada abad ke-8 Masehi.'
  },
  {
    id: 'umar-bin-abdul-aziz',
    name: 'Umar bin Abdul Aziz',
    arabicName: 'عُمَرُ بْنُ عَبْدِ العَزِيزِ',
    titleGelar: 'Khulafaur Rasyidin Kelima & Teladan Pemimpin Adil-Zuhud',
    reignPeriod: '717 – 720 M',
    reignYearsHijri: '99 – 101 H',
    avatarIcon: '⚖️',
    quoteKataMutiara: '"Sesungguhnya Muhammad SAW diutus oleh Allah sebagai pembawa petunjuk dakwah dan rahmat, bukan sebagai penarik upeti/pajak!" (Menghapuskan Jizyah bagi kaum Mawali yang telah memeluk Islam)',
    biography: 'Umar bin Abdul Aziz adalah cucu dari Khalifah Umar bin Khattab r.a. dari garis ibu (Ummu Ashim binti Ashim bin Umar). Meskipun hanya memimpin selama 2 tahun 5 bulan, nama beliau tercatat dengan tinta emas sebagai salah satu pemimpin paling adil, zuhud, dan dicintai dalam sejarah umat manusia. Begitu dibaiat menjadi khalifah, beliau menangis ketakutan akan hisab akhirat, mengembalikan seluruh harta warisan kekayaan pribadinya dan perhiasan istrinya (Fathimah binti Abdul Malik) ke kas negara (Baitul Mal).',
    keyPolicies: [
      {
        title: 'Menghapus Diskriminasi Pajak Kaum Mawali',
        description: 'Menegaskan bahwa orang non-Arab yang masuk Islam tidak boleh dipungut jizyah (pajak non-muslim). Keputusan ini memicu gelombang besar-besaran masuk Islam di Afrika Utara, Mesir, dan Persia.'
      },
      {
        title: 'Memprakarsai Kodifikasi Hadis Resmi Pertama (Tadwin Al-Hadits)',
        description: 'Mengeluarkan instruksi resmi kenegaraan kepada Gubernur Madinah (Abu Bakar bin Muhammad bin Hazm) dan ulama besar Muhammad bin Muslim bin Syihab Az-Zuhri untuk mengumpulkan, menyeleksi, dan membukukan hadis-hadis Nabi SAW karena khawatir hadis hilang seiring wafatnya para penghafal hadis.'
      },
      {
        title: 'Reformasi Agraria & Pengembalian Aset Negara',
        description: 'Mencabut tanah-tanah produktif dan fasilitas istimewa yang dikuasai keluarga pangeran Bani Umayyah secara zalim dan mengembalikannya ke kas negara (Baitul Mal).'
      },
      {
        title: 'Menghentikan Tradisi Caci Maki di Mimbar Jumat',
        description: 'Melarang keras tradisi mencela Ali bin Abi Thalib yang dimulai pada masa konflik politik terdahulu, dan menggantinya dengan pembacaan Q.S. An-Nahl ayat 90 ("Sesungguhnya Allah menyuruh berbuat adil dan kebajikan...") yang terus dibaca hingga hari ini.'
      },
      {
        title: 'Diplomasi Damai dan Pengurangan Beban Militer',
        description: 'Menarik mundur pengepungan Konstantinopel yang memakan banyak korban, menghentikan ekspansi militer yang ekspansif, dan memfokuskan dana negara untuk kesejahteraan sosial di dalam negeri.'
      }
    ],
    monumentalAchievements: [
      'Mencapai keadilan sosial luar biasa: petugas zakat (amil) di Afrika dan Yaman berkeliling kota tetapi tidak menemukan satu pun fakir miskin yang berhak menerima zakat.',
      'Tercatat sebagai Khalifah pembaru abad pertama Hijriyah (Mujaddidul Mi\'ah al-Ula).',
      'Membukukan hadis Nabi SAW secara sistematis untuk pertama kalinya dalam sejarah Islam.'
    ],
    historicalImpact: 'Menjadi standar emas moralitas kepemimpinan Islam yang membuktikan bahwa keadilan, kezuhudan, dan ketaqwaan mampu menyejahterakan rakyat hanya dalam kurun waktu kurang dari 3 tahun.'
  },
  {
    id: 'hisyam-bin-abdul-malik',
    name: 'Hisyam bin Abdul Malik',
    arabicName: 'هِشَامُ بْنُ عَبْدِ المَلِكِ',
    titleGelar: 'Negarawan Hemat & Pilar Terakhir Kejayaan Umayyah',
    reignPeriod: '724 – 743 M',
    reignYearsHijri: '105 – 125 H',
    avatarIcon: '📈',
    quoteKataMutiara: '"Harta negara adalah amanah rakyat. Sedikit kebocoran pada kas negara akan menenggelamkan bahtera pemerintahan."',
    biography: 'Hisyam bin Abdul Malik adalah putra keempat Abdul Malik bin Marwan yang menjabat sebagai khalifah. Beliau memerintah selama hampir 20 tahun. Dikenal sangat teliti, hemat, dan disiplin dalam pengelolaan keuangan negara. Di bawah kepemimpinannya, stabilitas ekonomi dan pertahanan perbatasan tetap kokoh, meskipun bibit-bibit pemberontakan bawah tanah Bani Abbasiyah mulai bersemi.',
    keyPolicies: [
      {
        title: 'Pengembangan Sektor Pertanian & Irigasi Modern',
        description: 'Membangun kanal-kanal air raksasa di sekitar Sungai Efrat dan Syam, mengubah lahan gersang menjadi perkebunan zaitun dan gandum yang subur.'
      },
      {
        title: 'Pertahanan Militer Perbatasan Bizantium & Kaukasus',
        description: 'Memperkuat benteng pertahanan Thughur di perbatasan utara dan menahan serangan bangsa Khazar di pegunungan Kaukasus.'
      },
      {
        title: 'Manajemen Keuangan Kas Negara yang Ketat',
        description: 'Membasmi pemborosan istana dan memastikan cadangan kas Baitul Mal surplus untuk mengantisipasi masa paceklik.'
      }
    ],
    monumentalAchievements: [
      'Menjaga keutuhan imperium Umayyah selama dua dekade di tengah ancaman internal yang kian memanas.',
      'Mendukung penerjemahan teks-teks administrasi dan sastra ke dalam bahasa Arab.'
    ],
    historicalImpact: 'Merupakan khalifah besar terakhir Daulah Umayyah; sejarawan sepakat bahwa setelah wafatnya Hisyam pada 743 M, Daulah Umayyah langsung meluncur ke jurang kehancuran.'
  }
];

// ============================================================================
// 3. KEMAJUAN DAULAH BANI UMAYYAH DAMASKUS
// ============================================================================
export const KEMAJUAN_PERADABAN_DATA: BidangKemajuan[] = [
  {
    id: 'administrasi-birokrasi',
    title: '1. Administrasi & Tata Kelola Birokrasi Pemerintahan',
    arabicTerm: 'النِّظَامُ الإِدَارِيُّ وَالسِّيَاسِيُّ',
    iconName: 'Building2',
    summary: 'Daulah Umayyah mengubah tata kelola pemerintahan Islam menjadi terstruktur dan profesional dengan mendirikan 5 lembaga pokok (An-Nidzam As-Siyasi, Al-Idari, Al-Mali, Al-Harbi, Al-Qadha\'i) serta departemen khusus (Diwan).',
    highlights: [
      {
        name: 'Diwanul Rasail (Sekretariat Negara)',
        detail: 'Mengelola surat-menyurat resmi kenegaraan, dokumentasi diplomatik, dan instruksi khalifah kepada para gubernur provinsi.'
      },
      {
        name: 'Diwanul Kharaj (Departemen Keuangan & Perpajakan)',
        detail: 'Mengelola sumber pendapatan negara seperti zakat, kharaj (pajak tanah), jizyah (pajak perlindungan warga dzimmi), dan ghanimah, serta pengeluaran Baitul Mal.'
      },
      {
        name: 'Diwanul Jund (Departemen Militer & Pertahanan)',
        detail: 'Mengatur pendaftaran prajurit reguler bergaji tetap, logistik senjata, asrama militer, dan strategi pertahanan perbatasan.'
      },
      {
        name: 'Diwanul Khatam (Departemen Arsip & Stempel)',
        detail: 'Mencap surat keputusan resmi khalifah dengan stempel lilin khusus sebelum dilipat dan dikirim, guna mencegah kebocoran rahasia dan pemalsuan isi surat.'
      },
      {
        name: 'Diwanul Barid (Layanan Pos Cepat & Intelijen)',
        detail: 'Jaringan kuda pos kilat yang menghubungkan Damaskus dengan kota-kota di Mesir, Kufah, Basrah, dan Syam; berfungsi ganda sebagai badan intelijen negara.'
      },
      {
        name: 'Nidzam Al-Haras (Korps Pengawal Pribadi)',
        detail: 'Pengawalan khusus bersenjata untuk melindungi khalifah saat menghadiri salat berjamaah di masjid dan upacara kenegaraan pasca-trauma pembunuhan Khulafaur Rasyidin.'
      }
    ],
    famousArtifactOrFigure: {
      title: 'Ziyad bin Abihi',
      description: 'Gubernur legendaris Irak yang merumuskan pidato tanpa puji-pujian (Khuthbah Batra\') untuk mendisiplinkan birokrasi dan menciptakan keamanan mutlak di Basrah dan Kufah.'
    }
  },
  {
    id: 'militer-ekspansi',
    title: '2. Kekuatan Militer & Perluasan Wilayah Teritorial 3 Benua',
    arabicTerm: 'التَّوَسُّعُ الْعَسْكَرِيُّ وَالْجُغْرَافِيُّ',
    iconName: 'Shield',
    summary: 'Di bawah panji Umayyah, wilayah kekhalifahan Islam membentang seluas lebih dari 11 juta kilometer persegi, mencakup tiga benua (Asia, Afrika, dan Eropa), menjadikannya salah satu imperium terbesar dalam sejarah dunia.',
    highlights: [
      {
        name: 'Front Barat Daya (Afrika Utara & Samudra Atlantik)',
        detail: 'Panglima Uqbah bin Nafi\' menaklukkan Maroko, mendirikan kota pangkalan militer Kairouan (Tunisia), dan memacu kudanya hingga ke pesisir Samudra Atlantik seraya berseru bahwa dakwah telah sampai di ujung bumi barat.'
      },
      {
        name: 'Front Eropa (Andalusia / Spanyol & Portugal)',
        detail: 'Tahun 711 M, Thariq bin Ziyad bersama 7.000 pasukan menyeberangi selat sempit yang diabadikan dengan namanya (Jabal Thariq / Gibraltar), membakar kapal untuk membulatkan tekad, mengalahkan Raja Roderick dalam Perang Guadalete, dan menaklukkan Toledo serta Cordoba.'
      },
      {
        name: 'Front Timur & Asia Tengah (Transoxiana / Mawarannahr)',
        detail: 'Panglima Qutaibah bin Muslim menyeberangi Sungai Amu Darya (Oxus), menaklukkan kota-kota peradaban Sutra seperti Bukhara, Samarkand, Khawarizm, hingga perbatasan barat Dinasti Tang (Tiongkok).'
      },
      {
        name: 'Front Asia Selatan (Lembah Sungai Indus / Sind)',
        detail: 'Panglima muda Muhammad bin Qasim (berusia 17 tahun) membebaskan wilayah Sind dan Multan (sekarang Pakistan), memperkenalkan Islam dengan santun sehingga dihormati penduduk lokal.'
      },
      {
        name: 'Armada Angkatan Laut Mediterania',
        detail: 'Menguasai pulau-pulau strategis seperti Siprus, Rhodes, Kreta, dan Sisilia, serta melakukan beberapa kali ekspedisi laut mengepung benteng Konstantinopel.'
      }
    ],
    famousArtifactOrFigure: {
      title: 'Bukit Gibraltar (Jabal Thariq)',
      description: 'Batu karang raksasa di ujung selatan Spanyol yang menjadi monumen abadi pendaratan pasukan Thariq bin Ziyad membuka gerbang peradaban Islam di Eropa Barat.'
    }
  },
  {
    id: 'arsitektur-pembangunan',
    title: '3. Arsitektur Monumental & Pembangunan Infrastruktur Publik',
    arabicTerm: 'العِمَارَةُ الإِسْلَامِيَّةُ وَالبِنْيَةُ التَّحْتِيَّةُ',
    iconName: 'Landmark',
    summary: 'Dinasti Umayyah memadukan teknik teknik konstruksi Bizantium-Romawi dengan nilai estetika tauhid Islam, melahirkan arsitektur masjid berkubah megah, menara azan pertama, kaligrafi monumental, serta fasilitas umum canggih.',
    highlights: [
      {
        name: 'Masjid Agung Umayyah di Damaskus (706–715 M)',
        detail: 'Dibangun oleh Khalifah Al-Walid bin Abdul Malik dengan mempekerjakan ribuan seniman. Memiliki dinding mosaik emas pemandangan taman surga tanpa figur makhluk hidup, empat menara azan pertama dalam sejarah, dan makam Nabi Yahya a.s. di dalamnya.'
      },
      {
        name: 'Qubbat As-Sakhrah (Dome of the Rock) Yerusalem (691 M)',
        detail: 'Dibangun oleh Khalifah Abdul Malik bin Marwan dengan denah oktagonal (segi delapan) melingkari batu Mi\'raj Nabi Muhammad SAW, bermahkota kubah berlapis emas dan pita kaligrafi surah Maryam dan Al-Ikhlas.'
      },
      {
        name: 'Perluasan Masjid Nabawi di Madinah',
        detail: 'Khalifah Al-Walid memerintahkan Gubernur Madinah Umar bin Abdul Aziz memasukkan kamar-kamar istri Nabi SAW (hujurat) ke dalam area masjid dan mendirikan mihrab berongga pertama.'
      },
      {
        name: 'Istana Padang Pasir (Desert Palaces)',
        detail: 'Mendirikan kompleks istana peristirahatan megah seperti Qashr Amra di Yordania dan Qashr Al-Musyatta dengan sistem pemandian air panas (hammam) dan saluran irigasi canggih.'
      },
      {
        name: 'Bimaristan (Rumah Sakit Gratis) Pertama',
        detail: 'Dibangun tahun 707 M di Damaskus, menyediakan perawat khusus, obat gratis, bangsal isolasi penyakit lepra/kusta, serta makanan bergizi bagi pasien miskin.'
      }
    ],
    famousArtifactOrFigure: {
      title: 'Mihrab Cekung (Mihrab Mujawwaf)',
      description: 'Inovasi arsitektur pertama yang diperkenalkan di Masjid Nabawi pada masa Umayyah untuk memantulkan suara imam saat mengimami ribuan jamaah salat.'
    }
  },
  {
    id: 'ilmu-bahasa-hadis',
    title: '4. Perkembangan Ilmu Pengetahuan, Bahasa Arab & Kodifikasi Hadis',
    arabicTerm: 'الحَرَكَةُ العِلْمِيَّةُ وَتَدْوِينُ الحَدِيثِ',
    iconName: 'BookMarked',
    summary: 'Masa Umayyah menjadi tonggak transisi dari budaya lisan (hafalan) menuju budaya tulis (literasi sistematis), melahirkan standarisasi bahasa Arab, peletakan kaidah nahwu, serta pembukuan hadis Nabi SAW secara resmi.',
    highlights: [
      {
        name: 'Kodifikasi Resmi Hadis Nabi SAW (Tadwin Al-Hadits)',
        detail: 'Khalifah Umar bin Abdul Aziz menginstruksikan ulama besar Ibnu Syihab Az-Zuhri dan Abu Bakar bin Muhammad bin Hazm untuk menghimpun dan menyeleksi hadis dari para sahabat dan tabiin, menyelamatkan warisan sunnah dari bahaya pemalsuan.'
      },
      {
        name: 'Penyusunan Ilmu Nahwu (Gramatika Bahasa Arab)',
        detail: 'Abu Al-Aswad Ad-Du\'ali atas restu Ali bin Abi Thalib dan dorongan Gubernur Ziyad menyusun kaidah dasar bahasa Arab, disusul penemuan titik dan harakat oleh Nashr bin Ashim dan Yahya bin Ya\'mar.'
      },
      {
        name: 'Arabisasi Bahasa Administrasi (Ta\'rib ad-Diwan)',
        detail: 'Penggunaan bahasa Arab sebagai bahasa resmi negara di tiga benua mendorong jutaan penduduk non-Arab mempelajari sastra dan tata bahasa Al-Qur\'an, menjadikannya lingua franca dunia ilmiah.'
      },
      {
        name: 'Awal Gerakan Penerjemahan Sains (Kimiya & Kedokteran)',
        detail: 'Pangeran Khalid bin Yazid bin Muawiyah (Hakim Al-Marwan) memerintahkan penerjemahan naskah-naskah alkimia, kedokteran, dan astrologi kuno Yunani dan Koptik ke dalam bahasa Arab.'
      },
      {
        name: 'Perkembangan Ilmu Sirah & Sejarah Islam',
        detail: 'Lahirnya sejarawan awal Islam seperti Urwah bin Az-Zubair dan Aban bin Utsman yang menulis catatan peristiwa Maghazi (peperangan dan biografi Nabi SAW).'
      }
    ],
    famousArtifactOrFigure: {
      title: 'Imam Ibnu Syihab Az-Zuhri (51–124 H)',
      description: 'Tokoh tabiin agung pemegang sanad hadis terkuat yang dijuluki "Pelopor Kodifikasi Hadis Pertama" atas instruksi resmi negara khalifah Umar bin Abdul Aziz.'
    }
  }
];

// ============================================================================
// 4. FAKTOR-FAKTOR KEMUNDURAN DAN KERUNTUHAN DAULAH UMAYYAH DAMASKUS
// ============================================================================
export const FAKTOR_KEMUNDURAN_DATA: FaktorKemunduran[] = [
  {
    number: 1,
    title: 'Sistem Suksesi Monarki Heriditer & Dualisme Putra Mahkota',
    cause: 'Pengangkatan dua calon putra mahkota (wali al-\'ahd) sekaligus oleh khalifah sebelumnya, misalnya Sulaiman bin Abdul Malik menunjuk Umar bin Abdul Aziz lalu Yazid bin Abdul Malik; atau Yazid II menunjuk Hisyam lalu Walid II.',
    impact: 'Memicu persaingan internal, intrik politik berdarah di kalangan pangeran istana, saling membunuh, dan saling mengkudeta tahta (misal: kudeta Yazid bin Al-Walid terhadap Walid bin Yazid).',
    analysis: 'Sistem monarki heriditer yang tidak memiliki mekanisme pemilihan yang legitimate membelah loyalitas keluarga Bani Umayyah menjadi faksi-faksi yang saling menghancurkan.',
    lesson: 'Perebutan kekuasaan yang berlandaskan ambisi keluarga akan melumpuhkan stabilitas negara dan menghancurkan persaudaraan.'
  },
  {
    number: 2,
    title: 'Konflik Kesukuan Arab Tradisional: Qais (Utara) vs Yaman (Selatan)',
    cause: 'Fanatisme kesukuan Jahiliyah (\'ashabiyah) yang bangkit kembali antara suku Arab Mudhariyah/Qais (Arab Utara) dan suku Arab Yamaniyah/Kalb (Arab Selatan).',
    impact: 'Para khalifah akhir Umayyah bersikap memihak salah satu suku. Ketika khalifah memihak Qais, suku Yaman memberontak; begitu pula sebaliknya. Polarisasi ini merembet ke seluruh provinsi hingga ke Andalusia.',
    analysis: 'Rasulullah SAW telah melarang keras \'ashabiyah ("Tinggalkanlah fanatisme golongan, karena ia menjijikkan dan membusuk"). Pengabaian ajaran Islam ini memecah belah kekuatan tentara kekhalifahan.',
    lesson: 'Fanatisme suku, ras, atau golongan adalah racun berbahaya yang selalu menjadi penyebab utama kehancuran sebuah bangsa besar.'
  },
  {
    number: 3,
    title: 'Diskriminasi Sosial & Pajak terhadap Kaum Mawali (Muslim Non-Arab)',
    cause: 'Kaum Mawali (warga Muslim non-Arab seperti bangsa Persia, Koptik Mesir, dan Berber) diperlakukan sebagai warga kelas dua oleh mayoritas khalifah (kecuali masa Umar bin Abdul Aziz). Mereka tetap dipungut pajak jizyah dan kharaj layaknya non-muslim serta dihalangi memegang jabatan tinggi militer.',
    impact: 'Timbul rasa sakit hati, kekecewaan mendalam, dan rasa ketidakadilan di kalangan jutaan Muslim non-Arab yang berpendidikan tinggi.',
    analysis: 'Ajaran Islam menegaskan kesetaraan mutlak manusia tanpa memandang suku/ras (Q.S. Al-Hujurat: 13). Diskriminasi rezim Umayyah membuat kaum Mawali menjadi basis pendukung utama revolusi Bani Abbasiyah.',
    lesson: 'Pemerintahan yang menindas dan membedakan hak warganya atas dasar etnisitas pasti akan digulingkan oleh kemarahan rakyat jelata.'
  },
  {
    number: 4,
    title: 'Gaya Hidup Mewah, Hedonisme & Kerosotan Moral Khalifah Akhir',
    cause: 'Melimpahnya kekayaan negara membuat khalifah-khalifah generasi akhir (seperti Yazid bin Abdul Malik dan Walid bin Yazid) tenggelam dalam gaya hidup berfoya-foya, pesta minum khamar, kegemaran berburu, memelihara penyanyi wanita, dan melalaikan kewajiban memimpin rakyat.',
    impact: 'Rakyat kehilangan respek dan kewibawaan terhadap figur khalifah. Ulama dan tokoh masyarakat menarik dukungan moral dari istana Damaskus.',
    analysis: 'Kehancuran moral para pemimpin adalah tanda-tanda sunnatullah datangnya keruntuhan suatu peradaban, sebagaimana diingatkan dalam Al-Qur\'an surah Al-Isra\' ayat 16.',
    lesson: 'Kemewahan yang melalaikan dan kerusakan akhlak di pucuk pimpinan adalah lonceng kematian bagi integritas dan legitimasi kekuasaan.'
  },
  {
    number: 5,
    title: 'Aliansi Gerakan Oposisi Revolusi Abbasiyah & Pertempuran Sungai Zab (750 M)',
    cause: 'Keluarga Bani Hasyim (keturunan paman Nabi, Al-Abbas) melancarkan propaganda rahasia di Khurasan (Persia) dengan semboyan "Ar-Ridha min Ali Muhammad" (Menyerahkan kepemimpinan kepada keluarga Nabi SAW yang diridhai), berhasil menggabungkan dukungan kaum Syiah, Mawali Persia, dan kaum yang tertindas.',
    impact: 'Di bawah komando panglima tangguh Abu Muslim Al-Khurasani, pasukan panji hitam Abbasiyah bergerak cepat merebut Kufah. Pada Januari 750 M, terjadi Pertempuran Sungai Zab (Irak utara) di mana pasukan Khalifah terakhir Umayyah, Marwan bin Muhammad (Marwan II), dikalahkan secara telak.',
    analysis: 'Marwan bin Muhammad melarikan diri ke Mesir dan tewas di Bushir pada 132 H (750 M). Peristiwa ini menandai tamatnya riwayat Daulah Bani Umayyah di Damaskus, digantikan oleh Daulah Bani Abbasiyah di Baghdad (meskipun keturunan Umayyah, Abdurrahman Ad-Dakhil, kelak melarikan diri dan mendirikan Keamiran Umayyah di Cordoba, Spanyol).',
    lesson: 'Kombinasi antara hilangnya legitimasi moral pemerintah dan hadirnya kekuatan oposisi yang terorganisir rapi selalu menjadi formula penumbang kekuasaan tiran.'
  }
];

// ============================================================================
// 5. HIKMAH SEJARAH BANI UMAYYAH DAMASKUS
// ============================================================================
export const HIKMAH_SEJARAH_DATA: HikmahSejarah[] = [
  {
    point: 1,
    title: 'Meneladani Kepemimpinan Berintegritas, Adil & Zuhud',
    subTitle: 'Mencontoh teladan agung Khalifah Umar bin Abdul Aziz',
    dalilRujukan: {
      surah: 'Q.S. An-Nahl: 90',
      arabic: 'إِنَّ اللَّهَ يَأْمُرُ بِالْعَدْلِ وَالْإِحْسَانِ وَإِيتَاءِ ذِي الْقُرْبَىٰ وَيَنْهَىٰ عَنِ الْفَحْشَاءِ وَالْمُنكَرِ وَالْبَغْيِ ۚ يَعِظُكُمْ لَعَلَّكُمْ تَذَكَّرُونَ',
      translation: 'Sesungguhnya Allah menyuruh (kamu) berlaku adil dan berbuat kebajikan, memberi kepada kaum kerabat, dan Allah melarang dari perbuatan keji, kemungkaran dan permusuhan. Dia memberi pengajaran kepadamu agar kamu dapat mengambil pelajaran.'
    },
    explanation: 'Kepemimpinan dalam Islam adalah amanah berat yang akan dimintai pertanggungjawaban di hadapan Allah Swt., bukan hak istimewa untuk menumpuk harta keluarga. Sosok Umar bin Abdul Aziz membuktikan bahwa kekuasaan yang dijalankan dengan kezuhudan, kejujuran, dan pembelaan kepada kaum lemah mampu menyejahterakan negara hanya dalam tempo 30 bulan.',
    realLifeApplication: [
      'Menjalankan amanah sebagai pengurus kelas / OSIS dengan jujur tanpa membeda-bedakan teman.',
      'Menolak segala bentuk kecurangan, korupsi uang kas, dan kolusi dalam pergaulan sekolah.',
      'Mengutamakan kepentingan bersama di atas kepentingan pribadi atau kelompok pertemanan.'
    ]
  },
  {
    point: 2,
    title: 'Menjaga Ukhuwah Islamiyah & Menjauhi Fanatisme Golongan (\'Ashabiyah)',
    subTitle: 'Bahaya disintegrasi akibat perseteruan suku dan kelompok',
    dalilRujukan: {
      surah: 'Q.S. Al-Hujurat: 10 & 13',
      arabic: 'إِنَّمَا الْمُؤْمِنُونَ إِخْوَةٌ فَأَصْلِحُوا بَيْنَ أَخَوَيْكُمْ ... إِنَّ أَكْرَمَكُمْ عِندَ اللَّهِ أَتْقَاكُمْ',
      translation: 'Sesungguhnya orang-orang mukmin itu bersaudara, karena itu damaikanlah antara kedua saudaramu... Sesungguhnya orang yang paling mulia di antara kamu di sisi Allah ialah orang yang paling bertakwa di antara kamu.'
    },
    explanation: 'Sejarah membuktikan bahwa imperium sebesar Daulah Umayyah runtuh bukan semata karena kekuatan musuh dari luar, melainkan karena perpecahan internal suku Qais vs Yaman dan perlakuan diskriminatif terhadap kaum non-Arab (Mawali). Persatuan umat (Ukhuwah) adalah benteng utama kejayaan peradaban.',
    realLifeApplication: [
      'Tidak mengolok-olok suku, logat bicara, daerah asal, atau warna kulit teman di sekolah.',
      'Menjauhi aksi tawuran antarsekolah, geng motor, atau fanatisme suporter olahraga yang berlebihan.',
      'Menghormati keragaman pendapat dan mengedepankan musyawarah jika terjadi kesalahpahaman.'
    ]
  },
  {
    point: 3,
    title: 'Mengembangkan Semangat Literasi, Ilmu Pengetahuan & Inovasi',
    subTitle: 'Meneruskan etos kodifikasi hadis, tata bahasa, dan sains peradaban',
    dalilRujukan: {
      surah: 'Q.S. Al-Mujadilah: 11',
      arabic: 'يَرْفَعِ اللَّهُ الَّذِينَ آمَنُوا مِنكُمْ وَالَّذِينَ أُوتُوا الْعِلْمَ دَرَجَاتٍ',
      translation: 'Allah akan meninggikan orang-orang yang beriman di antaramu dan orang-orang yang diberi ilmu pengetahuan beberapa derajat.'
    },
    explanation: 'Daulah Umayyah meninggalkan warisan abadi berupa pembukuan resmi hadis Nabi SAW, penataan tata bahasa Arab dengan tanda baca harakat dan titik, serta perintisan penerjemahan ilmu kedokteran dan kimia. Tanpa gerakan literasi Umayyah, khazanah Islam akan sulit dipelajari generasi setelahnya.',
    realLifeApplication: [
      'Gemar membaca buku, mendokumentasikan catatan pelajaran secara rapi, dan mencintai ilmu agama serta sains modern.',
      'Mempelajari kaidah membaca Al-Qur\'an dengan tajwid dan harakat yang benar.',
      'Memanfaatkan teknologi kecerdasan buatan (AI) dan internet untuk hal-hal positif yang mencerdaskan umat.'
    ]
  },
  {
    point: 4,
    title: 'Waspada terhadap Jebakan Gaya Hidup Mewah & Hedonisme',
    subTitle: 'Kehancuran suatu bangsa bermula dari rusaknya moral pemuda dan penguasanya',
    dalilRujukan: {
      surah: 'Q.S. Al-Isra\': 16',
      arabic: 'وَإِذَا أَرَدْنَا أَن نُّهْلِكَ قَرْيَةً أَمَرْنَا مُتْرَفِيهَا فَفَسَقُوا فِيهَا فَحَقَّ عَلَيْهَا الْقَوْلُ فَدَمَّرْنَاهَا تَدْمِيرًا',
      translation: 'Dan jika Kami hendak membinasakan suatu negeri, maka Kami perintahkan kepada orang-orang yang hidup mewah di negeri itu (supaya menaati Allah), tetapi mereka melakukan kedurhakaan dalam negeri itu, maka sudah sepantasnya berlaku terhadapnya perkataan (ketentuan Kami), kemudian Kami hancurkan negeri itu sehancur-hancurnya.'
    },
    explanation: 'Hedonisme para khalifah akhir Umayyah yang lalai, berfoya-foya dengan harta negara, dan menelantarkan kemaslahatan rakyat adalah peringatan nyata. Kemewahan dunia yang tidak diimbangi dengan ketaqwaan batiniah akan melahirkan kelemahan mental dan kehancuran spiritual.',
    realLifeApplication: [
      'Membiasakan pola hidup sederhana, qana\'ah (merasa cukup), dan tidak pamer kekayaan (flexing) di media sosial.',
      'Menjauhkan diri dari narkoba, minuman keras, pornografi, dan pergaulan bebas yang merusak moral.',
      'Menyisihkan uang saku secara berkala untuk infak dan sedekah membantu orang-orang yang membutuhkan.'
    ]
  },
  {
    point: 5,
    title: 'Kearifan Meneladani Kenegarawanan Sayyidina Hasan bin Ali r.a.',
    subTitle: 'Mengutamakan kemaslahatan umat di atas ambisi jabatan dan ego pribadi',
    explanation: 'Peristiwa \'Amul Jama\'ah (41 H) mengajarkan bahwa kerelaan melepaskan jabatan demi mencegah pertumpahan darah sesama mukmin adalah puncak keteladanan akhlak islami. Kemenangan sejati bukanlah menumpahkan darah saudara, melainkan merajut perdamaian.',
    realLifeApplication: [
      'Mampu mengalah dan meminta maaf terlebih dahulu saat berselisih paham demi keutuhan pertemanan.',
      'Tidak memaksakan kehendak saat pemilihan ketua kelas atau rapat organisasi kesiswaan.',
      'Menjadi juru damai (mediator) apabila melihat dua orang teman sedang berseteru atau bermusuhan.'
    ]
  }
];

// ============================================================================
// 6. SOAL KUIS EVALUASI HOTS BAB 5
// ============================================================================
export const QUIZ_BAB5_DATA: QuizQuestionBab5[] = [
  {
    id: 1,
    scenario: 'Pada tahun 41 H, Sayyidina Hasan bin Ali r.a. secara sukarela menyerahkan mandat kekhalifahan kepada Muawiyah bin Abi Sufyan di Kufah, meskipun saat itu beliau memiliki ribuan pasukan pendukung setia.',
    question: 'Berdasarkan analisis historis, mengapa peristiwa monumental tersebut dinamakan \'Amul Jama\'ah (Tahun Persatuan) dan mencerminkan nubuwah Rasulullah SAW?',
    options: [
      'Karena seluruh umat Islam serentak berkumpul di Makkah untuk melaksanakan ibadah haji akbar bersama Muawiyah.',
      'Karena langkah mulia Sayyidina Hasan berhasil menghentikan fitnah perang saudara antarumat Islam demi menyelamatkan darah kaum mukminin, sebagaimana disabdakan Nabi SAW dalam HR. Bukhari No. 2704.',
      'Karena sistem pemilihan kepemimpinan Islam untuk pertama kalinya berhasil menyepakati pembagian kekuasaan antara Kufah dan Madinah.',
      'Karena pasukan Islam berhasil menyatukan seluruh suku Quraisy untuk menaklukkan Konstantinopel secara damai.'
    ],
    correctAnswer: 1,
    explanation: 'Tepat sekali! Tahun 41 H dinamakan \'Amul Jama\'ah karena Sayyidina Hasan bin Ali r.a. mengorbankan ambisi politik demi persatuan dan keselamatan darah kaum muslimin, sehingga memenuhi sabda kakeknya Rasulullah SAW: "Sesungguhnya cucuku ini adalah sayyid, dan melaluinya Allah akan mendamaikan dua kelompok besar kaum muslimin" (H.R. Bukhari).'
  },
  {
    id: 2,
    scenario: 'Khalifah Abdul Malik bin Marwan (685–705 M) dijuluki oleh para sejarawan sebagai pendiri kedua (the second founder) Daulah Bani Umayyah berkat serangkaian kebijakan fundamental yang mengubah wajah peradaban Islam.',
    question: 'Di antara kebijakan monumental Abdul Malik bin Marwan yang berhasil memperkokoh kedaulatan identitas peradaban Islam secara global adalah...',
    options: [
      'Memindahkan ibukota kekhalifahan dari Damaskus ke kota Baghdad serta mendirikan perpustakaan Baitul Hikmah.',
      'Menghapuskan angkatan laut militer dan menggantinya dengan pasukan kavaleri berkuda khas Bizantium.',
      'Menerapkan kebijakan Arabisasi administrasi (Ta\'rib ad-Diwan), mencetak mata uang Dinar-Dirham Islam murni, dan membangun Dome of the Rock (Qubbat As-Sakhrah).',
      'Mengembalikan seluruh sistem pemilihan kepemimpinan kepada ahlul halli wal \'aqdi secara musyawarah murni.'
    ],
    correctAnswer: 2,
    explanation: 'Luar biasa! Abdul Malik bin Marwan melakukan Arabisasi bahasa birokrasi negara (menggantikan bahasa Yunani dan Persia), menerbitkan mata uang resmi berkaligrafi Tauhid (menggantikan koin Romawi), dan mendirikan mahakarya arsitektur Qubbat As-Sakhrah di Yerusalem.'
  },
  {
    id: 3,
    scenario: 'Meskipun hanya berkuasa selama 2 tahun 5 bulan (717–720 M), Khalifah Umar bin Abdul Aziz berhasil menciptakan keadilan sosial yang mencengangkan, hingga para amil zakat tidak menemukan fakir miskin yang berhak menerima zakat.',
    question: 'Manakah kebijakan strategis Khalifah Umar bin Abdul Aziz yang paling tepat dalam menjunjung tinggi prinsip kesetaraan dan keadilan sosial syariat?',
    options: [
      'Menaikkan pajak jizyah bagi bangsa Romawi dan menolak kehadiran kaum Mawali di ibukota Damaskus.',
      'Menghapuskan pungutan jizyah bagi kaum non-Arab (Mawali) yang telah masuk Islam, mengembalikan aset pribadi ke kas Baitul Mal, serta memprakarsai kodifikasi resmi hadis Nabi SAW.',
      'Membagi kas negara secara cuma-cuma khusus kepada para pangeran dan keluarga besar istana Bani Umayyah.',
      'Menjual seluruh tanah produktif di Syam kepada para pedagang kaya dari Persia.'
    ],
    correctAnswer: 1,
    explanation: 'Benar sekali! Umar bin Abdul Aziz menegaskan "Nabi Muhammad diutus sebagai pembawa petunjuk, bukan pemungut upeti" dengan menghapus jizyah bagi kaum Mawali yang telah bersyahadat, mengembalikan harta rampasan istana ke Baitul Mal, serta memerintahkan Ibnu Syihab Az-Zuhri untuk membukukan hadis Nabi SAW pertama kali secara resmi.'
  },
  {
    id: 4,
    scenario: 'Sebuah dinasti adidaya yang membentang dari Samudra Atlantik di barat hingga perbatasan Tiongkok di timur akhirnya runtuh secara tragis pada tahun 132 H (750 M) dalam Pertempuran Sungai Zab.',
    question: 'Berdasarkan kajian kritis faktor internal kemunduran Daulah Umayyah Damaskus, kombinasi penyebab paling dominan yang memicu keruntuhannya adalah...',
    options: [
      'Ketiadaan sumber daya alam dan kegagalan total para arsitek dalam merancang Masjid Agung Umayyah.',
      'Sistem putra mahkota ganda yang memicu intrik tahta, bangkitnya fanatisme suku Qais vs Yaman, diskriminasi kaum Mawali, serta hedonisme khalifah akhir.',
      'Kalah bersaing dalam perdagangan rempah-rempah laut dengan kerajaan Sriwijaya di Nusantara.',
      'Seluruh rakyat Damaskus berpindah memeluk agama lain secara serentak.'
    ],
    correctAnswer: 1,
    explanation: 'Tepat sekali! Faktor kemunduran internal Bani Umayyah bersumber dari: (1) Perebutan tahta akibat penunjukan putra mahkota ganda; (2) Fanatisme suku kuno Mudhar vs Yaman; (3) Ketidakadilan terhadap kaum Mawali; dan (4) Kemerosotan moral serta gaya hidup foya-foya para khalifah generasi akhir.'
  },
  {
    id: 5,
    scenario: 'Sebagai pelajar Muslim zaman sekarang yang hidup di tengah maraknya berita hoaks, ujaran kebencian kesukuan, dan godaan gaya hidup pamer kemewahan (flexing) di media sosial, kita mempelajari sejarah Bani Umayyah Damaskus.',
    question: 'Keteladanan praktis manakah yang paling relevan diaplikasikan seorang siswa SMP dari refleksi sejarah tersebut?',
    options: [
      'Membela kelompok atau geng sendiri mati-matian meskipun teman satu geng melakukan perundungan (bullying) kepada adik kelas.',
      'Membeli barang-barang mewah dengan memaksakan orang tua agar terlihat kaya seperti para pangeran istana.',
      'Menjauhi fanatisme sempit golongan (\'ashabiyah), meneladani kejujuran hidup bersahaja Umar bin Abdul Aziz, dan bersemangat menuntut ilmu serta literasi digital.',
      'Menghindari tanggung jawab tugas kelompok karena merasa jabatan ketua kelas tidak memberikan keuntungan materi.'
    ],
    correctAnswer: 2,
    explanation: 'Sempurna! Ibrah sejarah terbesar bagi generasi pelajar Muslim adalah meneladani kesederhanaan dan keadilan moral Umar bin Abdul Aziz, menjaga persatuan ukhuwah dengan menjauhi fanatisme sempit (\'ashabiyah/chauvinisme), serta meneruskan etos literasi dan keilmuan yang bermanfaat bagi masyarakat.'
  }
];
