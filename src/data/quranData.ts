import { QuranSurah, HadithItem } from '../types';

export type { QuranSurah, HadithItem };

export const QURAN_SURAHS: QuranSurah[] = [
  {
    number: 1,
    name: 'Al-Fatihah',
    arabicName: 'الفَاتِحَة',
    translation: 'Pembukaan',
    totalAyah: 7,
    revelationType: 'Makkiyah',
    verses: [
      {
        number: 1,
        arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
        latin: "Bismillaahir-rahmaanir-rahiim",
        translation: 'Dengan nama Allah Yang Maha Pengasih, Maha Penyayang.',
        tafsir: 'Ayat ini mengajarkan kita untuk memulai setiap amal perbuatan baik dengan menyebut nama Allah.'
      },
      {
        number: 2,
        arabic: 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ',
        latin: "Al-hamdu lillaahi Rabbil-'aalamiin",
        translation: 'Segala puji bagi Allah, Tuhan seluruh alam,',
        tafsir: 'Pujian mutlak hanya bagi Allah SWT Pencipta, Pemelihara, dan Pengatur seluruh alam semesta.'
      },
      {
        number: 3,
        arabic: 'الرَّحْمَٰنِ الرَّحِيمِ',
        latin: 'Ar-Rahmaanir-Rahiim',
        translation: 'Yang Maha Pengasih, Maha Penyayang,',
        tafsir: 'Rahmat dan kasih sayang Allah meliputi seluruh makhluk-Nya di dunia dan di akhirat.'
      },
      {
        number: 4,
        arabic: 'مَالِكِ يَوْمِ الدِّينِ',
        latin: 'Maaliki Yawmid-Diin',
        translation: 'Pemilik hari pembalasan.',
        tafsir: 'Hanya Allah SWT yang berkuasa mutlak menentukan balasan amal perbuatan di hari kiamat.'
      },
      {
        number: 5,
        arabic: 'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ',
        latin: 'Iyyaaka na\'budu wa iyyaaka nasta\'iin',
        translation: 'Hanya kepada Engkaulah kami menyembah dan hanya kepada Engkaulah kami mohon pertolongan.',
        tafsir: 'Landasan tauhid ibadah: kita tidak beribadah dan tidak meminta perlindungan kecuali semata kepada Allah.'
      },
      {
        number: 6,
        arabic: 'اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ',
        latin: 'Ihdinas-Siraatal-Mustaqiim',
        translation: 'Tunjukilah kami jalan yang lurus,',
        tafsir: 'Permohonan bimbingan petunjuk agar senantiasa teguh dalam kebenaran agama Islam.'
      },
      {
        number: 7,
        arabic: 'صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ',
        latin: 'Siraatal-laziina an\'amta \'alayhim ghayril-maghduubi \'alayhim wa lad-daalliin',
        translation: '(yaitu) jalan orang-orang yang telah Engkau beri nikmat kepadanya; bukan (jalan) mereka yang dimurkai, dan bukan (pula jalan) mereka yang sesat.',
        tafsir: 'Jalan para nabi, shiddiqin, syuhada, dan shalihin, bukan orang yang mengetahui kebenaran namun meninggalkannya.'
      }
    ]
  },
  {
    number: 103,
    name: "Al-'Asr",
    arabicName: 'العَصْر',
    translation: 'Masa / Waktu',
    totalAyah: 3,
    revelationType: 'Makkiyah',
    verses: [
      {
        number: 1,
        arabic: 'وَالْعَصْرِ',
        latin: "Wal-'asr",
        translation: 'Demi masa,',
        tafsir: 'Allah bersumpah demi waktu, mengingatkan manusia akan pentingnya memanfaatkan setiap detik kehidupan.'
      },
      {
        number: 2,
        arabic: 'إِنَّ الْإِنسَانَ لَفِي خُسْرٍ',
        latin: "Innal-insaana lafii khusr",
        translation: 'sungguh, manusia berada dalam kerugian,',
        tafsir: 'Semua manusia hakikatnya merugi dan menyia-nyiakan umurnya, kecuali yang memiliki 4 kriteria keselamatan.'
      },
      {
        number: 3,
        arabic: 'إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ وَتَوَاصَوْا بِالْحَقِّ وَتَوَاصَوْا بِالصَّبْرِ',
        latin: "Illal-ladziina aamanuu wa 'amilush-shaalihaati wa tawaashaw bil-haqqi wa tawaashaw bish-shabr",
        translation: 'kecuali orang-orang yang beriman dan mengerjakan kebajikan serta saling menasihati untuk kebenaran dan saling menasihati untuk kesabaran.',
        tafsir: 'Empat pilar keselamatan: Iman, Amal Saleh, Nasihat dalam Kebenaran, dan Nasihat dalam Kesabaran.'
      }
    ]
  },
  {
    number: 112,
    name: 'Al-Ikhlas',
    arabicName: 'الإِخْلَاص',
    translation: 'Kemurnian Tauhid',
    totalAyah: 4,
    revelationType: 'Makkiyah',
    verses: [
      {
        number: 1,
        arabic: 'قُلْ هُوَ اللَّهُ أَحَدٌ',
        latin: 'Qul huwal-laahu Ahad',
        translation: 'Katakanlah (Muhammad), "Dialah Allah, Yang Maha Esa."',
        tafsir: 'Menegaskan keesaan Allah dalam Dzat, Sifat, dan Perbuatan-Nya tanpa sekutu apa pun.'
      },
      {
        number: 2,
        arabic: 'اللَّهُ الصَّمَدُ',
        latin: 'Allaahus-Samad',
        translation: 'Allah tempat meminta segala sesuatu.',
        tafsir: 'As-Samad bermakna Dzat yang Maha Sempurna tempat bergantung seluruh makhluk-Nya.'
      },
      {
        number: 3,
        arabic: 'لَمْ يَلِدْ وَلَمْ يُولَدْ',
        latin: 'Lam yalid wa lam yuulad',
        translation: '(Allah) tidak beranak dan tidak pula diperanakkan,',
        tafsir: 'Membantah keyakinan sesat bahwa Allah memiliki anak atau lahir dari sesuatu.'
      },
      {
        number: 4,
        arabic: 'وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ',
        latin: 'Wa lam yakul-lahuu kufuwan ahad',
        translation: 'dan tidak ada sesuatu yang setara dengan Dia.',
        tafsir: 'Tidak ada tandingan, keserupaan, atau padanan bagi Allah dalam segala hal.'
      }
    ]
  },
  {
    number: 49,
    name: 'Al-Hujurat (Ayat 13)',
    arabicName: 'الحُجُرَات',
    translation: 'Kamar-Kamar',
    totalAyah: 1,
    revelationType: 'Madaniyah',
    verses: [
      {
        number: 13,
        arabic: 'يَا أَيُّهَا النَّاسُ إِنَّا خَلَقْنَاكُم مِّن ذَكَرٍ وَأُنثَىٰ وَجَعَلْنَاكُمْ شُعُوبًا وَقَبَائِلَ لِتَعَارَفُوا ۚ إِنَّ أَكْرَمَكُمْ عِندَ اللَّهِ أَتْقَاكُمْ ۚ إِنَّ اللَّهَ عَلِيمٌ خَبِيرٌ',
        latin: "Yaa ayyuhan-naasu innaa khalaqnaakum min zakarin wa unsaa wa ja'alnaakum syu'uubaw wa qabaa'ila lita'aarafuu, inna akramakum 'indallaahi atqaakum, innallaaha 'aliimun khabiir",
        translation: 'Wahai manusia! Sungguh, Kami telah menciptakan kamu dari seorang laki-laki dan seorang perempuan, kemudian Kami jadikan kamu berbangsa-bangsa dan bersuku-suku agar kamu saling mengenal. Sesungguhnya yang paling mulia di antara kamu di sisi Allah ialah orang yang paling bertakwa. Sungguh, Allah Maha Mengetahui, Mahateliti.',
        tafsir: 'Ayat ini menegaskan prinsip kesetaraan manusia dalam Islam, persaudaraan universal, toleransi antar suku dan bangsa, serta tolok ukur kemuliaan sejati hanyalah ketakwaan.'
      }
    ]
  }
];

export const HADITH_ITEMS: HadithItem[] = [
  {
    id: 'hadis-1',
    title: 'Menuntut Ilmu Adalah Kewajiban',
    theme: 'Menuntut Ilmu',
    arabic: 'طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ',
    narrator: 'HR. Ibnu Majah (No. 224)',
    translation: 'Menuntut ilmu itu wajib bagi setiap muslim.',
    explanation: 'Kewajiban belajar mencakup ilmu agama dasar yang memandu ibadah sehari-hari serta ilmu pengetahuan umum yang membawa kemaslahatan umat.',
    source: 'Sunan Ibnu Majah'
  },
  {
    id: 'hadis-2',
    title: 'Keutamaan Kejujuran',
    theme: 'Akhlak Mulia',
    arabic: 'عَلَيْكُمْ بِالصِّدْقِ، فَإِنَّ الصِّدْقَ يَهْدِي إِلَى الْبِرِّ، وَإِنَّ الْبِرَّ يَهْدِي إِلَى الْجَنَّةِ',
    narrator: 'HR. Muslim (No. 2607)',
    translation: 'Hendaklah kalian selalu berlaku jujur, karena sesungguhnya kejujuran itu membawa kepada kebaikan, dan kebaikan itu membawa ke surga.',
    explanation: 'Kejujuran adalah pondasi akhlak seorang muslim. Sekali berdusta dapat meruntuhkan kepercayaan dan menyeret pada keburukan lainnya.',
    source: 'Shahih Muslim'
  },
  {
    id: 'hadis-3',
    title: 'Berbakti Kepada Orang Tua (Birrul Walidain)',
    theme: 'Akhlak kepada Orang Tua',
    arabic: 'رِضَا الرَّبِّ فِي رِضَا الْوَالِدِ، وَسَخَطُ الرَّبِّ فِي سَخَطِ الْوَالِدِ',
    narrator: 'HR. Tirmidzi (No. 1899)',
    translation: 'Ridha Allah terletak pada ridha kedua orang tua, dan murka Allah terletak pada kemurkaan kedua orang tua.',
    explanation: 'Seorang pelajar muslim senantiasa memuliakan, mendoakan, dan mematuhi nasihat ayah dan ibu selama tidak bertentangan dengan syariat.',
    source: 'Sunan At-Tirmidzi'
  },
  {
    id: 'hadis-4',
    title: 'Kebersihan Sebagian dari Iman',
    theme: 'Thaharah & Kebersihan',
    arabic: 'الطُّهُورُ شَطْرُ الإِيمَانِ',
    narrator: 'HR. Muslim (No. 223)',
    translation: 'Kebersihan/kesucian itu adalah sebagian dari iman.',
    explanation: 'Islam sangat mencintai kebersihan lahiriah (tubuh, pakaian, lingkungan sekolah) dan kebersihan batin (hati yang bersih dari hasad dan dendam).',
    source: 'Shahih Muslim'
  },
  {
    id: 'hadis-5',
    title: 'Menjaga Persaudaraan Sesama Muslim',
    theme: 'Ukhuwah Islamiyah',
    arabic: 'الْمُسْلِمُ أَخُو الْمُسْلِمِ لَا يَظْلِمُهُ وَلَا يُسْلِمُهُ',
    narrator: 'HR. Bukhari dan Muslim',
    translation: 'Seorang muslim adalah saudara bagi muslim lainnya, tidak boleh ia menzaliminya dan tidak boleh pula membiarkannya dianiaya.',
    explanation: 'Prinsip anti-bullying di sekolah: saling melindungi, tolong-menolong dalam kebaikan, dan menghormati hak sesama kawan.',
    source: 'Shahih Bukhari & Muslim'
  }
];
