export interface DalilCintaRasulItem {
  id: string;
  judul: string;
  sumber: string;
  kategori: 'Al-Qur\'an' | 'Hadits';
  teksArab: string;
  transliterasi: string;
  terjemahan: string;
  kandunganMakna: string[];
  audioUrl?: string;
}

export interface SifatRasulItem {
  nama: string;
  namaArab: string;
  arti: string;
  lawan: string;
  lawanArab: string;
  artiLawan: string;
  penjelasan: string;
  contohPenerapanSiswa: string;
}

export interface PerilakuCintaRasulItem {
  id: string;
  kategori: string;
  judul: string;
  deskripsi: string;
  dalilPendukung: string;
  contohKonkret: string[];
  tipsPenerapan: string;
  iconName: string;
}

export interface ManfaatCintaRasulItem {
  id: string;
  ranah: 'Duniawi' | 'Ukhrawi';
  judul: string;
  deskripsi: string;
  dalilRujukan: string;
  dampakBagiPelajar: string;
}

export interface StudiKasusRefleksiItem {
  id: string;
  judul: string;
  situasi: string;
  pertanyaanPemantik: string;
  analisisKeteladanan: string;
  solusiQurani: string;
}

export interface SoalHotsBab3Kelas8 {
  id: string;
  nomor: number;
  kasus: string;
  pertanyaan: string;
  pilihan: string[];
  kunciJawaban: number;
  pembahasan: string;
}

export interface MateriKelas8Sem1Bab3 {
  babNumber: number;
  judulBab: string;
  subJudul: string;
  elemenCp: string;
  fase: string;
  semester: string;
  pengantar: {
    apersepsi: string;
    tujuanPembelajaran: string[];
  };
  pengertianCintaRasul: {
    pengertianBahasa: string;
    pengertianIstilah: string;
    kedudukanDalamAkidah: string;
    tingkatanMahabbah: {
      tingkat: string;
      penjelasan: string;
      statusHukum: string;
    }[];
    hakHakRasul: {
      hak: string;
      namaArab: string;
      penjelasan: string;
    }[];
    sifatWajibDanMustahil: SifatRasulItem[];
  };
  dalilNaqliCintaRasul: {
    pengantar: string;
    daftarDalil: DalilCintaRasulItem[];
  };
  contohPerilakuCintaRasul: {
    pengantar: string;
    daftarPerilaku: PerilakuCintaRasulItem[];
    sunnahHarianPelajar: {
      waktu: string;
      amalanSunnah: string;
      keutamaan: string;
    }[];
  };
  manfaatCintaRasul: {
    pengantar: string;
    daftarManfaat: ManfaatCintaRasulItem[];
  };
  refleksiDanMuhasabah: {
    pengantar: string;
    studiKasus: StudiKasusRefleksiItem[];
    indikatorRefleksiDiri: {
      id: number;
      pernyataan: string;
      dimensi: string;
    }[];
    komitmenAksiPelajar: string[];
  };
  kuisHots: SoalHotsBab3Kelas8[];
}

export const MATERI_KELAS_8_SEM_1_BAB_3: MateriKelas8Sem1Bab3 = {
  babNumber: 3,
  judulBab: 'Menerapkan Makna Cinta Rasul',
  subJudul: 'Meneladani Akhlak Mulia dan Meraih Syafaat Rasulullah Saw.',
  elemenCp: 'Akidah & Akhlak',
  fase: 'Fase D (SMP/MTs)',
  semester: 'Semester 1',

  pengantar: {
    apersepsi:
      'Pernahkah kamu mengagumi seorang idola hingga kamu ingin meniru cara berpakaian, berbicara, dan gaya hidupnya? Dalam Islam, figur teladan sejati yang pantas kita cintai dan teladani sepanjang hayat adalah baginda Nabi Muhammad Saw. Mencintai Rasulullah Saw. bukan sekadar luapan emosi atau peringatan seremonial semata, melainkan fondasi keimanan yang dibuktikan dengan kepatuhan menjalankan sunnah beliau, berakhlak mulia, dan memperbanyak shalawat. Melalui bab ini, kita akan mendalami makna cinta Rasulullah secara komprehensif, mengkaji dalil-dalil naqlinya, meneladani perilakunya dalam keseharian, serta merefleksikan diri demi meraih manisnya iman dan syafaat di akhirat.',
    tujuanPembelajaran: [
      'Menjelaskan pengertian cinta kepada Rasulullah Saw. secara bahasa dan istilah syariat',
      'Menganalisis dalil naqli Al-Qur\'an dan hadis sahih tentang kewajiban dan keutamaan mencintai Rasulullah Saw.',
      'Menelaah contoh-contoh perilaku nyata sebagai wujud cinta kepada Rasulullah Saw. (akhlak, sunnah harian, shalawat, sirah, dan membela syariat)',
      'Mengidentifikasi berbagai manfaat dan hikmah agung mencintai Rasulullah Saw. baik di kehidupan dunia maupun akhirat',
      'Merefleksikan perilaku cinta kepada Rasulullah Saw. dalam memecahkan problematika moral siswa serta membiasakan sunnah harian'
    ]
  },

  pengertianCintaRasul: {
    pengertianBahasa:
      'Secara bahasa (etimologi), kata cinta berasal dari bahasa Arab al-mahabbah (المَحَبَّةُ) yang bermakna kecenderungan hati yang sangat mendalam kepada sesuatu yang dipandang indah, sempurna, dan mendatangkan kebaikan. Cinta kepada rasul berarti memautkan hati, kerinduan, dan rasa hormat yang mendalam kepada utusan Allah Swt.',
    pengertianIstilah:
      'Secara istilah (terminologi syariat), cinta kepada Rasulullah Saw. adalah kecenderungan jiwa dan keteguhan batin seorang mukmin untuk mengagungkan, memuliakan, mengutamakan, serta menaati seluruh petunjuk Nabi Muhammad Saw. melebihi kecintaan kepada diri sendiri, orang tua, anak, harta, dan seluruh umat manusia, yang diwujudkan melalui ittiba\' (mengikuti sunnah) secara konsisten baik lahir maupun batin.',
    kedudukanDalamAkidah:
      'Mencintai Rasulullah Saw. berkedudukan sebagai rukun dan konsekuensi mutlak dari syahadat kedua (Asyhadu anna Muhammadar Rasulullah). Seseorang tidak dianggap beriman secara sempurna sebelum ia menempatkan cinta kepada Rasulullah Saw. di atas segala kecintaan duniawi. Cinta kepada Rasul adalah jembatan hakiki menuju cinta kepada Allah Swt., karena Allah tidak menerima pengakuan cinta dari hamba-Nya tanpa melalui keteladanan Rasul-Nya.',
    tingkatanMahabbah: [
      {
        tingkat: '1. Cinta Wajib (Fardu \'Ain)',
        penjelasan:
          'Kecintaan yang menuntut kepatuhan mutlak terhadap perintah Rasulullah Saw., menjauhi larangannya, membenarkan seluruh berita yang beliau bawa, serta mendahulukan hukum beliau di atas hawa nafsu dan tradisi.',
        statusHukum: 'Wajib bagi setiap mukmin; meninggalkannya membatalkan kesempurnaan iman.'
      },
      {
        tingkat: '2. Cinta Utama (Mustahab / Sunnah Muakkadah)',
        penjelasan:
          'Kecintaan yang mendalam sehingga seorang mukmin bersemangat meneladani seluruh sunnah-sunnah mustahab, adab-adab keseharian beliau, memperbanyak shalawat, dan menaruh perhatian besar pada keluarga (ahlul bait) dan sahabat nabi.',
        statusHukum: 'Sunnah yang meninggikan derajat seorang hamba menuju kedudukan wali dan muttaqin.'
      },
      {
        tingkat: '3. Batasan Syar\'i (Larangan Ghuluw / Ekstrem)',
        penjelasan:
          'Cinta kepada Rasulullah Saw. harus senantiasa dalam koridor syariat. Tidak boleh berlebihan (ghuluw) hingga mengangkat derajat nabi menyamai Allah Swt. (seperti memohon doa ampunan secara langsung kepada nabi seolah beliau tuhan pencipta). Nabi adalah hamba dan utusan Allah (\'abduhu wa rasuluh).',
        statusHukum: 'Wajib waspada agar akidah tauhid tetap murni dan terpelihara.'
      }
    ],
    hakHakRasul: [
      {
        hak: 'At-Tashdiq (Membenarkan)',
        namaArab: 'التَّصْدِيقُ بِمَا أَخْبَرَ',
        penjelasan: 'Membenarkan dan meyakini dengan teguh segala wahyu, sabda, dan kabar gaib yang disampaikan beliau tanpa ragu.'
      },
      {
        hak: 'Ath-Tha\'ah (Menaati Perintah)',
        namaArab: 'الطَّاعَةُ فِيمَا أَمَرَ',
        penjelasan: 'Tunduk patuh melaksanakan segala syariat, hukum, dan anjuran yang diperintahkan Rasulullah Saw.'
      },
      {
        hak: 'Al-Ijtinab (Menjauhi Larangan)',
        namaArab: 'الِاجْتِنَابُ عَمَّا نَهَى عَنْهُ وَزَجَرَ',
        penjelasan: 'Menjauhkan diri sejauh-jauhnya dari segala perkara yang diharamkan atau dilarang oleh Rasulullah Saw.'
      },
      {
        hak: 'Al-Ittiba\' (Meneladani Sunnah)',
        namaArab: 'الِاتِّبَاعُ وَالِاقْتِدَاءُ',
        penjelasan: 'Beribadah dan berakhlak hanya sesuai dengan tata cara yang dicontohkan Rasulullah Saw. tanpa menambah-nambahi hal yang menyelisihi syariat.'
      },
      {
        hak: 'At-Ta\'zhim wan-Nusrah (Memuliakan & Membela)',
        namaArab: 'التَّعْظِيمُ وَالتَّوْقِيرُ وَالنُّصْرَةُ',
        penjelasan: 'Menghormati kehormatan beliau, tidak merendahkan sabdanya, serta membela ajaran beliau dari fitnah dan penghinaan.'
      },
      {
        hak: 'Katsratush-Shalah \'Alayh (Memperbanyak Shalawat)',
        namaArab: 'كَثْرَةُ الصَّلَاةِ وَالسَّلَامِ عَلَيْهِ',
        penjelasan: 'Senantiasa melantunkan shalawat dan salam saat mendengar nama beliau disebut dan pada waktu-waktu utama.'
      }
    ],
    sifatWajibDanMustahil: [
      {
        nama: 'Shiddiq',
        namaArab: 'صِدِّيقٌ',
        arti: 'Selalu Benar dan Jujur',
        lawan: 'Kizzib',
        lawanArab: 'كِذْبٌ',
        artiLawan: 'Bohong / Dusta',
        penjelasan: 'Rasul mustahil berdusta baik dalam menyampaikan wahyu maupun dalam perkataan sehari-hari.',
        contohPenerapanSiswa: 'Tidak pernah menyontek, tidak berbohong kepada orang tua dan guru, serta berani berkata jujur meski pahit.'
      },
      {
        nama: 'Amanah',
        namaArab: 'أَمَانَةٌ',
        arti: 'Dapat Dipercaya',
        lawan: 'Khianat',
        lawanArab: 'خِيَانَةٌ',
        artiLawan: 'Berkhianat / Ingkar Janji',
        penjelasan: 'Rasul senantiasa menjaga kepercayaan Allah dan manusia seutuhnya tanpa pernah menyimpang.',
        contohPenerapanSiswa: 'Menjaga rahasia teman, mengembalikan barang pinjaman tepat waktu, dan mengemban tugas piket atau pengurus kelas dengan ikhlas.'
      },
      {
        nama: 'Tabligh',
        namaArab: 'تَبْلِيغٌ',
        arti: 'Menyampaikan Risalah',
        lawan: 'Kitman',
        lawanArab: 'كِتْمَانٌ',
        artiLawan: 'Menyembunyikan Kebenaran',
        penjelasan: 'Rasul menyampaikan seluruh wahyu yang diamanahkan Allah tanpa ada satu ayat pun yang disembunyikan.',
        contohPenerapanSiswa: 'Menyampaikan nasihat kebaikan secara santun, berani membela teman yang dizalimi, dan membagikan ilmu yang bermanfaat.'
      },
      {
        nama: 'Fathanah',
        namaArab: 'فَطَانَةٌ',
        arti: 'Cerdas dan Bijaksana',
        lawan: 'Baladah',
        lawanArab: 'بَلَادَةٌ',
        artiLawan: 'Bodoh / Dungu',
        penjelasan: 'Rasul dianugerahi kecerdasan intelektual, emosional, dan spiritual tinggi untuk menyelesaikan setiap persoalan umat.',
        contohPenerapanSiswa: 'Rajin belajar dan bernalar kritis, mampu menyelesaikan konflik pertemanan dengan damai, serta bijak dalam menggunakan media sosial.'
      }
    ]
  },

  dalilNaqliCintaRasul: {
    pengantar:
      'Kewajiban dan urgensi mencintai Rasulullah Saw. ditegaskan secara eksplisit dalam ayat-ayat Al-Qur\'anul Karim dan hadis-hadis sahih. Dalil-dalil ini menjadi landasan syariat bahwa cinta Rasul adalah tolok ukur kesempurnaan iman seorang mukmin.',
    daftarDalil: [
      {
        id: 'dalil-aliimran-31',
        judul: 'Ayat Mahabbah: Bukti Cinta kepada Allah adalah Mengikuti Rasul-Nya',
        sumber: 'Q.S. Āli \'Imrān [3]: Ayat 31',
        kategori: 'Al-Qur\'an',
        teksArab: 'قُلْ إِنْ كُنْتُمْ تُحِبُّونَ اللَّهَ فَاتَّبِعُونِي يُحْبِبْكُمُ اللَّهُ وَيَغْفِرْ لَكُمْ ذُنُوبَكُمْ ۗ وَاللَّهُ غَفُورٌ رَحِيمٌ',
        transliterasi:
          'Qul ing kuntum tuhibbūnallāha fattabi\'ūnī yuhbibkumullāhu wa yaghfir lakum zunūbakum, wallāhu ghafūrur rahīm.',
        terjemahan:
          '"Katakanlah (Muhammad), \'Jika kamu mencintai Allah, ikutilah aku, niscaya Allah mencintaimu dan mengampuni dosa-dosamu.\' Dan Allah Maha Pengampun, Maha Penyayang."',
        kandunganMakna: [
          'Ayat ini dikenal para ulama sebagai "Ayatul Mihnah" (ayat ujian), yakni menguji siapa saja yang mengaku mencintai Allah.',
          'Klaim cinta kepada Allah tidak bernilai jika tidak dibarengi dengan ittiba\' (mengikuti sunnah Rasulullah Saw.).',
          'Balasan bagi orang yang meneladani Rasulullah Saw. sangat agung: dicintai oleh Sang Pencipta dan diampuni seluruh dosa-dosanya.'
        ],
        audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/003031.mp3'
      },
      {
        id: 'dalil-attaubah-24',
        judul: 'Peringatan Tegas Mendahulukan Cinta Rasul di Atas Kesenangan Dunia',
        sumber: 'Q.S. At-Taubah [9]: Ayat 24',
        kategori: 'Al-Qur\'an',
        teksArab:
          'قُلْ إِنْ كَانَ آبَاؤُكُمْ وَأَبْنَاؤُكُمْ وَإِخْوَانُكُمْ وَأَزْوَاجُكُمْ وَعَشِيرَتُكُمْ وَأَمْوَالٌ اقْتَرَفْتُمُوهَا وَتِجَارَةٌ تَخْشَوْنَ كَسَادَهَا وَمَسَاكِنُ تَرْضَوْنَهَا أَحَبَّ إِلَيْكُمْ مِنَ اللَّهِ وَرَسُولِهِ وَجِهَادٍ فِي سَبِيلِهِ فَتَرَبَّصُوا حَتَّىٰ يَأْتِيَ اللَّهُ بِأَمْرِهِ ۗ وَاللَّهُ لَا يَهْدِي الْقَوْمَ الْفَاسِقِينَ',
        transliterasi:
          'Qul ing kāna ābā\'ukum wa abnā\'ukum wa ikhwānukum wa azwājukum wa \'asyīratukum wa amwāluniqtaraftumūhā wa tijāratun takhsyawna kasādahā wa masākinu tardhawnahā ahabba ilaykum minallāhi wa rasūlihī wa jihādin fī sabīlihī fatarabbasū hattā ya\'tiyallāhu bi-amrih, wallāhu lā yahdil-qawmal-fāsiqīn.',
        terjemahan:
          '"Katakanlah: \'Jika bapak-bapakmu, anak-anakmu, saudara-saudaramu, istri-istrimu, kaum keluargamu, harta kekayaan yang kamu usahakan, perniagaan yang kamu khawatiri kerugiannya, dan rumah-rumah tempat tinggal yang kamu sukai, adalah lebih kamu cintai daripada Allah dan Rasul-Nya serta berjihad di jalan-Nya, maka tunggulah sampai Allah mendatangkan perintah-Nya (azab-Nya).\' Dan Allah tidak memberi petunjuk kepada orang-orang fasik."',
        kandunganMakna: [
          'Menyebutkan 8 kesenangan duniawi yang berpotensi melalaikan manusia dari cinta sejati.',
          'Peringatan keras (ancaman fasik) bagi siapa saja yang mendahulukan kepentingan keluarga, harta, atau status di atas syariat Allah dan Rasul-Nya.',
          'Mencintai Rasulullah Saw. harus berada di atas kecintaan fitrah manusiawi.'
        ],
        audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/009024.mp3'
      },
      {
        id: 'dalil-alahzab-21',
        judul: 'Rasulullah Saw. sebagai Uswatun Hasanah (Teladan Sempurna)',
        sumber: 'Q.S. Al-Ahzāb [33]: Ayat 21',
        kategori: 'Al-Qur\'an',
        teksArab:
          'لَقَدْ كَانَ لَكُمْ فِي رَسُولِ اللَّهِ أُسْوَةٌ حَسَنَةٌ لِمَنْ كَانَ يَرْجُو اللَّهَ وَالْيَوْمَ الْآخِرَ وَذَكَرَ اللَّهَ كَثِيرًا',
        transliterasi:
          'Laqad kāna lakum fī rasūlillāhi uswatun hasanatul liman kāna yarjullāha wal-yawmal-ākhira wa zakarallāha kasīrā.',
        terjemahan:
          '"Sungguh, telah ada pada (diri) Rasulullah itu suri teladan yang baik bagimu (yaitu) bagi orang yang mengharap (rahmat) Allah dan (kedatangan) hari kiamat dan dia banyak mengingat Allah."',
        kandunganMakna: [
          'Kepribadian dan sirah Nabi Muhammad Saw. adalah model hidup paling paripurna dalam setiap peran (pemimpin, pendidik, ayah, sahabat).',
          'Keteladanan ini hanya dapat diresapi oleh mereka yang memiliki visi akhirat dan senantiasa berzikir kepada Allah Swt.'
        ],
        audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/033021.mp3'
      },
      {
        id: 'dalil-alahzab-56',
        judul: 'Perintah Bershalawat kepada Nabi Muhammad Saw.',
        sumber: 'Q.S. Al-Ahzāb [33]: Ayat 56',
        kategori: 'Al-Qur\'an',
        teksArab:
          'إِنَّ اللَّهَ وَمَلَائِكَتَهُ يُصَلُّونَ عَلَى النَّبِيِّ ۚ يَا أَيُّهَا الَّذِينَ آمَنُوا صَلُّوا عَلَيْهِ وَسَلِّمُوا تَسْلِيمًا',
        transliterasi:
          'Innallāha wa malā\'ikatahū yushallūna \'alan-nabiyy, yā ayyuhallazīna āmanū shallū \'alayhi wa sallimū taslīmā.',
        terjemahan:
          '"Sesungguhnya Allah dan para malaikat-Nya bershalawat untuk Nabi. Wahai orang-orang yang beriman! Bershalawatlah kamu untuk Nabi dan ucapkanlah salam dengan penuh penghormatan kepadanya."',
        kandunganMakna: [
          'Shalawat Allah kepada Nabi bermakna limpahan rahmat dan pujian di hadapan malaikat tertinggi.',
          'Shalawat para malaikat bermakna permohonan ampunan dan keberkahan bagi beliau.',
          'Shalawat orang beriman adalah doa penghormatan, kecintaan, dan pengakuan atas jasa risalah beliau.'
        ],
        audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/033056.mp3'
      },
      {
        id: 'dalil-hadits-kesempurnaan-iman',
        judul: 'Hadis Kesempurnaan Iman Terletak pada Kecintaan kepada Rasul',
        sumber: 'H.R. Al-Bukhari No. 15 & Muslim No. 44 (dari Anas bin Malik r.a.)',
        kategori: 'Hadits',
        teksArab:
          'لَا يُؤْمِنُ أَحَدُكُمْ حَتَّى أَكُونَ أَحَبَّ إِلَيْهِ مِنْ وَالِدِهِ وَوَلَدِهِ وَالنَّاسِ أَجْمَعِينَ',
        transliterasi:
          'Lā yu\'minu ahadukum hattā akūna ahabba ilayhi min wālidihī wa waladihī wan-nāsi ajma\'īn.',
        terjemahan:
          '"Tidak sempurna iman salah seorang di antara kalian hingga aku lebih ia cintai daripada orang tuanya, anaknya, dan seluruh manusia."',
        kandunganMakna: [
          'Iman seseorang belum mencapai derajat kamil (sempurna) jika masih mendahulukan kehendak makhluk lain di atas petunjuk Nabi.',
          'Nabi Muhammad Saw. berjasa menyelamatkan manusia dari kegelapan jahiliah menuju cahaya hidayah abadi, jasa yang melampaui orang tua kandung sekalipun.'
        ]
      },
      {
        id: 'dalil-hadits-manisnya-iman',
        judul: 'Hadis Tiga Kunci Merasakan Manisnya Iman (Halāwatul Īmān)',
        sumber: 'H.R. Al-Bukhari No. 16 & Muslim No. 43 (dari Anas bin Malik r.a.)',
        kategori: 'Hadits',
        teksArab:
          'ثَلَاثٌ مَنْ كُنَّ فِيهِ وَجَدَ حَلَاوَةَ الْإِيمَانِ: أَنْ يَكُونَ اللَّهُ وَرَسُولُهُ أَحَبَّ إِلَيْهِ مِمَّا سِوَاهُمَا، وَأَنْ يُحِبَّ الْمَرْءَ لَا يُحِبُّهُ إِلَّا لِلَّهِ، وَأَنْ يَكْرَهَ أَنْ يَعُودَ فِي الْكُفْرِ كَمَا يَكْرَهُ أَنْ يُقْذَفَ فِي النَّارِ',
        transliterasi:
          'Salāsun man kunna fīhi wajada halāwatal-īmān: an yakūnallāhu wa rasūluhū ahabba ilayhi mimmā siwāhumā, wa an yuhibbal-mar\'a lā yuhibbuhū illā lillāh, wa an yakraha an ya\'ūda fil-kufri kamā yakrahu an yuqzafa fin-nār.',
        terjemahan:
          '"Tiga perkara yang barangsiapa memilikinya, ia akan merasakan manisnya iman: (1) Allah dan Rasul-Nya lebih ia cintai daripada selain keduanya; (2) Ia mencintai seseorang semata-mata karena Allah; dan (3) Ia benci kembali kepada kekufuran sebagaimana ia benci dilemparkan ke dalam api neraka."',
        kandunganMakna: [
          'Manisnya iman adalah kenikmatan batin saat beribadah dan kelezatan merasakan ketaatan kepada Allah dan Rasul-Nya.',
          'Mencintai Allah dan Rasul-Nya di urutan pertama adalah kunci pembuka ketenangan jiwa.'
        ]
      },
      {
        id: 'dalil-hadits-bersama-yang-dicintai',
        judul: 'Hadis Kabar Gembira: Seseorang Dikumpulkan Bersama yang Dicintainya',
        sumber: 'H.R. Al-Bukhari No. 6171 & Muslim No. 2640 (dari Anas bin Malik r.a.)',
        kategori: 'Hadits',
        teksArab:
          'أَنَّ رَجُلًا سَأَلَ النَّبِيَّ ﷺ: مَتَى السَّاعَةُ؟ قَالَ: «مَا أَعْدَدْتَ لَهَا؟» قَالَ: لَا شَيْءَ، إِلَّا أَنِّي أُحِبُّ اللَّهَ وَرَسُولَهُ. فَقَالَ: «أَنْتَ مَعَ مَنْ أَحْبَبْتَ». قَالَ أَنَسٌ: فَمَا فَرِحْنَا بِشَيْءٍ فَرَحَنَا بِقَوْلِ النَّبِيِّ ﷺ: «أَنْتَ مَعَ مَنْ أَحْبَبْتَ»',
        transliterasi:
          'Anna rajulan sa\'alan-nabiyya SAW: Matas-sā\'ah? Qāla: Mā a\'dadta lahā? Qāla: Lā syai\'a illā annī uhibbullāha wa rasūlah. Faqāla: Anta ma\'a man ahbabta. Qāla Anas: Famā farihnā bisyai\'in farahanā biqawlin-nabiyyi SAW: Anta ma\'a man ahbabta.',
        terjemahan:
          '"Ada seorang lelaki bertanya kepada Nabi Saw.: \'Kapan hari kiamat tiba?\' Nabi balik bertanya: \'Apa yang telah engkau persiapkan untuk menghadapinya?\' Lelaki itu menjawab: \'Tidak ada amal besar, hanya saja aku sangat mencintai Allah dan Rasul-Nya.\' Maka beliau bersabda: \'Engkau akan bersama dengan orang yang engkau cintai.\' Anas bin Malik berkata: \'Kami tidak pernah merasa sangat gembira setelah masuk Islam melebihi kegembiraan kami mendengar sabda Nabi: Engkau akan bersama orang yang engkau cintai!\'"',
        kandunganMakna: [
          'Cinta yang tulus kepada Rasulullah Saw. menjadi tiket emas dikumpulkan bersama beliau di surga kelak.',
          'Meskipun amalan sunnah kita belum setara dengan para sahabat nabi, kecintaan yang jujur kepada beliau akan mengangkat derajat kita di akhirat.'
        ]
      }
    ]
  },

  contohPerilakuCintaRasul: {
    pengantar:
      'Cinta sejati bukan sekadar kata-kata manis di bibir atau tulisan di media sosial. Cinta kepada Rasulullah Saw. menuntut pembuktian konkret dalam tindakan harian. Berikut adalah 6 pilar perilaku utama yang mencerminkan cinta tulus kepada Rasulullah Saw.:',
    daftarPerilaku: [
      {
        id: 'perilaku-meneladani-akhlak',
        kategori: 'Akhlakul Karimah',
        judul: '1. Meneladani Akhlak Mulia Rasulullah Saw.',
        deskripsi:
          'Menjadikan tutur kata, tata krama, dan budi pekerti Rasulullah Saw. sebagai pedoman hidup. Beliau dikenal sebagai pribadi yang pemaaf, lemah lembut, jujur, menyayangi anak yatim, dan menghormati yang lebih tua.',
        dalilPendukung: 'Q.S. Al-Qalam: 4 ("Dan sesungguhnya engkau benar-benar berbudi pekerti yang luhur.")',
        contohKonkret: [
          'Berkata jujur dan santun kepada siapa saja, menghindari ghibah dan kata-kata kotor/sarkasme.',
          'Mudah memaafkan kesalahan teman dan tidak membalas keburukan dengan dendam.',
          'Memiliki empati tinggi dengan membantu teman yang kesulitan belajar atau sedang berduka.',
          'Menjaga kebersihan diri, kelas, dan lingkungan sebagaimana sabda nabi: "Kebersihan adalah sebagian dari iman".'
        ],
        tipsPenerapan: 'Pilihlah satu akhlak nabi setiap minggu untuk dilatih secara fokus (misalnya pekan kejujuran, pekan senyum).',
        iconName: 'HeartHandshake'
      },
      {
        id: 'perilaku-menghidupkan-sunnah',
        kategori: 'Ibadah & Sunnah',
        judul: '2. Menghidupkan Sunnah Harian (Ittiba\' Sunnah)',
        deskripsi:
          'Membiasakan amalan-amalan yang dicontohkan Rasulullah Saw., baik yang berupa perkataan (qauliyah), perbuatan (fi\'liyah), maupun ketetapan beliau (taqririyah).',
        dalilPendukung: 'Hadis: "Barangsiapa menghidupkan sunnahku, sungguh ia telah mencintaiku..." (H.R. At-Tirmidzi)',
        contohKonkret: [
          'Makan dan minum menggunakan tangan kanan, dengan duduk, dan diawali dengan membaca basmalah.',
          'Membiasakan menebarkan salam ("Assalamu\'alaikum") saat bertemu sesama muslim.',
          'Membaca doa harian (doa bangun tidur, masuk/keluar kamar mandi, memakai pakaian, keluar rumah).',
          'Menjaga shalat fardu di awal waktu serta melengkapi dengan shalat sunnah Rawatib, Dhuha, dan Tahajjud.',
          'Berwudu sebelum tidur dan tidur miring ke sisi kanan menghadap kiblat.'
        ],
        tipsPenerapan: 'Gunakan checklist sunnah harian untuk memantau konsistensi ibadahmu setiap hari.',
        iconName: 'Sparkles'
      },
      {
        id: 'perilaku-memperbanyak-shalawat',
        kategori: 'Zikir & Doa',
        judul: '3. Gemar dan Memperbanyak Membaca Shalawat',
        deskripsi:
          'Memperbanyak shalawat dan salam kepada Rasulullah Saw. sebagai ekspresi rindu, penghormatan, serta permohonan rahmat Allah untuk beliau.',
        dalilPendukung: 'H.R. Muslim: "Barangsiapa bershalawat kepadaku sekali, maka Allah akan bershalawat (memberi rahmat) kepadanya sepuluh kali."',
        contohKonkret: [
          'Mengucapkan "Shallallahu \'alayhi wa sallam" setiap kali mendengar nama Nabi Muhammad disebut.',
          'Membiasakan membaca Shalawat Ibrahimiyah setiap selesai shalat fardu.',
          'Mengkhususkan hari Jumat untuk memperbanyak membaca shalawat minimal 100 kali.',
          'Membaca shalawat saat memulai doa, belajar, atau ketika hati merasa gundah.'
        ],
        tipsPenerapan: 'Jadikan shalawat sebagai zikir pengisi waktu luang saat berjalan ke sekolah atau menunggu antrean.',
        iconName: 'Volume2'
      },
      {
        id: 'perilaku-mempelajari-sirah',
        kategori: 'Ilmu & Wawasan',
        judul: '4. Mempelajari dan Mengkaji Sirah Nabawiyah',
        deskripsi:
          'Pepatah mengatakan "tak kenal maka tak sayang". Mustahil seseorang mencintai Rasulullah Saw. tanpa mengenal riwayat perjuangan, ketabahan, dan sejarah hidup beliau.',
        dalilPendukung: 'Perkataan Sahabat Sa\'ad bin Abi Waqqash r.a.: "Kami mengajarkan anak-anak kami sirah perang Rasulullah sebagaimana kami mengajarkan surah Al-Qur\'an."',
        contohKonkret: [
          'Membaca buku-buku sirah nabawiyah terpercaya (seperti Ar-Rahiq Al-Makhtum).',
          'Mendengarkan kajian kisah keteladanan Rasulullah Saw. dari guru PAI atau rekaman video edukatif islami.',
          'Menelaah bagaimana cara Rasulullah menghadapi perbedaan pendapat dan menjaga Piagam Madinah.',
          'Mengambil hikmah dari kesabaran nabi saat berdakwah di Thaif dan peristiwa Fathu Makkah.'
        ],
        tipsPenerapan: 'Luangkan waktu 10 menit setiap malam untuk membaca satu episode kisah kehidupan Rasulullah Saw.',
        iconName: 'BookOpen'
      },
      {
        id: 'perilaku-mencintai-ahlulbait-sahabat',
        kategori: 'Sosial & Ukhuwah',
        judul: '5. Mencintai Keluarga Nabi (Ahlul Bait) dan Para Sahabat',
        deskripsi:
          'Mencintai orang-orang yang dicintai Rasulullah Saw., yaitu keluarga suci beliau (istri-istri nabi/Ummahatul Mukminin, anak cucu) serta para sahabat yang telah berkorban membela risalah Islam.',
        dalilPendukung: 'Sabda Nabi Saw.: "Aku ingatkan kalian kepada Allah tentang keluargaku!" (H.R. Muslim)',
        contohKonkret: [
          'Menghormati dan mendoakan para Ummahatul Mukminin (Khadijah, Aisyah, dkk.) serta keturunan beliau.',
          'Meneladani keteguhan iman para Khulafaur Rasyidin (Abu Bakar, Umar, Utsman, Ali r.a.) dan sahabat lainnya.',
          'Menahan lisan dari mencela atau merendahkan salah seorang sahabat nabi.',
          'Meniru kedermawanan Sayyidina Utsman dan keberanian Sayyidina Ali bin Abi Thalib.'
        ],
        tipsPenerapan: 'Kenali kisah minimal 10 sahabat nabi yang dijamin masuk surga (Al-\'Asyarah Al-Mubasysyarūn bil-Jannah).',
        iconName: 'ShieldCheck'
      },
      {
        id: 'perilaku-membela-syariat',
        kategori: 'Dakwah & Syiar',
        judul: '6. Membela Ajaran dan Menampilkan Wajah Islam yang Damai',
        deskripsi:
          'Membela kemuliaan Rasulullah Saw. dengan cara menampilkan akhlak luhur Islam rahmatan lil \'alamin, membantah fitnah atau hoaks secara cerdas dan beradab, serta tidak bersikap anarkistis.',
        dalilPendukung: 'Q.S. An-Nahl: 125 ("Serulah (manusia) kepada jalan Tuhan-mu dengan hikmah dan pelajaran yang baik...")',
        contohKonkret: [
          'Menolak konten hoaks atau ujaran kebencian di media sosial yang mendiskreditkan nabi dan agama Islam.',
          'Menunjukkan prestasi akademik dan non-akademik sebagai cerminan pelajar muslim yang unggul dan santun.',
          'Mengajak teman berbuat baik tanpa kekerasan atau paksaan.',
          'Menjaga persatuan bangsa dan hidup rukun berdampingan dengan sesama warga negara.'
        ],
        tipsPenerapan: 'Jadilah teladan kebaikan di lingkaran pertemananmu agar orang lain mengagumi keindahan Islam.',
        iconName: 'Award'
      }
    ],
    sunnahHarianPelajar: [
      {
        waktu: 'Pagi Hari (Bangun & Subuh)',
        amalanSunnah: 'Membaca doa bangun tidur, bersiwak/sikat gigi, shalat sunnah Fajar 2 rakaat (Qabliyah Subuh), zikir pagi.',
        keutamaan: 'Dua rakaat fajar lebih baik dari dunia dan seisinya (H.R. Muslim).'
      },
      {
        waktu: 'Berangkat & di Sekolah',
        amalanSunnah: 'Memulai dengan kaki kanan, menebarkan senyum dan salam, berdoa sebelum belajar, shalat Dhuha saat istirahat.',
        keutamaan: 'Senyummu di hadapan saudaramu adalah sedekah (H.R. At-Tirmidzi).'
      },
      {
        waktu: 'Makan & Minum',
        amalanSunnah: 'Mencuci tangan, membaca bismillah, duduk tegak, menggunakan tangan kanan, mengambil makanan terdekat, tidak mencela makanan.',
        keutamaan: 'Mendatangkan keberkahan pada makanan dan menyehatkan pencernaan.'
      },
      {
        waktu: 'Sore & Pulang Sekolah',
        amalanSunnah: 'Membaca doa penutup majelis (Kafaratul Majlis), membantu orang tua, bershalawat sore hari.',
        keutamaan: 'Menghapuskan dosa-dosa kecil yang terjadi selama berinteraksi di majelis/sekolah.'
      },
      {
        waktu: 'Malam & Menjelang Tidur',
        amalanSunnah: 'Shalat witir sebelum tidur atau qiyamul lail (Tahajjud), berwudu, membaca surah Al-Ikhlas, Al-Falaq, An-Nas, dan Ayat Kursi.',
        keutamaan: 'Dijaga oleh malaikat dari gangguan setan hingga waktu fajar tiba.'
      }
    ]
  },

  manfaatCintaRasul: {
    pengantar:
      'Mencintai Rasulullah Saw. dengan sepenuh jiwa memberikan keuntungan dan kebahagiaan paripurna, tidak hanya di dunia yang fana ini, tetapi terlebih di alam akhirat yang abadi.',
    daftarManfaat: [
      {
        id: 'manfaat-1',
        ranah: 'Duniawi',
        judul: '1. Merasakan Manisnya Iman (Halāwatul Īmān)',
        deskripsi:
          'Hati menjadi tenang, tentram, dan merasa nikmat saat menjalankan ketaatan serta tahan uji menghadapi godaan maksiat dan musibah hidup.',
        dalilRujukan: 'H.R. Al-Bukhari No. 16: "Tiga perkara yang jika ada pada seseorang ia merasakan manisnya iman..."',
        dampakBagiPelajar: 'Pelajar tidak mudah stres, tidak terpengaruh pergaulan bebas, dan memiliki ketenangan jiwa saat belajar dan menghadapi ujian.'
      },
      {
        id: 'manfaat-2',
        ranah: 'Duniawi',
        judul: '2. Meraih Cinta dan Ampunan dari Allah Swt.',
        deskripsi:
          'Kepatuhan kepada Rasulullah Saw. menjadi jalan utama untuk mendapatkan cinta Allah Swt. dan dihapuskannya segala dosa-dosa masa lalu.',
        dalilRujukan: 'Q.S. Āli \'Imrān: 31: "...ikutilah aku, niscaya Allah mencintaimu dan mengampuni dosa-dosamu."',
        dampakBagiPelajar: 'Hidup penuh keberkahan, langkah selalu dimudahkan, dan disayangi oleh orang tua, guru, serta teman.'
      },
      {
        id: 'manfaat-3',
        ranah: 'Duniawi',
        judul: '3. Memiliki Kompas Moral dan Teladan Hidup Terbaik',
        deskripsi:
          'Terhindar dari krisis identitas atau salah memilih figur idola di era media sosial, karena telah memiliki Rasulullah Saw. sebagai pedoman berkarakter mulia.',
        dalilRujukan: 'Q.S. Al-Ahzāb: 21: "Sungguh, telah ada pada (diri) Rasulullah itu suri teladan yang baik bagimu..."',
        dampakBagiPelajar: 'Memiliki integritas tinggi, bersikap kritis terhadap tren negatif, dan percaya diri dengan identitas muslim berprestasi.'
      },
      {
        id: 'manfaat-4',
        ranah: 'Ukhrawi',
        judul: '4. Meraih Syafaat \'Uzmā di Padang Mahsyar',
        deskripsi:
          'Rasulullah Saw. dianugerahi hak memberikan pertolongan agung (syafaat) bagi umatnya yang senantiasa mencintai dan bershalawat kepadanya saat manusia dalam kepanikan dahsyat di hari kiamat.',
        dalilRujukan: 'Sabda Nabi Saw.: "Orang yang paling berhak mendapatkan syafaatku pada hari kiamat adalah orang yang paling banyak bershalawat kepadaku." (H.R. At-Tirmidzi)',
        dampakBagiPelajar: 'Menumbuhkan motivasi kuat untuk istiqamah memperbanyak shalawat harian sejak masa muda.'
      },
      {
        id: 'manfaat-5',
        ranah: 'Ukhrawi',
        judul: '5. Dikumpulkan Bersama Rasulullah Saw. di Surga Tertinggi',
        deskripsi:
          'Setiap orang akan dikumpulkan bersama orang yang dicintainya. Pecinta Rasulullah Saw. akan menempati Surga Jannatul Firdaus dan minum air dari Telaga Al-Kautsar langsung dari tangan suci beliau.',
        dalilRujukan: 'H.R. Al-Bukhari No. 6171: "Al-Mar\'u ma\'a man ahabba" (Seseorang bersama dengan yang ia cintai).',
        dampakBagiPelajar: 'Memberikan harapan dan optimisme bahwa cinta yang tulus akan menutupi kekurangan amal kita di hadapan kemuliaan nabi.'
      },
      {
        id: 'manfaat-6',
        ranah: 'Ukhrawi',
        judul: '6. Dilipatgandakan Rahmat dan Dihapuskan Derajat Keburukan',
        deskripsi:
          'Setiap satu untaian shalawat yang dipanjatkan bernilai sepuluh limpahan rahmat Allah Swt., sepuluh derajat diangkat, dan sepuluh kesalahan dihapuskan.',
        dalilRujukan: 'H.R. An-Nasa\'i No. 1297 (Hadis Sahih)',
        dampakBagiPelajar: 'Menjadi investasi akhirat yang sangat ringan di lisan namun amat berat di timbangan amal mizan.'
      }
    ]
  },

  refleksiDanMuhasabah: {
    pengantar:
      'Refleksi diri (muhasabah) adalah kunci mengukur sejauh mana cinta kita kepada Rasulullah Saw. telah bertransformasi menjadi perilaku nyata dalam hidup sehari-hari. Melalui studi kasus dan lembar muhasabah ini, mari evaluasi diri secara jujur.',
    studiKasus: [
      {
        id: 'kasus-1',
        judul: 'Studi Kasus 1: Godaan Menyontek vs Keteladanan Sifat Shiddiq',
        situasi:
          'Rian adalah siswa kelas VIII yang belum sempat belajar karena merawat ibunya yang sakit. Saat ujian PAI, teman sebangkunya menawarkan contekan kunci jawaban dengan alasan solidaritas pertemanan.',
        pertanyaanPemantik:
          'Bagaimana seharusnya Rian bersikap jika ia mengaku mencintai Rasulullah Saw. yang bergelar Al-Amin (orang yang terpercaya)?',
        analisisKeteladanan:
          'Rasulullah Saw. memiliki sifat wajib Shiddiq (jujur) dan Amanah (terpercaya). Beliau tidak pernah mengorbankan kejujuran demi keuntungan sesaat. Kejujuran adalah mahkota orang beriman.',
        solusiQurani:
          'Rian harus menolak tawaran contekan dengan santun dan tetap mengerjakan ujian dengan kemampuan sendiri secara jujur. Jika nilainya kurang, ia bisa meminta remedi kepada guru sambil menjelaskan situasinya. Nilai jujur yang berkah jauh lebih mulia di sisi Allah dan Rasul-Nya.'
      },
      {
        id: 'kasus-2',
        judul: 'Studi Kasus 2: Bullying di Medsos vs Akhlak Kasih Sayang Nabi',
        situasi:
          'Di grup WhatsApp kelas, seorang teman sering diejek karena logat bicaranya yang kedaerahan. Sebagian teman ikut tertawa dan membuat stiker ejekan viral.',
        pertanyaanPemantik:
          'Apakah tindakan tersebut mencerminkan akhlak generasi pecinta Rasulullah Saw.?',
        analisisKeteladanan:
          'Rasulullah Saw. bersabda: "Seorang muslim sejati adalah yang orang lain selamat dari lisan dan tangannya" (H.R. Bukhari). Beliau melarang keras mencela sesama muslim, mengolok-olok suku atau fisik orang lain.',
        solusiQurani:
          'Siswa yang mencintai nabi harus berani menasihati anggota grup dengan bijak, tidak ikut menyebarkan stiker ejekan, serta merangkul dan membela teman yang diejek agar ia merasa aman dan dihargai.'
      },
      {
        id: 'kasus-3',
        judul: 'Studi Kasus 3: Waktu Shalat vs Ketagihan Bermain Game Online',
        situasi:
          'Azka sedang bermain game online bersama temannya saat adzan Maghrib berkumandang. Temannya mengajak menunda shalat hingga permainan selesai.',
        pertanyaanPemantik:
          'Bagaimana bukti cinta kepada Rasulullah Saw. ketika panggilan shalat berkumandang?',
        analisisKeteladanan:
          'Rasulullah Saw. menjadikan shalat sebagai penyejuk hati (qurratu \'ain) dan amalan yang paling dicintai Allah pada awal waktunya. Sebelum wafat, pesan terakhir nabi adalah: "Jagalah shalat, jagalah shalat!".',
        solusiQurani:
          'Azka harus pamit sejenak kepada temannya untuk segera mengambil wudu dan menunaikan shalat berjamaah di masjid/rumah tepat waktu. Mendahulukan panggilan Allah dan Rasul-Nya membuktikan bahwa cinta kepada nabi berada di atas kesenangan game.'
      }
    ],
    indikatorRefleksiDiri: [
      {
        id: 1,
        pernyataan: 'Saya senantiasa membaca shalawat minimal 10 kali setiap pagi dan petang hari.',
        dimensi: 'Zikir & Shalawat'
      },
      {
        id: 2,
        pernyataan: 'Saya membiasakan makan dan minum dengan tangan kanan dan dalam posisi duduk.',
        dimensi: 'Adab & Sunnah Harian'
      },
      {
        id: 3,
        pernyataan: 'Saya berkata jujur dan menolak godaan menyontek saat ulangan atau tugas mandiri.',
        dimensi: 'Integritas (Sifat Shiddiq)'
      },
      {
        id: 4,
        pernyataan: 'Saya segera menghentikan aktivitas dan bersiap shalat saat adzan berkumandang.',
        dimensi: 'Kedisiplinan Ibadah'
      },
      {
        id: 5,
        pernyataan: 'Saya memaafkan kesalahan teman yang meminta maaf tanpa menaruh rasa dendam.',
        dimensi: 'Akhlak Pemaaf'
      },
      {
        id: 6,
        pernyataan: 'Saya membaca atau mendengarkan kisah sirah nabi minimal satu kali dalam sepekan.',
        dimensi: 'Ilmu & Sirah Nabawiyah'
      },
      {
        id: 7,
        pernyataan: 'Saya menjaga lisan dan jari dari menulis komentar kebencian/ejekan di media sosial.',
        dimensi: 'Etika Digital Islami'
      },
      {
        id: 8,
        pernyataan: 'Saya berusaha menghidupkan shalat sunnah Dhuha atau Tahajjud semampu saya.',
        dimensi: 'Amalan Sunnah Mustahab'
      }
    ],
    komitmenAksiPelajar: [
      'Menjadikan Shalawat Ibrahimiyah sebagai wirid penyejuk jiwa setiap selesai shalat fardu.',
      'Melatih satu sifat mulia Rasulullah Saw. (jujur, amanah, pemaaf, dermawan) dalam interaksi di sekolah.',
      'Membiasakan sunnah adab makan, minum, dan tidur setiap hari tanpa rasa malu.',
      'Menjadi duta perdamaian yang menolak segala bentuk perundungan (bullying) dan perpecahan di sekolah.',
      'Mempelajari buku Sirah Nabawiyah agar semakin mengenal dan mencintai kepribadian agung baginda Rasulullah Saw.'
    ]
  },

  kuisHots: [
    {
      id: 'kuis-bab3-1',
      nomor: 1,
      kasus:
        'Seorang remaja muslim mengaku sangat mencintai Rasulullah Saw. Ia rajin menghadiri majelis shalawat setiap akhir pekan. Namun, di sekolah ia sering mencontek saat ujian, berbicara kasar kepada guru, dan menolak shalat fardu berjamaah tepat waktu.',
      pertanyaan:
        'Berdasarkan Q.S. Āli \'Imrān ayat 31 dan kaidah syariat tentang hakikat mahabbah, bagaimana status pengakuan cinta remaja tersebut?',
      pilihan: [
        'A. Cintanya sempurna karena rajin menghadiri majelis shalawat sudah cukup menggugurkan dosa-dosa kecilnya.',
        'B. Cintanya masih sebatas klaim lisan yang belum terbukti (kazib), sebab bukti cinta hakiki kepada Rasul adalah ittiba\' (ketaatan syariat dan akhlak mulia).',
        'C. Cintanya tidak bernilai sama sekali dan ia telah keluar dari agama Islam karena tidak mencontoh nabi.',
        'D. Cintanya sah dan sempurna, karena akhlak di sekolah adalah urusan duniawi yang terpisah dari urusan ibadah di majelis.'
      ],
      kunciJawaban: 1, // B
      pembahasan:
        'Q.S. Āli \'Imrān ayat 31 menegaskan bahwa bukti kejujuran cinta kepada Allah dan Rasul-Nya adalah ittiba\' (ketaatan mengikuti petunjuk syariat dan meneladani akhlak nabi). Mencintai Rasulullah bukan sekadar luapan emosional atau seremonial shalawat, melainkan harus diwujudkan dalam kejujuran, ketaatan shalat, dan akhlak karimah. Oleh karena itu, klaim cintanya belum terbukti hakiki jika ia masih mengabaikan sunnah dan akhlak Rasul.'
    },
    {
      id: 'kuis-bab3-2',
      nomor: 2,
      kasus:
        'Rasulullah Saw. bersabda dalam hadis riwayat Bukhari dan Muslim dari Anas bin Malik r.a.: "Tidak sempurna iman salah seorang di antara kalian hingga aku lebih ia cintai daripada orang tuanya, anaknya, dan seluruh manusia."',
      pertanyaan:
        'Maksud dari mendahulukan cinta kepada Rasulullah Saw. di atas cinta kepada orang tua dan anak dalam kehidupan nyata seorang siswa adalah...',
      pilihan: [
        'A. Memutuskan hubungan silaturahmi dengan keluarga demi fokus beribadah di masjid terus-menerus.',
        'B. Mengabaikan nasihat orang tua dalam segala hal karena nabi lebih mulia dari orang tua.',
        'C. Jika orang tua atau teman mengajak berbuat maksiat (misalnya berbohong atau menyontek), siswa tetap teguh menaati perintah Rasulullah Saw. dengan tetap bersikap santun kepada orang tua.',
        'D. Memberikan seluruh uang saku sekolah kepada orang lain tanpa meminta izin kepada orang tua.'
      ],
      kunciJawaban: 2, // C
      pembahasan:
        'Mendahulukan cinta Rasul di atas manusia lain bermakna apabila terjadi pertentangan antara kehendak makhluk (orang tua, anak, teman) dengan perintah Allah dan Rasul-Nya (misalnya diajak berbuat curang atau maksiat), maka syariat Rasulullah Saw. mutlak harus didahulukan. Hal ini selaras dengan kaidah "La tha\'ata li makhluqin fi ma\'shiyatil Khaliq" (tidak ada ketaatan kepada makhluk dalam bermaksiat kepada Sang Pencipta), namun tetap bersikap santun dan hormat kepada orang tua.'
    },
    {
      id: 'kuis-bab3-3',
      nomor: 3,
      kasus:
        'Di era digital saat ini, muncul fenomena sebagian orang yang mengagumi artis atau tokoh populer secara berlebihan hingga meniru gaya hidup hedonis dan melalaikan kewajiban ibadah, sementara mereka merasa asing terhadap sejarah dan sunnah Nabi Muhammad Saw.',
      pertanyaan:
        'Berdasarkan peringatan Q.S. At-Taubah ayat 24, ancaman dan konsekuensi moral bagi seseorang yang mendahulukan cinta duniawi di atas cinta kepada Allah dan Rasul-Nya adalah...',
      pilihan: [
        'A. Akan mendapatkan sanksi denda finansial dari pengadilan syariat.',
        'B. Terancam dicabut hidayah taufik oleh Allah Swt., dimasukkan dalam kategori orang fasik, dan terancam ditimpa keputusan/azab Allah.',
        'C. Otomatis dibatalkan kewarganegaraannya di negara muslim.',
        'D. Semua harta benda yang dimilikinya akan musnah seketika di dunia.'
      ],
      kunciJawaban: 1, // B
      pembahasan:
        'Q.S. At-Taubah ayat 24 secara tegas memperingatkan: jika hal-hal duniawi lebih dicintai daripada Allah, Rasul-Nya, dan jihad di jalan-Nya, maka nantikanlah keputusan azab Allah, dan Allah tidak akan memberikan petunjuk kepada kaum yang fasik. Ini menunjukkan bahaya krisis spiritual jika idola duniawi menggeser kecintaan kepada Rasulullah Saw.'
    },
    {
      id: 'kuis-bab3-4',
      nomor: 4,
      kasus:
        'Dalam sebuah hadis sahih (H.R. Al-Bukhari No. 6171), seorang sahabat Badui bertanya kepada Rasulullah Saw. tentang kapan kiamat tiba. Ketika ditanya apa persiapannya, ia menjawab: "Aku tidak menyiapkan banyak shalat dan puasa sunnah, hanya saja aku mencintai Allah dan Rasul-Nya." Rasulullah kemudian bersabda: "Anta ma\'a man ahbabta" (Engkau akan bersama dengan orang yang engkau cintai).',
      pertanyaan:
        'Pesan pedagogis dan teologis paling mendalam dari hadis tersebut bagi pelajar muslim yang merasa amal ibadahnya masih terbatas adalah...',
      pilihan: [
        'A. Pelajar tidak perlu lagi bersusah payah shalat fardu karena cukup memiliki rasa cinta di dalam hati saja.',
        'B. Menumbuhkan optimisme bahwa cinta yang tulus dan jujur kepada Rasulullah Saw. akan mengangkat derajat seseorang di akhirat hingga dikumpulkan bersama beliau di surga, diiringi usaha sungguh-sungguh meneladani beliau.',
        'C. Menunjukkan bahwa amalan para sahabat nabi sebenarnya tidak ada gunanya sama sekali dibandingkan cinta lisan.',
        'D. Hadis ini hanya berlaku khusus untuk sahabat nabi pada zaman dahulu dan tidak berlaku untuk umat Islam zaman sekarang.'
      ],
      kunciJawaban: 1, // B
      pembahasan:
        'Hadis ini memberikan kabar gembira dan suntikan motivasi luar biasa. Manusia memiliki keterbatasan dalam amalan sunnah, namun ketulusan rasa cinta kepada Rasulullah Saw. yang diwujudkan dengan menjaga kewajiban pokok dan berakhlak baik akan menyatukan kita dengan beliau di surga kelak. Tentu saja cinta tersebut harus jujur, bukan alasan untuk meninggalkan kewajiban shalat fardu.'
    },
    {
      id: 'kuis-bab3-5',
      nomor: 5,
      kasus:
        'Seseorang mendengar nama Nabi Muhammad Saw. disebut oleh penceramah di mimbar, namun ia enggan mengucapkan shalawat ataupun menjawab salam, melainkan justru asyik bermain gawai telepon pintarnya.',
      pertanyaan:
        'Berdasarkan hadis Rasulullah Saw. riwayat At-Tirmidzi dan Ahmad, predikat yang disematkan beliau kepada orang yang enggan bershalawat saat nama beliau disebut adalah...',
      pilihan: [
        'A. Orang yang paling boros (Al-Mubazzir) karena membuang-buang waktu.',
        'B. Orang yang paling sombong (Al-Mustakbir) karena tidak peduli sekitar.',
        'C. Orang yang paling bakhil / kikir (Al-Bakhil), karena enggan menyisihkan sejenak lisan untuk mendoakan beliau padahal mendapat pahala berlipat.',
        'D. Orang yang munafik tulen yang kekal di neraka paling bawah.'
      ],
      kunciJawaban: 2, // C
      pembahasan:
        'Rasulullah Saw. bersabda: "Orang yang bakhil (kikir sejati) adalah orang yang ketika namaku disebut di sisinya, ia tidak bershalawat kepadaku" (H.R. At-Tirmidzi No. 3546, Hadis Hasan Sahih). Hal ini karena bershalawat itu sangat mudah di lisan namun mendatangkan sepuluh limpahan rahmat Allah, sehingga meninggalkannya adalah bentuk kekikiran yang merugikan diri sendiri.'
    }
  ]
};
