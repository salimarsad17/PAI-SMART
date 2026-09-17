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
  Users,
  Brain,
  Award,
  BookmarkCheck,
  HeartHandshake,
  Eye,
  EyeOff,
  PenTool,
  Scale,
  Compass,
  FileText,
  Volume2,
  VolumeX,
  Play,
  Pause,
  HelpCircle,
  GraduationCap,
  Sparkle,
  ArrowRight,
  Filter,
  CheckSquare,
  Square
} from 'lucide-react';
import {
  MATERI_KELAS_9_SEM_1_BAB_1,
  HukumMimSukunItem,
  MufradatAyatBab1,
  HaditsIlmuItem
} from '../../data/materiKelas9Sem1Bab1Data';
import { useToast } from '../common/Toast';

interface Props {
  onAskAI: (prompt: string) => void;
}

type Bab1K9SubTab =
  | 'ringkasan'
  | 'ayat-mujadilah'
  | 'ayat-zumar'
  | 'hukum-mim-sukun'
  | 'hadits-keterampilan'
  | 'hikmah-kasus'
  | 'kuis-hots';

export const BukuPaiKelas9Sem1Bab1Detail: React.FC<Props> = ({ onAskAI }) => {
  const { showToast } = useToast();
  const [activeTab, setActiveTab] = useState<Bab1K9SubTab>('ringkasan');

  // Filter Tajwid Mim Sukun Table
  const [filterHukumTajwid, setFilterHukumTajwid] = useState<'Semua' | 'Ikhfa Syafawi' | 'Idgham Mimi (Mutamatsilain)' | 'Idzhar Syafawi'>('Semua');
  const [filterAyatRujukan, setFilterAyatRujukan] = useState<string>('Semua');

  // Interactive Hafalan Mode (Hide/Show Arabic or Latin for self-testing)
  const [hideArabicMujadilah, setHideArabicMujadilah] = useState<boolean>(false);
  const [hideLatinMujadilah, setHideLatinMujadilah] = useState<boolean>(false);
  const [hideArabicZumar, setHideArabicZumar] = useState<boolean>(false);
  const [hideLatinZumar, setHideLatinZumar] = useState<boolean>(false);

  // Audio Player State for recitation
  const [currentPlayingAudio, setCurrentPlayingAudio] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Kuis HOTS State
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});
  const [showKuisResult, setShowKuisResult] = useState(false);

  // Muhasabah Checklist State
  const [muhasabahChecked, setMuhasabahChecked] = useState<Record<number, boolean>>({});

  // Studi Kasus expansion
  const [openKasusIndex, setOpenKasusIndex] = useState<number | null>(0);

  const materi = MATERI_KELAS_9_SEM_1_BAB_1;

  // Copy helper
  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    showToast(`${label} berhasil disalin!`, 'success');
  };

  // Audio handler
  const handlePlayAudio = (url: string) => {
    if (currentPlayingAudio === url) {
      audioRef.current?.pause();
      setCurrentPlayingAudio(null);
      return;
    }

    if (audioRef.current) {
      audioRef.current.pause();
    }

    const newAudio = new Audio(url);
    audioRef.current = newAudio;
    setCurrentPlayingAudio(url);

    newAudio.play().catch(err => {
      console.error('Audio error:', err);
      showToast('Gagal memutar audio tilawah. Pastikan koneksi internet stabil.', 'error');
      setCurrentPlayingAudio(null);
    });

    newAudio.onended = () => {
      setCurrentPlayingAudio(null);
    };
  };

  // Filtered Mim Sukun list
  const filteredMimSukunList = materi.hukumMimSukunLengkap.daftarPenerapanPadaAyat.filter(item => {
    const matchHukum = filterHukumTajwid === 'Semua' || item.hukum === filterHukumTajwid;
    const matchAyat = filterAyatRujukan === 'Semua' || item.ayatRujukan.includes(filterAyatRujukan);
    return matchHukum && matchAyat;
  });

  // Calculate Quiz Score
  const calculatedScore = showKuisResult
    ? Math.round(
        (materi.kuisHots.reduce((acc, q) => (userAnswers[q.id] === q.kunciJawaban ? acc + 1 : acc), 0) /
          materi.kuisHots.length) *
          100
      )
    : 0;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-emerald-100 overflow-hidden">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-emerald-800 via-teal-800 to-emerald-900 text-white p-6 md:p-8 relative overflow-hidden">
        <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 bg-amber-400 text-amber-950 font-black text-xs rounded-full uppercase tracking-wider">
              {materi.fase} • {materi.semester}
            </span>
            <span className="px-3 py-1 bg-emerald-700/80 text-emerald-100 font-semibold text-xs rounded-full flex items-center gap-1.5">
              <Sparkle className="w-3.5 h-3.5 text-amber-300" />
              Bab {materi.babNumber} • {materi.elemenCp}
            </span>
            <span className="px-3 py-1 bg-teal-700/60 text-teal-100 text-xs rounded-full">
              Buku Resmi Kurikulum Merdeka PAI SMP
            </span>
          </div>

          <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-snug">
            {materi.judulBab}
          </h2>

          <p className="text-emerald-100 text-sm md:text-base leading-relaxed max-w-4xl">
            {materi.subJudul}
          </p>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            <button
              onClick={() => onAskAI("Jelaskan secara mendalam intisari materi PAI Kelas IX Semester 1 Bab 1 tentang Semangat Keilmuan dalam Q.S. Al-Mujadilah: 11 dan Q.S. Az-Zumar: 9 serta hukum mim sukun.")}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-400 to-amber-500 text-amber-950 rounded-xl font-bold text-xs hover:from-amber-300 hover:to-amber-400 transition-all shadow-md cursor-pointer"
            >
              <Bot className="w-4 h-4 text-amber-900" />
              <span>Tanya Masterku AI tentang Bab 1 Ini</span>
            </button>

            <button
              onClick={() => copyToClipboard(`${materi.ayat1.teksArab}\n\n${materi.ayat1.terjemahanResmi}`, 'Q.S. Al-Mujādilah: 11')}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-emerald-700/60 hover:bg-emerald-700 text-white rounded-xl text-xs font-semibold transition-all cursor-pointer"
            >
              <Copy className="w-3.5 h-3.5" />
              <span>Salin Q.S. Al-Mujādilah: 11</span>
            </button>

            <button
              onClick={() => copyToClipboard(`${materi.ayat2.teksArab}\n\n${materi.ayat2.terjemahanResmi}`, 'Q.S. Az-Zumar: 9')}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-teal-700/60 hover:bg-teal-700 text-white rounded-xl text-xs font-semibold transition-all cursor-pointer"
            >
              <Copy className="w-3.5 h-3.5" />
              <span>Salin Q.S. Az-Zumar: 9</span>
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Sub-Tabs */}
      <div className="flex border-b border-emerald-100 bg-emerald-50/50 overflow-x-auto scrollbar-none px-4 pt-2 gap-1.5">
        <button
          onClick={() => setActiveTab('ringkasan')}
          className={`px-4 py-3 text-xs md:text-sm font-bold whitespace-nowrap transition-all border-b-2 flex items-center gap-2 cursor-pointer ${
            activeTab === 'ringkasan'
              ? 'border-emerald-600 text-emerald-800 bg-white rounded-t-xl shadow-xs'
              : 'border-transparent text-slate-600 hover:text-emerald-700'
          }`}
        >
          <BookOpen className="w-4 h-4 text-emerald-600" />
          <span>Ringkasan & Apersepsi</span>
        </button>

        <button
          onClick={() => setActiveTab('ayat-mujadilah')}
          className={`px-4 py-3 text-xs md:text-sm font-bold whitespace-nowrap transition-all border-b-2 flex items-center gap-2 cursor-pointer ${
            activeTab === 'ayat-mujadilah'
              ? 'border-emerald-600 text-emerald-800 bg-white rounded-t-xl shadow-xs'
              : 'border-transparent text-slate-600 hover:text-emerald-700'
          }`}
        >
          <Sparkles className="w-4 h-4 text-emerald-600" />
          <span>1. Q.S. Al-Mujādilah: 11</span>
        </button>

        <button
          onClick={() => setActiveTab('ayat-zumar')}
          className={`px-4 py-3 text-xs md:text-sm font-bold whitespace-nowrap transition-all border-b-2 flex items-center gap-2 cursor-pointer ${
            activeTab === 'ayat-zumar'
              ? 'border-emerald-600 text-emerald-800 bg-white rounded-t-xl shadow-xs'
              : 'border-transparent text-slate-600 hover:text-emerald-700'
          }`}
        >
          <Sparkle className="w-4 h-4 text-teal-600" />
          <span>2. Q.S. Az-Zumar: 9</span>
        </button>

        <button
          onClick={() => setActiveTab('hukum-mim-sukun')}
          className={`px-4 py-3 text-xs md:text-sm font-bold whitespace-nowrap transition-all border-b-2 flex items-center gap-2 cursor-pointer ${
            activeTab === 'hukum-mim-sukun'
              ? 'border-emerald-600 text-emerald-800 bg-white rounded-t-xl shadow-xs'
              : 'border-transparent text-slate-600 hover:text-emerald-700'
          }`}
        >
          <Scale className="w-4 h-4 text-emerald-600" />
          <span>3. Hukum Mim Sukun (مْ)</span>
        </button>

        <button
          onClick={() => setActiveTab('hadits-keterampilan')}
          className={`px-4 py-3 text-xs md:text-sm font-bold whitespace-nowrap transition-all border-b-2 flex items-center gap-2 cursor-pointer ${
            activeTab === 'hadits-keterampilan'
              ? 'border-emerald-600 text-emerald-800 bg-white rounded-t-xl shadow-xs'
              : 'border-transparent text-slate-600 hover:text-emerald-700'
          }`}
        >
          <GraduationCap className="w-4 h-4 text-emerald-600" />
          <span>4. Hadis & 4 Keterampilan</span>
        </button>

        <button
          onClick={() => setActiveTab('hikmah-kasus')}
          className={`px-4 py-3 text-xs md:text-sm font-bold whitespace-nowrap transition-all border-b-2 flex items-center gap-2 cursor-pointer ${
            activeTab === 'hikmah-kasus'
              ? 'border-emerald-600 text-emerald-800 bg-white rounded-t-xl shadow-xs'
              : 'border-transparent text-slate-600 hover:text-emerald-700'
          }`}
        >
          <Lightbulb className="w-4 h-4 text-amber-500" />
          <span>5. Hikmah & Studi Kasus</span>
        </button>

        <button
          onClick={() => setActiveTab('kuis-hots')}
          className={`px-4 py-3 text-xs md:text-sm font-bold whitespace-nowrap transition-all border-b-2 flex items-center gap-2 cursor-pointer ${
            activeTab === 'kuis-hots'
              ? 'border-emerald-600 text-emerald-800 bg-white rounded-t-xl shadow-xs'
              : 'border-transparent text-slate-600 hover:text-emerald-700'
          }`}
        >
          <Brain className="w-4 h-4 text-rose-600" />
          <span>6. Kuis HOTS</span>
          <span className="px-1.5 py-0.2 bg-rose-100 text-rose-700 rounded-full text-[10px] font-black">
            5 Soal
          </span>
        </button>
      </div>

      {/* Main Content Area */}
      <div className="p-6 md:p-8 space-y-8">
        {/* ============================================================
            TAB 1: RINGKASAN & APERSEPSI
        ============================================================ */}
        {activeTab === 'ringkasan' && (
          <div className="space-y-8 animate-fadeIn">
            {/* Apersepsi Box */}
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50/60 p-6 md:p-8 rounded-2xl border border-emerald-200/80 shadow-xs space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-emerald-600 text-white rounded-xl shadow-xs">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-black text-slate-900">
                    Apersepsi: Mengapa Islam Mewajibkan Menuntut Ilmu?
                  </h3>
                  <p className="text-xs font-semibold text-emerald-700">
                    Fondasi Karakter Generasi Qur'ani Berkemajuan
                  </p>
                </div>
              </div>
              <p className="text-slate-700 text-sm md:text-base leading-relaxed text-justify">
                {materi.pengantar.apersepsi}
              </p>
            </div>

            {/* 4 Pilar Inti Bab 1 Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-5 rounded-2xl bg-gradient-to-br from-amber-50 to-amber-100/50 border border-amber-200 space-y-2">
                <div className="w-9 h-9 rounded-xl bg-amber-500 text-white flex items-center justify-center font-black text-base shadow-xs">
                  1
                </div>
                <h4 className="font-black text-slate-900 text-sm">Q.S. Al-Mujādilah: 11</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Perintah berlapang-lapang dalam majelis ilmu (Tafassuh fil Majalis) dan janji Allah mengangkat derajat orang beriman dan berilmu.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-gradient-to-br from-teal-50 to-teal-100/50 border border-teal-200 space-y-2">
                <div className="w-9 h-9 rounded-xl bg-teal-600 text-white flex items-center justify-center font-black text-base shadow-xs">
                  2
                </div>
                <h4 className="font-black text-slate-900 text-sm">Q.S. Az-Zumar: 9</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Karakter Ulul Albab yang tunduk beribadah di waktu malam (Qanit Lail), takut azab akhirat, dan ketidaksetaraan antara orang berilmu vs jahil.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100/50 border border-emerald-200 space-y-2">
                <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-black text-base shadow-xs">
                  3
                </div>
                <h4 className="font-black text-slate-900 text-sm">Hukum Mim Sukun (مْ)</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Penguasaan 3 hukum tajwid mim sukun: Ikhfa Syafawi (huruf Ba'), Idgham Mimi (huruf Mim), dan Idzhar Syafawi (26 huruf lainnya, khusus Wawu & Fa').
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100/50 border border-blue-200 space-y-2">
                <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center font-black text-base shadow-xs">
                  4
                </div>
                <h4 className="font-black text-slate-900 text-sm">Hadis & 4 Keterampilan</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Hadis kewajiban menuntut ilmu (Ibnu Majah 224, Muslim 2699) serta 4 keterampilan: membaca tartil, menghafal, menulis Naskhi, dan syarah reflektif.
                </p>
              </div>
            </div>

            {/* Tujuan Pembelajaran */}
            <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-teal-600 text-white rounded-xl">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-slate-900">
                    Tujuan Pembelajaran Capaian (CP 2026)
                  </h3>
                  <p className="text-xs text-slate-500">
                    Target kompetensi yang wajib dikuasai siswa pada akhir Bab 1
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                {materi.pengantar.tujuanPembelajaran.map((tujuan, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="text-xs md:text-sm text-slate-700 leading-relaxed font-medium">
                      {tujuan}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Kata Kunci Pelajaran */}
            <div className="p-5 rounded-2xl bg-emerald-900 text-white flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-xs font-bold text-amber-300 uppercase tracking-wider">
                  Kamus Istilah Inti
                </span>
                <p className="text-sm font-semibold text-emerald-100">
                  Kata Kunci Penting dalam Bab 1:
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {materi.pengantar.kataKunci.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-lg bg-emerald-800/80 text-emerald-100 text-xs font-medium border border-emerald-700/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ============================================================
            TAB 2: Q.S. AL-MUJADILAH: 11
        ============================================================ */}
        {activeTab === 'ayat-mujadilah' && (
          <div className="space-y-8 animate-fadeIn">
            {/* Ayat Display Box */}
            <div className="bg-gradient-to-b from-emerald-50/70 to-white p-6 md:p-8 rounded-3xl border-2 border-emerald-200/80 shadow-sm space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-emerald-100 pb-4">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-emerald-700 text-white rounded-xl text-xs font-black">
                    Q.S. Al-Mujādilah [58]: 11
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    Juz 28 • Surah Madaniyyah
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  {/* Play Audio Button */}
                  <button
                    onClick={() => handlePlayAudio(materi.ayat1.audioUrl)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                      currentPlayingAudio === materi.ayat1.audioUrl
                        ? 'bg-rose-600 text-white'
                        : 'bg-emerald-600 hover:bg-emerald-700 text-white'
                    }`}
                  >
                    {currentPlayingAudio === materi.ayat1.audioUrl ? (
                      <>
                        <Pause className="w-3.5 h-3.5" />
                        <span>Jeda Tilawah</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-3.5 h-3.5" />
                        <span>Putar Tilawah Syaikh Alafasy</span>
                      </>
                    )}
                  </button>

                  {/* Toggle Arabic Hide for Memorization */}
                  <button
                    onClick={() => setHideArabicMujadilah(!hideArabicMujadilah)}
                    className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5"
                    title="Uji Hafalan (Sembunyikan/Tampilkan Teks Arab)"
                  >
                    {hideArabicMujadilah ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
                    <span>{hideArabicMujadilah ? 'Tampilkan Arab' : 'Uji Hafalan'}</span>
                  </button>

                  <button
                    onClick={() => copyToClipboard(materi.ayat1.teksArab, 'Teks Arab Q.S. Al-Mujādilah: 11')}
                    className="p-1.5 text-slate-500 hover:text-emerald-700 hover:bg-emerald-50 rounded-lg cursor-pointer"
                    title="Salin Teks Arab"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Arabic Text */}
              {!hideArabicMujadilah ? (
                <div className="text-right py-4 px-2">
                  <p
                    className="text-2xl md:text-3xl lg:text-4xl font-serif text-slate-900 leading-loose tracking-wide"
                    dir="rtl"
                  >
                    {materi.ayat1.teksArab}
                  </p>
                </div>
              ) : (
                <div className="py-10 text-center bg-slate-50 rounded-2xl border border-dashed border-slate-300 space-y-2">
                  <EyeOff className="w-8 h-8 text-slate-400 mx-auto" />
                  <p className="text-sm font-bold text-slate-600">
                    Teks Arab disembunyikan untuk melatih hafalan mandiri
                  </p>
                  <p className="text-xs text-slate-400">
                    Coba lafalkan dari ingatanmu, lalu klik "Tampilkan Arab" untuk memeriksa kebenarannya.
                  </p>
                </div>
              )}

              {/* Transliterasi Latin */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    Transliterasi Latin Resmi:
                  </span>
                  <button
                    onClick={() => setHideLatinMujadilah(!hideLatinMujadilah)}
                    className="text-xs text-emerald-700 font-semibold hover:underline cursor-pointer"
                  >
                    {hideLatinMujadilah ? 'Lihat Latin' : 'Sembunyikan Latin'}
                  </button>
                </div>
                {!hideLatinMujadilah && (
                  <p className="text-xs md:text-sm text-slate-700 italic font-sans leading-relaxed">
                    "{materi.ayat1.transliterasi}"
                  </p>
                )}
              </div>

              {/* Terjemahan Resmi */}
              <div className="p-4 rounded-xl bg-emerald-950 text-white space-y-2">
                <span className="px-2 py-0.5 bg-amber-400 text-amber-950 rounded text-[10px] font-black uppercase tracking-wider">
                  Terjemahan Resmi Kemenag RI
                </span>
                <p className="text-xs md:text-sm text-emerald-50 leading-relaxed font-medium">
                  "{materi.ayat1.terjemahanResmi}"
                </p>
              </div>
            </div>

            {/* Asbabun Nuzul Box */}
            <div className="p-6 rounded-2xl bg-amber-50/70 border border-amber-200/80 space-y-3">
              <div className="flex items-center gap-2 text-amber-900 font-black text-sm md:text-base">
                <BookmarkCheck className="w-5 h-5 text-amber-600" />
                <span>Asbabun Nuzul (Sebab Turunnya Ayat): Penghormatan terhadap Pahlawan Badar</span>
              </div>
              <p className="text-xs md:text-sm text-slate-700 leading-relaxed text-justify">
                {materi.ayat1.asbabunNuzul}
              </p>
            </div>

            {/* Kandungan Tafsir */}
            <div className="space-y-4">
              <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-emerald-600" />
                <span>Kandungan Makna & Tafsir Q.S. Al-Mujādilah [58]: 11</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {materi.ayat1.kandunganTafsir.map((tafsir, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white border border-emerald-100 shadow-xs hover:border-emerald-300 transition-all space-y-2"
                  >
                    <h4 className="font-black text-slate-900 text-sm text-emerald-800">
                      {tafsir.poin}
                    </h4>
                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                      {tafsir.penjelasan}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Mufradat Kata per Kata */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-black text-slate-900">
                    Mufradat (Kosakata Kata per Kata)
                  </h3>
                  <p className="text-xs text-slate-500">
                    Pahami makna harfiah dan tuntunan pelajaran di balik setiap kata suci
                  </p>
                </div>
                <button
                  onClick={() => onAskAI("Jelaskan analisis tata bahasa dan mufradat dari kata yarfa'illahu dan tafassahu dalam Q.S. Al-Mujadilah: 11.")}
                  className="text-xs font-bold text-emerald-700 hover:text-emerald-800 hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <Bot className="w-3.5 h-3.5" />
                  <span>Bedah Mufradat dengan AI</span>
                </button>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs md:text-sm">
                  <thead>
                    <tr className="bg-emerald-800 text-white font-bold">
                      <th className="p-3.5 text-right font-serif text-base">Lafaz Arab</th>
                      <th className="p-3.5">Transliterasi</th>
                      <th className="p-3.5">Arti Kosakata</th>
                      <th className="p-3.5">Makna Pelajaran</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 bg-white">
                    {materi.ayat1.mufradat.map((item, idx) => (
                      <tr key={idx} className="hover:bg-emerald-50/40 transition-colors">
                        <td className="p-3.5 text-right font-serif text-lg font-bold text-slate-900" dir="rtl">
                          {item.kataArab}
                        </td>
                        <td className="p-3.5 font-medium text-slate-700 italic">
                          {item.transliterasi}
                        </td>
                        <td className="p-3.5 font-bold text-emerald-900">
                          {item.arti}
                        </td>
                        <td className="p-3.5 text-slate-600 text-xs">
                          {item.maknaPelajaran}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ============================================================
            TAB 3: Q.S. AZ-ZUMAR: 9
        ============================================================ */}
        {activeTab === 'ayat-zumar' && (
          <div className="space-y-8 animate-fadeIn">
            {/* Ayat Display Box */}
            <div className="bg-gradient-to-b from-teal-50/70 to-white p-6 md:p-8 rounded-3xl border-2 border-teal-200/80 shadow-sm space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-teal-100 pb-4">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-teal-700 text-white rounded-xl text-xs font-black">
                    Q.S. Az-Zumar [39]: 9
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    Juz 23 • Surah Makkiyyah
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  {/* Play Audio Button */}
                  <button
                    onClick={() => handlePlayAudio(materi.ayat2.audioUrl)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                      currentPlayingAudio === materi.ayat2.audioUrl
                        ? 'bg-rose-600 text-white'
                        : 'bg-teal-600 hover:bg-teal-700 text-white'
                    }`}
                  >
                    {currentPlayingAudio === materi.ayat2.audioUrl ? (
                      <>
                        <Pause className="w-3.5 h-3.5" />
                        <span>Jeda Tilawah</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-3.5 h-3.5" />
                        <span>Putar Tilawah Syaikh Alafasy</span>
                      </>
                    )}
                  </button>

                  {/* Toggle Arabic Hide for Memorization */}
                  <button
                    onClick={() => setHideArabicZumar(!hideArabicZumar)}
                    className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5"
                    title="Uji Hafalan (Sembunyikan/Tampilkan Teks Arab)"
                  >
                    {hideArabicZumar ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
                    <span>{hideArabicZumar ? 'Tampilkan Arab' : 'Uji Hafalan'}</span>
                  </button>

                  <button
                    onClick={() => copyToClipboard(materi.ayat2.teksArab, 'Teks Arab Q.S. Az-Zumar: 9')}
                    className="p-1.5 text-slate-500 hover:text-teal-700 hover:bg-teal-50 rounded-lg cursor-pointer"
                    title="Salin Teks Arab"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Arabic Text */}
              {!hideArabicZumar ? (
                <div className="text-right py-4 px-2">
                  <p
                    className="text-2xl md:text-3xl lg:text-4xl font-serif text-slate-900 leading-loose tracking-wide"
                    dir="rtl"
                  >
                    {materi.ayat2.teksArab}
                  </p>
                </div>
              ) : (
                <div className="py-10 text-center bg-slate-50 rounded-2xl border border-dashed border-slate-300 space-y-2">
                  <EyeOff className="w-8 h-8 text-slate-400 mx-auto" />
                  <p className="text-sm font-bold text-slate-600">
                    Teks Arab disembunyikan untuk melatih hafalan mandiri
                  </p>
                  <p className="text-xs text-slate-400">
                    Coba lafalkan dari ingatanmu, lalu klik "Tampilkan Arab" untuk memeriksa kebenarannya.
                  </p>
                </div>
              )}

              {/* Transliterasi Latin */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    Transliterasi Latin Resmi:
                  </span>
                  <button
                    onClick={() => setHideLatinZumar(!hideLatinZumar)}
                    className="text-xs text-teal-700 font-semibold hover:underline cursor-pointer"
                  >
                    {hideLatinZumar ? 'Lihat Latin' : 'Sembunyikan Latin'}
                  </button>
                </div>
                {!hideLatinZumar && (
                  <p className="text-xs md:text-sm text-slate-700 italic font-sans leading-relaxed">
                    "{materi.ayat2.transliterasi}"
                  </p>
                )}
              </div>

              {/* Terjemahan Resmi */}
              <div className="p-4 rounded-xl bg-teal-950 text-white space-y-2">
                <span className="px-2 py-0.5 bg-amber-400 text-amber-950 rounded text-[10px] font-black uppercase tracking-wider">
                  Terjemahan Resmi Kemenag RI
                </span>
                <p className="text-xs md:text-sm text-teal-50 leading-relaxed font-medium">
                  "{materi.ayat2.terjemahanResmi}"
                </p>
              </div>
            </div>

            {/* Asbabun Nuzul Box */}
            <div className="p-6 rounded-2xl bg-teal-50/70 border border-teal-200/80 space-y-3">
              <div className="flex items-center gap-2 text-teal-900 font-black text-sm md:text-base">
                <BookmarkCheck className="w-5 h-5 text-teal-600" />
                <span>Asbabun Nuzul: Kontras Perilaku Ahli Tahajud vs Kaum Sombong Jahil</span>
              </div>
              <p className="text-xs md:text-sm text-slate-700 leading-relaxed text-justify">
                {materi.ayat2.asbabunNuzul}
              </p>
            </div>

            {/* Kandungan Tafsir */}
            <div className="space-y-4">
              <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-teal-600" />
                <span>Kandungan Makna & Tafsir Q.S. Az-Zumar [39]: 9</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {materi.ayat2.kandunganTafsir.map((tafsir, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white border border-teal-100 shadow-xs hover:border-teal-300 transition-all space-y-2"
                  >
                    <h4 className="font-black text-slate-900 text-sm text-teal-800">
                      {tafsir.poin}
                    </h4>
                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                      {tafsir.penjelasan}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Mufradat Kata per Kata */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-black text-slate-900">
                    Mufradat (Kosakata Kata per Kata)
                  </h3>
                  <p className="text-xs text-slate-500">
                    Telaah kosakata penting seperti qanitun, ulul albab, dan yahdzarul akhirah
                  </p>
                </div>
                <button
                  onClick={() => onAskAI("Jelaskan makna mendalam konsep Ulul Albab dan Qanit Lail dalam Q.S. Az-Zumar: 9.")}
                  className="text-xs font-bold text-teal-700 hover:text-teal-800 hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <Bot className="w-3.5 h-3.5" />
                  <span>Bedah Mufradat dengan AI</span>
                </button>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs md:text-sm">
                  <thead>
                    <tr className="bg-teal-800 text-white font-bold">
                      <th className="p-3.5 text-right font-serif text-base">Lafaz Arab</th>
                      <th className="p-3.5">Transliterasi</th>
                      <th className="p-3.5">Arti Kosakata</th>
                      <th className="p-3.5">Makna Pelajaran</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 bg-white">
                    {materi.ayat2.mufradat.map((item, idx) => (
                      <tr key={idx} className="hover:bg-teal-50/40 transition-colors">
                        <td className="p-3.5 text-right font-serif text-lg font-bold text-slate-900" dir="rtl">
                          {item.kataArab}
                        </td>
                        <td className="p-3.5 font-medium text-slate-700 italic">
                          {item.transliterasi}
                        </td>
                        <td className="p-3.5 font-bold text-teal-900">
                          {item.arti}
                        </td>
                        <td className="p-3.5 text-slate-600 text-xs">
                          {item.maknaPelajaran}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ============================================================
            TAB 4: HUKUM BACAAN MIM SUKUN (مْ)
        ============================================================ */}
        {activeTab === 'hukum-mim-sukun' && (
          <div className="space-y-8 animate-fadeIn">
            {/* Definisi & Pengantar */}
            <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-r from-emerald-900 to-teal-900 text-white space-y-3">
              <div className="flex items-center gap-2">
                <Scale className="w-5 h-5 text-amber-400" />
                <h3 className="text-lg md:text-xl font-black">
                  Kaidah Tajwid: Hukum Bacaan Mim Sukun (أَحْكَامُ الْمِيمِ السَّاكِنَةِ)
                </h3>
              </div>
              <p className="text-xs md:text-sm text-emerald-100 leading-relaxed">
                {materi.hukumMimSukunLengkap.definisiUmum}
              </p>
            </div>

            {/* Tiga Hukum Utama Card Deck */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              {materi.hukumMimSukunLengkap.tigaMacamHukum.map((hukum, idx) => (
                <div
                  key={idx}
                  className={`p-6 rounded-2xl border-2 space-y-4 flex flex-col justify-between ${
                    idx === 0
                      ? 'bg-amber-50/60 border-amber-300'
                      : idx === 1
                      ? 'bg-teal-50/60 border-teal-300'
                      : 'bg-emerald-50/60 border-emerald-300'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-serif text-lg font-bold text-slate-800" dir="rtl">
                        {hukum.namaArab}
                      </span>
                      <span
                        className={`px-2.5 py-1 rounded-lg text-xs font-black ${
                          idx === 0
                            ? 'bg-amber-500 text-white'
                            : idx === 1
                            ? 'bg-teal-600 text-white'
                            : 'bg-emerald-600 text-white'
                        }`}
                      >
                        {idx === 0 ? '1 Huruf (ب)' : idx === 1 ? '1 Huruf (م)' : '26 Huruf'}
                      </span>
                    </div>

                    <h4 className="text-base font-black text-slate-900">
                      {hukum.namaHukum}
                    </h4>

                    <div className="p-3 bg-white/80 rounded-xl border border-slate-200/80 space-y-1">
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                        Kaidah Ketentuan:
                      </span>
                      <p className="text-xs text-slate-700 leading-relaxed font-medium">
                        {hukum.kaidah}
                      </p>
                    </div>

                    <div className="p-3 bg-white/80 rounded-xl border border-slate-200/80 space-y-1">
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                        Cara Melafalkan:
                      </span>
                      <p className="text-xs text-slate-700 leading-relaxed">
                        {hukum.caraMembaca}
                      </p>
                    </div>

                    <div className="flex items-center justify-between text-xs font-semibold pt-1">
                      <span className="text-slate-500">Durasi Dengung:</span>
                      <span className="font-black text-slate-800">{hukum.durasiGhunnah}</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-white/90 border border-slate-200 text-[11px] text-slate-600 space-y-1 mt-3">
                    <span className="font-bold text-emerald-800 block">Catatan Penting:</span>
                    <p className="leading-snug">{hukum.catatanKhusus}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Peringatan Khusus Asyaddul Izhhar Box */}
            <div className="p-5 rounded-2xl bg-rose-50 border-2 border-rose-300 space-y-2">
              <div className="flex items-center gap-2 text-rose-900 font-black text-sm">
                <ShieldCheck className="w-5 h-5 text-rose-600" />
                <span>Peringatan Khusus: Asyaddu Izhhār (أَشَدُّ إِظْهَارًا) pada Huruf Wawu (و) dan Fa' (ف)</span>
              </div>
              <p className="text-xs md:text-sm text-rose-800 leading-relaxed">
                Imam Al-Jazari dalam <em>Matn Al-Jazariyyah</em> mengingatkan: <em>"Wahdzar lada wawin wa fa'an takhtafi, liqurbiha wal-ittihadi fa'rifi"</em> (Dan berhati-hatilah saat mim sukun bertemu Wawu dan Fa' jangan sampai kamu membacanya samar/ikhfa', karena dekatnya makhraj mim dengan fa' dan bersatunya makhraj mim dengan wawu di bibir). Ucapkanlah dengan merapatkan bibir secara tegas dan cepat tanpa dengung.
              </p>
            </div>

            {/* Interactive Filterable Table of Examples in Ayat */}
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                <div>
                  <h3 className="text-lg font-black text-slate-900">
                    Tabel Penerapan Hukum Mim Sukun dalam Ayat
                  </h3>
                  <p className="text-xs text-slate-500">
                    Analisis lafaz, hukum bacaan, alasan kaidah, dan cara membaca yang benar
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl">
                    <Filter className="w-3.5 h-3.5 text-slate-500 ml-1.5" />
                    <select
                      value={filterHukumTajwid}
                      onChange={e => setFilterHukumTajwid(e.target.value as any)}
                      className="bg-transparent text-xs font-bold text-slate-700 outline-none pr-2 py-1 cursor-pointer"
                    >
                      <option value="Semua">Semua Hukum</option>
                      <option value="Ikhfa Syafawi">Ikhfa Syafawi</option>
                      <option value="Idgham Mimi (Mutamatsilain)">Idgham Mimi</option>
                      <option value="Idzhar Syafawi">Idzhar Syafawi</option>
                    </select>
                  </div>

                  <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl">
                    <select
                      value={filterAyatRujukan}
                      onChange={e => setFilterAyatRujukan(e.target.value)}
                      className="bg-transparent text-xs font-bold text-slate-700 outline-none pr-2 py-1 cursor-pointer"
                    >
                      <option value="Semua">Semua Ayat</option>
                      <option value="Al-Mujādilah">Q.S. Al-Mujādilah</option>
                      <option value="Az-Zumar">Q.S. Az-Zumar</option>
                      <option value="Al-Fīl">Q.S. Al-Fil</option>
                      <option value="Al-Baqarah">Q.S. Al-Baqarah</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xs">
                <table className="w-full text-left border-collapse text-xs md:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white font-bold">
                      <th className="p-3.5 text-right font-serif text-base">Lafaz Ayat</th>
                      <th className="p-3.5">Ayat Rujukan</th>
                      <th className="p-3.5">Hukum Tajwid</th>
                      <th className="p-3.5">Kaidah Sebab</th>
                      <th className="p-3.5">Cara Membaca</th>
                      <th className="p-3.5">Tingkat Ketelitian</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 bg-white">
                    {filteredMimSukunList.map((item, idx) => (
                      <tr key={idx} className="hover:bg-slate-50 transition-colors">
                        <td className="p-3.5 text-right font-serif text-lg font-bold text-emerald-900" dir="rtl">
                          {item.lafaz}
                        </td>
                        <td className="p-3.5 font-bold text-slate-700">
                          {item.ayatRujukan}
                        </td>
                        <td className="p-3.5">
                          <span
                            className={`px-2.5 py-1 rounded-lg text-xs font-black inline-block ${
                              item.hukum === 'Ikhfa Syafawi'
                                ? 'bg-amber-100 text-amber-900 border border-amber-300'
                                : item.hukum.includes('Idgham')
                                ? 'bg-teal-100 text-teal-900 border border-teal-300'
                                : 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                            }`}
                          >
                            {item.hukum}
                          </span>
                        </td>
                        <td className="p-3.5 text-xs text-slate-600">
                          {item.alasanKaidah}
                        </td>
                        <td className="p-3.5 font-medium text-slate-800 text-xs">
                          {item.caraMembaca}
                        </td>
                        <td className="p-3.5 text-xs">
                          <span
                            className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                              item.tingkatKehatiHatian?.includes('Sangat')
                                ? 'bg-rose-100 text-rose-800 font-black'
                                : 'bg-slate-100 text-slate-700'
                            }`}
                          >
                            {item.tingkatKehatiHatian}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ============================================================
            TAB 5: HADIS & 4 KETERAMPILAN
        ============================================================ */}
        {activeTab === 'hadits-keterampilan' && (
          <div className="space-y-8 animate-fadeIn">
            {/* Hadits Terkait Menuntut Ilmu */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg md:text-xl font-black text-slate-900 flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-emerald-600" />
                    <span>Hadis-Hadis Shahih tentang Keutamaan & Kewajiban Menuntut Ilmu</span>
                  </h3>
                  <p className="text-xs text-slate-500">
                    Rujukan resmi hadis perawi terpercaya (Ibnu Majah, Muslim, Abu Dawud, At-Tirmidzi)
                  </p>
                </div>
                <button
                  onClick={() => onAskAI("Jelaskan syarah dan pelajaran penting dari hadits Thalabul ilmi faridhatun 'ala kulli muslim riwayat Ibnu Majah.")}
                  className="text-xs font-bold text-emerald-700 hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <Bot className="w-3.5 h-3.5" />
                  <span>Tanya AI tentang Hadis</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {materi.haditsTerkait.map((hadis, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-emerald-300 transition-all space-y-4 flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="px-2.5 py-1 bg-emerald-100 text-emerald-900 rounded-lg text-xs font-black">
                          {hadis.perawi}
                        </span>
                        <span className="text-[11px] font-bold text-emerald-700">
                          {hadis.derajat}
                        </span>
                      </div>

                      {/* Matan Arab */}
                      <div className="p-4 bg-emerald-50/50 rounded-xl border border-emerald-100 text-right">
                        <p className="text-xl font-serif text-slate-900 font-bold leading-relaxed" dir="rtl">
                          {hadis.matanArab}
                        </p>
                      </div>

                      {/* Transliterasi & Arti */}
                      <div className="space-y-1">
                        <p className="text-xs text-slate-500 italic">
                          "{hadis.transliterasi}"
                        </p>
                        <p className="text-xs md:text-sm text-slate-800 font-medium leading-relaxed">
                          "{hadis.terjemahan}"
                        </p>
                      </div>

                      {/* Syarah Singkat */}
                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-600 space-y-1">
                        <span className="font-bold text-slate-800 block">Syarah (Penjelasan Ulama):</span>
                        <p className="leading-relaxed">{hadis.syarahSingkat}</p>
                      </div>
                    </div>

                    {/* Relevansi */}
                    <div className="pt-2 border-t border-slate-100 flex items-start gap-2 text-xs text-emerald-800 font-medium">
                      <Sparkles className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <span>Relevansi Pelajar: {hadis.relevansiKehidupan}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 4 Panduan Keterampilan Al-Qur'an */}
            <div className="space-y-6 pt-4 border-t border-slate-200">
              <h3 className="text-lg md:text-xl font-black text-slate-900 flex items-center gap-2">
                <PenTool className="w-5 h-5 text-emerald-600" />
                <span>Panduan 4 Keterampilan Al-Qur'an (Membaca, Menghafal, Menulis, Menjelaskan)</span>
              </h3>

              {/* 1. Membaca Tartil */}
              <div className="p-6 rounded-2xl bg-white border border-emerald-200 space-y-3">
                <h4 className="text-base font-black text-emerald-900 flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center text-xs font-black">
                    A
                  </span>
                  <span>1. Panduan Keterampilan Membaca Tartil (Qira'ah Murattal)</span>
                </h4>
                <p className="text-xs md:text-sm text-slate-700 leading-relaxed">
                  {materi.panduan4Keterampilan.membacaTartil.definisi}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                  {materi.panduan4Keterampilan.membacaTartil.langkahPraktis.map((langkah, idx) => (
                    <div key={idx} className="p-3 bg-emerald-50/60 rounded-xl border border-emerald-100 text-xs text-slate-700">
                      {langkah}
                    </div>
                  ))}
                </div>
              </div>

              {/* 2. Menghafal Cepat */}
              <div className="p-6 rounded-2xl bg-white border border-teal-200 space-y-3">
                <h4 className="text-base font-black text-teal-900 flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-teal-600 text-white flex items-center justify-center text-xs font-black">
                    B
                  </span>
                  <span>2. Panduan Keterampilan Menghafal (Tahfizh Metode Tikrar 3x3x4)</span>
                </h4>
                <p className="text-xs md:text-sm text-slate-700 font-semibold text-teal-800">
                  {materi.panduan4Keterampilan.menghafalCepat.metode}
                </p>
                <div className="space-y-2">
                  {materi.panduan4Keterampilan.menghafalCepat.tahapan.map((tahap, idx) => (
                    <div key={idx} className="p-3 bg-teal-50/60 rounded-xl border border-teal-100 text-xs text-slate-700">
                      {tahap}
                    </div>
                  ))}
                </div>
                <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 font-medium">
                  <strong>Tips Muraja'ah Harian:</strong> {materi.panduan4Keterampilan.menghafalCepat.tipsMurajaah}
                </div>
              </div>

              {/* 3. Menulis Khat Naskhi */}
              <div className="p-6 rounded-2xl bg-white border border-amber-200 space-y-4">
                <h4 className="text-base font-black text-amber-900 flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-amber-500 text-white flex items-center justify-center text-xs font-black">
                    C
                  </span>
                  <span>3. Panduan Keterampilan Menulis Khat Naskhi (Aturan Garis Dasar Buku)</span>
                </h4>

                <div className="space-y-2">
                  {materi.panduan4Keterampilan.menulisKhatNaskhi.kaidahPokok.map((kaidah, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <span className="text-amber-600 font-bold">•</span>
                      <span>{kaidah}</span>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
                  {materi.panduan4Keterampilan.menulisKhatNaskhi.panduanHuruf.map((item, idx) => (
                    <div key={idx} className="p-4 bg-amber-50/50 rounded-xl border border-amber-200 space-y-2">
                      <span className="font-bold text-amber-950 text-xs block">{item.huruf}</span>
                      <p className="text-[11px] text-slate-600 leading-relaxed">{item.posisiGaris}</p>
                      <p className="text-[11px] text-amber-900 font-medium">{item.tipsMenulis}</p>
                    </div>
                  ))}
                </div>

                <div className="p-4 bg-slate-900 text-white rounded-xl space-y-1 text-xs">
                  <span className="font-bold text-amber-400 block">Tugas Latihan Menulis di Buku Garis:</span>
                  <p className="leading-relaxed text-slate-300">
                    {materi.panduan4Keterampilan.menulisKhatNaskhi.latihanMenulis}
                  </p>
                </div>
              </div>

              {/* 4. Menjelaskan & Kontekstualisasi */}
              <div className="p-6 rounded-2xl bg-white border border-blue-200 space-y-3">
                <h4 className="text-base font-black text-blue-900 flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center text-xs font-black">
                    D
                  </span>
                  <span>4. Panduan Keterampilan Menjelaskan & Kontekstualisasi di Era AI/Digital</span>
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                  {materi.panduan4Keterampilan.menjelaskanRefleksi.kontekstualisasiZamanNow.map((konteks, idx) => (
                    <div key={idx} className="p-3.5 bg-blue-50/60 rounded-xl border border-blue-100 text-xs text-slate-700 leading-relaxed">
                      {konteks}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ============================================================
            TAB 6: HIKMAH & STUDI KASUS
        ============================================================ */}
        {activeTab === 'hikmah-kasus' && (
          <div className="space-y-8 animate-fadeIn">
            {/* 6 Dimensi Hikmah Keilmuan */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg md:text-xl font-black text-slate-900 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-amber-500" />
                    <span>6 Dimensi Hikmah Luhur Semangat Keilmuan</span>
                  </h3>
                  <p className="text-xs text-slate-500">
                    Pelajaran berharga dari Q.S. Al-Mujādilah: 11, Q.S. Az-Zumar: 9, dan hadis Rasulullah Saw.
                  </p>
                </div>
                <button
                  onClick={() => onAskAI("Jelaskan 6 hikmah utama semangat keilmuan dalam Q.S. Al-Mujadilah: 11 dan Q.S. Az-Zumar: 9 bagi pelajar SMP.")}
                  className="text-xs font-bold text-emerald-700 hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <Bot className="w-3.5 h-3.5" />
                  <span>Tanya AI tentang Hikmah</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {materi.hikmahKeilmuan.map((hikmah, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-emerald-300 transition-all space-y-3 flex flex-col justify-between"
                  >
                    <div className="space-y-2">
                      <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-800 font-black text-xs flex items-center justify-center">
                        {idx + 1}
                      </div>
                      <h4 className="font-black text-slate-900 text-sm leading-snug">
                        {hikmah.dimensi}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {hikmah.uraian}
                      </p>
                    </div>
                    <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-100 text-xs text-emerald-900 font-medium">
                      <strong>Penerapan Siswa:</strong> {hikmah.aplikasiSiswa}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 3 Studi Kasus Reflektif */}
            <div className="space-y-4 pt-4 border-t border-slate-200">
              <h3 className="text-lg md:text-xl font-black text-slate-900 flex items-center gap-2">
                <Users className="w-5 h-5 text-teal-600" />
                <span>3 Studi Kasus Reflektif: Etika Penuntut Ilmu di Era Digital</span>
              </h3>
              <p className="text-xs text-slate-500">
                Diskusikan kasus-kasus nyata berikut bersama teman sekelompokmu
              </p>

              <div className="space-y-4">
                {materi.studiKasus.map((kasus, idx) => {
                  const isOpen = openKasusIndex === idx;
                  return (
                    <div
                      key={idx}
                      className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs transition-all"
                    >
                      <button
                        onClick={() => setOpenKasusIndex(isOpen ? null : idx)}
                        className="w-full p-5 text-left flex items-center justify-between gap-3 hover:bg-slate-50 transition-colors cursor-pointer"
                      >
                        <span className="font-black text-slate-900 text-sm md:text-base">
                          {kasus.judul}
                        </span>
                        <span className="text-xs font-bold text-teal-700 shrink-0">
                          {isOpen ? 'Tutup Telaah' : 'Buka Telaah & Solusi'}
                        </span>
                      </button>

                      {isOpen && (
                        <div className="p-5 pt-0 border-t border-slate-100 space-y-4 bg-slate-50/40">
                          <div className="p-4 bg-white rounded-xl border border-slate-200 text-xs md:text-sm text-slate-700 leading-relaxed">
                            <strong className="text-slate-900 block mb-1">Deskripsi Masalah:</strong>
                            {kasus.deskripsiKasus}
                          </div>

                          <div className="p-3.5 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-950 font-medium">
                            <strong>Pertanyaan Diskusi:</strong> {kasus.pertanyaanDiskusi}
                          </div>

                          <div className="p-4 bg-emerald-950 text-white rounded-xl space-y-1 text-xs md:text-sm">
                            <strong className="text-amber-400 block">Solusi & Tuntunan Nilai Islami:</strong>
                            <p className="text-emerald-50 leading-relaxed">{kasus.solusiIslami}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Lembar Muhasabah 8 Karakter Pelajar Muslim */}
            <div className="p-6 md:p-8 rounded-3xl bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-200 space-y-5">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-emerald-600 text-white rounded-xl">
                  <BookmarkCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-black text-slate-900">
                    Lembar Muhasabah Diri: 8 Indikator Karakter Pelajar Pecinta Ilmu
                  </h3>
                  <p className="text-xs text-slate-500">
                    Centang checklist berikut sebagai bentuk evaluasi diri secara jujur
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {materi.instrumenMuhasabah.map((item, idx) => {
                  const isChecked = !!muhasabahChecked[idx];
                  return (
                    <div
                      key={idx}
                      onClick={() => setMuhasabahChecked({ ...muhasabahChecked, [idx]: !isChecked })}
                      className={`p-4 rounded-xl border transition-all cursor-pointer flex items-start gap-3 select-none ${
                        isChecked
                          ? 'bg-emerald-100/70 border-emerald-400 text-emerald-950 shadow-xs'
                          : 'bg-white border-slate-200 text-slate-700 hover:border-emerald-200'
                      }`}
                    >
                      <button className="mt-0.5 text-emerald-700 shrink-0">
                        {isChecked ? <CheckSquare className="w-5 h-5" /> : <Square className="w-5 h-5 text-slate-400" />}
                      </button>
                      <div className="space-y-0.5">
                        <span className="font-black text-xs block">{item.indikator}</span>
                        <p className="text-[11px] leading-relaxed text-slate-600">{item.penjelasan}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="p-4 bg-white rounded-xl border border-emerald-200 flex items-center justify-between text-xs">
                <span className="font-bold text-slate-700">
                  Total Indikator yang Sudah Kamu Terapkan:
                </span>
                <span className="px-3 py-1 bg-emerald-600 text-white rounded-full font-black text-xs">
                  {Object.values(muhasabahChecked).filter(Boolean).length} dari 8 Karakter
                </span>
              </div>
            </div>
          </div>
        )}

        {/* ============================================================
            TAB 7: KUIS HOTS
        ============================================================ */}
        {activeTab === 'kuis-hots' && (
          <div className="space-y-8 animate-fadeIn">
            {/* Quiz Header */}
            <div className="p-6 md:p-8 rounded-3xl bg-gradient-to-r from-rose-600 to-pink-700 text-white flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Brain className="w-5 h-5 text-amber-300" />
                  <span className="px-2.5 py-0.5 bg-white/20 rounded text-[11px] font-black uppercase tracking-wider">
                    Evaluasi HOTS Mandiri
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-black">
                  Uji Penalaran Tingkat Tinggi (HOTS) Bab 1
                </h3>
                <p className="text-xs md:text-sm text-rose-100">
                  5 soal analisis kasus seputar Q.S. Al-Mujādilah: 11, Q.S. Az-Zumar: 9, dan tajwid Mim Sukun
                </p>
              </div>

              {showKuisResult && (
                <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/30 text-center shrink-0">
                  <span className="text-xs text-rose-100 block font-semibold">Skor Akhir Kamu:</span>
                  <span className="text-3xl font-black text-amber-300">{calculatedScore}</span>
                  <span className="text-xs text-rose-100 block">/ 100</span>
                </div>
              )}
            </div>

            {/* Questions List */}
            <div className="space-y-6">
              {materi.kuisHots.map((soal, qIdx) => {
                const selectedOption = userAnswers[soal.id];
                const isCorrect = selectedOption === soal.kunciJawaban;

                return (
                  <div
                    key={soal.id}
                    className={`p-6 rounded-2xl border-2 transition-all space-y-4 ${
                      showKuisResult
                        ? isCorrect
                          ? 'bg-emerald-50/50 border-emerald-400'
                          : 'bg-rose-50/50 border-rose-300'
                        : 'bg-white border-slate-200'
                    }`}
                  >
                    {/* Soal Header */}
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-1 bg-slate-900 text-white rounded-lg text-xs font-black">
                        Soal Nomor {soal.nomor}
                      </span>
                      {showKuisResult && (
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-black flex items-center gap-1.5 ${
                            isCorrect ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                          }`}
                        >
                          {isCorrect ? (
                            <>
                              <CheckCircle2 className="w-3.5 h-3.5" />
                              <span>Jawaban Benar</span>
                            </>
                          ) : (
                            <>
                              <XCircle className="w-3.5 h-3.5" />
                              <span>Jawaban Salah</span>
                            </>
                          )}
                        </span>
                      )}
                    </div>

                    {/* Kasus & Pertanyaan */}
                    <div className="space-y-2">
                      <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80 text-xs md:text-sm text-slate-700 leading-relaxed font-serif whitespace-pre-line">
                        {soal.kasus}
                      </div>
                      <p className="text-xs md:text-sm font-black text-slate-900 leading-relaxed">
                        {soal.pertanyaan}
                      </p>
                    </div>

                    {/* Options List */}
                    <div className="space-y-2 pt-1">
                      {soal.pilihan.map((opsi, optIdx) => {
                        const isChosen = selectedOption === optIdx;
                        const isTheKey = optIdx === soal.kunciJawaban;

                        let optBg = 'bg-white border-slate-200 hover:bg-slate-50';
                        if (showKuisResult) {
                          if (isTheKey) optBg = 'bg-emerald-100 border-emerald-500 font-black text-emerald-950';
                          else if (isChosen && !isTheKey) optBg = 'bg-rose-100 border-rose-400 font-bold text-rose-900';
                          else optBg = 'bg-white/60 border-slate-100 text-slate-400 opacity-60';
                        } else if (isChosen) {
                          optBg = 'bg-emerald-50 border-emerald-500 text-emerald-900 font-bold shadow-xs';
                        }

                        return (
                          <button
                            key={optIdx}
                            disabled={showKuisResult}
                            onClick={() => setUserAnswers({ ...userAnswers, [soal.id]: optIdx })}
                            className={`w-full p-3.5 rounded-xl border text-left text-xs md:text-sm transition-all flex items-start gap-3 cursor-pointer ${optBg}`}
                          >
                            <span className="w-6 h-6 rounded-full bg-slate-200/80 text-slate-700 text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                              {String.fromCharCode(65 + optIdx)}
                            </span>
                            <span className="leading-relaxed">{opsi}</span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Pembahasan Box when evaluated */}
                    {showKuisResult && (
                      <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-1 text-xs text-slate-700">
                        <strong className="text-emerald-900 block font-bold">Pembahasan HOTS:</strong>
                        <p className="leading-relaxed">{soal.pembahasan}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Evaluation Action Buttons */}
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs text-slate-600">
                {!showKuisResult ? (
                  <span>
                    Terjawab: {Object.keys(userAnswers).length} dari {materi.kuisHots.length} Soal
                  </span>
                ) : (
                  <span className="font-bold text-slate-800">
                    Evaluasi selesai! Silakan telaah pembahasan pada masing-masing soal di atas.
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2">
                {!showKuisResult ? (
                  <button
                    onClick={() => {
                      if (Object.keys(userAnswers).length < materi.kuisHots.length) {
                        showToast('Harap jawab semua soal sebelum melihat hasil', 'info');
                        return;
                      }
                      setShowKuisResult(true);
                      showToast('Hasil kuis berhasil dievaluasi!', 'success');
                    }}
                    className="px-6 py-2.5 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs font-black transition-all shadow-md cursor-pointer"
                  >
                    Periksa Jawaban Sekarang
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setUserAnswers({});
                      setShowKuisResult(false);
                      showToast('Kuis direset. Silakan coba kerjakan kembali!', 'info');
                    }}
                    className="px-5 py-2.5 bg-slate-800 hover:bg-slate-900 text-white rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer"
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
