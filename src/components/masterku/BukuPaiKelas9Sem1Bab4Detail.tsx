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
  AlertTriangle,
  Heart,
  ChevronDown,
  ChevronUp,
  Activity,
  Scissors,
  Users,
  Calendar,
  Layers,
  Utensils,
  CheckCheck
} from 'lucide-react';
import {
  MATERI_KELAS9_SEM1_BAB4,
  DalilPenyembelihanItem,
  HaditsPenyembelihanItem,
  KetentuanFikihItem,
  KomparasiKurbanAkikahItem,
  UratLeherItem,
  StudiKasusPenyembelihanItem
} from '../../data/materiKelas9Sem1Bab4Data';
import { useToast } from '../common/Toast';

interface Props {
  onAskAI: (prompt: string) => void;
}

type Bab4K9SubTab =
  | 'ringkasan'
  | 'ketentuan-dalil'
  | 'komparasi-kurban-akikah'
  | 'syarat-rukun-prosedur'
  | 'hikmah-ilmiah'
  | 'studi-kasus'
  | 'kuis-hots';

export const BukuPaiKelas9Sem1Bab4Detail: React.FC<Props> = ({ onAskAI }) => {
  const { showToast } = useToast();
  const [activeTab, setActiveTab] = useState<Bab4K9SubTab>('ringkasan');

  // Filter Rukun
  const [selectedRukunId, setSelectedRukunId] = useState<string>('rukun-1');

  // Filter Urat Leher
  const [selectedUrat, setSelectedUrat] = useState<string>('all');

  // Audio Player State
  const [currentPlayingAudio, setCurrentPlayingAudio] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Copy state
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  // Kuis HOTS State
  const [userAnswers, setUserAnswers] = useState<{ [key: number]: number }>({});
  const [quizSubmitted, setQuizSubmitted] = useState<boolean>(false);

  // Muhasabah Checklist State
  const [checkedMuhasabah, setCheckedMuhasabah] = useState<{ [key: number]: boolean }>({
    1: true,
    2: true,
    3: true,
    4: true,
    5: false,
    6: true,
    7: false,
    8: true
  });

  // Expanded Accordion
  const [expandedKasusId, setExpandedKasusId] = useState<string>('kasus-1');

  const handleCopyText = (key: string, textToCopy: string) => {
    navigator.clipboard.writeText(textToCopy);
    setCopiedKey(key);
    showToast('Teks berhasil disalin ke clipboard!', 'success');
    setTimeout(() => {
      setCopiedKey(null);
    }, 2500);
  };

  const handlePlayAudio = (id: string, audioUrl?: string) => {
    if (!audioUrl) {
      showToast('Audio murottal belum tersedia untuk ayat ini.', 'info');
      return;
    }

    if (currentPlayingAudio === id) {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setCurrentPlayingAudio(null);
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      const newAudio = new Audio(audioUrl);
      audioRef.current = newAudio;
      setCurrentPlayingAudio(id);
      newAudio.play().catch(e => {
        console.error('Audio play error:', e);
        showToast('Gagal memutar audio murottal.', 'error');
        setCurrentPlayingAudio(null);
      });
      newAudio.onended = () => {
        setCurrentPlayingAudio(null);
      };
    }
  };

  const handleSelectAnswer = (questionIndex: number, optionIndex: number) => {
    if (quizSubmitted) return;
    setUserAnswers(prev => ({
      ...prev,
      [questionIndex]: optionIndex
    }));
  };

  const calculateScore = () => {
    let score = 0;
    MATERI_KELAS9_SEM1_BAB4.kuisHots.forEach((q, idx) => {
      if (userAnswers[idx] === q.kunciJawaban) {
        score += 20; // 5 soal x 20 = 100
      }
    });
    return score;
  };

  const handleResetQuiz = () => {
    setUserAnswers({});
    setQuizSubmitted(false);
    showToast('Kuis berhasil direset! Silakan coba kembali.', 'info');
  };

  const toggleMuhasabah = (id: number) => {
    setCheckedMuhasabah(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const muhasabahScore = Object.values(checkedMuhasabah).filter(Boolean).length;

  return (
    <div className="space-y-6">
      {/* ========================================================================= */}
      {/* HEADER HERO CHAPTER */}
      {/* ========================================================================= */}
      <div className="bg-gradient-to-r from-amber-700 via-orange-700 to-red-800 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
        <div className="relative z-10 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-amber-400 text-amber-950 font-black text-xs tracking-wider uppercase shadow-xs">
              Bab 4 • Fikih Kelas IX
            </span>
            <span className="px-3 py-1 rounded-full bg-white/20 text-white font-medium text-xs backdrop-blur-xs">
              Semester 1 • Kurikulum Merdeka
            </span>
            <span className="px-3 py-1 rounded-full bg-red-950/40 text-amber-200 font-bold text-xs">
              {MATERI_KELAS9_SEM1_BAB4.header.cpElement}
            </span>
          </div>

          <div className="space-y-2 max-w-4xl">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-tight">
              {MATERI_KELAS9_SEM1_BAB4.header.title}
            </h1>
            <p className="text-sm sm:text-base text-amber-100 font-medium leading-relaxed">
              {MATERI_KELAS9_SEM1_BAB4.header.subJudul}
            </p>
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              onClick={() =>
                onAskAI(
                  'Jelaskan materi lengkap PAI Kelas IX Semester 1 Bab 4 tentang Ketentuan Penyembelihan Hewan, Kurban, dan Akikah beserta dalil naqli, syarat rukun, adab, dan hikmahnya!'
                )
              }
              className="px-4 py-2.5 rounded-xl bg-white text-orange-900 font-bold text-xs sm:text-sm hover:bg-orange-50 transition-all shadow-md flex items-center gap-2 cursor-pointer"
            >
              <Bot className="w-4 h-4 text-orange-600" />
              <span>Tanya Masterku AI Bab 4</span>
            </button>
            <div className="text-xs text-amber-200/90 italic flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>{MATERI_KELAS9_SEM1_BAB4.header.tagline}</span>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* NAVIGATION TABS */}
      {/* ========================================================================= */}
      <div className="flex items-center gap-2 overflow-x-auto p-2 bg-sky-100/90 rounded-2xl border border-sky-200 shadow-xs no-scrollbar">
        <button
          onClick={() => setActiveTab('ringkasan')}
          className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 active:bg-emerald-600 active:text-amber-200 ${
            activeTab === 'ringkasan'
              ? 'bg-blue-600 text-white shadow-md ring-2 ring-blue-300 border border-blue-500 font-black'
              : 'bg-sky-50 text-black border border-sky-200 hover:bg-sky-200/70 font-bold'
          }`}
        >
          <BookOpen className={`w-4 h-4 shrink-0 drop-shadow-2xs ${activeTab === 'ringkasan' ? 'text-amber-300' : 'text-amber-500 font-bold'}`} />
          <span className={activeTab === 'ringkasan' ? 'text-white font-bold' : 'text-black font-bold'}>1. Pengantar & Tujuan</span>
        </button>

        <button
          onClick={() => setActiveTab('ketentuan-dalil')}
          className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 active:bg-emerald-600 active:text-amber-200 ${
            activeTab === 'ketentuan-dalil'
              ? 'bg-blue-600 text-white shadow-md ring-2 ring-blue-300 border border-blue-500 font-black'
              : 'bg-sky-50 text-black border border-sky-200 hover:bg-sky-200/70 font-bold'
          }`}
        >
          <FileText className={`w-4 h-4 shrink-0 drop-shadow-2xs ${activeTab === 'ketentuan-dalil' ? 'text-amber-300' : 'text-amber-500 font-bold'}`} />
          <span className={activeTab === 'ketentuan-dalil' ? 'text-white font-bold' : 'text-black font-bold'}>2. Dalil Al-Qur'an & Hadits</span>
        </button>

        <button
          onClick={() => setActiveTab('komparasi-kurban-akikah')}
          className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 active:bg-emerald-600 active:text-amber-200 ${
            activeTab === 'komparasi-kurban-akikah'
              ? 'bg-blue-600 text-white shadow-md ring-2 ring-blue-300 border border-blue-500 font-black'
              : 'bg-sky-50 text-black border border-sky-200 hover:bg-sky-200/70 font-bold'
          }`}
        >
          <Layers className={`w-4 h-4 shrink-0 drop-shadow-2xs ${activeTab === 'komparasi-kurban-akikah' ? 'text-amber-300' : 'text-amber-500 font-bold'}`} />
          <span className={activeTab === 'komparasi-kurban-akikah' ? 'text-white font-bold' : 'text-black font-bold'}>3. Kurban vs Akikah</span>
        </button>

        <button
          onClick={() => setActiveTab('syarat-rukun-prosedur')}
          className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 active:bg-emerald-600 active:text-amber-200 ${
            activeTab === 'syarat-rukun-prosedur'
              ? 'bg-blue-600 text-white shadow-md ring-2 ring-blue-300 border border-blue-500 font-black'
              : 'bg-sky-50 text-black border border-sky-200 hover:bg-sky-200/70 font-bold'
          }`}
        >
          <Scissors className={`w-4 h-4 shrink-0 drop-shadow-2xs ${activeTab === 'syarat-rukun-prosedur' ? 'text-amber-300' : 'text-amber-500 font-bold'}`} />
          <span className={activeTab === 'syarat-rukun-prosedur' ? 'text-white font-bold' : 'text-black font-bold'}>4. Syarat, Rukun & 4 Urat</span>
        </button>

        <button
          onClick={() => setActiveTab('hikmah-ilmiah')}
          className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 active:bg-emerald-600 active:text-amber-200 ${
            activeTab === 'hikmah-ilmiah'
              ? 'bg-blue-600 text-white shadow-md ring-2 ring-blue-300 border border-blue-500 font-black'
              : 'bg-sky-50 text-black border border-sky-200 hover:bg-sky-200/70 font-bold'
          }`}
        >
          <Heart className={`w-4 h-4 shrink-0 drop-shadow-2xs ${activeTab === 'hikmah-ilmiah' ? 'text-amber-300' : 'text-amber-500 font-bold'}`} />
          <span className={activeTab === 'hikmah-ilmiah' ? 'text-white font-bold' : 'text-black font-bold'}>5. Hikmah Luhur & Sains</span>
        </button>

        <button
          onClick={() => setActiveTab('studi-kasus')}
          className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 active:bg-emerald-600 active:text-amber-200 ${
            activeTab === 'studi-kasus'
              ? 'bg-blue-600 text-white shadow-md ring-2 ring-blue-300 border border-blue-500 font-black'
              : 'bg-sky-50 text-black border border-sky-200 hover:bg-sky-200/70 font-bold'
          }`}
        >
          <Activity className={`w-4 h-4 shrink-0 drop-shadow-2xs ${activeTab === 'studi-kasus' ? 'text-amber-300' : 'text-amber-500 font-bold'}`} />
          <span className={activeTab === 'studi-kasus' ? 'text-white font-bold' : 'text-black font-bold'}>6. Studi Kasus & Muhasabah</span>
        </button>

        <button
          onClick={() => setActiveTab('kuis-hots')}
          className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 active:bg-emerald-600 active:text-amber-200 ${
            activeTab === 'kuis-hots'
              ? 'bg-blue-600 text-white shadow-md ring-2 ring-blue-300 border border-blue-500 font-black'
              : 'bg-sky-50 text-black border border-sky-200 hover:bg-sky-200/70 font-bold'
          }`}
        >
          <Award className={`w-4 h-4 shrink-0 drop-shadow-2xs ${activeTab === 'kuis-hots' ? 'text-amber-300' : 'text-amber-500 font-bold'}`} />
          <span className={activeTab === 'kuis-hots' ? 'text-white font-bold' : 'text-black font-bold'}>7. Evaluasi Kuis HOTS</span>
        </button>
      </div>

      {/* ========================================================================= */}
      {/* TAB 1: RINGKASAN & TUJUAN PEMBELAJARAN */}
      {/* ========================================================================= */}
      {activeTab === 'ringkasan' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
            <h2 className="text-xl font-black text-slate-800 flex items-center gap-2.5">
              <BookOpen className="w-5 h-5 text-orange-600" />
              <span>Pengantar Materi Bab 4</span>
            </h2>
            <div className="space-y-3 text-slate-700 text-sm leading-relaxed">
              <p>{MATERI_KELAS9_SEM1_BAB4.pengantar.paragraf1}</p>
              <p>{MATERI_KELAS9_SEM1_BAB4.pengantar.paragraf2}</p>
            </div>
          </div>

          {/* Target Capaian Pembelajaran */}
          <div className="bg-gradient-to-br from-orange-50 via-amber-50 to-red-50 rounded-2xl p-6 border border-orange-200 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-orange-700" />
                <h3 className="text-base sm:text-lg font-bold text-orange-950">
                  Target Capaian Pembelajaran (CP Fikih Kelas IX)
                </h3>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-orange-200/80 text-orange-900 font-extrabold text-xs">
                6 Indikator Keberhasilan
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {MATERI_KELAS9_SEM1_BAB4.pengantar.tujuanPembelajaran.map((tujuan, index) => (
                <div
                  key={index}
                  className="bg-white p-3.5 rounded-xl border border-orange-100 flex items-start gap-3 shadow-xs"
                >
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-600 text-white font-black text-xs flex items-center justify-center">
                    {index + 1}
                  </span>
                  <p className="text-xs sm:text-sm text-slate-700 font-medium leading-normal">
                    {tujuan}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 3 Pilar Utama Bab 4 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2">
              <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-700 flex items-center justify-center">
                <Scissors className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-slate-800">1. Ketentuan Sembelihan</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Memahami hakikat adz-dzabh, an-nahr, syarat penyembelih, hewan, alat pemotong tajam (larangan tulang & kuku), serta bacaan tasmiyah.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
                <Calendar className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-slate-800">2. Kurban vs Akikah</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Membandingkan secara presisi waktu pelaksanaan, jenis & umur hewan (musinnah), porsi orang, cara pembagian (mentah vs matang), dan larangan menjual kulit.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2">
              <div className="w-10 h-10 rounded-xl bg-red-100 text-red-700 flex items-center justify-center">
                <Heart className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-slate-800">3. Hikmah & Kepedulian</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Menghayati pengorbanan Nabi Ibrahim AS, memupuk empati asupan dhuafa, adab kasih sayang kepada hewan (animal welfare), serta higienitas ilmiah daging sembelihan.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 2: DALIL AL-QUR'AN & HADITS SHAHIH */}
      {/* ========================================================================= */}
      {activeTab === 'ketentuan-dalil' && (
        <div className="space-y-6">
          {/* Dalil Al-Qur'an */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-black text-slate-800 flex items-center gap-2">
                <FileText className="w-5 h-5 text-orange-600" />
                <span>Dalil Naqli Al-Qur'an tentang Penyembelihan & Kurban</span>
              </h2>
              <span className="text-xs text-slate-500">4 Surah Utama</span>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {MATERI_KELAS9_SEM1_BAB4.dalilAlQuran.map(dalil => (
                <div
                  key={dalil.id}
                  className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-4"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-800 font-black text-xs">
                          {dalil.namaSurah} Ayat {dalil.ayatNomor}
                        </span>
                        <span className="text-xs text-slate-500 font-medium">
                          ({dalil.artiSurah})
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 self-end sm:self-auto">
                      {dalil.audioUrl && (
                        <button
                          onClick={() => handlePlayAudio(dalil.id, dalil.audioUrl)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                            currentPlayingAudio === dalil.id
                              ? 'bg-orange-600 text-white animate-pulse'
                              : 'bg-orange-50 text-orange-700 hover:bg-orange-100'
                          }`}
                        >
                          {currentPlayingAudio === dalil.id ? (
                            <>
                              <Pause className="w-3.5 h-3.5" />
                              <span>Jeda Murottal</span>
                            </>
                          ) : (
                            <>
                              <Play className="w-3.5 h-3.5" />
                              <span>Putar Murottal</span>
                            </>
                          )}
                        </button>
                      )}

                      <button
                        onClick={() =>
                          handleCopyText(
                            dalil.id,
                            `${dalil.namaSurah} Ayat ${dalil.ayatNomor}\n${dalil.teksArab}\n"${dalil.terjemahan}"`
                          )
                        }
                        className="p-1.5 rounded-lg text-slate-400 hover:text-orange-600 hover:bg-orange-50 transition-colors cursor-pointer"
                        title="Salin Ayat & Terjemah"
                      >
                        {copiedKey === dalil.id ? (
                          <Check className="w-4 h-4 text-emerald-600" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Teks Arab */}
                  <div className="bg-amber-50/50 rounded-xl p-4 border border-amber-100/80">
                    <p
                      className="text-right text-xl sm:text-2xl font-serif text-slate-900 leading-loose"
                      dir="rtl"
                    >
                      {dalil.teksArab}
                    </p>
                  </div>

                  {/* Transliterasi & Terjemahan */}
                  <div className="space-y-2">
                    <p className="text-xs text-orange-800 font-medium italic">
                      {dalil.transliterasi}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium bg-slate-50 p-3 rounded-lg border border-slate-100">
                      <span className="font-bold text-slate-800">Artinya: </span>
                      "{dalil.terjemahan}"
                    </p>
                  </div>

                  {/* Kandungan Pokok */}
                  <div className="bg-orange-50/60 rounded-xl p-3.5 space-y-1.5 border border-orange-100">
                    <span className="text-xs font-black text-orange-950 flex items-center gap-1.5">
                      <Lightbulb className="w-3.5 h-3.5 text-orange-600" />
                      Kandungan Makna Pokok:
                    </span>
                    <ul className="space-y-1 text-xs text-slate-700 list-disc list-inside">
                      {dalil.kandunganPokok.map((item, idx) => (
                        <li key={idx} className="leading-relaxed font-medium">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hadits-Hadits Shahih */}
          <div className="space-y-4 pt-4 border-t border-slate-200">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-black text-slate-800 flex items-center gap-2">
                <BookmarkCheck className="w-5 h-5 text-orange-600" />
                <span>Hadits-Hadits Shahih Tuntunan Nabi SAW</span>
              </h2>
              <span className="text-xs text-slate-500">5 Riwayat Utama</span>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {MATERI_KELAS9_SEM1_BAB4.haditsShahih.map(hadits => (
                <div
                  key={hadits.id}
                  className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-3"
                >
                  <div className="flex items-center justify-between gap-2 pb-2 border-b border-slate-100">
                    <div>
                      <span className="px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-900 font-black text-xs">
                        {hadits.perawi}
                      </span>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-800 mt-1">
                        {hadits.tema}
                      </h4>
                    </div>
                    <button
                      onClick={() =>
                        handleCopyText(
                          hadits.id,
                          `${hadits.nomorHadits}\n${hadits.teksArab}\n"${hadits.terjemahan}"`
                        )
                      }
                      className="p-1.5 rounded-lg text-slate-400 hover:text-orange-600 hover:bg-orange-50 transition-colors cursor-pointer"
                      title="Salin Hadits"
                    >
                      {copiedKey === hadits.id ? (
                        <Check className="w-4 h-4 text-emerald-600" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  {/* Teks Arab */}
                  <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-100">
                    <p
                      className="text-right text-base sm:text-lg font-serif text-slate-900 leading-loose"
                      dir="rtl"
                    >
                      {hadits.teksArab}
                    </p>
                  </div>

                  {/* Terjemahan */}
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                    <span className="font-bold text-slate-800">Artinya: </span>
                    "{hadits.terjemahan}"
                  </p>

                  {/* Pelajaran Kunci */}
                  <div className="p-2.5 rounded-lg bg-amber-50/80 border border-amber-200/70 text-xs text-amber-950 font-medium flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong className="font-bold">Fikih Kunci: </strong>
                      {hadits.pelajaranKunci}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 3: KOMPARASI KURBAN VS AKIKAH */}
      {/* ========================================================================= */}
      {activeTab === 'komparasi-kurban-akikah' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-black text-slate-800 flex items-center gap-2">
                  <Layers className="w-5 h-5 text-orange-600" />
                  <span>Tabel Komparasi Syariat: Kurban vs Akikah</span>
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  Membedakan indikator hukum, waktu, porsi hewan, dan cara pembagian daging
                </p>
              </div>
              <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-900 font-bold text-xs">
                Fikih Komparatif
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                    <th className="p-3.5 w-1/4">Indikator</th>
                    <th className="p-3.5 w-3/8 text-orange-900 bg-orange-50/80">
                      Ibadah Kurban (Udh-hiyyah)
                    </th>
                    <th className="p-3.5 w-3/8 text-amber-900 bg-amber-50/80">
                      Ibadah Akikah ('Aqīqah)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-700">
                  {MATERI_KELAS9_SEM1_BAB4.komparasiKurbanAkikah.map((item, index) => (
                    <tr key={index} className="hover:bg-slate-50/70 transition-colors">
                      <td className="p-3.5 font-bold text-slate-800 bg-slate-50/50">
                        {item.indikator}
                        <span className="block text-[11px] font-normal text-slate-500 mt-1">
                          {item.keteranganSyariat}
                        </span>
                      </td>
                      <td className="p-3.5 whitespace-pre-line leading-relaxed bg-orange-50/30">
                        {item.kurban}
                      </td>
                      <td className="p-3.5 whitespace-pre-line leading-relaxed bg-amber-50/30">
                        {item.akikah}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Syarat Usia Hewan (Musinnah) & Larangan 4 Cacat */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Usia Hewan */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-3">
              <h3 className="text-base font-bold text-slate-800 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-orange-600" />
                <span>Kriteria Usia Minimal Hewan (Musinnah)</span>
              </h3>
              <div className="space-y-2 text-xs sm:text-sm">
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex justify-between items-center">
                  <span className="font-bold text-slate-800">Unta</span>
                  <span className="text-orange-700 font-black">Minimal 5 Tahun (Masuk th ke-6)</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex justify-between items-center">
                  <span className="font-bold text-slate-800">Sapi / Kerbau</span>
                  <span className="text-orange-700 font-black">Minimal 2 Tahun (Masuk th ke-3)</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex justify-between items-center">
                  <span className="font-bold text-slate-800">Kambing Jawa (Kacang)</span>
                  <span className="text-orange-700 font-black">Minimal 1 Tahun (Masuk th ke-2)</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex justify-between items-center">
                  <span className="font-bold text-slate-800">Domba / Biri-biri (Jadz'ah)</span>
                  <span className="text-orange-700 font-black">Minimal 6 Bulan - 1 Th (Ganti gigi)</span>
                </div>
              </div>
            </div>

            {/* 4 Cacat Terlarang */}
            <div className="bg-red-50/70 p-5 rounded-2xl border border-red-200 shadow-xs space-y-3">
              <h3 className="text-base font-bold text-red-950 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-red-600" />
                <span>4 Cacat yang Menggugurkan Keabsahan</span>
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-red-900 font-medium">
                <li className="flex items-center gap-2">
                  <XCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
                  <span><strong>Buta Sebelah:</strong> Yang jelas kebutaannya (al-'aura).</span>
                </li>
                <li className="flex items-center gap-2">
                  <XCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
                  <span><strong>Sakit Parah:</strong> Tampak jelas gejalanya (al-maridhah).</span>
                </li>
                <li className="flex items-center gap-2">
                  <XCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
                  <span><strong>Pincang Nyata:</strong> Tidak mampu berjalan bersama rombongan (al-'arja).</span>
                </li>
                <li className="flex items-center gap-2">
                  <XCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
                  <span><strong>Sangat Kurus:</strong> Hingga tidak memiliki sumsum tulang (al-kasirah).</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 4: SYARAT, RUKUN, & 4 URAT LEHER */}
      {/* ========================================================================= */}
      {activeTab === 'syarat-rukun-prosedur' && (
        <div className="space-y-6">
          {/* 4 Rukun Penyembelihan */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
            <h2 className="text-lg font-black text-slate-800 flex items-center gap-2">
              <Scissors className="w-5 h-5 text-orange-600" />
              <span>4 Rukun Penyembelihan Hewan (Adz-Dzabh)</span>
            </h2>

            <div className="flex flex-wrap gap-2 pb-2">
              {MATERI_KELAS9_SEM1_BAB4.rukunPenyembelihan.map(rukun => (
                <button
                  key={rukun.id}
                  onClick={() => setSelectedRukunId(rukun.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    selectedRukunId === rukun.id
                      ? 'bg-orange-600 text-white shadow-md'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {rukun.aspek}
                </button>
              ))}
            </div>

            {(() => {
              const rukun =
                MATERI_KELAS9_SEM1_BAB4.rukunPenyembelihan.find(r => r.id === selectedRukunId) ||
                MATERI_KELAS9_SEM1_BAB4.rukunPenyembelihan[0];
              return (
                <div className="p-5 rounded-2xl bg-orange-50/50 border border-orange-200 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-black text-orange-950">{rukun.aspek}</h3>
                    <span className="px-2.5 py-0.5 rounded-md bg-orange-200 text-orange-900 text-xs font-bold">
                      Dalil: {rukun.landasanHukum}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 font-medium">
                    {rukun.deskripsi}
                  </p>

                  <div className="space-y-1.5 pt-2">
                    <span className="text-xs font-black text-orange-900">Syarat Sah:</span>
                    <ul className="space-y-1 text-xs text-slate-700 list-disc list-inside">
                      {rukun.syaratSah.map((syarat, idx) => (
                        <li key={idx} className="font-medium">
                          {syarat}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-3 bg-white rounded-xl border border-orange-200 text-xs text-orange-900">
                    <strong className="font-bold">Catatan Fikih: </strong>
                    {rukun.catatanPenting}
                  </div>
                </div>
              );
            })()}
          </div>

          {/* Anatomi 4 Urat Leher yang Wajib Terputus */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h3 className="text-lg font-black text-slate-800 flex items-center gap-2">
                  <Activity className="w-5 h-5 text-red-600" />
                  <span>Anatomi Fisiologis: 4 Urat Leher Wajib Terputus</span>
                </h3>
                <p className="text-xs text-slate-500">
                  Kaidah fikih dan sains kedokteran hewan untuk menjamin sembelihan sah, halal, dan bebas rasa sakit
                </p>
              </div>
              <span className="px-3 py-1 rounded-full bg-red-100 text-red-900 font-bold text-xs">
                Syarat Mutlak Halal
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {MATERI_KELAS9_SEM1_BAB4.empatUratLeher.map((urat, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-gradient-to-br from-slate-50 to-orange-50/40 border border-slate-200 space-y-2 shadow-xs"
                >
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full bg-red-600 text-white font-black text-[11px]">
                      {urat.hukumPemotongan}
                    </span>
                    <span className="text-xs font-mono text-slate-500">{urat.namaBiologi}</span>
                  </div>
                  <h4 className="text-base font-black text-slate-800">{urat.namaUrat}</h4>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">
                    <strong className="font-semibold text-slate-800">Fungsi Tubuh: </strong>
                    {urat.fungsiFisiologis}
                  </p>
                  <div className="p-2.5 rounded-lg bg-white border border-orange-100 text-xs text-orange-950 font-medium">
                    <strong className="font-bold text-orange-700">Dampak Medis: </strong>
                    {urat.dampakIlmiah}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Adab Sunnah vs Hal Makruh */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-emerald-50/70 p-5 rounded-2xl border border-emerald-200 shadow-xs space-y-3">
              <h3 className="text-base font-bold text-emerald-950 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span>Sunnah & Adab Penuh Ihsan saat Menyembelih</span>
              </h3>
              <ul className="space-y-2 text-xs text-emerald-900 font-medium">
                {MATERI_KELAS9_SEM1_BAB4.sunnahDanMakruh.sunnahPenyembelihan.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-red-50/70 p-5 rounded-2xl border border-red-200 shadow-xs space-y-3">
              <h3 className="text-base font-bold text-red-950 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-red-600" />
                <span>Hal-Hal yang Dimakruhkan & Diharamkan</span>
              </h3>
              <ul className="space-y-2 text-xs text-red-900 font-medium">
                {MATERI_KELAS9_SEM1_BAB4.sunnahDanMakruh.makruhDanHaram.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Fikih Modern & Stunning */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-orange-600" />
              <h3 className="text-base font-bold text-slate-800">
                {MATERI_KELAS9_SEM1_BAB4.teknikPenyembelihanModern.judul}
              </h3>
            </div>
            <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 font-semibold text-xs inline-block">
              {MATERI_KELAS9_SEM1_BAB4.teknikPenyembelihanModern.nomorFatwa}
            </span>
            <p className="text-xs sm:text-sm text-slate-700 whitespace-pre-line leading-relaxed font-medium pt-2">
              {MATERI_KELAS9_SEM1_BAB4.teknikPenyembelihanModern.penjelasan}
            </p>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 5: HIKMAH LUHUR & SAINS KESEHATAN */}
      {/* ========================================================================= */}
      {activeTab === 'hikmah-ilmiah' && (
        <div className="space-y-6">
          {/* Hikmah Kurban */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
            <h2 className="text-lg font-black text-slate-800 flex items-center gap-2">
              <Award className="w-5 h-5 text-orange-600" />
              <span>6 Hikmah Luhur Ibadah Kurban (Udh-hiyyah)</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {MATERI_KELAS9_SEM1_BAB4.hikmahLuhur.hikmahKurban.map(hikmah => (
                <div
                  key={hikmah.nomor}
                  className="p-4 rounded-xl bg-orange-50/40 border border-orange-100 space-y-2"
                >
                  <span className="w-7 h-7 rounded-lg bg-orange-600 text-white font-black text-xs flex items-center justify-center">
                    {hikmah.nomor}
                  </span>
                  <h4 className="text-sm font-bold text-orange-950">{hikmah.judul}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    {hikmah.deskripsi}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Hikmah Akikah */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
            <h2 className="text-lg font-black text-slate-800 flex items-center gap-2">
              <Users className="w-5 h-5 text-amber-600" />
              <span>4 Hikmah Luhur Ibadah Akikah ('Aqīqah)</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {MATERI_KELAS9_SEM1_BAB4.hikmahLuhur.hikmahAkikah.map(hikmah => (
                <div
                  key={hikmah.nomor}
                  className="p-4 rounded-xl bg-amber-50/40 border border-amber-100 space-y-2"
                >
                  <span className="w-7 h-7 rounded-lg bg-amber-600 text-white font-black text-xs flex items-center justify-center">
                    {hikmah.nomor}
                  </span>
                  <h4 className="text-sm font-bold text-amber-950">{hikmah.judul}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    {hikmah.deskripsi}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Hikmah Sains Fisiologis */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-6 shadow-md space-y-4">
            <div className="flex items-center gap-2">
              <Activity className="w-5 h-5 text-orange-400" />
              <h2 className="text-lg font-black">
                Hikmah Ilmiah & Fisiologis di Balik Penyembelihan Syar'i
              </h2>
            </div>
            <p className="text-xs text-slate-300">
              Bukti kebenaran sabda Rasulullah SAW melalui kacamata ilmu kedokteran modern dan animal welfare
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
              {MATERI_KELAS9_SEM1_BAB4.hikmahLuhur.hikmahIlmiahPenyembelihan.map(item => (
                <div
                  key={item.nomor}
                  className="p-4 rounded-xl bg-white/10 border border-white/10 space-y-2 backdrop-blur-xs"
                >
                  <span className="w-6 h-6 rounded-md bg-orange-500 text-white font-black text-xs flex items-center justify-center">
                    {item.nomor}
                  </span>
                  <h4 className="text-sm font-bold text-amber-300">{item.judul}</h4>
                  <p className="text-xs text-slate-200 leading-relaxed font-normal">
                    {item.deskripsi}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 6: STUDI KASUS & MUHASABAH */}
      {/* ========================================================================= */}
      {activeTab === 'studi-kasus' && (
        <div className="space-y-6">
          {/* Studi Kasus Kontemporer */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
            <h2 className="text-lg font-black text-slate-800 flex items-center gap-2">
              <Activity className="w-5 h-5 text-orange-600" />
              <span>3 Studi Kasus Reflektif Era Kontemporer</span>
            </h2>

            <div className="space-y-3">
              {MATERI_KELAS9_SEM1_BAB4.studiKasus.map(kasus => {
                const isExpanded = expandedKasusId === kasus.id;
                return (
                  <div
                    key={kasus.id}
                    className="border border-slate-200 rounded-2xl overflow-hidden transition-all"
                  >
                    <button
                      onClick={() => setExpandedKasusId(isExpanded ? '' : kasus.id)}
                      className="w-full p-4 text-left bg-slate-50 hover:bg-slate-100/80 transition-colors flex items-center justify-between gap-3 cursor-pointer"
                    >
                      <span className="text-sm sm:text-base font-bold text-slate-800">
                        {kasus.judul}
                      </span>
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4 text-slate-500" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-500" />
                      )}
                    </button>

                    {isExpanded && (
                      <div className="p-5 space-y-3 text-xs sm:text-sm text-slate-700 bg-white border-t border-slate-100">
                        <div>
                          <strong className="text-slate-900 font-bold block mb-1">
                            Fenomena Modern:
                          </strong>
                          <p className="leading-relaxed">{kasus.fenomenaModern}</p>
                        </div>

                        <div className="p-3 bg-amber-50 rounded-xl border border-amber-200">
                          <strong className="text-amber-950 font-bold block mb-1">
                            Dilema Fikih:
                          </strong>
                          <p className="text-amber-900">{kasus.dilemaFiqih}</p>
                        </div>

                        <div className="p-3 bg-orange-50 rounded-xl border border-orange-200">
                          <strong className="text-orange-950 font-bold block mb-1">
                            Fatwa & Ketetapan Ulama:
                          </strong>
                          <p className="text-orange-900 whitespace-pre-line leading-relaxed">
                            {kasus.fatwaUlama}
                          </p>
                        </div>

                        <div>
                          <strong className="text-slate-900 font-bold block mb-1">
                            Solusi Praktis Pelajar:
                          </strong>
                          <ul className="list-disc list-inside space-y-1 text-slate-600">
                            {kasus.solusiPraktis.map((sol, idx) => (
                              <li key={idx}>{sol}</li>
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

          {/* Lembar Refleksi Diri (Muhasabah 8 Indikator) */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h2 className="text-lg font-black text-slate-800 flex items-center gap-2">
                  <CheckSquare className="w-5 h-5 text-orange-600" />
                  <span>Lembar Muhasabah Diri: 8 Indikator Karakter Pelajar</span>
                </h2>
                <p className="text-xs text-slate-500">
                  Audit pribadi mengenai keikhlasan berkorban, kepedulian dhuafa, dan adab ihsan kepada hewan
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-slate-600">Ketercapaian:</span>
                <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-900 font-black text-xs">
                  {muhasabahScore} / 8 Indikator
                </span>
              </div>
            </div>

            <div className="space-y-2.5">
              {MATERI_KELAS9_SEM1_BAB4.muhasabah.map(item => {
                const isChecked = !!checkedMuhasabah[item.id];
                return (
                  <div
                    key={item.id}
                    onClick={() => toggleMuhasabah(item.id)}
                    className={`p-3.5 rounded-xl border transition-all flex items-start gap-3 cursor-pointer ${
                      isChecked
                        ? 'bg-orange-50/70 border-orange-200 text-slate-800'
                        : 'bg-white border-slate-200 text-slate-500 hover:bg-slate-50'
                    }`}
                  >
                    <div className="mt-0.5 text-orange-600">
                      {isChecked ? (
                        <CheckSquare className="w-4 h-4" />
                      ) : (
                        <Square className="w-4 h-4 text-slate-400" />
                      )}
                    </div>
                    <div className="space-y-0.5 text-xs sm:text-sm">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-800">{item.indikator}</span>
                        <span className="px-2 py-0.2 rounded bg-slate-100 text-slate-600 text-[10px] font-semibold">
                          {item.aspek}
                        </span>
                      </div>
                      <p className="text-slate-600 leading-normal">{item.deskripsiRefleksi}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 7: EVALUASI KUIS PENALARAN HOTS */}
      {/* ========================================================================= */}
      {activeTab === 'kuis-hots' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
              <div>
                <h2 className="text-lg font-black text-slate-800 flex items-center gap-2">
                  <Award className="w-5 h-5 text-orange-600" />
                  <span>Kuis Penalaran Fikih HOTS (5 Butir Soal)</span>
                </h2>
                <p className="text-xs text-slate-500">
                  Latihan soal pemahaman analitis, penerapan fatwa ulama, dan kasus nyata di masyarakat
                </p>
              </div>

              {quizSubmitted && (
                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <span className="text-xs text-slate-500 font-bold block">Nilai Akhir:</span>
                    <span
                      className={`text-2xl font-black ${
                        calculateScore() >= 80
                          ? 'text-emerald-600'
                          : calculateScore() >= 60
                          ? 'text-amber-600'
                          : 'text-red-600'
                      }`}
                    >
                      {calculateScore()} / 100
                    </span>
                  </div>
                  <button
                    onClick={handleResetQuiz}
                    className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
                    title="Ulangi Kuis"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>

            {/* Daftar Soal */}
            <div className="space-y-6 pt-2">
              {MATERI_KELAS9_SEM1_BAB4.kuisHots.map((soal, qIdx) => {
                const selectedAns = userAnswers[qIdx];
                const isAnswered = selectedAns !== undefined;
                const isCorrect = isAnswered && selectedAns === soal.kunciJawaban;

                return (
                  <div
                    key={soal.id}
                    className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200 space-y-3"
                  >
                    <div className="flex items-start gap-2.5">
                      <span className="w-6 h-6 rounded-full bg-orange-600 text-white font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                        {qIdx + 1}
                      </span>
                      <p className="text-xs sm:text-sm font-bold text-slate-800 leading-relaxed">
                        {soal.pertanyaan}
                      </p>
                    </div>

                    <div className="space-y-2 pt-1 pl-8">
                      {soal.pilihan.map((opsi, oIdx) => {
                        const isChosen = selectedAns === oIdx;
                        let optionStyle =
                          'bg-white border-slate-200 text-slate-700 hover:bg-slate-100';

                        if (quizSubmitted) {
                          if (oIdx === soal.kunciJawaban) {
                            optionStyle = 'bg-emerald-50 border-emerald-300 text-emerald-950 font-bold';
                          } else if (isChosen) {
                            optionStyle = 'bg-red-50 border-red-300 text-red-950';
                          } else {
                            optionStyle = 'bg-white border-slate-200 text-slate-400 opacity-60';
                          }
                        } else if (isChosen) {
                          optionStyle = 'bg-orange-50 border-orange-400 text-orange-950 font-bold shadow-xs';
                        }

                        return (
                          <div
                            key={oIdx}
                            onClick={() => handleSelectAnswer(qIdx, oIdx)}
                            className={`p-3 rounded-xl border text-xs sm:text-sm transition-all flex items-center justify-between gap-2 cursor-pointer ${optionStyle}`}
                          >
                            <span>{opsi}</span>
                            {quizSubmitted && oIdx === soal.kunciJawaban && (
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                            )}
                            {quizSubmitted && isChosen && oIdx !== soal.kunciJawaban && (
                              <XCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
                            )}
                          </div>
                        );
                      })}
                    </div>

                    {/* Pembahasan Soal */}
                    {quizSubmitted && (
                      <div className="mt-3 ml-8 p-3 rounded-xl bg-amber-50/80 border border-amber-200/80 text-xs text-amber-950 space-y-1">
                        <strong className="font-bold flex items-center gap-1 text-amber-900">
                          <Lightbulb className="w-3.5 h-3.5 text-amber-700" />
                          Pembahasan Kunci:
                        </strong>
                        <p className="leading-relaxed font-medium">{soal.pembahasan}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Tombol Submit Kuis */}
            {!quizSubmitted ? (
              <div className="pt-4 flex justify-end">
                <button
                  onClick={() => {
                    if (Object.keys(userAnswers).length < MATERI_KELAS9_SEM1_BAB4.kuisHots.length) {
                      showToast(
                        'Silakan jawab semua soal terlebih dahulu sebelum melihat skor.',
                        'error'
                      );
                      return;
                    }
                    setQuizSubmitted(true);
                    showToast('Jawaban berhasil dikirim! Silakan lihat pembahasan.', 'success');
                  }}
                  className="px-6 py-3 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer flex items-center gap-2"
                >
                  <CheckCheck className="w-4 h-4" />
                  <span>Kirim Jawaban & Periksa Skor</span>
                </button>
              </div>
            ) : (
              <div className="pt-4 flex justify-end">
                <button
                  onClick={handleResetQuiz}
                  className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-900 text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer flex items-center gap-2"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Coba Lagi Kuis Bab 4</span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
