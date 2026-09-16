export interface MufradatWord {
  id: string;
  arabic: string;
  latin: string;
  meaning: string;
  surahRef: string;
  category?: 'Kata Benda (Isim)' | 'Kata Kerja (Fi\'il)' | 'Huruf / Partikel';
  tajwidHint?: string;
  isGhunnah?: boolean;
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
  ghunnahWords: string[];
}

export interface HaditsTaqwaItem {
  id: string;
  title: string;
  narrator: string;
  kitabRef: string;
  arabic: string;
  latin: string;
  translation: string;
  hikmah: string[];
  derajatHadits: string;
}

export interface ContohGhunnah {
  id: string;
  lafalArabic: string;
  latin: string;
  suratRef: string;
  hurufGhunnah: 'Nun Bertasydid (نّ)' | 'Mim Bertasydid (مّ)';
  caraMembaca: string;
  penjelasan: string;
}

export interface SoalKuisBab6 {
  id: string;
  pertanyaan: string;
  pilihan: string[];
  kunciJawaban: number;
  pembahasan: string;
  kategori: 'Tajwid Ghunnah' | 'Kandungan Ayat' | 'Hadits Taqwa' | 'Mufradat';
}

export const MATERI_KELAS_7_SEM_2_BAB_6 = {
  babNumber: 6,
  babTitle: 'Meraih Cinta Allah SWT dengan Ketakwaan: Mengkaji Q.S. Al-Baqarah/2: 103 dan Ali \'Imran/3: 76 serta Hukum Bacaan Ghunnah',
  semester: 'Semester 2',
  grade: 'Kelas VII',
  temaKurikulum: 'Al-Qur\'an dan Hadis - Pembiasaan Sikap Taqwa, Membaca Tartil, Menghafal, Menulis, dan Menepati Janji',
  pengantar: `Ketakwaan (taqwa) adalah puncak kemuliaan seorang hamba di hadapan Allah SWT. Orang yang bertakwa tidak hanya menjalankan ibadah ritual, melainkan juga membuktikan imannya melalui integritas moral yang luhur, seperti senantiasa menepati janji (wafa' bil 'ahdi) dan merasa diawasi Allah di manapun berada (muraqabatullah). Pada Bab 6 ini, siswa Kelas VII mempelajari 4 keterampilan komprehensif: Membaca secara tartil sesuai hukum tajwid Ghunnah, Menghafal kedua ayat mulia ini dengan mutqin, Menulis ayat dan kaligrafi khat Naskhi dengan kaidah imla' yang benar, serta Menjelaskan kandungan mufradat, terjemah, dan hadis-hadis Rasulullah SAW tentang taqwa.`,
  
  ayatAlBaqarah103: {
    surahName: 'Al-Baqarah',
    surahNumber: 2,
    verseNumber: 103,
    arabic: 'وَلَوْ أَنَّهُمْ آمَنُوا وَاتَّقَوْا لَمَثُوبَةٌ مِّنْ عِندِ اللَّهِ خَيْرٌ ۖ لَّوْ كَانُوا يَعْلَمُونَ',
    latin: 'Wa lau annahum āmanū wattaqaw lamatsūbatum min \'indillāhi khair(un), lau kānū ya\'lamūn(a).',
    translationKemenag: 'Dan sekiranya mereka beriman dan bertakwa, tentulah pahala dari Allah lebih baik, sekiranya mereka mengetahui.',
    audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/110.mp3',
    tafsirWajiz: 'Ayat ini menegaskan perbandingan nyata antara orang-orang yang mengejar sihir dan kenikmatan duniawi yang semu dengan orang-orang yang memilih jalan iman dan takwa. Sekiranya mereka beriman kepada Allah dan Rasul-Nya serta menjaga diri dari kekufuran dan perbuatan syirik, niscaya pahala yang tersimpan di sisi Allah jauh lebih mulia, kekal, dan menguntungkan daripada segala tipu daya duniawi yang mereka banggakan, sekiranya mereka memiliki akal dan ilmu yang benar.',
    asbabunNuzul: 'Ayat ini turun berkenaan dengan perilaku sebagian kaum Yahudi Madinah pada masa Nabi Muhammad SAW yang mencampakkan kitab Taurat dan lebih menyibukkan diri mempelajari mantra-mantra sihir yang dinisbatkan secara dusta kepada Nabi Sulaiman a.s. serta ajaran yang diturunkan kepada dua malaikat Harut dan Marut di Babilonia. Allah SWT menegaskan bahwa andaikata mereka memilih beriman dan bertakwa, niscaya balasan surga dari Allah jauh lebih agung daripada sihir yang justru menjerumuskan mereka ke neraka.',
    ghunnahWords: ['أَنَّهُمْ (Nun Bertasydid / Ghunnah Musyaddadah)'],
    kandunganPoin: [
      'Pentingnya memadukan iman di dalam hati dengan ketakwaan nyata dalam perbuatan amal saleh sehari-hari.',
      'Balasan dan pahala (matsubah) dari Allah SWT bagi orang yang beriman dan bertakwa jauh lebih berharga daripada seluruh kenikmatan fana duniawi.',
      'Peringatan keras terhadap tipu daya sihir, tahayul, dan hal-hal yang dapat merusak akidah tauhid.',
      'Pengetahuan hakiki yang sejati adalah pengetahuan yang membimbing manusia untuk taat dan tunduk kepada Allah SWT.'
    ]
  },

  ayatAliImran76: {
    surahName: 'Ali \'Imran',
    surahNumber: 3,
    verseNumber: 76,
    arabic: 'بَلَىٰ مَنْ أَوْفَىٰ بِعَهْدِهِ وَاتَّقَىٰ فَإِنَّ اللَّهَ يُحِبُّ الْمُتَّقِينَ',
    latin: 'Balā man aufā bi\'ahdihī wattaqā fa innallāha yuhibbul-muttaqīn(a).',
    translationKemenag: 'Sebenarnya barangsiapa menepati janji dan bertakwa, maka sungguh Allah mencintai orang-orang yang bertakwa.',
    audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/369.mp3',
    tafsirWajiz: 'Ayat ini membantah anggapan keliru orang-orang yang mengira tidak ada dosa bagi mereka jika mengkhianati amanah orang lain. Allah menegaskan: "Sebenarnya (tidak demikian), barangsiapa yang menepati janjinya—baik janji ketaatan kepada Allah maupun janji dan amanah antarsesama manusia—dan bertakwa dengan menjauhi larangan-Nya, maka sesungguhnya Allah sangat mencintai orang-orang yang bertakwa."',
    asbabunNuzul: 'Ayat ini diturunkan sebagai teguran keras terhadap klaim orang-orang Yahudi yang berpendapat: "Tidak ada dosa bagi kami memakan harta kaum Ummi (orang Arab non-Yahudi) secara bathil" (Q.S. Ali \'Imran: 75). Mereka merasa berhak mengingkari perjanjian jual-beli dan amanah titipan bila bertransaksi dengan orang di luar golongan mereka. Maka Allah menurunkan ayat 76 ini untuk menegaskan bahwa kejujuran, menepati janji, dan ketakwaan berlaku universal tanpa pandang bulu.',
    ghunnahWords: ['فَإِنَّ (Nun Bertasydid / Ghunnah Musyaddadah)'],
    kandunganPoin: [
      'Menepati janji (wafa\' bil \'ahdi) adalah indikator utama dan bukti tak terpisahkan dari ketakwaan seorang mukmin.',
      'Cinta Allah SWT (mahabbatullah) diberikan secara khusus kepada hamba-hamba-Nya yang istiqamah dalam ketakwaan.',
      'Menjaga amanah dan menepati janji berlaku kepada siapa saja, baik sesama muslim maupun non-muslim, tanpa diskriminasi.',
      'Mengkhianati janji adalah ciri kemunafikan yang sangat dibenci oleh Allah SWT dan Rasul-Nya.'
    ]
  },

  hukumGhunnah: {
    pengertianBahasa: 'Secara bahasa (etimologi), Ghunnah (الغُنَّة) bermakna suara merdu atau suara dengung yang keluar dari pangkal rongga hidung (Al-Khaisyum).',
    pengertianIstilah: 'Secara istilah ilmu tajwid, Ghunnah adalah suara dengung yang melekat pada tabiat huruf Nun (ن) dan Mim (م), baik saat berharakat, sukun, maupun tasydid.',
    ghunnahMusyaddadah: {
      definisi: 'Hukum Ghunnah Musyaddadah (غُنَّة مُشَدَّدَة) terjadi apabila ada huruf Nun bertasydid (نّ) atau Mim bertasydid (مّ), baik berada di tengah kata maupun di akhir kata.',
      panjangKetukan: 'Wajib didengungkan selama 2 harakat (2 ketukan / 1 alif) hingga 2,5 harakat secara sempurna.',
      caraMembaca: 'Tahan suara di pangkal hidung dengan dengungan yang jelas dan stabil sebelum berpindah ke huruf berikutnya.',
      alatUji: 'Untuk memastikan ghunnah sudah benar: tutuplah kedua lubang hidung saat melafalkan huruf Nun atau Mim bertasydid; bila suaranya langsung terhenti atau tersumbat, berarti makhraj al-khaisyum sudah tepat.'
    },
    maratibulGhunnah: [
      {
        tingkat: '1. Akmal ma takun (أَكْمَل مَا تَكُون - Paling Sempurna)',
        keterangan: 'Tingkatan dengung paling kuat dan sempurna. Terjadi pada: (a) Nun dan Mim bertasydid (Ghunnah Musyaddadah), (b) Idgham Bighunnah, (c) Idgham Mimi / Mutamatsilain.',
        contoh: 'وَلَوْ أَنَّهُمْ , فَإِنَّ اللَّهَ , مِّن وَالٍ , كُنتُم مُّؤْمِنِينَ'
      },
      {
        tingkat: '2. Kamilah (كَامِلَة - Sempurna)',
        keterangan: 'Tingkatan dengung yang sempurna namun sedikit di bawah tingkat pertama. Terjadi pada: (a) Ikhfa\' Haqiqi, (b) Ikhfa\' Syafawi, (c) Iqlab.',
        contoh: 'مِن قَبْلِ , يَعْتَصِم بِاللَّهِ , مِن بَعْدِ'
      },
      {
        tingkat: '3. Naqishah (نَاقِصَة - Kurang)',
        keterangan: 'Ghunnah yang melekat pada Nun sukun atau Mim sukun saat dibaca Izhar (jelas), dengungnya hanya sebatas sifat asli huruf tanpa ditahan.',
        contoh: 'مَنْ آمَنَ , أَنْعَمْتَ , لَمْ يَلِدْ'
      },
      {
        tingkat: '4. Anqash ma takun (أَنْقَص مَا تَكُون - Paling Kurang)',
        keterangan: 'Ghunnah yang melekat pada huruf Nun dan Mim yang berharakat hidup biasa (fathah, kasrah, dhammah).',
        contoh: 'نَعْلَمُ , مَالِكِ , نَسْتَعِينُ'
      }
    ],
    daftarContohBab6: [
      {
        id: 'gn-1',
        lafalArabic: 'أَنَّهُمْ',
        latin: 'annahum',
        suratRef: 'Q.S. Al-Baqarah/2: 103',
        hurufGhunnah: 'Nun Bertasydid (نّ)',
        caraMembaca: 'Didengungkan 2 harakat di rongga hidung pada huruf Nun bertasydid: an-nahum',
        penjelasan: 'Terdapat huruf Nun bertasydid (نّ) di tengah kata.'
      },
      {
        id: 'gn-2',
        lafalArabic: 'فَإِنَّ',
        latin: 'fa\'inna',
        suratRef: 'Q.S. Ali \'Imran/3: 76',
        hurufGhunnah: 'Nun Bertasydid (نّ)',
        caraMembaca: 'Didengungkan 2 harakat di rongga hidung pada kata fa\'in-na',
        penjelasan: 'Terdapat huruf Nun bertasydid (نّ) di tengah kata.'
      },
      {
        id: 'gn-3',
        lafalArabic: 'عَمَّ',
        latin: '\'amma',
        suratRef: 'Q.S. An-Naba/78: 1',
        hurufGhunnah: 'Mim Bertasydid (مّ)',
        caraMembaca: 'Didengungkan 2 harakat pada huruf Mim bertasydid: \'am-ma',
        penjelasan: 'Terdapat huruf Mim bertasydid (مّ) di akhir kata.'
      },
      {
        id: 'gn-4',
        lafalArabic: 'إِنَّ الْإِنسَانَ',
        latin: 'innal-insāna',
        suratRef: 'Q.S. Al-\'Asr/103: 2',
        hurufGhunnah: 'Nun Bertasydid (نّ)',
        caraMembaca: 'Didengungkan 2 harakat pada kata in-na',
        penjelasan: 'Terdapat huruf Nun bertasydid (نّ) pada partikel taukid Inna.'
      },
      {
        id: 'gn-5',
        lafalArabic: 'ثُمَّ',
        latin: 'tsumma',
        suratRef: 'Q.S. At-Takatsur/102: 8',
        hurufGhunnah: 'Mim Bertasydid (مّ)',
        caraMembaca: 'Didengungkan 2 harakat pada kata tsum-ma',
        penjelasan: 'Terdapat huruf Mim bertasydid (مّ) di tengah kata.'
      },
      {
        id: 'gn-6',
        lafalArabic: 'مِنَ الْجِنَّةِ وَالنَّاسِ',
        latin: 'minal-jinnati wan-nās',
        suratRef: 'Q.S. An-Nas/114: 6',
        hurufGhunnah: 'Nun Bertasydid (نّ)',
        caraMembaca: 'Didengungkan 2 harakat pada kata al-jin-nah dan an-nās',
        penjelasan: 'Terdapat dua huruf Nun bertasydid berturut-turut dalam satu ayat.'
      }
    ]
  },

  haditsTaqwaList: [
    {
      id: 'hd-1',
      title: 'Perintah Bertakwa di Mana Pun Berada dan Berakhlak Mulia',
      narrator: 'Abu Dzar Al-Ghifari & Mu\'adz bin Jabal r.a.',
      kitabRef: 'H.R. At-Tirmidzi No. 1987 (Hadits Hasan Shahih)',
      derajatHadits: 'Hasan Shahih',
      arabic: 'عَنْ أَبِي ذَرٍّ وَمُعَاذِ بْنِ جَبَلٍ رَضِيَ اللَّهُ عَنْهُمَا أَنَّ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ: «اتَّقِ اللَّهَ حَيْثُمَا كُنْتَ، وَأَتْبِعِ السَّيِّئَةَ الْحَسَنَةَ تَمْحُهَا، وَخَالِقِ النَّاسَ بِخُلُقٍ حَسَنٍ»',
      latin: '‘An Abī Dzarrin wa Mu‘ādzibni Jabalin radhiyallāhu ‘anhumā anna Rasūlallāhi shallallāhu ‘alaihi wa sallama qāla: "Ittaqillāha haitsumā kunta, wa atbi‘is-sayyi’atal-hasanata tamhuhā, wa khāliqin-nāsa bikhuluqin hasan".',
      translation: 'Dari Abu Dzar dan Mu\'adz bin Jabal radhiyallahu \'anhuma bahwa Rasulullah shallallahu \'alaihi wa sallam bersabda: "Bertakwalah kepada Allah di mana pun kamu berada, dan ikutilah perbuatan buruk itu dengan perbuatan baik niscaya perbuatan baik itu akan menghapusnya, serta pergaulilah manusia dengan akhlak yang mulia."',
      hikmah: [
        'Kewajiban bertakwa bersifat mutlak, baik saat di tempat ramai bersama banyak orang maupun ketika seorang diri di kamar pribadi.',
        'Manusia tidak luput dari kesalahan dan khilaf, namun pintu taubat selalu terbuka dengan segera melakukan amal kebaikan untuk menghapus dosa.',
        'Hubungan vertikal kepada Allah (Hablum minallāh) harus selalu diimbangi dengan hubungan horizontal yang berakhlak terpuji kepada sesama manusia (Hablum minan-nās).'
      ]
    },
    {
      id: 'hd-2',
      title: 'Hakikat Taqwa Berakar di Dalam Hati',
      narrator: 'Abu Hurairah r.a.',
      kitabRef: 'H.R. Muslim No. 2564',
      derajatHadits: 'Shahih Muslim',
      arabic: 'عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ قَالَ: قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ: «...التَّقْوَى هَاهُنَا»، وَيُشِيرُ إِلَى صَدْرِهِ ثَلَاثَ مَرَّاتٍ، «بِحَسْبِ امْرِئٍ مِنَ الشَّرِّ أَنْ يَحْقِرَ أَخَاهُ الْمُسْلِمَ، كُلُّ الْمُسْلِمِ عَلَى الْمُسْلِمِ حَرَامٌ، دَمُهُ، وَمَالُهُ، وَعِرْضُهُ»',
      latin: '‘An Abī Hurairata radhiyallāhu ‘anhu qāla: Qāla Rasūlullāhi shallallāhu ‘alaihi wa sallam: "...At-Taqwā hāhunā", wa yusyīru ilā shadrihī tsalātsa marrāt, "Bihasbimri’im minasy-syarri an yahqira akhāhul-muslim, kullul-muslimi ‘alal-muslimi harām, damuhū, wa māluhū, wa ‘irdhuh".',
      translation: 'Dari Abu Hurairah r.a., Rasulullah SAW bersabda: "...Takwa itu ada di sini," dan beliau menunjuk ke arah dadanya sebanyak tiga kali. "Cukuplah seseorang dianggap melakukan kejahatan jika ia merendahkan saudaranya sesama muslim. Setiap muslim atas muslim lainnya haram darahnya, hartanya, dan kehormatannya."',
      hikmah: [
        'Takwa bukan sekadar simbol lahiriah atau busana luar, melainkan berakar kuat di dalam hati yang bersih dan ikhlas.',
        'Orang yang bertakwa dilarang keras merendahkan (menghina/membully) orang lain, karena kemuliaan sejati di sisi Allah adalah ketakwaan, bukan rupa atau kekayaan.',
        'Kewajiban menjaga kehormatan, keselamatan jiwa, dan hak milik sesama muslim.'
      ]
    },
    {
      id: 'hd-3',
      title: 'Penyebab Terbanyak Manusia Masuk Surga',
      narrator: 'Abu Hurairah r.a.',
      kitabRef: 'H.R. At-Tirmidzi No. 2004',
      derajatHadits: 'Shahih',
      arabic: 'سُئِلَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ عَنْ أَكْثَرِ مَا يُدْخِلُ النَّاسَ الْجَنَّةَ، فَقَالَ: «تَقْوَى اللَّهِ وَحُسْنُ الْخُلُقِ»، وَسُئِلَ عَنْ أَكْثَرِ مَا يُدْخِلُ النَّاسَ النَّارَ، فَقَالَ: «الْفَمُ وَالْفَرْجُ»',
      latin: 'Su’ila Rasūlullāhi shallallāhu ‘alaihi wa sallam ‘an aktsari mā yudkhilun-nāsal-jannata, faqāla: "Taqwallāhi wa husnul-khuluq", wa su’ila ‘an aktsari mā yudkhilun-nāsan-nāra, faqāla: "Al-famu wal-farj".',
      translation: 'Rasulullah SAW ditanya mengenai hal yang paling banyak memasukkan manusia ke dalam surga. Beliau menjawab: "Takwa kepada Allah dan akhlak yang mulia." Beliau juga ditanya tentang apa yang paling banyak memasukkan manusia ke dalam neraka, beliau menjawab: "Mulut (lisan) dan kemaluan."',
      hikmah: [
        'Kunci utama memasuki surga adalah kombinasi antara taqwa (ketaatan beragama) dan akhlak yang mulia kepada sesama makhluk.',
        'Pentingnya menjaga lisan dari perkataan dusta, ingkar janji, menggunjing (ghibah), dan kata-kata kotor.'
      ]
    }
  ],

  mufradatList: {
    alBaqarah103: [
      { id: 'mb-1', arabic: 'وَلَوْ', latin: 'wa lau', meaning: 'dan sekiranya / andaikata', surahRef: 'Q.S. Al-Baqarah/2: 103', category: 'Huruf / Partikel' },
      { id: 'mb-2', arabic: 'أَنَّهُمْ', latin: 'annahum', meaning: 'sesungguhnya mereka', surahRef: 'Q.S. Al-Baqarah/2: 103', category: 'Huruf / Partikel', tajwidHint: 'Ghunnah Musyaddadah (نّ)', isGhunnah: true },
      { id: 'mb-3', arabic: 'آمَنُوا', latin: 'āmanū', meaning: 'mereka beriman', surahRef: 'Q.S. Al-Baqarah/2: 103', category: 'Kata Kerja (Fi\'il)', tajwidHint: 'Mad Badal & Mad Thabi\'i' },
      { id: 'mb-4', arabic: 'وَاتَّقَوْا', latin: 'wattaqaw', meaning: 'dan mereka bertakwa', surahRef: 'Q.S. Al-Baqarah/2: 103', category: 'Kata Kerja (Fi\'il)', tajwidHint: 'Mad Layyin pada qaw' },
      { id: 'mb-5', arabic: 'لَمَثُوبَةٌ', latin: 'lamatsūbatun', meaning: 'tentulah pahala / balasan', surahRef: 'Q.S. Al-Baqarah/2: 103', category: 'Kata Benda (Isim)', tajwidHint: 'Mad Thabi\'i (tsū)' },
      { id: 'mb-6', arabic: 'مِّنْ عِندِ', latin: 'min \'indi', meaning: 'dari sisi', surahRef: 'Q.S. Al-Baqarah/2: 103', category: 'Kata Benda (Isim)', tajwidHint: 'Izhar Halqi (min \'in) & Ikhfa\' Haqiqi (\'indi)' },
      { id: 'mb-7', arabic: 'اللَّهِ', latin: 'Allāh', meaning: 'Allah', surahRef: 'Q.S. Al-Baqarah/2: 103', category: 'Kata Benda (Isim)', tajwidHint: 'Tarqiq (dibaca tipis karena didahului kasrah)' },
      { id: 'mb-8', arabic: 'خَيْرٌ', latin: 'khairun', meaning: 'lebih baik / lebih agung', surahRef: 'Q.S. Al-Baqarah/2: 103', category: 'Kata Benda (Isim)', tajwidHint: 'Mad Layyin' },
      { id: 'mb-9', arabic: 'لَّوْ', latin: 'lau', meaning: 'sekiranya / jikalau', surahRef: 'Q.S. Al-Baqarah/2: 103', category: 'Huruf / Partikel', tajwidHint: 'Mad Layyin' },
      { id: 'mb-10', arabic: 'كَانُوا', latin: 'kānū', meaning: 'mereka adalah', surahRef: 'Q.S. Al-Baqarah/2: 103', category: 'Kata Kerja (Fi\'il)', tajwidHint: 'Mad Thabi\'i' },
      { id: 'mb-11', arabic: 'يَعْلَمُونَ', latin: 'ya\'lamūn', meaning: 'mereka mengetahui', surahRef: 'Q.S. Al-Baqarah/2: 103', category: 'Kata Kerja (Fi\'il)', tajwidHint: 'Mad \'Aridh Lissukun di akhir ayat' }
    ] as MufradatWord[],

    aliImran76: [
      { id: 'ma-1', arabic: 'بَلَىٰ', latin: 'balā', meaning: 'sebenarnya / bahkan tidak demikian', surahRef: 'Q.S. Ali \'Imran/3: 76', category: 'Huruf / Partikel', tajwidHint: 'Mad Thabi\'i Harfi' },
      { id: 'ma-2', arabic: 'مَنْ', latin: 'man', meaning: 'barangsiapa / siapa saja', surahRef: 'Q.S. Ali \'Imran/3: 76', category: 'Kata Benda (Isim)', tajwidHint: 'Izhar Halqi bertemu Hamzah' },
      { id: 'ma-3', arabic: 'أَوْفَىٰ', latin: 'aufā', meaning: 'menepati / menyempurnakan', surahRef: 'Q.S. Ali \'Imran/3: 76', category: 'Kata Kerja (Fi\'il)', tajwidHint: 'Mad Layyin & Mad Thabi\'i' },
      { id: 'ma-4', arabic: 'بِعَهْدِهِ', latin: 'bi\'ahdihī', meaning: 'dengan janjinya / atas janjinya', surahRef: 'Q.S. Ali \'Imran/3: 76', category: 'Kata Benda (Isim)', tajwidHint: 'Mad Shilah Qashirah' },
      { id: 'ma-5', arabic: 'وَاتَّقَىٰ', latin: 'wattaqā', meaning: 'dan bertakwa (menjaga diri)', surahRef: 'Q.S. Ali \'Imran/3: 76', category: 'Kata Kerja (Fi\'il)', tajwidHint: 'Mad Thabi\'i' },
      { id: 'ma-6', arabic: 'فَإِنَّ', latin: 'fa\'inna', meaning: 'maka sungguh / sesungguhnya', surahRef: 'Q.S. Ali \'Imran/3: 76', category: 'Huruf / Partikel', tajwidHint: 'Ghunnah Musyaddadah (نّ)', isGhunnah: true },
      { id: 'ma-7', arabic: 'اللَّهَ', latin: 'Allāha', meaning: 'Allah SWT', surahRef: 'Q.S. Ali \'Imran/3: 76', category: 'Kata Benda (Isim)', tajwidHint: 'Tafkhim (dibaca tebal karena didahului fathah)' },
      { id: 'ma-8', arabic: 'يُحِبُّ', latin: 'yuhibbu', meaning: 'mencintai / menyukai', surahRef: 'Q.S. Ali \'Imran/3: 76', category: 'Kata Kerja (Fi\'il)', tajwidHint: 'Idgham Mutamatsilain Shaghir (ba bertasydid)' },
      { id: 'ma-9', arabic: 'الْمُتَّقِينَ', latin: 'al-muttaqīn', meaning: 'orang-orang yang bertakwa', surahRef: 'Q.S. Ali \'Imran/3: 76', category: 'Kata Benda (Isim)', tajwidHint: 'Alif Lam Qomariyah & Mad \'Aridh Lissukun' }
    ] as MufradatWord[]
  },

  panduanMenulisKhat: {
    prinsipDasar: [
      'Menulis huruf Arab dimulai dari arah kanan ke kiri (kebalikan dari aksara latin).',
      'Perhatikan kelompok huruf yang dapat menyambung dan disambung (seperti ba, ta, tsa, jim, sin, lam, mim, dll).',
      'Kenali 6 huruf yang HANYA BISA disambung dari kanan namun TIDAK BISA menyambung ke huruf sebelah kirinya: Alif (ا), Dal (د), Dzal (ذ), Ra (ر), Zai (ز), dan Wawu (و). Contoh: kata وَاتَّقَوْا dan أَوْفَىٰ.',
      'Perhatikan penempatan tanda baca harakat, khususnya harakat tasydid ( ّ ) pada hukum bacaan Ghunnah (seperti أَنَّ dan فَإِنَّ) yang diletakkan tepat di atas gigi huruf Nun.',
      'Jagalah konsistensi garis dasar (baseline) penulisan: ada huruf yang tetap di atas garis (alif, ba, ta, dal, tha), dan ada huruf yang bagian ekornya turun ke bawah garis (ra, zai, sin, mim, nun, ya, wawu).'
    ],
    tahapanLatihan: [
      {
        tahap: 'Tahap 1: Latihan Menulis Potongan Kata Ghunnah',
        teksArab: 'أَنَّهُمْ — فَإِنَّ',
        instruksi: 'Tuliskan huruf alif tegak lurus, kemudian sambungkan nun dengan meletakkan titik dan tanda tasydid di atasnya dengan proporsional.'
      },
      {
        tahap: 'Tahap 2: Menulis Kalimat Q.S. Al-Baqarah: 103',
        teksArab: 'وَلَوْ أَنَّهُمْ آمَنُوا وَاتَّقَوْا لَمَثُوبَةٌ مِّنْ عِندِ اللَّهِ خَيْرٌ ۖ لَّوْ كَانُوا يَعْلَمُونَ',
        instruksi: 'Salinlah ayat ini secara bertahap pada buku tulis bergaris atau canvas latihan digital dengan memperhatikan jarak antar kata (spasi) yang rapi.'
      },
      {
        tahap: 'Tahap 3: Menulis Kalimat Q.S. Ali \'Imran: 76',
        teksArab: 'بَلَىٰ مَنْ أَوْفَىٰ بِعَهْدِهِ وَاتَّقَىٰ فَإِنَّ اللَّهَ يُحِبُّ الْمُتَّقِينَ',
        instruksi: 'Perhatikan penulisan alif maqshurah pada kata بَلَىٰ dan أَوْفَىٰ serta bentuk lafal jalalah اللَّهَ.'
      }
    ]
  },

  panduanMenghafalTahfidz: {
    metode: 'Metode Takrar 5x dan Simakan Pasangan',
    langkahLangkah: [
      {
        nomor: 1,
        judul: 'Pengecekan Bacaan Tartil (Tahsin Awal)',
        deskripsi: 'Sebelum mulai menghafal, bacalah ayat 3 kali dengan memperhatikan makhraj huruf dan hukum bacaan Ghunnah pada kata "annahum" dan "fa\'innallaha".'
      },
      {
        nomor: 2,
        judul: 'Memotong Ayat Menjadi Frasa Kecil',
        deskripsi: 'Bagi ayat menjadi 3 bagian: (1) Walau annahum āmanū wattaqaw, (2) Lamatsūbatum min \'indillāhi khair, (3) Lau kānū ya\'lamūn.'
      },
      {
        nomor: 3,
        judul: 'Metode Takrar (Ulang 5 Kali)',
        deskripsi: 'Ulangi frasa pertama sebanyak 5 kali tanpa melihat teks, lalu lanjutkan ke frasa kedua sebanyak 5 kali, kemudian gabungkan keduanya 5 kali.'
      },
      {
        nomor: 4,
        judul: 'Menghubungkan Lafal dengan Arti Mufradat',
        deskripsi: 'Hafalkan sambil membayangkan makna katanya: "annahum" (sungguh mereka), "āmanū" (beriman), "wattaqaw" (bertakwa).'
      },
      {
        nomor: 5,
        judul: 'Uji Mandiri (Tasmi\' / Rekam Suara)',
        deskripsi: 'Uji hafalanmu secara mandiri dengan merekam suara tilawah atau menyetorkan hafalan ke rekan sebangku (peer assessment).'
      }
    ]
  },

  hikmahKandunganAyat: [
    {
      nomor: 1,
      judul: 'Mendapatkan Cinta Allah SWT (Mahabbatullah)',
      dalil: 'Q.S. Ali \'Imran/3: 76 (فَإِنَّ اللَّهَ يُحِبُّ الْمُتَّقِينَ)',
      penjelasan: 'Puncak kebahagiaan seorang muslim adalah dicintai oleh Sang Pencipta. Cinta Allah akan mendatangkan ampunan dosa, pertolongan di saat sempit, dan ketenteraman batin yang tidak dapat dibeli dengan materi.'
    },
    {
      nomor: 2,
      judul: 'Pahala yang Jauh Lebih Baik daripada Kesenangan Duniawi',
      dalil: 'Q.S. Al-Baqarah/2: 103 (لَمَثُوبَةٌ مِّنْ عِندِ اللَّهِ خَيْرٌ)',
      penjelasan: 'Segala hal yang ada di dunia bersifat fana dan sementara. Balasan surga dan keridhaan Allah bagi hamba yang beriman dan bertakwa jauh lebih berharga daripada kekayaan, gelar, maupun ilmu sihir yang menyesatkan.'
    },
    {
      nomor: 3,
      judul: 'Integritas Diri dengan Selalu Menepati Janji (Wafa\' bil \'Ahdi)',
      dalil: 'Q.S. Ali \'Imran/3: 76 (مَنْ أَوْفَىٰ بِعَهْدِهِ وَاتَّقَىٰ)',
      penjelasan: 'Taqwa tidak hanya berkaitan dengan sholat atau puasa, tetapi dibuktikan dengan keteguhan menjaga janji, baik janji kepada Allah (syahadat dan ketaatan), janji kepada sesama (teman, guru, orang tua), maupun janji tugas sekolah.'
    },
    {
      nomor: 4,
      judul: 'Mawas Diri dan Takut Bermaksiat di Manapun Berada (Muraqabatullah)',
      dalil: 'H.R. At-Tirmidzi No. 1987 (اتَّقِ اللَّهَ حَيْثُمَا كُنْتَ)',
      penjelasan: 'Siswa yang bertakwa selalu menyadari bahwa Allah Maha Melihat (Al-Bashir) dan Maha Mengawasi (Ar-Raqib). Ia tidak akan berbuat curang saat ujian atau berkata buruk di media sosial meskipun guru atau orang tua tidak melihat.'
    },
    {
      nomor: 5,
      judul: 'Menjaga Lisan dan Kehormatan Sesama',
      dalil: 'H.R. Muslim No. 2564 & At-Tirmidzi No. 2004',
      penjelasan: 'Ketakwaan sejati melahirkan lisan yang santun, menolak ghibah, fitnah, dan perundungan (bullying). Rasulullah menegaskan bahwa penyebab terbanyak masuk surga adalah taqwa dan akhlak mulia.'
    },
    {
      nomor: 6,
      judul: 'Segera Menghapus Dosa dengan Amal Kebaikan',
      dalil: 'H.R. At-Tirmidzi No. 1987 (وَأَتْبِعِ السَّيِّئَةَ الْحَسَنَةَ تَمْحُهَا)',
      penjelasan: 'Ketika secara khilaf terjerumus dalam kesalahan, orang yang bertakwa tidak larut dalam keputusasaan, melainkan segera bertaubat, beristighfar, dan memperbanyak sedekah atau perbuatan baik untuk menghapusnya.'
    }
  ],

  penerapanPelajarPancasila: [
    {
      dimensi: 'Beriman, Bertakwa kepada Tuhan YME, dan Berakhlak Mulia',
      penerapan: 'Disiplin melaksanakan sholat tepat waktu, jujur dalam setiap ujian tanpa menyontek, dan selalu menepati janji tugas kelompok.'
    },
    {
      dimensi: 'Mandiri & Mawas Diri',
      penerapan: 'Mampu mengendalikan diri dari pergaulan negatif dan bijak menggunakan gadget tanpa harus selalu diawasi orang tua.'
    },
    {
      dimensi: 'Gotong Royong & Menjaga Persaudaraan',
      penerapan: 'Tidak merendahkan teman sekelas, saling membantu dalam kebaikan, dan menghormati hak setiap orang tanpa memandang perbedaan.'
    }
  ],

  kuisSoalHots: [
    {
      id: 'k6-1',
      pertanyaan: 'Pada lafal kata "وَلَوْ أَنَّهُمْ" dalam Q.S. Al-Baqarah ayat 103, terdapat hukum bacaan tajwid berupa Ghunnah Musyaddadah. Alasan terjadinya hukum tersebut adalah...',
      pilihan: [
        'Adanya huruf Nun bertasydid (نّ) di tengah kata',
        'Adanya huruf Mim bertasydid (مّ) di akhir kata',
        'Pertemuan huruf Nun sukun dengan huruf Ha',
        'Pertemuan tanwin dengan huruf Wawu'
      ],
      kunciJawaban: 0,
      pembahasan: 'Ghunnah Musyaddadah terjadi apabila ada huruf Nun bertasydid (نّ) atau Mim bertasydid (مّ). Pada kata "annahum" (أَنَّهُمْ), terdapat huruf Nun bertasydid sehingga wajib dibaca dengung sepanjang 2 harakat.',
      kategori: 'Tajwid Ghunnah'
    },
    {
      id: 'k6-2',
      pertanyaan: 'Dalam Q.S. Ali \'Imran ayat 76, Allah SWT mengaitkan ketakwaan dengan salah satu sifat luhur yang menjadi syarat mendapatkan cinta Allah. Sifat yang dimaksud adalah...',
      pilihan: [
        'Mencari harta sebanyak-banyaknya untuk bekal',
        'Menepati janji (wafa\' bil \'ahdi) dan menjaga amanah',
        'Menuntut ilmu sihir untuk melindungi diri',
        'Menjauhi interaksi dengan masyarakat luas'
      ],
      kunciJawaban: 1,
      pembahasan: 'Allah SWT berfirman: "Balā man aufā bi\'ahdihī wattaqā fa\'innallāha yuhibbul-muttaqīn" (Sebenarnya barangsiapa menepati janjinya dan bertakwa, maka sungguh Allah mencintai orang-orang yang bertakwa). Ayat ini menegaskan menepati janji adalah bukti nyata ketakwaan.',
      kategori: 'Kandungan Ayat'
    },
    {
      id: 'k6-3',
      pertanyaan: 'Berdasarkan hadits riwayat At-Tirmidzi No. 1987, sabda Rasulullah SAW "اتَّقِ اللَّهَ حَيْثُمَا كُنْتَ" (Ittaqillāha haitsumā kunta) mengajarkan kepada setiap muslim untuk...',
      pilihan: [
        'Hanya beribadah dengan tekun ketika berada di dalam masjid',
        'Bertakwa kepada Allah di manapun berada, baik saat ramai maupun sendirian',
        'Menghindari teman-teman yang berbuat kesalahan tanpa menasihati',
        'Mencari tempat terpencil agar tidak terpengaruh oleh lingkungan'
      ],
      kunciJawaban: 1,
      pembahasan: 'Sabda "Ittaqillāha haitsumā kunta" bermakna bertakwalah kepada Allah di mana pun engkau berada, baik saat dilihat orang lain maupun ketika seorang diri dalam kesunyian (muraqabatullah).',
      kategori: 'Hadits Taqwa'
    },
    {
      id: 'k6-4',
      pertanyaan: 'Perhatikan kata-kata mufradat berikut: (1) أَوْفَىٰ, (2) أَنَّهُمْ, (3) فَإِنَّ, (4) الْمُتَّقِينَ. Manakah di antara nomor tersebut yang memuat hukum bacaan Ghunnah Musyaddadah?',
      pilihan: [
        '(1) dan (2)',
        '(2) dan (3)',
        '(3) dan (4)',
        '(1) dan (4)'
      ],
      kunciJawaban: 1,
      pembahasan: 'Hukum Ghunnah Musyaddadah terdapat pada kata nomor (2) أَنَّهُمْ (Nun tasydid) dan nomor (3) فَإِنَّ (Nun tasydid). Sedangkan nomor (1) adalah mad layyin & mad thabi\'i, nomor (4) adalah alif lam qomariyah.',
      kategori: 'Mufradat'
    },
    {
      id: 'k6-5',
      pertanyaan: 'Seorang siswa berjanji akan membantu temannya belajar kelompok pada hari Minggu. Namun, di hari tersebut temannya mengajak bermain game online. Penerapan sikap taqwa sesuai Q.S. Ali \'Imran ayat 76 adalah...',
      pilihan: [
        'Memilih bermain game online karena lebih menyenangkan dan melupakan janjinya',
        'Mematikan ponsel dan berpura-pura lupa dengan janji yang telah dibuat',
        'Tetap menepati janji belajar kelompok terlebih dahulu karena menepati janji adalah bukti ketakwaan',
        'Menyuruh teman belajar kelompoknya untuk mencari teman lain saja'
      ],
      kunciJawaban: 2,
      pembahasan: 'Q.S. Ali \'Imran: 76 mewajibkan seorang mukmin yang bertakwa untuk menyempurnakan janjinya (aufā bi\'ahdihī). Menepati janji belajar kelompok mencerminkan integritas ketakwaan dan menjauhkan dari sifat ingkar janji.',
      kategori: 'Kandungan Ayat'
    }
  ]
};
