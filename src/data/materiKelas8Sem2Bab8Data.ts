export interface DalilCintaIlmuItem {
  id: string;
  nomorSurahAyat: string;
  namaSurah: string;
  nomorAyat: string;
  teksArab: string;
  transliterasi: string;
  terjemahanKemenag: string;
  kandunganPokok: string;
  kaidahTajwid: Array<{
    potonganLafaz: string;
    hukumTajwid: string;
    caraMembaca: string;
    alasan: string;
  }>;
  asbabunNuzulTafsir: string;
}

export interface HaditsCintaIlmuItem {
  id: string;
  perawi: string;
  kitabRujukan: string;
  derajatHadits: string;
  teksArab: string;
  transliterasi: string;
  terjemahan: string;
  pelajaranPenting: string;
}

export interface CiriCintaIlmuItem {
  id: string;
  nomor: number;
  judulCiri: string;
  istilahArab: string;
  deskripsi: string;
  indikatorPerilaku: string[];
  contohAksiSiswa: string;
}

export interface ManfaatBerilmuItem {
  id: string;
  kategori: 'Duniawi (Pribadi & Sosial)' | 'Ukhrawi (Spiritual)';
  judulManfaat: string;
  dalilDasar: string;
  uraianMendalam: string;
  dampakPositif: string;
}

export interface HikmahCintaIlmuItem {
  id: string;
  nomor: number;
  judulHikmah: string;
  penjelasan: string;
  dampakKepribadian: string;
  relevansiZamanModern: string;
}

export interface StudiKasusCintaIlmuItem {
  id: string;
  nomor: number;
  judulKasus: string;
  deskripsiMasalah: string;
  pertanyaanAnalisis: string;
  solusiDanKeteladanan: string;
  nilaiKarakter: string;
}

export interface SoalEvaluasiHotsCintaIlmu {
  id: string;
  nomor: number;
  pertanyaan: string;
  stimulusKonteks?: string;
  pilihanJawaban: string[];
  kunciJawaban: number; // 0 for A, 1 for B, 2 for C, 3 for D
  pembahasanLengkap: string;
}

export const MATERI_KELAS_8_SEM_2_BAB_8 = {
  header: {
    mataPelajaran: 'Pendidikan Agama Islam dan Budi Pekerti',
    jenjangKelas: 'SMP / MTs Kelas VIII',
    semester: 'Semester Genap (2)',
    bab: 'Bab 8',
    judulBab: 'Menerapkan Makna Cinta Ilmu: Menumbuhkan Semangat Literasi dan Riset untuk Kemajuan Bangsa',
    capaianPembelajaran:
      'Peserta didik mampu memahami hakikat cinta ilmu, menganalisis dalil naqli Al-Qur\'an dan Hadis tentang kewajiban menuntut ilmu, mengidentifikasi ciri-ciri pecinta ilmu, menelaah manfaat berilmu baik di dunia maupun akhirat, serta merefleksikan hikmah cinta ilmu dalam menumbuhkan etos literasi, riset ilmiah, dan akhlak tawadhu\' dalam kehidupan sehari-hari.'
  },

  pengertianCintaIlmu: {
    secaraBahasa: {
      asalKata: "Secara etimologi (bahasa), kata 'ilmu' berasal dari bahasa Arab yaitu akar kata 'alima - ya'lamu - 'ilman (عَلِمَ - يَعْلَمُ - عِلْمًا) yang bermakna mengetahui, memahami, mengenal, atau meyakini hakikat sesuatu secara pasti sesuai fakta sebenarnya. Sedangkan kata 'cinta' (mahabbah/syaghaf) berarti kecenderungan hati yang mendalam, kerinduan, dan ketertarikan jiwa yang kuat.",
      maknaGabungan:
        "Cinta ilmu berarti dorongan rasa suka, hasrat yang menggelora, dan kerinduan jiwa yang tulus untuk mendekati, mendalami, serta mereguk pengetahuan yang membawa kebaikan dan kemaslahatan hidup."
    },
    secaraIstilah: {
      definisi:
        "Secara terminologi (istilah syariat), cinta ilmu adalah sikap batin seorang mukmin yang dilandasi keimanan dan keikhlasan untuk senantiasa mencari, menggali, memahami, mengamalkan, dan menyebarkan ilmu pengetahuan yang bermanfaat (al-'ilmun nafi') demi meraih keridhaan Allah Swt., menyempurnakan ibadah, serta memberikan manfaat seluas-luasnya bagi peradaban umat manusia.",
      urgensiMenuntutIlmu:
        "Dalam Islam, menuntut ilmu bukan sekadar kewajiban akademis formal demi selembar ijazah atau gengsi sosial, melainkan merupakan fondasi keimanan (al-ilmu qablal qawli wal 'amal - berilmu sebelum berkata dan berbuat), bagian dari ibadah tertinggi, serta jihad fi sabilillah tanpa kekerasan."
    },
    pembagianHukumMenuntutIlmu: [
      {
        kategori: "Fardhu 'Ain (فَرْضُ عَيْنٍ)",
        pengertian:
          "Kewajiban individual yang dibebankan kepada setiap muslim dan muslimah yang telah mukallaf (baligh dan berakal). Kewajiban ini tidak dapat diwakilkan oleh orang lain.",
        lingkupIlmu: [
          "Ilmu Akidah & Tauhid dasar: Mengenal Allah, para rasul, rukun iman, dan hal-hal yang membatalkan keimanan.",
          "Ilmu Fikih Ibadah Praktis: Tata cara bersuci (thaharah), shalat lima waktu, puasa Ramadhan, dan zakat (bagi yang wajib).",
          "Ilmu Akhlak & Hati: Mengetahui halal dan haram makanan/minuman, serta bahaya maksiat batin seperti dengki, takabur, dan riya'."
        ],
        konsekuensi:
          "Jika seseorang meninggalkannya dalam keadaan mampu mempelajarinya, maka ia berdosa secara pribadi di hadapan Allah Swt."
      },
      {
        kategori: "Fardhu Kifayah (فَرْضُ كِفَايَةٍ)",
        pengertian:
          "Kewajiban kolektif yang dibebankan kepada seluruh umat Islam dalam suatu wilayah/komunitas. Jika telah ada sebagian kaum muslimin yang mempelajarinya dan mencukupi kebutuhan masyarakat, maka gugurlah dosa dari yang lain.",
        lingkupIlmu: [
          "Ilmu Sains & Teknologi: Kedokteran, farmasi, teknik sipil, astronomi, ilmu komputer, dan kecerdasan buatan (AI).",
          "Ilmu Sosial & Humaniora: Ilmu ekonomi syariah, hukum perundang-undangan, ilmu politik, sejarah, dan sosiologi.",
          "Ilmu Agama Tingkat Lanjut: Ushul Fiqih, ilmu hadis riwayah dan dirayah, qira'at Al-Qur'an mendalam, dan ilmu falak."
        ],
        konsekuensi:
          "Jika dalam suatu wilayah atau bangsa tidak ada satu pun yang menguasai ilmu kedokteran atau sains penting hingga masyarakat menderita, maka seluruh warga masyarakat tersebut menanggung dosa bersama."
      }
    ],
    nasihatImamSyafii: {
      tokoh: "Al-Imam Asy-Syafi'i rahimahullah",
      sumberSyair: "Diwan Al-Imam Asy-Syafi'i",
      syairArab: "أَخِي لَنْ تَنَالَ العِلْمَ إِلَّا بِسِتَّةٍ ۞ سَأُنْبِيكَ عَنْ تَفْصِيلِهَا بِبَيَانِ: ذَكَاءٌ وَحِرْصٌ وَاجْتِهَادٌ وَدِرْهَمٌ ۞ وَصُحْبَةُ أُسْتَاذٍ وَطُولُ زَمَانِ",
      terjemahanSyair:
        "Saudaraku! Engkau tidak akan pernah meraih ilmu kecuali dengan enam perkara, akan kuberitahukan kepadamu rinciannya secara gamblang: (1) Kecerdasan akal, (2) Ketamakan/antusiasme tinggi terhadap ilmu, (3) Kesungguhan kerja keras, (4) Bekal biaya secukupnya, (5) Bimbingan guru yang ahli, dan (6) Waktu belajar yang panjang.",
      enamSyaratIlmu: [
        { nama: "Zakā'un (ذَكَاءٌ)", arti: "Kecerdasan, kejernihan pikiran, dan kemauan mengasah nalar kritis." },
        { nama: "Hirṣun (حِرْصٌ)", arti: "Rasa haus yang tak kunjung padam terhadap ilmu pengetahuan; tidak cepat merasa puas." },
        { nama: "Ijtihādun (وَاجْتِهَادٌ)", arti: "Kesungguhan, disiplin, kerja keras, dan pantang menyerah saat menghadapi kesulitan." },
        { nama: "Dirhamun (وَبُلْغَةٌ / وَدِرْهَمٌ)", arti: "Bekal finansial secukupnya untuk membeli buku, media belajar, dan sarana riset." },
        { nama: "Ṣuḥbatu Ustāżin (وَصُحْبَةُ أُسْتَاذٍ)", arti: "Berguru kepada guru yang memiliki sanad keilmuan, membimbing adab, dan mengoreksi kesalahan." },
        { nama: "Ṭūlu Zamānin (وَطُولُ زَمَانِ)", arti: "Waktu yang panjang, istiqomah belajar seumur hidup (long-life learning), tidak instan." }
      ]
    }
  },

  dalilNaqli: {
    alQuran: [
      {
        id: 'dalil-quran-1',
        nomorSurahAyat: 'Q.S. Al-Mujādilah [58]: 11',
        namaSurah: 'Al-Mujādilah (Wanita yang Mengajukan Gugatan)',
        nomorAyat: '11',
        teksArab:
          'يٰٓاَيُّهَا الَّذِيْنَ اٰمَنُوْٓا اِذَا قِيْلَ لَكُمْ تَفَسَّحُوْا فِى الْمَجٰلِسِ فَافْسَحُوْا يَفْسَحِ اللّٰهُ لَكُمْۚ وَاِذَا قِيْلَ انْشُزُوْا فَانْشُزُوْا يَرْفَعِ اللّٰهُ الَّذِيْنَ اٰمَنُوْا مِنْكُمْۙ وَالَّذِيْنَ اُوْتُوا الْعِلْمَ دَرَجٰتٍۗ وَاللّٰهُ بِمَا تَعْمَلُوْنَ خَبِيْرٌ',
        transliterasi:
          "Yā ayyuhalladzīna āmanū idzā qīla lakum tafassaḥū fil-majālisi fafsaḥū yafsaḥillāhu lakum, wa idzā qīlansyuzū fansyuzū yarfa'illāhul-ladzīna āmanū minkum walladzīna ūtul-'ilma darajāt, wallāhu bimā ta'malūna khabīr.",
        terjemahanKemenag:
          'Wahai orang-orang yang beriman! Apabila dikatakan kepadamu, "Berilah kelapangan di dalam majelis-majelis," maka lapangkanlah, niscaya Allah akan memberi kelapangan untukmu. Dan apabila dikatakan, "Berdirilah kamu," maka berdirilah, niscaya Allah akan mengangkat (derajat) orang-orang yang beriman di antaramu dan orang-orang yang diberi ilmu beberapa derajat. Dan Allah Mahateliti apa yang kamu kerjakan.',
        kandunganPokok:
          "Ayat ini merupakan piagam kemuliaan penuntut ilmu. Allah Swt. menegaskan janji pasti untuk meninggikan orang-orang yang memadukan iman dan ilmu pengetahuan beberapa tingkatan derajat di dunia (kemuliaan, wibawa, dan manfaat) serta di akhirat (kedudukan tinggi di surga). Ayat ini juga mengajarkan adab majelis ilmu, yaitu bersikap lapang dada, ramah, dan saling memberi kenyamanan.",
        kaidahTajwid: [
          {
            potonganLafaz: 'يٰٓاَيُّهَا الَّذِيْنَ',
            hukumTajwid: 'Mad Jaiz Munfashil',
            caraMembaca: 'Dipanjangkan 4 atau 5 harakat',
            alasan: 'Huruf mad thabi\'i bertemu hamzah pada kata terpisah.'
          },
          {
            potonganLafaz: 'فِى الْمَجٰلِسِ',
            hukumTajwid: 'Alif Lam Qamariyah (Idzhar Qamariyah)',
            caraMembaca: 'Huruf lam dibaca jelas dan terang',
            alasan: 'Alif lam bertemu dengan salah satu huruf qamariyah yaitu mim (م).'
          },
          {
            potonganLafaz: 'يَرْفَعِ اللّٰهُ',
            hukumTajwid: 'Lam Tarqiq (Tipis)',
            caraMembaca: 'Lafaz Jalalah dibaca tipis (la)',
            alasan: 'Lafaz Jalalah didahului oleh huruf berharakat kasrah (عِ).'
          },
          {
            potonganLafaz: 'دَرَجٰتٍۗ وَاللّٰهُ',
            hukumTajwid: 'Idgham Bighunnah',
            caraMembaca: 'Tanwin melebur ke huruf wawu disertai dengungan 2 harakat',
            alasan: 'Kasrahtain bertemu dengan huruf wawu (و).'
          },
          {
            potonganLafaz: 'خَبِيْرٌ',
            hukumTajwid: 'Mad \'Aridh Lissukun & Ra Tarqiq',
            caraMembaca: 'Dipanjangkan 2, 4, atau 6 harakat dengan bunyi ra tipis saat waqaf',
            alasan: 'Huruf mad bertemu huruf hidup yang dibaca sukun karena waqaf.'
          }
        ],
        asbabunNuzulTafsir:
          "Ibnu Abbas r.a. dan Qatadah menceritakan bahwa pada suatu hari Jumat di Shuffah Masjid Nabawi, Rasulullah Saw. sedang berada dalam majelis yang padat. Kemudian datang beberapa sahabat senior pejuang Perang Badar (Ahlul Badr) seperti Tsabit bin Qais. Karena tempat duduk telah penuh, mereka berdiri dan memberi salam. Rasulullah Saw. kemudian meminta orang-orang yang duduk di dekat beliau untuk melapangkan tempat duduk bagi para sahabat pejuang tersebut. Sebagian orang merasa enggan dan keberatan. Maka Allah Swt. menurunkan ayat ini untuk mengajarkan adab berlapang dada dalam majelis serta menegaskan bahwa kemuliaan seseorang di hadapan Allah tidak diukur dari posisi duduk di barisan depan, melainkan dari keimanan dan keluhuran ilmu yang bermanfaat."
      },
      {
        id: 'dalil-quran-2',
        nomorSurahAyat: 'Q.S. Az-Zumar [39]: 9',
        namaSurah: 'Az-Zumar (Rombongan-Rombongan)',
        nomorAyat: '9',
        teksArab:
          'قُلْ هَلْ يَسْتَوِى الَّذِيْنَ يَعْلَمُوْنَ وَالَّذِيْنَ لَا يَعْلَمُوْنَ ۗ اِنَّمَا يَتَذَكَّرُ اُولُوا الْاَلْبَابِ',
        transliterasi:
          "Qul hal yastawilladzīna ya'lamūna walladzīna lā ya'lamūn, innamā yatażakkaru ulul-albāb.",
        terjemahanKemenag:
          'Katakanlah, "Apakah sama orang-orang yang mengetahui dengan orang-orang yang tidak mengetahui?" Sesungguhnya orang yang berakallah yang dapat menerima pelajaran.',
        kandunganPokok:
          "Pertanyaan retoris (istifham ingkari) dari Allah Swt. yang menegaskan bahwa tidak akan pernah sama kedudukan, cara berpikir, tutur kata, dan kualitas amal antara orang yang memiliki ilmu dengan orang yang bodoh/jahil. Orang berilmu memiliki mata hati yang tajam untuk menelaah ayat-ayat Allah di alam semesta (Ulul Albab)."
      },
      {
        id: 'dalil-quran-3',
        nomorSurahAyat: 'Q.S. Thāhā [20]: 114',
        namaSurah: 'Thāhā',
        nomorAyat: '114',
        teksArab:
          'فَتَعٰلَى اللّٰهُ الْمَلِكُ الْحَقُّ ۚ وَلَا تَعْجَلْ بِالْقُرْاٰنِ مِنْ قَبْلِ اَنْ يُّقْضٰٓى اِلَيْكَ وَحْيُهٗ ۖوَقُلْ رَّبِّ زِدْنِيْ عِلْمًا',
        transliterasi:
          "Fa ta'ālallāhul-malikul-ḥaqq, wa lā ta'jal bil-qur'āni min qabli ay yuqḍā ilaika waḥyuh, wa qur rabbi zidnī 'ilmā.",
        terjemahanKemenag:
          'Maka Mahatinggi Allah, Raja yang sebenar-benarnya. Dan janganlah engkau (Muhammad) tergesa-gesa membaca Al-Qur\'an sebelum diwahyukan kepadamu, dan katakanlah, "Ya Tuhanku, tambahkanlah ilmu kepadaku."',
        kandunganPokok:
          "Allah Swt. memerintahkan Nabi Muhammad Saw. — manusia paling mulia dan paling berilmu — untuk senantiasa berdoa memohon pertambahan ilmu: 'Rabbi zidnī 'ilmā'. Ini menjadi teladan abadi bagi setiap penuntut ilmu agar tidak pernah merasa cukup atau sombong dengan ilmu yang telah dipelajarinya."
      },
      {
        id: 'dalil-quran-4',
        nomorSurahAyat: 'Q.S. Fāṭir [35]: 28',
        namaSurah: 'Fāṭir (Pencipta)',
        nomorAyat: '28',
        teksArab:
          'وَمِنَ النَّاسِ وَالدَّوَاۤبِّ وَالْاَنْعَامِ مُخْتَلِفٌ اَلْوَانُهٗ كَذٰلِكَ ۗ اِنَّمَا يَخْشَى اللّٰهَ مِنْ عِبَادِهِ الْعُلَمٰۤؤُا ۗ اِنَّ اللّٰهَ عَزِيْزٌ غَفُوْرٌ',
        transliterasi:
          "Wa minan-nāsi wad-dawābbi wal-an'āmi mukhtalifun alwānuhū każālik, innamā yakhsyallāha min 'ibādihil-'ulamā', innallāha 'azīzun ghafūr.",
        terjemahanKemenag:
          'Dan demikian (pula) di antara manusia, makhluk bergerak yang bernyawa dan hewan-hewan ternak ada yang bermacam-macam warnanya (dan jenisnya). Di antara hamba-hamba Allah yang takut kepada-Nya, hanyalah para ulama (orang-orang yang berilmu). Sesungguhnya Allah Mahaperkasa lagi Maha Pengampun.',
        kandunganPokok:
          "Ilmu sejati selalu mengantarkan pemiliknya pada rasa takut, kagum, dan tunduk kepada Allah Swt. (al-khasyyah). Semakin dalam seseorang memahami sains ciptaan Allah dan hukum-hukum syariat-Nya, semakin ia menyadari betapa kecil dirinya di hadapan kemahakuasaan Allah."
      }
    ],

    hadits: [
      {
        id: 'hadits-1',
        perawi: 'Imam Ibnu Majah (No. 224)',
        kitabRujukan: 'Sunan Ibnu Majah, Kitab Al-Muqaddimah',
        derajatHadits: 'Hadits Hasan Shahih (Dishahihkan oleh Syaikh Al-Albani)',
        teksArab: 'طَلَبُ الْعِلْمِ فَرِيْضَةٌ عَلَى كُلِّ مُسْلِمٍ',
        transliterasi: "Ṭalabul-'ilmi farīḍatun 'alā kulli muslim.",
        terjemahan: 'Menuntut ilmu itu wajib bagi setiap muslim (laki-laki maupun perempuan).',
        pelajaranPenting:
          'Lafaz "kulli muslim" mencakup seluruh umat Islam tanpa memandang jenis kelamin, status sosial, maupun usia. Menuntut ilmu merupakan kewajiban mutlak sejak usia buaian hingga liang lahad (minal mahdi ilal lahdi).'
      },
      {
        id: 'hadits-2',
        perawi: 'Imam Muslim (No. 2699)',
        kitabRujukan: 'Shahih Muslim, Kitab Adz-Dzikr wad-Du\'a\' wat-Taubah',
        derajatHadits: 'Hadits Shahih Muttafaq \'Alaih',
        teksArab: 'مَنْ سَلَكَ طَرِيْقًا يَلْتَمِسُ فِيْهِ عِلْمًا سَهَّلَ اللّٰهُ لَهُ بِهٖ طَرِيْقًا اِلَى الْجَنَّةِ',
        transliterasi: "Man salaka ṭarīqan yaltamisu fīhi 'ilman sahhalallāhu lahū bihī ṭarīqan ilal-jannah.",
        terjemahan:
          'Barangsiapa menempuh suatu jalan untuk mencari ilmu, maka Allah akan memudahkan baginya jalan menuju surga.',
        pelajaranPenting:
          'Setiap langkah kaki, tetesan keringat, dan pengorbanan waktu seorang pelajar dalam menuntut ilmu dihitung sebagai amal saleh yang melapangkan dan mempermudah perjalanannya meniti shirath menuju surga Allah Swt.'
      },
      {
        id: 'hadits-3',
        perawi: 'Imam Abu Dawud (No. 3641) & At-Tirmidzi (No. 2682)',
        kitabRujukan: 'Sunan Abi Dawud & Jami\' At-Tirmidzi',
        derajatHadits: 'Hadits Shahih dari Sahabat Abu Darda\' r.a.',
        teksArab:
          'وَإِنَّ الْعَالِمَ لَيَسْتَغْفِرُ لَهُ مَنْ فِي السَّمَاوَاتِ وَمَنْ فِي الْأَرْضِ حَتَّى الْحِيتَانُ فِي الْمَاءِ، وَإِنَّ فَضْلَ الْعَالِمِ عَلَى الْعَابِدِ كَفَضْلِ الْقَمَرِ لَيْلَةَ الْبَدْرِ عَلَى سَائِرِ الْكَوَاكِبِ، وَإِنَّ الْعُلَمَاءَ وَرَثَةُ الْأَنْبِيَاءِ',
        transliterasi:
          "Wa innal-'ālima layastaghfiru lahū man fis-samāwāti wa man fil-arḍi ḥattal-ḥītānu fil-mā', wa inna faḍlal-'ālimi 'alal-'ābidi kafaḍlil-qamari lailatal-badri 'alā sā'iril-kawākib, wa innal-'ulamā'a waratsatul-anbiyā'.",
        terjemahan:
          'Dan sungguh, orang yang berilmu dimohonkan ampunan oleh seluruh penduduk langit dan penduduk bumi, hingga ikan-ikan di dalam air. Dan sesungguhnya keutamaan orang berilmu atas orang yang sekadar beribadah (tanpa ilmu) laksana keutamaan rembulan pada malam purnama atas seluruh bintang-bintang. Dan sesungguhnya para ulama adalah pewaris para nabi.',
        pelajaranPenting:
          'Orang berilmu memiliki pancaran cahaya kemanfaatan yang menerangi sekitarnya laksana rembulan purnama, sedangkan ahli ibadah tanpa ilmu hanya menerangi dirinya sendiri bagaikan bintang kecil. Para nabi tidak mewariskan emas atau perak, melainkan mewariskan ilmu.'
      },
      {
        id: 'hadits-4',
        perawi: 'Imam Muslim (No. 1631)',
        kitabRujukan: 'Shahih Muslim, Kitab Al-Wasiyyah',
        derajatHadits: 'Hadits Shahih dari Abu Hurairah r.a.',
        teksArab: 'إِذَا مَاتَ الْإِنْسَانُ انْقَطَعَ عَمَلُهُ إِلَّا مِنْ ثَلَاثٍ: صَدَقَةٍ جَارِيَةٍ، أَوْ عِلْمٍ يُنْتَفَعُ بِهِ، أَوْ وَلَدٍ صَالِحٍ يَدْعُو لَهُ',
        transliterasi:
          "Iżā mātal-insānu-nqaṭa'a 'amaluhū illā min tsalāts: ṣadaqatin jāriyah, aw 'ilmin yuntafa'u bih, aw waladin ṣāliḥin yad'ū lah.",
        terjemahan:
          'Apabila seorang manusia meninggal dunia, maka terputuslah semua amalnya kecuali tiga perkara: (1) Sedekah jariyah, (2) Ilmu yang diambil manfaatnya, atau (3) Anak saleh yang senantiasa mendoakannya.',
        pelajaranPenting:
          'Ilmu yang diajarkan, dituliskan dalam buku, atau dibagikan kepada orang lain menjadi investasi abadi yang terus mengalirkan pahala ke alam barzakh tanpa henti.'
      }
    ]
  },

  ciriCiriCintaIlmu: [
    {
      id: 'ciri-1',
      nomor: 1,
      judulCiri: 'Memiliki Rasa Ingin Tahu Ilmiah yang Tinggi (Curiosity & Syaghaf)',
      istilahArab: 'شَغَفُ الْمَعْرِفَةِ (Syaghaf al-Ma\'rifah)',
      deskripsi:
        'Pecinta ilmu tidak pernah mudah puas dengan permukaan suatu hal. Ia selalu tergerak untuk menanyakan mengapa, bagaimana, dan apa hikmah di balik setiap fenomena alam maupun ketetapan syariat, lalu meneliti kebenarannya dari sumber tepercaya.',
      indikatorPerilaku: [
        'Kritis dan aktif mengajukan pertanyaan berbobot di ruang kelas',
        'Menyukai eksperimen sains, penalaran logika, dan tadabbur ayat kauniyah',
        'Tidak mudah percaya pada berita gosip atau takhayul tanpa verifikasi (tabayyun)'
      ],
      contohAksiSiswa:
        'Ketika guru menerangkan fenomena gerhana matahari, siswa pecinta ilmu tidak hanya menghafal definisinya, melainkan mencari tahu hukum shalat gerhana (shalat kusuf), kaitan sains optik, dan membaca buku astronomi pendukung.'
    },
    {
      id: 'ciri-2',
      nomor: 2,
      judulCiri: 'Tekun, Disiplin, dan Pantang Menyerah dalam Belajar (Ijtihad & Shabr)',
      istilahArab: 'اَلصَّبْرُ وَالْمُثَابَرَةُ (Ash-Shabru wal-Mutsabarah)',
      deskripsi:
        'Menyadari bahwa jalan menuntut ilmu penuh tantangan, kelelahan, dan kerumitan konsep. Pelajar pecinta ilmu bersabar menghadapi ujian, tidak gampang menyerah saat soal sulit, serta konsisten mengulang pelajaran (muraja\'ah).',
      indikatorPerilaku: [
        'Menjadwalkan jam belajar mandiri di rumah tanpa perlu disuruh orang tua',
        'Mencoba memecahkan rumus matematika atau kaidah tajwid yang rumit hingga tuntas',
        'Mengurangi waktu main game online berlebihan demi menuntaskan tugas sekolah'
      ],
      contohAksiSiswa:
        'Ahmad kesulitan memahami hukum bacaan Nun Sukun dan Tanwin. Bukannya menyerah, ia meminjam buku tajwid perpustakaan, mendengarkan audio murattal, dan meminta bimbingan Guru PAI saat istirahat sekolah.'
    },
    {
      id: 'ciri-3',
      nomor: 3,
      judulCiri: 'Gemar Membaca dan Meneliti Literatur Bermanfaat (Karakter Iqra\')',
      istilahArab: 'حُبُّ الْقِرَاءَةِ وَالْبَحْثِ (Hubbul Qira\'ah wal Bahts)',
      deskripsi:
        'Menjadikan buku dan bahan bacaan ilmiah sebagai sahabat setia. Mengamalkan wahyu pertama Al-Qur\'an "Iqra\' bismi rabbikalladzī khalaq" (Bacalah dengan menyebut nama Tuhanmu yang menciptakan).',
      indikatorPerilaku: [
        'Sering mengunjungi perpustakaan sekolah atau membaca e-book bermutu',
        'Mengisi waktu luang dengan membaca artikel sains, biografi ulama/ilmuwan, dan tafsir Al-Qur\'an',
        'Memiliki kebiasaan mencatat poin penting (khulasoh/mind-map) saat membaca'
      ],
      contohAksiSiswa:
        'Fatimah menyisihkan sebagian uang sakunya setiap bulan untuk membeli buku ensiklopedia sejarah peradaban Islam dan rutin membaca minimal 20 halaman setiap malam.'
    },
    {
      id: 'ciri-4',
      nomor: 4,
      judulCiri: 'Menghormati dan Memuliakan Guru serta Sumber Ilmu (Taqdirul Mu\'allim)',
      istilahArab: 'تَوْقِيْرُ الْأُسْتَاذِ وَأَدَبُ التَّعَلُّمِ (Tawqirul Ustadz)',
      deskripsi:
        'Memahami bahwa keberkahan ilmu mustahil diraih tanpa adab dan ridha guru. Pelajar pecinta ilmu senantiasa bertutur kata sopan, mendengarkan saksama saat guru mengajar, serta mendoakan kebaikan gurunya.',
      indikatorPerilaku: [
        'Menyapa dan mengucapkan salam dengan ramah saat bertemu guru di mana pun berada',
        'Tidak memotong pembicaraan guru atau sibuk bermain gawai ketika pelajaran berlangsung',
        'Menjaga kehormatan buku dan alat tulis; tidak meletakkan Al-Qur\'an atau kitab sembarangan'
      ],
      contohAksiSiswa:
        'Ketika di kelas, Salman duduk tegak, memperhatikan penjelasan guru dengan fokus, mencatat materi di buku tulis rapi, serta berterima kasih kepada guru setelah jam pelajaran usai.'
    },
    {
      id: 'ciri-5',
      nomor: 5,
      judulCiri: 'Rendah Hati dan Jauh dari Kesombongan Intelektual (Tawadhu\')',
      istilahArab: 'اَلتَّوَاضُعُ لِلْعِلْمِ (At-Tawadhu\' lil-\'Ilmi)',
      deskripsi:
        'Bagaikan ilmu padi: makin berisi, makin merunduk. Semakin bertambah wawasannya, semakin ia menyadari betapa luas samudra ilmu Allah dan betapa sedikit apa yang telah ia kuasai. Ia tidak pernah merendahkan orang lain.',
      indikatorPerilaku: [
        'Tidak gemar pamer nilai atau membanggakan kecerdasan di media sosial',
        'Siap menerima kebenaran dari siapa pun, bahkan dari orang yang lebih muda darinya',
        'Mengakui "saya belum tahu" jika memang belum mengetahui suatu permasalahan'
      ],
      contohAksiSiswa:
        'Rina juara olimpiade sains antarsekolah. Namun ia tetap ramah, tidak pernah mengejek teman yang mendapat nilai remidi, dan selalu tersenyum rendah hati saat diselamati guru.'
    },
    {
      id: 'ciri-6',
      nomor: 6,
      judulCiri: 'Senang Berbagi Ilmu dan Berdiskusi Sehat (Isyrakul Ma\'rifah)',
      istilahArab: 'بَذْلُ الْعِلْمِ وَالْمُنَاظَرَةُ الْحَسَنَةُ (Badzlul \'Ilmi)',
      deskripsi:
        'Tidak pelit ilmu. Ia menyadari bahwa ilmu yang dibagikan tidak akan berkurang, melainkan justru akan bertambah berkah dan semakin melekat kuat dalam ingatan.',
      indikatorPerilaku: [
        'Bersedia menjadi tutor sebaya (peer tutor) bagi kawan-kawan kelas yang tertinggal',
        'Berdiskusi dengan adab santun, menjauhi debat kusir yang bertujuan mencari menang sendiri',
        'Menyebarkan informasi edukatif dan konten positif yang mencerdaskan di media sosial'
      ],
      contohAksiSiswa:
        'Haikal membentuk kelompok belajar sore bersama 4 teman sekelasnya untuk membahas soal-soal latihan PAI dan Matematika dengan sabar dan menyenangkan.'
    }
  ],

  manfaatBerilmu: [
    {
      id: 'manfaat-1',
      kategori: 'Duniawi (Pribadi & Sosial)',
      judulManfaat: 'Derajat Kemuliaan dan Kredibilitas Diri Ditinggikan',
      dalilDasar: 'Q.S. Al-Mujādilah [58]: 11',
      uraianMendalam:
        'Orang yang berilmu memperoleh rasa hormat alami di tengah masyarakat bukan karena harta atau keturunannya, melainkan karena wawasan, pertimbangan bijaksana, dan kemampuannya memberikan arahan yang tepat. Masyarakat menaruh kepercayaan tinggi pada orang berilmu dalam mengambil keputusan penting.',
      dampakPositif:
        'Menjadi pribadi yang disegani, memiliki posisi tawar sosial yang bermartabat, dan menjadi teladan bagi keluarga serta lingkungan.'
    },
    {
      id: 'manfaat-2',
      kategori: 'Duniawi (Pribadi & Sosial)',
      judulManfaat: 'Menjadi Pemecah Masalah (Problem Solver) dan Penangkal Hoaks',
      dalilDasar: 'Q.S. Al-Hujurāt [49]: 6 & Q.S. Az-Zumar [39]: 9',
      uraianMendalam:
        'Di era banjir informasi dan kecerdasan buatan, orang berilmu dibekali kemampuan berpikir kritis (critical thinking) dan metode tabayyun. Ia tidak mudah termakan isu bohong (hoaks), penipuan digital, atau provokasi adu domba.',
      dampakPositif:
        'Mampu menyelamatkan diri dan masyarakat dari kesesatan opini, menjaga kerukunan, serta merancang solusi kreatif atas persoalan lingkungan dan sosial.'
    },
    {
      id: 'manfaat-3',
      kategori: 'Duniawi (Pribadi & Sosial)',
      judulManfaat: 'Membuka Pintu Rezeki yang Berkah dan Kemajuan Peradaban',
      dalilDasar: 'Q.S. Al-Baqarah [2]: 269',
      uraianMendalam:
        'Allah menganugerahkan hikmah dan ilmu kepada siapa yang dikehendaki-Nya, dan barangsiapa dianugerahi hikmah, sungguh ia telah diberi kebaikan yang sangat banyak. Penguasaan sains, kedokteran, pertanian, dan teknologi membuka lapangan kerja, meningkatkan ekonomi umat, dan menaikkan martabat bangsa di mata dunia.',
      dampakPositif:
        'Menghindarkan umat dari kemiskinan dan ketergantungan pada bangsa lain; melahirkan inovasi teknologi yang memudahkan hidup manusia.'
    },
    {
      id: 'manfaat-4',
      kategori: 'Ukhrawi (Spiritual)',
      judulManfaat: 'Dimudahkan Jalan Menuju Kenikmatan Surga',
      dalilDasar: 'H.R. Muslim No. 2699',
      uraianMendalam:
        'Rasulullah Saw. menegaskan bahwa siapa yang menempuh jalan menuntut ilmu, Allah akan memudahkan baginya jalan menuju surga. Hal ini karena ilmu membimbing manusia memahami mana perbuatan yang diridhai Allah dan mana dosa yang membinasakan.',
      dampakPositif:
        'Setiap lelah dan letih dalam belajar dinilai sebagai amal ibadah bernilai pahala jihad yang melapangkan hisab di yaumul mahsyar.'
    },
    {
      id: 'manfaat-5',
      kategori: 'Ukhrawi (Spiritual)',
      judulManfaat: 'Ibadah Menjadi Sah, Bernilai Tinggi, dan Khusyuk',
      dalilDasar: 'Atsar Umar bin Abdul Aziz: "Siapa beribadah tanpa ilmu, kerusakannya lebih banyak dari kebaikannya"',
      uraianMendalam:
        'Ibadah tanpa ilmu adalah kesia-siaan (fa\'amaluhu mardūdun lā yuqbalu). Orang berilmu mengetahui rukun, syarat sah, pembatal, dan makna batiniah setiap gerakan shalat atau puasa, sehingga ibadahnya membuahkan ketenangan jiwa dan mencegah perbuatan keji serta mungkar.',
      dampakPositif:
        'Terbebas dari rasa was-was dan keraguan dalam beribadah; amal saleh diterima sempurna di sisi Allah Swt.'
    },
    {
      id: 'manfaat-6',
      kategori: 'Ukhrawi (Spiritual)',
      judulManfaat: 'Memperoleh Investasi Pahala Jariyah yang Tak Pernah Putus',
      dalilDasar: 'H.R. Muslim No. 1631',
      uraianMendalam:
        'Harta benda yang dikumpulkan manusia akan ditinggalkan saat mati, tetapi ilmu bermanfaat yang diajarkan kepada murid, ditulis dalam buku/karya digital, atau diwariskan kepada anak cucu akan terus mengirimkan aliran pahala yang deras ke liang kuburnya hingga hari kiamat.',
      dampakPositif:
        'Memiliki bekal tabungan amal abadi di alam barzakh saat seluruh hubungan keduniaan telah terputus.'
    }
  ],

  hikmahCintaIlmu: [
    {
      id: 'hikmah-1',
      nomor: 1,
      judulHikmah: 'Menumbuhkan Rasa Takut dan Tunduk yang Hakiki kepada Allah Swt. (Khosyyah)',
      penjelasan:
        'Sebagaimana firman Allah dalam Q.S. Fathir [35]: 28, hanya para ulama (orang berilmu) yang benar-benar takut kepada-Nya. Ilmu sains tentang keteraturan galaksi, keajaiban sel tubuh, dan perputaran siang-malam mempertebal keyakinan akan keagungan Sang Maha Pencipta, menjauhkan manusia dari kesombongan ateisme.',
      dampakKepribadian: 'Jiwa menjadi tunduk, berhati-hati dalam berbuat maksiat, dan gemar beristighfar.',
      relevansiZamanModern: 'Menjadi benteng moral agar teknologi modern digunakan untuk kemanusiaan, bukan perusakan.'
    },
    {
      id: 'hikmah-2',
      nomor: 2,
      judulHikmah: 'Menjaga Fitrah Manusia sebagai Khalifah Pemakmur Bumi (Khalifatullah)',
      penjelasan:
        'Ketika Allah hendak menciptakan Nabi Adam a.s., para malaikat sempat bertanya tentang potensi pertumpahan darah. Allah kemudian membuktikan keunggulan manusia dengan mengajarkan nama-nama benda (ilmu pengetahuan/wa \'allama ādamal-asmā\'a kullahā). Cinta ilmu adalah pemenuhan mandat kekhalifahan untuk memelihara kelestarian bumi.',
      dampakKepribadian: 'Bertanggung jawab menjaga kelestarian lingkungan, air, tanah, dan tidak berlaku boros/destruktif.',
      relevansiZamanModern: 'Mendorong generasi muda menciptakan energi bersih, pelestarian hutan, dan pengelolaan sampah berbasis sains.'
    },
    {
      id: 'hikmah-3',
      nomor: 3,
      judulHikmah: 'Membentengi Diri dari Sikap Taklid Buta dan Fanatisme Sempit',
      penjelasan:
        'Taklid buta adalah mengikuti pendapat seseorang tanpa mengetahui dalil atau kebenarannya. Pelajar pencinta ilmu selalu menuntut argumentasi dan dasar hukum yang sahih, sehingga ia tidak mudah disesatkan oleh aliran sesat, radikalisme, atau fanatisme golongan yang merusak persatuan bangsa.',
      dampakKepribadian: 'Memiliki wawasan luas, toleran terhadap perbedaan fikih furu\'iyah, dan tidak gemar mengkafirkan sesama.',
      relevansiZamanModern: 'Menjaga keutuhan NKRI dan ukhuwah islamiyah di tengah maraknya provokasi politik identitas di media sosial.'
    },
    {
      id: 'hikmah-4',
      nomor: 4,
      judulHikmah: 'Membentuk Karakter Disiplin, Pantang Menyerah, dan Berintegritas Tinggi',
      penjelasan:
        'Proses menuntut ilmu melatih ketahanan mental seorang pelajar: bangun pagi, membaca literatur berbobot, menahan hawa nafsu dari hiburan instan, serta menjunjung kejujuran akademik (anti-mencontek dan anti-plagiasi). Hal ini membentuk mentalitas juara yang tangguh.',
      dampakKepribadian: 'Jujur dalam ujian, tidak menipu dalam berkata, dan menghargai kerja keras orang lain.',
      relevansiZamanModern: 'Mencetak calon pemimpin bangsa yang anti-korupsi, berintegritas, dan profesional di bidangnya.'
    },
    {
      id: 'hikmah-5',
      nomor: 5,
      judulHikmah: 'Melanjutkan Mata Rantai Peradaban Emas Islam (Ihyā\'ur Rūḥil \'Ilmiyyah)',
      penjelasan:
        'Dahulu peradaban Islam memimpin dunia selama berabad-abad melalui karya raksasa Ibnu Sina (kedokteran), Al-Khawarizmi (aljabar & angka nol), Al-Biruni (astronomi), dan Jabir bin Hayyan (kimia). Semangat cinta ilmu membangkitkan kembali harga diri umat Islam untuk tidak sekadar menjadi konsumen teknologi barat, melainkan menjadi penemu dan produsen inovasi.',
      dampakKepribadian: 'Bangga menjadi muslim yang cerdas, optimis, dan terpacu meraih prestasi tingkat internasional.',
      relevansiZamanModern: 'Menjawab tantangan revolusi industri 5.0 dan memajukan pendidikan nasional Indonesia.'
    },
    {
      id: 'hikmah-6',
      nomor: 6,
      judulHikmah: 'Meraih Kebahagiaan Sejati di Dua Alam (Fiddunya Hasanah wa fil Akhirati Hasanah)',
      penjelasan:
        'Imam Asy-Syafi\'i rahimahullah berkata: "Barangsiapa menginginkan dunia, maka wajib baginya dengan ilmu; dan barangsiapa menginginkan akhirat, maka wajib baginya dengan ilmu; dan barangsiapa menginginkan keduanya sekaligus, maka wajib baginya dengan ilmu."',
      dampakKepribadian: 'Seimbang antara mengejar prestasi duniawi dan mempersiapkan amal keselamatan akhirat.',
      relevansiZamanModern: 'Menghindarkan pelajar dari stres kecemasan masa depan (quarter-life crisis) karena memiliki pegangan hidup kokoh.'
    }
  ],

  studiKasusRemaja: [
    {
      id: 'kasus-1',
      nomor: 1,
      judulKasus: 'Dilema Tugas Makalah: Ketergantungan AI Instan (Copy-Paste) vs Literasi Riset',
      deskripsiMasalah:
        'Rian mendapat tugas membuat makalah PAI tentang sejarah Islam. Karena malas membaca buku perpustakaan, ia menyalin mentah-mentah teks dari internet dan generator AI tanpa membaca, memverifikasi, atau memahaminya sama sekali. Ketika ditanya guru di depan kelas, Rian tidak bisa menjelaskan satu patah kata pun isi makalahnya.',
      pertanyaanAnalisis:
        'Apakah tindakan Rian mencerminkan ciri pencinta ilmu? Bagaimana cara bijak memanfaatkan teknologi AI bagi seorang penuntut ilmu muslim?',
      solusiDanKeteladanan:
        'Tindakan Rian bertentangan dengan adab menuntut ilmu (integritas akademik). Teknologi AI boleh digunakan sebagai mitra bantu pencarian referensi, perangkum ide awal, atau pembanding data, namun siswa tetap WAJIB membaca sumber aslinya, berpikir kritis, memparafrase dengan gaya bahasa sendiri, dan mencantumkan sumber rujukan secara jujur.',
      nilaiKarakter: 'Integritas Akademik, Tanggung Jawab, dan Kejujuran Intelektual'
    },
    {
      id: 'kasus-2',
      nomor: 2,
      judulKasus: 'Fenomena "Sombong Nilai" dan Meremehkan Teman yang Tertinggal',
      deskripsiMasalah:
        'Dinda selalu memperoleh nilai 95-100 pada pelajaran IPA dan PAI. Di grup kelas WhatsApp, ia sering memamerkan lembar jawabannya dengan kata-kata meremehkan teman-teman yang nilainya di bawah KKM: "Makanya belajar dong, masa soal semudah ini nggak bisa!". Akibatnya, banyak kawan kelas yang merasa minder dan sakit hati.',
      pertanyaanAnalisis:
        'Berdasarkan konsep tawadhu\' dan syair Imam Asy-Syafi\'i, apa kesalahan sikap Dinda? Bagaimana seharusnya seorang siswa berprestasi bersikap?',
      solusiDanKeteladanan:
        'Kecerdasan Dinda ternodai oleh kesombongan (takabur). Rasulullah Saw. bersabda: "Tidak akan masuk surga orang yang di dalam hatinya terdapat seberat zarrah kesombongan." Seharusnya Dinda bersyukur atas anugerah kecerdasan dari Allah dengan merendahkan hati, tidak menyombongkan diri, dan justru berinisiatif mengajak teman-temannya belajar bersama sebagai tutor sebaya.',
      nilaiKarakter: 'Tawadhu\' (Rendah Hati), Empati Sosial, dan Isyrakul Ma\'rifah (Gemar Berbagi)'
    },
    {
      id: 'kasus-3',
      nomor: 3,
      judulKasus: 'Etika Menghormati Guru di Era Media Sosial',
      deskripsiMasalah:
        'Seorang guru memberi teguran wajar kepada siswa yang tidak mengumpulkan pekerjaan rumah (PR) tepat waktu. Merasa tidak terima ditegur, seorang siswa merekam diam-diam wajah gurunya lalu mengunggahnya ke media sosial TikTok dengan narasi sindiran yang menjatuhkan wibawa sang guru hingga ditonton ribuan orang.',
      pertanyaanAnalisis:
        'Bagaimana syariat Islam memandang tindakan menyebarkan aib guru di media sosial? Apa dampaknya bagi keberkahan ilmu yang diperoleh?',
      solusiDanKeteladanan:
        'Menghormati guru (Tawqirul Mu\'allim) adalah syarat mutlak meraih keberkahan ilmu. Menyebarkan rekaman sindiran guru merupakan perbuatan su\'ul adab (akhlak tercela), ghibah, dan pencemaran nama baik. Siswa yang berakhlak mulia akan berlapang dada menerima teguran guru, meminta maaf secara jantan, dan berkomitmen memperbaiki kedisiplinannya.',
      nilaiKarakter: 'Tawqirul Asatidz (Hormat Guru), Pengendalian Emosi, dan Adab Digital'
    }
  ],

  refleksiDiriSiswa: [
    {
      id: 1,
      indikator: 'Saya meluangkan waktu minimal 30–60 menit setiap hari untuk membaca buku pelajaran atau literatur bermanfaat di luar jam sekolah.'
    },
    {
      id: 2,
      indikator: 'Saya senantiasa berdoa memohon pertambahan ilmu (Rabbi zidnī \'ilmā) sebelum dan sesudah mulai belajar.'
    },
    {
      id: 3,
      indikator: 'Saya menjaga adab dan sopan santun kepada bapak/ibu guru, baik di dalam kelas, di lingkungan sekolah, maupun di media komunikasi.'
    },
    {
      id: 4,
      indikator: 'Saya menolak keras tindakan mencontek, menyalin tugas teman, atau menyalin karya orang lain tanpa izin saat ujian dan pengerjaan tugas.'
    },
    {
      id: 5,
      indikator: 'Saya bersikap ramah, tidak sombong, dan tidak meremehkan teman yang belum memahami materi pelajaran.'
    },
    {
      id: 6,
      indikator: 'Saya dengan senang hati membantu teman yang kesulitan belajar (menjadi tutor sebaya) tanpa pamrih.'
    },
    {
      id: 7,
      indikator: 'Saya selalu memeriksa kebenaran (tabayyun) dari setiap berita atau informasi viral yang saya terima sebelum mempercayai atau membagikannya.'
    },
    {
      id: 8,
      indikator: 'Saya bertekad mengamalkan ilmu pengetahuan yang saya miliki untuk kebaikan keluarga, kemajuan sekolah, dan kemaslahatan masyarakat.'
    }
  ],

  soalEvaluasiHots: [
    {
      id: 'soal-1',
      nomor: 1,
      pertanyaan:
        'Perhatikan kutipan terjemahan Q.S. Al-Mujādilah [58]: 11 berikut: "...niscaya Allah akan mengangkat (derajat) orang-orang yang beriman di antaramu dan orang-orang yang diberi ilmu beberapa derajat..." Berdasarkan ayat tersebut, perpaduan antara iman dan ilmu menghasilkan kedudukan mulia di sisi Allah Swt. karena...',
      pilihanJawaban: [
        'A. Iman menjadikan seseorang kaya raya, sedangkan ilmu menjamin kekuasaan politik duniawi.',
        'B. Iman menjadi kompas moral pengarah kebaikan, sedangkan ilmu menjadi sarana efektif memakmurkan kehidupan dan menyempurnakan amal ibadah.',
        'C. Ilmu tanpa iman sudah cukup untuk membawa manusia masuk ke dalam surga Allah Swt.',
        'D. Iman hanya berlaku saat beribadah di masjid, sedangkan ilmu hanya dibutuhkan ketika bekerja di kantor.'
      ],
      kunciJawaban: 1,
      pembahasanLengkap:
        'Kunci B benar. Dalam Islam, iman dan ilmu adalah dwitunggal yang tak terpisahkan. Iman tanpa ilmu rentan terjerumus pada taklid buta dan kesesatan ibadah, sedangkan ilmu tanpa iman berisiko melahirkan kesombongan dan penyalahgunaan akal yang merusak. Paduan keduanya menjadikan seorang hamba memiliki niat ikhlas beribadah sekaligus kompetensi tinggi memakmurkan peradaban, sehingga Allah Swt. meninggikan derajatnya berlipat ganda.'
    },
    {
      id: 'soal-2',
      nomor: 2,
      stimulusKonteks:
        'Di sebuah desa terpencil, tidak ada satu pun warga muslim yang menguasai ilmu kedokteran atau kebidanan. Akibatnya, ketika ada ibu hamil yang hendak melahirkan darurat, warga kebingungan dan harus menempuh jarak 50 km ke kota dengan risiko keselamatan jiwa sang ibu.',
      pertanyaan:
        'Berdasarkan tinjauan hukum syariat Islam mengenai pembagian kewajiban menuntut ilmu, situasi di desa tersebut menunjukkan bahwa...',
      pilihanJawaban: [
        'A. Seluruh warga desa berdosa secara kolektif karena mengabaikan kewajiban fardhu kifayah dalam menyediakan tenaga medis.',
        'B. Warga desa tidak berdosa karena ilmu kedokteran hukumnya sunnah muakkad semata.',
        'C. Hanya kepala desa yang menanggung dosa pribadi karena berstatus fardhu \'ain baginya.',
        'D. Warga desa cukup bertawakal dan berdoa tanpa perlu ada yang mempelajari ilmu kedokteran.'
      ],
      kunciJawaban: 0,
      pembahasanLengkap:
        'Kunci A benar. Ilmu kedokteran, farmasi, dan sains terapan berhukum Fardhu Kifayah. Artinya, kewajiban ini dibebankan kepada seluruh anggota masyarakat muslim. Apabila ada sebagian yang mempelajarinya hingga kebutuhan terpenuhi, gugurlah kewajiban dari yang lain. Namun jika tidak ada satu pun yang mempelajarinya hingga timbul bahaya dan penderitaan bagi masyarakat, maka seluruh warga yang mampu bertanggung jawab menanggung dosa kelalaian fardhu kifayah tersebut.'
    },
    {
      id: 'soal-3',
      nomor: 3,
      pertanyaan:
        'Dalam sabda Rasulullah Saw. riwayat Abu Dawud dan At-Tirmidzi, keutamaan orang berilmu atas orang yang sekadar ahli ibadah (tanpa ilmu mendalam) diibaratkan laksana rembulan purnama atas seluruh bintang-bintang. Maksud perumpamaan metafora nabawi tersebut adalah...',
      pilihanJawaban: [
        'A. Orang berilmu lebih bercahaya wajahnya secara fisik dibandingkan ahli ibadah.',
        'B. Bintang-bintang memiliki ukuran yang jauh lebih kecil daripada bulan di langit.',
        'C. Cahaya ahli ibadah hanya menerangi dirinya sendiri, sedangkan cahaya orang berilmu menerangi jalan kebaikan bagi orang banyak dan masyarakat luas.',
        'D. Ahli ibadah tidak akan mendapatkan pahala apa pun di akhirat jika tidak memiliki gelar sarjana.'
      ],
      kunciJawaban: 2,
      pembahasanLengkap:
        'Kunci C benar. Keutamaan perumpamaan bulan purnama atas bintang-bintang menggambarkan cakupan manfaat (*at-ta\'addī*). Bintang memang berkilau, tetapi cahayanya hanya cukup untuk menerangi titik keberadaannya sendiri. Sebaliknya, rembulan pada malam purnama memancarkan cahaya terang benderang yang menerangi kegelapan malam bagi seluruh kafilah dan musafir di bumi. Orang berilmu membimbing umat, memecahkan fatwa hukum, dan mencegah kesesatan, sehingga manfaatnya meluas ke seluruh alam.'
    },
    {
      id: 'soal-4',
      nomor: 4,
      stimulusKonteks:
        'Farhan mendapati nilai ujian matematika temannya, Zaki, sangat rendah dan terancam tidak naik kelas. Zaki tampak murung dan putus asa. Farhan yang memiliki pemahaman matematika sangat baik memutuskan untuk meluangkan waktu 1 jam setiap hari sepulang sekolah mengajari Zaki materi pecahan dan aljabar sampai paham.',
      pertanyaan:
        'Tindakan terpuji yang dilakukan oleh Farhan merupakan cerminan nyata dari ciri pencinta ilmu yaitu...',
      pilihanJawaban: [
        'A. Ash-Shabru lil-Mutsabarah (menahan diri dari bermain gawai semata).',
        'B. Isyrakul Ma\'rifah wa Badzlul \'Ilmi (gemar berbagi ilmu dan mendayagunakannya untuk menolong sesama).',
        'C. Tawqirul Asatidz (menghormati perintah guru saat diawasi langsung).',
        'D. Hubbul Qira\'ah (rajin membaca kamus istilah matematika).'
      ],
      kunciJawaban: 1,
      pembahasanLengkap:
        'Kunci B benar. Farhan menunjukkan karakter mulia *Isyrakul Ma\'rifah* (berbagi pengetahuan) dan *Badzlul \'Ilmi* (mencurahkan ilmu untuk orang lain). Pecinta ilmu sejati tidak kikir wawasan dan tidak takut ilmunya tersaingi, melainkan justru bahagia ketika ilmunya dapat meringankan beban sesama dan menjadi amal jariyah yang berlipat ganda.'
    },
    {
      id: 'soal-5',
      nomor: 5,
      pertanyaan:
        'Imam Asy-Syafi\'i menyebutkan enam syarat mutlak bagi seorang penuntut ilmu dalam syair masyhurnya: zakā\'un, ḥirṣun, ijtihādun, dirhamun, ṣuḥbatu ustāżin, dan ṭūlu zamānin. Kaitan erat antara "ṣuḥbatu ustāżin" (bimbingan guru) dengan keberkahan ilmu di era serba digital saat ini adalah...',
      pilihanJawaban: [
        'A. Di zaman internet, peran guru sudah tidak diperlukan lagi karena semua jawaban ada di mesin pencari.',
        'B. Guru hanya bertugas memasukkan nilai rapor ke aplikasi sekolah tanpa mengoreksi akhlak siswa.',
        'C. Guru tidak hanya mentransfer informasi teori, melainkan mewariskan sanad adab, menyaring kebenaran nilai, dan mendoakan keberkahan murid yang tidak dapat digantikan oleh teknologi mesin.',
        'D. Siswa hanya perlu menghormati guru yang mengajar mata pelajaran ujian nasional saja.'
      ],
      kunciJawaban: 2,
      pembahasanLengkap:
        'Kunci C benar. *Shuhbatu Ustadzin* (berguru) memiliki kedudukan sentral yang abadi. Mesin pencari dan teknologi AI dapat memberikan jutaan data mentah, namun tidak memiliki jiwa (*ruh*), adab keteladanan, kebijaksanaan moral (*hikmah*), maupun doa tulus seorang guru pendidik. Berguru melatih tawadhu\', meluruskan kesalahpahaman nalar, dan menjaga sanad keilmuan yang bersambung hingga Rasulullah Saw.'
    }
  ]
};
