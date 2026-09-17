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
  Square,
  Flame,
  Sunrise,
  AlertTriangle,
  Clock,
  Compass as CompassIcon,
  Layers,
  Heart
} from 'lucide-react';
import {
  MATERI_KELAS_9_SEM_1_BAB_2,
  DalilHariAkhirItem,
  TandaKiamatItem,
  TahapanHariAkhirItem,
  StudiKasusAkhiratItem
} from '../../data/materiKelas9Sem1Bab2Data';
import { useToast } from '../common/Toast';

interface Props {
  onAskAI: (prompt: string) => void;
}

type Bab2K9SubTab =
  | 'ringkasan'
  | 'pengertian-dalil'
  | 'tanda-kiamat-barzakh'
  | 'tahapan-hari-akhir'
  | 'akhlak-kehidupan'
  | 'refleksi-kasus'
  | 'hikmah-kuis';

export const BukuPaiKelas9Sem1Bab2Detail: React.FC<Props> = ({ onAskAI }) => {
  const { showToast } = useToast();
  const [activeTab, setActiveTab] = useState<Bab2K9SubTab>('ringkasan');

  // Filter Tanda Kiamat
  const [filterTandaKiamat, setFilterTandaKiamat] = useState<'Semua' | 'Sugra' | 'Kubra'>('Semua');

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

  // Selected Tahapan Modal or Expanded detail
  const [selectedTahapanUrutan, setSelectedTahapanUrutan] = useState<number>(1);

  const materi = MATERI_KELAS_9_SEM_1_BAB_2;

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

  // Kuis score calculation
  const hitungSkorKuis = () => {
    let benar = 0;
    materi.bagian5HikmahBeriman.kuisHots.forEach(soal => {
      if (userAnswers[soal.id] === soal.kunciJawaban) {
        benar++;
      }
    });
    return Math.round((benar / materi.bagian5HikmahBeriman.kuisHots.length) * 100);
  };

  const handleSelectJawaban = (soalId: string, indexPilihan: number) => {
    if (showKuisResult) return;
    setUserAnswers(prev => ({ ...prev, [soalId]: indexPilihan }));
  };

  const handleResetKuis = () => {
    setUserAnswers({});
    setShowKuisResult(false);
    showToast('Kuis direset. Silakan coba kembali!', 'info');
  };

  const toggleMuhasabah = (idx: number) => {
    setMuhasabahChecked(prev => {
      const updated = { ...prev, [idx]: !prev[idx] };
      const totalChecked = Object.values(updated).filter(Boolean).length;
      if (totalChecked === materi.bagian4RefleksiDanPengembanganSikap.lembarMuhasabah8Dimensi.length) {
        showToast('Masya Allah! Seluruh 8 indikator muhasabah diri telah kamu periksa.', 'success');
      }
      return updated;
    });
  };

  // Filtered Tanda Kiamat
  const allTandaKiamat: TandaKiamatItem[] = [
    ...materi.bagian1PengertianDanTanda.tandaTandaKiamat.kiamatSugra.contohPeristiwa,
    ...materi.bagian1PengertianDanTanda.tandaTandaKiamat.kiamatKubra.sepuluhTandaBesar
  ];

  const filteredTandaList = allTandaKiamat.filter(item => {
    if (filterTandaKiamat === 'Semua') return true;
    return item.kategori === filterTandaKiamat;
  });

  return (
    <div className="bg-slate-900/95 border border-emerald-500/30 rounded-2xl p-4 sm:p-6 text-slate-100 shadow-2xl space-y-6">
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-950 via-slate-900 to-teal-950 border border-emerald-500/40 p-5 sm:p-6 shadow-xl">
        <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-black tracking-wider uppercase bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              BAB 2 KELAS IX • SEMESTER 1
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-teal-500/20 text-teal-300 border border-teal-400/30">
              Elemen: {materi.elemenCp}
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
              {materi.fase}
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight leading-snug">
            {materi.judulBab}
          </h2>
          <p className="text-sm text-emerald-100/80 leading-relaxed max-w-4xl">
            {materi.subJudul}
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-2 text-xs text-slate-300">
            <span className="font-semibold text-emerald-400">Fokus Pembahasan:</span>
            <span className="bg-slate-800/80 px-2 py-1 rounded-md border border-slate-700 text-slate-200">
              Pengertian & Dalil Naqli
            </span>
            <span className="bg-slate-800/80 px-2 py-1 rounded-md border border-slate-700 text-slate-200">
              Tanda Kiamat Sugra & Kubra
            </span>
            <span className="bg-slate-800/80 px-2 py-1 rounded-md border border-slate-700 text-slate-200">
              Alam Barzakh & Munkar Nakir
            </span>
            <span className="bg-slate-800/80 px-2 py-1 rounded-md border border-slate-700 text-slate-200">
              9 Tahapan Hari Akhir
            </span>
            <span className="bg-slate-800/80 px-2 py-1 rounded-md border border-slate-700 text-slate-200">
              Surga & Neraka
            </span>
            <span className="bg-slate-800/80 px-2 py-1 rounded-md border border-slate-700 text-slate-200">
              Moral Brake & Karakter
            </span>
            <span className="bg-slate-800/80 px-2 py-1 rounded-md border border-slate-700 text-slate-200">
              Studi Kasus & Kuis HOTS
            </span>
          </div>
        </div>
      </div>

      {/* Navigation Sub-Tabs */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 border-b border-slate-700/80 scrollbar-thin scrollbar-thumb-emerald-600">
        <button
          onClick={() => setActiveTab('ringkasan')}
          className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
            activeTab === 'ringkasan'
              ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-700/40'
              : 'bg-slate-800/90 text-slate-300 hover:bg-slate-700/80 hover:text-white'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>Pengantar & Apersepsi</span>
        </button>

        <button
          onClick={() => setActiveTab('pengertian-dalil')}
          className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
            activeTab === 'pengertian-dalil'
              ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-700/40'
              : 'bg-slate-800/90 text-slate-300 hover:bg-slate-700/80 hover:text-white'
          }`}
        >
          <Compass className="w-4 h-4" />
          <span>Pengertian, Nama & Dalil</span>
        </button>

        <button
          onClick={() => setActiveTab('tanda-kiamat-barzakh')}
          className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
            activeTab === 'tanda-kiamat-barzakh'
              ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-700/40'
              : 'bg-slate-800/90 text-slate-300 hover:bg-slate-700/80 hover:text-white'
          }`}
        >
          <AlertTriangle className="w-4 h-4" />
          <span>Tanda Kiamat & Barzakh</span>
        </button>

        <button
          onClick={() => setActiveTab('tahapan-hari-akhir')}
          className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
            activeTab === 'tahapan-hari-akhir'
              ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-700/40'
              : 'bg-slate-800/90 text-slate-300 hover:bg-slate-700/80 hover:text-white'
          }`}
        >
          <Layers className="w-4 h-4" />
          <span>9 Tahapan Hari Akhir</span>
        </button>

        <button
          onClick={() => setActiveTab('akhlak-kehidupan')}
          className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
            activeTab === 'akhlak-kehidupan'
              ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-700/40'
              : 'bg-slate-800/90 text-slate-300 hover:bg-slate-700/80 hover:text-white'
          }`}
        >
          <ShieldCheck className="w-4 h-4" />
          <span>Rem Moral & Akhlak</span>
        </button>

        <button
          onClick={() => setActiveTab('refleksi-kasus')}
          className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
            activeTab === 'refleksi-kasus'
              ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-700/40'
              : 'bg-slate-800/90 text-slate-300 hover:bg-slate-700/80 hover:text-white'
          }`}
        >
          <HeartHandshake className="w-4 h-4" />
          <span>Studi Kasus & Muhasabah</span>
        </button>

        <button
          onClick={() => setActiveTab('hikmah-kuis')}
          className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
            activeTab === 'hikmah-kuis'
              ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-700/40'
              : 'bg-slate-800/90 text-slate-300 hover:bg-slate-700/80 hover:text-white'
          }`}
        >
          <Award className="w-4 h-4" />
          <span>Hikmah & Kuis HOTS</span>
        </button>
      </div>

      {/* ========================================================================= */}
      {/* TAB 1: RINGKASAN & APERSEPSI */}
      {/* ========================================================================= */}
      {activeTab === 'ringkasan' && (
        <div className="space-y-6">
          {/* Apersepsi Box */}
          <div className="bg-slate-800/80 border border-emerald-500/30 rounded-2xl p-5 space-y-3">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-base">
              <Lightbulb className="w-5 h-5 text-amber-400" />
              <span>Apersepsi & Renungan Awal: Mengapa Hari Akhir Itu Niscaya?</span>
            </div>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed text-justify">
              {materi.pengantar.apersepsi}
            </p>
          </div>

          {/* Tujuan Pembelajaran */}
          <div className="bg-slate-800/70 border border-slate-700 rounded-2xl p-5 space-y-4">
            <div className="flex items-center gap-2 text-emerald-300 font-bold text-sm sm:text-base">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <span>Capaian & Tujuan Pembelajaran Bab 2 (Kurikulum Merdeka)</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {materi.pengantar.tujuanPembelajaran.map((tujuan, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 bg-slate-900/60 p-3 rounded-xl border border-slate-700/70"
                >
                  <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 border border-emerald-400/30">
                    {idx + 1}
                  </span>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">{tujuan}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Kata Kunci */}
          <div className="bg-emerald-950/40 border border-emerald-500/30 rounded-2xl p-5 space-y-3">
            <div className="flex items-center gap-2 text-emerald-300 font-bold text-sm">
              <BookmarkCheck className="w-4 h-4 text-emerald-400" />
              <span>Glosarium Kata Kunci Penting:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {materi.pengantar.kataKunci.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg bg-emerald-800/60 text-emerald-100 text-xs font-semibold border border-emerald-600/40 hover:bg-emerald-700/70 transition-colors"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* AI Quick Prompt CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-gradient-to-r from-emerald-900/50 to-teal-900/50 p-4 rounded-xl border border-emerald-500/40">
            <div className="flex items-center gap-3">
              <Bot className="w-6 h-6 text-emerald-400 shrink-0" />
              <p className="text-xs sm:text-sm text-slate-200">
                Ingin penjelasan interaktif dari guru AI seputar tahapan Hari Akhir dan dalil-dalilnya?
              </p>
            </div>
            <button
              onClick={() =>
                onAskAI(
                  'Tolong jelaskan rangkuman lengkap materi PAI Kelas IX Semester 1 Bab 2 tentang Meyakini dan Merefleksikan Iman kepada Hari Akhir secara sistematis dan mudah dipahami.'
                )
              }
              className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-xs rounded-xl shadow-md transition-all cursor-pointer whitespace-nowrap"
            >
              Tanya Masterku AI
            </button>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 2: PENGERTIAN, NAMA-NAMA LAIN, & DALIL NAQLI */}
      {/* ========================================================================= */}
      {activeTab === 'pengertian-dalil' && (
        <div className="space-y-6">
          {/* Pengertian Bahasa & Istilah */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-5 space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                <CompassIcon className="w-4 h-4" />
                <span>Pengertian Secara Bahasa (Etimologi)</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-justify">
                {materi.bagian1PengertianDanTanda.pengertianBahasaDanIstilah.secaraBahasa}
              </p>
            </div>

            <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-5 space-y-2">
              <div className="flex items-center gap-2 text-teal-400 font-bold text-sm">
                <ShieldCheck className="w-4 h-4" />
                <span>Pengertian Secara Istilah (Terminologi Syariat)</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-justify">
                {materi.bagian1PengertianDanTanda.pengertianBahasaDanIstilah.secaraIstilah}
              </p>
            </div>
          </div>

          {/* Kedudukan & Hukum */}
          <div className="bg-gradient-to-r from-emerald-950/60 to-slate-900 border border-emerald-500/40 rounded-2xl p-5 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-emerald-300 flex items-center gap-2">
                <Award className="w-4 h-4" />
                Kedudukan dalam Rukun Iman & Hukum Beriman
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-500/20 text-amber-300 border border-amber-400/40">
                Fardhu 'Ain
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              {materi.bagian1PengertianDanTanda.pengertianBahasaDanIstilah.kedudukanRukunIman}
            </p>
            <p className="text-xs text-amber-200/90 font-medium bg-amber-950/40 p-2.5 rounded-xl border border-amber-500/30">
              ⚖️ {materi.bagian1PengertianDanTanda.pengertianBahasaDanIstilah.hukumBeriman}
            </p>
          </div>

          {/* 10 Nama-Nama Lain Hari Akhir */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                <FileText className="w-4 h-4 text-emerald-400" />
                10 Nama Lain Hari Akhir dalam Al-Qur'an & Makna Filosofisnya
              </h3>
              <span className="text-xs text-emerald-400">10 Sebutan Mulia</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {materi.bagian1PengertianDanTanda.namaNamaLainHariAkhir.map((nama, idx) => (
                <div
                  key={idx}
                  className="bg-slate-800/90 border border-slate-700/80 rounded-xl p-4 space-y-2 hover:border-emerald-500/50 transition-all group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                      0{idx + 1}
                    </span>
                    <span className="text-[11px] text-slate-400 font-semibold">{nama.dalilAlQuran}</span>
                  </div>
                  <div className="flex items-baseline justify-between pt-1">
                    <h4 className="font-bold text-white text-sm group-hover:text-emerald-300 transition-colors">
                      {nama.namaLatin}
                    </h4>
                    <span className="text-base font-serif text-amber-200" dir="rtl">
                      {nama.namaArab}
                    </span>
                  </div>
                  <p className="text-xs text-emerald-200 font-medium">"{nama.artiIndonesia}"</p>
                  <p className="text-xs text-slate-300/90 leading-relaxed pt-1 border-t border-slate-700/50">
                    {nama.maknaFilosofis}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Dalil Naqli Al-Qur'an & Hadits Lengkap */}
          <div className="space-y-4">
            <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-emerald-400" />
              Dalil Naqli Al-Qur'an dan Hadits Shahih tentang Kepastian Hari Akhir
            </h3>

            {materi.bagian1PengertianDanTanda.dalilAlQuranDanHadits.map(dalil => (
              <div
                key={dalil.id}
                className="bg-slate-800/90 border border-slate-700 rounded-2xl p-5 space-y-4 shadow-md"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-700/80 pb-3">
                  <div>
                    <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                      {dalil.surah} Ayat {dalil.ayatNomor}
                    </span>
                    <h4 className="text-sm font-bold text-white">{dalil.artiSurah}</h4>
                  </div>
                  <div className="flex items-center gap-2">
                    {dalil.audioUrl && (
                      <button
                        onClick={() => dalil.audioUrl && handlePlayAudio(dalil.audioUrl)}
                        className="px-3 py-1.5 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-400/30 text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer"
                      >
                        {currentPlayingAudio === dalil.audioUrl ? (
                          <>
                            <Pause className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                            <span>Jeda Murottal</span>
                          </>
                        ) : (
                          <>
                            <Play className="w-3.5 h-3.5 text-emerald-400" />
                            <span>Audio Murottal</span>
                          </>
                        )}
                      </button>
                    )}
                    <button
                      onClick={() =>
                        copyToClipboard(
                          `${dalil.teksArab}\n\n${dalil.terjemahan} (${dalil.surah}: ${dalil.ayatNomor})`,
                          dalil.surah
                        )
                      }
                      className="p-1.5 rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-300 hover:text-white transition-colors cursor-pointer"
                      title="Salin Ayat"
                    >
                      <Copy className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Ayat Arab */}
                <div className="bg-slate-900/80 p-4 sm:p-5 rounded-xl border border-slate-700/80 text-right">
                  <p
                    className="text-xl sm:text-2xl font-serif text-amber-100 leading-loose tracking-wide"
                    dir="rtl"
                  >
                    {dalil.teksArab}
                  </p>
                </div>

                {/* Transliterasi & Terjemah */}
                <div className="space-y-2">
                  <p className="text-xs text-emerald-300/90 italic font-mono leading-relaxed">
                    {dalil.transliterasi}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal bg-slate-900/40 p-3 rounded-lg border border-slate-700/50">
                    <strong className="text-white">Artinya:</strong> "{dalil.terjemahan}"
                  </p>
                </div>

                {/* Kandungan Pokok */}
                <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-700/50 space-y-1.5">
                  <span className="text-xs font-bold text-emerald-400">Poin Pelajaran Pokok:</span>
                  <ul className="space-y-1">
                    {dalil.kandunganPokok.map((poin, pIdx) => (
                      <li key={pIdx} className="text-xs text-slate-300 flex items-start gap-2">
                        <span className="text-emerald-400 font-bold">•</span>
                        <span>{poin}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 3: TANDA-TANDA KIAMAT & ALAM BARZAKH */}
      {/* ========================================================================= */}
      {activeTab === 'tanda-kiamat-barzakh' && (
        <div className="space-y-6">
          {/* Filter Tanda Kiamat */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-800/80 p-4 rounded-xl border border-slate-700">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-emerald-400" />
              <span className="text-xs sm:text-sm font-bold text-white">Klasifikasi Tanda Kiamat:</span>
            </div>
            <div className="flex items-center gap-2">
              {(['Semua', 'Sugra', 'Kubra'] as const).map(kat => (
                <button
                  key={kat}
                  onClick={() => setFilterTandaKiamat(kat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    filterTandaKiamat === kat
                      ? 'bg-emerald-500 text-slate-950 font-black'
                      : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                  }`}
                >
                  {kat === 'Semua' ? 'Semua Tanda' : kat === 'Sugra' ? 'Kiamat Sugrā (Kecil)' : 'Kiamat Kubrā (10 Besar)'}
                </button>
              ))}
            </div>
          </div>

          {/* Grid Tanda Kiamat */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredTandaList.map(tanda => (
              <div
                key={tanda.id}
                className={`rounded-2xl p-5 border space-y-3 transition-all ${
                  tanda.kategori === 'Sugra'
                    ? 'bg-slate-800/90 border-amber-500/40 hover:border-amber-400'
                    : 'bg-slate-800/90 border-rose-500/40 hover:border-rose-400'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-xs font-black uppercase tracking-wider ${
                      tanda.kategori === 'Sugra'
                        ? 'bg-amber-500/20 text-amber-300 border border-amber-400/40'
                        : 'bg-rose-500/20 text-rose-300 border border-rose-400/40'
                    }`}
                  >
                    Kiamat {tanda.kategori}
                  </span>
                  <span className="text-[11px] text-slate-400 font-mono">{tanda.dalilRujukan}</span>
                </div>

                <h4 className="text-base font-bold text-white">{tanda.namaTanda}</h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-justify">
                  {tanda.penjelasan}
                </p>

                <div className="bg-slate-900/70 p-3 rounded-xl border border-slate-700/60 text-xs text-slate-300 space-y-1">
                  <span className="font-semibold text-emerald-300 flex items-center gap-1.5">
                    <Sparkle className="w-3.5 h-3.5 text-amber-400" />
                    Konteks Realita Masa Kini:
                  </span>
                  <p className="text-slate-200/90">{tanda.faktaKontekstual}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Alam Barzakh & Peristiwa Pasca Kematian */}
          <div className="bg-gradient-to-br from-slate-900 via-slate-850 to-slate-950 border border-teal-500/40 rounded-2xl p-5 sm:p-6 space-y-5">
            <div className="flex items-center gap-2 border-b border-slate-700/80 pb-3">
              <Clock className="w-5 h-5 text-teal-400" />
              <h3 className="text-base sm:text-lg font-bold text-white">
                Peristiwa Alam Barzakh (Alam Kubur) Pasca-Kematian
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700 space-y-2">
                <span className="text-xs font-bold text-rose-400 uppercase tracking-wider">
                  1. Sakaratul Maut
                </span>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed text-justify">
                  {materi.bagian1PengertianDanTanda.peristiwaSetelahKematian.sakaratulMaut}
                </p>
              </div>

              <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700 space-y-2">
                <span className="text-xs font-bold text-teal-400 uppercase tracking-wider">
                  2. Konsep Alam Barzakh
                </span>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed text-justify">
                  {materi.bagian1PengertianDanTanda.peristiwaSetelahKematian.alamBarzakh}
                </p>
              </div>

              <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700 space-y-2">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  3. Fitnah Pertanyaan Munkar dan Nakir
                </span>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed text-justify">
                  {materi.bagian1PengertianDanTanda.peristiwaSetelahKematian.fitnahKuburMunkarNakir}
                </p>
              </div>

              <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700 space-y-2">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                  4. Nikmat Kubur vs Siksa Kubur
                </span>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed text-justify">
                  {materi.bagian1PengertianDanTanda.peristiwaSetelahKematian.nikmatDanSiksaKubur}
                </p>
              </div>
            </div>

            {/* 5 Amalan Penyelamat Siksa Kubur */}
            <div className="bg-teal-950/40 p-4 rounded-xl border border-teal-500/30 space-y-3">
              <span className="text-xs font-bold text-teal-300 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-teal-400" />
                5 Amalan Pelindung dari Fitnah dan Siksa Kubur:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {materi.bagian1PengertianDanTanda.peristiwaSetelahKematian.amalanPenyelamatSiksaKubur.map(
                  (amal, aIdx) => (
                    <div
                      key={aIdx}
                      className="flex items-start gap-2 bg-slate-900/60 p-2.5 rounded-lg border border-teal-500/20 text-xs text-slate-200"
                    >
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{amal}</span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 4: 9 TAHAPAN HARI AKHIR SECARA KRONOLOGIS */}
      {/* ========================================================================= */}
      {activeTab === 'tahapan-hari-akhir' && (
        <div className="space-y-6">
          <div className="bg-slate-800/70 p-4 rounded-xl border border-slate-700 text-xs sm:text-sm text-slate-200 leading-relaxed">
            {materi.bagian2TahapanHariAkhir.pengantarKronologi}
          </div>

          {/* Timeline Navigation Selector */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-emerald-600">
            {materi.bagian2TahapanHariAkhir.sembilanTahapan.map(tahap => (
              <button
                key={tahap.urutan}
                onClick={() => setSelectedTahapanUrutan(tahap.urutan)}
                className={`px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer shrink-0 flex items-center gap-1.5 ${
                  selectedTahapanUrutan === tahap.urutan
                    ? 'bg-emerald-500 text-slate-950 font-black shadow-lg'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                <span className="w-4 h-4 rounded-full bg-black/20 flex items-center justify-center text-[10px]">
                  {tahap.urutan}
                </span>
                <span>{tahap.namaTahapan.split('(')[0]}</span>
              </button>
            ))}
          </div>

          {/* Detailed Card of Selected Tahapan */}
          {(() => {
            const tahap =
              materi.bagian2TahapanHariAkhir.sembilanTahapan.find(
                t => t.urutan === selectedTahapanUrutan
              ) || materi.bagian2TahapanHariAkhir.sembilanTahapan[0];

            return (
              <div className="bg-slate-800/90 border border-emerald-500/40 rounded-2xl p-5 sm:p-6 space-y-5 shadow-xl">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-700 pb-4">
                  <div className="space-y-1">
                    <span className="text-xs font-black text-emerald-400 tracking-wider uppercase">
                      TAHAPAN KE-{tahap.urutan} DARI 9 TAHAPAN AKBAR
                    </span>
                    <h3 className="text-lg sm:text-xl font-black text-white">{tahap.namaTahapan}</h3>
                    <p className="text-xs text-slate-400 font-medium">
                      Makna Syariat: {tahap.artiNama}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-xl sm:text-2xl font-serif text-amber-200" dir="rtl">
                      {tahap.namaArab}
                    </span>
                    <p className="text-xs text-slate-400">{tahap.dalilAlQuran}</p>
                  </div>
                </div>

                {/* Dalil Box */}
                <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-700 space-y-2 text-right">
                  <p className="text-lg sm:text-xl font-serif text-amber-100 leading-relaxed" dir="rtl">
                    {tahap.teksDalilArab}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-300 text-left pt-1 border-t border-slate-800 italic">
                    <strong className="text-emerald-400 not-italic">Artinya:</strong> "{tahap.terjemahDalil}"
                  </p>
                </div>

                {/* Grid Penjelasan & Kondisi Manusia */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-700/70 space-y-2">
                    <span className="text-xs font-bold text-teal-300 flex items-center gap-1.5">
                      <BookOpen className="w-4 h-4 text-teal-400" />
                      Deskripsi Terjadinya Peristiwa:
                    </span>
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed text-justify">
                      {tahap.deskripsiPeristiwa}
                    </p>
                  </div>

                  <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-700/70 space-y-2">
                    <span className="text-xs font-bold text-rose-300 flex items-center gap-1.5">
                      <AlertTriangle className="w-4 h-4 text-rose-400" />
                      Kondisi Jiwa Manusia saat Itu:
                    </span>
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed text-justify">
                      {tahap.keadaanManusia}
                    </p>
                  </div>
                </div>

                {/* Hikmah Pelajaran */}
                <div className="bg-emerald-950/40 p-4 rounded-xl border border-emerald-500/30 flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-emerald-300">
                      Hikmah Reflektif untuk Kita Saat Ini:
                    </span>
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed pt-0.5">
                      {tahap.hikmahPelajaran}
                    </p>
                  </div>
                </div>

                {/* Navigasi Next/Prev Tahap */}
                <div className="flex items-center justify-between pt-2">
                  <button
                    disabled={tahap.urutan === 1}
                    onClick={() => setSelectedTahapanUrutan(prev => Math.max(1, prev - 1))}
                    className="px-3 py-1.5 rounded-lg bg-slate-700 hover:bg-slate-600 disabled:opacity-30 text-xs font-bold text-white transition-all cursor-pointer"
                  >
                    ← Tahapan Sebelumnya
                  </button>
                  <span className="text-xs text-slate-400 font-semibold">
                    {tahap.urutan} dari 9
                  </span>
                  <button
                    disabled={tahap.urutan === 9}
                    onClick={() => setSelectedTahapanUrutan(prev => Math.min(9, prev + 1))}
                    className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 disabled:opacity-30 text-xs font-bold text-white transition-all cursor-pointer"
                  >
                    Tahapan Selanjutnya →
                  </button>
                </div>
              </div>
            );
          })()}

          {/* Surga & Neraka Klasifikasi */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 pt-2">
            {/* Surga */}
            <div className="bg-slate-800/80 border border-emerald-500/40 rounded-2xl p-5 space-y-4">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-base border-b border-slate-700 pb-2">
                <Sparkle className="w-5 h-5" />
                <span>Nama-Nama Surga (Jannah) & Calon Penghuninya</span>
              </div>
              <div className="space-y-2.5">
                {materi.bagian2TahapanHariAkhir.surgaDanNeraka.namaSurgaDanTingkatannya.map(
                  (surga, sIdx) => (
                    <div
                      key={sIdx}
                      className="bg-slate-900/60 p-3 rounded-xl border border-emerald-500/20 space-y-1"
                    >
                      <div className="flex items-center justify-between">
                        <h4 className="font-bold text-emerald-300 text-xs sm:text-sm">
                          {surga.nama}
                        </h4>
                        <span className="text-[10px] text-slate-400 font-mono">{surga.dalil}</span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">{surga.calonPenghuni}</p>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Neraka */}
            <div className="bg-slate-800/80 border border-rose-500/40 rounded-2xl p-5 space-y-4">
              <div className="flex items-center gap-2 text-rose-400 font-bold text-base border-b border-slate-700 pb-2">
                <Flame className="w-5 h-5" />
                <span>Nama-Nama Neraka (Jahannam) & Golongan yang Diancam</span>
              </div>
              <div className="space-y-2.5">
                {materi.bagian2TahapanHariAkhir.surgaDanNeraka.namaNerakaDanTingkatannya.map(
                  (neraka, nIdx) => (
                    <div
                      key={nIdx}
                      className="bg-slate-900/60 p-3 rounded-xl border border-rose-500/20 space-y-1"
                    >
                      <div className="flex items-center justify-between">
                        <h4 className="font-bold text-rose-300 text-xs sm:text-sm">
                          {neraka.nama}
                        </h4>
                        <span className="text-[10px] text-slate-400 font-mono">{neraka.dalil}</span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">{neraka.calonPenghuni}</p>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 5: REM MORAL & HUBUNGAN AKHLAK KEHIDUPAN */}
      {/* ========================================================================= */}
      {activeTab === 'akhlak-kehidupan' && (
        <div className="space-y-6">
          {/* Konsep Moral Brake */}
          <div className="bg-gradient-to-r from-teal-950 via-slate-900 to-emerald-950 border border-teal-500/40 rounded-2xl p-5 space-y-3">
            <div className="flex items-center gap-2 text-teal-300 font-bold text-base">
              <ShieldCheck className="w-5 h-5 text-teal-400" />
              <span>Konsep "Rem Moral" (Moral Brake) dalam Kehidupan Remaja</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed text-justify">
              {materi.bagian3HubunganAkhlakDanKehidupan.konsepMoralBrake}
            </p>
          </div>

          {/* 5 Dimensi Karakter */}
          <div className="space-y-3">
            <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
              <Users className="w-4 h-4 text-emerald-400" />
              Manifestasi Iman kepada Hari Akhir dalam 5 Dimensi Karakter Pelajar
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {materi.bagian3HubunganAkhlakDanKehidupan.dampakPositifPadaKarakter.map(
                (karakter, kIdx) => (
                  <div
                    key={kIdx}
                    className="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-5 space-y-3 hover:border-emerald-500/50 transition-all"
                  >
                    <div className="flex items-center justify-between border-b border-slate-700/60 pb-2">
                      <h4 className="font-bold text-emerald-300 text-sm">
                        {karakter.dimensiKarakter}
                      </h4>
                      <span className="text-xs font-mono text-slate-400">Dimensi {kIdx + 1}</span>
                    </div>

                    <div className="space-y-1.5">
                      <span className="text-xs font-semibold text-teal-300">
                        Penerapan Nyata di Sekolah / Rumah:
                      </span>
                      <p className="text-xs text-slate-200 leading-relaxed bg-slate-900/50 p-2.5 rounded-lg border border-slate-700/50">
                        {karakter.manifestasiPerilaku}
                      </p>
                    </div>

                    <div className="space-y-1.5">
                      <span className="text-xs font-semibold text-amber-300">
                        Landasan Akidah Hari Akhir:
                      </span>
                      <p className="text-xs text-slate-300 leading-relaxed bg-slate-900/50 p-2.5 rounded-lg border border-slate-700/50">
                        {karakter.kaitanDenganHariAkhir}
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 6: STUDI KASUS & MUHASABAH 8 DIMENSI */}
      {/* ========================================================================= */}
      {activeTab === 'refleksi-kasus' && (
        <div className="space-y-6">
          {/* Studi Kasus Accordion */}
          <div className="space-y-3">
            <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
              <Brain className="w-4 h-4 text-emerald-400" />
              3 Studi Kasus Reflektif: Menghadapi Godaan Akhir Zaman di Era Digital
            </h3>

            <div className="space-y-3">
              {materi.bagian4RefleksiDanPengembanganSikap.tigaStudiKasus.map((kasus, idx) => (
                <div
                  key={kasus.id}
                  className="bg-slate-800/90 border border-slate-700 rounded-2xl overflow-hidden shadow-md"
                >
                  <button
                    onClick={() => setOpenKasusIndex(openKasusIndex === idx ? null : idx)}
                    className="w-full p-4 text-left flex items-center justify-between gap-3 hover:bg-slate-750 transition-colors cursor-pointer"
                  >
                    <span className="font-bold text-sm sm:text-base text-white flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs flex items-center justify-center font-mono">
                        {idx + 1}
                      </span>
                      {kasus.judul}
                    </span>
                    <span className="text-xs text-emerald-400 font-semibold shrink-0">
                      {openKasusIndex === idx ? 'Tutup Analisis ▲' : 'Buka Kasus ▼'}
                    </span>
                  </button>

                  {openKasusIndex === idx && (
                    <div className="p-5 pt-0 space-y-4 border-t border-slate-700/70 text-xs sm:text-sm">
                      <div className="bg-slate-900/70 p-3 rounded-xl border border-slate-700 space-y-1">
                        <span className="font-bold text-rose-300">Fenomena Masa Kini:</span>
                        <p className="text-slate-200 leading-relaxed">{kasus.fenomenaModern}</p>
                      </div>

                      <div className="bg-slate-900/70 p-3 rounded-xl border border-slate-700 space-y-1">
                        <span className="font-bold text-amber-300">Dilema Moral Pelajar:</span>
                        <p className="text-slate-200 leading-relaxed">{kasus.dilemaMoral}</p>
                      </div>

                      <div className="bg-slate-900/70 p-3 rounded-xl border border-slate-700 space-y-1">
                        <span className="font-bold text-teal-300">Analisis Tuntunan Akidah & Al-Qur'an:</span>
                        <p className="text-slate-200 leading-relaxed">{kasus.analisisAkidah}</p>
                      </div>

                      <div className="bg-emerald-950/40 p-3 rounded-xl border border-emerald-500/30 space-y-1.5">
                        <span className="font-bold text-emerald-300">Solusi & Komitmen Tindakan:</span>
                        <ul className="space-y-1">
                          {kasus.solusiPraktis.map((sol, sIdx) => (
                            <li key={sIdx} className="text-slate-200 flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                              <span>{sol}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Lembar Muhasabah 8 Dimensi */}
          <div className="bg-gradient-to-br from-slate-900 via-slate-850 to-slate-900 border border-emerald-500/40 rounded-2xl p-5 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-700/80 pb-3">
              <div className="flex items-center gap-2">
                <CheckSquare className="w-5 h-5 text-emerald-400" />
                <h4 className="font-bold text-white text-sm sm:text-base">
                  Lembar Muhasabah Diri (Self-Audit): 8 Indikator Karakter Mukmin Sadar Akhirat
                </h4>
              </div>
              <span className="text-xs text-emerald-300 font-semibold">
                Tercentang:{' '}
                {
                  Object.values(muhasabahChecked).filter(Boolean).length
                }{' '}
                dari 8
              </span>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              Centang setiap pertanyaan yang telah berhasil kamu renungkan dan biasakan dalam kehidupan sehari-hari:
            </p>

            <div className="space-y-2.5">
              {materi.bagian4RefleksiDanPengembanganSikap.lembarMuhasabah8Dimensi.map(
                (item, mIdx) => (
                  <div
                    key={mIdx}
                    onClick={() => toggleMuhasabah(mIdx)}
                    className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-start gap-3 ${
                      muhasabahChecked[mIdx]
                        ? 'bg-emerald-950/50 border-emerald-500 text-white'
                        : 'bg-slate-800/80 border-slate-700 text-slate-300 hover:border-slate-600'
                    }`}
                  >
                    <div className="mt-0.5">
                      {muhasabahChecked[mIdx] ? (
                        <CheckSquare className="w-5 h-5 text-emerald-400" />
                      ) : (
                        <Square className="w-5 h-5 text-slate-500" />
                      )}
                    </div>
                    <div className="space-y-1">
                      <h5 className="font-bold text-xs sm:text-sm text-emerald-300">{item.indikator}</h5>
                      <p className="text-xs leading-relaxed text-slate-200">{item.deskripsiPemeriksaanDiri}</p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Kebiasaan Amal Harian */}
          <div className="bg-slate-800/90 border border-slate-700 rounded-2xl p-5 space-y-4">
            <h4 className="font-bold text-white text-sm sm:text-base flex items-center gap-2">
              <Sunrise className="w-5 h-5 text-amber-400" />
              Matriks Kebiasaan Amal Harian Mukmin Menyongsong Yaumul Hisab
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {materi.bagian4RefleksiDanPengembanganSikap.kebiasaanAmalHarian.map((rutin, rIdx) => (
                <div
                  key={rIdx}
                  className="bg-slate-900/70 p-3.5 rounded-xl border border-slate-700/80 space-y-1.5"
                >
                  <span className="text-xs font-bold text-amber-400">{rutin.waktu}</span>
                  <p className="text-xs sm:text-sm font-semibold text-white">{rutin.amalan}</p>
                  <p className="text-xs text-emerald-200/90 italic">💡 {rutin.alasanAkidah}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 7: HIKMAH BERIMAN & KUIS EVALUASI HOTS */}
      {/* ========================================================================= */}
      {activeTab === 'hikmah-kuis' && (
        <div className="space-y-6">
          {/* 6 Hikmah Utama */}
          <div className="space-y-3">
            <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              6 Hikmah Utama Beriman kepada Hari Akhir bagi Jiwa dan Perilaku
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {materi.bagian5HikmahBeriman.enamHikmahUtama.map((hikmah, hIdx) => (
                <div
                  key={hIdx}
                  className="bg-slate-800/90 border border-slate-700 rounded-xl p-4 space-y-2 hover:border-emerald-500/50 transition-all"
                >
                  <h4 className="font-bold text-emerald-300 text-sm">{hikmah.judul}</h4>
                  <p className="text-xs text-slate-200 leading-relaxed text-justify">
                    {hikmah.penjelasan}
                  </p>
                  <div className="pt-1.5 border-t border-slate-700/60 text-[11px] text-teal-300 font-medium">
                    ✨ <em>{hikmah.dampakBatin}</em>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Kuis Evaluasi HOTS */}
          <div className="bg-slate-800/90 border border-emerald-500/40 rounded-2xl p-5 sm:p-6 space-y-5 shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-700 pb-4">
              <div>
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                  EVALUASI KOMPREHENSIF AKIDAH
                </span>
                <h4 className="text-base sm:text-lg font-black text-white">
                  Kuis Penalaran HOTS: Meyakini Hari Akhir (5 Butir Soal)
                </h4>
              </div>
              <div className="flex items-center gap-2">
                {showKuisResult && (
                  <button
                    onClick={handleResetKuis}
                    className="px-3 py-1.5 rounded-xl bg-slate-700 hover:bg-slate-600 text-white text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Ulangi Kuis</span>
                  </button>
                )}
              </div>
            </div>

            {/* Score Banner when completed */}
            {showKuisResult && (
              <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-950 to-teal-950 border border-emerald-500/50 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-300 font-black text-lg flex items-center justify-center border border-emerald-400/40">
                    {hitungSkorKuis()}
                  </div>
                  <div>
                    <h5 className="font-bold text-white text-sm">
                      {hitungSkorKuis() >= 80
                        ? 'Mumtaz! Pemahaman Akidah Kamu Sangat Luar Biasa.'
                        : hitungSkorKuis() >= 60
                        ? 'Bagus! Kamu Sudah Memahami Konsep Pokok Hari Akhir.'
                        : 'Tetap Semangat! Pelajari Kembali Rangkuman Tahapan dan Dalil Hari Akhir.'}
                    </h5>
                    <p className="text-xs text-slate-300">
                      Skor kamu: {hitungSkorKuis()} / 100 • Silakan pelajari pembahasan kunci jawaban di bawah ini.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Daftar Soal */}
            <div className="space-y-6">
              {materi.bagian5HikmahBeriman.kuisHots.map(soal => {
                const isAnswered = userAnswers[soal.id] !== undefined;
                const selected = userAnswers[soal.id];
                const isCorrect = selected === soal.kunciJawaban;

                return (
                  <div
                    key={soal.id}
                    className="bg-slate-900/80 p-4 sm:p-5 rounded-xl border border-slate-700/80 space-y-3"
                  >
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-black bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                        Soal No. {soal.nomor}
                      </span>
                      <span className="text-xs text-slate-400">Stimulus Analisis Kasus</span>
                    </div>

                    <div className="bg-slate-850 p-3 rounded-lg border border-slate-700/60 text-xs sm:text-sm text-slate-200 leading-relaxed font-serif italic">
                      "{soal.kasus}"
                    </div>

                    <p className="text-xs sm:text-sm font-bold text-white leading-relaxed">
                      {soal.pertanyaan}
                    </p>

                    {/* Pilihan Ganda */}
                    <div className="space-y-2 pt-1">
                      {soal.pilihan.map((pil, pIdx) => {
                        const isThisSelected = selected === pIdx;
                        const isThisKey = soal.kunciJawaban === pIdx;

                        let style =
                          'bg-slate-800 text-slate-200 border-slate-700 hover:bg-slate-750';
                        if (showKuisResult) {
                          if (isThisKey) {
                            style = 'bg-emerald-950/70 border-emerald-500 text-emerald-200 font-bold';
                          } else if (isThisSelected && !isCorrect) {
                            style = 'bg-rose-950/70 border-rose-500 text-rose-200';
                          }
                        } else if (isThisSelected) {
                          style = 'bg-emerald-600 text-white font-bold border-emerald-400 shadow-md';
                        }

                        return (
                          <button
                            key={pIdx}
                            disabled={showKuisResult}
                            onClick={() => handleSelectJawaban(soal.id, pIdx)}
                            className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm transition-all flex items-start gap-2.5 cursor-pointer ${style}`}
                          >
                            <span className="w-5 h-5 rounded-full bg-black/30 flex items-center justify-center text-[10px] shrink-0 mt-0.5">
                              {String.fromCharCode(65 + pIdx)}
                            </span>
                            <span className="leading-relaxed">{pil}</span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Pembahasan Soal */}
                    {showKuisResult && (
                      <div
                        className={`p-3.5 rounded-xl border text-xs space-y-1 mt-3 ${
                          isCorrect
                            ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-200'
                            : 'bg-rose-950/40 border-rose-500/40 text-rose-200'
                        }`}
                      >
                        <div className="flex items-center gap-1.5 font-bold">
                          {isCorrect ? (
                            <>
                              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                              <span>Jawaban Kamu Tepat!</span>
                            </>
                          ) : (
                            <>
                              <XCircle className="w-4 h-4 text-rose-400" />
                              <span>
                                Jawaban Kurang Tepat (Kunci: Pilihan{' '}
                                {String.fromCharCode(65 + soal.kunciJawaban)})
                              </span>
                            </>
                          )}
                        </div>
                        <p className="text-slate-200 leading-relaxed">{soal.pembahasan}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Tombol Submit Kuis */}
            {!showKuisResult && (
              <div className="pt-2 flex justify-end">
                <button
                  disabled={
                    Object.keys(userAnswers).length < materi.bagian5HikmahBeriman.kuisHots.length
                  }
                  onClick={() => {
                    setShowKuisResult(true);
                    showToast('Hasil evaluasi kuis telah dinilai!', 'success');
                  }}
                  className="px-6 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 disabled:opacity-40 text-slate-950 font-black text-xs sm:text-sm shadow-lg transition-all cursor-pointer flex items-center gap-2"
                >
                  <Award className="w-4 h-4" />
                  <span>Kirim & Nilai Jawaban</span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
