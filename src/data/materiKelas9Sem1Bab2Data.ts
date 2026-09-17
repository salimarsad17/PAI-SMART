export interface DalilHariAkhirItem {
  id: string;
  surah: string;
  ayatNomor: string;
  namaSurah: string;
  artiSurah: string;
  teksArab: string;
  transliterasi: string;
  terjemahan: string;
  kandunganPokok: string[];
  audioUrl?: string;
}

export interface TandaKiamatItem {
  id: string;
  kategori: 'Sugra' | 'Kubra';
  namaTanda: string;
  dalilRujukan: string;
  penjelasan: string;
  faktaKontekstual: string;
}

export interface TahapanHariAkhirItem {
  urutan: number;
  namaTahapan: string;
  namaArab: string;
  artiNama: string;
  dalilAlQuran: string;
  teksDalilArab: string;
  terjemahDalil: string;
  deskripsiPeristiwa: string;
  keadaanManusia: string;
  hikmahPelajaran: string;
}

export interface StudiKasusAkhiratItem {
  id: string;
  judul: string;
  fenomenaModern: string;
  dilemaMoral: string;
  analisisAkidah: string;
  solusiPraktis: string[];
}

export interface SoalHotsBab2Kelas9 {
  id: string;
  nomor: number;
  kasus: string;
  pertanyaan: string;
  pilihan: string[];
  kunciJawaban: number;
  pembahasan: string;
}

export interface MateriKelas9Sem1Bab2 {
  babNumber: number;
  judulBab: string;
  subJudul: string;
  elemenCp: string;
  fase: string;
  semester: string;
  pengantar: {
    apersepsi: string;
    tujuanPembelajaran: string[];
    kataKunci: string[];
  };
  bagian1PengertianDanTanda: {
    pengertianBahasaDanIstilah: {
      secaraBahasa: string;
      secaraIstilah: string;
      kedudukanRukunIman: string;
      hukumBeriman: string;
    };
    namaNamaLainHariAkhir: {
      namaArab: string;
      namaLatin: string;
      artiIndonesia: string;
      dalilAlQuran: string;
      maknaFilosofis: string;
    }[];
    dalilAlQuranDanHadits: DalilHariAkhirItem[];
    tandaTandaKiamat: {
      kiamatSugra: {
        definisi: string;
        contohPeristiwa: TandaKiamatItem[];
      };
      kiamatKubra: {
        definisi: string;
        sepuluhTandaBesar: TandaKiamatItem[];
      };
    };
    peristiwaSetelahKematian: {
      sakaratulMaut: string;
      alamBarzakh: string;
      fitnahKuburMunkarNakir: string;
      nikmatDanSiksaKubur: string;
      amalanPenyelamatSiksaKubur: string[];
    };
  };
  bagian2TahapanHariAkhir: {
    pengantarKronologi: string;
    sembilanTahapan: TahapanHariAkhirItem[];
    surgaDanNeraka: {
      namaSurgaDanTingkatannya: {
        nama: string;
        calonPenghuni: string;
        dalil: string;
      }[];
      namaNerakaDanTingkatannya: {
        nama: string;
        calonPenghuni: string;
        dalil: string;
      }[];
    };
  };
  bagian3HubunganAkhlakDanKehidupan: {
    konsepMoralBrake: string;
    dampakPositifPadaKarakter: {
      dimensiKarakter: string;
      manifestasiPerilaku: string;
      kaitanDenganHariAkhir: string;
    }[];
  };
  bagian4RefleksiDanPengembanganSikap: {
    tigaStudiKasus: StudiKasusAkhiratItem[];
    lembarMuhasabah8Dimensi: {
      indikator: string;
      deskripsiPemeriksaanDiri: string;
    }[];
    kebiasaanAmalHarian: {
      waktu: string;
      amalan: string;
      alasanAkidah: string;
    }[];
  };
  bagian5HikmahBeriman: {
    enamHikmahUtama: {
      judul: string;
      penjelasan: string;
      dampakBatin: string;
    }[];
    kuisHots: SoalHotsBab2Kelas9[];
  };
}

export const MATERI_KELAS_9_SEM_1_BAB_2: MateriKelas9Sem1Bab2 = {
  babNumber: 2,
  judulBab: 'Meyakini dan Merefleksikan Iman kepada Hari Akhir',
  subJudul: 'Meraih Ketenangan Jiwa, Keteguhan Moral, dan Kesucian Amal melalui Keyakinan Hari Kiamat dan Hari Pembalasan',
  elemenCp: 'Akidah',
  fase: 'Fase D',
  semester: 'Semester 1',
  pengantar: {
    apersepsi:
      'Pernahkah kamu merenungkan ke mana perginya seluruh detik waktu yang telah kita lalui? Mengapa ada orang yang berbuat curang dan zalim namun tampak hidup makmur tanpa hukuman di dunia, sementara orang jujur dan saleh terkadang hidup dalam keterbatasan? Jika kehidupan berakhir begitu saja dengan kematian tanpa pengadilan, niscaya keadilan semesta hanyalah ilusi. Islam mengajarkan bahwa dunia ini adalah "Mazra\'atul Akhirah" (ladang tanam bagi kehidupan akhirat). Keyakinan teguh kepada Hari Akhir adalah puncak kompas moral manusia: ia memastikan bahwa setiap butir kebaikan sekecil zarrah akan dibalas dengan kemuliaan abadi, dan setiap kejahatan serta kezaliman akan dipertanggungjawabkan di hadapan Mahkamah Keadilan Ilahi.',
    tujuanPembelajaran: [
      'Menjelaskan pengertian beriman kepada Hari Akhir secara bahasa dan istilah syariat serta kedudukannya dalam Rukun Iman',
      'Menganalisis dalil naqli dari Al-Qur\'an (Q.S. Al-Hajj: 7, Q.S. Az-Zalzalah: 1-8, Q.S. Al-Qari\'ah: 1-11) dan hadis-hadis sahih tentang kepastian Hari Kiamat',
      'Mengidentifikasi dan membedakan tanda-tanda Kiamat Sugra (Kiamat Kecil) dan 10 tanda besar Kiamat Kubra (Kiamat Besar)',
      'Menjelaskan peristiwa alam barzakh pasca-kematian (sakaratul maut, fitnah kubur Munkar dan Nakir, serta nikmat dan siksa kubur)',
      'Menguraikan secara kronologis 9 tahapan Hari Akhir: Kiamat Kubra, Tiupan Sangkakala, Yaumul Ba\'ats, Yaumul Mahsyar, Syafa\'at \'Uzhma, Yaumul Hisab, Yaumul Mizan, As-Shirath, hingga Yaumul Jaza\' (Surga dan Neraka)',
      'Menghubungkan keimanan kepada Hari Akhir dengan pembentukan akhlak terpuji, integritas moral, dan pencegahan perilaku tercela di era modern',
      'Merefleksikan diri melalui studi kasus kontemporer (media sosial, AI, integritas kejujuran), mengisi lembar muhasabah 8 dimensi, dan menuntaskan evaluasi kuis HOTS'
    ],
    kataKunci: [
      'Hari Akhir (Kiamat)',
      'Kiamat Sugra & Kubra',
      'Alam Barzakh',
      'Fitnah Kubur',
      'Tiupan Sangkakala',
      'Yaumul Ba\'ats',
      'Yaumul Mahsyar',
      'Syafa\'at \'Uzhma',
      'Yaumul Hisab',
      'Yaumul Mizan',
      'As-Shirath',
      'Surga & Neraka',
      'Mazra\'atul Akhirah',
      'Muraqabatullah'
    ]
  },
  bagian1PengertianDanTanda: {
    pengertianBahasaDanIstilah: {
      secaraBahasa:
        'Secara bahasa (etimologi), Hari Akhir berasal dari bahasa Arab "al-Yaum al-Akhir" (اليوم الآخر) yang berarti "Hari Terakhir", yakni hari penghabisan yang tidak ada lagi hari duniawi sesudahnya karena berhentinya perputaran alam semesta. Dinamakan juga "al-Qiyamah" (القيامة) yang berarti hari kebangkitan atau berdiri tegak menghadap Allah.',
      secaraIstilah:
        'Secara istilah syariat (terminologi akidah), beriman kepada Hari Akhir adalah meyakini dengan sepenuh hati, membenarkan dengan lisan, dan membuktikan dengan amal perbuatan bahwa seluruh alam semesta beserta isinya suatu saat akan hancur lebur binasa atas kehendak Allah Swt., kemudian seluruh manusia dibangkitkan kembali dari alam kubur untuk menjalani proses hisab, penimbangan mizan, dan menerima pembalasan abadi yang seadil-adilnya di surga atau neraka.',
      kedudukanRukunIman:
        'Beriman kepada Hari Akhir menempati rukun iman kelima dari 6 Rukun Iman. Di dalam Al-Qur\'an, kata iman kepada Allah Swt. sangat sering digandengkan secara langsung dengan iman kepada Hari Akhir (contoh: "man āmana billāhi wal-yaumil-ākhir"), menunjukkan bahwa kesempurnaan iman seseorang kepada Allah tidak akan sah tanpa meyakini Hari Pembalasan.',
      hukumBeriman:
        'Fardhu \'Ain (kewajiban mutlak bagi setiap individu muslim yang berakal dan baligh). Mengingkari atau meragukan kepastian datangnya Hari Akhir menyebabkan seseorang murtad dan keluar dari lingkaran keimanan Islam (kafir).'
    },
    namaNamaLainHariAkhir: [
      {
        namaArab: 'يَوْمُ الْقِيَامَةِ',
        namaLatin: 'Yaumul Qiyāmah',
        artiIndonesia: 'Hari Kebangkitan Besar',
        dalilAlQuran: 'Q.S. Al-Baqarah [2]: 85',
        maknaFilosofis: 'Hari berdirinya seluruh makhluk dari kuburnya dan tegaknya keadilan mutlak Allah di hadapan semesta.'
      },
      {
        namaArab: 'يَوْمُ الْبَعْثِ',
        namaLatin: 'Yaumul Ba\'ats',
        artiIndonesia: 'Hari Dibangkitkannya Manusia dari Kubur',
        dalilAlQuran: 'Q.S. Ar-Rum [30]: 56',
        maknaFilosofis: 'Hari ketika jasad manusia yang telah hancur menjadi tulang-belulang dihidupkan kembali secara sempurna oleh Allah.'
      },
      {
        namaArab: 'يَوْمُ الْحِسَابِ',
        namaLatin: 'Yaumul Hisāb',
        artiIndonesia: 'Hari Perhitungan Amal',
        dalilAlQuran: 'Q.S. Shad [38]: 53',
        maknaFilosofis: 'Hari diauditnya seluruh rekam jejak amal perbuatan manusia, baik yang tersembunyi maupun yang nyata, tanpa ada yang terlewat.'
      },
      {
        namaArab: 'يَوْمُ الدِّيْنِ',
        namaLatin: 'Yaumud Dīn',
        artiIndonesia: 'Hari Pembalasan Agama',
        dalilAlQuran: 'Q.S. Al-Fatihah [1]: 4',
        maknaFilosofis: 'Hari ditunaikannya ganjaran hakiki bagi ketaatan kepada agama dan balasan setimpal atas pengingkaran.'
      },
      {
        namaArab: 'يَوْمُ الْحَسْرَةِ',
        namaLatin: 'Yaumul Hasrah',
        artiIndonesia: 'Hari Penyesalan Mendalam',
        dalilAlQuran: 'Q.S. Maryam [19]: 39',
        maknaFilosofis: 'Hari di mana para pendosa dan orang yang lalai meratapi waktu hidupnya di dunia yang disia-siakan tanpa bekal taqwa.'
      },
      {
        namaArab: 'يَوْمُ الْفَصْلِ',
        namaLatin: 'Yaumul Fashl',
        artiIndonesia: 'Hari Keputusan dan Pemisahan',
        dalilAlQuran: 'Q.S. Ad-Dukhan [44]: 40',
        maknaFilosofis: 'Hari dipisahkannya secara tegas antara yang haq dan yang batil, antara kaum mukmin yang selamat dan kaum kafir yang celaka.'
      },
      {
        namaArab: 'يَوْمُ الْخُلُوْدِ',
        namaLatin: 'Yaumul Khulūd',
        artiIndonesia: 'Hari Keabadian Tanpa Akhir',
        dalilAlQuran: 'Q.S. Qaf [50]: 34',
        maknaFilosofis: 'Hari dimulainya kehidupan kekal abadi tanpa ada lagi kematian, penuaan, atau kebinasaan.'
      },
      {
        namaArab: 'اَلْقَارِعَةُ',
        namaLatin: 'Al-Qāri\'ah',
        artiIndonesia: 'Peristiwa Mengetuk dan Menggemparkan Hati',
        dalilAlQuran: 'Q.S. Al-Qāri\'ah [101]: 1',
        maknaFilosofis: 'Goncangan mahadahsyat yang mengetuk dan meremukkan telinga serta kesadaran manusia karena kengeriannya.'
      },
      {
        namaArab: 'اَلْوَاقِعَةُ',
        namaLatin: 'Al-Wāqi\'ah',
        artiIndonesia: 'Peristiwa yang Pasti Terjadi',
        dalilAlQuran: 'Q.S. Al-Wāqi\'ah [56]: 1',
        maknaFilosofis: 'Sebuah kepastian objektif yang tidak ada seorang pun mampu menolak atau mendustakannya.'
      },
      {
        namaArab: 'يَوْمُ التَّلَاقِ',
        namaLatin: 'Yaumut Talāq',
        artiIndonesia: 'Hari Pertemuan Akbar',
        dalilAlQuran: 'Q.S. Ghafir [40]: 15',
        maknaFilosofis: 'Hari bertemunya seluruh makhluk dari generasi awal hingga akhir, bertemunya hamba dengan Tuhannya, dan bertemunya manusia dengan amal perbuatannya.'
      }
    ],
    dalilAlQuranDanHadits: [
      {
        id: 'dalil-al-hajj-7',
        surah: 'Q.S. Al-Hajj',
        ayatNomor: '7',
        namaSurah: 'Al-Hajj (Haji)',
        artiSurah: 'Kepastian Datangnya Kiamat dan Hari Kebangkitan',
        teksArab: 'وَاَنَّ السَّاعَةَ اٰتِيَةٌ لَّا رَيْبَ فِيْهَاۙ وَاَنَّ اللّٰهَ يَبْعَثُ مَنْ فِى الْقُبُوْرِ',
        transliterasi: 'Wa annas-sā\'ata ātiyatul lā raiba fīhā, wa annallāha yab\'aṡu man fil-qubūr',
        terjemahan:
          'Dan sungguh, (hari) Kiamat itu pasti datang, tidak ada keraguan padanya; dan sungguh, Allah akan membangkitkan siapa pun yang di dalam kubur.',
        kandunganPokok: [
          'Penegasan mutlak dengan kata penguat (Inna & Anna) bahwa Hari Kiamat niscaya datang tanpa keraguan sedikit pun.',
          'Bantahan bagi kaum materialis yang meyakini kematian adalah akhir segalanya; Allah menegaskan bahwa semua jasad di alam kubur akan dibangkitkan kembali.',
          'Membangun kesadaran bahwa hidup di dunia memiliki muara pertanggungjawaban di hadapan Sang Maha Pencipta.'
        ],
        audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/2602.mp3'
      },
      {
        id: 'dalil-az-zalzalah-1-8',
        surah: 'Q.S. Az-Zalzalah',
        ayatNomor: '1-8',
        namaSurah: 'Az-Zalzalah (Kegoncangan)',
        artiSurah: 'Goncangan Dahsyat Bumi dan Penimbangan Kebaikan Seberat Dzarrah',
        teksArab:
          'اِذَا زُلْزِلَتِ الْاَرْضُ زِلْزَالَهَاۙ ۝١ وَاَخْرَجَتِ الْاَرْضُ اَثْقَالَهَاۙ ۝٢ وَقَالَ الْاِنْسَانُ مَا لَهَاۚ ۝٣ يَوْمَىِٕذٍ تُحَدِّثُ اَخْبَارَهَاۙ ۝٤ بِاَنَّ رَبَّكَ اَوْحٰى لَهَاۗ ۝٥ يَوْمَىِٕذٍ يَّصْدُرُ النَّاسُ اَشْتَاتًا ەۙ لِّيُرَوْا اَعْمَالَهُمْۗ ۝٦ فَمَنْ يَّعْمَلْ مِثْقَالَ ذَرَّةٍ خَيْرًا يَّرَهٗۚ ۝٧ وَمَنْ يَّعْمَلْ مِثْقَالَ ذَرَّةٍ شَرًّا يَّرَهٗ ۝٨',
        transliterasi:
          'Iżā zulzilatil-arḍu zilzālahā. Wa akhrajatil-arḍu aṡqālahā. Wa qālal-insānu mā lahā. Yauma\'iżin tuḥaddiṡu akhbārahā. Bi\'anna rabbaka auḥā lahā. Yauma\'iżiy yaṣdurun-nāsu asytātal liyurau a\'mālahum. Fa may ya\'mal miṡqāla żarratin khairay yarah. Wa may ya\'mal miṡqāla żarratin syarray yarah.',
        terjemahan:
          'Apabila bumi diguncangkan dengan guncangan yang dahsyat, dan bumi telah mengeluarkan beban-beban berat (yang dikandung)nya, dan manusia bertanya, "Apa yang terjadi pada bumi ini?" Pada hari itu bumi menyampaikan berita (tentang apa yang terjadi di atasnya), karena sesungguhnya Tuhanmu telah memerintahkan (yang demikian itu) kepadanya. Pada hari itu manusia keluar dari kuburnya dalam keadaan berkelompok-kelompok, untuk diperlihatkan kepada mereka (balasan) semua perbuatan mereka. Maka barangsiapa mengerjakan kebaikan seberat zarrah, niscaya dia akan melihat (balasan)nya. Dan barangsiapa mengerjakan kejahatan seberat zarrah, niscaya dia akan melihat (balasan)nya pula.',
        kandunganPokok: [
          'Deskripsi geologis kehancuran kosmis: bumi bergoncang dahsyat hingga memuntahkan magma, mineral, dan jasad-jasad yang terkubur di dalamnya.',
          'Bumi menjadi saksi bisu yang berbicara atas izin Allah, melaporkan setiap tindakan ketaatan maupun kejahatan yang pernah diperbuat manusia di permukaannya.',
          'Prinsip Keadilan Ilahi yang Maha Presisi: tidak ada satu pun amal kebajikan atau keburukan yang luput, sekalipun hanya seberat partikel zarrah terkecil.'
        ],
        audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/6139.mp3'
      },
      {
        id: 'dalil-al-qariah-1-11',
        surah: 'Q.S. Al-Qāri\'ah',
        ayatNomor: '1-11',
        namaSurah: 'Al-Qāri\'ah (Hari Kiamat)',
        artiSurah: 'Manusia Bagai Laron Bertebaran dan Neraca Mizan Keberuntungan',
        teksArab:
          'اَلْقَارِعَةُۙ ۝١ مَا الْقَارِعَةُۚ ۝٢ وَمَآ اَدْرٰىكَ مَا الْقَارِعَةُۗ ۝٣ يَوْمَ يَكُوْنُ النَّاسُ كَالْفَرَاشِ الْمَبْثُوْثِۙ ۝٤ وَتَكُوْنُ الْجِبَالُ كَالْعِهْنِ الْمَنْفُوْشِۗ ۝٥ فَاَمَّا مَنْ ثَقُلَتْ مَوَازِيْنُهٗۙ ۝٦ فَهُوَ فِيْ عِيْشَةٍ رَّاضِيَةٍۗ ۝٧ وَاَمَّا مَنْ خَفَّتْ مَوَازِيْنُهٗۙ ۝٨ فَاُمُّهٗ هَاوِيَةٌۗ ۝٩ وَمَآ اَدْرٰىكَ مَا هِيَهْۗ ۝١٠ نَارٌ حَامِيَةٌ ۝١١',
        transliterasi:
          'Al-qāri\'ah. Mal-qāri\'ah. Wa mā adrāka mal-qāri\'ah. Yauma yakūnun-nāsu kal-farāsyil-mabṡūṡ. Wa takūnul-jibālu kal-\'ihnil-manfūsy. Fa ammā man ṡaqulat mawāzīnuh. Fa huwa fī \'īsyatir rāḍiyah. Wa ammā man khaffat mawāzīnuh. Fa ummuhū hāwiyah. Wa mā adrāka mā hiyah. Nārun ḥāmiyah.',
        terjemahan:
          'Hari Kiamat, apakah hari Kiamat itu? Dan tahukah kamu apakah hari Kiamat itu? Pada hari itu manusia seperti laron yang berterbangan, dan gunung-gunung seperti bulu yang dihambur-hamburkan. Maka adapun orang yang berat timbangan (kebaikan)nya, maka dia berada dalam kehidupan yang memuaskan (senang). Dan adapun orang yang ringan timbangan (kebaikan)nya, maka tempat kembalinya adalah neraka Hawiyah. Dan tahukah kamu apakah neraka Hawiyah itu? (Yaitu) api yang sangat panas.',
        kandunganPokok: [
          'Visualisasi kekacauan manusia yang panik tak tentu arah laksana laron beterbangan di malam hari mengitari api.',
          'Pemusnahan pasak bumi: gunung-gunung batu yang kokoh dihancurkan menjadi serbuk lembut laksana kapas/bulu domba yang tertiup badai.',
          'Dua poros nasib manusia berdasarkan Neraca Mizan: Mizan yang berat kebajikannya membawa ke Surga nan ridha, sedangkan Mizan yang ringan menghempaskan ke kobaran api neraka Hawiyah yang menyala membakar.'
        ],
        audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/6168.mp3'
      },
      {
        id: 'dalil-hadits-tanda-kubra',
        surah: 'Hadits Riwayat Muslim',
        ayatNomor: 'No. 2901',
        namaSurah: 'Shahih Muslim (Kitab al-Fitan)',
        artiSurah: '10 Tanda Besar Menjelang Hari Kiamat Kubra',
        teksArab:
          'عَنْ حُذَيْفَةَ بْنِ أَسِيدٍ الْغِفَارِيِّ قَالَ: اطَّلَعَ النَّبِيُّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ عَلَيْنَا وَنَحْنُ نَتَذَاكَرُ فَقَالَ: مَا تَذَاكَرُونَ؟ قَالُوا: نَذْكُرُ السَّاعَةَ. قَالَ: إِنَّهَا لَنْ تَقُومَ حَتَّى تَرَوْنَ قَبْلَهَا عَشْرَ آيَاتٍ: فَذَكَرَ الدُّخَانَ، وَالدَّجَّالَ، وَالدَّابَّةَ، وَطُلُوعَ الشَّمْسِ مِنْ مَغْرِبِهَا، وَنُزُولَ عِيسَى ابْنِ مَرْيَمَ، وَيَأْجُوجَ وَمَأْجُوجَ، وَثَلَاثَةَ خُسُوفٍ: خَسْفٌ بِالْمَشْرِقِ، وَخَسْفٌ بِالْمَغْرِبِ، وَخَسْفٌ بِجَزِيرَةِ الْعَرَبِ، وَآخِرُ ذَلِكَ نَارٌ تَخْرُجُ مِنَ الْيَمَنِ تَطْرُدُ النَّاسَ إِلَى مَحْشَرِهِمْ',
        transliterasi:
          'Dari Hudzaifah bin Asid al-Ghifari berkata: Nabi SAW menemui kami saat kami sedang berbincang-bincang. Beliau bertanya: "Apa yang kalian perbincangkan?" Para sahabat menjawab: "Kami membicarakan tentang kiamat." Beliau bersabda: "Sesungguhnya kiamat tidak akan terjadi hingga kalian melihat sebelumnya sepuluh tanda: Dukhan (asap tebal), Dajjal, Dabbah (hewan melata), terbitnya matahari dari barat, turunnya Isa bin Maryam, Ya\'juj dan Ma\'juj, tiga penenggelaman bumi (di timur, di barat, dan di jazirah Arab), dan yang terakhir adalah api yang keluar dari Yaman yang menggiring manusia ke tempat perkumpulan (mahsyar) mereka."',
        terjemahan:
          'Kiamat tidak akan tiba sebelum muncul 10 tanda besar: (1) Asap kabut tebal (Dukhan), (2) Fitnah Dajjal, (3) Binatang melata ajaib (Dabbah), (4) Matahari terbit dari barat, (5) Turunnya Nabi Isa AS, (6) Keluarnya Ya\'juj dan Ma\'juj, (7-9) Tiga penenggelaman bumi (di timur, barat, dan jazirah Arab), serta (10) Api besar dari dasar lembah Yaman yang menggiring manusia ke Mahsyar.',
        kandunganPokok: [
          'Kiamat Kubra didahului oleh rentetan fenomena luar biasa yang merusak hukum keteraturan alam semesta.',
          'Pintu tobat akan ditutup secara permanen saat matahari terbit dari barat dan keluarnya binatang Dabbah.',
          'Nabi Isa AS diturunkan bukan membawa syariat baru, melainkan menegakkan syariat Nabi Muhammad SAW, menghancurkan salib, membunuh babi, dan melenyapkan fitnah Dajjal.'
        ]
      }
    ],
    tandaTandaKiamat: {
      kiamatSugra: {
        definisi:
          'Kiamat Sugrā (Kiamat Kecil) adalah peristiwa berakhirnya kehidupan sebagian makhluk atau rusaknya sebagian tatanan alam lokal dalam skala individu atau regional, serta fenomena perubahan moral dan sosial masyarakat sebelum terjadinya kehancuran total semesta.',
        contohPeristiwa: [
          {
            id: 'sugra-1',
            kategori: 'Sugra',
            namaTanda: 'Kematian Individu Manusia (Al-Maut)',
            dalilRujukan: 'Q.S. Ali \'Imran: 185 ("Kullu nafsin żā\'iqatul-maut")',
            penjelasan:
              'Setiap manusia yang menghembuskan napas terakhir sesungguhnya telah mengalami kiamat pribadinya. Pintu amal dunianya terputus dan ia langsung berpindah ke alam barzakh.',
            faktaKontekstual:
              'Rata-rata 150.000 jiwa manusia wafat setiap harinya di seluruh dunia, membuktikan bahwa batas antara dunia dan akhirat hanyalah sehelai tarikan napas.'
          },
          {
            id: 'sugra-2',
            kategori: 'Sugra',
            namaTanda: 'Bencana Alam Lokal dan Kerusakan Bumi',
            dalilRujukan: 'Q.S. Ar-Rum: 41 ("Zaharal-fasādu fil-barri wal-baḥr")',
            penjelasan:
              'Gempa bumi tektonik, letusan gunung berapi dahsyat, gelombang tsunami, banjir bandang, dan kekeringan ekstrem yang merenggut nyawa serta menghancurkan peradaban.',
            faktaKontekstual:
              'Peningkatan frekuensi bencana geologis dan hidrometeorologis global menjadi peringatan nyata bahwa bumi tempat berpijak sangat rapuh.'
          },
          {
            id: 'sugra-3',
            kategori: 'Sugra',
            namaTanda: 'Dicabutnya Ilmu dengan Wafatnya Para Ulama Rabbani',
            dalilRujukan: 'H.R. Bukhari No. 100 & Muslim No. 2673',
            penjelasan:
              'Allah tidak mencabut ilmu agama secara langsung dari dada manusia, melainkan dengan memanggil pulang para ulama yang saleh dan istiqamah, hingga manusia mengangkat pemimpin bodoh yang berfatwa tanpa dasar ilmu.',
            faktaKontekstual:
              'Maraknya pemengaruh (influencer) media sosial yang menyebarkan fatwa agama instan tanpa kompetensi talaqqi, memicu kebingungan moral umat.'
          },
          {
            id: 'sugra-4',
            kategori: 'Sugra',
            namaTanda: 'Dekadensi Moral: Maraknya Perzinaan, Miras, dan Durhaka kepada Orang Tua',
            dalilRujukan: 'H.R. Bukhari No. 80 & Hadits Jibril tentang Tanda Kiamat',
            penjelasan:
              'Budaya hedonisme, hubungan bebas dianggap biasa, minuman keras dan narkotika dilegalkan secara terselubung, serta anak memperlakukan ibunya laksana sahaya (pembantu).',
            faktaKontekstual:
              'Kemerosotan adab generasi muda, perundungan di sekolah, dan hilangnya rasa hormat kepada orang tua serta pendidik.'
          },
          {
            id: 'sugra-5',
            kategori: 'Sugra',
            namaTanda: 'Berlomba-lomba Meninggikan Bangunan Megah',
            dalilRujukan: 'Hadits Jibril (Shahih Muslim No. 8)',
            penjelasan:
              'Orang-orang yang dahulunya miskin penggembala domba berlomba mendirikan gedung-gedung pencakar langit yang mewah demi kebanggaan prestise.',
            faktaKontekstual:
              'Pembangunan gedung-gedung tertinggi di kawasan jazirah Arab dan kota-kota metropolis dunia yang menembus awan.'
          },
          {
            id: 'sugra-6',
            kategori: 'Sugra',
            namaTanda: 'Waktu Terasa Begitu Cepat Berlalu',
            dalilRujukan: 'H.R. Tirmidzi No. 2332',
            penjelasan:
              'Setahun terasa seperti sebulan, sebulan terasa seperti sepekan, sepekan terasa seperti sehari, dan sehari terasa seperti sekejap terbakarnya sebatang pelepah kurma karena hilangnya berkah waktu.',
            faktaKontekstual:
              'Manusia modern terpaku pada layar gadget berjam-jam (screen time tinggi), sehingga hari-hari berlalu tanpa karya produktif bernilai ibadah.'
          }
        ]
      },
      kiamatKubra: {
        definisi:
          'Kiamat Kubrā (Kiamat Besar) adalah kehancuran total, permanen, dan serentak dari seluruh jagat raya, tatasurya, galaksi, bumi, dan langit, di mana seluruh makhluk hidup binasa dan tatanan fisika alam semesta digulung menjadi ketiadaan.',
        sepuluhTandaBesar: [
          {
            id: 'kubra-1',
            kategori: 'Kubra',
            namaTanda: '1. Munculnya Dajjal (Al-Masih ad-Dajjal)',
            dalilRujukan: 'H.R. Muslim No. 2937',
            penjelasan:
              'Sosok pendusta terbesar di muka bumi yang bermata satu buta sebelah dan di dahinya tertulis huruf K-F-R (Kafir). Ia diberi kemampuan istidraj oleh Allah untuk menurunkan hujan dan menghidupkan orang mati semu guna menguji keimanan manusia.',
            faktaKontekstual:
              'Pelindung terkuat dari fitnah Dajjal adalah menghafal 10 ayat pertama atau terakhir Q.S. Al-Kahfi serta memperkokoh tauhid murni.'
          },
          {
            id: 'kubra-2',
            kategori: 'Kubra',
            namaTanda: '2. Turunnya Nabi Isa \'Alaihissalam',
            dalilRujukan: 'Q.S. An-Nisa: 159 & H.R. Bukhari No. 2222',
            penjelasan:
              'Nabi Isa AS diturunkan di menara putih sebelah timur Damaskus, berpegang pada sayap dua malaikat. Beliau akan membunuh Dajjal di pintu Ludd (Palestina), menegakkan syariat Islam, dan memimpin dunia dalam keadilan dan kedamaian.',
            faktaKontekstual:
              'Menjadi bukti kepastian nubuwwah bahwa kebenaran Islam akan menang mutlak di akhir zaman atas segala bentuk kebatilan.'
          },
          {
            id: 'kubra-3',
            kategori: 'Kubra',
            namaTanda: '3. Keluarnya Ya\'juj dan Ma\'juj',
            dalilRujukan: 'Q.S. Al-Anbiya: 96-97 & Q.S. Al-Kahfi: 98-99',
            penjelasan:
              'Dua kabilah manusia perusak yang dahulu dibendung oleh Raja Dzulqarnain dengan dinding tembaga dan besi. Mereka akan keluar menerobos dari segala penjuru dengan jumlah sangat banyak dan meminum habis air danau Thabariyyah.',
            faktaKontekstual:
              'Mereka binasa setelah Nabi Isa AS dan kaum mukmin berdoa kepada Allah, yang kemudian mengirimkan ulat leher (an-naghaf) untuk memusnahkan mereka serentak.'
          },
          {
            id: 'kubra-4',
            kategori: 'Kubra',
            namaTanda: '4. Terbitnya Matahari dari Arah Barat',
            dalilRujukan: 'Q.S. Al-An\'am: 158 & H.R. Bukhari No. 4635',
            penjelasan:
              'Pembalikan rotasi kosmis bumi. Ketika peristiwa ini terjadi, seluruh manusia seketika beriman, namun tobat sudah tidak lagi diterima bagi orang yang sebelumnya kafir atau fasik.',
            faktaKontekstual:
              'Titik batas akhir (deadline) diterimanya tobat umat manusia. Penyesalan setelah terbitnya matahari dari barat sudah sia-sia.'
          },
          {
            id: 'kubra-5',
            kategori: 'Kubra',
            namaTanda: '5. Munculnya Dābbat al-Ardh (Binatang Melata Ajaib)',
            dalilRujukan: 'Q.S. An-Naml: 82',
            penjelasan:
              'Binatang melata dari perut bumi yang dapat berbicara dengan bahasa manusia. Ia membawa Tongkat Nabi Musa AS dan Cincin Nabi Sulaiman AS untuk menandai wajah mukmin (bercahaya) dan mencap hidung orang kafir (gelap pekat).',
            faktaKontekstual:
              'Menjadi pemisah tegas yang kasat mata antara barisan orang beriman sejati dengan orang-orang yang ingkar.'
          },
          {
            id: 'kubra-6',
            kategori: 'Kubra',
            namaTanda: '6. Kabut Asap Tebal Menyelimuti Bumi (Ad-Dukhān)',
            dalilRujukan: 'Q.S. Ad-Dukhan: 10-11',
            penjelasan:
              'Asap kabut panas yang pekat memenuhi atmosfer bumi selama 40 hari. Bagi orang beriman, asap ini hanya membuat mereka seperti terserang flu ringan, sedangkan bagi orang kafir asap ini keluar dari telinga dan dubur mereka menimbulkan siksaan pedih.',
            faktaKontekstual:
              'Menunjukkan keruntuhan seluruh sistem teknologi dan peradaban materi sebelum kehancuran total semesta.'
          },
          {
            id: 'kubra-7',
            kategori: 'Kubra',
            namaTanda: '7. Tiga Penenggelaman Bumi (Khusūf Tsalātsah)',
            dalilRujukan: 'H.R. Muslim No. 2901',
            penjelasan:
              'Tiga bencana amblesnya daratan bumi raksasa ke dalam perut bumi (sinkhole/subsidence masif): satu di belahan timur bumi, satu di barat bumi, dan satu lagi di Jazirah Arab.',
            faktaKontekstual:
              'Goncangan struktur tektonik global yang menandakan hilangnya stabilitas lempeng mantel bumi.'
          },
          {
            id: 'kubra-8',
            kategori: 'Kubra',
            namaTanda: '8. Angin Lembut Pembawa Ruh Orang Mukmin',
            dalilRujukan: 'H.R. Muslim No. 1924',
            penjelasan:
              'Setelah tanda-tanda besar terjadi, Allah menghembuskan angin sepoi-sepoi yang sangat sejuk dari arah Yaman atau Syam yang mencabut ruh setiap mukmin yang di hatinya ada iman sekecil zarrah.',
            faktaKontekstual:
              'Kiamat Kubra yang mengerikan tidak akan disaksikan oleh orang beriman; kehancuran semesta hanya akan menimpa seburuk-buruk manusia di muka bumi.'
          },
          {
            id: 'kubra-9',
            kategori: 'Kubra',
            namaTanda: '9. Diangkatnya Mushaf Al-Qur\'an dari Muka Bumi',
            dalilRujukan: 'H.R. Ibnu Majah No. 4049',
            penjelasan:
              'Teks Al-Qur\'an diangkat dalam semalam, lembaran mushaf menjadi putih bersih tanpa tulisan, dan ayat-ayat Al-Qur\'an dihapus dari hafalan dada manusia.',
            faktaKontekstual:
              'Peringatan penting bagi umat Islam saat ini untuk rajin membaca, mengkaji, dan mengamalkan Al-Qur\'an sebelum waktu kesempatan itu dicabut.'
          },
          {
            id: 'kubra-10',
            kategori: 'Kubra',
            namaTanda: '10. Api Raksasa dari Kawah Aden Yaman Menggiring Manusia',
            dalilRujukan: 'H.R. Muslim No. 2901 & Bukhari No. 6522',
            penjelasan:
              'Api berkobar dahsyat yang keluar dari kawah lembah Aden Yaman yang menyala terus-menerus dan menggiring manusia dari belakang menuju tempat perkumpulan (Syam/Mahsyar).',
            faktaKontekstual:
              'Penutup seluruh rentetan tanda sebelum ditiupnya sangkakala pertama penghancuran total semesta.'
          }
        ]
      }
    },
    peristiwaSetelahKematian: {
      sakaratulMaut:
        'Sakaratul maut adalah proses pelepasan ruh dari jasad manusia yang amat dahsyat. Bagi orang mukmin, malaikat maut hadir dengan wajah tersenyum dan ruh dicabut laksana tetesan air dari bibir teko dengan lembut. Bagi orang kafir dan pendosa berat, malaikat maut hadir dengan rupa menakutkan dan ruh dicabut bagai mencabut kawat berduri dari wol basah yang merobek seluruh urat dan persendian (H.R. Ahmad & Abu Dawud).',
      alamBarzakh:
        'Alam Barzakh (secara bahasa berarti dinding atau sekat) adalah dimensi transisi antara alam fana duniawi dengan alam baka akhirat. Di alam kubur inilah arwah manusia berdiam menanti ditiupnya sangkakala kebangkitan.',
      fitnahKuburMunkarNakir:
        'Setelah jenazah dikuburkan dan pengantar melangkah 7 langkah pulang, dua malaikat bernama Munkar dan Nakir yang berwajah hitam legam dan bersuara bagai petir datang mendudukkan mayit untuk mengajukan 3 pertanyaan fundamental akidah: "Man Rabbuka?" (Siapa Tuhanmu?), "Mā Dīnuka?" (Apa agamamu?), dan "Man Nabiyyuka?" (Siapa nabimu?). Lidah orang beriman akan dimantapkan oleh Allah untuk menjawab dengan lantang dan tegas, sementara orang munafik dan kafir hanya berteriak terbata-bata: "Hāh... hāh... lā adrī" (Aku tidak tahu!).',
      nikmatDanSiksaKubur:
        'Bagi mukmin yang lulus ujian kubur: dibukakan pintu menuju surga, kuburnya dilapangkan sejauh mata memandang (70 hasta), semerbak wangi surga menyelimutinya, dan amalnya menjelma menjadi sosok berwajah tampan rupawan yang setia menemani. Sebaliknya bagi pendosa dan orang ingkar: kuburnya menghimpit hingga tulang rusuknya bersilangan, dibukakan jendela neraka yang hawa panasnya membakar, dan dipukul dengan palu godam godam malaikat hingga hancur berkali-kali sampai hari kiamat tiba.',
      amalanPenyelamatSiksaKubur: [
        'Rutin membaca dan mentadaburi Surah Al-Mulk setiap malam sebelum tidur (H.R. Tirmidzi No. 2890 menyebutnya Al-Māni\'ah/Penyelamat dari azab kubur)',
        'Menjaga kebersihan dari percikan air kencing (istinja\' yang bersih dan tuntas, karena percikan kencing adalah penyebab utama azab kubur)',
        'Menjauhi perbuatan ghibah (menggunjing aib orang) dan namimah (mengadu domba fitnah)',
        'Memperbanyak doa perlindungan di tasyahud akhir sebelum salam: "Allāhumma innī a\'ūżu bika min \'ażābi jahannam, wa min \'ażābil-qabr..."',
        'Mati syahid di jalan Allah atau meninggal dunia pada malam/hari Jumat dalam keadaan husnul khatimah'
      ]
    }
  },
  bagian2TahapanHariAkhir: {
    pengantarKronologi:
      'Setelah alam semesta mengalami Kiamat Kubra, perjalanan manusia menuju keabadian melewati serangkaian tahapan akbar yang berkeadilan mutlak. Tidak ada seorang pun yang dizalimi, tidak ada suap, tidak ada koneksi keluarga, dan setiap orang sibuk memikirkan nasib jiwanya masing-masing.',
    sembilanTahapan: [
      {
        urutan: 1,
        namaTahapan: 'Kiamat Kubra & Tiupan Sangkakala Pertama (Nafkhatush Sha\'iq)',
        namaArab: 'نَفْخَةُ الصَّعِقِ',
        artiNama: 'Tiupan Sangkakala Pembinasaan Total',
        dalilAlQuran: 'Q.S. Az-Zumar [39]: 68',
        teksDalilArab: 'وَنُفِخَ فِى الصُّوْرِ فَصَعِقَ مَنْ فِى السَّمٰوٰتِ وَمَنْ فِى الْاَرْضِ اِلَّا مَنْ شَاۤءَ اللّٰهُ',
        terjemahDalil:
          'Dan ditiuplah sangkakala, maka matilah siapa yang di langit dan di bumi kecuali siapa yang dikehendaki Allah.',
        deskripsiPeristiwa:
          'Malaikat Israfil meniup sangkakala (trompet raksasa berkilat) untuk kali pertama atas titah Allah Swt. Seluruh makhluk di langit dan di bumi seketika mati bergelimpangan dan alam semesta hancur lebur.',
        keadaanManusia:
          'Manusia panik luar biasa; wanita yang menyusui melupakan bayinya, wanita hamil langsung keguguran, dan manusia tampak mabuk padahal sejatinya tidak mabuk, melainkan karena azab Allah yang amat dahsyat (Q.S. Al-Hajj: 1-2).',
        hikmahPelajaran:
          'Menyadarkan bahwa kemegahan dunia, harta kekayaan, dan status sosial fana ini akan binasa dalam satu tarikan napas tiupan.'
      },
      {
        urutan: 2,
        namaTahapan: 'Tiupan Sangkakala Kedua (Nafkhatul Ba\'ats)',
        namaArab: 'نَفْخَةُ الْبَعْثِ',
        artiNama: 'Tiupan Sangkakala Kebangkitan',
        dalilAlQuran: 'Q.S. Az-Zumar [39]: 68 (Lanjutan)',
        teksDalilArab: 'ثُمَّ نُفِخَ فِيْهِ اُخْرٰى فَاِذَا هُمْ قِيَامٌ يَّنْظُرُوْنَ',
        terjemahDalil:
          'Kemudian ditiup sangkakala itu sekali lagi, maka seketika itu mereka bangun (dari kuburnya) menunggu (keputusan Allah).',
        deskripsiPeristiwa:
          'Setelah masa hening selama 40 (hari/bulan/tahun menurut riwayat Abu Hurairah), Allah menurunkan hujan khusus pemulih jasad dari langit. Tulang ekor manusia (ajbudz-dzanab) yang tidak pernah hancur tumbuh kembali, lalu Israfil meniup sangkakala kedua memanggil seluruh arwah bersatu kembali dengan jasadnya.',
        keadaanManusia:
          'Jasad manusia bangkit serentak dari tanah kubur seperti tanaman yang merekah disiram hujan, menatap ke sekeliling dengan penuh takjub dan ketakutan.',
        hikmahPelajaran:
          'Meyakini Kekuasaan Mutlak Allah yang mampu menghidupkan kembali makhluk yang telah lebur menjadi tanah tanpa kesulitan sedikit pun.'
      },
      {
        urutan: 3,
        namaTahapan: 'Yaumul Ba\'ats (Hari Kebangkitan dari Alam Kubur)',
        namaArab: 'يَوْمُ الْبَعْثِ',
        artiNama: 'Hari Dibangkitkannya Seluruh Makhluk',
        dalilAlQuran: 'Q.S. Yasin [36]: 51-52',
        teksDalilArab: 'وَنُفِخَ فِى الصُّوْرِ فَاِذَا هُمْ مِّنَ الْاَجْدَاثِ اِلٰى رَبِّهِمْ يَنْسِلُوْنَ',
        terjemahDalil:
          'Dan ditiuplah sangkakala, maka tiba-tiba mereka keluar dari kuburnya (menuju) kepada Tuhan mereka dengan cepat.',
        deskripsiPeristiwa:
          'Bumi merekah dan seluruh manusia dari zaman Nabi Adam AS hingga manusia terakhir dibangkitkan. Mereka keluar dari kuburan dalam kondisi tanpa busana, tanpa alas kaki, dan belum dikhitan (seperti saat pertama kali dilahirkan).',
        keadaanManusia:
          'Orang-orang kafir berteriak histeris: "Yā wailanā man ba\'aṡanā mim marqadinā?" (Aduhai celakalah kami, siapakah yang membangkitkan kami dari tempat tidur kami?). Orang beriman menjawab: "Inilah yang dijanjikan Yang Maha Pengasih dan benarlah para rasul."',
        hikmahPelajaran:
          'Membangkitkan kehati-hatian hidup: setiap jasad akan dibangkitkan sesuai dengan kondisi amal saat ia meninggal dunia.'
      },
      {
        urutan: 4,
        namaTahapan: 'Yaumul Hasyr / Yaumul Mahsyar (Hari Perkumpulan di Padang Mahsyar)',
        namaArab: 'يَوْمُ الْمَحْشَرِ',
        artiNama: 'Hari Dikumpulkannya Seluruh Generasi Manusia',
        dalilAlQuran: 'Q.S. Ibrahim [14]: 48',
        teksDalilArab: 'يَوْمَ تُبَدَّلُ الْاَرْضُ غَيْرَ الْاَرْضِ وَالسَّمٰوٰتُ وَبَرَزُوْا لِلّٰهِ الْوَاحِدِ الْقَهَّارِ',
        terjemahDalil:
          '(Yaitu) pada hari (ketika) bumi diganti dengan bumi yang lain dan (demikian pula) langit, dan mereka (seluruh manusia) berkumpul (di Padang Mahsyar) menghadap Allah Yang Maha Esa lagi Maha Mengalahkan.',
        deskripsiPeristiwa:
          'Seluruh manusia digiring ke Padang Mahsyar, hamparan tanah putih bersih seperti perak tanpa pepohonan, lembah, atau bukit tempat berteduh. Matahari didekatkan hanya berjarak 1 mil di atas kepala mereka, memancarkan panas yang terik tiada tara selama 50.000 tahun waktu akhirat.',
        keadaanManusia:
          'Manusia berdesak-desakan bermandikan peluh keringat. Keringat mereka menenggelamkan diri sesuai kadar dosanya (ada yang sampai mata kaki, lutut, pinggang, hingga menenggelamkan mulut). Hanya ada 7 golongan mukmin yang dinaungi bayang-bayang \'Arasy Allah.',
        hikmahPelajaran:
          'Mendidik kerendahan hati: di hadapan Allah tidak ada kasta presiden, raja, konglomerat, atau rakyat jelata; semuanya berdiri setara dengan amal masing-masing.'
      },
      {
        urutan: 5,
        namaTahapan: 'Syafa\'at \'Uzhma (Pertolongan Akbar Nabi Muhammad SAW)',
        namaArab: 'الشَّفَاعَةُ الْعُظْمَى',
        artiNama: 'Syafaat Terbesar untuk Memulai Pengadilan',
        dalilAlQuran: 'Q.S. Al-Isra [17]: 79 (Maqaman Mahmuda) & H.R. Bukhari No. 4712',
        teksDalilArab: 'عَسٰٓى اَنْ يَّبْعَثَكَ رَبُّكَ مَقَامًا مَّحْمُوْدًا',
        terjemahDalil:
          'Mudah-mudahan Tuhanmu mengangkatmu ke tempat yang terpuji (Maqāman Maḥmūdā).',
        deskripsiPeristiwa:
          'Karena dahsyatnya derita penantian di Mahsyar, manusia mendatangi para nabi besar (Nabi Adam, Nuh, Ibrahim, Musa, dan Isa) untuk meminta pertolongan agar hisab segera dimulai, namun semuanya merasa tidak berhak. Akhirnya mereka mendatangi Nabi Muhammad SAW yang bersabda: "Anā lahā!" (Akulah yang berhak memintakannya!). Beliau bersujud panjang di bawah \'Arasy hingga Allah mengizinkan pengadilan dimulai.',
        keadaanManusia:
          'Rasa lega yang mendalam menyelimuti padang mahsyar berkat kemuliaan Rasulullah SAW dan terbukanya pintu rahmat pemutusan perkara.',
        hikmahPelajaran:
          'Menumbuhkan rasa cinta dan rindu mendalam kepada Baginda Nabi Muhammad SAW serta istiqamah memperbanyak shalawat atas beliau.'
      },
      {
        urutan: 6,
        namaTahapan: 'Yaumul Hisāb (Hari Perhitungan dan Penyerahan Catatan Amal)',
        namaArab: 'يَوْمُ الْحِسَابِ',
        artiNama: 'Hari Diauditnya Seluruh Catatan Perbuatan',
        dalilAlQuran: 'Q.S. Yasin [36]: 65 & Q.S. Al-Insyiqaq [84]: 7-12',
        teksDalilArab: 'اَلْيَوْمَ نَخْتِمُ عَلٰٓى اَفْوَاهِهِمْ وَتُكَلِّمُنَآ اَيْدِيْهِمْ وَتَشْهَدُ اَرْجُلُهُمْ بِمَا كَانُوْا يَكْسِبُوْنَ',
        terjemahDalil:
          'Pada hari ini Kami tutup mulut mereka; tangan mereka akan berkata kepada Kami dan kaki mereka akan memberi kesaksian terhadap apa yang dahulu mereka kerjakan.',
        deskripsiPeristiwa:
          'Catatan amal yang ditulis Malaikat Raqib dan \'Atid berterbangan dibagikan. Orang beriman menerima kitab catatan amalnya dari sebelah kanan dengan penuh sukacita dan hisabnya dipermudah (Hisāb Yasīr). Orang kafir/munafik menerima kitab dari sebelah kiri atau dari belakang punggungnya dengan penuh keputusasaan.',
        keadaanManusia:
          'Mulut manusia dikunci rapat. Tangan berbicara menceritakan apa yang dipegang dan diketik, kaki bersaksi ke mana ia melangkah, kulit dan mata memberi kesaksian atas apa yang dilihat dan diraba secara jujur tanpa rekayasa.',
        hikmahPelajaran:
          'Membangun integritas moral tinggi dan kesadaran pengawasan diri (Muraqabatullah): tidak ada rahasia di hadapan Allah, bahkan jejak digital tersembunyi pun bersaksi.'
      },
      {
        urutan: 7,
        namaTahapan: 'Yaumul Mīzān (Hari Penimbangan Amal Kebajikan & Dosa)',
        namaArab: 'يَوْمُ الْمِيْزَانِ',
        artiNama: 'Hari Penimbangan Keadilan yang Presisi',
        dalilAlQuran: 'Q.S. Al-Anbiya [21]: 47 & Q.S. Al-Qari\'ah [101]: 6-9',
        teksDalilArab: 'وَنَضَعُ الْمَوَازِيْنَ الْقِسْطَ لِيَوْمِ الْقِيٰمَةِ فَلَا تُظْلَمُ نَفْسٌ شَيْـًٔا',
        terjemahDalil:
          'Dan Kami akan memasang timbangan yang adil pada hari Kiamat, maka tidak seorang pun dirugikan walau sedikit pun.',
        deskripsiPeristiwa:
          'Neraca timbangan hakiki (Mizan) berukuran raksasa ditegakkan. Memiliki dua daun timbangan dan jarum penunjuk yang sangat peka. Amal perbuatan fisik, shalat, sedekah, akhlak mulia, serta kalimat tauhid "Lā ilāha illallāh" akan diletakkan di atas daun timbangan kebaikan.',
        keadaanManusia:
          'Jantung berdegup kencang menatap jarum timbangan: barangsiapa timbangan kebaikannya lebih berat walau setipis sayap nyamuk, ia dinyatakan beruntung selamanya. Sebaliknya jika timbangan dosanya lebih berat, ia terancam binasa.',
        hikmahPelajaran:
          'Jangan pernah meremehkan kebaikan sekecil apa pun (senyuman tulus, membuang duri di jalan, bersikap sopan) karena bisa jadi menjadi penentu beratnya timbangan mizan.'
      },
      {
        urutan: 8,
        namaTahapan: 'As-Shirāth (Jembatan Menuju Surga Melintasi Neraka)',
        namaArab: 'الصِّرَاطُ',
        artiNama: 'Jembatan Menyeberangi Punggung Neraka Jahannam',
        dalilAlQuran: 'Q.S. Maryam [19]: 71-72 & H.R. Muslim No. 195',
        teksDalilArab: 'وَاِنْ مِّنْكُمْ اِلَّا وَارِدُهَاۚ كَانَ عَلٰى رَبِّكَ حَتْمًا مَّقْضِيًّا',
        terjemahDalil:
          'Dan tidak ada seorang pun di antara kamu yang tidak mendatanginya (melewati jembatan di atas neraka). Hal itu bagi Tuhanmu adalah suatu ketetapan yang sudah diputuskan.',
        deskripsiPeristiwa:
          'Jembatan panjang dibentangkan di atas jurang gelap neraka Jahannam yang bergejolak. Sifat jembatan digambarkan lebih tipis dari sehelai rambut yang dibelah tujuh dan lebih tajam dari mata pedang, dipenuhi kait-kait besi berduri tajam (Kalalīb) yang siap mencakar dan menyambar para pendosa.',
        keadaanManusia:
          'Kecepatan menyeberang bergantung murni pada cahaya amal di dunia: ada yang melintas secepat kilat menyambar, secepat hembusan angin, secepat kuda pacuan, berlari, berjalan, hingga merangkak dengan tubuh tercakar besi, lalu selamat sampai ke seberang. Adapun orang kafir dan munafik langsung terpeleset jatuh ke dasar jurang api neraka.',
        hikmahPelajaran:
          'Konsistensi meniti jalan kebenaran (Shirathal Mustaqim) di dunia adalah penentu kelancaran meniti jembatan Shirath di akhirat.'
      },
      {
        urutan: 9,
        namaTahapan: 'Yaumul Jazā\' (Hari Pembalasan Abadi: Surga & Neraka)',
        namaArab: 'يَوْمُ الْجَزَاءِ',
        artiNama: 'Hari Pembalasan Hakiki Tanpa Akhir',
        dalilAlQuran: 'Q.S. Al-Bayyinah [98]: 7-8',
        teksDalilArab: 'جَزَاۤؤُهُمْ عِنْدَ رَبِّهِمْ جَنّٰتُ عَدْنٍ تَجْرِيْ مِنْ تَحْتِهَا الْاَنْهٰرُ خٰلِدِيْنَ فِيْهَآ اَبَدًا',
        terjemahDalil:
          'Balasan mereka di sisi Tuhan mereka ialah surga \'Adn yang mengalir di bawahnya sungai-sungai; mereka kekal di dalamnya selama-lamanya.',
        deskripsiPeristiwa:
          'Puncak pembalasan dan pemisahan abadi. Orang-orang beriman disambut malaikat dengan salam keselamatan masuk ke istana-istana surga yang penuh kenikmatan inderawi dan ruhiyah tertinggi (melihat Wajah Allah Swt.). Sedangkan orang kafir dan pendosa dicampakkan ke dalam neraka Jahannam menjalani azab berlipat ganda.',
        keadaanManusia:
          'Di pintu surga dan neraka, kematian disembelih dalam rupa seekor domba jantan, lalu diserukan: "Wahai penghuni surga, kekallah tanpa kematian! Wahai penghuni neraka, kekallah tanpa kematian!" Kehidupan abadi tanpa akhir dimulai.',
        hikmahPelajaran:
          'Menanamkan orientasi hidup jangka panjang: kenikmatan fana dunia tidak ada bandingannya dengan kemuliaan surga, dan derita dunia tidak sebanding dengan azab neraka.'
      }
    ],
    surgaDanNeraka: {
      namaSurgaDanTingkatannya: [
        {
          nama: 'Surga Firdaus (جَنَّةُ الْفِرْدَوْسِ)',
          calonPenghuni: 'Tingkatan surga tertinggi bagi orang yang khusyuk shalatnya, menunaikan zakat, menjaga kemaluan, dan memelihara amanat serta janjinya.',
          dalil: 'Q.S. Al-Kahfi: 107 & Q.S. Al-Mu\'minun: 1-11'
        },
        {
          nama: 'Surga \'Adn (جَنَّاتُ عَدْنٍ)',
          calonPenghuni: 'Bagi orang yang bertakwa, istiqamah beramal saleh, sabar mencari rida Allah, dan gemar berinfaq terang-terangan maupun sembunyi-sembunyi.',
          dalil: 'Q.S. Ar-Ra\'d: 22-23'
        },
        {
          nama: 'Surga Na\'im (جَنَّةُ النَّعِيْمِ)',
          calonPenghuni: 'Bagi orang-orang yang beriman teguh dan senantiasa berbuat kebajikan sosial kepada sesama manusia.',
          dalil: 'Q.S. Luqman: 8'
        },
        {
          nama: 'Surga Ma\'wa (جَنَّةُ الْمَأْوٰى)',
          calonPenghuni: 'Bagi orang yang takut akan kebesaran Tuhannya dan menahan diri dari hawa nafsu rendah.',
          dalil: 'Q.S. An-Nazi\'at: 40-41'
        },
        {
          nama: 'Darussalam (دَارُ السَّلَامِ)',
          calonPenghuni: 'Negeri Kedamaian abadi bagi orang yang beriman, bertauhid kokoh, dan gemar menebarkan keselamatan.',
          dalil: 'Q.S. Al-An\'am: 127'
        }
      ],
      namaNerakaDanTingkatannya: [
        {
          nama: 'Neraka Jahannam (جَهَنَّمُ)',
          calonPenghuni: 'Tingkatan teratas bagi orang mukmin yang gemar berbuat maksiat dan dosa besar sebelum dibersihkan dosanya.',
          dalil: 'Q.S. An-Naba: 21-22'
        },
        {
          nama: 'Neraka Lazha (لَظٰى)',
          calonPenghuni: 'Api yang mengelupaskan kulit kepala bagi orang yang berpaling dari kebenaran dan menimbun harta enggan berzakat.',
          dalil: 'Q.S. Al-Ma\'arij: 15-18'
        },
        {
          nama: 'Neraka Huthamah (الْحُطَمَةُ)',
          calonPenghuni: 'Api menyala yang membakar sampai ke hulu hati bagi para pengumpat, pencela, dan orang yang mengira hartanya mengekalkannya.',
          dalil: 'Q.S. Al-Humazah: 1-7'
        },
        {
          nama: 'Neraka Sa\'ir (السَّعِيْرُ)',
          calonPenghuni: 'Kobaran api yang menyala dahsyat bagi orang yang memakan harta anak yatim secara zalim dan mendustakan rasul.',
          dalil: 'Q.S. An-Nisa: 10'
        },
        {
          nama: 'Neraka Saqar (سَقَرُ)',
          calonPenghuni: 'Api pembakar yang tidak membiarkan dan tidak meninggalkan bagi orang yang meninggalkan shalat fardhu dan enggan memberi makan orang miskin.',
          dalil: 'Q.S. Al-Muddassir: 42-44'
        },
        {
          nama: 'Neraka Jahim (الْجَحِيْمُ)',
          calonPenghuni: 'Bagi orang-orang kafir yang mendustakan ayat-ayat Allah dan melampaui batas kezhaliman di muka bumi.',
          dalil: 'Q.S. Asy-Syu\'ara: 91'
        },
        {
          nama: 'Neraka Hawiyah (الْهَاوِيَةُ)',
          calonPenghuni: 'Dasar jurang neraka paling bawah yang apinya luar biasa panas bagi orang yang ringan timbangan kebaikannya dan kaum munafik tulen.',
          dalil: 'Q.S. Al-Qari\'ah: 8-11 & Q.S. An-Nisa: 145'
        }
      ]
    }
  },
  bagian3HubunganAkhlakDanKehidupan: {
    konsepMoralBrake:
      'Iman kepada Hari Akhir berfungsi sebagai "Moral Brake" (Rem Moral Spiritual) dan pendorong etika terkuat dalam jiwa manusia. Seseorang yang sungguh-sungguh yakin bahwa seluruh gerak-gerik batin, kata-kata yang diucapkan, tatapan mata, hingga tulisan jari di ponsel pintar akan ditayangkan kembali di hadapan Mahkamah Ilahi pada Yaumul Hisab, secara otomatis akan memiliki sistem pengendalian diri (self-control) yang kokoh, baik saat dilihat orang banyak maupun saat sendirian dalam kesunyian.',
    dampakPositifPadaKarakter: [
      {
        dimensiKarakter: 'Integritas Kejujuran & Anti-Curang',
        manifestasiPerilaku:
          'Menolak menyontek saat ujian, tidak melakukan plagiarisme tugas sekolah, dan tidak memanipulasi data atau laporan keuangan kepanitiaan.',
        kaitanDenganHariAkhir:
          'Sadar akan firman Allah bahwa pada Yaumul Hisab mulut dikunci dan tangan serta kaki bersaksi (Q.S. Yasin: 65). Kemenangan palsu dari kecurangan dunia akan berujung kehinaan di neraka.'
      },
      {
        dimensiKarakter: 'Adab Digital & Kebersihan Lisan (Anti-Cyberbullying)',
        manifestasiPerilaku:
          'Menahan diri dari memposting ujaran kebencian, komentar jahat, hoaks, ghibah di media sosial, atau menyebarkan video aib sesama teman.',
        kaitanDenganHariAkhir:
          'Sadar akan bahaya status "Muflis" (orang yang bangkrut di akhirat), yaitu orang yang rajin shalat namun di padang Mahsyar pahalanya diserahkan kepada orang-orang yang pernah dicaci dan difitnahnya di media sosial (H.R. Muslim No. 2581).'
      },
      {
        dimensiKarakter: 'Filantropi & Kepedulian Sosial (Gemar Berinfaq)',
        manifestasiPerilaku:
          'Menyisihkan uang saku untuk kotak amal masjid, menolong teman yang kesulitan membeli alat tulis, dan tidak kikir berbagi makanan.',
        kaitanDenganHariAkhir:
          'Yakin bahwa harta hakiki bukanlah yang dihabiskan untuk kesenangan fana, melainkan apa yang disedekahkan karena akan menjadi naungan teduh di Padang Mahsyar.'
      },
      {
        dimensiKarakter: 'Resiliensi & Kesabaran Menghadapi Ujian Hidup',
        manifestasiPerilaku:
          'Tidak mudah berputus asa saat gagal, tabah menghadapi sakit atau musibah keluarga, dan tidak iri hati pada kemewahan orang lain yang didapat dari jalan haram.',
        kaitanDenganHariAkhir:
          'Memahami bahwa dunia hanyalah tempat ujian sementara (Darul Ibtila\'), sedangkan keadilan dan kebahagiaan sempurna tanpa air mata hanya ada di Surga Darussalam.'
      },
      {
        dimensiKarakter: 'Disiplin Waktu & Produktivitas Belajar',
        manifestasiPerilaku:
          'Bangun pagi menunaikan shalat Subuh berjamaah, tidak menunda-nunda tugas sekolah, dan membatasi scrolling media sosial yang tidak bermanfaat.',
        kaitanDenganHariAkhir:
          'Mengingat sabda Nabi bahwa kaki seorang hamba tidak akan bergeser di hari kiamat sebelum ditanya tentang umurnya untuk apa dihabiskan dan masa mudanya untuk apa dipergunakan (H.R. Tirmidzi No. 2417).'
      }
    ]
  },
  bagian4RefleksiDanPengembanganSikap: {
    tigaStudiKasus: [
      {
        id: 'kasus-1',
        judul: 'Kasus 1: Fenomena "Flexing", FOMO, dan Hedonisme di Era Media Sosial',
        fenomenaModern:
          'Banyak remaja dan pemengaruh media sosial memamerkan barang bermerek, saldo rekening, dan gaya hidup mewah (flexing) demi mengejar likes, followers, dan pengakuan semu. Remaja yang tidak mampu kerap merasa minder, cemas (FOMO), bahkan terjerumus pinjaman online ilegal atau tindakan asusila demi memenuhi standar gaya hidup fana.',
        dilemaMoral:
          'Apakah kemuliaan manusia diukur dari jumlah barang mewah yang dipamerkan di media sosial, ataukah dari kebersihan hati dan bekal amal yang disiapkan menyongsong Yaumul Mizan?',
        analisisAkidah:
          'Al-Qur\'an dalam Surah At-Takatsur [102]: 1-2 mengingatkan: "Al-hākumut-takāṡur, ḥattā zurtumul-maqābir" (Bermegah-megahan telah melalaikan kamu, sampai kamu masuk ke dalam kubur). Seluruh harta yang dipamerkan kelak akan menghadapi dua pertanyaan hisab di akhirat: "Dari mana diperolehnya, dan ke mana dibelanjakannya?".',
        solusiPraktis: [
          'Tumbuhkan sikap Qana\'ah (merasa cukup dan bersyukur atas rezeki halal yang Allah berikan).',
          'Lakukan "Digital Detox": kurangi paparan konten flexing yang memicu rasa dengki dan tidak bersyukur.',
          'Ubah orientasi dari "menimbun untuk pamer dunia" menjadi "berinfaq untuk tabungan abadi akhirat".'
        ]
      },
      {
        id: 'kasus-2',
        judul: 'Kasus 2: Cyberbullying, Hate Speech Anonim, dan Jejak Digital Akhirat',
        fenomenaModern:
          'Dengan akun media sosial palsu (second account/anonim), seorang pelajar mengirimkan komentar jahat, memfitnah guru, dan mencemooh fisik (body shaming) teman sekelasnya. Pelajar tersebut merasa aman karena identitas aslinya tidak diketahui oleh pihak sekolah.',
        dilemaMoral:
          'Merasa bebas berbuat zalim karena berlindung di balik layar digital anonim dan meyakini tidak ada sanksi hukum duniawi.',
        analisisAkidah:
          'Q.S. Qaf [50]: 18 menegaskan: "Mā yalfiẓu min qaulin illā ladaihi raqībun \'atīd" (Tidak ada suatu kata pun yang diucapkannya melainkan ada di sisinya malaikat pengawas yang selalu hadir). Q.S. Yasin [36]: 65 mengingatkan bahwa kelak di Yaumul Hisab tangan yang mengetik akan berbicara dan bersaksi di hadapan Allah. Jejak digital manusia bisa dihapus di server duniawi, namun tidak akan pernah terhapus dari Kitab Catatan Raqib dan \'Atid.',
        solusiPraktis: [
          'Prinsip "Tabayyun dan Tahan Jari": jika tidak mampu berkata baik di ruang digital, lebih baik diam.',
          'Segera meminta maaf kepada teman yang pernah disakiti di dunia sebelum terjadi tuntutan qishash pahala di Padang Mahsyar.',
          'Gunakan ruang digital semata-mata untuk menebarkan ilmu bermanfaat, motivasi kebaikan, dan silaturahmi.'
        ]
      },
      {
        id: 'kasus-3',
        judul: 'Kasus 3: Mencontek Canggih dengan AI dan Jalan Pintas Nilai Rapor',
        fenomenaModern:
          'Saat ujian daring atau tugas esai, seorang siswa menggunakan kecerdasan buatan (AI) secara penuh tanpa membaca, lalu mengakuinya sebagai hasil pemikiran aslinya demi memperoleh nilai 100 tanpa susah payah belajar.',
        dilemaMoral:
          'Mengejar hasil angka nilai rapor yang sempurna di mata manusia dengan mengorbankan kejujuran di hadapan Allah Yang Maha Melihat.',
        analisisAkidah:
          'Nabi Muhammad SAW bersabda: "Man ghasysyanā fa laisa minnā" (Barangsiapa yang berbuat curang/menipu kami, maka ia bukan golongan kami - H.R. Muslim). Nilai 100 yang didapat dari kecurangan adalah fatamorgana yang mengikis keberkahan ilmu dan memberatkan timbangan keburukan di Yaumul Mizan.',
        solusiPraktis: [
          'Tempatkan AI sebagai alat bantu eksplorasi referensi, bukan sebagai alat penipuan akademis.',
          'Yakin bahwa usaha jujur bernilai ibadah yang pahalanya kekal di akhirat, meskipun nilainya 75, jauh lebih mulia daripada nilai 100 dari kepalsuan.',
          'Tanamkan muraqabatullah: Allah Maha Mengetahui setiap ketukan tombol dan niat di balik hati.'
        ]
      }
    ],
    lembarMuhasabah8Dimensi: [
      {
        indikator: '1. Mengingat Kematian (Dzikrul Maut)',
        deskripsiPemeriksaanDiri:
          'Apakah setiap hari aku sempat mengingat bahwa ajalku bisa tiba kapan saja, sehingga aku bergegas bertaubat dan tidak menunda shalat fardhu?'
      },
      {
        indikator: '2. Kesadaran Alam Kubur & Doa Perlindungan',
        deskripsiPemeriksaanDiri:
          'Apakah aku rutin membaca Surah Al-Mulk sebelum tidur dan membaca doa perlindungan dari siksa kubur pada setiap akhir tasyahud shalatku?'
      },
      {
        indikator: '3. Menjaga Kebersihan Bersuci (Istinja\')',
        deskripsiPemeriksaanDiri:
          'Apakah aku sangat berhati-hati membersihkan diri dari percikan air kencing agar terhindar dari salah satu penyebab utama azab kubur?'
      },
      {
        indikator: '4. Kejujuran Tanpa Pengawas Manusia',
        deskripsiPemeriksaanDiri:
          'Apakah saat guru tidak melihat di ruang kelas atau saat ujian, aku tetap menolak mencontek karena sadar malaikat Raqib dan \'Atid selalu mencatat?'
      },
      {
        indikator: '5. Menjaga Lisan dan Jari di Media Sosial',
        deskripsiPemeriksaanDiri:
          'Apakah aku terbebas dari menyebarkan gosip, ghibah, ejekan teman, atau hoaks yang dapat menjadikanku manusia bangkrut (muflis) di akhirat?'
      },
      {
        indikator: '6. Kesiapan Menghadapi Timbangan Mizan',
        deskripsiPemeriksaanDiri:
          'Kebaikan tulus apa yang sudah aku tambahkan hari ini untuk memberatkan timbangan kebajikan di Yaumul Mizan kelak?'
      },
      {
        indikator: '7. Menjaga Hak Orang Lain & Meminta Maaf',
        deskripsiPemeriksaanDiri:
          'Apakah ada hak teman (barang pinjaman, utang uang, atau luka perasaan) yang belum aku selesaikan sebelum malaikat maut menjemput?'
      },
      {
        indikator: '8. Mengikhlaskan Niat Belajar Lillahi Ta\'ala',
        deskripsiPemeriksaanDiri:
          'Apakah niat belajarku di SMP ini semata-mata mencari rida Allah dan memberi manfaat bagi umat, bukan demi pamer kepintaran dan kesombongan duniawi?'
      }
    ],
    kebiasaanAmalHarian: [
      {
        waktu: 'Pagi Hari (Subuh - Jam Sekolah)',
        amalan: 'Shalat Subuh tepat waktu, dzikir pagi, dan berpamitan mencium tangan orang tua seraya memohon rida.',
        alasanAkidah: 'Rida Allah bergantung pada rida orang tua; langkah awal mencari naungan perlindungan di hari kiamat.'
      },
      {
        waktu: 'Siang Hari (Di Sekolah)',
        amalan: 'Menjaga integritas saat mengerjakan tugas, shalat Zhuhur berjamaah, dan menolong teman sekelas.',
        alasanAkidah: 'Menghindari kecurangan dan menabung amal kebajikan untuk penimbangan di Yaumul Mizan.'
      },
      {
        waktu: 'Sore Hari (Ashar - Maghrib)',
        amalan: 'Membantu pekerjaan rumah orang tua, bersedekah uang koin, dan membatasi media sosial.',
        alasanAkidah: 'Sedekah akan menjadi naungan teduh saat matahari didekatkan 1 mil di Padang Mahsyar.'
      },
      {
        waktu: 'Malam Hari (Isya - Tidur)',
        amalan: 'Membaca Surah Al-Mulk, muhasabah mengevaluasi dosa harian, bertaubat istighfar, dan berwudhu sebelum tidur.',
        alasanAkidah: 'Al-Mulk adalah perisai dari azab kubur dan tidur adalah "kematian kecil" (al-wafat ash-shughra).'
      }
    ]
  },
  bagian5HikmahBeriman: {
    enamHikmahUtama: [
      {
        judul: '1. Menggapai Ketenangan Jiwa Hakiki (Thuma\'ninatul Qalb)',
        penjelasan:
          'Keyakinan bahwa kehidupan tidak berakhir sia-sia memberikan ketenteraman batin yang mendalam. Orang beriman tidak frustrasi saat menghadapi ketidakadilan duniawi karena tahu bahwa keadilan sempurna dan sejati pasti ditegakkan di Mahkamah Ilahi.',
        dampakBatin: 'Bebas dari kepanikan eksistensial, kecemasan berlebih, dan rasa dendam tak berkesudahan.'
      },
      {
        judul: '2. Memperkuat Kontrol Diri (Self-Control) & Moralitas Luhur',
        penjelasan:
          'Menjadi pagar pembatas yang tangguh dari godaan maksiat tersembunyi. Kesadaran bahwa malaikat Raqib dan \'Atid tidak pernah tidur dan seluruh anggota tubuh akan bersaksi melahirkan generasi yang jujur dan berintegritas.',
        dampakBatin: 'Tumbuhnya rasa malu kepada Allah (Haya\') dan sikap wara\' (berhati-hati dari perkara syubhat).'
      },
      {
        judul: '3. Memotivasi Semangat Beramal Saleh Tanpa Henti',
        penjelasan:
          'Menjadikan setiap detik kehidupan sebagai ladang investasi pahala. Menyadari bahwa dunia sangat singkat dan fana mendorong seorang muslim untuk rajin beribadah, menuntut ilmu, berbakti kepada orang tua, dan menebar kemaslahatan.',
        dampakBatin: 'Semangat tinggi (himmah \'aliyah), pantang bermalas-malasan, dan produktif dalam kebaikan.'
      },
      {
        judul: '4. Menyeimbangkan Rasa Takut (Khauf) dan Harap (Raja\')',
        penjelasan:
          'Membentuk kepribadian yang seimbang: takut akan siksa kubur dan neraka menjauhkannya dari dosa sombong, sementara mengharap luasnya rahmat Allah dan keindahan surga menjauhkannya dari keputusasaan.',
        dampakBatin: 'Jiwa yang tawadhu\', senantiasa beristighfar, namun tetap optimis menatap masa depan.'
      },
      {
        judul: '5. Membebaskan Hati dari Ketamakan Materi (Zuhud & Qana\'ah)',
        penjelasan:
          'Menyadarkan bahwa harta dunia hanyalah titipan sementara yang akan ditinggalkan di liang kubur. Seorang mukmin tidak akan menghalalkan segala cara demi menumpuk kekayaan dan lebih mengutamakan infaq jariyah.',
        dampakBatin: 'Hati yang lapang, tidak diperbudak oleh tren gaya hidup mewah, dan gemar berbagi kepada sesama.'
      },
      {
        judul: '6. Memberikan Orientasi Hidup Visioner Melampaui Batas Kematian',
        penjelasan:
          'Visi orang beriman tidak kerdil hanya sebatas lulus sekolah, mendapat pekerjaan, dan pensiun, melainkan visi jangka panjang menembus surga firdaus dan keridhaan Allah Swt. yang kekal abadi.',
        dampakBatin: 'Hidup yang memiliki tujuan mulia, penuh arti, dan tidak terombang-ambing oleh arus zaman.'
      }
    ],
    kuisHots: [
      {
        id: 'hots-1',
        nomor: 1,
        kasus:
          'Seorang siswa menemukan dompet berisi uang tunai Rp 1.000.000,- dan kartu identitas di lorong toilet sekolah yang sepi tanpa ada kamera CCTV. Tidak ada seorang pun yang melihatnya. Meskipun ia sangat membutuhkan uang untuk melunasi biaya karya wisata sekolah, ia memilih segera menyerahkan dompet utuh tersebut kepada guru piket sekolah.',
        pertanyaan:
          'Sikap siswa tersebut merupakan perwujudan konkret dari keimanan kepada Hari Akhir pada tahapan...',
        pilihan: [
          'A. Yaumul Ba\'ats, karena ia yakin jasadnya akan bangkit bersama dompet tersebut',
          'B. Yaumul Hisab dan Mizan, karena ia sadar seluruh tindakannya diawasi Allah dan sekecil apa pun ketidakjujuran akan diperhitungkan serta memberatkan timbangan dosa',
          'C. Yaumul Mahsyar, karena ia ingin mendapatkan naungan matahari satu mil dari guru piket',
          'D. Kiamat Sugra, karena ia takut tertimpa musibah gempa bumi saat mengambil uang tersebut'
        ],
        kunciJawaban: 1,
        pembahasan:
          'Jawaban B benar. Siswa tersebut memiliki kesadaran muraqabatullah dan meyakini Yaumul Hisab (perhitungan amal) serta Yaumul Mizan (penimbangan amal). Meskipun tidak ada manusia atau CCTV yang melihat, Allah dan malaikat-Nya mencatat setiap perbuatan, dan kebaikan sekecil zarrah akan dibalas, sebagaimana ditegaskan dalam Q.S. Az-Zalzalah: 7-8 dan Q.S. Yasin: 65.'
      },
      {
        id: 'hots-2',
        nomor: 2,
        kasus:
          'Dalam Q.S. Az-Zumar ayat 68 dijelaskan bahwa ketika sangkakala ditiup untuk pertama kali, matilah semua makhluk di langit dan di bumi kecuali yang dikehendaki Allah. Kemudian sangkakala ditiup sekali lagi, maka seketika itu mereka bangun menunggu keputusan Allah.',
        pertanyaan:
          'Berdasarkan ayat tersebut, peristiwa yang terjadi pada tiupan sangkakala pertama dan kedua secara berurutan adalah...',
        pilihan: [
          'A. Nafkhatul Ba\'ats (kebangkitan) dan Nafkhatush Sha\'iq (pembinasaan)',
          'B. Yaumul Mahsyar (perkumpulan) dan Yaumul Hisab (perhitungan)',
          'C. Nafkhatush Sha\'iq (pembinasaan seluruh alam) dan Nafkhatul Ba\'ats (kebangkitan seluruh makhluk dari kubur)',
          'D. Kiamat Sugra (kematian lokal) dan As-Shirath (penyeberangan jembatan)'
        ],
        kunciJawaban: 2,
        pembahasan:
          'Jawaban C benar. Tiupan pertama dinamakan Nafkhatush Sha\'iq (tiupan yang mematikan dan membinasakan seluruh alam semesta), sedangkan tiupan kedua dinamakan Nafkhatul Ba\'ats (tiupan yang membangkitkan kembali seluruh jasad dan arwah manusia dari alam kubur untuk menghadap Allah).'
      },
      {
        id: 'hots-3',
        nomor: 3,
        kasus:
          'Di sebuah platform media sosial, beredar sebuah video hoaks dan fitnah yang merusak nama baik seorang ustadz. Seseorang bernama Dani dengan sengaja membagikan ulang (share) video tersebut ke ratusan grup percakapan hingga menjadi viral, dengan alasan hanya sekadar ikut meramaikan berita tanpa tabayyun.',
        pertanyaan:
          'Dalam tinjauan akidah Hari Akhir, bahaya terbesar yang mengancam Dani di Padang Mahsyar kelak menurut hadis Rasulullah SAW adalah...',
        pilihan: [
          'A. Ia akan dibangkitkan dalam keadaan buta karena tidak membaca tulisan',
          'B. Menjadi orang yang bangkrut (Al-Muflis), di mana pahala amal kebajikannya akan diambil dan diberikan kepada ustadz yang difitnahnya, dan bila pahalanya habis, dosa orang yang difitnah akan ditimpakan kepadanya',
          'C. Malaikat Munkar dan Nakir akan menolaknya masuk ke alam kubur',
          'D. Ia tidak diperbolehkan meminum air dari telaga Al-Kautsar selama 10 hari'
        ],
        kunciJawaban: 1,
        pembahasan:
          'Jawaban B benar. Rasulullah SAW dalam hadis sahih riwayat Muslim (No. 2581) menjelaskan tentang orang yang "Muflis" (bangkrut di hari kiamat): yaitu orang yang datang dengan pahala shalat, puasa, dan zakat, namun di dunia ia mencela, memfitnah, dan merampas hak orang lain. Pahala kebaikannya akan dibagikan kepada korban kezhalimannya hingga habis, lalu dosa para korban ditumpahkan kepadanya, kemudian ia dicampakkan ke dalam neraka.'
      },
      {
        id: 'hots-4',
        nomor: 4,
        kasus:
          'Perhatikan fenomena berikut:\n1. Adanya gempa bumi dan tsunami yang melanda wilayah pesisir pantai\n2. Matahari terbit dari arah barat\n3. Maraknya perzinaan dan hilangnya rasa hormat anak kepada orang tua\n4. Turunnya Nabi Isa AS membunuh Dajjal\n5. Wafatnya ulama-ulama saleh sehingga ilmu agama meredup\n6. Munculnya binatang melata Dābbat al-Ardh yang dapat berbicara',
        pertanyaan:
          'Kelompok fenomena yang merupakan tanda-tanda Kiamat Kubra (Kiamat Besar) ditunjukkan oleh nomor...',
        pilihan: [
          'A. 1, 3, dan 5',
          'B. 2, 4, dan 6',
          'C. 1, 2, dan 4',
          'D. 3, 5, dan 6'
        ],
        kunciJawaban: 1,
        pembahasan:
          'Jawaban B benar. Nomor 2 (matahari terbit dari barat), nomor 4 (turunnya Nabi Isa AS), dan nomor 6 (munculnya Dabbat al-Ardh) adalah tanda-tanda Kiamat Kubra (Kiamat Besar) sesuai hadis riwayat Muslim No. 2901. Sedangkan nomor 1, 3, dan 5 adalah tanda-tanda Kiamat Sugra (Kiamat Kecil).'
      },
      {
        id: 'hots-5',
        nomor: 5,
        kasus:
          'Arman adalah seorang siswa cerdas yang sering mendapat juara umum di sekolah. Suatu hari ia melihat temannya yang kurang mampu namun tetap bersemangat menyisihkan sebagian uang sakunya untuk kotak infaq dan rajin shalat dhuha. Arman menyadari bahwa kecerdasannya di dunia ini tidak menjamin keselamatannya di akhirat jika ia menjadi sombong dan malas beramal.',
        pertanyaan:
          'Kesimpulan hikmah beriman kepada Hari Akhir yang paling tepat berdasarkan perenungan Arman adalah...',
        pilihan: [
          'A. Prestasi akademis tidak berguna sama sekali dalam pandangan syariat Islam',
          'B. Dunia adalah Mazra\'atul Akhirah (ladang akhirat), di mana status kecerdasan atau kekayaan duniawi hanyalah sarana ujian, sedangkan penentu kemuliaan hakiki di sisi Allah adalah ketakwaan dan amal kebajikan',
          'C. Orang yang cerdas pasti akan terbebas dari pertanyaan malaikat Munkar dan Nakir di alam kubur',
          'D. Hari kiamat hanya diperuntukkan bagi orang yang tidak berprestasi di sekolah'
        ],
        kunciJawaban: 1,
        pembahasan:
          'Jawaban B benar. Konsep inti beriman kepada Hari Akhir mengajarkan bahwa dunia adalah "Mazra\'atul Akhirah" (ladang menanam amal untuk dipanen di akhirat). Keberhasilan akademis, jabatan, dan kecerdasan hanyalah instrumen amanah sementara; derajat kemuliaan hakiki di hadapan Neraca Mizan ditentukan oleh ketakwaan, keikhlasan niat, dan amal saleh.'
      }
    ]
  }
};
