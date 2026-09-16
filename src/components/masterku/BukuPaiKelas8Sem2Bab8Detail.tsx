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
  ChevronRight,
  ChevronLeft,
  Compass,
  Star,
  Flame,
  UserCheck,
  Zap,
  GraduationCap,
  Glasses,
  Scale,
  Smile,
  AlertTriangle
} from 'lucide-react';
import {
  MATERI_KELAS_8_SEM_2_BAB_8,
  CiriCintaIlmuItem,
  ManfaatBerilmuItem,
  HikmahCintaIlmuItem,
  StudiKasusCintaIlmuItem
} from '../../data/materiKelas8Sem2Bab8Data';
import { useToast } from '../common/Toast';

interface Props {
  onAskAI: (prompt: string) => void;
}

type Bab8K8SubTab =
  | '1-pengertian'
  | '2-dalil'
  | '3-ciri-cinta-ilmu'
  | '4-manfaat-berilmu'
  | '5-hikmah-cinta-ilmu'
  | '6-kasus-refleksi'
  | '7-kuis-hots';

export const BukuPaiKelas8Sem2Bab8Detail: React.FC<Props> = ({ onAskAI }) => {
  const { showToast } = useToast();
  const [activeTab, setActiveTab] = useState<Bab8K8SubTab>('1-pengertian');

  // Filter for Manfaat Berilmu
  const [filterKategoriManfaat, setFilterKategoriManfaat] = useState<'Semua' | 'Duniawi' | 'Ukhrawi'>('Semua');

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
      showToast('Memutar lantunan pelafalan ayat/hadits...', 'info');
    } else {
      showToast('Browser Anda belum mendukung audio synthesizer.', 'info');
    }
  };

  // Filtered Manfaat list
  const filteredManfaat = MATERI_KELAS_8_SEM_2_BAB_8.manfaatBerilmu.filter(item => {
    if (filterKategoriManfaat === 'Duniawi') return item.kategori.startsWith('Duniawi');
    if (filterKategoriManfaat === 'Ukhrawi') return item.kategori.startsWith('Ukhrawi');
    return true;
  });

  // Calculate Quiz Score
  const calculateScore = () => {
    let correctCount = 0;
    MATERI_KELAS_8_SEM_2_BAB_8.soalEvaluasiHots.forEach(q => {
      if (userAnswers[q.id] === q.kunciJawaban) {
        correctCount++;
      }
    });
    return Math.round((correctCount / MATERI_KELAS_8_SEM_2_BAB_8.soalEvaluasiHots.length) * 100);
  };

  const totalReflectionChecked = Object.values(checkedReflection).filter(Boolean).length;
  const reflectionPercentage = Math.round(
    (totalReflectionChecked / MATERI_KELAS_8_SEM_2_BAB_8.refleksiDiriSiswa.length) * 100
  );

  return (
    <div className="space-y-6 animate-fadeIn pb-12">
      {/* ================= HEADER HERO BANNER ================= */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-900 via-indigo-800 to-teal-800 p-6 sm:p-8 text-white shadow-xl">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 rounded-full bg-cyan-400/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 -mb-10 w-64 h-64 rounded-full bg-emerald-400/10 blur-2xl pointer-events-none" />

        <div className="relative z-10 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 bg-amber-400 text-amber-950 font-black rounded-full text-xs tracking-wide shadow-sm flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> BUKU TEKS PAI KELAS VIII SEMESTER 2
            </span>
            <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-white font-bold rounded-full text-xs">
              Bab 8: Akidah & Akhlak
            </span>
            <span className="px-3 py-1 bg-emerald-500/80 text-white font-bold rounded-full text-xs flex items-center gap-1">
              <BookOpen className="w-3.5 h-3.5" /> Kurikulum Merdeka
            </span>
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white leading-tight">
              Menerapkan Makna Cinta Ilmu
            </h1>
            <p className="text-sm sm:text-base text-cyan-100/90 max-w-4xl leading-relaxed">
              Menumbuhkan Semangat Literasi, Riset Ilmiah, dan Akhlak Mulia dalam Menuntut Ilmu Demi Kemaslahatan Umat dan Kemajuan Bangsa
            </p>
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              onClick={() =>
                onAskAI(
                  'Halo Masterku AI, jelaskan rangkuman lengkap materi PAI Kelas 8 Semester 2 Bab 8 tentang Menerapkan Makna Cinta Ilmu: mulai dari pengertian, dalil naqli Q.S. Al-Mujadilah 11 dan hadis, ciri-ciri pecinta ilmu, manfaat berilmu dunia-akhirat, hingga hikmahnya!'
                )
              }
              className="px-4 py-2 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-950 rounded-xl text-xs sm:text-sm font-black shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer"
            >
              <Bot className="w-4 h-4" />
              <span>Tanya Masterku AI tentang Bab 8</span>
            </button>
            <div className="text-xs text-white/80 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Standar Pembelajaran PAI & Budi Pekerti SMP</span>
            </div>
          </div>
        </div>
      </div>

      {/* ================= NAVIGATION TABS (5 POKOK BAHASAN + EVALUASI) ================= */}
      <div className="bg-white dark:bg-slate-900 p-2 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-1.5 overflow-x-auto scrollbar-thin">
        <button
          onClick={() => setActiveTab('1-pengertian')}
          className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
            activeTab === '1-pengertian'
              ? 'bg-blue-600 text-white shadow-md'
              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>1. Pengertian Cinta Ilmu</span>
        </button>

        <button
          onClick={() => setActiveTab('2-dalil')}
          className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
            activeTab === '2-dalil'
              ? 'bg-blue-600 text-white shadow-md'
              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
        >
          <BookmarkCheck className="w-4 h-4" />
          <span>2. Dalil Naqli</span>
        </button>

        <button
          onClick={() => setActiveTab('3-ciri-cinta-ilmu')}
          className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
            activeTab === '3-ciri-cinta-ilmu'
              ? 'bg-blue-600 text-white shadow-md'
              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
        >
          <Star className="w-4 h-4" />
          <span>3. Ciri Cinta Ilmu</span>
        </button>

        <button
          onClick={() => setActiveTab('4-manfaat-berilmu')}
          className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
            activeTab === '4-manfaat-berilmu'
              ? 'bg-blue-600 text-white shadow-md'
              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
        >
          <Award className="w-4 h-4" />
          <span>4. Manfaat Berilmu</span>
        </button>

        <button
          onClick={() => setActiveTab('5-hikmah-cinta-ilmu')}
          className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
            activeTab === '5-hikmah-cinta-ilmu'
              ? 'bg-blue-600 text-white shadow-md'
              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
        >
          <Lightbulb className="w-4 h-4" />
          <span>5. Hikmah Cinta Ilmu</span>
        </button>

        <button
          onClick={() => setActiveTab('6-kasus-refleksi')}
          className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
            activeTab === '6-kasus-refleksi'
              ? 'bg-blue-600 text-white shadow-md'
              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
        >
          <HeartHandshake className="w-4 h-4" />
          <span>6. Studi Kasus & Refleksi</span>
        </button>

        <button
          onClick={() => setActiveTab('7-kuis-hots')}
          className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
            activeTab === '7-kuis-hots'
              ? 'bg-amber-500 text-slate-950 font-black shadow-md'
              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
        >
          <Brain className="w-4 h-4" />
          <span>7. Kuis Evaluasi HOTS</span>
        </button>
      </div>

      {/* ================= TAB 1: PENGERTIAN CINTA ILMU ================= */}
      {activeTab === '1-pengertian' && (
        <div className="space-y-6">
          {/* Apersepsi & Pengantar */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold">
                  01
                </div>
                <div>
                  <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white">
                    Pengertian Cinta Ilmu
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Makna Etimologis (Bahasa), Terminologis (Istilah Syariat), dan Pembagian Hukum
                  </p>
                </div>
              </div>
              <button
                onClick={() =>
                  onAskAI(
                    'Jelaskan pengertian ilmu secara bahasa dan istilah, hukum menuntut ilmu Fardhu \'Ain vs Fardhu Kifayah, serta 6 syarat ilmu menurut Imam Syafi\'i!'
                  )
                }
                className="text-xs text-blue-600 hover:text-blue-700 dark:text-blue-400 font-bold flex items-center gap-1 cursor-pointer"
              >
                <Bot className="w-3.5 h-3.5" />
                <span>Konsultasi AI</span>
              </button>
            </div>

            {/* Definisi Bahasa & Istilah */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50/50 dark:from-slate-800 dark:to-slate-800/60 border border-blue-100 dark:border-slate-700 space-y-3">
                <div className="flex items-center gap-2 text-blue-700 dark:text-blue-400 font-bold text-sm">
                  <Glasses className="w-4 h-4" />
                  <span>Secara Bahasa (Etimologi)</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {MATERI_KELAS_8_SEM_2_BAB_8.pengertianCintaIlmu.secaraBahasa.asalKata}
                </p>
                <div className="p-3 bg-white dark:bg-slate-900/80 rounded-xl border border-blue-200/60 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-300">
                  <span className="font-bold text-blue-700 dark:text-blue-400">Kesimpulan Bahasa: </span>
                  {MATERI_KELAS_8_SEM_2_BAB_8.pengertianCintaIlmu.secaraBahasa.maknaGabungan}
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-gradient-to-br from-indigo-50 to-teal-50/50 dark:from-slate-800 dark:to-slate-800/60 border border-indigo-100 dark:border-slate-700 space-y-3">
                <div className="flex items-center gap-2 text-indigo-700 dark:text-indigo-400 font-bold text-sm">
                  <GraduationCap className="w-4 h-4" />
                  <span>Secara Istilah Syariat (Terminologi)</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {MATERI_KELAS_8_SEM_2_BAB_8.pengertianCintaIlmu.secaraIstilah.definisi}
                </p>
                <div className="p-3 bg-white dark:bg-slate-900/80 rounded-xl border border-indigo-200/60 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-300">
                  <span className="font-bold text-indigo-700 dark:text-indigo-400">Urgensi Syariat: </span>
                  {MATERI_KELAS_8_SEM_2_BAB_8.pengertianCintaIlmu.secaraIstilah.urgensiMenuntutIlmu}
                </div>
              </div>
            </div>
          </div>

          {/* Pembagian Hukum Menuntut Ilmu: Fardhu 'Ain vs Fardhu Kifayah */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
            <div className="space-y-1">
              <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
                <Scale className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span>Pembagian Hukum Menuntut Ilmu dalam Islam</span>
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Syariat Islam mengelompokkan kewajiban mencari ilmu ke dalam dua tingkatan utama:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {MATERI_KELAS_8_SEM_2_BAB_8.pengertianCintaIlmu.pembagianHukumMenuntutIlmu.map((hukum, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl border bg-slate-50/70 dark:bg-slate-800/70 border-slate-200 dark:border-slate-700 space-y-3.5 shadow-xs"
                >
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 bg-blue-600 text-white font-black text-xs rounded-lg">
                      {hukum.kategori}
                    </span>
                    <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400">
                      Tingkat #{idx + 1}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                    {hukum.pengertian}
                  </p>

                  <div className="space-y-1.5">
                    <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                      Ruang Lingkup Ilmu:
                    </span>
                    <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-400">
                      {hukum.lingkupIlmu.map((item, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-3 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-900/60 text-xs text-amber-900 dark:text-amber-200 flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span><strong>Konsekuensi:</strong> {hukum.konsekuensi}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 6 Syarat Mutlak Penuntut Ilmu (Syair Imam Syafi'i) */}
          <div className="bg-gradient-to-br from-indigo-900 via-blue-900 to-slate-900 p-6 sm:p-7 rounded-3xl text-white shadow-lg space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
              <div className="space-y-1">
                <span className="px-2.5 py-0.5 bg-amber-400 text-amber-950 font-black rounded text-[11px]">
                  Nasihat Hikmah Keilmuan
                </span>
                <h3 className="text-lg sm:text-xl font-black text-white">
                  6 Syarat Meraih Keberkahan Ilmu menurut Imam Syafi'i
                </h3>
              </div>
              <button
                onClick={() =>
                  playVerseAudio(MATERI_KELAS_8_SEM_2_BAB_8.pengertianCintaIlmu.nasihatImamSyafii.syairArab)
                }
                className="flex items-center gap-2 px-3 py-1.5 bg-white/15 hover:bg-white/25 rounded-xl text-xs font-bold transition cursor-pointer self-start sm:self-auto"
              >
                <Volume2 className="w-3.5 h-3.5 text-amber-300" />
                <span>Dengarkan Syair</span>
              </button>
            </div>

            <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-xs space-y-2 text-right">
              <p className="font-arabic text-lg sm:text-xl text-amber-300 leading-loose">
                {MATERI_KELAS_8_SEM_2_BAB_8.pengertianCintaIlmu.nasihatImamSyafii.syairArab}
              </p>
              <p className="text-left text-xs sm:text-sm text-cyan-100 italic pt-1 border-t border-white/10">
                "{MATERI_KELAS_8_SEM_2_BAB_8.pengertianCintaIlmu.nasihatImamSyafii.terjemahanSyair}"
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-1">
              {MATERI_KELAS_8_SEM_2_BAB_8.pengertianCintaIlmu.nasihatImamSyafii.enamSyaratIlmu.map((syarat, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-white/10 border border-white/10 hover:bg-white/15 transition space-y-1"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-black text-amber-400 text-xs">0{idx + 1}. {syarat.nama}</span>
                  </div>
                  <p className="text-xs text-slate-200 leading-relaxed">{syarat.arti}</p>
                </div>
              ))}
            </div>

            {/* Navigasi Lanjut */}
            <div className="flex justify-end pt-3">
              <button
                onClick={() => setActiveTab('2-dalil')}
                className="flex items-center gap-2 px-5 py-2.5 bg-amber-400 hover:bg-amber-500 text-slate-950 rounded-xl text-xs sm:text-sm font-black shadow-md transition cursor-pointer"
              >
                <span>Lanjut ke: 2. Dalil Naqli Cinta Ilmu</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= TAB 2: DALIL NAQLI ================= */}
      {activeTab === '2-dalil' && (
        <div className="space-y-6">
          {/* Header Dalil Naqli */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold">
                  02
                </div>
                <div>
                  <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white">
                    Dalil Naqli Al-Qur'an & Hadits
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Kajian Q.S. Al-Mujādilah: 11, Q.S. Az-Zumar: 9, Q.S. Thāhā: 114, dan Hadits-Hadits Shahih
                  </p>
                </div>
              </div>
              <button
                onClick={() =>
                  onAskAI(
                    'Jelaskan asbabun nuzul dan kandungan hukum tajwid dari Q.S. Al-Mujadilah ayat 11 tentang pengangkatan derajat orang berilmu, serta hadis keutamaan penuntut ilmu!'
                  )
                }
                className="text-xs text-blue-600 hover:text-blue-700 dark:text-blue-400 font-bold flex items-center gap-1 cursor-pointer"
              >
                <Bot className="w-3.5 h-3.5" />
                <span>Analisis AI</span>
              </button>
            </div>

            {/* Dalil Utama: Q.S. Al-Mujadilah [58]: 11 */}
            <div className="space-y-4 pt-2">
              {MATERI_KELAS_8_SEM_2_BAB_8.dalilNaqli.alQuran.map((ayat, idx) => (
                <div
                  key={ayat.id}
                  className="p-5 sm:p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-4"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-700 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 bg-blue-600 text-white font-black text-xs rounded-lg">
                        {ayat.nomorSurahAyat}
                      </span>
                      <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                        Surah {ayat.namaSurah}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => playVerseAudio(ayat.teksArab)}
                        className="px-3 py-1.5 bg-blue-100 dark:bg-blue-900/50 hover:bg-blue-200 text-blue-700 dark:text-blue-300 rounded-lg text-xs font-bold transition flex items-center gap-1.5 cursor-pointer"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                        <span>Lafalkan Ayat</span>
                      </button>
                      <button
                        onClick={() => copyToClipboard(ayat.teksArab, ayat.nomorSurahAyat)}
                        className="px-3 py-1.5 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 text-slate-700 dark:text-slate-200 rounded-lg text-xs font-bold transition flex items-center gap-1.5 cursor-pointer"
                      >
                        <Copy className="w-3.5 h-3.5" />
                        <span>Salin</span>
                      </button>
                    </div>
                  </div>

                  {/* Teks Arab */}
                  <p className="font-arabic text-xl sm:text-2xl text-right leading-loose text-slate-900 dark:text-white py-2">
                    {ayat.teksArab}
                  </p>

                  {/* Transliterasi & Terjemahan */}
                  <div className="space-y-1.5 bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200/80 dark:border-slate-700 text-xs sm:text-sm">
                    <p className="text-slate-500 dark:text-slate-400 italic">"{ayat.transliterasi}"</p>
                    <p className="text-slate-800 dark:text-slate-200 font-medium pt-1 border-t border-slate-100 dark:border-slate-800">
                      <strong>Artinya:</strong> {ayat.terjemahanKemenag}
                    </p>
                  </div>

                  {/* Kandungan Pokok */}
                  <div className="p-3.5 bg-blue-50/80 dark:bg-blue-950/30 rounded-xl border border-blue-100 dark:border-blue-900/40 text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-1">
                    <span className="font-bold text-blue-800 dark:text-blue-300 flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-amber-500" />
                      Kandungan Pokok Ayat:
                    </span>
                    <p className="leading-relaxed">{ayat.kandunganPokok}</p>
                  </div>

                  {/* Asbabun Nuzul (khusus Al-Mujadilah) */}
                  {ayat.asbabunNuzulTafsir && (
                    <div className="p-3.5 bg-amber-50/80 dark:bg-amber-950/30 rounded-xl border border-amber-200/80 dark:border-amber-900/40 text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <span className="font-bold text-amber-900 dark:text-amber-300 flex items-center gap-1.5">
                        <BookOpen className="w-4 h-4 text-amber-600" />
                        Asbabun Nuzul & Makna Konteks:
                      </span>
                      <p className="leading-relaxed">{ayat.asbabunNuzulTafsir}</p>
                    </div>
                  )}

                  {/* Kaidah Tajwid Interaktif (khusus Al-Mujadilah 11) */}
                  {ayat.kaidahTajwid && ayat.kaidahTajwid.length > 0 && (
                    <div className="space-y-2 pt-2">
                      <span className="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                        <BookmarkCheck className="w-4 h-4 text-blue-600" />
                        Analisis Kaidah Tajwid Q.S. Al-Mujādilah: 11:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                        {ayat.kaidahTajwid.map((tj, tIdx) => (
                          <div
                            key={tIdx}
                            className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 text-xs space-y-1"
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-arabic font-bold text-slate-900 dark:text-white text-sm">
                                {tj.potonganLafaz}
                              </span>
                              <span className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 rounded font-bold text-[10px]">
                                {tj.hukumTajwid}
                              </span>
                            </div>
                            <p className="text-slate-600 dark:text-slate-400">
                              <strong>Cara Baca:</strong> {tj.caraMembaca}
                            </p>
                            <p className="text-slate-500 dark:text-slate-500 text-[11px]">
                              <em>Alasan:</em> {tj.alasan}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Hadits-Hadits Shahih Keutamaan Menuntut Ilmu */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
              <div className="space-y-0.5">
                <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
                  <Flame className="w-5 h-5 text-amber-500" />
                  <span>Hadits-Hadits Shahih Penuntut Ilmu</span>
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Sabda Rasulullah Saw. yang memotivasi semangat literasi dan riset keilmuan
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {MATERI_KELAS_8_SEM_2_BAB_8.dalilNaqli.hadits.map(hd => (
                <div
                  key={hd.id}
                  className="p-5 rounded-2xl bg-slate-50/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between gap-2">
                      <span className="px-2.5 py-1 bg-emerald-600 text-white font-bold text-xs rounded-lg">
                        {hd.perawi}
                      </span>
                      <button
                        onClick={() => playVerseAudio(hd.teksArab)}
                        className="p-1.5 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 rounded-lg text-slate-700 dark:text-slate-200 transition cursor-pointer"
                        title="Dengarkan Hadits"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <p className="font-arabic text-lg text-right text-slate-900 dark:text-white leading-loose">
                      {hd.teksArab}
                    </p>

                    <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200/80 dark:border-slate-700 text-xs space-y-1">
                      <p className="text-slate-500 italic">"{hd.transliterasi}"</p>
                      <p className="text-slate-800 dark:text-slate-200 font-medium pt-1 border-t border-slate-100 dark:border-slate-800">
                        <strong>Artinya:</strong> {hd.terjemahan}
                      </p>
                    </div>
                  </div>

                  <div className="p-2.5 bg-emerald-50 dark:bg-emerald-950/30 rounded-xl border border-emerald-200/60 dark:border-emerald-900/40 text-[11px] text-emerald-900 dark:text-emerald-300">
                    <strong>Pelajaran Penting:</strong> {hd.pelajaranPenting}
                  </div>
                </div>
              ))}
            </div>

            {/* Navigasi Sebelumnya & Selanjutnya */}
            <div className="flex items-center justify-between pt-3">
              <button
                onClick={() => setActiveTab('1-pengertian')}
                className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-200 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>1. Pengertian</span>
              </button>
              <button
                onClick={() => setActiveTab('3-ciri-cinta-ilmu')}
                className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs sm:text-sm font-bold shadow-md transition cursor-pointer"
              >
                <span>Lanjut ke: 3. Ciri Cinta Ilmu</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= TAB 3: CIRI CINTA ILMU ================= */}
      {activeTab === '3-ciri-cinta-ilmu' && (
        <div className="space-y-6">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-amber-100 dark:bg-amber-900/40 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold">
                  03
                </div>
                <div>
                  <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white">
                    6 Ciri Khas Pribadi Muslim Pecinta Ilmu
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Karakteristik, Indikator Sikap, dan Contoh Tindakan Konkret dalam Kehidupan Siswa
                  </p>
                </div>
              </div>
              <button
                onClick={() =>
                  onAskAI(
                    'Sebutkan dan jelaskan 6 ciri cinta ilmu bagi seorang pelajar muslim SMP beserta contoh penerapannya dalam kegiatan belajar sehari-hari!'
                  )
                }
                className="text-xs text-blue-600 hover:text-blue-700 dark:text-blue-400 font-bold flex items-center gap-1 cursor-pointer"
              >
                <Bot className="w-3.5 h-3.5" />
                <span>Tanya AI</span>
              </button>
            </div>

            {/* Grid 6 Ciri */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
              {MATERI_KELAS_8_SEM_2_BAB_8.ciriCiriCintaIlmu.map(ciri => (
                <div
                  key={ciri.id}
                  className="p-5 rounded-2xl bg-slate-50/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3.5 hover:border-blue-400 transition-all flex flex-col justify-between shadow-xs"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between gap-2">
                      <span className="w-7 h-7 rounded-lg bg-blue-600 text-white font-black text-xs flex items-center justify-center">
                        {ciri.nomor}
                      </span>
                      <span className="font-arabic text-sm text-blue-700 dark:text-blue-400 font-bold">
                        {ciri.istilahArab}
                      </span>
                    </div>

                    <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                      {ciri.judulCiri}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {ciri.deskripsi}
                    </p>

                    <div className="space-y-1.5 pt-1">
                      <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                        Indikator Karakter:
                      </span>
                      <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-400">
                        {ciri.indikatorPerilaku.map((ind, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                            <span>{ind}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="p-3 bg-blue-50/70 dark:bg-blue-950/40 rounded-xl border border-blue-200/60 dark:border-blue-900/50 text-xs text-slate-700 dark:text-slate-300 space-y-1">
                    <span className="font-bold text-blue-800 dark:text-blue-300 flex items-center gap-1">
                      <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                      Contoh Nyata Siswa:
                    </span>
                    <p className="italic">{ciri.contohAksiSiswa}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigasi Sebelumnya & Selanjutnya */}
            <div className="flex items-center justify-between pt-3">
              <button
                onClick={() => setActiveTab('2-dalil')}
                className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-200 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>2. Dalil Naqli</span>
              </button>
              <button
                onClick={() => setActiveTab('4-manfaat-berilmu')}
                className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs sm:text-sm font-bold shadow-md transition cursor-pointer"
              >
                <span>Lanjut ke: 4. Manfaat Berilmu</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= TAB 4: MANFAAT BERILMU ================= */}
      {activeTab === '4-manfaat-berilmu' && (
        <div className="space-y-6">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                  04
                </div>
                <div>
                  <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white">
                    Manfaat Berilmu bagi Penuntut Ilmu
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Dimensi Kemaslahatan Duniawi (Pribadi & Sosial) dan Kemuliaan Ukhrawi (Spiritual)
                  </p>
                </div>
              </div>

              {/* Filter Pills */}
              <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
                {(['Semua', 'Duniawi', 'Ukhrawi'] as const).map(kategori => (
                  <button
                    key={kategori}
                    onClick={() => setFilterKategoriManfaat(kategori)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                      filterKategoriManfaat === kategori
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                    }`}
                  >
                    {kategori}
                  </button>
                ))}
              </div>
            </div>

            {/* List Manfaat */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-2">
              {filteredManfaat.map(manfaat => (
                <div
                  key={manfaat.id}
                  className="p-5 rounded-2xl bg-slate-50/90 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3 flex flex-col justify-between shadow-xs hover:border-emerald-400 transition"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className={`px-2.5 py-0.5 text-[10px] font-bold rounded-full ${
                          manfaat.kategori.startsWith('Duniawi')
                            ? 'bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300'
                            : 'bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300'
                        }`}
                      >
                        {manfaat.kategori}
                      </span>
                      <span className="text-[10px] text-slate-400 font-medium">
                        {manfaat.dalilDasar}
                      </span>
                    </div>

                    <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                      {manfaat.judulManfaat}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {manfaat.uraianMendalam}
                    </p>
                  </div>

                  <div className="p-3 bg-emerald-50/70 dark:bg-emerald-950/40 rounded-xl border border-emerald-200/60 dark:border-emerald-900/50 text-xs text-emerald-900 dark:text-emerald-200">
                    <strong>Dampak Nyata:</strong> {manfaat.dampakPositif}
                  </div>
                </div>
              ))}
            </div>

            {/* Navigasi Sebelumnya & Selanjutnya */}
            <div className="flex items-center justify-between pt-3">
              <button
                onClick={() => setActiveTab('3-ciri-cinta-ilmu')}
                className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-200 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>3. Ciri Cinta Ilmu</span>
              </button>
              <button
                onClick={() => setActiveTab('5-hikmah-cinta-ilmu')}
                className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs sm:text-sm font-bold shadow-md transition cursor-pointer"
              >
                <span>Lanjut ke: 5. Hikmah Cinta Ilmu</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= TAB 5: HIKMAH CINTA ILMU ================= */}
      {activeTab === '5-hikmah-cinta-ilmu' && (
        <div className="space-y-6">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-teal-100 dark:bg-teal-900/40 text-teal-600 dark:text-teal-400 flex items-center justify-center font-bold">
                  05
                </div>
                <div>
                  <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white">
                    6 Hikmah Menghayati Makna Cinta Ilmu
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Fondasi Spiritual, Pembentukan Karakter Mulia, dan Kebangkitan Peradaban Bangsa
                  </p>
                </div>
              </div>
              <button
                onClick={() =>
                  onAskAI(
                    'Apa saja 6 hikmah mencintai ilmu dalam Islam? Mengapa orang berilmu dikatakan paling takut kepada Allah (khosyyah)?'
                  )
                }
                className="text-xs text-blue-600 hover:text-blue-700 dark:text-blue-400 font-bold flex items-center gap-1 cursor-pointer"
              >
                <Bot className="w-3.5 h-3.5" />
                <span>Diskusi AI</span>
              </button>
            </div>

            <div className="space-y-4 pt-2">
              {MATERI_KELAS_8_SEM_2_BAB_8.hikmahCintaIlmu.map(hikmah => (
                <div
                  key={hikmah.id}
                  className="p-5 rounded-2xl bg-slate-50/80 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 space-y-3"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-blue-600 text-white font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                      {hikmah.nomor}
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                        {hikmah.judulHikmah}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {hikmah.penjelasan}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs">
                    <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 space-y-1">
                      <span className="font-bold text-blue-700 dark:text-blue-400 flex items-center gap-1">
                        <UserCheck className="w-3.5 h-3.5" />
                        Dampak pada Kepribadian:
                      </span>
                      <p>{hikmah.dampakKepribadian}</p>
                    </div>

                    <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 space-y-1">
                      <span className="font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-1">
                        <Sparkles className="w-3.5 h-3.5" />
                        Relevansi Era Modern:
                      </span>
                      <p>{hikmah.relevansiZamanModern}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigasi Sebelumnya & Selanjutnya */}
            <div className="flex items-center justify-between pt-3">
              <button
                onClick={() => setActiveTab('4-manfaat-berilmu')}
                className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-200 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>4. Manfaat Berilmu</span>
              </button>
              <button
                onClick={() => setActiveTab('6-kasus-refleksi')}
                className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs sm:text-sm font-bold shadow-md transition cursor-pointer"
              >
                <span>Lanjut ke: 6. Studi Kasus & Refleksi</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= TAB 6: STUDI KASUS & REFLEKSI DIRI ================= */}
      {activeTab === '6-kasus-refleksi' && (
        <div className="space-y-6">
          {/* 3 Studi Kasus Kontekstual Remaja */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold">
                  06
                </div>
                <div>
                  <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white">
                    Studi Kasus Moralitas Penuntut Ilmu Modern
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Analisis Kritis Tantangan Nyata Pelajar di Era Digital & Kecerdasan Buatan
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-5 pt-1">
              {MATERI_KELAS_8_SEM_2_BAB_8.studiKasusRemaja.map(kasus => (
                <div
                  key={kasus.id}
                  className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200/80 dark:border-slate-700 pb-2">
                    <span className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                      Kasus #{kasus.nomor}: {kasus.judulKasus}
                    </span>
                    <span className="px-2.5 py-0.5 bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300 font-bold rounded text-[11px]">
                      {kasus.nilaiKarakter}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    <strong>Ilustrasi Kasus:</strong> {kasus.deskripsiMasalah}
                  </p>

                  <div className="p-3 bg-amber-50 dark:bg-amber-950/30 rounded-xl border border-amber-200 dark:border-amber-900/40 text-xs text-amber-900 dark:text-amber-200">
                    <strong>Pertanyaan Analisis:</strong> {kasus.pertanyaanAnalisis}
                  </div>

                  <div className="p-3.5 bg-emerald-50 dark:bg-emerald-950/30 rounded-xl border border-emerald-200 dark:border-emerald-900/40 text-xs sm:text-sm text-emerald-950 dark:text-emerald-200 space-y-1">
                    <span className="font-bold text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      Solusi & Adab Keteladanan Islam:
                    </span>
                    <p className="leading-relaxed">{kasus.solusiDanKeteladanan}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Lembar Refleksi Diri (Muhasabah Karakter Cinta Ilmu) */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-3">
              <div>
                <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
                  <UserCheck className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <span>Lembar Refleksi Diri (Muhasabah Pecinta Ilmu)</span>
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Centang kebiasaan yang sudah rutin kamu terapkan dalam keseharian belajarmu:
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="text-right">
                  <span className="text-xs font-bold text-slate-500 dark:text-slate-400">Capaian Karakter:</span>
                  <p className="text-base font-black text-blue-600 dark:text-blue-400">
                    {reflectionPercentage}% ({totalReflectionChecked}/
                    {MATERI_KELAS_8_SEM_2_BAB_8.refleksiDiriSiswa.length})
                  </p>
                </div>
                <button
                  onClick={() => setCheckedReflection({})}
                  className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-600 dark:text-slate-300 rounded-lg text-xs font-bold transition flex items-center gap-1 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset</span>
                </button>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-slate-100 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-500 to-emerald-500 transition-all duration-500"
                style={{ width: `${reflectionPercentage}%` }}
              />
            </div>

            {/* Checklist Items */}
            <div className="space-y-2.5">
              {MATERI_KELAS_8_SEM_2_BAB_8.refleksiDiriSiswa.map(item => {
                const isChecked = !!checkedReflection[item.id];
                return (
                  <label
                    key={item.id}
                    onClick={() =>
                      setCheckedReflection(prev => ({
                        ...prev,
                        [item.id]: !prev[item.id]
                      }))
                    }
                    className={`flex items-start gap-3 p-3.5 rounded-xl border transition-all cursor-pointer select-none ${
                      isChecked
                        ? 'bg-blue-50/70 dark:bg-blue-950/30 border-blue-300 dark:border-blue-800 text-slate-900 dark:text-white'
                        : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-slate-300'
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 transition ${
                        isChecked
                          ? 'bg-blue-600 text-white'
                          : 'border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800'
                      }`}
                    >
                      {isChecked && <Check className="w-3.5 h-3.5" />}
                    </div>
                    <span className="text-xs sm:text-sm font-medium leading-relaxed">
                      {item.indikator}
                    </span>
                  </label>
                );
              })}
            </div>

            {reflectionPercentage === 100 && (
              <div className="p-4 bg-emerald-50 dark:bg-emerald-950/40 rounded-2xl border border-emerald-300 dark:border-emerald-800 text-emerald-950 dark:text-emerald-200 text-xs sm:text-sm font-bold flex items-center gap-2 animate-fadeIn">
                <Sparkles className="w-5 h-5 text-amber-500 shrink-0" />
                <span>
                  Masya Allah! Kamu telah mencerminkan 8 pilar karakter sejati penuntut ilmu muslim. Terus istiqomah dalam membaca, tawadhu', dan mengamalkan ilmu!
                </span>
              </div>
            )}

            {/* Navigasi Sebelumnya & Selanjutnya */}
            <div className="flex items-center justify-between pt-3">
              <button
                onClick={() => setActiveTab('5-hikmah-cinta-ilmu')}
                className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-200 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>5. Hikmah Cinta Ilmu</span>
              </button>
              <button
                onClick={() => setActiveTab('7-kuis-hots')}
                className="flex items-center gap-2 px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-slate-950 rounded-xl text-xs sm:text-sm font-black shadow-md transition cursor-pointer"
              >
                <span>Lanjut ke: 7. Kuis Evaluasi HOTS</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= TAB 7: KUIS EVALUASI HOTS ================= */}
      {activeTab === '7-kuis-hots' && (
        <div className="space-y-6">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-amber-400 text-amber-950 font-black rounded-lg text-xs">
                    KUIS EVALUASI HOTS
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    5 Butir Soal Penalaran Kontekstual
                  </span>
                </div>
                <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white">
                  Uji Pemahaman Materi Bab 8: Cinta Ilmu
                </h2>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setUserAnswers({});
                    setShowQuizResults(false);
                  }}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-300 rounded-xl text-xs font-bold transition cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset Kuis</span>
                </button>
                <button
                  onClick={() => setShowQuizResults(true)}
                  className="flex items-center gap-1.5 px-4 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold shadow-md transition cursor-pointer"
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Periksa Jawaban</span>
                </button>
              </div>
            </div>

            {/* Quiz Results Summary Card */}
            {showQuizResults && (
              <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-900 to-indigo-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-md animate-fadeIn">
                <div className="space-y-1">
                  <span className="text-xs text-cyan-200 font-bold uppercase tracking-wider">
                    Hasil Skor Evaluasi Mandiri:
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-black text-amber-300">
                      {calculateScore()}
                    </span>
                    <span className="text-sm text-slate-300">/ 100 Poin</span>
                  </div>
                  <p className="text-xs text-cyan-100">
                    {calculateScore() >= 80
                      ? '🎉 Mumtaz! Pemahamanmu sangat mendalam perihal makna cinta ilmu, dalil, dan penerapannya!'
                      : 'Semangat belajar! Cermati pembahasan di bawah setiap soal untuk memperkuat pemahamanmu.'}
                  </p>
                </div>
                <button
                  onClick={() =>
                    onAskAI(
                      `Saya mendapatkan skor ${calculateScore()}/100 pada kuis HOTS Bab 8 Cinta Ilmu. Bisakah Masterku AI memberikan bimbingan dan penjelasan ringkas untuk soal-soal penalaran ini?`
                    )
                  }
                  className="px-4 py-2 bg-amber-400 hover:bg-amber-500 text-slate-950 font-black rounded-xl text-xs sm:text-sm shadow-sm transition flex items-center gap-2 cursor-pointer self-start sm:self-auto"
                >
                  <Bot className="w-4 h-4" />
                  <span>Bahas Bersama AI</span>
                </button>
              </div>
            )}

            {/* Questions List */}
            <div className="space-y-6 pt-2">
              {MATERI_KELAS_8_SEM_2_BAB_8.soalEvaluasiHots.map((soal, sIdx) => {
                const isSelected = userAnswers[soal.id] !== undefined;
                const userAnswer = userAnswers[soal.id];
                const isCorrect = userAnswer === soal.kunciJawaban;

                return (
                  <div
                    key={soal.id}
                    className="p-5 rounded-2xl bg-slate-50/70 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <span className="w-7 h-7 rounded-lg bg-blue-600 text-white font-black text-xs flex items-center justify-center">
                        {sIdx + 1}
                      </span>
                      {showQuizResults && (
                        <span
                          className={`px-2.5 py-0.5 rounded-full text-xs font-bold flex items-center gap-1 ${
                            isCorrect
                              ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300'
                              : 'bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300'
                          }`}
                        >
                          {isCorrect ? <CheckCircle2 className="w-3.5 h-3.5" /> : <XCircle className="w-3.5 h-3.5" />}
                          <span>{isCorrect ? 'Jawaban Benar' : 'Kurang Tepat'}</span>
                        </span>
                      )}
                    </div>

                    {soal.stimulusKonteks && (
                      <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-600 dark:text-slate-300 italic">
                        "{soal.stimulusKonteks}"
                      </div>
                    )}

                    <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white leading-relaxed">
                      {soal.pertanyaan}
                    </p>

                    {/* Options */}
                    <div className="space-y-2 pt-1">
                      {soal.pilihanJawaban.map((pil, pIdx) => {
                        const isThisChosen = userAnswer === pIdx;
                        const isThisCorrect = soal.kunciJawaban === pIdx;

                        let optionStyle =
                          'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-slate-300';
                        if (isThisChosen) {
                          optionStyle =
                            'bg-blue-50 dark:bg-blue-950/40 border-blue-500 text-blue-900 dark:text-blue-200 font-bold';
                        }
                        if (showQuizResults) {
                          if (isThisCorrect) {
                            optionStyle =
                              'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 text-emerald-900 dark:text-emerald-200 font-bold';
                          } else if (isThisChosen && !isThisCorrect) {
                            optionStyle =
                              'bg-rose-50 dark:bg-rose-950/40 border-rose-500 text-rose-900 dark:text-rose-200 line-through';
                          }
                        }

                        return (
                          <button
                            key={pIdx}
                            onClick={() => {
                              if (!showQuizResults) {
                                setUserAnswers(prev => ({
                                  ...prev,
                                  [soal.id]: pIdx
                                }));
                              }
                            }}
                            disabled={showQuizResults}
                            className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm transition flex items-start gap-2.5 cursor-pointer disabled:cursor-default ${optionStyle}`}
                          >
                            <span
                              className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-[11px] font-bold ${
                                isThisChosen
                                  ? 'bg-blue-600 text-white'
                                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                              }`}
                            >
                              {String.fromCharCode(65 + pIdx)}
                            </span>
                            <span className="flex-1 leading-relaxed">{pil}</span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Pembahasan */}
                    {showQuizResults && (
                      <div className="p-3.5 bg-blue-50 dark:bg-blue-950/30 rounded-xl border border-blue-200 dark:border-blue-900/50 text-xs sm:text-sm text-slate-800 dark:text-slate-200 space-y-1 animate-fadeIn">
                        <span className="font-bold text-blue-800 dark:text-blue-300 flex items-center gap-1.5">
                          <Lightbulb className="w-4 h-4 text-amber-500" />
                          Pembahasan Kunci Jawaban:
                        </span>
                        <p className="leading-relaxed">{soal.pembahasanLengkap}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Navigasi Sebelumnya & Mulai Ulang */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
              <button
                onClick={() => setActiveTab('6-kasus-refleksi')}
                className="flex items-center gap-2 px-4 py-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-200 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>6. Studi Kasus</span>
              </button>
              <button
                onClick={() => {
                  setActiveTab('1-pengertian');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs sm:text-sm font-bold shadow-md transition cursor-pointer"
              >
                <span>Pelajari Ulang: 1. Pengertian</span>
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
