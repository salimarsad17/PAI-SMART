import React, { useState } from 'react';
import {
  BookOpen,
  CheckCircle2,
  HelpCircle,
  Sparkles,
  Volume2,
  VolumeX,
  Share2,
  Award,
  ChevronRight,
  ShieldCheck,
  Search,
  Users,
  Compass,
  Building2,
  AlertTriangle,
  Lightbulb,
  Clock,
  Landmark,
  Scroll,
  TrendingDown,
  GraduationCap,
  Scale
} from 'lucide-react';
import {
  MATERI_KELAS8_SEM1_BAB5,
  TokohAbbasiyah,
  FaktorKemunduranItem,
  HikmahAbbasiyahItem
} from '../../data/materiKelas8Sem1Bab5Data';
import { useToast } from '../common/Toast';

interface Props {
  onAskAI?: (prompt: string) => void;
}

type TabType =
  | 'pengantar'
  | 'sejarah-berdiri'
  | 'tokoh-penting'
  | 'puncak-kejayaan'
  | 'faktor-kemunduran'
  | 'hikmah-refleksi'
  | 'evaluasi-hots';

export const BukuPaiKelas8Sem1Bab5Detail: React.FC<Props> = ({ onAskAI }) => {
  const materi = MATERI_KELAS8_SEM1_BAB5;
  const { showToast } = useToast();

  const [activeTab, setActiveTab] = useState<TabType>('sejarah-berdiri');
  const [searchKeyword, setSearchKeyword] = useState<string>('');
  const [selectedTokohKategori, setSelectedTokohKategori] = useState<string>('Semua');
  const [selectedTokoh, setSelectedTokoh] = useState<TokohAbbasiyah>(materi.tokohPenting[3]); // Harun ar-Rasyid default
  const [selectedFaseId, setSelectedFaseId] = useState<string>('fase-1');
  const [activePilarId, setActivePilarId] = useState<string>('pilar-1');
  const [kemunduranTab, setKemunduranTab] = useState<'semua' | 'internal' | 'eksternal' | 'tragedi-1258'>('semua');

  // Evaluasi HOTS State
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});
  const [showQuizResults, setShowQuizResults] = useState<boolean>(false);

  // Lembar Muhasabah 8 Dimensi State
  const [checkedMuhasabah, setCheckedMuhasabah] = useState<{ [key: number]: boolean }>({
    0: true,
    1: true,
    3: true,
    7: true
  });

  // Audio Speech Synthesis state
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);

  const handleSpeakText = (text: string) => {
    if (!('speechSynthesis' in window)) {
      showToast('Perangkat tidak mendukung Text-to-Speech.', 'error');
      return;
    }

    if (isPlayingAudio) {
      window.speechSynthesis.cancel();
      setIsPlayingAudio(false);
      showToast('Audio dihentikan.', 'info');
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'id-ID';
    utterance.rate = 0.95;
    utterance.pitch = 1.0;

    utterance.onstart = () => {
      setIsPlayingAudio(true);
      showToast('Membacakan rangkuman sejarah Daulah Abbasiyah...', 'info');
    };

    utterance.onend = () => {
      setIsPlayingAudio(false);
    };

    utterance.onerror = () => {
      setIsPlayingAudio(false);
    };

    window.speechSynthesis.speak(utterance);
  };

  const handleAnswerSelect = (nomor: number, pilihanIndex: number) => {
    if (showQuizResults) return;
    setSelectedAnswers(prev => ({
      ...prev,
      [nomor]: pilihanIndex
    }));
  };

  const calculateScore = () => {
    let correct = 0;
    materi.hikmahDanRefleksi.kuisHots.forEach(q => {
      if (selectedAnswers[q.nomor] === q.kunciJawaban) {
        correct++;
      }
    });
    return {
      correct,
      total: materi.hikmahDanRefleksi.kuisHots.length,
      percentage: Math.round((correct / materi.hikmahDanRefleksi.kuisHots.length) * 100)
    };
  };

  const handleToggleMuhasabah = (idx: number) => {
    setCheckedMuhasabah(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  const muhasabahScore = Object.values(checkedMuhasabah).filter(Boolean).length;

  const filteredTokoh = materi.tokohPenting.filter(t => {
    const matchCategory = selectedTokohKategori === 'Semua' || t.kategori === selectedTokohKategori;
    const matchSearch =
      searchKeyword.trim() === '' ||
      t.namaPopuler.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      t.namaLengkap.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      t.peranDanKontribusi.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      t.karyaMonumental.some(k => k.toLowerCase().includes(searchKeyword.toLowerCase()));
    return matchCategory && matchSearch;
  });

  return (
    <div id="buku-pai-k8-bab5-root" className="space-y-6 text-slate-100 animate-fadeIn">
      {/* ==================== HERO HEADER ==================== */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-950 via-slate-900 to-amber-950 p-6 sm:p-8 border border-amber-500/30 shadow-2xl">
        <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 -mb-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 text-xs font-black tracking-wider uppercase rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                {materi.kelas} • {materi.semester}
              </span>
              <span className="px-3 py-1 text-xs font-bold rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                {materi.elemenCp}
              </span>
              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                <Landmark className="w-3.5 h-3.5" /> Bab {materi.babNumber}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() =>
                  handleSpeakText(
                    `Bab 5: ${materi.judulBab}. ${materi.subJudul}. ${materi.pengantar.apersepsi}`
                  )
                }
                className={`p-2.5 rounded-xl border transition-all cursor-pointer flex items-center gap-2 text-xs font-bold ${
                  isPlayingAudio
                    ? 'bg-rose-500 text-white border-rose-400 animate-pulse'
                    : 'bg-slate-800/80 hover:bg-slate-700 text-amber-300 border-amber-500/30'
                }`}
                title={isPlayingAudio ? 'Hentikan Narasi' : 'Dengarkan Narasi Suara'}
              >
                {isPlayingAudio ? (
                  <>
                    <VolumeX className="w-4 h-4" />
                    <span className="hidden sm:inline">Hentikan Audio</span>
                  </>
                ) : (
                  <>
                    <Volume2 className="w-4 h-4" />
                    <span className="hidden sm:inline">Dengarkan Narasi</span>
                  </>
                )}
              </button>

              <button
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: materi.judulBab,
                      text: materi.subJudul,
                      url: window.location.href
                    });
                  } else {
                    navigator.clipboard.writeText(window.location.href);
                    showToast('Tautan materi berhasil disalin!', 'success');
                  }
                }}
                className="p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-all cursor-pointer"
                title="Bagikan Materi"
              >
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-tight mb-3">
            {materi.judulBab}
          </h1>

          <p className="text-sm sm:text-base text-amber-100/90 max-w-4xl leading-relaxed mb-6 font-medium">
            {materi.subJudul}
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-amber-500/20 text-xs">
            <div className="p-3 rounded-2xl bg-slate-900/60 border border-slate-800">
              <span className="text-slate-400 block mb-1">🏛️ Masa Pemerintahan</span>
              <span className="font-black text-amber-300 text-sm">750 – 1258 M (508 Th)</span>
            </div>
            <div className="p-3 rounded-2xl bg-slate-900/60 border border-slate-800">
              <span className="text-slate-400 block mb-1">📍 Ibu Kota Peradaban</span>
              <span className="font-black text-indigo-300 text-sm">Baghdad (Kota Bundar)</span>
            </div>
            <div className="p-3 rounded-2xl bg-slate-900/60 border border-slate-800">
              <span className="text-slate-400 block mb-1">📚 Institusi Legendaris</span>
              <span className="font-black text-emerald-300 text-sm">Baitul Hikmah (House of Wisdom)</span>
            </div>
            <div className="p-3 rounded-2xl bg-slate-900/60 border border-slate-800">
              <span className="text-slate-400 block mb-1">👑 Khalifah Puncak Emas</span>
              <span className="font-black text-rose-300 text-sm">Harun ar-Rasyid & Al-Ma'mun</span>
            </div>
          </div>
        </div>
      </div>

      {/* ==================== NAVIGATION TABS ==================== */}
      <div className="sticky top-16 z-20 bg-slate-900/95 backdrop-blur-md p-2 rounded-2xl border border-slate-800 shadow-xl overflow-x-auto">
        <div className="flex items-center gap-1.5 min-w-max">
          <button
            onClick={() => setActiveTab('sejarah-berdiri')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'sejarah-berdiri'
                ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/30'
                : 'text-slate-300 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <Landmark className="w-4 h-4" />
            <span>1. Sejarah Berdirinya</span>
          </button>

          <button
            onClick={() => setActiveTab('tokoh-penting')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'tokoh-penting'
                ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/30'
                : 'text-slate-300 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>2. Tokoh-Tokoh Penting</span>
          </button>

          <button
            onClick={() => setActiveTab('puncak-kejayaan')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'puncak-kejayaan'
                ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/30'
                : 'text-slate-300 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>3. Puncak Kejayaan (The Golden Age)</span>
          </button>

          <button
            onClick={() => setActiveTab('faktor-kemunduran')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'faktor-kemunduran'
                ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/30'
                : 'text-slate-300 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <TrendingDown className="w-4 h-4" />
            <span>4. Faktor Kemunduran</span>
          </button>

          <button
            onClick={() => setActiveTab('hikmah-refleksi')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'hikmah-refleksi'
                ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/30'
                : 'text-slate-300 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <Lightbulb className="w-4 h-4" />
            <span>5. Hikmah Sejarah & Refleksi</span>
          </button>

          <button
            onClick={() => setActiveTab('evaluasi-hots')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'evaluasi-hots'
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                : 'text-indigo-300 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            <span>Kuis HOTS (5 Soal)</span>
          </button>
        </div>
      </div>

      {/* ==================== TAB 1: SEJARAH BERDIRINYA DAULAH ABBASIYAH ==================== */}
      {activeTab === 'sejarah-berdiri' && (
        <div className="space-y-6">
          {/* Latar Belakang & Gerakan Bawah Tanah */}
          <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-black">
                1.1
              </div>
              <div>
                <h2 className="text-xl font-black text-white">
                  Latar Belakang Berdirinya Daulah Abbasiyah (750 M / 132 H)
                </h2>
                <p className="text-xs text-slate-400">
                  Transisi kepemimpinan Islam paska keruntuhan Daulah Umayyah di Damaskus
                </p>
              </div>
            </div>

            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              {materi.sejarahBerdiri.latarBelakang}
            </p>

            {/* Semboyan Gerakan */}
            <div className="p-4 rounded-2xl bg-amber-950/40 border border-amber-500/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <span className="text-xs font-bold text-amber-300 uppercase tracking-wider block">
                  🏴 Semboyan Resmi Revolusi Abbasiyah
                </span>
                <p className="text-lg font-black text-amber-200 mt-0.5">
                  "{materi.sejarahBerdiri.gerakanBawahTanah.semboyanGerakan}"
                </p>
              </div>
              <span className="text-xs text-amber-300/80 bg-amber-900/60 px-3 py-1.5 rounded-xl border border-amber-500/30">
                Simbol: Panji Hitam (Ar-Rayah as-Sauda')
              </span>
            </div>

            {/* 3 Pusat Gerakan Bawah Tanah */}
            <div>
              <h3 className="text-sm font-black uppercase tracking-wider text-slate-300 mb-3 flex items-center gap-2">
                <Compass className="w-4 h-4 text-amber-400" /> Tiga Kota Pusat Strategi Gerakan Bawah Tanah
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {materi.sejarahBerdiri.gerakanBawahTanah.tigaPusatGerakan.map((pusat, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 hover:border-amber-500/50 transition-all group"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-6 h-6 rounded-lg bg-amber-500/20 text-amber-300 text-xs font-black flex items-center justify-center">
                        {idx + 1}
                      </span>
                      <h4 className="font-black text-white text-sm group-hover:text-amber-300 transition-colors">
                        {pusat.kota}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">{pusat.peran}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tokoh Inisiator Revolusi */}
            <div className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700/60">
              <span className="text-xs font-bold text-slate-400 block mb-2">
                Tokoh-Tokoh Inisiator & Pelopor Revolusi Abbasiyah:
              </span>
              <div className="flex flex-wrap gap-2">
                {materi.sejarahBerdiri.gerakanBawahTanah.tokohInisiator.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-xl bg-slate-700/80 text-xs font-medium text-slate-200 border border-slate-600"
                  >
                    ✓ {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Pembangunan Kota Bundar Baghdad */}
          <div className="p-6 rounded-3xl bg-gradient-to-br from-slate-900 to-indigo-950/60 border border-indigo-500/30 shadow-xl space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-black">
                1.2
              </div>
              <div>
                <h2 className="text-xl font-black text-white">
                  Pembangunan Kota Bundar Baghdad: Madīnat as-Salām (762 M)
                </h2>
                <p className="text-xs text-indigo-300">
                  Karya arsitektural legendaris Khalifah Abu Ja'far Al-Mansur
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
              <div className="space-y-3">
                <div className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700/80">
                  <span className="text-xs text-slate-400 block font-semibold">Nama Resmi Kota:</span>
                  <span className="text-base font-black text-amber-300">
                    {materi.sejarahBerdiri.pembangunanKotaBaghdad.namaAsli}
                  </span>
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700/80">
                  <span className="text-xs text-slate-400 block font-semibold">Tahun Pendirian & Pendiri:</span>
                  <span className="text-sm font-bold text-white">
                    {materi.sejarahBerdiri.pembangunanKotaBaghdad.tahunDidirikan} oleh{' '}
                    {materi.sejarahBerdiri.pembangunanKotaBaghdad.khalifahPembangun}
                  </span>
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700/80">
                  <span className="text-xs text-slate-400 block font-semibold">Posisi Geografis Strategis:</span>
                  <p className="text-xs text-slate-300 leading-relaxed mt-1">
                    {materi.sejarahBerdiri.pembangunanKotaBaghdad.posisiGeografis}
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-indigo-950/40 border border-indigo-500/30 space-y-3 flex flex-col justify-between">
                <div>
                  <h4 className="font-black text-indigo-200 text-sm flex items-center gap-2 mb-2">
                    <Building2 className="w-4 h-4 text-indigo-400" /> Konsep Tata Kota Bundar (Round City)
                  </h4>
                  <p className="text-xs text-slate-200 leading-relaxed">
                    {materi.sejarahBerdiri.pembangunanKotaBaghdad.konsepTataKota}
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/80 border border-indigo-400/30 text-xs text-indigo-300">
                  💡 <strong>Filosofi Arsitektur:</strong> Menempatkan Masjid Jami' dan Istana berkubah hijau persis di titik poros tengah kota menandakan bahwa kepemimpinan umat harus berpusat pada nilai ketuhanan dan pengabdian kepada rakyat.
                </div>
              </div>
            </div>
          </div>

          {/* 5 Periodesasi Pemerintahan Abbasiyah */}
          <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl space-y-4">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-black">
                  1.3
                </div>
                <div>
                  <h2 className="text-xl font-black text-white">
                    Lima Periode Dinamika Kekuasaan Daulah Abbasiyah (750 – 1258 M)
                  </h2>
                  <p className="text-xs text-slate-400">
                    Klik tiap periode untuk menelaah karakteristik, khalifah utama, dan peristiwa penting
                  </p>
                </div>
              </div>
            </div>

            {/* Period Selector Tabs */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 pt-2">
              {materi.sejarahBerdiri.periodesasiPemerintahan.map((fase, idx) => (
                <button
                  key={fase.id}
                  onClick={() => setSelectedFaseId(fase.id)}
                  className={`p-3 rounded-2xl text-left border transition-all cursor-pointer ${
                    selectedFaseId === fase.id
                      ? 'bg-amber-500/20 border-amber-500 text-amber-200 shadow-md'
                      : 'bg-slate-800/60 border-slate-700/60 hover:bg-slate-800 text-slate-300'
                  }`}
                >
                  <span className="text-[11px] font-black uppercase tracking-wider block opacity-75">
                    Periode {idx + 1}
                  </span>
                  <span className="text-xs font-bold block truncate mt-0.5">{fase.rentangTahun}</span>
                </button>
              ))}
            </div>

            {/* Selected Period Details */}
            {(() => {
              const currentFase =
                materi.sejarahBerdiri.periodesasiPemerintahan.find(f => f.id === selectedFaseId) ||
                materi.sejarahBerdiri.periodesasiPemerintahan[0];
              return (
                <div className="p-5 rounded-2xl bg-slate-800/90 border border-slate-700 space-y-4 animate-fadeIn">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-700/80 pb-3">
                    <h3 className="font-black text-amber-300 text-base">{currentFase.periode}</h3>
                    <span className="px-3 py-1 bg-amber-500/20 text-amber-300 text-xs font-bold rounded-full border border-amber-500/30">
                      {currentFase.rentangTahun}
                    </span>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed">{currentFase.karakteristik}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                    <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-700/60">
                      <span className="text-xs font-bold text-slate-400 block mb-2">
                        👑 Khalifah-Khalifah Utama:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {currentFase.khalifahUtama.map((k, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 bg-slate-800 text-xs text-slate-200 rounded-lg border border-slate-700"
                          >
                            {k}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-700/60">
                      <span className="text-xs font-bold text-slate-400 block mb-2">
                        ⚔️ Peristiwa Kunci Bersejarah:
                      </span>
                      <ul className="space-y-1.5 text-xs text-slate-300">
                        {currentFase.peristiwaKunci.map((p, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <span className="text-amber-400 font-bold">•</span>
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      )}

      {/* ==================== TAB 2: TOKOH-TOKOH PENTING DAULAH ABBASIYAH ==================== */}
      {activeTab === 'tokoh-penting' && (
        <div className="space-y-6">
          <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-black text-white flex items-center gap-2">
                  <Users className="w-5 h-5 text-amber-400" /> Galeri Tokoh Penting Daulah Abbasiyah
                </h2>
                <p className="text-xs text-slate-400">
                  Mengenal para khalifah pendiri, penguasa era keemasan, ilmuwan sains, dan ulama agung
                </p>
              </div>

              {/* Search Bar */}
              <div className="relative w-full sm:w-64">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Cari tokoh atau karya..."
                  value={searchKeyword}
                  onChange={e => setSearchKeyword(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white placeholder-slate-400 focus:outline-none focus:border-amber-500"
                />
              </div>
            </div>

            {/* Category Filter Chips */}
            <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800">
              {[
                'Semua',
                'Pendiri & Peletak Dasar',
                'Khalifah Puncak Kejayaan',
                'Ilmuwan Sains & Medis',
                'Filsuf & Matematikawan',
                'Ulama Fikih & Hadis'
              ].map((kat, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedTokohKategori(kat)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    selectedTokohKategori === kat
                      ? 'bg-amber-500 text-slate-950 font-black'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  {kat}
                </button>
              ))}
            </div>

            {/* 2-Column: Tokoh List & Selected Profile Detail */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-2">
              {/* Left Column: Grid List */}
              <div className="lg:col-span-5 space-y-3 max-h-[600px] overflow-y-auto pr-1">
                {filteredTokoh.map(tokoh => {
                  const isSelected = selectedTokoh.id === tokoh.id;
                  return (
                    <div
                      key={tokoh.id}
                      onClick={() => setSelectedTokoh(tokoh)}
                      className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-amber-500/20 border-amber-500 shadow-md'
                          : 'bg-slate-800/70 border-slate-700 hover:bg-slate-800 hover:border-slate-600'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h4 className="font-black text-white text-sm">{tokoh.namaPopuler}</h4>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-900 text-amber-300 border border-amber-500/30">
                          {tokoh.kategori}
                        </span>
                      </div>
                      <p className="text-xs text-amber-200/90 font-medium line-clamp-1">
                        {tokoh.gelarAtauJulukan}
                      </p>
                      <p className="text-[11px] text-slate-400 mt-1 line-clamp-2">
                        {tokoh.peranDanKontribusi}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Right Column: Active Profile Detailed Inspector */}
              <div className="lg:col-span-7 p-6 rounded-3xl bg-gradient-to-br from-slate-900 to-amber-950/40 border border-amber-500/30 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-700/80 pb-4">
                  <div>
                    <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                      {selectedTokoh.kategori} • {selectedTokoh.masaHidup}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
                      {selectedTokoh.namaPopuler}
                    </h3>
                    <p className="text-xs text-slate-300 font-medium mt-0.5 italic">
                      Nama Lengkap: {selectedTokoh.namaLengkap}
                    </p>
                  </div>
                  <button
                    onClick={() =>
                      onAskAI?.(
                        `Jelaskan lebih mendalam biografi, karya utama, dan teladan karakter dari ${selectedTokoh.namaPopuler} pada masa Daulah Abbasiyah!`
                      )
                    }
                    className="px-3 py-1.5 rounded-xl bg-amber-500 text-slate-950 font-black text-xs hover:bg-amber-400 transition-all flex items-center gap-1.5 cursor-pointer shadow-md"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Tanya AI tentang Tokoh Ini</span>
                  </button>
                </div>

                <div className="p-3.5 rounded-2xl bg-amber-950/40 border border-amber-500/30">
                  <span className="text-xs font-bold text-amber-300 block mb-1">
                    🌟 Gelar & Julukan Kehormatan:
                  </span>
                  <p className="text-sm font-black text-amber-100">{selectedTokoh.gelarAtauJulukan}</p>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Peran, Kontribusi, & Pengaruh Bersejarah:
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed bg-slate-800/80 p-4 rounded-2xl border border-slate-700">
                    {selectedTokoh.peranDanKontribusi}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    📖 Karya Monumental / Inovasi Utama:
                  </h4>
                  <div className="space-y-2">
                    {selectedTokoh.karyaMonumental.map((k, i) => (
                      <div
                        key={i}
                        className="p-2.5 rounded-xl bg-slate-800/60 border border-slate-700 text-xs font-medium text-amber-200 flex items-center gap-2"
                      >
                        <span className="w-5 h-5 rounded-md bg-amber-500/20 text-amber-300 flex items-center justify-center text-[10px] font-bold">
                          {i + 1}
                        </span>
                        <span>{k}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/40">
                  <h4 className="text-xs font-bold text-emerald-300 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Nilai Keteladanan Moral bagi Pelajar:
                  </h4>
                  <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed font-medium">
                    {selectedTokoh.keteladananMoral}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==================== TAB 3: PUNCAK KEJAYAAN (THE GOLDEN AGE) ==================== */}
      {activeTab === 'puncak-kejayaan' && (
        <div className="space-y-6">
          {/* Baitul Hikmah Spotlight */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-indigo-950 via-slate-900 to-amber-950 border border-amber-500/40 shadow-2xl space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-black text-xl">
                  🏛️
                </div>
                <div>
                  <h2 className="text-2xl font-black text-white">
                    Baitul Hikmah: Rumah Kearifan & Pusat Peradaban Dunia
                  </h2>
                  <p className="text-xs text-amber-200">
                    Lembaga riset, akademi penerjemahan, dan perpustakaan publik terbesar abad pertengahan
                  </p>
                </div>
              </div>
              <span className="px-3.5 py-1.5 bg-amber-500 text-slate-950 text-xs font-black rounded-xl shadow-md">
                The Golden Age of Islam
              </span>
            </div>

            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              {materi.puncakKejayaan.lembagaBaitulHikmah.sejarahSingkat}
            </p>

            {/* Golden Reward Box */}
            <div className="p-4 sm:p-5 rounded-2xl bg-amber-500/10 border border-amber-500/40 flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-amber-500/20 text-amber-300 shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h4 className="font-black text-amber-300 text-sm sm:text-base">
                  Apresiasi Spektakuler: Emas Murni Seberat Timbangan Buku!
                </h4>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  {materi.puncakKejayaan.lembagaBaitulHikmah.penghargaanBuku}
                </p>
              </div>
            </div>

            {/* 4 Fungsi Utama Baitul Hikmah */}
            <div>
              <h3 className="text-sm font-black uppercase tracking-wider text-slate-300 mb-3 flex items-center gap-2">
                <Scroll className="w-4 h-4 text-amber-400" /> Empat Fungsi Pokok Kompleks Baitul Hikmah:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {materi.puncakKejayaan.lembagaBaitulHikmah.fungsiUtama.map((f, idx) => (
                  <div key={idx} className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700/80">
                    <p className="text-xs text-slate-200 leading-relaxed font-medium">✓ {f}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Gerakan Penerjemahan Akbar */}
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-700 space-y-3">
              <h4 className="font-black text-white text-sm flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-indigo-400" /> Tiga Tahap Gerakan Tadwin & Penerjemahan
              </h4>
              <div className="space-y-2">
                {materi.puncakKejayaan.gerakanTadwinDanPenerjemahan.tigaTahapPenerjemahan.map(
                  (tahap, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-slate-800/60 border border-slate-700 text-xs text-slate-300 flex items-start gap-2"
                    >
                      <span className="w-5 h-5 rounded-md bg-indigo-500/20 text-indigo-300 font-bold flex items-center justify-center shrink-0">
                        {idx + 1}
                      </span>
                      <span>{tahap}</span>
                    </div>
                  )
                )}
              </div>
              <div className="pt-2 flex flex-wrap items-center gap-2 text-xs text-slate-400">
                <span className="font-bold text-amber-300">Bahasa Sumber Naskah Kuno:</span>
                {materi.puncakKejayaan.gerakanTadwinDanPenerjemahan.bahasaSumber.map((b, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-0.5 rounded-lg bg-slate-800 text-slate-300 border border-slate-700"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* 4 Pilar Kemajuan Multisektoral */}
          <div className="space-y-4">
            <h3 className="text-lg font-black text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-400" /> Empat Pilar Kejayaan Multisektoral Daulah Abbasiyah
            </h3>

            {/* Pilar Selector Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {materi.puncakKejayaan.pilarKejayaan.map(pilar => (
                <button
                  key={pilar.id}
                  onClick={() => setActivePilarId(pilar.id)}
                  className={`p-4 rounded-2xl text-left border transition-all cursor-pointer ${
                    activePilarId === pilar.id
                      ? 'bg-amber-500/20 border-amber-500 shadow-lg'
                      : 'bg-slate-900 border-slate-800 hover:bg-slate-800'
                  }`}
                >
                  <span className="text-2xl block mb-2">{pilar.ikon}</span>
                  <span className="text-xs font-black text-white block">{pilar.judul}</span>
                  <span className="text-[11px] text-slate-400 block truncate mt-0.5">{pilar.bidang}</span>
                </button>
              ))}
            </div>

            {/* Active Pilar Inspector */}
            {(() => {
              const currentPilar =
                materi.puncakKejayaan.pilarKejayaan.find(p => p.id === activePilarId) ||
                materi.puncakKejayaan.pilarKejayaan[0];
              return (
                <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl space-y-4 animate-fadeIn">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{currentPilar.ikon}</span>
                      <div>
                        <h4 className="text-lg font-black text-white">{currentPilar.judul}</h4>
                        <span className="text-xs text-amber-400 font-bold">{currentPilar.bidang}</span>
                      </div>
                    </div>
                    <span className="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded-xl border border-slate-700">
                      🏛️ {currentPilar.institusiKunci}
                    </span>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed">{currentPilar.deskripsi}</p>

                  <div>
                    <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Pencapaian & Inovasi Utama:
                    </h5>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {currentPilar.pencapaianUtama.map((c, i) => (
                        <div
                          key={i}
                          className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700/80 text-xs text-slate-200 leading-relaxed font-medium"
                        >
                          ✓ {c}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                    <div className="p-4 rounded-2xl bg-amber-950/30 border border-amber-500/30">
                      <span className="text-xs font-bold text-amber-300 block mb-1">
                        💡 Fakta Menarik Sejarah:
                      </span>
                      <p className="text-xs text-slate-200 leading-relaxed">{currentPilar.faktaMenarik}</p>
                    </div>

                    <div className="p-4 rounded-2xl bg-indigo-950/30 border border-indigo-500/30">
                      <span className="text-xs font-bold text-indigo-300 block mb-1">
                        🌍 Dampak bagi Peradaban Dunia Modern:
                      </span>
                      <p className="text-xs text-slate-200 leading-relaxed">
                        {currentPilar.dampakBagiPeradabanDunia}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      )}

      {/* ==================== TAB 4: FAKTOR KEMUNDURAN DAULAH ABBASIYAH ==================== */}
      {activeTab === 'faktor-kemunduran' && (
        <div className="space-y-6">
          {/* Pengantar Kemunduran */}
          <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-rose-500/20 text-rose-400 flex items-center justify-center font-black">
                <TrendingDown className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl font-black text-white">
                  Sunnatullah Peradaban: Analisis Kritis Kemunduran Daulah Abbasiyah
                </h2>
                <p className="text-xs text-slate-400">
                  Perpaduan rapuhnya faktor internal istana dan dahsyatnya invasi militer eksternal
                </p>
              </div>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {materi.faktorKemunduran.pengantarKeruntuhan}
            </p>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800">
              <button
                onClick={() => setKemunduranTab('semua')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  kemunduranTab === 'semua'
                    ? 'bg-rose-500 text-white font-black'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                Semua Faktor
              </button>
              <button
                onClick={() => setKemunduranTab('internal')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  kemunduranTab === 'internal'
                    ? 'bg-rose-500 text-white font-black'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                Faktor Internal (4 Aspek)
              </button>
              <button
                onClick={() => setKemunduranTab('eksternal')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  kemunduranTab === 'eksternal'
                    ? 'bg-rose-500 text-white font-black'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                Faktor Eksternal (Perang Salib & Mongol)
              </button>
              <button
                onClick={() => setKemunduranTab('tragedi-1258')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  kemunduranTab === 'tragedi-1258'
                    ? 'bg-amber-500 text-slate-950 font-black'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                ⚔️ Tragedi Baghdad 1258 M
              </button>
            </div>
          </div>

          {/* Tragedi Jatuhnya Baghdad 1258 M Spotlight */}
          {(kemunduranTab === 'semua' || kemunduranTab === 'tragedi-1258') && (
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-rose-950 via-slate-900 to-slate-950 border border-rose-500/50 shadow-2xl space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-rose-500/20 text-rose-400 flex items-center justify-center font-black text-2xl">
                    🩸
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-white">
                      Tragedi Jatuhnya Baghdad 1258 M (656 H)
                    </h3>
                    <p className="text-xs text-rose-200">
                      Hulagu Khan membumihanguskan Baghdad dan membakar khazanah intelektual Baitul Hikmah
                    </p>
                  </div>
                </div>
                <span className="px-3.5 py-1.5 bg-rose-600 text-white text-xs font-black rounded-xl">
                  Bencana Intelektual Terbesar Dunia
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800">
                  <span className="text-slate-400 block mb-1">Panglima Invasi Mongol:</span>
                  <span className="font-black text-white text-sm">
                    {materi.faktorKemunduran.tragediJatuhnyaBaghdad1258.pemimpinMongol}
                  </span>
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800">
                  <span className="text-slate-400 block mb-1">Khalifah Terakhir Abbasiyah di Baghdad:</span>
                  <span className="font-black text-white text-sm">
                    {materi.faktorKemunduran.tragediJatuhnyaBaghdad1258.khalifahTerakhir}
                  </span>
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800">
                  <span className="text-slate-400 block mb-1">Tahun Kejatuhan Total:</span>
                  <span className="font-black text-rose-400 text-sm">
                    {materi.faktorKemunduran.tragediJatuhnyaBaghdad1258.tahun}
                  </span>
                </div>
              </div>

              <p className="text-slate-200 text-sm leading-relaxed">
                {materi.faktorKemunduran.tragediJatuhnyaBaghdad1258.deskripsiTragedi}
              </p>

              <div className="p-4 rounded-2xl bg-rose-950/60 border border-rose-500/40">
                <h4 className="font-black text-rose-300 text-sm mb-1 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-rose-400" /> Sungai Tigris Menghitam oleh Tinta & Memerah oleh Darah
                </h4>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                  {materi.faktorKemunduran.tragediJatuhnyaBaghdad1258.dampakKehilanganIntelektual}
                </p>
              </div>
            </div>
          )}

          {/* Faktor Internal Cards */}
          {(kemunduranTab === 'semua' || kemunduranTab === 'internal') && (
            <div className="space-y-4">
              <h3 className="text-lg font-black text-white flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-amber-400" /> Empat Faktor Internal Kemunduran
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {materi.faktorKemunduran.faktorInternal.map(item => (
                  <div
                    key={item.id}
                    className="p-5 rounded-3xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all space-y-3"
                  >
                    <h4 className="font-black text-amber-300 text-base">{item.judul}</h4>
                    <p className="text-xs text-slate-300 leading-relaxed font-medium">
                      <strong>Penyebab:</strong> {item.penyebabUtama}
                    </p>
                    <p className="text-xs text-slate-400 leading-relaxed">{item.analisisHistoris}</p>
                    <div className="pt-2 border-t border-slate-800">
                      <span className="text-[11px] font-bold text-slate-400 block mb-1">
                        Dampak bagi Daulah:
                      </span>
                      <ul className="space-y-1 text-xs text-slate-300">
                        {item.akibatBagiDaulah.map((akibat, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <span className="text-rose-400 font-bold">•</span>
                            <span>{akibat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Faktor Eksternal Cards */}
          {(kemunduranTab === 'semua' || kemunduranTab === 'eksternal') && (
            <div className="space-y-4">
              <h3 className="text-lg font-black text-white flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-rose-400" /> Dua Faktor Eksternal Kemunduran
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {materi.faktorKemunduran.faktorEksternal.map(item => (
                  <div
                    key={item.id}
                    className="p-5 rounded-3xl bg-slate-900 border border-slate-800 hover:border-rose-500/40 transition-all space-y-3"
                  >
                    <h4 className="font-black text-rose-300 text-base">{item.judul}</h4>
                    <p className="text-xs text-slate-300 leading-relaxed font-medium">
                      <strong>Penyebab:</strong> {item.penyebabUtama}
                    </p>
                    <p className="text-xs text-slate-400 leading-relaxed">{item.analisisHistoris}</p>
                    <div className="pt-2 border-t border-slate-800">
                      <span className="text-[11px] font-bold text-slate-400 block mb-1">
                        Dampak bagi Daulah:
                      </span>
                      <ul className="space-y-1 text-xs text-slate-300">
                        {item.akibatBagiDaulah.map((akibat, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <span className="text-rose-400 font-bold">•</span>
                            <span>{akibat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* ==================== TAB 5: HIKMAH SEJARAH & REFLEKSI PELAJAR ==================== */}
      {activeTab === 'hikmah-refleksi' && (
        <div className="space-y-6">
          {/* Header Hikmah */}
          <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl space-y-3">
            <h2 className="text-xl font-black text-white flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-amber-400" /> Hikmah Sejarah Daulah Abbasiyah bagi Generasi Muda
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Mempelajari sejarah peradaban Islam bukanlah nostalgia semu, melainkan sarana mengambil <em>ibrah</em> (pelajaran mendalam) untuk membangun karakter, etos kerja ilmiah, dan integritas pelajar muslim di era modern.
            </p>
          </div>

          {/* 4 Pilar Hikmah dengan Dalil Al-Qur'an/Hadis */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {materi.hikmahDanRefleksi.daftarHikmah.map((h, idx) => (
              <div
                key={h.id}
                className="p-6 rounded-3xl bg-slate-900 border border-slate-800 hover:border-amber-500/40 transition-all space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                      {h.dimensi}
                    </span>
                    <span className="text-xs font-black text-slate-400">#0{idx + 1}</span>
                  </div>

                  <h3 className="text-base font-black text-white">{h.judul}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{h.deskripsi}</p>

                  {/* Dalil Box */}
                  <div className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-1.5">
                    <span className="text-[11px] font-bold text-amber-300 block">{h.dalilTerkait.surah}</span>
                    <p className="text-right font-serif text-sm text-amber-100 font-bold leading-relaxed">
                      {h.dalilTerkait.teksArab}
                    </p>
                    <p className="text-[11px] text-slate-300 italic">"{h.dalilTerkait.terjemahan}"</p>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800">
                  <span className="text-[11px] font-bold text-slate-400 block mb-1.5">
                    Implementasi Karakter Pelajar:
                  </span>
                  <ul className="space-y-1 text-xs text-slate-200">
                    {h.implementasiPelajar.map((imp, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-emerald-400 font-bold">✓</span>
                        <span>{imp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* 3 Skenario Studi Kasus Kontekstual Remaja */}
          <div className="space-y-4">
            <h3 className="text-lg font-black text-white flex items-center gap-2">
              <Scale className="w-5 h-5 text-indigo-400" /> Tiga Studi Kasus Refleksi Moral Remaja Masa Kini
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {materi.hikmahDanRefleksi.studiKasus.map(kasus => (
                <div
                  key={kasus.id}
                  className="p-5 rounded-3xl bg-slate-900 border border-slate-800 space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <h4 className="font-black text-indigo-300 text-sm">{kasus.judul}</h4>
                    <p className="text-xs text-slate-300 leading-relaxed bg-slate-800/60 p-3 rounded-xl border border-slate-700/60">
                      {kasus.skenarioDilema}
                    </p>
                    <div className="p-2.5 rounded-xl bg-amber-950/30 border border-amber-500/30 text-xs text-amber-200 font-medium">
                      ❓ <strong>Pertanyaan Pemantik:</strong> {kasus.pertanyaanPemantik}
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-indigo-950/40 border border-indigo-500/30 text-xs text-indigo-200">
                    💡 <strong>Solusi Hikmah:</strong> {kasus.analisisHikmah}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Lembar Muhasabah 8 Dimensi Sikap Pelajar */}
          <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
              <div>
                <h3 className="text-lg font-black text-white flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" /> Lembar Muhasabah Karakter 8 Dimensi
                </h3>
                <p className="text-xs text-slate-400">
                  Evaluasi kejujuran diri dalam menerapkan etos literasi, sains, dan integritas Abbasiyah
                </p>
              </div>
              <div className="flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-2xl border border-slate-700">
                <span className="text-xs text-slate-400">Skor Penerapan:</span>
                <span className="text-sm font-black text-emerald-400">
                  {muhasabahScore} / {materi.hikmahDanRefleksi.lembarMuhasabah8Dimensi.length} Dimensi
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {materi.hikmahDanRefleksi.lembarMuhasabah8Dimensi.map((dim, idx) => {
                const isChecked = !!checkedMuhasabah[idx];
                return (
                  <div
                    key={idx}
                    onClick={() => handleToggleMuhasabah(idx)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-start gap-3 ${
                      isChecked
                        ? 'bg-emerald-950/30 border-emerald-500/50 text-slate-100'
                        : 'bg-slate-800/60 border-slate-700 text-slate-400 hover:bg-slate-800'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => {}}
                      className="mt-1 rounded text-emerald-500 focus:ring-emerald-400"
                    />
                    <div className="space-y-0.5">
                      <h4
                        className={`text-xs font-black ${
                          isChecked ? 'text-emerald-300' : 'text-slate-300'
                        }`}
                      >
                        {dim.aspek}
                      </h4>
                      <p className="text-xs leading-relaxed">{dim.indikator}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* ==================== TAB 6: EVALUASI HOTS (5 BUTIR SOAL) ==================== */}
      {activeTab === 'evaluasi-hots' && (
        <div className="space-y-6">
          <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h2 className="text-xl font-black text-white flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-indigo-400" /> Kuis Evaluasi HOTS: Sejarah Daulah Abbasiyah
                </h2>
                <p className="text-xs text-slate-400">
                  Uji pemahaman penalaran tingkat tinggi (analisis kasus sejarah, nilai keteladanan, & ibrah)
                </p>
              </div>

              {showQuizResults && (
                <div className="flex items-center gap-3 bg-indigo-950 px-4 py-2 rounded-2xl border border-indigo-500/40">
                  <span className="text-xs text-indigo-200">Skor Kamu:</span>
                  <span className="text-lg font-black text-amber-300">
                    {calculateScore().percentage}% ({calculateScore().correct}/{calculateScore().total} Benar)
                  </span>
                </div>
              )}
            </div>

            {/* Questions List */}
            <div className="space-y-6 pt-2">
              {materi.hikmahDanRefleksi.kuisHots.map((q, idx) => {
                const userAnswer = selectedAnswers[q.nomor];
                const isAnswered = userAnswer !== undefined;
                const isCorrect = userAnswer === q.kunciJawaban;

                return (
                  <div
                    key={q.id}
                    className="p-5 sm:p-6 rounded-3xl bg-slate-800/80 border border-slate-700/80 space-y-4"
                  >
                    {/* Stimulus Kasus */}
                    <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-1.5">
                      <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider block">
                        Stimulus Soal No. {q.nomor}
                      </span>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                        "{q.stimulusKasus}"
                      </p>
                    </div>

                    {/* Pertanyaan */}
                    <h4 className="font-black text-white text-sm sm:text-base">{q.pertanyaan}</h4>

                    {/* Pilihan Ganda */}
                    <div className="space-y-2">
                      {q.pilihan.map((pil, pIdx) => {
                        const isChosen = userAnswer === pIdx;
                        let optionStyle =
                          'bg-slate-900/60 border-slate-700 text-slate-300 hover:bg-slate-800';

                        if (showQuizResults) {
                          if (pIdx === q.kunciJawaban) {
                            optionStyle = 'bg-emerald-950/80 border-emerald-500 text-emerald-200 font-bold';
                          } else if (isChosen && !isCorrect) {
                            optionStyle = 'bg-rose-950/80 border-rose-500 text-rose-200';
                          }
                        } else if (isChosen) {
                          optionStyle = 'bg-indigo-600/30 border-indigo-500 text-white font-bold';
                        }

                        return (
                          <button
                            key={pIdx}
                            disabled={showQuizResults}
                            onClick={() => handleAnswerSelect(q.nomor, pIdx)}
                            className={`w-full text-left p-3.5 rounded-2xl border transition-all text-xs sm:text-sm flex items-center gap-3 cursor-pointer ${optionStyle}`}
                          >
                            <span className="w-6 h-6 rounded-lg bg-slate-800 text-slate-300 font-bold flex items-center justify-center shrink-0 text-xs">
                              {String.fromCharCode(65 + pIdx)}
                            </span>
                            <span className="leading-relaxed">{pil}</span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Pembahasan Box (muncul saat hasil ditampilkan) */}
                    {showQuizResults && (
                      <div
                        className={`p-4 rounded-2xl border text-xs sm:text-sm leading-relaxed ${
                          isCorrect
                            ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-100'
                            : 'bg-rose-950/40 border-rose-500/40 text-rose-100'
                        }`}
                      >
                        <span className="font-black block mb-1">
                          {isCorrect ? '✓ Jawaban Anda Benar!' : '✗ Jawaban Belum Tepat'} (Kunci: Pilihan{' '}
                          {String.fromCharCode(65 + q.kunciJawaban)})
                        </span>
                        <p className="opacity-90">{q.pembahasan}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Submit / Reset Actions */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-800">
              <span className="text-xs text-slate-400">
                Terjawab: {Object.keys(selectedAnswers).length} dari{' '}
                {materi.hikmahDanRefleksi.kuisHots.length} Soal
              </span>

              <div className="flex items-center gap-2">
                {!showQuizResults ? (
                  <button
                    onClick={() => {
                      if (
                        Object.keys(selectedAnswers).length <
                        materi.hikmahDanRefleksi.kuisHots.length
                      ) {
                        showToast('Harap jawab seluruh pertanyaan kuis terlebih dahulu!', 'error');
                        return;
                      }
                      setShowQuizResults(true);
                      showToast('Kuis berhasil dinilai!', 'success');
                    }}
                    className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-black text-xs sm:text-sm transition-all shadow-lg cursor-pointer flex items-center gap-2"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Periksa Jawaban Saya</span>
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setShowQuizResults(false);
                      setSelectedAnswers({});
                      showToast('Kuis direset. Silakan coba kembali!', 'info');
                    }}
                    className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs sm:text-sm transition-all border border-slate-700 cursor-pointer"
                  >
                    Ulangi Kuis
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==================== FOOTER CALLOUT ==================== */}
      <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-amber-500/20 text-amber-300">
            <HelpCircle className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-black text-white text-sm">Butuh Penjelasan Tambahan tentang Daulah Abbasiyah?</h4>
            <p className="text-xs text-slate-400">
              Tanyakan langsung ke asisten cerdas Masterku AI seputar Baitul Hikmah, para khalifah, sains, atau hikmah sejarah.
            </p>
          </div>
        </div>
        <button
          onClick={() =>
            onAskAI?.(
              'Halo Masterku AI, jelaskan lebih mendalam tentang perbandingan era keemasan Daulah Abbasiyah di bawah Harun ar-Rasyid dan faktor keruntuhan kota Baghdad 1258 M!'
            )
          }
          className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs transition-all shadow-lg cursor-pointer shrink-0 flex items-center gap-1.5"
        >
          <Sparkles className="w-4 h-4" />
          <span>Tanya Masterku AI</span>
        </button>
      </div>
    </div>
  );
};
