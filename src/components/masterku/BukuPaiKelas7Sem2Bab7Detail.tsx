import React, { useState, useRef } from 'react';
import {
  BookOpen,
  Volume2,
  VolumeX,
  Copy,
  Search,
  Bot,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Check,
  Heart,
  Brain,
  Lightbulb,
  Smartphone,
  ChevronRight,
  Bookmark,
  Share2,
  Eye,
  School,
  Home,
  Flame,
  Feather,
  Layers,
  HelpCircle,
  Compass,
  Award,
  AlertCircle
} from 'lucide-react';
import {
  MATERI_KELAS_7_SEM_2_BAB_7,
  MalaikatItem,
  DalilMalaikatItem,
  SifatMalaikatItem
} from '../../data/materiKelas7Sem2Bab7Data';
import { useToast } from '../common/Toast';

interface Props {
  onAskAI: (prompt: string) => void;
}

type Bab7SubTab = 'pengertian' | 'dalil' | 'sepuluh-malaikat' | 'sifat' | 'hikmah' | 'kuis';

export const BukuPaiKelas7Sem2Bab7Detail: React.FC<Props> = ({ onAskAI }) => {
  const { showToast } = useToast();
  const [activeTab, setActiveTab] = useState<Bab7SubTab>('pengertian');

  // Search & Filter State in 10 Malaikat
  const [searchMalaikatQuery, setSearchMalaikatQuery] = useState('');
  const [selectedMalaikatCategory, setSelectedMalaikatCategory] = useState<string>('Semua');
  const [selectedMalaikatId, setSelectedMalaikatId] = useState<string>('malaikat-jibril');

  // Audio Playback
  const [playingAudioUrl, setPlayingAudioUrl] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Kuis HOTS State
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});
  const [showKuisResult, setShowKuisResult] = useState(false);

  // Muhasabah Checklist State
  const [muhasabahChecked, setMuhasabahChecked] = useState<Record<number, boolean>>({});

  // Copy helper
  const handleCopyText = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    showToast(`${label} berhasil disalin ke clipboard`, 'success');
  };

  // Audio helper
  const handlePlayAudio = (url?: string) => {
    if (!url) {
      showToast('Audio tilawah belum tersedia untuk dalil ini', 'info');
      return;
    }

    if (playingAudioUrl === url) {
      if (audioRef.current) {
        audioRef.current.pause();
      }
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
      showToast('Gagal memutar audio tilawah', 'error');
      setPlayingAudioUrl(null);
    });

    audio.onended = () => {
      setPlayingAudioUrl(null);
    };
  };

  // Filter 10 Malaikat
  const filteredMalaikatList = MATERI_KELAS_7_SEM_2_BAB_7.sepuluhMalaikat.filter((m) => {
    const matchesSearch =
      m.nama.toLowerCase().includes(searchMalaikatQuery.toLowerCase()) ||
      m.tugasPokok.toLowerCase().includes(searchMalaikatQuery.toLowerCase()) ||
      m.penjelasanTugas.toLowerCase().includes(searchMalaikatQuery.toLowerCase()) ||
      (m.sebutanLain && m.sebutanLain.toLowerCase().includes(searchMalaikatQuery.toLowerCase()));
    const matchesCategory =
      selectedMalaikatCategory === 'Semua' || m.kategoriTugas === selectedMalaikatCategory;
    return matchesSearch && matchesCategory;
  });

  const selectedMalaikat =
    MATERI_KELAS_7_SEM_2_BAB_7.sepuluhMalaikat.find((m) => m.id === selectedMalaikatId) ||
    MATERI_KELAS_7_SEM_2_BAB_7.sepuluhMalaikat[0];

  // Kuis calculation
  const hitungSkorKuis = () => {
    let benar = 0;
    MATERI_KELAS_7_SEM_2_BAB_7.kuisSoalHots.forEach((soal) => {
      if (userAnswers[soal.id] === soal.kunciJawaban) {
        benar += 1;
      }
    });
    return Math.round((benar / MATERI_KELAS_7_SEM_2_BAB_7.kuisSoalHots.length) * 100);
  };

  return (
    <div className="space-y-6">
      {/* HEADER BANNER BAB 7 */}
      <div className="bg-gradient-to-br from-indigo-900 via-sky-900 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden border border-sky-700/40">
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-2xl -ml-20 -mb-20 pointer-events-none" />

        <div className="relative z-10 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-amber-400 text-amber-950 font-black text-xs tracking-wider uppercase">
              PAI & BP SMP KELAS VII • SEMESTER 2
            </span>
            <span className="px-3 py-1 rounded-full bg-sky-500/20 text-sky-200 text-xs font-semibold border border-sky-400/30 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              Elemen: Akidah
            </span>
            <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-200 text-xs font-semibold border border-indigo-400/30">
              Bab VII
            </span>
          </div>

          <div className="max-w-4xl space-y-2">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white leading-tight">
              Mawas Diri dan Mengintrospeksi Diri dalam Menjalani Kehidupan
            </h1>
            <p className="text-sm sm:text-base text-sky-100/90 font-medium leading-relaxed">
              Meyakini dan Merefleksikan Hakikat Keimanan kepada Malaikat-Malaikat Allah Swt.
              dilengkapi Dalil Naqli, Rincian 10 Malaikat & Tugasnya, Karakteristik Sifat, serta Hikmah Mawas Diri di Era Digital.
            </p>
          </div>

          {/* QUICK PROMPT BOT BUTTONS */}
          <div className="pt-2 flex flex-wrap items-center gap-2.5">
            <button
              onClick={() =>
                onAskAI(
                  'Jelaskan materi lengkap PAI Kelas 7 Semester 2 Bab 7 tentang iman kepada malaikat, 10 malaikat dan tugasnya, sifat-sifat malaikat, dan hikmahnya!'
                )
              }
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-950 font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-amber-500/20 transition-all cursor-pointer"
            >
              <Bot className="w-4 h-4" />
              <span>Tanya Masterku AI tentang Bab 7</span>
            </button>
            <button
              onClick={() =>
                onAskAI(
                  'Apa saja nama 10 malaikat Allah dan tugas masing-masing beserta contoh perilakunya bagi pelajar SMP?'
                )
              }
              className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs transition-all flex items-center gap-1.5"
            >
              <span>10 Nama Malaikat & Tugas</span>
            </button>
            <button
              onClick={() =>
                onAskAI(
                  'Bagaimana cara menumbuhkan sikap mawas diri (muraqabatullah) dan muhasabah bagi pelajar berdasarkan iman kepada Raqib dan Atid?'
                )
              }
              className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs transition-all flex items-center gap-1.5"
            >
              <span>Hikmah & Mawas Diri</span>
            </button>
          </div>
        </div>
      </div>

      {/* 6 SUB-TABS NAVIGATION */}
      <div className="bg-white rounded-2xl p-2 border border-slate-200/80 shadow-sm">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-1.5">
          <button
            onClick={() => setActiveTab('pengertian')}
            className={`px-3 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex flex-col items-center justify-center gap-1 cursor-pointer ${
              activeTab === 'pengertian'
                ? 'bg-sky-600 text-white shadow-md shadow-sky-600/20'
                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span className="text-center line-clamp-1">1. Pengertian Iman</span>
          </button>

          <button
            onClick={() => setActiveTab('dalil')}
            className={`px-3 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex flex-col items-center justify-center gap-1 cursor-pointer ${
              activeTab === 'dalil'
                ? 'bg-sky-600 text-white shadow-md shadow-sky-600/20'
                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span className="text-center line-clamp-1">2. Dalil Naqli</span>
          </button>

          <button
            onClick={() => setActiveTab('sepuluh-malaikat')}
            className={`px-3 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex flex-col items-center justify-center gap-1 cursor-pointer ${
              activeTab === 'sepuluh-malaikat'
                ? 'bg-sky-600 text-white shadow-md shadow-sky-600/20'
                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            }`}
          >
            <Compass className="w-4 h-4" />
            <span className="text-center line-clamp-1">3. 10 Malaikat & Tugas</span>
          </button>

          <button
            onClick={() => setActiveTab('sifat')}
            className={`px-3 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex flex-col items-center justify-center gap-1 cursor-pointer ${
              activeTab === 'sifat'
                ? 'bg-sky-600 text-white shadow-md shadow-sky-600/20'
                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-center line-clamp-1">4. Sifat Malaikat</span>
          </button>

          <button
            onClick={() => setActiveTab('hikmah')}
            className={`px-3 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex flex-col items-center justify-center gap-1 cursor-pointer ${
              activeTab === 'hikmah'
                ? 'bg-sky-600 text-white shadow-md shadow-sky-600/20'
                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            }`}
          >
            <Heart className="w-4 h-4" />
            <span className="text-center line-clamp-1">5. Hikmah & Mawas Diri</span>
          </button>

          <button
            onClick={() => setActiveTab('kuis')}
            className={`px-3 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex flex-col items-center justify-center gap-1 cursor-pointer ${
              activeTab === 'kuis'
                ? 'bg-sky-600 text-white shadow-md shadow-sky-600/20'
                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            }`}
          >
            <Award className="w-4 h-4" />
            <span className="text-center line-clamp-1">6. Kuis HOTS</span>
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SUB-TAB 1: PENGERTIAN IMAN KEPADA MALAIKAT ALLAH SWT */}
      {/* ========================================================================= */}
      {activeTab === 'pengertian' && (
        <div className="space-y-6">
          {/* APERSEPSI & TUJUAN PEMBELAJARAN */}
          <div className="bg-sky-50/70 border border-sky-200/80 rounded-2xl p-5 space-y-3">
            <div className="flex items-center gap-2 text-sky-800 font-bold text-sm">
              <Lightbulb className="w-4 h-4 text-sky-600" />
              <span>Pengantar & Apersepsi Kehidupan Pelajar</span>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed italic">
              "{MATERI_KELAS_7_SEM_2_BAB_7.pengantarBab.ringkasanApersepsi}"
            </p>
            <div className="pt-2 border-t border-sky-200/60">
              <h4 className="text-xs font-bold text-sky-900 mb-2 uppercase tracking-wider">
                Tujuan Pembelajaran Bab VII:
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                {MATERI_KELAS_7_SEM_2_BAB_7.pengantarBab.tujuanPembelajaran.map((tp, idx) => (
                  <li key={idx} className="flex items-start gap-2 bg-white/70 p-2 rounded-lg border border-sky-100">
                    <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                    <span>{tp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* DEFINISI BAHASA & ISTILAH */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-sky-700 font-bold text-base">
                <BookOpen className="w-5 h-5 text-sky-600" />
                <h3>Pengertian Menurut Bahasa (Etimologi)</h3>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-center">
                <span className="text-2xl font-bold font-serif text-slate-800">مَلَكٌ ➔ مَلَائِكَةٌ</span>
                <p className="text-xs text-slate-500 mt-1">Berasal dari kata: <i>al-Alūkah</i> (الْأَلُوكَة) atau <i>La'aka</i> (لَأَكَ)</p>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {MATERI_KELAS_7_SEM_2_BAB_7.pengertian.secaraBahasa}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-indigo-700 font-bold text-base">
                <ShieldCheck className="w-5 h-5 text-indigo-600" />
                <h3>Pengertian Menurut Istilah Syariat (Terminologi)</h3>
              </div>
              <div className="p-3 bg-indigo-50/60 rounded-xl border border-indigo-100 text-xs font-semibold text-indigo-900">
                Hukum Beriman: <span className="bg-indigo-600 text-white px-2 py-0.5 rounded-full font-bold">Fardhu 'Ain</span> (Rukun Iman ke-2)
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {MATERI_KELAS_7_SEM_2_BAB_7.pengertian.secaraIstilah}
              </p>
            </div>
          </div>

          {/* 3 DIMENSI IMAN KEPADA MALAIKAT */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  3 Dimensi Keimanan kepada Malaikat Allah Swt.
                </h3>
                <p className="text-xs text-slate-500">
                  Keimanan yang sejati tidak hanya berada di angan-angan, melainkan mencakup kesatuan hati, lisan, dan perbuatan.
                </p>
              </div>
              <span className="px-3 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-full">
                Rukun Iman ke-2
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {MATERI_KELAS_7_SEM_2_BAB_7.pengertian.tigaDimensiIman.map((dim, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-b from-slate-50 to-white rounded-xl p-4 border border-slate-200/90 space-y-2 hover:border-sky-300 transition-all shadow-xs"
                >
                  <div className="w-7 h-7 rounded-lg bg-sky-600 text-white font-black text-xs flex items-center justify-center shadow-sm">
                    {idx + 1}
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">{dim.dimensi}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{dim.makna}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ASAL PENCIPTAAN MALAIKAT */}
          <div className="bg-gradient-to-r from-amber-500/10 via-sky-500/10 to-indigo-500/10 border border-amber-300/40 rounded-2xl p-5 sm:p-6 space-y-4">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-base">
              <Sparkles className="w-5 h-5 text-amber-500" />
              <h3>Asal Penciptaan Malaikat vs Jin vs Manusia</h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Berdasarkan Hadits Riwayat Imam Muslim dari Ummul Mukminin Aisyah r.a., Allah Swt. menciptakan ketiga golongan makhluk berakal ini dari substansi materi yang berbeda:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-xl border border-amber-200/80 shadow-xs space-y-1 text-center">
                <span className="px-2.5 py-0.5 bg-amber-100 text-amber-800 rounded-full font-bold text-[11px]">
                  Malaikat
                </span>
                <h4 className="text-base font-bold text-slate-900 pt-1">Cahaya (Nūr / نُورٌ)</h4>
                <p className="text-xs text-slate-600">Makhluk suci, ruhani, tidak berjasad kasar, dan senantiasa taat.</p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-red-200/80 shadow-xs space-y-1 text-center">
                <span className="px-2.5 py-0.5 bg-red-100 text-red-800 rounded-full font-bold text-[11px]">
                  Bangsa Jin & Iblis
                </span>
                <h4 className="text-base font-bold text-slate-900 pt-1">Api (Mārijin min Nār)</h4>
                <p className="text-xs text-slate-600">Nyala api tanpa asap, memiliki hawa nafsu dan potensi membangkang.</p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-emerald-200/80 shadow-xs space-y-1 text-center">
                <span className="px-2.5 py-0.5 bg-emerald-100 text-emerald-800 rounded-full font-bold text-[11px]">
                  Manusia (Nabi Adam & Keturunannya)
                </span>
                <h4 className="text-base font-bold text-slate-900 pt-1">Tanah (Ṭīn / Saripati)</h4>
                <p className="text-xs text-slate-600">Jasad materiil yang ditiupkan ruh, memiliki akal dan nafsu.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* SUB-TAB 2: DALIL NAQLI TENTANG IMAN KEPADA MALAIKAT */}
      {/* ========================================================================= */}
      {activeTab === 'dalil' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-sm space-y-2">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-sky-600" />
              Dalil Naqli dari Al-Qur'an dan As-Sunnah
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Keimanan kepada malaikat didasarkan pada dalil naqli yang bersifat <i>qath'i</i> (pasti dan mutlak) baik dalam Al-Qur'an maupun Hadis-hadis shahih. Simak bacaan ayat, audio tilawah, dan syarah tafsirnya di bawah ini:
            </p>
          </div>

          <div className="space-y-4">
            {MATERI_KELAS_7_SEM_2_BAB_7.dalilNaqli.map((dalil, idx) => (
              <div
                key={dalil.id}
                className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-sm space-y-4 hover:border-sky-300 transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-sky-100 text-sky-800 font-black text-xs flex items-center justify-center">
                      {idx + 1}
                    </span>
                    <h4 className="text-sm font-bold text-slate-900">{dalil.sumber}</h4>
                    <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 text-[11px] font-medium">
                      {dalil.kategori}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {dalil.audioUrl && (
                      <button
                        onClick={() => handlePlayAudio(dalil.audioUrl)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                          playingAudioUrl === dalil.audioUrl
                            ? 'bg-amber-500 text-slate-950 animate-pulse'
                            : 'bg-sky-50 text-sky-700 hover:bg-sky-100'
                        }`}
                      >
                        {playingAudioUrl === dalil.audioUrl ? (
                          <>
                            <VolumeX className="w-3.5 h-3.5" />
                            <span>Hentikan Audio</span>
                          </>
                        ) : (
                          <>
                            <Volume2 className="w-3.5 h-3.5" />
                            <span>Dengar Tilawah</span>
                          </>
                        )}
                      </button>
                    )}

                    <button
                      onClick={() => handleCopyText(`${dalil.arabic}\n\n${dalil.terjemah}`, dalil.sumber)}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-all"
                      title="Salin Ayat & Terjemah"
                    >
                      <Copy className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Teks Arab */}
                <div className="p-4 bg-slate-50/80 rounded-xl border border-slate-100">
                  <p className="text-right font-serif text-xl sm:text-2xl leading-loose text-slate-900 font-medium">
                    {dalil.arabic}
                  </p>
                </div>

                {/* Transliterasi Latin */}
                <p className="text-xs text-sky-800 font-medium italic">
                  {dalil.latin}
                </p>

                {/* Terjemahan Resmi */}
                <div className="p-3 bg-sky-50/50 rounded-xl border border-sky-100/70 text-xs sm:text-sm text-slate-800 leading-relaxed">
                  <span className="font-bold text-sky-900 block mb-1">Artinya:</span>
                  "{dalil.terjemah}"
                </div>

                {/* Syarah / Tafsir Ringkas */}
                <div className="p-3 bg-amber-50/40 rounded-xl border border-amber-100/70 text-xs text-slate-700 leading-relaxed">
                  <span className="font-bold text-amber-900 block mb-1">📖 Penjelasan & Kandungan:</span>
                  {dalil.tafsirRingkas}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* SUB-TAB 3: NAMA-NAMA 10 MALAIKAT ALLAH SWT & TUGAS MASING-MASING */}
      {/* ========================================================================= */}
      {activeTab === 'sepuluh-malaikat' && (
        <div className="space-y-6">
          {/* INTRO & SEARCH FILTER */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                  <Compass className="w-5 h-5 text-sky-600" />
                  10 Nama Malaikat Allah Swt. yang Wajib Diketahui & Tugasnya
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Meskipun jumlah malaikat tak terhitung banyaknya, setiap muslim wajib mengetahui 10 nama malaikat beserta tugas pokoknya.
                </p>
              </div>

              {/* SEARCH INPUT */}
              <div className="relative w-full sm:w-64">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Cari malaikat / tugas..."
                  value={searchMalaikatQuery}
                  onChange={(e) => setSearchMalaikatQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500/30 focus:border-sky-500"
                />
              </div>
            </div>

            {/* CATEGORY FILTER PILLS */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              <span className="text-xs font-semibold text-slate-400 shrink-0">Kategori:</span>
              {[
                'Semua',
                'Wahyu & Rezeki',
                'Kematian & Hari Kiamat',
                'Alam Barzakh',
                'Pencatat Amal',
                'Penjaga Surga & Neraka'
              ].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedMalaikatCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    selectedMalaikatCategory === cat
                      ? 'bg-sky-600 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* TWO COLUMN INTERACTIVE EXPLORER */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* LEFT LIST: 10 MALAIKAT CARDS */}
            <div className="lg:col-span-5 space-y-2.5">
              {filteredMalaikatList.map((m) => {
                const isSelected = selectedMalaikatId === m.id;
                return (
                  <div
                    key={m.id}
                    onClick={() => setSelectedMalaikatId(m.id)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                      isSelected
                        ? 'bg-sky-50/90 border-sky-500 shadow-md ring-2 ring-sky-500/20'
                        : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/50 shadow-xs'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-9 h-9 rounded-xl font-black text-xs flex items-center justify-center shrink-0 ${
                          isSelected
                            ? 'bg-sky-600 text-white shadow-sm'
                            : 'bg-slate-100 text-slate-700'
                        }`}
                      >
                        {m.nomor}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-sm font-black text-slate-900">{m.nama}</h4>
                          <span className="font-serif text-sm text-sky-800 font-bold">{m.namaArab}</span>
                        </div>
                        <p className="text-xs text-slate-600 line-clamp-1 mt-0.5">{m.tugasPokok}</p>
                      </div>
                    </div>

                    <ChevronRight
                      className={`w-4 h-4 shrink-0 transition-transform ${
                        isSelected ? 'text-sky-600 translate-x-1' : 'text-slate-300'
                      }`}
                    />
                  </div>
                );
              })}

              {filteredMalaikatList.length === 0 && (
                <div className="p-8 text-center bg-white rounded-2xl border border-slate-200 text-slate-500 text-xs">
                  Tidak ditemukan malaikat yang sesuai dengan kata kunci pencarian.
                </div>
              )}
            </div>

            {/* RIGHT DETAIL: SELECTED MALAIKAT IN-DEPTH VIEW */}
            <div className="lg:col-span-7">
              {selectedMalaikat && (
                <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-5 sticky top-4">
                  {/* TITLE & HEADER */}
                  <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-100">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-md bg-sky-100 text-sky-800 text-[11px] font-bold">
                          Malaikat No. {selectedMalaikat.nomor}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-600 text-[11px] font-medium">
                          {selectedMalaikat.kategoriTugas}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-3">
                        <span>Malaikat {selectedMalaikat.nama}</span>
                        <span className="font-serif text-2xl text-sky-700 font-bold">
                          ({selectedMalaikat.namaArab})
                        </span>
                      </h3>
                      {selectedMalaikat.sebutanLain && (
                        <p className="text-xs font-semibold text-slate-500 italic">
                          Sebutan lain: {selectedMalaikat.sebutanLain}
                        </p>
                      )}
                    </div>

                    <button
                      onClick={() =>
                        onAskAI(
                          `Ceritakan lebih lengkap tentang Malaikat ${selectedMalaikat.nama}, tugasnya, dalil Al-Qur'an, dan cara meneladani perilakunya dalam kehidupan sehari-hari!`
                        )
                      }
                      className="p-2 rounded-xl bg-sky-50 text-sky-700 hover:bg-sky-100 transition-all shrink-0 cursor-pointer"
                      title="Tanya AI tentang Malaikat ini"
                    >
                      <Bot className="w-5 h-5" />
                    </button>
                  </div>

                  {/* TUGAS POKOK */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-black uppercase tracking-wider text-slate-400">
                      Tugas Pokok & Peran
                    </h4>
                    <div className="p-4 bg-sky-50/70 border border-sky-200/80 rounded-xl space-y-1.5">
                      <p className="text-sm font-bold text-sky-950">{selectedMalaikat.tugasPokok}</p>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        {selectedMalaikat.penjelasanTugas}
                      </p>
                    </div>
                  </div>

                  {/* DALIL RUJUKAN */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-black uppercase tracking-wider text-slate-400">
                      Dalil Naqli Rujukan ({selectedMalaikat.dalilRujukan.surahOrHadits})
                    </h4>
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/90 space-y-2">
                      <p className="text-right font-serif text-lg sm:text-xl text-slate-900 leading-loose">
                        {selectedMalaikat.dalilRujukan.arabic}
                      </p>
                      <p className="text-xs text-sky-800 italic">
                        {selectedMalaikat.dalilRujukan.latin}
                      </p>
                      <p className="text-xs text-slate-700 pt-1 border-t border-slate-200/60 leading-relaxed">
                        <span className="font-semibold text-slate-900">Artinya: </span>
                        "{selectedMalaikat.dalilRujukan.terjemah}"
                      </p>
                    </div>
                  </div>

                  {/* PENERAPAN PERILAKU SISWA SEHARI-HARI */}
                  <div className="space-y-2.5 pt-1">
                    <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      Refleksi & Penerapan Perilaku Pelajar:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                      <div className="p-3 bg-emerald-50/60 rounded-xl border border-emerald-100 space-y-1">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-900">
                          <School className="w-3.5 h-3.5 text-emerald-700" />
                          <span>Di Sekolah</span>
                        </div>
                        <p className="text-xs text-slate-700 leading-relaxed">
                          {selectedMalaikat.penerapanPerilakuSiswa.diSekolah}
                        </p>
                      </div>

                      <div className="p-3 bg-indigo-50/60 rounded-xl border border-indigo-100 space-y-1">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-indigo-900">
                          <Home className="w-3.5 h-3.5 text-indigo-700" />
                          <span>Di Rumah</span>
                        </div>
                        <p className="text-xs text-slate-700 leading-relaxed">
                          {selectedMalaikat.penerapanPerilakuSiswa.diRumah}
                        </p>
                      </div>

                      <div className="p-3 bg-sky-50/60 rounded-xl border border-sky-100 space-y-1">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-sky-900">
                          <Smartphone className="w-3.5 h-3.5 text-sky-700" />
                          <span>Di Media Sosial</span>
                        </div>
                        <p className="text-xs text-slate-700 leading-relaxed">
                          {selectedMalaikat.penerapanPerilakuSiswa.diMediaSosial}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* SUB-TAB 4: SIFAT-SIFAT MALAIKAT ALLAH SWT */}
      {/* ========================================================================= */}
      {activeTab === 'sifat' && (
        <div className="space-y-6">
          {/* HEADER PENJELASAN SIFAT */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-sm space-y-2">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-500" />
              Karakteristik & Sifat-Sifat Hakiki Malaikat Allah Swt.
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Malaikat memiliki tabiat penciptaan yang suci dan berbeda mutlak dari makhluk jasmani lainnya. Pelajari 10 sifat utama malaikat yang termaktub dalam Al-Qur'an dan As-Sunnah:
            </p>
          </div>

          {/* 10 SIFAT GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {MATERI_KELAS_7_SEM_2_BAB_7.sifatMalaikat.map((sifat, idx) => (
              <div
                key={sifat.id}
                className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-3 hover:border-sky-300 transition-all flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-sky-100 text-sky-800 font-black text-xs flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <h4 className="text-sm font-bold text-slate-900">{sifat.judul}</h4>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {sifat.penjelasan}
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-100 text-xs">
                  <div className="p-2 bg-amber-50/50 rounded-lg border border-amber-100 text-amber-900">
                    <span className="font-bold">Dalil: </span>
                    {sifat.dalilTerkait}
                  </div>
                  <div className="p-2 bg-slate-50 rounded-lg border border-slate-200/60 text-slate-600">
                    <span className="font-bold text-slate-800">Komparasi: </span>
                    {sifat.perbandinganDenganManusia}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* TABEL KOMPARASI LENGKAP: MALAIKAT VS MANUSIA VS JIN */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  Tabel Komparasi Makhluk: Malaikat vs Manusia vs Jin
                </h3>
                <p className="text-xs text-slate-500">
                  Memahami perbedaan esensial antara ketiga makhluk ciptaan Allah Swt.
                </p>
              </div>
              <span className="px-3 py-1 bg-sky-100 text-sky-800 text-xs font-bold rounded-full">
                Sintesis Materi
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
                <thead className="bg-slate-100 text-slate-800 font-bold uppercase tracking-wider">
                  <tr>
                    <th className="p-3 border-b border-slate-200">Aspek Perbandingan</th>
                    <th className="p-3 border-b border-slate-200 bg-sky-50 text-sky-900">Malaikat</th>
                    <th className="p-3 border-b border-slate-200 bg-emerald-50 text-emerald-900">Manusia</th>
                    <th className="p-3 border-b border-slate-200 bg-red-50 text-red-900">Jin & Iblis</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {MATERI_KELAS_7_SEM_2_BAB_7.tabelKomparasi.map((item, i) => (
                    <tr key={i} className="hover:bg-slate-50/50">
                      <td className="p-3 font-bold text-slate-800 bg-slate-50/60">{item.aspek}</td>
                      <td className="p-3 text-slate-700 bg-sky-50/20">{item.malaikat}</td>
                      <td className="p-3 text-slate-700 bg-emerald-50/20">{item.manusia}</td>
                      <td className="p-3 text-slate-700 bg-red-50/20">{item.jinDanIblis}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* SUB-TAB 5: HIKMAH BERIMAN KEPADA MALAIKAT & MAWAS DIRI */}
      {/* ========================================================================= */}
      {activeTab === 'hikmah' && (
        <div className="space-y-6">
          {/* 6 HIKMAH UTAMA */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-sm space-y-4">
            <div className="space-y-1">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                <Heart className="w-5 h-5 text-rose-500" />
                6 Hikmah Agung Beriman kepada Malaikat Allah Swt.
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Iman kepada malaikat bukan sekadar pengetahuan kognitif, melainkan energi pembentuk karakter (akhlaqul karimah) bagi seorang pelajar muslim.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {MATERI_KELAS_7_SEM_2_BAB_7.hikmahBeriman.map((hikmah, idx) => (
                <div
                  key={hikmah.id}
                  className="p-4 rounded-xl border border-slate-200 hover:border-sky-300 bg-gradient-to-b from-slate-50/50 to-white shadow-xs space-y-2.5 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-sky-600 text-white font-black text-xs flex items-center justify-center">
                        {idx + 1}
                      </div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                        {hikmah.judul}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {hikmah.deskripsi}
                    </p>
                  </div>

                  <div className="p-2.5 bg-sky-50 rounded-lg border border-sky-100 text-[11px] text-sky-900">
                    <span className="font-bold block">Aplikasi Konkret:</span>
                    {hikmah.contohAplikasi}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* INSTRUMEN MUHASABAH MALAM SISWA */}
          <div className="bg-gradient-to-br from-indigo-900 via-slate-900 to-sky-950 rounded-2xl p-6 sm:p-8 text-white shadow-xl space-y-5 border border-sky-700/40">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-sky-800/60">
              <div className="space-y-1">
                <span className="px-3 py-0.5 rounded-full bg-amber-400 text-amber-950 font-black text-xs">
                  INSTRUMEN PRAKTIK MAWAS DIRI
                </span>
                <h3 className="text-lg sm:text-xl font-black text-white">
                  {MATERI_KELAS_7_SEM_2_BAB_7.panduanMuhasabah.judul}
                </h3>
              </div>
              <p className="text-xs text-sky-200 max-w-sm">
                Latih kebiasaan introspeksi diri (muhasabah) setiap malam untuk menyaring amal saleh yang dicatat Malaikat Raqib.
              </p>
            </div>

            <p className="text-xs sm:text-sm text-sky-100/90 italic">
              "{MATERI_KELAS_7_SEM_2_BAB_7.panduanMuhasabah.pengantar}"
            </p>

            <div className="space-y-3">
              {MATERI_KELAS_7_SEM_2_BAB_7.panduanMuhasabah.butirPertanyaan.map((butir) => {
                const isChecked = !!muhasabahChecked[butir.no];
                return (
                  <div
                    key={butir.no}
                    onClick={() =>
                      setMuhasabahChecked((prev) => ({
                        ...prev,
                        [butir.no]: !prev[butir.no]
                      }))
                    }
                    className={`p-4 rounded-xl border transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                      isChecked
                        ? 'bg-emerald-950/60 border-emerald-500/70 ring-1 ring-emerald-400'
                        : 'bg-white/10 border-white/15 hover:bg-white/15'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`w-6 h-6 rounded-md flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                          isChecked ? 'bg-emerald-500 text-slate-950' : 'bg-white/20 text-white'
                        }`}
                      >
                        {isChecked ? <Check className="w-4 h-4 stroke-[3]" /> : butir.no}
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm font-semibold text-white">
                          {butir.pertanyaan}
                        </p>
                        <p className="text-xs text-sky-200/80 mt-1">
                          <span className="font-semibold text-amber-300">Tindakan: </span>
                          {butir.rekomendasi}
                        </p>
                      </div>
                    </div>

                    <span className="text-[11px] font-bold text-sky-300 whitespace-nowrap self-end sm:self-center">
                      {isChecked ? 'Sudah Muhasabah ✓' : 'Klik untuk Check'}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* SUB-TAB 6: KUIS HOTS & ASESMEN MANDIRI */}
      {/* ========================================================================= */}
      {activeTab === 'kuis' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-sm space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                  <Award className="w-5 h-5 text-sky-600" />
                  Kuis Penilaian HOTS Bab VII (Iman kepada Malaikat)
                </h3>
                <p className="text-xs text-slate-500">
                  Uji pemahaman mendalammu mengenai materi iman kepada malaikat melalui 5 soal studi kasus & analisis.
                </p>
              </div>

              {showKuisResult && (
                <button
                  onClick={() => {
                    setUserAnswers({});
                    setShowKuisResult(false);
                    showToast('Kuis direset, silakan coba lagi!', 'info');
                  }}
                  className="px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Ulangi Kuis</span>
                </button>
              )}
            </div>
          </div>

          {/* KUIS RESULT BANNER */}
          {showKuisResult && (
            <div className="bg-gradient-to-r from-sky-600 to-indigo-700 rounded-2xl p-6 text-white shadow-lg space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-sky-200 uppercase tracking-wider">
                    Hasil Evaluasi Belajar:
                  </span>
                  <h4 className="text-2xl sm:text-3xl font-black text-white">
                    Skor Nilai: {hitungSkorKuis()} / 100
                  </h4>
                </div>
                <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center text-2xl font-black">
                  {hitungSkorKuis() >= 80 ? '🌟' : hitungSkorKuis() >= 60 ? '👍' : '📖'}
                </div>
              </div>
              <p className="text-xs sm:text-sm text-sky-100">
                {hitungSkorKuis() >= 80
                  ? 'Mumtaz! Kamu sangat memahami esensi keimanan kepada malaikat dan siap menerapkannya dalam akhlak sehari-hari.'
                  : 'Bagus! Pelajari kembali pembahasan di bawah ini untuk menyempurnakan pemahamanmu tentang malaikat Allah Swt.'}
              </p>
            </div>
          )}

          {/* QUESTIONS LIST */}
          <div className="space-y-5">
            {MATERI_KELAS_7_SEM_2_BAB_7.kuisSoalHots.map((soal, idx) => {
              const selectedChoice = userAnswers[soal.id];
              const isAnswered = selectedChoice !== undefined;
              const isCorrect = selectedChoice === soal.kunciJawaban;

              return (
                <div
                  key={soal.id}
                  className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-sm space-y-4"
                >
                  <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-sky-100 text-sky-800 font-bold text-xs flex items-center justify-center">
                        {idx + 1}
                      </span>
                      <span className="text-xs font-semibold text-slate-500">Soal No. {idx + 1}</span>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 text-[11px] font-medium">
                      {soal.kategori}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm font-semibold text-slate-900 leading-relaxed whitespace-pre-line">
                    {soal.pertanyaan}
                  </p>

                  {/* CHOICES */}
                  <div className="space-y-2 pt-1">
                    {soal.pilihan.map((pilihan, pIdx) => {
                      const isOptionSelected = selectedChoice === pIdx;
                      let optionStyle = 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100';

                      if (showKuisResult) {
                        if (pIdx === soal.kunciJawaban) {
                          optionStyle = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold ring-1 ring-emerald-500';
                        } else if (isOptionSelected && !isCorrect) {
                          optionStyle = 'bg-rose-50 border-rose-500 text-rose-950 line-through';
                        } else {
                          optionStyle = 'bg-slate-50 border-slate-200 text-slate-400 opacity-60';
                        }
                      } else if (isOptionSelected) {
                        optionStyle = 'bg-sky-50 border-sky-600 text-sky-950 font-semibold ring-1 ring-sky-600';
                      }

                      return (
                        <div
                          key={pIdx}
                          onClick={() => {
                            if (!showKuisResult) {
                              setUserAnswers((prev) => ({
                                ...prev,
                                [soal.id]: pIdx
                              }));
                            }
                          }}
                          className={`p-3 rounded-xl border text-xs sm:text-sm transition-all cursor-pointer flex items-center justify-between gap-3 ${optionStyle}`}
                        >
                          <span>{pilihan}</span>
                          {showKuisResult && pIdx === soal.kunciJawaban && (
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          )}
                          {showKuisResult && isOptionSelected && !isCorrect && (
                            <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* PEMBAHASAN AFTER SUBMISSION */}
                  {showKuisResult && (
                    <div className="p-3.5 bg-amber-50/70 rounded-xl border border-amber-200/80 text-xs text-slate-800 space-y-1">
                      <span className="font-bold text-amber-900 block">💡 Pembahasan Kunci Jawaban:</span>
                      <p className="leading-relaxed">{soal.pembahasan}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* SUBMIT BUTTON */}
          {!showKuisResult && (
            <div className="text-center pt-2">
              <button
                onClick={() => {
                  if (Object.keys(userAnswers).length < MATERI_KELAS_7_SEM_2_BAB_7.kuisSoalHots.length) {
                    showToast('Harap jawab semua soal terlebih dahulu', 'info');
                  }
                  setShowKuisResult(true);
                }}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-700 hover:to-indigo-700 text-white font-bold text-sm shadow-lg shadow-sky-600/20 transition-all cursor-pointer"
              >
                Selesai & Periksa Jawaban Kuis
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
