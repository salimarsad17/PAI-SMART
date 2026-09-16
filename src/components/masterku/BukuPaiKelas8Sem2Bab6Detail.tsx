import React, { useState } from 'react';
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
  Users,
  Brain,
  Award,
  BookmarkCheck,
  HeartHandshake,
  Eye,
  EyeOff,
  PenTool,
  Volume2,
  Flag,
  Landmark,
  Compass,
  FileText,
  Search,
  ChevronRight,
  HelpCircle,
  TreePine,
  Share2
} from 'lucide-react';
import {
  MATERI_KELAS_8_SEM_2_BAB_6,
  HukumTajwidNunTanwin,
  MufradatPerkata
} from '../../data/materiKelas8Sem2Bab6Data';
import { useToast } from '../common/Toast';

interface Props {
  onAskAI: (prompt: string) => void;
}

type Bab6K8SubTab =
  | 'qs-an-nisa-66'
  | 'tajwid-nun-tanwin'
  | 'mufradat-terjemah'
  | '4-keterampilan'
  | 'hikmah-cinta-tanah-air'
  | 'kuis-hots';

export const BukuPaiKelas8Sem2Bab6Detail: React.FC<Props> = ({ onAskAI }) => {
  const { showToast } = useToast();
  const [activeTab, setActiveTab] = useState<Bab6K8SubTab>('qs-an-nisa-66');

  // Filter Tajwid Table
  const [filterHukum, setFilterHukum] = useState<string>('Semua');
  const [searchTajwid, setSearchTajwid] = useState<string>('');

  // Interactive Hafalan Mode (Hide/Show Arabic text for self-testing)
  const [hideArabic, setHideArabic] = useState<boolean>(false);

  // Audio simulation state for reading practice
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);

  // Flashcard state for Mufradat
  const [currentFlashcardIndex, setCurrentFlashcardIndex] = useState<number>(0);
  const [showFlashcardMeaning, setShowFlashcardMeaning] = useState<boolean>(false);

  // Kuis HOTS State
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});
  const [showKuisResult, setShowKuisResult] = useState<boolean>(false);

  // Refleksi Karakter Checklist (8 dimensi)
  const [refleksiSikapChecked, setRefleksiSikapChecked] = useState<Record<number, boolean>>({});

  const materi = MATERI_KELAS_8_SEM_2_BAB_6;

  // Copy helper
  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    showToast(`${label} berhasil disalin!`, 'success');
  };

  // Filtered Tajwid items
  const filteredTajwidList = materi.hukumTajwidNunTanwinLengkap.daftarPenerapanPadaAyat.filter(item => {
    const matchHukum = filterHukum === 'Semua' || item.hukum === filterHukum;
    const matchSearch =
      searchTajwid.trim() === '' ||
      item.lafaz.toLowerCase().includes(searchTajwid.toLowerCase()) ||
      item.alasanKaidah.toLowerCase().includes(searchTajwid.toLowerCase()) ||
      item.ayatRujukan.toLowerCase().includes(searchTajwid.toLowerCase());
    return matchHukum && matchSearch;
  });

  // Calculate score
  const calculatedScore = showKuisResult
    ? Math.round(
        (materi.kuisHots.reduce((acc, q) => {
          return userAnswers[q.id] === q.kunciJawaban ? acc + 1 : acc;
        }, 0) /
          materi.kuisHots.length) *
          100
      )
    : 0;

  // Simulate audio playback for tartil
  const handlePlayAudioSimulation = () => {
    setIsPlayingAudio(true);
    showToast('Audio murottal tartil Q.S. An-Nisa: 66 sedang disimulasikan...', 'info');
    setTimeout(() => {
      setIsPlayingAudio(false);
      showToast('Selesai mendengarkan murottal Q.S. An-Nisa: 66', 'success');
    }, 4000);
  };

  return (
    <div className="space-y-6 text-slate-800">
      {/* ================= HEADER HERO ================= */}
      <div className="bg-gradient-to-r from-red-950 via-rose-900 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden border border-rose-700/50">
        <div className="absolute top-0 right-0 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
        <div className="relative z-10">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3 py-1 rounded-full text-xs font-black bg-amber-400 text-amber-950 flex items-center gap-1.5 shadow-sm">
              <Flag className="w-3.5 h-3.5 text-red-700" />
              Kelas VIII • Semester 2 • Bab 6
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-rose-800/80 text-rose-100 border border-rose-500/30">
              Elemen: {materi.elemenCp}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-slate-800/80 text-slate-200 border border-slate-600/30">
              Fase D (SMP/MTs)
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
              🇮🇩 Cinta Tanah Air & Tajwid Nun/Tanwin
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white mb-2">
            {materi.judulBab}
          </h2>
          <p className="text-rose-200 text-sm sm:text-base font-normal max-w-4xl leading-relaxed mb-4">
            {materi.subJudul}
          </p>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/15 text-xs sm:text-sm text-rose-50 leading-relaxed max-w-4xl">
            <p className="font-semibold text-amber-300 mb-1 flex items-center gap-1.5">
              <Lightbulb className="w-4 h-4" />
              Apersepsi Pembelajaran:
            </p>
            {materi.pengantar.apersepsi}
          </div>

          {/* Quick AI Prompt Button Bar */}
          <div className="mt-5 flex flex-wrap gap-2 pt-2 border-t border-rose-700/40">
            <button
              onClick={() =>
                onAskAI(
                  'Jelaskan kandungan mendalam Q.S. An-Nisa ayat 66 tentang penyetaraan cinta jiwa dengan cinta tanah air serta hadis-hadis terkait.'
                )
              }
              className="px-3.5 py-2 bg-amber-400 hover:bg-amber-300 text-amber-950 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all shadow-md cursor-pointer"
            >
              <Bot className="w-4 h-4" />
              Tanya AI: Tafsir Q.S. An-Nisa: 66
            </button>
            <button
              onClick={() =>
                onAskAI(
                  'Bagaimana cara membedakan 5 hukum nun sukun dan tanwin (Idzhar, Idgham Bighunnah/Bilaghunnah, Iqlab, Ikhfa) beserta contohnya pada Q.S. An-Nisa 66?'
                )
              }
              className="px-3.5 py-2 bg-white/15 hover:bg-white/25 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <Bot className="w-4 h-4 text-rose-300" />
              Tanya AI: Tajwid Nun Sukun & Tanwin
            </button>
            <button
              onClick={() =>
                onAskAI(
                  'Apa saja hikmah cinta tanah air dalam Islam dan bagaimana peran nyata pelajar muslim dalam mempraktikkannya di sekolah dan masyarakat?'
                )
              }
              className="px-3.5 py-2 bg-white/15 hover:bg-white/25 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <Bot className="w-4 h-4 text-amber-300" />
              Tanya AI: Hikmah & Peran Pelajar
            </button>
          </div>
        </div>
      </div>

      {/* ================= SUB-NAVIGATION TABS ================= */}
      <div className="flex overflow-x-auto no-scrollbar gap-2 pb-1 border-b border-slate-200">
        <button
          onClick={() => setActiveTab('qs-an-nisa-66')}
          className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
            activeTab === 'qs-an-nisa-66'
              ? 'bg-rose-700 text-white shadow-md'
              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          1. Q.S. An-Nisā': 66 & Hadits
        </button>

        <button
          onClick={() => setActiveTab('tajwid-nun-tanwin')}
          className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
            activeTab === 'tajwid-nun-tanwin'
              ? 'bg-rose-700 text-white shadow-md'
              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
          }`}
        >
          <Compass className="w-4 h-4" />
          2. Hukum Nun Sukun & Tanwin
        </button>

        <button
          onClick={() => setActiveTab('mufradat-terjemah')}
          className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
            activeTab === 'mufradat-terjemah'
              ? 'bg-rose-700 text-white shadow-md'
              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
          }`}
        >
          <FileText className="w-4 h-4" />
          3. Mufradat & Terjemahan
        </button>

        <button
          onClick={() => setActiveTab('4-keterampilan')}
          className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
            activeTab === '4-keterampilan'
              ? 'bg-rose-700 text-white shadow-md'
              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
          }`}
        >
          <PenTool className="w-4 h-4" />
          4. Penerapan Tajwid & 4 Keterampilan
        </button>

        <button
          onClick={() => setActiveTab('hikmah-cinta-tanah-air')}
          className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
            activeTab === 'hikmah-cinta-tanah-air'
              ? 'bg-rose-700 text-white shadow-md'
              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
          }`}
        >
          <HeartHandshake className="w-4 h-4" />
          5. Hikmah Cinta Tanah Air
        </button>

        <button
          onClick={() => setActiveTab('kuis-hots')}
          className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
            activeTab === 'kuis-hots'
              ? 'bg-rose-700 text-white shadow-md'
              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
          }`}
        >
          <Brain className="w-4 h-4" />
          6. Evaluasi & Kuis HOTS
        </button>
      </div>

      {/* ================= TAB 1: Q.S. AN-NISA: 66 & HADITS ================= */}
      {activeTab === 'qs-an-nisa-66' && (
        <div className="space-y-6">
          {/* Card Ayat */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-2xl bg-rose-100 text-rose-800 flex items-center justify-center font-black text-sm">
                  4:66
                </span>
                <div>
                  <h3 className="text-lg sm:text-xl font-black text-slate-900">
                    {materi.ayatUtama.surah} Ayat {materi.ayatUtama.ayatNomor}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">
                    Dalil Al-Qur'an tentang Fitrah Luhur Cinta Tanah Air
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePlayAudioSimulation}
                  disabled={isPlayingAudio}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                    isPlayingAudio
                      ? 'bg-amber-100 text-amber-800 animate-pulse'
                      : 'bg-rose-50 text-rose-700 hover:bg-rose-100'
                  }`}
                >
                  <Volume2 className="w-4 h-4" />
                  <span>{isPlayingAudio ? 'Memutar...' : 'Putar Murottal'}</span>
                </button>

                <button
                  onClick={() => setHideArabic(!hideArabic)}
                  className="px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center gap-1.5 transition-all"
                >
                  {hideArabic ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                  <span>{hideArabic ? 'Tampilkan Arab' : 'Tutup Arab (Uji Hafalan)'}</span>
                </button>

                <button
                  onClick={() =>
                    copyToClipboard(
                      `${materi.ayatUtama.teksArab}\n\n${materi.ayatUtama.terjemahanResmi}`,
                      'Teks Ayat & Terjemahan'
                    )
                  }
                  className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-all"
                  title="Salin Ayat"
                >
                  <Copy className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Arabic Box */}
            <div className="bg-rose-50/50 rounded-2xl p-6 sm:p-8 border border-rose-100 text-right">
              {hideArabic ? (
                <div className="py-8 text-center text-slate-400 italic text-sm">
                  Teks Arab disembunyikan untuk melatih ingatan hafalan mandiri. Klik "Tampilkan Arab" untuk memeriksa kembali.
                </div>
              ) : (
                <p className="font-serif text-2xl sm:text-3xl leading-[2.6] sm:leading-[2.8] text-slate-900 tracking-wide font-normal">
                  {materi.ayatUtama.teksArab}
                </p>
              )}
            </div>

            {/* Transliterasi & Terjemahan */}
            <div className="space-y-3 bg-slate-50 rounded-2xl p-5 border border-slate-100">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Transliterasi Latin Kemenag RI:
                </span>
                <p className="text-sm font-serif italic text-slate-700 leading-relaxed mt-0.5">
                  "{materi.ayatUtama.transliterasi}"
                </p>
              </div>
              <div className="pt-3 border-t border-slate-200/60">
                <span className="text-[11px] font-bold uppercase tracking-wider text-rose-800">
                  Terjemahan Resmi Kemenag RI:
                </span>
                <p className="text-sm sm:text-base font-medium text-slate-800 leading-relaxed mt-0.5">
                  "{materi.ayatUtama.terjemahanResmi}"
                </p>
              </div>
            </div>

            {/* Asbabun Nuzul */}
            <div className="bg-amber-50/80 rounded-2xl p-5 border border-amber-200/80 space-y-2">
              <div className="flex items-center gap-2 text-amber-900 font-bold text-sm">
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span>Asbabun Nuzul (Sebab Turunnya Ayat):</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {materi.ayatUtama.asbabunNuzul}
              </p>
            </div>

            {/* Kandungan Tafsir Analitis */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-rose-700" />
                Kandungan Tafsir Q.S. An-Nisā' Ayat 66:
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {materi.ayatUtama.kandunganTafsir.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white border border-slate-200/80 hover:border-rose-300 transition-all space-y-1.5 shadow-sm"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-rose-100 text-rose-800 flex items-center justify-center text-xs font-black">
                        {idx + 1}
                      </span>
                      <h5 className="font-bold text-slate-900 text-sm">
                        {item.poin}
                      </h5>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed pl-8">
                      {item.penjelasan}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Hadits-Hadits Terkait */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base sm:text-lg font-black text-slate-900 flex items-center gap-2">
                <Landmark className="w-5 h-5 text-rose-700" />
                Hadits Shahih & Dokumen Sejarah Cinta Tanah Air
              </h3>
              <span className="text-xs text-slate-500 font-medium">3 Rujukan Pokok</span>
            </div>

            <div className="space-y-4">
              {materi.haditsTerkait.map((hadits, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4 hover:border-rose-300 transition-all"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
                    <h4 className="font-black text-slate-900 text-sm sm:text-base text-rose-900">
                      {hadits.judul}
                    </h4>
                    <span className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 text-[11px] font-bold self-start sm:self-auto">
                      {hadits.perawi}
                    </span>
                  </div>

                  <div className="bg-rose-50/40 rounded-2xl p-4 sm:p-5 border border-rose-100 text-right">
                    <p className="font-serif text-lg sm:text-xl text-slate-900 leading-[2.3] font-normal">
                      {hadits.matanArab}
                    </p>
                  </div>

                  <div className="space-y-2 text-xs sm:text-sm text-slate-700">
                    <p className="font-serif italic text-slate-600">
                      "{hadits.transliterasi}"
                    </p>
                    <p className="font-medium text-slate-900 leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-100">
                      <strong className="text-rose-800">Artinya: </strong>
                      {hadits.terjemahan}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                    <div className="p-3 bg-amber-50/60 rounded-xl border border-amber-100 text-xs">
                      <span className="font-bold text-amber-900 block mb-1">
                        📖 Syarah (Penjelasan Hadits):
                      </span>
                      <p className="text-slate-700 leading-relaxed">
                        {hadits.syarahSingkat}
                      </p>
                    </div>
                    <div className="p-3 bg-emerald-50/60 rounded-xl border border-emerald-100 text-xs">
                      <span className="font-bold text-emerald-900 block mb-1">
                        🇮🇩 Relevansi untuk Pelajar Indonesia:
                      </span>
                      <p className="text-slate-700 leading-relaxed">
                        {hadits.relevansiKehidupan}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ================= TAB 2: HUKUM NUN SUKUN & TANWIN ================= */}
      {activeTab === 'tajwid-nun-tanwin' && (
        <div className="space-y-6">
          {/* Panduan Umum 5 Hukum */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            <div className="space-y-2">
              <span className="px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-bold">
                Kaidah Tajwid Esensial
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                Kaidah Lengkap Hukum Nun Sukun (نْ) dan Tanwin (ـًـــٍـــٌ)
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {materi.hukumTajwidNunTanwinLengkap.pengertianUmum}
              </p>
            </div>

            {/* 5 Cards Hukum */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {materi.hukumTajwidNunTanwinLengkap.limaHukum.map((hk, idx) => (
                <div
                  key={idx}
                  className={`rounded-2xl p-5 border transition-all space-y-3 ${
                    hk.nama.includes('Idzhar')
                      ? 'bg-emerald-50/50 border-emerald-200'
                      : hk.nama.includes('Bighunnah')
                      ? 'bg-blue-50/50 border-blue-200'
                      : hk.nama.includes('Bilaghunnah')
                      ? 'bg-amber-50/50 border-amber-200'
                      : hk.nama.includes('Iqlab')
                      ? 'bg-purple-50/50 border-purple-200'
                      : 'bg-rose-50/50 border-rose-200'
                  }`}
                >
                  <div className="flex items-center justify-between pb-2 border-b border-slate-200/60">
                    <div>
                      <h4 className="font-black text-slate-900 text-sm">
                        {hk.nama}
                      </h4>
                      <p className="text-xs text-slate-500 font-serif">
                        {hk.artiBahasa}
                      </p>
                    </div>
                    <span className="font-serif text-xl font-bold text-slate-800">
                      {hk.namaArab}
                    </span>
                  </div>

                  <div className="space-y-1.5 text-xs">
                    <div className="flex items-center justify-between bg-white/70 p-2 rounded-lg">
                      <span className="font-bold text-slate-600">Jumlah Huruf:</span>
                      <span className="font-black text-rose-800">{hk.jumlahHuruf} Huruf</span>
                    </div>

                    <div className="bg-white/70 p-2 rounded-lg">
                      <span className="font-bold text-slate-600 block mb-1">Daftar Huruf:</span>
                      <div className="flex flex-wrap gap-1">
                        {hk.daftarHuruf.map((hrf, hIdx) => (
                          <span
                            key={hIdx}
                            className="px-1.5 py-0.5 rounded bg-white text-slate-800 font-mono text-[11px] border border-slate-200"
                          >
                            {hrf}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="p-2.5 rounded-lg bg-white/90 space-y-1">
                      <span className="font-bold text-slate-800 block text-[11px]">
                        🎯 Cara Membunyikan:
                      </span>
                      <p className="text-slate-600 leading-relaxed text-[11px]">
                        {hk.caraMembunyikan}
                      </p>
                    </div>

                    {hk.catatanKhusus && (
                      <div className="p-2 rounded-lg bg-amber-100/70 text-[11px] text-amber-900 font-medium">
                        ⚠️ <strong>Penting: </strong> {hk.catatanKhusus}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tabel Interaktif Penerapan Tajwid */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
                  <Compass className="w-5 h-5 text-rose-700" />
                  Tabel Analisis Penerapan Tajwid pada Q.S. An-Nisā': 66 & Hadits
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  Pelajari setiap lafaz, identifikasi hukum, dan alasan kaidahnya
                </p>
              </div>

              {/* Filter controls */}
              <div className="flex flex-wrap items-center gap-2">
                <div className="relative">
                  <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Cari lafaz / alasan..."
                    value={searchTajwid}
                    onChange={e => setSearchTajwid(e.target.value)}
                    className="pl-8 pr-3 py-1.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-rose-500"
                  />
                </div>

                <select
                  value={filterHukum}
                  onChange={e => setFilterHukum(e.target.value)}
                  className="px-3 py-1.5 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-rose-500 bg-white"
                >
                  <option value="Semua">Semua Hukum</option>
                  <option value="Idzhar Halqi">Idzhar Halqi</option>
                  <option value="Idgham Bighunnah">Idgham Bighunnah</option>
                  <option value="Idgham Bilaghunnah">Idgham Bilaghunnah</option>
                  <option value="Iqlab">Iqlab</option>
                  <option value="Ikhfa Haqiqi">Ikhfa Haqiqi</option>
                </select>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50 text-slate-700">
                    <th className="py-3 px-3 font-bold">No</th>
                    <th className="py-3 px-3 font-bold">Lafaz Al-Qur'an / Hadits</th>
                    <th className="py-3 px-3 font-bold">Rujukan</th>
                    <th className="py-3 px-3 font-bold">Hukum Bacaan</th>
                    <th className="py-3 px-3 font-bold">Huruf Terkait</th>
                    <th className="py-3 px-3 font-bold">Alasan Kaidah</th>
                    <th className="py-3 px-3 font-bold">Cara Membaca</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredTajwidList.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="py-8 text-center text-slate-400 italic">
                        Tidak ada lafaz yang cocok dengan filter pencarian.
                      </td>
                    </tr>
                  ) : (
                    filteredTajwidList.map((item, idx) => (
                      <tr key={idx} className="hover:bg-rose-50/40 transition-all">
                        <td className="py-3 px-3 font-mono text-slate-400 font-bold">{idx + 1}</td>
                        <td className="py-3 px-3 font-serif text-lg font-bold text-slate-900 text-right sm:text-left">
                          {item.lafaz}
                        </td>
                        <td className="py-3 px-3 text-slate-600 whitespace-nowrap text-[11px] font-medium">
                          {item.ayatRujukan}
                        </td>
                        <td className="py-3 px-3">
                          <span
                            className={`px-2 py-0.5 rounded-full font-bold text-[11px] inline-block ${
                              item.hukum === 'Idzhar Halqi'
                                ? 'bg-emerald-100 text-emerald-800'
                                : item.hukum === 'Idgham Bighunnah'
                                ? 'bg-blue-100 text-blue-800'
                                : item.hukum === 'Idgham Bilaghunnah'
                                ? 'bg-amber-100 text-amber-800'
                                : item.hukum === 'Iqlab'
                                ? 'bg-purple-100 text-purple-800'
                                : 'bg-rose-100 text-rose-800'
                            }`}
                          >
                            {item.hukum}
                          </span>
                        </td>
                        <td className="py-3 px-3 font-bold text-slate-700 font-mono text-xs">
                          {item.huruf}
                        </td>
                        <td className="py-3 px-3 text-slate-700 text-xs leading-relaxed max-w-xs">
                          {item.alasanKaidah}
                        </td>
                        <td className="py-3 px-3 text-slate-600 text-xs italic leading-relaxed max-w-xs">
                          {item.caraMembaca}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* ================= TAB 3: MUFRADAT & TERJEMAHAN ================= */}
      {activeTab === 'mufradat-terjemah' && (
        <div className="space-y-6">
          {/* Flashcard Interaktif Mufradat */}
          <div className="bg-gradient-to-br from-rose-900 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-lg space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-rose-700/50">
              <div>
                <span className="px-2.5 py-0.5 rounded-full bg-amber-400 text-amber-950 font-bold text-[10px] uppercase">
                  Flashcard Interaktif
                </span>
                <h3 className="text-lg sm:text-xl font-black text-white mt-1">
                  Latihan Cepat Menghafal Mufradat Q.S. An-Nisā': 66
                </h3>
              </div>
              <span className="text-xs text-rose-200 font-medium">
                Kartu {currentFlashcardIndex + 1} dari {materi.ayatUtama.mufradat.length}
              </span>
            </div>

            {/* Flashcard Body */}
            {materi.ayatUtama.mufradat[currentFlashcardIndex] && (
              <div
                onClick={() => setShowFlashcardMeaning(!showFlashcardMeaning)}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 text-center cursor-pointer hover:bg-white/15 transition-all min-h-[200px] flex flex-col items-center justify-center space-y-3"
              >
                <span className="text-xs uppercase tracking-wider text-amber-300 font-bold">
                  {showFlashcardMeaning ? 'Terjemahan & Makna (Klik untuk balik)' : 'Kata Arab (Klik untuk balik)'}
                </span>

                {!showFlashcardMeaning ? (
                  <>
                    <p className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-wide">
                      {materi.ayatUtama.mufradat[currentFlashcardIndex].kataArab}
                    </p>
                    <p className="text-sm italic text-rose-200">
                      "{materi.ayatUtama.mufradat[currentFlashcardIndex].transliterasi}"
                    </p>
                  </>
                ) : (
                  <>
                    <p className="text-xl sm:text-2xl font-black text-amber-300">
                      {materi.ayatUtama.mufradat[currentFlashcardIndex].arti}
                    </p>
                    <p className="text-xs sm:text-sm text-rose-100 max-w-lg leading-relaxed">
                      💡 {materi.ayatUtama.mufradat[currentFlashcardIndex].maknaPelajaran}
                    </p>
                  </>
                )}
              </div>
            )}

            {/* Flashcard Navigation */}
            <div className="flex items-center justify-between pt-2">
              <button
                onClick={() => {
                  setCurrentFlashcardIndex(prev => (prev > 0 ? prev - 1 : materi.ayatUtama.mufradat.length - 1));
                  setShowFlashcardMeaning(false);
                }}
                className="px-4 py-2 rounded-xl bg-white/20 hover:bg-white/30 text-white text-xs font-bold transition-all"
              >
                ← Sebelumnya
              </button>
              <button
                onClick={() => setShowFlashcardMeaning(!showFlashcardMeaning)}
                className="px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-amber-950 text-xs font-bold transition-all"
              >
                {showFlashcardMeaning ? 'Lihat Arab' : 'Buka Terjemahan'}
              </button>
              <button
                onClick={() => {
                  setCurrentFlashcardIndex(prev => (prev < materi.ayatUtama.mufradat.length - 1 ? prev + 1 : 0));
                  setShowFlashcardMeaning(false);
                }}
                className="px-4 py-2 rounded-xl bg-white/20 hover:bg-white/30 text-white text-xs font-bold transition-all"
              >
                Selanjutnya →
              </button>
            </div>
          </div>

          {/* Tabel Lengkap Mufradat Perkata */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
                <FileText className="w-5 h-5 text-rose-700" />
                Daftar Mufradat Lengkap Perkata Q.S. An-Nisā': 66
              </h3>
              <span className="text-xs text-slate-500 font-medium">
                {materi.ayatUtama.mufradat.length} Kosakata Kunci
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {materi.ayatUtama.mufradat.map((mf, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-slate-50 hover:bg-rose-50/50 border border-slate-200/80 transition-all flex items-start gap-3"
                >
                  <span className="w-7 h-7 rounded-xl bg-rose-100 text-rose-800 font-bold text-xs flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <div className="space-y-1 flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-serif text-xl font-bold text-slate-900">
                        {mf.kataArab}
                      </span>
                      <span className="text-[11px] font-mono italic text-slate-500">
                        {mf.transliterasi}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm font-bold text-rose-900">
                      {mf.arti}
                    </p>
                    <p className="text-[11px] text-slate-600 leading-relaxed pt-1 border-t border-slate-200/60">
                      {mf.maknaPelajaran}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ================= TAB 4: 4 KETERAMPILAN & PENERAPAN TAJWID ================= */}
      {activeTab === '4-keterampilan' && (
        <div className="space-y-6">
          {/* Intro Box */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
            <span className="px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-bold">
              Pembelajaran Aktif Berbasis 4 Keterampilan
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900">
              Membaca Tartil, Menghafal Cepat, Menulis Khat Naskhi, & Menjelaskan
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Keterampilan Al-Qur'an terpadu yang memadukan pemahaman tajwid nun sukun/tanwin dengan praktik ibadah dan karakter kebangsaan.
            </p>
          </div>

          {/* 1. Membaca Tartil */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-rose-800">
              <BookOpen className="w-5 h-5" />
              <h4 className="font-black text-base sm:text-lg text-slate-900">
                1. Keterampilan Membaca Tartil (Penerapan Tajwid untuk Meningkatkan Kualitas Bacaan)
              </h4>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {materi.panduan4Keterampilan.membacaTartil.pengertian}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-2">
              {materi.panduan4Keterampilan.membacaTartil.pilarPenerapanTajwid.map((pil, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5"
                >
                  <h5 className="font-bold text-slate-900 text-sm text-rose-900">
                    {pil.aspek}
                  </h5>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {pil.deskripsi}
                  </p>
                  <div className="p-2 bg-emerald-50 rounded-xl text-[11px] text-emerald-900 font-medium">
                    💡 <strong>Tips Tajwid: </strong> {pil.tipsPraktis}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 text-xs space-y-2">
              <span className="font-bold text-amber-900 block">
                ✨ Adab-Adab Membaca Al-Qur'an:
              </span>
              <ul className="list-disc list-inside space-y-1 text-slate-700">
                {materi.panduan4Keterampilan.membacaTartil.adabMembaca.map((ad, idx) => (
                  <li key={idx}>{ad}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* 2. Menghafal Cepat */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-rose-800">
              <Sparkles className="w-5 h-5" />
              <h4 className="font-black text-base sm:text-lg text-slate-900">
                2. Keterampilan Menghafal: {materi.panduan4Keterampilan.menghafalCepat.metode}
              </h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {materi.panduan4Keterampilan.menghafalCepat.targetHafalanBertahap.map((tahap, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-rose-50/50 border border-rose-200 space-y-2 text-xs"
                >
                  <span className="px-2 py-0.5 rounded-full bg-rose-700 text-white font-bold text-[10px]">
                    {tahap.tahap}
                  </span>
                  <p className="font-serif text-lg text-slate-900 text-right leading-relaxed font-bold">
                    {tahap.potonganAyat}
                  </p>
                  <p className="text-slate-600 text-[11px] pt-1 border-t border-rose-200/60">
                    🎯 <strong>Fokus Tajwid: </strong> {tahap.fokusLatihan}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs space-y-2">
              <span className="font-bold text-slate-900 block">
                🔄 4 Tahap Pengulangan Hafalan:
              </span>
              <ol className="list-decimal list-inside space-y-1 text-slate-700">
                {materi.panduan4Keterampilan.menghafalCepat.langkahLangkah.map((lgk, idx) => (
                  <li key={idx}>{lgk}</li>
                ))}
              </ol>
            </div>
          </div>

          {/* 3. Menulis Khat Naskhi */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-rose-800">
              <PenTool className="w-5 h-5" />
              <h4 className="font-black text-base sm:text-lg text-slate-900">
                3. Keterampilan Menulis Indah (Khat Naskhi Rasm Utsmani)
              </h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 text-xs">
              {materi.panduan4Keterampilan.menulisKhatKaidah.hurufPentingGaris.map((pos, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5"
                >
                  <span className="font-bold text-rose-900 text-xs block">
                    {pos.posisi}
                  </span>
                  <p className="font-mono text-sm font-bold text-slate-800 bg-white p-2 rounded-lg border border-slate-200">
                    {pos.huruf}
                  </p>
                  <p className="text-slate-600 leading-relaxed text-[11px]">
                    {pos.aturan}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200 text-xs text-blue-900">
              📝 <strong>Tugas Menulis Mandiri: </strong>
              {materi.panduan4Keterampilan.menulisKhatKaidah.latihanMenulis}
            </div>
          </div>

          {/* 4. Menjelaskan Refleksi Kebangsaan */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-rose-800">
              <Users className="w-5 h-5" />
              <h4 className="font-black text-base sm:text-lg text-slate-900">
                4. Keterampilan Menjelaskan Refleksi Konsep Cinta Tanah Air
              </h4>
            </div>

            <div className="space-y-3">
              {materi.panduan4Keterampilan.menjelaskanRefleksiKebangsaan.studiKasusKebangsaan.map(
                (kasus, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2 text-xs"
                  >
                    <span className="font-black text-slate-900 text-sm text-rose-900 block">
                      {kasus.judul}
                    </span>
                    <p className="text-slate-700 bg-white p-2.5 rounded-xl border border-slate-200">
                      <strong>Situasi Kasus: </strong> {kasus.kasus}
                    </p>
                    <p className="text-emerald-900 bg-emerald-50/70 p-2.5 rounded-xl border border-emerald-200">
                      <strong>💡 Tinjauan Islam & Kebangsaan: </strong> {kasus.solusiIslam}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      )}

      {/* ================= TAB 5: HIKMAH CINTA TANAH AIR ================= */}
      {activeTab === 'hikmah-cinta-tanah-air' && (
        <div className="space-y-6">
          {/* 6 Hikmah Utama */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            <div className="space-y-1">
              <span className="px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-bold">
                Nilai Karakter & Syariat
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                6 Hikmah Luhur Cinta Tanah Air (Hubbul Wathan) dalam Islam
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Mengapa Islam mewajibkan dan memuji rasa cinta kepada tanah air dan bangsa?
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {materi.hikmahCintaTanahAir.hikmahUtama.map((hk, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-rose-300 transition-all space-y-2"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="w-8 h-8 rounded-xl bg-rose-700 text-white font-black text-xs flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <h4 className="font-bold text-slate-900 text-sm">
                      {hk.poin}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed pl-10">
                    {hk.penjelasan}
                  </p>
                  {hk.dalilPendukung && (
                    <div className="ml-10 p-2 rounded-xl bg-rose-50 text-[11px] text-rose-900 font-medium border border-rose-100">
                      📜 <strong>Landasan Dalil: </strong> {hk.dalilPendukung}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Matriks Perilaku Pelajar */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center gap-2">
              <Flag className="w-5 h-5 text-rose-700" />
              <h3 className="text-lg font-black text-slate-900">
                Matriks Aksi Nyata Pelajar Muslim di Berbagai Lingkungan
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {materi.hikmahCintaTanahAir.matriksPerilakuPelajar.map((ling, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3"
                >
                  <h4 className="font-bold text-slate-900 text-sm text-rose-900 pb-2 border-b border-slate-200">
                    {ling.lingkungan}
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-700">
                    {ling.tindakanNyata.map((tind, tIdx) => (
                      <li key={tIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{tind}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Instrumen Refleksi Diri 8 Dimensi */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div>
                <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
                  <BookmarkCheck className="w-5 h-5 text-rose-700" />
                  Instrumen Evaluasi Sikap & Karakter Kebangsaan (8 Indikator)
                </h3>
                <p className="text-xs text-slate-500">
                  Beri tanda centang pada indikator yang sudah konsisten kamu terapkan sehari-hari
                </p>
              </div>
              <span className="text-xs font-bold text-rose-800 bg-rose-100 px-3 py-1 rounded-full">
                {Object.values(refleksiSikapChecked).filter(Boolean).length} / {materi.hikmahCintaTanahAir.refleksiDiri.length} Terpenuhi
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {materi.hikmahCintaTanahAir.refleksiDiri.map((ref, idx) => {
                const isChecked = !!refleksiSikapChecked[idx];
                return (
                  <div
                    key={idx}
                    onClick={() =>
                      setRefleksiSikapChecked(prev => ({
                        ...prev,
                        [idx]: !prev[idx]
                      }))
                    }
                    className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-start gap-3 ${
                      isChecked
                        ? 'bg-rose-50/60 border-rose-400'
                        : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded-lg flex items-center justify-center shrink-0 mt-0.5 border ${
                        isChecked
                          ? 'bg-rose-700 border-rose-700 text-white'
                          : 'border-slate-300 bg-white'
                      }`}
                    >
                      {isChecked && <Check className="w-3.5 h-3.5" />}
                    </div>
                    <div className="space-y-1 text-xs">
                      <span className="font-bold text-slate-900 block">
                        {ref.indikator}
                      </span>
                      <p className="text-slate-600 leading-relaxed">
                        {ref.deskripsi}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* ================= TAB 6: KUIS HOTS ================= */}
      {activeTab === 'kuis-hots' && (
        <div className="space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
              <div>
                <span className="px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-bold">
                  Evaluasi Mandiri Tingkat Tinggi (HOTS)
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
                  Kuis Penalaran Q.S. An-Nisā': 66, Tajwid Nun Sukun, & Cinta Tanah Air
                </h3>
                <p className="text-xs text-slate-500">
                  5 Soal Pilihan Ganda Berbasis Studi Kasus dan Analisis Kaidah
                </p>
              </div>

              {showKuisResult ? (
                <div className="flex items-center gap-3 bg-rose-50 p-3 rounded-2xl border border-rose-200">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">
                      Skor Penilaian
                    </span>
                    <span className="text-2xl font-black text-rose-800">
                      {calculatedScore} / 100
                    </span>
                  </div>
                  <button
                    onClick={() => {
                      setUserAnswers({});
                      setShowKuisResult(false);
                    }}
                    className="p-2 rounded-xl bg-white text-slate-700 hover:bg-slate-100 transition-all border border-slate-200 shadow-sm"
                    title="Ulangi Kuis"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setShowKuisResult(true)}
                  disabled={Object.keys(userAnswers).length < materi.kuisHots.length}
                  className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 transition-all ${
                    Object.keys(userAnswers).length === materi.kuisHots.length
                      ? 'bg-rose-700 hover:bg-rose-800 text-white shadow-md cursor-pointer'
                      : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                  }`}
                >
                  <Award className="w-4 h-4" />
                  <span>Periksa Jawaban ({Object.keys(userAnswers).length}/{materi.kuisHots.length})</span>
                </button>
              )}
            </div>

            {/* Questions List */}
            <div className="space-y-6">
              {materi.kuisHots.map((q, idx) => {
                const isSelected = userAnswers[q.id] !== undefined;
                const userChoice = userAnswers[q.id];
                const isCorrect = userChoice === q.kunciJawaban;

                return (
                  <div
                    key={q.id}
                    className={`p-6 rounded-2xl border transition-all space-y-4 ${
                      showKuisResult
                        ? isCorrect
                          ? 'bg-emerald-50/40 border-emerald-300'
                          : 'bg-rose-50/40 border-rose-300'
                        : 'bg-slate-50/60 border-slate-200'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="w-7 h-7 rounded-xl bg-slate-200 text-slate-800 font-black text-xs flex items-center justify-center">
                        {idx + 1}
                      </span>
                      {showKuisResult && (
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 ${
                            isCorrect
                              ? 'bg-emerald-100 text-emerald-800'
                              : 'bg-rose-100 text-rose-800'
                          }`}
                        >
                          {isCorrect ? (
                            <>
                              <CheckCircle2 className="w-4 h-4" /> Jawaban Tepat (+20 Poin)
                            </>
                          ) : (
                            <>
                              <XCircle className="w-4 h-4" /> Belum Tepat
                            </>
                          )}
                        </span>
                      )}
                    </div>

                    {/* Kasus */}
                    <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed font-serif whitespace-pre-line">
                      {q.kasus}
                    </div>

                    {/* Pertanyaan */}
                    <p className="font-bold text-slate-900 text-xs sm:text-sm">
                      {q.pertanyaan}
                    </p>

                    {/* Pilihan Ganda */}
                    <div className="space-y-2">
                      {q.pilihan.map((pil, pIdx) => {
                        const isChosen = userChoice === pIdx;
                        const isThisKey = q.kunciJawaban === pIdx;

                        let styleClass = 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50';

                        if (showKuisResult) {
                          if (isThisKey) {
                            styleClass = 'bg-emerald-100 border-emerald-400 text-emerald-950 font-bold';
                          } else if (isChosen && !isThisKey) {
                            styleClass = 'bg-rose-100 border-rose-300 text-rose-950';
                          }
                        } else if (isChosen) {
                          styleClass = 'bg-rose-700 border-rose-700 text-white font-bold';
                        }

                        return (
                          <button
                            key={pIdx}
                            disabled={showKuisResult}
                            onClick={() =>
                              setUserAnswers(prev => ({
                                ...prev,
                                [q.id]: pIdx
                              }))
                            }
                            className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm transition-all flex items-start gap-2.5 ${styleClass}`}
                          >
                            <span className="font-bold shrink-0">
                              {String.fromCharCode(65 + pIdx)}.
                            </span>
                            <span className="leading-relaxed">
                              {pil.replace(/^[A-D]\.\s*/, '')}
                            </span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Pembahasan Box */}
                    {showKuisResult && (
                      <div className="p-4 rounded-xl bg-white border border-slate-200 text-xs space-y-1.5 pt-3">
                        <span className="font-bold text-slate-900 block flex items-center gap-1.5 text-rose-800">
                          <Brain className="w-4 h-4" /> Pembahasan Analitis:
                        </span>
                        <p className="text-slate-600 leading-relaxed">
                          {q.pembahasan}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
