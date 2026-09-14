export interface MufradatWord {
  id: string;
  arabic: string;
  latin: string;
  meaning: string;
  surahRef: string;
  category?: 'Kata Benda (Isim)' | 'Kata Kerja (Fi\'il)' | 'Huruf / Partikel';
  tajwidHint?: string;
}

export interface AyatMateriItem {
  surahName: string;
  surahNumber: number;
  verseNumber: number;
  arabic: string;
  latin: string;
  translationKemenag: string;
  audioUrl?: string;
  tafsirWajiz: string;
  asbabunNuzul?: string;
  kandunganPoin: string[];
}

export interface HaditsImanItem {
  id: string;
  title: string;
  narrator: string;
  kitabRef: string;
  arabic: string;
  latin: string;
  translation: string;
  hikmah: string[];
}

export interface ContohAlifLam {
  id: string;
  lafalArabic: string;
  latin: string;
  suratRef: string;
  jenis: 'Alif Lam Qomariyah' | 'Alif Lam Syamsiyah';
  hurufBertemu: string;
  namaHuruf: string;
  alasanTajwid: string;
}

export interface MateriKelas7Sem1Lengkap {
  babNumber: number;
  babTitle: string;
  semester: string;
  grade: string;
  temaKurikulum: string;
  pengantar: string;
  ayatAnNisa: {
    surahName: string;
    surahNumber: number;
    verseNumber: number;
    ayatItem: AyatMateriItem;
    asbabunNuzulLengkap: string;
    hikmahKeimanan: string[];
  };
  ayatAlAnfal: {
    surahName: string;
    surahNumber: number;
    verseRange: string;
    ayatList: AyatMateriItem[];
    limaCiriMukminHakiki: Array<{
      nomor: number;
      judul: string;
      istilahArab: string;
      penjelasan: string;
      relevansiSiswa: string;
    }>;
    keutamaanMukmin: Array<{
      istilahArab: string;
      arti: string;
      keterangan: string;
    }>;
  };
  haditsPentingnyaIman: {
    pengantar: string;
    tigaPilarIman: {
      tashdiq: {
        arab: string;
        latin: string;
        arti: string;
        uraian: string;
      };
      iqrar: {
        arab: string;
        latin: string;
        arti: string;
        uraian: string;
      };
      amal: {
        arab: string;
        latin: string;
        arti: string;
        uraian: string;
      };
    };
    daftarHadits: HaditsImanItem[];
  };
  hukumAlifLam: {
    pengertianUmum: string;
    qomariyah: {
      nama: string;
      istilahLain: string;
      artiBahasa: string;
      ciriCiri: string[];
      jumlahHuruf: number;
      hurufList: string[];
      rumusHafalan: string;
      caraMembaca: string;
      contohDalamAyat: ContohAlifLam[];
    };
    syamsiyah: {
      nama: string;
      istilahLain: string;
      artiBahasa: string;
      ciriCiri: string[];
      jumlahHuruf: number;
      hurufList: string[];
      caraMembaca: string;
      contohDalamAyat: ContohAlifLam[];
    };
    perbandinganTabel: Array<{
      indikator: string;
      qomariyah: string;
      syamsiyah: string;
    }>;
  };
  mufradatLengkap: {
    anNisa136: MufradatWord[];
    alAnfal2_4: MufradatWord[];
  };
  kuisTajwidLatihan: Array<{
    id: string;
    soal: string;
    lafal: string;
    jawabanBenar: 'Alif Lam Qomariyah' | 'Alif Lam Syamsiyah';
    pembahasan: string;
  }>;
}

export const MATERI_KELAS_VII_SEM_1: MateriKelas7Sem1Lengkap = {
  babNumber: 1,
  babTitle: 'Meneladani Al-Qur\'an dan Hadis: Merengkuh Hakikat Iman dan Hukum Tajwid Alif Lam',
  semester: 'Semester 1',
  grade: 'Kelas VII',
  temaKurikulum: 'Al-Qur\'an dan Hadis — Penguatan Akidah & Kemahiran Tajwid (Kurikulum Merdeka CP 2026)',
  pengantar: 'Iman merupakan fondasi terpenting dalam kehidupan setiap muslim. Tanpa iman yang kokoh, segala amal kebajikan ibarat debu yang diterbangkan angin. Dalam Bab ini, kita mendalami Q.S. An-Nisā’ ayat 136 mengenai seruan mengokohkan rukun iman, Q.S. Al-Anfāl ayat 2-4 mengenai lima karakteristik orang beriman sejati, hadis-hadis Rasulullah SAW tentang urgensi dan manisnya iman, hukum tajwid Alif Lam (Qomariyah & Syamsiyah), serta perbendaharaan mufradat (kosa kata perkata).',

  // =========================================================================
  // 1. QS. AN-NISA AYAT 136
  // =========================================================================
  ayatAnNisa: {
    surahName: 'An-Nisā’',
    surahNumber: 4,
    verseNumber: 136,
    ayatItem: {
      surahName: 'An-Nisā’',
      surahNumber: 4,
      verseNumber: 136,
      arabic: 'يٰٓاَيُّهَا الَّذِيْنَ اٰمَنُوْٓا اٰمِنُوْا بِاللّٰهِ وَرَسُوْلِهٖ وَالْكِتٰبِ الَّذِيْ نَزَّلَ عَلٰى رَسُوْلِهٖ وَالْكِتٰبِ الَّذِيْٓ اَنْزَلَ مِنْ قَبْلُ ۗوَمَنْ يَّكْفُرْ بِاللّٰهِ وَمَلٰۤىِٕكَتِهٖ وَكُتُبِهٖ وَرُسُلِهٖ وَالْيَوْمِ الْاٰخِرِ فَقَدْ ضَلَّ ضَلٰلًاۢ بَعِيْدًا',
      latin: 'Yā ayyuhallażīna āmanū āminū billāhi wa rasūlihī wal-kitābillażī nazzala ‘alā rasūlihī wal-kitābillażī anzala min qabl(u), wa may yakfur billāhi wa malā\'ikatihī wa kutubihī wa rusulihī wal-yaumil-ākhiri faqad ḍalla ḍalālam ba‘īdā(n).',
      translationKemenag: 'Wahai orang-orang yang beriman! Tetaplah beriman kepada Allah dan Rasul-Nya (Muhammad) dan kepada Kitab (Al-Qur\'an) yang diturunkan kepada Rasul-Nya, serta kitab yang diturunkan sebelumnya. Barangsiapa ingkar kepada Allah, malaikat-malaikat-Nya, kitab-kitab-Nya, rasul-rasul-Nya, dan hari kemudian, maka sungguh, orang itu telah tersesat sangat jauh.',
      audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/629.mp3',
      tafsirWajiz: 'Ayat ini menyeru orang-orang yang telah berikrar menyatakan diri beriman agar senantiasa memperbaharui, menyempurnakan, dan mengokohkan kualitas imannya secara istiqamah, tidak ragu-ragu terhadap Al-Qur\'an maupun kitab-kitab suci terdahulu. Orang yang mengingkari pilar-pilar iman dipastikan terjerumus ke dalam kesesatan yang nyata dan menjauhkannya dari rahmat Allah.',
      asbabunNuzul: 'Diriwayatkan oleh Ibnu Jarir dari Ikrimah, bahwa ayat ini turun berkenaan dengan sekelompok Ahli Kitab (seperti Abdullah bin Salam, Asad bin Ubaid, dan Tsa\'labah bin Qais) yang mendatangi Rasulullah SAW dan menyatakan keimanan mereka kepada Allah, Rasulullah SAW, Al-Qur\'an, Nabi Musa, dan Taurat. Maka Allah menurunkan ayat ini untuk memerintahkan mereka dan seluruh orang mukmin agar beriman secara menyeluruh kepada seluruh nabi, rasul, malaikat, dan kitab-kitab Allah tanpa membeda-bedakan satu sama lain.',
      kandunganPoin: [
        'Seruan khusus kepada orang-orang beriman (Yā ayyuhallażīna āmanū) untuk memelihara dan meningkatkan keimanan (āminū) agar tidak berhenti pada pengakuan lisan semata.',
        'Kewajiban beriman kepada Allah SWT dan Rasulullah Nabi Muhammad SAW sebagai pembawa risalah terakhir bagi seluruh alam.',
        'Kewajiban mengimani Al-Qur\'an yang diturunkan berangsur-angsur (nazzala) dan kitab-kitab samawi sebelumnya seperti Taurat, Zabur, dan Injil yang diturunkan sekaligus (anzala).',
        'Penegasan rukun iman: Iman kepada Allah, Malaikat-Nya, Kitab-kitab-Nya, Rasul-rasul-Nya, dan Hari Akhir.',
        'Peringatan keras bagi siapa saja yang kufur atau menolak salah satu rukun iman bahwa ia telah tersesat dengan kesesatan yang sangat jauh (ḍalālam ba‘īdā).'
      ]
    },
    asbabunNuzulLengkap: 'Menurut para mufassir seperti Imam Ath-Thabari dan Ibnu Katsir, ayat ini memberikan bimbingan bagi seorang mukmin agar senantiasa memperbaharui komitmen keimanannya. Panggilan "Wahai orang yang beriman, berimanlah!" mengandung pesan bahwa iman itu dinamis—bisa bertambah dengan ketaatan dan berkurang dengan kemaksiatan (al-īmānu yazīdu wa yanquṣ). Oleh karena itu, seorang pelajar muslim harus terus belajar, beribadah, dan berbuat baik agar cahaya imannya semakin kuat.',
    hikmahKeimanan: [
      'Menumbuhkan rasa takut berbuat maksiat karena sadar malaikat mencatat setiap perbuatan.',
      'Memiliki panduan moral yang jelas melalui tuntunan Al-Qur\'an dan Sunnah Rasulullah SAW.',
      'Memiliki orientasi hidup jangka panjang menuju kebahagiaan di hari akhirat kelak.'
    ]
  },

  // =========================================================================
  // 2. QS. AL-ANFAL AYAT 2-4
  // =========================================================================
  ayatAlAnfal: {
    surahName: 'Al-Anfāl',
    surahNumber: 8,
    verseRange: 'Ayat 2 - 4',
    ayatList: [
      {
        surahName: 'Al-Anfāl',
        surahNumber: 8,
        verseNumber: 2,
        arabic: 'إِنَّمَا الْمُؤْمِنُونَ الَّذِينَ إِذَا ذُكِرَ اللَّهُ وَجِلَتْ قُلُوبُهُمْ وَإِذَا تُلِيَتْ عَلَيْهِمْ آيَاتُهُ زَادَتْهُمْ إِيمَانًا وَعَلَىٰ رَبِّهِمْ يَتَوَكَّلُونَ',
        latin: 'Innamal-mu’minūnallażīna iżā żukirallāhu wajilat qulūbuhum wa iżā tuliyat ‘alaihim āyātuhū zādathum īmānaw wa ‘alā rabbihim yatawakkalūn(a).',
        translationKemenag: 'Sesungguhnya orang-orang yang beriman adalah mereka yang apabila disebut nama Allah gemetar hatinya, dan apabila dibacakan ayat-ayat-Nya kepada mereka, bertambah (kuat) imannya dan hanya kepada Tuhan mereka bertawakal.',
        audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/1162.mp3',
        tafsirWajiz: 'Hakikat orang beriman sejati ditandai dengan kepekaan spiritual: hatinya tersentak gemetar penuh takzim saat mengingat keagungan Allah, bertambah kokoh imannya saat menyimak ayat Al-Qur\'an, dan senantiasa menyandarkan hasil usahanya semata-mata kepada Allah.',
        kandunganPoin: [
          'Penggunaan kata "Innamā" (pembatas/hasyr) menegaskan bahwa sifat-sifat ini adalah barometer utama keimanan yang sempurna.',
          'Kepekaan hati (wajilat qulūbuhum) ketika asma Allah diagungkan atau saat panggilan azan berkumandang.',
          'Progresivitas keimanan: bertambah luas ilmu dan keyakinannya setiap kali mendengar atau membaca Al-Qur\'an.',
          'Tawakal total: setelah berusaha sekuat tenaga, hasilnya diserahkan kepada ketetapan Allah SWT.'
        ]
      },
      {
        surahName: 'Al-Anfāl',
        surahNumber: 8,
        verseNumber: 3,
        arabic: 'الَّذِينَ يُقِيمُونَ الصَّلَاةَ وَمِمَّا رَزَقْنَاهُمْ يُنفِقُونَ',
        latin: 'Allażīna yuqīmūnaṣ-ṣalāta wa mimmā razaqnāhum yunfiqūn(a).',
        translationKemenag: '(yaitu) orang-orang yang mendirikan salat dan yang menginfakkan sebagian dari rezeki yang Kami berikan kepada mereka.',
        audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/1163.mp3',
        tafsirWajiz: 'Orang beriman tidak hanya memiliki kesalehan hati secara batiniah, melainkan memanifestasikannya dalam amal saleh nyata: menjaga salat fardu tepat waktu dengan khusyuk (hubungan vertikal dengan Allah) dan gemar menginfakkan harta untuk sesama yang membutuhkan (hubungan horizontal kemanusiaan).',
        kandunganPoin: [
          'Mendirikan salat (yuqīmūnaṣ-ṣalāh): mengerjakannya dengan menyempurnakan wudu, rukun, syarat, thuma\'ninah, dan tepat pada waktunya.',
          'Menginfakkan rezeki (mimmā razaqnāhum yunfiqūn): mengakui bahwa seluruh harta adalah titipan Allah yang sebagiannya ada hak fakir miskin dan kemaslahatan umat.'
        ]
      },
      {
        surahName: 'Al-Anfāl',
        surahNumber: 8,
        verseNumber: 4,
        arabic: 'أُولَٰئِكَ هُمُ الْمُؤْمِنُونَ حَقًّا ۚ لَّهُمْ دَرَجَاتٌ عِندَ رَبِّهِمْ وَمَغْفِرَةٌ وَرِزْقٌ كَرِيمٌ',
        latin: 'Ulā\'ika humul-mu’minūna ḥaqqā(n), lahum darajātun ‘inda rabbihim wa magfiratuw wa rizqun karīm(un).',
        translationKemenag: 'Mereka itulah orang-orang yang benar-benar beriman (mukmin sejati). Mereka akan memperoleh derajat (tinggi) di sisi Tuhannya dan ampunan serta rezeki yang mulia (surga).',
        audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/1164.mp3',
        tafsirWajiz: 'Mereka yang menghimpun lima sifat mulia tersebut diakui Allah sebagai mukmin sejati (al-mu\'minūna ḥaqqā). Allah menganugerahi mereka tiga balasan istimewa: kedudukan derajat kemuliaan yang tinggi di surga, ampunan yang menghapus dosa-dosa mereka, dan rezeki yang mulia lagi kekal.',
        kandunganPoin: [
          'Pengakuan legal Ilahi: mereka adalah orang yang benar-benar beriman tanpa kepalsuan atau kepura-puraan.',
          'Tiga hadiah agung bagi mukmin sejati: Darajāt (kedudukan tinggi), Maghfirah (penghapusan dosa), dan Rizq Karīm (nikmat surga yang tiada putus).'
        ]
      }
    ],
    limaCiriMukminHakiki: [
      {
        nomor: 1,
        judul: 'Hati Bergetar Saat Disebut Nama Allah',
        istilahArab: 'إِذَا ذُكِرَ اللَّهُ وَجِلَتْ قُلُوبُهُمْ',
        penjelasan: 'Ketika mendengar nama Allah, asmaul husna, atau seruan azan, timbul rasa takzim, cinta, dan takut melanggar larangan-Nya. Hati tidak bersikap acuh tak acuh atau sombong.',
        relevansiSiswa: 'Segera bersiap mengambil air wudu ketika azan zuhur berkumandang di musala sekolah dan menghentikan pembicaraan sia-sia.'
      },
      {
        nomor: 2,
        judul: 'Iman Bertambah Kuat Saat Mendengar Al-Qur\'an',
        istilahArab: 'إِذَا تُلِيَتْ عَلَيْهِمْ آيَاتُهُ زَادَتْهُمْ إِيمَانًا',
        penjelasan: 'Mendengarkan dan membaca Al-Qur\'an dengan tadabbur membuat pemahaman agamanya semakin luas, keyakinannya semakin kokoh, dan semangat beribadahnya semakin terpacu.',
        relevansiSiswa: 'Menyimak tadarus pagi di kelas VII dengan tertib, antusias mempelajari makna ayat, serta tidak bercanda saat Al-Qur\'an dilantunkan.'
      },
      {
        nomor: 3,
        judul: 'Senantiasa Bertawakal kepada Allah',
        istilahArab: 'وَعَلَىٰ رَبِّهِمْ يَتَوَكَّلُونَ',
        penjelasan: 'Menyerahkan segala urusan dan hasil perjuangan hanya kepada Allah setelah melakukan ikhtiar (usaha maksimal), bersabar menghadapi kegagalan, dan bersyukur saat sukses.',
        relevansiSiswa: 'Belajar dengan sungguh-sungguh saat menghadapi ulangan atau ujian, kemudian berdoa dan tenang menyerahkan hasilnya kepada takdir Allah.'
      },
      {
        nomor: 4,
        judul: 'Istiqamah Mendirikan Salat',
        istilahArab: 'الَّذِينَ يُقِيمُونَ الصَّلَاةَ',
        penjelasan: 'Tidak sekadar "mengerjakan" untuk gugur kewajiban, tetapi "mendirikan" salat dengan memenuhi rukun, syarat sah, khusyuk, serta menjaga salat berjamaah di awal waktu.',
        relevansiSiswa: 'Menjaga salat 5 waktu di rumah tanpa perlu disuruh orang tua, serta aktif salat berjamaah di musala UPT SMPN 2 Rebang Tangkas.'
      },
      {
        nomor: 5,
        judul: 'Gemar Menginfakkan Rezeki di Jalan Kebaikan',
        istilahArab: 'وَمِمَّا رَزَقْنَاهُمْ يُنفِقُونَ',
        penjelasan: 'Menyadari bahwa rezeki yang didapat mengandung hak orang lain. Memiliki kepekaan sosial untuk saling membantu melalui infak, sedekah, zakat, dan menolong teman.',
        relevansiSiswa: 'Menyisihkan uang jajan untuk infak Jumat di sekolah, membantu teman yang tertimpa musibah, dan meminjamkan alat tulis secara ikhlas.'
      }
    ],
    keutamaanMukmin: [
      {
        istilahArab: 'دَرَجَاتٌ عِندَ رَبِّهِمْ (Darajāt)',
        arti: 'Derajat Kemuliaan yang Tinggi',
        keterangan: 'Kedudukan terhormat di dunia berupa ketenteraman hidup dan di akhirat berupa tingkatan surga yang luhur.'
      },
      {
        istilahArab: 'مَغْفِرَةٌ (Maghfirah)',
        arti: 'Ampunan Dosa dan Kekhilafan',
        keterangan: 'Allah mengampuni dosa-dosa kecil dan menutupi aib hamba-Nya yang senantiasa bertaubat dan menjaga salat.'
      },
      {
        istilahArab: 'رِزْقٌ كَرِيمٌ (Rizqun Karīm)',
        arti: 'Rezeki yang Mulia',
        keterangan: 'Kenikmatan surga yang sempurna, tidak pernah terlihat oleh mata, terdengar oleh telinga, dan terlintas di hati manusia.'
      }
    ]
  },

  // =========================================================================
  // 3. HADIS TENTANG PENTINGNYA IMAN
  // =========================================================================
  haditsPentingnyaIman: {
    pengantar: 'Rasulullah SAW dalam banyak hadis shahih menegaskan bahwa keimanan bukanlah angan-angan kosong, melainkan sebuah keyakinan yang berakar di dalam hati, diucapkan dengan lisan, dan dibuktikan dengan perbuatan sehari-hari.',
    tigaPilarIman: {
      tashdiq: {
        arab: 'تَصْدِيْقٌ بِالْقَلْبِ',
        latin: 'Tashdīqun bil-qalbi',
        arti: 'Membenarkan dan meyakini dengan sepenuh hati',
        uraian: 'Meyakini tanpa ada keraguan sedikit pun bahwa Allah adalah Tuhan Maha Esa, Nabi Muhammad utusan-Nya, dan seluruh ketetapan-Nya adalah benar.'
      },
      iqrar: {
        arab: 'إِقْرَارٌ بِاللِّسَانِ',
        latin: 'Iqrārun bil-lisāni',
        arti: 'Mengikrarkan dan menyatakan dengan lisan',
        uraian: 'Mengucapkan dua kalimat syahadat, melantunkan zikir, membaca Al-Qur\'an, dan senantiasa bertutur kata yang jujur lagi santun.'
      },
      amal: {
        arab: 'عَمَلٌ بِالْأَرْكَانِ',
        latin: '\'Amalun bil-arkāni',
        arti: 'Mengamalkan dengan perbuatan anggota badan',
        uraian: 'Mewujudkan iman melalui ketaatan beribadah seperti salat, puasa, berbakti kepada orang tua, serta membantu sesama.'
      }
    },
    daftarHadits: [
      {
        id: 'hadits-1',
        title: 'Hadis Jibril: Enam Rukun Fondasi Iman',
        narrator: 'Umar bin Al-Khattab radhiyallahu \'anhu',
        kitabRef: 'HR. Muslim No. 8 (Kitāb al-Īmān)',
        arabic: 'قَالَ: فَأَخْبِرْنِي عَنِ الْإِيمَانِ، قَالَ: «أَنْ تُؤْمِنَ بِاللَّهِ، وَمَلَائِكَتِهِ، وَكُتُبِهِ، وَرُسُلِهِ، وَالْيَوْمِ الْآخِرِ، وَتُؤْمِنَ بِالْقَدَرِ خَيْرِهِ وَشَرِّهِ»',
        latin: 'Qāla: Fa akhbirnī ‘anil-īmān(i). Qāla: "An tu\'mina billāhi, wa malā\'ikatihī, wa kutubihī, wa rusulihī, wal-yaumil-ākhiri, wa tu\'mina bil-qadari khairihī wa syarrih(i)".',
        translation: 'Malaikat Jibril berkata: "Beritahukanlah kepadaku tentang iman!" Rasulullah SAW bersabda: "Iman adalah engkau beriman kepada Allah, malaikat-malaikat-Nya, kitab-kitab-Nya, rasul-rasul-Nya, hari akhir, dan engkau beriman kepada takdir yang baik maupun yang buruk."',
        hikmah: [
          'Menegaskan 6 rukun iman sebagai fondasi akidah yang tidak boleh dipisahkan atau dipilih sebagian saja.',
          'Mengimani qada dan qadar mendidik jiwa kita untuk tidak sombong ketika berhasil dan tidak putus asa ketika gagal.',
          'Pentingnya menuntut ilmu agama dengan adab yang baik sebagaimana Malaikat Jibril mendatangi majelis Nabi SAW.'
        ]
      },
      {
        id: 'hadits-2',
        title: 'Hadis Tiga Kunci Merasakan Manisnya Iman (Halāwatul Īmān)',
        narrator: 'Anas bin Malik radhiyallahu \'anhu',
        kitabRef: 'HR. Bukhari No. 16 & Muslim No. 43',
        arabic: 'ثَلَاثٌ مَنْ كُنَّ فِيهِ وَجَدَ حَلَاوَةَ الْإِيمَانِ: أَنْ يَكُونَ اللَّهُ وَرَسُولُهُ أَحَبَّ إِلَيْهِ مِمَّا سِوَاهُمَا، وَأَنْ يُحِبَّ الْمَرْءَ لَا يُحِبُّهُ إِلَّا لِلَّهِ، وَأَنْ يَكْرَهَ أَنْ يَعُودَ فِي الْكُفْرِ كَمَا يَكْرَهُ أَنْ يُقْذَفَ فِي النَّارِ',
        latin: 'Tsalātsun man kunna fīhi wajada ḥalāwatal-īmān(i): An yakūnallāhu wa rasūluhū aḥabba ilaihi mimmā siwāhumā, wa an yuḥibbal-mar\'a lā yuḥibbuhū illā lillāh, wa an yakraha an ya‘ūda fil-kufri kamā yakrahu an yuqżafa fin-nār.',
        translation: 'Tiga perkara yang apabila terdapat pada diri seseorang, niscaya ia merasakan manisnya iman: (1) Hendaklah Allah dan Rasul-Nya lebih dicintai daripada selain keduanya; (2) Hendaklah ia mencintai seseorang semata-mata karena Allah; dan (3) Hendaklah ia benci kembali kepada kekafiran sebagaimana ia benci dilemparkan ke dalam api neraka.',
        hikmah: [
          'Manisnya iman bukan kenikmatan rasa di lidah, melainkan kebahagiaan batin, kedamaian hati, dan kelezatan saat menjalankan ketaatan beribadah.',
          'Menjadikan cinta kepada Allah dan Rasul di atas segala-galanya: mengutamakan perintah agama di atas hawa nafsu pribadi.',
          'Persahabatan sejati adalah ukhuwah fillah: berteman karena sama-sama ingin meraih rida dan surga Allah SWT.',
          'Memiliki keteguhan prinsip moral dan akidah agar tidak terjerumus pada kemaksiatan dan kekufuran.'
        ]
      },
      {
        id: 'hadits-3',
        title: 'Hadis 70+ Cabang Iman & Pentingnya Rasa Malu (Syu‘abul Īmān)',
        narrator: 'Abu Hurairah radhiyallahu \'anhu',
        kitabRef: 'HR. Muslim No. 35',
        arabic: 'الْإِيمَانُ بِضْعٌ وَسَبْعُونَ شُعْبَةً، فَأَفْضَلُهَا قَوْلُ: لَا إِلَهَ إِلَّا اللَّهُ، وَأَدْنَاهَا إِمَاطَةُ الْأَذَى عَنِ الطَّرِيقِ، وَالْحَيَاءُ شُعْبَةٌ مِنَ الْإِيمَانِ',
        latin: 'Al-īmānu biḍ‘un wa sab‘ūna syu‘bah(tan), fa afḍaluhā qaulu: Lā ilāha illallāh, wa adnāhā imāṭatul-ażā ‘aniṭ-ṭarīq, wal-ḥayā\'u syu‘batum minal-īmān.',
        translation: 'Iman itu memiliki lebih dari tujuh puluh cabang. Cabang yang paling utama adalah ucapan "Lā ilāha illallāh" (Tiada tuhan selain Allah), dan cabang yang paling rendah adalah menyingkirkan duri/rintangan dari jalanan, serta rasa malu adalah salah satu cabang dari keimanan.',
        hikmah: [
          'Iman mencakup seluruh ranah kehidupan: dari keyakinan tauhid yang paling tinggi hingga kepedulian lingkungan sosial yang paling sederhana.',
          'Menyingkirkan sampah, paku, atau duri dari jalan sekolah bernilai pahala ibadah cabang keimanan.',
          'Rasa malu (al-hayā\') membentengi seorang pelajar dari perbuatan tercela: malu menyontek, malu berkata kotor, dan malu durhaka kepada guru serta orang tua.'
        ]
      }
    ]
  },

  // =========================================================================
  // 4. HUKUM BACAAN ALIF LAM (AL-TA'RIF)
  // =========================================================================
  hukumAlifLam: {
    pengertianUmum: 'Hukum Alif Lam (sering disebut Al-Ta\'rif atau Alif Lam Ma\'rifah) adalah kaidah tajwid yang mengatur cara membaca huruf alif dan lam (ال) yang bersambung dengan isim (kata benda). Ditinjau dari cara membacanya saat bertemu huruf-huruf hijaiyah, hukum bacaan Alif Lam terbagi menjadi dua bagian: Alif Lam Qomariyah dan Alif Lam Syamsiyah.',
    qomariyah: {
      nama: 'Alif Lam Qomariyah',
      istilahLain: 'Idzhar Qomariyah (إِظْهَارْ قَمَرِيَّة)',
      artiBahasa: 'Qamar artinya bulan. Alif Lam diumpamakan seperti bintang dan huruf qomariyah diumpamakan bulan. Huruf lam tetap terlihat dan terbaca jelas sebagaimana bintang tetap tampak di samping bulan.',
      ciriCiri: [
        'Huruf Lam berharakat sukun mati (ـلْ).',
        'Huruf hijaiyah yang berada setelah Alif Lam TIDAK bertasydid.',
        'Bunyi huruf "L" dibaca jelas, terang, dan padat (Idzhar).'
      ],
      jumlahHuruf: 14,
      hurufList: ['ا', 'ب', 'غ', 'ح', 'ج', 'ك', 'و', 'خ', 'ف', 'ع', 'ق', 'ي', 'م', 'هـ'],
      rumusHafalan: 'اَبْغِ حَجَّكَ وَخَفْ عَقِيْمَهُ (Abghi hajjaka wa khaf ‘aqīmah)',
      caraMembaca: 'Huruf lam mati dibaca terang dan tegas tanpa ditahan, tidak boleh dipantulkan (qalqalah) dan tidak boleh dilebur.',
      contohDalamAyat: [
        {
          id: 'contoh-q1',
          lafalArabic: 'وَالْكِتٰبِ',
          latin: 'Wal-kitābi',
          suratRef: 'Q.S. An-Nisā’: 136',
          jenis: 'Alif Lam Qomariyah',
          hurufBertemu: 'ك',
          namaHuruf: 'Kaf',
          alasanTajwid: 'Alif lam bertemu huruf Kaf (ك), huruf lam bertanda sukun dan huruf kaf tidak bertasydid, sehingga huruf lam dibaca jelas "al-kitaab".'
        },
        {
          id: 'contoh-q2',
          lafalArabic: 'الْيَوْمِ الْاٰخِرِ',
          latin: 'Al-yaumil-ākhiri',
          suratRef: 'Q.S. An-Nisā’: 136',
          jenis: 'Alif Lam Qomariyah',
          hurufBertemu: 'ي dan ء',
          namaHuruf: 'Ya dan Alif/Hamzah',
          alasanTajwid: 'Terdapat dua Alif Lam Qomariyah: Alif lam bertemu huruf Ya (ي) dan Alif lam bertemu Hamzah (ء), keduanya dibaca idzhar/jelas.'
        },
        {
          id: 'contoh-q3',
          lafalArabic: 'الْمُؤْمِنُونَ',
          latin: 'Al-mu’minūna',
          suratRef: 'Q.S. Al-Anfāl: 2',
          jenis: 'Alif Lam Qomariyah',
          hurufBertemu: 'م',
          namaHuruf: 'Mim',
          alasanTajwid: 'Alif lam bertemu dengan huruf Mim (م), huruf lam berharakat sukun dan dibaca terang.'
        },
        {
          id: 'contoh-q4',
          lafalArabic: 'وَرِزْقٌ كَرِيمٌ (bila al-Karim: الْكَرِيمُ)',
          latin: 'Al-Karīmu',
          suratRef: 'Q.S. Al-Anfāl: 4',
          jenis: 'Alif Lam Qomariyah',
          hurufBertemu: 'ك',
          namaHuruf: 'Kaf',
          alasanTajwid: 'Alif lam bertemu huruf Kaf (ك), lam sukun dibaca jelas tanpa dengung.'
        }
      ]
    },
    syamsiyah: {
      nama: 'Alif Lam Syamsiyah',
      istilahLain: 'Idgham Syamsiyah (إِدْغَامْ شَمْسِيَّة)',
      artiBahasa: 'Syams artinya matahari. Huruf lam diibaratkan bintang yang sinarnya lenyap dan melebur saat terbitnya matahari. Suara lam diidghamkan ke huruf berikutnya.',
      ciriCiri: [
        'Huruf Lam TIDAK berharakat sukun (ditulis polos tanpa tanda sukun di atasnya).',
        'Huruf hijaiyah setelah huruf lam DIBERI TANDA TASYDID (ـّ).',
        'Bunyi huruf "L" tidak diucapkan, melainkan dileburkan (diidghamkan) langsung ke huruf syamsiyah di depannya.'
      ],
      jumlahHuruf: 14,
      hurufList: ['ط', 'ث', 'ص', 'ر', 'ت', 'ض', 'ذ', 'ن', 'د', 'س', 'ظ', 'ز', 'ش', 'ل'],
      caraMembaca: 'Bunyi "Al" tidak dibaca, suara langsung dimasukkan ke huruf setelahnya dengan menekan suara pada tanda tasydid.',
      contohDalamAyat: [
        {
          id: 'contoh-s1',
          lafalArabic: 'الَّذِيْنَ',
          latin: 'Allażīna',
          suratRef: 'Q.S. An-Nisā’: 136',
          jenis: 'Alif Lam Syamsiyah',
          hurufBertemu: 'ل',
          namaHuruf: 'Lam',
          alasanTajwid: 'Alif lam bertemu dengan huruf Lam (ل), huruf kedua bertasydid sehingga suara lam pertama diidghamkan/dilebur.'
        },
        {
          id: 'contoh-s2',
          lafalArabic: 'وَرَسُوْلِهٖ (bila ar-Rasul: الرَّسُوْلُ)',
          latin: 'Ar-Rasūlu',
          suratRef: 'Q.S. An-Nisā’: 136',
          jenis: 'Alif Lam Syamsiyah',
          hurufBertemu: 'ر',
          namaHuruf: 'Ra',
          alasanTajwid: 'Alif lam bertemu huruf Ra (ر) bertasydid, bunyi lam melebur ke huruf ra menjadi "ar-rasuul".'
        },
        {
          id: 'contoh-s3',
          lafalArabic: 'الصَّلَاةَ',
          latin: 'Aṣ-ṣalāta',
          suratRef: 'Q.S. Al-Anfāl: 3',
          jenis: 'Alif Lam Syamsiyah',
          hurufBertemu: 'ص',
          namaHuruf: 'Shad',
          alasanTajwid: 'Alif lam bertemu dengan huruf Shad (ص) bertasydid, huruf lam tidak dibaca dan langsung masuk ke shad tebal menjadi "ash-shalaah".'
        },
        {
          id: 'contoh-s4',
          lafalArabic: 'ضَلٰلًاۢ (bila adh-Dhalal: الضَّلَالُ)',
          latin: 'Aḍ-ḍalālu',
          suratRef: 'Q.S. An-Nisā’: 136',
          jenis: 'Alif Lam Syamsiyah',
          hurufBertemu: 'ض',
          namaHuruf: 'Dhad',
          alasanTajwid: 'Alif lam bertemu dengan huruf Dhad (ض) bertasydid, huruf lam melebur ke huruf dhad.'
        }
      ]
    },
    perbandinganTabel: [
      {
        indikator: 'Arti Bahasa',
        qomariyah: 'Qamar = Bulan (terang tampak jelas)',
        syamsiyah: 'Syams = Matahari (melebur/silau)'
      },
      {
        indikator: 'Hukum Tajwid',
        qomariyah: 'Idzhar Qomariyah (dibaca jelas)',
        syamsiyah: 'Idgham Syamsiyah (dilebur/dimasukkan)'
      },
      {
        indikator: 'Tanda pada Huruf Lam (ل)',
        qomariyah: 'Ada tanda sukun mati (ـلْ)',
        syamsiyah: 'Polos tanpa harakat sukun'
      },
      {
        indikator: 'Tanda pada Huruf Setelah Lam',
        qomariyah: 'TIDAK bertasydid (harakat biasa)',
        syamsiyah: 'BERTASYDID (ada tanda syaddah ـّ)'
      },
      {
        indikator: 'Bunyi Pengucapan',
        qomariyah: 'Bunyi "L" terdengar jelas dan padat',
        syamsiyah: 'Bunyi "L" hilang, langsung masuk ke huruf berikutnya'
      },
      {
        indikator: 'Jumlah Huruf Hijaiyah',
        qomariyah: '14 Huruf (ا ب غ ح ج ك و خ ف ع ق ي م هـ)',
        syamsiyah: '14 Huruf (ط ث ص ر ت ض ذ ن د س ظ ز ش ل)'
      },
      {
        indikator: 'Contoh Nyata Materi',
        qomariyah: 'الْكِتٰبِ (Wal-kitāb), الْمُؤْمِنُونَ (Al-mu’minūn)',
        syamsiyah: 'الصَّلَاةَ (Aṣ-ṣalāh), الرَّسُولِ (Ar-rasūl)'
      }
    ]
  },

  // =========================================================================
  // 5. MUFRADAT DAN TERJEMAH PERKATA LENGKAP
  // =========================================================================
  mufradatLengkap: {
    anNisa136: [
      {
        id: 'nisa-m1',
        arabic: 'يٰٓاَيُّهَا',
        latin: 'Yā ayyuhā',
        meaning: 'Wahai',
        surahRef: 'Q.S. An-Nisā’: 136',
        category: 'Huruf / Partikel',
        tajwidHint: 'Mad Jaiz Munfashil (dibaca panjang 4-5 harakat)'
      },
      {
        id: 'nisa-m2',
        arabic: 'الَّذِيْنَ',
        latin: 'Allażīna',
        meaning: 'Orang-orang yang',
        surahRef: 'Q.S. An-Nisā’: 136',
        category: 'Kata Benda (Isim)',
        tajwidHint: 'Alif Lam Syamsiyah (bertemu huruf Lam)'
      },
      {
        id: 'nisa-m3',
        arabic: 'اٰمَنُوْٓا',
        latin: 'Āmanū',
        meaning: 'Telah beriman',
        surahRef: 'Q.S. An-Nisā’: 136',
        category: 'Kata Kerja (Fi\'il)',
        tajwidHint: 'Mad Badal pada huruf Hamzah'
      },
      {
        id: 'nisa-m4',
        arabic: 'اٰمِنُوْا',
        latin: 'Āminū',
        meaning: 'Tetaplah beriman / perkokohlah imanmu',
        surahRef: 'Q.S. An-Nisā’: 136',
        category: 'Kata Kerja (Fi\'il)',
        tajwidHint: 'Fi\'il Amr (kata kerja perintah istiqamah beriman)'
      },
      {
        id: 'nisa-m5',
        arabic: 'بِاللّٰهِ',
        latin: 'Billāh',
        meaning: 'Kepada Allah',
        surahRef: 'Q.S. An-Nisā’: 136',
        category: 'Kata Benda (Isim)',
        tajwidHint: 'Tarqiq (Lafzul Jalalah dibaca tipis karena didahului kasrah)'
      },
      {
        id: 'nisa-m6',
        arabic: 'وَرَسُوْلِهٖ',
        latin: 'Wa rasūlihī',
        meaning: 'Dan Rasul-Nya (Nabi Muhammad SAW)',
        surahRef: 'Q.S. An-Nisā’: 136',
        category: 'Kata Benda (Isim)',
        tajwidHint: 'Mad Shilah Qashirah pada ha dhamir dibaca 2 harakat'
      },
      {
        id: 'nisa-m7',
        arabic: 'وَالْكِتٰبِ',
        latin: 'Wal-kitābi',
        meaning: 'Dan Kitab (Al-Qur\'an)',
        surahRef: 'Q.S. An-Nisā’: 136',
        category: 'Kata Benda (Isim)',
        tajwidHint: 'Alif Lam Qomariyah (lam sukun bertemu kaf)'
      },
      {
        id: 'nisa-m8',
        arabic: 'الَّذِيْ نَزَّلَ',
        latin: 'Allażī nazzala',
        meaning: 'Yang Dia turunkan berangsur-angsur',
        surahRef: 'Q.S. An-Nisā’: 136',
        category: 'Kata Kerja (Fi\'il)',
        tajwidHint: 'Tasydid pada huruf Zai'
      },
      {
        id: 'nisa-m9',
        arabic: 'عَلٰى رَسُوْلِهٖ',
        latin: '‘Alā rasūlihī',
        meaning: 'Kepada Rasul-Nya',
        surahRef: 'Q.S. An-Nisā’: 136',
        category: 'Kata Benda (Isim)',
        tajwidHint: 'Mad Thabi\'i pada ‘ala dan rasul'
      },
      {
        id: 'nisa-m10',
        arabic: 'وَالْكِتٰبِ الَّذِيْٓ اَنْزَلَ',
        latin: 'Wal-kitābillażī anzala',
        meaning: 'Serta Kitab yang Dia turunkan (sebelumnya)',
        surahRef: 'Q.S. An-Nisā’: 136',
        category: 'Kata Benda (Isim)',
        tajwidHint: 'Ikhfa Haqiqi pada nun mati bertemu Zai (an-zala)'
      },
      {
        id: 'nisa-m11',
        arabic: 'مِنْ قَبْلُ',
        latin: 'Min qablu',
        meaning: 'Sebelum (Al-Qur\'an)',
        surahRef: 'Q.S. An-Nisā’: 136',
        category: 'Huruf / Partikel',
        tajwidHint: 'Ikhfa Haqiqi (nun mati bertemu Qaf samar ke pangkal lidah) & Qalqalah Sughra pada Ba'
      },
      {
        id: 'nisa-m12',
        arabic: 'وَمَنْ يَّكْفُرْ',
        latin: 'Wa may yakfur',
        meaning: 'Dan barangsiapa yang ingkar/kafir',
        surahRef: 'Q.S. An-Nisā’: 136',
        category: 'Kata Kerja (Fi\'il)',
        tajwidHint: 'Idgham Bighunnah (nun mati bertemu Ya dimasukkan dengan dengung 2 harakat)'
      },
      {
        id: 'nisa-m13',
        arabic: 'بِاللّٰهِ',
        latin: 'Billāh',
        meaning: 'Kepada Allah',
        surahRef: 'Q.S. An-Nisā’: 136',
        category: 'Kata Benda (Isim)',
        tajwidHint: 'Tarqiq'
      },
      {
        id: 'nisa-m14',
        arabic: 'وَمَلٰۤىِٕكَتِهٖ',
        latin: 'Wa malā\'ikatihī',
        meaning: 'Dan malaikat-malaikat-Nya',
        surahRef: 'Q.S. An-Nisā’: 136',
        category: 'Kata Benda (Isim)',
        tajwidHint: 'Mad Wajib Muttashil (mad bertemu hamzah dalam 1 kata, panjang 4-5 harakat)'
      },
      {
        id: 'nisa-m15',
        arabic: 'وَكُتُبِهٖ',
        latin: 'Wa kutubihī',
        meaning: 'Dan kitab-kitab-Nya',
        surahRef: 'Q.S. An-Nisā’: 136',
        category: 'Kata Benda (Isim)',
        tajwidHint: 'Mad Shilah Qashirah'
      },
      {
        id: 'nisa-m16',
        arabic: 'وَرُسُلِهٖ',
        latin: 'Wa rusulihī',
        meaning: 'Dan rasul-rasul-Nya',
        surahRef: 'Q.S. An-Nisā’: 136',
        category: 'Kata Benda (Isim)',
        tajwidHint: 'Mad Shilah Qashirah'
      },
      {
        id: 'nisa-m17',
        arabic: 'وَالْيَوْمِ الْاٰخِرِ',
        latin: 'Wal-yaumil-ākhiri',
        meaning: 'Dan hari kemudian (hari akhir)',
        surahRef: 'Q.S. An-Nisā’: 136',
        category: 'Kata Benda (Isim)',
        tajwidHint: 'Dua Alif Lam Qomariyah berturut-turut dibaca idzhar'
      },
      {
        id: 'nisa-m18',
        arabic: 'فَقَدْ ضَلَّ',
        latin: 'Faqad ḍalla',
        meaning: 'Maka sungguh dia telah tersesat',
        surahRef: 'Q.S. An-Nisā’: 136',
        category: 'Kata Kerja (Fi\'il)',
        tajwidHint: 'Qalqalah Sughra pada huruf Dal mati'
      },
      {
        id: 'nisa-m19',
        arabic: 'ضَلٰلًاۢ بَعِيْدًا',
        latin: 'Ḍalālam ba‘īdā',
        meaning: 'Dengan kesesatan yang sangat jauh',
        surahRef: 'Q.S. An-Nisā’: 136',
        category: 'Kata Benda (Isim)',
        tajwidHint: 'Iqlab (tanwin fathah bertemu Ba berubah menjadi suara Mim dengung) & Mad \'Iwadh saat waqaf'
      }
    ],

    alAnfal2_4: [
      // AYAT 2
      {
        id: 'anfal-m1',
        arabic: 'إِنَّمَا',
        latin: 'Innamā',
        meaning: 'Sesungguhnya',
        surahRef: 'Q.S. Al-Anfāl: 2',
        category: 'Huruf / Partikel',
        tajwidHint: 'Ghunnah Musyaddadah pada Nun bertasydid'
      },
      {
        id: 'anfal-m2',
        arabic: 'الْمُؤْمِنُونَ',
        latin: 'Al-mu’minūna',
        meaning: 'Orang-orang yang beriman (sejati)',
        surahRef: 'Q.S. Al-Anfāl: 2',
        category: 'Kata Benda (Isim)',
        tajwidHint: 'Alif Lam Qomariyah (lam sukun bertemu Mim)'
      },
      {
        id: 'anfal-m3',
        arabic: 'الَّذِينَ',
        latin: 'Allażīna',
        meaning: 'Adalah mereka yang',
        surahRef: 'Q.S. Al-Anfāl: 2',
        category: 'Kata Benda (Isim)',
        tajwidHint: 'Alif Lam Syamsiyah'
      },
      {
        id: 'anfal-m4',
        arabic: 'إِذَا ذُكِرَ اللَّهُ',
        latin: 'Iżā żukirallāhu',
        meaning: 'Apabila disebut nama Allah',
        surahRef: 'Q.S. Al-Anfāl: 2',
        category: 'Kata Kerja (Fi\'il)',
        tajwidHint: 'Tafkhim (Lafzul Jalalah dibaca tebal karena didahului dhummah)'
      },
      {
        id: 'anfal-m5',
        arabic: 'وَجِلَتْ',
        latin: 'Wajilat',
        meaning: 'Gemetar / bergetar rasa takut dan takzim',
        surahRef: 'Q.S. Al-Anfāl: 2',
        category: 'Kata Kerja (Fi\'il)',
        tajwidHint: 'Hams pada huruf Ta sukun di akhir lafal'
      },
      {
        id: 'anfal-m6',
        arabic: 'قُلُوبُهُمْ',
        latin: 'Qulūbuhum',
        meaning: 'Hati sanubari mereka',
        surahRef: 'Q.S. Al-Anfāl: 2',
        category: 'Kata Benda (Isim)',
        tajwidHint: 'Mad Thabi\'i pada huruf Wawu sukun'
      },
      {
        id: 'anfal-m7',
        arabic: 'وَإِذَا تُلِيَتْ',
        latin: 'Wa iżā tuliyat',
        meaning: 'Dan apabila dibacakan',
        surahRef: 'Q.S. Al-Anfāl: 2',
        category: 'Kata Kerja (Fi\'il)',
        tajwidHint: 'Fi\'il Madhi Mabni Majhul'
      },
      {
        id: 'anfal-m8',
        arabic: 'عَلَيْهِمْ',
        latin: '‘Alaihim',
        meaning: 'Kepada mereka',
        surahRef: 'Q.S. Al-Anfāl: 2',
        category: 'Huruf / Partikel',
        tajwidHint: 'Mad Layyin pada huruf Ya sukun'
      },
      {
        id: 'anfal-m9',
        arabic: 'آيَاتُهُ',
        latin: 'Āyātuhū',
        meaning: 'Ayat-ayat-Nya',
        surahRef: 'Q.S. Al-Anfāl: 2',
        category: 'Kata Benda (Isim)',
        tajwidHint: 'Mad Badal dan Mad Shilah Qashirah'
      },
      {
        id: 'anfal-m10',
        arabic: 'زَادَتْهُمْ',
        latin: 'Zādathum',
        meaning: 'Bertambahlah mereka',
        surahRef: 'Q.S. Al-Anfāl: 2',
        category: 'Kata Kerja (Fi\'il)',
        tajwidHint: 'Mad Thabi\'i pada huruf Alif'
      },
      {
        id: 'anfal-m11',
        arabic: 'إِيمَانًا',
        latin: 'Īmānā',
        meaning: 'Keimanan / kekuatan iman',
        surahRef: 'Q.S. Al-Anfāl: 2',
        category: 'Kata Benda (Isim)',
        tajwidHint: 'Mad Badal pada huruf Hamzah'
      },
      {
        id: 'anfal-m12',
        arabic: 'وَعَلَىٰ رَبِّهِمْ',
        latin: 'Wa ‘alā rabbihim',
        meaning: 'Dan hanya kepada Tuhan pemelihara mereka',
        surahRef: 'Q.S. Al-Anfāl: 2',
        category: 'Huruf / Partikel',
        tajwidHint: 'Tasydid pada huruf Ra tebal (tafkhim)'
      },
      {
        id: 'anfal-m13',
        arabic: 'يَتَوَكَّلُونَ',
        latin: 'Yatawakkalūn',
        meaning: 'Mereka senantiasa bertawakal/berserah diri',
        surahRef: 'Q.S. Al-Anfāl: 2',
        category: 'Kata Kerja (Fi\'il)',
        tajwidHint: 'Mad ‘Aridh Lissukun pada akhir ayat dibaca 2, 4, atau 6 harakat'
      },

      // AYAT 3
      {
        id: 'anfal-m14',
        arabic: 'الَّذِينَ يُقِيمُونَ',
        latin: 'Allażīna yuqīmūna',
        meaning: '(Yaitu) orang-orang yang mendirikan',
        surahRef: 'Q.S. Al-Anfāl: 3',
        category: 'Kata Kerja (Fi\'il)',
        tajwidHint: 'Fi\'il Mudhari\' menunjukkan perbuatan yang terus-menerus'
      },
      {
        id: 'anfal-m15',
        arabic: 'الصَّلَاةَ',
        latin: 'Aṣ-ṣalāta',
        meaning: 'Ibadah salat fardu',
        surahRef: 'Q.S. Al-Anfāl: 3',
        category: 'Kata Benda (Isim)',
        tajwidHint: 'Alif Lam Syamsiyah (bertemu Shad bertasydid)'
      },
      {
        id: 'anfal-m16',
        arabic: 'وَمِمَّا',
        latin: 'Wa mimmā',
        meaning: 'Dan dari sebagian apa yang',
        surahRef: 'Q.S. Al-Anfāl: 3',
        category: 'Huruf / Partikel',
        tajwidHint: 'Ghunnah Musyaddadah pada Mim bertasydid'
      },
      {
        id: 'anfal-m17',
        arabic: 'رَزَقْنَاهُمْ',
        latin: 'Razaqnāhum',
        meaning: 'Kami rezekikan / karuniakan kepada mereka',
        surahRef: 'Q.S. Al-Anfāl: 3',
        category: 'Kata Kerja (Fi\'il)',
        tajwidHint: 'Qalqalah Sughra pada huruf Qaf sukun'
      },
      {
        id: 'anfal-m18',
        arabic: 'يُنفِقُونَ',
        latin: 'Yunfiqūn',
        meaning: 'Mereka infakkan / belanjakan di jalan Allah',
        surahRef: 'Q.S. Al-Anfāl: 3',
        category: 'Kata Kerja (Fi\'il)',
        tajwidHint: 'Ikhfa Haqiqi (nun sukun bertemu Fa) & Mad ‘Aridh Lissukun'
      },

      // AYAT 4
      {
        id: 'anfal-m19',
        arabic: 'أُولَٰئِكَ',
        latin: 'Ulā\'ika',
        meaning: 'Mereka itulah',
        surahRef: 'Q.S. Al-Anfāl: 4',
        category: 'Kata Benda (Isim)',
        tajwidHint: 'Mad Wajib Muttashil'
      },
      {
        id: 'anfal-m20',
        arabic: 'هُمُ الْمُؤْمِنُونَ حَقًّا',
        latin: 'Humul-mu’minūna ḥaqqā',
        meaning: 'Orang-orang yang benar-benar beriman (mukmin hakiki)',
        surahRef: 'Q.S. Al-Anfāl: 4',
        category: 'Kata Benda (Isim)',
        tajwidHint: 'Alif Lam Qomariyah pada Al-Mu\'minun'
      },
      {
        id: 'anfal-m21',
        arabic: 'لَّهُمْ دَرَجَاتٌ',
        latin: 'Lahum darajāt',
        meaning: 'Bagi mereka derajat-derajat kedudukan yang mulia',
        surahRef: 'Q.S. Al-Anfāl: 4',
        category: 'Kata Benda (Isim)',
        tajwidHint: 'Idzhar Syafawi pada mim sukun bertemu Dal'
      },
      {
        id: 'anfal-m22',
        arabic: 'عِندَ رَبِّهِمْ',
        latin: '‘Inda rabbihim',
        meaning: 'Di sisi Tuhan pemelihara mereka',
        surahRef: 'Q.S. Al-Anfāl: 4',
        category: 'Huruf / Partikel',
        tajwidHint: 'Ikhfa Haqiqi pada nun sukun bertemu Dal'
      },
      {
        id: 'anfal-m23',
        arabic: 'وَمَغْفِرَةٌ',
        latin: 'Wa magfirah',
        meaning: 'Dan ampunan (dari dosa-dosa)',
        surahRef: 'Q.S. Al-Anfāl: 4',
        category: 'Kata Benda (Isim)',
        tajwidHint: 'Idgham Bighunnah bila disambung dengan wawu'
      },
      {
        id: 'anfal-m24',
        arabic: 'وَرِزْقٌ كَرِيمٌ',
        latin: 'Wa rizqun karīm',
        meaning: 'Serta rezeki yang mulia (kenikmatan surga)',
        surahRef: 'Q.S. Al-Anfāl: 4',
        category: 'Kata Benda (Isim)',
        tajwidHint: 'Ikhfa Haqiqi (tanwin dhummah bertemu Kaf) & Mad ‘Aridh Lissukun'
      }
    ]
  },

  kuisTajwidLatihan: [
    {
      id: 'kuis-1',
      soal: 'Apakah hukum bacaan alif lam pada kata berikut?',
      lafal: 'الْكِتٰبِ (Al-Kitāb)',
      jawabanBenar: 'Alif Lam Qomariyah',
      pembahasan: 'Benar! Huruf lam bertanda sukun mati dan bertemu dengan huruf Kaf (ك), yang merupakan salah satu huruf qomariyah dalam rumus "Abghi hajjaka wa khaf \'aqiimah". Dibaca jelas.'
    },
    {
      id: 'kuis-2',
      soal: 'Apakah hukum bacaan alif lam pada lafal berikut?',
      lafal: 'الصَّلَاةَ (Ash-Shalāh)',
      jawabanBenar: 'Alif Lam Syamsiyah',
      pembahasan: 'Benar! Huruf lam tidak berharakat sukun dan langsung melebur ke huruf Shad (ص) yang bertanda tasydid. Dibaca idgham syamsiyah.'
    },
    {
      id: 'kuis-3',
      soal: 'Apakah hukum bacaan alif lam pada lafal berikut?',
      lafal: 'الْمُؤْمِنُونَ (Al-Mu\'minūn)',
      jawabanBenar: 'Alif Lam Qomariyah',
      pembahasan: 'Benar! Huruf lam berharakat sukun bertemu huruf Mim (م), sehingga dibaca idzhar qomariyah dengan jelas dan tegas.'
    },
    {
      id: 'kuis-4',
      soal: 'Apakah hukum bacaan alif lam pada lafal berikut?',
      lafal: 'الرَّسُولِ (Ar-Rasūl)',
      jawabanBenar: 'Alif Lam Syamsiyah',
      pembahasan: 'Benar! Huruf lam melebur ke huruf Ra (ر) yang bertanda tasydid. Bunyi "L" tidak dibaca melainkan langsung masuk ke huruf ra.'
    },
    {
      id: 'kuis-5',
      soal: 'Apakah hukum bacaan alif lam pada lafal berikut?',
      lafal: 'الْيَوْمِ (Al-Yaum)',
      jawabanBenar: 'Alif Lam Qomariyah',
      pembahasan: 'Benar! Huruf lam sukun bertemu dengan huruf Ya (ي), dibaca jelas tanpa dengung sebagai Alif Lam Qomariyah.'
    }
  ]
};
