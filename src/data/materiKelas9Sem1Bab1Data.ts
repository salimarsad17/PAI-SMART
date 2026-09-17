export interface HukumMimSukunItem {
  lafaz: string;
  ayatRujukan: string;
  hukum: 'Ikhfa Syafawi' | 'Idgham Mimi (Mutamatsilain)' | 'Idzhar Syafawi';
  hurufKetemu: string;
  alasanKaidah: string;
  caraMembaca: string;
  tingkatKehatiHatian?: string;
}

export interface MufradatAyatBab1 {
  kataArab: string;
  transliterasi: string;
  arti: string;
  maknaPelajaran: string;
}

export interface HaditsIlmuItem {
  perawi: string;
  nomorHadits: string;
  derajat: string;
  matanArab: string;
  transliterasi: string;
  terjemahan: string;
  syarahSingkat: string;
  relevansiKehidupan: string;
}

export interface SoalHotsBab1Kelas9 {
  id: string;
  nomor: number;
  kasus: string;
  pertanyaan: string;
  pilihan: string[];
  kunciJawaban: number;
  pembahasan: string;
}

export interface MateriKelas9Sem1Bab1 {
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
  ayat1: {
    surah: string;
    ayatNomor: number;
    teksArab: string;
    transliterasi: string;
    terjemahanResmi: string;
    audioUrl: string;
    asbabunNuzul: string;
    kandunganTafsir: {
      poin: string;
      penjelasan: string;
    }[];
    mufradat: MufradatAyatBab1[];
  };
  ayat2: {
    surah: string;
    ayatNomor: number;
    teksArab: string;
    transliterasi: string;
    terjemahanResmi: string;
    audioUrl: string;
    asbabunNuzul: string;
    kandunganTafsir: {
      poin: string;
      penjelasan: string;
    }[];
    mufradat: MufradatAyatBab1[];
  };
  hukumMimSukunLengkap: {
    definisiUmum: string;
    tigaMacamHukum: {
      namaHukum: string;
      namaArab: string;
      huruf: string[];
      kaidah: string;
      caraMembaca: string;
      durasiGhunnah: string;
      catatanKhusus: string;
    }[];
    daftarPenerapanPadaAyat: HukumMimSukunItem[];
  };
  haditsTerkait: HaditsIlmuItem[];
  panduan4Keterampilan: {
    membacaTartil: {
      definisi: string;
      langkahPraktis: string[];
      adabMembaca: string[];
    };
    menghafalCepat: {
      metode: string;
      tahapan: string[];
      tipsMurajaah: string;
    };
    menulisKhatNaskhi: {
      kaidahPokok: string[];
      panduanHuruf: {
        huruf: string;
        posisiGaris: string;
        tipsMenulis: string;
      }[];
      latihanMenulis: string;
    };
    menjelaskanRefleksi: {
      uraianKonsep: string;
      kontekstualisasiZamanNow: string[];
    };
  };
  hikmahKeilmuan: {
    dimensi: string;
    uraian: string;
    aplikasiSiswa: string;
  }[];
  studiKasus: {
    judul: string;
    deskripsiKasus: string;
    pertanyaanDiskusi: string;
    solusiIslami: string;
  }[];
  instrumenMuhasabah: {
    indikator: string;
    penjelasan: string;
  }[];
  kuisHots: SoalHotsBab1Kelas9[];
}

export const MATERI_KELAS_9_SEM_1_BAB_1: MateriKelas9Sem1Bab1 = {
  babNumber: 1,
  judulBab: "Al-Qur'an Menginspirasi: Meraih Kemuliaan Derajat dengan Semangat Keilmuan",
  subJudul: "Membaca Tartil, Menghafal, Menulis Khat Naskhi, dan Menjelaskan Kandungan Q.S. Al-Mujādilah [58]: 11, Q.S. Az-Zumar [39]: 9, Hadis Terkait, serta Penguasaan Hukum Bacaan Mim Sukun",
  elemenCp: "Al-Qur'an dan Hadis",
  fase: "Fase D (SMP/MTs)",
  semester: "Semester 1",
  pengantar: {
    apersepsi: "Islam adalah agama yang menempatkan ilmu pengetahuan pada martabat tertinggi. Wahyu pertama yang turun kepada Nabi Muhammad Saw. di Gua Hira adalah perintah membaca (Iqra'), yang menjadi proklamasi kebangkitan peradaban literasi dan keilmuan. Melalui Q.S. Al-Mujādilah [58]: 11 dan Q.S. Az-Zumar [39]: 9, Allah Swt. menegaskan janji kenaikan derajat yang berlipat ganda bagi orang beriman yang berilmu serta membedakan secara tegas antara orang berilmu (Ulul Albab) dengan orang yang tidak berilmu. Menuntut ilmu bukan sekadar pemenuhan kewajiban akademis sekolah, melainkan ibadah fardhu yang mengantarkan pelakunya menuju keridhaan Allah dan surga-Nya.",
    tujuanPembelajaran: [
      "Membaca Q.S. Al-Mujādilah [58]: 11 dan Q.S. Az-Zumar [39]: 9 dengan tartil sesuai kaidah tajwid, khususnya hukum bacaan mim sukun (Ikhfa Syafawi, Idgham Mimi, dan Idzhar Syafawi)",
      "Menghafal Q.S. Al-Mujādilah [58]: 11 dan Q.S. Az-Zumar [39]: 9 serta hadis tentang menuntut ilmu dengan lancar dan fasih",
      "Menulis penggalan ayat Q.S. Al-Mujādilah [58]: 11 dan Q.S. Az-Zumar [39]: 9 dengan kaidah khat Naskhi yang rapi dan benar sesuai proporsi garis buku",
      "Menganalisis mufradat (kosakata kata per kata) dan menerjemahkan ayat-ayat serta hadis terkait ke dalam bahasa Indonesia dengan tepat",
      "Menjelaskan kandungan tafsir Q.S. Al-Mujādilah [58]: 11 dan Q.S. Az-Zumar [39]: 9 tentang etika bermajelis, keutamaan menuntut ilmu, dan karakteristik Ulul Albab",
      "Mengidentifikasi seluruh hukum bacaan mim sukun (Ikhfa Syafawi, Idgham Mimi, Idzhar Syafawi) dalam ayat Al-Qur'an beserta cara pelafalan dan alasannya",
      "Menghayati dan menerapkan hikmah semangat keilmuan dalam kehidupan sehari-hari (disiplin belajar, tabayyun, adab bermajelis, dan integrasi iman dengan sains)",
      "Memecahkan studi kasus etika keilmuan di era kecerdasan buatan (AI) serta menuntaskan evaluasi kuis HOTS"
    ],
    kataKunci: [
      "Q.S. Al-Mujādilah: 11",
      "Q.S. Az-Zumar: 9",
      "Mim Sukun (مْ)",
      "Ikhfa Syafawi",
      "Idgham Mimi (Mutamatsilain)",
      "Idzhar Syafawi",
      "Asyaddu Izhhar",
      "Tafassuh fil Majalis",
      "Yarfa'illah",
      "Ulul Albab",
      "Qanit Lail",
      "Thalabul Ilmi Faridhah",
      "H.R. Ibnu Majah 224",
      "H.R. Muslim 2699"
    ]
  },
  ayat1: {
    surah: "Q.S. Al-Mujādilah",
    ayatNomor: 11,
    teksArab: "يٰٓاَيُّهَا الَّذِيْنَ اٰمَنُوْٓا اِذَا قِيْلَ لَكُمْ تَفَسَّحُوْا فِى الْمَجٰلِسِ فَافْسَحُوْا يَفْسَحِ اللّٰهُ لَكُمْۚ وَاِذَا قِيْلَ انْشُزُوْا فَانْشُزُوْا يَرْفَعِ اللّٰهُ الَّذِيْنَ اٰمَنُوْا مِنْكُمْۙ وَالَّذِيْنَ اُوْتُوا الْعِلْمَ دَرَجٰتٍۗ وَاللّٰهُ بِمَا تَعْمَلُوْنَ خَبِيْرٌ",
    transliterasi: "Yā ayyuhal-lażīna āmanū iżā qīla lakum tafassaḥū fil-majālisi fafsaḥū yafsaḥillāhu lakum, wa iżā qīlan-syuzū fansyuzū yarfa'illāhul-lażīna āmanū minkum wal-lażīna ūtul-'ilma darajāt, wallāhu bimā ta'malūna khabīr.",
    terjemahanResmi: "Wahai orang-orang yang beriman! Apabila dikatakan kepadamu, 'Berilah kelapangan di dalam majelis-majelis,' maka lapangkanlah, niscaya Allah akan memberi kelapangan untukmu. Dan apabila dikatakan, 'Berdirilah kamu,' maka berdirilah, niscaya Allah akan mengangkat (derajat) orang-orang yang beriman di antaramu dan orang-orang yang diberi ilmu beberapa derajat. Dan Allah Mahateliti apa yang kamu kerjakan.",
    audioUrl: "https://everyayah.com/data/Alafasy_128kbps/058011.mp3",
    asbabunNuzul: "Diriwayatkan oleh Ibnu Abi Hatim dan Muqatil bin Hayyan, ayat ini turun pada hari Jumat di Masjid Nabawi saat majelis Rasulullah Saw. sedang padat oleh para sahabat. Ketika itu, datanglah beberapa sahabat pahlawan Perang Badar (Ahlul Badr) yang terlambat karena suatu keperluan. Mereka berdiri di hadapan Nabi Saw. dan mengucapkan salam, Nabi pun membalas salam mereka. Namun, tidak ada seorang pun hadirin di majelis yang bergeser untuk memberi tempat duduk bagi mereka. Melihat hal itu, Rasulullah Saw. merasa kurang berkenan atas sikap kaku sebagian sahabat, lalu beliau memerintahkan beberapa sahabat muda untuk berdiri dan memberikan tempat kepada para pahlawan Badar tersebut. Sebagian orang munafik memanfaatkan momen ini untuk memprovokasi bahwa Muhammad tidak adil. Maka Allah Swt. menurunkan ayat ini untuk mendidik kaum beriman agar memiliki tenggang rasa, saling berlapang dada di dalam majelis, dan mematuhi arahan pemimpin tanpa rasa dongkol, serta menegaskan bahwa kemuliaan derajat seseorang diukur dari keimanan dan ilmunya, bukan posisi tempat duduk semata.",
    kandunganTafsir: [
      {
        poin: "1. Perintah Memberi Kelapangan dalam Majelis (Tafassuh fil Majalis)",
        penjelasan: "Kaum mukminin diwajibkan memiliki adab sosial yang luhur dengan melapangkan tempat duduk bagi saudaranya yang baru hadir di majelis ilmu atau kebaikan. Perbuatan melapangkan fisik tempat duduk akan dibalas Allah Swt. dengan melapangkan hati, melapangkan pintu rezeki, dan melapangkan tempat tinggal di surga kelak."
      },
      {
        poin: "2. Kepatuhan untuk Bangkit Berdiri Melakukan Kebaikan (Al-Nusyuz)",
        penjelasan: "Kata 'insyuzu' bermakna bangkitlah untuk melakukan kebajikan, seperti memberikan tempat bagi yang lebih berhak (orang tua, ulama, tamu), bangkit mendirikan shalat, atau bangkit menunaikan tugas dakwah dan kebaikan. Kepatuhan ini mencerminkan kedewasaan spiritual seorang mukmin."
      },
      {
        poin: "3. Janji Pengangkatan Derajat yang Berlipat bagi Orang Beriman dan Berilmu",
        penjelasan: "Allah Swt. tidak hanya mengangkat derajat orang beriman, tetapi secara khusus memberikan 'darajat' (tingkatan-tingkatan kemuliaan berlipat ganda) bagi orang yang beriman sekaligus berilmu. Menurut Ibnu Abbas r.a., derajat orang berilmu di atas orang beriman awam terpaut hingga 700 derajat, di mana jarak antara dua derajat laksana perjalanan 500 tahun."
      },
      {
        poin: "4. Pengawasan Mutlak Allah (Al-Khabir)",
        penjelasan: "Ayat ini ditutup dengan asma Allah 'Khabir' (Mahateliti). Allah Maha Mengetahui niat batin manusia ketika menuntut ilmu dan bermajelis, apakah ikhlas lillahi ta'ala atau sekadar mencari pujian duniawi dan pamer kesombongan."
      }
    ],
    mufradat: [
      {
        kataArab: "يٰٓاَيُّهَا الَّذِيْنَ اٰمَنُوْٓا",
        transliterasi: "yā ayyuhal-lażīna āmanū",
        arti: "wahai orang-orang yang beriman",
        maknaPelajaran: "Panggilan kasih sayang Allah yang menuntut perhatian penuh dan kesiapan menjalankan perintah syariat."
      },
      {
        kataArab: "اِذَا قِيْلَ لَكُمْ",
        transliterasi: "iżā qīla lakum",
        arti: "apabila dikatakan kepadamu",
        maknaPelajaran: "Bimbingan sopan santun dari guru, penceramah, atau pengatur majelis."
      },
      {
        kataArab: "تَفَسَّحُوْا",
        transliterasi: "tafassaḥū",
        arti: "berlapang-lapanglah / bergeserlah",
        maknaPelajaran: "Tuntunan adab untuk tidak egois memonopoli tempat duduk dalam menuntut ilmu."
      },
      {
        kataArab: "فِى الْمَجٰلِسِ",
        transliterasi: "fil-majālisi",
        arti: "di dalam majelis-majelis",
        maknaPelajaran: "Mencakup majelis ilmu, majelis zikir, ruang kelas, maupun pertemuan sosial kebaikan."
      },
      {
        kataArab: "فَافْسَحُوْا",
        transliterasi: "fafsaḥū",
        arti: "maka lapangkanlah",
        maknaPelajaran: "Perintah bersegera merespons ajakan kebaikan tanpa menunda-nunda."
      },
      {
        kataArab: "يَفْسَحِ اللّٰهُ لَكُمْ",
        transliterasi: "yafsaḥillāhu lakum",
        arti: "niscaya Allah akan melapangkan bagimu",
        maknaPelajaran: "Balasan setimpal (al-jaza' min jinsil 'amal): siapa yang melapangkan orang lain, Allah akan meluaskan urusannya."
      },
      {
        kataArab: "وَاِذَا قِيْلَ انْشُزُوْا",
        transliterasi: "wa iżā qīlansyuzū",
        arti: "dan apabila dikatakan berdirilah kamu",
        maknaPelajaran: "Kesiapsiagaan untuk bangkit melaksanakan perintah kebajikan atau memberikan ruang penghormatan."
      },
      {
        kataArab: "فَانْشُزُوْا",
        transliterasi: "fansyuzū",
        arti: "maka berdirilah kamu",
        maknaPelajaran: "Ketaatan mutlak terhadap bimbingan yang benar tanpa rasa tersinggung."
      },
      {
        kataArab: "يَرْفَعِ اللّٰهُ",
        transliterasi: "yarfa'illāhu",
        arti: "niscaya Allah akan mengangkat / meninggikan",
        maknaPelajaran: "Kemuliaan sejati datangnya semata-mata dari penetapan Allah Swt., bukan dari sanjungan manusia."
      },
      {
        kataArab: "الَّذِيْنَ اٰمَنُوْا مِنْكُمْ",
        transliterasi: "allażīna āmanū minkum",
        arti: "orang-orang yang beriman di antaramu",
        maknaPelajaran: "Iman adalah fondasi utama tanpa iman, ilmu setinggi apapun tidak bernilai di akhirat."
      },
      {
        kataArab: "وَالَّذِيْنَ اُوْتُوا الْعِلْمَ",
        transliterasi: "wal-lażīna ūtul-'ilma",
        arti: "dan orang-orang yang diberi ilmu",
        maknaPelajaran: "Ilmu adalah anugerah cahaya Ilahi yang wajib disyukuri dan diamalkan."
      },
      {
        kataArab: "دَرَجٰتٍ",
        transliterasi: "darajāt",
        arti: "beberapa derajat / kedudukan tinggi",
        maknaPelajaran: "Kenaikan kedudukan yang berjenjang mulia baik di dunia (dihormati dan dipercaya) maupun akhirat (surga bertingkat tinggi)."
      },
      {
        kataArab: "وَاللّٰهُ بِمَا تَعْمَلُوْنَ خَبِيْرٌ",
        transliterasi: "wallāhu bimā ta'malūna khabīr",
        arti: "dan Allah Mahateliti apa yang kamu kerjakan",
        maknaPelajaran: "Peringatan agar senantiasa menjaga keikhlasan batin dalam setiap amal perbuatan."
      }
    ]
  },
  ayat2: {
    surah: "Q.S. Az-Zumar",
    ayatNomor: 9,
    teksArab: "اَمَّنْ هُوَ قَانِتٌ اٰنَاۤءَ الَّيْلِ سَاجِدًا وَّقَاۤىِٕمًا يَّحْذَرُ الْاٰخِرَةَ وَيَرْجُوْا رَحْمَةَ رَبِّهٖۗ قُلْ هَلْ يَسْتَوِى الَّذِيْنَ يَعْلَمُوْنَ وَالَّذِيْنَ لَا يَعْلَمُوْنَ ۗ اِنَّمَا يَتَذَكَّرُ اُولُوا الْاَلْبَابِ",
    transliterasi: "Amman huwa qānitun ānā'al-laili sājidan wa qā'iman yaḥżarul-ākhirata wa yarjū raḥmata rabbih, qul hal yastawil-lażīna ya'lamūna wal-lażīna lā ya'lamūn, innamā yatażakkaru ulul-albāb.",
    terjemahanResmi: "(Apakah orang musyrik yang lebih beruntung) ataukah orang yang beribadah pada waktu malam dengan sujud dan berdiri, karena takut kepada (azab) akhirat dan mengharapkan rahmat Tuhannya? Katakanlah, 'Apakah sama orang-orang yang mengetahui dengan orang-orang yang tidak mengetahui?' Sebenarnya hanya orang-orang yang berakallah yang dapat menerima pelajaran.",
    audioUrl: "https://everyayah.com/data/Alafasy_128kbps/039009.mp3",
    asbabunNuzul: "Menurut Ibnu Abbas r.a., ayat ini turun membandingkan dua karakter yang sangat kontras. Karakter pertama diwakili oleh Abu Jahal dan tokoh-tokoh kafir Quraisy yang sombong, menolak kebenaran, dan terbuai kemewahan duniawi yang fana. Sedangkan karakter kedua diwakili oleh sosok sahabat yang saleh dan haus ilmu seperti Ammar bin Yasir, Shuhaib ar-Rumi, dan Salim maula Abu Hudzaifah r.a. yang menghidupkan malam-malamnya dengan shalat tahajud, membaca Al-Qur'an, dan merenungi ilmu kebesaran Allah Swt. Maka Allah menurunkan ayat ini untuk menegaskan bahwa orang yang memiliki ilmu dan mengamalkannya tidak akan pernah sejajar dengan orang yang bodoh dan lalai.",
    kandunganTafsir: [
      {
        poin: "1. Hakikat Pribadi Ahli Ilmu Sejati (Al-Qanit)",
        penjelasan: "Ciri orang berilmu sejati dalam pandangan Al-Qur'an bukan sekadar memiliki kecerdasan intelektual (IQ tinggi), melainkan orang yang tunduk dan taat (qanit) pada larut malam (tahajud), memadukan ibadah fisik sujud dan berdiri dengan kekhusyukan batin."
      },
      {
        poin: "2. Keseimbangan Antara Rasa Takut (Khauf) dan Harapan (Raja')",
        penjelasan: "Orang berilmu senantiasa menyeimbangkan dua sayap spiritualitas: takut akan siksa akhirat ('yahdzarul akhirah') sehingga terhindar dari perbuatan maksiat, serta berharap penuh pada limpahan rahmat dan ampunan Allah ('yarju rahmata rabbihi') sehingga tidak pernah putus asa."
      },
      {
        poin: "3. Pertanyaan Retoris tentang Ketidaksetaraan Orang Berilmu vs Orang Jahil",
        penjelasan: "Ungkapan 'Hal yastawilladzina ya'lamuna walladzina la ya'lamun' adalah istifham inkari (pertanyaan retoris penafian). Mustahil sama antara orang yang mengerti kebenaran dengan orang yang tenggelam dalam kebodohan, laksana tidak samanya cahaya terang benderang dengan kegelapan malam."
      },
      {
        poin: "4. Karakteristik Ulul Albab (Orang yang Memiliki Akal Murni)",
        penjelasan: "Hanya kelompok 'Ulul Albab'—yakni mereka yang menggunakan akal budi secara jernih tanpa tertutup hawa nafsu—yang mampu menangkap pesan kebenaran Ilahi, mengambil ibrah dari peristiwa sejarah, dan menjadikan ilmu sebagai sarana mendekatkan diri kepada Sang Khaliq."
      }
    ],
    mufradat: [
      {
        kataArab: "اَمَّنْ هُوَ",
        transliterasi: "am-man huwa",
        arti: "ataukah orang yang dia",
        maknaPelajaran: "Membandingkan secara kontras antara jalan hidup mukmin berilmu vs pendosa yang lalai."
      },
      {
        kataArab: "قَانِتٌ",
        transliterasi: "qānitun",
        arti: "orang yang taat dan khusyuk beribadah",
        maknaPelajaran: "Kepatuhan yang istiqomah dan ketundukan hati yang mendalam kepada Allah Swt."
      },
      {
        kataArab: "اٰنَاۤءَ الَّيْلِ",
        transliterasi: "ānā'al-laili",
        arti: "pada waktu-waktu malam",
        maknaPelajaran: "Waktu sepertiga malam terakhir saat suasana hening untuk mendekatkan diri kepada Allah."
      },
      {
        kataArab: "سَاجِدًا وَّقَاۤىِٕمًا",
        transliterasi: "sājidan wa qā'iman",
        arti: "dalam keadaan bersujud dan berdiri",
        maknaPelajaran: "Dua gerakan utama dalam shalat malam yang melambangkan kerendahan diri total di hadapan Allah."
      },
      {
        kataArab: "يَّحْذَرُ الْاٰخِرَةَ",
        transliterasi: "yaḥżarul-ākhirata",
        arti: "dia takut terhadap (azab) akhirat",
        maknaPelajaran: "Rasa waspada (khauf) yang menjadi rem pendorong diri untuk menjauhi maksiat dan kecurangan."
      },
      {
        kataArab: "وَيَرْجُوْا",
        transliterasi: "wa yarjū",
        arti: "dan dia mengharapkan",
        maknaPelajaran: "Harapan positif (raja') yang menyalakan semangat pantang menyerah dalam menuntut ilmu."
      },
      {
        kataArab: "رَحْمَةَ رَبِّهٖ",
        transliterasi: "raḥmata rabbih",
        arti: "rahmat dan kasih sayang Tuhannya",
        maknaPelajaran: "Tujuan akhir dari setiap ikhtiar belajar dan beribadah adalah meraih ridha dan kasih sayang Allah."
      },
      {
        kataArab: "قُلْ هَلْ يَسْتَوِى",
        transliterasi: "qul hal yastawī",
        arti: "katakanlah apakah sama",
        maknaPelajaran: "Penegasan tegas bahwa kualitas hidup orang berilmu memiliki perbedaan mendasar dengan orang jahil."
      },
      {
        kataArab: "الَّذِيْنَ يَعْلَمُوْنَ",
        transliterasi: "allażīna ya'lamūna",
        arti: "orang-orang yang mengetahui / berilmu",
        maknaPelajaran: "Mereka yang memanfaatkan akal, indra, dan wahyu untuk memahami kebenaran dan sains."
      },
      {
        kataArab: "وَالَّذِيْنَ لَا يَعْلَمُوْنَ",
        transliterasi: "wal-lażīna lā ya'lamūn",
        arti: "dan orang-orang yang tidak mengetahui",
        maknaPelajaran: "Orang yang malas belajar, menolak kebenaran, dan puas dalam kungkungan kebodohan."
      },
      {
        kataArab: "اِنَّمَا يَتَذَكَّرُ",
        transliterasi: "innamā yatażakkaru",
        arti: "sesungguhnya hanya yang dapat mengambil pelajaran",
        maknaPelajaran: "Peringatan Al-Qur'an hanya berfaedah bagi mereka yang memiliki keterbukaan akal dan hati."
      },
      {
        kataArab: "اُولُوا الْاَلْبَابِ",
        transliterasi: "ulul-albāb",
        arti: "orang-orang yang berakal murni",
        maknaPelajaran: "Generasi intelektual muslim yang mengintegrasikan dzikir hati dengan pikir nalar ilmiah."
      }
    ]
  },
  hukumMimSukunLengkap: {
    definisiUmum: "Hukum bacaan Mim Sukun (مْ) adalah kaidah tajwid yang mengatur cara membunyikan huruf mim mati/sukun ketika bertemu dengan salah satu dari 28 huruf hijaiyah. Berbeda dengan nun sukun yang memiliki 4 atau 5 hukum, mim sukun hanya memiliki TIGA hukum utama yang didasarkan pada titik artikulasi makhraj bibir (Asy-Syafatain).",
    tigaMacamHukum: [
      {
        namaHukum: "1. Ikhfā' Syafawī (إِخْفَاءٌ شَفَوِيٌّ)",
        namaArab: "إِخْفَاءٌ شَفَوِيٌّ",
        huruf: ["ب (Ba')"],
        kaidah: "Apabila ada Mim Sukun (مْ) bertemu dengan huruf Ba' (ب) dalam dua kata terpisah maupun satu kata.",
        caraMembaca: "Membunyikan huruf mim sukun secara samar-samar di antara dua bibir disertai dengungan (Ghunnah) yang ditahan selama 2 harakat (1 alif). Kedua bibir tidak dirapatkan terlalu kuat, melainkan disentuhkan secara lembut (atau terdapat celah sangat tipis menurut sebagian qari) sehingga suara mim bertransisi halus menuju makhraj ba'.",
        durasiGhunnah: "2 Harakat (Ghunnah Kamilah)",
        catatanKhusus: "Dinamakan 'Syafawi' (bibir) karena makhraj huruf mim dan ba' sama-sama berasal dari pertemuan bibir atas dan bibir bawah."
      },
      {
        namaHukum: "2. Idghām Mīmī / Idghām Mutamāṡilain (إِدْغَامٌ مِيمِيٌّ)",
        namaArab: "إِدْغَامٌ مِيمِيٌّ / إِدْغَامُ الْمُتَمَاثِلَيْنِ",
        huruf: ["م (Mim)"],
        kaidah: "Apabila ada Mim Sukun (مْ) bertemu dengan huruf Mim berharakat (مَ, مِ, مُ) sesudahnya.",
        caraMembaca: "Memasukkan bunyi mim sukun pertama ke dalam mim kedua secara sempurna sehingga menjadi satu huruf mim bertasydid (مّ), disertai dengungan (Ghunnah) yang ditahan selama 2 harakat.",
        durasiGhunnah: "2 Harakat (Ghunnah Akmal ma takun)",
        catatanKhusus: "Dinamakan 'Mutamatsilain' karena mempertemukan dua huruf yang sama persis sifat dan makhrajnya (mim dengan mim)."
      },
      {
        namaHukum: "3. Iẓhār Syafawī (إِظْهَارٌ شَفَوِيٌّ)",
        namaArab: "إِظْهَارٌ شَفَوِيٌّ",
        huruf: [
          "ء", "ت", "ث", "ج", "ح", "خ", "د", "ذ", "ر", "ز", "س", "ش", "ص", "ض", "ط", "ظ", "ع", "غ", "ف", "ق", "ك", "ل", "ن", "و", "هـ", "ي"
        ],
        kaidah: "Apabila ada Mim Sukun (مْ) bertemu dengan salah satu dari 26 huruf hijaiyah selain huruf Ba' (ب) dan Mim (م), baik dalam satu kata maupun dua kata terpisah.",
        caraMembaca: "Mengucapkan bunyi mim sukun secara terang, jelas, dan tegas pada makhraj bibir tanpa dengung (tanpa tambahan ghunnah). Kedua bibir merapat secara normal dan langsung berpindah ke huruf berikutnya.",
        durasiGhunnah: "0 Harakat (Tanpa dengung / Izhhar murni)",
        catatanKhusus: "PERINGATAN KHUSUS (Asyaddu Izhhār): Harus sangat berhati-hati dan lebih memperjelas bunyi mim sukun saat bertemu huruf Wawu (و) dan Fa' (ف), jangan sampai terseret menjadi Ikhfa' karena kedekatan makhraj keduanya dengan bibir."
      }
    ],
    daftarPenerapanPadaAyat: [
      {
        lafaz: "لَكُمْ تَفَسَّحُوْا",
        ayatRujukan: "Q.S. Al-Mujādilah [58]: 11",
        hukum: "Idzhar Syafawi",
        hurufKetemu: "ت (Ta')",
        alasanKaidah: "Mim sukun (لَكُمْ) bertemu dengan huruf Ta' (ت)",
        caraMembaca: "Dibaca jelas dan terang 'Lakum tafassaḥū' tanpa dengung.",
        tingkatKehatiHatian: "Normal"
      },
      {
        lafaz: "لَكُمْۚ وَاِذَا",
        ayatRujukan: "Q.S. Al-Mujādilah [58]: 11",
        hukum: "Idzhar Syafawi",
        hurufKetemu: "و (Wawu)",
        alasanKaidah: "Mim sukun (لَكُمْ) bertemu dengan huruf Wawu (و)",
        caraMembaca: "Dibaca sangat jelas dan tegas 'Lakum wa iżā' (Asyaddu Izhhār), jangan sampai terseret dengung karena makhraj mim dan wawu sama-sama di bibir.",
        tingkatKehatiHatian: "Sangat Diperhatikan (Asyaddu Izhhar)"
      },
      {
        lafaz: "مِنْكُمْۙ وَالَّذِيْنَ",
        ayatRujukan: "Q.S. Al-Mujādilah [58]: 11",
        hukum: "Idzhar Syafawi",
        hurufKetemu: "و (Wawu)",
        alasanKaidah: "Mim sukun (مِنْكُمْ) bertemu dengan huruf Wawu (و)",
        caraMembaca: "Dibaca sangat jelas dan tegas 'Minkum wal-lażīna' tanpa dengung pada mim sukunnya.",
        tingkatKehatiHatian: "Sangat Diperhatikan (Asyaddu Izhhar)"
      },
      {
        lafaz: "اَمَّنْ هُوَ",
        ayatRujukan: "Q.S. Az-Zumar [39]: 9",
        hukum: "Idgham Mimi (Mutamatsilain)",
        hurufKetemu: "م (Mim)",
        alasanKaidah: "Asal kata 'Am' (أَمْ) berakhiran mim sukun bertemu huruf 'Man' (مَنْ) yang diawali mim berharakat, sehingga diidghamkan menjadi 'Am-man' bertasydid.",
        caraMembaca: "Memasukkan mim pertama ke mim kedua dan mendengungkannya selama 2 harakat: 'Am-man huwa'.",
        tingkatKehatiHatian: "Ghunnah 2 Harakat Penuh"
      },
      {
        lafaz: "تَرْمِيْهِمْ بِحِجَارَةٍ",
        ayatRujukan: "Q.S. Al-Fīl [105]: 4 (Contoh Ikhfa Syafawi)",
        hukum: "Ikhfa Syafawi",
        hurufKetemu: "ب (Ba')",
        alasanKaidah: "Mim sukun (تَرْمِيْهِمْ) bertemu dengan huruf Ba' (ب)",
        caraMembaca: "Dibaca samar antara mim dan ba' dengan dengung 2 harakat: 'Tarmīhim biḥijārah'.",
        tingkatKehatiHatian: "Samar dan Dengung 2 Harakat"
      },
      {
        lafaz: "وَمَا هُمْ بِمُؤْمِنِيْنَ",
        ayatRujukan: "Q.S. Al-Baqarah [2]: 8 (Contoh Ikhfa Syafawi)",
        hukum: "Ikhfa Syafawi",
        hurufKetemu: "ب (Ba')",
        alasanKaidah: "Mim sukun (هُمْ) bertemu dengan huruf Ba' (ب)",
        caraMembaca: "Dibaca samar di bibir dengan dengungan ditahan 2 harakat: 'Wa mā hum bimu'minīn'.",
        tingkatKehatiHatian: "Samar dan Dengung 2 Harakat"
      },
      {
        lafaz: "عَلَيْهِمْ مُّؤْصَدَةٌ",
        ayatRujukan: "Q.S. Al-Humazah [104]: 8 (Contoh Idgham Mimi)",
        hukum: "Idgham Mimi (Mutamatsilain)",
        hurufKetemu: "م (Mim)",
        alasanKaidah: "Mim sukun (عَلَيْهِمْ) bertemu dengan huruf Mim berharakat (مُّؤْصَدَةٌ)",
        caraMembaca: "Dileburkan menjadi satu mim bertasydid dengan dengung 2 harakat: '‘Alaihim mu'ṣadah'.",
        tingkatKehatiHatian: "Ghunnah 2 Harakat Penuh"
      },
      {
        lafaz: "اَمْ لَمْ تُنْذِرْهُمْ",
        ayatRujukan: "Q.S. Al-Baqarah [2]: 6 (Contoh Rangkap Idzhar Syafawi)",
        hukum: "Idzhar Syafawi",
        hurufKetemu: "ل (Lam) & ت (Ta')",
        alasanKaidah: "Mim sukun pada 'Am' bertemu Lam, dan mim sukun pada 'Lam' bertemu Ta'.",
        caraMembaca: "Keduanya dibaca jelas dan tegas tanpa dengung: 'Am lam tundzirhum'.",
        tingkatKehatiHatian: "Jelas tanpa Ghunnah"
      }
    ]
  },
  haditsTerkait: [
    {
      perawi: "H.R. Ibnu Majah",
      nomorHadits: "Hadits No. 224 (Disahihkan oleh Syaikh Al-Albani)",
      derajat: "Hadits Shahih",
      matanArab: "طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ",
      transliterasi: "Ṭalabul-'ilmi farīḍatun 'alā kulli muslim.",
      terjemahan: "Menuntut ilmu itu adalah kewajiban mutlak bagi setiap orang muslim (laki-laki maupun perempuan).",
      syarahSingkat: "Hadits ini menggunakan lafaz 'faridhatun' (kewajiban pasti). Kewajiban ini mencakup ilmu Fardhu 'Ain (rukun iman, fikih ibadah dasar, halal-haram) serta Fardhu Kifayah (sains, kedokteran, teknologi, rekayasa digital) yang menopang kemaslahatan hidup umat Islam di dunia.",
      relevansiKehidupan: "Sebagai pelajar muslim SMP, belajar sungguh-sungguh bukan sekadar mengejar nilai rapor, melainkan ibadah fardhu yang bernilai pahala di sisi Allah Swt."
    },
    {
      perawi: "H.R. Muslim",
      nomorHadits: "Hadits No. 2699 (Kitab adz-Dzikr wa ad-Du'a)",
      derajat: "Hadits Shahih",
      matanArab: "مَنْ سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا سَهَّلَ اللَّهُ لَهُ بِهِ طَرِيقًا إِلَى الْجَنَّةِ",
      transliterasi: "Man salaka ṭarīqan yaltamisu fīhi 'ilman sahhallāhu lahū bihī ṭarīqan ilal-jannah.",
      terjemahan: "Barangsiapa menempuh suatu jalan untuk mencari ilmu, maka Allah akan memudahkan baginya jalan menuju surga.",
      syarahSingkat: "'Menempuh jalan' mencakup perjalanan fisik (berangkat ke sekolah, pesantren, majelis) maupun perjalanan non-fisik (membaca buku riset, meneliti data, belajar di perpustakaan, mengkaji materi digital). Allah akan memberi taufik kemudahan meniti Shirathal Mustaqim di akhirat.",
      relevansiKehidupan: "Setiap langkah kaki dan pengorbanan waktu seorang pelajar dalam mempelajari materi pelajaran dihitung sebagai jembatan pembuka pintu surga."
    },
    {
      perawi: "H.R. Abu Dawud & At-Tirmidzi",
      nomorHadits: "Abu Dawud No. 3641 & At-Tirmidzi No. 2682",
      derajat: "Hadits Hasan Shahih",
      matanArab: "وَإِنَّ فَضْلَ الْعَالِمِ عَلَى الْعَابِدِ كَفَضْلِ الْقَمَرِ لَيْلَةَ الْبَدْرِ عَلَى سَائِرِ الْكَوَاكِبِ، وَإِنَّ الْعُلَمَاءَ وَرَثَةُ الْأَنْبِيَاءِ",
      transliterasi: "Wa inna faḍlal-'ālimi 'alal-'ābidi kafaḍlil-qamari lailatal-badri 'alā sā'iril-kawākib, wa innal-'ulamā'a waraṡatul-anbiyā'.",
      terjemahan: "Dan sesungguhnya keutamaan orang yang berilmu atas orang yang sekadar ahli ibadah adalah laksana keutamaan rembulan pada malam purnama atas seluruh bintang-bintang. Dan sesungguhnya para ulama adalah pewaris para nabi.",
      syarahSingkat: "Ahli ibadah tanpa ilmu hanya memberi manfaat bagi dirinya sendiri, sedangkan orang berilmu memancarkan cahaya pengetahuan yang membimbing ribuan orang keluar dari kegelapan. Para nabi tidak mewariskan dinar atau dirham, melainkan mewariskan ilmu.",
      relevansiKehidupan: "Memotivasi siswa untuk terus berprestasi dan bercita-cita menjadi saintis, dokter, atau intelektual muslim yang menebar kemaslahatan bagi bangsa."
    },
    {
      perawi: "H.R. Muslim",
      nomorHadits: "Hadits No. 1631 (Kitab al-Washiyyah)",
      derajat: "Hadits Shahih",
      matanArab: "إِذَا مَاتَ الْإِنْسَانُ انْقَطَعَ عَنْهُ عَمَلُهُ إِلَّا مِنْ ثَلَاثَةٍ: إِلَّا مِنْ صَدَقَةٍ جَارِيَةٍ، أَوْ عِلْمٍ يُنْتَفَعُ بِهِ، أَوْ وَلَدٍ صَالِحٍ يَدْعُو لَهُ",
      transliterasi: "Iżā mātal-insānu-nqata'a 'anhu 'amaluhū illā min ṡalāṡah: illā min ṣadaqatin jāriyah, aw 'ilmin yuntafa'u bih, aw waladin ṣāliḥin yad'ū lah.",
      terjemahan: "Apabila seorang manusia meninggal dunia, maka terputuslah semua amalnya kecuali tiga perkara: sedekah jariyah, ilmu yang bermanfaat (yang terus diamalkan), atau anak saleh yang mendoakannya.",
      syarahSingkat: "Ilmu yang diajarkan, ditulis dalam buku, dibagikan dalam tutorial edukasi, atau diwariskan dalam penemuan teknologi bermanfaat akan terus mendatangkan aliran pahala abadi ke alam kubur hingga hari kiamat.",
      relevansiKehidupan: "Mengajarkan siswa agar senang berbagi ilmu kepada teman sekelas dan aktif menjadi tutor sebaya tanpa merasa tersaingi."
    }
  ],
  panduan4Keterampilan: {
    membacaTartil: {
      definisi: "Tartil bermakna membaca Al-Qur'an secara perlahan, tenang, jelas makhraj setiap hurufnya, dan konsisten menerapkan kaidah tajwid, khususnya hukum mim sukun, mad, serta waqaf dan ibtida'.",
      langkahPraktis: [
        "1. Tahap Isti'adzah & Basmalah: Memulai dengan membaca ta'awudz dan basmalah dengan niat ikhlas dan hati yang khusyuk.",
        "2. Tahap Artikulasi Huruf (Makharijul Huruf): Memastikan huruf bibir (Mim, Ba', Wawu, Fa') diucapkan dengan tepat tanpa tertukar.",
        "3. Tahap Penerapan Mim Sukun: Tahan dengung 2 harakat saat membaca 'Am-man huwa' (Idgham Mimi), dan ucapkan secara tegas tanpa dengung saat membaca 'Lakum tafassaḥū' serta 'Lakum wa iżā' (Idzhar Syafawi).",
        "4. Tahap Pengaturan Nafas & Waqaf: Berhenti pada tanda waqaf yang tepat (seperti tanda waqaf jaiz jim 'ۚ' pada 'lakum' di ayat 11) dan tidak memutus bacaan pada susunan kata yang belum sempurna maknanya."
      ],
      adabMembaca: [
        "Berwudhu dan suci dari hadas kecil maupun besar",
        "Menghadap kiblat dengan posisi duduk santun dan tenang",
        "Membaca dengan suara merdu yang tidak berlebih-lebihan (tahsin shaut)",
        "Meresapi arti ayat: merasakan harapan saat membaca ayat rahmat dan memohon perlindungan saat membaca ayat ancaman"
      ]
    },
    menghafalCepat: {
      metode: "Metode Tikrar dan Talaqqi Terbimbing (Metode 3x3x4)",
      tahapan: [
        "Langkah 1 (Talaqqi Simak): Dengarkan audio tilawah Q.S. Al-Mujadilah: 11 dan Az-Zumar: 9 sebanyak 3 kali dari qari yang fasih sambil melihat mushaf.",
        "Langkah 2 (Penggalan Baris): Bagi ayat menjadi 3 penggalan pendek. Contoh Q.S. Al-Mujadilah: 11 dibagi menjadi: (a) Panggilan iman dan berlapang di majelis, (b) Perintah bangkit berdiri, (c) Janji pengangkatan derajat orang beriman dan berilmu.",
        "Langkah 3 (Repetisi 10 Kali): Ulangi membaca penggalan pertama sebanyak 10 kali melihat mushaf, lalu 5 kali tanpa melihat mushaf hingga lancar di luar kepala.",
        "Langkah 4 (Penyambungan / Ar-Rabth): Sambungkan penggalan (a) dengan (b) dan ulangi 7 kali berturut-turut tanpa jeda kesalahan sebelum melangkah ke penggalan (c).",
        "Langkah 5 (Setoran Uji Mandiri): Setorkan hafalan kepada guru, teman sebaya, atau gunakan fitur Uji Hafalan interaktif di Masterku AI."
      ],
      tipsMurajaah: "Lakukan muraja'ah (pengulangan hafalan) setiap selesai shalat fardhu dan jadikan ayat yang dihafal sebagai bacaan dalam shalat sunnah dhuha atau tahajud malam."
    },
    menulisKhatNaskhi: {
      kaidahPokok: [
        "Khat Naskhi adalah jenis kaligrafi Al-Qur'an resmi standar yang paling jelas dibaca, mudah dipelajari, dan proporsional.",
        "Aturan Garis Dasar: Dalam buku tulis bergaris, ada huruf yang posisinya mutlak di atas garis, dan ada huruf yang ekornya menggantung turun menembus garis dasar.",
        "Huruf Di Atas Garis Penuh: Alif (ا), Ba' (ب), Ta' (ت), Tsa' (ث), Dal (د), Dzal (ذ), Tha' (ط), Zha' (ظ), Kaf (ك), Ha' (هـ).",
        "Huruf yang Menggantung ke Bawah Garis: Mim (م), Ra' (ر), Zay (ز), Nun (ن), Wawu (و), 'Ain (ع), Ghain (غ), Jim/Ha/Kha (ج/ح/خ), Sin/Syin (س/ش), Shad/Dhad (ص/ض), Qaf (ق), Lam (ل), Ya' (ي)."
      ],
      panduanHuruf: [
        {
          huruf: "Huruf Mim (م)",
          posisiGaris: "Kepala mim berbentuk segitiga bulat bertumpu di atas garis, sedangkan ekornya ditarik lurus vertikal ke bawah garis sepanjang 2-3 titik.",
          tipsMenulis: "Hindari membuat kepala mim berlubang terlalu besar atau ekor melengkung liar seperti huruf wawu."
        },
        {
          huruf: "Huruf Wawu (و)",
          posisiGaris: "Kepala wawu di atas garis, lalu leher meluncur melengkung ke bawah garis laksana ekor huruf ra'.",
          tipsMenulis: "Buat tarikan leher wawu dengan sudut kemiringan sekitar 45 derajat agar tampak luwes."
        },
        {
          huruf: "Huruf Lam-Alif (لا)",
          posisiGaris: "Kedua tiang condong seimbang dengan lengkungan simetris di bagian dasar tepat di atas garis.",
          tipsMenulis: "Pertahankan jarak renggang proporsional antara kedua kaki lam-alif."
        }
      ],
      latihanMenulis: "Tuliskan penggalan ayat emas berikut sebanyak 3 baris di buku tugasmu: 'يَرْفَعِ اللّٰهُ الَّذِيْنَ اٰمَنُوْا مِنْكُمْۙ وَالَّذِيْنَ اُوْتُوا الْعِلْمَ دَرَجٰتٍۗ' perhatikan ketinggian tiang alif dan kedalaman ekor huruf mim serta ra'."
    },
    menjelaskanRefleksi: {
      uraianKonsep: "Menjelaskan kandungan ayat berarti mampu mengaitkan pesan suci wahyu dengan realitas kehidupan sosial dan perkembangan zaman modern.",
      kontekstualisasiZamanNow: [
        "1. Etika Majelis Digital: Menerapkan 'tafassuh' dalam grup belajar daring (WhatsApp, Zoom, Classroom) dengan cara tidak memotong pembicaraan, tidak menyebarkan pesan spam/hoaks, dan saling memberi ruang berpendapat yang sehat.",
        "2. Pemanfaatan Teknologi & AI secara Bertanggung Jawab: Orang beriman yang berilmu memanfaatkan kecerdasan buatan (AI) sebagai sarana memperdalam wawasan dan riset, bukan untuk mencontek atau melakukan plagiarisme tugas sekolah.",
        "3. Melawan Budaya Malas Membaca (Anti-Doomscrolling): Mewujudkan karakter 'Ulul Albab' dengan membatasi waktu scroll media sosial yang tidak bermanfaat dan menggantinya dengan membaca buku literatur ilmiah minimal 30 menit sehari.",
        "4. Keseimbangan Dzikir dan Pikir: Menghindari pemisahan sekuler antara sains dan agama. Menjadi ilmuwan muslim yang taat shalat tahajud laksana karakter Qanit Lail dalam Q.S. Az-Zumar: 9."
      ]
    }
  },
  hikmahKeilmuan: [
    {
      dimensi: "1. Kenaikan Derajat Kemuliaan Dunia dan Akhirat (Rafi'ud Darajat)",
      uraian: "Allah Swt. menjanjikan tingkatan derajat yang tinggi di dunia berupa kepercayaan, kemuliaan akhlak, dan kepemimpinan sosial, serta di akhirat berupa kedudukan istimewa di surga yang berdampingan dengan para nabi.",
      aplikasiSiswa: "Belajar tekun setiap hari dengan penuh kesungguhan agar kelak menjadi pribadi yang membanggakan orang tua dan bermanfaat bagi masyarakat."
    },
    {
      dimensi: "2. Pembeda Hakiki Kualitas Insan (Karakter Ulul Albab)",
      uraian: "Ilmu adalah pembeda utama antara kebenaran dan kebatilan. Orang berilmu memiliki mata batin yang tajam, mampu menyaring informasi secara kritis, dan tidak mudah terombang-ambing oleh tren kesesatan.",
      aplikasiSiswa: "Membiasakan budaya tabayyun (verifikasi data) sebelum membagikan berita di media sosial dan tidak mudah menelan mentah-mentah informasi viral."
    },
    {
      dimensi: "3. Kunci Membuka Rahasia Alam Semesta dan Memakmurkan Bumi",
      uraian: "Manusia diamanahi sebagai khalifah pemakmur bumi (khalifatullah fil ardh). Amanah ini hanya dapat ditunaikan jika manusia menguasai sains, teknologi, matematika, dan ilmu lingkungan yang dilandasi iman.",
      aplikasiSiswa: "Menyukai mata pelajaran sains, matematika, dan teknologi, serta memanfaatkannya untuk memecahkan masalah di lingkungan sekitar."
    },
    {
      dimensi: "4. Adab Lapang Dada dan Tenggang Rasa Sosial (Tafassuh fil Majalis)",
      uraian: "Mendidik jiwa agar rendah hati, tidak egois, menghargai kehadiran orang lain, dan senantiasa membuka pintu kemudahan bagi sesama penuntut ilmu.",
      aplikasiSiswa: "Mau berbagi tempat duduk, berbagi catatan pelajaran, meminjamkan alat tulis, dan menyambut teman baru di kelas dengan senyuman tulus."
    },
    {
      dimensi: "5. Integrasi Keselarasan Iman dan Ilmu",
      uraian: "Ilmu tanpa iman akan melahirkan kesombongan dan kehancuran teknologi, sedangkan iman tanpa ilmu akan melahirkan kejumudan dan fanatisme buta. Keduanya harus bersepadu harmonis.",
      aplikasiSiswa: "Tetap rendah hati (tawadhu') meskipun meraih peringkat satu, rajin shalat berjamaah, dan selalu mendoakan para guru yang telah mengajar."
    },
    {
      dimensi: "6. Pahala Jariyah yang Abadi Melampaui Usia Jasad",
      uraian: "Ilmu yang diajarkan atau dibukukan akan terus memancarkan pahala mengalir ke alam barzakh saat seluruh amal manusia terputus setelah kematian.",
      aplikasiSiswa: "Aktif membantu teman yang kesulitan memahami pelajaran (tutor sebaya) dengan sabar dan ikhlas tanpa pamrih."
    }
  ],
  studiKasus: [
    {
      judul: "Studi Kasus 1: Godaan Mencontek Menggunakan AI dalam Ujian Sekolah",
      deskripsiKasus: "Faris adalah siswa kelas IX yang sangat ingin meraih nilai 100 agar mendapat pujian dari teman-temannya. Saat ujian sekolah mata pelajaran PAI, Faris diam-diam membuka aplikasi kecerdasan buatan (AI) di ponselnya untuk menyalin jawaban tugas esai secara instan tanpa membaca dan memahami materinya sama sekali. Faris merasa bangga karena nilainya sempurna, padahal ia tidak memahami isi materi tersebut.",
      pertanyaanDiskusi: "Bagaimana tindakan Faris jika ditinjau dari Q.S. Al-Mujādilah: 11 dan Q.S. Az-Zumar: 9 serta prinsip 'Wallāhu bimā ta'malūna khabīr'? Apa dampak buruk perilaku mencontek terhadap pembentukan karakter penuntut ilmu sejati?",
      solusiIslami: "Tindakan Faris bertentangan dengan esensi menuntut ilmu dalam Islam. Q.S. Al-Mujādilah: 11 menegaskan bahwa Allah Mahateliti (Khabir) terhadap setiap perbuatan batin manusia. Nilai tinggi hasil kecurangan adalah kemuliaan semu yang tidak mendatangkan keberkahan ilmu. Rasulullah Saw. bersabda: 'Barangsiapa mencurangi kami, maka ia bukan dari golongan kami' (H.R. Muslim). Karakter Ulul Albab menuntut kejujuran intelektual: lebih mulia nilai pas-pasan hasil kerja keras sendiri daripada nilai 100 hasil menipu, karena ilmu yang berkah adalah ilmu yang diraih dengan kejujuran dan ketekunan."
    },
    {
      judul: "Studi Kasus 2: Adab Bermajelis dan Fenomena Sibuk Bermedsos saat Pengajian",
      deskripsiKasus: "Di aula sekolah diadakan pengajian rutin bulanan bersama seorang ustadz tamu. Farhan dan beberapa temannya duduk di deretan paling belakang. Mereka meletakkan tas di kursi kosong sebelahnya agar teman lain tidak bisa duduk, dan sepanjang pengajian berlangsung, Farhan asyik bermain game online serta scroll video TikTok sambil memakai earphone, mengabaikan ustadz yang sedang menerangkan ilmu.",
      pertanyaanDiskusi: "Adab apa saja yang dilanggar oleh Farhan berdasarkan tuntunan Q.S. Al-Mujādilah [58]: 11 tentang 'tafassuh fil majalis' dan adab menuntut ilmu? Bagaimana seharusnya sikap seorang siswa muslim saat menghadiri majelis ilmu?",
      solusiIslami: "Farhan melanggar dua adab pokok: (1) Adab sosial tafassuh fil majalis, yaitu memonopoli tempat dengan menaruh tas sehingga menghalangi orang lain yang ingin belajar; (2) Adab tawqirul 'alim (memuliakan guru/ilmu), yaitu tidak fokus mendengarkan dan malah menyibukkan diri dengan gadget. Sikap yang benar: menyingkirkan tas dan mempersilakan jamaah lain duduk, menonaktifkan suara ponsel atau menyimpannya di dalam saku, mendengarkan paparan guru dengan takzim, mencatat poin penting, dan bertanya dengan sopan jika ada materi yang belum dipahami."
    },
    {
      judul: "Studi Kasus 3: Kesenjangan Antara Pintar Akademik dengan Ibadah Shalat",
      deskripsiKasus: "Rian adalah juara olimpiade sains di sekolahnya. Namun, ia sering mengabaikan panggilan adzan shalat dzuhur dan ashar di mushalla sekolah dengan alasan sedang sibuk mengerjakan soal latihan sains. Rian menganggap bahwa belajar sains sudah merupakan bentuk ibadah, sehingga tidak mengapa jika sering meninggalkan atau menunda-nunda shalat fardhu.",
      pertanyaanDiskusi: "Bagaimana cara meluruskan pemahaman Rian dengan merujuk pada profil penuntut ilmu sejati (Qanit Lail) dalam Q.S. Az-Zumar: 9? Mengapa sains dan ibadah fardhu tidak boleh dipertentangkan?",
      solusiIslami: "Pemahaman Rian keliru. Dalam Islam, menuntut ilmu memang ibadah, tetapi tidak boleh menggugurkan kewajiban fardhu 'ain seperti shalat lima waktu. Q.S. Az-Zumar: 9 justru melukiskan bahwa puncak kemuliaan orang berilmu adalah ketika ia 'qanitun ana'al laili sajidan wa qa'ima' (tunduk beribadah sujud dan berdiri di waktu malam). Shalat adalah tiang agama dan penyuci jiwa agar ilmu yang dimiliki tidak melahirkan kesombongan. Ilmuwan muslim sejati seperti Ibnu Sina justru mendirikan shalat sunnah dan berdoa memohon petunjuk Allah setiap kali menghadapi kebuntuan rumus ilmiah yang rumit."
    }
  ],
  instrumenMuhasabah: [
    {
      indikator: "1. Keikhlasan Niat Belajar",
      penjelasan: "Saya meluruskan niat menuntut ilmu semata-mata mengharap ridha Allah Swt. dan memberantas kebodohan, bukan demi pamer atau pujian manusia."
    },
    {
      indikator: "2. Adab dan Tawadhu' kepada Guru",
      penjelasan: "Saya senantiasa menghormati bapak/ibu guru, menyimak penjelasan dengan fokus, tidak memotong perkataan, dan mendoakan kebaikan bagi mereka."
    },
    {
      indikator: "3. Disiplin & Anti-Mencontek",
      penjelasan: "Saya mengerjakan tugas dan ujian dengan jujur, tidak menyalin tugas teman, dan tidak memanfaatkan teknologi AI untuk melakukan kecurangan."
    },
    {
      indikator: "4. Gemar Berbagi Ilmu (Tutor Sebaya)",
      penjelasan: "Saya bersedia mengajarkan teman yang kesulitan memahami pelajaran tanpa merasa sombong atau takut tersaingi prestasinya."
    },
    {
      indikator: "5. Budaya Literasi Membaca Harian",
      penjelasan: "Saya menyisihkan waktu minimal 30 menit setiap hari untuk membaca buku literatur bermanfaat dan membatasi penggunaan media sosial yang nirfaedah."
    },
    {
      indikator: "6. Keseimbangan Ibadah dan Belajar",
      penjelasan: "Saya tidak pernah menunda shalat fardhu karena alasan belajar, dan membiasakan diri bangun malam untuk shalat tahajud memohon keberkahan ilmu."
    },
    {
      indikator: "7. Sikap Toleran dan Melapangkan Majelis",
      penjelasan: "Saya senang memberi tempat duduk, berbagi ruang belajar, dan menciptakan suasana kelas yang kondusif bagi seluruh teman-teman."
    },
    {
      indikator: "8. Kritis Menghadapi Informasi (Tabayyun)",
      penjelasan: "Saya memeriksa kebenaran data dan rujukan sebelum meyakini atau membagikan berita agar terhindar dari fitnah dan kabar bohong (hoaks)."
    }
  ],
  kuisHots: [
    {
      id: "hots-k9-b1-1",
      nomor: 1,
      kasus: "Dalam sebuah musyawarah kelas yang padat, beberapa pengurus OSIS yang baru selesai bertugas datang ke ruangan. Sebagian siswa enggan menggeser tempat duduknya dan membiarkan mereka berdiri di pintu. Seorang siswa bernama Ahmad segera merapikan tasnya, bergeser merapatkan barisan, dan mempersilakan temannya duduk.",
      pertanyaan: "Berdasarkan Q.S. Al-Mujādilah [58]: 11, balasan Ilahi yang dijanjikan bagi sikap Ahmad yang melapangkan majelis adalah...",
      pilihan: [
        "Mendapatkan piagam penghargaan sebagai siswa teladan dari pihak sekolah",
        "Allah Swt. akan melapangkan urusan, rezeki, hati, dan tempatnya di surga kelak",
        "Dibebaskan dari kewajiban mengikuti ujian dan tugas-tugas pelajaran",
        "Mendapatkan jaminan kekayaan materi yang berlimpah ruah secara instan"
      ],
      kunciJawaban: 1,
      pembahasan: "Q.S. Al-Mujādilah [58]: 11 secara eksplisit menyatakan kaidah balasan setimpal: 'fafsaḥū yafsaḥillāhu lakum' (maka lapangkanlah, niscaya Allah akan memberi kelapangan untukmu). Kelapangan ini mencakup kelapangan hati, kelapangan pintu rezeki dan kemudahan urusan di dunia, serta kelapangan tempat di surga."
    },
    {
      id: "hots-k9-b1-2",
      nomor: 2,
      kasus: "Perhatikan lafaz ayat berikut dari Q.S. Al-Mujādilah [58]: 11:\n'...يَفْسَحِ اللّٰهُ لَكُمْۚ وَاِذَا قِيْلَ انْشُزُوْا فَانْشُزُوْا...'\nPada lafaz 'لَكُمْۚ وَاِذَا', terdapat hukum bacaan Mim Sukun.",
      pertanyaan: "Hukum bacaan mim sukun pada lafaz tersebut beserta alasan dan tingkat kehati-hatiannya adalah...",
      pilihan: [
        "Ikhfa Syafawi, karena mim sukun bertemu huruf Wawu, dibaca dengung 2 harakat",
        "Idgham Mimi, karena mim sukun melebur ke dalam huruf Wawu dengan tasydid",
        "Idzhar Syafawi, karena mim sukun bertemu Wawu, harus dibaca sangat jelas dan tegas (Asyaddu Izhhār) tanpa dengung",
        "Iqlab Syafawi, karena mim sukun berubah bunyinya menjadi nun sukun yang disamarkan"
      ],
      kunciJawaban: 2,
      pembahasan: "Hukumnya adalah Idzhar Syafawi karena Mim Sukun bertemu huruf Wawu (و). Para ulama tajwid memberikan peringatan khusus (Asyaddu Izhhār / sangat diperjelas) ketika mim sukun bertemu Wawu dan Fa' agar pembaca tidak tergelincir membacanya dengung/samar karena kesamaan makhraj bibir (syafatain)."
    },
    {
      id: "hots-k9-b1-3",
      nomor: 3,
      kasus: "Dalam Q.S. Az-Zumar [39]: 9, Allah Swt. mengajukan pertanyaan retoris: 'Katakanlah, apakah sama orang-orang yang mengetahui dengan orang-orang yang tidak mengetahui?'. Di ujung ayat disebutkan: 'Innamā yatażakkaru ulul-albāb'.",
      pertanyaan: "Karakter utama dari golongan 'Ulul Albab' berdasarkan ayat tersebut yang membedakannya dari orang awam adalah...",
      pilihan: [
        "Selalu memenangkan setiap perdebatan ilmiah dan gemar merendahkan orang bodoh",
        "Memadukan ketajaman nalar intelektual dengan ketundukan ibadah malam (qanit), rasa takut azab, dan harap rahmat Ilahi",
        "Hanya fokus pada penelitian laboratorium tanpa perlu peduli dengan ibadah shalat fardhu",
        "Menghafal ribuan teori sains semata-mata demi mengejar gelar kehormatan duniawi"
      ],
      kunciJawaban: 1,
      pembahasan: "Q.S. Az-Zumar [39]: 9 melukiskan karakter sejati Ulul Albab yaitu mereka yang senantiasa qanit (tunduk beribadah di waktu malam dengan sujud dan berdiri), menyeimbangkan rasa khauf (takut azab akhirat) dan raja' (harap rahmat Allah), sehingga ilmu yang dimiliki mengantarkannya pada ketakwaan hakiki."
    },
    {
      id: "hots-k9-b1-4",
      nomor: 4,
      kasus: "Perhatikan komparasi hadits tentang penuntut ilmu:\n(1) H.R. Ibnu Majah 224: 'Menuntut ilmu itu fardhu bagi setiap muslim'\n(2) H.R. Abu Dawud 3641: 'Keutamaan orang berilmu atas ahli ibadah laksana bulan purnama atas bintang-bintang'",
      pertanyaan: "Mengapa Rasulullah Saw. mengumpamakan kemuliaan orang berilmu laksana cahaya bulan purnama sedangkan ahli ibadah laksana bintang?",
      pilihan: [
        "Karena orang berilmu lebih kaya dan memiliki kedudukan sosial lebih tinggi daripada ahli ibadah",
        "Karena cahaya bintang terlalu redup dan tidak memiliki fungsi apapun di langit malam",
        "Karena manfaat ibadah ahli ibadah hanya terbatas untuk dirinya sendiri, sedangkan pancaran ilmu menerangi dan membimbing banyak manusia menuju kebenaran",
        "Karena ahli ibadah yang tidak bersekolah tidak akan pernah diampuni dosa-dosanya oleh Allah Swt."
      ],
      kunciJawaban: 2,
      pembahasan: "Syarah hadits menjelaskan bahwa ahli ibadah tanpa ilmu hanya menyinari dirinya sendiri (laksana bintang kecil), sedangkan orang berilmu laksana bulan purnama yang sinarnya melimpah menerangi sekelilingnya, menuntun umat keluar dari kegelapan kebodohan menuju petunjuk kebenaran."
    },
    {
      id: "hots-k9-b1-5",
      nomor: 5,
      kasus: "Seorang siswa bernama Danu sangat mahir menggunakan tools generator AI untuk membuat makalah tugas PAI. Namun, Danu hanya copy-paste tanpa membaca ulang, tanpa memeriksa kebenaran dalil Al-Qur'an yang dihasilkan, dan tanpa mencantumkan sumber rujukan.",
      pertanyaan: "Refleksi kritis yang paling tepat berdasarkan hakikat penuntut ilmu dalam Q.S. Al-Mujādilah: 11 dan Q.S. Az-Zumar: 9 terhadap kebiasaan Danu adalah...",
      pilihan: [
        "Danu adalah siswa yang sangat cerdas dan efisien karena memanfaatkan kemajuan teknologi secara maksimal",
        "Tindakan Danu sah-sah saja karena yang terpenting adalah tugas selesai tepat waktu dan mendapat nilai dari guru",
        "Danu kehilangan keberkahan proses belajar dan adab keilmuan; ia harus menerapkan tabayyun, meneliti keabsahan dalil, dan menjaga integritas kejujuran karya",
        "Pihak sekolah sebaiknya melarang total penggunaan komputer dan internet bagi seluruh siswa agar tidak ada yang malas"
      ],
      kunciJawaban: 2,
      pembahasan: "Esensi menuntut ilmu dalam Islam adalah proses internalisasi nilai dan pencarian kebenaran (tabayyun). Menggunakan AI secara membabi-buta tanpa memeriksa dalil dan tanpa kejujuran ilmiah menghilangkan keberkahan ilmu serta menjauhkan siswa dari sifat Ulul Albab yang teliti dan bertakwa kepada Allah Yang Maha Meneliti (Khabir)."
    }
  ]
};
