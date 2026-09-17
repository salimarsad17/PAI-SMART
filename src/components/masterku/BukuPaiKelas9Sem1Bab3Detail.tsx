import React, { useState, useRef } from 'react';
import {
  BookOpen,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Check,
  Lightbulb,
  Bot,
  Copy,
  Brain,
  Award,
  BookmarkCheck,
  Globe,
  FileText,
  Volume2,
  VolumeX,
  Play,
  Pause,
  HelpCircle,
  GraduationCap,
  ArrowRight,
  Filter,
  CheckSquare,
  Square,
  Flame,
  AlertTriangle,
  Leaf,
  TreePine,
  Droplets,
  Wind,
  Sun,
  Sprout,
  Trash2,
  Recycle,
  Layers,
  Heart,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import {
  MATERI_KELAS_9_SEM_1_BAB_3,
  DalilLingkunganItem,
  HaditsLingkunganItem,
  KerusakanLingkunganItem,
  CiriCintaLingkunganItem,
  StudiKasusLingkunganItem
} from '../../data/materiKelas9Sem1Bab3Data';
import { useToast } from '../common/Toast';

interface Props {
  onAskAI: (prompt: string) => void;
}

type Bab3K9SubTab =
  | 'ringkasan'
  | 'pengertian-dalil'
  | 'pentingnya-lingkungan'
  | 'bentuk-kerusakan'
  | 'ciri-cinta-lingkungan'
  | 'refleksi-kasus'
  | 'hikmah-kuis';

export const BukuPaiKelas9Sem1Bab3Detail: React.FC<Props> = ({ onAskAI }) => {
  const { showToast } = useToast();
  const [activeTab, setActiveTab] = useState<Bab3K9SubTab>('ringkasan');

  // Filter Kerusakan Lingkungan
  const [filterKategoriKerusakan, setFilterKategoriKerusakan] = useState<'Semua' | 'Daratan' | 'Perairan' | 'Udara' | 'Hayati'>('Semua');

  // Audio Player State for recitation
  const [currentPlayingAudio, setCurrentPlayingAudio] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Kuis HOTS State
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});
  const [showKuisResult, setShowKuisResult] = useState(false);

  // Muhasabah Checklist State
  const [muhasabahChecked, setMuhasabahChecked] = useState<Record<number, boolean>>({});

  // Studi Kasus accordion state
  const [openKasusIndex, setOpenKasusIndex] = useState<number | null>(0);

  // Audio playback handler
  const handlePlayAudio = (audioUrl?: string) => {
    if (!audioUrl) {
      showToast('Audio murottal belum tersedia untuk ayat ini.', 'info');
      return;
    }

    if (currentPlayingAudio === audioUrl) {
      if (audioRef.current) {
        if (!audioRef.current.paused) {
          audioRef.current.pause();
          setCurrentPlayingAudio(null);
        } else {
          audioRef.current.play();
        }
      }
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      const newAudio = new Audio(audioUrl);
      audioRef.current = newAudio;
      setCurrentPlayingAudio(audioUrl);
      newAudio.play().catch(() => {
        showToast('Gagal memutar audio. Silakan periksa koneksi internet.', 'error');
        setCurrentPlayingAudio(null);
      });
      newAudio.onended = () => {
        setCurrentPlayingAudio(null);
      };
    }
  };

  const handleCopyText = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    showToast(`${label} berhasil disalin ke clipboard!`, 'success');
  };

  // Kuis HOTS scoring
  const calculateKuisScore = () => {
    let score = 0;
    MATERI_KELAS_9_SEM_1_BAB_3.bagian5HikmahCintaLingkungan.kuisHots.forEach((soal) => {
      if (userAnswers[soal.id] === soal.kunciJawaban) {
        score += 20; // 5 soal * 20 = 100
      }
    });
    return score;
  };

  const answeredCount = Object.keys(userAnswers).length;
  const totalQuestions = MATERI_KELAS_9_SEM_1_BAB_3.bagian5HikmahCintaLingkungan.kuisHots.length;

  // Muhasabah completion percentage
  const totalMuhasabah = MATERI_KELAS_9_SEM_1_BAB_3.bagian5HikmahCintaLingkungan.lembarMuhasabah8Dimensi.length;
  const checkedMuhasabahCount = Object.values(muhasabahChecked).filter(Boolean).length;
  const muhasabahScore = Math.round((checkedMuhasabahCount / totalMuhasabah) * 100);

  // Filtered Kerusakan
  const filteredKerusakan =
    filterKategoriKerusakan === 'Semua'
      ? MATERI_KELAS_9_SEM_1_BAB_3.bagian3BentukKerusakanLingkungan.daftarKerusakan
      : MATERI_KELAS_9_SEM_1_BAB_3.bagian3BentukKerusakanLingkungan.daftarKerusakan.filter(
          (k) => k.kategori === filterKategoriKerusakan
        );

  return (
    <div className="space-y-6">
      {/* HEADER HERO SECTION */}
      <div className="relative overflow-hidden bg-gradient-to-br from-emerald-900 via-teal-900 to-green-950 rounded-2xl p-6 sm:p-8 text-white shadow-xl border border-emerald-700/40">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-teal-400/10 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold tracking-wide">
              <Sprout className="w-3.5 h-3.5 text-emerald-400" />
              <span>PAI & BUDI PEKERTI • KELAS IX • SEMESTER 1 • BAB 3</span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white leading-tight">
              {MATERI_KELAS_9_SEM_1_BAB_3.judulBab}
            </h1>
            <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed">
              {MATERI_KELAS_9_SEM_1_BAB_3.subJudul}
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs text-emerald-200">
              <span className="px-2.5 py-1 rounded-md bg-white/10 font-medium">Fase D (SMP/MTs)</span>
              <span className="px-2.5 py-1 rounded-md bg-white/10 font-medium">Elemen: Akhlak / Fiqh al-Bī'ah</span>
              <span className="px-2.5 py-1 rounded-md bg-emerald-400/20 text-emerald-300 font-semibold">
                Kurikulum Merdeka
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row md:flex-col gap-3 min-w-[220px]">
            <button
              onClick={() =>
                onAskAI(
                  'Halo Masterku AI, tolong jelaskan makna filosofis manusia sebagai Khalifah fil Ardh dan mengapa merusak lingkungan (fasad fil ardh) sangat dilarang dalam ajaran Islam beserta dalilnya!'
                )
              }
              className="px-4 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white rounded-xl text-xs sm:text-sm font-bold shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
            >
              <Bot className="w-4 h-4 text-emerald-100" />
              <span>Tanya Fikih Lingkungan AI</span>
            </button>
            <button
              onClick={() => {
                setActiveTab('hikmah-kuis');
                showToast('Membuka Kuis HOTS Bab 3', 'info');
              }}
              className="px-4 py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Award className="w-4 h-4 text-amber-300" />
              <span>Kuis HOTS (5 Butir Soal)</span>
            </button>
          </div>
        </div>
      </div>

      {/* SUB-NAVIGATION TABS */}
      <div className="flex items-center gap-2 overflow-x-auto p-2 bg-sky-100/90 rounded-2xl border border-sky-200 shadow-xs no-scrollbar">
        <button
          onClick={() => setActiveTab('ringkasan')}
          className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer active:bg-emerald-600 active:text-amber-200 ${
            activeTab === 'ringkasan'
              ? 'bg-blue-600 text-white shadow-md ring-2 ring-blue-300 border border-blue-500 font-black'
              : 'bg-sky-50 text-black border border-sky-200 hover:bg-sky-200/70 font-bold'
          }`}
        >
          <BookOpen className={`w-4 h-4 shrink-0 drop-shadow-2xs ${activeTab === 'ringkasan' ? 'text-amber-300' : 'text-amber-500 font-bold'}`} />
          <span className={activeTab === 'ringkasan' ? 'text-white font-bold' : 'text-black font-bold'}>Apersepsi & Peta Konsep</span>
        </button>

        <button
          onClick={() => setActiveTab('pengertian-dalil')}
          className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer active:bg-emerald-600 active:text-amber-200 ${
            activeTab === 'pengertian-dalil'
              ? 'bg-blue-600 text-white shadow-md ring-2 ring-blue-300 border border-blue-500 font-black'
              : 'bg-sky-50 text-black border border-sky-200 hover:bg-sky-200/70 font-bold'
          }`}
        >
          <BookmarkCheck className={`w-4 h-4 shrink-0 drop-shadow-2xs ${activeTab === 'pengertian-dalil' ? 'text-amber-300' : 'text-amber-500 font-bold'}`} />
          <span className={activeTab === 'pengertian-dalil' ? 'text-white font-bold' : 'text-black font-bold'}>1. Pengertian & Dalil Naqli</span>
        </button>

        <button
          onClick={() => setActiveTab('pentingnya-lingkungan')}
          className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer active:bg-emerald-600 active:text-amber-200 ${
            activeTab === 'pentingnya-lingkungan'
              ? 'bg-blue-600 text-white shadow-md ring-2 ring-blue-300 border border-blue-500 font-black'
              : 'bg-sky-50 text-black border border-sky-200 hover:bg-sky-200/70 font-bold'
          }`}
        >
          <Globe className={`w-4 h-4 shrink-0 drop-shadow-2xs ${activeTab === 'pentingnya-lingkungan' ? 'text-amber-300' : 'text-amber-500 font-bold'}`} />
          <span className={activeTab === 'pentingnya-lingkungan' ? 'text-white font-bold' : 'text-black font-bold'}>2. Pentingnya Cinta Lingkungan</span>
        </button>

        <button
          onClick={() => setActiveTab('bentuk-kerusakan')}
          className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer active:bg-emerald-600 active:text-amber-200 ${
            activeTab === 'bentuk-kerusakan'
              ? 'bg-blue-600 text-white shadow-md ring-2 ring-blue-300 border border-blue-500 font-black'
              : 'bg-sky-50 text-black border border-sky-200 hover:bg-sky-200/70 font-bold'
          }`}
        >
          <AlertTriangle className={`w-4 h-4 shrink-0 drop-shadow-2xs ${activeTab === 'bentuk-kerusakan' ? 'text-amber-300' : 'text-amber-500 font-bold'}`} />
          <span className={activeTab === 'bentuk-kerusakan' ? 'text-white font-bold' : 'text-black font-bold'}>3. Bentuk Kerusakan Lingkungan</span>
        </button>

        <button
          onClick={() => setActiveTab('ciri-cinta-lingkungan')}
          className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer active:bg-emerald-600 active:text-amber-200 ${
            activeTab === 'ciri-cinta-lingkungan'
              ? 'bg-blue-600 text-white shadow-md ring-2 ring-blue-300 border border-blue-500 font-black'
              : 'bg-sky-50 text-black border border-sky-200 hover:bg-sky-200/70 font-bold'
          }`}
        >
          <Leaf className={`w-4 h-4 shrink-0 drop-shadow-2xs ${activeTab === 'ciri-cinta-lingkungan' ? 'text-amber-300' : 'text-amber-500 font-bold'}`} />
          <span className={activeTab === 'ciri-cinta-lingkungan' ? 'text-white font-bold' : 'text-black font-bold'}>4. Ciri-Ciri Cinta Lingkungan</span>
        </button>

        <button
          onClick={() => setActiveTab('refleksi-kasus')}
          className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer active:bg-emerald-600 active:text-amber-200 ${
            activeTab === 'refleksi-kasus'
              ? 'bg-blue-600 text-white shadow-md ring-2 ring-blue-300 border border-blue-500 font-black'
              : 'bg-sky-50 text-black border border-sky-200 hover:bg-sky-200/70 font-bold'
          }`}
        >
          <Brain className={`w-4 h-4 shrink-0 drop-shadow-2xs ${activeTab === 'refleksi-kasus' ? 'text-amber-300' : 'text-amber-500 font-bold'}`} />
          <span className={activeTab === 'refleksi-kasus' ? 'text-white font-bold' : 'text-black font-bold'}>Refleksi & Studi Kasus</span>
        </button>

        <button
          onClick={() => setActiveTab('hikmah-kuis')}
          className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer active:bg-emerald-600 active:text-amber-200 ${
            activeTab === 'hikmah-kuis'
              ? 'bg-blue-600 text-white shadow-md ring-2 ring-blue-300 border border-blue-500 font-black'
              : 'bg-sky-50 text-black border border-sky-200 hover:bg-sky-200/70 font-bold'
          }`}
        >
          <Award className={`w-4 h-4 shrink-0 drop-shadow-2xs ${activeTab === 'hikmah-kuis' ? 'text-amber-300' : 'text-amber-500 font-bold'}`} />
          <span className={activeTab === 'hikmah-kuis' ? 'text-white font-bold' : 'text-black font-bold'}>5. Hikmah & Kuis HOTS</span>
        </button>
      </div>

      {/* TAB 1: RINGKASAN & PETA KONSEP */}
      {activeTab === 'ringkasan' && (
        <div className="space-y-6">
          {/* APERSEPSI */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-700 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-emerald-100 dark:bg-emerald-950/60 rounded-xl text-emerald-600 dark:text-emerald-400">
                <Lightbulb className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">
                  Apersepsi: Mengapa Kita Wajib Peduli Lingkungan?
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Konteks kehidupan nyata, krisis iklim, dan tanggung jawab moral muslim
                </p>
              </div>
            </div>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {MATERI_KELAS_9_SEM_1_BAB_3.pengantar.apersepsi}
            </p>

            {/* KATA KUNCI GLOSARIUM */}
            <div className="pt-2 border-t border-slate-100 dark:border-slate-700">
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400 block mb-2">
                KATA KUNCI UTAMA BAB INI:
              </span>
              <div className="flex flex-wrap gap-2">
                {MATERI_KELAS_9_SEM_1_BAB_3.pengantar.kataKunci.map((kw, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 text-xs font-semibold"
                  >
                    #{kw}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* TUJUAN PEMBELAJARAN */}
          <div className="bg-gradient-to-br from-teal-50 to-emerald-50 dark:from-slate-800/80 dark:to-emerald-950/40 rounded-2xl p-6 border border-emerald-200/80 dark:border-emerald-800/50 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-emerald-600 text-white rounded-lg">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
                Tujuan Pembelajaran Kurikulum Merdeka (Fase D - Kelas IX)
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {MATERI_KELAS_9_SEM_1_BAB_3.pengantar.tujuanPembelajaran.map((tp, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-white/80 dark:bg-slate-800/80 border border-emerald-100 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-300 leading-relaxed shadow-xs"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>{tp}</span>
                </div>
              ))}
            </div>
          </div>

          {/* PETA KONSEP BAB 3 */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-700 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Layers className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <h3 className="text-base font-bold text-slate-800 dark:text-slate-100">
                  Peta Konsep Pembelajaran Bab 3
                </h3>
              </div>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">5 Materi Pokok</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              <div
                onClick={() => setActiveTab('pengertian-dalil')}
                className="p-4 rounded-xl bg-emerald-50/70 dark:bg-slate-900/60 border border-emerald-200 dark:border-emerald-800/60 hover:border-emerald-400 transition-all cursor-pointer group"
              >
                <div className="text-xs font-black text-emerald-600 dark:text-emerald-400 mb-1">BAGIAN 1</div>
                <h4 className="text-sm font-bold text-slate-800 dark:text-slate-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  Pengertian & Dalil Naqli
                </h4>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                  Q.S. Ar-Rum: 41, Al-A'raf: 56, Al-Baqarah: 205, Hadits sedekah pohon & hemat air.
                </p>
              </div>

              <div
                onClick={() => setActiveTab('pentingnya-lingkungan')}
                className="p-4 rounded-xl bg-teal-50/70 dark:bg-slate-900/60 border border-teal-200 dark:border-teal-800/60 hover:border-teal-400 transition-all cursor-pointer group"
              >
                <div className="text-xs font-black text-teal-600 dark:text-teal-400 mb-1">BAGIAN 2</div>
                <h4 className="text-sm font-bold text-slate-800 dark:text-slate-100 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                  Pentingnya Cinta Lingkungan
                </h4>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                  Amanah Khalifah fil Ardh, Al-Mizan, Alam bertasbih, Hifz an-Nasl, & Prinsip Hima/Harim.
                </p>
              </div>

              <div
                onClick={() => setActiveTab('bentuk-kerusakan')}
                className="p-4 rounded-xl bg-amber-50/70 dark:bg-slate-900/60 border border-amber-200 dark:border-amber-800/60 hover:border-amber-400 transition-all cursor-pointer group"
              >
                <div className="text-xs font-black text-amber-600 dark:text-amber-400 mb-1">BAGIAN 3</div>
                <h4 className="text-sm font-bold text-slate-800 dark:text-slate-100 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                  Bentuk Kerusakan Lingkungan
                </h4>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                  Fasad fil Ardh: Deforestasi, sampah plastik, pencemaran air, polusi udara, kepunahan fauna.
                </p>
              </div>

              <div
                onClick={() => setActiveTab('ciri-cinta-lingkungan')}
                className="p-4 rounded-xl bg-blue-50/70 dark:bg-slate-900/60 border border-blue-200 dark:border-blue-800/60 hover:border-blue-400 transition-all cursor-pointer group"
              >
                <div className="text-xs font-black text-blue-600 dark:text-blue-400 mb-1">BAGIAN 4</div>
                <h4 className="text-sm font-bold text-slate-800 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Ciri-Ciri Cinta Lingkungan
                </h4>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                  5 Pilar Aksi: Thaharah, Anti-Israf (Hemat Air/Energi), Reboisasi, 3R, & Advokasi Hijau.
                </p>
              </div>

              <div
                onClick={() => setActiveTab('hikmah-kuis')}
                className="p-4 rounded-xl bg-purple-50/70 dark:bg-slate-900/60 border border-purple-200 dark:border-purple-800/60 hover:border-purple-400 transition-all cursor-pointer group"
              >
                <div className="text-xs font-black text-purple-600 dark:text-purple-400 mb-1">BAGIAN 5</div>
                <h4 className="text-sm font-bold text-slate-800 dark:text-slate-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  Hikmah & Kuis HOTS
                </h4>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                  Pahala sedekah jariyah, cegah bencana, rida Allah, studi kasus, & evaluasi 5 soal.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: PENGERTIAN & DALIL NAQLI */}
      {activeTab === 'pengertian-dalil' && (
        <div className="space-y-6">
          {/* PENGERTIAN BAHASA & ISTILAH */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-700 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-emerald-100 dark:bg-emerald-950/60 rounded-xl text-emerald-600 dark:text-emerald-400">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">
                  Pengertian Cinta Lingkungan (Al-Bī'ah) Menurut Bahasa dan Syariat
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Konstruk teologis dan etika ekologis (Fiqh al-Bī'ah) dalam Islam
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-emerald-50/70 dark:bg-slate-900/80 border border-emerald-200 dark:border-emerald-800/60 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-emerald-600 text-white text-[11px] font-bold">
                    Secara Bahasa (Etimologi)
                  </span>
                </div>
                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  {MATERI_KELAS_9_SEM_1_BAB_3.bagian1PengertianDanDalil.pengertianBahasaDanIstilah.secaraBahasa}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-teal-50/70 dark:bg-slate-900/80 border border-teal-200 dark:border-teal-800/60 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-teal-600 text-white text-[11px] font-bold">
                    Secara Istilah Syariat (Terminologi)
                  </span>
                </div>
                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  {MATERI_KELAS_9_SEM_1_BAB_3.bagian1PengertianDanDalil.pengertianBahasaDanIstilah.secaraIstilah}
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/50 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <span className="text-xs font-bold text-amber-800 dark:text-amber-300">
                  Kedudukan Fikih Lingkungan dalam Maqāṣid asy-Syarī'ah:
                </span>
                <p className="text-xs text-amber-700 dark:text-amber-300/90 leading-relaxed">
                  {MATERI_KELAS_9_SEM_1_BAB_3.bagian1PengertianDanDalil.pengertianBahasaDanIstilah.kedudukanSyariat}
                </p>
              </div>
            </div>
          </div>

          {/* DALIL AL-QUR'AN INTERAKTIF DENGAN AUDIO */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <BookmarkCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <h3 className="text-base font-bold text-slate-800 dark:text-slate-100">
                  Dalil Naqli Al-Qur'an tentang Kelestarian Lingkungan Hidup
                </h3>
              </div>
              <span className="text-xs text-slate-500 dark:text-slate-400">Audio Murottal Syaikh Alafasy</span>
            </div>

            <div className="space-y-4">
              {MATERI_KELAS_9_SEM_1_BAB_3.bagian1PengertianDanDalil.dalilAlQuran.map((ayat) => {
                const isPlaying = currentPlayingAudio === ayat.audioUrl;
                return (
                  <div
                    key={ayat.id}
                    className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-700 space-y-4"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100 dark:border-slate-700">
                      <div className="flex items-center gap-2.5">
                        <span className="px-3 py-1 rounded-lg bg-emerald-600 text-white font-black text-xs">
                          {ayat.surah}: {ayat.ayatNomor}
                        </span>
                        <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">
                          Surah {ayat.namaSurah} ({ayat.artiSurah})
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        {ayat.audioUrl && (
                          <button
                            onClick={() => handlePlayAudio(ayat.audioUrl)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                              isPlaying
                                ? 'bg-amber-500 text-white animate-pulse'
                                : 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-200 dark:hover:bg-emerald-900'
                            }`}
                          >
                            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                            <span>{isPlaying ? 'Jeda Audio' : 'Putar Murottal'}</span>
                          </button>
                        )}
                        <button
                          onClick={() => handleCopyText(`${ayat.teksArab}\n\n"${ayat.terjemahan}" (${ayat.surah}: ${ayat.ayatNomor})`, 'Ayat')}
                          className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600 transition-all cursor-pointer"
                          title="Salin Ayat dan Terjemah"
                        >
                          <Copy className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    {/* LAFAZ ARAB */}
                    <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 text-right">
                      <p
                        className="text-xl sm:text-2xl font-serif text-slate-800 dark:text-slate-100 leading-loose"
                        dir="rtl"
                      >
                        {ayat.teksArab}
                      </p>
                    </div>

                    {/* TRANSLITERASI & TERJEMAHAN */}
                    <div className="space-y-2">
                      <p className="text-xs italic text-emerald-700 dark:text-emerald-400 font-medium">
                        "{ayat.transliterasi}"
                      </p>
                      <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
                        <strong className="text-slate-900 dark:text-slate-100">Artinya: </strong>
                        "{ayat.terjemahan}"
                      </p>
                    </div>

                    {/* KANDUNGAN POKOK AYAT */}
                    <div className="p-3.5 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-800/40 space-y-1.5">
                      <span className="text-xs font-bold text-emerald-800 dark:text-emerald-300 block">
                        Kandungan Pokok & Pelajaran Ayat:
                      </span>
                      <ul className="space-y-1">
                        {ayat.kandunganPokok.map((k, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300"
                          >
                            <span className="text-emerald-600 font-bold">•</span>
                            <span>{k}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* DALIL HADITS SHAHIH */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Sprout className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              <h3 className="text-base font-bold text-slate-800 dark:text-slate-100">
                Dalil Hadits Nabi SAW tentang Konservasi Alam & Larangan Perusakan
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {MATERI_KELAS_9_SEM_1_BAB_3.bagian1PengertianDanDalil.dalilHaditsShahih.map((hadits) => (
                <div
                  key={hadits.id}
                  className="bg-white dark:bg-slate-800 rounded-2xl p-5 shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col justify-between space-y-3"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="px-2.5 py-0.5 rounded-md bg-teal-100 dark:bg-teal-950 text-teal-700 dark:text-teal-300 text-[11px] font-bold">
                        {hadits.nomorHadits}
                      </span>
                      <button
                        onClick={() => handleCopyText(`${hadits.teksArab}\n\n"${hadits.terjemahan}" (${hadits.perawi})`, 'Hadits')}
                        className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
                        title="Salin Hadits"
                      >
                        <Copy className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-100">
                      {hadits.tema}
                    </h4>
                    <p
                      className="text-base sm:text-lg font-serif text-slate-800 dark:text-slate-100 text-right leading-relaxed py-1"
                      dir="rtl"
                    >
                      {hadits.teksArab}
                    </p>
                    <p className="text-xs text-slate-600 dark:text-slate-300 italic leading-relaxed">
                      "{hadits.terjemahan}"
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800">
                    <span className="text-[11px] font-bold text-emerald-700 dark:text-emerald-400 block mb-0.5">
                      Pelajaran Kunci:
                    </span>
                    <p className="text-xs text-slate-600 dark:text-slate-300">
                      {hadits.pelajaranKunci}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: PENTINGNYA CINTA LINGKUNGAN */}
      {activeTab === 'pentingnya-lingkungan' && (
        <div className="space-y-6">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-700 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-emerald-100 dark:bg-emerald-950/60 rounded-xl text-emerald-600 dark:text-emerald-400">
                <Globe className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">
                  Urgensi & Filosofis Pentingnya Cinta Lingkungan dalam Islam
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Persaudaraan Kosmis (Ukhuwwah Kauniyyah), Amanah Khalifah, dan Prinsip Al-Mīzān
                </p>
              </div>
            </div>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {MATERI_KELAS_9_SEM_1_BAB_3.bagian2PentingnyaCintaLingkungan.latarBelakangUrgensi}
            </p>
          </div>

          {/* 5 ALASAN FUNDAMENTAL */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>5 Alasan Mendasar Mengapa Muslim Wajib Merawat Bumi</span>
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {MATERI_KELAS_9_SEM_1_BAB_3.bagian2PentingnyaCintaLingkungan.limaAlasanPenting.map((alasan) => (
                <div
                  key={alasan.no}
                  className="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm space-y-2 hover:border-emerald-300 dark:hover:border-emerald-700 transition-all"
                >
                  <div className="flex items-center justify-between">
                    <span className="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-black text-xs">
                      {alasan.no}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 text-[11px] font-semibold">
                      {alasan.dalil}
                    </span>
                  </div>
                  <h5 className="text-sm font-bold text-slate-900 dark:text-slate-100 pt-1">
                    {alasan.judul}
                  </h5>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {alasan.penjelasan}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* KONSEP KEARIFAN KONSERVASI ISLAM KLASIK (HIMA & HARIM) */}
          <div className="bg-gradient-to-br from-emerald-900 to-teal-950 rounded-2xl p-6 text-white space-y-4 shadow-lg border border-emerald-700/50">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-emerald-500/20 rounded-lg text-emerald-300">
                <TreePine className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white">
                  Kearifan Konservasi Lingkungan Hidup dalam Sejarah Peradaban Islam
                </h4>
                <p className="text-xs text-emerald-200/90">
                  Konsep Himā, Harīm, dan Ihyā' al-Mawāt sebagai pelopor hukum lingkungan dunia
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
              {MATERI_KELAS_9_SEM_1_BAB_3.bagian2PentingnyaCintaLingkungan.prinsipKonservasiIslam.map((konsep, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-white/10 border border-white/15 space-y-2 backdrop-blur-xs"
                >
                  <span className="text-sm font-bold text-emerald-300 block">
                    {konsep.istilah}
                  </span>
                  <p className="text-xs text-emerald-100/90 leading-relaxed">
                    {konsep.makna}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: BENTUK KERUSAKAN LINGKUNGAN */}
      {activeTab === 'bentuk-kerusakan' && (
        <div className="space-y-6">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-700 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-amber-100 dark:bg-amber-950/60 rounded-xl text-amber-600 dark:text-amber-400">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">
                  Bentuk-Bentuk Kerusakan Lingkungan Hidup (Fasād fil Arḍ)
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Analisis faktor penyebab, dampak destruktif, dan tinjauan dosa syariat
                </p>
              </div>
            </div>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {MATERI_KELAS_9_SEM_1_BAB_3.bagian3BentukKerusakanLingkungan.pengantarFasad}
            </p>

            {/* FILTER KATEGORI KERUSAKAN */}
            <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100 dark:border-slate-700">
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400 mr-2 flex items-center gap-1">
                <Filter className="w-3.5 h-3.5" />
                <span>Filter Kategori:</span>
              </span>
              {(['Semua', 'Daratan', 'Perairan', 'Udara', 'Hayati'] as const).map((kat) => (
                <button
                  key={kat}
                  onClick={() => setFilterKategoriKerusakan(kat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    filterKategoriKerusakan === kat
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
                  }`}
                >
                  {kat}
                </button>
              ))}
            </div>
          </div>

          {/* LIST KARTU KERUSAKAN */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredKerusakan.map((item) => (
              <div
                key={item.id}
                className="bg-white dark:bg-slate-800 rounded-2xl p-5 shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col justify-between space-y-3"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span
                      className={`px-2.5 py-0.5 rounded-md text-[11px] font-bold ${
                        item.kategori === 'Daratan'
                          ? 'bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300'
                          : item.kategori === 'Perairan'
                          ? 'bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300'
                          : item.kategori === 'Udara'
                          ? 'bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200'
                          : 'bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300'
                      }`}
                    >
                      {item.kategori}
                    </span>
                    <span className="text-[11px] text-red-500 dark:text-red-400 font-semibold flex items-center gap-1">
                      <Flame className="w-3.5 h-3.5" />
                      Fasad Fil Ardh
                    </span>
                  </div>

                  <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-slate-100">
                    {item.namaBentuk}
                  </h4>

                  <div className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                    <p>
                      <strong className="text-slate-700 dark:text-slate-200">Faktor Penyebab: </strong>
                      {item.faktorPenyebab}
                    </p>
                    <p>
                      <strong className="text-slate-700 dark:text-slate-200">Dampak Bencana: </strong>
                      {item.dampakDestruktif}
                    </p>
                  </div>
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-700">
                  <div className="p-2.5 rounded-xl bg-red-50 dark:bg-red-950/20 border border-red-200/60 dark:border-red-900/40">
                    <span className="text-[11px] font-bold text-red-700 dark:text-red-300 block mb-0.5">
                      Tinjauan Syariat Islam:
                    </span>
                    <p className="text-xs text-red-800 dark:text-red-200/90 leading-relaxed">
                      {item.tinjauanDosaSyariat}
                    </p>
                  </div>

                  <div className="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200/60 dark:border-emerald-900/40">
                    <span className="text-[11px] font-bold text-emerald-700 dark:text-emerald-300 block mb-0.5">
                      Solusi Aksi Nyata Pelajar:
                    </span>
                    <p className="text-xs text-emerald-800 dark:text-emerald-200/90 leading-relaxed">
                      {item.solusiPraktisPelajar}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 5: CIRI-CIRI CINTA LINGKUNGAN */}
      {activeTab === 'ciri-cinta-lingkungan' && (
        <div className="space-y-6">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-700 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-emerald-100 dark:bg-emerald-950/60 rounded-xl text-emerald-600 dark:text-emerald-400">
                <Leaf className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">
                  Ciri-Ciri & Karakteristik Mukmin Pecinta Lingkungan
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  5 Pilar perilaku nyata dalam kehidupan sehari-hari di rumah, sekolah, dan masyarakat
                </p>
              </div>
            </div>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {MATERI_KELAS_9_SEM_1_BAB_3.bagian4CiriCintaLingkungan.prinsipPerilaku}
            </p>
          </div>

          <div className="space-y-4">
            {MATERI_KELAS_9_SEM_1_BAB_3.bagian4CiriCintaLingkungan.limaPilarKarakter.map((pilar, idx) => (
              <div
                key={pilar.id}
                className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-700 space-y-4 hover:border-emerald-300 dark:hover:border-emerald-700 transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100 dark:border-slate-700">
                  <h4 className="text-base font-black text-slate-900 dark:text-slate-100 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs">
                      {idx + 1}
                    </span>
                    <span>{pilar.pilar}</span>
                  </h4>
                  <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-800/60">
                    Karakter Pelajar Rahmatan lil 'Alamin
                  </span>
                </div>

                <div className="space-y-2">
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
                    <strong className="text-slate-900 dark:text-slate-100">Manifestasi Perilaku: </strong>
                    {pilar.manifestasiPerilaku}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800">
                    <span className="text-[11px] font-bold text-slate-600 dark:text-slate-400 block mb-0.5">
                      Landasan Syariat:
                    </span>
                    <p className="text-xs text-emerald-700 dark:text-emerald-300 italic">
                      {pilar.landasanSyariat}
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-800/40">
                    <span className="text-[11px] font-bold text-emerald-800 dark:text-emerald-300 block mb-0.5">
                      Contoh Penerapan di Sekolah:
                    </span>
                    <p className="text-xs text-slate-700 dark:text-slate-300">
                      {pilar.contohRealitaSekolah}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 6: REFLEKSI & STUDI KASUS */}
      {activeTab === 'refleksi-kasus' && (
        <div className="space-y-6">
          {/* STUDI KASUS ACCORDION */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Brain className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              <h3 className="text-base font-bold text-slate-800 dark:text-slate-100">
                3 Studi Kasus Reflektif Kontemporer
              </h3>
            </div>

            <div className="space-y-3">
              {MATERI_KELAS_9_SEM_1_BAB_3.bagian5HikmahCintaLingkungan.tigaStudiKasus.map((kasus, idx) => {
                const isOpen = openKasusIndex === idx;
                return (
                  <div
                    key={kasus.id}
                    className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden transition-all"
                  >
                    <button
                      onClick={() => setOpenKasusIndex(isOpen ? null : idx)}
                      className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50 dark:hover:bg-slate-750 transition-colors cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 flex items-center justify-center font-black text-xs shrink-0">
                          {idx + 1}
                        </div>
                        <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-slate-100">
                          {kasus.judul}
                        </h4>
                      </div>
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-slate-400 shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                      )}
                    </button>

                    {isOpen && (
                      <div className="p-5 pt-0 border-t border-slate-100 dark:border-slate-700 space-y-4">
                        <div className="space-y-2 pt-3">
                          <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                            <strong className="text-slate-900 dark:text-slate-100">Fenomena Nyata: </strong>
                            {kasus.fenomenaModern}
                          </p>
                          <p className="text-xs text-amber-700 dark:text-amber-300/90 leading-relaxed bg-amber-50/60 dark:bg-amber-950/20 p-3 rounded-xl border border-amber-200 dark:border-amber-800/40">
                            <strong>Dilema Moral: </strong>
                            {kasus.dilemaMoral}
                          </p>
                        </div>

                        <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/50 space-y-1.5">
                          <span className="text-xs font-bold text-emerald-800 dark:text-emerald-300 block">
                            Tinjauan Etika Syariat & Al-Qur'an:
                          </span>
                          <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                            {kasus.analisisSyariat}
                          </p>
                        </div>

                        <div className="space-y-2">
                          <span className="text-xs font-bold text-slate-800 dark:text-slate-200 block">
                            Langkah Solutif Praktis:
                          </span>
                          <ul className="space-y-1.5">
                            {kasus.solusiPraktis.map((solusi, sIdx) => (
                              <li
                                key={sIdx}
                                className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300"
                              >
                                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                                <span>{solusi}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* LEMBAR MUHASABAH DIRI (SELF-AUDIT) 8 INDIKATOR */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-700 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100 dark:border-slate-700">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-emerald-100 dark:bg-emerald-950/60 rounded-xl text-emerald-600 dark:text-emerald-400">
                  <BookmarkCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-800 dark:text-slate-100">
                    Lembar Muhasabah Diri (Self-Audit) 8 Indikator Karakter Hijau
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Evaluasi kejujuran diri dalam merawat kelestarian alam ciptaan Allah
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="text-right">
                  <div className="text-xs font-bold text-slate-500 dark:text-slate-400">Skor Komitmen:</div>
                  <div className="text-lg font-black text-emerald-600 dark:text-emerald-400">
                    {muhasabahScore}% ({checkedMuhasabahCount}/{totalMuhasabah})
                  </div>
                </div>
                <button
                  onClick={() => {
                    setMuhasabahChecked({});
                    showToast('Lembar muhasabah direset.', 'info');
                  }}
                  className="p-2 rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 transition-all cursor-pointer"
                  title="Reset Checklist"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="space-y-2.5">
              {MATERI_KELAS_9_SEM_1_BAB_3.bagian5HikmahCintaLingkungan.lembarMuhasabah8Dimensi.map((item) => {
                const isChecked = !!muhasabahChecked[item.id];
                return (
                  <div
                    key={item.id}
                    onClick={() => {
                      setMuhasabahChecked((prev) => ({
                        ...prev,
                        [item.id]: !prev[item.id]
                      }));
                    }}
                    className={`p-4 rounded-xl border transition-all cursor-pointer flex items-start gap-3.5 ${
                      isChecked
                        ? 'bg-emerald-50/80 dark:bg-emerald-950/30 border-emerald-300 dark:border-emerald-800'
                        : 'bg-slate-50 dark:bg-slate-900/40 border-slate-200 dark:border-slate-800 hover:border-slate-300'
                    }`}
                  >
                    <div className="pt-0.5 text-emerald-600 dark:text-emerald-400">
                      {isChecked ? (
                        <CheckSquare className="w-5 h-5" />
                      ) : (
                        <Square className="w-5 h-5 text-slate-400" />
                      )}
                    </div>
                    <div className="space-y-1 flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-xs font-bold text-slate-900 dark:text-slate-100">
                          {item.indikator}
                        </span>
                        <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">
                          {item.dalilRujukan}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        {item.pernyataan}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* TAB 7: HIKMAH & KUIS HOTS */}
      {activeTab === 'hikmah-kuis' && (
        <div className="space-y-6">
          {/* 6 HIKMAH AGUNG CINTA LINGKUNGAN */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-700 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-emerald-100 dark:bg-emerald-950/60 rounded-xl text-emerald-600 dark:text-emerald-400">
                <Heart className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">
                  Hikmah Agung Mencintai dan Merawat Lingkungan Hidup
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Keberkahan duniawi, keselamatan generasi, dan investasi pahala akhirat
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 pt-2">
              {MATERI_KELAS_9_SEM_1_BAB_3.bagian5HikmahCintaLingkungan.enamHikmahUtama.map((hikmah) => (
                <div
                  key={hikmah.no}
                  className="p-4 rounded-xl bg-gradient-to-br from-slate-50 to-emerald-50/50 dark:from-slate-900/60 dark:to-emerald-950/20 border border-emerald-100 dark:border-emerald-800/40 space-y-2"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-emerald-600 text-white font-bold text-xs flex items-center justify-center">
                      {hikmah.no}
                    </span>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-100">
                      {hikmah.judul}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {hikmah.deskripsi}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* KUIS HOTS 5 SOAL INTERAKTIF */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-700 space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-700">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-amber-100 dark:bg-amber-950/60 rounded-xl text-amber-600 dark:text-amber-400">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-800 dark:text-slate-100">
                    Kuis Penalaran HOTS: Fikih Lingkungan & Tanggung Jawab Moral
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    5 Butir Soal Analitis Tingkat Tinggi (C4-C6) dengan Pembahasan Mendalam
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                  Terjawab: {answeredCount}/{totalQuestions}
                </span>
                <button
                  onClick={() => {
                    setUserAnswers({});
                    setShowKuisResult(false);
                    showToast('Kuis HOTS direset.', 'info');
                  }}
                  className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Ulangi</span>
                </button>
              </div>
            </div>

            {/* HASIL KUIS JIKA SELESAI */}
            {showKuisResult && (
              <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-700 text-white space-y-3 shadow-md">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-emerald-200 tracking-wider">HASIL EVALUASI</span>
                    <h4 className="text-xl font-black">
                      Skor Akhir: {calculateKuisScore()} / 100
                    </h4>
                  </div>
                  <div className="p-3 bg-white/20 rounded-2xl">
                    <Award className="w-8 h-8 text-amber-300" />
                  </div>
                </div>
                <p className="text-xs text-emerald-100 leading-relaxed">
                  {calculateKuisScore() >= 80
                    ? 'Luar biasa! Pemahamanmu terhadap dalil dan implementasi cinta lingkungan sangat matang. Terus pertahankan dan tularkan gaya hidup hijau ini kepada sesama!'
                    : calculateKuisScore() >= 60
                    ? 'Bagus! Kamu sudah memahami konsep dasar cinta lingkungan. Pelajari kembali pembahasan di bawah ini untuk menguatkan pemahamanmu.'
                    : 'Tetap semangat! Coba baca kembali materi dan dalil naqli di atas, lalu ulangi kuis ini untuk meningkatkan pemahamanmu.'}
                </p>
              </div>
            )}

            {/* DAFTAR PERTANYAAN */}
            <div className="space-y-6">
              {MATERI_KELAS_9_SEM_1_BAB_3.bagian5HikmahCintaLingkungan.kuisHots.map((soal, idx) => {
                const selectedAns = userAnswers[soal.id];
                const isAnswered = selectedAns !== undefined;

                return (
                  <div
                    key={soal.id}
                    className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 space-y-4"
                  >
                    <div className="flex items-start gap-3">
                      <span className="w-7 h-7 rounded-lg bg-slate-800 dark:bg-slate-700 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-100 leading-relaxed">
                        {soal.pertanyaan}
                      </p>
                    </div>

                    <div className="space-y-2 pt-1 pl-10">
                      {soal.pilihan.map((pil, pIdx) => {
                        const isSelected = selectedAns === pIdx;
                        const isCorrect = pIdx === soal.kunciJawaban;

                        let btnClass =
                          'w-full p-3 text-left rounded-xl text-xs font-medium border transition-all cursor-pointer flex items-start gap-2.5 ';

                        if (showKuisResult) {
                          if (isCorrect) {
                            btnClass +=
                              'bg-emerald-100 dark:bg-emerald-950/60 border-emerald-400 text-emerald-900 dark:text-emerald-100 font-bold';
                          } else if (isSelected && !isCorrect) {
                            btnClass +=
                              'bg-red-100 dark:bg-red-950/60 border-red-400 text-red-900 dark:text-red-100 font-bold';
                          } else {
                            btnClass +=
                              'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 opacity-60';
                          }
                        } else {
                          if (isSelected) {
                            btnClass +=
                              'bg-emerald-100 dark:bg-emerald-950/60 border-emerald-500 text-emerald-900 dark:text-emerald-100 font-bold shadow-xs';
                          } else {
                            btnClass +=
                              'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-750';
                          }
                        }

                        return (
                          <button
                            key={pIdx}
                            disabled={showKuisResult}
                            onClick={() => {
                              setUserAnswers((prev) => ({
                                ...prev,
                                [soal.id]: pIdx
                              }));
                            }}
                            className={btnClass}
                          >
                            <span className="shrink-0 font-bold">{pil.substring(0, 2)}</span>
                            <span className="flex-1">{pil.substring(3)}</span>
                          </button>
                        );
                      })}
                    </div>

                    {showKuisResult && (
                      <div className="ml-10 p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/50 space-y-1">
                        <span className="text-xs font-bold text-emerald-800 dark:text-emerald-300 block">
                          Pembahasan Kunci Jawaban:
                        </span>
                        <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                          {soal.pembahasan}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* BUTTON SELESAIKAN KUIS */}
            {!showKuisResult ? (
              <button
                disabled={answeredCount < totalQuestions}
                onClick={() => {
                  setShowKuisResult(true);
                  showToast('Hasil kuis HOTS berhasil dihitung!', 'success');
                }}
                className={`w-full py-3.5 rounded-xl text-xs sm:text-sm font-bold shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  answeredCount === totalQuestions
                    ? 'bg-emerald-600 hover:bg-emerald-500 text-white'
                    : 'bg-slate-200 dark:bg-slate-700 text-slate-400 cursor-not-allowed'
                }`}
              >
                <Award className="w-4 h-4" />
                <span>
                  Lihat Skor & Pembahasan Lengkap ({answeredCount}/{totalQuestions} Soal Terjawab)
                </span>
              </button>
            ) : (
              <div className="flex justify-center pt-2">
                <button
                  onClick={() => {
                    setUserAnswers({});
                    setShowKuisResult(false);
                    showToast('Kuis HOTS direset.', 'info');
                  }}
                  className="px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Ulangi Pengerjaan Kuis</span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
