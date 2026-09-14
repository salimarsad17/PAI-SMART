export interface DalilAsmaulHusna {
  surahName: string;
  surahNumber: number;
  verseNumber: number;
  arabic: string;
  latin: string;
  translationKemenag: string;
  tafsirWajiz: string;
  audioUrl?: string;
}

export interface AsmaulHusnaItem {
  id: string;
  arabic: string;
  latin: string;
  translation: string;
  orderNumber: number;
  maknaMendalam: string;
  dalilUtama: DalilAsmaulHusna;
  dalilTambahan?: DalilAsmaulHusna[];
  perbedaanDenganMakhluk: {
    sifatAllah: string;
    sifatMakhluk: string;
  };
  hikmahKehidupan: string[];
  contohPerilaku: {
    sekolah: string[];
    rumah: string[];
    pergaulan: string[];
    digital: string[];
  };
}

export interface SkenarioKuisAsmaulHusna {
  id: string;
  skenario: string;
  pilihan: {
    id: string;
    teks: string;
    asmaTarget: string;
  }[];
  jawabanBenar: string;
  penjelasan: string;
}

export const MATERI_KELAS_VII_SEM_1_BAB_2 = {
  babNumber: 2,
  grade: 'Kelas VII',
  semester: 'Semester 1',
  temaKurikulum: 'Meneladani Nama dan Sifat Indah Allah Swt. (Asmaul Husna)',
  cpElement: 'Akidah',
  pengantar:
    'Materi Bab 2 PAI & Budi Pekerti Kelas VII membahas akidah fundamental umat Islam: memahami hakikat iman kepada Allah Swt., mengenal kemuliaan Asmaul Husna (nama-nama indah Allah), mendalami empat Asmaul Husna esensial (Al-\'Alīm, As-Samī\', Al-Baṣīr, dan Al-Khabīr), serta mewujudkan nilai-nilainya ke dalam perilaku nyata sehari-hari di rumah, sekolah, pergaulan, dan dunia digital.',

  // =========================================================================
  // SUB-BAB 1: HAKIKAT IMAN KEPADA ALLAH SWT
  // =========================================================================
  subBab1_PengertianIman: {
    judul: '1. Pengertian Iman kepada Allah Swt.',
    pengertianBahasa: {
      asalKata: 'آمَنَ - يُؤْمِنُ - إِيْمَانًا (Āmana - Yu’minu - Īmānan)',
      arti: 'Percaya, meyakini, merasa aman, tenteram, dan membenarkan (At-Taṣdīq).',
      penjelasan:
        'Secara etimologi (bahasa), iman bermakna ketenangan hati dan pembenaran yang teguh terhadap suatu kebenaran tanpa disertai keraguan.'
    },
    pengertianIstilah: {
      lafalArab: 'تَصْدِيْقٌ بِالْقَلْبِ، وَإِقْرَارٌ بِاللِّسَانِ، وَعَمَلٌ بِالْأَرْكَانِ',
      transliterasi: 'Taṣdīqun bil-qalbi, wa iqrārun bil-lisāni, wa ‘amalun bil-arkāni',
      arti: 'Membenarkan dengan keyakinan hati, mengucapkan dengan ikrar lisan, dan membuktikannya dengan amal perbuatan anggota badan.',
      penjelasan:
        'Iman kepada Allah Swt. bukanlah sekadar pengakuan di lisan atau wacana pemikiran, melainkan keyakinan bulat yang berakar di lubuk sanubari, dinyatakan melalui dua kalimat syahadat, dan terbukti nyata dalam ketaatan menjalankan perintah-Nya serta menjauhi larangan-Nya.'
    },
    kedudukanIman:
      'Iman kepada Allah Swt. adalah rukun iman pertama dan pondasi dari seluruh rukun iman yang lain. Keimanan kepada malaikat, kitab-kitab suci, para nabi dan rasul, hari kiamat, serta qada dan qadar hanya akan bermakna jika seseorang telah beriman secara kokoh kepada Allah Swt.',
    tigaDimensiTauhid: [
      {
        nama: 'Tauhid Rubūbiyyah',
        arti: 'Mengesakan Allah dalam Penciptaan & Pengaturan',
        penjelasan:
          'Meyakini dengan sepenuh jiwa bahwa Allah Swt. adalah satu-satunya Pencipta (Al-Khāliq), Pemelihara, Pemberi Rezeki (Ar-Rāziq), dan Pengatur seluruh alam semesta. Tidak ada sekutu bagi-Nya dalam mengelola tata surya, pergantian siang-malam, dan detak kehidupan makhluk.',
        dalilSingkat: 'Q.S. Al-Fātiḥah: 2 (Al-ḥamdu lillāhi rabbil-‘ālamīn)'
      },
      {
        nama: 'Tauhid Ulūhiyyah',
        arti: 'Mengesakan Allah dalam Peribadatan',
        penjelasan:
          'Menjadikan Allah Swt. sebagai satu-satunya Dzat yang berhak disembah dan diibadahi. Seluruh salat, doa, nazar, tawakal, takut, dan harap hanya ditujukan kepada Allah tanpa mempersekutukan-Nya (syirik) dengan makhluk apa pun.',
        dalilSingkat: 'Q.S. Adz-Dzāriyāt: 56 (Wa mā khalaqtul-jinna wal-insa illā liya‘budūn)'
      },
      {
        nama: 'Tauhid Asmā’ wa Sifāt',
        arti: 'Mengesakan Allah dalam Nama & Sifat Mulia-Nya',
        penjelasan:
          'Mengimani seluruh nama-nama agung (Asmaul Husna) dan sifat-sifat kesempurnaan yang Allah tetapkan bagi diri-Nya di dalam Al-Qur\'an dan sabda Rasul-Nya, tanpa menyerupakan-Nya dengan makhluk (tasybīh), menolak maknanya (ta‘ṭīl), maupun mereka-reka bentuk hakikat-Nya (takyīf).',
        dalilSingkat: 'Q.S. Asy-Syūrā: 11 (Laisa kamitslihī syai\'un wahuwas-samī‘ul-baṣīr)'
      }
    ],
    dalilNaqliUtama: [
      {
        surahName: 'Q.S. An-Nisā’',
        surahNumber: 4,
        verseNumber: 136,
        arabic:
          'يٰٓاَيُّهَا الَّذِيْنَ اٰمَنُوْٓا اٰمِنُوْا بِاللّٰهِ وَرَسُوْلِهٖ وَالْكِتٰبِ الَّذِيْ نَزَّلَ عَلٰى رَسُوْلِهٖ وَالْكِتٰبِ الَّذِيْٓ اَنْزَلَ مِنْ قَبْلُ ۗوَمَنْ يَّكْفُرْ بِاللّٰهِ وَمَلٰۤىِٕكَتِهٖ وَكُتُبِهٖ وَرُسُلِهٖ وَالْيَوْمِ الْاٰخِرِ فَقَدْ ضَلَّ ضَلٰلًاۢ بَعِيْدًا',
        latin:
          'Yā ayyuhallażīna āmanū āminū billāhi wa rasūlihī wal-kitābillażī nazzala ‘alā rasūlihī wal-kitābillażī anzala min qabl(u), wa may yakfur billāhi wa malā\'ikatihī wa kutubihī wa rusulihī wal-yaumil-ākhiri faqad ḍalla ḍalālam ba‘īdā(n).',
        translationKemenag:
          'Wahai orang-orang yang beriman! Tetaplah beriman kepada Allah dan Rasul-Nya (Muhammad) dan kepada Kitab (Al-Qur\'an) yang diturunkan kepada Rasul-Nya, serta kitab yang diturunkan sebelumnya. Barangsiapa ingkar kepada Allah, malaikat-malaikat-Nya, kitab-kitab-Nya, rasul-rasul-Nya, dan hari kemudian, maka sungguh, orang itu telah tersesat sangat jauh.',
        tafsirWajiz:
          'Ayat ini menegaskan perintah kepada kaum mukminin untuk terus memperbaharui dan mengokohkan keimanan mereka kepada Allah Swt., bukan sekadar iman formalitas. Pengingkaran terhadap salah satu rukun iman merupakan kesesatan yang nyata.'
      },
      {
        surahName: 'Q.S. Al-Ikhlāṣ',
        surahNumber: 112,
        verseNumber: 1,
        arabic: 'قُلْ هُوَ اللّٰهُ اَحَدٌۚ ۝١ اَللّٰهُ الصَّمَدُۚ ۝٢ لَمْ يَلِدْ وَلَمْ يُوْلَدْۙ ۝٣ وَلَمْ يَكُنْ لَّهٗ كُفُوًا اَحَدٌ ۝٤',
        latin:
          'Qul huwallāhu aḥad(un). Allāhuṣ-ṣamad(u). Lam yalid wa lam yūlad. Wa lam yakul lahū kufuwan aḥad(un).',
        translationKemenag:
          'Katakanlah (Muhammad), "Dialah Allah, Yang Maha Esa. Allah tempat meminta segala sesuatu. (Allah) tidak beranak dan tidak pula diperanakkan, dan tidak ada sesuatu pun yang setara dengan Dia."',
        tafsirWajiz:
          'Surat Al-Ikhlas merupakan intisari akidah tauhid murni yang membedakan keimanan umat Islam dari segala bentuk kesyirikan, penyembahan berhala, dan doktrin penyerupaan Tuhan dengan makhluk.'
      }
    ],
    dalilAqli: [
      {
        judul: 'Keteraturan dan Keharmonisan Kosmos (Burhānun-Niẓām)',
        isi: 'Perputaran miliaran galaksi, pergantian waktu siang dan malam yang presisi, serta jarak matahari ke bumi yang tepat membuktikan adanya Perancang Maha Cerdas dan Berkuasa mutlak. Mustahil keteraturan yang sedemikian sempurna lahir secara kebetulan tanpa ada Sang Pencipta.'
      },
      {
        judul: 'Keajaiban Desain Manusia (Burhānul-Khalq)',
        isi: 'Susunan organ tubuh manusia, sistem peredaran darah, retina mata, hingga kode genetik DNA yang sangat rumit menunjukkan bukti tak terbantahkan atas kekuasaan Allah Swt. Sebagaimana firman-Nya: "Dan pada dirimu sendiri, apakah kamu tidak memperhatikan?" (Q.S. Adz-Dzāriyāt: 21).'
      },
      {
        judul: 'Hukum Sebab-Akibat (Kausalitas)',
        isi: 'Setiap lukisan pasti ada pelukisnya, setiap gedung bertingkat pasti ada arsiteknya. Alam semesta yang ada di hadapan kita adalah sebuah ciptaan (makhluk), maka secara nalar akal sehat pasti ada Sang Pencipta Yang Maha Esa lagi Maha Kuasa (Khāliq).'
      }
    ]
  },

  // =========================================================================
  // SUB-BAB 2: PENGERTIAN DAN KEUTAMAAN ASMAUL HUSNA
  // =========================================================================
  subBab2_PengertianAsmaulHusna: {
    judul: '2. Pengertian Asmaul Husna',
    bahasa: {
      alAsma: 'Al-Asmā’ (الأَسْمَاء): Jamak dari ism (اسم), artinya "nama-nama" atau "sebutan-sebutan".',
      alHusna: 'Al-Ḥusnā (الْحُسْنَى): Bentuk feminin (mu\'annats) dari al-aḥsan (الأَحْسَن), artinya "yang terbaik", "paling indah", "maha agung", atau "maha sempurna".',
      kesimpulanBahasa:
        'Secara bahasa, Asmaul Husna berarti "nama-nama Allah Swt. yang terbaik, paling indah, dan maha agung".'
    },
    istilah: {
      definisi:
        'Secara istilah syariat, Asmaul Husna adalah nama-nama agung dan sifat-sifat mulia milik Allah Swt. yang mencerminkan kesempurnaan Dzat, sifat, dan perbuatan-Nya, yang telah Dia wahyukan di dalam Al-Qur\'an dan melalui lisan Rasulullah SAW, suci dari segala kekurangan dan keterbatasan.',
      penjelasanTambahan:
        'Nama-nama Allah Swt. bukan sekadar label atau sebutan kosong, melainkan nama yang mengandung sifat kesempurnaan mutlak (tauqīfiyyah, yakni bersumber dari wahyu dan tidak boleh direkayasa manusia).'
    },
    jumlahDanHadits: {
      jumlahMasyhur: 99,
      haditsLafalArab: 'إِنَّ لِلَّهِ تِسْعَةً وَتِسْعِينَ اسْمًا، مِائَةً إِلَّا وَاحِدًا، مَنْ أَحْصَاهَا دَخَلَ الْجَنَّةَ',
      haditsTransliterasi:
        'Inna lillāhi tis‘atan wa tis‘īna isman, mi’atan illā wāḥidan, man aḥṣāhā dakhalal-jannah.',
      haditsArti:
        'Sesungguhnya Allah mempunyai sembilan puluh sembilan nama, seratus kurang satu; barangsiapa yang aḥṣāhā (menghafal, memahami maknanya, dan mengamalkan tuntunannya), niscaya ia masuk surga.',
      perawi: 'H.R. Bukhari (No. 2736) dan H.R. Muslim (No. 2677) dari sahabat Abu Hurairah r.a.',
      maknaAhsaha: [
        'Hifdzuhu (حِفْظُهُ): Menghafal lafal-lafal Asmaul Husna beserta artinya.',
        'Fahmu Ma\'anihi (فَهْمُ مَعَانِيْهِ): Memahami secara mendalam hakikat keagungan sifat yang terkandung di dalamnya.',
        'Ad-Du\'a bihi (الدُّعَاءُ بِهِ): Menjadikannya wasilah doa dan permohonan kepada Allah.',
        'Al-\'Amalu bi Muqtadahu (الْعَمَلُ بِمُقْتَضَاهُ): Meneladani sifat-sifat luhur tersebut sesuai kapasitas manusia dalam kehidupan sehari-hari (misal: menebar kasih sayang, menuntut ilmu, bersikap adil dan jujur).'
      ]
    },
    dalilAlQuranUtama: [
      {
        surahName: 'Q.S. Al-A‘rāf',
        surahNumber: 7,
        verseNumber: 180,
        arabic:
          'وَلِلّٰهِ الْاَسْمَاۤءُ الْحُسْنٰى فَادْعُوْهُ بِهَاۖ وَذَرُوا الَّذِيْنَ يُلْحِدُوْنَ فِيْٓ اَسْمَاۤىِٕهٖۗ سَيُجْزَوْنَ مَا كَانُوْا يَعْمَلُوْنَ',
        latin:
          'Wa lillāhil-asmā\'ul-ḥusnā fad‘ūhu bihā, wa żarul-lażīna yulḥidūna fī asmā\'ih(ī), sayujzauna mā kānū ya‘malūn(a).',
        translationKemenag:
          'Dan Allah memiliki Asmaulhusna (nama-nama yang terbaik), maka bermohonlah kepada-Nya dengan menyebutnya dan tinggalkanlah orang-orang yang menyalahartikan nama-nama-Nya. Mereka kelak akan mendapat balasan terhadap apa yang telah mereka kerjakan.',
        tafsirWajiz:
          'Ayat ini memerintahkan umat beriman untuk berdoa dan beribadah dengan menyebut nama-nama Allah yang agung, serta melarang ilḥād (menyimpangkan makna Asmaul Husna atau menyematkannya pada berhala).'
      },
      {
        surahName: 'Q.S. Ṭāhā',
        surahNumber: 20,
        verseNumber: 8,
        arabic: 'اَللّٰهُ لَآ اِلٰهَ اِلَّا هُوَۗ لَهُ الْاَسْمَاۤءُ الْحُسْنٰى',
        latin: 'Allāhu lā ilāha illā huw(a), lahul-asmā\'ul-ḥusnā.',
        translationKemenag:
          'Dialah Allah, tidak ada tuhan selain Dia, yang mempunyai nama-nama yang terbaik.',
        tafsirWajiz:
          'Penegasan mutlak bahwa hanya Allah Swt. yang berhak disembah dan hanya bagi-Nya nama-nama yang maha agung dan sempurna.'
      },
      {
        surahName: 'Q.S. Al-Ḥasyr',
        surahNumber: 59,
        verseNumber: 24,
        arabic:
          'هُوَ اللّٰهُ الْخَالِقُ الْبَارِئُ الْمُصَوِّرُ لَهُ الْاَسْمَاۤءُ الْحُسْنٰىۗ يُسَبِّحُ لَهٗ مَا فِى السَّمٰوٰتِ وَالْاَرْضِۚ وَهُوَ الْعَزِيْزُ الْحَكِيْمُ',
        latin:
          'Huwallāhul-khāliqul-bāri\'ul-muṣawwiru lahul-asmā\'ul-ḥusnā, yusabbiḥu lahū mā fis-samāwāti wal-arḍ(i), wa huwal-‘azīzul-ḥakīm(u).',
        translationKemenag:
          'Dialah Allah Yang Menciptakan, Yang Mengadakan, Yang Membentuk Rupa, Dia memiliki nama-nama yang paling indah. Apa yang di langit dan di bumi bertasbih kepada-Nya. Dan Dialah Yang Mahaperkasa, Mahabijaksana.',
        tafsirWajiz:
          'Menggambarkan bahwa seluruh makhluk di langit dan di bumi senantiasa menyucikan Allah Swt. yang memiliki sifat-sifat keindahan dan kesempurnaan.'
      }
    ],
    keutamaanMempelajari: [
      'Mengenal Allah Swt. secara benar (Ma‘rifatullāh) sebagai puncak kebahagiaan hati seorang mukmin.',
      'Sebab doa diijabah oleh Allah karena bertawasul dengan nama-nama yang paling dicintai-Nya.',
      'Menanamkan rasa cinta (Mahabbah), harap (Raja\'), dan takut (Khauf) yang seimbang.',
      'Menjadi benteng diri dari perbuatan maksiat karena selalu menyadari pengawasan dan keagungan Allah.',
      'Membentuk akhlak mulia (Akhlaqul Karimah) yang mencerminkan profil pelajar beriman dan bertakwa.'
    ]
  },

  // =========================================================================
  // SUB-BAB 3: MAKNA 4 ASMAUL HUSNA UTAMA
  // =========================================================================
  subBab3_EmpatAsmaulHusna: [
    {
      id: 'al-alim',
      arabic: 'اَلْعَلِيْمُ',
      latin: 'Al-\'Alīm',
      translation: 'Maha Mengetahui',
      orderNumber: 1,
      maknaMendalam:
        'Al-\'Alīm bermakna bahwa pengetahuan Allah Swt. maha luas, maha sempurna, dan tidak terbatas oleh dimensi ruang, waktu, maupun bentuk materi. Allah mengetahui segala sesuatu yang telah terjadi di masa lalu, yang sedang berlangsung saat ini, yang akan terjadi di masa depan, bahkan hal-hal yang tidak terjadi bagaimana andai hal itu terjadi. Pengetahuan Allah mencakup perkara yang nyata (syahādah) maupun yang tersembunyi/gaib (ghaib), yang besar di angkasa luar hingga yang mikroskopis di dasar bumi. Ilmu Allah berdiri sendiri (qadīm), tidak didahului oleh kebodohan, dan tidak pernah diakhiri oleh kelupaan.',
      dalilUtama: {
        surahName: 'Q.S. Al-Baqarah',
        surahNumber: 2,
        verseNumber: 29,
        arabic: 'هُوَ الَّذِيْ خَلَقَ لَكُمْ مَّا فِى الْاَرْضِ جَمِيْعًا ثُمَّ اسْتَوٰىٓ اِلَى السَّمَاۤءِ فَسَوّٰىهُنَّ سَبْعَ سَمٰوٰتٍۗ وَهُوَ بِكُلِّ شَيْءٍ عَلِيْمٌ',
        latin:
          'Huwal-lażī khalaqa lakum mā fil-arḍi jamī‘an tsümmastawā ilas-samā\'i fasawwāhunna sab‘a samāwāt(in), wa huwa bikulli syai\'in ‘alīm(un).',
        translationKemenag:
          'Dialah (Allah) yang menciptakan segala apa yang ada di bumi untukmu kemudian Dia menuju ke langit, lalu Dia menyempurnakannya menjadi tujuh langit. Dan Dia Maha Mengetahui segala sesuatu.',
        tafsirWajiz:
          'Penutup ayat ini menegaskan bahwa penciptaan alam semesta yang maha luas ini berada dalam pengetahuan mutlak Allah yang mencakup segala hal sekecil apa pun.'
      },
      dalilTambahan: [
        {
          surahName: 'Q.S. Al-An‘ām',
          surahNumber: 6,
          verseNumber: 59,
          arabic:
            'وَعِنْدَهٗ مَفَاتِحُ الْغَيْبِ لَا يَعْلَمُهَآ اِلَّا هُوَۗ وَيَعْلَمُ مَا فِى الْبَرِّ وَالْبَحْرِۗ وَمَا تَسْقُطُ مِنْ وَّرَقَةٍ اِلَّا يَعْلَمُهَا وَلَا حَبَّةٍ فِيْ ظُلُمٰتِ الْاَرْضِ وَلَا رَطْبٍ وَّلَا يَابِسٍ اِلَّا فِيْ كِتٰبٍ مُّبِيْنٍ',
          latin:
            'Wa ‘indahū mafātiḥul-ghaibi lā ya‘lamuhā illā huw(a), wa ya‘lamu mā fil-barri wal-baḥr(i), wa mā tasquṭu miw waraqatin illā ya‘lamuhā wa lā ḥabbatin fī ẓulumātil-arḍi wa lā raṭbiw wa lā yābisin illā fī kitābim mubīn(in).',
          translationKemenag:
            'Dan kunci-kunci semua yang gaib ada pada-Nya; tidak ada yang mengetahui selain Dia. Dia mengetahui apa yang ada di darat dan di laut. Tidak ada sehelai daun pun yang gugur yang tidak diketahui-Nya. Tidak ada sebutir biji pun dalam kegelapan bumi dan tidak pula sesuatu yang basah atau yang kering, melainkan (tertulis) dalam Kitab yang nyata (Lauh Mahfuzh).',
          tafsirWajiz:
            'Menggambarkan betapa detail dan tak terbatasnya pengetahuan Allah Swt.; sehelai daun di hutan rimba yang jatuh di malam gelap gulita pun tidak luput dari catatan ilmu-Nya.'
        }
      ],
      perbedaanDenganMakhluk: {
        sifatAllah:
          'Ilmu Allah mutlak, sempurna, abadi, tidak terbatas, tidak membutuhkan sarana indra atau proses belajar, serta meliputi perkara lahir dan gaib.',
        sifatMakhluk:
          'Ilmu manusia sangat sedikit dan terbatas ("Dan tidaklah kamu diberi pengetahuan melainkan sedikit" - Q.S. Al-Isrā\': 85), diperoleh lewat belajar, dipengaruhi oleh alat bantu, serta sering lupa dan keliru.'
      },
      hikmahKehidupan: [
        'Menyadarkan manusia bahwa kepandaian yang dimilikinya hanyalah setitik anugerah Allah yang tidak patut disombongkan.',
        'Mendorong semangat literasi, riset, dan haus akan ilmu pengetahuan yang bermanfaat bagi kemanusiaan.',
        'Menumbuhkan rasa rendah hati (tawādhu‘) saat bergaul dan berdiskusi dengan orang lain.',
        'Menyadari bahwa segala rahasia yang disembunyikan manusia pasti diketahui oleh Allah Swt.'
      ],
      contohPerilaku: {
        sekolah: [
          'Rajin belajar, membaca buku pelajaran, dan tekun menyimak guru di kelas demi menggapai ilmu yang barakah.',
          'Tidak bersikap sombong atau meremehkan teman yang mendapat nilai lebih rendah dalam ulangan.',
          'Suka mengajarkan dan membantu teman dalam diskusi kelompok tanpa pamrih atau pelit ilmu.',
          'Selalu berdoa sebelum belajar memohon tambahan ilmu: "Rabbi zidnī ‘ilmā warzuqnī fahmā".'
        ],
        rumah: [
          'Menghargai nasihat orang tua yang kaya akan pengalaman hidup dan hikmah.',
          'Mengisi waktu luang dengan membaca buku-buku agama, sains, dan keterampilan daripada bermain game berlebihan.',
          'Mengakui kesalahan dengan jujur di hadapan orang tua saat melakukan kekeliruan, tidak berdusta.'
        ],
        pergaulan: [
          'Berbicara santun berdasarkan fakta dan ilmu, bukan prasangka atau gosip tak berdasar.',
          'Menghargai pendapat orang lain yang berbeda dan bersikap terbuka terhadap kritik yang membangun.',
          'Mengingatkan teman yang berbuat salah secara bijak dan berilmu, bukan dengan mempermalukannya.'
        ],
        digital: [
          'Memanfaatkan gawai/internet untuk mencari artikel edukasi, materi PAI, dan tutorial kebaikan.',
          'Tidak mudah percaya dan menyebarkan berita yang belum jelas sumber kebenarannya (anti-hoaks).',
          'Menggunakan media sosial untuk berbagi quotes hikmah, motivasi belajar, dan dakwah kebaikan.'
        ]
      }
    },

    {
      id: 'as-sami',
      arabic: 'اَلسَّمِيْعُ',
      latin: 'As-Samī‘',
      translation: 'Maha Mendengar',
      orderNumber: 2,
      maknaMendalam:
        'As-Samī‘ bermakna bahwa pendengaran Allah Swt. menjangkau seluruh jenis suara di alam semesta tanpa terhalang oleh jarak, volume, dinding pembatas, maupun kebisingan. Allah mendengar suara yang keras membahana, bisikan teramat lembut, jeritan hati orang teraniaya di kesunyian malam, hingga desah napas semut kecil. Pendengaran Allah tidak membutuhkan daun telinga, gendang pendengaran, ataupun gelombang fisik sebagaimana makhluk. Allah mendengar doa dan permohonan miliaran hamba-Nya yang berseru secara bersamaan dalam berbagai bahasa tanpa pernah tertukar atau keliru sedikit pun.',
      dalilUtama: {
        surahName: 'Q.S. Al-Baqarah',
        surahNumber: 2,
        verseNumber: 256,
        arabic: 'لَآ اِكْرَاهَ فِى الدِّيْنِۗ قَدْ تَّبَيَّنَ الرُّشْدُ مِنَ الْغَيِّۚ فَمَنْ يَّكْفُرْ بِالطَّاغُوْتِ وَيُؤْمِنْۢ بِاللّٰهِ فَقَدِ اسْتَمْسَكَ بِالْعُرْوَةِ الْوُثْقٰى لَا انْفِصَامَ لَهَاۗ وَاللّٰهُ سَمِيْعٌ عَلِيْمٌ',
        latin:
          'Lā ikrāha fid-dīn(i), qat tabayyanar-rusydu minal-gayy(i), famay yakfur biṭ-ṭāgūti wa yu\'mim billāhi faqadistamsaka bil-‘urwatil-wusqā lanfiṣāma lahā, wallāhu samī‘un ‘alīm(un).',
        translationKemenag:
          'Tidak ada paksaan dalam (menganut) agama (Islam); sungguh, telah jelas jalan yang benar dari jalan yang sesat. Barangsiapa ingkar kepada Thaghut dan beriman kepada Allah, maka sungguh, dia telah berpegang (teguh) pada tali yang sangat kuat yang tidak akan putus. Dan Allah Maha Mendengar, Maha Mengetahui.',
        tafsirWajiz:
          'Allah Maha Mendengar setiap ucapan ikrar keimanan, pengaduan hamba-Nya, serta doa yang dipanjatkan oleh orang-orang yang berpegang teguh pada tali agama Islam.'
      },
      dalilTambahan: [
        {
          surahName: 'Q.S. Asy-Syūrā',
          surahNumber: 42,
          verseNumber: 11,
          arabic: 'فَاطِرُ السَّمٰوٰتِ وَالْاَرْضِۗ جَعَلَ لَكُمْ مِّنْ اَنْفُسِكُمْ اَزْوَاجًا وَّمِنَ الْاَنْعَامِ اَزْوَاجًا يَّذْرَؤُكُمْ فِيْهِۗ لَيْسَ كَمِثْلِهٖ شَيْءٌ ۚوَهُوَ السَّمِيْعُ الْبَصِيْرُ',
          latin:
            'Fāṭirus-samāwāti wal-arḍ(i), ja‘ala lakum min anfusikum azwājaw wa minal-an‘āmi azwājā(n), yażra\'ukum fīh(i), laisa kamitslihī syai\'(un), wa huwas-samī‘ul-baṣīr(u).',
          translationKemenag:
            '(Allah) Pencipta langit dan bumi. Dia menjadikan bagi kamu dari jenis kamu sendiri pasangan-pasangan dan dari jenis binatang ternak pasangan-pasangan (pula), dijadikan-Nya kamu berkembang biak dengan jalan itu. Tidak ada sesuatu pun yang serupa dengan Dia. Dan Dia Yang Maha Mendengar, Maha Melihat.',
          tafsirWajiz:
            'Menegaskan prinsip tauhid mutlak: pendengaran Allah sama sekali tidak serupa dengan pendengaran makhluk yang terbatas.'
        },
        {
          surahName: 'Q.S. Al-Mujādilah',
          surahNumber: 58,
          verseNumber: 1,
          arabic: 'قَدْ سَمِعَ اللّٰهُ قَوْلَ الَّتِيْ تُجَادِلُكَ فِيْ زَوْجِهَا وَتَشْتَكِيْٓ اِلَى اللّٰهِ ۖوَاللّٰهُ يَسْمَعُ تَحَاوُرَكُمَاۗ اِنَّ اللّٰهَ سَمِيْعٌۢ بَصِيْرٌ',
          latin:
            'Qad sami‘allāhu qaulallatī tujādiluka fī zaujihā wa tasytakī ilallāh(i), wallāhu yasma‘u taḥāwurakumā, innallāha samī‘um baṣīr(un).',
          translationKemenag:
            'Sungguh, Allah telah mendengar ucapan perempuan yang mengajukan gugatan kepadamu (Muhammad) tentang suaminya dan mengadukan (halnya) kepada Allah, dan Allah mendengar percakapan antara kamu berdua. Sesungguhnya Allah Maha Mendengar, Maha Melihat.',
          tafsirWajiz:
            'Aisyah r.a. meriwayatkan betapa kagumnya ia pada pendengaran Allah yang mendengar keluhan Khaulah binti Tsa\'labah di balik tirai rumah, padahal Aisyah yang berada di sudut rumah yang sama hampir tidak mendengarnya.'
        }
      ],
      perbedaanDenganMakhluk: {
        sifatAllah:
          'Pendengaran Allah sempurna tanpa batas, tanpa daun telinga/alat fisik, tidak terdistraksi kebisingan, dan mampu mendengar seluruh makhluk sekaligus.',
        sifatMakhluk:
          'Pendengaran manusia hanya mampu menangkap frekuensi terbatas (20 Hz - 20.000 Hz), terhalang dinding, mudah pekak oleh kebisingan, dan tidak bisa mendengarkan banyak orang bicara sekaligus.'
      },
      hikmahKehidupan: [
        'Mendorong manusia untuk selalu menjaga lisan dari ucapan yang mendatangkan murka Allah.',
        'Membiasakan diri menjadi pendengar yang santun dan menghargai orang lain yang sedang berbicara.',
        'Memberikan ketenangan jiwa bahwa setiap rintihan doa, istighfar, dan permohonan pasti didengar oleh Allah.',
        'Menumbuhkan rasa takut untuk membicarakan keburukan orang lain (ghibah) atau memfitnah.'
      ],
      contohPerilaku: {
        sekolah: [
          'Menjaga tutur kata agar selalu sopan kepada bapak/ibu guru dan rekan-rekan sebaya di sekolah.',
          'Menyimak penjelasan pelajaran di kelas dengan saksama tanpa mengobrol sendiri saat guru menerangkan.',
          'Tidak berbicara kotor, melontarkan kata-kata kasar, mengejek (bullying), atau memanggil teman dengan julukan buruk.',
          'Mendengarkan aspirasi dan keluhan teman dalam kerja kelompok secara adil dan demokratis.'
        ],
        rumah: [
          'Mendengarkan nasihat ayah dan ibu dengan patuh, tidak membantah dengan perkataan "ah" atau nada tinggi.',
          'Menjawab panggilan orang tua dengan segera dan suara yang lembut serta penuh takzim.',
          'Membiasakan membaca dan memperdengarkan tilawah Al-Qur\'an di dalam rumah untuk menciptakan ketenangan sakinah.'
        ],
        pergaulan: [
          'Menghindari perkumpulan yang di dalamnya terdapat ghibah (menggunjing orang lain), adu domba (namimah), atau sumpah palsu.',
          'Berbicara jujur dan hanya mengucapkan perkataan yang baik atau memilih diam (fal-yaqul khairan au liyasmut).',
          'Menjadi pendengar yang baik (active listener) saat sahabat membutuhkan teman bercerita atas masalahnya.'
        ],
        digital: [
          'Tidak mendengarkan musik atau podcast yang mengandung lirik kotor, pornografi, atau ajakan maksiat.',
          'Tidak mengirimkan voice note (pesan suara) yang berisi ancaman, kata-kata kasar, atau fitnah di grup WhatsApp.',
          'Mendengarkan murottal Al-Qur\'an dan ceramah agama yang mencerahkan hati melalui aplikasi streaming.'
        ]
      }
    },

    {
      id: 'al-basir',
      arabic: 'اَلْبَصِيْرُ',
      latin: 'Al-Baṣīr',
      translation: 'Maha Melihat',
      orderNumber: 3,
      maknaMendalam:
        'Al-Baṣīr bermakna bahwa penglihatan Allah Swt. menembus seluruh dimensi fisik dan metafisik tanpa ada yang tersembunyi. Penglihatan Allah meliputi segala sesuatu yang berwujud nyata maupun abstrak, yang bergerak di kedalaman samudra paling gelap, di lapisan inti bumi, maupun di ruang hampa udara. Allah melihat perbuatan manusia baik di saat ia berada di tengah kerumunan banyak orang maupun saat ia sendirian di balik pintu kamar yang terkunci rapat. Penglihatan Allah tidak memerlukan mata indrawi, lensa mata, pantulan cahaya, ataupun alat optik. Pengawasan Allah (Murāqabah) berlangsung abadi setiap detik tanpa pernah lelah atau mengantuk.',
      dalilUtama: {
        surahName: 'Q.S. Al-Ḥujurāt',
        surahNumber: 49,
        verseNumber: 18,
        arabic: 'اِنَّ اللّٰهَ يَعْلَمُ غَيْبَ السَّمٰوٰتِ وَالْاَرْضِۗ وَاللّٰهُ بَصِيْرٌۢ بِمَا تَعْمَلُوْنَ',
        latin: 'Innallāha ya‘lamu gaibas-samāwāti wal-arḍ(i), wallāhu baṣīrum bimā ta‘malūn(a).',
        translationKemenag:
          'Sungguh, Allah mengetahui apa yang gaib di langit dan di bumi. Dan Allah Maha Melihat apa yang kamu kerjakan.',
        tafsirWajiz:
          'Ayat ini menutup surat Al-Hujurat dengan peringatan bahwa seluruh amal perbuatan hamba berada di bawah pengawasan penglihatan Allah yang sempurna dan akan dibalas seadil-adilnya.'
      },
      dalilTambahan: [
        {
          surahName: 'Q.S. Al-Mulk',
          surahNumber: 67,
          verseNumber: 19,
          arabic: 'اَوَلَمْ يَرَوْا اِلَى الطَّيْرِ فَوْقَهُمْ صٰۤفّٰتٍ وَّيَقْبِضْنَۘ مَا يُمْسِكُهُنَّ اِلَّا الرَّحْمٰنُۗ اِنَّهٗ بِكُلِّ شَيْءٍ بَصِيْرٌ',
          latin:
            'Awa lam yarau ilaṭ-ṭairi fauqahum ṣāffātiw wa yaqbiḍn(a), mā yumsikuhunna illar-raḥmān(u), innahū bikulli syai\'im baṣīr(un).',
          translationKemenag:
            'Tidakkah mereka memperhatikan burung-burung yang mengembangkan dan mengatupkan sayapnya di atas mereka? Tidak ada yang menahannya (di udara) selain Yang Maha Pengasih. Sungguh, Dia Maha Melihat segala sesuatu.',
          tafsirWajiz:
            'Bukti penglihatan dan pengawasan Allah yang menjaga keseimbangan burung-burung terbang di angkasa dan seluruh ekosistem alam raya.'
        },
        {
          surahName: 'Q.S. Al-Isrā’',
          surahNumber: 17,
          verseNumber: 30,
          arabic: 'اِنَّ رَبَّكَ يَبْسُطُ الرِّزْقَ لِمَنْ يَّشَاۤءُ وَيَقْدِرُۗ اِنَّهٗ كَانَ بِعِبَادِهٖ خَبِيْرًاۢ بَصِيْرًا',
          latin: 'Inna rabbaka yabsuṭur-rizqa limay yasyā\'u wa yaqdir(u), innahū kāna bi‘ibādihī khabīram baṣīrā(n).',
          translationKemenag:
            'Sungguh, Tuhanmu melapangkan rezeki bagi siapa yang Dia kehendaki dan membatasi (bagi siapa yang Dia kehendaki); sungguh, Dia Maha Mengetahui, Maha Melihat hamba-hamba-Nya.',
          tafsirWajiz:
            'Allah Maha Melihat kondisi batiniah dan kesiapan spiritual hamba-Nya dalam memikul amanah rezeki.'
        }
      ],
      perbedaanDenganMakhluk: {
        sifatAllah:
          'Penglihatan Allah menjangkau hal gaib dan kasat mata secara bersamaan, tanpa membutuhkan cahaya, ruang, kornea/lensa, dan tidak pernah terhalang oleh apa pun.',
        sifatMakhluk:
          'Penglihatan manusia sangat sempit, membutuhkan pantulan cahaya, terhalang oleh tembok tipis atau kabut, dan tidak mampu melihat partikel kecil tanpa mikroskop.'
      },
      hikmahKehidupan: [
        'Membangun sifat Murāqabah (selalu merasa diawasi oleh Allah Swt.) dalam setiap helaan napas.',
        'Membentuk integritas moral yang kokoh: tetap berbuat baik dan jujur meskipun tidak ada manusia yang melihat.',
        'Menjaga kesucian pandangan mata (Ghadhdhul Baṣar) dari hal-hal yang diharamkan syariat.',
        'Memberikan motivasi untuk senantiasa beramal ihsan (beribadah seolah-olah melihat Allah, atau yakin Allah melihat kita).'
      ],
      contohPerilaku: {
        sekolah: [
          'Bersikap jujur saat mengerjakan ujian/ulangan sekolah, tidak menyontek atau membuka contekan meski pengawas lengah.',
          'Membuang sampah pada tempatnya dan menjaga fasilitas kelas tetap bersih walau tidak sedang giliran piket.',
          'Tidak mengambil barang milik orang lain (pensil, uang, buku) yang tertinggal di atas meja kelas.',
          'Tetap rajin belajar di perpustakaan secara tertib tanpa harus diawasi ketat oleh guru piket.'
        ],
        rumah: [
          'Melaksanakan salat fardu tepat waktu di rumah walau tidak ada orang tua yang menyuruh atau mengingatkan.',
          'Membantu merapikan tempat tidur dan pekerjaan rumah tangga secara ikhlas tanpa mengharap pujian.',
          'Tidak menyelinap makan atau minum saat sedang menjalankan ibadah puasa di kala sendirian di kamar.'
        ],
        pergaulan: [
          'Menjaga pandangan mata dari melihat hal-hal yang tidak pantas atau aib sesama teman.',
          'Tidak mengintip rahasia pribadi orang lain atau melanggar hak privasi teman.',
          'Menunjukkan perilaku yang sama: bersikap ramah dan santun baik di depan maupun di belakang teman.'
        ],
        digital: [
          'Menjaga pandangan mata saat berselancar di internet: segera menutup tab jika muncul iklan atau gambar tidak senonoh.',
          'Tidak mengakses situs terlarang, pornografi, judi online, atau konten kekerasan saat memegang ponsel sendirian.',
          'Menggunakan kamera gawai untuk merekam hal-hal bermanfaat dan kegiatan ilmiah yang positif.'
        ]
      }
    },

    {
      id: 'al-khabir',
      arabic: 'اَلْخَبِيْرُ',
      latin: 'Al-Khabīr',
      translation: 'Maha Teliti / Maha Mengetahui Rahasia Tersembunyi',
      orderNumber: 4,
      maknaMendalam:
        'Al-Khabīr bermakna bahwa Allah Swt. Maha Mengetahui segala perkara yang tersembunyi, sangat samar, detail, dan rahasia hingga ke relung terdalam (khabīrun bi bawāṭinil-umūr). Jika Al-\'Alīm menunjukkan pengetahuan Allah yang menyeluruh terhadap fakta umum dan lahiriah, maka Al-Khabīr menekankan pengetahuan Allah yang teramat detail, presisi, mendalam, dan menembus hakikat batiniah. Allah mengetahui bisikan niat di lubuk kalbu manusia yang bahkan belum sempat terucap, motif sejati di balik amal ibadah (apakah ikhlas, riya\', atau mencari popularitas), serta rahasia seluk-beluk seluruh ciptaan-Nya.',
      dalilUtama: {
        surahName: 'Q.S. Al-Mulk',
        surahNumber: 67,
        verseNumber: 14,
        arabic: 'اَلَا يَعْلَمُ مَنْ خَلَقَۗ وَهُوَ اللَّطِيْفُ الْخَبِيْرُ',
        latin: 'Alā ya‘lamu man khalaq(a), wa huwal-laṭīful-khabīr(u).',
        translationKemenag:
          'Apakah (pantas) Allah yang menciptakan itu tidak mengetahui? Dan Dia Maha Halus, Maha Mengetahui.',
        tafsirWajiz:
          'Pertanyaan retoris yang membungkam keraguan: Dzat yang telah menciptakan seluruh wujud tentu mengetahui setiap partikel dan rahasia terdalam dari ciptaan-Nya secara sangat teliti.'
      },
      dalilTambahan: [
        {
          surahName: 'Q.S. Luqmān',
          surahNumber: 31,
          verseNumber: 16,
          arabic:
            'يٰبُنَيَّ اِنَّهَآ اِنْ تَكُ مِثْقَالَ حَبَّةٍ مِّنْ خَرْدَلٍ فَتَكُنْ فِيْ صَخْرَةٍ اَوْ فِى السَّمٰوٰتِ اَوْ فِى الْاَرْضِ يَأْتِ بِهَا اللّٰهُ ۗاِنَّ اللّٰهَ لَطِيْفٌ خَبِيْرٌ',
          latin:
            'Yā bunayya innahā in taku miṡqāla ḥabbatim min khardalin fatakun fī ṣakhratin au fis-samāwāti au fil-arḍi ya\'ti bihallāh(u), innallāha laṭīfun khabīr(un).',
          translationKemenag:
            '(Luqman berkata), "Wahai anakku! Sungguh, jika ada (suatu perbuatan) seberat biji sawi, dan berada dalam batu atau di langit atau di bumi, niscaya Allah akan memberinya (balasan). Sesungguhnya Allah Mahahalus, Mahateliti."',
          tafsirWajiz:
            'Nasihat agung Luqman kepada putranya tentang ketelitian pengawasan Allah terhadap amal perbuatan sekecil apa pun, tak ada yang luput dari pengadilan-Nya.'
        },
        {
          surahName: 'Q.S. Al-An‘ām',
          surahNumber: 6,
          verseNumber: 18,
          arabic: 'وَهُوَ الْقَاهِرُ فَوْقَ عِبَادِهٖۗ وَهُوَ الْحَكِيْمُ الْخَبِيْرُ',
          latin: 'Wa huwal-qāhiru fauqa ‘ibādih(ī), wa huwal-ḥakīmul-khabīr(u).',
          translationKemenag:
            'Dan Dialah yang berkuasa atas hamba-hamba-Nya. Dan Dia Mahabijaksana, Mahateliti.',
          tafsirWajiz:
            'Kekuasaan mutlak Allah diimbangi dengan hikmah kebijaksanaan dan ketelitian pengetahuan-Nya atas kemaslahatan hamba-Nya.'
        }
      ],
      perbedaanDenganMakhluk: {
        sifatAllah:
          'Ketelitian Allah sempurna tanpa cacat, mengetahui motif batin terdalam, rahasia di balik rahasia, serta hikmah takdir masa depan.',
        sifatMakhluk:
          'Ketelitian manusia hanya sebatas pengamatan indrawi atau instrumen buatan, rentan salah hitung, mudah terkecoh oleh kepalsuan lahiriah, dan tidak tahu isi hati orang lain.'
      },
      hikmahKehidupan: [
        'Senantiasa memurnikan niat (Ikhlas) dalam setiap ibadah dan amal kebajikan dari kotoran riya\' dan sum‘ah.',
        'Membiasakan hidup cermat, waspada, dan teliti dalam menyelesaikan berbagai tugas serta tanggung jawab.',
        'Mendorong sikap tabayyun (klarifikasi) dan kehati-hatian dalam menerima serta menyebarkan berita.',
        'Selalu berintrospeksi diri (Muhasabah) atas kekurangan batin sendiri sebelum menilai orang lain.'
      ],
      contohPerilaku: {
        sekolah: [
          'Teliti dan cermat saat mengerjakan soal matematika, sains, dan bahasa, serta memeriksa kembali jawaban sebelum dikumpulkan.',
          'Merapikan buku-buku pelajaran, alat tulis, dan perlengkapan sekolah dengan cermat agar tidak tercecer.',
          'Ikhlas membersihkan kelas atau piket sekolah karena Allah, bukan karena ingin dipuji oleh wali kelas atau teman.',
          'Cermat menyimak instruksi tugas praktikum agar tidak terjadi kekeliruan atau kecelakaan di laboratorium.'
        ],
        rumah: [
          'Teliti mematikan kran air, kompor, dan saklar listrik sebelum meninggalkan rumah demi menjaga keselamatan bersama.',
          'Menyimpan uang tabungan dan barang berharga di tempat aman dengan perhitungan yang rapi.',
          'Membersihkan sudut-sudut kamar yang tersembunyi dari debu dan kotoran dengan cermat.'
        ],
        pergaulan: [
          'Mawas diri dan berhati-hati dalam bertindak agar tidak menyakiti perasaan teman secara tidak sengaja.',
          'Menerapkan prinsip Tabayyun (menyelidiki fakta) ketika mendengar gosip miring tentang sahabat.',
          'Tidak mudah berprasangka buruk (su\'udzan) kepada orang lain karena hanya Allah yang tahu isi hati manusia.'
        ],
        digital: [
          'Memeriksa keaslian sumber berita dan fakta sebelum membagikan (share) tautan di media sosial (Saring sebelum Sharing).',
          'Teliti menjaga keamanan akun pribadi: tidak memberikan kode OTP, password, atau data sensitif kepada siapa pun.',
          'Bijak dalam meninggalkan jejak digital: menulis status yang jujur, bertanggung jawab, dan bebas dari fitnah.'
        ]
      }
    }
  ],

  // =========================================================================
  // SUB-BAB 4: RANGKUMAN MATRIKS PERILAKU MENELADANI ASMAUL HUSNA
  // =========================================================================
  matriksPerilakuKarakter: [
    {
      asma: 'Al-\'Alīm (Maha Mengetahui)',
      karakterKunci: 'Rendah Hati, Gemar Menuntut Ilmu, & Cinta Literasi',
      aksiNyata: [
        'Tekun belajar setiap hari dan pantang menyerah mencari ilmu baru',
        'Tidak sombong saat mendapat peringkat kelas atau juara lomba',
        'Gemar berbagi pengetahuan dan mengajarkan teman yang kesulitan'
      ],
      pantangan: 'Sombong (\'ujub), malas belajar, dan menyombongkan kepintaran.'
    },
    {
      asma: 'As-Samī‘ (Maha Mendengar)',
      karakterKunci: 'Santun Berbahasa, Pendengar Baik, & Berdzikir',
      aksiNyata: [
        'Berbicara sopan, lembut, dan jujur kepada orang tua, guru, dan teman',
        'Mendengarkan dengan takzim saat guru mengajar dan orang tua menasihati',
        'Memperbanyak zikir, doa tulus, dan tilawah Al-Qur\'an di setiap kesempatan'
      ],
      pantangan: 'Berkata kotor, melontarkan kata kasar/hinaan, ghibah, dan menyela pembicaraan orang lain.'
    },
    {
      asma: 'Al-Baṣīr (Maha Melihat)',
      karakterKunci: 'Murāqabah (Mawas Diri), Jujur, & Menjaga Pandangan',
      aksiNyata: [
        'Jujur saat ulangan dan amanah menjaga barang titipan walau tanpa pengawas',
        'Menundukkan pandangan dari gambar/video terlarang dan pornografi',
        'Melakukan kebaikan ikhlas di balik layar tanpa mencari sorotan kamera'
      ],
      pantangan: 'Menyontek, mencuri, menonton konten asusila, dan mengintip privasi orang lain.'
    },
    {
      asma: 'Al-Khabīr (Maha Teliti & Waspada)',
      karakterKunci: 'Ikhlas Batin, Cermat, Tabayyun, & Rapi',
      aksiNyata: [
        'Meluruskan niat semata-mata mengharap ridha Allah dalam setiap amal perbuatan',
        'Teliti memeriksa hasil tugas dan teliti memperhitungkan langkah hidup',
        'Tabayyun (cek & ricek fakta) sebelum mempercayai atau membagikan berita di internet'
      ],
      pantangan: 'Riya\' (pamer amal), ceroboh, menyebarkan hoaks tanpa verifikasi, dan su\'udzan.'
    }
  ],

  // =========================================================================
  // KUIS DAN STUDI KASUS INTERAKTIF
  // =========================================================================
  kuisInteraktif: [
    {
      id: 'kuis-1',
      skenario:
        'Saat pelaksanaan ujian semester di kelas, pengawas izin keluar ruangan selama 15 menit. Suasana kelas mulai riuh dan beberapa siswa membuka catatan kecil di kolong meja. Namun, Zaid tetap fokus mengerjakan soal secara mandiri tanpa tergoda sedikit pun untuk menyontek, karena ia yakin ada Dzat yang senantiasa mengawasinya.',
      pilihan: [
        { id: 'a', teks: 'Al-\'Alīm karena Zaid memiliki ilmu yang cukup', asmaTarget: 'Al-\'Alīm' },
        { id: 'b', teks: 'Al-Baṣīr karena Zaid meyakini Allah Maha Melihat setiap gerak-geriknya', asmaTarget: 'Al-Baṣīr' },
        { id: 'c', teks: 'As-Samī‘ karena Zaid takut suaranya terdengar pengawas', asmaTarget: 'As-Samī‘' },
        { id: 'd', teks: 'Al-Quddūs karena Zaid menyukai kebersihan lembar soal', asmaTarget: 'Al-Quddūs' }
      ],
      jawabanBenar: 'b',
      penjelasan:
        'Perilaku Zaid mencerminkan keyakinan kuat terhadap Asmaul Husna Al-Baṣīr (Maha Melihat). Sikap Murāqabah (merasa selalu dalam pengawasan Allah) membuatnya tetap jujur dan berintegritas meskipun tidak ada manusia yang melihat.'
    },
    {
      id: 'kuis-2',
      skenario:
        'Rina menerima pesan berantai di grup obrolan media sosial yang berisi tuduhan miring terhadap salah seorang gurunya. Sebelum mempercayai dan meneruskannya ke teman lain, Rina terlebih dahulu menelusuri kebenaran informasi tersebut dan menanyakan langsung pada sumber terpercaya (Tabayyun).',
      pilihan: [
        { id: 'a', teks: 'As-Samī‘ karena Rina mendengar kabar burung', asmaTarget: 'As-Samī‘' },
        { id: 'b', teks: 'Al-Khabīr karena Rina bertindak cermat, teliti, waspada, dan tabayyun', asmaTarget: 'Al-Khabīr' },
        { id: 'c', teks: 'Al-\'Alīm karena Rina ingin terlihat paling pandai di grup', asmaTarget: 'Al-\'Alīm' },
        { id: 'd', teks: 'Al-Baṣīr karena Rina membaca pesan tersebut dengan matanya', asmaTarget: 'Al-Baṣīr' }
      ],
      jawabanBenar: 'b',
      penjelasan:
        'Sikap teliti memeriksa kebenaran informasi, tidak tergesa-gesa menyebarkan berita, dan tabayyun mencerminkan keteladanan terhadap sifat Al-Khabīr (Maha Mengetahui Hal Rahasia & Maha Teliti).'
    },
    {
      id: 'kuis-3',
      skenario:
        'Faris berhasil meraih medali emas pada Olimpiade Sains Nasional (OSN). Ketika teman-temannya memuji kecerdasannya, Faris tersenyum rendah hati dan berucap bahwa kecerdasannya hanyalah titipan sedikit dari ilmu Allah yang Maha Luas, sehingga ia tidak pantas menyombongkan diri.',
      pilihan: [
        { id: 'a', teks: 'Al-\'Alīm karena Faris menyadari hakikat ilmu mutlak milik Allah', asmaTarget: 'Al-\'Alīm' },
        { id: 'b', teks: 'As-Samī‘ karena Faris senang mendengar pujian teman-temannya', asmaTarget: 'As-Samī‘' },
        { id: 'c', teks: 'Al-Khabīr karena Faris meneliti rumus sains', asmaTarget: 'Al-Khabīr' },
        { id: 'd', teks: 'Al-Malik karena Faris menjadi juara di antara para siswa', asmaTarget: 'Al-Malik' }
      ],
      jawabanBenar: 'a',
      penjelasan:
        'Menyadari bahwa ilmu manusia sangat terbatas dibandingkan ilmu Allah yang tak bertepi, serta bersikap tawadhu\' (rendah hati) adalah cerminan utama dari keimanan kepada Allah Al-\'Alīm (Maha Mengetahui).'
    },
    {
      id: 'kuis-4',
      skenario:
        'Ketika diajak oleh rekannya untuk menggunjing dan menjelek-jelekkan teman sekelas yang tidak hadir (ghibah), Naila dengan tegas namun santun menolaknya dan memilih mengalihkan topik pembicaraan ke hal-hal positif, karena ia sadar setiap getar kata yang keluar dari bibirnya direkam dan didengar oleh Allah.',
      pilihan: [
        { id: 'a', teks: 'Al-Khabīr karena Naila menyelidiki kekurangan temannya', asmaTarget: 'Al-Khabīr' },
        { id: 'b', teks: 'Al-Baṣīr karena Naila melihat temannya yang tidak hadir', asmaTarget: 'Al-Baṣīr' },
        { id: 'c', teks: 'As-Samī‘ karena Naila yakin Allah Maha Mendengar setiap ucapannya', asmaTarget: 'As-Samī‘' },
        { id: 'd', teks: 'Al-\'Adl karena Naila membagi waktu obrolan dengan adil', asmaTarget: 'Al-\'Adl' }
      ],
      jawabanBenar: 'c',
      penjelasan:
        'Menjaga lisan dari perkataan kotor, ghibah, dan dusta karena yakin Allah Maha Mendengar setiap desah kata manusia adalah pengamalan langsung dari Asmaul Husna As-Samī‘.'
    }
  ]
};
