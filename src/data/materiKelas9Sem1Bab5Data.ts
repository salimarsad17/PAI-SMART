export interface DalilSejarahIslamItem {
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

export interface HaditsSejarahIslamItem {
  id: string;
  perawi: string;
  nomorHadits: string;
  tema: string;
  teksArab: string;
  terjemahan: string;
  pelajaranKunci: string;
}

export interface TeoriMasukIslamItem {
  id: string;
  namaTeori: string;
  tokohPendukung: string[];
  waktuAbad: string;
  ruteJalur: string;
  buktiHistoris: string[];
  argumentasi: string;
  kelebihan: string;
  kelemahan: string;
  kesimpulanSintesis: string;
}

export interface JalurPenyebaranIslamItem {
  id: string;
  namaJalur: string;
  namaArab: string;
  deskripsi: string;
  tokohKunci: string[];
  bentukPenerapan: string[];
  keunggulanStrategi: string;
  peninggalanBudaya: string;
}

export interface KerajaanPerintisIslamItem {
  id: string;
  namaKerajaan: string;
  lokasi: string;
  abad: string;
  pendiriTokoh: string;
  perananDakwah: string;
  buktiPeninggalan: string[];
}

export interface HikmahSejarahIslamItem {
  id: string;
  judul: string;
  dimensi: 'Spiritual & Ketauhidan' | 'Toleransi & Kebangsaan' | 'Keuletan & Kegigihan' | 'Pelestarian Budaya' | 'Karakter Pelajar Pancasila';
  penjelasan: string;
  nilaiKarakter: string;
  implementasiPelajar: string;
}

export interface StudiKasusSejarahItem {
  id: string;
  judul: string;
  fenomenaRealita: string;
  dilemaKonteks: string;
  analisisSejarah: string;
  solusiKarakter: string[];
}

export interface KuisHotsSejarahItem {
  id: string;
  pertanyaan: string;
  pilihan: string[];
  kunciJawaban: number;
  pembahasan: string;
  tingkatKognitif: 'C4 (Analisis)' | 'C5 (Evaluasi)' | 'C6 (Kreasi/Sintesis)';
}

export interface MuhasabahSejarahItem {
  id: string;
  indikator: string;
  targetPerilaku: string;
  kategori: string;
}

// ==================== DATA DALIL NAQLI ====================
export const DALIL_SEJARAH_MASUK_ISLAM: DalilSejarahIslamItem[] = [
  {
    id: 'dalil-an-nahl-125',
    surah: 'An-Nahl',
    ayatNomor: '125',
    namaSurah: 'Lebah',
    artiSurah: 'Metode Dakwah Penuh Hikmah, Nasihat Santun, & Diskusi Cerdas',
    teksArab: 'ٱدْعُ إِلَىٰ سَبِيلِ رَبِّكَ بِٱلْحِكْمَةِ وَٱلْمَوْعِظَةِ ٱلْحَسَنَةِ ۖ وَجَٰدِلْهُم بِٱلَّتِى هِىَ أَحْسَنُ ۚ إِنَّ رَبَّكَ هُوَ أَعْلَمُ بِمَن ضَلَّ عَن سَبِيلِهِۦ ۖ وَهُوَ أَعْلَمُ بِٱلْمُهْتَدِينَ',
    transliterasi: 'Ud\'u ilā sabīli Rabbika bil-ḥikmati wal-mau\'iẓatil-ḥasanati wa jādilhum bil-latī hiya aḥsan, inna Rabbaka huwa a\'lamu biman ḍalla \'an sabīlih, wa huwa a\'lamu bil-muhtadīn.',
    terjemahan: 'Serulah (manusia) kepada jalan Tuhanmu dengan hikmah dan pengajaran yang baik, dan berdebatlah dengan mereka dengan cara yang baik. Sesungguhnya Tuhanmu Dialah yang lebih mengetahui siapa yang sesat dari jalan-Nya dan Dialah yang lebih mengetahui siapa yang mendapat petunjuk.',
    kandunganPokok: [
      'Menegaskan 3 metodologi dakwah Islam: Al-Hikmah (pendekatan bijak, rasional, dan kontekstual), Al-Mau\'izhah Al-Hasanah (nasihat sejuk penuh kasih sayang), dan Al-Jidal bi Al-Lati Hiya Ahsan (dialog/diskusi santun tanpa permusuhan).',
      'Menjadi pedoman utama para mubaligh dan pedagang muslim ketika menyebarkan Islam di Nusantara sehingga diterima dengan damai tanpa pertumpahan darah.',
      'Melarang dakwah dengan cara memaksa, mengintimidasi, atau menghina adat istiadat setempat yang belum bertentangan dengan pokok akidah.'
    ],
    audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/2026.mp3'
  },
  {
    id: 'dalil-al-hujurat-13',
    surah: 'Al-Hujurāt',
    ayatNomor: '13',
    namaSurah: 'Kamar-kamar',
    artiSurah: 'Prinsip Kesetaraan Bangsa & Saling Mengenal (Lita\'ārafū)',
    teksArab: 'يَٰٓأَيُّهَا ٱلنَّاسُ إِنَّا خَلَقْنَٰكُم مِّن ذَكَرٍ وَأُنثَىٰ وَجَعَلْنَٰكُمْ شُعُوبًا وَقَبَآئِلَ لِتَعَارَفُوٓا۟ ۚ إِنَّ أَكْرَمَكُمْ عِندَ ٱللَّهِ أَتْقَىٰكُمْ ۚ إِنَّ ٱللَّهَ عَلِيمٌ خَبِيرٌ',
    transliterasi: 'Yā ayyuhan-nāsu innā khalaqnākum min żakariw wa unṡā wa ja\'alnākum syu\'ūbaw wa qabā\'ila lita\'ārafū, inna akramakum \'indallāhi atqākum, innallāha \'alīmun khabīr.',
    terjemahan: 'Wahai manusia! Sungguh, Kami telah menciptakan kamu dari seorang laki-laki dan seorang perempuan, kemudian Kami jadikan kamu berbangsa-bangsa dan bersuku-suku agar kamu saling mengenal. Sesungguhnya yang paling mulia di antara kamu di sisi Allah ialah orang yang paling bertakwa. Sungguh, Allah Maha Mengetahui, Mahateliti.',
    kandunganPokok: [
      'Islam memandang keragaman suku, ras, dan bangsa di kepulauan Nusantara sebagai ketetapan ilahi (*sunnatullah*) untuk saling mengenal, berinteraksi dagang, dan bertukar peradaban secara harmonis.',
      'Menghapuskan sistem kasta feodal kasta warisan zaman sebelumnya, sehingga rakyat jelata merasa dimuliakan derajat kemanusiaannya oleh ajaran Islam.',
      'Ukuran kemuliaan mutlak di hadapan Allah hanyalah ketakwaan batiniah dan amal saleh, bukan garis keturunan ningrat atau kekayaan materi.'
    ],
    audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/4625.mp3'
  },
  {
    id: 'dalil-ali-imran-159',
    surah: 'Āli \'Imrān',
    ayatNomor: '159',
    namaSurah: 'Keluarga Imran',
    artiSurah: 'Sikap Lemah Lembut Menjadi Kunci Keberhasilan Dakwah',
    teksArab: 'فَبِمَا رَحْمَةٍ مِّنَ ٱللَّهِ لِنتَ لَهُمْ ۖ وَلَوْ كُنتَ فَظًّا غَلِيظَ ٱلْقَلْبِ لَٱنفَضُّوا۟ مِنْ حَوْلِكَ ۖ فَٱعْفُ عَنْهُمْ وَٱسْتَغْفِرْ لَهُمْ وَشَاوِرْهُمْ فِى ٱلْأَمْرِ',
    transliterasi: 'Fabimā raḥmatim minallāhi linta lahum, walau kunta faẓẓan galīẓal-qalbi lanfaḍḍū min ḥaulika fa\'fu \'anhum wastagfir lahum wa syāwirhum fil-amr.',
    terjemahan: 'Maka berkat rahmat Allah engkau (Muhammad) berlaku lemah lembut terhadap mereka. Sekiranya engkau bersikap keras dan berhati kasar, tentulah mereka menjauhkan diri dari sekitarmu. Karena itu maafkanlah mereka dan mohonkanlah ampunan untuk mereka, dan bermusyawarahlah dengan mereka dalam urusan itu.',
    kandunganPokok: [
      'Kelembutan budi pekerti pendakwah merupakan cerminan rahmat Allah yang menjadi daya tarik magnetis masuknya masyarakat pribumi Nusantara ke dalam pangkuan Islam.',
      'Sikap kasar dan kaku justru akan membuat masyarakat lari dan menjauh dari ajaran kebenaran.',
      'Mendorong pendekatan musyawarah, akulturasi budaya yang santun, dan pemaafan dalam memecahkan friksi sosial.'
    ],
    audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/452.mp3'
  }
];

// ==================== DATA HADITS SHAHIH ====================
export const HADITS_SEJARAH_MASUK_ISLAM: HaditsSejarahIslamItem[] = [
  {
    id: 'hadits-bukhari-3461',
    perawi: 'HR. Al-Bukhari',
    nomorHadits: 'No. 3461',
    tema: 'Kewajiban Menyampaikan Ajaran Islam Walaupun Sedikit',
    teksArab: 'بَلِّغُوا عَنِّي وَلَوْ آيَةً ، وَحَدِّثُوا عَنْ بَنِي إِسْرَائِيلَ وَلاَ حَرَجَ ، وَمَنْ كَذَبَ عَلَيَّ مُتَعَمِّدًا فَلْيَتَبَوَّأْ مَقْعَدَهُ مِنَ النَّارِ',
    terjemahan: 'Sampaikanlah dariku walau hanya satu ayat, dan ceritakanlah kisah tentang Bani Israil dan hal itu tidak mengapa. Barang siapa berdusta atas namaku secara sengaja, maka hendaklah ia mempersiapkan tempat duduknya di neraka.',
    pelajaranKunci: 'Hadits ini menjadi pelecut semangat spiritual para saudagar dan musafir muslim untuk selalu membawa misi dakwah ke mana pun mereka berlayar melintasi samudra Hindia menuju kepulauan Nusantara.'
  },
  {
    id: 'hadits-ahmad-2003',
    perawi: 'HR. Ahmad',
    nomorHadits: 'No. 2003 (Hadits Shahih)',
    tema: 'Agama yang Paling Dicintai Allah adalah yang Lurus dan Penuh Toleransi',
    teksArab: 'أَحَبُّ الدِّينِ إِلَى اللَّهِ الْحَنِيفِيَّةُ السَّمْحَةُ',
    terjemahan: 'Agama yang paling dicintai di sisi Allah adalah ajaran yang lurus lagi penuh toleransi (kelapangan/kemudahan).',
    pelajaranKunci: 'Menjadi fondasi doktrin Al-Hanifiyyah As-Samhah yang diterapkan para juru dakwah di Indonesia, mendahulukan kemudahan, keramahan, dan adaptasi kultural ketimbang kekerasan fisik.'
  },
  {
    id: 'hadits-tirmidzi-1209',
    perawi: 'HR. At-Tirmidzi & Ibnu Majah',
    nomorHadits: 'No. 1209',
    tema: 'Kejujuran Pedagang Muslim Menjadi Magnet Dakwah',
    teksArab: 'التَّاجِرُ الصَّدُوقُ الأَمِينُ مَعَ النَّبِيِّينَ وَالصِّدِّيقِينَ وَالشُّهَدَاءِ',
    terjemahan: 'Pedagang yang jujur dan dapat dipercaya akan bersama para nabi, orang-orang yang shiddiq, dan orang-orang yang mati syahid (di surga).',
    pelajaranKunci: 'Integritas para pedagang muslim di pelabuhan Selat Malaka, Aceh, Banten, dan Tuban yang tidak mengurangi timbangan dan selalu menepati janji membuat para penguasa pribumi tertarik mengkaji Islam.'
  }
];

// ==================== DATA TEORI MASUKNYA ISLAM ====================
export const TEORI_MASUK_ISLAM_DATA: TeoriMasukIslamItem[] = [
  {
    id: 'teori-makkah',
    namaTeori: 'Teori Makkah (Teori Arab)',
    tokohPendukung: [
      'Prof. Dr. Buya Hamka (Haji Abdul Malik Karim Amrullah)',
      'Sir Thomas Walker Arnold (T.W. Arnold)',
      'Anthony H. Johns',
      'Dr. Naquib Al-Attas',
      'J.C. van Leur'
    ],
    waktuAbad: 'Abad ke-7 Masehi / Abad ke-1 Hijriah (Masa Khulafaur Rasyidin & Dinasti Umayyah)',
    ruteJalur: 'Jalur Pelayaran Laut Langsung dari Jazirah Arab (Makkah/Madinah & Hadramaut/Oman) - Teluk Persia - Samudra Hindia - Selat Malaka - Barus (Pantai Barat Sumatera)',
    buktiHistoris: [
      'Catatan Sejarah Dinasti Tang (Tiongkok) menyebutkan adanya perkampungan saudagar Arab (Ta-Shih) di pantai barat Sumatera (Barus / Fansur) pada tahun 674 Masehi.',
      'Makam Kuno Mahligai di Barus, Tapanuli Tengah (Sumatera Utara), dengan batu nisan bertuliskan nama Syekh Rukunuddin yang wafat pada tahun 672 Masehi / 48 Hijriah.',
      'Kesamaan Mazhab Fikih: Mayoritas muslim Nusantara bermazhab Syafi\'i, yang mana mazhab Syafi\'i adalah mazhab dominan di Makkah, Madinah, Mesir, dan Hadramaut (berbeda dengan India yang mayoritas bermazhab Hanafi).',
      'Penggunaan Gelar Penguasa: Raja-raja Samudera Pasai memakai gelar "Al-Malik" (seperti Sultan Malik As-Saleh, Malik Azh-Zhahir) yang merupakan gelar khas para penguasa Arab di Mesir dan Timur Tengah, bukan gelar bangsawan India.'
    ],
    argumentasi: 'Buya Hamka menegaskan bahwa peranan bangsa Gujarat (India) hanyalah sebagai tempat singgah transit kapal dagang, sedangkan para penyebar dan pembawa ajaran Islam murni berasal dari para musafir dan saudagar muslim Arab yang berlayar langsung membawa risalah tauhid sejak abad pertama Hijriah.',
    kelebihan: 'Didukung oleh kesamaan mazhab dominan (Syafi\'i), bukti arkeologi tertua makam Barus abad ke-7 M, dan catatan resmi utusan kekaisaran Tiongkok Dinasti Tang.',
    kelemahan: 'Meskipun Islam sudah masuk sejak abad ke-7 M, proses pembentukan institusi politik formal berbentuk kesultanan Islam berskala besar baru menguat pada abad ke-13 M.',
    kesimpulanSintesis: 'Sangat kuat dalam menjelaskan FASE AWAL KEDATANGAN (inisiasi dakwah) Islam pertama kali di kepulauan Nusantara.'
  },
  {
    id: 'teori-gujarat',
    namaTeori: 'Teori Gujarat (Teori India)',
    tokohPendukung: [
      'J. Pijnapel (Guru Besar Universitas Leiden)',
      'Christian Snouck Hurgronje (Penasihat Kolonial Belanda)',
      'J.P. Moquette',
      'G.H. Bousquet',
      'Kern'
    ],
    waktuAbad: 'Abad ke-13 Masehi (Sekitar tahun 1200-an Masehi)',
    ruteJalur: 'Pelabuhan Gujarat & Cambay (Pantai Barat India) - Selat Malaka - Samudera Pasai (Aceh) - Pantai Utara Pulau Jawa (Gresik/Tuban)',
    buktiHistoris: [
      'Batu Nisan Sultan Malik As-Saleh (pendiri Kesultanan Samudera Pasai) yang wafat pada bulan Ramadhan tahun 696 H / 1297 M, yang memiliki bentuk pualam dan ukiran kaligrafi yang identik dengan batu nisan di Cambay, Gujarat, India.',
      'Batu Nisan Maulana Malik Ibrahim (Sunan Gresik) di Leran, Gresik, Jawa Timur yang wafat pada tahun 822 H / 1419 M dengan motif marmer khas Gujarat.',
      'Catatan Perjalanan Marco Polo (penjelajah Venesia, Italia) pada tahun 1292 M yang singgah di Kerajaan Perlak (Aceh) dan melaporkan bahwa sebagian besar penduduk kota pelabuhan telah memeluk agama Islam berkat interaksi dengan pedagang India.'
    ],
    argumentasi: 'Snouck Hurgronje berpendapat bahwa hubungan perdagangan rempah-rempah antara India dan Nusantara telah terjalin lama sejak masa Hindu-Buddha. Ketika para saudagar di Gujarat dan Malabar memeluk Islam, mereka sekaligus menjadi perantara penyebaran agama Islam ke Nusantara saat berniaga.',
    kelebihan: 'Menjelaskan bukti arkeologis riil berupa nisan makam pualam Cambay dan sinkron dengan catatan perjalanan musafir Barat Marco Polo abad ke-13 M.',
    kelemahan: 'Gujarat saat itu menganut mazhab fikih Hanafi atau Syi\'ah, sedangkan penduduk muslim Nusantara sejak awal bermazhab Syafi\'i. Selain itu, Gujarat baru ditaklukkan oleh kesultanan Islam Delhi pada tahun 1298 M, sementara Samudera Pasai sudah berdaulat sebagai kerajaan Islam sebelum tahun tersebut.',
    kesimpulanSintesis: 'Sangat kuat dalam menjelaskan FASE PERKEMBANGAN EKONOMI dan interaksi maritim pada abad ke-13 Masehi.'
  },
  {
    id: 'teori-persia',
    namaTeori: 'Teori Persia (Teori Iran)',
    tokohPendukung: [
      'Prof. Dr. P.A. Hoesein Djajadiningrat (Bapak Perintis Arkeologi & Filologi Indonesia)',
      'Dr. Umar Amir Husen',
      'Abubakar Aceh'
    ],
    waktuAbad: 'Abad ke-13 Masehi',
    ruteJalur: 'Teluk Persia (Iran) - Gujarat - Samudra Hindia - Selat Malaka - Bengkulu / Pariaman (Sumatera Barat) - Banten / Cirebon (Jawa Barat)',
    buktiHistoris: [
      'Tradisi Tabot (di Bengkulu) dan Tabuik (di Pariaman, Sumatera Barat): Upacara arak-arakan tahunan pada tanggal 10 Muharram (Hari Asyura) untuk mengenang wafatnya cucu Nabi Muhammad SAW, Sayyidina Husain bin Ali di Karbala.',
      'Sistem Baca Aksara Arab (Tajwid Tradisional): Istilah baris harakat dalam ejaan Melayu/Jawa kuno mengadopsi bahasa Persia, yaitu Jabar (Fathah), Je-er (Kasrah), dan Pe-es (Dhammah).',
      'Kosa Kata Serapan Bahasa Persia: Banyak kata serapan perkapalan dan birokrasi kerajaan yang berasal dari bahasa Persia, seperti kata Shahbandar (Syahbandar = kepala pelabuhan), Nakhoda, Bedil, Kismis, Takhta, dan Jubah.',
      'Ajaran Tasawuf Wujudiyyah / Manunggaling Kawula Gusti: Ajaran mistik Syekh Siti Jenar di Jawa dan Hamzah Fansuri di Aceh memiliki corak yang menyerupai pemikiran sufi Persia Al-Hallaj (konsep Ana al-Haqq).'
    ],
    argumentasi: 'Hoesein Djajadiningrat menitikberatkan pada kesamaan sosiologis, linguistik, tradisi peringatan keagamaan, dan sastra mistik sufistik antara peradaban Persia kuno dengan kebudayaan masyarakat pesisir kepulauan Indonesia.',
    kelebihan: 'Memberikan analisis mendalam mengenai kesamaan fenomena tradisi kultural, fonetik bahasa, dan terminologi perkapalan maritim.',
    kelemahan: 'Persia identik dengan sekte Syi\'ah, padahal mayoritas mutlak umat Islam di Nusantara berakidah Ahlus Sunnah wal Jama\'ah (Sunni). Oleh karena itu, pengaruh Persia lebih bersifat kultural dan sastra daripada aspek akidah pokok.',
    kesimpulanSintesis: 'Menjelaskan PENGARUH KULTURAL, LITERATUR SUFISTIK, dan kosa kata serapan bahasa di pesisir Nusantara.'
  },
  {
    id: 'teori-china',
    namaTeori: 'Teori China (Teori Tiongkok)',
    tokohPendukung: [
      'Prof. Dr. Slamet Muljana (Guru Besar Universitas Indonesia)',
      'H.J. de Graaf',
      'Denys Lombard',
      'Sumanto Al Qurtuby'
    ],
    waktuAbad: 'Abad ke-9 hingga abad ke-15 Masehi',
    ruteJalur: 'Canton / Guangzhou & Quanzhou (Tiongkok Selatan) - Laut China Selatan - Palembang - Pantai Utara Jawa (Tuban, Lasem, Gresik, Demak)',
    buktiHistoris: [
      'Kronik Klenteng Sampo Kong Semarang: Catatan naskah kuno yang menyebutkan bahwa para pendiri Kesultanan Demak dan beberapa anggota Wali Songo adalah keturunan etnis Tionghoa muslim (Raden Patah disebut Jin Bun, Sunan Ampel disebut Bong Swi Hoo).',
      'Ekspedisi Armada Raksasa Laksamana Cheng Ho (Ma Sanbao): Cheng Ho adalah laksamana muslim dari Dinasti Ming yang melakukan 7 ekspedisi muhibah damai ke Nusantara (1405-1433 M), membangun komunitas muslim di pesisir Jawa dan Palembang.',
      'Arsitektur Akulturasi Tionghoa pada Bangunan Masjid Kuno: Menara dan atap Masjid Agung Demak, Masjid Menara Kudus, serta ornamen piring keramik Dinasti Ming yang ditempel di dinding Keraton Cirebon dan Astana Gunung Jati.',
      'Catatan musafir Ma Huan (penerjemah Cheng Ho) dalam kitab "Yingya Shenglan" (1416 M) yang mencatat telah banyak warga Tionghoa muslim yang menetap dan berniaga di kota pelabuhan Majapahit.'
    ],
    argumentasi: 'Hubungan dagang antara Tiongkok dengan kepulauan Nusantara sudah terjalin intensif sejak abad ke-7 M. Ketika terjadi pemberontakan Huang Chao (878 M) di Guangzhou yang menargetkan kaum saudagar, ribuan keluarga muslim melarikan diri dan bermukim di Kedah dan Palembang.',
    kelebihan: 'Memperkaya fakta akulturasi arsitektur, catatan filologi kronik klenteng, dan peran diplomasi perdamaian Laksamana Cheng Ho.',
    kelemahan: 'Teori China tidak dapat menjelaskan asal muasal ajaran teologi syariat Islam secara mendasar karena masyarakat Tiongkok muslim sendiri menerima Islam dari para sahabat Nabi dan pedagang Arab.',
    kesimpulanSintesis: 'Sangat penting dalam menjelaskan PERAN ETNIS TIONGHOA MUSLIM dalam mempercepat urbanisasi dan transisi kekuasaan Majapahit ke Demak pada abad ke-15 M.'
  }
];

// ==================== DATA 6 JALUR PENYEBARAN ISLAM ====================
export const JALUR_PENYEBARAN_ISLAM_DATA: JalurPenyebaranIslamItem[] = [
  {
    id: 'jalur-perdagangan',
    namaJalur: '1. Jalur Perdagangan (At-Tijārah)',
    namaArab: 'التِّجَارَة',
    deskripsi: 'Jalur utama dan paling awal yang menghubungkan saudagar muslim dari Arab, Persia, India, dan Tiongkok dengan penduduk pribumi di kota-kota pelabuhan strategis seperti Selat Malaka, Samudera Pasai, Sunda Kelapa, Banten, Cirebon, Jepara, Tuban, dan Gresik.',
    tokohKunci: ['Saudagar Arab & Hadramaut', 'Pedagang Gujarat', 'Laksamana Cheng Ho', 'Para Syahbandar Muslim'],
    bentukPenerapan: [
      'Pemanfaatan angin muson barat dan timur: Para pedagang asing harus singgah berbulan-bulan di pesisir Nusantara menunggu perubahan arah angin, membuka kesempatan interaksi sosial intensif.',
      'Pembentukan pemukiman khusus muslim (*Pekojan* / *Kampung Arab*): Memperkenalkan pola hidup bersih, shalat berjamaah, dan keramahtamahan.',
      'Etika jual beli islami (*Muamalah Shiddiqah*): Tidak mengurangi timbangan, tidak menimbun barang (*ihtikar*), jujur, dan tidak menerapkan riba.'
    ],
    keunggulanStrategi: 'Tidak memerlukan biaya ekspedisi militer, terjadi secara alami dan mutualisme ekonomi, serta menyentuh berbagai lapisan masyarakat dari buruh pelabuhan hingga kaum elit.',
    peninggalanBudaya: 'Kampung Pekojan di berbagai kota pesisir Jawa dan Sumatera, sistem mata uang dirham perak di Pasai, dan tradisi pasar syariah pesisir.'
  },
  {
    id: 'jalur-perkawinan',
    namaJalur: '2. Jalur Perkawinan (Al-Munākaḥah)',
    namaArab: 'المُنَاكَحَة',
    deskripsi: 'Pernikahan antara para saudagar muslim yang kaya dan terpandang secara sosial dengan putri para raja, adipati, bangsawan, atau saudagar pribumi, yang mensyaratkan ikrar dua kalimat syahadat terlebih dahulu.',
    tokohKunci: [
      'Maulana Ishak (menikahi Dewi Sekardadu putri Menak Sembuyu Adipati Blambangan)',
      'Raden Rahmat / Sunan Ampel (menikahi Nyai Ageng Manila putri Adipati Tuban Arya Teja)',
      'Syekh Quro (Karawang)',
      'Sunan Gunung Jati (menikahi Ratu Kawunganten dan Ong Tien Nio putri kaisar Tiongkok)'
    ],
    bentukPenerapan: [
      'Masuknya ajaran Islam ke dalam lingkaran istana kekuasaan feodal secara terhormat dan penuh ikatan cinta kekeluargaan.',
      'Kelahiran putra-putri berdarah bangsawan yang dibina secara islami, sehingga kelak menjadi pemimpin muslim terkemuka (misal Raden Patah, pendiri Kesultanan Demak).',
      'Pernikahan antarrakyat jelata yang mempercepat pertumbuhan populasi muslim di perkampungan pedalaman.'
    ],
    keunggulanStrategi: 'Mendobrak sekat kasta feodal, mengamankan perlindungan hukum dan politik dari para penguasa lokal bagi dakwah Islam, serta otomatis mengislamkan pengikut istana.',
    peninggalanBudaya: 'Tradisi ijab kabul bahasa Arab berpadu adat kearifan lokal, pakaian pengantin perpaduan songket/kebaya bernilai menutup aurat, dan silsilah keluarga ningrat muslim.'
  },
  {
    id: 'jalur-pendidikan',
    namaJalur: '3. Jalur Pendidikan & Pesantren (At-Tarbiyah)',
    namaArab: 'التَّرْبِيَة وَالمَعَاهِد',
    deskripsi: 'Institusionalisasi transmisi ilmu pengetahuan agama Islam secara terstruktur melalui lembaga pesantren, dayah (di Aceh), atau surau (di Minangkabau) yang dipimpin oleh para kiai, ulama, dan sunan.',
    tokohKunci: [
      'Sunan Ampel (Pendiri Pesantren Ampeldenta di Surabaya)',
      'Sunan Giri (Pendiri Pesantren Giri Kedaton di Gresik)',
      'Syekh Maulana Malik Ibrahim (Perintis asrama santri Leran)',
      'Tuan Guru & Buya di Sumatera'
    ],
    bentukPenerapan: [
      'Sistem Mondok / Asrama Santri: Santri dari seluruh penjuru Nusantara (Maluku, Hitu, Madura, Kalimantan, Ternate) datang belajar tafsir, hadits, fikih, tajwid, dan tasawuf.',
      'Kaderisasi Mubaligh Terencana: Setelah tamat belajar, santri diutus kembali ke daerah asal sebagai juru dakwah mandiri yang berwibawa.',
      'Pendidikan Gratis & Egaliter: Pesantren terbuka bagi siapa saja tanpa membedakan kasta darah biru atau anak petani miskin.'
    ],
    keunggulanStrategi: 'Menciptakan benteng ideologis yang kokoh, mengakar di sanubari masyarakat bawah, dan mampu bertahan berabad-abad menghadapi kolonialisme penjajah barat.',
    peninggalanBudaya: 'Sistem pondok pesantren tradisional, tradisi kitab kuning (*kutubut turats*), sistem sorogan dan bandongan, serta kurikulum akhlak santri.'
  },
  {
    id: 'jalur-tasawuf',
    namaJalur: '4. Jalur Tasawuf & Spiritualitas (At-Taṣawwuf)',
    namaArab: 'التَّصَوُّف',
    deskripsi: 'Pendekatan mistik islami yang menekankan pembersihan jiwa (*tazkiyatun nafs*), zuhud, dan kedekatan langsung dengan Allah Swt., yang sangat cocok dengan mentalitas masyarakat Nusantara yang sebelumnya terbiasa dengan alam kebatinan Hindu-Buddha.',
    tokohKunci: [
      'Syekh Hamzah Fansuri (Barus/Aceh)',
      'Syekh Syamsuddin As-Sumatrani',
      'Syekh Nuruddin Ar-Raniri',
      'Syekh Abdur Rauf As-Singkili',
      'Sunan Bonang'
    ],
    bentukPenerapan: [
      'Penyusunan karya sastra tasawuf bermutu tinggi dalam bentuk syair, hikayat, dan suluk (misal Syair Perahu karya Hamzah Fansuri).',
      'Pengajaran tarekat mu\'tabarah (seperti Qadiriyyah, Naqsyabandiyyah, Syattariyyah) yang mengikat persaudaraan spiritual antarumat.',
      'Pengobatan alternatif medis-ruhani (suwuk islami berlandaskan doa ayat Al-Qur\'an dan asmaul husna) menggantikan mantra-mantra kemusyrikan.'
    ],
    keunggulanStrategi: 'Menyentuh dimensi batiniah manusia yang paling dalam, mampu menjembatani istilah spiritual lama dengan substansi tauhid baru tanpa memicu gejolak sosial.',
    peninggalanBudaya: 'Koleksi manuskrip kitab suluk kuno Melayu-Jawa, zikir ratib di surau-surau, tradisi wirid bakda shalat, dan etika tasawuf tawadhu\'.'
  },
  {
    id: 'jalur-kesenian',
    namaJalur: '5. Jalur Kesenian & Kebudayaan (Al-Funūn wat-Tsaqāfah)',
    namaArab: 'الفُنُون وَالثَّقَافَة',
    deskripsi: 'Strategi akulturasi jenius yang dipelopori oleh Wali Songo dengan memanfaatkan seni pewayangan, gamelan, tembang macapat, seni ukir, dan arsitektur sebagai media transformasi nilai-nilai tauhid dan syariat Islam.',
    tokohKunci: [
      'Sunan Kalijaga (Pencipta Wayang Kulit Islam, Tembang Ilir-Ilir & Dhandhanggula)',
      'Sunan Bonang (Pencipta Gamelan Bonang & Tembang Tombo Ati)',
      'Sunan Kudus (Akulturasi Menara Kudus mirip candi, larangan menyembelih sapi demi menghormati umat Hindu)',
      'Sunan Muria (Tembang Sinom & Kinanthi)'
    ],
    bentukPenerapan: [
      'Modifikasi Cerita Wayang: Kisah Mahabarata dan Ramayana disuntikkan nilai tauhid, pusaka Jimat Kalimasada dimaknai sebagai Dua Kalimat Syahadat.',
      'Upacara Sekaten (dari kata *Syahadatain*): Pagelaran gamelan pusaka Kanjeng Kiai Guntur Madu di alun-alun keraton untuk menarik rakyat membaca syahadat.',
      'Arsitektur Masjid Beratap Tumpang: Meniru filosofi tingkat keagamaan (Iman, Islam, Ihsan) berundak 3 susun agar masyarakat tidak kaget dengan bentuk kubah asing Timur Tengah.'
    ],
    keunggulanStrategi: 'Sangat menghibur, edukatif, humanis, tidak melukai kearifan lokal, dan membuat masyarakat merasa memiliki agama Islam tanpa kehilangan jati diri kulturalnya.',
    peninggalanBudaya: 'Tembang Ilir-Ilir, Wayang Kulit purwa, Gamelan Sekaten Yogyakarta & Surakarta, Seni Rebana/Hadrah, dan Menara Masjid Kudus.'
  },
  {
    id: 'jalur-politik',
    namaJalur: '6. Jalur Politik & Kekuasaan (As-Siyāsah)',
    namaArab: 'السِّيَاسَة وَالحُكْم',
    deskripsi: 'Transformasi sistem kerajaan Hindu-Buddha menjadi kesultanan bercorak Islam yang menerapkan hukum syariat, menegakkan keadilan sosial, dan melindungi dakwah di seluruh wilayah teritorialnya.',
    tokohKunci: [
      'Sultan Malik As-Saleh (Samudera Pasai)',
      'Raden Patah & Sultan Trenggana (Kesultanan Demak Bintoro)',
      'Sultan Hasanuddin (Gowa-Tallo Makassar)',
      'Sultan Babullah (Ternate)',
      'Sultan Ageng Tirtayasa (Banten)'
    ],
    bentukPenerapan: [
      'Konversi Keyakinan Para Raja: Dalam budaya paternalistik masyarakat timur, apabila seorang raja memeluk agama Islam, maka para adipati, pejabat istana, dan rakyat jelata akan sukarela mengikutinya (*sendiko dawuh*).',
      'Pembentukan Lembaga Qadhi / Mufti Syariat: Mengangkat ulama sebagai penasihat utama sultan dan hakim agung peradilan hukum.',
      'Perlindungan Maritim dari Kolonial Penjajah: Memobilisasi armada perang mempertahankan kedaulatan tanah air dari agresi bangsa Portugis (seperti ekspedisi Fatahillah merebut Sunda Kelapa 1527 M).'
    ],
    keunggulanStrategi: 'Memberikan legitimasi hukum formal bagi penerapan nilai-nilai keadilan publik, perlindungan sarana ibadah, dan percepatan penyebaran Islam ke pelosok pulau terpencil.',
    peninggalanBudaya: 'Keraton-keraton kesultanan Islam di Yogyakarta, Cirebon, Banten, Ternate, Tidore, Buton, serta manuskrip hukum tata negara Islam kuno.'
  }
];

// ==================== DATA KERAJAAN ISLAM PERINTIS ====================
export const KERAJAAN_ISLAM_PERINTIS_DATA: KerajaanPerintisIslamItem[] = [
  {
    id: 'samudera-pasai',
    namaKerajaan: 'Kesultanan Samudera Pasai',
    lokasi: 'Lhokseumawe, Aceh Utara',
    abad: 'Abad ke-13 Masehi (Berdiri sekitar 1267 M)',
    pendiriTokoh: 'Meurah Silu (bergelar Sultan Malik As-Saleh)',
    perananDakwah: 'Menjadi pusat studi Islam tertua di Asia Tenggara, mencetak ribuan ulama yang dikirim mendakwahkan Islam ke Malaka, Jawa, dan Maluku, serta menjadi pelabuhan dagang internasional terpadu.',
    buktiPeninggalan: [
      'Batu nisan marmer pualam Sultan Malik As-Saleh (1297 M) di Desa Beuringen.',
      'Koin mata uang emas Dirham Pasai bertuliskan lafaz kaligrafi Arab.',
      'Catatan musafir Ibnu Battuta (1345 M) yang mengagumi kesalehan dan kecerdasan sultan Pasai yang taat bermazhab Syafi\'i.'
    ]
  },
  {
    id: 'kesultanan-demak',
    namaKerajaan: 'Kesultanan Demak Bintoro',
    lokasi: 'Demak, Jawa Tengah',
    abad: 'Abad ke-15 Masehi (Berdiri sekitar 1478/1500 M)',
    pendiriTokoh: 'Raden Patah (Sultan Syah Alam Akbar Al-Fattah)',
    perananDakwah: 'Kerajaan Islam pertama di Pulau Jawa yang menjadi pangkalan utama dewan dakwah Wali Songo, meruntuhkan dominasi hegemoni feodal, dan mengutus Pati Unus menyerang Portugis di Malaka (1513 M).',
    buktiPeninggalan: [
      'Masjid Agung Demak dengan 4 Tiang Utama (Soko Guru) tatal kayu karya Sunan Kalijaga.',
      'Pintu Bledeg (Pintu Petir) buatan Ki Ageng Selo berornamen candrasengkala.',
      'Makam raja-raja Demak dan kompleks museum pusaka kaligrafi.'
    ]
  },
  {
    id: 'kesultanan-aceh',
    namaKerajaan: 'Kesultanan Aceh Darussalam',
    lokasi: 'Banda Aceh, Nanggroe Aceh Darussalam',
    abad: 'Abad ke-16 Masehi (Puncak kejayaan masa Sultan Iskandar Muda 1607-1636 M)',
    pendiriTokoh: 'Sultan Ali Mughayat Syah (1514 M)',
    perananDakwah: 'Dijuluki sebagai "Serambi Makkah" (Seuramo Mekkah) karena menjadi titik tolak jamaah haji seluruh Nusantara, memproduksi kitab-kitab induk fikih dan tasawuf Melayu berwibawa tinggi, serta memiliki armada perang maritim terkuat.',
    buktiPeninggalan: [
      'Masjid Raya Baiturrahman Banda Aceh.',
      'Taman Sari Gunongan peninggalan Sultan Iskandar Muda untuk permaisuri Putroe Phang.',
      'Meriam Lada Sicupak hadiah dari Kesultanan Turki Usmani.'
    ]
  }
];

// ==================== DATA HIKMAH MEMPELAJARI SEJARAH ====================
export const HIKMAH_SEJARAH_MASUK_ISLAM: HikmahSejarahIslamItem[] = [
  {
    id: 'hikmah-1',
    judul: '1. Menghayati Karakter Dakwah Damai Tanpa Kekerasan (Bilā \'Unfin)',
    dimensi: 'Spiritual & Ketauhidan',
    penjelasan: 'Islam masuk dan berkembang di Indonesia bukan melalui agresi militer atau pertumpahan darah, melainkan melalui keteladanan akhlak, perdagangan jujur, pernikahan terhormat, dan kebijaksanaan intelektual. Hal ini membuktikan bahwa Islam secara hakiki adalah agama rahmat bagi seluruh alam (*rahmatan lil \'alamin*).',
    nilaiKarakter: 'Kedamaian, Kejujuran, & Keteladanan Moral',
    implementasiPelajar: 'Menebarkan perdamaian di lingkungan sekolah, menolak perundungan (bullying), dan menyampaikan kebaikan dengan bahasa yang santun tanpa nada menghakimi.'
  },
  {
    id: 'hikmah-2',
    judul: '2. Menumbuhkan Sikap Toleransi Kultural & Inklusivisme Bijak',
    dimensi: 'Toleransi & Kebangsaan',
    penjelasan: 'Para wali dan mubaligh tidak memberangus adat istiadat lokal secara membabi buta, melainkan merangkulnya dan menyaringnya (*tahzib*) agar sesuai syariat. Menghargai keragaman suku, bahasa, dan latar belakang budaya Nusantara sebagai kekayaan bangsa yang harus dirawat.',
    nilaiKarakter: 'Tasamuh (Toleransi), Kearifan Lokal, & Bhinneka Tunggal Ika',
    implementasiPelajar: 'Menghormati teman yang berbeda suku, agama, dan budaya, serta aktif melestarikan kesenian daerah yang bernilai positif tanpa bersikap intoleran.'
  },
  {
    id: 'hikmah-3',
    judul: '3. Meneladani Semangat Keuletan & Pengorbanan Para Pendakwah',
    dimensi: 'Keuletan & Kegigihan',
    penjelasan: 'Para musafir, pedagang muslim, dan ulama rela mengarungi samudra lepas yang ganas berbulan-bulan, meninggalkan kampung halaman yang nyaman demi mengemban amanah risalah tauhid. Keberhasilan mereka adalah buah dari kerja keras, ketabahan, dan keikhlasan lillahi ta\'ala.',
    nilaiKarakter: 'Resiliensi, Pantang Menyerah, & Etos Kerja Tinggi',
    implementasiPelajar: 'Tekun dan bersemangat dalam menuntut ilmu, pantang putus asa saat menghadapi tugas sekolah yang sulit, dan berani berhijrah dari kemalasan menuju prestasi.'
  },
  {
    id: 'hikmah-4',
    judul: '4. Memperkokoh Integrasi Nasional & Semangat Ukhuwah',
    dimensi: 'Pelestarian Budaya',
    penjelasan: 'Kedatangan Islam meruntuhkan kasta sosial yang kaku dan mempererat integrasi antarpulau di Nusantara melalui jalur pelayaran niaga dan jaringan keilmuan pesantren. Islam menjadi perekat utama persatuan bangsa dalam menghadapi penjajahan kolonialisme bangsa Barat.',
    nilaiKarakter: 'Ukhuwah Wathaniyah (Kebangsaan) & Patriotisme',
    implementasiPelajar: 'Mengutamakan persatuan sekolah dan kekompakan kelas di atas kepentingan kelompok, serta menjauhi tawuran antarpelajar dan fanatisme kedaerahan sempit.'
  },
  {
    id: 'hikmah-5',
    judul: '5. Melestarikan Warisan Intelektual & Artefak Sejarah Bangsa',
    dimensi: 'Karakter Pelajar Pancasila',
    penjelasan: 'Karya sastra para ulama Nusantara (kitab suluk, terjemahan tafsir Melayu, khat kaligrafi) dan peninggalan fisik (masjid bersejarah, menara, makam keramat) adalah bukti peradaban emas Nusantara yang wajib dijaga dari kepunahan dan klaim sepihak.',
    nilaiKarakter: 'Literasi Sejarah, Berpikir Kritis, & Cinta Cagar Budaya',
    implementasiPelajar: 'Gemar membaca literatur sejarah Islam Nusantara dari sumber terpercaya, mengunjungi museum atau cagar budaya bersejarah, dan tidak merusak fasilitas peninggalan masa lalu.'
  }
];

// ==================== DATA STUDI KASUS ====================
export const STUDI_KASUS_SEJARAH_DATA: StudiKasusSejarahItem[] = [
  {
    id: 'kasus-1',
    judul: 'Studi Kasus 1: Fenomena Dakwah Keras di Media Sosial vs Metode Santun Wali Songo',
    fenomenaRealita: 'Di era media sosial saat ini, kerap bermunculan konten dakwah yang provokatif, gemar membid\'ahkan tradisi lokal secara frontal, mencaci maki kelompok yang berbeda pendapat, dan menggunakan bahasa kasar untuk menarik algoritma penonton (engagement).',
    dilemaKonteks: 'Banyak remaja muslim menjadi bingung dan terpolarisasi. Sebagian menganggap dakwah keras itu sebagai ketegasan, sementara sebagian lainnya justru merasa risih dan menjauhi agama Islam karena dikesankan kaku dan intoleran.',
    analisisSejarah: 'Sejarah masuknya Islam membuktikan bahwa Wali Songo berhasil mengislamkan mayoritas penduduk Jawa bukan dengan mencaci maki sesajen atau tradisi wayang, melainkan dengan merangkul, menyisipkan nilai tauhid secara perlahan, dan menunjukkan kemuliaan akhlak (metode *tadriji* / bertahap). Andaikan para wali bersikap kasar, masyarakat Majapahit dipastikan akan memberontak dan menolak Islam.',
    solusiKarakter: [
      'Meneladani strategi dakwah Q.S. An-Nahl: 125 yang mengedepankan hikmah, teladan santun, dan dialog yang menyejukkan.',
      'Cerdas dalam menyaring (*tabayyun*) figur panutan di media sosial; pilihlah ulama yang menyebarkan kedamaian dan ukhuwah.',
      'Membuat konten-konten kreatif digital yang menginspirasi kebaikan tanpa harus merendahkan keyakinan atau budaya orang lain.'
    ]
  },
  {
    id: 'kasus-2',
    judul: 'Studi Kasus 2: Tradisi Akulturasi Budaya (Halal Bihalal, Sekaten, & Tahlilan) di Era Modern',
    fenomenaRealita: 'Tradisi Halal Bihalal saat Idulfitri dan kenduri doa tahlilan bersama tetangga merupakan budaya khas umat Islam di Indonesia yang tidak dijumpai di kawasan Arab Timur Tengah.',
    dilemaKonteks: 'Muncul perdebatan di kalangan sebagian generasi muda yang menganggap tradisi tersebut tidak ada di zaman Nabi sehingga dianggap terlarang, sementara para tokoh masyarakat memandangnya sebagai media perekat silaturahmi yang sangat penting.',
    analisisSejarah: 'Dalam kaidah ushul fikih, terdapat prinsip *"Al-\'Ādatu Muḥakkamah"* (adat kebiasaan setempat dapat dijadikan pertimbangan hukum selama tidak bertentangan dengan dalil syariat). Tradisi Halal Bihalal digagas oleh para ulama dan pahlawan bangsa untuk merekatkan persaudaraan pasca-konflik politik, sedangkan Sekaten adalah media dakwah Sunan Kalijaga untuk mengenalkan kalimat syahadat.',
    solusiKarakter: [
      'Memahami substansi syariatnya: menjalin silaturahmi, saling memaafkan, dan memuliakan tetangga adalah perintah mutlak dalam Al-Qur\'an dan Hadits.',
      'Membersihkan tradisi dari unsur-unsur yang berpotensi syirik atau pemborosan materi yang membebani keluarga kurang mampu.',
      'Menghargai perbedaan pendapat dalam ranah *furu\'iyyah* (cabang fikih) tanpa memecah belah kerukunan antarumat beriman.'
    ]
  },
  {
    id: 'kasus-3',
    judul: 'Studi Kasus 3: Perdebatan Teori Masuknya Islam di Ujian Sekolah & Sikap Ilmiah Pelajar',
    fenomenaRealita: 'Dalam berbagai buku teks pelajaran dan soal ujian, siswa kerap dihadapkan pada pertanyaan apakah Islam pertama kali datang ke Indonesia dari Arab, Gujarat, Persia, atau Tiongkok, dengan masing-masing klaim bukti sejarah.',
    dilemaKonteks: 'Sebagian siswa merasa bingung dan menganggap adanya inkonsistensi sejarah yang bertolak belakang sehingga menyulitkan pemahaman.',
    analisisSejarah: 'Para sejarawan kontemporer seperti Azyumardi Azra menyimpulkan bahwa ke-4 teori tersebut tidak saling menafikan, melainkan saling melengkapi dalam dimensi waktu dan fungsi yang berbeda. Teori Makkah menjelaskan fase inisiasi kedatangan awal (abad ke-7 M), Teori Gujarat menjelaskan akselerasi ekonomi dan perdagangan (abad ke-13 M), Teori Persia menjelaskan transmisi bahasa dan tradisi sastra tasawuf, sedangkan Teori China menjelaskan peran strategis diplomasi maritim dan urbanisasi pesisir (abad ke-15 M).',
    solusiKarakter: [
      'Membangun daya nalar kritis dan literasi ilmiah: sejarah adalah rekonstruksi peristiwa masa lalu berdasarkan bukti-bukti arkeologi dan filologi yang terus berkembang.',
      'Melihat keberagaman teori sebagai bukti betapa strategisnya kepulauan Nusantara sebagai pusat peradaban maritim dunia.',
      'Fokus pada nilai substansi keteladanan para pendahulu daripada terjebak dalam fanatisme sempit asal-usul kedaerahan.'
    ]
  }
];

// ==================== DATA KUIS HOTS ====================
export const KUIS_HOTS_SEJARAH_DATA: KuisHotsSejarahItem[] = [
  {
    id: 'kuis-1',
    pertanyaan: 'Perhatikan beberapa bukti sejarah berikut:\n(1) Catatan Dinasti Tang tentang perkampungan saudagar Ta-Shih tahun 674 M di pantai barat Sumatera;\n(2) Batu nisan makam kuno Syekh Rukunuddin di Barus tertanggal tahun 672 M / 48 H;\n(3) Dominasi pemeluk mazhab fikih Syafi\'i di Nusantara yang identik dengan kawasan Makkah dan Mesir;\n(4) Gelar "Al-Malik" yang digunakan oleh para raja Kesultanan Samudera Pasai.\n\nBerdasarkan bukti-bukti autentik di atas, teori masuknya Islam ke Indonesia yang paling tepat didukung adalah...',
    pilihan: [
      'A. Teori Gujarat yang dikemukakan oleh Christian Snouck Hurgronje',
      'B. Teori Persia yang dikemukakan oleh P.A. Hoesein Djajadiningrat',
      'C. Teori Makkah (Arab) yang didukung kuat oleh Buya Hamka dan T.W. Arnold',
      'D. Teori China yang didasarkan pada kronik klenteng Sampo Kong Semarang'
    ],
    kunciJawaban: 2,
    pembahasan: 'Bukti keberadaan perkampungan Ta-Shih di Barus pada abad ke-7 M (catatan Dinasti Tang), batu nisan Mahligai Barus tahun 672 M, kesamaan mazhab mayoritas Syafi\'i (bukan Hanafi seperti di India), dan penggunaan gelar kerajaan "Al-Malik" merupakan dalil fundamental yang diajukan oleh Buya Hamka dan Sir Thomas Arnold untuk membuktikan kebenaran Teori Makkah (Arab).',
    tingkatKognitif: 'C4 (Analisis)'
  },
  {
    id: 'kuis-2',
    pertanyaan: 'Sunan Kalijaga menggunakan kesenian wayang kulit purwa sebagai media penyebaran Islam di Tanah Jawa. Beliau memodifikasi tokoh punakawan dan memasukkan pusaka sakti bernama "Jimat Kalimasada" yang harus dimiliki oleh para ksatria agar selamat di dunia dan akhirat. Strategi dakwah ini secara sosiologis dan syar\'i mencerminkan...',
    pilihan: [
      'A. Tindakan mencampuradukkan ajaran syirik dengan tauhid (*talfiq madzmum*)',
      'B. Pendekatan akulturasi kultural (*al-hikmah*) yang menyisipkan substansi Dua Kalimat Syahadat ke dalam tradisi lokal tanpa memicu konflik',
      'C. Keharusan menghapus seluruh kesenian warisan nenek moyang demi kemurnian agama Islam',
      'D. Strategi politik kekuasaan untuk merebut simpati raja Majapahit agar menyerahkan takhta tanpa perang'
    ],
    kunciJawaban: 1,
    pembahasan: 'Kata "Jimat Kalimasada" merupakan kearifan lokal (*al-\'urf*) yang diambil dari istilah "Kalimah Syahadah" (Dua Kalimat Syahadat). Sunan Kalijaga menerapkan prinsip dakwah bil-hikmah (Q.S. An-Nahl: 125): memanfaatkan media yang digemari masyarakat setempat untuk menanamkan pondasi tauhid secara persuasif, elegan, dan tanpa gesekan sosial.',
    tingkatKognitif: 'C5 (Evaluasi)'
  },
  {
    id: 'kuis-3',
    pertanyaan: 'Mengapa jalur perkawinan (*al-munākaḥah*) yang dilakukan oleh para saudagar muslim seperti Maulana Ishak dan Sunan Ampel dengan putri para adipati pribumi terbukti sangat efektif mempercepat penyebaran agama Islam di Nusantara?',
    pilihan: [
      'A. Karena para saudagar memberikan mahar emas dalam jumlah sangat melimpah kepada keluarga kerajaan',
      'B. Karena sistem sosial masyarakat Nusantara saat itu sangat feodal dan paternalistik, di mana rakyat jelata akan sukarela mengikuti agama yang dianut oleh rajanya',
      'C. Karena perkawinan tersebut memaksa pihak kerajaan menyerahkan seluruh kekuasaan politik kepada pedagang asing',
      'D. Karena pernikahan antarbangsa membebaskan masyarakat dari kewajiban membayar upeti pelabuhan'
    ],
    kunciJawaban: 1,
    pembahasan: 'Dalam struktur masyarakat feodal Nusantara, figur raja/adipati (*kawula gusti*) adalah panutan sentral. Ketika putri bangsawan menikah dengan saudagar muslim yang mensyaratkan ikrar syahadat, maka nilai-nilai Islam otomatis masuk ke dalam lingkaran istana. Hal ini mendorong para bangsawan dan rakyat jelata untuk turut memeluk Islam secara suka rela.',
    tingkatKognitif: 'C4 (Analisis)'
  },
  {
    id: 'kuis-4',
    pertanyaan: 'Salah satu kelemahan mendasar dari Teori Gujarat yang dikemukakan oleh Snouck Hurgronje, meskipun didukung oleh kesamaan ornamen batu nisan Sultan Malik As-Saleh dengan nisan di Cambay India, adalah...',
    pilihan: [
      'A. Bangsa India sama sekali tidak pernah berlayar melintasi Selat Malaka menuju Nusantara',
      'B. Masyarakat muslim di Gujarat menganut mazhab fikih Hanafi atau Syi\'ah, sedangkan mayoritas mutlak umat Islam di Nusantara bermazhab Syafi\'i sejak awal',
      'C. Tidak ditemukannya peninggalan rempah-rempah yang diperdagangkan antara India dan Indonesia',
      'D. Kerajaan Samudera Pasai melarang keras kapal-kapal dagang dari India untuk berlabuh di pelabuhannya'
    ],
    kunciJawaban: 1,
    pembahasan: 'Kritik terkuat Buya Hamka terhadap Teori Gujarat adalah aspek mazhab fikih (*al-mazhab al-fiqhi*). India mayoritas bermazhab Hanafi, sedangkan umat Islam di kepulauan Nusantara bermazhab Syafi\'i (yang berasal langsung dari Makkah/Hadramaut). Selain itu, batu nisan Cambay bisa saja hanya merupakan komoditas barang dagangan pualam impor yang dipesan oleh pihak kerajaan, bukan membuktikan asal-usul pembawa agamanya.',
    tingkatKognitif: 'C5 (Evaluasi)'
  },
  {
    id: 'kuis-5',
    pertanyaan: 'Seorang pelajar muslim di era modern menemukan konten di media sosial yang mengklaim bahwa segala bentuk tradisi lokal seperti Sekaten, Halal Bihalal, dan peringatan Maulid Nabi di Indonesia adalah kesesatan mutlak yang harus dibubarkan dengan paksa. Berdasarkan hikmah sejarah masuknya Islam di Nusantara, sikap yang paling bijak dan tepat dilakukan oleh pelajar tersebut adalah...',
    pilihan: [
      'A. Ikut menyebarkan konten provokatif tersebut agar cepat viral di grup obrolan kelas',
      'B. Menyerang pembuat konten dengan komentar kasar dan caci maki di media sosial',
      'C. Menolak ajaran Islam karena merasa sejarahnya terlalu banyak konflik dan pertentangan',
      'D. Melakukan tabayyun ilmiah, membedakan antara pokok akidah yang tidak boleh dikompromikan dengan adat kebiasaan (*al-\'urf*) yang bermanfaat, serta mengedepankan dakwah santun meneladani para ulama'
    ],
    kunciJawaban: 3,
    pembahasan: 'Hikmah terbesar mempelajari sejarah Islam masuk ke Nusantara adalah meneladani sikap kearifan para ulama perintis yang mendahulukan *tabayyun*, mengapresiasi kearifan lokal selagi bermuatan kebajikan (silaturahmi, sedekah, pembacaan shalawat), serta selalu berdakwah dengan lemah lembut (*linan*) sebagaimana tuntunan Q.S. Ali \'Imran: 159 dan Q.S. An-Nahl: 125.',
    tingkatKognitif: 'C6 (Kreasi/Sintesis)'
  }
];

// ==================== DATA MUHASABAH KARAKTER ====================
export const MUHASABAH_SEJARAH_DATA: MuhasabahSejarahItem[] = [
  {
    id: 'muhasabah-1',
    indikator: 'Kedamaian & Anti-Kekerasan (Bilā \'Unfin)',
    targetPerilaku: 'Saya selalu mengutamakan tutur kata yang santun, menjauhi perundungan, dan menolak segala bentuk kekerasan fisik maupun verbal di sekolah dan media sosial.',
    kategori: 'Akhlak Sosial'
  },
  {
    id: 'muhasabah-2',
    indikator: 'Toleransi & Kearifan Budaya (Tasamuh)',
    targetPerilaku: 'Saya mampu menghargai perbedaan suku, bahasa, dan budaya teman di kelas tanpa membeda-bedakan pergaulan.',
    kategori: 'Kebangsaan'
  },
  {
    id: 'muhasabah-3',
    indikator: 'Kejujuran & Integritas Transaksi',
    targetPerilaku: 'Meneladani kejujuran para pedagang muslim perintis, saya tidak pernah berbuat curang dalam tugas, ujian, maupun transaksi di kantin kejujuran.',
    kategori: 'Integritas Diri'
  },
  {
    id: 'muhasabah-4',
    indikator: 'Etos Menuntut Ilmu & Literasi Sejarah',
    targetPerilaku: 'Saya rajin membaca buku, mengkaji sejarah keislaman Nusantara, dan kritis dalam menyaring informasi yang beredar di internet (*tabayyun*).',
    kategori: 'Intelektual'
  },
  {
    id: 'muhasabah-5',
    indikator: 'Menjaga Ukhuwah & Persatuan Bangsa',
    targetPerilaku: 'Saya aktif membangun kerukunan, gotong royong, dan menghindari fanatisme kedaerahan yang dapat memecah belah persaudaraan.',
    kategori: 'Ukhuwah'
  },
  {
    id: 'muhasabah-6',
    indikator: 'Menghargai & Merawat Peninggalan Sejarah',
    targetPerilaku: 'Saya memiliki kepedulian terhadap warisan cagar budaya, masjid bersejarah, dan karya para ulama terdahulu dengan tidak merusak fasilitas umum.',
    kategori: 'Cinta Budaya'
  },
  {
    id: 'muhasabah-7',
    indikator: 'Keteladanan Kreatif dalam Berdakwah Digital',
    targetPerilaku: 'Saya memanfaatkan teknologi dan media sosial untuk menyebarkan pesan kebaikan, prestasi, dan inspirasi positif.',
    kategori: 'Dakwah Digital'
  },
  {
    id: 'muhasabah-8',
    indikator: 'Kesyukuran atas Warisan Iman & Islam di Nusantara',
    targetPerilaku: 'Saya bersyukur lahir di bumi Indonesia yang damai dengan terus menjalankan shalat lima waktu, berbakti kepada orang tua dan guru, serta berakhlak mulia.',
    kategori: 'Spiritualitas'
  }
];
