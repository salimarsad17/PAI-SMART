import React, { useState, useMemo, useRef } from 'react';
import {
  BookOpen,
  BookMarked,
  ScrollText,
  Compass,
  HeartHandshake,
  Sparkles,
  Search,
  Volume2,
  VolumeX,
  Play,
  Pause,
  Copy,
  Check,
  ChevronRight,
  Filter,
  Bookmark,
  Share2,
  Star,
  Info,
  Layers,
  Send,
  Bot,
  User,
  GraduationCap,
  Sparkle
} from 'lucide-react';
import { MASTERKU_QURAN_SURAHS, MasterkuSurah, QuranAyat } from '../../data/masterkuQuranData';
import { MASTERKU_HADITS_DATA, MasterkuHadits, PerawiType } from '../../data/masterkuHaditsData';
import { BUKU_PAI_DATA, BukuPaiChapter } from '../../data/masterkuBukuPaiData';
import { SEJARAH_25_NABI, NabiData } from '../../data/masterkuNabiData';
import { KISAH_TELADAN_LIST, KisahTeladanItem } from '../../data/masterkuKisahTeladanData';
import { BukuPaiKelas7Sem1Detail } from '../../components/masterku/BukuPaiKelas7Sem1Detail';
import { BukuPaiKelas7Sem1Bab2Detail } from '../../components/masterku/BukuPaiKelas7Sem1Bab2Detail';
import { BukuPaiKelas7Sem1Bab3Detail } from '../../components/masterku/BukuPaiKelas7Sem1Bab3Detail';
import { BukuPaiKelas7Sem1Bab4Detail } from '../../components/masterku/BukuPaiKelas7Sem1Bab4Detail';
import { BukuPaiKelas7Sem1Bab5Detail } from '../../components/masterku/BukuPaiKelas7Sem1Bab5Detail';
import { BukuPaiKelas7Sem2Bab6Detail } from '../../components/masterku/BukuPaiKelas7Sem2Bab6Detail';
import { BukuPaiKelas7Sem2Bab7Detail } from '../../components/masterku/BukuPaiKelas7Sem2Bab7Detail';
import { BukuPaiKelas7Sem2Bab8Detail } from '../../components/masterku/BukuPaiKelas7Sem2Bab8Detail';
import { BukuPaiKelas7Sem2Bab9Detail } from '../../components/masterku/BukuPaiKelas7Sem2Bab9Detail';
import { BukuPaiKelas7Sem2Bab10Detail } from '../../components/masterku/BukuPaiKelas7Sem2Bab10Detail';
import { BukuPaiKelas8Sem1Bab1Detail } from '../../components/masterku/BukuPaiKelas8Sem1Bab1Detail';
import { BukuPaiKelas8Sem1Bab2Detail } from '../../components/masterku/BukuPaiKelas8Sem1Bab2Detail';
import { BukuPaiKelas8Sem1Bab3Detail } from '../../components/masterku/BukuPaiKelas8Sem1Bab3Detail';
import { BukuPaiKelas8Sem1Bab4Detail } from '../../components/masterku/BukuPaiKelas8Sem1Bab4Detail';
import { BukuPaiKelas8Sem1Bab5Detail } from '../../components/masterku/BukuPaiKelas8Sem1Bab5Detail';
import { BukuPaiKelas8Sem2Bab6Detail } from '../../components/masterku/BukuPaiKelas8Sem2Bab6Detail';
import { BukuPaiKelas8Sem2Bab7Detail } from '../../components/masterku/BukuPaiKelas8Sem2Bab7Detail';
import { BukuPaiKelas8Sem2Bab8Detail } from '../../components/masterku/BukuPaiKelas8Sem2Bab8Detail';
import { useToast } from '../../components/common/Toast';

type TabType = 'quran' | 'hadits' | 'buku' | 'nabi' | 'teladan';

export const SiswaMasterkuPage: React.FC = () => {
  const { showToast } = useToast();
  const [activeTab, setActiveTab] = useState<TabType>('buku');
  const [searchQuery, setSearchQuery] = useState('');

  // ==================== QURAN STATE ====================
  const [selectedSurahNumber, setSelectedSurahNumber] = useState<number>(1);
  const [playingAudioUrl, setPlayingAudioUrl] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // ==================== HADITS STATE ====================
  const [selectedPerawi, setSelectedPerawi] = useState<PerawiType | 'Semua'>('Semua');
  const [selectedHaditsGrade, setSelectedHaditsGrade] = useState<string>('Semua');

  // ==================== BUKU PAI STATE ====================
  const [selectedBukuGrade, setSelectedBukuGrade] = useState<'Semua' | 'Kelas VII' | 'Kelas VIII' | 'Kelas IX'>('Kelas VIII');
  const [selectedBukuElement, setSelectedBukuElement] = useState<string>('Semua');
  const [expandedChapterId, setExpandedChapterId] = useState<string | null>('k8-bab8');
  const [showKelas7Sem1Detail, setShowKelas7Sem1Detail] = useState<boolean>(true);
  const [selectedTextbookChapter, setSelectedTextbookChapter] = useState<
    | 'k7-bab1'
    | 'k7-bab2'
    | 'k7-bab3'
    | 'k7-bab4'
    | 'k7-bab5'
    | 'k7-bab6'
    | 'k7-bab7'
    | 'k7-bab8'
    | 'k7-bab9'
    | 'k7-bab10'
    | 'k8-bab1'
    | 'k8-bab2'
    | 'k8-bab3'
    | 'k8-bab4'
    | 'k8-bab5'
    | 'k8-bab6'
    | 'k8-bab7'
    | 'k8-bab8'
  >('k8-bab8');

  // ==================== SEJARAH NABI STATE ====================
  const [selectedNabiOrder, setSelectedNabiOrder] = useState<number>(1);
  const [filterUlulAzmiOnly, setFilterUlulAzmiOnly] = useState<boolean>(false);

  // ==================== KISAH TELADAN STATE ====================
  const [selectedTeladanCategory, setSelectedTeladanCategory] = useState<'Semua' | 'Sahabat Nabi' | 'Tabi\'in' | 'Ulama & Cendekiawan'>('Semua');
  const [selectedTeladanId, setSelectedTeladanId] = useState<string>('sahabat-1');

  // ==================== MASTERKU AI CHAT DRAWER ====================
  const [isAiOpen, setIsAiOpen] = useState(false);
  const [aiMessages, setAiMessages] = useState<Array<{ sender: 'ai' | 'user'; text: string }>>([
    {
      sender: 'ai',
      text: 'Assalamu\'alaikum! Saya Masterku AI PAI UPT SMPN 2 Rebang Tangkas. Saya siap mendampingi belajarmu dengan rujukan resmi Al-Qur\'an Kemenag, 75 Hadits 5 Perawi, Buku PAI CP 2026 Kelas 7-9, Sejarah 25 Nabi, dan Kisah Teladan Islami. Ada yang ingin kamu diskusikan?'
    }
  ]);
  const [aiInput, setAiInput] = useState('');

  // Audio Player Handler
  const handlePlayAudio = (url?: string) => {
    if (!url) {
      showToast('Audio untuk ayat ini belum tersedia', 'info');
      return;
    }

    if (playingAudioUrl === url) {
      audioRef.current?.pause();
      setPlayingAudioUrl(null);
      return;
    }

    if (audioRef.current) {
      audioRef.current.pause();
    }

    const audio = new Audio(url);
    audioRef.current = audio;
    setPlayingAudioUrl(url);

    audio.play().catch(() => {
      showToast('Gagal memutar audio tilawah. Periksa koneksi internet.', 'error');
      setPlayingAudioUrl(null);
    });

    audio.onended = () => {
      setPlayingAudioUrl(null);
    };
  };

  const copyToClipboard = (text: string, label = 'Teks') => {
    navigator.clipboard.writeText(text);
    showToast(`${label} berhasil disalin ke clipboard`, 'success');
  };

  // Selected Surah
  const currentSurah = useMemo(() => {
    return MASTERKU_QURAN_SURAHS.find(s => s.number === selectedSurahNumber) || MASTERKU_QURAN_SURAHS[0];
  }, [selectedSurahNumber]);

  // Filtered Hadits
  const filteredHadits = useMemo(() => {
    return MASTERKU_HADITS_DATA.filter(h => {
      const matchPerawi = selectedPerawi === 'Semua' || h.narrator === selectedPerawi;
      const matchGrade = selectedHaditsGrade === 'Semua' || h.gradeRelevance === selectedHaditsGrade;
      const matchQuery = !searchQuery ||
        h.theme.toLowerCase().includes(searchQuery.toLowerCase()) ||
        h.translation.toLowerCase().includes(searchQuery.toLowerCase()) ||
        h.arabic.includes(searchQuery) ||
        h.narratorFull.toLowerCase().includes(searchQuery.toLowerCase());
      return matchPerawi && matchGrade && matchQuery;
    });
  }, [selectedPerawi, selectedHaditsGrade, searchQuery]);

  // Filtered Buku PAI
  const filteredBuku = useMemo(() => {
    return BUKU_PAI_DATA.filter(b => {
      const matchGrade = selectedBukuGrade === 'Semua' || b.grade === selectedBukuGrade;
      const matchElement = selectedBukuElement === 'Semua' || b.cpElement === selectedBukuElement;
      const matchQuery = !searchQuery ||
        b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        b.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        b.mainDalil.toLowerCase().includes(searchQuery.toLowerCase()) ||
        b.keyTerms.some(k => k.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchGrade && matchElement && matchQuery;
    });
  }, [selectedBukuGrade, selectedBukuElement, searchQuery]);

  // Filtered 25 Nabi
  const filteredNabi = useMemo(() => {
    return SEJARAH_25_NABI.filter(n => {
      const matchUlulAzmi = !filterUlulAzmiOnly || n.isUlulAzmi;
      const matchQuery = !searchQuery ||
        n.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        n.epithet.toLowerCase().includes(searchQuery.toLowerCase()) ||
        n.targetPeople.toLowerCase().includes(searchQuery.toLowerCase()) ||
        n.storySummary.toLowerCase().includes(searchQuery.toLowerCase());
      return matchUlulAzmi && matchQuery;
    });
  }, [filterUlulAzmiOnly, searchQuery]);

  const currentNabi = useMemo(() => {
    return SEJARAH_25_NABI.find(n => n.order === selectedNabiOrder) || SEJARAH_25_NABI[0];
  }, [selectedNabiOrder]);

  // Filtered Kisah Teladan
  const filteredTeladan = useMemo(() => {
    return KISAH_TELADAN_LIST.filter(t => {
      const matchCategory = selectedTeladanCategory === 'Semua' || t.category === selectedTeladanCategory;
      const matchQuery = !searchQuery ||
        t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.epithet.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.coreStory.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.studentInspiration.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchQuery;
    });
  }, [selectedTeladanCategory, searchQuery]);

  const currentTeladan = useMemo(() => {
    return KISAH_TELADAN_LIST.find(t => t.id === selectedTeladanId) || filteredTeladan[0] || KISAH_TELADAN_LIST[0];
  }, [selectedTeladanId, filteredTeladan]);

  // AI Dialog query generator
  const askMasterkuAI = (promptText: string) => {
    setIsAiOpen(true);
    setAiMessages(prev => [...prev, { sender: 'user', text: promptText }]);

    // Smart contextual response based on database
    setTimeout(() => {
      let response = '';
      const q = promptText.toLowerCase();

      // ==================== KELAS 8 SEMESTER 1 BAB 1: TOLERANSI Q.S. AL-HUJURAT: 13 & Q.S. AL-BAQARAH: 256 ====================
      if (
        (q.includes('kelas 8') && q.includes('bab 1')) ||
        (q.includes('kelas viii') && q.includes('bab 1')) ||
        q.includes('al-hujurat') ||
        q.includes('hujurat') ||
        q.includes('al-baqarah ayat 256') ||
        q.includes('baqarah 256') ||
        q.includes('la ikraha') ||
        q.includes('lita\'arafu') ||
        q.includes('litaarafu') ||
        (q.includes('tajwid') && (q.includes('lam') || q.includes('ra'))) ||
        (q.includes('toleransi') && (q.includes('hujurat') || q.includes('baqarah') || q.includes('tasamuh')))
      ) {
        response = `📖 Rangkuman Materi Lengkap PAI Kelas VIII Semester 1 Bab 1:
"Inspirasi Al-Qur'an: Membangun Harmoni Kehidupan melalui Toleransi dan Kedamaian"

1. 📜 Q.S. Al-Hujurāt [49]: Ayat 13
• Lafaz Arab: يٰٓاَيُّهَا النَّاسُ اِنَّا خَلَقْنٰكُمْ مِّنْ ذَكَرٍ وَّاُنْثٰى وَجَعَلْنٰكُمْ شُعُوْبًا وَّقَبَاۤىِٕلَ لِتَعَارَفُوْا ۚ اِنَّ اَكْرَمَكُمْ عِنْدَ اللّٰهِ اَتْقٰىكُمْ ۗ اِنَّ اللّٰهَ عَلِيْمٌ خَبِيْرٌ
• Terjemahan: "Wahai manusia! Sungguh, Kami telah menciptakan kamu dari seorang laki-laki dan seorang perempuan, kemudian Kami jadikan kamu berbangsa-bangsa dan bersuku-suku agar kamu saling mengenal. Sesungguhnya yang paling mulia di antara kamu di sisi Allah ialah orang yang paling bertakwa. Sungguh, Allah Maha Mengetahui, Mahateliti."
• Asbabun Nuzul: Terjadi saat Fathu Makkah (8 H), ketika Bilal bin Rabah r.a. (mantan budak berkulit hitam) diperintahkan azan di atas Ka'bah lalu dicemooh secara rasis oleh tokoh Quraisy. Allah menurunkan ayat ini untuk meruntuhkan kesombongan kasta/nasab.
• Kandungan Utama: (1) Semua manusia bersumber dari satu pasang (Nabi Adam & Hawa), (2) Pluralitas bangsa/suku adalah fitrah ilahi untuk saling mengenal (lita'ārafū), bukan saling bermusuhan, (3) Satu-satunya standar kemuliaan sejati di hadapan Allah hanyalah ketakwaan (integritas moral & kesalehan amal).

2. 📜 Q.S. Al-Baqarah [2]: Ayat 256
• Lafaz Arab: لَآ اِكْرَاهَ فِى الدِّيْنِۗ قَدْ تَّبَيَّنَ الرُّشْدُ مِنَ الْغَيِّۚ فَمَنْ يَّكْفُرْ بِالطَّاغُوْتِ وَيُؤْمِنْۢ بِاللّٰهِ فَقَدِ اسْتَمْسَكَ بِالْعُرْوَةِ الْوُثْقٰى لَا انْفِصَامَ لَهَاۗ وَاللّٰهُ سَمِيْعٌ عَلِيْمٌ
• Terjemahan: "Tidak ada paksaan dalam (menganut) agama (Islam); sungguh telah jelas (perbedaan) antara jalan yang benar dengan jalan yang sesat. Barangsiapa ingkar kepada Tagut dan beriman kepada Allah, maka sungguh, dia telah berpegang (teguh) pada tali yang sangat kuat yang tidak akan putus. Allah Maha Mendengar, Maha Mengetahui."
• Asbabun Nuzul: Terkait wanita Anshar yang hendak memaksa anak-anak mereka memeluk Islam ketika kabilah Bani Nadhir hendak meninggalkan Madinah. Islam melarang keras pemaksaan iman karena hidayah adalah otoritas Allah.
• Kandungan Utama: (1) Prinsip kebebasan beragama (lā ikrāha fid-dīn), (2) Kebenaran tauhid (ar-rusyd) telah sangat nyata terbedakan dari kesesatan (al-gayy), (3) Orang yang menolak tagut dan beriman kepada Allah memegang tali kokoh keselamatan abadi (al-'urwatil-wutsqā).

3. 🔍 Penerapan Kaidah Hukum Tajwid Lam dan Ra':
a. Hukum Lam Jalalah (Lafaz اللّٰه):
   • Tafkhim (Tebal): Jika didahului Fathah atau Dammah. Contoh pada ayat: عِنْدَ اللّٰهِ ('indallāh), اِنَّ اللّٰهَ (innallāha), وَاللّٰهُ (wallāhu).
   • Tarqiq (Tipis): Jika didahului Kasrah. Contoh pada ayat: بِاللّٰهِ (billāhi).
b. Hukum Alif Lam Ta'rif:
   • Al Syamsiyah (Idgham Syamsi): النَّاسُ (an-nāsu), الرُّشْدُ (ar-rusydu), بِالطَّاغُوْتِ (biṭ-ṭāgūti) — lam melebur ke huruf berikutnya yang bertasydid.
   • Al Qamariyah (Idzhar Qamari): الْغَيِّ (al-gayyi), بِالْعُرْوَةِ (bil-'urwati) — lam berharakat sukun terbaca terang jelas.
c. Hukum Huruf Ra' (ر):
   • Ra' Tafkhim (Tebal): Huruf ra' berharakat fathah/dammah, atau ra' sukun didahului fathah/dammah. Contoh: لِتَعَارَفُوْا (lita'ārafū), اَكْرَمَكُمْ (akramakum), الرُّشْدُ (ar-rusydu), بِالْعُرْوَةِ (bil-'urwati), لَآ اِكْرَاهَ (lā ikrāha).
   • Ra' Tarqiq (Tipis): Huruf ra' berharakat kasrah, atau ra' di akhir kata yang diwaqafkan didahului huruf ya sukun/mati. Contoh: خَبِيْرٌ (khabīr) di akhir Q.S. Al-Hujurat: 13.

4. 🤝 Hadis Sahih tentang Toleransi:
• H.R. Ahmad: "Agama manakah yang paling dicintai Allah? Beliau menjawab: Al-Hanifiyyatus-Samhah (Agama yang lurus bertauhid lagi lapang/toleran)."
• H.R. Abu Dawud No. 3052: "Barangsiapa menzalimi kafir mu'ahad (non-muslim yang berdamai), mengurangi haknya, membebaninya di luar batas, maka akulah penuntutnya di hari kiamat."

5. ⚖️ Batasan Toleransi (Tasamuh) Pelajar:
• Ranah Akidah & Ibadah (Zero Compromise): "Lakum dīnukum wa liya dīn", tidak boleh mencampuradukkan ritual peribadatan.
• Ranah Muamalah Sosial (Toleransi Penuh): Bekerja sama menjaga persatuan, tolong-menolong sesama warga, menolak bullying/rasisme, dan santun bertutur kata.`;
      } else if (
        (q.includes('kelas 8') && q.includes('bab 2')) ||
        (q.includes('kelas viii') && q.includes('bab 2')) ||
        q.includes('kitab-kitab allah') ||
        q.includes('kitab allah') ||
        q.includes('iman kepada kitab') ||
        q.includes('taurat') ||
        q.includes('zabur') ||
        q.includes('injil') ||
        q.includes('muhaimin') ||
        q.includes('al-muhaimin') ||
        (q.includes('suhuf') && (q.includes('ibrahim') || q.includes('musa') || q.includes('nabi'))) ||
        (q.includes('pecinta al-qur\'an') || q.includes('pecinta al quran') || q.includes('generasi qurani'))
      ) {
        response = `📚 Rangkuman Materi Lengkap PAI Kelas VIII Semester 1 Bab 2:
"Meyakini Kitab-Kitab Allah Swt.: Generasi Pecinta Al-Qur'an yang Toleran"

1. 📖 Pengertian & Hakikat Iman kepada Kitab-Kitab Allah Swt.:
• Rukun Iman Ketiga: Wajib diyakini dengan teguh dalam hati, diikrarkan dengan lisan, dan diwujudkan melalui perbuatan nyata.
• Secara Bahasa: Al-Kitab (tulisan/kumpulan wahyu yang dibukukan). Iman berarti tashdiq (membenarkan dan meyakini tanpa ragu).
• Secara Istilah: Meyakini sepenuh hati bahwa Allah Swt. telah menurunkan kitab-kitab suci kepada para rasul pilihan-Nya yang berisi petunjuk, syariat, dan peringatan hidup (hudan lin-nas) demi kebahagiaan di dunia dan akhirat.
• Dua Cara Beriman:
  - Iman Ijmali (Secara Global): Meyakini bahwa Allah menurunkan kitab-kitab kepada rasul-rasul terdahulu tanpa kita wajib mengamalkan syariatnya saat ini.
  - Iman Tafshili (Secara Terperinci): Wajib mempelajari, meyakini, membaca tartil, mentadabburi, dan mengamalkan seluruh isi Al-Qur'anul Karim dalam seluruh aspek kehidupan.

2. 📜 Dalil Naqli Al-Qur'an & Hadis Sahih:
• Q.S. An-Nisā' [4]: Ayat 136 (Perintah Beriman kepada Kitabullah):
  "Wahai orang-orang yang beriman! Tetaplah beriman kepada Allah dan Rasul-Nya dan kepada kitab yang Allah turunkan kepada Rasul-Nya serta kitab yang Allah turunkan sebelumnya..."
• Q.S. Al-Baqarah [2]: Ayat 136 (Prinsip Non-Diskriminasi Antar-Nabi):
  "Katakanlah (wahai orang-orang yang beriman): Kami beriman kepada Allah dan apa yang diturunkan kepada kami, dan apa yang diturunkan kepada Ibrahim, Ismail, Ishaq, Ya'qub dan anak cucunya, dan apa yang diberikan kepada Musa dan Isa serta apa yang diberikan kepada nabi-nabi dari Tuhan mereka..."
• Hadis Jibril (H.R. Muslim No. 8): Ketika Rasulullah SAW ditanya tentang iman, beliau bersabda: "Engkau beriman kepada Allah, malaikat-malaikat-Nya, kitab-kitab-Nya, rasul-rasul-Nya, hari akhir, dan takdir yang baik maupun yang buruk."

3. 🏛️ 4 Kitab Suci Allah Swt. & Suhuf Para Nabi:
(1) Kitab Taurat: Diturunkan kepada Nabi Musa a.s. pada abad ke-12 SM di Bukit Sinai dalam bahasa Ibrani untuk membimbing kaum Bani Israil. Intinya mencakup Sepuluh Perintah (The Ten Commandments).
(2) Kitab Zabur (Mazmur): Diturunkan kepada Nabi Dawud a.s. pada abad ke-10 SM di Yerusalem dalam bahasa Qibti/Suryani kuno berisi mazmur pujian, doa, zikir, nasihat hikmah, tanpa membawa syariat hukum baru (melanjutkan syariat Taurat).
(3) Kitab Injil: Diturunkan kepada Nabi Isa a.s. pada permulaan abad ke-1 M di Yerusalem dalam bahasa Suryani/Aramaik untuk membenarkan Taurat, meluruskan penyimpangan kaum Farisi, dan mengajarkan cinta kasih, zuhud, serta kabar gembira datangnya Nabi Terakhir (Ahmad/Muhammad SAW).
(4) Al-Qur'anul Karim: Diturunkan kepada Nabi Muhammad SAW pada abad ke-7 M (610–632 M) di Makkah dan Madinah dalam bahasa Arab fushah murni sebagai penyempurna (Al-Muhaimin) seluruh risalah langit untuk seluruh umat manusia hingga akhir zaman.
• Suhuf (Lembaran Wahyu): Diberikan kepada Nabi Syits (50 suhuf), Nabi Idris (30 suhuf), Nabi Ibrahim (10 suhuf, Q.S. Al-A'la: 19), dan Nabi Musa (10 suhuf sebelum dibukukan menjadi Taurat).

4. 🌟 6 Keistimewaan Monumental Al-Qur'anul Karim:
(1) Al-Muhaimin (Batu Uji & Penyempurna): Membenarkan, menguji, dan menjadi hakim atas ajaran kitab sebelumnya (Q.S. Al-Ma'idah: 48).
(2) Terpelihara Keasliannya Langsung oleh Allah: Dijamin orisinalitasnya dari perubahan tangan manusia hingga kiamat (Q.S. Al-Hijr: 9).
(3) Mukjizat Bahasa & Sains Sepanjang Zaman: Gaya sastra bahasa Arab tak tertandingi dan kebenaran faktanya selaras dengan sains modern.
(4) Berlaku Universal untuk Seluruh Umat Manusia (Kaffatan lin-Nas): Bukan hanya untuk suku/bangsa tertentu.
(5) Membacanya Bernilai Ibadah Berlipat Ganda: Setiap satu huruf dihitung 10 pahala kebaikan (H.R. At-Tirmidzi).
(6) Menyempurnakan & Menghapus (Nasikh) Syariat Terdahulu: Syariat praktis ibadah kini mutlak merujuk pada Al-Qur'an dan Sunnah Rasulullah SAW.

5. 🌿 Generasi Pecinta Al-Qur'an yang Berakhlak & Toleran:
• 4 Pilar Pelajar Qur'ani: Tilawah (membaca rutin), Tadabbur (memahami arti & konteks), Tahfiz (menghafal bertahap), dan 'Amal (mempraktikkan akhlak Al-Qur'an).
• Toleransi Beragama (Tasamuh): Al-Qur'an mengajarkan hidup berdampingan secara damai dengan kaum Ahli Kitab dan umat beragama lain dalam ranah muamalah kemanusiaan, tolong-menolong, menjaga ketertiban umum, serta menghargai perbedaan keyakinan tanpa kompromi akidah ("Lakum dinukum wa liya din").`;
      } else if (
        ((q.includes('kelas 8') || q.includes('kelas viii')) && q.includes('bab 3')) ||
        q.includes('cinta rasul') ||
        q.includes('cinta kepada rasul') ||
        q.includes('mahabbah rasul') ||
        q.includes('ali imran 31') ||
        q.includes('taubah 24') ||
        q.includes('manfaat cinta rasul') ||
        q.includes('refleksi cinta rasul') ||
        q.includes('sifat wajib rasul') ||
        q.includes('syafaat uzma') ||
        q.includes('shalawat ibrahimiyah')
      ) {
        response = `📚 Rangkuman Materi Lengkap PAI Kelas VIII Semester 1 Bab 3:
"Menerapkan Makna Cinta Rasul: Meneladani Akhlak Mulia dan Meraih Syafaat Rasulullah Saw."

1. ❤️ Pengertian Cinta kepada Rasulullah Saw.:
• Secara Bahasa (Al-Mahabbah): Kecenderungan dan keterikatan hati yang mendalam kepada sosok yang dicintai karena keindahan, kemuliaan, dan kebaikannya.
• Secara Istilah Syariat: Ketaatan batin dan kepatuhan lahiriah (ittiba') secara total kepada ajaran, sunnah, dan keteladanan baginda Nabi Muhammad SAW melebihi kecintaan kepada diri sendiri, orang tua, anak, dan seluruh umat manusia.
• Kedudukan Teologis: Merupakan konsekuensi mutlak syahadat kedua dan rukun keimanan. Tanpa mencintai Rasulullah SAW, keimanan seorang muslim belum sempurna.
• 4 Sifat Wajib Nabi: Shiddiq (Jujur), Amanah (Dapat Dipercaya), Tabligh (Menyampaikan Risalah), Fathanah (Cerdas & Bijaksana).
• 4 Sifat Mustahil Nabi: Kizib (Dusta), Khianat (Curang), Kitman (Menyembunyikan Kebenaran), Baladah (Bodoh).

2. 📜 Dalil Naqli Al-Qur'an & Hadis Sahih:
• Q.S. Āli 'Imrān [3]: 31 (Bukti Cinta kepada Allah adalah Mengikuti Rasul):
  "Katakanlah (Muhammad), 'Jika kamu mencintai Allah, ikutilah aku, niscaya Allah mencintaimu dan mengampuni dosa-dosamu.' Allah Maha Pengampun, Maha Penyayang."
• Q.S. At-Taubah [9]: 24 (Peringatan Mendahulukan Cinta Rasul di Atas Kesenangan Duniawi):
  "Katakanlah, 'Jika bapak-bapakmu, anak-anakmu, saudara-saudaramu, istri-istrimu, kaum keluargamu, harta kekayaan yang kamu usahakan... lebih kamu cintai daripada Allah dan Rasul-Nya dan berjihad di jalan-Nya, maka tunggulah sampai Allah memberikan keputusan-Nya'..."
• Q.S. Al-Ahzāb [33]: 21 (Nabi sebagai Uswatun Hasanah/Suri Teladan Terbaik).
• Q.S. Al-Ahzāb [33]: 56 (Perintah Bershalawat kepada Nabi).
• Hadis Sahih Bukhari & Muslim (Anas bin Malik r.a.):
  "Tidak sempurna iman salah seorang di antara kalian hingga aku lebih dicintainya daripada orang tuanya, anaknya, dan seluruh manusia."
• Hadis Manisnya Iman / Halawatul Iman (H.R. Bukhari-Muslim): Salah satu kuncinya adalah Allah dan Rasul-Nya lebih dicintai daripada selain keduanya.

3. 🌟 Contoh Perilaku Nyata Cinta Rasul bagi Pelajar SMP:
(1) Menghidupkan Sunnah Harian: Memulai aktivitas dengan basmalah, makan/minum duduk dengan tangan kanan, menyapa dengan senyum & salam ("Afshus-salam"), dan menjaga shalat sunnah rawatib/dhuha.
(2) Memperbanyak Shalawat: Mengamalkan wirid shalawat minimal 33x/hari (Shalawat Ibrahimiyah atau lafaz pendek) dan menjawab salam nabi saat nama beliau disebut.
(3) Meneladani Akhlak Mulia (Uswatun Hasanah): Menolak menyontek (meneladani Shiddiq), menjaga barang titipan teman (meneladani Amanah), belajar sungguh-sungguh (Fathanah), dan santun bertutur kata.
(4) Mengkaji Sirah Nabawiyah: Membaca kisah perjuangan, kesabaran, dan kasih sayang beliau kepada anak yatim dan fakir miskin.
(5) Mencintai Keluarga (Ahlul Bait) & Sahabat Nabi: Menghormati keturunan nabi dan para sahabat utama (Abu Bakar, Umar, Utsman, Ali r.a.).
(6) Membela Syariat & Kehormatan Nabi: Menggunakan medsos secara bijak untuk menyebarkan konten kebaikan dan menolak pelecehan ajaran Islam.

4. 🏆 Manfaat Agung Cinta kepada Rasulullah Saw.:
• Di Dunia: Merasakan manisnya iman (Halawatul Iman), memperoleh naungan cinta dan ampunan Allah SWT (Q.S. Ali 'Imran: 31), memiliki kompas moral teruji, serta disegani dalam pergaulan sosial.
• Di Akhirat: Memperoleh Syafaat 'Uzma (pertolongan terbesar nabi di Padang Mahsyar), dikumpulkan bersama Rasulullah SAW di Surga Firdaus tertinggi ("Al-mar'u ma'a man ahabba"), dan mendapatkan 10 kali limpahan rahmat Allah untuk setiap 1 shalawat.

5. 🪞 Merefleksikan Perilaku Cinta Rasul:
• Menyelesaikan dilema sekolah dengan integritas: berani jujur saat ujian, membela teman yang dirundung/dibully, dan mendahulukan shalat tepat waktu daripada bermain game online.
• Evaluasi rutin melalui Lembar Muhasabah Diri (Checklist 8 Dimensi) dan Komitmen Aksi Nyata Pelajar Muslim.`;
      } else if (
        ((q.includes('kelas 8') || q.includes('kelas viii')) && q.includes('bab 4')) ||
        q.includes('penyelenggaraan jenazah') ||
        q.includes('pengurusan jenazah') ||
        q.includes('kewajiban jenazah') ||
        q.includes('sholat jenazah') ||
        q.includes('shalat jenazah') ||
        q.includes('fardhu kifayah') ||
        q.includes('memandikan jenazah') ||
        q.includes('mengafani') ||
        q.includes('menguburkan jenazah') ||
        q.includes('takziah') ||
        q.includes('ziarah kubur') ||
        q.includes('niyahah') ||
        q.includes('shalat ghaib') ||
        q.includes('syahid marakah') ||
        q.includes('syahid ma\'rakah')
      ) {
        response = `📚 Rangkuman Materi Lengkap PAI Kelas VIII Semester 1 Bab 4:
"Menerapkan Ketentuan Kewajiban terhadap Penyelenggaraan Jenazah"

1. ⚖️ 4 Kewajiban terhadap Jenazah Muslim (Hukum Fardhu Kifayah):
• Pengertian Fardhu Kifayah: Kewajiban kolektif yang jika telah dilaksanakan oleh sebagian muslim dengan baik, maka gugurlah dosa seluruh warga muslim setempat; namun jika diabaikan semua, maka berdosalah seluruhnya.
• 4 Tahapan Pokok:
  (1) Memandikan (Ghasl): Mensucikan dari hadas & najis secara lemah lembut, tertutup auratnya, dilakukan oleh muhrim/orang amanah, dan haram menyebarkan aib mayit.
  (2) Mengafani (Takfin): Membungkus tubuh dengan kain putih bersih; sunnah 3 lapis bagi laki-laki dan 5 lapis bagi perempuan (kain basahan, baju kurung, kerudung, dan 2 lembar pembungkus).
  (3) Menyalatkan (Shalat Jenazah): Berdiri 4 kali takbir tanpa ruku, sujud, dan iqamah.
  (4) Menguburkan (Dafn): Membawa keranda dengan khusyuk, meletakkan mayit miring ke kanan menghadap kiblat di liang lahat, melepas tali kafan, dan mendoakan keteguhan (tsabat).
• Pengecualian Syahid Ma'rakah: Muslim yang gugur di medan perang membela agama Allah tidak dimandikan dan tidak dishalatkan, melainkan dikuburkan langsung bersama pakaian perangnya.

2. 🕌 Tata Cara Shalat Jenazah 4 Takbir:
• Syarat & Posisi Imam: Suci, menutup aurat, menghadap kiblat. Posisi imam berdiri sejajar kepala jika jenazah laki-laki, dan sejajar pinggang/tengah jika jenazah perempuan.
• Rukun 4 Takbir:
  - Takbir 1: Niat ikhlas karena Allah SWT + membaca Surah Al-Fatihah.
  - Takbir 2: Membaca Shalawat Nabi (paling utama Shalawat Ibrahimiyah).
  - Takbir 3: Membaca Doa Pengampunan untuk Jenazah (Allāhummaghfir lahu/laha...).
  - Takbir 4: Membaca Doa Penutup (Allāhumma lā tahrimnā ajrahu/ajrahā...) + Mengucapkan Salam ke kanan dan ke kiri.
• Shalat Ghaib: Dilakukan ketika jenazah berada di luar kota/negeri yang jauh atau tidak ditemukan jasadnya, tata caranya persis sama dengan shalat jenazah hadir.

3. 📖 Ketentuan Islam terhadap Penyelenggaraan Jenazah:
• Tindakan Awal Saat Wafat: Memicingkan kelopak mata mayit, mengikat dagu agar tidak menganga, melepaskan pakaian ketat, menyedekapkan tangan, menutupi seluruh tubuh dengan kain tipis bersih, dan melunasi hutang/wasiat.
• Larangan Niyahah (H.R. Bukhari No. 1294): Dilarang keras meratap histeris, menampar pipi, menyobek pakaian, atau memotret jenazah untuk disebarkan ke media sosial (menjaga kehormatan mayit).
• Adab Takziah (Melayat): Menghibur keluarga duka dalam masa 3 hari, mendoakan ketabahan, dan disunnahkan membawa makanan/bantuan (Sunnah Ja'far: "Buatkanlah makanan untuk keluarga Ja'far!").
• Ziarah Kubur: Bertujuan mendoakan ahli kubur dan mengingat akhirat (Tadzkiratul Maut), dilarang meminta-minta kepada kuburan atau meratap.

4. 🌺 Hikmah Penyelenggaraan Jenazah dengan Benar:
• Bagi Jenazah: Memperoleh doa ampunan ratusan kaum muslimin dan penghormatan terakhir yang mulia.
• Bagi Pengurus/Keluarga: Memperoleh pahala 2 Qirath (sebesar 2 Gunung Uhud, H.R. Bukhari-Muslim) dan menguatkan ukhuwah islamiyah.
• Bagi Pelajar & Remaja: Menyadarkan bahwa kehidupan duniawi fana, menumbuhkan sifat tawadhu', serta memotivasi untuk selalu berbuat kebajikan sebelum ajal menjemput.`;
      } else if (
        ((q.includes('kelas 8') || q.includes('kelas viii')) && q.includes('bab 8')) ||
        q.includes('cinta ilmu') ||
        q.includes('makna cinta ilmu') ||
        q.includes('menerapkan makna cinta ilmu') ||
        q.includes('ciri cinta ilmu') ||
        q.includes('ciri-ciri cinta ilmu') ||
        q.includes('manfaat berilmu') ||
        q.includes('hikmah cinta ilmu') ||
        q.includes('al-mujadilah 11') ||
        q.includes('al-mujadilah ayat 11') ||
        q.includes('al-mujadalah') ||
        q.includes('az-zumar 9') ||
        q.includes('az-zumar: 9') ||
        q.includes('rabbi zidni') ||
        q.includes('thalabul ilmi') ||
        q.includes('fardhu ain') ||
        q.includes('fardhu kifayah') ||
        q.includes('syarat imam syafii') ||
        q.includes('syair imam syafii')
      ) {
        response = `🌟 Rangkuman Materi Lengkap PAI Kelas VIII Semester 2 Bab 8:
"Menerapkan Makna Cinta Ilmu: Menumbuhkan Semangat Literasi dan Riset untuk Kemajuan Bangsa"

1. 📖 Pengertian Cinta Ilmu & Pembagian Hukum Menuntut Ilmu:
• Secara Bahasa: Berasal dari kata 'alima - ya'lamu - 'ilman (عَلِمَ - يَعْلَمُ - عِلْمًا) yang bermakna mengetahui, memahami, atau meyakini hakikat sesuatu secara pasti sesuai fakta sebenarnya. Cinta ilmu adalah hasrat batin yang kuat untuk mendalami pengetahuan yang bermanfaat.
• Secara Istilah Syariat: Sikap batin dan komitmen seorang mukmin yang dilandasi keikhlasan kepada Allah Swt. untuk senantiasa mencari, memahami, mengamalkan, dan menyebarkan ilmu yang bermanfaat (al-'ilmun nafi') demi meraih keridhaan Allah Swt. dan kemaslahatan umat manusia.
• Dua Tingkatan Hukum Menuntut Ilmu:
  (1) Fardhu 'Ain: Wajib mutlak bagi setiap individu muslim mukallaf, yaitu ilmu akidah dasar (rukun iman), fikih ibadah sehari-hari (thaharah, shalat fardhu, puasa Ramadhan), dan halal-haram. Meninggalkannya berdosa pribadi.
  (2) Fardhu Kifayah: Kewajiban kolektif masyarakat, yaitu ilmu kedokteran, farmasi, teknik, sains alam, astronomi, IT/AI, hukum waris (faraidh), dan tafsir mendalam. Jika tidak ada satu pun warga muslim yang menguasai hingga umat menderita, seluruh masyarakat menanggung dosa bersama.
• 6 Syarat Meraih Ilmu menurut Syair Imam Asy-Syafi'i:
  1. Zakā'un (ذَكَاءٌ) = Kecerdasan dan daya nalar kritis.
  2. Hirṣun (حِرْصٌ) = Rasa haus dan antusiasme tinggi terhadap ilmu.
  3. Ijtihādun (وَاجْتِهَادٌ) = Kesungguhan kerja keras, disiplin, dan pantang menyerah.
  4. Dirhamun (وَبُلْغَةٌ / وَدِرْهَمٌ) = Bekal biaya sarana secukupnya.
  5. Ṣuḥbatu Ustāżin (وَصُحْبَةُ أُسْتَاذٍ) = Bimbingan langsung dari guru yang berilmu dan beradab.
  6. Ṭūlu Zamānin (وَطُولُ زَمَانِ) = Waktu belajar yang panjang dan istiqomah seumur hidup.

2. 📜 Dalil Naqli Al-Qur'an & Hadits Shahih:
• Q.S. Al-Mujādilah [58]: 11:
  يٰٓاَيُّهَا الَّذِيْنَ اٰمَنُوْٓا اِذَا قِيْلَ لَكُمْ تَفَسَّحُوْا فِى الْمَجٰلِسِ فَافْسَحُوْا يَفْسَحِ اللّٰهُ لَكُمْۚ وَاِذَا قِيْلَ انْشُزُوْا فَانْشُزُوْا يَرْفَعِ اللّٰهُ الَّذِيْنَ اٰمَنُوْا مِنْكُمْۙ وَالَّذِيْنَ اُوْتُوا الْعِلْمَ دَرَجٰتٍۗ وَاللّٰهُ بِمَا تَعْمَلُوْنَ خَبِيْرٌ
  "Allah akan meninggikan orang-orang yang beriman di antaramu dan orang-orang yang diberi ilmu beberapa derajat. Dan Allah Mahateliti apa yang kamu kerjakan."
• Q.S. Az-Zumar [39]: 9:
  قُلْ هَلْ يَسْتَوِى الَّذِيْنَ يَعْلَمُوْنَ وَالَّذِيْنَ لَا يَعْلَمُوْنَ ۗ اِنَّمَا يَتَذَكَّرُ اُولُوا الْاَلْبَابِ
  "Katakanlah: Apakah sama orang-orang yang mengetahui dengan orang-orang yang tidak mengetahui? Sesungguhnya orang yang berakallah yang dapat menerima pelajaran."
• Q.S. Thāhā [20]: 114:
  وَقُلْ رَّبِّ زِدْنِيْ عِلْمًا
  "Dan katakanlah: Ya Tuhanku, tambahkanlah ilmu kepadaku."
• Q.S. Fāṭir [35]: 28:
  اِنَّمَا يَخْشَى اللّٰهَ مِنْ عِبَادِهِ الْعُلَمٰۤؤُا
  "Di antara hamba-hamba Allah yang takut kepada-Nya, hanyalah para ulama (orang yang berilmu)."
• H.R. Ibnu Majah No. 224: "Menuntut ilmu itu wajib bagi setiap muslim (laki-laki maupun perempuan)."
• H.R. Muslim No. 2699: "Barangsiapa menempuh suatu jalan untuk mencari ilmu, maka Allah akan memudahkan baginya jalan menuju surga."
• H.R. Abu Dawud No. 3641 & At-Tirmidzi No. 2682: "Keutamaan orang berilmu atas ahli ibadah laksana keutamaan rembulan pada malam purnama atas seluruh bintang-bintang. Dan para ulama adalah pewaris para nabi."
• H.R. Muslim No. 1631: Tiga amal jariyah yang pahalanya tidak terputus setelah wafat: sedekah jariyah, ilmu yang bermanfaat ('ilmun yuntafa'u bihi), dan anak saleh yang mendoakannya.

3. 🌟 6 Ciri Khas Pribadi Muslim Pecinta Ilmu:
(1) Rasa Ingin Tahu Ilmiah Tinggi (Syaghaf al-Ma'rifah): Selalu bertanya kritis, gemar membaca data, dan memverifikasi kebenaran (tabayyun).
(2) Tekun, Disiplin, & Pantang Menyerah (Ijtihad & Shabr): Konsisten mengulang pelajaran (muraja'ah) dan tidak mudah menyerah saat soal sulit.
(3) Gemar Membaca & Meneliti (Karakter Iqra'): Membaca buku literatur setiap hari, mencatat poin penting, dan menghindari doomscrolling medsos.
(4) Menghormati & Memuliakan Guru (Tawqirul Asatidz): Santun berbicara, fokus mendengarkan saat pelajaran, dan mendoakan para pendidik.
(5) Rendah Hati & Bebas dari Sombong Intelektual (Tawadhu'): Laksana ilmu padi kian berisi kian merunduk, tidak pamer nilai, dan tidak meremehkan teman.
(6) Senang Berbagi Ilmu & Diskusi Sehat (Isyrakul Ma'rifah): Menjadi tutor sebaya tanpa pamrih dan mendayagunakan ilmu untuk kemaslahatan bersama.

4. 💎 Manfaat Berilmu:
• Manfaat Duniawi: Memperoleh kredibilitas dan kemuliaan derajat sosial di masyarakat; menjadi pemecah masalah (problem solver) bangsa; menjadi benteng penangkal berita bohong (hoaks) dan manipulasi digital; serta membuka peluang rezeki halal dan kemajuan sains teknologi.
• Manfaat Ukhrawi: Dimudahkan jalan meniti shirath menuju surga; ibadah menjadi sah, berkualitas tinggi, dan diterima sempurna; serta mendapatkan aliran pahala jariyah yang abadi di alam barzakh.

5. 🌺 6 Hikmah Luhur Cinta Ilmu:
(1) Menumbuhkan rasa takut, kagum, dan tunduk yang hakiki kepada Allah Swt. (al-khosyyah).
(2) Memenuhi mandat mulia sebagai khalifah pemakmur bumi (khalifatullah fil ardh).
(3) Membentengi diri dari sikap taklid buta dan fanatisme sempit yang merusak persatuan.
(4) Membentuk integritas karakter yang jujur, anti-mencontek, dan anti-plagiasi.
(5) Melanjutkan mata rantai peradaban emas Islam yang gemilang di panggung dunia.
(6) Meraih kebahagiaan sejati di dunia dan keselamatan di akhirat (fiddunya hasanah wa fil akhirati hasanah).`;
      } else if (
        ((q.includes('kelas 8') || q.includes('kelas viii')) && q.includes('bab 7')) ||
        q.includes('iman kepada rasul') ||
        q.includes('rasul allah') ||
        q.includes('nabi dan rasul') ||
        q.includes('ulul azmi') ||
        q.includes('ulul \'azmi') ||
        q.includes('sifat rasul') ||
        q.includes('sifat wajib rasul') ||
        q.includes('sifat mustahil rasul') ||
        q.includes('sifat jaiz') ||
        q.includes('siddiq') ||
        q.includes('amanah') ||
        q.includes('tabligh') ||
        q.includes('fathanah') ||
        q.includes('kizib') ||
        q.includes('khianat') ||
        q.includes('kitman') ||
        q.includes('baladah') ||
        q.includes('aradlul basyariyah') ||
        q.includes('aradhul basyariyah') ||
        q.includes('tugas rasul') ||
        q.includes('keteladanan rasul') ||
        q.includes('hikmah iman kepada rasul')
      ) {
        response = `🌟 Rangkuman Materi Lengkap PAI Kelas VIII Semester 2 Bab 7:
"Meyakini dan Merefleksikan Iman kepada Para Rasul Allah Swt.: Meneladani Keluhuran Pribadi Pilihan"

1. 📖 Pengertian Iman kepada Rasul Allah Swt.:
• Secara Bahasa: Berasal dari kata "Al-Amanah" / "At-Tashdiq" yang berarti membenarkan dan mempercayai dengan tulus.
• Secara Istilah Syariat: Meyakini dengan sepenuh hati di dalam qalbu, mengikrarkan dengan lisan, dan membuktikannya melalui amal perbuatan bahwa Allah Swt. benar-benar telah memilih laki-laki suci dari kalangan manusia untuk menerima wahyu dan menyampaikannya kepada umat manusia sebagai pedoman keselamatan dunia dan akhirat.
• Rukun Iman: Merupakan rukun iman yang ke-4 dalam rukun iman yang enam.
• Perbedaan Nabi dan Rasul:
  - Nabi (نَبِيّ): Laki-laki pilihan yang menerima wahyu dari Allah Swt. untuk dirinya sendiri dan TIDAK diwajibkan menyampaikannya kepada kaumnya/umatnya secara umum.
  - Rasul (رَسُوْل): Laki-laki pilihan yang menerima wahyu dari Allah Swt. dengan syariat/kitab baru dan DIWAJIBKAN menyampaikannya kepada umatnya.
  - Kaidah: Setiap Rasul pasti seorang Nabi, tetapi tidak setiap Nabi adalah seorang Rasul.

2. 📜 Dalil Naqli Iman kepada Para Rasul:
• Q.S. An-Nisā' [4]: 136:
  يٰٓاَيُّهَا الَّذِيْنَ اٰمَنُوْٓا اٰمِنُوْا بِاللّٰهِ وَرَسُوْلِهٖ وَالْكِتٰبِ الَّذِيْ نَزَّلَ عَلٰى رَسُوْلِهٖ وَالْكِتٰبِ الَّذِيْٓ اَنْزَلَ مِنْ قَبْلُ ۗ وَمَنْ يَّكْفُرْ بِاللّٰهِ وَمَلٰۤىِٕكَتِهٖ وَكُتُبِهٖ وَرُسُلِهٖ وَالْيَوْمِ الْاٰخِرِ فَقَدْ ضَلَّ ضَلٰلًاۢ بَعِيْدًا
  "Wahai orang-orang yang beriman! Tetaplah beriman kepada Allah dan Rasul-Nya dan kepada Kitab yang Allah turunkan kepada Rasul-Nya serta Kitab yang Allah turunkan sebelumnya. Barangsiapa yang kafir kepada Allah, malaikat-malaikat-Nya, kitab-kitab-Nya, rasul-rasul-Nya, dan hari kemudian, maka sesungguhnya orang itu telah sesat sejauh-jauhnya."
• Q.S. Al-An'ām [6]: 48:
  وَمَا نُرْسِلُ الْمُرْسَلِيْنَ اِلَّا مُبَشِّرِيْنَ وَمُنْذِرِيْنَ ۚ فَمَنْ اٰمَنَ وَاَصْلَحَ فَلَا خَوْفٌ عَلَيْهِمْ وَلَا هُمْ يَحْزَنُوْنَ
  "Dan tidaklah Kami mengutus para rasul melainkan sebagai pembawa berita gembira dan sebagai pemberi peringatan. Siapa yang beriman dan mengadakan perbaikan, maka tidak ada kekhawatiran atas mereka dan tidak pula mereka bersedih hati."
• Q.S. Al-Ahzāb [33]: 21: Menegaskan bahwa pada diri Rasulullah Saw. terdapat suri teladan yang mulia (uswatun hasanah).
• Hadits Jibril (H.R. Muslim): Ketika ditanya perihal iman, Rasulullah Saw. menjawab: "Hendaklah engkau beriman kepada Allah, malaikat-malaikat-Nya, kitab-kitab-Nya, rasul-rasul-Nya, hari akhir, dan beriman kepada takdir yang baik maupun yang buruk."

3. 👥 Nama-Nama Rasul & Rasul Ulul Azmi:
• Jumlah Nabi & Rasul: Dalam riwayat terdapat 124.000 nabi dan 313/315 rasul, namun yang WAJIB diketahui dan diimani secara tafshili (terperinci) dalam Al-Qur'an berjumlah 25 orang:
  1. Adam a.s., 2. Idris a.s., 3. Nuh a.s., 4. Hud a.s., 5. Saleh a.s.,
  6. Ibrahim a.s., 7. Luth a.s., 8. Ismail a.s., 9. Ishaq a.s., 10. Ya'qub a.s.,
  11. Yusuf a.s., 12. Ayyub a.s., 13. Syu'aib a.s., 14. Musa a.s., 15. Harun a.s.,
  16. Dzulkifli a.s., 17. Dawud a.s., 18. Sulaiman a.s., 19. Ilyas a.s., 20. Ilyasa' a.s.,
  21. Yunus a.s., 22. Zakaria a.s., 23. Yahya a.s., 24. Isa a.s., 25. Muhammad Saw. (Khatamun Nabiyyin).
• 5 Rasul Ulul Azmi (Singkatan N-I-M-I-M):
  Memiliki ketabahan, kesabaran, dan keteguhan hati luar biasa dalam menghadapi penentangan kaumnya:
  1. Nabi Nuh a.s. (Berdakwah 950 tahun dengan kesabaran agung, mukjizat bahtera raksasa).
  2. Nabi Ibrahim a.s. (Khalilullah, selamat dari kobaran api Raja Namrud, membangun Ka'bah).
  3. Nabi Musa a.s. (Kalimullah, membelah Laut Merah dengan tongkat, mengalahkan sihir Fir'aun).
  4. Nabi Isa a.s. (Ruhullah, lahir tanpa ayah, menyembuhkan kusta/buta, menghidupkan orang mati atas izin Allah).
  5. Nabi Muhammad Saw. (Sayyidul Anbiya, mukjizat abadi Al-Qur'an, Isra' Mi'raj, pembawa risalah universal).

4. 🎯 5 Tugas Pokok Para Rasul:
(1) At-Tablīgh (Menyampaikan Risalah Tauhid): Mengajak manusia menyembah Allah semata dan menjauhi thaghut.
(2) Mubasysyir & Munżir (Pembawa Berita Gembira & Peringatan): Menjanjikan surga bagi yang taat dan mengingatkan siksa neraka bagi yang ingkar.
(3) Uswatun Ḥasanah (Teladan Karakter Paripurna): Mencontohkan integritas akhlak dalam berkeluarga, bermasyarakat, dan bernegara.
(4) Tazkiyatun Nufūs (Penyucian Jiwa): Membersihkan hati umat manusia dari noda syirik, takabur, dendam, dan kemunafikan.
(5) Iqāmatul 'Adl (Menegakkan Keadilan Sosial): Menghapus kezaliman, diskriminasi kasta, dan membela hak kaum lemah.

5. 💎 Sifat-Sifat Para Rasul Allah Swt.:
• 4 Sifat Wajib (Pasti ada pada rasul):
  1. Aṣ-Ṣiddīq (اَلصِّدْقُ) = Jujur dan benar perkataan serta perbuatannya.
  2. Al-Amānah (اَلْأَمَانَةُ) = Terpercaya menjaga mandat risalah dan tidak khianat.
  3. At-Tablīgh (اَلتَّبْلِيْغُ) = Menyampaikan seluruh wahyu tanpa ada yang disembunyikan.
  4. Al-Faṭānah (اَلْفَطَانَةُ) = Cerdas, bijaksana, dan piawai mematahkan argumen kaum musyrik.
• 4 Sifat Mustahil (Tidak mungkin ada pada rasul / lawan sifat wajib):
  1. Al-Kiżib (اَلْكِذْبُ) = Dusta atau bohong.
  2. Al-Khiyānah (اَلْخِيَانَةُ) = Berkhianat atau menyalahgunakan amanah.
  3. Al-Kitmān (اَلْكِتْمَانُ) = Menyembunyikan wahyu.
  4. Al-Balādah (اَلْبَلَادَةُ) = Bodoh, dungu, atau lalai.
• 1 Sifat Ja'iz (Boleh ada pada rasul):
  - Al-A'rāḍul Basyariyyah (اَلْأَعْرَاضُ الْبَشَرِيَّةُ): Sifat-sifat kodrat kemanusiaan yang tidak mengurangi martabat keluhuran kenabian, seperti merasa lapar, dahaga, tidur, berjalan di pasar, berdagang, menikah, serta mengalami sakit biasa.

6. 🤝 Contoh Keteladanan Praktis bagi Pelajar:
• Menjunjung Kejujuran (Siddiq): Menolak keras mencontek saat ujian dan tidak menyebarkan desas-desus dusta.
• Bertanggung Jawab (Amanah): Menuntaskan tugas kelompok dengan sungguh-sungguh dan menjaga fasilitas kelas.
• Berani Menyampaikan Kebaikan (Tabligh): Saling mengingatkan shalat dan berani membela teman yang menjadi korban perundungan (bullying).
• Cerdas & Berpikir Kritis (Fathonah): Memanfaatkan teknologi untuk belajar, menyaring informasi sebelum share, dan berprestasi di sekolah.

7. 🌺 Hikmah Beriman kepada Para Rasul:
• Memiliki kompas figur keteladanan sejati dalam mengarungi kehidupan.
• Tumbuh menjadi pribadi yang berintegritas tinggi, jujur, dan berakhlakul karimah.
• Menumbuhkan jiwa sabar dan optimis pantang menyerah saat menghadapi rintangan belajar.
• Memperoleh ketenangan batin karena berpedoman pada syariat yang pasti benar.
• Berpeluang memperoleh Syafa'atul 'Uzma dari Nabi Muhammad Saw. di yaumul akhir.`;
      } else if (
        ((q.includes('kelas 8') || q.includes('kelas viii')) && q.includes('bab 6')) ||
        q.includes('cinta tanah air') ||
        q.includes('hubbul wathan') ||
        q.includes('an-nisa 66') ||
        q.includes('an-nisa: 66') ||
        q.includes('an nisa 66') ||
        q.includes('an nisa ayat 66') ||
        q.includes('nun sukun') ||
        q.includes('tanwin') ||
        q.includes('idzhar halqi') ||
        q.includes('idgham bighunnah') ||
        q.includes('idgham bilaghunnah') ||
        q.includes('iqlab') ||
        q.includes('ikhfa haqiqi') ||
        q.includes('idzhar mutlaq') ||
        q.includes('piagam madinah') ||
        q.includes('cinta makkah') ||
        q.includes('cinta madinah')
      ) {
        response = `🇮🇩 Rangkuman Materi Lengkap PAI Kelas VIII Semester 2 Bab 6:
"Menebarkan Semangat Cinta Tanah Air: Q.S. An-Nisā' [4]: 66, Hadis Cinta Tanah Air, & Hukum Bacaan Nun Sukun dan Tanwin"

1. 📜 Q.S. An-Nisā' [4]: Ayat 66
• Lafaz Arab:
وَلَوْ اَنَّا كَتَبْنَا عَلَيْهِمْ اَنِ اقْتُلُوْٓا اَنْفُسَكُمْ اَوِ اخْرُجُوْا مِنْ دِيَارِكُمْ مَّا فَعَلُوْهُ اِلَّا قَلِيْلٌ مِّنْهُمْ ۗ وَلَوْ اَنَّهُمْ فَعَلُوْا مَا يُوْعَظُوْنَ بِهٖ لَكَانَ خَيْرًا لَّهُمْ وَاَشَدَّ تَثْبِيْتًا ۙ
• Terjemahan: "Dan sekalipun telah Kami perintahkan kepada mereka, 'Bunuhlah dirimu atau keluarlah kamu dari kampung halamanmu,' niscaya mereka tidak akan melakukannya kecuali sebagian kecil dari mereka. Dan sekiranya mereka benar-benar melaksanakan pengajaran yang diberikan kepada mereka, niscaya itu lebih baik bagi mereka dan lebih menguatkan (iman mereka)."
• Kandungan Tafsir:
  - Allah Swt. menyandingkan kecintaan manusia terhadap nyawanya (aqtulu anfusakum) setara dengan kecintaan terhadap tanah kelahirannya/kampung halamannya (ukhruju min diyarikum).
  - Ayat ini membuktikan bahwa rasa cinta tanah air (hubbul wathan) adalah fitrah manusiawi yang suci, luhur, dan diakui secara mutlak dalam syariat Islam.
  - Ketaatan menjalankan perintah agama dan mempertahankan tanah air menjadi sebab datangnya pertolongan Allah serta keteguhan iman.

2. 🕌 Hadits Shahih & Piagam Madinah tentang Cinta Tanah Air:
• H.R. At-Tirmidzi No. 3926 (Cinta Makkah): Rasulullah Saw. memandang kota Makkah seraya bersabda: "Alangkah indah dan damainya engkau sebagai sebuah negeri, dan alangkah cintanya aku kepadamu! Kalaulah bukan karena kaumku mengusirku darimu, niscaya aku tidak akan pernah mendiami negeri selainmu."
• H.R. Al-Bukhari No. 1886 (Cinta Madinah): Saat kembali dari bepergian jauh, ketika melihat dinding kota Madinah dari kejauhan, Rasulullah Saw. mempercepat laju kendaraannya karena luapan rasa rindu dan cintanya kepada Madinah.
• Piagam Madinah (Mitsaq al-Madinah 622 M): Konstitusi negara modern pertama di dunia yang menyatukan kaum Muhajirin, Anshar, serta kabilah-kabilah Yahudi/Nasrani sebagai "Satu Umat yang Utuh" (ummatan wahidah) yang berkewajiban membela tanah air bersama dari ancaman agresi luar.

3. 🔍 Kaidah Lengkap Hukum Nun Sukun (نْ) dan Tanwin (ـًـــٍـــٌ):
(1) Idzhar Halqi (إظهار حلقي) - 6 Huruf (ء, هـ, ع, ح, غ, خ): Dibaca jelas tanpa dengung.
    Contoh pada ayat: مِّنْهُمْ (min-hum = nun sukun bertemu ha).
(2) Idgham Bighunnah (إدغام بغنة) - 4 Huruf (ي, ن, م, و / YANMU): Dileburkan disertai dengung 2 harakat.
    Contoh pada ayat: قَلِيْلٌ مِّنْهُمْ (qalilum min-hum = tanwin dammah bertemu mim).
    *Catatan Idzhar Mutlaq (Wajib dibaca jelas jika nun sukun bertemu ya/wawu dalam satu kata): دُنْيَا (dunya), بُنْيَانٌ (bunyan), قِنْوَانٌ (qinwan), صِنْوَانٌ (sinwan).
(3) Idgham Bilaghunnah (إدغام بلا غنة) - 2 Huruf (ل, ر): Dileburkan tanpa dengung.
    Contoh pada ayat: خَيْرًا لَّهُمْ (khairal-lahum = tanwin fathah bertemu lam).
(4) Iqlab (إقلاب) - 1 Huruf (ب): Mengubah bunyi nun sukun/tanwin menjadi mim samar disertai dengung 2 harakat.
    Contoh: مِنْ بَعْدِ (mim ba'di), سَمِيْعٌۢ بَصِيْرٌ (sami'um-bashir).
(5) Ikhfa Haqiqi (إخفاء حقيقي) - 15 Huruf: Menyamarkan bunyi antara idzhar dan idgham disertai dengung 2 harakat.
    Contoh pada ayat: مِنْ دِيَارِكُمْ (min diyārikum = nun sukun bertemu dal), اَنْفُسَكُمْ (anfusakum = nun sukun bertemu fa).

4. ✍️ Penerapan 4 Keterampilan Pembelajaran:
• Membaca: Tartil melafalkan makharijul huruf dan konsisten dengung 2 harakat pada ghunnah.
• Menghafal: Metode Tikrar (pengulangan bertahap per penggalan ayat).
• Menulis: Kaidah Khat Naskhi memperhatikan posisi huruf di atas atau menggantung di bawah garis buku.
• Menjelaskan: Membedah kaitan antara keimanan dengan patriotisme kebangsaan Indonesia.

5. 🌺 Hikmah Cinta Tanah Air bagi Pelajar:
• Mengisi kemerdekaan dengan prestasi belajar dan etos kerja ilmiah.
• Menolak penyebaran hoaks, ujaran kebencian, dan provokasi disintegrasi di medsos.
• Menghargai keragaman suku, agama, dan budaya dalam bingkai Bhinneka Tunggal Ika.
• Menjaga fasilitas umum dan kelestarian lingkungan hidup tanah air.`;
      } else if (
        ((q.includes('kelas 8') || q.includes('kelas viii')) && q.includes('bab 5')) ||
        q.includes('abbasiyah') ||
        q.includes('abasiyah') ||
        q.includes('daulah abbasiyah') ||
        q.includes('dinasti abbasiyah') ||
        q.includes('baitul hikmah') ||
        q.includes('baitul hikmah') ||
        q.includes('harun ar-rasyid') ||
        q.includes('harun al rasyid') ||
        q.includes('al-ma\'mun') ||
        q.includes('al ma\'mun') ||
        q.includes('al mamun') ||
        q.includes('as-saffah') ||
        q.includes('abu jafar al mansur') ||
        q.includes('al-khawarizmi') ||
        q.includes('ibnu sina') ||
        q.includes('ar-razi') ||
        q.includes('hulagu khan') ||
        q.includes('kebangkitan abbasiyah') ||
        q.includes('runtuhnya abbasiyah') ||
        q.includes('tokoh abbasiyah') ||
        q.includes('hikmah abbasiyah')
      ) {
        response = `📚 Rangkuman Materi Lengkap PAI Kelas VIII Semester 1 Bab 5:
"Merefleksikan Diri terhadap Sejarah dan Peran Kekhalifahan Islam Pasca Khulafaur Rasyidin: Dinasti Abbasiyah"

1. 🏛️ Sejarah Berdirinya Daulah Abbasiyah (750–1258 M / 132–656 H):
• Latar Belakang & Asal-usul:
  - Dinamakan "Abbasiyah" karena dinisbatkan kepada paman Nabi Muhammad SAW, yaitu Abbas bin Abdul Muthalib r.a.
  - Berdiri dilatarbelakangi oleh runtuhnya Daulah Umayyah di Damaskus akibat diskriminasi terhadap kaum Mawali (muslim non-Arab), perpecahan internal bani Umayyah, dan gaya hidup bermewah-mewahan.
• Strategi Gerakan Bawah Tanah di Tiga Pusat Wilayah:
  - Al-Humaimah (Yordania): Pusat perencanaan taktis dan markas rahasia keluarga Abbasiyah (dipimpin Muhammad bin Ali bin Abdullah bin Abbas).
  - Kufah (Irak): Pusat propaganda rahasia dan penghubung koalisi dengan kaum Syi'ah dan Mawali (dipimpin Abu Salmah al-Khallal "Wazir Alu Muhammad").
  - Khurasan (Iran/Asia Tengah): Pusat kekuatan militer lapangan yang dipimpin oleh panglima tangguh Abu Muslim al-Khurasani.
• Deklarasi & Pusat Pemerintahan:
  - Abu al-Abbas As-Saffah dibaiat sebagai khalifah pertama pada tahun 750 M (132 H) setelah memenangkan Pertempuran Sungai Zab Besar.
  - Khalifah kedua, Abu Ja'far al-Mansur, memindahkan ibu kota dari Al-Anbar dan membangun Kota Bundar Baghdad (Madinat as-Salam / Kota Perdamaian) pada tahun 762 M di tepi Sungai Tigris (Dajlah).
• 5 Periode Dinamika Kekuasaan:
  - Periode I (750–847 M): Masa Pengaruh Persia Pertama (Fase Keemasan & Integrasi Sains).
  - Periode II (847–945 M): Masa Pengaruh Turki Pertama (Militeristik).
  - Periode III (945–1055 M): Masa Dinasti Buwaihiyah (Pengaruh Persia Kedua/Syi'ah).
  - Periode IV (1055–1194 M): Masa Dinasti Seljuk (Pengaruh Turki Kedua/Sunni, madrasah Nizamiyah).
  - Periode V (1194–1258 M): Fase Kemunduran & Kehancuran Baghdad oleh Invasi Bangsa Mongol.

2. 👑 Tokoh-Tokoh Penting dalam Daulah Abbasiyah:
• Para Khalifah Pengukuh & Pembangun Peradaban:
  - Abu al-Abbas As-Saffah (750–754 M): Pendiri dan konsolidator militer pertama.
  - Abu Ja'far al-Mansur (754–775 M): Peletak fondasi birokrasi, penegak disiplin kas negara (Baitul Mal), dan perancang Kota Bundar Baghdad.
  - Harun ar-Rasyid (786–809 M): Simbol kemakmuran, pendiri awal Khizanah al-Hikmah, diplomatik internasional dengan Raja Charlemagne dari Prancis, serta pendiri rumah sakit gratis Bimaristan.
  - Al-Ma'mun (813–833 M): Pelindung sains terbesar, memperluas Baitul Hikmah menjadi akademi riset raksasa, dan menggaji para penerjemah dengan emas seberat buku yang diterjemahkan.
• Para Ilmuwan Sains & Kedokteran Monumental:
  - Ibnu Sina (Avicenna, 980–1037 M): "Bapak Kedokteran Modern", penulis ensiklopedia medis Al-Qanun fi at-Tibb yang menjadi rujukan universitas Eropa selama 600 tahun.
  - Al-Khawarizmi (780–850 M): "Bapak Aljabar & Algoritma", penemu angka nol (shifr), sistem desimal, dan penulis buku Al-Jabr wa al-Muqabalah.
  - Ar-Razi (Rhazes, 865–925 M): Penemu perbedaan cacar (variola) dan campak, pelopor anestesi, serta kepala Bimaristan Baghdad.
  - Al-Battani & Banu Musa Bersaudara: Astronom dan penemu alat mekanik otomatis pertama di dunia.
• Ulama Agung Bidang Fikih & Hadits:
  - Imam Abu Hanifah, Imam Malik, Imam Asy-Syafi'i, dan Imam Ahmad bin Hanbal (Empat Mazhab Fikih).
  - Imam Al-Bukhari & Imam Muslim (Penyusun Kitab Shahihain Hadits).

3. 🌟 Puncak Kejayaan Daulah Abbasiyah (The Golden Age of Islam):
• Lembaga Riset Baitul Hikmah (House of Wisdom):
  - Menggabungkan fungsi perpustakaan raksasa, biro penerjemahan multi-bahasa (Yunani, Persia, Sansekerta, Suryani), observatorium astronomi, dan akademi debat ilmiah.
  - Gerakan Tarjamah & Tadwin: Ribuan naskah filsafat, geometri Euclid, astronomi Ptolemeus, dan kedokteran Galen diterjemahkan dan dikoreksi secara kritis dengan kaidah empiris Islam.
• Kemajuan Multisektoral Peradaban:
  - Sistem Kedokteran & Bimaristan: Rumah sakit modern dengan pemisahan bangsal pria/wanita, bangsal bedah, apotek farmasi, pemeriksaan dokter keliling ke penjara dan pelosok, serta pembebasan biaya bagi seluruh pasien.
  - Matematika & Astronomi: Trigonometri sferis, astrolabe canggih, peta dunia Al-Idrisi, serta pengukuran keliling bumi oleh para ilmuwan Al-Ma'mun di gurun Sinjar.
  - Ekonomi & Perbankan Cek Modern: Penemuan cek (suftajah / sakk) dan jaringan perdagangan laut internasional dari Basrah hingga Kanton Cina.
  - Industri Kertas (Paper Mill) Baghdad: Mengadaptasi teknologi kertas menjadi murah dan massal sehingga melipatgandakan jumlah buku dan melahirkan industri toko buku (Warraqah).

4. ⚔️ Faktor Kemunduran Daulah Abbasiyah:
• Faktor Internal:
  - Perebutan kekuasaan antarpangeran dan perang saudara suksesi.
  - Gaya hidup hedonis, mewah, dan koruptif para pejabat era akhir dinasti.
  - Ketergantungan berlebihan pada tentara bayaran (Ghulman/Mamluk asal Turki dan suku Daylam).
  - Fanatisme mazhab dan friksi ideologis yang merapuhkan solidaritas umat.
  - Disintegrasi wilayah: Banyak provinsi otonom memerdekakan diri karena Baghdad terlalu lemah.
• Faktor Eksternal:
  - Invasi Pasukan Salib di wilayah Syam (Levant).
  - Tragedi Serangan Tentara Mongol (1258 M / 656 H): Dipimpin Hulagu Khan yang mengepung Baghdad, membantai ratusan ribu warga termasuk Khalifah Al-Musta'sim Billah, membakar kota, dan menenggelamkan jutaan koleksi naskah Baitul Hikmah ke Sungai Tigris hingga airnya berubah menjadi hitam pekat tinta dan merah darah.

5. 💎 Hikmah Sejarah Daulah Abbasiyah & Refleksi Diri Pelajar Muslim:
• Dalil Naqli Refleksi Sejarah (Ibrah):
  - Q.S. Al-Hasyr [59]: 18: "Wahai orang-orang yang beriman! Bertakwalah kepada Allah dan hendaklah setiap orang memperhatikan apa yang telah diperbuatnya untuk hari esok..."
  - Q.S. Az-Zumar [39]: 9: "Katakanlah, 'Apakah sama orang-orang yang mengetahui dengan orang-orang yang tidak mengetahui?'"
  - H.R. At-Tirmidzi No. 2687: "Barangsiapa menelusuri jalan untuk mencari ilmu, maka Allah akan memudahkan baginya jalan menuju surga."
• 5 Nilai Keteladanan untuk Pelajar Zaman Now:
  (1) Menumbuhkan Etos Literasi Tinggi: Mengganti budaya scroll tanpa arah menjadi kegemaran membaca naskah bermutu (seperti semangat Al-Ma'mun mengapresiasi buku).
  (2) Sikap Terbuka terhadap Sains & Inovasi (Inklusif & Obyektif): Mencontoh para ilmuwan yang mengadopsi hikmah dari mana pun sumbernya ("Al-hikmatu dhallatul mu'min").
  (3) Memanfaatkan Gadget sebagai "Baitul Hikmah Digital": Memakai smartphone untuk mengunduh e-book, video sains, dan belajar hal positif, bukan untuk judi online atau flexing.
  (4) Menjaga Persatuan & Menolak Fanatisme Sempit: Mengambil ibrah kehancuran Baghdad agar tidak berpecah-belah karena hoaks atau adu domba.
  (5) Menjunjung Integritas Moral & Menghindari Hidup Hedonis: Meneladani kesederhanaan dan dedikasi pengorbanan para khalifah awal.`;
      } else if (
        q.includes('bab 10') ||
        q.includes('bab x') ||
        q.includes('materi bab 10') ||
        (q.includes('kelas 7') && q.includes('semester 2') && q.includes('bab 10')) ||
        q.includes('andalusia') ||
        q.includes('spanyol') ||
        q.includes('cordoba') ||
        q.includes('thariq bin ziyad') ||
        q.includes('jabal thariq') ||
        q.includes('gibraltar') ||
        q.includes('abdurrahman ad-dakhil') ||
        q.includes('shaqr quraisy') ||
        q.includes('abdurrahman iii') ||
        q.includes('al-hakam ii') ||
        q.includes('az-zahrawi') ||
        q.includes('albucasis') ||
        q.includes('ibnu rusyd') ||
        q.includes('averroes') ||
        q.includes('abbas bin firnas') ||
        q.includes('mulukut thawaif') ||
        q.includes('reconquista') ||
        q.includes('alhambra') ||
        q.includes('granada')
      ) {
        response = `📖 Rangkuman Materi Lengkap PAI Kelas VII Semester 2 Bab 10:
"Meneladani Kejayaan Peradaban Islam Daulah Bani Umayyah Periode Andalusia"

1. 🏰 Sejarah Berdirinya:
- Latar Belakang: Semenanjung Iberia (Spanyol) sebelumnya dikuasai oleh Raja Roderick dari bangsa Visigoth yang zalim, memungut pajak mencekik, dan mempersekusi warga Yahudi & Kristen Unitarian. Julian (Gubernur Ceuta) meminta bantuan kepada Musa bin Nushair (Gubernur Afrika Utara Daulah Umayyah).
- Penaklukan 711 M: Thariq bin Ziyad memimpin 7.000 prajurit (didominasi suku Berber) menyeberangi selat dan mendarat di bukit karang Jabal Thariq (Gibraltar). Dalam Pertempuran Danau Guadalete (Wadi Lakkah), 12.000 pasukan Muslim mengalahkan 100.000 pasukan Roderick.
- Pidato Legendaris Thariq: "Wahai manusia! Ke manakah kalian hendak lari? Musuh ada di hadapan kalian, dan laut membentang di belakang kalian! Yang tersisa bagi kalian hanyalah kejujuran dan kesabaran!" (Simbol kebulatan tekad dan tawakal).
- Berdirinya Keamiran Cordoba (756 M): Ketika Daulah Umayyah Damaskus runtuh (750 M) oleh Abbasiyah, pangeran pelarian Abdurrahman bin Muawiyah (Abdurrahman Ad-Dakhil / Shaqr Quraisy) berhasil menyeberang padang pasir Afrika, masuk ke Spanyol, dan mendirikan Daulah Umayyah Barat di Cordoba.
- 6 Babak Periodisasi: (1) Fase Wali/Gubernur (711–756 M), (2) Fase Keamiran (756–929 M), (3) Fase Kekhalifahan Cordoba (929–1031 M), (4) Fase Mulukut Thawaif (1031–1086 M), (5) Fase Murabithun & Muwahhidun (1086–1238 M), (6) Fase Kerajaan Granada/Bani Ahmar (1238–1492 M).

2. 👑 Masa Keemasannya:
- Cordoba sebagai "Permata Dunia" (The Ornament of the World): Pada abad ke-10 M, Cordoba dihuni lebih dari 500.000 jiwa, memiliki 70 perpustakaan umum, 900 pemandian, dan jalanan beraspal batu dengan penerangan lampu jalan di malam hari (ketika kota-kota Eropa lainnya masih gelap dan berlumpur).
- Universitas & Perpustakaan: Perpustakaan Kerajaan Al-Hakam II mengoleksi 400.000 jilid buku ilmiah.
- Harmoni "La Convivencia": Hidup berdampingan secara damai dan toleran antara Muslim, Kristen Mozarab, dan Yahudi Sephardik dalam birokrasi dan sains.
- Khalifah Utama: (1) Abdurrahman III (An-Nashir) yang membangun kota megah Madinatuz Zahra dan armada laut adidaya, (2) Al-Hakam II yang mencintai buku dan mendirikan 27 sekolah gratis, (3) Abdurrahman II pelopor tata kota modern dan seni.

3. 🌍 Kontribusi Peradaban Andalusia bagi Dunia:
- Kedokteran: Abu Al-Qasim Az-Zahrawi (Albucasis) bapak bedah modern, pencipta Kitab At-Tashrif, penemu 200 alat bedah & benang bedah usus (catgut). Ibnu Zuhr (Avenzoar) pionir trakeostomi dan parasitologi.
- Filsafat: Ibnu Rusyd (Averroes) komentator agung Aristoteles yang mengharmonisasikan wahyu agama dan akal rasional; mencetuskan gerakan Averroisme pemicu Renaisans Eropa. Ibnu Thufail novelis filsafat Hayy bin Yaqzhan.
- Astronomi & Teknologi: Abbas bin Firnas perintis penerbangan manusia pertama dengan glider bersayap bulu elang di Cordoba (875 M) serta penemu kacamata dan kaca silika. Az-Zarqali (Arzachel) penemu astrolabe Safihah dan pembuktian orbit elips.
- Pertanian & Air: Ibnu Al-Awwam (Kitab Al-Filahah) menguraikan 585 jenis tanaman; penemuan kincir air Noria dan saluran Acequia yang menyulap Spanyol menjadi lumbung pangan buah-buahan Eropa.
- Arsitektur & Musik: Masjid Agung Mezquita Cordoba (856 tiang marmer tapal kuda), Istana Alhambra Granada ("Wa La Ghaliba Illallah"), dan Ziryab musisi pencipta gitar 5 senar & etika makan modern.

4. 📉 Faktor-Faktor Kemunduran:
- Internal: (1) Perpecahan politik Mulukut Thawaif (terbagi menjadi 30+ kerajaan kecil yang saling serang), (2) Pengkhianatan membayar upeti (parias) dan bersekutu dengan musuh demi kursi kekuasaan, (3) Budaya hedonisme, pesta kemewahan istana, dan penyakit wahn (cinta dunia dan takut mati).
- Eksternal: (4) Gerakan militer Perang Salib Reconquista dari kerajaan Kristen utara, (5) Pernikahan Ferdinand (Aragon) & Isabella (Castile) yang menyatukan kekuatan Spanyol hingga mengepung dan merebut benteng terakhir Granada pada 2 Januari 1492 M.

5. 💎 Hikmah Sejarah bagi Pelajar:
1. Cinta Literasi & Riset Ilmiah (Q.S. Al-Mujadilah: 11): Kemuliaan bangsa lahir dari tradisi membaca buku, bukan sekadar kekerasan fisik.
2. Persatuan adalah Kekuatan (Q.S. Al-Anfal: 46): Perpecahan dan fanatisme golongan adalah pintu masuk kehancuran bersama.
3. Waspada terhadap Hedonisme (Q.S. Al-Hadid: 20): Gaya hidup santai dan flexing melumpuhkan integritas daya juang generasi muda.
4. Keterbukaan & Toleransi (Q.S. Al-Mumtahanah: 8): Islam adalah rahmatan lil 'alamin yang merangkul keberagaman.
5. Optimisme & Pantang Menyerah (Q.S. Ali 'Imran: 139): Meneladani daya tahan mental Thariq bin Ziyad dan Abdurrahman Ad-Dakhil dalam mengatasi krisis kehidupan.`;
      } else if (
        q.includes('bab 9') ||
        q.includes('bab ix') ||
        q.includes('materi bab 9') ||
        (q.includes('kelas 7') && q.includes('semester 2') && q.includes('bab 9')) ||
        q.includes('rukhsah') ||
        q.includes('rukhshah') ||
        q.includes('azimah') ||
        q.includes('jamak') ||
        q.includes('qashar') ||
        q.includes('tayamum') ||
        q.includes('salat sakit') ||
        q.includes('badal haji') ||
        q.includes('ta\'jil zakat') ||
        q.includes('fidyah') ||
        (q.includes('keringanan') && q.includes('ibadah'))
      ) {
        response = `📖 Rangkuman Materi Lengkap PAI Kelas VII Semester 2 Bab 9:
"Menerapkan Ketentuan Rukhsah dalam Ibadah: Shalat, Puasa, Zakat, dan Haji"

1. 🌟 Ketentuan Rukhsah dalam Ibadah:
- Pengertian Bahasa: Berakar dari kata "rakhusha" (رَخُصَ) yang bermakna kemudahan, kelonggaran, atau keringanan (kebalikan dari berat/mahal).
- Pengertian Istilah: Hukum syariat yang ditetapkan sebagai keringanan bagi mukallaf dalam keadaan khusus (darurat atau masyaqqah/kesulitan) yang menyimpang dari hukum pokok asal ('azimah).
- Perbedaan 'Azimah vs Rukhsah: 'Azimah adalah hukum pokok yang berlaku umum dalam kondisi normal (misal: salat zuhur 4 rakaat berdiri sempurna). Rukhsah adalah hukum pengecualian karena udzur syar'i (misal: salat zuhur diqashar 2 rakaat bagi musafir).
- 4 Hukum Mengambil Rukhsah: (1) Wajib (jika tidak diambil membahayakan nyawa, seperti berbuka bagi orang sakit parah), (2) Sunnah (seperti mengqashar salat saat safar), (3) Mubah (seperti memilih jamak atau tidak saat safar ringan), (4) Makruh/Haram (mengambil rukhsah dalam bepergian maksiat atau tatabbu' ar-rukhas meremehkan syariat).
- 7 Sebab Keringanan (Asbāb at-Takhfīf): Safar, Sakit, Terpaksa (Ikrah), Lupa (Nisyan), Ketidaktahuan yang dimaafkan (Jahl), Cuaca ekstrem/Bencana (Masyaqqah/Umumul Balwa), dan Kekurangan Fisik/Haid (Naqsh).

2. 📜 Dalil Naqli Utama:
- Q.S. Al-Baqarah (2): 185: "Yurīdullāhu bikumul-yusra wa lā yurīdu bikumul-'usr" (Allah menghendaki kemudahan bagimu dan tidak menghendaki kesukaran).
- Q.S. An-Nisā' (4): 101: Kebolehan mengqashar salat bagi orang yang bepergian (safar).
- H.R. Ahmad & Ibnu Hibban: "Innallāha yuḥibbu an tu'tā rukhashuhū kamā yakrahu an tu'tā ma'ṣiyatuh" (Sesungguhnya Allah menyukai apabila rukhsah-Nya diambil/diamalkan, sebagaimana Dia membenci apabila kemaksiatan dilakukan).
- H.R. Al-Bukhari No. 39: "Innad-dīna yusrun..." (Sesungguhnya agama itu mudah).

3. ⚖️ Rukhsah dalam 4 Ibadah Pokok:
a. Shalat:
   • Jamak: Menggabungkan 2 salat dalam 1 waktu (Zuhur-Asar, Maghrib-Isya), baik Jamak Taqdim (di waktu awal) maupun Jamak Ta'khir (di waktu akhir).
   • Qashar: Meringkas salat 4 rakaat (Zuhur, Asar, Isya) menjadi 2 rakaat bagi musafir (jarak minimal 81-89 km).
   • Shalat Orang Sakit: Boleh sambil duduk; jika tidak mampu, sambil berbaring miring menghadap kiblat; jika tidak mampu, berbaring terlentang dengan isyarat kelopak mata.
   • Shalat Khauf: Salat berjamaah bergantian saat perang atau bahaya.
b. Puasa:
   • Boleh berbuka bagi musafir dan orang sakit, wajib mengqadha di luar Ramadhan.
   • Boleh berbuka bagi orang tua renta dan sakit menahun tanpa qadha, melainkan wajib membayar fidyah (1 mud ± 0,7 kg beras per hari).
   • Keringanan bagi ibu hamil dan menyusui.
c. Zakat:
   • Ta'jil az-Zakat: Mempercepat pembayaran zakat mal sebelum genap haul (setahun) jika ada bencana/krisis kaum dhuafa.
   • Zakat Fitrah dengan nilai uang tunai (qimah) untuk fleksibilitas kebutuhan fakir miskin.
   • Boleh dibayarkan sejak awal bulan Ramadhan.
d. Haji:
   • Badal Haji: Menggantikan ibadah haji bagi orang yang sakit lumpuh permanen atau telah wafat.
   • Tawaf & Sa'i menggunakan kursi roda atau skuter matik bagi lansia dan difabel.
   • Membayar Dam (denda sembelihan/puasa) jika terpaksa meninggalkan wajib haji.

4. 🚶 Praktik Nyata Rukhsah Pelajar:
- Jamak Taqdim Qashar di rest area saat karya wisata/mudik: Niat salat Zuhur 2 rakaat qashar digabung Asar jamak taqdim, salam, lalu langsung iqamah dan salat Asar 2 rakaat qashar.
- Tayamum dengan debu suci: Menepuk debu suci pada dinding/meja bersih, tiup perlahan, usap wajah disertai niat "li-istibāḥatish-shalāti", lalu tepuk kedua dan usap kedua belah tangan hingga siku.

5. 💎 5 Hikmah Agung Rukhsah:
1. Bukti nyata kasih sayang, rahmat, dan kemurahan Allah Swt. kepada manusia.
2. Menghilangkan alasan untuk malas atau meninggalkan ibadah salat dalam kondisi apa pun.
3. Menegaskan fleksibilitas syariat Islam sepanjang zaman (shālih li kulli zamān wa makān).
4. Melatih kedisiplinan beragama yang seimbang dan tidak ekstrem (wasathiyah).
5. Menjaga keselamatan jiwa raga (hifzhun nafs) dari kebinasaan.`;
      } else if (
        q.includes('bab 8') ||
        q.includes('bab viii') ||
        q.includes('materi bab 8') ||
        (q.includes('kelas 7') && q.includes('semester 2') && q.includes('bab 8')) ||
        q.includes('syukur') ||
        q.includes('bersyukur') ||
        q.includes('kufur nikmat') ||
        (q.includes('ibrahim') && q.includes('7')) ||
        (q.includes('luqman') && q.includes('12')) ||
        q.includes('syukur bil qalbi') ||
        q.includes('syukur bil lisan') ||
        q.includes('syukur bil arkan') ||
        (q.includes('manfaat') && q.includes('syukur')) ||
        (q.includes('hikmah') && q.includes('syukur'))
      ) {
        response = `📖 Rangkuman Materi Lengkap PAI Kelas VII Semester 2 Bab 8:
"Menerapkan Makna Bersyukur kepada Allah Swt.: Menebar Kebaikan dan Mengagungkan Karunia Ilahi"

1. 🌟 Pengertian Syukur:
- Secara Bahasa: Berakar dari kata kerja "syakara - yasykuru - syukran" (شَكَرَ - يَشْكُرُ - شُكْرًا) yang bermakna menampakkan karunia, memuji kebajikan, membuka, dan mengakui kebaikan seseorang.
- Secara Istilah Syariat: Pengakuan hamba atas segala kenikmatan dari Allah Swt. dengan ketundukan hati yang tulus, memuji kebaikan-Nya melalui lisan, serta mendayagunakan seluruh potensi kenikmatan tersebut hanya untuk ketaatan dan keridhaan Allah Swt.
- 3 Tingkatan Syukur: (1) Syukur Orang Awam (saat senang saja), (2) Syukur Orang Khusus (tetap bersyukur saat senang maupun tertimpa ujian), dan (3) Syukur Khawasul Khawas (hati selalu terpikat pada Sang Pemberi Nikmat).
- Lawan Kata: Kufur Nikmat (كُفْرُ النِّعْمَةِ) yaitu mengingkari karunia Allah dan menggunakannya untuk maksiat (mengundang azab pedih).

2. 📜 Dalil Naqli tentang Bersyukur:
- Q.S. Ibrahim (14): 7: "La'in syakartum la'azīdannakum wa la'in kafartum inna 'adzābī lasyadīd" (Jika kamu bersyukur pasti Aku tambah nikmat kepadamu, jika kufur sesungguhnya azab-Ku sangat pedih).
- Q.S. An-Nahl (16): 78: Allah menganugerahkan pendengaran, penglihatan, dan hati nurani agar manusia bersyukur.
- Q.S. Luqman (31): 12: Bersyukur kepada Allah kebaikannya kembali untuk diri manusia itu sendiri.
- Q.S. Al-Baqarah (2): 152: "Fadzkurūnī adzkurkum wasykurū lī wa lā takfurūn" (Ingatlah kepada-Ku dan bersyukurlah, jangan mengingkari).
- H.R. Al-Bukhari No. 4837 & Muslim No. 2820: Teladan Rasulullah Saw. salat malam hingga kakinya bengkak: "A-falā akūnu 'abdan syakūrā" (Tidakkah patut jika aku menjadi hamba yang pandai bersyukur?).
- H.R. At-Tirmidzi No. 1954: "Man lam yasykurin-nāsa lam yasykurillāh" (Barangsiapa tidak berterima kasih kepada manusia, ia tidak bersyukur kepada Allah).

3. 🤲 Contoh Penerapan 3 Dimensi Perilaku Syukur Pelajar:
a. Syukur dengan Hati (Bi al-Qalbi):
   • Di Sekolah: Tidak sombong saat meraih nilai tinggi/ranking 1, yakin kepandaian adalah taufik Allah.
   • Di Rumah: Merasa cukup (qana'ah) dengan rezeki orang tua tanpa menuntut barang branded.
   • Di Medsos: Tidak merasa minder (insecure) melihat kemewahan orang lain, menjauhi sifat hasad (dengki).
b. Syukur dengan Lisan (Bi al-Lisan):
   • Di Sekolah: Terbiasa mengucap terima kasih kepada bapak/ibu guru dan menyemangati kawan.
   • Di Rumah: Membaca doa makan, mencium tangan orang tua, bertutur kata santun tanpa membentak.
   • Di Medsos: Memposting kalimat positif yang memotivasi, menjauhi keluhan, umpatan, atau flexing.
c. Syukur dengan Anggota Badan (Bi al-Arkan):
   • Di Sekolah: Menyimak pelajaran dengan fokus, menjaga kebersihan kelas, menjadi tutor sebaya bagi teman.
   • Di Rumah: Membantu pekerjaan rumah tangga, rajin salat fardhu tepat waktu, infaq subuh.
   • Di Medsos: Menggunakan kuota internet untuk belajar dan menonton kajian, menjauhi game berlebihan atau maksiat.

4. 🌈 Manfaat Syukur (Syariat & Riset Ilmiah):
- Ketenangan Batin & Mental: Menurunkan hormon kortisol (stres) hingga 23%, mencegah kecemasan, dan meningkatkan resiliensi.
- Rezeki & Keberkahan: Allah menjamin penambahan nikmat hakiki (ilmu berkah, keluarga rukun, hati qana'ah).
- Kesehatan Fisik: Merangsang pelepasan endorfin & dopamin, meningkatkan daya tahan tubuh (imunitas).
- Harmoni Sosial: Dicintai teman, guru, dan keluarga, serta memupuk budaya saling menghargai anti-bullying.

5. 💎 5 Hikmah Perilaku Bersyukur:
1. Meningkatkan derajat keimanan dan mendekatkan diri kepada Allah Swt. (syukur separuh dari iman).
2. Membentengi diri dari godaan Iblis yang senantiasa berusaha menjerumuskan manusia menjadi hamba yang ingkar.
3. Terhindar dari azab pedih dan bencana istidraj (diberi kesenangan semu lalu diazab mendadak).
4. Menumbuhkan empati dan kepedulian sosial untuk saling berbagi (ta'awun) kepada kaum dhuafa.
5. Membentuk jiwa yang kaya (ghina an-nafs), teguh menghadapi musibah, dan hidup penuh ketenteraman.`;
      } else if (
        q.includes('bab 7') ||
        q.includes('bab vii') ||
        q.includes('materi bab 7') ||
        (q.includes('kelas 7') && q.includes('semester 2') && q.includes('bab 7')) ||
        q.includes('malaikat') ||
        q.includes('jibril') ||
        q.includes('mikail') ||
        q.includes('israfil') ||
        q.includes('izrail') ||
        (q.includes('munkar') && q.includes('nakir')) ||
        (q.includes('raqib') && q.includes('atid')) ||
        (q.includes('malik') && q.includes('ridwan')) ||
        q.includes('muhasabah') ||
        q.includes('mawas diri') ||
        (q.includes('sifat') && q.includes('malaikat')) ||
        (q.includes('tugas') && q.includes('malaikat')) ||
        (q.includes('hikmah') && q.includes('malaikat'))
      ) {
        response = `📖 Rangkuman Materi Lengkap PAI Kelas VII Semester 2 Bab 7:
"Mawas Diri dan Mengintrospeksi Diri dalam Menjalani Kehidupan: Meyakini dan Merefleksikan Iman kepada Malaikat Allah Swt."

1. 🌟 Pengertian Iman kepada Malaikat:
- Bahasa: Kata "Malaikat" jamak dari "Malak" yang berakar dari "al-Alukah" (risalah/utusan) atau "La'aka" (mengutus).
- Istilah Syariat: Meyakini dengan sepenuh hati (tashdiq bil qalbi), diikrarkan dengan lisan (iqrar bil lisan), dan dibuktikan dengan perbuatan (amal bil arkan) bahwa Allah menciptakan malaikat dari cahaya (nur), makhluk ghaib yang mulia, tidak berhawa nafsu, serta selalu taat tanpa pernah membangkang.
- Hukum Beriman: Fardhu 'Ain (wajib bagi setiap muslim). Merupakan Rukun Iman ke-2.

2. 📜 Dalil Naqli:
- Q.S. Al-Baqarah (2): 285 (Kewajiban beriman kepada Allah, malaikat-Nya, kitab-kitab, dan rasul-Nya).
- Q.S. Al-Anbiya' (21): 19-20 (Malaikat tidak sombong, tidak letih, dan selalu bertasbih siang-malam).
- Q.S. At-Tahrim (66): 6 (Malaikat tidak mendurhakai Allah dan selalu mengerjakan apa yang diperintahkan).
- Q.S. Qaf (50): 18: "Mā yalfiẓu min qaulin illā ladaihi raqībun 'atīd" (Setiap ucapan dan tulisan diawasi malaikat pengawas).
- H.R. Muslim No. 2996: "Malaikat diciptakan dari cahaya (nur), jin dari nyala api tanpa asap, dan Adam dari tanah."

3. 🛡️ Nama-Nama 10 Malaikat yang Wajib Diketahui & 4. Tugas Masing-Masing:
1. Jibril (Ruhul Qudus/Ruhul Amin): Menyampaikan wahyu dari Allah kepada para Nabi dan Rasul.
2. Mikail: Mengatur dan membagikan rezeki ke seluruh alam (menurunkan hujan, menyuburkan tanaman, mengatur iklim).
3. Israfil: Meniup sangkakala saat hari kiamat (tiupan kehancuran semesta & tiupan kebangkitan dari kubur).
4. Izrail (Malakul Maut): Mencabut nyawa seluruh makhluk hidup yang telah tiba ajalnya.
5. Munkar: Menanyai dan menguji ruh manusia di alam kubur (barzakh) tentang ketauhidan dan keimanannya.
6. Nakir: Mendampingi Malaikat Munkar menanyai setiap manusia di alam kubur.
7. Raqib: Mengawasi dan mencatat seluruh amal kebajikan serta niat baik manusia (di sisi kanan).
8. 'Atid: Mengawasi dan mencatat seluruh amal buruk, maksiat, dan dosa manusia (di sisi kiri).
9. Malik (Zabaniyah): Menjaga pintu neraka dan mengatur azab bagi orang-orang kafir dan pendurhaka.
10. Ridwan: Menjaga pintu surga dan menyambut hamba Allah yang saleh dengan penuh keramahan dan penghormatan.

5. 💎 Sifat-Sifat Hakiki Malaikat Allah Swt.:
- Diciptakan dari cahaya murni (nur).
- Makhluk ghaib yang menghuni alam malakut (tidak tampak oleh indera biasa).
- Ma'shum (terjaga dari dosa) dan taat 100% kepada Allah.
- Tidak berjenis kelamin (bukan laki-laki dan bukan perempuan) serta tidak beranak-pinak.
- Tidak memiliki hawa nafsu duniawi (tidak makan, minum, tidur, lelah, lapar, ataupun jenuh).
- Selalu bertasbih, sujud, dan beribadah siang-malam tanpa henti.
- Mampu menjelma (tatsyl) menjadi wujud manusia atas izin Allah.
- Memiliki sayap nyata dengan jumlah bervariasi (2, 3, 4, hingga 600 sayap untuk Jibril).

6. 🌸 Hikmah Beriman kepada Malaikat bagi Pelajar:
- Meningkatkan ketakwaan dan pengagungan kepada kebesaran Allah Swt.
- Menumbuhkan sikap mawas diri (muraqabatullah) saat sendirian maupun di depan umum (jujur saat ujian sekolah).
- Membiasakan introspeksi diri (muhasabah) setiap malam sebelum tidur.
- Menjaga lisan dan jempol dari cyberbullying, fitnah, hoaks, dan konten maksiat di era media sosial.
- Menumbuhkan optimisme dan ketenangan jiwa (thuma'ninah) dalam beramal saleh.`;
      } else if (
        q.includes('bab 6') ||
        q.includes('bab vi') ||
        q.includes('materi bab 6') ||
        (q.includes('kelas 7') && q.includes('semester 2') && q.includes('bab 6')) ||
        (q.includes('baqarah') && q.includes('103')) ||
        (q.includes('ali') && q.includes('imran') && q.includes('76')) ||
        (q.includes('ghunnah') && (q.includes('hukum') || q.includes('bacaan') || q.includes('makhraj') || q.includes('maratibul'))) ||
        (q.includes('taqwa') && (q.includes('ayat') || q.includes('hadis') || q.includes('janji') || q.includes('haitsuma')))
      ) {
        response = `📖 Rangkuman Materi Lengkap PAI Kelas VII Semester 2 Bab 6:
"Meraih Cinta Allah SWT dengan Ketakwaan: Mengkaji Q.S. Al-Baqarah/2: 103, Ali 'Imran/3: 76, dan Hukum Bacaan Ghunnah"

1. 📜 Teks Ayat & Kandungan Q.S. Al-Baqarah/2: Ayat 103:
- Lafal Arab: وَلَوْ أَنَّهُمْ آمَنُوا وَاتَّقَوْا لَمَثُوبَةٌ مِّنْ عِندِ اللَّهِ خَيْرٌ ۖ لَّوْ كَانُوا يَعْلَمُونَ
- Arti: "Dan sekiranya mereka beriman dan bertakwa, tentulah pahala dari Allah lebih baik, sekiranya mereka mengetahui."
- Kandungan: Balasan pahala surga (matsubah) dari Allah jauh lebih mulia dan abadi dibandingkan sihir serta kenikmatan semu duniawi yang dibangga-banggakan orang kafir.

2. 📜 Teks Ayat & Kandungan Q.S. Ali 'Imran/3: Ayat 76:
- Lafal Arab: بَلَىٰ مَنْ أَوْفَىٰ بِعَهْدِهِ وَاتَّقَىٰ فَإِنَّ اللَّهَ يُحِبُّ الْمُتَّقِينَ
- Arti: "Sebenarnya barangsiapa menepati janji dan bertakwa, maka sungguh Allah mencintai orang-orang yang bertakwa."
- Kandungan: Menepati janji (wafa' bil 'ahdi) adalah bukti konkret ketakwaan seseorang dan menjadi kunci utama untuk meraih cinta Allah SWT (mahabbatullah).

3. 🔔 Hukum Bacaan Ghunnah (غُنَّة):
- Pengertian: Suara dengung yang keluar dari pangkal rongga hidung (Al-Khaisyum).
- Ghunnah Musyaddadah: Terjadi apabila ada huruf Nun bertasydid (نّ) atau Mim bertasydid (مّ), baik di tengah maupun akhir kata.
- Panjang Ketukan: Wajib didengungkan selama 2 harakat (2 ketukan) hingga 2,5 harakat.
- Contoh dalam Ayat Bab 6:
  • أَنَّهُمْ (an-nahum) pada Q.S. Al-Baqarah: 103
  • فَإِنَّ (fa'in-na) pada Q.S. Ali 'Imran: 76
- 4 Tingkatan Ghunnah (Maratibul Ghunnah):
  (1) Akmal ma takun (Nun/Mim tasydid, Idgham Bighunnah, Idgham Mimi)
  (2) Kamilah (Ikhfa' Haqiqi, Ikhfa' Syafawi, Iqlab)
  (3) Naqishah (Izhar pada Nun/Mim sukun)
  (4) Anqash ma takun (Nun/Mim berharakat hidup biasa).

4. 📚 Mufradat (Kosakata Pilihan):
- أَنَّهُمْ (annahum) = sesungguhnya mereka (Ghunnah Musyaddadah)
- آمَنُوا (āmanū) = mereka beriman
- وَاتَّقَوْا (wattaqaw) = dan mereka bertakwa
- لَمَثُوبَةٌ (lamatsūbah) = tentulah pahala/balasan
- أَوْفَىٰ (aufā) = menepati/menyempurnakan
- بِعَهْدِهِ (bi'ahdihī) = dengan janjinya
- يُحِبُّ (yuhibbu) = mencintai
- الْمُتَّقِينَ (al-muttaqīn) = orang-orang yang bertakwa.

5. 🎙️ Hadis Terkait Taqwa:
- H.R. At-Tirmidzi No. 1987 (Hasan Shahih): "اتَّقِ اللَّهَ حَيْثُمَا كُنْتَ، وَأَتْبِعِ السَّيِّئَةَ الْحَسَنَةَ تَمْحُهَا، وَخَالِقِ النَّاسَ بِخُلُقٍ حَسَنٍ" (Bertakwalah kepada Allah di mana pun kamu berada, ikutilah keburukan dengan kebaikan niscaya kebaikan menghapusnya, dan pergaulilah manusia dengan akhlak mulia).
- H.R. Muslim No. 2564: "التَّقْوَى هَاهُنَا" (Takwa itu letaknya di dalam hati/dada).
- H.R. At-Tirmidzi No. 2004: Hal yang paling banyak memasukkan manusia ke surga adalah "Takwa kepada Allah dan akhlak yang mulia".

6. 💎 Hikmah bagi Pelajar:
- Menggapai cinta Allah SWT (mahabbatullah).
- Membiasakan berbuat jujur dan disiplin menepati janji tugas dan perkataan.
- Mawas diri (muraqabatullah) saat belajar, ujian, maupun berselancar di internet.
- Menolak bullying, menghormati teman, dan menjaga lisan dari kata-kata kotor.`;
      } else if (
        q.includes('bab 5') ||
        q.includes('bab v') ||
        q.includes('materi bab 5') ||
        (q.includes('kelas 7') && q.includes('semester 1') && q.includes('bab 5')) ||
        (q.includes('umayyah') && (q.includes('rangkum') || q.includes('materi') || q.includes('lengkap') || q.includes('semua') || q.includes('damaskus')))
      ) {
        response = `📚 Rangkuman Materi Lengkap PAI Kelas VII Semester 1 Bab 5:
"Merefleksikan Sejarah dan Peran Kekhalifahan Islam Paska Khulafaur Rasyidin: Bani Umayyah Periode Damaskus (41–132 H / 661–750 M)"

1. 🏛️ Sejarah Berdirinya & 'Amul Jama'ah (41 H / 661 M):
- Latar Belakang: Didirikan oleh Muawiyah bin Abi Sufyan pasca-wafatnya Khalifah Ali bin Abi Thalib r.a. di Kufah.
- 'Amul Jama'ah (Tahun Persatuan): Sayyidina Hasan bin Ali r.a. secara sukarela dan berjiwa besar menyerahkan mandat kekhalifahan kepada Muawiyah demi menghentikan perang saudara dan menyelamatkan darah umat Islam, membuktikan nubuwah Rasulullah SAW (HR. Bukhari No. 2704).
- Pemindahan Ibukota: Dipindahkan dari Madinah/Kufah ke Damaskus (Suriah) karena posisi strategis dan stabilitas kawasan Syam.
- Transformasi Sistem: Beralih dari sistem musyawarah (Syura) masa Khulafaur Rasyidin menjadi sistem kerajaan dinasti turun-temurun (Monarki Heriditer / Mulkiyyah al-Wuratsiyyah).

2. 👑 Enam Khalifah Penting Penentu Sejarah:
- Muawiyah bin Abi Sufyan (41–60 H): Pendiri dinasti, pembentuk Diwanul Barid (pos kilat) & Diwanul Khatam (arsip segel), perintis armada laut Islam pertama.
- Marwan bin Al-Hakam (64–65 H): Penyelamat dinasti dari perang saudara kedua (Perang Marj Rahith) dan pembuka cabang Marwaniyah.
- Abdul Malik bin Marwan (65–86 H): Bapak Pemersatu Kedua, pencetus Arabisasi administrasi (Ta'rib ad-Diwan), pencetakan mata uang Dinar-Dirham Islam pertama, dan pembangun Dome of the Rock (Qubbat As-Sakhrah) di Yerusalem.
- Al-Walid bin Abdul Malik (86–96 H): Puncak kejayaan ekspansi 3 benua (Andalusia/Spanyol oleh Thariq bin Ziyad 711 M, Asia Tengah oleh Qutaibah, Lembah Indus oleh Muhammad bin Qasim), pembangun Masjid Agung Umayyah Damaskus dan rumah sakit (Bimaristan) pertama.
- Umar bin Abdul Aziz (99–101 H): Khulafaur Rasyidin Kelima, teladan kezuhudan & keadilan, penghapusan jizyah bagi kaum Mawali, memprakarsai kodifikasi resmi hadis (Tadwin al-Hadits) bersama Ibnu Syihab Az-Zuhri, masa kemakmuran tanpa fakir miskin.
- Hisyam bin Abdul Malik (105–125 H): Khalifah kuat terakhir, ahli manajemen keuangan kas negara, pembangunan bendungan dan kanal irigasi pertanian.

3. 🌟 Empat Pilar Kemajuan Peradaban:
- Administrasi & Birokrasi: 5 lembaga negara & departemen khusus (Diwanul Rasail, Kharaj, Jund, Khatam, Barid).
- Militer & Wilayah 3 Benua: Menguasai lebih dari 11 juta km² dari Spanyol (Eropa) hingga perbatasan Tiongkok & India (Asia).
- Arsitektur & Seni Bangunan: Masjid Agung Umayyah Damaskus (mosaik emas), Qubbat As-Sakhrah Yerusalem, inovasi menara azan dan mihrab cekung.
- Keilmuan, Bahasa & Hadis: Kodifikasi resmi hadis pertama, standarisasi tanda baca titik & harakat Al-Qur'an, tata bahasa nahwu oleh Abu Al-Aswad Ad-Du'ali, dan awal translasi ilmu kimia/kedokteran.

4. 📉 Lima Faktor Kemunduran & Keruntuhan (132 H / 750 M):
- Sistem suksesi putra mahkota ganda yang memicu intrik tahta berdarah di kalangan pangeran istana.
- Konflik kesukuan fanatik ('ashabiyah) Arab Utara (Qais) vs Arab Selatan (Yaman).
- Diskriminasi sosial dan beban pajak jizyah terhadap kaum Muslim non-Arab (Mawali).
- Gaya hidup hedonis, bermewah-mewahan, dan kemerosotan moral para khalifah akhir.
- Aliansi oposisi revolusi Abbasiyah pimpinan Abu Muslim Al-Khurasani yang mengalahkan Marwan II dalam Pertempuran Sungai Zab (750 M).

5. 💎 Hikmah & Ibrah untuk Pelajar:
- Meneladani integritas, kejujuran, dan keadilan kepemimpinan Umar bin Abdul Aziz.
- Menjaga persatuan ukhuwah serta menjauhi fanatisme sempit ('ashabiyah/chauvinisme).
- Menumbuhkan semangat literasi, gemar membaca, dan mencintai ilmu pengetahuan.
- Menjauhi pola hidup foya-foya dan pamer kemewahan (flexing) di media sosial.`;
      } else if (
        q.includes('sejarah berdirinya') ||
        q.includes('amul jamaah') ||
        q.includes('tahun persatuan') ||
        (q.includes('berdiri') && q.includes('umayyah'))
      ) {
        response = `🏛️ Sejarah Berdirinya Daulah Bani Umayyah Damaskus (41 H / 661 M):
1. Latar Belakang: Berakhirnya masa Khulafaur Rasyidin pasca-wafatnya Khalifah Ali bin Abi Thalib r.a. pada tahun 40 H akibat serangan Abdurrahman bin Muljam (Khawarij).
2. Peristiwa 'Amul Jama'ah (Tahun Persatuan): 
   - Sayyidina Hasan bin Ali r.a. yang dibaiat di Kufah memilih ishlah (perdamaian) dan menyerahkan kekuasaan kepada Muawiyah bin Abi Sufyan di Kufah pada Rabi'ul Awwal 41 H.
   - Sikap kenegarawanan Sayyidina Hasan ini bertujuan mulia: menghentikan pertumpahan darah antarsesama muslim, menyatukan kembali umat, dan memenuhi nubuwah Rasulullah SAW (HR. Bukhari No. 2704).
3. Pemindahan Ibukota: Dipindahkan dari Madinah/Kufah ke Damaskus (Syam) karena posisinya yang strategis di jalur niaga dan basis kekuatan pendukung Muawiyah yang solid selama 20 tahun menjadi gubernur Syam.
4. Perubahan Sistem Politik: Menjelang akhir hayatnya (60 H), Muawiyah menunjuk putranya Yazid sebagai putra mahkota, mengubah tradisi syura (musyawarah) menjadi monarki heriditer (dinasti turun-temurun).`;
      } else if (
        q.includes('khalifah penting') ||
        q.includes('khalifah bani umayyah') ||
        q.includes('umar bin abdul aziz') ||
        q.includes('abdul malik bin marwan') ||
        q.includes('walid bin abdul malik')
      ) {
        response = `👑 Khalifah-Khalifah Penting Daulah Bani Umayyah Damaskus:
1. Muawiyah bin Abi Sufyan (41–60 H / 661–680 M): Pendiri dinasti, ahli diplomasi politik (prinsip hilm), mendirikan Diwanul Barid (pos kilat), Diwanul Khatam (segel/arsip), dan membangun armada laut Islam pertama.
2. Marwan bin Al-Hakam (64–65 H / 684–685 M): Menyelamatkan dinasti dari perang saudara kedua dan mendirikan cabang keturunan Marwaniyah yang memimpin masa keemasan Umayyah.
3. Abdul Malik bin Marwan (65–86 H / 685–705 M): "Bapak Pemersatu Kedua", melakukan Arabisasi bahasa administrasi (Ta'rib ad-Diwan), mencetak mata uang dinar-dirham berkaligrafi Islam murni pertama, dan mendirikan Qubbat As-Sakhrah (Dome of the Rock) di Yerusalem.
4. Al-Walid bin Abdul Malik (86–96 H / 705–715 M): Puncak keemasan teritorial (penaklukan Spanyol/Andalusia oleh Thariq bin Ziyad 711 M, Asia Tengah, dan Sind India), mendirikan Masjid Agung Umayyah Damaskus dan rumah sakit (Bimaristan) pertama.
5. Umar bin Abdul Aziz (99–101 H / 717–720 M): "Khulafaur Rasyidin Kelima", teladan kezuhudan dan keadilan, menghapus jizyah bagi kaum non-Arab (Mawali) yang masuk Islam, memerintahkan kodifikasi resmi hadis pertama lewat Ibnu Syihab Az-Zuhri, dan mengembalikan aset istana ke kas Baitul Mal.
6. Hisyam bin Abdul Malik (105–125 H / 724–743 M): Khalifah kuat terakhir, ahli manajemen keuangan negara yang ketat, dan membangun sistem irigasi pertanian modern.`;
      } else if (
        q.includes('kemajuan daulah umayyah') ||
        q.includes('kemajuan bani umayyah') ||
        q.includes('prestasi umayyah') ||
        q.includes('kodifikasi hadis')
      ) {
        response = `🌟 Empat Bidang Kemajuan Daulah Bani Umayyah Damaskus:
1. Bidang Administrasi Pemerintahan:
   - 5 Lembaga: An-Nidzam As-Siyasi (politik), Al-Idari (administrasi), Al-Mali (keuangan), Al-Harbi (militer), dan Al-Qadha'i (kehakiman).
   - Departemen (Diwan): Diwanul Rasail (sekretariat negara), Diwanul Kharaj (pajak/keuangan), Diwanul Jund (militer), Diwanul Khatam (stempel arsip), Diwanul Barid (pos kilat).
2. Bidang Militer & Ekspansi 3 Benua:
   - Wilayah kekuasaan raksasa membentang dari Samudra Atlantik di barat hingga perbatasan Tiongkok di timur.
   - Penaklukan Semenanjung Iberia (Andalusia/Spanyol) oleh Thariq bin Ziyad dan Musa bin Nushair (711 M).
   - Penaklukan Asia Tengah (Bukhara, Samarkand) oleh Qutaibah bin Muslim dan Lembah Indus (Sind/Pakistan) oleh Muhammad bin Qasim.
3. Bidang Arsitektur & Pembangunan Fisik:
   - Masjid Agung Umayyah di Damaskus dengan mosaik emas Bizantium dan menara azan pertama.
   - Qubbat As-Sakhrah (Dome of the Rock) di Yerusalem.
   - Pendirian Bimaristan (rumah sakit gratis) pertama lengkap dengan bangsal kusta dan dokter spesialis.
4. Bidang Ilmu Pengetahuan, Bahasa & Hadis:
   - Kebijakan resmi pertama Kodifikasi Hadis (Tadwin Al-Hadits) diprakarsai Khalifah Umar bin Abdul Aziz dipimpin Imam Ibnu Syihab Az-Zuhri.
   - Arabisasi bahasa administrasi negara dan penyempurnaan tanda baca harakat & titik Al-Qur'an oleh Abu Al-Aswad Ad-Du'ali, Nashr bin Ashim, dan Yahya bin Ya'mar.`;
      } else if (
        q.includes('faktor kemunduran') ||
        q.includes('runtuh') ||
        q.includes('sebab kemunduran') ||
        q.includes('pertempuran sungai zab')
      ) {
        response = `📉 Lima Faktor Utama Kemunduran & Keruntuhan Daulah Umayyah Damaskus (132 H / 750 M):
1. Sistem Suksesi Dualisme Putra Mahkota: Penunjukan dua calon putra mahkota sekaligus memicu persaingan tidak sehat, intrik berdarah, dan saling bunuh di antara keluarga istana.
2. Konflik Kesukuan Arab: Kebangkitan fanatisme kesukuan ('ashabiyah) antara suku Arab Utara (Mudhar/Qais) vs suku Arab Selatan (Yamaniyah/Kalb) yang memecah loyalitas militer.
3. Diskriminasi terhadap Kaum Mawali: Umat Islam non-Arab (Persia, Berber, Koptik) diperlakukan sebagai warga kelas dua dan tetap dibebani pajak jizyah layaknya non-muslim (kecuali pada era Umar bin Abdul Aziz).
4. Hedonisme & Kerusakan Moral Khalifah Akhir: Banyak khalifah generasi akhir hidup bermewah-mewahan, pesta pora, minum khamar, berburu, dan melalaikan urusan rakyat jelata.
5. Gelombang Revolusi Bani Abbasiyah: Dipimpin oleh Abu Muslim Al-Khurasani yang menyatukan kaum Mawali, Syiah, dan pihak yang tertindas. Pasukan Umayyah pimpinan Marwan II kalah telak dalam Pertempuran Sungai Zab (Januari 750 M), mengakhiri kekhalifahan Umayyah di Damaskus.`;
      } else if (
        q.includes('hikmah sejarah bani umayyah') ||
        q.includes('hikmah bani umayyah') ||
        q.includes('keteladanan umar bin abdul aziz') ||
        (q.includes('hikmah') && q.includes('umayyah'))
      ) {
        response = `💎 Hikmah dan Keteladanan Sejarah Daulah Bani Umayyah bagi Pelajar:
1. Meneladani Integritas & Keadilan Pemimpin:
   - Keteladanan Umar bin Abdul Aziz mengajarkan bahwa jabatan adalah amanah berat, bukan sarana memperkaya keluarga. Keadilan dan ketaqwaan mampu menyejahterakan rakyat.
2. Menjaga Persatuan & Menghindari Fanatisme Sempit ('Ashabiyah):
   - Perpecahan suku Qais vs Yaman dan perlakuan diskriminatif terhadap kaum Mawali membuktikan bahwa chauvinisme dan rasisme selalu menghancurkan negara besar. Pelajar harus menjaga ukhuwah antarteman tanpa memandang suku atau status sosial.
3. Mengembangkan Etos Literasi & Keilmuan:
   - Inovasi kodifikasi hadis, tata bahasa nahwu, dan penerjemahan ilmu pengetahuan adalah teladan agar siswa giat membaca buku, tertib mencatat pelajaran, dan memanfaatkan teknologi untuk kebaikan.
4. Menjauhi Gaya Hidup Hedonis & Pamer Kemewahan:
   - Kemunduran Umayyah akibat gaya hidup foya-foya khalifah akhir adalah peringatan nyata. Pelajar hendaknya hidup bersahaja, hemat, qana'ah, dan tidak terjebak tren flexing di media sosial.
5. Meneladani Kenegarawanan Sayyidina Hasan bin Ali r.a.:
   - Kerelaan mengalah demi mencegah pertumpahan darah sesama mukmin adalah bukti bahwa perdamaian dan keselamatan umat jauh lebih mulia daripada memaksakan kehendak atau ego pribadi.`;
      } else if (
        // ==================== BAB 4: KETENTUAN MACAM-MACAM SUJUD ====================
        q.includes('bab 4') ||
        q.includes('bab iv') ||
        q.includes('materi bab 4') ||
        (q.includes('kelas 7') && q.includes('semester 1') && q.includes('bab 4')) ||
        (q.includes('sujud') && (q.includes('rangkum') || q.includes('materi') || q.includes('lengkap') || q.includes('semua') || q.includes('macam')))
      ) {
        response = `📚 Rangkuman Materi Lengkap PAI Kelas VII Semester 1 Bab 4:
"Menerapkan Ketentuan Macam-Macam Sujud di Luar Rukun Salat"

1. 🧎 Pengertian Sujud & Tiga Macam Sujud:
- Hakikat Sujud: Berasal dari kata 'at-tadhallul wal-khudhu'' (tunduk dan pasrah), menempelkan 7 anggota badan ke lantai tempat sujud semata karena Allah Swt. Posisi terdekat hamba dengan Tuhannya (HR. Muslim No. 482).
- Tiga Macam Sujud:
  * Sujud Syukur: Sujud 1 kali di luar salat sebagai ungkapan terima kasih atas nikmat besar yang baru tiba atau terhindar dari musibah/mara bahaya besar (Hukum: Sunnah Mu'akkadah, HR. Abu Dawud No. 2774).
  * Sujud Sahwi: Sujud 2 kali di akhir salat (sebelum atau sesudah salam) untuk menutup kekurangan rukun/sunnah ab'adh, kelebihan rakaat, atau keraguan jumlah rakaat karena lupa (Hukum: Sunnah Mu'akkadah, HR. Muslim No. 571).
  * Sujud Tilawah: Sujud 1 kali saat membaca atau mendengar ayat Sajdah dalam Al-Qur'an, baik di dalam maupun di luar salat (Hukum: Sunnah Mu'akkadah, HR. Muslim No. 81).

2. 📜 Bacaan Sujud Lengkap:
- Sujud Syukur: "Rabbi awzi‘nī an asykura ni‘matakal-latī an‘amta ‘alayya..." (Q.S. An-Naml: 19) atau tasbih "Subḥānallāhi wal-ḥamdu lillāhi wa lā ilāha illallāhu wallāhu akbar...".
- Sujud Sahwi: "Subḥāna mal-lā yanāmu wa lā yashū" (Maha Suci Dzat yang tidak pernah tidur dan tidak pernah lupa) dibaca 3 kali di setiap sujud.
- Sujud Tilawah: "Sajada wajhiya lilladzī khalaqahū wa ṣawwarahū wa syaqqa sam‘ahū wa baṣarahū biḥawlihī wa quwwatihī fatabārakallāhu aḥsanul-khāliqīn" (HR. At-Tirmidzi No. 580).

3. 🧭 Tata Cara Praktik:
- Sujud Syukur: HANYA di luar salat (batal jika di dalam salat). Berwudhu, menghadap kiblat, takbiratul ihram, sujud 1 kali membaca doa, duduk sejenak, lalu salam.
- Sujud Sahwi: Dilakukan setelah tasyahud akhir sebelum salam (atau sesudah salam jika ada kelebihan). Takbir sujud ke-1 (baca doa), duduk antara 2 sujud, sujud ke-2 (baca doa), duduk kembali, lalu salam.
- Sujud Tilawah: Di luar salat (seperti sujud syukur) atau di dalam salat (langsung takbir turun sujud 1 kali saat ayat sajdah, bangkit berdiri lagi meneruskan salat). Makmum wajib mengikuti imam jika imam sujud tilawah.

4. ۩ 15 Ayat-Ayat Sajdah dalam Al-Qur'an:
Ditandai lambang kubah (۩) di mushaf Kemenag RI, antara lain: Q.S. Al-A‘rāf: 206, Ar-Ra‘d: 15, An-Naḥl: 49, Al-Isrā’: 109, Maryam: 58, Al-Ḥajj: 18 & 77, Al-Furqān: 60, An-Naml: 25, As-Sajdah: 15, Ṣād: 24, Fuṣṣilat: 37, An-Najm: 62, Al-Insyiqāq: 21, dan Al-‘Alaq: 19.

5. 💎 Manfaat dan Hikmah:
- Menumbuhkan sikap tawadhu' (rendah hati) dan membuang penyakit sombong/takabur.
- Melipatgandakan nikmat Allah Swt. (Q.S. Ibrahim: 7).
- Menambal kekurangan salat sehingga salat tetap sempurna.
- Menghinakan setan dan membuat iblis menangis histeris (HR. Muslim No. 81).`;
      } else if (
        q.includes('pengertian sujud syukur') ||
        q.includes('pengertian sujud sahwi') ||
        q.includes('pengertian sujud tilawah') ||
        (q.includes('sujud') && (q.includes('definisi') || q.includes('arti') || q.includes('sebab') || q.includes('hukum')))
      ) {
        response = `🧎 Penjelasan Pengertian & Ketentuan 3 Macam Sujud (PAI Kelas VII Bab 4):

1. ⭐ Sujud Syukur (سُجُودُ الشُّكْرِ):
- Pengertian: Sujud satu kali yang dilakukan di luar salat sebagai perwujudan terima kasih mendalam kepada Allah Swt. atas nikmat besar yang baru diterima atau selamat dari bencana/mara bahaya besar.
- Hukum: Sunnah Mu'akkadah di luar salat. HARAM dan membatalkan jika dilakukan di dalam salat fardhu bagi yang tahu hukumnya.
- Dalil: HR. Abu Dawud No. 2774 & At-Tirmidzi No. 1578 dari Abu Bakrah r.a. (Nabi SAW langsung bersujud saat menerima kabar gembira).

2. 🕌 Sujud Sahwi (سُجُودُ السَّهْوِ):
- Pengertian: Sujud dua kali di bagian akhir salat untuk menutup kekurangan, kelebihan, atau keraguan bilangan rakaat akibat sifat lupa (as-sahwu).
- Hukum: Sunnah Mu'akkadah.
- Sebab-Sebab:
  * Kekurangan rukun/rakaat karena lupa (wajib disempurnakan dulu rakaatnya, baru sujud sahwi).
  * Kelebihan rukun/rakaat karena lupa (misal salat Zuhur 5 rakaat).
  * Meninggalkan Sunnah Ab'adh (seperti Tasyahud Awal atau Qunut Subuh).
  * Ragu-ragu jumlah rakaat (ambil yang yakin yaitu paling sedikit, selesaikan sisa rakaat, lalu sujud sahwi sebelum salam).
- Dalil: HR. Muslim No. 571 dari Abu Sa'id Al-Khudri r.a.

3. 📖 Sujud Tilawah (سُجُودُ التِّلَاوَةِ):
- Pengertian: Sujud satu kali yang dilakukan ketika membaca (qari') atau mendengar (mustami') salah satu dari 15 ayat Sajdah dalam Al-Qur'an.
- Hukum: Sunnah Mu'akkadah, baik di dalam salat maupun di luar salat.
- Dalil: HR. Muslim No. 81 dari Abu Hurairah r.a. (Setan menyingkir sambil menangis saat anak Adam sujud tilawah).`;
      } else if (
        q.includes('bacaan sujud') ||
        q.includes('doa sujud') ||
        q.includes('bacaan sujud syukur') ||
        q.includes('bacaan sujud sahwi') ||
        q.includes('bacaan sujud tilawah') ||
        q.includes('subhana mal la yanamu') ||
        q.includes('sajada wajhiya')
      ) {
        response = `📜 Lafaz Bacaan dan Doa Sujud Lengkap (PAI Kelas VII Bab 4):

1. 🌟 Bacaan Sujud Syukur:
- Doa Nabi Sulaiman a.s. (Q.S. An-Naml: 19):
  "رَبِّ أَوْزِعْنِيٓ أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِيٓ أَنْعَمْتَ عَلَيَّ وَعَلَىٰ وَالِدَيَّ وَأَنْ أَعْمَلَ صَالِحًا تَرْضَىٰهُ وَأَدْخِلْنِي بِرَحْمَتِكَ فِي عِبَادِكَ الصَّالِحِينَ"
  (Rabbi awzi‘nī an asykura ni‘matakal-latī an‘amta ‘alayya wa ‘alā wālidayya wa an a‘mala ṣāliḥan tarḍāhu wa adkhilnī biraḥmatika fī ‘ibādikaṣ-ṣāliḥīn)
- Atau membaca Tasbih-Tahmid:
  "سُبْحَانَ اللهِ وَالْحَمْدُ لِلّٰهِ وَلَا إِلٰهَ إِلَّا اللهُ وَاللهُ أَكْبَرُ، وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللهِ الْعَلِيِّ الْعَظِيْمِ"
  (Subḥānallāhi wal-ḥamdu lillāhi wa lā ilāha illallāhu wallāhu akbar...)

2. 🕌 Bacaan Sujud Sahwi:
Dibaca 3 kali pada kedua kali sujud sahwi:
  "سُبْحَانَ مَنْ لَا يَنَامُ وَلَا يَسْهُو"
  (Subḥāna mal-lā yanāmu wa lā yashū)
  Artinya: "Maha Suci Dzat (Allah) yang tidak pernah tidur dan tidak pernah lupa/lalai."

3. 📖 Bacaan Sujud Tilawah (HR. At-Tirmidzi No. 580):
  "سَجَدَ وَجْهِيَ لِلَّذِي خَلَقَهُ، وَصَوَّرَهُ، وَشَقَّ سَمْعَهُ وَبَصَرَهُ، بِحَوْلِهِ وَقُوَّتِهِ، فَتَبَارَكَ اللهُ أَحْسَنُ الْخَالِقِينَ"
  (Sajada wajhiya lilladzī khalaqahū, wa ṣawwarahū, wa syaqqa sam‘ahū wa baṣarahū, biḥawlihī wa quwwatihī, fatabārakallāhu aḥsanul-khāliqīn)
  Artinya: "Bersujud wajahku kepada Dzat yang menciptakannya, membentuk rupanya, dan membuka pendengaran serta penglihatannya dengan daya dan kekuatan-Nya. Maka Maha Berkah Allah sebaik-baik Pencipta."`;
      } else if (
        q.includes('tata cara sujud') ||
        q.includes('cara sujud') ||
        q.includes('langkah sujud') ||
        q.includes('praktik sujud')
      ) {
        response = `🧭 Tata Cara Lengkap Pelaksanaan 3 Macam Sujud (PAI Kelas VII Bab 4):

A. 🌟 Tata Cara Sujud Syukur (Hanya di Luar Salat):
1. Berwudhu (suci dari hadas & najis) dan menutup aurat.
2. Berdiri atau duduk menghadap kiblat.
3. Niat sujud syukur di dalam hati (Nawaitu sujūdasy-syukri lillāhi ta‘ālā).
4. Takbiratul ihram sambil mengucap "Allahu Akbar".
5. Bertakbir langsung turun sujud 1 kali dengan thuma'ninah.
6. Membaca doa sujud syukur di dalam sujud.
7. Bangkit bertakbir menuju posisi duduk sejenak (tanpa tasyahud).
8. Mengucapkan salam ke kanan dan ke kiri.

B. 🕌 Tata Cara Sujud Sahwi (Di Akhir Salat):
1. Selesai tasyahud akhir dan selawat Ibrahimiyyah sebelum salam.
2. Bertakbir "Allahu Akbar" langsung sujud ke-1 (baca doa sujud sahwi 3x).
3. Bangkit bertakbir duduk antara dua sujud (membaca doa Rabbighfirlī).
4. Bertakbir turun sujud ke-2 (baca doa sujud sahwi 3x).
5. Bangkit bertakbir duduk kembali sejenak.
6. Mengucapkan salam ke kanan dan ke kiri untuk mengakhiri salat.

C. 📖 Tata Cara Sujud Tilawah:
- Di Luar Salat: Sama persis seperti sujud syukur (niat, takbir, sujud 1x membaca doa tilawah, duduk, lalu salam).
- Di Dalam Salat: Saat membaca ayat sajdah, langsung takbir "Allahu Akbar" turun sujud 1 kali tanpa rukuk. Baca doa sujud tilawah. Lalu takbir bangkit berdiri tegak kembali dan lanjutkan bacaan ayat/rukuk.
- Salat Berjamaah: Makmum WAJIB ikut imam jika imam sujud tilawah. Jika imam tidak sujud, makmum DILARANG sujud sendiri (batal jika menyalahi imam).`;
      } else if (
        q.includes('ayat sajdah') ||
        q.includes('ayat-ayat sajdah') ||
        q.includes('15 ayat sajdah') ||
        q.includes('tanda sajdah')
      ) {
        response = `۩ Daftar 15 Ayat-Ayat Sajdah dalam Al-Qur'an (PAI Kelas VII Bab 4):

Di dalam mushaf Al-Qur'an standar Kemenag RI, ayat sajdah ditandai dengan simbol kubah/mihrab (۩):
1. Q.S. Al-A‘rāf [7]: 206 (Juz 9) - Malaikat bertasbih dan bersujud kepada Allah.
2. Q.S. Ar-Ra‘d [13]: 15 (Juz 13) - Segala isi langit dan bumi bersujud taat maupun terpaksa.
3. Q.S. An-Naḥl [16]: 49 (Juz 14) - Makhluk melata dan malaikat bersujud tanpa sombong.
4. Q.S. Al-Isrā’ [17]: 109 (Juz 15) - Menyungkurkan wajah sambil menangis dan bertambah khusyuk.
5. Q.S. Maryam [19]: 58 (Juz 16) - Ketika dibacakan ayat Ar-Rahman, mereka menyungkur sujud dan menangis.
6. Q.S. Al-Ḥajj [22]: 18 (Juz 17) - Matahari, bulan, bintang, gunung, pohon bersujud kepada Allah.
7. Q.S. Al-Ḥajj [22]: 77 (Juz 17) - Wahai orang beriman, rukuklah, sujudlah, dan sembahlah Tuhanmu.
8. Q.S. Al-Furqān [25]: 60 (Juz 19) - Penolakan kaum kafir saat diperintahkan sujud kepada Ar-Rahman.
9. Q.S. An-Naml [27]: 25 (Juz 19) - Mengapa mereka tidak bersujud kepada Allah Pencipta langit & bumi.
10. Q.S. As-Sajdah [32]: 15 (Juz 21) - Orang beriman menyungkur sujud dan memuji Tuhannya saat diberi peringatan.
11. Q.S. Ṣād [38]: 24 (Juz 23) - Kisah sujud tobat Nabi Dawud a.s. memohon ampunan Allah.
12. Q.S. Fuṣṣilat [41]: 37 (Juz 24) - Jangan sujud pada matahari dan bulan, sujudlah kepada Allah yang menciptakannya.
13. Q.S. An-Najm [53]: 62 (Juz 27) - Maka bersujudlah kepada Allah dan sembahlah Dia!
14. Q.S. Al-Insyiqāq [84]: 21 (Juz 30) - Mengapa mereka tidak mau bersujud saat Al-Qur'an dibacakan?
15. Q.S. Al-‘Alaq [96]: 19 (Juz 30) - Jangan patuhi orang kafir, sujudlah dan dekatkanlah dirimu kepada Allah!`;
      } else if (
        q.includes('manfaat sujud') ||
        q.includes('hikmah sujud') ||
        q.includes('hikmah sujud syukur') ||
        q.includes('hikmah sujud sahwi') ||
        q.includes('hikmah sujud tilawah')
      ) {
        response = `💎 Manfaat dan Hikmah Sujud Syukur, Sahwi, dan Tilawah (PAI Kelas VII Bab 4):

1. 🌟 Hikmah Sujud Syukur:
- Membentengi diri dari sifat sombong, takabur, dan merasa sukses karena kekuatan sendiri ('ujub).
- Melipatgandakan nikmat yang telah diterima sesuai janji Allah dalam Q.S. Ibrahim: 7.
- Mendatangkan ketenteraman jiwa, melatih qana'ah, dan mencegah rasa dengki/hasad.
- Dicintai oleh Allah Swt. dan para malaikat.

2. 🕌 Hikmah Sujud Sahwi:
- Menyadari fitrah manusia yang serba terbatas, lemah, dan tak luput dari lupa/kesalahan.
- Menyempurnakan dan menambal kekurangan salat sehingga bernilai sah dan diterima.
- Menghinakan setan (khinzib) yang berusaha membuyarkan kekhusyukan salat.
- Melatih ketelitian, kehati-hatian, dan fokus mendalam dalam beribadah.

3. 📖 Hikmah Sujud Tilawah:
- Mengagungkan kalam Ilahi dan menunjukkan ketundukan mutlak kepada perintah Allah Swt.
- Menghinakan setan dan membuat iblis menangis histeris karena teringat keangkuhannya (HR. Muslim No. 81).
- Meraih derajat spiritual tertinggi dan jaminan surga dari Allah Swt.
- Melembutkan hati yang keras agar senantiasa khusyuk saat mendengar Al-Qur'an.`;
      } else if (
        // ==================== BAB 3: MAKNA IKHLAS DALAM KEHIDUPAN ====================
        q.includes('bab 3') ||
        q.includes('bab iii') ||
        q.includes('materi bab 3') ||
        (q.includes('kelas 7') && q.includes('semester 1') && q.includes('bab 3')) ||
        (q.includes('ikhlas') && (q.includes('rangkum') || q.includes('materi') || q.includes('lengkap') || q.includes('semua')))
      ) {
        response = `📚 Rangkuman Materi Lengkap PAI Kelas VII Semester 1 Bab 3:
"Menerapkan Makna Ikhlas dalam Kehidupan Sehari-hari"

1. 🤍 Pengertian Ikhlas:
- Bahasa (Etimologi): Berasal dari kata خَلَصَ - يَخْلُصُ - خَلَاصًا (khalasa - yakhkulusu - khalāṣan / ikhlāṣan) yang bermakna bersih, murni, jernih, dan suci dari segala campuran atau kotoran (seperti kemurnian susu hewan dalam Q.S. An-Nahl: 66).
- Istilah Syar'i: "Tashfiyatul ‘amali ‘an kulli syawā’ibisy-syirki war-riyā’" (Membersihkan dan memurnikan niat seluruh amal ketaatan semata-mata mencari ridha Allah Swt., tanpa mengharapkan pujian, sanjungan, kedudukan, ataupun materi duniawi).
- Kata Kunci: "Niat murni lillāhi Ta‘ālā".
- Tiga Tingkatan Ikhlas:
  * Awam: Ibadah karena mengharap surga dan takut siksa neraka (sah & diterima).
  * Khawash: Ibadah karena rasa syukur atas limpahan nikmat Allah Swt.
  * Khawashul Khawash: Ibadah semata-mata karena cinta, pengagungan, dan menunaikan hak penghambaan kepada Allah Swt.
- Perbedaan Ikhlas vs Penyakit Hati:
  * Ikhlas: Amal murni karena Allah Swt.
  * Riya': Beramal agar dilihat dan dipuji orang lain (syirik asghar).
  * Sum'ah: Menceritakan amal kebaikan agar didengar orang lain.
  * 'Ujub: Kagum dan membanggakan diri sendiri atas amalan yang dilakukan.

2. 📖 Dalil Naqli tentang Ikhlas:
- Al-Qur'an:
  * Q.S. Al-Bayyinah [98]: 5: "Padahal mereka tidak diperintahkan kecuali supaya menyembah Allah dengan memurnikan ketaatan kepada-Nya dalam (menjalankan) agama yang lurus..."
  * Q.S. Al-An'ām [6]: 162-163: "Katakanlah (Muhammad): 'Sesungguhnya salatku, ibadahku, hidupku, dan matiku hanyalah untuk Allah, Tuhan semesta alam...'"
  * Q.S. Az-Zumar [39]: 2: "Maka sembahlah Allah dengan memurnikan ketaatan kepada-Nya."
  * Q.S. Al-Insān [76]: 8-9: "...Kami memberi makanan kepadamu hanyalah untuk mengharapkan keridhaan Allah, kami tidak menghendaki balasan dari kamu dan tidak pula (ucapan) terima kasih."
- Hadis Rasulullah SAW:
  * HR. Bukhari No. 1 & Muslim No. 1907: "Innamal a'mālu bin-niyyāt..." (Sesungguhnya setiap amal perbuatan tergantung pada niatnya).
  * HR. Muslim No. 2564: "Sesungguhnya Allah tidak melihat kepada bentuk rupa dan harta kalian, tetapi Allah melihat kepada hati dan amal perbuatan kalian."
  * HR. An-Nasā'i No. 3140: "Sesungguhnya Allah tidak menerima suatu amal perbuatan kecuali yang murni untuk-Nya dan dicari wajah-Nya semata."
  * HR. Muslim No. 1905: Peringatan keras tentang 3 golongan pertama yang dihisab dan diseret ke neraka (orang alim, mujahid, dan dermawan) karena beramal demi pujian manusia (riya').

3. 🛡️ Contoh Perilaku Ikhlas dalam Kehidupan Sehari-hari:
- 🏫 Di Lingkungan Sekolah:
  * Menjalankan piket kebersihan kelas dengan sungguh-sungguh meskipun ketua kelas atau wali kelas tidak mengawasi.
  * Membantu menjelaskan materi pelajaran kepada teman sebangku tanpa meminta imbalan traktiran atau jajan.
  * Berperilaku sopan dan taat kepada bapak/ibu guru secara tulus, bukan untuk "cari muka" (pencitraan).
- 🏡 Di Lingkungan Keluarga & Rumah:
  * Membantu pekerjaan orang tua (menyapu, mencuci piring) tanpa menggerutu dan tanpa menuntut upah uang saku.
  * Mengalah dan menyayangi adik tanpa membanding-bandingkan kasih sayang orang tua.
- 👥 Dalam Kehidupan Sosial & Bermasyarakat:
  * Ikut kerja bakti di lingkungan RT tanpa menunggu diabsen atau disorot warga.
  * Memaafkan kesalahan teman dengan lapang dada tanpa menyimpan rasa dendam tersembunyi.
- 📱 Di Era Media Sosial & Digital:
  * Tidak memamerkan ibadah pribadi (tahajud, sedekah, khatam Qur'an) di status WhatsApp, Instagram Story, atau TikTok hanya demi memburu likes dan pujian.
  * Menyebarkan pesan kebaikan dan nasihat agama tanpa terobsesi pada jumlah followers dan views.

4. ✨ Manfaat dan Hikmah Bersikap Ikhlas:
- 🌍 Manfaat di Dunia:
  * Memperoleh ketenangan batin (ketenteraman jiwa) dan terhindar dari rasa kecewa atau stres akibat tidak dihargai orang.
  * Terlindungi dari jerat tipu daya dan godaan Iblis (Q.S. Al-Hijr: 40).
  * Doa mudah diijabah oleh Allah di saat-saat genting (seperti kisah tawasul 3 pemuda yang terperangkap batu dalam gua - HR. Bukhari).
  * Membangun hubungan persaudaraan yang rukun, tulus, dan bebas prasangka buruk.
- ⭐ Manfaat di Akhirat:
  * Amal perbuatan diterima (maqbul) di sisi Allah Swt. dan dilipatgandakan pahalanya hingga 700 kali lipat bahkan tanpa batas.
  * Mendapatkan naungan teduh di bawah ‘Arasy Allah pada Hari Mahsyar (termasuk orang yang bersedekah hingga tangan kirinya tak tahu apa yang diinfaqkan tangan kanannya).
  * Selamat dari ancaman api neraka dan siksa syirik kecil (syirik asghar/riya').`;
      } else if (
        q.includes('pengertian ikhlas') ||
        (q.includes('ikhlas') && (q.includes('definisi') || q.includes('arti') || q.includes('hakikat')))
      ) {
        response = `🤍 Pengertian Ikhlas Lengkap (Materi PAI Kelas VII Bab 3):

A. Menurut Bahasa (Etimologi):
Berasal dari bahasa Arab kata kerja خَلَصَ - يَخْلُصُ - خَلَاصًا (khalasa - yakhkulusu - khalāṣan / ikhlāṣan) yang berarti bersih, murni, jernih, dan tidak bercampur dengan zat lain.
Sebagaimana perumpamaan dalam Q.S. An-Nahl [16]: 66 tentang susu hewan yang murni (labanan khālishan) keluar dari antara kotoran dan darah namun tetap putih bersih dan lezat diminum.

B. Menurut Istilah Syariat (Terminologi):
Para ulama mendefinisikan ikhlas sebagai:
"تَصْفِيَةُ الْعَمَلِ عَنْ كُلِّ شَوْبٍ"
(Tashfiyatul ‘amali ‘an kulli syawbin)
Artinya: Memurnikan niat suatu amal ketaatan dari segala kotoran campuran selain Allah Swt.
Seorang yang ikhlas (disebut Mukhlish) beribadah dan berbuat kebajikan semata-mata karena mengharap ridha dan cinta Allah Swt., tanpa ada niat pamrih ingin dipuji, dihargai, diberi imbalan, atau mencari kepopuleran duniawi.

C. Tiga Tingkatan Ikhlas Menurut Ulama:
1. Tingkat Awam: Beramal semata karena Allah, namun masih mengharapkan pahala surga dan takut siksa neraka. Ini sah dan amalnya diterima.
2. Tingkat Khawash (Orang Khusus): Beramal semata karena rasa syukur dan memenuhi kewajiban atas segala nikmat yang telah Allah karuniakan.
3. Tingkat Khawashul Khawash (Tingkat Tertinggi): Beramal semata-mata karena cinta sejati (mahabbah), mengagungkan Allah, dan menyadari bahwa dirinya adalah hamba sahaya yang wajib beribadah tanpa menuntut apa pun.

D. Empat Istilah Terkait Keikhlasan:
- Ikhlas: Beramal murni karena Allah Swt. (terpuji).
- Riya’: Memperlihatkan amal kebaikan kepada orang lain agar dipuji (tercela - syirik kecil).
- Sum‘ah: Menceritakan amalan ibadah yang telah dilakukan agar orang lain mendengar dan mengagumi (tercela).
- ‘Ujub: Merasa bangga dan takjub pada kehebatan diri sendiri atas ibadah yang dilakukan (tercela).`;
      } else if (
        q.includes('dalil ikhlas') ||
        q.includes('al-bayyinah') ||
        q.includes('al bayyinah') ||
        q.includes('an-nam 162') ||
        q.includes('anam 162') ||
        q.includes('al-anam 162')
      ) {
        response = `📖 Dalil Naqli tentang Ikhlas (Materi PAI Kelas VII Bab 3):

A. Dalil Ayat-Ayat Al-Qur'an:
1. Q.S. Al-Bayyinah [98]: 5:
"وَمَآ أُمِرُوٓا۟ إِلَّا لِيَعْبُدُوا۟ ٱللَّهَ مُخْلِصِينَ لَهُ ٱلدِّينَ حُنَفَآءَ وَيُقِيمُوا۟ ٱلصَّلَوٰةَ وَيُؤْتُوا۟ ٱلزَّكَوٰةَ ۚ وَذَٰلِكَ دِينُ ٱلْقَيِّمَةِ"
Artinya: "Padahal mereka tidak diperintahkan kecuali supaya menyembah Allah dengan memurnikan ketaatan kepada-Nya dalam (menjalankan) agama yang lurus, dan supaya mereka mendirikan salat dan menunaikan zakat; dan yang demikian itulah agama yang lurus."

2. Q.S. Al-An'ām [6]: 162-163:
"قُلْ إِنَّ صَلَاتِى وَنُسُكِى وَمَحْيَاىَ وَمَمَاتِى لِلَّهِ رَبِّ ٱلْعَٰلَمِينَ . لَا شَرِيكَ لَهُۥ ۖ وَبِذَٰلِكَ أُمِرْتُ وَأَنَا۠ أَوَّلُ ٱلْمُسْلِمِينَ"
Artinya: "Katakanlah (Muhammad): 'Sesungguhnya salatku, ibadahku, hidupku dan matiku hanyalah untuk Allah, Tuhan seluruh alam. Tidak ada sekutu bagi-Nya; dan demikian itulah yang diperintahkan kepadaku dan aku adalah orang yang pertama-tama berserah diri (muslim).'"

3. Q.S. Az-Zumar [39]: 2:
"فَاعْبُدِ اللّٰهَ مُخْلِصًا لَّهُ الدِّيْنَ"
Artinya: "Maka sembahlah Allah dengan memurnikan ketaatan kepada-Nya."

4. Q.S. Al-Insān [76]: 8-9:
"إِنَّمَا نُطْعِمُكُمْ لِوَجْهِ ٱللَّهِ لَا نُرِيدُ مِنكُمْ جَزَآءًۭ وَلَا شُكُورًا"
Artinya: "Sesungguhnya kami memberi makanan kepadamu hanyalah untuk mengharapkan keridhaan Allah, kami tidak menghendaki balasan dari kamu dan tidak pula (ucapan) terima kasih."

B. Dalil Hadis Rasulullah SAW:
1. Hadis Niat (HR. Bukhari No. 1 & Muslim No. 1907):
"إِنَّمَا الْأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى..."
Artinya: "Sesungguhnya setiap amalan itu bergantung pada niatnya, dan sesungguhnya setiap orang akan mendapatkan sesuai apa yang ia niatkan..."

2. Hadis Hati & Amal (HR. Muslim No. 2564):
"إِنَّ اللهَ لاَ يَنْظُرُ إِلَى صُوَرِكُمْ وَأَمْوَالِكُمْ وَلَكِنْ يَنْظُرُ إِلَى قُلُوبِكُمْ وَأَعْمَالِكُمْ"
Artinya: "Sesungguhnya Allah tidak melihat kepada bentuk fisik kalian dan tidak pula kepada harta kalian, melainkan Allah melihat kepada hati dan amal perbuatan kalian."

3. Hadis Syarat Amal Diterima (HR. An-Nasā'i No. 3140):
"إِنَّ اللهَ لَا يَقْبَلُ مِنَ الْعَمَلِ إِلَّا مَا كَانَ لَهُ خَالِصًا وَابْتُغِيَ بِهِ وَجْهُهُ"
Artinya: "Sesungguhnya Allah tidak menerima suatu amal perbuatan kecuali yang murni untuk-Nya dan dicari wajah-Nya semata."`;
      } else if (
        q.includes('contoh perilaku ikhlas') ||
        (q.includes('contoh') && q.includes('ikhlas')) ||
        (q.includes('penerapan') && q.includes('ikhlas'))
      ) {
        response = `🛡️ Contoh Perilaku Ikhlas dalam Kehidupan Sehari-hari (PAI Kelas VII Bab 3):

1. 🏫 Di Lingkungan Sekolah:
- Piket Kebersihan: Melaksanakan tugas piket menyapu dan merapikan kelas dengan sungguh-sungguh meskipun ketua kelas atau wali kelas belum hadir.
- Membantu Teman Belajar: Bersedia mengajari teman sebangku yang belum paham materi pelajaran tanpa meminta imbalan uang jajan atau traktiran.
- Menghormati Guru: Menghormati bapak/ibu guru dengan tulus di dalam kelas maupun di luar gerbang sekolah, bukan untuk "cari perhatian" agar diberi nilai tinggi.
- Lomba & Prestasi: Mengikuti lomba antarsekolah demi membanggakan madrasah/sekolah dan mengembangkan potensi anugerah Allah, bukan demi kesombongan diri.

2. 🏡 Di Lingkungan Rumah & Keluarga:
- Membantu Orang Tua: Membantu mencuci piring, menyapu halaman, dan membereskan tempat tidur tanpa harus disuruh berulang kali dan tanpa menggerutu.
- Tidak Minta Upah: Menjalankan perintah ayah dan ibu tanpa selalu meminta imbalan uang jajan tambahan atau hadiah.
- Menyayangi Saudara: Mengalah kepada adik kecil dan meminjamkan alat tulis/mainan tanpa mengungkit-ungkit kebaikan.

3. 👥 Dalam Pergaulan Teman & Masyarakat:
- Memaafkan Kesalahan: Memaafkan teman yang pernah bersalah tanpa menyimpan dendam di hati dan tetap menyapanya dengan ramah.
- Gotong Royong / Kerja Bakti: Turut serta membersihkan selokan atau masjid lingkungan tanpa menunggu diabsen ketua RT.
- Menolong Teman Jatuh: Spontan menolong teman yang terjatuh dari sepeda tanpa memikirkan apakah teman itu nantinya akan berbalas jasa.

4. 📱 Di Era Media Sosial & Digital:
- Tidak Pamer Ibadah (Riya'): Menghindari mengunggah foto/video saat sedang salat malam (tahajud), infaq uang ke kotak amal, atau menangis saat berdoa hanya demi status/story.
- Tidak Berburu Likes Berlebihan: Ketika membagikan quotes atau hadis Islami di media sosial, niatnya murni syiar dakwah kebaikan, bukan gila pujian atau jumlah views.`;
      } else if (
        q.includes('manfaat ikhlas') ||
        q.includes('hikmah ikhlas') ||
        (q.includes('hikmah') && q.includes('ikhlas')) ||
        (q.includes('manfaat') && q.includes('ikhlas')) ||
        q.includes('bahaya riya')
      ) {
        response = `✨ Manfaat dan Hikmah Ikhlas dalam Kehidupan (PAI Kelas VII Bab 3):

A. 🌍 Manfaat dan Hikmah di Dunia:
1. Hati Menjadi Tenang dan Tenteram: Hati orang yang ikhlas tidak digelisahkan oleh pujian ataupun celaan orang lain. Ia tidak mudah kecewa jika kebaikannya tidak dibalas oleh manusia.
2. Terlindung dari Tipu Daya Iblis: Sebagaimana janji iblis dalam Q.S. Al-Hijr: 39-40 bahwa ia sanggup menyesatkan seluruh manusia kecuali hamba-hamba Allah yang ikhlas (al-mukhlishīn).
3. Terkabulnya Doa di Saat Genting: Kisah 3 pemuda terkurung batu besar di dalam gua (HR. Bukhari). Mereka bertawasul dengan amal ikhlas mereka (berbakti kepada orang tua, menjauhi zina, dan menjaga amanah upah buruh), sehingga batu bergeser dan mereka selamat!
4. Hubungan Sosial Menjadi Tulus & Harmonis: Hubungan pertemanan bebas dari kepentingan tersembunyi dan saling iri hati.

B. ⭐ Manfaat dan Hikmah di Akhirat:
1. Amal Kebaikan Diterima (Maqbul): Syarat utama diterimanya amal dalam Islam adalah ikhlas lillāhi ta'ālā dan mutāba'ah (sesuai tuntunan sunnah Rasulullah SAW).
2. Pahala Berlipat Ganda: Allah melipatgandakan pahala amal yang ikhlas mulai dari 10 hingga 700 kali lipat, bahkan tanpa batas.
3. Mendapat Naungan 'Arasy Allah di Hari Kiamat: Termasuk golongan yang dinaungi adalah orang yang bersedekah sembunyi-sembunyi sehingga tangan kirinya tidak tahu apa yang disedekahkan tangan kanannya.
4. Selamat dari Siksa Neraka: Terhindar dari dosa syirik asghar (riya' dan sum'ah) yang dapat membatalkan pahala amal kebajikan.

C. ⚠️ Peringatan: Bahaya Riya’ dan Sum‘ah:
- Riya' disebut Rasulullah SAW sebagai Syirik Kecil (Asy-Syirkul Ashghar).
- Riya' menghapus seluruh pahala amal kebaikan (Q.S. Al-Baqarah: 264).
- Pelaku riya' terancam menjadi golongan pertama yang diseret ke dalam neraka di hari kiamat (HR. Muslim No. 1905).`;
      } else if (
        // ==================== BAB 2: ASMAUL HUSNA & IMAN ====================
        q.includes('bab 2') ||
        q.includes('bab ii') ||
        q.includes('materi bab 2') ||
        (q.includes('kelas 7') && q.includes('semester 1') && q.includes('bab 2'))
      ) {
        response = `📚 Rangkuman Materi Lengkap PAI Kelas VII Semester 1 Bab 2:
"Meneladani Asmaul Husna: Hakikat Iman, Makna Al-'Alīm, As-Samī', Al-Baṣīr, Al-Khabīr & Karakter Sehari-hari"

1. 🌟 Pengertian Iman kepada Allah Swt.:
- Bahasa: Āmana - Yu'minu - Īmānan (percaya, tenteram, membenarkan / At-Taṣdīq).
- Istilah Syar'i: "Taṣdīqun bil-qalbi, wa iqrārun bil-lisāni, wa ‘amalun bil-arkāni" (Meyakini dalam hati, mengikrarkan dengan lisan, dan mengamalkannya dengan perbuatan anggota badan).
- 3 Dimensi Tauhid:
  * Tauhid Rubūbiyyah: Meyakini Allah satu-satunya Pencipta, Pemelihara, dan Pengatur alam semesta.
  * Tauhid Ulūhiyyah: Mengesakan Allah dalam seluruh ibadah tanpa menyekutukan-Nya (syirik).
  * Tauhid Asmā' wa Sifāt: Mengimani nama-nama indah dan sifat sempurna bagi Allah tanpa tasybih, tamtsil, ta'thil, dan takyif.
- Dalil: Q.S. An-Nisā': 136 & Q.S. Al-Ikhlāṣ: 1-4.

2. 📜 Pengertian Asmaul Husna:
- Bahasa: Al-Asmā' (nama-nama) + Al-Ḥusnā (yang terbaik, terindah, maha agung).
- Istilah: Nama-nama agung dan sifat-sifat mulia milik Allah Swt. yang mencerminkan kesempurnaan Dzat dan perbuatan-Nya.
- Dalil Hadis (HR. Bukhari No. 2736 & Muslim No. 2677): "Inna lillāhi tis‘atan wa tis‘īna isman, mi'atan illā wāḥidan, man aḥṣāhā dakhalal-jannah" (99 nama; siapa yang aḥṣāhā/menghafal, memahami, dan mengamalkannya, masuk surga).
- Dalil Al-Qur'an: Q.S. Al-A'rāf: 180, Q.S. Ṭāhā: 8, Q.S. Al-Ḥasyr: 24.

3. ✨ Makna 4 Asmaul Husna Utama:
- Al-'Alīm (اَلْعَلِيْمُ - Maha Mengetahui): Pengetahuan Allah mutlak tanpa batas, meliputi hal nyata maupun gaib, masa lalu, kini, dan masa depan. Dalil: Q.S. Al-Baqarah: 29 & Q.S. Al-An'ām: 59.
- As-Samī‘ (اَلسَّمِيْعُ - Maha Mendengar): Pendengaran Allah menjangkau seluruh suara di alam semesta tanpa terhalang jarak, dinding, bahasa, maupun kebisingan. Dalil: Q.S. Al-Baqarah: 256, Q.S. Asy-Syūrā: 11, Q.S. Al-Mujādilah: 1.
- Al-Baṣīr (اَلْبَصِيْرُ - Maha Melihat): Penglihatan Allah menembus segala dimensi tanpa butuh cahaya atau mata fisis. Allah melihat perbuatan hamba di keramaian maupun kesendirian. Dalil: Q.S. Al-Ḥujurāt: 18 & Q.S. Al-Mulk: 19.
- Al-Khabīr (اَلْخَبِيْرُ - Maha Teliti / Maha Mengetahui Rahasia Batin): Mengetahui perkara tersembunyi, sangat samar, dan detail hingga ke relung niat terdalam (ikhlas vs riya'). Dalil: Q.S. Al-Mulk: 14 & Q.S. Luqmān: 16.

4. 🛡️ Contoh Perilaku Nyata Sehari-hari:
- Meneladani Al-'Alīm: Rajin belajar, haus literasi, rendah hati tidak sombong saat juara, ikhlas mengajari teman.
- Meneladani As-Samī‘: Menjaga tutur kata santun, menyimak guru di kelas dengan saksama, mendengarkan nasihat orang tua, menjauhi ghibah/kata kotor.
- Meneladani Al-Baṣīr: Jujur saat ulangan meski pengawas lengah (Murāqabah), menjaga pandangan (Ghadhdhul Baṣar) dari konten negatif di media sosial, membuang sampah pada tempatnya walau tanpa piket.
- Meneladani Al-Khabīr: Teliti memeriksa jawaban ujian sebelum dikumpulkan, meluruskan niat semata-mata karena Allah, tabayyun mengecek fakta sebelum membagikan berita di internet.`;
      } else if (
        q.includes('pengertian iman kepada allah') ||
        (q.includes('iman') && q.includes('allah') && (q.includes('pengertian') || q.includes('definisi') || q.includes('tauhid')))
      ) {
        response = `🌟 Pengertian Iman kepada Allah Swt. (Materi PAI Kelas VII Bab 2):

A. Menurut Bahasa (Etimologi):
Berasal dari kata آمَنَ - يُؤْمِنُ - إِيْمَانًا (Āmana - Yu’minu - Īmānan), yang berarti percaya, meyakini, merasa aman, tenteram, dan membenarkan (At-Taṣdīq).

B. Menurut Istilah Syariat (Terminologi):
Sebagaimana dirumuskan para ulama akidah:
"تَصْدِيْقٌ بِالْقَلْبِ، وَإِقْرَارٌ بِاللِّسَانِ، وَعَمَلٌ بِالْأَرْكَانِ"
(Taṣdīqun bil-qalbi, wa iqrārun bil-lisāni, wa ‘amalun bil-arkāni)
Artinya: Membenarkan dengan keyakinan hati, mengucapkan dengan ikrar lisan (dua kalimat syahadat), dan membuktikannya dengan amal perbuatan nyata anggota badan.

C. Tiga Pilar Tauhid kepada Allah:
1. Tauhid Rubūbiyyah: Meyakini bahwa Allah satu-satunya Pencipta (Al-Khāliq), Pemelihara, Pemberi Rezeki (Ar-Rāziq), dan Pengatur seluruh alam semesta (Q.S. Al-Fatihah: 2).
2. Tauhid Ulūhiyyah: Menjadikan Allah satu-satunya Dzat yang berhak disembah dan diibadahi tanpa menyekutukan-Nya dengan apa pun (Q.S. Adz-Dzariyat: 56).
3. Tauhid Asmā' wa Sifāt: Mengimani nama-nama yang indah (Asmaul Husna) dan sifat kesempurnaan bagi Allah sebagaimana dalam Al-Qur'an dan hadis sahih tanpa tasybih, tamtsil, ta'thil, ataupun takyif (Q.S. Asy-Syura: 11).

D. Dalil Naqli:
- Q.S. An-Nisā' [4]: 136 (Perintah memperkokoh iman)
- Q.S. Al-Ikhlāṣ [112]: 1-4 (Kemurnian tauhid)`;
      } else if (
        q.includes('pengertian asmaul husna') ||
        (q.includes('asmaul husna') && (q.includes('pengertian') || q.includes('arti') || q.includes('jumlah') || q.includes('hadis')))
      ) {
        response = `📜 Pengertian Asmaul Husna & Keutamaannya (PAI Kelas VII Bab 2):

A. Menurut Bahasa:
- Al-Asmā’ (الأَسْمَاء): Jamak dari ism (اسم), yang berarti nama-nama atau sebutan.
- Al-Ḥusnā (الْحُسْنَى): Bentuk mu'annats (feminin) dari al-aḥsan (الأَحْسَن), yang berarti terbaik, paling indah, maha agung, atau maha sempurna.
Secara bahasa berarti: "Nama-nama Allah Swt. yang terbaik, paling indah, dan maha agung".

B. Menurut Istilah Syariat:
Nama-nama agung dan sifat-sifat mulia milik Allah Swt. yang mencerminkan kesempurnaan Dzat, sifat, dan perbuatan-Nya, yang telah Dia wahyukan di dalam Al-Qur'an dan melalui sabda Rasulullah SAW, suci dari segala cacat dan kekurangan.

C. Hadis 99 Asmaul Husna:
Dari sahabat Abu Hurairah r.a., Rasulullah SAW bersabda:
"إِنَّ لِلَّهِ تِسْعَةً وَتِسْعِينَ اسْمًا، مِائَةً إِلَّا وَاحِدًا، مَنْ أَحْصَاهَا دَخَلَ الْجَنَّةَ"
(HR. Bukhari No. 2736 & Muslim No. 2677)
Artinya: "Sesungguhnya Allah memiliki sembilan puluh sembilan nama, seratus kurang satu; barangsiapa yang aḥṣāhā (menghafal, memahami, dan mengamalkannya), niscaya ia masuk surga."

D. Tiga Dalil Al-Qur'an Utama:
1. Q.S. Al-A'rāf [7]: 180: "وَلِلّٰهِ الْاَسْمَاۤءُ الْحُسْنٰى فَادْعُوْهُ بِهَا..." (Hanya milik Allah Asmaul Husna, maka bermohonlah kepada-Nya dengan menyebut Asmaul Husna itu...)
2. Q.S. Ṭāhā [20]: 8: "اَللّٰهُ لَآ اِلٰهَ اِلَّا هُوَۗ لَهُ الْاَسْمَاۤءُ الْحُسْنٰى" (Dialah Allah, tidak ada tuhan selain Dia, yang mempunyai nama-nama yang terbaik).
3. Q.S. Al-Ḥasyr [59]: 24: "هُوَ اللّٰهُ الْخَالِقُ الْبَارِئُ الْمُصَوِّرُ لَهُ الْاَسْمَاۤءُ الْحُسْنٰى..." (Dia memiliki Asmaul Husna, bertasbih kepada-Nya apa yang ada di langit dan di bumi).`;
      } else if (
        q.includes('al-alim') ||
        q.includes('al-bashir') ||
        q.includes('al-basir') ||
        q.includes('as-sami') ||
        q.includes('al-khabir') ||
        q.includes('makna asmaul husna')
      ) {
        response = `✨ Makna Mendalam 4 Asmaul Husna Utama (PAI Kelas VII Bab 2):

1. Al-'Alīm (اَلْعَلِيْمُ) - Maha Mengetahui:
- Makna: Pengetahuan Allah Swt. maha luas, sempurna, dan tidak terbatas oleh dimensi ruang dan waktu. Meliputi apa yang telah terjadi, sedang terjadi, akan terjadi, hingga hal-hal yang gaib dan rahasia batin. Ilmu Allah tidak didahului oleh kebodohan dan tidak pernah diakhiri kelupaan.
- Dalil: Q.S. Al-Baqarah: 29 ("...wa huwa bikulli syai'in ‘alīm") & Q.S. Al-An'ām: 59 (kunci-kunci kegaiban dan sehelai daun gugur pun diketahui-Nya).

2. As-Samī‘ (اَلسَّمِيْعُ) - Maha Mendengar:
- Makna: Pendengaran Allah menjangkau seluruh jenis suara di alam semesta tanpa membutuhkan daun telinga atau alat fisik. Allah mendengar suara keras, bisikan lembut, rintihan orang terzalimi di keheningan malam, hingga bisikan suara hati manusia secara serentak tanpa pernah tertukar.
- Dalil: Q.S. Al-Baqarah: 256 ("...wallāhu samī‘un ‘alīm"), Q.S. Asy-Syūrā: 11, dan Q.S. Al-Mujādilah: 1.

3. Al-Baṣīr (اَلْبَصِيْرُ) - Maha Melihat:
- Makna: Penglihatan Allah menembus seluruh dimensi ruang dan waktu tanpa butuh cahaya, lensa, atau mata fisis. Allah melihat pergerakan semut hitam di atas batu hitam pada malam kelam. Allah melihat perbuatan hamba di keramaian maupun kesendirian di balik pintu terkunci.
- Dalil: Q.S. Al-Ḥujurāt: 18 ("...wallāhu baṣīrum bimā ta‘malūn") & Q.S. Al-Mulk: 19.

4. Al-Khabīr (اَلْخَبِيْرُ) - Maha Teliti / Maha Mengetahui Rahasia Batin:
- Makna: Allah Maha Waspada, Maha Cermat, dan Maha Mengetahui seluk-beluk hakikat terdalam dari segala perkara (khabīrun bi bawāṭinil-umūr). Jika Al-'Alim mengetahui fakta lahiriah, Al-Khabir mengetahui sampai pada motif batin dan keikhlasan niat di hati.
- Dalil: Q.S. Al-Mulk: 14 ("Alā ya‘lamu man khalaqa wa huwal-laṭīful-khabīr") & Q.S. Luqmān: 16 (amal sebiji sawi di dalam batu karang pasti didatangkan oleh Allah).`;
      } else if (
        q.includes('contoh perilaku') ||
        q.includes('perilaku asmaul husna') ||
        q.includes('mencerminkan asmaul husna') ||
        q.includes('meneladani asmaul husna') ||
        q.includes('penerapan asmaul husna')
      ) {
        response = `🛡️ Contoh Perilaku Meneladani Asmaul Husna dalam Kehidupan Sehari-hari Siswa:

1. Meneladani Al-'Alīm (Maha Mengetahui):
- 🏫 Di Sekolah: Rajin belajar, tekun membaca buku pelajaran, dan tidak pelit berbagi ilmu dengan teman saat kerja kelompok.
- 🏡 Di Rumah: Menghargai nasihat orang tua dan mengisi waktu luang dengan belajar hal-hal positif daripada main game berlebihan.
- 💡 Karakter: Rendah hati (tawadhu') dan tidak sombong saat mendapat juara kelas, karena ilmu manusia hanyalah setetes anugerah Allah.

2. Meneladani As-Samī‘ (Maha Mendengar):
- 🏫 Di Sekolah: Menyimak penjelasan bapak/ibu guru di kelas dengan saksama; tidak mengobrol sendiri saat pelajaran berlangsung.
- 👥 Pergaulan: Menjaga lisan dari perkataan kotor, kata-kata kasar, mengejek (bullying), dan ghibah (menggunjing teman).
- 🤲 Ibadah: Memperbanyak zikir, doa tulus, dan tilawah Al-Qur'an karena yakin Allah mendengar setiap desah kata kita.

3. Meneladani Al-Baṣīr (Maha Melihat):
- 🏫 Di Sekolah: Tetap jujur saat ulangan/ujian sekolah walau guru pengawas keluar kelas (sikap Murāqabah - merasa diawasi Allah).
- 🧹 Lingkungan: Membuang sampah pada tempatnya dan merapikan kelas walau tidak sedang jadwal piket.
- 📱 Digital: Menjaga pandangan mata (Ghadhdhul Baṣar) dari gambar/video tidak senonoh di media sosial dan gawai.

4. Meneladani Al-Khabīr (Maha Teliti & Waspada):
- 🏫 Di Sekolah: Teliti dan cermat saat mengerjakan tugas dan selalu memeriksa kembali lembar jawaban sebelum dikumpulkan.
- 📱 Digital: Menerapkan budaya Tabayyun (cek & ricek fakta) sebelum membagikan berita di internet; saring sebelum sharing.
- ❤️ Hati: Meluruskan niat ikhlas beribadah dan berbuat baik semata-mata karena Allah, bukan karena ingin dipuji (riya').`;
      } else if (q.includes('an-nisa') || q.includes('annisa') || q.includes('136')) {
        response = `📖 Q.S. An-Nisā’ [4] Ayat 136 (Materi PAI Kelas VII Semester 1):

Lafal Arab:
يٰٓاَيُّهَا الَّذِيْنَ اٰمَنُوْٓا اٰمِنُوْا بِاللّٰهِ وَرَسُوْلِهٖ وَالْكِتٰبِ الَّذِيْ نَزَّلَ عَلٰى رَسُوْلِهٖ وَالْكِتٰبِ الَّذِيْٓ اَنْزَلَ مِنْ قَبْلُ ۗوَمَنْ يَّكْفُرْ بِاللّٰهِ وَمَلٰۤىِٕكَتِهٖ وَكُتُبِهٖ وَرُسُلِهٖ وَالْيَوْمِ الْاٰخِرِ فَقَدْ ضَلَّ ضَلٰلًاۢ بَعِيْدًا

Artinya:
"Wahai orang-orang yang beriman! Tetaplah beriman kepada Allah dan Rasul-Nya (Muhammad) dan kepada Kitab (Al-Qur'an) yang diturunkan kepada Rasul-Nya, serta kitab yang diturunkan sebelumnya. Barangsiapa ingkar kepada Allah, malaikat-malaikat-Nya, kitab-kitab-Nya, rasul-rasul-Nya, dan hari kemudian, maka sungguh, orang itu telah tersesat sangat jauh."

Kandungan Utama:
1. Seruan memperbaharui dan mengokohkan rukun iman secara istiqamah, tidak berhenti pada lisan saja.
2. Kewajiban mengimani Al-Qur'an dan kitab-kitab samawi sebelumnya (Taurat, Zabur, Injil).
3. Peringatan keras: Mengingkari salah satu rukun iman menyebabkan kesesatan yang nyata (ḍalālam ba‘īdā).`;
      } else if (q.includes('al-anfal') || q.includes('anfal') || q.includes('mukmin hakiki') || q.includes('2-4')) {
        response = `📖 Q.S. Al-Anfāl [8] Ayat 2-4 (Lima Ciri Mukmin Hakiki & Balasannya):

Lima Karakteristik Orang Beriman Sejati:
1. Hati bergetar takzim ketika asma Allah disebut (إِذَا ذُكِرَ اللَّهُ وَجِلَتْ قُلُوبُهُمْ).
2. Iman bertambah kokoh saat menyimak lantunan ayat Al-Qur'an (إِذَا تُلِيَتْ عَلَيْهِمْ آيَاتُهُ زَادَتْهُمْ إِيمَانًا).
3. Senantiasa bertawakal penuh kepada Allah setelah ikhtiar (وَعَلَىٰ رَبِّهِمْ يَتَوَكَّلُونَ).
4. Menjaga dan mendirikan salat secara tertib dan khusyuk (الَّذِينَ يُقِيمُونَ الصَّلَاةَ).
5. Gemar menginfakkan rezeki untuk kemaslahatan sesama (وَمِمَّا رَزَقْنَاهُمْ يُنفِقُونَ).

Gelar & Tiga Balasan dari Allah (Ayat 4):
"Ulā'ika humul-mu’minūna ḥaqqā" (Merekalah mukmin sejati). Mereka memperoleh:
- Darajāt (derajat kemuliaan tinggi di surga)
- Maghfirah (ampunan dari dosa-dosa)
- Rizqun Karīm (rezeki yang mulia tiada terputus).`;
      } else if (q.includes('alif lam') || q.includes('qomariyah') || q.includes('syamsiyah') || q.includes('tajwid')) {
        response = `📚 Hukum Bacaan Alif Lam / Al-Ta'rif (Kaidah Tajwid Kelas VII):

1. Alif Lam Qomariyah (Idzhar Qomariyah):
- Lam berharakat sukun mati (ـلْ), huruf berikutnya TIDAK bertasydid.
- Dibaca jelas (Idzhar).
- 14 Huruf: ا ب غ ح ج ك و خ ف ع ق ي م هـ (Rumus: اَبْغِ حَجَّكَ وَخَفْ عَقِيْمَهُ).
- Contoh dalam materi: الْكِتٰبِ (Wal-kitāb), الْمُؤْمِنُونَ (Al-mu’minūn), الْيَوْمِ (Al-yaum).

2. Alif Lam Syamsiyah (Idgham Syamsiyah):
- Lam polos tanpa sukun, huruf berikutnya BERTASYDID (ـّ).
- Bunyi huruf "L" melebur langsung ke huruf berikutnya (Idgham).
- 14 Huruf: ط ث ص ر ت ض ذ ن د س ظ ز ش ل.
- Contoh dalam materi: الصَّلَاةَ (Aṣ-ṣalāh), الرَّسُولُ (Ar-rasūl), الَّذِينَ (Allażīna).`;
      } else if (q.includes('mufradat') || q.includes('arti perkata') || q.includes('kosa kata')) {
        response = `📝 Glosarium Mufradat & Terjemah Perkata PAI Kelas VII Semester 1:

Dari Q.S. An-Nisā’: 136:
- يٰٓاَيُّهَا (Wahai) | الَّذِيْنَ اٰمَنُوْٓا (Orang-orang yang beriman)
- اٰمِنُوْا (Perkokohlah imanmu!) | بِاللّٰهِ (Kepada Allah)
- وَالْكِتٰبِ الَّذِيْ نَزَّلَ (Dan kitab yang Dia turunkan berangsur-angsur)
- ضَلٰلًاۢ بَعِيْدًا (Kesesatan yang sangat jauh)

Dari Q.S. Al-Anfāl: 2-4:
- إِنَّمَا الْمُؤْمِنُونَ (Sesungguhnya orang-orang mukmin sejati)
- وَجِلَتْ قُلُوبُهُمْ (Gemetar bergetar hati mereka)
- زَادَتْهُمْ إِيمَانًا (Bertambah kuat iman mereka)
- يَتَوَكَّلُونَ (Mereka bertawakal)
- يُقِيمُونَ الصَّلَاةَ (Mereka mendirikan salat)
- يُنفِقُونَ (Mereka menginfakkan sebagian rezeki)
- الْمُؤْمِنُونَ حَقًّا (Orang-orang yang beriman sebenar-benarnya)
- رِزْقٌ كَرِيمٌ (Rezeki yang mulia/surga)

Kamu dapat membuka tab "Mufradat & Terjemah Perkata" pada menu Buku Pelajaran untuk belajar dengan mode Flashcard interaktif!`;
      } else if (q.includes('pentingnya iman') || (q.includes('hadis') && q.includes('iman')) || (q.includes('hadits') && q.includes('iman')) || q.includes('manisnya iman') || q.includes('cabang iman')) {
        response = `📜 Hadis-Hadis Nabi SAW tentang Pentingnya Keimanan:

1. Hadis Jibril tentang 6 Rukun Iman (HR. Muslim No. 8):
"Iman adalah engkau beriman kepada Allah, malaikat-malaikat-Nya, kitab-kitab-Nya, rasul-rasul-Nya, hari akhir, dan beriman kepada takdir baik maupun buruk."

2. Tiga Kunci Merasakan Manisnya Iman / Halāwatul Īmān (HR. Bukhari No. 16 & Muslim No. 43):
- Mencintai Allah dan Rasul lebih dari segalanya.
- Mencintai sesama manusia semata-mata karena Allah.
- Benci kembali kepada kekafiran sebagaimana benci dilempar ke api neraka.

3. Cabang-Cabang Iman / Syu‘abul Īmān (HR. Muslim No. 35):
Iman memiliki 70+ cabang: tertinggi ucapan "Lā ilāha illallāh", terendah menyingkirkan duri/rintangan dari jalan, dan rasa malu adalah cabang dari iman.

Tiga Dimensi Kesempurnaan Iman:
- Tashdiq bil Qalbi (membenarkan dalam hati)
- Iqrar bil Lisani (mengucapkan dengan lisan)
- 'Amal bil Arkani (mengamalkan dengan perbuatan).`;
      } else if (q.includes('bukhari') || q.includes('muslim') || q.includes('hadits') || q.includes('hadis')) {
        response = `Mengenai Hadits:\nDi Masterku AI tersedia 75 hadits pilihan dari 5 perawi mu'tabar (Bukhari, Muslim, Abu Dawud, At-Tirmidzi, An-Nasa'i). Masing-masing memuat teks Arab berharakat, terjemahan resmi, dan relevansi kurikulum SMP.\n\nContoh hadits utama: Hadits tentang keikhlasan niat (HR. Bukhari No. 1): "Innamal a'maalu bin-niyyaat...". Setiap amal kebaikan siswa di sekolah dinilai Allah berdasarkan kemurnian niatnya.`;
      } else if (q.includes('cp 2026') || q.includes('buku pai') || q.includes('bab')) {
        response = `Buku PAI dan Budi Pekerti SMP (CP 20 Tahun 2026):\nMencakup 3 jenjang lengkap (Kelas 7, 8, dan 9) yang terbagi dalam 5 Elemen Capaian Pembelajaran: Al-Qur'an & Hadis, Akidah, Akhlak, Fikih, serta Sejarah Peradaban Islam (SPI).\n\nSetiap bab dilengkapi dengan: Tujuan Pembelajaran, Dalil Rujukan, Ringkasan Esensial, Aktivitas Aksi Nyata, dan Pertanyaan Refleksi Karakter.`;
      } else if (q.includes('ulul azmi') || q.includes('nabi')) {
        response = `Sejarah 25 Nabi & Rasul:\nLima rasul bergelar Ulul Azmi (Nuh AS, Ibrahim AS, Musa AS, Isa AS, dan Muhammad SAW) memiliki ketabahan dan keteguhan luar biasa dalam menghadapi cobaan dakwah.\n\nSikap yang dapat diteladani siswa SMP:\n1. Pantang menyerah saat menghadapi kesulitan belajar.\n2. Bersikap santun dan pemaaf sebagaimana Rasulullah SAW memaafkan kaum Quraisy.\n3. Berani menegakkan kejujuran dalam segala keadaan.`;
      } else if (q.includes('sahabat') || q.includes('uwais') || q.includes('ulama') || q.includes('teladan')) {
        response = `Kisah Teladan Tokoh Islam:\nPara Sahabat (seperti Abu Bakar, Umar, Utsman, Ali, Bilal, Salman Al-Farisi), Tabi'in (seperti Uwais Al-Qarni sang teladan birrul walidain), serta Ulama Mazhab (Imam Syafi'i, Abu Hanifah, Malik, Ahmad, Ibnu Sina) membuktikan bahwa kejayaan peradaban dibangun dengan ilmu, integritas, dan keikhlasan beramal.`;
      } else {
        response = `Pertanyaan yang sangat bagus! Di Masterku AI, kamu dapat mengeksplorasi:\n- 📖 Al-Qur'an Kemenag lengkap dengan terjemahan dan audio murottal.\n- 📜 Hadits 5 Perawi (15 hadits per perawi = 75 hadits) lengkap teks Arab.\n- 📚 Buku PAI Kemdikbud CP 2026 Kelas 7, 8, 9.\n- 🌟 Sejarah 25 Nabi dan Rasul.\n- 🕊️ Kisah Teladan Sahabat, Tabi'in, dan Cendekiawan Islam.\n\nSilakan pilih menu di atas atau tanyakan hal spesifik yang ingin kamu pelajari lebih dalam!`;
      }

      setAiMessages(prev => [...prev, { sender: 'ai', text: response }]);
    }, 600);
  };

  const handleSendAi = () => {
    if (!aiInput.trim()) return;
    const text = aiInput;
    setAiInput('');
    askMasterkuAI(text);
  };

  return (
    <div className="space-y-6 pb-16">
      {/* Top Banner Header */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-800 via-teal-900 to-slate-900 text-white p-6 sm:p-8 shadow-xl">
        {/* Decorative background geometry */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-teal-400/10 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-200 text-xs font-semibold uppercase tracking-wider backdrop-blur-xs">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              Masterku AI — Khazanah PAI & Budi Pekerti
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              Pusat Sumber Belajar Islam Terpadu
            </h1>
            <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed">
              UPT SMPN 2 Rebang Tangkas. Terintegrasi Al-Qur'an Kemenag RI, 75 Hadits 5 Perawi, Buku PAI CP 20 Tahun 2026, Sejarah 25 Nabi, dan Kisah Teladan Insani.
            </p>
          </div>

          {/* Quick AI Trigger */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => setIsAiOpen(true)}
              className="inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold text-sm shadow-lg hover:shadow-amber-400/20 transition-all transform active:scale-95"
            >
              <Bot className="w-5 h-5 text-slate-900" />
              Tanya Masterku AI
            </button>
          </div>
        </div>

        {/* Global Search Bar */}
        <div className="relative mt-6 z-10">
          <div className="relative max-w-2xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-emerald-300/70" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari ayat, hadits, bab buku PAI, nama nabi, atau tokoh teladan..."
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/10 hover:bg-white/15 focus:bg-white/20 border border-white/20 focus:border-emerald-300 text-white placeholder-emerald-200/60 text-sm backdrop-blur-md outline-none transition-all shadow-inner"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs bg-white/20 hover:bg-white/30 text-white px-2 py-1 rounded-md"
              >
                Reset
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main Tab Navigation */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none border-b border-slate-200">
        {[
          { id: 'quran', label: 'Al-Qur\'an & Terjemah', icon: BookMarked, badge: 'Kemenag' },
          { id: 'hadits', label: 'Hadits 5 Perawi', icon: ScrollText, badge: '75 Hadits' },
          { id: 'buku', label: 'Buku PAI CP 2026', icon: BookOpen, badge: 'Kls 7,8,9' },
          { id: 'nabi', label: 'Sejarah 25 Nabi', icon: Compass, badge: 'Ulul Azmi' },
          { id: 'teladan', label: 'Kisah Teladan', icon: HeartHandshake, badge: 'Sahabat & Ulama' }
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as TabType)}
              className={`flex items-center gap-2.5 px-4 py-3 rounded-xl font-semibold text-sm whitespace-nowrap transition-all border ${
                isActive
                  ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm'
                  : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
              <span>{tab.label}</span>
              <span
                className={`text-[11px] px-2 py-0.5 rounded-full font-medium ${
                  isActive
                    ? 'bg-emerald-700 text-emerald-100'
                    : 'bg-slate-100 text-slate-600'
                }`}
              >
                {tab.badge}
              </span>
            </button>
          );
        })}
      </div>

      {/* ========================================================================= */}
      {/* TAB 1: AL-QUR'AN & TERJEMAH KEMENAG */}
      {/* ========================================================================= */}
      {activeTab === 'quran' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: Surah Selector List */}
          <div className="lg:col-span-4 space-y-3">
            <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-slate-800 text-sm flex items-center gap-2">
                  <BookMarked className="w-4 h-4 text-emerald-600" />
                  Daftar Surat Pilihan & Juz 30
                </h3>
                <span className="text-xs text-slate-400 font-medium">
                  {MASTERKU_QURAN_SURAHS.length} Surat Tersedia
                </span>
              </div>

              <div className="space-y-2 max-h-[600px] overflow-y-auto pr-1">
                {MASTERKU_QURAN_SURAHS.map((surah) => {
                  const isSelected = surah.number === selectedSurahNumber;
                  return (
                    <button
                      key={surah.number}
                      onClick={() => setSelectedSurahNumber(surah.number)}
                      className={`w-full p-3 rounded-xl text-left transition-all flex items-center justify-between border ${
                        isSelected
                          ? 'bg-emerald-50/80 border-emerald-500 shadow-xs'
                          : 'bg-white border-slate-100 hover:border-slate-300 hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-9 h-9 rounded-lg flex items-center justify-center font-bold text-xs ${
                            isSelected
                              ? 'bg-emerald-600 text-white shadow-xs'
                              : 'bg-slate-100 text-slate-700'
                          }`}
                        >
                          {surah.number}
                        </div>
                        <div>
                          <p className={`text-sm font-bold ${isSelected ? 'text-emerald-900' : 'text-slate-800'}`}>
                            {surah.name}
                          </p>
                          <p className="text-xs text-slate-400">
                            {surah.meaning} • {surah.numberOfAyat} Ayat
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="font-arabic text-lg text-emerald-800 font-semibold">
                          {surah.arabicName}
                        </span>
                        <p className="text-[10px] text-slate-400 uppercase">
                          {surah.revelationPlace}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Kemenag Standard Reference Card */}
            <div className="bg-emerald-50 border border-emerald-200/80 rounded-2xl p-4 text-xs text-emerald-800 space-y-1.5">
              <p className="font-bold flex items-center gap-1.5 text-emerald-900">
                <Info className="w-4 h-4 text-emerald-600" />
                Standar Terjemah Kementerian Agama RI
              </p>
              <p className="text-emerald-700 leading-relaxed">
                Teks transliterasi latin dan terjemahan menggunakan Al-Qur'an dan Terjemahnya edisi penyempurnaan Lajnah Pentashihan Mushaf Al-Qur'an (LPMQ) Kemenag RI. Dilengkapi audio murottal Syaikh Misyari Rasyid Al-Afasy.
              </p>
            </div>
          </div>

          {/* Right Column: Surah Verse Details & Tilawah */}
          <div className="lg:col-span-8 space-y-4">
            {/* Surah Header Card */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs relative overflow-hidden">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800">
                      Surat ke-{currentSurah.number}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-600">
                      Juz {currentSurah.juz} • {currentSurah.revelationPlace}
                    </span>
                  </div>
                  <h2 className="text-2xl font-black text-slate-800 mt-2 flex items-center gap-2">
                    {currentSurah.name}
                    <span className="text-sm font-normal text-slate-500">
                      ({currentSurah.meaning})
                    </span>
                  </h2>
                  <p className="text-xs text-slate-500 mt-1 max-w-xl">
                    {currentSurah.description}
                  </p>
                </div>

                <div className="text-right">
                  <div className="font-arabic text-4xl text-emerald-700 font-bold">
                    {currentSurah.arabicName}
                  </div>
                  <p className="text-xs text-slate-400 mt-1">
                    {currentSurah.numberOfAyat} Ayat
                  </p>
                </div>
              </div>

              {/* Bismillah Header if applicable */}
              {currentSurah.bismillahPre && (
                <div className="mt-6 pt-6 border-t border-slate-100 text-center">
                  <p className="font-arabic text-2xl text-slate-800 tracking-wide font-medium">
                    بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
                  </p>
                  <p className="text-xs text-slate-400 italic mt-1">
                    Dengan nama Allah Yang Maha Pengasih, Maha Penyayang
                  </p>
                </div>
              )}
            </div>

            {/* Ayat List */}
            <div className="space-y-4">
              {currentSurah.verses.map((ayat) => {
                const isPlaying = playingAudioUrl === ayat.audioUrl;
                return (
                  <div
                    key={ayat.numberInSurah}
                    className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs hover:border-emerald-300 transition-all space-y-4"
                  >
                    {/* Verse Toolbar */}
                    <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                      <div className="flex items-center gap-2">
                        <span className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-700 font-bold text-xs flex items-center justify-center border border-emerald-200">
                          {ayat.numberInSurah}
                        </span>
                        <span className="text-xs text-slate-400 font-medium">
                          {currentSurah.name} : {ayat.numberInSurah}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        {ayat.audioUrl && (
                          <button
                            onClick={() => handlePlayAudio(ayat.audioUrl)}
                            className={`p-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                              isPlaying
                                ? 'bg-emerald-600 text-white'
                                : 'bg-slate-100 hover:bg-emerald-50 text-slate-700 hover:text-emerald-700'
                            }`}
                            title="Dengarkan Murottal Ayat"
                          >
                            {isPlaying ? (
                              <>
                                <Pause className="w-3.5 h-3.5" />
                                <span className="hidden sm:inline">Jeda</span>
                              </>
                            ) : (
                              <>
                                <Play className="w-3.5 h-3.5" />
                                <span className="hidden sm:inline">Audio</span>
                              </>
                            )}
                          </button>
                        )}

                        <button
                          onClick={() =>
                            copyToClipboard(
                              `${ayat.arabic}\n\n${ayat.latin}\n"${ayat.translationKemenag}" (Q.S. ${currentSurah.name}: ${ayat.numberInSurah})`,
                              'Ayat dan Terjemah'
                            )
                          }
                          className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-all text-xs"
                          title="Salin Ayat & Terjemah"
                        >
                          <Copy className="w-3.5 h-3.5" />
                        </button>

                        <button
                          onClick={() =>
                            askMasterkuAI(
                              `Jelaskan kandungan dan asbabun nuzul (jika ada) dari Q.S. ${currentSurah.name} ayat ${ayat.numberInSurah}: "${ayat.translationKemenag}"`
                            )
                          }
                          className="px-2.5 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-semibold flex items-center gap-1 transition-all"
                        >
                          <Sparkle className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="hidden sm:inline">Tanya AI</span>
                        </button>
                      </div>
                    </div>

                    {/* Arabic Text */}
                    <div className="text-right py-2">
                      <p
                        className="font-arabic text-2xl sm:text-3xl text-slate-900 font-semibold leading-[2.2] tracking-wide"
                        dir="rtl"
                      >
                        {ayat.arabic}
                      </p>
                    </div>

                    {/* Transliteration Latin */}
                    <p className="text-xs sm:text-sm font-medium text-emerald-800/90 italic">
                      {ayat.latin}
                    </p>

                    {/* Indonesian Translation Kemenag */}
                    <div className="pt-2 border-t border-slate-100">
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                        <span className="font-semibold text-slate-900">Artinya: </span>
                        {ayat.translationKemenag}
                      </p>
                    </div>

                    {/* Tafsir Wajiz if available */}
                    {ayat.tafsirWajiz && (
                      <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-600 space-y-1">
                        <span className="font-bold text-slate-800 flex items-center gap-1">
                          <BookOpen className="w-3.5 h-3.5 text-slate-500" />
                          Tafsir Ringkas (Wajiz):
                        </span>
                        <p className="leading-relaxed">{ayat.tafsirWajiz}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 2: HADITS 5 PERAWI (75 HADITS) */}
      {/* ========================================================================= */}
      {activeTab === 'hadits' && (
        <div className="space-y-6">
          {/* Filter Bar */}
          <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-slate-500 flex items-center gap-1">
                <Filter className="w-3.5 h-3.5" />
                Perawi:
              </span>
              {(['Semua', 'Bukhari', 'Muslim', 'Abu Dawud', 'At-Tirmidzi', 'An-Nasa\'i'] as const).map((perawi) => (
                <button
                  key={perawi}
                  onClick={() => setSelectedPerawi(perawi)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all border ${
                    selectedPerawi === perawi
                      ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {perawi === 'Semua' ? 'Semua Perawi' : perawi}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-500">Kelas:</span>
              <select
                value={selectedHaditsGrade}
                onChange={(e) => setSelectedHaditsGrade(e.target.value)}
                className="px-3 py-1.5 rounded-xl border border-slate-200 bg-white text-xs font-semibold text-slate-700 outline-none focus:border-emerald-500"
              >
                <option value="Semua">Semua Jenjang</option>
                <option value="Kelas VII">Kelas VII</option>
                <option value="Kelas VIII">Kelas VIII</option>
                <option value="Kelas IX">Kelas IX</option>
              </select>
            </div>
          </div>

          {/* Hadits Stats Summary */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {[
              { id: 'Bukhari', name: 'Shahih Bukhari', count: 15, color: 'border-emerald-500 bg-emerald-50 text-emerald-800' },
              { id: 'Muslim', name: 'Shahih Muslim', count: 15, color: 'border-blue-500 bg-blue-50 text-blue-800' },
              { id: 'Abu Dawud', name: 'Sunan Abu Dawud', count: 15, color: 'border-amber-500 bg-amber-50 text-amber-800' },
              { id: 'At-Tirmidzi', name: 'Jami\' At-Tirmidzi', count: 15, color: 'border-purple-500 bg-purple-50 text-purple-800' },
              { id: 'An-Nasa\'i', name: 'Sunan An-Nasa\'i', count: 15, color: 'border-rose-500 bg-rose-50 text-rose-800' }
            ].map((stat) => (
              <div
                key={stat.id}
                onClick={() => setSelectedPerawi(stat.id as PerawiType)}
                className={`p-3 rounded-xl border text-center cursor-pointer transition-all hover:scale-102 ${stat.color} ${
                  selectedPerawi === stat.id ? 'ring-2 ring-emerald-500 ring-offset-2' : ''
                }`}
              >
                <p className="text-[11px] font-semibold">{stat.name}</p>
                <p className="text-lg font-black mt-0.5">{stat.count} Hadits</p>
              </div>
            ))}
          </div>

          {/* Hadits List */}
          <div className="space-y-4">
            {filteredHadits.length === 0 ? (
              <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center text-slate-500">
                <ScrollText className="w-12 h-12 mx-auto text-slate-300 mb-3" />
                <p className="font-bold text-slate-700">Tidak ada hadits yang sesuai kriteria pencarian</p>
                <p className="text-xs text-slate-400 mt-1">Coba sesuaikan kata kunci atau filter perawi.</p>
              </div>
            ) : (
              filteredHadits.map((hadits) => (
                <div
                  key={hadits.id}
                  className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:border-emerald-300 transition-all space-y-4"
                >
                  {/* Hadits Meta Header */}
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-lg bg-emerald-100 text-emerald-800 font-bold text-xs">
                        {hadits.narrator}
                      </span>
                      <span className="text-xs font-semibold text-slate-500">
                        {hadits.narratorFull}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 text-[11px] font-medium">
                        {hadits.gradeRelevance}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 text-[11px] font-semibold">
                        Tema: {hadits.theme}
                      </span>

                      <button
                        onClick={() =>
                          copyToClipboard(
                            `${hadits.arabic}\n\nArtinya:\n"${hadits.translation}"\n\n(${hadits.narrator} - ${hadits.narratorFull})`,
                            'Teks Hadits'
                          )
                        }
                        className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 transition-all"
                        title="Salin Hadits"
                      >
                        <Copy className="w-3.5 h-3.5" />
                      </button>

                      <button
                        onClick={() =>
                          askMasterkuAI(
                            `Jelaskan kandungan dan pelajaran penting dari hadits ${hadits.narrator} (${hadits.narratorFull}) tentang "${hadits.theme}": "${hadits.translation}"`
                          )
                        }
                        className="px-2.5 py-1 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-semibold flex items-center gap-1 transition-all"
                      >
                        <Sparkles className="w-3 h-3 text-emerald-600" />
                        Tanya AI
                      </button>
                    </div>
                  </div>

                  {/* Arabic Text */}
                  <div className="text-right py-2">
                    <p
                      className="font-arabic text-xl sm:text-2xl text-slate-900 font-medium leading-[2.2] tracking-wide"
                      dir="rtl"
                    >
                      {hadits.arabic}
                    </p>
                  </div>

                  {/* Indonesian Translation */}
                  <div className="bg-slate-50/80 rounded-xl p-4 border border-slate-100">
                    <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-normal">
                      <span className="font-bold text-slate-900">Artinya: </span>
                      "{hadits.translation}"
                    </p>
                  </div>

                  {/* Explanation for junior high students */}
                  <div className="text-xs text-slate-600 space-y-1">
                    <p className="font-bold text-emerald-900 flex items-center gap-1.5">
                      <GraduationCap className="w-4 h-4 text-emerald-600" />
                      Penerapan bagi Siswa SMP:
                    </p>
                    <p className="leading-relaxed pl-5">{hadits.explanation}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 3: BUKU PAI KEMDIKBUD CP 20 TAHUN 2026 (KELAS 7, 8, 9) */}
      {/* ========================================================================= */}
      {activeTab === 'buku' && (
        <div className="space-y-6">
          {/* Header Info & Filters */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="font-black text-slate-800 text-lg flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-emerald-600" />
                  Buku PAI dan Budi Pekerti SMP (CP 20 Tahun 2026)
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Pedoman Resmi Kurikulum Merdeka Capaian Pembelajaran Terbaru 2026 untuk Fase D (Kelas VII, VIII, IX).
                </p>
              </div>

              {/* Grade Selector Pills */}
              <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl">
                {(['Semua', 'Kelas VII', 'Kelas VIII', 'Kelas IX'] as const).map((grade) => (
                  <button
                    key={grade}
                    onClick={() => setSelectedBukuGrade(grade)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      selectedBukuGrade === grade
                        ? 'bg-emerald-600 text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {grade}
                  </button>
                ))}
              </div>
            </div>

            {/* Element Filter */}
            <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100">
              <span className="text-xs font-bold text-slate-500">Elemen CP:</span>
              {[
                'Semua',
                'Al-Qur\'an dan Hadis',
                'Akidah',
                'Akhlak',
                'Fikih',
                'Sejarah Peradaban Islam (SPI)'
              ].map((element) => (
                <button
                  key={element}
                  onClick={() => setSelectedBukuElement(element)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                    selectedBukuElement === element
                      ? 'bg-slate-800 text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {element}
                </button>
              ))}
            </div>
          </div>

          {/* ========================================================================= */}
          {/* SPECIAL FULL TEXTBOOK VIEWER FOR KELAS VII & KELAS VIII */}
          {/* ========================================================================= */}
          {(selectedBukuGrade === 'Kelas VII' || selectedBukuGrade === 'Kelas VIII' || selectedBukuGrade === 'Semua') && (
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-emerald-800 via-teal-800 to-slate-900 rounded-2xl p-5 sm:p-6 text-white shadow-lg space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1.5 max-w-2xl">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-amber-400 text-amber-950 font-black text-[11px] tracking-wide">
                        BUKU PELAJARAN PAI INTERAKTIF
                      </span>
                      <span className="text-xs text-emerald-200 font-semibold">
                        {selectedTextbookChapter === 'k8-bab6'
                          ? 'Kelas VIII • Semester 2'
                          : selectedTextbookChapter === 'k8-bab5' || selectedTextbookChapter === 'k8-bab4' || selectedTextbookChapter === 'k8-bab3' || selectedTextbookChapter === 'k8-bab2' || selectedTextbookChapter === 'k8-bab1'
                          ? 'Kelas VIII • Semester 1'
                          : selectedTextbookChapter === 'k7-bab10' || selectedTextbookChapter === 'k7-bab9' || selectedTextbookChapter === 'k7-bab8' || selectedTextbookChapter === 'k7-bab7' || selectedTextbookChapter === 'k7-bab6'
                          ? 'Kelas VII • Semester 2'
                          : 'Kelas VII • Semester 1'}
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-black text-white">
                      {selectedTextbookChapter === 'k8-bab6'
                        ? 'Kelas VIII Bab 6: Menebarkan Semangat Cinta Tanah Air (Q.S. An-Nisā\' [4]: 66, Hadis Cinta Makkah/Madinah & Piagam Madinah, Hukum Nun Sukun & Tanwin, Mufradat, 4 Keterampilan, & 6 Hikmah)'
                        : selectedTextbookChapter === 'k8-bab5'
                        ? 'Kelas VIII Bab 5: Merefleksikan Diri terhadap Sejarah dan Peran Kekhalifahan Islam Pasca Khulafaur Rasyidin: Dinasti Abbasiyah'
                        : selectedTextbookChapter === 'k8-bab4'
                        ? 'Kelas VIII Bab 4: Menerapkan Ketentuan Kewajiban terhadap Penyelenggaraan Jenazah (Kewajiban, Tata Cara Sholat, Ketentuan Islam, & Hikmah)'
                        : selectedTextbookChapter === 'k8-bab3'
                        ? 'Kelas VIII Bab 3: Menerapkan Makna Cinta Rasul (Meneladani Akhlak Mulia & Meraih Syafaat Rasulullah Saw.)'
                        : selectedTextbookChapter === 'k8-bab2'
                        ? 'Kelas VIII Bab 2: Meyakini Kitab-Kitab Allah Swt. (Generasi Pecinta Al-Qur\'an yang Toleran)'
                        : selectedTextbookChapter === 'k8-bab1'
                        ? 'Kelas VIII Bab 1: Membangun Harmoni melalui Toleransi & Kedamaian (Q.S. Al-Hujurāt: 13, Q.S. Al-Baqarah: 256, Tajwid Lam & Ra\')'
                        : selectedTextbookChapter === 'k7-bab10'
                        ? 'Bab 10: Meneladani Peradaban Islam Daulah Bani Umayyah Periode Andalusia (711 M - 1492 M)'
                        : selectedTextbookChapter === 'k7-bab9'
                        ? 'Bab 9: Menerapkan Ketentuan Rukhsah dalam Ibadah (Shalat, Puasa, Zakat & Haji)'
                        : selectedTextbookChapter === 'k7-bab8'
                        ? 'Bab 8: Menerapkan Makna Bersyukur kepada Allah Swt. (Pengertian, Dalil Naqli Q.S. Ibrahim: 7 & Luqman: 12, Contoh Perilaku 3 Dimensi, Manfaat & Hikmah)'
                        : selectedTextbookChapter === 'k7-bab7'
                        ? 'Bab 7: Mawas Diri dan Mengintrospeksi Diri dalam Menjalani Kehidupan (Meyakini & Merefleksikan Iman kepada Malaikat Allah Swt.)'
                        : selectedTextbookChapter === 'k7-bab6'
                        ? 'Bab 6: Meraih Cinta Allah SWT dengan Ketakwaan (Q.S. Al-Baqarah: 103, Ali \'Imran: 76 & Hukum Bacaan Ghunnah)'
                        : selectedTextbookChapter === 'k7-bab5'
                        ? 'Bab 5: Meneladani Peradaban Islam Daulah Bani Umayyah Periode Damaskus (\'Amul Jama\'ah 41 H - 132 H)'
                        : selectedTextbookChapter === 'k7-bab4'
                        ? 'Bab 4: Menerapkan Ketentuan Macam-Macam Sujud di Luar Rukun Salat (Sujud Syukur, Sujud Sahwi, Sujud Tilawah, 15 Ayat Sajdah & Hikmah)'
                        : selectedTextbookChapter === 'k7-bab3'
                        ? 'Bab 3: Menerapkan Makna Ikhlas dalam Kehidupan Sehari-hari (Pengertian, Dalil Naqli, Contoh Perilaku & Hikmah)'
                        : selectedTextbookChapter === 'k7-bab2'
                        ? 'Bab 2: Meneladani Asmaul Husna (Hakikat Iman, Makna Al-\'Alīm, As-Samī\', Al-Baṣīr, Al-Khabīr & Perilaku Sehari-hari)'
                        : 'Bab 1: Merengkuh Hakikat Iman (Q.S. An-Nisā’: 136, Q.S. Al-Anfāl: 2-4, Hadis Keimanan & Tajwid Alif Lam)'}
                    </h3>
                    <p className="text-xs text-emerald-100/90 leading-relaxed">
                      {selectedTextbookChapter === 'k8-bab6'
                        ? 'Sesuai silabus buku pelajaran PAI & Budi Pekerti SMP Kelas VIII Semester 2: 1. Q.S. An-Nisā\' [4]: 66 & Hadits Shahih (Cinta Makkah H.R. At-Tirmidzi, Cinta Madinah H.R. Al-Bukhari, & Piagam Madinah 622 M sebagai dasar ukhuwah wathaniyah); 2. Kaidah tajwid lengkap hukum Nun Sukun (نْ) & Tanwin (Idzhar Halqi 6 huruf, Idgham Bighunnah 4 huruf YANMU & pengecualian Idzhar Mutlaq dunya/bunyan/qinwan/sinwan, Idgham Bilaghunnah 2 huruf lam/ra, Iqlab huruf ba, Ikhfa Haqiqi 15 huruf) disertai tabel filter interaktif; 3. Kamus mufradat perkata interaktif & flashcard hafalan; 4. Penerapan 4 keterampilan (membaca tartil, menghafal metode tikrar 3x3, menulis khat naskhi rasm utsmani, serta studi kasus refleksi etika kebangsaan); 5. 6 Hikmah luhur cinta tanah air, matriks aksi nyata pelajar, lembar refleksi karakter 8 dimensi, & evaluasi 5 soal HOTS.'
                        : selectedTextbookChapter === 'k8-bab5'
                        ? 'Sesuai silabus buku pelajaran PAI & Budi Pekerti SMP Kelas VIII: 1. Sejarah berdirinya Daulah Abbasiyah (gerakan 3 wilayah rahasia Al-Humaimah-Kufah-Khurasan, baiat Abu al-Abbas As-Saffah 750 M, tata kota bundar Baghdad Madinat as-Salam 762 M); 2. Tokoh-tokoh penting (Harun ar-Rasyid, Al-Ma\'mun, Ibnu Sina "Bapak Kedokteran", Al-Khawarizmi "Bapak Aljabar & Algoritma", Ar-Razi, 4 Imam Mazhab & Bukhari-Muslim); 3. Puncak kejayaan The Golden Age (Baitul Hikmah, gerakan penerjemahan berhadiah emas seberat buku, bimaristan gratis, revolusi industri kertas & cek suftajah); 4. Faktor kemunduran & tragedi serangan Mongol Hulagu Khan 1258 M; 5. 5 Hikmah sejarah, studi kasus etika digital, & kuis HOTS.'
                        : selectedTextbookChapter === 'k8-bab4'
                        ? 'Sesuai silabus buku pelajaran PAI & Budi Pekerti SMP Kelas VIII: 1. Kewajiban terhadap jenazah (fardhu kifayah, 4 tahapan memandikan, mengafani 3 vs 5 lapis, menyalatkan, menguburkan ke liang lahat, syahid ma\'rakah); 2. Tata cara shalat jenazah 4 takbir (posisi imam pria vs wanita, niat, shalawat ibrahimiyah, doa jenazah laki-laki/wanita/anak, salam, shalat ghaib) dilengkapi simulator takbir interaktif & audio; 3. Ketentuan Islam (tindakan awal wafat, larangan niyahah meratap histeris & medsos, adab takziah sunnah hidangan Ja\'far, ziarah kubur tadzkiratul maut); 4. Hikmah terhadap penyelenggaraan jenazah dengan benar (pahala 2 Qirath, ukhuwah, mawas diri), studi kasus remaja, refleksi 8 dimensi, & kuis HOTS.'
                        : selectedTextbookChapter === 'k8-bab3'
                        ? 'Sesuai silabus buku pelajaran PAI & Budi Pekerti SMP Kelas VIII: 1. Pengertian cinta kepada Rasulullah Saw. secara bahasa & istilah syariat, 4 sifat wajib & mustahil nabi; 2. Dalil naqli Al-Qur\'an (Q.S. Ali \'Imran: 31, Q.S. At-Taubah: 24, Q.S. Al-Ahzab: 21 & 56) dengan audio tilawah qari & Hadis shahih keimanan; 3. Contoh perilaku nyata cinta Rasul (akhlak karimah, sunnah harian pelajar, wirid shalawat digital); 4. Manfaat & hikmah duniawi-ukhrawi (manisnya iman, syafaat \'uzma); 5. Merefleksikan perilaku cinta Rasul (studi kasus dilema moral, lembar muhasabah 8 dimensi, kuis evaluasi HOTS 5 butir soal).'
                        : selectedTextbookChapter === 'k8-bab2'
                        ? 'Sesuai silabus buku pelajaran PAI & Budi Pekerti SMP Kelas VIII: Hakikat iman kepada kitab-kitab Allah (ijmali & tafshili), dalil naqli Al-Qur\'an (Q.S. An-Nisa\': 136, Q.S. Al-Baqarah: 136, Q.S. Al-Ma\'idah: 48) dengan audio tilawah, komparasi 4 kitab suci (Taurat, Zabur, Injil, Al-Qur\'an) beserta rasul penerima & suhuf nabi, fungsi & hikmah beriman, 6 dimensi ajaran pokok, kedudukan Al-Qur\'an sebagai Al-Muhaimin, generasi Qur\'ani yang berakhlak mulia & toleran, serta kuis HOTS & refleksi karakter.'
                        : selectedTextbookChapter === 'k8-bab1'
                        ? 'Sesuai silabus buku pelajaran PAI & Budi Pekerti SMP Kelas VIII: Membaca tartil dengan audio qari internasional, menghafal takrar berjenjang, menulis indah khat Naskhi, telaah mendalam Q.S. Al-Hujurat: 13 & Q.S. Al-Baqarah: 256, penerapan hukum tajwid Lam (Jalalah & Ta\'rif) dan Ra\' (Tafkhim & Tarqiq), kamus mufradat perkata, hadis sahih toleransi (Al-Hanifiyyah As-Samhah), serta 5 soal evaluasi HOTS.'
                        : selectedTextbookChapter === 'k7-bab10'
                        ? 'Sesuai silabus buku pelajaran PAI & Budi Pekerti SMP: Sejarah berdirinya (Thariq bin Ziyad 711 M di Jabal Thariq & Abdurrahman Ad-Dakhil 756 M), masa keemasan Cordoba The Ornament of the World di era Abdurrahman III & Al-Hakam II (70 perpustakaan, 400.000 buku), kontribusi monumental kedokteran Az-Zahrawi, filsafat Ibnu Rusyd, astronomi Az-Zarqali, penerbangan Abbas bin Firnas, faktor keruntuhan (Mulukut Thawaif & Reconquista), serta 5 hikmah agung.'
                        : selectedTextbookChapter === 'k7-bab9'
                        ? 'Sesuai silabus buku pelajaran PAI & Budi Pekerti SMP: Ketentuan rukhsah secara bahasa & istilah syariat, perbandingan \'azimah vs rukhsah, 4 hukum mengambil rukhsah, 7 sebab keringanan (safar, sakit, ikrah, dll.), dalil naqli Al-Qur\'an (Q.S. Al-Baqarah: 185, An-Nisa: 101) & Hadis shahih, rukhsah dalam 4 ibadah pokok (Shalat, Puasa, Zakat, Haji), panduan langkah praktik jamak taqdim-ta\'khir qashar & tayamum, serta 5 hikmah agung.'
                        : selectedTextbookChapter === 'k7-bab8'
                        ? 'Sesuai silabus buku pelajaran PAI & Budi Pekerti SMP: Pengertian syukur secara bahasa (syakara-yasykuru-syukran) & istilah syariat, 3 tingkatan syukur & bahaya kufur nikmat, dalil naqli Al-Qur\'an (Q.S. Ibrahim: 7, Luqman: 12, An-Nahl: 78, Al-Baqarah: 152) dengan audio tilawah & Hadits Shahih, penerapan konkret 3 dimensi syukur pelajar (hati, lisan, fisik di sekolah, rumah, medsos), 4 manfaat komprehensif syariat & sains, 5 hikmah agung, lembar instrumen muhasabah nikmat harian, serta kuis penilaian HOTS.'
                        : selectedTextbookChapter === 'k7-bab7'
                        ? 'Sesuai silabus buku pelajaran PAI & Budi Pekerti SMP: Pengertian iman secara bahasa (al-alukah/risalah) & istilah syariat (Rukun Iman ke-2), dalil naqli Al-Qur\'an & Hadis shahih dengan audio tilawah, rincian nama 10 malaikat Allah beserta tugas pokok dan teladan perilaku pelajar (di sekolah, rumah, medsos), sifat-sifat hakiki malaikat & tabel komparasi Malaikat vs Manusia vs Jin, 6 hikmah agung, instrumen lembar muhasabah malam, serta kuis HOTS evaluasi mandiri.'
                        : selectedTextbookChapter === 'k7-bab6'
                        ? 'Sesuai silabus buku pelajaran PAI & Budi Pekerti SMP: Membaca tartil dengan audio qari internasional, takrar hafalan, panduan menulis khat naskhi, tafsir Q.S. Al-Baqarah: 103 dan Ali \'Imran: 76, kaidah tajwid hukum Ghunnah (Musyaddadah, Idgham, Ikhfa), hadis taqwa di mana pun berada, kamus mufradat per kata, kuis HOTS, serta hikmah takwa di era digital.'
                        : selectedTextbookChapter === 'k7-bab5'
                        ? 'Sesuai silabus buku pelajaran PAI & Budi Pekerti SMP: Sejarah berdirinya Dinasti Umayyah Damaskus paska Khulafaur Rasyidin (\'Amul Jama\'ah 41 H), 6 khalifah penting (Muawiyah, Abdul Malik, Al-Walid, Umar bin Abdul Aziz, Hisyam, Marwan II), kemajuan peradaban di 3 benua (arsitektur, kodifikasi hadis, militer, ilmu pengetahuan), faktor kemunduran internal & eksternal, hikmah sejarah, kuis HOTS, serta glosarium istilah.'
                        : selectedTextbookChapter === 'k7-bab4'
                        ? 'Sesuai silabus buku pelajaran PAI & Budi Pekerti SMP: Pengertian, hukum sunnah mu\'akkadah, dan sebab Sujud Syukur, Sahwi, dan Tilawah, lafaz bacaan doa Arab berharakat & latin, tata cara langkah praktik di dalam dan di luar salat, daftar 15 ayat sajdah mushaf Kemenag RI dengan audio qari internasional, kuis HOTS, serta hikmah pembentukan karakter tawadhu\'.'
                        : selectedTextbookChapter === 'k7-bab3'
                        ? 'Sesuai silabus buku pelajaran PAI & Budi Pekerti SMP: Hakikat & pengertian ikhlas secara bahasa (khalasa) dan istilah syariat, 3 tingkatan ikhlas, tabel komparasi ikhlas vs riya vs sum\'ah vs \'ujub, dalil naqli Al-Qur\'an (Q.S. Al-Bayyinah: 5, Q.S. Al-An\'am: 162-163, Q.S. Az-Zumar: 2, Q.S. Al-Insan: 9) dengan audio tilawah, hadis sahih niat dan hati, contoh perilaku ikhlas di sekolah, rumah, pergaulan, dan era medsos, serta manfaat dan hikmah di dunia & akhirat.'
                        : selectedTextbookChapter === 'k7-bab2'
                        ? 'Sesuai silabus buku pelajaran PAI & Budi Pekerti SMP: Hakikat iman secara bahasa dan istilah syariat, 3 dimensi tauhid, dalil naqli Al-Qur\'an & aqli, pengertian Asmaul Husna & hadis 99 Asmaul Husna, makna mendalam 4 Asmaul Husna utama (Al-\'Alīm, As-Samī\', Al-Baṣīr, Al-Khabīr), serta contoh perilaku nyata di sekolah, rumah, dan era digital.'
                        : 'Sesuai silabus buku pelajaran PAI & Budi Pekerti SMP: teks Arab berharakat, audio tilawah qari internasional, terjemahan resmi Kemenag RI, asbabun nuzul, syarah hadis, kaidah tajwid Alif Lam Qomariyah vs Syamsiyah, kamus kosa kata mufradat (Tabel & Flashcard), serta latihan tajwid mandiri.'}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 self-start sm:self-auto">
                    <button
                      onClick={() => setShowKelas7Sem1Detail(!showKelas7Sem1Detail)}
                      className="px-4 py-2.5 rounded-xl bg-white hover:bg-emerald-50 text-emerald-900 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all whitespace-nowrap cursor-pointer"
                    >
                      <BookOpen className="w-4 h-4 text-emerald-700" />
                      <span>{showKelas7Sem1Detail ? 'Tutup Buku Pelajaran' : 'Buka Buku Pelajaran Lengkap'}</span>
                    </button>
                  </div>
                </div>

                {/* Chapter Selector Tabs in the interactive textbook header */}
                <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-emerald-700/50">
                  <span className="text-xs font-bold text-emerald-200 mr-1">Pilih Bab:</span>
                  <button
                    onClick={() => {
                      setSelectedTextbookChapter('k8-bab7');
                      setShowKelas7Sem1Detail(true);
                    }}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                      selectedTextbookChapter === 'k8-bab7'
                        ? 'bg-amber-400 text-amber-950 shadow-md font-black'
                        : 'bg-white/15 text-white hover:bg-white/25'
                    }`}
                  >
                    <span>🌟 Kls VIII Bab 7: Iman kepada Para Rasul</span>
                    <span className="px-1.5 py-0.2 bg-rose-900/60 text-white rounded text-[10px]">Sem 2 Baru</span>
                  </button>

                  <button
                    onClick={() => {
                      setSelectedTextbookChapter('k8-bab6');
                      setShowKelas7Sem1Detail(true);
                    }}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                      selectedTextbookChapter === 'k8-bab6'
                        ? 'bg-amber-400 text-amber-950 shadow-md font-black'
                        : 'bg-white/15 text-white hover:bg-white/25'
                    }`}
                  >
                    <span>🇮🇩 Kls VIII Bab 6: Cinta Tanah Air</span>
                    <span className="px-1.5 py-0.2 bg-rose-900/60 text-white rounded text-[10px]">Sem 2 Baru</span>
                  </button>

                  <button
                    onClick={() => {
                      setSelectedTextbookChapter('k8-bab5');
                      setShowKelas7Sem1Detail(true);
                    }}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                      selectedTextbookChapter === 'k8-bab5'
                        ? 'bg-amber-400 text-amber-950 shadow-md font-black'
                        : 'bg-white/15 text-white hover:bg-white/25'
                    }`}
                  >
                    <span>🏛️ Kls VIII Bab 5: Daulah Abbasiyah</span>
                    <span className="px-1.5 py-0.2 bg-rose-900/60 text-white rounded text-[10px]">Kelas VIII Baru</span>
                  </button>

                  <button
                    onClick={() => {
                      setSelectedTextbookChapter('k8-bab4');
                      setShowKelas7Sem1Detail(true);
                    }}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                      selectedTextbookChapter === 'k8-bab4'
                        ? 'bg-amber-400 text-amber-950 shadow-md font-black'
                        : 'bg-white/15 text-white hover:bg-white/25'
                    }`}
                  >
                    <span>🕊️ Kls VIII Bab 4: Penyelenggaraan Jenazah</span>
                    <span className="px-1.5 py-0.2 bg-emerald-900/60 text-white rounded text-[10px]">Kelas VIII</span>
                  </button>

                  <button
                    onClick={() => {
                      setSelectedTextbookChapter('k8-bab3');
                      setShowKelas7Sem1Detail(true);
                    }}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                      selectedTextbookChapter === 'k8-bab3'
                        ? 'bg-amber-400 text-amber-950 shadow-md font-black'
                        : 'bg-white/15 text-white hover:bg-white/25'
                    }`}
                  >
                    <span>❤️ Kls VIII Bab 3: Cinta Rasul</span>
                    <span className="px-1.5 py-0.2 bg-emerald-900/60 text-white rounded text-[10px]">Kelas VIII</span>
                  </button>

                  <button
                    onClick={() => {
                      setSelectedTextbookChapter('k8-bab2');
                      setShowKelas7Sem1Detail(true);
                    }}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                      selectedTextbookChapter === 'k8-bab2'
                        ? 'bg-amber-400 text-amber-950 shadow-md font-black'
                        : 'bg-white/15 text-white hover:bg-white/25'
                    }`}
                  >
                    <span>✨ Kls VIII Bab 2: Iman Kitab-Kitab Allah</span>
                    <span className="px-1.5 py-0.2 bg-emerald-900/60 text-white rounded text-[10px]">Kelas VIII</span>
                  </button>

                  <button
                    onClick={() => {
                      setSelectedTextbookChapter('k8-bab1');
                      setShowKelas7Sem1Detail(true);
                    }}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                      selectedTextbookChapter === 'k8-bab1'
                        ? 'bg-amber-400 text-amber-950 shadow-md font-black'
                        : 'bg-white/15 text-white hover:bg-white/25'
                    }`}
                  >
                    <span>🔥 Kls VIII Bab 1: Toleransi QS Al-Hujurat 13</span>
                    <span className="px-1.5 py-0.2 bg-emerald-900/60 text-white rounded text-[10px]">Kelas VIII</span>
                  </button>

                  <button
                    onClick={() => {
                      setSelectedTextbookChapter('k7-bab10');
                      setShowKelas7Sem1Detail(true);
                    }}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                      selectedTextbookChapter === 'k7-bab10'
                        ? 'bg-amber-400 text-amber-950 shadow-md font-black'
                        : 'bg-white/15 text-white hover:bg-white/25'
                    }`}
                  >
                    <span>⭐ Bab 10: Bani Umayyah Andalusia</span>
                    <span className="px-1.5 py-0.2 bg-emerald-900/60 text-white rounded text-[10px]">Sem 2 Baru</span>
                  </button>

                  <button
                    onClick={() => {
                      setSelectedTextbookChapter('k7-bab9');
                      setShowKelas7Sem1Detail(true);
                    }}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                      selectedTextbookChapter === 'k7-bab9'
                        ? 'bg-amber-400 text-amber-950 shadow-md font-black'
                        : 'bg-white/15 text-white hover:bg-white/25'
                    }`}
                  >
                    <span>Bab 9: Ketentuan Rukhsah</span>
                    <span className="px-1.5 py-0.2 bg-emerald-900/60 text-white rounded text-[10px]">Lengkap</span>
                  </button>

                  <button
                    onClick={() => {
                      setSelectedTextbookChapter('k7-bab8');
                      setShowKelas7Sem1Detail(true);
                    }}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                      selectedTextbookChapter === 'k7-bab8'
                        ? 'bg-amber-400 text-amber-950 shadow-md font-black'
                        : 'bg-white/15 text-white hover:bg-white/25'
                    }`}
                  >
                    <span>Bab 8: Makna Bersyukur</span>
                    <span className="px-1.5 py-0.2 bg-emerald-900/60 text-white rounded text-[10px]">Lengkap</span>
                  </button>

                  <button
                    onClick={() => {
                      setSelectedTextbookChapter('k7-bab7');
                      setShowKelas7Sem1Detail(true);
                    }}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                      selectedTextbookChapter === 'k7-bab7'
                        ? 'bg-amber-400 text-amber-950 shadow-md font-black'
                        : 'bg-white/15 text-white hover:bg-white/25'
                    }`}
                  >
                    <span>Bab 7: Iman kepada Malaikat</span>
                    <span className="px-1.5 py-0.2 bg-emerald-900/60 text-white rounded text-[10px]">Sem 2 Lengkap</span>
                  </button>

                  <button
                    onClick={() => {
                      setSelectedTextbookChapter('k7-bab6');
                      setShowKelas7Sem1Detail(true);
                    }}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                      selectedTextbookChapter === 'k7-bab6'
                        ? 'bg-amber-400 text-amber-950 shadow-md font-black'
                        : 'bg-white/15 text-white hover:bg-white/25'
                    }`}
                  >
                    <span>Bab 6: Taqwa, Al-Baqarah 103, Ali 'Imran 76 & Ghunnah</span>
                    <span className="px-1.5 py-0.2 bg-emerald-900/60 text-white rounded text-[10px]">Sem 2 Lengkap</span>
                  </button>

                  <button
                    onClick={() => {
                      setSelectedTextbookChapter('k7-bab5');
                      setShowKelas7Sem1Detail(true);
                    }}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                      selectedTextbookChapter === 'k7-bab5'
                        ? 'bg-amber-400 text-amber-950 shadow-md font-black'
                        : 'bg-white/15 text-white hover:bg-white/25'
                    }`}
                  >
                    <span>Bab 5: Bani Umayyah Damaskus</span>
                    <span className="px-1.5 py-0.2 bg-emerald-900/60 text-white rounded text-[10px]">Lengkap</span>
                  </button>

                  <button
                    onClick={() => {
                      setSelectedTextbookChapter('k7-bab4');
                      setShowKelas7Sem1Detail(true);
                    }}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                      selectedTextbookChapter === 'k7-bab4'
                        ? 'bg-amber-400 text-amber-950 shadow-md font-black'
                        : 'bg-white/15 text-white hover:bg-white/25'
                    }`}
                  >
                    <span>Bab 4: Macam-Macam Sujud</span>
                    <span className="px-1.5 py-0.2 bg-emerald-900/60 text-white rounded text-[10px]">Lengkap</span>
                  </button>

                  <button
                    onClick={() => {
                      setSelectedTextbookChapter('k7-bab3');
                      setShowKelas7Sem1Detail(true);
                    }}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                      selectedTextbookChapter === 'k7-bab3'
                        ? 'bg-amber-400 text-amber-950 shadow-md font-black'
                        : 'bg-white/15 text-white hover:bg-white/25'
                    }`}
                  >
                    <span>Bab 3: Makna Ikhlas Sehari-hari</span>
                  </button>

                  <button
                    onClick={() => {
                      setSelectedTextbookChapter('k7-bab2');
                      setShowKelas7Sem1Detail(true);
                    }}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                      selectedTextbookChapter === 'k7-bab2'
                        ? 'bg-amber-400 text-amber-950 shadow-md font-black'
                        : 'bg-white/15 text-white hover:bg-white/25'
                    }`}
                  >
                    <span>Bab 2: Meneladani Asmaul Husna</span>
                  </button>

                  <button
                    onClick={() => {
                      setSelectedTextbookChapter('k7-bab1');
                      setShowKelas7Sem1Detail(true);
                    }}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                      selectedTextbookChapter === 'k7-bab1'
                        ? 'bg-amber-400 text-amber-950 shadow-md font-black'
                        : 'bg-white/15 text-white hover:bg-white/25'
                    }`}
                  >
                    <span>Bab 1: Al-Qur\'an & Sunnah (Tajwid Alif Lam)</span>
                  </button>
                </div>

                {showKelas7Sem1Detail && (
                  <div className="pt-3">
                    {selectedTextbookChapter === 'k8-bab7' ? (
                      <BukuPaiKelas8Sem2Bab7Detail onAskAI={askMasterkuAI} />
                    ) : selectedTextbookChapter === 'k8-bab6' ? (
                      <BukuPaiKelas8Sem2Bab6Detail onAskAI={askMasterkuAI} />
                    ) : selectedTextbookChapter === 'k8-bab5' ? (
                      <BukuPaiKelas8Sem1Bab5Detail onAskAI={askMasterkuAI} />
                    ) : selectedTextbookChapter === 'k8-bab4' ? (
                      <BukuPaiKelas8Sem1Bab4Detail onAskAI={askMasterkuAI} />
                    ) : selectedTextbookChapter === 'k8-bab3' ? (
                      <BukuPaiKelas8Sem1Bab3Detail onAskAI={askMasterkuAI} />
                    ) : selectedTextbookChapter === 'k8-bab2' ? (
                      <BukuPaiKelas8Sem1Bab2Detail onAskAI={askMasterkuAI} />
                    ) : selectedTextbookChapter === 'k8-bab1' ? (
                      <BukuPaiKelas8Sem1Bab1Detail onAskAI={askMasterkuAI} />
                    ) : selectedTextbookChapter === 'k7-bab10' ? (
                      <BukuPaiKelas7Sem2Bab10Detail onAskAI={askMasterkuAI} />
                    ) : selectedTextbookChapter === 'k7-bab9' ? (
                      <BukuPaiKelas7Sem2Bab9Detail onAskAI={askMasterkuAI} />
                    ) : selectedTextbookChapter === 'k7-bab8' ? (
                      <BukuPaiKelas7Sem2Bab8Detail onAskAI={askMasterkuAI} />
                    ) : selectedTextbookChapter === 'k7-bab7' ? (
                      <BukuPaiKelas7Sem2Bab7Detail onAskAI={askMasterkuAI} />
                    ) : selectedTextbookChapter === 'k7-bab6' ? (
                      <BukuPaiKelas7Sem2Bab6Detail onAskAI={askMasterkuAI} />
                    ) : selectedTextbookChapter === 'k7-bab5' ? (
                      <BukuPaiKelas7Sem1Bab5Detail onAskAI={askMasterkuAI} />
                    ) : selectedTextbookChapter === 'k7-bab4' ? (
                      <BukuPaiKelas7Sem1Bab4Detail onAskAI={askMasterkuAI} />
                    ) : selectedTextbookChapter === 'k7-bab3' ? (
                      <BukuPaiKelas7Sem1Bab3Detail onAskAI={askMasterkuAI} />
                    ) : selectedTextbookChapter === 'k7-bab2' ? (
                      <BukuPaiKelas7Sem1Bab2Detail onAskAI={askMasterkuAI} />
                    ) : (
                      <BukuPaiKelas7Sem1Detail onAskAI={askMasterkuAI} />
                    )}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Chapter Accordion / Cards */}
          <div className="space-y-4">
            {filteredBuku.map((chapter) => {
              const isExpanded = expandedChapterId === chapter.id;
              return (
                <div
                  key={chapter.id}
                  className={`bg-white rounded-2xl border transition-all overflow-hidden ${
                    isExpanded ? 'border-emerald-500 shadow-md' : 'border-slate-200 shadow-xs hover:border-slate-300'
                  }`}
                >
                  {/* Chapter Header Banner */}
                  <div
                    onClick={() => setExpandedChapterId(isExpanded ? null : chapter.id)}
                    className="p-5 cursor-pointer flex items-center justify-between gap-4 hover:bg-slate-50/70 transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex flex-col items-center justify-center font-bold">
                        <span className="text-[10px] uppercase font-semibold">Bab</span>
                        <span className="text-base leading-none">{chapter.chapterNumber}</span>
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-800 font-bold text-[11px]">
                            {chapter.grade} • {chapter.semester}
                          </span>
                          <span className="px-2 py-0.5 rounded-md bg-blue-50 text-blue-800 font-medium text-[11px]">
                            {chapter.cpElement}
                          </span>
                        </div>
                        <h4 className="font-bold text-slate-900 text-base mt-1">
                          {chapter.title}
                        </h4>
                        <p className="text-xs text-slate-500 mt-0.5">
                          Dalil: <span className="font-semibold text-slate-700">{chapter.mainDalil}</span>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          askMasterkuAI(
                            `Rangkumkan materi PAI Bab ${chapter.chapterNumber} (${chapter.title}) untuk ${chapter.grade} dan berikan 3 contoh soal latihan beserta pembahasannya!`
                          );
                        }}
                        className="px-3 py-1.5 rounded-xl bg-amber-100 hover:bg-amber-200 text-amber-900 text-xs font-bold flex items-center gap-1.5 transition-all shadow-xs"
                      >
                        <Bot className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">Tutor Bab AI</span>
                      </button>

                      <div className={`p-1.5 rounded-full transition-transform ${isExpanded ? 'rotate-90 bg-emerald-100 text-emerald-700' : 'text-slate-400'}`}>
                        <ChevronRight className="w-5 h-5" />
                      </div>
                    </div>
                  </div>

                  {/* Expanded Content Details */}
                  {isExpanded && (
                    <div className="p-6 pt-2 border-t border-slate-100 bg-slate-50/40 space-y-5">
                      {/* Special Callout for Chapters with Full Textbook */}
                      {chapter.hasFullTextbook && (
                        <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-700 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs">
                          <div className="space-y-0.5">
                            <div className="flex items-center gap-2">
                              <span className="px-2 py-0.5 rounded bg-amber-400 text-amber-950 font-black text-[10px]">
                                MATERI BUKU LENGKAP INTERAKTIF
                              </span>
                              <span className="text-xs font-bold text-emerald-100">
                                Buku Teks Resmi PAI & Budi Pekerti
                              </span>
                            </div>
                            <p className="text-xs text-white font-medium">
                              {chapter.id === 'k8-bab7'
                                ? 'Pelajari Pengertian Iman kepada Rasul & Rukun Iman ke-4, Dalil Al-Qur\'an (Q.S. An-Nisā\' [4]: 136, Al-An\'ām [6]: 48, Al-Ahzāb [33]: 21) & Hadits Jibril, Daftar Lengkap 25 Nabi/Rasul, 5 Rasul Ulul Azmi (N-I-M-I-M), 5 Tugas Utama Rasul, 4 Sifat Wajib (Ṣiddīq, Amānah, Tablīgh, Faṭānah), 4 Sifat Mustahil (Kiżib, Khiyānah, Kitmān, Balādah), 1 Sifat Jaiz (Al-A\'rāḍul Basyariyyah), Studi Kasus Etika Pelajar & Kuis HOTS'
                                : chapter.id === 'k8-bab6'
                                ? 'Pelajari Q.S. An-Nisā\' [4]: 66, Hadis Cinta Makkah & Madinah, Piagam Madinah 622 M, Kaidah Lengkap Hukum Nun Sukun (نْ) & Tanwin (Idzhar Halqi, Idgham Bighunnah/Bilaghunnah, Iqlab, Ikhfa), Kamus Mufradat Perkata, 4 Keterampilan (Baca, Hafal, Tulis Naskhi, Jelaskan), 6 Hikmah & Kuis HOTS'
                                : chapter.id === 'k8-bab5'
                                ? 'Pelajari Sejarah Berdirinya Daulah Abbasiyah (3 Kota Bawah Tanah & Baghdad Kota Bundar), 10 Tokoh Penting (Harun ar-Rasyid, Al-Ma\'mun, Ibnu Sina, Al-Khawarizmi), Puncak Kejayaan The Golden Age (Baitul Hikmah, Hadiah Emas Seberat Buku, 4 Pilar Sains & Cek Suftajah), Analisis Faktor Kemunduran & Tragedi Kehancuran Baghdad 1258 M oleh Hulagu Khan, 4 Hikmah Berlandaskan Dalil, 3 Kasus Literasi Remaja, & Kuis HOTS'
                                : chapter.id === 'k8-bab4'
                                ? 'Pelajari 4 Kewajiban terhadap Jenazah (Fardhu Kifayah & Syahid Ma\'rakah), Tata Cara Shalat Jenazah 4 Takbir & Simulator Audio Doa, Ketentuan Islam (Tindakan Awal, Larangan Niyahah, Adab Takziah & Ziarah Kubur), 4 Hikmah Agung, Studi Kasus Medsos, & Kuis HOTS'
                                : chapter.id === 'k8-bab3'
                                ? 'Pelajari Pengertian Cinta Rasul & 4 Sifat Wajib Nabi, Dalil Al-Qur\'an & Hadis Shahih, 6 Pilar Perilaku Nyata & Digital Shalawat Counter, Manfaat Dunia-Akhirat (Syafaat \'Uzma), Studi Kasus Moral Remaja, serta Kuis HOTS'
                                : chapter.id === 'k8-bab2'
                                ? 'Pelajari Hakikat Iman (Ijmali & Tafshili), Dalil Al-Qur\'an & Hadis, Komparasi 4 Kitab Suci (Taurat, Zabur, Injil, Al-Qur\'an) & Suhuf Nabi, 6 Dimensi Ajaran, Al-Muhaimin, & Karakter Generasi Qur\'ani Toleran'
                                : chapter.id === 'k8-bab1'
                                ? 'Pelajari Q.S. Al-Hujurāt: 13, Q.S. Al-Baqarah: 256, Hadis Toleransi, Hukum Tajwid Lam & Ra\', Kamus Mufradat, Khat Naskhi & Soal HOTS'
                                : chapter.id === 'k7-bab10'
                                ? 'Pelajari Sejarah Berdirinya (Thariq bin Ziyad 711 M, Abdurrahman Ad-Dakhil), Masa Keemasan Cordoba Permata Dunia, Kontribusi Kedokteran (Az-Zahrawi), Filsafat (Ibnu Rusyd), Faktor Runtuh & 5 Hikmah Luhur'
                                : chapter.id === 'k7-bab9'
                                ? 'Pelajari Ketentuan Rukhsah (Bahasa & Istilah Syariat, \'Azimah vs Rukhsah, 4 Hukum & 7 Sebab Keringanan), Rukhsah 4 Ibadah (Shalat, Puasa, Zakat, Haji), Praktik Jamak Qashar & Tayamum, serta 5 Hikmah Agung'
                                : chapter.id === 'k7-bab8'
                                ? 'Pelajari Pengertian Syukur (Bahasa & Syariat), Dalil Naqli Q.S. Ibrahim: 7 & Luqman: 12, Contoh Perilaku 3 Dimensi (Hati, Lisan, Fisik), 4 Manfaat & 5 Hikmah Luhur'
                                : chapter.id === 'k7-bab7'
                                ? 'Pelajari Pengertian Iman (Bahasa & Syariat), Dalil Naqli Al-Qur\'an & Hadis, 10 Malaikat & Rincian Tugasnya, Karakteristik Sifat Malaikat, serta 6 Hikmah & Instrumen Mawas Diri'
                                : chapter.id === 'k7-bab6'
                                ? 'Pelajari Membaca Tartil, Menghafal Takrar, Menulis Khat Naskhi, Q.S. Al-Baqarah: 103, Ali \'Imran: 76, Tajwid Ghunnah, Mufradat & Hadis Taqwa'
                                : chapter.id === 'k7-bab5'
                                ? 'Pelajari Sejarah Berdirinya (\'Amul Jama\'ah 41 H), 6 Khalifah Penting, Kemajuan Peradaban 3 Benua, Faktor Runtuh & Hikmah'
                                : chapter.id === 'k7-bab4'
                                ? 'Pelajari Sujud Syukur, Sujud Sahwi, Sujud Tilawah, Bacaan Doa, Tata Cara Praktik, 15 Ayat Sajdah & Hikmah'
                                : chapter.id === 'k7-bab3'
                                ? 'Pelajari Pengertian Ikhlas, Dalil Naqli Al-Qur\'an & Hadis, Contoh Perilaku Nyata Sehari-hari, serta Manfaat & Hikmah'
                                : chapter.id === 'k7-bab2'
                                ? 'Pelajari Hakikat Iman, Pengertian Asmaul Husna, Makna Al-\'Alīm, As-Samī\', Al-Baṣīr, Al-Khabīr, serta Contoh Perilaku Sehari-hari'
                                : 'Pelajari Q.S. An-Nisā’: 136, Q.S. Al-Anfāl: 2-4, 3 Hadis Iman, Kaidah Alif Lam, & Kamus Mufradat Perkata'}
                            </p>
                          </div>
                          <button
                            onClick={() => {
                              if (chapter.id === 'k8-bab7') {
                                setSelectedTextbookChapter('k8-bab7');
                              } else if (chapter.id === 'k8-bab6') {
                                setSelectedTextbookChapter('k8-bab6');
                              } else if (chapter.id === 'k8-bab5') {
                                setSelectedTextbookChapter('k8-bab5');
                              } else if (chapter.id === 'k8-bab4') {
                                setSelectedTextbookChapter('k8-bab4');
                              } else if (chapter.id === 'k8-bab3') {
                                setSelectedTextbookChapter('k8-bab3');
                              } else if (chapter.id === 'k8-bab2') {
                                setSelectedTextbookChapter('k8-bab2');
                              } else if (chapter.id === 'k8-bab1') {
                                setSelectedTextbookChapter('k8-bab1');
                              } else if (chapter.id === 'k7-bab10') {
                                setSelectedTextbookChapter('k7-bab10');
                              } else if (chapter.id === 'k7-bab9') {
                                setSelectedTextbookChapter('k7-bab9');
                              } else if (chapter.id === 'k7-bab8') {
                                setSelectedTextbookChapter('k7-bab8');
                              } else if (chapter.id === 'k7-bab7') {
                                setSelectedTextbookChapter('k7-bab7');
                              } else if (chapter.id === 'k7-bab6') {
                                setSelectedTextbookChapter('k7-bab6');
                              } else if (chapter.id === 'k7-bab5') {
                                setSelectedTextbookChapter('k7-bab5');
                              } else if (chapter.id === 'k7-bab4') {
                                setSelectedTextbookChapter('k7-bab4');
                              } else if (chapter.id === 'k7-bab3') {
                                setSelectedTextbookChapter('k7-bab3');
                              } else if (chapter.id === 'k7-bab2') {
                                setSelectedTextbookChapter('k7-bab2');
                              } else {
                                setSelectedTextbookChapter('k7-bab1');
                              }
                              setShowKelas7Sem1Detail(true);
                              window.scrollTo({ top: 350, behavior: 'smooth' });
                            }}
                            className="px-3.5 py-2 rounded-xl bg-white text-emerald-900 hover:bg-emerald-50 font-bold text-xs flex items-center justify-center gap-1.5 whitespace-nowrap shadow-xs cursor-pointer"
                          >
                            <BookOpen className="w-3.5 h-3.5 text-emerald-700" />
                            <span>Buka Buku Interaktif</span>
                          </button>
                        </div>
                      )}

                      {/* Summary */}
                      <div className="bg-white rounded-xl p-4 border border-slate-200/80 space-y-2">
                        <p className="font-bold text-slate-800 text-xs flex items-center gap-1.5">
                          <Bookmark className="w-4 h-4 text-emerald-600" />
                          Ringkasan Materi Esensial:
                        </p>
                        <p className="text-sm text-slate-700 leading-relaxed">
                          {chapter.summary}
                        </p>
                      </div>

                      {/* Learning Objectives */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-white rounded-xl p-4 border border-slate-200/80 space-y-2">
                          <p className="font-bold text-slate-800 text-xs flex items-center gap-1.5">
                            <GraduationCap className="w-4 h-4 text-blue-600" />
                            Tujuan Pembelajaran (Capaian Pembelajaran 2026):
                          </p>
                          <ul className="list-disc list-inside space-y-1 text-xs text-slate-600">
                            {chapter.learningObjectives.map((obj, i) => (
                              <li key={i} className="leading-relaxed">{obj}</li>
                            ))}
                          </ul>
                        </div>

                        {/* Key Terms */}
                        <div className="bg-white rounded-xl p-4 border border-slate-200/80 space-y-2">
                          <p className="font-bold text-slate-800 text-xs flex items-center gap-1.5">
                            <Layers className="w-4 h-4 text-purple-600" />
                            Kata Kunci & Glosarium Konsep:
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {chapter.keyTerms.map((term, i) => (
                              <span
                                key={i}
                                className="px-2.5 py-1 rounded-lg bg-purple-50 text-purple-700 text-xs font-semibold border border-purple-100"
                              >
                                #{term}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Student Activities & Reflection */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-4 space-y-2">
                          <p className="font-bold text-emerald-900 text-xs flex items-center gap-1.5">
                            <Star className="w-4 h-4 text-emerald-600" />
                            Aktivitas & Proyek Belajar Siswa:
                          </p>
                          <ul className="list-disc list-inside space-y-1 text-xs text-emerald-800">
                            {chapter.studentActivities.map((act, i) => (
                              <li key={i} className="leading-relaxed">{act}</li>
                            ))}
                          </ul>
                        </div>

                        <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-4 space-y-2">
                          <p className="font-bold text-amber-900 text-xs flex items-center gap-1.5">
                            <HeartHandshake className="w-4 h-4 text-amber-600" />
                            Pertanyaan Refleksi Karakter:
                          </p>
                          <ul className="list-disc list-inside space-y-1 text-xs text-amber-800">
                            {chapter.reflectionQuestions.map((q, i) => (
                              <li key={i} className="leading-relaxed italic">"{q}"</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 4: SEJARAH 25 NABI & RASUL */}
      {/* ========================================================================= */}
      {activeTab === 'nabi' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: List of 25 Prophets */}
          <div className="lg:col-span-4 space-y-3">
            <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-slate-800 text-sm flex items-center gap-2">
                  <Compass className="w-4 h-4 text-emerald-600" />
                  Silsilah 25 Nabi & Rasul
                </h3>
                <button
                  onClick={() => setFilterUlulAzmiOnly(!filterUlulAzmiOnly)}
                  className={`text-xs px-2.5 py-1 rounded-lg font-semibold transition-all border ${
                    filterUlulAzmiOnly
                      ? 'bg-amber-500 text-white border-amber-500'
                      : 'bg-slate-100 text-slate-600 border-slate-200 hover:bg-slate-200'
                  }`}
                >
                  ⭐ {filterUlulAzmiOnly ? 'Semua Nabi' : 'Ulul Azmi'}
                </button>
              </div>

              <div className="space-y-1.5 max-h-[600px] overflow-y-auto pr-1">
                {filteredNabi.map((nabi) => {
                  const isSelected = nabi.order === selectedNabiOrder;
                  return (
                    <button
                      key={nabi.order}
                      onClick={() => setSelectedNabiOrder(nabi.order)}
                      className={`w-full p-2.5 rounded-xl text-left transition-all flex items-center justify-between border ${
                        isSelected
                          ? 'bg-emerald-50 border-emerald-500 shadow-xs'
                          : 'bg-white border-slate-100 hover:border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs ${
                            isSelected
                              ? 'bg-emerald-600 text-white'
                              : 'bg-slate-100 text-slate-600'
                          }`}
                        >
                          {nabi.order}
                        </span>
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className={`text-sm font-bold ${isSelected ? 'text-emerald-900' : 'text-slate-800'}`}>
                              {nabi.name}
                            </span>
                            {nabi.isUlulAzmi && (
                              <span className="text-[10px] bg-amber-100 text-amber-800 font-bold px-1.5 py-0.2 rounded-md">
                                Ulul Azmi
                              </span>
                            )}
                          </div>
                          <p className="text-[11px] text-slate-400 truncate max-w-[170px]">
                            {nabi.epithet}
                          </p>
                        </div>
                      </div>

                      <span className="font-arabic text-base text-emerald-800 font-bold">
                        {nabi.arabicName}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Selected Prophet Detail Card */}
          <div className="lg:col-span-8 space-y-4">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-5">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800">
                      Nabi ke-{currentNabi.order} dari 25
                    </span>
                    {currentNabi.isUlulAzmi && (
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-400 text-slate-950 flex items-center gap-1 shadow-xs">
                        <Star className="w-3 h-3 fill-current" />
                        Rasul Ulul Azmi
                      </span>
                    )}
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">
                    {currentNabi.name}
                  </h2>
                  <p className="text-sm font-semibold text-emerald-700 mt-0.5">
                    {currentNabi.epithet}
                  </p>
                </div>

                <div className="text-right">
                  <div className="font-arabic text-4xl text-emerald-800 font-bold">
                    {currentNabi.arabicName}
                  </div>
                  <p className="text-xs text-slate-400 mt-1">
                    Disebut {currentNabi.quranMentionCount}x dalam Al-Qur'an
                  </p>
                </div>
              </div>

              {/* Quick Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <span className="text-slate-400 block font-medium">Masa & Tempat Dakwah:</span>
                  <span className="font-bold text-slate-800">{currentNabi.periodAndPlace}</span>
                </div>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <span className="text-slate-400 block font-medium">Kaum Sasaran Dakwah:</span>
                  <span className="font-bold text-slate-800">{currentNabi.targetPeople}</span>
                </div>
              </div>

              {/* Dalil Ayat Al-Qur'an */}
              <div className="bg-emerald-50/80 border border-emerald-200/80 rounded-xl p-4 text-xs">
                <p className="font-bold text-emerald-900 flex items-center gap-1.5 mb-1">
                  <BookMarked className="w-4 h-4 text-emerald-600" />
                  Rujukan Dalil dalam Al-Qur'an:
                </p>
                <p className="text-emerald-800 font-medium">{currentNabi.quranVerse}</p>
              </div>

              {/* Mukjizat Utama */}
              <div className="space-y-2">
                <h4 className="font-bold text-slate-800 text-sm flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  Mukjizat & Karunia Utama:
                </h4>
                <div className="grid grid-cols-1 gap-2">
                  {currentNabi.miracles.map((m, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-amber-50/60 border border-amber-200/70 text-xs text-amber-950 font-medium"
                    >
                      <span className="w-5 h-5 rounded-full bg-amber-200 text-amber-900 font-bold flex items-center justify-center shrink-0 text-[10px]">
                        {i + 1}
                      </span>
                      <span className="leading-relaxed">{m}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Kisah Perjuangan Dakwah */}
              <div className="space-y-2">
                <h4 className="font-bold text-slate-800 text-sm flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-emerald-600" />
                  Ringkasan Kisah Perjuangan:
                </h4>
                <div className="bg-white p-4 rounded-xl border border-slate-200 text-sm text-slate-700 leading-relaxed">
                  {currentNabi.storySummary}
                </div>
              </div>

              {/* Keteladanan Akhlak bagi Siswa */}
              <div className="space-y-2">
                <h4 className="font-bold text-slate-800 text-sm flex items-center gap-2">
                  <HeartHandshake className="w-4 h-4 text-rose-500" />
                  Keteladanan Akhlak untuk Pelajar SMP:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {currentNabi.moralLessons.map((lesson, i) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-1"
                    >
                      <span className="font-bold text-emerald-700 block">Nilai #{i + 1}</span>
                      <p className="leading-relaxed">{lesson}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2 flex justify-end">
                <button
                  onClick={() =>
                    askMasterkuAI(
                      `Ceritakan lebih lengkap kisah Nabi ${currentNabi.name} dan bagaimana hikmahnya dapat diterapkan siswa SMP saat belajar dan berteman di sekolah!`
                    )
                  }
                  className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-2 transition-all shadow-xs"
                >
                  <Bot className="w-4 h-4" />
                  Tanya Masterku AI tentang {currentNabi.name}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 5: KISAH TELADAN (SAHABAT, TABI'IN, ULAMA) */}
      {/* ========================================================================= */}
      {activeTab === 'teladan' && (
        <div className="space-y-6">
          {/* Category Selector Filter */}
          <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-slate-500 flex items-center gap-1">
                <Filter className="w-3.5 h-3.5" />
                Kategori Tokoh:
              </span>
              {(['Semua', 'Sahabat Nabi', 'Tabi\'in', 'Ulama & Cendekiawan'] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedTeladanCategory(cat)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all border ${
                    selectedTeladanCategory === cat
                      ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <span className="text-xs text-slate-400 font-medium">
              Menampilkan {filteredTeladan.length} Tokoh Inspiratif
            </span>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredTeladan.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs hover:border-emerald-400 hover:shadow-md transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                        item.category === 'Sahabat Nabi'
                          ? 'bg-emerald-100 text-emerald-800'
                          : item.category === 'Tabi\'in'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-purple-100 text-purple-800'
                      }`}
                    >
                      {item.category}
                    </span>
                    <span className="text-[11px] text-slate-400">{item.lifeSpan}</span>
                  </div>

                  <div>
                    <h3 className="font-extrabold text-slate-900 text-lg">
                      {item.name}
                    </h3>
                    <p className="text-xs font-semibold text-emerald-700">
                      {item.epithet}
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5 font-medium">
                      {item.role}
                    </p>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-4">
                    {item.coreStory}
                  </p>
                </div>

                <div className="space-y-3 pt-3 border-t border-slate-100">
                  {/* Virtues Tags */}
                  <div className="flex flex-wrap gap-1">
                    {item.keyVirtues.slice(0, 2).map((v, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[10px] font-medium"
                      >
                        ✓ {v}
                      </span>
                    ))}
                  </div>

                  {/* Student Inspiration */}
                  <div className="bg-emerald-50/70 border border-emerald-100 rounded-xl p-2.5 text-xs text-emerald-900">
                    <span className="font-bold block text-[11px] text-emerald-800">Inspirasi Pelajar:</span>
                    <p className="mt-0.5 leading-snug">{item.studentInspiration}</p>
                  </div>

                  <button
                    onClick={() =>
                      askMasterkuAI(
                        `Ceritakan keteladanan ${item.name} (${item.epithet}) secara mendalam dan bagaimana kisahnya dapat memotivasi siswa SMP dalam belajar dan berbakti!`
                      )
                    }
                    className="w-full py-2 rounded-xl bg-slate-100 hover:bg-emerald-600 hover:text-white text-slate-700 font-bold text-xs flex items-center justify-center gap-1.5 transition-all"
                  >
                    <Bot className="w-3.5 h-3.5" />
                    Pelajari bersama AI
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MASTERKU AI INTERACTIVE DRAWER / FLOATING MODAL */}
      {/* ========================================================================= */}
      {isAiOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[85vh] animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-emerald-700 to-teal-800 text-white p-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-white/15 flex items-center justify-center backdrop-blur-xs">
                  <Bot className="w-6 h-6 text-amber-300" />
                </div>
                <div>
                  <h3 className="font-extrabold text-base leading-tight flex items-center gap-2">
                    Masterku AI Tutor
                    <span className="px-2 py-0.2 rounded-full bg-amber-400 text-slate-900 text-[10px] font-black">
                      PAI SMP
                    </span>
                  </h3>
                  <p className="text-xs text-emerald-100/80">
                    Asisten Pembelajaran Berbasis Al-Qur'an, Hadits, & CP 2026
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsAiOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-sm font-bold transition-all"
              >
                ✕
              </button>
            </div>

            {/* Chat Messages Body */}
            <div className="flex-1 p-5 overflow-y-auto space-y-4 bg-slate-50/50">
              {aiMessages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.sender === 'ai' && (
                    <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 mt-1 shadow-xs">
                      <Bot className="w-4 h-4" />
                    </div>
                  )}

                  <div
                    className={`max-w-[85%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed whitespace-pre-wrap ${
                      msg.sender === 'user'
                        ? 'bg-emerald-600 text-white rounded-tr-none shadow-sm'
                        : 'bg-white text-slate-800 border border-slate-200 rounded-tl-none shadow-xs'
                    }`}
                  >
                    {msg.text}
                  </div>

                  {msg.sender === 'user' && (
                    <div className="w-8 h-8 rounded-xl bg-slate-800 text-white flex items-center justify-center shrink-0 mt-1 shadow-xs">
                      <User className="w-4 h-4" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Suggested Prompts */}
            <div className="p-3 border-t border-slate-100 bg-white flex items-center gap-2 overflow-x-auto scrollbar-none">
              <span className="text-[11px] font-bold text-slate-400 shrink-0">Coba tanya:</span>
              {[
                'Materi Bab 8 PAI Kelas 7 (Makna Bersyukur)',
                'Pengertian Syukur (Bahasa, Istilah & 3 Tingkatan)',
                'Dalil Naqli Syukur (Q.S. Ibrahim: 7 & Luqman: 12)',
                'Contoh Perilaku Syukur Pelajar (Hati, Lisan, Fisik)',
                'Manfaat Syukur bagi Kesehatan & Jiwa Remaja',
                '5 Hikmah Bersyukur & Bahaya Kufur Nikmat',
                'Materi Bab 7 PAI Kelas 7 (Iman kepada Malaikat)',
                '10 Nama Malaikat & Tugas Masing-Masing',
                'Sifat-Sifat Malaikat vs Manusia & Jin',
                'Dalil Naqli Iman kepada Malaikat (Q.S. Al-Anbiya & Qaf)',
                'Hikmah Beriman & Sikap Mawas Diri di Era Digital',
                'Materi Bab 6 PAI Kelas 7 (Taqwa & Ghunnah)',
                'Hukum Bacaan Ghunnah & Contohnya',
                'Q.S. Al-Baqarah: 103 dan Ali Imran: 76',
                'Hadis Taqwa di Mana Pun Berada',
                'Hikmah Menepati Janji dalam Q.S. Ali Imran 76',
                'Materi Bab 5 PAI Kelas 7 (Bani Umayyah Damaskus)',
                'Sejarah Berdirinya & \'Amul Jama\'ah 41 H',
                '6 Khalifah Penting Bani Umayyah',
                'Kemajuan Daulah Umayyah 3 Benua',
                'Faktor Kemunduran Bani Umayyah Damaskus',
                'Materi Bab 4 PAI Kelas 7 (Macam Sujud)',
                'Materi Bab 3 PAI Kelas 7 (Ikhlas)',
                'Materi Bab 2 PAI Kelas 7 (Asmaul Husna)'
              ].map((prompt, i) => (
                <button
                  key={i}
                  onClick={() => askMasterkuAI(prompt)}
                  className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-emerald-50 hover:text-emerald-700 text-slate-600 text-[11px] whitespace-nowrap transition-all"
                >
                  {prompt}
                </button>
              ))}
            </div>

            {/* Input Bar */}
            <div className="p-4 border-t border-slate-200 bg-white flex items-center gap-2">
              <input
                type="text"
                value={aiInput}
                onChange={(e) => setAiInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendAi()}
                placeholder="Tanyakan hal apa pun seputar Al-Qur'an, Hadits, Buku PAI..."
                className="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 focus:border-emerald-500 text-sm outline-none bg-slate-50 focus:bg-white transition-all"
              />
              <button
                onClick={handleSendAi}
                disabled={!aiInput.trim()}
                className="p-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white transition-all shadow-xs"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
