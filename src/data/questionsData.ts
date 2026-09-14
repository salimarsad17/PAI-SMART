import { Question } from '../types';

export const INITIAL_QUESTIONS: Question[] = [
  // ================= KELAS VII =================
  {
    id: 'q-vii-1',
    gradeLevel: 'VII',
    chapter: 1,
    category: "AL-QUR'AN DAN HADIS",
    type: 'pilihan_ganda',
    difficulty: 'Mudah',
    questionText: 'Kitab suci Al-Qur\'an diturunkan kepada Nabi Muhammad SAW melalui perantara malaikat...',
    options: ['Malaikat Mikail', 'Malaikat Jibril', 'Malaikat Israfil', 'Malaikat Izrail'],
    correctAnswer: 'Malaikat Jibril',
    explanation: 'Malaikat Jibril adalah malaikat yang bertugas menyampaikan wahyu dari Allah SWT kepada para Nabi dan Rasul.',
    score: 10
  },
  {
    id: 'q-vii-2',
    gradeLevel: 'VII',
    chapter: 2,
    category: "AL-QUR'AN DAN HADIS",
    type: 'pilihan_ganda',
    difficulty: 'Sedang',
    questionText: 'Menurut kandungan Q.S. Al-Hujurat ayat 13, ukuran kemuliaan seseorang di sisi Allah SWT ditentukan oleh...',
    options: ['Banyaknya harta kekayaan', 'Tingginya jabatan', 'Tingkat ketakwaannya', 'Garis keturunan dan suku bangsa'],
    correctAnswer: 'Tingkat ketakwaannya',
    explanation: 'Potongan ayat "Inna akramakum \'indallaahi atqaakum" menegaskan bahwa yang paling mulia di sisi Allah adalah orang yang paling bertakwa.',
    score: 10
  },
  {
    id: 'q-vii-3',
    gradeLevel: 'VII',
    chapter: 4,
    category: 'AQIDAH',
    type: 'benar_salah',
    difficulty: 'Mudah',
    questionText: 'Beriman kepada Allah SWT cukup diyakini dalam hati saja tanpa perlu dibuktikan dengan ucapan dan perbuatan ibadah.',
    correctAnswer: false,
    explanation: 'Definisi iman secara syar\'i adalah: meyakini dalam hati (tashdiq bil qalbi), mengucapkan dengan lisan (iqrar bil lisan), dan membuktikan dengan perbuatan raga (\'amal bil arkan).',
    score: 10
  },
  {
    id: 'q-vii-4',
    gradeLevel: 'VII',
    chapter: 5,
    category: 'AQIDAH',
    type: 'pilihan_ganda_kompleks',
    difficulty: 'Sedang',
    questionText: 'Pilihlah dua sikap yang mencerminkan keteladanan terhadap Asmaul Husna Al-Bashir (Maha Melihat):',
    options: [
      'Menjaga diri dari perbuatan curang meskipun sedang sendirian di ruangan',
      'Mendengarkan bacaan Al-Qur\'an dengan seksama',
      'Berhati-hati dalam memandang dan menggunakan gawai untuk hal bermanfaat',
      'Menuntut ilmu tanpa kenal lelah'
    ],
    correctAnswer: [
      'Menjaga diri dari perbuatan curang meskipun sedang sendirian di ruangan',
      'Berhati-hati dalam memandang dan menggunakan gawai untuk hal bermanfaat'
    ],
    explanation: 'Al-Bashir berarti Allah Maha Melihat segala hal yang tampak maupun tersembunyi. Sikap menjaga diri dari maksiat rahasia dan menjaga pandangan mencerminkan keimanan pada Al-Bashir.',
    score: 15
  },
  {
    id: 'q-vii-5',
    gradeLevel: 'VII',
    chapter: 7,
    category: 'AKHLAK',
    type: 'isian',
    difficulty: 'Mudah',
    questionText: 'Sifat konsisten, teguh pendirian, dan pantang menyerah dalam mempertahankan kebenaran dan kebaikan dalam istilah Islam disebut...',
    correctAnswer: 'istiqamah',
    explanation: 'Istiqamah adalah sikap kukuh pada jalan yang lurus sesuai ajaran Islam dan tidak menyimpang dalam situasi apa pun.',
    score: 10
  },
  {
    id: 'q-vii-6',
    gradeLevel: 'VII',
    chapter: 9,
    category: 'FIKIH',
    type: 'menjodohkan',
    difficulty: 'Sedang',
    questionText: 'Jodohkanlah jenis hadas dan najis berikut dengan cara mensucikannya yang tepat:',
    correctAnswer: 'matched',
    matchingPairs: [
      { left: 'Air kencing bayi laki-laki yang belum makan selain ASI (Mukhaffafah)', right: 'Diciprati air suci pada tempat terkena' },
      { left: 'Jilatan anjing atau babi (Mughalladhah)', right: 'Dibasuh 7 kali, salah satunya dengan tanah/debu' },
      { left: 'Hadas kecil (buang air/kentut)', right: 'Berwudu atau tayamum' },
      { left: 'Hadas besar (junub/haid selesai)', right: 'Mandi wajib (ghusl)' }
    ],
    explanation: 'Thaharah membagi najis menjadi mukhaffafah (ringan), mutawassithah (sedang), dan mughalladhah (berat) dengan cara pensucian yang berbeda.',
    score: 20
  },
  {
    id: 'q-vii-7',
    gradeLevel: 'VII',
    chapter: 10,
    category: 'FIKIH',
    type: 'pilihan_ganda',
    difficulty: 'Mudah',
    questionText: 'Keutamaan salat fardu yang dilakukan secara berjamaah dibandingkan salat sendirian (munfarid) adalah mendapatkan pahala berlipat...',
    options: ['10 derajat', '17 derajat', '27 derajat', '70 derajat'],
    correctAnswer: '27 derajat',
    explanation: 'Sesuai hadis Rasulullah SAW: "Shalat berjamaah lebih utama daripada shalat sendirian sebanyak dua puluh tujuh derajat" (HR. Bukhari dan Muslim).',
    score: 10
  },

  // ================= KELAS VIII =================
  {
    id: 'q-viii-1',
    gradeLevel: 'VIII',
    chapter: 1,
    category: "AL-QUR'AN DAN HADIS",
    type: 'pilihan_ganda',
    difficulty: 'Mudah',
    questionText: 'Dalam Q.S. Al-Isra\' ayat 27, orang-orang yang berlaku boros (mubazir) dinyatakan sebagai saudara...',
    options: ['Orang munafik', 'Setan', 'Orang musyrik', 'Orang kafir'],
    correctAnswer: 'Setan',
    explanation: 'Firman Allah SWT: "Innal mubadz-dziriina kaanuu ikhwaanasy-syayaathiin" (Sesungguhnya orang-orang yang pemboros itu adalah saudara setan).',
    score: 10
  },
  {
    id: 'q-viii-2',
    gradeLevel: 'VIII',
    chapter: 3,
    category: 'AQIDAH',
    type: 'menjodohkan',
    difficulty: 'Sedang',
    questionText: 'Jodohkanlah nama kitab suci Allah dengan nabi yang menerimanya:',
    correctAnswer: 'matched',
    matchingPairs: [
      { left: 'Kitab Taurat', right: 'Nabi Musa AS' },
      { left: 'Kitab Zabur', right: 'Nabi Daud AS' },
      { left: 'Kitab Injil', right: 'Nabi Isa AS' },
      { left: 'Kitab Al-Qur\'an', right: 'Nabi Muhammad SAW' }
    ],
    explanation: 'Empat kitab suci Allah diturunkan kepada para rasul pilihan untuk memandu umat manusia.',
    score: 20
  },
  {
    id: 'q-viii-3',
    gradeLevel: 'VIII',
    chapter: 4,
    category: 'AQIDAH',
    type: 'pilihan_ganda_kompleks',
    difficulty: 'Sedang',
    questionText: 'Manakah di antara rasul-rasul berikut yang termasuk ke dalam kelompok Rasul Ulul Azmi?',
    options: [
      'Nabi Nuh AS',
      'Nabi Ibrahim AS',
      'Nabi Sulaiman AS',
      'Nabi Isa AS'
    ],
    correctAnswer: [
      'Nabi Nuh AS',
      'Nabi Ibrahim AS',
      'Nabi Isa AS'
    ],
    explanation: 'Kelima Rasul Ulul Azmi adalah Nabi Nuh AS, Nabi Ibrahim AS, Nabi Musa AS, Nabi Isa AS, dan Nabi Muhammad SAW (disingkat NIMIM).',
    score: 15
  },
  {
    id: 'q-viii-4',
    gradeLevel: 'VIII',
    chapter: 6,
    category: 'FIKIH',
    type: 'pilihan_ganda',
    difficulty: 'Sedang',
    questionText: 'Sujud yang dilakukan karena seseorang lupa atau ragu terhadap jumlah rakaat dalam salat disebut sujud...',
    options: ['Sujud Syukur', 'Sujud Sahwi', 'Sujud Tilawah', 'Sujud Rukun'],
    correctAnswer: 'Sujud Sahwi',
    explanation: 'Sujud sahwi dilakukan sebanyak dua kali sebelum atau sesudah salam ketika terjadi keraguan rakaat atau kelebihan/kekurangan gerakan salat tertentu.',
    score: 10
  },
  {
    id: 'q-viii-5',
    gradeLevel: 'VIII',
    chapter: 8,
    category: 'FIKIH',
    type: 'isian',
    difficulty: 'Sedang',
    questionText: 'Berapakah besaran zakat fitrah per jiwa yang wajib dikeluarkan berupa beras atau makanan pokok di Indonesia?',
    correctAnswer: '2.5 kg',
    explanation: 'Besaran zakat fitrah adalah 1 sha\' kurma/gandum atau setara dengan 2,5 kg (atau 3,5 liter) beras makanan pokok setempat.',
    score: 10
  },
  {
    id: 'q-viii-6',
    gradeLevel: 'VIII',
    chapter: 10,
    category: 'SEJARAH KEBUDAYAAN ISLAM',
    type: 'benar_salah',
    difficulty: 'Mudah',
    questionText: 'Perpustakaan dan pusat penerjemahan ilmu pengetahuan terbesar pada masa Dinasti Abbasiyah bernama Baitul Hikmah.',
    correctAnswer: true,
    explanation: 'Baitul Hikmah didirikan di Baghdad pada masa Khalifah Harun Ar-Rasyid dan mencapai puncak kejayaannya di era Khalifah Al-Ma\'mun.',
    score: 10
  },

  // ================= KELAS IX =================
  {
    id: 'q-ix-1',
    gradeLevel: 'IX',
    chapter: 2,
    category: 'AQIDAH',
    type: 'pilihan_ganda',
    difficulty: 'Mudah',
    questionText: 'Hari dibangkitkannya seluruh manusia dari dalam kubur setelah ditiupnya sangkakala kedua dinamakan...',
    options: ['Yaumul Ba\'ats', 'Yaumul Mahsyar', 'Yaumul Hisab', 'Yaumul Mizan'],
    correctAnswer: 'Yaumul Ba\'ats',
    explanation: 'Yaumul Ba\'ats adalah hari kebangkitan kembali seluruh manusia sejak Nabi Adam hingga kiamat dari kuburnya.',
    score: 10
  },
  {
    id: 'q-ix-2',
    gradeLevel: 'IX',
    chapter: 3,
    category: 'AQIDAH',
    type: 'pilihan_ganda',
    difficulty: 'Sedang',
    questionText: 'Takdir Allah yang masih dapat diubah atau dipengaruhi oleh ikhtiar sungguh-sungguh dan doa manusia dinamakan...',
    options: ['Takdir Mubram', 'Takdir Muallaq', 'Takdir Azali', 'Takdir Mutlak'],
    correctAnswer: 'Takdir Muallaq',
    explanation: 'Takdir muallaq berkaitan erat dengan ikhtiar manusia (seperti kepintaran lewat belajar dan kesehatan lewat gaya hidup). Takdir mubram adalah kepastian mutlak seperti ajal dan jenis kelamin lahir.',
    score: 10
  },
  {
    id: 'q-ix-3',
    gradeLevel: 'IX',
    chapter: 4,
    category: 'AKHLAK',
    type: 'isian',
    difficulty: 'Mudah',
    questionText: 'Sikap berserah diri sepenuhnya kepada Allah SWT setelah melakukan ikhtiar (usaha) secara maksimal dan berdoa disebut...',
    correctAnswer: 'tawakal',
    explanation: 'Tawakal adalah pasrah kepada ketetapan Allah yang dilakukan sesudah usaha terbaik dikerahkan, bukan sebelum berusaha.',
    score: 10
  },
  {
    id: 'q-ix-4',
    gradeLevel: 'IX',
    chapter: 6,
    category: 'FIKIH',
    type: 'pilihan_ganda_kompleks',
    difficulty: 'Sulit',
    questionText: 'Manakah dari pernyataan berikut yang merupakan RUKUN ibadah haji (jika ditinggalkan hajinya tidak sah dan tidak bisa diganti dam)?',
    options: [
      'Wukuf di Padang Arafah',
      'Tawaf Ifadhah',
      'Mabit di Mina',
      'Sa\'i antara bukit Shafa dan Marwah'
    ],
    correctAnswer: [
      'Wukuf di Padang Arafah',
      'Tawaf Ifadhah',
      'Sa\'i antara bukit Shafa dan Marwah'
    ],
    explanation: 'Rukun haji meliputi: Ihram, Wukuf di Arafah, Tawaf Ifadhah, Sa\'i, Tahallul, dan Tertib. Sedangkan Mabit di Mina adalah wajib haji yang bila tertinggal dapat diganti dengan dam (denda).',
    score: 15
  },
  {
    id: 'q-ix-5',
    gradeLevel: 'IX',
    chapter: 7,
    category: 'FIKIH',
    type: 'benar_salah',
    difficulty: 'Mudah',
    questionText: 'Jumlah kambing yang disembelih untuk akikah anak laki-laki adalah 2 ekor kambing, sedangkan untuk anak perempuan adalah 1 ekor kambing.',
    correctAnswer: true,
    explanation: 'Sesuai sunnah Rasulullah SAW: akikah untuk bayi laki-laki adalah dua ekor kambing yang sepadan, dan untuk anak perempuan satu ekor kambing.',
    score: 10
  },
  {
    id: 'q-ix-6',
    gradeLevel: 'IX',
    chapter: 9,
    category: 'SEJARAH KEBUDAYAAN ISLAM',
    type: 'menjodohkan',
    difficulty: 'Sedang',
    questionText: 'Jodohkanlah nama Sunan dalam Wali Songo dengan wilayah atau metode dakwah khasnya:',
    correctAnswer: 'matched',
    matchingPairs: [
      { left: 'Sunan Kalijaga', right: 'Media wayang kulit dan tembang Ilir-Ilir' },
      { left: 'Sunan Kudus', right: 'Menghormati sapi dan menara masjid arsitektur Hindu' },
      { left: 'Sunan Gresik (Maulana Malik Ibrahim)', right: 'Ulama perintis dakwah dan pendekatan pertanian' },
      { left: 'Sunan Gunung Jati', right: 'Penyebaran Islam di wilayah Kesultanan Cirebon & Banten' }
    ],
    explanation: 'Wali Songo menggunakan pendekatan akulturasi budaya yang ramah dan penuh kearifan.',
    score: 20
  }
];
