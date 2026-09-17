// Data materi buku PAI & Budi Pekerti SMP Kelas VIII Semester 2 Bab 10:
// "Merefleksikan Diri terhadap Sejarah dan Peran Kekhalifahan Islam Pasca Khulafaur Rasyidin: Dinasti Turki Usmani"

export interface DalilSejarahItem {
  surah: string;
  ayat: string;
  arab: string;
  latin: string;
  arti: string;
  keterangan: string;
}

export interface HaditsSejarahItem {
  perawi: string;
  nomor: string;
  arab: string;
  latin: string;
  arti: string;
  syarah: string;
}

export interface PenguasaUsmaniItem {
  urutan: number;
  namaLengkap: string;
  namaPopuler: string;
  gelar: string;
  masaMemerintah: string;
  peranDanPencapaian: string[];
  kebijakanMonumental: string;
  nilaiKeteladanan: string;
}

export interface PuncakKejayaanPilarItem {
  id: string;
  bidang: string;
  judul: string;
  ikon: string;
  deskripsi: string;
  tokohKunci: string;
  pencapaianUtama: string[];
  faktaSejarah: string;
  dampakGlobal: string;
}

export interface FaktorKemunduranUsmaniItem {
  id: string;
  kategori: 'Faktor Internal' | 'Faktor Eksternal';
  judul: string;
  penyebabUtama: string;
  analisisHistoris: string;
  dampakFatal: string[];
  ibrahPelajaran: string;
}

export interface HikmahUsmaniItem {
  id: string;
  nomor: number;
  dimensi: string;
  judul: string;
  deskripsi: string;
  dalilTerkait: {
    surah: string;
    teksArab: string;
    terjemahan: string;
  };
  implementasiPelajar: string[];
}

export interface StudiKasusUsmaniItem {
  id: string;
  judul: string;
  latarBelakang: string;
  pertanyaanDiskusi: string;
  analisisHikmah: string;
  solusiKarakterPelajar: string;
}

export interface SoalHotsUsmaniItem {
  id: string;
  nomor: number;
  stimulus: string;
  pertanyaan: string;
  pilihan: string[];
  kunciJawaban: number;
  pembahasan: string;
}

export const MATERI_KELAS_8_SEM_2_BAB_10 = {
  id: 'k8-bab10',
  babNumber: 10,
  kelas: 'Kelas VIII',
  semester: 'Semester 2',
  elemenCp: 'Sejarah Peradaban Islam (SPI)',
  judulBab: 'Merefleksikan Diri terhadap Sejarah dan Peran Kekhalifahan Islam Pasca Khulafaur Rasyidin: Dinasti Turki Usmani',
  subJudul: 'Mengambil Ibrah Kejayaan, Kepemimpinan Berintegritas, dan Menjaga Persatuan Bangsa dari Dinasti Tiga Benua',
  
  pengantar: {
    apersepsi:
      'Pernahkah kamu membayangkan sebuah kekhalifahan Islam yang mampu bertahan lebih dari 6 abad (625 tahun, 1299–1924 M) dan membentang di tiga benua sekaligus: Asia Barat, Afrika Utara, dan Eropa Tenggara? Itulah Dinasti Turki Usmani (The Ottoman Empire). Dari suku pengembara kecil di Anatolia, mereka bertransformasi menjadi adidaya dunia yang menggetarkan imperium Eropa, menaklukkan benteng legendaris Konstantinopel, mengkodifikasi hukum Kanunname yang adil, serta melahirkan karya arsitektur monumental yang dikagumi dunia. Namun, kejayaan mahabesar tersebut pada akhirnya runtuh akibat dekadensi moral, korupsi, intrik kekuasaan, dan keengganan berinovasi sains. Mengkaji sejarah Turki Usmani bukan sekadar bernostalgia dengan kisah penaklukan, melainkan mengambil ibrah berharga bagi generasi muda muslim Indonesia agar tidak mengulangi kesalahan masa lalu dalam merawat peradaban bangsa.',
    dalilAlQuran: [
      {
        surah: 'Q.S. Ar-Rūm [30]',
        ayat: '9',
        arab: 'اَوَلَمْ يَسِيْرُوْا فِى الْاَرْضِ فَيَنْظُرُوْا كَيْفَ كَانَ عَاقِبَةُ الَّذِيْنَ مِنْ قَبْلِهِمْۗ كَانُوْٓا اَشَدَّ مِنْهُمْ قُوَّةً وَّاَثَارُوا الْاَرْضَ وَعَمَرُوْهَآ اَكْثَرَ مِمَّا عَمَرُوْهَا وَجَاۤءَتْهُمْ رُسُلُهُمْ بِالْبَيِّنٰتِۗ فَمَا كَانَ اللّٰهُ لِيَظْلِمَهُمْ وَلٰكِنْ كَانُوْٓا اَنْفُسَهُمْ يَظْلِمُوْنَ',
        latin:
          "Awalam yasīrū fil-arḍi fayanẓurū kaifa kāna 'āqibatul-lażīna min qablihim, kānū asyadda minhum quwwataw wa aṡārul-arḍa wa 'amarūhā akṡara mimmā 'amarūhā wa jā'at-hum rusuluhum bil-bayyināt, famā kānallāhu liyaẓlimahum wa lākin kānū anfusahum yaẓlimūn.",
        arti:
          'Dan tidakkah mereka bepergian di bumi lalu melihat bagaimana kesudahan orang-orang sebelum mereka? Orang-orang itu lebih kuat daripada mereka (sendiri) dan telah mengolah bumi (tanah) serta memakmurkannya lebih banyak daripada apa yang telah mereka makmurkan. Dan para rasul mereka telah datang kepada mereka dengan membawa bukti-bukti yang nyata. Maka Allah sama sekali tidak menzalimi mereka, tetapi merekalah yang menzalimi diri sendiri.',
        keterangan:
          'Ayat ini menegaskan perintah Allah Swt. untuk melakukan kajian historis (tadabbur tarikh). Peradaban-peradaban terdahulu yang memiliki kekuatan militer dan kemegahan fisik luar biasa sekalipun akan hancur manakala mereka menzalimi diri sendiri dengan melanggar syariat, berbuat zalim, dan tenggelam dalam kesombongan.'
      },
      {
        surah: 'Q.S. Al-Anbiyā\' [21]',
        ayat: '105',
        arab: 'وَلَقَدْ كَتَبْنَا فِى الزَّبُوْرِ مِنْۢ بَعْدِ الذِّكْرِ اَنَّ الْاَرْضَ يَرِثُهَا عِبَادِيَ الصّٰلِحُوْنَ',
        latin:
          "Wa laqad katabnā fiz-zabūri mim ba'diż-żikri annal-arḍa yariṡuhā 'ibādiyas-ṣāliḥūn.",
        arti:
          'Dan sungguh, telah Kami tulis di dalam Zabur setelah (tertulis) di dalam Az-Zikr (Lauh Mahfuzh), bahwa bumi ini akan diwarisi oleh hamba-hamba-Ku yang saleh.',
        keterangan:
          'Ayat ini membimbing kita bahwa kepemimpinan dan kekuasaan di muka bumi pada hakikatnya dianugerahkan Allah Swt. kepada hamba-hamba yang saleh—yaitu mereka yang memadukan kesalehan spiritual, keadilan sosial, dan kompetensi keilmuan profesional.'
      }
    ],
    haditsShahih: {
      perawi: 'H.R. Ahmad (Musnad Ahmad No. 18977) & Al-Hakim (Al-Mustadrak No. 8301)',
      nomor: 'Dishahihkan oleh Imam Adz-Dzahabi',
      arab: 'لَتُفْتَحَنَّ الْقُسْطَنْطِينِيَّةُ فَلَنِعْمَ الْأَمِيرُ أَمِيرُهَا وَلَنِعْمَ الْجَيْشُ ذَلِكَ الْجَيْشُ',
      latin:
        "Latuftaḥannal-Qusṭanṭīniyyatu falani'mal-amīru amīruhā wa lani'mal-jaisyu żālikal-jaisy.",
      arti:
        'Pasti Konstantinopel akan ditaklukkan oleh tangan umat Islam. Maka sebaik-baik pemimpin adalah pemimpin penakluknya, dan sebaik-baik pasukan adalah pasukannya itu.',
      syarah:
        'Nubuat (ramalan kenabian) Rasulullah Saw. yang diucapkan lebih dari 8 abad sebelum terbukti nyata. Sejak masa Dinasti Umayyah dan Abbasiyah, puluhan ekspedisi militer para sahabat (seperti Abu Ayyub Al-Anshari r.a.) berusaha menaklukkan Konstantinopel namun belum berhasil menembus benteng Theodosius. Nubuat agung ini baru terwujud secara sempurna pada Selasa, 29 Mei 1453 M oleh pemuda berusia 21 tahun: Sultan Muhammad Al-Fatih (Mehmed II), berkat perpaduan ketakwaan spiritual yang luar biasa, riset sains persenjataan meriam modern, dan strategi militer yang melampaui zamannya.'
    },
    petaKonsep: [
      '1. Sejarah Berdirinya Dinasti Turki Usmani (Suku Kayi, Osman I 1299 M, Wasiat Osman, & Perluasan Wilayah Awal)',
      '2. Puncak Kejayaan Dinasti Turki Usmani (Muhammad Al-Fatih 1453 M, Salim I & Khadimul Haramain, Sulaiman Al-Qanuni & Kanunname, Arsitektur Mimar Sinan, & Militer Janissary)',
      '3. Faktor Kemunduran Dinasti Turki Usmani (Faktor Internal: Dekadensi Moral, Intrik Istana Harem, Korupsi Jabatan, Pemberontakan Janissary; Faktor Eksternal: Renaisans & Revolusi Industri Eropa, The Sick Man of Europe, Runtuhnya 1924 M)',
      '4. Hikmah Sejarah Dinasti Turki Usmani (Keteladanan Karakter Al-Fatih, Supremasi Hukum Berkeadilan, Bahaya Hedonisme, & Aksi Pelajar Muslim Modern)'
    ]
  },

  // 1. SEJARAH BERDIRI
  sejarahBerdiri: {
    latarBelakang:
      'Kekhalifahan Turki Usmani bermula dari suku nomaden bangsa Turki Oghuz cabang Kayi yang mendiami wilayah Asia Tengah (Turkistan). Pada awal abad ke-13 M (sekitar 1220 M), serbuan brutal tentara Mongol pimpinan Jenghis Khan memaksa kepala suku Kayi, Sulaiman Shah, memimpin sekitar 400 keluarga mengungsi ke arah barat menuju wilayah Anatolia (Asia Kecil / Turki modern). Setelah Sulaiman Shah wafat tenggelam di Sungai Eufrat, kepemimpinan suku dilanjutkan oleh putranya yang cakap dan berani, Ertugrul Bey.',
    bantuanKepadaSeljukRum:
      'Ketika tiba di perbatasan Anatolia, Ertugrul melihat pertempuran sengit antara pasukan Kesultanan Seljuk Rum (yang dipimpin Sultan Alauddin Kaikobad II) melawan gerombolan tentara Mongol/Bizantium. Tanpa ragu, Ertugrul memimpin pasukannya terjun membantu Sultan Seljuk hingga meraih kemenangan gemilang. Sebagai wujud terima kasih dan penghargaan atas kesetiaannya, Sultan Seljuk menganugerahkan sebidang tanah subur di perbatasan Bizantium, yaitu Sogut (lembah dekat Eskisehir) dan Pegunungan Domanic kepada klan Ertugrul. Wilayah perbatasan ini kemudian menjadi markas para "Ghazi" (pejuang perbatasan Islam) yang membendung ancaman Kekaisaran Bizantium Romawi Timur.',
    deklarasiKemerdekaan1299:
      'Setelah Ertugrul wafat pada tahun 1281 M, kepemimpinan diteruskan oleh putranya, Osman I (Usman Bey bin Ertugrul, lahir 1258 M). Osman dikenal sebagai pemimpin yang adil, pemberani, bijaksana, dan sangat taat kepada ulama sufi Syekh Edebali. Pada tahun 1299 M, Kesultanan Seljuk Rum runtuh akibat perpecahan internal dan gempuran Mongol dari timur. Melihat kekosongan kekuasaan tersebut, Osman I mendeklarasikan kemerdekaan wilayahnya dan memproklamirkan berdirinya Daulah Usmani (Kesultanan Usmani) pada tahun 1299 M dengan menetapkan Sogut sebagai ibu kota pertama. Dari nama Osman inilah nama dinasti tersebut dikenal di seluruh penjuru dunia sebagai Dinasti Turki Usmani (Ottoman Empire).',
    wasiatOsman: {
      judul: 'Wasiat Bersejarah Osman I kepada Putranya Orhan Bey',
      isiWasiat:
        'Sebelum wafat pada tahun 1326 M di tengah pengepungan kota Bursa, Osman I menyampaikan wasiat luhur yang menjadi pedoman moral seluruh sultan Usmani: "Wahai anakku tercinta! Janganlah engkau sekali-kali sibuk dengan urusan yang tidak diperintahkan oleh Allah Tuhan semesta alam. Jadikanlah syariat Islam sebagai pembimbing utama pemerintahanmu. Dekatilah para ulama, muliakanlah mereka, mintalah nasihat mereka, dan jangan engkau bertindak gegabah tanpa restu mereka. Ketahuilah bahwa tujuan perjuangan kita bukanlah mencari pangkat atau kekuasaan pribadi, melainkan meninggikan kalimatullah (Islam). Berlaku adillah kepada seluruh rakyatmu, baik muslim maupun non-muslim, lindungilah hak-hak kaum lemah, dan jangan sekali-kali mengambil harta yang bukan hakmu."',
      maknaMoral:
        'Wasiat ini menegaskan bahwa fondasi Daulah Usmani dibangun di atas pilar ketaatan kepada syariat, penghormatan tinggi kepada ilmu pengetahuan dan ulama, serta penegakan keadilan sosial tanpa pandang bulu.'
    },
    garisWaktuFaseAwal: [
      {
        tahun: '1299 M',
        peristiwa: 'Deklarasi Berdirinya Daulah Usmani',
        deskripsi: 'Osman I memproklamasikan kemerdekaan Kesultanan Usmani di Sogut setelah runtuhnya Kesultanan Seljuk Rum.'
      },
      {
        tahun: '1326 M',
        peristiwa: 'Penaklukan Kota Bursa',
        deskripsi: 'Orhan Bey (putra Osman I) menaklukkan kota benteng strategis Bursa dan menjadikannya sebagai ibu kota kedua Daulah Usmani serta pusat perniagaan sutra dunia.'
      },
      {
        tahun: '1330-an M',
        peristiwa: 'Pembentukan Pasukan Elit Yanisari (Janissary)',
        deskripsi: 'Sultan Orhan bersama wazir Alauddin Pasha membentuk sistem militer profesional pertama di dunia Islam, Korps Iniceri (Yanisari) melalui sistem devshirme.'
      },
      {
        tahun: '1354 M',
        peristiwa: 'Menyeberang ke Benua Eropa (Benteng Gallipoli)',
        deskripsi: 'Suleyman Pasha (putra Orhan) berhasil merebut Semenanjung Gallipoli, membuka gerbang ekspansi Islam pertama kali ke daratan Benua Eropa (Balkan).'
      },
      {
        tahun: '1389 M',
        peristiwa: 'Pertempuran Kosovo',
        deskripsi: 'Sultan Murad I memenangkan pertempuran legendaris di Kosovo melawan koalisi pasukan salib Balkan, memastikan dominasi Usmani di Eropa Tenggara.'
      },
      {
        tahun: '1396 M',
        peristiwa: 'Perang Nicopolis (Nikopolis)',
        deskripsi: 'Sultan Bayezid I (dijuluki Yildirim / Sang Kilat) meluluhlantakkan koalisi pasukan salib Eropa pimpinan Raja Sigismund dari Hungaria.'
      },
      {
        tahun: '1402 M',
        peristiwa: 'Ujian Berat Perang Ankara (Tragedi Serangan Timur Lenk)',
        deskripsi: 'Sultan Bayezid I dikalahkan oleh ekspedisi Timur Lenk di Ankara. Daulah Usmani memasuki masa krisis kekosongan kekuasaan (Interregnum / Fetret Devri selama 11 tahun) sebelum dipulihkan kembali oleh Sultan Mehmed I (Muhammad I).'
      }
    ]
  },

  // 2. PUNCAK KEJAYAAN
  puncakKejayaan: {
    ringkasan:
      'Puncak kejayaan Dinasti Turki Usmani berlangsung antara pertengahan abad ke-15 hingga akhir abad ke-16 M (sekitar 1453–1566 M). Pada era keemasan ini, Daulah Usmani dipimpin oleh penguasa-penguasa besar yang visioner, di antaranya Sultan Muhammad Al-Fatih (Mehmed II), Sultan Salim I, dan Sultan Sulaiman Al-Qanuni (Suleiman the Magnificent). Wilayah kekuasaannya membentang lebih dari 15 juta kilometer persegi meliputi 3 benua (Asia, Afrika, dan Eropa), memiliki armada laut terkuat di Laut Tengah, sistem administrasi hukum paling tertib, dan menjadi pusat peradaban dunia.',
    tigaSultanKeemasan: [
      {
        urutan: 1,
        namaLengkap: 'Sultan Muhammad II bin Murad II',
        namaPopuler: 'Sultan Muhammad Al-Fatih (Mehmed II)',
        gelar: 'Al-Fatih (Sang Penakluk) & Kaisar Rum',
        masaMemerintah: '1451–1481 M (memerintah di usia 19–49 tahun)',
        peranDanPencapaian: [
          'Menaklukkan Konstantinopel (29 Mei 1453 M) pada usia 21 tahun, mengakhiri Kekaisaran Bizantium Romawi Timur yang telah berkuasa selama 1.123 tahun.',
          'Mewujudkan nubuat sabda Rasulullah Saw. dalam hadits shahih musnad Ahmad sebagai "Sebaik-baik pemimpin dan pasukannya adalah sebaik-baik pasukan".',
          'Menerapkan taktik militer tercanggih di dunia: menggeser 70 kapal perang melintasi daratan berbukit Galata (Tanduk Emas / Golden Horn) dalam satu malam menggunakan batang kayu yang dilumuri lemak sapi dan minyak.',
          'Mengembangkan teknologi artileri meriam raksasa "Basilika" bersama insinyur Urban dari Hungaria yang mampu menembakkan peluru batu seberat 600 kg sejauh 1,6 km untuk meruntuhkan benteng tebal Konstantinopel.',
          'Mengubah nama Konstantinopel menjadi Islambol / Qusthantiniyah (kini Istanbul) dan menjadikannya ibu kota imperium Usmani.',
          'Menerbitkan "Piagam Kebebasan Beragama Al-Fatih" (Ahdnama) yang memberikan perlindungan penuh terhadap hak beribadah, harta benda, dan gereja-gereja kaum Nasrani Ortodoks serta Yahudi.'
        ],
        kebijakanMonumental:
          'Membangun Masjid Fatih, Kompleks Universitas Sahn-i Seman (pusat riset sains, kedokteran, astronomi, dan fikih), serta Istana Topkapi sebagai pusat pemerintahan dan diplomasi dunia.',
        nilaiKeteladanan:
          'Kombinasi sempurna antara kesalehan spiritual (tidak pernah meninggalkan shalat tahajud dan rawatib sejak baligh), penguasaan 7 bahasa dunia (Arab, Persia, Turki, Yunani, Latin, Serbia, Ibrani), visi masa depan, dan etos inovasi teknologi.'
      },
      {
        urutan: 2,
        namaLengkap: 'Sultan Salim I bin Bayezid II',
        namaPopuler: 'Sultan Salim I (Yavuz Sultan Selim)',
        gelar: 'Yavuz (Sang Pemberani/Tegas) & Khadimul Haramain asy-Syarifain',
        masaMemerintah: '1512–1520 M',
        peranDanPencapaian: [
          'Mengalihkan kiblat kekuatan kekhalifahan ke jantung dunia Islam Timur Tengah.',
          'Mengalahkan Dinasti Safawiyah Persia dalam Pertempuran Chaldiran (1514 M).',
          'Menaklukkan Dinasti Mamluk di Syam (Suriah, Palestina, Lebanon) dalam Pertempuran Marj Dabiq (1516 M) dan Mesir dalam Pertempuran Ridaniyah (1517 M).',
          'Mengamankan Dua Kota Suci umat Islam (Makkah Al-Mukarramah dan Madinah Al-Munawwarah) dari ancaman invasi armada Portugis di Laut Merah.',
          'Menerima penyerahan jubah dan peninggalan suci Rasulullah Saw. dari Khalifah Abbasiyah terakhir di Kairo (Al-Mutawakkil III), sehingga sejak 1517 M gelar resmi KHALIFAH UMAT ISLAM sedunia secara sah beralih ke dinasti Turki Usmani.'
        ],
        kebijakanMonumental:
          'Menolak dipanggil "Hakimul Haramain" (Penguasa Dua Kota Suci), melainkan memilih gelar mulia "Khadimul Haramain asy-Syarifain" (Pelayan Dua Kota Suci Makkah dan Madinah) sebagai bentuk ketawadhu\'an di hadapan Allah Swt.',
        nilaiKeteladanan:
          'Kepemimpinan yang tegas, disiplin tinggi, cepat mengambil keputusan strategis, dan melindungi kedaulatan tanah suci Islam.'
      },
      {
        urutan: 3,
        namaLengkap: 'Sultan Sulaiman I bin Salim I',
        namaPopuler: 'Sultan Sulaiman Al-Qanuni (Suleiman the Magnificent)',
        gelar: 'Al-Qanuni (Pemberi Undang-Undang) & The Magnificent (Yang Mahamulia)',
        masaMemerintah: '1520–1566 M (memerintah selama 46 tahun)',
        peranDanPencapaian: [
          'Mencapai puncak keemasan peradaban Dinasti Usmani di bidang teritorial, ekonomi, hukum, sains, seni sastra, dan arsitektur.',
          'Memperluas wilayah hingga ke gerbang Eropa Tengah: menaklukkan Beograd (1521 M), Pulau Rhodes (1522 M), memenangkan Pertempuran Mohacs atas Hungaria (1526 M), serta mengepung kota Wina (1529 M).',
          'Di wilayah timur merebut Baghdad, Mesopotamia, dan Yaman; serta di Afrika Utara menguasai Tripoli, Tunisia, dan Aljazair.',
          'Mengangkat Laksamana Khairuddin Barbarossa sebagai Panglima Armada Laut Agung Usmani (Kapudan Pasha), yang memenangkan Pertempuran Laut Preveza (1538 M) dan menjadikan Laut Mediterania sebagai "Danau Utsmani".',
          'Membantu Kesultanan Aceh Darussalam di Nusantara melawan penjajah Portugis (1560-an M) dengan mengirimkan instruktur militer, armada kapal, dan meriam Lada Sicupak.'
        ],
        kebijakanMonumental:
          'Mengkodifikasi "Kanun-i Osmani" (Kanunname), yaitu undang-undang komprehensif yang menyelaraskan syariat Islam (fikih Hanafi) dengan hukum sipil, tata kelola tanah, sistem perpajakan yang adil, serta perlindungan hak asasi seluruh warga lintas agama.',
        nilaiKeteladanan:
          'Menjunjung tinggi supremasi hukum yang berkeadilan, menolak diskriminasi terhadap rakyat kecil, mencintai ilmu dan kebudayaan, serta memiliki kepedulian ukhuwah islamiyah global hingga ke nusantara.'
      }
    ],
    pilarKejayaan: [
      {
        id: 'pilar-1',
        bidang: 'Hukum & Tata Kelola Pemerintahan',
        judul: 'Supremasi Hukum Berkeadilan (Kanunname & Sistem Millet)',
        ikon: 'Scale',
        deskripsi:
          'Pemerintahan Usmani dikenal memiliki sistem peradilan yang sangat rapi dan adil di bawah bimbingan ulama Syekhul Islam (Mufti Agung). Sulaiman Al-Qanuni mengintegrasikan syariat Islam mazhab Hanafi dengan regulasi hukum perdata/pidana negara (Qanun) yang melindungi rakyat dari kesewenang-wenangan penguasa.',
        tokohKunci: 'Sultan Sulaiman Al-Qanuni & Syekhul Islam Ebussuud Efendi',
        pencapaianUtama: [
          'Sistem "Kanunname" menghapus pajak-pajak liar dan menetapkan tarif pajak tanah (ikhta) yang manusiawi berdasarkan tingkat kesuburan dan hasil panen petani.',
          'Sistem "Millet" (komunitas beragama): memberikan otonomi hukum penuh bagi pemeluk agama Yahudi dan Nasrani (Ortodoks Yunani, Armenia) untuk mengadili perkara perdata mereka menurut kitab suci agama masing-masing.',
          'Para hakim (qadhi) memiliki independensi mutlak; bahkan tercatat dalam sejarah beberapa sultan dituntut di hadapan mahkamah qadhi oleh rakyat jelata dan sultan tunduk mematuhi vonis hakim.'
        ],
        faktaSejarah:
          'Ketika kaum Yahudi diusir dan dibantai di Spanyol melalui inkuisisi (1492 M), Sultan Bayezid II mengirim armada kapal Usmani untuk menyelamatkan mereka dan menampung mereka dengan damai di Istanbul dan Salonika.',
        dampakGlobal:
          'Menjadi model toleransi keberagaman (pluralisme) peradaban paling maju di dunia pada abad ke-15–16 M, ketika benua Eropa masih dilanda perang saudara antarsekte agama.'
      },
      {
        id: 'pilar-2',
        bidang: 'Kekuatan Militer & Maritim',
        judul: 'Pasukan Elit Yanisari & Armada Laut Khairuddin Barbarossa',
        ikon: 'Shield',
        deskripsi:
          'Keunggulan militer Usmani ditopang oleh profesionalisme dan kedisiplinan tingkat tinggi, pembagian divisi pasukan yang modern, serta penguasaan teknologi bubuk mesiu (gunpowder empires).',
        tokohKunci: 'Sultan Orhan, Sultan Murad I, & Laksamana Khairuddin Barbarossa',
        pencapaianUtama: [
          'Korps Yanisari (Janissary / Iniceri): Pasukan infanteri tetap bergaji profesional pertama di Eropa yang diasramakan, dilatih fisik, spiritual, dan militer tingkat tinggi tanpa boleh berkeluarga selama masa dinas aktif.',
          'Korps Sipahi: Pasukan kavaleri berkuda tangguh bersenjata panah dan tombak yang menopang lini pertempuran cepat.',
          'Armada Laut Usmani: Di bawah Laksamana Khairuddin Barbarossa, Usmani memenangkan pertempuran laut terbesar di Preveza (1538 M) melawan armada gabungan Liga Suci Eropa (Spanyol, Venesia, Genoa, dan Paus).'
        ],
        faktaSejarah:
          'Pasukan Usmani memiliki korps musik militer pertama di dunia bernama "Mehteran" yang menabuh genderang raksasa (kös) untuk memompa semangat tempur pasukan muslim dan meruntuhkan mental lawan.',
        dampakGlobal:
          'Menguasai jalur perdagangan maritim strategis antara Asia, Afrika, dan Eropa (Laut Hitam, Laut Merah, Teluk Persia, dan Laut Mediterania).'
      },
      {
        id: 'pilar-3',
        bidang: 'Seni, Arsitektur & Peradaban Kota',
        judul: 'Karya Agung Mimar Sinan & Sistem Kompleks Wakaf (Kulliye)',
        ikon: 'Landmark',
        deskripsi:
          'Arsitektur Usmani memadukan keagungan seni kubah Bizantium dengan spiritualitas Islam, melahirkan mahakarya masjid berkubah megah dengan menara-menara ramping menjulang tinggi laksana pensil ke angkasa.',
        tokohKunci: 'Mimar Sinan (Arsitek Kepala Kerajaan, 1489–1588 M)',
        pencapaianUtama: [
          'Mimar Sinan merancang lebih dari 300 monumen arsitektur spektakuler, di antaranya Masjid Sehzade, Masjid Sulaimaniyah di Istanbul, dan Masjid Selimiye di Edirne yang diakui UNESCO sebagai warisan dunia.',
          'Sistem Kompleks "Kulliye": Setiap masjid besar terintegrasi dengan lembaga sosial masyarakat berbasis WAKAF, meliputi: Madrasah (sekolah tinggi), Darussifa (rumah sakit gratis), Imaret (dapur umum pembagi makanan gratis untuk fakir miskin), Hammam (pemandian umum), dan Karavanserai (penginapan gratis bagi musafir).',
          'Seni Kaligrafi Islam (Khat Tsuluts dan Diwani) serta seni keramik Iznik dengan corak bunga tulip dan warna biru kobalt yang mendunia.'
        ],
        faktaSejarah:
          'Dapur umum Imaret di kompleks Masjid Sulaimaniyah mampu menyajikan makanan hangat bergizi bagi lebih dari 1.000 fakir miskin, musafir, dan santri setiap hari secara cuma-cuma tanpa memungut biaya sepeser pun.',
        dampakGlobal:
          'Menunjukkan peradaban Islam yang tidak hanya megah secara estetika fisik, melainkan memiliki kepedulian sosial kemanusiaan yang sangat luhur.'
      }
    ]
  },

  // 3. FAKTOR KEMUNDURAN
  faktorKemunduran: {
    ringkasan:
      'Setelah wafatnya Sultan Sulaiman Al-Qanuni pada tahun 1566 M, Daulah Usmani perlahan tapi pasti memasuki fase kemandekan (stagnasi) yang kemudian berujung pada masa kemunduran (dekadensi) hingga pembubaran resminya pada tahun 1924 M. Keruntuhan imperium raksasa ini tidak terjadi secara tiba-tiba dalam satu malam, melainkan melalui proses pelemahan bertahap selama lebih dari 3 abad yang disebabkan oleh interaksi kompleks antara faktor internal (kerusakan dari dalam) dan faktor eksternal (tekanan dan kemajuan bangsa Barat).',
    faktorInternal: [
      {
        id: 'int-1',
        kategori: 'Faktor Internal',
        judul: '1. Kemerosotan Kualitas Moral dan Kepemimpinan Para Sultan',
        penyebabUtama:
          'Para sultan generasi penerus pasca Sulaiman Al-Qanuni tidak lagi ditempa di medan perang atau dilatih memimpin provinsi, melainkan hidup terkungkung dalam sangkar emas istana (sistem Kafes).',
        analisisHistoris:
          'Banyak sultan yang naik tahta pada usia kanak-kanak, bermental lemah, tidak memahami strategi geopolitik, dan terbuai gaya hidup mewah, foya-foya (hedonisme), dan berpesta pora di istana. Kekuasaan de facto sering kali jatuh ke tangan ibu suri atau selir istana dalam intrik politik harem (dikenal dengan era "Kadinlar Sultanati" / Kesultanan Perempuan) yang kerap memicu persaingan kotor keluarga istana.',
        dampakFatal: [
          'Kebijakan negara tidak lagi diputuskan berdasarkan musyawarah maslahat umat, melainkan nepotisme dan konspirasi kamar tidur istana.',
          'Sultan kehilangan wibawa sebagai Amirul Mukminin dan komandan tertinggi militer di mata rakyat dan tentara.'
        ],
        ibrahPelajaran:
          'Kekuasaan tanpa integritas moral dan tempaan mental yang matang akan melahirkan pemimpin lemah yang menghancurkan institusi yang dipimpinnya.'
      },
      {
        id: 'int-2',
        kategori: 'Faktor Internal',
        judul: '2. Merebaknya Korupsi, Kolusi, Nepotisme (KKN) & Jual-Beli Jabatan',
        penyebabUtama:
          'Rusaknya birokrasi pemerintahan akibat jabatan wazir, gubernur (pasha), hingga hakim (qadhi) diperjualbelikan kepada penawar uang suap tertinggi.',
        analisisHistoris:
          'Tradisi meritokrasi (pengangkatan pejabat berdasarkan kompetensi, takwa, dan prestasi) yang menjadi pilar kejayaan Usmani awal digantikan oleh suap (risywah). Pejabat yang membeli kursi jabatan akan memeras rakyat jelata dengan pungutan pajak liar berlipat ganda demi mengembalikan modal suap mereka. Hal ini menimbulkan kesengsaraan dahsyat bagi petani dan memicu pemberontakan rakyat di berbagai provinsi (seperti Pemberontakan Jelali di Anatolia).',
        dampakFatal: [
          'Hancurnya sistem perpajakan yang adil dan lumpuhnya kas perbendaharaan negara (Baitul Mal).',
          'Hilangnya kepercayaan rakyat dan hancurnya wibawa hukum syariat akibat para qadhi yang korup menerima suap.'
        ],
        ibrahPelajaran:
          'Korupsi dan suap-menyuap adalah racun paling mematikan yang merusak sendi-sendi keadilan dan mempercepat kehancuran suatu bangsa (sebagaimana sabda Nabi: "Penyuap dan penerima suap tempatnya di neraka").'
      },
      {
        id: 'int-3',
        kategori: 'Faktor Internal',
        judul: '3. Kemerosotan Disiplin dan Pemberontakan Pasukan Yanisari',
        penyebabUtama:
          'Korps Yanisari yang semula berdisiplin baja dan setia kepada sultan berubah menjadi serikat tentara bayaran yang arogan, manja, dan korup.',
        analisisHistoris:
          'Pasukan Yanisari mulai diizinkan menikah, berdagang, dan mewariskan status militer kepada anak cucu mereka tanpa seleksi ketat. Mereka menolak keras modernisasi senjata dan taktik tempur baru. Jika ada sultan atau wazir yang mencoba mereformasi militer, Yanisari akan membalikkan kuali sup raksasa mereka (tanda memberontak), menduduki istana, bahkan membunuh sultan yang reformis (seperti pembunuhan tragis atas Sultan Osman II pada 1622 M dan penggulingan Sultan Selim III pada 1807 M). Korps ini akhirnya baru bisa ditumpas dan dibubarkan secara paksa oleh Sultan Mahmud II pada 1826 M ("Peristiwa Bahagia" / Vaka-i Hayriye).',
        dampakFatal: [
          'Militer Usmani tertinggal jauh dalam taktik persenjataan dibandingkan pasukan Eropa modern.',
          'Instabilitas politik berkepanjangan yang menguras energi dan darah kekhalifahan sendiri.'
        ],
        ibrahPelajaran:
          'Institusi bersenjata yang kehilangan disiplin, berpolitik praktis, dan rakus materi akan menjadi ancaman terbesar bagi keselamatan negara yang seharusnya mereka lindungi.'
      },
      {
        id: 'int-4',
        kategori: 'Faktor Internal',
        judul: '4. Kemandekan Intelektual, Taklid Buta, & Keengganan Berinovasi Sains',
        penyebabUtama:
          'Tumbuhnya sikap jumud (stagnan), menutup pintu ijtihad, dan memandang curiga terhadap penemuan sains dan teknologi baru dari luar.',
        analisisHistoris:
          'Sementara bangsa Eropa giat melakukan riset ilmiah dan eksperimen, madrasah-madrasah Usmani terjebak pada pengulangan teks-teks lama (taklid) dan mencurigai ilmu eksakta modern. Salah satu contoh fatal adalah fatwa larangan mesin cetak (Gutenberg press) beraksara Arab selama hampir 300 tahun (1485–1727 M) karena khawatir menodai mushaf Al-Qur\'an. Akibatnya, tingkat literasi dan peredaran buku ilmu pengetahuan di dunia Islam tertinggal drastis ribuan langkah di belakang bangsa Barat.',
        dampakFatal: [
          'Ketinggalan total dalam bidang teknologi manufaktur, navigasi maritim, kedokteran, dan industri persenjataan.',
          'Hilangnya hegemoni peradaban ilmu pengetahuan yang pernah dipegang dunia Islam.'
        ],
        ibrahPelajaran:
          'Umat Islam diperintahkan untuk terus menuntut ilmu dan bersikap adaptif terhadap kemajuan teknologi yang bermanfaat, bukan mengurung diri dalam kejumudan.'
      }
    ],
    faktorEksternal: [
      {
        id: 'eks-1',
        kategori: 'Faktor Eksternal',
        judul: '1. Kebangkitan Renaisans, Revolusi Ilmiah, & Revolusi Industri Eropa',
        penyebabUtama:
          'Negara-negara Eropa Barat berhasil keluar dari Zaman Kegelapan (Dark Ages) dengan memajukan sains modern, navigasi samudra, dan industrialisasi pabrik massal.',
        analisisHistoris:
          'Penemuan jalur pelayaran samudra baru mengitari Tanjung Harapan oleh bangsa Portugis memotong jalur perdagangan darat dan Laut Tengah yang dikuasai Usmani. Pajak transit sutra dan rempah-rempah yang semula mengalir ke kas Usmani menyusut drastis. Selanjutnya, Revolusi Industri di Inggris dan Prancis memungkinkan mereka memproduksi senjata canggih secara massal dan mengalirkan barang manufaktur murah ke wilayah Usmani, meruntuhkan perekonomian perajin lokal muslim.',
        dampakFatal: [
          'Keterpurukan neraca perdagangan ekonomi Usmani dan defisit anggaran akut.',
          'Kalah total dalam persenjataan artileri, mesiu senapan api, dan taktik perang modern.'
        ],
        ibrahPelajaran:
          'Kekuatan suatu peradaban tidak dapat dipertahankan dengan romantisme masa lalu jika tidak diiringi dengan keunggulan riset sains dan kemandirian ekonomi industri.'
      },
      {
        id: 'eks-2',
        kategori: 'Faktor Eksternal',
        judul: '2. Kekalahan Militer Strategis: Pengepungan Wina II (1683 M) & Perjanjian Karlowitz',
        penyebabUtama:
          'Kekalahan pasukan Usmani di bawah Wazir Agung Kara Mustafa Pasha dalam Pertempuran Wina kedua (1683 M) akibat serbuan kavaleri berkuda Raja Polandia Jan Sobieski.',
        analisisHistoris:
          'Kekalahan di Wina 1683 M mematahkan mitos bahwa tentara Usmani tidak terkalahkan di daratan Eropa. Koalisi negara-negara Kristen Eropa (Liga Suci) melancarkan serangan balik serentak yang memaksa Daulah Usmani menandatangani Perjanjian Karlowitz pada tahun 1699 M. Perjanjian ini menjadi titik balik (turning point) tragis di mana untuk pertama kalinya Usmani harus menyerahkan wilayah kekuasaan yang sangat luas di Eropa Tengah (Hungaria, Transilvania, Podolia) kepada pihak lawan.',
        dampakFatal: [
          'Berubahnya posisi Usmani dari kekuatan ekspansif ofensif menjadi pertahanan defensif yang terus terdesak mundur.',
          'Pukulan psikologis telak yang meruntuhkan moral tentara dan rakyat kekhalifahan.'
        ],
        ibrahPelajaran:
          'Kecerobohan strategi, arogansi kepemimpinan, dan mengabaikan analisis intelijen lapangan berakibat fatal bagi kedaulatan bangsa.'
      },
      {
        id: 'eks-3',
        kategori: 'Faktor Eksternal',
        judul: '3. Gerakan Nasionalisme Separatis & Politik Adu Domba Imperium Barat',
        penyebabUtama:
          'Menyebarnya ideologi nasionalisme bangsa-bangsa taklukan pasca Revolusi Prancis yang diprovokasi dan didanai oleh kekuatan imperialis Eropa (Rusia, Inggris, Prancis).',
        analisisHistoris:
          'Kekaisaran Rusia secara konsisten memprovokasi pemberontakan etnis Slavia dan Kristen Ortodoks di kawasan Balkan (Yunani, Serbia, Bulgaria, Rumania) dengan dalih melindungi sesama Ortodoks. Wilayah Balkan lepas satu per satu melalui perang kemerdekaan berdarah. Di sisi lain, intelijen Inggris (seperti T.E. Lawrence / Lawrence of Arabia) mengadu domba suku-suku Arab di Timur Tengah agar memberontak melawan kekhalifahan Usmani dalam Perang Dunia I (1916 M) dengan janji kemerdekaan palsu yang berujung pada penjajahan kolonial Inggris dan Prancis atas tanah Arab (Perjanjian Sykes-Picot).',
        dampakFatal: [
          'Pecahnya ukhuwah islamiyah dan tercabik-cabiknya wilayah kekhalifahan menjadi negara-negara boneka kecil.',
          'Pembantaian dan pengusiran jutaan penduduk muslim dari tanah Balkan.'
        ],
        ibrahPelajaran:
          'Politik adu domba (divide et impera) pihak luar hanya bisa berhasil jika umat Islam mudah terhasut fanatisme kesukuan/etnosentrisme sempit dan melupakan ikatan persaudaraan seiman.'
      },
      {
        id: 'eks-4',
        kategori: 'Faktor Eksternal',
        judul: '4. Julukan "The Sick Man of Europe", Perang Dunia I, & Pembubaran 1924 M',
        penyebabUtama:
          'Daulah Usmani terjerat hutang piutang luar negeri yang mencekik (konsesi kapituler), keterlibatan fatal dalam Perang Dunia I (1914–1918 M), dan runtuhnya institusi kekhalifahan.',
        analisisHistoris:
          'Pada abad ke-19 M, Usmani dijuluki Tsar Rusia sebagai "The Sick Man of Europe" (Orang Sakit dari Eropa) yang wilayahnya tinggal menunggu dibagi-bagi oleh kekuatan besar. Masuknya Usmani ke kancah Perang Dunia I di pihak Jerman dan Blok Sentral berujung kekalahan telak. Pasukan Sekutu menduduki ibu kota Istanbul dan memaksakan Perjanjian Sevres (1920 M) yang memotong habis seluruh wilayah Usmani. Dari abu kekalahan muncullah gerakan perlawanan nasionalis pimpinan Mustafa Kemal Atatürk. Setelah memenangkan perang kemerdekaan Turki dan menandatangani Perjanjian Lausanne (1923 M), Majelis Nasional Agung Turki menghapuskan kesultanan pada 1922 M, memproklamasikan Republik Turki sekuler, dan secara resmi MENGHAPUSKAN LEMBAGA KEKHALIFAHAN ISLAM pada tanggal 3 Maret 1924 M.',
        dampakFatal: [
          'Berakhirnya era kekhalifahan Islam yang telah menaungi umat selama lebih dari 1.300 tahun sejak wafatnya Rasulullah Saw.',
          'Dunia Islam terpecah-belah menjadi puluhan negara-bangsa yang rentan diintervensi kekuatan adidaya global.'
        ],
        ibrahPelajaran:
          'Ketergantungan ekonomi dan hutang pada pihak asing adalah pintu masuk hilangnya kedaulatan politik dan martabat bangsa.'
      }
    ]
  },

  // 4. HIKMAH SEJARAH
  hikmahSejarah: [
    {
      id: 'hikmah-1',
      nomor: 1,
      dimensi: 'Dimensi Spiritual & Kepemimpinan Visioner',
      judul: 'Meneladani Keimanan, Disiplin Ibadah, dan Visi Sultan Muhammad Al-Fatih',
      deskripsi:
        'Kemenangan agung penaklukan Konstantinopel membuktikan bahwa pertolongan Allah Swt. (nashrullah) dianugerahkan kepada pemimpin dan generasi yang memadukan kedalaman takwa spiritual (tidak pernah lalai shalat malam) dengan kerja keras ilmiah dan penguasaan sains persenjataan mutakhir.',
      dalilTerkait: {
        surah: 'Q.S. Muhammad [47]: 7',
        teksArab: 'يٰٓاَيُّهَا الَّذِيْنَ اٰمَنُوْٓا اِنْ تَنْصُرُوا اللّٰهَ يَنْصُرْكُمْ وَيُثَبِّتْ اَقْدَامَكُمْ',
        terjemahan:
          'Wahai orang-orang yang beriman! Jika kamu menolong (agama) Allah, niscaya Dia akan menolongmu dan meneguhkan kedudukanmu.'
      },
      implementasiPelajar: [
        'Membangun disiplin ibadah wajib dan sunnah (shalat tepat waktu di masjid, shalat dhuha dan tahajud) sebagai sumber ketenangan batin dan kekuatan mental.',
        'Memiliki cita-cita luhur yang tinggi dan tidak mudah berputus asa dalam menghadapi kesulitan belajar.',
        'Menguasai bahasa asing dan literasi digital global untuk mendakwahkan kebaikan dan mengharumkan nama bangsa.'
      ]
    },
    {
      id: 'hikmah-2',
      nomor: 2,
      dimensi: 'Dimensi Hukum & Toleransi Keberagaman',
      judul: 'Menegakkan Supremasi Hukum yang Adil dan Merawat Toleransi Kebangsaan',
      deskripsi:
        'Kejayaan Sulaiman Al-Qanuni dengan Kanunname dan sistem Millet membuktikan bahwa keadilan hukum tanpa tebang pilih serta perlindungan tulus terhadap hak-hak warga minoritas non-muslim adalah kunci utama stabilitas, kedamaian, dan kemakmuran suatu negara besar.',
      dalilTerkait: {
        surah: 'Q.S. An-Nisā\' [4]: 58',
        teksArab: 'اِنَّ اللّٰهَ يَأْمُرُكُمْ اَنْ تُؤَدُّوا الْاَمٰنٰتِ اِلٰٓى اَهْلِهَاۙ وَاِذَا حَكَمْتُمْ بَيْنَ النَّاسِ اَنْ تَحْكُمُوْا بِالْعَدْلِ ۗ اِنَّ اللّٰهَ نِعِمَّا يَعِظُكُمْ بِهٖ ۗ اِنَّ اللّٰهَ كَانَ سَمِيْعًاۢ بَصِيْرًا',
        terjemahan:
          'Sungguh, Allah menyuruhmu menyampaikan amanat kepada yang berhak menerimanya, dan apabila kamu menetapkan hukum di antara manusia hendaknya kamu menetapkannya dengan adil. Sungguh, Allah sebaik-baik yang memberi pengajaran kepadamu. Sungguh, Allah Maha Mendengar, Maha Melihat.'
      },
      implementasiPelajar: [
        'Mematuhi tata tertib sekolah dan hukum negara secara ikhlas, bukan semata karena takut sanksi atau diawasi guru.',
        'Menghargai perbedaan suku, agama, dan latar belakang teman sekelas tanpa diskriminasi maupun perundungan (anti-bullying).',
        'Berlaku jujur dan amanah saat mengemban tugas kelompok, kepengurusan OSIS, atau ujian sekolah.'
      ]
    },
    {
      id: 'hikmah-3',
      nomor: 3,
      dimensi: 'Dimensi Ibrah Dekadensi & Bahaya Hedonisme',
      judul: 'Menghindari Kemewahan Berlebihan (Hedonisme), Korupsi, dan Perpecahan Internal',
      deskripsi:
        'Runtuhnya Dinasti Usmani memberi pelajaran sejarah yang sangat tegas bahwa kebesaran fisik, luasnya wilayah, dan persenjataan tidak ada artinya jika para elite dan warganya terjangkit penyakit moral: foya-foya (hedonisme), suap-menyuap (risywah), perebutan kekuasaan, dan perpecahan persaudaraan.',
      dalilTerkait: {
        surah: 'Q.S. Al-Anfāl [8]: 46',
        teksArab: 'وَاَطِيْعُوا اللّٰهَ وَرَسُوْلَهٗ وَلَا تَنَازَعُوْا فَتَفْشَلُوْا وَتَذْهَبَ رِيْحُكُمْ وَاصْبِرُوْاۗ اِنَّ اللّٰهَ مَعَ الصّٰبِرِيْنَ',
        terjemahan:
          'Dan taatilah Allah dan Rasul-Nya dan janganlah kamu berselisih, yang menyebabkan kamu menjadi gentar dan kekuatanmu hilang dan bersabarlah. Sungguh, Allah beserta orang-orang yang sabar.'
      },
      implementasiPelajar: [
        'Membiasakan pola hidup sederhana (zuhud dan qana\'ah) serta menjauhi gaya hidup pamer kemewahan (flexing) di media sosial.',
        'Menolak tegas segala bentuk kecurangan, titip absen, gratifikasi contek, dan suap sejak usia sekolah.',
        'Menjaga kerukunan dan persatuan sesama teman, menghindari tawuran antarpelajar, dan menyelesaikan konflik melalui musyawarah damai.'
      ]
    },
    {
      id: 'hikmah-4',
      nomor: 4,
      dimensi: 'Dimensi Inovasi Sains & Kemajuan Masa Depan',
      judul: 'Menolak Sikap Jumud (Kemandekan Berpikir) dan Menguasai Sains-Teknologi Modern',
      deskripsi:
        'Ketertinggalan Usmani akibat menolak inovasi percetakan dan meremehkan sains Barat menjadi peringatan keras bagi umat Islam modern. Islam adalah agama yang menjunjung tinggi ilmu, riset, dan keterbukaan terhadap inovasi teknologi yang membawa kemaslahatan.',
      dalilTerkait: {
        surah: 'Q.S. Ar-Ra\'d [13]: 11',
        teksArab: 'اِنَّ اللّٰهَ لَا يُغَيِّرُ مَا بِقَوْمٍ حَتّٰى يُغَيِّرُوْا مَا بِاَنْفُسِهِمْ',
        terjemahan:
          'Sesungguhnya Allah tidak akan mengubah keadaan suatu kaum sebelum mereka mengubah keadaan diri mereka sendiri.'
      },
      implementasiPelajar: [
        'Rajin membaca buku, mengasah rasa ingin tahu ilmiah (curiosity), dan aktif dalam kegiatan penelitian atau klub sains sekolah.',
        'Memanfaatkan gawai dan kecerdasan buatan (AI) secara produktif untuk meningkatkan kecakapan ilmu pengetahuan, bukan untuk hiburan sia-sia.',
        'Bercita-cita menjadi ahli di bidang sains, kedokteran, teknik, dan teknologi digital demi kemajuan bangsa Indonesia dan peradaban dunia.'
      ]
    }
  ],

  // 5. STUDI KASUS
  studiKasus: [
    {
      id: 'kasus-1',
      judul: 'Studi Kasus 1: Komparasi Etos Hidup Osman I (Sederhana) vs Sultan Usmani Akhir (Istana Mewah Dolmabahce)',
      latarBelakang:
        'Pada masa Osman I dan Orhan Bey, para penguasa Usmani hidup di tenda dan rumah batu sederhana. Ketika Osman I wafat, ia hanya meninggalkan sepasang baju wol, sebilah pedang, beberapa ekor kuda perang, dan sejumlah domba; tanpa tumpukan emas atau perhiasan mewah. Sebaliknya, pada abad ke-19 M, para sultan Usmani akhir menghabiskan dana kas negara yang defisit dan meminjam hutang bunga tinggi dari bank-bank Eropa demi membangun Istana Dolmabahce yang bertabur 14 ton emas murni di langit-langitnya serta lampu kristal seberat 4,5 ton hadiah dari Ratu Victoria Inggris. Tak lama setelah itu, negara mengalami kebangkrutan ekonomi total dan jatuh ke tangan pengawasan komisi hutang asing.',
      pertanyaanDiskusi:
        'Mengapa pergeseran dari gaya hidup sederhana berorientasi perjuangan menuju gaya hidup hedonisme dan bermewah-mewahan selalu menjadi lonceng kematian bagi suatu peradaban besar? Bagaimana kamu menerapkannya dalam kehidupan pribadimu?',
      analisisHikmah:
        'Ibnu Khaldun dalam kitab monumentalnya "Muqaddimah" merumuskan teori siklus peradaban: generasi perintis memiliki solidaritas sosial (ashabiyah) kuat dan hidup bersahaja; namun ketika generasi penerus terbiasa hidup mewah, jiwa ksatria mereka luntur, mereka menjadi malas, korup, dan tidak berdaya mempertahankan kedaulatan ketika krisis melanda. Kemewahan yang didanai hutang adalah ilusi kehancuran.',
      solusiKarakterPelajar:
        'Latihlah diri dengan sifat Qana\'ah (merasa cukup dan bersyukur), mengutamakan kebutuhan pokok di atas keinginan gengsi, serta menghindari jeratan gaya hidup konsumtif atau pinjaman online demi gengsi penampilan semu.'
    },
    {
      id: 'kasus-2',
      judul: 'Studi Kasus 2: Pelajaran dari Pasukan Yanisari: Dari Garda Terdepan Pembela Umat Menjadi Korporasi Politik Arogan yang Korup',
      latarBelakang:
        'Pada abad ke-14–15 M, Korps Yanisari (Janissary) dipuji dunia sebagai pasukan paling berdisiplin di muka bumi. Mereka hidup zuhud, rajin shalat, tidak diperbolehkan menikah selama dinas aktif, dan bertekad syahid membela kehormatan Islam. Namun pada abad ke-17–18 M, kedisiplinan runtuh. Mereka diizinkan menikah dan berbisnis, jabatan prajurit diperjualbelikan, dan latihan perang ditinggalkan. Yanisari berubah menjadi kelompok penekan bersenjata yang bertindak seperti preman politik: memeras kas negara, menolak peremajaan senjata modern, dan membantai sultan-sultan yang berusaha mereformasi militer (seperti pembunuhan Sultan Osman II). Pada akhirnya, korps ini menjadi benalu negara hingga harus ditumpas dan dibubarkan pada tahun 1826 M.',
      pertanyaanDiskusi:
        'Pelajaran berharga apa yang dapat kita ambil mengenai pentingnya menjaga integritas, profesionalisme, dan bahaya ketika suatu institusi keamanan berorientasi pada kepentingan materi dan politik praktis?',
      analisisHikmah:
        'Ketika sebuah institusi mengkhianati misi suci pendiriannya dan terseret ke dalam keserakahan materi serta arogansi kekuasaan, ia akan berbalik menjadi perusak institusi itu sendiri. Loyalitas yang semula ditujukan untuk membela rakyat dan agama telah berubah menjadi pemujaan kepentingan kelompok eksklusif.',
      solusiKarakterPelajar:
        'Jadilah pribadi yang amanah dalam setiap organisasi yang kamu ikuti (OSIS, Pramuka, Rohis, PMR). Jangan pernah memanfaatkan jabatan atau seragam organisasi untuk mencari keuntungan pribadi, menindas teman lain, atau bersikap arogan.'
    },
    {
      id: 'kasus-3',
      judul: 'Studi Kasus 3: Keterlambatan Adopsi Mesin Cetak (3 Abad) & Urgensi Literasi Digital Generasi Z Muslim',
      latarBelakang:
        'Johannes Gutenberg menemukan mesin cetak pada tahun 1440-an M di Jerman, memicu ledakan penyebaran ilmu pengetahuan dan buku-buku di Eropa. Namun di Daulah Usmani, timbul kekhawatiran dan fatwa sebagian kalangan ulama yang melarang pencetakan buku beraksara Arab karena takut terjadi kesalahan cetak lafaz suci dan mengancam mata pencaharian ribuan juru tulis tangan (khattath). Akibatnya, mesin cetak beraksara Arab baru diizinkan beroperasi secara resmi pada tahun 1727 M (oleh Ibrahim Muteferrika)—terlambat hampir 3 abad! Dampaknya, ketika rata-rata warga Eropa sudah terbiasa membaca puluhan buku, sebagian besar warga Usmani masih buta huruf dan kekurangan buku rujukan sains modern.',
      pertanyaanDiskusi:
        'Bagaimana keterlambatan adopsi teknologi karena sikap defensif memengaruhi nasib suatu bangsa? Bagaimana generasi muslim hari ini seharusnya merespons revolusi teknologi modern seperti Artificial Intelligence (AI)?',
      analisisHikmah:
        'Teknologi pada hakikatnya adalah wasilah (alat). Menolak teknologi bermanfaat hanya karena ketakutan tanpa dasar yang rasional adalah kekeliruan fatal. Seharusnya umat Islam menjadi pelopor yang menguasai, mengarahkan, dan memanfaatkan teknologi tersebut sesuai rambu-rambu syariat dan etika moral.',
      solusiKarakterPelajar:
        'Jangan bersikap pasif atau sekadar menjadi konsumen teknologi asing. Pelajar muslim harus giat belajar pemrograman, sains data, kecerdasan buatan, dan literasi digital berakhlak mulia agar mampu menjadi produsen inovasi teknologi yang membawa berkah bagi umat manusia.'
    }
  ],

  // 6. MUHASABAH KARAKTER
  muhasabahKarakter: [
    {
      id: 1,
      indikator: 'Visi dan Cita-Cita Luhur',
      pernyataan:
        'Saya memiliki cita-cita mulia yang terencana untuk mengharumkan nama bangsa dan bermanfaat bagi umat, meneladani visi gigih Sultan Muhammad Al-Fatih.'
    },
    {
      id: 2,
      indikator: 'Disiplin Ibadah Spiritual',
      pernyataan:
        'Saya menjaga shalat lima waktu tepat waktu dan membiasakan amalan sunnah (tahajud, dhuha, membaca Al-Qur\'an) sebagai fondasi moral dan ketenangan hati.'
    },
    {
      id: 3,
      indikator: 'Menjunjung Supremasi Aturan & Hukum',
      pernyataan:
        'Saya mematuhi tata tertib sekolah dan rambu-rambu hukum di masyarakat dengan penuh kesadaran dan keikhlasan, meneladani nilai Kanunname Sulaiman Al-Qanuni.'
    },
    {
      id: 4,
      indikator: 'Toleransi dan Perlindungan Sesama',
      pernyataan:
        'Saya menghormati teman yang berbeda suku, agama, dan latar belakang sosial, serta tidak pernah melakukan diskriminasi atau perundungan (bullying).'
    },
    {
      id: 5,
      indikator: 'Menolak Segala Bentuk Suap & Kecurangan',
      pernyataan:
        'Saya bersikap jujur dalam ujian, tugas kelompok, dan pergaulan sekolah, serta membenci perbuatan suap, gratifikasi contek, maupun korupsi.'
    },
    {
      id: 6,
      indikator: 'Pola Hidup Sederhana (Anti-Hedonisme)',
      pernyataan:
        'Saya membiasakan hidup bersahaja (qana\'ah), tidak boros, serta tidak suka pamer kemewahan (flexing) demi mengejar gengsi semu di media sosial.'
    },
    {
      id: 7,
      indikator: 'Keterbukaan terhadap Inovasi Sains & Riset',
      pernyataan:
        'Saya rajin membaca buku, mengasah literasi digital, dan antusias mempelajari teknologi baru demi menghindari kejumudan berpikir.'
    },
    {
      id: 8,
      indikator: 'Menjaga Persatuan & Ukhuwah Kebangsaan',
      pernyataan:
        'Saya aktif merawat kerukunan, menolak hoaks yang mengadu domba suku dan agama, serta mengutamakan kepentingan bersama di atas ego kelompok.'
    }
  ],

  // 7. KUIS HOTS
  kuisHots: [
    {
      id: 'kuis-1',
      nomor: 1,
      stimulus:
        'Pada tahun 1453 M, Sultan Muhammad Al-Fatih yang masih berusia 21 tahun berhasil menaklukkan Konstantinopel—benteng yang selama lebih dari 800 tahun gagal ditembus oleh puluhan ekspedisi militer sebelumnya. Keberhasilan ini tidak hanya didasarkan pada keberanian fisik, melainkan integrasi matang antara penguasaan sains artileri meriam raksasa Basilika, inovasi taktik menggeser 70 kapal melintasi bukit daratan dalam satu malam, dan kesiapan spiritual di mana beliau dan pasukannya tidak pernah meninggalkan shalat malam.',
      pertanyaan:
        'Berdasarkan stimulus sejarah tersebut, kesimpulan paling tepat mengenai faktor kunci terwujudnya nubuat Rasulullah Saw. tentang penaklukan Konstantinopel adalah...',
      pilihan: [
        'A. Kemenangan semata-mata karena jumlah pasukan Usmani yang jauh melampaui tentara Bizantium tanpa memerlukan perencanaan.',
        'B. Perpaduan harmonis antara kedalaman spiritualitas takwa, keunggulan riset teknologi militer, dan kepemimpinan strategis yang berani berinovasi.',
        'C. Bantuan taktik dari kekuatan sekutu Eropa yang bersedia membuka pintu gerbang benteng Konstantinopel dari dalam.',
        'D. Keberuntungan semata karena benteng pertahanan Konstantinopel sudah rapuh dimakan usia sejak ratusan tahun sebelumnya.'
      ],
      kunciJawaban: 1, // B
      pembahasan:
        'Jawaban yang tepat adalah B. Kemenangan legendaris Sultan Muhammad Al-Fatih merupakan bukti nyata perpaduan antara kesalehan spiritual (isti\'anah billah, shalat malam, ketakwaan) dengan ikhtiar ilmiah dan teknologi tertinggi pada masanya (meriam Basilika, strategi darat melompati bukit Galata, koordinasi diplomasi matang). Islam mengajarkan bahwa pertolongan Allah datang bersamaan dengan ikhtiar terbaik dan penguasaan ilmu.'
    },
    {
      id: 'kuis-2',
      nomor: 2,
      stimulus:
        'Sultan Sulaiman Al-Qanuni dikenal di dunia Islam dengan gelar "Al-Qanuni" (Sang Pembuat Undang-Undang) dan di dunia Barat dengan sebutan "Suleiman the Magnificent". Salah satu peninggalan monumentalnya adalah kodifikasi Kanun-i Osmani yang menyelaraskan syariat Islam dengan hukum negara serta penerapan sistem Millet yang memberi hak otonomi hukum kepada warga non-muslim.',
      pertanyaan:
        'Nilai karakter kepemimpinan yang paling menonjol dan dapat direfleksikan oleh generasi muda Indonesia dari kebijakan hukum Sultan Sulaiman Al-Qanuni adalah...',
      pilihan: [
        'A. Mengutamakan supremasi hukum yang adil, anti-diskriminasi, dan melindungi hak-hak seluruh warga negara demi terciptanya harmoni sosial.',
        'B. Menetapkan hukuman seberat-beratnya bagi musuh politik demi mempertahankan kekuasaan dinasti agar tidak tergoyahkan.',
        'C. Menghapuskan seluruh hukum adat dan mewajibkan seluruh rakyat memeluk agama yang sama dengan sultan.',
        'D. Memusatkan seluruh kewenangan peradilan di tangan keluarga kerajaan tanpa melibatkan para ulama dan hakim independen.'
      ],
      kunciJawaban: 0, // A
      pembahasan:
        'Jawaban yang tepat adalah A. Sultan Sulaiman Al-Qanuni meletakkan fondasi supremasi hukum yang adil dan inklusif. Sistem Millet dan Kanunname menjamin perlindungan hukum bagi semua golongan tanpa membedakan agama dan suku. Nilai ini sangat relevan bagi bangsa Indonesia yang berlandaskan hukum dan Bhinneka Tunggal Ika.'
    },
    {
      id: 'kuis-3',
      nomor: 3,
      stimulus:
        'Pada masa-masa kemundurannya, jabatan strategis di birokrasi pemerintahan Usmani seperti Wazir (Perdana Menteri), Pasha (Gubernur), hingga Qadhi (Hakim) tidak lagi diangkat berdasarkan kecakapan ilmu dan akhlak, melainkan diperjualbelikan melalui uang suap (risywah). Pejabat yang telah mengeluarkan banyak uang kemudian membebankan pajak tinggi sewenang-wenang kepada rakyat jelata.',
      pertanyaan:
        'Analisis sosiologis dan historis yang paling tepat mengenai dampak fatal dari praktik suap-menyuap (risywah) dalam birokrasi Daulah Usmani tersebut adalah...',
      pilihan: [
        'A. Meningkatkan pendapatan kas negara karena uang hasil jual-beli jabatan langsung dimasukkan ke kas Baitul Mal.',
        'B. Terjadinya seleksi alamiah yang melahirkan para birokrat cerdas yang mampu mengumpulkan modal bisnis mandiri.',
        'C. Runtuhnya kepercayaan rakyat, rusaknya tatanan keadilan sosial, dan memicu pemberontakan massal yang mempercepat kehancuran negara.',
        'D. Mendorong pertumbuhan ekonomi petani karena pejabat yang membeli jabatan berupaya memajukan sektor pertanian lokal.'
      ],
      kunciJawaban: 2, // C
      pembahasan:
        'Jawaban yang tepat adalah C. Praktik suap (risywah) dan korupsi merusak meritokrasi, menempatkan orang-orang tak berkompeten dan berakhlak buruk di posisi kekuasaan, menindas rakyat kecil melalui pajak liar, serta menghilangkan legitimasi hukum syariat. Hal ini memicu pemberontakan daerah (seperti Pemberontakan Jelali) dan mempercepat kebangkrutan moral serta finansial kekhalifahan.'
    },
    {
      id: 'kuis-4',
      nomor: 4,
      stimulus:
        'Di tengah pesatnya Revolusi Industri di Eropa Barat yang memproduksi persenjataan canggih dan barang massal, sebagian kalangan internal Usmani bersikap apriori dan menolak inovasi teknologi. Salah satu contoh nyata adalah pelarangan penggunaan mesin cetak beraksara Arab selama hampir tiga abad (1485–1727 M). Sementara jutaan buku sains beredar di Eropa, literasi sains di Usmani terhambat.',
      pertanyaan:
        'Ibrah (pelajaran) kritis yang wajib diambil oleh pelajar muslim masa kini dari peristiwa sejarah pelarangan mesin cetak tersebut adalah...',
      pilihan: [
        'A. Menolak seluruh produk teknologi dari Barat karena berpotensi merusak keaslian ajaran agama Islam.',
        'B. Umat Islam harus bersikap terbuka, kritis, dan adaptif terhadap inovasi sains-teknologi modern agar tidak tertinggal dan menjadi bangsa yang lemah.',
        'C. Cukup berfokus pada pelestarian tradisi manuskrip tulisan tangan tanpa perlu mempelajari komputer dan teknologi digital.',
        'D. Menyerahkan seluruh pengembangan teknologi kepada bangsa asing sementara umat Islam berfokus pada urusan akhirat semata.'
      ],
      kunciJawaban: 1, // B
      pembahasan:
        'Jawaban yang tepat adalah B. Keterbelakangan literasi dan sains akibat menolak mesin cetak membuktikan bahwa sikap menutup diri (jumud) terhadap perkembangan teknologi adalah bencana peradaban. Islam mewajibkan umatnya mencari hikmah dan ilmu di manapun berada. Generasi muslim modern harus menguasai teknologi terkini (seperti kecerdasan buatan, sains data, dan rekayasa teknologi) demi kemaslahatan umat.'
    },
    {
      id: 'kuis-5',
      nomor: 5,
      stimulus:
        'Perhatikan matrik komparasi sejarah dua fase Dinasti Usmani berikut:\n• Fase A (Awal s.d. Puncak): Penguasa hidup sederhana, dekat dengan ulama, pasukan Yanisari disiplin dan zuhud, memajukan wakaf dan madrasah, rakyat terlindungi hukum.\n• Fase B (Kemunduran): Penguasa hidup mewah di istana Dolmabahce berhutang luar negeri, intrik politik harem, korupsi birokrasi, pasukan Yanisari memberontak, terjerumus perang dan terpecah belah.',
      pertanyaan:
        'Berdasarkan perbandingan kedua fase di atas, kesimpulan reflektif yang sejalan dengan firman Allah Swt. dalam Q.S. Ar-Rūm [30]: 9 mengenai kehancuran peradaban masa lalu adalah...',
      pilihan: [
        'A. Kehancuran suatu bangsa semata-mata ditentukan oleh takdir yang tidak ada kaitannya dengan perilaku dan akhlak para pemimpinnya.',
        'B. Peradaban yang memiliki wilayah luas dan militer kuat tidak akan pernah bisa dikalahkan oleh faktor kelemahan moral internal.',
        'C. Runtuhnya sebuah bangsa bukanlah karena kezaliman Allah, melainkan karena ulah tangan mereka sendiri yang tenggelam dalam korupsi, hedonisme, dan kezaliman.',
        'D. Setiap peradaban pasti akan hancur tepat setelah berusia 600 tahun tanpa memandang apakah warganya berakhlak baik atau buruk.'
      ],
      kunciJawaban: 2, // C
      pembahasan:
        'Jawaban yang tepat adalah C. Firman Allah Swt. dalam Q.S. Ar-Rum: 9 menegaskan: "...famā kānallāhu liyaẓlimahum wa lākin kānū anfusahum yaẓlimūn" (Allah sama sekali tidak menzalimi mereka, melainkan merekalah yang menzalimi diri mereka sendiri). Dinasti Usmani tidak runtuh karena Allah menzalimi mereka, melainkan karena dekadensi moral, korupsi, hedonisme istana, perpecahan, dan kezaliman internal yang menggerogoti kekuatan mereka sendiri.'
    }
  ]
};
