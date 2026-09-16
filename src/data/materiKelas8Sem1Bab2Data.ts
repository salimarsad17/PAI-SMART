export interface KitabSuciItem {
  id: string;
  namaKitab: string;
  namaArab: string;
  rasulPenerima: string;
  gelarRasul: string;
  periodeWaktu: string;
  tempatDiturunkan: string;
  bahasaAsli: string;
  kaumSasaran: string;
  dalilAlQuran: {
    surah: string;
    ayatNomor: number;
    teksArab: string;
    transliterasi: string;
    terjemahan: string;
  };
  ringkasanAjaranPokok: string;
  poinKunciAjaran: string[];
  karakteristikKhas: string;
  warnaAksen: string;
}

export interface SuhufNabiItem {
  namaNabi: string;
  jumlahSuhuf: number;
  dalilRujukan: string;
  keterangan: string;
}

export interface DalilImanKitabItem {
  id: string;
  judul: string;
  sumber: string;
  teksArab: string;
  transliterasi: string;
  terjemahan: string;
  kandunganMakna: string[];
  audioUrl?: string;
}

export interface SoalHotsBab2Kelas8 {
  id: string;
  nomor: number;
  kasus: string;
  pertanyaan: string;
  pilihan: string[];
  kunciJawaban: number;
  pembahasan: string;
}

export interface MateriKelas8Sem1Bab2 {
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
  pengertianImanDanDalil: {
    pengertianBahasa: string;
    pengertianIstilah: string;
    kedudukanDalamRukunIman: string;
    tataCaraBeriman: {
      kategori: string;
      penjelasan: string;
      penerapan: string;
    }[];
    perbedaanKitabDanSuhuf: {
      definisiKitab: string;
      definisiSuhuf: string;
      tabelPerbandingan: {
        aspek: string;
        kitabSuci: string;
        suhuf: string;
      }[];
      daftarSuhufParaNabi: SuhufNabiItem[];
    };
    daftarDalilAlQuranDanHadits: DalilImanKitabItem[];
  };
  namaKitabDanRasul: {
    daftarKitab: KitabSuciItem[];
    perbandinganRingkas: {
      judul: string;
      deskripsi: string;
    };
  };
  fungsiDanHikmah: {
    fungsiUtamaKitabullah: {
      namaFungsi: string;
      istilahQuran: string;
      dalilAyat: string;
      penjelasan: string;
      aplikasiSiswa: string;
    }[];
    hikmahBeriman: {
      poinHikmah: string;
      uraian: string;
      dampakKejiwaan: string;
    }[];
  };
  isiPokokAjaran: {
    pengantar: string;
    enamDimensiAjaran: {
      dimensi: string;
      namaArab: string;
      penjelasan: string;
      contohImplementasi: string;
    }[];
  };
  keistimewaanAlQuran: {
    kedudukanAlMuhaimin: {
      ayatRujukan: string;
      maknaAlMuhaimin: string[];
      peranKorektif: string;
    };
    enamKeistimewaanUtama: {
      nomor: number;
      judul: string;
      dalil: string;
      penjelasanMendalam: string;
      buktiNyata: string;
    }[];
  };
  generasiPecintaQuranToleran: {
    empatPilarKecintaan: {
      pilar: string;
      istilahArab: string;
      deskripsi: string;
      panduanPraktikPelajar: string;
    }[];
    limaPrinsipToleransiQurani: {
      prinsip: string;
      dalil: string;
      konteksKekinian: string;
      sikapSiswaDiSekolah: string;
    }[];
    studiKasusToleransi: {
      kasus: string;
      analisisToleran: string;
      laranganSikap: string;
    }[];
  };
  kuisHots: SoalHotsBab2Kelas8[];
}

export const MATERI_KELAS_8_SEM_1_BAB_2: MateriKelas8Sem1Bab2 = {
  babNumber: 2,
  judulBab: 'Meyakini Kitab-Kitab Allah Swt.: Generasi Pecinta Al-Qur\'an yang Toleran',
  subJudul: 'Menghayati Rukun Iman ke-3, Mengkaji 4 Kitab Suci & Suhuf, Meneguhkan Posisi Al-Qur\'an sebagai Al-Muhaimin, serta Menumbuhkan Karakter Siswa Qur\'ani yang Rahmatan Lil \'Alamin di Tengah Kemajemukan Bangsa',
  elemenCp: 'Akidah',
  fase: 'Fase D (SMP / MTs)',
  semester: 'Semester 1',
  pengantar: {
    apersepsi:
      'Bayangkan seorang musafir yang mengarungi padang pasir maha luas di malam gulita tanpa kompas, peta, maupun bintang penunjuk arah. Ia pasti tersesat dan binasa. Demikianlah permisalan manusia yang hidup di dunia fana ini tanpa bimbingan wahyu ilahi. Karena cinta dan kasih sayang-Nya yang tak terhingga, Allah Swt. menurunkan kitab-kitab suci kepada para rasul pilihan-Nya sebagai pelita penerang jalan kehidupan (hudan lin-nas). Sebagai rukun iman ke-3, meyakini kitab-kitab Allah bukan sekadar percaya dalam angan-angan, melainkan harus merefleksikan akhlak mulia Al-Qur\'an dalam kehidupan nyata: mencintai kitab suci, berjiwa lapang dada, dan bersikap toleran penuh damai kepada sesama manusia di bumi Nusantara.',
    tujuanPembelajaran: [
      '1. Menjelaskan pengertian iman kepada kitab-kitab Allah Swt. secara bahasa dan istilah syariat dengan tepat.',
      '2. Menunjukkan dalil naqli Al-Qur\'an (Q.S. An-Nisā\': 136, Q.S. Al-Baqarah: 136, Q.S. Al-Mā\'idah: 48) dan hadis sahih tentang kewajiban beriman kepada kitab Allah.',
      '3. Mengidentifikasi nama-nama kitab suci Allah (Taurat, Zabur, Injil, Al-Qur\'an), rasul penerimanya, bahasa pengantar, masa diturunkan, serta perbedaan antara kitab dan suhuf.',
      '4. Menelaah isi pokok ajaran kitab-kitab Allah yang meliputi akidah tauhid, syariat peribadatan, akhlak mulia, muamalah sosial, dan kisah keteladanan.',
      '5. Menganalisis keistimewaan Al-Qur\'an sebagai kitab pamungkas yang berfungsi sebagai Al-Muhaimin (penyempurna dan pengoreksi wahyu sebelumnya).',
      '6. Menjelmakan karakter generasi pecinta Al-Qur\'an yang mengamalkan 4 pilar (tilawah, tadabbur, tahfiz, dan \'amal) serta menjunjung tinggi sikap toleransi (tasamuh) dalam kehidupan bermasyarakat majemuk.'
    ]
  },
  pengertianImanDanDalil: {
    pengertianBahasa:
      'Secara etimologi (kebahasaan), iman berasal dari kata bahasa Arab "Āmana - Yu\'minu - Īmānan" (آمَنَ - يُؤْمِنُ - إِيْمَانًا) yang bermakna membenarkan (at-tashdīq) dengan keyakinan yang mantap dan mengakui tanpa keraguan sedikit pun.',
    pengertianIstilah:
      'Secara terminologi syariat Islam, beriman kepada kitab-kitab Allah Swt. adalah meyakini dengan sepenuh hati bahwa Allah Swt. telah menurunkan kalam-Nya yang suci kepada para nabi dan rasul pilihan-Nya melalui perantaraan Malaikat Jibril a.s. sebagai pedoman hidup (hudan) dan petunjuk jalan keselamatan bagi umat manusia di dunia dan akhirat, mengikrarkannya dengan lisan, dan mengamalkan syariat Al-Qur\'an sebagai kitab penutup dalam amal perbuatan nyata.',
    kedudukanDalamRukunIman:
      'Beriman kepada kitab-kitab Allah Swt. menempati rukun iman yang ketiga (ke-3) dari enam rukun iman dalam Islam. Mengingkari satu saja kitab suci Allah berakibat batalnya keimanan seseorang dan terjerumus ke dalam kesesatan yang nyata (Q.S. An-Nisā\': 136).',
    tataCaraBeriman: [
      {
        kategori: 'Iman Ijmali (Secara Global / Garis Besar)',
        penjelasan:
          'Kewajiban mengimani kitab-kitab suci terdahulu sebelum Al-Qur\'an (Taurat, Zabur, Injil) dan lembaran suhuf. Kita wajib meyakini bahwa Allah Swt. benar-benar menurunkannya kepada para rasul dalam keadaan hak dan suci pada zamannya masing-masing.',
        penerapan:
          'Kita mempercayai asal-usul kebenarannya dari Allah, namun tidak diwajibkan mengamalkan syariat hukumnya saat ini, karena masa berlakunya telah usai, telah dinasakh (disempurnakan/diganti) oleh Al-Qur\'an, dan teks-teksnya telah banyak mengalami perubahan (tahrif) oleh tangan manusia.'
      },
      {
        kategori: 'Iman Tafshili (Secara Rinci / Terperinci)',
        penjelasan:
          'Kewajiban mengimani Al-Qur\'anul Karim secara detail dan komprehensif. Kita wajib meyakini setiap surah, ayat, kata, bahkan huruf Al-Qur\'an adalah kalamullah yang terjaga kemurniannya hingga hari kiamat.',
        penerapan:
          'Wajib membaca (tilawah), menghafalkan (tahfiz), merenungi dan memahami maknanya (tadabbur), menjadikan hukum-hukumnya sebagai pedoman hidup tertinggi, serta membela kehormatan Al-Qur\'an dalam tindakan sehari-hari.'
      }
    ],
    perbedaanKitabDanSuhuf: {
      definisiKitab:
        'Kitab berasal dari kata "kataba" yang berarti menulis. Dalam istilah syariat, Kitab adalah kumpulan wahyu Allah Swt. yang telah dibukukan/dikodifikasikan secara lengkap, tersusun dalam bab atau surah, memuat syariat hukum yang komprehensif, dan ditujukan serta mengikat bagi seluruh umat dari rasul tersebut.',
      definisiSuhuf:
        'Suhuf (bentuk jamak dari shahīfah) berarti lembaran-lembaran terpisah atau kertas bertulis. Dalam syariat, Suhuf adalah wahyu Allah Swt. berupa lembaran-lembaran firman yang tidak dibukukan secara utuh, isinya lebih ringkas memuat pujian, nasihat moral, dan zikir, serta tidak memuat aturan syariat hukum baru yang mengikat umat secara umum.',
      tabelPerbandingan: [
        {
          aspek: 'Pengertian Fisik',
          kitabSuci: 'Sudah dibukukan, tersusun rapi, tebal, dan terstruktur dalam mushaf lengkap.',
          suhuf: 'Berupa lembaran-lembaran firman lepas/terpisah yang belum dibukukan.'
        },
        {
          aspek: 'Isi & Muatan Wahyu',
          kitabSuci: 'Lengkap dan komprehensif: memuat akidah, syariat/hukum ibadah, muamalah, kisah, dan akhlak.',
          suhuf: 'Lebih ringkas: dominan memuat nasihat kebajikan, hikmah moral, pengagungan Allah, dan doa.'
        },
        {
          aspek: 'Kewajiban Menyampaikan',
          kitabSuci: 'Wajib disampaikan dan diajarkan kepada seluruh umat manusia/kaum rasul penerimanya.',
          suhuf: 'Tidak selalu diwajibkan disampaikan kepada khalayak luas, ada yang khusus untuk nabi dan keluarganya.'
        },
        {
          aspek: 'Keberadaan Saat Ini',
          kitabSuci: 'Al-Qur\'an abadi dan utuh 100%, sedangkan kitab terdahulu telah disempurnakan oleh Al-Qur\'an.',
          suhuf: 'Teks asli fisiknya sudah tidak ditemukan lagi di dunia, keberadaannya hanya diimani lewat dalil Al-Qur\'an.'
        }
      ],
      daftarSuhufParaNabi: [
        {
          namaNabi: 'Nabi Syits a.s.',
          jumlahSuhuf: 50,
          dalilRujukan: 'H.R. Ibnu Hibban dari Abu Dzar r.a.',
          keterangan: 'Putra Nabi Adam a.s. yang menerima wahyu pedoman hidup terbanyak di antara para penerima suhuf.'
        },
        {
          namaNabi: 'Nabi Idris a.s. (Enoch)',
          jumlahSuhuf: 30,
          dalilRujukan: 'H.R. Ibnu Hibban & Thabrani',
          keterangan: 'Nabi yang pertama kali mahir menulis dengan pena dan mempelajari ilmu perbintangan serta jahit-menjahit.'
        },
        {
          namaNabi: 'Nabi Ibrahim a.s. (Abraham)',
          jumlahSuhuf: 10,
          dalilRujukan: 'Q.S. Al-A\'lā [87]: 18-19 & Q.S. An-Najm: 36-37',
          keterangan: 'Memuat perumpamaan hikmah tentang kekuasaan Allah, kepasrahan tauhid, dan peringatan dari tipu daya dunia.'
        },
        {
          namaNabi: 'Nabi Musa a.s. (Sebelum Kitab Taurat)',
          jumlahSuhuf: 10,
          dalilRujukan: 'Q.S. Al-A\'lā [87]: 18-19 & H.R. Ibnu Hibban',
          keterangan: 'Diturunkan sebelum penerimaan Kitab Taurat lengkap di Bukit Sinai, berisi pelajaran moral dan ibrah.'
        },
        {
          namaNabi: 'Nabi Adam a.s.',
          jumlahSuhuf: 10,
          dalilRujukan: 'Kitab Al-Bidayah wan-Nihayah karya Ibnu Katsir',
          keterangan: 'Petunjuk tata cara hidup awal manusia di bumi bersama Hawa dan anak cucunya.'
        }
      ]
    },
    daftarDalilAlQuranDanHadits: [
      {
        id: 'dalil-1',
        judul: '1. Perintah Wajib Beriman kepada Kitab-Kitab Allah (Q.S. An-Nisā’ [4]: 136)',
        sumber: 'Al-Qur\'an Surah An-Nisā’ Ayat 136',
        teksArab:
          'يٰٓاَيُّهَا الَّذِيْنَ اٰمَنُوْٓا اٰمِنُوْا بِاللّٰهِ وَرَسُوْلِهٖ وَالْكِتٰبِ الَّذِيْ نَزَّلَ عَلٰى رَسُوْلِهٖ وَالْكِتٰبِ الَّذِيْٓ اَنْزَلَ مِنْ قَبْلُ ۗ وَمَنْ يَّكْفُرْ بِاللّٰهِ وَمَلٰۤىِٕكَتِهٖ وَكُتُبِهٖ وَرُسُلِهٖ وَالْيَوْمِ الْاٰخِرِ فَقَدْ ضَلَّ ضَلٰلًاۢ بَعِيْدًا',
        transliterasi:
          'Yā ayyuhallażīna āmanū āminū billāhi wa rasūlihī wal-kitābillażī nazzala ‘alā rasūlihī wal-kitābillażī anzala min qabl(u), wa may yakfur billāhi wa malā\'ikatihī wa kutubihī wa rusulihī wal-yaumil-ākhiri faqad ḍalla ḍalālam ba‘īdā(n).',
        terjemahan:
          'Wahai orang-orang yang beriman! Tetaplah beriman kepada Allah dan Rasul-Nya (Muhammad) dan kepada Kitab (Al-Qur\'an) yang diturunkan kepada Rasul-Nya, serta kitab yang diturunkan sebelumnya. Barangsiapa ingkar kepada Allah, malaikat-malaikat-Nya, kitab-kitab-Nya, rasul-rasul-Nya, dan hari kemudian, maka sungguh, orang itu telah tersesat sangat jauh.',
        kandunganMakna: [
          'Ayat ini ditujukan khusus kepada orang-orang yang beriman agar memelihara, memperbaharui, dan memantapkan keimanan mereka tanpa ragu.',
          'Penyebutan kata "nazzala" (diturunkan berangsur-angsur) untuk Al-Qur\'an dan kata "anzala" (diturunkan sekaligus) untuk kitab-kitab terdahulu.',
          'Penegasan bahwa mengingkari salah satu rukun iman, termasuk kitab-kitab Allah, menyebabkan seseorang tersesat sejauh-jauhnya dari jalan kebenaran (dhalalan ba\'ida).'
        ],
        audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/004136.mp3'
      },
      {
        id: 'dalil-2',
        judul: '2. Kesatuan Risalah Para Nabi Tanpa Membeda-bedakan (Q.S. Al-Baqarah [2]: 136)',
        sumber: 'Al-Qur\'an Surah Al-Baqarah Ayat 136',
        teksArab:
          'قُوْلُوْٓا اٰمَنَّا بِاللّٰهِ وَمَآ اُنْزِلَ اِلَيْنَا وَمَآ اُنْزِلَ اِلٰٓى اِبْرٰهٖمَ وَاِسْمٰعِيْلَ وَاِسْحٰقَ وَيَعْقُوْبَ وَالْاَسْبَاطِ وَمَآ اُوْتِيَ مُوْسٰى وَعِيْسٰى وَمَآ اُوْتِيَ النَّبِيُّوْنَ مِنْ رَّبِّهِمْ ۚ لَا نُفَرِّقُ بَيْنَ اَحَدٍ مِّنْهُمْ ۖ وَنَحْنُ لَهٗ مُسْلِمُوْنَ',
        transliterasi:
          'Qūlū āmannā billāhi wa mā unzila ilainā wa mā unzila ilā Ibrāhīma wa Ismā‘īla wa Isḥāqa wa Ya‘qūba wal-asbāṭi wa mā ūtiya Mūsā wa ‘Īsā wa mā ūtiyan-nabiyyūna mir rabbihim, lā nufarriqu baina aḥadim minhum, wa naḥnu lahū muslimūn(a).',
        terjemahan:
          'Katakanlah (wahai orang-orang yang beriman), "Kami beriman kepada Allah dan apa yang diturunkan kepada kami, dan apa yang diturunkan kepada Ibrahim, Ismail, Ishaq, Ya\'qub dan anak cucunya, dan apa yang diberikan kepada Musa dan Isa serta apa yang diberikan kepada nabi-nabi dari Tuhan mereka. Kami tidak membeda-bedakan seorang pun di antara mereka dan kami berserah diri kepada-Nya."',
        kandunganMakna: [
          'Umat Islam wajib mengimani semua wahyu yang diturunkan kepada para nabi dan rasul sejak Nabi Adam hingga Nabi Muhammad SAW.',
          'Prinsip "lā nufarriqu baina aḥadim minhum": Islam melarang keras mendiskriminasikan atau menolak kenabian salah seorang rasul Allah.',
          'Puncak seluruh risalah samawi adalah sikap kepasrahan total kepada Allah Swt. (wa nahnu lahu muslimun).'
        ],
        audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/002136.mp3'
      },
      {
        id: 'dalil-3',
        judul: '3. Hadis Jibril: Iman kepada Kitab sebagai Rukun Iman ke-3',
        sumber: 'Hadis Sahih Riwayat Imam Muslim No. 8',
        teksArab:
          'قَالَ: فَأَخْبِرْنِي عَنِ الْإِيْمَانِ، قَالَ: «أَنْ تُؤْمِنَ بِاللهِ، وَمَلَائِكَتِهِ، وَكُتُبِهِ، وَرُسُلِهِ، وَالْيَوْمِ الْآخِرِ، وَتُؤْمِنَ بِالْقَدَرِ خَيْرِهِ وَشَرِّهِ»',
        transliterasi:
          'Qāla: fa-akhbirnī ‘anil-īmān. Qāla: "An tu\'mina billāhi, wa malā\'ikatihī, wa kutubihī, wa rusulihī, wal-yaumil-ākhiri, wa tu\'mina bil-qadari khayrihī wa syarrihī."',
        terjemahan:
          'Malaikat Jibril bertanya kepada Nabi Muhammad SAW: "Beritahukanlah kepadaku tentang iman!" Rasulullah SAW bersabda: "Engkau beriman kepada Allah, malaikat-malaikat-Nya, kitab-kitab-Nya, rasul-rasul-Nya, hari akhir, dan engkau beriman kepada takdir yang baik maupun yang buruk."',
        kandunganMakna: [
          'Hadis ini adalah landasan pokok (ushuluddin) tentang rukun iman yang enam.',
          'Urutan "kutubihī" (kitab-kitab-Nya) disebutkan beriringan setelah Allah dan malaikat, menunjukkan bahwa kitab adalah jembatan wahyu antara Sang Pencipta dengan makhluk-Nya melalui perantaraan malaikat.',
          'Keyakinan terhadap kitabullah menjadi syarat mutlak sahnya keislaman seseorang.'
        ]
      },
      {
        id: 'dalil-4',
        judul: '4. Hadis Dua Pusaka Penuntun Umat Manusia',
        sumber: 'Hadis Riwayat Imam Malik dalam Al-Muwaththa\' & Al-Hakim',
        teksArab:
          'تَرَكْتُ فِيكُمْ أَمْرَيْنِ لَنْ تَضِلُّوا مَا تَمَسَّكْتُمْ بِهِمَا: كِتَابَ اللهِ وَسُنَّةَ نَبِيِّهِ',
        transliterasi:
          'Taraktu fīkum amraini lan taḍillū mā tamassaktum bihimā: kitāballāhi wa sunnata nabiyyihī.',
        terjemahan:
          'Aku telah meninggalkan kepada kalian dua perkara, yang kalian tidak akan pernah tersesat selama berpegang teguh kepada keduanya: Kitabullah (Al-Qur\'an) dan Sunnah Nabi-Nya.',
        kandunganMakna: [
          'Al-Qur\'an adalah pedoman primer sepanjang hayat yang memberikan garansi keselamatan dari kesesatan akidah maupun moral.',
          'Sunnah Rasulullah SAW berfungsi sebagai penjelas (bayan), perinci, dan teladan praktis dalam mengamalkan firman-firman Al-Qur\'an.'
        ]
      }
    ]
  },
  namaKitabDanRasul: {
    daftarKitab: [
      {
        id: 'kitab-taurat',
        namaKitab: 'Kitab Taurat',
        namaArab: 'التَّوْرَاةُ',
        rasulPenerima: 'Nabi Musa a.s.',
        gelarRasul: 'Kalīmullāh (Orang yang diajak berbicara langsung oleh Allah)',
        periodeWaktu: 'Abad ke-12 Sebelum Masehi (SM)',
        tempatDiturunkan: 'Bukit Thursina / Gunung Sinai (Semenanjung Sinai, Mesir)',
        bahasaAsli: 'Bahasa Ibrani Kuno (Hebrew)',
        kaumSasaran: 'Bani Israil (Keturunan Nabi Ya\'qub a.s.)',
        dalilAlQuran: {
          surah: 'Q.S. Al-Isrā\' [17]: Ayat 2',
          ayatNomor: 2,
          teksArab: 'وَاٰتَيْنَا مُوْسَى الْكِتٰبَ وَجَعَلْنٰهُ هُدًى لِّبَنِيْٓ اِسْرَاۤءِيْلَ اَلَّا تَتَّخِذُوْا مِنْ دُوْنِيْ وَكِيْلًا',
          transliterasi: 'Wa ātainā Mūsal-kitāba wa ja‘alnāhu hudal libanī isrā\'īla allā tattakhiżū min dūnī wakīlā(n).',
          terjemahan: 'Dan Kami berikan kepada Musa Kitab (Taurat) dan Kami jadikannya petunjuk bagi Bani Israil (dengan firman), "Janganlah kamu mengambil pelindung selain Aku."'
        },
        ringkasanAjaranPokok:
          'Kitab Taurat memuat hukum syariat yang tegas dan terperinci untuk membimbing Bani Israil keluar dari kekafiran dan penindasan Fir\'aun. Inti ajaran moralnya terangkum dalam Sepuluh Perintah Tuhan (The Ten Commandments / Al-Washaya Al-\'Asyr) yang tertulis pada lempengan Lauh batu di Bukit Sinai.',
        poinKunciAjaran: [
          '1. Mengesakan Allah Swt. dan tiada sekutu bagi-Nya.',
          '2. Larangan keras menyembah berhala, patung, atau makhluk apa pun.',
          '3. Larangan menyebut dan mempermainkan nama Allah secara sia-sia.',
          '4. Mensucikan hari Sabtu (Sabat) sebagai hari khusus beribadah.',
          '5. Menghormati dan berbakti kepada kedua orang tua (ayah dan ibu).',
          '6. Larangan membunuh sesama manusia tanpa hak yang dibenarkan.',
          '7. Larangan berbuat zina dan mendekati perbuatan keji.',
          '8. Larangan mencuri dan merampas harta benda orang lain.',
          '9. Larangan memberikan kesaksian palsu dalam peradilan.',
          '10. Larangan bersikap tamak, dengki, dan menginginkan hak milik sesama.'
        ],
        karakteristikKhas: 'Memuat hukum qisas dan ketegasan syariat hukum bagi pembangkang di kalangan Bani Israil.',
        warnaAksen: 'from-amber-600 to-orange-700'
      },
      {
        id: 'kitab-zabur',
        namaKitab: 'Kitab Zabur (Mazmur)',
        namaArab: 'الزَّبُوْرُ',
        rasulPenerima: 'Nabi Dawud a.s.',
        gelarRasul: 'Khalīfatullāh fīl-Arḍ (Pemimpin adil dan berani di muka bumi)',
        periodeWaktu: 'Abad ke-10 Sebelum Masehi (SM)',
        tempatDiturunkan: 'Tanah Palestina / Yerusalem (Baitul Maqdis)',
        bahasaAsli: 'Bahasa Qibthi / Suryani Kuno (Aramaik awal)',
        kaumSasaran: 'Bani Israil',
        dalilAlQuran: {
          surah: 'Q.S. Al-Isrā\' [17]: Ayat 55',
          ayatNomor: 55,
          teksArab: 'وَرَبُّكَ اَعْلَمُ بِمَنْ فِى السَّمٰوٰتِ وَالْاَرْضِۗ وَلَقَدْ فَضَّلْنَا بَعْضَ النَّبِيّٖنَ عَلٰى بَعْضٍ وَّاٰتَيْنَا دَاوٗدَ زَبُوْرًا',
          transliterasi: 'Wa rabbuka a‘lamu biman fis-samāwāti wal-arḍ(i), wa laqad faḍḍalnā ba‘ḍan-nabiyyīna ‘alā ba‘ḍiw wa ātainā Dāwūda Zabūrā(n).',
          terjemahan: 'Dan Tuhanmu lebih mengetahui siapa yang di langit dan di bumi. Dan sungguh, Kami telah melebihkan sebagian nabi-nabi atas sebagian (yang lain), dan Kami berikan Zabur kepada Dawud.'
        },
        ringkasanAjaranPokok:
          'Zabur berasal dari kata "zabara" yang berarti menulis indah. Zabur memuat 150 nyanyian/mazmur qasidah suci yang disenandungkan Nabi Dawud a.s. dengan suara sangat merdu hingga burung dan gunung ikut bertasbih. Kitab ini tidak membawa syariat hukum baru melainkan menyempurnakan zikir dan munajat dengan tetap mengikuti syariat Taurat.',
        poinKunciAjaran: [
          '1. Untaian tasbih, tahmid, dan tahlil mengagungkan kebesaran Allah Swt.',
          '2. Pengakuan atas dosa-dosa dan permohonan ampunan (istigfar) mendalam.',
          '3. Doa munajat memohon pertolongan dalam menegakkan keadilan di bumi.',
          '4. Nasihat-nasihat kebijaksanaan, kezuhudan, dan perenungan hakikat kematian.',
          '5. Kabar gembira tentang hamba-hamba Allah yang saleh yang akan mewarisi bumi (Q.S. Al-Anbiyā\': 105).'
        ],
        karakteristikKhas: 'Tidak memuat hukum halal-haram baru, fokus pada tasbih, munajat cinta ilahi, dan akhlak spiritual.',
        warnaAksen: 'from-blue-600 to-indigo-700'
      },
      {
        id: 'kitab-injil',
        namaKitab: 'Kitab Injil (Gospel)',
        namaArab: 'الْإِنْجِيْلُ',
        rasulPenerima: 'Nabi Isa a.s. (Putra Maryam)',
        gelarRasul: 'Rūḥullāh wa Kalimatuhū (Roh ciptaan Allah dan kalimat firman-Nya)',
        periodeWaktu: 'Awal Abad ke-1 Masehi (1 M)',
        tempatDiturunkan: 'Yerusalem / Palestina (Nasirah & Betlehem)',
        bahasaAsli: 'Bahasa Suryani Kuno / Aramaik (Aramaic)',
        kaumSasaran: 'Bani Israil',
        dalilAlQuran: {
          surah: 'Q.S. Al-Mā\'idah [5]: Ayat 46',
          ayatNomor: 46,
          teksArab: 'وَقَفَّيْنَا عَلٰٓى اٰثَارِهِمْ بِعِيْسَى ابْنِ مَرْيَمَ مُصَدِّقًا لِّمَا بَيْنَ يَدَيْهِ مِنَ التَّوْرٰىةِ ۖ وَاٰتَيْنٰهُ الْاِنْجِيْلَ فِيْهِ هُدًى وَّنُوْرٌ ۙ وَّمُصَدِّقًا لِّمَا بَيْنَ يَدَيْهِ مِنَ التَّوْرٰىةِ وَهُدًى وَّمَوْعِظَةً لِّلْمُتَّقِيْنَ',
          transliterasi: 'Wa qaffainā ‘alā āṡārihim bi‘Īsabni Maryama muṣaddiqal limā baina yadaihi minat-taurāti wa ātaināhul-injīla fīhi hudaw wa nūruw wa muṣaddiqal limā baina yadaihi minat-taurāti wa hudaw wa mau‘iẓatal lil-muttaqīn(a).',
          terjemahan: 'Dan Kami teruskan jejak mereka dengan mengutus Isa putra Maryam, membenarkan Kitab yang sebelumnya, yaitu Taurat. Dan Kami telah memberikan kepadanya Kitab Injil sedang di dalamnya (ada) petunjuk dan cahaya (penerang), dan membenarkan kitab yang sebelumnya yaitu Kitab Taurat, dan sebagai petunjuk serta pengajaran untuk orang-orang yang bertakwa.'
        },
        ringkasanAjaranPokok:
          'Kata Injil berasal dari bahasa Yunani "Euangelion" yang berarti "kabar gembira". Kitab Injil diwahyukan untuk membersihkan jiwa Bani Israil dari sifat materialistis, kemunafikan ahli agama Yahudi yang kaku, serta menanamkan nilai cinta kasih, kedermawanan, kezuhudan, memaafkan musuh, dan kabar gembira datangnya rasul penutup bernama Ahmad (Nabi Muhammad SAW).',
        poinKunciAjaran: [
          '1. Pemurnian akidah tauhid: Menyembah Allah Swt. yang Maha Esa tanpa sekutu.',
          '2. Ajaran cinta kasih (mahabbah), kelembutan hati, dan memaafkan kesalahan sesama.',
          '3. Pembersihan batin dari formalisme hukum munafik yang hanya mementingkan rupa luar.',
          '4. Menghalalkan beberapa perkara yang sebelumnya diharamkan dalam syariat Taurat sebagai wujud rahmat (Q.S. Ali \'Imran: 50).',
          '5. Bisyarah (kabar gembira) ramalan kedatangan nabi terakhir bernama Ahmad (Q.S. As-Saff: 6).'
        ],
        karakteristikKhas: 'Menekankan kesucian rohani, cinta kasih, etika memaafkan, dan pembebasan belenggu hukum kaku.',
        warnaAksen: 'from-purple-600 to-violet-800'
      },
      {
        id: 'kitab-alquran',
        namaKitab: 'Kitab Al-Qur\'anul Karim',
        namaArab: 'الْقُرْاٰنُ الْكَرِيْمُ',
        rasulPenerima: 'Nabi Muhammad SAW',
        gelarRasul: 'Khātamun-Nabiyyīn & Sayyidul Mursalīn (Penutup Para Nabi & Pemimpin Para Rasul)',
        periodeWaktu: 'Abad ke-7 Masehi (Dimulai 17 Ramadan 610 M - 632 M)',
        tempatDiturunkan: 'Gua Hira (Makkah Al-Mukarramah) dan Madinah Al-Munawwarah (22 tahun 2 bulan 22 hari)',
        bahasaAsli: 'Bahasa Arab Fushah (Kesusastraan Tertinggi)',
        kaumSasaran: 'Seluruh Umat Manusia dan Jin hingga Akhir Zaman (Kāffatan lin-Nās)',
        dalilAlQuran: {
          surah: 'Q.S. Al-Baqarah [2]: Ayat 2',
          ayatNomor: 2,
          teksArab: 'ذٰلِكَ الْكِتٰبُ لَا رَيْبَ ۛ فِيْهِ ۛ هُدًى لِّلْمُتَّقِيْنَ ۙ',
          transliterasi: 'Żālikal-kitābu lā raiba fīh(i), hudal lil-muttaqīn(a).',
          terjemahan: 'Kitab (Al-Qur\'an) ini tidak ada keraguan padanya; petunjuk bagi mereka yang bertakwa.'
        },
        ringkasanAjaranPokok:
          'Al-Qur\'an adalah mukjizat abadi terbesar Nabi Muhammad SAW. Al-Qur\'an diturunkan berangsur-angsur sebagai pedoman paripurna yang mencakup seluruh aspek kehidupan duniawi dan ukhrawi. Berfungsi sebagai "Al-Muhaimin" (penyempurna, penguji, dan saksi) atas kitab-kitab sebelumnya serta dijamin keasliannya langsung oleh Allah Swt.',
        poinKunciAjaran: [
          '1. Akidah: Tauhid murni yang kokoh dan penolakan segala bentuk syirik.',
          '2. Syariat: Hukum ibadah mahdhah dan muamalah sosial, perbankan, waris, perkawinan, dan kenegaraan.',
          '3. Akhlak: Standar budi pekerti terluhur bagi individu, keluarga, dan masyarakat.',
          '4. Kisah Para Nabi & Umat Terdahulu: Pelajaran sejarah otentik untuk membangun masa depan.',
          '5. Muamalah & Hak Asasi Manusia: Keadilan, persamaan hak, toleransi, dan perdamaian semesta.',
          '6. Janji & Ancaman: Realitas surga dan neraka, hisab, serta kehidupan kekal akhirat.',
          '7. Isyarat Ilmiah: Fakta-fakta sains alam semesta yang terbukti akurat oleh penelitian modern.'
        ],
        karakteristikKhas: 'Mukjizat abadi lafaz dan maknanya, universal melintasi zaman, dan terlindungi dari tahrif.',
        warnaAksen: 'from-emerald-600 to-teal-800'
      }
    ],
    perbandinganRingkas: {
      judul: 'Ikhtisar Komparasi Empat Kitab Suci Allah',
      deskripsi:
        'Taurat diturunkan kepada Nabi Musa a.s. (Abad 12 SM, bahasa Ibrani), Zabur kepada Nabi Dawud a.s. (Abad 10 SM, bahasa Qibthi), Injil kepada Nabi Isa a.s. (Abad 1 M, bahasa Suryani), dan Al-Qur\'an kepada Nabi Muhammad SAW (Abad 7 M, bahasa Arab). Tiga kitab pertama ditujukan khusus kepada Bani Israil pada zamannya, sedangkan Al-Qur\'an ditujukan bagi seluruh umat manusia sepanjang masa.'
    }
  },
  fungsiDanHikmah: {
    fungsiUtamaKitabullah: [
      {
        namaFungsi: '1. Petunjuk Hidup Manusia (Hudan)',
        istilahQuran: 'هُدًى لِّلنَّاسِ وَبَيِّنٰتٍ مِّنَ الْهُدٰى',
        dalilAyat: 'Q.S. Al-Baqarah [2]: 185',
        penjelasan:
          'Kitab suci berfungsi sebagai "buku manual kehidupan" dari Sang Pencipta agar manusia tidak tersesat dalam menempuh jalan hidup, membedakan mana yang halal dan haram, serta meraih kebahagiaan abadi di surga.',
        aplikasiSiswa: 'Membaca dan merujuk Al-Qur\'an ketika menghadapi kebingungan moral atau kebimbangan keputusan di sekolah.'
      },
      {
        namaFungsi: '2. Pembeda Kebenaran dan Kebatilan (Al-Furqān)',
        istilahQuran: 'تَبٰرَكَ الَّذِيْ نَزَّلَ الْفُرْقَانَ عَلٰى عَبْدِهٖ',
        dalilAyat: 'Q.S. Al-Furqān [25]: 1',
        penjelasan:
          'Al-Furqan berarti pemutus atau pemisah yang sangat tegas antara tauhid dan syirik, keadilan dan kezaliman, kejujuran dan kepalsuan, serta kebaikan dan kejahatan.',
        aplikasiSiswa: 'Mampu menyaring tren medsos yang merusak dan menolak ajakan pergaulan bebas atau tawuran.'
      },
      {
        namaFungsi: '3. Obat Penawar Batin & Fisik (Asy-Syifā’)',
        istilahQuran: 'وَنُنَزِّلُ مِنَ الْقُرْاٰنِ مَا هُوَ شِفَاۤءٌ وَّرَحْمَةٌ',
        dalilAyat: 'Q.S. Al-Isrā\' [17]: 82',
        penjelasan:
          'Sebagai penawar penyakit rohani manusia, seperti rasa cemas, iri hati, dendam, sombong, waswas, keraguan iman, dan keputusasaan, serta menghadirkan ketenangan jiwa melalui getaran tilawahnya.',
        aplikasiSiswa: 'Mendengarkan tilawah Al-Qur\'an atau membacanya saat dilanda stres belajar atau gelisah.'
      },
      {
        namaFungsi: '4. Penjelas bagi Segala Perkara (Tibyān)',
        istilahQuran: 'وَنَزَّلْنَا عَلَيْكَ الْكِتٰبَ تِبْيَانًا لِّكُلِّ شَيْءٍ',
        dalilAyat: 'Q.S. An-Naḥl [16]: 89',
        penjelasan:
          'Al-Qur\'an memuat prinsip-prinsip universal yang menjelaskan persoalan hakiki manusia: tujuan penciptaan, hakikat rezeki, tatanan keadilan sosial, dan tata kelola alam semesta.',
        aplikasiSiswa: 'Menjadikan prinsip Al-Qur\'an sebagai kompas ilmu pengetahuan dan etika riset sains.'
      },
      {
        namaFungsi: '5. Hakim yang Adil Pemutus Perselisihan (Hakaman \'Adlan)',
        istilahQuran: 'لِتَحْكُمَ بَيْنَ النَّاسِ بِمَآ اَرٰىكَ اللّٰهُ',
        dalilAyat: 'Q.S. An-Nisā’ [4]: 105',
        penjelasan:
          'Kitabullah menjadi rujukan hukum tertinggi yang tidak memihak suku, kasta, atau kekuasaan dalam menegakkan keadilan di antara manusia yang berselisih paham.',
        aplikasiSiswa: 'Bersikap objektif, tidak curang, dan adil saat menjadi pengurus OSIS atau ketua kelompok belajar.'
      }
    ],
    hikmahBeriman: [
      {
        poinHikmah: '1. Menumbuhkan Syukur Mendalam kepada Allah Swt.',
        uraian:
          'Menyadari bahwa tanpa wahyu kitab suci, manusia akan terjebak dalam kegelapan jahiliyah, kesesatan filsafat nafsu, dan saling memangsa seperti hukum rimba.',
        dampakKejiwaan: 'Hati senantiasa merasa dibimbing, dijaga, dan dicintai oleh Sang Maha Pemelihara.'
      },
      {
        poinHikmah: '2. Memperkokoh Akidah Tauhid Murni',
        uraian:
          'Mengetahui bahwa sejak zaman Nabi Adam, Nuh, Ibrahim, Musa, Isa, hingga Muhammad SAW, seluruh kitab membawa misi agung yang satu: Mengesakan Allah Yang Maha Tunggal.',
        dampakKejiwaan: 'Terbebas dari rasa takut kepada tahayul, jimat, dukun, atau kesyirikan modern.'
      },
      {
        poinHikmah: '3. Menghadirkan Ketenangan Jiwa dan Optimisme Hidup',
        uraian:
          'Meyakini janji-janji Allah dalam kitab suci bahwa setiap amal kebajikan sekecil apa pun akan dibalas dan setiap cobaan pasti diiringi kemudahan (Q.S. Al-Insyirah: 5-6).',
        dampakKejiwaan: 'Jiwa menjadi tangguh, tidak mudah putus asa, dan memiliki resiliensi mental yang tinggi.'
      },
      {
        poinHikmah: '4. Menumbuhkan Sikap Toleransi dan Persaudaraan Sejati',
        uraian:
          'Memahami bahwa kitab suci terdahulu juga berasal dari Allah Swt., sehingga seorang mukmin wajib menghormati martabat kemanusiaan para penganut agama lain dan hidup rukun berdampingan.',
        dampakKejiwaan: 'Menghilangkan bibit kebencian, radikalisme, fanatisme sempit, dan kecurigaan rasial.'
      },
      {
        poinHikmah: '5. Termotivasi Menuntut Ilmu dan Berakhlak Karimah',
        uraian:
          'Wahyu pertama Al-Qur\'an diawali dengan perintah membaca (Iqra\'). Iman kepada kitab memicu semangat literasi, riset teknologi, dan budi pekerti yang unggul di kancah peradaban dunia.',
        dampakKejiwaan: 'Rasa haus akan ilmu pengetahuan dan dorongan berprestasi yang berlandaskan spiritualitas.'
      }
    ]
  },
  isiPokokAjaran: {
    pengantar:
      'Meskipun diturunkan pada masa, tempat, dan bahasa yang berbeda-beda, seluruh kitab suci Allah Swt. memiliki esensi dan benang merah ajaran yang sama karena bersumber dari Rabb yang satu. Terdapat enam dimensi pokok yang menjadi pilar ajaran kitab-kitab Allah:',
    enamDimensiAjaran: [
      {
        dimensi: '1. Akidah (Tauhid)',
        namaArab: 'الْعَقِيْدَةُ وَالتَّوْحِيْدُ',
        penjelasan:
          'Pondasi paling fundamental dalam setiap kitab suci: Meyakini keesaan Allah Swt. (Wahdaniyyah), tiada sekutu bagi-Nya, serta mengimani adanya para malaikat, hari akhir, dan takdir ilahi. Seluruh nabi menyerukan kalimat: "Sembahlah Allah, tiada sesembahan yang berhak disembah bagimu selain Dia" (Q.S. Al-A\'raf: 59).',
        contohImplementasi: 'Menjaga kemurnian niat dalam beribadah, tidak meminta berkah kepada kuburan keramat atau benda bertuah.'
      },
      {
        dimensi: '2. Ibadah (Syariat Peribadatan)',
        namaArab: 'الْعِبَادَاتُ وَالشَّرَائِعُ',
        penjelasan:
          'Tata cara mengabdikan diri dan menyembah Allah Swt., seperti doa, salat, puasa, dan penyucian harta. Meskipun bentuk teknis syariatnya mengalami penyesuaian dari zaman Nabi Musa, Nabi Isa, hingga Nabi Muhammad SAW, substansinya tetap persembahan tulus kepada Allah.',
        contohImplementasi: 'Melaksanakan salat fardhu lima waktu tepat waktu dan menjalankan puasa Ramadan dengan ikhlas.'
      },
      {
        dimensi: '3. Akhlak (Budi Pekerti Luhur)',
        namaArab: 'الْأَخْلَاقُ الْكَرِيْمَةُ',
        penjelasan:
          'Pedoman moral universal yang mengatur perilaku terpuji: bersikap jujur, adil, kasih sayang, amanah, menepati janji, berbakti kepada orang tua, serta menjauhi sifat tercela seperti dusta, riya, zalim, hasad, dan fitnah.',
        contohImplementasi: 'Santun kepada guru, menyayangi adik kelas, dan tidak menyontek saat ujian berlangsung.'
      },
      {
        dimensi: '4. Muamalah & Keadilan Sosial',
        namaArab: 'الْمُعَامَلَاتُ وَالْعَدَالَةُ',
        penjelasan:
          'Aturan interaksi sosial antarmanusia: tata cara perniagaan yang halal, larangan riba, perlindungan hak milik, kebebasan beragama, peradilan yang adil, serta perlindungan kaum lemah (fakir, miskin, dan anak yatim).',
        contohImplementasi: 'Jual beli secara transparan di kantin kejujuran sekolah dan tidak berbuat curang dalam timbangan.'
      },
      {
        dimensi: '5. Tarikh & Kisah Umat Terdahulu',
        namaArab: 'التَّارِيْخُ وَالْقِصَصُ',
        penjelasan:
          'Catatan sejarah otentik para nabi, orang saleh (seperti Luqman, Maryam, Ashabul Kahfi), dan kehancuran kaum yang sombong mendustakan wahyu (seperti kaum Fir\'aun, Tsamud, dan \'Ad) sebagai cermin pelajaran hidup (ibrah) bagi generasi kemudian.',
        contohImplementasi: 'Mengambil teladan keteguhan Nabi Ibrahim a.s. dalam mencari kebenaran dan kesabaran Nabi Ayyub a.s.'
      },
      {
        dimensi: '6. Janji dan Peringatan (Wa\'ad wa Wa\'id)',
        namaArab: 'الْوَعْدُ وَالْوَعِيْدُ',
        penjelasan:
          'Kabar gembira (al-wa\'ad) berupa pahala, ampunan, ketenangan batin di dunia, dan surga abadi bagi mereka yang taat; serta peringatan keras (al-wa\'id) berupa dosa, kehinaan, dan siksa api neraka bagi mereka yang berbuat fasik dan zalim.',
        contohImplementasi: 'Selalu berhati-hati dalam berucap dan bertindak karena meyakini adanya hisab di hari pembalasan.'
      }
    ]
  },
  keistimewaanAlQuran: {
    kedudukanAlMuhaimin: {
      ayatRujukan: 'Q.S. Al-Mā\'idah [5]: Ayat 48',
      maknaAlMuhaimin: [
        '1. Mushaddiqan: Membenarkan hakikat kebenaran wahyu-wahyu murni yang pernah ada pada kitab terdahulu.',
        '2. Syāhidan: Menjadi saksi yang adil atas kebenaran ajaran para nabi masa lalu.',
        '3. Hākiman / Qayyiman: Menjadi hakim pengadil yang mengoreksi dan meluruskan distorsi (tahrif) yang diselipkan manusia ke dalam kitab-kitab lampau.',
        '4. Nāsikhan: Menasakh (menghapus/menggantikan) hukum syariat lokal terdahulu dengan syariat Islam yang universal dan relevan sepanjang zaman.'
      ],
      peranKorektif:
        'Al-Qur\'an meluruskan kekeliruan akidah yang terjadi setelah wafatnya para nabi, misalnya meluruskan anggapan bahwa Uzair anak Allah, meluruskan anggapan bahwa Nabi Isa a.s. disalib dan dijadikan tuhan (Q.S. An-Nisā\': 157 & Q.S. Al-Mā\'idah: 116), serta menegaskan kembali ketauhidan mutlak.'
    },
    enamKeistimewaanUtama: [
      {
        nomor: 1,
        judul: 'Terpelihara Keaslian & Kemurniannya Sepanjang Zaman',
        dalil: 'Q.S. Al-Ḥijr [15]: Ayat 9: "اِنَّا نَحْنُ نَزَّلْنَا الذِّكْرَ وَاِنَّا لَهٗ لَحٰفِظُوْنَ"',
        penjelasanMendalam:
          'Berbeda dengan kitab terdahulu yang penjagaannya diserahkan kepada para rahib dan pendeta sehingga mengalami perubahan tangan manusia (Q.S. Al-Mā\'idah: 44), kemurnian Al-Qur\'an dijamin dan dijaga langsung oleh Allah Swt. hingga akhir zaman.',
        buktiNyata:
          'Sejak masa Rasulullah SAW, sahabat mencatat wahyu pada pelepah kurma dan kulit, ribuan sahabat menghafal di luar kepala. Hingga hari ini, mushaf Al-Qur\'an di seluruh penjuru dunia adalah persis satu huruf pun tidak berbeda.'
      },
      {
        nomor: 2,
        judul: 'Bersifat Universal dan Abadi Melintasi Waktu',
        dalil: 'Q.S. Sabā’ [34]: Ayat 28: "وَمَآ اَرْسَلْنٰكَ اِلَّا كَاۤفَّةً لِّلنَّاسِ بَشِيْرًا وَّنَذِيْرًا"',
        penjelasanMendalam:
          'Kitab Taurat, Zabur, dan Injil diturunkan khusus untuk kaum Bani Israil pada kurun waktu tertentu. Sebaliknya, Al-Qur\'an diturunkan untuk seluruh ras manusia (Kāffatan lin-Nās), bangsa, bahasa, dan tetap berlaku relevan hingga hari kiamat.',
        buktiNyata:
          'Hukum-hukum moral, sosial, dan syariat Al-Qur\'an cocok diterapkan pada masyarakat tradisional maupun masyarakat modern era kecerdasan buatan (AI) saat ini.'
      },
      {
        nomor: 3,
        judul: 'Kemukjizatan Bahasa dan Balaghah Tertinggi (I\'jāzul Qur\'an)',
        dalil: 'Q.S. Al-Isrā\' [17]: Ayat 88',
        penjelasanMendalam:
          'Struktur kata, ritme nada, keindahan diksi, dan kedalaman makna Al-Qur\'an berada di atas puncak kemampuan sastra manusia. Allah menantang seluruh sastrawan Arab, jin, dan manusia untuk membuat semisal Al-Qur\'an, bahkan satu surah terpendek pun, namun tak seorang pun mampu menandinginya.',
        buktiNyata:
          'Tantangan dalam Q.S. Al-Baqarah: 23 tetap tidak terjawab oleh para penentang Islam selama lebih dari 14 abad.'
      },
      {
        nomor: 4,
        judul: 'Membacanya Bernilai Ibadah Berlipat Ganda',
        dalil: 'Hadis Sahih Riwayat Imam At-Tirmidzi No. 2910',
        penjelasanMendalam:
          'Setiap satu huruf Al-Qur\'an yang dibaca oleh seorang mukmin bernilai sepuluh kebaikan, bukan "Alif-Lam-Mim" dihitung satu huruf, melainkan Alif satu huruf, Lam satu huruf, dan Mim satu huruf.',
        buktiNyata:
          'Tiada satu pun buku sastra atau kitab di dunia yang dibaca berulang-ulang ratusan kali dalam salat tanpa menimbulkan rasa bosan, melainkan justru melahirkan ketenteraman hati.'
      },
      {
        nomor: 5,
        judul: 'Menyempurnakan & Menasakh Syariat Terdahulu',
        dalil: 'Q.S. Ali \'Imrān [3]: Ayat 85 & Q.S. Al-Mā\'idah [5]: Ayat 3',
        penjelasanMendalam:
          'Dengan turunnya Al-Qur\'an, agama Islam dinyatakan telah sempurna (akmaltu lakum dīnakum). Seluruh syariat parsial terdahulu yang tidak sesuai atau bersifat temporer telah digantikan dengan aturan Islam yang mencakup segala dimensi kehidupan.',
        buktiNyata:
          'Ajaran ibadah salat, zakat fitrah, dan hukum mawaris dalam Islam menjadi sistem yang paling adil dan teratur di dunia.'
      },
      {
        nomor: 6,
        judul: 'Memuat Mukjizat Isyarat Ilmiah Sains Modern',
        dalil: 'Q.S. Fuṣṣilat [41]: Ayat 53: "سَنُرِيْهِمْ اٰيٰتِنَا فِى الْاٰفَاقِ وَفِيْٓ اَنْفُسِهِمْ"',
        penjelasanMendalam:
          'Al-Qur\'an memuat berbagai fenomena sains yang belum diketahui pada abad ke-7 Masehi, seperti proses pembentukan embrio manusia (Q.S. Al-Mu\'minūn: 12-14), teori pemuaian alam semesta (Q.S. Az-Zāriyāt: 47), dan pergerakan lempeng bumi bagai awan (Q.S. An-Naml: 88).',
        buktiNyata:
          'Banyak ilmuwan modern terkemuka (seperti Prof. Keith Moore ahli anatomi) takjub dan membenarkan bahwa data ilmiah Al-Qur\'an hanya mungkin berasal dari Wahyu Ilahi.'
      }
    ]
  },
  generasiPecintaQuranToleran: {
    empatPilarKecintaan: [
      {
        pilar: '1. Tilawah (Membaca Rutin)',
        istilahArab: 'التِّلَاوَةُ وَالتَّرْتِيْلُ',
        deskripsi:
          'Membiasakan membaca Al-Qur\'an setiap hari secara tartil sesuai kaidah tajwid, fasih makhrajnya, dengan adab lahir dan batin yang khusyuk.',
        panduanPraktikPelajar:
          'Membiasakan "One Day One Juz" atau minimal 1 lembar ba\'da salat Magrib atau Subuh sebelum berangkat ke sekolah.'
      },
      {
        pilar: '2. Tadabbur (Menghayati Makna)',
        istilahArab: 'التَّدَبُّرُ وَالتَّفَهُّمُ',
        deskripsi:
          'Membaca terjemahan dan penjelasan tafsir ayat yang dibaca, merenungi pesan moralnya, dan mengaitkannya dengan persoalan diri sendiri.',
        panduanPraktikPelajar:
          'Mencatat satu ayat mutiara hikmah setiap pekan di buku harian atau jurnal refleksi islami.'
      },
      {
        pilar: '3. Tahfiz (Menghafalkan Firman)',
        istilahArab: 'الْحِفْظُ وَالتَّكْرَارُ',
        deskripsi:
          'Menyimpan kalamullah dalam dada melalui hafalan surah-surah pilihan (Juz 30 atau surah favorit) dan mengulanginya dalam salat fardhu dan sunnah.',
        panduanPraktikPelajar:
          'Menghafal 3-5 ayat baru setiap hari dengan metode tikrar dan menyetorkannya kepada guru tahfiz atau orang tua.'
      },
      {
        pilar: '4. \'Amal (Mengamalkan Akhlak Qur\'ani)',
        istilahArab: 'الْعَمَلُ وَالْأَخْلَاقُ الْقُرْاٰنِيَّةُ',
        deskripsi:
          'Puncak kecintaan hakiki pada Al-Qur\'an: Menjadikan akhlak Al-Qur\'an sebagai karakter hidup, sebagaimana sabda Aisyah r.a.: "Khuluquhul Qur\'ān" (Akhlak Rasulullah SAW adalah Al-Qur\'an).',
        panduanPraktikPelajar:
          'Menjadi pribadi yang ramah, jujur, pantang menipu, adil, suka menolong sesama, dan berjiwa pelindung bagi lingkungan.'
      }
    ],
    limaPrinsipToleransiQurani: [
      {
        prinsip: '1. Menghormati Kebebasan Memilih Keyakinan',
        dalil: 'Q.S. Al-Baqarah [2]: Ayat 256: "لَآ اِكْرَاهَ فِى الدِّيْنِ"',
        konteksKekinian:
          'Islam melarang keras segala bentuk pemaksaan agama, teror, intimidasi, atau persekusi keyakinan terhadap siapa pun.',
        sikapSiswaDiSekolah:
          'Tidak mencemooh teman yang beribadah sesuai agamanya dan tidak memaksakan teman non-muslim untuk mengikuti keyakinan kita.'
      },
      {
        prinsip: '2. Berbuat Baik dan Berlaku Adil kepada Semua Manusia',
        dalil: 'Q.S. Al-Mumtaḥanah [60]: Ayat 8',
        konteksKekinian:
          'Umat Islam diwajibkan berbuat kebajikan (al-birr) dan bersikap adil (al-qisṭ) kepada kaum non-muslim yang hidup berdampingan secara damai.',
        sikapSiswaDiSekolah:
          'Mau satu kelompok belajar dengan siswa non-muslim, berbagi bekal makanan halal, dan menolong teman yang sakit tanpa membedakan agama.'
      },
      {
        prinsip: '3. Ketegasan Akidah Tanpa Sinkretisme Ritual',
        dalil: 'Q.S. Al-Kāfirūn [109]: Ayat 6: "لَكُمْ دِيْنُكُمْ وَلِيَ دِيْنِ"',
        konteksKekinian:
          'Toleransi sejati bukan berarti mencampuradukkan ibadah ritual (sinkretisme), melainkan saling menghargai ruang privat peribadatan masing-masing.',
        sikapSiswaDiSekolah:
          'Menolak ajakan mengikuti ritual kebaktian atau peribadatan agama lain dengan cara santun dan tetap bersahabat akrab di jam istirahat.'
      },
      {
        prinsip: '4. Berdialog dengan Cara yang Terbaik (Ahsan)',
        dalil: 'Q.S. An-Naḥl [16]: 125 & Q.S. Al-‘Ankabūt [29]: 46',
        konteksKekinian:
          'Ketika berdiskusi tentang perbedaan pandangan, seorang generasi Qur\'ani dilarang mencaci, menghina sesembahan lain, atau menggunakan kata-kata kasar.',
        sikapSiswaDiSekolah:
          'Menghindari debat kusir di media sosial, tidak menyebarkan meme penistaan agama, dan berbicara dengan argumentasi ilmiah yang santun.'
      },
      {
        prinsip: '5. Mengokohkan Ukhuwah Wathaniyyah & Insaniyyah',
        dalil: 'Q.S. Al-Ḥujurāt [49]: Ayat 13',
        konteksKekinian:
          'Sebagai bangsa Indonesia yang bersemboyan Bhinneka Tunggal Ika, generasi Qur\'ani adalah garda terdepan penjaga persatuan NKRI dari ancaman disintegrasi.',
        sikapSiswaDiSekolah:
          'Aktif dalam kegiatan bela negara, kepramukaan, kerja bakti sosial sekolah, dan menolak kelompok ekstremis radikal.'
      }
    ],
    studiKasusToleransi: [
      {
        kasus: 'Di perumahanmu, warga sedang mengadakan kerja bakti membersihkan selokan dan saluran air menjelang musim hujan. Sebagian warga adalah non-muslim.',
        analisisToleran:
          'Wajib ikut serta bergotong-royong bersama seluruh warga karena urusan kebersihan lingkungan dan kenyamanan fasilitas umum adalah ranah muamalah kemanusiaan yang sangat dianjurkan Islam.',
        laranganSikap:
          'Mangkir atau menolak gotong royong hanya karena perbedaan agama para tetangga.'
      },
      {
        kasus: 'Seorang kawan non-muslim di kelas kehilangan uang saku dan buku pelajarannya. Beberapa siswa lain menuduh tanpa bukti karena ia minoritas.',
        analisisToleran:
          'Membela kawan tersebut dari tuduhan zalim, mengingatkan bahwa menuduh tanpa bukti (*su\'udzhan*) adalah dosa besar, serta membantu mencari barang yang hilang secara adil.',
        laranganSikap:
          'Ikut-ikutan menyudutkan atau merundung (*bullying*) kawan yang lemah.'
      },
      {
        kasus: 'Teman sekelas mengundangmu menghadiri pesta ulang tahunnya yang diadakan secara kekeluargaan di rumahnya.',
        analisisToleran:
          'Boleh hadir untuk membahagiakan teman, menyampaikan selamat atas pertambahan usia, dan menikmati hidangan yang halal sebagai wujud persahabatan.',
        laranganSikap:
          'Menunjukkan sikap sombong atau menolak secara kasar sehingga melukai perasaan temannya.'
      }
    ]
  },
  kuisHots: [
    {
      id: 'k8-b2-soal1',
      nomor: 1,
      kasus:
        'Seorang muslim meyakini bahwa Allah Swt. pernah menurunkan Kitab Taurat kepada Nabi Musa a.s. dan Kitab Injil kepada Nabi Isa a.s. Namun, ia enggan mempelajari dan mengamalkan syariat Al-Qur\'an dengan alasan bahwa semua kitab suci itu intinya sama saja dan cukup percaya dalam hati.',
      pertanyaan:
        'Bagaimanakah kedudukan keimanan orang tersebut ditinjau dari konsep "Iman Ijmali" dan "Iman Tafshili" kepada kitab-kitab Allah Swt.?',
      pilihan: [
        'A. Keimanannya sempurna karena telah mempercayai seluruh kitab samawi secara setara tanpa diskriminasi',
        'B. Keimanannya cacat dan belum sah, karena terhadap Al-Qur\'an seorang muslim wajib beriman secara tafshili (mempelajari, meyakini, dan mengamalkan syariatnya), bukan sekadar iman ijmali seperti pada kitab-kitab sebelumnya',
        'C. Keimanannya benar karena Al-Qur\'an tidak mewajibkan pengamalan syariat bagi orang yang hatinya bersih',
        'D. Keimanannya diperbolehkan selama ia tetap menjalankan ibadah puasa dan salat Idulfitri'
      ],
      kunciJawaban: 1,
      pembahasan:
        'Keimanan kepada kitab suci sebelum Al-Qur\'an cukup dilakukan secara Ijmali (global: percaya bahwa kitab-kitab tersebut pernah diturunkan Allah pada zamannya). Namun terhadap Al-Qur\'anul Karim, setiap muslim wajib beriman secara Tafshili (terperinci: wajib meyakini setiap firman-Nya, membacanya, dan mengamalkan syariatnya sebagai petunjuk hidup). Mengabaikan pengamalan Al-Qur\'an membuat keimanan seseorang tidak sah (batal).'
    },
    {
      id: 'k8-b2-soal2',
      nomor: 2,
      kasus:
        'Dalam Q.S. Al-Mā\'idah [5]: Ayat 48, Allah Swt. menyebutkan bahwa Al-Qur\'an diturunkan sebagai "Muhaiminan \'alaih" terhadap kitab-kitab suci sebelumnya yang pernah diturunkan.',
      pertanyaan:
        'Makna operasional dari fungsi Al-Qur\'an sebagai "Al-Muhaimin" dalam kehidupan beragama adalah:',
      pilihan: [
        'A. Al-Qur\'an memerintahkan umat Islam untuk membakar semua naskah kuno peninggalan agama lain',
        'B. Al-Qur\'an berfungsi sebagai saksi, penjaga, dan tolok ukur penguji untuk mengoreksi serta meluruskan distorsi/perubahan ajaran tauhid yang diselipkan manusia pada kitab terdahulu',
        'C. Al-Qur\'an hanya menjiplak isi ajaran dari Kitab Taurat dan Zabur tanpa membawa ajaran baru',
        'D. Al-Qur\'an berlaku eksklusif hanya untuk orang Arab Quraisy di wilayah Timur Tengah'
      ],
      kunciJawaban: 1,
      pembahasan:
        'Al-Muhaimin bermakna pengawas, saksi, dan pemelihara kebenaran. Al-Qur\'an membenarkan kemurnian wahyu asli yang pernah dibawa para nabi lampau sekaligus bertindak sebagai hakim yang mengoreksi penyimpangan doktrin (tahrif) yang terjadi pada teks-teks terdahulu (seperti konsep ketuhanan Isa al-Masih yang diluruskan kembali menjadi hamba dan rasul Allah).'
    },
    {
      id: 'k8-b2-soal3',
      nomor: 3,
      kasus:
        'Perhatikan tabel pasangan kitab suci dan rasul penerimanya berikut ini:\n(1) Kitab Taurat - Nabi Musa a.s. - Bahasa Ibrani\n(2) Kitab Zabur - Nabi Isa a.s. - Bahasa Suryani\n(3) Kitab Injil - Nabi Dawud a.s. - Bahasa Qibthi\n(4) Kitab Al-Qur\'an - Nabi Muhammad SAW - Bahasa Arab',
      pertanyaan:
        'Pasangan kitab suci, rasul penerima, dan bahasa asli pengantar wahyu yang benar ditunjukkan oleh nomor:',
      pilihan: [
        'A. (1) dan (2)',
        'B. (2) dan (3)',
        'C. (1) dan (4)',
        'D. (3) dan (4)'
      ],
      kunciJawaban: 2,
      pembahasan:
        'Pasangan yang tepat adalah: (1) Kitab Taurat diturunkan kepada Nabi Musa a.s. dalam bahasa Ibrani; dan (4) Kitab Al-Qur\'an diturunkan kepada Nabi Muhammad SAW dalam bahasa Arab. Pasangan (2) salah karena Zabur diturunkan kepada Nabi Dawud a.s. dalam bahasa Qibthi/Suryani, dan pasangan (3) salah karena Injil diturunkan kepada Nabi Isa a.s. dalam bahasa Suryani/Aramaik.'
    },
    {
      id: 'k8-b2-soal4',
      nomor: 4,
      kasus:
        'Seorang siswa muslim memiliki tetangga yang merayakan hari raya keagamaannya. Teman sekelas mengajak siswa tersebut ikut menyanyikan kidung pujian di tempat ibadah agama tetangga tersebut dengan alasan agar dianggap sebagai generasi muda yang bertoleransi tinggi.',
      pertanyaan:
        'Berdasarkan prinsip toleransi Al-Qur\'an (Q.S. Al-Kafirun: 6 & Q.S. Al-Mumtahanah: 8), tindakan yang paling tepat dilakukan siswa tersebut adalah:',
      pilihan: [
        'A. Ikut bernyanyi di tempat ibadah tersebut karena toleransi menuntut keikutsertaan dalam ritual agama lain',
        'B. Menolak secara santun ajakan mengikuti ritual peribadatan tanpa mencela, seraya tetap menjaga hubungan baik dan mengucapkan salam silaturahmi sosial saat bertamu di rumahnya',
        'C. Memusuhi tetangga tersebut dan melarang teman-teman lain bertegur sapa dengan tetangga non-muslim',
        'D. Pura-pura sakit agar tidak dicap sebagai orang yang fanatik dan radikal'
      ],
      kunciJawaban: 1,
      pembahasan:
        'Prinsip toleransi Islam sangat jelas: "Lakum dīnukum wa liya dīn". Dalam ranah akidah dan ritual peribadatan, toleransi adalah saling menghormati dan tidak mencampuradukkan ibadah (zero compromise / no syncretism). Namun dalam ranah muamalah kemasyarakatan, umat Islam dianjurkan bersikap santun, ramah, adil, dan tolong-menolong (Q.S. Al-Mumtahanah: 8).'
    },
    {
      id: 'k8-b2-soal5',
      nomor: 5,
      kasus:
        'Al-Qur\'an diwahyukan lebih dari 14 abad yang lalu di tengah masyarakat padang pasir, namun banyak ayatnya mengisyaratkan fakta-fakta ilmiah mutakhir seperti proses perkembangan embrio manusia dalam rahim (nuthfah, \'alaqah, mudghah) dalam Q.S. Al-Mu\'minun: 12-14.',
      pertanyaan:
        'Fakta tersebut membuktikan salah satu keistimewaan agung Al-Qur\'an, yaitu:',
      pilihan: [
        'A. Al-Qur\'an adalah buku teori laboratorium sains yang ditulis oleh para filsuf Yunani kuno',
        'B. I\'jazul Qur\'an (Kemukjizatan Al-Qur\'an) yang membuktikan bahwa Al-Qur\'an murni firman Allah Swt. Yang Maha Mengetahui rahasia penciptaan alam semesta dan mustahil karangan manusia',
        'C. Nabi Muhammad SAW pernah belajar ilmu kedokteran anatomi modern di universitas Eropa',
        'D. Informasi tersebut hanya kebetulan belaka tanpa keterkaitan dengan keimanan'
      ],
      kunciJawaban: 1,
      pembahasan:
        'Kesesuaian ayat-ayat Al-Qur\'an dengan penemuan sains modern merupakan bukti I\'jazul Qur\'an (kemukjizatan Al-Qur\'an). Fakta embriologi tersebut tidak mungkin diketahui oleh manusia pada abad ke-7 Masehi tanpa mikroskop modern, yang membuktikan secara mutlak bahwa Al-Qur\'an adalah wahyu ilahi dari Allah Yang Maha Pencipta.'
    }
  ]
};
