export interface NabiRasulItem {
  urutan: number;
  nama: string;
  namaArab: string;
  gelar?: string;
  masaHidup: string;
  kaumTempat: string;
  mukjizatKeistimewaan: string;
  isUlulAzmi: boolean;
  sebutanAlQuran: string;
}

export interface RasulUlulAzmiDetail {
  nama: string;
  namaArab: string;
  urutanUlulAzmi: number;
  artiNamaGelar: string;
  bentukKetabahanLuarBiasa: string;
  mukjizatUtama: string[];
  dalilAlQuran: string;
  teladanUntukPelajar: string;
}

export interface SifatRasulItem {
  kategori: 'Wajib' | 'Mustahil' | 'Jaiz';
  namaArab: string;
  namaLatin: string;
  arti: string;
  lawanSifat?: string;
  dalilQuran: {
    surahAyat: string;
    teksArab: string;
    terjemah: string;
  };
  penjelasanMendalam: string;
  contohPenerapanPelajar: string;
}

export interface TugasRasulItem {
  id: string;
  judulTugas: string;
  istilahArab: string;
  artiSingkat: string;
  dalilRujukan: {
    surahAyat: string;
    teksArab: string;
    terjemah: string;
  };
  penjabaranTugas: string;
  relevansiKehidupanSiswa: string;
}

export interface ContohKeteladananItem {
  id: string;
  tokohRasul: string;
  sikapTeladan: string;
  kisahInspiratif: string;
  nilaiKarakterUtama: string;
  konteksPelajarMasaKini: string;
}

export interface HikmahBerimanItem {
  id: string;
  nomor: number;
  judulHikmah: string;
  penjelasan: string;
  dalilPendukung: string;
  dampakPerilakuPositif: string;
}

export interface SoalHotsBab7Kelas8 {
  id: string;
  nomor: number;
  stimulus: string;
  pertanyaan: string;
  pilihan: string[];
  kunciJawaban: number;
  pembahasan: string;
}

export interface MateriKelas8Sem2Bab7 {
  babNumber: number;
  judulBab: string;
  subJudul: string;
  elemenCp: string;
  fase: string;
  semester: string;
  pengantar: {
    apersepsi: string;
    tujuanPembelajaran: string[];
    maknaPentingAkidah: string;
  };
  pengertianImanRasul: {
    secaraBahasa: string;
    secaraIstilah: string;
    rukunImanKeempat: string;
    tigaTingkatIman: {
      tahap: string;
      istilahArab: string;
      uraian: string;
    }[];
    perbedaanNabiDanRasul: {
      aspek: string;
      nabi: string;
      rasul: string;
    }[];
    jumlahNabiDanRasul: {
      keterangan: string;
      haditsRiwayat: string;
    };
  };
  dalilImanKepadaRasul: {
    dalilQuran: {
      surah: string;
      ayat: string;
      teksArab: string;
      transliterasi: string;
      terjemah: string;
      kandunganMakna: string;
    }[];
    dalilHadits: {
      judul: string;
      perawi: string;
      matanArab: string;
      transliterasi: string;
      terjemah: string;
      syarah: string;
    }[];
  };
  namaNamaRasul: {
    daftar25NabiRasul: NabiRasulItem[];
    rasulUlulAzmi: {
      pengertian: string;
      dalilAlQuran: string;
      singkatanMnemonic: string;
      daftarTokoh: RasulUlulAzmiDetail[];
    };
  };
  tugasTugasRasul: TugasRasulItem[];
  sifatSifatRasul: {
    pengantar: string;
    sifatWajib: SifatRasulItem[];
    sifatMustahil: SifatRasulItem[];
    sifatJaiz: SifatRasulItem;
  };
  contohKeteladanan: {
    pengantar: string;
    daftarTeladan: ContohKeteladananItem[];
    studiKasusEtikaPelajar: {
      judulKasus: string;
      deskripsiMasalah: string;
      analisisNilaiKeteladanan: string;
      solusiKarakterIslami: string;
    }[];
  };
  hikmahBerimanKepadaRasul: HikmahBerimanItem[];
  refleksiKarakter: {
    dimensi: string;
    indikator: string;
    pertanyaanMuhasabah: string;
  }[];
  soalEvaluasiHots: SoalHotsBab7Kelas8[];
}

export const MATERI_KELAS_8_SEM_2_BAB_7: MateriKelas8Sem2Bab7 = {
  babNumber: 7,
  judulBab: 'Meyakini dan Merefleksikan Iman kepada Para Rasul Allah Swt.',
  subJudul: 'Hakikat Keimanan, 25 Nabi & Rasul, 5 Rasul Ulul Azmi, Sifat Wajib-Mustahil-Jaiz, Tugas Mulia, Keteladanan Akhlak, & Hikmah Kehidupan',
  elemenCp: 'Akidah (Keimanan kepada Para Rasul Allah Swt.)',
  fase: 'Fase D (SMP/MTs Kelas VIII Semester Genap)',
  semester: 'Semester 2 (Genap)',
  pengantar: {
    apersepsi:
      'Manusia diciptakan oleh Allah Swt. dibekali akal fikiran dan hawa nafsu. Tanpa bimbingan wahyu dan panutan yang nyata, akal manusia terbatas untuk mengetahui hakikat ketuhanan, tata cara peribadatan yang benar, serta jalan menuju kebahagiaan sejati di akhirat. Oleh karena itu, dari sifat Maha Pengasih dan Penyayang-Nya, Allah Swt. mengutus para rasul dari kalangan manusia sendiri sebagai pembawa petunjuk, teladan budi pekerti luhur, dan penyelamat umat dari kegelapan kebodohan menuju cahaya keimanan.',
    tujuanPembelajaran: [
      'Memahami dan menjelaskan pengertian iman kepada para rasul Allah Swt. secara bahasa maupun istilah syariat dengan tepat.',
      'Menganalisis dalil-dalil naqli Al-Qur\'an dan Hadis shahih tentang kewajiban beriman kepada para rasul Allah Swt.',
      'Menyebutkan dan mengidentifikasi 25 nama nabi dan rasul yang wajib diketahui serta keistimewaan 5 Rasul Ulul Azmi.',
      'Menelaah 5 tugas utama rasul serta mengklasifikasikan 4 sifat wajib, 4 sifat mustahil, dan 1 sifat jaiz bagi para rasul.',
      'Menunjukkan contoh keteladanan para rasul dalam kehidupan bermasyarakat dan akademik pelajar masa kini.',
      'Menghayati 6 hikmah beriman kepada rasul serta merefleksikannya dalam instrumen muhasabah karakter diri sehari-hari.'
    ],
    maknaPentingAkidah:
      'Beriman kepada para rasul merupakan Rukun Iman yang ke-4. Mengingkari kenabian dan kerasulan salah seorang rasul sama halnya dengan mengingkari seluruh ajaran tauhid dan merusak keabsahan iman seorang muslim.'
  },
  pengertianImanRasul: {
    secaraBahasa:
      'Secara etimologi (bahasa Arab), kata "Iman" (الإيمان) berasal dari kata amana - yu\'minu - imanan yang berarti meyakini, mempercayai, atau membenarkan. Sedangkan kata "Rasul" (الرسول) berakar dari kata arsala - yursilu yang berarti orang yang diutus, utusan, atau duta pengemban risalah penting.',
    secaraIstilah:
      'Secara terminologi syariat Islam, beriman kepada rasul Allah Swt. adalah meyakini dengan sepenuh hati bahwa Allah Swt. telah memilih laki-laki merdeka dari kalangan hamba-hamba-Nya untuk menerima wahyu yang berisi hukum syariat dan perintah agama, serta mendapat mandat ilahi untuk menyampaikan (mentablighkan) wahyu tersebut kepada umat manusia sebagai pedoman hidup.',
    rukunImanKeempat:
      'Kedudukan iman kepada rasul menempati urutan ke-4 dalam rukun iman setelah iman kepada Allah, malaikat-Nya, dan kitab-kitab-Nya. Tanpa perantara para rasul, manusia tidak akan pernah mengetahui syariat Al-Qur\'an, rincian hukum halal-haram, cara mendirikan shalat, maupun gambaran alam barzakh dan hari pembalasan.',
    tigaTingkatIman: [
      {
        tahap: 'Tashdīq bil Qalbi (Keyakinan Hati)',
        istilahArab: 'تصديق بالقلب',
        uraian: 'Meyakini tanpa setitik ragu pun bahwa para rasul adalah manusia pilihan yang ma\'shum (terpelihara dari dosa besar dan kesalahan penyampaian wahyu), berakhlak mulia, dan benar-benar utusan Allah Swt.'
      },
      {
        tahap: 'Iqrār bil Lisān (Pengakuan Lisan)',
        istilahArab: 'إقرار باللسان',
        uraian: 'Mengucapkan dua kalimah syahadat, memuji para rasul, bershalawat kepada Nabi Muhammad Saw., dan tidak membeda-bedakan kewajiban beriman kepada satu rasul dengan rasul lainnya.'
      },
      {
        tahap: '\'Amal bil Arkān (Pengamalan Anggota Badan)',
        istilahArab: 'عمل بالأركان',
        uraian: 'Mentaati segala petunjuk syariat yang dibawa rasul, meneladani sunnah-sunnahnya, dan menjadikannya role model (uswatun hasanah) dalam ucapan, sikap, pergaulan, serta ketaatan ibadah.'
      }
    ],
    perbedaanNabiDanRasul: [
      {
        aspek: 'Penerimaan Wahyu',
        nabi: 'Menerima wahyu dari Allah Swt. melalui malaikat Jibril atau ilham untuk dirinya sendiri dan kaumnya.',
        rasul: 'Menerima wahyu dari Allah Swt. dan syariat baru (atau pembaharuan kitab suci) dari Allah Swt.'
      },
      {
        aspek: 'Kewajiban Tabligh (Menyampaikan)',
        nabi: 'Tidak diwajibkan menyebarkan risalah kepada umat/kaum yang menentang secara luas; bertugas membimbing umat yang sudah beriman pada syariat rasul sebelumnya.',
        rasul: 'Wajib menyampaikan (tabligh) dan memperjuangkan risalah wahyu kepada umatnya yang ingkar dan menentang.'
      },
      {
        aspek: 'Kitab Suci / Shuhuf Baru',
        nabi: 'Tidak selalu membawa kitab suci baru; melanjutkan penerapan hukum kitab yang diturunkan kepada rasul sebelumnya (contoh: para nabi Bani Israil yang mengamalkan Taurat).',
        rasul: 'Membawa syariat baru, shuhuf, atau kitab suci penyempurna (seperti Zabur, Taurat, Injil, dan Al-Qur\'an).'
      },
      {
        aspek: 'Tingkatan & Hubungan Keduanya',
        nabi: 'Setiap rasul pasti adalah nabi, namun setiap nabi belum tentu seorang rasul.',
        rasul: 'Memiliki kedudukan lebih tinggi dan memikul beban perjuangan dakwah yang lebih berat menghadapi penentangan umat.'
      },
      {
        aspek: 'Kondisi Umat yang Dihadapi',
        nabi: 'Diutus kepada kaum yang umumnya telah mengenal tauhid atau meneruskan kepemimpinan spiritual pendahulunya.',
        rasul: 'Diutus kepada kaum yang kafir, musyrik, tenggelam dalam kesesatan moral, atau menolak tauhid secara keras.'
      }
    ],
    jumlahNabiDanRasul: {
      keterangan:
        'Jumlah nabi dan rasul yang diutus Allah Swt. sangatlah banyak sepanjang sejarah manusia. Namun, yang disebutkan namanya secara eksplisit dan wajib diimani secara terperinci (tafshili) dalam Al-Qur\'an berjumlah 25 orang.',
      haditsRiwayat:
        'Diriwayatkan dari sahabat Abu Dzar Al-Ghifari r.a., Rasulullah Saw. pernah ditanya tentang jumlah para nabi dan rasul: "Wahai Rasulullah, berapakah jumlah para nabi?" Beliau menjawab: "124.000 orang nabi, dan di antara mereka yang menjadi rasul berjumlah 313 atau 315 orang, suatu rombongan yang besar." (H.R. Ahmad, Ibnu Hibban, dan Ath-Thabarani).'
    }
  },
  dalilImanKepadaRasul: {
    dalilQuran: [
      {
        surah: 'Q.S. An-Nisā\' [4]',
        ayat: 'Ayat 136',
        teksArab: 'يٰٓاَيُّهَا الَّذِيْنَ اٰمَنُوْٓا اٰمِنُوْا بِاللّٰهِ وَرَسُوْلِهٖ وَالْكِتٰبِ الَّذِيْ نَزَّلَ عَلٰى رَسُوْلِهٖ وَالْكِتٰبِ الَّذِيْٓ اَنْزَلَ مِنْ قَبْلُ ۗ وَمَنْ يَّكْفُرْ بِاللّٰهِ وَمَلٰۤىِٕكَتِهٖ وَكُتُبِهٖ وَرُسُلِهٖ وَالْيَوْمِ الْاٰخِرِ فَقَدْ ضَلَّ ضَلٰلًاۢ بَعِيْدًا',
        transliterasi: 'Yā ayyuhallażīna āmanū āminū billāhi wa rasūlihī wal-kitābilladżī nazzala \'alā rasūlihī wal-kitābilladżī anzala min qabl, wa may yakfur billāhi wa malā\'ikatihī wa kutubihī wa rusulihī wal-yaumil-ākhiri faqad dalla dalālam ba\'īdā.',
        terjemah: 'Wahai orang-orang yang beriman! Tetaplah beriman kepada Allah dan Rasul-Nya (Muhammad) dan kepada Kitab (Al-Qur\'an) yang diturunkan kepada Rasul-Nya, serta kitab yang diturunkan sebelumnya. Barangsiapa ingkar kepada Allah, malaikat-malaikat-Nya, kitab-kitab-Nya, rasul-rasul-Nya, dan hari kemudian, maka sungguh, orang itu telah tersesat sangat jauh.',
        kandunganMakna: 'Ayat ini menegaskan perintah mutlak untuk terus memperbarui dan memelihara keimanan kepada Allah, Rasul-Nya, dan seluruh rasul terdahulu. Orang yang mengingkari para rasul divonis telah tersesat sejauh-jauhnya dari jalan kebenaran.'
      },
      {
        surah: 'Q.S. Al-An\'ām [6]',
        ayat: 'Ayat 48',
        teksArab: 'وَمَا نُرْسِلُ الْمُرْسَلِيْنَ اِلَّا مُبَشِّرِيْنَ وَمُنْذِرِيْنَ ۚ فَمَنْ اٰمَنَ وَاَصْلَحَ فَلَا خَوْفٌ عَلَيْهِمْ وَلَا هُمْ يَحْزَنُوْنَ',
        transliterasi: 'Wa mā nursilul-mursalīna illā mubasysyirīna wa munżirīn, faman āmana wa aṣlaḥa falā khaufun \'alaihim wa lā hum yaḥzanūn.',
        terjemah: 'Para rasul yang Kami utus itu tidak lain hanyalah untuk memberi kabar gembira dan memberi peringatan. Barangsiapa beriman dan mengadakan perbaikan, maka tidak ada rasa takut pada mereka dan mereka tidak bersedih hati.',
        kandunganMakna: 'Ayat ini menjelaskan esensi misi para rasul sebagai mubasysyirīn (pembawa kabar gembira surga bagi yang taat) dan munżirīn (pemberi peringatan siksa bagi yang membangkang).'
      },
      {
        surah: 'Q.S. Al-Baqarah [2]',
        ayat: 'Ayat 285',
        teksArab: 'اٰمَنَ الرَّسُوْلُ بِمَآ اُنْزِلَ اِلَيْهِ مِنْ رَّبِّهٖ وَالْمُؤْمِنُوْنَ ۗ كُلٌّ اٰمَنَ بِاللّٰهِ وَمَلٰۤىِٕكَتِهٖ وَكُتُبِهٖ وَرُسُلِهٖ ۗ لَا نُفَرِّقُ بَيْنَ اَحَدٍ مِّنْ رُّسُلِهٖ ۗ',
        transliterasi: 'Āmanar-rasūlu bimā unzila ilaihi mir rabbihī wal-mu\'minūn, kullun āmana billāhi wa malā\'ikatihī wa kutubihī wa rusulih, lā nufarriqu baina aḥadim mir rusulih...',
        terjemah: 'Rasul (Muhammad) beriman kepada apa yang diturunkan kepadanya (Al-Qur\'an) dari Tuhannya, demikian pula orang-orang yang beriman. Semua beriman kepada Allah, malaikat-malaikat-Nya, kitab-kitab-Nya, dan rasul-rasul-Nya. (Mereka berkata), "Kami tidak membeda-bedakan seorang pun dari rasul-rasul-Nya"...',
        kandunganMakna: 'Ciri utama seorang mukmin sejati adalah tidak membeda-bedakan antara satu rasul dengan rasul lainnya dalam hal kewajiban mengimani risalah mereka.'
      },
      {
        surah: 'Q.S. Al-Ahzāb [33]',
        ayat: 'Ayat 21',
        teksArab: 'لَقَدْ كَانَ لَكُمْ فِيْ رَسُوْلِ اللّٰهِ اُسْوَةٌ حَسَنَةٌ لِّمَنْ كَانَ يَرْجُوا اللّٰهَ وَالْيَوْمَ الْاٰخِرَ وَذَكَرَ اللّٰهَ كَثِيْرًا ۗ',
        transliterasi: 'Laqad kāna lakum fī rasūlillāhi uswatun ḥasanatul liman kāna yarjullāha wal-yaumal-ākhira wa zakarallāha kaṡīrā.',
        terjemah: 'Sungguh, telah ada pada (diri) Rasulullah itu suri teladan yang baik bagimu (yaitu) bagi orang yang mengharap (rahmat) Allah dan (kedatangan) hari Kiamat dan yang banyak mengingat Allah.',
        kandunganMakna: 'Pemberitahuan ilahi bahwa seluruh aspek kehidupan Rasulullah Saw. adalah prototipe akhlak mulia dan keteladanan terbaik yang wajib dicontoh oleh setiap muslim.'
      }
    ],
    dalilHadits: [
      {
        judul: 'Hadits Jibril tentang Rukun Iman Keempat',
        perawi: 'H.R. Muslim No. 8 (dari Umar bin Khattab r.a.)',
        matanArab: 'قَالَ: فَأَخْبِرْنِي عَنِ الإِيْمَانِ، قَالَ: «أَنْ تُؤْمِنَ بِاللهِ، وَمَلاَئِكَتِهِ، وَكُتُبِهِ، وَرُسُلِهِ، وَاليَوْمِ الآخِرِ، وَتُؤْمِنَ بِالقَدَرِ خَيْرِهِ وَشَرِّهِ»',
        transliterasi: 'Qāla: fa akhbirnī \'anil īmān. Qāla: An tu\'mina billāhi wa malā\'ikatihī wa kutubihī wa rusulihī wal-yaumil-ākhir, wa tu\'mina bil-qadari khairihī wa syarrih.',
        terjemah: 'Malaikat Jibril bertanya: "Maka beritahukanlah kepadaku tentang Iman!" Rasulullah Saw. menjawab: "Engkau beriman kepada Allah, malaikat-malaikat-Nya, kitab-kitab-Nya, para rasul-Nya, hari akhir, dan engkau beriman kepada takdir yang baik maupun yang buruk."',
        syarah: 'Hadits induk akidah ini menetapkan rukun iman kepada rasul sebagai pondasi tak terpisahkan dalam keabsahan akidah seorang muslim di hadapan Allah Swt.'
      },
      {
        judul: 'Hadits Mengikuti Sunnah Rasul',
        perawi: 'H.R. Abu Dawud No. 4607 & At-Tirmidzi No. 2676',
        matanArab: 'فَعَلَيْكُمْ بِسُنَّتِي وَسُنَّةِ الْخُلَفَاءِ الْمَهْدِيِّينَ الرَّاشِدِينَ، تَمَسَّكُوا بِهَا وَعَضُّوا عَلَيْهَا بِالنَّوَاجِذِ',
        transliterasi: 'Fa \'alaikum bi sunnatī wa sunnatil-khulafā\'il-mahdiyyīnar-rāsyidīn, tamassakū bihā wa \'aḍḍū \'alaihā bin-nawājiż.',
        terjemah: 'Maka wajib atas kalian berpegang teguh pada sunnahku dan sunnah para Khulafaur Rasyidin yang mendapat petunjuk setelahku. Peganglah erat-erat dan gigitlah ia dengan gigi gerahammu.',
        syarah: 'Perintah Rasulullah Saw. agar umat Islam menjadikan sunnah dan keteladanan beliau sebagai pegangan kokoh menghadapi godaan fitnah zaman.'
      }
    ]
  },
  namaNamaRasul: {
    daftar25NabiRasul: [
      {
        urutan: 1,
        nama: 'Nabi Adam A.S.',
        namaArab: 'آدَمُ عَلَيْهِ السَّلَام',
        gelar: 'Abu al-Basyar (Bapak Umat Manusia)',
        masaHidup: '± 5872 - 4942 SM',
        kaumTempat: 'Diturunkan ke bumi (Makkah/Srilanka)',
        mukjizatKeistimewaan: 'Diciptakan langsung oleh Allah Swt. dari tanah, diajarkan seluruh nama-nama benda (Asma\' Kullaha), dan para malaikat diperintahkan bersujud hormat kepadanya.',
        isUlulAzmi: false,
        sebutanAlQuran: 'Disebutkan 25 kali dalam Al-Qur\'an'
      },
      {
        urutan: 2,
        nama: 'Nabi Idris A.S.',
        namaArab: 'إِدْرِيْسُ عَلَيْهِ السَّلَام',
        gelar: 'Asad al-Usud (Singa Keberanian)',
        masaHidup: '± 4533 - 4188 SM',
        kaumTempat: 'Babilonia (Irak) & Mesir',
        mukjizatKeistimewaan: 'Manusia pertama yang pandai menulis dengan pena, menjahit dan mengenakan pakaian berbahan kain, menguasai ilmu falaq (astronomi), dan diangkat ke tempat yang tinggi.',
        isUlulAzmi: false,
        sebutanAlQuran: 'Disebutkan 2 kali dalam Al-Qur\'an'
      },
      {
        urutan: 3,
        nama: 'Nabi Nuh A.S.',
        namaArab: 'نُوْحٌ عَلَيْهِ السَّلَام',
        gelar: 'Rasul Ulul Azmi & Shaikh al-Anbiya\'',
        masaHidup: '± 3993 - 3043 SM',
        kaumTempat: 'Kaum Rasib di Mesopotamia (Irak Selatan)',
        mukjizatKeistimewaan: 'Membuat bahtera raksasa di atas bukit tandus dan selamat dari bencana banjir bandang topan dahsyat bersama orang-orang beriman dan pasang-pasangan binatang.',
        isUlulAzmi: true,
        sebutanAlQuran: 'Disebutkan 43 kali dalam Al-Qur\'an'
      },
      {
        urutan: 4,
        nama: 'Nabi Hud A.S.',
        namaArab: 'هُوْدٌ عَلَيْهِ السَّلَام',
        gelar: 'Pembimbing Kaum Raksasa',
        masaHidup: '± 2450 - 2320 SM',
        kaumTempat: 'Kaum \'Ad di Al-Ahqaf (antara Yaman & Oman)',
        mukjizatKeistimewaan: 'Selamat dari terjangan angin topan yang sangat dingin dan dahsyat (Rīḥun Ṣarṣarun \'Ātiyah) selama 7 malam 8 hari yang membinasakan kaum perusak \'Ad.',
        isUlulAzmi: false,
        sebutanAlQuran: 'Disebutkan 7 kali dalam Al-Qur\'an'
      },
      {
        urutan: 5,
        nama: 'Nabi Saleh A.S.',
        namaArab: 'صَالِحٌ عَلَيْهِ السَّلَام',
        gelar: 'Penyeru Al-Hijr',
        masaHidup: '± 2150 - 2080 SM',
        kaumTempat: 'Kaum Tsamud di Al-Hijr (Madā\'in Saleh, Arab Saudi Utara)',
        mukjizatKeistimewaan: 'Mengeluarkan unta betina bunting dari celah batu karang keras atas izin Allah Swt., yang air susunya dapat mencukupi seluruh penduduk kota.',
        isUlulAzmi: false,
        sebutanAlQuran: 'Disebutkan 9 kali dalam Al-Qur\'an'
      },
      {
        urutan: 6,
        nama: 'Nabi Ibrahim A.S.',
        namaArab: 'إِبْرَاهِيْمُ عَلَيْهِ السَّلَام',
        gelar: 'Khalilullah (Kekasih Allah) & Abu al-Anbiya\' (Bapak Para Nabi)',
        masaHidup: '± 1997 - 1822 SM',
        kaumTempat: 'Babilonia (Irak), Palestina, Mesir, & Makkah',
        mukjizatKeistimewaan: 'Tubuhnya tidak terbakar saat dilemparkan ke kobaran api unggun raksasa Raja Namrud (Q.S. Al-Anbiya: 69) dan bersama putranya Ismail membangun Ka\'bah serta meletakkan syariat haji & kurban.',
        isUlulAzmi: true,
        sebutanAlQuran: 'Disebutkan 69 kali dalam Al-Qur\'an'
      },
      {
        urutan: 7,
        nama: 'Nabi Luth A.S.',
        namaArab: 'لُوْطٌ عَلَيْهِ السَّلَام',
        gelar: 'Penentang Perilaku Menyimpang',
        masaHidup: '± 1950 - 1860 SM',
        kaumTempat: 'Kaum Sadum (Sodom) & Gomorrah di Laut Mati',
        mukjizatKeistimewaan: 'Diselamatkan malaikat saat kaumnya yang menyukai sesama jenis diazab dengan gempa bumi dahsyat, kota dijungkirbalikkan, dan dihujani batu belerang berapi.',
        isUlulAzmi: false,
        sebutanAlQuran: 'Disebutkan 27 kali dalam Al-Qur\'an'
      },
      {
        urutan: 8,
        nama: 'Nabi Ismail A.S.',
        namaArab: 'إِسْمَاعِيْلُ عَلَيْهِ السَّلَام',
        gelar: 'Adz-Dzabih (Yang Dikorbankan) & Kakek Bangsa Arab Adnani',
        masaHidup: '± 1914 - 1777 SM',
        kaumTempat: 'Kaum Jurhum di Makkah Al-Mukarramah',
        mukjizatKeistimewaan: 'Kemunculan mata air Zamzam dari bawah hentakan kakinya saat bayi dan keikhlasan luar biasa ketika hendak disembelih oleh ayahnya demi mentaati wahyu Allah.',
        isUlulAzmi: false,
        sebutanAlQuran: 'Disebutkan 12 kali dalam Al-Qur\'an'
      },
      {
        urutan: 9,
        nama: 'Nabi Ishaq A.S.',
        namaArab: 'إِسْحَاقُ عَلَيْهِ السَّلَام',
        gelar: 'Kakek Bangsa Bani Israil',
        masaHidup: '± 1897 - 1717 SM',
        kaumTempat: 'Kanaan (Palestina) & Hebron',
        mukjizatKeistimewaan: 'Lahir dari ibu yang sudah sangat tua dan mandul (Siti Sarah) atas karunia kabar gembira para malaikat, menurunkan para nabi Bani Israil.',
        isUlulAzmi: false,
        sebutanAlQuran: 'Disebutkan 17 kali dalam Al-Qur\'an'
      },
      {
        urutan: 10,
        nama: 'Nabi Ya\'qub A.S.',
        namaArab: 'يَعْقُوْبُ عَلَيْهِ السَّلَام',
        gelar: 'Israil (Hamba Pilihan Allah)',
        masaHidup: '± 1837 - 1690 SM',
        kaumTempat: 'Palestina & Mesir',
        mukjizatKeistimewaan: 'Penglihatan matanya yang sempat buta karena menangisi putranya Yusuf pulih seketika setelah diusapkan baju gamis Nabi Yusuf ke wajahnya.',
        isUlulAzmi: false,
        sebutanAlQuran: 'Disebutkan 16 kali dalam Al-Qur\'an'
      },
      {
        urutan: 11,
        nama: 'Nabi Yusuf A.S.',
        namaArab: 'يُوْسُفُ عَلَيْهِ السَّلَام',
        gelar: 'Ash-Shiddiq & Teladan Integritas Moral',
        masaHidup: '± 1745 - 1635 SM',
        kaumTempat: 'Mesir Kuno',
        mukjizatKeistimewaan: 'Dianugerahi paras ketampanan separuh dunia, keahlian menakwilkan tabir mimpi raja dengan akurat, dan menyelamatkan kawasan Timur Tengah dari bencana kelaparan 7 tahun.',
        isUlulAzmi: false,
        sebutanAlQuran: 'Disebutkan 27 kali dalam Al-Qur\'an'
      },
      {
        urutan: 12,
        nama: 'Nabi Ayyub A.S.',
        namaArab: 'أَيُّوْبُ عَلَيْهِ السَّلَام',
        gelar: 'Simbol Kesabaran Hakiki (Shabrun Jamil)',
        masaHidup: '± 1540 - 1420 SM',
        kaumTempat: 'Dataran Hauran (Syiria Selatan)',
        mukjizatKeistimewaan: 'Kesabaran tanpa keluh kesah diuji habisnya harta, wafatnya seluruh anak, dan sakit parah selama 18 tahun, disembuhkan dengan hentakan kaki yang memancarkan air sejuk mukjizat.',
        isUlulAzmi: false,
        sebutanAlQuran: 'Disebutkan 4 kali dalam Al-Qur\'an'
      },
      {
        urutan: 13,
        nama: 'Nabi Syu\'aib A.S.',
        namaArab: 'شُعَيْبُ عَلَيْهِ السَّلَام',
        gelar: 'Khatibul Anbiya\' (Ahli Pidato Para Nabi)',
        masaHidup: '± 1600 - 1490 SM',
        kaumTempat: 'Kaum Madyan & Ashabul Aikah di pesisir Laut Merah',
        mukjizatKeistimewaan: 'Memiliki kepiawaian retorika dakwah dan ketegasan membela keadilan ekonomi, memberantas penipuan timbangan dan takaran pasar.',
        isUlulAzmi: false,
        sebutanAlQuran: 'Disebutkan 11 kali dalam Al-Qur\'an'
      },
      {
        urutan: 14,
        nama: 'Nabi Musa A.S.',
        namaArab: 'مُوْسَى عَلَيْهِ السَّلَام',
        gelar: 'Kalimullah (Orang yang Berbicara Langsung dengan Allah)',
        masaHidup: '± 1527 - 1407 SM',
        kaumTempat: 'Bani Israil & Bangsa Mesir Kuno (Fir\'aun)',
        mukjizatKeistimewaan: 'Membawa Kitab Taurat, tongkat yang berubah menjadi ular besar menelan sihir Fir\'aun, membelah Laut Merah menjadi jalan kering, dan tangan yang bercahaya putih menyilaukan.',
        isUlulAzmi: true,
        sebutanAlQuran: 'Disebutkan 136 kali dalam Al-Qur\'an (Paling banyak)'
      },
      {
        urutan: 15,
        nama: 'Nabi Harun A.S.',
        namaArab: 'هَارُوْنُ عَلَيْهِ السَّلَام',
        gelar: 'Juru Bicara Risalah & Wazir Musa',
        masaHidup: '± 1530 - 1417 SM',
        kaumTempat: 'Bani Israil & Mesir',
        mukjizatKeistimewaan: 'Dianugerahi kefasihan lisan yang luar biasa dan pendamping setia Nabi Musa dalam menghadapi kediktatoran Fir\'aun.',
        isUlulAzmi: false,
        sebutanAlQuran: 'Disebutkan 20 kali dalam Al-Qur\'an'
      },
      {
        urutan: 16,
        nama: 'Nabi Zulkifli A.S.',
        namaArab: 'ذُو الكِفْلِ عَلَيْهِ السَّلَام',
        gelar: 'Sang Pemenuh Janji & Hakim Adil',
        masaHidup: '± 1500 - 1425 SM',
        kaumTempat: 'Damaskus & Irak',
        mukjizatKeistimewaan: 'Kesanggupannya memegang amanah janji menjadi raja yang adil: berpuasa di siang hari, qiyamul lail di malam hari, dan tidak pernah marah dalam memutuskan perkara.',
        isUlulAzmi: false,
        sebutanAlQuran: 'Disebutkan 2 kali dalam Al-Qur\'an'
      },
      {
        urutan: 17,
        nama: 'Nabi Daud A.S.',
        namaArab: 'دَاوُدُ عَلَيْهِ السَّلَام',
        gelar: 'Khalifah di Bumi & Pemilik Suara Merdu',
        masaHidup: '± 1060 - 963 SM',
        kaumTempat: 'Bani Israil di Yerusalem (Palestina)',
        mukjizatKeistimewaan: 'Menerima Kitab Zabur, melunakkan besi keras dengan tangannya tanpa dipanaskan api, serta burung dan gunung-gunung bertasbih bersamanya.',
        isUlulAzmi: false,
        sebutanAlQuran: 'Disebutkan 16 kali dalam Al-Qur\'an'
      },
      {
        urutan: 18,
        nama: 'Nabi Sulaiman A.S.',
        namaArab: 'سُلَيْمَانُ عَلَيْهِ السَّلَام',
        gelar: 'Raja Diraja yang Bersyukur & Bijaksana',
        masaHidup: '± 989 - 931 SM',
        kaumTempat: 'Kerajaan Israil Raya di Yerusalem',
        mukjizatKeistimewaan: 'Dianugerahi kerajaan teragung yang tidak tertandingi, mampu memahami bahasa burung dan hewan (semut), serta menundukkan angin kencang dan bangsa jin.',
        isUlulAzmi: false,
        sebutanAlQuran: 'Disebutkan 17 kali dalam Al-Qur\'an'
      },
      {
        urutan: 19,
        nama: 'Nabi Ilyas A.S.',
        namaArab: 'إِلْيَاسُ عَلَيْهِ السَّلَام',
        gelar: 'Penentang Berhala Ba\'al',
        masaHidup: '± 910 - 850 SM',
        kaumTempat: 'Ba\'labak (Lebanon Timur)',
        mukjizatKeistimewaan: 'Mendatangkan kemarau panjang selama 3 tahun atas keingkaran kaumnya menyembah patung Ba\'al, lalu memohon hujan lebat yang menyuburkan kembali tanah gersang.',
        isUlulAzmi: false,
        sebutanAlQuran: 'Disebutkan 2 kali dalam Al-Qur\'an'
      },
      {
        urutan: 20,
        nama: 'Nabi Ilyasa\' A.S.',
        namaArab: 'إِلْيَسَعُ عَلَيْهِ السَّلَام',
        gelar: 'Penerus Dakwah yang Istiqomah',
        masaHidup: '± 885 - 790 SM',
        kaumTempat: 'Bani Israil di Palestina',
        mukjizatKeistimewaan: 'Dikaruniai kemampuan menyembuhkan orang sakit kusta dan menghidupkan orang mati atas izin Allah Swt., serta memimpin kaumnya hidup makmur dan tenteram.',
        isUlulAzmi: false,
        sebutanAlQuran: 'Disebutkan 2 kali dalam Al-Qur\'an'
      },
      {
        urutan: 21,
        nama: 'Nabi Yunus A.S.',
        namaArab: 'يُوْنُسُ عَلَيْهِ السَّلَام',
        gelar: 'Dzun-Nun (Pemilik Ikan Paus) & Shahibul Hut',
        masaHidup: '± 820 - 750 SM',
        kaumTempat: 'Ninawa (Mosul, Irak Utara)',
        mukjizatKeistimewaan: 'Bertahan hidup selamat di dalam perut ikan paus (nun) yang gelap gulita di dasar samudera, berkat doa tasbih taubatnya: "Lā ilāha illā Anta subḥānaka innī kuntu minaẓ-ẓālimīn".',
        isUlulAzmi: false,
        sebutanAlQuran: 'Disebutkan 4 kali dalam Al-Qur\'an'
      },
      {
        urutan: 22,
        nama: 'Nabi Zakaria A.S.',
        namaArab: 'زَكَرِيَّا عَلَيْهِ السَّلَام',
        gelar: 'Pelindung Maryam & Pembina Baitul Maqdis',
        masaHidup: '± 91 SM - 31 M',
        kaumTempat: 'Bani Israil di Palestina',
        mukjizatKeistimewaan: 'Dikaruniai anak (Nabi Yahya A.S.) pada usia senja (lebih dari 90 tahun) padahal istrinya mandul, setelah memanjatkan doa khusyuk yang tulus.',
        isUlulAzmi: false,
        sebutanAlQuran: 'Disebutkan 7 kali dalam Al-Qur\'an'
      },
      {
        urutan: 23,
        nama: 'Nabi Yahya A.S.',
        namaArab: 'يَحْيَى عَلَيْهِ السَّلَام',
        gelar: 'Al-Hasur (Zuhud, Suci, & Pemegang Kitab sejak Belia)',
        masaHidup: '± 1 SM - 31 M',
        kaumTempat: 'Bani Israil di Yordania & Palestina',
        mukjizatKeistimewaan: 'Diberikan hikmah kepandaian ilmu syariat sejak usia kanak-kanak, berani menegur maksiat pernikahan haram Raja Herodes, dan hidup sangat zuhud.',
        isUlulAzmi: false,
        sebutanAlQuran: 'Disebutkan 5 kali dalam Al-Qur\'an'
      },
      {
        urutan: 24,
        nama: 'Nabi Isa A.S.',
        namaArab: 'عِيْسَى عَلَيْهِ السَّلَام',
        gelar: 'Al-Masih & Kalimatullah wa Ruhun Minhu',
        masaHidup: '± 1 M - 33 M (Diangkat ke langit)',
        kaumTempat: 'Bani Israil di Palestina',
        mukjizatKeistimewaan: 'Lahir tanpa ayah dari perawan suci Maryam, dapat berbicara sejak dalam buaian bayi membela ibunya, menyembuhkan orang buta sejak lahir dan penyakit kusta, membuat burung dari tanah liat lalu hidup, menghidupkan orang mati atas izin Allah, serta menerima Kitab Injil.',
        isUlulAzmi: true,
        sebutanAlQuran: 'Disebutkan 25 kali dalam Al-Qur\'an'
      },
      {
        urutan: 25,
        nama: 'Nabi Muhammad Saw.',
        namaArab: 'مُحَمَّدٌ صَلَّى اللّٰهُ عَلَيْهِ وَسَلَّم',
        gelar: 'Khatamun Nabiyyin (Penutup Para Nabi), Sayyidul Mursalin, & Rahmatan lil \'Alamin',
        masaHidup: '571 M - 632 M (63 Tahun)',
        kaumTempat: 'Makkah, Madinah, & Seluruh Umat Manusia hingga Akhir Zaman',
        mukjizatKeistimewaan: 'Menerima mukjizat abadi terbesar Al-Qur\'an Al-Karim, peristiwa Isra\' Mi\'raj menembus Sidratul Muntaha dalam satu malam, membelah bulan menjadi dua bagian, memancarkan air dari celah-celah jari jemarinya, serta membawa ajaran universal yang menyempurnakan seluruh syariat sebelumnya.',
        isUlulAzmi: true,
        sebutanAlQuran: 'Disebutkan 4 kali nama Muhammad dan 1 kali nama Ahmad'
      }
    ],
    rasulUlulAzmi: {
      pengertian:
        'Ulul Azmi (أُولُو العَزْمِ) adalah gelar kehormatan yang diberikan Allah Swt. kepada rasul-rasul yang memiliki ketabahan, kesabaran, keuletan, dan keteguhan tekad yang luar biasa melampaui rasul lainnya dalam menghadapi penentangan dan cobaan dakwah dari kaumnya.',
      dalilAlQuran:
        'فَاصْبِرْ كَمَا صَبَرَ اُولُوا الْعَزْمِ مِنَ الرُّسُلِ وَلَا تَسْتَعْجِلْ لَّهُمْ ۗ (Q.S. Al-Aḥqāf [46]: 35) - "Maka bersabarlah engkau (Muhammad) sebagaimana kesabaran rasul-rasul yang memiliki keteguhan hati (Ulul Azmi)..."',
      singkatanMnemonic: 'N-I-M-I-M (Nuh, Ibrahim, Musa, Isa, Muhammad)',
      daftarTokoh: [
        {
          nama: 'Nabi Nuh A.S.',
          namaArab: 'نُوْحٌ عَلَيْهِ السَّلَام',
          urutanUlulAzmi: 1,
          artiNamaGelar: 'Sang Nakhoda Tauhid yang Sabar Tanpa Batas',
          bentukKetabahanLuarBiasa:
            'Berdakwah selama 950 tahun siang dan malam dengan penuh kesabaran meski hanya memperoleh sekitar 80 orang pengikut. Bahkan beliau harus menelan kepedihan saat istri dan anak kandungnya sendiri (Kan\'an) menolak beriman dan memilih tenggelam dalam kekafiran.',
          mukjizatUtama: [
            'Membuat bahtera raksasa yang kokoh di atas tanah bukit tandus berdasarkan bimbingan wahyu ilahi.',
            'Menyelamatkan orang beriman dan satwa dari terjangan banjir bah terdahsyat di muka bumi.'
          ],
          dalilAlQuran: 'Q.S. Al-\'Ankabut: 14 & Q.S. Hud: 37-48',
          teladanUntukPelajar: 'Tidak mudah menyerah saat belajar hal sulit, pantang putus asa saat mengajak teman pada kebaikan.'
        },
        {
          nama: 'Nabi Ibrahim A.S.',
          namaArab: 'إِبْرَاهِيْمُ عَلَيْهِ السَّلَام',
          urutanUlulAzmi: 2,
          artiNamaGelar: 'Khalilullah (Kekasih Allah) & Bapak Monoteisme Dunia',
          bentukKetabahanLuarBiasa:
            'Tegar berdakwah melawan tirani Raja Namrud dan penyembahan berhala oleh ayah kandungnya sendiri (Azar). Tabah ketika dilemparkan ke kobaran api unggun raksasa, rela meninggalkan istri dan bayinya di lembah tandus Makkah, serta patuh mutlak saat diuji mengurbankan putra kesayangannya Ismail.',
          mukjizatUtama: [
            'Api pembakaran Raja Namrud berubah menjadi dingin dan menyelamatkan tubuhnya (Bardaw wa Salāmā).',
            'Menghidupkan kembali empat ekor burung yang telah dicincang dan disebar di bukit-bukit.'
          ],
          dalilAlQuran: 'Q.S. Al-Anbiya: 68-70 & Q.S. As-Saffat: 102-107',
          teladanUntukPelajar: 'Berani menegakkan kebenaran ilmiah dan kejujuran walau tidak disukai oleh mayoritas orang yang salah.'
        },
        {
          nama: 'Nabi Musa A.S.',
          namaArab: 'مُوْسَى عَلَيْهِ السَّلَام',
          urutanUlulAzmi: 3,
          artiNamaGelar: 'Kalimullah (Orang yang Berdialog Langsung dengan Allah Swt.)',
          bentukKetabahanLuarBiasa:
            'Menghadapi penguasa paling kejam dan sombong dalam sejarah (Fir\'aun yang mengaku sebagai tuhan), serta sabar mendidik kaum Bani Israil yang keras kepala, gemar membangkang, banyak menuntut, dan cepat tergelincir menyembah patung anak sapi (Samiri).',
          mukjizatUtama: [
            'Tongkat kayu yang dapat berubah menjadi ular besar dan membelah Laut Merah menjadi 12 lorong kering.',
            'Tangannya memancarkan cahaya putih cemerlang tanpa cacat penyakit.'
          ],
          dalilAlQuran: 'Q.S. Thaha: 67-77 & Q.S. Asy-Syu\'ara: 63-66',
          teladanUntukPelajar: 'Berani membela teman yang tertindas (anti-bullying) dan tegas memegang aturan tata tertib madrasah/sekolah.'
        },
        {
          nama: 'Nabi Isa A.S.',
          namaArab: 'عِيْسَى عَلَيْهِ السَّلَام',
          urutanUlulAzmi: 4,
          artiNamaGelar: 'Ruhullah & Rasul Penuh Cinta Kasih',
          bentukKetabahanLuarBiasa:
            'Dilahirkan tanpa ayah dari wanita suci Maryam sehingga ibunya difitnah keji oleh kaumnya. Tabah menghadapi konspirasi para pemuka Yahudi munafik yang hendak membunuhnya dan menyalibnya, hingga akhirnya diselamatkan dan diangkat oleh Allah Swt. ke langit.',
          mukjizatUtama: [
            'Berbicara membela kehormatan ibunya ketika masih bayi di dalam buaian.',
            'Menyembuhkan penderita kusta, buta sejak lahir, dan menghidupkan orang mati dengan izin Allah Swt.'
          ],
          dalilAlQuran: 'Q.S. Maryam: 29-33 & Q.S. Ali \'Imran: 49-55',
          teladanUntukPelajar: 'Menjaga tutur kata lemah lembut, memiliki empati sosial tinggi, dan menjauhi sifat pamer kemewahan.'
        },
        {
          nama: 'Nabi Muhammad Saw.',
          namaArab: 'مُحَمَّدٌ صَلَّى اللّٰهُ عَلَيْهِ وَسَلَّم',
          urutanUlulAzmi: 5,
          artiNamaGelar: 'Sayyidul Mursalin (Pemimpin Seluruh Rasul) & Rahmatan lil \'Alamin',
          bentukKetabahanLuarBiasa:
            'Dilahirkan yatim, tabah diboikot 3 tahun di Syi\'ib Abi Thalib hingga kelaparan, dilempari batu dan kotoran di Thaif namun memaafkannya, terluka dalam Perang Uhud, difitnah dan diusir dari tanah kelahirannya Makkah, namun membalasnya dengan pengampunan massal pada Fathu Makkah.',
          mukjizatUtama: [
            'Al-Qur\'an Al-Karim sebagai mukjizat aqliyah abadi yang tak lekang oleh zaman.',
            'Peristiwa Isra\' Mi\'raj menembus langit ketujuh dan Sidratul Muntaha untuk menerima perintah shalat 5 waktu.',
            'Membelah bulan menjadi dua (Insiqaqul Qamar) dan mengalirkan air dari celah jemarinya.'
          ],
          dalilAlQuran: 'Q.S. Al-Anbiya: 107 & Q.S. Al-Ahzab: 21',
          teladanUntukPelajar: 'Meneladani kejujuran total (Al-Amin), memaafkan kesalahan teman, dan rajin beribadah serta menuntut ilmu.'
        }
      ]
    }
  },
  tugasTugasRasul: [
    {
      id: 'tugas-1',
      judulTugas: 'Menyampaikan Risalah Wahyu (At-Tablīgh)',
      istilahArab: 'تَبْلِيْغُ الرِّسَالَةِ',
      artiSingkat: 'Menyampaikan seluruh perintah, larangan, dan petunjuk Allah tanpa ada yang dikurangi atau disembunyikan.',
      dalilRujukan: {
        surahAyat: 'Q.S. Al-Mā\'idah [5]: 67',
        teksArab: 'يٰٓاَيُّهَا الرَّسُوْلُ بَلِّغْ مَآ اُنْزِلَ اِلَيْكَ مِنْ رَّبِّكَ ۗ وَاِنْ لَّمْ تَفْعَلْ فَمَا بَلَّغْتَ رِسٰلَتَهٗ ۗ',
        terjemah: 'Wahai Rasul! Sampaikanlah apa yang diturunkan kepadamu dari Tuhanmu. Jika tidak engkau lakukan (apa yang diperintahkan itu) berarti engkau tidak menyampaikan amanat-Nya.'
      },
      penjabaranTugas:
        'Rasul diwajibkan menyiarkan ajaran tauhid dan syariat ibadah kepada segenap umatnya secara utuh, jujur, dan berani, meskipun menghadapi ancaman intimidasi, caci maki, maupun kekerasan fisik.',
      relevansiKehidupanSiswa:
        'Siswa belajar berani menyebarkan kebenaran, mengajak teman shalat berjamaah, dan tidak menyembunyikan ilmu pengetahuan saat belajar kelompok.'
    },
    {
      id: 'tugas-2',
      judulTugas: 'Memberi Kabar Gembira dan Peringatan (Al-Basyīr wa An-Nażīr)',
      istilahArab: 'البَشِيْرُ وَالنَّذِيْرُ',
      artiSingkat: 'Memberi kabar gembira berupa surga bagi orang taat dan memberi peringatan siksa neraka bagi pembangkang.',
      dalilRujukan: {
        surahAyat: 'Q.S. Sabā\' [34]: 28',
        teksArab: 'وَمَآ اَرْسَلْنٰكَ اِلَّا كَاۤفَّةً لِّلنَّاسِ بَشِيْرًا وَّنَذِيْرًا وَّلٰكِنَّ اَكْثَرَ النَّاسِ لَا يَعْلَمُوْنَ',
        terjemah: 'Dan Kami tidak mengutus engkau (Muhammad), melainkan kepada semua umat manusia sebagai pembawa berita gembira dan sebagai pemberi peringatan, tetapi kebanyakan manusia tidak mengetahui.'
      },
      penjabaranTugas:
        'Menjelaskan balasan kenikmatan surga dan keridaan Allah bagi yang beramal shalih (targhīb), serta memberi peringatan keras tentang pedihnya siksa neraka dan kerugian akibat maksiat (tarhīb).',
      relevansiKehidupanSiswa:
        'Termotivasi giat belajar karena yakin setiap usaha baik membuahkan prestasi, serta takut melanggar aturan sekolah karena menyadari konsekuensi negatifnya.'
    },
    {
      id: 'tugas-3',
      judulTugas: 'Menjadi Teladan Akhlak Mulia (Al-Uswah Al-Ḥasanah)',
      istilahArab: 'الأُسْوَةُ الحَسَنَةُ',
      artiSingkat: 'Mempraktikkan budi pekerti luhur dalam keseharian sehingga ajaran Islam terlihat nyata dalam perilaku hidup.',
      dalilRujukan: {
        surahAyat: 'Q.S. Al-Ahzāb [33]: 21',
        teksArab: 'لَقَدْ كَانَ لَكُمْ فِيْ رَسُوْلِ اللّٰهِ اُسْوَةٌ حَسَنَةٌ لِّمَنْ كَانَ يَرْجُوا اللّٰهَ وَالْيَوْمَ الْاٰخِرَ وَذَكَرَ اللّٰهَ كَثِيْرًا ۗ',
        terjemah: 'Sungguh, telah ada pada (diri) Rasulullah itu suri teladan yang baik bagimu (yaitu) bagi orang yang mengharap (rahmat) Allah dan (kedatangan) hari Kiamat dan yang banyak mengingat Allah.'
      },
      penjabaranTugas:
        'Rasul bukan sekadar pengajar teori, melainkan figur ideal yang mengamalkan kejujuran, kedermawanan, kerendahan hati, kasih sayang, dan keadilan dalam perbuatan konkret.',
      relevansiKehidupanSiswa:
        'Pelajar mencontoh sopan santun rasul kepada guru dan orang tua, bersikap ramah kepada teman sebaya, serta tidak sombong atas kepandaian yang dimiliki.'
    },
    {
      id: 'tugas-4',
      judulTugas: 'Mendidik & Menyucikan Jiwa (Tazkiyatun Nufūs)',
      istilahArab: 'تَزْكِيَةُ النُّفُوْسِ وَالتَّعْلِيْمُ',
      artiSingkat: 'Membersihkan hati manusia dari penyakit syirik, dengki, dan takabur serta mengajarkan Al-Kitab dan Al-Hikmah.',
      dalilRujukan: {
        surahAyat: 'Q.S. Al-Jumu\'ah [62]: 2',
        teksArab: 'هُوَ الَّذِيْ بَعَثَ فِى الْاُمِّيّٖنَ رَسُوْلًا مِّنْهُمْ يَتْلُوْا عَلَيْهِمْ اٰيٰتِهٖ وَيُزَكِّيْهِمْ وَيُعَلِّمُهُمُ الْكِتٰبَ وَالْحِكْمَةَ ۗ',
        terjemah: 'Dialah yang mengutus seorang Rasul kepada kaum yang buta huruf dari kalangan mereka sendiri, yang membacakan kepada mereka ayat-ayat-Nya, menyucikan (jiwa) mereka dan mengajarkan kepada mereka Kitab dan Hikmah (Sunnah)...'
      },
      penjabaranTugas:
        'Membina kebersihan batin manusia agar terbebas dari sifat hasad, riya\', ujub, dan cinta dunia yang berlebihan, serta menumbuhkan keikhlasan, tawadhu\', dan mahabbah ilahiyah.',
      relevansiKehidupanSiswa:
        'Menjaga kebersihan hati dengan menghindari sifat iri hati terhadap ranking teman, rajin membersihkan diri dan kelas, serta gemar memaafkan.'
    },
    {
      id: 'tugas-5',
      judulTugas: 'Menegakkan Keadilan & Meluruskan Tauhid (Iqāmatul \'Adl)',
      istilahArab: 'إِقَامَةُ العَدْلِ وَالتَّوْحِيْدِ',
      artiSingkat: 'Memberantas segala bentuk peribadatan kepada selain Allah (thaghut) dan menegakkan timbangan keadilan di tengah masyarakat.',
      dalilRujukan: {
        surahAyat: 'Q.S. An-Naḥl [16]: 36',
        teksArab: 'وَلَقَدْ بَعَثْنَا فِيْ كُلِّ اُمَّةٍ رَّسُوْلًا اَنِ اعْبُدُوا اللّٰهَ وَاجْتَنِبُوا الطَّاغُوْتَ ۚ',
        terjemah: 'Dan sungguh, Kami telah mengutus seorang rasul untuk setiap umat (untuk menyerukan), "Sembahlah Allah, dan jauhilah thaghut (sesembahan selain Allah)"...'
      },
      penjabaranTugas:
        'Menjamin perlindungan hak-hak asasi manusia, menghapuskan penindasan, perbudakan, diskriminasi kasta, serta menegakkan kepastian hukum yang adil tanpa pandang bulu.',
      relevansiKehidupanSiswa:
        'Berlaku adil saat membagi giliran piket kelas, tidak membeda-bedakan teman berdasarkan suku/kekayaan, dan berani menolak tindak perundungan.'
    }
  ],
  sifatSifatRasul: {
    pengantar:
      'Untuk mengemban tugas risalah yang amat berat dan suci, Allah Swt. membekali para rasul dengan sifat-sifat kepribadian yang mulia dan mustahil bagi mereka memiliki sifat tercela yang dapat mencoreng martabat risalah ilahi.',
    sifatWajib: [
      {
        kategori: 'Wajib',
        namaArab: 'الصِّدْقُ',
        namaLatin: 'Aṣ-Ṣiddīq',
        arti: 'Benar / Jujur',
        lawanSifat: 'Al-Kiżib (Dusta)',
        dalilQuran: {
          surahAyat: 'Q.S. Maryam [19]: 41',
          teksArab: 'وَاذْكُرْ فِى الْكِتٰبِ اِبْرٰهِيْمَ ەۗ اِنَّهٗ كَانَ صِدِّيْقًا نَّبِيًّا',
          terjemah: 'Dan ceritakanlah (Muhammad) kisah Ibrahim di dalam Kitab (Al-Qur\'an). Sesungguhnya dia adalah seorang yang sangat mencintai kebenaran dan seorang Nabi.'
        },
        penjelasanMendalam:
          'Seluruh ucapan, perbuatan, dan apa yang disampaikan para rasul bersumber dari kebenaran wahyu Allah Swt. Tidak ada satu pun kata bohong, manipulasi fakta, atau karangan pribadi yang keluar dari lisan mereka.',
        contohPenerapanPelajar:
          'Jujur saat mengerjakan ulangan dan ujian sekolah (tidak menyontek), berkata apa adanya kepada orang tua dan guru, serta tidak menyebarkan berita hoaks di media sosial.'
      },
      {
        kategori: 'Wajib',
        namaArab: 'الأَمَانَةُ',
        namaLatin: 'Al-Amānah',
        arti: 'Dapat Dipercaya / Bertanggung Jawab',
        lawanSifat: 'Al-Khiyānah (Khianat / Curang)',
        dalilQuran: {
          surahAyat: 'Q.S. Asy-Syu\'arā\' [26]: 107',
          teksArab: 'اِنِّيْ لَكُمْ رَسُوْلٌ اَمِيْنٌ ۙ',
          terjemah: 'Sesungguhnya aku bagi kamu adalah seorang rasul yang terpercaya (dapat dipercaya).'
        },
        penjelasanMendalam:
          'Para rasul memegang teguh mandat ilahi dan amanat umat dengan integritas sempurna. Mereka terjaga dari perbuatan maksiat, khianat, maupun penyalahgunaan wewenang (Ma\'shūm).',
        contohPenerapanPelajar:
          'Menjaga titipan barang atau uang kas kelas dengan teliti, melaksanakan tugas piket kebersihan sesuai jadwal, dan menepati janji yang telah diucapkan.'
      },
      {
        kategori: 'Wajib',
        namaArab: 'التَّبْلِيْغُ',
        namaLatin: 'At-Tablīgh',
        arti: 'Menyampaikan',
        lawanSifat: 'Al-Kitmān (Menyembunyikan)',
        dalilQuran: {
          surahAyat: 'Q.S. Al-Mā\'idah [5]: 67',
          teksArab: 'يٰٓاَيُّهَا الرَّسُوْلُ بَلِّغْ مَآ اُنْزِلَ اِلَيْكَ مِنْ رَّبِّكَ ۗ',
          terjemah: 'Wahai Rasul! Sampaikanlah apa yang diturunkan kepadamu dari Tuhanmu...'
        },
        penjelasanMendalam:
          'Para rasul berkewajiban menyampaikan seluruh risalah wahyu Allah Swt. kepada umat manusia tanpa rasa takut, tanpa kompromi kebatilan, dan tanpa menyembunyikan satu huruf pun.',
        contohPenerapanPelajar:
          'Berani menyampaikan pesan atau titipan guru ke seluruh teman kelas, saling mengingatkan dalam kebaikan (amar ma\'ruf nahi munkar), dan berani menolak ajakan bolos.'
      },
      {
        kategori: 'Wajib',
        namaArab: 'الفَطَانَةُ',
        namaLatin: 'Al-Faṭānah',
        arti: 'Cerdas / Bijaksana',
        lawanSifat: 'Al-Balādah (Bodoh / Dungu)',
        dalilQuran: {
          surahAyat: 'Q.S. Al-An\'ām [6]: 83',
          teksArab: 'وَتِلْكَ حُجَّتُنَآ اٰتَيْنٰهَآ اِبْرٰهِيْمَ عَلٰى قَوْمِهٖ ۗ نَرْفَعُ دَرَجٰتٍ مَّنْ نَّشَاۤءُ ۗ',
          terjemah: 'Dan itulah hujah (alasan) Kami yang Kami berikan kepada Ibrahim untuk menghadapi kaumnya. Kami tinggikan derajat siapa yang Kami kehendaki...'
        },
        penjelasanMendalam:
          'Para rasul dianugerahi kecerdasan intelektual, emosional, dan spiritual yang unggul untuk mematahkan argumen kaum musyrikin, merancang strategi dakwah, serta menyelesaikan persoalan umat yang rumit.',
        contohPenerapanPelajar:
          'Rajin belajar, gemar membaca buku dan literasi digital, mampu berpikir kritis dan kreatif dalam memecahkan masalah pelajaran sains maupun sosial.'
      }
    ],
    sifatMustahil: [
      {
        kategori: 'Mustahil',
        namaArab: 'الكِذْبُ',
        namaLatin: 'Al-Kiżib',
        arti: 'Dusta / Bohong',
        lawanSifat: 'Aṣ-Ṣiddīq',
        dalilQuran: {
          surahAyat: 'Q.S. An-Najm [53]: 3-4',
          teksArab: 'وَمَا يَنْطِقُ عَنِ الْهَوٰى ۗ اِنْ هُوَ اِلَّا وَحْيٌ يُّوْحٰى ۙ',
          terjemah: 'Dan tidaklah yang diucapkannya itu (Al-Qur\'an) menurut keinginannya. Tidak lain (Al-Qur\'an itu) adalah wahyu yang diwahyukan (kepadanya).'
        },
        penjelasanMendalam:
          'Mustahil bagi seorang rasul berkata bohong atau merekayasa risalah. Jika seorang rasul berdusta, maka seluruh ajaran agama menjadi batal dan tidak layak dipercaya.',
        contohPenerapanPelajar:
          'Menjauhi perilaku berbohong demi membela diri, tidak mengarang alasan palsu saat terlambat masuk kelas.'
      },
      {
        kategori: 'Mustahil',
        namaArab: 'الخِيَانَةُ',
        namaLatin: 'Al-Khiyānah',
        arti: 'Khianat / Ingkar Janji / Curang',
        lawanSifat: 'Al-Amānah',
        dalilQuran: {
          surahAyat: 'Q.S. Ali \'Imrān [3]: 161',
          teksArab: 'وَمَا كَانَ لِنَبِيٍّ اَنْ يَّغُلَّ ۗ وَمَنْ يَّغْلُلْ يَأْتِ بِمَا غَلَّ يَوْمَ الْقِيٰمَةِ ۚ',
          terjemah: 'Dan tidak mungkin seorang nabi berkhianat (dalam urusan harta rampasan perang). Barangsiapa berkhianat, niscaya pada hari Kiamat dia akan datang membawa apa yang dikhianatkannya itu...'
        },
        penjelasanMendalam:
          'Mustahil bagi rasul melanggar amanat Allah atau mengkhianati kepercayaan umatnya. Mereka adalah pribadi paling terpercaya yang senantiasa menjaga janji setia.',
        contohPenerapanPelajar:
          'Tidak menyalahgunakan uang SPP yang dititipkan orang tua, tidak membocorkan rahasia atau aib teman.'
      },
      {
        kategori: 'Mustahil',
        namaArab: 'الكِتْمَانُ',
        namaLatin: 'Al-Kitmān',
        arti: 'Menyembunyikan Kebenaran',
        lawanSifat: 'At-Tablīgh',
        dalilQuran: {
          surahAyat: 'Q.S. Al-An\'ām [6]: 50',
          teksArab: 'قُلْ لَّآ اَقُوْلُ لَكُمْ عِنْدِيْ خَزَاۤىِٕنُ اللّٰهِ وَلَآ اَعْلَمُ الْغَيْبَ وَلَآ اَقُوْلُ لَكُمْ اِنِّيْ مَلَكٌ ۚ اِنْ اَتَّبِعُ اِلَّا مَا يُوْحٰىٓ اِلَيَّ ۗ',
          terjemah: 'Katakanlah (Muhammad), "Aku tidak mengatakan kepadamu bahwa perbendaharaan Allah ada padaku, dan aku tidak mengetahui yang gaib dan aku tidak (pula) mengatakan kepadamu bahwa aku malaikat. Aku hanya mengikuti apa yang diwahyukan kepadaku"...'
        },
        penjelasanMendalam:
          'Mustahil rasul menyembunyikan wahyu walau hanya satu ayat, meskipun ayat tersebut berisi teguran keras bagi diri beliau sendiri (seperti dalam Q.S. \'Abasa).',
        contohPenerapanPelajar:
          'Tidak menyembunyikan informasi pengumuman penting sekolah kepada teman, tidak pelit berbagi ilmu materi pelajaran.'
      },
      {
        kategori: 'Mustahil',
        namaArab: 'البَلَادَةُ',
        namaLatin: 'Al-Balādah',
        arti: 'Bodoh / Dungu / Pelupa Parah',
        lawanSifat: 'Al-Faṭānah',
        dalilQuran: {
          surahAyat: 'Q.S. Al-A\'rāf [7]: 199',
          teksArab: 'خُذِ الْعَفْوَ وَأْمُرْ بِالْعُرْفِ وَاَعْرِضْ عَنِ الْجٰهِلِيْنَ',
          terjemah: 'Jadilah pemaaf dan suruhlah orang mengerjakan yang makruf, serta berpalinglah dari orang-orang yang bodoh.'
        },
        penjelasanMendalam:
          'Mustahil rasul berkarakter bodoh atau dungu. Jika rasul bodoh, tentu mereka tidak sanggup memimpin umat dan mudah diperdaya oleh para musuh Islam.',
        contohPenerapanPelajar:
          'Menghilangkan kemalasan belajar, tidak bersikap pasrah tanpa ikhtiar memahami pelajaran matematika atau IPA.'
      }
    ],
    sifatJaiz: {
      kategori: 'Jaiz',
      namaArab: 'الأَعْرَاضُ البَشَرِيَّةُ',
      namaLatin: 'Al-A\'rāḍul Basyariyyah',
      arti: 'Sifat-Sifat Kemanusiaan Biasa yang Tidak Menjatuhkan Martabat Kenabian',
      dalilQuran: {
        surahAyat: 'Q.S. Al-Furqān [25]: 20 & Q.S. Al-Kahf [18]: 110',
        teksArab: 'وَمَآ اَرْسَلْنَا قَبْلَكَ مِنَ الْمُرْسَلِيْنَ اِلَّآ اِنَّهُمْ لَيَأْكُلُوْنَ الطَّعَامَ وَيَمْشُوْنَ فِى الْاَسْوَاقِ ۗ',
        terjemah: 'Dan Kami tidak mengutus rasul-rasul sebelummu (Muhammad), melainkan mereka pasti memakan makanan dan berjalan di pasar-pasar...'
      },
      penjelasanMendalam:
        'Sifat Jaiz bagi para rasul adalah sifat kemanusiaan yang wajar ada pada setiap manusia biasa, seperti makan, minum, tidur, beristri, bekerja/berdagang, merasa lelah, sedih yang wajar, dan sakit ringan yang tidak menjijikkan serta tidak mengurangi kewibawaan risalah mereka. Hal ini membuktikan bahwa para rasul adalah manusia sejati (bukan malaikat atau tuhan), sehingga keteladanan mereka realistis untuk ditiru oleh manusia.',
      contohPenerapanPelajar:
        'Memahami bahwa manusia memiliki fitrah butuh istirahat yang cukup, makan makanan halal-thayyib, berolahraga, dan menjaga kesehatan jasmani agar kuat beribadah dan menuntut ilmu.'
    }
  },
  contohKeteladanan: {
    pengantar:
      'Meneladani sifat para rasul bukan sekadar menghafal kisah masa lampau, melainkan mentransformasikan nilai-nilai keluhuran budi pekerti rasul ke dalam perilaku nyata di lingkungan madrasah, keluarga, masyarakat, dan ruang media sosial.',
    daftarTeladan: [
      {
        id: 'teladan-1',
        tokohRasul: 'Nabi Muhammad Saw.',
        sikapTeladan: 'Integritas Kejujuran (Al-Amīn) & Pemaaf Tanpa Batas',
        kisahInspiratif:
          'Sejak usia muda sebelum diangkat menjadi nabi, beliau telah dipercaya seluruh suku Quraisy mengembalikan Hajar Aswad ke Ka\'bah karena kejujuran mutlaknya. Ketika menaklukkan kota Makkah (Fathu Makkah 630 M), beliau tidak menaruh dendam kepada para kafir Quraisy yang pernah menyiksanya, melainkan mengumumkan: "Pergilah kalian, karena sesungguhnya kalian semua bebas!"',
        nilaiKarakterUtama: 'Kejujuran akademis, anti-dendam, dan kebesaran jiwa memaafkan orang yang pernah menyakiti.',
        konteksPelajarMasaKini:
          'Mengakui kesalahan jika lupa mengerjakan tugas tanpa melempar kambing hitam ke orang lain, serta memaafkan teman yang tidak sengaja merusak barang kita.'
      },
      {
        id: 'teladan-2',
        tokohRasul: 'Nabi Ibrahim A.S.',
        sikapTeladan: 'Keteguhan Tauhid & Sikap Kritis terhadap Tradisi Salah',
        kisahInspiratif:
          'Nabi Ibrahim berani menggunakan logika berpikir jernih menentang penyembahan berhala dan astrologi keliru kaumnya. Beliau tabah saat diuji meninggalkan keluarganya di gurun pasir dan rela mengurbankan apa yang paling dicintainya demi mentaati perintah Allah Swt.',
        nilaiKarakterUtama: 'Keberanian berpikir kritis (critical thinking), kemandirian prinsip, dan ketaatan kepada Tuhan.',
        konteksPelajarMasaKini:
          'Berani menolak ajaran radikalisme, tawuran, atau tren pergaulan bebas yang marak di medsos walau teman sebaya mengikutinya.'
      },
      {
        id: 'teladan-3',
        tokohRasul: 'Nabi Ayyub A.S.',
        sikapTeladan: 'Kesabaran Hakiki (Shabrun Jamīl) Tanpa Mengeluh',
        kisahInspiratif:
          'Diuji dengan hilangnya seluruh kekayaan ternak dan kebun, meninggalnya semua putra-putrinya, serta tertimpa penyakit kulit parah selama 18 tahun, Nabi Ayyub tidak pernah melontarkan sepatah kata pun keluhan atau prasangka buruk kepada Allah Swt., melainkan semakin khusyuk berdzikir.',
        nilaiKarakterUtama: 'Resiliensi mental, pantang putus asa saat musibah, dan husnudzan kepada takdir Allah.',
        konteksPelajarMasaKini:
          'Tetap sabar dan tabah ketika nilai ujian remidi, tidak menyalahkan guru, melainkan mengevaluasi diri dan belajar lebih giat lagi.'
      },
      {
        id: 'teladan-4',
        tokohRasul: 'Nabi Musa A.S.',
        sikapTeladan: 'Keberanian Membela Keadilan & Anti-Penindasan',
        kisahInspiratif:
          'Nabi Musa mendatangi istana Fir\'aun yang terkenal kejam tanpa rasa gentar demi membebaskan kaum tertindas (Bani Israil) dari belenggu perbudakan kejam. Beliau berdiri tegak di garis depan membela hak-hak asasi manusia yang diinjak-injak.',
        nilaiKarakterUtama: 'Keadilan sosial, pembela kaum lemah (mustadh\'afīn), dan berani menyuarakan kebenaran.',
        konteksPelajarMasaKini:
          'Menjadi pelindung bagi adik kelas atau teman yang menjadi korban bullying fisik maupun cyberbullying di grup chat sekolah.'
      },
      {
        id: 'teladan-5',
        tokohRasul: 'Nabi Yusuf A.S.',
        sikapTeladan: 'Menjaga Kehormatan Diri (Iffah) & Manajemen Amanah',
        kisahInspiratif:
          'Ketika digoda oleh permaisuri bangsawan (Zulaikha) dalam kamar tertutup, Nabi Yusuf memilih dipenjara daripada terjerumus maksiat zina. Saat diangkat menjadi menteri ekonomi, beliau mengelola logistik pangan dengan jujur dan menyelamatkan jutaan nyawa dari kelaparan.',
        nilaiKarakterUtama: 'Integritas moral menjaga diri dari pornografi, profesionalitas, dan anti-korupsi.',
        konteksPelajarMasaKini:
          'Menolak pornografi dan konten negatif di internet, menjaga pandangan mata, serta mengelola dana organisasi OSIS dengan transparan.'
      }
    ],
    studiKasusEtikaPelajar: [
      {
        judulKasus: 'Dilema Integritas: Bocoran Kunci Jawaban Ujian di Grup Chat',
        deskripsiMasalah:
          'Menjelang Penilaian Akhir Semester (PAS), seorang siswa menyebarkan foto lembar kunci jawaban yang bocor ke grup WhatsApp kelas. Sebagian siswa memanfaatkan kunci tersebut demi mengejar nilai 100 tanpa belajar.',
        analisisNilaiKeteladanan:
          'Sifat Aṣ-Ṣiddīq dan Al-Amānah menuntut seorang mukmin mengutamakan kejujuran dan keberkahan ilmu daripada nilai tinggi yang diperoleh dari jalan curang/khianat.',
        solusiKarakterIslami:
          'Menolak menggunakan bocoran tersebut, berani menegur di grup dengan santun, serta melaporkan kebocoran kepada pihak berwenang sekolah demi menjaga keadilan seluruh peserta didik.'
      },
      {
        judulKasus: 'Perundungan Siber (Cyberbullying) terhadap Teman Sekelas',
        deskripsiMasalah:
          'Seorang siswi pendiam dijadikan bahan olok-olok dan diedit fotonya menjadi meme lucu yang memalukan di media sosial hingga ia menangis dan enggan masuk sekolah.',
        analisisNilaiKeteladanan:
          'Meneladani Nabi Isa A.S. dan Nabi Muhammad Saw. yang penuh kasih sayang serta Nabi Musa A.S. yang membela orang tertindas.',
        solusiKarakterIslami:
          'Segera menghibur korban, tidak ikut tertawa atau membagikan meme tersebut, meminta pembuat unggahan menghapus postingan, dan melaporkan kepada guru Bimbingan Konseling (BK).'
      },
      {
        judulKasus: 'Amanah Tanggung Jawab Proyek Kelompok Sekolah',
        deskripsiMasalah:
          'Dalam tugas proyek kolaborasi 4 orang, salah satu anggota yang ditugaskan membuat slide presentasi asyik bermain game online hingga menjelang malam deadline tanpa kabar.',
        analisisNilaiKeteladanan:
          'Meneladani sifat Tabligh (komunikatif) dan Amanah (tanggung jawab atas komitmen bersama).',
        solusiKarakterIslami:
          'Mengingatkan teman tersebut secara personal dengan bahasa bersahabat, membantunya jika mengalami kendala teknis, serta mengajarkan disiplin waktu demi kesuksesan bersama.'
      }
    ]
  },
  hikmahBerimanKepadaRasul: [
    {
      id: 'hikmah-1',
      nomor: 1,
      judulHikmah: 'Menyempurnakan Rukun Iman & Menjernihkan Akidah Tauhid',
      penjelasan:
        'Keimanan kepada Allah Swt. tidak akan sah dan sempurna tanpa beriman kepada para rasul yang diutus-Nya. Beriman kepada rasul membebaskan akal dari kemusyrikan dan takhayul.',
      dalilPendukung: 'Q.S. An-Nisā\' [4]: 136',
      dampakPerilakuPositif: 'Ibadah menjadi terarah sesuai tuntunan sunnah yang shahih, tidak mencampuradukkan agama dengan syirik.'
    },
    {
      id: 'hikmah-2',
      nomor: 2,
      judulHikmah: 'Memiliki Teladan Hidup (Role Model) yang Sempurna & Nyata',
      penjelasan:
        'Manusia membutuhkan figur konkret yang dapat ditiru. Para rasul menghadirkan model manusia paripurna dalam kejujuran, kepemimpinan, kepedulian sosial, dan akhlak berumah tangga.',
      dalilPendukung: 'Q.S. Al-Ahzāb [33]: 21',
      dampakPerilakuPositif: 'Memiliki arah pedoman hidup yang jelas di tengah maraknya pengaruh negatif figur idola yang tidak bermoral.'
    },
    {
      id: 'hikmah-3',
      nomor: 3,
      judulHikmah: 'Terdorong Berakhlak Mulia (Akhlāqul Karīmah) dalam Kehidupan',
      penjelasan:
        'Mempelajari kepribadian rasul menumbuhkan rasa malu untuk berbuat maksiat, serta memicu semangat untuk menghiasi diri dengan sifat jujur, dermawan, santun, dan tawadhu\'.',
      dalilPendukung: 'Hadis: "Innamā bu\'iṡtu li\'utammima makārimal akhlāq" (H.R. Al-Bukhari & Ahmad)',
      dampakPerilakuPositif: 'Terbentuk pribadi pelajar yang santun kepada guru, berbakti kepada orang tua, dan menghargai sesama.'
    },
    {
      id: 'hikmah-4',
      nomor: 4,
      judulHikmah: 'Memperoleh Ketabahan & Resiliensi dalam Menghadapi Cobaan',
      penjelasan:
        'Mengingat beratnya ujian para rasul Ulul Azmi membuat cobaan yang kita hadapi terasa ringan. Timbul keyakinan bahwa bersama kesulitan selalu ada kemudahan dari Allah Swt.',
      dalilPendukung: 'Q.S. Al-Baqarah [2]: 214 & Q.S. Al-Insyirah: 5-6',
      dampakPerilakuPositif: 'Tidak mudah stres atau depresi saat menghadapi kegagalan nilai, melainkan bangkit dan berusaha kembali.'
    },
    {
      id: 'hikmah-5',
      nomor: 5,
      judulHikmah: 'Mensyukuri Nikmat Petunjuk Rahmatan lil \'Ālamīn',
      penjelasan:
        'Menyadari bahwa tanpa diutusnya para rasul, umat manusia akan tersesat dalam kebingungan moral. Pengutusan rasul adalah bukti cinta kasih Allah terbesar kepada segenap alam semesta.',
      dalilPendukung: 'Q.S. Al-Anbiyā\' [21]: 107',
      dampakPerilakuPositif: 'Rajin bershalawat kepada Nabi Muhammad Saw. dan bersemangat menyebarkan kemanfaatan bagi lingkungan sekitar.'
    },
    {
      id: 'hikmah-6',
      nomor: 6,
      judulHikmah: 'Meraih Syafa\'at \'Uzmā & Keselamatan Dunia Akhirat',
      penjelasan:
        'Orang yang beriman tulus, mencintai rasul, dan memperbanyak shalawat akan memperoleh pembelaan (syafaat) dari Rasulullah Saw. di Padang Mahsyar serta dihimpun bersama para nabi di surga.',
      dalilPendukung: 'Hadis: "Al-Mar\'u ma\'a man aḥabba" (Seseorang bersama orang yang dicintainya, H.R. Bukhari-Muslim)',
      dampakPerilakuPositif: 'Memiliki ketenangan jiwa menghadapi kematian dan orientasi hidup yang seimbang antara dunia dan akhirat.'
    }
  ],
  refleksiKarakter: [
    {
      dimensi: 'Integritas & Kejujuran (Aṣ-Ṣiddīq)',
      indikator: 'Selalu berkata benar dan menolak perbuatan curang saat ujian atau tugas sekolah.',
      pertanyaanMuhasabah: 'Apakah selama ini saya sudah jujur mengerjakan tugas mandiri tanpa menyalin milik teman?'
    },
    {
      dimensi: 'Tanggung Jawab (Al-Amānah)',
      indikator: 'Menjalankan kewajiban ibadah shalat 5 waktu dan amanah tugas sekolah dengan tuntas.',
      pertanyaanMuhasabah: 'Sudahkah saya menepati janji kepada orang tua untuk belajar disiplin dan tidak menghabiskan waktu bermain gawai?'
    },
    {
      dimensi: 'Keberanian Menyampaikan Kebaikan (At-Tablīgh)',
      indikator: 'Berani mengingatkan teman untuk berbuat baik dan mencegah perbuatan yang merugikan.',
      pertanyaanMuhasabah: 'Ketika melihat teman berbuat salah atau mengejek teman lain, apakah saya berani mengingatkannya dengan sopan?'
    },
    {
      dimensi: 'Kecerdasan & Berpikir Kritis (Al-Faṭānah)',
      indikator: 'Semangat mempelajari ilmu pengetahuan agama dan umum serta menyaring informasi di internet.',
      pertanyaanMuhasabah: 'Apakah saya selalu memeriksa kebenaran berita di media sosial sebelum membagikannya ke orang lain?'
    },
    {
      dimensi: 'Kesabaran & Keteguhan Hati (Ulul Azmi)',
      indikator: 'Tabah dan tidak mudah putus asa saat menghadapi materi pelajaran yang sulit atau masalah hidup.',
      pertanyaanMuhasabah: 'Bagaimanakah sikap saya saat memperoleh nilai yang belum memuaskan? Apakah saya mengeluh atau belajar lebih rajin?'
    },
    {
      dimensi: 'Menjaga Kehormatan Diri (Iffah - Teladan Nabi Yusuf)',
      indikator: 'Menjauhi tontonan pornografi, pergaulan bebas, dan kata-kata kotor dalam percakapan.',
      pertanyaanMuhasabah: 'Apakah saya sudah menjaga pandangan mata dan jari jemari dari mengakses konten-konten tidak senonoh di gawai?'
    },
    {
      dimensi: 'Kepedulian & Empati Sosial (Rahmatan lil \'Alamin)',
      indikator: 'Suka menolong sesama yang kesusahan dan tidak membeda-bedakan latar belakang teman.',
      pertanyaanMuhasabah: 'Sudahkah saya menyisihkan sebagian uang jajan untuk infak dan peduli kepada teman yang sedang berduka?'
    },
    {
      dimensi: 'Kecintaan kepada Rasulullah Saw.',
      indikator: 'Rutin membaca shalawat, mempelajari riwayat sirah nabawiyah, dan mengamalkan sunnah harian.',
      pertanyaanMuhasabah: 'Berapa kali dalam sehari saya bershalawat kepada Nabi Muhammad Saw. sebagai bukti rindu kepada beliau?'
    }
  ],
  soalEvaluasiHots: [
    {
      id: 'soal-1',
      nomor: 1,
      stimulus:
        'Ketika Rasulullah Saw. menaklukkan kota Makkah (Fathu Makkah), ribuan kaum Quraisy yang dahulu pernah mencaci, memboikot hingga kelaparan, dan mengusir beliau dari tanah kelahirannya tertunduk ketakutan menunggu hukuman mati. Namun, Rasulullah Saw. justru bersabda: "Pada hari ini tidak ada cercaan atas kalian, pergilah kalian semua bebas!" Beliau memaafkan mereka tanpa syarat balas dendam.',
      pertanyaan:
        'Berdasarkan peristiwa tersebut, nilai keteladanan rasul yang paling tepat untuk diaktualisasikan oleh seorang pelajar dalam kehidupan sehari-hari adalah...',
      pilihan: [
        'A. Menunjukkan kekuatan fisik dan jabatan agar disegani oleh seluruh teman di sekolah',
        'B. Memaafkan teman yang pernah bersalah kepada kita tanpa membalas dendam dan merajut kembali ukhuwah',
        'C. Bersikap masa bodoh terhadap kesalahan orang lain asalkan kepentingan pribadi kita tidak terganggu',
        'D. Menuntut kompensasi ganti rugi materiil terlebih dahulu sebelum memaafkan perbuatan orang lain'
      ],
      kunciJawaban: 1,
      pembahasan:
        'Jawaban B benar. Peristiwa Fathu Makkah menunjukkan keluhuran akhlak Rasulullah Saw. yang memiliki kekuasaan penuh untuk membalas, namun memilih memaafkan secara tulus (al-\'afwu). Bagi pelajar, ini menjadi teladan untuk memaafkan teman tanpa menyimpan rasa dendam dan merawat persaudaraan.'
    },
    {
      id: 'soal-2',
      nomor: 2,
      stimulus:
        'Perhatikan tabel pernyataan berikut!\n(1) Setiap rasul pasti seorang nabi, tetapi tidak setiap nabi adalah rasul.\n(2) Nabi wajib menyampaikan wahyu kepada kaum yang membangkang, sedangkan rasul hanya untuk dirinya sendiri.\n(3) Rasul membawa syariat atau kitab suci baru untuk umatnya yang ingkar, sedangkan nabi melanjutkan syariat sebelumnya.\n(4) Jumlah rasul lebih banyak dibandingkan jumlah seluruh nabi di muka bumi.',
      pertanyaan:
        'Pernyataan yang tepat mengenai perbedaan fundamental antara Nabi dan Rasul dalam akidah Islam ditunjukkan oleh nomor...',
      pilihan: [
        'A. (1) dan (2)',
        'B. (1) dan (3)',
        'C. (2) dan (4)',
        'D. (3) dan (4)'
      ],
      kunciJawaban: 1,
      pembahasan:
        'Jawaban B benar. Pernyataan (1) benar karena derajat rasul mencakup kenabian. Pernyataan (3) benar karena rasul diutus dengan mandat tabligh kepada kaum pembangkang dan membawa syariat/kitab baru. Pernyataan (2) salah karena terbalik (rasul yang wajib tabligh ke kaum ingkar). Pernyataan (4) salah karena jumlah nabi (124.000) jauh lebih banyak dari rasul (313).'
    },
    {
      id: 'soal-3',
      nomor: 3,
      stimulus:
        'Rian terpilih sebagai ketua panitia peringatan Isra\' Mi\'raj di sekolahnya. Ia diberikan dana anggaran kegiatan sebesar Rp 5.000.000,- oleh pihak sekolah. Setelah acara selesai dengan sukses, terdapat sisa dana sebesar Rp 650.000,-. Salah seorang teman mengusulkan agar sisa dana tersebut dibagi rata saja tanpa perlu dilaporkan dalam lembar pertanggungjawaban (LPJ). Namun, Rian menolak tegas dan mencatat setiap pengeluaran hingga sisa dana dikembalikan secara utuh kepada bendahara sekolah.',
      pertanyaan:
        'Tindakan terpuji yang dilakukan Rian merupakan cerminan nyata dari meneladani sifat wajib rasul, yaitu...',
      pilihan: [
        'A. Aṣ-Ṣiddīq dan Al-Amānah',
        'B. At-Tablīgh dan Al-Balādah',
        'C. Al-Faṭānah dan Al-Kitmān',
        'D. Al-A\'rāḍul Basyariyyah'
      ],
      kunciJawaban: 0,
      pembahasan:
        'Jawaban A benar. Kejujuran Rian dalam mencatat pembukuan keuangan mencerminkan sifat Aṣ-Ṣiddīq (benar/jujur), dan keteguhannya menjaga uang titipan serta mengembalikan sisa dana mencerminkan sifat Al-Amānah (dapat dipercaya dan bertanggung jawab).'
    },
    {
      id: 'soal-4',
      nomor: 4,
      stimulus:
        'Para rasul Allah Swt. juga mengalami rasa lapar, dahaga, membutuhkan tidur di malam hari, mencari nafkah berdagang, berumah tangga, serta merasakan rasa sakit biasa yang tidak menjijikkan. Kondisi ini dijelaskan dalam Q.S. Al-Furqān ayat 20.',
      pertanyaan:
        'Sifat tersebut dalam kaidah akidah Islam dinamakan sifat...',
      pilihan: [
        'A. Sifat Wajib bagi rasul',
        'B. Sifat Mustahil bagi rasul',
        'C. Sifat Jaiz (Al-A\'rāḍul Basyariyyah)',
        'D. Sifat Ma\'shūm murni'
      ],
      kunciJawaban: 2,
      pembahasan:
        'Jawaban C benar. Sifat Jaiz bagi para rasul adalah Al-A\'rāḍul Basyariyyah, yaitu sifat-sifat kemanusiaan biasa yang tidak sampai mencoreng kemuliaan dan martabat kenabian mereka. Hal ini menjadi bukti nyata bahwa rasul adalah manusia sehingga suri teladan mereka dapat dipraktikkan oleh manusia biasa.'
    },
    {
      id: 'soal-5',
      nomor: 5,
      stimulus:
        'Nabi Nuh A.S. berdakwah selama 950 tahun dengan kesabaran luar biasa meskipun hanya sedikit yang beriman. Nabi Ibrahim A.S. tabah dilempar ke api unggun dan diuji mengurbankan putranya. Nabi Musa A.S. tegar menghadapi tirani Fir\'aun. Nabi Isa A.S. tulus menghadapi konspirasi kaumnya. Nabi Muhammad Saw. memaafkan penduduk Thaif yang melukainya.',
      pertanyaan:
        'Kelima rasul agung tersebut digelari sebagai Rasul Ulul Azmi karena...',
      pilihan: [
        'A. Memiliki pengikut yang paling banyak di seluruh penjuru dunia sepanjang zaman',
        'B. Memiliki ketabahan, kesabaran, dan keteguhan tekad yang luar biasa melampaui rasul lainnya dalam menghadapi cobaan dakwah',
        'C. Menurunkan seluruh raja dan penguasa besar dalam peradaban manusia kuno',
        'D. Tidak pernah merasakan lapar, lelah, ataupun sakit jasmani sama sekali'
      ],
      kunciJawaban: 1,
      pembahasan:
        'Jawaban B benar. Ulul Azmi (Q.S. Al-Ahqaf: 35) secara bahasa berarti memiliki keteguhan tekad. Istilah ini dinisbatkan kepada 5 rasul (Nuh, Ibrahim, Musa, Isa, Muhammad) atas kesabaran dan ketabahan spiritual yang luar biasa dalam memikul beban dakwah yang mahaberat dari kaumnya.'
    }
  ]
};
