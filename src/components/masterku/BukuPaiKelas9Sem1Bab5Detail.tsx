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
  Brain,
  Award,
  BookmarkCheck,
  FileText,
  Volume2,
  VolumeX,
  Play,
  Pause,
  HelpCircle,
  GraduationCap,
  ArrowRight,
  Filter,
  CheckSquare,
  Square,
  AlertTriangle,
  Heart,
  ChevronDown,
  ChevronUp,
  MapPin,
  Ship,
  Compass,
  Landmark,
  Scroll,
  Users,
  Feather,
  Palette,
  Crown,
  CheckCheck
} from 'lucide-react';
import {
  DALIL_SEJARAH_MASUK_ISLAM,
  HADITS_SEJARAH_MASUK_ISLAM,
  TEORI_MASUK_ISLAM_DATA,
  JALUR_PENYEBARAN_ISLAM_DATA,
  KERAJAAN_ISLAM_PERINTIS_DATA,
  HIKMAH_SEJARAH_MASUK_ISLAM,
  STUDI_KASUS_SEJARAH_DATA,
  KUIS_HOTS_SEJARAH_DATA,
  MUHASABAH_SEJARAH_DATA,
  TeoriMasukIslamItem,
  JalurPenyebaranIslamItem,
  KerajaanPerintisIslamItem
} from '../../data/materiKelas9Sem1Bab5Data';
import { useToast } from '../common/Toast';

interface Props {
  onAskAI: (prompt: string) => void;
}

type Bab5K9SubTab =
  | 'ringkasan'
  | 'teori-masuk'
  | 'jalur-penyebaran'
  | 'dalil-hadits'
  | 'hikmah-refleksi'
  | 'evaluasi';

export const BukuPaiKelas9Sem1Bab5Detail: React.FC<Props> = ({ onAskAI }) => {
  const { showToast } = useToast();
  const [activeSubTab, setActiveSubTab] = useState<Bab5K9SubTab>('ringkasan');

  // Audio state
  const [playingAudioId, setPlayingAudioId] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Teori selector state
  const [selectedTeoriId, setSelectedTeoriId] = useState<string>('teori-makkah');

  // Jalur selector state
  const [selectedJalurId, setSelectedJalurId] = useState<string>('jalur-perdagangan');

  // Expanded card state
  const [expandedTeoriId, setExpandedTeoriId] = useState<string | null>('teori-makkah');
  const [expandedJalurId, setExpandedJalurId] = useState<string | null>('jalur-perdagangan');
  const [expandedKasusId, setExpandedKasusId] = useState<string | null>('kasus-1');

  // Muhasabah checklist state
  const [checkedMuhasabah, setCheckedMuhasabah] = useState<Record<string, boolean>>({});

  // Quiz state
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});
  const [submittedQuiz, setSubmittedQuiz] = useState<boolean>(false);

  const toggleMuhasabah = (id: string) => {
    setCheckedMuhasabah(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleSelectAnswer = (kuisId: string, optionIndex: number) => {
    if (submittedQuiz) return;
    setUserAnswers(prev => ({
      ...prev,
      [kuisId]: optionIndex
    }));
  };

  const calculateScore = () => {
    let correct = 0;
    KUIS_HOTS_SEJARAH_DATA.forEach(q => {
      if (userAnswers[q.id] === q.kunciJawaban) {
        correct++;
      }
    });
    return Math.round((correct / KUIS_HOTS_SEJARAH_DATA.length) * 100);
  };

  const resetQuiz = () => {
    setUserAnswers({});
    setSubmittedQuiz(false);
  };

  const handleAudioPlay = (id: string, url?: string) => {
    if (!url) {
      showToast('Audio untuk dalil ini belum tersedia', 'info');
      return;
    }

    if (playingAudioId === id) {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setPlayingAudioId(null);
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      const audio = new Audio(url);
      audioRef.current = audio;
      setPlayingAudioId(id);

      audio.play().catch(err => {
        console.error('Audio play error:', err);
        setPlayingAudioId(null);
        showToast('Gagal memutar audio murottal', 'error');
      });

      audio.onended = () => {
        setPlayingAudioId(null);
      };
    }
  };

  const copyText = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    showToast(`${label} berhasil disalin`, 'success');
  };

  return (
    <div id="buku-pai-k9-bab5" className="space-y-6">
      {/* Top Banner Header */}
      <div className="bg-gradient-to-r from-emerald-800 via-teal-900 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden border border-emerald-600/30">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-amber-400 text-amber-950 font-black text-xs uppercase tracking-wider shadow-sm flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5" />
                SEJARAH PERADABAN ISLAM (SPI)
              </span>
              <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-xs text-white font-bold text-xs">
                Kelas IX • Semester 1 • Bab 5
              </span>
              <span className="px-3 py-1 rounded-full bg-emerald-500/30 text-emerald-200 font-semibold text-xs flex items-center gap-1">
                <Ship className="w-3 h-3" />
                Jalur Sutra Maritim
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white leading-tight">
              Merefleksikan Sejarah Masuknya Islam di Indonesia
            </h2>
            <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed">
              Mengkaji secara mendalam teori-teori masuknya Islam (Makkah, Gujarat, Persia, China), 6 jalur transmisi dakwah damai (*bilā 'unfin*), peranan kerajaan perintis, serta memetik hikmah toleransi, persatuan, dan keteladanan akhlak para mubaligh perintis Nusantara.
            </p>
          </div>

          {/* Quick Stats / Action */}
          <div className="flex flex-wrap sm:flex-col gap-2 shrink-0">
            <button
              onClick={() => onAskAI('Jelaskan secara ringkas 4 teori masuknya Islam ke Indonesia (Makkah, Gujarat, Persia, China) beserta bukti sejarah dan perbedaannya!')}
              className="px-4 py-2.5 rounded-2xl bg-amber-400 hover:bg-amber-300 text-amber-950 font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer hover:scale-[1.02]"
            >
              <Bot className="w-4 h-4" />
              <span>Tanya Masterku AI</span>
            </button>
            <div className="px-3 py-2 rounded-xl bg-white/10 text-center border border-white/10">
              <span className="text-[11px] text-emerald-200 block font-medium">Metode Dakwah Utama</span>
              <span className="text-xs font-bold text-white">Bilā 'Unfin (Tanpa Kekerasan)</span>
            </div>
          </div>
        </div>

        {/* Sub-Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto p-2 bg-sky-100/95 rounded-2xl border border-sky-200 shadow-xs mt-6 no-scrollbar">
          <button
            onClick={() => setActiveSubTab('ringkasan')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer active:bg-emerald-600 active:text-amber-200 ${
              activeSubTab === 'ringkasan'
                ? 'bg-blue-600 text-white shadow-md ring-2 ring-blue-300 border border-blue-500 font-black'
                : 'bg-sky-50 text-black border border-sky-200 hover:bg-sky-200/70 font-bold'
            }`}
          >
            <BookOpen className={`w-3.5 h-3.5 shrink-0 drop-shadow-2xs ${activeSubTab === 'ringkasan' ? 'text-amber-300' : 'text-amber-500 font-bold'}`} />
            <span className={activeSubTab === 'ringkasan' ? 'text-white font-bold' : 'text-black font-bold'}>1. Ringkasan & Peta Konsep</span>
          </button>

          <button
            onClick={() => setActiveSubTab('teori-masuk')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer active:bg-emerald-600 active:text-amber-200 ${
              activeSubTab === 'teori-masuk'
                ? 'bg-blue-600 text-white shadow-md ring-2 ring-blue-300 border border-blue-500 font-black'
                : 'bg-sky-50 text-black border border-sky-200 hover:bg-sky-200/70 font-bold'
            }`}
          >
            <Compass className={`w-3.5 h-3.5 shrink-0 drop-shadow-2xs ${activeSubTab === 'teori-masuk' ? 'text-amber-300' : 'text-amber-500 font-bold'}`} />
            <span className={activeSubTab === 'teori-masuk' ? 'text-white font-bold' : 'text-black font-bold'}>2. 4 Teori Masuknya Islam</span>
          </button>

          <button
            onClick={() => setActiveSubTab('jalur-penyebaran')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer active:bg-emerald-600 active:text-amber-200 ${
              activeSubTab === 'jalur-penyebaran'
                ? 'bg-blue-600 text-white shadow-md ring-2 ring-blue-300 border border-blue-500 font-black'
                : 'bg-sky-50 text-black border border-sky-200 hover:bg-sky-200/70 font-bold'
            }`}
          >
            <Ship className={`w-3.5 h-3.5 shrink-0 drop-shadow-2xs ${activeSubTab === 'jalur-penyebaran' ? 'text-amber-300' : 'text-amber-500 font-bold'}`} />
            <span className={activeSubTab === 'jalur-penyebaran' ? 'text-white font-bold' : 'text-black font-bold'}>3. 6 Jalur Dakwah Damai</span>
          </button>

          <button
            onClick={() => setActiveSubTab('dalil-hadits')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer active:bg-emerald-600 active:text-amber-200 ${
              activeSubTab === 'dalil-hadits'
                ? 'bg-blue-600 text-white shadow-md ring-2 ring-blue-300 border border-blue-500 font-black'
                : 'bg-sky-50 text-black border border-sky-200 hover:bg-sky-200/70 font-bold'
            }`}
          >
            <Scroll className={`w-3.5 h-3.5 shrink-0 drop-shadow-2xs ${activeSubTab === 'dalil-hadits' ? 'text-amber-300' : 'text-amber-500 font-bold'}`} />
            <span className={activeSubTab === 'dalil-hadits' ? 'text-white font-bold' : 'text-black font-bold'}>4. Dalil Naqli & Hadits</span>
          </button>

          <button
            onClick={() => setActiveSubTab('hikmah-refleksi')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer active:bg-emerald-600 active:text-amber-200 ${
              activeSubTab === 'hikmah-refleksi'
                ? 'bg-blue-600 text-white shadow-md ring-2 ring-blue-300 border border-blue-500 font-black'
                : 'bg-sky-50 text-black border border-sky-200 hover:bg-sky-200/70 font-bold'
            }`}
          >
            <Sparkles className={`w-3.5 h-3.5 shrink-0 drop-shadow-2xs ${activeSubTab === 'hikmah-refleksi' ? 'text-amber-300' : 'text-amber-500 font-bold'}`} />
            <span className={activeSubTab === 'hikmah-refleksi' ? 'text-white font-bold' : 'text-black font-bold'}>5. Hikmah & Studi Kasus</span>
          </button>

          <button
            onClick={() => setActiveSubTab('evaluasi')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer active:bg-emerald-600 active:text-amber-200 ${
              activeSubTab === 'evaluasi'
                ? 'bg-blue-600 text-white shadow-md ring-2 ring-blue-300 border border-blue-500 font-black'
                : 'bg-sky-50 text-black border border-sky-200 hover:bg-sky-200/70 font-bold'
            }`}
          >
            <Award className={`w-3.5 h-3.5 shrink-0 drop-shadow-2xs ${activeSubTab === 'evaluasi' ? 'text-amber-300' : 'text-amber-500 font-bold'}`} />
            <span className={activeSubTab === 'evaluasi' ? 'text-white font-bold' : 'text-black font-bold'}>6. Muhasabah & Kuis HOTS</span>
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SUB-TAB 1: RINGKASAN & PETA KONSEP */}
      {/* ========================================================================= */}
      {activeSubTab === 'ringkasan' && (
        <div className="space-y-6">
          {/* Card Capaian Pembelajaran & Elemen SPI */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Capaian Pembelajaran (CP)</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Peserta didik mampu menganalisis alur sejarah masuknya Islam ke Indonesia, membedakan keabsahan bukti pada teori-teori kedatangan Islam, menjelaskan 6 saluran transmisi dakwah, serta merefleksikan nilai toleransi, kearifan kultural, dan keikhlasan para perintis peradaban Islam.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                <Brain className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Tujuan Pembelajaran</h3>
              <ul className="text-xs text-slate-600 space-y-1.5 list-disc list-inside">
                <li>Membedakan 4 teori masuknya Islam (Makkah, Gujarat, Persia, China).</li>
                <li>Menganalisis 6 jalur penyebaran Islam di kepulauan Nusantara.</li>
                <li>Menghayati peranan kerajaan Islam perintis (Samudera Pasai, Demak, Aceh).</li>
                <li>Mengamalkan hikmah dakwah damai (*bilā 'unfin*) dalam era digital.</li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Karakter Pelajar Pancasila</h3>
              <div className="flex flex-wrap gap-1.5">
                <span className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-[11px] font-semibold">Beriman & Bertakwa</span>
                <span className="px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 text-[11px] font-semibold">Berkebinekaan Global</span>
                <span className="px-2.5 py-1 rounded-lg bg-amber-50 text-amber-700 text-[11px] font-semibold">Bernalar Kritis</span>
                <span className="px-2.5 py-1 rounded-lg bg-teal-50 text-teal-700 text-[11px] font-semibold">Gotong Royong</span>
              </div>
              <p className="text-xs text-slate-500 pt-1">
                Menghargai tradisi budaya bangsa tanpa mencampuradukkan pokok akidah tauhid.
              </p>
            </div>
          </div>

          {/* Peta Konsep Visual */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-500 text-white flex items-center justify-center">
                  <Landmark className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base">Peta Alur Pembelajaran Bab 5</h3>
                  <p className="text-xs text-slate-500">Struktur materi terpadu sesuai standar buku teks Kurikulum Merdeka</p>
                </div>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800">
                Lengkap & Terverifikasi
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-gradient-to-b from-emerald-50/50 to-emerald-100/30 border border-emerald-200/60 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black text-emerald-800">BAGIAN 1</span>
                  <Compass className="w-4 h-4 text-emerald-600" />
                </div>
                <h4 className="font-bold text-sm text-slate-900">4 Teori Masuknya Islam</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Menelaah waktu, rute perjalanan, tokoh sejarawan, dan bukti arkeologis dari Teori Makkah (abad ke-7 M), Teori Gujarat (abad ke-13 M), Teori Persia (abad ke-13 M), dan Teori China (abad ke-9/15 M).
                </p>
              </div>

              <div className="p-4 rounded-xl bg-gradient-to-b from-teal-50/50 to-teal-100/30 border border-teal-200/60 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black text-teal-800">BAGIAN 2</span>
                  <Ship className="w-4 h-4 text-teal-600" />
                </div>
                <h4 className="font-bold text-sm text-slate-900">6 Jalur Transmisi Dakwah</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Membedah saluran Perdagangan, Perkawinan, Pendidikan (Pesantren), Tasawuf/Spiritualitas, Kesenian/Akulturasi Budaya (Wayang, Gamelan Sekaten), dan Politik Kekuasaan Kesultanan Nusantara.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-gradient-to-b from-amber-50/50 to-amber-100/30 border border-amber-200/60 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black text-amber-800">BAGIAN 3</span>
                  <Sparkles className="w-4 h-4 text-amber-600" />
                </div>
                <h4 className="font-bold text-sm text-slate-900">Hikmah & Refleksi Karakter</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Meneladani watak dakwah tanpa kekerasan (*bilā 'unfin*), sikap toleransi berlandaskan Q.S. An-Nahl: 125, pemecahan 3 studi kasus era digital, lembar muhasabah diri, dan uji kompetensi HOTS.
                </p>
              </div>
            </div>
          </div>

          {/* Garis Waktu Perkembangan Islam di Nusantara */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-emerald-950 text-white shadow-md space-y-4">
            <div className="flex items-center gap-2">
              <Scroll className="w-5 h-5 text-amber-400" />
              <h3 className="font-bold text-lg text-white">Garis Waktu (*Timeline*) Kedatangan Islam di Nusantara</h3>
            </div>

            <div className="relative pl-6 border-l-2 border-emerald-500/50 space-y-6 pt-2">
              <div className="relative">
                <div className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-amber-400 border-2 border-slate-900" />
                <span className="text-xs font-bold text-amber-300">Tahun 674 M (Abad ke-1 H)</span>
                <h5 className="font-bold text-sm text-white mt-0.5">Pemukiman Saudagar Arab di Barus (Ta-Shih)</h5>
                <p className="text-xs text-slate-300 leading-relaxed mt-1">
                  Catatan Dinasti Tang mencatat keberadaan saudagar muslim Arab di pantai barat Sumatera. Nisan makam Mahligai Barus bertarikh 672 M / 48 H memperkuat awal mula kehadiran Islam sejak masa Khulafaur Rasyidin dan Dinasti Umayyah.
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-emerald-400 border-2 border-slate-900" />
                <span className="text-xs font-bold text-emerald-300">Tahun 1082 M (Abad ke-11 M)</span>
                <h5 className="font-bold text-sm text-white mt-0.5">Batu Nisan Fatimah binti Maimun di Leran, Gresik</h5>
                <p className="text-xs text-slate-300 leading-relaxed mt-1">
                  Bukti tertua keberadaan komunitas muslim di Pulau Jawa dengan tulisan kaligrafi Arab Kufi pada makam Fatimah binti Maimun bin Hibatullah.
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-teal-400 border-2 border-slate-900" />
                <span className="text-xs font-bold text-teal-300">Tahun 1267 - 1297 M (Abad ke-13 M)</span>
                <h5 className="font-bold text-sm text-white mt-0.5">Berdirinya Kesultanan Samudera Pasai</h5>
                <p className="text-xs text-slate-300 leading-relaxed mt-1">
                  Meurah Silu memeluk Islam dan bergelar Sultan Malik As-Saleh. Samudera Pasai menjadi kerajaan Islam maritim pertama yang diakui dunia internasional dan dikunjungi oleh Marco Polo (1292 M) dan Ibnu Battuta (1345 M).
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-amber-400 border-2 border-slate-900" />
                <span className="text-xs font-bold text-amber-300">Abad ke-15 hingga 16 Masehi</span>
                <h5 className="font-bold text-sm text-white mt-0.5">Era Keemasan Wali Songo & Kesultanan Demak</h5>
                <p className="text-xs text-slate-300 leading-relaxed mt-1">
                  Dewan dakwah Wali Songo melakukan transformasi kebudayaan dan keilmuan secara masif di Pulau Jawa. Raden Patah mendirikan Kesultanan Demak Bintoro sebagai pusat kekuatan politik dan dakwah Islam pertama di Jawa.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* SUB-TAB 2: 4 TEORI MASUKNYA ISLAM KE INDONESIA */}
      {/* ========================================================================= */}
      {activeSubTab === 'teori-masuk' && (
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="font-bold text-slate-900 text-lg">Pilih dan Pelajari 4 Teori Masuknya Islam</h3>
                <p className="text-xs text-slate-500">Klik salah satu teori di bawah untuk menganalisis tokoh, waktu, bukti, kelebihan, dan kelemahannya</p>
              </div>
              <button
                onClick={() => onAskAI('Jelaskan mengapa Buya Hamka menolak Teori Gujarat dan lebih meyakini Teori Makkah dalam sejarah masuknya Islam ke Indonesia!')}
                className="px-3 py-1.5 rounded-xl bg-emerald-50 text-emerald-800 hover:bg-emerald-100 text-xs font-bold flex items-center gap-1.5 self-start cursor-pointer border border-emerald-200"
              >
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Tanya Argumen Buya Hamka</span>
              </button>
            </div>

            {/* Teori Navigation Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
              {TEORI_MASUK_ISLAM_DATA.map(teori => (
                <button
                  key={teori.id}
                  onClick={() => setSelectedTeoriId(teori.id)}
                  className={`p-3 rounded-xl text-left transition-all cursor-pointer border ${
                    selectedTeoriId === teori.id
                      ? 'bg-emerald-800 text-white border-emerald-800 shadow-md scale-[1.02]'
                      : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border-slate-200'
                  }`}
                >
                  <span className="text-[10px] font-black uppercase tracking-wider block opacity-75">
                    {teori.waktuAbad.split(' ')[0]} {teori.waktuAbad.split(' ')[1]}
                  </span>
                  <h4 className="font-bold text-xs sm:text-sm mt-0.5 leading-tight">{teori.namaTeori}</h4>
                </button>
              ))}
            </div>

            {/* Detailed Selected Teori Card */}
            {(() => {
              const curTeori = TEORI_MASUK_ISLAM_DATA.find(t => t.id === selectedTeoriId) || TEORI_MASUK_ISLAM_DATA[0];
              return (
                <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-emerald-50/30 border border-emerald-200/80 shadow-sm space-y-5 mt-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-200">
                    <div>
                      <span className="px-2.5 py-0.5 rounded-md bg-emerald-200 text-emerald-950 font-bold text-[11px]">
                        {curTeori.waktuAbad}
                      </span>
                      <h3 className="text-xl font-black text-slate-900 mt-1">{curTeori.namaTeori}</h3>
                    </div>
                    <div className="text-left sm:text-right">
                      <span className="text-xs text-slate-500 block">Fungsi dalam Historiografi:</span>
                      <span className="text-xs font-bold text-emerald-800">{curTeori.kesimpulanSintesis}</span>
                    </div>
                  </div>

                  {/* Tokoh & Rute */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1.5">
                      <h4 className="text-xs font-black text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-emerald-600" />
                        Tokoh Sejarawan Pendukung
                      </h4>
                      <ul className="text-xs text-slate-600 space-y-1 list-disc list-inside">
                        {curTeori.tokohPendukung.map((tokoh, i) => (
                          <li key={i} className="font-medium">{tokoh}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1.5">
                      <h4 className="text-xs font-black text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                        <Compass className="w-3.5 h-3.5 text-emerald-600" />
                        Rute Perjalanan & Titik Pendaratan
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed font-medium">
                        {curTeori.ruteJalur}
                      </p>
                    </div>
                  </div>

                  {/* Bukti Historis */}
                  <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-2">
                    <h4 className="text-xs font-black text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                      <Scroll className="w-3.5 h-3.5 text-amber-600" />
                      Bukti Historis, Filologis, & Arkeologis
                    </h4>
                    <ul className="space-y-2">
                      {curTeori.buktiHistoris.map((bukti, i) => (
                        <li key={i} className="text-xs text-slate-700 flex items-start gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{bukti}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Argumentasi Pokok */}
                  <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200 space-y-1.5">
                    <h4 className="text-xs font-black text-amber-900 uppercase tracking-wider flex items-center gap-1.5">
                      <Lightbulb className="w-3.5 h-3.5 text-amber-700" />
                      Inti Argumentasi Ilmiah
                    </h4>
                    <p className="text-xs text-amber-950 leading-relaxed">
                      {curTeori.argumentasi}
                    </p>
                  </div>

                  {/* Analisis Kelebihan & Kelemahan */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 space-y-1">
                      <h5 className="text-xs font-bold text-emerald-900 flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-700" />
                        Kelebihan / Kekuatan Teori
                      </h5>
                      <p className="text-xs text-emerald-950 leading-relaxed">{curTeori.kelebihan}</p>
                    </div>

                    <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 space-y-1">
                      <h5 className="text-xs font-bold text-rose-900 flex items-center gap-1.5">
                        <AlertTriangle className="w-3.5 h-3.5 text-rose-700" />
                        Kelemahan / Kritik Sejarawan
                      </h5>
                      <p className="text-xs text-rose-950 leading-relaxed">{curTeori.kelemahan}</p>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>

          {/* Matriks Komparasi 4 Teori */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-4">
            <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
              <Landmark className="w-4 h-4 text-emerald-600" />
              Matriks Komparasi Sintesis 4 Teori Masuknya Islam
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse border border-slate-200">
                <thead>
                  <tr className="bg-slate-100 text-slate-800 font-bold">
                    <th className="p-3 border border-slate-200">Nama Teori</th>
                    <th className="p-3 border border-slate-200">Waktu Masuk</th>
                    <th className="p-3 border border-slate-200">Tokoh Utama</th>
                    <th className="p-3 border border-slate-200">Bukti Kunci</th>
                    <th className="p-3 border border-slate-200">Fokus Dimensi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr className="hover:bg-emerald-50/40">
                    <td className="p-3 font-bold text-emerald-900 border border-slate-200">Teori Makkah (Arab)</td>
                    <td className="p-3 border border-slate-200">Abad ke-7 M (1 H)</td>
                    <td className="p-3 border border-slate-200">Buya Hamka, T.W. Arnold</td>
                    <td className="p-3 border border-slate-200">Perkampungan Barus 674 M, nisan Barus 672 M, mazhab Syafi'i, gelar Al-Malik</td>
                    <td className="p-3 font-semibold text-emerald-700 border border-slate-200">Fase Inisiasi Kedatangan Pertama</td>
                  </tr>
                  <tr className="hover:bg-emerald-50/40">
                    <td className="p-3 font-bold text-emerald-900 border border-slate-200">Teori Gujarat (India)</td>
                    <td className="p-3 border border-slate-200">Abad ke-13 M</td>
                    <td className="p-3 border border-slate-200">Snouck Hurgronje, Moquette</td>
                    <td className="p-3 border border-slate-200">Nisan Sultan Malik As-Saleh & Maulana Malik Ibrahim khas pualam Cambay</td>
                    <td className="p-3 font-semibold text-emerald-700 border border-slate-200">Fase Akselerasi Perdagangan Maritim</td>
                  </tr>
                  <tr className="hover:bg-emerald-50/40">
                    <td className="p-3 font-bold text-emerald-900 border border-slate-200">Teori Persia (Iran)</td>
                    <td className="p-3 border border-slate-200">Abad ke-13 M</td>
                    <td className="p-3 border border-slate-200">Hoesein Djajadiningrat</td>
                    <td className="p-3 border border-slate-200">Tradisi Tabot/Tabuik 10 Muharram, ejaan baris Jabar/Je-er/Pe-es, kata Syahbandar</td>
                    <td className="p-3 font-semibold text-emerald-700 border border-slate-200">Fase Transmisi Budaya & Sastra Sufistik</td>
                  </tr>
                  <tr className="hover:bg-emerald-50/40">
                    <td className="p-3 font-bold text-emerald-900 border border-slate-200">Teori China (Tiongkok)</td>
                    <td className="p-3 border border-slate-200">Abad ke-9 & 15 M</td>
                    <td className="p-3 border border-slate-200">Slamet Muljana, Denys Lombard</td>
                    <td className="p-3 border border-slate-200">Kronik Sampo Kong Semarang, ekspedisi armada Cheng Ho, arsitektur atap tumpang</td>
                    <td className="p-3 font-semibold text-emerald-700 border border-slate-200">Fase Diplomasi & Transisi Keraton Demak</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 text-[11px] text-slate-600 leading-relaxed border border-slate-200">
              💡 <strong>Kesimpulan Para Sejarawan Kontemporer (Azyumardi Azra):</strong> Keempat teori ini bukanlah saling menyalahkan, melainkan menggambarkan mozaik sejarah Nusantara yang saling melengkapi di berbagai zaman dan jalur pelayaran yang berbeda.
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* SUB-TAB 3: 6 JALUR PENYEBARAN ISLAM & KERAJAAN PERINTIS */}
      {/* ========================================================================= */}
      {activeSubTab === 'jalur-penyebaran' && (
        <div className="space-y-6">
          {/* Header 6 Jalur */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="font-bold text-slate-900 text-lg">6 Jalur Transmisi Penyebaran Islam di Indonesia</h3>
                <p className="text-xs text-slate-500">
                  Islam disebarkan secara damai tanpa invasi militer melalui 6 saluran strategis berikut:
                </p>
              </div>
              <button
                onClick={() => onAskAI('Jelaskan bagaimana Sunan Kalijaga menggunakan kesenian wayang kulit dan tembang Ilir-Ilir untuk mendakwahkan Islam di Tanah Jawa!')}
                className="px-3 py-1.5 rounded-xl bg-amber-50 text-amber-900 hover:bg-amber-100 text-xs font-bold flex items-center gap-1.5 self-start cursor-pointer border border-amber-200"
              >
                <Palette className="w-3.5 h-3.5 text-amber-700" />
                <span>Tanya Kesenian Sunan Kalijaga</span>
              </button>
            </div>

            {/* Accordion / Cards 6 Jalur */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              {JALUR_PENYEBARAN_ISLAM_DATA.map(jalur => {
                const isExpanded = expandedJalurId === jalur.id;
                return (
                  <div
                    key={jalur.id}
                    className={`rounded-2xl border transition-all overflow-hidden ${
                      isExpanded
                        ? 'bg-gradient-to-b from-white to-emerald-50/20 border-emerald-400 shadow-sm'
                        : 'bg-white border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div
                      onClick={() => setExpandedJalurId(isExpanded ? null : jalur.id)}
                      className="p-5 cursor-pointer flex items-center justify-between gap-3 select-none"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-black shrink-0">
                          {jalur.id === 'jalur-perdagangan' && <Ship className="w-5 h-5" />}
                          {jalur.id === 'jalur-perkawinan' && <Users className="w-5 h-5" />}
                          {jalur.id === 'jalur-pendidikan' && <BookOpen className="w-5 h-5" />}
                          {jalur.id === 'jalur-tasawuf' && <Feather className="w-5 h-5" />}
                          {jalur.id === 'jalur-kesenian' && <Palette className="w-5 h-5" />}
                          {jalur.id === 'jalur-politik' && <Crown className="w-5 h-5" />}
                        </div>
                        <div>
                          <span className="text-[10px] font-bold text-emerald-700 font-serif">
                            {jalur.namaArab}
                          </span>
                          <h4 className="font-bold text-slate-900 text-sm sm:text-base leading-tight">
                            {jalur.namaJalur}
                          </h4>
                        </div>
                      </div>
                      <div className="text-slate-400">
                        {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                      </div>
                    </div>

                    {isExpanded && (
                      <div className="px-5 pb-5 pt-1 space-y-4 text-xs text-slate-600 border-t border-slate-100">
                        <p className="leading-relaxed font-normal bg-slate-50 p-3 rounded-xl border border-slate-200/60">
                          {jalur.deskripsi}
                        </p>

                        <div>
                          <h5 className="font-bold text-slate-800 mb-1.5 flex items-center gap-1.5">
                            <Users className="w-3.5 h-3.5 text-emerald-600" />
                            Tokoh Penggerak Utama:
                          </h5>
                          <div className="flex flex-wrap gap-1.5">
                            {jalur.tokohKunci.map((tokoh, idx) => (
                              <span key={idx} className="px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-800 text-[11px] font-medium border border-emerald-100">
                                {tokoh}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h5 className="font-bold text-slate-800 mb-1.5 flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                            Bentuk Penerapan Konkret:
                          </h5>
                          <ul className="space-y-1 list-disc list-inside">
                            {jalur.bentukPenerapan.map((bentuk, idx) => (
                              <li key={idx} className="leading-relaxed">{bentuk}</li>
                            ))}
                          </ul>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                          <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-200/70 space-y-1">
                            <span className="font-bold text-amber-900 block text-[11px]">Keunggulan Strategi:</span>
                            <p className="text-amber-950 text-[11px] leading-relaxed">{jalur.keunggulanStrategi}</p>
                          </div>

                          <div className="p-3 rounded-xl bg-teal-50/70 border border-teal-200/70 space-y-1">
                            <span className="font-bold text-teal-900 block text-[11px]">Warisan Kebudayaan:</span>
                            <p className="text-teal-950 text-[11px] leading-relaxed">{jalur.peninggalanBudaya}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Kerajaan Islam Perintis */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-4">
            <h3 className="font-bold text-slate-900 text-lg flex items-center gap-2">
              <Crown className="w-5 h-5 text-amber-600" />
              Kerajaan-Kerajaan Islam Perintis di Nusantara
            </h3>
            <p className="text-xs text-slate-500">
              Peran sentral kesultanan Islam dalam melembagakan hukum syariat, mendirikan pesantren, dan menjaga kedaulatan maritim:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
              {KERAJAAN_ISLAM_PERINTIS_DATA.map(kerajaan => (
                <div key={kerajaan.id} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                      {kerajaan.abad}
                    </span>
                    <MapPin className="w-4 h-4 text-slate-400" />
                  </div>

                  <div>
                    <h4 className="font-bold text-base text-slate-900">{kerajaan.namaKerajaan}</h4>
                    <span className="text-xs text-slate-500 block">{kerajaan.lokasi}</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-white border border-slate-200 space-y-0.5">
                    <span className="text-[10px] text-slate-500 uppercase font-bold block">Pendiri / Tokoh Sentral:</span>
                    <span className="text-xs font-bold text-slate-800">{kerajaan.pendiriTokoh}</span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {kerajaan.perananDakwah}
                  </p>

                  <div className="space-y-1 pt-1 border-t border-slate-200">
                    <span className="text-[10px] font-bold text-slate-700 uppercase">Artefak & Peninggalan:</span>
                    <ul className="text-[11px] text-slate-600 space-y-1 list-disc list-inside">
                      {kerajaan.buktiPeninggalan.map((peninggalan, i) => (
                        <li key={i}>{peninggalan}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* SUB-TAB 4: DALIL NAQLI & HADITS METODE DAKWAH */}
      {/* ========================================================================= */}
      {activeSubTab === 'dalil-hadits' && (
        <div className="space-y-6">
          {/* Dalil Al-Qur'an */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="font-bold text-slate-900 text-lg">Dalil Naqli Al-Qur'an: Metode Dakwah Santun & Hikmah</h3>
                <p className="text-xs text-slate-500">Ayat-ayat suci yang menjadi pedoman fundamental penyebaran Islam damai di kepulauan Indonesia</p>
              </div>
              <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 font-bold self-start">
                Audio Tilawah Syaikh Alafasy
              </span>
            </div>

            <div className="space-y-6">
              {DALIL_SEJARAH_MASUK_ISLAM.map(dalil => (
                <div
                  key={dalil.id}
                  className="p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-emerald-50/20 border border-slate-200/90 shadow-xs space-y-4"
                >
                  {/* Top Bar Ayat */}
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-200">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-lg bg-emerald-700 text-white font-black text-xs">
                        Q.S. {dalil.surah}: {dalil.ayatNomor}
                      </span>
                      <span className="text-xs font-bold text-slate-700">
                        Surah {dalil.namaSurah} ({dalil.artiSurah})
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleAudioPlay(dalil.id, dalil.audioUrl)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                          playingAudioId === dalil.id
                            ? 'bg-amber-400 text-amber-950 font-black scale-105'
                            : 'bg-emerald-100 hover:bg-emerald-200 text-emerald-900'
                        }`}
                      >
                        {playingAudioId === dalil.id ? (
                          <>
                            <Pause className="w-3.5 h-3.5" />
                            <span>Jeda Audio</span>
                          </>
                        ) : (
                          <>
                            <Play className="w-3.5 h-3.5" />
                            <span>Dengarkan Murottal</span>
                          </>
                        )}
                      </button>

                      <button
                        onClick={() => copyText(`${dalil.teksArab}\n\nArtinya: "${dalil.terjemahan}" (Q.S. ${dalil.surah}: ${dalil.ayatNomor})`, `Ayat Q.S. ${dalil.surah}: ${dalil.ayatNomor}`)}
                        className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-all cursor-pointer"
                        title="Salin Ayat & Terjemah"
                      >
                        <Copy className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Teks Arab */}
                  <div className="p-4 rounded-xl bg-white border border-slate-200/80 text-right">
                    <p className="text-xl sm:text-2xl font-serif text-slate-900 leading-loose tracking-wide">
                      {dalil.teksArab}
                    </p>
                  </div>

                  {/* Transliterasi & Terjemahan */}
                  <div className="space-y-2">
                    <p className="text-xs text-emerald-800 italic font-medium">
                      "{dalil.transliterasi}"
                    </p>
                    <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-800 leading-relaxed">
                      <strong>Artinya:</strong> "{dalil.terjemahan}"
                    </div>
                  </div>

                  {/* Kandungan Pokok */}
                  <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200 space-y-1.5">
                    <h5 className="font-bold text-xs text-emerald-900 flex items-center gap-1.5">
                      <Lightbulb className="w-3.5 h-3.5 text-emerald-700" />
                      Kandungan Makna Terhadap Masuknya Islam di Indonesia:
                    </h5>
                    <ul className="space-y-1 text-xs text-emerald-950 list-disc list-inside">
                      {dalil.kandunganPokok.map((kandungan, i) => (
                        <li key={i} className="leading-relaxed">{kandungan}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hadits-Hadits Shahih */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-4">
            <h3 className="font-bold text-slate-900 text-lg flex items-center gap-2">
              <Scroll className="w-5 h-5 text-emerald-700" />
              Hadits-Hadits Shahih: Prinsip Toleransi & Kejujuran Niaga
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {HADITS_SEJARAH_MASUK_ISLAM.map(hadits => (
                <div key={hadits.id} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black px-2 py-0.5 rounded bg-amber-100 text-amber-900">
                      {hadits.perawi}
                    </span>
                    <span className="text-[10px] font-semibold text-slate-500">{hadits.nomorHadits}</span>
                  </div>

                  <h4 className="font-bold text-xs text-slate-900">{hadits.tema}</h4>

                  <div className="p-3 rounded-xl bg-white border border-slate-200 text-right">
                    <p className="text-sm font-serif text-slate-800 leading-relaxed">{hadits.teksArab}</p>
                  </div>

                  <p className="text-xs text-slate-700 italic leading-relaxed">
                    "{hadits.terjemahan}"
                  </p>

                  <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-100 text-[11px] text-emerald-950">
                    <strong>Pelajaran Kunci:</strong> {hadits.pelajaranKunci}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* SUB-TAB 5: HIKMAH & STUDI KASUS REFLEKTIF */}
      {/* ========================================================================= */}
      {activeSubTab === 'hikmah-refleksi' && (
        <div className="space-y-6">
          {/* 5 Dimensi Hikmah */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="font-bold text-slate-900 text-lg">5 Hikmah Luhur Mempelajari Sejarah Masuknya Islam</h3>
                <p className="text-xs text-slate-500">Nilai-nilai spiritual, kultural, dan kebangsaan yang dipetik dari perjuangan para perintis</p>
              </div>
              <button
                onClick={() => onAskAI('Jelaskan 5 hikmah agung mempelajari sejarah masuknya Islam ke Indonesia bagi generasi muda di era media sosial!')}
                className="px-3 py-1.5 rounded-xl bg-emerald-50 text-emerald-800 hover:bg-emerald-100 text-xs font-bold flex items-center gap-1.5 self-start cursor-pointer border border-emerald-200"
              >
                <Bot className="w-3.5 h-3.5" />
                <span>Eksplorasi Hikmah via AI</span>
              </button>
            </div>

            <div className="grid grid-cols-1 gap-4 pt-2">
              {HIKMAH_SEJARAH_MASUK_ISLAM.map(hikmah => (
                <div
                  key={hikmah.id}
                  className="p-5 rounded-2xl bg-gradient-to-r from-slate-50 via-white to-emerald-50/20 border border-slate-200 space-y-3"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h4 className="font-bold text-sm sm:text-base text-slate-900">{hikmah.judul}</h4>
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold text-[11px]">
                      {hikmah.dimensi}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {hikmah.penjelasan}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                    <div className="p-2.5 rounded-xl bg-white border border-slate-200">
                      <span className="text-[10px] font-bold text-slate-500 uppercase block">Nilai Karakter Inti:</span>
                      <span className="text-xs font-bold text-emerald-800">{hikmah.nilaiKarakter}</span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-emerald-50/80 border border-emerald-200">
                      <span className="text-[10px] font-bold text-emerald-800 uppercase block">Aksi Konkret Siswa di Sekolah:</span>
                      <span className="text-xs font-medium text-emerald-950">{hikmah.implementasiPelajar}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 3 Studi Kasus Kontemporer */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-4">
            <div className="flex items-center gap-2">
              <Brain className="w-5 h-5 text-amber-600" />
              <div>
                <h3 className="font-bold text-slate-900 text-lg">3 Studi Kasus Reflektif Era Kontemporer</h3>
                <p className="text-xs text-slate-500">Menerapkan kearifan dakwah para pendahulu dalam merespons dinamika sosial masa kini</p>
              </div>
            </div>

            <div className="space-y-4 pt-1">
              {STUDI_KASUS_SEJARAH_DATA.map(kasus => {
                const isExpanded = expandedKasusId === kasus.id;
                return (
                  <div
                    key={kasus.id}
                    className={`rounded-2xl border transition-all overflow-hidden ${
                      isExpanded
                        ? 'bg-gradient-to-b from-white to-amber-50/20 border-amber-300 shadow-sm'
                        : 'bg-white border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div
                      onClick={() => setExpandedKasusId(isExpanded ? null : kasus.id)}
                      className="p-5 cursor-pointer flex items-center justify-between gap-3 select-none"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-900 flex items-center justify-center font-bold text-xs shrink-0">
                          {kasus.id.replace('kasus-', '#')}
                        </div>
                        <h4 className="font-bold text-slate-900 text-sm sm:text-base leading-tight">
                          {kasus.judul}
                        </h4>
                      </div>
                      <div className="text-slate-400">
                        {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                      </div>
                    </div>

                    {isExpanded && (
                      <div className="px-5 pb-5 pt-1 space-y-4 text-xs text-slate-600 border-t border-slate-100">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                            <span className="font-bold text-slate-800 block text-xs">Fenomena Realita:</span>
                            <p className="leading-relaxed">{kasus.fenomenaRealita}</p>
                          </div>

                          <div className="p-3.5 rounded-xl bg-rose-50/60 border border-rose-200 space-y-1">
                            <span className="font-bold text-rose-900 block text-xs">Dilema Konteks:</span>
                            <p className="leading-relaxed text-rose-950">{kasus.dilemaKonteks}</p>
                          </div>
                        </div>

                        <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200 space-y-1">
                          <span className="font-bold text-emerald-900 block text-xs">Analisis Historiografi Islam Nusantara:</span>
                          <p className="leading-relaxed text-emerald-950">{kasus.analisisSejarah}</p>
                        </div>

                        <div className="p-3.5 rounded-xl bg-amber-50/80 border border-amber-200 space-y-2">
                          <span className="font-bold text-amber-950 block text-xs">Solusi Sikap & Karakter Pelajar:</span>
                          <ul className="space-y-1 list-disc list-inside text-amber-950">
                            {kasus.solusiKarakter.map((solusi, idx) => (
                              <li key={idx} className="leading-relaxed font-medium">{solusi}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* SUB-TAB 6: MUHASABAH KARAKTER & KUIS PENALARAN HOTS */}
      {/* ========================================================================= */}
      {activeSubTab === 'evaluasi' && (
        <div className="space-y-6">
          {/* Lembar Muhasabah Karakter 8 Indikator */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h3 className="font-bold text-slate-900 text-lg flex items-center gap-2">
                  <BookmarkCheck className="w-5 h-5 text-emerald-600" />
                  Lembar Muhasabah Karakter Santun & Teladan Sejarah
                </h3>
                <p className="text-xs text-slate-500">
                  Refleksikan sikap dan kebiasaanmu berdasarkan 8 indikator keteladanan para penyebar Islam di Nusantara
                </p>
              </div>
              <div className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 self-start">
                Tercentang: {Object.values(checkedMuhasabah).filter(Boolean).length} / {MUHASABAH_SEJARAH_DATA.length}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
              {MUHASABAH_SEJARAH_DATA.map(item => {
                const isChecked = !!checkedMuhasabah[item.id];
                return (
                  <div
                    key={item.id}
                    onClick={() => toggleMuhasabah(item.id)}
                    className={`p-4 rounded-xl border transition-all cursor-pointer select-none flex items-start gap-3 ${
                      isChecked
                        ? 'bg-emerald-50/80 border-emerald-400 shadow-xs'
                        : 'bg-slate-50/60 border-slate-200 hover:bg-slate-100/60'
                    }`}
                  >
                    <div className="mt-0.5 shrink-0 text-emerald-600">
                      {isChecked ? <CheckSquare className="w-5 h-5 text-emerald-700" /> : <Square className="w-5 h-5 text-slate-400" />}
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-xs text-slate-900">{item.indikator}</span>
                        <span className="text-[10px] px-2 py-0.2 rounded bg-slate-200/70 text-slate-700 font-medium">
                          {item.kategori}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed font-normal">
                        {item.targetPerilaku}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Kuis Evaluasi HOTS 5 Butir Soal */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="font-bold text-slate-900 text-lg flex items-center gap-2">
                  <Award className="w-5 h-5 text-amber-500" />
                  Kuis Evaluasi Penalaran HOTS (5 Butir Soal)
                </h3>
                <p className="text-xs text-slate-500">
                  Uji pemahaman komparasi teori, saluran transmisi dakwah, dan hikmah sejarah masuknya Islam
                </p>
              </div>

              {submittedQuiz && (
                <div className="flex items-center gap-3">
                  <div className="px-4 py-1.5 rounded-xl bg-emerald-100 text-emerald-900 font-black text-sm">
                    Skor: {calculateScore()} / 100
                  </div>
                  <button
                    onClick={resetQuiz}
                    className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center gap-1.5 cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Ulangi Kuis</span>
                  </button>
                </div>
              )}
            </div>

            <div className="space-y-6">
              {KUIS_HOTS_SEJARAH_DATA.map((kuis, index) => {
                const selectedOption = userAnswers[kuis.id];
                const isAnswered = selectedOption !== undefined;
                const isCorrect = selectedOption === kuis.kunciJawaban;

                return (
                  <div
                    key={kuis.id}
                    className="p-5 rounded-2xl bg-slate-50/60 border border-slate-200/80 space-y-4"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black text-emerald-800 px-2.5 py-0.5 rounded-md bg-emerald-100">
                        Soal No. {index + 1}
                      </span>
                      <span className="text-[11px] font-semibold text-slate-500">
                        Tingkat Kognitif: {kuis.tingkatKognitif}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm font-semibold text-slate-900 leading-relaxed whitespace-pre-line">
                      {kuis.pertanyaan}
                    </p>

                    {/* Options */}
                    <div className="space-y-2">
                      {kuis.pilihan.map((pilihan, optIdx) => {
                        let btnStyle = 'bg-white hover:bg-slate-100 text-slate-700 border-slate-200';

                        if (selectedOption === optIdx) {
                          btnStyle = 'bg-emerald-100/70 border-emerald-500 text-emerald-900 font-bold';
                        }

                        if (submittedQuiz) {
                          if (optIdx === kuis.kunciJawaban) {
                            btnStyle = 'bg-emerald-500 text-white border-emerald-600 font-bold';
                          } else if (selectedOption === optIdx && !isCorrect) {
                            btnStyle = 'bg-rose-500 text-white border-rose-600 font-bold';
                          }
                        }

                        return (
                          <button
                            key={optIdx}
                            disabled={submittedQuiz}
                            onClick={() => handleSelectAnswer(kuis.id, optIdx)}
                            className={`w-full p-3 rounded-xl text-xs text-left transition-all border cursor-pointer flex items-start gap-2.5 ${btnStyle}`}
                          >
                            <span className="font-bold shrink-0">{String.fromCharCode(65 + optIdx)}.</span>
                            <span className="leading-relaxed">{pilihan.substring(3)}</span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Pembahasan */}
                    {submittedQuiz && (
                      <div className={`p-4 rounded-xl text-xs space-y-1.5 border ${
                        isCorrect ? 'bg-emerald-50 border-emerald-200 text-emerald-950' : 'bg-rose-50 border-rose-200 text-rose-950'
                      }`}>
                        <div className="flex items-center gap-1.5 font-bold">
                          {isCorrect ? (
                            <>
                              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                              <span>Jawaban Kamu Benar!</span>
                            </>
                          ) : (
                            <>
                              <XCircle className="w-4 h-4 text-rose-600" />
                              <span>Jawaban Belum Tepat. Kunci Jawaban: {String.fromCharCode(65 + kuis.kunciJawaban)}</span>
                            </>
                          )}
                        </div>
                        <p className="leading-relaxed text-[11px] pt-1">
                          <strong>Pembahasan:</strong> {kuis.pembahasan}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Quiz Submit Button */}
            {!submittedQuiz && (
              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => {
                    if (Object.keys(userAnswers).length < KUIS_HOTS_SEJARAH_DATA.length) {
                      showToast('Mohon jawab seluruh butir soal sebelum melihat hasil', 'info');
                      return;
                    }
                    setSubmittedQuiz(true);
                    showToast('Kuis berhasil dievaluasi!', 'success');
                  }}
                  className="px-6 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-black text-xs sm:text-sm shadow-md transition-all cursor-pointer flex items-center gap-2"
                >
                  <CheckCheck className="w-4 h-4" />
                  <span>Selesai & Lihat Pembahasan</span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
