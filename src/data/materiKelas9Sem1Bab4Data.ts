export interface DalilPenyembelihanItem {
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

export interface HaditsPenyembelihanItem {
  id: string;
  perawi: string;
  nomorHadits: string;
  tema: string;
  teksArab: string;
  terjemahan: string;
  pelajaranKunci: string;
}

export interface KetentuanFikihItem {
  id: string;
  aspek: string;
  deskripsi: string;
  landasanHukum: string;
  syaratSah: string[];
  catatanPenting: string;
}

export interface KomparasiKurbanAkikahItem {
  indikator: string;
  kurban: string;
  akikah: string;
  keteranganSyariat: string;
}

export interface UratLeherItem {
  namaUrat: string;
  namaBiologi: string;
  fungsiFisiologis: string;
  hukumPemotongan: 'Wajib Terputus' | 'Sangat Dianjurkan (Sempurna)';
  dampakIlmiah: string;
}

export interface StudiKasusPenyembelihanItem {
  id: string;
  judul: string;
  fenomenaModern: string;
  dilemaFiqih: string;
  fatwaUlama: string;
  solusiPraktis: string[];
}

export interface KuisHotsPenyembelihanItem {
  id: string;
  pertanyaan: string;
  pilihan: string[];
  kunciJawaban: number;
  pembahasan: string;
}

export interface MuhasabahPenyembelihanItem {
  id: number;
  indikator: string;
  aspek: 'Ketaatan Berkorban' | 'Kepedulian Sosial' | 'Adab & Kasih Sayang Hewan' | 'Keluarga & Syukur';
  deskripsiRefleksi: string;
}

export const MATERI_KELAS9_SEM1_BAB4 = {
  header: {
    grade: 'Kelas IX',
    semester: 'Semester 1',
    chapterNumber: 4,
    title: 'Menerapkan Ketentuan Penyembelihan Hewan, serta Kurban dan Akikah',
    cpElement: 'Fikih',
    subJudul: 'Meneladani Ketundukan Nabiyullah Ibrahim AS, Menghayati Fikih Adz-Dzabh yang Berperikehewanan, dan Berbagi Kebahagiaan Sosial',
    tagline: 'Dari Ketajaman Bilah yang Penuh Ihsan hingga Keikhlasan Taqarrub Menuju Rida Allah Swt.'
  },

  pengantar: {
    paragraf1: 'Agama Islam adalah risalah rahmatan lil \'alamin yang mengatur seluruh aspek kehidupan manusia dengan sangat detail dan berkeadaban tinggi, termasuk dalam urusan mengonsumsi daging hewan dan mempersembahkan ibadah kurban maupun akikah. Islam tidak membiarkan proses pengambilan nyawa hewan ternak dilakukan secara semena-mena, kejam, atau menyiksa. Syariat menetapkan hukum adz-dzabh (penyembelihan) dengan prinsip ihsan (kebaikan dan kasih sayang tertinggi) agar hewan tidak merasakan sakit berkepanjangan dan daging yang dihasilkan higienis, suci, serta halal dikonsumsi.',
    paragraf2: 'Di sisi lain, ibadah kurban (udh-hiyyah) dan akikah (\'aqiqah) merupakan dua syiar agung dalam fikih Islam yang berakar dari keteladanan Nabi Ibrahim AS dan Nabi Ismail AS. Kurban menjadi instrumen taqarrub (mendekatkan diri kepada Allah) sekaligus perekat solidaritas sosial dengan menyantuni fakir miskin, sedangkan akikah menjadi ungkapan rasa syukur atas kelahiran sang buah hati serta penebus ketergadaian anak agar tumbuh menjadi generasi saleh dan dilindungi dari godaan setan.',
    tujuanPembelajaran: [
      'Menjelaskan ketentuan, hakikat, dan dalil naqli penyembelihan hewan (adz-dzabh/an-nahr) sesuai tuntunan syariat Islam.',
      'Membedakan syarat penyembelih, syarat hewan yang disembelih, syarat alat penyembelih, dan rukun penyembelihan.',
      'Mengidentifikasi 4 urat saluran leher yang wajib terputus (hulqum, mari\', dan wadajain) serta adab sunnah penuh ihsan saat menyembelih.',
      'Menganalisis perbandingan komprehensif antara ibadah kurban dan akikah dari aspek hukum, waktu, jenis hewan, dan tata cara pembagian dagingnya.',
      'Mengevaluasi ketentuan keabsahan hewan kurban/akikah (kriteria musinnah/jadz\'ah, bebas 4 cacat fisik menurut Hadits Nabi).',
      'Menghayati hikmah spiritual, sosial, dan higienitas ilmiah di balik penyembelihan hewan, kurban, dan akikah dalam kehidupan bermasyarakat modern.'
    ]
  },

  // ==========================================
  // BAGIAN 1: KETENTUAN PENYEMBELIHAN HEWAN, KURBAN, & AKIKAH
  // ==========================================
  dalilAlQuran: [
    {
      id: 'dalil-1',
      surah: 'Al-Kausar',
      ayatNomor: '1-3',
      namaSurah: 'Q.S. Al-Kautsar',
      artiSurah: 'Nikmat yang Berlimpah',
      teksArab: 'إِنَّآ أَعْطَيْنَـٰكَ ٱلْكَوْثَرَ ﴿١﴾ فَصَلِّ لِرَبِّكَ وَٱنْحَرْ ﴿٢﴾ إِنَّ شَانِئَكَ هُوَ ٱلْأَبْتَرُ ﴿٣﴾',
      transliterasi: 'Innā a\'ṭainākal-kauṡar. Fa ṣalli lirabbika wanḥar. Inna syāni\'aka huwal-abtar.',
      terjemahan: 'Sungguh, Kami telah memberimu (Muhammad) nikmat yang banyak. Maka laksanakanlah shalat karena Tuhanmu, dan berkurbanlah (sembelihlah hewan kurban). Sungguh, orang-orang yang membencimu dialah yang terputus (dari rahmat Allah).',
      kandunganPokok: [
        'Perintah shalat Idul Adha dan berkurban (an-nahr) disandingkan sebagai dua ibadah agung penghambaan diri kepada Allah.',
        'Kurban merupakan manifestasi rasa syukur tertinggi atas limpahan karunia Allah yang tak terhingga.',
        'Penyembelihan kurban harus dimurnikan semata-mata karena perintah dan rida Allah (ikhlash lillahi Ta\'ala).'
      ],
      audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/108.mp3'
    },
    {
      id: 'dalil-2',
      surah: 'Al-An\'am',
      ayatNomor: '162-163',
      namaSurah: 'Q.S. Al-An\'am',
      artiSurah: 'Binatang Ternak',
      teksArab: 'قُلْ إِنَّ صَلَاتِى وَنُسُكِى وَمَحْيَاىَ وَمَمَاتِى لِلَّهِ رَبِّ ٱلْعَـٰلَمِينَ ﴿١٦٢﴾ لَا شَرِيكَ لَهُۥ ۖ وَبِذَٰلِكَ أُمِرْتُ وَأَنَا۠ أَوَّلُ ٱلْمُسْلِمِينَ ﴿١٦٣﴾',
      transliterasi: 'Qul inna ṣalātī wa nusukī wa maḥyāya wa mamātī lillāhi rabbil-\'ālamīn. Lā syarīka lahū wa biżālika umirtu wa ana awwalul-muslimīn.',
      terjemahan: 'Katakanlah (Muhammad), "Sesungguhnya shalatku, ibadahku (penyembelihanku), hidupku dan matiku hanyalah untuk Allah, Tuhan seluruh alam, tidak ada sekutu bagi-Nya; dan demikianlah yang diperintahkan kepadaku dan aku adalah orang yang pertama-tama berserah diri (muslim)."',
      kandunganPokok: [
        'Kata «nusukī» ditafsirkan oleh para mufassir sebagai ibadah penyembelihan kurban dan sembelihan manasik haji.',
        'Menyembelih hewan dengan menyebut nama selain Allah (seperti untuk sesajen berhala, penunggu pohon, atau makhluk halus) adalah perbuatan syirik akbar yang mengharamkan daging sembelihan.',
        'Totalitas kepasrahan hidup, mati, dan persembahan sembelihan hanya demi mengagungkan keesaan Allah Swt.'
      ],
      audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/6.mp3'
    },
    {
      id: 'dalil-3',
      surah: 'Al-Hajj',
      ayatNomor: '34',
      namaSurah: 'Q.S. Al-Hajj',
      artiSurah: 'Haji',
      teksArab: 'وَلِكُلِّ أُمَّةٍ جَعَلْنَا مَنسَكًا لِّيَذْكُرُوا۟ ٱسْمَ ٱللَّهِ عَلَىٰ مَا رَزَقَهُم مِّنۢ بَهِيمَةِ ٱلْأَنْعَـٰمِ ۗ فَإِلَـٰهُكُمْ إِلَـٰهٌ وَٰحِدٌ فَلَهُۥٓ أَسْلِمُوا۟ ۗ وَبَشِّرِ ٱلْمُخْبِتِينَ ﴿٣٤﴾',
      transliterasi: 'Wa likulli ummatin ja\'alnā mansakal liyażkurusmallāhi \'alā mā razaqahum mim bahīmatil-an\'ām, fa ilāhukum ilāhuw wāḥidun falahū aslimū, wa basysyiril-mukhbitīn.',
      terjemahan: 'Dan bagi setiap umat telah Kami syariatkan penyembelihan (kurban), agar mereka menyebut nama Allah atas rezeki yang dikaruniakan-Nya kepada mereka berupa hewan ternak. Maka Tuhanmu ialah Tuhan Yang Maha Esa, karena itu berserahdirilah kepada-Nya. Dan sampaikanlah kabar gembira kepada orang-orang yang tunduk patuh (kepada Allah).',
      kandunganPokok: [
        'Syariat menyembelih hewan ternak (bahīmatul an\'ām: unta, sapi, kerbau, kambing/domba) telah diberlakukan pada setiap umat bertauhid sepanjang sejarah kenabian.',
        'Kewajiban tasmiyah (menyebut nama Allah saat menyembelih) sebagai simbol bahwa manusia mengambil nyawa makhluk atas izin Sang Pencipta.',
        'Kurban melatih ketundukan hati orang-orang mukbitīn (orang yang rendah hati dan tawadhu\' di hadapan hukum Allah).'
      ],
      audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/22.mp3'
    },
    {
      id: 'dalil-4',
      surah: 'Al-Hajj',
      ayatNomor: '37',
      namaSurah: 'Q.S. Al-Hajj',
      artiSurah: 'Haji',
      teksArab: 'لَن يَنَالَ ٱللَّهَ لُحُومُهَا وَلَا دِمَآؤُهَا وَلَـٰكِن يَنَالُهُ ٱلتَّقْوَىٰ مِنكُمْ ۚ كَذَٰلِكَ سَخَّرَهَا لَكُمْ لِتُكَبِّرُوا۟ ٱللَّهَ عَلَىٰ مَا هَدَىٰكُمْ ۗ وَبَشِّرِ ٱلْمُحْسِنِينَ ﴿٣٧﴾',
      transliterasi: 'Lay yanālallāha luḥūmuhā wa lā dimā\'uhā wa lākiy yanāluhut-taqwā minkum, każālika sakhkharahā lakum litukabbirullāha \'alā mā hadākum, wa basysyiril-muḥsinīn.',
      terjemahan: 'Daging (hewan kurban) dan darahnya itu sekali-kali tidak akan sampai kepada Allah, tetapi yang sampai kepada-Nya adalah ketakwaan kamu. Demikianlah Dia menundukkannya untukmu agar kamu mengagungkan Allah atas petunjuk yang Dia berikan kepadamu. Dan sampaikanlah kabar gembira kepada orang-orang yang berbuat baik.',
      kandunganPokok: [
        'Esensi ibadah kurban bukanlah tumpahan darah atau gundukan daging, melainkan ketulusan niat, kepatuhan, dan ketakwaan hati shohibul qurban.',
        'Membantah tradisi jahiliyah kuno yang melumuri dinding Ka\'bah dengan darah sembelihan berhala.',
        'Pemberian kabar gembira bagi al-muḥsinīn (orang yang berbuat ihsan dalam menyembelih dan membagikan daging kepada sesama).'
      ],
      audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/22.mp3'
    }
  ],

  haditsShahih: [
    {
      id: 'hadits-1',
      perawi: 'HR. Muslim (No. 1955)',
      nomorHadits: 'Shahih Muslim No. 1955 dari Syaddad bin Aus r.a.',
      tema: 'Kewajiban Berlaku Ihsan dan Menajamkan Pisau saat Menyembelih',
      teksArab: 'إِنَّ اللَّهَ كَتَبَ الإِحْسَانَ عَلَى كُلِّ شَيْءٍ فَإِذَا قَتَلْتُمْ فَأَحْسِنُوا الْقِتْلَةَ وَإِذَا ذَبَحْتُمْ فَأَحْسِنُوا الذَّبْحَ وَلْيُحِدَّ أَحَدُكُمْ شَفْرَتَهُ وَلْيُرِحْ ذَبِيحَتَهُ',
      terjemahan: 'Sesungguhnya Allah mewajibkan berlaku ihsan (berbuat baik) dalam segala hal. Maka jika kamu membunuh, bunuhlah dengan cara yang baik, dan jika kamu menyembelih, sembelihlah dengan cara yang baik. Hendaklah salah seorang di antara kalian menajamkan mata pisaunya dan menenangkan (memberi rasa nyaman) pada hewan sembelihannya.',
      pelajaranKunci: 'Landasan emas prinsip animal welfare (kesejahteraan hewan) dalam syariat Islam: dilarang menyiksa hewan dan wajib mengasah pisau setajam mungkin di tempat yang tidak terlihat oleh hewan.'
    },
    {
      id: 'hadits-2',
      perawi: 'HR. At-Tirmidzi (No. 1522) & Abu Dawud (No. 2838)',
      nomorHadits: 'Sunan At-Tirmidzi No. 1522 dari Samurah bin Jundub r.a.',
      tema: 'Ketentuan Akikah Anak dan Waktu Pelaksanaannya',
      teksArab: 'كُلُّ غُلاَمٍ رَهِينَةٌ بِعَقِيقَتِهِ تُذْبَحُ عَنْهُ يَوْمَ سَابِعِهِ وَيُحْلَقُ وَيُسَمَّى',
      terjemahan: 'Setiap anak tergadai dengan akikahnya, yang disembelihkan (hewan) untuknya pada hari ketujuh (dari kelahirannya), dicukur rambut (kepalanya), dan diberi nama.',
      pelajaranKunci: 'Akikah merupakan sunnah mu\'akkadah yang berfungsi menebus ketergadaian anak agar tumbuh sehat, terhindar dari marabahaya, serta disunnahkan dicukur rambutnya dan diberi nama yang baik.'
    },
    {
      id: 'hadits-3',
      perawi: 'HR. Al-Bukhari (No. 5558) & Muslim (No. 1966)',
      nomorHadits: 'Shahih Bukhari & Muslim dari Anas bin Malik r.a.',
      tema: 'Praktik Langsung Rasulullah SAW saat Menyembelih Hewan Kurban',
      teksArab: 'ضَحَّى النَّبِيُّ صلى الله عليه وسلم بِكَبْشَيْنِ أَمْلَحَيْنِ أَقْرَنَيْنِ ذَبَحَهُمَا بِيَدِهِ وَسَمَّى وَكَبَّرَ وَوَضَعَ رِجْلَهُ عَلَى صِفَاحِهِمَا',
      terjemahan: 'Nabi saw. berkurban dengan dua ekor domba jantan yang amlah (berwarna putih bercampur hitam), bertanduk bagus. Beliau menyembelih keduanya dengan tangan beliau sendiri, membaca basmalah dan bertakbir, serta meletakkan kaki beliau di atas sisi leher kedua domba tersebut.',
      pelajaranKunci: 'Sunnah utama menyembelih kurban dengan tangan sendiri jika mampu, memilih hewan jantan bertanduk yang gagah, membaringkan di sisi kiri, membaca Bismillahi Allahu Akbar, dan menahan hewan dengan penuh kasih.'
    },
    {
      id: 'hadits-4',
      perawi: 'HR. Abu Dawud (No. 2802) & At-Tirmidzi (No. 1497)',
      nomorHadits: 'Sunan Abu Dawud No. 2802 dari Al-Barra\' bin \'Azib r.a.',
      tema: '4 Cacat Fisik yang Menyebabkan Hewan Tidak Sah Dijadikan Kurban/Akikah',
      teksArab: 'أَرْبَعٌ لاَ تَجُوزُ فِي الأَضَاحِيِّ: الْعَوْرَاءُ الْبَيِّنُ عَوَرُهَا، وَالْمَرِيضَةُ الْبَيِّنُ مَرَضُهَا، وَالْعَرْجَاءُ الْبَيِّنُ ظَلْعُهَا، وَالْكَسِيرَةُ الَّتِي لاَ تُنْقِي',
      terjemahan: 'Ada empat macam cacat yang tidak boleh ada pada hewan kurban: (1) yang buta sebelah dan jelas kebutaannya, (2) yang sakit dan jelas sakitnya, (3) yang pincang dan jelas kepincangannya, dan (4) yang sangat kurus hingga tidak memiliki sumsum tulang.',
      pelajaranKunci: 'Standar mutu dan kesehatan hewan kurban/akikah sangat ketat: hewan harus prima, bugar, tidak cacat parah, dan berdaging cukup sebagai bentuk persembahan terbaik kepada Allah Swt.'
    },
    {
      id: 'hadits-5',
      perawi: 'HR. Ibnu Majah (No. 3123) & Ahmad (No. 8273)',
      nomorHadits: 'Sunan Ibnu Majah No. 3123 dari Abu Hurairah r.a.',
      tema: 'Peringatan Keras bagi Orang Mampu yang Enggan Berkurban',
      teksArab: 'مَنْ كَانَ لَهُ سَعَةٌ وَلَمْ يُضَحِّ فَلاَ يَقْرَبَنَّ مُصَلاَّنَا',
      terjemahan: 'Barangsiapa yang memiliki kelapangan rezeki (mampu), namun ia tidak mau berkurban, maka janganlah sekali-kali ia mendekati tempat shalat kami.',
      pelajaranKunci: 'Teguran moral yang sangat keras dari Rasulullah SAW kepada orang yang berharta cukup tetapi kikir dan enggan menyisihkan rezekinya untuk menyembelih hewan kurban.'
    }
  ],

  // ==========================================
  // TABEL PERBANDINGAN LENGKAP: KURBAN VS AKIKAH
  // ==========================================
  komparasiKurbanAkikah: [
    {
      indikator: 'Pengertian Istilah',
      kurban: 'Udh-hiyyah: Menyembelih hewan ternak tertentu pada hari Idul Adha dan hari Tasyrik dengan niat taqarrub (mendekatkan diri) kepada Allah Swt.',
      akikah: '\'Aqīqah: Secara bahasa berarti memotong rambut bayi; secara syariat menyembelih kambing/domba pada hari ke-7 kelahiran anak sebagai wujud syukur kepada Allah.',
      keteranganSyariat: 'Kurban berkaitan dengan peristiwa tahunan umat Islam, sedangkan akikah berkaitan dengan peristiwa kelahiran anak dalam keluarga.'
    },
    {
      indikator: 'Hukum Syariat',
      kurban: 'Sunnah Mu\'akkadah (sangat dianjurkan) bagi yang berkemampuan materi. Bisa bernilai Wajib apabila dinazarkan.',
      akikah: 'Sunnah Mu\'akkadah bagi orang tua yang melahirkan anak dan memiliki kemampuan finansial. Wajib bila dinazarkan.',
      keteranganSyariat: 'Sebagian ulama (seperti Mazhab Hanafi) memfatwakan kurban berstatus wajib bagi penduduk kota yang mampu.'
    },
    {
      indikator: 'Waktu Pelaksanaan',
      kurban: 'Hanya 4 hari dalam setahun: Tanggal 10 Dzulhijjah (setelah shalat Idul Adha) sampai terbenam matahari tanggal 13 Dzulhijjah (akhir hari Tasyrik). Menyembelih sebelum shalat Id dianggap daging biasa.',
      akikah: 'Waktu utama adalah hari ke-7 setelah kelahiran bayi. Jika belum mampu, hari ke-14 atau ke-21. Boleh kapan saja sebelum anak mencapai usia baligh.',
      keteranganSyariat: 'Kurban terikat waktu ibadah haji, akikah terikat momen kelahiran anak.'
    },
    {
      indikator: 'Jenis Hewan Ternak',
      kurban: 'Hewan ternak (Bahīmatul An\'ām): Unta, Sapi, Kerbau, Kambing, atau Domba.',
      akikah: 'Hanya dikhususkan kambing atau domba menurut mayoritas fuqaha (walaupun sebagian mazhab membolehkan sapi/unta).',
      keteranganSyariat: 'Kurban lebih variatif jenis hewannya menyesuaikan kearifan dan kemampuan pekurban.'
    },
    {
      indikator: 'Ketentuan Jumlah / Porsi',
      kurban: '1 ekor kambing/domba untuk 1 orang (boleh diniatkan pahalanya untuk sekeluarga). 1 ekor sapi/kerbau/unta untuk patungan 7 orang.',
      akikah: 'Anak laki-laki: disunnahkan 2 ekor kambing/domba yang sepadan. Anak perempuan: disunnahkan 1 ekor kambing/domba.',
      keteranganSyariat: 'Hikmah perbedaan akikah laki-laki dan perempuan adalah dorongan syariat dan tradisi masyarakat Arab tanpa mengurangi kemuliaan derajat anak perempuan.'
    },
    {
      indikator: 'Syarat Usia Hewan (Musinnah)',
      kurban: '• Unta: minimal 5 tahun masuk tahun ke-6.\n• Sapi/Kerbau: minimal 2 tahun masuk tahun ke-3.\n• Kambing Jawa: minimal 1 tahun masuk tahun ke-2.\n• Domba (Jadz\'ah): minimal 6 bulan s.d. 1 tahun (berganti gigi seri).',
      akikah: 'Sama persis dengan syarat usia hewan kurban (kambing minimal 1 tahun, domba minimal 6 bulan bertanduk/berganti gigi seri).',
      keteranganSyariat: 'Kedua ibadah menuntut hewan cukup umur agar berdaging padat dan bergizi tinggi.'
    },
    {
      indikator: 'Tata Cara Pembagian Daging',
      kurban: 'Sunnah dibagi dalam kondisi MENTAH (segar):\n• 1/3 untuk shohibul qurban dan keluarganya.\n• 1/3 dihadiahkan kepada kerabat/tetangga.\n• 1/3 disedekahkan kepada fakir miskin dhuafa.',
      akikah: 'Sunnah dibagi dalam kondisi SUDAH DIMASAK MATANG (disunnahkan rasa manis sebagai tafa\'ul / doa kebaikan akhlak sang anak), diantarkan ke rumah tetangga atau fakir miskin.',
      keteranganSyariat: 'Daging kurban mentah memberi kebebasan mustahik mengolahnya, sedangkan akikah matang memudahkan orang langsung menyantapnya dalam suasana syukuran.'
    },
    {
      indikator: 'Upah Jagal / Penjualan Kulit',
      kurban: 'HARAM mutlak menjual daging, kulit, tanduk, atau kotoran kurban. Jagal TIDAK BOLEH diupahi dari bagian kurban (upah jagal dari kantong terpisah).',
      akikah: 'Sama, tidak boleh diperjualbelikan untuk keuntungan komersial. Namun kulit akikah boleh disedekahkan atau dimanfaatkan pribadi.',
      keteranganSyariat: 'Menjual kulit kurban dapat membatalkan pahala ibadah kurban menjadi sekadar sembelihan biasa.'
    }
  ],

  // ==========================================
  // BAGIAN 2: SYARAT, RUKUN, & TATA CARA PENYEMBELIHAN
  // ==========================================
  rukunPenyembelihan: [
    {
      id: 'rukun-1',
      aspek: '1. Orang yang Menyembelih (Adz-Dzābiḥ)',
      deskripsi: 'Orang yang mengeksekusi penyembelihan harus memenuhi kriteria syariat.',
      landasanHukum: 'Q.S. Al-Ma\'idah [5]: 5',
      syaratSah: [
        'Beragama Islam atau Ahli Kitab (Yahudi/Nasrani yang berpegang pada kitab aslinya dan tidak menyebut nama selain Allah).',
        'Berakal sehat (tidak gila, tidak mabuk, tidak hilang kesadaran).',
        'Mumayyiz (dapat membedakan yang baik dan buruk, minimal anak yang sudah mengerti adab memotong).',
        'Mampu melihat (tidak buta total demi keselamatan dan ketepatan leher hewan).',
        'Menyembelih semata-mata karena Allah, bukan untuk sesajen atau makhluk halus.'
      ],
      catatanPenting: 'Sembelihan orang murtad, penyembah berhala/paganis, ateis, atau orang gila hukum dagingnya adalah BANGKAI yang haram dimakan.'
    },
    {
      id: 'rukun-2',
      aspek: '2. Hewan yang Disembelih (Al-Mażbūḥ)',
      deskripsi: 'Hewan yang akan dikonsumsi dagingnya harus memenuhi kriteria halal dan memiliki tanda kehidupan.',
      landasanHukum: 'Q.S. Al-Ma\'idah [5]: 3',
      syaratSah: [
        'Termasuk jenis hewan yang halal dimakan (bukan hewan buas bertaring, bercakar, atau diharamkan Al-Qur\'an).',
        'Hewan masih dalam keadaan hidup sempurna (ḥayāt mustaqirrah) saat pisau pertama kali digoreskan.',
        'Bukan hewan yang sudah mati terpukul, tercekik, jatuh, atau ditanduk sebelum disembelih.'
      ],
      catatanPenting: 'Jika hewan terluka parah namun masih ada denyut nadi dan darah masih memancar deras saat disembelih, maka sembelihannya tetap sah dan halal.'
    },
    {
      id: 'rukun-3',
      aspek: '3. Alat Penyembelih (Al-Ālah)',
      deskripsi: 'Alat pemotong harus memenuhi spesifikasi ketajaman dan material syar\'i.',
      landasanHukum: 'HR. Bukhari No. 5498 (Hadits Rafi\' bin Khadij r.a.)',
      syaratSah: [
        'Alat harus tajam sehingga dapat memotong urat leher dengan cepat tanpa menyiksa (besi, baja, tembaga, batu tajam, kaca).',
        'Dilarang keras menggunakan alat pemotong yang terbuat dari TULANG (al-\'aẓm) dan KUKU / GIGI (aẓ-ẓufr).',
        'Alat harus bersih dan steril dari zat beracun.'
      ],
      catatanPenting: 'Nabi saw. bersabda: "Alat apa saja yang dapat mengalirkan darah dan disebut nama Allah atasnya, maka makanlah, asalkan bukan gigi dan kuku. Gigi adalah tulang, sedangkan kuku adalah pisaunya orang Habasyah."'
    },
    {
      id: 'rukun-4',
      aspek: '4. Membaca Tasmiyah (Menyebut Nama Allah)',
      deskripsi: 'Pengucapan lafaz asma Allah saat menggoreskan pisau pada leher hewan.',
      landasanHukum: 'Q.S. Al-An\'am [6]: 121 («وَلَا تَأْكُلُوا مِمَّا لَمْ يُذْكَرِ اسْمُ اللَّهِ عَلَيْهِ»)',
      syaratSah: [
        'Membaca minimal «Bismillāh» (بِسْمِ اللَّهِ).',
        'Lafaz yang paling sempurna dan sunnah adalah: «Bismillāhi Allāhu Akbar» (بِسْمِ اللَّهِ وَاللَّهُ أَكْبَرُ).',
        'Bagi kurban, disunnahkan menambahkan shalawat dan doa penerimaan: «Allāhumma hāżā minka wa laka, fataqabbal minnī / min fulān».',
        'Jika penyembelih muslim lupa membaca basmalah secara tidak sengaja, sembelihannya tetap halal menurut jumhur ulama.'
      ],
      catatanPenting: 'Sengaja tidak membaca basmalah karena meremehkan syariat menyebabkan daging sembelihan haram menurut Mazhab Hanafi dan sebagian Syafi\'iyyah.'
    }
  ],

  empatUratLeher: [
    {
      namaUrat: 'Hulqūm (الحُلْقُوم)',
      namaBiologi: 'Trachea (Saluran Pernapasan)',
      fungsiFisiologis: 'Jalan masuk dan keluarnya udara/oksigen dari hidung/mulut menuju paru-paru.',
      hukumPemotongan: 'Wajib Terputus',
      dampakIlmiah: 'Memutuskan pasokan oksigen seketika sehingga hewan kehilangan kesadaran kortikal dengan cepat tanpa rasa sakit berkelanjutan.'
    },
    {
      namaUrat: 'Marī\' (المَرِيء)',
      namaBiologi: 'Esophagus (Saluran Makanan & Minuman)',
      fungsiFisiologis: 'Saluran pencernaan yang mengalirkan pakan dan air dari rongga mulut menuju lambung.',
      hukumPemotongan: 'Wajib Terputus',
      dampakIlmiah: 'Mencegah regurgitasi (muntahan isi lambung) yang dapat mengontaminasi luka sembelihan dan menjaga higienitas karkas.'
    },
    {
      namaUrat: 'Al-Wadajain: Arteri Karotis (الوَدَجَان)',
      namaBiologi: 'Arteria Carotis Communis Sinistra & Dextra',
      fungsiFisiologis: 'Dua pembuluh darah arteri utama yang memompa darah bertekanan tinggi dari jantung menuju otak.',
      hukumPemotongan: 'Wajib Terputus',
      dampakIlmiah: 'Menjatuhkan tekanan darah otak (cerebral perfusion) secara instan ke angka nol, menyebabkan hewan langsung mati rasa (analgesia alami).'
    },
    {
      namaUrat: 'Al-Wadajain: Vena Jugularis (الوَدَجَان)',
      namaBiologi: 'Vena Jugularis Interna & Externa',
      fungsiFisiologis: 'Dua pembuluh balik darah besar di sisi leher kanan dan kiri yang membawa darah dari kepala kembali ke jantung.',
      hukumPemotongan: 'Wajib Terputus',
      dampakIlmiah: 'Membuat darah memancar deras ke luar (exsanguination total), mengeluarkan mikroba darah, dan menjadikan daging empuk, higienis, serta awet disimpan.'
    }
  ],

  sunnahDanMakruh: {
    sunnahPenyembelihan: [
      'Menajamkan pisau di tempat yang terpisah dan tidak dilihat oleh hewan yang akan dipotong.',
      'Memberi makan dan minum yang cukup kepada hewan sebelum disembelih agar dalam kondisi tenang.',
      'Membaringkan hewan dengan lembut di atas lambung kirinya (agar tangan kanan penyembelih leluasa memegang pisau). Khusus unta, disunnahkan disembelih dengan posisi berdiri kaki kiri depan diikat (an-nahr).',
      'Menghadapkan leher hewan dan tubuh penyembelih ke arah kiblat.',
      'Membaca basmalah, bertakbir tiga kali («Allāhu Akbar, Allāhu Akbar, Allāhu Akbar»), dan membaca shalawat Nabi.',
      'Menggoreskan pisau dengan cepat, kuat, dan mantap dalam satu kali tarikan tanpa mencabut pisau di tengah jalan.',
      'Membiarkan darah mengalir tuntas dan menunggu hewan benar-benar mati sempurna (tidak ada gerakan refleks dan henti napas total) sebelum mulai memotong kaki atau menguliti karkas.'
    ],
    makruhDanHaram: [
      'Menyembelih dengan pisau tumpul yang mengoyak daging dan menyebabkan hewan kesakitan luar biasa (Haram/Makruh Tahrim).',
      'Mengasah pisau tepat di depan mata hewan yang hendak disembelih.',
      'Menyeret hewan dengan kasar pada tanduk atau kakinya menuju tempat pemotongan.',
      'Menyembelih hewan di hadapan hewan lain yang sedang mengantre giliran potong.',
      'Mematahkan leher hewan, memotong sumsum tulang belakang (spinal cord), atau memotong kaki sebelum hewan benar-benar mati.',
      'Menguliti atau mencelupkan hewan unggas ke air panas saat jantung masih berdenyut.',
      'Menyembelih hewan betina yang sedang bunting tua tanpa alasan darurat.'
    ]
  },

  teknikPenyembelihanModern: {
    judul: 'Fatwa MUI tentang Penyembelihan Modern & Pemingsanan (Stunning)',
    nomorFatwa: 'Fatwa MUI No. 12 Tahun 2009 tentang Standar Sertifikasi Penyembelihan Halal',
    penjelasan: 'Di Rumah Potong Hewan (RPH) modern, sering digunakan metode pemingsanan (stunning) sebelum disembelih untuk menenangkan sapi berukuran jumbo (600 kg - 1 ton). Majelis Ulama Indonesia menetapkan bahwa pemingsanan elektrik (electrical stunning) atau mekanik (pneumatic captive bolt) hukumnya BOLEH dengan syarat ketat:\n1. Alat stunning hanya membuat hewan pingsan sementara (temporary loss of consciousness), TIDAK menyebabkan hewan mati atau patah tulang tengkorak.\n2. Saat disembelih, hewan masih memiliki hayat mustaqirrah (jantung berdenyut dan darah memancar deras).\n3. Jika setelah di-stunning hewan tersebut tidak jadi disembelih, hewan tersebut masih dapat pulih hidup normal seperti sedia kala.\n4. Eksekusi penyembelihan tetap dilakukan oleh jagal muslim yang membaca basmalah dan memutus 4 urat leher.'
  },

  // ==========================================
  // BAGIAN 3: HIKMAH PENYEMBELIHAN, KURBAN, & AKIKAH
  // ==========================================
  hikmahLuhur: {
    hikmahKurban: [
      {
        nomor: 1,
        judul: 'Napak Tilas Keikhlasan Nabiyullah Ibrahim AS & Ismail AS',
        deskripsi: 'Meneladani kepasrahan mutlak Nabi Ibrahim AS saat diperintahkan menyembelih putra tercintanya Nabi Ismail AS. Kurban mendidik jiwa agar tidak menuhankan harta, anak, atau kedudukan duniawi di atas cinta kepada Allah Swt.'
      },
      {
        nomor: 2,
        judul: 'Sarana Taqarrub dan Penghapusan Dosa',
        deskripsi: 'Setiap tetes darah hewan kurban yang jatuh ke tanah akan mendatangkan ampunan dari Allah sebelum tetesan itu mengering, serta bulu-bulunya dihitung sebagai butiran pahala kebaikan (hasanah).'
      },
      {
        nomor: 3,
        judul: 'Penguatan Solidaritas dan Perbaikan Gizi Kaum Dhuafa',
        deskripsi: 'Menghadirkan kebahagiaan bagi fakir miskin yang jarang menikmati daging merah berkualitas. Kurban meruntuhkan sekat kecemburuan sosial antara golongan aghniya (kaya) dan dhuafa.'
      },
      {
        nomor: 4,
        judul: 'Menyembelih Sifat Hewani dalam Diri Manusia',
        deskripsi: 'Secara simbolis, memotong leher hewan kurban bermakna menundukkan nafsu hewani (kikir, rakus, serakah, mau menang sendiri, dan buas) agar tunduk di bawah kendali akal budi dan takwa.'
      },
      {
        nomor: 5,
        judul: 'Kendaraan dan Saksi Kebaikan di Hari Kiamat',
        deskripsi: 'Hewan kurban yang disembelih dengan ikhlas akan datang pada hari kiamat dengan tanduk, kuku, dan bulunya sebagai saksi amal saleh yang memberatkan timbangan Mizan.'
      },
      {
        nomor: 6,
        judul: 'Menghidupkan Syiar Ekonomi Umat',
        deskripsi: 'Mendorong perputaran ekonomi peternak lokal di pedesaan, membangkitkan pasar hewan, dan menggerakkan rantai pasok logistik halal nasional.'
      }
    ],

    hikmahAkikah: [
      {
        nomor: 1,
        judul: 'Menebus Ketergadaian Anak (Fakkur-Rahīnah)',
        deskripsi: 'Sesuai sabda Nabi saw., anak yang diakikahi ditebus ketergadaiannya sehingga diharapkan tumbuh dengan jiwa yang merdeka, saleh, serta mampu memberi syafaat bagi orang tuanya kelak.'
      },
      {
        nomor: 2,
        judul: 'Ungkapan Rasa Syukur atas Amanah Keturunan',
        deskripsi: 'Wujud terima kasih orang tua kepada Allah atas anugerah kelahiran buah hati yang sehat dan selamat sebagai penerus estafet dakwah Islam.'
      },
      {
        nomor: 3,
        judul: 'Perlindungan Spiritual dari Gangguan Setan',
        deskripsi: 'Penyembelihan akikah yang dibarengi dengan mencukur rambut bayi dan bersedekah perak/emas senilai timbangan rambut menjadi doa benteng perlindungan dari godaan setan.'
      },
      {
        nomor: 4,
        judul: 'Mempererat Tali Silaturahmi dengan Jamuan Masakan Manis',
        deskripsi: 'Daging akikah yang dibagikan dalam kondisi sudah dimasak manis diantarkan ke sanak famili dan tetangga untuk berbagi kebahagiaan dan mengundang doa kebaikan bagi bayi.'
      }
    ],

    hikmahIlmiahPenyembelihan: [
      {
        nomor: 1,
        judul: 'Pengeluaran Darah Maksimal (Exsanguination)',
        deskripsi: 'Pemotongan arteri karotis dan vena jugularis saat jantung masih berdenyut memompa darah keluar dari tubuh hewan hingga 80-90%. Darah adalah media utama perkembangbiakan bakteri patogen, sehingga keluarnya darah membuat daging lebih higienis dan awet.'
      },
      {
        nomor: 2,
        judul: 'Mati Rasa Cepat Berkat Terputusnya Pasokan Darah Otak',
        deskripsi: 'Penelitian neurologis modern membuktikan bahwa terputusnya kedua arteri karotis secara cepat membuat tekanan darah di otak anjlok ke nol dalam hitungan detik. Hewan kehilangan kesadaran seketika sehingga gerakan mengejang yang terjadi bukanlah rasa sakit, melainkan refleks saraf kejut kontraksi otot.'
      },
      {
        nomor: 3,
        judul: 'Pencegahan Kontaminasi Enzim Stres',
        deskripsi: 'Perlakuan ihsan (menenangkan hewan, tidak mengasah pisau di depannya) mencegah produksi hormon kortisol dan adrenalin berlebih yang dapat merusak kualitas glikogen dan menyebabkan daging menjadi keras/alot (Dark, Firm, and Dry / DFD meat).'
      }
    ]
  },

  // ==========================================
  // STUDI KASUS KONTEMPORER
  // ==========================================
  studiKasus: [
    {
      id: 'kasus-1',
      judul: 'Kurban Online & Pengalengan Daging Kurban ke Daerah Bencana 3T',
      fenomenaModern: 'Banyak lembaga amil zakat dan filantropi Islam menawarkan program "Kurban Online", di mana mudhahhi (pekurban) mentransfer dana via aplikasi, hewan dibeli dan disembelih di pelosok desa/daerah bencana, lalu dagingnya diolah menjadi kornet atau rendang kaleng steril yang tahan hingga 3 tahun.',
      dilemaFiqih: 'Apakah kurban online sah menurut syariat jika shohibul qurban tidak menyaksikan langsung penyembelihan dan dagingnya tidak dibagikan segar pada hari Tasyrik?',
      fatwaUlama: 'Fatwa MUI No. 37 Tahun 2019 tentang Pengawetan dan Pengolahan Daging Kurban: Hukumnya SAH dan BOLEH dengan akad wakalah (mewakilkan pembelian dan penyembelihan). Menunda pembagian daging kurban dalam bentuk olahan kaleng diperbolehkan demi kemaslahatan distribusi yang merata ke daerah miskin ekstrem, terluar, dan wilayah tanggap darurat bencana.',
      solusiPraktis: [
        'Pilihlah lembaga filantropi resmi yang memiliki dewan syariah dan sertifikasi jagal halal.',
        'Akad wakalah harus jelas mencantumkan nama pekurban saat penyembelihan.',
        'Penyembelihan wajib dipastikan tetap berlangsung di dalam rentang waktu tanggal 10-13 Dzulhijjah.'
      ]
    },
    {
      id: 'kasus-2',
      judul: 'Hukum Akikah Mandiri bagi Orang Dewasa yang Belum Diakikahi Semasa Bayi',
      fenomenaModern: 'Ahmad kini berusia 20 tahun dan sudah bekerja mandiri. Ia baru mengetahui bahwa ketika kecil orang tuanya yang serba kekurangan belum sempat menyembelihkan hewan akikah untuk dirinya. Ahmad ingin mengakikahi dirinya sendiri menggunakan uang hasil keringatnya.',
      dilemaFiqih: 'Apakah akikah masih berlaku setelah anak melewati usia baligh, dan bolehkah seseorang mengakikahi dirinya sendiri?',
      fatwaUlama: 'Menurut Mazhab Syafi\'i dan riwayat dari Imam Ahmad: Kewajiban sunnah akikah bagi orang tua berakhir saat anak mencapai usia baligh. Namun, ketika anak telah dewasa dan mampu, sangat dianjurkan (sunnah mustahabbah) bagi dirinya untuk mengakikahi dirinya sendiri sebagai bentuk syukur dan mencontoh Rasulullah SAW yang diriwayatkan pernah mengakikahi dirinya sendiri setelah beliau diangkat menjadi Nabi.',
      solusiPraktis: [
        'Ahmad boleh membeli 2 ekor kambing dan menyembelihnya dengan niat akikah untuk dirinya sendiri.',
        'Daging akikah dimasak dan dibagikan kepada kerabat, sahabat, serta fakir miskin.',
        'Tidak perlu mencukur rambut kepala hingga botak seperti bayi, cukup memotong sebagian rambut secara simbolis.'
      ]
    },
    {
      id: 'kasus-3',
      judul: 'Etika Lingkungan & Higienitas Pemotongan Hewan Kurban di Masjid/Sekolah',
      fenomenaModern: 'Di beberapa panitia kurban sekolah atau masjid perkampungan, hewan kurban diletakkan di tempat panas tanpa diberi minum, pisau diasah di samping sapi yang sedang diikat, darah sembelihan dibuang langsung ke selokan warga sehingga menimbulkan bau busuk dan lalat, serta limbah jeroan dicuci di sungai umum.',
      dilemaFiqih: 'Bagaimana tinjauan syariat atas pelanggaran adab penyembelihan dan pencemaran lingkungan dalam momentum ibadah kurban?',
      fatwaUlama: 'Menyiksa hewan kurban (membiarkan haus, mengasah pisau di depannya) hukumnya MAKRUH TAHANZAH hingga HARAM karena melanggar prinsip ihsan dalam Hadits Shahih Muslim. Membuang limbah darah dan kotoran ke selokan atau sungai melanggar larangan syariat tentang mencemari fasilitas umum (HR. Abu Dawud No. 26). Ibadah suci tidak boleh dinodai oleh kerusakan lingkungan (fasad fil ardh).',
      solusiPraktis: [
        'Membuat lubang penampungan darah khusus (septik darah) yang ditutup tanah atau kapur agar tidak menimbulkan bau dan lalat.',
        'Menyediakan tirai pembatas agar hewan yang antre tidak melihat proses pemotongan temannya.',
        'Menggunakan kantong plastik ramah lingkungan (besek bambu, daun pisang, atau kantong singkong biodegradable) untuk mendistribusikan daging kurban.'
      ]
    }
  ],

  // ==========================================
  // KUIS EVALUASI PENALARAN HOTS
  // ==========================================
  kuisHots: [
    {
      id: 'kuis-1',
      pertanyaan: 'Pak Burhan menyembelih seekor sapi kurban yang gemuk pada tanggal 10 Dzulhijjah pukul 06.00 pagi sebelum pelaksanaan shalat Idul Adha dimulai di masjidnya, dengan alasan agar dagingnya bisa segera dibagikan sebelum tengah hari. Bagaimanakah status hukum kurban Pak Burhan menurut syariat Islam?',
      pilihan: [
        'A. Kurbannya sah dan berpahala ganda karena menyegerakan pembagian sedekah kepada kaum dhuafa.',
        'B. Kurbannya tidak sah sebagai udh-hiyyah kurban, melainkan hanya berstatus sembelihan daging biasa untuk keluarga.',
        'C. Kurbannya sah asalkan Pak Burhan tetap melaksanakan shalat Idul Adha setelah menyembelih sapi tersebut.',
        'D. Kurbannya sah namun Pak Burhan dikenai denda membayar dam satu ekor kambing kepada fakir miskin.',
        'E. Kurbannya makruh namun tetap mendapatkan keutamaan pahala kurban sunnah mu\'akkadah.'
      ],
      kunciJawaban: 1,
      pembahasan: 'Berdasarkan Hadits Shahih Bukhari No. 5556 dari Al-Bara\' bin \'Azib r.a., Rasulullah SAW bersabda: "Barangsiapa menyembelih sebelum shalat (Idul Adha), maka sesungguhnya ia menyembelih untuk dirinya sendiri (daging biasa). Dan barangsiapa menyembelih setelah shalat, maka kurbannya telah sempurna dan ia telah mencocoki sunnah kaum muslimin." Oleh karena itu, sembelihan sebelum shalat Idul Adha tidak sah sebagai kurban.'
    },
    {
      id: 'kuis-2',
      pertanyaan: 'Dalam sebuah pelatihan juru sembelih halal (Juleha), instruktur menekankan bahwa saat menyembelih hewan unggas maupun ruminansia, ada 4 saluran leher yang harus dipastikan terpotong sempurna. Saluran yang jika terputus menyebabkan suplai oksigen ke otak langsung terhenti dan hewan kehilangan kesadaran seketika tanpa merasakan sakit berkepanjangan adalah...',
      pilihan: [
        'A. Marī\' (saluran kerongkongan makanan)',
        'B. Medula spinalis (sumsum tulang belakang leher)',
        'C. Hulqūm (saluran napas) dan sepasang Al-Wadajain (arteri karotis & vena jugularis)',
        'D. Kelenjar tiroid dan pita suara leher bagian atas',
        'E. Otot trapezius dan jaringan kulit tengkuk belakang'
      ],
      kunciJawaban: 2,
      pembahasan: 'Pemotongan Hulqum (saluran pernapasan/trakea) menghentikan aliran udara seketika, dan terputusnya sepasang Al-Wadajain (arteri karotis dan vena jugularis) langsung menjatuhkan tekanan darah otak menjadi nol dalam hitungan detik. Kombinasi ini memicu anestesi/mati rasa alami dan membuat darah memancar tuntas tanpa hewan merasakan sakit berkepanjangan.'
    },
    {
      id: 'kuis-3',
      pertanyaan: 'Keluarga Pak Rahmat dikaruniai sepasang anak kembar (satu laki-laki dan satu perempuan). Sesuai tuntunan sunnah Rasulullah SAW dalam Hadits riwayat At-Tirmidzi dan Abu Dawud, jumlah kambing yang disunnahkan untuk disembelih dalam akikah kedua anak kembar tersebut adalah...',
      pilihan: [
        'A. 2 ekor kambing (masing-masing 1 ekor untuk anak laki-laki dan perempuan)',
        'B. 4 ekor kambing (masing-masing 2 ekor untuk anak laki-laki dan perempuan)',
        'C. 3 ekor kambing (2 ekor untuk anak laki-laki dan 1 ekor untuk anak perempuan)',
        'D. 1 ekor sapi untuk kedua anak kembar tersebut secara bersamaan',
        'E. Bebas berapa saja tanpa ada batasan jumlah kambing dalam sunnah'
      ],
      kunciJawaban: 2,
      pembahasan: 'Berdasarkan sabda Rasulullah SAW: "Untuk anak laki-laki dua ekor kambing yang sepadan, dan untuk anak perempuan satu ekor kambing" (HR. Abu Dawud dan At-Tirmidzi). Maka untuk sepasang anak kembar (1 laki-laki dan 1 perempuan), disunnahkan menyembelih total 3 ekor kambing (2 untuk laki-laki + 1 untuk perempuan).'
    },
    {
      id: 'kuis-4',
      pertanyaan: 'Seorang peternak membawa lima ekor kambing ke pasar hewan kurban. Panitia masjid memeriksa fisik hewan-hewan tersebut. Manakah di antara kambing berikut yang SAH dan memenuhi syarat syariat untuk dijadikan hewan kurban?',
      pilihan: [
        'A. Kambing jantan berusia 14 bulan, tubuh kekar, namun salah satu matanya buta total akibat tertusuk dahan.',
        'B. Kambing betina berusia 15 bulan, bertubuh sangat kurus hingga tulang rusuknya menonjol dan tidak bersumsum.',
        'C. Domba jantan berusia 8 bulan yang telah bertanduk dan berganti gigi seri (jadz\'ah), aktif lincah, sehat, dan tidak cacat.',
        'D. Kambing jantan berusia 2 tahun yang kakinya pincang parah sehingga tidak mampu berjalan menuju tempat makan.',
        'E. Kambing berusia 10 bulan yang sedang terserang penyakit mulut dan kuku (PMK) berat disertai demam tinggi.'
      ],
      kunciJawaban: 2,
      pembahasan: 'Hadits riwayat Abu Dawud menegaskan 4 cacat yang menggugurkan keabsahan kurban: buta sebelah yang jelas, sakit yang parah, pincang yang jelas, dan sangat kurus tak bersumsum. Domba jadz\'ah yang berusia minimal 6 bulan s.d. 1 tahun (berganti gigi seri) dalam keadaan sehat wal afiat dan bugar adalah SAH menurut ijma para ulama.'
    },
    {
      id: 'kuis-5',
      pertanyaan: 'Panitia kurban di Masjid Baiturrahman membagikan daging kurban kepada masyarakat. Setelah semua daging dibagikan, panitia menjual kulit sapi kurban seharga Rp 500.000 kepada pengepul kulit, lalu uangnya digunakan untuk membayar upah tukang jagal profesional. Bagaimana tinjauan hukum fikih terhadap tindakan panitia tersebut?',
      pilihan: [
        'A. Tindakan panitia diperbolehkan karena upah jagal merupakan bagian dari biaya operasional ibadah kurban.',
        'B. Tindakan panitia membatalkan keabsahan kurban sebagai udh-hiyyah bagi seluruh pekurban, dan panitia wajib menggantinya.',
        'C. Tindakan panitia dilarang (haram) karena bagian kurban tidak boleh dijualbelikan maupun dijadikan upah jagal; upah jagal harus diambil dari dana kas/infak tersendiri.',
        'D. Tindakan panitia sunnah karena mengoptimalkan nilai ekonomis bagian hewan kurban yang tidak dikonsumsi.',
        'E. Tindakan panitia makruh tanzih namun uang penjualannya halal dimanfaatkan untuk konsumsi panitia.'
      ],
      kunciJawaban: 2,
      pembahasan: 'Berdasarkan Hadits Shahih Ali bin Abi Thalib r.a. (HR. Bukhari & Muslim): "Rasulullah SAW memerintahkanku mengurus unta kurban beliau... dan beliau melarangku memberikan upah kepada jagal dari bagian hewan kurban tersebut." Menjual kulit kurban atau menjadikannya sebagai upah jagal adalah HARAM menurut jumhur ulama. Upah jagal wajib dibayarkan dari uang tersendiri (kas panitia/pekurban).'
    }
  ],

  // ==========================================
  // LEMBAR REFLEKSI DIRI (MUHASABAH 8 INDIKATOR)
  // ==========================================
  muhasabah: [
    {
      id: 1,
      indikator: 'Keikhlasan Berkorban',
      aspek: 'Ketaatan Berkorban',
      deskripsiRefleksi: 'Saya bersedia menyisihkan uang saku atau menabung dengan tekun demi bisa ikut patungan kurban atau sedekah kurban tanpa pamrih pujian orang lain.'
    },
    {
      id: 2,
      indikator: 'Meneladani Ketundukan Nabi Ibrahim AS',
      aspek: 'Ketaatan Berkorban',
      deskripsiRefleksi: 'Saya berusaha mendahulukan perintah Allah Swt. (seperti shalat tepat waktu dan menuntut ilmu) daripada menuruti hawa nafsu malas bermain game.'
    },
    {
      id: 3,
      indikator: 'Kepedulian Asupan Dhuafa',
      aspek: 'Kepedulian Sosial',
      deskripsiRefleksi: 'Saya merasa bahagia ketika melihat saudara-saudara fakir miskin di sekitar lingkungan saya dapat menikmati hidangan daging yang bergizi dan lezat.'
    },
    {
      id: 4,
      indikator: 'Adab Kasih Sayang kepada Hewan (Ihsan)',
      aspek: 'Adab & Kasih Sayang Hewan',
      deskripsiRefleksi: 'Saya memperlakukan kucing, ayam, atau hewan peliharaan lainnya dengan penuh kasih sayang, memberi makan cukup, dan tidak pernah menyiksa mereka.'
    },
    {
      id: 5,
      indikator: 'Menjaga Kebersihan & Lingkungan Saat Kurban',
      aspek: 'Adab & Kasih Sayang Hewan',
      deskripsiRefleksi: 'Saya aktif membantu membersihkan area pemotongan hewan kurban di sekolah/masjid dan tidak membuang kotoran hewan sembarangan ke selokan.'
    },
    {
      id: 6,
      indikator: 'Rasa Syukur atas Amanah Keluarga',
      aspek: 'Keluarga & Syukur',
      deskripsiRefleksi: 'Saya bersyukur kepada Allah atas kasih sayang kedua orang tua yang telah merawat, mendidik, dan mendoakan kebaikan bagi saya sejak lahir.'
    },
    {
      id: 7,
      indikator: 'Menjauhi Sifat Kikir dan Riya',
      aspek: 'Ketaatan Berkorban',
      deskripsiRefleksi: 'Saya tidak suka memamerkan amal kebaikan atau sedekah di media sosial demi menjaga kemurnian niat semata-mata mengharap rida Allah Swt.'
    },
    {
      id: 8,
      indikator: 'Memahami Fikih Makanan Halal & Thayyib',
      aspek: 'Keluarga & Syukur',
      deskripsiRefleksi: 'Saya selalu berhati-hati memilih makanan yang halal zatnya, halal cara penyembelihannya, serta thayyib (bergizi dan higienis) bagi kesehatan tubuh.'
    }
  ]
};
