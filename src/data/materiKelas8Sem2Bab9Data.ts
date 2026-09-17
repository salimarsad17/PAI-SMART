// Data materi buku PAI & Budi Pekerti SMP Kelas VIII Semester 2 Bab 9:
// "Menerapkan Ketentuan Haji dan Umrah: Meneladani Ketaatan dan Mempererat Ukhuwah Islamiyah Dunia"

export interface DalilAyatHaji {
  surah: string;
  ayat: string;
  arab: string;
  latin: string;
  arti: string;
  keterangan: string;
}

export interface HaditsHajiItem {
  perawi: string;
  nomor: string;
  arab: string;
  latin: string;
  arti: string;
  syarah: string;
}

export interface RukunHajiItem {
  urutan: number;
  nama: string;
  namaArab: string;
  deskripsi: string;
  syaratSah: string[];
  perbedaanDenganUmrah: string;
  konsekuensiJikaTertinggal: string;
  hikmah: string;
}

export interface WajibHajiItem {
  urutan: number;
  nama: string;
  namaArab: string;
  penjelasan: string;
  tempatDanWaktu: string;
  konsekuensiJikaTertinggal: string;
}

export interface LaranganIhramItem {
  kategori: 'Pria' | 'Wanita' | 'Umum (Pria & Wanita)';
  larangan: string;
  penjelasan: string;
  konsekuensiDam: string;
}

export interface MacamDamItem {
  jenis: string;
  kategori: string;
  sebabTerkena: string[];
  pilihanDenda: string[];
}

export interface CaraPelaksanaanHajiItem {
  nama: string;
  namaArab: string;
  urutanPelaksanaan: string;
  kelebihan: string;
  tantangan: string;
  kewajibanDam: string;
  rekomendasi: string;
}

export interface TahapanManasikItem {
  hariTanggal: string;
  judulTahap: string;
  lokasi: string;
  amalanPokok: string[];
  doaDanDzikir: string;
  tipsPraktis: string;
}

export interface MiqatMakaniItem {
  namaMiqat: string;
  lokasiModern: string;
  peruntukanJamaah: string;
  jarakKeMakkah: string;
}

export interface HikmahHajiItem {
  dimensi: string;
  judul: string;
  uraian: string;
  penerapanPelajar: string;
}

export interface StudiKasusHajiItem {
  id: string;
  judul: string;
  skenario: string;
  pertanyaanPemantik: string[];
  analisisSyariat: string;
  solusiDanKeteladanan: string;
}

export interface SoalHotsHajiItem {
  id: string;
  stimulus: string;
  pertanyaan: string;
  pilihan: string[];
  kunciJawaban: number;
  pembahasanLengkap: string;
  kompetensiKognitif: string;
}

export interface MateriKelas8Sem2Bab9 {
  babInfo: {
    grade: string;
    semester: string;
    chapterNumber: number;
    title: string;
    cpElement: string;
    deskripsiSingkat: string;
    pilarUtama: string[];
  };
  pengertianHajiUmrah: {
    pengertianBahasaIstilah: {
      haji: {
        bahasa: string;
        istilah: string;
        akarKata: string;
        hukumSyariat: string;
      };
      umrah: {
        bahasa: string;
        istilah: string;
        akarKata: string;
        hukumSyariat: string;
      };
    };
    tabelPerbedaanHajiUmrah: Array<{
      indikator: string;
      ibadahHaji: string;
      ibadahUmrah: string;
    }>;
    dalilAlQuran: DalilAyatHaji[];
    haditsShahih: HaditsHajiItem[];
  };
  ketentuanSyaratRukunWajib: {
    syaratWajibHaji: Array<{
      syarat: string;
      penjelasan: string;
      kriteriaIstithaah: string[];
    }>;
    rukunHaji: RukunHajiItem[];
    rukunUmrah: Array<{
      urutan: number;
      nama: string;
      keterangan: string;
    }>;
    wajibHaji: WajibHajiItem[];
    laranganIhram: LaranganIhramItem[];
    macamDamHaji: MacamDamItem[];
  };
  tataCaraPelaksanaanHaji: {
    pengantar: string;
    tigaMetode: CaraPelaksanaanHajiItem[];
  };
  manasikHajiPraktis: {
    lafazTalbiyah: {
      arab: string;
      latin: string;
      arti: string;
      maknaFilosofis: string;
    };
    miqatMakaniList: MiqatMakaniItem[];
    alurKronologis: TahapanManasikItem[];
    doaDoaManasikPenting: Array<{
      namaDoa: string;
      waktuPelafalan: string;
      arab: string;
      latin: string;
      arti: string;
    }>;
  };
  hikmahHajiUmrah: {
    pengantar: string;
    daftarHikmah: HikmahHajiItem[];
  };
  studiKasusKontekstual: StudiKasusHajiItem[];
  lembarMuhasabah: Array<{
    id: number;
    indikator: string;
    deskripsiSikap: string;
    aspekKarakter: string;
  }>;
  soalEvaluasiHots: SoalHotsHajiItem[];
}

export const MATERI_KELAS_8_SEM_2_BAB_9: MateriKelas8Sem2Bab9 = {
  babInfo: {
    grade: 'Kelas VIII',
    semester: 'Semester 2',
    chapterNumber: 9,
    title: 'Menerapkan Ketentuan Haji dan Umrah: Meneladani Ketaatan dan Mempererat Ukhuwah Islamiyah Dunia',
    cpElement: 'Fikih',
    deskripsiSingkat:
      'Panduan terlengkap Fikih Ibadah Haji dan Umrah SMP Kelas VIII Semester 2 sesuai Kurikulum Merdeka. Membahas secara komprehensif mulai dari pengertian bahasa & istilah syariat, dalil Al-Qur\'an dan Hadis shahih, syarat istitha\'ah, 6 rukun haji vs 5 rukun umrah, 6 wajib haji, klasifikasi larangan ihram beserta dam (denda), 3 tata cara pelaksanaan (Tamattu\', Ifrad, Qiran), simulasi praktis manasik haji alur kronologis 8-13 Dzulhijjah disertai lantunan teks talbiyah, 5 dimensi hikmah luhur ibadah ke Baitullah, analisis studi kasus kontekstual masa kini, lembar refleksi diri 8 dimensi, serta 5 butir soal evaluasi HOTS.',
    pilarUtama: [
      '1. Pengertian Haji dan Umrah (Bahasa, Istilah, Hukum Fardhu, & Dalil Naqli Al-Qur\'an/Hadis)',
      '2. Ketentuan Syarat, Rukun, Wajib, Larangan Ihram, dan Macam-Macam Dam (Denda)',
      '3. Tata Cara Pelaksanaan Haji dan Umrah (Haji Tamattu\', Haji Ifrad, dan Haji Qiran)',
      '4. Panduan Manasik Haji Lengkap (Lafaz Talbiyah, Peta Miqat, Alur Kronologis 8-13 Dzulhijjah, & Doa-Doa)',
      '5. Hikmah Luhur Ibadah Haji dan Umrah (Spiritual, Sosial-Ukhuwah, Akhlak Karakter, & Peradaban)',
      '6. Studi Kasus Kontekstual & Lembar Muhasabah Refleksi Diri 8 Indikator',
      '7. Kuis Evaluasi Penalaran HOTS Terintegrasi'
    ]
  },

  pengertianHajiUmrah: {
    pengertianBahasaIstilah: {
      haji: {
        bahasa: 'Secara etimologi (bahasa), kata haji berasal dari bahasa Arab al-qashdu (الْقَصْدُ) yang berarti menyengaja, berniat sungguh-sungguh, atau menuju ke tempat yang diagungkan dan dimuliakan.',
        istilah: 'Secara terminologi (istilah syariat Islam), haji adalah menyengaja berkunjung ke Baitullah (Ka\'bah di Makkah Al-Mukarramah) dan tempat-tempat tertentu di sekitarnya (Arafah, Muzdalifah, dan Mina) untuk melaksanakan rangkaian amalan ibadah tertentu (wukuf, thawaf, sa\'i, tahallul) pada waktu yang telah ditentukan (bulan Dzulhijjah) dengan syarat dan rukun tertentu demi mengharapkan keridhaan Allah Swt.',
        akarKata: 'Hajja - Yahujju - Hajjan wa Hijjan (حَجَّ - يَحُجُّ - حَجًّا وَحِجًّا)',
        hukumSyariat: 'Fardhu \'Ain (wajib mutlak) sekali seumur hidup bagi setiap muslim dan muslimah yang telah mukallaf serta memenuhi kriteria kemampuan (istitha\'ah). Ibadah haji merupakan Rukun Islam yang kelima yang disyariatkan pada tahun ke-9 Hijriyah.'
      },
      umrah: {
        bahasa: 'Secara etimologi (bahasa), kata umrah berasal dari kata al-i\'timar (الْاِعْتِمَارُ) atau az-ziyarah (الزِّيَارَةُ) yang bermakna berkunjung, berziarah, atau mendatangi suatu tempat yang makmur.',
        istilah: 'Secara syariat Islam, umrah (sering disebut sebagai "haji kecil") adalah berziarah mengunjungi Baitullah di Makkah Al-Mukarramah untuk beribadah kepada Allah Swt. dengan berihram dari miqat, berthawaf mengelilingi Ka\'bah 7 putaran, bersa\'i antara bukit Shafa dan Marwah 7 kali, serta bertahallul memotong rambut, tanpa wukuf di Arafah.',
        akarKata: '\'Amara - Ya\'muru - \'Umratan (عَمَرَ - يَعْمُرُ - عُمْرَةً)',
        hukumSyariat: 'Fardhu \'Ain sekali seumur hidup menurut pendapat terkuat Mazhab Syafi\'i dan Hanbali (berdasarkan Q.S. Al-Baqarah: 196), atau Sunnah Mu\'akkadah menurut Mazhab Hanafi dan Maliki. Umrah dapat dikerjakan sewaktu-waktu sepanjang tahun.'
      }
    },

    tabelPerbedaanHajiUmrah: [
      {
        indikator: 'Waktu Pelaksanaan',
        ibadahHaji: 'Hanya dapat dikerjakan pada bulan-bulan haji (Syawwal, Dzulqa\'dah, dan puncaknya 8–13 Dzulhijjah). Tidak bisa dilakukan di luar waktu tersebut.',
        ibadahUmrah: 'Dapat dilaksanakan kapan saja sepanjang tahun tanpa batasan waktu (fleksibel setiap bulan, paling utama di bulan Ramadhan).'
      },
      {
        indikator: 'Wukuf di Padang Arafah',
        ibadahHaji: 'WUKUF ADALAH RUKUN UTAMA DAN PUNCAK HAJI. Sabda Nabi Saw.: "Al-Hajju \'Arafah" (Haji adalah wukuf di Arafah pada 9 Dzulhijjah). Tanpa wukuf, haji tidak sah.',
        ibadahUmrah: 'TIDAK ADA WUKUF di Padang Arafah sama sekali. Ibadah umrah hanya berpusat di Masjidil Haram (Ka\'bah dan Mas\'a).'
      },
      {
        indikator: 'Kewajiban Mabit & Jumrah',
        ibadahHaji: 'Wajib mabit (bermalam) di Muzdalifah, mabit di tenda Mina, serta melontar Jumrah Aqabah, Ula, dan Wustha selama hari Tasyrik.',
        ibadahUmrah: 'TIDAK ADA mabit di Muzdalifah, TIDAK ADA mabit di Mina, dan TIDAK ADA kegiatan melontar jumrah.'
      },
      {
        indikator: 'Durasi Rangkaian Ibadah',
        ibadahHaji: 'Membutuhkan waktu minimal 4 sampai 6 hari puncak (8–13 Dzulhijjah) ditambah persiapan fisik, logistik, dan akomodasi jangka panjang.',
        ibadahUmrah: 'Dapat diselesaikan dalam waktu singkat (sekitar 2 hingga 4 jam) untuk menuntaskan Ihram, Thawaf, Sa\'i, dan Tahallul.'
      },
      {
        indikator: 'Kedudukan Rukun Islam',
        ibadahHaji: 'Merupakan Rukun Islam yang ke-5 yang menjadi fondasi pilar agama Islam bagi yang berkemampuan.',
        ibadahUmrah: 'Ibadah tathawwu\' / pelengkap yang sangat dianjurkan dan bernilai pahala penghapus dosa di antara dua umrah.'
      }
    ],

    dalilAlQuran: [
      {
        surah: "Q.S. Ali 'Imran [3]",
        ayat: '97',
        arab: 'فِيْهِ اٰيٰتٌۢ بَيِّنٰتٌ مَّقَامُ اِبْرٰهِيْمَ ەۚ وَمَنْ دَخَلَهٗ كَانَ اٰمِنًا ۗ وَلِلّٰهِ عَلَى النَّاسِ حِجُّ الْبَيْتِ مَنِ اسْتَطَاعَ اِلَيْهِ سَبِيْلًا ۗ وَمَنْ كَفَرَ فَاِنَّ اللّٰهَ غَنِيٌّ عَنِ الْعٰلَمِيْنَ',
        latin: "Fīhi āyātum bayyinātum maqāmu Ibrāhīm, wa man dakhalahū kāna āminā, wa lillāhi 'alan-nāsi hijjul-baiti manis-taṭā'a ilaihi sabīlā, wa man kafara fa innallāha ganiyyun 'anil-'ālamīn.",
        arti: 'Di sana terdapat tanda-tanda yang jelas, (di antaranya) maqam Ibrahim. Siapa yang memasukinya, amanlah dia. Dan (di antara) kewajiban manusia terhadap Allah adalah melaksanakan ibadah haji ke Baitullah, yaitu bagi orang-orang yang mampu mengadakan perjalanan ke sana. Siapa yang mengingkari (kewajiban haji), maka sesungguhnya Allah Mahakaya (tidak memerlukan sesuatu pun) dari seluruh alam.',
        keterangan: 'Ayat ini merupakan dalil naqli qath\'i (pasti) yang mewajibkan ibadah haji sekali seumur hidup bagi mukmin yang memiliki istitha\'ah (kemampuan bekal, fisik, transportasi, dan keamanan rute).'
      },
      {
        surah: 'Q.S. Al-Baqarah [2]',
        ayat: '196',
        arab: 'وَاَتِمُّوا الْحَجَّ وَالْعُمْرَةَ لِلّٰهِ ۗ فَاِنْ اُحْصِرْتُمْ فَمَا اسْتَيْسَرَ مِنَ الْهَدْيِ ۚ وَلَا تَحْلِقُوْا رُءُوْسَكُمْ حَتّٰى يَبْلُغَ الْهَدْيُ مَحِلَّهٗ ۗ',
        latin: "Wa atimmul-hajja wal-'umrata lillāh, fa in uhṣirtum famastaisara minal-hadyi, wa lā taḥliqū ru'ūsakum ḥattā yabluġal-hadyu maḥillah...",
        arti: 'Dan sempurnakanlah ibadah haji dan umrah karena Allah. Jika kamu terkepung (oleh musuh atau sakit sehingga terhalang), maka sembelihlah hadyu yang mudah didapat, dan jangan kamu mencukur kepalamu sebelum hadyu sampai di tempat penyembelihannya...',
        keterangan: 'Perintah tegas dari Allah Swt. bahwa ibadah haji dan umrah wajib dikerjakan dengan sempurna, memenuhi syarat-rukunnya secara ikhlas murni karena Allah Swt. tanpa riya atau pamrih status sosial.'
      },
      {
        surah: 'Q.S. Al-Hajj [22]',
        ayat: '27',
        arab: 'وَاَذِّنْ فِى النَّاسِ بِالْحَجِّ يَأْتُوْكَ رِجَالًا وَّعَلٰى كُلِّ ضَامِرٍ يَّأْتِيْنَ مِنْ كُلِّ فَجٍّ عَمِيْقٍ ۙ',
        latin: "Wa ażżin fin-nāsi bil-ḥajji ya'tūka rijālaw wa 'alā kulli ḍāmiriy ya'tīna min kulli fajjin 'amīq.",
        arti: 'Dan serulah manusia untuk mengerjakan haji, niscaya mereka akan datang kepadamu dengan berjalan kaki, dan mengendarai unta kurus yang datang dari segenap penjuru yang jauh.',
        keterangan: 'Perintah Allah Swt. kepada Nabi Ibrahim a.s. pasca selesai membangun Ka\'bah untuk mengumandangkan seruan haji kepada segenap umat manusia hingga akhir zaman.'
      }
    ],

    haditsShahih: [
      {
        perawi: 'H.R. Al-Bukhari & Muslim',
        nomor: 'Bukhari No. 1773 & Muslim No. 1349 (dari Abu Hurairah r.a.)',
        arab: 'الْعُمْرَةُ إِلَى الْعُمْرَةِ كَفَّارَةٌ لِمَا بَيْنَهُمَا، وَالْحَجُّ الْمَبْرُورُ لَيْسَ لَهُ جَزَاءٌ إِلَّا الْجَنَّةُ',
        latin: "Al-'umratu ilal-'umrati kaffāratul limā bainahumā, wal-ḥajjul-mabrūru laisa lahū jazā'un illal-jannah.",
        arti: 'Antara satu umrah ke umrah berikutnya adalah penghapus dosa di antara keduanya, dan haji yang mabrur tidak ada balasan baginya selain surga.',
        syarah: 'Haji mabrur adalah haji yang dilaksanakan dengan bekal halal, ikhlas tanpa riya, terhindar dari perbuatan rafats, fusuq, dan jidal, serta melahirkan perubahan akhlak mulia dan kedermawanan setelah pulang ke tanah air.'
      },
      {
        perawi: 'H.R. Muslim',
        nomor: 'Muslim No. 1218 (dari Amr bin al-Ash r.a.)',
        arab: 'أَمَا عَلِمْتَ أَنَّ الْإِسْلَامَ يَهْدِمُ مَا كَانَ قَبْلَهُ، وَأَنَّ الْهِجْرَةَ تَهْدِمُ مَا كَانَ قَبْلَهَا، وَأَنَّ الْحَجَّ يَهْدِمُ مَا كَانَ قَبْلَهُ',
        latin: "Amā 'alimta annal-islāma yahdimu mā kāna qablahu, wa annal-hijrata tahdimu mā kāna qablahā, wa annal-ḥajja yahdimu mā kāna qablahu.",
        arti: 'Tidakkah engkau tahu bahwa Islam itu menggugurkan dosa-dosa sebelumnya, hijrah menggugurkan dosa-dosa sebelumnya, dan ibadah haji itu menggugurkan dosa-dosa sebelumnya?',
        syarah: 'Ibadah haji memiliki kekuatan pensucian spiritual yang sangat dahsyat, sehingga orang yang kembali dari haji mabrur diampuni dosa-dosa masa lalunya laksana bayi yang baru dilahirkan dari rahim ibunya.'
      },
      {
        perawi: 'H.R. Ibnu Majah & An-Nasa\'i',
        nomor: 'Ibnu Majah No. 2901 (dari Aisyah r.a.)',
        arab: 'قُلْتُ يَا رَسُولَ اللَّهِ نَرَى الْجِهَادَ أَفْضَلَ الْعَمَلِ أَفَلَا نُجَاهِدُ؟ قَالَ: لَكِنَّ أَفْضَلَ الْجِهَادِ حَجٌّ مَبْرُورٌ',
        latin: "Qultu yā Rasūlallāhi naral-jihāda afḍalal-'amali afalā nujāhid? Qāla: Lākinna afḍalal-jihādi ḥajjum-mabrūr.",
        arti: 'Aku (Aisyah) bertanya: Ya Rasulullah, kami melihat jihad adalah amalan yang paling afdhal, apakah kami tidak ikut berjihad? Beliau menjawab: Tidak, bagi kalian jihad yang paling utama adalah haji mabrur.',
        syarah: 'Bagi kaum wanita, anak-anak, dan lansia, perjuangan menempuh perjalanan haji yang melelahkan fisik dan mental di jalan Allah bernilai setara dengan jihad fisabilillah.'
      }
    ]
  },

  ketentuanSyaratRukunWajib: {
    syaratWajibHaji: [
      {
        syarat: '1. Islam',
        penjelasan: 'Ibadah haji dan umrah hanya sah dan wajib bagi orang muslim. Non-muslim tidak sah hajinya dan diharamkan memasuki kawasan Tanah Haram Makkah dan Madinah.',
        kriteriaIstithaah: ['Syarat mutlak sahnya seluruh amal ibadah dalam syariat Islam']
      },
      {
        syarat: '2. Baligh (Dewasa)',
        penjelasan: 'Telah mencapai usia kedewasaan secara biologis (ihtilam bagi laki-laki atau haid bagi perempuan) atau telah berusia 15 tahun Hijriyah. Anak kecil yang diajak haji sah ibadahnya berpahala sunnah bagi orang tuanya, namun saat dewasa ia tetap wajib menunaikan haji fardhu.',
        kriteriaIstithaah: ['Telah dibebani hukum syariat (mukallaf)', 'Mampu membedakan yang baik dan buruk']
      },
      {
        syarat: '3. Berakal Sehat',
        penjelasan: 'Memiliki akal sehat yang waras. Orang gila, pikun berat, atau hilang ingatan tidak terkena kewajiban haji dan hajinya tidak sah karena tidak memiliki niat yang sah.',
        kriteriaIstithaah: ['Memahami hakikat rukun, wajib, dan larangan ibadah haji']
      },
      {
        syarat: '4. Merdeka (Bukan Budak)',
        penjelasan: 'Pada era perbudakan masa lalu, seorang budak tidak wajib haji karena terikat hak tuannya. Dalam konteks modern, seluruh umat Islam memiliki status merdeka.',
        kriteriaIstithaah: ['Memiliki kedaulatan atas dirinya sendiri']
      },
      {
        syarat: '5. Mampu (Al-Istitha\'ah)',
        penjelasan: 'Syarat khusus yang ditegaskan dalam Q.S. Ali \'Imran: 97. Mampu terbagi menjadi kemampuan fisik (badaniyah), finansial (maliyah), keamanan, serta mahram bagi perempuan.',
        kriteriaIstithaah: [
          'Mampu Finansial: Memiliki ongkos perjalanan (Bipih), biaya hidup selama di tanah suci, dan nafkah yang mencukupi bagi keluarga yang ditinggalkan di tanah air hingga ia pulang.',
          'Mampu Fisik / Kesehatan: Kuat secara jasmani untuk menjalani thawaf, sa\'i, wukuf, dan mabit. Jika sakit permanen atau renta (ma\'dhub), boleh dibadalkan (dihajikan orang lain).',
          'Keamanan Perjalanan: Jalur darat, laut, maupun udara aman dari bahaya perang, perampokan, wabah penyakit menular yang mematikan, atau blokade politik.',
          'Ketersediaan Transportasi & Kuota: Memiliki sarana kendaraan dan kuota resmi legal (tasreh haji) dari pemerintah dan Kerajaan Arab Saudi.',
          'Adanya Mahram bagi Wanita: Menurut mayoritas ulama, wanita wajib didampingi suami, mahram, atau kelompok wanita tepercaya (ar-rufqah al-ma\'munah).'
        ]
      }
    ],

    rukunHaji: [
      {
        urutan: 1,
        nama: 'Ihram disertai Niat',
        namaArab: 'الْإِحْرَامُ مَعَ النِّيَّةِ',
        deskripsi: 'Berniat masuk ke dalam kehormatan ibadah haji di hati dan dilafalkan dengan lisan, disertai memakai pakaian ihram (dua lembar kain putih tanpa jahitan bagi pria) sebelum melewati batas Miqat Makani.',
        syaratSah: ['Dilakukan di dalam batas Miqat Makani atau sebelumnya', 'Disertai niat tulus karena Allah Swt.'],
        perbedaanDenganUmrah: 'Niat ihram haji: "Labbaika Allahumma Hajjan" (نَوَيْتُ الْحَجَّ وَأَحْرَمْتُ بِهِ لِلّٰهِ تَعَالَى)',
        konsekuensiJikaTertinggal: 'TIDAK SAH HAJINYA. Jika tidak berniat ihram, seluruh amalan berikutnya tidak berstatus ibadah haji.',
        hikmah: 'Menanggalkan simbol kesombongan duniawi, pakaian ihram putih menyerupai kain kafan yang mengingatkan pada hari kematian dan persaudaraan tanpa sekat kasta.'
      },
      {
        urutan: 2,
        nama: 'Wukuf di Padang Arafah',
        namaArab: 'الْوُقُوْفُ بِعَرَفَةَ',
        deskripsi: 'Hadir dan berdiam diri di bumi Arafah pada tanggal 9 Dzulhijjah, mulai dari tergelincirnya matahari (waktu zawal/Zuhur) hingga terbit fajar tanggal 10 Dzulhijjah (Hari Idul Adha), walau hanya sejenak.',
        syaratSah: ['Berada di dalam batas wilayah Arafah', 'Dilakukan pada rentang waktu sah wukuf'],
        perbedaanDenganUmrah: 'WUKUF HANYA ADA DALAM HAJI. Umrah sama sekali TIDAK MEMILIKI rukun wukuf.',
        konsekuensiJikaTertinggal: 'HAJI BATAL DAN TIDAK BISA DIGANTI DENGAN DAM. Jamaah yang tertinggal wukuf wajib bertahallul dengan amalan umrah dan wajib mengqadha (mengulang) hajinya di tahun berikutnya.',
        hikmah: 'Wukuf adalah puncak haji (Al-Hajju Arafah). Menjadi miniatur Padang Mahsyar ketika seluruh manusia dibangkitkan menghadap Allah Swt. dalam keadaan cemas, penuh harap dan doa.'
      },
      {
        urutan: 3,
        nama: 'Thawaf Ifadhah',
        namaArab: 'طَوَافُ الْإِفَاضَةِ / طَوَافُ الرُّكْنِ',
        deskripsi: 'Mengelilingi Ka\'bah sebanyak 7 kali putaran berlawanan arah jarum jam (posisi Ka\'bah selalu di sebelah kiri badan), dimulai dan diakhiri sejajar dengan garis Hajar Aswad, dilakukan di dalam Masjidil Haram setelah wukuf di Arafah.',
        syaratSah: [
          'Suci dari hadats kecil dan besar (berwudhu)',
          'Menutup aurat sempurna',
          'Ka\'bah berada di sebelah kiri badan',
          'Di luar bangunan Ka\'bah dan Hijir Ismail',
          'Genap 7 putaran berturut-turut'
        ],
        perbedaanDenganUmrah: 'Dalam umrah namanya Thawaf Umrah (rukun umrah). Pelaksanaannya sama 7 putaran.',
        konsekuensiJikaTertinggal: 'TIDAK BISA DIGANTI DAM. Selama belum thawaf ifadhah, jamaah belum bertahallul tsani (belum halal berhubungan suami-istri) seumur hidup sampai ia menuntaskannya.',
        hikmah: 'Menjadikan Allah Swt. sebagai pusat orbit dan poros seluruh perputaran kehidupan, laksana miliaran planet dan galaksi yang bertasbih mengitari porosnya.'
      },
      {
        urutan: 4,
        nama: 'Sa\'i antara Shafa dan Marwah',
        namaArab: 'السَّعْيُ بَيْنَ الصَّفَا وَالْمَرْوَةِ',
        deskripsi: 'Berjalan dan berlari-lari kecil sebanyak 7 putaran bolak-balik antara bukit Shafa dan bukit Marwah, dimulai dari bukit Shafa dan berakhir di bukit Marwah (lintasan Shafa ke Marwah dihitung putaran 1, Marwah ke Shafa putaran 2, dst. hingga putaran 7 di Marwah).',
        syaratSah: [
          'Didahului oleh thawaf yang sah',
          'Dimulai dari Shafa dan diakhiri di Marwah',
          'Menempuh seluruh lintasan mas\'a genap 7 kali putaran',
          'Dilakukan di tempat sa\'i (al-mas\'a)'
        ],
        perbedaanDenganUmrah: 'Sa\'i ada dalam haji maupun umrah dengan tata cara yang sama persis.',
        konsekuensiJikaTertinggal: 'RUKUN TIDAK BISA DIGANTI DAM. Jika tidak sa\'i, haji atau umrah belum sah dan belum tuntas.',
        hikmah: 'Napak tilas perjuangan heroik dan ketabahan luar biasa ibunda Siti Hajar saat mencari air untuk putranya Nabi Ismail a.s. yang memancarkan mata air Zamzam yang abadi.'
      },
      {
        urutan: 5,
        nama: 'Tahallul (Mencukur/Memotong Rambut)',
        namaArab: 'التَّحَلُّلُ (الْحَلْقُ أَوِ التَّقْصِيْرُ)',
        deskripsi: 'Melepaskan diri dari keadaan ihram dengan cara mencukur habis (al-halq) atau memendekkan/memotong (at-taqshir) rambut kepala minimal 3 helai rambut. Bagi wanita disunnahkan memotong ujung rambut sepanjang satu ruas jari.',
        syaratSah: ['Memotong minimal 3 helai rambut kepala', 'Bagi pria lebih utama mencukur habis (gundul)'],
        perbedaanDenganUmrah: 'Dalam umrah, tahallul menandai selesainya seluruh rangkaian ibadah umrah secara tuntas.',
        konsekuensiJikaTertinggal: 'Tanpa tahallul, seseorang tetap berada dalam status ihram dan terkena larangan-larangan ihram.',
        hikmah: 'Simbol pembersihan diri dari dosa dan kotoran maksiat masa lalu, merendahkan kepala sebagai lambang kepatuhan total dan kelahiran kembali yang suci.'
      },
      {
        urutan: 6,
        nama: 'Tertib',
        namaArab: 'التَّرْتِيْبُ',
        deskripsi: 'Melaksanakan rukun-rukun haji secara berurutan sesuai syariat: mendahulukan Ihram sebelum seluruh amalan, Wukuf sebelum Thawaf Ifadhah, Thawaf sebelum Sa\'i (jika sa\'i belum dikerjakan saat Thawaf Qudum), dan Tahallul pada waktunya.',
        syaratSah: ['Mengerjakan rukun sesuai urutan yang diajarkan Rasulullah Saw.'],
        perbedaanDenganUmrah: 'Dalam umrah, tertib mencakup urutan: Ihram -> Thawaf -> Sa\'i -> Tahallul.',
        konsekuensiJikaTertinggal: 'Amalan yang mendahului urutannya tidak dihitung sah hingga amalan sebelumnya dituntaskan.',
        hikmah: 'Mendidik keteraturan, kedisiplinan, ketaatan pada hukum syariat, dan manajemen hidup yang sistematis.'
      }
    ],

    rukunUmrah: [
      { urutan: 1, nama: 'Ihram disertai Niat Umrah', keterangan: 'Berniat umrah dari miqat: "Labbaika Allahumma \'Umratan"' },
      { urutan: 2, nama: 'Thawaf Umrah', keterangan: 'Mengelilingi Ka\'bah 7 putaran berlawanan jarum jam' },
      { urutan: 3, nama: 'Sa\'i Umrah', keterangan: 'Berlari-lari kecil antara Shafa dan Marwah 7 kali putaran' },
      { urutan: 4, nama: 'Tahallul', keterangan: 'Memotong/mencukur rambut kepala minimal 3 helai' },
      { urutan: 5, nama: 'Tertib', keterangan: 'Melaksanakan urutan 1 sampai 4 secara berurutan tanpa melompat' }
    ],

    wajibHaji: [
      {
        urutan: 1,
        nama: 'Ihram dari Miqat Makani',
        namaArab: 'الْإِحْرَامُ مِنَ الْمِيْقَاتِ',
        penjelasan: 'Memulai niat ihram dan mengenakan pakaian ihram dari tempat batas geografis yang telah ditetapkan Rasulullah Saw. sebelum melintas menuju Makkah.',
        tempatDanWaktu: 'Batas miqat makani (Dzulhulaifah, Juhfah, Qarnul Manazil, Yalamlam, Dzatu \'Irq) sebelum memasuki tanah haram.',
        konsekuensiJikaTertinggal: 'Haji tetap sah, tetapi berdosa dan wajib membayar Dam (menyembelih seekor kambing di Makkah).'
      },
      {
        urutan: 2,
        nama: 'Mabit di Muzdalifah',
        namaArab: 'الْمَبِيْتُ بِمُزْدَلِفَةَ',
        penjelasan: 'Bermalam atau berdiam diri di bumi Muzdalifah pada malam 10 Dzulhijjah (setelah wukuf di Arafah) minimal lewat tengah malam (nisfullail) hingga subuh, serta mengumpulkan batu kerikil untuk melontar jumrah.',
        tempatDanWaktu: 'Muzdalifah (antara Arafah dan Mina) pada malam Idul Adha (malam 10 Dzulhijjah).',
        konsekuensiJikaTertinggal: 'Haji tetap sah, tetapi wajib membayar dam 1 ekor kambing, kecuali bagi mereka yang memiliki uzur syar\'i (orang sakit, petugas medis, lansia). Di era modern, rukhsah murur (melintas di bus) diperbolehkan bagi jamaah rentan.'
      },
      {
        urutan: 3,
        nama: 'Mabit di Mina pada Hari-Hari Tasyrik',
        namaArab: 'الْمَبِيْتُ بِمِنَى أَيَّامَ التَّشْرِيْقِ',
        penjelasan: 'Bermalam di kawasan tenda Mina pada malam 11, 12 Dzulhijjah (bagi Nafar Awwal) atau ditambah malam 13 Dzulhijjah (bagi Nafar Tsani). Minimal berdiam lebih dari separuh malam.',
        tempatDanWaktu: 'Mina, malam-malam hari Tasyrik (11, 12, 13 Dzulhijjah).',
        konsekuensiJikaTertinggal: 'Haji tetap sah, tetapi wajib membayar dam jika tertinggal tanpa uzur syar\'i.'
      },
      {
        urutan: 4,
        nama: 'Melontar Jumrah Aqabah pada Hari Nahr',
        namaArab: 'رَمْيُ جَمْرَةِ الْعَقَبَةِ',
        penjelasan: 'Melontar tiang Jumrah Aqabah (Kubra) dengan 7 butir batu kerikil secara satu per satu sambil bertakbir pada tanggal 10 Dzulhijjah.',
        tempatDanWaktu: 'Jamarat Mina pada tanggal 10 Dzulhijjah (waktu dhuha hingga sebelum fajar 11 Dzulhijjah).',
        konsekuensiJikaTertinggal: 'Haji tetap sah, namun wajib mengqadha dan membayar dam.'
      },
      {
        urutan: 5,
        nama: 'Melontar Tiga Jumrah pada Hari-Hari Tasyrik',
        namaArab: 'رَمْيُ الْجِمَارِ الثَّلَاثِ (الصُّغْرَى، الْوُسْطَى، الْعَقَبَةِ)',
        penjelasan: 'Melontar 3 jumrah secara berurutan: Jumrah Ula (Shughra), Jumrah Wustha, dan Jumrah Aqabah (Kubra), masing-masing dengan 7 butir batu kerikil (total 21 butir per hari) setelah masuk waktu zawal (tergelincir matahari).',
        tempatDanWaktu: 'Jamarat Mina pada tanggal 11, 12 Dzulhijjah (Nafar Awwal) dan 13 Dzulhijjah (Nafar Tsani).',
        konsekuensiJikaTertinggal: 'Wajib membayar dam seekor kambing jika meninggalkan seluruh lemparan.'
      },
      {
        urutan: 6,
        nama: 'Menjauhi Larangan-Larangan Ihram',
        namaArab: 'اجْتِنَابُ مَحْظُوْرَاتِ الْإِحْرَامِ',
        penjelasan: 'Menjaga diri dari seluruh perbuatan yang diharamkan syariat selama dalam status berihram.',
        tempatDanWaktu: 'Sepanjang waktu berihram sejak niat hingga tahallul tuntas.',
        konsekuensiJikaTertinggal: 'Wajib membayar dam sesuai jenis pelanggaran larangan ihram yang dilakukan.'
      },
      {
        urutan: 7,
        nama: 'Thawaf Wada\' (Thawaf Perpisahan)',
        namaArab: 'طَوَافُ الْوَدَاعِ',
        penjelasan: 'Thawaf 7 putaran mengelilingi Ka\'bah yang dilakukan sebagai salam penghormatan dan perpisahan sesaat sebelum jamaah meninggalkan kota suci Makkah kembali ke negerinya.',
        tempatDanWaktu: 'Ka\'bah Masjidil Haram sebelum meninggalkan kota Makkah.',
        konsekuensiJikaTertinggal: 'Wajib bayar dam 1 kambing. Dikecualikan (gugur kewajiban dan tanpa dam) bagi wanita yang sedang haid atau nifas berdasarkan hadis Ibnu Abbas r.a.'
      }
    ],

    laranganIhram: [
      {
        kategori: 'Pria',
        larangan: 'Memakai pakaian berjahit atau bersambung yang membentuk lekuk tubuh',
        penjelasan: 'Pria dilarang memakai kemeja, celana, kaos, pakaian dalam berjahit, jas, mantel, jubah. Pria hanya boleh mengenakan 2 helai kain ihram (izar sebagai sarung dan rida\' sebagai selendang).',
        konsekuensiDam: 'Dam Takhyir & Taqdir (memilih: sembelih 1 kambing, ATAU puasa 3 hari, ATAU fidyah memberi makan 6 orang miskin masing-masing 1/2 sha\' makanan pokok).'
      },
      {
        kategori: 'Pria',
        larangan: 'Menutup kepala dengan sesuatu yang bertumpu menempel langsung',
        penjelasan: 'Pria dilarang memakai peci, topi, sorban, helm yang menempel di kepala. Namun berteduh di bawah payung, atap mobil, atau tenda diperbolehkan.',
        konsekuensiDam: 'Dam Takhyir & Taqdir (sembelih 1 kambing / puasa 3 hari / sedekah 6 fakir miskin).'
      },
      {
        kategori: 'Pria',
        larangan: 'Memakai sepatu atau alas kaki yang menutupi mata kaki dan jari kaki',
        penjelasan: 'Pria wajib memakai sandal jepit terbuka yang memperlihatkan mata kaki dan tumit.',
        konsekuensiDam: 'Dam Takhyir & Taqdir.'
      },
      {
        kategori: 'Wanita',
        larangan: 'Menutup wajah (memakai cadar/niqab) dan memakai sarung tangan',
        penjelasan: 'Wanita boleh memakai pakaian muslimah biasa yang menutup seluruh aurat berjahit dan longgar, namun wajah dan kedua telapak tangan wajib terbuka selama ihram.',
        konsekuensiDam: 'Dam Takhyir & Taqdir.'
      },
      {
        kategori: 'Umum (Pria & Wanita)',
        larangan: 'Memakai wewangian (parfum/minyak wangi) pada badan atau pakaian ihram',
        penjelasan: 'Dilarang memakai minyak wangi setelah niat ihram. Memakai wewangian di badan sebelum niat ihram disunnahkan.',
        konsekuensiDam: 'Dam Takhyir & Taqdir.'
      },
      {
        kategori: 'Umum (Pria & Wanita)',
        larangan: 'Memotong, mencabut, atau menggunting kuku tangan dan kaki',
        penjelasan: 'Dilarang memotong kuku tanpa uzur syar\'i (misal kuku pecah yang menyakitkan boleh dipotong seperlunya).',
        konsekuensiDam: 'Dam Takhyir & Taqdir (jika 3 kuku atau lebih maka dam 1 kambing / puasa 3 hari; jika 1-2 kuku bayar fidyah 1-2 mud makanan).'
      },
      {
        kategori: 'Umum (Pria & Wanita)',
        larangan: 'Mencukur, memotong, mencabut, atau membakar rambut dan bulu tubuh',
        penjelasan: 'Dilarang memotong rambut kepala, jenggot, kumis, bulu ketiak, atau bulu kemaluan sebelum waktu tahallul tiba.',
        konsekuensiDam: 'Dam Takhyir & Taqdir (sesuai Q.S. Al-Baqarah: 196).'
      },
      {
        kategori: 'Umum (Pria & Wanita)',
        larangan: 'Membunuh, memburu, menganiaya, atau membantu berburu hewan darat liar yang halal',
        penjelasan: 'Dilarang memburu kijang, kelinci liar, burung, dll. Hewan ternak jinak (ayam, sapi, kambing) atau hewan buas berbahaya (ular, kalajengking, anjing gila, tikus) boleh dibunuh jika mengancam.',
        konsekuensiDam: 'Dam Takhyir & Ta\'dil (mengganti dengan hewan ternak yang sebanding nilainya, atau senilai makanan untuk fakir miskin, atau berpuasa).'
      },
      {
        kategori: 'Umum (Pria & Wanita)',
        larangan: 'Menebang pohon, mencabut tanaman, atau merusak rumput hijau di Tanah Haram',
        penjelasan: 'Tanah Haram Makkah dan Madinah dilindungi kesucian ekologinya oleh Allah Swt. Dilarang merusak vegetasi hidup.',
        konsekuensiDam: 'Dam Takhyir & Ta\'dil (pohon besar diganti 1 ekor sapi, pohon kecil 1 ekor kambing).'
      },
      {
        kategori: 'Umum (Pria & Wanita)',
        larangan: 'Melangsungkan akad nikah, menikahkan (menjadi wali nikah), atau meminang',
        penjelasan: 'Sabda Nabi Saw.: "Orang yang sedang berihram tidak boleh menikah, tidak boleh menikahkan, dan tidak boleh meminang" (H.R. Muslim). Akad nikahnya tidak sah.',
        konsekuensiDam: 'Akad nikah BATAL secara hukum syariat, pelakunya berdosa dan wajib bertaubat (tidak ada dam binatang).'
      },
      {
        kategori: 'Umum (Pria & Wanita)',
        larangan: 'Melakukan rafats (ucapan/tindakan sensual), fusuq (kemaksiatan), dan jidal (bertengkar/berdebat)',
        penjelasan: 'Sesuai Q.S. Al-Baqarah: 197. Rafats merusak kesucian batin, fusuq mendatangkan murka Allah, dan jidal mengikis ukhuwah.',
        konsekuensiDam: 'Mengurangi pahala kemabruran haji, wajib istighfar dan taubat nasuha.'
      },
      {
        kategori: 'Umum (Pria & Wanita)',
        larangan: 'Bersetubuh (hubungan suami-istri / jimak)',
        penjelasan: 'Larangan paling berat. Jika dilakukan SEBELUM TAHALLUL AWWAL, maka IBADAH HAJINYA BATAL secara mutlak, namun tetap wajib melanjutkan sisa amalan hingga selesai, wajib membayar dam berat, dan wajib mengqadha haji tahun depan bersama pasangan.',
        konsekuensiDam: 'Dam Tertib & Ta\'dil terberat (menyembelih seekor unta; jika tidak mampu ganti sapi; jika tidak mampu 7 ekor kambing; jika tidak mampu memberi makan fakir miskin seharga unta; jika tidak mampu berpuasa 1 hari untuk setiap mud makanan seharga unta).'
      }
    ],

    macamDamHaji: [
      {
        jenis: 'Dam Tertib & Taqdir (Berurutan & Ditentukan Kadarnya)',
        kategori: 'Pelanggaran Wajib Haji & Melakukan Haji Tamattu\' / Qiran',
        sebabTerkena: [
          'Melaksanakan Haji Tamattu\' atau Haji Qiran (Dam Nusuk)',
          'Tidak berihram dari Miqat Makani',
          'Tidak mabit di Muzdalifah tanpa uzur',
          'Tidak mabit di Mina pada hari-hari Tasyrik',
          'Tidak melontar jumrah (Aqabah, Ula, Wustha)',
          'Tidak melakukan Thawaf Wada\' sebelum keluar Makkah'
        ],
        pilihanDenda: [
          'Tingkat 1: Menyembelih 1 ekor kambing yang memenuhi syarat qurban di Tanah Haram Makkah dan dagingnya dibagikan kepada fakir miskin Makkah.',
          'Tingkat 2 (Jika tidak mampu / tidak ada dana): Berpuasa selama 10 hari, yaitu 3 hari dilaksanakan saat di Tanah Suci (sebelum tanggal 9 Dzulhijjah atau hari Tasyrik) dan 7 hari dilaksanakan setelah kembali ke tanah air (Q.S. Al-Baqarah: 196).'
        ]
      },
      {
        jenis: 'Dam Tertib & Ta\'dil (Berurutan & Dihitung Nilai Setaranya)',
        kategori: 'Pelanggaran Paling Berat (Jimak Sebelum Tahallul Awwal / Terhalang Ihshar)',
        sebabTerkena: [
          'Melakukan hubungan suami-istri (jimak) sebelum Tahallul Awwal (hajinya batal)',
          'Terkepung musuh atau terhalang total di jalan (Muhshar) sehingga tidak bisa menyelesaikan haji'
        ],
        pilihanDenda: [
          'Tingkat 1: Menyembelih 1 ekor unta yang sehat di Tanah Haram.',
          'Tingkat 2: Jika tidak menemukan unta, diganti menyembelih 1 ekor sapi.',
          'Tingkat 3: Jika tidak mampu sapi, diganti menyembelih 7 ekor kambing.',
          'Tingkat 4: Jika tidak mampu, membeli makanan pokok senilai harga 1 ekor unta lalu dibagikan kepada kaum fakir miskin Makkah.',
          'Tingkat 5: Jika tidak mampu membeli makanan, berpuasa sebanyak bilangan mud makanan tersebut (1 hari puasa untuk setiap 1 mud / ±675 gram makanan seharga unta).'
        ]
      },
      {
        jenis: 'Dam Takhyir & Ta\'dil (Boleh Memilih & Dihitung Nilai Setaranya)',
        kategori: 'Pelanggaran Berburu Hewan & Menebang Tumbuhan Tanah Haram',
        sebabTerkena: [
          'Membunuh atau memburu hewan liar darat yang halal dimakan saat ihram',
          'Menebang pohon atau memotong rumput hijau di kawasan Tanah Haram'
        ],
        pilihanDenda: [
          'Pilihan 1: Menyembelih binatang ternak yang sebanding (mitsl) dengan hewan yang dibunuh (misal: burung merpati sebanding 1 kambing; kijang sebanding 1 sapi muda; unta sebanding unta liar).',
          'Pilihan 2: Membeli makanan pokok senilai harga hewan sembelihan tersebut lalu membagikannya kepada fakir miskin Makkah.',
          'Pilihan 3: Berpuasa sebanyak hitungan mud makanan pokok dari harga hewan tersebut (1 hari puasa untuk tiap 1 mud).'
        ]
      },
      {
        jenis: 'Dam Takhyir & Taqdir (Boleh Memilih di Antara yang Ditentukan)',
        kategori: 'Pelanggaran Larangan Ihram Fisik (Pakaian, Rambut, Kuku, Parfum)',
        sebabTerkena: [
          'Mencukur/memotong rambut kepala atau bulu tubuh sebelum tahallul',
          'Memotong kuku tangan atau kaki',
          'Memakai wewangian/parfum setelah berihram',
          'Bagi pria: memakai pakaian berjahit, sepatu menutupi mata kaki, atau penutup kepala',
          'Bagi wanita: memakai cadar/penutup wajah atau sarung tangan',
          'Bercumbu/bermesraan suami-istri yang tidak sampai jimak'
        ],
        pilihanDenda: [
          'Bebas memilih salah satu dari 3 opsi berikut (Fidyah Q.S. Al-Baqarah: 196):',
          'Opsi A: Menyembelih 1 ekor kambing di Tanah Haram.',
          'Opsi B: Berpuasa selama 3 hari (bisa di Tanah Suci atau setelah pulang).',
          'Opsi C: Bersedekah memberi makan kepada 6 orang fakir miskin di Tanah Haram, masing-masing memperoleh 1/2 sha\' (±1,5 kg) kurma/gandum.'
        ]
      }
    ]
  },

  tataCaraPelaksanaanHaji: {
    pengantar:
      'Dalam syariat Islam, terdapat 3 (tiga) tata cara atau model pelaksanaan ibadah haji yang sah dan diajarkan Rasulullah Saw. Jamaah haji memiliki kemerdekaan untuk memilih salah satu dari ketiga cara ini sesuai kemampuan fisik, kondisi rombongan, dan kenyamanan ibadah.',
    tigaMetode: [
      {
        nama: '1. Haji Tamattu\' (Bersenang-senang / Mendahulukan Umrah)',
        namaArab: 'حَجُّ التَّمَتُّعِ',
        urutanPelaksanaan:
          'Mendahulukan ibadah Umrah terlebih dahulu pada bulan-bulan haji (Syawwal, Dzulqa\'dah, atau awal Dzulhijjah). Jamaah berniat ihram umrah dari miqat, masuk Makkah menuntaskan Thawaf Umrah, Sa\'i Umrah, lalu Tahallul (memotong rambut). Setelah tahallul umrah, jamaah terbebas dari seluruh larangan ihram (boleh berpakaian biasa, berparfum, berhubungan suami-istri) sambil menunggu tanggal 8 Dzulhijjah. Pada hari Tarwiyah (8 Dzulhijjah), jamaah kembali berniat ihram haji dari hotel/pemondokan di Makkah untuk melaksanakan rangkaian haji hingga selesai.',
        kelebihan:
          'Sangat praktis, fleksibel, dan meringankan fisik jamaah karena tidak perlu terikat larangan ihram dalam waktu yang lama. Model ini paling banyak dipilih oleh lebih dari 95% jamaah haji Indonesia.',
        tantangan:
          'Wajib membayar Dam Nusuk berupa menyembelih 1 ekor kambing (atau berpuasa 10 hari jika tidak mampu).',
        kewajibanDam: 'Wajib membayar Dam Tertib & Taqdir (1 ekor kambing atau puasa 10 hari: 3 hari di Makkah + 7 hari di tanah air).',
        rekomendasi: 'Sangat direkomendasikan bagi jamaah lansia, keluarga, dan jamaah yang tiba di Makkah beberapa minggu sebelum tanggal 8 Dzulhijjah.'
      },
      {
        nama: '2. Haji Ifrad (Menyendirikan / Mendahulukan Haji)',
        namaArab: 'حَجُّ الْإِفْرَادِ',
        urutanPelaksanaan:
          'Melaksanakan ibadah Haji saja terlebih dahulu secara mandiri. Jamaah berniat ihram hanya untuk haji dari miqat: "Labbaika Allahumma Hajjan". Setibanya di Makkah melakukan Thawaf Qudum (thawaf selamat datang yang sunnah), lalu tetap mempertahankan keadaan berihram (menjaga seluruh larangan ihram tanpa boleh bertahallul) hingga seluruh prosesi haji selesai pada tanggal 10 Dzulhijjah (setelah melontar Jumrah Aqabah dan tahallul). Setelah haji tuntas, barulah jamaah keluar ke tanah halal (Tan\'im atau Ji\'ranah) untuk berniat ihram umrah dan melaksanakan umrah.',
        kelebihan:
          'Merupakan cara yang paling utama menurut Mazhab Maliki dan Syafi\'i bagi penduduk Makkah atau mereka yang tiba mendekati hari Tarwiyah (misal tanggal 7-8 Dzulhijjah). Tidak wajib membayar Dam Nusuk.',
        tantangan:
          'Menuntut kedisiplinan dan ketahanan fisik yang tinggi karena harus menjaga larangan ihram selama berhari-hari atau berminggu-minggu jika tiba lebih awal di Makkah.',
        kewajibanDam: 'Bebas dari Dam Nusuk (TIDAK WAJIB BAYAR DAM).',
        rekomendasi: 'Cocok bagi jamaah yang tiba mepet menjelang hari wukuf (tanggal 7 atau 8 Dzulhijjah), penduduk asli Makkah, atau jamaah yang memiliki fisik prima dan komitmen tinggi.'
      },
      {
        nama: '3. Haji Qiran (Menggabungkan Niat Haji & Umrah Sekaligus)',
        namaArab: 'حَجُّ الْقِرَانِ',
        urutanPelaksanaan:
          'Menggabungkan niat ibadah Haji dan Umrah secara bersamaan sejak dari miqat dengan satu kali niat: "Labbaika Allahumma Hajjan wa \'Umratan" (نَوَيْتُ الْحَجَّ وَالْعُمْرَةَ وَأَحْرَمْتُ بِهِمَا لِلّٰهِ تَعَالَى). Jamaah tetap dalam keadaan berihram melaksanakan Thawaf Qudum dan Sa\'i (yang sudah mencakup sa\'i haji dan umrah), lalu melanjutkan wukuf di Arafah, mabit Muzdalifah-Mina, dan melontar jumrah. Tahallul hanya dilakukan sekali pada tanggal 10 Dzulhijjah setelah melontar Jumrah Aqabah.',
        kelebihan:
          'Satu rangkaian amalan mencakup dua pahala ibadah sekaligus (haji dan umrah dalam satu perjalanan efisien).',
        tantangan:
          'Harus menahan diri dari larangan ihram sejak tiba di miqat hingga tanggal 10 Dzulhijjah serta wajib membayar dam.',
        kewajibanDam: 'Wajib membayar Dam Nusuk (1 ekor kambing atau puasa 10 hari).',
        rekomendasi: 'Disyariatkan bagi jamaah yang membawa hewan hadyu (sembelihan) dari luar Makkah laksana Rasulullah Saw. pada Haji Wada\', atau jamaah yang memiliki waktu sangat sempit.'
      }
    ]
  },

  manasikHajiPraktis: {
    lafazTalbiyah: {
      arab: 'لَبَّيْكَ اللّٰهُمَّ لَبَّيْكَ، لَبَّيْكَ لَا شَرِيْكَ لَكَ لَبَّيْكَ، إِنَّ الْحَمْدَ وَالنِّعْمَةَ لَكَ وَالْمُلْكَ، لَا شَرِيْكَ لَكَ',
      latin: "Labbaika Allāhumma labbaīk, labbaīka lā syarīka laka labbaīk, innal-ḥamda wan-ni'mata laka wal-mulk, lā syarīka lak.",
      arti: 'Aku penuhi panggilan-Mu ya Allah, aku penuhi panggilan-Mu. Aku penuhi panggilan-Mu, tiada sekutu bagi-Mu, aku penuhi panggilan-Mu. Sesungguhnya segala puji, kenikmatan, dan kerajaan adalah milik-Mu, tiada sekutu bagi-Mu.',
      maknaFilosofis:
        'Kalimat Talbiyah adalah ikrar ketaatan mutlak dan proklamasi tauhid murni seorang hamba yang datang dari segenap pelosok bumi untuk memenuhi undangan kehormatan Allah Swt. Disunnahkan dilantunkan dengan suara lantang bagi laki-laki dan suara lirih bagi perempuan sejak berniat ihram hingga melontar Jumrah Aqabah pada 10 Dzulhijjah.'
    },

    miqatMakaniList: [
      {
        namaMiqat: '1. Dzulhulaifah (Bir Ali / Abyar Ali)',
        lokasiModern: 'Terletak sekitar 11 km di selatan kota Madinah Al-Munawwarah dan sekitar 420 km di utara Makkah.',
        peruntukanJamaah: 'Miqat resmi bagi penduduk kota Madinah dan jamaah yang datang dari arah Madinah (termasuk seluruh Jamaah Haji Indonesia Gelombang 1).',
        jarakKeMakkah: '± 420 km ke Makkah Al-Mukarramah'
      },
      {
        namaMiqat: '2. Al-Juhfah (Rabigh)',
        lokasiModern: 'Terletak di dekat pesisir Laut Merah, sekitar 183 km di barat laut Makkah. Saat ini digantikan di kota Rabigh.',
        peruntukanJamaah: 'Miqat penduduk negeri Syam (Suriah, Yordania, Palestina, Lebanon), Mesir, Sudan, dan negara-negara Afrika Utara.',
        jarakKeMakkah: '± 183 km ke Makkah'
      },
      {
        namaMiqat: '3. Qarnul Manazil (As-Sailul Kabir)',
        lokasiModern: 'Sebuah bukit di timur Makkah, dekat lembah As-Sail, sekitar 78 km dari Makkah di jalur pegunungan Taif.',
        peruntukanJamaah: 'Miqat bagi penduduk Najd, Riyadh, Teluk (Kuwait, UEA, Qatar), dan jamaah yang melintas dari arah timur Makkah.',
        jarakKeMakkah: '± 78 km ke Makkah'
      },
      {
        namaMiqat: '4. Yalamlam (As-Sa\'diyah)',
        lokasiModern: 'Kawasan perbukitan di selatan Makkah, berjarak sekitar 92 km dari Makkah.',
        peruntukanJamaah: 'Miqat bagi penduduk Yaman, India, Pakistan, dan jamaah pesawat terbang dari arah selatan Asia Tenggara (termasuk Jamaah Haji Indonesia Gelombang 2 yang mendarat di Jeddah atau melintas di atas Yalamlam di pesawat).',
        jarakKeMakkah: '± 92 km ke Makkah'
      },
      {
        namaMiqat: '5. Dzatu \'Irq (Adh-Dharibah)',
        lokasiModern: 'Kawasan perbatasan padang pasir timur laut Makkah, berjarak sekitar 94 km dari Makkah.',
        peruntukanJamaah: 'Miqat bagi penduduk Irak, Iran, Asia Tengah, dan jamaah yang melintas dari rute utara timur.',
        jarakKeMakkah: '± 94 km ke Makkah'
      }
    ],

    alurKronologis: [
      {
        hariTanggal: '8 Dzulhijjah (Hari Tarwiyah)',
        judulTahap: 'Tahap 1: Niat Ihram Haji & Berangkat Menuju Mina',
        lokasi: 'Hotel Pemondokan di Makkah menuju Tenda Perkemahan Mina',
        amalanPokok: [
          'Mandi sunnah ihram, memotong kuku, merapikan kumis, memakai wewangian di badan (sebelum niat)',
          'Mengenakan 2 lembar kain ihram putih bagi pria dan busana muslimah sopan bagi wanita',
          'Shalat sunnah ihram 2 rakaat di hotel/pemondokan Makkah',
          'Mengucapkan lafaz niat ihram haji: "Nawaitul-hajja wa aḥramtu bihī lillāhi ta\'ālā"',
          'Memperbanyak membaca lafaz Talbiyah sepanjang perjalanan menuju Mina',
          'Bermalam (mabit sunnah Tarwiyah) di tenda Mina serta menunaikan shalat Zuhur, Ashar, Maghrib, Isya, dan Subuh secara qashar tanpa jamak'
        ],
        doaDanDzikir: 'لَبَّيْكَ اللّٰهُمَّ حَجًّا، نَوَيْتُ الْحَجَّ وَأَحْرَمْتُ بِهِ لِلّٰهِ تَعَالَى',
        tipsPraktis: 'Persiapkan tas ransel kecil berisi pakaian ganti, obat-obatan pribadi, sandal cadangan, dan mushaf Al-Qur\'an. Hindari membawa koper besar ke Mina.'
      },
      {
        hariTanggal: '9 Dzulhijjah (Hari Arafah)',
        judulTahap: 'Tahap 2: Puncak Ibadah Haji (Wukuf di Arafah)',
        lokasi: 'Padang Arafah (Tenda & Jabal Rahmah)',
        amalanPokok: [
          'Berangkat dari Mina menuju Padang Arafah setelah matahari terbit (pagi 9 Dzulhijjah)',
          'Masuk waktu wukuf dimulai tepat saat tergelincir matahari (waktu Zuhur/zawal)',
          'Mendengarkan Khutbah Wukuf di tenda masing-masing dengan khusyuk',
          'Melaksanakan shalat Zuhur dan Ashar dengan jamak taqdim dan qashar (2 rakaat + 2 rakaat satu azan dua iqamah)',
          'Memperbanyak doa, dzikir tahlil, tahmid, istighfar, membaca Al-Qur\'an menghadap kiblat dengan mengangkat kedua tangan hingga terbenam matahari',
          'Waktu paling mustajab: antara waktu Ashar hingga menjelang Maghrib'
        ],
        doaDanDzikir: 'لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ',
        tipsPraktis: 'Arafah adalah momentum doa seumur hidup. Siapkan daftar doa khusus untuk orang tua, keluarga, guru, dan umat. Jaga hidrasi tubuh dari terik matahari.'
      },
      {
        hariTanggal: 'Malam 10 Dzulhijjah (Malam Idul Adha)',
        judulTahap: 'Tahap 3: Ifadhah ke Muzdalifah & Mengambil Kerikil',
        lokasi: 'Padang Muzdalifah (Masy\'aril Haram)',
        amalanPokok: [
          'Setelah matahari terbenam sempurna di Arafah, bergerak tertib menuju Muzdalifah tanpa shalat Maghrib di Arafah',
          'Setibanya di Muzdalifah, shalat Maghrib dan Isya dengan jamak ta\'khir dan qashar (Maghrib 3 rakaat + Isya 2 rakaat)',
          'Mabit (bermalam) di Muzdalifah minimal melewati tengah malam (nisfullail)',
          'Memungut batu kerikil sebesar biji kacang tanah/kacang arab (7 butir untuk Jumrah Aqabah, atau 49 butir untuk Nafar Awwal, atau 70 butir untuk Nafar Tsani)',
          'Berzikir di Masy\'aril Haram dan beristirahat sejenak mengumpulkan energi fisik'
        ],
        doaDanDzikir: 'فَاِذَآ اَفَضْتُمْ مِّنْ عَرَفٰتٍ فَاذْكُرُوا اللّٰهَ عِنْدَ الْمَشْعَرِ الْحَرَامِ (Q.S. Al-Baqarah: 198)',
        tipsPraktis: 'Gunakan masker dan kantong plastik kecil untuk wadah kerikil. Jangan mengambil batu besar yang dapat mencederai jamaah lain di Jamarat.'
      },
      {
        hariTanggal: '10 Dzulhijjah (Hari Nahr / Idul Adha)',
        judulTahap: 'Tahap 4: Melontar Jumrah Aqabah, Qurban, & Tahallul Awwal',
        lokasi: 'Mina (Jamarat) & Makkah (Baitullah)',
        amalanPokok: [
          'Berangkat dari Muzdalifah menuju Mina sebelum matahari terbit',
          'Melontar tiang Jumrah Aqabah (Kubra) sebanyak 7 butir kerikil secara satu per satu sambil membaca: "Bismillāhi Allāhu Akbar"',
          'Menyembelih hewan qurban atau dam nusuk (dikoordinasikan via bank/lembaga resmi Adahi)',
          'Tahallul Awwal (memotong/mencukur minimal 3 helai rambut). DENGAN TAHALLUL AWWAL, SELURUH LARANGAN IHRAM GUGUR DAN HALAL KEMBALI, KECUALI BERHUBUNGAN SUAMI-ISTRI',
          'Jamaah mengganti pakaian ihram dengan pakaian biasa berjahit dan memakai wewangian',
          'Menuju Masjidil Haram di Makkah untuk melaksanakan Thawaf Ifadhah dan Sa\'i Haji (dapat dilakukan hari ini atau ditunda setelah mabit Mina)'
        ],
        doaDanDzikir: 'بِسْمِ اللّٰهِ وَاللّٰهُ أَكْبَرُ رَغْمًا لِلشَّيْطَانِ وَحِزْبِهِ وَإِرْضَاءً لِلرَّحْمٰنِ',
        tipsPraktis: 'Patuhi jadwal jalur melontar (jadwal tasreh jamarat) yang ditentukan PPIH dan Kerajaan Saudi demi menghindari kepadatan ekstrem.'
      },
      {
        hariTanggal: '11, 12, & 13 Dzulhijjah (Hari-Hari Tasyrik)',
        judulTahap: 'Tahap 5: Mabit di Mina & Melontar Tiga Jumrah',
        lokasi: 'Mina (Kemah & Jembatan Jamarat)',
        amalanPokok: [
          'Wajib mabit di perkemahan Mina setiap malam hari Tasyrik',
          'Setiap hari setelah waktu zawal (tergelincir matahari/Zuhur), melontar 3 Jumrah secara berurutan:',
          '1. Jumrah Ula (Shughra) dengan 7 batu kerikil, lalu bergeser ke kanan berdoa panjang',
          '2. Jumrah Wustha dengan 7 batu kerikil, lalu bergeser ke kiri berdoa panjang',
          '3. Jumrah Aqabah (Kubra) dengan 7 batu kerikil, langsung berlalu tanpa berhenti',
          'Pilihan Nafar Awwal: Menyelesaikan lontaran pada tanggal 11 dan 12 Dzulhijjah lalu keluar Mina sebelum matahari terbenam tanggal 12 menuju Makkah',
          'Pilihan Nafar Tsani: Melanjutkan mabit malam 13 Dzulhijjah dan melontar 3 jumrah pada tanggal 13 Dzulhijjah (lebih utama)'
        ],
        doaDanDzikir: 'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ',
        tipsPraktis: 'Gunakan payung dan bawa air minum saat berjalan kaki melintasi terowongan Muaisim menuju Jamarat. Jaga formasi rombongan regu.'
      },
      {
        hariTanggal: 'Purna Rangkaian Haji',
        judulTahap: 'Tahap 6: Thawaf Ifadhah, Sa\'i, & Thawaf Wada\'',
        lokasi: 'Masjidil Haram, Makkah Al-Mukarramah',
        amalanPokok: [
          'Bagi yang belum Thawaf Ifadhah pada tanggal 10 Dzulhijjah, segera kembali ke Masjidil Haram untuk Thawaf Ifadhah 7 putaran dan Sa\'i antara Shafa-Marwah 7 putaran',
          'Dengan selesainya Thawaf Ifadhah dan Sa\'i, jamaah telah mencapai Tahallul Tsani (Tahallul Akbar): SELURUH LARANGAN IHRAM HALAL KEMBALI TANPA KECUALI (termasuk hubungan suami-istri)',
          'Melaksanakan Thawaf Wada\' (Thawaf Perpisahan) sebanyak 7 putaran sesaat sebelum berkemas meninggalkan kota Makkah untuk ziarah ke Madinah atau pulang ke tanah air',
          'Shalat sunnah 2 rakaat di belakang Maqam Ibrahim dan berdoa menghadap Multazam'
        ],
        doaDanDzikir: 'اللّٰهُمَّ لَا تَجْعَلْ هٰذَا آخِرَ الْعَهْدِ بِبَيْتِكَ الْحَرَامِ، وَإِنْ جَعَلْتَهُ فَاجْعَلْنِيْ مَرْحُوْمًا وَلَا تَجْعَلْنِيْ مَحْرُوْمًا',
        tipsPraktis: 'Setelah Thawaf Wada\', jangan lagi berbelanja cinderamata di Makkah. Langsung menuju bus keberangkatan.'
      }
    ],

    doaDoaManasikPenting: [
      {
        namaDoa: 'Doa Masuk Masjidil Haram & Melihat Ka\'bah',
        waktuPelafalan: 'Saat pertama kali memasuki pintu gerbang Masjidil Haram dan memandang keagungan Ka\'bah',
        arab: 'اللّٰهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ فَحَيِّنَا رَبَّنَا بِالسَّلَامِ. اللّٰهُمَّ زِدْ هٰذَا الْبَيْتَ تَشْرِيْفًا وَتَعْظِيْمًا وَتَكْرِيْمًا وَمَهَابَةً، وَزِدْ مَنْ شَرَّفَهُ وَعَظَّمَهُ مِمَّنْ حَجَّهُ أَوِ اعْتَمَرَهُ تَشْرِيْفًا وَتَكْرِيْمًا وَتَعْظِيْمًا وَبِرًّا',
        latin: "Allāhumma antas-salāmu wa minkas-salāmu faḥayyinā rabbanā bis-salām. Allāhumma zid hāżal-baita tasyrīfan wa ta'ẓīman wa takrīman wa mahābah, wa zid man syarrafahū wa 'aẓẓamahū mimman ḥajjahū awi'tamarahū tasyrīfan wa takrīman wa ta'ẓīman wa birrā.",
        arti: 'Ya Allah, Engkaulah sumber keselamatan, dan dari-Mulah keselamatan, maka hidupkanlah kami wahai Tuhan kami dengan keselamatan. Ya Allah, tambahkanlah kemuliaan, keagungan, kehormatan, dan wibawa pada Rumah ini (Ka\'bah), serta tambahkanlah kemuliaan, kehormatan, keagungan, dan kebaikan bagi orang-orang yang memuliakannya dari kalangan mereka yang berhaji atau berumrah.'
      },
      {
        namaDoa: 'Doa Thawaf antara Rukun Yamani & Hajar Aswad',
        waktuPelafalan: 'Dibaca di setiap putaran thawaf dari sudut Rukun Yamani hingga sudut Hajar Aswad',
        arab: 'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ، وَأَدْخِلْنَا الْجَنَّةَ مَعَ الْأَبْرَارِ يَا عَزِيْزُ يَا غَفَّارُ يَا رَبَّ الْعَالَمِيْنَ',
        latin: "Rabbanā ātinā fid-dunyā ḥasanatan wa fil-ākhirati ḥasanatan wa qinā 'ażāban-nār, wa adkhilnal-jannata ma'al-abrār, yā 'Azīzu yā Gaffāru yā Rabbal-'ālamīn.",
        arti: 'Ya Tuhan kami, berikanlah kami kebaikan di dunia dan kebaikan di akhirat, dan lindungilah kami dari azab neraka. Dan masukkanlah kami ke dalam surga bersama orang-orang yang berbakti, wahai Tuhan Yang Mahaperkasa, Maha Pengampun, Tuhan semesta alam.'
      },
      {
        namaDoa: 'Doa Minum Air Zamzam',
        waktuPelafalan: 'Setelah selesai thawaf dan shalat sunnah di belakang Maqam Ibrahim sebelum menuju tempat Sa\'i',
        arab: 'اللّٰهُمَّ إِنِّيْ أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا وَاسِعًا، وَشِفَاءً مِنْ كُلِّ دَاءٍ وَسَقَمٍ بِرَحْمَتِكَ يَا أَرْحَمَ الرَّاحِمِيْنَ',
        latin: "Allāhumma innī as'aluka 'ilman nāfi'ā, wa rizqan wāsi'ā, wa syifā'an min kulli dā'in wa saqamin biraḥmatika yā arḥamar-rāḥimīn.",
        arti: 'Ya Allah, sesungguhnya aku memohon kepada-Mu ilmu yang bermanfaat, rezeki yang lapang, dan kesembuhan dari segala penyakit dan mara bahaya, dengan rahmat-Mu wahai Tuhan Yang Maha Pengasih dari segala yang mengasihi.'
      },
      {
        namaDoa: 'Doa di Atas Bukit Shafa & Marwah',
        waktuPelafalan: 'Saat menaiki puncak bukit Shafa dan bukit Marwah menghadap Ka\'bah sebelum memulai tiap putaran sa\'i',
        arab: 'إِنَّ الصَّفَا وَالْمَرْوَةَ مِنْ شَعَائِرِ اللّٰهِ. لَا إِلَهَ إِلَّا اللّٰهُ وَحْدَهُ لَا شَرِيْكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ يُحْيِيْ وَيُمِيْتُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيْرٌ، لَا إِلَهَ إِلَّا اللّٰهُ وَحْدَهُ، أَنْجَزَ وَعْدَهُ، وَنَصَرَ عَبْدَهُ، وَهَزَمَ الْأَحْزَابَ وَحْدَهُ',
        latin: "Innaṣ-ṣafā wal-marwata min sya'ā'irillāh. Lā ilāha illallāhu waḥdahū lā syarīka lah, lahul-mulku wa lahul-ḥamdu yuḥyī wa yumītu wa huwa 'alā kulli syai'in qadīr, lā ilāha illallāhu waḥdah, anjaza wa'dah, wa naṣara 'abdah, wa hazamal-aḥzāba waḥdah.",
        arti: 'Sesungguhnya Shafa dan Marwah adalah sebagian dari syiar-syiar Allah. Tiada Tuhan selain Allah semata, tiada sekutu bagi-Nya. Bagi-Nya kerajaan dan segala puji, Dia Yang menghidupkan dan mematikan, dan Dia Mahakuasa atas segala sesuatu. Tiada Tuhan selain Allah semata, Yang menepati janji-Nya, menolong hamba-Nya, dan menghancurkan golongan musuh dengan sendirian.'
      },
      {
        namaDoa: 'Doa Melontar Tiang Jumrah',
        waktuPelafalan: 'Diucapkan bersamaan dengan setiap butir kerikil yang dilemparkan ke lubang jamarat',
        arab: 'بِسْمِ اللّٰهِ، وَاللّٰهُ أَكْبَرُ، رَجْمًا لِلشَّيْطَانِ وَرِضًا لِلرَّحْمٰنِ، اللّٰهُمَّ اجْعَلْهُ حَجًّا مَبْرُوْرًا وَذَنْبًا مَغْفُوْرًا وَسَعْيًا مَشْكُوْرًا',
        latin: "Bismillāhi, wallāhu akbar, rajman lisy-syaithāni wa riḍan lir-raḥmān, Allāhummaj'alhu ḥajjam mabrūrā, wa żambam magfūrā, wa sa'yam masykūrā.",
        arti: 'Dengan nama Allah, dan Allah Mahabesar. Sebagai lemparan kutukan bagi setan dan demi keridhaan Tuhan Yang Maha Pengasih. Ya Allah, jadikanlah ini haji yang mabrur, dosa yang diampuni, dan amal usaha yang diterima.'
      }
    ]
  },

  hikmahHajiUmrah: {
    pengantar:
      'Ibadah haji dan umrah bukan sekadar perpindahan fisik ribuan kilometer melintasi benua, melainkan sebuah madrasah agung pembentukan peradaban dan penyucian jiwa yang memancarkan 5 dimensi hikmah luhur bagi pribadi muslim, masyarakat, dan tatanan kemanusiaan global:',
    daftarHikmah: [
      {
        dimensi: '1. Dimensi Ruhiyah / Spiritual',
        judul: 'Pemurnian Tauhid & Pengingat Hakikat Akhirat',
        uraian:
          'Seluruh prosesi haji menuntun manusia pada ketundukan mutlak kepada Allah Swt. Pakaian ihram putih tanpa jahitan mengingatkan manusia pada kain kafan saat dibungkus ke liang lahat. Berkumpulnya jutaan umat manusia di Padang Arafah dalam pakaian yang sama adalah replika dan miniatur nyata dari Padang Mahsyar, ketika seluruh manusia berdiri tanpa pangkat, harta, atau mahkota di hadapan Pengadilan Ilahi.',
        penerapanPelajar:
          'Menumbuhkan rasa takut bermaksiat, memperbanyak istighfar, serta menyadari bahwa seluruh kekayaan dan popularitas duniawi akan ditinggalkan.'
      },
      {
        dimensi: '2. Dimensi Sosial & Kemanusiaan',
        judul: 'Simbol Kesetaraan Universal & Persaudaraan Tanpa Sekat (Ukhuwah Islamiyah)',
        uraian:
          'Haji adalah muktamar dan konferensi akbar tahunan terbesar umat Islam sedunia. Presiden, raja, jenderal, konglomerat kaya raya, hingga buruh miskin berdiri bahu-membahu dalam satu shaf yang sama mengenakan kain ihram yang identik. Perbedaan warna kulit, etnis suku bangsa, bahasa, dan strata sosial lebur total di hadapan Baitullah. Islam menegaskan tidak ada keutamaan bangsa Arab atas non-Arab kecuali karena derajat ketakwaannya.',
        penerapanPelajar:
          'Menghilangkan sikap rasisme, tidak membeda-bedakan teman berdasarkan status ekonomi orang tua, dan mempererat tali persaudaraan antar sesama siswa di sekolah.'
      },
      {
        dimensi: '3. Dimensi Moral & Pembentukan Karakter',
        judul: 'Pendidikan Kesabaran Ekstrem, Pengendalian Emosi, & Pengorbanan',
        uraian:
          'Berada di tengah jutaan manusia dengan iklim panas ekstrem dan antrean panjang melatih kesabaran tingkat tinggi. Larangan rafats (kata-kata sensual), fusuq (maksiat), dan jidal (bertengkar) mendidik lisan dan hati agar senantiasa santun, menahan amarah, mengalah demi kemaslahatan bersama, serta peduli kepada kaum lansia dan disabilitas.',
        penerapanPelajar:
          'Melatih kesabaran dalam belajar, tidak mudah marah saat diejek, antre dengan tertib di kantin sekolah, dan peduli menolong teman yang kesulitan.'
      },
      {
        dimensi: '4. Dimensi Historis & Keteladanan',
        judul: 'Napak Tilas Perjuangan Keluarga Ibrahim a.s. & Risalah Rasulullah Saw.',
        uraian:
          'Ibadah haji menghidupkan kembali mata rantai sejarah tauhid: kepasrahan Nabi Ibrahim a.s. dan Nabi Ismail a.s. saat menerima perintah qurban, ketangguhan dan tawakal Ibunda Siti Hajar yang berlari antara bukit Shafa dan Marwah mencari air, serta khutbah perpisahan (Khutbah Wada\') Rasulullah Saw. di Jabal Rahmah yang meletakkan Deklarasi Hak Asasi Manusia pertama dalam Islam.',
        penerapanPelajar:
          'Berbakti penuh hormat kepada kedua orang tua (birrul walidain), meneladani ketabahan ibunda di rumah, serta gigih berikhtiar pantang menyerah menggapai cita-cita.'
      },
      {
        dimensi: '5. Dimensi Ekonomi & Kemaslahatan Peradaban',
        judul: 'Pemberdayaan Filantropi Qurban Dam & Perputaran Ekonomi Global',
        uraian:
          'Jutaan hewan sembelihan dam dan qurban di Mina dikelola secara modern dan higienis melalui proyek Adahi Kerajaan Saudi untuk dibekukan dan didistribusikan ke jutaan kaum fakir miskin dan pengungsi di puluhan negara muslim yang dilanda bencana dan kelaparan, menggerakkan roda kemakmuran filantropi global.',
        penerapanPelajar:
          'Membiasakan gemar bersedekah, berpartisipasi dalam qurban sekolah, dan menyisihkan uang saku untuk membantu korban bencana alam.'
      }
    ]
  },

  studiKasusKontekstual: [
    {
      id: 'kasus-1',
      judul: 'Studi Kasus 1: Fenomena Antrean Haji Panjang & Tawaran Visa Ilegal Non-Kuota',
      skenario:
        'Pak Hendra dan istrinya telah menabung selama 15 tahun dan mendaftar haji reguler, namun daftar tunggu resmi (waiting list) di daerahnya mencapai 25 tahun. Seorang oknum biro travel menawarkan "Jalur Kilat Berangkat Tahun Ini Tanpa Antre" menggunakan Visa Ziarah (Tourist/Multiple Visa) dengan biaya 3 kali lipat lebih mahal. Beberapa orang tergiur dan akhirnya dideportasi, ditahan di Arab Saudi, serta dilarang masuk Saudi selama 10 tahun karena tidak memiliki Tasreh Haji resmi dari pemerintah.',
      pertanyaanPemantik: [
        'Bagaimana tinjauan syariat Fikih Haji terhadap penggunaan visa ilegal non-kuota untuk berhaji?',
        'Mengapa ketaatan pada regulasi resmi pemerintah termasuk bagian dari pemenuhan syarat Istitha\'ah?'
      ],
      analisisSyariat:
        'Syarat wajib haji adalah Al-Istitha\'ah (kemampuan), yang salah satu unsurnya adalah Amnut-Thariq (keamanan perjalanan) dan adanya izin legal (tasreh resmi). Ulama Kibar Saudi dan Majelis Ulama Indonesia (MUI) telah berfatwa bahwa berhaji tanpa visa haji resmi (tasreh) hukumnya HARAM dan berdosa karena melanggar aturan waliyyul amri (pemerintah) yang dibuat demi kemaslahatan keselamatan jutaan jiwa jamaah (saddan lidz-dzari\'ah). Selain itu, jamaah berisiko terkatung-katung tanpa tenda, tidak mendapat layanan medis, dan membahayakan keselamatan diri.',
      solusiDanKeteladanan:
        'Pak Hendra sebaiknya tetap bersabar menunggu antrean resmi atau mendaftar Haji Khusus (PIHK) berkuota resmi, atau menunaikan Umrah terlebih dahulu. Niat tulus menabung sudah dicatat pahalanya oleh Allah Swt. Hindari jalan pintas ilegal yang melanggar hukum.'
    },
    {
      id: 'kasus-2',
      judul: 'Studi Kasus 2: Perilaku Swafoto (Selfie), Live Medsos, & Riya\' di Depan Ka\'bah',
      skenario:
        'Faisal melihat beberapa jamaah di media sosial yang sedang melakukan thawaf dan wukuf di Arafah sibuk melakukan live streaming, merekam konten vlog YouTube, dan berfoto selfie dengan pose mengangkat tangan seolah berdoa demi mengejar like dan followers, bahkan menghalangi arus pergerakan jamaah thawaf yang sedang khusyuk menangis.',
      pertanyaanPemantik: [
        'Bagaimana pengaruh berfoto dan live medsos berlebihan terhadap keabsahan dan kemabruran ibadah haji?',
        'Adab apa yang seharusnya dijunjung tinggi saat berada di depan Ka\'bah dan Padang Arafah?'
      ],
      analisisSyariat:
        'Secara hukum fikih, mengambil foto tidak membatalkan thawaf selama rukunnya terpenuhi. Namun, perilaku tersebut sangat berpotensi merusak kekhusyukan dan menjerumuskan pada penyakit RIYA\' (pamer ibadah) dan SUM\'AH yang dapat MENGHAPUS SELURUH PAHALA HAJI (Q.S. Al-Baqarah: 264). Selain itu, berhenti mendadak untuk berfoto di jalur thawaf yang padat berpotensi menyakiti orang lain (idzā\'ul muslim), yang bertentangan dengan esensi haji mabrur.',
      solusiDanKeteladanan:
        'Fokuskan hati dan lisan untuk berzikir, membaca Al-Qur\'an, dan menumpahkan air mata taubat kepada Allah Swt. Jadikan kamera ponsel tersimpan rapi di saku selama ritual thawaf, sa\'i, dan wukuf. Dokumentasi kenangan secukupnya dilakukan di luar waktu ritual inti.'
    },
    {
      id: 'kasus-3',
      judul: 'Studi Kasus 3: Ketabahan Menabung Nenek Pedagang Sayur demi Istitha\'ah',
      skenario:
        'Nenek Minah (68 tahun) adalah seorang penjual sayur keliling di desa yang menyisihkan uang receh Rp 20.000 setiap hari di celengan bambu selama 28 tahun tanpa pernah mengeluh. Berkat keistiqomahannya, tabungannya mencukupi untuk mendaftar dan melunasi Bipih. Di tanah suci, Nenek Minah selalu tersenyum, rajin membantu jamaah lansia lainnya di tenda Mina, dan tidak pernah mengeluh meski makanan atau tendanya sederhana.',
      pertanyaanPemantik: [
        'Nilai karakter apa yang dapat kita teladani dari ikhtiar Nenek Minah dalam mewujudkan istitha\'ah?',
        'Mengapa keikhlasan dan kesederhanaan menjadi kunci utama meraih predikat Haji Mabrur?'
      ],
      analisisSyariat:
        'Nenek Minah telah mencontohkan hakikat Istitha\'ah Maaliyah yang diiringi dengan kesucian harta halal (at-thayyib) dan keikhlasan niat yang murni (lillahi ta\'ala). Rasulullah Saw. bersabda bahwa Allah Maha Baik dan hanya menerima dari harta yang baik. Sikap sabar, tidak mengeluh, dan senang menolong sesama jamaah di Mina adalah tanda-tanda nyata diterimanya haji (haji mabrur).',
      solusiDanKeteladanan:
        'Sebagai pelajar, kita termotivasi untuk mulai menabung sejak dini, menghargai kerja keras orang tua, menjauhi sifat boros dan gengsi berlebih, serta melatih kepedulian sosial kepada sesama.'
    }
  ],

  lembarMuhasabah: [
    {
      id: 1,
      indikator: 'Menumbuhkan Tekad dan Disiplin Menabung Sejak Dini',
      deskripsiSikap:
        'Saya mulai menyisihkan sebagian uang saku secara konsisten untuk ditabung di rekening tabungan haji/pendidikan sebagai wujud ikhtiar mewujudkan istitha\'ah di masa depan.',
      aspekKarakter: 'Kemandirian Finansial & Tawakal'
    },
    {
      id: 2,
      indikator: 'Menjunjung Tinggi Kesetaraan & Bebas dari Rasisme',
      deskripsiSikap:
        'Saya tidak membeda-bedakan teman bergaul di sekolah berdasarkan warna kulit, suku daerah, kekayaan orang tua, atau penampilan fisik, terinspirasi dari filosofi pakaian ihram putih.',
      aspekKarakter: 'Toleransi & Keadilan Sosial'
    },
    {
      id: 3,
      indikator: 'Menjaga Lisan dari Ucapan Kotor, Gosip, & Debat Kusir',
      deskripsiSikap:
        'Saya membiasakan diri menahan lisan dari perkataan kotor/jorok (rafats), maksiat mencela (fusuq), dan pertengkaran sia-sia (jidal) baik di dunia nyata maupun di media sosial.',
      aspekKarakter: 'Integritas Moral & Santun'
    },
    {
      id: 4,
      indikator: 'Melatih Kesabaran & Tertib Antre di Fasilitas Umum',
      deskripsiSikap:
        'Saya sabar menunggu giliran dan tidak memotong antrean saat berbelanja di kantin, menggunakan toilet sekolah, atau menaiki transportasi umum, meneladani ketertiban manasik haji.',
      aspekKarakter: 'Disiplin & Beradab'
    },
    {
      id: 5,
      indikator: 'Berbakti kepada Orang Tua (Birrul Walidain)',
      deskripsiSikap:
        'Saya menghormati, menyayangi, dan mendoakan kedua orang tua setiap hari, meneladani ketaatan Nabi Ismail a.s. kepada Nabi Ibrahim a.s. dan perjuangan Ibunda Siti Hajar.',
      aspekKarakter: 'Ketaatan & Kasih Sayang'
    },
    {
      id: 6,
      indikator: 'Menghindari Sikap Riya\' dan Pamer di Media Sosial',
      deskripsiSikap:
        'Saya beramal ibadah (shalat, sedekah, membaca Al-Qur\'an) secara ikhlas murni mengharap ridha Allah Swt. tanpa keinginan untuk dipuji teman atau pamer di story medsos.',
      aspekKarakter: 'Keikhlasan Batin'
    },
    {
      id: 7,
      indikator: 'Peduli Menolong Teman yang Mengalami Kesulitan',
      deskripsiSikap:
        'Saya tergerak membantu teman sekelas yang sedang sakit, kesulitan memahami materi pelajaran, atau membutuhkan bantuan alat tulis tanpa pamrih.',
      aspekKarakter: 'Kepedulian Ukhuwah'
    },
    {
      id: 8,
      indikator: 'Menjaga Kebersihan & Kelestarian Lingkungan Hidup',
      deskripsiSikap:
        'Saya membuang sampah pada tempatnya dan merawat tanaman hijau di sekolah, menghayati larangan ihram merusak pohon dan tumbuhan di Tanah Haram.',
      aspekKarakter: 'Kesadaran Ekologis'
    }
  ],

  soalEvaluasiHots: [
    {
      id: 'soal-1',
      stimulus:
        'Pak Rahmat menunaikan ibadah haji bersama rombongannya. Karena kelelahan dan tertidur di tenda hotel di Makkah, ia baru terbangun pada tanggal 10 Dzulhijjah pukul 08.00 pagi. Ia sama sekali tidak sempat hadir di Padang Arafah pada tanggal 9 Dzulhijjah hingga waktu subuh 10 Dzulhijjah. Teman sekamarnya menyarankan agar Pak Rahmat menyembelih seekor kambing sebagai dam agar hajinya tetap sah.',
      pertanyaan:
        'Berdasarkan hukum fikih ibadah haji, bagaimana status ibadah haji Pak Rahmat dan langkah syar\'i yang benar yang harus ditempuhnya?',
      pilihan: [
        'A. Hajinya sah karena tertinggal karena uzur tertidur, dan ia cukup membayar dam seekor kambing di Makkah.',
        'B. Hajinya batal karena Wukuf di Arafah adalah rukun haji yang tidak dapat digantikan dengan dam; Pak Rahmat wajib bertahallul dengan amalan umrah dan wajib mengulang hajinya di tahun berikutnya.',
        'C. Hajinya sah jika ia langsung menyusul wukuf sendirian di Arafah pada siang hari tanggal 10 Dzulhijjah.',
        'D. Hajinya ditangguhkan dan Pak Rahmat cukup berpuasa selama 10 hari sebagai gantinya tanpa perlu mengulang haji.',
        'E. Hajinya sah asalkan Pak Rahmat memperbanyak melontar jumrah dan menyembelih seekor unta di Mina.'
      ],
      kunciJawaban: 1, // B
      pembahasanLengkap:
        'Wukuf di Padang Arafah pada tanggal 9 Dzulhijjah adalah RUKUN UTAMA IBADAH HAJI sebagaimana sabda Nabi Saw.: "Al-Hajju \'Arafah" (Haji adalah wukuf di Arafah). Seluruh ulama sepakat (ijma\') bahwa rukun haji apabila ditinggalkan—baik karena sengaja, lupa, maupun tertidur—TIDAK DAPAT DITEBUS DENGAN DAM MAUPUN PUASA. Oleh karena itu, ibadah haji Pak Rahmat BATAL (fawatul hajj). Pak Rahmat wajib mengubah niatnya menjadi amalan umrah (thawaf, sa\'i, tahallul) agar terbebas dari larangan ihram, dan wajib mengqadha (mengulang) ibadah hajinya di tahun berikutnya serta membayar dam fawat.',
      kompetensiKognitif: 'Analisis Status Hukum Fikih (C4 - Evaluasi Rukun vs Wajib Haji)'
    },
    {
      id: 'soal-2',
      stimulus:
        'Ibu Khadijah memilih melaksanakan Haji Tamattu\'. Setelah menuntaskan umrah dan bertahallul pada akhir bulan Dzulqa\'dah, ia menunggu hari Tarwiyah di hotel Makkah. Pada tanggal 8 Dzulhijjah, Ibu Khadijah bersiap memulai ibadah haji.',
      pertanyaan:
        'Dimanakah tempat (Miqat Makani) bagi Ibu Khadijah untuk berniat ihram dan mengenakan pakaian ihram hajinya, serta kewajiban tambahan apa yang harus ia penuhi?',
      pilihan: [
        'A. Wajib kembali ke Bir Ali (Madinah) dan bebas dari kewajiban membayar dam.',
        'B. Berniat ihram dari Tan\'im atau Ji\'ranah dan wajib berpuasa selama 3 hari di tanah air.',
        'C. Berniat ihram langsung dari pemondokan/hotel tempat tinggalnya di Makkah dan wajib membayar Dam Nusuk (menyembelih 1 ekor kambing atau puasa 10 hari).',
        'D. Wajib menuju Bandara King Abdul Aziz Jeddah untuk berniat dan tidak terkena denda apapun.',
        'E. Berniat ihram langsung di Padang Arafah pada tanggal 9 Dzulhijjah tanpa perlu berniat pada tanggal 8 Dzulhijjah.'
      ],
      kunciJawaban: 2, // C
      pembahasanLengkap:
        'Bagi jamaah yang melaksanakan Haji Tamattu\', setelah ia bertahallul dari umrahnya dan menjadi halal di kota Makkah, Miqat Makani untuk ihram hajinya adalah tempat tinggal / hotel / pemondokannya di kota Makkah Al-Mukarramah pada tanggal 8 Dzulhijjah. Konsekuensi dari kemudahan bersenang-senang (tamattu\') di antara umrah dan haji adalah ia diwajibkan oleh syariat membayar Dam Nusuk (seekor kambing, atau berpuasa 10 hari: 3 hari di Makkah dan 7 hari di tanah air sesuai Q.S. Al-Baqarah: 196).',
      kompetensiKognitif: 'Aplikasi Ketentuan Miqat dan Dam Haji Tamattu\' (C3)'
    },
    {
      id: 'soal-3',
      stimulus:
        'Di tengah kerumunan padat di terowongan Mina saat menuju Jamarat pada tanggal 11 Dzulhijjah, cuaca sangat terik mencapai 44°C. Anton melihat seorang bapak jamaah haji memakai topi rimba yang menempel ketat di kepalanya untuk melindungi diri dari panas matahari, padahal bapak tersebut baru melontar Jumrah Aqabah dan belum Thawaf Ifadhah.',
      pertanyaan:
        'Bagaimana tinjauan hukum mengenakan penutup kepala bagi pria saat berihram dan apa konsekuensi syar\'i yang benar bagi bapak tersebut?',
      pilihan: [
        'A. Boleh tanpa denda karena cuaca panas ekstrem merupakan kondisi darurat yang membebaskan seluruh larangan.',
        'B. Memakai penutup kepala yang menempel langsung adalah larangan ihram bagi pria; hajinya tetap sah namun bapak tersebut wajib membayar Dam Takhyir & Taqdir (memilih sembelih kambing, puasa 3 hari, atau fidyah makanan untuk 6 fakir miskin).',
        'C. Hajinya langsung batal di tempat dan ia harus mengulang hajinya dari awal.',
        'D. Pria boleh memakai topi rimba asalkan topinya berwarna putih menyerupai kain ihram.',
        'E. Bapak tersebut cukup beristighfar 100 kali tanpa perlu membayar fidyah apapun.'
      ],
      kunciJawaban: 1, // B
      pembahasanLengkap:
        'Bagi laki-laki yang sedang dalam keadaan berihram, menutup kepala dengan sesuatu yang bertumpu dan menempel langsung (seperti peci, topi rimba, sorban, helm) adalah HARAM HUKUMNYA berdasarkan sabda Nabi Saw. Jika dilakukan karena panas atau uzur, hajinya TETAP SAH namun ia wajib membayar Dam Takhyir & Taqdir (fidyah), yaitu bebas memilih di antara 3 opsi: menyembelih 1 kambing, atau berpuasa 3 hari, atau memberi makan 6 orang fakir miskin di Tanah Haram masing-masing 1/2 sha\' makanan (Q.S. Al-Baqarah: 196). Jika ingin berteduh dari panas, pria disunnahkan memakai payung yang tidak menempel di kepala.',
      kompetensiKognitif: 'Penalaran Kasus Larangan Ihram dan Fidyah (C4)'
    },
    {
      id: 'soal-4',
      stimulus:
        'Perhatikan matrik pernyataan perbandingan berikut ini:\n(1) Wukuf di Padang Arafah pada 9 Dzulhijjah\n(2) Mengelilingi Ka\'bah 7 kali putaran\n(3) Mabit di Muzdalifah dan melontar Jumrah di Mina\n(4) Sa\'i bolak-balik antara Shafa dan Marwah 7 kali\n(5) Tahallul memotong rambut kepala\n(6) Thawaf Wada\' sebelum pulang ke tanah air',
      pertanyaan:
        'Manakah di antara amalan-amalan di atas yang termasuk dalam RUKUN UMRAH yang wajib dipenuhi oleh setiap muslim saat berziarah ke Baitullah?',
      pilihan: [
        'A. (1), (2), (3), dan (4)',
        'B. (1), (3), (5), dan (6)',
        'C. (2), (4), dan (5) ditambah Niat Ihram dan Tertib',
        'D. (2), (3), (4), dan (6)',
        'E. Seluruh amalan (1) sampai (6) adalah rukun umrah'
      ],
      kunciJawaban: 2, // C
      pembahasanLengkap:
        'Rukun Umrah terdiri dari 5 amalan pokok: (1) Ihram disertai niat umrah, (2) Thawaf Umrah di Ka\'bah (poin 2), (3) Sa\'i antara Shafa dan Marwah (poin 4), (4) Tahallul memotong rambut (poin 5), dan (5) Tertib. Wukuf di Arafah (1) adalah rukun khusus haji. Mabit di Muzdalifah/Mina dan melontar jumrah (3) serta Thawaf Wada\' (6) adalah wajib haji yang tidak ada dalam ibadah umrah.',
      kompetensiKognitif: 'Pemilahan Rukun Umrah vs Haji (C2/C4)'
    },
    {
      id: 'soal-5',
      stimulus:
        'Jutaan umat Islam berkumpul dari berbagai penjuru dunia di Padang Arafah dan Masjidil Haram. Tidak ada perbedaan antara raja berkulit putih, presiden bangsawan, konglomerat kaya, maupun buruh kasar berkulit hitam; semuanya mengenakan dua lembar kain ihram putih yang tidak berjahit dan melantunkan kalimat Talbiyah yang sama.',
      pertanyaan:
        'Nilai hikmah sosial-kemanusiaan paling mendalam apa yang dipancarkan dari keseragaman pakaian ihram tersebut dalam kehidupan bermasyarakat sehari-hari?',
      pilihan: [
        'A. Mengajarkan agar manusia meninggalkan seluruh profesi pekerjaan duniawi dan hidup menyendiri di pegunungan.',
        'B. Menegaskan prinsip persamaan derajat kemanusiaan (egalitarianisme mutlak) di hadapan Allah Swt., bahwa kemuliaan seseorang semata-mata diukur dari ketakwaannya, bukan dari kasta, jabatan, ras, atau kekayaan duniawi.',
        'C. Menunjukkan bahwa bangsa Arab memiliki kedudukan lebih tinggi daripada bangsa non-Arab dalam tata kelola ibadah.',
        'D. Mengajarkan bahwa pakaian putih adalah satu-satunya pakaian yang diperbolehkan dalam agama Islam untuk seluruh kegiatan harian.',
        'E. Membuktikan bahwa ibadah haji adalah ajang unjuk kekuatan militer dan ekonomi negara-negara berkembang.'
      ],
      kunciJawaban: 1, // B
      pembahasanLengkap:
        'Kain ihram putih tanpa jahitan adalah simbol universal kesetaraan manusia di hadapan Sang Khalik. Seluruh atribut pangkat, seragam kebesaran, jabatan politik, dan pakaian bermerek jutaan rupiah ditanggalkan. Semua hamba berdiri sejajar laksana mayat berkain kafan yang menanti hisab. Hal ini sejalan dengan firman Allah dalam Q.S. Al-Hujurat: 13 bahwa yang paling mulia di sisi Allah adalah yang paling bertakwa, serta sabda Nabi pada Haji Wada\' bahwa tidak ada keutamaan orang Arab atas non-Arab kecuali karena takwanya.',
      kompetensiKognitif: 'Evaluasi Makna Filosofis & Hikmah Sosial (C5)'
    }
  ]
};
