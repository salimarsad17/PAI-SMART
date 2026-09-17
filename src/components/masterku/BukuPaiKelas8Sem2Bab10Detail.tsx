import React, { useState } from 'react';
import {
  BookOpen,
  Sparkles,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Check,
  Lightbulb,
  Bot,
  Copy,
  Users,
  Award,
  BookmarkCheck,
  Volume2,
  FileText,
  ChevronRight,
  Scale,
  Calendar,
  AlertTriangle,
  HelpCircle,
  Globe2,
  ShieldAlert,
  ShieldCheck,
  Compass,
  Landmark,
  Scroll,
  TrendingDown,
  History,
  Anchor,
  Flame,
  Info
} from 'lucide-react';
import {
  MATERI_KELAS_8_SEM_2_BAB_10,
  PenguasaUsmaniItem,
  PuncakKejayaanPilarItem,
  FaktorKemunduranUsmaniItem,
  HikmahUsmaniItem,
  StudiKasusUsmaniItem,
  SoalHotsUsmaniItem
} from '../../data/materiKelas8Sem2Bab10Data';
import { useToast } from '../common/Toast';

interface Props {
  onAskAI: (prompt: string) => void;
}

type Bab10K8SubTab =
  | '1-sejarah-berdiri'
  | '2-puncak-kejayaan'
  | '3-faktor-kemunduran'
  | '4-hikmah-sejarah'
  | '5-kasus-muhasabah'
  | '6-kuis-hots';

export const BukuPaiKelas8Sem2Bab10Detail: React.FC<Props> = ({ onAskAI }) => {
  const { showToast } = useToast();
  const [activeTab, setActiveTab] = useState<Bab10K8SubTab>('1-sejarah-berdiri');

  // Sub-states
  const [selectedSultanIndex, setSelectedSultanIndex] = useState<number>(0);
  const [selectedPilarId, setSelectedPilarId] = useState<string>('pilar-1');
  const [kemunduranFilter, setKemunduranFilter] = useState<'Semua' | 'Faktor Internal' | 'Faktor Eksternal'>('Semua');
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);

  // Muhasabah State (8 indicators)
  const [checklistMuhasabah, setChecklistMuhasabah] = useState<Record<number, 'terbiasa' | 'berikhtiar' | 'belum'>>({
    1: 'terbiasa',
    2: 'terbiasa',
    3: 'terbiasa',
    4: 'terbiasa',
    5: 'terbiasa',
    6: 'berikhtiar',
    7: 'terbiasa',
    8: 'berikhtiar'
  });

  // Quiz State
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});
  const [showQuizResults, setShowQuizResults] = useState<boolean>(false);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    showToast(`${label} berhasil disalin ke clipboard!`, 'success');
  };

  const playArabicAudio = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      if (isPlayingAudio) {
        setIsPlayingAudio(false);
        return;
      }
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ar-SA';
      utterance.rate = 0.85;
      utterance.onend = () => setIsPlayingAudio(false);
      utterance.onerror = () => setIsPlayingAudio(false);
      setIsPlayingAudio(true);
      window.speechSynthesis.speak(utterance);
    } else {
      showToast('Fitur suara tidak didukung oleh peramban ini.', 'info');
    }
  };

  // Quiz calculation
  const totalQuestions = MATERI_KELAS_8_SEM_2_BAB_10.kuisHots.length;
  const answeredCount = Object.keys(userAnswers).length;
  const correctCount = MATERI_KELAS_8_SEM_2_BAB_10.kuisHots.filter(
    (q) => userAnswers[q.id] === q.kunciJawaban
  ).length;
  const score = Math.round((correctCount / totalQuestions) * 100);

  // Muhasabah calculation
  const terbiasaCount = Object.values(checklistMuhasabah).filter((v) => v === 'terbiasa').length;
  const berikhtiarCount = Object.values(checklistMuhasabah).filter((v) => v === 'berikhtiar').length;
  const scoreMuhasabah = Math.round(((terbiasaCount * 100 + berikhtiarCount * 60) / 800) * 100);

  const filteredKemunduran = MATERI_KELAS_8_SEM_2_BAB_10.faktorKemunduran.faktorInternal
    .concat(MATERI_KELAS_8_SEM_2_BAB_10.faktorKemunduran.faktorEksternal)
    .filter((item) => kemunduranFilter === 'Semua' || item.kategori === kemunduranFilter);

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
      {/* HEADER BANNER */}
      <div className="bg-gradient-to-r from-red-950 via-red-900 to-amber-950 text-white p-6 sm:p-8 relative overflow-hidden">
        <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3 py-1 bg-amber-400 text-amber-950 text-xs font-black rounded-full shadow-sm flex items-center gap-1.5">
              <Landmark className="w-3.5 h-3.5" />
              BUKU TEKS PAI KELAS VIII • SEMESTER 2
            </span>
            <span className="px-3 py-1 bg-red-800/80 text-red-100 text-xs font-semibold rounded-full border border-red-700/50">
              Bab 10 • Sejarah Peradaban Islam (SPI)
            </span>
            <span className="px-3 py-1 bg-white/10 text-white text-xs font-semibold rounded-full backdrop-blur-sm">
              Dinasti Tiga Benua (1299–1924 M)
            </span>
          </div>

          <h1 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-white mb-2 leading-tight">
            {MATERI_KELAS_8_SEM_2_BAB_10.judulBab}
          </h1>
          <p className="text-sm text-red-100/90 leading-relaxed max-w-4xl">
            {MATERI_KELAS_8_SEM_2_BAB_10.subJudul}
          </p>

          <div className="mt-4 pt-4 border-t border-red-800/60 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs text-amber-200 font-medium">
              <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
              <span>Lengkap: Sejarah Berdiri, Puncak Kejayaan, Faktor Kemunduran, & 4 Dimensi Hikmah</span>
            </div>
            <button
              onClick={() =>
                onAskAI(
                  'Jelaskan rangkuman lengkap materi PAI Kelas 8 Semester 2 Bab 10 tentang Dinasti Turki Usmani: sejarah berdiri, puncak kejayaan, faktor kemunduran internal-eksternal, dan hikmah bagi pelajar muslim!'
                )
              }
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-400 hover:bg-amber-300 text-amber-950 font-bold text-xs rounded-xl shadow transition-all cursor-pointer"
            >
              <Bot className="w-3.5 h-3.5" />
              Tanya Masterku AI tentang Bab 10
            </button>
          </div>
        </div>
      </div>

      {/* NAVIGATION TABS */}
      <div className="bg-slate-50 border-b border-slate-200 p-2 sm:p-3 overflow-x-auto scrollbar-thin">
        <div className="flex items-center gap-1.5 sm:gap-2 min-w-max">
          <button
            onClick={() => setActiveTab('1-sejarah-berdiri')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === '1-sejarah-berdiri'
                ? 'bg-red-900 text-white shadow-md font-black'
                : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
            }`}
          >
            <History className="w-4 h-4 text-amber-400" />
            <span>1. Sejarah Berdiri & Suku Kayi</span>
          </button>

          <button
            onClick={() => setActiveTab('2-puncak-kejayaan')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === '2-puncak-kejayaan'
                ? 'bg-red-900 text-white shadow-md font-black'
                : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
            }`}
          >
            <Award className="w-4 h-4 text-amber-400" />
            <span>2. Puncak Kejayaan & 3 Sultan</span>
          </button>

          <button
            onClick={() => setActiveTab('3-faktor-kemunduran')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === '3-faktor-kemunduran'
                ? 'bg-red-900 text-white shadow-md font-black'
                : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
            }`}
          >
            <TrendingDown className="w-4 h-4 text-amber-400" />
            <span>3. Faktor Kemunduran</span>
          </button>

          <button
            onClick={() => setActiveTab('4-hikmah-sejarah')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === '4-hikmah-sejarah'
                ? 'bg-red-900 text-white shadow-md font-black'
                : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
            }`}
          >
            <Lightbulb className="w-4 h-4 text-amber-400" />
            <span>4. Hikmah & Refleksi Sejarah</span>
          </button>

          <button
            onClick={() => setActiveTab('5-kasus-muhasabah')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === '5-kasus-muhasabah'
                ? 'bg-red-900 text-white shadow-md font-black'
                : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
            }`}
          >
            <BookmarkCheck className="w-4 h-4 text-amber-400" />
            <span>5. Studi Kasus & Muhasabah</span>
          </button>

          <button
            onClick={() => setActiveTab('6-kuis-hots')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === '6-kuis-hots'
                ? 'bg-amber-500 text-amber-950 shadow-md font-black'
                : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
            }`}
          >
            <HelpCircle className="w-4 h-4 text-red-900" />
            <span>6. Kuis HOTS (5 Soal)</span>
          </button>
        </div>
      </div>

      {/* CONTENT AREA */}
      <div className="p-4 sm:p-6 md:p-8 space-y-6">
        {/* ========================================================= */}
        {/* TAB 1: SEJARAH BERDIRI & SUKU KAYI */}
        {/* ========================================================= */}
        {activeTab === '1-sejarah-berdiri' && (
          <div className="space-y-6 animate-fadeIn">
            {/* Apersepsi & Dalil Al-Qur'an */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-5 sm:p-6 border border-amber-200">
              <div className="flex items-center gap-2 text-amber-900 font-bold text-sm mb-2">
                <BookOpen className="w-4 h-4 text-amber-700" />
                <span>Apersepsi & Landasan Tadabbur Tarikh</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4">
                {MATERI_KELAS_8_SEM_2_BAB_10.pengantar.apersepsi}
              </p>

              {/* Dalil Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                {MATERI_KELAS_8_SEM_2_BAB_10.pengantar.dalilAlQuran.map((dalil, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-xl p-4 border border-amber-200/80 shadow-sm flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="px-2 py-0.5 bg-amber-100 text-amber-900 font-bold text-[11px] rounded-md">
                          {dalil.surah}: {dalil.ayat}
                        </span>
                        <button
                          onClick={() => playArabicAudio(dalil.arab)}
                          className="p-1 text-slate-400 hover:text-amber-700 transition-colors"
                          title="Putar Lafaz Arab"
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="font-arabic text-right text-base sm:text-lg text-slate-800 leading-loose mb-2">
                        {dalil.arab}
                      </p>
                      <p className="text-[11px] text-slate-500 italic mb-1.5">{dalil.latin}</p>
                      <p className="text-xs text-slate-700 font-medium">"{dalil.arti}"</p>
                    </div>
                    <p className="mt-3 pt-2 border-t border-slate-100 text-[11px] text-amber-900/90 font-medium">
                      💡 {dalil.keterangan}
                    </p>
                  </div>
                ))}
              </div>

              {/* Hadits Shahih Al-Fatih */}
              <div className="mt-4 bg-red-950 text-white rounded-xl p-4 sm:p-5 border border-red-900 relative overflow-hidden">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    <span className="text-xs font-bold text-amber-300">
                      Nubuat Agung Sabda Rasulullah Saw. (H.R. Ahmad & Al-Hakim)
                    </span>
                  </div>
                  <button
                    onClick={() =>
                      playArabicAudio(MATERI_KELAS_8_SEM_2_BAB_10.pengantar.haditsShahih.arab)
                    }
                    className="flex items-center gap-1 px-2.5 py-1 bg-amber-400/20 hover:bg-amber-400/30 text-amber-300 text-xs rounded-lg transition-colors cursor-pointer"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                    <span>Dengar Lafaz</span>
                  </button>
                </div>
                <p className="font-arabic text-right text-base sm:text-xl text-amber-100 leading-loose my-2 font-semibold">
                  {MATERI_KELAS_8_SEM_2_BAB_10.pengantar.haditsShahih.arab}
                </p>
                <p className="text-xs text-red-200/90 italic mb-1.5">
                  {MATERI_KELAS_8_SEM_2_BAB_10.pengantar.haditsShahih.latin}
                </p>
                <p className="text-xs sm:text-sm text-white font-medium mb-3">
                  "{MATERI_KELAS_8_SEM_2_BAB_10.pengantar.haditsShahih.arti}"
                </p>
                <div className="p-3 bg-white/10 rounded-lg text-xs text-red-100/90 leading-relaxed border border-white/10">
                  <span className="font-bold text-amber-300">Syarah Sejarah: </span>
                  {MATERI_KELAS_8_SEM_2_BAB_10.pengantar.haditsShahih.syarah}
                </div>
              </div>
            </div>

            {/* Narasi Sejarah Berdiri: Suku Kayi -> Ertugrul -> Osman I */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
                <div className="w-9 h-9 rounded-xl bg-red-100 text-red-800 flex items-center justify-center font-black text-sm mb-3">
                  1
                </div>
                <h3 className="text-sm font-bold text-slate-800 mb-2">
                  Asal-Usul Suku Kayi & Sulaiman Shah
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {MATERI_KELAS_8_SEM_2_BAB_10.sejarahBerdiri.latarBelakang}
                </p>
              </div>

              <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
                <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-black text-sm mb-3">
                  2
                </div>
                <h3 className="text-sm font-bold text-slate-800 mb-2">
                  Bantuan Ertugrul & Tanah Sogut
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {MATERI_KELAS_8_SEM_2_BAB_10.sejarahBerdiri.bantuanKepadaSeljukRum}
                </p>
              </div>

              <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
                <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-black text-sm mb-3">
                  3
                </div>
                <h3 className="text-sm font-bold text-slate-800 mb-2">
                  Deklarasi Kemerdekaan 1299 M
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {MATERI_KELAS_8_SEM_2_BAB_10.sejarahBerdiri.deklarasiKemerdekaan1299}
                </p>
              </div>
            </div>

            {/* Wasiat Emas Osman I */}
            <div className="bg-gradient-to-r from-red-900 to-amber-900 text-white rounded-2xl p-5 sm:p-6 shadow-md">
              <div className="flex items-center gap-2 mb-2 text-amber-300 font-bold text-sm">
                <Scroll className="w-4 h-4" />
                <span>{MATERI_KELAS_8_SEM_2_BAB_10.sejarahBerdiri.wasiatOsman.judul}</span>
              </div>
              <blockquote className="text-xs sm:text-sm italic text-amber-50 leading-relaxed bg-black/20 p-4 rounded-xl border-l-4 border-amber-400 mb-3">
                "{MATERI_KELAS_8_SEM_2_BAB_10.sejarahBerdiri.wasiatOsman.isiWasiat}"
              </blockquote>
              <p className="text-xs text-amber-200/90 font-medium">
                ⚖️ <strong>Makna Filosofis:</strong>{' '}
                {MATERI_KELAS_8_SEM_2_BAB_10.sejarahBerdiri.wasiatOsman.maknaMoral}
              </p>
            </div>

            {/* Garis Waktu Interaktif (Timeline Fase Awal) */}
            <div className="bg-slate-50 rounded-2xl p-5 sm:p-6 border border-slate-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-red-800" />
                  <span>Kronologi Fase Awal Perluasan Daulah Usmani (1299–1402 M)</span>
                </h3>
                <span className="text-[11px] text-slate-500 font-medium">Fase Peletak Dasar</span>
              </div>

              <div className="space-y-3">
                {MATERI_KELAS_8_SEM_2_BAB_10.sejarahBerdiri.garisWaktuFaseAwal.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col sm:flex-row sm:items-start gap-3 bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm"
                  >
                    <div className="px-3 py-1 bg-red-100 text-red-900 font-black text-xs rounded-lg shrink-0 self-start">
                      {item.tahun}
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-800 mb-1">
                        {item.peristiwa}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">{item.deskripsi}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 2: PUNCAK KEJAYAAN & 3 SULTAN BESAR */}
        {/* ========================================================= */}
        {activeTab === '2-puncak-kejayaan' && (
          <div className="space-y-6 animate-fadeIn">
            {/* Header Pengantar Puncak Kejayaan */}
            <div className="bg-gradient-to-r from-red-900 to-amber-950 text-white p-5 rounded-2xl">
              <div className="flex items-center gap-2 text-amber-300 text-xs font-bold mb-1">
                <Award className="w-4 h-4" />
                <span>ERA KEEMASAN IMPERIUM TIGA BENUA (1453–1566 M)</span>
              </div>
              <h2 className="text-base sm:text-lg font-black text-white mb-2">
                Puncak Kegemilangan: Dari Penaklukan Konstantinopel hingga Sulaiman Al-Qanuni
              </h2>
              <p className="text-xs text-red-100/90 leading-relaxed">
                {MATERI_KELAS_8_SEM_2_BAB_10.puncakKejayaan.ringkasan}
              </p>
            </div>

            {/* Selector 3 Sultan Besar */}
            <div className="bg-slate-50 p-2 rounded-xl border border-slate-200 flex flex-wrap gap-2">
              {MATERI_KELAS_8_SEM_2_BAB_10.puncakKejayaan.tigaSultanKeemasan.map((sultan, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedSultanIndex(idx)}
                  className={`flex-1 min-w-[200px] text-left p-3 rounded-lg transition-all cursor-pointer ${
                    selectedSultanIndex === idx
                      ? 'bg-red-900 text-white shadow font-bold'
                      : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span
                      className={`font-semibold ${
                        selectedSultanIndex === idx ? 'text-amber-300' : 'text-slate-500'
                      }`}
                    >
                      Sultan Ke-{sultan.urutan}
                    </span>
                    <span className="text-[10px] opacity-80">{sultan.masaMemerintah}</span>
                  </div>
                  <div className="text-xs sm:text-sm font-black truncate">{sultan.namaPopuler}</div>
                </button>
              ))}
            </div>

            {/* Detail Sultan Terpilih */}
            {(() => {
              const curSultan =
                MATERI_KELAS_8_SEM_2_BAB_10.puncakKejayaan.tigaSultanKeemasan[selectedSultanIndex];
              return (
                <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 sm:p-6 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100">
                    <div>
                      <span className="px-2.5 py-0.5 bg-amber-100 text-amber-900 font-bold text-xs rounded-full">
                        {curSultan.gelar}
                      </span>
                      <h3 className="text-base sm:text-xl font-black text-slate-900 mt-1">
                        {curSultan.namaLengkap}
                      </h3>
                      <p className="text-xs text-slate-500">Masa Kekuasaan: {curSultan.masaMemerintah}</p>
                    </div>
                    <button
                      onClick={() =>
                        onAskAI(
                          `Ceritakan secara mendalam biografi, strategi, dan keteladanan ${curSultan.namaPopuler} dalam Dinasti Turki Usmani!`
                        )
                      }
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-xl transition-colors cursor-pointer self-start sm:self-auto"
                    >
                      <Bot className="w-3.5 h-3.5 text-red-800" />
                      <span>Eksplorasi Tokoh via AI</span>
                    </button>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Pencapaian Monumental & Prestasi Sejarah:
                    </h4>
                    <div className="grid grid-cols-1 gap-2.5">
                      {curSultan.peranDanPencapaian.map((pencapaian, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-slate-700 leading-relaxed"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{pencapaian}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                    <div className="p-3.5 bg-amber-50/80 rounded-xl border border-amber-200 text-xs">
                      <div className="font-bold text-amber-900 mb-1 flex items-center gap-1.5">
                        <Landmark className="w-3.5 h-3.5 text-amber-700" />
                        <span>Kebijakan Monumental:</span>
                      </div>
                      <p className="text-slate-700 leading-relaxed">{curSultan.kebijakanMonumental}</p>
                    </div>

                    <div className="p-3.5 bg-emerald-50/80 rounded-xl border border-emerald-200 text-xs">
                      <div className="font-bold text-emerald-900 mb-1 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
                        <span>Nilai Keteladanan untuk Pelajar:</span>
                      </div>
                      <p className="text-slate-700 leading-relaxed">{curSultan.nilaiKeteladanan}</p>
                    </div>
                  </div>
                </div>
              );
            })()}

            {/* 3 Pilar Peradaban Usmani */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2">
                  <Landmark className="w-4 h-4 text-red-800" />
                  <span>3 Pilar Utama Peradaban Dinasti Turki Usmani</span>
                </h3>
                <span className="text-[11px] text-slate-500">Hukum, Militer & Arsitektur</span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {MATERI_KELAS_8_SEM_2_BAB_10.puncakKejayaan.pilarKejayaan.map((pilar) => (
                  <div
                    key={pilar.id}
                    className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="px-2.5 py-0.5 bg-red-100 text-red-900 font-bold text-[10px] rounded-full">
                          {pilar.bidang}
                        </span>
                        <span className="text-xs font-semibold text-slate-500">
                          {pilar.tokohKunci.split('&')[0]}
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-slate-900 mb-2">{pilar.judul}</h4>
                      <p className="text-xs text-slate-600 leading-relaxed mb-3">{pilar.deskripsi}</p>

                      <div className="space-y-2 mb-3">
                        {pilar.pencapaianUtama.map((item, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-1.5 text-[11px] text-slate-700 leading-relaxed"
                          >
                            <span className="text-amber-600 font-bold">•</span>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-3 pt-3 border-t border-slate-100 text-[11px] text-slate-600 space-y-1.5">
                      <div className="p-2 bg-slate-50 rounded-lg text-slate-700">
                        <span className="font-bold text-slate-900">Fakta Sejarah: </span>
                        {pilar.faktaSejarah}
                      </div>
                      <div className="p-2 bg-amber-50 rounded-lg text-amber-950 font-medium">
                        <span className="font-bold text-amber-900">Dampak Global: </span>
                        {pilar.dampakGlobal}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 3: FAKTOR KEMUNDURAN (INTERNAL & EKSTERNAL) */}
        {/* ========================================================= */}
        {activeTab === '3-faktor-kemunduran' && (
          <div className="space-y-6 animate-fadeIn">
            {/* Header Pengantar Kemunduran */}
            <div className="bg-gradient-to-r from-slate-900 to-red-950 text-white p-5 rounded-2xl">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold mb-1">
                <TrendingDown className="w-4 h-4" />
                <span>ANALISIS HISTORIS: TITIK BALIK & KERUNTUHAN KEKHALIFAHAN</span>
              </div>
              <h2 className="text-base sm:text-lg font-black text-white mb-2">
                Faktor Penyebab Kemunduran Dinasti Turki Usmani (Internal & Eksternal)
              </h2>
              <p className="text-xs text-slate-200 leading-relaxed">
                {MATERI_KELAS_8_SEM_2_BAB_10.faktorKemunduran.ringkasan}
              </p>
            </div>

            {/* Filter Toggle */}
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl">
                {(['Semua', 'Faktor Internal', 'Faktor Eksternal'] as const).map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setKemunduranFilter(filter)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      kemunduranFilter === filter
                        ? 'bg-red-900 text-white shadow-sm font-black'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>

              <span className="text-xs text-slate-500 font-medium">
                Menampilkan {filteredKemunduran.length} faktor penyebab
              </span>
            </div>

            {/* Daftar Faktor Kemunduran Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredKemunduran.map((item) => (
                <div
                  key={item.id}
                  className={`bg-white rounded-2xl border p-5 shadow-sm flex flex-col justify-between ${
                    item.kategori === 'Faktor Internal'
                      ? 'border-red-200 hover:border-red-300'
                      : 'border-amber-200 hover:border-amber-300'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span
                        className={`px-2.5 py-0.5 font-bold text-[10px] rounded-full ${
                          item.kategori === 'Faktor Internal'
                            ? 'bg-red-100 text-red-900'
                            : 'bg-amber-100 text-amber-900'
                        }`}
                      >
                        {item.kategori}
                      </span>
                      <span className="text-xs font-semibold text-slate-400">ID: {item.id}</span>
                    </div>

                    <h3 className="text-sm font-bold text-slate-900 mb-2 leading-snug">
                      {item.judul}
                    </h3>
                    <div className="p-2.5 bg-slate-50 rounded-xl text-xs text-slate-700 leading-relaxed mb-3 font-medium">
                      <span className="text-red-700 font-bold">Pemicu Utama: </span>
                      {item.penyebabUtama}
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed mb-3">
                      {item.analisisHistoris}
                    </p>

                    <div className="space-y-1.5 mb-3">
                      <span className="text-[11px] font-bold text-slate-700">Dampak Fatal:</span>
                      {item.dampakFatal.map((dampak, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-1.5 text-[11px] text-slate-600 leading-relaxed"
                        >
                          <XCircle className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
                          <span>{dampak}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-3 pt-3 border-t border-slate-100 bg-emerald-50/60 p-2.5 rounded-xl border border-emerald-100">
                    <div className="flex items-center gap-1.5 text-emerald-900 font-bold text-xs mb-1">
                      <Lightbulb className="w-3.5 h-3.5 text-emerald-700" />
                      <span>Ibrah untuk Generasi Masa Kini:</span>
                    </div>
                    <p className="text-[11px] text-emerald-950 leading-relaxed">{item.ibrahPelajaran}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Titik Balik Runtuhnya Kekhalifahan (The Sick Man of Europe -> 1924 M) */}
            <div className="bg-gradient-to-r from-red-950 via-slate-900 to-black text-white p-5 sm:p-6 rounded-2xl border border-red-900">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-xs mb-2">
                <ShieldAlert className="w-4 h-4" />
                <span>3 Maret 1924 M: Berakhirnya Era Kekhalifahan Islam Sedunia</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mb-3">
                Setelah melalui krisis berkepanjangan, kekalahan Perang Dunia I, dan pendudukan Sekutu di
                Istanbul, Majelis Nasional Agung Turki di bawah pimpinan Mustafa Kemal Atatürk secara
                resmi menghapuskan kesultanan pada tahun 1922 M dan menghapuskan institusi Kekhalifahan
                Islam pada <strong>3 Maret 1924 M</strong>. Peristiwa ini mengakhiri masa kepemimpinan
                khalifah yang telah menaungi umat Islam selama lebih dari 1.300 tahun sejak wafatnya
                Rasulullah Saw. pada tahun 632 M.
              </p>
              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={() =>
                    onAskAI(
                      'Jelaskan mengapa Dinasti Turki Usmani dijuluki The Sick Man of Europe dan bagaimana kronologi runtuhnya kekhalifahan pada 3 Maret 1924 M!'
                    )
                  }
                  className="px-3 py-1.5 bg-amber-400 text-amber-950 text-xs font-bold rounded-xl shadow hover:bg-amber-300 transition-colors cursor-pointer"
                >
                  Pelajari Runtuhnya Kekhalifahan via Masterku AI
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 4: HIKMAH SEJARAH & REFLEKSI KARAKTER PELAJAR */}
        {/* ========================================================= */}
        {activeTab === '4-hikmah-sejarah' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-gradient-to-br from-amber-50 to-red-50 p-5 rounded-2xl border border-amber-200">
              <div className="flex items-center gap-2 text-red-900 font-bold text-xs mb-1">
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span>MENARIK IBRAH KEJAYAAN DAN KEHANCURAN</span>
              </div>
              <h2 className="text-base sm:text-lg font-black text-slate-900 mb-2">
                4 Dimensi Hikmah Sejarah Dinasti Turki Usmani untuk Generasi Masa Depan
              </h2>
              <p className="text-xs text-slate-600 leading-relaxed">
                Mempelajari sejarah bukan sekadar mengingat angka tahun dan deretan nama sultan,
                melainkan meneladani keberhasilan mereka yang bertakwa dan waspada agar tidak
                mengulangi kesalahan para penguasa yang lalai.
              </p>
            </div>

            {/* 4 Dimensi Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {MATERI_KELAS_8_SEM_2_BAB_10.hikmahSejarah.map((hikmah) => (
                <div
                  key={hikmah.id}
                  className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="px-2.5 py-0.5 bg-red-100 text-red-900 font-bold text-[10px] rounded-full">
                        {hikmah.dimensi}
                      </span>
                      <span className="text-xs font-bold text-amber-600">Hikmah {hikmah.nomor}</span>
                    </div>

                    <h3 className="text-sm font-bold text-slate-900 mb-2">{hikmah.judul}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-3">{hikmah.deskripsi}</p>

                    {/* Dalil Qur'an Penopang */}
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 mb-3">
                      <div className="flex items-center justify-between text-[11px] font-bold text-slate-700 mb-1">
                        <span>Dalil: {hikmah.dalilTerkait.surah}</span>
                        <button
                          onClick={() => playArabicAudio(hikmah.dalilTerkait.teksArab)}
                          className="text-slate-400 hover:text-red-700"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <p className="font-arabic text-right text-sm text-slate-800 my-1 leading-relaxed">
                        {hikmah.dalilTerkait.teksArab}
                      </p>
                      <p className="text-[11px] text-slate-600 italic">
                        "{hikmah.dalilTerkait.terjemahan}"
                      </p>
                    </div>
                  </div>

                  {/* Implementasi Nyata Pelajar */}
                  <div className="mt-2 pt-3 border-t border-slate-100">
                    <span className="text-[11px] font-bold text-emerald-900 mb-1.5 block">
                      Aksi Nyata Pelajar Muslim:
                    </span>
                    <div className="space-y-1.5">
                      {hikmah.implementasiPelajar.map((aksi, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-1.5 text-[11px] text-slate-700 leading-relaxed"
                        >
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{aksi}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 5: STUDI KASUS & MUHASABAH KARAKTER */}
        {/* ========================================================= */}
        {activeTab === '5-kasus-muhasabah' && (
          <div className="space-y-6 animate-fadeIn">
            {/* 3 Studi Kasus Sejarah */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-red-800" />
                  <span>3 Studi Kasus Reflektif: Pelajaran Nyata dari Sejarah Usmani</span>
                </h3>
                <span className="text-xs text-slate-500">Analisis Karakter & Etika</span>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {MATERI_KELAS_8_SEM_2_BAB_10.studiKasus.map((kasus) => (
                  <div
                    key={kasus.id}
                    className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-3"
                  >
                    <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                      <span>{kasus.judul}</span>
                    </h4>

                    <div className="p-3 bg-slate-50 rounded-xl text-xs text-slate-700 leading-relaxed">
                      <span className="font-bold text-slate-900">Latar Belakang Sejarah: </span>
                      {kasus.latarBelakang}
                    </div>

                    <div className="p-3 bg-amber-50 rounded-xl border border-amber-200/80 text-xs text-amber-950 leading-relaxed">
                      <span className="font-bold text-amber-900">Pertanyaan Pemantik: </span>
                      {kasus.pertanyaanDiskusi}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                      <div className="p-3 bg-slate-100/70 rounded-xl text-xs text-slate-700">
                        <span className="font-bold text-slate-900 block mb-1">Analisis Ibrah:</span>
                        <p>{kasus.analisisHikmah}</p>
                      </div>
                      <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-950">
                        <span className="font-bold text-emerald-900 block mb-1">
                          Solusi Karakter Pelajar:
                        </span>
                        <p>{kasus.solusiKarakterPelajar}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Lembar Muhasabah 8 Dimensi Karakter */}
            <div className="bg-slate-50 rounded-2xl p-5 sm:p-6 border border-slate-200 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200">
                <div>
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <BookmarkCheck className="w-4 h-4 text-red-800" />
                    <span>Lembar Muhasabah Diri: 8 Indikator Karakter Penerus Peradaban</span>
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Evaluasi sejauh mana kamu merefleksikan nilai-nilai integritas dan disiplin dalam
                    kehidupan sehari-hari.
                  </p>
                </div>

                <div className="flex items-center gap-3 self-end sm:self-auto">
                  <div className="text-right">
                    <span className="text-[10px] text-slate-500 font-bold block uppercase">
                      Skor Integritas
                    </span>
                    <span className="text-base font-black text-red-900">{scoreMuhasabah}%</span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-red-100 text-red-900 flex items-center justify-center font-black text-xs">
                    {terbiasaCount}/8
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                {MATERI_KELAS_8_SEM_2_BAB_10.muhasabahKarakter.map((item) => {
                  const currentVal = checklistMuhasabah[item.id] || 'berikhtiar';
                  return (
                    <div
                      key={item.id}
                      className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                    >
                      <div className="space-y-1 max-w-xl">
                        <div className="flex items-center gap-2">
                          <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-700 font-bold text-[11px] flex items-center justify-center shrink-0">
                            {item.id}
                          </span>
                          <span className="text-xs font-bold text-slate-900">{item.indikator}</span>
                        </div>
                        <p className="text-xs text-slate-600 pl-7 leading-relaxed">{item.pernyataan}</p>
                      </div>

                      <div className="flex items-center gap-1.5 pl-7 sm:pl-0 shrink-0">
                        <button
                          onClick={() =>
                            setChecklistMuhasabah({ ...checklistMuhasabah, [item.id]: 'terbiasa' })
                          }
                          className={`px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                            currentVal === 'terbiasa'
                              ? 'bg-emerald-600 text-white shadow-sm'
                              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                          }`}
                        >
                          Terbiasa
                        </button>
                        <button
                          onClick={() =>
                            setChecklistMuhasabah({ ...checklistMuhasabah, [item.id]: 'berikhtiar' })
                          }
                          className={`px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                            currentVal === 'berikhtiar'
                              ? 'bg-amber-500 text-white shadow-sm'
                              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                          }`}
                        >
                          Berikhtiar
                        </button>
                        <button
                          onClick={() =>
                            setChecklistMuhasabah({ ...checklistMuhasabah, [item.id]: 'belum' })
                          }
                          className={`px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                            currentVal === 'belum'
                              ? 'bg-rose-600 text-white shadow-sm'
                              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                          }`}
                        >
                          Belum
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="p-3.5 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-950 flex items-center justify-between">
                <span>
                  🎉 Hebat! Kamu telah membiasakan <strong>{terbiasaCount}</strong> dari 8 indikator
                  karakter penerus peradaban. Pertahankan dan tingkatkan terus!
                </span>
                <button
                  onClick={() =>
                    setChecklistMuhasabah({
                      1: 'terbiasa',
                      2: 'terbiasa',
                      3: 'terbiasa',
                      4: 'terbiasa',
                      5: 'terbiasa',
                      6: 'terbiasa',
                      7: 'terbiasa',
                      8: 'terbiasa'
                    })
                  }
                  className="px-2.5 py-1 bg-emerald-600 text-white text-[11px] font-bold rounded-lg hover:bg-emerald-700 transition-colors cursor-pointer shrink-0 ml-2"
                >
                  Set Semua Terbiasa
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 6: KUIS HOTS (5 BUTIR SOAL PENALARAN TINGKAT TINGGI) */}
        {/* ========================================================= */}
        {activeTab === '6-kuis-hots' && (
          <div className="space-y-6 animate-fadeIn">
            {/* Header Kuis */}
            <div className="bg-gradient-to-r from-amber-500 via-amber-600 to-red-900 text-white p-5 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="px-2.5 py-0.5 bg-white/20 text-white font-bold text-xs rounded-full">
                  EVALUASI PEMBELAJARAN BAB 10
                </span>
                <h2 className="text-base sm:text-xl font-black mt-1">
                  Uji Pemahaman Penalaran HOTS: Dinasti Turki Usmani
                </h2>
                <p className="text-xs text-amber-100">
                  Kerjakan 5 butir soal analisis sejarah untuk menguji kedalaman penalaranmu.
                </p>
              </div>

              {showQuizResults && (
                <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/20 text-center shrink-0">
                  <div className="text-2xl font-black text-white">{score} / 100</div>
                  <div className="text-[10px] text-amber-200">
                    {correctCount} dari {totalQuestions} Soal Benar
                  </div>
                </div>
              )}
            </div>

            {/* List 5 Pertanyaan HOTS */}
            <div className="space-y-6">
              {MATERI_KELAS_8_SEM_2_BAB_10.kuisHots.map((soal) => {
                const selectedAns = userAnswers[soal.id];
                const isCorrect = selectedAns === soal.kunciJawaban;

                return (
                  <div
                    key={soal.id}
                    className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm space-y-4"
                  >
                    {/* Stimulus Kasus */}
                    <div className="p-3.5 bg-slate-50 rounded-xl border-l-4 border-red-800 text-xs text-slate-700 leading-relaxed">
                      <span className="font-bold text-slate-900 block mb-1">
                        Stimulus Soal No. {soal.nomor}:
                      </span>
                      <p>{soal.stimulus}</p>
                    </div>

                    {/* Pertanyaan */}
                    <h3 className="text-sm font-bold text-slate-900">{soal.pertanyaan}</h3>

                    {/* Pilihan Ganda */}
                    <div className="space-y-2">
                      {soal.pilihan.map((opsi, optIdx) => {
                        const isChosen = selectedAns === optIdx;
                        let optionStyle = 'bg-white hover:bg-slate-50 border-slate-200 text-slate-700';

                        if (showQuizResults) {
                          if (optIdx === soal.kunciJawaban) {
                            optionStyle = 'bg-emerald-50 border-emerald-500 text-emerald-900 font-bold';
                          } else if (isChosen && !isCorrect) {
                            optionStyle = 'bg-rose-50 border-rose-500 text-rose-900';
                          }
                        } else if (isChosen) {
                          optionStyle = 'bg-red-50 border-red-600 text-red-900 font-bold';
                        }

                        return (
                          <button
                            key={optIdx}
                            disabled={showQuizResults}
                            onClick={() => setUserAnswers({ ...userAnswers, [soal.id]: optIdx })}
                            className={`w-full text-left p-3 rounded-xl border text-xs leading-relaxed transition-all flex items-start gap-2.5 cursor-pointer ${optionStyle}`}
                          >
                            <span
                              className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-bold shrink-0 mt-0.5 ${
                                isChosen
                                  ? 'bg-red-800 text-white'
                                  : 'bg-slate-100 text-slate-600'
                              }`}
                            >
                              {String.fromCharCode(65 + optIdx)}
                            </span>
                            <span>{opsi.substring(3)}</span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Pembahasan jika hasil sudah ditampilkan */}
                    {showQuizResults && (
                      <div
                        className={`p-3.5 rounded-xl text-xs leading-relaxed ${
                          isCorrect
                            ? 'bg-emerald-50 border border-emerald-200 text-emerald-950'
                            : 'bg-rose-50 border border-rose-200 text-rose-950'
                        }`}
                      >
                        <div className="flex items-center gap-1.5 font-bold mb-1">
                          {isCorrect ? (
                            <>
                              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                              <span className="text-emerald-800">Jawaban Kamu Tepat!</span>
                            </>
                          ) : (
                            <>
                              <XCircle className="w-4 h-4 text-rose-600" />
                              <span className="text-rose-800">
                                Kurang Tepat (Kunci: {String.fromCharCode(65 + soal.kunciJawaban)})
                              </span>
                            </>
                          )}
                        </div>
                        <p className="mt-1">{soal.pembahasan}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Action Bar Kuis */}
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex flex-wrap items-center justify-between gap-3">
              <div className="text-xs text-slate-600">
                {answeredCount < totalQuestions ? (
                  <span>
                    Kamu baru menjawab <strong>{answeredCount}</strong> dari {totalQuestions} soal.
                  </span>
                ) : (
                  <span className="text-emerald-700 font-bold">
                    Semua {totalQuestions} soal telah dijawab! Klik periksa untuk melihat skor.
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2">
                {!showQuizResults ? (
                  <button
                    disabled={answeredCount === 0}
                    onClick={() => {
                      setShowQuizResults(true);
                      showToast(`Kuis selesai! Skor kamu: ${score}`, score >= 80 ? 'success' : 'info');
                    }}
                    className="px-5 py-2 bg-red-900 hover:bg-red-800 disabled:opacity-50 text-white font-bold text-xs rounded-xl shadow transition-all cursor-pointer"
                  >
                    Periksa Jawaban Sekarang
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setUserAnswers({});
                      setShowQuizResults(false);
                      showToast('Kuis direset. Silakan coba kembali!', 'info');
                    }}
                    className="flex items-center gap-1.5 px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold text-xs rounded-xl transition-all cursor-pointer"
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
