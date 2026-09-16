export interface HukumTajwidLamDanRa {
  lafaz: string;
  ayatRujukan: string;
  hukum: string;
  kategori: 'Lam Jalalah Tafkhim' | 'Lam Jalalah Tarqiq' | 'Lam Ta\'rif Syamsiyah' | 'Lam Ta\'rif Qamariyah' | 'Ra Tafkhim' | 'Ra Tarqiq' | 'Jawazul Wajhain';
  alasanKaidah: string;
  caraMembaca: string;
}

export interface MufradatAyat {
  kataArab: string;
  transliterasi: string;
  arti: string;
  maknaPelajaran: string;
}

export interface SoalHotsBab1Kelas8 {
  id: string;
  nomor: number;
  kasus: string;
  pertanyaan: string;
  pilihan: string[];
  kunciJawaban: number;
  pembahasan: string;
}

export interface MateriKelas8Sem1Bab1 {
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
  ayat1: {
    surah: string;
    ayatNomor: number;
    teksArab: string;
    transliterasi: string;
    terjemahanResmi: string;
    asbabunNuzul: string;
    kandunganTafsir: {
      poin: string;
      penjelasan: string;
    }[];
    mufradat: MufradatAyat[];
  };
  ayat2: {
    surah: string;
    ayatNomor: number;
    teksArab: string;
    transliterasi: string;
    terjemahanResmi: string;
    asbabunNuzul: string;
    kandunganTafsir: {
      poin: string;
      penjelasan: string;
    }[];
    mufradat: MufradatAyat[];
  };
  haditsTerkait: {
    perawi: string;
    matanArab: string;
    transliterasi: string;
    terjemahan: string;
    syarahSingkat: string;
    relevansiKehidupan: string;
  }[];
  hukumTajwidLengkap: {
    panduanKaidah: {
      topik: string;
      kaidahTafkhim: string;
      kaidahTarqiq: string;
      caraMembunyikan: string;
    }[];
    daftarPenerapanPadaAyat: HukumTajwidLamDanRa[];
  };
  panduan4Keterampilan: {
    membacaTartil: {
      langkah: string[];
      adabMembaca: string[];
    };
    menghafalCepat: {
      metode: string;
      langkahLangkah: string[];
      tipsMurajaah: string;
    };
    menulisKhatKaidah: {
      kaidahPenulisan: string[];
      hurufPenting: string[];
      latihanMenulis: string;
    };
    menjelaskanRefleksiToleransi: {
      definisiToleransiIslam: string;
      batasToleransiAkidahVsMuamalah: string[];
      studiKasusToleransi: {
        situasi: string;
        sikapSiswa: string;
      }[];
    };
  };
  kuisHots: SoalHotsBab1Kelas8[];
}

export const MATERI_KELAS_8_SEM_1_BAB_1: MateriKelas8Sem1Bab1 = {
  babNumber: 1,
  judulBab: 'Inspirasi Al-Qur\'an: Membangun Harmoni Kehidupan melalui Toleransi dan Kedamaian',
  subJudul: 'Membaca, Menghafal, Menulis, dan Menjelaskan Q.S. Al-Hujurat/49: 13 dan Q.S. Al-Baqarah/2: 256 serta Hukum Tajwid Lam dan Ra\'',
  elemenCp: 'Al-Qur\'an dan Hadis',
  fase: 'D (SMP/MTs)',
  semester: 'Semester 1',
  pengantar: {
    apersepsi: 'Indonesia adalah negeri yang dianugerahi Allah Swt. keberagaman suku, bahasa daerah, adat istiadat, dan agama. Keberagaman ini bukanlah alasan untuk saling bertikai atau membanggakan kelompok sendiri, melainkan keindahan fitrah agar manusia saling mengenal (*lita\'ārafū*) dan berkolaborasi membangun peradaban damai. Al-Qur\'an telah menggariskan piagam kemanusiaan universal dalam Q.S. Al-Hujurāt [49]: 13 bahwa kemuliaan seseorang hanya ditentukan oleh ketakwaannya, bukan ras atau warna kulitnya. Selanjutnya, Q.S. Al-Baqarah [2]: 256 menegaskan prinsip kebebasan beragama tanpa paksaan (*lā ikrāha fid-dīn*). Melalui bab ini, kita akan mengasah 4 keterampilan utama: Membaca tartil dengan tajwid lam dan ra\', Menghafal dengan metode tikrar, Menulis khat Arab yang benar, serta Menjelaskan pesan toleransi dalam kehidupan bermasyarakat.',
    tujuanPembelajaran: [
      'Membaca Q.S. Al-Hujurāt/49: 13 dan Q.S. Al-Baqarah/2: 256 dengan tartil sesuai kaidah tajwid, khususnya hukum Lam (Jalalah & Ta\'rif) dan Ra\' (Tafkhim & Tarqiq)',
      'Menghafal Q.S. Al-Hujurāt/49: 13 dan Q.S. Al-Baqarah/2: 256 serta hadis terkait toleransi dengan lancar dan fasih',
      'Menuliskan ayat-ayat tersebut dengan kaidah khat kaligrafi Arab yang rapi, tepat harakat, dan menyambung huruf secara benar',
      'Menganalisis mufradat (kosakata), asbabun nuzul, terjemahan resmi, dan kandungan tafsir tentang prinsip kesetaraan manusia dan kebebasan memeluk agama',
      'Menjelaskan batasan toleransi dalam Islam (tegas dalam akidah-ibadah, santun dan bekerjasama dalam muamalah sosial-kemanusiaan) serta menyelesaikan soal HOTS'
    ]
  },
  ayat1: {
    surah: 'Q.S. Al-Hujurāt',
    ayatNomor: 13,
    teksArab: 'يٰٓاَيُّهَا النَّاسُ اِنَّا خَلَقْنٰكُمْ مِّنْ ذَكَرٍ وَّاُنْثٰى وَجَعَلْنٰكُمْ شُعُوْبًا وَّقَبَاۤىِٕلَ لِتَعَارَفُوْا ۚ اِنَّ اَكْرَمَكُمْ عِنْدَ اللّٰهِ اَتْقٰىكُمْ ۗ اِنَّ اللّٰهَ عَلِيْمٌ خَبِيْرٌ',
    transliterasi: 'Yā ayyuhan-nāsu innā khalaqnākum min żakariw wa unṡā wa ja‘alnākum syu‘ūbaw wa qabā\'ila lita‘ārafū, inna akramakum ‘indallāhi atqākum, innallāha ‘alīmun khabīr(un).',
    terjemahanResmi: 'Wahai manusia! Sungguh, Kami telah menciptakan kamu dari seorang laki-laki dan seorang perempuan, kemudian Kami jadikan kamu berbangsa-bangsa dan bersuku-suku agar kamu saling mengenal. Sesungguhnya yang paling mulia di antara kamu di sisi Allah ialah orang yang paling bertakwa. Sungguh, Allah Maha Mengetahui, Mahateliti.',
    asbabunNuzul: 'Ibnu Abi Hatim meriwayatkan bahwa pada saat peristiwa Pembebasan Kota Makkah (Fathu Makkah tahun 8 H), Rasulullah saw. memerintahkan Bilal bin Rabah r.a. (seorang sahabat berkulit hitam mantan budak) untuk mengumandangkan azan di atas Ka\'bah. Sebagian tokoh Quraisy seperti Harits bin Hisyam dan Attab bin Asid mencibir dengan nada rasisme merendahkan asal-usul Bilal. Maka Malaikat Jibril a.s. turun menyampaikan wahyu Q.S. Al-Hujurat ayat 13 ini untuk menegur keras sikap primordialisme dan kesombongan keturunan.',
    kandunganTafsir: [
      {
        poin: 'Asal Usul Kemanusiaan yang Satu',
        penjelasan: 'Semua manusia berasal dari satu pasang orang tua pertama, yaitu Nabi Adam a.s. dan Hawa. Secara biologis dan eksistensial, tidak ada ras yang lebih tinggi atau kasta yang lebih mulia atas ras lainnya.'
      },
      {
        poin: 'Pluralitas adalah Sunnatullah untuk Saling Mengenal (Lita\'arafu)',
        penjelasan: 'Perbedaan bangsa, bahasa, warna kulit, dan suku bangsa diciptakan Allah bukan untuk saling memicu perpecahan, perang, atau merasa superior, melainkan sebagai sarana berinteraksi, berdialog, bertukar ilmu, dan saling melengkapi kebajikan.'
      },
      {
        poin: 'Kriteria Mutlak Kemuliaan adalah Takwa',
        penjelasan: 'Allah Swt. tidak memandang rupa lahiriah, harta kekayaan, nasab ningrat, ataupun pangkat jabatan duniawi. Satu-satunya timbangan kemuliaan sejati di sisi Allah adalah ketakwaan (kepatuhan menjalankan perintah-Nya dan menjauhi larangan-Nya).'
      },
      {
        poin: 'Kemahatahuan Allah Tanpa Batas',
        penjelasan: 'Penutup ayat menegaskan \'Alīmun Khabīr\' bahwa Allah Maha Mengetahui lahir batin manusia dan Mahateliti terhadap motivasi tulus di dalam sanubari hamba-Nya.'
      }
    ],
    mufradat: [
      {
        kataArab: 'يٰٓاَيُّهَا النَّاسُ',
        transliterasi: 'Yā ayyuhan-nās(u)',
        arti: 'Wahai manusia',
        maknaPelajaran: 'Seruan universal kemanusiaan yang mencakup seluruh umat manusia tanpa membedakan agama dan ras.'
      },
      {
        kataArab: 'خَلَقْنٰكُمْ',
        transliterasi: 'Khalaqnākum',
        arti: 'Kami telah menciptakan kamu',
        maknaPelajaran: 'Pengakuan bahwa keberadaan manusia sepenuhnya adalah anugerah ciptaan Allah Swt.'
      },
      {
        kataArab: 'مِّنْ ذَكَرٍ وَّاُنْثٰى',
        transliterasi: 'Min żakariw wa unṡā',
        arti: 'Dari seorang laki-laki dan seorang perempuan',
        maknaPelajaran: 'Menegaskan kesetaraan derajat gender antara laki-laki dan perempuan di hadapan hukum Allah.'
      },
      {
        kataArab: 'شُعُوْبًا وَّقَبَاۤىِٕلَ',
        transliterasi: 'Syu‘ūbaw wa qabā\'il(a)',
        arti: 'Berbangsa-bangsa dan bersuku-suku',
        maknaPelajaran: 'Syu\'ub adalah persekutuan bangsa yang besar, sedangkan qaba\'il adalah kabilah/suku bagian di dalamnya.'
      },
      {
        kataArab: 'لِتَعَارَفُوْا',
        transliterasi: 'Lita‘ārafū',
        arti: 'Agar kamu saling mengenal',
        maknaPelajaran: 'Interaksi aktif, membangun persaudaraan sosial, dan kerja sama kemanusiaan yang harmonis.'
      },
      {
        kataArab: 'اِنَّ اَكْرَمَكُمْ',
        transliterasi: 'Inna akramakum',
        arti: 'Sesungguhnya yang paling mulia di antara kamu',
        maknaPelajaran: 'Standar kehormatan hakiki manusia bukan kasta feodal atau garis keturunan biologis.'
      },
      {
        kataArab: 'عِنْدَ اللّٰهِ اَتْقٰىكُمْ',
        transliterasi: '‘Indallāhi atqākum',
        arti: 'Di sisi Allah ialah yang paling bertakwa di antaramu',
        maknaPelajaran: 'Takwa adalah puncak pencapaian moral, integritas spiritual, dan kesalehan sosial.'
      },
      {
        kataArab: 'عَلِيْمٌ خَبِيْرٌ',
        transliterasi: '‘Alīmun khabīr(un)',
        arti: 'Maha Mengetahui, Mahateliti',
        maknaPelajaran: 'Allah mengetahui siapa yang benar-benar ikhlas bertakwa dan siapa yang berpura-pura sombong.'
      }
    ]
  },
  ayat2: {
    surah: 'Q.S. Al-Baqarah',
    ayatNomor: 256,
    teksArab: 'لَآ اِكْرَاهَ فِى الدِّيْنِۗ قَدْ تَّبَيَّنَ الرُّشْدُ مِنَ الْغَيِّۚ فَمَنْ يَّكْفُرْ بِالطَّاغُوْتِ وَيُؤْمِنْۢ بِاللّٰهِ فَقَدِ اسْتَمْسَكَ بِالْعُرْوَةِ الْوُثْقٰى لَا انْفِصَامَ لَهَاۗ وَاللّٰهُ سَمِيْعٌ عَلِيْمٌ',
    transliterasi: 'Lā ikrāha fid-dīn(i), qat tabayyanar-rusydu minal-gayy(i), famay yakfur biṭ-ṭāgūti wa yu\'mim billāhi faqadistamsaka bil-‘urwatil-wuṡqā lanfiṣāma lahā, wallāhu samī‘un ‘alīm(un).',
    terjemahanResmi: 'Tidak ada paksaan dalam (menganut) agama (Islam); sungguh telah jelas (perbedaan) antara jalan yang benar dengan jalan yang sesat. Barangsiapa ingkar kepada Tagut dan beriman kepada Allah, maka sungguh, dia telah berpegang (teguh) pada tali yang sangat kuat yang tidak akan putus. Allah Maha Mendengar, Maha Mengetahui.',
    asbabunNuzul: 'Ibnu Jarir dan Abu Dawud meriwayatkan dari Ibnu Abbas r.a. bahwa sebelum datangnya Islam ke Madinah, para wanita suku Anshar (Aus dan Khazraj) yang anaknya sering meninggal dunia pernah bernazar: jika anaknya hidup, ia akan menyekolahkan dan menjadikannya pemeluk agama Yahudi. Ketika kaum Yahudi Bani Nadhir diusir dari Madinah akibat melanggar Piagam Madinah, anak-anak Anshar yang telah memeluk Yahudi ini hendak dibawa serta. Para orang tua Anshar yang telah memeluk Islam berteriak hendak memaksa anak-anak kandung mereka untuk masuk Islam. Maka turunlah ayat ini menegaskan bahwa keimanan tidak boleh dipaksakan dengan kekerasan atau kekuasaan.',
    kandunganTafsir: [
      {
        poin: 'Prinsip Kebebasan Beragama (La Ikraha fid-Din)',
        penjelasan: 'Islam melarang keras pemaksaan terhadap siapapun untuk memeluk agama Islam. Hidayah adalah otoritas mutlak Allah Swt., dan keimanan hanya bernilai jika lahir dari ketulusan hati dan kesadaran akal sehat, bukan karena terintimidasi pedang atau ancaman kekuasaan.'
      },
      {
        poin: 'Kejelasan Kebenaran Islam (Rusyd vs Ghayy)',
        penjelasan: 'Argumen kebenaran tauhid, mukjizat Al-Qur\'an, dan bukti alam semesta telah sedemikian jelas benderang sehingga siapapun yang berpikir jernih dapat membedakan mana jalan petunjuk (*ar-rusyd*) dan mana jalan kesesatan (*al-ghayy*).'
      },
      {
        poin: 'Menolak Tagut dan Tali yang Kokoh (Al-\'Urwah Al-Wutsqa)',
        penjelasan: 'Tagut adalah segala sesuatu yang disembah selain Allah atau perbuatan yang melampaui batas syariat. Orang yang menolak tagut lalu beriman kepada Allah diumpamakan memegang tali tambang keselamatan yang maha kokoh tanpa khawatir akan terputus selamanya.'
      },
      {
        poin: 'Penerimaan Konsekuensi Akhirat',
        penjelasan: 'Meskipun manusia di dunia diberi kebebasan memilih keyakinan, setiap individu tetap akan mempertanggungjawabkan pilihannya di hadapan Allah di hari akhirat kelak.'
      }
    ],
    mufradat: [
      {
        kataArab: 'لَآ اِكْرَاهَ',
        transliterasi: 'Lā ikrāh(a)',
        arti: 'Tidak ada paksaan',
        maknaPelajaran: 'Penegakan hak asasi manusia paling fundamental: kebebasan keyakinan hati nurani.'
      },
      {
        kataArab: 'فِى الدِّيْنِ',
        transliterasi: 'Fid-dīn(i)',
        arti: 'Dalam (menganut) agama',
        maknaPelajaran: 'Agama yang sejati menuntut keikhlasan mutlak; pemaksaan hanya menghasilkan kemunafikan.'
      },
      {
        kataArab: 'قَدْ تَّبَيَّنَ',
        transliterasi: 'Qat tabayyana',
        arti: 'Sungguh telah jelas nyata',
        maknaPelajaran: 'Bukti-bukti rasional dan mukjizat wahyu telah cukup tanpa perlu paksaan fisik.'
      },
      {
        kataArab: 'الرُّشْدُ مِنَ الْغَيِّ',
        transliterasi: 'Ar-rusydu minal-gayy(i)',
        arti: 'Jalan yang benar dari jalan yang sesat',
        maknaPelajaran: 'Rusyd adalah hidayah petunjuk tauhid, sedangkan al-ghayy adalah kesesatan syirik.'
      },
      {
        kataArab: 'فَمَنْ يَّكْفُرْ بِالطَّاغُوْتِ',
        transliterasi: 'Famay yakfur biṭ-ṭāgūt(i)',
        arti: 'Barangsiapa ingkar kepada Tagut',
        maknaPelajaran: 'Menolak sesembahan berhala, tiran zalim, takhayul, dan hukum yang menentang syariat Allah.'
      },
      {
        kataArab: 'وَيُؤْمِنْۢ بِاللّٰهِ',
        transliterasi: 'Wa yu\'mim billāh(i)',
        arti: 'Dan beriman kepada Allah',
        maknaPelajaran: 'Mengesakan Allah Swt. dalam zat, sifat, asma, dan peribadatan (tauhid murni).'
      },
      {
        kataArab: 'بِالْعُرْوَةِ الْوُثْقٰى',
        transliterasi: 'Bil-‘urwatil-wuṡqā',
        arti: 'Pada buhul tali yang sangat kokoh',
        maknaPelajaran: 'Kalimat Tauhid \'Lā ilāha illallāh\' dan jalan syariat Islam yang menyelamatkan manusia.'
      },
      {
        kataArab: 'لَا انْفِصَامَ لَهَا',
        transliterasi: 'Lanfiṣāma lahā',
        arti: 'Yang tidak akan terputus baginya',
        maknaPelajaran: 'Jaminan keselamatan abadi di dunia hingga akhirat bagi orang yang istiqamah beriman.'
      }
    ]
  },
  haditsTerkait: [
    {
      perawi: 'H.R. Ahmad (No. 2111) & Al-Bukhari dalam Al-Adabul Mufrad',
      matanArab: 'عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ، أَنَّ النَّبِيَّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ: «إِنَّ اللَّهَ لَا يَنْظُرُ إِلَى صُوَرِكُمْ وَأَمْوَالِكُمْ، وَلَكِنْ يَنْظُرُ إِلَى قُلُوبِكُمْ وَأَعْمَالِكُمْ»',
      transliterasi: '‘An Abī Hurairata raḍiyallāhu ‘anhu, annan-nabiyya ṣallallāhu ‘alaihi wa sallama qāl: "Innallāha lā yanẓuru ilā ṣuwarikum wa amwālikum, wa lākin yanẓuru ilā qulūbikum wa a‘mālikum."',
      terjemahan: 'Dari Abu Hurairah r.a., bahwa Nabi saw. bersabda: "Sesungguhnya Allah tidak melihat kepada bentuk rupa tubuhmu dan harta kekayaanmu, tetapi Allah melihat kepada isi hatimu dan amal perbuatanmu."',
      syarahSingkat: 'Hadis ini mengukuhkan kandungan Q.S. Al-Hujurat ayat 13 bahwa ukuran kemuliaan seorang hamba di mata Allah murni berasal dari ketulusan niat di dalam dada dan ketakwaan yang mewujud dalam amal kebajikan nyata, bukan tampilan fisik lahiriah.',
      relevansiKehidupan: 'Menghilangkan penyakit body shaming, rasisme, perundungan (bullying) terhadap fisik kawan, serta menjauhi sifat pamer kemewahan harta di media sosial.'
    },
    {
      perawi: 'H.R. Ahmad (No. 22391) & Al-Baihaqi',
      matanArab: 'عَنِ ابْنِ عَبَّاسٍ رَضِيَ اللَّهُ عَنْهُمَا قَالَ: قِيلَ لِرَسُولِ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ: أَيُّ الْأَدْيَانِ أَحَبُّ إِلَى اللَّهِ؟ قَالَ: «الْحَنِيفِيَّةُ السَّمْحَةُ»',
      transliterasi: '‘Anibni ‘Abbāsin raḍiyallāhu ‘anhumā qāl: Qīla li-Rasūlillāhi ṣallallāhu ‘alaihi wa sallam: Ayyul-adyāni aḥabbu ilallāh? Qāla: "Al-Ḥanīfiyyatus-samḥah."',
      terjemahan: 'Dari Ibnu Abbas r.a., ia berkata: Ditanyakan kepada Rasulullah saw.: "Agama manakah yang paling dicintai oleh Allah?" Beliau menjawab: "Agama yang lurus lagi toleran (al-Hanifiyyah as-Samhah)."',
      syarahSingkat: 'Al-Hanifiyyah bermakna lurus bertauhid tidak menyimpang pada kesyirikan; sedangkan As-Samhah bermakna lapang dada, fleksibel, ramah, dan penuh kasih sayang dalam berinteraksi sosial dengan sesama manusia.',
      relevansiKehidupan: 'Menjadi teladan muslim yang teguh memegang akidah tauhid namun berwajah ramah, santun bertutur kata, dan cinta damai di tengah masyarakat majemuk.'
    },
    {
      perawi: 'H.R. Abu Dawud (No. 3052)',
      matanArab: 'أَلَا مَنْ ظَلَمَ مُعَاهَدًا، أَوِ انْتَقَصَهُ، أَوْ كَلَّفَهُ فَوْقَ طَاقَتِهِ، أَوْ أَخَذَ مِنْهُ شَيْئًا بِغَيْرِ طِيبِ نَفْسٍ، فَأَنَا حَجِيجُهُ يَوْمَ الْقِيَامَةِ',
      transliterasi: 'Alā man ẓalama mu‘āhadan, awintaqaṣahū, aw kallafahū fawqa ṭāqatihī, aw akhaża minhu syai\'an bigairi ṭībi nafsin, fa-anā ḥajījuhū yaumal-qiyāmah.',
      terjemahan: 'Ingatlah! Barangsiapa menzalimi seorang kafir mu\'ahad (non-muslim yang terikat perjanjian damai), mengurangi haknya, membebaninya di luar batas kemampuannya, atau mengambil sesuatu darinya tanpa kerelaan hatinya, maka akulah penuntutnya kelak di hari kiamat.',
      syarahSingkat: 'Peringatan keras langsung dari Rasulullah saw. bahwa Islam memberikan perlindungan hukum yang sangat mulia bagi warga non-muslim yang hidup berdampingan secara damai.',
      relevansiKehidupan: 'Menjaga keamanan tetangga yang berbeda keyakinan, tidak merusak rumah ibadah umat lain, dan tidak berbuat curang dalam transaksi perdagangan lintas agama.'
    }
  ],
  hukumTajwidLengkap: {
    panduanKaidah: [
      {
        topik: 'Hukum Lam Jalalah (Lafaz Allah)',
        kaidahTafkhim: 'Tafkhim (Tebal): Apabila lafaz Allah (اللّٰه) didahului oleh huruf berharakat Fathah (ـَ) atau Dammah (ـُ). Contoh: عَلَى اللّٰهِ, نَصْرُ اللّٰهِ.',
        kaidahTarqiq: 'Tarqiq (Tipis): Apabila lafaz Allah (اللّٰه) didahului oleh huruf berharakat Kasrah (ـِ) atau Kasratain (ـٍ) atau huruf berharakat ya mati. Contoh: بِسْمِ اللّٰهِ, عِنْدِ اللّٰهِ.',
        caraMembunyikan: 'Pada Tafkhim, bibir sedikit dimajukan dengan mengangkat pangkal lidah sehingga berbunyi vokal \'Awllah\' yang tebal dan agung. Pada Tarqiq, posisi lidah berada di dasar mulut mendatar sehingga berbunyi vokal tipis \'Lillah\'.'
      },
      {
        topik: 'Hukum Alif Lam Ta\'rif (Al Syamsiyah & Al Qamariyah)',
        kaidahTafkhim: 'Al Syamsiyah (Idgham Syamsi): Apabila alif lam bertemu dengan salah satu dari 14 huruf Syamsiyah (ت ث د ذ ر ز س ش ص ض ط ظ ل ن). Ciri mushaf: huruf setelah Lam berharakat Tasydid (ـّ), bunyi lam melebur tidak dibaca.',
        kaidahTarqiq: 'Al Qamariyah (Idzhar Qamari): Apabila alif lam bertemu dengan salah satu dari 14 huruf Qamariyah terangkum dalam kalimat "اَبْغِ حَجَّكَ وَخَفْ عَقِيْمَهُ". Ciri mushaf: huruf Lam bertanda sukun (ـْ), bunyi lam terbaca jelas.',
        caraMembunyikan: 'Al Qamariyah dibaca terang \'Al-\' tanpa memantul, sedangkan Al Syamsiyah dibaca langsung meloncat mengidghamkan ke huruf berikutnya.'
      },
      {
        topik: 'Hukum Huruf Ra\' (Tafkhim, Tarqiq, & Jawazul Wajhain)',
        kaidahTafkhim: 'Ra\' Tafkhim (Tebal): (1) Ra\' berharakat Fathah/Dammah, (2) Ra\' Sukun didahului huruf Fathah/Dammah, (3) Ra\' Sukun didahului Hamzah Washal, (4) Ra\' Sukun didahului Kasrah asli tetapi bertemu huruf Isti\'la (خ ص ض غ ط ق ظ) yang tidak berharakat kasrah.',
        kaidahTarqiq: 'Ra\' Tarqiq (Tipis): (1) Ra\' berharakat Kasrah, (2) Ra\' Sukun didahului huruf Kasrah asli dan tidak bertemu huruf Isti\'la, (3) Ra\' di akhir kata yang diwaqafkan didahului huruf berharakat kasrah atau ya mati (ya sukun).',
        caraMembunyikan: 'Saat Tafkhim pangkal lidah terangkat ke langit-langit mulut menghasilkan getaran tebal berbobot. Saat Tarqiq pangkal lidah turun mendatar menghasilkan getaran tipis ringan.'
      }
    ],
    daftarPenerapanPadaAyat: [
      {
        lafaz: 'النَّاسُ',
        ayatRujukan: 'Q.S. Al-Hujurat: 13',
        hukum: 'Alif Lam Syamsiyah (Idgham Syamsi)',
        kategori: 'Lam Ta\'rif Syamsiyah',
        alasanKaidah: 'Huruf Alif Lam bertemu dengan huruf Syamsiyah Nun (ن) yang bertasydid.',
        caraMembaca: 'Huruf Lam tidak dibaca melainkan langsung melebur ke huruf Nun: "an-nāsu".'
      },
      {
        lafaz: 'مِّنْ ذَكَرٍ',
        ayatRujukan: 'Q.S. Al-Hujurat: 13',
        hukum: 'Ra\' Tafkhim (Tebal) jika washal / Ra\' Tarqiq jika waqaf berharakat kasratain',
        kategori: 'Ra Tafkhim',
        alasanKaidah: 'Huruf Ra\' berharakat Kasratain ketika washal ke huruf berikutnya (idgham bighunnah).',
        caraMembaca: 'Dibaca dengung idgham bighunnah dengan vokal getaran ra\' yang tebal: "min żakariw wa...".'
      },
      {
        lafaz: 'لِتَعَارَفُوْا',
        ayatRujukan: 'Q.S. Al-Hujurat: 13',
        hukum: 'Ra\' Tafkhim (Tebal)',
        kategori: 'Ra Tafkhim',
        alasanKaidah: 'Huruf Ra\' berharakat Fathah (ـَ).',
        caraMembaca: 'Pangkal lidah diangkat sehingga getaran ra\' berbunyi tebal: "lita‘ārafū".'
      },
      {
        lafaz: 'اَكْرَمَكُمْ',
        ayatRujukan: 'Q.S. Al-Hujurat: 13',
        hukum: 'Ra\' Tafkhim (Tebal)',
        kategori: 'Ra Tafkhim',
        alasanKaidah: 'Huruf Ra\' berharakat Fathah (ـَ).',
        caraMembaca: 'Dibaca tebal dan mantap: "akramakum".'
      },
      {
        lafaz: 'عِنْدَ اللّٰهِ',
        ayatRujukan: 'Q.S. Al-Hujurat: 13',
        hukum: 'Lam Jalalah Tafkhim (Tebal)',
        kategori: 'Lam Jalalah Tafkhim',
        alasanKaidah: 'Lafaz Jalalah (اللّٰه) didahului oleh huruf Dal berharakat Fathah (عِنْدَ).',
        caraMembaca: 'Dibaca tebal dan mengagungkan: "‘indallāh" (bukan \'lillah\').'
      },
      {
        lafaz: 'اِنَّ اللّٰهَ',
        ayatRujukan: 'Q.S. Al-Hujurat: 13',
        hukum: 'Lam Jalalah Tafkhim (Tebal)',
        kategori: 'Lam Jalalah Tafkhim',
        alasanKaidah: 'Lafaz Jalalah (اللّٰه) didahului oleh huruf Nun berharakat Fathah (اِنَّ).',
        caraMembaca: 'Dibaca tebal: "innallāha".'
      },
      {
        lafaz: 'خَبِيْرٌ',
        ayatRujukan: 'Q.S. Al-Hujurat: 13',
        hukum: 'Ra\' Tarqiq (Tipis) pada saat Waqaf',
        kategori: 'Ra Tarqiq',
        alasanKaidah: 'Huruf Ra\' berada di akhir ayat (diwaqafkan) dan didahului oleh huruf Ya Sukun / Ya Mati (يْ).',
        caraMembaca: 'Dibaca tipis dan mengalir lembut: "khabīr" (ujung lidah menempel ringan).'
      },
      {
        lafaz: 'لَآ اِكْرَاهَ',
        ayatRujukan: 'Q.S. Al-Baqarah: 256',
        hukum: 'Ra\' Tafkhim (Tebal)',
        kategori: 'Ra Tafkhim',
        alasanKaidah: 'Huruf Ra\' berharakat Fathah diikuti alif mad thabi\'i (ـَرَا).',
        caraMembaca: 'Dibaca tebal panjang 2 harakat: "lā ikrāha".'
      },
      {
        lafaz: 'الرُّشْدُ',
        ayatRujukan: 'Q.S. Al-Baqarah: 256',
        hukum: 'Alif Lam Syamsiyah & Ra\' Tafkhim',
        kategori: 'Lam Ta\'rif Syamsiyah',
        alasanKaidah: 'Alif Lam bertemu huruf Syamsiyah Ra\', dan huruf Ra\' berharakat Dammah bertasydid (رُّ).',
        caraMembaca: 'Lam melebur ke Ra\' dengan bunyi tebal: "ar-rusydu".'
      },
      {
        lafaz: 'الْغَيِّ',
        ayatRujukan: 'Q.S. Al-Baqarah: 256',
        hukum: 'Alif Lam Qamariyah (Idzhar Qamari)',
        kategori: 'Lam Ta\'rif Qamariyah',
        alasanKaidah: 'Alif Lam bertemu huruf Qamariyah Gain (غ) bertanda sukun.',
        caraMembaca: 'Huruf Lam dibaca jelas dan terang: "al-gayyi".'
      },
      {
        lafaz: 'بِالطَّاغُوْتِ',
        ayatRujukan: 'Q.S. Al-Baqarah: 256',
        hukum: 'Alif Lam Syamsiyah (Idgham Syamsi)',
        kategori: 'Lam Ta\'rif Syamsiyah',
        alasanKaidah: 'Alif Lam bertemu dengan huruf Syamsiyah Tha\' bertasydid (طَّ).',
        caraMembaca: 'Lam melebur ke huruf Tha\': "biṭ-ṭāgūti".'
      },
      {
        lafaz: 'بِاللّٰهِ',
        ayatRujukan: 'Q.S. Al-Baqarah: 256',
        hukum: 'Lam Jalalah Tarqiq (Tipis)',
        kategori: 'Lam Jalalah Tarqiq',
        alasanKaidah: 'Lafaz Jalalah (اللّٰه) didahului oleh huruf Ba berharakat Kasrah (بِ).',
        caraMembaca: 'Dibaca tipis mendatar: "billāhi" (bukan \'billawh\').'
      },
      {
        lafaz: 'بِالْعُرْوَةِ',
        ayatRujukan: 'Q.S. Al-Baqarah: 256',
        hukum: 'Alif Lam Qamariyah & Ra\' Tafkhim',
        kategori: 'Ra Tafkhim',
        alasanKaidah: 'Lam dibaca jelas (Al Qamariyah), dan huruf Ra\' Sukun didahului huruf Dammah (\'Ain berharakat dammah عُ).',
        caraMembaca: 'Lam terang, lalu ra\' sukun dibaca tebal mantap tanpa memantul: "bil-‘urwati".'
      },
      {
        lafaz: 'وَاللّٰهُ',
        ayatRujukan: 'Q.S. Al-Baqarah: 256',
        hukum: 'Lam Jalalah Tafkhim (Tebal)',
        kategori: 'Lam Jalalah Tafkhim',
        alasanKaidah: 'Lafaz Jalalah (اللّٰه) didahului oleh huruf Wawu berharakat Fathah (وَ).',
        caraMembaca: 'Dibaca tebal mengagungkan: "wallāhu".'
      }
    ]
  },
  panduan4Keterampilan: {
    membacaTartil: {
      langkah: [
        'Membaca Isti\'adzah (Ta\'awwudz) dan Basmalah dengan khusyuk.',
        'Memperhatikan makharijul huruf, khususnya perbedaan bunyi huruf Zha (ذ), Tsa (ث), Sin (س), Syin (ش), Tha (ط), dan \'Ain (ع).',
        'Menerapkan hukum mad thabi\'i (panjang 2 harakat) dan mad jaiz munfashil (panjang 4-5 harakat pada يٰٓاَيُّهَا dan لَآ اِكْرَاهَ).',
        'Menjaga konsistensi ghunnah (dengung 2 harakat) pada Nun bertasydid (اِنَّ) dan idgham bighunnah (ذَكَرٍ وَّاُنْثٰى, شُعُوْبًا وَّقَبَاۤىِٕلَ).',
        'Membedakan kapan lafaz Allah berbunyi tebal (عِنْدَ اللّٰهِ, اِنَّ اللّٰهَ, وَاللّٰهُ) dan kapan berbunyi tipis (بِاللّٰهِ).'
      ],
      adabMembaca: [
        'Dalam keadaan suci dari hadas kecil maupun besar (berwudu).',
        'Menghadap kiblat dengan posisi duduk santun dan tertib.',
        'Merenungi makna (*tadabbur*) setiap ayat yang dibaca.',
        'Membaca dengan suara merdu dan tartil tanpa tergesa-gesa.'
      ]
    },
    menghafalCepat: {
      metode: 'Metode Tikrar (Pengulangan Berjenjang) & Taisir 5-3-1',
      langkahLangkah: [
        'Langkah 1 (Potong Ayat): Bagi ayat menjadi 3 penggalan pendek. Contoh Q.S. Al-Hujurat: (1) Yā ayyuhan-nāsu innā khalaqnākum min żakariw wa unṡā, (2) wa ja‘alnākum syu‘ūbaw wa qabā\'ila lita‘ārafū, (3) inna akramakum ‘indallāhi atqākum innallāha ‘alīmun khabīr.',
        'Langkah 2 (Pengulangan Mandiri): Ulangi penggalan 1 sebanyak 10 kali sambil melihat mushaf, lalu pejamkan mata ulangi 5 kali tanpa melihat.',
        'Langkah 3 (Menyambung): Ulangi langkah yang sama pada penggalan 2, lalu sambungkan penggalan 1 dan 2 sebanyak 7 kali.',
        'Langkah 4 (Sempurnakan): Lakukan pada penggalan 3, lalu baca utuh dari awal sampai akhir sebanyak 5 kali tanpa melihat teks.',
        'Langkah 5 (Tasmi\'): Perdengarkan hafalan kepada guru PAI atau teman sebangku untuk memastikan ketepatan harakat dan makhraj.'
      ],
      tipsMurajaah: 'Bacalah ayat yang telah dihafal dalam rakaat salat sunnah rawatib atau salat dhuha agar hafalan melekat kuat dalam ingatan jangka panjang.'
    },
    menulisKhatKaidah: {
      kaidahPenulisan: [
        'Menulis huruf Arab selalu dimulai dari sisi kanan ke kiri secara sejajar di atas garis buku tulis.',
        'Perhatikan huruf yang berada di atas garis (ا، د، ذ، ط، ظ، ك، ل، هـ) dan huruf yang bagian ekornya harus menggantung menembus bawah garis (ر، ز، و، م، ن، ق، ي، ج، ح، خ، س، ش، ص، ض).',
        'Perhatikan bentuk perubahan huruf saat berada di awal, di tengah, dan di akhir kata (seperti huruf \'Ain pada لِتَعَارَفُوْا dan huruf Mim pada عَلِيْمٌ).',
        'Wajib melengkapi harakat secara presisi (fathah, kasrah, dammah, sukun, tasydid, dan tanda mad bendera) agar makna kata tidak berubah.',
        'Khat Riq\'ah dan Naskhi: Untuk buku catatan pelajar, utamakan menggunakan Kaidah Khat Naskhi yang jelas, proporsional, dan mudah dibaca orang lain.'
      ],
      hurufPenting: [
        'Huruf Lam Alif (لا): ditulis menyilang anggun pada لَآ اِكْرَاهَ.',
        'Huruf Ra\' (ر): lengkungan ekor tipis jatuh ke bawah garis pada ذَكَرٍ dan خَبِيْرٌ.',
        'Lafaz Jalalah (اللّٰه): ditulis sambung dengan tegak lurus pada alif dan lam gandanya.'
      ],
      latihanMenulis: 'Gunakan pensil runcing atau pena kaligrafi 2.0 mm, lalu salinlah Q.S. Al-Hujurat: 13 dan Q.S. Al-Baqarah: 256 di buku catatan bergaris dengan jarak spasi 2 baris.'
    },
    menjelaskanRefleksiToleransi: {
      definisiToleransiIslam: 'Toleransi dalam bahasa Arab disebut "Tasāmuh" (تَسَامُح), yang berarti sikap saling menghargai, tenggang rasa, lapang dada, dan membiarkan orang lain menjalankan keyakinan serta hak-haknya tanpa intimidasi, persekusi, ataupun paksaan kekuasaan.',
      batasToleransiAkidahVsMuamalah: [
        '1. Ranah Akidah & Ibadah (Zero Tolerance / Bersifat Eksklusif Pribadi): Tidak ada tawar-menawar, kompromi, percampuran ritual, atau sinkretisme. Sesuai prinsip "Lakum dīnukum wa liya dīn" (Untukmu agamamu, dan untukku agamaku). Umat Islam tidak boleh ikut serta dalam ritual peribadatan agama lain.',
        '2. Ranah Muamalah & Sosial-Kemanusiaan (Inclusive Toleransi Penuh): Sangat dianjurkan bekerja sama, tolong-menolong dalam kebajikan, menjaga ketertiban umum, membantu korban bencana tanpa memandang agama, bertransaksi jual beli secara jujur, dan berbuat adil kepada siapapun (Q.S. Al-Mumtahanah: 8).'
      ],
      studiKasusToleransi: [
        {
          situasi: 'Di kelasmu ada teman yang beragama Kristen sedang merayakan hari raya keagamaannya dan mengundang teman-teman sekelas untuk makan kue bersama di rumahnya saat sore hari.',
          sikapSiswa: 'Boleh hadir untuk bersilaturahmi sosial, mencicipi hidangan halal, dan menghormati kebahagiaannya sebagai wujud persahabatan muamalah, tanpa mengikuti doa ritual keagamaan mereka.'
        },
        {
          situasi: 'Seorang teman dari suku pedalaman berbicara dengan logat daerah yang medok dan kental sehingga menjadi bahan tertawaan teman-teman satu geng.',
          sikapSiswa: 'Menegur teman yang mengejek secara santun dan mengingatkan Q.S. Al-Hujurat: 13 bahwa perbedaan suku dan bahasa adalah sunnatullah untuk saling melengkapi, bukan untuk dijadikan bahan celaan rasisme.'
        },
        {
          situasi: 'Terjadi pemilihan ketua OSIS, dan calon yang memiliki visi program kerja paling unggul serta jujur berasal dari kelompok minoritas agama.',
          sikapSiswa: 'Mendukung kepemimpinan OSIS berdasarkan kapasitas integritas moral, kepemimpinan profesional, dan kemaslahatan seluruh siswa sekolah demi kemajuan bersama.'
        }
      ]
    }
  },
  kuisHots: [
    {
      id: 'kuis-1',
      nomor: 1,
      kasus: 'Pada saat Pembebasan Kota Makkah (Fathu Makkah), Rasulullah saw. menyuruh Bilal bin Rabah r.a. mengumandangkan azan di atas atap Ka\'bah. Sebagian pemuka Quraisy mencemooh mengapa budak hitam asal Habasyah yang dipilih, bukan bangsawan Quraisy terhormat. Lalu turunlah Q.S. Al-Hujurat: 13.',
      pertanyaan: 'Berdasarkan konteks asbabun nuzul dan kandungan ayat tersebut, prinsip etika universal apakah yang dicanangkan Islam untuk meruntuhkan tatanan jahiliyah?',
      pilihan: [
        'Kasta keturunan bangsawan tetap menjadi syarat utama kehormatan sosial',
        'Egalitarianisme (kesetaraan martabat manusia) di mana kemuliaan mutlak hanya diukur dari integritas ketakwaan, bukan warna kulit, ras, atau kekayaan',
        'Setiap suku diwajibkan mengubah budaya asalnya menjadi budaya satu suku tertentu',
        'Orang kaya berhak menentukan aturan hukum di tengah masyarakat majemuk'
      ],
      kunciJawaban: 1,
      pembahasan: 'Q.S. Al-Hujurat ayat 13 meruntuhkan sistem stratifikasi sosial feodal dan rasisme. Melalui penunjukan Bilal r.a., Rasulullah saw. membuktikan bahwa di hadapan Allah Swt. semua manusia setara (egaliter), dan barometer kemuliaan sejati (*inna akramakum \'indallahi atqakum*) hanyalah ketakwaan dan kesalehan budi pekerti.'
    },
    {
      id: 'kuis-2',
      nomor: 2,
      kasus: 'Perhatikan penggalan ayat berikut: (1) عِنْدَ اللّٰهِ (2) بِاللّٰهِ (3) اِنَّ اللّٰهَ (4) نَصْرُ اللّٰهِ (5) بِسْمِ اللّٰهِ.',
      pertanyaan: 'Pasangan nomor yang menunjukkan penerapan hukum Lam Jalalah Tarqiq (dibaca tipis mengalir lembut) adalah:',
      pilihan: [
        'Nomor (1) dan (3)',
        'Nomor (2) dan (5)',
        'Nomor (3) dan (4)',
        'Nomor (1) dan (5)'
      ],
      kunciJawaban: 1,
      pembahasan: 'Lam Jalalah dibaca Tarqiq (tipis) jika didahului huruf berharakat Kasrah (ـِ). Pada nomor (2) بِاللّٰهِ didahului huruf Ba kasrah, dan pada nomor (5) بِسْمِ اللّٰهِ didahului huruf Mim kasrah. Sedangkan nomor (1), (3), dan (4) didahului harakat fathah atau dammah sehingga dibaca Tafkhim (tebal).'
    },
    {
      id: 'kuis-3',
      nomor: 3,
      kasus: 'Seorang siswa membaca Q.S. Al-Hujurat: 13 dan berhenti (waqaf) pada akhir kata خَبِيْرٌ. Siswa tersebut membaca huruf Ra\' dengan cara menempelkan ujung lidah secara rileks di gigi seri atas tanpa mengangkat pangkal lidah ke langit-langit.',
      pertanyaan: 'Bagaimanakah analisis hukum tajwid terhadap bacaan siswa tersebut?',
      pilihan: [
        'Salah, karena setiap huruf Ra\' yang diwaqafkan wajib dibaca tebal (Tafkhim)',
        'Benar, karena huruf Ra\' tersebut diwaqafkan setelah huruf Ya Sukun (Ya Mati), sehingga hukumnya adalah Ra\' Tarqiq (tipis)',
        'Salah, karena huruf Ra\' berharakat dammahtain sehingga harus selalu dibaca Tafkhim',
        'Kurang tepat, karena hukumnya adalah Idgham Bighunnah'
      ],
      kunciJawaban: 1,
      pembahasan: 'Kaidah tajwid menetapkan bahwa huruf Ra\' yang berada di akhir kata dan diwaqafkan, apabila didahului oleh huruf Ya Mati (Ya Sukun) seperti pada lafaz خَبِيْرٌ, نَصِيْرٌ, dan قَدِيْرٌ, maka hukumnya wajib dibaca Tarqiq (tipis).'
    },
    {
      id: 'kuis-4',
      nomor: 4,
      kasus: 'Dalam Q.S. Al-Baqarah: 256 dinyatakan: "Lā ikrāha fid-dīn, qat tabayyanar-rusydu minal-gayy". Namun pada saat yang sama, seorang muslim wajib meyakini bahwa Islam adalah satu-satunya agama yang diridhai Allah Swt. (Q.S. Ali \'Imran: 19).',
      pertanyaan: 'Sikap toleransi (tasamuh) yang paling proporsional dan benar dalam mengamalkan kedua ayat tersebut dalam kehidupan di sekolah majemuk adalah:',
      pilihan: [
        'Menyamakan semua ritual ibadah agama dan ikut beribadah di tempat ibadah agama lain sebagai bukti cinta damai',
        'Memaksa teman sekelas yang berbeda keyakinan untuk membaca kalimat syahadat agar masuk surga',
        'Memegang teguh keimanan Islam secara mantap tanpa kompromi dalam ranah akidah-ibadah, seraya bersikap santun, adil, ramah, dan bekerja sama dalam urusan sosial-kemanusiaan dengan umat beragama lain',
        'Menjauhi dan tidak mau berbicara sama sekali dengan kawan yang berbeda suku dan agama'
      ],
      kunciJawaban: 2,
      pembahasan: 'Toleransi dalam Islam memiliki batasan yang tegas: tegas dan eksklusif dalam urusan akidah serta ibadah ritual (tidak ada kompromi/sinkretisme ritual), namun inklusif, toleran, dan penuh kasih sayang dalam urusan muamalah sosial, tolong-menolong, kemanusiaan, dan kebangsaan.'
    },
    {
      id: 'kuis-5',
      nomor: 5,
      kasus: 'Rasulullah saw. dalam hadis riwayat Abu Dawud menegaskan bahwa beliau sendiri yang akan menjadi penuntut (hajjījuhū) di hari kiamat bagi seorang muslim yang menzalimi kaum kafir mu\'ahad (warga non-muslim yang hidup rukun berdamai).',
      pertanyaan: 'Dampak nyata dari penegasan sabda Nabi tersebut terhadap hukum perlindungan warga negara dalam masyarakat madani adalah:',
      pilihan: [
        'Umat Islam boleh mengambil hak milik orang lain asalkan berbeda agama',
        'Negara Islam menjamin kepastian hukum, hak milik, keselamatan jiwa, dan kebebasan menjalankan ibadah bagi warga non-muslim secara setara dan dilindungi oleh syariat',
        'Hukum hanya berlaku dan melindungi orang yang memiliki kekayaan melimpah',
        'Kaum minoritas tidak memiliki kewajiban menjaga persatuan bangsa'
      ],
      kunciJawaban: 1,
      pembahasan: 'Hadis tersebut meletakkan landasan konstitusional Piagam Madinah: bahwa keselamatan jiwa, kehormatan, dan hak milik kaum non-muslim yang hidup berdampingan secara damai (*mu\'ahad / dzimmi*) dilindungi secara sakral oleh syariat Islam. Menzalimi mereka merupakan dosa besar yang akan dituntut langsung oleh Rasulullah saw. di Yaumil Akhir.'
    }
  ]
};
