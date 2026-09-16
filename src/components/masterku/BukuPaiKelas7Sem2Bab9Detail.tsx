import React, { useState, useRef } from 'react';
import {
  Compass,
  BookOpen,
  Volume2,
  VolumeX,
  Copy,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Check,
  Lightbulb,
  AlertTriangle,
  Bot,
  Feather,
  Sun,
  Moon,
  Coins,
  Globe,
  HeartHandshake,
  Activity,
  Layers,
  ArrowRight,
  Users
} from 'lucide-react';
import {
  MATERI_KELAS_7_SEM_2_BAB_9,
  DalilRukhsahItem,
  RukhsahIbadahItem,
  PanduanPraktikRukhsahItem,
  HikmahRukhsahItem
} from '../../data/materiKelas7Sem2Bab9Data';
import { useToast } from '../common/Toast';

interface Props {
  onAskAI: (prompt: string) => void;
}

type Bab9SubTab = 'ketentuan' | 'empat-ibadah' | 'praktik' | 'hikmah' | 'kuis';

export const BukuPaiKelas7Sem2Bab9Detail: React.FC<Props> = ({ onAskAI }) => {
  const { showToast } = useToast();
  const [activeTab, setActiveTab] = useState<Bab9SubTab>('ketentuan');

  // Selected Ibadah in Tab 2
  const [selectedIbadahId, setSelectedIbadahId] = useState<string>('rukhsah-shalat');

  // Selected Praktik in Tab 3
  const [selectedPraktikId, setSelectedPraktikId] = useState<string>('praktik-jamak-qashar');

  // Audio Playback State
  const [playingAudioUrl, setPlayingAudioUrl] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Kuis HOTS State
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});
  const [showKuisResult, setShowKuisResult] = useState(false);

  // Checklist Refleksi Pelajar
  const [checklistChecked, setChecklistChecked] = useState<Record<number, boolean>>({});

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

  // Kuis calculation
  const calculateScore = () => {
    let correct = 0;
    MATERI_KELAS_7_SEM_2_BAB_9.kuisHots.forEach((q) => {
      if (userAnswers[q.id] === q.kunciJawaban) {
        correct++;
      }
    });
    return Math.round((correct / MATERI_KELAS_7_SEM_2_BAB_9.kuisHots.length) * 100);
  };

  const handleSelectAnswer = (soalId: string, pilihanIndex: number) => {
    if (showKuisResult) return;
    setUserAnswers((prev) => ({
      ...prev,
      [soalId]: pilihanIndex
    }));
  };

  const handleResetKuis = () => {
    setUserAnswers({});
    setShowKuisResult(false);
    showToast('Kuis telah direset. Silakan kerjakan kembali!', 'info');
  };

  const currentIbadah =
    MATERI_KELAS_7_SEM_2_BAB_9.rukhsahEmpatIbadah.find((i) => i.id === selectedIbadahId) ||
    MATERI_KELAS_7_SEM_2_BAB_9.rukhsahEmpatIbadah[0];

  const currentPraktik =
    MATERI_KELAS_7_SEM_2_BAB_9.panduanPraktik.find((p) => p.id === selectedPraktikId) ||
    MATERI_KELAS_7_SEM_2_BAB_9.panduanPraktik[0];

  const getIbadahIcon = (name: string) => {
    switch (name) {
      case 'Shalat':
        return <Compass className="w-5 h-5 text-emerald-600" />;
      case 'Puasa':
        return <Moon className="w-5 h-5 text-amber-500" />;
      case 'Zakat':
        return <Coins className="w-5 h-5 text-teal-600" />;
      case 'Haji':
        return <Globe className="w-5 h-5 text-indigo-600" />;
      default:
        return <Compass className="w-5 h-5 text-emerald-600" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Banner Bab 9 */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-teal-800 via-emerald-800 to-cyan-900 text-white p-6 sm:p-8 shadow-xl">
        <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute right-8 top-8 opacity-15 hidden md:block pointer-events-none">
          <Feather className="w-44 h-44" />
        </div>

        <div className="relative z-10 space-y-4 max-w-3xl">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-lg bg-amber-400 text-amber-950 font-black text-xs uppercase tracking-wider shadow-sm">
              Bab IX • Semester 2
            </span>
            <span className="px-3 py-1 rounded-lg bg-teal-500/30 text-teal-200 border border-teal-400/40 text-xs font-semibold">
              Elemen: {MATERI_KELAS_7_SEM_2_BAB_9.elemenCp} ({MATERI_KELAS_7_SEM_2_BAB_9.fase})
            </span>
            <span className="px-3 py-1 rounded-lg bg-cyan-400/20 text-cyan-200 text-xs font-medium">
              Kurikulum Merdeka 2026
            </span>
          </div>

          <div className="space-y-1">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              {MATERI_KELAS_7_SEM_2_BAB_9.judulBab}
            </h1>
            <p className="text-sm sm:text-base text-teal-100 font-medium leading-relaxed">
              {MATERI_KELAS_7_SEM_2_BAB_9.subJudul}
            </p>
          </div>

          <p className="text-xs sm:text-sm text-teal-200/90 leading-relaxed pt-1">
            {MATERI_KELAS_7_SEM_2_BAB_9.pengantar.apersepsi}
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            <button
              onClick={() =>
                onAskAI(
                  'Jelaskan konsep dasar rukhsah dalam ibadah PAI Kelas 7 Semester 2 Bab 9: pengertian bahasa & istilah, perbedaan dengan azimah, hukum mengambil rukhsah, dan 7 sebab keringanan.'
                )
              }
              className="px-3 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 text-white text-xs font-bold transition-all flex items-center gap-1.5 border border-white/20 cursor-pointer shadow-xs"
            >
              <Bot className="w-3.5 h-3.5 text-amber-300" />
              <span>Tanya AI: Konsep Dasar Rukhsah</span>
            </button>
            <button
              onClick={() =>
                onAskAI(
                  'Bagaimana tata cara salat jamak taqdim dan jamak ta\'khir qashar bagi pelajar saat bepergian jauh sesuai fikih Bab 9 Kelas 7?'
                )
              }
              className="px-3 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 text-white text-xs font-bold transition-all flex items-center gap-1.5 border border-white/20 cursor-pointer shadow-xs"
            >
              <Bot className="w-3.5 h-3.5 text-emerald-300" />
              <span>Tanya AI: Praktik Jamak Qashar</span>
            </button>
            <button
              onClick={() =>
                onAskAI(
                  'Jelaskan rukhsah dalam 4 ibadah: Shalat, Puasa, Zakat, dan Haji beserta dalil naqli dan hikmahnya!'
                )
              }
              className="px-3 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 text-white text-xs font-bold transition-all flex items-center gap-1.5 border border-white/20 cursor-pointer shadow-xs"
            >
              <Bot className="w-3.5 h-3.5 text-cyan-300" />
              <span>Tanya AI: 4 Ibadah Rukhsah</span>
            </button>
          </div>
        </div>
      </div>

      {/* Sub-Tabs Navigation */}
      <div className="bg-white p-2 rounded-2xl border border-slate-200 shadow-sm flex flex-wrap gap-2">
        <button
          onClick={() => setActiveTab('ketentuan')}
          className={`flex-1 min-w-[140px] px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
            activeTab === 'ketentuan'
              ? 'bg-teal-600 text-white shadow-md'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          <Layers className="w-4 h-4" />
          <span>1. Ketentuan Rukhsah</span>
        </button>

        <button
          onClick={() => setActiveTab('empat-ibadah')}
          className={`flex-1 min-w-[140px] px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
            activeTab === 'empat-ibadah'
              ? 'bg-teal-600 text-white shadow-md'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          <Compass className="w-4 h-4" />
          <span>2. Shalat, Puasa, Zakat & Haji</span>
        </button>

        <button
          onClick={() => setActiveTab('praktik')}
          className={`flex-1 min-w-[140px] px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
            activeTab === 'praktik'
              ? 'bg-teal-600 text-white shadow-md'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>3. Mempraktikkan Rukhsah</span>
        </button>

        <button
          onClick={() => setActiveTab('hikmah')}
          className={`flex-1 min-w-[130px] px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
            activeTab === 'hikmah'
              ? 'bg-teal-600 text-white shadow-md'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          <Sparkles className="w-4 h-4" />
          <span>4. Hikmah Rukhsah</span>
        </button>

        <button
          onClick={() => setActiveTab('kuis')}
          className={`flex-1 min-w-[120px] px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
            activeTab === 'kuis'
              ? 'bg-teal-600 text-white shadow-md'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          <CheckCircle2 className="w-4 h-4" />
          <span>5. Kuis HOTS (5 Soal)</span>
        </button>
      </div>

      {/* =========================================================================
          TAB 1: KETENTUAN RUKHSAH DALAM IBADAH
         ========================================================================= */}
      {activeTab === 'ketentuan' && (
        <div className="space-y-6">
          {/* Card: Pengertian Bahasa & Istilah */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-teal-700 bg-teal-50 px-2.5 py-1 rounded-md">
                  Hakikat Ushul Fikih
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-1">
                  1. Pengertian Rukhsah dalam Ibadah
                </h3>
              </div>
              <button
                onClick={() =>
                  onAskAI(
                    'Jelaskan pengertian rukhsah secara etimologi bahasa Arab dan istilah Ushul Fikih beserta contohnya!'
                  )
                }
                className="px-3 py-1.5 rounded-lg bg-teal-50 hover:bg-teal-100 text-teal-800 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <Bot className="w-4 h-4 text-teal-600" />
                <span>Konsultasi AI</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-gradient-to-br from-teal-50 to-emerald-50/40 border border-teal-100 space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-teal-600 text-white flex items-center justify-center font-black text-sm">
                    ل
                  </div>
                  <h4 className="font-bold text-teal-950 text-sm">Secara Bahasa (Etimologi)</h4>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  {MATERI_KELAS_7_SEM_2_BAB_9.ketentuanRukhsah.pengertianBahasa}
                </p>
                <div className="pt-2 text-[11px] text-teal-800 bg-teal-100/60 p-2.5 rounded-lg font-medium">
                  💡 <strong>Makna Filosofis:</strong> Sesuatu yang sebelumnya berat (mahal) menjadi ringan (murah) berkat kebaikan dan kelonggaran Sang Pemilik Hukum (Syāri').
                </div>
              </div>

              <div className="p-4 rounded-xl bg-gradient-to-br from-cyan-50 to-blue-50/40 border border-cyan-100 space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-cyan-600 text-white flex items-center justify-center font-black text-sm">
                    ش
                  </div>
                  <h4 className="font-bold text-cyan-950 text-sm">Secara Istilah (Terminologi Syariat)</h4>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  {MATERI_KELAS_7_SEM_2_BAB_9.ketentuanRukhsah.pengertianIstilah}
                </p>
                <div className="pt-2 text-[11px] text-cyan-800 bg-cyan-100/60 p-2.5 rounded-lg font-medium">
                  💡 <strong>Kaidah Ushul Fikih:</strong> Keringanan ini bersifat darurat/kondisional dan tidak menghapus hukum asal bagi orang yang berada dalam keadaan normal.
                </div>
              </div>
            </div>

            {/* Komparasi: 'Azimah vs Rukhsah */}
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 space-y-3">
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <Layers className="w-4 h-4 text-teal-600" />
                <span>Perbedaan Mendasar: Hukum 'Azimah (عَزِيْمَةٌ) vs Hukum Rukhsah (رُخْصَةٌ)</span>
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-3.5 bg-white rounded-lg border border-slate-200 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-800">1. Hukum 'Azimah (Hukum Pokok)</span>
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-bold text-[10px]">Normal</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {MATERI_KELAS_7_SEM_2_BAB_9.ketentuanRukhsah.konsepAzimahVsRukhsah.azimah}
                  </p>
                </div>

                <div className="p-3.5 bg-white rounded-lg border border-teal-200 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-teal-900">2. Hukum Rukhsah (Keringanan Syariat)</span>
                    <span className="px-2 py-0.5 rounded bg-teal-100 text-teal-800 font-bold text-[10px]">Darurat / Safar</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {MATERI_KELAS_7_SEM_2_BAB_9.ketentuanRukhsah.konsepAzimahVsRukhsah.rukhsah}
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-700 italic bg-amber-50 p-2.5 rounded-lg border border-amber-200/70">
                ⭐ <strong>Kesimpulan Perbandingan:</strong>{' '}
                {MATERI_KELAS_7_SEM_2_BAB_9.ketentuanRukhsah.konsepAzimahVsRukhsah.perbandingan}
              </p>
            </div>

            {/* Hukum Mengambil Rukhsah */}
            <div className="space-y-3">
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>4 Kategori Hukum Mengambil Rukhsah</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                <div className="p-3.5 rounded-xl bg-red-50/70 border border-red-200 space-y-1">
                  <span className="px-2 py-0.5 rounded bg-red-600 text-white font-black text-[10px]">
                    1. WAJIB
                  </span>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    {MATERI_KELAS_7_SEM_2_BAB_9.ketentuanRukhsah.hukumMengambilRukhsah.wajib}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200 space-y-1">
                  <span className="px-2 py-0.5 rounded bg-emerald-600 text-white font-black text-[10px]">
                    2. SUNNAH
                  </span>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    {MATERI_KELAS_7_SEM_2_BAB_9.ketentuanRukhsah.hukumMengambilRukhsah.sunnah}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-200 space-y-1">
                  <span className="px-2 py-0.5 rounded bg-blue-600 text-white font-black text-[10px]">
                    3. MUBAH (Boleh)
                  </span>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    {MATERI_KELAS_7_SEM_2_BAB_9.ketentuanRukhsah.hukumMengambilRukhsah.mubah}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200 space-y-1">
                  <span className="px-2 py-0.5 rounded bg-amber-600 text-white font-black text-[10px]">
                    4. MAKRUH / HARAM
                  </span>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    {MATERI_KELAS_7_SEM_2_BAB_9.ketentuanRukhsah.hukumMengambilRukhsah.makruhAtauHaram}
                  </p>
                </div>
              </div>
            </div>

            {/* 7 Sebab Keringanan (Asbāb at-Takhfīf) */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <Feather className="w-4 h-4 text-teal-600" />
                    <span>7 Sebab Keringanan dalam Fikih Islam (أَسْبَابُ التَّخْفِيْفِ السَّبْعَةُ)</span>
                  </h4>
                  <p className="text-xs text-slate-500">
                    Kaidah baku yang disepakati ulama mazhab sebagai legalitas memperoleh kemudahan ibadah
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {MATERI_KELAS_7_SEM_2_BAB_9.ketentuanRukhsah.tujuhSebabKeringanan.map((item) => (
                  <div
                    key={item.nomor}
                    className="p-4 rounded-xl bg-slate-50 hover:bg-teal-50/40 border border-slate-200/80 transition-all space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <span className="w-6 h-6 rounded-full bg-teal-600 text-white font-black text-xs flex items-center justify-center">
                        {item.nomor}
                      </span>
                      <span className="text-xs font-semibold font-arabic text-teal-900 bg-teal-100/60 px-2 py-0.5 rounded">
                        {item.istilahArab}
                      </span>
                    </div>
                    <h5 className="font-bold text-slate-900 text-xs sm:text-sm">{item.sebab}</h5>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.penjelasan}</p>
                    <div className="pt-1 border-t border-slate-200 text-[11px] text-teal-800">
                      <strong>Contoh:</strong> {item.contohDalamIbadah}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Dalil Naqli Al-Qur'an dan Hadis */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs space-y-5">
            <div className="border-b border-slate-100 pb-3">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-teal-700 bg-teal-50 px-2.5 py-1 rounded-md">
                Landasan Wahyu
              </span>
              <h3 className="text-xl font-bold text-slate-900 mt-1">
                Dalil Naqli Al-Qur'an dan Hadits Shahih tentang Rukhsah
              </h3>
            </div>

            <div className="space-y-4">
              {MATERI_KELAS_7_SEM_2_BAB_9.dalilNaqli.map((dalil) => {
                const isPlaying = playingAudioUrl === dalil.audioUrl;
                return (
                  <div
                    key={dalil.id}
                    className="p-5 rounded-xl border border-slate-200 hover:border-teal-300 bg-gradient-to-r from-white to-slate-50/50 transition-all space-y-3"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-md bg-teal-100 text-teal-900 font-bold text-xs">
                          {dalil.sumber}
                        </span>
                        <span className="text-xs text-slate-500 font-medium">
                          • {dalil.kategori}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        {dalil.audioUrl && (
                          <button
                            onClick={() => handlePlayAudio(dalil.audioUrl)}
                            className={`p-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1 cursor-pointer ${
                              isPlaying
                                ? 'bg-amber-500 text-white animate-pulse'
                                : 'bg-teal-50 hover:bg-teal-100 text-teal-800'
                            }`}
                            title="Putar Audio Tilawah"
                          >
                            {isPlaying ? (
                              <VolumeX className="w-4 h-4" />
                            ) : (
                              <Volume2 className="w-4 h-4" />
                            )}
                            <span className="text-[11px]">{isPlaying ? 'Stop' : 'Tilawah'}</span>
                          </button>
                        )}
                        <button
                          onClick={() => handleCopyText(`${dalil.arabic}\n\n${dalil.terjemah}`, dalil.sumber)}
                          className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 transition-all cursor-pointer"
                          title="Salin Teks Arab & Terjemah"
                        >
                          <Copy className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                      <p className="text-xl sm:text-2xl font-arabic text-right leading-loose text-slate-800">
                        {dalil.arabic}
                      </p>
                    </div>

                    <div className="space-y-1">
                      <p className="text-xs text-teal-900 font-medium italic">
                        "{dalil.latin}"
                      </p>
                      <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-semibold">
                        Artinya: "{dalil.terjemah}"
                      </p>
                    </div>

                    <div className="p-3 bg-teal-50/60 rounded-lg text-xs text-teal-950 space-y-1 border border-teal-100">
                      <span className="font-bold flex items-center gap-1">
                        <Lightbulb className="w-3.5 h-3.5 text-amber-500" /> Syarah & Kandungan Hukum:
                      </span>
                      <p className="leading-relaxed text-slate-700">{dalil.tafsirRingkas}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          TAB 2: RUKHSAH DALAM 4 IBADAH (SHALAT, PUASA, ZAKAT, HAJI)
         ========================================================================= */}
      {activeTab === 'empat-ibadah' && (
        <div className="space-y-6">
          {/* Sub-selector 4 Ibadah */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {MATERI_KELAS_7_SEM_2_BAB_9.rukhsahEmpatIbadah.map((ibadah) => {
              const isSelected = selectedIbadahId === ibadah.id;
              return (
                <button
                  key={ibadah.id}
                  onClick={() => setSelectedIbadahId(ibadah.id)}
                  className={`p-4 rounded-2xl border text-left transition-all cursor-pointer space-y-2 ${
                    isSelected
                      ? 'bg-gradient-to-br from-teal-700 to-emerald-800 text-white border-teal-800 shadow-md transform -translate-y-0.5'
                      : 'bg-white hover:bg-slate-50 text-slate-800 border-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div
                      className={`p-2 rounded-xl ${
                        isSelected ? 'bg-white/20 text-white' : 'bg-teal-50'
                      }`}
                    >
                      {getIbadahIcon(ibadah.namaIbadah)}
                    </div>
                    {isSelected && (
                      <span className="text-[10px] font-black uppercase tracking-wider bg-amber-400 text-amber-950 px-2 py-0.5 rounded">
                        Aktif
                      </span>
                    )}
                  </div>
                  <div>
                    <h4 className="font-bold text-base">{ibadah.namaIbadah}</h4>
                    <p
                      className={`text-[11px] line-clamp-1 ${
                        isSelected ? 'text-teal-100' : 'text-slate-500'
                      }`}
                    >
                      {ibadah.tagline}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detailed Card for Selected Ibadah */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-teal-100 text-teal-800">
                  {getIbadahIcon(currentIbadah.namaIbadah)}
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-teal-700 bg-teal-50 px-2 py-0.5 rounded">
                    Rukhsah Ibadah Pokok
                  </span>
                  <h3 className="text-xl font-bold text-slate-900">
                    Keringanan (Rukhsah) dalam Ibadah {currentIbadah.namaIbadah}
                  </h3>
                  <p className="text-xs text-slate-500">{currentIbadah.tagline}</p>
                </div>
              </div>
              <button
                onClick={() =>
                  onAskAI(
                    `Jelaskan secara lengkap ketentuan rukhsah dalam ibadah ${currentIbadah.namaIbadah}: hukum dasar azimah, bentuk-bentuk keringanan, syarat sah, siapa saja yang berhak, dan dalil rujukannya.`
                  )
                }
                className="px-3.5 py-1.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-xs"
              >
                <Bot className="w-4 h-4 text-amber-300" />
                <span>Tanya AI tentang {currentIbadah.namaIbadah}</span>
              </button>
            </div>

            {/* Azimah vs Detail */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-xs">
                <ShieldCheck className="w-4 h-4 text-teal-600" />
                <span>Hukum Dasar / 'Azimah Ibadah {currentIbadah.namaIbadah}:</span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed pl-6">
                {currentIbadah.hukumDasar}
              </p>
            </div>

            {/* Bentuk-bentuk Rukhsah */}
            <div className="space-y-3">
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <Layers className="w-4 h-4 text-teal-600" />
                <span>Bentuk-Bentuk Fasilitas Rukhsah yang Diberikan:</span>
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {currentIbadah.bentukRukhsah.map((bentuk, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-teal-50/50 border border-teal-100 flex items-start gap-2.5"
                  >
                    <span className="w-5 h-5 rounded-full bg-teal-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <p className="text-xs text-slate-800 leading-relaxed">{bentuk}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Grid: Syarat Sah & Siapa yang Boleh */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2.5">
                <h5 className="font-bold text-slate-900 text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Syarat-Syarat Sah Pengambilan Rukhsah:</span>
                </h5>
                <ul className="space-y-2 text-xs text-slate-700">
                  {currentIbadah.syaratSah.map((syarat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-1.5" />
                      <span>{syarat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2.5">
                <h5 className="font-bold text-slate-900 text-xs flex items-center gap-2">
                  <Users className="w-4 h-4 text-blue-600" />
                  <span>Golongan yang Berhak Menerima Rukhsah:</span>
                </h5>
                <ul className="space-y-2 text-xs text-slate-700">
                  {currentIbadah.siapaYangBoleh.map((orang, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-1.5" />
                      <span>{orang}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Dalil Rujukan & Prinsip */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-teal-50 to-emerald-50 border border-teal-100 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-teal-900">
                  📌 Landasan Dalil: {currentIbadah.dalilRujukan}
                </span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                {currentIbadah.detailPenerapan}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          TAB 3: MEMPRAKTIKKAN RUKHSAH
         ========================================================================= */}
      {activeTab === 'praktik' && (
        <div className="space-y-6">
          {/* Sub-selector Praktik */}
          <div className="flex flex-wrap gap-2">
            {MATERI_KELAS_7_SEM_2_BAB_9.panduanPraktik.map((p) => {
              const isSelected = selectedPraktikId === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => setSelectedPraktikId(p.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                    isSelected
                      ? 'bg-teal-600 text-white shadow-md'
                      : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
                  }`}
                >
                  <BookOpen className="w-4 h-4" />
                  <span>{p.judulPraktik}</span>
                </button>
              );
            })}
          </div>

          {/* Active Praktik Card */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-4">
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-teal-700 bg-teal-50 px-2 py-0.5 rounded">
                  {currentPraktik.kategori}
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-1">
                  {currentPraktik.judulPraktik}
                </h3>
              </div>
              <button
                onClick={() =>
                  onAskAI(
                    `Bimbing saya mempraktikkan langkah demi langkah ${currentPraktik.judulPraktik} beserta bacaan niat, syarat sah, dan tips praktis untuk pelajar SMP!`
                  )
                }
                className="px-3.5 py-1.5 rounded-xl bg-teal-50 hover:bg-teal-100 text-teal-800 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <Bot className="w-4 h-4 text-teal-600" />
                <span>Simulasi Interaktif AI</span>
              </button>
            </div>

            {/* Syarat & Ketentuan Praktis */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <h4 className="font-bold text-slate-900 text-xs flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-amber-500" />
                <span>Syarat & Ketentuan Pelaksanaan:</span>
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                {currentPraktik.syaratKetentuan.map((syarat, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0 mt-1.5" />
                    <span>{syarat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tahap Langkah demi Langkah */}
            <div className="space-y-4">
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600" />
                <span>Tahapan Langkah Praktik Sesuai Sunnah:</span>
              </h4>

              <div className="space-y-3">
                {currentPraktik.langkahPraktik.map((step) => (
                  <div
                    key={step.tahap}
                    className="p-4 rounded-xl bg-gradient-to-r from-slate-50 to-white border border-slate-200 hover:border-teal-300 transition-all space-y-2.5"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="w-7 h-7 rounded-lg bg-teal-600 text-white font-black text-xs flex items-center justify-center">
                        {step.tahap}
                      </span>
                      <h5 className="font-bold text-slate-900 text-xs sm:text-sm">
                        Tahap {step.tahap}
                      </h5>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pl-9">
                      {step.instruksi}
                    </p>

                    {/* Bacaan Niat / Doa jika ada */}
                    {step.bacaanNiatAtauDoa && (
                      <div className="ml-9 p-3.5 rounded-xl bg-teal-50/70 border border-teal-100 space-y-1.5">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-black uppercase tracking-wider text-teal-800">
                            Lafaz Niat
                          </span>
                          <button
                            onClick={() =>
                              handleCopyText(
                                `${step.bacaanNiatAtauDoa?.arab}\n\n${step.bacaanNiatAtauDoa?.arti}`,
                                'Lafaz Niat'
                              )
                            }
                            className="text-teal-700 hover:text-teal-900 p-1"
                            title="Salin Niat"
                          >
                            <Copy className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <p className="text-base sm:text-lg font-arabic text-right leading-loose text-teal-950">
                          {step.bacaanNiatAtauDoa.arab}
                        </p>
                        <p className="text-xs text-teal-800 font-medium italic">
                          "{step.bacaanNiatAtauDoa.latin}"
                        </p>
                        <p className="text-xs text-slate-700 font-medium">
                          <strong>Artinya:</strong> "{step.bacaanNiatAtauDoa.arti}"
                        </p>
                      </div>
                    )}

                    <div className="ml-9 text-[11px] text-amber-900 bg-amber-50 p-2 rounded-lg border border-amber-200/60 font-medium">
                      ⚠️ <strong>Catatan Penting:</strong> {step.catatanPenting}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tips Pelajar SMP */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 flex items-start gap-3">
              <div className="p-2 rounded-lg bg-emerald-600 text-white shrink-0 mt-0.5">
                <Lightbulb className="w-4 h-4" />
              </div>
              <div className="space-y-0.5">
                <h5 className="font-bold text-emerald-950 text-xs sm:text-sm">
                  Tips Praktis Pelajar Muslim:
                </h5>
                <p className="text-xs text-emerald-900 leading-relaxed">
                  {currentPraktik.tipsPelajar}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          TAB 4: HIKMAH RUKHSAH DALAM KEHIDUPAN
         ========================================================================= */}
      {activeTab === 'hikmah' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-teal-700 bg-teal-50 px-2.5 py-1 rounded-md">
                  Refleksi & Karakter Mulia
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-1">
                  4. Hikmah Agung Pensyariatan Rukhsah dalam Ibadah
                </h3>
              </div>
              <button
                onClick={() =>
                  onAskAI(
                    'Apa saja 5 hikmah agung pensyariatan rukhsah dalam ibadah bagi kehidupan pelajar muslim?'
                  )
                }
                className="px-3 py-1.5 rounded-lg bg-teal-50 hover:bg-teal-100 text-teal-800 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <Bot className="w-4 h-4 text-teal-600" />
                <span>Tanya AI</span>
              </button>
            </div>

            {/* 5 Hikmah Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {MATERI_KELAS_7_SEM_2_BAB_9.hikmahRukhsah.map((hikmah) => (
                <div
                  key={hikmah.nomor}
                  className="p-5 rounded-xl border border-slate-200 hover:border-teal-300 bg-slate-50/50 hover:bg-white transition-all space-y-3"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-xl bg-teal-600 text-white font-black text-sm flex items-center justify-center shrink-0 shadow-sm">
                      {hikmah.nomor}
                    </span>
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                      {hikmah.judul}
                    </h4>
                  </div>

                  <p className="text-xs text-slate-700 leading-relaxed">{hikmah.deskripsi}</p>

                  <div className="space-y-1.5 pt-1">
                    <div className="p-2.5 rounded-lg bg-teal-50/80 text-[11px] text-teal-950 font-medium">
                      🌱 <strong>Dampak Spiritual:</strong> {hikmah.dampakSpiritual}
                    </div>
                    <div className="p-2.5 rounded-lg bg-amber-50/80 text-[11px] text-amber-950 font-medium">
                      🎯 <strong>Refleksi Pelajar:</strong> {hikmah.refleksiPelajar}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Checklist Komitmen Pelajar */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-teal-50 via-emerald-50 to-cyan-50 border border-teal-200 space-y-3">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-teal-700" />
                <h4 className="font-bold text-teal-950 text-sm sm:text-base">
                  Lembar Komitmen Pelajar: Tidak Pernah Meninggalkan Salat
                </h4>
              </div>
              <p className="text-xs text-slate-600">
                Beri tanda centang pada sikap yang sudah atau berkomitmen kamu terapkan dalam kehidupan sehari-hari:
              </p>

              <div className="space-y-2">
                {[
                  'Saya tidak akan pernah meninggalkan salat fardu saat bepergian (study tour, piknik, atau mudik) karena adanya fasilitas jamak dan qashar.',
                  'Saya akan tetap menunaikan salat saat sakit (dengan duduk, berbaring, atau tayamum) dan tidak menundanya tanpa udzur syar\'i.',
                  'Saya menghargai orang tua, ibu hamil, atau teman yang sedang berhalangan/sakit saat berpuasa tanpa mencela mereka.',
                  'Saya belajar tata cara tayamum dan salat jamak dengan benar sesuai tuntunan Rasulullah Saw.'
                ].map((item, index) => {
                  const isChecked = !!checklistChecked[index];
                  return (
                    <div
                      key={index}
                      onClick={() =>
                        setChecklistChecked((prev) => ({
                          ...prev,
                          [index]: !prev[index]
                        }))
                      }
                      className={`p-3 rounded-xl border transition-all cursor-pointer flex items-center gap-3 ${
                        isChecked
                          ? 'bg-white border-teal-400 shadow-xs'
                          : 'bg-white/60 hover:bg-white border-slate-200'
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded-md flex items-center justify-center border transition-all ${
                          isChecked
                            ? 'bg-teal-600 border-teal-600 text-white'
                            : 'border-slate-300'
                        }`}
                      >
                        {isChecked && <Check className="w-3.5 h-3.5" />}
                      </div>
                      <span className="text-xs text-slate-800 font-medium leading-relaxed">
                        {item}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          TAB 5: KUIS HOTS
         ========================================================================= */}
      {activeTab === 'kuis' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-teal-700 bg-teal-50 px-2.5 py-1 rounded-md">
                  Evaluasi Mandiri HOTS
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-1">
                  Uji Pemahaman Fikih Rukhsah (5 Soal Analisis Kasus)
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleResetKuis}
                  className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset Kuis</span>
                </button>
              </div>
            </div>

            {/* Quiz Result Banner if submitted */}
            {showKuisResult && (
              <div
                className={`p-5 rounded-2xl border flex flex-col sm:flex-row items-center justify-between gap-4 ${
                  calculateScore() >= 80
                    ? 'bg-emerald-50 border-emerald-300 text-emerald-950'
                    : calculateScore() >= 60
                    ? 'bg-amber-50 border-amber-300 text-amber-950'
                    : 'bg-red-50 border-red-300 text-red-950'
                }`}
              >
                <div className="space-y-1 text-center sm:text-left">
                  <span className="text-xs font-bold uppercase tracking-wider">Hasil Evaluasi Bab 9:</span>
                  <h4 className="text-2xl font-black">
                    Skor Akhir Kamu: {calculateScore()} / 100
                  </h4>
                  <p className="text-xs font-medium">
                    {calculateScore() >= 80
                      ? '🎉 Mumtaz! Pemahamanmu tentang ketentuan rukhsah ibadah sangat mendalam dan siap dipraktikkan.'
                      : calculateScore() >= 60
                      ? '👍 Bagus! Kamu sudah memahami konsep dasar, pelajari kembali syarat sah jamak qashar dan tayamum.'
                      : '📚 Ayo baca kembali materi dan dalil naqli pada tab Ketentuan dan Praktik Rukhsah!'}
                  </p>
                </div>
                <button
                  onClick={() =>
                    onAskAI(
                      `Saya telah mengerjakan kuis HOTS Bab 9 Rukhsah dengan skor ${calculateScore()}/100. Tolong jelaskan secara mendalam konsep rukhsah dalam ibadah yang sering keliru di kalangan pelajar!`
                    )
                  }
                  className="px-4 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs flex items-center gap-2 shadow-sm whitespace-nowrap cursor-pointer"
                >
                  <Bot className="w-4 h-4 text-amber-300" />
                  <span>Minta Bimbingan AI</span>
                </button>
              </div>
            )}

            {/* List of Questions */}
            <div className="space-y-6">
              {MATERI_KELAS_7_SEM_2_BAB_9.kuisHots.map((soal) => {
                const selectedOption = userAnswers[soal.id];
                const isAnswered = selectedOption !== undefined;
                const isCorrect = isAnswered && selectedOption === soal.kunciJawaban;

                return (
                  <div
                    key={soal.id}
                    className="p-5 rounded-2xl border border-slate-200 bg-slate-50/40 space-y-3"
                  >
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-md bg-teal-600 text-white font-black text-xs">
                        Soal No. {soal.nomor}
                      </span>
                      <span className="text-xs text-slate-500 font-semibold">
                        Studi Kasus Kontekstual
                      </span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 leading-relaxed font-medium">
                      📌 <strong>Kasus:</strong> {soal.kasus}
                    </div>

                    <p className="text-xs sm:text-sm font-bold text-slate-900 leading-relaxed">
                      {soal.pertanyaan}
                    </p>

                    {/* Options */}
                    <div className="space-y-2 pt-1">
                      {soal.pilihan.map((pilihan, idx) => {
                        let btnStyle = 'bg-white hover:bg-slate-100 border-slate-200 text-slate-700';

                        if (showKuisResult) {
                          if (idx === soal.kunciJawaban) {
                            btnStyle = 'bg-emerald-100 border-emerald-500 text-emerald-950 font-bold';
                          } else if (selectedOption === idx) {
                            btnStyle = 'bg-red-100 border-red-500 text-red-950';
                          } else {
                            btnStyle = 'bg-white border-slate-200 text-slate-400 opacity-60';
                          }
                        } else if (selectedOption === idx) {
                          btnStyle = 'bg-teal-50 border-teal-500 text-teal-900 font-bold shadow-xs';
                        }

                        return (
                          <button
                            key={idx}
                            disabled={showKuisResult}
                            onClick={() => handleSelectAnswer(soal.id, idx)}
                            className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm transition-all flex items-start gap-2.5 cursor-pointer ${btnStyle}`}
                          >
                            <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                              {String.fromCharCode(65 + idx)}
                            </span>
                            <span className="leading-relaxed">{pilihan}</span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Explanation if results shown */}
                    {showKuisResult && (
                      <div
                        className={`p-3.5 rounded-xl text-xs space-y-1 border ${
                          isCorrect
                            ? 'bg-emerald-50/80 border-emerald-200 text-emerald-950'
                            : 'bg-amber-50/80 border-amber-200 text-amber-950'
                        }`}
                      >
                        <div className="flex items-center gap-1.5 font-bold">
                          {isCorrect ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          ) : (
                            <XCircle className="w-4 h-4 text-red-600" />
                          )}
                          <span>
                            {isCorrect
                              ? 'Jawaban Kamu Benar!'
                              : `Kurang Tepat. Jawaban yang benar adalah (${String.fromCharCode(
                                  65 + soal.kunciJawaban
                                )})`}
                          </span>
                        </div>
                        <p className="text-slate-700 leading-relaxed">
                          <strong>Pembahasan:</strong> {soal.pembahasan}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Submit Button */}
            {!showKuisResult && (
              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => {
                    if (
                      Object.keys(userAnswers).length <
                      MATERI_KELAS_7_SEM_2_BAB_9.kuisHots.length
                    ) {
                      showToast('Mohon jawab seluruh 5 pertanyaan sebelum melihat hasil!', 'info');
                      return;
                    }
                    setShowKuisResult(true);
                    showToast('Evaluasi selesai! Nilai dan pembahasan telah ditampilkan.', 'success');
                  }}
                  className="px-6 py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-sm flex items-center gap-2 shadow-md transition-all cursor-pointer"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Kirim & Periksa Jawaban</span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
