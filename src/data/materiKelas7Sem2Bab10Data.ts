export interface TokohPemimpinAndalusia {
  id: string;
  name: string;
  arabicName: string;
  gelar: string;
  periodMasehi: string;
  peranKunci: string;
  biografiRingkas: string;
  kebijakanMonumen: string[];
  kutipanSejarah: string;
}

export interface BidangKontribusiAndalusia {
  id: string;
  bidang: string;
  iconName: string;
  deskripsi: string;
  tokohCendekiawan: {
    nama: string;
    namaBarat: string;
    karyaUtama: string;
    penemuanDanJasa: string;
  }[];
  monumenDanWarisan: {
    nama: string;
    lokasi: string;
    deskripsi: string;
  }[];
  pengaruhBagiDuniaModern: string;
}

export interface FaktorKemunduranAndalusia {
  nomor: number;
  kategori: 'Internal' | 'Eksternal';
  faktor: string;
  penjelasanKasus: string;
  dampakSejarah: string;
  ibrahPelajar: string;
}

export interface HikmahSejarahAndalusia {
  nomor: number;
  judul: string;
  maknaPelajaran: string;
  dalilRujukan: {
    surah: string;
    arabic: string;
    arti: string;
  };
  relevansiZamanNow: string;
  refleksiKarakter: string;
}

export interface SoalHotsBab10 {
  id: string;
  nomor: number;
  kasus: string;
  pertanyaan: string;
  pilihan: string[];
  kunciJawaban: number;
  pembahasan: string;
}

export interface MateriKelas7Sem2Bab10 {
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
  sejarahBerdirinya: {
    latarBelakang: string;
    kronologiPenaklukan711M: {
      tahun: string;
      peristiwa: string;
      rincian: string;
    }[];
    kisahThariqBinZiyad: {
      pidatoLegendaris: string;
      maknaFilosofis: string;
      strategiMiliter: string;
    };
    faseKepemimpinan: {
      fase: string;
      periode: string;
      karakteristik: string;
    }[];
    kisahAbdurrahmanAdDakhil: {
      julukan: string;
      perjalananHijrah: string;
      pencapaianMendirikanKeamiran: string;
    };
  };
  masaKeemasan: {
    ikhtisar: string;
    puncakKejayaanCordoba: {
      julukan: string;
      populasiDanKemajuanKota: string;
      universitasDanPerpustakaan: string;
      toleransiTigaAgama: string;
    };
    khalifahGemilang: TokohPemimpinAndalusia[];
  };
  kontribusiPeradaban: BidangKontribusiAndalusia[];
  faktorKemunduran: FaktorKemunduranAndalusia[];
  hikmahSejarah: HikmahSejarahAndalusia[];
  kuisHots: SoalHotsBab10[];
}

export const MATERI_KELAS_7_SEM_2_BAB_10: MateriKelas7Sem2Bab10 = {
  babNumber: 10,
  judulBab: 'Meneladani Kejayaan Peradaban Islam Daulah Bani Umayyah Periode Andalusia',
  subJudul: 'Merefleksikan Diri terhadap Sejarah, Masa Keemasan, Kontribusi Peradaban bagi Dunia, dan Hikmah Kebangkitan Ummat',
  elemenCp: 'Sejarah Peradaban Islam (SPI)',
  fase: 'D (SMP/MTs)',
  semester: 'Semester 2',
  pengantar: {
    apersepsi: 'Tahukah kamu bahwa ketika daratan Eropa masih tenggelam dalam Zaman Kegelapan (Dark Ages) yang penuh kemiskinan, takhayul, dan buta huruf, di ujung barat benua Eropa telah bersinar terang sebuah mercusuar ilmu pengetahuan dan peradaban yang memukau dunia? Itulah Andalusia (kini Spanyol dan Portugal), yang diperintah oleh kaum muslimin selama hampir 8 abad (711–1492 M). Di kota Cordoba, jalan-jalan telah diterangi lampu minyak pada malam hari, air bersih mengalir ke rumah-rumah melalui sistem pipa canggih, dan berdiri perpustakaan agung yang memuat 400.000 judul buku saat perpustakaan terbesar di Eropa lainnya hanya memiliki 30-40 naskah. Dari sinilah lahir jembatan emas transfer keilmuan yang memicu Renaisans Eropa. Mari kita telusuri jejak sejarah berdirinya, masa keemasannya, sumbangsih spektakuler bagi dunia modern, faktor penyebab keruntuhannya, serta hikmah berharga bagi generasi pelajar hari ini.',
    tujuanPembelajaran: [
      'Menjelaskan latar belakang dan proses sejarah berdirinya Daulah Bani Umayyah periode Andalusia, peran Thariq bin Ziyad, Musa bin Nushair, dan Abdurrahman Ad-Dakhil',
      'Menganalisis masa keemasan Andalusia pada periode Keamiran hingga Kekhalifahan Cordoba di bawah Abdurrahman III dan Al-Hakam II',
      'Mengidentifikasi kontribusi monumental peradaban Islam Andalusia bagi dunia dalam bidang sains, kedokteran, filsafat, astronomi, matematika, dan arsitektur',
      'Menganalisis faktor-faktor penyebab kemunduran dan keruntuhan Islam di Andalusia (konflik internal, dinasti kecil Mulukut Thawaif, dan Reconquista)',
      'Merefleksikan hikmah sejarah Daulah Bani Umayyah Andalusia untuk menumbuhkan cinta literasi ilmiah, toleransi, persatuan, dan menyelesaikan evaluasi HOTS'
    ]
  },
  sejarahBerdirinya: {
    latarBelakang: 'Semenanjung Iberia (Andalusia) sebelum kedatangan Islam berada di bawah kekuasaan bangsa Visigoth (Gothik) yang dipimpin Raja Roderick. Rakyat Spanyol saat itu tertindas oleh sistem kasta yang kejam, pajak selangit, dan persekusi agama terhadap penganut Yahudi dan Kristen Unitarian. Julian, Gubernur Ceuta, meminta bantuan kepada Musa bin Nushair (Gubernur Afrika Utara Daulah Bani Umayyah) untuk membebaskan rakyat Spanyol dari tirani Roderick.',
    kronologiPenaklukan711M: [
      {
        tahun: '710 M',
        peristiwa: 'Ekspedisi Intelijen Tarif bin Malik',
        rincian: 'Musa bin Nushair mengirim 500 prajurit berkuda dipimpin Tarif bin Malik untuk mempelajari medan Semenanjung Iberia. Tempat pendaratan mereka kini diabadikan bernama Tarifa.'
      },
      {
        tahun: '711 M',
        peristiwa: 'Pendaratan Pasukan Thariq bin Ziyad di Jabal Thariq (Gibraltar)',
        rincian: 'Thariq bin Ziyad membawa sekitar 7.000 prajurit (mayoritas suku Berber Muslim) menyeberangi selat. Beliau mendarat di bukit karang raksasa yang kini dinamai Jabal Thariq (Gibraltar).'
      },
      {
        tahun: '711 M (Juli)',
        peristiwa: 'Pertempuran Sengit Danau Guadalete (Wadi Lakkah)',
        rincian: 'Dengan tambahan bala bantuan menjadi 12.000 pasukan, Thariq berhadapan dengan 100.000 pasukan Roderick. Dengan taktik cerdas dan pertolongan Allah, pasukan Muslim meraih kemenangan gemilang dan Roderick tewas tenggelam.'
      },
      {
        tahun: '712 - 714 M',
        peristiwa: 'Musa bin Nushair Membantu dan Menaklukkan Seluruh Iberia',
        rincian: 'Musa bin Nushair membawa 18.000 pasukan Arab menyusul Thariq. Bersama-sama mereka menaklukkan Seville, Toledo (ibukota lama), Cordoba, dan Zaragoza, hingga membuka pintu Islam ke seluruh Spanyol.'
      },
      {
        tahun: '756 M',
        peristiwa: 'Abdurrahman Ad-Dakhil Mendirikan Keamiran Umayyah di Spanyol',
        rincian: 'Setelah Dinasti Umayyah di Damaskus runtuh dibantai Dinasti Abbasiyah (750 M), pangeran muda Abdurrahman bin Muawiyah berhasil meloloskan diri melintasi padang pasir Afrika, masuk ke Spanyol, dan mendirikan Daulah Umayyah Barat yang independen.'
      }
    ],
    kisahThariqBinZiyad: {
      pidatoLegendaris: 'Ketika kapal-kapal telah berlabuh di pesisir, Thariq berkhutbah dengan suara bergetar: "Wahai manusia! Ke manakah kalian hendak lari? Musuh ada di hadapan kalian, dan laut membentang di belakang kalian! Demi Allah, yang tersisa bagi kalian hanyalah kejujuran dan kesabaran! Ketahuilah bahwa kalian di pulau ini bagaikan anak-anak yatim di meja makan orang-orang kikir. Musuh menyambut kalian dengan bala tentara dan perlengkapan senjata lengkap, sedangkan kalian tidak memiliki pelindung selain pedang dan makanan kecuali yang kalian rebut dari tangan mereka!"',
      maknaFilosofis: 'Kisah pembakaran kapal (atau penegasan tiada jalan mundur) menyimbolkan tekad baja totalitas (*ittihad*) dan tawakal bulat kepada Allah Swt., bahwa perjuangan iman tidak boleh menyisakan keraguan untuk berbalik ke belakang.',
      strategiMiliter: 'Thariq tidak membalas dendam kepada penduduk lokal; ia menjamin keselamatan gereja, kebebasan beragama kaum Nasrani dan Yahudi, serta menghapus sistem perbudakan feodal, sehingga disambut rakyat Spanyol sebagai pembebas sejati.'
    },
    faseKepemimpinan: [
      {
        fase: '1. Fase Wali / Gubernur (711 - 756 M)',
        periode: '45 Tahun Pertama',
        karakteristik: 'Andalusia menjadi salah satu provinsi di bawah Daulah Umayyah Damaskus. Diwarnai 20 kali pergantian gubernur dan gesekan antarsuku Arab dan Berber sebelum stabil.'
      },
      {
        fase: '2. Fase Keamiran Umayyah (756 - 929 M)',
        periode: '173 Tahun',
        karakteristik: 'Didirikan oleh Abdurrahman I (Ad-Dakhil). Andalusia berstatus Keamiran independen dari Dinasti Abbasiyah di Baghdad. Pembangunan Masjid Agung Cordoba dimulai.'
      },
      {
        fase: '3. Fase Kekhalifahan Cordoba (929 - 1031 M)',
        periode: '102 Tahun (Puncak Keemasan)',
        karakteristik: 'Abdurrahman III memproklamasikan gelar Khalifah (An-Nashir). Cordoba menjadi kota termegah di dunia menyaingi Baghdad dan Konstantinopel. Sains, filsafat, dan peradaban mencapai puncak gemilang.'
      },
      {
        fase: '4. Fase Mulukut Thawaif / Kerajaan Kecil (1031 - 1086 M)',
        periode: '55 Tahun (Disintegrasi Politik)',
        karakteristik: 'Kekhalifahan pecah menjadi lebih dari 30 kerajaan kecil yang saling bertikai dan meminta bantuan raja-raja Kristen Spanyol.'
      },
      {
        fase: '5. Fase Daulah Murabithun & Muwahhidun (1086 - 1238 M)',
        periode: '152 Tahun',
        karakteristik: 'Dinasti Islam tangguh dari Afrika Utara menyeberang untuk menyelamatkan Andalusia dari serangan Reconquista, menghidupkan kembali gairah jihad.'
      },
      {
        fase: '6. Fase Kerajaan Bani Ahmar di Granada (1238 - 1492 M)',
        periode: '254 Tahun (Benteng Terakhir)',
        karakteristik: 'Kekuasaan Islam tersisa di Granada dengan istana megah Alhambra. Berakhir tragis saat Sultan Abu Abdillah menyerahkan kunci Granada kepada Raja Ferdinand dan Ratu Isabella pada 2 Januari 1492.'
      }
    ],
    kisahAbdurrahmanAdDakhil: {
      julukan: 'Shaqr Quraisy (Elang Bangsa Quraisy)',
      perjalananHijrah: 'Ketika revolusi Abbasiyah tahun 750 M membantai keluarga pangeran Umayyah di Suriah, Abdurrahman bin Muawiyah (usia 20 tahun) melompat ke Sungai Efrat bersama adik kecilnya. Selama 5 tahun ia hidup menyamar mengarungi padang pasir Palestina, Mesir, hingga pesisir Maroko dengan dikejar para intelijen musuh.',
      pencapaianMendirikanKeamiran: 'Dengan kecerdasan diplomasi dan dukungan suku Berber pamannya, ia mendarat di Spanyol pada 755 M, mengalahkan Gubernur Yusuf Al-Fihri, dan mendeklarasikan berdirinya Keamiran Umayyah di Cordoba pada 756 M tanpa mau tunduk kepada Baghdad.'
    }
  },
  masaKeemasan: {
    ikhtisar: 'Masa keemasan Daulah Bani Umayyah di Andalusia berlangsung pada abad ke-10 M, khususnya di bawah pemerintahan Khalifah Abdurrahman III (An-Nashir, memerintah 912–961 M) dan putranya Al-Hakam II (Al-Mustanshir, memerintah 961–976 M). Pada era ini, Cordoba bertransformasi menjadi "Permata Dunia" (*The Ornament of the World*).',
    puncakKejayaanCordoba: {
      julukan: 'Permata Dunia (The Jewel of the Tenth Century)',
      populasiDanKemajuanKota: 'Cordoba dihuni oleh lebih dari 500.000 hingga 1.000.000 penduduk yang hidup makmur. Kota ini memiliki 70 perpustakaan umum, 900 pemandian umum (*hammam*), 60.000 istana dan rumah megah, serta jaringan jalan berlapis batu sepanjang puluhan mil yang diterangi lampu penerangan jalan di malam hari (ketika kota London dan Paris masih gelap gulita dan berlumpur kotor).',
      universitasDanPerpustakaan: 'Universitas Cordoba menjadi pusat pendidikan tinggi paling bergengsi di dunia. Perpustakaan Kerajaan Al-Hakam II mengoleksi lebih dari 400.000 jilid buku dari Yunani, Persia, Baghdad, dan Alexandria. Katalog daftarnya saja mencapai 44 jilid tebal.',
      toleransiTigaAgama: 'Dikenal dengan era "La Convivencia" (Hidup Berdampingan secara Harmonis). Kaum Muslimin, Kristen Mozarab, dan Yahudi Sephardik hidup rukun berdampingan, bebas menduduki posisi menteri dan birokrat, serta bersama-sama meneliti sains di akademi penerjemahan.'
    },
    khalifahGemilang: [
      {
        id: 'khalifah-abdurrahman-3',
        name: 'Abdurrahman III (An-Nashir)',
        arabicName: 'عَبْدُ الرَّحْمٰنِ النَّاصِرُ لِدِيْنِ اللهِ',
        gelar: 'Khalifah Pertama Andalusia (An-Nashir Li Dinillah)',
        periodMasehi: '912 - 961 M (49 Tahun Memerintah)',
        peranKunci: 'Mengubah status Andalusia dari Keamiran menjadi Kekhalifahan adidaya, menumpas pemberontakan separatis, serta membangun armada laut terkuat di Laut Mediterania.',
        biografiRingkas: 'Naik takhta pada usia muda 21 tahun saat Andalusia dilanda krisis perpecahan internal. Beliau memadukan ketegasan militer dengan kelembutan diplomasi dan kecintaan terhadap sains.',
        kebijakanMonumen: [
          'Membangun kota satelit istana megah Madinatuz Zahra (Medina Azahara) di kaki gunung Sierra Morena',
          'Memperluas Masjid Agung Mezquita Cordoba dengan arsitektur lengkungan tapal kuda ganda yang memesona',
          'Mengangkat ilmuwan dan menteri dari berbagai suku tanpa diskriminasi primordial',
          'Membuka hubungan diplomatik resmi dengan Kekaisaran Bizantium Romawi Timur dan Jerman'
        ],
        kutipanSejarah: 'Setelah 50 tahun memerintah dalam kemewahan dan kemenangan mutlak, ia menulis dalam catatannya: "Aku menghitung hari-hari di mana aku merasakan kebahagiaan murni tanpa gundah... jumlahnya hanyalah empat belas hari. Janganlah manusia tertipu oleh gemerlap duniawi."'
      },
      {
        id: 'khalifah-al-hakam-2',
        name: 'Al-Hakam II (Al-Mustanshir)',
        arabicName: 'الْحَكَمُ الْمُسْتَنْصِرُ بِاللهِ',
        gelar: 'Khalifah Cendekiawan & Pecinta Buku Terbesar',
        periodMasehi: '961 - 976 M (15 Tahun Memerintah)',
        peranKunci: 'Menjadikan seluruh rakyat Cordoba melek huruf, membiayai ribuan pencari manuskrip ke seluruh penjuru dunia Islam, dan memajukan universitas.',
        biografiRingkas: 'Sosok kutu buku sejati yang saleh dan rendah hati. Beliau membaca dan memberi catatan pinggir (*tahqiq*) pada ribuan buku koleksi pribadinya sebelum buku itu diperbanyak oleh para juru tulis.',
        kebijakanMonumen: [
          'Mendirikan 27 sekolah gratis untuk anak-anak miskin dan yatim piatu di seluruh penjuru kota Cordoba',
          'Menggaji agen khusus di Baghdad, Damaskus, Kairo, dan Alexandria untuk membeli manuskrip ilmiah pertama kali sebelum beredar',
          'Mempekerjakan 170 wanita cerdas di pinggiran Cordoba khusus sebagai kaligrafer penyalin naskah Al-Qur\'an dan buku sains',
          'Menyempurnakan Mihrab dan kubah mozaik emas Masjid Cordoba dengan bantuan seniman kaca Bizantium'
        ],
        kutipanSejarah: '"Buku adalah sahabat yang tidak pernah memuji secara palsu, teman yang tidak pernah bosan, dan guru yang tidak pernah menuntut balasan."'
      },
      {
        id: 'amir-abdurrahman-2',
        name: 'Abdurrahman II (Al-Ausath)',
        arabicName: 'عَبْدُ الرَّحْمٰنِ الْأَوْسَطُ',
        gelar: 'Pelopor Seni, Tata Kota, dan Musik Andalusia',
        periodMasehi: '822 - 852 M (30 Tahun Memerintah)',
        peranKunci: 'Meletakkan dasar administrasi negara yang rapi, memodernisasi tata kota dengan saluran air irigasi, serta mendatangkan musisi jenius Ziryab.',
        biografiRingkas: 'Penguasa yang sangat mencintai keindahan, seni, dan adab. Di masa pemerintahannya, Cordoba meniru keanggunan gaya hidup Baghdad dan menciptakan tren adab kesopanan internasional.',
        kebijakanMonumen: [
          'Mengundang Ali bin Nafi\' (Ziryab) dari Baghdad yang mengubah budaya busana musiman, tata meja makan, dan musik Spanyol',
          'Membangun pabrik tekstil sutra tiraz dan percetakan uang koin perak dirham',
          'Membangun benteng pertahanan pantai untuk menghalau serbuan perompak bangsa Viking dari Skandinavia'
        ],
        kutipanSejarah: '"Peradaban sejati diukur bukan hanya dari tajamnya pedang prajurit, melainkan dari kehalusan budi pekerti dan tingginya ilmu pengetahuan."'
      }
    ]
  },
  kontribusiPeradaban: [
    {
      id: 'kontribusi-kedokteran',
      bidang: 'Kedokteran & Bedah Medis',
      iconName: 'Stethoscope',
      deskripsi: 'Andalusia mengubah ilmu kedokteran dari takhayul mistis menjadi sains eksperimental berbasis anatomi tubuh dan higiene klinis.',
      tokohCendekiawan: [
        {
          nama: 'Abu Al-Qasim Az-Zahrawi',
          namaBarat: 'Albucasis (936 - 1013 M)',
          karyaUtama: 'Kitab At-Tashrif Liman \'Ajiza \'an At-Ta\'lif (Ensiklopedia Bedah 30 Jilid)',
          penemuanDanJasa: 'Bapak Ilmu Bedah Modern. Menemukan lebih dari 200 instrumen bedah (pisau bedah, tang penjepit, jarum jahit usus kucing / catgut untuk bedah dalam yang dapat diserap tubuh, sendok kuret). Buku teksnya menjadi kurikulum wajib sekolah kedokteran di Eropa selama lebih dari 500 tahun.'
        },
        {
          nama: 'Ibnu Zuhr',
          namaBarat: 'Avenzoar (1094 - 1162 M)',
          karyaUtama: 'Al-Taysir fil-Mudawah wat-Tadbir',
          penemuanDanJasa: 'Pelopor metode pembedahan hewan (eksperimental medis), menemukan penyebab penyakit kudis oleh tungau parasit, serta pionir metode trakeostomi (pelubangan tenggorokan darurat pernapasan).'
        }
      ],
      monumenDanWarisan: [
        {
          nama: 'Rumah Sakit Bimaristan Cordoba & Granada',
          lokasi: 'Cordoba & Granada',
          deskripsi: 'Rumah sakit modern dengan bangsal terpisah pria-wanita, klinik jiwa dengan terapi musik air mengalir, dan layanan rawat jalan gratis bagi seluruh warga tanpa memandang agama.'
        }
      ],
      pengaruhBagiDuniaModern: 'Metode sterilisasi bedah, benang bedah organ dalam (catgut), dan klasifikasi penyakit menular yang digunakan dokter di rumah sakit modern saat ini berakar dari penemuan Az-Zahrawi.'
    },
    {
      id: 'kontribusi-filsafat',
      bidang: 'Filsafat, Logika & Harmonisasi Agama-Akal',
      iconName: 'Brain',
      deskripsi: 'Andalusia menjadi pusat dialog intelektual terdalam antara wahyu ketuhanan dan rasionalitas akal sehat.',
      tokohCendekiawan: [
        {
          nama: 'Ibnu Rusyd',
          namaBarat: 'Averroes (1126 - 1198 M)',
          karyaUtama: 'Fashl Al-Maqal, Tahafut At-Tahafut, Bidayat Al-Mujtahid',
          penemuanDanJasa: 'Komentator Terbesar Aristoteles. Mengajarkan bahwa tidak ada pertentangan hakiki antara kebenaran wahyu agama dan kebenaran rasional filsafat ilmiah. Pemikiran "Averroisme" menyulut era pencerahan (Enlightenment) dan pendirian universitas di Paris, Oxford, dan Bologna.'
        },
        {
          nama: 'Ibnu Thufail',
          namaBarat: 'Abubacer (1105 - 1185 M)',
          karyaUtama: 'Hayy bin Yaqzhan (Kisah Anak Manusia yang Tumbuh di Pulau Terpencil)',
          penemuanDanJasa: 'Novel filsafat pertama di dunia yang membuktikan akal budi manusia mampu menemukan eksistensi Tuhan melalui pengamatan alam semesta. Menginspirasi kisah novel Robinson Crusoe di Inggris.'
        },
        {
          nama: 'Ibnu Bajjah',
          namaBarat: 'Avempace (1085 - 1138 M)',
          karyaUtama: 'Tadbir Al-Mutawahhid (Panduan Tata Hidup Jiwa yang Mengasingkan Diri)',
          penemuanDanJasa: 'Ahli botani, filsuf, dan fisikawan. Merumuskan teori kecepatan gerak benda yang kemudian menjadi inspirasi hukum gerak Galileo Galilei.'
        }
      ],
      monumenDanWarisan: [
        {
          nama: 'Pusat Penerjemahan Toledo (Escuela de Traductores de Toledo)',
          lokasi: 'Toledo, Spanyol',
          deskripsi: 'Lembaga kolaborasi intelektual Muslim, Kristen, dan Yahudi yang menerjemahkan ribuan manuskrip Arab ke dalam bahasa Latin, membangkitkan akal budi Eropa dari tidur panjang.'
        }
      ],
      pengaruhBagiDuniaModern: 'Prinsip kebebasan berpikir rasional, metode telaah perbandingan hukum fikih, dan filsafat ilmu sains modern sangat berhutang budi pada sintesis pemikiran Ibnu Rusyd.'
    },
    {
      id: 'kontribusi-astronomi-teknologi',
      bidang: 'Astronomi, Navigasi & Teknologi Penerbangan',
      iconName: 'Compass',
      deskripsi: 'Para ilmuwan Andalusia menyempurnakan pemetaan bintang, kompas navigasi laut, serta eksperimen penerbangan manusia pertama di dunia.',
      tokohCendekiawan: [
        {
          nama: 'Abbas bin Firnas',
          namaBarat: 'Armen Firman (810 - 887 M)',
          karyaUtama: 'Eksperimen Glider Sayap Terbang & Planetarium Buatan',
          penemuanDanJasa: 'Manusia pertama dalam sejarah yang berhasil melakukan penerbangan terkontrol menggunakan sayap buatan dari sutra dan bulu elang dari Bukit Rusafa Cordoba selama lebih dari 10 menit. Juga menemukan kaca silika bening dari batu kuarsa, lensa kacamata pembesar, dan jam air metronom.'
        },
        {
          nama: 'Abu Ishaq Az-Zarqali',
          namaBarat: 'Arzachel (1029 - 1087 M)',
          karyaUtama: 'Tabel Toledo (Toledan Tables) & Astrolabe Safihah',
          penemuanDanJasa: 'Menemukan astrolabe universal (Safihah) yang tidak bergantung pada garis lintang tertentu untuk menentukan posisi lintang bujur kapal laut, serta membuktikan bahwa orbit bumi mengelilingi matahari berbentuk elips berabad-abad sebelum Kepler.'
        },
        {
          nama: 'Nuruddin Al-Bitruji',
          namaBarat: 'Alpetragius (wafat 1204 M)',
          karyaUtama: 'Kitab Fi Al-Harakah As-Samawiyyah',
          penemuanDanJasa: 'Meruntuhkan model geosentris Ptolemeus yang rumit dan meletakkan fondasi astronomi fisik modern.'
        }
      ],
      monumenDanWarisan: [
        {
          nama: 'Menara Observatorium La Giralda Seville',
          lokasi: 'Seville, Spanyol',
          deskripsi: 'Menara minaret Masjid Agung Seville yang digunakan ilmuwan Muslim untuk memantau pergerakan benda-benda langit dengan teleskop awal.'
        }
      ],
      pengaruhBagiDuniaModern: 'Nama Abbas bin Firnas diabadikan NASA sebagai nama salah satu kawah di Bulan (*Ibn Firnas Crater*) dan bandara internasional di Baghdad atas jasanya sebagai perintis dirgantara.'
    },
    {
      id: 'kontribusi-agronomi-lingkungan',
      bidang: 'Pertanian, Botani & Manajemen Air Canggih',
      iconName: 'Leaf',
      deskripsi: 'Revolusi Hijau Islam di Andalusia menyulap tanah tandus Spanyol menjadi lembah hijau perkebunan buah-buahan yang subur.',
      tokohCendekiawan: [
        {
          nama: 'Ibnu Al-Awwam Al-Isybili',
          namaBarat: 'Ibn al-Awwam of Seville (Abad ke-12 M)',
          karyaUtama: 'Kitab Al-Filahah (Buku Panduan Pertanian Lengkap 34 Bab)',
          penemuanDanJasa: 'Menguraikan 585 spesies tanaman, teknik okulasi sambung pucuk, analisis jenis tanah, pupuk organik alami, dan pengendalian hama tanaman tanpa bahan kimia beracun.'
        },
        {
          nama: 'Ibnu Al-Baithar',
          namaBarat: 'Ibn al-Baitar (1197 - 1248 M)',
          karyaUtama: 'Al-Jami\' li-Mufradat al-Adwiyah wal-Aghdziyah',
          penemuanDanJasa: 'Ahli botani dan farmakope terbesar sepanjang sejarah. Mengklasifikasikan lebih dari 1.400 jenis tanaman obat, 300 di antaranya merupakan penemuan baru yang belum pernah dicatat sebelumnya.'
        }
      ],
      monumenDanWarisan: [
        {
          nama: 'Sistem Irigasi Acequia & Kincir Raksasa Noria',
          lokasi: 'Valencia & Murcia',
          deskripsi: 'Kanal irigasi air bawah tanah dan roda kincir air hidrolik raksasa yang mendistribusikan air dari sungai Guadalquivir ke puncak-puncak perbukitan pertanian.'
        },
        {
          nama: 'Taman Surga Generalife (Jannat al-\'Arif)',
          lokasi: 'Kompleks Alhambra, Granada',
          deskripsi: 'Taman botani dengan sirkulasi air mancur gravitasi tanpa pompa mesin yang tetap berfungsi anggun hingga abad ke-21.'
        }
      ],
      pengaruhBagiDuniaModern: 'Pengenalan tanaman pangan bernilai tinggi ke Eropa: padi, tebu gula, jeruk manis, kapas, delima, bayam, dan terong, serta hukum peradilan air (*Tribunal de las Aguas*) yang masih dipakai di Spanyol hari ini.'
    },
    {
      id: 'kontribusi-arsitektur-seni',
      bidang: 'Arsitektur, Seni Hias & Budaya Kehidupan',
      iconName: 'Building',
      deskripsi: 'Mahakarya arsitektur Moorish (Mudejar) yang memadukan keanggunan geometri spiritual Islam dengan keindahan alamiah.',
      tokohCendekiawan: [
        {
          nama: 'Ali bin Nafi\' (Ziryab)',
          namaBarat: 'The Blackbird (789 - 857 M)',
          karyaUtama: 'Pencipta Konservatori Musik Pertama di Eropa & Desain Busana Musim',
          penemuanDanJasa: 'Musisi jenius murid Ishaq Al-Mawshili di Baghdad. Menambahkan senar ke-5 pada alat musik Gambus (Oud) yang menjadi cikal bakal alat musik Gitar Spanyol modern. Memperkenalkan etika makan 3 sajian (*Three-Course Meal*: sup, menu utama daging, penutup buah/pastry), gelas kristal, pasta gigi, dan deodoran.'
        }
      ],
      monumenDanWarisan: [
        {
          nama: 'Masjid Agung Mezquita Cordoba',
          lokasi: 'Cordoba, Spanyol',
          deskripsi: 'Masjid dengan hutan 856 tiang pualam marmer berkubah lengkungan merah-putih tapal kuda ganda yang menjadi keajaiban arsitektur dunia.'
        },
        {
          nama: 'Istana Alhambra (Qashr al-Hamra)',
          lokasi: 'Granada, Spanyol',
          deskripsi: 'Istana benteng berwarna merah di atas bukit dengan ukiran kaligrafi stucco "Wa lā Ghāliba illallāh" (Tiada Pemenang Selain Allah) di setiap sudut dindingnya.'
        }
      ],
      pengaruhBagiDuniaModern: 'Arsitektur lengkungan tapal kuda, hiasan arabeska geometris fraktal, serta alat musik petik gitar klasik dunia berasal dari evolusi budaya Moorish Andalusia.'
    }
  ],
  faktorKemunduran: [
    {
      nomor: 1,
      kategori: 'Internal',
      faktor: 'Perpecahan Politik dan Munculnya Kerajaan Kecil (Mulukut Thawaif)',
      penjelasanKasus: 'Setelah runtuhnya Kekhalifahan Cordoba pada 1031 M akibat perebutan takhta antarpangeran, Andalusia terpecah menjadi lebih dari 30 kerajaan kecil (Taifa) seperti Seville, Granada, Toledo, dan Zaragoza. Para amir lokal justru saling berperang satu sama lain memperebutkan wilayah kekuasaan.',
      dampakSejarah: 'Umat Islam kehilangan persatuan dan komando tunggal; kekuatan militer yang semula disegani menjadi lemah tak berdaya.',
      ibrahPelajar: 'Perpecahan dan fanatisme golongan (*ashabiyah*) adalah racun pemusnah bangsa. Persatuan adalah syarat mutlak kejayaan.'
    },
    {
      nomor: 2,
      kategori: 'Internal',
      faktor: 'Pengkhianatan Bersekutu dengan Musuh (Membayar Upeti Parias)',
      penjelasanKasus: 'Tragisnya, para raja Muslim Mulukut Thawaif kerap bersekutu dengan raja-raja Kristen utara (seperti Raja Alfonso VI dari Castile) untuk menyerang sesama amir Muslim saudaranya sendiri, seraya bersedia membayar upeti emas tahunan (*parias*) yang membebani kas rakyat.',
      dampakSejarah: 'Raja-raja Kristen Spanyol memanfaatkan perselisihan ini untuk memperkaya diri dan menaklukkan kota-kota Islam satu per satu secara bertahap.',
      ibrahPelajar: 'Jangan pernah menggadaikan kehormatan dan persaudaraan demi ambisi ego kekuasaan sesaat.'
    },
    {
      nomor: 3,
      kategori: 'Internal',
      faktor: 'Gaya Hidup Mewah, Hedonisme, dan Lunturnya Spirit Keimanan',
      penjelasanKasus: 'Generasi penguasa akhir Andalusia terlena dalam buaian kemewahan istana, musik pesta, selir, dan kemegahan materi duniawi. Jiwa kesederhanaan, keberanian, dan semangat jihad seperti yang dimiliki Thariq bin Ziyad dan Abdurrahman Ad-Dakhil terkikis habis.',
      dampakSejarah: 'Masyarakat menjadi lembek, takut menghadapi kematian, dan enggan berkorban membela tanah air ketika musuh mengepung gerbang benteng.',
      ibrahPelajar: 'Kemewahan tanpa rem spiritual akan melahirkan penyakit *wahn* (cinta dunia dan takut mati) yang menghancurkan integritas.'
    },
    {
      nomor: 4,
      kategori: 'Eksternal',
      faktor: 'Gerakan Salib Reconquista (Penaklukan Kembali Spanyol)',
      penjelasanKasus: 'Kerajaan-kerajaan Kristen di semenanjung utara (Castile, Aragon, Leon, dan Navarre) bersatu padu mengobarkan perang suci militer-religius bernama *Reconquista* selama berabad-abad untuk mengusir kaum Muslimin dari tanah Spanyol.',
      dampakSejarah: 'Kota-kota mercusuar peradaban jatuh beruntun: Toledo jatuh (1085 M), Cordoba jatuh (1236 M), Seville jatuh (1248 M), hingga tersisa Granada.',
      ibrahPelajar: 'Ketika umat Islam lengah dan terpecah, pihak lawan akan menyatukan barisan secara solid untuk merebut peluang.'
    },
    {
      nomor: 5,
      kategori: 'Eksternal',
      faktor: 'Pernikahan Politik Ferdinand dan Isabella serta Jatuhnya Granada (1492 M)',
      penjelasanKasus: 'Penyatuan Kerajaan Aragon (Raja Ferdinand II) dan Castile (Ratu Isabella I) lewat pernikahan pada 1469 M menciptakan adidaya militer Kristen Spanyol yang mengepung Granada selama bertahun-tahun. Pada 2 Januari 1492 M, Sultan Abu Abdillah (Boabdil) menyerahkan kunci benteng Alhambra.',
      dampakSejarah: 'Tamatlah 781 tahun masa pemerintahan Islam di Spanyol. Berlanjut dengan era Inkuisisi Spanyol yang kejam, pelarangan bahasa Arab, pembakaran ribuan buku perpustakaan Islam, serta pengusiran paksa kaum Morisco.',
      ibrahPelajar: 'Kemenangan musuh sering kali berakar dari adanya perselisihan di dalam rumah tangga istana kekhalifahan sendiri.'
    }
  ],
  hikmahSejarah: [
    {
      nomor: 1,
      judul: 'Cinta Literasi, Budidaya Sains, dan Semangat Riset Adalah Kunci Kemuliaan',
      maknaPelajaran: 'Islam memimpin peradaban dunia selama 8 abad di Spanyol bukan semata-mata karena kekuatan pedang, melainkan karena peradaban bukunya. Ketika para khalifah menghargai ilmuwan, membangun perpustakaan umum, dan membiayai penerjemahan sains, kemakmuran hakiki terwujud.',
      dalilRujukan: {
        surah: 'Q.S. Al-Mujadilah (58): Ayat 11',
        arabic: 'يَرْفَعِ اللَّهُ الَّذِينَ آمَنُوا مِنكُمْ وَالَّذِينَ أُوتُوا الْعِلْمَ دَرَجَاتٍ',
        arti: 'Allah akan meninggikan orang-orang yang beriman di antaramu dan orang-orang yang diberi ilmu pengetahuan beberapa derajat.'
      },
      relevansiZamanNow: 'Pelajar Muslim hari ini harus bangkit mengejar ketertinggalan teknologi, literasi digital, sains, kedokteran, dan AI agar tidak sekadar menjadi konsumen peradaban bangsa lain.',
      refleksiKarakter: 'Menjadikan membaca dan menuntut ilmu sebagai ibadah agung, menghargai buku, dan tekun belajar dengan disiplin tinggi.'
    },
    {
      nomor: 2,
      judul: 'Persatuan Adalah Kekuatan, Perpecahan Adalah Kehancuran',
      maknaPelajaran: 'Runtuhnya Andalusia memberikan pelajaran paling getir dalam sejarah Islam: musuh tidak mampu mengalahkan umat Islam dari luar selama umat bersatu, namun umat hancur seketika saat diadu domba dari dalam (era Mulukut Thawaif).',
      dalilRujukan: {
        surah: 'Q.S. Al-Anfal (8): Ayat 46',
        arabic: 'وَأَطِيعُوا اللَّهَ وَرَسُولَهُ وَلَا تَنَازَعُوا فَتَفْشَلُوا وَتَذْهَبَ رِيحُكُمْ ۖ وَاصْبِرُوا',
        arti: 'Dan taatilah Allah dan Rasul-Nya dan janganlah kamu berbantah-bantahan, yang menyebabkan kamu menjadi gentar dan hilang kekuatanmu, dan bersabarlah.'
      },
      relevansiZamanNow: 'Menghindari perdebatan khilafiyah yang memecah belah persaudaraan sesama Muslim (*ukhuwah Islamiyah*) serta menjaga persatuan bangsa Indonesia (*ukhuwah wathaniyah*).',
      refleksiKarakter: 'Mengedepankan musyawarah, toleransi terhadap perbedaan pendapat kawan, dan pantang egois dalam kelompok.'
    },
    {
      nomor: 3,
      judul: 'Bahaya Hedonisme dan Penyakit Wahn (Cinta Dunia Berlebihan)',
      maknaPelajaran: 'Ketika para pemimpin dan pemuda Andalusia beralih dari mencintai masjid dan laboratorium sains menuju panggung pesta pora kemewahan istana, Allah mencabut rasa gentar dari dada musuh-musuh mereka.',
      dalilRujukan: {
        surah: 'Q.S. Al-Hadid (57): Ayat 20',
        arabic: 'وَمَا الْحَيَاةُ الدُّنْيَا إِلَّا مَتَاعُ الْغُرُورِ',
        arti: 'Dan kehidupan dunia ini tidak lain hanyalah kesenangan yang menipu.'
      },
      relevansiZamanNow: 'Menghindari gaya hidup flexing, konsumerisme membabi buta di media sosial, kecanduan game/hiburan tanpa batas, dan sifat malas.',
      refleksiKarakter: 'Menumbuhkan gaya hidup sederhana (*qana\'ah*), zuhud dalam hati, dan fokus pada karya nyata yang bermanfaat bagi sesama.'
    },
    {
      nomor: 4,
      judul: 'Keterbukaan Berpikir dan Harmoni Toleransi Antarumat Beragama',
      maknaPelajaran: 'Era keemasan Andalusia membuktikan bahwa Islam adalah rahmat bagi seluruh alam (*Rahmatan lil \'Alamin*). Kaum Yahudi yang dikejar-kejar di Eropa justru meraih masa keemasan filsafatnya di bawah naungan Islam di Cordoba bersama sarjana Muslim dan Kristen.',
      dalilRujukan: {
        surah: 'Q.S. Al-Mumtahanah (60): Ayat 8',
        arabic: 'لَّا يَنْهَاكُمُ اللَّهُ عَنِ الَّذِينَ لَمْ يُقَاتِلُوكُمْ فِي الدِّينِ وَلَمْ يُخْرِجُوكُم مِّن دِيَارِكُمْ أَن تَبَرُّوهُمْ وَتُقْسِطُوا إِلَيْهِمْ',
        arti: 'Allah tidak melarang kamu berbuat baik dan berlaku adil terhadap orang-orang yang tidak memerangimu dalam urusan agama dan tidak mengusir kamu dari kampung halamanmu.'
      },
      relevansiZamanNow: 'Menjunjung tinggi moderasi beragama (*wasathiyah*), menghormati hak asasi manusia, dan berkolaborasi dalam kemanusiaan tanpa prasangka negatif.',
      refleksiKarakter: 'Bersikap santun, adil, dan objektif terhadap pemeluk agama lain di sekolah maupun lingkungan tempat tinggal.'
    },
    {
      nomor: 5,
      judul: 'Optimisme dan Keberanian Menghadapi Ujian Berat',
      maknaPelajaran: 'Kisah keberanian Thariq bin Ziyad yang menyeberangi selat berbahaya dan ketangguhan Abdurrahman Ad-Dakhil yang selamat dari kejaran pembunuhan lalu membangun kerajaan megah seorang diri adalah cermin mental baja mukmin sejati.',
      dalilRujukan: {
        surah: 'Q.S. Ali \'Imran (3): Ayat 139',
        arabic: 'وَلَا تَهِنُوا وَلَا تَحْزَنُوا وَأَنتُمُ الْأَعْلَوْنَ إِن كُنتُم مُّؤْمِنِينَ',
        arti: 'Dan janganlah kamu (merasa) lemah, dan janganlah (pula) bersedih hati, sebab kamu paling tinggi (derajatnya), jika kamu orang-orang yang beriman.'
      },
      relevansiZamanNow: 'Pelajar tidak boleh mudah putus asa (*resilience*) saat menghadapi kesulitan pelajaran, kegagalan ujian, atau problematika kehidupan keluarga.',
      refleksiKarakter: 'Memiliki visi masa depan yang jelas, berani keluar dari zona nyaman, dan senantiasa bertawakal kepada Allah Swt.'
    }
  ],
  kuisHots: [
    {
      id: 'kuis-1',
      nomor: 1,
      kasus: 'Pada tahun 750 M, Dinasti Umayyah di Damaskus runtuh. Namun pada 756 M, seorang pangeran pelarian bernama Abdurrahman bin Muawiyah berhasil menyeberang ke Semenanjung Iberia dan mendirikan Daulah Umayyah Barat di Cordoba yang mampu bertahan selama ratusan tahun.',
      pertanyaan: 'Faktor kepemimpinan utama apakah yang membuat Abdurrahman Ad-Dakhil dijuluki oleh musuh bebuyutannya (Khalifah Al-Manshur dari Abbasiyah) sebagai "Shaqr Quraisy" (Elang Bangsa Quraisy)?',
      pilihan: [
        'Karena memiliki sayap emas dan senjata magis penakluk',
        'Karena memiliki keberanian luar biasa, kecerdasan diplomasi, ketabahan melintasi benua seorang diri, dan visi membangun peradaban mandiri tanpa bergantung pada Baghdad',
        'Karena menyerahkan seluruh kekuasaan Spanyol kepada raja-raja Visigoth',
        'Karena mengasingkan diri di gunung dan tidak mau mengurusi urusan politik masyarakat'
      ],
      kunciJawaban: 1,
      pembahasan: 'Julukan "Shaqr Quraisy" diberikan langsung oleh Khalifah Al-Manshur (musuh politiknya dari Abbasiyah) sebagai pengakuan atas ketangguhan mental Abdurrahman Ad-Dakhil yang mampu lolos dari pembunuhan massal, mengarungi padang pasir Afrika seorang diri tanpa pasukan, lalu menyatukan faksi-faksi Spanyol dan mendirikan dinasti adidaya baru di Cordoba.'
    },
    {
      id: 'kuis-2',
      nomor: 2,
      kasus: 'Perpustakaan Kerajaan Al-Hakam II di Cordoba pada abad ke-10 M mengoleksi lebih dari 400.000 jilid buku, dan kota tersebut memiliki 70 perpustakaan umum serta 27 sekolah gratis untuk anak yatim piatu. Pada saat yang sama, perpustakaan terbesar di biara-biara Eropa Barat lainnya hanya memiliki kurang dari 50 naskah.',
      pertanyaan: 'Analisis paling tepat mengenai dampak dari tingginya budaya literasi di Andalusia tersebut terhadap kemajuan peradaban dunia adalah:',
      pilihan: [
        'Buku-buku tersebut hanya menjadi hiasan pajangan dinding istana tanpa pernah dibaca',
        'Budaya literasi tinggi melahirkan ratusan ilmuwan kelas dunia di bidang kedokteran, filsafat, dan astronomi yang karyanya diterjemahkan ke bahasa Latin dan memicu masa kebangkitan Eropa (Renaisans)',
        'Masyarakat Cordoba melarang orang luar kota untuk belajar dan membaca',
        'Menyebabkan kas negara bangkrut total karena harga kertas terlalu mahal'
      ],
      kunciJawaban: 1,
      pembahasan: 'Tingginya budaya literasi di Andalusia menjadi fondasi lahirnya lompatan sains. Kitab-kitab karya ilmuwan Andalusia seperti Az-Zahrawi (kedokteran) dan Ibnu Rusyd (filsafat) diterjemahkan di Sekolah Penerjemah Toledo ke bahasa Latin, yang kemudian mengakhiri Zaman Kegelapan (Dark Ages) dan menyulut Renaisans di Eropa.'
    },
    {
      id: 'kuis-3',
      nomor: 3,
      kasus: 'Abu Al-Qasim Az-Zahrawi (Albucasis) menulis ensiklopedia bedah "At-Tashrif" yang memuat lebih dari 200 ilustrasi alat bedah temuannya, termasuk jarum jahit bedah dari usus kucing (catgut) dan sendok kuret. Kitab ini diajarkan di universitas kedokteran Eropa hingga abad ke-17 M.',
      pertanyaan: 'Nilai keteladanan yang paling relevan bagi seorang pelajar Muslim masa kini dari biografi Az-Zahrawi adalah:',
      pilihan: [
        'Menekuni bidang sains kesehatan secara tekun, inovatif, dan berorientasi memberikan kemaslahatan nyata bagi keselamatan jiwa umat manusia tanpa pamrih',
        'Merahasiakan resep obat-obatan agar menjadi monopoli bisnis keluarga',
        'Cepat merasa puas dengan ilmu yang sedikit tanpa melakukan eksperimen klinis',
        'Hanya mau mengobati pasien dari kalangan bangsawan kaya saja'
      ],
      kunciJawaban: 0,
      pembahasan: 'Az-Zahrawi mendedikasikan 50 tahun hidupnya untuk meneliti dan mengobati pasien dari berbagai latar belakang secara cuma-cuma. Beliau mengajarkan etika kedokteran luhur, ketelitian eksperimen, dan inovasi instrumen bedah demi menolong sesama hamba Allah.'
    },
    {
      id: 'kuis-4',
      nomor: 4,
      kasus: 'Pada fase Mulukut Thawaif (1031–1086 M), para amir di Andalusia terpecah menjadi lebih dari 30 kerajaan kecil. Ketika terjadi sengketa batas wilayah, sebagian amir Muslim justru meminta bantuan militer raja-raja Kristen Castile dan bersedia membayar upeti tahunan (parias) untuk menyerang saudaranya sesama Muslim.',
      pertanyaan: 'Berdasarkan analisis sejarah peradaban Islam, bahaya laten utama yang terbukti menghancurkan Daulah Andalusia dari kasus tersebut adalah:',
      pilihan: [
        'Ketiadaan sumber daya alam tambang perak di Spanyol',
        'Penyakit perpecahan internal, hilangnya rasa ukhuwah, serta pengkhianatan demi kepentingan kursi kekuasaan pribadi yang membuka pintu kejatuhan wilayah satu per satu',
        'Adanya musim dingin yang terlalu panjang di Semenanjung Iberia',
        'Terlalu banyak membangun masjid dan universitas di setiap kota'
      ],
      kunciJawaban: 1,
      pembahasan: 'Kaidah sejarah membuktikan bahwa kehancuran peradaban besar selalu diawali dari kerapuhan internal. Fenomena Mulukut Thawaif menunjukkan bagaimana perselisihan, hilangnya komando persatuan, dan kebiasaan bersekutu dengan pihak luar yang berniat menaklukkan mereka menjadi jalan pembuka bagi runtuhnya kekuasaan Islam di Andalusia.'
    },
    {
      id: 'kuis-5',
      nomor: 5,
      kasus: 'Ketika Raja Ferdinand dan Ratu Isabella menaklukkan Granada pada tahun 1492 M, Sultan terakhir Abu Abdillah menangis tersedu-sedu saat memandang istana Alhambra dari kejauhan. Ibunya, Aisyah Al-Hurrah, menegurnya dengan ucapan pedih: "Menangislah seperti perempuan atas kerajaan yang tidak mampu kau pertahankan seperti seorang kesatria pria!"',
      pertanyaan: 'Pelajaran moral dan spiritual terdalam yang harus diambil oleh generasi muda dari peristiwa jatuhnya Granada adalah:',
      pilihan: [
        'Kekalahan dapat dihindari cukup dengan menangisi nasib di atas bukit',
        'Penyesalan di akhir tidak akan berguna jika saat memiliki amanah kita menyia-nyiakannya dengan hidup santai, lalai, dan terpecah belah; kejayaan menuntut keteguhan iman dan kerja keras nyata',
        'Islam mengajarkan untuk menyerah tanpa perlawanan ketika menghadapi musuh',
        'Menyalahkan generasi masa lalu dan bersikap pesimis terhadap masa depan'
      ],
      kunciJawaban: 1,
      pembahasan: 'Teguran ibunda Sultan Abu Abdillah menjadi peringatan abadi bagi seluruh generasi penerus: sebuah peradaban megah yang dibangun dengan darah dan air mata selama 800 tahun bisa musnah dalam sekejap jika para pemimpinnya terbuai hedonisme, bermental cengeng, dan mengkhianati amanah perjuangan.'
    }
  ]
};
