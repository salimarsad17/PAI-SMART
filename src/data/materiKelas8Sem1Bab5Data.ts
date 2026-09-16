export interface FaseSejarahAbbasiyah {
  id: string;
  periode: string;
  rentangTahun: string;
  karakteristik: string;
  khalifahUtama: string[];
  peristiwaKunci: string[];
}

export interface TokohAbbasiyah {
  id: string;
  namaLengkap: string;
  namaPopuler: string;
  gelarAtauJulukan: string;
  kategori: 'Pendiri & Peletak Dasar' | 'Khalifah Puncak Kejayaan' | 'Ilmuwan Sains & Medis' | 'Filsuf & Matematikawan' | 'Ulama Fikih & Hadis';
  masaHidup: string;
  karyaMonumental: string[];
  peranDanKontribusi: string;
  keteladananMoral: string;
}

export interface PilarKejayaanItem {
  id: string;
  bidang: string;
  judul: string;
  ikon: string;
  deskripsi: string;
  institusiKunci: string;
  pencapaianUtama: string[];
  faktaMenarik: string;
  dampakBagiPeradabanDunia: string;
}

export interface FaktorKemunduranItem {
  id: string;
  kategori: 'Faktor Internal' | 'Faktor Eksternal';
  judul: string;
  penyebabUtama: string;
  analisisHistoris: string;
  akibatBagiDaulah: string[];
}

export interface HikmahAbbasiyahItem {
  id: string;
  dimensi: 'Etos Literasi & Keilmuan' | 'Keterbukaan & Kolaborasi' | 'Ibrah Bahaya Perpecahan' | 'Karakter & Aksi Pelajar';
  judul: string;
  deskripsi: string;
  dalilTerkait: {
    surah: string;
    teksArab: string;
    terjemahan: string;
  };
  implementasiPelajar: string[];
}

export interface KuisHotsAbbasiyahItem {
  id: string;
  nomor: number;
  stimulusKasus: string;
  pertanyaan: string;
  pilihan: string[];
  kunciJawaban: number;
  pembahasan: string;
}

export interface StudiKasusSejarahItem {
  id: string;
  judul: string;
  skenarioDilema: string;
  pertanyaanPemantik: string;
  analisisHikmah: string;
}

export interface MateriKelas8Sem1Bab5 {
  id: string;
  babNumber: number;
  fase: string;
  kelas: string;
  semester: string;
  elemenCp: 'Sejarah Peradaban Islam (SPI)';
  judulBab: string;
  subJudul: string;
  pengantar: {
    apersepsi: string;
    landasanAlQuran: {
      surah: string;
      teksArab: string;
      terjemahan: string;
      maknaTerkait: string;
    };
    petaKonsep: string[];
  };
  sejarahBerdiri: {
    latarBelakang: string;
    gerakanBawahTanah: {
      tigaPusatGerakan: {
        kota: string;
        peran: string;
      }[];
      semboyanGerakan: string;
      tokohInisiator: string[];
    };
    kronologiDeklarasi: string;
    pembangunanKotaBaghdad: {
      khalifahPembangun: string;
      tahunDidirikan: string;
      namaAsli: string;
      konsepTataKota: string;
      posisiGeografis: string;
    };
    periodesasiPemerintahan: FaseSejarahAbbasiyah[];
  };
  tokohPenting: TokohAbbasiyah[];
  puncakKejayaan: {
    pengertianTheGoldenAge: string;
    lembagaBaitulHikmah: {
      sejarahSingkat: string;
      fungsiUtama: string[];
      direkturDanPenerjemah: string;
      penghargaanBuku: string;
    };
    gerakanTadwinDanPenerjemahan: {
      tigaTahapPenerjemahan: string[];
      bahasaSumber: string[];
    };
    pilarKejayaan: PilarKejayaanItem[];
  };
  faktorKemunduran: {
    pengantarKeruntuhan: string;
    faktorInternal: FaktorKemunduranItem[];
    faktorEksternal: FaktorKemunduranItem[];
    tragediJatuhnyaBaghdad1258: {
      tahun: string;
      pemimpinMongol: string;
      khalifahTerakhir: string;
      deskripsiTragedi: string;
      dampakKehilanganIntelektual: string;
    };
  };
  hikmahDanRefleksi: {
    daftarHikmah: HikmahAbbasiyahItem[];
    studiKasus: StudiKasusSejarahItem[];
    lembarMuhasabah8Dimensi: {
      aspek: string;
      indikator: string;
    }[];
    kuisHots: KuisHotsAbbasiyahItem[];
  };
}

export const MATERI_KELAS8_SEM1_BAB5: MateriKelas8Sem1Bab5 = {
  id: 'k8-bab5',
  babNumber: 5,
  fase: 'Fase D',
  kelas: 'Kelas VIII',
  semester: 'Semester 1',
  elemenCp: 'Sejarah Peradaban Islam (SPI)',
  judulBab: 'Meneladani Sejarah dan Peran Peradaban Daulah Abbasiyah',
  subJudul: 'Merefleksikan Diri terhadap Sejarah Berdiri, Tokoh, Puncak Kejayaan (The Golden Age), Faktor Kemunduran, dan Hikmah Peradaban Islam Paska Khulafaur Rasyidin',
  pengantar: {
    apersepsi: 'Setelah era Khulafaur Rasyidin (632–661 M) dan Daulah Umayyah di Damaskus (661–750 M), sejarah peradaban Islam memasuki babak keemasan paling spektakuler di dunia melalui berdirinya Daulah Abbasiyah (750–1258 M / 132–656 H). Berpusat di Baghdad, peradaban Islam menjadi mercusuar peradaban dunia, memadukan riset sains modern, matematika, astronomi, filsafat, kedokteran, dan sastra dengan kemurnian tauhid Islam. Melalui bab ini, peserta didik diajak menelaah bagaimana kota Baghdad berubah menjadi kiblat ilmu pengetahuan global, meneladani etos riset para ilmuwan muslim, memahami faktor-faktor penyebab keruntuhannya, serta memetik pelajaran abadi untuk membangkitkan kembali kejayaan literasi dan integritas generasi muslim di era modern.',
    landasanAlQuran: {
      surah: 'Q.S. Al-Hasyr [59]: 18 & Q.S. Az-Zumar [39]: 9',
      teksArab: 'يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟ ٱتَّقُوا۟ ٱللَّهَ وَلْتَنظُرْ نَفْسٌ مَّا قَدَّمَتْ لِغَدٍ ۖ وَٱتَّقُوا۟ ٱللَّهَ ۚ إِنَّ ٱللَّهَ خَبِيرٌۢ بِمَا تَعْمَلُونَ',
      terjemahan: 'Wahai orang-orang yang beriman! Bertakwalah kepada Allah dan hendaklah setiap diri memperhatikan apa yang telah diperbuatnya untuk hari esok (masa depan/akhirat); dan bertakwalah kepada Allah. Sungguh, Allah Maha Teliti terhadap apa yang kamu kerjakan.',
      maknaTerkait: 'Ayat ini menegaskan kewajiban bagi setiap muslim untuk melakukan muhasabah dan refleksi kritis terhadap sejarah masa lalu ("waltanzhur nafsun ma qaddamat lighad") guna merancang peradaban masa depan yang unggul, berkeadilan, dan diridhai Allah Swt.'
    },
    petaKonsep: [
      '1. Sejarah Berdirinya Daulah Abbasiyah (Latar Belakang, 3 Pusat Gerakan Bawah Tanah, Pendirian Baghdad Madinat as-Salam)',
      '2. Tokoh-Tokoh Penting (Khalifah Pendiri, Khalifah Era Emas Harun ar-Rasyid & Al-Ma\'mun, Ilmuwan Kedokteran, Sains, & Ulama Mazhab)',
      '3. Puncak Kejayaan Peradaban (Baitul Hikmah, Gerakan Tadwin & Penerjemahan Akbar, Kemajuan Sains, Ekonomi, & Arsitektur)',
      '4. Faktor Kemunduran & Tragedi Kehancuran Baghdad 1258 M (Faktor Internal, Invasi Tentara Mongol Hulagu Khan)',
      '5. Hikmah Sejarah & Refleksi Diri Pelajar (Etos Literasi Iqra\', Toleransi Intelektual, Muhasabah 8 Dimensi, Evaluasi HOTS)'
    ]
  },
  sejarahBerdiri: {
    latarBelakang: 'Berdirinya Daulah Abbasiyah dilatarbelakangi oleh krisis legitimasi politik dan ketidakpuasan masyarakat luas terhadap kekuasaan Daulah Umayyah pada paruh awal abad ke-8 M. Beberapa faktor pemicu utamanya meliputi: (1) Sikap diskriminatif Dinasti Umayyah terhadap kaum Mawali (orang-orang non-Arab yang masuk Islam, khususnya bangsa Persia), yang diperlakukan seperti warga kelas dua; (2) Konflik internal perebutan takhta di kalangan pangeran Bani Umayyah dan gaya hidup hedonistik para khalifah terkemudian; (3) Tuntutan keluarga Bani Hasyim (keturunan Al-Abbas paman Nabi Muhammad Saw. dan keturunan Ali bin Abi Thalib) bahwa kepemimpinan umat Islam lebih berhak diemban oleh Ahlul Bait (keluarga Rasulullah). Keturunan Al-Abbas bin Abdul Muthalib kemudian mengorganisir gerakan perlawanan rapi dengan mengatasnamakan keridhaan keluarga Nabi ("Ar-Ridha min Ali Muhammad").',
    gerakanBawahTanah: {
      tigaPusatGerakan: [
        {
          kota: 'Al-Humaimah (Yordania/Palestina Selatan)',
          peran: 'Pusat Perencanaan Strategis & Markas Komando Tertinggi rahasia tempat para pemimpin Bani Abbas merancang arah gerakan dan koordinasi umum.'
        },
        {
          kota: 'Kufah (Irak)',
          peran: 'Pusat Komunikasi & Penghubung Rahasia untuk konsolidasi para propagandis (da\'i) serta penyaring informasi politik dari berbagai wilayah Islam.'
        },
        {
          kota: 'Khurasan (Persia / Iran & Asia Tengah)',
          peran: 'Pusat Aksi Militer & Mobilisasi Massa di mana rakyat Persia yang kecewa terhadap Umayyah dipersatukan oleh panglima karismatik Abu Muslim al-Khurasani.'
        }
      ],
      semboyanGerakan: 'Ar-Ridhā min Āli Muhammad (Mewujudkan kepemimpinan yang diridhai dari keluarga Nabi Muhammad Saw.)',
      tokohInisiator: [
        'Ali bin Abdullah bin Abbas (perintis gagasan awal)',
        'Muhammad bin Ali bin Abbas (peletak dasar struktur organisasi propaganda rahasia)',
        'Ibrahim al-Imam (pemimpin gerakan bawah tanah yang menginstruksikan pengibaran bendera hitam)',
        'Abu Muslim al-Khurasani (panglima perang jenius yang memimpin revolusi militer di Khurasan)',
        'Abu al-Abbas As-Saffah (khalifah pertama yang resmi dibaiat pada 750 M / 132 H di Kufah)'
      ]
    },
    kronologiDeklarasi: 'Setelah kekuatan militer revolusi di bawah Abu Muslim al-Khurasani berhasil merebut wilayah-wilayah strategis di timur, pasukan Abbasiyah memenangkan pertempuran penentu di tepi Sungai Zab (Pertempuran Zab Hulu) pada tahun 750 M melawan Khalifah Umayyah terakhir, Marwan II bin Muhammad. Abu al-Abbas Abdullah bin Muhammad resmi dibaiat sebagai Khalifah pertama Daulah Abbasiyah di Masjid Kufah pada tahun 132 H / 750 M dengan pidato pengukuhan bersejarah.',
    pembangunanKotaBaghdad: {
      khalifahPembangun: 'Khalifah Abu Ja\'far Al-Mansur (khalifah ke-2 Abbasiyah)',
      tahunDidirikan: 'Tahun 762 M (145 H)',
      namaAsli: 'Madīnat as-Salām (Kota Perdamaian / Darussalam)',
      konsepTataKota: 'Dirancang dalam bentuk Kota Bundar (Round City) berdiameter sekitar 2 km dengan dinding ganda yang kokoh dan empat gerbang utama (Gerbang Kufah, Basrah, Khurasan, dan Syam). Di titik pusat kota persis berdiri Istana Khalifah berkubah hijau (Qashr adz-Dzahab) dan Masjid Agung Jami\' Al-Mansur.',
      posisiGeografis: 'Terletak di antara aliran Sungai Tigris (Dajlah) dan Sungai Eufrat (Furat) di wilayah Irak purba Mesopotamia. Lokasi ini sangat subur untuk pertanian, terlindung dari serangan musuh, dan menjadi urat nadi jalur perdagangan dunia yang menghubungkan Tiongkok, India, Persia, dan Laut Mediterania.'
    },
    periodesasiPemerintahan: [
      {
        id: 'fase-1',
        periode: 'Periode Pertama (Fase Pengaruh Persia Pertama)',
        rentangTahun: '750 – 847 M (132 – 232 H)',
        karakteristik: 'Era konsolidasi kekuasaan, pembentukan birokrasi profesional, stabilitas politik, dan dimulainya masa keemasan sains (The Golden Age). Unsur Persia sangat dominan melalui keluarga Wazir Barmak.',
        khalifahUtama: ['Abu al-Abbas As-Saffah', 'Abu Ja\'far al-Mansur', 'Al-Mahdi', 'Harun ar-Rasyid', 'Al-Ma\'mun', 'Al-Mu\'tashim'],
        peristiwaKunci: [
          'Kemenangan revolusi Abbasiyah tahun 750 M',
          'Pembangunan Kota Bundar Baghdad 762 M',
          'Pendirian dan peletakan dasar Baitul Hikmah',
          'Puncak gerakan penerjemahan karya-karya filsafat dan sains dunia'
        ]
      },
      {
        id: 'fase-2',
        periode: 'Periode Kedua (Fase Pengaruh Militer Turki Pertama)',
        rentangTahun: '847 – 945 M (232 – 334 H)',
        karakteristik: 'Para khalifah mulai didominasi oleh perwira-perwira militer berkebangsaan Turki yang diangkat sejak masa Al-Mu\'tashim. Pusat pemerintahan sempat dipindahkan ke Samarra.',
        khalifahUtama: ['Al-Mutawakkil', 'Al-Muntashir', 'Al-Mu\'tamid', 'Al-Muqtadir'],
        peristiwaKunci: [
          'Pembunuhan Khalifah Al-Mutawakkil oleh konspirasi perwira Turki',
          'Munculnya dinasti-dinasti lokal otonom di provinsi-provinsi jauh (Thahiriyah, Saffariyah, Tuluniyah)',
          'Kelahiran banyak perawi hadits agung (Kutubus Sittah)'
        ]
      },
      {
        id: 'fase-3',
        periode: 'Periode Ketiga (Fase Pengaruh Dinasti Buwaihiyah)',
        rentangTahun: '945 – 1055 M (334 – 447 H)',
        karakteristik: 'Kekuasaan politik de facto beralih ke tangan Dinasti Buwaihi (Bani Buwaih) yang bermazhab Syi\'ah, sedangkan Khalifah Abbasiyah berkedudukan sebagai simbol spiritual keagamaan belaka.',
        khalifahUtama: ['Al-Mustakfi', 'Al-Muti\'', 'Ath-Tha\'i', 'Al-Qadir'],
        peristiwaKunci: [
          'Baghdad dikuasai oleh tentara Buwaihi tahun 945 M',
          'Perkembangan pesat ilmu filsafat Islam, astronomi, sastra Arab, dan kedokteran era Ibnu Sina dan Al-Farabi'
        ]
      },
      {
        id: 'fase-4',
        periode: 'Periode Keempat (Fase Pengaruh Dinasti Seljuk)',
        rentangTahun: '1055 – 1194 M (447 – 590 H)',
        karakteristik: 'Kekuasaan politik dipegang oleh bangsa Turki Seljuk (Sunni) di bawah Sultan Thughril Bek dan Wazir Nizam al-Mulk. Masa kebangkitan ortodoksi Sunni dan lembaga pendidikan madrasah formal.',
        khalifahUtama: ['Al-Qa\'im', 'Al-Muqtadi', 'Al-Mustazhir', 'Al-Mustarshid'],
        peristiwaKunci: [
          'Pendirian jaringan Madrasah Nizhamiyah oleh Perdana Menteri Nizam al-Mulk',
          'Kiprah keilmuan Hujjatul Islam Imam Al-Ghazali di Baghdad',
          'Meletusnya gelombang Perang Salib Pertama (1096–1099 M)'
        ]
      },
      {
        id: 'fase-5',
        periode: 'Periode Kelima (Fase Kebebasan Sementara & Keruntuhan Baghdad)',
        rentangTahun: '1194 – 1258 M (590 – 656 H)',
        karakteristik: 'Para khalifah berhasil lepas dari dominasi dinasti luar namun wilayah efektif kekuasaannya menyusut hanya di sekitar Irak. Diakhiri dengan invasi dahsyat bangsa Mongol.',
        khalifahUtama: ['An-Nashir', 'Az-Zahir', 'Al-Mustanshir', 'Al-Musta\'shim Billah'],
        peristiwaKunci: [
          'Pendirian Madrasah Mustansiriyah tahun 1233 M',
          'Pengepungan dan pembantaian kota Baghdad oleh Hulagu Khan (1258 M)',
          'Pembakaran Baitul Hikmah dan berakhirnya kekhalifahan Abbasiyah di Irak'
        ]
      }
    ]
  },
  tokohPenting: [
    {
      id: 'tokoh-1',
      namaLengkap: 'Abdullah bin Muhammad bin Ali bin Abdullah bin Abbas',
      namaPopuler: 'Abu al-Abbas As-Saffah',
      gelarAtauJulukan: 'As-Saffah (Sang Penumpah Darah Musuh / Sang Pemurah)',
      kategori: 'Pendiri & Peletak Dasar',
      masaHidup: '721 – 754 M (Memerintah 750 – 754 M)',
      karyaMonumental: [
        'Pendirian Daulah Abbasiyah di Kufah',
        'Penumpasan sisa kekuatan loyalis Umayyah',
        'Pembangunan ibu kota sementara di Al-Hasyimiyah'
      ],
      peranDanKontribusi: 'Sebagai khalifah pendiri pertama, beliau meletakkan pilar awal legitimasi keluarga Abbasiyah, menyatukan faksi-faksi pendukung yang majemuk (Arab, Persia, Mawali), dan mengamankan kekuasaan dari ancaman disintegrasi pasca perang saudara.',
      keteladananMoral: 'Tegas dalam menjaga persatuan koalisi dan memiliki keteguhan tekad dalam merintis peradaban baru dari titik nol.'
    },
    {
      id: 'tokoh-2',
      namaLengkap: 'Abu Ja\'far Abdullah bin Muhammad bin Ali',
      namaPopuler: 'Abu Ja\'far Al-Mansur',
      gelarAtauJulukan: 'Al-Mansur (Sang Pemenang) & Peletak Dasar Arsitektur Daulah',
      kategori: 'Pendiri & Peletak Dasar',
      masaHidup: '714 – 775 M (Memerintah 754 – 775 M)',
      karyaMonumental: [
        'Pembangunan Kota Bundar Baghdad (Madinat as-Salam, 762 M)',
        'Perintisan sistem birokrasi pos rahasia (Diwan al-Barid)',
        'Inisiasi awal penerjemahan literatur astronomi dan matematika Sansekerta & Yunani'
      ],
      peranDanKontribusi: 'Dikenal sebagai arsitek sejati Daulah Abbasiyah. Beliau menertibkan administrasi keuangan perbendaharaan negara (Baitul Mal), meredam berbagai pemberontakan internal, dan memindahkan pusat pemerintahan ke posisi strategis di Baghdad yang mengantarai jalur perdagangan dunia.',
      keteladananMoral: 'Sangat hemat, disiplin mengelola uang kas negara, pekerja keras tanpa kenal lelah, dan memiliki visi perencanaan masa depan yang matang.'
    },
    {
      id: 'tokoh-3',
      namaLengkap: 'Abu Muslim Abdurrahman bin Muslim Al-Khurasani',
      namaPopuler: 'Abu Muslim al-Khurasani',
      gelarAtauJulukan: 'Panglima Revolusi Abbasiyah & Pembebas Khurasan',
      kategori: 'Pendiri & Peletak Dasar',
      masaHidup: '718 – 755 M',
      karyaMonumental: [
        'Pengibaran bendera hitam panji perjuangan Abbasiyah di Khurasan (747 M)',
        'Kemenangan taktik perang pembebasan wilayah timur dari Merv hingga Kufah'
      ],
      peranDanKontribusi: 'Menjadi motor penggerak militer paling krusial dalam menumbangkan kekuasaan Daulah Umayyah berkat kemampuan kepemimpinan karismatiknya menghimpun dukungan luas rakyat Khurasan.',
      keteladananMoral: 'Loyalitas tinggi, kepiawaian berorganisasi, dan kecakapan diplomasi lintas etnis.'
    },
    {
      id: 'tokoh-4',
      namaLengkap: 'Harun bin Muhammad Al-Mahdi',
      namaPopuler: 'Harun ar-Rasyid',
      gelarAtauJulukan: 'Ar-Rasyid (Yang Mendapat Petunjuk) & Pemimpin Era Keemasan',
      kategori: 'Khalifah Puncak Kejayaan',
      masaHidup: '766 – 809 M (Memerintah 786 – 809 M)',
      karyaMonumental: [
        'Pendirian perpustakaan Khizanat al-Hikmah (cikal bakal Baitul Hikmah)',
        'Pembangunan Rumah Sakit Umum Bimaristan pertama di Baghdad',
        'Diplomasi global dengan Kaisar Charlemagne (Kekaisaran Romawi Suci) dan Dinasti Tang di Tiongkok',
        'Kesejahteraan sosial tertinggi hingga Baitul Mal berkelimpahan dan keadilan hukum merata'
      ],
      peranDanKontribusi: 'Memimpin era paling gemilang dalam sejarah Islam. Pada masanya, Baghdad menjadi kota termahal, terindah, dan paling beradab di muka bumi. Harun ar-Rasyid adalah khalifah yang tekun beribadah (shalat sunnah ratusan rakaat setiap hari) dan rutin berhaji selang-seling dengan berjihad membela perbatasan negara.',
      keteladananMoral: 'Mencintai ulama dan penuntut ilmu, rendah hati mendengarkan nasihat kejujuran dari ulama (seperti Fudhail bin Iyadh), serta sangat dermawan menyantuni rakyat miskin.'
    },
    {
      id: 'tokoh-5',
      namaLengkap: 'Abdullah bin Harun ar-Rasyid',
      namaPopuler: 'Al-Ma\'mun',
      gelarAtauJulukan: 'Pelindung Sains, Filsafat, & Bapak Intelektualitas Islam',
      kategori: 'Khalifah Puncak Kejayaan',
      masaHidup: '786 – 833 M (Memerintah 813 – 833 M)',
      karyaMonumental: [
        'Pengembangan besar-besaran lembaga riset akbar Baitul Hikmah',
        'Pembangunan Observatorium Astronomi Syammasiyyah di Baghdad dan Gunung Qasiyun di Damaskus',
        'Pengukuran keliling bumi secara ilmiah melalui tim ilmuwan pimpinan Banu Musa',
        'Pemberian hadiah emas seberat buku yang berhasil diterjemahkan ke bahasa Arab'
      ],
      peranDanKontribusi: 'Membuka kran rasionalitas dan penyelidikan ilmiah dalam peradaban Islam. Beliau mendanai ekspedisi perburuan manuskrip ilmiah kuno ke Konstantinopel, mengundang sarjana lintas agama (Kristen Nestorian, Yahudi, Persia) untuk bekerja sama di Baghdad.',
      keteladananMoral: 'Kecintaan luar biasa terhadap riset literasi, rasa ingin tahu ilmiah (curiosity) tanpa batas, dan menghargai kepakaran tanpa memandang sekat primordial.'
    },
    {
      id: 'tokoh-6',
      namaLengkap: 'Abu Ali Al-Husain bin Abdullah bin Sina',
      namaPopuler: 'Ibnu Sina (Avicenna)',
      gelarAtauJulukan: 'Asy-Syaikh ar-Ra\'is (Pemimpin Para Cendekiawan) & Bapak Kedokteran Modern',
      kategori: 'Ilmuwan Sains & Medis',
      masaHidup: '980 – 1037 M',
      karyaMonumental: [
        'Al-Qānūn fī aṭ-Ṭibb (The Canon of Medicine) - rujukan standar fakultas kedokteran Eropa selama lebih dari 5 abad',
        'Kitāb asy-Syifā’ (The Book of Healing) - ensiklopedia komprehensif filsafat, logika, fisika, dan matematika'
      ],
      peranDanKontribusi: 'Menemukan sifat menularnya penyakit tuberkulosis (TBC) melalui udara dan air, prinsip dasar karantina (al-arba\'iniyyah), deskripsi anatomi mata, saraf, dan keterkaitan antara kesehatan mental dan fisik (psikosomatis).',
      keteladananMoral: 'Bila menghadapi kebuntuan dalam memecahkan teori rumit, beliau senantiasa berwudhu, pergi ke masjid, shalat, dan memohon petunjuk kepada Allah Swt.'
    },
    {
      id: 'tokoh-7',
      namaLengkap: 'Muhammad bin Musa Al-Khawarizmi',
      namaPopuler: 'Al-Khawarizmi (Algoritmi)',
      gelarAtauJulukan: 'Bapak Aljabar Dunia & Penemu Angka Nol (Shifr) dalam Sistem Desimal',
      kategori: 'Filsuf & Matematikawan',
      masaHidup: '780 – 850 M',
      karyaMonumental: [
        'Al-Kitāb al-Mukhtaṣar fī Ḥisāb al-Jabr wa al-Muqābala (asal kata "Algebra")',
        'Kitāb al-Jam\' wa at-Tafrīq bi Ḥisāb al-Hind (mengenalkan angka nol dan algoritma ke peradaban Barat)'
      ],
      peranDanKontribusi: 'Menyusun dasar-dasar ilmu aljabar, persamaan kuadrat linier, sistem koordinat, peta dunia astronomi (Zīj as-Sindhind), serta mempermudah perhitungan waris faraidh dalam fikih Islam menggunakan persamaan matematika.',
      keteladananMoral: 'Mengabdikan kecerdasan sains murni untuk menyelesaikan masalah riil syariat dan hajat hidup umat manusia.'
    },
    {
      id: 'tokoh-8',
      namaLengkap: 'Abu Bakar Muhammad bin Zakariya Ar-Razi',
      namaPopuler: 'Ar-Razi (Rhazes)',
      gelarAtauJulukan: 'Pelopor Ilmu Kedokteran Eksperimental & Kimia Klinis',
      kategori: 'Ilmuwan Sains & Medis',
      masaHidup: '865 – 925 M',
      karyaMonumental: [
        'Al-Hāwī fī aṭ-Ṭibb (Continens Liber - ensiklopedia kedokteran 20 jilid)',
        'Kitāb al-Judari wa al-Hasbah (karya pertama yang membedakan penyakit cacar dan campak secara akurat)'
      ],
      peranDanKontribusi: 'Merintis metode eksperimental di laboratorium, penggunaan alkohol murni dan asam sulfat dalam pengobatan, pemilihan lokasi rumah sakit dengan menggantungkan potongan daging segar di penjuru kota untuk mencari udara paling higienis.',
      keteladananMoral: 'Sangat dermawan menggratiskan biaya pengobatan bagi rakyat miskin dan memberikan tunjangan makan obat gratis kepada dhuafa.'
    },
    {
      id: 'tokoh-9',
      namaLengkap: 'Muhammad bin Idris Asy-Syafi\'i',
      namaPopuler: 'Imam Asy-Syafi\'i',
      gelarAtauJulukan: 'Nashir as-Sunnah & Peletak Dasar Ilmu Ushul Fikih Pertama',
      kategori: 'Ulama Fikih & Hadis',
      masaHidup: '767 – 820 M (150 – 204 H)',
      karyaMonumental: [
        'Ar-Risālah (kitab metodologi penetapan hukum ushul fikih pertama di dunia)',
        'Al-Umm (kitab rujukan induk hukum fikih mazhab Syafi\'i)'
      ],
      peranDanKontribusi: 'Menggabungkan madrasah hadits Madinah (Imam Malik) dan madrasah ra\'yu Irak (Imam Abu Hanifah) menjadi sintesis metodologis hukum yang kokoh, adil, dan logis.',
      keteladananMoral: 'Kecintaan belajar yang luar biasa (menghafal Al-Qur\'an usia 7 tahun, Al-Muwatta\' usia 10 tahun) dan adab mulia dalam menghormati perbedaan pendapat ulama.'
    },
    {
      id: 'tokoh-10',
      namaLengkap: 'Muhammad bin Ismail Al-Bukhari',
      namaPopuler: 'Imam Bukhari',
      gelarAtauJulukan: 'Amirul Mu\'minin fil Hadits (Pemimpin Ahli Hadits Sedunia)',
      kategori: 'Ulama Fikih & Hadis',
      masaHidup: '810 – 870 M (194 – 256 H)',
      karyaMonumental: [
        'Al-Jāmi\' aṣ-Ṣaḥīḥ (Shahih Bukhari) - kitab paling otentik di muka bumi setelah Al-Qur\'anul Karim'
      ],
      peranDanKontribusi: 'Mengembara ribuan kilometer ke seantero dunia Islam mengumpulkan ratusan ribu hadits dan menyeleksinya dengan kriteria sanad dan matan paling ketat, ilmiah, dan berintegritas tinggi.',
      keteladananMoral: 'Setiap hendak menuliskan satu hadits ke dalam kitab Shahihnya, beliau selalu mandi besar, berwudhu, dan shalat istikharah dua rakaat memohon ridha Allah Swt.'
    }
  ],
  puncakKejayaan: {
    pengertianTheGoldenAge: 'Masa Keemasan Islam (The Golden Age of Islam) pada era Abbasiyah berlangsung sekitar pertengahan abad ke-8 hingga abad ke-13 M. Pada kurun waktu ini, dunia Islam menjadi episentrum peradaban global dalam ilmu pengetahuan, sains, seni arsitektur, ekonomi perniagaan internasional, dan tata kelola pemerintahan madani yang berlandaskan tauhid dan etos keilmuan tinggi.',
    lembagaBaitulHikmah: {
      sejarahSingkat: 'Baitul Hikmah (House of Wisdom / Rumah Kearifan) awalnya didirikan oleh Khalifah Harun ar-Rasyid sebagai Khizanat al-Hikmah (perpustakaan istana). Oleh putranya, Khalifah Abdullah Al-Ma\'mun, institusi ini diperluas secara spektakuler menjadi kompleks raksasa yang berfungsi sebagai perpustakaan publik terbesar dunia, akademi ilmu pengetahuan, biro penerjemahan resmi, universitas riset, serta observatorium astronomi.',
      fungsiUtama: [
        'Khizanah al-Kutub (Perpustakaan Akbar): Menyimpan ratusan ribu manuskrip langka dari berbagai peradaban kuno (Yunani, Persia, India, Babilonia, Mesir, dan Tiongkok).',
        'Markaz at-Tarjamah (Biro Penerjemahan Riset): Menerjemahkan karya-karya filsafat, matematika, astronomi, kedokteran, dan geografi ke dalam bahasa Arab.',
        'Halaqah al-Munazharah (Balai Debat Ilmiah): Tempat bertemunya para pakar lintas agama, mazhab, dan bangsa untuk mendiskusikan pemikiran rasional dan inovasi sains.',
        'Al-Marshad al-Falaki (Observatorium Astronomi): Meneliti peredaran benda langit, menghitung garis lintang/bujur, serta mengukur keliling bumi secara presisi matematika.'
      ],
      direkturDanPenerjemah: 'Dipimpin oleh sarjana-sarjana jenius, antara lain Hunain bin Ishaq (seorang dokter Kristen Nestorian yang menguasai bahasa Arab, Suryani, Yunani, dan Persia) bersama putranya Ishaq bin Hunain dan keponakannya Hubaisy bin al-Hasan.',
      penghargaanBuku: 'Khalifah Al-Ma\'mun memberikan apresiasi luar biasa kepada para sarjana: Setiap buku ilmiah kuno yang berhasil diterjemahkan dengan teliti dan cermat ke dalam bahasa Arab dihadiahi emas murni seberat timbangan fisik buku tersebut!'
    },
    gerakanTadwinDanPenerjemahan: {
      tigaTahapPenerjemahan: [
        'Tahap 1 (Masa Al-Mansur hingga Harun ar-Rasyid): Menerjemahkan naskah-naskah matematika dasar, astronomi (seperti kitab Siddhanta dari India), dan logika dasar.',
        'Tahap 2 (Masa Al-Ma\'mun hingga akhir abad ke-9 M): Gerakan penerjemahan massal karya-karya filsafat Aristoteles, Plato, kedokteran Galen dan Hippocrates, serta geometri Euclid.',
        'Tahap 3 (Awal abad ke-10 M ke atas): Fase kritis, elaborasi, dan orisinalitas riset, di mana para ilmuwan muslim tidak sekadar menerjemahkan melainkan mengoreksi kesalahan teori ilmuwan Yunani kuno dan menciptakan disiplin ilmu baru (seperti aljabar, optik, kimia eksperimental, dan sosiologi sejarah).'
      ],
      bahasaSumber: ['Bahasa Yunani Kuno', 'Bahasa Pahlavi (Persia Kuno)', 'Bahasa Sansekerta (India)', 'Bahasa Suryani (Syriac)', 'Bahasa Koptik (Mesir)']
    },
    pilarKejayaan: [
      {
        id: 'pilar-1',
        bidang: 'Sains, Kedokteran, & Teknologi',
        judul: 'Revolusi Medis & Sains Eksperimental',
        ikon: '🔬',
        deskripsi: 'Kedokteran Islam berkembang dari sekadar teori menjadi sains klinis berbasis bukti empiris dan laboratorium rumah sakit modern.',
        institusiKunci: 'Rumah Sakit Bimaristan Al-Adhudi di Baghdad (dilengkapi ruang rawat terpisah berdasarkan jenis penyakit, laboratorium farmasi, perpustakaan, dan apotek gratis).',
        pencapaianUtama: [
          'Penemuan sistem sirkulasi darah paru-paru oleh Ibnu an-Nafis.',
          'Penciptaan lebih dari 200 instrumen bedah modern (pisau bedah, tang penjepit, benang bedah dari usus hewan/catgut) oleh Az-Zahrawi (Abulcasis).',
          'Penetapan prinsip optik modern dan hukum pemantulan/pembiasan cahaya (Kitab al-Manazir) oleh Al-Hasan Ibnu al-Haitsam (Alhazen).'
        ],
        faktaMenarik: 'Para dokter di Rumah Sakit Bimaristan Baghdad wajib lulus ujian kode etik kedokteran dan mengantongi izin lisensi praktik resmi dari muhtasib negara sebelum boleh mengobati pasien.',
        dampakBagiPeradabanDunia: 'Karya Ibnu Sina dan Ar-Razi menjadi buku teks wajib di universitas-universitas Eropa (seperti Montpellier, Paris, dan Oxford) hingga awal abad ke-17 M.'
      },
      {
        id: 'pilar-2',
        bidang: 'Matematika, Astronomi, & Navigasi',
        judul: 'Pondasi Digital Dunia & Pemetaan Langit',
        ikon: '📐',
        deskripsi: 'Matematikawan muslim mentransformasi cara manusia berhitung dengan mengenalkan sistem desimal dan angka Arab-India.',
        institusiKunci: 'Observatorium Syammasiyyah Baghdad & Observatorium Maragha.',
        pencapaianUtama: [
          'Pengembangan fungsi trigonometri (sinus, kosinus, tangen, kotangen) oleh Al-Battani.',
          'Penyempurnaan instrumen Astrolabe (Asturlab) sebagai GPS navigasi maritim purba untuk mengukur posisi bintang dan menentukan arah kiblat.',
          'Penetapan panjang satu tahun surya secara sangat akurat: 365 hari, 5 jam, 46 menit, dan 24 detik oleh Al-Battani.'
        ],
        faktaMenarik: 'Kata "Algoritma" dan "Aljabar" yang mendasari seluruh dunia komputasi, AI, dan coding modern saat ini diambil langsung dari nama Al-Khawarizmi dan judul bukunya Al-Jabr.',
        dampakBagiPeradabanDunia: 'Memungkinkan penjelajahan samudra dunia, perhitungan kalender presisi, serta revolusi teknologi informasi modern.'
      },
      {
        id: 'pilar-3',
        bidang: 'Ekonomi, Perdagangan, & Perbankan',
        judul: 'Urat Nadi Perdagangan Global & Sistem Cek Modern',
        ikon: '🪙',
        deskripsi: 'Perekonomian Daulah Abbasiyah berpusat pada dinar emas dan dirham perak yang stabil, didukung sistem irigasi subur antara Sungai Tigris-Eufrat.',
        institusiKunci: 'Pasar Souq Baghdad & Kantor Pertukaran Finansial (Diwan Jahbadz).',
        pencapaianUtama: [
          'Penciptaan instrumen pembayaran tanpa uang tunai melalui "Suftajah" (asal kata "Cek" / Cheque) yang dapat dicairkan dari Baghdad hingga Maroko dan Tiongkok.',
          'Jaringan perdagangan lintas benua melalui Jalur Sutra (Silk Road) darat dan Jalur Rempah maritim Samudra Hindia.',
          'Standarisasi timbangan, kebersihan pasar, dan perlindungan konsumen di bawah pengawasan Lembaga Hisbah.'
        ],
        faktaMenarik: 'Koin Dinar Abbasiyah bertuliskan kalimat Tauhid ditemukan oleh arkeolog modern di situs-situs Skandinavia (Viking) dan pesisir Inggris, membuktikan luasnya jangkauan mata uang Islam saat itu.',
        dampakBagiPeradabanDunia: 'Melahirkan cikal bakal sistem perbankan komersial internasional dan keterbukaan ekonomi pasar bebas.'
      },
      {
        id: 'pilar-4',
        bidang: 'Arsitektur, Tata Kota, & Kebudayaan',
        judul: 'Kemegahan Kota Metropolitan & Industri Kertas',
        ikon: '🕌',
        deskripsi: 'Baghdad tumbuh menjadi megapolitan berpenduduk lebih dari 1 juta jiwa dengan tata kota higienis, taman hijau rindang, dan saluran air bersih pipa tanah liat.',
        institusiKunci: 'Pabrik Kertas Pertama di Baghdad (794 M) yang didirikan pada masa Harun ar-Rasyid.',
        pencapaianUtama: [
          'Pengenalan teknologi pembuatan kertas murah dan massal dari rami/katun (menggantikan papirus dan perkamen kulit hewan yang mahal).',
          'Munculnya ratusan toko buku (Warraqin) di sepanjang jalan Baghdad tempat masyarakat umum membeli buku ilmiah dan sastra bermutu.',
          'Karya sastra legendaris dunia "Kisah Seribu Satu Malam" (Alf Lailah wa Lailah) yang mengabadikan kemegahan peradaban Baghdad.'
        ],
        faktaMenarik: 'Tersedianya kertas murah di Baghdad memicu ledakan literasi: siswa miskin sekalipun mampu membeli lembaran buku dan mencatat ilmu pengetahuan dengan leluasa.',
        dampakBagiPeradabanDunia: 'Teknologi kertas menyebar dari Baghdad ke Andalusia (Spanyol) lalu ke Eropa, memicu era Renaisans dan revolusi mesin cetak Gutenberg.'
      }
    ]
  },
  faktorKemunduran: {
    pengantarKeruntuhan: 'Sebagaimana sunnatullah peradaban yang dijelaskan dalam Q.S. Ali \'Imran: 140 ("Dan masa kejayaan dan kehancuran itu Kami pergilirkan di antara manusia"), Daulah Abbasiyah yang berkuasa selama lebih dari 5 abad akhirnya mengalami kemunduran bertahap hingga runtuh secara tragis pada tahun 1258 M. Keruntuhan ini disebabkan oleh kombinasi akumulasi kelemahan internal dari dalam tubuh pemerintahan dan hantaman dahsyat serangan militer eksternal.',
    faktorInternal: [
      {
        id: 'int-1',
        kategori: 'Faktor Internal',
        judul: '1. Perebutan Takhta & Lemahnya Karakter Khalifah Terkemudian',
        penyebabUtama: 'Tidak adanya sistem suksesi kepemimpinan yang baku menyebabkan perang saudara berulang antar-pangeran (seperti perang saudara antara Al-Amin dan Al-Ma\'mun).',
        analisisHistoris: 'Para khalifah generasi terkemudian cenderung hidup mewah, bermalas-malasan, tenggelam dalam hiburan istana (hedonisme), dan menyerahkan urusan pemerintahan yang berat kepada para wazir atau pejabat yang korup.',
        akibatBagiDaulah: [
          'Hilangnya wibawa kepemimpinan khalifah di mata rakyat dan tentara.',
          'Terjadinya pemborosan kas negara (Baitul Mal) untuk proyek-proyek istana yang tidak produktif.',
          'Melemahnya rasa tanggung jawab moral kepemimpinan di hadapan Allah Swt.'
        ]
      },
      {
        id: 'int-2',
        kategori: 'Faktor Internal',
        judul: '2. Ketergantungan Berlebihan pada Tentara Bayaran Asing (Turki & Daylam)',
        penyebabUtama: 'Sejak masa Khalifah Al-Mu\'tashim, istana merekrut ribuan tentara berkebangsaan Turki untuk menandingi kekuatan faksi Arab dan Persia.',
        analisisHistoris: 'Alih-alih melindungi khalifah, para perwira militer Turki dan kemudian Dinasti Buwaihiyah serta Seljuk justru mendominasi istana, mengangkat dan menurunkan khalifah sesuka hati mereka seperti boneka politik.',
        akibatBagiDaulah: [
          'Khalifah kehilangan kedaulatan politik militer sejati.',
          'Terjadinya kudeta dan pembunuhan terhadap khalifah yang menolak tunduk pada kehendak panglima perang.',
          'Rakyat kehilangan kepercayaan terhadap stabilitas keamanan negara.'
        ]
      },
      {
        id: 'int-3',
        kategori: 'Faktor Internal',
        judul: '3. Disintegrasi Wilayah & Munculnya Dinasti-Dinasti Mandiri',
        penyebabUtama: 'Wilayah kekuasaan Abbasiyah yang terbentang luas dari Afrika Utara hingga perbatasan India mustahil dikontrol secara efektif dengan sarana komunikasi abad pertengahan.',
        analisisHistoris: 'Para gubernur provinsi di wilayah-wilayah jauh melepaskan diri dan mendirikan dinasti-dinasti otonom independen, seperti Dinasti Aghlabiyah di Tunisia, Dinasti Fathimiyah di Mesir, Dinasti Thahiriyah dan Samaniyah di Persia.',
        akibatBagiDaulah: [
          'Pemasukan pajak perbendaharaan ke ibu kota Baghdad merosot drastis.',
          'Wilayah kekuasaan riil khalifah menyusut hingga hanya meliputi kawasan Irak sekitarnya.',
          'Fragmentasi kekuatan umat Islam yang mempermudah serangan musuh luar.'
        ]
      },
      {
        id: 'int-4',
        kategori: 'Faktor Internal',
        judul: '4. Konflik Mazhab Teologis & Perpecahan Fanatisme Sekte',
        penyebabUtama: 'Perseteruan tajam antara aliran teologi Muktazilah, Asy\'ariyah, serta pertikaian faksi Sunni dan Syi\'ah yang kerap memicu kerusuhan berdarah di jalanan Baghdad.',
        analisisHistoris: 'Peristiwa Mihnah (inquisisi teologis penciptaan Al-Qur\'an pada era Al-Ma\'mun) dan pembalasan pada era berikutnya meninggalkan luka polarisasi sosial yang dalam.',
        akibatBagiDaulah: [
          'Melemahnya ukhuwah islamiyah dan kohesi sosial masyarakat sipil.',
          'Terjadinya sabotase politik oleh kelompok yang merasa disingkirkan dari kekuasaan.'
        ]
      }
    ],
    faktorEksternal: [
      {
        id: 'eks-1',
        kategori: 'Faktor Eksternal',
        judul: '1. Gelombang Serangan Perang Salib (Crusades, 1096 – 1291 M)',
        penyebabUtama: 'Invasi militer pasukan Salib Eropa ke wilayah Syam, Palestina, dan pesisir Mediterania timur.',
        analisisHistoris: 'Meskipun Baghdad tidak diserang langsung oleh tentara Salib, perang berkepanjangan ini menguras energi militer, jalur perdagangan barat terganggu, dan stabilitas kawasan barat Islam porak-poranda.',
        akibatBagiDaulah: [
          'Kelelahan ekonomi dan militer di kawasan provinsi barat.',
          'Pengalihan konsentrasi pertahanan yang melemahkan kewaspadaan terhadap ancaman dari perbatasan timur.'
        ]
      },
      {
        id: 'eks-2',
        kategori: 'Faktor Eksternal',
        judul: '2. Invasi Brutal Pasukan Mongol di Bawah Komando Hulagu Khan (1258 M)',
        penyebabUtama: 'Ekspansi bangsa Mongol pimpinan Hulagu Khan (cucu Jenghis Khan) yang menyapu kawasan Asia Tengah dan mengepung Baghdad pada awal tahun 1258 M.',
        analisisHistoris: 'Khalifah terakhir Al-Musta\'shim Billah meremehkan ancaman Mongol dan menolak memperkuat benteng pertahanan. Pada tanggal 10 Februari 1258 M, Baghdad takluk dan dibumihanguskan tanpa ampun.',
        akibatBagiDaulah: [
          'Pembunuhan Khalifah Al-Musta\'shim Billah beserta keluarga dan para pembesar negara.',
          'Pembantaian massal lebih dari 800.000 hingga 1.000.000 penduduk kota Baghdad.',
          'Penghancuran total institusi Baitul Hikmah, di mana ratusan ribu kitab sains langka dibuang ke Sungai Tigris hingga air sungai menghitam karena lunturan tinta dan memerah karena tumpahan darah syuhada.',
          'Berakhirnya riwayat Daulah Abbasiyah di Baghdad untuk selama-lamanya.'
        ]
      }
    ],
    tragediJatuhnyaBaghdad1258: {
      tahun: 'Tahun 1258 M (656 H)',
      pemimpinMongol: 'Hulagu Khan (Panglima Utama Kekaisaran Mongol / Ilkhanat)',
      khalifahTerakhir: 'Khalifah Al-Musta\'shim Billah (Khalifah ke-37 Abbasiyah)',
      deskripsiTragedi: 'Pengepungan kota Baghdad berlangsung selama dua pekan. Setelah pintu gerbang jebol, pasukan Mongol melakukan penjarahan dan pembantaian selama 40 hari penuh. Istana megah, masjid agung, rumah sakit, dan universitas diratakan dengan tanah.',
      dampakKehilanganIntelektual: 'Tragedi 1258 M merupakan bencana intelektual terbesar sepanjang sejarah peradaban manusia. Khazanah manuskrip sains, filsafat, dan kedokteran dunia yang dikumpulkan dan diteliti selama lima ratus tahun lenyap dalam sekejap mata. Sejarawan mencatat bahwa Sungai Tigris menghitam pekat oleh tinta ribuan jilid buku yang ditenggelamkan, menandai berakhirnya Zaman Keemasan Islam di Timur Tengah.'
    }
  },
  hikmahDanRefleksi: {
    daftarHikmah: [
      {
        id: 'hikmah-1',
        dimensi: 'Etos Literasi & Keilmuan',
        judul: '1. Mengembangkan Budaya Membaca, Riset, & Apresiasi Terhadap Ilmuwan',
        deskripsi: 'Kejayaan Abbasiyah membuktikan bahwa Islam mencapai puncak kejayaan ketika umatnya memuliakan para sarjana, mendanai riset sains, dan gemar membaca. Kemajuan tidak datang dari slogan kosong, melainkan dari kerja keras intelektual yang gigih.',
        dalilTerkait: {
          surah: 'Q.S. Al-Mujadilah [58]: 11',
          teksArab: 'يَرْفَعِ ٱللَّهُ ٱلَّذِينَ ءَامَنُوا۟ مِنكُمْ وَٱلَّذِينَ أُوتُوا۟ ٱلْعِلْمَ دَرَجَٰتٍ ۚ وَٱللَّهُ بِمَا تَعْمَلُونَ خَبِيرٌ',
          terjemahan: 'Allah akan meninggikan orang-orang yang beriman di antaramu dan orang-orang yang diberi ilmu pengetahuan beberapa derajat. Dan Allah Maha Teliti terhadap apa yang kamu kerjakan.'
        },
        implementasiPelajar: [
          'Menjadikan membaca buku dan artikel ilmiah bermutu sebagai hobi harian.',
          'Tidak mudah percaya berita hoaks di media sosial dengan membiasakan tradisi tabayyun (verifikasi ilmiah).',
          'Bercita-cita menjadi ilmuwan, dokter, insinyur, atau ulama yang berintegritas tinggi.'
        ]
      },
      {
        id: 'hikmah-2',
        dimensi: 'Keterbukaan & Kolaborasi',
        judul: '2. Keterbukaan Pikiran (Open Minded) & Kolaborasi Tanpa Sekat Primordial',
        deskripsi: 'Baitul Hikmah berhasil karena para khalifah bersikap terbuka mempelajari ilmu dari bangsa mana pun (Yunani, Persia, India, Tiongkok) dan merekrut sarjana cerdas tanpa memandang latar belakang etnis maupun agamanya.',
        dalilTerkait: {
          surah: 'H.R. At-Tirmidzi No. 2687',
          teksArab: 'الْكَلِمَةُ الْحِكْمَةُ ضَالَّةُ الْمُؤْمِنِ فَحَيْثُ وَجَدَهَا فَهُوَ أَحَقُّ بِهَا',
          terjemahan: 'Kalimat hikmah (ilmu pengetahuan yang bermanfaat) adalah barang milik mukmin yang hilang. Di mana pun ia menemukannya, maka dialah yang paling berhak mengambilnya.'
        },
        implementasiPelajar: [
          'Bersikap toleran dan menghormati perbedaan suku, agama, dan pandangan politik di sekolah.',
          'Mempelajari bahasa asing (Arab, Inggris, Mandarin) untuk menyerap ilmu pengetahuan dunia.',
          'Mengambil hal-hal positif dari kemajuan teknologi modern sambil membuang pengaruh buruknya.'
        ]
      },
      {
        id: 'hikmah-3',
        dimensi: 'Ibrah Bahaya Perpecahan',
        judul: '3. Menghindari Bahaya Perpecahan, Fanatisme Buta, & Gaya Hidup Hedonistik',
        deskripsi: 'Daulah Abbasiyah runtuh bukan karena musuh luar terlalu kuat, melainkan karena dari dalam tubuhnya sendiri sudah lapuk akibat perebutan kekuasaan, korupsi, tentara bayaran, dan kemewahan yang melalaikan dari nilai tauhid.',
        dalilTerkait: {
          surah: 'Q.S. Al-Anfal [8]: 46',
          teksArab: 'وَأَطِيعُوا۟ ٱللَّهَ وَرَسُولَهُۥ وَلَا تَنَٰزَعُوا۟ فَتَفْشَلُوا۟ وَتَذْهَبَ رِيحُكُمْ ۖ وَٱصْبِرُوٓا۟ ۚ إِنَّ ٱللَّهَ مَعَ ٱلصَّٰبِرِينَ',
          terjemahan: 'Dan taatlah kepada Allah dan Rasul-Nya dan janganlah kamu berbantah-bantahan (berselisih), yang menyebabkan kamu menjadi gentar dan hilang kekuatanmu, dan bersabarlah. Sesungguhnya Allah beserta orang-orang yang sabar.'
        },
        implementasiPelajar: [
          'Menolak segala bentuk tawuran antarpelajar, perundungan (bullying), dan permusuhan di media sosial.',
          'Membiasakan pola hidup sederhana, qana\'ah, serta menjauhi gaya hidup flexing (pamer kemewahan) yang sia-sia.',
          'Menjaga ukhuwah islamiyah dan persatuan bangsa di atas kepentingan kelompok.'
        ]
      },
      {
        id: 'hikmah-4',
        dimensi: 'Karakter & Aksi Pelajar',
        judul: '4. Membangkitkan Kembali Kejayaan Peradaban Melalui Inovasi Digital',
        deskripsi: 'Sejarah bukan sekadar cerita masa lalu untuk dibanggakan secara nostalgia, melainkan cetak biru (blueprint) kebangkitan generasi muda muslim masa kini untuk memimpin kemajuan sains dunia.',
        dalilTerkait: {
          surah: 'Q.S. Ar-Ra\'d [13]: 11',
          teksArab: 'إِنَّ ٱللَّهَ لَا يُغَيِّرُ مَا بِقَوْمٍ حَتَّىٰ يُغَيِّرُوا۟ مَا بِأَنفُسِهِمْ',
          terjemahan: 'Sesungguhnya Allah tidak akan mengubah keadaan suatu kaum sebelum mereka mengubah keadaan diri mereka sendiri.'
        },
        implementasiPelajar: [
          'Menguasai keterampilan teknologi digital (coding, AI, robotika, literasi data) untuk kemaslahatan umat.',
          'Menyumbangkan gagasan dan karya kreatif dalam kegiatan riset sains remaja (KIR) di sekolah.',
          'Memadukan kecerdasan intelektual (IQ), emosional (EQ), dan spiritual (SQ) dalam kehidupan sehari-hari.'
        ]
      }
    ],
    studiKasus: [
      {
        id: 'kasus-1',
        judul: 'Dilema Kebangkitan Literasi: Antara Membaca Buku Ilmiah vs Candu Media Sosial',
        skenarioDilema: 'Di era Abbasiyah, Khalifah Al-Ma\'mun rela membayar emas murni seberat timbangan buku yang diterjemahkan agar rakyatnya tekun membaca ilmu berbobot. Sementara saat ini, hasil survei menunjukkan minat baca remaja Indonesia sangat rendah, namun durasi menatap layar ponsel untuk video pendek hiburan mencapai rata-rata 6 jam per hari.',
        pertanyaanPemantik: 'Bagaimana kamu merefleksikan nilai Baitul Hikmah untuk mengubah kebiasaan digitalmu agar tidak terjebak menjadi konsumen pasif di era modern?',
        analisisHikmah: 'Pelajar muslim harus menyadari bahwa bangsa yang memimpin dunia adalah bangsa yang membaca dan meneliti. Ponsel pintar semestinya difungsikan sebagai "Baitul Hikmah di dalam saku" untuk mengakses e-book, jurnal sains, dan perkuliahan online, bukan sekadar instrumen scroll hiburan nirfaedah.'
      },
      {
        id: 'kasus-2',
        judul: 'Dilema Toleransi Intelektual: Menghargai Perbedaan Pandangan di Grup Chat',
        skenarioDilema: 'Di Baitul Hikmah, para ulama Islam, dokter Kristen Nestorian, ilmuwan Yahudi, dan cendekiawan Persia berdiskusi di satu meja dengan penuh adab dan saling menghargai. Di era sekarang, sering kali kita melihat sesama teman kelas saling mengejek, mengeluarkan kata-kata kasar, bahkan mengeluarkan anggota grup hanya karena perbedaan pilihan atau selera.',
        pertanyaanPemantik: 'Sikap mulia apa yang dapat kamu contoh dari adab munazharah (dialog ilmiah) ilmuwan Abbasiyah saat menghadapi perbedaan pendapat di lingkungan kelasmu?',
        analisisHikmah: 'Kebenaran ilmiah dan persatuan umat diraih melalui dialog bermartabat dengan argumen yang santun, bukan dengan caci maki. Perbedaan pandangan adalah rahmat bila disikapi dengan lapang dada dan kepala dingin.'
      },
      {
        id: 'kasus-3',
        judul: 'Pelajaran dari Runtuhnya Baghdad: Bahaya Korupsi & Hidup Mewah para Pemimpin',
        skenarioDilema: 'Baghdad yang megah runtuh salah satunya karena para pemimpin terkemudian lupa diri, bermewah-mewahan, dan abai terhadap pertahanan negara. Bagaimana pelajar muslim yang kelak menjadi calon pemimpin masa depan membentengi diri dari godaan korupsi dan hedonisme?',
        pertanyaanPemantik: 'Langkah nyata apa yang bisa kamu latih sejak duduk di bangku SMP agar memiliki integritas amanah seperti Khalifah Abu Ja\'far Al-Mansur?',
        analisisHikmah: 'Integritas dibangun dari kebiasaan kecil: jujur mengelola uang kas kelas, tidak menyontek saat ujian, dan membelanjakan uang saku secara bijak tanpa menuruti gaya hidup konsumtif.'
      }
    ],
    lembarMuhasabah8Dimensi: [
      {
        aspek: '1. Etos Literasi (Iqra\')',
        indikator: 'Saya rutin menyisihkan waktu minimal 30 menit setiap hari untuk membaca buku non-pelajaran, tafsir Al-Qur\'an, atau artikel sains.'
      },
      {
        aspek: '2. Sikap Kritis Ilmiah (Tabayyun)',
        indikator: 'Saya tidak pernah membagikan berita atau video viral sebelum memverifikasi kebenaran dan sumber data aslinya.'
      },
      {
        aspek: '3. Semangat Riset & Inovasi',
        indikator: 'Saya berusaha mencari tahu solusi ilmiah atas masalah di sekitarku dan tidak mudah menyerah saat menghadapi pelajaran yang sulit.'
      },
      {
        aspek: '4. Keterbukaan & Toleransi',
        indikator: 'Saya mau berteman, bekerja sama dalam tugas kelompok, dan menghormati siapapun tanpa memandang suku, latar belakang sosial, maupun perbedaan pendapat.'
      },
      {
        aspek: '5. Pola Hidup Sederhana (Qana\'ah)',
        indikator: 'Saya bersyukur atas apa yang saya miliki dan tidak suka pamer atau merengek meminta barang mewah kepada orang tua.'
      },
      {
        aspek: '6. Integritas & Anti-Korupsi',
        indikator: 'Saya selalu jujur dalam mengerjakan ujian/tugas serta transparan bila dipercaya mengelola uang kas organisasi/kelas.'
      },
      {
        aspek: '7. Menjaga Ukhuwah & Persatuan',
        indikator: 'Saya aktif mendamaikan perselisihan antarteman dan menolak keras segala bentuk ejekan, perundungan, maupun tawuran.'
      },
      {
        aspek: '8. Keseimbangan Iman & Sains',
        indikator: 'Saya menjadikan ilmu pengetahuan sebagai sarana untuk semakin mengagumi kebesaran Allah Swt. dan tekun menjalankan shalat lima waktu.'
      }
    ],
    kuisHots: [
      {
        id: 'kuis-1',
        nomor: 1,
        stimulusKasus: 'Pada masa Khalifah Al-Ma\'mun, lembaga Baitul Hikmah mempekerjakan Hunain bin Ishaq, seorang sarjana beragama Kristen Nestorian yang sangat ahli menerjemahkan teks-teks kedokteran Yunani ke bahasa Arab. Khalifah memperlakukannya dengan sangat hormat dan memberinya fasilitas istimewa di istana.',
        pertanyaan: 'Berdasarkan fakta sejarah tersebut, prinsip fundamental apakah yang dapat disimpulkan mengenai etos peradaban Daulah Abbasiyah pada masa keemasannya?',
        pilihan: [
          'Daulah Abbasiyah kekurangan sarjana muslim sehingga terpaksa mempekerjakan orang asing',
          'Islam memandang ilmu pengetahuan sebagai milik universal kemanusiaan yang wajib digali melalui kolaborasi ilmiah yang inklusif dan meritokratis',
          'Khalifah Al-Ma\'mun lebih mengutamakan ilmu filsafat Yunani daripada syariat agama Islam',
          'Penerjemahan buku hanya bertujuan komersial untuk menyaingi dominasi Kekaisaran Romawi Timur di Konstantinopel'
        ],
        kunciJawaban: 1,
        pembahasan: 'Jawaban yang tepat adalah B. Puncak kejayaan Abbasiyah tercapai karena keterbukaan pikiran para pemimpinnya. Ilmu pengetahuan diposisikan sebagai hikmah universal yang dapat dipelajari dari siapa pun ("Al-Kalimatu al-hikmatu dhallatul mu\'min"), di mana keahlian dan kapasitas ilmiah dihargai secara profesional tanpa diskriminasi primordial.'
      },
      {
        id: 'kuis-2',
        nomor: 2,
        stimulusKasus: 'Kota Baghdad dirancang oleh Khalifah Abu Ja\'far Al-Mansur pada tahun 762 M dengan bentuk bundar sempurna (Round City), dikelilingi parit air dan dua lapis benteng tebal, dengan istana dan masjid agung tepat di titik sentralnya.',
        pertanyaan: 'Makna filosofis dan strategis apakah yang terkandung dari rancangan arsitektur kota Madinat as-Salam tersebut?',
        pilihan: [
          'Bentuk lingkaran dipilih hanya karena meniru desain istana kaisar Persia kuno tanpa pertimbangan fungsi',
          'Menunjukkan bahwa rakyat dilarang mendekati istana khalifah dalam kondisi apa pun',
          'Melambangkan keseimbangan antara ketaatan spiritual kepada Allah (masjid) dan kepemimpinan politik (istana) di pusat kehidupan rakyat yang terlindungi secara pertahanan',
          'Mempermudah khalifah menarik upeti pajak secara paksa dari para pedagang asing di gerbang kota'
        ],
        kunciJawaban: 2,
        pembahasan: 'Jawaban yang tepat adalah C. Penempatan Masjid Agung dan Istana Khalifah di pusat Kota Bundar mencerminkan filosofi tauhid: kepemimpinan politik harus berakar pada nilai-nilai ketuhanan dan keadilan ibadah, sekaligus memudahkan koordinasi pertahanan militer ke segala penjuru mata angin.'
      },
      {
        id: 'kuis-3',
        nomor: 3,
        stimulusKasus: 'Dalam bidang matematika dan sains, Al-Khawarizmi menulis kitab "Al-Jabr wa al-Muqabala" bukan sekadar teori abstrak, melainkan secara spesifik beliau tulis untuk mempermudah umat Islam dalam menghitung pembagian harta waris faraidh, ukuran tanah pertanian, dan transaksi perdagangan pasar.',
        pertanyaan: 'Nilai keteladanan apakah yang paling menonjol dari karya Al-Khawarizmi yang patut diterapkan oleh pelajar muslim masa kini?',
        pilihan: [
          'Mempelajari sains modern semata-mata demi mengejar popularitas dan materi duniawi',
          'Mengintegrasikan kepakaran sains dan teknologi dengan tujuan ibadah dan kemaslahatan nyata kehidupan masyarakat',
          'Menolak ilmu matematika yang berasal dari bangsa non-muslim',
          'Memisahkan secara mutlak antara ilmu agama dan ilmu pengetahuan umum (dikotomi keilmuan)'
        ],
        kunciJawaban: 1,
        pembahasan: 'Jawaban yang tepat adalah B. Al-Khawarizmi mencontohkan integritas ilmuwan muslim sejati: kepakaran matematika tingkat tingginya didedikasikan secara langsung untuk menyelesaikan persoalan riil umat (seperti hisab waris faraidh sesuai Al-Qur\'an), membuktikan bahwa sains dan iman saling melengkapi secara harmonis.'
      },
      {
        id: 'kuis-4',
        nomor: 4,
        stimulusKasus: 'Menjelang invasi pasukan Mongol tahun 1258 M, kota Baghdad dilanda pertikaian sektarian dan perpecahan internal istana. Khalifah Al-Musta\'shim Billah bahkan memotong anggaran pertahanan tentara karena mempercayai bisikan wazirnya yang menganggap Hulagu Khan tidak akan berani menyerang ibu kota kekhalifahan.',
        pertanyaan: 'Pelajaran historis (ibrah) apakah yang paling esensial bagi ketahanan suatu bangsa dari kejatuhan kota Baghdad tersebut?',
        pilihan: [
          'Suatu bangsa akan hancur jika mengandalkan kekuatan militer saja tanpa membangun perpustakaan',
          'Kehancuran peradaban diawali oleh kelalaian pemimpin, korupsi, serta perpecahan internal yang melumpuhkan kewaspadaan nasional terhadap ancaman nyata',
          'Kekaisaran Mongol mustahil dikalahkan oleh kekuatan militer manapun pada abad pertengahan',
          'Kota Baghdad runtuh semata-mata karena bencana alam yang tidak dapat dihindari'
        ],
        kunciJawaban: 1,
        pembahasan: 'Jawaban yang tepat adalah B. Faktor penentu runtuhnya Baghdad adalah kerapuhan dari dalam (internal decay). Perpecahan faksi, ketidakcakapan khalifah terakhir yang meremehkan musuh, serta kepemimpinan yang lalai telah membuka pintu bagi kehancuran total di tangan musuh luar.'
      },
      {
        id: 'kuis-5',
        nomor: 5,
        stimulusKasus: 'Seorang siswa SMP bernama Farhan gemar membaca biografi Ibnu Sina dan Al-Khawarizmi. Di kelas, Farhan aktif mengajak teman-temannya membuat kelompok belajar coding dan matematika, serta selalu memverifikasi berita sebelum membagikannya di grup kelas.',
        pertanyaan: 'Tindakan Farhan tersebut mencerminkan implementasi karakter pelajar yang sesuai dengan hikmah sejarah Daulah Abbasiyah, yaitu...',
        pilihan: [
          'Nostalgia masa lalu tanpa aksi nyata yang produktif',
          'Eksklusif dalam pergaulan dan hanya mau berteman dengan siswa pintar',
          'Meneladani etos literasi, riset, keterbukaan pikiran, dan kolaborasi positif di era digital',
          'Menuntut penghargaan uang atas setiap prestasi akademis yang diraihnya di sekolah'
        ],
        kunciJawaban: 2,
        pembahasan: 'Jawaban yang tepat adalah C. Farhan meneladani esensi nilai-nilai keemasan Abbasiyah: membangkitkan budaya literasi, kolaborasi positif memecahkan masalah melalui sains/teknologi masa kini (coding), dan menjaga nalar kritis dari hoaks (tabayyun).'
      }
    ]
  }
};
