import React, { useState, useRef } from 'react';
import {
  Heart,
  BookOpen,
  Volume2,
  VolumeX,
  Copy,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Check,
  Lightbulb,
  Smartphone,
  School,
  Home,
  Award,
  Smile,
  Activity,
  Users,
  TrendingUp,
  AlertTriangle,
  Bot
} from 'lucide-react';
import {
  MATERI_KELAS_7_SEM_2_BAB_8,
  ContohPerilakuSyukurItem,
  DalilSyukurItem,
  ManfaatSyukurItem,
  HikmahSyukurItem
} from '../../data/materiKelas7Sem2Bab8Data';
import { useToast } from '../common/Toast';

interface Props {
  onAskAI: (prompt: string) => void;
}

type Bab8SubTab = 'pengertian' | 'dalil' | 'contoh-perilaku' | 'manfaat' | 'hikmah' | 'kuis';

export const BukuPaiKelas7Sem2Bab8Detail: React.FC<Props> = ({ onAskAI }) => {
  const { showToast } = useToast();
  const [activeTab, setActiveTab] = useState<Bab8SubTab>('pengertian');

  // Selected Dimensi Syukur in Tab 3
  const [selectedDimensiId, setSelectedDimensiId] = useState<string>('contoh-hati');

  // Audio Playback State
  const [playingAudioUrl, setPlayingAudioUrl] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Kuis HOTS State
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});
  const [showKuisResult, setShowKuisResult] = useState(false);

  // Refleksi Harian Checklist State
  const [refleksiChecked, setRefleksiChecked] = useState<Record<number, boolean>>({});

  // Copy helper
  const handleCopyText = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    showToast(`${label} berhasil disalin ke clipboard`, 'success');
  };

  // Audio helper
  const handlePlayAudio = (url?: string) => {
    if (!url) {
      showToast('Audio tilawah belum tersedia untuk dalil ini', 'info');
      return;
    }

    if (playingAudioUrl === url) {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setPlayingAudioUrl(null);
      return;
    }

    if (audioRef.current) {
      audioRef.current.pause();
    }

    const audio = new Audio(url);
    audioRef.current = audio;
    setPlayingAudioUrl(url);

    audio.play().catch(() => {
      showToast('Gagal memutar audio tilawah', 'error');
      setPlayingAudioUrl(null);
    });

    audio.onended = () => {
      setPlayingAudioUrl(null);
    };
  };

  // Kuis calculation
  const hitungSkorKuis = () => {
    let benar = 0;
    MATERI_KELAS_7_SEM_2_BAB_8.kuisHots.forEach((soal) => {
      if (userAnswers[soal.id] === soal.kunciJawaban) {
        benar += 1;
      }
    });
    return Math.round((benar / MATERI_KELAS_7_SEM_2_BAB_8.kuisHots.length) * 100);
  };

  const selectedDimensiData =
    MATERI_KELAS_7_SEM_2_BAB_8.contohPerilakuSyukur.find((d) => d.id === selectedDimensiId) ||
    MATERI_KELAS_7_SEM_2_BAB_8.contohPerilakuSyukur[0];

  return (
    <div className="space-y-6">
      {/* HEADER BANNER BAB 8 */}
      <div className="bg-gradient-to-br from-emerald-900 via-teal-900 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden border border-emerald-700/40">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-500/10 rounded-full blur-2xl -ml-20 -mb-20 pointer-events-none" />

        <div className="relative z-10 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-amber-400 text-amber-950 font-black text-xs tracking-wider uppercase">
              PAI & BP SMP KELAS VII • SEMESTER 2
            </span>
            <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-200 text-xs font-semibold border border-emerald-400/30 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              Elemen: Akhlak
            </span>
            <span className="px-3 py-1 rounded-full bg-teal-500/20 text-teal-200 text-xs font-semibold border border-teal-400/30">
              Bab VIII
            </span>
          </div>

          <div className="max-w-4xl space-y-2">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white leading-tight">
              Menerapkan Makna Bersyukur kepada Allah Swt.
            </h1>
            <p className="text-sm sm:text-base text-emerald-100/90 font-medium leading-relaxed">
              Menebar Kebaikan dan Mengagungkan Karunia Ilahi melalui 3 Dimensi Syukur:
              Pengertian Hakiki, Dalil Naqli (Q.S. Ibrahim: 7 & Luqman: 12), Contoh Perilaku Nyata Pelajar (Hati, Lisan, Perbuatan), Manfaat Holistik, serta Hikmah Keberkahan Hidup.
            </p>
          </div>

          {/* QUICK PROMPT BOT BUTTONS */}
          <div className="pt-2 flex flex-wrap items-center gap-2.5">
            <button
              onClick={() =>
                onAskAI(
                  'Jelaskan materi lengkap PAI Kelas 7 Semester 2 Bab 8 tentang Menerapkan Makna Bersyukur kepada Allah: pengertian, dalil naqli, contoh perilaku syukur (hati, lisan, fisik), manfaat, dan hikmahnya!'
                )
              }
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-950 font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-amber-500/20 transition-all cursor-pointer"
            >
              <Bot className="w-4 h-4" />
              <span>Tanya Masterku AI tentang Bab 8</span>
            </button>
            <button
              onClick={() =>
                onAskAI(
                  'Apa tafsir dan kandungan Q.S. Ibrahim ayat 7 tentang janji Allah menambah nikmat bagi yang bersyukur dan ancaman azab bagi yang kufur?'
                )
              }
              className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs transition-all flex items-center gap-1.5"
            >
              <span>Tafsir Q.S. Ibrahim: 7</span>
            </button>
            <button
              onClick={() =>
                onAskAI(
                  'Sebutkan contoh konkret perilaku syukur bagi siswa SMP kelas 7 di sekolah, di rumah, dan saat bermedia sosial!'
                )
              }
              className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs transition-all flex items-center gap-1.5"
            >
              <span>Contoh Perilaku Syukur Siswa</span>
            </button>
            <button
              onClick={() =>
                onAskAI(
                  'Apa perbedaan mendasar antara manfaat syukur dan hikmah bersyukur kepada Allah Swt. bagi seorang pelajar muslim?'
                )
              }
              className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs transition-all flex items-center gap-1.5"
            >
              <span>Manfaat vs Hikmah Syukur</span>
            </button>
          </div>
        </div>
      </div>

      {/* 6 SUB-TABS NAVIGATION */}
      <div className="bg-white rounded-2xl p-2 border border-slate-200/80 shadow-sm">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-1.5">
          <button
            onClick={() => setActiveTab('pengertian')}
            className={`px-3 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex flex-col items-center justify-center gap-1 cursor-pointer ${
              activeTab === 'pengertian'
                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span className="text-center line-clamp-1">1. Pengertian Syukur</span>
          </button>

          <button
            onClick={() => setActiveTab('dalil')}
            className={`px-3 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex flex-col items-center justify-center gap-1 cursor-pointer ${
              activeTab === 'dalil'
                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span className="text-center line-clamp-1">2. Dalil Naqli</span>
          </button>

          <button
            onClick={() => setActiveTab('contoh-perilaku')}
            className={`px-3 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex flex-col items-center justify-center gap-1 cursor-pointer ${
              activeTab === 'contoh-perilaku'
                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            }`}
          >
            <Smile className="w-4 h-4" />
            <span className="text-center line-clamp-1">3. Contoh Perilaku</span>
          </button>

          <button
            onClick={() => setActiveTab('manfaat')}
            className={`px-3 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex flex-col items-center justify-center gap-1 cursor-pointer ${
              activeTab === 'manfaat'
                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            }`}
          >
            <Activity className="w-4 h-4" />
            <span className="text-center line-clamp-1">4. Manfaat Syukur</span>
          </button>

          <button
            onClick={() => setActiveTab('hikmah')}
            className={`px-3 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex flex-col items-center justify-center gap-1 cursor-pointer ${
              activeTab === 'hikmah'
                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            }`}
          >
            <Heart className="w-4 h-4" />
            <span className="text-center line-clamp-1">5. Hikmah Syukur</span>
          </button>

          <button
            onClick={() => setActiveTab('kuis')}
            className={`px-3 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex flex-col items-center justify-center gap-1 cursor-pointer ${
              activeTab === 'kuis'
                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            }`}
          >
            <Award className="w-4 h-4" />
            <span className="text-center line-clamp-1">6. Kuis HOTS</span>
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SUB-TAB 1: PENGERTIAN SYUKUR */}
      {/* ========================================================================= */}
      {activeTab === 'pengertian' && (
        <div className="space-y-6">
          {/* APERSEPSI */}
          <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-2xl p-5 space-y-3">
            <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
              <Lightbulb className="w-4 h-4 text-emerald-600" />
              <span>Apersepsi & Refleksi Awal Pembelajaran</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
              "{MATERI_KELAS_7_SEM_2_BAB_8.pengantar.apersepsi}"
            </p>
            <div className="pt-2 border-t border-emerald-200/60">
              <h4 className="text-xs font-bold text-emerald-900 mb-2 uppercase tracking-wider">
                Tujuan Pembelajaran Bab VIII:
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                {MATERI_KELAS_7_SEM_2_BAB_8.pengantar.tujuanPembelajaran.map((tp, idx) => (
                  <li key={idx} className="flex items-start gap-2 bg-white/70 p-2 rounded-lg border border-emerald-100">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{tp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* DEFINISI BAHASA & ISTILAH */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-emerald-700 font-bold text-base">
                <BookOpen className="w-5 h-5 text-emerald-600" />
                <h3>Pengertian Syukur Menurut Bahasa (Etimologi)</h3>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-center">
                <span className="text-2xl font-bold font-serif text-emerald-900">شَكَرَ - يَشْكُرُ - شُكْرًا</span>
                <p className="text-xs text-slate-500 mt-1">Makna kata: <i>Menampakkan karunia, memuji kebaikan, membuka keindahan</i></p>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {MATERI_KELAS_7_SEM_2_BAB_8.pengertianSyukur.secaraBahasa}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-teal-700 font-bold text-base">
                <ShieldCheck className="w-5 h-5 text-teal-600" />
                <h3>Pengertian Syukur Menurut Istilah Syariat</h3>
              </div>
              <div className="p-3 bg-teal-50/60 rounded-xl border border-teal-100 text-xs font-semibold text-teal-900">
                Hakikat Syukur: <span className="bg-teal-600 text-white px-2 py-0.5 rounded-full font-bold">Ketaatan Totalitas</span> (Hati, Lisan, dan Perbuatan)
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {MATERI_KELAS_7_SEM_2_BAB_8.pengertianSyukur.secaraIstilah}
              </p>
            </div>
          </div>

          {/* 3 TINGKATAN SYUKUR */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  3 Tingkatan Kualitas Syukur Hamba kepada Allah Swt.
                </h3>
                <p className="text-xs text-slate-500">
                  Mengenal tangga spiritual para ahli ma'rifat dalam menyikapi nikmat dan ujian hidup.
                </p>
              </div>
              <span className="px-3 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-full">
                Derajat Syukur
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {MATERI_KELAS_7_SEM_2_BAB_8.pengertianSyukur.tingkatanSyukur.map((tingkat, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-b from-slate-50 to-white rounded-xl p-4 border border-slate-200/90 space-y-2 hover:border-emerald-300 transition-all shadow-xs"
                >
                  <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white font-black text-xs flex items-center justify-center shadow-sm">
                    {idx + 1}
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">{tingkat.sebutan}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{tingkat.deskripsi}</p>
                  <div className="pt-1 text-[11px] font-medium text-emerald-700">
                    Dalil: {tingkat.dalil}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* LAWAN KATA SYUKUR: KUFUR NIKMAT */}
          <div className="bg-gradient-to-r from-red-500/10 via-amber-500/10 to-rose-500/10 border border-red-200/80 rounded-2xl p-5 sm:p-6 space-y-4">
            <div className="flex items-center gap-2 text-red-900 font-bold text-base">
              <AlertTriangle className="w-5 h-5 text-red-600" />
              <h3>Bahaya Lawan Kata Syukur: Kufur Nikmat (كُفْرُ النِّعْمَةِ)</h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              <span className="font-bold text-slate-900">{MATERI_KELAS_7_SEM_2_BAB_8.pengertianSyukur.lawanKataSyukur.istilah}: </span>
              {MATERI_KELAS_7_SEM_2_BAB_8.pengertianSyukur.lawanKataSyukur.arti}
            </p>
            <div className="p-3 bg-white rounded-xl border border-red-200 text-xs text-red-800 space-y-1">
              <span className="font-bold block">⚠️ Bahaya dan Dampak Buruk Kufur Nikmat:</span>
              <p>{MATERI_KELAS_7_SEM_2_BAB_8.pengertianSyukur.lawanKataSyukur.bahaya}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {MATERI_KELAS_7_SEM_2_BAB_8.pengertianSyukur.lawanKataSyukur.jenisKufurNikmat.map((j, idx) => (
                <div key={idx} className="bg-white/90 p-3 rounded-xl border border-red-100 text-xs text-slate-700">
                  <span className="font-bold text-red-700 block mb-1">Bentuk {idx + 1}:</span>
                  {j}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* SUB-TAB 2: DALIL NAQLI TENTANG BERSYUKUR */}
      {/* ========================================================================= */}
      {activeTab === 'dalil' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-sm space-y-2">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              Dalil Naqli Al-Qur'an dan Hadits Shahih tentang Syukur
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Simak firman Allah Swt. dan sabda Rasulullah Saw. yang mewajibkan syukur, menjanjikan pelipatgandaan nikmat, serta mengingatkan bahwa berterima kasih kepada manusia adalah syarat syukur kepada Allah:
            </p>
          </div>

          <div className="space-y-4">
            {MATERI_KELAS_7_SEM_2_BAB_8.dalilNaqli.map((dalil, idx) => (
              <div
                key={dalil.id}
                className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-sm space-y-4 hover:border-emerald-300 transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-black text-xs flex items-center justify-center">
                      {idx + 1}
                    </span>
                    <h4 className="text-sm font-bold text-slate-900">{dalil.sumber}</h4>
                    <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 text-[11px] font-medium">
                      {dalil.kategori}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {dalil.audioUrl && (
                      <button
                        onClick={() => handlePlayAudio(dalil.audioUrl)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                          playingAudioUrl === dalil.audioUrl
                            ? 'bg-amber-500 text-slate-950 animate-pulse'
                            : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100'
                        }`}
                      >
                        {playingAudioUrl === dalil.audioUrl ? (
                          <>
                            <VolumeX className="w-3.5 h-3.5" />
                            <span>Hentikan Audio</span>
                          </>
                        ) : (
                          <>
                            <Volume2 className="w-3.5 h-3.5" />
                            <span>Dengar Tilawah</span>
                          </>
                        )}
                      </button>
                    )}

                    <button
                      onClick={() => handleCopyText(`${dalil.arabic}\n\n${dalil.terjemah}`, dalil.sumber)}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-all"
                      title="Salin Ayat & Terjemah"
                    >
                      <Copy className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Teks Arab */}
                <div className="p-4 bg-slate-50/80 rounded-xl border border-slate-100">
                  <p className="text-right font-serif text-xl sm:text-2xl leading-loose text-slate-900 font-medium">
                    {dalil.arabic}
                  </p>
                </div>

                {/* Transliterasi Latin */}
                <p className="text-xs text-emerald-800 font-medium italic">
                  {dalil.latin}
                </p>

                {/* Terjemahan Resmi */}
                <div className="p-3 bg-emerald-50/50 rounded-xl border border-emerald-100/70 text-xs sm:text-sm text-slate-800 leading-relaxed">
                  <span className="font-bold text-emerald-900 block mb-1">Artinya:</span>
                  "{dalil.terjemah}"
                </div>

                {/* Syarah / Tafsir Ringkas */}
                <div className="p-3 bg-amber-50/40 rounded-xl border border-amber-100/70 text-xs text-slate-700 leading-relaxed">
                  <span className="font-bold text-amber-900 block mb-1">📖 Penjelasan & Kandungan Tafsir:</span>
                  {dalil.tafsirRingkas}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* SUB-TAB 3: CONTOH PERILAKU BERSYUKUR */}
      {/* ========================================================================= */}
      {activeTab === 'contoh-perilaku' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-sm space-y-2">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <Smile className="w-5 h-5 text-emerald-600" />
              Penerapan 3 Dimensi Syukur dalam Kehidupan Sehari-hari Pelajar
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Syukur yang sempurna terbagi menjadi 3 pilar: <b>Syukur dengan Hati</b> (kesadaran tauhid), <b>Syukur dengan Lisan</b> (tahmid & doa), dan <b>Syukur dengan Anggota Badan</b> (aksi ketaatan dan kepedulian). Klik salah satu dimensi di bawah ini untuk melihat penerapannya:
            </p>
          </div>

          {/* 3 DIMENSI BUTTONS SELECTOR */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {MATERI_KELAS_7_SEM_2_BAB_8.contohPerilakuSyukur.map((d) => {
              const isSelected = selectedDimensiId === d.id;
              return (
                <button
                  key={d.id}
                  onClick={() => setSelectedDimensiId(d.id)}
                  className={`p-4 rounded-2xl border text-left transition-all cursor-pointer space-y-2 ${
                    isSelected
                      ? 'bg-emerald-50 border-emerald-500 shadow-md ring-2 ring-emerald-500/20'
                      : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/50 shadow-xs'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-black bg-emerald-100 text-emerald-800">
                      {d.dimensi.split(' ')[0]} {d.dimensi.split(' ')[1]}
                    </span>
                    {isSelected && <Check className="w-4 h-4 text-emerald-600" />}
                  </div>
                  <h4 className="text-sm font-black text-slate-900">{d.dimensi}</h4>
                  <p className="text-xs text-slate-600 line-clamp-2">{d.pengertianSingkat}</p>
                </button>
              );
            })}
          </div>

          {/* DETAIL VIEW SELECTED DIMENSI */}
          {selectedDimensiData && (
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-5">
              <div className="pb-4 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">
                    Eksplorasi Dimensi
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                    {selectedDimensiData.dimensi}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    {selectedDimensiData.pengertianSingkat}
                  </p>
                </div>
                <div className="p-2.5 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-900 shrink-0">
                  <span className="font-bold block">Dalil:</span>
                  {selectedDimensiData.dalilPendukung}
                </div>
              </div>

              {/* 3 AREA PENERAPAN: SEKOLAH, RUMAH, MEDSOS */}
              <div className="space-y-3">
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-400">
                  Contoh Perilaku Nyata Pelajar SMP di 3 Lingkungan:
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* DI SEKOLAH */}
                  <div className="p-4 bg-emerald-50/60 rounded-xl border border-emerald-100 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-emerald-900">
                      <School className="w-4 h-4 text-emerald-700" />
                      <span>Di Sekolah</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {selectedDimensiData.contohDiSekolah}
                    </p>
                  </div>

                  {/* DI RUMAH */}
                  <div className="p-4 bg-teal-50/60 rounded-xl border border-teal-100 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-teal-900">
                      <Home className="w-4 h-4 text-teal-700" />
                      <span>Di Rumah & Keluarga</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {selectedDimensiData.contohDiRumah}
                    </p>
                  </div>

                  {/* DI MEDIA SOSIAL */}
                  <div className="p-4 bg-sky-50/60 rounded-xl border border-sky-100 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-sky-900">
                      <Smartphone className="w-4 h-4 text-sky-700" />
                      <span>Di Media Sosial & Digital</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {selectedDimensiData.contohDiMedsos}
                    </p>
                  </div>
                </div>
              </div>

              {/* TANDA KEBERHASILAN */}
              <div className="p-3.5 bg-amber-50/60 rounded-xl border border-amber-200 text-xs text-amber-900 flex items-center gap-2.5">
                <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
                <div>
                  <span className="font-bold">Indikator Keberhasilan: </span>
                  {selectedDimensiData.tandaKeberhasilan}
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ========================================================================= */}
      {/* SUB-TAB 4: MANFAAT BERSYUKUR */}
      {/* ========================================================================= */}
      {activeTab === 'manfaat' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-sm space-y-2">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <Activity className="w-5 h-5 text-emerald-600" />
              4 Dimensi Manfaat Bersyukur Ditinjau dari Syariat & Sains
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Bersyukur bukan sekadar anjuran moral, namun terbukti membawa kebaikan komprehensif bagi kesehatan fisik, kestabilan psikologis, hubungan pertemanan, dan keberkahan hidup:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {MATERI_KELAS_7_SEM_2_BAB_8.manfaatSyukur.map((m, idx) => (
              <div
                key={m.id}
                className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-sm space-y-4 hover:border-emerald-300 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800">
                      {m.kategori}
                    </span>
                    <span className="text-xs font-bold text-slate-400">Manfaat #{idx + 1}</span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900 leading-snug">
                    {m.judul}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {m.deskripsi}
                  </p>
                </div>

                <div className="space-y-2 pt-3 border-t border-slate-100 text-xs">
                  <div className="p-2.5 bg-emerald-50/60 rounded-xl border border-emerald-100 text-emerald-950 space-y-1">
                    <span className="font-bold flex items-center gap-1.5 text-emerald-800">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Bukti Dalil / Kajian Sains:
                    </span>
                    <p className="text-slate-700 italic">{m.buktiDalilAtauSains}</p>
                  </div>

                  <div className="p-2.5 bg-sky-50/60 rounded-xl border border-sky-100 text-sky-950 space-y-1">
                    <span className="font-bold flex items-center gap-1.5 text-sky-800">
                      <Award className="w-3.5 h-3.5" />
                      Dampak Positif bagi Pelajar:
                    </span>
                    <p className="text-slate-700">{m.dampakPelajar}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* SUB-TAB 5: HIKMAH SYUKUR & REFLEKSI HARIAN */}
      {/* ========================================================================= */}
      {activeTab === 'hikmah' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-sm space-y-2">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <Heart className="w-5 h-5 text-rose-500" />
              5 Hikmah Luhur Perilaku Bersyukur kepada Allah Swt.
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Hikmah merupakan buah manis jangka panjang dari kebiasaan bersyukur. Pelajari 5 hikmah agung dan bandingkan dengan akibat jika terjerumus dalam kufur nikmat:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {MATERI_KELAS_7_SEM_2_BAB_8.hikmahSyukur.map((h) => (
              <div
                key={h.id}
                className="p-5 rounded-2xl border border-slate-200 hover:border-emerald-300 bg-gradient-to-b from-slate-50/50 to-white shadow-xs space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white font-black text-xs flex items-center justify-center">
                      {h.nomor}
                    </div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                      {h.judul}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {h.maknaLuhur}
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-100 text-xs">
                  <div className="p-2 bg-emerald-50 rounded-lg border border-emerald-100 text-emerald-900">
                    <span className="font-bold block">Penerapan:</span>
                    {h.penerapanKonkret}
                  </div>
                  <div className="p-2 bg-rose-50 rounded-lg border border-rose-100 text-rose-900">
                    <span className="font-bold block">Jika Kufur:</span>
                    {h.akibatJikaKufurNikmat}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* INSTRUMEN MUHASABAH SYUKUR HARIAN SISWA */}
          <div className="bg-gradient-to-br from-emerald-900 via-slate-900 to-teal-950 rounded-2xl p-6 sm:p-8 text-white shadow-xl space-y-5 border border-emerald-700/40">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-emerald-800/60">
              <div className="space-y-1">
                <span className="px-3 py-0.5 rounded-full bg-amber-400 text-amber-950 font-black text-xs">
                  JURNAL MUHASABAH SYUKUR SISWA
                </span>
                <h3 className="text-lg sm:text-xl font-black text-white">
                  Lembar Refleksi 5 Nikmat Utama Harian
                </h3>
              </div>
              <p className="text-xs text-emerald-200 max-w-sm">
                Latih hatimu setiap hari untuk menginsafi karunia Allah melalui 5 butir muhasabah nikmat berikut.
              </p>
            </div>

            <div className="space-y-3">
              {MATERI_KELAS_7_SEM_2_BAB_8.instrumenSyukurHarian.map((item) => {
                const isChecked = !!refleksiChecked[item.no];
                return (
                  <div
                    key={item.no}
                    onClick={() =>
                      setRefleksiChecked((prev) => ({
                        ...prev,
                        [item.no]: !prev[item.no]
                      }))
                    }
                    className={`p-4 rounded-xl border transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                      isChecked
                        ? 'bg-emerald-950/60 border-emerald-500/70 ring-1 ring-emerald-400'
                        : 'bg-white/10 border-white/15 hover:bg-white/15'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`w-6 h-6 rounded-md flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                          isChecked ? 'bg-emerald-400 text-slate-950' : 'bg-white/20 text-white'
                        }`}
                      >
                        {isChecked ? <Check className="w-4 h-4 stroke-[3]" /> : item.no}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.2 rounded bg-emerald-400/20 text-emerald-300 text-[10px] font-bold">
                            {item.kategori}
                          </span>
                          <p className="text-xs sm:text-sm font-semibold text-white">
                            {item.nikmat}
                          </p>
                        </div>
                        <p className="text-xs text-emerald-100/80 mt-1 italic">
                          "{item.pertanyaanMuhasabah}"
                        </p>
                        <p className="text-xs text-amber-300 mt-0.5">
                          <span className="font-semibold">Aksi Nyata: </span>
                          {item.aksiNyataSyukur}
                        </p>
                      </div>
                    </div>

                    <span className="text-[11px] font-bold text-emerald-300 whitespace-nowrap self-end sm:self-center">
                      {isChecked ? 'Sudah Diamalkan ✓' : 'Klik untuk Tandai'}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* SUB-TAB 6: KUIS HOTS ASESMEN MANDIRI */}
      {/* ========================================================================= */}
      {activeTab === 'kuis' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-sm space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                  <Award className="w-5 h-5 text-emerald-600" />
                  Kuis Penilaian HOTS Bab VIII (Menerapkan Makna Bersyukur)
                </h3>
                <p className="text-xs text-slate-500">
                  Uji kemampuan analisis dan penalaran kontekstualmu melalui 5 butir soal studi kasus kehidupan pelajar.
                </p>
              </div>

              {showKuisResult && (
                <button
                  onClick={() => {
                    setUserAnswers({});
                    setShowKuisResult(false);
                    showToast('Kuis direset, silakan coba lagi!', 'info');
                  }}
                  className="px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Ulangi Kuis</span>
                </button>
              )}
            </div>
          </div>

          {/* KUIS RESULT BANNER */}
          {showKuisResult && (
            <div className="bg-gradient-to-r from-emerald-600 to-teal-700 rounded-2xl p-6 text-white shadow-lg space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-emerald-200 uppercase tracking-wider">
                    Hasil Evaluasi Belajar:
                  </span>
                  <h4 className="text-2xl sm:text-3xl font-black text-white">
                    Skor Nilai: {hitungSkorKuis()} / 100
                  </h4>
                </div>
                <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center text-2xl font-black">
                  {hitungSkorKuis() >= 80 ? '🌟' : hitungSkorKuis() >= 60 ? '👍' : '📖'}
                </div>
              </div>
              <p className="text-xs sm:text-sm text-emerald-100">
                {hitungSkorKuis() >= 80
                  ? 'Mumtaz! Kamu sangat memahami makna syukur dan siap menerapkannya dengan hati, lisan, dan perbuatan.'
                  : 'Bagus! Pelajari kembali pembahasan di bawah ini untuk menyempurnakan pemahamanmu tentang hakikat syukur.'}
              </p>
            </div>
          )}

          {/* QUESTIONS LIST */}
          <div className="space-y-5">
            {MATERI_KELAS_7_SEM_2_BAB_8.kuisHots.map((soal, idx) => {
              const selectedChoice = userAnswers[soal.id];
              const isAnswered = selectedChoice !== undefined;
              const isCorrect = selectedChoice === soal.kunciJawaban;

              return (
                <div
                  key={soal.id}
                  className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-sm space-y-4"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-xl bg-emerald-100 text-emerald-900 font-black text-xs flex items-center justify-center">
                      {idx + 1}
                    </span>
                    <span className="text-xs font-bold text-slate-400">Soal HOTS Studi Kasus</span>
                  </div>

                  {/* KASUS */}
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80 text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                    "{soal.kasus}"
                  </div>

                  {/* PERTANYAAN */}
                  <p className="text-xs sm:text-sm font-bold text-slate-900 leading-relaxed">
                    {soal.pertanyaan}
                  </p>

                  {/* PILIHAN JAWABAN */}
                  <div className="space-y-2">
                    {soal.pilihan.map((pil, pIdx) => {
                      const isOptionSelected = selectedChoice === pIdx;
                      let optionStyle = 'border-slate-200 hover:border-emerald-300 hover:bg-emerald-50/30';

                      if (showKuisResult) {
                        if (pIdx === soal.kunciJawaban) {
                          optionStyle = 'border-emerald-500 bg-emerald-50 text-emerald-950 font-bold';
                        } else if (isOptionSelected && !isCorrect) {
                          optionStyle = 'border-rose-500 bg-rose-50 text-rose-950 font-medium';
                        }
                      } else if (isOptionSelected) {
                        optionStyle = 'border-emerald-500 bg-emerald-50 text-emerald-950 font-bold';
                      }

                      return (
                        <button
                          key={pIdx}
                          disabled={showKuisResult}
                          onClick={() =>
                            setUserAnswers((prev) => ({
                              ...prev,
                              [soal.id]: pIdx
                            }))
                          }
                          className={`w-full p-3.5 rounded-xl border text-left text-xs sm:text-sm transition-all flex items-start gap-3 cursor-pointer disabled:cursor-default ${optionStyle}`}
                        >
                          <span className="w-5 h-5 rounded-full border flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                            {String.fromCharCode(65 + pIdx)}
                          </span>
                          <span className="leading-snug">{pil}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* PEMBAHASAN JIKA SUDAH DIKIRIM */}
                  {showKuisResult && (
                    <div
                      className={`p-4 rounded-xl border text-xs leading-relaxed space-y-1.5 ${
                        isCorrect
                          ? 'bg-emerald-50/70 border-emerald-200 text-emerald-950'
                          : 'bg-rose-50/70 border-rose-200 text-rose-950'
                      }`}
                    >
                      <div className="flex items-center gap-1.5 font-bold">
                        {isCorrect ? (
                          <>
                            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                            <span>Jawaban Benar! (Pilihan {String.fromCharCode(65 + soal.kunciJawaban)})</span>
                          </>
                        ) : (
                          <>
                            <XCircle className="w-4 h-4 text-rose-600" />
                            <span>Jawaban Kurang Tepat. Kunci Jawaban: {String.fromCharCode(65 + soal.kunciJawaban)}</span>
                          </>
                        )}
                      </div>
                      <p className="text-slate-700">
                        <span className="font-semibold">Pembahasan: </span>
                        {soal.pembahasan}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* SUBMIT BUTTON */}
          {!showKuisResult && (
            <div className="pt-2 text-center">
              <button
                onClick={() => {
                  if (Object.keys(userAnswers).length < MATERI_KELAS_7_SEM_2_BAB_8.kuisHots.length) {
                    showToast('Harap jawab semua soal sebelum melihat hasil!', 'error');
                    return;
                  }
                  setShowKuisResult(true);
                  showToast('Hasil kuis berhasil dihitung!', 'success');
                }}
                className="px-8 py-3 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-sm shadow-lg shadow-emerald-600/30 transition-all cursor-pointer"
              >
                Kirim Jawaban & Lihat Skor Kuis
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
