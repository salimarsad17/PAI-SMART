export interface DalilIkhlas {
  id: string;
  type: 'quran' | 'hadits';
  title: string;
  source: string;
  surahNumber?: number;
  verseNumber?: number;
  arabic: string;
  latin: string;
  translationKemenag: string;
  tafsirWajiz: string;
  audioUrl?: string;
  syarahHadits?: string;
}

export interface ContohPerilakuIkhlas {
  id: string;
  kategori: 'ibadah' | 'sekolah' | 'rumah' | 'masyarakat' | 'digital';
  judul: string;
  perilakuIkhlas: string;
  perilakuLawanRiya: string;
  alasanHikmah: string;
  indikatorKarakter: string;
}

export interface KuisIkhlasItem {
  id: string;
  skenario: string;
  pilihan: {
    id: string;
    teks: string;
  }[];
  jawabanBenar: string;
  penjelasan: string;
}

export const MATERI_KELAS_VII_SEM_1_BAB_3 = {
  babNumber: 3,
  grade: 'Kelas VII',
  semester: 'Semester 1',
  temaKurikulum: 'Menerapkan Makna Ikhlas dalam Kehidupan Sehari-hari',
  cpElement: 'Akhlak',
  pengantar:
    'Materi Bab 3 PAI & Budi Pekerti Kelas VII berfokus pada fondasi akhlak mulia dalam Islam: memahami hakikat ikhlas sebagai ruh setiap amal, menyelami dalil-dalil naqli Al-Qur’an dan Hadis sahih, meneladani perilaku ikhlas dalam kehidupan sehari-hari (ibadah, sekolah, rumah, pergaulan, dan era media sosial), serta meraih hikmah ketenteraman batin di dunia dan pahala amalan yang maqbul di akhirat.',

  // =========================================================================
  // SUB-BAB 1: PENGERTIAN IKHLAS
  // =========================================================================
  subBab1_PengertianIkhlas: {
    judul: '1. Pengertian Ikhlas secara Bahasa, Istilah, dan Hakikatnya',
    kedudukanIkhlas:
      'Ikhlas merupakan syarat mutlak diterimanya setiap amal ibadah dan perbuatan baik di sisi Allah Swt. Tanpa ikhlas, amalan sebesar gunung sekalipun akan sirna bagaikan debu yang diterbangkan angin kencang (Q.S. Al-Furqan: 23). Ikhlas adalah ruh dari sebuah amal, sedangkan amal tanpa keikhlasan laksana jasad mati tak bernyawa.',
    pengertianBahasa: {
      asalKata: 'خَلَصَ - يَخْلُصُ - خَلَاصًا - خُلُوْصًا (Khalaṣa - Yakhluṣu - Khalāṣan / Khulūṣan)',
      arti: 'Murni, bersih, jernih, suci dari segala campuran kotoran atau noda asing.',
      penjelasan:
        'Secara etimologi (bahasa), sesuatu dikatakan "khalas" apabila telah bersih dari segala unsur lain yang mengotorinya. Misalnya emas murni yang telah dibakar hingga terpisah dari kerak tembaga, atau susu murni yang suci dari kotoran dan darah sebagaimana firman Allah Swt. dalam Q.S. An-Nahl [16]: 66: "لَّبَنًا خَالِصًا سَآئِغًا لِّلشَّٰرِبِينَ" (Susu murni yang mudah diminum bagi orang yang meminumnya).'
    },
    pengertianIstilah: {
      lafalArab: 'تَصْفِيَةُ الْفِعْلِ عَنْ مُلَاحَظَةِ الْمَخْلُوْقِيْنَ وَابْتِغَاءُ وَجْهِ اللهِ وَحْدَهُ',
      transliterasi: 'Taṣfiyatul-fi‘li ‘an mulāḥaẓatil-makhlūqīna wabtigā’u wajhillāhi waḥdah',
      arti: 'Memurnikan niat dan tujuan perbuatan dari pandangan makhluk serta semata-mata mencari keridhaan Allah Swt.',
      penjelasan:
        'Secara istilah syariat, ikhlas adalah niat tulus dalam hati untuk menjadikan ketaatan, ibadah, dan seluruh perbuatan kebajikan hanya ditujukan kepada Allah Swt., tanpa mengharapkan pujian manusia (riya’), popularitas (sum‘ah), kedudukan duniawi, ataupun balasan materi.'
    },
    pendapatUlama: [
      {
        namaUlama: 'Imam Al-Ghazali rahimahullah (Kitab Ihyā’ ‘Ulūmiddīn)',
        kutipan:
          'Hakikat ikhlas adalah memurnikan niat dari segala macam kotoran motivasi duniawi. Jika suatu perbuatan terbebas dari dorongan mencari simpati manusia dan murni karena Allah, itulah ikhlas.',
        pelajaran: 'Ikhlas adalah penentu apakah amalan bernilai ibadah atau sekadar rutinitas lahiriah semata.'
      },
      {
        namaUlama: 'Imam Al-Fudhail bin ‘Iyadh rahimahullah',
        kutipan:
          'Meninggalkan amal karena manusia adalah riya’, beramal karena manusia adalah syirik, dan ikhlas adalah ketika Allah menyelamatkanmu dari keduanya.',
        pelajaran: 'Tafsir atas firman Allah Q.S. Al-Mulk: 2 "ayyukum aḥsanu ‘amalā": amalan terbaik adalah yang paling ikhlas (karena Allah) dan paling benar (sesuai sunnah Nabi).'
      },
      {
        namaUlama: 'Imam Al-Junaid Al-Baghdadi rahimahullah',
        kutipan:
          'Ikhlas adalah rahasia antara seorang hamba dengan Allah Swt.; malaikat tidak mengetahuinya sehingga tidak dapat mencatatnya, musuh (setan) tidak mengetahuinya sehingga tidak dapat merusaknya, dan hawa nafsu tidak mengetahuinya sehingga tidak dapat membelokkannya.',
        pelajaran: 'Ikhlas bertempat di relung hati terdalam yang hanya diketahui oleh Allah Swt. yang Maha Melihat niat.'
      }
    ],
    tingkatanIkhlas: [
      {
        tingkat: 'Tingkat 1: Ikhlas ‘Awam (Tingkat Dasar)',
        deskripsi:
          'Seseorang beribadah dan berbuat baik semata-mata karena Allah, namun di dalam hatinya masih disertai harapan mendapatkan pahala, masuk surga, disembuhkan dari sakit, dilapangkan rezeki, atau takut terhadap azab neraka.',
        status: 'Ibadahnya sah dan diterima di sisi Allah Swt. karena tetap memohon kepada Allah dan tidak menyekutukan-Nya dengan manusia.'
      },
      {
        tingkat: 'Tingkat 2: Ikhlas Khawāṣṣ (Tingkat Khusus)',
        deskripsi:
          'Seseorang beribadah kepada Allah Swt. bukan semata karena mengejar keuntungan dunia atau takut siksa, melainkan atas dasar rasa syukur, rasa malu, serta menunaikan hak penghambaan kepada Allah Yang Maha Pemurah.',
        status: 'Sebagaimana ungkapan Rasulullah SAW ketika salat malam hingga kakinya bengkak: "Afalā akūnu ‘abdan syakūrā?" (Tidakkah pantas aku menjadi hamba yang banyak bersyukur?).'
      },
      {
        tingkat: 'Tingkat 3: Ikhlas Khawāṣṣul Khawāṣṣ (Tingkat Tertinggi)',
        deskripsi:
          'Seseorang beribadah semata-mata karena cinta kepada Allah, memuliakan keagungan-Nya, dan memandang bahwa dirinya hanyalah hamba yang tidak memiliki andil apa pun; seluruh amalnya merupakan taufik dan karunia murni dari Allah Swt.',
        status: 'Ia sama sekali tidak merasa berjasa dan tidak memandang amalnya hebat, sehingga hatinya steril dari penyakit ‘ujub (bangga diri).'
      }
    ],
    tabelPerbandingan: [
      {
        aspek: 'Motivasi Utama',
        ikhlas: 'Hanya mengharap ridha dan cinta Allah Swt.',
        riya: 'Menginginkan pujian, apresiasi, dan sanjungan mata manusia.',
        sumah: 'Menceritakan amalan agar didengar dan dikagumi orang lain.',
        ujub: 'Kagum dan bangga pada kemampuan diri sendiri.'
      },
      {
        aspek: 'Kondisi saat Sendirian',
        ikhlas: 'Tetap khusyuk, bersemangat, dan menjaga integritas.',
        riya: 'Malas-malasan, berkurang kualitas ibadahnya jika tak ada yang melihat.',
        sumah: 'Mencari cara agar amalan di kesendirian diketahui publik.',
        ujub: 'Merasa diri lebih suci dan lebih bertakwa dari orang lain.'
      },
      {
        aspek: 'Dampak terhadap Pahala',
        ikhlas: 'Amal diterima (maqbul) dan berlipat ganda.',
        riya: 'Pahala gugur dan terancam dosa syirik kecil (syirik asghar).',
        sumah: 'Pahala amalan hangus dan menuai murka Allah.',
        ujub: 'Menghapus nilai amalan dan mendatangkan kesombongan.'
      },
      {
        aspek: 'Reaksi saat Dicela / Tak Dipuji',
        ikhlas: 'Tetap tenang dan konsisten beramal (istiqamah).',
        riya: 'Kecewa, marah, atau berhenti berbuat baik.',
        sumah: 'Merasa tidak dihargai dan mencari pengakuan baru.',
        ujub: 'Meremehkan orang yang mencela karena merasa diri paling benar.'
      }
    ]
  },

  // =========================================================================
  // SUB-BAB 2: DALIL NAQLI IKHLAS
  // =========================================================================
  subBab2_DalilNaqli: {
    judul: '2. Dalil-Dalil Naqli Al-Qur’an dan Hadis Sahih tentang Ikhlas',
    pengantar:
      'Perintah untuk ikhlas ditegaskan berulang kali di dalam ayat-ayat Al-Qur’an Al-Karim dan sunnah Rasulullah SAW sebagai landasan hukum syar’i yang tidak dapat ditawar.',
    dalilQuran: [
      {
        id: 'dalil-quran-bayyinah-5',
        type: 'quran' as const,
        title: 'Q.S. Al-Bayyinah [98] Ayat 5',
        source: 'Al-Qur’an Surah Al-Bayyinah Ayat 5',
        surahNumber: 98,
        verseNumber: 5,
        arabic:
          'وَمَآ أُمِرُوٓا۟ إِلَّا لِيَعْبُدُوا۟ ٱللَّهَ مُخْلِصِينَ لَهُ ٱلدِّينَ حُنَفَآءَ وَيُقِيمُوا۟ ٱلصَّلَوٰةَ وَيُؤْتُوا۟ ٱلزَّكَوٰةَ ۚ وَذَٰلِكَ دِينُ ٱلْقَيِّمَةِ',
        latin:
          'Wa mā umirū illā liya‘budullāha mukhliṣīna lahud-dīna ḥunafā’a wa yuqīmuṣ-ṣalāta wa yu’tuz-zakāta wa żālika dīnul-qayyimah.',
        translationKemenag:
          'Padahal mereka tidak diperintahkan melainkan agar menyembah Allah dengan memurnikan ketaatan kepada-Nya dalam (menjalankan) agama yang lurus, dan agar mereka mendirikan salat dan menunaikan zakat; dan yang demikian itulah agama yang lurus.',
        tafsirWajiz:
          'Ayat ini menegaskan bahwa esensi seluruh ajaran para nabi dan rasul sejak zaman dahulu hingga Nabi Muhammad SAW bermuara pada satu perintah: beribadah hanya kepada Allah dengan ikhlas murni (mukhliṣīn), menjauhi segala bentuk syirik dan kesesatan (ḥunafā’), serta mendirikan salat dan zakat sebagai manifestasi ketaatan yang lurus.',
        audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/098005.mp3'
      },
      {
        id: 'dalil-quran-anam-162-163',
        type: 'quran' as const,
        title: 'Q.S. Al-An‘ām [6] Ayat 162-163',
        source: 'Al-Qur’an Surah Al-An‘ām Ayat 162-163',
        surahNumber: 6,
        verseNumber: 162,
        arabic:
          'قُلْ إِنَّ صَلَاتِى وَنُسُكِى وَمَحْيَاىَ وَمَمَاتِى لِلَّهِ رَبِّ ٱلْعَـٰلَمِينَ ۝ لَا شَرِيكَ لَهُۥ ۖ وَبِذَٰلِكَ أُمِرْتُ وَأَنَا۠ أَوَّلُ ٱلْمُسْلِمِينَ',
        latin:
          'Qul inna ṣalātī wa nusukī wa maḥyāya wa mamātī lillāhi rabbil-‘ālamīn. Lā syarīka lahū wa biżālika umirtu wa anā awwalul-muslimīn.',
        translationKemenag:
          'Katakanlah (Muhammad): "Sesungguhnya salatku, ibadahku, hidupku dan matiku hanyalah untuk Allah, Tuhan semesta alam. Tiada sekutu bagi-Nya; dan demikian itulah yang diperintahkan kepadaku dan aku adalah orang yang pertama-tama berserah diri (muslim)."',
        tafsirWajiz:
          'Ayat ini merupakan ikrar kepasrahan dan keikhlasan total yang selalu kita baca dalam doa Iftitah salat. Seorang muslim menyerahkan seluruh detak nadi kehidupannya—salat, pengorbanan, aktivitas harian, hingga kematiannya—hanya demi keridhaan Allah Swt. tanpa menyekutukan-Nya sedikit pun.',
        audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/006162.mp3'
      },
      {
        id: 'dalil-quran-zumar-2-3',
        type: 'quran' as const,
        title: 'Q.S. Az-Zumar [39] Ayat 2-3 & 11',
        source: 'Al-Qur’an Surah Az-Zumar Ayat 2, 3 & 11',
        surahNumber: 39,
        verseNumber: 2,
        arabic:
          'إِنَّآ أَنزَلْنَآ إِلَيْكَ ٱلْكِتَـٰبَ بِٱلْحَقِّ فَٱعْبُدِ ٱللَّهَ مُخْلِصًۭا لَّهُ ٱلدِّينَ ۝ أَلَا لِلَّهِ ٱلدِّينُ ٱلْخَالِصُ',
        latin:
          'Innā anzalnā ilaikal-kitāba bil-ḥaqqi fa‘budillāha mukhliṣal lahud-dīn. Alā lillāhid-dīnul-khāliṣ.',
        translationKemenag:
          'Sesungguhnya Kami menurunkan Kitab (Al-Qur’an) kepadamu dengan membawa kebenaran. Maka sembahlah Allah dengan memurnikan ketaatan kepada-Nya. Ingatlah, hanya milik Allah-lah agama yang bersih (dari syirik).',
        tafsirWajiz:
          'Allah Swt. menegaskan bahwa Al-Qur’an turun dengan kebenaran mutlak. Konsekuensinya, pengabdian dan ibadah seorang hamba harus bersih dari segala noda kemusyrikan dan riya’. Allah hanya menerima agama dan amalan yang murni (al-khāliṣ).',
        audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/039002.mp3'
      },
      {
        id: 'dalil-quran-insan-8-9',
        type: 'quran' as const,
        title: 'Q.S. Al-Insān [76] Ayat 8-9',
        source: 'Al-Qur’an Surah Al-Insān Ayat 8-9',
        surahNumber: 76,
        verseNumber: 9,
        arabic:
          'وَيُطْعِمُونَ ٱلطَّعَامَ عَلَىٰ حُبِّهِۦ مِسْكِينًۭا وَيَتِيمًۭا وَأَسِيرًا ۝ إِنَّمَا نُطْعِمُكُمْ لِوَجْهِ ٱللَّهِ لَا نُرِيدُ مِنكُمْ جَزَآءًۭ وَلَا شُكُورًا',
        latin:
          'Wa yuṭ‘imūnaṭ-ṭa‘āma ‘alā ḥubbihī miskīnaw wa yatīmaw wa asīrā. Innamā nuṭ‘imukum liwajhillāhi lā nurīdu minkum jazā’aw wa lā syukūrā.',
        translationKemenag:
          'Dan mereka memberikan makanan yang disukainya kepada orang miskin, anak yatim dan orang yang ditawan. (Sambil berkata dalam hati): "Sesungguhnya kami memberi makanan kepadamu hanyalah karena mengharapkan keridhaan Allah, kami tidak mengharapkan balasan dan tidak pula (ucapan) terima kasih darimu."',
        tafsirWajiz:
          'Potret keteladanan tertinggi orang-orang yang berbuat ikhlas dalam ranah sosial kemanusiaan. Mereka bersedekah dengan harta terbaik tanpa menuntut balas budi atau bahkan sekadar ucapan terima kasih dari orang yang dibantu.',
        audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/076009.mp3'
      }
    ],
    dalilHadits: [
      {
        id: 'hadits-niat-bukhari-1',
        type: 'hadits' as const,
        title: 'Hadis 1: Amalan Bergantung pada Niat (HR. Bukhari & Muslim)',
        source: 'HR. Bukhari No. 1 & Muslim No. 1907 dari Umar bin Al-Khattab r.a.',
        arabic:
          'إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى، فَمَنْ كَانَتْ هِجْرَتُهُ إِلَى دُنْيَا يُصِيبُهَا، أَوْ إِلَى امْرَأَةٍ يَنْكِحُهَا، فَهِجْرَتُهُ إِلَى مَا هَاجَرَ إِلَيْهِ',
        latin:
          'Innamal-a‘mālu bin-niyyāt, wa innamā likullimri’im mā nawā, faman kānat hijratuhū ilā dunyā yuṣībuhā aw ilamra’atin yankīḥuhā fahijratuhū ilā mā hājara ilaih.',
        translationKemenag:
          'Sesungguhnya setiap amalan bergantung pada niatnya, dan setiap orang akan mendapatkan sesuai dengan apa yang ia niatkan. Barangsiapa hijrahnya karena (mencari keuntungan) dunia yang ingin diperolehnya atau karena perempuan yang ingin dinikahinya, maka hijrahnya itu kepada apa yang ia tuju.',
        tafsirWajiz:
          'Hadis ini adalah sepertiga dari seluruh pilar ilmu Islam. Suatu amal perbuatan yang secara lahiriah tampak mulia (seperti hijrah bersama Nabi) bisa menjadi tak bernilai pahala jika motivasinya terbelokkan untuk mengejar materi duniawi atau wanita semata.',
        syarahHadits:
          'Imam Asy-Syafi’i dan Imam Ahmad menegaskan bahwa hadis ini mencakup 70 bab ilmu fikih. Niat adalah pembeda antara kebiasaan adat (misal: mandi segar vs mandi wajib) dan pembeda tujuan ibadah (karena Allah vs karena manusia).'
      },
      {
        id: 'hadits-hati-dan-amal-muslim-2564',
        type: 'hadits' as const,
        title: 'Hadis 2: Allah Menilai Hati dan Amal Perbuatan (HR. Muslim)',
        source: 'HR. Muslim No. 2564 dari Abu Hurairah r.a.',
        arabic:
          'إِنَّ اللهَ لَا يَنْظُرُ إِلَى صُوَرِكُمْ وَأَمْوَالِكُمْ، وَلَكِنْ يَنْظُرُ إِلَى قُلُوبِكُمْ وَأَعْمَالِكُمْ',
        latin:
          'Innallāha lā yanẓuru ilā ṣuwarikum wa amwālikum, wa lākin yanẓuru ilā qulūbikum wa a‘mālikum.',
        translationKemenag:
          'Sesungguhnya Allah tidak melihat kepada rupa kalian dan harta kekayaan kalian, melainkan Dia melihat kepada hati kalian dan amal perbuatan kalian.',
        tafsirWajiz:
          'Allah Swt. tidak silau oleh paras wajah tampan/cantik, pakaian mahal, atau kekayaan duniawi. Yang menjadi tolok ukur kemuliaan seorang hamba di sisi Allah adalah kebersihan hati dari noda riya’ (keikhlasan) serta kesesuaian amal perbuatannya dengan syariat.',
        syarahHadits:
          'Hati adalah tempat bersemayamnya niat dan keikhlasan. Menjaga kemurnian hati dari sifat sombong dan pamer jauh lebih utama daripada sekadar memoles penampilan fisik luar.'
      },
      {
        id: 'hadits-amal-diterima-nasai-3140',
        type: 'hadits' as const,
        title: 'Hadis 3: Syarat Diterimanya Amal (HR. An-Nasa’i)',
        source: 'HR. An-Nasa’i No. 3140 dari Abu Umamah Al-Bahili r.a. (Sanad Hasan Sahih)',
        arabic:
          'إِنَّ اللهَ لَا يَقْبَلُ مِنَ الْعَمَلِ إِلَّا مَا كَانَ لَهُ خَالِصًا وَابْتُغِيَ بِهِ وَجْهُهُ',
        latin:
          'Innallāha lā yaqbalu minal-‘amali illā mā kāna lahū khāliṣan wabtugi ya bihī wajhuh.',
        translationKemenag:
          'Sesungguhnya Allah tidak akan menerima suatu amal perbuatan melainkan yang murni hanya untuk-Nya dan semata-mata mencari keridhaan-Nya.',
        tafsirWajiz:
          'Hadis ini menjadi kaidah emas dalam ibadah: amalan yang bercampur dengan niat ingin dipuji, pamrih imbalan, atau mencari popularitas akan langsung ditolak oleh Allah Swt.',
        syarahHadits:
          'Dalam hadis qudsi riwayat Muslim No. 2985, Allah berfirman: "Aku adalah Dzat yang paling tidak membutuhkan sekutu. Barangsiapa melakukan suatu amalan yang di dalamnya menyekutukan Aku dengan selain-Ku, niscaya Aku tinggalkan dia dan kesyirikannya."'
      },
      {
        id: 'hadits-tiga-golongan-hisab-muslim-1905',
        type: 'hadits' as const,
        title: 'Hadis 4: Tiga Golongan Pertama yang Dihisab (HR. Muslim)',
        source: 'HR. Muslim No. 1905 dari Abu Hurairah r.a.',
        arabic:
          'إِنَّ أَوَّلَ النَّاسِ يُقْضَى يَوْمَ الْقِيَامَةِ عَلَيْهِ: رَجُلٌ اسْتُشْهِدَ... وَرَجُلٌ تَعَلَّمَ الْعِلْمَ وَعَلَّمَهُ وَقَرَأَ الْقُرْآنَ... وَرَجُلٌ وَسَّعَ اللهُ عَلَيْهِ وَأَعْطَاهُ مِنْ أَصْنَافِ الْمَالِ كُلِّهِ...',
        latin:
          'Inna awwalan-nāsi yuqḍā yaumal-qiyāmati ‘alaih: rajulun-istusyhid... wa rajulun ta‘allamal-‘ilma wa ‘allamahū wa qara’al-qur’ān... wa rajulun wassa‘allāhu ‘alaih...',
        translationKemenag:
          'Tiga orang pertama yang diadili pada hari kiamat: (1) Orang yang mati di medan perang, tapi niatnya agar disebut pemberani; (2) Orang yang belajar ilmu dan membaca Al-Qur’an, tapi niatnya agar disebut orang alim dan qari; (3) Orang yang bersedekah, tapi niatnya agar disebut dermawan. Ketiganya dicampakkan ke dalam neraka.',
        tafsirWajiz:
          'Peringatan paling dahsyat tentang bahaya riya’ dan hilangnya keikhlasan. Meskipun amalan yang dikerjakan sangat agung (jihad, membaca Al-Qur’an, sedekah berlimpah), namun karena niatnya bukan untuk Allah melainkan mencari pujian duniawi, mereka menjadi golongan pertama yang diseret ke neraka.',
        syarahHadits:
          'Abu Hurairah r.a. sampai pingsan tiga kali saat hendak menyampaikan hadis ini kepada para sahabat karena saking takut dan gemetar terhadap betapa beratnya hisab niat di akhirat.'
      }
    ]
  },

  // =========================================================================
  // SUB-BAB 3: CONTOH PERILAKU IKHLAS
  // =========================================================================
  subBab3_ContohPerilaku: {
    judul: '3. Contoh Perilaku Ikhlas dalam Berbagai Ranah Kehidupan',
    pengantar:
      'Ikhlas bukan sekadar teori di atas lembaran kertas, melainkan karakter aktif yang tercermin dalam perbuatan nyata siswa di sekolah, rumah, pergaulan, ibadah, dan era digital.',
    daftarPerilaku: [
      {
        id: 'p-ibadah-1',
        kategori: 'ibadah' as const,
        judul: 'Kualitas Salat Sendirian Sama Khusyuknya dengan saat Berjamaah',
        perilakuIkhlas:
          'Mengerjakan salat fardu maupun sunnah di dalam kamar yang tertutup dengan thuma’ninah, tartil, dan khusyuk, sama baiknya saat salat diimami di masjid sekolah.',
        perilakuLawanRiya:
          'Salat tergesa-gesa saat sendirian, namun mendadak memanjangkan sujud dan memperindah rukuk ketika dilihat guru atau teman.',
        alasanHikmah: 'Menyadari bahwa Allah Swt. senantiasa mengawasi hamba-Nya di manapun berada (muraqabah).',
        indikatorKarakter: 'Integritas Beribadah'
      },
      {
        id: 'p-ibadah-2',
        kategori: 'ibadah' as const,
        judul: 'Bersedekah Sembunyi-sembunyi',
        perilakuIkhlas:
          'Memasukkan uang saku ke kotak amal masjid atau celengan yatim tanpa memperlihatkan nominalnya kepada teman, menerapkan prinsip tangan kanan memberi tangan kiri tak tahu.',
        perilakuLawanRiya:
          'Mengibaskan uang kertas pecahan besar sebelum dimasukkan ke kotak infak agar dilihat dan dipuji teman sekelas.',
        alasanHikmah: 'Menjaga kemurnian pahala dan melindungi kehormatan orang yang menerima bantuan.',
        indikatorKarakter: 'Kedermawanan Tulus'
      },
      {
        id: 'p-sekolah-1',
        kategori: 'sekolah' as const,
        judul: 'Melaksanakan Piket Kebersihan Kelas dengan Sungguh-sungguh',
        perilakuIkhlas:
          'Menyapu lantai, membersihkan papan tulis, dan merapikan meja guru saat giliran piket dengan penuh tanggung jawab, baik guru sudah hadir maupun belum tiba di kelas.',
        perilakuLawanRiya:
          'Hanya pura-pura memegang sapu ketika ada wali kelas lewat di depan pintu, lalu duduk mengobrol saat guru pergi.',
        alasanHikmah: 'Menjaga kebersihan adalah bagian dari iman dan melatih kejujuran amanah.',
        indikatorKarakter: 'Tanggung Jawab & Disiplin'
      },
      {
        id: 'p-sekolah-2',
        kategori: 'sekolah' as const,
        judul: 'Membantu Teman Belajar Tanpa Pamrih',
        perilakuIkhlas:
          'Ikhlas menjelaskan materi matematika atau bahasa Arab kepada teman yang kesulitan memahami pelajaran tanpa meminta imbalan uang, traktiran jajanan, atau jasa balas budi.',
        perilakuLawanRiya:
          'Hanya mau mengajari teman jika dijanjikan dibelikan jajan di kantin atau menuntut pujian "kamu pintar sekali".',
        alasanHikmah: 'Berbagi ilmu adalah sedekah jariyah yang justru akan semakin memperkuat pemahaman ilmu diri sendiri.',
        indikatorKarakter: 'Gemar Berbagi Ilmu'
      },
      {
        id: 'p-sekolah-3',
        kategori: 'sekolah' as const,
        judul: 'Menghormati Guru dengan Tulus Bukan demi Cari Muka',
        perilakuIkhlas:
          'Menyapa, mencium tangan guru dengan takzim, mendengarkan nasihat, dan mendoakan kebaikan bagi bapak/ibu guru setiap hari atas dasar rasa hormat tulus.',
        perilakuLawanRiya:
          'Hanya bersikap manis dan berlebihan mencari perhatian guru saat menjelang pembagian rapor demi mendapat dongkrakan nilai sikap.',
        alasanHikmah: 'Keberkahan ilmu seorang murid sangat bergantung pada keridhaan dan keikhlasan doa bapak/ibu guru.',
        indikatorKarakter: 'Adab terhadap Pendidik'
      },
      {
        id: 'p-rumah-1',
        kategori: 'rumah' as const,
        judul: 'Membantu Pekerjaan Orang Tua Tanpa Menggerutu',
        perilakuIkhlas:
          'Mencuci piring sendiri, menyapu rumah, menjaga adik, atau membuang sampah atas inisiatif pribadi tanpa perlu disuruh berulang kali dan tanpa meminta imbalan uang jajan.',
        perilakuLawanRiya:
          'Menggerutu dan cemberut saat diminta tolong ibu, atau baru mau membantu jika diberi upah uang jajan tambahan.',
        alasanHikmah: 'Berbakti kepada kedua orang tua (birrul walidain) adalah pintu surga yang paling tengah.',
        indikatorKarakter: 'Birrul Walidain'
      },
      {
        id: 'p-rumah-2',
        kategori: 'rumah' as const,
        judul: 'Berbagi dengan Saudara Kandung dengan Lapang Hati',
        perilakuIkhlas:
          'Membagi makanan, camilan, atau meminjamkan barang kesayangan kepada adik atau kakak tanpa pamrih dan tidak mengungkit-ungkit di masa depan.',
        perilakuLawanRiya:
          'Hanya mau berbagi jika ada orang tua di depan mata agar dipuji sebagai anak teladan, lalu merebutnya kembali saat orang tua pergi.',
        alasanHikmah: 'Membangun keharmonisan keluarga yang diridhai Allah Swt.',
        indikatorKarakter: 'Kasih Sayang Keluarga'
      },
      {
        id: 'p-masyarakat-1',
        kategori: 'masyarakat' as const,
        judul: 'Ikut Kerja Bakti Lingkungan Tanpa Menunggu Diabsen',
        perilakuIkhlas:
          'Ikut serta dalam kegiatan gotong royong membersihkan saluran air atau masjid kampung dengan sukarela tanpa memikirkan apakah namanya dicatat oleh ketua RT.',
        perilakuLawanRiya:
          'Hanya hadir sebentar saat foto bersama dokumentasi kegiatan kerja bakti, lalu pulang saat kerja fisik dimulai.',
        alasanHikmah: 'Membantu kemaslahatan umat bernilai sedekah sosial.',
        indikatorKarakter: 'Kepedulian Sosial'
      },
      {
        id: 'p-masyarakat-2',
        kategori: 'masyarakat' as const,
        judul: 'Memaafkan Kesalahan Teman Tanpa Menyimpan Dendam',
        perilakuIkhlas:
          'Memaafkan kekhilafan teman yang pernah mengejek atau berbuat salah secara tulus demi menjaga ukhuwah islamiyah tanpa berniat membalas dendam.',
        perilakuLawanRiya:
          'Mengaku memaafkan di depan orang banyak tetapi di belakang tetap membicarakan keburukannya dan mengungkit kesalahan lamanya.',
        alasanHikmah: 'Orang yang pemaaf dijanjikan ampunan dan kemuliaan derajat oleh Allah Swt.',
        indikatorKarakter: 'Toleransi & Pemaaf'
      },
      {
        id: 'p-digital-1',
        kategori: 'digital' as const,
        judul: 'Tidak Pamer Ibadah di Media Sosial',
        perilakuIkhlas:
          'Menjaga amalan ibadah pribadi (seperti salat tahajud, tilawah Al-Qur’an, buka puasa sunnah, atau infak) tetap menjadi rahasia antara diri sendiri dan Allah Swt.',
        perilakuLawanRiya:
          'Membuat konten video/status media sosial bertuliskan: "Alhamdulillah selesai tahajud 11 rakaat, lanjut tadarus juz 15" demi mengumpulkan likes, followers, dan sanjungan alim.',
        alasanHikmah: 'Memperlihatkan ibadah privat di medsos sangat rentan tergelincir pada riya’ dan sum‘ah yang menghapus pahala.',
        indikatorKarakter: 'Literasi Digital Spiritual'
      },
      {
        id: 'p-digital-2',
        kategori: 'digital' as const,
        judul: 'Membagikan Konten Kebaikan Tanpa Tergila-gila Algoritma Pujian',
        perilakuIkhlas:
          'Membagikan pesan motivasi belajar, ayat Al-Qur’an, atau hadis sahih dengan niat menebarkan faedah ilmu, tetap bersyukur meski sedikit yang merespons atau menyukai.',
        perilakuLawanRiya:
          'Merasa kecewa berat, marah, atau menghapus postingan nasihat baik hanya karena sepi likes dan tidak viral.',
        alasanHikmah: 'Pahala dakwah diukur dari keikhlasan dan kebenaran pesan, bukan dari jumlah penonton (viewers).',
        indikatorKarakter: 'Dakwah Digital Santun'
      }
    ]
  },

  // =========================================================================
  // SUB-BAB 4: MANFAAT DAN HIKMAH IKHLAS
  // =========================================================================
  subBab4_ManfaatDanHikmah: {
    judul: '4. Manfaat dan Hikmah Keikhlasan di Dunia dan Akhirat',
    pengantar:
      'Sikap ikhlas menghadirkan keberkahan luar biasa yang dampaknya dapat dirasakan langsung dalam ketenangan jiwa di dunia maupun keselamatan hakiki di akhirat kelak.',
    manfaatDuniawi: [
      {
        no: 1,
        judul: 'Hati Menjadi Tenang, Tenteram, dan Bebas dari Tekanan Stres',
        deskripsi:
          'Orang yang ikhlas tidak bergantung pada penilaian manusia. Ia tidak akan patah hati saat dicela, dan tidak akan mabuk kepayang saat dipuji, karena standarnya hanyalah keridhaan Allah Swt.'
      },
      {
        no: 2,
        judul: 'Terlindungi dari Tipu Daya dan Jerat Setan',
        deskripsi:
          'Iblis sendiri mengakui dalam sumpahnya di hadapan Allah bahwa ia tidak berdaya menggoda hamba-hamba Allah yang mukhlis: "إِلَّا عِبَادَكَ مِنْهُمُ الْمُخْلَصِينَ" (Kecuali hamba-hamba-Mu yang ikhlas di antara mereka - Q.S. Al-Hijr: 40).'
      },
      {
        no: 3,
        judul: 'Mendatangkan Pertolongan Allah di Saat Genting',
        deskripsi:
          'Sebagaimana hadis masyhur tentang tiga orang yang terperangkap di dalam gua tertutup batu besar. Mereka bertawasul dengan amal ikhlas masing-masing (berbakti pada orang tua, meninggalkan zina karena takut Allah, dan mengembalikan upah buruh secara jujur), sehingga Allah menggeser batu tersebut hingga mereka selamat (HR. Bukhari & Muslim).'
      },
      {
        no: 4,
        judul: 'Terciptanya Hubungan Sosial yang Harmonis dan Damai',
        deskripsi:
          'Pergaulan yang dilandasi keikhlasan tidak akan diwarnai penyakit sakit hati, iri dengki (hasad), atau saling mengungkit jasa (al-mann). Kerjasama kelompok menjadi tulus dan produktif.'
      },
      {
        no: 5,
        judul: 'Menumbuhkan Sikap Konsisten dan Istiqamah dalam Berbuat Baik',
        deskripsi:
          'Karena tidak menunggu sorak tepuk tangan manusia, orang yang ikhlas akan terus tekun belajar, berprestasi, dan berakhlak terpuji dalam kondisi apa pun, baik ada pengawas maupun tanpa pengawas.'
      }
    ],
    manfaatUkhrawi: [
      {
        no: 1,
        judul: 'Diterimanya Amal Ibadah di Sisi Allah Swt. (Amal Maqbul)',
        deskripsi:
          'Ikhlas adalah kunci pembuka pintu penerimaan amal. Ibadah yang sedikit namun ikhlas jauh lebih bernilai di sisi Allah daripada amalan menggunung yang bercampur riya’.'
      },
      {
        no: 2,
        judul: 'Pelipatgandaan Pahala Kebaikan Tanpa Batas',
        deskripsi:
          'Allah Swt. melipatgandakan pahala amalan ikhlas dari sepuluh kali lipat hingga tujuh ratus kali lipat, bahkan tak terhingga sesuai dengan kadar kemurnian niat pelakunya (Q.S. Al-Baqarah: 261).'
      },
      {
        no: 3,
        judul: 'Mendapatkan Naungan Arasy Allah di Hari Kiamat',
        deskripsi:
          'Salah satu dari 7 golongan yang dinaungi Allah pada hari kiamat adalah seseorang yang bersedekah dengan sembunyi-sembunyi hingga tangan kirinya tidak mengetahui apa yang diinfakkan oleh tangan kanannya (HR. Bukhari & Muslim).'
      },
      {
        no: 4,
        judul: 'Selamat dari Azab Neraka dan Masuk Surga dengan Rahmat Allah',
        deskripsi:
          'Orang yang berhati mukhlis dijauhkan dari siksa syirik kecil dan dimasukkan ke dalam surga yang penuh kenikmatan abadi karena kesucian tauhid dan niatnya.'
      }
    ],
    bahayaRiyaDanSumah: [
      {
        bahaya: 'Termasuk Syirik Asyghar (Syirik Kecil)',
        dalil: 'HR. Ahmad dari Mahmud bin Labid r.a.: "Sesungguhnya yang paling aku takutkan atas kalian adalah syirik kecil, yaitu riya’."',
        penjelasan: 'Dikatakan syirik kecil karena pelakunya mempersekutukan Allah dengan makhluk dalam niat mencari pengakuan dan pujian.'
      },
      {
        bahaya: 'Menghanguskan Pahala Amal Kebaikan (Ihbāṭul A‘māl)',
        dalil: 'Q.S. Al-Baqarah: 264: "Hai orang-orang yang beriman, janganlah kamu menghilangkan (pahala) sedekahmu dengan menyebut-nyebutnya dan menyakiti (perasaan si penerima), seperti orang yang menafkahkan hartanya karena riya’ kepada manusia..."',
        penjelasan: 'Amal yang disertai riya’ ibarat batu licin berlapis tanah tipis yang disiram hujan lebat; seketika bersih lenyap tanpa tersisa sedikit pun.'
      },
      {
        bahaya: 'Mendapat Hina dan Cela di Hari Kiamat',
        dalil: 'HR. Muslim: Pelaku riya’ akan dipanggil di hadapan seluruh makhluk sebagai orang yang berbohong dan diseret dengan wajah tertelungkup ke dalam api neraka.',
        penjelasan: 'Pujian semu manusia di dunia berubah menjadi kehinaan mutlak di mahkamah Ilahi.'
      }
    ]
  },

  // =========================================================================
  // SUB-BAB 5: KUIS DAN SKENARIO KASUS INTERAKTIF
  // =========================================================================
  kuisInteraktif: [
    {
      id: 'kuis-1',
      skenario:
        'Ahmad selalu rajin menyapu dan mengepel ruang kelas saat ada guru wali kelas yang mengawasi. Namun saat guru sedang rapat dan ruangan hanya ada murid-murid, Ahmad langsung melempar sapunya dan asyik bermain game di ponsel. Tindakan Ahmad mencerminkan...',
      pilihan: [
        { id: 'a', teks: 'Ikhlas tingkat awam karena masih mau menyapu saat ada guru' },
        { id: 'b', teks: 'Perilaku riya’ karena hanya beramal rajin saat dipantau oleh manusia' },
        { id: 'c', teks: 'Sikap istiqamah dalam menjaga kebersihan kelas' },
        { id: 'd', teks: 'Tawadhu’ karena tidak ingin merepotkan teman sekelas' }
      ],
      jawabanBenar: 'b',
      penjelasan:
        'Ahmad menunjukkan sikap riya’ (pamer perbuatan). Ciri utama riya’ adalah rajin dan bersemangat saat dilihat orang, namun malas dan enggan berbuat baik ketika sendirian atau tanpa pengawasan manusia.'
    },
    {
      id: 'kuis-2',
      skenario:
        'Dalam Q.S. Al-Bayyinah ayat 5 terdapat lafal "وَمَآ أُمِرُوٓا۟ إِلَّا لِيَعْبُدُوا۟ ٱللَّهَ مُخْلِصِينَ لَهُ ٱلدِّينَ حُنَفَآءَ". Makna kata "مُخْلِصِينَ" (mukhliṣīn) dalam ayat tersebut adalah...',
      pilihan: [
        { id: 'a', teks: 'Orang-orang yang memurnikan ketaatan dan niat ibadah hanya kepada Allah Swt.' },
        { id: 'b', teks: 'Orang-orang yang beribadah secara beramai-ramai di tempat umum' },
        { id: 'c', teks: 'Orang-orang yang mengharapkan balasan uang dari masyarakat' },
        { id: 'd', teks: 'Orang-orang yang membaca Al-Qur’an dengan suara paling keras' }
      ],
      jawabanBenar: 'a',
      penjelasan:
        'Lafal "مُخْلِصِينَ لَهُ الدِّينَ" (mukhliṣīna lahud-dīn) bermakna memurnikan seluruh ketaatan, kepatuhan, dan ibadah hanya semata-mata ditujukan kepada Allah Swt. tanpa menyekutukan-Nya dengan apa pun.'
    },
    {
      id: 'kuis-3',
      skenario:
        'Fatimah menginfakkan sebagian uang sakunya untuk pembangunan musala sekolah. Sepulang sekolah, ia mengunggah foto kuitansi infaknya ke status WhatsApp dengan tulisan "Alhamdulillah semoga berkah sedekah hari ini, yuk teman-teman tiru aku ya!". Ditinjau dari ajaran ikhlas, tindakan Fatimah berisiko...',
      pilihan: [
        { id: 'a', teks: 'Mendapat pahala berlipat ganda karena mengajak orang lain' },
        { id: 'b', teks: 'Tergelincir pada sifat sum’ah dan riya’ yang dapat menghanguskan pahala sedekah' },
        { id: 'c', teks: 'Otomatis menjadi kafir keluar dari agama Islam' },
        { id: 'd', teks: 'Menjadi teladan mutlak yang wajib dicontoh seluruh siswa' }
      ],
      jawabanBenar: 'b',
      penjelasan:
        'Mempublikasikan amalan sedekah pribadi ke media sosial sangat rentan merusak keikhlasan hati dan menjerumuskan pada penyakit sum‘ah (mencari sensasi agar didengar orang) serta riya’ (pamer), yang dapat menggugurkan pahala amalan tersebut.'
    },
    {
      id: 'kuis-4',
      skenario:
        'Hadis riwayat Imam Muslim No. 1905 menceritakan tentang tiga golongan pertama yang diseret dan diadili pada hari kiamat. Ketiga golongan tersebut adalah mujahid, ahli Al-Qur’an/ilmu, dan orang dermawan. Penyebab utama mereka dimasukkan ke neraka adalah...',
      pilihan: [
        { id: 'a', teks: 'Karena mereka tidak pernah mendirikan salat lima waktu' },
        { id: 'b', teks: 'Karena amalan besar mereka dikerjakan demi mencari pujian manusia, bukan karena Allah' },
        { id: 'c', teks: 'Karena jumlah harta yang disedekahkan terlalu sedikit' },
        { id: 'd', teks: 'Karena mereka meninggal dunia dalam kondisi sakit parah' }
      ],
      jawabanBenar: 'b',
      penjelasan:
        'Meskipun secara fisik amalannya sangat mulia (berperang, membaca Al-Qur’an, dan bersedekah), mereka dilemparkan ke neraka karena niatnya bukan ikhlas mencari ridha Allah melainkan ingin dipuji manusia sebagai pemberani, alim, dan dermawan.'
    },
    {
      id: 'kuis-5',
      skenario:
        'Rian dengan tulus mengajari temannya materi PAI yang sulit sampai paham. Namun saat hasil ulangan diumumkan, temannya mendapat nilai 95 dan tidak mengucapkan terima kasih sama sekali kepada Rian. Sikap Rian yang mencerminkan pribadi ikhlas adalah...',
      pilihan: [
        { id: 'a', teks: 'Marah dan menyindir temannya di grup chat kelas karena tidak tahu balas budi' },
        { id: 'b', teks: 'Bersumpah tidak akan pernah mau lagi mengajari teman tersebut' },
        { id: 'c', teks: 'Tetap bersyukur, ikut senang atas keberhasilan temannya, dan tidak menuntut balasan' },
        { id: 'd', teks: 'Meminta guru untuk membatalkan nilai teman tersebut' }
      ],
      jawabanBenar: 'c',
      penjelasan:
        'Orang yang ikhlas beramal semata-mata mengharapkan balasan dari Allah Swt. (seperti teladan Q.S. Al-Insan: 9). Ia tidak akan sakit hati atau menuntut ucapan terima kasih dari manusia atas kebaikan yang telah ia berikan.'
    }
  ]
};
