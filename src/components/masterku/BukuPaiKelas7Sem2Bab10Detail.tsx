import React, { useState } from 'react';
import {
  Castle,
  BookOpen,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Check,
  Lightbulb,
  AlertTriangle,
  Bot,
  Copy,
  Layers,
  Users,
  Building,
  Brain,
  Stethoscope,
  Compass,
  Leaf,
  Clock,
  ArrowRight,
  TrendingDown,
  Award,
  Crown
} from 'lucide-react';
import {
  MATERI_KELAS_7_SEM_2_BAB_10,
  TokohPemimpinAndalusia,
  BidangKontribusiAndalusia,
  FaktorKemunduranAndalusia,
  HikmahSejarahAndalusia
} from '../../data/materiKelas7Sem2Bab10Data';
import { useToast } from '../common/Toast';

interface Props {
  onAskAI: (prompt: string) => void;
}

type Bab10SubTab = 'sejarah-berdiri' | 'masa-keemasan' | 'kontribusi-dunia' | 'faktor-kemunduran' | 'hikmah-sejarah' | 'kuis';

export const BukuPaiKelas7Sem2Bab10Detail: React.FC<Props> = ({ onAskAI }) => {
  const { showToast } = useToast();
  const [activeTab, setActiveTab] = useState<Bab10SubTab>('sejarah-berdiri');

  // Selected Khalifah in Tab 2
  const [selectedKhalifahId, setSelectedKhalifahId] = useState<string>('khalifah-abdurrahman-3');

  // Selected Kontribusi in Tab 3
  const [selectedKontribusiId, setSelectedKontribusiId] = useState<string>('kontribusi-kedokteran');

  // Kuis HOTS State
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});
  const [showKuisResult, setShowKuisResult] = useState(false);

  // Refleksi Karakter Pelajar Checklist
  const [refleksiChecked, setRefleksiChecked] = useState<Record<number, boolean>>({});

  // Copy helper
  const handleCopyText = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    showToast(`${label} berhasil disalin ke clipboard`, 'success');
  };

  // Kuis calculation
  const calculateScore = () => {
    let correct = 0;
    MATERI_KELAS_7_SEM_2_BAB_10.kuisHots.forEach((q) => {
      if (userAnswers[q.id] === q.kunciJawaban) {
        correct++;
      }
    });
    return Math.round((correct / MATERI_KELAS_7_SEM_2_BAB_10.kuisHots.length) * 100);
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

  const currentKhalifah =
    MATERI_KELAS_7_SEM_2_BAB_10.masaKeemasan.khalifahGemilang.find((k) => k.id === selectedKhalifahId) ||
    MATERI_KELAS_7_SEM_2_BAB_10.masaKeemasan.khalifahGemilang[0];

  const currentKontribusi =
    MATERI_KELAS_7_SEM_2_BAB_10.kontribusiPeradaban.find((c) => c.id === selectedKontribusiId) ||
    MATERI_KELAS_7_SEM_2_BAB_10.kontribusiPeradaban[0];

  const getKontribusiIcon = (id: string) => {
    switch (id) {
      case 'kontribusi-kedokteran':
        return <Stethoscope className="w-5 h-5 text-emerald-600" />;
      case 'kontribusi-filsafat':
        return <Brain className="w-5 h-5 text-indigo-600" />;
      case 'kontribusi-astronomi-teknologi':
        return <Compass className="w-5 h-5 text-amber-600" />;
      case 'kontribusi-agronomi-lingkungan':
        return <Leaf className="w-5 h-5 text-teal-600" />;
      case 'kontribusi-arsitektur-seni':
        return <Building className="w-5 h-5 text-purple-600" />;
      default:
        return <BookOpen className="w-5 h-5 text-teal-600" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Banner Bab 10 */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber-900 via-stone-800 to-emerald-950 text-white p-6 sm:p-8 shadow-xl">
        <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute right-8 top-8 opacity-15 hidden md:block pointer-events-none">
          <Castle className="w-48 h-48 text-amber-300" />
        </div>

        <div className="relative z-10 space-y-4 max-w-3xl">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-lg bg-amber-400 text-amber-950 font-black text-xs uppercase tracking-wider shadow-sm">
              Bab X • Semester 2
            </span>
            <span className="px-3 py-1 rounded-lg bg-amber-500/30 text-amber-200 border border-amber-400/40 text-xs font-semibold">
              Elemen: {MATERI_KELAS_7_SEM_2_BAB_10.elemenCp} ({MATERI_KELAS_7_SEM_2_BAB_10.fase})
            </span>
            <span className="px-3 py-1 rounded-lg bg-emerald-400/20 text-emerald-200 text-xs font-medium">
              Kurikulum Merdeka 2026
            </span>
          </div>

          <div className="space-y-1">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              {MATERI_KELAS_7_SEM_2_BAB_10.judulBab}
            </h1>
            <p className="text-sm sm:text-base text-amber-100 font-medium leading-relaxed">
              {MATERI_KELAS_7_SEM_2_BAB_10.subJudul}
            </p>
          </div>

          <p className="text-xs sm:text-sm text-amber-200/90 leading-relaxed pt-1">
            {MATERI_KELAS_7_SEM_2_BAB_10.pengantar.apersepsi}
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            <button
              onClick={() =>
                onAskAI(
                  'Jelaskan sejarah berdirinya Daulah Bani Umayyah di Andalusia: latar belakang pendaratan Thariq bin Ziyad 711 M, pidatonya di Gibraltar, dan perjuangan Abdurrahman Ad-Dakhil mendirikan keamiran Cordoba 756 M.'
                )
              }
              className="px-3 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 text-white text-xs font-bold transition-all flex items-center gap-1.5 border border-white/20 cursor-pointer shadow-xs"
            >
              <Bot className="w-3.5 h-3.5 text-amber-300" />
              <span>Tanya AI: Sejarah Berdiri & Tokoh</span>
            </button>
            <button
              onClick={() =>
                onAskAI(
                  'Bagaimanakah masa keemasan peradaban Islam di Cordoba pada masa Abdurrahman III dan Al-Hakam II? Jelaskan julukan Permata Dunia, perpustakaan 400.000 buku, dan toleransi beragama!'
                )
              }
              className="px-3 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 text-white text-xs font-bold transition-all flex items-center gap-1.5 border border-white/20 cursor-pointer shadow-xs"
            >
              <Bot className="w-3.5 h-3.5 text-emerald-300" />
              <span>Tanya AI: Masa Keemasan Cordoba</span>
            </button>
            <button
              onClick={() =>
                onAskAI(
                  'Jelaskan kontribusi ilmuwan Andalusia bagi dunia modern: Az-Zahrawi (bedah medis), Abbas bin Firnas (penerbangan), Ibnu Rusyd (filsafat), serta faktor kemunduran dan hikmahnya!'
                )
              }
              className="px-3 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 text-white text-xs font-bold transition-all flex items-center gap-1.5 border border-white/20 cursor-pointer shadow-xs"
            >
              <Bot className="w-3.5 h-3.5 text-cyan-300" />
              <span>Tanya AI: Kontribusi Sains & Hikmah</span>
            </button>
          </div>
        </div>
      </div>

      {/* Sub-Tabs Navigation */}
      <div className="bg-white p-2 rounded-2xl border border-slate-200 shadow-sm flex flex-wrap gap-2">
        <button
          onClick={() => setActiveTab('sejarah-berdiri')}
          className={`flex-1 min-w-[140px] px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
            activeTab === 'sejarah-berdiri'
              ? 'bg-amber-600 text-white shadow-md'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          <Clock className="w-4 h-4" />
          <span>1. Sejarah Berdiri</span>
        </button>

        <button
          onClick={() => setActiveTab('masa-keemasan')}
          className={`flex-1 min-w-[140px] px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
            activeTab === 'masa-keemasan'
              ? 'bg-amber-600 text-white shadow-md'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          <Crown className="w-4 h-4" />
          <span>2. Masa Keemasan</span>
        </button>

        <button
          onClick={() => setActiveTab('kontribusi-dunia')}
          className={`flex-1 min-w-[140px] px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
            activeTab === 'kontribusi-dunia'
              ? 'bg-amber-600 text-white shadow-md'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          <Building className="w-4 h-4" />
          <span>3. Kontribusi Peradaban</span>
        </button>

        <button
          onClick={() => setActiveTab('faktor-kemunduran')}
          className={`flex-1 min-w-[140px] px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
            activeTab === 'faktor-kemunduran'
              ? 'bg-amber-600 text-white shadow-md'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          <TrendingDown className="w-4 h-4" />
          <span>4. Faktor Kemunduran</span>
        </button>

        <button
          onClick={() => setActiveTab('hikmah-sejarah')}
          className={`flex-1 min-w-[130px] px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
            activeTab === 'hikmah-sejarah'
              ? 'bg-amber-600 text-white shadow-md'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          <Sparkles className="w-4 h-4" />
          <span>5. Hikmah Sejarah</span>
        </button>

        <button
          onClick={() => setActiveTab('kuis')}
          className={`flex-1 min-w-[120px] px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
            activeTab === 'kuis'
              ? 'bg-amber-600 text-white shadow-md'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          <CheckCircle2 className="w-4 h-4" />
          <span>6. Kuis HOTS (5 Soal)</span>
        </button>
      </div>

      {/* =========================================================================
          TAB 1: SEJARAH BERDIRINYA BANI UMAYYAH ANDALUSIA
         ========================================================================= */}
      {activeTab === 'sejarah-berdiri' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-800 bg-amber-50 px-2.5 py-1 rounded-md">
                  Awal Mula Penaklukan 711 M
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-1">
                  1. Sejarah Berdirinya Daulah Bani Umayyah Periode Andalusia
                </h3>
              </div>
              <button
                onClick={() =>
                  onAskAI(
                    'Ceritakan secara detail latar belakang Semenanjung Iberia sebelum kedatangan Islam dan detik-detik penaklukan 711 M oleh Thariq bin Ziyad!'
                  )
                }
                className="px-3 py-1.5 rounded-lg bg-amber-50 hover:bg-amber-100 text-amber-900 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <Bot className="w-4 h-4 text-amber-700" />
                <span>Konsultasi AI</span>
              </button>
            </div>

            {/* Latar Belakang Pra-Islam */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-600" />
                <span>Kondisi Semenanjung Iberia Sebelum Kedatangan Islam:</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {MATERI_KELAS_7_SEM_2_BAB_10.sejarahBerdirinya.latarBelakang}
              </p>
            </div>

            {/* Kronologi Penaklukan */}
            <div className="space-y-3">
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-600" />
                <span>Kronologi Penaklukan Semenanjung Iberia (710 - 756 M):</span>
              </h4>

              <div className="space-y-3">
                {MATERI_KELAS_7_SEM_2_BAB_10.sejarahBerdirinya.kronologiPenaklukan711M.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl border border-slate-200 hover:border-amber-300 bg-gradient-to-r from-white to-amber-50/20 transition-all space-y-1.5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 rounded-md bg-amber-100 text-amber-950 font-black text-xs">
                        {item.tahun}
                      </span>
                      <span className="text-[11px] font-bold text-slate-400">
                        Langkah {idx + 1}
                      </span>
                    </div>
                    <h5 className="font-bold text-slate-900 text-sm">{item.peristiwa}</h5>
                    <p className="text-xs text-slate-700 leading-relaxed">{item.rincian}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Khutbah Legendaris Thariq bin Ziyad */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-amber-50 to-stone-50 border border-amber-200 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-wider text-amber-900 bg-amber-200/60 px-2 py-0.5 rounded">
                  Pidato Bersejarah di Jabal Thariq (Gibraltar)
                </span>
                <button
                  onClick={() =>
                    handleCopyText(
                      MATERI_KELAS_7_SEM_2_BAB_10.sejarahBerdirinya.kisahThariqBinZiyad.pidatoLegendaris,
                      'Pidato Thariq bin Ziyad'
                    )
                  }
                  className="text-amber-800 hover:text-amber-950 p-1 cursor-pointer"
                  title="Salin Pidato"
                >
                  <Copy className="w-4 h-4" />
                </button>
              </div>

              <blockquote className="text-xs sm:text-sm text-amber-950 font-serif italic leading-relaxed border-l-4 border-amber-600 pl-4 py-1">
                "{MATERI_KELAS_7_SEM_2_BAB_10.sejarahBerdirinya.kisahThariqBinZiyad.pidatoLegendaris}"
              </blockquote>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2 text-xs">
                <div className="p-3 bg-white rounded-lg border border-amber-200 text-slate-700 space-y-1">
                  <strong>💡 Makna Filosofis:</strong>
                  <p>{MATERI_KELAS_7_SEM_2_BAB_10.sejarahBerdirinya.kisahThariqBinZiyad.maknaFilosofis}</p>
                </div>
                <div className="p-3 bg-white rounded-lg border border-amber-200 text-slate-700 space-y-1">
                  <strong>🛡️ Strategi Humanis Pembebasan:</strong>
                  <p>{MATERI_KELAS_7_SEM_2_BAB_10.sejarahBerdirinya.kisahThariqBinZiyad.strategiMiliter}</p>
                </div>
              </div>
            </div>

            {/* Kisah Abdurrahman Ad-Dakhil: Sang Elang Quraisy */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50/40 border border-emerald-200 space-y-3">
              <div className="flex items-center gap-2.5">
                <Crown className="w-5 h-5 text-emerald-700" />
                <h4 className="font-bold text-emerald-950 text-base">
                  Abdurrahman Ad-Dakhil: Sang Elang Quraisy (Shaqr Quraisy)
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                <strong>Kisah Perjuangan:</strong>{' '}
                {MATERI_KELAS_7_SEM_2_BAB_10.sejarahBerdirinya.kisahAbdurrahmanAdDakhil.perjalananHijrah}
              </p>
              <div className="p-3 bg-white rounded-xl border border-emerald-200 text-xs text-emerald-950 font-medium">
                ⭐ <strong>Pencapaian Bersejarah:</strong>{' '}
                {MATERI_KELAS_7_SEM_2_BAB_10.sejarahBerdirinya.kisahAbdurrahmanAdDakhil.pencapaianMendirikanKeamiran}
              </div>
            </div>

            {/* 6 Fase Kepemimpinan Islam di Andalusia */}
            <div className="space-y-3 pt-2">
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <Layers className="w-4 h-4 text-amber-600" />
                <span>6 Babak Periodisasi Sejarah Islam di Andalusia (711 - 1492 M):</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {MATERI_KELAS_7_SEM_2_BAB_10.sejarahBerdirinya.faseKepemimpinan.map((fase, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-amber-300 transition-all space-y-1.5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="w-6 h-6 rounded-full bg-amber-700 text-white font-black text-xs flex items-center justify-center">
                        {idx + 1}
                      </span>
                      <span className="text-[11px] font-bold text-slate-500">{fase.periode}</span>
                    </div>
                    <h5 className="font-bold text-slate-900 text-xs sm:text-sm">{fase.fase}</h5>
                    <p className="text-xs text-slate-600 leading-relaxed">{fase.karakteristik}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          TAB 2: MASA KEEMASAN PERADABAN ISLAM CORDOBA
         ========================================================================= */}
      {activeTab === 'masa-keemasan' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-800 bg-amber-50 px-2.5 py-1 rounded-md">
                  Abad ke-10 Masehi
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-1">
                  2. Masa Keemasan: Cordoba sebagai "Permata Dunia" (The Ornament of the World)
                </h3>
              </div>
              <button
                onClick={() =>
                  onAskAI(
                    'Jelaskan mengapa kota Cordoba pada abad ke-10 M dijuluki Permata Dunia dan ceritakan kemajuan tata kota, perpustakaan, dan universitasnya!'
                  )
                }
                className="px-3 py-1.5 rounded-lg bg-amber-50 hover:bg-amber-100 text-amber-900 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <Bot className="w-4 h-4 text-amber-700" />
                <span>Konsultasi AI</span>
              </button>
            </div>

            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {MATERI_KELAS_7_SEM_2_BAB_10.masaKeemasan.ikhtisar}
            </p>

            {/* 3 Pilar Kejayaan Kota Cordoba */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50/40 border border-amber-200 space-y-2">
                <div className="flex items-center gap-2">
                  <Building className="w-5 h-5 text-amber-700" />
                  <h4 className="font-bold text-amber-950 text-sm">Tata Kota Modern</h4>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  {MATERI_KELAS_7_SEM_2_BAB_10.masaKeemasan.puncakKejayaanCordoba.populasiDanKemajuanKota}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50/40 border border-emerald-200 space-y-2">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-emerald-700" />
                  <h4 className="font-bold text-emerald-950 text-sm">Pusat Buku & Universitas</h4>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  {MATERI_KELAS_7_SEM_2_BAB_10.masaKeemasan.puncakKejayaanCordoba.universitasDanPerpustakaan}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50/40 border border-blue-200 space-y-2">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-blue-700" />
                  <h4 className="font-bold text-blue-950 text-sm">La Convivencia (Toleransi)</h4>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  {MATERI_KELAS_7_SEM_2_BAB_10.masaKeemasan.puncakKejayaanCordoba.toleransiTigaAgama}
                </p>
              </div>
            </div>

            {/* Profil Khalifah Gemilang */}
            <div className="space-y-4 pt-2">
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <Crown className="w-4 h-4 text-amber-600" />
                <span>3 Penguasa Paling Berpengaruh dalam Kemajuan Andalusia:</span>
              </h4>

              <div className="flex flex-wrap gap-2">
                {MATERI_KELAS_7_SEM_2_BAB_10.masaKeemasan.khalifahGemilang.map((k) => {
                  const isSelected = selectedKhalifahId === k.id;
                  return (
                    <button
                      key={k.id}
                      onClick={() => setSelectedKhalifahId(k.id)}
                      className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                        isSelected
                          ? 'bg-amber-600 text-white shadow-md'
                          : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                      }`}
                    >
                      <Crown className="w-4 h-4" />
                      <span>{k.name}</span>
                    </button>
                  );
                })}
              </div>

              {/* Active Khalifah Details */}
              <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50/60 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3">
                  <div>
                    <span className="text-[11px] font-arabic text-amber-900 font-bold bg-amber-100 px-2 py-0.5 rounded">
                      {currentKhalifah.arabicName}
                    </span>
                    <h4 className="text-lg font-bold text-slate-900 mt-1">{currentKhalifah.name}</h4>
                    <p className="text-xs text-amber-800 font-semibold">{currentKhalifah.gelar} ({currentKhalifah.periodMasehi})</p>
                  </div>
                  <button
                    onClick={() =>
                      onAskAI(
                        `Ceritakan lebih mendalam tentang kepemimpinan ${currentKhalifah.name} (${currentKhalifah.gelar}) di Andalusia dan apa saja warisan monumentalnya!`
                      )
                    }
                    className="px-3 py-1.5 rounded-lg bg-amber-600 text-white text-xs font-bold hover:bg-amber-700 transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <Bot className="w-3.5 h-3.5" />
                    <span>Tanya AI tentang Tokoh</span>
                  </button>
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-bold text-slate-800">Biografi & Karakter:</span>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {currentKhalifah.biografiRingkas}
                  </p>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-bold text-slate-800">Kebijakan & Warisan Monumental:</span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                    {currentKhalifah.kebijakanMonumen.map((kebijakan, idx) => (
                      <li key={idx} className="flex items-start gap-2 bg-white p-2.5 rounded-lg border border-slate-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-600 shrink-0 mt-1.5" />
                        <span>{kebijakan}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-3 bg-amber-100/70 rounded-xl border border-amber-200/80 text-xs text-amber-950 italic">
                  💬 <strong>Kutipan Reflektif:</strong> {currentKhalifah.kutipanSejarah}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          TAB 3: KONTRIBUSI PERADABAN BAGI DUNIA
         ========================================================================= */}
      {activeTab === 'kontribusi-dunia' && (
        <div className="space-y-6">
          {/* Sub-selector 5 Bidang Kontribusi */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
            {MATERI_KELAS_7_SEM_2_BAB_10.kontribusiPeradaban.map((item) => {
              const isSelected = selectedKontribusiId === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedKontribusiId(item.id)}
                  className={`p-3 rounded-2xl border text-left transition-all cursor-pointer space-y-1.5 ${
                    isSelected
                      ? 'bg-gradient-to-br from-amber-700 to-stone-800 text-white border-amber-800 shadow-md transform -translate-y-0.5'
                      : 'bg-white hover:bg-slate-50 text-slate-800 border-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div
                      className={`p-1.5 rounded-xl ${
                        isSelected ? 'bg-white/20 text-white' : 'bg-amber-50'
                      }`}
                    >
                      {getKontribusiIcon(item.id)}
                    </div>
                  </div>
                  <div>
                    <h5 className="font-bold text-xs sm:text-sm line-clamp-1">{item.bidang}</h5>
                    <p
                      className={`text-[10px] line-clamp-1 ${
                        isSelected ? 'text-amber-200' : 'text-slate-500'
                      }`}
                    >
                      {item.tokohCendekiawan.length} Ilmuwan Utama
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Kontribusi Detail */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-amber-100 text-amber-800">
                  {getKontribusiIcon(currentKontribusi.id)}
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-amber-800 bg-amber-50 px-2 py-0.5 rounded">
                    Sumbangsih Sains & Kebudayaan
                  </span>
                  <h3 className="text-xl font-bold text-slate-900">
                    Bidang {currentKontribusi.bidang}
                  </h3>
                  <p className="text-xs text-slate-500">{currentKontribusi.deskripsi}</p>
                </div>
              </div>
              <button
                onClick={() =>
                  onAskAI(
                    `Jelaskan secara mendalam kontribusi ilmuwan Islam Andalusia dalam bidang ${currentKontribusi.bidang} serta bagaimana penemuannya memicu kemajuan ilmu pengetahuan dunia modern!`
                  )
                }
                className="px-3.5 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-xs"
              >
                <Bot className="w-4 h-4 text-amber-200" />
                <span>Tanya AI tentang Bidang Ini</span>
              </button>
            </div>

            {/* Ilmuwan & Penemuannya */}
            <div className="space-y-4">
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <Brain className="w-4 h-4 text-amber-600" />
                <span>Tokoh Cendekiawan Utama & Penemuan Monumentalnya:</span>
              </h4>

              <div className="space-y-3">
                {currentKontribusi.tokohCendekiawan.map((tokoh, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl border border-slate-200 hover:border-amber-300 bg-slate-50/50 hover:bg-white transition-all space-y-2"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-1">
                      <h5 className="font-bold text-slate-900 text-sm">
                        {tokoh.nama}{' '}
                        <span className="text-xs text-slate-500 font-normal">
                          (Dikenal di Barat: <em>{tokoh.namaBarat}</em>)
                        </span>
                      </h5>
                      <span className="text-[10px] font-bold text-amber-900 bg-amber-100 px-2 py-0.5 rounded">
                        Kitab: {tokoh.karyaUtama}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {tokoh.penemuanDanJasa}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Monumen & Warisan Sejarah */}
            <div className="space-y-3">
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <Building className="w-4 h-4 text-amber-600" />
                <span>Monumen & Warisan Fisik:</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentKontribusi.monumenDanWarisan.map((monumen, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-amber-50/60 border border-amber-200/80 space-y-1"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-xs text-amber-950">{monumen.nama}</span>
                      <span className="text-[10px] text-amber-800 bg-amber-200/60 px-1.5 py-0.2 rounded font-medium">
                        {monumen.lokasi}
                      </span>
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed">{monumen.deskripsi}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Pengaruh Bagi Dunia Modern */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 flex items-start gap-3">
              <div className="p-2 rounded-lg bg-emerald-600 text-white shrink-0 mt-0.5">
                <Lightbulb className="w-4 h-4" />
              </div>
              <div className="space-y-0.5">
                <h5 className="font-bold text-emerald-950 text-xs sm:text-sm">
                  Pengaruh Nyata Bagi Kehidupan Dunia Modern:
                </h5>
                <p className="text-xs text-emerald-900 leading-relaxed">
                  {currentKontribusi.pengaruhBagiDuniaModern}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          TAB 4: FAKTOR KEMUNDURAN DAN KEHANCURAN
         ========================================================================= */}
      {activeTab === 'faktor-kemunduran' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-red-700 bg-red-50 px-2.5 py-1 rounded-md">
                  Analisis Kritis Sejarah
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-1">
                  4. Faktor-Faktor Kemunduran dan Keruntuhan Islam di Andalusia
                </h3>
              </div>
              <button
                onClick={() =>
                  onAskAI(
                    'Jelaskan faktor internal dan eksternal penyebab runtuhnya kekuasaan Islam di Spanyol (Mulukut Thawaif, hedonisme istana, Reconquista, hingga jatuhnya Granada 1492 M)!'
                  )
                }
                className="px-3 py-1.5 rounded-lg bg-red-50 hover:bg-red-100 text-red-900 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <Bot className="w-4 h-4 text-red-600" />
                <span>Konsultasi AI</span>
              </button>
            </div>

            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Kehancuran peradaban Islam di Semenanjung Iberia setelah 781 tahun berkuasa bukanlah peristiwa yang terjadi dalam semalam. Para sejarawan menyimpulkan adanya 5 faktor utama (kombinasi kerapuhan internal umat dan tekanan kekuatan eksternal):
            </p>

            {/* List 5 Faktor */}
            <div className="space-y-4">
              {MATERI_KELAS_7_SEM_2_BAB_10.faktorKemunduran.map((item) => (
                <div
                  key={item.nomor}
                  className="p-5 rounded-xl border border-slate-200 hover:border-red-300 bg-slate-50/50 hover:bg-white transition-all space-y-2.5"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-7 h-7 rounded-lg bg-red-600 text-white font-black text-xs flex items-center justify-center">
                        {item.nomor}
                      </span>
                      <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                        {item.faktor}
                      </h4>
                    </div>
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                        item.kategori === 'Internal'
                          ? 'bg-amber-100 text-amber-900'
                          : 'bg-red-100 text-red-900'
                      }`}
                    >
                      Faktor {item.kategori}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pl-9">
                    {item.penjelasanKasus}
                  </p>

                  <div className="ml-9 grid grid-cols-1 md:grid-cols-2 gap-2.5 pt-1 text-xs">
                    <div className="p-3 bg-red-50 rounded-lg border border-red-100 text-red-950 space-y-0.5">
                      <strong>💥 Dampak Fatal Sejarah:</strong>
                      <p>{item.dampakSejarah}</p>
                    </div>
                    <div className="p-3 bg-amber-50 rounded-lg border border-amber-100 text-amber-950 space-y-0.5">
                      <strong>🌱 Ibrah & Pelajaran Pelajar:</strong>
                      <p>{item.ibrahPelajar}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Catatan Akhir 1492 M */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-stone-900 to-amber-950 text-white space-y-2">
              <span className="px-2 py-0.5 rounded bg-amber-500 text-stone-950 font-black text-[10px] uppercase">
                2 Januari 1492 M: Jatuhnya Granada
              </span>
              <p className="text-xs sm:text-sm text-amber-100 leading-relaxed">
                Ketika Sultan Abu Abdillah menyerahkan kunci benteng Alhambra kepada Raja Ferdinand dan Ratu Isabella, berakhirlah eksistensi kekuasaan Islam di Spanyol. Ribuan naskah perpustakaan dibakar di alun-alun kota, dan jutaan Muslim terpaksa memilih antara pindah agama, dibantai, atau terusir ke Afrika Utara.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          TAB 5: HIKMAH SEJARAH BANI UMAYYAH ANDALUSIA
         ========================================================================= */}
      {activeTab === 'hikmah-sejarah' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-800 bg-amber-50 px-2.5 py-1 rounded-md">
                  Ibrah & Pembentukan Karakter
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-1">
                  5. Hikmah Sejarah Bani Umayyah Periode Andalusia bagi Pelajar Muslim
                </h3>
              </div>
              <button
                onClick={() =>
                  onAskAI(
                    'Apa saja 5 hikmah agung sejarah Daulah Bani Umayyah Andalusia dan bagaimana cara merefleksikannya dalam kehidupan pelajar masa kini?'
                  )
                }
                className="px-3 py-1.5 rounded-lg bg-amber-50 hover:bg-amber-100 text-amber-900 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <Bot className="w-4 h-4 text-amber-700" />
                <span>Konsultasi AI</span>
              </button>
            </div>

            {/* 5 Hikmah Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {MATERI_KELAS_7_SEM_2_BAB_10.hikmahSejarah.map((hikmah) => (
                <div
                  key={hikmah.nomor}
                  className="p-5 rounded-xl border border-slate-200 hover:border-amber-300 bg-slate-50/50 hover:bg-white transition-all space-y-3"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-xl bg-amber-700 text-white font-black text-sm flex items-center justify-center shrink-0 shadow-sm">
                      {hikmah.nomor}
                    </span>
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                      {hikmah.judul}
                    </h4>
                  </div>

                  <p className="text-xs text-slate-700 leading-relaxed">{hikmah.maknaPelajaran}</p>

                  {/* Dalil Naqli Rujukan */}
                  <div className="p-3 bg-amber-50/80 rounded-xl border border-amber-200 text-xs space-y-1">
                    <span className="font-bold text-amber-900">
                      📖 {hikmah.dalilRujukan.surah}:
                    </span>
                    <p className="font-arabic text-sm text-right text-slate-800 leading-loose">
                      {hikmah.dalilRujukan.arabic}
                    </p>
                    <p className="text-slate-600 italic">"{hikmah.dalilRujukan.arti}"</p>
                  </div>

                  <div className="space-y-1.5 pt-1">
                    <div className="p-2.5 rounded-lg bg-teal-50/80 text-[11px] text-teal-950 font-medium">
                      🚀 <strong>Relevansi Era Digital:</strong> {hikmah.relevansiZamanNow}
                    </div>
                    <div className="p-2.5 rounded-lg bg-emerald-50/80 text-[11px] text-emerald-950 font-medium">
                      🎯 <strong>Refleksi Karakter:</strong> {hikmah.refleksiKarakter}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Lembar Refleksi Mandiri */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-amber-50 via-stone-50 to-orange-50 border border-amber-200 space-y-3">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-amber-800" />
                <h4 className="font-bold text-amber-950 text-sm sm:text-base">
                  Lembar Tekad Pelajar: Menghidupkan Kembali Semangat Keilmuan Andalusia
                </h4>
              </div>
              <p className="text-xs text-slate-600">
                Beri tanda centang pada komitmen yang siap kamu terapkan dalam kehidupan belajarmu:
              </p>

              <div className="space-y-2">
                {[
                  'Saya berkomitmen membaca minimal 1 buku bermanfaat setiap minggu dan mengurangi konsumsi scrolling medsos nirmanfaat.',
                  'Saya meneladani ketekunan Az-Zahrawi dengan sungguh-sungguh mempelajari sains, matematika, dan teknologi demi maslahat umat.',
                  'Saya menjaga persatuan di sekolah dan lingkungan pergaulan, menolak perilaku adu domba, tawuran, atau saling merendahkan teman.',
                  'Saya bersikap toleran dan beradab santun kepada teman-teman non-muslim sebagaimana keindahan peradaban Cordoba.'
                ].map((item, index) => {
                  const isChecked = !!refleksiChecked[index];
                  return (
                    <div
                      key={index}
                      onClick={() =>
                        setRefleksiChecked((prev) => ({
                          ...prev,
                          [index]: !prev[index]
                        }))
                      }
                      className={`p-3 rounded-xl border transition-all cursor-pointer flex items-center gap-3 ${
                        isChecked
                          ? 'bg-white border-amber-500 shadow-xs'
                          : 'bg-white/60 hover:bg-white border-slate-200'
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded-md flex items-center justify-center border transition-all ${
                          isChecked
                            ? 'bg-amber-600 border-amber-600 text-white'
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
          TAB 6: KUIS HOTS SEJARAH ANDALUSIA
         ========================================================================= */}
      {activeTab === 'kuis' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-800 bg-amber-50 px-2.5 py-1 rounded-md">
                  Evaluasi Mandiri HOTS
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-1">
                  Uji Pemahaman Sejarah Andalusia (5 Soal Analisis Sejarah)
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
                  <span className="text-xs font-bold uppercase tracking-wider">Hasil Evaluasi Bab 10:</span>
                  <h4 className="text-2xl font-black">
                    Skor Akhir Kamu: {calculateScore()} / 100
                  </h4>
                  <p className="text-xs font-medium">
                    {calculateScore() >= 80
                      ? '🎉 Mumtaz! Pemahaman sejarah dan analisis ibrah peradaban Andalusia kamu sangat luar biasa!'
                      : calculateScore() >= 60
                      ? '👍 Bagus! Tingkatkan telaah biografi para cendekiawan dan faktor keruntuhan Mulukut Thawaif.'
                      : '📚 Ayo telaah kembali peristiwa-peristiwa penting pada tab Sejarah Berdiri dan Kontribusi Peradaban!'}
                  </p>
                </div>
                <button
                  onClick={() =>
                    onAskAI(
                      `Saya telah menyelesaikan kuis HOTS Bab 10 Sejarah Bani Umayyah Andalusia dengan skor ${calculateScore()}/100. Tolong jelaskan lebih detail hikmah terpenting dari runtuhnya kerajaan Islam di Spanyol!`
                    )
                  }
                  className="px-4 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs flex items-center gap-2 shadow-sm whitespace-nowrap cursor-pointer"
                >
                  <Bot className="w-4 h-4 text-amber-200" />
                  <span>Minta Bimbingan AI</span>
                </button>
              </div>
            )}

            {/* List of Questions */}
            <div className="space-y-6">
              {MATERI_KELAS_7_SEM_2_BAB_10.kuisHots.map((soal) => {
                const selectedOption = userAnswers[soal.id];
                const isAnswered = selectedOption !== undefined;
                const isCorrect = isAnswered && selectedOption === soal.kunciJawaban;

                return (
                  <div
                    key={soal.id}
                    className="p-5 rounded-2xl border border-slate-200 bg-slate-50/40 space-y-3"
                  >
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-md bg-amber-700 text-white font-black text-xs">
                        Soal No. {soal.nomor}
                      </span>
                      <span className="text-xs text-slate-500 font-semibold">
                        Analisis Kasus Sejarah
                      </span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 leading-relaxed font-medium">
                      📌 <strong>Konteks Sejarah:</strong> {soal.kasus}
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
                          btnStyle = 'bg-amber-50 border-amber-500 text-amber-950 font-bold shadow-xs';
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
                              ? 'Analisis Jawaban Kamu Tepat!'
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
                      MATERI_KELAS_7_SEM_2_BAB_10.kuisHots.length
                    ) {
                      showToast('Mohon jawab seluruh 5 pertanyaan sebelum memeriksa!', 'info');
                      return;
                    }
                    setShowKuisResult(true);
                    showToast('Evaluasi selesai! Nilai dan pembahasan telah ditampilkan.', 'success');
                  }}
                  className="px-6 py-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm flex items-center gap-2 shadow-md transition-all cursor-pointer"
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
