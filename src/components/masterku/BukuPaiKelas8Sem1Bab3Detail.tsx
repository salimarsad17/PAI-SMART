import React, { useState, useRef } from 'react';
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
  GraduationCap
} from 'lucide-react';
import {
  MATERI_KELAS_8_SEM_1_BAB_3,
  PerilakuCintaRasulItem,
  DalilCintaRasulItem,
  ManfaatCintaRasulItem,
  SifatRasulItem
} from '../../data/materiKelas8Sem1Bab3Data';
import { useToast } from '../common/Toast';

interface BukuPaiKelas8Sem1Bab3DetailProps {
  onAskAI: (prompt: string) => void;
}

type Bab3Tab =
  | 'pengertian'
  | 'dalil-naqli'
  | 'contoh-perilaku'
  | 'manfaat-cinta'
  | 'refleksi-muhasabah'
  | 'kuis-hots';

export const BukuPaiKelas8Sem1Bab3Detail: React.FC<BukuPaiKelas8Sem1Bab3DetailProps> = ({ onAskAI }) => {
  const { showToast } = useToast();
  const materi = MATERI_KELAS_8_SEM_1_BAB_3;

  // Active Tab
  const [activeTab, setActiveTab] = useState<Bab3Tab>('pengertian');

  // Audio Playback state
  const [playingAudioId, setPlayingAudioId] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Shalawat Counter State (Interactive Tool)
  const [shalawatCount, setShalawatCount] = useState<number>(0);
  const [shalawatTarget, setShalawatTarget] = useState<number>(33);

  // Kuis HOTS state
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});
  const [showKuisResult, setShowKuisResult] = useState<boolean>(false);

  // Checklist Refleksi state
  const [checklistRefleksi, setChecklistRefleksi] = useState<Record<number, boolean>>({});

  // Expanded Study Cases
  const [expandedKasus, setExpandedKasus] = useState<Record<string, boolean>>({
    'kasus-1': true,
    'kasus-2': false,
    'kasus-3': false
  });

  // Selected Sifat Rasul Tab
  const [selectedSifatIndex, setSelectedSifatIndex] = useState<number>(0);

  // Play audio handler
  const handlePlayAudio = (id: string, audioUrl?: string) => {
    if (!audioUrl) {
      showToast('Audio tilawah belum tersedia untuk dalil ini', 'info');
      return;
    }

    if (playingAudioId === id) {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
      setPlayingAudioId(null);
      return;
    }

    if (audioRef.current) {
      audioRef.current.pause();
    }

    const audio = new Audio(audioUrl);
    audioRef.current = audio;
    setPlayingAudioId(id);

    audio.play().catch(err => {
      console.error('Audio play error:', err);
      showToast('Gagal memutar audio tilawah', 'error');
      setPlayingAudioId(null);
    });

    audio.onended = () => {
      setPlayingAudioId(null);
    };
  };

  // Copy text helper
  const handleCopyText = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    showToast(`${label} berhasil disalin!`, 'success');
  };

  // Hitung Skor Kuis
  const hitungSkorKuis = () => {
    let benar = 0;
    materi.kuisHots.forEach(q => {
      if (userAnswers[q.id] === q.kunciJawaban) {
        benar += 1;
      }
    });
    return Math.round((benar / materi.kuisHots.length) * 100);
  };

  // Toggle study case
  const toggleKasus = (id: string) => {
    setExpandedKasus(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // Toggle checklist refleksi
  const toggleRefleksi = (id: number) => {
    setChecklistRefleksi(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // Increment shalawat counter
  const incrementShalawat = () => {
    setShalawatCount(prev => prev + 1);
    if ((shalawatCount + 1) % 33 === 0) {
      showToast(`Alhamdulillah! Kamu telah menyelesaikan ${shalawatCount + 1} shalawat. Semoga meraih syafaat nabi!`, 'success');
    }
  };

  // Reset shalawat counter
  const resetShalawat = () => {
    setShalawatCount(0);
    showToast('Penghitung shalawat direset ke 0', 'info');
  };

  return (
    <div className="space-y-6">
      {/* ================= HEADER MODUL BAB 3 ================= */}
      <div className="bg-gradient-to-r from-rose-800 via-pink-700 to-amber-700 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden border border-rose-400/30">
        <div className="absolute -right-16 -top-16 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -left-12 -bottom-12 w-48 h-48 bg-rose-400/20 rounded-full blur-xl pointer-events-none" />

        <div className="relative z-10 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold text-rose-100 flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-rose-200" />
              {materi.fase} • {materi.semester}
            </span>
            <span className="px-3 py-1 rounded-full bg-amber-400/25 backdrop-blur-md text-xs font-bold text-amber-200 flex items-center gap-1.5 border border-amber-300/40">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              Elemen: {materi.elemenCp}
            </span>
            <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-200 text-xs font-bold flex items-center gap-1">
              <Heart className="w-3.5 h-3.5 text-emerald-300 fill-emerald-300" />
              Mahabbatur Rasul Saw.
            </span>
          </div>

          <div>
            <div className="text-sm font-semibold tracking-wider text-rose-200 uppercase">
              Bab {materi.babNumber} • Silabus PAI & Budi Pekerti
            </div>
            <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-white mt-1">
              {materi.judulBab}
            </h1>
            <p className="text-base sm:text-lg text-rose-100/90 font-medium mt-1">
              {materi.subJudul}
            </p>
          </div>

          <p className="text-sm text-rose-100/90 leading-relaxed bg-black/15 p-4 rounded-2xl border border-white/10">
            {materi.pengantar.apersepsi}
          </p>

          {/* Quick AI Action Bar */}
          <div className="pt-2 flex flex-wrap gap-2 items-center">
            <span className="text-xs text-rose-200 font-bold flex items-center gap-1 mr-1">
              <Bot className="w-3.5 h-3.5" /> Tanya Cepat Masterku AI:
            </span>
            <button
              onClick={() => onAskAI('Jelaskan pengertian cinta kepada Rasulullah Saw. dan apa bedanya dengan cinta kepada manusia biasa?')}
              className="px-3 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 text-xs font-semibold text-white transition-all cursor-pointer backdrop-blur-sm"
            >
              ❤️ Apa makna cinta sejati ke Rasul?
            </button>
            <button
              onClick={() => onAskAI('Jelaskan tafsir Q.S. Ali Imran ayat 31 dan hubungannya dengan ittiba sunnah!')}
              className="px-3 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 text-xs font-semibold text-white transition-all cursor-pointer backdrop-blur-sm"
            >
              📖 Tafsir Q.S. Ali \'Imran: 31
            </button>
            <button
              onClick={() => onAskAI('Sebutkan 6 contoh perilaku nyata cinta Rasulullah Saw. bagi pelajar SMP dalam pergaulan sekolah!')}
              className="px-3 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 text-xs font-semibold text-white transition-all cursor-pointer backdrop-blur-sm"
            >
              🌟 Contoh Aksi Pelajar
            </button>
          </div>
        </div>
      </div>

      {/* ================= TAB NAVIGATION SESUAI 5 PERMINTAAN USER ================= */}
      <div className="bg-white rounded-2xl p-2 shadow-sm border border-rose-100 flex flex-wrap gap-1.5 sticky top-2 z-20 backdrop-blur-md bg-white/95">
        <button
          onClick={() => setActiveTab('pengertian')}
          className={`flex-1 min-w-[130px] px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-2 ${
            activeTab === 'pengertian'
              ? 'bg-rose-600 text-white shadow-md shadow-rose-600/30 font-extrabold'
              : 'text-gray-600 hover:bg-rose-50 hover:text-rose-700'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>1. Pengertian Cinta Rasul</span>
        </button>

        <button
          onClick={() => setActiveTab('dalil-naqli')}
          className={`flex-1 min-w-[130px] px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-2 ${
            activeTab === 'dalil-naqli'
              ? 'bg-rose-600 text-white shadow-md shadow-rose-600/30 font-extrabold'
              : 'text-gray-600 hover:bg-rose-50 hover:text-rose-700'
          }`}
        >
          <Scroll className="w-4 h-4" />
          <span>2. Dalil Naqli (Al-Qur\'an & Hadis)</span>
        </button>

        <button
          onClick={() => setActiveTab('contoh-perilaku')}
          className={`flex-1 min-w-[130px] px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-2 ${
            activeTab === 'contoh-perilaku'
              ? 'bg-rose-600 text-white shadow-md shadow-rose-600/30 font-extrabold'
              : 'text-gray-600 hover:bg-rose-50 hover:text-rose-700'
          }`}
        >
          <HeartHandshake className="w-4 h-4" />
          <span>3. Contoh Perilaku Nyata</span>
        </button>

        <button
          onClick={() => setActiveTab('manfaat-cinta')}
          className={`flex-1 min-w-[130px] px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-2 ${
            activeTab === 'manfaat-cinta'
              ? 'bg-rose-600 text-white shadow-md shadow-rose-600/30 font-extrabold'
              : 'text-gray-600 hover:bg-rose-50 hover:text-rose-700'
          }`}
        >
          <Award className="w-4 h-4" />
          <span>4. Manfaat & Hikmah</span>
        </button>

        <button
          onClick={() => setActiveTab('refleksi-muhasabah')}
          className={`flex-1 min-w-[130px] px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-2 ${
            activeTab === 'refleksi-muhasabah'
              ? 'bg-rose-600 text-white shadow-md shadow-rose-600/30 font-extrabold'
              : 'text-gray-600 hover:bg-rose-50 hover:text-rose-700'
          }`}
        >
          <ListChecks className="w-4 h-4" />
          <span>5. Merefleksikan Perilaku</span>
        </button>

        <button
          onClick={() => setActiveTab('kuis-hots')}
          className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-2 ${
            activeTab === 'kuis-hots'
              ? 'bg-amber-600 text-white shadow-md shadow-amber-600/30 font-extrabold'
              : 'bg-amber-50 text-amber-800 hover:bg-amber-100'
          }`}
        >
          <Flame className="w-4 h-4 text-amber-500" />
          <span>Kuis HOTS (5 Soal)</span>
        </button>
      </div>

      {/* ================= TAB 1: PENGERTIAN CINTA KEPADA RASUL ================= */}
      {activeTab === 'pengertian' && (
        <div className="space-y-6">
          {/* Card Definisi */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-rose-100 shadow-sm space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-rose-100 text-rose-700 flex items-center justify-center font-black">
                1
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-black text-gray-900">
                  Pengertian Cinta kepada Rasulullah Saw.
                </h2>
                <p className="text-xs sm:text-sm text-gray-500">
                  Hakikat, Makna Bahasa & Syariat, serta Kedudukannya dalam Akidah Islam
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Bahasa */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-rose-50/80 to-pink-50/50 border border-rose-100 space-y-2">
                <span className="px-2.5 py-0.5 rounded-md bg-rose-200/80 text-rose-800 text-[11px] font-black uppercase tracking-wider">
                  Secara Bahasa (Etimologi)
                </span>
                <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                  <span>Al-Mahabbah (المَحَبَّةُ)</span>
                </h3>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  {materi.pengertianCintaRasul.pengertianBahasa}
                </p>
              </div>

              {/* Istilah */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-amber-50/80 to-orange-50/50 border border-amber-100 space-y-2">
                <span className="px-2.5 py-0.5 rounded-md bg-amber-200/80 text-amber-800 text-[11px] font-black uppercase tracking-wider">
                  Secara Istilah (Terminologi Syariat)
                </span>
                <h3 className="text-lg font-bold text-gray-900">
                  Ketaatan Batin & Ittiba\' Lahiriah
                </h3>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  {materi.pengertianCintaRasul.pengertianIstilah}
                </p>
              </div>
            </div>

            {/* Kedudukan dalam Akidah */}
            <div className="p-5 rounded-2xl bg-rose-50/60 border border-rose-200 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="p-3 bg-rose-600 text-white rounded-2xl shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-black text-rose-900 uppercase tracking-wide">
                  Kedudukan Mutlak dalam Rukun Iman & Syahadatain
                </h4>
                <p className="text-xs sm:text-sm text-rose-950/90 leading-relaxed">
                  {materi.pengertianCintaRasul.kedudukanDalamAkidah}
                </p>
              </div>
            </div>

            {/* 3 Tingkatan Mahabbah */}
            <div className="space-y-3 pt-2">
              <h3 className="text-base sm:text-lg font-bold text-gray-900 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-rose-600" />
                Tingkatan dan Batasan Mahabbah kepada Rasulullah Saw.
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {materi.pengertianCintaRasul.tingkatanMahabbah.map((tingkat, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-gray-50 border border-gray-200 space-y-2">
                    <span className="text-xs font-black text-rose-700 block">
                      {tingkat.tingkat}
                    </span>
                    <p className="text-xs text-gray-700 leading-relaxed">
                      {tingkat.penjelasan}
                    </p>
                    <div className="pt-2 text-[11px] font-bold text-gray-500 border-t border-gray-200">
                      Hukum: <span className="text-gray-900">{tingkat.statusHukum}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 6 Hak Rasulullah Saw. */}
            <div className="space-y-3 pt-2">
              <h3 className="text-base sm:text-lg font-bold text-gray-900 flex items-center gap-2">
                <HeartHandshake className="w-5 h-5 text-rose-600" />
                6 Hak Rasulullah Saw. yang Wajib Ditunaikan Setiap Muslim
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {materi.pengertianCintaRasul.hakHakRasul.map((hak, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-white border border-rose-100 shadow-sm hover:border-rose-300 transition-all space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black text-rose-800">{hak.hak}</span>
                      <span className="text-xs font-serif text-rose-700 font-bold bg-rose-50 px-2 py-0.5 rounded">
                        {hak.namaArab}
                      </span>
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {hak.penjelasan}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Sifat Wajib & Sifat Mustahil Rasul (Visual Selector) */}
            <div className="space-y-3 pt-4 border-t border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 flex items-center gap-2">
                    <Award className="w-5 h-5 text-amber-500" />
                    4 Sifat Wajib & 4 Sifat Mustahil Rasulullah Saw.
                  </h3>
                  <p className="text-xs text-gray-500">
                    Fondasi keteladanan akhlak mulia yang wajib kita teladani sebagai pelajar
                  </p>
                </div>
              </div>

              {/* Selector Tabs */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {materi.pengertianCintaRasul.sifatWajibDanMustahil.map((sifat, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedSifatIndex(idx)}
                    className={`p-3 rounded-2xl text-left transition-all cursor-pointer border ${
                      selectedSifatIndex === idx
                        ? 'bg-rose-600 text-white border-rose-600 shadow-md'
                        : 'bg-rose-50/50 text-gray-800 border-rose-100 hover:bg-rose-100/60'
                    }`}
                  >
                    <div className="text-xs font-medium opacity-80">Sifat {idx + 1}</div>
                    <div className="text-base font-black flex items-center justify-between">
                      <span>{sifat.nama}</span>
                      <span className="font-serif text-sm">{sifat.namaArab}</span>
                    </div>
                    <div className="text-[11px] truncate mt-0.5">{sifat.arti}</div>
                  </button>
                ))}
              </div>

              {/* Sifat Detail Box */}
              {(() => {
                const cur = materi.pengertianCintaRasul.sifatWajibDanMustahil[selectedSifatIndex];
                return (
                  <div className="p-5 rounded-3xl bg-gradient-to-br from-rose-50 via-white to-amber-50 border border-rose-200 shadow-sm space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-rose-100 pb-3">
                      <div>
                        <span className="text-xs font-bold text-rose-600 uppercase tracking-wider">
                          Sifat Wajib Rasul:
                        </span>
                        <div className="text-xl font-black text-gray-900 flex items-center gap-2">
                          <span>{cur.nama} ({cur.arti})</span>
                          <span className="font-serif text-rose-700 bg-rose-100 px-2 py-0.5 rounded-lg text-base">
                            {cur.namaArab}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                          Lawan (Sifat Mustahil):
                        </span>
                        <div className="text-sm font-black text-red-600">
                          {cur.lawan} ({cur.artiLawan}) - <span className="font-serif">{cur.lawanArab}</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <span className="text-xs font-bold text-gray-500 uppercase">Makna Teologis:</span>
                        <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                          {cur.penjelasan}
                        </p>
                      </div>
                      <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-1">
                        <span className="text-xs font-bold text-emerald-800 uppercase flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          Contoh Penerapan Nyata Siswa SMP:
                        </span>
                        <p className="text-xs sm:text-sm text-emerald-950 leading-relaxed font-medium">
                          {cur.contohPenerapanSiswa}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        </div>
      )}

      {/* ================= TAB 2: DALIL NAQLI TENTANG CINTA KEPADA RASUL ================= */}
      {activeTab === 'dalil-naqli' && (
        <div className="space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-rose-100 shadow-sm space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-rose-100 text-rose-700 flex items-center justify-center font-black">
                2
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-black text-gray-900">
                  Dalil Naqli tentang Cinta kepada Rasulullah Saw.
                </h2>
                <p className="text-xs sm:text-sm text-gray-500">
                  Ayat-Ayat Al-Qur\'anul Karim dengan Audio Tilawah Qari & Hadis-Hadis Sahih
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              {materi.dalilNaqliCintaRasul.pengantar}
            </p>

            {/* List Dalil Cards */}
            <div className="space-y-6">
              {materi.dalilNaqliCintaRasul.daftarDalil.map((dalil, index) => (
                <div
                  key={dalil.id}
                  className="p-5 sm:p-6 rounded-3xl bg-gradient-to-b from-white to-rose-50/30 border border-rose-100 shadow-sm hover:shadow-md transition-all space-y-4"
                >
                  {/* Card Header */}
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-rose-100 pb-3">
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2">
                        <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-black uppercase tracking-wider ${
                          dalil.kategori === 'Al-Qur\'an'
                            ? 'bg-rose-100 text-rose-800'
                            : 'bg-emerald-100 text-emerald-800'
                        }`}>
                          {dalil.kategori}
                        </span>
                        <span className="text-xs font-bold text-gray-500">
                          {dalil.sumber}
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg font-black text-gray-900">
                        {dalil.judul}
                      </h3>
                    </div>

                    <div className="flex items-center gap-2">
                      {dalil.audioUrl && (
                        <button
                          onClick={() => handlePlayAudio(dalil.id, dalil.audioUrl)}
                          className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                            playingAudioId === dalil.id
                              ? 'bg-rose-600 text-white animate-pulse'
                              : 'bg-rose-50 text-rose-700 hover:bg-rose-100'
                          }`}
                        >
                          {playingAudioId === dalil.id ? (
                            <>
                              <VolumeX className="w-4 h-4" />
                              <span>Berhenti</span>
                            </>
                          ) : (
                            <>
                              <Volume2 className="w-4 h-4" />
                              <span>Putar Tilawah</span>
                            </>
                          )}
                        </button>
                      )}

                      <button
                        onClick={() => handleCopyText(`${dalil.teksArab}\n\n${dalil.terjemahan} (${dalil.sumber})`, dalil.judul)}
                        className="p-1.5 rounded-xl text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-all cursor-pointer"
                        title="Salin Teks"
                      >
                        <Copy className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Teks Arab Kaligrafi */}
                  <div className="p-5 rounded-2xl bg-amber-50/40 border border-amber-200/60 text-right">
                    <p className="font-serif text-xl sm:text-2xl leading-loose text-gray-900 select-text" dir="rtl">
                      {dalil.teksArab}
                    </p>
                  </div>

                  {/* Transliterasi & Terjemahan */}
                  <div className="space-y-2">
                    <p className="text-xs italic text-gray-500 leading-relaxed font-sans">
                      {dalil.transliterasi}
                    </p>
                    <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-200 text-xs sm:text-sm text-gray-800 font-medium leading-relaxed">
                      {dalil.terjemahan}
                    </div>
                  </div>

                  {/* Kandungan Makna */}
                  <div className="p-4 rounded-2xl bg-white border border-rose-100 space-y-2">
                    <span className="text-xs font-black text-rose-800 uppercase tracking-wide flex items-center gap-1.5">
                      <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                      Kandungan Makna & Pelajaran Penting:
                    </span>
                    <ul className="space-y-1.5">
                      {dalil.kandunganMakna.map((makna, mIdx) => (
                        <li key={mIdx} className="text-xs text-gray-700 flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0 mt-1.5" />
                          <span>{makna}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Ask AI Contextual Button */}
                  <div className="pt-1 flex justify-end">
                    <button
                      onClick={() => onAskAI(`Jelaskan secara mendalam tentang ${dalil.judul} (${dalil.sumber}) dan bagaimana seorang siswa dapat menerapkannya sehari-hari?`)}
                      className="text-xs font-bold text-rose-700 hover:text-rose-900 flex items-center gap-1 cursor-pointer"
                    >
                      <Bot className="w-3.5 h-3.5" />
                      Tanyakan Tafsir Ayat Ini ke AI &rarr;
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ================= TAB 3: CONTOH PERILAKU CINTA KEPADA RASUL ================= */}
      {activeTab === 'contoh-perilaku' && (
        <div className="space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-rose-100 shadow-sm space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-rose-100 text-rose-700 flex items-center justify-center font-black">
                3
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-black text-gray-900">
                  Contoh Perilaku Nyata Cinta kepada Rasulullah Saw.
                </h2>
                <p className="text-xs sm:text-sm text-gray-500">
                  6 Pilar Aksi Nyata Pelajar SMP & Kebiasaan Sunnah Harian
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              {materi.contohPerilakuCintaRasul.pengantar}
            </p>

            {/* Interactive Shalawat Counter Widget */}
            <div className="p-6 rounded-3xl bg-gradient-to-r from-rose-900 via-pink-900 to-amber-900 text-white shadow-lg space-y-4 border border-rose-400/30">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-300" />
                    <span className="text-xs font-bold uppercase tracking-wider text-rose-200">
                      Digital Shalawat Counter
                    </span>
                  </div>
                  <h3 className="text-lg font-black text-white">
                    Wirid Shalawat Harian Pelajar
                  </h3>
                  <p className="text-xs text-rose-200/80">
                    "Barangsiapa bershalawat kepadaku sekali, Allah bershalawat kepadanya sepuluh kali." (H.R. Muslim)
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="text-center px-4 py-2 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15">
                    <div className="text-2xl sm:text-3xl font-black text-amber-300 font-mono">
                      {shalawatCount}
                    </div>
                    <div className="text-[10px] text-rose-200 font-medium">
                      Target: {shalawatTarget}x
                    </div>
                  </div>

                  <button
                    onClick={incrementShalawat}
                    className="px-6 py-3 rounded-2xl bg-amber-400 hover:bg-amber-300 text-amber-950 font-black text-sm transition-all shadow-md active:scale-95 cursor-pointer flex items-center gap-2"
                  >
                    <Heart className="w-4 h-4 fill-amber-950" />
                    <span>+1 Shalawat</span>
                  </button>

                  <button
                    onClick={resetShalawat}
                    className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-rose-200 transition-all cursor-pointer"
                    title="Reset Hitungan"
                  >
                    <RefreshCw className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Lafaz Shalawat Ringkas */}
              <div className="p-3 rounded-xl bg-black/25 text-center text-rose-100 font-serif text-sm sm:text-base border border-white/10">
                اللَّهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ
              </div>
            </div>

            {/* 6 Pilar Perilaku */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {materi.contohPerilakuCintaRasul.daftarPerilaku.map((perilaku) => (
                <div
                  key={perilaku.id}
                  className="p-5 rounded-3xl bg-white border border-rose-100 shadow-sm hover:border-rose-300 hover:shadow-md transition-all space-y-3.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-800 text-[11px] font-black uppercase">
                      {perilaku.kategori}
                    </span>
                    <span className="text-xs italic text-gray-400">
                      Pilar Cinta Rasul
                    </span>
                  </div>

                  <h3 className="text-base font-black text-gray-900">
                    {perilaku.judul}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {perilaku.deskripsi}
                  </p>

                  <div className="p-2.5 rounded-xl bg-rose-50/60 border border-rose-100 text-[11px] font-bold text-rose-900">
                    Dalil: {perilaku.dalilPendukung}
                  </div>

                  <div className="space-y-1.5 pt-1">
                    <span className="text-xs font-bold text-gray-700 block">
                      Contoh Tindakan di Sekolah & Rumah:
                    </span>
                    <ul className="space-y-1">
                      {perilaku.contohKonkret.map((contoh, cIdx) => (
                        <li key={cIdx} className="text-xs text-gray-600 flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{contoh}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-3 rounded-xl bg-amber-50 border border-amber-200/70 text-xs text-amber-900 font-medium">
                    💡 <span className="font-bold">Tips Aksi:</span> {perilaku.tipsPenerapan}
                  </div>
                </div>
              ))}
            </div>

            {/* Sunnah Harian Pelajar Timeline */}
            <div className="space-y-3 pt-4 border-t border-gray-100">
              <h3 className="text-base sm:text-lg font-bold text-gray-900 flex items-center gap-2">
                <Clock className="w-5 h-5 text-rose-600" />
                Jadwal Sunnah Harian Pelajar Muslim (Pagi s.d. Malam)
              </h3>
              <div className="space-y-3">
                {materi.contohPerilakuCintaRasul.sunnahHarianPelajar.map((sunnah, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-4 rounded-2xl bg-gray-50 border border-gray-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-rose-600" />
                        <span className="text-xs font-black text-rose-900 uppercase">
                          {sunnah.waktu}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-800 font-medium">
                        {sunnah.amalanSunnah}
                      </p>
                    </div>
                    <div className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200 shrink-0">
                      {sunnah.keutamaan}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================= TAB 4: MANFAAT CINTA KEPADA RASUL ================= */}
      {activeTab === 'manfaat-cinta' && (
        <div className="space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-rose-100 shadow-sm space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-rose-100 text-rose-700 flex items-center justify-center font-black">
                4
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-black text-gray-900">
                  Manfaat & Hikmah Cinta kepada Rasulullah Saw.
                </h2>
                <p className="text-xs sm:text-sm text-gray-500">
                  Keberkahan Hidup di Alam Dunia & Kemuliaan Abadi di Alam Akhirat
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              {materi.manfaatCintaRasul.pengantar}
            </p>

            {/* Grid 6 Manfaat */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {materi.manfaatCintaRasul.daftarManfaat.map((manfaat) => (
                <div
                  key={manfaat.id}
                  className={`p-5 rounded-3xl border transition-all space-y-3 ${
                    manfaat.ranah === 'Duniawi'
                      ? 'bg-gradient-to-br from-emerald-50/60 to-teal-50/30 border-emerald-200'
                      : 'bg-gradient-to-br from-rose-50/60 to-pink-50/30 border-rose-200'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`px-2.5 py-0.5 rounded-md text-[11px] font-black uppercase tracking-wider ${
                      manfaat.ranah === 'Duniawi'
                        ? 'bg-emerald-200 text-emerald-900'
                        : 'bg-rose-200 text-rose-900'
                    }`}>
                      Ranah: {manfaat.ranah}
                    </span>
                    <span className="text-[11px] font-bold text-gray-500">
                      Hikmah Keberkahan
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-black text-gray-900">
                    {manfaat.judul}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                    {manfaat.deskripsi}
                  </p>

                  <div className="p-2.5 rounded-xl bg-white/80 border border-gray-200 text-[11px] font-bold text-gray-700">
                    Rujukan: {manfaat.dalilRujukan}
                  </div>

                  <div className="p-3 rounded-2xl bg-white shadow-xs border border-gray-100 text-xs text-gray-800 space-y-1">
                    <span className="font-bold text-rose-700 block">
                      Dampak Positif bagi Karakter Siswa:
                    </span>
                    <p className="text-xs text-gray-600">
                      {manfaat.dampakBagiPelajar}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Syafaat Uzma Highlight Card */}
            <div className="p-6 rounded-3xl bg-gradient-to-r from-amber-600 via-orange-600 to-rose-700 text-white space-y-3 shadow-md">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-amber-200 fill-amber-200" />
                <span className="text-xs font-black uppercase tracking-wider text-amber-100">
                  Kemuliaan Istimewa Hari Kiamat
                </span>
              </div>
              <h3 className="text-xl font-black text-white">
                Syafaat \'Uzma: Pertolongan Terbesar Baginda Rasulullah Saw.
              </h3>
              <p className="text-xs sm:text-sm text-amber-100/90 leading-relaxed">
                Di Padang Mahsyar ketika matahari didekatkan satu mil dan manusia tenggelam dalam keringatnya sendiri, para nabi lain berkata "Nafsī, nafsī" (selamatkan diriku sendiri). Hanya baginda Nabi Muhammad Saw. yang sujud di hadapan \'Arsy seraya menyeru: "Ummati, ummati!" (selamatkan umatku, selamatkan umatku!). Syafaat agung ini berhak diraih oleh hamba yang memperbanyak shalawat dan menjaga tauhidnya.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ================= TAB 5: MEREFLEKSIKAN PERILAKU CINTA KEPADA RASUL ================= */}
      {activeTab === 'refleksi-muhasabah' && (
        <div className="space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-rose-100 shadow-sm space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-rose-100 text-rose-700 flex items-center justify-center font-black">
                5
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-black text-gray-900">
                  Merefleksikan Perilaku Cinta kepada Rasulullah Saw.
                </h2>
                <p className="text-xs sm:text-sm text-gray-500">
                  Studi Kasus Moral Remaja, Lembar Muhasabah Diri, dan Komitmen Aksi
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              {materi.refleksiDanMuhasabah.pengantar}
            </p>

            {/* Studi Kasus Remaja SMP */}
            <div className="space-y-4">
              <h3 className="text-base sm:text-lg font-bold text-gray-900 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-rose-600" />
                Studi Kasus Dilema Moral Remaja di Sekolah
              </h3>

              {materi.refleksiDanMuhasabah.studiKasus.map((kasus) => {
                const isOpen = expandedKasus[kasus.id];
                return (
                  <div
                    key={kasus.id}
                    className="rounded-2xl border border-rose-100 bg-gray-50/70 overflow-hidden transition-all"
                  >
                    <button
                      onClick={() => toggleKasus(kasus.id)}
                      className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-3 hover:bg-rose-50/50 transition-colors cursor-pointer"
                    >
                      <div className="space-y-1">
                        <span className="text-xs font-bold text-rose-700 uppercase">
                          Dilema Praktis Siswa
                        </span>
                        <h4 className="text-sm sm:text-base font-black text-gray-900">
                          {kasus.judul}
                        </h4>
                      </div>
                      <div className="p-1.5 rounded-full bg-white border border-gray-200 text-gray-500">
                        {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </div>
                    </button>

                    {isOpen && (
                      <div className="p-4 sm:p-5 pt-0 space-y-4 bg-white border-t border-gray-100">
                        <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-200 text-xs sm:text-sm text-gray-700 leading-relaxed">
                          <span className="font-bold text-gray-900 block mb-1">Situasi Nyata:</span>
                          {kasus.situasi}
                        </div>

                        <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-xs sm:text-sm text-rose-950 font-medium">
                          ❓ <span className="font-bold">Pertanyaan Reflektif:</span> {kasus.pertanyaanPemantik}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          <div className="p-3.5 rounded-xl bg-amber-50/60 border border-amber-200 space-y-1">
                            <span className="text-xs font-bold text-amber-900 uppercase">
                              Analisis Keteladanan Nabi:
                            </span>
                            <p className="text-xs text-gray-700 leading-relaxed">
                              {kasus.analisisKeteladanan}
                            </p>
                          </div>

                          <div className="p-3.5 rounded-xl bg-emerald-50/60 border border-emerald-200 space-y-1">
                            <span className="text-xs font-bold text-emerald-900 uppercase">
                              Solusi Qur\'ani & Aksi Mulia:
                            </span>
                            <p className="text-xs text-gray-700 leading-relaxed">
                              {kasus.solusiQurani}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Checklist Muhasabah Diri */}
            <div className="space-y-4 pt-4 border-t border-gray-100">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 flex items-center gap-2">
                    <ListChecks className="w-5 h-5 text-emerald-600" />
                    Lembar Muhasabah Harian: Sejauh Mana Aku Mencintai Rasulullah Saw.?
                  </h3>
                  <p className="text-xs text-gray-500">
                    Centang pernyataan di bawah ini secara jujur untuk mengukur konsistensi perilakumu
                  </p>
                </div>

                <div className="px-3 py-1 rounded-xl bg-emerald-100 text-emerald-800 text-xs font-bold">
                  {Object.values(checklistRefleksi).filter(Boolean).length} / {materi.refleksiDanMuhasabah.indikatorRefleksiDiri.length} Terpenuhi
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                <div
                  className="bg-emerald-600 h-2.5 rounded-full transition-all duration-300"
                  style={{
                    width: `${(Object.values(checklistRefleksi).filter(Boolean).length / materi.refleksiDanMuhasabah.indikatorRefleksiDiri.length) * 100}%`
                  }}
                />
              </div>

              {/* Checklist Items */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {materi.refleksiDanMuhasabah.indikatorRefleksiDiri.map((item) => {
                  const checked = !!checklistRefleksi[item.id];
                  return (
                    <button
                      key={item.id}
                      onClick={() => toggleRefleksi(item.id)}
                      className={`p-3.5 rounded-2xl text-left border transition-all cursor-pointer flex items-start gap-3 ${
                        checked
                          ? 'bg-emerald-50/80 border-emerald-300 text-emerald-950 shadow-xs'
                          : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100/70'
                      }`}
                    >
                      <div className={`mt-0.5 w-5 h-5 rounded-lg flex items-center justify-center shrink-0 border ${
                        checked ? 'bg-emerald-600 border-emerald-600 text-white' : 'border-gray-300 bg-white'
                      }`}>
                        {checked && <CheckCircle2 className="w-4 h-4" />}
                      </div>
                      <div className="space-y-0.5">
                        <span className="text-[10px] font-black uppercase text-gray-400">
                          {item.dimensi}
                        </span>
                        <p className="text-xs font-medium leading-relaxed">
                          {item.pernyataan}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Komitmen Aksi Nyata */}
            <div className="p-5 rounded-3xl bg-rose-50 border border-rose-200 space-y-3">
              <h4 className="text-sm font-black text-rose-900 uppercase tracking-wide flex items-center gap-2">
                <Award className="w-4 h-4 text-rose-600" />
                5 Komitmen Aksi Nyata Pelajar Pecinta Rasulullah Saw.
              </h4>
              <div className="space-y-2">
                {materi.refleksiDanMuhasabah.komitmenAksiPelajar.map((komitmen, kIdx) => (
                  <div key={kIdx} className="text-xs text-rose-950 flex items-start gap-2 bg-white/70 p-2.5 rounded-xl border border-rose-100">
                    <span className="font-bold text-rose-600 shrink-0">{kIdx + 1}.</span>
                    <span>{komitmen}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================= TAB 6: KUIS HOTS (5 SOAL) ================= */}
      {activeTab === 'kuis-hots' && (
        <div className="space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-100 shadow-sm space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center font-black">
                  <Flame className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-black text-gray-900">
                    Evaluasi Mandiri HOTS Bab 3
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-500">
                    5 Butir Soal Penalaran Tingkat Tinggi (Higher Order Thinking Skills)
                  </p>
                </div>
              </div>

              {showKuisResult && (
                <div className="px-4 py-2 rounded-2xl bg-amber-50 border border-amber-200 text-right">
                  <span className="text-xs text-amber-700 font-bold block">Skor Akhir:</span>
                  <span className="text-2xl font-black text-amber-900">{hitungSkorKuis()}/100</span>
                </div>
              )}
            </div>

            {/* List Soal */}
            <div className="space-y-6">
              {materi.kuisHots.map((soal) => {
                const selected = userAnswers[soal.id];
                const isAnswered = selected !== undefined;
                const isCorrect = selected === soal.kunciJawaban;

                return (
                  <div
                    key={soal.id}
                    className="p-5 sm:p-6 rounded-3xl bg-gray-50/70 border border-gray-200 space-y-4"
                  >
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-black">
                        Soal Nomor {soal.nomor}
                      </span>
                      {showKuisResult && (
                        <span className={`text-xs font-black px-2.5 py-1 rounded-lg ${
                          isCorrect ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'
                        }`}>
                          {isCorrect ? '✓ Jawaban Benar' : '✗ Belum Tepat'}
                        </span>
                      )}
                    </div>

                    {/* Kasus Soal */}
                    <div className="p-3.5 rounded-2xl bg-white border border-gray-200 text-xs sm:text-sm text-gray-800 leading-relaxed font-medium">
                      <span className="text-xs font-bold text-gray-400 block mb-1">Stimulus Kasus:</span>
                      {soal.kasus}
                    </div>

                    {/* Pertanyaan */}
                    <p className="text-sm sm:text-base font-bold text-gray-900">
                      {soal.pertanyaan}
                    </p>

                    {/* Pilihan Jawaban */}
                    <div className="space-y-2">
                      {soal.pilihan.map((pil, pIdx) => {
                        let btnStyle = 'bg-white border-gray-200 text-gray-800 hover:bg-gray-100';

                        if (selected === pIdx) {
                          btnStyle = 'bg-rose-600 text-white border-rose-600 font-bold shadow-sm';
                        }

                        if (showKuisResult) {
                          if (pIdx === soal.kunciJawaban) {
                            btnStyle = 'bg-emerald-600 text-white border-emerald-600 font-bold';
                          } else if (selected === pIdx && !isCorrect) {
                            btnStyle = 'bg-red-500 text-white border-red-500 font-bold';
                          } else {
                            btnStyle = 'bg-gray-100 text-gray-400 border-gray-200';
                          }
                        }

                        return (
                          <button
                            key={pIdx}
                            disabled={showKuisResult}
                            onClick={() => setUserAnswers(prev => ({ ...prev, [soal.id]: pIdx }))}
                            className={`w-full p-3.5 rounded-2xl text-left text-xs sm:text-sm border transition-all cursor-pointer flex items-start gap-2.5 ${btnStyle}`}
                          >
                            <span className="font-bold shrink-0">{String.fromCharCode(65 + pIdx)}.</span>
                            <span>{pil.replace(/^[A-D]\.\s*/, '')}</span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Pembahasan Box */}
                    {showKuisResult && (
                      <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-950 space-y-1">
                        <span className="font-black uppercase text-emerald-800 flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          Kunci & Pembahasan Mendalam:
                        </span>
                        <p className="leading-relaxed text-gray-800">
                          {soal.pembahasan}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Tombol Periksa Jawaban */}
            <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-3">
              <div className="text-xs text-gray-500">
                {Object.keys(userAnswers).length} dari {materi.kuisHots.length} soal telah dijawab
              </div>

              <div className="flex items-center gap-2">
                {showKuisResult ? (
                  <button
                    onClick={() => {
                      setUserAnswers({});
                      setShowKuisResult(false);
                    }}
                    className="px-5 py-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-bold transition-all cursor-pointer flex items-center gap-2"
                  >
                    <RefreshCw className="w-4 h-4" />
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
                      showToast('Kuis berhasil diperiksa! Periksa skor dan pembahasannya.', 'success');
                    }}
                    className="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white text-xs font-black shadow-md transition-all cursor-pointer flex items-center gap-2"
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
