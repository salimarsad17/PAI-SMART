export interface DalilRukhsahItem {
  id: string;
  sumber: string;
  kategori: string;
  arabic: string;
  latin: string;
  terjemah: string;
  tafsirRingkas: string;
  audioUrl?: string;
}

export interface SebabRukhsahItem {
  nomor: number;
  sebab: string;
  istilahArab: string;
  penjelasan: string;
  contohDalamIbadah: string;
}

export interface RukhsahIbadahItem {
  id: string;
  namaIbadah: 'Shalat' | 'Puasa' | 'Zakat' | 'Haji';
  iconName: string;
  tagline: string;
  hukumDasar: string; // Azimah
  bentukRukhsah: string[];
  syaratSah: string[];
  siapaYangBoleh: string[];
  dalilRujukan: string;
  detailPenerapan: string;
}

export interface PanduanPraktikRukhsahItem {
  id: string;
  judulPraktik: string;
  kategori: 'Salat Jamak & Qashar' | 'Salat Orang Sakit' | 'Tayamum Pengganti Wudu/Mandi' | 'Puasa Qadha & Fidyah';
  syaratKetentuan: string[];
  langkahPraktik: {
    tahap: number;
    instruksi: string;
    bacaanNiatAtauDoa?: {
      arab: string;
      latin: string;
      arti: string;
    };
    catatanPenting: string;
  }[];
  tipsPelajar: string;
}

export interface HikmahRukhsahItem {
  nomor: number;
  judul: string;
  deskripsi: string;
  dampakSpiritual: string;
  refleksiPelajar: string;
}

export interface SoalHotsRukhsah {
  id: string;
  nomor: number;
  pertanyaan: string;
  kasus: string;
  pilihan: string[];
  kunciJawaban: number;
  pembahasan: string;
}

export interface MateriKelas7Sem2Bab9 {
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
  ketentuanRukhsah: {
    pengertianBahasa: string;
    pengertianIstilah: string;
    konsepAzimahVsRukhsah: {
      azimah: string;
      rukhsah: string;
      perbandingan: string;
    };
    hukumMengambilRukhsah: {
      wajib: string;
      sunnah: string;
      mubah: string;
      makruhAtauHaram: string;
    };
    tujuhSebabKeringanan: SebabRukhsahItem[];
  };
  dalilNaqli: DalilRukhsahItem[];
  rukhsahEmpatIbadah: RukhsahIbadahItem[];
  panduanPraktik: PanduanPraktikRukhsahItem[];
  hikmahRukhsah: HikmahRukhsahItem[];
  kuisHots: SoalHotsRukhsah[];
}

export const MATERI_KELAS_7_SEM_2_BAB_9: MateriKelas7Sem2Bab9 = {
  babNumber: 9,
  judulBab: 'Menerapkan Ketentuan Rukhsah dalam Ibadah',
  subJudul: 'Merengkuh Kasih Sayang dan Kemudahan dari Allah Swt. dalam Menjalankan Ibadah Shalat, Puasa, Zakat, dan Haji',
  elemenCp: 'Fikih',
  fase: 'D (SMP/MTs)',
  semester: 'Semester 2',
  pengantar: {
    apersepsi: 'Pernahkah kamu melakukan perjalanan karya wisata (study tour) sekolah ke luar kota atau mudik hari raya sejauh ratusan kilometer, lalu bingung bagaimana cara menunaikan salat tepat waktu di dalam bus atau kereta api? Ataukah kamu pernah terbaring sakit dengan selang infus dan tidak boleh terkena air dingin untuk berwudu? Islam adalah agama yang ramah, fitrah, dan penuh rahmat. Allah Swt. tidak pernah membebani hamba-Nya di luar batas kesanggupannya. Dalam kondisi darurat atau kesulitan (masyaqqah), Allah menganugerahkan fasilitas "Rukhsah" (keringanan) agar seorang muslim tetap dapat menjaga hubungan ibadahnya tanpa merasa tersiksa. Bab ini membekali kita memahami hakikat rukhsah, aturan syariat dalam salat, puasa, zakat, dan haji, tata cara praktiknya, serta hikmah luhur di balik kasih sayang Ilahi.',
    tujuanPembelajaran: [
      'Menjelaskan ketentuan rukhsah dalam ibadah secara bahasa, istilah syariat, perbedaannya dengan hukum azimah, serta hukum-hukum mengambil rukhsah dengan benar',
      'Menganalisis dalil naqli Al-Qur\'an dan As-Sunnah tentang kemudahan agama Islam dan anjuran mengambil rukhsah',
      'Mengklasifikasikan bentuk dan ketentuan rukhsah dalam 4 ibadah pokok: shalat (jamak, qashar, shalat orang sakit, khauf), puasa (qadha & fidyah), zakat (penyegeraan/ta\'jil), dan haji (badal haji & dam)',
      'Mempraktikkan tata cara rukhsah secara tepat dan tertib: shalat jamak taqdim, jamak ta\'khir, qashar, tayamum, dan shalat dalam kondisi sakit/musafir',
      'Merefleksikan hikmah rukhsah dalam membentuk karakter pelajar yang taat, adaptif, tidak putus asa, serta menyelesaikan asesmen kuis HOTS'
    ]
  },
  ketentuanRukhsah: {
    pengertianBahasa: 'Secara etimologi (bahasa Arab), kata rukhsah (الرُّخْصَةُ) berakar dari kata rakhusha - yarkhushu - rukhshan (رَخُصَ - يَرْخُصُ - رُخْصًا) yang bermakna: kemudahan, kelonggaran, keringanan, atau kelembutan (lawan dari kata "as-si\'ru al-ghali" atau sesuatu yang berat dan mahal).',
    pengertianIstilah: 'Menurut istilah Ushul Fikih, rukhsah adalah: "Hukum syariat yang diberlakukan sebagai bentuk keringanan dan kemudahan bagi seorang mukalaf dalam keadaan khusus (darurat atau masyaqqah) yang menyimpang dari hukum asal yang berat (\'azimah), namun dalil hukum asal tersebut tetap berlaku bagi orang yang berada dalam kondisi normal."',
    konsepAzimahVsRukhsah: {
      azimah: 'Hukum pokok/dasar syariat yang disyariatkan sejak awal untuk seluruh manusia dalam kondisi normal tanpa memandang adanya halangan tertentu. Contoh: Salat Zuhur wajib dikerjakan 4 rakaat tepat pada waktunya sambil berdiri sempurna dan berwudu menggunakan air mutlak.',
      rukhsah: 'Hukum pengecualian yang diberikan karena adanya udzur syar\'i untuk meringankan beban hamba. Contoh: Mengqashar salat Zuhur menjadi 2 rakaat dan menjamaknya dengan Asar bagi musafir yang menempuh jarak safar minimal 81–89 km.',
      perbandingan: 'Azimah adalah jalan tol utama kepatuhan, sedangkan Rukhsah adalah jalur darurat kasih sayang Allah agar hamba tidak celaka atau putus asa dalam beribadah.'
    },
    hukumMengambilRukhsah: {
      wajib: 'Wajib mengambil rukhsah jika tidak diambil akan membahayakan nyawa atau merusak organ tubuh. Contoh: Membatalkan puasa bagi orang yang sakit parah atau memakan bangkai saat terancam mati kelaparan di hutan.',
      sunnah: 'Sunnah mengambil rukhsah karena disukai oleh Allah Swt. Contoh: Mengqashar salat 4 rakaat menjadi 2 rakaat bagi musafir yang menempuh jarak safar panjang sesuai anjuran Rasulullah Saw.',
      mubah: 'Boleh memilih antara mengambil rukhsah atau tetap menjalankan azimah. Contoh: Memilih antara menjamak salat atau tidak saat perjalanan yang tidak terlalu memberatkan, atau bertayamum bagi orang yang luka ringan.',
      makruhAtauHaram: 'Makruh atau bahkan haram jika mengambil rukhsah dalam perjalanan maksiat (seperti bepergian untuk judi atau merampok), atau bersikap meremehkan syariat (tatabbu\' ar-rukhas) tanpa alasan syar\'i yang sah.'
    },
    tujuhSebabKeringanan: [
      {
        nomor: 1,
        sebab: 'Bepergian Jauh (Safar Syar\'i)',
        istilahArab: 'السَّفَرُ (As-Safar)',
        penjelasan: 'Perjalanan yang memenuhi jarak masafatul qashr (minimal 81-89 km) untuk tujuan mubah atau ketaatan, bukan safar maksiat.',
        contohDalamIbadah: 'Boleh salat jamak & qashar, boleh tidak berpuasa Ramadhan (lalu diqadha), mengusap khuff/kaos kaki selama 3 hari 3 malam.'
      },
      {
        nomor: 2,
        sebab: 'Sakit yang Menyulitkan',
        istilahArab: 'الْمَرَضُ (Al-Maradh)',
        penjelasan: 'Penyakit yang jika dipaksakan menjalankan azimah akan menambah parah rasa sakit, memperlambat kesembuhan, atau membahayakan fisik.',
        contohDalamIbadah: 'Boleh salat sambil duduk, berbaring miring, atau isyarat; boleh tayamum jika air membahayakan luka; boleh berbuka puasa.'
      },
      {
        nomor: 3,
        sebab: 'Paksaan atau Ancaman Nyawa',
        istilahArab: 'الْإِكْرَاهُ (Al-Ikrah)',
        penjelasan: 'Ancaman pembunuhan atau penyiksaan berat dari pihak zalim yang tidak mampu dilawan.',
        contohDalamIbadah: 'Mengucapkan kata kekufuran dalam keadaan hati tetap teguh beriman (seperti sahabat Ammar bin Yasir r.a.).'
      },
      {
        nomor: 4,
        sebab: 'Lupa Tanpa Disengaja',
        istilahArab: 'النِّسْيَانُ (An-Nisyan)',
        penjelasan: 'Hilangnya ingatan sementara waktu tentang suatu kewajiban atau larangan tanpa kelalaian yang disengaja.',
        contohDalamIbadah: 'Makan dan minum saat puasa karena benar-benar lupa (puasanya tetap sah), sujud sahwi jika lupa bilangan rakaat salat.'
      },
      {
        nomor: 5,
        sebab: 'Ketidaktahuan yang Dimaafkan',
        istilahArab: 'الْجَهْلُ (Al-Jahl)',
        penjelasan: 'Belum sampainya ilmu hukum syariat, terutama bagi orang yang baru masuk Islam (mualaf) atau hidup terpencil.',
        contohDalamIbadah: 'Tidak berdosa berbicara sedikit dalam salat karena belum tahu bahwa berbicara membatalkan salat bagi mualaf.'
      },
      {
        nomor: 6,
        sebab: 'Kondisi Darurat & Bencana Alam',
        istilahArab: 'الْعُسْرُ وَعُمُومُ الْبَلْوَى (Al-\'Usr wa \'Umumul Balwa)',
        penjelasan: 'Kondisi cuaca ekstrem (hujan lebat, badai lumpur, angin kencang dingin) atau ketiadaan air suci secara massal.',
        contohDalamIbadah: 'Menjamak salat di masjid karena hujan lebat yang membanjiri jalan, tayamum massal saat kekeringan panjang.'
      },
      {
        nomor: 7,
        sebab: 'Kekurangan Fisik Alami (Naqsh)',
        istilahArab: 'النَّقْصُ (An-Naqsh)',
        penjelasan: 'Ketidaksempurnaan kemampuan fisik atau akal secara hukum seperti anak-anak, orang gila, atau perempuan yang sedang haid/nifas.',
        contohDalamIbadah: 'Wanita haid/nifas diharamkan salat dan puasa (tidak perlu mengqadha salat, hanya mengqadha puasa), anak kecil belum dibebani taklif.'
      }
    ]
  },
  dalilNaqli: [
    {
      id: 'dalil-1',
      sumber: 'Q.S. Al-Baqarah (2): Ayat 185',
      kategori: 'Prinsip Kemudahan dalam Syariat Islam',
      arabic: 'يُرِيدُ ٱللَّهُ بِكُمُ ٱلْيُسْرَ وَلَا يُرِيدُ بِكُمُ ٱلْعُسْرَ',
      latin: "Yurīdullāhu bikumul-yusra wa lā yurīdu bikumul-'usr.",
      terjemah: 'Allah menghendaki kemudahan bagimu, dan tidak menghendaki kesukaran bagimu.',
      tafsirRingkas: 'Ayat ini merupakan kaidah pokok syariat (al-qawa\'id al-fiqhiyyah): "Al-masyaqqatu tajlibut-taysiir" (Kesukaran itu mendatangkan kemudahan). Allah mewahyukan syariat bukan untuk menyiksa manusia melainkan demi kemaslahatan hamba. Ketika seseorang musafir atau sakit dalam bulan Ramadhan, Allah memberikan keringanan untuk berbuka dan menggantinya di hari lain.',
      audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/002185.mp3'
    },
    {
      id: 'dalil-2',
      sumber: 'Q.S. An-Nisā\' (4): Ayat 101',
      kategori: 'Dalil Pensyariatan Qashar Salat bagi Musafir',
      arabic: 'وَإِذَا ضَرَبْتُمْ فِى ٱلْأَرْضِ فَلَيْسَ عَلَيْكُمْ جُنَاحٌ أَن تَقْصُرُوا۟ مِنَ ٱلصَّلَوٰةِ إِنْ خِفْتُمْ أَن يَفْتِنَكُمُ ٱلَّذِينَ كَفَرُوٓا۟',
      latin: "Wa idzā dharabtum fil-ardhi falaisa 'alaikum junāhun an taqshurū minash-shalāti in khiftum an yaftinakumul-ladzīna kafarū.",
      terjemah: 'Dan apabila kamu bepergian di muka bumi, maka tidaklah berdosa kamu meng-qashar (meringkas) salatmu, jika kamu takut diserang oleh orang-orang kafir.',
      tafsirRingkas: 'Ayat ini menjadi dasar hukum legalitas meringkas salat dari 4 rakaat menjadi 2 rakaat. Para sahabat pernah bertanya kepada Nabi: "Mengapa kita masih mengqashar salat padahal kita sudah aman tidak diserang musuh?" Rasulullah Saw. menjawab: "Itu adalah sedekah dari Allah kepada kalian, maka terimalah sedekah-Nya!" (H.R. Muslim).',
      audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/004101.mp3'
    },
    {
      id: 'dalil-3',
      sumber: 'Q.S. Al-Baqarah (2): Ayat 286',
      kategori: 'Allah Tidak Membebani di Luar Kesanggupan',
      arabic: 'لَا يُكَلِّفُ ٱللَّهُ نَفْسًا إِلَّا وُسْعَهَا ۚ لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا ٱكْتَسَبَتْ',
      latin: "Lā yukallifullāhu nafsan illā wus'ahā, lahā mā kasabat wa 'alaihā maktasabat.",
      terjemah: 'Allah tidak membebani seseorang melainkan sesuai dengan kesanggupannya. Dia mendapat (pahala) dari (kebajikan) yang dikerjakannya dan dia mendapat (siksa) dari (kejahatan) yang diperbuatnya.',
      tafsirRingkas: 'Ayat pamungkas surah Al-Baqarah ini menegaskan bahwa seluruh taklif (beban perintah dan larangan syariat) selalu berada dalam jangkauan fitrah manusia. Ketika kondisi fisik seseorang menurun (sakit atau tua renta), maka beban kewajiban pun diringankan sesuai kadar kemampuannya.',
      audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/002286.mp3'
    },
    {
      id: 'dalil-4',
      sumber: 'Q.S. Al-Hajj (22): Ayat 78',
      kategori: 'Tiada Kesempitan dalam Agama',
      arabic: 'وَمَا جَعَلَ عَلَيْكُمْ فِى ٱلدِّينِ مِنْ حَرَجٍ',
      latin: "Wa mā ja'ala 'alaikum fid-dīni min ḥaraj.",
      terjemah: 'Dan Dia tidak menjadikan kesukaran untukmu dalam agama.',
      tafsirRingkas: 'Kata "haraj" bermakna kesempitan yang membahayakan atau membinasakan. Islam hadir dengan kelapangan (samhah). Jika air tidak ada atau berbahaya bagi kesehatan kulit, ada fasilitas tayamum. Jika tidak sanggup berdiri dalam salat, boleh duduk atau berbaring.',
      audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/022078.mp3'
    },
    {
      id: 'dalil-5',
      sumber: 'Hadits Shahih Riwayat Ahmad & Ibnu Hibban',
      kategori: 'Allah Menyukai Rukhsah-Nya Diambil',
      arabic: 'إِنَّ اللَّهَ يُحِبُّ أَنْ تُؤْتَى رُخَصُهُ كَمَا يَكْرَهُ أَنْ تُؤْتَى مَعْصِيَتُهُ',
      latin: "Innallāha yuḥibbu an tu'tā rukhashuhū kamā yakrahu an tu'tā ma'ṣiyatuh.",
      terjemah: 'Sesungguhnya Allah menyukai apabila rukhsah (keringanan-Nya) diambil/diamalkan, sebagaimana Dia membenci apabila kemaksiatan kepada-Nya dilakukan. (H.R. Ahmad No. 5866 & Ibnu Hibban No. 354, dinilai Shahih)',
      tafsirRingkas: 'Hadis ini mengajarkan bahwa mengambil rukhsah bukanlah tanda kemalasan atau kelemahan iman, melainkan bukti ketundukan dan penerimaan hadiah kasih sayang dari Allah Swt. Menolak rukhsah saat benar-benar membutuhkannya dengan dalih sok kuat justru dilarang dalam syariat.',
      audioUrl: undefined
    },
    {
      id: 'dalil-6',
      sumber: 'Hadits Shahih Riwayat Al-Bukhari',
      kategori: 'Agama Islam Itu Mudah dan Sederhana',
      arabic: 'إِنَّ الدِّينَ يُسْرٌ، وَلَنْ يُشَادَّ الدِّينَ أَحَدٌ إِلَّا غَلَبَهُ، فَسَدِّدُوا وَقَارِبُوا وَأَبْشِرُوا',
      latin: "Innad-dīna yusrun, wa lan yusyāddad-dīna aḥadun illā ghalabah, fasaddidū wa qāribū wa absyirū.",
      terjemah: 'Sesungguhnya agama itu mudah. Tidaklah seseorang membebani diri secara berlebih-lebihan dalam agama melainkan ia akan dikalahkannya. Maka bersikap luruslah, mendekatlah (pada kebenaran), dan bergembiralah. (H.R. Al-Bukhari No. 39)',
      tafsirRingkas: 'Rasulullah Saw. melarang sikap ghuluw (ekstrem dan kaku) dalam beragama. Memanfaatkan rukhsah saat safar atau sakit merupakan cerminan pengamalan ajaran Islam yang proporsional, seimbang, dan lestari sepanjang hayat.',
      audioUrl: undefined
    }
  ],
  rukhsahEmpatIbadah: [
    {
      id: 'rukhsah-shalat',
      namaIbadah: 'Shalat',
      iconName: 'Compass',
      tagline: 'Keringanan Meringkas, Menggabungkan, dan Mengubah Cara Gerakan',
      hukumDasar: 'Salat 5 waktu wajib dikerjakan pada waktunya masing-masing, berdiri menghadap kiblat, dan bersuci dengan air mutlak (\'Azimah).',
      bentukRukhsah: [
        'Salat Jamak: Menggabungkan dua salat fardu dalam satu waktu (Zuhur dengan Asar, Maghrib dengan Isya). Terbagi menjadi Jamak Taqdim (di waktu awal) dan Jamak Ta\'khir (di waktu akhir).',
        'Salat Qashar: Meringkas bilangan rakaat salat fardu yang 4 rakaat (Zuhur, Asar, Isya) menjadi 2 rakaat. Catatan: Subuh dan Maghrib tidak boleh diqashar.',
        'Salat Jamak Qashar: Menggabungkan sekaligus meringkas salat (misal Zuhur 2 rakaat + Asar 2 rakaat dikerjakan berturut-turut).',
        'Salat Orang Sakit: Boleh dikerjakan sambil duduk; jika tidak sanggup boleh berbaring miring menghadap kiblat; jika tidak sanggup boleh terlentang; atau dengan isyarat kelopak mata/hati.',
        'Salat Khauf: Tata cara khusus salat berjamaah bergantian saat berada di medan pertempuran atau menghadapi bahaya musuh.',
        'Salat di Kendaraan: Boleh salat sunnah di atas kendaraan menghadap arah kendaraan melaju; salat fardu boleh di kendaraan jika tidak mungkin turun dan waktu akan habis (hurmatil waqti).'
      ],
      syaratSah: [
        'Jarak perjalanan (safar) minimal mencapai 2 marhalah (sekitar 81–89 km)',
        'Perjalanan bukan untuk tujuan maksiat (misal untuk silaturahmi, dinas, belajar, rekreasi mubah)',
        'Niat jamak/qashar dilakukan saat takbiratul ihram',
        'Muwalat (berturut-turut antara salat pertama dan kedua tanpa jeda lama untuk jamak)',
        'Tertib (mengerjakan salat pertama dulu baru salat kedua pada jamak taqdim)'
      ],
      siapaYangBoleh: [
        'Musafir yang menempuh perjalanan jauh minimal 81–89 km',
        'Orang yang sakit fisik sehingga tidak mampu berdiri atau terkena air',
        'Pasukan yang sedang menjaga keamanan di medan bahaya (salat khauf)',
        'Jamaah yang terhalang hujan lebat dan banjir bandang di jalan menuju masjid'
      ],
      dalilRujukan: 'Q.S. An-Nisa\': 101, H.R. Muslim tentang jamak qashar Nabi di Tabuk.',
      detailPenerapan: 'Salat tidak pernah gugur kewajibannya selama akal manusia masih berfungsi sehat. Jika air tidak ada, ganti dengan tayamum; jika tidak bisa berdiri, duduklah; jika tidak bisa duduk, berbaringlah.'
    },
    {
      id: 'rukhsah-puasa',
      namaIbadah: 'Puasa',
      iconName: 'Moon',
      tagline: 'Keringanan Berbuka Puasa Ramadhan Diganti Qadha atau Membayar Fidyah',
      hukumDasar: 'Setiap muslim mukalaf yang baligh dan berakal wajib berpuasa sebulan penuh di bulan Ramadhan sejak terbit fajar hingga terbenam matahari (\'Azimah).',
      bentukRukhsah: [
        'Boleh Berbuka dan Mengganti Puasa (Wajib Qadha): Boleh tidak berpuasa pada hari Ramadhan, namun wajib menggantinya (qadha) sebanyak hari yang ditinggalkan di luar bulan Ramadhan.',
        'Boleh Berbuka dan Membayar Fidyah (Tanpa Qadha): Bagi yang tidak sanggup berpuasa secara permanen karena usia lanjut atau sakit menahun tanpa harapan sembuh. Fidyah berupa makanan pokok 1 mud (sekitar 675 gram atau 0,7 kg beras) per hari untuk fakir miskin.',
        'Wajib Qadha Sekaligus Membayar Fidyah: Menurut mazhab Syafi\'i, berlaku bagi ibu hamil atau menyusui yang membatalkan puasa semata-mata karena mengkhawatirkan keselamatan bayinya.',
        'Keringanan Batal Karena Lupa: Orang yang makan/minum karena benar-benar lupa tidak batal puasanya dan wajib melanjutkan puasanya tanpa qadha.'
      ],
      syaratSah: [
        'Safar yang mubah dengan jarak minimal 81–89 km dan telah keluar dari batas desanya sebelum fajar',
        'Penyakit yang membahayakan jika berpuasa berdasarkan saran dokter terpercaya',
        'Ketidakmampuan fisik permanen yang diverifikasi secara medis untuk pembayaran fidyah'
      ],
      siapaYangBoleh: [
        'Musafir yang sedang dalam perjalanan jauh',
        'Orang sakit yang butuh minum obat atau kondisinya melemah',
        'Orang tua renta yang sudah pikun atau tidak memiliki tenaga fisik',
        'Ibu hamil dan ibu yang sedang menyusui bayinya',
        'Pekerja berat yang terancam keselamatan nyawanya jika memaksakan puasa dan tidak memiliki pekerjaan lain'
      ],
      dalilRujukan: 'Q.S. Al-Baqarah (2): 184 & 185 ("Fa man kāna minkum marīdhan au \'alā safarin fa \'iddatum min ayyāmin ukhar").',
      detailPenerapan: 'Islam mengutamakan perlindungan jiwa (hifzhun nafs). Memaksakan diri berpuasa hingga sekarat atau pingsan bukanlah ibadah yang diridhai, melainkan perbuatan tercela yang dilarang agama.'
    },
    {
      id: 'rukhsah-zakat',
      namaIbadah: 'Zakat',
      iconName: 'Coins',
      tagline: 'Keringanan Mempercepat Pembayaran (Ta\'jil) dan Penggantian Wujud Zakat',
      hukumDasar: 'Zakat mal wajib dibayarkan ketika telah mencapai nisab (batas minimal harta) dan telah berlalu haul (satu tahun penuh kepemilikan) sebanyak 2,5% (\'Azimah).',
      bentukRukhsah: [
        'Ta\'jil az-Zakat (Mempercepat Bayar Zakat Sebelum Genap 1 Haul): Boleh membayarkan zakat mal beberapa bulan lebih awal sebelum genap setahun kepemilikan apabila terjadi kondisi darurat, seperti bencana alam atau krisis kemanusiaan kaum dhuafa.',
        'Zakat Fitrah dengan Nilai Uang (Qimah): Menurut Mazhab Hanafi (difatwakan juga oleh MUI dan BAZNAS), boleh membayarkan zakat fitrah dengan uang tunai senilai 2,5 kg / 3,5 liter beras untuk kemudahan dan fleksibilitas mustahiq membeli kebutuhan pokok.',
        'Pembayaran Zakat Fitrah Sejak Awal Ramadhan: Keringanan waktu pembayaran zakat fitrah yang asalnya sebelum salat Idul Fitri, boleh dimajukan sejak tanggal 1 Ramadhan.',
        'Gugurnya Kewajiban Zakat Jika Harta Rusak/Hilang: Jika harta rusak atau dicuri tanpa kelalaian pemilik sebelum sempat dizakati, kewajiban zakatnya gugur.'
      ],
      syaratSah: [
        'Harta pokok sudah mencapai nisab saat disegerakan pembayarannya',
        'Penerima zakat (mustahiq) berhak menerima dan memenuhi 8 asnaf',
        'Niat zakat saat menyerahkan harta'
      ],
      siapaYangBoleh: [
        'Muzakki yang ingin segera membantu saudaranya yang terkena musibah bencana',
        'Masyarakat modern perkotaan yang membayar zakat fitrah dengan transfer bank atau uang tunai',
        'Amil zakat yang mengelola logistik kebutuhan pangan fakir miskin'
      ],
      dalilRujukan: 'Hadits riwayat Abu Dawud & At-Tirmidzi bahwasanya paman Nabi, Abbas r.a., meminta izin menyegerakan zakatnya sebelum setahun dan Nabi mengizinkannya.',
      detailPenerapan: 'Rukhsah dalam zakat menunjukkan keluwesan ekonomi syariah agar bantuan dana sosial dapat segera mengentaskan kemiskinan dan kelaparan tanpa terhambat birokrasi waktu haul.'
    },
    {
      id: 'rukhsah-haji',
      namaIbadah: 'Haji',
      iconName: 'Globe',
      tagline: 'Keringanan Badal Haji, Dam Pengganti Amalan, dan Tawaf Menggunakan Sarana Bantu',
      hukumDasar: 'Haji wajib dilaksanakan sekali seumur hidup bagi muslim yang istitha\'ah (mampu secara materi, fisik, dan keamanan jalur), dengan menempuh rukun dan wajib haji secara mandiri (\'Azimah).',
      bentukRukhsah: [
        'Badal Haji (Haji Pengganti): Orang yang memiliki harta cukup namun sakit lumpuh permanen atau telah meninggal dunia sebelum sempat berhaji, boleh dihajikan oleh orang lain yang sudah pernah haji.',
        'Tawaf & Sa\'i dengan Kursi Roda atau Skuter Matik: Bagi jamaah lansia, lumpuh, atau patah tulang, dibolehkan tawaf dan sa\'i menggunakan alat bantu tanpa mengurangi pahala rukun haji.',
        'Membayar Dam (Denda Sembelihan/Puasa) Pengganti Wajib Haji: Jika terpaksa meninggalkan wajib haji (seperti tidak mabit di Muzdalifah/Mina karena sakit parah atau macet parah), ibadah hajinya tetap sah dengan membayar dam.',
        'Boleh Menjamak Salat di Arafah dan Muzdalifah: Jamaah haji disunnahkan menjamak qashar salat Zuhur-Asar di Arafah dan Maghrib-Isya di Muzdalifah.',
        'Tawaf Ifadhah Ditunda bagi Wanita Haid: Wanita yang sedang haid boleh menunda tawaf ifadhah sampai suci, atau meminum obat penunda haid atas anjuran dokter.'
      ],
      syaratSah: [
        'Orang yang membadalkan haji sudah menunaikan ibadah haji untuk dirinya sendiri',
        'Alasan ketidakmampuan fisik bersifat permanen (bukan sakit sementara yang bisa sembuh)',
        'Membayar dam sesuai ketentuan syariat'
      ],
      siapaYangBoleh: [
        'Jamaah haji lansia, difabel, atau yang memiliki keterbatasan fisik',
        'Keluarga ahli waris yang menghajikan orang tuanya yang telah wafat',
        'Jamaah wanita yang mengalami siklus haid di tanah suci'
      ],
      dalilRujukan: 'Hadits Shahih riwayat Al-Bukhari tentang wanita dari Khasy\'am yang menanyakan ayahnya yang sudah sangat tua renta tidak mampu duduk di atas unta, dan Nabi mengizinkannya menghajikan ayahnya.',
      detailPenerapan: 'Puncak rukhsah dalam haji menegaskan bahwa rukun Islam ke-5 ini dibangun di atas pondasi istitha\'ah (kesanggupan), sehingga tidak ada celah bagi siapa pun untuk merasa terzalimi.'
    }
  ],
  panduanPraktik: [
    {
      id: 'praktik-jamak-qashar',
      judulPraktik: 'Praktik Salat Jamak Taqdim & Jamak Ta\'khir Qashar',
      kategori: 'Salat Jamak & Qashar',
      syaratKetentuan: [
        'Perjalanan safar menempuh jarak minimal 81–89 km',
        'Salat yang bisa dijamak: Zuhur dengan Asar, Maghrib dengan Isya (Subuh tidak bisa dijamak)',
        'Salat yang bisa diqashar: Zuhur (2 rakaat), Asar (2 rakaat), Isya (2 rakaat)',
        'Maghrib tetap 3 rakaat dan Subuh tetap 2 rakaat (tidak boleh diqashar)',
        'Antara salat pertama dan kedua tidak boleh diselingi salat sunnah atau obrolan panjang'
      ],
      langkahPraktik: [
        {
          tahap: 1,
          instruksi: 'Berwudu secara sempurna (atau bertayamum jika ketiadaan air di jalan). Berdiri menghadap kiblat dengan tenang.',
          catatanPenting: 'Pastikan sudah berniat safar mubah sebelum keluar dari batas kota/desa.'
        },
        {
          tahap: 2,
          instruksi: 'Lafalkan niat salat pertama (misal: Salat Zuhur Jamak Taqdim di-qashar 2 rakaat).',
          bacaanNiatAtauDoa: {
            arab: 'أُصَلِّي فَرْضَ الظُّهْرِ رَكْعَتَيْنِ قَصْرًا مَجْمُوْعًا إِلَيْهِ الْعَصْرُ جَمْعَ تَقْدِيْمٍ لِلّٰهِ تَعَالَى',
            latin: "Ushallī fardhadh-dhuhri rak'ataini qashran majmū'an ilaihil-'ashru jam'a taqdīmin lillāhi ta'ālā.",
            arti: 'Saya berniat salat fardu Zuhur dua rakaat qashar digabungkan dengan Asar jamak taqdim karena Allah Ta\'ala.'
          },
          catatanPenting: 'Niat wajib dihadirkan di dalam hati saat mengucapkan takbiratul ihram (Allahu Akbar).'
        },
        {
          tahap: 3,
          instruksi: 'Kerjakan salat Zuhur sebanyak 2 rakaat hingga tasyahud akhir dan salam ke kanan dan ke kiri.',
          catatanPenting: 'Setelah salam, disunnahkan iqamah kembali tanpa diselingi dzikir panjang atau salat sunnah.'
        },
        {
          tahap: 4,
          instruksi: 'Segera berdiri kembali untuk mengerjakan salat kedua (Salat Asar 2 rakaat).',
          bacaanNiatAtauDoa: {
            arab: 'أُصَلِّي فَرْضَ الْعَصْرِ رَكْعَتَيْنِ قَصْرًا مَجْمُوْعًا إِلَى الظُّهْرِ جَمْعَ تَقْدِيْمٍ لِلّٰهِ تَعَالَى',
            latin: "Ushallī fardhal-'ashri rak'ataini qashran majmū'an iladh-dhuhri jam'a taqdīmin lillāhi ta'ālā.",
            arti: 'Saya berniat salat fardu Asar dua rakaat qashar digabungkan dengan Zuhur jamak taqdim karena Allah Ta\'ala.'
          },
          catatanPenting: 'Kerjakan 2 rakaat hingga salam. Selesailah salat jamak taqdim qashar.'
        }
      ],
      tipsPelajar: 'Saat perjalanan karya wisata (study tour) atau mudik, koordinasikan dengan teman satu rombongan untuk salat berjamaah jamak qashar di rest area agar menghemat waktu dan tetap meraih pahala 27 derajat.'
    },
    {
      id: 'praktik-tayamum',
      judulPraktik: 'Tata Cara Bersuci dengan Tayamum',
      kategori: 'Tayamum Pengganti Wudu/Mandi',
      syaratKetentuan: [
        'Sudah masuk waktu salat fardu yang akan dikerjakan',
        'Telah berusaha mencari air namun tidak menemukan air mutlak yang cukup',
        'Atau ada air namun membahayakan kesehatan (luka bakar, sakit parah) atas anjuran medis',
        'Menggunakan debu yang suci, murni, dan kering (bukan tanah berlumpur atau bercampur najis)',
        'Satu kali tayamum hanya berlaku untuk satu kali salat fardu (namun boleh untuk beberapa salat sunnah)'
      ],
      langkahPraktik: [
        {
          tahap: 1,
          instruksi: 'Membaca Basmalah dan meletakkan kedua telapak tangan pada permukaan tanah/dinding yang berdebu suci seraya menepuknya perlahan untuk meratakan debu.',
          catatanPenting: 'Tiup perlahan kedua telapak tangan agar debu yang menempel tidak terlalu tebal.'
        },
        {
          tahap: 2,
          instruksi: 'Mengusapkan debu ke seluruh wajah secara merata dengan satu usapan seraya melafalkan niat tayamum di dalam hati.',
          bacaanNiatAtauDoa: {
            arab: 'نَوَيْتُ التَّيَمُّمَ لِاسْتِبَاحَةِ الصَّلَاةِ فَرْضًا لِلّٰهِ تَعَالَى',
            latin: "Nawaitut-tayammuma li-istibāḥatish-shalāti fardhan lillāhi ta'ālā.",
            arti: 'Saya berniat tayamum agar diperbolehkan menunaikan salat fardu karena Allah Ta\'ala.'
          },
          catatanPenting: 'Perhatikan bahwa niat tayamum berbunyi "li-istibaahatish-shalaah" (agar diperbolehkan salat), bukan "liraf\'il hadats" (mengangkat hadas), karena tayamum tidak mengangkat hadas melainkan hanya membolehkan salat.'
        },
        {
          tahap: 3,
          instruksi: 'Meletakkan kembali kedua telapak tangan ke tempat debu yang berbeda (tepukan kedua).',
          catatanPenting: 'Lepaskan cincin atau jam tangan agar usapan debu merata.'
        },
        {
          tahap: 4,
          instruksi: 'Mengusap tangan kanan mulai dari ujung jari hingga siku menggunakan tangan kiri, lalu mengusap tangan kiri hingga siku menggunakan tangan kanan.',
          catatanPenting: 'Cukup usapan pada wajah dan kedua belah tangan saja (tidak perlu mengusap kepala, telinga, atau kaki).'
        }
      ],
      tipsPelajar: 'Di dalam pesawat, kereta api, atau rumah sakit, debu suci bisa didapatkan dari permukaan dinding, jendela kaca, atau sandaran kursi yang bersih.'
    },
    {
      id: 'praktik-salat-sakit',
      judulPraktik: 'Tata Cara Salat bagi Orang yang Sakit',
      kategori: 'Salat Orang Sakit',
      syaratKetentuan: [
        'Diterapkan bagi yang tidak mampu berdiri secara tegak karena pusing parah, patah tulang, atau lemas',
        'Tetap wajib bersuci (wudu jika mampu, atau dibantu wudu, atau tayamum)',
        'Tetap wajib menghadap kiblat semaksimal kemampuan fisik',
        'Tidak boleh meninggalkan salat fardu selama akal masih sadar'
      ],
      langkahPraktik: [
        {
          tahap: 1,
          instruksi: 'Cara Duduk: Duduk iftirasy (seperti duduk tasyahud awal) atau duduk di atas kursi. Takbiratul ihram dan membaca surah seperti biasa.',
          catatanPenting: 'Rukuk dilakukan dengan membungkukkan badan sedikit ke depan.'
        },
        {
          tahap: 2,
          instruksi: 'Sujud dilakukan dengan membungkukkan badan lebih rendah daripada saat rukuk. Jika mampu meletakkan kening di lantai/bantal, maka letakkan kening.',
          catatanPenting: 'Gerakan sujud harus lebih condong ke bawah daripada rukuk sebagai pembeda.'
        },
        {
          tahap: 3,
          instruksi: 'Cara Berbaring Miring (Jika Tak Sanggup Duduk): Berbaring di atas lambung kanan dengan wajah dan dada menghadap ke arah kiblat. Rukuk dan sujud cukup dengan anggukan kepala.',
          catatanPenting: 'Posisi lambung kanan mirip seperti jenazah di liang lahad.'
        },
        {
          tahap: 4,
          instruksi: 'Cara Terlentang (Jika Tak Sanggup Miring): Berbaring terlentang dengan posisi kaki di arah kiblat dan kepala sedikit diganjal bantal agar wajah menghadap kiblat. Isyarat rukuk dan sujud menggunakan kedipan mata.',
          catatanPenting: 'Jika mata pun tak sanggup bergerak, salatlah dengan lintasan niat dan bacaan di dalam hati.'
        }
      ],
      tipsPelajar: 'Ingatlah prinsip emas: "Salatlah kamu sambil berdiri, jika tidak mampu maka duduklah, jika tidak mampu maka berbaringlah" (H.R. Al-Bukhari dari Imran bin Hushain r.a.).'
    }
  ],
  hikmahRukhsah: [
    {
      nomor: 1,
      judul: 'Bukti Nyata Kasih Sayang (Rahmat) dan Kemurahan Allah Swt.',
      deskripsi: 'Allah Swt. tidak menghendaki kesulitan sedikit pun bagi hamba-Nya. Rukhsah adalah anugerah sedekah Ilahi agar ibadah menjadi nikmat spiritual yang menyejukkan hati, bukan beban siksaan fisik yang memberatkan.',
      dampakSpiritual: 'Menumbuhkan rasa cinta (*mahabbah*) yang mendalam kepada Allah Swt. yang senantiasa memperhatikan keterbatasan fisik manusia.',
      refleksiPelajar: 'Menyadari bahwa Allah itu Maha Pemurah, sehingga kita tidak boleh berprasangka buruk ketika tertimpa ujian sakit atau kelelahan di perjalanan.'
    },
    {
      nomor: 2,
      judul: 'Menghilangkan Alasan dan Rasa Malas untuk Meninggalkan Ibadah',
      deskripsi: 'Dengan adanya rukhsah, tidak ada lagi alasan bagi seorang muslim untuk meninggalkan salat lima waktu dengan dalih sedang sibuk bepergian, terjebak macet, atau sakit di rumah sakit.',
      dampakSpiritual: 'Menanamkan komitmen keistiqamahan ibadah tanpa henti dalam setiap fase dan kondisi kehidupan sampai ajal menjemput.',
      refleksiPelajar: 'Tidak menggampangkan meninggalkan salat saat piknik sekolah atau turnamen olahraga, karena fasilitas jamak qashar telah tersedia.'
    },
    {
      nomor: 3,
      judul: 'Membuktikan Fleksibilitas dan Kesempurnaan Syariat Islam Sepanjang Zaman',
      deskripsi: 'Islam relevan untuk setiap waktu dan tempat (*sholihun likulli zaman wa makan*). Aturan fikih rukhsah dapat diadaptasikan pada era modern, seperti salat di pesawat terbang supersonik atau bayar zakat lewat smartphone.',
      dampakSpiritual: 'Menumbuhkan kebanggaan beragama (*izzah bil Islam*) yang rasional, moderat (wasathiyah), dan humanis.',
      refleksiPelajar: 'Mampu bersikap bijak dan tidak ekstrem/kaku dalam beragama, menghargai perbedaan kondisi orang lain yang sedang tertimpa udzur syar\'i.'
    },
    {
      nomor: 4,
      judul: 'Melatih Kedisiplinan dan Sikap Tunduk pada Aturan Syariat',
      deskripsi: 'Mengambil rukhsah bukan berarti bertindak semaunya sendiri secara serampangan, melainkan harus tetap tunduk pada batasan syarat sah dan rukun yang telah digariskan syariat.',
      dampakSpiritual: 'Menjaga kemurnian ibadah dari bid\'ah atau hawa nafsu pemalas yang mencari-cari alasan tanpa dasar ilmu.',
      refleksiPelajar: 'Mempelajari fikih rukhsah secara teliti agar tidak salah mempraktikkan salat jamak atau tayamum.'
    },
    {
      nomor: 5,
      judul: 'Menghindarkan Manusia dari Bahaya Kebinasaan Fisik dan Mental',
      deskripsi: 'Prinsip perlindungan jiwa (*hifzhun nafs*) menuntut manusia menjaga keselamatan raga. Memaksa puasa hingga dehidrasi akut atau pingsan adalah dosa, dan rukhsah hadir menjadi benteng penyelamat nyawa.',
      dampakSpiritual: 'Mewujudkan keseimbangan harmonis antara hak Allah (ibadah) dan hak tubuh (kesehatan dan istirahat).',
      refleksiPelajar: 'Mengingatkan orang tua atau teman yang sakit parah agar tidak memaksakan diri puasa dan menggantinya dengan fidyah atau qadha.'
    }
  ],
  kuisHots: [
    {
      id: 'kuis-1',
      nomor: 1,
      kasus: 'SMP Bina Bangsa mengadakan kegiatan karya wisata dari Jakarta ke Yogyakarta dengan menempuh jarak sekitar 500 km menggunakan bus. Rombongan berangkat pukul 06.00 pagi. Pada pukul 12.30 siang, bus berhenti di rest area untuk istirahat dan makan siang.',
      pertanyaan: 'Manakah tata cara pelaksanaan salat yang paling afdal dan tepat sesuai sunnah Rasulullah Saw. bagi para siswa muslim?',
      pilihan: [
        'Menunda salat Zuhur dan Asar sampai tiba di hotel Yogyakarta pada malam hari tanpa menjamak',
        'Melaksanakan salat Zuhur 2 rakaat dan Asar 2 rakaat dengan Jamak Taqdim Qashar secara berturut-turut di rest area',
        'Melaksanakan salat Zuhur 4 rakaat saja, sedangkan salat Asar dikerjakan di dalam bus sambil duduk menghadap kursi depan',
        'Tidak perlu salat karena dalam perjalanan karya wisata seluruh kewajiban ibadah otomatis dimaafkan'
      ],
      kunciJawaban: 1,
      pembahasan: 'Perjalanan menempuh jarak 500 km jauh melampaui batas minimal safar (81–89 km). Pada waktu Zuhur di rest area, para siswa sangat disunnahkan mengambil rukhsah Jamak Taqdim Qashar, yaitu mengerjakan Zuhur 2 rakaat kemudian langsung disusul Asar 2 rakaat.'
    },
    {
      id: 'kuis-2',
      nomor: 2,
      kasus: 'Pak Rahmat menderita sakit komplikasi ginjal dan jantung stadium akhir di usia 75 tahun. Berdasarkan diagnosis tim dokter spesialis, fisik Pak Rahmat tidak akan mampu lagi berpuasa Ramadhan seumur hidupnya karena harus meminum obat rutin setiap 4 jam sekali.',
      pertanyaan: 'Berdasarkan ketentuan fikih rukhsah ibadah puasa, kewajiban syariat yang harus dipenuhi oleh Pak Rahmat adalah:',
      pilihan: [
        'Wajib berpuasa setengah hari saja dari fajar hingga waktu zuhur',
        'Wajib mengqadha puasa di bulan Syawal dengan bantuan perawat',
        'Tidak wajib berpuasa dan tidak wajib qadha, melainkan wajib membayar fidyah 1 mud bahan makanan pokok untuk setiap hari puasa yang ditinggalkan kepada fakir miskin',
        'Dihukum berdosa besar karena membatalkan rukun Islam yang ketiga'
      ],
      kunciJawaban: 2,
      pembahasan: 'Bagi orang tua renta atau penderita sakit menahun yang secara medis tidak memiliki harapan sembuh untuk berpuasa, syariat memberikan rukhsah berupa gugurnya kewajiban puasa dan qadha, digantikan dengan kewajiban membayar fidyah (Q.S. Al-Baqarah: 184) sebesar 1 mud (± 0,7 kg beras) per hari kepada fakir miskin.'
    },
    {
      id: 'kuis-3',
      nomor: 3,
      kasus: 'Hasan sedang sakit demam berdarah dan dirawat di rumah sakit dengan jarum infus terpasang di lengan kanannya. Dokter melarang tangan kanannya terkena air agar tidak infeksi. Saat waktu salat Maghrib tiba, perawat membimbing Hasan untuk bersuci.',
      pertanyaan: 'Bagaimanakah tata cara bersuci yang sah dan benar sesuai rukhsah fikih bagi Hasan?',
      pilihan: [
        'Hasan tidak perlu bersuci dan langsung salat tanpa wudu dan tayamum',
        'Hasan menunggu sembuh beberapa hari ke depan, lalu mengqadha seluruh salatnya',
        'Hasan berwudu pada anggota tubuh yang sehat, lalu melakukan tayamum menggunakan debu suci pada bagian wajah dan tangan sebagai pengganti basuhan yang terluka',
        'Memaksakan mencuci luka infus dengan air dingin meskipun dokter melarangnya'
      ],
      kunciJawaban: 2,
      pembahasan: 'Dalam fikih thaharah orang sakit, anggota tubuh yang terpasang perban/infus atau luka yang dilarang dokter terkena air boleh diusap di atas perbannya atau dipadukan dengan tayamum debu suci untuk menyempurnakan hadas sesuai kaidah kemudahan (rukhsah).'
    },
    {
      id: 'kuis-4',
      nomor: 4,
      kasus: 'Perhatikan sabda Rasulullah Saw. berikut: "Sesungguhnya Allah menyukai apabila rukhsah-Nya diambil/diamalkan, sebagaimana Dia membenci apabila kemaksiatan kepada-Nya dilakukan" (H.R. Ahmad & Ibnu Hibban).',
      pertanyaan: 'Sikap seorang pelajar muslim yang paling mencerminkan penghayatan terhadap hadits tersebut adalah:',
      pilihan: [
        'Merasa gengsi mengambil salat jamak qashar saat safar karena menganggap dirinya masih muda dan kuat',
        'Menerima dengan rasa syukur dan gembira fasilitas rukhsah saat safar atau sakit sebagai bentuk adab dan ketundukan menerima sedekah kemurahan dari Allah Swt.',
        'Mencari-cari alasan perjalanan palsu agar setiap hari bisa salat 2 rakaat saja',
        'Hanya mau salat jika ada fasilitas rukhsah, dan malas salat normal pada kondisi biasa'
      ],
      kunciJawaban: 1,
      pembahasan: 'Rasulullah Saw. menegaskan bahwa rukhsah adalah "shadaqah" (hadiah sedekah kasih sayang) dari Allah. Menolak rukhsah saat membutuhkannya karena merasa kuat atau sombong justru menyelisihi sunnah. Pelajar mukmin menerimanya dengan penuh adab dan rasa syukur.'
    },
    {
      id: 'kuis-5',
      nomor: 5,
      kasus: 'Zaidan bersama ayahnya bepergian dari Bandung menuju Surabaya menaiki kereta api eksekutif. Jarak tempuh sekitar 700 km. Di dalam gerbong kereta yang nyaman ber-AC dan tersedia colokan listrik serta air mengalir di toilet, Zaidan bertanya: "Ayah, kereta kita sangat nyaman dan kita tidak lelah, apakah kita masih boleh mengqashar salat Zuhur dan Asar?"',
      pertanyaan: 'Jawaban yang paling tepat dan berlandaskan kaidah fikih dari sang Ayah adalah:',
      pilihan: [
        'Tidak boleh, karena rukhsah qashar hanya berlaku untuk orang yang naik unta di padang pasir yang kepanasan',
        'Boleh dan tetap disunnahkan, karena \'illat (sebab hukum) kebolehan jamak qashar adalah status perjalanan jauh (as-safar) yang mencapai jarak minimal, bukan semata-mata rasa capek atau lelah fisik',
        'Haram, karena di dalam kereta tersedia kursi empuk dan makanan lezat',
        'Boleh jika masinis kereta memberikan pengumuman izin melalui pengeras suara'
      ],
      kunciJawaban: 1,
      pembahasan: 'Dalam kaidah Ushul Fikih: "Al-hukmu yadūru ma\'a \'illatihi wujūdan wa \'adaman" (Hukum berputar bersama sebab logisnya). Sebab diperbolehkannya jamak qashar adalah kondisi bepergian jauh (as-safar syar\'i ≥ 81-89 km), bukan rasa lelah subjektif. Walaupun menggunakan pesawat atau kereta ber-AC mewah, rukhsah safar tetap berlaku dan sah.'
    }
  ]
};
