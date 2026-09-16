export interface HukumTajwidNunTanwin {
  lafaz: string;
  ayatRujukan: string;
  hukum: 'Idzhar Halqi' | 'Idgham Bighunnah' | 'Idgham Bilaghunnah' | 'Iqlab' | 'Ikhfa Haqiqi';
  huruf: string;
  alasanKaidah: string;
  caraMembaca: string;
  keterangan: string;
}

export interface MufradatPerkata {
  kataArab: string;
  transliterasi: string;
  arti: string;
  maknaPelajaran: string;
}

export interface SoalHotsBab6Kelas8 {
  id: string;
  nomor: number;
  kasus: string;
  pertanyaan: string;
  pilihan: string[];
  kunciJawaban: number;
  pembahasan: string;
}

export interface MateriKelas8Sem2Bab6 {
  babNumber: number;
  judulBab: string;
  subJudul: string;
  elemenCp: string;
  fase: string;
  semester: string;
  pengantar: {
    apersepsi: string;
    tujuanPembelajaran: string[];
    maknaHubbulWathan: string;
  };
  ayatUtama: {
    surah: string;
    ayatNomor: number;
    teksArab: string;
    transliterasi: string;
    terjemahanResmi: string;
    asbabunNuzul: string;
    kandunganTafsir: {
      poin: string;
      penjelasan: string;
    }[];
    mufradat: MufradatPerkata[];
  };
  haditsTerkait: {
    judul: string;
    perawi: string;
    matanArab: string;
    transliterasi: string;
    terjemahan: string;
    syarahSingkat: string;
    relevansiKehidupan: string;
  }[];
  hukumTajwidNunTanwinLengkap: {
    pengertianUmum: string;
    limaHukum: {
      nama: string;
      namaArab: string;
      artiBahasa: string;
      jumlahHuruf: number;
      daftarHuruf: string[];
      rumusCepat: string;
      caraMembunyikan: string;
      catatanKhusus?: string;
    }[];
    daftarPenerapanPadaAyat: HukumTajwidNunTanwin[];
  };
  panduan4Keterampilan: {
    membacaTartil: {
      pengertian: string;
      pilarPenerapanTajwid: {
        aspek: string;
        deskripsi: string;
        tipsPraktis: string;
      }[];
      adabMembaca: string[];
    };
    menghafalCepat: {
      metode: string;
      langkahLangkah: string[];
      targetHafalanBertahap: {
        tahap: string;
        potonganAyat: string;
        fokusLatihan: string;
      }[];
      tipsMurajaah: string;
    };
    menulisKhatKaidah: {
      kaidahPenulisan: string[];
      hurufPentingGaris: {
        posisi: string;
        huruf: string;
        aturan: string;
      }[];
      latihanMenulis: string;
    };
    menjelaskanRefleksiKebangsaan: {
      konsepDasar: string;
      dimensiCintaTanahAir: {
        ranah: string;
        contohPerilaku: string;
      }[];
      studiKasusKebangsaan: {
        judul: string;
        kasus: string;
        solusiIslam: string;
      }[];
    };
  };
  hikmahCintaTanahAir: {
    hikmahUtama: {
      poin: string;
      penjelasan: string;
      dalilPendukung?: string;
    }[];
    matriksPerilakuPelajar: {
      lingkungan: string;
      tindakanNyata: string[];
    }[];
    refleksiDiri: {
      indikator: string;
      deskripsi: string;
    }[];
  };
  kuisHots: SoalHotsBab6Kelas8[];
}

export const MATERI_KELAS_8_SEM_2_BAB_6: MateriKelas8Sem2Bab6 = {
  babNumber: 6,
  judulBab: 'Menebarkan Semangat Cinta Tanah Air',
  subJudul: 'Membaca, Menghafal, Menulis, dan Menjelaskan Q.S. An-Nisā\' [4]: 66 serta Hukum Bacaan Nun Sukun dan Tanwin',
  elemenCp: 'Al-Qur\'an dan Hadis',
  fase: 'Fase D (SMP/MTs)',
  semester: 'Semester 2',

  pengantar: {
    apersepsi:
      'Pernahkah kamu merasakan rindu yang mendalam kepada rumah dan kampung halaman saat sedang bepergian jauh? Rasa keterikatan batin terhadap tempat kelahiran dan tanah tumpah darah adalah fitrah insaniyah yang dianugerahkan Allah Swt. Dalam sejarah Islam, Rasulullah Saw. mencontohkan rasa cinta yang luar biasa terhadap kota kelahirannya (Makkah) dan tempat pengabdiannya (Madinah). Bahkan melalui Piagam Madinah, beliau membangun tatanan kebangsaan inklusif yang menyatukan seluruh elemen suku dan agama untuk bersama-sama menjaga kedaulatan tanah air. Pada bab ini, kita akan mendalami firman Allah dalam Q.S. An-Nisā\' ayat 66 yang menyetarakan cinta tanah air dengan keselamatan jiwa, menguasai kaidah tajwid hukum Nun Sukun dan Tanwin, serta mempraktikkan 4 keterampilan dasar (membaca tartil, menghafal, menulis khat naskhi, dan menjelaskan refleksi kebangsaan) demi menjadi generasi pelajar muslim yang cinta tanah air dan bertakwa.',
    tujuanPembelajaran: [
      'Membaca Q.S. An-Nisā\' [4]: 66 dengan tartil, fasih, dan benar sesuai dengan kaidah tajwid hukum nun sukun dan tanwin.',
      'Menghafal Q.S. An-Nisā\' [4]: 66 dengan lancar dan benar menggunakan metode pengulangan terstruktur (tikrar).',
      'Menulis teks Q.S. An-Nisā\' [4]: 66 dengan rapi, indah, dan kaidah rasm utsmani / khat naskhi yang tepat.',
      'Menelaah mufradat perkata dan terjemahan resmi Kemenag RI dari Q.S. An-Nisā\' [4]: 66 secara mendalam.',
      'Mengidentifikasi dan mengklasifikasikan hukum bacaan nun sukun dan tanwin (Idzhar Halqi, Idgham Bighunnah, Idgham Bilaghunnah, Iqlab, dan Ikhfa Haqiqi) pada ayat-ayat Al-Qur\'an.',
      'Menganalisis hadis-hadis Rasulullah Saw. mengenai cinta tanah air dan piagam persatuan umat berbangsa.',
      'Menjelaskan hikmah cinta tanah air (hubbul wathan) dan mengimplementasikan sikap patriotisme, cinta damai, serta pelestarian lingkungan dalam kehidupan sehari-hari.'
    ],
    maknaHubbulWathan:
      'Cinta tanah air (Hubbul Wathan) dalam pandangan Islam bukan sekadar fanatisme kesukuan yang sempit (ashabiyyah), melainkan komitmen moral, rasa syukur atas nikmat tempat bernaung, dan kesiapan berkontribusi aktif menjaga kedamaian, kemakmuran, serta kedaulatan negeri tempat syiar agama dan peradaban dijalankan.'
  },

  ayatUtama: {
    surah: 'Q.S. An-Nisā\'',
    ayatNomor: 66,
    teksArab:
      'وَلَوْ أَنَّا كَتَبْنَا عَلَيْهِمْ أَنِ اقْتُلُوا أَنفُسَكُمْ أَوِ اخْرُجُوا مِن دِيَارِكُم مَّا فَعَلُوهُ إِلَّا قَلِيلٌ مِّنْهُمْ ۖ وَلَوْ أَنَّهُمْ فَعَلُوا مَا يُوعَظُونَ بِهِ لَكَانَ خَيْرًا لَّهُمْ وَأَشَدَّ تَثْبِيتًا',
    transliterasi:
      'Walau annā katabnā \'alaihim aniqtulū anfusakum awikhrujū min diyārikum mā fa\'alūhu illā qalīlum minhum, wa lau annahum fa\'alū mā yū\'aẓūna bihī lakāna khairal lahum wa asyadda taṡbītā(n).',
    terjemahanResmi:
      'Dan sekalipun telah Kami perintahkan kepada mereka: "Bunuhlah dirimu atau keluarlah kamu dari kampung halamanmu," niscaya mereka tidak akan melakukannya kecuali sebagian kecil dari mereka. Dan sekiranya mereka benar-benar melaksanakan pengajaran yang diberikan kepada mereka, niscaya itu lebih baik bagi mereka dan lebih menguatkan (iman mereka). (Q.S. An-Nisā\' [4]: 66)',
    asbabunNuzul:
      'Imam Ibnu Katsir dan Fakhruddin ar-Razi mencatat dalam kitab tafsir mereka bahwa ketika turun ayat-ayat perintah syariat yang menuntut ketaatan, orang-orang Yahudi membanggakan para leluhur Bani Israil yang pada zaman Nabi Musa a.s. diperintahkan bertaubat dari menyembah anak sapi dengan saling membunuh diri mereka (qatlul anfus). Mereka berkata dengan congkak, "Seandainya kami diperintahkan demikian, kami sanggup melakukannya." Maka turunlah ayat ini untuk menegaskan bahwa manusia pada dasarnya memiliki tabiat sangat mencintai keselamatan jiwanya dan kampung halamannya. Allah menegaskan bahwa seandainya syariat seberat itu diwajibkan, manusia niscaya enggan menjalankannya kecuali segelintir mukmin yang tulus. Islam justru datang dengan syariat yang penuh kasih sayang, lapang, dan menuntut ketaatan pada perintah yang memberi mashlahat nyata bagi diri dan tanah air mereka.',
    kandunganTafsir: [
      {
        poin: 'Penyetaraan Cinta Jiwa dengan Cinta Tanah Air',
        penjelasan:
          'Dalam ayat ini, Allah Swt. menyandingkan perintah "aniqtulū anfusakum" (bunuhlah dirimu / korbankan jiwamu) dengan "awikhrujū min diyārikum" (keluarlah dari kampung halamanmu). Para mufassir seperti Imam Al-Qurthubi dan Syaikh As-Sa\'di menjelaskan bahwa dipisahkannya seseorang dari tanah kelahirannya memiliki rasa sakit dan penderitaan batin yang setara dengan kehilangan jiwa raga. Hal ini membuktikan bahwa rasa cinta pada tanah tumpah darah adalah fitrah naluriah manusia yang diakui dan dilegitimasi oleh syariat Islam.'
      },
      {
        poin: 'Fitrah Kecintaan Manusia terhadap Negeri Kelahirannya',
        penjelasan:
          'Manusia secara alami memiliki keterikatan emosional, sejarah, kenangan, dan keluarga di tempat ia tumbuh. Mempertahankan kampung halaman dari penjajahan, kezaliman, atau kehancuran bukan hanya dorongan psikologis, melainkan bagian dari perwujudan syukur atas nikmat tempat beribadah secara aman.'
      },
      {
        poin: 'Keberkahan Ketaatan terhadap Nasihat dan Syariat Allah',
        penjelasan:
          'Kalimat "wa lau annahum fa\'alū mā yū\'aẓūna bihī lakāna khairal lahum wa asyadda taṡbītā" menegaskan bahwa ketenangan, kemuliaan, dan kekuatan bangsa terwujud manakala warganya sungguh-sungguh mematuhi ajaran moral dan hukum syariat. Ketaatan pada kebenaran akan memperkokoh persatuan dan memperteguh stabilitas bangsa.'
      },
      {
        poin: 'Teguran terhadap Sikap Mengaku-Aku dan Munafik',
        penjelasan:
          'Ayat ini juga menjadi peringatan bagi orang-orang yang gemar berkoar-koar sanggup berkorban besar tetapi ketika diperintahkan hal-hal sederhana seperti berbuat adil, menjaga persatuan, dan menaati aturan justru mengabaikannya.'
      }
    ],
    mufradat: [
      {
        kataArab: 'وَلَوْ أَنَّا',
        transliterasi: 'wa lau annā',
        arti: 'Dan sekiranya/sekalipun Kami',
        maknaPelajaran: 'Menunjukkan pengandaian ketetapan hukum yang berat dari Allah Swt.'
      },
      {
        kataArab: 'كَتَبْنَا',
        transliterasi: 'katabnā',
        arti: 'Telah Kami wajibkan/perintahkan',
        maknaPelajaran: 'Kata "kataba" dalam Al-Qur\'an berfaedah kewajiban syar\'i yang mengikat.'
      },
      {
        kataArab: 'عَلَيْهِمْ',
        transliterasi: '\'alaihim',
        arti: 'Atas mereka',
        maknaPelajaran: 'Ketetapan yang dibebankan kepada manusia.'
      },
      {
        kataArab: 'أَنِ اقْتُلُوا',
        transliterasi: 'aniqtulū',
        arti: 'Bunuhlah / korbankanlah',
        maknaPelajaran: 'Pengorbanan jiwa raga yang paling ekstrem dalam ujian kesetiaan.'
      },
      {
        kataArab: 'أَنفُسَكُمْ',
        transliterasi: 'anfusakum',
        arti: 'Diri-diri kalian sendiri',
        maknaPelajaran: 'Jiwa raga manusia yang merupakan amanah agung dari Allah Swt.'
      },
      {
        kataArab: 'أَوِ اخْرُجُوا',
        transliterasi: 'awikhrujū',
        arti: 'Atau keluarlah kamu',
        maknaPelajaran: 'Perintah meninggalkan tempat tinggal (hijrah paksa atau terusir).'
      },
      {
        kataArab: 'مِن دِيَارِكُم',
        transliterasi: 'min diyārikum',
        arti: 'Dari kampung halaman / tanah airmu',
        maknaPelajaran: 'Kata diyār adalah jamak dari dār (negeri/tanah tumpah darah) yang sangat dicintai manusia.'
      },
      {
        kataArab: 'مَّا فَعَلُوهُ',
        transliterasi: 'mā fa\'alūhu',
        arti: 'Niscaya mereka tidak akan melakukannya',
        maknaPelajaran: 'Menunjukkan beratnya beban berpisah dari tanah air dan mengorbankan nyawa.'
      },
      {
        kataArab: 'إِلَّا قَلِيلٌ مِّنْهُمْ',
        transliterasi: 'illā qalīlum minhum',
        arti: 'Kecuali sebagian kecil dari mereka',
        maknaPelajaran: 'Hanya orang-orang yang memiliki keimanan kokoh yang sanggup berkorban total.'
      },
      {
        kataArab: 'وَلَوْ أَنَّهُمْ فَعَلُوا',
        transliterasi: 'wa lau annahum fa\'alū',
        arti: 'Dan sekiranya mereka melaksanakan',
        maknaPelajaran: 'Pentingnya mengamalkan ajaran agama dalam perbuatan nyata.'
      },
      {
        kataArab: 'مَا يُوعَظُونَ بِهِ',
        transliterasi: 'mā yū\'aẓūna bihī',
        arti: 'Apa yang dinasihatkan/diajarkan kepada mereka',
        maknaPelajaran: 'Pengajaran Al-Qur\'an dan hadis yang membimbing akhlak, keadilan, dan kebaikan sosial.'
      },
      {
        kataArab: 'لَكَانَ خَيْرًا لَّهُمْ',
        transliterasi: 'lakāna khairal lahum',
        arti: 'Niscaya itu lebih baik bagi mereka',
        maknaPelajaran: 'Kebaikan lahir dan batin, di dunia berupa ketenteraman dan di akhirat berupa surga.'
      },
      {
        kataArab: 'وَأَشَدَّ تَثْبِيتًا',
        transliterasi: 'wa asyadda taṡbītā',
        arti: 'Dan lebih menguatkan / meneguhkan (keimanan mereka)',
        maknaPelajaran: 'Ketaatan pada syariat dan cinta kebaikan menjadi pilar keteguhan iman dan keutuhan bangsa.'
      }
    ]
  },

  haditsTerkait: [
    {
      judul: '1. Ungkapan Cinta Mendalam Rasulullah Saw. kepada Tanah Kelahiran (Makkah)',
      perawi: 'H.R. At-Tirmidzi No. 3926 (Hadits Hasan Shahih)',
      matanArab:
        'عَنِ ابْنِ عَبَّاسٍ رَضِيَ اللَّهُ عَنْهُمَا قَالَ: قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ لِمَكَّةَ: «مَا أَطْيَبَكِ مِنْ بَلَدٍ، وَأَحَبَّكِ إِلَيَّ، وَلَوْلاَ أَنَّ قَوْمِي أَخْرَجُونِي مِنْكِ مَا سَكَنْتُ غَيْرَكِ»',
      transliterasi:
        '\'Anibni \'Abbāsin raḍiyallāhu \'anhumā qāla: qāla Rasūlullāhi ṣallallāhu \'alaihi wa sallama li-Makkata: "Mā aṭyabaki min baladin, wa aḥabbaki ilayya, wa lau lā anna qaumī akhrajūnī minki mā sakantu gairaki".',
      terjemahan:
        'Dari Ibnu Abbas r.a., ia berkata: Rasulullah Saw. bersabda kepada kota Makkah: "Alangkah indahnya dirimu wahai negeri, dan betapa cintanya aku kepadamu! Sekiranya bukan karena kaumku mengusirku darimu, niscaya aku tidak akan pernah bertempat tinggal di selainmu." (H.R. At-Tirmidzi No. 3926)',
      syarahSingkat:
        'Hadis ini diucapkan oleh Rasulullah Saw. saat beliau berdiri di Hazwarah dan menatap kota Makkah sebelum berhijrah ke Madinah. Beliau meneteskan air mata karena harus meninggalkan tanah tumpah darahnya. Para ulama hadis menegaskan bahwa ucapan ini adalah bukti nyata syariat mengakui rasa cinta pada tanah air sebagai fitrah suci kenabian.',
      relevansiKehidupan:
        'Sebagai pelajar Indonesia, kita wajib mencintai bumi pertiwi Indonesia tempat kita dilahirkan, menghirup udara, bersujud, dan menuntut ilmu. Menjaga keindahan dan keamanan negeri adalah bagian dari meneladani akhlak Rasulullah Saw.'
    },
    {
      judul: '2. Antusiasme & Kerinduan Rasulullah Saw. terhadap Kota Madinah al-Munawwarah',
      perawi: 'H.R. Al-Bukhari No. 1886',
      matanArab:
        'عَنْ أَنَسٍ رَضِيَ اللَّهُ عَنْهُ: «أَنَّ النَّبِيَّ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ كَانَ إِذَا قَدِمَ مِنْ سَفَرٍ، فَنَظَرَ إِلَى جُدُرَاتِ المَدِينَةِ، أَوْضَعَ نَاقَتَهُ، وَإِنْ كَانَ عَلَى دَابَّةٍ حَرَّكَهَا مِنْ حُبِّهَا»',
      transliterasi:
        '\'An Anasin raḍiyallāhu \'anhu: anna an-Nabiyya ṣallallāhu \'alaihi wa sallama kāna iżā qadima min safarin, fanaẓara ilā judurātil-Madīnati, auḍa\'a nāqatahū, wa in kāna \'alā dābbatin ḥarrakahā min ḥubbihā.',
      terjemahan:
        'Dari Anas r.a.: "Bahwasanya Nabi Saw. apabila kembali dari suatu bepergian, lalu melihat dinding-dinding kota Madinah, beliau mempercepat laju untanya; dan jika beliau mengendarai hewan tunggangan lain, beliau menggerakkannya (mempercepatnya) karena kecintaan beliau pada kota Madinah." (H.R. Al-Bukhari No. 1886)',
      syarahSingkat:
        'Al-Hafizh Ibnu Hajar al-Asqalani dalam Fathul Bari (juz 3 hal. 621) menyatakan: "Hadits ini menjadi dalil tentang keutamaan Madinah serta disyariatkannya mencintai tanah air dan merindukannya (fīhi dalālatun \'alā maṡrū\'iyyati ḥubbil-waṭani wal-ḥanīni ilaih)." Beliau mempercepat tunggangan karena luapan kerinduan akan tanah air tempat tinggalnya.',
      relevansiKehidupan:
        'Kecintaan pada daerah dan negara harus mendorong kita untuk selalu bersemangat pulang membawa karya, ilmu, dan kontribusi nyata demi kemajuan tanah air tercinta.'
    },
    {
      judul: '3. Piagam Madinah: Landasan Bela Negara & Persatuan Kebangsaan',
      perawi: 'Sirah Nabawiyah Ibnu Hisyam & Tarikh Thabari',
      matanArab:
        '«وَإِنَّ عَلَى كُلِّ أُنَاسٍ حِصَّتَهُمْ مِنْ جَانِبِهِمُ الَّذِي قِبَلَهُمْ، وَإِنَّ بَيْنَهُمُ النَّصْرَ عَلَى مَنْ حَارَبَ أَهْلَ هَذِهِ الصَّحِيفَةِ، وَإِنَّ يَثْرِبَ حَرَامٌ جَوْفُهَا لِأَهْلِ هَذِهِ الصَّحِيفَةِ»',
      transliterasi:
        'Wa inna \'alā kulli unāsin ḥiṣṣatahum min jānibihimul-lażī qibalahum, wa inna bainahumun-naṣra \'alā man ḥāraba ahla hażihiṣ-ṣaḥīfati, wa inna Yaṡriba ḥarāmun jaufuhā li-ahli hażihiṣ-ṣaḥīfati.',
      terjemahan:
        '"Sesungguhnya setiap kaum memiliki kewajiban menjaga wilayahnya masing-masing. Dan sesungguhnya di antara mereka (kaum muslimin, Yahudi, dan sekutu) harus saling tolong-menolong menghadapi siapa pun yang memerangi warga piagam ini, serta sesungguhnya kota Yatsrib (Madinah) adalah tanah suci yang terjaga keamanannya bagi seluruh pendukung piagam ini."',
      syarahSingkat:
        'Piagam Madinah (Mitsaq al-Madinah) adalah konstitusi kebangsaan tertulis pertama di dunia modern yang dirumuskan Nabi Saw. Piagam ini mewajibkan seluruh elemen masyarakat Madinah tanpa memandang agama atau ras untuk bersatu padu membela tanah air bersama-sama dari serangan luar.',
      relevansiKehidupan:
        'Menjadi cikal bakal konsep bela negara dan kebhinekaan di Indonesia, di mana setiap warga negara berhak dan wajib ikut serta dalam pembelaan negara (UUD 1945 Pasal 27 & 30).'
    }
  ],

  hukumTajwidNunTanwinLengkap: {
    pengertianUmum:
      'Nun Sukun (نْ) adalah huruf nun yang bertanda mati/sukun dan tidak berharakat, sedangkan Tanwin ( ـًـــٍـــٌ / fathatain, kasratain, dhommatain) adalah suara nun sukun tambahan yang berbunyi pada akhir kata benda saat diucapkan namun tidak tertulis dalam tulisan asli. Ketika Nun Sukun atau Tanwin bertemu dengan huruf hijaiyah, hukum bacaannya terbagi menjadi 5 macam: Idzhar Halqi, Idgham Bighunnah, Idgham Bilaghunnah, Iqlab, dan Ikhfa Haqiqi.',
    limaHukum: [
      {
        nama: '1. Idzhar Halqi',
        namaArab: 'إظهار حلقي',
        artiBahasa: 'Idzhar artinya jelas/terang, Halqi artinya kerongkongan/tenggorokan.',
        jumlahHuruf: 6,
        daftarHuruf: ['ء (Hamzah)', 'هـ (Ha)', 'ع (\'Ain)', 'غ (Ghain)', 'ح (Ha)', 'خ (Kha)'],
        rumusCepat: 'Bila nun sukun (نْ) atau tanwin bertemu salah satu dari 6 huruf tenggorokan.',
        caraMembunyikan:
          'Wajib dibaca secara jelas, tegas, tanpa berdengung (bighunnah) dan tanpa dipantulkan (saktah). Suara nun atau tanwin terdengar murni dari makhrajnya.',
        catatanKhusus:
          'Keenam huruf ini keluar dari tenggorokan (halaq), baik pangkal (ء, هـ), tengah (ع, ح), maupun ujung tenggorokan (غ, خ).'
      },
      {
        nama: '2. Idgham Bighunnah (Ma\'al Ghunnah)',
        namaArab: 'إدغام بغنة',
        artiBahasa: 'Idgham artinya memasukkan/melebur, Bighunnah artinya disertai dengung.',
        jumlahHuruf: 4,
        daftarHuruf: ['ي (Ya)', 'ن (Nun)', 'م (Mim)', 'و (Wawu)'],
        rumusCepat: 'Disingkat dalam kata: يَنْمُو (YANMŪ).',
        caraMembunyikan:
          'Memasukkan atau meleburkan suara nun sukun atau tanwin ke dalam huruf di depannya disertai dengan suara dengung (ghunnah) yang ditahan selama 2 harakat (1 alif).',
        catatanKhusus:
          'PENGECUALIAN PENTING (Idzhar Wajib / Idzhar Mutlaq): Jika nun sukun bertemu huruf wawu atau ya dalam SATU KATA (kalimah), maka TIDAK BOLEH di-idgham-kan, melainkan wajib dibaca jelas (Idzhar Mutlaq). Hanya ada 4 kata dalam seluruh mushaf Al-Qur\'an: دُنْيَا (dunyā), بُنْيَانٌ (bunyānun), قِنْوَانٌ (qinwānun), dan صِنْوَانٌ (ṣinwānun).'
      },
      {
        nama: '3. Idgham Bilaghunnah',
        namaArab: 'إدغام بلا غنة',
        artiBahasa: 'Idgham artinya meleburkan, Bilaghunnah artinya tanpa dengung sama sekali.',
        jumlahHuruf: 2,
        daftarHuruf: ['ل (Lam)', 'ر (Ra)'],
        rumusCepat: 'Huruf Lam (ل) dan Ra (ر).',
        caraMembunyikan:
          'Memasukkan suara nun sukun atau tanwin secara sempurna ke dalam huruf Lam atau Ra tanpa ada suara dengung dari rongga hidung sama sekali.',
        catatanKhusus:
          'Pengecualian terjadi pada surah Al-Qiyamah ayat 27 pada lafaz "وَقِيلَ مَنْ ۜ رَاقٍ" (man rāq) karena terdapat saktah (berhenti sejenak tanpa bernapas).'
      },
      {
        nama: '4. Iqlab',
        namaArab: 'إقلاب',
        artiBahasa: 'Iqlab secara bahasa berarti membalik atau menukar sesuatu dari bentuk aslinya.',
        jumlahHuruf: 1,
        daftarHuruf: ['ب (Ba)'],
        rumusCepat: 'Nun sukun (نْ) atau tanwin bertemu satu-satunya huruf Ba (ب).',
        caraMembunyikan:
          'Menukar bunyi nun sukun atau tanwin menjadi bunyi huruf Mim (م) yang disertai dengung (ghunnah) 2 harakat dengan merapatkan kedua bibir secara rileks (tidak ditekan kaku). Biasanya dalam mushaf ditandai huruf mim kecil (مـ).',
        catatanKhusus:
          'Tiga langkah membaca Iqlab: (1) Menukar suara nun/tanwin menjadi mim, (2) Menyembunyikan mim pada huruf ba, (3) Disertai dengung 2 harakat.'
      },
      {
        nama: '5. Ikhfa Haqiqi',
        namaArab: 'إخفاء حقيقي',
        artiBahasa: 'Ikhfa artinya menyamarkan atau menyembunyikan, Haqiqi artinya sungguh-sungguh.',
        jumlahHuruf: 15,
        daftarHuruf: [
          'ت (Ta)',
          'ث (Tsa)',
          'ج (Jim)',
          'د (Dal)',
          'ذ (Dzal)',
          'ز (Zay)',
          'س (Sin)',
          'ش (Syin)',
          'ص (Shad)',
          'ض (Dhad)',
          'ط (Tha)',
          'ظ (Zha)',
          'ف (Fa)',
          'ق (Qaf)',
          'ك (Kaf)'
        ],
        rumusCepat: '15 huruf selain huruf Idzhar, Idgham, dan Iqlab.',
        caraMembunyikan:
          'Membunyikan suara nun sukun atau tanwin secara samar-samar antara Idzhar dan Idgham, disertai dengan suara dengung (ghunnah) sepanjang 2 harakat, di mana lidah bersiap-siap menuju makhraj huruf berikutnya.',
        catatanKhusus:
          'Tingkatan Ikhfa: (a) Aqrab/Tinggi (ت, د, ط) - lebih dekat ke idzhar; (b) Ab\'ad/Jauh (ق, ك) - dengung lebih dominan di hidung (tebal pada qaf); (c) Ausath/Sedang (10 huruf lainnya).'
      }
    ],

    daftarPenerapanPadaAyat: [
      {
        lafaz: 'أَنفُسَكُمْ',
        ayatRujukan: 'Q.S. An-Nisā\': 66',
        hukum: 'Ikhfa Haqiqi',
        huruf: 'ف (Fa)',
        alasanKaidah: 'Nun sukun (نْ) bertemu dengan huruf Fa (ف)',
        caraMembaca: 'Dibaca samar disertai dengung 2 harakat, bunyi nun mengarah ke makhraj Fa (bibir bawah menyentuh ujung gigi seri atas).',
        keterangan: 'Tingkatan Ikhfa Ausath'
      },
      {
        lafaz: 'مِن دِيَارِكُم',
        ayatRujukan: 'Q.S. An-Nisā\': 66',
        hukum: 'Ikhfa Haqiqi',
        huruf: 'د (Dal)',
        alasanKaidah: 'Nun sukun (نْ) bertemu dengan huruf Dal (د)',
        caraMembaca: 'Dibaca samar dan dengung 2 harakat, ujung lidah bersiap menyentuh pangkal gigi seri atas tempat makhraj Dal.',
        keterangan: 'Tingkatan Ikhfa Aqrab (Dekat)'
      },
      {
        lafaz: 'قَلِيلٌ مِّنْهُمْ',
        ayatRujukan: 'Q.S. An-Nisā\': 66',
        hukum: 'Idgham Bighunnah',
        huruf: 'م (Mim)',
        alasanKaidah: 'Dhommatain (ـٌ) bertemu dengan huruf Mim berharakat tasydid (مّ)',
        caraMembaca: 'Suara tanwin dimasukkan ke huruf mim secara lebur disertai dengung 2 harakat: "qalīlum-minhum".',
        keterangan: 'Idgham Ma\'al Ghunnah'
      },
      {
        lafaz: 'مِّنْهُمْ',
        ayatRujukan: 'Q.S. An-Nisā\': 66',
        hukum: 'Idzhar Halqi',
        huruf: 'هـ (Ha)',
        alasanKaidah: 'Nun sukun (نْ) bertemu dengan huruf Ha (هـ)',
        caraMembaca: 'Bunyi huruf nun sukun dibaca jelas, murni dari ujung lidah tanpa ditahan atau didengungkan.',
        keterangan: 'Huruf Halqi (Pangkal Tenggorokan)'
      },
      {
        lafaz: 'خَيْرًا لَّهُمْ',
        ayatRujukan: 'Q.S. An-Nisā\': 66',
        hukum: 'Idgham Bilaghunnah',
        huruf: 'ل (Lam)',
        alasanKaidah: 'Fathatain (ـً) bertemu dengan huruf Lam berharakat tasydid (لّ)',
        caraMembaca: 'Suara tanwin langsung dileburkan ke dalam huruf lam tanpa dengung sedikit pun: "khairal-lahum".',
        keterangan: 'Melebur tanpa dengung'
      },
      {
        lafaz: 'تَثْبِيتًا',
        ayatRujukan: 'Q.S. An-Nisā\': 66 (Akhir Ayat)',
        hukum: 'Ikhfa Haqiqi',
        huruf: 'ت (Ta pada awal kata)',
        alasanKaidah: 'Fathatain pada kata sebelumnya (وَأَشَدَّ) tidak berakhiran tanwin, tetapi bila dihubungkan kata lain berlaku kaidah tajwid, sedangkan kata تَثْبِيتًا jika diwaqafkan berhukum Mad \'Iwadh.',
        caraMembaca: 'Dibaca mad 2 harakat saat waqaf menjadi "taṡbītā".',
        keterangan: 'Kaidah Akhir Ayat'
      },
      {
        lafaz: 'مِن بَلَدٍ',
        ayatRujukan: 'Hadis Cinta Makkah',
        hukum: 'Iqlab',
        huruf: 'ب (Ba)',
        alasanKaidah: 'Nun sukun (نْ) bertemu dengan huruf Ba (ب)',
        caraMembaca: 'Bunyi nun sukun ditukar menjadi suara mim tersembunyi disertai dengung 2 harakat: "mim-baladin".',
        keterangan: 'Contoh Kaidah Iqlab'
      },
      {
        lafaz: 'بَلَدٍ وَأَحَبَّكِ',
        ayatRujukan: 'Hadis Cinta Makkah',
        hukum: 'Idgham Bighunnah',
        huruf: 'و (Wawu)',
        alasanKaidah: 'Kasratain (ـٍ) bertemu dengan huruf Wawu (و)',
        caraMembaca: 'Suara tanwin dileburkan ke huruf wawu dengan dengung 2 harakat: "baladiw-wa aḥabbaki".',
        keterangan: 'Idgham Ma\'al Ghunnah'
      },
      {
        lafaz: 'مِن سَفَرٍ',
        ayatRujukan: 'Hadis Cinta Madinah',
        hukum: 'Ikhfa Haqiqi',
        huruf: 'س (Sin)',
        alasanKaidah: 'Nun sukun (نْ) bertemu dengan huruf Sin (س)',
        caraMembaca: 'Suara nun disamarkan menuju makhraj Sin dengan dengung 2 harakat: "min-safarin".',
        keterangan: 'Ikhfa Ausath'
      },
      {
        lafaz: 'سَفَرٍ فَنَظَرَ',
        ayatRujukan: 'Hadis Cinta Madinah',
        hukum: 'Ikhfa Haqiqi',
        huruf: 'ف (Fa)',
        alasanKaidah: 'Kasratain (ـٍ) bertemu dengan huruf Fa (ف)',
        caraMembaca: 'Suara tanwin kasrah disamarkan menuju Fa dengan dengung 2 harakat.',
        keterangan: 'Ikhfa Ausath'
      },
      {
        lafaz: 'عَلَى مَنْ حَارَبَ',
        ayatRujukan: 'Piagam Madinah',
        hukum: 'Idzhar Halqi',
        huruf: 'ح (Ha)',
        alasanKaidah: 'Nun sukun (نْ) bertemu dengan huruf Ha (ح)',
        caraMembaca: 'Suara nun dibaca jelas tanpa sengau dan tanpa dengung.',
        keterangan: 'Huruf Halqi (Tengah Tenggorokan)'
      },
      {
        lafaz: 'دُنْيَا',
        ayatRujukan: 'Contoh Kaidah Khusus',
        hukum: 'Idzhar Halqi',
        huruf: 'ي (Ya dalam satu kata)',
        alasanKaidah: 'Nun sukun bertemu huruf Ya dalam SATU KATA (Kalimah Wahidah)',
        caraMembaca: 'Wajib dibaca jelas "dunyā" dan dilarang dileburkan menjadi "duyyā" (Hukum Idzhar Mutlaq).',
        keterangan: 'Pengecualian Idzhar Mutlaq'
      }
    ]
  },

  panduan4Keterampilan: {
    membacaTartil: {
      pengertian:
        'Membaca Al-Qur\'an secara tartil adalah membaca perlahan, tenang, menyempurnakan makharijul huruf (tempat keluar huruf), menerapkan hukum tajwid secara konsisten, serta memahami waqaf dan ibtida\'. Hal ini sebagaimana firman Allah Swt.: "Wa rattilil-Qur\'āna tartīlā" (Q.S. Al-Muzzammil: 4).',
      pilarPenerapanTajwid: [
        {
          aspek: '1. Makharijul Huruf',
          deskripsi:
            'Ketepatan tempat keluarnya huruf hijaiyah dari rongga mulut (al-jauf), tenggorokan (al-halaq), lidah (al-lisan), dua bibir (as-syafatain), dan rongga hidung (al-khaisyum).',
          tipsPraktis:
            'Pastikan membedakan pengucapan huruf Halqi (ء, هـ, ع, ح, غ, خ) dari tempat asalnya di tenggorokan agar tidak tertukar saat membaca Idzhar.'
        },
        {
          aspek: '2. Sifat-Sifat Huruf',
          deskripsi:
            'Karakteristik bawaan huruf seperti Hams (berdesis), Jahr (tertahan napas), Syiddah (kuat), Rakhawah (lembut), Isti\'la (tebal terangkat), dan Istifal (tipis rendah).',
          tipsPraktis:
            'Saat membaca Ikhfa pada huruf isti\'la seperti Qaf (ق) dan Shad (ص), bunyikan dengung secara tebal (tafkhim), sedangkan pada huruf istifal bunyikan secara tipis (tarqiq).'
        },
        {
          aspek: '3. Durasi Ghunnah & Mad',
          deskripsi:
            'Ketepatan panjang harakat: Ghunnah ditahan 2 harakat (1 alif), Mad Thabi\'i 2 harakat, Mad Wajib 4-5 harakat, dan Mad Jaiz 2-4-5 harakat.',
          tipsPraktis:
            'Gunakan ayunan ketukan jari yang stabil untuk menakar 2 harakat saat membaca Idgham Bighunnah (qalīlum-minhum) dan Ikhfa (anfusakum).'
        },
        {
          aspek: '4. Waqaf dan Ibtida\'',
          deskripsi:
            'Keahlian berhenti pada tempat yang tidak merusak makna ayat serta memulai kembali bacaan secara sempurna.',
          tipsPraktis:
            'Pada Q.S. An-Nisā\': 66, terdapat tanda waqaf Jaiz (ۖ) pada lafaz "illā qalīlum minhum". Pembaca boleh berhenti dan boleh melanjutkan.'
        }
      ],
      adabMembaca: [
        'Berwudhu dan memastikan pakaian serta tempat suci dari hadas dan najis.',
        'Menghadap kiblat dengan posisi duduk penuh tawadhu\' dan khusyuk.',
        'Membaca Ta\'awudz (isti\'adzah) dan Basmalah sebelum memulai bacaan.',
        'Meresapi makna ayat tentang cinta tanah air sebagai motivasi berbakti kepada bangsa.',
        'Mengakhiri bacaan dengan doa tilawah: "Shadaqallāhul-\'Aẓīm".'
      ]
    },

    menghafalCepat: {
      metode: 'Metode Tikrar (Pengulangan Terstruktur 3x3)',
      langkahLangkah: [
        'Tahap 1: Membaca potongan ayat ke-1 sebanyak 10 kali sambil melihat mushaf dengan tajwid yang sempurna.',
        'Tahap 2: Menutup mushaf dan melafalkan potongan ayat ke-1 sebanyak 7 kali dari memori.',
        'Tahap 3: Melanjutkan ke potongan ayat ke-2 dengan pola yang sama, lalu menggabungkan potongan ke-1 dan ke-2 sebanyak 5 kali.',
        'Tahap 4: Mengulang keseluruhan ayat dari awal hingga akhir sebanyak 10 kali tanpa melihat mushaf.'
      ],
      targetHafalanBertahap: [
        {
          tahap: 'Blok A (Awal Ayat)',
          potonganAyat: 'وَلَوْ أَنَّا كَتَبْنَا عَلَيْهِمْ أَنِ اقْتُلُوا أَنفُسَكُمْ أَوِ اخْرُجُوا مِن دِيَارِكُم',
          fokusLatihan: 'Perhatikan Ikhfa Haqiqi pada "anfusakum" dan "min diyārikum".'
        },
        {
          tahap: 'Blok B (Tengah Ayat)',
          potonganAyat: 'مَّا فَعَلُوهُ إِلَّا قَلِيلٌ مِّنْهُمْ',
          fokusLatihan: 'Perhatikan Idgham Bighunnah "qalīlum minhum" dan Idzhar Halqi pada "minhum".'
        },
        {
          tahap: 'Blok C (Akhir Ayat)',
          potonganAyat: 'وَلَوْ أَنَّهُمْ فَعَلُوا مَا يُوعَظُونَ بِهِ لَكَانَ خَيْرًا لَّهُمْ وَأَشَدَّ تَثْبِيتًا',
          fokusLatihan: 'Perhatikan Idgham Bilaghunnah pada "khairal lahum" dan Mad \'Iwadh pada "taṡbītā".'
        }
      ],
      tipsMurajaah:
        'Gunakan hafalan Q.S. An-Nisā\': 66 ini sebagai bacaan surat pendek saat mendirikan shalat fardhu atau shalat sunnah dhuha dan tahajud agar hafalan melekat kuat dalam ingatan jangka panjang.'
    },

    menulisKhatKaidah: {
      kaidahPenulisan: [
        'Gunakan kaidah Khat Naskhi (khat standar penulisan mushaf Al-Qur\'an dan buku pelajaran).',
        'Tuliskan teks Arab dari kanan ke kiri dengan sudut kemiringan pena yang konsisten.',
        'Perhatikan keseimbangan huruf besar-kecil dan jarak spasi antar-kata (tidak terlalu rapat dan tidak terlalu renggang).',
        'Tuliskan harakat secara lengkap (fathah, kasrah, dhommah, sukun, tasydid, dan tanwin) tepat di atas atau di bawah huruf yang bersangkutan.'
      ],
      hurufPentingGaris: [
        {
          posisi: 'Huruf di Atas Garis Dasar (Mustaqir \'alal-Khath)',
          huruf: 'ا (Alif), ب (Ba), ت (Ta), ث (Tsa), ط (Tha), ظ (Zha), ك (Kaf), هـ (Ha)',
          aturan: 'Seluruh badan huruf bertumpu sejajar di atas garis buku tulis.'
        },
        {
          posisi: 'Huruf Menembus ke Bawah Garis (Hābith \'anil-Khath)',
          huruf: 'ر (Ra), ز (Zay), و (Wawu), ن (Nun), م (Mim), ي (Ya), ل (Lam), ق (Qaf), ج (Jim), ح (Ha), خ (Kha)',
          aturan: 'Sebagian ekor atau lengkungan huruf meluncur ke bawah garis buku tulis.'
        }
      ],
      latihanMenulis:
        'Salinlah lafaz "وَلَوْ أَنَّهُمْ فَعَلُوا مَا يُوعَظُونَ بِهِ لَكَانَ خَيْرًا لَّهُمْ وَأَشَدَّ تَثْبِيتًا" ke dalam buku tugasmu dengan pena kaligrafi sebanyak 3 kali secara rapi.'
    },

    menjelaskanRefleksiKebangsaan: {
      konsepDasar:
        'Konsep Cinta Tanah Air (Hubbul Wathan) dalam perspektif Islam dibangun di atas pilar iman, moralitas, dan kemaslahatan bersama. Mencintai tanah air bukan chauvinisme (membanggakan bangsa secara membabi buta), melainkan wujud rasa syukur atas nikmat tanah air yang aman sentosa.',
      dimensiCintaTanahAir: [
        {
          ranah: '1. Ranah Spiritual & Doa',
          contohPerilaku:
            'Mendoakan keselamatan para pemimpin bangsa dan keamanan negeri seperti doa Nabi Ibrahim a.s. dalam Q.S. Al-Baqarah: 126 ("Rabbi ij\'al hāżā baladan āminan").'
        },
        {
          ranah: '2. Ranah Integritas & Ketaatan Hukum',
          contohPerilaku:
            'Menjadi warga negara yang taat hukum, tidak menyebarkan berita bohong (hoaks), menolak korupsi, dan menjaga fasilitas umum sekolah dan masyarakat.'
        },
        {
          ranah: '3. Ranah Toleransi & Persatuan',
          contohPerilaku:
            'Menghargai keragaman suku, ras, dan agama di Indonesia (semboyan Bhinneka Tunggal Ika) serta menolak diskriminasi sesuai teladan Piagam Madinah.'
        },
        {
          ranah: '4. Ranah Prestasi & Karya Nyata',
          contohPerilaku:
            'Belajar sungguh-sungguh untuk menguasai sains dan teknologi agar bangsa Indonesia maju dan tidak bergantung pada negara asing.'
        },
        {
          ranah: '5. Ranah Ekologis & Lingkungan',
          contohPerilaku:
            'Menjaga kebersihan alam Indonesia, tidak membuang sampah sembarangan, menghemat air dan energi, serta aktif dalam penghijauan.'
        }
      ],
      studiKasusKebangsaan: [
        {
          judul: 'Kasus 1: Fenomena Hujatan di Media Sosial terhadap Bangsa Sendiri',
          kasus:
            'Seorang remaja sering membuat konten video yang merendahkan budaya dan kondisi negara Indonesia dengan kata-kata kasar hanya demi viral di media sosial.',
          solusiIslam:
            'Islam mengajarkan tabayyun dan nasihat dengan hikmah. Menghina tanah air sendiri adalah bentuk pengingkaran nikmat. Kritik terhadap kekurangan bangsa harus disampaikan secara santun, beradab, dan disertai ide solusi perbaikan konkret.'
        },
        {
          judul: 'Kasus 2: Menolak Gotong Royong dan Merusak Fasilitas Umum',
          kasus:
            'Sekelompok pemuda melakukan aksi vandalisme (coret-coret tembok) halte bus dan menolak ketika diajak kerja bakti membersihkan saluran air kampung.',
          solusiIslam:
            'Rasulullah Saw. menegaskan bahwa menyingkirkan duri dan kotoran dari jalan adalah salah satu cabang keimanan (syu\'abul iman). Merusak fasilitas publik termasuk perbuatan zalim (fasad fil-ardh) yang dilarang keras dalam Q.S. Al-A\'raf: 56.'
        },
        {
          judul: 'Kasus 3: Sikap Eksklusif terhadap Teman Berbeda Suku atau Agama',
          kasus:
            'Di kelas VIII, ada siswa pindahan dari daerah terpencil yang berbeda logat bicara dan adat istiadat, lalu dijauhi dan dijadikan bahan tertawaan teman-temannya.',
          solusiIslam:
            'Sikap ini bertentangan dengan Q.S. Al-Hujurat: 13 dan Piagam Madinah. Pelajar muslim sejati wajib merangkul sesama anak bangsa, saling mengenal (lita\'arafu), dan menunjukkan ukhuwah wathaniyah (persaudaraan sebangsa).'
        }
      ]
    }
  },

  hikmahCintaTanahAir: {
    hikmahUtama: [
      {
        poin: '1. Mewujudkan Ketenangan dan Kekhusyukan dalam Beribadah',
        penjelasan:
          'Negara yang aman dan damai memungkinkan umat Islam dan penganut agama lainnya menjalankan ibadah, mendirikan masjid, dan mendidik anak-anak tanpa rasa takut akan desingan peluru atau ancaman perang.',
        dalilPendukung: 'Q.S. Quraisy: 3-4 (Memberi mereka makan dari kelaparan dan mengamankan mereka dari rasa takut).'
      },
      {
        poin: '2. Memperkokoh Ketahanan dan Kedaulatan Bangsa',
        penjelasan:
          'Rasa cinta tanah air melahirkan semangat rela berkorban (patriotisme) untuk mempertahankan kedaulatan wilayah dari ancaman separatisme, penjajahan modern, maupun intervensi asing.',
        dalilPendukung: 'UUD 1945 Pasal 30 ayat 1 dan Q.S. Al-Anfal: 60.'
      },
      {
        poin: '3. Menghargai dan Melestarikan Jasa Para Pahlawan Kemerdekaan',
        penjelasan:
          'Kemerdekaan Indonesia diraih dengan darah, air mata, dan doa para ulama serta syuhada bangsa. Mencintai tanah air adalah wujud balas budi dan penghormatan kepada pengorbanan mereka.',
        dalilPendukung: 'H.R. Abu Dawud ("Tidak bersyukur kepada Allah orang yang tidak berterima kasih kepada manusia").'
      },
      {
        poin: '4. Mempererat Tali Persaudaraan Kebangsaan (Ukhuwah Wathaniyah)',
        penjelasan:
          'Perbedaan suku, budaya, bahasa daerah, dan tradisi diikat oleh rasa cinta pada satu tanah air Indonesia, sehingga mencegah friksi horizontal dan adu domba.',
        dalilPendukung: 'Piagam Madinah Pasal 1 & 25.'
      },
      {
        poin: '5. Mendorong Kemajuan Sains, Ekonomi, dan Peradaban',
        penjelasan:
          'Pemuda yang mencintai negerinya akan terpacu untuk berprestasi, berinovasi, dan bekerja keras agar bangsanya dihormati dan disegani dalam percaturan global.',
        dalilPendukung: 'Q.S. Ar-Ra\'d: 11 (Allah tidak akan mengubah nasib suatu kaum hingga mereka mengubah diri mereka sendiri).'
      },
      {
        poin: '6. Menjaga Kelestarian Alam dan Lingkungan Nusantara',
        penjelasan:
          'Tanah air yang subur, hutan tropis, laut, dan tambang adalah amanah Allah yang harus dijaga dari eksploitasi serakah demi keberlangsungan generasi masa depan.',
        dalilPendukung: 'Q.S. Ar-Rum: 41.'
      }
    ],

    matriksPerilakuPelajar: [
      {
        lingkungan: 'A. Di Lingkungan Sekolah',
        tindakanNyata: [
          'Mengikuti upacara bendera hari Senin dan peringatan hari besar nasional dengan khidmat dan tertib.',
          'Menjaga kebersihan ruang kelas, taman sekolah, toilet, dan sarana ibadah mushaf mushalla.',
          'Menghargai bapak/ibu guru dan tidak membeda-bedakan teman berdasarkan asal daerah atau status sosial.',
          'Belajar dengan tekun untuk meraih prestasi akademik maupun ekstrakurikuler demi mengharumkan nama almamater dan bangsa.'
        ]
      },
      {
        lingkungan: 'B. Di Lingkungan Keluarga & Masyarakat',
        tindakanNyata: [
          'Aktif mengikuti kegiatan gotong royong warga, kerja bakti kebersihan RT/RW, dan poskamling.',
          'Menghormati tetangga yang berbeda agama saat mereka merayakan hari besar keagamaannya.',
          'Membeli dan mencintai produk-produk lokal buatan UMKM Indonesia untuk menggerakkan ekonomi rakyat.',
          'Menjaga ketertiban berlalu lintas dan mematuhi rambu-rambu hukum di jalan raya.'
        ]
      },
      {
        lingkungan: 'C. Di Ruang Digital & Media Sosial',
        tindakanNyata: [
          'Menyaring informasi sebelum menyebarkannya (saring sebelum sharing) agar terhindar dari hoaks dan fitnah.',
          'Menggunakan bahasa Indonesia yang baik, santun, dan tidak menebarkan ujaran kebencian (hate speech).',
          'Mempromosikan keindahan alam, kekayaan budaya, dan kuliner nusantara ke panggung internasional.',
          'Memanfaatkan internet untuk belajar dan berkarya positif, bukan untuk kecanduan game terlarang atau judi online.'
        ]
      }
    ],

    refleksiDiri: [
      {
        indikator: '1. Khidmat Mengikuti Upacara',
        deskripsi: 'Saya selalu mengikuti upacara bendera dengan sikap sempurna dan penuh penghormatan terhadap Sang Saka Merah Putih.'
      },
      {
        indikator: '2. Membaca Al-Qur\'an Berkaidah Tajwid',
        deskripsi: 'Saya membiasakan membaca Q.S. An-Nisā\': 66 dan ayat-ayat Al-Qur\'an dengan memperhatikan hukum nun sukun dan tanwin secara tartil.'
      },
      {
        indikator: '3. Menolak Ujaran Kebencian & Hoaks',
        deskripsi: 'Saya tidak pernah membagikan berita yang belum jelas kebenarannya dan tidak mencaci sesama warga bangsa di media sosial.'
      },
      {
        indikator: '4. Menjaga Kebersihan Fasilitas Publik',
        deskripsi: 'Saya selalu membuang sampah pada tempatnya dan merawat fasilitas umum yang ada di sekitar tempat tinggal saya.'
      },
      {
        indikator: '5. Menghargai Keragaman Nusantara',
        deskripsi: 'Saya memiliki teman dari berbagai latar belakang suku, bahasa, dan agama tanpa pernah merendahkan mereka.'
      },
      {
        indikator: '6. Berprestasi demi Bangsa',
        deskripsi: 'Saya bertekad belajar sungguh-sungguh agar kelak ilmunya dapat bermanfaat bagi kemajuan bangsa dan negara Indonesia.'
      },
      {
        indikator: '7. Bangga Produk Lokal',
        deskripsi: 'Saya merasa bangga memakai baju batik, kerajinan lokal, dan produk karya anak bangsa Indonesia.'
      },
      {
        indikator: '8. Mendoakan Kesejahteraan Negeri',
        deskripsi: 'Saya senantiasa menyisipkan doa setelah shalat fardhu memohon agar negara Indonesia selalu aman, damai, dan dilindungi Allah Swt.'
      }
    ]
  },

  kuisHots: [
    {
      id: 'k8-bab6-soal-1',
      nomor: 1,
      kasus:
        'Dalam Q.S. An-Nisā\' ayat 66, Allah Swt. berfirman: "وَلَوْ أَنَّا كَتَبْنَا عَلَيْهِمْ أَنِ اقْتُلُوا أَنفُسَكُمْ أَوِ اخْرُجُوا مِن دِيَارِكُم مَّا فَعَلُوهُ إِلَّا قَلِيلٌ مِّنْهُمْ...". Dalam ayat ini terdapat penyandingan antara perintah "membunuh diri / berkorban jiwa" dengan "keluar dari kampung halaman".',
      pertanyaan:
        'Berdasarkan tinjauan tafsir para mufassir, apa pesan utama yang terkandung dari penyandingan dua perintah berat tersebut dalam kaitannya dengan cinta tanah air?',
      pilihan: [
        'A. Bahwa mengorbankan nyawa jauh lebih mudah daripada meninggalkan kampung halaman tempat kelahiran.',
        'B. Bahwa rasa sakit meninggalkan kampung halaman setara dengan kehilangan jiwa raga, membuktikan bahwa cinta tanah air adalah fitrah suci manusia yang diakui syariat Islam.',
        'C. Perintah bahwa setiap mukmin diwajibkan untuk berpindah-pindah tempat tinggal dan dilarang menetap di satu negeri saja.',
        'D. Larangan bagi seorang mukmin untuk membela tanah airnya karena urusan kenegaraan terpisah dari urusan agama.'
      ],
      kunciJawaban: 1,
      pembahasan:
        'Penyandingan antara "aniqtulū anfusakum" (korbankan jiwamu) dengan "awikhrujū min diyārikum" (keluarlah dari kampung halamanmu) menunjukkan bahwa berpisah dari tanah air memiliki penderitaan batin yang menyamai kematian fisik. Ini menjadi dalil teologis bahwa cinta tanah air (Hubbul Wathan) adalah tabiat fitrah manusia yang dilegitimasi dalam Islam.'
    },
    {
      id: 'k8-bab6-soal-2',
      nomor: 2,
      kasus:
        'Perhatikan kutipan lafaz-lafaz berikut ini:\n(1) أَنفُسَكُمْ\n(2) قَلِيلٌ مِّنْهُمْ\n(3) مِّنْهُمْ\n(4) خَيْرًا لَّهُمْ',
      pertanyaan:
        'Urutan hukum tajwid nun sukun dan tanwin yang tepat secara berturut-turut pada keempat lafaz di atas adalah...',
      pilihan: [
        'A. (1) Idzhar Halqi, (2) Idgham Bighunnah, (3) Ikhfa Haqiqi, (4) Idgham Bilaghunnah',
        'B. (1) Ikhfa Haqiqi, (2) Idgham Bilaghunnah, (3) Idzhar Halqi, (4) Idgham Bighunnah',
        'C. (1) Ikhfa Haqiqi, (2) Idgham Bighunnah, (3) Idzhar Halqi, (4) Idgham Bilaghunnah',
        'D. (1) Iqlab, (2) Idgham Bighunnah, (3) Idgham Bilaghunnah, (4) Ikhfa Haqiqi'
      ],
      kunciJawaban: 2,
      pembahasan:
        'Analisis: (1) أَنفُسَكُمْ = Nun sukun bertemu Fa (ف) -> Ikhfa Haqiqi; (2) قَلِيلٌ مِّنْهُمْ = Tanwin dhommah bertemu Mim (م) -> Idgham Bighunnah; (3) مِّنْهُمْ = Nun sukun bertemu Ha (هـ) -> Idzhar Halqi; (4) خَيْرًا لَّهُمْ = Tanwin fathah bertemu Lam (ل) -> Idgham Bilaghunnah. Maka urutan yang benar adalah C.'
    },
    {
      id: 'k8-bab6-soal-3',
      nomor: 3,
      kasus:
        'Seseorang membaca lafaz "دُنْيَا" (dunyā) dan "بُنْيَانٌ" (bunyānun) dalam Al-Qur\'an dengan meleburkan suara nun sukun menjadi "duyyā" dan "buyyānun" dengan alasan nun sukun bertemu huruf Ya (ي) yang merupakan huruf Idgham Bighunnah.',
      pertanyaan:
        'Bagaimanakah penilaian yang benar menurut kaidah ilmu tajwid terhadap bacaan orang tersebut?',
      pilihan: [
        'A. Benar, karena huruf Ya adalah salah satu dari empat huruf Idgham Bighunnah (Yanmu).',
        'B. Salah, karena jika nun sukun bertemu huruf Idgham dalam satu kata, hukumnya menjadi Idzhar Mutlaq (wajib dibaca jelas) agar maknanya tidak rusak.',
        'C. Boleh memilih antara membaca jelas atau melebur karena ada perbedaan mazhab qira\'at.',
        'D. Harus dibaca Iqlab dengan menukar suara nun menjadi mim berharakat kasrah.'
      ],
      kunciJawaban: 1,
      pembahasan:
        'Kaidah Idgham Bighunnah mensyaratkan pertemuan nun sukun dan huruf idgham terjadi dalam DUA KATA yang terpisah. Jika terjadi dalam SATU KATA (seperti dunya, bunyan, qinwan, sinwan), hukumnya dinamakan Idzhar Wajib / Idzhar Mutlaq dan wajib dibaca jelas tanpa dengung.'
    },
    {
      id: 'k8-bab6-soal-4',
      nomor: 4,
      kasus:
        'Dalam hadis riwayat Al-Bukhari No. 1886 disebutkan bahwa ketika Rasulullah Saw. kembali dari suatu bepergian dan melihat dinding-dinding kota Madinah, beliau mempercepat langkah untanya karena kecintaan beliau terhadap Madinah. Al-Hafizh Ibnu Hajar Al-Asqalani menyatakan bahwa hadis ini dalil disyariatkannya mencintai tanah air.',
      pertanyaan:
        'Bagaimana bentuk implementasi konkret yang paling tepat bagi seorang pelajar muslim SMP masa kini dalam meneladani hadis tersebut?',
      pilihan: [
        'A. Selalu berpergian ke luar negeri dan enggan menetap di kota kelahirannya sendiri.',
        'B. Mengutamakan bepergian dengan menunggang unta dibanding menggunakan kendaraan bermotor.',
        'C. Bersungguh-sungguh menuntut ilmu di sekolah dan bertekad kembali mengabdi untuk memajukan daerah serta bangsa tercinta.',
        'D. Membatasi pergaulan hanya dengan teman-teman yang berasal dari suku yang sama saja.'
      ],
      kunciJawaban: 2,
      pembahasan:
        'Meneladani kerinduan dan kecintaan Rasulullah Saw. terhadap tempat pengabdiannya diwujudkan oleh pelajar dengan tekun belajar, meraih kompetensi tinggi, dan kembali berkontribusi memajukan daerah serta bangsa Indonesia.'
    },
    {
      id: 'k8-bab6-soal-5',
      nomor: 5,
      kasus:
        'Di sebuah grup media sosial sekolah, beredar pesan berantai bernada provokatif yang mengajak para siswa untuk merusak fasilitas pos kamling warga dan mencela aparat negara karena isu yang belum terbukti kebenarannya.',
      pertanyaan:
        'Sikap yang paling mencerminkan pengamalan pesan Q.S. An-Nisā\' [4]: 66 ("wa lau annahum fa\'alū mā yū\'aẓūna bihī...") dan nilai kebangsaan adalah...',
      pilihan: [
        'A. Langsung meneruskan pesan tersebut ke grup kelas lain agar viral dan mendapat banyak tanggapan.',
        'B. Ikut serta dalam aksi pengrusakan karena solidaritas antarteman di atas segalanya.',
        'C. Melakukan tabayyun (klarifikasi), menolak ajakan provokatif secara tegas, mengingatkan teman dengan santun, serta menjaga ketertiban masyarakat.',
        'D. Keluar dari grup dan memusuhi seluruh anggota grup tanpa memberikan nasihat atau klarifikasi.'
      ],
      kunciJawaban: 2,
      pembahasan:
        'Potongan ayat "wa lau annahum fa\'alū mā yū\'aẓūna bihī lakāna khairal lahum wa asyadda taṡbītā" mengajarkan bahwa ketaatan pada nasihat kebaikan dan syariat akan membawa kemaslahatan dan keteguhan iman. Menolak provokasi, melakukan tabayyun, serta menjaga fasilitas umum adalah wujud nyata pelajar berkarakter cinta tanah air.'
    }
  ]
};
