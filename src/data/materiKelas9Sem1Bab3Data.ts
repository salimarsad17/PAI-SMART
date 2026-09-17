export interface DalilLingkunganItem {
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

export interface HaditsLingkunganItem {
  id: string;
  perawi: string;
  nomorHadits: string;
  tema: string;
  teksArab: string;
  terjemahan: string;
  pelajaranKunci: string;
}

export interface KerusakanLingkunganItem {
  id: string;
  namaBentuk: string;
  kategori: 'Daratan' | 'Perairan' | 'Udara' | 'Hayati';
  faktorPenyebab: string;
  dampakDestruktif: string;
  tinjauanDosaSyariat: string;
  solusiPraktisPelajar: string;
}

export interface CiriCintaLingkunganItem {
  id: string;
  pilar: string;
  manifestasiPerilaku: string;
  landasanSyariat: string;
  contohRealitaSekolah: string;
}

export interface StudiKasusLingkunganItem {
  id: string;
  judul: string;
  fenomenaModern: string;
  dilemaMoral: string;
  analisisSyariat: string;
  solusiPraktis: string[];
}

export interface KuisHotsLingkunganItem {
  id: string;
  pertanyaan: string;
  pilihan: string[];
  kunciJawaban: number;
  pembahasan: string;
}

export interface MuhasabahLingkunganItem {
  id: number;
  pernyataan: string;
  indikator: string;
  dalilRujukan: string;
}

export const MATERI_KELAS_9_SEM_1_BAB_3 = {
  judulBab: 'Menerapkan Makna Cinta Lingkungan dalam Kehidupan',
  subJudul: 'Merawat Kelestarian Alam sebagai Bentuk Syukur, Penunaian Amanah Kekhalifahan, dan Perwujudan Islam Rahmatan lil \'Ālamīn',
  fase: 'Fase D (SMP/MTs)',
  kelas: 'Kelas IX (Sembilan)',
  semester: 'Semester 1 (Ganjil)',
  elemenCp: 'Akhlak / Fiqh al-Bī\'ah (Fikih Lingkungan)',

  pengantar: {
    apersepsi:
      'Pernahkah kamu merenungkan mengapa saat ini sering terjadi banjir bandang, tanah longsor, gelombang panas ekstrem, krisis air bersih, dan tumpukan gunungan sampah plastik di lingkungan sekitar kita? Apakah musibah alam tersebut murni peristiwa takdir tanpa sebab, ataukah buah dari keserakahan dan kelalaian tangan manusia sendiri? Islam memandang alam semesta bukan sekadar objek eksploitasi materi, melainkan amanah suci dari Allah Swt. Manusia ditugaskan di muka bumi sebagai Khalifah fil Ardh (pemimpin pemakmur bumi), bukan perusak. Mencintai dan merawat lingkungan hidup adalah bagian integral dari keimanan, cerminan akhlak mulia, serta sarana mengalirkan pahala sedekah jariyah yang tiada putus hingga hari kiamat.',
    tujuanPembelajaran: [
      'Menjelaskan pengertian cinta lingkungan (ri\'āyah al-bī\'ah) secara bahasa dan istilah syariat serta kedudukannya dalam ajaran Islam',
      'Menganalisis dan menghafalkan dalil-dalil naqli Al-Qur\'an (Q.S. Ar-Rūm: 41, Q.S. Al-A\'rāf: 56, Q.S. Al-Baqarah: 205, Q.S. Al-Anbiyā\': 107) dan Hadits Nabi tentang kelestarian alam',
      'Mengidentifikasi urgensi dan filosofis pentingnya menjaga lingkungan berdasarkan konsep kekhalifahan, keseimbangan semesta (al-mīzān), dan rahmatan lil \'ālamīn',
      'Mendiagnosis berbagai bentuk kerusakan lingkungan hidup (fasād fil ardh) baik di darat, perairan, maupun udara akibat keserakahan manusia',
      'Menunjukkan ciri-ciri dan karakteristik mukmin yang mencintai lingkungan dalam perilaku nyata di rumah, madrasah/sekolah, dan masyarakat',
      'Mengambil hikmah agung cinta lingkungan, merefleksikan diri melalui studi kasus kontemporer, mengisi lembar muhasabah 8 dimensi, serta menyelesaikan kuis HOTS'
    ],
    kataKunci: [
      'Cinta Lingkungan',
      'Fiqh al-Bī\'ah',
      'Khalīfah fil Ardh',
      'Fasād fil Ardh',
      'Al-Mīzān (Keseimbangan)',
      'Rahmatan lil \'Ālamīn',
      'Sedekah Jariyah Pohon',
      'Anti-Isrāf (Hemat Air & Energi)',
      'Konservasi Himā & Harīm',
      'Thahārah Ekologis'
    ]
  },

  // 1. PENGERTIAN & DALIL NAQLI CINTA LINGKUNGAN
  bagian1PengertianDanDalil: {
    pengertianBahasaDanIstilah: {
      secaraBahasa:
        'Secara etimologis (bahasa), kata "lingkungan" dalam khazanah bahasa Arab diistilahkan dengan "Al-Bī\'ah" (الْبِيئَةُ) yang berakar dari kata "bā\'a - yabū\'u" yang berarti tempat tinggal, kediaman, atau ruang kehidupan yang melingkupi makhluk hidup. Adapun "cinta" diterjemahkan dari "Al-Mahabbah" (الْمَحَبَّةُ) atau "Ar-Ri\'āyah" (الرِّعَايَةُ) yang berarti memelihara, menjaga, merawat, dan mengasihi dengan penuh kesungguhan.',
      secaraIstilah:
        'Secara terminologi syariat (istilah Islam), cinta lingkungan adalah kesadaran akidah dan komitmen moral seorang muslim untuk merawat, menjaga kebersihan, memelihara kelestarian ekosistem alam semesta (tanah, air, udara, flora, dan fauna), serta mencegah segala bentuk pencemaran dan kerusakan (fasād) di muka bumi sebagai wujud syukur atas nikmat Allah dan bukti penunaian amanah kekhalifahan.',
      kedudukanSyariat:
        'Menjaga kelestarian lingkungan hidup dalam hukum Islam masuk ke dalam kategori Maqāṣid asy-Syarī\'ah (tujuan pokok syariat), khususnya memelihara jiwa (hifẓ an-nafs) dan memelihara keturunan/generasi penerus (hifẓ an-nasl). Merawat alam bernilai ibadah dan sedekah, sedangkan merusak lingkungan (fasād fil ardh) hukumnya haram mutlak dan termasuk dosa besar.'
    },

    dalilAlQuran: [
      {
        id: 'dalil-rum-41',
        surah: 'Q.S. Ar-Rūm',
        ayatNomor: '41',
        namaSurah: 'Ar-Rūm',
        artiSurah: 'Bangsa Romawi',
        teksArab: 'ظَهَرَ ٱلْفَسَادُ فِى ٱلْبَرِّ وَٱلْبَحْرِ بِمَا كَسَبَتْ أَيْدِى ٱلنَّاسِ لِيُذِيقَهُم بَعْضَ ٱلَّذِى عَمِلُوا۟ لَعَلَّهُمْ يَرْجِعُونَ',
        transliterasi: 'Ẓaharal-fasādu fil-barri wal-baḥri bimā kasabat aidin-nāsi liyużīqahum ba\'ḍallażī \'amilū la\'allahum yarji\'ūn(a).',
        terjemahan: 'Telah tampak kerusakan di darat dan di laut disebabkan perbuatan tangan manusia; Allah menghendaki agar mereka merasakan sebagian dari (akibat) perbuatan mereka, agar mereka kembali (ke jalan yang benar).',
        kandunganPokok: [
          'Kerusakan ekosistem di daratan (tanah longsor, kebakaran hutan, polusi tanah) dan lautan (pencemaran limbah, pemutihan karang, kepunahan ikan) murni disebabkan oleh keserakahan dan perilaku tidak bertanggung jawab tangan manusia.',
          'Bencana ekologis seperti banjir, cuaca ekstrem, kekeringan, dan wabah penyakit merupakan cicipan dampak buruk di dunia agar manusia sadar dan bertobat.',
          'Tujuan akhir dari teguran bencana alam adalah tarbiyah Ilahiyah: agar manusia menghentikan eksploitasi zalim dan kembali merawat bumi dengan penuh amanah.'
        ],
        audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/030041.mp3'
      },
      {
        id: 'dalil-araf-56',
        surah: 'Q.S. Al-A\'rāf',
        ayatNomor: '56',
        namaSurah: 'Al-A\'rāf',
        artiSurah: 'Tempat Tertinggi',
        teksArab: 'وَلَا تُفْسِدُوا۟ فِى ٱلْأَرْضِ بَعْدَ إِصْلَٰحِهَا وَٱدْعُوهُ خَوْفًا وَطَمَعًا ۚ إِنَّ رَحْمَتَ ٱللَّهِ قَرِيبٌ مِّنَ ٱلْمُحْسِنِينَ',
        transliterasi: 'Wa lā tufsidū fil-arḍi ba\'da iṣlāḥihā wad\'ūhu khaufaw wa ṭama\'ā(n), inna raḥmatallāhi qarībum minal-muḥsinīn(a).',
        terjemahan: 'Dan janganlah kamu berbuat kerusakan di bumi setelah (diciptakan) dengan baik. Berdoalah kepada-Nya dengan rasa takut dan penuh harap. Sesungguhnya rahmat Allah sangat dekat kepada orang-orang yang berbuat kebaikan.',
        kandunganPokok: [
          'Larangan tegas (nahy tahrim) dari Allah Swt. untuk melakukan segala aktivitas perusakan lingkungan di bumi.',
          'Bumi pada asalnya diciptakan Allah dalam kondisi harmonis, subur, seimbang, dan siap menopang kehidupan makhluk-Nya (ba\'da iṣlāḥihā).',
          'Orang yang berikhtiar merawat bumi, menanam pohon, menjaga kebersihan air dan udara termasuk golongan Muhsinīn (orang yang berbuat ihsan) yang sangat dekat dengan limpahan rahmat dan kasih sayang Allah.'
        ],
        audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/007056.mp3'
      },
      {
        id: 'dalil-baqarah-205',
        surah: 'Q.S. Al-Baqarah',
        ayatNomor: '205',
        namaSurah: 'Al-Baqarah',
        artiSurah: 'Sapi Betina',
        teksArab: 'وَإِذَا تَوَلَّىٰ سَعَىٰ فِى ٱلْأَرْضِ لِيُفْسِدَ فِيهَا وَيُهْلِكَ ٱلْحَرْثَ وَٱلنَّسْلَ ۗ وَٱللَّهُ لَا يُحِبُّ ٱلْفَسَادَ',
        transliterasi: 'Wa iżā tawallā sa\'ā fil-arḍi liyufsida fīhā wa yuhlikal-ḥarṡa wan-nasl(a), wallāhu lā yuḥibbul-fasād(a).',
        terjemahan: 'Dan apabila dia berpaling (dari engkau), dia berjalan di bumi untuk berbuat kerusakan padanya, dan merusak tanaman-tanaman dan keturunan (hewan ternak dan manusia), dan Allah tidak menyukai kerusakan.',
        kandunganPokok: [
          'Mengecam keras sifat kaum munafik dan perusak yang ketika berkuasa justru mengeksploitasi sumber daya alam secara serakah.',
          'Perusakan tanaman (al-ḥarṡ) dan pemusnahan populasi fauna serta keturunan manusia (an-nasl) merupakan dosa besar yang dikecam syariat.',
          'Penegasan mutlak bahwa Allah sama sekali tidak menyukai perbuatan fasād (perusakan tatanan hidup dan lingkungan).'
        ],
        audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/002205.mp3'
      },
      {
        id: 'dalil-anbiya-107',
        surah: 'Q.S. Al-Anbiyā\'',
        ayatNomor: '107',
        namaSurah: 'Al-Anbiyā\'',
        artiSurah: 'Para Nabi',
        teksArab: 'وَمَآ أَرْسَلْنَـٰكَ إِلَّا رَحْمَةً لِّلْعَـٰلَمِينَ',
        transliterasi: 'Wa mā arsalnāka illā raḥmatal lil-\'ālamīn(a).',
        terjemahan: 'Dan Kami tidak mengutus engkau (Muhammad) melainkan untuk (menjadi) rahmat bagi seluruh alam semesta.',
        kandunganPokok: [
          'Misi risalah Islam yang dibawa Rasulullah SAW bersifat universal dan ekologis, bukan hanya membawa rahmat untuk manusia tetapi juga untuk hewan, tumbuhan, tanah, air, dan seluruh alam semesta (al-\'ālamīn).',
          'Seorang muslim sejati pantang menyiksa hewan, menebang pohon secara serampangan, atau mencemari sungai karena hal itu bertentangan dengan ruh rahmatan lil \'ālamīn.'
        ],
        audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/021107.mp3'
      }
    ],

    dalilHaditsShahih: [
      {
        id: 'hadits-tanam-pohon',
        perawi: 'HR. Bukhari No. 2320 & Muslim No. 1552',
        nomorHadits: 'HR. Muslim 1552',
        tema: 'Menanam Pohon Bernilai Sedekah Jariyah Berkelanjutan',
        teksArab: 'مَا مِنْ مُسْلِمٍ يَغْرِسُ غَرْسًا أَوْ يَزْرَعُ زَرْعًا فَيَأْكُلُ مِنْهُ طَيْرٌ أَوْ إِنْسَانٌ أَوْ بَهِيمَةٌ إِلَّا كَانَ لَهُ بِهِ صَدَقَةٌ',
        terjemahan: 'Tidaklah seorang muslim menanam sebatang pohon atau menabur benih tanaman, lalu buahnya atau hasilnya dimakan oleh burung, manusia, atau hewan ternak, melainkan hal itu menjadi sedekah baginya.',
        pelajaranKunci: 'Aktivitas penghijauan, menanam bibit, dan merawat tanaman dinilai oleh Allah sebagai ibadah sedekah yang pahalanya terus mengalir selama oksigen, buah, keteduhan, atau manfaatnya dinikmati oleh makhluk hidup lain.'
      },
      {
        id: 'hadits-tanam-saat-kiamat',
        perawi: 'HR. Ahmad No. 12902 & Al-Bukhari dalam Al-Adab al-Mufrad No. 479 (Shahih)',
        nomorHadits: 'HR. Ahmad 12902',
        tema: 'Kewajiban Konservasi Alam Hingga Detik Terakhir Kehidupan',
        teksArab: 'إِنْ قَامَتِ السَّاعَةُ وَبِيَدِ أَحَدِكُمْ فَسِيلَةٌ، فَإِنِ اسْتَطَاعَ أَنْ لاَ تَقُومَ حَتَّى يَغْرِسَهَا فَلْيَغْرِسْهَا',
        terjemahan: 'Jika kiamat terjadi sedang di tangan salah seorang di antara kalian ada sebutir bibit kurma, maka jika ia mampu untuk tidak bangkit hingga selesai menanamnya, hendaklah ia menanamnya.',
        pelajaranKunci: 'Hadits revolusioner ini mengajarkan etos kerja hijau tanpa kenal putus asa. Menanam pohon dan menjaga kelestarian alam bernilai ibadah otonom di hadapan Allah, bukan semata diukur dari apakah kita sempat memanen hasilnya atau tidak.'
      },
      {
        id: 'hadits-larangan-boros-air',
        perawi: 'HR. Ibnu Majah No. 425 & Ahmad No. 7065 (Sanad Hasan)',
        nomorHadits: 'HR. Ibnu Majah 425',
        tema: 'Larangan Isrāf (Pemborosan Air) Bahkan di Tepi Sungai Deras',
        teksArab: 'أَنَّ النَّبِيَّ ﷺ مَرَّ بِسَعْدٍ وَهُوَ يَتَوَضَّأُ، فَقَالَ: «مَا هَذَا السَّرَفُ يَا سَعْدُ؟» قَالَ: أَفِي الْوُضُوءِ سَرَفٌ؟ قَالَ: «نَعَمْ، وَإِنْ كُنْتَ عَلَى نَهَرٍ جَارٍ»',
        terjemahan: 'Nabi Muhammad SAW melewati Sa\'ad bin Abi Waqqash yang sedang berwudhu, lalu beliau menegur: "Pemborosan apa ini wahai Sa\'ad?" Sa\'ad bertanya: "Apakah dalam wudhu ada pemborosan?" Rasulullah menjawab: "Ya, meskipun engkau berada di tepi sungai yang mengalir deras."',
        pelajaranKunci: 'Islam menentang keras perilaku mubazir sumber daya alam. Penghematan air adalah kewajiban syariat yang mutlak, bahkan saat melaksanakan ibadah mulia seperti wudhu.'
      },
      {
        id: 'hadits-singkirkan-gangguan',
        perawi: 'HR. Muslim No. 35',
        nomorHadits: 'HR. Muslim 35',
        tema: 'Menyingkirkan Sampah dari Jalan adalah Cabang Keimanan',
        teksArab: 'الْإِيمَانُ بِضْعٌ وَسَبْعُونَ شُعْبَةً... وَأَدْنَاهَا إِمَاطَةُ الْأَذَى عَنِ الطَّرِيقِ',
        terjemahan: 'Iman itu memiliki tujuh puluh lebih cabang... dan cabang yang paling rendah adalah menyingkirkan gangguan (sampah, duri, kotoran) dari jalanan.',
        pelajaranKunci: 'Menjaga kebersihan fasilitas umum, membersihkan sampah berserakan di jalan atau selokan, dan tidak membuang sampah sembarangan adalah indikator nyata kualitas keimanan seorang mukmin.'
      },
      {
        id: 'hadits-larangan-buang-hajat-sembarangan',
        perawi: 'HR. Abu Dawud No. 26 & Ibnu Majah No. 328',
        nomorHadits: 'HR. Abu Dawud 26',
        tema: 'Larangan Mengotori Sumber Air dan Tempat Berteduh Publik',
        teksArab: 'اتَّقُوا الْمَلَاعِنَ الثَّلَاثَةَ: الْبَرَازَ فِي الْمَوَارِدِ، وَقَارِعَةِ الطَّرِيقِ، وَالظِّلِّ',
        terjemahan: 'Takutlah kalian terhadap tiga perbuatan yang mendatangkan laknat: buang air besar di sumber air (yang mengalir/dimanfaatkan), di tengah jalan umum, dan di tempat manusia berteduh.',
        pelajaranKunci: 'Sanitasi lingkungan dan perlindungan sumber daya air publik merupakan ajaran preventif Islam untuk membendung penularan penyakit berbahaya dan menjaga estetika ruang publik.'
      }
    ]
  },

  // 2. PENTINGNYA CINTA LINGKUNGAN DALAM PANDANGAN ISLAM
  bagian2PentingnyaCintaLingkungan: {
    latarBelakangUrgensi:
      'Lingkungan hidup adalah karunia agung Allah Swt. yang menjadi pilar kelangsungan hidup manusia. Islam memandang hubungan manusia dengan alam bukanlah hubungan penakluk dengan mangsanya, melainkan hubungan persaudaraan kosmis (ukhuwwah kauniyyah) yang dilandasi tanggung jawab moral dan ibadah.',
    limaAlasanPenting: [
      {
        no: 1,
        judul: 'Amanah Status Khalifah fil Ardh (Pemakmur Bumi)',
        dalil: 'Q.S. Al-Baqarah: 30 & Q.S. Hud: 61',
        penjelasan:
          'Allah menciptakan manusia bukan untuk merusak atau menumpahkan darah, melainkan sebagai "Khalifah" (wakil pemegang mandat) untuk memakmurkan bumi (isti\'mār al-ardh). Segala kekayaan alam di bumi adalah titipan yang wajib dikelola dengan adil dan dipertanggungjawabkan di hadapan Allah di hari akhir.'
      },
      {
        no: 2,
        judul: 'Menjaga Sunnatullah Keseimbangan Alam (Prinsip Al-Mīzān)',
        dalil: 'Q.S. Ar-Rahman: 7-9 & Q.S. Al-Qamar: 49',
        penjelasan:
          'Allah menciptakan alam semesta dalam keseimbangan sempurna dan takaran yang presisi (al-mīzān). Penebangan hutan berlebihan, polusi emisi karbon, dan perusakan laut mengacaukan neraca keseimbangan tersebut sehingga memicu bencana iklim dan malapetaka bagi umat manusia sendiri.'
      },
      {
        no: 3,
        judul: 'Alam Semesta adalah Ayat Kauniyah yang Bertasbih',
        dalil: 'Q.S. Al-Isrā\': 44 & Q.S. Al-Ḥajj: 18',
        penjelasan:
          'Tujuh lapis langit, bumi, gunung-gunung, pepohonan, burung di udara, hingga butiran air senantiasa bertasbih menyucikan Allah dengan bahasa mereka. Merusak alam secara zalim hakikatnya adalah membungkam tasbih makhluk-makhluk Allah di muka bumi.'
      },
      {
        no: 4,
        judul: 'Manifestasi Misi Kerasulan Rahmatan lil \'Ālamīn',
        dalil: 'Q.S. Al-Anbiyā\': 107',
        penjelasan:
          'Ajaran Islam hadir membawa rahmat dan kasih sayang bagi seluruh semesta. Rasulullah SAW bahkan melarang membakar sarang semut tanpa alasan darurat, melarang menebang pohon produktif saat peperangan, dan mengapresiasi kebaikan seorang hamba yang memberi minum anjing kehausan.'
      },
      {
        no: 5,
        judul: 'Tanggung Jawab Moral terhadap Generasi Mendatang (Hifẓ an-Nasl)',
        dalil: 'Kaidah Fiqhiyah: Dar\'ul mafasid muqaddam \'ala jalbil mashalih',
        penjelasan:
          'Mewariskan tanah yang subur, air yang jernih, dan udara yang sehat kepada anak cucu adalah kewajiban syar\'i. Mengeksploitasi alam demi keuntungan sesaat sama saja merampas hak hidup generasi mendatang.'
      }
    ],
    prinsipKonservasiIslam: [
      {
        istilah: 'Prinsip Himā (حِمَى)',
        makna:
          'Kawasan cagar alam atau hutan lindung yang dilindungi secara resmi oleh negara/otoritas muslim untuk melindungi flora, fauna, dan sumber air dari eksploitasi komersial. Rasulullah SAW pernah menetapkan kawasan Himā di Naqi\' dekat Madinah untuk padang gembala kuda perang dan konservasi satwa.'
      },
      {
        istilah: 'Prinsip Harīm (حَرِيم)',
        makna:
          'Zona penyangga atau sempadan di sekitar mata air, sumur publik, sungai, dan danau yang dilarang keras untuk didirikan bangunan atau dibuang limbah agar air tanah tetap jernih dan bebas polusi.'
      },
      {
        istilah: 'Ihyā\' al-Mawāt (إِحْيَاءُ الْمَوَاتِ)',
        makna:
          'Gerakan menghidupkan lahan tidur atau tanah tandus yang terlantar dengan menanaminya pohon dan mengelolanya menjadi perkebunan produktif, yang dalam syariat Islam memberikan hak kepemilikan bagi yang menghidupkannya.'
      }
    ]
  },

  // 3. BENTUK-BENTUK KERUSAKAN LINGKUNGAN (FASĀD FIL ARDH)
  bagian3BentukKerusakanLingkungan: {
    pengantarFasad:
      'Al-Qur\'an menyebut segala tindakan pencemaran, perusakan ekosistem, dan eksploitasi berlebihan sebagai "Fasād fil Ardh" (kerusakan di muka bumi). Kerusakan ini bukan disebabkan oleh takdir buta, melainkan oleh sifat keserakahan (ṭama\'), konsumerisme tanpa kendali, dan hilangnya rasa takut kepada hisab Allah di hari akhir.',
    daftarKerusakan: [
      {
        id: 'kerusakan-deforestasi',
        namaBentuk: 'Deforestasi & Penebangan Liar (Illegal Logging)',
        kategori: 'Daratan',
        faktorPenyebab:
          'Perambahan hutan demi perluasan lahan perkebunan monokultur skala raksasa, pertambangan ilegal, dan pembalakan liar kayu tanpa reboisasi terencana.',
        dampakDestruktif:
          'Hilangnya daya serap air tanah yang memicu bencana banjir bandang dan tanah longsor, kepunahan habitat satwa langka, dan pelepasan jutaan ton emisi karbon ke atmosfer.',
        tinjauanDosaSyariat:
          'Termasuk kezaliman ekologis yang mengancam keselamatan ribuan nyawa manusia dan memusnahkan ciptaan Allah (melanggar Q.S. Al-Baqarah: 205).',
        solusiPraktisPelajar:
          'Mendukung gerakan menanam satu orang satu pohon (one student one tree), menggunakan kertas dan buku tulis secara hemat dan timbal balik, serta tidak membeli produk dari kayu ilegal.'
      },
      {
        id: 'kerusakan-sampah-plastik',
        namaBentuk: 'Krisis Sampah Plastik Sekali Pakai & TPA Liar',
        kategori: 'Daratan',
        faktorPenyebab:
          'Gaya hidup konsumtif, ketergantungan pada kantong kresek, sedotan plastik, botol air sekali pakai, dan kebiasaan membuang sampah sembarangan di jalanan atau saluran air.',
        dampakDestruktif:
          'Plastik butuh waktu 100-500 tahun untuk terurai, meracuni tanah dengan zat kimia berbahaya, menyumbat saluran drainase perkotaan memicu genangan banjir, serta menghasilkan mikroplastik yang masuk ke rantai makanan.',
        tinjauanDosaSyariat:
          'Melanggar ajaran kebersihan sebagai cabang iman (HR. Muslim) dan mendatangkan laknat karena mengotori fasilitas publik (HR. Abu Dawud).',
        solusiPraktisPelajar:
          'Membawa botol minum (tumbler) dan kotak bekal pribadi dari rumah, menolak kantong plastik saat berbelanja, dan memilah sampah organik serta anorganik di sekolah.'
      },
      {
        id: 'kerusakan-pencemaran-air',
        namaBentuk: 'Pencemaran Sungai, Danau, dan Lautan oleh Limbah',
        kategori: 'Perairan',
        faktorPenyebab:
          'Pembuangan limbah cair pabrik tanpa pengolahan IPAL, tumpahan minyak di laut, penggunaan racun/bom ikan ilegal, dan pembuangan sampah rumah tangga langsung ke bantaran kali.',
        dampakDestruktif:
          'Matinya ribuan biota ikan dan terumbu karang, krisis air minum bersih layak konsumsi, serta memicu wabah penyakit kulit, kolera, dan stunting bagi masyarakat sekitar sungai.',
        tinjauanDosaSyariat:
          'Melanggar larangan tegas Rasulullah SAW tentang mengotori sumber air mengalir dan mencabut hak hidup hewan-hewan air (HR. Abu Dawud No. 26).',
        solusiPraktisPelajar:
          'Tidak membuang minyak jelantah atau sampah ke wastafel/selokan, ikut kerja bakti membersihkan saluran air sekolah, dan menghemat pemakaian detergen ramah lingkungan.'
      },
      {
        id: 'kerusakan-polusi-udara',
        namaBentuk: 'Polusi Udara, Asap Beracun, & Pemanasan Global',
        kategori: 'Udara',
        faktorPenyebab:
          'Emisi gas buang kendaraan bermotor tak terawat, asap cerobong pabrik industri berbahan bakar fosil/batu bara, serta kebiasaan membakar tumpukan sampah di permukiman.',
        dampakDestruktif:
          'Menurunnya kualitas indeks udara (ISPU berbahaya), peningkatan penyakit Infeksi Saluran Pernapasan Akut (ISPA) pada anak-anak, hujan asam perusak tanah, serta kenaikan suhu bumi (climate crisis).',
        tinjauanDosaSyariat:
          'Menimbulkan bahaya fisik dan penyakit bagi orang lain yang dilarang tegas dalam kaidah nabawiyah: "Lā ḍarara wa lā ḍirār" (Tidak boleh membahayakan diri sendiri maupun orang lain - HR. Ibnu Majah).',
        solusiPraktisPelajar:
          'Berjalan kaki, bersepeda, atau naik angkutan umum ke sekolah, menanam tanaman penyerap polutan (seperti lidah mertua/sansiviera), dan menghentikan kebiasaan membakar sampah daun/plastik.'
      },
      {
        id: 'kerusakan-eksploitasi-hewan',
        namaBentuk: 'Perburuan Liar & Perdagangan Satwa Langka',
        kategori: 'Hayati',
        faktorPenyebab:
          'Keserakahan motif materi perdagangan gading, cula, kulit satwa, serta hobi memelihara satwa liar yang dilindungi undang-undang demi prestise gengsi.',
        dampakDestruktif:
          'Terputusnya rantai makanan ekologis, ledakan hama tanaman (seperti tikus merajalela karena ular dan burung hantu diburu), serta kepunahan plasma nutfah kekayaan alam Nusantara.',
        tinjauanDosaSyariat:
          'Melanggar sifat kasih sayang Islam terhadap hewan (HR. Bukhari tentang wanita yang diazab karena mengurung kucing hingga mati).',
        solusiPraktisPelajar:
          'Menolak membeli cenderamata dari bagian tubuh satwa langka, melaporkan perdagangan satwa ilegal, dan menyayangi hewan peliharaan di rumah dengan memberi makan tepat waktu.'
      }
    ]
  },

  // 4. CIRI-CIRI CINTA LINGKUNGAN DALAM PERILAKU SEHARI-HARI
  bagian4CiriCintaLingkungan: {
    prinsipPerilaku:
      'Cinta lingkungan dalam Islam bukanlah slogan di atas kertas atau sekadar seremoni peringatan hari bumi, melainkan akhlak keseharian yang melekat pada kepribadian mukmin sejati. Ciri-ciri mukmin pecinta lingkungan terejawantahkan dalam 5 pilar tindakan nyata:',
    limaPilarKarakter: [
      {
        id: 'ciri-thaharah',
        pilar: '1. Menegakkan Kebersihan Ekologis (Thahārah Al-Bī\'ah)',
        manifestasiPerilaku:
          'Memastikan diri, pakaian, tempat tinggal, ruang kelas, masjid, dan jalanan selalu dalam kondisi suci, rapi, dan bersih dari kotoran atau sampah yang mengganggu pandangan dan kesehatan.',
        landasanSyariat: 'Hadits Shahih Muslim: "Ath-Thahūru syatrul īmān" (Kebersihan/kesucian adalah separuh dari keimanan).',
        contohRealitaSekolah:
          'Melaksanakan tugas piket kelas dengan penuh tanggung jawab tanpa menunggu diperintah guru, memungut sampah yang tercecer di koridor sekolah lalu memasukkannya ke tempat sampah.'
      },
      {
        id: 'ciri-hemat-air-energi',
        pilar: '2. Hidup Bersahaja & Anti-Pemborosan (Zuhud & Anti-Isrāf)',
        manifestasiPerilaku:
          'Menggunakan air, listrik, kertas, dan makanan secukupnya sesuai kebutuhan riil tanpa berlebih-lebihan. Menutup kran wudhu saat mengusap kepala dan mematikan lampu saat siang hari.',
        landasanSyariat: 'Q.S. Al-A\'rāf: 31 ("Makan dan minumlah, tetapi jangan berlebih-lebihan. Sungguh Allah tidak menyukai orang yang berlebih-lebihan") & Q.S. Al-Isra: 27.',
        contohRealitaSekolah:
          'Membuka kran wudhu di musala sekolah dengan aliran kecil yang cukup membasahi rukun wudhu, mematikan kipas angin/AC dan proyektor saat kelas kosong atau jam istirahat.'
      },
      {
        id: 'ciri-penghijauan',
        pilar: '3. Gemar Menanam & Menghijaukan Alam (Ikhḍirār / Greening)',
        manifestasiPerilaku:
          'Memiliki kecintaan menabur benih tanaman, merawat pepohonan peneduh, menyiram bunga di pekarangan, serta aktif dalam program penghijauan lingkungan hidup.',
        landasanSyariat: 'Hadits Nabi SAW: Menanam sebatang pohon bernilai sedekah jariyah selama ada makhluk yang memakan buah atau bernaung di bawah keteduhannya (HR. Muslim).',
        contohRealitaSekolah:
          'Menjadi kader Adiwiyata sekolah, menanam tanaman obat keluarga (TOGA) di taman kelas, serta membawa satu pot tanaman bunga untuk mempercantik lingkungan sekolah.'
      },
      {
        id: 'ciri-kelola-sampah',
        pilar: '4. Menerapkan Budaya 3R (Reduce, Reuse, Recycle)',
        manifestasiPerilaku:
          'Mengurangi timbulan sampah plastik, memanfaatkan kembali wadah atau kantong yang masih layak pakai, serta mendaur ulang sampah organik menjadi kompos penyubur tanah.',
        landasanSyariat: 'Kaidah Syariat: "Menolak kerusakan lebih didahulukan daripada mengambil manfaat semu" (Dar\'ul mafāsid muqaddam \'alā jalbil maṣāliḥ).',
        contohRealitaSekolah:
          'Membawa wadah bekal dan tumbler pribadi ke kantin sekolah, mengolah dedaunan kering gugur di halaman sekolah menjadi pupuk kompos untuk tanaman madrasah.'
      },
      {
        id: 'ciri-amar-maruf-lingkungan',
        pilar: '5. Menjadi Teladan & Pelopor Gerakan Hijau (Ad-Da\'wah al-Bī\'iyyah)',
        manifestasiPerilaku:
          'Berani mengingatkan teman yang membuang sampah sembarangan atau merusak dahan pohon dengan santun, serta mengedukasi keluarga untuk memilah sampah rumah tangga.',
        landasanSyariat: 'Q.S. Ali \'Imran: 104 (Perintah menyeru kepada kebaikan dan mencegah kemungkaran / amar ma\'ruf nahi munkar).',
        contohRealitaSekolah:
          'Membuat poster ajakan peduli lingkungan dan hemat air di mading sekolah atau media sosial, serta menolak aksi vandalisme mencoret-coret meja, dinding, atau pohon sekolah.'
      }
    ]
  },

  // 5. HIKMAH AGUNG CINTA LINGKUNGAN
  bagian5HikmahCintaLingkungan: {
    enamHikmahUtama: [
      {
        no: 1,
        judul: 'Meraih Rida dan Cinta Allah Swt.',
        deskripsi:
          'Allah Swt. mencintai hamba-Nya yang berbuat ihsan dan memelihara keindahan alam ciptaan-Nya. Menjaga kebersihan dan kelestarian alam adalah wujud ketaatan yang mendatangkan berkah hidup (Q.S. Al-A\'raf: 56).'
      },
      {
        no: 2,
        judul: 'Mengalirkan Pahala Sedekah Jariyah Tanpa Henti',
        deskripsi:
          'Setiap pohon yang kita tanam, burung yang memakan bijinya, manusia yang menghirup oksigen darinya, atau tanah yang terhindar dari erosi karena akarnya, akan terus mengalirkan pahala sedekah ke buku amal kita bahkan setelah kita meninggal dunia (HR. Muslim).'
      },
      {
        no: 3,
        judul: 'Menghindarkan Diri dan Masyarakat dari Bencana Alam',
        deskripsi:
          'Saluran air yang bersih dari sampah mencegah genangan banjir; hutan yang lebat mengikat air tanah sehingga mencegah tanah longsor dan kekeringan; udara yang bersih membebaskan masyarakat dari penyakit paru-paru dan infeksi saluran pernapasan.'
      },
      {
        no: 4,
        judul: 'Mewujudkan Ketenangan Jiwa Melalui Tafakur Alam',
        deskripsi:
          'Lingkungan yang hijau, asri, bersih, dan harum menjadi sarana terapi psikologis yang menenangkan pikiran. Memandang keindahan alam memicu rasa kagum kepada keagungan Sang Pencipta dan menambah kekhusyukan ibadah.'
      },
      {
        no: 5,
        judul: 'Menjaga Keberlanjutan Hidup Generasi Penerus',
        deskripsi:
          'Menghemat air tanah, menjaga kesuburan humus bumi, dan menahan emisi gas rumah kaca adalah investasi masa depan bagi anak cucu kita agar mereka dapat menikmati air bersih, pangan yang bergizi, dan udara segar yang sehat.'
      },
      {
        no: 6,
        judul: 'Menampilkan Wajah Islam yang Menyejukkan (Rahmatan lil \'Ālamīn)',
        deskripsi:
          'Gerakan muslim peduli lingkungan membuktikan kepada dunia bahwa ajaran Islam sangat visioner, higienis, dan peduli pada isu-isu kemanusiaan global seperti krisis iklim dan sanitasi sehat.'
      }
    ],

    tigaStudiKasus: [
      {
        id: 'kasus-sampah-kantin',
        judul: 'Kasus 1: Gunungan Sampah Plastik Sekali Pakai di Kantin Sekolah',
        fenomenaModern:
          'Setiap jam istirahat, kantin sekolah dipadati ratusan siswa yang membeli minuman es dalam gelas plastik bertutup cup sealer dan gorengan berbungkus plastik kresek. Tempat sampah meluap, plastik berserakan di lapangan, dan petugas kebersihan kewalahan mengangkut puluhan kilogram sampah anorganik setiap hari.',
        dilemaMoral:
          'Banyak siswa berdalih: "Kan sudah ada petugas kebersihan sekolah yang digaji untuk membersihkannya", atau merasa malas membawa tumbler sendiri karena dianggap repot dan kurang keren.',
        analisisSyariat:
          'Pandangan tersebut keliru dan bertentangan dengan ajaran Islam. Kebersihan adalah tanggung jawab personal setiap mukmin. Membebani petugas kebersihan dan membuang sampah sembarangan mendatangkan laknat (HR. Abu Dawud No. 26). Mengurangi sampah plastik adalah bentuk amal saleh mencegah kerusakan di bumi (Q.S. Al-A\'raf: 56).',
        solusiPraktis: [
          'Membuat komitmen kelas: mewajibkan seluruh siswa membawa tumbler dan kotak bekal pribadi dari rumah.',
          'Pihak sekolah memberikan potongan harga (diskon hijau) di kantin bagi siswa yang membawa wadah sendiri.',
          'Membentuk kelompok piket relawan lingkungan sekolah yang mengedukasi dan memilah sampah botol plastik untuk didaur ulang menjadi kerajinan atau disalurkan ke bank sampah.'
        ]
      },
      {
        id: 'kasus-pemborosan-air',
        judul: 'Kasus 2: Pemborosan Air Kran Wudhu di Musala Sekolah',
        fenomenaModern:
          'Sejumlah siswa membuka kran air tempat wudhu secara maksimal hingga memancar deras ke mana-mana. Sebagian bahkan mengobrol sambil membiarkan kran air mengalir terus-menerus tanpa digunakan untuk membasuh anggota wudhu.',
        dilemaMoral:
          'Sebagian siswa merasa tidak bersalah karena berpikir wudhu adalah ibadah suci sehingga sah-sah saja memakai banyak air, apalagi air musala disediakan gratis oleh pihak sekolah.',
        analisisSyariat:
          'Rasulullah SAW secara tegas melarang isrāf (pemborosan) dalam berwudhu meskipun seseorang berada di tepi sungai yang mengalir deras (HR. Ibnu Majah No. 425). Wudhu dengan air berlebih-lebihan hukumnya makruh bahkan bisa haram jika menghabiskan cadangan air untuk jamaah lain. Ibadah suci tidak boleh dinodai dengan perbuatan mubazir yang disukai setan (Q.S. Al-Isra: 27).',
        solusiPraktis: [
          'Membuka kran hanya sepertiga atau seperempat putaran, cukup untuk membasahi anggota wudhu secara merata.',
          'Menutup kran saat mengusap kepala atau menyela-nyela jari kaki agar air tidak terbuang percuma.',
          'Memasang stiker pengingat hadits nabi tentang larangan boros air di area tempat wudhu sekolah.'
        ]
      },
      {
        id: 'kasus-banjir-deforestasi',
        judul: 'Kasus 3: Bencana Banjir Bandang Akibat Alih Fungsi Lahan Resapan',
        fenomenaModern:
          'Sebuah kawasan perbukitan di hulu sungai ditebangi pepohonannya untuk dijadikan vila megah dan perkebunan sayur semusim tanpa terasering yang baik. Ketika hujan lebat turun selama tiga hari, air bah longsor menenggelamkan ribuan rumah warga di hilir kota, merusak fasilitas umum, dan memakan korban jiwa.',
        dilemaMoral:
          'Pemilik modal berdalih bahwa mereka memiliki sertifikat tanah pribadi sehingga bebas memanfaatkannya untuk keuntungan bisnis tanpa memedulikan nasib warga sekitar bantaran sungai.',
        analisisSyariat:
          'Kepemilikan pribadi dalam hukum Islam terikat oleh fungsi sosial dan larangan membahayakan orang lain. Kaidah fiqih menetapkan: "Kemaslahatan umum harus didahulukan daripada keuntungan pribadi". Tindakan menggunduli perbukitan yang berujung musibah banjir merupakan dosa jariyah perusakan bumi (fasād fil ardh) yang diancam dalam Q.S. Ar-Rum: 41.',
        solusiPraktis: [
          'Pemerintah harus menegakkan hukum tata ruang secara tegas dan melarang alih fungsi hutan lindung (prinsip Himā).',
          'Menggalakkan gerakan reboisasi massal tanaman keras berakar dalam di kawasan hulu lereng bukit.',
          'Mendidik generasi muda agar mengedepankan etika ekologi di atas keserakahan ekonomi jangka pendek.'
        ]
      }
    ],

    lembarMuhasabah8Dimensi: [
      {
        id: 1,
        indikator: 'Adab Menggunakan Air saat Wudhu & Bersuci',
        pernyataan: 'Saya selalu membuka kran wudhu dengan aliran kecil dan segera mematikannya setelah selesai tanpa membiarkan air terbuang percuma.',
        dalilRujukan: 'HR. Ibnu Majah No. 425 (Larangan Isrāf dalam Wudhu)'
      },
      {
        id: 2,
        indikator: 'Tanggung Jawab Pemilahan Sampah Pribadi',
        pernyataan: 'Saya tidak pernah membuang sampah sembarangan di kelas, jalanan, atau saluran air dan selalu memasukkannya ke tempat sampah sesuai jenisnya.',
        dalilRujukan: 'HR. Muslim No. 35 (Menyingkirkan Duri/Sampah dari Jalan Cabang Iman)'
      },
      {
        id: 3,
        indikator: 'Pengurangan Sampah Plastik Sekali Pakai',
        pernyataan: 'Saya membiasakan diri membawa botol minum (tumbler) dan kotak bekal pribadi dari rumah untuk mengurangi sampah plastik sekali pakai di sekolah.',
        dalilRujukan: 'Q.S. Al-A\'raf: 56 (Larangan Berbuat Kerusakan di Bumi)'
      },
      {
        id: 4,
        indikator: 'Ketaatan Piket Kebersihan Kelas & Fasilitas Publik',
        pernyataan: 'Saya melaksanakan jadwal piket kebersihan kelas dengan ikhlas dan sukarela memungut sampah tercecer di lingkungan madrasah/sekolah.',
        dalilRujukan: 'HR. Muslim (Kebersihan adalah Separuh dari Keimanan)'
      },
      {
        id: 5,
        indikator: 'Penghematan Energi Listrik di Sekolah dan Rumah',
        pernyataan: 'Saya terbiasa mematikan lampu, kipas angin, dan pendingin ruangan (AC) saat ruangan kelas tidak digunakan atau saat siang hari yang cukup terang.',
        dalilRujukan: 'Q.S. Al-Isra: 26-27 (Larangan Berlaku Boros/Mubazir)'
      },
      {
        id: 6,
        indikator: 'Kecintaan Menanam dan Merawat Pepohonan',
        pernyataan: 'Saya senang menanam bibit tanaman, menyiram bunga, dan tidak merusak dahan pohon atau memetik bunga sembarangan di taman.',
        dalilRujukan: 'HR. Bukhari No. 2320 & Muslim No. 1552 (Pahala Sedekah Jariyah Menanam Pohon)'
      },
      {
        id: 7,
        indikator: 'Kasih Sayang terhadap Satwa dan Fauna',
        pernyataan: 'Saya memperlakukan hewan dengan penuh kasih sayang, memberi makan hewan peliharaan, dan tidak menyiksa atau memburu burung/kucing liar.',
        dalilRujukan: 'HR. Bukhari (Ganjaran Pahala Berbuat Baik kepada Setiap Makhluk Bernyawa)'
      },
      {
        id: 8,
        indikator: 'Kepedulian Sosial Menegur Perusak Lingkungan',
        pernyataan: 'Saya berani mengingatkan teman secara santun apabila melihat mereka membuang sampah sembarangan atau mencoret-coret fasilitas umum.',
        dalilRujukan: 'Q.S. Ali \'Imran: 104 (Amar Ma\'ruf Nahi Munkar)'
      }
    ],

    kuisHots: [
      {
        id: 'soal-1',
        pertanyaan:
          'Dalam Q.S. Ar-Rūm ayat 41 disebutkan: "Ẓaharal-fasādu fil-barri wal-baḥri bimā kasabat aidin-nāsi...". Mengapa Allah Swt. menegaskan bahwa terjadinya kerusakan di darat dan di laut adalah "akibat perbuatan tangan manusia"?',
        pilihan: [
          'A. Karena alam semesta pada dasarnya memang memiliki siklus kehancuran alami tanpa keterlibatan manusia',
          'B. Karena manusia diciptakan dengan nafsu keserakahan dan sering mengeksploitasi alam tanpa mengindahkan amanah kekhalifahan dan aturan keseimbangan syariat',
          'C. Karena bencana alam semata-mata kutukan takdir yang tidak memiliki kaitan sebab-akibat dengan perilaku moral manusia',
          'D. Karena Allah ingin menunjukkan bahwa teknologi modern tidak memiliki kelemahan dalam menaklukkan alam'
        ],
        kunciJawaban: 1,
        pembahasan:
          'Ayat ini menegaskan kausalitas moral: kerusakan di darat dan laut disebabkan oleh tangan manusia ("bimā kasabat aidin-nās") yang bersikap serakah, mengeksploitasi sumber daya secara zalim, dan melupakan amanah kekhalifahan untuk memakmurkan bumi.'
      },
      {
        id: 'soal-2',
        pertanyaan:
          'Rasulullah SAW menegur Sa\'ad bin Abi Waqqash r.a. yang berwudhu dengan membiarkan air kran mengalir deras, lalu bersabda bahwa pemborosan air dilarang meskipun berada di tepi sungai yang mengalir. Prinsip nilai etika apa yang ditekankan dalam hadits tersebut?',
        pilihan: [
          'A. Nilai efisiensi biaya pembayaran tagihan PDAM masjid',
          'B. Pendidikan karakter zuhud dan anti-isrāf (pemborosan sumber daya alam) yang wajib dijaga sebagai komitmen ibadah dalam kondisi apa pun',
          'C. Kewajiban berwudhu hanya dengan air hujan atau air sumur',
          'D. Larangan menggunakan air sungai untuk bersuci dan wudhu'
        ],
        kunciJawaban: 1,
        pembahasan:
          'Hadits riwayat Ibnu Majah ini mengajarkan bahwa larangan isrāf (pemborosan) adalah nilai karakter moral dan prinsip syariat yang absolut, bukan karena kelangkaan air, melainkan untuk melatih jiwa manusia agar tidak serakah dan senantiasa menghargai nikmat Allah.'
      },
      {
        id: 'soal-3',
        pertanyaan:
          'Seorang siswa muslim menanam bibit pohon mangga di halaman belakang sekolahnya. Setelah bertahun-tahun ia lulus, pohon tersebut tumbuh rindang, buahnya dimakan oleh burung liar dan kelelawar, serta daunnya menaungi siswa-siswa yang berteduh. Berdasarkan sabda Rasulullah SAW (HR. Muslim No. 1552), apa status nilai dari pohon tersebut bagi siswa yang menanamnya?',
        pilihan: [
          'A. Pahalanya terputus karena ia sudah bukan siswa di sekolah tersebut',
          'B. Menjadi sedekah jariyah yang pahalanya terus mengalir selama pohon tersebut memberi manfaat bagi makhluk hidup',
          'C. Dianggap sia-sia karena buahnya dimakan oleh hewan liar bukan dijual untuk infak masjid',
          'D. Hanya bernilai estetika keindahan tanpa implikasi timbangan pahala akhirat'
        ],
        kunciJawaban: 1,
        pembahasan:
          'Hadits riwayat Muslim menegaskan bahwa apapun yang dimakan oleh manusia, burung, atau hewan dari pohon yang ditanam seorang muslim bernilai sedekah baginya hingga hari kiamat. Ini adalah wujud sedekah jariyah ekologis.'
      },
      {
        id: 'soal-4',
        pertanyaan:
          'Dalam sejarah peradaban Islam, Nabi Muhammad SAW dan para Khalifah menetapkan konsep "Himā" dan "Harīm". Bagaimana korelasi kedua konsep syariat klasik tersebut dengan penanganan krisis lingkungan hidup modern saat ini?',
        pilihan: [
          'A. Kedua konsep tersebut identik dengan penetapan Kawasan Konservasi Taman Nasional/Hutan Lindung dan Zona Sempadan Mata Air yang dilindungi hukum negara dari perusakan komersial',
          'B. Konsep tersebut hanya berlaku untuk unta dan kuda perang di padang pasir Jazirah Arab zaman dahulu',
          'C. Kedua konsep tersebut mewajibkan privatisasi hutan oleh konglomerat swasta untuk perkebunan sawit',
          'D. Menunjukkan bahwa Islam melarang manusia memanfaatkan kayu dan air untuk kebutuhan hidup'
        ],
        kunciJawaban: 0,
        pembahasan:
          'Prinsip Himā adalah penetapan cagar alam/hutan lindung oleh negara untuk konservasi satwa dan flora, sedangkan Harīm adalah zona penyangga di sekitar mata air dan sungai yang dilarang didirikan bangunan atau dicemari limbah. Keduanya selaras dengan hukum konservasi lingkungan modern.'
      },
      {
        id: 'soal-5',
        pertanyaan:
          'Perhatikan fenomena berikut: Sekelompok siswa rutin membeli jajanan minuman cup plastik setiap hari lalu membuang sampahnya ke saluran air di belakang kantin hingga tersumbat. Ketika terjadi hujan deras, air selokan meluap dan membanjiri lorong kelas. Berdasarkan konsep akhlak Islam, sikap yang paling tepat untuk memperbaiki kondisi tersebut adalah...',
        pilihan: [
          'A. Menyalahkan penjaga sekolah karena terlambat menguras selokan saat hujan turun',
          'B. Memindahkan letak kantin ke luar gerbang sekolah agar sekolah tidak dipenuhi sampah plastik',
          'C. Membangun kesadaran kolektif membawa tumbler pribadi (mengurangi plastik), bergotong royong membersihkan saluran air, dan menerapkan aturan sanksi edukatif bagi pembuang sampah sembarangan',
          'D. Membiarkan saluran air tersumbat sampai pihak dinas kebersihan kota datang membantu'
        ],
        kunciJawaban: 2,
        pembahasan:
          'Solusi Islam bersifat integratif dan preventif: diawali dengan perubahan gaya hidup mengurangi sampah (membawa tumbler/wadah sendiri), aksi nyata membersihkan saluran (amar ma\'ruf), dan penegakan tata tertib yang mendidik demi kemaslahatan bersama.'
      }
    ]
  }
};
