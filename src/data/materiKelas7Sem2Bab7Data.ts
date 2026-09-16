export interface MalaikatItem {
  id: string;
  nomor: number;
  nama: string;
  namaArab: string;
  sebutanLain?: string;
  tugasPokok: string;
  penjelasanTugas: string;
  dalilRujukan: {
    surahOrHadits: string;
    arabic: string;
    latin: string;
    terjemah: string;
  };
  penerapanPerilakuSiswa: {
    diSekolah: string;
    diRumah: string;
    diMediaSosial: string;
  };
  kategoriTugas: 'Wahyu & Rezeki' | 'Kematian & Hari Kiamat' | 'Alam Barzakh' | 'Pencatat Amal' | 'Penjaga Surga & Neraka';
}

export interface DalilMalaikatItem {
  id: string;
  kategori: 'Rukun Iman' | 'Ketaatan Mutlak' | 'Penciptaan dari Cahaya' | 'Pengawasan Amal' | 'Bentuk & Sayap';
  sumber: string;
  arabic: string;
  latin: string;
  terjemah: string;
  tafsirRingkas: string;
  audioUrl?: string;
}

export interface SifatMalaikatItem {
  id: string;
  judul: string;
  penjelasan: string;
  dalilTerkait: string;
  perbandinganDenganManusia: string;
}

export interface KomparasiMakhlukItem {
  aspek: string;
  malaikat: string;
  manusia: string;
  jinDanIblis: string;
}

export interface HikmahBerimanItem {
  id: string;
  judul: string;
  deskripsi: string;
  contohAplikasi: string;
  iconName: string;
}

export interface SoalKuisBab7 {
  id: string;
  pertanyaan: string;
  pilihan: string[];
  kunciJawaban: number;
  pembahasan: string;
  kategori: 'Pengertian & Hakikat' | 'Dalil Naqli' | 'Tugas 10 Malaikat' | 'Sifat Malaikat' | 'Hikmah & Mawas Diri';
}

export const MATERI_KELAS_7_SEM_2_BAB_7 = {
  babNumber: 7,
  babTitle: 'Mawas Diri dan Mengintrospeksi Diri dalam Menjalani Kehidupan: Meyakini dan Merefleksikan Iman kepada Malaikat Allah Swt.',
  semester: 'Semester 2',
  elemenCp: 'Akidah',
  alokasiWaktu: '3 Pekan (9 Jam Pelajaran)',
  bukuRef: 'Buku Siswa PAI dan Budi Pekerti SMP Kelas VII Kurikulum Merdeka (Kemendikbudristek RI)',

  pengantarBab: {
    tujuanPembelajaran: [
      'Menjelaskan pengertian iman kepada malaikat Allah Swt. dengan benar secara bahasa dan istilah syariat.',
      'Menunjukkan dalil naqli tentang keberadaan, sifat-sifat, dan ketaatan malaikat dari Al-Qur\'an dan Hadis sahih.',
      'Menyebutkan nama-nama 10 malaikat Allah Swt. yang wajib diketahui beserta tugas spesifik masing-masing.',
      'Mengidentifikasi sifat-sifat dan karakteristik malaikat serta membedakannya dengan manusia dan jin.',
      'Merefleksikan hikmah beriman kepada malaikat dengan menumbuhkan perilaku mawas diri (muraqabatullah) dan introspeksi diri (muhasabah) dalam kehidupan sehari-hari dan di era digital.'
    ],
    ringkasanApersepsi: 'Pernahkah kamu merasa ada yang selalu mengawasi gerak-gerikmu saat sendirian di kamar atau saat berselancar di dunia maya? Sebagai seorang muslim yang beriman, kita meyakini bahwa Allah Swt. mengutus malaikat-Nya untuk mencatat setiap detik ucapan, ketikan jari, dan niat di dalam hati kita. Iman kepada malaikat bukanlah sekadar hafalan nama dan tugas, melainkan kompas moral yang membimbing kita untuk selalu berbuat kebajikan, jujur saat ujian, dan berakhlak mulia di mana pun berada.'
  },

  // 1. PENGERTIAN IMAN KEPADA MALAIKAT
  pengertian: {
    secaraBahasa: 'Secara bahasa, kata "Malaikat" (مَلَائِكَة) merupakan bentuk jamak dari kata "Malak" (مَلَك) yang berakar dari kata "al-Alukah" (الْأَلُوكَة) yang bermakna risalah, pesan, atau perutusan. Ada pula ulama yang menyatakan berasal dari kata "La\'aka" (لَأَكَ) yang berarti mengutus. Oleh karena itu, malaikat secara harfiah diartikan sebagai utusan atau duta yang mengemban risalah dan titah dari Allah Swt.',
    secaraIstilah: 'Secara istilah syariat Islam, iman kepada malaikat adalah meyakini dengan sepenuh hati (tashdiq bil qalbi), diikrarkan dengan lisan (iqrar bil lisan), dan dibuktikan dengan pengamalan anggota badan (amal bil arkan) bahwa Allah Swt. memiliki makhluk ghaib yang mulia bernama malaikat, yang diciptakan dari cahaya (nur), tidak memiliki hawa nafsu, tidak pernah membangkang atau bermaksiat, serta senantiasa patuh menjalankan segala perintah yang ditugaskan Allah Swt. kepada mereka.',
    hukumBeriman: 'Fardhu \'Ain (wajib bagi setiap individu muslim yang mukallaf). Iman kepada malaikat merupakan Rukun Iman yang ke-2 dari 6 Rukun Iman. Mengingkari keberadaan malaikat atau salah satu malaikat yang telah termaktub secara jelas dalam Al-Qur\'an dan As-Sunnah dapat menggugurkan keimanan dan menyebabkan seseorang terjerumus ke dalam kekufuran.',
    asalPenciptaan: 'Malaikat diciptakan oleh Allah Swt. dari cahaya (nur), berbeda dengan bangsa jin yang diciptakan dari lidah api yang menyala (marijin min nar), dan manusia yang diciptakan dari saripati tanah (thin).',
    tigaDimensiIman: [
      {
        dimensi: 'Tashdiq bil Qalbi (Membenarkan dalam Hati)',
        makna: 'Meyakini tanpa ada keraguan sedikit pun bahwa malaikat benar-benar ada sebagai makhluk ghaib ciptaan Allah yang mulia dan senantiasa hadir melaksanakan tugas dari-Nya.'
      },
      {
        dimensi: 'Iqrar bil Lisan (Mengikrarkan dengan Ucapan)',
        makna: 'Mengakui secara lisan keberadaan 10 malaikat dan menghormati mereka dengan mendoakan salam ketika menyebut nama mereka (misalnya: Jibril \'alaihissalam).'
      },
      {
        dimensi: '\'Amal bil Arkan (Membuktikan dengan Amal Perbuatan)',
        makna: 'Memperlihatkan perilaku mawas diri, gemar berbuat kebajikan, menjauhi maksiat karena sadar selalu diawasi oleh malaikat pencatat amal, serta bersemangat menuntut ilmu.'
      }
    ]
  },

  // 2. DALIL NAQLI
  dalilNaqli: [
    {
      id: 'dalil-1',
      kategori: 'Rukun Iman',
      sumber: 'Q.S. Al-Baqarah (2) : Ayat 285',
      arabic: 'آمَنَ الرَّسُولُ بِمَا أُنزِلَ إِلَيْهِ مِن رَّبِّهِ وَالْمُؤْمِنُونَ ۚ كُلٌّ آمَنَ بِاللَّهِ وَمَلَائِكَتِهِ وَكُتُبِهِ وَرُسُلِهِ لَا نُفَرِّقُ بَيْنَ أَحَدٍ مِّن رُّسُلِهِ ۚ',
      latin: 'Āmanar-rasūlu bimā unzila ilaihi mir-rabbihī wal-mu\'minūn, kullun āmana billāhi wa malā\'ikatihī wa kutubihī wa rusulih, lā nufarriqu baina aḥadim-mir-rusulih.',
      terjemah: 'Rasul (Muhammad) beriman kepada apa yang diturunkan kepadanya (Al-Qur\'an) dari Tuhannya, demikian pula orang-orang yang beriman. Semua beriman kepada Allah, malaikat-malaikat-Nya, kitab-kitab-Nya, dan rasul-rasul-Nya. (Mereka berkata), "Kami tidak membeda-bedakan seorang pun dari rasul-rasul-Nya."',
      tafsirRingkas: 'Ayat ini menegaskan bahwa keimanan kepada malaikat adalah satu kesatuan utuh dengan keimanan kepada Allah, kitab-kitab, dan rasul-rasul-Nya. Seorang muslim tidak sah imannya jika ia beriman kepada Allah tetapi mengingkari keberadaan malaikat-Nya.',
      audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/285.mp3'
    },
    {
      id: 'dalil-2',
      kategori: 'Ketaatan Mutlak',
      sumber: 'Q.S. Al-Anbiya\' (21) : Ayat 19-20',
      arabic: 'وَلَهُ مَن فِي السَّمَاوَاتِ وَالْأَرْضِ ۚ وَمَنْ عِندَهُ لَا يَسْتَكْبِرُونَ عَنْ عِبَادَتِهِ وَلَا يَسْتَحْسِرُونَ ۝ يُسَبِّحُونَ اللَّيْلَ وَالنَّهَارَ لَا يَفْتُرُونَ',
      latin: 'Wa lahū man fis-samāwāti wal-arḍ, wa man \'indahū lā yastakbirūna \'an \'ibādatihī wa lā yastaḥsirūn. Yusabbiḥūnal-laila wan-nahāra lā yafturūn.',
      terjemah: 'Dan milik-Nya siapa yang di langit dan di bumi. Dan (malaikat-malaikat) yang di sisi-Nya, tidak mempunyai rasa angkuh untuk menyembah-Nya dan tidak (pula) merasa letih. Mereka selalu bertasbih malam dan siang tiada henti-hentinya.',
      tafsirRingkas: 'Malaikat senantiasa beribadah dan bertasbih memuji Allah tanpa rasa sombong dan tanpa rasa lelah atau bosan sedikit pun. Ketaatan malaikat bersifat mutlak dan abadi.',
      audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/2502.mp3'
    },
    {
      id: 'dalil-3',
      kategori: 'Ketaatan Mutlak',
      sumber: 'Q.S. At-Tahrim (66) : Ayat 6',
      arabic: 'لَّا يَعْصُونَ اللَّهَ مَا أَمَرَهُمْ وَيَفْعَلُونَ مَا يُؤْمَرُونَ',
      latin: 'Lā ya\'ṣūnallāha mā amarahum wa yaf\'alūna mā yu\'marūn.',
      terjemah: '(Malaikat-malaikat yang) tidak mendurhakai Allah terhadap apa yang Dia perintahkan kepada mereka dan selalu mengerjakan apa yang diperintahkan.',
      tafsirRingkas: 'Malaikat tidak mempunyai potensi untuk bermaksiat karena mereka diciptakan suci tanpa hawa nafsu duniawi. Setiap perintah Allah langsung mereka laksanakan dengan sempurna.',
      audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/5235.mp3'
    },
    {
      id: 'dalil-4',
      kategori: 'Pengawasan Amal',
      sumber: 'Q.S. Qaf (50) : Ayat 18',
      arabic: 'مَّا يَلْفِظُ مِن قَوْلٍ إِلَّا لَدَيْهِ رَقِيبٌ عَتِيدٌ',
      latin: 'Mā yalfiẓu min qaulin illā ladaihi raqībun \'atīd.',
      terjemah: 'Tidak ada suatu kata pun yang diucapkannya melainkan ada di dekatnya malaikat pengawas yang selalu hadir.',
      tafsirRingkas: 'Malaikat Raqib dan Atid senantiasa mengiringi setiap manusia, mencatat setiap patah kata, tulisan, dan perbuatan baik maupun buruk tanpa ada satu pun yang terlewatkan.',
      audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/4648.mp3'
    },
    {
      id: 'dalil-5',
      kategori: 'Bentuk & Sayap',
      sumber: 'Q.S. Fatir (35) : Ayat 1',
      arabic: 'الْحَمْدُ لِلَّهِ فَاطِرِ السَّمَاوَاتِ وَالْأَرْضِ جَاعِلِ الْمَلَائِكَةِ رُسُلًا أُولِي أَجْنِحَةٍ مَّثْنَىٰ وَثُلَاثَ وَرُبَاعَ ۚ يَزِيدُ فِي الْخَلْقِ مَا يَشَاءُ ۚ إِنَّ اللَّهَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ',
      latin: 'Al-ḥamdu lillāhi fāṭiris-samāwāti wal-arḍi jā\'ilil-malā\'ikati rusulan ulī ajniḥatim-maṡnā wa ṡulāṡa wa rubā\', yazīdu fil-khalqi mā yasyā\', innallāha \'alā kulli syai\'in qadīr.',
      terjemah: 'Segala puji bagi Allah Pencipta langit dan bumi, yang menjadikan malaikat sebagai utusan-utusan (untuk mengurus berbagai urusan) yang mempunyai sayap, masing-masing (ada yang) dua, tiga, dan empat. Allah menambahkan pada ciptaan-Nya apa yang Dia kehendaki. Sungguh, Allah Mahakuasa atas segala sesuatu.',
      tafsirRingkas: 'Ayat ini menjelaskan bahwa malaikat memiliki sayap nyata yang jumlahnya berbeda-beda sesuai derajat dan tugas kemuliaannya di sisi Allah.',
      audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/3661.mp3'
    },
    {
      id: 'dalil-6',
      kategori: 'Penciptaan dari Cahaya',
      sumber: 'Hadis Riwayat Muslim No. 2996 (dari Ummul Mukminin \'Aisyah r.a.)',
      arabic: 'خُلِقَتِ الْمَلَائِكَةُ مِنْ نُورٍ، وَخُلِقَ الْجَانُّ مِنْ مَارِجٍ مِنْ نَارٍ، وَخُلِقَ آدَمُ مِمَّا وُصِفَ لَكُمْ',
      latin: 'Khuliqatil-malā\'ikatu min nūr, wa khuliqal-jānnu mim-mārijim-min nār, wa khuliqa Ādamu mimmā wuṣifa lakum.',
      terjemah: 'Malaikat diciptakan dari cahaya, jin diciptakan dari nyala api tanpa asap, dan Adam (manusia) diciptakan dari apa yang telah diterangkan kepada kalian (yakni tanah).',
      tafsirRingkas: 'Hadits shahih ini merupakan dalil qath\'i yang membedakan substansi asal penciptaan antara malaikat (cahaya), bangsa jin (api), dan umat manusia (tanah).',
      audioUrl: undefined
    },
    {
      id: 'dalil-7',
      kategori: 'Rukun Iman',
      sumber: 'Hadis Jibril (H.R. Muslim No. 8 dari Sayyidina Umar bin Al-Khattab r.a.)',
      arabic: 'قَالَ: فَأَخْبِرْنِي عَنِ الْإِيمَانِ، قَالَ: «أَنْ تُؤْمِنَ بِاللَّهِ، وَمَلَائِكَتِهِ، وَكُتُبِهِ، وَرُسُلِهِ، وَالْيَوْمِ الْآخِرِ، وَتُؤْمِنَ بِالْقَدَرِ خَيْرِهِ وَشَرِّهِ»',
      latin: 'Qāla: fa\'akhbirnī \'anil-īmān. Qāla: "An tu\'mina billāhi, wa malā\'ikatihī, wa kutubihī, wa rusulihī, wal-yaumil-ākhiri, wa tu\'mina bil-qadari khairihī wa syarrih."',
      terjemah: 'Malaikat Jibril bertanya: "Beritahukan kepadaku tentang iman!" Rasulullah SAW menjawab: "Iman adalah engkau beriman kepada Allah, malaikat-malaikat-Nya, kitab-kitab-Nya, rasul-rasul-Nya, hari akhir, dan engkau beriman kepada takdir yang baik maupun yang buruk."',
      tafsirRingkas: 'Hadis yang sangat agung ini menempatkan iman kepada malaikat sebagai pilar kedua setelah beriman kepada Allah SWT dalam bangunan akidah Islam.',
      audioUrl: undefined
    }
  ],

  // 3. NAMA 10 MALAIKAT & 4. TUGAS MASING-MASING MALAIKAT
  sepuluhMalaikat: [
    {
      id: 'malaikat-jibril',
      nomor: 1,
      nama: 'Jibril',
      namaArab: 'جِبْرِيلُ',
      sebutanLain: 'Rūḥul Qudus (Roh Kudus / Suci) & Rūḥul Amīn (Roh yang Terpercaya)',
      tugasPokok: 'Menyampaikan wahyu dari Allah Swt. kepada para Nabi dan Rasul.',
      penjelasanTugas: 'Malaikat Jibril adalah pemimpin para malaikat (Sayyidul Mala\'ikah). Beliau bertugas membawa firman Allah dari Lauhul Mahfuzh dan menyampaikannya kepada para rasul, termasuk menurunkan Al-Qur\'an kepada Nabi Muhammad Saw. secara bertahap selama kurang lebih 23 tahun. Malaikat Jibril juga sering mendampingi Rasulullah Saw. dalam peristiwa penting seperti Isra Mi\'raj dan Perang Badar.',
      dalilRujukan: {
        surahOrHadits: 'Q.S. Al-Baqarah (2) : Ayat 97',
        arabic: 'قُلْ مَن كَانَ عَدُوًّا لِّجِبْرِيلَ فَإِنَّهُ نَزَّلَهُ عَلَىٰ قَلْبِكَ بِإِذْنِ اللَّهِ مُصَدِّقًا لِّمَا بَيْنَ يَدَيْهِ',
        latin: 'Qul man kāna \'aduwwal-li-Jibrīla fa\'innahū nazzalahū \'alā qalbika bi\'iznillāhi muṣaddiqal-limā baina yadaih.',
        terjemah: 'Katakanlah (Muhammad), "Barangsiapa menjadi musuh Jibril, maka ketahuilah bahwa dialah yang telah menurunkannya (Al-Qur\'an) ke dalam hatimu dengan izin Allah, membenarkan apa (kitab-kitab) yang terdahulu."'
      },
      penerapanPerilakuSiswa: {
        diSekolah: 'Semangat mempelajari Al-Qur\'an dan ilmu agama dengan rajin membaca, memahami arti, dan mengamalkannya di sekolah.',
        diRumah: 'Membiasakan tadarus Al-Qur\'an setiap selesai salat Maghrib dan menyimak nasihat kebaikan dari orang tua.',
        diMediaSosial: 'Menyebarkan ilmu bermanfaat, motivasi kebaikan, dan kutipan ayat Al-Qur\'an, serta menolak menyebarkan konten yang tidak jelas sumbernya.'
      },
      kategoriTugas: 'Wahyu & Rezeki'
    },
    {
      id: 'malaikat-mikail',
      nomor: 2,
      nama: 'Mikail',
      namaArab: 'مِيكَائِيلُ',
      sebutanLain: 'Pengatur Rezeki dan Alam Semesta atas Perintah Allah',
      tugasPokok: 'Membagi dan menurunkan rezeki kepada seluruh makhluk Allah di alam semesta.',
      penjelasanTugas: 'Malaikat Mikail bertugas mengatur urusan rezeki, termasuk menurunkan hujan dari langit, mengatur jalannya awan, menumbuhkan beraneka ragam tanam-tanaman dan buah-buahan, memberi makan hewan di darat dan di laut, serta mengatur keseimbangan ekosistem bumi dengan kehendak Allah Swt.',
      dalilRujukan: {
        surahOrHadits: 'Q.S. Al-Baqarah (2) : Ayat 98',
        arabic: 'مَن كَانَ عَدُوًّا لِّلَّهِ وَمَلَائِكَتِهِ وَرُسُلِهِ وَجِبْرِيلَ وَمِيكَالَ فَإِنَّ اللَّهَ عَدُوٌّ لِّلْكَافِرِينَ',
        latin: 'Man kāna \'aduwwal-lillāhi wa malā\'ikatihī wa rusulihī wa Jibrīla wa Mīkāla fa\'innallāha \'aduwwul-lil-kāfirīn.',
        terjemah: 'Barangsiapa menjadi musuh Allah, malaikat-malaikat-Nya, rasul-rasul-Nya, Jibril dan Mikail, maka sesungguhnya Allah musuh bagi orang-orang kafir.'
      },
      penerapanPerilakuSiswa: {
        diSekolah: 'Menyisihkan uang saku untuk infak kotak amal hari Jumat dan berbagi makanan atau alat tulis dengan teman yang membutuhkan.',
        diRumah: 'Mensyukuri makanan yang disediakan orang tua, tidak membuang-buang makanan (tabdzir), dan menyiram tanaman.',
        diMediaSosial: 'Mendukung gerakan sedekah online, menghindari sikap pamer (flexing) kekayaan, dan menghargai rezeki orang lain.'
      },
      kategoriTugas: 'Wahyu & Rezeki'
    },
    {
      id: 'malaikat-israfil',
      nomor: 3,
      nama: 'Israfil',
      namaArab: 'إِسْرَافِيلُ',
      sebutanLain: 'Penatap Arasy & Peniup Sangkakala (Ash-Shūr)',
      tugasPokok: 'Meniup sangkakala (trompet) pada saat datangnya hari kiamat dan hari kebangkitan.',
      penjelasanTugas: 'Malaikat Israfil selalu bersiap menatap Arasy Allah dengan meletakkan trompet sangkakala di bibirnya, menunggu titah Allah Swt. Tiupan pertama (Nafkhatus-Sha\'aq) menyebabkan kehancuran total seluruh alam semesta dan mematikan semua makhluk. Tiupan kedua (Nafkhatul-Ba\'ats) membangkitkan seluruh manusia dari alam kubur menuju padang Mahsyar untuk dihisab.',
      dalilRujukan: {
        surahOrHadits: 'Q.S. Az-Zumar (39) : Ayat 68',
        arabic: 'وَنُفِخَ فِي الصُّورِ فَصَعِقَ مَن فِي السَّمَاوَاتِ وَمَن فِي الْأَرْضِ إِلَّا مَن شَاءَ اللَّهُ ۖ ثُمَّ نُفِخَ فِيهِ أُخْرَىٰ فَإِذَا هُمْ قِيَامٌ يَنظُرُونَ',
        latin: 'Wa nufikha fiṣ-ṣūri faṣa\'iqa man fis-samāwāti wa man fil-arḍi illā man syā\'allāh, ṡumma nufikha fīhi ukhrā fa\'iżā hum qiyāmuy-yanẓurūn.',
        terjemah: 'Dan ditiuplah sangkakala, maka matilah siapa yang di langit dan di bumi kecuali siapa yang dikehendaki Allah. Kemudian ditiup sangkakala itu sekali lagi, maka tiba-tiba mereka bangun (dari kuburnya) menunggu (keputusan Allah).'
      },
      penerapanPerilakuSiswa: {
        diSekolah: 'Selalu disiplin waktu, taat pada bel tanda masuk kelas, dan mempersiapkan diri menghadapi ujian sekolah sebagai cerminan kesiapan menghadapi hisab.',
        diRumah: 'Melaksanakan salat lima waktu tepat pada waktunya dan tidak menunda-nunda tugas kebaikan.',
        diMediaSosial: 'Mengingatkan diri sendiri dan teman tentang kematian serta kehidupan akhirat, tidak larut dalam kesenangan duniawi yang sia-sia.'
      },
      kategoriTugas: 'Kematian & Hari Kiamat'
    },
    {
      id: 'malaikat-izrail',
      nomor: 4,
      nama: 'Izrail',
      namaArab: 'عِزْرَائِيلُ',
      sebutanLain: 'Malakul Maut (Malaikat Pencabut Nyawa)',
      tugasPokok: 'Mencabut nyawa seluruh makhluk bernyawa bila telah tiba ajal yang ditetapkan Allah Swt.',
      penjelasanTugas: 'Malaikat Izrail bertugas memisahkan ruh dari jasad manusia, jin, malaikat, dan hewan. Malaikat maut tidak pernah terlambat sedetik pun maupun mendahului ajal seseorang. Beliau datang mencabut nyawa orang beriman dengan lembut penuh kasih sayang laksana air mengalir dari mulut kendi, sedangkan bagi orang kafir dan pendurhaka dicabut dengan sangat keras dan menyakitkan.',
      dalilRujukan: {
        surahOrHadits: 'Q.S. As-Sajdah (32) : Ayat 11',
        arabic: 'قُلْ يَتَوَفَّاكُم مَّلَكُ الْمَوْتِ الَّذِي وُكِّلَ بِكُمْ ثُمَّ إِلَىٰ رَبِّكُمْ تُرْجَعُونَ',
        latin: 'Qul yatawaffākum-malakul-mautil-lażī wukkila bikum ṡumma ilā rabbikum turja\'ūn.',
        terjemah: 'Katakanlah, "Malaikat maut yang diserahi tugas untuk (mencabut nyawa)-mu akan mematikan kamu, kemudian kepada Tuhanmulah kamu akan dikembalikan."'
      },
      penerapanPerilakuSiswa: {
        diSekolah: 'Menghargai waktu belajar, tidak menyia-nyiakan masa muda dengan tawuran atau perundungan, dan segera meminta maaf jika berbuat salah.',
        diRumah: 'Berbakti kepada orang tua sebelum terlambat, memohon doa restu setiap hari, dan rutin mendoakan keselamatan keluarga.',
        diMediaSosial: 'Tidak menunda-nunda taubat, menjauhi konten maksiat yang bisa menjadi dosa jariyah bila ajal tiba sewaktu-waktu.'
      },
      kategoriTugas: 'Kematian & Hari Kiamat'
    },
    {
      id: 'malaikat-munkar',
      nomor: 5,
      nama: 'Munkar',
      namaArab: 'مُنْكَرٌ',
      sebutanLain: 'Penanya Alam Barzakh (Bersama Nakir)',
      tugasPokok: 'Menanyai dan menguji keimanan setiap ruh manusia yang berada di alam barzakh (alam kubur).',
      penjelasanTugas: 'Malaikat Munkar bersama Nakir mendatangi setiap jenazah manusia setelah dikuburkan dan para pengantarnya pulang. Mereka bertanya tentang prinsip tauhid: "Man Rabbuka?" (Siapa Tuhanmu?), "Ma Dinuka?" (Apa agamamu?), "Man Nabiyyuka?" (Siapa Nabimu?). Bagi orang beriman, Allah meneguhkan lisannya sehingga mampu menjawab dengan mantap, sedangkan orang munafik dan kafir akan gemetar bingung.',
      dalilRujukan: {
        surahOrHadits: 'Hadis Riwayat At-Tirmidzi No. 1071 (Hasan)',
        arabic: 'إِذَا قُبِرَ الْمَيِّتُ أَتَاهُ مَلَكَانِ أَسْوَدَانِ أَزْرَقَانِ، يُقَالُ لِأَحَدِهِمَا: الْمُنْكَرُ، وَلِلْآخَرِ: النَّكِيرُ',
        latin: 'Iżā qubiral-mayyitu atāhu malakāni aswadāni azraqān, yuqālu li\'aḥadihimā: al-munkaru, wa lil-\'ākhari: an-nakīr.',
        terjemah: 'Apabila mayit telah dikuburkan, datanglah dua malaikat yang hitam kebiru-biruan. Salah satunya bernama Munkar dan yang lainnya bernama Nakir.'
      },
      penerapanPerilakuSiswa: {
        diSekolah: 'Memperdalam akidah Islam agar keyakinan tertanam kokoh di dada, bukan sekadar hafalan lisan.',
        diRumah: 'Membiasakan zikir dan tadabbur bahwa alam kubur adalah persinggahan pertama menuju akhirat.',
        diMediaSosial: 'Membela kebenaran ajaran Islam, tidak minder mengakui identitas sebagai muslim yang taat di dunia maya.'
      },
      kategoriTugas: 'Alam Barzakh'
    },
    {
      id: 'malaikat-nakir',
      nomor: 6,
      nama: 'Nakir',
      namaArab: 'نَكِيرٌ',
      sebutanLain: 'Penguji Keimanan Ruh di Alam Kubur',
      tugasPokok: 'Menanyai dan mendampingi Malaikat Munkar dalam menguji ruh di alam barzakh.',
      penjelasanTugas: 'Malaikat Nakir adalah mitra Malaikat Munkar. Keduanya memiliki wujud yang sangat berwibawa dan menakutkan bagi para pendusta agama. Pertanyaan yang diajukan bukanlah ujian hafalan logika otak, melainkan jawaban yang keluar dari amal perbuatan dan kesungguhan iman selama hidup di dunia.',
      dalilRujukan: {
        surahOrHadits: 'Q.S. Ibrahim (14) : Ayat 27',
        arabic: 'يُثَبِّتُ اللَّهُ الَّذِينَ آمَنُوا بِالْقَوْلِ الثَّابِتِ فِي الْحَيَاةِ الدُّنْيَا وَفِي الْآخِرَةِ ۖ',
        latin: 'Yuṡabbitullāhul-lażīna āmanū bil-qauliṡ-ṡābiti fil-ḥayātid-dunyā wa fil-\'ākhirah.',
        terjemah: 'Allah meneguhkan (iman) orang-orang yang beriman dengan ucapan yang teguh (dalam kehidupan) di dunia dan di akhirat (yakni di alam kubur saat ditanya Munkar dan Nakir).'
      },
      penerapanPerilakuSiswa: {
        diSekolah: 'Jujur dalam berucap dan bersikap, tidak munafik di hadapan bapak/ibu guru dan kawan-kawan.',
        diRumah: 'Menjadikan Al-Qur\'an sebagai pedoman harian agar kelak menjadi penerang kubur.',
        diMediaSosial: 'Menghindari perilaku bermuka dua (falsafah munafik) di dunia maya.'
      },
      kategoriTugas: 'Alam Barzakh'
    },
    {
      id: 'malaikat-raqib',
      nomor: 7,
      nama: 'Raqib',
      namaArab: 'رَقِيبٌ',
      sebutanLain: 'Al-Kātibun (Malaikat Pencatat Amal Kebajikan di Sisi Kanan)',
      tugasPokok: 'Mengawasi dan mencatat seluruh perbuatan, ucapan, dan niat baik manusia secara cermat.',
      penjelasanTugas: 'Malaikat Raqib berada di sebelah kanan setiap manusia. Beliau dengan penuh kegembiraan mencatat setiap amal kebajikan, senyuman sedekah, salat yang didirikan, zikir yang dilantunkan, serta niat baik di dalam hati. Setiap satu kebaikan dicatat dengan kelipatan 10 hingga 700 kali lipat bahkan tak terhingga atas rahmat Allah Swt.',
      dalilRujukan: {
        surahOrHadits: 'Q.S. Al-Infitar (82) : Ayat 10-11',
        arabic: 'وَإِنَّ عَلَيْكُمْ لَحَافِظِينَ ۝ كِرَامًا كَاتِبِينَ ۝ يَعْلَمُونَ مَا تَفْعَلُونَ',
        latin: 'Wa inna \'alaikum laḥāfiẓīn. Kirāman kātibīn. Ya\'lamūna mā taf\'alūn.',
        terjemah: 'Dan sesungguhnya bagi kamu ada (malaikat-malaikat) yang mengawasi (pekerjaanmu), yang mulia (di sisi Allah) dan yang mencatat (perbuatanmu), mereka mengetahui apa yang kamu kerjakan.'
      },
      penerapanPerilakuSiswa: {
        diSekolah: 'Aktif menolong teman yang kesulitan memahami pelajaran, membersihkan kelas tanpa disuruh, dan bersikap sopan.',
        diRumah: 'Membantu pekerjaan ibu, menjaga adik dengan sabar, dan mengucap salam saat masuk rumah.',
        diMediaSosial: 'Menulis komentar yang sejuk, memberi semangat pada teman, dan mengunggah konten yang sarat faedah ilmu.'
      },
      kategoriTugas: 'Pencatat Amal'
    },
    {
      id: 'malaikat-atid',
      nomor: 8,
      nama: '\'Atid',
      namaArab: 'عَتِيدٌ',
      sebutanLain: 'Al-Kātibun (Malaikat Pencatat Amal Keburukan di Sisi Kiri)',
      tugasPokok: 'Mengawasi dan mencatat seluruh perbuatan tercela, dosa, dan ucapan buruk manusia.',
      penjelasanTugas: 'Malaikat \'Atid berada di sebelah kiri manusia. Beliau mencatat setiap perkataan kotor, ghibah, dusta, kecurangan, dan maksiat. Berdasarkan hadis riwayat Ath-Thabrani, malaikat di sisi kiri menunda pencatatan dosa selama beberapa saat (sekitar enam jam); jika hamba tersebut bertaubat dan memohon ampun, maka dosanya tidak ditulis.',
      dalilRujukan: {
        surahOrHadits: 'Q.S. Qaf (50) : Ayat 17-18',
        arabic: 'إِذْ يَتَلَقَّى الْمُتَلَقِّيَانِ عَنِ الْيَمِينِ وَعَنِ الشِّمَالِ قَعِيدٌ ۝ مَّا يَلْفِظُ مِن قَوْلٍ إِلَّا لَدَيْهِ رَقِيبٌ عَتِيدٌ',
        latin: 'Iż yatalaqqal-mutalaqqiyāni \'anil-yamīni wa \'anisy-syimāli qa\'īd. Mā yalfiẓu min qaulin illā ladaihi raqībun \'atīd.',
        terjemah: '(Ingatlah) ketika dua malaikat mencatat (perbuatannya), yang satu duduk di sebelah kanan dan yang lain di sebelah kiri. Tiada suatu kata pun yang diucapkannya melainkan ada di dekatnya malaikat pengawas yang selalu hadir.'
      },
      penerapanPerilakuSiswa: {
        diSekolah: 'Menolak menyontek saat ulangan, tidak mengejek atau mem-bully teman, dan tidak mengambil barang milik orang lain.',
        diRumah: 'Tidak membantah perkataan orang tua dengan nada keras dan tidak berbohong saat izin keluar rumah.',
        diMediaSosial: 'Menahan jempol dari menyebarkan gosip, fitnah, ujaran kebencian, dan segera menghapus postingan yang berbau maksiat.'
      },
      kategoriTugas: 'Pencatat Amal'
    },
    {
      id: 'malaikat-malik',
      nomor: 9,
      nama: 'Malik',
      namaArab: 'مَالِكٌ',
      sebutanLain: 'Pemimpin Malaikat Zabaniyah (Penjaga Pintu Neraka)',
      tugasPokok: 'Menjaga pintu neraka dan mengatur azab siksaan bagi para pendurhaka dan orang kafir.',
      penjelasanTugas: 'Malaikat Malik adalah malaikat yang sangat tegas, garang, kuat, dan tidak pernah tersenyum sejak neraka diciptakan. Beliau memimpin 19 malaikat Zabaniyah yang bertubuh raksasa dan perkasa, menjalankan titah Allah untuk menghukum penghuni neraka tanpa rasa belas kasihan kepada orang-orang yang ingkar.',
      dalilRujukan: {
        surahOrHadits: 'Q.S. Az-Zukhruf (43) : Ayat 77',
        arabic: 'وَنَادَوْا يَا مَالِكُ لِيَقْضِ عَلَيْنَا رَبُّكَ ۖ قَالَ إِنَّكُم مَّاكِثُونَ',
        latin: 'Wa nādau yā Māliku liyaqḍi \'alainā rabbuk, qāla innakum mākis̱ūn.',
        terjemah: 'Dan mereka berseru, "Wahai (Malaikat) Malik! Biarlah Tuhanmu mematikan kami saja." Dia menjawab, "Sungguh, kamu akan tetap tinggal (di neraka ini)!"'
      },
      penerapanPerilakuSiswa: {
        diSekolah: 'Takut melanggar tata tertib sekolah, menyadari bahwa setiap kejahatan akan ada konsekuensi balasannya.',
        diRumah: 'Berlindung kepada Allah dari siksa api neraka setiap selesai tasyahud akhir dalam salat.',
        diMediaSosial: 'Menjauhi pornografi, judi online, dan konten haram yang dapat menjerumuskan diri ke dalam murka Allah.'
      },
      kategoriTugas: 'Penjaga Surga & Neraka'
    },
    {
      id: 'malaikat-ridwan',
      nomor: 10,
      nama: 'Ridwan',
      namaArab: 'رِضْوَانُ',
      sebutanLain: 'Khāzinul Jannah (Penjaga dan Pelayan Pintu Surga)',
      tugasPokok: 'Menjaga pintu surga dan menyambut orang-orang beriman dengan keramahan serta kemuliaan.',
      penjelasanTugas: 'Malaikat Ridwan berwajah sangat rupawan, berseri-seri, senantiasa tersenyum ramah, dan memancarkan wangi kasturi. Beliau bertugas menyambut para hamba Allah yang saleh, bertakwa, dan syahid di pintu gerbang surga dengan ucapan salam: "Salamun \'alaikum thibtum fadkhuluha khalidin".',
      dalilRujukan: {
        surahOrHadits: 'Q.S. Az-Zumar (39) : Ayat 73',
        arabic: 'وَقَالَ لَهُمْ خَزَنَتُهَا سَلَامٌ عَلَيْكُمْ طِبْتُمْ فَادْخُلُوهَا خَالِدِينَ',
        latin: 'Wa qāla lahum khazanatuhā salāmun \'alaikum ṭibtum fadkhulūhā khālidīn.',
        terjemah: 'Dan para penjaga (surga) berkata kepada mereka, "Kesejahteraan (tercurah) atasmu, berbahagialah kamu! Maka masuklah ke dalamnya, sedang kamu kekal di dalamnya."'
      },
      penerapanPerilakuSiswa: {
        diSekolah: 'Menyebarkan salam dan senyum ramah kepada guru, petugas kebersihan, satpam, dan seluruh teman.',
        diRumah: 'Menciptakan suasana rumah yang sejuk, damai, penuh kasih sayang, dan saling menghormati.',
        diMediaSosial: 'Menebarkan aura positif, kedamaian, dan konten motivasi yang mengajak pada keridhaan Allah Swt.'
      },
      kategoriTugas: 'Penjaga Surga & Neraka'
    }
  ],

  // 5. SIFAT-SIFAT MALAIKAT ALLAH SWT
  sifatMalaikat: [
    {
      id: 'sifat-1',
      judul: 'Diciptakan dari Cahaya (Nur)',
      penjelasan: 'Malaikat merupakan makhluk ghaib yang diciptakan Allah Swt. dari cahaya murni (nur). Karakteristik cahaya ini menjadikan malaikat suci, bercahaya, dan bebas dari unsur materi jasmani yang kotor.',
      dalilTerkait: 'Hadis Riwayat Muslim No. 2996: "Khuliqatil-mala\'ikatu min nur" (Malaikat diciptakan dari cahaya).',
      perbandinganDenganManusia: 'Berbeda dengan manusia yang berjasad fisik dari saripati tanah (thin), malaikat bersifat ruhani murni.'
    },
    {
      id: 'sifat-2',
      judul: 'Makhluk Ghaib (Tidak Tampak oleh Indera Biasa)',
      penjelasan: 'Malaikat berada di dimensi alam ghaib yang tidak dapat ditangkap oleh indera penglihatan manusia biasa dalam kondisi normal, kecuali bagi para Nabi/Rasul atau bila malaikat menjelma atas izin Allah.',
      dalilTerkait: 'Q.S. Al-Baqarah (2) : Ayat 3: "Allażīna yu\'minūna bil-ghaib" (Orang-orang yang beriman kepada yang ghaib).',
      perbandinganDenganManusia: 'Manusia hidup di alam syahadah (nyata/inderawi), sedangkan malaikat menghuni alam malakut ghaib.'
    },
    {
      id: 'sifat-3',
      judul: 'Ketaatan Mutlak dan Terjaga dari Dosa (Ma\'shum)',
      penjelasan: 'Malaikat tidak pernah sedikit pun membantah atau melanggar perintah Allah Swt. Ketaatan mereka bersifat mutlak dan abadi karena mereka tidak diberi potensi syahwat untuk berbuat maksiat.',
      dalilTerkait: 'Q.S. At-Tahrim (66) : Ayat 6: "Lā ya\'ṣūnallāha mā amarahum wa yaf\'alūna mā yu\'marūn".',
      perbandinganDenganManusia: 'Manusia dibekali hawa nafsu dan akal, sehingga bisa taat dan bisa pula tergelincir berbuat dosa.'
    },
    {
      id: 'sifat-4',
      judul: 'Tidak Memiliki Hawa Nafsu dan Sifat Tercela',
      penjelasan: 'Malaikat tidak memiliki rasa lapar, haus, lelah, mengantuk, bosan, iri, dengki, ataupun rasa sombong. Mereka tidak membutuhkan makan, minum, tidur, maupun tempat istirahat.',
      dalilTerkait: 'Q.S. Al-Anbiya\' (21) : Ayat 19: "Lā yastakbirūna \'an \'ibādatihī wa lā yastaḥsirūn" (Tidak angkuh dan tidak merasa letih).',
      perbandinganDenganManusia: 'Manusia memiliki nafsu makan, minum, syahwat, lelah, dan butuh istirahat untuk menjaga kelangsungan hidup.'
    },
    {
      id: 'sifat-5',
      judul: 'Tidak Berjenis Kelamin dan Tidak Beranak-Pinak',
      penjelasan: 'Malaikat bukanlah laki-laki dan bukan pula perempuan. Mereka tidak menikah, tidak memiliki pasangan, dan tidak melahirkan keturunan. Anggapan kaum musyrik bahwa malaikat adalah anak perempuan Allah dibantah keras oleh Al-Qur\'an.',
      dalilTerkait: 'Q.S. Az-Zukhruf (43) : Ayat 19: "Dan mereka menjadikan malaikat-malaikat yang hamba-hamba Allah Yang Maha Pemurah itu sebagai jenis perempuan. Apakah mereka menyaksikan penciptaan malaikat itu?"',
      perbandinganDenganManusia: 'Manusia dan jin memiliki jenis kelamin jantan/betina (pria/wanita) dan bereproduksi melahirkan keturunan.'
    },
    {
      id: 'sifat-6',
      judul: 'Senantiasa Bertasbih dan Beribadah Siang-Malam',
      penjelasan: 'Bagi malaikat, zikir, tasbih, dan sujud kepada Allah adalah bagaikan bernapas bagi manusia. Mereka beribadah tiada henti tanpa rasa jenuh sepanjang masa.',
      dalilTerkait: 'Q.S. Al-Anbiya\' (21) : Ayat 20: "Yusabbiḥūnal-laila wan-nahāra lā yafturūn" (Selalu bertasbih malam dan siang tiada henti).',
      perbandinganDenganManusia: 'Ibadah manusia memiliki waktu-waktu tertentu dan diselingi dengan aktivitas muamalah duniawi.'
    },
    {
      id: 'sifat-7',
      judul: 'Mampu Menjelma Menjadi Wujud Lain (Tatsyl) atas Izin Allah',
      penjelasan: 'Dengan izin dan kekuasaan Allah Swt., malaikat dapat menjelma dalam wujud manusia rupawan, sebagaimana Malaikat Jibril mendatangi Maryam, Nabi Ibrahim, dan mendatangi Rasulullah SAW dalam rupa sahabat tampan Dihyah Al-Kalbi.',
      dalilTerkait: 'Q.S. Maryam (19) : Ayat 17: "Fatamaṡṡala lahā basyaran sawiyyā" (Maka ia menjelma di hadapannya dalam bentuk manusia yang sempurna).',
      perbandinganDenganManusia: 'Manusia tidak memiliki kemampuan mengubah bentuk fisik jasmaninya menjadi makhluk lain.'
    },
    {
      id: 'sifat-8',
      judul: 'Memiliki Sayap dengan Jumlah Berbeda-beda',
      penjelasan: 'Malaikat dikaruniai sayap nyata yang mencerminkan kecepatan dan kemuliaan tugasnya. Ada yang bersayap 2, 3, 4, bahkan Rasulullah SAW melihat Malaikat Jibril memiliki 600 sayap yang menutupi ufuk langit.',
      dalilTerkait: 'Q.S. Fatir (35) : Ayat 1 & Hadis Riwayat Bukhari No. 4856.',
      perbandinganDenganManusia: 'Manusia berjalan dengan kedua kaki dan menggunakan alat transportasi buatan.'
    },
    {
      id: 'sifat-9',
      judul: 'Memiliki Kekuatan dan Kecepatan Luar Biasa',
      penjelasan: 'Malaikat mampu bergerak menembus langit dan bumi secepat kilat atas izin Allah, serta memiliki kekuatan dahsyat dalam menjalankan perintah Allah seperti membalikkan bumi kaum Luth.',
      dalilTerkait: 'Q.S. An-Najm (53) : Ayat 5: "\'Allamahū syadīdul-quwā" (Yang diajarkan kepadanya oleh [Jibril] yang sangat kuat).',
      perbandinganDenganManusia: 'Kekuatan dan kecepatan manusia sangat terbatas oleh hukum fisika materi dan gravitasi.'
    },
    {
      id: 'sifat-10',
      judul: 'Mencintai Kebaikan dan Mendoakan Orang Beriman',
      penjelasan: 'Malaikat sangat senang berada di majelis-majelis ilmu, menaungi para penuntut ilmu dengan sayapnya, mendoakan orang yang bersedekah, mendoakan orang yang menunggu salat, dan merasa terganggu dengan bau busuk serta gambar maksiat.',
      dalilTerkait: 'Hadis Riwayat Muslim No. 2699 (Tentang majelis ilmu dinaungi malaikat rahmat).',
      perbandinganDenganManusia: 'Malaikat selalu berpihak pada kebaikan murni tanpa pamrih atau kepentingan duniawi.'
    }
  ],

  // TABEL PERBANDINGAN MAKHLUK (Malaikat vs Manusia vs Jin)
  tabelKomparasi: [
    {
      aspek: 'Asal Bahan Penciptaan',
      malaikat: 'Cahaya (Nur)',
      manusia: 'Tanah / Saripati Tanah (Thin)',
      jinDanIblis: 'Nyala api tanpa asap (Marijin min Nar)'
    },
    {
      aspek: 'Alam Kehidupan',
      malaikat: 'Alam Ghaib / Malakut',
      manusia: 'Alam Nyata (Syahadah) & Fisik',
      jinDanIblis: 'Alam Ghaib di muka bumi'
    },
    {
      aspek: 'Potensi Hawa Nafsu',
      malaikat: 'Tidak memiliki hawa nafsu sama sekali',
      manusia: 'Memiliki hawa nafsu dan akal pikiran',
      jinDanIblis: 'Memiliki hawa nafsu dan syahwat'
    },
    {
      aspek: 'Ketaatan & Ibadah',
      malaikat: 'Selalu taat 100%, ma\'shum dari dosa',
      manusia: 'Sebagian taat (mukmin), sebagian ingkar (kafir)',
      jinDanIblis: 'Sebagian beriman, sebagian besar ingkar (setan/iblis)'
    },
    {
      aspek: 'Kebutuhan Jasmani (Makan/Minum/Tidur)',
      malaikat: 'Tidak makan, tidak minum, tidak tidur/lelah',
      manusia: 'Wajib makan, minum, tidur, dan butuh istirahat',
      jinDanIblis: 'Makan, minum (dari sisa/tulang), tidur, dan bereproduksi'
    },
    {
      aspek: 'Jenis Kelamin & Keturunan',
      malaikat: 'Tidak berjenis kelamin & tidak beranak',
      manusia: 'Laki-laki & perempuan, beranak-pinak',
      jinDanIblis: 'Jantan & betina, memiliki anak keturunan'
    },
    {
      aspek: 'Pertanggungjawaban di Akhirat',
      malaikat: 'Tidak dihisab (bukan mukallaf berbalas pahala/siksa neraka)',
      manusia: 'Dihisab amalnya (masuk surga atau neraka)',
      jinDanIblis: 'Dihisab amalnya (masuk surga atau neraka)'
    }
  ],

  // 6. HIKMAH BERIMAN KEPADA MALAIKAT
  hikmahBeriman: [
    {
      id: 'hikmah-1',
      judul: 'Meningkatkan Keimanan dan Pengagungan kepada Allah Swt.',
      deskripsi: 'Menyadari betapa Maha Agung dan Mahaperkasa Allah Swt. yang telah menciptakan jutaan malaikat yang begitu suci, kuat, dan tunduk patuh tanpa henti. Kebesaran ciptaan menunjukkan kebesaran Sang Maha Pencipta.',
      contohAplikasi: 'Semakin khusyuk dalam melaksanakan salat dan zikir, serta tidak menyekutukan Allah dengan apa pun.',
      iconName: 'Sparkles'
    },
    {
      id: 'hikmah-2',
      judul: 'Menumbuhkan Sikap Mawas Diri (Muraqabatullah)',
      deskripsi: 'Menumbuhkan rasa selalu diawasi oleh Allah melalui malaikat Raqib dan \'Atid yang tidak pernah lengah. Keberadaan malaikat pencatat amal menjadikan kita berpikir seribu kali sebelum berbuat jahat.',
      contohAplikasi: 'Jujur saat mengerjakan soal ujian mandiri di kelas, meskipun guru pengawas sedang keluar ruangan.',
      iconName: 'ShieldCheck'
    },
    {
      id: 'hikmah-3',
      judul: 'Mendorong Kebiasaan Introspeksi Diri (Muhasabah)',
      deskripsi: 'Mendorong seorang pelajar untuk mengevaluasi diri setiap malam sebelum tidur: "Berapa banyak catatan amal kebaikan yang kutabung hari ini pada malaikat Raqib, dan berapa dosa yang kusesali di hadapan malaikat \'Atid?"',
      contohAplikasi: 'Melakukan muhasabah 5 menit sebelum tidur, lalu membaca istighfar dan bertekad memperbaiki diri esok hari.',
      iconName: 'Brain'
    },
    {
      id: 'hikmah-4',
      judul: 'Semangat dan Istiqamah dalam Menjalankan Kebaikan',
      deskripsi: 'Termotivasi untuk gemar menuntut ilmu, bersedekah, dan beramal shaleh karena meyakini para malaikat menaungi orang berilmu dengan sayapnya dan senantiasa mendoakan ampunan bagi orang yang berbuat baik.',
      contohAplikasi: 'Rajin menghadiri pengajian dan majelis ilmu di sekolah serta gemar menyisihkan uang jajan untuk sedekah.',
      iconName: 'Heart'
    },
    {
      id: 'hikmah-5',
      judul: 'Menghindarkan Diri dari Perbuatan Dosa dan Maksiat Digital',
      deskripsi: 'Menjadi benteng pertahanan dari godaan maksiat di era gawai dan internet. Sadar bahwa ketikan jari, komentar, like, dan riwayat peramban (browser history) tidak ada yang tersembunyi dari catatan malaikat.',
      contohAplikasi: 'Menjaga lisan dan jempol dari ujaran kebencian, cyberbullying, menyebarkan aib orang lain, dan konten asusila.',
      iconName: 'Smartphone'
    },
    {
      id: 'hikmah-6',
      judul: 'Memberikan Ketenangan Jiwa (Thuma\'ninah) Menghadapi Kematian',
      deskripsi: 'Menghilangkan kecemasan berlebihan terhadap rezeki karena yakin telah diatur oleh malaikat Mikail, serta bersiap menghadapi kematian dengan memperbanyak amal saleh agar dijemput malaikat maut dengan husnul khatimah.',
      contohAplikasi: 'Tidak putus asa ketika menghadapi kegagalan dan senantiasa berprasangka baik (husnudzan) kepada ketetapan Allah.',
      iconName: 'Lightbulb'
    }
  ],

  // REFLEKSI MAWAS DIRI & MUHASABAH PELAJAR
  panduanMuhasabah: {
    judul: 'Lembar Refleksi Harian Siswa: "Muhasabah Bersama Raqib dan \'Atid"',
    pengantar: 'Sebelum memejamkan mata di malam hari, tanyakanlah 5 pertanyaan refleksi berikut pada dirimu sendiri untuk memastikan catatan malaikat Raqib lebih berat daripada malaikat \'Atid:',
    butirPertanyaan: [
      {
        no: 1,
        pertanyaan: 'Apakah hari ini salat lima waktuku sudah dikerjakan lengkap dan tepat waktu?',
        rekomendasi: 'Jika ada yang tertinggal atau terlambat, segera qadha dan bertaubat dengan sungguh-sungguh.'
      },
      {
        no: 2,
        pertanyaan: 'Kebaikan apa yang telah kulakukan hari ini untuk orang tua, guru, dan teman-temanku?',
        rekomendasi: 'Syukuri kebaikan tersebut sebagai taufiq dari Allah, dan mintalah agar dicatat sebagai amal ikhlas.'
      },
      {
        no: 3,
        pertanyaan: 'Apakah lisan dan jariku hari ini menyakiti hati orang lain, berbohong, atau mem-bully?',
        rekomendasi: 'Segera meminta maaf kepada orang yang bersangkutan dan beristighfar 100 kali.'
      },
      {
        no: 4,
        pertanyaan: 'Bagaimana aku menggunakan gawai dan media sosial hari ini? Apakah sarat manfaat atau sia-sia?',
        rekomendasi: 'Batasi penggunaan layar (screen time) dan unfollow akun yang memicu perbuatan dosa.'
      },
      {
        no: 5,
        pertanyaan: 'Jika malam ini malaikat Izrail mencabut nyawaku, apakah aku sudah siap mempertanggungjawabkannya di hadapan Munkar dan Nakir?',
        rekomendasi: 'Tidurlah dalam keadaan suci (berwudhu), memaafkan semua kesalahan orang lain, dan membaca doa tidur.'
      }
    ]
  },

  // KUIS EVALUASI HOTS BAB 7 (5 Butir Soal Interaktif)
  kuisSoalHots: [
    {
      id: 'kuis-1',
      pertanyaan: 'Dalam sebuah ujian sekolah yang tidak dijaga ketat oleh guru pengawas, Farhan memiliki kesempatan emas untuk membuka catatan contekan di sakunya. Namun, Farhan memilih untuk tetap mengerjakan soal secara mandiri dan jujur dengan kemampuannya sendiri. Sikap Farhan tersebut mencerminkan penghayatan terhadap rukun iman kepada malaikat, khususnya...',
      pilihan: [
        'A. Malaikat Jibril yang menyampaikan wahyu kejujuran',
        'B. Malaikat Mikail yang membagikan rezeki nilai ujian',
        'C. Malaikat Raqib dan \'Atid yang senantiasa mengawasi dan mencatat setiap perbuatan manusia',
        'D. Malaikat Munkar dan Nakir yang menanyai amal di alam barzakh'
      ],
      kunciJawaban: 2,
      pembahasan: 'Farhan mengamalkan sikap mawas diri (muraqabatullah) karena meyakini bahwa meski guru pengawas tidak melihat, malaikat Raqib dan \'Atid tidak pernah tidur dan selalu mencatat segala gerak-gerik serta kejujuran maupun kecurangan manusia.',
      kategori: 'Hikmah & Mawas Diri'
    },
    {
      id: 'kuis-2',
      pertanyaan: 'Perhatikan penggalan ayat berikut:\n"لَّا يَعْصُونَ اللَّهَ مَا أَمَرَهُمْ وَيَفْعَلُونَ مَا يُؤْمَرُونَ" (Q.S. At-Tahrim: 6)\nBerdasarkan dalil naqli di atas, kesimpulan yang paling tepat mengenai sifat hakiki malaikat adalah...',
      pilihan: [
        'A. Malaikat memiliki kehendak bebas memilih antara taat dan maksiat seperti manusia',
        'B. Malaikat bersifat ma\'shum, patuh secara mutlak, dan tidak berpotensi melanggar perintah Allah Swt.',
        'C. Malaikat dapat berbuat dosa apabila diperdaya oleh godaan iblis',
        'D. Ketaatan malaikat bergantung pada suasana hati dan kondisi fisiknya'
      ],
      kunciJawaban: 1,
      pembahasan: 'Q.S. At-Tahrim ayat 6 menegaskan bahwa malaikat tidak pernah mendurhakai apa yang diperintahkan Allah kepada mereka dan selalu mengerjakan apa yang diperintahkan, karena malaikat tidak memiliki hawa nafsu.',
      kategori: 'Dalil Naqli'
    },
    {
      id: 'kuis-3',
      pertanyaan: 'Seorang siswa aktif di media sosial sering menyaksikan teman sekelasnya diejek dan disebarkan rumor palsunya di grup obrolan. Siswa tersebut tidak ikut menertawakan, melainkan menasihati pembuat postingan agar menghapusnya karena setiap ketikan jari akan dimintai pertanggungjawaban. Mengapa pemahaman terhadap Q.S. Qaf ayat 18 sangat relevan dalam kasus ini?',
      pilihan: [
        'A. Karena malaikat Israfil akan meniup sangkakala bagi orang yang menggunakan gawai',
        'B. Karena malaikat Malik hanya menyiksa orang yang tidak memiliki akun media sosial',
        'C. Karena Q.S. Qaf ayat 18 menegaskan tiada satu ucapan atau tulisan pun melainkan ada malaikat Raqib dan \'Atid yang mencatatnya secara akurat',
        'D. Karena malaikat Ridwan hanya membuka surga bagi siswa yang mematikan gawainya'
      ],
      kunciJawaban: 2,
      pembahasan: 'Q.S. Qaf ayat 18 menerangkan "Mā yalfiẓu min qaulin illā ladaihi raqībun \'atīd" bahwa setiap lafaz kata—termasuk ketikan teks di media sosial—dicatat oleh malaikat pengawas yang selalu hadir.',
      kategori: 'Tugas 10 Malaikat'
    },
    {
      id: 'kuis-4',
      pertanyaan: 'Perhatikan perbandingan berikut:\n(1) Diciptakan dari cahaya murni (nur)\n(2) Tidak berjenis kelamin dan tidak beranak-pinak\n(3) Memiliki akal dan hawa nafsu\n(4) Memiliki kemampuan menjelma (tatsyl) atas izin Allah\n(5) Sebagian taat dan sebagian lagi membangkang\nManakah yang merupakan karakteristik khusus malaikat Allah Swt.?',
      pilihan: [
        'A. (1), (2), dan (4)',
        'B. (1), (3), dan (5)',
        'C. (2), (3), dan (4)',
        'D. (3), (4), dan (5)'
      ],
      kunciJawaban: 0,
      pembahasan: 'Karakteristik khusus malaikat adalah diciptakan dari cahaya (1), tidak berjenis kelamin dan tidak bereproduksi (2), serta mampu menjelma wujud atas izin Allah (4). Poin (3) dan (5) adalah sifat manusia dan bangsa jin.',
      kategori: 'Sifat Malaikat'
    },
    {
      id: 'kuis-5',
      pertanyaan: 'Meyakini adanya Malaikat Munkar dan Nakir yang bertugas menanyai manusia di alam barzakh seharusnya membuahkan dampak positif pada diri seorang muslim berupa...',
      pilihan: [
        'A. Rasa takut yang berlebihan sehingga tidak mau bergaul dengan masyarakat',
        'B. Keinginan untuk segera meninggal dunia agar bisa bertemu malaikat',
        'C. Memperkokoh akidah tauhid dan mempersiapkan bekal amal shalih sejak usia muda',
        'D. Menghafal kunci jawaban bahasa Arab agar lancar saat diinterogasi di kubur'
      ],
      kunciJawaban: 2,
      pembahasan: 'Iman kepada malaikat Munkar dan Nakir menumbuhkan kesadaran bahwa pertanyaan kubur dijawab oleh keteguhan iman dan amal saleh nyata selama hidup, bukan sekadar hafalan lisan, sehingga mendorong siswa mempersiapkan bekal takwa sejak dini.',
      kategori: 'Pengertian & Hakikat'
    }
  ]
};
