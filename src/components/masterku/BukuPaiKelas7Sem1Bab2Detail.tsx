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
  Eye,
  Ear,
  Brain,
  SearchCode,
  ShieldCheck,
  CheckCircle2,
  XCircle,
  RotateCcw,
  GraduationCap,
  Home,
  Users,
  Smartphone,
  ChevronRight,
  Bookmark,
  Share2,
  Layers,
  Heart,
  Lightbulb
} from 'lucide-react';
import { MATERI_KELAS_VII_SEM_1_BAB_2, AsmaulHusnaItem } from '../../data/materiKelas7Sem1Bab2Data';
import { useToast } from '../common/Toast';

interface Props {
  onAskAI: (prompt: string) => void;
}

type Bab2SubTab = 'iman' | 'asmaul-husna' | 'empat-asma' | 'perilaku' | 'kuis';

export const BukuPaiKelas7Sem1Bab2Detail: React.FC<Props> = ({ onAskAI }) => {
  const { showToast } = useToast();
  const [activeSubTab, setActiveSubTab] = useState<Bab2SubTab>('iman');

  // Selected Asmaul Husna in SubTab 3
  const [selectedAsmaId, setSelectedAsmaId] = useState<string>('al-alim');

  // Audio Playback
  const [currentAudioUrl, setCurrentAudioUrl] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Perilaku Domain Filter
  const [perilakuDomain, setPerilakuDomain] = useState<'all' | 'sekolah' | 'rumah' | 'pergaulan' | 'digital'>('all');

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

  const selectedAsma: AsmaulHusnaItem =
    MATERI_KELAS_VII_SEM_1_BAB_2.subBab3_EmpatAsmaulHusna.find(
      (a) => a.id === selectedAsmaId
    ) || MATERI_KELAS_VII_SEM_1_BAB_2.subBab3_EmpatAsmaulHusna[0];

  const subTabButtons = [
    { id: 'iman', label: '1. Hakikat Iman', icon: Brain },
    { id: 'asmaul-husna', label: '2. Pengertian Asmaul Husna', icon: BookOpen },
    { id: 'empat-asma', label: '3. Makna 4 Asmaul Husna', icon: Sparkles },
    { id: 'perilaku', label: '4. Contoh Perilaku Sehari-hari', icon: ShieldCheck },
    { id: 'kuis', label: '5. Kuis Skenario Kasus', icon: HelpCircle }
  ];

  // Kuis scoring
  const calculateQuizScore = () => {
    const list = MATERI_KELAS_VII_SEM_1_BAB_2.kuisInteraktif;
    let correct = 0;
    list.forEach((item) => {
      if (quizAnswers[item.id] === item.jawabanBenar) {
        correct++;
      }
    });
    return Math.round((correct / list.length) * 100);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden text-slate-800">
      {/* Top Banner Bab 2 */}
      <div className="p-6 bg-gradient-to-br from-teal-900 via-emerald-900 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute right-0 top-0 translate-x-1/4 -translate-y-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-amber-400 text-amber-950 font-black text-xs uppercase tracking-wider">
              Buku Pelajaran PAI Kelas VII • Semester 1
            </span>
            <span className="px-3 py-1 rounded-full bg-white/15 text-emerald-100 font-semibold text-xs">
              Bab 2: Akidah Islam
            </span>
            <span className="px-3 py-1 rounded-full bg-emerald-500/30 text-emerald-200 font-semibold text-xs">
              CP 20 Tahun 2026
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tight text-white">
            Meneladani Asmaul Husna: Hakikat Iman, Makna Al-\'Alīm, As-Samī\', Al-Baṣīr, Al-Khabīr & Karakter Sehari-hari
          </h2>

          <p className="text-xs sm:text-sm text-emerald-100/90 max-w-4xl leading-relaxed">
            {MATERI_KELAS_VII_SEM_1_BAB_2.pengantar}
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-2">
            <button
              onClick={() =>
                onAskAI(
                  'Jelaskan materi lengkap PAI Kelas VII Semester 1 Bab 2 tentang iman kepada Allah, pengertian Asmaul Husna, makna Al-Alim, As-Sami, Al-Bashir, Al-Khabir, serta contoh perilakunya.'
                )
              }
              className="px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-amber-950 font-bold text-xs sm:text-sm flex items-center gap-2 transition-all cursor-pointer shadow-md"
            >
              <Bot className="w-4 h-4" />
              <span>Tanya Masterku AI Bab 2</span>
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
              onClick={() => setActiveSubTab(tab.id as Bab2SubTab)}
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
        {/* TAB 1: HAKIKAT IMAN KEPADA ALLAH SWT */}
        {/* ========================================================================= */}
        {activeSubTab === 'iman' && (
          <div className="space-y-6">
            {/* Header Pengertian */}
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-100 text-emerald-900 text-xs font-bold">
                <Brain className="w-4 h-4 text-emerald-700" />
                <span>Materi 1 • Akidah Islamiah Fondasional</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                1. Pengertian Iman kepada Allah Swt.
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {MATERI_KELAS_VII_SEM_1_BAB_2.subBab1_PengertianIman.kedudukanIman}
              </p>
            </div>

            {/* Dua Definisi: Bahasa & Istilah */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Bahasa */}
              <div className="p-5 rounded-2xl bg-emerald-50/60 border border-emerald-200/80 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold text-xs">
                    A
                  </span>
                  <h4 className="font-bold text-emerald-950 text-base">
                    Pengertian secara Bahasa (Etimologi)
                  </h4>
                </div>
                <div className="p-3 bg-white rounded-xl border border-emerald-100 font-mono text-xs text-emerald-800 font-semibold">
                  {MATERI_KELAS_VII_SEM_1_BAB_2.subBab1_PengertianIman.pengertianBahasa.asalKata}
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                  {MATERI_KELAS_VII_SEM_1_BAB_2.subBab1_PengertianIman.pengertianBahasa.arti}
                </p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {MATERI_KELAS_VII_SEM_1_BAB_2.subBab1_PengertianIman.pengertianBahasa.penjelasan}
                </p>
              </div>

              {/* Istilah Syariat */}
              <div className="p-5 rounded-2xl bg-teal-50/60 border border-teal-200/80 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-teal-600 text-white flex items-center justify-center font-bold text-xs">
                    B
                  </span>
                  <h4 className="font-bold text-teal-950 text-base">
                    Pengertian secara Istilah (Terminologi Syar\'i)
                  </h4>
                </div>
                <div className="p-3 bg-white rounded-xl border border-teal-100 text-center font-arabic text-lg text-teal-950 font-bold leading-loose">
                  {MATERI_KELAS_VII_SEM_1_BAB_2.subBab1_PengertianIman.pengertianIstilah.lafalArab}
                </div>
                <p className="text-xs italic text-teal-800 font-semibold">
                  "{MATERI_KELAS_VII_SEM_1_BAB_2.subBab1_PengertianIman.pengertianIstilah.transliterasi}"
                </p>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                  {MATERI_KELAS_VII_SEM_1_BAB_2.subBab1_PengertianIman.pengertianIstilah.arti}
                </p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {MATERI_KELAS_VII_SEM_1_BAB_2.subBab1_PengertianIman.pengertianIstilah.penjelasan}
                </p>
              </div>
            </div>

            {/* Tiga Pilar Tauhid */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between">
                <h4 className="text-base sm:text-lg font-black text-slate-900 flex items-center gap-2">
                  <Layers className="w-5 h-5 text-emerald-700" />
                  <span>Tiga Dimensi Keimanan & Tauhid kepada Allah Swt.</span>
                </h4>
                <span className="text-xs text-slate-500 font-medium">Rujukan Akidah Ahlussunnah</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {MATERI_KELAS_VII_SEM_1_BAB_2.subBab1_PengertianIman.tigaDimensiTauhid.map((dimensi, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 hover:border-emerald-300 transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold text-[11px]">
                        Dimensi {idx + 1}
                      </span>
                      <span className="text-[11px] text-slate-400 font-mono">
                        {dimensi.dalilSingkat.split(' ')[0]}
                      </span>
                    </div>
                    <h5 className="font-bold text-slate-900 text-sm sm:text-base">
                      {dimensi.nama}
                    </h5>
                    <p className="text-xs font-semibold text-emerald-700">
                      {dimensi.arti}
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {dimensi.penjelasan}
                    </p>
                    <div className="pt-1 text-[11px] text-slate-500 italic bg-white p-2 rounded border border-slate-100">
                      Dalil: {dimensi.dalilSingkat}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dalil Naqli Al-Qur'an */}
            <div className="space-y-4 pt-2">
              <h4 className="text-base sm:text-lg font-black text-slate-900 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-emerald-700" />
                <span>Dalil Naqli Al-Qur\'an tentang Perintah Beriman kepada Allah</span>
              </h4>

              <div className="space-y-4">
                {MATERI_KELAS_VII_SEM_1_BAB_2.subBab1_PengertianIman.dalilNaqliUtama.map((dalil, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3"
                  >
                    <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-2.5">
                      <span className="font-bold text-emerald-900 text-sm">
                        {dalil.surahName} [{dalil.surahNumber}] : {dalil.verseNumber}
                      </span>
                      <button
                        onClick={() =>
                          handleCopyText(
                            `${dalil.surahName}:${dalil.verseNumber}\n${dalil.arabic}\n\nArtinya:\n${dalil.translationKemenag}`,
                            dalil.surahName
                          )
                        }
                        className="p-1.5 rounded-lg text-slate-400 hover:text-emerald-700 hover:bg-slate-50 transition-all cursor-pointer"
                        title="Salin Ayat"
                      >
                        <Copy className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="p-4 bg-emerald-50/40 rounded-xl text-right font-arabic text-xl sm:text-2xl text-slate-900 leading-loose">
                      {dalil.arabic}
                    </div>

                    <p className="text-xs italic text-slate-600 leading-relaxed font-serif">
                      "{dalil.latin}"
                    </p>

                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
                      <p className="text-xs font-bold text-slate-700">Terjemahan Resmi Kemenag RI:</p>
                      <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                        "{dalil.translationKemenag}"
                      </p>
                    </div>

                    <div className="p-3 bg-amber-50/60 rounded-xl border border-amber-200/70 space-y-1">
                      <p className="text-xs font-bold text-amber-900 flex items-center gap-1.5">
                        <Lightbulb className="w-3.5 h-3.5 text-amber-700" />
                        <span>Tafsir Tematik Wajiz:</span>
                      </p>
                      <p className="text-xs text-amber-950 leading-relaxed">
                        {dalil.tafsirWajiz}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dalil 'Aqli (Logika Akal Sehat) */}
            <div className="space-y-3 pt-2">
              <h4 className="text-base sm:text-lg font-black text-slate-900 flex items-center gap-2">
                <Brain className="w-5 h-5 text-emerald-700" />
                <span>Dalil \'Aqli (Bukti Rasional Keberadaan & Keagungan Allah)</span>
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {MATERI_KELAS_VII_SEM_1_BAB_2.subBab1_PengertianIman.dalilAqli.map((aqli, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-gradient-to-b from-white to-slate-50 border border-slate-200 space-y-2"
                  >
                    <div className="w-7 h-7 rounded-lg bg-teal-100 text-teal-800 font-bold text-xs flex items-center justify-center">
                      0{idx + 1}
                    </div>
                    <h5 className="font-bold text-slate-900 text-xs sm:text-sm">
                      {aqli.judul}
                    </h5>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {aqli.isi}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-2 flex justify-between items-center">
              <button
                onClick={() =>
                  onAskAI(
                    'Bagaimana cara menumbuhkan dan membuktikan iman kepada Allah Swt. dalam kehidupan seorang pelajar SMP sehari-hari?'
                  )
                }
                className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs flex items-center gap-1.5 transition-all cursor-pointer"
              >
                <Bot className="w-4 h-4 text-emerald-700" />
                <span>Tanya AI tentang Pembuktian Iman</span>
              </button>

              <button
                onClick={() => setActiveSubTab('asmaul-husna')}
                className="px-4 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs sm:text-sm flex items-center gap-1.5 transition-all cursor-pointer shadow-xs"
              >
                <span>Lanjut ke Sub-Bab 2: Asmaul Husna</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 2: PENGERTIAN ASMAUL HUSNA */}
        {/* ========================================================================= */}
        {activeSubTab === 'asmaul-husna' && (
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-100 text-emerald-900 text-xs font-bold">
                <BookOpen className="w-4 h-4 text-emerald-700" />
                <span>Materi 2 • Nama-Nama Agung Sang Pencipta</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                2. Pengertian dan Keutamaan Asmaul Husna
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Asmaul Husna merupakan sarana teragung bagi seorang hamba untuk mengenal Allah Swt. (Ma‘rifatullāh), memuji-Nya dalam doa, dan meneladani sifat-sifat luhur tersebut sesuai martabat kemanusiaan.
              </p>
            </div>

            {/* Pengertian Bahasa & Istilah */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-amber-50/50 border border-amber-200/80 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-amber-600 text-white flex items-center justify-center font-bold text-xs">
                    1
                  </span>
                  <h4 className="font-bold text-amber-950 text-base">
                    Pengertian secara Bahasa (Etimologi)
                  </h4>
                </div>
                <div className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <p className="p-2.5 bg-white rounded-xl border border-amber-100 font-medium">
                    {MATERI_KELAS_VII_SEM_1_BAB_2.subBab2_PengertianAsmaulHusna.bahasa.alAsma}
                  </p>
                  <p className="p-2.5 bg-white rounded-xl border border-amber-100 font-medium">
                    {MATERI_KELAS_VII_SEM_1_BAB_2.subBab2_PengertianAsmaulHusna.bahasa.alHusna}
                  </p>
                </div>
                <p className="text-xs text-amber-900 font-bold bg-amber-100/60 p-3 rounded-xl border border-amber-200">
                  {MATERI_KELAS_VII_SEM_1_BAB_2.subBab2_PengertianAsmaulHusna.bahasa.kesimpulanBahasa}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-emerald-50/50 border border-emerald-200/80 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold text-xs">
                    2
                  </span>
                  <h4 className="font-bold text-emerald-950 text-base">
                    Pengertian secara Istilah (Terminologi Syar\'i)
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium p-3 bg-white rounded-xl border border-emerald-100">
                  {MATERI_KELAS_VII_SEM_1_BAB_2.subBab2_PengertianAsmaulHusna.istilah.definisi}
                </p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {MATERI_KELAS_VII_SEM_1_BAB_2.subBab2_PengertianAsmaulHusna.istilah.penjelasanTambahan}
                </p>
              </div>
            </div>

            {/* Hadits 99 Asmaul Husna */}
            <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-emerald-900 to-teal-950 text-white space-y-4 shadow-sm">
              <div className="flex items-center justify-between border-b border-emerald-800 pb-2.5">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded bg-amber-400 text-amber-950 font-black text-[11px]">
                    HADIS SAHIH
                  </span>
                  <span className="text-xs text-emerald-200 font-medium">
                    {MATERI_KELAS_VII_SEM_1_BAB_2.subBab2_PengertianAsmaulHusna.jumlahDanHadits.perawi}
                  </span>
                </div>
                <button
                  onClick={() =>
                    handleCopyText(
                      `${MATERI_KELAS_VII_SEM_1_BAB_2.subBab2_PengertianAsmaulHusna.jumlahDanHadits.haditsLafalArab}\n\nArtinya:\n${MATERI_KELAS_VII_SEM_1_BAB_2.subBab2_PengertianAsmaulHusna.jumlahDanHadits.haditsArti}`,
                      'Hadits 99 Asmaul Husna'
                    )
                  }
                  className="p-1.5 rounded-lg text-emerald-300 hover:text-white hover:bg-emerald-800 transition-all cursor-pointer"
                  title="Salin Hadits"
                >
                  <Copy className="w-4 h-4" />
                </button>
              </div>

              <div className="p-4 bg-black/20 rounded-xl text-right font-arabic text-xl sm:text-2xl text-amber-300 leading-loose">
                {MATERI_KELAS_VII_SEM_1_BAB_2.subBab2_PengertianAsmaulHusna.jumlahDanHadits.haditsLafalArab}
              </div>

              <p className="text-xs italic text-emerald-200 font-serif">
                "{MATERI_KELAS_VII_SEM_1_BAB_2.subBab2_PengertianAsmaulHusna.jumlahDanHadits.haditsTransliterasi}"
              </p>

              <div className="p-3 bg-white/10 rounded-xl space-y-1 text-xs sm:text-sm text-emerald-100">
                <p className="font-bold text-amber-400">Terjemahan:</p>
                <p className="leading-relaxed">
                  "{MATERI_KELAS_VII_SEM_1_BAB_2.subBab2_PengertianAsmaulHusna.jumlahDanHadits.haditsArti}"
                </p>
              </div>

              {/* 4 Makna Ahsaha */}
              <div className="space-y-2 pt-1">
                <p className="text-xs font-bold text-amber-300 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Makna Kata "Ahsāhā" (أَحْصَاهَا) Menurut Penjelasan Ulama Hadis:</span>
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {MATERI_KELAS_VII_SEM_1_BAB_2.subBab2_PengertianAsmaulHusna.jumlahDanHadits.maknaAhsaha.map(
                    (item, idx) => (
                      <div
                        key={idx}
                        className="p-2.5 rounded-lg bg-white/5 border border-emerald-800/60 text-xs text-emerald-100 leading-relaxed"
                      >
                        {item}
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Dalil-Dalil Al-Qur'an Utama */}
            <div className="space-y-3 pt-2">
              <h4 className="text-base sm:text-lg font-black text-slate-900 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-emerald-700" />
                <span>Dalil-Dalil Al-Qur\'an tentang Perintah Berdoa dengan Asmaul Husna</span>
              </h4>

              <div className="space-y-4">
                {MATERI_KELAS_VII_SEM_1_BAB_2.subBab2_PengertianAsmaulHusna.dalilAlQuranUtama.map(
                  (dalil, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3"
                    >
                      <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                        <span className="font-bold text-emerald-900 text-sm">
                          {dalil.surahName} [{dalil.surahNumber}] : {dalil.verseNumber}
                        </span>
                        <button
                          onClick={() =>
                            handleCopyText(
                              `${dalil.surahName}:${dalil.verseNumber}\n${dalil.arabic}\n\nArtinya:\n${dalil.translationKemenag}`,
                              dalil.surahName
                            )
                          }
                          className="p-1.5 rounded-lg text-slate-400 hover:text-emerald-700 hover:bg-slate-50 transition-all cursor-pointer"
                        >
                          <Copy className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="p-4 bg-slate-50 rounded-xl text-right font-arabic text-xl sm:text-2xl text-slate-900 leading-loose">
                        {dalil.arabic}
                      </div>

                      <p className="text-xs italic text-slate-600 font-serif">"{dalil.latin}"</p>

                      <div className="p-3 bg-emerald-50/50 rounded-xl border border-emerald-100 text-xs sm:text-sm text-slate-800 space-y-1">
                        <p className="font-bold text-emerald-900">Artinya (Kemenag RI):</p>
                        <p className="leading-relaxed">"{dalil.translationKemenag}"</p>
                      </div>

                      <p className="text-xs text-slate-600 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                        <span className="font-bold text-slate-800">Tafsir Ringkas: </span>
                        {dalil.tafsirWajiz}
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Keutamaan Mempelajari */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200 space-y-3">
              <h4 className="font-bold text-emerald-950 text-base flex items-center gap-2">
                <Heart className="w-5 h-5 text-emerald-700" />
                <span>Keutamaan dan Urgensi Mengamalkan Asmaul Husna</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {MATERI_KELAS_VII_SEM_1_BAB_2.subBab2_PengertianAsmaulHusna.keutamaanMempelajari.map(
                  (keutamaan, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-white rounded-xl border border-emerald-100 text-xs sm:text-sm text-slate-700 flex items-start gap-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{keutamaan}</span>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-2 flex justify-between items-center">
              <button
                onClick={() => setActiveSubTab('iman')}
                className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition-all cursor-pointer"
              >
                ← Kembali ke Hakikat Iman
              </button>

              <button
                onClick={() => setActiveSubTab('empat-asma')}
                className="px-4 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs sm:text-sm flex items-center gap-1.5 transition-all cursor-pointer shadow-xs"
              >
                <span>Lanjut ke Sub-Bab 3: 4 Asmaul Husna Utama</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 3: MAKNA 4 ASMAUL HUSNA UTAMA */}
        {/* ========================================================================= */}
        {activeSubTab === 'empat-asma' && (
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-100 text-emerald-900 text-xs font-bold">
                <Sparkles className="w-4 h-4 text-emerald-700" />
                <span>Materi 3 • Penjelasan Mendalam 4 Asmaul Husna Esensial</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                3. Makna Asmaul Husna: Al-\'Alīm, As-Samī\', Al-Baṣīr, dan Al-Khabīr
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Pilih salah satu Asmaul Husna di bawah ini untuk menelaah makna filosofis, dalil teks Al-Qur\'an, komparasi dengan sifat makhluk, dan hikmahnya:
              </p>
            </div>

            {/* Asmaul Husna Selector Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              {MATERI_KELAS_VII_SEM_1_BAB_2.subBab3_EmpatAsmaulHusna.map((asma) => {
                const isSelected = selectedAsmaId === asma.id;
                let Icon = Brain;
                if (asma.id === 'as-sami') Icon = Ear;
                if (asma.id === 'al-basir') Icon = Eye;
                if (asma.id === 'al-khabir') Icon = SearchCode;

                return (
                  <button
                    key={asma.id}
                    onClick={() => setSelectedAsmaId(asma.id)}
                    className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between gap-3 ${
                      isSelected
                        ? 'bg-emerald-800 text-white border-emerald-700 shadow-md scale-[1.02]'
                        : 'bg-white hover:bg-slate-50 text-slate-800 border-slate-200/90 hover:border-emerald-300'
                    }`}
                  >
                    <div className="flex items-center justify-between w-full">
                      <span
                        className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs ${
                          isSelected ? 'bg-amber-400 text-amber-950' : 'bg-slate-100 text-slate-700'
                        }`}
                      >
                        {asma.orderNumber}
                      </span>
                      <Icon className={`w-5 h-5 ${isSelected ? 'text-amber-300' : 'text-emerald-700'}`} />
                    </div>

                    <div className="space-y-1">
                      <div
                        className={`font-arabic text-2xl font-bold leading-none ${
                          isSelected ? 'text-amber-200' : 'text-emerald-900'
                        }`}
                      >
                        {asma.arabic}
                      </div>
                      <h4 className="font-bold text-sm">{asma.latin}</h4>
                      <p className={`text-xs ${isSelected ? 'text-emerald-100' : 'text-slate-500'}`}>
                        {asma.translation}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Selected Asma Detail Card */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden space-y-6 p-6">
              {/* Header Details */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-900 flex items-center justify-center font-arabic text-3xl font-black shadow-inner">
                    {selectedAsma.arabic}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 font-bold text-xs">
                        Asmaul Husna #{selectedAsma.orderNumber}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                      {selectedAsma.latin}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-emerald-700">
                      Artinya: {selectedAsma.translation}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() =>
                      onAskAI(
                        `Jelaskan secara mendalam makna Asmaul Husna ${selectedAsma.latin} (${selectedAsma.arabic} - ${selectedAsma.translation}), dalil Al-Qur'an, dan contoh penerapannya bagi siswa SMP.`
                      )
                    }
                    className="px-3.5 py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer"
                  >
                    <Bot className="w-4 h-4 text-emerald-700" />
                    <span>Tanya AI tentang {selectedAsma.latin}</span>
                  </button>
                </div>
              </div>

              {/* Makna Mendalam */}
              <div className="space-y-2">
                <h4 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                  <Lightbulb className="w-4 h-4 text-amber-600" />
                  <span>Makna Mendalam & Hakikat Keagungan Allah:</span>
                </h4>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                  {selectedAsma.maknaMendalam}
                </div>
              </div>

              {/* Dalil Utama Al-Qur'an */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4 text-emerald-700" />
                    <span>Dalil Al-Qur\'an Rujukan:</span>
                  </h4>
                  <span className="text-xs text-emerald-800 font-bold">
                    {selectedAsma.dalilUtama.surahName} [{selectedAsma.dalilUtama.surahNumber}] :{' '}
                    {selectedAsma.dalilUtama.verseNumber}
                  </span>
                </div>

                <div className="p-5 rounded-2xl bg-emerald-50/50 border border-emerald-200/80 space-y-3">
                  <div className="text-right font-arabic text-xl sm:text-2xl text-slate-900 leading-loose">
                    {selectedAsma.dalilUtama.arabic}
                  </div>
                  <p className="text-xs italic text-slate-600 font-serif">
                    "{selectedAsma.dalilUtama.latin}"
                  </p>
                  <div className="p-3 bg-white rounded-xl border border-emerald-100 text-xs sm:text-sm text-slate-800 space-y-1">
                    <p className="font-bold text-emerald-950">Terjemahan Resmi Kemenag RI:</p>
                    <p className="leading-relaxed">"{selectedAsma.dalilUtama.translationKemenag}"</p>
                  </div>
                  <p className="text-xs text-slate-600 bg-white/70 p-2.5 rounded-lg border border-emerald-100">
                    <span className="font-bold text-slate-800">Tafsir Wajiz: </span>
                    {selectedAsma.dalilUtama.tafsirWajiz}
                  </p>
                </div>
              </div>

              {/* Dalil Tambahan jika ada */}
              {selectedAsma.dalilTambahan && selectedAsma.dalilTambahan.length > 0 && (
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Dalil Al-Qur\'an Penguat Lainnya:
                  </h4>
                  <div className="space-y-3">
                    {selectedAsma.dalilTambahan.map((dalil, dIdx) => (
                      <div
                        key={dIdx}
                        className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-xs text-emerald-900">
                            {dalil.surahName} [{dalil.surahNumber}] : {dalil.verseNumber}
                          </span>
                        </div>
                        <div className="text-right font-arabic text-lg text-slate-800 leading-loose">
                          {dalil.arabic}
                        </div>
                        <p className="text-xs text-slate-700 italic">"{dalil.translationKemenag}"</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Perbandingan Sifat Khaliq vs Makhluk */}
              <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-3">
                <h4 className="text-sm font-bold text-amber-950 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-amber-700" />
                  <span>Komparasi: Kesempurnaan Allah vs Keterbatasan Makhluk</span>
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="p-3 bg-white rounded-xl border border-amber-200/80 space-y-1">
                    <p className="text-xs font-bold text-emerald-800">Sifat Allah Swt. (Khāliq):</p>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      {selectedAsma.perbedaanDenganMakhluk.sifatAllah}
                    </p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-amber-200/80 space-y-1">
                    <p className="text-xs font-bold text-rose-800">Sifat Manusia (Makhluk):</p>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      {selectedAsma.perbedaanDenganMakhluk.sifatMakhluk}
                    </p>
                  </div>
                </div>
              </div>

              {/* Hikmah Kehidupan */}
              <div className="space-y-2">
                <h4 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                  <Heart className="w-4 h-4 text-emerald-700" />
                  <span>Hikmah Mengimani {selectedAsma.latin}:</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedAsma.hikmahKehidupan.map((h, hIdx) => (
                    <div
                      key={hIdx}
                      className="p-3 rounded-xl bg-emerald-50/40 border border-emerald-100 text-xs text-slate-700 flex items-start gap-2"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-2 flex justify-between items-center">
              <button
                onClick={() => setActiveSubTab('asmaul-husna')}
                className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition-all cursor-pointer"
              >
                ← Kembali ke Pengertian Asmaul Husna
              </button>

              <button
                onClick={() => setActiveSubTab('perilaku')}
                className="px-4 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs sm:text-sm flex items-center gap-1.5 transition-all cursor-pointer shadow-xs"
              >
                <span>Lanjut ke Sub-Bab 4: Contoh Perilaku Sehari-hari</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 4: CONTOH PERILAKU SEHARI-HARI */}
        {/* ========================================================================= */}
        {activeSubTab === 'perilaku' && (
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-100 text-emerald-900 text-xs font-bold">
                <ShieldCheck className="w-4 h-4 text-emerald-700" />
                <span>Materi 4 • Aksi Nyata & Pembiasaan Akhlakul Karimah</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                4. Contoh Perilaku yang Mencerminkan Keyakinan terhadap Asmaul Husna
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Meneladani Asmaul Husna bukan sekadar hafalan lisan, melainkan terwujud dalam pembiasaan akhlak mulia siswa di sekolah, rumah, pergaulan teman sebaya, serta saat menggunakan media sosial dan gawai.
              </p>
            </div>

            {/* Domain Filter Buttons */}
            <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-3">
              <span className="text-xs font-bold text-slate-500 mr-2">Filter Ranah Kehidupan:</span>
              {[
                { id: 'all', label: 'Semua Ranah', icon: Layers },
                { id: 'sekolah', label: '🏫 Di Lingkungan Sekolah', icon: GraduationCap },
                { id: 'rumah', label: '🏡 Di Lingkungan Rumah', icon: Home },
                { id: 'pergaulan', label: '👥 Dalam Pergaulan & Sahabat', icon: Users },
                { id: 'digital', label: '📱 Di Ruang Digital & Medsos', icon: Smartphone }
              ].map((domain) => {
                const Icon = domain.icon;
                const isSelected = perilakuDomain === domain.id;
                return (
                  <button
                    key={domain.id}
                    onClick={() => setPerilakuDomain(domain.id as any)}
                    className={`px-3 py-1.5 rounded-xl font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-emerald-700 text-white shadow-xs'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{domain.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Perilaku per Asmaul Husna Cards */}
            <div className="space-y-6">
              {MATERI_KELAS_VII_SEM_1_BAB_2.subBab3_EmpatAsmaulHusna.map((asma) => {
                return (
                  <div
                    key={asma.id}
                    className="bg-white rounded-2xl border border-slate-200/90 shadow-xs overflow-hidden"
                  >
                    {/* Header Asma */}
                    <div className="p-4 bg-gradient-to-r from-emerald-50 via-teal-50 to-white border-b border-slate-200 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="font-arabic text-2xl font-black text-emerald-900">
                          {asma.arabic}
                        </span>
                        <div>
                          <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                            Meneladani {asma.latin} ({asma.translation})
                          </h4>
                          <p className="text-xs text-slate-500">
                            Mewujudkan kesadaran keimanan ke dalam tindakan nyata
                          </p>
                        </div>
                      </div>

                      <button
                        onClick={() =>
                          onAskAI(
                            `Berikan contoh skenario nyata dan tips untuk siswa SMP dalam meneladani Asmaul Husna ${asma.latin} (${asma.translation}) di sekolah dan rumah.`
                          )
                        }
                        className="px-3 py-1.5 rounded-lg bg-white hover:bg-emerald-50 text-emerald-800 border border-emerald-200 font-bold text-xs flex items-center gap-1 cursor-pointer transition-all"
                      >
                        <Bot className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">Tanya Tips AI</span>
                      </button>
                    </div>

                    {/* Columns of Domains */}
                    <div className="p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {/* Sekolah */}
                      {(perilakuDomain === 'all' || perilakuDomain === 'sekolah') && (
                        <div className="p-4 rounded-xl bg-slate-50/70 border border-slate-200/80 space-y-2">
                          <div className="flex items-center gap-1.5 font-bold text-xs text-emerald-800">
                            <GraduationCap className="w-4 h-4 text-emerald-600" />
                            <span>Di Sekolah:</span>
                          </div>
                          <ul className="space-y-2 text-xs text-slate-700">
                            {asma.contohPerilaku.sekolah.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-1.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Rumah */}
                      {(perilakuDomain === 'all' || perilakuDomain === 'rumah') && (
                        <div className="p-4 rounded-xl bg-slate-50/70 border border-slate-200/80 space-y-2">
                          <div className="flex items-center gap-1.5 font-bold text-xs text-teal-800">
                            <Home className="w-4 h-4 text-teal-600" />
                            <span>Di Rumah & Keluarga:</span>
                          </div>
                          <ul className="space-y-2 text-xs text-slate-700">
                            {asma.contohPerilaku.rumah.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0 mt-1.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Pergaulan */}
                      {(perilakuDomain === 'all' || perilakuDomain === 'pergaulan') && (
                        <div className="p-4 rounded-xl bg-slate-50/70 border border-slate-200/80 space-y-2">
                          <div className="flex items-center gap-1.5 font-bold text-xs text-indigo-800">
                            <Users className="w-4 h-4 text-indigo-600" />
                            <span>Dalam Pergaulan Sahabat:</span>
                          </div>
                          <ul className="space-y-2 text-xs text-slate-700">
                            {asma.contohPerilaku.pergaulan.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0 mt-1.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Digital */}
                      {(perilakuDomain === 'all' || perilakuDomain === 'digital') && (
                        <div className="p-4 rounded-xl bg-slate-50/70 border border-slate-200/80 space-y-2">
                          <div className="flex items-center gap-1.5 font-bold text-xs text-amber-800">
                            <Smartphone className="w-4 h-4 text-amber-600" />
                            <span>Di Ruang Digital & Medsos:</span>
                          </div>
                          <ul className="space-y-2 text-xs text-slate-700">
                            {asma.contohPerilaku.digital.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-1.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Matriks Karakter Pelajar & Pantangan */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-900 to-emerald-950 text-white space-y-4">
              <div className="space-y-1">
                <span className="px-2.5 py-0.5 rounded bg-amber-400 text-amber-950 font-black text-[11px]">
                  PANDUAN PROFIL PELAJAR
                </span>
                <h4 className="text-base sm:text-lg font-black text-white">
                  Matriks Karakter Utama vs Pantangan yang Harus Dijauhi
                </h4>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {MATERI_KELAS_VII_SEM_1_BAB_2.matriksPerilakuKarakter.map((matriks, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white/10 border border-white/15 space-y-2.5"
                  >
                    <div className="flex items-center justify-between border-b border-white/15 pb-2">
                      <h5 className="font-bold text-amber-300 text-sm">{matriks.asma}</h5>
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-emerald-300 uppercase tracking-wider">
                        Karakter Kunci:
                      </p>
                      <p className="text-xs font-semibold text-white">{matriks.karakterKunci}</p>
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-emerald-300 uppercase tracking-wider">
                        Aksi Nyata:
                      </p>
                      <ul className="text-xs text-emerald-100 space-y-1 mt-1">
                        {matriks.aksiNyata.map((aksi, aIdx) => (
                          <li key={aIdx} className="flex items-center gap-1.5">
                            <Check className="w-3 h-3 text-amber-400 shrink-0" />
                            <span>{aksi}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-1 text-xs text-rose-300 bg-rose-950/40 p-2 rounded-lg border border-rose-800/40">
                      <span className="font-bold text-rose-200">Hindari: </span>
                      {matriks.pantangan}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-2 flex justify-between items-center">
              <button
                onClick={() => setActiveSubTab('empat-asma')}
                className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition-all cursor-pointer"
              >
                ← Kembali ke Makna 4 Asmaul Husna
              </button>

              <button
                onClick={() => setActiveSubTab('kuis')}
                className="px-4 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs sm:text-sm flex items-center gap-1.5 transition-all cursor-pointer shadow-xs"
              >
                <span>Uji Pemahaman: Kuis Skenario Kasus</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 5: KUIS SKENARIO KASUS INTERAKTIF */}
        {/* ========================================================================= */}
        {activeSubTab === 'kuis' && (
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-100 text-emerald-900 text-xs font-bold">
                <HelpCircle className="w-4 h-4 text-emerald-700" />
                <span>Evaluasi Interaktif • Skenario Kehidupan Nyata</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                5. Kuis Skenario Kasus Penerapan Asmaul Husna
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Bacalah setiap kasus nyata di bawah ini dengan teliti, kemudian tentukan Asmaul Husna yang paling tepat dicerminkan oleh perilaku tokoh cerita tersebut:
              </p>
            </div>

            {/* Score Banner when completed */}
            {showQuizResults && (
              <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-800 to-teal-800 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-md">
                <div className="space-y-1">
                  <span className="px-2.5 py-0.5 rounded bg-amber-400 text-amber-950 font-black text-[11px]">
                    HASIL EVALUASI MANDIRI
                  </span>
                  <h4 className="text-xl font-black text-white">
                    Skor Kamu: {calculateQuizScore()} / 100
                  </h4>
                  <p className="text-xs text-emerald-100">
                    {calculateQuizScore() === 100
                      ? 'Luar biasa! Pemahamanmu terhadap penerapan Asmaul Husna sangat mendalam dan aplikatif!'
                      : 'Bagus! Pelajari kembali pembahasan setiap soal di bawah ini untuk semakin memperkuat akidahmu.'}
                  </p>
                </div>

                <button
                  onClick={() => {
                    setQuizAnswers({});
                    setShowQuizResults(false);
                  }}
                  className="px-4 py-2 rounded-xl bg-white text-emerald-900 hover:bg-emerald-50 font-bold text-xs flex items-center gap-1.5 self-start sm:self-auto cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Ulangi Kuis</span>
                </button>
              </div>
            )}

            {/* Quiz Question Cards */}
            <div className="space-y-5">
              {MATERI_KELAS_VII_SEM_1_BAB_2.kuisInteraktif.map((soal, sIdx) => {
                const selectedChoice = quizAnswers[soal.id];
                const isCorrect = selectedChoice === soal.jawabanBenar;

                return (
                  <div
                    key={soal.id}
                    className="p-5 sm:p-6 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-4"
                  >
                    <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
                      <span className="px-2.5 py-1 rounded-md bg-emerald-100 text-emerald-900 font-bold text-xs">
                        Kasus #{sIdx + 1}
                      </span>
                      {showQuizResults && (
                        <span
                          className={`font-bold text-xs px-2.5 py-1 rounded-full flex items-center gap-1 ${
                            isCorrect
                              ? 'bg-emerald-100 text-emerald-800'
                              : 'bg-rose-100 text-rose-800'
                          }`}
                        >
                          {isCorrect ? (
                            <>
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                              <span>Jawaban Benar</span>
                            </>
                          ) : (
                            <>
                              <XCircle className="w-3.5 h-3.5 text-rose-600" />
                              <span>Kurang Tepat</span>
                            </>
                          )}
                        </span>
                      )}
                    </div>

                    <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium bg-slate-50 p-4 rounded-xl border border-slate-100">
                      "{soal.skenario}"
                    </p>

                    {/* Choices */}
                    <div className="space-y-2">
                      <p className="text-xs font-bold text-slate-600">Pilih Jawaban yang Tepat:</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {soal.pilihan.map((pilihan) => {
                          const isPicked = selectedChoice === pilihan.id;
                          let choiceStyle = 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50';

                          if (showQuizResults) {
                            if (pilihan.id === soal.jawabanBenar) {
                              choiceStyle = 'bg-emerald-100 border-emerald-500 text-emerald-900 font-bold';
                            } else if (isPicked && !isCorrect) {
                              choiceStyle = 'bg-rose-100 border-rose-500 text-rose-900 line-through';
                            }
                          } else if (isPicked) {
                            choiceStyle = 'bg-emerald-700 text-white border-emerald-700 font-bold shadow-xs';
                          }

                          return (
                            <button
                              key={pilihan.id}
                              disabled={showQuizResults}
                              onClick={() =>
                                setQuizAnswers((prev) => ({ ...prev, [soal.id]: pilihan.id }))
                              }
                              className={`p-3 rounded-xl border text-left text-xs transition-all cursor-pointer flex items-start gap-2.5 ${choiceStyle}`}
                            >
                              <span
                                className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px] shrink-0 uppercase ${
                                  isPicked ? 'bg-amber-400 text-amber-950' : 'bg-slate-200 text-slate-700'
                                }`}
                              >
                                {pilihan.id}
                              </span>
                              <span>{pilihan.teks}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Explanation when submitted */}
                    {showQuizResults && (
                      <div className="p-3.5 bg-amber-50 rounded-xl border border-amber-200/80 space-y-1">
                        <p className="text-xs font-bold text-amber-900 flex items-center gap-1.5">
                          <Lightbulb className="w-3.5 h-3.5 text-amber-700" />
                          <span>Pembahasan Edukatif:</span>
                        </p>
                        <p className="text-xs text-amber-950 leading-relaxed font-medium">
                          {soal.penjelasan}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Submit / Reset Actions */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="text-xs text-slate-500">
                Terjawab: {Object.keys(quizAnswers).length} dari{' '}
                {MATERI_KELAS_VII_SEM_1_BAB_2.kuisInteraktif.length} kasus
              </div>

              <div className="flex items-center gap-2">
                {!showQuizResults ? (
                  <button
                    disabled={
                      Object.keys(quizAnswers).length <
                      MATERI_KELAS_VII_SEM_1_BAB_2.kuisInteraktif.length
                    }
                    onClick={() => {
                      setShowQuizResults(true);
                      showToast('Kuis berhasil dinilai!', 'success');
                    }}
                    className="px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-bold text-xs sm:text-sm transition-all cursor-pointer shadow-md"
                  >
                    Periksa & Nilai Jawaban
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setQuizAnswers({});
                      setShowQuizResults(false);
                    }}
                    className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center gap-1.5 cursor-pointer"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>Reset Jawaban</span>
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
