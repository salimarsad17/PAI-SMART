export interface TahapPengurusanJenazah {
  id: string;
  tahapNumber: number;
  nama: string;
  namaArab: string;
  hukum: string;
  deskripsi: string;
  syaratSyarat: string[];
  ketentuanKhusus: string[];
  langkahPraktis: string[];
  adabPenting: string;
}

export interface TakbirShalatJenazah {
  takbirKe: number;
  namaRukun: string;
  bacaanArab: string;
  transliterasi: string;
  terjemahan: string;
  penjelasanSyariat: string;
  variasiDoa?: {
    kondisi: string;
    bacaanArab: string;
    transliterasi: string;
    terjemahan: string;
  }[];
}

export interface KetentuanIslamJenazah {
  id: string;
  aspek: string;
  judul: string;
  dalilRujukan: string;
  penjelasan: string;
  anjuranSunnah: string[];
  laranganSyariat: string[];
}

export interface HikmahJenazahItem {
  id: string;
  dimensi: 'Bagi Jenazah' | 'Bagi Keluarga Duka' | 'Bagi Umat/Masyarakat' | 'Bagi Pembentukan Karakter Pelajar';
  judul: string;
  deskripsi: string;
  dalilPendukung: string;
  dampakPraktis: string;
}

export interface KuisHotsJenazahItem {
  id: string;
  nomor: number;
  kasus: string;
  pertanyaan: string;
  pilihan: string[];
  kunciJawaban: number;
  pembahasan: string;
}

export interface MateriKelas8Sem1Bab4 {
  id: string;
  babNumber: number;
  fase: string;
  kelas: string;
  semester: string;
  elemenCp: 'Fikih';
  judulBab: string;
  subJudul: string;
  pengantar: {
    apersepsi: string;
    hakMuslimTerhadapMuslim: {
      sumber: string;
      teksArab: string;
      terjemahan: string;
      penjelasan: string;
    };
    keutamaanPahalaDuaQirath: {
      sumber: string;
      teksArab: string;
      terjemahan: string;
      penjelasan: string;
    };
  };
  kewajibanJenazah: {
    definisiFardhuKifayah: string;
    perbedaanDenganFardhuAin: string;
    tahapanKewajiban: TahapPengurusanJenazah[];
    pengecualianMatiSyahid: {
      judul: string;
      syahidMarakah: string;
      syahidAkhirat: string;
      hukumPengurusan: string;
      dalil: string;
    };
  };
  tataCaraShalatJenazah: {
    pengantar: string;
    syaratSah: string[];
    rukunShalatJenazah: string[];
    posisiImamDanMakmum: {
      jenazahLakiLaki: string;
      jenazahPerempuan: string;
      banyakJenazah: string;
      posisiShafMakmum: string;
    };
    tahapanEmpatTakbir: TakbirShalatJenazah[];
    shalatGhaib: {
      pengertian: string;
      hukumDanKetentuan: string;
      kisahNabiShalatGhaibRajaNajasyi: string;
      perbedaanDenganShalatJenazahBiasa: string;
    };
  };
  ketentuanIslamPenyelenggaraan: {
    pengantar: string;
    aspekKetentuan: KetentuanIslamJenazah[];
    laranganNiyahah: {
      judul: string;
      pengertianNiyahah: string;
      bahayaDanHukum: string;
      dalilHadis: string;
      perbedaanMenangisWajarVsNiyahah: string;
    };
    adabTakziahMelayat: {
      judul: string;
      tujuanTakziah: string;
      waktuDisunnahkan: string;
      amalanDianjurkan: string[];
      hadisMakananKeluargaJafar: string;
    };
    adabZiarahKubur: {
      judul: string;
      sejarahPensyariatan: string;
      doaMasukPekuburan: {
        teksArab: string;
        latin: string;
        terjemahan: string;
      };
      adabDanLarangan: string[];
    };
  };
  hikmahPenyelenggaraan: {
    pengantar: string;
    daftarHikmah: HikmahJenazahItem[];
  };
  studiKasusRemaja: {
    id: string;
    judul: string;
    skenario: string;
    pertanyaanDilema: string;
    analisisSyariat: string;
    solusiPraktis: string;
  }[];
  checklistRefleksiDiri: {
    id: number;
    kategori: string;
    pernyataan: string;
  }[];
  kuisHots: KuisHotsJenazahItem[];
}

export const MATERI_KELAS_8_SEM_1_BAB_4: MateriKelas8Sem1Bab4 = {
  id: 'k8-bab4',
  babNumber: 4,
  fase: 'Fase D',
  kelas: 'Kelas VIII',
  semester: 'Semester 1',
  elemenCp: 'Fikih',
  judulBab: 'Menerapkan Ketentuan Kewajiban terhadap Penyelenggaraan Jenazah',
  subJudul: 'Menunaikan Hak Sesama Muslim dengan Adab, Syariat, dan Tata Cara Penyelenggaraan Jenazah Sesuai Sunnah Rasulullah Saw.',
  pengantar: {
    apersepsi: 'Setiap jiwa yang bernyawa pasti akan mengalami kematian (Q.S. Āli \'Imrān: 185). Kematian bukanlah akhir dari segalanya, melainkan gerbang perpindahan dari alam dunia yang fana menuju alam barzakh (kubur). Ketika seorang muslim meninggal dunia, tanggung jawab sosial dan keagamaan berpindah ke pundak kaum muslimin yang masih hidup melalui kewajiban fardhu kifayah. Mengurus jenazah dengan penuh keikhlasan, kehati-hatian, menjaga rahasia kehormatan mayit, dan mengikuti tata cara sunnah Rasulullah Saw. merupakan bukti nyata persaudaraan Islam (ukhuwah islamiyah) sekaligus peringatan terbaik bagi manusia untuk senantiasa mempersiapkan bekal amal shalih.',
    hakMuslimTerhadapMuslim: {
      sumber: 'H.R. Muslim No. 2162 dari Abu Hurairah r.a.',
      teksArab: 'حَقُّ الْمُسْلِمِ عَلَى الْمُسْلِمِ سِتٌّ: إِذَا لَقِيتَهُ فَسَلِّمْ عَلَيْهِ، وَإِذَا دَعَاكَ فَأَجِبْهُ، وَإِذَا اسْتَنْصَحَكَ فَانْصَحْ لَهُ، وَإِذَا عَطَسَ فَحَمِدَ اللَّهَ فَسَمِّتْهُ، وَإِذَا مَرِضَ فَعُدْهُ، وَإِذَا مَاتَ فَاتَّبِعْهُ',
      terjemahan: 'Hak seorang muslim terhadap sesama muslim ada enam: Apabila engkau bertemu dengannya maka ucapkanlah salam; apabila ia mengundangmu maka penuhilah undangannya; apabila ia meminta nasihat kepadamu maka berilah nasihat; apabila ia bersin lalu memuji Allah (mengucap hamdalah) maka doakanlah (dengan tasymit); apabila ia sakit maka jenguklah; dan apabila ia meninggal dunia maka iringilah jenazahnya.',
      penjelasan: 'Poin keenam "wa idzā māta fattabi\'hu" (apabila ia meninggal maka antarkan jenazahnya) mencakup seluruh rangkaian pengurusan jenazah mulai dari merawat, menyalatkan, hingga mengantarkannya ke tempat pemakaman.'
    },
    keutamaanPahalaDuaQirath: {
      sumber: 'H.R. Al-Bukhari No. 1325 & Muslim No. 945 dari Abu Hurairah r.a.',
      teksArab: 'مَنْ شَهِدَ الْجَنَازَةَ حَتَّى يُصَلَّى عَلَيْهَا فَلَهُ قِيرَاطٌ، وَمَنْ شَهِدَ حَتَّى تُدْفَنَ كَانَ لَهُ قِيرَاطَانِ. قِيلَ: وَمَا الْقِيرَاطَانِ؟ قَالَ: مِثْلُ الْجَبَلَيْنِ الْعَظِيمَيْنِ',
      terjemahan: 'Barangsiapa menghadiri jenazah hingga dishalatkan, maka baginya pahala satu qirath. Dan barangsiapa yang menghadirinya hingga selesai dimakamkan, maka baginya pahala dua qirath. Ditanyakan kepada Rasulullah: "Apakah dua qirath itu?" Beliau menjawab: "Semisal dua gunung yang sangat besar (seperti Gunung Uhud)."',
      penjelasan: 'Pahala yang Allah sediakan bagi hamba-Nya yang menyalatkan dan mengantarkan jenazah sangatlah agung, melatih kepedulian sosial, serta mengingatkan diri pada hakikat kefanaan kehidupan duniawi.'
    }
  },
  kewajibanJenazah: {
    definisiFardhuKifayah: 'Fardhu Kifayah adalah kewajiban syariat yang dibebankan kepada umat Islam secara kolektif (masyarakat umum). Apabila telah ada sebagian muslim yang melaksanakannya dengan benar, maka gugurlah kewajiban dan dosa bagi muslim lainnya di wilayah tersebut. Namun, jika tidak ada seorang pun yang melaksanakannya, maka seluruh warga muslim di lingkungan tersebut menanggung dosa bersama di hadapan Allah Swt.',
    perbedaanDenganFardhuAin: 'Fardhu \'Ain adalah kewajiban individual yang wajib dikerjakan oleh setiap mukallaf dan tidak dapat digantikan orang lain (misal: shalat fardhu lima waktu dan puasa Ramadhan). Sedangkan Fardhu Kifayah menitikberatkan pada tercapainya tujuan perbuatan itu di tengah masyarakat (seperti pengurusan jenazah, menjawab salam kelompok, dan mendalami ilmu kedokteran/agama).',
    tahapanKewajiban: [
      {
        id: 'tahap-1-memandikan',
        tahapNumber: 1,
        nama: 'Memandikan Jenazah',
        namaArab: 'غَسْلُ الْمَيِّتِ (Ghasl al-Mayyit)',
        hukum: 'Fardhu Kifayah',
        deskripsi: 'Membersihkan dan menyucikan seluruh tubuh jenazah dari najis dan kotoran dengan air suci menyucikan yang dicampur daun bidara atau sabun pembersih, diakhiri dengan air campuran kapur barus.',
        syaratSyarat: [
          'Jenazah beragama Islam.',
          'Tubuh/jasadnya masih ada, walaupun hanya sebagian yang dapat ditemukan (akibat kecelakaan/bencana).',
          'Bukan mati syahid dalam peperangan membela agama Allah (syahid ma\'rakah).',
          'Bagi bayi yang keguguran: jika sudah berusia 4 bulan ke atas (bernyawa) atau tampak tanda-tanda kehidupan (menangis/bergerak), wajib dimandikan.'
        ],
        ketentuanKhusus: [
          'Orang yang memandikan harus beragama Islam, berakal, baligh, amanah, dan terpercaya mampu menjaga rahasia aib jenazah.',
          'Jenazah laki-laki dimandikan oleh laki-laki, jenazah perempuan dimandikan oleh perempuan.',
          'Suami boleh memandikan jenazah istrinya dan istri boleh memandikan jenazah suaminya (karena ikatan pernikahan yang suci).',
          'Mahram boleh memandikan jika sejenis atau mahram mu\'abbad dengan tetap menjaga batas aurat.',
          'Anak kecil laki-laki atau perempuan yang belum menimbulkan syahwat boleh dimandikan oleh laki-laki maupun perempuan.'
        ],
        langkahPraktis: [
          'Tempatkan jenazah di tempat yang tertutup dari pandangan umum dan terlindung dari terik matahari/hujan.',
          'Tutup aurat jenazah dengan kain basahan tipis namun tidak tembus pandang (aurat laki-laki antara pusar dan lutut, perempuan antara dada hingga lutut/seluruh tubuh selain wajah dan telapak tangan).',
          'Angkat sedikit kepala jenazah, urut bagian perutnya secara perlahan untuk mengeluarkan sisa kotoran, lalu bersihkan qubul dan dubur dengan sarung tangan kain.',
          'Wudhukan jenazah sebagaimana wudhu shalat, tanpa memasukkan air ke dalam mulut dan hidungnya (cukup bersihkan gigi dan lubang hidung dengan jari berbalut kain basah).',
          'Basuh seluruh tubuh jenazah mulai dari sisi kanan, kemudian sisi kiri, menggunakan air bersih bercampur daun bidara atau sabun.',
          'Bilas air berkali-kali secara ganjil (3, 5, atau 7 kali) hingga bersih.',
          'Pada basuhan terakhir, siram dengan air yang diberi sedikit kapur barus atau wewangian non-alkohol untuk memberikan aroma harum dan menyegarkan jasad.',
          'Keringkan tubuh jenazah dengan handuk kering yang bersih dan ganti kain basahannya dengan kain penutup kering yang bersih sebelum dikafani.'
        ],
        adabPenting: 'Orang yang memandikan jenazah WAJIB merahasiakan segala aib fisik jenazah (seperti bekas luka, cacat, atau perubahan warna kulit). Rasulullah Saw. bersabda: "Barangsiapa memandikan mayit lalu menutup aibnya, niscaya Allah mengampuni empat puluh dosanya." (H.R. Al-Hakim).'
      },
      {
        id: 'tahap-2-mengafani',
        tahapNumber: 2,
        nama: 'Mengafani Jenazah',
        namaArab: 'تَكْفِينُ الْمَيِّتِ (Takfīn al-Mayyit)',
        hukum: 'Fardhu Kifayah',
        deskripsi: 'Membungkus jasad jenazah yang telah dimandikan dengan kain kafan yang suci, bersih, dan menutupi seluruh tubuhnya sebelum dishalatkan dan dimakamkan.',
        syaratSyarat: [
          'Kain kafan diperoleh dari harta peninggalan jenazah sebelum dibagikan sebagai warisan atau dibayarkan wasiat.',
          'Disunnahkan kain kafan berwarna putih bersih, terbuat dari bahan yang sederhana (tidak mewah/sutera bagi laki-laki), dan diberi wewangian/kapur barus.',
          'Kain kafan harus cukup lebar dan panjang untuk membungkus seluruh tubuh jenazah dan disisakan sedikit di ujung kepala dan ujung kaki untuk diikat.',
          'Jumlah lapis kain kafan: Disunnahkan 3 (tiga) lapis kain untuk jenazah laki-laki tanpa baju kurung dan surban; serta 5 (lima) lapis kain untuk jenazah perempuan (kain basahan penutup bawah, baju kurung, kerudung/khimar, dan dua lembar kain pembungkus luar).'
        ],
        ketentuanKhusus: [
          'Jumlah tali pengikat kafan disunnahkan ganjil (biasanya 3, 5, atau 7 tali) diposisikan di atas kepala, leher, dada/pinggang, lutut, dan bawah kaki.',
          'Simpul ikatan kafan diletakkan di sebelah sisi kiri tubuh jenazah, agar mudah dilepas ketika jenazah dibaringkan miring ke kanan menghadap kiblat di dalam liang lahat.',
          'Beri kapas yang telah ditaburi bubuk kapur barus/minyak wangi pada lubang-lubang tubuh (hidung, telinga, mata, mulut) dan anggota sujud (dahi, hidung, kedua telapak tangan, kedua lutut, dan ujung jari kaki).'
        ],
        langkahPraktis: [
          'Bentangkan tali-tali pengikat kain kafan di atas lantai/meja pembaringan secara berjarak.',
          'Hamparkan lembar demi lembar kain kafan di atas tali tersebut, lalu taburkan serbuk kapur barus atau minyak wangi gaharu/cendana pada setiap lapisan.',
          'Angkat jenazah yang telah dimandikan dan dikeringkan secara hati-hati, lalu baringkan di atas hamparan kain kafan dalam posisi telentang dengan kedua tangan disedekapkan di atas dada (tangan kanan di atas tangan kiri).',
          'Tutupkan kapas wewangian pada lubang-lubang dan anggota sujud jenazah.',
          'Lipat lembaran kain kafan sisi kiri ke sisi kanan mayit, lalu sisi kanan ke sisi kiri lapis demi lapis hingga tertutup rapat.',
          'Ikat simpul hidup di sisi kiri tubuh jenazah pada tali-tali yang telah dipersiapkan.',
          'Kafan bagian wajah boleh dibuka sejenak untuk memberikan kesempatan keluarga inti mencium dan melihat wajah jenazah untuk terakhir kalinya sebelum dishalatkan.'
        ],
        adabPenting: 'Tidak berlebih-lebihan dalam memilih kain kafan. Rasulullah Saw. bersabda: "Janganlah kalian berlebih-lebihan dalam memilih kain kafan, karena sesungguhnya kain kafan itu akan segera rusak/hancur." (H.R. Abu Dawud).'
      },
      {
        id: 'tahap-3-menyalatkan',
        tahapNumber: 3,
        nama: 'Menyalatkan Jenazah',
        namaArab: 'صَلَاةُ الْجَنَازَةِ (Shalāt al-Janāzah)',
        hukum: 'Fardhu Kifayah',
        deskripsi: 'Ibadah shalat permohonan doa dan syafaat khusus untuk jenazah muslim yang dilakukan dengan berdiri tegak tanpa ruku\', i\'tidal, sujud, dan tahiyyat, yang di dalamnya terdapat 4 kali takbir.',
        syaratSyarat: [
          'Suci dari hadas besar dan kecil, serta pakaian dan tempat suci dari najis.',
          'Menutup aurat dan menghadap kiblat sebagaimana syarat shalat fardhu biasa.',
          'Jenazah telah selesai dimandikan dan dikafani dengan sempurna.',
          'Jenazah diletakkan di hadapan orang yang menyalatkan (kecuali pada shalat ghaib).',
          'Jenazah beragama Islam.'
        ],
        ketentuanKhusus: [
          'Imam berdiri di depan lurus dengan kepala jenazah jika jenazah laki-laki.',
          'Imam berdiri di depan lurus dengan arah pinggang/tengah badan jenazah jika jenazah perempuan.',
          'Disunnahkan memperbanyak jumlah jamaah dan mengatur shaf minimal 3 shaf makmum.',
          'Dilakukan secara berjamaah, namun sah pula jika dikerjakan secara munfarid (sendirian).'
        ],
        langkahPraktis: [
          'Takbir Pertama (Takbiratul Ihram): Berniat menyalatkan jenazah lalu membaca Surat Al-Fatihah.',
          'Takbir Kedua: Membaca shalawat kepada Nabi Muhammad Saw. (disunnahkan Shalawat Ibrahimiyah).',
          'Takbir Ketiga: Membaca doa pengampunan dan rahmat khusus untuk jenazah (Allāhummaghfir lahu warhamhu...).',
          'Takbir Keempat: Membaca doa penutup untuk kaum muslimin dan keluarga yang ditinggalkan (Allāhumma lā tahrimnā ajrahu...), kemudian diakhiri dengan salam.'
        ],
        adabPenting: 'Semakin banyak orang beriman yang menyalatkan jenazah dengan ikhlas (mencapai 40 atau 100 orang tanpa berbuat syirik), maka Allah Swt. akan mengabulkan syafaat dan doa mereka untuk sang mayit (H.R. Muslim).'
      },
      {
        id: 'tahap-4-menguburkan',
        tahapNumber: 4,
        nama: 'Menguburkan Jenazah',
        namaArab: 'دَفْنُ الْمَيِّتِ (Dafn al-Mayyit)',
        hukum: 'Fardhu Kifayah',
        deskripsi: 'Memasukkan dan membaringkan jasad jenazah ke dalam liang kubur yang telah dipersiapkan, lalu menutupnya kembali dengan tanah sesuai tuntunan sunnah Rasulullah Saw.',
        syaratSyarat: [
          'Kedalaman liang kubur minimal setinggi dada orang dewasa (sekitar 1,5 hingga 2 meter) dan lebar yang cukup, agar bau jasad tidak tercium keluar dan aman dari galian binatang buas.',
          'Liang kubur dibuat menghadap ke arah kiblat.',
          'Dua bentuk liang kubur: Liang Lahat (dibuat ceruk/liang kecil di dasar dinding sebelah barat/arah kiblat jika tanahnya keras/kokoh) atau Liang Syaqq/Cempuri (dibuat parit kecil tepat di tengah dasar kubur jika tanahnya gembur/berpasir).'
        ],
        ketentuanKhusus: [
          'Disunnahkan menyegerakan pemakaman jenazah (isra\' bil-janazah) dan tidak menunda-nundanya tanpa alasan syar\'i yang mendesak.',
          'Jenazah dimasukkan ke dalam liang kubur dari arah kaki kuburan secara perlahan dan penuh kelembutan.',
          'Orang yang meletakkan jenazah ke liang lahat membaca: "Bismillāhi wa \'alā millati rasūlillāh" (Dengan nama Allah dan atas ajaran agama Rasulullah).',
          'Jenazah dibaringkan miring ke sebelah kanan menghadap kiblat.',
          'Buka ikatan tali kafan di bagian kepala, leher, dan kaki, lalu singkapkan sedikit kafan di bagian pipi agar pipi jenazah menyentuh tanah.',
          'Ganjal punggung dan kepala jenazah dengan bulatan tanah liat padat (bantalan tanah) agar posisi miring menghadap kiblat tidak bergeser atau telentang kembali.'
        ],
        langkahPraktis: [
          'Tutup liang lahat dengan papan kayu atau bambu rapat agar tanah timbunan tidak langsung menimpa tubuh jenazah.',
          'Timbun liang kubur dengan tanah galian perlahan-lahan hingga rata, dan buat gundukan sekadarnya setinggi satu jengkal dari permukaan tanah.',
          'Beri tanda patok batu/nisan sederhana di sisi kepala dan kaki sebagai penanda agar kubur tidak terinjak atau digali kembali.',
          'Siram permukaan kubur dengan air dingin dan taburkan sedikit kerikil/tanah.',
          'Mendoakan jenazah (istighfar dan memohonkan ketetapan hati dalam menjawab pertanyaan Malaikat Munkar dan Nakir) serta memberikan talqin pengingat tauhid.'
        ],
        adabPenting: 'Dilarang keras menyemen permanen, membangun bangunan kubah/rumah megah di atas kuburan, menuliskan puji-pujian berlebihan, atau duduk dan menginjak kuburan (H.R. Muslim No. 970).'
      }
    ],
    pengecualianMatiSyahid: {
      judul: 'Ketentuan Khusus bagi Muslim yang Mati Syahid (Syahid Ma\'rakah)',
      syahidMarakah: 'Muslim yang gugur di medan perang demi menegakkan kalimat Allah (li i\'lā\'i kalimatillāh) melawan musuh.',
      syahidAkhirat: 'Muslim yang meninggal karena musibah tertentu (wabah penyakit, tenggelam, melahirkan, tertimpa reruntuhan, atau sakit perut) namun di luar medan peperangan.',
      hukumPengurusan: 'Jenazah Syahid Ma\'rakah TIDAK DIMANDIKAN dan TIDAK DISHALATKAN. Jasadnya langsung dimakamkan bersama pakaian yang melekat dan bercak darah syahidnya, karena darah tersebut kelak di hari kiamat akan memancarkan aroma wangi misik kesturi (H.R. Bukhari). Adapun Syahid Akhirat tetap wajib dimandikan, dikafani, dishalatkan, dan dikuburkan seperti biasa.',
      dalil: 'Rasulullah Saw. memerintahkan agar para syuhada perang Uhud dikuburkan bersama darah mereka, tidak dimandikan, dan tidak dishalatkan. (H.R. Al-Bukhari No. 1343).'
    }
  },
  tataCaraShalatJenazah: {
    pengantar: 'Shalat jenazah adalah shalat fardhu kifayah yang memiliki struktur unik karena tidak terdapat rukuk, sujud, i\'tidal, ataupun duduk tasyahud. Seluruh gerakan dilakukan dalam posisi berdiri sempurna dengan empat kali takbir yang diselingi bacaan doa khusus.',
    syaratSah: [
      'Suci dari hadas besar dan kecil (berwudhu atau bertayamum jika ada uzur).',
      'Suci badan, pakaian, dan tempat shalat dari segala najis.',
      'Menutup aurat dan menghadap arah kiblat.',
      'Jenazah telah dimandikan dan dikafani secara sempurna.',
      'Jenazah muslim diletakkan di depan imam dan jamaah shalat (kecuali pada pelaksanaan Shalat Ghaib).'
    ],
    rukunShalatJenazah: [
      '1. Niat ikhlas karena Allah Swt.',
      '2. Berdiri bagi yang mampu (qiyam).',
      '3. Empat kali takbir (termasuk takbiratul ihram).',
      '4. Membaca Surat Al-Fatihah setelah takbir pertama.',
      '5. Membaca Shalawat atas Nabi Muhammad Saw. setelah takbir kedua.',
      '6. Membaca Doa khusus untuk jenazah setelah takbir ketiga.',
      '7. Membaca Salam setelah takbir keempat.'
    ],
    posisiImamDanMakmum: {
      jenazahLakiLaki: 'Imam berdiri sejajar lurus dengan KEPALA jenazah.',
      jenazahPerempuan: 'Imam berdiri sejajar lurus dengan BAGIAN TENGAH / PINGGANG jenazah.',
      banyakJenazah: 'Jika terdapat beberapa jenazah sekaligus, letakkan jenazah laki-laki paling dekat dengan imam, diikuti jenazah anak laki-laki, kemudian jenazah perempuan dewasa, dan jenazah anak perempuan paling jauh dari imam.',
      posisiShafMakmum: 'Disunnahkan shaf makmum dibuat ganjil (minimal 3 shaf), meskipun jumlah jamaah sedikit.'
    },
    tahapanEmpatTakbir: [
      {
        takbirKe: 1,
        namaRukun: 'Takbir Pertama (Takbiratul Ihram) & Membaca Surat Al-Fatihah',
        bacaanArab: 'أُصَلِّي عَلَى هَذَا الْمَيِّتِ أَرْبَعَ تَكْبِيرَاتٍ فَرْضَ الْكِفَايَةِ (إِمَامًا / مَأْمُومًا) لِلَّهِ تَعَالَى\n\nبِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ . الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ . الرَّحْمَٰنِ الرَّحِيمِ . مَالِكِ يَوْمِ الدِّينِ . إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ . اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ . صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ . آمِينَ',
        transliterasi: 'Ushallī \'alā hādzal mayyiti arba\'a takbīrātin fardhal kifāyati (imāman / ma\'mūman) lillāhi ta\'ālā. Allāhu Akbar. Bismillāhir-rahmānir-rahīm...',
        terjemahan: 'Aku berniat shalat atas jenazah ini empat takbir fardhu kifayah (sebagai imam/makmum) karena Allah Ta\'ala. Allah Maha Besar. (Dilanjutkan membaca Surah Al-Fatihah secara sirr/perlahan).',
        penjelasanSyariat: 'Niat dihadirkan dalam hati berbarengan dengan ucapan takbiratul ihram sambil mengangkat kedua tangan setinggi bahu/telinga. Setelah takbir pertama, langsung membaca Surat Al-Fatihah secara sirr (suara lirih). Tidak disunnahkan membaca doa iftitah dan tidak membaca surat pendek Al-Qur\'an.',
        variasiDoa: [
          {
            kondisi: 'Jika Jenazah Perempuan',
            bacaanArab: 'أُصَلِّي عَلَى هَذِهِ الْمَيِّتَةِ أَرْبَعَ تَكْبِيرَاتٍ فَرْضَ الْكِفَايَةِ (إِمَامًا / مَأْمُومًا) لِلَّهِ تَعَالَى',
            transliterasi: 'Ushallī \'alā hādzihil mayyitati arba\'a takbīrātin fardhal kifāyati (imāman / ma\'mūman) lillāhi ta\'ālā.',
            terjemahan: 'Aku berniat shalat atas jenazah perempuan ini empat takbir fardhu kifayah karena Allah Ta\'ala.'
          },
          {
            kondisi: 'Jika Jenazah Anak-Anak',
            bacaanArab: 'أُصَلِّي عَلَى هَذَا الْمَيِّتِ الطِّفْلِ أَرْبَعَ تَكْبِيرَاتٍ فَرْضَ الْكِفَايَةِ لِلَّهِ تَعَالَى',
            transliterasi: 'Ushallī \'alā hādzal mayyitit-thifli arba\'a takbīrātin fardhal kifāyati lillāhi ta\'ālā.',
            terjemahan: 'Aku berniat shalat atas jenazah anak kecil ini empat takbir fardhu kifayah karena Allah Ta\'ala.'
          }
        ]
      },
      {
        takbirKe: 2,
        namaRukun: 'Takbir Kedua & Membaca Shalawat kepada Nabi Muhammad Saw.',
        bacaanArab: 'اللَّهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ ، كَمَا صَلَّيْتَ عَلَى سَيِّدِنَا إِبْرَاهِيمَ وَعَلَى آلِ سَيِّدِنَا إِبْرَاهِيمَ ، وَبَارِكْ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ ، كَمَا بَارَكْتَ عَلَى سَيِّدِنَا إِبْرَاهِيمَ وَعَلَى آلِ سَيِّدِنَا إِبْرَاهِيمَ ، فِي الْعَالَمِينَ إِنَّكَ حَمِيدٌ مَجِيدٌ',
        transliterasi: 'Allāhumma shalli \'alā sayyidinā Muhammad wa \'alā āli sayyidinā Muhammad, kamā shallayta \'alā sayyidinā Ibrāhīm wa \'alā āli sayyidinā Ibrāhīm, wa bārik \'alā sayyidinā Muhammad wa \'alā āli sayyidinā Muhammad, kamā bārakta \'alā sayyidinā Ibrāhīm wa \'alā āli sayyidinā Ibrāhīm, fil-\'ālamīna innaka hamīdum majīd.',
        terjemahan: 'Ya Allah, limpahkanlah rahmat kepada junjungan kami Nabi Muhammad dan kepada keluarga Nabi Muhammad, sebagaimana Engkau telah melimpahkan rahmat kepada Nabi Ibrahim dan keluarga Nabi Ibrahim. Dan berkahilah Nabi Muhammad dan keluarga Nabi Muhammad, sebagaimana Engkau telah memberkahi Nabi Ibrahim dan keluarga Nabi Ibrahim. Sesungguhnya di seluruh alam semesta Engkau Maha Terpuji lagi Maha Mulia.',
        penjelasanSyariat: 'Setelah takbir kedua, wajib membaca shalawat kepada Nabi Muhammad Saw. Minimal membaca lafaz ringkas: "Allāhumma shalli \'alā Sayyidinā Muhammad", namun disunnahkan menyempurnakannya dengan Shalawat Ibrahimiyah.'
      },
      {
        takbirKe: 3,
        namaRukun: 'Takbir Ketiga & Membaca Doa Pengampunan untuk Jenazah',
        bacaanArab: 'اللَّهُمَّ اغْفِرْ لَهُ وَارْحَمْهُ وَعَافِهِ وَاعْفُ عَنْهُ ، وَأَكْرِمْ نُزُلَهُ ، وَوَسِّعْ مَدْخَلَهُ ، وَاغْسِلْهُ بِالْمَاءِ وَالثَّلْجِ وَالْبَرَدِ ، وَنَقِّهِ مِنَ الْخَطَايَا كَمَا نَقَّيْتَ الثَّوْبَ الأَبْيَضَ مِنَ الدَّنَسِ ، وَأَبْدِلْهُ دَارًا خَيْرًا مِنْ دَارِهِ ، وَأَهْلاً خَيْرًا مِنْ أَهْلِهِ ، وَزَوْجًا خَيْرًا مِنْ زَوْجِهِ ، وَأَدْخِلْهُ الْجَنَّةَ ، وَأَعِذْهُ مِنْ عَذَابِ الْقَبْرِ وَمِنْ عَذَابِ النَّارِ',
        transliterasi: 'Allāhummaghfir lahu warhamhu wa \'āfihi wa\'fu \'anhu, wa akrim nuzulahu, wa wassi\' madkhalahu, waghsilhu bil-mā\'i wats-tsalji wal-barad, wa naqqihi minal-khathāyā kamā naqqaytats-tsawbal-abyadha minad-danas, wa abdilhu dāran khayran min dārihi, wa ahlan khayran min ahlihi, wa zawjan khayran min zawjihi, wa adkhilhul-jannata, wa a\'idzhu min \'adzābil-qabri wa min \'adzābin-nār.',
        terjemahan: 'Ya Allah! Ampunilah dia, berilah rahmat kepadanya, selamatkanlah dia (dari siksa kubur), dan maafkanlah kesalahannya. Muliakanlah tempat persinggahannya, lapangkanlah pintu masuknya (kuburnya), basuhlah dia dengan air, salju, dan embun yang menyejukkan. Bersihkanlah dia dari segala dosa sebagaimana Engkau membersihkan kain putih dari kotoran. Gantilah untuknya rumah yang lebih baik daripada rumahnya di dunia, keluarga yang lebih baik daripada keluarganya, dan pasangan yang lebih baik daripada pasangannya. Masukkanlah dia ke dalam surga, dan lindungilah dia dari azab kubur dan azab neraka.',
        penjelasanSyariat: 'Ini adalah doa inti shalat jenazah. Jika jenazah perempuan, dhomir (kata ganti) "hu" diganti menjadi "hā" (Allāhummaghfir lahā warhamhā...). Jika jenazahnya dua orang diganti "humā", dan jika banyak diganti "hum".',
        variasiDoa: [
          {
            kondisi: 'Jika Jenazah Perempuan',
            bacaanArab: 'اللَّهُمَّ اغْفِرْ لَهَا وَارْحَمْهَا وَعَافِهَا وَاعْفُ عَنْهَا وَأَكْرِمْ نُزُلَهَا وَوَسِّعْ مَدْخَلَهَا...',
            transliterasi: 'Allāhummaghfir lahā warhamhā wa \'āfihā wa\'fu \'anhā wa akrim nuzulahā wa wassi\' madkhalahā...',
            terjemahan: 'Ya Allah ampunilah dia (perempuan), rahmatilah dia, maafkanlah kesalahannya, muliakanlah tempat tinggalnya...'
          },
          {
            kondisi: 'Jika Jenazah Anak Kecil (Belum Baligh)',
            bacaanArab: 'اللَّهُمَّ اجْعَلْهُ لِوَالِدَيْهِ فَرَطًا وَسَلَفًا وَأَجْرًا وَذُخْرًا ، وَثَقِّلْ بِهِ مَوَازِينَهُمَا ، وَأَفْرِغِ الصَّبْرَ عَلَى قُلُوبِهِمَا',
            transliterasi: 'Allāhummaj\'alhu liwālidayhi farathan wa salafan wa ajran wa dzukhran, wa tsaqqil bihi mawāzīnahumā, wa afrighish-shabra \'alā qulūbihimā.',
            terjemahan: 'Ya Allah, jadikanlah anak ini sebagai pelopor kebajikan, simpanan pahala, dan tabungan akhirat bagi kedua orang tuanya. Beratkanlah timbangan kebaikan keduanya melaluinya, dan curahkanlah kesabaran ke dalam hati keduanya.'
          }
        ]
      },
      {
        takbirKe: 4,
        namaRukun: 'Takbir Keempat & Doa Penutup serta Salam',
        bacaanArab: 'اللَّهُمَّ لاَ تَحْرِمْنَا أَجْرَهُ وَلاَ تَفْتِنَّا بَعْدَهُ وَاغْفِرْ لَنَا وَلَهُ\n\nالسَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ (إِلَى الْيَمِينِ وَالشِّمَالِ)',
        transliterasi: 'Allāhumma lā tahrimnā ajrahu wa lā taftinnā ba\'dahu waghfir lanā wa lahu. As-Salāmu \'alaikum wa rahmatullāhi wa barakātuh (ke kanan dan ke kiri).',
        terjemahan: 'Ya Allah, janganlah Engkau halangi kami untuk memperoleh pahalanya, dan janganlah Engkau timbulkan fitnah/ujian berat bagi kami sepeninggalnya, serta ampunilah dosa kami dan dosanya. Semoga keselamatan, rahmat Allah, dan berkah-Nya tercurah kepada kalian semua.',
        penjelasanSyariat: 'Setelah takbir keempat, disunnahkan membaca doa tersebut, lalu menoleh ke kanan dan ke kiri seraya mengucapkan salam. Salam adalah rukun penutup yang menyudahi shalat jenazah.'
      }
    ],
    shalatGhaib: {
      pengertian: 'Shalat Ghaib adalah shalat jenazah yang dilaksanakan atas mayit muslim yang berada di tempat jauh (kota/negeri lain) atau jenazah yang jasadnya tidak hadir di hadapan orang yang menyalatkan (misal korban tenggelam di laut, hilang dalam bencana, atau kecelakaan pesawat).',
      hukumDanKetentuan: 'Hukumnya Sunnah Mu\'akkadah / Sah menurut mazhab Syafi\'i dan Hanbali bagi orang yang berada di luar daerah atau belum sempat menyalatkan secara langsung.',
      kisahNabiShalatGhaibRajaNajasyi: 'Rasulullah Saw. mengumumkan kabar duka wafatnya Raja Najasyi (Ash-hamah bin Abjar), penguasa Habasyah yang memeluk Islam dan melindungi kaum muslimin muhajirin. Beliau mengajak para sahabat keluar ke lapangan mushalla, merapikan shaf, lalu bertakbir empat kali menyalatkan Raja Najasyi secara ghaib (H.R. Al-Bukhari No. 1327 & Muslim No. 951).',
      perbedaanDenganShalatJenazahBiasa: 'Tata cara, rukun, jumlah takbir, dan bacaan shalat ghaib sama persis dengan shalat jenazah biasa. Perbedaannya hanya terletak pada niat (menyebutkan nama mayit atau "mayit ghaib") dan ketidakhadiran jasad di hadapan imam.'
    }
  },
  ketentuanIslamPenyelenggaraan: {
    pengantar: 'Syariat Islam mengatur adab dan ketentuan mulia saat menghadapi kematian seseorang, mulai dari saat sakaratul maut hingga setelah pemakaman, demi menjaga ketenangan jiwa keluarga duka dan kemurnian tauhid umat Islam.',
    aspekKetentuan: [
      {
        id: 'aspek-1-saat-wafat',
        aspek: 'Tindakan Awal',
        judul: 'Tindakan Cepat Saat Seseorang Baru Wafat',
        dalilRujukan: 'H.R. Muslim No. 920 dari Ummu Salamah r.a.',
        penjelasan: 'Keluarga dan kerabat terdekat dianjurkan segera melakukan tindakan penanganan awal penuh kelembutan.',
        anjuranSunnah: [
          'Mempejamkan kelopak mata jenazah seraya mendoakan kebaikan (karena pandangan mata mengikuti keluarnya ruh).',
          'Mengikat dagu/rahang ke ubun-ubun dengan kain pengikat agar mulut jenazah tidak terbuka.',
          'Melemaskan sendi-sendi jemari tangan dan kaki sebelum tubuh menjadi kaku.',
          'Menanggalkan pakaian dan menutupi seluruh tubuh jenazah dengan kain bersih yang tipis.',
          'Meletakkan jenazah di tempat yang agak tinggi (seperti dipan/ranjang) menghadap kiblat.',
          'Menyegerakan pelunasan hutang-hutang jenazah dari harta peninggalannya.'
        ],
        laranganSyariat: [
          'Membicarakan keburukan, kesalahan masa lalu, atau aib jenazah.',
          'Membiarkan tubuh jenazah terbuka auratnya di depan umum.',
          'Memotret jasad jenazah lalu menyebarkannya ke media sosial (melanggar hak kehormatan mayit).'
        ]
      },
      {
        id: 'aspek-2-larangan-niyahah',
        aspek: 'Adab Emosional',
        judul: 'Larangan Meratap Histeris (Niyahah) & Mengoyak Baju',
        dalilRujukan: 'H.R. Al-Bukhari No. 1294 & Muslim No. 103 dari Abdullah bin Mas\'ud r.a.',
        penjelasan: 'Islam memperbolehkan rasa sedih dan air mata yang menetes secara wajar sebagai fitrah kasih sayang manusia. Namun, Islam melarang keras jeritan histeris, menyobek pakaian, menampar pipi, atau meratapi takdir Allah seolah menolak ketetapan-Nya.',
        anjuranSunnah: [
          'Mengucapkan kalimat istirja\': "Innā lillāhi wa innā ilaihi rāji\'ūn" (Sesungguhnya kami milik Allah dan kepada-Nyalah kami kembali).',
          'Meneteskan air mata kesedihan secara tenang tanpa ratapan teriakan.',
          'Memperbanyak doa memohon ketabahan dan pahala sabar atas musibah yang menimpa.'
        ],
        laranganSyariat: [
          'Menjerit-jerit histeris (an-niyāhah).',
          'Memukul-mukul pipi, dada, atau merobek kerah pakaian.',
          'Mencabuti rambut kepala atau mengutuk nasib hidup.',
          'Menganggap bahwa kematian almarhum adalah kesialan.'
        ]
      },
      {
        id: 'aspek-3-takziah',
        aspek: 'Kepedulian Sosial',
        judul: 'Ketentuan & Adab Takziah (Melayat Keluarga Duka)',
        dalilRujukan: 'H.R. Ibnu Majah No. 1601 & Abu Dawud No. 3132',
        penjelasan: 'Takziah bermakna menghibur, menguatkan kesabaran, dan meringankan kesedihan keluarga yang ditinggalkan agar ridha menerima qadha dan qadar Allah Swt.',
        anjuranSunnah: [
          'Melayat dalam kurun waktu 3 (tiga) hari pertama pasca kematian untuk menghibur duka.',
          'Mendoakan almarhum dan memohonkan kesabaran serta pahala bagi keluarga yang berduka.',
          'Membawakan makanan siap santap bagi keluarga duka, bukan malah membebani mereka untuk memasak dan menjamu tamu (Sunnah Nabi pada wafatnya Ja\'far bin Abi Thalib).',
          'Berbusana sopan, rapi, dan menutup aurat, serta menjaga suasana hening penuh empati.'
        ],
        laranganSyariat: [
          'Bercanda tawa berlebihan, bermain gawai/gadget dengan suara keras, atau bergibah di rumah duka.',
          'Membebani keluarga duka dengan pesta hidangan mewah yang memberatkan keuangan mereka.',
          'Membuat keributan atau membicarakan urusan bisnis duniawi tanpa tenggang rasa.'
        ]
      },
      {
        id: 'aspek-4-ziarah-kubur',
        aspek: 'Pengingat Akhirat',
        judul: 'Ketentuan & Adab Ziarah Kubur Sesuai Sunnah',
        dalilRujukan: 'H.R. Muslim No. 977 dari Buraidah r.a.',
        penjelasan: 'Pada awal Islam, ziarah kubur sempat dilarang karena dikhawatirkan umat yang baru masuk Islam kembali ke tradisi jahiliyah (meminta berkah kepada kuburan leluhur). Setelah akidah tauhid kokoh, ziarah kubur dianjurkan untuk melembutkan hati dan mengingat kematian.',
        anjuranSunnah: [
          'Mengucapkan salam khusus saat memasuki kawasan pemakaman muslim.',
          'Mendoakan ampunan dan keselamatan bagi ahli kubur.',
          'Merenungkan hakikat kematian bahwa suatu saat kita pasti akan menyusul mereka ke liang lahat.',
          'Menjaga kebersihan dan tidak merusak tanaman atau nisan pemakaman.'
        ],
        laranganSyariat: [
          'Memohon doa, meminta kekayaan, atau meminta berkah/wangsit kepada penghuni kubur (perbuatan syirik akbar).',
          'Mencium, memeluk, sujud, atau thawaf mengelilingi makam.',
          'Duduk atau menginjak-injak gundukan kuburan muslim.',
          'Membangun bangunan semen megah atau kubah di atas kubur (H.R. Muslim).'
        ]
      }
    ],
    laranganNiyahah: {
      judul: 'Peringatan Keras terhadap Praktik Niyahah (Meratapi Jenazah)',
      pengertianNiyahah: 'An-Niyāhah adalah meratapi jenazah dengan menyebut-nyebut kebaikannya sambil berteriak histeris, menangis melolong-lolong, menampar wajah, atau mengoyak pakaian karena tidak terima dengan takdir kematian.',
      bahayaDanHukum: 'Hukumnya haram mutlak dan termasuk dosa besar serta tradisi jahiliyah yang diancam siksa keras di akhirat jika tidak bertaubat sebelum ajal menjemput.',
      dalilHadis: 'Rasulullah Saw. bersabda: "Bukan termasuk golongan kami orang yang memukul-mukul pipi, merobek-robek kerah baju, dan berteriak dengan teriakan jahiliyah (meratap histeris)." (H.R. Al-Bukhari No. 1294 & Muslim No. 103).',
      perbedaanMenangisWajarVsNiyahah: 'Ketika putra Rasulullah Saw. yang bernama Ibrahim wafat, air mata beliau menetes seraya bersabda: "Sesungguhnya mata ini meneteskan air mata dan hati ini bersedih, namun kami tidak mengatakan kecuali perkataan yang diridhai oleh Rabb kami." (H.R. Bukhari). Menangis karena belas kasih diperbolehkan, yang diharamkan adalah jeritan histeris dan penolakan takdir.'
    },
    adabTakziahMelayat: {
      judul: 'Panduan Praktis Adab Bertakziah bagi Remaja & Pelajar',
      tujuanTakziah: 'Menghibur keluarga duka (tasliyah), mendoakan almarhum agar diampuni dosanya, serta memotivasi keluarga agar sabar dan tabah.',
      waktuDisunnahkan: 'Dianjurkan bertakziah sejak jenazah wafat hingga 3 (tiga) hari setelah pemakaman. Setelah lewat tiga hari makruh bertakziah kecuali bagi orang yang sedang bepergian jauh (safar).',
      amalanDianjurkan: [
        'Mengucapkan ucapan takziah sunnah: "A\'zhamallāhu ajraka, wa ahsana \'azā\'aka, wa ghafara li mayyitika" (Semoga Allah melipatgandakan pahalamu, memberikan penghiburan terbaik bagimu, dan mengampuni mayitmu).',
        'Membawakan bantuan makanan, sembako, atau santunan uang untuk meringankan beban keluarga duka.',
        'Membantu proses persiapan pengurusan jenazah, memandikan, atau mengantarkan jenazah ke pemakaman.'
      ],
      hadisMakananKeluargaJafar: 'Ketika berita syahidnya Ja\'far bin Abi Thalib sampai di Madinah, Rasulullah Saw. bersabda kepada keluarganya: "Buatkanlah makanan untuk keluarga Ja\'far, karena sesungguhnya telah datang perkara yang menyibukkan dan menyedihkan mereka." (H.R. Abu Dawud No. 3132 & At-Tirmidzi No. 998).'
    },
    adabZiarahKubur: {
      judul: 'Adab dan Doa Ziarah Kubur Sesuai Tuntunan Sunnah',
      sejarahPensyariatan: 'Nabi Saw. bersabda: "Dahulu aku melarang kalian berziarah kubur, maka sekarang berziarahlah kalian! Karena ziarah kubur itu dapat melembutkan hati, meneteskan air mata, dan mengingatkan akan akhirat." (H.R. Ahmad & Al-Hakim).',
      doaMasukPekuburan: {
        teksArab: 'السَّلاَمُ عَلَيْكُمْ دَارَ قَوْمٍ مُؤْمِنِينَ ، وَإِنَّا إِنْ شَاءَ اللَّهُ بِكُمْ لاَحِقُونَ ، أَسْأَلُ اللَّهَ لَنَا وَلَكُمُ الْعَافِيَةَ',
        latin: 'As-Salāmu \'alaikum dāra qawmin mu\'minīn, wa innā in syā\'allāhu bikum lāhiqūn, as\'alullāha lanā wa lakumul-\'āfiyah.',
        terjemahan: 'Semoga keselamatan tercurah atas kalian wahai penghuni kubur dari kalangan orang-orang beriman. Dan sesungguhnya kami, insya Allah, akan menyusul kalian. Kami memohon keselamatan kepada Allah bagi kami dan bagi kalian.'
      },
      adabDanLarangan: [
        'Masuk dengan alas kaki yang bersih dan tidak menginjak atau melangkahi pusara kubur.',
        'Menghadap kiblat saat memanjatkan doa untuk memohonkan ampunan bagi ahli kubur.',
        'Tidak duduk di atas makam. Rasulullah Saw. bersabda: "Sungguh jika salah seorang di antara kalian duduk di atas bara api hingga membakar pakaiannya dan menembus kulitnya, itu lebih baik baginya daripada duduk di atas kuburan." (H.R. Muslim No. 971).'
      ]
    }
  },
  hikmahPenyelenggaraan: {
    pengantar: 'Penyelenggaraan jenazah secara tertib dan syar\'i memberikan maslahat yang agung bagi seluruh pihak yang terlibat, mencakup dimensi spiritual, sosial, psikologis, dan moral.',
    daftarHikmah: [
      {
        id: 'hikmah-1-jenazah',
        dimensi: 'Bagi Jenazah',
        judul: 'Penghormatan Terakhir & Limpahan Doa Syafaat',
        deskripsi: 'Jasad manusia yang mulia diperlakukan dengan penuh adab, disucikan, dibungkus kain putih rapi, dishalatkan oleh puluhan atau ratusan kaum mukminin yang memohonkan ampunan, serta dimakamkan secara terhormat.',
        dalilPendukung: 'H.R. Muslim No. 948: "Tidaklah seorang muslim meninggal dunia lalu dishalatkan oleh empat puluh orang yang tidak menyekutukan Allah dengan sesuatu pun, melainkan Allah akan mengabulkan syafaat mereka untuk mayit tersebut."',
        dampakPraktis: 'Meringankan beban hisab di alam kubur berkat doa kaum muslimin yang tulus dan ikhlas.'
      },
      {
        id: 'hikmah-2-keluarga',
        dimensi: 'Bagi Keluarga Duka',
        judul: 'Penguatan Empati, Tasliyah, & Membuka Pintu Sabar',
        deskripsi: 'Keluarga yang berduka merasa didukung, ditemani, dan tidak merasa terisolasi dalam menghadapi masa-masa berat perpisahan dengan orang tercinta.',
        dalilPendukung: 'Q.S. Al-Baqarah: 155-156 tentang kabar gembira bagi orang-orang yang bersabar ketika ditimpa musibah.',
        dampakPraktis: 'Mencegah depresi berat atau keputusasaan, serta mendorong anak dan keluarga untuk terus beramal shalih dan mendoakan almarhum sebagai sedekah jariyah.'
      },
      {
        id: 'hikmah-3-masyarakat',
        dimensi: 'Bagi Umat/Masyarakat',
        judul: 'Perekatan Ukhuwah Islamiyah & Penghapusan Kasta Sosial',
        deskripsi: 'Di hadapan kematian, semua manusia berkedudukan setara. Orang kaya, pejabat, maupun orang miskin diperlakukan sama: dimandikan dengan air yang sama, dibungkus kain kafan putih yang sama, dan masuk ke liang kubur tanah yang sama.',
        dalilPendukung: 'H.R. At-Tirmidzi: "Perumpamaan orang-orang mukmin dalam cinta, kasih sayang, dan kelembutan adalah laksana satu tubuh."',
        dampakPraktis: 'Mempererat tali persaudaraan gotong-royong antarwarga dan mengikis rasa sombong, pamer harta, atau arogansi kekuasaan di masyarakat.'
      },
      {
        id: 'hikmah-4-karakter-pelajar',
        dimensi: 'Bagi Pembentukan Karakter Pelajar',
        judul: 'Tadzkiratul Maut: Menghidupkan Kesadaran Moral & Menghargai Waktu',
        deskripsi: 'Melihat langsung jenazah mengingatkan remaja bahwa usia muda bukanlah jaminan untuk hidup selamanya. Kematian dapat datang kapan saja tanpa menunggu tua atau sakit.',
        dalilPendukung: 'H.R. At-Tirmidzi No. 2307: "Perbanyaklah mengingat pemutus segala kelezatan (yaitu kematian)!"',
        dampakPraktis: 'Memotivasi pelajar untuk menjauhi maksiat, menyetop perundungan (bullying), tekun belajar demi masa depan dan akhirat, serta berbakti kepada orang tua selagi mereka masih bernyawa.'
      }
    ]
  },
  studiKasusRemaja: [
    {
      id: 'kasus-1-medsos',
      judul: 'Etika Digital: Memotret & Membagikan Foto Jenazah ke Media Sosial',
      skenario: 'Rian mendengar kabar bahwa tetangga dekatnya meninggal dunia karena sakit. Saat bertakziah ke rumah duka, Rian melihat jasad almarhum yang wajahnya tampak pucat dan kurus. Secara diam-diam, Rian memotret jasad almarhum dengan telepon pintarnya lalu mengunggahnya ke status WhatsApp dan media sosial dengan tulisan: "Selamat jalan tetanggaku, semoga husnul khatimah."',
      pertanyaanDilema: 'Apakah tindakan Rian menyebarkan foto jasad almarhum dibenarkan dalam etika Islam dan adab penyelenggaraan jenazah?',
      analisisSyariat: 'Tindakan Rian TIDAK DIBENARKAN dan bertentangan dengan adab Islam. Syariat Islam mewajibkan setiap muslim untuk menjaga kehormatan mayit dan menutup aibnya. Mengambil foto jasad mayit dan membagikannya ke media sosial melanggar privasi jenazah dan keluarganya, berpotensi memperlihatkan perubahan fisik jenazah yang tidak pantas ditonton publik, serta dapat menambah kepedihan hati keluarga yang berduka.',
      solusiPraktis: 'Cukup sebarkan ucapan duka cita dan doa dalam bentuk teks atau desain grafis sopan tanpa menampilkan foto jasad mayit. Jagalah kehormatan sesama muslim baik saat mereka masih hidup maupun setelah mereka wafat.'
    },
    {
      id: 'kasus-2-beban-keluarga',
      judul: 'Tradisi Hajatan Mewah vs Tuntunan Sunnah Meringankan Beban Keluarga Duka',
      skenario: 'Keluarga Pak Ahmad baru saja kehilangan kepala keluarga mereka yang wafat mendadak. Di tengah suasana berduka, sebagian warga mengharapkan keluarga Pak Ahmad menyajikan jamuan makan besar dan hidangan prasmanan bagi tamu yang melayat setiap malam selama seminggu penuh. Akibatnya, keluarga Pak Ahmad terpaksa berhutang demi membeli bahan makanan jamuan.',
      pertanyaanDilema: 'Bagaimana pandangan syariat Islam terhadap tradisi yang membebani keluarga duka untuk menjamu tamu pelayat?',
      analisisSyariat: 'Membebani keluarga duka untuk memasak makanan bagi tamu pelayat bertentangan dengan sunnah Rasulullah Saw. Sahabat Jarir bin Abdullah Al-Bajali r.a. berkata: "Kami menganggap berkumpul di rumah keluarga mayit dan membuat makanan setelah pemakaman termasuk bagian dari niyahah (meratap yang dilarang)." (H.R. Ibnu Majah). Sunnah yang diajarkan Nabi adalah tetangga dan kerabat yang seharusnya mengantarkan makanan matang untuk keluarga duka.',
      solusiPraktis: 'Pelajar dan masyarakat harus mengedukasi lingkungan agar menerapkan sunnah Nabi: tetangga berinisiatif patungan mengantarkan makanan siap santap kepada keluarga duka, sehingga keluarga almarhum tidak terbebani secara finansial dan fisik di saat mereka sedang berduka.'
    },
    {
      id: 'kasus-3-tanggung-jawab-fardhu-kifayah',
      judul: 'Tanggung Jawab Fardhu Kifayah: Ada Jenazah Warga Miskin Terlantar',
      skenario: 'Seorang kakek tunawisma yang hidup sebatang kara dan dikenal sebagai muslim taat meninggal dunia di emperan toko dekat sekolah SMP Nusantara. Sebagian orang enggan mendekat dan saling lempar tanggung jawab karena menganggap kakek tersebut tidak memiliki keluarga yang membiayai pengurusan jenazahnya.',
      pertanyaanDilema: 'Bagaimana status kewajiban masyarakat sekitar dan apa yang harus dilakukan pengurus masjid atau sekolah terdekat?',
      analisisSyariat: 'Mengurus jenazah adalah FARDHU KIFAYAH bagi seluruh muslim di lingkungan tersebut. Jika semua orang membiarkan jenazah terlantar, maka SELURUH WARGA satu kampung menanggung dosa besar bersama. Biaya pengurusan jenazah yang tidak memiliki harta peninggalan diambil dari kas Baitul Mal / kas masjid terdekat, atau ditanggung secara patungan sedekah oleh kaum muslimin.',
      solusiPraktis: 'Pengurus OSIS, guru, dan pengurus DKM masjid terdekat harus segera bergotong royong mengambil alih pengurusan jenazah: memandikan, menyediakan kain kafan dari kas masjid, menyalatkan di masjid, dan memakamkannya dengan penuh penghormatan di pemakaman muslim terdekat.'
    }
  ],
  checklistRefleksiDiri: [
    {
      id: 1,
      kategori: 'Pemahaman Syariat',
      pernyataan: 'Saya memahami dengan jelas perbedaan antara Fardhu \'Ain dan Fardhu Kifayah serta 4 tahapan pengurusan jenazah.'
    },
    {
      id: 2,
      kategori: 'Keterampilan Ibadah',
      pernyataan: 'Saya hafal dan mampu mempraktikkan tata cara shalat jenazah 4 takbir beserta lafaz niat, shalawat, dan doa pengampunannya.'
    },
    {
      id: 3,
      kategori: 'Adab Bergaul',
      pernyataan: 'Saya mengetahui adab bertakziah: berbusana sopan, menghibur keluarga duka, dan menghindari bercanda atau tertawa di rumah duka.'
    },
    {
      id: 4,
      kategori: 'Etika Digital',
      pernyataan: 'Saya berkomitmen untuk tidak memotret atau menyebarluaskan foto/video jasad jenazah ke media sosial demi menjaga kehormatan mayit.'
    },
    {
      id: 5,
      kategori: 'Solidaritas Sosial',
      pernyataan: 'Saya memahami sunnah Nabi untuk membawakan makanan atau santunan bagi keluarga duka, bukan membebani mereka untuk menjamu.'
    },
    {
      id: 6,
      kategori: 'Akidah & Tauhid',
      pernyataan: 'Saya menjauhi praktik niyahah (meratap histeris) dan menjauhi perbuatan syirik saat berziarah kubur (tidak meminta-minta kepada kuburan).'
    },
    {
      id: 7,
      kategori: 'Peringatan Diri',
      pernyataan: 'Penyelenggaraan jenazah mengingatkan saya pada kematian (Tadzkiratul Maut), sehingga saya termotivasi lebih rajin beribadah dan menjauhi maksiat.'
    },
    {
      id: 8,
      kategori: 'Tanggung Jawab Kolektif',
      pernyataan: 'Saya siap ikut serta menyalatkan dan mengantarkan jenazah warga muslim di lingkungan tempat tinggal saya demi meraih pahala 2 qirath.'
    }
  ],
  kuisHots: [
    {
      id: 'kuis-1',
      nomor: 1,
      kasus: 'Di sebuah desa pedalaman, seorang warga muslim meninggal dunia pada pagi hari. Seluruh warga sibuk dengan urusan panen raya di sawah dan menunda pengurusan jenazah hingga larut malam tanpa alasan uzur syar\'i yang mendesak. Menjelang malam, hanya ada satu orang pemuka agama yang memandikan, mengafani, dan menyalatkan jenazah tersebut sendirian.',
      pertanyaan: 'Berdasarkan konsep hukum Fardhu Kifayah dalam syariat Islam, bagaimana status hukum warga desa tersebut?',
      pilihan: [
        'A. Seluruh warga desa berdosa karena menunda pengurusan jenazah dan tidak semua ikut menyalatkan.',
        'B. Kewajiban syariat telah gugur dari warga desa karena sudah ada pemuka agama yang menunaikannya, namun mereka kehilangan pahala keutamaan dua qirath.',
        'C. Shalat jenazah pemuka agama tersebut tidak sah karena syarat sah shalat jenazah wajib dihadiri minimal 40 orang.',
        'D. Warga desa wajib membayar denda (dam) karena menunda pengurusan jenazah melebihi waktu 6 jam.'
      ],
      kunciJawaban: 1,
      pembahasan: 'Jawaban B benar. Hukum pengurusan jenazah adalah Fardhu Kifayah. Ketika ada sebagian muslim (dalam hal ini pemuka agama) yang telah melaksanakannya secara sah dan lengkap (memandikan, mengafani, menyalatkan, dan menguburkan), maka gugurlah kewajiban dan dosa bagi muslim lainnya di wilayah tersebut. Namun, warga yang mengabaikannya merugi besar karena kehilangan pahala agung sebesar dua qirath semisal dua gunung besar (H.R. Bukhari-Muslim).'
    },
    {
      id: 'kuis-2',
      nomor: 2,
      kasus: 'Dalam sebuah kecelakaan transportasi, seorang prajurit muslim meninggal dunia saat menjalankan tugas kemanusiaan mengantarkan bantuan korban bencana banjir. Di sisi lain, seorang relawan muslim gugur dalam peperangan membela tanah air dan agama melawan serangan agresor bersenjata di garis terdepan (syahid ma\'rakah).',
      pertanyaan: 'Manakah pernyataan yang paling tepat mengenai perbedaan ketentuan pengurusan kedua jenazah tersebut menurut syariat Islam?',
      pilihan: [
        'A. Kedua jenazah sama-sama tidak perlu dimandikan dan langsung dikuburkan dengan pakaian dinas mereka.',
        'B. Prajurit pembawa bantuan bencana (syahid akhirat) tetap wajib dimandikan, dikafani, dan dishalatkan; sedangkan relawan yang gugur di medan perang (syahid ma\'rakah) tidak dimandikan dan tidak dishalatkan.',
        'C. Syahid ma\'rakah wajib dishalatkan namun tidak dimandikan, sedangkan syahid akhirat tidak dishalatkan namun wajib dimandikan.',
        'D. Kedua jenazah wajib dimandikan dengan tiga lapis kain sutera sebagai penghormatan atas gugurnya mereka sebagai pahlawan.'
      ],
      kunciJawaban: 1,
      pembahasan: 'Jawaban B benar. Dalam fikih jenazah, orang yang wafat karena musibah tenggelam, bencana, atau tugas sosial termasuk Syahid Akhirat, yang secara hukum duniawi TETAP wajib dimandikan, dikafani, dishalatkan, dan dikuburkan seperti biasa. Sedangkan muslim yang gugur langsung di medan peperangan membela agama (Syahid Ma\'rakah/Dunia-Akhirat) TIDAK DIMANDIKAN dan TIDAK DISHALATKAN, melainkan langsung dimakamkan bersama pakaian dan darah syahidnya (H.R. Bukhari).'
    },
    {
      id: 'kuis-3',
      nomor: 3,
      kasus: 'Saat menyalatkan jenazah perempuan di masjid sekolah, Pak Ustadz bertindak sebagai imam. Setelah takbiratul ihram dan takbir kedua selesai, imam mengumandangkan takbir ketiga.',
      pertanyaan: 'Dimanakah posisi berdiri imam yang disunnahkan terhadap jenazah perempuan tersebut, dan apakah doa utama yang wajib/disunnahkan dibaca setelah takbir ketiga?',
      pilihan: [
        'A. Imam berdiri lurus di depan kepala jenazah, dan membaca doa "Allāhummaghfir lahu warhamhu...".',
        'B. Imam berdiri lurus di depan arah pinggang/tengah jenazah, dan membaca doa pengampunan dengan dhomir perempuan: "Allāhummaghfir lahā warhamhā wa \'āfihā wa\'fu \'anhā...".',
        'C. Imam berdiri di arah ujung kaki jenazah, dan membaca Shalawat Ibrahimiyah.',
        'D. Imam berdiri di belakang makmum, dan membaca doa qunut jenazah.'
      ],
      kunciJawaban: 1,
      pembahasan: 'Jawaban B benar. Sunnah Rasulullah Saw. menegaskan bahwa imam berdiri sejajar dengan kepala jenazah laki-laki, dan sejajar dengan bagian tengah/pinggang jenazah perempuan. Pada takbir ketiga, doa dikhususkan untuk jenazah dengan menyesuaikan dhomir (kata ganti) muannats (perempuan) menjadi: "Allāhummaghfir lahā warhamhā wa \'āfihā wa\'fu \'anhā...".'
    },
    {
      id: 'kuis-4',
      nomor: 4,
      kasus: 'Ketika salah seorang kakek di kampung meninggal dunia, putrinya menangis tersedu-sedu sambil berteriak histeris, merobek baju gamisnya, dan membenturkan kepalanya ke dinding seraya meratapi: "Kenapa Ayah meninggalkanku? Hidupku hancur tanpa Ayah!"',
      pertanyaan: 'Ditinjau dari perspektif akidah dan fikih jenazah, evaluasi yang paling tepat terhadap perilaku putri almarhum adalah...',
      pilihan: [
        'A. Perilaku tersebut wajar dan terpuji karena menunjukkan tingginya bakti anak dan besarnya rasa cinta kepada orang tua.',
        'B. Perilaku tersebut tergolong Niyahah (meratap histeris) yang diharamkan syariat karena mencerminkan penolakan terhadap takdir Allah dan merupakan tradisi jahiliyah.',
        'C. Perilaku tersebut diperbolehkan selama dilakukan di dalam kamar rumah duka dan tidak didengar oleh tetangga luar.',
        'D. Perilaku tersebut dianjurkan untuk menggugurkan dosa-dosa almarhum yang telah meninggal dunia.'
      ],
      kunciJawaban: 1,
      pembahasan: 'Jawaban B benar. Tindakan berteriak histeris, merobek pakaian, memukul tubuh, dan mengucapkan kalimat keputusasaan disebut an-niyāhah (meratap histeris). Rasulullah Saw. melarang keras perbuatan ini: "Bukan termasuk golongan kami orang yang memukul-mukul pipi, merobek kerah pakaian, dan berteriak dengan teriakan jahiliyah." (H.R. Bukhari-Muslim). Meneteskan air mata diperbolehkan, namun meratap histeris bertentangan dengan keimanan kepada qadha dan qadar Allah Swt.'
    },
    {
      id: 'kuis-5',
      nomor: 5,
      kasus: 'Sebuah kelompok pemuda hendak melakukan ziarah kubur ke makam seorang ulama besar pendiri madrasah di kota mereka. Di area pemakaman, terjadi perdebatan mengenai adab dan praktik ziarah kubur yang benar.',
      pertanyaan: 'Manakah di antara praktik berikut yang SESUAI dengan tuntunan sunnah Rasulullah Saw. dalam berziarah kubur?',
      pilihan: [
        'A. Mengusap-usap nisan batu kubur untuk mengambil berkah (ngalap berkah) dan meminta kelulusan ujian langsung kepada arwah ulama tersebut.',
        'B. Mengucapkan salam "Assalāmu \'alaikum dāra qawmin mu\'minīn...", menghadap kiblat saat mendoakan ampunan bagi almarhum, serta merenungi hakikat kematian demi melembutkan hati.',
        'C. Membakar dupa wewangian di atas kuburan seraya bersujud menghadap nisan sebagai bentuk takzhim (penghormatan).',
        'D. Membangun cungkup marmer permanen setinggi 3 meter di atas pusara agar makam tampak megah dan tidak terkena hujan.'
      ],
      kunciJawaban: 1,
      pembahasan: 'Jawaban B benar. Ziarah kubur disyariatkan untuk mengingat kematian (Tadzkiratul Maut) dan mendoakan keselamatan serta ampunan bagi ahli kubur dengan mengucapkan salam yang diajarkan Nabi Saw. Meminta-minta doa/berkah kepada kubur adalah perbuatan syirik, bersujud kepada makam diharamkan, dan menyemen/membangun bangunan megah di atas kuburan dilarang oleh Rasulullah Saw. (H.R. Muslim).'
    }
  ]
};
