export interface NabiData {
  order: number;
  name: string;
  arabicName: string;
  epithet: string;
  periodAndPlace: string;
  targetPeople: string;
  isUlulAzmi: boolean;
  quranMentionCount: number;
  quranVerse: string;
  miracles: string[];
  storySummary: string;
  moralLessons: string[];
}

export const SEJARAH_25_NABI: NabiData[] = [
  {
    order: 1,
    name: 'Nabi Adam AS',
    arabicName: 'آدَم',
    epithet: 'Abul Basyar (Bapak Umat Manusia)',
    periodAndPlace: 'Awal penciptaan manusia, Surga lalu diturunkan ke Bumi',
    targetPeople: 'Anak-cucu generasi pertama manusia',
    isUlulAzmi: false,
    quranMentionCount: 25,
    quranVerse: 'Q.S. Al-Baqarah: 30-37 & Q.S. Al-A\'raf: 19-25',
    miracles: [
      'Diciptakan langsung oleh Allah SWT dari tanah liat',
      'Diajarkan oleh Allah seluruh nama-nama benda (ilmu pengetahuan)',
      'Para malaikat diperintahkan bersujud hormat kepadanya'
    ],
    storySummary: 'Nabi Adam AS adalah manusia pertama yang diciptakan Allah sebagai khalifah di bumi. Bersama Hawa, beliau tinggal di surga namun digoda iblis hingga memakan buah terlarang. Beliau segera bertaubat dengan doa: "Rabbana zhalamna anfusana..." dan Allah menerima taubatnya. Di bumi, beliau mendidik anak-anaknya (Qabil dan Habil) dengan aturan ketaatan dan keadilan.',
    moralLessons: [
      'Segera bertaubat dan mengakui kesalahan ketika berbuat khilaf',
      'Pentingnya menuntut ilmu karena Adam dimuliakan malaikat karena ilmunya',
      'Waspada terhadap bujuk rayu godaan iblis dan rasa sombong'
    ]
  },
  {
    order: 2,
    name: 'Nabi Idris AS',
    arabicName: 'إِدْرِيس',
    epithet: 'Asadul Usud (Singa Keberanian dalam Berdakwah)',
    periodAndPlace: '± 4533 - 4188 SM, wilayah Babilonia (Irak) & Mesir',
    targetPeople: 'Keturunan Qabil yang mulai menyimpang dari tauhid',
    isUlulAzmi: false,
    quranMentionCount: 2,
    quranVerse: 'Q.S. Maryam: 56-57 & Q.S. Al-Anbiya: 85',
    miracles: [
      'Orang pertama yang pandai menulis dengan pena (kalam)',
      'Menguasai ilmu perbintangan (astronomi), berhitung (matematika), dan menjahit pakaian',
      'Diangkat oleh Allah SWT ke tempat yang tinggi dan mulia'
    ],
    storySummary: 'Nabi Idris AS dikenal sangat tekun beribadah dan sangat cerdas. Beliau memperkenalkan keterampilan menjahit pakaian kain (sebelumnya manusia berpakaian dari kulit hewan) dan mengajarkan cara mencatat dengan tulisan. Beliau berdakwah dengan sabar mengajak kaumnya kembali menyembah Allah SWT.',
    moralLessons: [
      'Mencintai literasi, membaca, dan menulis sejak bangku sekolah',
      'Mengembangkan keterampilan hidup (life skills) untuk kemanfaatan sesama',
      'Kecerdasan intelektual harus diiringi dengan ketaatan beribadah'
    ]
  },
  {
    order: 3,
    name: 'Nabi Nuh AS',
    arabicName: 'نُوح',
    epithet: 'Najiyullah (Orang yang Diselamatkan Allah) & Ulul Azmi',
    periodAndPlace: '± 3993 - 3043 SM, wilayah Mesopotamia Selatan (Irak)',
    targetPeople: 'Kaum Bani Rasib yang menyembah berhala Wadd, Suwa\', Yaghuts',
    isUlulAzmi: true,
    quranMentionCount: 43,
    quranVerse: 'Q.S. Nuh: 1-28 & Q.S. Hud: 25-49',
    miracles: [
      'Membuat bahtera raksasa di atas bukit atas petunjuk wahyu Allah',
      'Diselamatkan bersama orang-orang beriman dan pasang-pasangan hewan dari banjir bandang dahsyat',
      'Diberi usia panjang (950 tahun dakwah) dengan ketabahan luar biasa'
    ],
    storySummary: 'Nabi Nuh AS berdakwah selama 950 tahun siang dan malam dengan penuh kesabaran, namun hanya sedikit yang mau beriman. Kaumnya justru mengejek dan menantang azab. Allah memerintahkan Nuh membuat kapal besar. Ketika banjir bah datang menenggelamkan bumi, hanya orang beriman yang selamat di bahtera, sedangkan orang ingkar termasuk istri dan anaknya (Kan\'an) tenggelam.',
    moralLessons: [
      'Ketabahan dan pantang menyerah dalam menyebarkan kebaikan',
      'Keselamatan sejati didasarkan pada iman dan amal, bukan pada garis keturunan',
      'Pentingnya kerja keras dan kepatuhan mutlak pada petunjuk Allah'
    ]
  },
  {
    order: 4,
    name: 'Nabi Hud AS',
    arabicName: 'هُود',
    epithet: 'Nabi Kaum \'Ad',
    periodAndPlace: '± 2400 SM, wilayah Al-Ahqaf (antara Yaman dan Oman)',
    targetPeople: 'Kaum \'Ad yang berpostur tubuh kekar dan pembangun istana megah',
    isUlulAzmi: false,
    quranMentionCount: 7,
    quranVerse: 'Q.S. Hud: 50-60 & Q.S. Al-Ahqaf: 21-26',
    miracles: [
      'Selamat dari hempasan angin topan dahsyat (angin shashar \'atiyah)',
      'Diberi ketenangan menghadapi ancaman fisik kaum \'Ad yang bertubuh raksasa',
      'Mampu mendatangkan hujan dan peringatan kekeringan'
    ],
    storySummary: 'Kaum \'Ad dikaruniai tubuh perkasa dan kemampuan arsitektur memahat batu menjadi istana megah di bukit pasir Al-Ahqaf. Namun mereka sombong dan berkata: "Siapakah yang lebih kuat dari kami?". Nabi Hud mengajak mereka bersyukur dan menyembah Allah. Karena mereka mendustakan, Allah mengirimkan angin topan dingin yang membinasakan selama 7 malam 8 hari.',
    moralLessons: [
      'Jangan menyombongkan kekuatan fisik atau kekayaan materi',
      'Segala kelebihan adalah titipan nikmat Allah yang harus disyukuri',
      'Berbicara dengan santun kepada orang yang bersikap keras kepala'
    ]
  },
  {
    order: 5,
    name: 'Nabi Shalih AS',
    arabicName: 'صَالِح',
    epithet: 'Nabi Kaum Tsamud',
    periodAndPlace: '± 2150 SM, wilayah Al-Hijr (Mada\'in Saleh, Arab Saudi)',
    targetPeople: 'Kaum Tsamud pemahat gunung batu',
    isUlulAzmi: false,
    quranMentionCount: 9,
    quranVerse: 'Q.S. Al-A\'raf: 73-79 & Q.S. Asy-Syu\'ara: 141-159',
    miracles: [
      'Mengeluarkan seekor unta betina bunting dari celah batu karang keras',
      'Air susu unta tersebut mencukupi kebutuhan seluruh penduduk kota secara bergantian',
      'Peringatan suara petir menggelegar yang menghancurkan orang-orang zhalim'
    ],
    storySummary: 'Kaum Tsamud menuntut bukti kenabian Nabi Shalih dengan meminta seekor unta betina keluar dari batu karang. Ketika mukjizat terjadi, mereka diperingatkan untuk berbagi giliran minum dengan unta tersebut. Namun kelompok fasik menyembelih unta itu dengan sengaja. Tiga hari kemudian, azab berupa petir dan gempa dahsyat memusnahkan mereka.',
    moralLessons: [
      'Menghormati kesepakatan dan janji yang telah dibuat bersama',
      'Menyayangi hewan dan melarang perbuatan aniaya terhadap makhluk hidup',
      'Bahaya membiarkan kejahatan kelompok ekstrem merusak ketentraman masyarakat'
    ]
  },
  {
    order: 6,
    name: 'Nabi Ibrahim AS',
    arabicName: 'إِبْرَاهِيم',
    epithet: 'Khalilullah (Kekasih Allah) & Abul Anbiya (Bapak Para Nabi) - Ulul Azmi',
    periodAndPlace: '± 1997 - 1822 SM, Babilonia (Irak), Syam, Mesir, dan Makkah',
    targetPeople: 'Raja Namrud dan kaum penyembah berhala serta bintang-bintang',
    isUlulAzmi: true,
    quranMentionCount: 69,
    quranVerse: 'Q.S. Al-Baqarah: 124-132, Q.S. Maryam: 41-50, Q.S. Al-Anbiya: 51-73',
    miracles: [
      'Tidak hangus terbakar ketika dilemparkan ke dalam kobaran api raksasa Raja Namrud (api menjadi dingin dan menyelamatkan)',
      'Menghidupkan kembali empat ekor burung yang telah dipotong-potong atas izin Allah',
      'Mengeluarkan mata air zamzam untuk istrinya Hajar dan putranya Ismail',
      'Membangun Ka\'bah Baitullah bersama Nabi Ismail AS'
    ],
    storySummary: 'Nabi Ibrahim AS menggunakan akal kritisnya menolak penyembahan berhala, matahari, dan bulan. Beliau berani menghancurkan berhala-berhala kaumnya dan mendebat kesombongan Raja Namrud. Beliau diuji dengan perintah menyembelih putra tercintanya, Ismail, dan dengan ketundukan penuh Allah menggantikannya dengan seekor domba besar (menjadi syariat Iduladha).',
    moralLessons: [
      'Ketauhidan yang murni dan keberanian menegakkan kebenaran',
      'Pola asuh dialogis penuh cinta antara orang tua dan anak',
      'Totalitas pengorbanan dan keikhlasan demi keridhaan Allah SWT'
    ]
  },
  {
    order: 7,
    name: 'Nabi Luth AS',
    arabicName: 'لُوط',
    epithet: 'Pembela Kesucian Moral',
    periodAndPlace: '± 1950 SM, wilayah Sodom dan Gomorah (Laut Mati, Yordania)',
    targetPeople: 'Penduduk negeri Sodom pelaku penyimpangan seksual',
    isUlulAzmi: false,
    quranMentionCount: 27,
    quranVerse: 'Q.S. Al-A\'raf: 80-84 & Q.S. Hud: 77-83',
    miracles: [
      'Diselamatkan oleh Allah dan malaikat di malam hari sebelum kehancuran kota',
      'Malaikat utusan Allah membutakan mata orang-orang fasik yang menyerang rumahnya'
    ],
    storySummary: 'Nabi Luth AS (keponakan Nabi Ibrahim) diutus membimbing kaum Sodom yang melakukan perbuatan keji yang belum pernah dilakukan umat terdahulu. Nabi Luth berdakwah agar mereka kembali ke fitrah suci pernikahan yang halal. Ketika mereka membangkang, Allah menjungkirbalikkan negeri tersebut dan menghujaninya dengan batu belerang panas.',
    moralLessons: [
      'Menjaga kesucian fitrah diri, pergaulan, dan moralitas seksual',
      'Berani menolak tren lingkungan yang merusak nilai-nilai agama',
      'Pentingnya menjaga keharmonisan rumah tangga yang bertakwa'
    ]
  },
  {
    order: 8,
    name: 'Nabi Ismail AS',
    arabicName: 'إِسْمَاعِيل',
    epithet: 'Adz-Dzabih (Orang yang Rela Dikorbankan) & Shadiqul Wa\'di',
    periodAndPlace: '± 1914 - 1777 SM, wilayah Lembah Bakkah (Makkah al-Mukarramah)',
    targetPeople: 'Kabilah Jurhum dan penduduk Jazirah Arab',
    isUlulAzmi: false,
    quranMentionCount: 12,
    quranVerse: 'Q.S. Ash-Shaffat: 101-107 & Q.S. Maryam: 54-55',
    miracles: [
      'Memancarkan mata air Zamzam dari hentakan kakinya saat bayi di padang pasir',
      'Selamat tanpa luka ketika hendak disembelih karena diganti domba surga',
      'Bersama ayahnya membangun fondasi Ka\'bah'
    ],
    storySummary: 'Nabi Ismail AS adalah teladan kepatuhan seorang anak kepada Allah dan orang tua. Ketika ayahnya menyampaikan mimpi perintah Allah untuk menyembelihnya, beliau menjawab tenang: "Wahai ayahku, kerjakanlah apa yang diperintahkan kepadamu; insya Allah engkau akan mendapatiku termasuk orang-orang yang sabar." Dari keturunan Ismail inilah lahir Nabi Muhammad SAW.',
    moralLessons: [
      'Kepatuhan dan bakti luar biasa kepada orang tua',
      'Selalu menepati janji dan amanah dalam pergaulan',
      'Kesabaran menghadapi ujian hidup'
    ]
  },
  {
    order: 9,
    name: 'Nabi Ishaq AS',
    arabicName: 'إِسْحَاق',
    epithet: 'Nabi yang Shaleh Pembawa Berkah',
    periodAndPlace: '± 1897 - 1717 SM, wilayah Kana\'an (Palestina)',
    targetPeople: 'Masyarakat Kana\'an dan Syam',
    isUlulAzmi: false,
    quranMentionCount: 17,
    quranVerse: 'Q.S. Al-Anbiya: 72-73 & Q.S. Maryam: 49',
    miracles: [
      'Kelahirannya dikabarkan langsung oleh malaikat saat ibunya (Sarah) sudah lanjut usia',
      'Diberkahi keturunan para nabi besar Bani Israil (Ya\'qub dan Yusuf)'
    ],
    storySummary: 'Nabi Ishaq AS adalah putra kedua Nabi Ibrahim AS dari Sayyidah Sarah. Beliau dikenal sebagai nabi yang sangat alim, ramah, dan menjadi panutan dalam mendirikan salat serta menunaikan zakat. Beliau mewariskan dakwah tauhid di wilayah Palestina.',
    moralLessons: [
      'Ketaatan mendirikan salat dan gemar menunaikan sedekah',
      'Menjaga kerukunan persaudaraan antarsesama',
      'Menjadi pribadi teladan yang membawa kesejukan bagi keluarga'
    ]
  },
  {
    order: 10,
    name: 'Nabi Ya\'qub AS',
    arabicName: 'يَعْقُوب',
    epithet: 'Israil (Hamba Pilihan Allah)',
    periodAndPlace: '± 1837 - 1690 SM, wilayah Palestina dan Mesir',
    targetPeople: 'Bani Israil (12 suku keturunan anak-anaknya)',
    isUlulAzmi: false,
    quranMentionCount: 16,
    quranVerse: 'Q.S. Yusuf: 1-101 & Q.S. Al-Baqarah: 132-133',
    miracles: [
      'Penglihatannya yang sempat buta karena menangis pulih kembali setelah mengusapkan gamis putranya Yusuf',
      'Mendapat firasat kenabian yang sangat tajam'
    ],
    storySummary: 'Nabi Ya\'qub AS memiliki 12 putra. Beliau sangat menyayangi Yusuf dan Benyamin, yang memicu kecemburuan saudara-saudaranya. Ketika Yusuf dibuang ke sumur, Nabi Ya\'qub bersabar dengan kesabaran yang indah (shabrun jamil). Di akhir hayatnya, beliau mengumpulkan semua anaknya dan berwasiat: "Apa yang akan kamu sembah setelah aku wafat? Mereka menjawab: Kami menyembah Tuhanmu dan Tuhan nenek moyangmu, Allah Yang Maha Esa."',
    moralLessons: [
      'Kesabaran yang indah (shabrun jamil) saat ditimpa musibah kehilangan',
      'Tidak membeda-bedakan kasih sayang antaranak dalam keluarga',
      'Mewariskan akidah tauhid sebagai warisan paling berharga kepada anak'
    ]
  },
  {
    order: 11,
    name: 'Nabi Yusuf AS',
    arabicName: 'يُوسُف',
    epithet: 'Ash-Shiddiq (Orang yang Sangat Jujur dan Menjaga Kehormatan)',
    periodAndPlace: '± 1745 - 1635 SM, wilayah Palestina dan Mesir',
    targetPeople: 'Penduduk Mesir dan keluarga besar Bani Israil',
    isUlulAzmi: false,
    quranMentionCount: 27,
    quranVerse: 'Satu surat penuh Q.S. Yusuf (Ayat 1-111)',
    miracles: [
      'Dikaruniai ketampanan luar biasa (separuh ketampanan manusia dunia)',
      'Kemampuan menakwilkan (menafsirkan) mimpi secara akurat atas wahyu Allah',
      'Membebaskan Mesir dari bencana kelaparan 7 tahun dengan manajemen pangan brilian'
    ],
    storySummary: 'Kisah Nabi Yusuf dijuluki Al-Qur\'an sebagai "Ahsanul Qashash" (Kisah Terbaik). Dibuang oleh saudaranya ke dalam sumur, dijual sebagai budak di Mesir, difitnah oleh istri pembesar (Zulaikha), lalu dipenjara selama bertahun-tahun. Karena kejujuran dan kemampuannya menafsirkan mimpi raja tentang 7 sapi gemuk dan 7 sapi kurus, beliau diangkat menjadi menteri logistik pangan Mesir dan memaafkan semua saudaranya tanpa rasa dendam.',
    moralLessons: [
      'Menjaga kehormatan diri dan rasa malu dari godaan maksiat',
      'Integritas dan manajemen kepemimpinan yang amanah serta profesional',
      'Memaafkan orang yang pernah menyakiti kita dengan tulus'
    ]
  },
  {
    order: 12,
    name: 'Nabi Ayyub AS',
    arabicName: 'أَيُّوب',
    epithet: 'Teladan Kesabaran Tanpa Batas',
    periodAndPlace: '± 1630 - 1540 SM, wilayah Hauran (perbatasan Suriah - Yordania)',
    targetPeople: 'Penduduk negeri Hauran',
    isUlulAzmi: false,
    quranMentionCount: 4,
    quranVerse: 'Q.S. Al-Anbiya: 83-84 & Q.S. Shad: 41-44',
    miracles: [
      'Menghentakkan kaki ke tanah lalu memancarlah air sejuk yang menyembuhkan penyakit kulitnya yang diderita selama belasan tahun',
      'Dipulihkan kembali kekayaan, anak-anak, dan kesehatannya berlipat ganda'
    ],
    storySummary: 'Nabi Ayyub AS adalah orang kaya raya yang sangat dermawan. Allah mengujinya dengan mencabut seluruh hartanya, wafatnya semua putra-putrinya, dan penyakit parah di tubuhnya selama bertahun-tahun hingga dijauhi masyarakat kecuali istrinya yang setia (Rahmah). Nabi Ayyub tidak pernah mengeluh apalagi mencela Allah, melainkan terus berzikir dan memohon kesembuhan dengan doa penuh adab.',
    moralLessons: [
      'Sabar luar biasa ketika diuji sakit atau kekurangan materi',
      'Tidak berburuk sangka kepada Allah saat doa belum terkabul',
      'Kesetiaan dalam mendampingi keluarga di masa-masa sulit'
    ]
  },
  {
    order: 13,
    name: 'Nabi Syu\'aib AS',
    arabicName: 'شُعَيْب',
    epithet: 'Khatibul Anbiya (Juru Bicara Para Nabi)',
    periodAndPlace: '± 1600 SM, wilayah Madyan dan Ashabul Aikah (Yordania barat)',
    targetPeople: 'Kaum Madyan pelaku kecurangan timbangan dagang',
    isUlulAzmi: false,
    quranMentionCount: 11,
    quranVerse: 'Q.S. Al-A\'raf: 85-93 & Q.S. Hud: 84-95',
    miracles: [
      'Selamat dari bencana gempa dahsyat dan awan hitam menyambar yang membinasakan kaum Madyan',
      'Dikaruniai kefasihan tutur kata dan argumentasi dakwah yang sangat memikat'
    ],
    storySummary: 'Nabi Syu\'aib AS diutus kepada penduduk Madyan yang menyembah pohon besar (Aikah) dan memiliki kebiasaan buruk mengurangi timbangan serta menipu dalam berniaga. Beliau memperingatkan bahwa kejujuran adalah kunci keberkahan rezeki. Karena mereka menolak dan mengancam mengusir Nabi Syu\'aib, azab berupa hawa panas dan gempa membinasakan mereka.',
    moralLessons: [
      'Kejujuran dalam timbangan, takaran, dan bisnis perdagangan',
      'Menolak praktik korupsi, pungli, dan penipuan konsumen',
      'Menyampaikan kritik sosial dengan tutur kata yang santun dan logis'
    ]
  },
  {
    order: 14,
    name: 'Nabi Musa AS',
    arabicName: 'مُوسَى',
    epithet: 'Kalimullah (Orang yang Berbicara Langsung dengan Allah) - Ulul Azmi',
    periodAndPlace: '± 1527 - 1407 SM, wilayah Mesir dan Semenanjung Sinai',
    targetPeople: 'Firaun (Ramses II) dan kaum Bani Israil',
    isUlulAzmi: true,
    quranMentionCount: 136, // Nama nabi paling banyak disebut dalam Al-Qur'an
    quranVerse: 'Q.S. Al-Qashash, Q.S. Thaha, Q.S. Al-A\'raf, Q.S. Asy-Syu\'ara',
    miracles: [
      'Tongkat yang berubah menjadi ular besar dan membelah Laut Merah',
      'Tangannya bercahaya putih kemilau tanpa cacat',
      'Menerima Kitab Taurat di Bukit Tursina (Sinai)',
      'Memancarkan 12 mata air dari batu untuk 12 suku Bani Israil'
    ],
    storySummary: 'Nabi Musa AS dihanyutkan di Sungai Nil saat bayi dan dirawat di istana Firaun. Diangkat menjadi rasul di Bukit Sinai dan diperintahkan mendakwahi Firaun yang mengaku tuhan. Bersama saudaranya Harun, beliau menuntut pembebasan Bani Israil dari perbudakan. Ketika dikejar pasukan berkuda Firaun hingga ke Laut Merah, Musa memukulkan tongkatnya hingga laut terbelah. Musa dan pengikutnya selamat menyeberang, sementara Firaun tenggelam.',
    moralLessons: [
      'Keberanian membela kaum tertindas dan melawan tirani kezhaliman',
      'Ketaatan mutlak kepada perintah Allah dalam situasi paling genting',
      'Kesabaran membimbing umat yang mudah mengeluh dan keras kepala'
    ]
  },
  {
    order: 15,
    name: 'Nabi Harun AS',
    arabicName: 'هَارُون',
    epithet: 'Pendamping Setia Kalimullah',
    periodAndPlace: '± 1530 - 1408 SM, wilayah Mesir dan Gurun Sinai',
    targetPeople: 'Firaun dan Bani Israil',
    isUlulAzmi: false,
    quranMentionCount: 20,
    quranVerse: 'Q.S. Thaha: 29-36 & Q.S. Maryam: 51-53',
    miracles: [
      'Diberi kefasihan lidah dan kepiawaian berdiplomasi luar biasa',
      'Diangkat menjadi nabi berkat doa Nabi Musa AS'
    ],
    storySummary: 'Nabi Harun AS adalah kakak kandung Nabi Musa AS. Ketika Musa memohon kepada Allah agar diberi pendamping yang fasih lisannya untuk mendebat Firaun, Allah mengabulkan dan mengangkat Harun menjadi nabi. Harun bertugas menjaga Bani Israil saat Musa bermunajat di Bukit Tursina.',
    moralLessons: [
      'Sinergi kerja tim dan saling mendukung antarsaudara dalam kebaikan',
      'Kemampuan komunikasi diplomatis yang persuasif dan damai',
      'Menjaga persatuan umat agar tidak terpecah-belah'
    ]
  },
  {
    order: 16,
    name: 'Nabi Zulkifli AS',
    arabicName: 'ذُو الكِفْل',
    epithet: 'Orang yang Sanggup Menepati Janji dan Amanah',
    periodAndPlace: '± 1500 - 1425 SM, wilayah Damaskus (Suriah)',
    targetPeople: 'Masyarakat Rom dan Syam',
    isUlulAzmi: false,
    quranMentionCount: 2,
    quranVerse: 'Q.S. Al-Anbiya: 85-86 & Q.S. Shad: 48',
    miracles: [
      'Mampu berpuasa di siang hari, salat malam penuh, dan memimpin keadilan tanpa pernah marah'
    ],
    storySummary: 'Nama aslinya adalah Basyar. Dinamai Zulkifli (yang menyanggupi amanah) karena ia menyanggupi syarat dari raja terdahulu untuk menjadi penerus tahta: berpuasa di siang hari, beribadah di malam hari, dan mengadili perkara rakyat dengan adil tanpa pernah terpancing amarah. Beliau menepati seluruh janji tersebut dengan sempurna.',
    moralLessons: [
      'Disiplin tinggi dan komitmen memegang janji yang telah diucapkan',
      'Mengendalikan emosi amarah saat menghadapi keluhan orang lain',
      'Keseimbangan antara ibadah ritual dan pelayanan sosial'
    ]
  },
  {
    order: 17,
    name: 'Nabi Daud AS',
    arabicName: 'دَاوُد',
    epithet: 'Raja yang Bijaksana dan Bersuara Merdu',
    periodAndPlace: '± 1010 - 970 SM, wilayah Yerusalem (Palestina)',
    targetPeople: 'Bani Israil',
    isUlulAzmi: false,
    quranMentionCount: 16,
    quranVerse: 'Q.S. Shad: 17-26 & Q.S. Saba: 10-11',
    miracles: [
      'Dikaruniai Kitab Zabur yang dibaca dengan suara sangat merdu hingga gunung dan burung ikut bertasbih bersamanya',
      'Diberi mukjizat melunakkan besi dengan tangan kosong tanpa api untuk membuat baju zirah perang',
      'Mengalahkan raksasa Jalut bersenjatakan ketapel saat masih muda belia'
    ],
    storySummary: 'Nabi Daud AS mengawali perjuangannya sebagai prajurit muda dalam tentara Thalut yang berhasil mengalahkan raksasa Jalut. Beliau kemudian diangkat menjadi raja Bani Israil yang adil dan perkasa. Beliau membagi hari-harinya: sehari berpuasa dan sehari berbuka (Puasa Daud), serta mencari nafkah dari hasil keringat tangannya sendiri.',
    moralLessons: [
      'Etos kerja mandiri dan tidak berpangku tangan pada orang lain',
      'Keberanian pemuda menghadapi tantangan besar dengan bersandar pada Allah',
      'Membiasakan puasa sunnah dan gemar melantunkan tasbih puji-pujian'
    ]
  },
  {
    order: 18,
    name: 'Nabi Sulaiman AS',
    arabicName: 'سُلَيْمَان',
    epithet: 'Raja Terkaya dan Paling Bijaksana Sepanjang Zaman',
    periodAndPlace: '± 970 - 931 SM, wilayah Yerusalem (Palestina) & Yaman',
    targetPeople: 'Bani Israil dan Ratu Balqis (Kerajaan Saba\')',
    isUlulAzmi: false,
    quranMentionCount: 17,
    quranVerse: 'Q.S. An-Naml: 15-44 & Q.S. Saba: 12-14',
    miracles: [
      'Diberi kemampuan memahami bahasa binatang (semut, burung hud-hud, kuda)',
      'Dapat menundukkan dan memerintah bangsa jin serta angin untuk transportasinya',
      'Memiliki istana lantai kaca di atas air yang memukau Ratu Balqis hingga masuk Islam'
    ],
    storySummary: 'Nabi Sulaiman AS mewarisi tahta ayahnya, Daud AS. Meskipun diberi kekuasaan dan kekayaan terbesar yang tidak akan pernah dimiliki manusia setelahnya, beliau tidak pernah sombong. Ketika mendengar semut berpesan kepada kawanannya agar tidak terinjak tentaranya, Sulaiman tersenyum dan berdoa bersyukur kepada Allah atas nikmat-Nya.',
    moralLessons: [
      'Rendah hati dan tidak sombong meski memiliki harta atau jabatan tinggi',
      'Menghargai makhluk sekecil apa pun di alam semesta',
      'Menggunakan teknologi dan fasilitas untuk menyebarkan dakwah tauhid'
    ]
  },
  {
    order: 19,
    name: 'Nabi Ilyas AS',
    arabicName: 'إِلْيَاس',
    epithet: 'Pemberantas Penyembahan Berhala Ba\'al',
    periodAndPlace: '± 875 - 849 SM, wilayah Ba\'labak (Lebanon / Suriah)',
    targetPeople: 'Bani Israil penyembah patung berhala emas Ba\'al',
    isUlulAzmi: false,
    quranMentionCount: 2,
    quranVerse: 'Q.S. Ash-Shaffat: 123-132 & Q.S. Al-An\'am: 85',
    miracles: [
      'Doanya dikabulkan untuk menahan hujan selama 3 tahun saat kaumnya membangkang dan menurunkan hujan kembali saat mereka bertaubat'
    ],
    storySummary: 'Nabi Ilyas AS berdakwah di kota Ba\'labak, mengingatkan kaumnya yang menyembah berhala patung emas bernama Ba\'al. Beliau berpesan: "Pantaskah kalian menyembah Ba\'al dan meninggalkan sebaik-baik Pencipta?". Beliau sabar berdakwah meskipun diancam hendak dibunuh oleh raja zhalim.',
    moralLessons: [
      'Keteguhan mempertahankan akidah murni di tengah maraknya kemusyrikan',
      'Tidak tergiur dengan gemerlap materi yang menyesatkan akal sehat',
      'Istiqamah dalam amar ma\'ruf nahi munkar'
    ]
  },
  {
    order: 20,
    name: 'Nabi Ilyasa AS',
    arabicName: 'إِلْيَسَع',
    epithet: 'Penerus Dakwah yang Tangguh',
    periodAndPlace: '± 850 - 785 SM, wilayah Palestina dan Damaskus',
    targetPeople: 'Bani Israil setelah wafatnya Nabi Ilyas',
    isUlulAzmi: false,
    quranMentionCount: 2,
    quranVerse: 'Q.S. Al-An\'am: 86 & Q.S. Shad: 48',
    miracles: [
      'Menyembuhkan berbagai penyakit masyarakat dan menghidupkan kembali orang mati atas izin Allah SWT'
    ],
    storySummary: 'Nabi Ilyasa AS adalah murid dan anak angkat Nabi Ilyas AS yang sejak muda setia menemani perjuangan dakwahnya. Setelah Ilyas wafat, Ilyasa melanjutkan estafet kepemimpinan membimbing Bani Israil dengan kitab Taurat sehingga negerinya makmur dan tenteram.',
    moralLessons: [
      'Menghormati guru dan siap menjadi penerus estafet perjuangan kebaikan',
      'Konsistensi memimpin masyarakat dengan hukum yang adil',
      'Belajar tekun sejak masa muda agar siap memikul tanggung jawab besar'
    ]
  },
  {
    order: 21,
    name: 'Nabi Yunus AS',
    arabicName: 'يُونُس',
    epithet: 'Dzan-Nun (Orang yang Memiliki Ikan Paus) & Shahibul Hut',
    periodAndPlace: '± 820 - 750 SM, kota Ninawa (Mosul, Irak)',
    targetPeople: 'Penduduk kota Ninawa',
    isUlulAzmi: false,
    quranMentionCount: 4,
    quranVerse: 'Q.S. Yunus: 98, Q.S. Al-Anbiya: 87-88, Q.S. Ash-Shaffat: 139-148',
    miracles: [
      'Tetap hidup selamat di dalam perut ikan paus raksasa dalam kegelapan lautan',
      'Tumbuhnya pohon labu (yaqthin) di pantai yang melindunginya setelah dimuntahkan ikan'
    ],
    storySummary: 'Nabi Yunus AS sempat putus asa melihat kaum Ninawa yang keras kepala, lalu pergi naik kapal ke laut. Ketika kapal oleng diterjang badai, diadakan undian muatan dan nama Yunus keluar untuk melompat ke laut. Seekor ikan paus menelannya. Di dalam tiga kegelapan (kegelapan malam, kegelapan laut, kegelapan perut ikan), beliau bertasbih: "La ilaha illa Anta subhanaka inni kuntu minazh-zhalimin". Allah menyelamatkannya dan seluruh kaum Ninawa akhirnya beriman.',
    moralLessons: [
      'Jangan pernah berputus asa dalam menghadapi kesulitan belajar',
      'Keutamaan membaca doa Nabi Yunus saat dirundung masalah berat',
      'Menyadari kelemahan diri dan selalu bersandar pada ampunan Allah'
    ]
  },
  {
    order: 22,
    name: 'Nabi Zakaria AS',
    arabicName: 'زَكَرِيَّا',
    epithet: 'Hamba yang Khusyuk Berdoa dan Pengasuh Maryam',
    periodAndPlace: '± 100 SM - 20 M, wilayah Yerusalem (Baitul Maqdis)',
    targetPeople: 'Bani Israil',
    isUlulAzmi: false,
    quranMentionCount: 7,
    quranVerse: 'Q.S. Ali \'Imran: 37-41 & Q.S. Maryam: 1-15',
    miracles: [
      'Diberi keturunan seorang putra (Nabi Yahya AS) saat usianya sudah sangat renta dan istrinya mandul',
      'Tanda tidak bisa berbicara selama 3 hari kecuali dengan isyarat sebagai bukti kebesaran Allah'
    ],
    storySummary: 'Nabi Zakaria AS adalah imam Baitul Maqdis yang mengasuh Sayyidah Maryam (ibunda Nabi Isa). Beliau tak pernah bosan berdoa dengan suara lembut memohon penerus dakwah: "Rabbi hab li min ladunka dzurriyyatan thayyibah...". Allah mengabulkan doanya dengan memberi kabar gembira kelahiran Nabi Yahya AS.',
    moralLessons: [
      'Kekuatan doa: tidak ada yang mustahil bagi Allah jika Dia menghendaki',
      'Tulus merawat dan mendidik anak-anak yatim dan generasi muda',
      'Berdoa dengan adab suara lembut dan penuh keikhlasan'
    ]
  },
  {
    order: 23,
    name: 'Nabi Yahya AS',
    arabicName: 'يَحْيَى',
    epithet: 'Pemuda yang Diberi Hikmah Sejak Usia Dini',
    periodAndPlace: '± 1 SM - 31 M, wilayah Palestina dan Yordania',
    targetPeople: 'Bani Israil dan Raja Herodes',
    isUlulAzmi: false,
    quranMentionCount: 5,
    quranVerse: 'Q.S. Maryam: 12-15 & Q.S. Ali \'Imran: 39',
    miracles: [
      'Dianugerahi pemahaman ilmu agama dan hikmah yang mendalam sejak masa kanak-kanak',
      'Memiliki rasa kasih sayang luar biasa terhadap hewan liar di padang pasir'
    ],
    storySummary: 'Nabi Yahya AS adalah putra Nabi Zakaria AS. Sejak kecil beliau gemar belajar Taurat dan hidup sederhana di padang pasir. Beliau berani mengoreksi dan melarang pernikahan sedarah Raja Herodes yang melanggar syariat, hingga beliau gugur sebagai syahid dalam menegakkan kebenaran.',
    moralLessons: [
      'Memanfaatkan masa muda untuk menguasai ilmu pengetahuan dan agama',
      'Keberanian menyuarakan kebenaran di hadapan penguasa zhalim',
      'Gaya hidup sederhana (zuhud) dan tidak tergiur kemewahan dunia'
    ]
  },
  {
    order: 24,
    name: 'Nabi Isa AS',
    arabicName: 'عِيسَى',
    epithet: 'Al-Masih, Ruhullah, dan Kalimatullah - Ulul Azmi',
    periodAndPlace: '± 1 M - 33 M, wilayah Nazaret dan Yerusalem (Palestina)',
    targetPeople: 'Bani Israil',
    isUlulAzmi: true,
    quranMentionCount: 25,
    quranVerse: 'Q.S. Ali \'Imran: 45-59, Q.S. Maryam: 16-36, Q.S. Al-Maidah: 110-120',
    miracles: [
      'Dilahirkan tanpa ayah dari rahim perawan suci Maryam',
      'Mampu berbicara membela kesucian ibunya saat masih bayi dalam buaian',
      'Menghidupkan orang mati dan menyembuhkan orang buta serta lepra atas izin Allah',
      'Membentuk burung dari tanah liat lalu meniupnya hingga hidup menjadi burung sungguhan',
      'Menerima Kitab Injil dan menurunkan hidangan makanan dari langit (Al-Ma\'idah)',
      'Diangkat hidup-hidup ke langit oleh Allah dan diselamatkan dari upaya penyaliban'
    ],
    storySummary: 'Nabi Isa AS diutus meluruskan penyimpangan moral dan fikih kaku Bani Israil dengan membawa ajaran kasih sayang dan Kitab Injil. Beliau juga mengabarkan kedatangan nabi penutup setelahnya bernama "Ahmad" (Muhammad SAW). Ketika orang-orang Yahudi bersekongkol membunuhnya, Allah menyerupakan wajah pengkhianat (Yudas) dengannya dan mengangkat Nabi Isa ke langit.',
    moralLessons: [
      'Budi pekerti lemah lembut, kasih sayang, dan toleransi sosial',
      'Ketaatan mutlak berbakti kepada ibu yang melahirkan kita',
      'Meyakini mukjizat sebagai bukti mutlak kemahakuasaan Allah SWT'
    ]
  },
  {
    order: 25,
    name: 'Nabi Muhammad SAW',
    arabicName: 'مُحَمَّد',
    epithet: 'Khatamun Nabiyyin (Penutup Para Nabi), Sayyidul Mursalin, Rahmatan lil \'Alamin - Ulul Azmi',
    periodAndPlace: '571 - 632 M (53 tahun di Makkah, 10 tahun di Madinah)',
    targetPeople: 'Seluruh umat manusia dan alam semesta hingga akhir zaman',
    isUlulAzmi: true,
    quranMentionCount: 4,
    quranVerse: 'Q.S. Al-Ahzab: 21 & 40, Q.S. Al-Anbiya: 107, Q.S. Al-Fath: 29',
    miracles: [
      'Mukjizat terbesar sepanjang masa: Kitab Suci Al-Qur\'an yang terjaga keasliannya',
      'Peristiwa Isra\' Mi\'raj menembus Sidratul Muntaha menerima perintah salat 5 waktu dalam satu malam',
      'Membelah bulan menjadi dua bagian ketika ditantang kaum Quraisy',
      'Memancarkan air bersih dari sela-sela jari jemarinya untuk wudu dan minum ribuan pasukan sahabat di Hudaibiyah',
      'Makanan sedikit mencukupi ratusan orang dalam perang Khandaq'
    ],
    storySummary: 'Nabi Muhammad SAW lahir yatim di Makkah pada Tahun Gajah. Sejak muda dijuluki "Al-Amin" (Orang Terpercaya). Menerima wahyu pertama di Gua Hira pada usia 40 tahun. Berdakwah dengan penuh kesabaran menghadapi boikot, siksaan, dan ancaman pembunuhan kaum Quraisy. Hijrah ke Madinah, mendirikan negara berperadaban madani, dan menaklukkan Makkah (Fathu Makkah) tanpa pertumpahan darah dengan memaafkan musuh-musuhnya. Beliau wafat setelah menyempurnakan syariat Islam.',
    moralLessons: [
      'Uswatun hasanah (teladan sempurna) dalam setiap dimensi kehidupan manusia',
      'Kejujuran integritas yang diakui kawan maupun lawan',
      'Sifat pemaaf yang luar biasa, tidak mendendam, dan menyebarkan kasih sayang kepada semesta'
    ]
  }
];
