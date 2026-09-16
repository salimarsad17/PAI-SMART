import React, { useState } from 'react';
import {
  BookOpen,
  Sparkles,
  Volume2,
  VolumeX,
  Copy,
  CheckCircle2,
  HelpCircle,
  Award,
  Lightbulb,
  Bot,
  HeartHandshake,
  ShieldCheck,
  Compass,
  Star,
  Scroll,
  ListChecks,
  ChevronDown,
  ChevronUp,
  RefreshCw,
  Heart,
  Flame,
  Clock,
  Send,
  MessageCircle,
  Smile,
  ShieldAlert,
  GraduationCap,
  Users,
  Layers,
  Activity,
  AlertTriangle,
  FileText,
  UserCheck,
  Check,
  CheckSquare
} from 'lucide-react';
import {
  MATERI_KELAS_8_SEM_1_BAB_4,
  TahapPengurusanJenazah,
  TakbirShalatJenazah,
  KetentuanIslamJenazah,
  HikmahJenazahItem,
  KuisHotsJenazahItem
} from '../../data/materiKelas8Sem1Bab4Data';
import { useToast } from '../common/Toast';

interface BukuPaiKelas8Sem1Bab4DetailProps {
  onAskAI: (prompt: string) => void;
}

type Bab4Tab =
  | 'kewajiban'
  | 'shalat-jenazah'
  | 'ketentuan-islam'
  | 'hikmah'
  | 'studi-kasus'
  | 'kuis-hots';

export const BukuPaiKelas8Sem1Bab4Detail: React.FC<BukuPaiKelas8Sem1Bab4DetailProps> = ({ onAskAI }) => {
  const { showToast } = useToast();
  const materi = MATERI_KELAS_8_SEM_1_BAB_4;

  const [activeTab, setActiveTab] = useState<Bab4Tab>('kewajiban');
  const [selectedTahapId, setSelectedTahapId] = useState<string>('tahap-1-memandikan');
  const [activeTakbirIndex, setActiveTakbirIndex] = useState<number>(0);
  const [selectedJenazahType, setSelectedJenazahType] = useState<'laki' | 'perempuan' | 'anak'>('laki');
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);
  const [expandedKasusId, setExpandedKasusId] = useState<string | null>('kasus-1-medsos');
  const [expandedAspekId, setExpandedAspekId] = useState<string | null>('aspek-1-saat-wafat');
  
  // Checklist State
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({});

  // Quiz State
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});
  const [showKuisResult, setShowKuisResult] = useState<boolean>(false);

  // Audio Speech Simulation
  const handlePlayAudio = (text: string) => {
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
      showToast('Perangkat tidak mendukung audio suara.', 'info');
    }
  };

  const handleCopyText = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    showToast(`${label} berhasil disalin!`, 'success');
  };

  const toggleChecklist = (id: number) => {
    setCheckedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const checkedCount = Object.values(checkedItems).filter(Boolean).length;
  const checklistPercentage = Math.round((checkedCount / materi.checklistRefleksiDiri.length) * 100);

  // Calculate Quiz Score
  const calculateScore = () => {
    let correct = 0;
    materi.kuisHots.forEach((q) => {
      if (userAnswers[q.id] === q.kunciJawaban) {
        correct++;
      }
    });
    return Math.round((correct / materi.kuisHots.length) * 100);
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-800 via-teal-800 to-cyan-950 text-white p-6 sm:p-8 shadow-xl border border-emerald-700/40">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-amber-400 text-amber-950 text-xs font-black uppercase tracking-wider">
              Buku Pelajaran PAI Kelas VIII • Semester 1
            </span>
            <span className="px-3 py-1 rounded-full bg-emerald-700/70 text-emerald-100 text-xs font-semibold">
              Bab 4 • Elemen Fikih
            </span>
            <span className="px-3 py-1 rounded-full bg-teal-700/70 text-teal-100 text-xs font-semibold">
              Kurikulum Merdeka
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
            {materi.judulBab}
          </h2>
          <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed max-w-4xl">
            {materi.subJudul}
          </p>

          <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 mt-4 text-xs sm:text-sm text-emerald-50 leading-relaxed space-y-2">
            <p className="font-medium">
              💡 <strong className="text-amber-300">Apersepsi Fikih Jenazah:</strong> {materi.pengantar.apersepsi}
            </p>
            <div className="pt-2 border-t border-white/10 flex flex-wrap items-center gap-3">
              <span className="font-bold text-amber-300">Hadis 2 Qirath:</span>
              <span className="italic text-emerald-200">
                "Barangsiapa menghadiri jenazah hingga dishalatkan baginya 1 qirath, dan hingga dimakamkan baginya 2 qirath semisal dua gunung Uhud." (H.R. Bukhari & Muslim)
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-gray-200 scrollbar-none">
        <button
          onClick={() => setActiveTab('kewajiban')}
          className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 ${
            activeTab === 'kewajiban'
              ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
              : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
          }`}
        >
          <Layers className="w-4 h-4" />
          <span>1. Kewajiban Jenazah (4 Tahap)</span>
        </button>

        <button
          onClick={() => setActiveTab('shalat-jenazah')}
          className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 ${
            activeTab === 'shalat-jenazah'
              ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
              : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
          }`}
        >
          <Compass className="w-4 h-4" />
          <span>2. Tata Cara Shalat Jenazah</span>
        </button>

        <button
          onClick={() => setActiveTab('ketentuan-islam')}
          className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 ${
            activeTab === 'ketentuan-islam'
              ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
              : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
          }`}
        >
          <ShieldCheck className="w-4 h-4" />
          <span>3. Ketentuan Islam (Adab, Takziah & Ziarah)</span>
        </button>

        <button
          onClick={() => setActiveTab('hikmah')}
          className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 ${
            activeTab === 'hikmah'
              ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
              : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
          }`}
        >
          <Sparkles className="w-4 h-4" />
          <span>4. Hikmah Penyelenggaraan</span>
        </button>

        <button
          onClick={() => setActiveTab('studi-kasus')}
          className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 ${
            activeTab === 'studi-kasus'
              ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
              : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
          }`}
        >
          <HeartHandshake className="w-4 h-4" />
          <span>5. Studi Kasus & Refleksi Diri</span>
        </button>

        <button
          onClick={() => setActiveTab('kuis-hots')}
          className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 ${
            activeTab === 'kuis-hots'
              ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
              : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
          }`}
        >
          <Award className="w-4 h-4" />
          <span>6. Kuis Penilaian HOTS</span>
        </button>
      </div>

      {/* TAB 1: KEWAJIBAN TERHADAP JENAZAH */}
      {activeTab === 'kewajiban' && (
        <div className="space-y-6">
          {/* Card Penjelasan Fardhu Kifayah */}
          <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-emerald-50 via-teal-50 to-cyan-50 border border-emerald-200">
            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-xl bg-emerald-600 text-white shrink-0 mt-0.5 shadow-sm">
                <Users className="w-5 h-5" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <h3 className="text-base sm:text-lg font-black text-emerald-950">
                    Konsep Hukum Fardhu Kifayah Pengurusan Jenazah
                  </h3>
                  <span className="px-2 py-0.5 bg-emerald-600 text-white rounded text-[10px] font-bold">
                    Wajib Kolektif
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-emerald-900 leading-relaxed">
                  {materi.kewajibanJenazah.definisiFardhuKifayah}
                </p>
                <div className="pt-2 border-t border-emerald-200/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-emerald-800">
                  <span>
                    <strong>Perbedaan dengan Fardhu 'Ain:</strong> {materi.kewajibanJenazah.perbedaanDenganFardhuAin}
                  </span>
                  <button
                    onClick={() =>
                      onAskAI(
                        'Jelaskan secara mendalam tentang hukum fardhu kifayah dalam pengurusan jenazah serta apa yang terjadi jika dalam satu desa tidak ada yang mengurus jenazah muslim?'
                      )
                    }
                    className="px-3 py-1.5 rounded-lg bg-emerald-600 text-white font-bold hover:bg-emerald-700 transition-all flex items-center gap-1.5 shrink-0 self-start sm:self-auto cursor-pointer"
                  >
                    <Bot className="w-3.5 h-3.5" />
                    <span>Tanya AI tentang Fardhu Kifayah</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Tahapan Utama Pengurusan Jenazah */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base sm:text-lg font-black text-gray-900 flex items-center gap-2">
                <Layers className="w-5 h-5 text-emerald-600" />
                <span>Empat Tahapan Pokok Pengurusan Jenazah Muslim</span>
              </h3>
              <span className="text-xs font-semibold text-gray-500">Klik tiap tahap untuk rincian lengkap</span>
            </div>

            {/* Stepper Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
              {materi.kewajibanJenazah.tahapanKewajiban.map((tahap) => {
                const isSelected = selectedTahapId === tahap.id;
                return (
                  <button
                    key={tahap.id}
                    onClick={() => setSelectedTahapId(tahap.id)}
                    className={`p-3.5 rounded-2xl text-left transition-all border cursor-pointer ${
                      isSelected
                        ? 'bg-emerald-700 text-white border-emerald-700 shadow-md scale-[1.02]'
                        : 'bg-white text-gray-800 border-gray-200 hover:border-emerald-300 hover:bg-emerald-50/50'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span
                        className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-black ${
                          isSelected ? 'bg-amber-400 text-amber-950' : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        {tahap.tahapNumber}
                      </span>
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                          isSelected ? 'bg-white/20 text-white' : 'bg-emerald-100 text-emerald-800'
                        }`}
                      >
                        {tahap.hukum}
                      </span>
                    </div>
                    <div className="font-black text-xs sm:text-sm line-clamp-1">{tahap.nama}</div>
                    <div
                      className={`text-[11px] font-arabic mt-0.5 line-clamp-1 ${
                        isSelected ? 'text-emerald-100' : 'text-gray-500'
                      }`}
                    >
                      {tahap.namaArab}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Selected Tahap Detail View */}
            {(() => {
              const currentTahap = materi.kewajibanJenazah.tahapanKewajiban.find(
                (t) => t.id === selectedTahapId
              );
              if (!currentTahap) return null;

              return (
                <div className="p-6 rounded-3xl bg-white border border-emerald-100 shadow-lg space-y-6">
                  {/* Top Header of Detail */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-gray-100">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="px-2.5 py-0.5 rounded bg-emerald-100 text-emerald-800 font-black text-xs">
                          Tahap ke-{currentTahap.tahapNumber}
                        </span>
                        <span className="text-xs font-bold text-gray-400">•</span>
                        <span className="text-xs font-bold text-gray-600">{currentTahap.hukum}</span>
                      </div>
                      <h4 className="text-xl font-black text-gray-900">{currentTahap.nama}</h4>
                      <p className="text-xs text-gray-600 mt-1">{currentTahap.deskripsi}</p>
                    </div>

                    <div className="text-right sm:shrink-0">
                      <span className="text-lg sm:text-xl font-bold font-arabic text-emerald-700 block">
                        {currentTahap.namaArab}
                      </span>
                      <button
                        onClick={() =>
                          onAskAI(
                            `Jelaskan secara mendetail langkah-langkah praktis dan syarat syariat dalam ${currentTahap.nama} menurut mazhab Syafi'i bagi siswa SMP!`
                          )
                        }
                        className="mt-2 px-3 py-1.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ml-auto"
                      >
                        <Bot className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Panduan AI {currentTahap.nama}</span>
                      </button>
                    </div>
                  </div>

                  {/* 2-Column Grid: Syarat & Ketentuan */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Syarat-syarat */}
                    <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-2">
                      <div className="flex items-center gap-2 text-xs font-black text-gray-800 uppercase tracking-wider">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <span>Syarat & Kriteria Syariat</span>
                      </div>
                      <ul className="space-y-1.5 text-xs text-gray-700">
                        {currentTahap.syaratSyarat.map((syarat, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-emerald-600 font-bold">•</span>
                            <span>{syarat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Ketentuan Khusus */}
                    <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/70 space-y-2">
                      <div className="flex items-center gap-2 text-xs font-black text-amber-900 uppercase tracking-wider">
                        <AlertTriangle className="w-4 h-4 text-amber-600" />
                        <span>Ketentuan & Aturan Khusus</span>
                      </div>
                      <ul className="space-y-1.5 text-xs text-amber-950">
                        {currentTahap.ketentuanKhusus.map((ketentuan, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-amber-700 font-bold">•</span>
                            <span>{ketentuan}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Langkah Praktis Bertahap */}
                  <div className="p-5 rounded-2xl bg-emerald-50/50 border border-emerald-100 space-y-3">
                    <div className="flex items-center gap-2 text-sm font-black text-emerald-950">
                      <ListChecks className="w-4 h-4 text-emerald-600" />
                      <span>Alur Langkah-Langkah Praktik Sunnah</span>
                    </div>
                    <div className="space-y-2">
                      {currentTahap.langkahPraktis.map((langkah, idx) => (
                        <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-gray-800">
                          <span className="w-5 h-5 rounded-full bg-emerald-600 text-white font-black text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                            {idx + 1}
                          </span>
                          <span className="leading-relaxed">{langkah}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Adab Penting Callout */}
                  <div className="p-4 rounded-2xl bg-gradient-to-r from-teal-800 to-emerald-900 text-white text-xs sm:text-sm flex items-start gap-3">
                    <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-amber-300 block mb-0.5">Adab Penting yang Wajib Dijaga:</strong>
                      <p className="text-emerald-100 leading-relaxed">{currentTahap.adabPenting}</p>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>

          {/* Pengecualian Khusus: Syahid Ma'rakah */}
          <div className="p-5 sm:p-6 rounded-3xl bg-slate-900 text-white border border-slate-800 space-y-4 shadow-md">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Flame className="w-5 h-5 text-amber-400" />
                <h4 className="text-base sm:text-lg font-black text-white">
                  {materi.kewajibanJenazah.pengecualianMatiSyahid.judul}
                </h4>
              </div>
              <span className="px-2.5 py-0.5 rounded bg-rose-900/60 text-rose-200 text-xs font-bold">
                Pengecualian Syariat
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/60 space-y-1.5">
                <span className="font-bold text-rose-400">1. Syahid Ma'rakah (Medan Perang):</span>
                <p className="text-slate-300 leading-relaxed">
                  {materi.kewajibanJenazah.pengecualianMatiSyahid.syahidMarakah}
                </p>
                <div className="pt-2 text-amber-300 font-semibold text-xs">
                  ❌ Tidak dimandikan dan ❌ Tidak dishalatkan (langsung dikubur bersama pakaian & darahnya).
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/60 space-y-1.5">
                <span className="font-bold text-emerald-400">2. Syahid Akhirat (Musibah/Wabah/Melahirkan):</span>
                <p className="text-slate-300 leading-relaxed">
                  {materi.kewajibanJenazah.pengecualianMatiSyahid.syahidAkhirat}
                </p>
                <div className="pt-2 text-emerald-300 font-semibold text-xs">
                  ✅ Wajib dimandikan, dikafani, dishalatkan, dan dikuburkan seperti biasa.
                </div>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-800 text-xs text-slate-300 italic border-l-4 border-amber-400">
              "{materi.kewajibanJenazah.pengecualianMatiSyahid.dalil}"
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: TATA CARA SHALAT JENAZAH */}
      {activeTab === 'shalat-jenazah' && (
        <div className="space-y-6">
          {/* Overview Shalat Jenazah */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-emerald-100 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-lg font-black text-gray-900">
                  Struktur & Karakteristik Shalat Jenazah
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-0.5">
                  {materi.tataCaraShalatJenazah.pengantar}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() =>
                    onAskAI(
                      'Tolong jelaskan secara rinci rukun shalat jenazah 4 takbir dan perbedaan posisi berdiri imam jika jenazah laki-laki dan jenazah perempuan!'
                    )
                  }
                  className="px-3.5 py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <Bot className="w-4 h-4 text-emerald-600" />
                  <span>Konsultasi AI Shalat Jenazah</span>
                </button>
              </div>
            </div>

            {/* Grid 2 Column: Syarat Sah & Rukun */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-100 space-y-2">
                <span className="font-bold text-emerald-950 uppercase tracking-wider text-xs block">
                  Syarat Sah Shalat Jenazah:
                </span>
                <ul className="space-y-1 text-gray-700">
                  {materi.tataCaraShalatJenazah.syaratSah.map((syarat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span>{syarat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-teal-50/60 border border-teal-100 space-y-2">
                <span className="font-bold text-teal-950 uppercase tracking-wider text-xs block">
                  7 Rukun Shalat Jenazah (Wajib Terpenuhi):
                </span>
                <ul className="space-y-1 text-gray-700">
                  {materi.tataCaraShalatJenazah.rukunShalatJenazah.map((rukun, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-teal-600 font-bold">{idx + 1}.</span>
                      <span>{rukun.replace(/^[0-9]+\.\s*/, '')}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Posisi Berdiri Imam & Shaf Makmum */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-800 to-teal-900 text-white space-y-3">
              <span className="text-xs font-black text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
                <Compass className="w-4 h-4" />
                <span>Posisi Berdiri Imam & Pengaturan Shaf</span>
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm">
                  <span className="font-bold text-amber-300 block mb-1">👨 Jenazah Laki-Laki</span>
                  <p className="text-emerald-100">{materi.tataCaraShalatJenazah.posisiImamDanMakmum.jenazahLakiLaki}</p>
                </div>
                <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm">
                  <span className="font-bold text-amber-300 block mb-1">👩 Jenazah Perempuan</span>
                  <p className="text-emerald-100">{materi.tataCaraShalatJenazah.posisiImamDanMakmum.jenazahPerempuan}</p>
                </div>
                <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm">
                  <span className="font-bold text-amber-300 block mb-1">👥 Pengaturan Shaf</span>
                  <p className="text-emerald-100">{materi.tataCaraShalatJenazah.posisiImamDanMakmum.posisiShafMakmum}</p>
                </div>
              </div>
            </div>
          </div>

          {/* SIMULASI INTERAKTIF 4 TAKBIR SHALAT JENAZAH */}
          <div className="p-6 rounded-3xl bg-white border border-emerald-100 shadow-xl space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="px-2.5 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold text-xs">
                  Simulasi Praktik Interaktif
                </span>
                <h3 className="text-xl font-black text-gray-900 mt-1">
                  Alur Bacaan 4 Takbir Shalat Jenazah
                </h3>
              </div>

              {/* Selector Jenis Jenazah */}
              <div className="flex items-center gap-1.5 bg-gray-100 p-1 rounded-xl">
                <button
                  onClick={() => setSelectedJenazahType('laki')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    selectedJenazahType === 'laki' ? 'bg-emerald-600 text-white shadow-xs' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Laki-Laki
                </button>
                <button
                  onClick={() => setSelectedJenazahType('perempuan')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    selectedJenazahType === 'perempuan' ? 'bg-emerald-600 text-white shadow-xs' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Perempuan
                </button>
                <button
                  onClick={() => setSelectedJenazahType('anak')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    selectedJenazahType === 'anak' ? 'bg-emerald-600 text-white shadow-xs' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Anak-Anak
                </button>
              </div>
            </div>

            {/* Takbir Tabs Stepper */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {materi.tataCaraShalatJenazah.tahapanEmpatTakbir.map((takbir, idx) => {
                const isActive = activeTakbirIndex === idx;
                return (
                  <button
                    key={takbir.takbirKe}
                    onClick={() => setActiveTakbirIndex(idx)}
                    className={`p-3 rounded-2xl text-center border transition-all cursor-pointer ${
                      isActive
                        ? 'bg-emerald-700 text-white border-emerald-700 shadow-md font-black'
                        : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100 font-bold'
                    }`}
                  >
                    <div className="text-xs uppercase tracking-wider mb-0.5">Takbir ke-{takbir.takbirKe}</div>
                    <div className="text-[11px] line-clamp-1 opacity-90">
                      {idx === 0
                        ? 'Niat & Al-Fatihah'
                        : idx === 1
                        ? 'Shalawat Nabi'
                        : idx === 2
                        ? 'Doa untuk Jenazah'
                        : 'Doa Penutup & Salam'}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Detail Takbir Aktif */}
            {(() => {
              const currentTakbir = materi.tataCaraShalatJenazah.tahapanEmpatTakbir[activeTakbirIndex];
              if (!currentTakbir) return null;

              // Tentukan bacaan yang sesuai jika ada variasi jenazah
              let displayArab = currentTakbir.bacaanArab;
              let displayLatin = currentTakbir.transliterasi;
              let displayTerjemahan = currentTakbir.terjemahan;

              if (currentTakbir.variasiDoa && currentTakbir.variasiDoa.length > 0) {
                if (selectedJenazahType === 'perempuan') {
                  const varP = currentTakbir.variasiDoa.find((v) => v.kondisi.includes('Perempuan'));
                  if (varP) {
                    displayArab = varP.bacaanArab;
                    displayLatin = varP.transliterasi;
                    displayTerjemahan = varP.terjemahan;
                  }
                } else if (selectedJenazahType === 'anak') {
                  const varA = currentTakbir.variasiDoa.find((v) => v.kondisi.includes('Anak'));
                  if (varA) {
                    displayArab = varA.bacaanArab;
                    displayLatin = varA.transliterasi;
                    displayTerjemahan = varA.terjemahan;
                  }
                }
              }

              return (
                <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-emerald-600 text-white font-black text-xs">
                      {currentTakbir.namaRukun}
                    </span>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handlePlayAudio(displayArab)}
                        className={`p-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                          isPlayingAudio
                            ? 'bg-rose-500 text-white'
                            : 'bg-emerald-100 hover:bg-emerald-200 text-emerald-900'
                        }`}
                        title="Dengarkan Audio Bacaan"
                      >
                        {isPlayingAudio ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                        <span>{isPlayingAudio ? 'Hentikan' : 'Putar Audio'}</span>
                      </button>
                      <button
                        onClick={() => handleCopyText(`${displayArab}\n\n${displayLatin}\n\n${displayTerjemahan}`, currentTakbir.namaRukun)}
                        className="p-2 rounded-xl bg-gray-200 hover:bg-gray-300 text-gray-700 transition-all cursor-pointer"
                        title="Salin Teks"
                      >
                        <Copy className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Arab Box */}
                  <div className="p-5 rounded-2xl bg-white border border-gray-200 shadow-xs text-right">
                    <p className="text-xl sm:text-2xl font-bold font-arabic text-emerald-950 leading-loose">
                      {displayArab}
                    </p>
                  </div>

                  {/* Transliterasi & Terjemahan */}
                  <div className="space-y-2 text-xs sm:text-sm">
                    <p className="text-emerald-900 font-semibold italic">
                      "{displayLatin}"
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Artinya:</strong> {displayTerjemahan}
                    </p>
                  </div>

                  {/* Penjelasan Syariat */}
                  <div className="p-3.5 rounded-xl bg-amber-50 border-l-4 border-amber-500 text-xs text-amber-950">
                    <strong>Catatan Syariat:</strong> {currentTakbir.penjelasanSyariat}
                  </div>

                  {/* Stepper Navigation Next / Prev */}
                  <div className="flex items-center justify-between pt-2 border-t border-gray-200">
                    <button
                      disabled={activeTakbirIndex === 0}
                      onClick={() => setActiveTakbirIndex((prev) => Math.max(0, prev - 1))}
                      className="px-4 py-2 rounded-xl bg-gray-200 text-gray-700 font-bold text-xs disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed"
                    >
                      ← Takbir Sebelumnya
                    </button>
                    <span className="text-xs font-bold text-gray-500">
                      Langkah {activeTakbirIndex + 1} dari 4
                    </span>
                    <button
                      disabled={activeTakbirIndex === 3}
                      onClick={() => setActiveTakbirIndex((prev) => Math.min(3, prev + 1))}
                      className="px-4 py-2 rounded-xl bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-700 disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed"
                    >
                      Takbir Berikutnya →
                    </button>
                  </div>
                </div>
              );
            })()}
          </div>

          {/* Sub-modul: Shalat Ghaib */}
          <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-teal-50 to-emerald-50 border border-teal-200 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Compass className="w-5 h-5 text-teal-700" />
                <h4 className="text-base sm:text-lg font-black text-teal-950">
                  Ketentuan Khusus Shalat Ghaib
                </h4>
              </div>
              <span className="px-2.5 py-0.5 rounded bg-teal-600 text-white text-xs font-bold">
                Sunnah Mu'akkadah
              </span>
            </div>

            <p className="text-xs sm:text-sm text-teal-900 leading-relaxed">
              {materi.tataCaraShalatJenazah.shalatGhaib.pengertian}
            </p>

            <div className="p-4 rounded-2xl bg-white border border-teal-100 text-xs sm:text-sm text-gray-800 space-y-2">
              <span className="font-bold text-teal-900 block">
                📖 Kisah Rasulullah Saw. Menyalatkan Raja Najasyi di Habasyah:
              </span>
              <p className="text-gray-700 leading-relaxed italic">
                "{materi.tataCaraShalatJenazah.shalatGhaib.kisahNabiShalatGhaibRajaNajasyi}"
              </p>
              <div className="pt-2 border-t border-gray-100 text-xs text-teal-800">
                <strong>Perbedaan dengan Shalat Biasa:</strong> {materi.tataCaraShalatJenazah.shalatGhaib.perbedaanDenganShalatJenazahBiasa}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: KETENTUAN ISLAM (ADAB, TAKZIAH, ZIARAH) */}
      {activeTab === 'ketentuan-islam' && (
        <div className="space-y-6">
          <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs sm:text-sm text-emerald-950">
            <strong>Tuntunan Luhur Syariat:</strong> {materi.ketentuanIslamPenyelenggaraan.pengantar}
          </div>

          {/* 4 Aspek Ketentuan Accordion */}
          <div className="space-y-3">
            {materi.ketentuanIslamPenyelenggaraan.aspekKetentuan.map((aspek) => {
              const isExpanded = expandedAspekId === aspek.id;
              return (
                <div
                  key={aspek.id}
                  className="rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-xs"
                >
                  <button
                    onClick={() => setExpandedAspekId(isExpanded ? null : aspek.id)}
                    className="w-full p-4 sm:p-5 flex items-center justify-between text-left hover:bg-gray-50 transition-all cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <span className="px-2.5 py-1 rounded-lg bg-emerald-100 text-emerald-900 font-bold text-xs">
                        {aspek.aspek}
                      </span>
                      <h4 className="font-black text-sm sm:text-base text-gray-900">{aspek.judul}</h4>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-400 italic hidden sm:inline">{aspek.dalilRujukan}</span>
                      {isExpanded ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="p-5 pt-0 border-t border-gray-100 space-y-4 text-xs sm:text-sm">
                      <p className="text-gray-700 leading-relaxed mt-3">{aspek.penjelasan}</p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Anjuran Sunnah */}
                        <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-100 space-y-2">
                          <div className="flex items-center gap-2 font-bold text-emerald-950 text-xs uppercase tracking-wider">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                            <span>Anjuran Sunnah & Adab Mulia</span>
                          </div>
                          <ul className="space-y-1.5 text-emerald-950">
                            {aspek.anjuranSunnah.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="text-emerald-600 font-bold">✓</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Larangan Syariat */}
                        <div className="p-4 rounded-2xl bg-rose-50/70 border border-rose-100 space-y-2">
                          <div className="flex items-center gap-2 font-bold text-rose-950 text-xs uppercase tracking-wider">
                            <ShieldAlert className="w-4 h-4 text-rose-600" />
                            <span>Larangan Syariat yang Diharamkan</span>
                          </div>
                          <ul className="space-y-1.5 text-rose-950">
                            {aspek.laranganSyariat.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="text-rose-600 font-bold">✕</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Larangan Niyahah Callout Khusus */}
          <div className="p-5 sm:p-6 rounded-3xl bg-rose-950 text-white space-y-3 shadow-md border border-rose-900">
            <div className="flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-rose-400" />
              <h4 className="text-base sm:text-lg font-black text-white">
                {materi.ketentuanIslamPenyelenggaraan.laranganNiyahah.judul}
              </h4>
            </div>
            <p className="text-xs sm:text-sm text-rose-100 leading-relaxed">
              {materi.ketentuanIslamPenyelenggaraan.laranganNiyahah.pengertianNiyahah}
            </p>
            <div className="p-3.5 rounded-xl bg-rose-900/60 border border-rose-700/60 text-xs sm:text-sm text-rose-200 italic">
              "{materi.ketentuanIslamPenyelenggaraan.laranganNiyahah.dalilHadis}"
            </div>
            <div className="p-3 rounded-xl bg-white/10 text-xs text-rose-100">
              <strong>Catatan Kemenag:</strong> {materi.ketentuanIslamPenyelenggaraan.laranganNiyahah.perbedaanMenangisWajarVsNiyahah}
            </div>
          </div>

          {/* Doa Masuk Kuburan */}
          <div className="p-5 sm:p-6 rounded-3xl bg-white border border-teal-100 shadow-md space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-base font-black text-gray-900 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-emerald-600" />
                <span>Lafaz Doa Sunnah Memasuki Pekuburan Muslim</span>
              </h4>
              <button
                onClick={() =>
                  handleCopyText(
                    `${materi.ketentuanIslamPenyelenggaraan.adabZiarahKubur.doaMasukPekuburan.teksArab}\n\n${materi.ketentuanIslamPenyelenggaraan.adabZiarahKubur.doaMasukPekuburan.latin}\n\n${materi.ketentuanIslamPenyelenggaraan.adabZiarahKubur.doaMasukPekuburan.terjemahan}`,
                    'Doa Ziarah Kubur'
                  )
                }
                className="px-2.5 py-1 rounded-lg bg-gray-100 hover:bg-gray-200 text-xs font-bold text-gray-700 flex items-center gap-1 cursor-pointer"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>Salin Doa</span>
              </button>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100 text-right">
              <p className="text-lg sm:text-xl font-bold font-arabic text-emerald-950 leading-loose">
                {materi.ketentuanIslamPenyelenggaraan.adabZiarahKubur.doaMasukPekuburan.teksArab}
              </p>
            </div>

            <p className="text-xs sm:text-sm text-emerald-900 font-medium italic">
              "{materi.ketentuanIslamPenyelenggaraan.adabZiarahKubur.doaMasukPekuburan.latin}"
            </p>
            <p className="text-xs text-gray-600">
              <strong>Artinya:</strong> {materi.ketentuanIslamPenyelenggaraan.adabZiarahKubur.doaMasukPekuburan.terjemahan}
            </p>
          </div>
        </div>
      )}

      {/* TAB 4: HIKMAH PENYELENGGARAAN JENAZAH */}
      {activeTab === 'hikmah' && (
        <div className="space-y-6">
          <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 text-xs sm:text-sm text-emerald-950">
            <strong>Hikmah Luhur Syariat:</strong> {materi.hikmahPenyelenggaraan.pengantar}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {materi.hikmahPenyelenggaraan.daftarHikmah.map((hikmah) => (
              <div
                key={hikmah.id}
                className="p-5 rounded-3xl bg-white border border-gray-200 hover:border-emerald-300 transition-all shadow-xs space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${
                        hikmah.dimensi === 'Bagi Jenazah'
                          ? 'bg-blue-100 text-blue-800'
                          : hikmah.dimensi === 'Bagi Keluarga Duka'
                          ? 'bg-rose-100 text-rose-800'
                          : hikmah.dimensi === 'Bagi Umat/Masyarakat'
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-amber-100 text-amber-800'
                      }`}
                    >
                      {hikmah.dimensi}
                    </span>
                    <Sparkles className="w-4 h-4 text-emerald-500" />
                  </div>

                  <h4 className="text-base font-black text-gray-900">{hikmah.judul}</h4>
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">{hikmah.deskripsi}</p>
                </div>

                <div className="space-y-2 pt-3 border-t border-gray-100 text-xs">
                  <div className="p-2.5 rounded-xl bg-gray-50 text-gray-600 italic">
                    {hikmah.dalilPendukung}
                  </div>
                  <div className="text-emerald-900 font-semibold">
                    🌱 <strong>Dampak Praktis:</strong> {hikmah.dampakPraktis}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Tanya AI seputar Hikmah */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-700 to-teal-800 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h4 className="font-bold text-sm sm:text-base">Ingin Menggali Hikmah Lainnya?</h4>
              <p className="text-xs text-emerald-100">
                Tanyakan kepada Masterku AI tentang hikmah psikologis, sosiologis, dan spiritual pengurusan jenazah.
              </p>
            </div>
            <button
              onClick={() =>
                onAskAI(
                  'Jelaskan hikmah sosiologis dan psikologis dari syariat penyelenggaraan jenazah dalam Islam bagi masyarakat modern!'
                )
              }
              className="px-4 py-2 rounded-xl bg-white hover:bg-emerald-50 text-emerald-900 font-bold text-xs shadow-md transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer self-start sm:self-auto"
            >
              <Bot className="w-4 h-4 text-emerald-700" />
              <span>Tanya Hikmah ke AI</span>
            </button>
          </div>
        </div>
      )}

      {/* TAB 5: STUDI KASUS & REFLEKSI DIRI */}
      {activeTab === 'studi-kasus' && (
        <div className="space-y-6">
          {/* Studi Kasus Remaja */}
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-black text-gray-900 flex items-center gap-2">
                <HeartHandshake className="w-5 h-5 text-emerald-600" />
                <span>3 Studi Kasus Dilema Nyata di Lingkungan Remaja</span>
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">
                Analisis dilema etika pergaulan dan syariat seputar penyelenggaraan jenazah di era digital.
              </p>
            </div>

            <div className="space-y-3">
              {materi.studiKasusRemaja.map((kasus) => {
                const isExpanded = expandedKasusId === kasus.id;
                return (
                  <div
                    key={kasus.id}
                    className="rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-xs"
                  >
                    <button
                      onClick={() => setExpandedKasusId(isExpanded ? null : kasus.id)}
                      className="w-full p-4 sm:p-5 flex items-center justify-between text-left hover:bg-gray-50 transition-all cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-800 font-black text-xs flex items-center justify-center shrink-0">
                          {kasus.id.replace('kasus-', '')}
                        </span>
                        <h4 className="font-bold text-sm sm:text-base text-gray-900">{kasus.judul}</h4>
                      </div>
                      {isExpanded ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
                    </button>

                    {isExpanded && (
                      <div className="p-5 pt-0 border-t border-gray-100 space-y-4 text-xs sm:text-sm">
                        <div className="p-4 rounded-xl bg-gray-50 border-l-4 border-emerald-500 text-gray-700 leading-relaxed mt-3">
                          <strong>Skenario Kasus:</strong> {kasus.skenario}
                        </div>

                        <div className="p-3.5 rounded-xl bg-amber-50 text-amber-950 font-semibold">
                          ❓ <strong>Dilema:</strong> {kasus.pertanyaanDilema}
                        </div>

                        <div className="space-y-2">
                          <strong className="text-gray-900 block">📖 Analisis Syariat & Fikih:</strong>
                          <p className="text-gray-700 leading-relaxed">{kasus.analisisSyariat}</p>
                        </div>

                        <div className="p-3.5 rounded-xl bg-emerald-50 text-emerald-950">
                          ✅ <strong>Solusi Praktis Pelajar:</strong> {kasus.solusiPraktis}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Lembar Checklist Refleksi Diri */}
          <div className="p-6 rounded-3xl bg-white border border-emerald-100 shadow-md space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-lg font-black text-gray-900">
                  Lembar Evaluasi Diri (8 Dimensi Sikap & Pemahaman)
                </h3>
                <p className="text-xs text-gray-600">
                  Centang pernyataan yang telah Anda pahami dan siap amalkan dalam kehidupan sehari-hari.
                </p>
              </div>

              {/* Progress Indicator */}
              <div className="flex items-center gap-3">
                <div className="text-right">
                  <span className="text-xs font-bold text-gray-600">Pencapaian:</span>
                  <div className="text-sm font-black text-emerald-700">{checklistPercentage}%</div>
                </div>
                <div className="w-24 h-2.5 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-emerald-600 rounded-full transition-all duration-300"
                    style={{ width: `${checklistPercentage}%` }}
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              {materi.checklistRefleksiDiri.map((item) => {
                const isChecked = !!checkedItems[item.id];
                return (
                  <div
                    key={item.id}
                    onClick={() => toggleChecklist(item.id)}
                    className={`p-3.5 rounded-2xl border transition-all flex items-start gap-3 cursor-pointer ${
                      isChecked
                        ? 'bg-emerald-50/70 border-emerald-300 text-emerald-950'
                        : 'bg-white border-gray-200 text-gray-800 hover:bg-gray-50'
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 transition-all ${
                        isChecked ? 'bg-emerald-600 text-white' : 'border border-gray-400 bg-white'
                      }`}
                    >
                      {isChecked && <Check className="w-3.5 h-3.5" />}
                    </div>
                    <div className="text-xs sm:text-sm">
                      <span className="px-2 py-0.5 rounded bg-gray-100 text-gray-700 font-bold text-[10px] mr-2">
                        {item.kategori}
                      </span>
                      <span>{item.pernyataan}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* TAB 6: KUIS EVALUASI HOTS */}
      {activeTab === 'kuis-hots' && (
        <div className="space-y-6">
          <div className="p-5 rounded-3xl bg-white border border-emerald-100 shadow-md space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="px-2.5 py-0.5 rounded bg-amber-100 text-amber-900 font-black text-xs uppercase tracking-wider">
                  Evaluasi Mandiri Tingkat HOTS
                </span>
                <h3 className="text-xl font-black text-gray-900 mt-1">
                  5 Soal Penalaran Penyelenggaraan Jenazah
                </h3>
                <p className="text-xs sm:text-sm text-gray-600">
                  Uji pemahaman Anda melalui soal penalaran kontekstual berdasarkan situasi nyata.
                </p>
              </div>

              {showKuisResult && (
                <div className="p-3 rounded-2xl bg-emerald-50 border border-emerald-200 text-right">
                  <span className="text-xs font-bold text-gray-600 block">Skor Akhir:</span>
                  <span className="text-2xl font-black text-emerald-700">{calculateScore()} / 100</span>
                </div>
              )}
            </div>

            {/* List 5 Soal */}
            <div className="space-y-6 pt-2">
              {materi.kuisHots.map((q, qIndex) => {
                const selectedOption = userAnswers[q.id];
                const isAnswered = selectedOption !== undefined;
                const isCorrect = isAnswered && selectedOption === q.kunciJawaban;

                return (
                  <div
                    key={q.id}
                    className="p-5 rounded-2xl border border-gray-200 bg-gray-50/50 space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold text-xs">
                        Soal Nomor {q.nomor}
                      </span>
                      {showKuisResult && (
                        <span
                          className={`text-xs font-bold px-2 py-0.5 rounded ${
                            isCorrect ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                          }`}
                        >
                          {isCorrect ? '✓ Jawaban Benar' : '✕ Jawaban Salah'}
                        </span>
                      )}
                    </div>

                    {/* Kasus */}
                    <p className="text-xs sm:text-sm text-gray-700 bg-white p-3.5 rounded-xl border border-gray-100 italic">
                      "{q.kasus}"
                    </p>

                    {/* Pertanyaan */}
                    <p className="text-xs sm:text-sm font-bold text-gray-900">
                      {q.pertanyaan}
                    </p>

                    {/* Pilihan Jawaban */}
                    <div className="space-y-2 pt-1">
                      {q.pilihan.map((pilihan, pIdx) => {
                        const isChosen = selectedOption === pIdx;
                        let optionClass = 'bg-white border-gray-200 hover:bg-emerald-50/40 text-gray-800';

                        if (showKuisResult) {
                          if (pIdx === q.kunciJawaban) {
                            optionClass = 'bg-emerald-100 border-emerald-400 text-emerald-950 font-bold';
                          } else if (isChosen && pIdx !== q.kunciJawaban) {
                            optionClass = 'bg-rose-100 border-rose-400 text-rose-950';
                          } else {
                            optionClass = 'bg-white border-gray-200 text-gray-500 opacity-60';
                          }
                        } else if (isChosen) {
                          optionClass = 'bg-emerald-600 text-white border-emerald-600 font-bold shadow-xs';
                        }

                        return (
                          <button
                            key={pIdx}
                            disabled={showKuisResult}
                            onClick={() => setUserAnswers((prev) => ({ ...prev, [q.id]: pIdx }))}
                            className={`w-full p-3 rounded-xl border text-left text-xs sm:text-sm transition-all cursor-pointer disabled:cursor-default flex items-start gap-2.5 ${optionClass}`}
                          >
                            <span className="shrink-0">{pilihan}</span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Pembahasan */}
                    {showKuisResult && (
                      <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-950 space-y-1">
                        <strong className="block">💡 Pembahasan Ilmiah:</strong>
                        <p className="leading-relaxed">{q.pembahasan}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-200">
              <span className="text-xs text-gray-500 font-medium">
                {Object.keys(userAnswers).length} dari {materi.kuisHots.length} soal dijawab
              </span>

              <div className="flex items-center gap-2">
                {showKuisResult ? (
                  <button
                    onClick={() => {
                      setUserAnswers({});
                      setShowKuisResult(false);
                    }}
                    className="px-4 py-2 rounded-xl bg-gray-200 hover:bg-gray-300 text-gray-800 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Ulangi Kuis</span>
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      if (Object.keys(userAnswers).length < materi.kuisHots.length) {
                        showToast('Harap jawab semua soal terlebih dahulu!', 'info');
                        return;
                      }
                      setShowKuisResult(true);
                      showToast('Kuis berhasil diperiksa! Periksa skor dan pembahasan.', 'success');
                    }}
                    className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-black shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Periksa Jawaban & Lihat Skor</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
