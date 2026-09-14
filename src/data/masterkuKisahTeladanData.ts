export interface KisahTeladanItem {
  id: string;
  name: string;
  category: 'Sahabat Nabi' | 'Tabi\'in' | 'Ulama & Cendekiawan';
  epithet: string;
  lifeSpan: string;
  role: string;
  coreStory: string;
  keyVirtues: string[];
  studentInspiration: string;
}

export const KISAH_TELADAN_LIST: KisahTeladanItem[] = [
  // ==================== SAHABAT NABI ====================
  {
    id: 'sahabat-1',
    name: 'Abu Bakar Ash-Shiddiq RA',
    category: 'Sahabat Nabi',
    epithet: 'Ash-Shiddiq (Orang yang Membenarkan Kebenaran)',
    lifeSpan: '573 - 634 M (Khalifah I: 632 - 634 M)',
    role: 'Khalifah Pertama & Sahabat Terdekat Rasulullah SAW',
    coreStory: 'Abu Bakar adalah laki-laki dewasa pertama yang memeluk Islam. Tanpa ragu beliau langsung membenarkan peristiwa Isra\' Mi\'raj saat kaum Quraisy mengolok-olok Nabi. Beliau mengorbankan seluruh kekayaannya demi memerdekakan budak-budak tertindas seperti Bilal bin Rabah dan membiayai perang Tabuk. Saat Nabi SAW wafat dan umat terguncang, Abu Bakar dengan tenang berkhotbah: "Barang siapa menyembah Muhammad, Muhammad telah wafat. Namun barang siapa menyembah Allah, sesungguhnya Allah Maha Hidup dan tidak pernah mati."',
    keyVirtues: ['Kejujuran tanpa kompromi', 'Keteguhan iman yang kokoh', 'Kedermawanan total untuk umat', 'Kerendahan hati dalam memimpin'],
    studentInspiration: 'Menjadi sahabat yang setia, selalu membela teman dalam kebenaran, dan berani menginfakkan uang jajan untuk mereka yang membutuhkan.'
  },
  {
    id: 'sahabat-2',
    name: 'Umar bin Khattab RA',
    category: 'Sahabat Nabi',
    epithet: 'Al-Faruq (Pembeda Antara Kebenaran dan Kebatilan)',
    lifeSpan: '584 - 644 M (Khalifah II: 634 - 644 M)',
    role: 'Khalifah Kedua, Pemimpin Pemberani & Peletak Fondasi Administrasi Negara',
    coreStory: 'Sebelum masuk Islam, Umar dikenal bertubuh gagah perkasa dan ditakuti. Setelah hidayah menyentuh hatinya melalui lantunan Q.S. Thaha, kekuatannya dipersembahkan seutuhnya untuk membela Islam. Sebagai khalifah, beliau berkeliling malam memanggul sendiri karung gandum untuk keluarga janda miskin yang kelaparan, dan mendirikan Baitul Mal, penanggalan Hijriah, serta sistem pos pos jaga kepolisian.',
    keyVirtues: ['Keadilan mutlak tanpa pandang bulu', 'Keberanian menegakkan amar ma\'ruf', 'Tanggung jawab tinggi kepada rakyat', 'Gaya hidup bersahaja'],
    studentInspiration: 'Membela teman yang tertindas, berani bersikap adil sebagai pengurus kelas, dan tidak sombong ketika diberi amanah jabatan.'
  },
  {
    id: 'sahabat-3',
    name: 'Utsman bin Affan RA',
    category: 'Sahabat Nabi',
    epithet: 'Dzun Nurain (Pemilik Dua Cahaya)',
    lifeSpan: '576 - 656 M (Khalifah III: 644 - 656 M)',
    role: 'Khalifah Ketiga & Pengkodifikasi Mushaf Standar Al-Qur\'an (Mushaf Utsmani)',
    coreStory: 'Utsman adalah saudagar kaya raya yang sangat santun dan pemalu, hingga malaikat pun segan kepadanya. Beliau membeli sumur Raumah dari orang Yahudi dan mewakafkannya secara gratis untuk seluruh penduduk Madinah yang kehausan. Jasa terbesarnya adalah membukukan Al-Qur\'an ke dalam dialek standar (Mushaf Al-Imam/Utsmani) sehingga kesatuan bacaan Al-Qur\'an terjaga utuh hingga kiamat.',
    keyVirtues: ['Rasa malu (haya\') yang tinggi', 'Filantropi wakaf yang berkelanjutan', 'Kelemahlembutan tutur kata', 'Dedikasi menjaga Al-Qur\'an'],
    studentInspiration: 'Membiasakan sedekah jariyah, menjaga etika kesopanan pergaulan, dan mencintai tilawah Al-Qur\'an.'
  },
  {
    id: 'sahabat-4',
    name: 'Ali bin Abi Thalib RA',
    category: 'Sahabat Nabi',
    epithet: 'Babul \'Ilmi (Gerbang Gudang Ilmu) & Asadullah',
    lifeSpan: '601 - 661 M (Khalifah IV: 656 - 661 M)',
    role: 'Khalifah Keempat, Tokoh Pemuda Pertama Masuk Islam, Menantu Rasulullah',
    coreStory: 'Sejak usia belia (sekitar 10 tahun), Ali telah memeluk Islam. Pada malam hijrah, Ali mempertaruhkan nyawanya dengan rela tidur di ranjang Nabi SAW yang telah dikepung pemuda-pemuda Quraisy bersenjata pedang terhunus. Rasulullah memujinya: "Aku adalah kotanya ilmu, dan Ali adalah pintu gerbangnya." Beliau terkenal sangat cerdas memecahkan persoalan hukum yang rumit dengan keadilan yang tajam.',
    keyVirtues: ['Keberanian luar biasa di masa muda', 'Kecerdasan intelektual dan spiritual', 'Kezuhudan dan kesederhanaan', 'Kecintaan mendalam pada ilmu'],
    studentInspiration: 'Menjadi generasi muda yang berprestasi akademis, berani mengambil risiko demi kebaikan, dan haus akan ilmu pengetahuan.'
  },
  {
    id: 'sahabat-5',
    name: 'Bilal bin Rabah RA',
    category: 'Sahabat Nabi',
    epithet: 'Muazin Pertama Rasulullah & Suara Tauhid yang Abadi',
    lifeSpan: '580 - 640 M',
    role: 'Sahabat dari Kalangan Budak Habasyah (Ethiopia)',
    coreStory: 'Bilal mengalami siksaan kejam oleh majikannya Umayyah bin Khalaf di padang pasir terik Makkah: ditindih batu hitam besar dan dicambuk agar kembali menyembah berhala Lata dan Uzza. Namun lidahnya tetap mengulang kalimat tauhid: "Ahad! Ahad! (Allah Maha Esa)". Setelah dimerdekakan Abu Bakar, Bilal dipercaya Nabi menjadi muazin resmi pertama dalam sejarah Islam karena suaranya yang merdu dan keikhlasan hatinya.',
    keyVirtues: ['Keteguhan akidah pantang menyerah', 'Kesetiaan pada kebenaran', 'Bukti persamaan derajat manusia dalam Islam tanpa memandang warna kulit'],
    studentInspiration: 'Menolak segala bentuk rasisme dan diskriminasi warna kulit/suku di sekolah, serta istiqamah dalam menjaga keimanan.'
  },
  {
    id: 'sahabat-6',
    name: 'Salman Al-Farisi RA',
    category: 'Sahabat Nabi',
    epithet: 'Pencari Kebenaran Hakiki & Penggagas Parit Khandaq',
    lifeSpan: 'Wafat ± 656 M (35 H)',
    role: 'Sahabat Berdarah Persia, Ahli Strategi Perang & Penasihat Nabi',
    coreStory: 'Berasal dari keluarga terpandang penyembah api (Majusi) di Persia, Salman mengembara ribuan kilometer mencari kebenaran tauhid sejati hingga sempat dijadikan budak di Madinah. Dalam perang Khandaq saat Madinah terkepung 10.000 pasukan sekutu Quraisy, Salman mengusulkan taktik jenius yang belum pernah dikenal bangsa Arab: menggali parit raksasa mengelilingi perbatasan Madinah yang berhasil memukul mundur musuh.',
    keyVirtues: ['Gairah mencari kebenaran tanpa lelah', 'Kreativitas dan inovasi memecahkan masalah krisis', 'Kerendahan hati bekerja mencangkul bersama sahabat lain'],
    studentInspiration: 'Berpikir kreatif dan inovatif dalam menyelesaikan tugas sekolah dan tidak ragu mencoba ide baru yang bermanfaat.'
  },
  {
    id: 'sahabat-7',
    name: 'Khalid bin Walid RA',
    category: 'Sahabat Nabi',
    epithet: 'Saifullah Al-Maslul (Pedang Allah yang Terhunus)',
    lifeSpan: '592 - 642 M',
    role: 'Panglima Militer Terhebat yang Tak Pernah Kalah dalam Puluhan Pertempuran',
    coreStory: 'Panglima perang legendaris yang memimpin pasukan muslim membebaskan Syam dan Persia. Kehebatan terbesarnya bukan hanya di medan tempur, melainkan keikhlasannya saat Khalifah Umar mencopot jabatannya dari panglima tertinggi menjadi prajurit biasa. Khalid tetap bertempur gigih dan berkata: "Aku berperang bukan karena Umar, melainkan karena Tuhannya Umar (Allah SWT)."',
    keyVirtues: ['Keahlian kepemimpinan dan taktik militer', 'Keikhlasan murni dalam beramal', 'Kepatuhan pada komando demi persatuan umat'],
    studentInspiration: 'Bekerja ikhlas tanpa haus pujian atau posisi ketua, dan selalu siap berkontribusi di mana pun ditempatkan.'
  },
  {
    id: 'sahabat-8',
    name: 'Khadijah binti Khuwailid RA',
    category: 'Sahabat Nabi',
    epithet: 'Ummul Mukminin & Ath-Thahirah (Wanita Suci)',
    lifeSpan: '555 - 619 M',
    role: 'Istri Pertama Rasulullah SAW, Wanita Pertama yang Memeluk Islam',
    coreStory: 'Saudagar wanita paling sukses dan dermawan di Makkah. Ketika Rasulullah gemetar ketakutan sepulang menerima wahyu pertama di Gua Hira, Khadijah menenangkan hatinya dengan penuh kelembutan: "Demi Allah, Allah tidak akan pernah menghinakanmu, karena engkau menyambung silaturahmi, menolong yang lemah, dan memuliakan tamu." Seluruh hartanya habis diinfaqkan untuk membiayai perjuangan dakwah Islam di masa pemboikotan Quraisy.',
    keyVirtues: ['Dukungan emosional dan spiritual yang hangat', 'Kemandirian finansial dan etika wirausaha', 'Kedermawanan pengorbanan harta sejati'],
    studentInspiration: 'Menjadi penyejuk bagi keluarga dan teman yang sedang berduka, serta mandiri dalam berkarya.'
  },
  {
    id: 'sahabat-9',
    name: 'Aisyah binti Abu Bakar RA',
    category: 'Sahabat Nabi',
    epithet: 'Humaira & Cendekiawan Wanita Terhebat Sepanjang Masa',
    lifeSpan: '614 - 678 M',
    role: 'Ummul Mukminin, Ahli Fikih, Kedokteran, Sastra, dan Perawi Ribuan Hadits',
    coreStory: 'Sayyidah Aisyah memiliki kecerdasan hafalan dan analisis yang luar biasa. Beliau meriwayatkan lebih dari 2.210 hadits Nabi SAW. Para sahabat senior sering mendatangi beliau untuk berkonsultasi mengenai hukum waris, fikih wanita, tafsir ayat, dan silsilah bangsa Arab. Beliau juga terkenal sangat dermawan: pernah membagikan uang 100.000 dirham kepada fakir miskin sampai habis padahal bajunya bertambal dan beliau sendiri sedang berpuasa.',
    keyVirtues: ['Kecerdasan akademik dan kekuatan ingatan', 'Ketekunan menuntut ilmu agama dan sains', 'Kepedulian sosial yang mengabaikan kepentingan pribadi'],
    studentInspiration: 'Memacu semangat siswi muslimah untuk gemar membaca, berani berbicara di forum ilmiah, dan berprestasi setinggi mungkin.'
  },
  {
    id: 'sahabat-10',
    name: 'Mush\'ab bin Umair RA',
    category: 'Sahabat Nabi',
    epithet: 'Duta Islam Pertama ke Madinah',
    lifeSpan: '585 - 625 M',
    role: 'Pemuda Tampan Kaya Raya yang Menjadi Guru Al-Qur\'an Penduduk Madinah',
    coreStory: 'Mush\'ab adalah pemuda paling tampan, modis, dan wangi di Makkah dari keluarga bangsawan kaya. Ketika memilih Islam, ibunya mengusir dan mencabut seluruh fasilitas kemewahannya. Nabi mengutus Mush\'ab ke Yatsrib (Madinah) sebelum hijrah untuk mengajarkan Al-Qur\'an. Dengan senyum dan retorika santunnya, hampir seluruh keluarga di Madinah masuk Islam. Beliau gugur sebagai syahid dalam perang Uhud dengan kain kafan pendek yang jika ditarik ke kepala kakinya terbuka, dan jika ditarik ke kaki kepalanya terbuka.',
    keyVirtues: ['Rela melepaskan kemewahan dunia demi cita-cita mulia', 'Metode dakwah persuasif yang bersahabat', 'Pengorbanan total generasi muda bagi bangsa dan agama'],
    studentInspiration: 'Tidak terjerumus gaya hidup hedonisme konsumtif dan mengutamakan kualitas karakter di atas penampilan luar.'
  },

  // ==================== TABI'IN ====================
  {
    id: 'tabiin-1',
    name: 'Uwais Al-Qarni',
    category: 'Tabi\'in',
    epithet: 'Sebaik-baik Tabi\'in & Penduduk Langit yang Terkenal',
    lifeSpan: '594 - 657 M',
    role: 'Pemuda Yaman yang Wasiat Doanya Dicari oleh Khalifah Umar dan Ali',
    coreStory: 'Uwais hidup di Yaman pada masa Nabi SAW namun tidak sempat bertemu Rasulullah karena harus merawat ibunya yang lumpuh dan buta. Demi memenuhi impian ibunya menunaikan ibadah haji ke Makkah, Uwais melatih ototnya dengan menggendong anak sapi naik-turun bukit setiap hari. Ketika musim haji tiba, Uwais menggendong ibunya berjalan kaki sejauh ribuan kilometer dari Yaman ke Makkah. Rasulullah berwasiat kepada Umar dan Ali: "Bila kalian bertemu Uwais, mintalah kepadanya agar memohonkan ampunan bagi kalian kepada Allah."',
    keyVirtues: ['Bakti tanpa batas kepada ibu (birrul walidain)', 'Kezuhudan dan tidak menyukai popularitas duniawi', 'Doa mustajab karena ketulusan hati'],
    studentInspiration: 'Memuliakan ibu kandung di atas segala urusan lain dan tidak haus sanjungan atau followers media sosial.'
  },
  {
    id: 'tabiin-2',
    name: 'Umar bin Abdul Aziz',
    category: 'Tabi\'in',
    epithet: 'Khulafaur Rasyidin Kelima',
    lifeSpan: '682 - 720 M (Khalifah: 717 - 720 M)',
    role: 'Khalifah Dinasti Umayyah yang Mereformasi Keadilan dan Kemakmuran',
    coreStory: 'Hanya dalam waktu masa jabatan 2 tahun 5 bulan, Umar bin Abdul Aziz berhasil menghapuskan kemiskinan dari negerinya hingga petugas zakat kesulitan menemukan orang miskin yang berhak menerima zakat. Beliau mematikan lampu minyak milik negara di ruang kerjanya ketika berbicara mengenai urusan pribadi keluarga agar tidak memakan aset rakyat walau setetes minyak.',
    keyVirtues: ['Integritas mutlak menolak penyalahgunaan fasilitas negara', 'Keadilan sosial dan pemberantasan korupsi', 'Kesederhanaan gaya hidup pemimpin'],
    studentInspiration: 'Menjaga barang milik sekolah (inventaris kelas, buku perpustakaan) dan tidak menggunakan fasilitas umum untuk kepentingan egois.'
  },
  {
    id: 'tabiin-3',
    name: 'Said bin Al-Musayyib',
    category: 'Tabi\'in',
    epithet: 'Sayyidut Tabi\'in (Pemimpin Para Tabi\'in) & Faqih Madinah',
    lifeSpan: '637 - 715 M',
    role: 'Ulama Fikih Terbesar di Madinah',
    coreStory: 'Ulama paling zuhud dan independen. Beliau menolak menikahkan putrinya yang cerdas dan hafal Al-Qur\'an dengan putra mahkota khalifah yang bergelimang harta, melainkan menikahkannya dengan seorang muridnya yang miskin namun saleh bernama Abu Wada\'ah hanya dengan mahar dua dirham.',
    keyVirtues: ['Mengutamakan kesalehan dan akhlak di atas kekayaan', 'Keberanian menolak intervensi kekuasaan', 'Penguasaan hadits dan fatwa yang jernih'],
    studentInspiration: 'Memilih teman bergaul berdasarkan kebaikan budi pekerti, bukan berdasarkan kekayaan atau merek gawai.'
  },
  {
    id: 'tabiin-4',
    name: 'Hasan Al-Bashri',
    category: 'Tabi\'in',
    epithet: 'Pena Nasihat Hati dan Pelita Kota Bashrah',
    lifeSpan: '642 - 728 M',
    role: 'Ulama Sufi, Mubaligh, dan Pemikir Besar Islam',
    coreStory: 'Tumbuh besar di lingkungan keluarga Ummahatul Mukminin. Khotbah dan nasihatnya selalu membuat orang-orang menangis tersentuh karena kedalaman tazkiyatun nafs (penyucian jiwa). Beliau berpesan: "Wahai anak cucu Adam, sesungguhnya engkau hanyalah kumpulan hari-hari; setiap kali satu hari berlalu, maka hilanglah sebagian dari dirimu."',
    keyVirtues: ['Kedalaman introspeksi diri (muhasabah)', 'Disiplin mengelola waktu usia muda', 'Kefasihan menasihati dengan penuh empati'],
    studentInspiration: 'Menghargai setiap detik waktu untuk belajar dan memperbaiki diri sebelum datangnya masa penyesalan.'
  },

  // ==================== ULAMA MAZHAB & CENDEKIAWAN ====================
  {
    id: 'ulama-1',
    name: 'Imam Asy-Syafi\'i',
    category: 'Ulama & Cendekiawan',
    epithet: 'Nashirus Sunnah (Pembela Sunnah) & Peletak Ushul Fikih',
    lifeSpan: '767 - 820 M (150 - 204 H)',
    role: 'Pendiri Mazhab Syafi\'i (Mazhab Terbesar di Indonesia) & Penulis Kitab Ar-Risalah',
    coreStory: 'Lahir di Gaza sebagai anak yatim miskin, beliau menggunakan pecahan tembikar dan pelepah kurma sebagai media tulis karena tidak mampu membeli kertas. Beliau hafal Al-Qur\'an usia 7 tahun dan hafal kitab Al-Muwatta\' usia 10 tahun. Mengembara menuntut ilmu ke Makkah, Madinah, Baghdad, hingga Mesir. Beliau menyusun kitab "Ar-Risalah" sebagai buku pertama dalam sejarah yang merumuskan metodologi hukum Islam (Ushul Fikih).',
    keyVirtues: ['Semangat belajar pantang surut meski serba kekurangan', 'Penghormatan tinggi kepada guru', 'Kecerdasan metodologis dan toleransi perbedaan pendapat fiqhiyah'],
    studentInspiration: 'Keterbatasan ekonomi bukan penghalang meraih prestasi akademik tertinggi; rajin mencatat dan tekun membaca.'
  },
  {
    id: 'ulama-2',
    name: 'Imam Abu Hanifah',
    category: 'Ulama & Cendekiawan',
    epithet: 'Al-Imam Al-A\'zam & Pedagang Sutra yang Berintegritas',
    lifeSpan: '699 - 767 M (80 - 150 H)',
    role: 'Pendiri Mazhab Hanafi & Pelopor Metode Fikih Rasional (Ahlur Ra\'yi)',
    coreStory: 'Seorang saudagar kain sutra sukses yang sangat jujur. Pernah suatu hari pembantunya menjual kain yang memiliki sedikit cacat dengan harga normal tanpa memberi tahu pembeli. Imam Abu Hanifah langsung mencari pembeli tersebut ke sekeliling kota untuk mengembalikan uangnya dan menyedekahkan seluruh keuntungan dagang hari itu karena merasa tidak berkah.',
    keyVirtues: ['Kejujuran mutlak dalam perdagangan', 'Kemandirian finansial agar ilmu tidak diperalat penguasa', 'Kemampuan logika deduktif yang tajam'],
    studentInspiration: 'Membangun jiwa kewirausahaan jujur tanpa merugikan orang lain dan berani bersikap objektif.'
  },
  {
    id: 'ulama-3',
    name: 'Imam Malik bin Anas',
    category: 'Ulama & Cendekiawan',
    epithet: 'Imam Darul Hijrah (Imam Kota Madinah)',
    lifeSpan: '711 - 795 M (93 - 179 H)',
    role: 'Pendiri Mazhab Maliki & Penyusun Kitab Al-Muwatta\'',
    coreStory: 'Ulama yang sangat mengagungkan hadits Rasulullah. Beliau selalu mandi, berwudu, memakai pakaian terbaik, dan wewangian sebelum membacakan hadits Nabi. Beliau tidak segan menjawab "La Adri" (Saya tidak tahu) untuk 32 dari 48 pertanyaan hukum rumit yang diajukan kepadanya, demi kehati-hatian fatwa.',
    keyVirtues: ['Penghormatan luar biasa kepada hadits Nabi', 'Keberanian mengakui ketidaktahuan', 'Konsistensi menjaga tradisi sunnah'],
    studentInspiration: 'Tidak merasa malu berkata "belum tahu" saat belum memahami materi pelajaran, dan selalu bersikap santun kepada ilmu.'
  },
  {
    id: 'ulama-4',
    name: 'Imam Ahmad bin Hanbal',
    category: 'Ulama & Cendekiawan',
    epithet: 'Imam Ahlus Sunnah & Sosok Paling Tabah dalam Mihnah',
    lifeSpan: '780 - 855 M (164 - 241 H)',
    role: 'Pendiri Mazhab Hanbali & Penyusun Kitab Musnad Ahmad (40.000 Hadits)',
    coreStory: 'Dikenal memiliki hafalan lebih dari 1 juta hadits. Diuji dalam peristiwa fitnah "Mihnah" (doktrin kemakhlukan Al-Qur\'an) oleh penguasa Abbasiyah: beliau dipenjara bertahun-tahun dan dicambuk di depan umum karena bersikukuh mempertahankan akidah bahwa Al-Qur\'an adalah Kalamullah (bukan makhluk). Keteguhannya menyelamatkan akidah umat dari kesesatan pemikiran.',
    keyVirtues: ['Ketabahan luar biasa menghadapi tekanan kekuasaan', 'Pengorbanan membela kemurnian akidah', 'Keluasan ilmu hadits'],
    studentInspiration: 'Tidak mudah terbawa arus tren negatif atau bujukan yang bertentangan dengan prinsip nilai agama.'
  },
  {
    id: 'ulama-5',
    name: 'Imam Al-Ghazali',
    category: 'Ulama & Cendekiawan',
    epithet: 'Hujjatul Islam (Pembela Keagungan Islam)',
    lifeSpan: '1058 - 1111 M (450 - 505 H)',
    role: 'Rektor Universitas Nizhamiyyah Baghdad, Filsuf, dan Penulis Ihya\' Ulumiddin',
    coreStory: 'Mencapai puncak popularitas dan kekayaan sebagai rektor universitas paling bergengsi di Baghdad. Mengalami krisis spiritual karena merasa ilmu yang diajarkannya tercemari oleh motif riya\' dan kedudukan. Beliau melepaskan seluruh jabatan mewahnya, mengembara beribadah ke Damaskus dan Yerusalem selama 10 tahun, dan menulis adikarya "Ihya\' Ulumiddin" yang memadukan fikih, filsafat, dan tasawuf pembersih jiwa.',
    keyVirtues: ['Keberanian keluar dari zona nyaman demi kebersihan niat', 'Karya tulis ensiklopedis yang mendalam', 'Penyatuan antara syariat lahir dan akhlak batin'],
    studentInspiration: 'Belajar dan berprestasi bukan semata demi gengsi atau pujian, melainkan demi keberkahan dan ketenangan batin.'
  },
  {
    id: 'ulama-6',
    name: 'Ibnu Sina (Avicenna)',
    category: 'Ulama & Cendekiawan',
    epithet: 'Bapak Kedokteran Modern Dunia',
    lifeSpan: '980 - 1037 M',
    role: 'Dokter, Filosof, dan Saintis Muslim Terbesar',
    coreStory: 'Hafal Al-Qur\'an pada usia 10 tahun dan menjadi dokter terkenal pada usia 18 tahun. Kitab monumentalnya "Al-Qanun fi at-Tibb" (The Canon of Medicine) diterjemahkan ke bahasa Latin dan menjadi buku teks wajib di seluruh universitas kedokteran Eropa selama lebih dari 500 tahun. Jika menghadapi persoalan ilmiah yang buntu, Ibnu Sina segera mengambil wudu dan salat sunnah di masjid hingga Allah membukakan jalan keluar ilham baginya.',
    keyVirtues: ['Integrasi sains medis dengan spiritualitas salat', 'Metode observasi klinis dan farmakologi modern', 'Produktivitas menulis ratusan risalah ilmiah'],
    studentInspiration: 'Menghubungkan sains dengan ibadah, dan membiasakan berdoa serta salat sunnah ketika menghadapi soal-soal ujian yang sulit.'
  },
  {
    id: 'ulama-7',
    name: 'Muhammad bin Musa Al-Khawarizmi',
    category: 'Ulama & Cendekiawan',
    epithet: 'Bapak Aljabar & Penemu Angka Nol (0)',
    lifeSpan: '780 - 850 M',
    role: 'Astronom, Matematikawan, dan Pustakawan Utama Baitul Hikmah Baghdad',
    coreStory: 'Bekerja di pusat riset Baitul Hikmah. Menemukan konsep "Aljabar" (dari bukunya Al-Kitab al-Mukhtasar fi Hisab al-Jabr wal-Muqabala) dan sistem algoritma (nama "algoritma" diambil dari namanya: Al-Khawarizmi). Beliau memperkenalkan angka nol (0) dan sistem bilangan desimal yang memungkinkan lahirnya teknologi komputer, kalkulator, dan kecerdasan buatan (AI) modern.',
    keyVirtues: ['Penemuan revolusioner yang memajukan sains dunia', 'Niat mengembangkan matematika untuk mempermudah perhitungan pembagian waris syariat (faraidh)', 'Kerja tekun dan teliti'],
    studentInspiration: 'Menyukai matematika dan sains komputer karena ilmu eksakta berakar kuat dalam tradisi kejayaan peradaban Islam.'
  }
];
