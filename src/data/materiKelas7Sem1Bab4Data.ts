export interface MacamSujud {
  id: 'sujud-syukur' | 'sujud-sahwi' | 'sujud-tilawah';
  name: string;
  arabicName: string;
  shortDefinition: string;
  fullDefinition: string;
  hukum: string;
  dalilQuranHadis: {
    source: string;
    arabic: string;
    latin: string;
    translation: string;
    syarah: string;
  };
  reasons: string[];
  bacaanList: {
    title: string;
    sourceInfo: string;
    arabic: string;
    latin: string;
    translation: string;
    note: string;
  }[];
  tataCara: {
    kondisi: string;
    syarat: string[];
    rukun: string[];
    steps: {
      stepNumber: number;
      title: string;
      description: string;
      arabicPhrase?: string;
    }[];
  }[];
  manfaatHikmah: string[];
  laranganPerhatian: string[];
}

export interface AyatSajdah {
  nomor: number;
  surahName: string;
  surahNumber: number;
  ayahNumber: number;
  juz: number;
  ayatSnippetArabic: string;
  latin: string;
  translation: string;
  contextKandungan: string;
  audioUrl: string;
}

export interface QuizQuestionBab4 {
  id: number;
  scenario: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const MACAM_SUJUD_DATA: MacamSujud[] = [
  // ==================== 1. SUJUD SYUKUR ====================
  {
    id: 'sujud-syukur',
    name: 'Sujud Syukur',
    arabicName: 'سُجُودُ الشُّكْرِ',
    shortDefinition: 'Sujud satu kali di luar salat sebagai wujud rasa terima kasih atas nikmat besar atau terhindar dari musibah.',
    fullDefinition: 'Sujud Syukur adalah sujud yang dilakukan seorang muslim sebanyak satu kali di luar salat sebagai bentuk ekspresi kerendahan hati, pengagungan, dan terima kasih yang mendalam kepada Allah Swt. atas anugerah nikmat atau kabar gembira yang luar biasa, atau karena terhindar dari mara bahaya, bencana, dan musibah besar yang mengancam.',
    hukum: 'Sunnah Mu’akkadah di luar salat (Haram/Membatalkan salat jika dilakukan dengan sengaja di dalam salat fardhu bagi yang mengetahui hukumnya).',
    dalilQuranHadis: {
      source: 'Hadits Riwayat Abu Dawud (No. 2774) & At-Tirmidzi (No. 1578), Hasan Sahih',
      arabic: 'عَنْ أَبِي بَكْرَةَ رَضِيَ اللهُ عَنْهُ عَنِ النَّبِيِّ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ: أَنَّهُ كَانَ إِذَا جَاءَهُ أَمْرُ سُرُورٍ أَوْ بُشِّرَ بِهِ خَرَّ سَاجِدًا شَاكِرًا لِلَّهِ',
      latin: '‘An Abī Bakrata raḍiyallāhu ‘anhu ‘anin-Nabiyyi ṣallallāhu ‘alayhi wa sallama: Annahū kāna idzā jā’ahū amru surūrin aw busysyira bihī kharra sājidan syākiran lillāh.',
      translation: 'Dari sahabat Abu Bakrah r.a., dari Nabi Muhammad SAW: "Bahwasanya beliau apabila datang kepadanya suatu perkara yang menggembirakan atau diberi kabar gembira, beliau langsung tersungkur bersujud sebagai tanda syukur kepada Allah Swt."',
      syarah: 'Hadits ini menunjukkan keteladanan Rasulullah SAW yang secara spontan bersujud ketika menerima kabar gembira besar. Para sahabat seperti Abu Bakar Ash-Shiddiq juga bersujud syukur saat mendengar terbunuhnya Musailamah Al-Kadzdzab (nabi palsu), dan Ali bin Abi Thalib bersujud saat menemukan mayat Dzut Tsudayyah pemimpin Khawarij.'
    },
    reasons: [
      'Mendapatkan nikmat besar yang baru tiba atau kabar gembira yang tidak disangka-sangka (seperti dinyatakan lulus ujian impian, kesembuhan dari vonis penyakit kritis, atau dikaruniai keturunan).',
      'Terhindar dan diselamatkan oleh Allah Swt. dari mara bahaya, bencana alam, kecelakaan maut, atau kejahatan yang nyaris menimpa diri maupun keluarga.',
      'Melihat orang lain yang sembuh dari maksiat besar atau orang zalim yang terhentikan kejahatannya tanpa merugikan umat.'
    ],
    bacaanList: [
      {
        title: 'Bacaan 1: Doa Syukur Nabi Sulaiman a.s. (Q.S. An-Naml: 19)',
        sourceInfo: 'Doa para anbiya di dalam Al-Qur\'an',
        arabic: 'رَبِّ أَوْزِعْنِيٓ أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِيٓ أَنْعَمْتَ عَلَيَّ وَعَلَىٰ وَالِدَيَّ وَأَنْ أَعْمَلَ صَالِحًا تَرْضَىٰهُ وَأَدْخِلْنِي بِرَحْمَتِكَ فِي عِبَادِكَ الصَّالِحِينَ',
        latin: 'Rabbi awzi‘nī an asykura ni‘matakal-latī an‘amta ‘alayya wa ‘alā wālidayya wa an a‘mala ṣāliḥan tarḍāhu wa adkhilnī biraḥmatika fī ‘ibādikaṣ-ṣāliḥīn.',
        translation: 'Ya Tuhanku, berilah aku ilham untuk tetap mensyukuri nikmat-Mu yang telah Engkau anugerahkan kepadaku dan kepada kedua orang tuaku dan untuk mengerjakan kebajikan yang Engkau ridhai; dan masukkanlah aku dengan rahmat-Mu ke dalam golongan hamba-hamba-Mu yang saleh.',
        note: 'Doa yang sangat dianjurkan karena mencakup rasa syukur atas diri sendiri, kedua orang tua, serta permohonan istiqamah dalam kebajikan.'
      },
      {
        title: 'Bacaan 2: Tasbih, Tahmid, Tahlil, & Takbir',
        sourceInfo: 'Zikir Ma\'tsur pujian kepada Allah',
        arabic: 'سُبْحَانَ اللهِ وَالْحَمْدُ لِلّٰهِ وَلَا إِلٰهَ إِلَّا اللهُ وَاللهُ أَكْبَرُ، وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللهِ الْعَلِيِّ الْعَظِيْمِ',
        latin: 'Subḥānallāhi wal-ḥamdu lillāhi wa lā ilāha illallāhu wallāhu akbar, wa lā ḥawla wa lā quwwata illā billāhil-‘aliyyil-‘aẓīm.',
        translation: 'Maha Suci Allah, segala puji bagi Allah, tiada tuhan selain Allah, Allah Maha Besar, dan tiada daya serta upaya melainkan dengan pertolongan Allah Yang Maha Tinggi lagi Maha Agung.',
        note: 'Kalimat thoyyibah yang paling dicintai Allah untuk mengagungkan nikmat-Nya.'
      },
      {
        title: 'Bacaan 3: Tasbih Sujud Standar & Pujian Pribadi',
        sourceInfo: 'Sujud sunnah umum',
        arabic: 'سُبْحَانَ رَبِّيَ الْأَعْلَى وَبِحَمْدِهِ',
        latin: 'Subḥāna Rabbiyal-A‘lā wa biḥamdih.',
        translation: 'Maha Suci Tuhanku Yang Maha Tinggi dan dengan memuji kepada-Nya (dibaca 3 kali).',
        note: 'Boleh juga membaca tasbih sujud biasa ini lalu ditambahkan doa permohonan kebaikan yang relevan dengan nikmat yang diterima.'
      }
    ],
    tataCara: [
      {
        kondisi: 'Tata Cara Pelaksanaan di Luar Salat',
        syarat: [
          'Suci dari hadas kecil dan besar (berwudhu)',
          'Suci badan, pakaian, dan tempat sujud dari najis',
          'Menutup aurat secara sempurna',
          'Menghadap ke arah kiblat'
        ],
        rukun: [
          'Niat sujud syukur di dalam hati',
          'Takbiratul Ihram sambil mengucap takbir',
          'Sujud satu kali dengan thuma\'ninah',
          'Duduk sesudah sujud (tanpa tasyahud)',
          'Salam ke kanan dan ke kiri',
          'Tertib (berurutan)'
        ],
        steps: [
          {
            stepNumber: 1,
            title: 'Berdiri atau Duduk Menghadap Kiblat',
            description: 'Mengambil posisi menghadap kiblat dengan badan suci dan pakaian yang menutup aurat.'
          },
          {
            stepNumber: 2,
            title: 'Berniat di Dalam Hati',
            description: 'Memasang niat sujud syukur semata-mata karena Allah Swt.',
            arabicPhrase: 'نَوَيْتُ سُجُودَ الشُّكْرِ لِلّٰهِ تَعَالَى (Nawaitu sujūdasy-syukri lillāhi ta‘ālā)'
          },
          {
            stepNumber: 3,
            title: 'Takbiratul Ihram',
            description: 'Mengangkat kedua tangan sejajar telinga/bahu seraya melafalkan takbir "Allahu Akbar".',
            arabicPhrase: 'اللهُ أَكْبَرُ'
          },
          {
            stepNumber: 4,
            title: 'Turun Langsung Bersujud Satu Kali',
            description: 'Bertakbir intiqal lalu langsung turun sujud satu kali dengan menempelkan 7 anggota sujud ke lantai secara thuma\'ninah.'
          },
          {
            stepNumber: 5,
            title: 'Membaca Doa Sujud Syukur',
            description: 'Membaca doa syukur (Nabi Sulaiman atau tasbih-tahmid) dengan penuh rasa haru dan penghambaan.'
          },
          {
            stepNumber: 6,
            title: 'Bangkit dari Sujud dan Duduk Sejenak',
            description: 'Bertakbir lalu bangkit menuju posisi duduk sejenak (seperti duduk iftirasy) tanpa membaca tasyahud.'
          },
          {
            stepNumber: 7,
            title: 'Mengucapkan Salam',
            description: 'Menolehkan wajah ke kanan lalu ke kiri seraya mengucapkan salam.',
            arabicPhrase: 'السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللهِ'
          }
        ]
      }
    ],
    manfaatHikmah: [
      'Menghindarkan diri dari sifat sombong, takabur, dan ‘ujub karena menyadari segala kesuksesan murni anugerah Allah Swt.',
      'Melipatgandakan nikmat dari Allah Swt. sesuai firman-Nya dalam Q.S. Ibrahim: 7 (La\'in syakartum la\'azīdannakum).',
      'Mendatangkan ketenangan batin, kebahagiaan sejati, dan melatih rasa qana\'ah (rela menerima ketentuan Allah).',
      'Mencegah penyakit hati seperti iri, dengki, dan serakah terhadap rezeki orang lain.',
      'Menjadikan hamba dicintai Allah Swt. dan para malaikat-Nya.'
    ],
    laranganPerhatian: [
      'Dilarang keras melakukan sujud syukur di dalam salat fardhu maupun sunnah. Jika dilakukan sengaja dalam salat, salatnya batal.',
      'Jangan bersujud syukur atas nikmat yang bersumber dari perbuatan maksiat (misal: menang judi atau sukses mencuri), karena itu istidraj dan dosa besar.',
      'Sujud syukur cukup satu kali sujud saja, tidak dua kali seperti sujud sahwi.'
    ]
  },

  // ==================== 2. SUJUD SAHWI ====================
  {
    id: 'sujud-sahwi',
    name: 'Sujud Sahwi',
    arabicName: 'سُجُودُ السَّهْوِ',
    shortDefinition: 'Dua kali sujud di akhir salat untuk menambal kekurangan, kelebihan, atau keraguan akibat lupa.',
    fullDefinition: 'Sujud Sahwi adalah dua kali sujud yang dilakukan di bagian akhir salat (sebelum atau sesudah salam) untuk menutup kekurangan rukun/sunnah ab\'adh, kelebihan rakaat, atau keragu-raguan jumlah rakaat yang disebabkan karena sifat lupa (as-sahwu) seorang hamba saat melaksanakan salat.',
    hukum: 'Sunnah Mu’akkadah. Jika ditinggalkan karena lupa atau sengaja, salatnya tetap sah namun kehilangan keutamaan sunnah.',
    dalilQuranHadis: {
      source: 'Hadits Riwayat Muslim (No. 571) dari Abu Sa\'id Al-Khudri r.a.',
      arabic: 'إِذَا شَكَّ أَحَدُكُمْ فِي صَلَاتِهِ فَلَمْ يَدْرِ كَمْ صَلَّى ثَلَاثًا أَمْ أَرْبَعًا فَلْيَطْرَحِ الشَّكَّ وَلْيَبْنِ عَلَى مَا اسْتَيْقَنَ ثُمَّ يَسْجُدُ سَجْدَتَيْنِ قَبْلَ أَنْ يُسَلِّمَ',
      latin: 'Idzā syakka aḥadukum fī ṣalātihī falam yadri kam ṣallā tsalātsan am arba‘an falyathraḥisy-syakka wal-yabni ‘alā mastayqana tsumma yasjudu sajdatayni qabla an yusallim.',
      translation: '"Apabila salah seorang di antara kalian ragu dalam salatnya, sehingga tidak tahu berapa rakaat yang telah ia kerjakan, tiga atau empat rakaat, maka hendaklah ia buang keraguan itu dan menetapkan apa yang diyakini (yakni yang paling sedikit), kemudian hendaklah ia sujud dua kali sebelum salam."',
      syarah: 'Hadits sahih ini meletakkan pondasi hukum bahwa ketika timbul keraguan dalam salat, prinsip yang dipakai adalah kepastian (yakin), yaitu mengambil jumlah rakaat minimal. Sujud sahwi berfungsi sebagai penghina bagi setan yang berusaha membuyarkan konsentrasi salat.'
    },
    reasons: [
      '1. Kekurangan Rakaat atau Rukun Fi\'li karena Lupa: Misal lupa rukuk atau kurang 1 rakaat, maka wajib bangun menyempurnakan rakaat yang tertinggal terlebih dahulu, lalu sujud sahwi sebelum salam.',
      '2. Kelebihan Rakaat atau Rukun Fi\'li karena Lupa: Misal salat Zuhur terlanjur berdiri ke rakaat ke-5 dan baru sadar saat tasyahud akhir, maka langsung duduk dan sujud sahwi.',
      '3. Meninggalkan Sunnah Ab\'adh: Yaitu sunnah yang jika ditinggalkan dianjurkan sujud sahwi, seperti Tasyahud Awal dan Doa Qunut pada salat Subuh (menurut mazhab Syafi\'i). Catatan: Sunnah haiat (seperti membaca iftitah atau surat pendek) tidak perlu sujud sahwi.',
      '4. Ragu-ragu Terhadap Bilangan Rakaat: Misal ragu apakah sudah mengerjakan 2 atau 3 rakaat, maka tetapkan 2 rakaat (bilangan yang pasti), selesaikan sisa rakaatnya, lalu sujud sahwi.'
    ],
    bacaanList: [
      {
        title: 'Bacaan Masyhur Sujud Sahwi',
        sourceInfo: 'Dianjurkan para ulama mazhab Syafi\'i',
        arabic: 'سُبْحَانَ مَنْ لَا يَنَامُ وَلَا يَسْهُو',
        latin: 'Subḥāna mal-lā yanāmu wa lā yashū.',
        translation: 'Maha Suci Dzat (Allah) yang tidak pernah tidur dan tidak pernah lupa/lalai.',
        note: 'Dibaca 3 kali pada sujud sahwi pertama dan sujud sahwi kedua.'
      },
      {
        title: 'Alternatif Bacaan: Tasbih Sujud Standar',
        sourceInfo: 'Pendapat sebagian muhadditsin jika lupa bacaan khusus',
        arabic: 'سُبْحَانَ رَبِّيَ الْأَعْلَى وَبِحَمْدِهِ',
        latin: 'Subḥāna Rabbiyal-A‘lā wa biḥamdih.',
        translation: 'Maha Suci Tuhanku Yang Maha Tinggi dan dengan memuji kepada-Nya.',
        note: 'Jika belum hafal lafaz khusus, sah dan boleh membaca tasbih sujud biasa.'
      }
    ],
    tataCara: [
      {
        kondisi: 'Tata Cara Sujud Sahwi Sebelum Salam (Yang Paling Utama & Umum)',
        syarat: [
          'Sedang melaksanakan salat fardhu atau sunnah',
          'Telah menyelesaikan tasyahud akhir dan selawat Ibrahimiyyah'
        ],
        rukun: [
          'Niat sujud sahwi dalam hati bersamaan takbir',
          'Sujud pertama membaca doa sujud sahwi',
          'Duduk antara dua sujud',
          'Sujud kedua membaca doa sujud sahwi',
          'Duduk kembali sejenak',
          'Mengucapkan salam'
        ],
        steps: [
          {
            stepNumber: 1,
            title: 'Selesaikan Tasyahud Akhir Lengkap',
            description: 'Membaca tasyahud akhir beserta selawat kepada Nabi SAW dan keluarga Nabi hingga selesai sebelum mengucap salam.'
          },
          {
            stepNumber: 2,
            title: 'Takbir Turun ke Sujud Pertama',
            description: 'Tanpa mengangkat tangan, melafalkan takbir "Allahu Akbar" lalu turun sujud pertama.',
            arabicPhrase: 'اللهُ أَكْبَرُ'
          },
          {
            stepNumber: 3,
            title: 'Membaca Doa Sujud Sahwi 3 Kali',
            description: 'Membaca "Subḥāna mal-lā yanāmu wa lā yashū" sebanyak tiga kali dengan thuma\'ninah.'
          },
          {
            stepNumber: 4,
            title: 'Bangkit Bertakbir Duduk Antara Dua Sujud',
            description: 'Bangkit dari sujud seraya bertakbir dan duduk sejenak dengan membaca doa "Rabbighfirlī".'
          },
          {
            stepNumber: 5,
            title: 'Takbir Turun ke Sujud Kedua',
            description: 'Bertakbir kembali dan turun sujud kedua membaca doa "Subḥāna mal-lā yanāmu wa lā yashū" 3 kali.'
          },
          {
            stepNumber: 6,
            title: 'Bangkit Duduk dan Mengucapkan Salam',
            description: 'Bangkit bertakbir duduk kembali sejenak, lalu langsung menoleh ke kanan dan ke kiri mengucapkan salam sempurna.',
            arabicPhrase: 'السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللهِ'
          }
        ]
      }
    ],
    manfaatHikmah: [
      'Menyadari hakikat fitrah manusia yang lemah, tempatnya salah, lalai, dan lupa, sedangkan kesempurnaan mutlak hanya milik Allah Swt.',
      'Menambal kekurangan salat sehingga ibadah salat tetap sah, sempurna, dan terjaga pahalanya di sisi Allah Swt.',
      'Melatih konsentrasi, ketelitian, dan kehati-hatian dalam melaksanakan setiap rukun dan bacaan salat.',
      'Menundukkan dan menghinakan godaan setan (khinzib) yang sengaja meniupkan was-was saat salat.',
      'Menumbuhkan ketenangan jiwa (thuma\'ninah) bagi yang ragu-ragu dalam ibadahnya.'
    ],
    laranganPerhatian: [
      'Bagi makmum: Makmum wajib mengikuti imam jika imam melakukan sujud sahwi. Makmum tidak boleh mendahului atau enggan sujud sahwi.',
      'Jika imam lupa dan tidak sujud sahwi, makmum tidak boleh sujud sebelum imam salam. Makmum boleh sujud sahwi sendiri setelah imam mengucap salam.',
      'Sujud sahwi tidak dapat menggantikan rukun salat yang tertinggal (seperti Fatihah, Rukuk, Sujud). Rukun yang tertinggal WAJIB didatangkan dan digenapkan dulu rakaatnya, baru kemudian sujud sahwi.'
    ]
  },

  // ==================== 3. SUJUD TILAWAH ====================
  {
    id: 'sujud-tilawah',
    name: 'Sujud Tilawah',
    arabicName: 'سُجُودُ التِّلَاوَةِ',
    shortDefinition: 'Sujud satu kali saat membaca atau mendengar ayat Sajdah dalam Al-Qur\'an.',
    fullDefinition: 'Sujud Tilawah adalah sujud yang dilakukan sebanyak satu kali oleh seorang muslim ketika membaca (qari\') atau mendengar (mustami\') ayat-ayat Sajdah di dalam Al-Qur\'an, baik dilakukan ketika sedang melaksanakan salat maupun di luar salat.',
    hukum: 'Sunnah Mu’akkadah bagi orang yang membaca maupun yang mendengar ayat Sajdah.',
    dalilQuranHadis: {
      source: 'Hadits Riwayat Muslim (No. 81) dari Abu Hurairah r.a.',
      arabic: 'إِذَا قَرَأَ ابْنُ آدَمَ السَّجْدَةَ فَسَجَدَ اعْتَزَلَ الشَّيْطَانُ يَبْكِي، يَقُولُ: يَا وَيْلَهُ - وَفِي رِوَايَةِ أَبِي كُرَيْبٍ: يَا وَيْلِي - أُمِرَ ابْنُ آدَمَ بِالسُّجُودِ فَسَجَدَ فَلَهُ الْجَنَّةُ، وَأُمِرْتُ بِالسُّجُودِ فَأَبَيْتُ فَلِيَ النَّارُ',
      latin: 'Idzā qara’abnu Ādamas-sajdata fasajada i‘tazalasy-syayṭānu yabkī, yaqūlu: Yā waylahū (wa fī riwāyati Abī Kurayb: yā waylī) umirabnu Ādama bis-sujūdi fasajada falahul-jannah, wa umirtu bis-sujūdi fa’abaytu faliyan-nār.',
      translation: '"Apabila anak Adam (manusia) membaca ayat Sajdah lalu ia bersujud, maka setan akan menyingkir sambil menangis seraya meratap: \'Celakalah aku! Anak Adam diperintahkan untuk bersujud lalu ia bersujud, maka baginya surga. Sedangkan aku diperintahkan untuk bersujud tetapi aku membangkang, maka bagiku neraka.\'"',
      syarah: 'Hadits ini menggambarkan betapa agungnya kedudukan sujud tilawah. Ketika seorang muslim bersujud mendengar ayat Sajdah, setan menangis histeris karena teringat dosa kesombongannya saat menolak sujud hormat kepada Nabi Adam a.s. di hadapan Allah Swt.'
    },
    reasons: [
      'Membaca ayat-ayat Sajdah di dalam Al-Qur\'an, baik hafalan maupun melihat mushaf, baik di dalam salat maupun di luar salat.',
      'Mendengar bacaan ayat Sajdah yang dibacakan oleh seorang qari\' yang sah salatnya dan bersujud pula.'
    ],
    bacaanList: [
      {
        title: 'Bacaan Utama Sujud Tilawah (HR. At-Tirmidzi No. 580)',
        sourceInfo: 'Hadits Sahih Riwayat Abu Dawud, At-Tirmidzi, An-Nasa\'i, dan Ahmad',
        arabic: 'سَجَدَ وَجْهِيَ لِلَّذِي خَلَقَهُ، وَصَوَّرَهُ، وَشَقَّ سَمْعَهُ وَبَصَرَهُ، بِحَوْلِهِ وَقُوَّتِهِ، فَتَبَارَكَ اللهُ أَحْسَنُ الْخَالِقِينَ',
        latin: 'Sajada wajhiya lilladzī khalaqahū, wa ṣawwarahū, wa syaqqa sam‘ahū wa baṣarahū, biḥawlihī wa quwwatihī, fatabārakallāhu aḥsanul-khāliqīn.',
        translation: 'Bersujud wajahku kepada Dzat yang telah menciptakannya, membentuk rupanya, dan membuka pendengaran serta penglihatannya dengan daya dan kekuatan-Nya. Maka Maha Berkah Allah sebaik-baik Pencipta.',
        note: 'Doa agung pengakuan ketundukan seluruh indra dan fisik di hadapan Allah Al-Khaliq.'
      },
      {
        title: 'Doa Tambahan Sujud Tilawah (HR. At-Tirmidzi No. 579)',
        sourceInfo: 'Doa Nabi SAW saat sujud tilawah dari Ibnu Abbas r.a.',
        arabic: 'اللَّهُمَّ اكْتُبْ لِي بِهَا عِنْدَكَ أَجْرًا، وَضَعْ عَنِّي بِهَا وِزْرًا، وَاجْعَلْهَا لِي عِنْدَكَ ذُخْرًا، وَتَقَبَّلْهَا مِنِّي كَمَا تَقَبَّلْتَهَا مِنْ عَبْدِكَ دَاوُدَ',
        latin: 'Allāhummaktub lī bihā ‘indaka ajrā, wa ḍa‘ ‘annī bihā wizrā, waj‘alhā lī ‘indaka dzukhrā, wa taqabbalhā minnī kamā taqabbaltahā min ‘abdika Dāwūd.',
        translation: 'Ya Allah, catatkanlah untukku dengan sujud ini pahala di sisi-Mu, hapuskanlah dariku dengannya dosa/beban kesalahan, jadikanlah ia simpanan pahala bagiku di sisi-Mu, dan terimalah ia dariku sebagaimana Engkau telah menerimanya dari hamba-Mu Dawud.',
        note: 'Sangat indah dibaca terutama ketika membaca surah Shad ayat 24.'
      },
      {
        title: 'Zikir Pengganti (Jika Tidak Memungkinkan Sujud)',
        sourceInfo: 'Pendapat para fuqaha jika berhadas atau tempat tidak bersih',
        arabic: 'سُبْحَانَ اللهِ وَالْحَمْدُ لِلّٰهِ وَلَا إِلٰهَ إِلَّا اللهُ وَاللهُ أَكْبَرُ، وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللهِ الْعَلِيِّ الْعَظِيْمِ',
        latin: 'Subḥānallāhi wal-ḥamdu lillāhi wa lā ilāha illallāhu wallāhu akbar, wa lā ḥawla wa lā quwwata illā billāhil-‘aliyyil-‘aẓīm.',
        translation: 'Maha Suci Allah, segala puji bagi Allah, tiada tuhan selain Allah, Allah Maha Besar, dan tiada daya serta upaya kecuali dengan pertolongan Allah Yang Maha Tinggi lagi Maha Agung.',
        note: 'Dibaca 4 kali jika sedang tidak punya wudhu atau di atas kendaraan.'
      }
    ],
    tataCara: [
      {
        kondisi: 'Tata Cara Sujud Tilawah di Luar Salat',
        syarat: [
          'Suci dari hadas kecil dan besar',
          'Suci badan, pakaian, dan tempat sujud',
          'Menutup aurat dan menghadap kiblat'
        ],
        rukun: [
          'Niat sujud tilawah',
          'Takbiratul Ihram',
          'Sujud satu kali dengan thuma\'ninah',
          'Duduk sejenak sesudah sujud',
          'Salam'
        ],
        steps: [
          {
            stepNumber: 1,
            title: 'Berdiri atau Duduk Menghadap Kiblat',
            description: 'Berada dalam keadaan suci, menutup aurat, dan menghadap kiblat.'
          },
          {
            stepNumber: 2,
            title: 'Berniat Sujud Tilawah',
            description: 'Memasang niat di dalam hati untuk sujud tilawah lillahi ta\'ala.',
            arabicPhrase: 'نَوَيْتُ سُجُودَ التِّلَاوَةِ لِلّٰهِ تَعَالَى (Nawaitu sujūdat-tilāwati lillāhi ta‘ālā)'
          },
          {
            stepNumber: 3,
            title: 'Takbiratul Ihram',
            description: 'Mengangkat tangan dan mengucap takbir "Allahu Akbar".'
          },
          {
            stepNumber: 4,
            title: 'Turun Sujud Satu Kali',
            description: 'Bertakbir intiqal langsung turun sujud satu kali dengan thuma\'ninah dan membaca doa sujud tilawah.'
          },
          {
            stepNumber: 5,
            title: 'Bangkit Duduk Sejenak dan Salam',
            description: 'Bangkit duduk iftirasy sejenak lalu mengucap salam ke kanan dan kiri.'
          }
        ]
      },
      {
        kondisi: 'Tata Cara Sujud Tilawah di Dalam Salat (Sendiri / Munfarid)',
        syarat: [
          'Sedang melaksanakan salat',
          'Membaca ayat Sajdah'
        ],
        rukun: [
          'Takbir intiqal langsung turun sujud',
          'Sujud 1 kali membaca doa tilawah',
          'Bangkit berdiri kembali melanjutkan salat'
        ],
        steps: [
          {
            stepNumber: 1,
            title: 'Membaca Ayat Sajdah',
            description: 'Saat membaca sampai selesai ayat Sajdah dalam surah yang dibaca.'
          },
          {
            stepNumber: 2,
            title: 'Takbir Langsung Turun Sujud',
            description: 'Mengucap "Allahu Akbar" langsung sujud satu kali (tanpa rukuk dan tanpa i\'tidal dahulu).'
          },
          {
            stepNumber: 3,
            title: 'Membaca Doa Sujud Tilawah',
            description: 'Membaca "Sajada wajhiya lilladzī khalaqahū..." di dalam sujud.'
          },
          {
            stepNumber: 4,
            title: 'Bangkit Berdiri Kembali',
            description: 'Bertakbir "Allahu Akbar" dan bangkit berdiri tegak ke posisi semula.'
          },
          {
            stepNumber: 5,
            title: 'Melanjutkan Salat',
            description: 'Melanjutkan membaca ayat berikutnya, atau jika ayat sajdah adalah akhir surah, langsung lanjut rukuk.'
          }
        ]
      },
      {
        kondisi: 'Ketentuan Khusus Sujud Tilawah Dalam Salat Berjamaah',
        syarat: ['Hanya boleh sujud JIKA imam sujud tilawah'],
        rukun: ['Wajib tunduk pada gerakan imam'],
        steps: [
          {
            stepNumber: 1,
            title: 'Jika Imam Bersujud',
            description: 'Makmum WAJIB ikut bersujud tilawah bersama imam. Jika makmum sengaja tidak sujud, salat makmum batal.'
          },
          {
            stepNumber: 2,
            title: 'Jika Imam Tidak Bersujud',
            description: 'Makmum DILARANG bersujud sendiri. Jika makmum bersujud tilawah sendiri padahal imam tetap berdiri, salat makmum BATAL karena menyalahi imam.'
          }
        ]
      }
    ],
    manfaatHikmah: [
      'Menunjukkan kepatuhan dan ketundukan mutlak kepada perintah Allah Swt. saat mendengar ayat keagungan-Nya.',
      'Menghinakan setan serta menjauhkan diri dari kesombongan iblis yang diusir dari surga karena enggan bersujud.',
      'Mendekatkan diri pada derajat spiritual tertinggi di hadapan Allah Swt.',
      'Mendapatkan jaminan surga sebagaimana sabda Nabi SAW dalam hadits shahih riwayat Muslim.',
      'Menumbuhkan rasa khusyuk, haru, dan tadabbur mendalam terhadap makna ayat-ayat suci Al-Qur\'an.'
    ],
    laranganPerhatian: [
      'Jangan melakukan sujud tilawah sendiri saat menjadi makmum jika imam tidak sujud.',
      'Jangan membungkuk rukuk ketika bermaksud sujud tilawah di dalam salat; harus langsung turun sujud ke lantai.',
      'Sujud tilawah hanya dilakukan SATU KALI, bukan dua kali.'
    ]
  }
];

// ==================== 15 AYAT SAJDAH ====================
export const AYAT_SAJDAH_LIST: AyatSajdah[] = [
  {
    nomor: 1,
    surahName: 'Al-A‘rāf',
    surahNumber: 7,
    ayahNumber: 206,
    juz: 9,
    ayatSnippetArabic: 'إِنَّ الَّذِينَ عِندَ رَبِّكَ لَا يَسْتَكْبِرُونَ عَنْ عِبَادَتِهِ وَيُسَبِّحُونَهُ وَلَهُ يَسْجُدُونَ ۩',
    latin: 'Innal-ladzīna ‘inda Rabbika lā yastakbirūna ‘an ‘ibādatihī wa yusabbiḥūnahū wa lahū yasjudūn.',
    translation: 'Sesungguhnya orang-orang yang ada di sisi Tuhanmu tidak merasa enggan untuk menyembah-Nya dan mereka bertasbih kepada-Nya serta hanya kepada-Nya mereka bersujud.',
    contextKandungan: 'Malaikat-malaikat mulia di sisi Allah yang senantiasa bertasbih dan tidak pernah sombong untuk bersujud.',
    audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/1160.mp3'
  },
  {
    nomor: 2,
    surahName: 'Ar-Ra‘d',
    surahNumber: 13,
    ayahNumber: 15,
    juz: 13,
    ayatSnippetArabic: 'وَلِلَّهِ يَسْجُدُ مَن فِي السَّمَاوَاتِ وَالْأَرْضِ طَوْعًا وَكَرْهًا وَظِلَالُهُم بِالْغُدُوِّ وَالْآصَالِ ۩',
    latin: 'Wa lillāhi yasjudu man fis-samāwāti wal-arḍi ṭaw‘an wa karhan wa ẓilāluhum bil-ghuduwwi wal-āṣāl.',
    translation: 'Dan semua sujud kepada Allah apa yang ada di langit dan di bumi, baik dengan kemauan sendiri maupun terpaksa, dan (sujud pula) bayang-bayang mereka pada waktu pagi dan petang hari.',
    contextKandungan: 'Seluruh makhluk semesta alam tunduk bersujud kepada hukum sunnatullah Pencipta.',
    audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/1722.mp3'
  },
  {
    nomor: 3,
    surahName: 'An-Naḥl',
    surahNumber: 16,
    ayahNumber: 49,
    juz: 14,
    ayatSnippetArabic: 'وَلِلَّهِ يَسْجُدُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ مِن دَابَّةٍ وَالْمَلَائِكَةُ وَهُمْ لَا يَسْتَكْبِرُونَ ۩',
    latin: 'Wa lillāhi yasjudu mā fis-samāwāti wa mā fil-arḍi min dābbatin wal-malā’ikatu wa hum lā yastakbirūn.',
    translation: 'Dan kepada Allah sajalah bersujud segala apa yang ada di langit dan semua makhluk yang melata di bumi dan juga para malaikat, sedang mereka (malaikat) tidak menyombongkan diri.',
    contextKandungan: 'Ketundukan total para malaikat dan segenap makhluk hidup kepada kekuasaan Allah.',
    audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/1950.mp3'
  },
  {
    nomor: 4,
    surahName: 'Al-Isrā’',
    surahNumber: 17,
    ayahNumber: 109,
    juz: 15,
    ayatSnippetArabic: 'وَيَخِرُّونَ لِلْأَذْقَانِ يَبْكُونَ وَيَزِيدُهُمْ خُشُوعًا ۩',
    latin: 'Wa yakhirrūna lil-adzqāni yabkūna wa yazīduhum khusyū‘ā.',
    translation: 'Dan mereka menyungkurkan wajah sambil menangis dan mereka bertambah khusyuk.',
    contextKandungan: 'Karakter orang berilmu yang tersungkur sujud dan meneteskan air mata haru saat kalam Ilahi dibacakan.',
    audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/2138.mp3'
  },
  {
    nomor: 5,
    surahName: 'Maryam',
    surahNumber: 19,
    ayahNumber: 58,
    juz: 16,
    ayatSnippetArabic: 'إِذَا تُتْلَىٰ عَلَيْهِمْ آيَاتُ الرَّحْمَٰنِ خَرُّوا سُجَّدًا وَبُكِيًّا ۩',
    latin: 'Idzā tutlā ‘alayhim āyātur-Raḥmāni kharrū sujjadan wa bukiyyā.',
    translation: 'Apabila dibacakan ayat-ayat Allah Yang Maha Pemurah kepada mereka, maka mereka menyungkur dengan bersujud dan menangis.',
    contextKandungan: 'Teladan para nabi keturunan Adam, Nuh, Ibrahim, dan Israil yang segera bersujud saat mendengar ayat Rahman.',
    audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/2308.mp3'
  },
  {
    nomor: 6,
    surahName: 'Al-Ḥajj',
    surahNumber: 22,
    ayahNumber: 18,
    juz: 17,
    ayatSnippetArabic: 'أَلَمْ تَرَ أَنَّ اللَّهَ يَسْجُدُ لَهُ مَن فِي السَّمَاوَاتِ وَمَن فِي الْأَرْضِ وَالشَّمْسُ وَالْقَمَرُ وَالنُّجُومُ وَالْجِبَالُ وَالشَّجَرُ وَالدَّوَابُّ وَكَثِيرٌ مِّنَ النَّاسِ ۩',
    latin: 'A lam tara annallāha yasjudu lahū man fis-samāwāti wa man fil-arḍi wasy-syamsu wal-qamaru wan-nujūmu wal-jibālu wasy-syajaru wad-dawābbu wa katsīrum minan-nās.',
    translation: 'Apakah kamu tiada mengetahui, bahwa kepada Allah bersujud apa yang ada di langit, di bumi, matahari, bulan, bintang, gunung, pohon-pohonan, binatang-binatang yang melata dan sebagian besar daripada manusia?',
    contextKandungan: 'Harmoni kosmis alam semesta: matahari, bintang, dan gunung bersujud kepada Allah.',
    audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/2613.mp3'
  },
  {
    nomor: 7,
    surahName: 'Al-Ḥajj',
    surahNumber: 22,
    ayahNumber: 77,
    juz: 17,
    ayatSnippetArabic: 'يَا أَيُّهَا الَّذِينَ آمَنُوا ارْكَعُوا وَاسْجُدُوا وَاعْبُدُوا رَبَّكُمْ وَافْعَلُوا الْخَيْرَ لَعَلَّكُمْ تُفْلِحُونَ ۩',
    latin: 'Yā ayyuhal-ladzīna āmanurka‘ū wasjudū wa‘budū Rabbakum waf‘alul-khayra la‘allakum tufliḥūn.',
    translation: 'Wahai orang-orang yang beriman, rukuklah kamu, sujudlah kamu, sembahlah Tuhanmu dan perbuatlah kebajikan, supaya kamu mendapat kemenangan.',
    contextKandungan: 'Perintah langsung kepada orang beriman untuk rukuk, sujud, dan berbuat kebajikan.',
    audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/2672.mp3'
  },
  {
    nomor: 8,
    surahName: 'Al-Furqān',
    surahNumber: 25,
    ayahNumber: 60,
    juz: 19,
    ayatSnippetArabic: 'وَإِذَا قِيلَ لَهُمُ اسْجُدُوا لِلرَّحْمَٰنِ قَالُوا وَمَا الرَّحْمَٰنُ أَنَسْجُدُ لِمَا تَأْمُرُنَا وَزَادَهُمْ نُفُورًا ۩',
    latin: 'Wa idzā qīla lahumusjudū lir-Raḥmāni qālū wa mar-Raḥmānu a nasjudu limā ta’murunā wa zādahum nufūrā.',
    translation: 'Dan apabila dikatakan kepada mereka: "Sujudlah kamu sekalian kepada Yang Maha Pemurah", mereka menjawab: "Siapakah Yang Maha Pemurah itu? Apakah kami akan sujud kepada Tuhan Yang kamu perintahkan kepada kami?", dan perintah sujud itu menambah mereka jauh (dari iman).',
    contextKandungan: 'Kecaman atas kecongkakan kaum kafir yang menolak sujud kepada Ar-Rahman.',
    audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/2915.mp3'
  },
  {
    nomor: 9,
    surahName: 'An-Naml',
    surahNumber: 27,
    ayahNumber: 25,
    juz: 19,
    ayatSnippetArabic: 'أَلَّا يَسْجُدُوا لِلَّهِ الَّذِي يُخْرِجُ الْخَبْءَ فِي السَّمَاوَاتِ وَالْأَرْضِ وَيَعْلَمُ مَا تُخْفُونَ وَمَا تُعْلِنُونَ ۩',
    latin: 'Allā yasjudū lillāhil-ladzī yukhrijul-khab’a fis-samāwāti wal-arḍi wa ya‘lamu mā tukhfūna wa mā tu‘linūn.',
    translation: 'Agar mereka tidak menyembah Allah Yang mengeluarkan apa yang terpendam di langit dan di bumi dan Yang mengetahui apa yang kamu sembunyikan dan apa yang kamu nyatakan.',
    contextKandungan: 'Kisah burung Hud-hud yang heran mengapa kaum Ratu Balqis sujud kepada matahari bukan kepada Allah.',
    audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/3184.mp3'
  },
  {
    nomor: 10,
    surahName: 'As-Sajdah',
    surahNumber: 32,
    ayahNumber: 15,
    juz: 21,
    ayatSnippetArabic: 'إِنَّمَا يُؤْمِنُ بِآيَاتِنَا الَّذِينَ إِذَا ذُكِّرُوا بِهَا خَرُّوا سُجَّدًا وَسَبَّحُوا بِحَمْدِ رَبِّهِمْ وَهُمْ لَا يَسْتَكْبِرُونَ ۩',
    latin: 'Innamā yu’minu bi’āyātināl-ladzīna idzā dzukkirū bihā kharrū sujjadan wa sabbaḥū biḥamdi Rabbihim wa hum lā yastakbirūn.',
    translation: 'Sesungguhnya orang yang benar-benar percaya kepada ayat-ayat Kami adalah mereka yang apabila diperingatkan dengannya mereka menyungkur sujud dan bertasbih serta memuji Tuhannya, dan mereka tidak menyombongkan diri.',
    contextKandungan: 'Ciri utama mukmin hakiki yang menyungkur sujud dan memuji Allah saat mendengar firman-Nya.',
    audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/3518.mp3'
  },
  {
    nomor: 11,
    surahName: 'Ṣād',
    surahNumber: 38,
    ayahNumber: 24,
    juz: 23,
    ayatSnippetArabic: 'وَظَنَّ دَاوُودُ أَنَّمَا فَتَنَّاهُ فَاسْتَغْفَرَ رَبَّهُ وَخَرَّ رَاكِعًا وَأَنَابَ ۩',
    latin: 'Wa ẓanna Dāwūdu annamā fatannāhu fastaghfara Rabbahū wa kharra rāki‘an wa anāb.',
    translation: 'Dan Dawud menduga bahwa Kami mengujinya; maka ia meminta ampun kepada Tuhannya lalu menyungkur sujud dan bertaubat.',
    contextKandungan: 'Kisah ketundukan Nabi Dawud a.s. yang segera bersujud memohon ampunan kepada Allah Swt.',
    audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/4009.mp3'
  },
  {
    nomor: 12,
    surahName: 'Fuṣṣilat',
    surahNumber: 41,
    ayahNumber: 37,
    juz: 24,
    ayatSnippetArabic: 'وَمِنْ آيَاتِهِ اللَّيْلُ وَالنَّهَارُ وَالشَّمْسُ وَالْقَمَرُ ۚ لَا تَسْجُدُوا لِلشَّمْسِ وَلَا لِلْقَمَرِ وَاسْجُدُوا لِلَّهِ الَّذِي خَلَقَهُنَّ إِن كُنتُمْ إِيَّاهُ تَعْبُدُونَ ۩',
    latin: 'Wa min āyātihil-laylu wan-nahāru wasy-syamsu wal-qamar, lā tasjudū lisy-syamsi wa lā lil-qamari wasjudū lillāhil-ladzī khalaqahunna in kuntum iyyāhu ta‘budūn.',
    translation: 'Dan di antara tanda-tanda kekuasaan-Nya ialah malam, siang, matahari dan bulan. Janganlah bersujud kepada matahari dan janganlah (pula) kepada bulan, tetapi bersujudlah kepada Allah Yang menciptakannya, jika kamu hanya kepada-Nya menyembah.',
    contextKandungan: 'Larangan menyembah benda-benda angkasa dan kewajiban hanya sujud kepada Allah Sang Khalik.',
    audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/4255.mp3'
  },
  {
    nomor: 13,
    surahName: 'An-Najm',
    surahNumber: 53,
    ayahNumber: 62,
    juz: 27,
    ayatSnippetArabic: 'فَاسْجُدُوا لِلَّهِ وَاعْبُدُوا ۩',
    latin: 'Fasjudū lillāhi wa‘budū.',
    translation: 'Maka bersujudlah kepada Allah dan sembahlah (Dia).',
    contextKandungan: 'Perintah tegas penutup surah An-Najm di mana dahulu kaum muslimin dan musyrikin Makkah sama-sama tersungkur sujud mendengarnya.',
    audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/4846.mp3'
  },
  {
    nomor: 14,
    surahName: 'Al-Insyiqāq',
    surahNumber: 84,
    ayahNumber: 21,
    juz: 30,
    ayatSnippetArabic: 'وَإِذَا قُرِئَ عَلَيْهِمُ الْقُرْآنُ لَا يَسْجُدُونَ ۩',
    latin: 'Wa idzā quri’a ‘alayhimul-Qur’ānu lā yasjudūn.',
    translation: 'Dan apabila Al-Qur\'an dibacakan kepada mereka, mengapa mereka tidak mau bersujud?',
    contextKandungan: 'Pertanyaan retoris menegur keras orang-orang yang hatinya keras dan enggan bersujud di hadapan Al-Qur\'an.',
    audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/5905.mp3'
  },
  {
    nomor: 15,
    surahName: 'Al-‘Alaq',
    surahNumber: 96,
    ayahNumber: 19,
    juz: 30,
    ayatSnippetArabic: 'كَلَّا لَا تُطِعْهُ وَاسْجُدْ وَاقْتَرِب ۩',
    latin: 'Kallā lā tuṭi‘hu wasjud waqtarib.',
    translation: 'Sekali-kali jangan! Janganlah kamu patuh kepadanya; dan sujudlah dan dekatkanlah (dirimu kepada Tuhan).',
    contextKandungan: 'Perintah agung kepada Nabi Muhammad SAW untuk bersujud mendekatkan diri kepada Allah tanpa takut ancaman Abu Jahal.',
    audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/6124.mp3'
  }
];

// ==================== 5 SOAL KUIS HOTS ====================
export const QUIZ_BAB4_DATA: QuizQuestionBab4[] = [
  {
    id: 1,
    scenario: 'Zaidan baru saja menerima pengumuman kelulusan seleksi madrasah unggulan dengan peringkat pertama. Secara spontan di ruang tamu rumahnya, Zaidan langsung mengambil air wudhu, menghadap kiblat, bertakbir, lalu bersujud satu kali memuji kebesaran Allah Swt. dan mengucap salam.',
    question: 'Berdasarkan ilustrasi di atas, jenis sujud apakah yang dilakukan Zaidan dan bagaimana hukum pelaksanaannya?',
    options: [
      'Sujud Sahwi, hukumnya sunnah mu\'akkadah di akhir salat',
      'Sujud Syukur, hukumnya sunnah mu\'akkadah dilakukan di luar salat',
      'Sujud Tilawah, hukumnya wajib bagi setiap siswa yang lulus ujian',
      'Sujud Syukur, hukumnya fardhu \'ain yang wajib dilakukan di dalam salat'
    ],
    correctAnswer: 1,
    explanation: 'Zaidan melakukan Sujud Syukur atas nikmat besar kelulusan yang diterimanya. Hukum sujud syukur adalah Sunnah Mu\'akkadah, dilakukan sebanyak satu kali di luar salat dengan memenuhi syarat bersuci, menutup aurat, dan menghadap kiblat.'
  },
  {
    id: 2,
    scenario: 'Pak Rahmat menjadi imam salat Isya berjamaah di masjid. Pada rakaat kedua, beliau lupa melakukan duduk Tasyahud Awal dan langsung berdiri tegak ke rakaat ketiga. Makmum di belakang mengingatkan dengan mengucap tasbih "Subhanallah".',
    question: 'Tindakan fikih yang paling tepat dan benar dilakukan oleh Pak Rahmat sebagai imam adalah...',
    options: [
      'Langsung kembali duduk tasyahud awal saat rakaat ketiga agar salatnya tidak batal',
      'Membatalkan salat dan mengulanginya dari rakaat pertama bersama jamaah',
      'Tetap meneruskan rakaat ketiga hingga tasyahud akhir, lalu sebelum salam melakukan sujud sahwi dua kali',
      'Melakukan sujud syukur satu kali setelah salam selesai'
    ],
    correctAnswer: 2,
    explanation: 'Tasyahud awal adalah sunnah ab\'adh. Jika imam sudah berdiri tegak ke rakaat berikutnya, imam tidak boleh kembali duduk (karena dapat membatalkan salat). Tindakan yang benar adalah menyempurnakan salat hingga tasyahud akhir, kemudian sebelum mengucapkan salam melakukan sujud sahwi sebanyak dua kali.'
  },
  {
    id: 3,
    scenario: 'Ketika melaksanakan salat Subuh berjamaah pada hari Jumat, imam membaca Surah As-Sajdah. Ketika sampai pada ayat ke-15 (ayat Sajdah), imam langsung bertakbir turun sujud satu kali tanpa melakukan gerakan rukuk terlebih dahulu.',
    question: 'Bagaimanakah sikap makmum di belakang imam yang sesuai dengan tuntunan fikih Islam?',
    options: [
      'Makmum wajib tetap berdiri tegak karena imam belum rukuk',
      'Makmum wajib ikut bersujud bersama imam mengikuti gerakan imam secara serentak',
      'Makmum harus mengingatkan imam dengan mengucap "Subhanallah" karena imam lupa rukuk',
      'Makmum langsung rukuk sendiri meninggalkan imam yang sedang sujud'
    ],
    correctAnswer: 1,
    explanation: 'Imam sedang melakukan Sujud Tilawah di dalam salat saat membaca ayat Sajdah. Bagi makmum, wajib hukumnya mengikuti gerakan imam bersujud tilawah. Jika makmum sengaja tidak ikut sujud, salat makmum tersebut menjadi batal karena menyalahi imam.'
  },
  {
    id: 4,
    scenario: 'Aisyah sedang membaca Al-Qur\'an di teras rumahnya dan sampai pada Q.S. Al-A\'raf ayat 206 yang terdapat tanda kubah sajdah (۩). Namun, Aisyah sedang dalam keadaan berhadas atau belum berwudhu.',
    question: 'Alternatif amalan apakah yang dapat dibaca Aisyah sebagai pengganti sujud tilawah menurut para fuqaha?',
    options: [
      'Membaca istighfar seratus kali sambil menghadap kiblat',
      'Melakukan sujud syukur dua kali tanpa wudhu',
      'Membaca kalimat tasbih, tahmid, tahlil, dan takbir (Subhanallah walhamdulillah wa la ilaha illallah wallahu akbar...) sebanyak 4 kali',
      'Mengganti dengan puasa sunnah satu hari'
    ],
    correctAnswer: 2,
    explanation: 'Para ulama fikih menganjurkan bagi seseorang yang membaca atau mendengar ayat sajdah namun tidak memungkinkan bersujud (karena berhadas, tidak ada air wudhu, atau di atas kendaraan) untuk membaca kalimat thoyyibah: "Subḥānallāhi wal-ḥamdu lillāhi wa lā ilāha illallāhu wallāhu akbar, wa lā ḥawla wa lā quwwata illā billāhil-‘aliyyil-‘aẓīm" sebanyak 4 kali.'
  },
  {
    id: 5,
    scenario: 'Faris sedang salat Maghrib sendirian di kamarnya. Pada rakaat terakhir, ia merasa ragu-ragu apakah ia baru menyelesaikan rakaat kedua atau sudah berada di rakaat ketiga.',
    question: 'Berdasarkan hadits Rasulullah SAW riwayat Muslim dari Abu Sa\'id Al-Khudri, langkah kaidah fiqhiyyah yang harus diambil Faris adalah...',
    options: [
      'Memilih rakaat terbanyak yaitu rakaat ketiga agar salat cepat selesai',
      'Membuang keraguan dan menetapkan jumlah rakaat yang meyakinkan yaitu rakaat kedua (yang lebih sedikit), menambah satu rakaat lagi, lalu sujud sahwi sebelum salam',
      'Membatalkan salat dan mengulang dari takbiratul ihram',
      'Langsung salam saat itu juga lalu melakukan sujud syukur'
    ],
    correctAnswer: 1,
    explanation: 'Kaidah fikih berbunyi: "Al-yaqīnu lā yazūlu bisy-syakk" (keyakinan tidak gugur oleh keraguan). Rasulullah SAW memerintahkan untuk membuang keraguan dan mengambil jumlah rakaat yang pasti/sedikit (yaitu 2 rakaat), lalu menyempurnakan 1 rakaat lagi, kemudian melakukan sujud sahwi dua kali sebelum salam.'
  }
];
