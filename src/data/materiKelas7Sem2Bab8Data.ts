export interface DalilSyukurItem {
  id: string;
  sumber: string;
  kategori: string;
  arabic: string;
  latin: string;
  terjemah: string;
  tafsirRingkas: string;
  audioUrl?: string;
}

export interface ContohPerilakuSyukurItem {
  id: string;
  dimensi: 'Syukur dengan Hati (Bi al-Qalbi)' | 'Syukur dengan Lisan (Bi al-Lisan)' | 'Syukur dengan Anggota Badan (Bi al-Arkan)';
  pengertianSingkat: string;
  dalilPendukung: string;
  contohDiSekolah: string;
  contohDiRumah: string;
  contohDiMedsos: string;
  tandaKeberhasilan: string;
}

export interface ManfaatSyukurItem {
  id: string;
  kategori: 'Spiritual & Mental' | 'Fisik & Kesehatan' | 'Sosial & Hubungan' | 'Rezeki & Keberkahan';
  judul: string;
  deskripsi: string;
  buktiDalilAtauSains: string;
  dampakPelajar: string;
}

export interface HikmahSyukurItem {
  id: string;
  nomor: number;
  judul: string;
  maknaLuhur: string;
  penerapanKonkret: string;
  akibatJikaKufurNikmat: string;
}

export interface SoalHotsSyukur {
  id: string;
  nomor: number;
  pertanyaan: string;
  kasus: string;
  pilihan: string[];
  kunciJawaban: number;
  pembahasan: string;
}

export interface InstrumenRefleksiSyukur {
  no: number;
  nikmat: string;
  kategori: string;
  pertanyaanMuhasabah: string;
  aksiNyataSyukur: string;
}

export interface MateriKelas7Sem2Bab8 {
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
  pengertianSyukur: {
    secaraBahasa: string;
    secaraIstilah: string;
    tingkatanSyukur: {
      tingkat: string;
      sebutan: string;
      deskripsi: string;
      dalil: string;
    }[];
    lawanKataSyukur: {
      istilah: string;
      arti: string;
      bahaya: string;
      jenisKufurNikmat: string[];
    };
  };
  dalilNaqli: DalilSyukurItem[];
  contohPerilakuSyukur: ContohPerilakuSyukurItem[];
  manfaatSyukur: ManfaatSyukurItem[];
  hikmahSyukur: HikmahSyukurItem[];
  instrumenSyukurHarian: InstrumenRefleksiSyukur[];
  kuisHots: SoalHotsSyukur[];
}

export const MATERI_KELAS_7_SEM_2_BAB_8: MateriKelas7Sem2Bab8 = {
  babNumber: 8,
  judulBab: 'Menerapkan Makna Bersyukur kepada Allah Swt.',
  subJudul: 'Menebar Kebaikan dan Mengagungkan Karunia Ilahi melalui Hati, Lisan, dan Amal Nyata Pelajar Muslim',
  elemenCp: 'Akhlak',
  fase: 'D (SMP/MTs)',
  semester: 'Semester 2',
  pengantar: {
    apersepsi: 'Pernahkah kamu merenungkan saat membuka mata di pagi hari, udara segar yang mengalir ke paru-parumu tanpa perlu membeli tabung oksigen, detak jantung yang berdenyut teratur, mata yang dapat melihat indahnya warna dunia, serta makanan hangat yang tersaji di atas meja? Seringkali manusia hanya mengeluhkan sedikit kekurangan—seperti smartphone yang belum keluaran terbaru atau nilai ujian yang belum maksimal—hingga melupakan ribuan nikmat Allah Swt. yang tiada tara. Bab ini mengajak kita menelusuri hakikat syukur yang sesungguhnya, membimbing hati agar selalu qana\'ah, membasahi lisan dengan tahmid, dan menggerakkan raga untuk mengabdi kepada Allah serta menebar manfaat bagi sesama.',
    tujuanPembelajaran: [
      'Menjelaskan pengertian syukur kepada Allah Swt. secara bahasa (syakara - syukran) dan istilah syariat Islam dengan tepat',
      'Menganalisis dalil naqli tentang perintah bersyukur, janji penambahan nikmat, dan peringatan bahaya kufur nikmat dari Al-Qur\'an dan Hadis',
      'Mengklasifikasikan 3 dimensi penerapan syukur (syukur bil qalbi, bil lisan, dan bil arkan) beserta contoh konkretnya di sekolah, rumah, dan pergaulan digital',
      'Mengidentifikasi ragam manfaat syukur ditinjau dari aspek spiritual, kesehatan mental, keharmonisan sosial, dan keberkahan rezeki',
      'Merefleksikan hikmah luhur bersyukur dengan mempraktikkan instrumen muhasabah nikmat harian dan menyelesaikan asesmen kuis HOTS'
    ]
  },
  pengertianSyukur: {
    secaraBahasa: 'Secara etimologi (bahasa Arab), kata syukur (الشُّكْرُ) berasal dari kata kerja syakara - yasykuru - syukran (شَكَرَ - يَشْكُرُ - شُكْرًا) yang bermakna: menampakkan, memuji, membuka, atau mengakui kebajikan seseorang. Kata dasarnya juga berakar dari ungkapan Arab "daabbah syakuur" (hewan yang gemuk dan sehat walau hanya diberi sedikit rumput), yang menggambarkan seseorang yang menampakkan limpahan berkah dan kebaikan atas karunia yang diterimanya.',
    secaraIstilah: 'Menurut istilah syariat Islam (terminologi), syukur adalah: "Pengakuan hamba atas segala kenikmatan yang dianugerahkan oleh Allah Swt. dengan ketundukan hati yang tulus, memuji dan menyebut-nyebut kebaikan-Nya melalui lisan, serta mendayagunakan seluruh potensi kenikmatan tersebut hanya untuk ketaatan dan keridhaan Allah Swt."',
    tingkatanSyukur: [
      {
        tingkat: 'Tingkat 1',
        sebutan: 'Syukur Orang Awam (Syukur \'ala an-Ni\'am)',
        deskripsi: 'Bersyukur ketika mendapatkan kesenangan, keberhasilan nilai ujian, kesehatan, rezeki materi, atau hadiah. Jika tertimpa musibah, mereka sering mengeluh.',
        dalil: 'Q.S. Luqman: 12'
      },
      {
        tingkat: 'Tingkat 2',
        sebutan: 'Syukur Orang Khusus (Syukur fi as-Sarra\' wa adh-Dharra\')',
        deskripsi: 'Mampu bersyukur dalam dua keadaan sekaligus: bersyukur saat lapang dan tetap bersyukur saat sempit/tertimpa ujian karena yakin ada hikmah dan ampunan dosa di balik musibah.',
        dalil: 'Hadits Shahih Muslim tentang keajaiban perkara seorang mukmin'
      },
      {
        tingkat: 'Tingkat 3 (Tertinggi)',
        sebutan: 'Syukur Kaum Khawasul Khawas (Syukur bil-Mun\'im)',
        deskripsi: 'Hatinya tidak lagi terpaku pada wujud kenikmatan fisik semata, melainkan selalu tersambung dan terpikat pada Dzat Yang Maha Memberi Nikmat (Allah Swt.).',
        dalil: 'Q.S. Saba\': 13 ("Sedikit sekali dari hamba-hamba-Ku yang bersyukur")'
      }
    ],
    lawanKataSyukur: {
      istilah: 'Kufur Nikmat (كُفْرُ النِّعْمَةِ)',
      arti: 'Mengingkari, menyembunyikan, menutupi, atau menggunakan karunia Allah Swt. untuk perbuatan maksiat dan melanggar hukum-Nya.',
      bahaya: 'Mengundang azab pedih dari Allah Swt., mencabut keberkahan hidup, menimbulkan rasa gelisah/hampa yang tiada henti, dan memicu sifat dengki/serakah.',
      jenisKufurNikmat: [
        'Kufur I\'tiqadi (Meyakini dalam hati bahwa rezeki semata-mata hasil kehebatan diri sendiri seperti Qarun)',
        'Kufur Lafzhi (Lisan yang selalu menggerutu, mengeluh, dan mencela makanan/rezeki pemberian Allah)',
        'Kufur Amali (Memanfaatkan tubuh sehat, kecerdasan akal, dan harta untuk perbuatan maksiat, menyontek, judi online, atau menindas sesama)'
      ]
    }
  },
  dalilNaqli: [
    {
      id: 'dalil-1',
      sumber: "Q.S. Ibrahim (14): Ayat 7",
      kategori: 'Janji Penambahan Nikmat & Peringatan Kufur',
      arabic: 'وَإِذْ تَأَذَّنَ رَبُّكُمْ لَئِن شَكَرْتُمْ لَأَزِيدَنَّكُمْ ۖ وَلَئِن كَفَرْتُمْ إِنَّ عَذَابِى لَشَدِيدٌ',
      latin: "Wa idz ta'adzdzana rabbukum la'in syakartum la'azīdannakum wa la'in kafartum inna 'adzābī lasyadīd.",
      terjemah: 'Dan (ingatlah) ketika Tuhanmu memaklumkan, "Sesungguhnya jika kamu bersyukur, niscaya Aku akan menambah (nikmat) kepadamu, tetapi jika kamu mengingkari (nikmat-Ku), maka pasti azab-Ku sangat berat."',
      tafsirRingkas: 'Ayat ini menjadi kaidah agung tentang hukum nikmat: Syukur adalah pengikat nikmat yang ada (qaid) sekaligus pemburu nikmat yang belum datang (shaid). Allah bersumpah dengan huruf lam taukid dan nun taukid (la-aziidannakum) bahwa orang yang bersyukur pasti akan dilipatgandakan nikmatnya, baik berupa tambahan materi, ketenangan jiwa, maupun keistiqamahan ibadah.',
      audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/014007.mp3'
    },
    {
      id: 'dalil-2',
      sumber: "Q.S. An-Nahl (16): Ayat 78",
      kategori: 'Tiga Modal Utama Bersyukur (Pendengaran, Penglihatan, Hati)',
      arabic: 'وَٱللَّهُ أَخْرَجَكُم مِّنۢ بُطُونِ أُمَّهَٰتِكُمْ لَا تَعْلَمُونَ شَيْـًٔا وَجَعَلَ لَكُمُ ٱلسَّمْعَ وَٱلْأَبْصَٰرَ وَٱلْأَفْـِٔدَةَ ۙ لَعَلَّكُمْ تَشْكُرُونَ',
      latin: "Wallāhu akhrajakum mim buṭūni ummahātikum lā ta'lamūna syai'aw wa ja'ala lakumus-sam'a wal-abṣāra wal-af'idata la'allakum tasykurūn.",
      terjemah: 'Dan Allah mengeluarkan kamu dari perut ibumu dalam keadaan tidak mengetahui sesuatu pun, dan Dia memberimu pendengaran, penglihatan, dan hati nurani, agar kamu bersyukur.',
      tafsirRingkas: 'Allah Swt. mengingatkan fase awal kehidupan manusia yang lemah tanpa pengetahuan apa pun. Kemudian Allah menganugerahkan tiga instrumen agung: as-sam\' (telinga untuk mendengar kebenaran), al-abshar (mata untuk meneliti ayat kauniyah semesta), dan al-af\'idah (akal & hati untuk memahami). Tujuan tertinggi dari panca indera ini adalah untuk bersyukur dengan belajar dan beribadah.',
      audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/016078.mp3'
    },
    {
      id: 'dalil-3',
      sumber: "Q.S. Luqman (31): Ayat 12",
      kategori: 'Kebaikan Syukur Kembali kepada Diri Sendiri',
      arabic: 'وَلَقَدْ ءَاتَيْنَا لُقْمَٰنَ ٱلْحِكْمَةَ أَنِ ٱشْكُرْ لِلَّهِ ۚ وَمَن يَشْكُرْ فَإِنَّمَا يَشْكُرُ لِنَفْسِهِۦ ۖ وَمَن كَفَرَ فَإِنَّ ٱللَّهَ غَنِىٌّ حَمِيدٌ',
      latin: "Wa laqad ātainā luqmānal-ḥikmata anisykur lillāh, wa may yasykur fa-innamā yasykuru linafsih, wa mang kafara fa-innallāha ganiyyun ḥamīd.",
      terjemah: 'Dan sungguh, telah Kami berikan hikmah kepada Luqman, yaitu, "Bersyukurlah kepada Allah! Dan barangsiapa bersyukur (kepada Allah), maka sesungguhnya dia bersyukur untuk dirinya sendiri; dan barangsiapa tidak bersyukur (kufur), maka sesungguhnya Allah Mahakaya, Maha Terpuji."',
      tafsirRingkas: 'Luqman dianugerahi al-hikmah (pemahaman mendalam dan ketepatan bersikap). Puncak hikmah adalah bersyukur kepada Allah. Kebaikan dari rasa syukur (seperti ketenteraman batin, kesehatan, dan tambahan rezeki) 100% kembali dinikmati oleh manusia itu sendiri. Allah sama sekali tidak butuh terhadap rasa syukur kita, karena Allah Maha Kaya tanpa ketaatan hamba-Nya.',
      audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/031012.mp3'
    },
    {
      id: 'dalil-4',
      sumber: "Q.S. Al-Baqarah (2): Ayat 152",
      kategori: 'Mengingat Allah dan Larangan Kufur Nikmat',
      arabic: 'فَٱذْكُرُونِىٓ أَذْكُرْكُمْ وَٱشْكُرُوا۟ لِى وَلَا تَكْفُرُونِ',
      latin: "Fadzkurūnī adzkurkum wasykurū lī wa lā takfurūn.",
      terjemah: 'Maka ingatlah kepada-Ku, niscaya Aku ingat kepadamu. Bersyukurlah kepada-Ku, dan janganlah kamu mengingkari (nikmat)-Ku.',
      tafsirRingkas: 'Perintah langsung yang berpasangan: Dzikir (mengingat Allah di setiap desah nafas) dan Syukur (mengakui dan membalas nikmat dengan ketaatan). Diiringi larangan tegas "wa la takfurun", yaitu jangan sampai menjadi hamba yang ingkar, tidak tahu berterima kasih, atau meremehkan karunia Sang Pencipta.',
      audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/002152.mp3'
    },
    {
      id: 'dalil-5',
      sumber: "Hadits Shahih Riwayat Al-Bukhari & Muslim",
      kategori: 'Teladan Rasulullah SAW: Menjadi Hamba yang Pandai Bersyukur',
      arabic: 'عَنْ عَائِشَةَ رَضِيَ اللَّهُ عَنْهَا أَنَّ نَبِيَّ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ كَانَ يَقُومُ مِنَ اللَّيْلِ حَتَّى تَتَفَطَّرَ قَدَمَاهُ، فَقَالَتْ عَائِشَةُ: لِمَ تَصْنَعُ هَذَا يَا رَسُولَ اللَّهِ وَقَدْ غَفَرَ اللَّهُ لَكَ مَا تَقَدَّمَ مِنْ ذَنْبِكَ وَمَا تَأَخَّرَ؟ قَالَ: أَفَلَا أُكُونُ عَبْدًا شَكُورًا',
      latin: "Qāla Rasūlullāhi ṣallallāhu 'alaihi wa sallam: A-falā akūnu 'abdan syakūrā.",
      terjemah: 'Dari Aisyah r.a. bahwasanya Rasulullah Saw. mengerjakan salat malam hingga kedua telapak kaki beliau bengkak-bengkak. Aisyah bertanya: "Mengapa engkau melakukan ini wahai Rasulullah, padahal Allah telah mengampuni dosa-dosamu yang telah lalu dan yang akan datang?" Beliau menjawab: "Tidakkah patut jika aku ingin menjadi hamba yang pandai bersyukur?" (H.R. Al-Bukhari No. 4837 & Muslim No. 2820)',
      tafsirRingkas: 'Hadis ini membuktikan bahwa motivasi tertinggi dalam ibadah bukanlah sekadar takut neraka atau mengharapkan surga, melainkan ungkapan cinta dan rasa syukur (syukur bil \'amal) yang tak bertepi kepada Allah Swt. yang telah melimpahkan karunia kenabian dan keselamatan.',
      audioUrl: undefined
    },
    {
      id: 'dalil-6',
      sumber: "Hadits Shahih Riwayat At-Tirmidzi",
      kategori: 'Berterima Kasih kepada Sesama Manusia sebagai Cermin Syukur',
      arabic: 'مَنْ لَمْ يَشْكُرِ النَّاسَ لَمْ يَشْكُرِ اللَّهَ',
      latin: "Man lam yasykurin-nāsa lam yasykurillāh.",
      terjemah: 'Barangsiapa yang tidak bersyukur (berterima kasih) kepada manusia, maka ia tidak bersyukur kepada Allah. (H.R. At-Tirmidzi No. 1954, dinilai Shahih)',
      tafsirRingkas: 'Islam mengajarkan kaitan erat antara hubungan vertikal (hablun minallah) dan horizontal (hablun minannas). Seseorang yang angkuh dan enggan berterima kasih kepada orang tua, guru, teman, atau orang yang menolongnya sejatinya belum benar-benar bersyukur kepada Allah, karena manusia adalah perantara turunnya nikmat tersebut.',
      audioUrl: undefined
    }
  ],
  contohPerilakuSyukur: [
    {
      id: 'contoh-hati',
      dimensi: 'Syukur dengan Hati (Bi al-Qalbi)',
      pengertianSingkat: 'Menyadari dan meyakini dengan tulus bahwa seluruh nikmat lahir maupun batin berasal semata-mata dari kemurahan rahmat Allah Swt., bukan semata karena kecerdasan atau kekuatan diri sendiri.',
      dalilPendukung: 'Q.S. An-Nahl (16): 53 ("Dan segala nikmat yang ada padamu, maka dari Allah-lah datangnya...")',
      contohDiSekolah: 'Tidak bersikap sombong atau jumawa ketika mendapat peringkat pertama di kelas, menyadari bahwa kepintaran memahami pelajaran adalah anugerah taufik dari Allah Swt.',
      contohDiRumah: 'Memiliki sifat qana\'ah (merasa cukup dan rela) dengan masakan dan kondisi ekonomi orang tua tanpa menuntut berlebihan atau merasa iri pada teman yang lebih kaya.',
      contohDiMedsos: 'Tidak merasa minder (insecure) saat melihat gaya hidup atau prestasi teman di feeds Instagram/TikTok, melainkan mendoakan keberkahan bagi mereka dan mensyukuri apa yang dimiliki.',
      tandaKeberhasilan: 'Hati terasa tenang, damai, bebas dari penyakit dengki (hasad), riya, dan takabur.'
    },
    {
      id: 'contoh-lisan',
      dimensi: 'Syukur dengan Lisan (Bi al-Lisan)',
      pengertianSingkat: 'Membasahi bibir dengan kalimat pujian tahmid (Alhamdulillah) serta menceritakan nikmat Allah (tahadduts bin ni\'mah) dalam bingkai mengajak orang lain ikut beribadah tanpa unsur kesombongan.',
      dalilPendukung: 'Q.S. Adh-Dhuha (93): 11 ("Dan terhadap nikmat Tuhanmu, hendaklah engkau nyatakan dengan bersyukur")',
      contohDiSekolah: 'Mengucapkan terima kasih secara tulus kepada bapak/ibu guru setelah selesai menerima pelajaran, serta memuji dan menyemangati teman yang berprestasi.',
      contohDiRumah: 'Selalu membaca doa sebelum dan sesudah makan, mencium tangan orang tua seraya berterima kasih atas nafkah dan kasih sayang mereka yang tulus.',
      contohDiMedsos: 'Memposting narasi positif yang memotivasi, menghindari kata-kata keluhan, umpatan, mencela makanan, atau memamerkan barang secara berlebihan (flexing) yang memicu riya.',
      tandaKeberhasilan: 'Lisannya terbiasa melafalkan Hamdalah, santun dalam berinteraksi, dan terjaga dari mengeluh.'
    },
    {
      id: 'contoh-badan',
      dimensi: 'Syukur dengan Anggota Badan (Bi al-Arkan)',
      pengertianSingkat: 'Mendayagunakan seluruh organ fisik (mata, telinga, tangan, kaki, kesehatan) dan fasilitas materi yang dimiliki untuk ketaatan kepada Allah serta memberi manfaat luas bagi sesama.',
      dalilPendukung: 'Q.S. Saba\' (34): 13 ("Bekerjalah wahai keluarga Dawud untuk bersyukur kepada Allah...")',
      contohDiSekolah: 'Menggunakan mata dan telinga untuk menyimak penjelasan guru secara fokus, memanfaatkan kepandaian untuk mengajari teman yang kesulitan belajar (tutor sebaya), serta menjaga kebersihan kelas.',
      contohDiRumah: 'Meringankan beban orang tua dengan rajin membersihkan rumah, mencuci piring sendiri, menyisihkan uang saku untuk infaq/sedekah subuh, dan giat salat berjamaah tepat waktu.',
      contohDiMedsos: 'Memanfaatkan kuota internet dan smartphone untuk mengakses kajian Islami, mendengarkan murottal Al-Qur\'an, membuat konten edukasi yang mencerahkan, bukan untuk bermain game berlebihan atau menonton maksiat.',
      tandaKeberhasilan: 'Fisik berenergi untuk ibadah, rajin sujud syukur saat mendengar kabar gembira, dan peduli sesama.'
    }
  ],
  manfaatSyukur: [
    {
      id: 'manfaat-1',
      kategori: 'Spiritual & Mental',
      judul: 'Terbebas dari Tekanan Jiwa (Stres & Anxiety) dan Menghadirkan Ketenangan Batin',
      deskripsi: 'Syukur mengalihkan fokus pikiran dari "apa yang belum kita miliki" menjadi "betapa melimpahnya apa yang sudah ada". Sikap ini memutus siklus perbandingan sosial negatif yang kerap memicu depresi pada usia remaja.',
      buktiDalilAtauSains: 'Riset Positive Psychology (Emmons & McCullough) membuktikan bahwa individu yang rutin mencatat rasa syukur setiap hari memiliki tingkat hormon kortisol (pemicu stres) yang lebih rendah hingga 23% dan kualitas tidur lebih nyenyak.',
      dampakPelajar: 'Pelajar menjadi pribadi yang optimis, tidak mudah putus asa saat menghadapi nilai ulangan jelek, dan memiliki ketangguhan mental (resiliensi).'
    },
    {
      id: 'manfaat-2',
      kategori: 'Rezeki & Keberkahan',
      judul: 'Mendatangkan Jaminan Pelipatgandaan Nikmat dan Keberkahan Hidup',
      deskripsi: 'Sesuai janji Allah dalam Q.S. Ibrahim ayat 7, syukur menjadi magnet yang menarik pertolongan Allah. Keberkahan (ziyadatul khair) membuat nikmat yang sedikit terasa mencukupi, barakah, dan bernilai pahala jariyah.',
      buktiDalilAtauSains: 'Kaidah ulama: "An-Ni\'matu idza syukirat qarrat, wa idza kufirat farrat" (Nikmat jika disyukuri akan menetap dan bertambah, namun jika dikufuri akan sirna dan lari).',
      dampakPelajar: 'Uang saku yang pas-pasan terasa berkah, ilmu yang dipelajari cepat dipahami dan melekat kuat di memori, serta selalu dipertemukan dengan lingkungan pertemanan yang positif.'
    },
    {
      id: 'manfaat-3',
      kategori: 'Fisik & Kesehatan',
      judul: 'Meningkatkan Daya Tahan Tubuh (Imunitas) dan Kebugaran Jasmani',
      deskripsi: 'Emosi positif dari rasa syukur memicu otak melepaskan hormon dopamin, serotonin, dan oksitosin. Hormon-hormon kebahagiaan ini memperbaiki sistem kardiovaskular, menormalkan tekanan darah, dan memperkuat sistem imun.',
      buktiDalilAtauSains: 'Studi American Journal of Cardiology menemukan bahwa orang yang memiliki rasa terima kasih dan apresiasi tinggi memiliki variabilitas detak jantung (HRV) yang jauh lebih stabil dan sehat.',
      dampakPelajar: 'Tubuh lebih bugar, tidak gampang terserang sakit kepala atau flu di masa-masa ujian sekolah, dan bangun tidur dengan kesegaran batin yang prima.'
    },
    {
      id: 'manfaat-4',
      kategori: 'Sosial & Hubungan',
      judul: 'Dicintai Sesama Teman, Guru, dan Mempererat Ukhuwah Islamiyah',
      deskripsi: 'Siswa yang pandai berterima kasih memancarkan aura kerendahan hati (tawadhu\'). Orang lain merasa dihargai keberadaannya, sehingga lingkungan sekolah menjadi suportif dan bebas dari aksi perundungan (bullying).',
      buktiDalilAtauSains: 'Hadis Nabi Saw.: "Tahāddū tahābbū" (Saling memberilah hadiah, niscaya kalian akan saling mencintai) yang disempurnakan dengan budaya saling mengucapkan terima kasih.',
      dampakPelajar: 'Mudah memiliki banyak sahabat sejati, disayangi oleh bapak/ibu guru, serta menjadi sosok pembawa damai di kelas.'
    }
  ],
  hikmahSyukur: [
    {
      nomor: 1,
      id: 'hikmah-1',
      judul: 'Meningkatkan Derajat Keimanan dan Kedekatan dengan Allah Swt.',
      maknaLuhur: 'Syukur adalah setengah dari iman (setengah lainnya adalah sabar). Orang yang bersyukur senantiasa menyadari kehadiran Allah (muraqabah) dalam setiap tarikan nafas dan kejadian hidupnya.',
      penerapanKonkret: 'Melakukan sujud syukur ketika mendengar pengumuman kelulusan atau saat terhindar dari marabahaya kecelakaan lalu lintas.',
      akibatJikaKufurNikmat: 'Hati menjadi keras (qaswatul qalb), sombong merasa berhasil karena kemampuan sendiri, dan jauh dari rahmat Allah.'
    },
    {
      nomor: 2,
      id: 'hikmah-2',
      judul: 'Membentengi Diri dari Tipu Daya Iblis dan Penyakit Hati',
      maknaLuhur: 'Iblis telah bersumpah di hadapan Allah dalam Q.S. Al-A\'raf ayat 17 bahwa target utamanya menggoda manusia adalah agar manusia tidak menjadi hamba yang bersyukur ("wa la tajidu aktsarahum syakirin").',
      penerapanKonkret: 'Meredam rasa iri hati ketika melihat teman sekelas memiliki sepatu atau tas baru, dengan mendoakan: "Allahumma baarik lahu" seraya menyukuri sepatu kita yang masih layak pakai.',
      akibatJikaKufurNikmat: 'Terjebak dalam perangkap hasad, dengki, tamak, yang menghanguskan seluruh pahala kebaikan laksana api melahap kayu bakar.'
    },
    {
      nomor: 3,
      id: 'hikmah-3',
      judul: 'Menghindarkan Diri dari Siksa dan Azab Allah yang Pedih',
      maknaLuhur: 'Allah menegaskan dalam Q.S. An-Nisa\' ayat 147: "Apa yang membuat Allah menyiksamu jika kamu bersyukur dan beriman? Dan Allah Maha Mensyukuri lagi Maha Mengetahui."',
      penerapanKonkret: 'Menjaga tubuh dari hal yang diharamkan (seperti rokok, miras, pornografi) sebagai bentuk perlindungan nikmat jasmani yang kelak akan dimintai pertanggungjawaban di akhirat.',
      akibatJikaKufurNikmat: 'Dicabutnya nikmat secara mendadak (istidraj: diberi kesenangan lalu diazab dalam keadaan lalai) sebagaimana kisah tragis Qarun yang ditelan bumi.'
    },
    {
      nomor: 4,
      id: 'hikmah-4',
      judul: 'Menciptakan Budaya Apresiasi dan Empati Sosial di Kalangan Pelajar',
      maknaLuhur: 'Syukur mendorong seorang muslim tidak hanya menikmati karunia sendirian, melainkan tergerak untuk berbagi (ta\'awun) kepada mereka yang serba kekurangan.',
      penerapanKonkret: 'Menyisihkan uang saku untuk jumat berkah, membelikan makan siang bagi teman yang lupa membawa bekal, dan menyapa petugas kebersihan sekolah dengan senyum serta ucapan terima kasih.',
      akibatJikaKufurNikmat: 'Tumbuhnya sikap apatis, individualis, kikir (bakhil), dan memperlebar jurang kecemburuan sosial antar siswa.'
    },
    {
      nomor: 5,
      id: 'hikmah-5',
      judul: 'Membentuk Karakter Generasi Muslim yang Tangguh, Qana\'ah, dan Bahagia',
      maknaLuhur: 'Hakikat kekayaan bukanlah banyaknya perhiasan atau materi dunia, melainkan kekayaan jiwa (ghina an-nafs) yang selalu merasa puas dan berterima kasih atas karunia Allah.',
      penerapanKonkret: 'Tetap tersenyum, berprasangka baik (husnuzan) kepada takdir Allah, dan segera bangkit belajar lebih giat ketika belum berhasil lolos dalam perlombaan sekolah.',
      akibatJikaKufurNikmat: 'Hidup selalu diliputi kecemasan, rasa kurang yang tiada akhir, serta kelelahan mental mengejar standar dunia yang fana.'
    }
  ],
  instrumenSyukurHarian: [
    {
      no: 1,
      kategori: 'Nikmat Iman & Islam',
      nikmat: 'Hidayah memeluk agama Islam dan dibimbing salat lima waktu',
      pertanyaanMuhasabah: 'Apakah hari ini salat lima waktuku sudah dikerjakan tepat waktu dan tidak lalai?',
      aksiNyataSyukur: 'Meningkatkan kekhusyukan salat dan membaca minimal 1 ruku\' ayat suci Al-Qur\'an setelah maghrib.'
    },
    {
      no: 2,
      kategori: 'Nikmat Panca Indera & Jasmani',
      nikmat: 'Mata yang bisa melihat, telinga yang mendengar, dan kaki yang bisa melangkah ke sekolah',
      pertanyaanMuhasabah: 'Apakah mataku hari ini digunakan menatap hal baik ataukah melihat konten yang tidak pantas di HP?',
      aksiNyataSyukur: 'Menjaga pandangan dari maksiat dan menggunakan tangan untuk menulis catatan pelajaran yang rapi.'
    },
    {
      no: 3,
      kategori: 'Nikmat Akal & Kesempatan Belajar',
      nikmat: 'Bisa bersekolah dengan nyaman, memiliki buku, dan dibimbing guru yang berilmu',
      pertanyaanMuhasabah: 'Apakah waktu luangku di kelas dimanfaatkan belajar atau malah mengobrol dan menyontek tugas teman?',
      aksiNyataSyukur: 'Mengerjakan tugas mandiri dengan jujur tanpa plagiasi serta membantu kawan yang belum paham materi.'
    },
    {
      no: 4,
      kategori: 'Nikmat Kasih Sayang Keluarga',
      nikmat: 'Masih memiliki orang tua yang bekerja keras menyiapkan sarapan dan membiayai pendidikan',
      pertanyaanMuhasabah: 'Sudahkah hari ini aku mengucapkan terima kasih dan mencium tangan kedua orang tuaku tanpa membentak?',
      aksiNyataSyukur: 'Mendoakan kedua orang tua setiap selesai salat dan membereskan tempat tidur sendiri tanpa disuruh.'
    },
    {
      no: 5,
      kategori: 'Nikmat Makanan & Rezeki',
      nikmat: 'Tersedianya makanan dan minuman halal yang mengenyangkan perut',
      pertanyaanMuhasabah: 'Apakah ada makanan yang kusisakan dan terbuang sia-sia (mubazir) hari ini?',
      aksiNyataSyukur: 'Menghabiskan makanan tanpa mencelanya, membaca doa sesudah makan, serta berbagi camilan dengan sahabat.'
    }
  ],
  kuisHots: [
    {
      id: 'kuis-1',
      nomor: 1,
      kasus: 'Ahmad adalah siswa kelas 7 SMP yang baru saja memenangkan lomba olimpiade sains tingkat kabupaten. Ketika teman-temannya memuji kecerdasannya, Ahmad menjawab di hadapan mereka: "Kemenangan ini murni karena saya belajar mati-matian 10 jam sehari tanpa bantuan siapa pun, wajar kalau saya juara."',
      pertanyaan: 'Ditinjau dari dimensi dan hakikat syukur kepada Allah Swt., sikap Ahmad tersebut mencerminkan:',
      pilihan: [
        'Syukur bil lisan karena menyampaikan fakta usaha belajarnya secara jujur',
        'Kufur nikmat secara i\'tiqadi dan lisan karena menafikan anugerah pertolongan Allah dan mirip dengan kesombongan Qarun',
        'Bentuk percaya diri yang positif agar teman-temannya termotivasi meniru jam belajarnya',
        'Syukur bil arkan karena telah membuktikannya dengan piala hasil kerja keras fisik'
      ],
      kunciJawaban: 1,
      pembahasan: 'Sikap Ahmad menafikan peran dan karunia Allah Swt. serta menyandarkan keberhasilan semata-mata pada kehebatan dirinya sendiri. Hal ini serupa dengan perilaku Qarun (Q.S. Al-Qashash: 78) yang berkata "Innama uutiituhu \'ala \'ilmin \'indi" yang merupakan bentuk kufur nikmat dalam hati dan ucapan.'
    },
    {
      id: 'kuis-2',
      nomor: 2,
      kasus: 'Perhatikan firman Allah Swt. dalam Q.S. Ibrahim ayat 7: "La\'in syakartum la\'aziidannakum wa la\'in kafartum inna \'adzaabii lasyadiid". Sumpah Allah dengan taukid ganda pada ayat ini memberikan jaminan pasti bagi orang yang bersyukur.',
      pertanyaan: 'Manakah bentuk penambahan nikmat yang paling hakiki dan mendalam bagi seorang pelajar yang bersyukur?',
      pilihan: [
        'Selalu bertambah uang jajan harian secara berlipat ganda setiap minggu',
        'Ditambahnya ketenangan batin, keistiqamahan ibadah, keberkahan ilmu, dan dijauhkan dari sifat tamak',
        'Terbebas dari seluruh tugas sekolah dan ujian tanpa perlu belajar keras',
        'Menjadi terkenal dan viral di media sosial dengan jumlah pengikut jutaan'
      ],
      kunciJawaban: 1,
      pembahasan: 'Penambahan nikmat (la-aziidannakum) menurut para mufassir tidak hanya bersifat materi kuantitatif, melainkan penambahan nikmat taufik untuk semakin taat, keberkahan ilmu yang bermanfaat, ketenteraman jiwa, serta terbukanya pintu rahmat Allah di dunia dan akhirat.'
    },
    {
      id: 'kuis-3',
      nomor: 3,
      kasus: 'Fatimah merasa minder dan sering bersedih setiap kali membuka media sosial. Ia melihat teman-temannya sering berlibur ke luar negeri dan membeli barang mewah, sedangkan orang tuanya hanya mampu memenuhi kebutuhan hidup sederhana. Akibatnya, Fatimah sering mengurung diri dan malas membantu ibunya di dapur.',
      pertanyaan: 'Langkah penerapan syukur yang paling tepat dan solutif dilakukan Fatimah untuk mengatasi kondisi kejiwaannya adalah:',
      pilihan: [
        'Menuntut orang tua meminjam uang di bank agar bisa berlibur dan membeli pakaian branded',
        'Menerapkan hadis Nabi untuk memandang orang yang berada di bawahnya dalam urusan dunia, serta memperbanyak dzikir tahmid dan qana\'ah',
        'Membuat postingan palsu di media sosial dengan meminjam barang mewah milik teman sekelasnya',
        'Menghapus seluruh akun media sosial dan berhenti berinteraksi dengan siapa pun di sekolah'
      ],
      kunciJawaban: 1,
      pembahasan: 'Rasulullah Saw. bersabda: "Lihatlah orang yang berada di bawah kalian (dalam hal dunia) dan jangan melihat orang yang berada di atas kalian, karena hal itu lebih pantas agar kalian tidak meremehkan nikmat Allah" (H.R. Muslim). Dengan pandangan ini, Fatimah akan menyadari betapa banyaknya orang yang serba kekurangan namun tetap bersyukur, sehingga hatinya dipenuhi rasa qana\'ah.'
    },
    {
      id: 'kuis-4',
      nomor: 4,
      kasus: 'Rasulullah Saw. salat malam hingga kedua kakinya bengkak. Ketika ditanya oleh Sayyidah Aisyah r.a. mengapa beribadah sedemikian rupa padahal dosa beliau telah diampuni, Rasulullah Saw. menjawab: "Afalaa akuunu \'abdan syakuuraa" (Tidakkah patut jika aku menjadi hamba yang pandai bersyukur?).',
      pertanyaan: 'Pelajaran moral dan hikmah terpenting dari riwayat hadis tersebut bagi kehidupan ibadah seorang pelajar adalah:',
      pilihan: [
        'Ibadah hanya perlu dilakukan oleh orang yang telah dijamin masuk surga',
        'Tingkatan tertinggi dalam beribadah adalah ketika digerakkan oleh rasa cinta dan terima kasih yang mendalam atas karunia Allah, bukan semata karena takut sanksi',
        'Seseorang baru boleh bersyukur jika kakinya sudah bengkak saat beribadah',
        'Ibadah salat malam hanya diwajibkan bagi Nabi Muhammad Saw. dan tidak dianjurkan bagi umatnya'
      ],
      kunciJawaban: 1,
      pembahasan: 'Kisah ini mengajarkan bahwa ibadah sejati adalah manifestasi rasa syukur (syukur bil \'amal). Rasulullah Saw. beribadah dengan penuh kerinduan dan kesyukuran, menjadi teladan bahwa seorang mukmin beramal bukan hanya karena takut hukuman, melainkan bukti terima kasih atas limpahan kasih sayang Ilahi.'
    },
    {
      id: 'kuis-5',
      nomor: 5,
      kasus: 'Sekolah mengadakan program bakti sosial Jumat Berkah. Bayu memiliki uang saku terbatas, namun ia memutuskan menyisihkan separuh uangnya untuk membeli nasi kotak bagi tukang becak di sekitar sekolah seraya tersenyum ramah.',
      pertanyaan: 'Perilaku Bayu tersebut merupakan perpaduan harmonis antara:',
      pilihan: [
        'Syukur bil lisan dengan kata-kata manis saja tanpa pengorbanan',
        'Syukur bil arkan (amal nyata) dan pengamalan hadits bahwa berterima kasih kepada manusia adalah cermin syukur kepada Allah Swt.',
        'Sikap riya agar dinilai dermawan oleh guru pembimbing OSIS',
        'Bentuk pemborosan harta yang bertentangan dengan prinsip hemat seorang pelajar'
      ],
      kunciJawaban: 1,
      pembahasan: 'Mendermakan rezeki untuk menolong orang yang membutuhkan merupakan wujud nyata syukur bil arkan (anggota badan/harta). Sekaligus merefleksikan sabda Nabi: "Man lam yasykurin-nāsa lam yasykurillāh" (Barangsiapa yang tidak berterima kasih/berbuat baik kepada sesama manusia, ia belum bersyukur kepada Allah).'
    }
  ]
};
