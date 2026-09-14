export type PerawiType = 'Bukhari' | 'Muslim' | 'Abu Dawud' | 'At-Tirmidzi' | 'An-Nasa\'i';

export interface MasterkuHadits {
  id: string;
  narrator: PerawiType;
  narratorFull: string;
  number: number;
  theme: string;
  arabic: string;
  latin?: string;
  translation: string;
  gradeRelevance: string; // 'Kelas VII' | 'Kelas VIII' | 'Kelas IX' | 'Semua Kelas'
  explanation: string;
}

export const PERAWI_INFO = {
  'Bukhari': {
    name: 'Imam Al-Bukhari',
    fullName: 'Abu Abdillah Muhammad bin Ismail al-Bukhari (194 - 256 H)',
    totalCount: 15,
    description: 'Penyusun kitab hadits paling shahih (Shahih Al-Bukhari), terkenal dengan ketelitian sanad dan hafalannya yang luar biasa.'
  },
  'Muslim': {
    name: 'Imam Muslim',
    fullName: 'Abu al-Husain Muslim bin al-Hajjaj an-Naisaburi (204 - 261 H)',
    totalCount: 15,
    description: 'Penyusun Shahih Muslim yang tersusun secara sistematis per bab fikih dan hukum dengan tingkat keshahihan nomor dua setelah Bukhari.'
  },
  'Abu Dawud': {
    name: 'Imam Abu Dawud',
    fullName: 'Sulaiman bin al-Asy\'ats as-Sijistani (202 - 275 H)',
    totalCount: 15,
    description: 'Penyusun Sunan Abi Dawud yang fokus pada hadits-hadits hukum, muamalah, dan etika kehidupan bermasyarakat.'
  },
  'At-Tirmidzi': {
    name: 'Imam At-Tirmidzi',
    fullName: 'Abu Isa Muhammad bin Isa at-Tirmidzi (209 - 279 H)',
    totalCount: 15,
    description: 'Penyusun Jami\' at-Tirmidzi dan Syamail Muhammadiyah yang kaya akan hadits akhlak, doa, serta penjelasan derajat hadits.'
  },
  'An-Nasa\'i': {
    name: 'Imam An-Nasa\'i',
    fullName: 'Ahmad bin Syu\'aib an-Nasa\'i (215 - 303 H)',
    totalCount: 15,
    description: 'Penyusun Sunan an-Nasa\'i (Al-Mujtaba) yang sangat ketat dalam menyaring perawi hadits dan terkenal dengan pembahasan ibadah praktis.'
  }
};

export const MASTERKU_HADITS_LIST: MasterkuHadits[] = [
  // ==================== 1. IMAM BUKHARI (15 HADITS) ====================
  {
    id: 'bukhari-1',
    narrator: 'Bukhari',
    narratorFull: 'Shahih Al-Bukhari',
    number: 1,
    theme: 'Ikhlas dan Niat dalam Setiap Amal',
    arabic: 'إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى',
    translation: 'Sesungguhnya segala amalan tergantung pada niatnya, dan sesungguhnya setiap orang akan mendapatkan balasan sesuai dengan apa yang ia niatkan.',
    gradeRelevance: 'Semua Kelas',
    explanation: 'Setiap kegiatan belajar, beribadah, dan membantu orang tua di sekolah harus diawali dengan niat ikhlas karena Allah SWT agar bernilai ibadah.'
  },
  {
    id: 'bukhari-2',
    narrator: 'Bukhari',
    narratorFull: 'Shahih Al-Bukhari',
    number: 8,
    theme: 'Lima Rukun Islam',
    arabic: 'بُنِيَ الإِسْلاَمُ عَلَى خَمْسٍ: شَهَادَةِ أَنْ لاَ إِلَهَ إِلاَّ اللَّهُ وَأَنَّ مُحَمَّدًا رَسُولُ اللَّهِ، وَإِقَامِ الصَّلاَةِ، وَإِيتَاءِ الزَّكَاةِ، وَالحَجِّ، وَصَوْمِ رَمَضَانَ',
    translation: 'Islam dibangun di atas lima perkara: bersaksi bahwa tidak ada sesembahan yang berhak disembah selain Allah dan Muhammad adalah utusan Allah, mendirikan salat, menunaikan zakat, haji ke Baitullah, dan puasa Ramadan.',
    gradeRelevance: 'Kelas VII',
    explanation: 'Dasar bangunan keimanan dan keislaman yang wajib dipelajari dan diamalkan oleh setiap muslim sejak usia sekolah.'
  },
  {
    id: 'bukhari-3',
    narrator: 'Bukhari',
    narratorFull: 'Shahih Al-Bukhari',
    number: 9,
    theme: 'Malu adalah Bagian dari Keimanan',
    arabic: 'الْحَيَاءُ شُعْبَةٌ مِنَ الإِيمَانِ',
    translation: 'Rasa malu (untuk berbuat dosa atau maksiat) itu adalah sebagian dari cabang keimanan.',
    gradeRelevance: 'Kelas VII',
    explanation: 'Siswa yang beriman memiliki rasa malu untuk menyontek, berkata kotor, atau merundung teman di sekolah.'
  },
  {
    id: 'bukhari-4',
    narrator: 'Bukhari',
    narratorFull: 'Shahih Al-Bukhari',
    number: 13,
    theme: 'Menyayangi Saudara Seiman',
    arabic: 'لاَ يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لِأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ',
    translation: 'Tidak sempurna iman salah seorang di antara kalian hingga ia mencintai untuk saudaranya apa yang ia cintai untuk dirinya sendiri.',
    gradeRelevance: 'Kelas VII',
    explanation: 'Mendidik sikap toleransi, empati, dan tolong-menolong antarteman di lingkungan SMPN 2 Rebang Tangkas.'
  },
  {
    id: 'bukhari-5',
    narrator: 'Bukhari',
    narratorFull: 'Shahih Al-Bukhari',
    number: 6018,
    theme: 'Menjaga Lisan dan Menghormati Tetangga',
    arabic: 'مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَاليَوْمِ الآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ، وَمَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَاليَوْمِ الآخِرِ فَلْيُكْرِمْ جَارَهُ',
    translation: 'Barang siapa yang beriman kepada Allah dan hari akhir, hendaklah ia berkata yang baik atau diam; dan barang siapa beriman kepada Allah dan hari akhir hendaklah memuliakan tetangganya.',
    gradeRelevance: 'Kelas VIII',
    explanation: 'Larangan melakukan cyberbullying, menyebarkan hoaks, serta adab hidup bertetangga yang rukun.'
  },
  {
    id: 'bukhari-6',
    narrator: 'Bukhari',
    narratorFull: 'Shahih Al-Bukhari',
    number: 5971,
    theme: 'Berbakti kepada Kedua Orang Tua',
    arabic: 'جَاءَ رَجُلٌ إِلَى رَسُولِ اللَّهِ صلى الله عليه وسلم فَقَالَ: مَنْ أَحَقُّ النَّاسِ بِحُسْنِ صَحَابَتِي؟ قَالَ: أُمُّكَ، قَالَ: ثُمَّ مَنْ؟ قَالَ: أُمُّكَ، قَالَ: ثُمَّ مَنْ؟ قَالَ: أُمُّكَ، قَالَ: ثُمَّ مَنْ؟ قَالَ: أَبُوكَ',
    translation: 'Seseorang datang kepada Rasulullah SAW dan bertanya: Siapakah orang yang paling berhak aku pergauli dengan baik? Beliau menjawab: Ibumu. Orang itu bertanya lagi: Kemudian siapa? Beliau menjawab: Ibumu. Orang itu bertanya: Kemudian siapa? Beliau menjawab: Ibumu. Orang itu bertanya: Kemudian siapa lagi? Beliau menjawab: Kemudian ayahmu.',
    gradeRelevance: 'Kelas VII',
    explanation: 'Kewajiban birrul walidain (berbakti kepada orang tua) dengan memprioritaskan kasih sayang dan penghormatan kepada ibu.'
  },
  {
    id: 'bukhari-7',
    narrator: 'Bukhari',
    narratorFull: 'Shahih Al-Bukhari',
    number: 6094,
    theme: 'Kejujuran Membawa kepada Kebaikan',
    arabic: 'عَلَيْكُمْ بِالصِّدْقِ، فَإِنَّ الصِّدْقَ يَهْدِي إِلَى البِرِّ، وَإِنَّ البِرَّ يَهْدِي إِلَى الجَنَّةِ',
    translation: 'Hendaklah kalian selalu berlaku jujur, karena sesungguhnya kejujuran itu membimbing kepada kebaikan, dan kebaikan itu membimbing ke surga.',
    gradeRelevance: 'Kelas VIII',
    explanation: 'Membentuk karakter integritas pelajar profil Pancasila yang jujur dalam tutur kata, tugas, dan ujian sekolah.'
  },
  {
    id: 'bukhari-8',
    narrator: 'Bukhari',
    narratorFull: 'Shahih Al-Bukhari',
    number: 6464,
    theme: 'Dua Nikmat yang Sering Dilalaikan',
    arabic: 'نِعْمَتَانِ مَغْبُونٌ فِيهِمَا كَثِيرٌ مِنَ النَّاسِ: الصِّحَّةُ وَالفَرَاغُ',
    translation: 'Dua kenikmatan yang sering memperdaya (melalaikan) banyak manusia adalah kesehatan dan waktu luang.',
    gradeRelevance: 'Kelas IX',
    explanation: 'Motivasi manajemen waktu bagi siswa agar tidak membuang masa muda dan kesehatan untuk hal sia-sia.'
  },
  {
    id: 'bukhari-9',
    narrator: 'Bukhari',
    narratorFull: 'Shahih Al-Bukhari',
    number: 5027,
    theme: 'Sebaik-baik Manusia adalah Pembelajar Al-Qur\'an',
    arabic: 'خَيْرُكُمْ مَنْ تَعَلَّمَ القُرْآنَ وَعَلَّمَهُ',
    translation: 'Sebaik-baik kalian adalah orang yang belajar Al-Qur\'an dan mengajarkannya kepada orang lain.',
    gradeRelevance: 'Semua Kelas',
    explanation: 'Semangat mencintai kitab suci Al-Qur\'an, membaca dengan tartil, memahami tajwid dan artinya.'
  },
  {
    id: 'bukhari-10',
    narrator: 'Bukhari',
    narratorFull: 'Shahih Al-Bukhari',
    number: 6011,
    theme: 'Menghindari Sikap Marah',
    arabic: 'أَنَّ رَجُلاً قَالَ لِلنَّبِيِّ صلى الله عليه وسلم: أَوْصِنِي، قَالَ: لاَ تَغْضَبْ، فَرَدَّدَ مِرَارًا، قَالَ: لاَ تَغْضَبْ',
    translation: 'Seseorang berkata kepada Nabi SAW: Berilah aku wasiat! Beliau bersabda: Jangan marah. Orang itu mengulanginya beberapa kali, dan Nabi tetap bersabda: Jangan marah.',
    gradeRelevance: 'Kelas VIII',
    explanation: 'Pentingnya mengendalikan emosi diri saat berselisih paham dengan kawan sebaya.'
  },
  {
    id: 'bukhari-11',
    narrator: 'Bukhari',
    narratorFull: 'Shahih Al-Bukhari',
    number: 5358,
    theme: 'Tangan di Atas Lebih Baik dari Tangan di Bawah',
    arabic: 'اليَدُ العُلْيَا خَيْرٌ مِنَ اليَدِ السُّفْلَى، وَاليَدُ العُلْيَا هِيَ المُنْفِقَةُ، وَالسُّفْلَى هِيَ السَّائِلَةُ',
    translation: 'Tangan yang di atas lebih baik daripada tangan yang di bawah. Tangan di atas adalah yang memberi infak, dan tangan di bawah adalah yang meminta-minta.',
    gradeRelevance: 'Kelas VIII',
    explanation: 'Menumbuhkan etos kerja mandiri, gemar bersedekah, dan tidak terbiasa meminta-minta.'
  },
  {
    id: 'bukhari-12',
    narrator: 'Bukhari',
    narratorFull: 'Shahih Al-Bukhari',
    number: 71,
    theme: 'Kemudahan Memahami Agama',
    arabic: 'مَنْ يُرِدِ اللَّهُ بِهِ خَيْرًا يُفَقِّهْهُ فِي الدِّينِ',
    translation: 'Barang siapa yang dikehendaki kebaikan oleh Allah, maka Dia akan menjadikannya paham mendalam tentang ilmu agamanya.',
    gradeRelevance: 'Semua Kelas',
    explanation: 'Tanda kebaikan seorang siswa adalah ketika ia bersemangat mempelajari akidah, fikih, dan akhlak Islam.'
  },
  {
    id: 'bukhari-13',
    narrator: 'Bukhari',
    narratorFull: 'Shahih Al-Bukhari',
    number: 2444,
    theme: 'Membantu Saudara yang Zhalim dan Dizhalimi',
    arabic: 'انْصُرْ أَخَاكَ ظَالِمًا أَوْ مَظْلُومًا، فَقَالَ رَجُلٌ: يَا رَسُولَ اللَّهِ أَنْصُرُهُ إِذَا كَانَ مَظْلُومًا، أَفَرَأَيْتَ إِنْ كَانَ ظَالِمًا كَيْفَ أَنْصُرُهُ؟ قَالَ: تَحْجُزُهُ أَوْ تَمْنَعُهُ مِنَ الظُّلْمِ فَإِنَّ ذَلِكَ نَصْرُهُ',
    translation: 'Tolonglah saudaramu yang berbuat zhalim atau yang dizhalimi. Seseorang bertanya: Wahai Rasulullah, aku menolongnya jika ia dizhalimi, lalu bagaimana menolongnya jika ia yang berbuat zhalim? Beliau bersabda: Engkau cegah atau halangi dia dari perbuatan zhalim itu, maka itulah bentuk menolongnya.',
    gradeRelevance: 'Kelas IX',
    explanation: 'Keberanian mencegah teman sekolah yang merundung atau menyakiti orang lain.'
  },
  {
    id: 'bukhari-14',
    narrator: 'Bukhari',
    narratorFull: 'Shahih Al-Bukhari',
    number: 5376,
    theme: 'Adab Makan: Membaca Basmalah dan Tangan Kanan',
    arabic: 'يَا غُلاَمُ سَمِّ اللَّهَ، وَكُلْ بِيَمِينِكَ، وَكُلْ مِمَّا يَلِيكَ',
    translation: 'Wahai anak muda, sebutlah nama Allah (bacalah Bismillah), makanlah dengan tangan kananmu, dan makanlah makanan yang berada di dekatmu.',
    gradeRelevance: 'Kelas VII',
    explanation: 'Adab kesopanan dan sunnah saat makan di kantin sekolah atau di rumah.'
  },
  {
    id: 'bukhari-15',
    narrator: 'Bukhari',
    narratorFull: 'Shahih Al-Bukhari',
    number: 6491,
    theme: 'Menjaga Hak Tubuh dan Keseimbangan Hidup',
    arabic: 'إِنَّ لِرَبِّكَ عَلَيْكَ حَقًّا، وَلِنَفْسِكَ عَلَيْكَ حَقًّا، وَلِأَهْلِكَ عَلَيْكَ حَقًّا، فَأَعْطِ كُلَّ ذِي حَقٍّ حَقَّهُ',
    translation: 'Sesungguhnya bagi Tuhanmu ada hak atas dirimu, bagi dirimu sendiri ada hak, dan bagi keluargamu ada hak atas dirimu; maka penuhilah hak masing-masing yang berhak itu.',
    gradeRelevance: 'Kelas IX',
    explanation: 'Menjaga keseimbangan antara belajar, beribadah, istirahat, dan berbakti kepada orang tua.'
  },

  // ==================== 2. IMAM MUSLIM (15 HADITS) ====================
  {
    id: 'muslim-1',
    narrator: 'Muslim',
    narratorFull: 'Shahih Muslim',
    number: 223,
    theme: 'Kebersihan adalah Sebagian dari Iman',
    arabic: 'الطُّهُورُ شَطْرُ الإِيمَانِ، وَالْحَمْدُ لِلَّهِ تَمْلأُ الْمِيزَانَ',
    translation: 'Bersuci (kebersihan) itu adalah sebagian dari keimanan, dan ucapan Alhamdulillah itu memenuhi timbangan amal.',
    gradeRelevance: 'Kelas VII',
    explanation: 'Membiasakan hidup bersih, menjaga wudu, dan merawat kebersihan lingkungan kelas sekolah.'
  },
  {
    id: 'muslim-2',
    narrator: 'Muslim',
    narratorFull: 'Shahih Muslim',
    number: 59,
    theme: 'Tanda-tanda Orang Munafik',
    arabic: 'آيَةُ الْمُنَافِقِ ثَلاَثٌ: إِذَا حَدَّثَ كَذَبَ، وَإِذَا وَعَدَ أَخْلَفَ، وَإِذَا اؤْتُمِنَ خَانَ',
    translation: 'Tanda orang munafik itu ada tiga: apabila berbicara ia berdusta, apabila berjanji ia mengingkari, dan apabila dipercaya (diberi amanah) ia berkhianat.',
    gradeRelevance: 'Kelas VIII',
    explanation: 'Menjaga amanah tugas kelompok, janji kepada guru dan teman, serta menjauhi sifat dusta.'
  },
  {
    id: 'muslim-3',
    narrator: 'Muslim',
    narratorFull: 'Shahih Muslim',
    number: 2699,
    theme: 'Keutamaan Menuntut Ilmu dan Membantu Kesulitan Orang Lain',
    arabic: 'مَنْ نَفَّسَ عَنْ مُؤْمِنٍ كُرْبَةً مِنْ كُرَبِ الدُّنْيَا نَفَّسَ اللَّهُ عَنْهُ كُرْبَةً مِنْ كُرَبِ يَوْمِ الْقِيَامَةِ... وَمَنْ سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا سَهَّلَ اللَّهُ لَهُ بِهِ طَرِيقًا إِلَى الْجَنَّةِ',
    translation: 'Barang siapa meringankan kesulitan seorang mukmin di dunia, Allah akan meringankan kesulitannya pada hari kiamat... Dan barang siapa menempuh suatu jalan untuk menuntut ilmu, Allah akan memudahkan baginya jalan menuju surga.',
    gradeRelevance: 'Semua Kelas',
    explanation: 'Pahala mulia bagi para pelajar SMP yang gigih bersekolah dan gemar menolong sesama.'
  },
  {
    id: 'muslim-4',
    narrator: 'Muslim',
    narratorFull: 'Shahih Muslim',
    number: 650,
    theme: 'Keutamaan Salat Berjamaah 27 Derajat',
    arabic: 'صَلاَةُ الْجَمَاعَةِ تَفْضُلُ صَلاَةَ الْفَذِّ بِسَبْعٍ وَعِشْرِينَ دَرَجَةً',
    translation: 'Salat berjamaah lebih utama daripada salat sendirian sebanyak dua puluh tujuh derajat.',
    gradeRelevance: 'Kelas VII',
    explanation: 'Disiplin melaksanakan salat Zhuhur berjamaah di musholla sekolah.'
  },
  {
    id: 'muslim-5',
    narrator: 'Muslim',
    narratorFull: 'Shahih Muslim',
    number: 2564,
    theme: 'Larangan Saling Membenci, Hasad, dan Mendiamkan',
    arabic: 'لاَ تَبَاغَضُوا، وَلاَ تَحَاسَدُوا، وَلاَ تَدَابَرُوا، وَكُونُوا عِبَادَ اللَّهِ إِخْوَانًا، وَلاَ يَحِلُّ لِمُسْلِمٍ أَنْ يَهْجُرَ أَخَاهُ فَوْقَ ثَلاَثِ لَيَالٍ',
    translation: 'Janganlah kalian saling membenci, jangan saling dengki (hasad), dan jangan saling membelakangi. Jadilah kalian hamba-hamba Allah yang bersaudara. Dan tidak halal bagi seorang muslim mendiamkan saudaranya lebih dari tiga hari.',
    gradeRelevance: 'Kelas VIII',
    explanation: 'Pentingnya menjaga perdamaian, saling memaafkan, dan tidak menyimpan dendam antarsiswa.'
  },
  {
    id: 'muslim-6',
    narrator: 'Muslim',
    narratorFull: 'Shahih Muslim',
    number: 2586,
    theme: 'Kasih Sayang Allah Lebih Luas dari Kemurkaan-Nya',
    arabic: 'إِنَّ اللَّهَ كَتَبَ كِتَابًا قَبْلَ أَنْ يَخْلُقَ الخَلْقَ: إِنَّ رَحْمَتِي سَبَقَتْ غَضَبِي',
    translation: 'Sesungguhnya Allah telah menetapkan ketetapan sebelum menciptakan makhluk: Sesungguhnya rahmat (kasih sayang)-Ku mendahului kemurkaan-Ku.',
    gradeRelevance: 'Kelas VII',
    explanation: 'Menumbuhkan rasa optimisme, harapan (raja\'), dan keyakinan akan luasnya ampunan Allah SWT.'
  },
  {
    id: 'muslim-7',
    narrator: 'Muslim',
    narratorFull: 'Shahih Muslim',
    number: 91,
    theme: 'Bahaya Kesombongan',
    arabic: 'لاَ يَدْخُلُ الْجَنَّةَ مَنْ كَانَ فِي قَلْبِهِ مِثْقَالُ ذَرَّةٍ مِنْ كِبْرٍ. قَالَ رَجُلٌ: إِنَّ الرَّجُلَ يُحِبُّ أَنْ يَكُونَ ثَوْبُهُ حَسَنًا وَنَعْلُهُ حَسَنًا. قَالَ: إِنَّ اللَّهَ جَمِيلٌ يُحِبُّ الْجَمَالَ، الْكِبْرُ بَطَرُ الْحَقِّ وَغَمْطُ النَّاسِ',
    translation: 'Tidak akan masuk surga orang yang di dalam hatinya ada kesombongan seberat biji sawi. Seseorang bertanya: Sesungguhnya ada orang yang suka berpakaian bagus dan memakai sandal bagus. Nabi bersabda: Sesungguhnya Allah itu Maha Indah dan menyukai keindahan. Kesombongan itu adalah menolak kebenaran dan meremehkan orang lain.',
    gradeRelevance: 'Kelas VIII',
    explanation: 'Pelajaran rendah hati (tawadhu\') dan tidak merasa lebih unggul dibanding teman sekelas.'
  },
  {
    id: 'muslim-8',
    narrator: 'Muslim',
    narratorFull: 'Shahih Muslim',
    number: 1631,
    theme: 'Tiga Amalan yang Pahalanya Mengalir Setelah Wafat',
    arabic: 'إِذَا مَاتَ الإِنْسَانُ انْقَطَعَ عَنْهُ عَمَلُهُ إِلاَّ مِنْ ثَلاَثَةٍ: إِلاَّ مِنْ صَدَقَةٍ جَارِيَةٍ، أَوْ عِلْمٍ يُنْتَفَعُ بِهِ، أَوْ وَلَدٍ صَالِحٍ يَدْعُو لَهُ',
    translation: 'Apabila manusia telah meninggal dunia, terputuslah semua amalnya kecuali tiga perkara: sedekah jariyah, ilmu yang bermanfaat, dan anak shaleh yang mendoakannya.',
    gradeRelevance: 'Kelas IX',
    explanation: 'Motivasi beramal jariyah, menyebarkan ilmu yang dipelajari di sekolah, dan menjadi anak sholeh yang berbakti.'
  },
  {
    id: 'muslim-9',
    narrator: 'Muslim',
    narratorFull: 'Shahih Muslim',
    number: 2568,
    theme: 'Larangan Berprasangka Buruk (Su\'uzhan)',
    arabic: 'إِيَّاكُمْ وَالظَّنَّ، فَإِنَّ الظَّنَّ أَكْذَبُ الْحَدِيثِ',
    translation: 'Jauhilah oleh kalian prasangka (buruk), karena sesungguhnya prasangka itu adalah sedusta-dustanya perkataan.',
    gradeRelevance: 'Kelas VIII',
    explanation: 'Menghindari fitnah, ghibah, dan menyangka buruk kepada sesama tanpa bukti yang jelas.'
  },
  {
    id: 'muslim-10',
    narrator: 'Muslim',
    narratorFull: 'Shahih Muslim',
    number: 49,
    theme: 'Mencegah Kemungkaran Sesuai Kemampuan',
    arabic: 'مَنْ رَأَى مِنْكُمْ مُنْكَرًا فَلْيُغَيِّرْهُ بِيَدِهِ، فَإِنْ لَمْ يَسْتَطِعْ فَبِلِسَانِهِ، فَإِنْ لَمْ يَسْتَطِعْ فَبِقَلْبِهِ، وَذَلِكَ أَضْعَفُ الإِيمَانِ',
    translation: 'Barang siapa di antara kalian melihat kemungkaran, hendaklah ia mengubahnya dengan tangannya (kekuasaan). Jika tidak mampu, maka dengan lisannya. Jika tidak mampu juga, maka dengan hatinya (menolak dalam hati), dan yang demikian itu adalah selemah-lemah iman.',
    gradeRelevance: 'Kelas IX',
    explanation: 'Kepedulian sosial untuk menasihati teman yang berbuat salah dengan cara santun dan bijaksana.'
  },
  {
    id: 'muslim-11',
    narrator: 'Muslim',
    narratorFull: 'Shahih Muslim',
    number: 2607,
    theme: 'Persaudaraan Muslim Seperti Satu Tubuh',
    arabic: 'مَثَلُ الْمُؤْمِنِينَ فِي تَوَادِّهِمْ وَتَرَاحُمِهِمْ وَتَعَاطُفِهِمْ مَثَلُ الْجَسَدِ، إِذَا اشْتَكَى مِنْهُ عُضْوٌ تَدَاعَى لَهُ سَائِرُ الْجَسَدِ بِالسَّهَرِ وَالْحُمَّى',
    translation: 'Perumpamaan orang-orang mukmin dalam hal saling mencintai, saling menyayangi, dan saling berlemah lembut adalah seperti satu tubuh; apabila satu anggota tubuh mengeluh sakit, maka seluruh tubuh ikut merasakannya dengan tidak bisa tidur dan demam.',
    gradeRelevance: 'Kelas VII',
    explanation: 'Menumbuhkan rasa solidaritas, solidaritas kemanusiaan, dan kepedulian terhadap teman yang sakit atau tertimpa musibah.'
  },
  {
    id: 'muslim-12',
    narrator: 'Muslim',
    narratorFull: 'Shahih Muslim',
    number: 2588,
    theme: 'Menutupi Aib Sesama Muslim',
    arabic: 'لاَ يَسْتُرُ عَبْدٌ عَبْدًا فِي الدُّنْيَا إِلاَّ سَتَرَهُ اللَّهُ يَوْمَ الْقِيَامَةِ',
    translation: 'Tidaklah seorang hamba menutupi (aib) hamba lainnya di dunia, melainkan Allah akan menutupi aibnya pada hari kiamat.',
    gradeRelevance: 'Kelas VIII',
    explanation: 'Larangan membongkar kekurangan teman di depan khalayak atau menyebarkannya di media sosial.'
  },
  {
    id: 'muslim-13',
    narrator: 'Muslim',
    narratorFull: 'Shahih Muslim',
    number: 2564,
    theme: 'Takwa Tempatnya di Dalam Hati',
    arabic: 'التَّقْوَى هَاهُنَا - وَيُشِيرُ إِلَى صَدْرِهِ ثَلاَثَ مَرَّاتٍ',
    translation: 'Takwa itu letaknya di sini — seraya Nabi SAW menunjuk ke dadanya sebanyak tiga kali.',
    gradeRelevance: 'Kelas VII',
    explanation: 'Ketaatan sejati bukan sekadar tampilan lahiriah, melainkan ketulusan hati yang takut kepada Allah SWT.'
  },
  {
    id: 'muslim-14',
    narrator: 'Muslim',
    narratorFull: 'Shahih Muslim',
    number: 2956,
    theme: 'Dunia Penjara bagi Orang Mukmin',
    arabic: 'الدُّنْيَا سِجْنُ الْمُؤْمِنِ وَجَنَّةُ الْكَافِرِ',
    translation: 'Dunia ini adalah penjara bagi orang yang beriman (karena dibatasi oleh aturan syariat) dan surga bagi orang kafir.',
    gradeRelevance: 'Kelas IX',
    explanation: 'Memahami bahwa kesabaran menjalankan syariat di dunia akan berbuah kenikmatan abadi di surga kelak.'
  },
  {
    id: 'muslim-15',
    narrator: 'Muslim',
    narratorFull: 'Shahih Muslim',
    number: 2009,
    theme: 'Larangan Minum dan Makan Berdiri Tanpa Udzur',
    arabic: 'أَنَّ النَّبِيَّ صلى الله عليه وسلم نَهَى عَنِ الشُّرْبِ قَائِمًا',
    translation: 'Bahwasanya Nabi SAW melarang minum sambil berdiri.',
    gradeRelevance: 'Kelas VII',
    explanation: 'Adab kesopanan dan kesehatan dalam mengonsumsi makanan serta minuman sehari-hari.'
  },

  // ==================== 3. IMAM ABU DAWUD (15 HADITS) ====================
  {
    id: 'abudawud-1',
    narrator: 'Abu Dawud',
    narratorFull: 'Sunan Abi Dawud',
    number: 4941,
    theme: 'Menyayangi Makhluk di Bumi',
    arabic: 'الرَّاحِمُونَ يَرْحَمُهُمُ الرَّحْمَنُ، ارْحَمُوا مَنْ فِي الأَرْضِ يَرْحَمْكُمْ مَنْ فِي السَّمَاءِ',
    translation: 'Orang-orang yang penyayang akan disayangi oleh Dzat Yang Maha Pengasih. Sayangilah siapa yang ada di muka bumi, niscaya yang ada di langit akan menyayangi kalian.',
    gradeRelevance: 'Kelas VII',
    explanation: 'Menanamkan rasa cinta kasih terhadap sesama manusia, hewan, dan kelestarian alam lingkungan sekitar.'
  },
  {
    id: 'abudawud-2',
    narrator: 'Abu Dawud',
    narratorFull: 'Sunan Abi Dawud',
    number: 495,
    theme: 'Pentingnya Salat Sejak Usia Dini',
    arabic: 'مُرُوا أَوْلاَدَكُمْ بِالصَّلاَةِ وَهُمْ أَبْنَاءُ سَبْعِ سِنِينَ، وَاضْرِبُوهُمْ عَلَيْهَا وَهُمْ أَبْنَاءُ عَشْرٍ، وَفَرِّقُوا بَيْنَهُمْ فِي الْمَضَاجِعِ',
    translation: 'Perintahkanlah anak-anak kalian untuk mendirikan salat ketika mereka berusia tujuh tahun, dan pukullah (dengan pukulan mendidik) jika meninggalkannya ketika berusia sepuluh tahun, serta pisahkanlah tempat tidur mereka.',
    gradeRelevance: 'Kelas VII',
    explanation: 'Mendidik pembiasaan salat fardhu lima waktu secara konsisten dan adab kesopanan dalam keluarga.'
  },
  {
    id: 'abudawud-3',
    narrator: 'Abu Dawud',
    narratorFull: 'Sunan Abi Dawud',
    number: 3641,
    theme: 'Para Ulama Pewaris Para Nabi',
    arabic: 'وَإِنَّ الْعُلَمَاءَ وَرَثَةُ الأَنْبِيَاءِ، وَإِنَّ الأَنْبِيَاءَ لَمْ يُوَرِّثُوا دِينَارًا وَلاَ دِرْهَمًا، وَإِنَّمَا وَرَّثُوا الْعِلْمَ، فَمَنْ أَخَذَهُ أَخَذَ بِحَظٍّ وَافِرٍ',
    translation: 'Dan sesungguhnya para ulama adalah pewaris para nabi; dan para nabi tidaklah mewariskan dinar ataupun dirham, melainkan mereka mewariskan ilmu. Barang siapa mengambilnya, maka ia telah mengambil bagian yang sangat berharga.',
    gradeRelevance: 'Kelas VIII',
    explanation: 'Menghormati guru, ustadz, dan ulama yang telah membimbing keilmuan dan akhlak siswa.'
  },
  {
    id: 'abudawud-4',
    narrator: 'Abu Dawud',
    narratorFull: 'Sunan Abi Dawud',
    number: 4799,
    theme: 'Akhlak Mulia Menyamai Pahala Puasa dan Salat Malam',
    arabic: 'إِنَّ الْمُؤْمِنَ لَيُدْرِكُ بِحُسْنِ خُلُقِهِ دَرَجَةَ الصَّائِمِ الْقَائِمِ',
    translation: 'Sesungguhnya seorang mukmin dengan akhlaknya yang baik dapat mencapai derajat orang yang senantiasa berpuasa (di siang hari) dan salat malam.',
    gradeRelevance: 'Kelas VIII',
    explanation: 'Akhlak budi pekerti yang santun memiliki bobot timbangan amal yang luar biasa di sisi Allah.'
  },
  {
    id: 'abudawud-5',
    narrator: 'Abu Dawud',
    narratorFull: 'Sunan Abi Dawud',
    number: 4784,
    theme: 'Menjamin Rumah di Surga bagi yang Menahan Debat Kusir',
    arabic: 'أَنَا زَعِيمٌ بِبَيْتٍ فِي رَبَضِ الْجَنَّةِ لِمَنْ تَرَكَ الْمِرَاءَ وَإِنْ كَانَ مُحِقًّا، وَبِبَيْتٍ فِي وَسَطِ الْجَنَّةِ لِمَنْ تَرَكَ الْكَذِبَ وَإِنْ كَانَ مَازِحًا',
    translation: 'Aku menjamin sebuah rumah di pinggir surga bagi orang yang meninggalkan perdebatan kusir meskipun ia benar; dan sebuah rumah di tengah surga bagi orang yang meninggalkan kebohongan meskipun dalam keadaan bercanda.',
    gradeRelevance: 'Kelas VIII',
    explanation: 'Tidak berdebat yang memicu permusuhan dan tidak membuat prank/dusta demi lelucon di pergaulan sekolah.'
  },
  {
    id: 'abudawud-6',
    narrator: 'Abu Dawud',
    narratorFull: 'Sunan Abi Dawud',
    number: 1536,
    theme: 'Doa Memohon Perlindungan dari Kemalasan dan Utang',
    arabic: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَأَعُوذُ بِكَ مِنَ الْعَجْزِ وَالْكَسَلِ، وَأَعُوذُ بِكَ مِنَ الْجُبْنِ وَالْبُخْلِ، وَأَعُوذُ بِكَ مِنْ غَلَبَةِ الدَّيْنِ وَقَهْرِ الرِّجَالِ',
    translation: 'Ya Allah, sesungguhnya aku berlindung kepada-Mu dari rasa gundah dan sedih, dari kelemahan dan kemalasan, dari sifat pengecut dan kikir, serta dari lilitan utang dan penindasan orang lain.',
    gradeRelevance: 'Semua Kelas',
    explanation: 'Doa harian yang sangat dianjurkan dibaca para siswa sebelum belajar di pagi hari agar tidak malas.'
  },
  {
    id: 'abudawud-7',
    narrator: 'Abu Dawud',
    narratorFull: 'Sunan Abi Dawud',
    number: 5088,
    theme: 'Doa Ketika Masuk dan Keluar Rumah',
    arabic: 'بِسْمِ اللَّهِ تَوَكَّلْتُ عَلَى اللَّهِ، لاَ حَوْلَ وَلاَ قُوَّةَ إِلاَّ بِاللَّهِ',
    translation: 'Dengan menyebut nama Allah, aku bertawakal kepada Allah, tiada daya dan upaya kecuali dengan pertolongan Allah.',
    gradeRelevance: 'Kelas VII',
    explanation: 'Adab tawakal saat melangkahkan kaki berangkat ke sekolah SMPN 2 Rebang Tangkas setiap pagi.'
  },
  {
    id: 'abudawud-8',
    narrator: 'Abu Dawud',
    narratorFull: 'Sunan Abi Dawud',
    number: 4800,
    theme: 'Pemberat Timbangan Amal di Hari Kiamat',
    arabic: 'مَا مِنْ شَيْءٍ أَثْقَلُ فِي مِيزَانِ الْمُؤْمِنِ يَوْمَ الْقِيَامَةِ مِنْ حُسْنِ الْخُلُقِ',
    translation: 'Tidak ada sesuatu pun yang lebih berat di timbangan amal seorang mukmin pada hari kiamat selain akhlak yang terpuji.',
    gradeRelevance: 'Kelas IX',
    explanation: 'Motivasi menumbuhkan kesopanan, tutur kata yang teduh, dan empati kepada sesama teman.'
  },
  {
    id: 'abudawud-9',
    narrator: 'Abu Dawud',
    narratorFull: 'Sunan Abi Dawud',
    number: 4833,
    theme: 'Menjaga Rahasia Majelis / Pertemuan',
    arabic: 'الْمَجَالِسُ بِالأَمَانَةِ',
    translation: 'Pertemuan-pertemuan (majelis) itu terikat dengan amanah (untuk menjaga kerahasiaan hal-hal pribadi).',
    gradeRelevance: 'Kelas VIII',
    explanation: 'Menjaga privasi kawan dan tidak membocorkan curhatan pribadi ke ruang publik.'
  },
  {
    id: 'abudawud-10',
    narrator: 'Abu Dawud',
    narratorFull: 'Sunan Abi Dawud',
    number: 4920,
    theme: 'Menghormati yang Lebih Tua dan Menyayangi yang Muda',
    arabic: 'لَيْسَ مِنَّا مَنْ لَمْ يَرْحَمْ صَغِيرَنَا، وَيَعْرِفْ حَقَّ كَبِيرِنَا',
    translation: 'Bukan termasuk golongan kami orang yang tidak menyayangi yang lebih muda di antara kami dan tidak mengerti hak (kehormatan) orang yang lebih tua.',
    gradeRelevance: 'Kelas VII',
    explanation: 'Sikap sopan santun adik kelas VII kepada kakak kelas VIII & IX serta penghormatan kepada bapak/ibu dewan guru.'
  },
  {
    id: 'abudawud-11',
    narrator: 'Abu Dawud',
    narratorFull: 'Sunan Abi Dawud',
    number: 4786,
    theme: 'Larangan Menakut-nakuti Teman Muslim (Prank Bahaya)',
    arabic: 'لاَ يَحِلُّ لِمُسْلِمٍ أَنْ يُرَوِّعَ مُسْلِمًا',
    translation: 'Tidak halal bagi seorang muslim menakut-nakuti (membuat kaget membahayakan) sesama muslim.',
    gradeRelevance: 'Kelas VIII',
    explanation: 'Larangan melakukan tindakan usil, menyembunyikan barang teman, atau prank yang membahayakan psikis/fisik.'
  },
  {
    id: 'abudawud-12',
    narrator: 'Abu Dawud',
    narratorFull: 'Sunan Abi Dawud',
    number: 3535,
    theme: 'Larangan Berkhianat Meskipun Dikhianati',
    arabic: 'أَدِّ الأَمَانَةَ إِلَى مَنِ ائْتَمَنَكَ، وَلاَ تَخُنْ مَنْ خَانَكَ',
    translation: 'Tunaikanlah amanah kepada orang yang mempercayaimu, dan janganlah engkau berkhianat kepada orang yang pernah mengkhianatimu.',
    gradeRelevance: 'Kelas IX',
    explanation: 'Kematangan karakter: tidak membalas keburukan dengan keburukan serupa, melainkan tetap memegang teguh kejujuran.'
  },
  {
    id: 'abudawud-13',
    narrator: 'Abu Dawud',
    narratorFull: 'Sunan Abi Dawud',
    number: 1479,
    theme: 'Doa adalah Inti dari Ibadah',
    arabic: 'الدُّعَاءُ هُوَ الْعِبَادَةُ',
    translation: 'Doa itu adalah (inti) ibadah itu sendiri.',
    gradeRelevance: 'Kelas VII',
    explanation: 'Mengajarkan siswa untuk selalu berdoa memohon petunjuk dan pertolongan Allah SWT di segala situasi.'
  },
  {
    id: 'abudawud-14',
    narrator: 'Abu Dawud',
    narratorFull: 'Sunan Abi Dawud',
    number: 5224,
    theme: 'Menebarkan Salam Menumbuhkan Kasih Sayang',
    arabic: 'أَفْشُوا السَّلاَمَ كَيْ تَعْلُوا',
    translation: 'Sebarkanlah salam di antara kalian niscaya kalian akan menjadi mulia (dan saling mencintai).',
    gradeRelevance: 'Kelas VII',
    explanation: 'Membudayakan budaya 5S (Senyum, Salam, Sapa, Sopan, Santun) di gerbang sekolah setiap hari.'
  },
  {
    id: 'abudawud-15',
    narrator: 'Abu Dawud',
    narratorFull: 'Sunan Abi Dawud',
    number: 4904,
    theme: 'Menghindari Sikap Hasad (Iri Hati)',
    arabic: 'إِيَّاكُمْ وَالْحَسَدَ، فَإِنَّ الْحَسَدَ يَأْكُلُ الْحَسَنَاتِ كَمَا تَأْكُلُ النَّارُ الْحَطَبَ',
    translation: 'Jauhilah sifat hasad (dengki), karena sesungguhnya hasad itu memakan kebaikan sebagaimana api melahap kayu bakar.',
    gradeRelevance: 'Kelas VIII',
    explanation: 'Merasa senang dan bersyukur atas prestasi teman dan tidak merasa iri hati terhadap rezeki orang lain.'
  },

  // ==================== 4. IMAM AT-TIRMIDZI (15 HADITS) ====================
  {
    id: 'tirmidzi-1',
    narrator: 'At-Tirmidzi',
    narratorFull: 'Jami\' At-Tirmidzi',
    number: 1956,
    theme: 'Senyum kepada Saudara adalah Sedekah',
    arabic: 'تَبَسُّمُكَ فِي وَجْهِ أَخِيكَ لَكَ صَدَقَةٌ',
    translation: 'Senyumanmu di hadapan saudaramu adalah bernilai sedekah bagimu.',
    gradeRelevance: 'Kelas VII',
    explanation: 'Sedekah tidak selalu berupa uang; wajah yang ramah dan bersahabat menghadirkan kebahagiaan bagi orang lain.'
  },
  {
    id: 'tirmidzi-2',
    narrator: 'At-Tirmidzi',
    narratorFull: 'Jami\' At-Tirmidzi',
    number: 2516,
    theme: 'Tinggalkan yang Meragukan Menuju yang Meyakinkan',
    arabic: 'دَعْ مَا يَرِيبُكَ إِلَى مَا لاَ يَرِيبُكَ، فَإِنَّ الصِّدْقَ طُمَأْنِينَةٌ، وَإِنَّ الْكَذِبَ رِيبَةٌ',
    translation: 'Tinggalkanlah apa yang meragukanmu kepada apa yang tidak meragukanmu. Karena sesungguhnya kejujuran itu mendatangkan ketenangan, sedangkan kedustaan itu mendatangkan keraguan.',
    gradeRelevance: 'Kelas VIII',
    explanation: 'Prinsip wara\' dan kehati-hatian dalam memilih makanan halal, pergaulan, serta menghindari hal syubhat.'
  },
  {
    id: 'tirmidzi-3',
    narrator: 'At-Tirmidzi',
    narratorFull: 'Jami\' At-Tirmidzi',
    number: 1987,
    theme: 'Sebaik-baik Manusia adalah yang Terbaik bagi Keluarganya',
    arabic: 'خَيْرُكُمْ خَيْرُكُمْ لِأَهْلِهِ، وَأَنَا خَيْرُكُمْ لِأَهْلِي',
    translation: 'Sebaik-baik kalian adalah yang terbaik sikapnya kepada keluarganya, dan aku adalah orang yang terbaik di antara kalian kepada keluargaku.',
    gradeRelevance: 'Kelas VII',
    explanation: 'Menerapkan adab berlemah lembut, membantu ibu di dapur, dan menghormati saudara di rumah.'
  },
  {
    id: 'tirmidzi-4',
    narrator: 'At-Tirmidzi',
    narratorFull: 'Jami\' At-Tirmidzi',
    number: 2317,
    theme: 'Tanda Keislaman yang Baik: Meninggalkan Hal yang Tak Berguna',
    arabic: 'مِنْ حُسْنِ إِسْلاَمِ الْمَرْءِ تَرْكُهُ مَا لاَ يَعْنِيهِ',
    translation: 'Di antara tanda kebaikan keislaman seseorang adalah meninggalkan apa yang tidak bermanfaat baginya.',
    gradeRelevance: 'Kelas VIII',
    explanation: 'Fokus pada cita-cita dan belajar, tidak menghabiskan waktu dengan bermain game berlebihan atau ikut campur urusan orang lain.'
  },
  {
    id: 'tirmidzi-5',
    narrator: 'At-Tirmidzi',
    narratorFull: 'Jami\' At-Tirmidzi',
    number: 1970,
    theme: 'Takwa kepada Allah di Manapun Berada',
    arabic: 'اتَّقِ اللَّهَ حَيْثُمَا كُنْتَ، وَأَتْبِعِ السَّيِّئَةَ الْحَسَنَةَ تَمْحُهَا، وَخَالِقِ النَّاسَ بِخُلُقٍ حَسَنٍ',
    translation: 'Bertakwalah kepada Allah di manapun kamu berada, iringilah perbuatan buruk dengan perbuatan baik niscaya kebaikan itu akan menghapusnya, dan pergaulilah manusia dengan akhlak yang mulia.',
    gradeRelevance: 'Semua Kelas',
    explanation: 'Tiga rumus kehidupan pelajar muslim: muraqabah (merasa diawasi Allah), segera bertaubat bila bersalah, dan ramah kepada semua orang.'
  },
  {
    id: 'tirmidzi-6',
    narrator: 'At-Tirmidzi',
    narratorFull: 'Jami\' At-Tirmidzi',
    number: 2488,
    theme: 'Pertanyaan di Padang Mahsyar tentang Empat Perkara',
    arabic: 'لاَ تَزُولُ قَدَمَا عَبْدٍ يَوْمَ الْقِيَامَةِ حَتَّى يُسْأَلَ عَنْ عُمُرِهِ فِيمَا أَفْنَاهُ، وَعَنْ عِلْمِهِ فِيمَ فَعَلَ، وَعَنْ مَالِهِ مِنْ أَيْنَ اكْتَسَبَهُ وَفِيمَ أَنْفَقَهُ، وَعَنْ جِسْمِهِ فِيمَ أَبْلاَهُ',
    translation: 'Tidak akan bergeser kedua kaki seorang hamba pada hari kiamat hingga ia ditanya tentang: umurnya untuk apa dihabiskan, ilmunya bagaimana diamalkan, hartanya dari mana diperoleh dan ke mana dibelanjakan, serta tubuhnya untuk apa digunakan.',
    gradeRelevance: 'Kelas IX',
    explanation: 'Kesadaran hari akhir (yaumul hisab) agar para remaja memanfaatkan masa mudanya untuk menuntut ilmu bermanfaat.'
  },
  {
    id: 'tirmidzi-7',
    narrator: 'At-Tirmidzi',
    narratorFull: 'Jami\' At-Tirmidzi',
    number: 2517,
    theme: 'Menjaga Syariat Allah, Allah Akan Menjagamu',
    arabic: 'احْفَظِ اللَّهَ يَحْفَظْكَ، احْفَظِ اللَّهَ تَجِدْهُ تُجَاهَكَ، إِذَا سَأَلْتَ فَاسْأَلِ اللَّهَ، وَإِذَا اسْتَعَنْتَ فَاسْتَعِنْ بِاللَّهِ',
    translation: 'Jagalah (aturan-aturan) Allah, niscaya Allah akan menjagamu. Jagalah Allah, niscaya engkau akan mendapati-Nya di hadapanmu. Jika engkau meminta, mintalah kepada Allah, dan jika engkau memohon pertolongan, mohonlah pertolongan kepada Allah.',
    gradeRelevance: 'Kelas VII',
    explanation: 'Wasiat emas Rasulullah SAW kepada Ibnu Abbas: mengokohkan tauhid dan keyakinan dalam dada para pemuda.'
  },
  {
    id: 'tirmidzi-8',
    narrator: 'At-Tirmidzi',
    narratorFull: 'Jami\' At-Tirmidzi',
    number: 2499,
    theme: 'Rasa Takut dan Harap kepada Allah',
    arabic: 'إِنَّ الْمُؤْمِنَ يَرَى ذُنُوبَهُ كَأَنَّهُ قَاعِدٌ تَحْتَ جَبَلٍ يَخَافُ أَنْ يَقَعَ عَلَيْهِ',
    translation: 'Sesungguhnya seorang mukmin melihat dosa-dosanya seolah-olah ia sedang duduk di bawah kaki gunung yang ia khawatir gunung itu akan runtuh menimpanya.',
    gradeRelevance: 'Kelas VIII',
    explanation: 'Hati yang peka dan tidak meremehkan kesalahan-kesalahan kecil.'
  },
  {
    id: 'tirmidzi-9',
    narrator: 'At-Tirmidzi',
    narratorFull: 'Jami\' At-Tirmidzi',
    number: 2321,
    theme: 'Orang Kaya Hakiki adalah Kaya Hati (Qana\'ah)',
    arabic: 'لَيْسَ الْغِنَى عَنْ كَثْرَةِ الْعَرَضِ، وَلَكِنَّ الْغِنَى غِنَى النَّفْسِ',
    translation: 'Bukanlah kekayaan itu karena banyaknya harta benda, melainkan kekayaan hakiki adalah kekayaan jiwa (rasa puas dan qana\'ah).',
    gradeRelevance: 'Kelas VIII',
    explanation: 'Mendidik sikap bersyukur, qana\'ah, dan tidak memaksakan gaya hidup berlebihan di kalangan pelajar.'
  },
  {
    id: 'tirmidzi-10',
    narrator: 'At-Tirmidzi',
    narratorFull: 'Jami\' At-Tirmidzi',
    number: 2167,
    theme: 'Tawakal Seperti Burung Mencari Nafkah',
    arabic: 'لَوْ أَنَّكُمْ تَوَكَّلْتُمْ عَلَى اللَّهِ حَقَّ تَوَكُّلِهِ لَرَزَقَكُمْ كَمَا يَرْزُقُ الطَّيْرَ، تَغْدُو خِمَاصًا وَتَرُوحُ بِطَانًا',
    translation: 'Seandainya kalian bertawakal kepada Allah dengan sebenar-benar tawakal, niscaya Dia akan memberi kalian rezeki sebagaimana Dia memberi rezeki kepada burung; yang pergi di pagi hari dalam keadaan lapar dan pulang di petang hari dalam keadaan kenyang.',
    gradeRelevance: 'Kelas IX',
    explanation: 'Tawakal bukan berarti berdiam diri, melainkan berusaha keras diiringi kepasrahan doa kepada Allah.'
  },
  {
    id: 'tirmidzi-11',
    narrator: 'At-Tirmidzi',
    narratorFull: 'Jami\' At-Tirmidzi',
    number: 2398,
    theme: 'Seseorang Bersama Orang yang Dicintainya di Hari Akhir',
    arabic: 'الْمَرْءُ مَعَ مَنْ أَحَبَّ',
    translation: 'Seseorang itu akan dikumpulkan bersama orang yang dicintainya (pada hari kiamat).',
    gradeRelevance: 'Kelas IX',
    explanation: 'Menjadikan Nabi Muhammad SAW, sahabat, dan orang-orang saleh sebagai idola utama hidup kita.'
  },
  {
    id: 'tirmidzi-12',
    narrator: 'At-Tirmidzi',
    narratorFull: 'Jami\' At-Tirmidzi',
    number: 2378,
    theme: 'Pengaruh Teman Dekat dalam Pembentukan Karakter',
    arabic: 'الرَّجُلُ عَلَى دِينِ خَلِيلِهِ، فَلْيَنْظُرْ أَحَدُكُمْ مَنْ يُخَالِلُ',
    translation: 'Seseorang itu mengikuti agama (watak dan kebiasaan) sahabat karibnya, maka hendaklah salah seorang di antara kalian memperhatikan siapa yang ia jadikan sahabat karib.',
    gradeRelevance: 'Kelas VII',
    explanation: 'Memilih teman bergaul yang saleh, rajin belajar, dan saling mengingatkan dalam kebaikan.'
  },
  {
    id: 'tirmidzi-13',
    narrator: 'At-Tirmidzi',
    narratorFull: 'Jami\' At-Tirmidzi',
    number: 2686,
    theme: 'Pahala Orang yang Menunjukkan Kebaikan',
    arabic: 'مَنْ دَلَّ عَلَى خَيْرٍ فَلَهُ مِثْلُ أَجْرِ فَاعِلِهِ',
    translation: 'Barang siapa yang menunjukkan kepada suatu kebaikan, maka baginya pahala seperti pahala orang yang mengerjakannya.',
    gradeRelevance: 'Semua Kelas',
    explanation: 'Mengajak teman ikut salat berjamaah, berbagi catatan materi pelajaran, dan menebar motivasi belajar.'
  },
  {
    id: 'tirmidzi-14',
    narrator: 'At-Tirmidzi',
    narratorFull: 'Jami\' At-Tirmidzi',
    number: 3373,
    theme: 'Membaca Satu Huruf Al-Qur\'an Berlipat 10 Pahala',
    arabic: 'مَنْ قَرَأَ حَرْفًا مِنْ كِتَابِ اللَّهِ فَلَهُ بِهِ حَسَنَةٌ، وَالحَسَنَةُ بِعَشْرِ أَمْثَالِهَا، لاَ أَقُولُ الم حَرْفٌ، وَلَكِنْ أَلِفٌ حَرْفٌ وَلاَمٌ حَرْفٌ وَمِيمٌ حَرْفٌ',
    translation: 'Barang siapa membaca satu huruf dari Kitabullah (Al-Qur\'an), maka baginya satu kebaikan, dan satu kebaikan itu dilipatgandakan menjadi sepuluh kebaikan semisal. Aku tidak mengatakan Alif Lam Mim itu satu huruf, melainkan Alif satu huruf, Lam satu huruf, dan Mim satu huruf.',
    gradeRelevance: 'Kelas VII',
    explanation: 'Pahala agung tilawah Al-Qur\'an setiap hari bagi para pelajar muslim.'
  },
  {
    id: 'tirmidzi-15',
    narrator: 'At-Tirmidzi',
    narratorFull: 'Jami\' At-Tirmidzi',
    number: 1920,
    theme: 'Berlapang Dada dalam Memaafkan',
    arabic: 'وَمَا زَادَ اللَّهُ عَبْدًا بِعَفْوٍ إِلاَّ عِزًّا، وَمَا تَوَاضَعَ أَحَدٌ لِلَّهِ إِلاَّ رَفَعَهُ اللَّهُ',
    translation: 'Dan tidaklah Allah menambah bagi seorang hamba karena sifat memaafkan melainkan kemuliaan, dan tidaklah seseorang merendahkan hati (tawadhu\') karena Allah melainkan Allah akan mengangkat derajatnya.',
    gradeRelevance: 'Kelas VIII',
    explanation: 'Memaafkan kesalahan kawan yang meminta maaf tidak membuat kita hina, justru membuat kita mulia di sisi Allah.'
  },

  // ==================== 5. IMAM AN-NASA'I (15 HADITS) ====================
  {
    id: 'nasai-1',
    narrator: 'An-Nasa\'i',
    narratorFull: 'Sunan An-Nasa\'i',
    number: 3104,
    theme: 'Surga Berada di Bawah Telapak Kaki Ibu',
    arabic: 'الْزَمْ رِجْلَهَا فَثَمَّ الْجَنَّةُ',
    translation: 'Tetaplah berbakti dan bersimpuh di kaki ibumu, karena di sanalah surga berada.',
    gradeRelevance: 'Kelas VII',
    explanation: 'Menegaskan keagungan derajat ibu dan keharusan memohon ridha orang tua dalam menggapai kesuksesan belajar.'
  },
  {
    id: 'nasai-2',
    narrator: 'An-Nasa\'i',
    narratorFull: 'Sunan An-Nasa\'i',
    number: 3140,
    theme: 'Allah Hanya Menerima Amal yang Ikhlas',
    arabic: 'إِنَّ اللَّهَ لاَ يَقْبَلُ مِنَ الْعَمَلِ إِلاَّ مَا كَانَ لَهُ خَالِصًا وَابْتُغِيَ بِهِ وَجْهُهُ',
    translation: 'Sesungguhnya Allah tidak menerima suatu amal perbuatan kecuali amal yang dilakukan dengan ikhlas murni hanya untuk-Nya dan mengharap keridhaan wajah-Nya.',
    gradeRelevance: 'Semua Kelas',
    explanation: 'Ibadah dan belajar tidak boleh diniatkan demi pujian manusia (riya\') melainkan semata-mata karena Allah SWT.'
  },
  {
    id: 'nasai-3',
    narrator: 'An-Nasa\'i',
    narratorFull: 'Sunan An-Nasa\'i',
    number: 468,
    theme: 'Salat Tiang Agama dan Pembatas Kekufuran',
    arabic: 'إِنَّ بَيْنَ الرَّجُلِ وَبَيْنَ الشِّرْكِ وَالْكُفْرِ تَرْكَ الصَّلاَةِ',
    translation: 'Sesungguhnya pembatas antara seseorang dengan kemusyrikan dan kekafiran adalah meninggalkan salat.',
    gradeRelevance: 'Kelas VII',
    explanation: 'Salat lima waktu adalah garis pembeda utama keimanan dan kewajiban paling krusial bagi setiap muslim.'
  },
  {
    id: 'nasai-4',
    narrator: 'An-Nasa\'i',
    narratorFull: 'Sunan An-Nasa\'i',
    number: 5040,
    theme: 'Doa Perlindungan dari Ilmu yang Tak Bermanfaat',
    arabic: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ عِلْمٍ لاَ يَنْفَعُ، وَمِنْ قَلْبٍ لاَ يَخْشَعُ، وَمِنْ نَفْسٍ لاَ تَشْبَعُ، وَمِنْ دَعْوَةٍ لاَ يُسْتَجَابُ لَهَا',
    translation: 'Ya Allah, sesungguhnya aku berlindung kepada-Mu dari ilmu yang tidak bermanfaat, dari hati yang tidak khusyuk, dari jiwa yang tidak pernah merasa puas, dan dari doa yang tidak dikabulkan.',
    gradeRelevance: 'Semua Kelas',
    explanation: 'Doa memohon agar setiap materi pelajaran yang dipelajari di SMPN 2 Rebang Tangkas membawa manfaat bagi akhlak dan masa depan.'
  },
  {
    id: 'nasai-5',
    narrator: 'An-Nasa\'i',
    narratorFull: 'Sunan An-Nasa\'i',
    number: 4,
    theme: 'Siwak dan Kebersihan Mulut',
    arabic: 'السِّوَاكُ مَطْهَرَةٌ لِلْفَمِ مَرْضَاةٌ لِلرَّبِّ',
    translation: 'Bersiwak (menyikat gigi) itu menyucikan mulut dan mendatangkan keridhaan Tuhan.',
    gradeRelevance: 'Kelas VII',
    explanation: 'Menjaga kebersihan gigi dan mulut sebelum berangkat ke sekolah dan sebelum mendirikan salat.'
  },
  {
    id: 'nasai-6',
    narrator: 'An-Nasa\'i',
    narratorFull: 'Sunan An-Nasa\'i',
    number: 2217,
    theme: 'Puasa sebagai Benteng Perisai Diri',
    arabic: 'الصِّيَامُ جُنَّةٌ، يَسْتَجِنُّ بِهَا الْعَبْدُ مِنَ النَّارِ',
    translation: 'Puasa itu adalah perisai (benteng pelindung) yang dengannya seorang hamba membentengi diri dari api neraka.',
    gradeRelevance: 'Kelas VIII',
    explanation: 'Puasa melatih pengendalian hawa nafsu, empati kepada yang lapar, dan memperkuat ketakwaan.'
  },
  {
    id: 'nasai-7',
    narrator: 'An-Nasa\'i',
    narratorFull: 'Sunan An-Nasa\'i',
    number: 4452,
    theme: 'Keutamaan Menanam Pohon dan Melestarikan Alam',
    arabic: 'مَا مِنْ مُسْلِمٍ يَغْرِسُ غَرْسًا إِلاَّ كَانَ مَا أُكِلَ مِنْهُ لَهُ صَدَقَةً',
    translation: 'Tidaklah seorang muslim menanam suatu tanaman melainkan apa yang dimakan dari tanaman itu bernilai sedekah baginya.',
    gradeRelevance: 'Kelas VIII',
    explanation: 'Amanah khalifah di bumi untuk merawat taman sekolah dan menghijaukan lingkungan hidup.'
  },
  {
    id: 'nasai-8',
    narrator: 'An-Nasa\'i',
    narratorFull: 'Sunan An-Nasa\'i',
    number: 5468,
    theme: 'Keutamaan Membaca Sayyidul Istighfar',
    arabic: 'اللَّهُمَّ أَنْتَ رَبِّي لاَ إِلَهَ إِلاَّ أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ...',
    translation: 'Ya Allah, Engkau adalah Tuhanku, tidak ada Tuhan selain Engkau. Engkau yang menciptakanku dan aku adalah hamba-Mu... (Sayyidul Istighfar).',
    gradeRelevance: 'Kelas IX',
    explanation: 'Doa memohon ampunan terbaik yang diajarkan Nabi SAW untuk diamalkan di pagi dan petang hari.'
  },
  {
    id: 'nasai-9',
    narrator: 'An-Nasa\'i',
    narratorFull: 'Sunan An-Nasa\'i',
    number: 2435,
    theme: 'Menjaga Lisan Saat Berpuasa',
    arabic: 'رُبَّ صَائِمٍ لَيْسَ لَهُ مِنْ صِيَامِهِ إِلاَّ الْجُوعُ، وَرُبَّ قَائِمٍ لَيْسَ لَهُ مِنْ قِيَامِهِ إِلاَّ السَّهَرُ',
    translation: 'Betapa banyak orang yang berpuasa namun tidak mendapatkan dari puasanya melainkan lapar belaka, dan betapa banyak orang yang salat malam namun tidak mendapatkan melainkan begadang belaka.',
    gradeRelevance: 'Kelas VIII',
    explanation: 'Pentingnya menjaga kualitas ibadah puasa dengan tidak bergunjing, mencela, atau berbohong.'
  },
  {
    id: 'nasai-10',
    narrator: 'An-Nasa\'i',
    narratorFull: 'Sunan An-Nasa\'i',
    number: 5530,
    theme: 'Menjaga Salat Fajar (Subuh) dan Ashar',
    arabic: 'مَنْ صَلَّى الْبَرْدَيْنِ دَخَلَ الْجَنَّةَ',
    translation: 'Barang siapa yang mendirikan salat di dua waktu yang dingin (Subuh dan Ashar), niscaya ia masuk surga.',
    gradeRelevance: 'Kelas VII',
    explanation: 'Kedisiplinan bangun pagi untuk salat Subuh dan menjaga waktu salat Ashar tepat waktu.'
  },
  {
    id: 'nasai-11',
    narrator: 'An-Nasa\'i',
    narratorFull: 'Sunan An-Nasa\'i',
    number: 1827,
    theme: 'Mengingat Pemutus Kelezatan (Kematian)',
    arabic: 'أَكْثِرُوا مِنْ ذِكْرِ هَاذِمِ اللَّذَّاتِ: الْمَوْتِ',
    translation: 'Perbanyaklah mengingat pemutus kelezatan, yaitu kematian.',
    gradeRelevance: 'Kelas IX',
    explanation: 'Mengingat kematian melembutkan hati yang keras dan mendorong kita bersegera mengerjakan kebaikan.'
  },
  {
    id: 'nasai-12',
    narrator: 'An-Nasa\'i',
    narratorFull: 'Sunan An-Nasa\'i',
    number: 5028,
    theme: 'Berzikir di Waktu Luang',
    arabic: 'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ سُبْحَانَ اللَّهِ الْعَظِيمِ، كَلِمَتَانِ خَفِيفَتَانِ عَلَى اللِّسَانِ ثَقِيلَتَانِ فِي الْمِيزَانِ',
    translation: 'Subhanallah wa bihamdihi, Subhanallahil \'Azhim: dua kalimat yang ringan diucapkan lisan namun berat di timbangan amal dan dicintai oleh Dzat Yang Maha Pengasih.',
    gradeRelevance: 'Semua Kelas',
    explanation: 'Menghiasi waktu istirahat sekolah dengan zikir yang menenangkan jiwa.'
  },
  {
    id: 'nasai-13',
    narrator: 'An-Nasa\'i',
    narratorFull: 'Sunan An-Nasa\'i',
    number: 2548,
    theme: 'Sedekah Menghapuskan Dosa',
    arabic: 'الصَّدَقَةُ تُطْفِئُ الْخَطِيئَةَ كَمَا يُطْفِئُ الْمَاءُ النَّارَ',
    translation: 'Sedekah itu memadamkan dosa (kesalahan) sebagaimana air memadamkan api.',
    gradeRelevance: 'Kelas VIII',
    explanation: 'Membiasakan mengisi kotak amal infak Jumat di musholla sekolah.'
  },
  {
    id: 'nasai-14',
    narrator: 'An-Nasa\'i',
    narratorFull: 'Sunan An-Nasa\'i',
    number: 3175,
    theme: 'Keutamaan Membela Kebenaran dengan Lemah Lembut',
    arabic: 'إِنَّ الرِّفْقَ لاَ يَكُونُ فِي شَيْءٍ إِلاَّ زَانَهُ، وَلاَ يُنْزَعُ مِنْ شَيْءٍ إِلاَّ شَانَهُ',
    translation: 'Sesungguhnya sikap lemah lembut itu tidaklah ada pada sesuatu melainkan ia akan memperindahnya, dan tidaklah dicabut dari sesuatu melainkan ia akan memperburuknya.',
    gradeRelevance: 'Kelas VIII',
    explanation: 'Menyampaikan nasihat kepada kawan dengan nada bicara santun, bukan dengan kekerasan.'
  },
  {
    id: 'nasai-15',
    narrator: 'An-Nasa\'i',
    narratorFull: 'Sunan An-Nasa\'i',
    number: 5462,
    theme: 'Memohon Ketetapan Hati dalam Agama',
    arabic: 'يَا مُقَلِّبَ الْقُلُوبِ ثَبِّتْ قَلْبِي عَلَى دِينِكَ',
    translation: 'Wahai Dzat Yang Membolak-balikkan hati, tetapkanlah hatiku di atas agama-Mu.',
    gradeRelevance: 'Semua Kelas',
    explanation: 'Menjaga istiqamah keimanan di tengah derasnya arus pergaulan dan pengaruh media sosial.'
  }
];

export const MASTERKU_HADITS_DATA = MASTERKU_HADITS_LIST;

