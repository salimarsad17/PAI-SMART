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
  const [selectedBukuGrade, setSelectedBukuGrade] = useState<'Semua' | 'Kelas VII' | 'Kelas VIII' | 'Kelas IX'>('Kelas VII');
  const [selectedBukuElement, setSelectedBukuElement] = useState<string>('Semua');
  const [expandedChapterId, setExpandedChapterId] = useState<string | null>('k7-bab4');
  const [showKelas7Sem1Detail, setShowKelas7Sem1Detail] = useState<boolean>(true);
  const [selectedTextbookChapter, setSelectedTextbookChapter] = useState<'k7-bab1' | 'k7-bab2' | 'k7-bab3' | 'k7-bab4'>('k7-bab4');

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

      // ==================== BAB 4: KETENTUAN MACAM-MACAM SUJUD ====================
      if (
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
          {/* SPECIAL FULL TEXTBOOK VIEWER FOR KELAS VII SEMESTER 1 */}
          {/* ========================================================================= */}
          {(selectedBukuGrade === 'Kelas VII' || selectedBukuGrade === 'Semua') && (
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-emerald-800 via-teal-800 to-slate-900 rounded-2xl p-5 sm:p-6 text-white shadow-lg space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1.5 max-w-2xl">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-amber-400 text-amber-950 font-black text-[11px] tracking-wide">
                        BUKU PELAJARAN PAI INTERAKTIF
                      </span>
                      <span className="text-xs text-emerald-200 font-semibold">
                        Kelas VII • Semester 1
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-black text-white">
                      {selectedTextbookChapter === 'k7-bab4'
                        ? 'Bab 4: Menerapkan Ketentuan Macam-Macam Sujud di Luar Rukun Salat (Sujud Syukur, Sujud Sahwi, Sujud Tilawah, 15 Ayat Sajdah & Hikmah)'
                        : selectedTextbookChapter === 'k7-bab3'
                        ? 'Bab 3: Menerapkan Makna Ikhlas dalam Kehidupan Sehari-hari (Pengertian, Dalil Naqli, Contoh Perilaku & Hikmah)'
                        : selectedTextbookChapter === 'k7-bab2'
                        ? 'Bab 2: Meneladani Asmaul Husna (Hakikat Iman, Makna Al-\'Alīm, As-Samī\', Al-Baṣīr, Al-Khabīr & Perilaku Sehari-hari)'
                        : 'Bab 1: Merengkuh Hakikat Iman (Q.S. An-Nisā’: 136, Q.S. Al-Anfāl: 2-4, Hadis Keimanan & Tajwid Alif Lam)'}
                    </h3>
                    <p className="text-xs text-emerald-100/90 leading-relaxed">
                      {selectedTextbookChapter === 'k7-bab4'
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
                      setSelectedTextbookChapter('k7-bab4');
                      setShowKelas7Sem1Detail(true);
                    }}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                      selectedTextbookChapter === 'k7-bab4'
                        ? 'bg-amber-400 text-amber-950 shadow-md font-black'
                        : 'bg-white/15 text-white hover:bg-white/25'
                    }`}
                  >
                    <span>⭐ Bab 4: Macam-Macam Sujud</span>
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
                    {selectedTextbookChapter === 'k7-bab4' ? (
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
                              {chapter.id === 'k7-bab4'
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
                              if (chapter.id === 'k7-bab4') {
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
                'Materi Bab 4 PAI Kelas 7 (Macam Sujud)',
                'Pengertian Sujud Syukur, Sahwi & Tilawah',
                'Bacaan sujud sahwi & sujud tilawah',
                'Tata cara sujud syukur di luar salat',
                '15 Ayat Sajdah dalam Al-Qur\'an',
                'Manfaat dan hikmah sujud',
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
