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
  HeartHandshake,
  Volume2,
  FileText,
  ChevronRight,
  ChevronLeft,
  Compass,
  Star,
  Flame,
  Scale,
  Calendar,
  AlertTriangle,
  HelpCircle,
  Globe2,
  Footprints,
  ShieldAlert,
  Info
} from 'lucide-react';
import {
  MATERI_KELAS_8_SEM_2_BAB_9,
  RukunHajiItem,
  WajibHajiItem,
  LaranganIhramItem,
  MacamDamItem,
  CaraPelaksanaanHajiItem,
  TahapanManasikItem,
  MiqatMakaniItem,
  HikmahHajiItem,
  StudiKasusHajiItem,
  SoalHotsHajiItem
} from '../../data/materiKelas8Sem2Bab9Data';
import { useToast } from '../common/Toast';

interface Props {
  onAskAI: (prompt: string) => void;
}

type Bab9K8SubTab =
  | '1-pengertian'
  | '2-syarat-rukun-wajib'
  | '3-tata-cara'
  | '4-manasik-haji'
  | '5-hikmah'
  | '6-kasus-refleksi'
  | '7-kuis-hots';

export const BukuPaiKelas8Sem2Bab9Detail: React.FC<Props> = ({ onAskAI }) => {
  const { showToast } = useToast();
  const [activeTab, setActiveTab] = useState<Bab9K8SubTab>('1-pengertian');

  // Filters & Sub-states
  const [laranganFilter, setLaranganFilter] = useState<'Semua' | 'Pria' | 'Wanita' | 'Umum'>('Semua');
  const [selectedDamIndex, setSelectedDamIndex] = useState<number>(0);
  const [selectedCaraHaji, setSelectedCaraHaji] = useState<number>(0);
  const [activeManasikStep, setActiveManasikStep] = useState<number>(0);
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);

  // Muhasabah State (8 indicators)
  const [checklistMuhasabah, setChecklistMuhasabah] = useState<Record<number, 'terbiasa' | 'berikhtiar' | 'belum'>>({
    1: 'terbiasa',
    2: 'terbiasa',
    3: 'berikhtiar',
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

  const playVerseAudio = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      if (isPlayingAudio) {
        setIsPlayingAudio(false);
        return;
      }
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ar-SA';
      utterance.rate = 0.82;
      utterance.onend = () => setIsPlayingAudio(false);
      utterance.onerror = () => setIsPlayingAudio(false);
      setIsPlayingAudio(true);
      window.speechSynthesis.speak(utterance);
      showToast('Memutar lantunan pelafalan syariat...', 'info');
    } else {
      showToast('Browser Anda belum mendukung audio synthesizer.', 'info');
    }
  };

  // Filter Larangan Ihram
  const filteredLarangan = MATERI_KELAS_8_SEM_2_BAB_9.ketentuanSyaratRukunWajib.laranganIhram.filter((item) => {
    if (laranganFilter === 'Semua') return true;
    if (laranganFilter === 'Pria') return item.kategori === 'Pria';
    if (laranganFilter === 'Wanita') return item.kategori === 'Wanita';
    return item.kategori === 'Umum (Pria & Wanita)';
  });

  // Calculate Quiz Score
  const calculateScore = () => {
    let correctCount = 0;
    MATERI_KELAS_8_SEM_2_BAB_9.soalEvaluasiHots.forEach((q) => {
      if (userAnswers[q.id] === q.kunciJawaban) {
        correctCount++;
      }
    });
    return Math.round((correctCount / MATERI_KELAS_8_SEM_2_BAB_9.soalEvaluasiHots.length) * 100);
  };

  const handleSelectAnswer = (soalId: string, answerIndex: number) => {
    if (showQuizResults) return;
    setUserAnswers((prev) => ({ ...prev, [soalId]: answerIndex }));
  };

  const resetQuiz = () => {
    setUserAnswers({});
    setShowQuizResults(false);
    showToast('Kuis berhasil direset! Silakan coba lagi.', 'info');
  };

  return (
    <div className="space-y-6">
      {/* Header Box / Banner Pelajaran */}
      <div className="bg-gradient-to-br from-emerald-950 via-teal-900 to-slate-900 border border-emerald-500/30 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute -right-16 -top-16 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute right-1/3 -bottom-20 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 bg-amber-400 text-amber-950 font-black rounded-full text-xs tracking-wider uppercase shadow-md flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              BUKU PELAJARAN DIGITAL PAI SMP
            </span>
            <span className="px-3 py-1 bg-emerald-800/80 text-emerald-200 font-semibold rounded-full text-xs">
              Kelas VIII • Semester 2 • Bab IX
            </span>
            <span className="px-3 py-1 bg-teal-800/80 text-teal-200 font-semibold rounded-full text-xs">
              Elemen Fikih Ibadah
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white leading-tight">
            Menerapkan Ketentuan Haji dan Umrah: Meneladani Ketaatan dan Mempererat Ukhuwah Islamiyah Dunia
          </h2>

          <p className="text-sm sm:text-base text-emerald-100/90 max-w-4xl leading-relaxed">
            {MATERI_KELAS_8_SEM_2_BAB_9.babInfo.deskripsiSingkat}
          </p>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() =>
                onAskAI(
                  'Halo Masterku AI, jelaskan rangkuman komprehensif materi PAI Kelas 8 Semester 2 Bab 9 tentang Ketentuan Haji dan Umrah, perbedaan syarat rukun wajib, 3 tata cara haji (Tamattu, Ifrad, Qiran), serta alur manasik haji!'
                )
              }
              className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold rounded-xl text-xs sm:text-sm shadow-md transition-all flex items-center gap-2 cursor-pointer"
            >
              <Bot className="w-4 h-4" />
              <span>Tanya Masterku AI tentang Bab Ini</span>
            </button>

            <button
              onClick={() => {
                const talbiyah = MATERI_KELAS_8_SEM_2_BAB_9.manasikHajiPraktis.lafazTalbiyah.arab;
                playVerseAudio(talbiyah);
              }}
              className="px-4 py-2 bg-teal-700/60 hover:bg-teal-600/70 text-teal-100 font-bold rounded-xl text-xs sm:text-sm border border-teal-500/30 transition-all flex items-center gap-2 cursor-pointer"
            >
              <Volume2 className="w-4 h-4 text-amber-300" />
              <span>Dengarkan Pelafalan Talbiyah</span>
            </button>

            <button
              onClick={() =>
                copyToClipboard(
                  `${MATERI_KELAS_8_SEM_2_BAB_9.babInfo.title}\n\n${MATERI_KELAS_8_SEM_2_BAB_9.babInfo.deskripsiSingkat}`,
                  'Rangkuman Bab 9'
                )
              }
              className="px-3.5 py-2 bg-slate-800/80 hover:bg-slate-700 text-slate-200 font-medium rounded-xl text-xs border border-slate-700 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Copy className="w-3.5 h-3.5" />
              <span>Salin Sinopsis</span>
            </button>
          </div>
        </div>
      </div>

      {/* Sub-Tab Navigation Bar */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-2 shadow-sm sticky top-4 z-20 overflow-x-auto">
        <div className="flex items-center gap-1.5 min-w-max">
          <button
            onClick={() => setActiveTab('1-pengertian')}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-2 cursor-pointer ${
              activeTab === '1-pengertian'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>1. Pengertian & Dalil</span>
          </button>

          <button
            onClick={() => setActiveTab('2-syarat-rukun-wajib')}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-2 cursor-pointer ${
              activeTab === '2-syarat-rukun-wajib'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <Scale className="w-4 h-4" />
            <span>2. Syarat, Rukun & Wajib</span>
          </button>

          <button
            onClick={() => setActiveTab('3-tata-cara')}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-2 cursor-pointer ${
              activeTab === '3-tata-cara'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <Compass className="w-4 h-4" />
            <span>3. Tata Cara (3 Model Haji)</span>
          </button>

          <button
            onClick={() => setActiveTab('4-manasik-haji')}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-2 cursor-pointer ${
              activeTab === '4-manasik-haji'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <Footprints className="w-4 h-4" />
            <span>4. Manasik Haji Praktis</span>
          </button>

          <button
            onClick={() => setActiveTab('5-hikmah')}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-2 cursor-pointer ${
              activeTab === '5-hikmah'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <Star className="w-4 h-4 text-amber-400" />
            <span>5. Hikmah Luhur</span>
          </button>

          <button
            onClick={() => setActiveTab('6-kasus-refleksi')}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-2 cursor-pointer ${
              activeTab === '6-kasus-refleksi'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <Lightbulb className="w-4 h-4" />
            <span>6. Studi Kasus & Refleksi</span>
          </button>

          <button
            onClick={() => setActiveTab('7-kuis-hots')}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-2 cursor-pointer ${
              activeTab === '7-kuis-hots'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <Award className="w-4 h-4 text-amber-400" />
            <span>7. Kuis HOTS Interaktif</span>
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* TAB 1: PENGERTIAN HAJI & UMRAH & DALIL NAQLI                             */}
      {/* ========================================================================= */}
      {activeTab === '1-pengertian' && (
        <div className="space-y-6">
          {/* Box Pengertian Bahasa & Istilah */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Haji Card */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 flex items-center justify-center font-bold text-lg">
                  🕋
                </div>
                <div>
                  <h3 className="text-lg font-black text-slate-900 dark:text-white">Ibadah Haji</h3>
                  <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                    Rukun Islam Ke-5 • Al-Qashdu (الْقَصْدُ)
                  </span>
                </div>
              </div>

              <div className="space-y-3 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                <div className="p-3.5 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-100 dark:border-slate-800">
                  <span className="font-bold text-slate-900 dark:text-white block mb-1">
                    Secara Bahasa (Etimologi):
                  </span>
                  <p>{MATERI_KELAS_8_SEM_2_BAB_9.pengertianHajiUmrah.pengertianBahasaIstilah.haji.bahasa}</p>
                </div>

                <div className="p-3.5 bg-emerald-50/60 dark:bg-emerald-950/30 rounded-xl border border-emerald-100 dark:border-emerald-900/40">
                  <span className="font-bold text-emerald-900 dark:text-emerald-200 block mb-1">
                    Secara Syariat (Terminologi):
                  </span>
                  <p>{MATERI_KELAS_8_SEM_2_BAB_9.pengertianHajiUmrah.pengertianBahasaIstilah.haji.istilah}</p>
                </div>

                <div className="flex items-start gap-2 pt-1 text-xs text-slate-600 dark:text-slate-400">
                  <BookmarkCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Hukum:</strong>{' '}
                    {MATERI_KELAS_8_SEM_2_BAB_9.pengertianHajiUmrah.pengertianBahasaIstilah.haji.hukumSyariat}
                  </span>
                </div>
              </div>

              <button
                onClick={() =>
                  onAskAI(
                    'Jelaskan mengapa ibadah haji diwajibkan hanya sekali seumur hidup dan apa maksud istitha\'ah dalam tinjauan Fikih Islam?'
                  )
                }
                className="w-full py-2 px-3 bg-slate-100 dark:bg-slate-800 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 text-slate-700 dark:text-slate-200 hover:text-emerald-700 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Bot className="w-3.5 h-3.5" />
                <span>Pelajari Istitha\'ah via AI</span>
              </button>
            </div>

            {/* Umrah Card */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-teal-100 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 flex items-center justify-center font-bold text-lg">
                  🕊️
                </div>
                <div>
                  <h3 className="text-lg font-black text-slate-900 dark:text-white">Ibadah Umrah</h3>
                  <span className="text-xs font-semibold text-teal-600 dark:text-teal-400">
                    Ziarah ke Baitullah • Al-I\'timar (الْاِعْتِمَارُ)
                  </span>
                </div>
              </div>

              <div className="space-y-3 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                <div className="p-3.5 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-100 dark:border-slate-800">
                  <span className="font-bold text-slate-900 dark:text-white block mb-1">
                    Secara Bahasa (Etimologi):
                  </span>
                  <p>{MATERI_KELAS_8_SEM_2_BAB_9.pengertianHajiUmrah.pengertianBahasaIstilah.umrah.bahasa}</p>
                </div>

                <div className="p-3.5 bg-teal-50/60 dark:bg-teal-950/30 rounded-xl border border-teal-100 dark:border-teal-900/40">
                  <span className="font-bold text-teal-900 dark:text-teal-200 block mb-1">
                    Secara Syariat (Terminologi):
                  </span>
                  <p>{MATERI_KELAS_8_SEM_2_BAB_9.pengertianHajiUmrah.pengertianBahasaIstilah.umrah.istilah}</p>
                </div>

                <div className="flex items-start gap-2 pt-1 text-xs text-slate-600 dark:text-slate-400">
                  <BookmarkCheck className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Hukum:</strong>{' '}
                    {MATERI_KELAS_8_SEM_2_BAB_9.pengertianHajiUmrah.pengertianBahasaIstilah.umrah.hukumSyariat}
                  </span>
                </div>
              </div>

              <button
                onClick={() =>
                  onAskAI(
                    'Apa perbedaan utama rukun dan amalan antara haji dan umrah, serta mengapa umrah sering disebut sebagai haji kecil?'
                  )
                }
                className="w-full py-2 px-3 bg-slate-100 dark:bg-slate-800 hover:bg-teal-50 dark:hover:bg-teal-950/40 text-slate-700 dark:text-slate-200 hover:text-teal-700 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Bot className="w-3.5 h-3.5" />
                <span>Bahas Perbedaan Haji & Umrah via AI</span>
              </button>
            </div>
          </div>

          {/* Tabel Komparasi Perbedaan Haji vs Umrah */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm space-y-4">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
                  <Scale className="w-5 h-5 text-emerald-600" />
                  <span>Tabel Komparasi Perbedaan Mendasar Haji vs Umrah</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                  Ringkasan komprehensif 5 pembeda inti untuk pemahaman fikih siswa
                </p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200">
                    <th className="p-3.5 rounded-l-xl font-bold border-b border-slate-200 dark:border-slate-700">Indikator Pembeda</th>
                    <th className="p-3.5 font-bold text-emerald-700 dark:text-emerald-300 border-b border-slate-200 dark:border-slate-700">Ibadah Haji (الحج)</th>
                    <th className="p-3.5 rounded-r-xl font-bold text-teal-700 dark:text-teal-300 border-b border-slate-200 dark:border-slate-700">Ibadah Umrah (العمرة)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                  {MATERI_KELAS_8_SEM_2_BAB_9.pengertianHajiUmrah.tabelPerbedaanHajiUmrah.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition">
                      <td className="p-3.5 font-bold text-slate-900 dark:text-white whitespace-nowrap align-top">
                        {row.indikator}
                      </td>
                      <td className="p-3.5 align-top leading-relaxed bg-emerald-50/20 dark:bg-emerald-950/10">
                        {row.ibadahHaji}
                      </td>
                      <td className="p-3.5 align-top leading-relaxed bg-teal-50/20 dark:bg-teal-950/10">
                        {row.ibadahUmrah}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Dalil Naqli Al-Qur'an */}
          <div className="space-y-4">
            <h3 className="text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-emerald-600" />
              <span>Dalil Naqli Al-Qur\'an tentang Kewajiban Haji & Umrah</span>
            </h3>

            <div className="space-y-4">
              {MATERI_KELAS_8_SEM_2_BAB_9.pengertianHajiUmrah.dalilAlQuran.map((dalil, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 sm:p-6 shadow-sm space-y-4"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="w-7 h-7 rounded-lg bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300 font-bold text-xs flex items-center justify-center">
                        {idx + 1}
                      </span>
                      <h4 className="text-base font-bold text-slate-900 dark:text-white">
                        {dalil.surah} Ayat {dalil.ayat}
                      </h4>
                    </div>

                    <div className="flex items-center gap-2 self-end sm:self-auto">
                      <button
                        onClick={() => playVerseAudio(dalil.arab)}
                        className="px-3 py-1.5 bg-emerald-50 dark:bg-emerald-950/60 hover:bg-emerald-100 text-emerald-700 dark:text-emerald-300 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition cursor-pointer"
                        title="Dengarkan pelafalan ayat"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                        <span>Lantunkan</span>
                      </button>
                      <button
                        onClick={() => copyToClipboard(`${dalil.arab}\n\n${dalil.arti}`, `${dalil.surah}:${dalil.ayat}`)}
                        className="px-2.5 py-1.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-600 dark:text-slate-300 rounded-lg text-xs transition cursor-pointer"
                        title="Salin ayat"
                      >
                        <Copy className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Arabic Text */}
                  <div className="p-4 bg-amber-50/40 dark:bg-slate-800/60 rounded-xl border border-amber-100 dark:border-slate-800">
                    <p className="text-right font-serif text-xl sm:text-2xl leading-loose text-slate-900 dark:text-amber-100 tracking-wide">
                      {dalil.arab}
                    </p>
                  </div>

                  <div className="space-y-2 text-xs sm:text-sm">
                    <p className="text-slate-600 dark:text-slate-400 italic font-mono leading-relaxed">
                      "{dalil.latin}"
                    </p>
                    <p className="text-slate-800 dark:text-slate-200 font-medium leading-relaxed">
                      <strong>Artinya:</strong> "{dalil.arti}"
                    </p>
                    <div className="p-3 bg-emerald-50/50 dark:bg-emerald-950/20 rounded-xl text-xs text-emerald-900 dark:text-emerald-300 border border-emerald-100 dark:border-emerald-900/30">
                      <strong>Kandungan Hukum:</strong> {dalil.keterangan}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hadits-Hadits Shahih */}
          <div className="space-y-4">
            <h3 className="text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
              <BookmarkCheck className="w-5 h-5 text-emerald-600" />
              <span>Hadits-Hadits Shahih tentang Kemuliaan Haji & Umrah</span>
            </h3>

            <div className="grid grid-cols-1 gap-4">
              {MATERI_KELAS_8_SEM_2_BAB_9.pengertianHajiUmrah.haditsShahih.map((hadits, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 sm:p-6 shadow-sm space-y-3"
                >
                  <div className="flex items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-2.5">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200 text-xs font-bold">
                        {hadits.perawi}
                      </span>
                      <span className="text-xs text-slate-500">{hadits.nomor}</span>
                    </div>

                    <button
                      onClick={() => copyToClipboard(`${hadits.arab}\n\n${hadits.arti}`, hadits.perawi)}
                      className="px-2 py-1 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-600 rounded text-xs transition cursor-pointer"
                    >
                      <Copy className="w-3 h-3" />
                    </button>
                  </div>

                  <p className="text-right font-serif text-lg sm:text-xl leading-relaxed text-slate-900 dark:text-amber-100">
                    {hadits.arab}
                  </p>

                  <p className="text-xs text-slate-500 italic font-mono">{hadits.latin}</p>

                  <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
                    "{hadits.arti}"
                  </p>

                  <div className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl text-xs text-slate-700 dark:text-slate-300 border border-slate-100 dark:border-slate-800">
                    <strong>Syarah Hadis:</strong> {hadits.syarah}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 2: SYARAT, RUKUN, WAJIB, LARANGAN IHRAM & MACAM DAM                  */}
      {/* ========================================================================= */}
      {activeTab === '2-syarat-rukun-wajib' && (
        <div className="space-y-6">
          {/* 1. Syarat Wajib Haji & Kriteria Istitha'ah */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm space-y-4">
            <div>
              <h3 className="text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span>5 Syarat Wajib Haji & Kriteria Kemampuan (Istitha\'ah)</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                Seseorang baru terkena kewajiban menunaikan haji jika telah memenuhi kelima syarat ini
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
              {MATERI_KELAS_8_SEM_2_BAB_9.ketentuanSyaratRukunWajib.syaratWajibHaji.map((item, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-2xl border transition-all ${
                    idx === 4
                      ? 'sm:col-span-2 lg:col-span-2 bg-gradient-to-br from-amber-50/70 to-emerald-50/70 dark:from-slate-800 dark:to-emerald-950/40 border-amber-300 dark:border-amber-700/50 shadow-sm'
                      : 'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-800'
                  }`}
                >
                  <h4 className="text-sm font-black text-slate-900 dark:text-white mb-1.5 flex items-center justify-between">
                    <span>{item.syarat}</span>
                    {idx === 4 && (
                      <span className="px-2 py-0.5 bg-amber-400 text-amber-950 rounded text-[10px] font-black uppercase">
                        Syarat Spesifik
                      </span>
                    )}
                  </h4>
                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed mb-3">
                    {item.penjelasan}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-slate-200/60 dark:border-slate-700">
                    <span className="text-[11px] font-bold text-emerald-800 dark:text-emerald-300 block">
                      Rincian Kriteria:
                    </span>
                    {item.kriteriaIstithaah.map((krit, kIdx) => (
                      <div key={kIdx} className="flex items-start gap-1.5 text-xs text-slate-600 dark:text-slate-300">
                        <span className="text-emerald-600 font-bold">•</span>
                        <span>{krit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 2. Enam Rukun Haji (Tidak Bisa Diganti Dam) */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h3 className="text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
                  <ShieldAlert className="w-5 h-5 text-rose-600" />
                  <span>6 Rukun Haji (Pilar Penentu Keabsahan - Tidak Bisa Diganti Dam)</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                  Jika salah satu rukun tertinggal, ibadah haji BATAL dan wajib diulang pada tahun berikutnya
                </p>
              </div>

              <span className="px-3 py-1 bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-200 rounded-full text-xs font-bold self-start sm:self-auto">
                Wajib Dilakukan Sendiri
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
              {MATERI_KELAS_8_SEM_2_BAB_9.ketentuanSyaratRukunWajib.rukunHaji.map((rukun) => (
                <div
                  key={rukun.urutan}
                  className="bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-800 p-4 flex flex-col justify-between space-y-3"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="w-6 h-6 rounded-full bg-emerald-600 text-white font-black text-xs flex items-center justify-center">
                        {rukun.urutan}
                      </span>
                      <span className="text-xs font-arabic font-bold text-emerald-700 dark:text-emerald-300">
                        {rukun.namaArab}
                      </span>
                    </div>

                    <h4 className="text-sm font-black text-slate-900 dark:text-white">{rukun.nama}</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {rukun.deskripsi}
                    </p>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-slate-200 dark:border-slate-700 text-xs">
                    <div className="p-2 bg-rose-50 dark:bg-rose-950/30 rounded-lg text-rose-900 dark:text-rose-200 text-[11px] leading-relaxed">
                      <strong>Jika Tertinggal:</strong> {rukun.konsekuensiJikaTertinggal}
                    </div>
                    <div className="p-2 bg-emerald-50 dark:bg-emerald-950/30 rounded-lg text-emerald-900 dark:text-emerald-200 text-[11px] leading-relaxed">
                      <strong>Hikmah:</strong> {rukun.hikmah}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 3. Wajib Haji (Bisa Ditebus dengan Dam) */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h3 className="text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
                  <BookmarkCheck className="w-5 h-5 text-amber-600" />
                  <span>7 Wajib Haji (Kewajiban Ibadah yang Dapat Ditebus dengan Dam)</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                  Jika tertinggal tanpa uzur syar\'i hajinya tetap sah, namun berdosa dan wajib membayar Dam (denda)
                </p>
              </div>

              <span className="px-3 py-1 bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-200 rounded-full text-xs font-bold self-start sm:self-auto">
                Dapat Diganti Dam
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              {MATERI_KELAS_8_SEM_2_BAB_9.ketentuanSyaratRukunWajib.wajibHaji.map((wajib) => (
                <div
                  key={wajib.urutan}
                  className="bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-800 p-4 space-y-2.5"
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-md bg-amber-500 text-slate-950 font-bold text-xs flex items-center justify-center">
                        {wajib.urutan}
                      </span>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">{wajib.nama}</h4>
                    </div>
                    <span className="text-xs font-arabic text-slate-500 dark:text-slate-400">{wajib.namaArab}</span>
                  </div>

                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                    {wajib.penjelasan}
                  </p>

                  <div className="p-2.5 bg-amber-50/60 dark:bg-amber-950/20 rounded-xl border border-amber-200/50 dark:border-amber-900/40 text-[11px] space-y-1">
                    <p className="text-amber-900 dark:text-amber-200">
                      <strong>Tempat & Waktu:</strong> {wajib.tempatDanWaktu}
                    </p>
                    <p className="text-rose-800 dark:text-rose-300">
                      <strong>Bila Ditinggalkan:</strong> {wajib.konsekuensiJikaTertinggal}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 4. Larangan-Larangan Ihram Interaktif */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-rose-600" />
                  <span>Larangan-Larangan Selama dalam Keadaan Ihram</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                  Pilah berdasarkan kategori larangan untuk pria, wanita, atau umum
                </p>
              </div>

              {/* Filter Tabs */}
              <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl self-start sm:self-auto">
                {(['Semua', 'Pria', 'Wanita', 'Umum'] as const).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setLaranganFilter(cat)}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                      laranganFilter === cat
                        ? 'bg-emerald-600 text-white shadow-xs'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-2">
              {filteredLarangan.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 space-y-2"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-black uppercase ${
                        item.kategori === 'Pria'
                          ? 'bg-blue-100 text-blue-900 dark:bg-blue-950 dark:text-blue-200'
                          : item.kategori === 'Wanita'
                          ? 'bg-rose-100 text-rose-900 dark:bg-rose-950 dark:text-rose-200'
                          : 'bg-emerald-100 text-emerald-900 dark:bg-emerald-950 dark:text-emerald-200'
                      }`}
                    >
                      Khusus {item.kategori}
                    </span>
                  </div>

                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">{item.larangan}</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{item.penjelasan}</p>

                  <div className="p-2 bg-rose-50 dark:bg-rose-950/20 rounded-lg text-[11px] text-rose-900 dark:text-rose-200 border border-rose-200/50 dark:border-rose-900/30">
                    <strong>Konsekuensi Dam:</strong> {item.konsekuensiDam}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 5. Macam-Macam Dam (Denda Haji) */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm space-y-4">
            <div>
              <h3 className="text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
                <Scale className="w-5 h-5 text-emerald-600" />
                <span>4 Klasifikasi Dam (Denda) dalam Fikih Haji</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                Pilih kategori dam untuk mempelajari sebab pelanggaran dan opsi tebusannya
              </p>
            </div>

            {/* Dam Selection Tabs */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {MATERI_KELAS_8_SEM_2_BAB_9.ketentuanSyaratRukunWajib.macamDamHaji.map((dam, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedDamIndex(idx)}
                  className={`p-3 rounded-xl text-left text-xs font-bold transition-all border cursor-pointer ${
                    selectedDamIndex === idx
                      ? 'bg-emerald-600 text-white border-emerald-600 shadow-md'
                      : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-emerald-400'
                  }`}
                >
                  <span className="block text-[10px] opacity-80 mb-0.5">Tipe {idx + 1}</span>
                  <span className="line-clamp-2">{dam.jenis.split('(')[0]}</span>
                </button>
              ))}
            </div>

            {/* Active Dam Detail Card */}
            {(() => {
              const currentDam =
                MATERI_KELAS_8_SEM_2_BAB_9.ketentuanSyaratRukunWajib.macamDamHaji[selectedDamIndex];
              return (
                <div className="bg-gradient-to-br from-slate-50 to-emerald-50/30 dark:from-slate-800/80 dark:to-slate-800 p-5 sm:p-6 rounded-2xl border border-emerald-500/20 space-y-4">
                  <div>
                    <span className="px-2.5 py-0.5 bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-200 text-xs font-bold rounded-full">
                      {currentDam.kategori}
                    </span>
                    <h4 className="text-base font-black text-slate-900 dark:text-white mt-1.5">{currentDam.jenis}</h4>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                    {/* Sebab Terkena */}
                    <div className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                      <span className="font-bold text-rose-600 dark:text-rose-400 block">
                        Sebab-Sebab Terkena Dam Ini:
                      </span>
                      <ul className="space-y-1 text-slate-700 dark:text-slate-300">
                        {currentDam.sebabTerkena.map((s, sIdx) => (
                          <li key={sIdx} className="flex items-start gap-1.5">
                            <span className="text-rose-500 font-bold">•</span>
                            <span>{s}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Pilihan Denda */}
                    <div className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                      <span className="font-bold text-emerald-600 dark:text-emerald-400 block">
                        Ketentuan / Opsi Tebusan (Fidyah):
                      </span>
                      <ul className="space-y-1 text-slate-700 dark:text-slate-300">
                        {currentDam.pilihanDenda.map((p, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-1.5">
                            <span className="text-emerald-600 font-bold">✓</span>
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

      {/* ========================================================================= */}
      {/* TAB 3: TATA CARA PELAKSANAAN HAJI (TAMATTU', IFRAD, QIRAN)               */}
      {/* ========================================================================= */}
      {activeTab === '3-tata-cara' && (
        <div className="space-y-6">
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm space-y-4">
            <div>
              <h3 className="text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
                <Compass className="w-5 h-5 text-emerald-600" />
                <span>3 Model Tata Cara Pelaksanaan Haji (Haji Tamattu\', Ifrad, & Qiran)</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                {MATERI_KELAS_8_SEM_2_BAB_9.tataCaraPelaksanaanHaji.pengantar}
              </p>
            </div>

            {/* Cara Selector Tabs */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              {MATERI_KELAS_8_SEM_2_BAB_9.tataCaraPelaksanaanHaji.tigaMetode.map((metode, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedCaraHaji(idx)}
                  className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                    selectedCaraHaji === idx
                      ? 'bg-emerald-600 text-white border-emerald-600 shadow-md'
                      : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-emerald-400'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span
                      className={`text-xs font-black uppercase px-2 py-0.5 rounded ${
                        selectedCaraHaji === idx
                          ? 'bg-white/20 text-white'
                          : 'bg-emerald-100 text-emerald-900 dark:bg-emerald-950 dark:text-emerald-300'
                      }`}
                    >
                      Metode {idx + 1}
                    </span>
                    <span className="text-xs font-arabic opacity-80">{metode.namaArab}</span>
                  </div>
                  <h4 className="text-sm sm:text-base font-bold line-clamp-1">{metode.nama.split('(')[0]}</h4>
                  <p
                    className={`text-xs mt-1 line-clamp-2 ${
                      selectedCaraHaji === idx ? 'text-emerald-100' : 'text-slate-500 dark:text-slate-400'
                    }`}
                  >
                    {idx === 0
                      ? 'Mendahulukan Umrah lalu Haji (Mayoritas Jamaah RI)'
                      : idx === 1
                      ? 'Haji terlebih dahulu, baru Umrah (Bebas Dam)'
                      : 'Menggabungkan Niat Haji dan Umrah Sekaligus'}
                  </p>
                </button>
              ))}
            </div>

            {/* Active Cara Card */}
            {(() => {
              const currentCara =
                MATERI_KELAS_8_SEM_2_BAB_9.tataCaraPelaksanaanHaji.tigaMetode[selectedCaraHaji];
              return (
                <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-700 pb-3">
                    <div>
                      <h4 className="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                        {currentCara.nama}
                      </h4>
                      <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                        {currentCara.namaArab}
                      </span>
                    </div>

                    <button
                      onClick={() =>
                        onAskAI(
                          `Jelaskan secara mendalam tentang ${currentCara.nama}, mengapa metode ini memiliki aturan seperti itu, dan bagaimana simulasi teknis pelaksanaannya bagi jamaah haji!`
                        )
                      }
                      className="px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5 self-start sm:self-auto cursor-pointer"
                    >
                      <Bot className="w-3.5 h-3.5" />
                      <span>Tanyakan Detail Model Ini via AI</span>
                    </button>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    <div className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
                      <span className="font-bold text-slate-900 dark:text-white block mb-1">
                        Urutan & Alur Pelaksanaan:
                      </span>
                      <p>{currentCara.urutanPelaksanaan}</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div className="p-3.5 bg-emerald-50/60 dark:bg-emerald-950/20 rounded-xl border border-emerald-200 dark:border-emerald-900/40">
                        <span className="font-bold text-emerald-900 dark:text-emerald-200 block mb-1">
                          ✓ Kelebihan Utama:
                        </span>
                        <p>{currentCara.kelebihan}</p>
                      </div>

                      <div className="p-3.5 bg-amber-50/60 dark:bg-amber-950/20 rounded-xl border border-amber-200 dark:border-amber-900/40">
                        <span className="font-bold text-amber-900 dark:text-amber-200 block mb-1">
                          ⚠️ Tantangan & Konsekuensi Dam:
                        </span>
                        <p>{currentCara.kewajibanDam}</p>
                      </div>
                    </div>

                    <div className="p-3 bg-blue-50 dark:bg-blue-950/30 rounded-xl text-blue-900 dark:text-blue-200 border border-blue-200 dark:border-blue-900/40">
                      <strong>Rekomendasi Pemilihan:</strong> {currentCara.rekomendasi}
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 4: PANDUAN MANASIK HAJI PRAKTIS                                       */}
      {/* ========================================================================= */}
      {activeTab === '4-manasik-haji' && (
        <div className="space-y-6">
          {/* Banner Lafaz Talbiyah Lengkap */}
          <div className="bg-gradient-to-r from-emerald-900 via-teal-900 to-slate-900 rounded-2xl p-6 sm:p-8 text-white shadow-lg space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-amber-400 text-amber-950 font-black text-xs">
                  IKRAR TAUHID AGUNG
                </span>
                <h3 className="text-lg font-bold text-white">Lafaz Kalimat Talbiyah</h3>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => playVerseAudio(MATERI_KELAS_8_SEM_2_BAB_9.manasikHajiPraktis.lafazTalbiyah.arab)}
                  className="px-4 py-2 bg-amber-400 hover:bg-amber-300 text-amber-950 font-black rounded-xl text-xs sm:text-sm flex items-center gap-2 shadow-md transition cursor-pointer"
                >
                  <Volume2 className="w-4 h-4" />
                  <span>Putar Lantunan Talbiyah</span>
                </button>
                <button
                  onClick={() =>
                    copyToClipboard(
                      `${MATERI_KELAS_8_SEM_2_BAB_9.manasikHajiPraktis.lafazTalbiyah.arab}\n\n${MATERI_KELAS_8_SEM_2_BAB_9.manasikHajiPraktis.lafazTalbiyah.arti}`,
                      'Lafaz Talbiyah'
                    )
                  }
                  className="p-2 bg-white/10 hover:bg-white/20 rounded-xl text-white transition cursor-pointer"
                  title="Salin Talbiyah"
                >
                  <Copy className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="p-4 sm:p-6 bg-black/30 rounded-2xl border border-white/10">
              <p className="text-center font-serif text-2xl sm:text-3xl leading-loose text-amber-200 tracking-wider">
                {MATERI_KELAS_8_SEM_2_BAB_9.manasikHajiPraktis.lafazTalbiyah.arab}
              </p>
            </div>

            <div className="space-y-2 text-xs sm:text-sm">
              <p className="text-emerald-200 italic font-mono text-center">
                "{MATERI_KELAS_8_SEM_2_BAB_9.manasikHajiPraktis.lafazTalbiyah.latin}"
              </p>
              <p className="text-emerald-100/90 text-center font-medium max-w-2xl mx-auto">
                <strong>Artinya:</strong> "{MATERI_KELAS_8_SEM_2_BAB_9.manasikHajiPraktis.lafazTalbiyah.arti}"
              </p>
              <p className="text-[11px] text-emerald-200/80 text-center pt-1">
                {MATERI_KELAS_8_SEM_2_BAB_9.manasikHajiPraktis.lafazTalbiyah.maknaFilosofis}
              </p>
            </div>
          </div>

          {/* 5 Miqat Makani */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm space-y-4">
            <div>
              <h3 className="text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
                <Globe2 className="w-5 h-5 text-emerald-600" />
                <span>5 Titik Miqat Makani (Batas Geografis Awal Niat Ihram)</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                Ditetapkan oleh Rasulullah Saw. sebagai batas wajib ihram sebelum melintasi tanah suci Makkah
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {MATERI_KELAS_8_SEM_2_BAB_9.manasikHajiPraktis.miqatMakaniList.map((miqat, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">{miqat.namaMiqat}</h4>
                    <span className="text-[10px] px-2 py-0.5 bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-200 rounded font-bold">
                      {miqat.jarakKeMakkah}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400">{miqat.lokasiModern}</p>
                  <div className="p-2 bg-emerald-50 dark:bg-emerald-950/20 rounded-lg text-[11px] text-emerald-900 dark:text-emerald-200">
                    <strong>Peruntukan:</strong> {miqat.peruntukanJamaah}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Alur Kronologis Manasik Haji (Step-by-Step 8-13 Dzulhijjah) */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm space-y-4">
            <div>
              <h3 className="text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
                <Footprints className="w-5 h-5 text-emerald-600" />
                <span>Simulasi Alur Kronologis Manasik Haji (8 - 13 Dzulhijjah)</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                Klik tahapan hari di bawah ini untuk melihat rangkaian amalan praktis, lokasi, dan doanya
              </p>
            </div>

            {/* Steps Timeline Header Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
              {MATERI_KELAS_8_SEM_2_BAB_9.manasikHajiPraktis.alurKronologis.map((tahap, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveManasikStep(idx)}
                  className={`p-3 rounded-xl text-left transition-all border cursor-pointer ${
                    activeManasikStep === idx
                      ? 'bg-emerald-600 text-white border-emerald-600 shadow-md font-bold'
                      : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-emerald-400'
                  }`}
                >
                  <span className="block text-[10px] opacity-75">Tahap {idx + 1}</span>
                  <span className="line-clamp-1 text-xs">{tahap.hariTanggal.split('(')[0]}</span>
                </button>
              ))}
            </div>

            {/* Active Step Content */}
            {(() => {
              const currentStep =
                MATERI_KELAS_8_SEM_2_BAB_9.manasikHajiPraktis.alurKronologis[activeManasikStep];
              return (
                <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-emerald-50/40 dark:from-slate-800 dark:to-emerald-950/20 border border-slate-200 dark:border-slate-700 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-700 pb-3">
                    <div>
                      <span className="px-2.5 py-0.5 bg-amber-400 text-amber-950 text-xs font-black rounded-full uppercase">
                        {currentStep.hariTanggal}
                      </span>
                      <h4 className="text-base sm:text-lg font-black text-slate-900 dark:text-white mt-1.5">
                        {currentStep.judulTahap}
                      </h4>
                      <p className="text-xs text-emerald-700 dark:text-emerald-400 font-semibold flex items-center gap-1.5 mt-0.5">
                        <Compass className="w-3.5 h-3.5" />
                        <span>Lokasi: {currentStep.lokasi}</span>
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() =>
                          setActiveManasikStep((prev) =>
                            prev > 0 ? prev - 1 : MATERI_KELAS_8_SEM_2_BAB_9.manasikHajiPraktis.alurKronologis.length - 1
                          )
                        }
                        className="p-2 rounded-xl bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:bg-slate-100 transition cursor-pointer"
                        title="Tahap Sebelumnya"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() =>
                          setActiveManasikStep((prev) =>
                            prev < MATERI_KELAS_8_SEM_2_BAB_9.manasikHajiPraktis.alurKronologis.length - 1 ? prev + 1 : 0
                          )
                        }
                        className="p-2 rounded-xl bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:bg-slate-100 transition cursor-pointer"
                        title="Tahap Selanjutnya"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm">
                    <div className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                      <span className="font-bold text-slate-900 dark:text-white block">
                        Rangkaian Amalan Pokok:
                      </span>
                      <ul className="space-y-1.5 text-slate-700 dark:text-slate-300">
                        {currentStep.amalanPokok.map((amalan, aIdx) => (
                          <li key={aIdx} className="flex items-start gap-2">
                            <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                              {aIdx + 1}
                            </span>
                            <span className="leading-relaxed">{amalan}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-3.5 bg-amber-50/70 dark:bg-amber-950/20 rounded-xl border border-amber-200 dark:border-amber-900/40 space-y-1">
                      <span className="font-bold text-amber-900 dark:text-amber-200 block text-xs">
                        Lafaz Doa / Zikir Utama:
                      </span>
                      <p className="font-serif text-sm sm:text-base text-right text-slate-900 dark:text-amber-100">
                        {currentStep.doaDanDzikir}
                      </p>
                    </div>

                    <div className="p-3 bg-emerald-50 dark:bg-emerald-950/30 rounded-xl text-emerald-900 dark:text-emerald-200 border border-emerald-200 text-xs">
                      <strong>💡 Tips Praktis Jamaah:</strong> {currentStep.tipsPraktis}
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>

          {/* Doa-Doa Manasik Penting */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm space-y-4">
            <div>
              <h3 className="text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
                <BookmarkCheck className="w-5 h-5 text-emerald-600" />
                <span>Kumpulan Doa-Doa Penting Manasik Haji & Umrah</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                Doa-doa ma'tsur yang dilafalkan pada momentum sakral di Tanah Suci
              </p>
            </div>

            <div className="space-y-4">
              {MATERI_KELAS_8_SEM_2_BAB_9.manasikHajiPraktis.doaDoaManasikPenting.map((doa, idx) => (
                <div
                  key={idx}
                  className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 space-y-2.5"
                >
                  <div className="flex items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-700 pb-2">
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">{doa.namaDoa}</h4>
                      <span className="text-[11px] text-emerald-700 dark:text-emerald-400">{doa.waktuPelafalan}</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => playVerseAudio(doa.arab)}
                        className="px-2.5 py-1 bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200 rounded-lg text-xs font-semibold flex items-center gap-1 cursor-pointer"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                        <span>Lafalkan</span>
                      </button>
                      <button
                        onClick={() => copyToClipboard(`${doa.arab}\n\n${doa.arti}`, doa.namaDoa)}
                        className="p-1.5 bg-slate-200 dark:bg-slate-700 rounded-lg text-slate-700 dark:text-slate-200 cursor-pointer"
                      >
                        <Copy className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  <p className="text-right font-serif text-lg sm:text-xl leading-relaxed text-slate-900 dark:text-amber-100">
                    {doa.arab}
                  </p>

                  <p className="text-xs text-slate-500 italic font-mono">{doa.latin}</p>

                  <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-300 font-medium leading-relaxed">
                    <strong>Artinya:</strong> "{doa.arti}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 5: HIKMAH HAJI & UMRAH                                                */}
      {/* ========================================================================= */}
      {activeTab === '5-hikmah' && (
        <div className="space-y-6">
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm space-y-4">
            <div>
              <h3 className="text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
                <Star className="w-5 h-5 text-amber-400" />
                <span>5 Dimensi Hikmah Luhur Ibadah Haji dan Umrah</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                {MATERI_KELAS_8_SEM_2_BAB_9.hikmahHajiUmrah.pengantar}
              </p>
            </div>

            <div className="space-y-4 pt-2">
              {MATERI_KELAS_8_SEM_2_BAB_9.hikmahHajiUmrah.daftarHikmah.map((hikmah, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 sm:p-6 space-y-3"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="w-8 h-8 rounded-xl bg-amber-400 text-amber-950 font-black text-xs flex items-center justify-center">
                      0{idx + 1}
                    </span>
                    <div>
                      <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wide">
                        {hikmah.dimensi}
                      </span>
                      <h4 className="text-sm sm:text-base font-black text-slate-900 dark:text-white">
                        {hikmah.judul}
                      </h4>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {hikmah.uraian}
                  </p>

                  <div className="p-3 bg-emerald-50 dark:bg-emerald-950/30 rounded-xl text-xs text-emerald-900 dark:text-emerald-200 border border-emerald-200/60 dark:border-emerald-900/40">
                    <strong>Penerapan Nyata Karakter Siswa:</strong> {hikmah.penerapanPelajar}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 6: STUDI KASUS KONTEKSTUAL & LEMBAR REFLEKSI DIRI                     */}
      {/* ========================================================================= */}
      {activeTab === '6-kasus-refleksi' && (
        <div className="space-y-6">
          {/* Studi Kasus Kontekstual Modern */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm space-y-4">
            <div>
              <h3 className="text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-amber-500" />
                <span>3 Studi Kasus Kontekstual Ibadah Haji di Era Modern</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                Diskusikan fenomena riil masyarakat untuk mengasah nalar kritis dan pemahaman fikih siswa
              </p>
            </div>

            <div className="space-y-5 pt-2">
              {MATERI_KELAS_8_SEM_2_BAB_9.studiKasusKontekstual.map((kasus) => (
                <div
                  key={kasus.id}
                  className="p-5 sm:p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 space-y-4"
                >
                  <div className="flex items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-700 pb-2.5">
                    <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                      <span>{kasus.judul}</span>
                    </h4>
                    <button
                      onClick={() =>
                        onAskAI(
                          `Mari berdiskusi tentang studi kasus ini: ${kasus.judul}. Skenario: "${kasus.skenario}". Bagaimana analisis fikih syariat dan etika yang harus diambil?`
                        )
                      }
                      className="px-3 py-1 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-bold transition flex items-center gap-1 cursor-pointer"
                    >
                      <Bot className="w-3.5 h-3.5" />
                      <span>Bahas Kasus Ini via AI</span>
                    </button>
                  </div>

                  <div className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    <span className="font-bold text-slate-900 dark:text-white block mb-1">
                      Deskripsi Skenario:
                    </span>
                    <p>{kasus.skenario}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm">
                    <div className="p-3.5 bg-amber-50 dark:bg-amber-950/20 rounded-xl border border-amber-200 text-amber-950 dark:text-amber-200 space-y-1">
                      <span className="font-bold block">⚖️ Analisis Syariat Islam:</span>
                      <p className="leading-relaxed">{kasus.analisisSyariat}</p>
                    </div>

                    <div className="p-3.5 bg-emerald-50 dark:bg-emerald-950/20 rounded-xl border border-emerald-200 text-emerald-950 dark:text-emerald-200 space-y-1">
                      <span className="font-bold block">💡 Solusi & Nilai Keteladanan:</span>
                      <p className="leading-relaxed">{kasus.solusiDanKeteladanan}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Lembar Muhasabah 8 Indikator Karakter */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h3 className="text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
                  <BookmarkCheck className="w-5 h-5 text-emerald-600" />
                  <span>Lembar Refleksi Diri (Muhasabah 8 Dimensi Karakter)</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                  Evaluasi sejauh mana nilai-nilai ketaatan, kesetaraan, dan kesabaran haji telah mewujud dalam sikapmu
                </p>
              </div>

              <span className="px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200 text-xs font-bold self-start sm:self-auto">
                Penilaian Diri Siswa
              </span>
            </div>

            <div className="space-y-3 pt-2">
              {MATERI_KELAS_8_SEM_2_BAB_9.lembarMuhasabah.map((item) => (
                <div
                  key={item.id}
                  className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                >
                  <div className="space-y-1 max-w-2xl">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-emerald-600 text-white font-bold text-[10px] flex items-center justify-center">
                        {item.id}
                      </span>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                        {item.indikator}
                      </h4>
                      <span className="text-[10px] px-2 py-0.2 rounded bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-semibold">
                        {item.aspekKarakter}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pl-7">
                      {item.deskripsiSikap}
                    </p>
                  </div>

                  <div className="flex items-center gap-1 pl-7 sm:pl-0 shrink-0">
                    {(['terbiasa', 'berikhtiar', 'belum'] as const).map((status) => (
                      <button
                        key={status}
                        onClick={() =>
                          setChecklistMuhasabah((prev) => ({
                            ...prev,
                            [item.id]: status
                          }))
                        }
                        className={`px-2.5 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                          checklistMuhasabah[item.id] === status
                            ? status === 'terbiasa'
                              ? 'bg-emerald-600 text-white shadow-xs'
                              : status === 'berikhtiar'
                              ? 'bg-amber-500 text-white shadow-xs'
                              : 'bg-slate-500 text-white shadow-xs'
                            : 'bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-600 hover:bg-slate-100'
                        }`}
                      >
                        {status === 'terbiasa' ? 'Terbiasa' : status === 'berikhtiar' ? 'Berikhtiar' : 'Belum'}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 7: KUIS HOTS INTERAKTIF                                               */}
      {/* ========================================================================= */}
      {activeTab === '7-kuis-hots' && (
        <div className="space-y-6">
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
                  <Award className="w-5 h-5 text-amber-400" />
                  <span>Kuis Evaluasi Penalaran HOTS (Higher Order Thinking Skills)</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                  Uji pemahaman analitis melalui 5 butir soal pemecahan masalah fikih haji dan umrah
                </p>
              </div>

              {showQuizResults && (
                <div className="flex items-center gap-3">
                  <div className="px-4 py-2 bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-200 rounded-xl font-black text-sm">
                    Skor: {calculateScore()} / 100
                  </div>
                  <button
                    onClick={resetQuiz}
                    className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 hover:text-slate-900 transition cursor-pointer"
                    title="Ulangi Kuis"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>

            <div className="space-y-6 pt-2">
              {MATERI_KELAS_8_SEM_2_BAB_9.soalEvaluasiHots.map((soal, qIdx) => {
                const isAnswered = userAnswers[soal.id] !== undefined;
                const isCorrect = userAnswers[soal.id] === soal.kunciJawaban;

                return (
                  <div
                    key={soal.id}
                    className={`p-5 sm:p-6 rounded-2xl border transition-all ${
                      showQuizResults
                        ? isCorrect
                          ? 'bg-emerald-50/50 dark:bg-emerald-950/20 border-emerald-400'
                          : 'bg-rose-50/50 dark:bg-rose-950/20 border-rose-400'
                        : 'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-800'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="px-3 py-1 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-bold">
                        Soal No. {qIdx + 1}
                      </span>
                      <span className="text-xs text-slate-500 font-semibold">{soal.kompetensiKognitif}</span>
                    </div>

                    {/* Stimulus Kasus */}
                    <div className="p-3.5 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-3">
                      <strong className="block text-slate-900 dark:text-white mb-1">Stimulus Kasus:</strong>
                      <p>{soal.stimulus}</p>
                    </div>

                    <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-3">
                      {soal.pertanyaan}
                    </h4>

                    {/* Pilihan Jawaban */}
                    <div className="space-y-2">
                      {soal.pilihan.map((pilihan, pIdx) => {
                        const isSelected = userAnswers[soal.id] === pIdx;
                        const isKey = soal.kunciJawaban === pIdx;

                        let btnStyle = 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-emerald-400';
                        if (showQuizResults) {
                          if (isKey) {
                            btnStyle = 'bg-emerald-100 dark:bg-emerald-950/80 border-emerald-500 text-emerald-900 dark:text-emerald-100 font-bold';
                          } else if (isSelected && !isKey) {
                            btnStyle = 'bg-rose-100 dark:bg-rose-950/80 border-rose-500 text-rose-900 dark:text-rose-100';
                          }
                        } else if (isSelected) {
                          btnStyle = 'bg-emerald-600 text-white border-emerald-600 font-bold shadow-xs';
                        }

                        return (
                          <button
                            key={pIdx}
                            onClick={() => handleSelectAnswer(soal.id, pIdx)}
                            disabled={showQuizResults}
                            className={`w-full text-left p-3.5 rounded-xl border text-xs sm:text-sm transition-all flex items-start gap-3 cursor-pointer ${btnStyle}`}
                          >
                            <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center text-xs shrink-0 mt-0.5 font-bold">
                              {String.fromCharCode(65 + pIdx)}
                            </span>
                            <span className="leading-relaxed">{pilihan}</span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Pembahasan Lengkap Saat Selesai */}
                    {showQuizResults && (
                      <div className="mt-4 p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm space-y-2">
                        <div className="flex items-center gap-2">
                          {isCorrect ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          ) : (
                            <XCircle className="w-4 h-4 text-rose-600" />
                          )}
                          <span className={`font-bold ${isCorrect ? 'text-emerald-600' : 'text-rose-600'}`}>
                            {isCorrect ? 'Jawaban Anda Tepat!' : 'Jawaban Anda Kurang Tepat'}
                          </span>
                        </div>
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                          <strong>Pembahasan Syariat:</strong> {soal.pembahasanLengkap}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Tombol Submit Kuis */}
            <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-slate-200 dark:border-slate-800">
              <span className="text-xs text-slate-500">
                Terjawab: {Object.keys(userAnswers).length} dari {MATERI_KELAS_8_SEM_2_BAB_9.soalEvaluasiHots.length} Soal
              </span>

              {!showQuizResults ? (
                <button
                  onClick={() => {
                    if (Object.keys(userAnswers).length < MATERI_KELAS_8_SEM_2_BAB_9.soalEvaluasiHots.length) {
                      showToast('Mohon jawab seluruh butir soal sebelum melihat hasil evaluasi!', 'error');
                      return;
                    }
                    setShowQuizResults(true);
                    showToast('Evaluasi selesai! Periksa pembahasan jawaban Anda.', 'success');
                  }}
                  className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs sm:text-sm shadow-md transition cursor-pointer"
                >
                  Selesaikan & Periksa Nilai
                </button>
              ) : (
                <button
                  onClick={resetQuiz}
                  className="px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl text-xs sm:text-sm shadow-md transition flex items-center gap-2 cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Ulangi Kuis HOTS</span>
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Footer Navigation Bar */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-4 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 flex items-center justify-center font-bold text-xs">
            IX
          </span>
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
              Buku PAI Kelas VIII Bab 9 Selesai
            </h4>
            <p className="text-[11px] text-slate-500">Menerapkan Ketentuan Haji dan Umrah</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              setActiveTab('1-pengertian');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold shadow-sm transition flex items-center gap-1.5 cursor-pointer"
          >
            <span>Kembali ke Awal Bab</span>
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
