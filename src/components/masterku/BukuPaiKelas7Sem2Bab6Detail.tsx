import React, { useState, useMemo, useRef, useEffect } from 'react';
import {
  BookOpen,
  Volume2,
  Play,
  Pause,
  Copy,
  Check,
  Search,
  Bot,
  HelpCircle,
  Sparkles,
  Bookmark,
  Share2,
  GraduationCap,
  Layers,
  HeartHandshake,
  CheckCircle2,
  XCircle,
  RotateCcw,
  FileText,
  ListOrdered,
  BookMarked,
  PenTool,
  Eraser,
  Download,
  Award,
  ShieldCheck,
  ArrowRight,
  Eye,
  EyeOff
} from 'lucide-react';
import {
  MATERI_KELAS_7_SEM_2_BAB_6,
  MufradatWord
} from '../../data/materiKelas7Sem2Bab6Data';
import { useToast } from '../common/Toast';

interface Props {
  onAskAI: (prompt: string) => void;
}

type SubTabType = 'membaca' | 'menghafal' | 'menulis' | 'mufradat' | 'hadits' | 'hikmah' | 'kuis';

export const BukuPaiKelas7Sem2Bab6Detail: React.FC<Props> = ({ onAskAI }) => {
  const { showToast } = useToast();
  const [activeSubTab, setActiveSubTab] = useState<SubTabType>('membaca');

  // Audio Playback
  const [currentAudioUrl, setCurrentAudioUrl] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Mufradat State
  const [mufradatSource, setMufradatSource] = useState<'all' | 'baqarah' | 'ali_imran' | 'ghunnah_only'>('all');
  const [mufradatSearch, setMufradatSearch] = useState('');
  const [mufradatViewMode, setMufradatViewMode] = useState<'table' | 'cards'>('table');
  const [revealedCardId, setRevealedCardId] = useState<string | null>(null);

  // Tahfidz State
  const [hideArabicTahfidz, setHideArabicTahfidz] = useState<boolean>(false);
  const [hideArtiTahfidz, setHideArtiTahfidz] = useState<boolean>(false);
  const [checkedTahfidz, setCheckedTahfidz] = useState<Record<string, boolean>>({});

  // Canvas Menulis State
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [penColor, setPenColor] = useState('#0f766e');
  const [penWidth, setPenWidth] = useState(3);
  const [selectedTemplateKhat, setSelectedTemplateKhat] = useState<'annahum' | 'fainna' | 'baqarah' | 'ali_imran'>('annahum');

  // Kuis HOTS State
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});
  const [showKuisResult, setShowKuisResult] = useState(false);

  // Handle Audio Playback
  const handlePlayAudio = (url?: string) => {
    if (!url) {
      showToast('Audio tilawah belum tersedia untuk ayat ini', 'info');
      return;
    }

    if (currentAudioUrl === url) {
      audioRef.current?.pause();
      setCurrentAudioUrl(null);
      return;
    }

    if (audioRef.current) {
      audioRef.current.pause();
    }

    const audio = new Audio(url);
    audioRef.current = audio;
    setCurrentAudioUrl(url);

    audio.play().catch(() => {
      showToast('Gagal memutar audio tilawah. Periksa koneksi internet.', 'error');
      setCurrentAudioUrl(null);
    });

    audio.onended = () => {
      setCurrentAudioUrl(null);
    };
  };

  const copyText = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    showToast(`${label} berhasil disalin!`, 'success');
  };

  // Canvas Setup
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    // Set background to white
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    // Draw guide lines
    drawGuideLines(ctx, canvas.width, canvas.height);
  }, [activeSubTab, selectedTemplateKhat]);

  const drawGuideLines = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    ctx.strokeStyle = '#e2e8f0';
    ctx.lineWidth = 1;
    ctx.setLineDash([5, 5]);

    // Draw horizontal dashed baseline
    const midY = height / 2;
    ctx.beginPath();
    ctx.moveTo(0, midY);
    ctx.lineTo(width, midY);
    ctx.stroke();

    // Reset dash
    ctx.setLineDash([]);
  };

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    setIsDrawing(true);
    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    ctx.strokeStyle = penColor;
    ctx.lineWidth = penWidth;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    drawGuideLines(ctx, canvas.width, canvas.height);
    showToast('Kanvas telah dibersihkan', 'info');
  };

  const downloadCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement('a');
    link.download = `Latihan-Menulis-Khat-Bab6-${selectedTemplateKhat}.png`;
    link.href = canvas.toDataURL();
    link.click();
    showToast('Hasil tulisan berhasil diunduh!', 'success');
  };

  // Filtered Mufradat
  const filteredMufradat = useMemo(() => {
    let list: MufradatWord[] = [];
    if (mufradatSource === 'all') {
      list = [...MATERI_KELAS_7_SEM_2_BAB_6.mufradatList.alBaqarah103, ...MATERI_KELAS_7_SEM_2_BAB_6.mufradatList.aliImran76];
    } else if (mufradatSource === 'baqarah') {
      list = MATERI_KELAS_7_SEM_2_BAB_6.mufradatList.alBaqarah103;
    } else if (mufradatSource === 'ali_imran') {
      list = MATERI_KELAS_7_SEM_2_BAB_6.mufradatList.aliImran76;
    } else if (mufradatSource === 'ghunnah_only') {
      list = [
        ...MATERI_KELAS_7_SEM_2_BAB_6.mufradatList.alBaqarah103.filter(w => w.isGhunnah),
        ...MATERI_KELAS_7_SEM_2_BAB_6.mufradatList.aliImran76.filter(w => w.isGhunnah)
      ];
    }

    if (!mufradatSearch.trim()) return list;

    const q = mufradatSearch.toLowerCase();
    return list.filter(
      item =>
        item.arabic.includes(q) ||
        item.latin.toLowerCase().includes(q) ||
        item.meaning.toLowerCase().includes(q) ||
        (item.tajwidHint && item.tajwidHint.toLowerCase().includes(q))
    );
  }, [mufradatSource, mufradatSearch]);

  // Score Calculation
  const kuisScore = useMemo(() => {
    let correct = 0;
    MATERI_KELAS_7_SEM_2_BAB_6.kuisSoalHots.forEach(soal => {
      if (userAnswers[soal.id] === soal.kunciJawaban) {
        correct++;
      }
    });
    return Math.round((correct / MATERI_KELAS_7_SEM_2_BAB_6.kuisSoalHots.length) * 100);
  }, [userAnswers]);

  return (
    <div className="bg-white rounded-2xl border border-emerald-100 shadow-sm overflow-hidden mb-8">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-teal-900 via-emerald-800 to-teal-900 text-white p-6 md:p-8 relative overflow-hidden">
        <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-emerald-500/15 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute left-1/3 -top-12 w-48 h-48 bg-teal-400/10 rounded-full blur-xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3 py-1 bg-emerald-500/30 text-emerald-200 border border-emerald-400/30 rounded-full text-xs font-bold tracking-wide">
              {MATERI_KELAS_7_SEM_2_BAB_6.grade} • {MATERI_KELAS_7_SEM_2_BAB_6.semester} • Bab {MATERI_KELAS_7_SEM_2_BAB_6.babNumber}
            </span>
            <span className="px-3 py-1 bg-amber-400/25 text-amber-200 border border-amber-300/30 rounded-full text-xs font-bold flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              Al-Qur'an, Hadits & Tajwid Ghunnah
            </span>
            <span className="px-2.5 py-0.5 bg-white/15 text-white rounded text-xs font-medium">
              4 Keterampilan: Baca, Hafal, Tulis, Jelaskan
            </span>
          </div>

          <h2 className="text-2xl md:text-3xl font-black tracking-tight text-white mb-3 leading-snug">
            {MATERI_KELAS_7_SEM_2_BAB_6.babTitle}
          </h2>

          <p className="text-emerald-100/90 text-sm md:text-base leading-relaxed mb-5 max-w-3xl">
            {MATERI_KELAS_7_SEM_2_BAB_6.pengantar}
          </p>

          {/* Quick AI Trigger Buttons */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-white/15">
            <span className="text-xs font-semibold text-emerald-200 flex items-center gap-1 self-center mr-1">
              <Bot className="w-3.5 h-3.5 text-amber-300" /> Tanya AI:
            </span>
            <button
              onClick={() => onAskAI('Jelaskan materi lengkap Bab 6 PAI Kelas VII Semester 2 tentang Taqwa Q.S. Al-Baqarah 103, Ali Imran 76, dan Hukum Bacaan Ghunnah')}
              className="px-3 py-1 bg-white/10 hover:bg-white/20 text-xs text-white rounded-lg transition-colors border border-white/15 flex items-center gap-1.5 cursor-pointer"
            >
              <span>Ringkasan Materi Bab 6</span>
            </button>
            <button
              onClick={() => onAskAI('Bagaimana cara membaca hukum bacaan Ghunnah Musyaddadah dan apa saja contohnya di Q.S. Al-Baqarah 103 dan Ali Imran 76?')}
              className="px-3 py-1 bg-white/10 hover:bg-white/20 text-xs text-white rounded-lg transition-colors border border-white/15 flex items-center gap-1.5 cursor-pointer"
            >
              <span>Hukum Ghunnah & Contoh</span>
            </button>
            <button
              onClick={() => onAskAI('Jelaskan arti dan hikmah hadis Rasulullah SAW riwayat Tirmidzi No. 1987 "Ittaqillaha haitsuma kunta"')}
              className="px-3 py-1 bg-white/10 hover:bg-white/20 text-xs text-white rounded-lg transition-colors border border-white/15 flex items-center gap-1.5 cursor-pointer"
            >
              <span>Hadis Taqwa Dimanapun</span>
            </button>
            <button
              onClick={() => onAskAI('Sebutkan 6 hikmah mengamalkan ketakwaan dan menepati janji sesuai Q.S. Ali Imran ayat 76 bagi pelajar')}
              className="px-3 py-1 bg-white/10 hover:bg-white/20 text-xs text-white rounded-lg transition-colors border border-white/15 flex items-center gap-1.5 cursor-pointer"
            >
              <span>Hikmah Menepati Janji</span>
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Sub-Tabs */}
      <div className="bg-slate-50 border-b border-slate-200 px-4 md:px-6 py-2 overflow-x-auto scrollbar-none flex items-center gap-2">
        <button
          onClick={() => setActiveSubTab('membaca')}
          className={`px-4 py-2.5 rounded-xl text-xs md:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer shrink-0 ${
            activeSubTab === 'membaca'
              ? 'bg-teal-700 text-white shadow-sm'
              : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>1. Membaca & Tajwid Ghunnah</span>
        </button>

        <button
          onClick={() => setActiveSubTab('menghafal')}
          className={`px-4 py-2.5 rounded-xl text-xs md:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer shrink-0 ${
            activeSubTab === 'menghafal'
              ? 'bg-teal-700 text-white shadow-sm'
              : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>2. Menghafal (Tahfidz)</span>
        </button>

        <button
          onClick={() => setActiveSubTab('menulis')}
          className={`px-4 py-2.5 rounded-xl text-xs md:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer shrink-0 ${
            activeSubTab === 'menulis'
              ? 'bg-teal-700 text-white shadow-sm'
              : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          <PenTool className="w-4 h-4" />
          <span>3. Menulis (Khat & Kanvas)</span>
        </button>

        <button
          onClick={() => setActiveSubTab('mufradat')}
          className={`px-4 py-2.5 rounded-xl text-xs md:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer shrink-0 ${
            activeSubTab === 'mufradat'
              ? 'bg-teal-700 text-white shadow-sm'
              : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          <ListOrdered className="w-4 h-4" />
          <span>4. Mufradat & Terjemah</span>
        </button>

        <button
          onClick={() => setActiveSubTab('hadits')}
          className={`px-4 py-2.5 rounded-xl text-xs md:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer shrink-0 ${
            activeSubTab === 'hadits'
              ? 'bg-teal-700 text-white shadow-sm'
              : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          <BookMarked className="w-4 h-4" />
          <span>5. Hadis Terkait Taqwa</span>
        </button>

        <button
          onClick={() => setActiveSubTab('hikmah')}
          className={`px-4 py-2.5 rounded-xl text-xs md:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer shrink-0 ${
            activeSubTab === 'hikmah'
              ? 'bg-teal-700 text-white shadow-sm'
              : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          <HeartHandshake className="w-4 h-4 text-rose-400" />
          <span>6. Hikmah & Pelajar</span>
        </button>

        <button
          onClick={() => setActiveSubTab('kuis')}
          className={`px-4 py-2.5 rounded-xl text-xs md:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer shrink-0 ${
            activeSubTab === 'kuis'
              ? 'bg-teal-700 text-white shadow-sm'
              : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          <Award className="w-4 h-4 text-amber-500" />
          <span>7. Kuis Evaluasi HOTS</span>
        </button>
      </div>

      {/* Main Content Body */}
      <div className="p-5 md:p-8">
        {/* ==================== SUB-TAB 1: MEMBACA & TAJWID GHUNNAH ==================== */}
        {activeSubTab === 'membaca' && (
          <div className="space-y-8">
            {/* Intro Box */}
            <div className="bg-teal-50/70 border border-teal-200/80 rounded-2xl p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <h3 className="font-bold text-teal-900 text-base mb-1 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-teal-700" />
                  Keterampilan 1: Membaca Q.S. Al-Baqarah: 103 dan Ali 'Imran: 76 dengan Tartil
                </h3>
                <p className="text-xs md:text-sm text-teal-800 leading-relaxed">
                  Perhatikan tanda warna khusus hukum bacaan <strong className="text-teal-950 bg-teal-200/80 px-1.5 py-0.5 rounded">Ghunnah Musyaddadah (Nun bertasydid نّ)</strong> yang wajib dibaca dengung 2 harakat di pangkal hidung (Al-Khaisyum).
                </p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => onAskAI('Jelaskan kaidah hukum bacaan Ghunnah Musyaddadah dalam ilmu tajwid beserta makhraj huruf dan cara melafalkannya')}
                  className="px-3.5 py-2 bg-teal-700 hover:bg-teal-800 text-white rounded-xl text-xs font-bold transition-all shadow-sm flex items-center gap-1.5 cursor-pointer"
                >
                  <Bot className="w-4 h-4" />
                  <span>Panduan Tajwid AI</span>
                </button>
              </div>
            </div>

            {/* AYAT 1: Q.S. Al-Baqarah: 103 */}
            <div className="bg-white border-2 border-emerald-100 rounded-2xl p-6 md:p-7 shadow-sm transition-all hover:border-teal-300">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-5 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <span className="w-8 h-8 rounded-xl bg-teal-700 text-white flex items-center justify-center font-black text-sm">
                    1
                  </span>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">
                      Q.S. Al-Baqarah (2) : Ayat 103
                    </h4>
                    <p className="text-xs text-slate-500">Pahala Taqwa Lebih Mulia daripada Tipu Daya Sihir</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handlePlayAudio(MATERI_KELAS_7_SEM_2_BAB_6.ayatAlBaqarah103.audioUrl)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                      currentAudioUrl === MATERI_KELAS_7_SEM_2_BAB_6.ayatAlBaqarah103.audioUrl
                        ? 'bg-amber-500 text-white shadow-sm animate-pulse'
                        : 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border border-emerald-200'
                    }`}
                  >
                    {currentAudioUrl === MATERI_KELAS_7_SEM_2_BAB_6.ayatAlBaqarah103.audioUrl ? (
                      <>
                        <Pause className="w-4 h-4" />
                        <span>Jeda Tilawah</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-4 h-4 text-emerald-700" />
                        <span>Putar Tilawah Qari</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => copyText(MATERI_KELAS_7_SEM_2_BAB_6.ayatAlBaqarah103.arabic, 'Q.S. Al-Baqarah: 103')}
                    className="p-2 rounded-xl text-slate-500 hover:text-slate-800 hover:bg-slate-100 border border-slate-200 transition-all cursor-pointer"
                    title="Salin Ayat Arab"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Teks Arab dengan highlight tajwid Ghunnah */}
              <div className="p-6 bg-amber-50/40 border border-amber-100/80 rounded-2xl mb-5 text-right">
                <p className="text-2xl md:text-3xl font-serif leading-loose tracking-wide text-slate-900 dir-rtl">
                  وَلَوْ <span className="bg-teal-200/90 text-teal-950 px-2 py-0.5 rounded-lg font-bold border border-teal-400/80 shadow-xs" title="Ghunnah Musyaddadah (Nun bertasydid) - Dengung 2 Harakat">أَنَّهُمْ</span> آمَنُوا وَاتَّقَوْا لَمَثُوبَةٌ مِّنْ عِندِ اللَّهِ خَيْرٌ ۖ لَّوْ كَانُوا يَعْلَمُونَ
                </p>
              </div>

              {/* Keterangan Ghunnah */}
              <div className="flex items-center gap-2 mb-4 bg-teal-50 px-3.5 py-2 rounded-xl text-xs text-teal-900 border border-teal-200">
                <Sparkles className="w-4 h-4 text-teal-700 shrink-0" />
                <span>
                  <strong>Hukum Bacaan Ghunnah:</strong> Pada kata <strong className="bg-teal-200 px-1 rounded">أَنَّهُمْ (an-nahum)</strong> wajib didengungkan di pangkal hidung selama 2 harakat karena huruf Nun bertasydid.
                </span>
              </div>

              {/* Transliterasi Latin */}
              <div className="mb-4">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                  Transliterasi Latin:
                </span>
                <p className="text-sm font-medium text-slate-700 italic bg-slate-50 p-3 rounded-xl border border-slate-100">
                  "{MATERI_KELAS_7_SEM_2_BAB_6.ayatAlBaqarah103.latin}"
                </p>
              </div>

              {/* Terjemah Kemenag */}
              <div className="mb-5">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                  Terjemah Kemenag RI:
                </span>
                <p className="text-sm text-slate-800 leading-relaxed bg-emerald-50/50 p-3.5 rounded-xl border border-emerald-100 font-medium">
                  "{MATERI_KELAS_7_SEM_2_BAB_6.ayatAlBaqarah103.translationKemenag}"
                </p>
              </div>

              {/* Kandungan Pokok */}
              <div className="pt-4 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-900 block mb-2">
                  Poin Inti Kandungan Ayat:
                </span>
                <ul className="space-y-1.5">
                  {MATERI_KELAS_7_SEM_2_BAB_6.ayatAlBaqarah103.kandunganPoin.map((pt, i) => (
                    <li key={i} className="text-xs md:text-sm text-slate-600 flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* AYAT 2: Q.S. Ali 'Imran: 76 */}
            <div className="bg-white border-2 border-emerald-100 rounded-2xl p-6 md:p-7 shadow-sm transition-all hover:border-teal-300">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-5 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <span className="w-8 h-8 rounded-xl bg-teal-700 text-white flex items-center justify-center font-black text-sm">
                    2
                  </span>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">
                      Q.S. Ali 'Imran (3) : Ayat 76
                    </h4>
                    <p className="text-xs text-slate-500">Cinta Allah bagi Orang yang Menepati Janji & Bertakwa</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handlePlayAudio(MATERI_KELAS_7_SEM_2_BAB_6.ayatAliImran76.audioUrl)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                      currentAudioUrl === MATERI_KELAS_7_SEM_2_BAB_6.ayatAliImran76.audioUrl
                        ? 'bg-amber-500 text-white shadow-sm animate-pulse'
                        : 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border border-emerald-200'
                    }`}
                  >
                    {currentAudioUrl === MATERI_KELAS_7_SEM_2_BAB_6.ayatAliImran76.audioUrl ? (
                      <>
                        <Pause className="w-4 h-4" />
                        <span>Jeda Tilawah</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-4 h-4 text-emerald-700" />
                        <span>Putar Tilawah Qari</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => copyText(MATERI_KELAS_7_SEM_2_BAB_6.ayatAliImran76.arabic, 'Q.S. Ali Imran: 76')}
                    className="p-2 rounded-xl text-slate-500 hover:text-slate-800 hover:bg-slate-100 border border-slate-200 transition-all cursor-pointer"
                    title="Salin Ayat Arab"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Teks Arab dengan highlight tajwid Ghunnah */}
              <div className="p-6 bg-amber-50/40 border border-amber-100/80 rounded-2xl mb-5 text-right">
                <p className="text-2xl md:text-3xl font-serif leading-loose tracking-wide text-slate-900 dir-rtl">
                  بَلَىٰ مَنْ أَوْفَىٰ بِعَهْدِهِ وَاتَّقَىٰ <span className="bg-teal-200/90 text-teal-950 px-2 py-0.5 rounded-lg font-bold border border-teal-400/80 shadow-xs" title="Ghunnah Musyaddadah (Nun bertasydid) - Dengung 2 Harakat">فَإِنَّ</span> اللَّهَ يُحِبُّ الْمُتَّقِينَ
                </p>
              </div>

              {/* Keterangan Ghunnah */}
              <div className="flex items-center gap-2 mb-4 bg-teal-50 px-3.5 py-2 rounded-xl text-xs text-teal-900 border border-teal-200">
                <Sparkles className="w-4 h-4 text-teal-700 shrink-0" />
                <span>
                  <strong>Hukum Bacaan Ghunnah:</strong> Pada kata <strong className="bg-teal-200 px-1 rounded">فَإِنَّ (fa\'in-na)</strong> wajib didengungkan di pangkal hidung selama 2 harakat karena huruf Nun bertasydid.
                </span>
              </div>

              {/* Transliterasi Latin */}
              <div className="mb-4">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                  Transliterasi Latin:
                </span>
                <p className="text-sm font-medium text-slate-700 italic bg-slate-50 p-3 rounded-xl border border-slate-100">
                  "{MATERI_KELAS_7_SEM_2_BAB_6.ayatAliImran76.latin}"
                </p>
              </div>

              {/* Terjemah Kemenag */}
              <div className="mb-5">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                  Terjemah Kemenag RI:
                </span>
                <p className="text-sm text-slate-800 leading-relaxed bg-emerald-50/50 p-3.5 rounded-xl border border-emerald-100 font-medium">
                  "{MATERI_KELAS_7_SEM_2_BAB_6.ayatAliImran76.translationKemenag}"
                </p>
              </div>

              {/* Kandungan Pokok */}
              <div className="pt-4 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-900 block mb-2">
                  Poin Inti Kandungan Ayat:
                </span>
                <ul className="space-y-1.5">
                  {MATERI_KELAS_7_SEM_2_BAB_6.ayatAliImran76.kandunganPoin.map((pt, i) => (
                    <li key={i} className="text-xs md:text-sm text-slate-600 flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* PANDUAN LENGKAP HUKUM BACAAN GHUNNAH */}
            <div className="bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-md">
              <div className="max-w-3xl mb-6">
                <span className="px-3 py-1 bg-amber-400/20 text-amber-300 border border-amber-400/30 rounded-full text-xs font-bold inline-flex items-center gap-1.5 mb-2">
                  <BookMarked className="w-3.5 h-3.5" /> Ilmu Tajwid PAI Kelas VII
                </span>
                <h3 className="text-xl md:text-2xl font-black text-white">
                  Pendalaman Kaidah Hukum Bacaan Ghunnah
                </h3>
                <p className="text-slate-300 text-xs md:text-sm mt-1">
                  Pelajari secara mendalam pengertian, cara pengucapan, makhraj pangkal hidung (Al-Khaisyum), dan 4 tingkatan Ghunnah.
                </p>
              </div>

              {/* Grid 2 Kolom Definisi */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white/10 p-5 rounded-2xl border border-white/10">
                  <h4 className="font-bold text-amber-300 text-sm mb-1.5 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-amber-400/20 text-amber-300 flex items-center justify-center text-xs">1</span>
                    Pengertian Secara Bahasa & Istilah
                  </h4>
                  <p className="text-xs text-slate-200 leading-relaxed mb-2">
                    <strong>Bahasa:</strong> Suara merdu atau suara dengung yang keluar dari rongga pangkal hidung (<em>Al-Khaisyum</em>).
                  </p>
                  <p className="text-xs text-slate-200 leading-relaxed">
                    <strong>Istilah:</strong> Suara dengung yang melekat pada tabiat huruf <strong>Nun (ن)</strong> dan <strong>Mim (م)</strong> dalam berbagai keadaannya.
                  </p>
                </div>

                <div className="bg-white/10 p-5 rounded-2xl border border-white/10">
                  <h4 className="font-bold text-amber-300 text-sm mb-1.5 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-amber-400/20 text-amber-300 flex items-center justify-center text-xs">2</span>
                    Ghunnah Musyaddadah & Cara Melafalkan
                  </h4>
                  <p className="text-xs text-slate-200 leading-relaxed mb-2">
                    Terjadi apabila huruf <strong>Nun bertasydid (نّ)</strong> atau <strong>Mim bertasydid (مّ)</strong> berada di tengah maupun akhir kata.
                  </p>
                  <div className="bg-emerald-950/60 p-2.5 rounded-xl border border-emerald-500/30 text-xs text-emerald-200">
                    <strong>Kadar Panjang:</strong> Wajib ditahan dan didengungkan selama <strong>2 harakat (2 ketukan)</strong> hingga 2,5 harakat.
                  </div>
                </div>
              </div>

              {/* Alat Uji Praktik Mandiri */}
              <div className="bg-teal-900/60 border border-teal-500/30 p-4 rounded-2xl mb-6 flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-teal-500/30 text-teal-300 flex items-center justify-center shrink-0 mt-0.5">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-bold text-white text-xs md:text-sm">
                    Tips Cara Memastikan Bunyi Ghunnah Sudah Tepat:
                  </h5>
                  <p className="text-xs text-teal-100 mt-1 leading-relaxed">
                    Ucapkan lafal <em>"An-nahum"</em> atau <em>"Fa'in-na"</em> sambil memencet kedua lubang hidungmu dengan jari telunjuk dan jempol. Jika suaranya langsung terputus atau tersendat sengau, berarti makhraj <strong>Al-Khaisyum</strong> sudah benar!
                  </p>
                </div>
              </div>

              {/* 4 Tingkatan Ghunnah (Maratibul Ghunnah) */}
              <div className="mb-6">
                <h4 className="font-bold text-white text-sm mb-3 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-amber-400" />
                  4 Tingkatan Ghunnah (Marātibul Ghunnah):
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {MATERI_KELAS_7_SEM_2_BAB_6.hukumGhunnah.maratibulGhunnah.map((mr, idx) => (
                    <div key={idx} className="bg-white/5 border border-white/10 p-4 rounded-xl">
                      <div className="text-xs font-bold text-amber-300 mb-1">{mr.tingkat}</div>
                      <p className="text-[11px] text-slate-300 leading-relaxed mb-2">{mr.keterangan}</p>
                      <div className="text-xs font-serif text-teal-200 bg-black/30 px-2.5 py-1 rounded-lg text-right">
                        {mr.contoh}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contoh Aplikatif Tabel */}
              <div>
                <h4 className="font-bold text-white text-sm mb-3">
                  Contoh Penerapan Hukum Ghunnah dalam Al-Qur'an:
                </h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="border-b border-white/20 text-slate-300">
                        <th className="py-2.5 px-3">Lafal Arab</th>
                        <th className="py-2.5 px-3">Transliterasi</th>
                        <th className="py-2.5 px-3">Surat & Ayat</th>
                        <th className="py-2.5 px-3">Huruf Ghunnah</th>
                        <th className="py-2.5 px-3">Cara Membaca</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10 text-slate-200">
                      {MATERI_KELAS_7_SEM_2_BAB_6.hukumGhunnah.daftarContohBab6.map(cth => (
                        <tr key={cth.id} className="hover:bg-white/5">
                          <td className="py-2.5 px-3 font-serif text-lg text-amber-200 font-bold">{cth.lafalArabic}</td>
                          <td className="py-2.5 px-3 italic text-teal-200">{cth.latin}</td>
                          <td className="py-2.5 px-3">{cth.suratRef}</td>
                          <td className="py-2.5 px-3">
                            <span className="px-2 py-0.5 bg-teal-500/30 text-teal-200 rounded text-[10px] font-semibold">
                              {cth.hurufGhunnah}
                            </span>
                          </td>
                          <td className="py-2.5 px-3 text-slate-300">{cth.caraMembaca}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== SUB-TAB 2: MENGHAFAL (TAHFIDZ) ==================== */}
        {activeSubTab === 'menghafal' && (
          <div className="space-y-8">
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <h3 className="font-bold text-amber-900 text-base mb-1 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-amber-600" />
                  Keterampilan 2: Menghafal Q.S. Al-Baqarah: 103 dan Ali 'Imran: 76 (Metode Takrar)
                </h3>
                <p className="text-xs md:text-sm text-amber-800 leading-relaxed">
                  Gunakan kartu interaktif di bawah ini untuk menguji hafalanmu. Sembunyikan tulisan Arab atau terjemah, dan ulangilah hafalan minimal 5 kali hingga mutqin.
                </p>
              </div>

              {/* Toggles */}
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => setHideArabicTahfidz(!hideArabicTahfidz)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer border ${
                    hideArabicTahfidz
                      ? 'bg-amber-600 text-white border-amber-600'
                      : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  {hideArabicTahfidz ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                  <span>{hideArabicTahfidz ? 'Buka Teks Arab' : 'Tutup Teks Arab'}</span>
                </button>

                <button
                  onClick={() => setHideArtiTahfidz(!hideArtiTahfidz)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer border ${
                    hideArtiTahfidz
                      ? 'bg-amber-600 text-white border-amber-600'
                      : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  {hideArtiTahfidz ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                  <span>{hideArtiTahfidz ? 'Buka Terjemah' : 'Tutup Terjemah'}</span>
                </button>
              </div>
            </div>

            {/* Tahfidz Card 1 */}
            <div className="bg-white border-2 border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 bg-teal-100 text-teal-800 rounded-lg text-xs font-bold">
                    Target 1
                  </span>
                  <h4 className="font-bold text-slate-900 text-base">
                    Q.S. Al-Baqarah (2) : Ayat 103
                  </h4>
                </div>

                <label className="flex items-center gap-2 text-xs font-semibold text-slate-600 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={!!checkedTahfidz['baqarah103']}
                    onChange={e => setCheckedTahfidz({ ...checkedTahfidz, baqarah103: e.target.checked })}
                    className="w-4 h-4 text-teal-600 rounded focus:ring-teal-500 cursor-pointer"
                  />
                  <span>Tandai Sudah Hafal Mutqin</span>
                </label>
              </div>

              {/* Arabic */}
              <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl mb-4 text-right">
                {hideArabicTahfidz ? (
                  <div className="py-6 text-center text-slate-400 italic text-sm">
                    Teks Arab disembunyikan. Bacakanlah hafalanmu sekarang lalu klik tombol buka di atas untuk mencocokkan!
                  </div>
                ) : (
                  <p className="text-2xl md:text-3xl font-serif leading-loose text-slate-900 dir-rtl">
                    وَلَوْ أَنَّهُمْ آمَنُوا وَاتَّقَوْا لَمَثُوبَةٌ مِّنْ عِندِ اللَّهِ خَيْرٌ ۖ لَّوْ كَانُوا يَعْلَمُونَ
                  </p>
                )}
              </div>

              {/* Translation */}
              {!hideArtiTahfidz && (
                <div className="bg-emerald-50/60 p-3.5 rounded-xl border border-emerald-100 text-xs md:text-sm text-slate-800 leading-relaxed mb-4">
                  <strong>Artinya:</strong> "{MATERI_KELAS_7_SEM_2_BAB_6.ayatAlBaqarah103.translationKemenag}"
                </div>
              )}

              {/* Tahfidz Steps */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <span className="text-xs font-bold text-slate-800 block mb-2">
                  Metode Menghafal 3 Frasa Bertahap:
                </span>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-xs">
                  <div className="bg-white p-3 rounded-lg border border-slate-200">
                    <span className="font-bold text-teal-700 block mb-1">Frasa 1 (Ulang 5x):</span>
                    <p className="font-serif text-base text-right text-slate-800 mb-1">وَلَوْ أَنَّهُمْ آمَنُوا وَاتَّقَوْا</p>
                    <p className="text-slate-500 italic text-[11px]">Walau annahum āmanū wattaqaw</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-slate-200">
                    <span className="font-bold text-teal-700 block mb-1">Frasa 2 (Ulang 5x):</span>
                    <p className="font-serif text-base text-right text-slate-800 mb-1">لَمَثُوبَةٌ مِّنْ عِندِ اللَّهِ خَيْرٌ</p>
                    <p className="text-slate-500 italic text-[11px]">Lamatsūbatum min \'indillāhi khair</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-slate-200">
                    <span className="font-bold text-teal-700 block mb-1">Frasa 3 (Ulang 5x):</span>
                    <p className="font-serif text-base text-right text-slate-800 mb-1">لَّوْ كَانُوا يَعْلَمُونَ</p>
                    <p className="text-slate-500 italic text-[11px]">Lau kānū ya\'lamūn</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tahfidz Card 2 */}
            <div className="bg-white border-2 border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 bg-teal-100 text-teal-800 rounded-lg text-xs font-bold">
                    Target 2
                  </span>
                  <h4 className="font-bold text-slate-900 text-base">
                    Q.S. Ali 'Imran (3) : Ayat 76
                  </h4>
                </div>

                <label className="flex items-center gap-2 text-xs font-semibold text-slate-600 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={!!checkedTahfidz['aliimran76']}
                    onChange={e => setCheckedTahfidz({ ...checkedTahfidz, aliimran76: e.target.checked })}
                    className="w-4 h-4 text-teal-600 rounded focus:ring-teal-500 cursor-pointer"
                  />
                  <span>Tandai Sudah Hafal Mutqin</span>
                </label>
              </div>

              {/* Arabic */}
              <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl mb-4 text-right">
                {hideArabicTahfidz ? (
                  <div className="py-6 text-center text-slate-400 italic text-sm">
                    Teks Arab disembunyikan. Bacakanlah hafalanmu sekarang lalu klik tombol buka di atas untuk mencocokkan!
                  </div>
                ) : (
                  <p className="text-2xl md:text-3xl font-serif leading-loose text-slate-900 dir-rtl">
                    بَلَىٰ مَنْ أَوْفَىٰ بِعَهْدِهِ وَاتَّقَىٰ فَإِنَّ اللَّهَ يُحِبُّ الْمُتَّقِينَ
                  </p>
                )}
              </div>

              {/* Translation */}
              {!hideArtiTahfidz && (
                <div className="bg-emerald-50/60 p-3.5 rounded-xl border border-emerald-100 text-xs md:text-sm text-slate-800 leading-relaxed mb-4">
                  <strong>Artinya:</strong> "{MATERI_KELAS_7_SEM_2_BAB_6.ayatAliImran76.translationKemenag}"
                </div>
              )}

              {/* Tahfidz Steps */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <span className="text-xs font-bold text-slate-800 block mb-2">
                  Metode Menghafal 2 Frasa Bertahap:
                </span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                  <div className="bg-white p-3 rounded-lg border border-slate-200">
                    <span className="font-bold text-teal-700 block mb-1">Frasa 1 (Ulang 5x):</span>
                    <p className="font-serif text-base text-right text-slate-800 mb-1">بَلَىٰ مَنْ أَوْفَىٰ بِعَهْدِهِ وَاتَّقَىٰ</p>
                    <p className="text-slate-500 italic text-[11px]">Balā man aufā bi\'ahdihī wattaqā</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-slate-200">
                    <span className="font-bold text-teal-700 block mb-1">Frasa 2 (Ulang 5x):</span>
                    <p className="font-serif text-base text-right text-slate-800 mb-1">فَإِنَّ اللَّهَ يُحِبُّ الْمُتَّقِينَ</p>
                    <p className="text-slate-500 italic text-[11px]">Fa\'innallāha yuhibbul-muttaqīn</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 5 Langkah Sukses Tahfidz */}
            <div className="bg-slate-900 text-white rounded-2xl p-6">
              <h4 className="font-bold text-amber-300 text-sm md:text-base mb-4 flex items-center gap-2">
                <Bookmark className="w-5 h-5 text-amber-400" />
                5 Langkah Sukses Menghafal Al-Qur'an (Metode PAI Kurikulum Merdeka):
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                {MATERI_KELAS_7_SEM_2_BAB_6.panduanMenghafalTahfidz.langkahLangkah.map(lk => (
                  <div key={lk.nomor} className="bg-white/10 p-4 rounded-xl border border-white/10 flex flex-col justify-between">
                    <div>
                      <span className="w-6 h-6 rounded-full bg-teal-500/40 text-teal-300 flex items-center justify-center text-xs font-bold mb-2">
                        {lk.nomor}
                      </span>
                      <h5 className="font-bold text-white text-xs mb-1.5">{lk.judul}</h5>
                      <p className="text-[11px] text-slate-300 leading-relaxed">{lk.deskripsi}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ==================== SUB-TAB 3: MENULIS (KHAT & KANVAS) ==================== */}
        {activeSubTab === 'menulis' && (
          <div className="space-y-8">
            <div className="bg-teal-50 border border-teal-200 rounded-2xl p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <h3 className="font-bold text-teal-900 text-base mb-1 flex items-center gap-2">
                  <PenTool className="w-5 h-5 text-teal-700" />
                  Keterampilan 3: Menulis Huruf Arab & Khat Naskhi Q.S. Al-Baqarah 103 dan Ali 'Imran 76
                </h3>
                <p className="text-xs md:text-sm text-teal-800 leading-relaxed">
                  Pelajari kaidah menyambung huruf Arab, peletakan tanda harakat tasydid Ghunnah, dan gunakan kanvas interaktif di bawah untuk berlatih menulis langsung dengan jari atau mouse.
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => onAskAI('Bagaimana kaidah imla dan cara menulis kaligrafi khat Naskhi huruf Arab yang menyambung dan tidak menyambung?')}
                  className="px-3.5 py-2 bg-teal-700 hover:bg-teal-800 text-white rounded-xl text-xs font-bold transition-all shadow-sm flex items-center gap-1.5 cursor-pointer"
                >
                  <Bot className="w-4 h-4" />
                  <span>Tanya Kaidah Khat AI</span>
                </button>
              </div>
            </div>

            {/* Kaidah Menulis */}
            <div className="bg-white border-2 border-slate-200 rounded-2xl p-6 shadow-sm">
              <h4 className="font-bold text-slate-900 text-base mb-3 flex items-center gap-2">
                <FileText className="w-4 h-4 text-teal-600" />
                5 Kaidah Dasar Menulis Aksara Al-Qur'an (Khat Naskhi):
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                {MATERI_KELAS_7_SEM_2_BAB_6.panduanMenulisKhat.prinsipDasar.map((ps, idx) => (
                  <div key={idx} className="bg-slate-50 p-3.5 rounded-xl border border-slate-100 flex items-start gap-2.5 text-xs text-slate-700">
                    <span className="w-5 h-5 rounded-full bg-teal-700 text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="leading-relaxed">{ps}</span>
                  </div>
                ))}
              </div>

              {/* 6 Huruf Pemutus */}
              <div className="bg-amber-50/70 border border-amber-200 p-4 rounded-xl text-xs text-amber-900">
                <strong className="block mb-1 text-amber-950 font-bold">
                  ⚠️ Perhatian Khusus: 6 Huruf Pemutus Sambungan Sebelah Kiri
                </strong>
                <p className="leading-relaxed mb-2">
                  Huruf <strong>Alif (ا), Dal (د), Dzal (ذ), Ra (ر), Zai (ز), dan Wawu (و)</strong> dapat disambung dari huruf sebelah kanannya, namun <strong>TIDAK BISA menyambung ke huruf sebelah kirinya</strong>.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 bg-white rounded-lg border border-amber-300 font-serif text-base font-bold">
                    وَاتَّقَوْا (wattaqaw)
                  </span>
                  <span className="px-2.5 py-1 bg-white rounded-lg border border-amber-300 font-serif text-base font-bold">
                    أَوْفَىٰ (aufā)
                  </span>
                  <span className="px-2.5 py-1 bg-white rounded-lg border border-amber-300 font-serif text-base font-bold">
                    آمَنُوا (āmanū)
                  </span>
                </div>
              </div>
            </div>

            {/* KANVAS MENULIS INTERAKTIF */}
            <div className="bg-white border-2 border-teal-200 rounded-3xl p-6 shadow-md">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-4 border-b border-slate-200">
                <div>
                  <h4 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <PenTool className="w-5 h-5 text-teal-600" />
                    Kanvas Digital Latihan Menulis Siswa
                  </h4>
                  <p className="text-xs text-slate-500">
                    Pilih contoh lafal ayat di bawah, kemudian tirukan goresan khat Naskhi di atas kanvas.
                  </p>
                </div>

                {/* Pilih Template */}
                <div className="flex flex-wrap items-center gap-1.5">
                  <button
                    onClick={() => setSelectedTemplateKhat('annahum')}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      selectedTemplateKhat === 'annahum'
                        ? 'bg-teal-700 text-white'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    أَنَّهُمْ
                  </button>
                  <button
                    onClick={() => setSelectedTemplateKhat('fainna')}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      selectedTemplateKhat === 'fainna'
                        ? 'bg-teal-700 text-white'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    فَإِنَّ
                  </button>
                  <button
                    onClick={() => setSelectedTemplateKhat('baqarah')}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      selectedTemplateKhat === 'baqarah'
                        ? 'bg-teal-700 text-white'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    Al-Baqarah 103
                  </button>
                  <button
                    onClick={() => setSelectedTemplateKhat('ali_imran')}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      selectedTemplateKhat === 'ali_imran'
                        ? 'bg-teal-700 text-white'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    Ali 'Imran 76
                  </button>
                </div>
              </div>

              {/* Preview Tulisan Contoh */}
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl mb-4 text-center">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                  Contoh Tulisan Acuan Khat:
                </span>
                <p className="text-2xl md:text-3xl font-serif font-bold text-teal-950 py-1">
                  {selectedTemplateKhat === 'annahum' && 'أَنَّهُمْ'}
                  {selectedTemplateKhat === 'fainna' && 'فَإِنَّ'}
                  {selectedTemplateKhat === 'baqarah' && 'وَلَوْ أَنَّهُمْ آمَنُوا وَاتَّقَوْا'}
                  {selectedTemplateKhat === 'ali_imran' && 'بَلَىٰ مَنْ أَوْفَىٰ بِعَهْدِهِ وَاتَّقَىٰ'}
                </p>
                <p className="text-xs text-slate-500 italic mt-1">
                  Perhatikan letak gigi huruf Nun, lengkungan ekor huruf, dan harakat tasydid di atasnya.
                </p>
              </div>

              {/* Toolbar Kanvas */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-3 bg-slate-100 p-3 rounded-xl">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-slate-700">Warna Tinta:</span>
                  <div className="flex items-center gap-1.5">
                    {['#0f766e', '#1e293b', '#b91c1c', '#1d4ed8'].map(c => (
                      <button
                        key={c}
                        onClick={() => setPenColor(c)}
                        style={{ backgroundColor: c }}
                        className={`w-6 h-6 rounded-full cursor-pointer transition-transform ${
                          penColor === c ? 'ring-2 ring-offset-2 ring-teal-600 scale-110' : ''
                        }`}
                      />
                    ))}
                  </div>

                  <span className="text-xs font-bold text-slate-700 ml-2">Tebal:</span>
                  <input
                    type="range"
                    min="1"
                    max="8"
                    value={penWidth}
                    onChange={e => setPenWidth(Number(e.target.value))}
                    className="w-20 cursor-pointer"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={clearCanvas}
                    className="px-3 py-1.5 bg-white hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-bold border border-slate-300 transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <Eraser className="w-3.5 h-3.5" />
                    <span>Hapus Kanvas</span>
                  </button>

                  <button
                    onClick={downloadCanvas}
                    className="px-3 py-1.5 bg-teal-700 hover:bg-teal-800 text-white rounded-lg text-xs font-bold transition-colors flex items-center gap-1 cursor-pointer shadow-xs"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Unduh Tulisan</span>
                  </button>
                </div>
              </div>

              {/* The HTML5 Canvas */}
              <div className="border-2 border-dashed border-teal-300 rounded-2xl overflow-hidden bg-white shadow-inner flex justify-center">
                <canvas
                  ref={canvasRef}
                  width={800}
                  height={320}
                  onMouseDown={startDrawing}
                  onMouseMove={draw}
                  onMouseUp={stopDrawing}
                  onMouseLeave={stopDrawing}
                  onTouchStart={startDrawing}
                  onTouchMove={draw}
                  onTouchEnd={stopDrawing}
                  className="cursor-crosshair w-full max-w-full h-auto touch-none"
                  style={{ maxHeight: '340px' }}
                />
              </div>
            </div>
          </div>
        )}

        {/* ==================== SUB-TAB 4: MUFRADAT & TERJEMAH ==================== */}
        {activeSubTab === 'mufradat' && (
          <div className="space-y-6">
            <div className="bg-teal-50 border border-teal-200 rounded-2xl p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <h3 className="font-bold text-teal-900 text-base mb-1 flex items-center gap-2">
                  <ListOrdered className="w-5 h-5 text-teal-700" />
                  Keterampilan 4: Mufradat (Kosakata Per Kata) & Terjemah Ayat
                </h3>
                <p className="text-xs md:text-sm text-teal-800 leading-relaxed">
                  Pahami arti setiap kata secara mendalam untuk membantu menghafal dan menghayati pesan Q.S. Al-Baqarah: 103 dan Ali 'Imran: 76.
                </p>
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => setMufradatViewMode('table')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    mufradatViewMode === 'table'
                      ? 'bg-teal-700 text-white'
                      : 'bg-white text-slate-700 border border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  Mode Tabel
                </button>
                <button
                  onClick={() => setMufradatViewMode('cards')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    mufradatViewMode === 'cards'
                      ? 'bg-teal-700 text-white'
                      : 'bg-white text-slate-700 border border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  Mode Kartu (Flashcard)
                </button>
              </div>
            </div>

            {/* Filter & Search Toolbar */}
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="text-xs font-bold text-slate-500 mr-1">Filter Surat:</span>
                <button
                  onClick={() => setMufradatSource('all')}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    mufradatSource === 'all'
                      ? 'bg-teal-700 text-white'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  Semua Kata ({MATERI_KELAS_7_SEM_2_BAB_6.mufradatList.alBaqarah103.length + MATERI_KELAS_7_SEM_2_BAB_6.mufradatList.aliImran76.length})
                </button>
                <button
                  onClick={() => setMufradatSource('baqarah')}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    mufradatSource === 'baqarah'
                      ? 'bg-teal-700 text-white'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  Al-Baqarah: 103 ({MATERI_KELAS_7_SEM_2_BAB_6.mufradatList.alBaqarah103.length})
                </button>
                <button
                  onClick={() => setMufradatSource('ali_imran')}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    mufradatSource === 'ali_imran'
                      ? 'bg-teal-700 text-white'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  Ali 'Imran: 76 ({MATERI_KELAS_7_SEM_2_BAB_6.mufradatList.aliImran76.length})
                </button>
                <button
                  onClick={() => setMufradatSource('ghunnah_only')}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1 ${
                    mufradatSource === 'ghunnah_only'
                      ? 'bg-amber-500 text-white'
                      : 'bg-amber-50 text-amber-800 hover:bg-amber-100 border border-amber-300'
                  }`}
                >
                  <Sparkles className="w-3 h-3" />
                  <span>Khusus Ghunnah (2)</span>
                </button>
              </div>

              {/* Search Bar */}
              <div className="relative w-full md:w-64">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Cari kata arab / latin / arti..."
                  value={mufradatSearch}
                  onChange={e => setMufradatSearch(e.target.value)}
                  className="w-full pl-9 pr-3 py-1.5 bg-white border border-slate-300 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
            </div>

            {/* MODE 1: TABEL MUFRADAT */}
            {mufradatViewMode === 'table' ? (
              <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="bg-slate-100/80 border-b border-slate-200 text-slate-700 font-bold">
                        <th className="py-3 px-4 w-12 text-center">No</th>
                        <th className="py-3 px-4 text-right">Lafal Arab</th>
                        <th className="py-3 px-4">Transliterasi</th>
                        <th className="py-3 px-4">Arti Kata</th>
                        <th className="py-3 px-4">Surat & Ayat</th>
                        <th className="py-3 px-4">Jenis Kata</th>
                        <th className="py-3 px-4">Catatan Tajwid</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {filteredMufradat.map((word, idx) => (
                        <tr
                          key={word.id}
                          className={`hover:bg-slate-50/80 transition-colors ${
                            word.isGhunnah ? 'bg-teal-50/50' : ''
                          }`}
                        >
                          <td className="py-3 px-4 text-center text-slate-400 font-medium">{idx + 1}</td>
                          <td className="py-3 px-4 text-right">
                            <span className="font-serif text-xl font-bold text-slate-900 inline-block dir-rtl">
                              {word.arabic}
                            </span>
                            {word.isGhunnah && (
                              <span className="ml-2 px-1.5 py-0.5 bg-teal-200 text-teal-900 rounded text-[10px] font-bold">
                                Ghunnah
                              </span>
                            )}
                          </td>
                          <td className="py-3 px-4 italic text-slate-700 font-medium">{word.latin}</td>
                          <td className="py-3 px-4 text-slate-900 font-semibold">{word.meaning}</td>
                          <td className="py-3 px-4 text-slate-500">{word.surahRef}</td>
                          <td className="py-3 px-4">
                            <span className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded text-[10px]">
                              {word.category}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-teal-700 font-medium text-[11px]">
                            {word.tajwidHint || '-'}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              /* MODE 2: KARTU FLASHCARD MUFRADAT */
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {filteredMufradat.map(word => {
                  const isRevealed = revealedCardId === word.id;
                  return (
                    <div
                      key={word.id}
                      onClick={() => setRevealedCardId(isRevealed ? null : word.id)}
                      className={`p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between select-none ${
                        word.isGhunnah
                          ? 'bg-teal-50/60 border-teal-300 hover:border-teal-500'
                          : 'bg-white border-slate-200 hover:border-slate-400 hover:shadow-sm'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] text-slate-400">{word.surahRef}</span>
                        {word.isGhunnah && (
                          <span className="px-2 py-0.5 bg-teal-200 text-teal-900 rounded text-[10px] font-bold">
                            Ghunnah
                          </span>
                        )}
                      </div>

                      <div className="text-center py-2">
                        <p className="font-serif text-3xl font-bold text-slate-900 mb-1">{word.arabic}</p>
                        <p className="text-xs text-slate-500 italic">{word.latin}</p>
                      </div>

                      <div className="pt-3 border-t border-slate-100 text-center">
                        {isRevealed ? (
                          <div>
                            <span className="text-xs font-bold text-teal-800 block">{word.meaning}</span>
                            {word.tajwidHint && (
                              <span className="text-[10px] text-slate-500 block mt-0.5">Tajwid: {word.tajwidHint}</span>
                            )}
                          </div>
                        ) : (
                          <span className="text-[11px] text-teal-600 font-bold hover:underline">
                            Klik untuk membuka arti
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Asbabun Nuzul Box */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                <h4 className="font-bold text-slate-900 text-sm mb-2 flex items-center gap-1.5">
                  <Bookmark className="w-4 h-4 text-teal-600" />
                  Asbabun Nuzul Q.S. Al-Baqarah: 103
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {MATERI_KELAS_7_SEM_2_BAB_6.ayatAlBaqarah103.asbabunNuzul}
                </p>
              </div>

              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                <h4 className="font-bold text-slate-900 text-sm mb-2 flex items-center gap-1.5">
                  <Bookmark className="w-4 h-4 text-teal-600" />
                  Asbabun Nuzul Q.S. Ali 'Imran: 76
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {MATERI_KELAS_7_SEM_2_BAB_6.ayatAliImran76.asbabunNuzul}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ==================== SUB-TAB 5: HADIS TERKAIT TAQWA ==================== */}
        {activeSubTab === 'hadits' && (
          <div className="space-y-6">
            <div className="bg-teal-50 border border-teal-200 rounded-2xl p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <h3 className="font-bold text-teal-900 text-base mb-1 flex items-center gap-2">
                  <BookMarked className="w-5 h-5 text-teal-700" />
                  Koleksi Hadis Rasulullah SAW tentang Taqwa & Akhlak Mulia
                </h3>
                <p className="text-xs md:text-sm text-teal-800 leading-relaxed">
                  Rasulullah SAW menjelaskan bahwa takwa harus mewarnai seluruh dimensi kehidupan seorang muslim: di mana pun berada, berakar di hati, dan dibuktikan dengan akhlak terpuji.
                </p>
              </div>

              <button
                onClick={() => onAskAI('Jelaskan makna hadis riwayat Tirmidzi 1987 "Ittaqillaha haitsuma kunta" dan bagaimana menerapkannya dalam pergaulan remaja saat ini')}
                className="px-3.5 py-2 bg-teal-700 hover:bg-teal-800 text-white rounded-xl text-xs font-bold transition-all shadow-sm flex items-center gap-1.5 cursor-pointer shrink-0"
              >
                <Bot className="w-4 h-4" />
                <span>Kupas Tuntas Hadis AI</span>
              </button>
            </div>

            <div className="space-y-6">
              {MATERI_KELAS_7_SEM_2_BAB_6.haditsTaqwaList.map((hd, idx) => (
                <div key={hd.id} className="bg-white border-2 border-slate-200 rounded-2xl p-6 shadow-sm hover:border-teal-300 transition-all">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-100">
                    <div className="flex items-center gap-2.5">
                      <span className="w-7 h-7 rounded-xl bg-teal-700 text-white flex items-center justify-center text-xs font-bold">
                        {idx + 1}
                      </span>
                      <div>
                        <h4 className="font-bold text-slate-900 text-base">{hd.title}</h4>
                        <span className="text-xs text-slate-500">Perawi: {hd.narrator} • {hd.kitabRef}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 bg-emerald-100 text-emerald-800 rounded-full text-xs font-bold">
                        {hd.derajatHadits}
                      </span>
                      <button
                        onClick={() => copyText(hd.arabic, hd.title)}
                        className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                        title="Salin Hadis"
                      >
                        <Copy className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Teks Hadis Arab */}
                  <div className="p-5 bg-amber-50/40 border border-amber-100 rounded-2xl mb-4 text-right">
                    <p className="font-serif text-xl md:text-2xl text-slate-900 leading-loose dir-rtl">
                      {hd.arabic}
                    </p>
                  </div>

                  {/* Transliterasi */}
                  <div className="mb-3">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                      Transliterasi Latin:
                    </span>
                    <p className="text-xs text-slate-600 italic bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                      "{hd.latin}"
                    </p>
                  </div>

                  {/* Terjemahan */}
                  <div className="mb-4">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                      Terjemahan:
                    </span>
                    <p className="text-xs md:text-sm text-slate-800 bg-emerald-50/50 p-3 rounded-xl border border-emerald-100 font-medium">
                      "{hd.translation}"
                    </p>
                  </div>

                  {/* Hikmah Hadis */}
                  <div className="pt-3 border-t border-slate-100">
                    <span className="text-xs font-bold text-slate-900 block mb-2">
                      Hikmah & Pelajaran Hadis:
                    </span>
                    <ul className="space-y-1">
                      {hd.hikmah.map((hk, hIdx) => (
                        <li key={hIdx} className="text-xs text-slate-600 flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                          <span>{hk}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==================== SUB-TAB 6: HIKMAH & PELAJAR ==================== */}
        {activeSubTab === 'hikmah' && (
          <div className="space-y-8">
            <div className="bg-teal-50 border border-teal-200 rounded-2xl p-5">
              <h3 className="font-bold text-teal-900 text-base mb-1 flex items-center gap-2">
                <HeartHandshake className="w-5 h-5 text-rose-500" />
                Hikmah Mengamalkan Taqwa & Menepati Janji dalam Kehidupan
              </h3>
              <p className="text-xs md:text-sm text-teal-800 leading-relaxed">
                Menghubungkan nilai-nilai Q.S. Al-Baqarah: 103 dan Ali 'Imran: 76 dengan pembentukan Profil Pelajar Pancasila yang berintegritas, mandiri, dan berakhlak mulia.
              </p>
            </div>

            {/* 6 Hikmah Utama Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {MATERI_KELAS_7_SEM_2_BAB_6.hikmahKandunganAyat.map(hk => (
                <div key={hk.nomor} className="bg-white border-2 border-slate-200 hover:border-teal-400 p-5 rounded-2xl shadow-sm transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2.5 mb-2">
                      <span className="w-7 h-7 rounded-xl bg-teal-700 text-white flex items-center justify-center font-bold text-xs">
                        {hk.nomor}
                      </span>
                      <h4 className="font-bold text-slate-900 text-sm">{hk.judul}</h4>
                    </div>
                    <span className="inline-block px-2 py-0.5 bg-amber-50 text-amber-800 border border-amber-200 rounded text-[10px] font-bold mb-2">
                      Dalil: {hk.dalil}
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {hk.penjelasan}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Profil Pelajar Pancasila */}
            <div className="bg-gradient-to-r from-teal-900 to-emerald-900 text-white rounded-3xl p-6 md:p-8">
              <h4 className="font-bold text-amber-300 text-base mb-4 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-amber-400" />
                Integrasi dengan Profil Pelajar Pancasila & Rahmatan lil 'Alamin:
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {MATERI_KELAS_7_SEM_2_BAB_6.penerapanPelajarPancasila.map((pp, idx) => (
                  <div key={idx} className="bg-white/10 p-4 rounded-2xl border border-white/10">
                    <span className="text-xs font-bold text-emerald-300 block mb-1">
                      Dimensi: {pp.dimensi}
                    </span>
                    <p className="text-xs text-slate-200 leading-relaxed">
                      {pp.penerapan}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ==================== SUB-TAB 7: KUIS EVALUASI HOTS ==================== */}
        {activeSubTab === 'kuis' && (
          <div className="space-y-6">
            <div className="bg-teal-50 border border-teal-200 rounded-2xl p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <h3 className="font-bold text-teal-900 text-base mb-1 flex items-center gap-2">
                  <Award className="w-5 h-5 text-amber-500" />
                  Kuis Evaluasi Pemahaman Bab 6 (HOTS)
                </h3>
                <p className="text-xs md:text-sm text-teal-800 leading-relaxed">
                  Uji pemahamanmu tentang hukum bacaan Ghunnah, kandungan Q.S. Al-Baqarah: 103, Ali 'Imran: 76, mufradat, dan hadis-hadis taqwa.
                </p>
              </div>

              {showKuisResult && (
                <div className="bg-white px-4 py-2 rounded-xl border border-teal-300 text-center shadow-xs">
                  <span className="text-[10px] text-slate-500 uppercase font-bold block">Skor Akhir:</span>
                  <span className="text-xl font-black text-teal-700">{kuisScore} / 100</span>
                </div>
              )}
            </div>

            <div className="space-y-5">
              {MATERI_KELAS_7_SEM_2_BAB_6.kuisSoalHots.map((soal, idx) => {
                const selected = userAnswers[soal.id];
                const isAnswered = selected !== undefined;
                const isCorrect = selected === soal.kunciJawaban;

                return (
                  <div key={soal.id} className="bg-white border-2 border-slate-200 rounded-2xl p-5 md:p-6 shadow-sm">
                    <div className="flex items-center justify-between gap-2 mb-3 pb-2 border-b border-slate-100">
                      <span className="text-xs font-bold text-teal-700 bg-teal-50 px-2.5 py-1 rounded-lg border border-teal-100">
                        Soal No. {idx + 1} • {soal.kategori}
                      </span>
                      {showKuisResult && (
                        <span className={`text-xs font-bold flex items-center gap-1 ${isCorrect ? 'text-emerald-600' : 'text-rose-600'}`}>
                          {isCorrect ? <CheckCircle2 className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
                          {isCorrect ? 'Benar (+20)' : 'Salah'}
                        </span>
                      )}
                    </div>

                    <p className="text-xs md:text-sm font-semibold text-slate-900 leading-relaxed mb-4">
                      {soal.pertanyaan}
                    </p>

                    <div className="space-y-2">
                      {soal.pilihan.map((pil, pIdx) => {
                        let btnClass = 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100';
                        if (selected === pIdx) {
                          btnClass = 'bg-teal-50 border-teal-500 text-teal-900 font-bold';
                        }
                        if (showKuisResult) {
                          if (pIdx === soal.kunciJawaban) {
                            btnClass = 'bg-emerald-100 border-emerald-500 text-emerald-900 font-bold';
                          } else if (selected === pIdx) {
                            btnClass = 'bg-rose-50 border-rose-400 text-rose-800';
                          }
                        }

                        return (
                          <button
                            key={pIdx}
                            onClick={() => {
                              if (!showKuisResult) {
                                setUserAnswers({ ...userAnswers, [soal.id]: pIdx });
                              }
                            }}
                            className={`w-full text-left p-3 rounded-xl border text-xs transition-all flex items-start gap-2.5 cursor-pointer ${btnClass}`}
                          >
                            <span className="w-5 h-5 rounded-full bg-white border border-slate-300 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                              {String.fromCharCode(65 + pIdx)}
                            </span>
                            <span className="leading-relaxed">{pil}</span>
                          </button>
                        );
                      })}
                    </div>

                    {showKuisResult && (
                      <div className="mt-4 p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-700 leading-relaxed">
                        <strong className="text-teal-900 block mb-1">Pembahasan:</strong>
                        {soal.pembahasan}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-between gap-4 pt-4 border-t border-slate-200">
              <button
                onClick={() => {
                  setUserAnswers({});
                  setShowKuisResult(false);
                }}
                className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Reset Jawaban</span>
              </button>

              <button
                onClick={() => {
                  if (Object.keys(userAnswers).length < MATERI_KELAS_7_SEM_2_BAB_6.kuisSoalHots.length) {
                    showToast('Harap jawab semua soal terlebih dahulu', 'info');
                  }
                  setShowKuisResult(true);
                }}
                className="px-6 py-2.5 bg-teal-700 hover:bg-teal-800 text-white rounded-xl text-xs md:text-sm font-bold transition-all shadow-sm flex items-center gap-2 cursor-pointer"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                <span>Periksa Hasil Kuis</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
