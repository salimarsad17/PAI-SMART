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
  Volume2,
  FileText,
  Search,
  ChevronRight,
  ChevronLeft,
  HelpCircle,
  Compass,
  Star,
  Flame,
  UserCheck,
  Zap,
  Scale
} from 'lucide-react';
import {
  MATERI_KELAS_8_SEM_2_BAB_7,
  NabiRasulItem,
  RasulUlulAzmiDetail,
  SifatRasulItem,
  TugasRasulItem
} from '../../data/materiKelas8Sem2Bab7Data';
import { useToast } from '../common/Toast';

interface Props {
  onAskAI: (prompt: string) => void;
}

type Bab7K8SubTab =
  | '1-pengertian'
  | '2-dalil'
  | '3-nama-rasul'
  | '4-tugas-rasul'
  | '5-sifat-rasul'
  | '6-keteladanan'
  | '7-hikmah'
  | '8-kuis-hots';

export const BukuPaiKelas8Sem2Bab7Detail: React.FC<Props> = ({ onAskAI }) => {
  const { showToast } = useToast();
  const [activeTab, setActiveTab] = useState<Bab7K8SubTab>('1-pengertian');

  // Search filter for 25 Nabi & Rasul
  const [searchNabi, setSearchNabi] = useState<string>('');
  const [filterUlulAzmiOnly, setFilterUlulAzmiOnly] = useState<boolean>(false);
  const [selectedNabiModal, setSelectedNabiModal] = useState<NabiRasulItem | null>(null);

  // Spotlight active Ulul Azmi
  const [activeUlulAzmiIndex, setActiveUlulAzmiIndex] = useState<number>(0);

  // Active Sifat Tab: 'wajib' | 'mustahil' | 'jaiz'
  const [activeSifatCategory, setActiveSifatCategory] = useState<'wajib' | 'mustahil' | 'jaiz'>('wajib');

  // Interactive Self-Reflection State
  const [checkedReflection, setCheckedReflection] = useState<Record<number, boolean>>({});

  // Audio simulation / Speech synthesis
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);

  // Kuis HOTS State
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});
  const [showQuizResults, setShowQuizResults] = useState<boolean>(false);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    showToast(`${label} berhasil disalin ke clipboard!`, 'success');
  };

  const playVerseAudio = (text: string) => {
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
      showToast('Memutar lantunan pelafalan ayat...', 'info');
    } else {
      showToast('Browser Anda belum mendukung audio synthesizer.', 'info');
    }
  };

  // Filter 25 Nabi
  const filteredNabiList = MATERI_KELAS_8_SEM_2_BAB_7.namaNamaRasul.daftar25NabiRasul.filter(n => {
    const matchesSearch =
      n.nama.toLowerCase().includes(searchNabi.toLowerCase()) ||
      n.kaumTempat.toLowerCase().includes(searchNabi.toLowerCase()) ||
      (n.gelar && n.gelar.toLowerCase().includes(searchNabi.toLowerCase()));
    if (filterUlulAzmiOnly) {
      return matchesSearch && n.isUlulAzmi;
    }
    return matchesSearch;
  });

  // Calculate Quiz Score
  const calculateScore = () => {
    let correctCount = 0;
    MATERI_KELAS_8_SEM_2_BAB_7.soalEvaluasiHots.forEach(q => {
      if (userAnswers[q.id] === q.kunciJawaban) {
        correctCount++;
      }
    });
    return Math.round((correctCount / MATERI_KELAS_8_SEM_2_BAB_7.soalEvaluasiHots.length) * 100);
  };

  const handleSelectAnswer = (soalId: string, answerIndex: number) => {
    if (showQuizResults) return;
    setUserAnswers(prev => ({ ...prev, [soalId]: answerIndex }));
  };

  const resetQuiz = () => {
    setUserAnswers({});
    setShowQuizResults(false);
    showToast('Kuis direset. Silakan berlatih kembali!', 'info');
  };

  const toggleReflection = (index: number) => {
    setCheckedReflection(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const completedReflectionCount = Object.values(checkedReflection).filter(Boolean).length;

  return (
    <div className="space-y-6" id="buku-pai-k8-bab7-detail">
      {/* ================= HERO HEADER BANNER ================= */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-teal-900 via-emerald-900 to-slate-950 p-6 sm:p-8 text-white shadow-xl border border-teal-500/30">
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 -mb-16 w-60 h-60 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 bg-teal-500/20 text-teal-200 border border-teal-400/30 rounded-full text-xs font-black tracking-wider uppercase flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5" />
                PAI KELAS VIII • SEMESTER 2 • BAB VII
              </span>
              <span className="px-3 py-1 bg-amber-500/20 text-amber-200 border border-amber-400/30 rounded-full text-xs font-bold flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                Elemen: {MATERI_KELAS_8_SEM_2_BAB_7.elemenCp}
              </span>
              <span className="px-2.5 py-1 bg-emerald-500/20 text-emerald-200 rounded-full text-xs font-bold">
                Rukun Iman Ke-4
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white leading-tight">
              {MATERI_KELAS_8_SEM_2_BAB_7.judulBab}
            </h1>

            <p className="text-sm sm:text-base text-teal-100/90 leading-relaxed">
              {MATERI_KELAS_8_SEM_2_BAB_7.subJudul}
            </p>

            {/* Quick AI Help Prompts */}
            <div className="pt-2 flex flex-wrap gap-2 items-center">
              <span className="text-xs font-bold text-teal-300 flex items-center gap-1">
                <Bot className="w-3.5 h-3.5 text-amber-400" />
                Tanya Cepat Masterku AI:
              </span>
              <button
                onClick={() =>
                  onAskAI('Jelaskan pengertian iman kepada rasul Allah Swt. dan perbedaan mendasar antara nabi dengan rasul!')
                }
                className="px-2.5 py-1 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-xs font-medium text-teal-100 transition cursor-pointer"
              >
                ❓ Apa beda Nabi & Rasul?
              </button>
              <button
                onClick={() =>
                  onAskAI('Sebutkan 5 Rasul Ulul Azmi beserta ketabahan luar biasa dan mukjizat masing-masing!')
                }
                className="px-2.5 py-1 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-xs font-medium text-teal-100 transition cursor-pointer"
              >
                ⭐ 5 Rasul Ulul Azmi
              </button>
              <button
                onClick={() =>
                  onAskAI('Jelaskan 4 sifat wajib, 4 sifat mustahil, dan 1 sifat jaiz bagi para rasul Allah Swt. beserta dalilnya!')
                }
                className="px-2.5 py-1 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-xs font-medium text-teal-100 transition cursor-pointer"
              >
                💎 Sifat Wajib, Mustahil, & Jaiz
              </button>
              <button
                onClick={() =>
                  onAskAI('Bagaimana contoh meneladani sifat amanah dan tabligh rasul bagi seorang pelajar SMP?')
                }
                className="px-2.5 py-1 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-xs font-medium text-teal-100 transition cursor-pointer"
              >
                🎯 Teladan untuk Pelajar
              </button>
            </div>
          </div>

          <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-center gap-3 bg-white/5 p-4 rounded-2xl border border-white/10 backdrop-blur-sm">
            <div className="text-left md:text-right">
              <span className="text-xs text-teal-200 block">Total 25 Nabi & Rasul</span>
              <span className="text-xl font-black text-amber-300">5 Ulul Azmi</span>
            </div>
            <div className="h-8 w-px bg-white/20 md:hidden" />
            <div className="text-left md:text-right">
              <span className="text-xs text-teal-200 block">4 Sifat Wajib & Mustahil</span>
              <span className="text-sm font-bold text-emerald-300">1 Sifat Jaiz Manusiawi</span>
            </div>
          </div>
        </div>
      </div>

      {/* ================= NAVIGATION SUB-TABS (7 Pokok Bahasan Lengkap + Kuis HOTS) ================= */}
      <div className="bg-white dark:bg-slate-900 p-2 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 flex overflow-x-auto gap-1.5 no-scrollbar">
        <button
          onClick={() => setActiveTab('1-pengertian')}
          className={`flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition cursor-pointer ${
            activeTab === '1-pengertian'
              ? 'bg-teal-600 text-white shadow-md'
              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>1. Pengertian Iman</span>
        </button>

        <button
          onClick={() => setActiveTab('2-dalil')}
          className={`flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition cursor-pointer ${
            activeTab === '2-dalil'
              ? 'bg-teal-600 text-white shadow-md'
              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
        >
          <FileText className="w-4 h-4" />
          <span>2. Dalil Iman</span>
        </button>

        <button
          onClick={() => setActiveTab('3-nama-rasul')}
          className={`flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition cursor-pointer ${
            activeTab === '3-nama-rasul'
              ? 'bg-teal-600 text-white shadow-md'
              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
        >
          <Users className="w-4 h-4" />
          <span>3. Nama-Nama Rasul</span>
        </button>

        <button
          onClick={() => setActiveTab('4-tugas-rasul')}
          className={`flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition cursor-pointer ${
            activeTab === '4-tugas-rasul'
              ? 'bg-teal-600 text-white shadow-md'
              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
        >
          <Award className="w-4 h-4" />
          <span>4. Tugas Rasul</span>
        </button>

        <button
          onClick={() => setActiveTab('5-sifat-rasul')}
          className={`flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition cursor-pointer ${
            activeTab === '5-sifat-rasul'
              ? 'bg-teal-600 text-white shadow-md'
              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
        >
          <ShieldCheck className="w-4 h-4" />
          <span>5. Sifat Rasul</span>
        </button>

        <button
          onClick={() => setActiveTab('6-keteladanan')}
          className={`flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition cursor-pointer ${
            activeTab === '6-keteladanan'
              ? 'bg-teal-600 text-white shadow-md'
              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
        >
          <HeartHandshake className="w-4 h-4" />
          <span>6. Contoh Keteladanan</span>
        </button>

        <button
          onClick={() => setActiveTab('7-hikmah')}
          className={`flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition cursor-pointer ${
            activeTab === '7-hikmah'
              ? 'bg-teal-600 text-white shadow-md'
              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
        >
          <Sparkles className="w-4 h-4" />
          <span>7. Hikmah Iman</span>
        </button>

        <button
          onClick={() => setActiveTab('8-kuis-hots')}
          className={`flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition cursor-pointer ${
            activeTab === '8-kuis-hots'
              ? 'bg-amber-500 text-slate-950 font-black shadow-md'
              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
        >
          <Award className="w-4 h-4" />
          <span>8. Kuis HOTS</span>
        </button>
      </div>

      {/* ================= TAB 1: PENGERTIAN IMAN KEPADA RASUL ================= */}
      {activeTab === '1-pengertian' && (
        <div className="space-y-6">
          {/* Apersepsi & Pengantar */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-teal-100 dark:bg-teal-950/50 flex items-center justify-center text-teal-600 dark:text-teal-400 font-black">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-black text-slate-900 dark:text-white">
                  Apersepsi: Mengapa Manusia Membutuhkan Para Rasul?
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Landasan filosofis dan urgensi pengutusan nabi dan rasul ke muka bumi
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-slate-800/60 p-4 rounded-2xl border border-slate-200/80 dark:border-slate-700">
              {MATERI_KELAS_8_SEM_2_BAB_7.pengantar.apersepsi}
            </p>

            {/* Tujuan Pembelajaran Checklist */}
            <div className="p-4 bg-teal-50/50 dark:bg-teal-950/20 border border-teal-200 dark:border-teal-800/50 rounded-2xl space-y-2">
              <h4 className="text-xs font-black uppercase text-teal-800 dark:text-teal-300 tracking-wider flex items-center gap-1.5">
                <BookmarkCheck className="w-4 h-4" />
                Tujuan Pembelajaran Bab Ini:
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {MATERI_KELAS_8_SEM_2_BAB_7.pengantar.tujuanPembelajaran.map((tp, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                    <span>{tp}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pengertian Bahasa & Istilah */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-teal-600 dark:text-teal-400">
                <BookOpen className="w-5 h-5" />
                <h4 className="font-black text-base text-slate-900 dark:text-white">
                  Pengertian Menurut Bahasa (Etimologi)
                </h4>
              </div>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {MATERI_KELAS_8_SEM_2_BAB_7.pengertianImanRasul.secaraBahasa}
              </p>
              <div className="p-3 bg-slate-50 dark:bg-slate-800/80 rounded-xl text-xs text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                💡 <strong>Kunci Bahasa:</strong> <em>Iman</em> = Membenarkan/Yakin; <em>Rasul</em> = Utusan / Duta pembawa pesan agung.
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                <ShieldCheck className="w-5 h-5" />
                <h4 className="font-black text-base text-slate-900 dark:text-white">
                  Pengertian Menurut Istilah (Terminologi Syariat)
                </h4>
              </div>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {MATERI_KELAS_8_SEM_2_BAB_7.pengertianImanRasul.secaraIstilah}
              </p>
              <div className="p-3 bg-emerald-50 dark:bg-emerald-950/30 rounded-xl text-xs text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/40">
                ⭐ <strong>Penting:</strong> Menolak atau mengingkari satu rasul sama hukumnya dengan mengingkari seluruh rasul Allah Swt.
              </div>
            </div>
          </div>

          {/* 3 Tingkat Keimanan: Hati, Lisan, Amal */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <h4 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
              <Brain className="w-5 h-5 text-teal-600" />
              Tiga Dimensi Keimanan kepada Para Rasul (Hati, Lisan, & Amal Perbuatan)
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {MATERI_KELAS_8_SEM_2_BAB_7.pengertianImanRasul.tigaTingkatIman.map((dim, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-gradient-to-b from-slate-50 to-teal-50/30 dark:from-slate-800 dark:to-teal-950/20 border border-slate-200 dark:border-slate-700 space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black px-2 py-0.5 rounded-md bg-teal-600 text-white">
                      Dimensi {idx + 1}
                    </span>
                    <span className="text-sm font-serif font-bold text-teal-700 dark:text-teal-400">
                      {dim.istilahArab}
                    </span>
                  </div>
                  <h5 className="text-sm font-bold text-slate-900 dark:text-white">{dim.tahap}</h5>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {dim.uraian}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Tabel Komparasi: Perbedaan Nabi vs Rasul */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h4 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                  <Scale className="w-5 h-5 text-teal-600" />
                  Tabel Perbedaan Mendasar Antara Nabi dan Rasul
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Kaidah: "Kullu Rasūlin Nabiyyun, wa laisa kullu Nabiyyin Rasūlan" (Setiap rasul pasti nabi, tidak setiap nabi adalah rasul)
                </p>
              </div>
              <span className="self-start sm:self-auto px-3 py-1 bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 text-xs font-bold rounded-xl border border-amber-300 dark:border-amber-800">
                Materi Ujian Sering Keluar
              </span>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-700">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-black">
                    <th className="p-3 border-b border-slate-200 dark:border-slate-700 w-1/4">Aspek Perbandingan</th>
                    <th className="p-3 border-b border-slate-200 dark:border-slate-700 w-3/8 text-teal-700 dark:text-teal-400">
                      👤 Nabi (النَّبِيُّ)
                    </th>
                    <th className="p-3 border-b border-slate-200 dark:border-slate-700 w-3/8 text-emerald-700 dark:text-emerald-400">
                      👑 Rasul (الرَّسُوْلُ)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                  {MATERI_KELAS_8_SEM_2_BAB_7.pengertianImanRasul.perbedaanNabiDanRasul.map((item, idx) => (
                    <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                      <td className="p-3 font-bold text-slate-800 dark:text-slate-200 bg-slate-50/50 dark:bg-slate-800/30">
                        {item.aspek}
                      </td>
                      <td className="p-3 text-slate-600 dark:text-slate-300 leading-relaxed">
                        {item.nabi}
                      </td>
                      <td className="p-3 text-slate-700 dark:text-slate-200 font-medium leading-relaxed bg-emerald-50/30 dark:bg-emerald-950/10">
                        {item.rasul}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Hadits Jumlah Nabi & Rasul */}
            <div className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-400 space-y-1">
              <span className="font-bold text-slate-800 dark:text-slate-200 block">
                📊 Riwayat Jumlah Nabi dan Rasul:
              </span>
              <p>{MATERI_KELAS_8_SEM_2_BAB_7.pengertianImanRasul.jumlahNabiDanRasul.haditsRiwayat}</p>
            </div>

            {/* Navigasi Selanjutnya */}
            <div className="flex justify-end pt-2">
              <button
                onClick={() => setActiveTab('2-dalil')}
                className="flex items-center gap-2 px-5 py-2.5 bg-teal-600 hover:bg-teal-700 text-white rounded-xl text-xs sm:text-sm font-bold shadow-md transition cursor-pointer"
              >
                <span>Lanjut ke: 2. Dalil Iman kepada Rasul Allah Swt.</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= TAB 2: DALIL IMAN KEPADA RASUL ================= */}
      {activeTab === '2-dalil' && (
        <div className="space-y-6">
          {/* Dalil-Dalil Naqli Al-Qur'an */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                <FileText className="w-5 h-5 text-teal-600" />
                Dalil Naqli Al-Qur'an tentang Keimanan kepada Para Rasul
              </h4>
              <span className="text-xs text-slate-500 dark:text-slate-400 hidden sm:inline">
                Dilengkapi Teks Arab, Transliterasi, & Audio
              </span>
            </div>

            <div className="space-y-4">
              {MATERI_KELAS_8_SEM_2_BAB_7.dalilImanKepadaRasul.dalilQuran.map((dalil, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-50/80 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/80 space-y-3"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-700 pb-2">
                    <span className="text-xs font-black text-teal-700 dark:text-teal-400 bg-teal-100 dark:bg-teal-950/60 px-2.5 py-1 rounded-lg border border-teal-300 dark:border-teal-800">
                      {dalil.surah}: {dalil.ayat}
                    </span>
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => playVerseAudio(dalil.teksArab)}
                        className="p-1.5 text-slate-600 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-white dark:hover:bg-slate-700 rounded-lg transition cursor-pointer"
                        title="Dengarkan Audio"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => copyToClipboard(`${dalil.teksArab}\n\n${dalil.terjemah}`, dalil.surah)}
                        className="p-1.5 text-slate-600 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-white dark:hover:bg-slate-700 rounded-lg transition cursor-pointer"
                        title="Salin Ayat & Arti"
                      >
                        <Copy className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Teks Arab */}
                  <p
                    dir="rtl"
                    className="text-xl sm:text-2xl font-serif text-slate-900 dark:text-white leading-loose text-right tracking-wide pt-1"
                  >
                    {dalil.teksArab}
                  </p>

                  {/* Transliterasi Latin */}
                  <p className="text-xs text-teal-800 dark:text-teal-300 font-medium italic">
                    "{dalil.transliterasi}"
                  </p>

                  {/* Terjemah */}
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    <strong>Artinya:</strong> {dalil.terjemah}
                  </p>

                  {/* Kandungan Makna */}
                  <div className="p-2.5 bg-white dark:bg-slate-900/80 rounded-xl text-xs text-slate-600 dark:text-slate-400 border border-slate-200/80 dark:border-slate-800">
                    🔍 <strong>Kandungan Makna:</strong> {dalil.kandunganMakna}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dalil Hadits Shahih */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <h4 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-500" />
              Dalil Hadits Shahih (Hadits Jibril & Mengikuti Sunnah)
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {MATERI_KELAS_8_SEM_2_BAB_7.dalilImanKepadaRasul.dalilHadits.map((hadits, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-amber-50/40 dark:bg-amber-950/10 border border-amber-200/60 dark:border-amber-900/40 space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-amber-800 dark:text-amber-300">
                      {hadits.judul}
                    </span>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400">
                      {hadits.perawi}
                    </span>
                  </div>
                  <p dir="rtl" className="text-base font-serif text-slate-900 dark:text-slate-100 text-right leading-relaxed">
                    {hadits.matanArab}
                  </p>
                  <p className="text-xs text-slate-700 dark:text-slate-300 italic">
                    "{hadits.terjemah}"
                  </p>
                  <div className="p-2 bg-white dark:bg-slate-800/80 rounded-lg text-xs text-slate-600 dark:text-slate-400">
                    📖 <strong>Syarah:</strong> {hadits.syarah}
                  </div>
                </div>
              ))}
            </div>

            {/* Navigasi Sebelumnya & Selanjutnya */}
            <div className="flex items-center justify-between pt-2">
              <button
                onClick={() => setActiveTab('1-pengertian')}
                className="flex items-center gap-2 px-4 py-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-200 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>1. Pengertian Iman</span>
              </button>
              <button
                onClick={() => setActiveTab('3-nama-rasul')}
                className="flex items-center gap-2 px-5 py-2.5 bg-teal-600 hover:bg-teal-700 text-white rounded-xl text-xs sm:text-sm font-bold shadow-md transition cursor-pointer"
              >
                <span>Lanjut ke: 3. Nama-Nama Rasul</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= TAB 3: NAMA-NAMA RASUL & ULUL AZMI ================= */}
      {activeTab === '3-nama-rasul' && (
        <div className="space-y-6">
          {/* Spotlight Ulul Azmi Section */}
          <div className="bg-gradient-to-br from-amber-500/10 via-teal-500/10 to-slate-900/40 p-6 rounded-3xl border border-amber-400/30 dark:border-amber-500/20 shadow-md space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="space-y-1">
                <span className="px-2.5 py-0.5 bg-amber-500/20 text-amber-800 dark:text-amber-300 text-xs font-black rounded-md uppercase tracking-wider border border-amber-400/40">
                  Gelar Kehormatan Tertinggi
                </span>
                <h3 className="text-xl font-black text-slate-900 dark:text-white flex items-center gap-2">
                  <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
                  5 Rasul Ulul Azmi (أُولُو العَزْمِ)
                </h3>
              </div>
              <div className="text-xs font-bold text-teal-700 dark:text-teal-300 bg-teal-100 dark:bg-teal-950/60 px-3 py-1.5 rounded-xl border border-teal-300 dark:border-teal-800 self-start sm:self-auto">
                Mnemonic Cepat: <strong className="text-amber-600 dark:text-amber-400">{MATERI_KELAS_8_SEM_2_BAB_7.namaNamaRasul.rasulUlulAzmi.singkatanMnemonic}</strong>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {MATERI_KELAS_8_SEM_2_BAB_7.namaNamaRasul.rasulUlulAzmi.pengertian}
            </p>

            <div className="p-3 bg-white/60 dark:bg-slate-800/70 rounded-xl text-xs text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
              📜 <strong>Dalil Al-Qur'an:</strong> {MATERI_KELAS_8_SEM_2_BAB_7.namaNamaRasul.rasulUlulAzmi.dalilAlQuran}
            </div>

            {/* Selector for 5 Ulul Azmi */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 pt-2">
              {MATERI_KELAS_8_SEM_2_BAB_7.namaNamaRasul.rasulUlulAzmi.daftarTokoh.map((tokoh, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveUlulAzmiIndex(idx)}
                  className={`p-3 rounded-2xl text-center transition-all cursor-pointer border ${
                    activeUlulAzmiIndex === idx
                      ? 'bg-amber-500 text-slate-950 font-black border-amber-400 shadow-md scale-102'
                      : 'bg-white dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-amber-300'
                  }`}
                >
                  <span className="text-xs block opacity-80">#{tokoh.urutanUlulAzmi}</span>
                  <span className="text-xs sm:text-sm font-black block">{tokoh.nama}</span>
                  <span className="text-[11px] block font-serif opacity-90">{tokoh.namaArab}</span>
                </button>
              ))}
            </div>

            {/* Active Ulul Azmi Detailed Card */}
            {(() => {
              const active = MATERI_KELAS_8_SEM_2_BAB_7.namaNamaRasul.rasulUlulAzmi.daftarTokoh[activeUlulAzmiIndex];
              return (
                <div className="mt-4 p-5 rounded-2xl bg-white dark:bg-slate-900 border border-amber-300/60 dark:border-amber-800/50 shadow-sm space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3 gap-2">
                    <div>
                      <h4 className="text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
                        {active.nama}
                        <span className="text-sm font-serif font-bold text-amber-600 dark:text-amber-400">
                          ({active.namaArab})
                        </span>
                      </h4>
                      <p className="text-xs text-amber-700 dark:text-amber-400 font-bold">
                        Gelar & Julukan: {active.artiNamaGelar}
                      </p>
                    </div>
                    <span className="text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-lg self-start sm:self-auto">
                      Rujukan: {active.dalilAlQuran}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <span className="text-xs font-black text-slate-800 dark:text-slate-200 block uppercase tracking-wider">
                      🛡️ Bentuk Ketabahan Luar Biasa ('Azmul Umur):
                    </span>
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-slate-800/50 p-3 rounded-xl">
                      {active.bentukKetabahanLuarBiasa}
                    </p>
                  </div>

                  <div className="space-y-1.5">
                    <span className="text-xs font-black text-slate-800 dark:text-slate-200 block uppercase tracking-wider">
                      ✨ Mukjizat-Mukjizat Utama:
                    </span>
                    <ul className="space-y-1">
                      {active.mukjizatUtama.map((m, mIdx) => (
                        <li key={mIdx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                          <Zap className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                          <span>{m}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-3 bg-teal-50 dark:bg-teal-950/30 border border-teal-200 dark:border-teal-800/50 rounded-xl text-xs text-teal-800 dark:text-teal-300">
                    🎯 <strong>Keteladanan untuk Pelajar:</strong> {active.teladanUntukPelajar}
                  </div>
                </div>
              );
            })()}
          </div>

          {/* 25 Nabi & Rasul Explorer */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
                  <Users className="w-5 h-5 text-teal-600" />
                  Daftar Lengkap 25 Nabi & Rasul yang Wajib Diketahui
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Disebutkan secara eksplisit dalam Al-Qur'an dari Nabi Adam A.S. hingga Nabi Muhammad Saw.
                </p>
              </div>

              {/* Filter controls */}
              <div className="flex flex-wrap items-center gap-2">
                <div className="relative">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchNabi}
                    onChange={e => setSearchNabi(e.target.value)}
                    placeholder="Cari nabi, kaum, gelar..."
                    className="pl-9 pr-3 py-1.5 text-xs bg-slate-100 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <button
                  onClick={() => setFilterUlulAzmiOnly(!filterUlulAzmiOnly)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${
                    filterUlulAzmiOnly
                      ? 'bg-amber-500 text-slate-950 font-black'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
                  }`}
                >
                  <Star className="w-3.5 h-3.5" />
                  <span>Hanya Ulul Azmi</span>
                </button>
              </div>
            </div>

            {/* Grid 25 Nabi Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {filteredNabiList.map(nabi => (
                <div
                  key={nabi.urutan}
                  onClick={() => setSelectedNabiModal(nabi)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer hover:shadow-md flex flex-col justify-between ${
                    nabi.isUlulAzmi
                      ? 'bg-gradient-to-b from-amber-500/10 to-teal-500/5 dark:from-amber-950/20 dark:to-slate-900 border-amber-300/80 dark:border-amber-700/60'
                      : 'bg-slate-50/80 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700/70 hover:border-teal-400'
                  }`}
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black px-2 py-0.5 rounded-md bg-teal-700 text-white">
                        #{nabi.urutan}
                      </span>
                      {nabi.isUlulAzmi && (
                        <span className="text-[10px] font-black px-2 py-0.5 rounded-md bg-amber-400 text-amber-950 flex items-center gap-1">
                          <Star className="w-3 h-3 fill-amber-950" />
                          Ulul Azmi
                        </span>
                      )}
                    </div>

                    <div className="flex items-baseline justify-between pt-1">
                      <h4 className="text-sm font-black text-slate-900 dark:text-white">{nabi.nama}</h4>
                      <span className="text-sm font-serif font-bold text-teal-700 dark:text-teal-400">
                        {nabi.namaArab}
                      </span>
                    </div>

                    {nabi.gelar && (
                      <p className="text-[11px] text-amber-700 dark:text-amber-400 font-bold truncate">
                        {nabi.gelar}
                      </p>
                    )}

                    <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                      📍 {nabi.kaumTempat}
                    </p>

                    <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 pt-1">
                      {nabi.mukjizatKeistimewaan}
                    </p>
                  </div>

                  <div className="mt-3 pt-2 border-t border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between text-[11px] text-teal-600 dark:text-teal-400 font-bold">
                    <span>{nabi.sebutanAlQuran}</span>
                    <span className="flex items-center gap-0.5 text-xs">
                      Detail <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {filteredNabiList.length === 0 && (
              <div className="p-8 text-center text-slate-400 text-xs">
                Tidak ada nabi atau rasul yang cocok dengan pencarian "{searchNabi}".
              </div>
            )}
          </div>

          {/* Modal Detail Nabi */}
          {selectedNabiModal && (
            <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
              <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-lg w-full p-6 border border-slate-200 dark:border-slate-800 shadow-2xl space-y-4 animate-in fade-in zoom-in-95 duration-150">
                <div className="flex items-start justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-black px-2 py-0.5 rounded bg-teal-600 text-white">
                        Urutan Ke-{selectedNabiModal.urutan}
                      </span>
                      {selectedNabiModal.isUlulAzmi && (
                        <span className="text-xs font-black px-2 py-0.5 rounded bg-amber-400 text-amber-950">
                          Rasul Ulul Azmi
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-black text-slate-900 dark:text-white pt-1">
                      {selectedNabiModal.nama}
                    </h3>
                    <p className="text-sm font-serif text-teal-600 dark:text-teal-400 font-bold">
                      {selectedNabiModal.namaArab}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedNabiModal(null)}
                    className="p-1 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                  >
                    <XCircle className="w-6 h-6" />
                  </button>
                </div>

                <div className="space-y-3 text-xs sm:text-sm">
                  {selectedNabiModal.gelar && (
                    <div>
                      <span className="font-bold text-slate-500 block text-xs">Gelar & Julukan:</span>
                      <p className="text-amber-700 dark:text-amber-400 font-bold">{selectedNabiModal.gelar}</p>
                    </div>
                  )}

                  <div className="grid grid-cols-2 gap-3 bg-slate-50 dark:bg-slate-800/60 p-3 rounded-xl border border-slate-200/80 dark:border-slate-700 text-xs">
                    <div>
                      <span className="text-slate-500 font-bold block">Masa Hidup:</span>
                      <span className="text-slate-800 dark:text-slate-200">{selectedNabiModal.masaHidup}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 font-bold block">Kaum & Tempat Diutus:</span>
                      <span className="text-slate-800 dark:text-slate-200">{selectedNabiModal.kaumTempat}</span>
                    </div>
                  </div>

                  <div>
                    <span className="font-bold text-slate-700 dark:text-slate-300 block text-xs uppercase tracking-wider mb-1">
                      ✨ Mukjizat & Keistimewaan Utama:
                    </span>
                    <p className="p-3 bg-teal-50/50 dark:bg-teal-950/20 border border-teal-200 dark:border-teal-800/40 rounded-xl text-slate-700 dark:text-slate-300 leading-relaxed text-xs sm:text-sm">
                      {selectedNabiModal.mukjizatKeistimewaan}
                    </p>
                  </div>

                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    📖 <strong>Al-Qur'an:</strong> {selectedNabiModal.sebutanAlQuran}
                  </div>
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    onClick={() => {
                      onAskAI(`Ceritakan kisah lengkap, mukjizat, dan keteladanan ${selectedNabiModal.nama} untuk anak SMP!`);
                      setSelectedNabiModal(null);
                    }}
                    className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold rounded-xl transition cursor-pointer flex items-center gap-1.5"
                  >
                    <Bot className="w-4 h-4" />
                    Tanya AI tentang {selectedNabiModal.nama}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Navigasi Sebelumnya & Selanjutnya */}
          <div className="flex items-center justify-between pt-2">
            <button
              onClick={() => setActiveTab('2-dalil')}
              className="flex items-center gap-2 px-4 py-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-200 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>2. Dalil Iman</span>
            </button>
            <button
              onClick={() => setActiveTab('4-tugas-rasul')}
              className="flex items-center gap-2 px-5 py-2.5 bg-teal-600 hover:bg-teal-700 text-white rounded-xl text-xs sm:text-sm font-bold shadow-md transition cursor-pointer"
            >
              <span>Lanjut ke: 4. Tugas Rasul</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* ================= TAB 4: TUGAS PARA RASUL ================= */}
      {activeTab === '4-tugas-rasul' && (
        <div className="space-y-6">
          {/* 5 Tugas Utama Rasul */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h3 className="text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
                  <Award className="w-5 h-5 text-teal-600" />
                  5 Tugas Utama Para Rasul Allah Swt.
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Mandat suci yang diemban para rasul untuk membimbing manusia menuju keselamatan abadi
                </p>
              </div>
              <span className="px-3 py-1 bg-teal-100 dark:bg-teal-950 text-teal-700 dark:text-teal-300 text-xs font-bold rounded-xl self-start sm:self-auto">
                Mandat Risalah Ilahi
              </span>
            </div>

            <div className="space-y-3">
              {MATERI_KELAS_8_SEM_2_BAB_7.tugasTugasRasul.map((tugas, idx) => (
                <div
                  key={tugas.id}
                  className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/70 space-y-2 hover:border-teal-400 transition"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-slate-200 dark:border-slate-700 pb-2">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-teal-600 text-white flex items-center justify-center text-xs font-black shrink-0">
                        {idx + 1}
                      </span>
                      <h4 className="text-sm font-black text-slate-900 dark:text-white">
                        {tugas.judulTugas}
                      </h4>
                    </div>
                    <span className="text-xs font-serif font-bold text-teal-600 dark:text-teal-400">
                      {tugas.istilahArab}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {tugas.penjabaranTugas}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pt-1">
                    <div className="p-2.5 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 text-xs space-y-1">
                      <span className="font-bold text-teal-700 dark:text-teal-400 block">
                        📜 Dalil: {tugas.dalilRujukan.surahAyat}
                      </span>
                      <p dir="rtl" className="text-sm font-serif text-slate-800 dark:text-slate-200 text-right">
                        {tugas.dalilRujukan.teksArab}
                      </p>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 italic">
                        "{tugas.dalilRujukan.terjemah}"
                      </p>
                    </div>

                    <div className="p-2.5 bg-teal-50/50 dark:bg-teal-950/20 rounded-xl border border-teal-200 dark:border-teal-800/40 text-xs flex flex-col justify-center">
                      <span className="font-bold text-teal-800 dark:text-teal-300 block mb-1">
                        🎯 Penerapan bagi Pelajar:
                      </span>
                      <p className="text-slate-700 dark:text-slate-300">
                        {tugas.relevansiKehidupanSiswa}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigasi Sebelumnya & Selanjutnya */}
            <div className="flex items-center justify-between pt-2">
              <button
                onClick={() => setActiveTab('3-nama-rasul')}
                className="flex items-center gap-2 px-4 py-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-200 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>3. Nama-Nama Rasul</span>
              </button>
              <button
                onClick={() => setActiveTab('5-sifat-rasul')}
                className="flex items-center gap-2 px-5 py-2.5 bg-teal-600 hover:bg-teal-700 text-white rounded-xl text-xs sm:text-sm font-bold shadow-md transition cursor-pointer"
              >
                <span>Lanjut ke: 5. Sifat-Sifat Rasul</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= TAB 5: SIFAT-SIFAT RASUL ================= */}
      {activeTab === '5-sifat-rasul' && (
        <div className="space-y-6">
          {/* Sifat-Sifat Rasul (Wajib, Mustahil, Jaiz) */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h3 className="text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-teal-600" />
                  Sifat-Sifat Rasul Allah Swt.
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {MATERI_KELAS_8_SEM_2_BAB_7.sifatSifatRasul.pengantar}
                </p>
              </div>

              {/* Sifat Category Switcher */}
              <div className="flex p-1 bg-slate-100 dark:bg-slate-800 rounded-xl self-start sm:self-auto gap-1">
                <button
                  onClick={() => setActiveSifatCategory('wajib')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                    activeSifatCategory === 'wajib'
                      ? 'bg-teal-600 text-white shadow-xs'
                      : 'text-slate-600 dark:text-slate-400'
                  }`}
                >
                  4 Sifat Wajib
                </button>
                <button
                  onClick={() => setActiveSifatCategory('mustahil')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                    activeSifatCategory === 'mustahil'
                      ? 'bg-rose-600 text-white shadow-xs'
                      : 'text-slate-600 dark:text-slate-400'
                  }`}
                >
                  4 Sifat Mustahil
                </button>
                <button
                  onClick={() => setActiveSifatCategory('jaiz')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                    activeSifatCategory === 'jaiz'
                      ? 'bg-amber-500 text-slate-950 font-black shadow-xs'
                      : 'text-slate-600 dark:text-slate-400'
                  }`}
                >
                  1 Sifat Jaiz
                </button>
              </div>
            </div>

            {/* 4 Sifat Wajib */}
            {activeSifatCategory === 'wajib' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-in fade-in duration-200">
                {MATERI_KELAS_8_SEM_2_BAB_7.sifatSifatRasul.sifatWajib.map((sifat, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-teal-50/40 dark:bg-teal-950/20 border border-teal-200 dark:border-teal-800/40 space-y-3"
                  >
                    <div className="flex items-center justify-between border-b border-teal-200/60 dark:border-teal-800/60 pb-2">
                      <div>
                        <span className="text-xs font-black text-teal-800 dark:text-teal-300">
                          Sifat Wajib #{idx + 1}
                        </span>
                        <h4 className="text-base font-black text-slate-900 dark:text-white">
                          {sifat.namaLatin} ({sifat.arti})
                        </h4>
                      </div>
                      <span className="text-xl font-serif font-bold text-teal-700 dark:text-teal-400">
                        {sifat.namaArab}
                      </span>
                    </div>

                    <div className="text-xs text-rose-600 dark:text-rose-400 font-bold">
                      ⚔️ Lawan (Sifat Mustahil): {sifat.lawanSifat}
                    </div>

                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      {sifat.penjelasanMendalam}
                    </p>

                    <div className="p-2.5 bg-white dark:bg-slate-900/80 rounded-xl border border-slate-200 dark:border-slate-800 text-xs space-y-1">
                      <span className="font-bold text-teal-700 dark:text-teal-400 block">
                        📖 Dalil: {sifat.dalilQuran.surahAyat}
                      </span>
                      <p dir="rtl" className="font-serif text-slate-800 dark:text-slate-200 text-right">
                        {sifat.dalilQuran.teksArab}
                      </p>
                      <p className="text-slate-500 italic">"{sifat.dalilQuran.terjemah}"</p>
                    </div>

                    <div className="p-2 bg-emerald-100/50 dark:bg-emerald-950/40 rounded-lg text-xs text-emerald-900 dark:text-emerald-300">
                      💡 <strong>Aksi Nyata Pelajar:</strong> {sifat.contohPenerapanPelajar}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* 4 Sifat Mustahil */}
            {activeSifatCategory === 'mustahil' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-in fade-in duration-200">
                {MATERI_KELAS_8_SEM_2_BAB_7.sifatSifatRasul.sifatMustahil.map((sifat, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-rose-50/40 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/40 space-y-3"
                  >
                    <div className="flex items-center justify-between border-b border-rose-200/60 dark:border-rose-900/60 pb-2">
                      <div>
                        <span className="text-xs font-black text-rose-800 dark:text-rose-300">
                          Sifat Mustahil #{idx + 1}
                        </span>
                        <h4 className="text-base font-black text-slate-900 dark:text-white">
                          {sifat.namaLatin} ({sifat.arti})
                        </h4>
                      </div>
                      <span className="text-xl font-serif font-bold text-rose-700 dark:text-rose-400">
                        {sifat.namaArab}
                      </span>
                    </div>

                    <div className="text-xs text-emerald-700 dark:text-emerald-400 font-bold">
                      🛡️ Lawan dari Sifat Wajib: {sifat.lawanSifat}
                    </div>

                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      {sifat.penjelasanMendalam}
                    </p>

                    <div className="p-2.5 bg-white dark:bg-slate-900/80 rounded-xl border border-slate-200 dark:border-slate-800 text-xs space-y-1">
                      <span className="font-bold text-rose-700 dark:text-rose-400 block">
                        📖 Dalil: {sifat.dalilQuran.surahAyat}
                      </span>
                      <p dir="rtl" className="font-serif text-slate-800 dark:text-slate-200 text-right">
                        {sifat.dalilQuran.teksArab}
                      </p>
                      <p className="text-slate-500 italic">"{sifat.dalilQuran.terjemah}"</p>
                    </div>

                    <div className="p-2 bg-rose-100/60 dark:bg-rose-950/40 rounded-lg text-xs text-rose-900 dark:text-rose-300">
                      ⚠️ <strong>Peringatan bagi Pelajar:</strong> {sifat.contohPenerapanPelajar}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* 1 Sifat Jaiz */}
            {activeSifatCategory === 'jaiz' && (
              <div className="p-6 rounded-2xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-300 dark:border-amber-800/50 space-y-4 animate-in fade-in duration-200">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-amber-200 dark:border-amber-800 pb-3">
                  <div>
                    <span className="text-xs font-black text-amber-800 dark:text-amber-300 uppercase">
                      Sifat Jaiz Bagi Rasul
                    </span>
                    <h4 className="text-lg font-black text-slate-900 dark:text-white">
                      {MATERI_KELAS_8_SEM_2_BAB_7.sifatSifatRasul.sifatJaiz.namaLatin}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      {MATERI_KELAS_8_SEM_2_BAB_7.sifatSifatRasul.sifatJaiz.arti}
                    </p>
                  </div>
                  <span className="text-2xl font-serif font-bold text-amber-700 dark:text-amber-400">
                    {MATERI_KELAS_8_SEM_2_BAB_7.sifatSifatRasul.sifatJaiz.namaArab}
                  </span>
                </div>

                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed bg-white/70 dark:bg-slate-900/60 p-4 rounded-xl border border-amber-200/60 dark:border-amber-800/40">
                  {MATERI_KELAS_8_SEM_2_BAB_7.sifatSifatRasul.sifatJaiz.penjelasanMendalam}
                </p>

                <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 text-xs space-y-1">
                  <span className="font-bold text-amber-700 dark:text-amber-400 block">
                    📖 Dalil Naqli: {MATERI_KELAS_8_SEM_2_BAB_7.sifatSifatRasul.sifatJaiz.dalilQuran.surahAyat}
                  </span>
                  <p dir="rtl" className="text-base font-serif text-slate-900 dark:text-slate-100 text-right leading-loose">
                    {MATERI_KELAS_8_SEM_2_BAB_7.sifatSifatRasul.sifatJaiz.dalilQuran.teksArab}
                  </p>
                  <p className="text-slate-600 dark:text-slate-400 italic">
                    "{MATERI_KELAS_8_SEM_2_BAB_7.sifatSifatRasul.sifatJaiz.dalilQuran.terjemah}"
                  </p>
                </div>

                <div className="p-3 bg-teal-50 dark:bg-teal-950/30 rounded-xl border border-teal-200 dark:border-teal-800/50 text-xs text-teal-800 dark:text-teal-300">
                  🌟 <strong>Hikmah Penting:</strong> Mengapa rasul bukan berwujud malaikat? Karena jika rasul berwujud malaikat yang tidak makan dan tidak lelah, manusia akan beralasan tidak sanggup meniru keteladanannya. Para rasul berwujud manusia agar menjadi suri teladan yang realistis!
                </div>
              </div>
            )}

            {/* Navigasi Sebelumnya & Selanjutnya */}
            <div className="flex items-center justify-between pt-2">
              <button
                onClick={() => setActiveTab('4-tugas-rasul')}
                className="flex items-center gap-2 px-4 py-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-200 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>4. Tugas Rasul</span>
              </button>
              <button
                onClick={() => setActiveTab('6-keteladanan')}
                className="flex items-center gap-2 px-5 py-2.5 bg-teal-600 hover:bg-teal-700 text-white rounded-xl text-xs sm:text-sm font-bold shadow-md transition cursor-pointer"
              >
                <span>Lanjut ke: 6. Contoh Keteladanan</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= TAB 6: KETELADANAN & KASUS NYATA ================= */}
      {activeTab === '6-keteladanan' && (
        <div className="space-y-6">
          {/* Kisah Keteladanan Tokoh */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div>
              <h3 className="text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
                <HeartHandshake className="w-5 h-5 text-teal-600" />
                Contoh Keteladanan Akhlak Para Rasul Allah Swt.
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {MATERI_KELAS_8_SEM_2_BAB_7.contohKeteladanan.pengantar}
              </p>
            </div>

            <div className="space-y-4">
              {MATERI_KELAS_8_SEM_2_BAB_7.contohKeteladanan.daftarTeladan.map(item => (
                <div
                  key={item.id}
                  className="p-5 rounded-2xl bg-slate-50/80 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 space-y-3 hover:border-teal-400 transition"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-slate-200 dark:border-slate-700 pb-2">
                    <h4 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-teal-500" />
                      {item.tokohRasul}
                    </h4>
                    <span className="text-xs font-bold text-amber-700 dark:text-amber-300 bg-amber-100 dark:bg-amber-950/60 px-2.5 py-0.5 rounded-lg border border-amber-300 dark:border-amber-800 self-start sm:self-auto">
                      {item.sikapTeladan}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {item.kisahInspiratif}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-xs">
                    <div className="p-2.5 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
                      <span className="font-bold text-teal-700 dark:text-teal-400 block">
                        💎 Nilai Karakter Utama:
                      </span>
                      <p className="text-slate-600 dark:text-slate-400">{item.nilaiKarakterUtama}</p>
                    </div>

                    <div className="p-2.5 bg-teal-50 dark:bg-teal-950/30 rounded-xl border border-teal-200 dark:border-teal-800/40">
                      <span className="font-bold text-teal-800 dark:text-teal-300 block">
                        🎯 Relevansi untuk Remaja:
                      </span>
                      <p className="text-slate-700 dark:text-slate-300">{item.konteksPelajarMasaKini}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 3 Studi Kasus Etika Remaja Masa Kini */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-amber-500" />
              <div>
                <h3 className="text-lg font-black text-slate-900 dark:text-white">
                  Studi Kasus Reflektif: Menghidupkan Sifat Rasul di Sekolah
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Penerapan nilai kejujuran, pembelaan kaum tertindas, dan integritas digital pelajar
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {MATERI_KELAS_8_SEM_2_BAB_7.contohKeteladanan.studiKasusEtikaPelajar.map((kasus, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-amber-50/30 dark:bg-amber-950/10 border border-amber-200/60 dark:border-amber-900/40 space-y-3"
                >
                  <span className="text-xs font-black text-amber-800 dark:text-amber-300 bg-amber-200/60 dark:bg-amber-900/40 px-2.5 py-1 rounded-md">
                    Kasus #{idx + 1}
                  </span>
                  <h4 className="text-base font-black text-slate-900 dark:text-white">
                    {kasus.judulKasus}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800/60 p-3 rounded-xl border border-slate-200 dark:border-slate-700 leading-relaxed">
                    {kasus.deskripsiMasalah}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                    <div className="p-3 bg-teal-50 dark:bg-teal-950/20 rounded-xl border border-teal-200 dark:border-teal-800/40">
                      <span className="font-black text-teal-800 dark:text-teal-300 block mb-1">
                        🔍 Analisis Sifat Rasul:
                      </span>
                      <p className="text-slate-700 dark:text-slate-300">{kasus.analisisNilaiKeteladanan}</p>
                    </div>

                    <div className="p-3 bg-emerald-50 dark:bg-emerald-950/20 rounded-xl border border-emerald-200 dark:border-emerald-800/40">
                      <span className="font-black text-emerald-800 dark:text-emerald-300 block mb-1">
                        ✅ Solusi Karakter Islami:
                      </span>
                      <p className="text-slate-700 dark:text-slate-300">{kasus.solusiKarakterIslami}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigasi Sebelumnya & Selanjutnya */}
            <div className="flex items-center justify-between pt-2">
              <button
                onClick={() => setActiveTab('5-sifat-rasul')}
                className="flex items-center gap-2 px-4 py-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-200 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>5. Sifat Rasul</span>
              </button>
              <button
                onClick={() => setActiveTab('7-hikmah')}
                className="flex items-center gap-2 px-5 py-2.5 bg-teal-600 hover:bg-teal-700 text-white rounded-xl text-xs sm:text-sm font-bold shadow-md transition cursor-pointer"
              >
                <span>Lanjut ke: 7. Hikmah Iman</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= TAB 7: HIKMAH & REFLEKSI DIRI ================= */}
      {activeTab === '7-hikmah' && (
        <div className="space-y-6">
          {/* 6 Hikmah Beriman kepada Para Rasul */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div>
              <h3 className="text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-500" />
                6 Hikmah Luhur Beriman kepada Para Rasul Allah Swt.
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Pengaruh positif akidah kenabian terhadap ketentraman jiwa dan keluhuran budi pekerti manusia
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {MATERI_KELAS_8_SEM_2_BAB_7.hikmahBerimanKepadaRasul.map(hikmah => (
                <div
                  key={hikmah.id}
                  className="p-5 rounded-2xl bg-gradient-to-br from-slate-50 to-teal-50/20 dark:from-slate-800/70 dark:to-teal-950/20 border border-slate-200 dark:border-slate-700 space-y-2.5"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-amber-500 text-slate-950 font-black flex items-center justify-center text-xs shrink-0">
                      {hikmah.nomor}
                    </span>
                    <h4 className="text-sm font-black text-slate-900 dark:text-white">
                      {hikmah.judulHikmah}
                    </h4>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {hikmah.penjelasan}
                  </p>

                  <div className="p-2 bg-white dark:bg-slate-900 rounded-xl text-xs text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-800">
                    📖 <strong>Dalil:</strong> {hikmah.dalilPendukung}
                  </div>

                  <div className="p-2 bg-teal-100/50 dark:bg-teal-950/40 rounded-xl text-xs text-teal-900 dark:text-teal-300 font-medium">
                    🌟 <strong>Dampak Nyata:</strong> {hikmah.dampakPerilakuPositif}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Instrumen Refleksi Diri 8 Dimensi */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
              <div>
                <h3 className="text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
                  <UserCheck className="w-5 h-5 text-teal-600" />
                  Lembar Muhasabah: 8 Dimensi Karakter Pelajar Beriman
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Tandai poin yang telah kamu biasakan dalam kehidupan sehari-hari
                </p>
              </div>
              <div className="flex items-center gap-2 self-start sm:self-auto">
                <span className="text-xs font-bold text-slate-600 dark:text-slate-300">
                  Capaian: {completedReflectionCount} / {MATERI_KELAS_8_SEM_2_BAB_7.refleksiKarakter.length}
                </span>
                <div className="w-24 h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-teal-500 transition-all duration-300"
                    style={{
                      width: `${(completedReflectionCount / MATERI_KELAS_8_SEM_2_BAB_7.refleksiKarakter.length) * 100}%`
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2.5">
              {MATERI_KELAS_8_SEM_2_BAB_7.refleksiKarakter.map((ref, idx) => {
                const isChecked = !!checkedReflection[idx];
                return (
                  <div
                    key={idx}
                    onClick={() => toggleReflection(idx)}
                    className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-start gap-3 ${
                      isChecked
                        ? 'bg-teal-50 dark:bg-teal-950/30 border-teal-300 dark:border-teal-800'
                        : 'bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-700/80 hover:border-slate-300'
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded-lg flex items-center justify-center mt-0.5 shrink-0 transition ${
                        isChecked
                          ? 'bg-teal-600 text-white'
                          : 'border-2 border-slate-300 dark:border-slate-600'
                      }`}
                    >
                      {isChecked && <Check className="w-3.5 h-3.5" />}
                    </div>

                    <div className="space-y-0.5 flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-1">
                        <span className="text-xs font-black text-slate-900 dark:text-white">
                          {ref.dimensi}
                        </span>
                        <span className="text-[11px] text-teal-700 dark:text-teal-400 font-bold">
                          {ref.indikator}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400 italic">
                        "{ref.pertanyaanMuhasabah}"
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {completedReflectionCount === MATERI_KELAS_8_SEM_2_BAB_7.refleksiKarakter.length && (
              <div className="p-4 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-300 dark:border-emerald-800 rounded-2xl text-center text-xs sm:text-sm text-emerald-800 dark:text-emerald-200 font-bold">
                🎉 Masya Allah! Kamu telah membiasakan 8 dimensi karakter mulia para rasul. Terus istiqomah dalam ucapan dan perbuatan!
              </div>
            )}

            {/* Navigasi Sebelumnya & Selanjutnya */}
            <div className="flex items-center justify-between pt-2">
              <button
                onClick={() => setActiveTab('6-keteladanan')}
                className="flex items-center gap-2 px-4 py-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-200 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>6. Contoh Keteladanan</span>
              </button>
              <button
                onClick={() => setActiveTab('8-kuis-hots')}
                className="flex items-center gap-2 px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-slate-950 rounded-xl text-xs sm:text-sm font-black shadow-md transition cursor-pointer"
              >
                <span>Lanjut ke: 8. Kuis Evaluasi HOTS</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= TAB 8: KUIS EVALUASI HOTS ================= */}
      {activeTab === '8-kuis-hots' && (
        <div className="space-y-6">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
              <div>
                <span className="px-2.5 py-0.5 bg-amber-500/20 text-amber-800 dark:text-amber-300 text-xs font-black rounded-md uppercase">
                  Uji Kompetensi Mandiri
                </span>
                <h3 className="text-xl font-black text-slate-900 dark:text-white pt-1">
                  Kuis Penalaran HOTS: Keimanan kepada Para Rasul Allah Swt.
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  5 butir soal pilihan ganda analisis kasus kontekstual berstandar Asesmen Nasional
                </p>
              </div>

              {showQuizResults ? (
                <div className="flex items-center gap-3 bg-teal-50 dark:bg-teal-950/50 p-3 rounded-2xl border border-teal-300 dark:border-teal-800">
                  <div className="text-right">
                    <span className="text-xs text-slate-500 block">Skor Kamu:</span>
                    <span className="text-2xl font-black text-teal-600 dark:text-teal-400">
                      {calculateScore()} / 100
                    </span>
                  </div>
                  <button
                    onClick={resetQuiz}
                    className="p-2 bg-white dark:bg-slate-800 hover:bg-slate-100 text-slate-700 dark:text-slate-200 rounded-xl border border-slate-200 dark:border-slate-700 transition cursor-pointer"
                    title="Ulangi Kuis"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setShowQuizResults(true)}
                  disabled={Object.keys(userAnswers).length < MATERI_KELAS_8_SEM_2_BAB_7.soalEvaluasiHots.length}
                  className={`px-5 py-2.5 rounded-xl text-xs font-black transition cursor-pointer flex items-center gap-2 ${
                    Object.keys(userAnswers).length === MATERI_KELAS_8_SEM_2_BAB_7.soalEvaluasiHots.length
                      ? 'bg-teal-600 hover:bg-teal-700 text-white shadow-md'
                      : 'bg-slate-200 dark:bg-slate-800 text-slate-400 cursor-not-allowed'
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Koreksi & Lihat Nilai</span>
                </button>
              )}
            </div>

            {/* List of 5 HOTS Questions */}
            <div className="space-y-6">
              {MATERI_KELAS_8_SEM_2_BAB_7.soalEvaluasiHots.map((soal, sIdx) => {
                const isAnswered = userAnswers[soal.id] !== undefined;
                const isCorrect = userAnswers[soal.id] === soal.kunciJawaban;

                return (
                  <div
                    key={soal.id}
                    className={`p-5 rounded-2xl border transition-all ${
                      showQuizResults
                        ? isCorrect
                          ? 'bg-emerald-50/40 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-800'
                          : 'bg-rose-50/40 dark:bg-rose-950/20 border-rose-300 dark:border-rose-900'
                        : 'bg-slate-50/80 dark:bg-slate-800/40 border-slate-200 dark:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-black px-2.5 py-0.5 rounded-md bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200">
                        Soal Nomor {sIdx + 1}
                      </span>
                      {showQuizResults && (
                        <span
                          className={`text-xs font-black px-2.5 py-0.5 rounded-md flex items-center gap-1 ${
                            isCorrect
                              ? 'bg-emerald-500 text-white'
                              : 'bg-rose-500 text-white'
                          }`}
                        >
                          {isCorrect ? <Check className="w-3.5 h-3.5" /> : <XCircle className="w-3.5 h-3.5" />}
                          {isCorrect ? 'BENAR' : 'KURANG TEPAT'}
                        </span>
                      )}
                    </div>

                    {/* Stimulus Kasus */}
                    <div className="p-3 bg-white dark:bg-slate-900/80 rounded-xl border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-3 whitespace-pre-line">
                      {soal.stimulus}
                    </div>

                    {/* Pertanyaan */}
                    <p className="text-xs sm:text-sm font-black text-slate-900 dark:text-white mb-3">
                      {soal.pertanyaan}
                    </p>

                    {/* Pilihan Ganda */}
                    <div className="space-y-2">
                      {soal.pilihan.map((pil, pIdx) => {
                        const isSelected = userAnswers[soal.id] === pIdx;
                        const isKey = soal.kunciJawaban === pIdx;

                        let btnStyle =
                          'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-teal-400';

                        if (showQuizResults) {
                          if (isKey) {
                            btnStyle = 'bg-emerald-500 text-white font-bold border-emerald-600';
                          } else if (isSelected && !isCorrect) {
                            btnStyle = 'bg-rose-500 text-white font-bold border-rose-600';
                          } else {
                            btnStyle = 'opacity-50 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700';
                          }
                        } else if (isSelected) {
                          btnStyle = 'bg-teal-600 text-white font-bold border-teal-700 shadow-xs';
                        }

                        return (
                          <button
                            key={pIdx}
                            disabled={showQuizResults}
                            onClick={() => handleSelectAnswer(soal.id, pIdx)}
                            className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm transition cursor-pointer flex items-center justify-between ${btnStyle}`}
                          >
                            <span>{pil}</span>
                            {showQuizResults && isKey && (
                              <Check className="w-4 h-4 text-white shrink-0 ml-2" />
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {/* Pembahasan Soal */}
                    {showQuizResults && (
                      <div className="mt-3 p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-300 space-y-1">
                        <span className="font-bold text-teal-700 dark:text-teal-400 block">
                          💡 Pembahasan Lengkap:
                        </span>
                        <p className="leading-relaxed">{soal.pembahasan}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Navigasi Sebelumnya & Mulai Ulang */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
              <button
                onClick={() => setActiveTab('7-hikmah')}
                className="flex items-center gap-2 px-4 py-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-200 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>7. Hikmah Iman</span>
              </button>
              <button
                onClick={() => {
                  setActiveTab('1-pengertian');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="flex items-center gap-2 px-5 py-2.5 bg-teal-600 hover:bg-teal-700 text-white rounded-xl text-xs sm:text-sm font-bold shadow-md transition cursor-pointer"
              >
                <span>Pelajari Ulang: 1. Pengertian Iman</span>
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
