import React, { useState, useRef } from 'react';
import {
  BookOpen,
  Volume2,
  VolumeX,
  Play,
  Pause,
  Copy,
  Check,
  Search,
  Bot,
  Sparkles,
  HelpCircle,
  ShieldCheck,
  CheckCircle2,
  XCircle,
  RotateCcw,
  GraduationCap,
  Home,
  Users,
  Smartphone,
  ChevronRight,
  Heart,
  Lightbulb,
  Award,
  AlertTriangle,
  Flame,
  Layers,
  ArrowRight
} from 'lucide-react';
import { MATERI_KELAS_VII_SEM_1_BAB_3, DalilIkhlas, ContohPerilakuIkhlas } from '../../data/materiKelas7Sem1Bab3Data';
import { useToast } from '../common/Toast';

interface Props {
  onAskAI: (prompt: string) => void;
}

type Bab3SubTab = 'pengertian' | 'dalil' | 'perilaku' | 'hikmah' | 'kuis';

export const BukuPaiKelas7Sem1Bab3Detail: React.FC<Props> = ({ onAskAI }) => {
  const { showToast } = useToast();
  const [activeSubTab, setActiveSubTab] = useState<Bab3SubTab>('pengertian');

  // Audio Playback
  const [currentAudioUrl, setCurrentAudioUrl] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Perilaku Domain Filter
  const [perilakuDomain, setPerilakuDomain] = useState<'all' | 'ibadah' | 'sekolah' | 'rumah' | 'masyarakat' | 'digital'>('all');

  // Dalil Filter
  const [dalilTab, setDalilTab] = useState<'all' | 'quran' | 'hadits'>('all');

  // Kuis State
  const [quizAnswers, setQuizAnswers] = useState<Record<string, string>>({});
  const [showQuizResults, setShowQuizResults] = useState(false);

  // Copy helper
  const handleCopyText = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    showToast(`${label} berhasil disalin`, 'success');
  };

  // Audio helper
  const handlePlayAudio = (url?: string) => {
    if (!url) {
      showToast('Audio tilawah belum tersedia untuk ayat ini', 'info');
      return;
    }
    if (currentAudioUrl === url && audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
        setCurrentAudioUrl(null);
      }
      return;
    }
    if (audioRef.current) {
      audioRef.current.pause();
    }
    const audio = new Audio(url);
    audioRef.current = audio;
    setCurrentAudioUrl(url);
    audio.play().catch(() => {
      showToast('Gagal memutar audio tilawah', 'error');
      setCurrentAudioUrl(null);
    });
    audio.onended = () => setCurrentAudioUrl(null);
  };

  const handleStopAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
    setCurrentAudioUrl(null);
  };

  const subTabButtons = [
    { id: 'pengertian', label: '1. Pengertian Ikhlas', icon: Heart },
    { id: 'dalil', label: '2. Dalil Naqli (Al-Qur’an & Hadits)', icon: BookOpen },
    { id: 'perilaku', label: '3. Contoh Perilaku Sehari-hari', icon: ShieldCheck },
    { id: 'hikmah', label: '4. Manfaat & Hikmah Ikhlas', icon: Sparkles },
    { id: 'kuis', label: '5. Kuis Skenario Kasus', icon: HelpCircle }
  ];

  // Kuis scoring
  const calculateQuizScore = () => {
    const list = MATERI_KELAS_VII_SEM_1_BAB_3.kuisInteraktif;
    let correct = 0;
    list.forEach((item) => {
      if (quizAnswers[item.id] === item.jawabanBenar) {
        correct++;
      }
    });
    return Math.round((correct / list.length) * 100);
  };

  const filteredPerilaku = MATERI_KELAS_VII_SEM_1_BAB_3.subBab3_ContohPerilaku.daftarPerilaku.filter((item) => {
    if (perilakuDomain === 'all') return true;
    return item.kategori === perilakuDomain;
  });

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden text-slate-800">
      {/* Top Banner Bab 3 */}
      <div className="p-6 bg-gradient-to-br from-emerald-900 via-teal-900 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute right-0 top-0 translate-x-1/4 -translate-y-1/4 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-amber-400 text-amber-950 font-black text-xs uppercase tracking-wider">
              Buku Pelajaran PAI Kelas VII • Semester 1
            </span>
            <span className="px-3 py-1 rounded-full bg-white/15 text-emerald-100 font-semibold text-xs">
              Bab 3: Akhlak Terpuji
            </span>
            <span className="px-3 py-1 rounded-full bg-emerald-500/30 text-emerald-200 font-semibold text-xs">
              Materi Standar Kurikulum Merdeka
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tight text-white">
            Menerapkan Makna Ikhlas dalam Kehidupan Sehari-hari
          </h2>

          <p className="text-xs sm:text-sm text-emerald-100/90 max-w-4xl leading-relaxed">
            {MATERI_KELAS_VII_SEM_1_BAB_3.pengantar}
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-2">
            <button
              onClick={() =>
                onAskAI(
                  'Jelaskan materi lengkap PAI Kelas VII Semester 1 Bab 3 tentang makna ikhlas dalam kehidupan sehari-hari, meliputi pengertian bahasa dan istilah, dalil naqli Al-Qur\'an dan hadis, contoh perilaku nyata di sekolah, rumah, dan medsos, serta manfaat dan hikmahnya.'
                )
              }
              className="px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-amber-950 font-bold text-xs sm:text-sm flex items-center gap-2 transition-all cursor-pointer shadow-md"
            >
              <Bot className="w-4 h-4" />
              <span>Tanya Masterku AI Bab 3</span>
            </button>

            {currentAudioUrl && (
              <button
                onClick={handleStopAudio}
                className="px-3 py-2 rounded-xl bg-red-500/80 hover:bg-red-600 text-white font-semibold text-xs flex items-center gap-1.5 transition-all cursor-pointer"
              >
                <VolumeX className="w-4 h-4" />
                <span>Hentikan Audio Tilawah</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Navigation Sub-Tabs */}
      <div className="bg-slate-100/80 p-2 border-b border-slate-200 overflow-x-auto flex gap-1.5 scrollbar-none">
        {subTabButtons.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeSubTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveSubTab(tab.id as Bab3SubTab)}
              className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 whitespace-nowrap transition-all cursor-pointer ${
                isActive
                  ? 'bg-emerald-700 text-white shadow-sm'
                  : 'bg-white hover:bg-slate-50 text-slate-700 border border-slate-200/70'
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-emerald-700'}`} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab Content Area */}
      <div className="p-5 sm:p-7 space-y-6">
        {/* ========================================================================= */}
        {/* TAB 1: PENGERTIAN IKHLAS */}
        {/* ========================================================================= */}
        {activeSubTab === 'pengertian' && (
          <div className="space-y-6">
            {/* Header Pengertian */}
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-100 text-emerald-900 text-xs font-bold">
                <Heart className="w-4 h-4 text-emerald-700" />
                <span>Materi 1 • Hakikat & Pengertian Ikhlas</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                1. Pengertian Ikhlas secara Bahasa, Istilah, dan Kedudukannya
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {MATERI_KELAS_VII_SEM_1_BAB_3.subBab1_PengertianIkhlas.kedudukanIkhlas}
              </p>
            </div>

            {/* Dua Kartu: Bahasa & Istilah */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Bahasa */}
              <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold text-xs">
                    A
                  </span>
                  <h4 className="font-bold text-emerald-950 text-base">
                    Pengertian secara Bahasa (Etimologi)
                  </h4>
                </div>
                <div className="p-3 bg-white rounded-xl border border-emerald-100 font-mono text-xs text-emerald-800 font-semibold">
                  {MATERI_KELAS_VII_SEM_1_BAB_3.subBab1_PengertianIkhlas.pengertianBahasa.asalKata}
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                  {MATERI_KELAS_VII_SEM_1_BAB_3.subBab1_PengertianIkhlas.pengertianBahasa.arti}
                </p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {MATERI_KELAS_VII_SEM_1_BAB_3.subBab1_PengertianIkhlas.pengertianBahasa.penjelasan}
                </p>
              </div>

              {/* Istilah Syariat */}
              <div className="p-5 rounded-2xl bg-teal-50/70 border border-teal-200/80 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-teal-600 text-white flex items-center justify-center font-bold text-xs">
                    B
                  </span>
                  <h4 className="font-bold text-teal-950 text-base">
                    Pengertian secara Istilah Syariat (Terminologi)
                  </h4>
                </div>
                <div className="p-3 bg-white rounded-xl border border-teal-100 font-amiri text-base text-right text-teal-950 font-bold leading-relaxed">
                  {MATERI_KELAS_VII_SEM_1_BAB_3.subBab1_PengertianIkhlas.pengertianIstilah.lafalArab}
                </div>
                <p className="text-xs font-mono text-teal-800 italic">
                  "{MATERI_KELAS_VII_SEM_1_BAB_3.subBab1_PengertianIkhlas.pengertianIstilah.transliterasi}"
                </p>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                  Artinya: {MATERI_KELAS_VII_SEM_1_BAB_3.subBab1_PengertianIkhlas.pengertianIstilah.arti}
                </p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {MATERI_KELAS_VII_SEM_1_BAB_3.subBab1_PengertianIkhlas.pengertianIstilah.penjelasan}
                </p>
              </div>
            </div>

            {/* Pendapat Para Ulama Terkemuka */}
            <div className="space-y-3 pt-2">
              <h4 className="font-black text-slate-900 text-base flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-emerald-700" />
                <span>Hakikat Ikhlas Menurut Para Ulama Akidah & Tasawuf</span>
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {MATERI_KELAS_VII_SEM_1_BAB_3.subBab1_PengertianIkhlas.pendapatUlama.map((u, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 space-y-2 flex flex-col justify-between hover:border-emerald-300 transition-all"
                  >
                    <div>
                      <div className="text-xs font-bold text-emerald-800 pb-1 border-b border-slate-200">
                        {u.namaUlama}
                      </div>
                      <p className="text-xs text-slate-700 italic pt-2 leading-relaxed">
                        "{u.kutipan}"
                      </p>
                    </div>
                    <div className="text-[11px] text-emerald-900/90 font-medium bg-emerald-50/70 p-2 rounded-lg border border-emerald-100">
                      💡 Intisari: {u.pelajaran}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tiga Tingkatan Ikhlas */}
            <div className="space-y-3 pt-2">
              <h4 className="font-black text-slate-900 text-base flex items-center gap-2">
                <Layers className="w-4 h-4 text-emerald-700" />
                <span>Tiga Tingkatan Ikhlas bagi Hamba yang Beriman</span>
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {MATERI_KELAS_VII_SEM_1_BAB_3.subBab1_PengertianIkhlas.tingkatanIkhlas.map((t, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-gradient-to-b from-white to-slate-50 border border-slate-200 shadow-sm space-y-3"
                  >
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-full bg-emerald-700 text-white font-black text-xs">
                        Tingkat {idx + 1}
                      </span>
                      <h5 className="font-bold text-slate-900 text-xs sm:text-sm">
                        {t.tingkat.split(':')[1]?.trim() || t.tingkat}
                      </h5>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">{t.deskripsi}</p>
                    <div className="text-[11px] bg-emerald-50 text-emerald-900 p-2.5 rounded-xl border border-emerald-200/60 leading-relaxed font-medium">
                      ✅ Status: {t.status}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tabel Perbandingan: Ikhlas vs Riya' vs Sum'ah vs 'Ujub */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between">
                <h4 className="font-black text-slate-900 text-base flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  <span>Tabel Perbandingan: Ikhlas vs Riya’ vs Sum‘ah vs ‘Ujub</span>
                </h4>
                <span className="text-[11px] text-slate-500 hidden sm:inline">Penting untuk dipahami siswa</span>
              </div>
              <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                      <th className="p-3 w-1/5">Aspek Perbandingan</th>
                      <th className="p-3 w-1/5 bg-emerald-50 text-emerald-900">Ikhlas (Terpuji) ⭐</th>
                      <th className="p-3 w-1/5 bg-rose-50 text-rose-900">Riya’ (Tercela) ⚠️</th>
                      <th className="p-3 w-1/5 bg-amber-50 text-amber-900">Sum‘ah (Tercela) 📢</th>
                      <th className="p-3 w-1/5 bg-purple-50 text-purple-900">‘Ujub (Tercela) 🪞</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {MATERI_KELAS_VII_SEM_1_BAB_3.subBab1_PengertianIkhlas.tabelPerbandingan.map((row, i) => (
                      <tr key={i} className="hover:bg-slate-50 transition-colors">
                        <td className="p-3 font-bold text-slate-800">{row.aspek}</td>
                        <td className="p-3 bg-emerald-50/40 text-emerald-950 font-medium">{row.ikhlas}</td>
                        <td className="p-3 bg-rose-50/40 text-rose-900">{row.riya}</td>
                        <td className="p-3 bg-amber-50/40 text-amber-900">{row.sumah}</td>
                        <td className="p-3 bg-purple-50/40 text-purple-900">{row.ujub}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 2: DALIL NAQLI IKHLAS */}
        {/* ========================================================================= */}
        {activeSubTab === 'dalil' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-100 text-emerald-900 text-xs font-bold">
                  <BookOpen className="w-4 h-4 text-emerald-700" />
                  <span>Materi 2 • Landasan Syar’i Al-Qur’an & Sunnah</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                  2. Dalil Naqli tentang Perintah Bersikap Ikhlas
                </h3>
              </div>

              {/* Filter Dalil */}
              <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl border border-slate-200">
                <button
                  onClick={() => setDalilTab('all')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    dalilTab === 'all' ? 'bg-emerald-700 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Semua ({MATERI_KELAS_VII_SEM_1_BAB_3.subBab2_DalilNaqli.dalilQuran.length + MATERI_KELAS_VII_SEM_1_BAB_3.subBab2_DalilNaqli.dalilHadits.length})
                </button>
                <button
                  onClick={() => setDalilTab('quran')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    dalilTab === 'quran' ? 'bg-emerald-700 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Ayat Al-Qur’an ({MATERI_KELAS_VII_SEM_1_BAB_3.subBab2_DalilNaqli.dalilQuran.length})
                </button>
                <button
                  onClick={() => setDalilTab('hadits')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    dalilTab === 'hadits' ? 'bg-emerald-700 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Hadis Sahih ({MATERI_KELAS_VII_SEM_1_BAB_3.subBab2_DalilNaqli.dalilHadits.length})
                </button>
              </div>
            </div>

            {/* Ayat-ayat Al-Qur'an */}
            {(dalilTab === 'all' || dalilTab === 'quran') && (
              <div className="space-y-4">
                <h4 className="text-base font-black text-slate-900 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
                  <span>A. Dalil Ayat-Ayat Al-Qur’an Al-Karim</span>
                </h4>

                <div className="space-y-4">
                  {MATERI_KELAS_VII_SEM_1_BAB_3.subBab2_DalilNaqli.dalilQuran.map((dalil) => {
                    const isPlaying = currentAudioUrl === dalil.audioUrl;
                    return (
                      <div
                        key={dalil.id}
                        className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-4 hover:border-emerald-300 transition-all"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                          <div className="flex items-center gap-2">
                            <span className="px-2.5 py-1 rounded-lg bg-emerald-100 text-emerald-900 font-black text-xs">
                              {dalil.title}
                            </span>
                            <span className="text-xs text-slate-500 font-medium">{dalil.source}</span>
                          </div>

                          <div className="flex items-center gap-2">
                            {dalil.audioUrl && (
                              <button
                                onClick={() => handlePlayAudio(dalil.audioUrl)}
                                className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                                  isPlaying
                                    ? 'bg-amber-400 text-amber-950 font-black'
                                    : 'bg-emerald-50 hover:bg-emerald-100 text-emerald-800'
                                }`}
                              >
                                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                                <span>{isPlaying ? 'Jeda Tilawah' : 'Putar Tilawah'}</span>
                              </button>
                            )}
                            <button
                              onClick={() => handleCopyText(`${dalil.arabic}\n\n${dalil.translationKemenag}`, dalil.title)}
                              className="p-1.5 rounded-xl text-slate-500 hover:text-emerald-700 hover:bg-slate-100 transition-colors cursor-pointer"
                              title="Salin teks ayat & terjemah"
                            >
                              <Copy className="w-4 h-4" />
                            </button>
                          </div>
                        </div>

                        {/* Teks Arab Berharakat Lengkap */}
                        <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50/40 border border-emerald-100/80">
                          <p className="font-amiri text-xl sm:text-2xl text-right leading-loose text-slate-900 font-bold" dir="rtl">
                            {dalil.arabic}
                          </p>
                        </div>

                        {/* Transliterasi Latin */}
                        <div className="space-y-1">
                          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                            Transliterasi Latin:
                          </span>
                          <p className="text-xs sm:text-sm text-slate-600 font-mono italic leading-relaxed">
                            "{dalil.latin}"
                          </p>
                        </div>

                        {/* Terjemahan Resmi Kemenag */}
                        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                          <div className="flex items-center gap-2 text-xs font-bold text-emerald-900">
                            <BookOpen className="w-3.5 h-3.5 text-emerald-700" />
                            <span>Terjemahan Resmi Kementerian Agama RI:</span>
                          </div>
                          <p className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">
                            {dalil.translationKemenag}
                          </p>
                        </div>

                        {/* Tafsir Wajiz & Asbabun Nuzul */}
                        <div className="text-xs text-slate-600 bg-amber-50/60 p-3 rounded-xl border border-amber-200/60 leading-relaxed">
                          <strong className="text-amber-950 font-bold">💡 Intisari Tafsir Wajiz:</strong>{' '}
                          {dalil.tafsirWajiz}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Hadis-Hadis Sahih */}
            {(dalilTab === 'all' || dalilTab === 'hadits') && (
              <div className="space-y-4 pt-4">
                <h4 className="text-base font-black text-slate-900 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-teal-600" />
                  <span>B. Dalil Hadis-Hadis Sahih Rasulullah SAW</span>
                </h4>

                <div className="space-y-4">
                  {MATERI_KELAS_VII_SEM_1_BAB_3.subBab2_DalilNaqli.dalilHadits.map((hadits) => (
                    <div
                      key={hadits.id}
                      className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-4 hover:border-teal-300 transition-all"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                        <span className="px-2.5 py-1 rounded-lg bg-teal-100 text-teal-900 font-black text-xs">
                          {hadits.title}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-slate-500 font-medium">{hadits.source}</span>
                          <button
                            onClick={() =>
                              handleCopyText(`${hadits.arabic}\n\n${hadits.translationKemenag}`, hadits.title)
                            }
                            className="p-1.5 rounded-xl text-slate-500 hover:text-teal-700 hover:bg-slate-100 transition-colors cursor-pointer"
                            title="Salin hadis"
                          >
                            <Copy className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      {/* Matan Hadis Arab */}
                      <div className="p-4 sm:p-5 rounded-2xl bg-teal-50/40 border border-teal-100/80">
                        <p className="font-amiri text-lg sm:text-xl text-right leading-loose text-slate-900 font-bold" dir="rtl">
                          {hadits.arabic}
                        </p>
                      </div>

                      {/* Terjemahan Hadis */}
                      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                        <span className="text-[11px] font-bold text-teal-900 uppercase tracking-wider">
                          Artinya (Terjemahan):
                        </span>
                        <p className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">
                          "{hadits.translationKemenag}"
                        </p>
                      </div>

                      {/* Syarah Hadis */}
                      {hadits.syarahHadits && (
                        <div className="text-xs text-slate-700 bg-teal-50/60 p-3.5 rounded-xl border border-teal-200/70 space-y-1 leading-relaxed">
                          <strong className="text-teal-950 font-bold flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5 text-teal-700" />
                            Syarah & Pelajaran Hadis:
                          </strong>
                          <p>{hadits.syarahHadits}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 3: CONTOH PERILAKU IKHLAS SEHARI-HARI */}
        {/* ========================================================================= */}
        {activeSubTab === 'perilaku' && (
          <div className="space-y-6">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-100 text-emerald-900 text-xs font-bold">
                <ShieldCheck className="w-4 h-4 text-emerald-700" />
                <span>Materi 3 • Penerapan Karakter Nyata Siswa SMP</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                3. Contoh Perilaku Ikhlas dalam Kehidupan Sehari-hari
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {MATERI_KELAS_VII_SEM_1_BAB_3.subBab3_ContohPerilaku.pengantar}
              </p>
            </div>

            {/* Filter Kategori Perilaku */}
            <div className="flex flex-wrap items-center gap-1.5 bg-slate-100 p-1.5 rounded-2xl border border-slate-200">
              {[
                { id: 'all', label: 'Semua Ranah', icon: Layers },
                { id: 'ibadah', label: 'Ibadah Khusus', icon: Heart },
                { id: 'sekolah', label: 'Lingkungan Sekolah', icon: GraduationCap },
                { id: 'rumah', label: 'Keluarga & Rumah', icon: Home },
                { id: 'masyarakat', label: 'Sosial & Teman', icon: Users },
                { id: 'digital', label: 'Era Media Sosial', icon: Smartphone }
              ].map((filter) => {
                const Icon = filter.icon;
                const active = perilakuDomain === filter.id;
                return (
                  <button
                    key={filter.id}
                    onClick={() => setPerilakuDomain(filter.id as any)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                      active ? 'bg-emerald-700 text-white shadow-sm' : 'text-slate-700 hover:bg-white/80'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{filter.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Grid Kartu Perilaku */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredPerilaku.map((item) => (
                <div
                  key={item.id}
                  className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-4 hover:border-emerald-300 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-2.5">
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-900 font-black text-[11px] uppercase tracking-wider">
                        {item.indikatorKarakter}
                      </span>
                      <span className="text-[11px] font-bold text-slate-400 capitalize">
                        Ranah {item.kategori}
                      </span>
                    </div>

                    <h4 className="font-black text-slate-900 text-base leading-snug">
                      {item.judul}
                    </h4>

                    {/* Perilaku Ikhlas vs Lawan Riya */}
                    <div className="space-y-2">
                      <div className="p-3 rounded-xl bg-emerald-50/80 border border-emerald-200/80 space-y-1">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-900">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                          <span>Perilaku Ikhlas (Murni Karena Allah):</span>
                        </div>
                        <p className="text-xs text-slate-800 leading-relaxed font-medium">
                          {item.perilakuIkhlas}
                        </p>
                      </div>

                      <div className="p-3 rounded-xl bg-rose-50/80 border border-rose-200/80 space-y-1">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-rose-900">
                          <XCircle className="w-3.5 h-3.5 text-rose-700" />
                          <span>Hindari Sikap Lawannya (Riya' / Pamrih):</span>
                        </div>
                        <p className="text-xs text-slate-800 leading-relaxed">
                          {item.perilakuLawanRiya}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 text-[11px] text-slate-600 border-t border-slate-100 flex items-start gap-1.5">
                    <Lightbulb className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                    <span><strong>Hikmah Karakter:</strong> {item.alasanHikmah}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 4: MANFAAT DAN HIKMAH IKHLAS */}
        {/* ========================================================================= */}
        {activeSubTab === 'hikmah' && (
          <div className="space-y-6">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-100 text-emerald-900 text-xs font-bold">
                <Sparkles className="w-4 h-4 text-emerald-700" />
                <span>Materi 4 • Keberkahan di Dunia & Keselamatan Akhirat</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                4. Manfaat dan Hikmah Keikhlasan dalam Kehidupan
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {MATERI_KELAS_VII_SEM_1_BAB_3.subBab4_ManfaatDanHikmah.pengantar}
              </p>
            </div>

            {/* Dua Kolom: Dunia & Akhirat */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Manfaat Dunia */}
              <div className="p-6 rounded-2xl bg-gradient-to-b from-emerald-50/60 to-white border border-emerald-200/80 shadow-sm space-y-4">
                <div className="flex items-center gap-2 border-b border-emerald-200/60 pb-3">
                  <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-sm">
                    🌍
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 text-base">Manfaat & Hikmah di Dunia</h4>
                    <p className="text-[11px] text-slate-500">Ketenangan jiwa dan kesehatan mental seorang mukmin</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {MATERI_KELAS_VII_SEM_1_BAB_3.subBab4_ManfaatDanHikmah.manfaatDuniawi.map((item) => (
                    <div key={item.no} className="p-3.5 rounded-xl bg-white border border-emerald-100 shadow-2xs space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-black flex items-center justify-center">
                          {item.no}
                        </span>
                        <h5 className="text-xs font-bold text-slate-900">{item.judul}</h5>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed pl-7">
                        {item.deskripsi}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Manfaat Akhirat */}
              <div className="p-6 rounded-2xl bg-gradient-to-b from-teal-50/60 to-white border border-teal-200/80 shadow-sm space-y-4">
                <div className="flex items-center gap-2 border-b border-teal-200/60 pb-3">
                  <div className="w-8 h-8 rounded-xl bg-teal-600 text-white flex items-center justify-center font-bold text-sm">
                    ⭐
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 text-base">Manfaat & Hikmah di Akhirat</h4>
                    <p className="text-[11px] text-slate-500">Pahala tak terhingga, syafaat, dan surga Allah</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {MATERI_KELAS_VII_SEM_1_BAB_3.subBab4_ManfaatDanHikmah.manfaatUkhrawi.map((item) => (
                    <div key={item.no} className="p-3.5 rounded-xl bg-white border border-teal-100 shadow-2xs space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-teal-100 text-teal-800 text-[11px] font-black flex items-center justify-center">
                          {item.no}
                        </span>
                        <h5 className="text-xs font-bold text-slate-900">{item.judul}</h5>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed pl-7">
                        {item.deskripsi}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Kisah Inspiratif Pembelajaran: Tiga Orang yang Terjebak dalam Gua */}
            <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-amber-50/80 via-white to-orange-50/60 border border-amber-200 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-amber-950">
                <Award className="w-5 h-5 text-amber-600" />
                <h4 className="font-black text-base">
                  Kisah Pembelajaran Nyata: Tawasul Amal Ikhlas Tiga Orang Terjebak di Gua (HR. Bukhari & Muslim)
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Ketika tiga musafir terperangkap di dalam gua karena batu raksasa menggelinding menutup mulut gua, mereka sadar bahwa tiada yang dapat menyelamatkan mereka kecuali memohon kepada Allah dengan perantaraan (tawasul) amalan yang paling ikhlas yang pernah mereka lakukan:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                <div className="p-3 bg-white rounded-xl border border-amber-200/80 text-xs space-y-1">
                  <span className="font-bold text-amber-900">1. Birrul Walidain:</span>
                  <p className="text-slate-600 leading-relaxed">
                    Pemuda pertama bertawasul dengan baktinya memberi susu segar kepada kedua orang tuanya yang sudah tua renta sebelum memberi makan anak istrinya sendiri.
                  </p>
                </div>
                <div className="p-3 bg-white rounded-xl border border-amber-200/80 text-xs space-y-1">
                  <span className="font-bold text-amber-900">2. Takut Berbuat Zina:</span>
                  <p className="text-slate-600 leading-relaxed">
                    Pemuda kedua bertawasul dengan menahan hawa nafsu dan meninggalkan perbuatan zina karena takut kepada Allah Swt., meskipun sudah memiliki kesempatan.
                  </p>
                </div>
                <div className="p-3 bg-white rounded-xl border border-amber-200/80 text-xs space-y-1">
                  <span className="font-bold text-amber-900">3. Kejujuran Amanah:</span>
                  <p className="text-slate-600 leading-relaxed">
                    Pemuda ketiga bertawasul dengan mengembangbiakkan upah buruhnya yang tertinggal hingga menjadi peternakan kambing besar dan mengembalikannya secara utuh tanpa komisi.
                  </p>
                </div>
              </div>
              <div className="p-3 rounded-xl bg-amber-100/60 text-amber-950 font-medium text-xs">
                ✨ Hasilnya: Allah Swt. menggeser batu raksasa tersebut hingga mulut gua terbuka sempurna dan mereka semua keluar dengan selamat berkat ketulusan amal ikhlas mereka!
              </div>
            </div>

            {/* Peringatan Bahaya Riya' & Sum'ah */}
            <div className="p-5 rounded-2xl bg-rose-50/70 border border-rose-200 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-rose-950">
                <Flame className="w-5 h-5 text-rose-600" />
                <h4 className="font-black text-base">Peringatan: Bahaya Riya’ dan Sum‘ah Perusak Amalan</h4>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                Riya’ (pamer amalan mata) dan sum‘ah (pamer amalan telinga) adalah racun mematikan yang menghapus seluruh pahala kebaikan. Perhatikan peringatan syariat berikut:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {MATERI_KELAS_VII_SEM_1_BAB_3.subBab4_ManfaatDanHikmah.bahayaRiyaDanSumah.map((b, i) => (
                  <div key={i} className="p-3.5 bg-white rounded-xl border border-rose-100 text-xs space-y-1.5">
                    <span className="font-bold text-rose-900 block">{b.bahaya}</span>
                    <p className="text-[11px] text-slate-600 italic">{b.dalil}</p>
                    <p className="text-xs text-slate-700 font-medium pt-1 border-t border-slate-100">{b.penjelasan}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 5: KUIS SKENARIO KASUS HOTS */}
        {/* ========================================================================= */}
        {activeSubTab === 'kuis' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-100 text-emerald-900 text-xs font-bold">
                  <HelpCircle className="w-4 h-4 text-emerald-700" />
                  <span>Materi 5 • Evaluasi Pemahaman Mandiri</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                  5. Kuis Skenario Kasus HOTS: Makna Ikhlas
                </h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  Uji pemahamanmu tentang hakikat ikhlas, membedakan riya' dan sum'ah, serta penerapannya dalam kehidupan nyata siswa.
                </p>
              </div>

              {showQuizResults && (
                <div className="p-3 rounded-xl bg-emerald-100 text-emerald-900 font-black text-xs sm:text-sm flex items-center gap-2 self-start sm:self-auto shadow-sm">
                  <Award className="w-5 h-5 text-emerald-700" />
                  <span>Skor Kamu: {calculateQuizScore()} / 100</span>
                </div>
              )}
            </div>

            {/* List Soal */}
            <div className="space-y-5">
              {MATERI_KELAS_VII_SEM_1_BAB_3.kuisInteraktif.map((q, idx) => {
                const selected = quizAnswers[q.id];
                const isAnswered = Boolean(selected);
                const isCorrect = selected === q.jawabanBenar;

                return (
                  <div
                    key={q.id}
                    className={`p-5 rounded-2xl border transition-all ${
                      showQuizResults
                        ? isCorrect
                          ? 'bg-emerald-50/40 border-emerald-300'
                          : 'bg-rose-50/40 border-rose-300'
                        : 'bg-white border-slate-200'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <span className="w-7 h-7 rounded-xl bg-slate-800 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <div className="space-y-3 flex-1">
                        <p className="text-xs sm:text-sm font-bold text-slate-900 leading-relaxed">
                          {q.skenario}
                        </p>

                        {/* Pilihan Ganda */}
                        <div className="space-y-2">
                          {q.pilihan.map((p) => {
                            const isOptionSelected = selected === p.id;
                            const isThisCorrect = p.id === q.jawabanBenar;

                            let btnStyle = 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200';
                            if (showQuizResults) {
                              if (isThisCorrect) {
                                btnStyle = 'bg-emerald-100 border-emerald-400 text-emerald-950 font-bold';
                              } else if (isOptionSelected && !isCorrect) {
                                btnStyle = 'bg-rose-100 border-rose-400 text-rose-950 font-bold';
                              }
                            } else if (isOptionSelected) {
                              btnStyle = 'bg-emerald-700 text-white font-bold border-emerald-700 shadow-sm';
                            }

                            return (
                              <button
                                key={p.id}
                                disabled={showQuizResults}
                                onClick={() =>
                                  setQuizAnswers((prev) => ({
                                    ...prev,
                                    [q.id]: p.id
                                  }))
                                }
                                className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm flex items-center gap-3 transition-all cursor-pointer ${btnStyle}`}
                              >
                                <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center text-[10px] uppercase font-bold shrink-0">
                                  {p.id}
                                </span>
                                <span className="leading-snug">{p.teks}</span>
                              </button>
                            );
                          })}
                        </div>

                        {/* Pembahasan saat hasil ditampilkan */}
                        {showQuizResults && (
                          <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-xs space-y-1 pt-2">
                            <div className="flex items-center gap-1.5 font-bold text-slate-800">
                              {isCorrect ? (
                                <>
                                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                                  <span className="text-emerald-800">Jawaban Benar!</span>
                                </>
                              ) : (
                                <>
                                  <XCircle className="w-4 h-4 text-rose-600" />
                                  <span className="text-rose-800">Jawaban Kurang Tepat (Kunci: {q.jawabanBenar.toUpperCase()})</span>
                                </>
                              )}
                            </div>
                            <p className="text-slate-600 leading-relaxed">{q.penjelasan}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Action Buttons Kuis */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-wrap items-center justify-between gap-3">
              <div className="text-xs text-slate-500 font-medium">
                {Object.keys(quizAnswers).length} dari {MATERI_KELAS_VII_SEM_1_BAB_3.kuisInteraktif.length} soal telah dijawab.
              </div>

              <div className="flex items-center gap-2">
                {!showQuizResults ? (
                  <button
                    disabled={Object.keys(quizAnswers).length === 0}
                    onClick={() => setShowQuizResults(true)}
                    className="px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 disabled:opacity-50 text-white font-bold text-xs sm:text-sm transition-all cursor-pointer shadow-md"
                  >
                    Periksa Jawaban Kuis
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setShowQuizResults(false);
                      setQuizAnswers({});
                    }}
                    className="px-4 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Ulangi Kuis</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
