export interface QuranAyat {
  numberInSurah: number;
  arabic: string;
  latin: string;
  translationKemenag: string;
  tafsirWajiz?: string;
  audioUrl?: string;
}

export interface MasterkuSurah {
  number: number;
  name: string;
  arabicName: string;
  meaning: string;
  juz: number;
  revelationPlace: 'Makkah' | 'Madinah';
  numberOfAyat: number;
  description: string;
  bismillahPre: boolean;
  verses: QuranAyat[];
}

export const MASTERKU_QURAN_SURAHS: MasterkuSurah[] = [
  {
    number: 1,
    name: 'Al-Fatihah',
    arabicName: 'الفاتحة',
    meaning: 'Pembukaan',
    juz: 1,
    revelationPlace: 'Makkah',
    numberOfAyat: 7,
    bismillahPre: false,
    description: 'Surat pembuka Al-Qur\'an dan Ummul Kitab yang wajib dibaca dalam setiap rakaat salat fardu maupun sunnah.',
    verses: [
      {
        numberInSurah: 1,
        arabic: 'بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ',
        latin: 'Bismillāhir-raḥmānir-raḥīm',
        translationKemenag: 'Dengan nama Allah Yang Maha Pengasih, Maha Penyayang.',
        tafsirWajiz: 'Memulai segala amalan dengan nama Allah Yang Maha Pemurah kepada seluruh makhluk dan Maha Penyayang kepada orang beriman.',
        audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/1.mp3'
      },
      {
        numberInSurah: 2,
        arabic: 'اَلْحَمْدُ لِلّٰهِ رَبِّ الْعٰلَمِيْنَۙ',
        latin: 'Al-ḥamdu lillāhi rabbil-\'ālamīn',
        translationKemenag: 'Segala puji bagi Allah, Tuhan seluruh alam,',
        tafsirWajiz: 'Seluruh pujian yang sempurna hanya berhak ditujukan kepada Allah SWT yang memelihara dan mendidik seluruh semesta.',
        audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/2.mp3'
      },
      {
        numberInSurah: 3,
        arabic: 'الرَّحْمٰنِ الرَّحِيْمِۙ',
        latin: 'Ar-raḥmānir-raḥīm',
        translationKemenag: 'Yang Maha Pengasih, Maha Penyayang,',
        tafsirWajiz: 'Maha Luas kasih sayang-Nya di dunia dan Maha Mengasihi hamba-hamba-Nya yang taat di akhirat kelak.',
        audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/3.mp3'
      },
      {
        numberInSurah: 4,
        arabic: 'مٰلِكِ يَوْمِ الدِّيْنِۗ',
        latin: 'Māliki yaumid-dīn',
        translationKemenag: 'Pemilik hari pembalasan.',
        tafsirWajiz: 'Raja dan Penguasa tunggal pada hari kiamat ketika seluruh manusia dihisab atas perbuatannya.',
        audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/4.mp3'
      },
      {
        numberInSurah: 5,
        arabic: 'اِيَّاكَ نَعْبُدُ وَاِيَّاكَ نَسْتَعِيْنُۗ',
        latin: 'Iyyāka na\'budu wa iyyāka nasta\'īn',
        translationKemenag: 'Hanya kepada Engkaulah kami menyembah dan hanya kepada Engkaulah kami memohon pertolongan.',
        tafsirWajiz: 'Intisari tauhid ibadah: kita menolak kemusyrikan dan berserah diri meminta pertolongan hanya kepada Allah.',
        audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/5.mp3'
      },
      {
        numberInSurah: 6,
        arabic: 'اِهْدِنَا الصِّرَاطَ الْمُسْتَقِيْمَۙ',
        latin: 'Ihdinaṣ-ṣirāṭal-mustaqīm',
        translationKemenag: 'Tunjukilah kami jalan yang lurus,',
        tafsirWajiz: 'Permohonan hidayah yang mantap untuk teguh berada di atas agama Islam yang benar.',
        audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/6.mp3'
      },
      {
        numberInSurah: 7,
        arabic: 'صِرَاطَ الَّذِيْنَ اَنْعَمْتَ عَلَيْهِمْ ەۙ غَيْرِ الْمَغْضُوْبِ عَلَيْهِمْ وَلَا الضَّاۤلِّيْنَ',
        latin: 'Ṣirāṭal-lażīna an\'amta \'alaihim gairil-magḍūbi \'alaihim wa laḍ-ḍāllīn',
        translationKemenag: '(yaitu) jalan orang-orang yang telah Engkau beri nikmat kepadanya; bukan (jalan) mereka yang dimurkai, dan bukan (pula jalan) mereka yang sesat.',
        tafsirWajiz: 'Jalan para nabi, orang jujur (shiddiqin), syuhada, dan shalihin; bukan jalan orang yang mengetahui kebenaran namun membangkang, atau orang yang tersesat tanpa ilmu.',
        audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/7.mp3'
      }
    ]
  },
  {
    number: 4,
    name: 'An-Nisa\'',
    arabicName: 'النساء',
    meaning: 'Wanita',
    juz: 5,
    revelationPlace: 'Madinah',
    numberOfAyat: 176,
    bismillahPre: true,
    description: 'Surat Madaniyyah agung yang mengatur keadilan sosial, hak-hak wanita dan anak yatim, serta penguatan akidah dan rukun iman (khususnya Ayat 136 dalam kurikulum PAI Kelas VII Semester 1).',
    verses: [
      {
        numberInSurah: 136,
        arabic: 'يٰٓاَيُّهَا الَّذِيْنَ اٰمَنُوْٓا اٰمِنُوْا بِاللّٰهِ وَرَسُوْلِهٖ وَالْكِتٰبِ الَّذِيْ نَزَّلَ عَلٰى رَسُوْلِهٖ وَالْكِتٰبِ الَّذِيْٓ اَنْزَلَ مِنْ قَبْلُ ۗوَمَنْ يَّكْفُرْ بِاللّٰهِ وَمَلٰۤىِٕكَتِهٖ وَكُتُبِهٖ وَرُسُلِهٖ وَالْيَوْمِ الْاٰخِرِ فَقَدْ ضَلَّ ضَلٰلًاۢ بَعِيْدًا',
        latin: 'Yā ayyuhallażīna āmanū āminū billāhi wa rasūlihī wal-kitābillażī nazzala ‘alā rasūlihī wal-kitābillażī anzala min qabl(u), wa may yakfur billāhi wa malā\'ikatihī wa kutubihī wa rusulihī wal-yaumil-ākhiri faqad ḍalla ḍalālam ba‘īdā(n).',
        translationKemenag: 'Wahai orang-orang yang beriman! Tetaplah beriman kepada Allah dan Rasul-Nya (Muhammad) dan kepada Kitab (Al-Qur\'an) yang diturunkan kepada Rasul-Nya, serta kitab yang diturunkan sebelumnya. Barangsiapa ingkar kepada Allah, malaikat-malaikat-Nya, kitab-kitab-Nya, rasul-rasul-Nya, dan hari kemudian, maka sungguh, orang itu telah tersesat sangat jauh.',
        tafsirWajiz: 'Seruan kepada segenap orang mukmin untuk senantiasa memperbaharui, menyempurnakan, dan mengokohkan rukun iman, serta peringatan ancaman kesesatan nyata bagi yang kufur.',
        audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/629.mp3'
      }
    ]
  },
  {
    number: 8,
    name: 'Al-Anfal',
    arabicName: 'الأنفال',
    meaning: 'Harta Rampasan Perang',
    juz: 9,
    revelationPlace: 'Madinah',
    numberOfAyat: 75,
    bismillahPre: true,
    description: 'Surat Madaniyyah yang menerangkan hukum perang dan perjanjian, serta 5 sifat mukmin hakiki (khususnya Ayat 2-4 materi utama PAI Kelas VII Semester 1).',
    verses: [
      {
        numberInSurah: 2,
        arabic: 'إِنَّمَا الْمُؤْمِنُونَ الَّذِينَ إِذَا ذُكِرَ اللَّهُ وَجِلَتْ قُلُوبُهُمْ وَإِذَا تُلِيَتْ عَلَيْهِمْ آيَاتُهُ زَادَتْهُمْ إِيمَانًا وَعَلَىٰ رَبِّهِمْ يَتَوَكَّلُونَ',
        latin: 'Innamal-mu’minūnallażīna iżā żukirallāhu wajilat qulūbuhum wa iżā tuliyat ‘alaihim āyātuhū zādathum īmānaw wa ‘alā rabbihim yatawakkalūn(a).',
        translationKemenag: 'Sesungguhnya orang-orang yang beriman adalah mereka yang apabila disebut nama Allah gemetar hatinya, dan apabila dibacakan ayat-ayat-Nya kepada mereka, bertambah (kuat) imannya dan hanya kepada Tuhan mereka bertawakal.',
        tafsirWajiz: 'Tiga ciri pertama mukmin sejati: getaran hati saat mengingat Allah, iman bertambah saat mendengar ayat-Nya, dan keteguhan tawakal.',
        audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/1162.mp3'
      },
      {
        numberInSurah: 3,
        arabic: 'الَّذِينَ يُقِيمُونَ الصَّلَاةَ وَمِمَّا رَزَقْنَاهُمْ يُنفِقُونَ',
        latin: 'Allażīna yuqīmūnaṣ-ṣalāta wa mimmā razaqnāhum yunfiqūn(a).',
        translationKemenag: '(yaitu) orang-orang yang mendirikan salat dan yang menginfakkan sebagian dari rezeki yang Kami berikan kepada mereka.',
        tafsirWajiz: 'Ciri keempat dan kelima: istiqamah mendirikan salat dengan khusyuk dan gemar menginfakkan rezeki di jalan kebaikan sosial.',
        audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/1163.mp3'
      },
      {
        numberInSurah: 4,
        arabic: 'أُولَٰئِكَ هُمُ الْمُؤْمِنُونَ حَقًّا ۚ لَّهُمْ دَرَجَاتٌ عِندَ رَبِّهِمْ وَمَغْفِرَةٌ وَرِزْقٌ كَرِيمٌ',
        latin: 'Ulā\'ika humul-mu’minūna ḥaqqā(n), lahum darajātun ‘inda rabbihim wa magfiratuw wa rizqun karīm(un).',
        translationKemenag: 'Mereka itulah orang-orang yang benar-benar beriman (mukmin sejati). Mereka akan memperoleh derajat (tinggi) di sisi Tuhannya dan ampunan serta rezeki yang mulia (surga).',
        tafsirWajiz: 'Penegasan gelar mukmin hakiki bagi yang memenuhi kelima ciri dan anugerah tiga balasan kemuliaan di sisi Allah SWT.',
        audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/1164.mp3'
      }
    ]
  },
  {
    number: 93,
    name: 'Ad-Duha',
    arabicName: 'الضحى',
    meaning: 'Waktu Dhuha',
    juz: 30,
    revelationPlace: 'Makkah',
    numberOfAyat: 11,
    bismillahPre: true,
    description: 'Surat penghibur bagi Rasulullah SAW yang menegaskan bahwa Allah tidak pernah meninggalkan hamba-Nya dan akhirat jauh lebih baik daripada dunia.',
    verses: [
      {
        numberInSurah: 1,
        arabic: 'وَالضُّحٰىۙ',
        latin: 'Wad-duḥā',
        translationKemenag: 'Demi waktu duha (ketika matahari naik sepenggalah),',
        audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/6080.mp3'
      },
      {
        numberInSurah: 2,
        arabic: 'وَالَّيْلِ اِذَا سَجٰىۙ',
        latin: 'Wal-laili iżā sajā',
        translationKemenag: 'dan demi malam apabila telah sunyi,',
        audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/6081.mp3'
      },
      {
        numberInSurah: 3,
        arabic: 'مَا وَدَّعَكَ رَبُّكَ وَمَا قَلٰىۗ',
        latin: 'Mā wadda\'aka rabbuka wa mā qalā',
        translationKemenag: 'Tuhanmu tidak meninggalkan engkau (Muhammad) dan tidak (pula) membencimu,',
        audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/6082.mp3'
      },
      {
        numberInSurah: 4,
        arabic: 'وَلَلْاٰخِرَةُ خَيْرٌ لَّكَ مِنَ الْاُوْلٰىۗ',
        latin: 'Wa lal-\'ākhiratu khairul laka minal-\'ūlā',
        translationKemenag: 'dan sungguh, yang kemudian itu lebih baik bagimu daripada yang permulaan.',
        audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/6083.mp3'
      },
      {
        numberInSurah: 5,
        arabic: 'وَلَسَوْفَ يُعْطِيْكَ رَبُّكَ فَتَرْضٰىۗ',
        latin: 'Wa lasaufa yu\'ṭīka rabbuka fatarḍā',
        translationKemenag: 'Dan sungguh, kelak Tuhanmu pasti memberikan karunia-Nya kepadamu, sehingga engkau menjadi puas.',
        audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/6084.mp3'
      },
      {
        numberInSurah: 6,
        arabic: 'اَلَمْ يَجِدْكَ يَتِيْمًا فَاٰوٰىۖ',
        latin: 'A lam yajidka yatīman fa āwā',
        translationKemenag: 'Bukankah Dia mendapatimu sebagai seorang yatim, lalu Dia melindungi(mu),',
        audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/6085.mp3'
      },
      {
        numberInSurah: 7,
        arabic: 'وَوَجَدَكَ ضَاۤلًّا فَهَدٰىۖ',
        latin: 'Wa wajadaka ḍāllan fa hadā',
        translationKemenag: 'dan Dia mendapatimu sebagai seorang yang bingung, lalu Dia memberikan petunjuk,',
        audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/6086.mp3'
      },
      {
        numberInSurah: 8,
        arabic: 'وَوَجَدَكَ عَاۤىِٕلًا فَاَغْنٰىۗ',
        latin: 'Wa wajadaka \'ā\'ilan fa agnā',
        translationKemenag: 'dan Dia mendapatimu sebagai seorang yang kekurangan, lalu Dia memberikan kecukupan.',
        audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/6087.mp3'
      },
      {
        numberInSurah: 9,
        arabic: 'فَاَمَّا الْيَتِيْمَ فَلَا تَقْهَرْۗ',
        latin: 'Fa ammal-yatīma falā taqhar',
        translationKemenag: 'Maka terhadap anak yatim janganlah engkau berlaku sewenang-wenang.',
        audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/6088.mp3'
      },
      {
        numberInSurah: 10,
        arabic: 'وَاَمَّا السَّاۤىِٕلَ فَلَا تَنْهَرْ',
        latin: 'Wa ammas-sā\'ila falā tanhar',
        translationKemenag: 'Dan terhadap orang yang meminta-minta janganlah engkau menghardik(nya).',
        audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/6089.mp3'
      },
      {
        numberInSurah: 11,
        arabic: 'وَاَمَّا بِنِعْمَةِ رَبِّكَ فَحَدِّثْ',
        latin: 'Wa ammā bini\'mati rabbika fa ḥaddiṡ',
        translationKemenag: 'Dan terhadap nikmat Tuhanmu, hendaklah engkau nyatakan (dengan bersyukur).',
        audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/6090.mp3'
      }
    ]
  },
  {
    number: 94,
    name: 'Al-Insyirah (Asy-Syarh)',
    arabicName: 'الشرح',
    meaning: 'Kelapangan Dada',
    juz: 30,
    revelationPlace: 'Makkah',
    numberOfAyat: 8,
    bismillahPre: true,
    description: 'Motivasi agung bahwa sesudah kesulitan pasti ada kemudahan, dan anjuran untuk tetap giat bekerja.',
    verses: [
      {
        numberInSurah: 1,
        arabic: 'اَلَمْ نَشْرَحْ لَكَ صَدْرَكَۙ',
        latin: 'A lam nasyraḥ laka ṣadrak',
        translationKemenag: 'Bukankah Kami telah melapangkan dadamu (Muhammad)?',
        audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/6091.mp3'
      },
      {
        numberInSurah: 2,
        arabic: 'وَوَضَعْنَا عَنْكَ وِزْرَكَۙ',
        latin: 'Wa waḍa\'nā \'anka wizrak',
        translationKemenag: 'dan Kami pun telah menurunkan bebanmu darimu,',
        audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/6092.mp3'
      },
      {
        numberInSurah: 3,
        arabic: 'الَّذِيْٓ اَنْقَضَ ظَهْرَكَۙ',
        latin: 'Allażī anqaḍa ẓahrak',
        translationKemenag: 'yang memberatkan punggungmu,',
        audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/6093.mp3'
      },
      {
        numberInSurah: 4,
        arabic: 'وَرَفَعْنَا لَكَ ذِكْرَكَۗ',
        latin: 'Wa rafa\'nā laka żikrak',
        translationKemenag: 'dan Kami tinggikan sebutan (nama)mu bagimu.',
        audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/6094.mp3'
      },
      {
        numberInSurah: 5,
        arabic: 'فَاِنَّ مَعَ الْعُسْرِ يُسْرًاۙ',
        latin: 'Fa inna ma\'al-\'usri yusrā',
        translationKemenag: 'Maka sesungguhnya bersama kesulitan ada kemudahan,',
        audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/6095.mp3'
      },
      {
        numberInSurah: 6,
        arabic: 'اِنَّ مَعَ الْعُسْرِ يُسْرًاۗ',
        latin: 'Inna ma\'al-\'usri yusrā',
        translationKemenag: 'sesungguhnya bersama kesulitan ada kemudahan.',
        audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/6096.mp3'
      },
      {
        numberInSurah: 7,
        arabic: 'فَاِذَا فَرَغْتَ فَانْصَبْۙ',
        latin: 'Fa iżā faragta fanṣab',
        translationKemenag: 'Maka apabila engkau telah selesai (dari suatu urusan), tetaplah bekerja keras (untuk urusan yang lain),',
        audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/6097.mp3'
      },
      {
        numberInSurah: 8,
        arabic: 'وَاِلٰى رَبِّكَ فَارْغَبْ',
        latin: 'Wa ilā rabbika fargab',
        translationKemenag: 'dan hanya kepada Tuhanmulah engkau berharap.',
        audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/6098.mp3'
      }
    ]
  },
  {
    number: 97,
    name: 'Al-Qadr',
    arabicName: 'القدر',
    meaning: 'Kemuliaan',
    juz: 30,
    revelationPlace: 'Makkah',
    numberOfAyat: 5,
    bismillahPre: true,
    description: 'Malam Lailatul Qadar di bulan Ramadan yang lebih baik daripada seribu bulan.',
    verses: [
      {
        numberInSurah: 1,
        arabic: 'اِنَّآ اَنْزَلْنٰهُ فِيْ لَيْلَةِ الْقَدْرِ',
        latin: 'Innā anzalnāhu fī lailatil-qadr',
        translationKemenag: 'Sesungguhnya Kami telah menurunkannya (Al-Qur\'an) pada malam qadar.',
        audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/6119.mp3'
      },
      {
        numberInSurah: 2,
        arabic: 'وَمَآ اَدْرٰىكَ مَا لَيْلَةُ الْقَدْرِۗ',
        latin: 'Wa mā adrāka mā lailatul-qadr',
        translationKemenag: 'Dan tahukah kamu apakah malam kemuliaan itu?',
        audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/6120.mp3'
      },
      {
        numberInSurah: 3,
        arabic: 'لَيْلَةُ الْقَدْرِ ەۙ خَيْرٌ مِّنْ اَلْفِ شَهْرٍۗ',
        latin: 'Lailatul-qadri khairum min alfi syahr',
        translationKemenag: 'Malam kemuliaan itu lebih baik daripada seribu bulan.',
        audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/6121.mp3'
      },
      {
        numberInSurah: 4,
        arabic: 'تَنَزَّلُ الْمَلٰۤىِٕكَةُ وَالرُّوْحُ فِيْهَا بِاِذْنِ رَبِّهِمْۚ مِنْ كُلِّ اَمْرٍۛ',
        latin: 'Tanazzalul-malā\'ikatu war-rūḥu fīhā bi\'iżni rabbihim, min kulli amr',
        translationKemenag: 'Pada malam itu turun para malaikat dan Rūḥ (Jibril) dengan izin Tuhannya untuk mengatur semua urusan.',
        audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/6122.mp3'
      },
      {
        numberInSurah: 5,
        arabic: 'سَلٰمٌ ۛ هِيَ حَتّٰى مَطْلَعِ الْفَجْرِ',
        latin: 'Salāmun hiya ḥattā maṭla\'il-fajr',
        translationKemenag: 'Sejahteralah (malam itu) sampai terbit fajar.',
        audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/6123.mp3'
      }
    ]
  },
  {
    number: 103,
    name: 'Al-\'Asr',
    arabicName: 'العصر',
    meaning: 'Masa / Waktu',
    juz: 30,
    revelationPlace: 'Makkah',
    numberOfAyat: 3,
    bismillahPre: true,
    description: 'Peringatan pentingnya manajemen waktu hidup manusia agar tidak merugi di dunia dan akhirat.',
    verses: [
      {
        numberInSurah: 1,
        arabic: 'وَالْعَصْرِۙ',
        latin: 'Wal-\'aṣr',
        translationKemenag: 'Demi masa,',
        audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/6177.mp3'
      },
      {
        numberInSurah: 2,
        arabic: 'اِنَّ الْاِنْسَانَ لَفِيْ خُسْرٍۙ',
        latin: 'Innal-insāna lafī khusr',
        translationKemenag: 'sungguh, manusia berada dalam kerugian,',
        audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/6178.mp3'
      },
      {
        numberInSurah: 3,
        arabic: 'اِلَّا الَّذِيْنَ اٰمَنُوْا وَعَمِلُوا الصّٰلِحٰتِ وَتَوَاصَوْا بِالْحَقِّ ەۙ وَتَوَاصَوْا بِالصَّبْرِ',
        latin: 'Illal-lażīna āmanū wa \'amiluṣ-ṣāliḥāti wa tawāṣau bil-ḥaqqi wa tawāṣau biṣ-ṣabr',
        translationKemenag: 'kecuali orang-orang yang beriman dan mengerjakan kebajikan serta saling menasihati untuk kebenaran dan saling menasihati untuk kesabaran.',
        audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/6179.mp3'
      }
    ]
  },
  {
    number: 107,
    name: 'Al-Ma\'un',
    arabicName: 'الماعون',
    meaning: 'Barang-barang yang Berguna',
    juz: 30,
    revelationPlace: 'Makkah',
    numberOfAyat: 7,
    bismillahPre: true,
    description: 'Peringatan keras bagi pendusta agama: mereka yang menghardik anak yatim, enggan memberi makan orang miskin, dan lalai dalam salatnya.',
    verses: [
      {
        numberInSurah: 1,
        arabic: 'اَرَءَيْتَ الَّذِيْ يُكَذِّبُ بِالدِّيْنِۗ',
        latin: 'A ra\'aital-lażī yukażżibu bid-dīn',
        translationKemenag: 'Tahukah kamu (orang) yang mendustakan agama?',
        audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/6190.mp3'
      },
      {
        numberInSurah: 2,
        arabic: 'فَذٰلِكَ الَّذِيْ يَدُعُّ الْيَتِيْمَۙ',
        latin: 'Fa żālikal-lażī yadu\'\'ul-yatīm',
        translationKemenag: 'Maka itulah orang yang menghardik anak yatim,',
        audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/6191.mp3'
      },
      {
        numberInSurah: 3,
        arabic: 'وَلَا يَحُضُّ عَلٰى طَعَامِ الْمِسْكِيْنِۗ',
        latin: 'Wa lā yaḥuḍḍu \'alā ṭa\'āmil-miskīn',
        translationKemenag: 'dan tidak mendorong memberi makan orang miskin.',
        audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/6192.mp3'
      },
      {
        numberInSurah: 4,
        arabic: 'فَوَيْلٌ لِّلْمُصَلِّيْنَۙ',
        latin: 'Fa wailul lil-muṣallīn',
        translationKemenag: 'Maka celakalah orang yang salat,',
        audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/6193.mp3'
      },
      {
        numberInSurah: 5,
        arabic: 'الَّذِيْنَ هُمْ عَنْ صَلَاتِهِمْ سَاهُوْنَۙ',
        latin: 'Allażīna hum \'an ṣalātihim sāhūn',
        translationKemenag: '(yaitu) orang-orang yang lalai terhadap salatnya,',
        audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/6194.mp3'
      },
      {
        numberInSurah: 6,
        arabic: 'الَّذِيْنَ هُمْ يُرَاۤءُوْنَۙ',
        latin: 'Allażīna hum yurā\'ūn',
        translationKemenag: 'yang berbuat ria,',
        audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/6195.mp3'
      },
      {
        numberInSurah: 7,
        arabic: 'وَيَمْنَعُوْنَ الْمَاعُوْنَ',
        latin: 'Wa yamna\'ūnal-mā\'ūn',
        translationKemenag: 'dan enggan (memberikan) bantuan barang-barang berguna.',
        audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/6196.mp3'
      }
    ]
  },
  {
    number: 108,
    name: 'Al-Kautsar',
    arabicName: 'الكوثر',
    meaning: 'Nikmat yang Berlimpah',
    juz: 30,
    revelationPlace: 'Makkah',
    numberOfAyat: 3,
    bismillahPre: true,
    description: 'Perintah bersyukur atas karunia nikmat agung dengan mendirikan salat dan menyembelih kurban.',
    verses: [
      {
        numberInSurah: 1,
        arabic: 'اِنَّآ اَعْطَيْنٰكَ الْكَوْثَرَۗ',
        latin: 'Innā a\'ṭainākal-kauṡar',
        translationKemenag: 'Sungguh, Kami telah memberimu (Muhammad) nikmat yang banyak.',
        audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/6197.mp3'
      },
      {
        numberInSurah: 2,
        arabic: 'فَصَلِّ لِرَبِّكَ وَانْحَرْۗ',
        latin: 'Fa ṣalli lirabbika wan-ḥar',
        translationKemenag: 'Maka laksanakanlah salat karena Tuhanmu, dan berkurbanlah.',
        audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/6198.mp3'
      },
      {
        numberInSurah: 3,
        arabic: 'اِنَّ شَانِئَكَ هُوَ الْاَبْتَرُ',
        latin: 'Inna syāni\'aka huwal-abtar',
        translationKemenag: 'Sungguh, orang-orang yang membencimu dialah yang terputus (dari rahmat Allah).',
        audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/6199.mp3'
      }
    ]
  },
  {
    number: 112,
    name: 'Al-Ikhlas',
    arabicName: 'الإخلاص',
    meaning: 'Memurnikan Ke-Esa-an Allah',
    juz: 30,
    revelationPlace: 'Makkah',
    numberOfAyat: 4,
    bismillahPre: true,
    description: 'Surat penegasan tauhid mutlak bahwa Allah Maha Esa, bergantung kepada-Nya segala sesuatu, tidak beranak dan tidak diperanakkan.',
    verses: [
      {
        numberInSurah: 1,
        arabic: 'قُلْ هُوَ اللّٰهُ اَحَدٌۚ',
        latin: 'Qul huwallāhu aḥad',
        translationKemenag: 'Katakanlah (Muhammad), "Dialah Allah, Yang Maha Esa."',
        audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/6218.mp3'
      },
      {
        numberInSurah: 2,
        arabic: 'اَللّٰهُ الصَّمَدُۚ',
        latin: 'Allāhuṣ-ṣamad',
        translationKemenag: 'Allah tempat meminta segala sesuatu.',
        audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/6219.mp3'
      },
      {
        numberInSurah: 3,
        arabic: 'لَمْ يَلِدْ وَلَمْ يُوْلَدْۙ',
        latin: 'Lam yalid wa lam yūlad',
        translationKemenag: '(Allah) tidak beranak dan tidak pula diperanakkan,',
        audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/6220.mp3'
      },
      {
        numberInSurah: 4,
        arabic: 'وَلَمْ يَكُنْ لَّهٗ كُفُوًا اَحَدٌ',
        latin: 'Wa lam yakul lahū kufuwan aḥad',
        translationKemenag: 'dan tidak ada sesuatu yang setara dengan Dia.',
        audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/6221.mp3'
      }
    ]
  },
  {
    number: 113,
    name: 'Al-Falaq',
    arabicName: 'الفلق',
    meaning: 'Waktu Subuh',
    juz: 30,
    revelationPlace: 'Makkah',
    numberOfAyat: 5,
    bismillahPre: true,
    description: 'Surat perlindungan (Al-Mu\'awwidzatain) dari kejahatan malam yang gelap gulita, sihir, dan rasa dengki orang yang hasad.',
    verses: [
      {
        numberInSurah: 1,
        arabic: 'قُلْ اَعُوْذُ بِرَبِّ الْفَلَقِۙ',
        latin: 'Qul a\'ūżu birabbil-falaq',
        translationKemenag: 'Katakanlah, "Aku berlindung kepada Tuhan yang menguasai subuh (fajar),',
        audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/6222.mp3'
      },
      {
        numberInSurah: 2,
        arabic: 'مِنْ شَرِّ مَا خَلَقَۙ',
        latin: 'Min syarri mā khalaq',
        translationKemenag: 'dari kejahatan (makhluk yang) Dia ciptakan,',
        audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/6223.mp3'
      },
      {
        numberInSurah: 3,
        arabic: 'وَمِنْ شَرِّ غَاسِقٍ اِذَا وَقَبَۙ',
        latin: 'Wa min syarri gāsiqin iżā waqab',
        translationKemenag: 'dan dari kejahatan malam apabila telah gelap gulita,',
        audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/6224.mp3'
      },
      {
        numberInSurah: 4,
        arabic: 'وَمِنْ شَرِّ النَّفّٰثٰتِ فِى الْعُقَدِۙ',
        latin: 'Wa min syarrin-naffāṡāti fil-\'uqad',
        translationKemenag: 'dan dari kejahatan (perempuan-perempuan) penyihir yang meniup pada buhul-buhul (talinya),',
        audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/6225.mp3'
      },
      {
        numberInSurah: 5,
        arabic: 'وَمِنْ شَرِّ حَاسِدٍ اِذَا حَسَدَ',
        latin: 'Wa min syarri ḥāsidin iżā ḥasad',
        translationKemenag: 'dan dari kejahatan orang yang dengki apabila dia dengki."',
        audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/6226.mp3'
      }
    ]
  },
  {
    number: 114,
    name: 'An-Nas',
    arabicName: 'الناس',
    meaning: 'Umat Manusia',
    juz: 30,
    revelationPlace: 'Makkah',
    numberOfAyat: 6,
    bismillahPre: true,
    description: 'Surat penutup Al-Qur\'an: memohon perlindungan kepada Allah Tuhan Manusia dari bisikan jahat setan yang tersembunyi baik dari golongan jin maupun manusia.',
    verses: [
      {
        numberInSurah: 1,
        arabic: 'قُلْ اَعُوْذُ بِرَبِّ النَّاسِۙ',
        latin: 'Qul a\'ūżu birabbin-nās',
        translationKemenag: 'Katakanlah, "Aku berlindung kepada Tuhannya manusia,',
        audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/6227.mp3'
      },
      {
        numberInSurah: 2,
        arabic: 'مَلِكِ النَّاسِۙ',
        latin: 'Malikin-nās',
        translationKemenag: 'Raja manusia,',
        audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/6228.mp3'
      },
      {
        numberInSurah: 3,
        arabic: 'اِلٰهِ النَّاسِۙ',
        latin: 'Ilāhin-nās',
        translationKemenag: 'sesembahan manusia,',
        audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/6229.mp3'
      },
      {
        numberInSurah: 4,
        arabic: 'مِنْ شَرِّ الْوَسْوَاسِ ەۙ الْخَنَّاسِۖ',
        latin: 'Min syarril-waswāsil-khannās',
        translationKemenag: 'dari kejahatan (bisikan) setan yang bersembunyi,',
        audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/6230.mp3'
      },
      {
        numberInSurah: 5,
        arabic: 'الَّذِيْ يُوَسْوِسُ فِيْ صُدُوْرِ النَّاسِۙ',
        latin: 'Allażī yuwaswisu fī ṣudūrin-nās',
        translationKemenag: 'yang membisikkan (kejahatan) ke dalam dada manusia,',
        audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/6231.mp3'
      },
      {
        numberInSurah: 6,
        arabic: 'مِنَ الْجِنَّةِ وَالنَّاسِ',
        latin: 'Minal-jinnati wan-nās',
        translationKemenag: 'dari (golongan) jin dan manusia."',
        audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/6232.mp3'
      }
    ]
  }
];
