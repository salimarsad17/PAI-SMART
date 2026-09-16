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
  Layers,
  HeartHandshake,
  ShieldCheck,
  Compass,
  Star,
  BookMarked,
  Scroll,
  Globe2,
  ListChecks,
  ChevronDown,
  ChevronUp,
  RefreshCw,
  ExternalLink,
  Flame
} from 'lucide-react';
import { MATERI_KELAS_8_SEM_1_BAB_2, KitabSuciItem } from '../../data/materiKelas8Sem1Bab2Data';
import { useToast } from '../common/Toast';

interface BukuPaiKelas8Sem1Bab2DetailProps {
  onAskAI: (prompt: string) => void;
}

type Bab2Tab =
  | 'pengertian-dalil'
  | 'nama-kitab-rasul'
  | 'fungsi-hikmah'
  | 'isi-pokok'
  | 'keistimewaan-quran'
  | 'generasi-toleran'
  | 'kuis-hots';

export const BukuPaiKelas8Sem1Bab2Detail: React.FC<BukuPaiKelas8Sem1Bab2DetailProps> = ({ onAskAI }) => {
  const { showToast } = useToast();
  const materi = MATERI_KELAS_8_SEM_1_BAB_2;

  // Active Tab
  const [activeTab, setActiveTab] = useState<Bab2Tab>('pengertian-dalil');

  // Selected Kitab Card for detailed modal/view
  const [selectedKitabId, setSelectedKitabId] = useState<string>('kitab-alquran');

  // Audio Playback state
  const [playingAudioId, setPlayingAudioId] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Kuis HOTS state
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});
  const [showKuisResult, setShowKuisResult] = useState<boolean>(false);

  // Checklist Refleksi Toleransi state
  const [checklistRefleksi, setChecklistRefleksi] = useState<Record<number, boolean>>({});

  // Collapsible sections
  const [expandedSuhuf, setExpandedSuhuf] = useState<boolean>(true);
  const [expandedMuhaimin, setExpandedMuhaimin] = useState<boolean>(true);

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

  // Copy helper
  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    showToast(`${label} berhasil disalin ke clipboard!`, 'success');
  };

  // Score calculation for Kuis HOTS
  const calculatedScore = showKuisResult
    ? Math.round(
        (materi.kuisHots.reduce((acc, q) => {
          return userAnswers[q.id] === q.kunciJawaban ? acc + 1 : acc;
        }, 0) /
          materi.kuisHots.length) *
          100
      )
    : 0;

  const currentSelectedKitab = materi.namaKitabDanRasul.daftarKitab.find(k => k.id === selectedKitabId) || materi.namaKitabDanRasul.daftarKitab[3];

  return (
    <div className="space-y-6 text-slate-800">
      {/* ================= HEADER HERO ================= */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-950 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden border border-blue-700/50">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
        <div className="relative z-10">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-400 text-amber-950 flex items-center gap-1.5 shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              Kelas VIII • Semester 1 • Bab 2
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-800/70 text-blue-100 border border-blue-500/30">
              Elemen: {materi.elemenCp}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-indigo-800/70 text-indigo-100 border border-indigo-500/30">
              Fase D (SMP / MTs)
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white mb-2">
            {materi.judulBab}
          </h2>
          <p className="text-blue-200 text-xs sm:text-sm font-normal max-w-4xl leading-relaxed mb-4">
            {materi.subJudul}
          </p>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/15 text-xs sm:text-sm text-blue-50 leading-relaxed max-w-4xl">
            <p className="font-semibold text-amber-300 mb-1 flex items-center gap-1.5">
              <Lightbulb className="w-4 h-4" />
              Apersepsi Pembelajaran:
            </p>
            {materi.pengantar.apersepsi}
          </div>

          {/* Prompt AI Button Bar */}
          <div className="mt-5 flex flex-wrap gap-2 pt-2 border-t border-blue-700/40">
            <button
              onClick={() =>
                onAskAI(
                  'Jelaskan ringkasan lengkap materi PAI Kelas 8 Semester 1 Bab 2 tentang iman kepada kitab-kitab Allah, perbedaan kitab dan suhuf, nama 4 kitab suci dan rasul penerimanya, serta posisi Al-Qur\'an sebagai Al-Muhaimin.'
                )
              }
              className="px-3.5 py-2 bg-amber-400 hover:bg-amber-300 text-amber-950 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all shadow-md cursor-pointer"
            >
              <Bot className="w-4 h-4" />
              Tanya AI: Ringkasan Bab 2 Kitabullah
            </button>
            <button
              onClick={() =>
                onAskAI(
                  'Sebutkan 4 kitab suci Allah (Taurat, Zabur, Injil, Al-Qur\'an) beserta rasul penerimanya, bahasa pengantar, masa diturunkan, dan dalilnya di dalam Al-Qur\'an.'
                )
              }
              className="px-3.5 py-2 bg-white/15 hover:bg-white/25 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <Bot className="w-4 h-4 text-cyan-300" />
              Tanya AI: 4 Kitab Suci & Rasul Penerimanya
            </button>
            <button
              onClick={() =>
                onAskAI(
                  'Mengapa Al-Qur\'an disebut sebagai Al-Muhaimin dalam Q.S. Al-Ma\'idah ayat 48? Apa saja fungsinya terhadap kitab-kitab suci terdahulu?'
                )
              }
              className="px-3.5 py-2 bg-white/15 hover:bg-white/25 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <Bot className="w-4 h-4 text-emerald-300" />
              Tanya AI: Mengapa Al-Qur\'an Al-Muhaimin?
            </button>
            <button
              onClick={() =>
                onAskAI(
                  'Bagaimana karakter generasi pecinta Al-Qur\'an yang toleran di sekolah? Jelaskan batasan toleransi dalam akidah dan muamalah sosial!'
                )
              }
              className="px-3.5 py-2 bg-white/15 hover:bg-white/25 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <Bot className="w-4 h-4 text-amber-300" />
              Tanya AI: Generasi Qur\'ani yang Toleran
            </button>
          </div>
        </div>
      </div>

      {/* ================= SUB-NAVIGATION TABS ================= */}
      <div className="flex overflow-x-auto no-scrollbar gap-2 pb-1 border-b border-slate-200">
        <button
          onClick={() => setActiveTab('pengertian-dalil')}
          className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
            activeTab === 'pengertian-dalil'
              ? 'bg-blue-700 text-white shadow-md'
              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          1. Pengertian & Dalil
        </button>

        <button
          onClick={() => setActiveTab('nama-kitab-rasul')}
          className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
            activeTab === 'nama-kitab-rasul'
              ? 'bg-blue-700 text-white shadow-md'
              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
          }`}
        >
          <Scroll className="w-4 h-4" />
          2. Nama 4 Kitab & Rasul
        </button>

        <button
          onClick={() => setActiveTab('fungsi-hikmah')}
          className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
            activeTab === 'fungsi-hikmah'
              ? 'bg-blue-700 text-white shadow-md'
              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
          }`}
        >
          <Compass className="w-4 h-4" />
          3. Fungsi & Hikmah
        </button>

        <button
          onClick={() => setActiveTab('isi-pokok')}
          className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
            activeTab === 'isi-pokok'
              ? 'bg-blue-700 text-white shadow-md'
              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
          }`}
        >
          <Layers className="w-4 h-4" />
          4. Isi Pokok Ajaran
        </button>

        <button
          onClick={() => setActiveTab('keistimewaan-quran')}
          className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
            activeTab === 'keistimewaan-quran'
              ? 'bg-blue-700 text-white shadow-md'
              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
          }`}
        >
          <ShieldCheck className="w-4 h-4 text-emerald-300" />
          5. Keistimewaan Al-Qur\'an
        </button>

        <button
          onClick={() => setActiveTab('generasi-toleran')}
          className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
            activeTab === 'generasi-toleran'
              ? 'bg-blue-700 text-white shadow-md'
              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
          }`}
        >
          <HeartHandshake className="w-4 h-4 text-amber-300" />
          6. Generasi Pecinta Toleran
        </button>

        <button
          onClick={() => setActiveTab('kuis-hots')}
          className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
            activeTab === 'kuis-hots'
              ? 'bg-amber-500 text-amber-950 shadow-md font-black'
              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
          }`}
        >
          <Award className="w-4 h-4" />
          7. Evaluasi HOTS (5 Soal)
        </button>
      </div>

      {/* ================= TAB 1: PENGERTIAN & DALIL ================= */}
      {activeTab === 'pengertian-dalil' && (
        <div className="space-y-6">
          {/* Card Definisi */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-blue-100 shadow-sm space-y-6">
            <div className="flex items-center gap-2.5 pb-4 border-b border-slate-100">
              <span className="w-8 h-8 rounded-lg bg-blue-100 text-blue-800 font-bold flex items-center justify-center text-sm">
                1
              </span>
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  Pengertian Iman kepada Kitab-Kitab Allah Swt.
                </h3>
                <p className="text-xs text-slate-500">
                  Hakikat Rukun Iman ke-3 menurut Syariat Islam
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50/70 border border-blue-200/80 rounded-2xl p-4 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-700 px-2.5 py-0.5 bg-blue-100 rounded-md inline-block">
                  Secara Bahasa (Etimologi)
                </span>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {materi.pengertianImanDanDalil.pengertianBahasa}
                </p>
              </div>

              <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-2xl p-4 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 px-2.5 py-0.5 bg-emerald-100 rounded-md inline-block">
                  Secara Istilah Syariat (Terminologi)
                </span>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {materi.pengertianImanDanDalil.pengertianIstilah}
                </p>
              </div>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed">
              <span className="font-bold text-slate-900">Kedudukan Rukun Iman: </span>
              {materi.pengertianImanDanDalil.kedudukanDalamRukunIman}
            </div>

            {/* Dua Tingkatan Beriman */}
            <div className="space-y-3 pt-2">
              <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-500" />
                Dua Cara Beriman kepada Kitab Suci: Ijmali vs Tafshili
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {materi.pengertianImanDanDalil.tataCaraBeriman.map((cara, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl border border-slate-200 bg-white hover:border-blue-300 hover:shadow-sm transition-all space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm text-blue-900">{cara.kategori}</span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full font-bold bg-blue-100 text-blue-800">
                        {idx === 0 ? 'Kitab Terdahulu' : 'Kitab Al-Qur\'an'}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">{cara.penjelasan}</p>
                    <div className="pt-2 border-t border-slate-100 text-xs text-slate-700">
                      <span className="font-bold text-slate-800">Penerapannya: </span>
                      {cara.penerapan}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Perbedaan Kitab dan Suhuf */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-blue-100 shadow-sm space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-800 font-bold flex items-center justify-center text-sm">
                  2
                </span>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Perbedaan Hakiki antara Kitab dan Suhuf
                  </h3>
                  <p className="text-xs text-slate-500">
                    Perbandingan Kodifikasi Wahyu dan Daftar Suhuf Para Nabi
                  </p>
                </div>
              </div>
              <button
                onClick={() => setExpandedSuhuf(!expandedSuhuf)}
                className="p-1.5 rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-200 cursor-pointer"
              >
                {expandedSuhuf ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
            </div>

            {expandedSuhuf && (
              <div className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-indigo-50/60 rounded-2xl border border-indigo-100 space-y-1">
                    <span className="font-bold text-xs text-indigo-900 uppercase tracking-wide">Pengertian Kitab</span>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      {materi.pengertianImanDanDalil.perbedaanKitabDanSuhuf.definisiKitab}
                    </p>
                  </div>
                  <div className="p-4 bg-amber-50/60 rounded-2xl border border-amber-100 space-y-1">
                    <span className="font-bold text-xs text-amber-900 uppercase tracking-wide">Pengertian Suhuf</span>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      {materi.pengertianImanDanDalil.perbedaanKitabDanSuhuf.definisiSuhuf}
                    </p>
                  </div>
                </div>

                {/* Tabel Perbandingan */}
                <div className="overflow-x-auto rounded-2xl border border-slate-200">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead className="bg-slate-100 text-slate-700 font-bold uppercase text-[11px]">
                      <tr>
                        <th className="py-3 px-4 border-b border-slate-200 w-1/4">Aspek Pembeda</th>
                        <th className="py-3 px-4 border-b border-slate-200 w-3/8 text-indigo-950 bg-indigo-50/40">
                          Kitab Suci
                        </th>
                        <th className="py-3 px-4 border-b border-slate-200 w-3/8 text-amber-950 bg-amber-50/40">
                          Suhuf (Lembaran Wahyu)
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      {materi.pengertianImanDanDalil.perbedaanKitabDanSuhuf.tabelPerbandingan.map((item, idx) => (
                        <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                          <td className="py-3 px-4 font-bold text-slate-900 bg-slate-50/50">{item.aspek}</td>
                          <td className="py-3 px-4 leading-relaxed">{item.kitabSuci}</td>
                          <td className="py-3 px-4 leading-relaxed">{item.suhuf}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Daftar Suhuf Para Nabi */}
                <div className="pt-2 space-y-3">
                  <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                    <Scroll className="w-3.5 h-3.5 text-indigo-600" />
                    Daftar Penerima Suhuf Berdasarkan Hadits Shahih
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {materi.pengertianImanDanDalil.perbedaanKitabDanSuhuf.daftarSuhufParaNabi.map((suhuf, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-indigo-300 transition-all space-y-1.5"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-xs text-slate-900">{suhuf.namaNabi}</span>
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-indigo-100 text-indigo-800">
                            {suhuf.jumlahSuhuf} Suhuf
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-600 leading-snug">{suhuf.keterangan}</p>
                        <span className="text-[10px] text-indigo-600 font-medium block">
                          Dalil: {suhuf.dalilRujukan}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Daftar Dalil Naqli Al-Qur'an dan Hadits */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-blue-100 shadow-sm space-y-6">
            <div className="flex items-center gap-2.5 pb-4 border-b border-slate-100">
              <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center text-sm">
                3
              </span>
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  Dalil Naqli Al-Qur'an dan Hadis Shahih tentang Iman kepada Kitabullah
                </h3>
                <p className="text-xs text-slate-500">
                  Lengkap dengan Lafaz Arab Berharakat, Audio Tilawah, Transliterasi, dan Kandungan Makna
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {materi.pengertianImanDanDalil.daftarDalilAlQuranDanHadits.map((dalil) => (
                <div
                  key={dalil.id}
                  className="rounded-2xl border border-slate-200 p-5 bg-slate-50/40 hover:bg-white hover:shadow-md transition-all space-y-4"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-200">
                    <span className="font-bold text-sm text-blue-900 flex items-center gap-2">
                      <BookMarked className="w-4 h-4 text-blue-700" />
                      {dalil.judul}
                    </span>
                    <div className="flex items-center gap-2">
                      {dalil.audioUrl && (
                        <button
                          onClick={() => handlePlayAudio(dalil.id, dalil.audioUrl)}
                          className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                            playingAudioId === dalil.id
                              ? 'bg-amber-500 text-amber-950 animate-pulse'
                              : 'bg-blue-100 text-blue-800 hover:bg-blue-200'
                          }`}
                        >
                          {playingAudioId === dalil.id ? (
                            <>
                              <VolumeX className="w-3.5 h-3.5" />
                              Stop Audio
                            </>
                          ) : (
                            <>
                              <Volume2 className="w-3.5 h-3.5" />
                              Putar Qari
                            </>
                          )}
                        </button>
                      )}
                      <button
                        onClick={() => copyToClipboard(`${dalil.teksArab}\n\nArtinya: "${dalil.terjemahan}"`, dalil.judul)}
                        className="px-2.5 py-1.5 rounded-xl text-xs font-medium text-slate-600 bg-white border border-slate-200 hover:bg-slate-100 flex items-center gap-1 cursor-pointer"
                        title="Salin Ayat & Arti"
                      >
                        <Copy className="w-3.5 h-3.5" />
                        Salin
                      </button>
                    </div>
                  </div>

                  {/* Teks Arab */}
                  <div className="p-4 sm:p-5 rounded-xl bg-white border border-slate-200 text-right">
                    <p className="font-arabic text-xl sm:text-2xl lg:text-3xl leading-loose text-slate-900 font-semibold select-all" dir="rtl">
                      {dalil.teksArab}
                    </p>
                  </div>

                  {/* Transliterasi & Terjemahan */}
                  <div className="space-y-2 text-xs sm:text-sm">
                    <p className="italic text-slate-600 font-serif leading-relaxed">
                      "{dalil.transliterasi}"
                    </p>
                    <p className="text-slate-800 leading-relaxed font-medium bg-blue-50/50 p-3 rounded-xl border border-blue-100/80">
                      <span className="font-bold text-blue-900">Artinya: </span>
                      {dalil.terjemahan}
                    </p>
                  </div>

                  {/* Kandungan Pokok */}
                  <div className="pt-2">
                    <span className="text-xs font-bold text-slate-700 block mb-1.5">
                      Kandungan Hukum & Hikmah Ayat:
                    </span>
                    <ul className="space-y-1">
                      {dalil.kandunganMakna.map((poin, pIdx) => (
                        <li key={pIdx} className="text-xs text-slate-600 flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                          <span>{poin}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ================= TAB 2: NAMA 4 KITAB & RASUL ================= */}
      {activeTab === 'nama-kitab-rasul' && (
        <div className="space-y-6">
          {/* Ringkasan Navigasi Cepat 4 Kitab */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {materi.namaKitabDanRasul.daftarKitab.map((k) => (
              <button
                key={k.id}
                onClick={() => setSelectedKitabId(k.id)}
                className={`p-4 rounded-2xl text-left transition-all border cursor-pointer flex flex-col justify-between ${
                  selectedKitabId === k.id
                    ? 'bg-blue-800 text-white shadow-lg border-blue-900 ring-2 ring-blue-500/50'
                    : 'bg-white text-slate-700 hover:bg-slate-50 border-slate-200'
                }`}
              >
                <div>
                  <span className="text-[11px] font-arabic block opacity-80 mb-0.5">{k.namaArab}</span>
                  <h4 className="font-black text-sm">{k.namaKitab}</h4>
                  <p className={`text-xs mt-1 ${selectedKitabId === k.id ? 'text-blue-200' : 'text-slate-500'}`}>
                    {k.rasulPenerima}
                  </p>
                </div>
                <span
                  className={`mt-3 text-[10px] px-2 py-0.5 rounded-md font-bold inline-block self-start ${
                    selectedKitabId === k.id ? 'bg-amber-400 text-amber-950' : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  {k.periodeWaktu.includes('SM') ? 'Sebelum Masehi' : 'Masehi'}
                </span>
              </button>
            ))}
          </div>

          {/* Kartu Detail Kitab Terpilih */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-blue-100 shadow-md space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${currentSelectedKitab.warnaAksen} text-white flex items-center justify-center font-bold text-lg shadow-md`}>
                  <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-black text-slate-900">{currentSelectedKitab.namaKitab}</h3>
                    <span className="text-base font-arabic text-blue-800 font-bold">{currentSelectedKitab.namaArab}</span>
                  </div>
                  <p className="text-xs text-slate-500">
                    Diturunkan kepada: <strong className="text-slate-800">{currentSelectedKitab.rasulPenerima}</strong> ({currentSelectedKitab.gelarRasul})
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 font-medium">
                  🌐 Bahasa: <strong>{currentSelectedKitab.bahasaAsli}</strong>
                </span>
                <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 font-medium">
                  👥 Sasaran: <strong>{currentSelectedKitab.kaumSasaran}</strong>
                </span>
                <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 font-medium">
                  📍 Tempat: <strong>{currentSelectedKitab.tempatDiturunkan}</strong>
                </span>
              </div>
            </div>

            {/* Dalil Kitab Terpilih */}
            <div className="rounded-2xl bg-blue-50/40 border border-blue-200/80 p-5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-blue-900 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  Dalil Naqli Al-Qur'an ({currentSelectedKitab.dalilAlQuran.surah})
                </span>
                <button
                  onClick={() =>
                    copyToClipboard(
                      `${currentSelectedKitab.dalilAlQuran.teksArab}\n\n(${currentSelectedKitab.dalilAlQuran.surah})\nArtinya: "${currentSelectedKitab.dalilAlQuran.terjemahan}"`,
                      currentSelectedKitab.dalilAlQuran.surah
                    )
                  }
                  className="px-2.5 py-1 text-xs text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 flex items-center gap-1 cursor-pointer"
                >
                  <Copy className="w-3 h-3" />
                  Salin
                </button>
              </div>

              <div className="p-4 rounded-xl bg-white border border-blue-100 text-right">
                <p className="font-arabic text-lg sm:text-xl lg:text-2xl leading-loose text-slate-900 font-semibold select-all" dir="rtl">
                  {currentSelectedKitab.dalilAlQuran.teksArab}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                <strong className="text-blue-950">Artinya: </strong>"{currentSelectedKitab.dalilAlQuran.terjemahan}"
              </p>
            </div>

            {/* Inti Ajaran Pokok */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <Layers className="w-4 h-4 text-blue-600" />
                Inti Pokok Ajaran {currentSelectedKitab.namaKitab}
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {currentSelectedKitab.ringkasanAjaranPokok}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {currentSelectedKitab.poinKunciAjaran.map((poin, pIdx) => (
                  <div
                    key={pIdx}
                    className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 flex items-start gap-2"
                  >
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span className="leading-snug">{poin}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Karakteristik Khas */}
            <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 text-xs sm:text-sm text-amber-950 flex items-start gap-2.5">
              <Lightbulb className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <strong className="font-bold">Karakteristik Khas & Perbedaan: </strong>
                {currentSelectedKitab.karakteristikKhas}
              </div>
            </div>
          </div>

          {/* Tabel Komparasi Rangkuman 4 Kitab */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-3">
            <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <Globe2 className="w-4 h-4 text-blue-600" />
              Tabel Perbandingan 4 Kitab Suci Allah Swt.
            </h4>
            <div className="overflow-x-auto rounded-2xl border border-slate-200">
              <table className="w-full text-left text-xs border-collapse">
                <thead className="bg-slate-100 text-slate-700 font-bold uppercase text-[11px]">
                  <tr>
                    <th className="py-3 px-3 border-b border-slate-200">Nama Kitab</th>
                    <th className="py-3 px-3 border-b border-slate-200">Rasul Penerima</th>
                    <th className="py-3 px-3 border-b border-slate-200">Masa Turun</th>
                    <th className="py-3 px-3 border-b border-slate-200">Bahasa Asli</th>
                    <th className="py-3 px-3 border-b border-slate-200">Kaum Sasaran</th>
                    <th className="py-3 px-3 border-b border-slate-200">Fokus Pokok</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {materi.namaKitabDanRasul.daftarKitab.map((k) => (
                    <tr key={k.id} className="hover:bg-blue-50/40 transition-colors">
                      <td className="py-3 px-3 font-bold text-slate-900">{k.namaKitab}</td>
                      <td className="py-3 px-3">{k.rasulPenerima}</td>
                      <td className="py-3 px-3">{k.periodeWaktu}</td>
                      <td className="py-3 px-3">{k.bahasaAsli}</td>
                      <td className="py-3 px-3 font-medium">{k.kaumSasaran}</td>
                      <td className="py-3 px-3 leading-snug">{k.karakteristikKhas}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* ================= TAB 3: FUNGSI & HIKMAH ================= */}
      {activeTab === 'fungsi-hikmah' && (
        <div className="space-y-6">
          {/* 5 Fungsi Utama Kitabullah */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-blue-100 shadow-sm space-y-6">
            <div className="flex items-center gap-2.5 pb-4 border-b border-slate-100">
              <span className="w-8 h-8 rounded-lg bg-blue-100 text-blue-800 font-bold flex items-center justify-center text-sm">
                1
              </span>
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  Lima Fungsi Utama Kitab-Kitab Allah bagi Kehidupan Manusia
                </h3>
                <p className="text-xs text-slate-500">
                  Landasan Filosofis dan Petunjuk Praktis dalam Keseharian
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {materi.fungsiDanHikmah.fungsiUtamaKitabullah.map((f, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl border border-slate-200 bg-slate-50/60 hover:bg-white hover:border-blue-300 hover:shadow-sm transition-all space-y-2.5"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-blue-700 text-white font-bold text-xs flex items-center justify-center">
                        {idx + 1}
                      </span>
                      <h4 className="font-bold text-sm text-slate-900">{f.namaFungsi}</h4>
                    </div>
                    <span className="text-xs px-2.5 py-0.5 rounded-full font-bold bg-blue-100 text-blue-800">
                      {f.dalilAyat}
                    </span>
                  </div>

                  <p className="font-arabic text-right text-base text-blue-900 font-semibold" dir="rtl">
                    {f.istilahQuran}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {f.penjelasan}
                  </p>

                  <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs text-slate-800 flex items-start gap-2">
                    <Sparkles className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-blue-950 font-bold">Aplikasi Nyata bagi Pelajar: </strong>
                      {f.aplikasiSiswa}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 5 Hikmah Beriman */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-blue-100 shadow-sm space-y-6">
            <div className="flex items-center gap-2.5 pb-4 border-b border-slate-100">
              <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center text-sm">
                2
              </span>
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  Hikmah Luhur Beriman kepada Kitab-Kitab Allah Swt.
                </h3>
                <p className="text-xs text-slate-500">
                  Pengaruh Positif terhadap Kesehatan Jiwa dan Integritas Budi Pekerti
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {materi.fungsiDanHikmah.hikmahBeriman.map((h, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl border border-slate-200 bg-white hover:border-emerald-300 hover:shadow-md transition-all flex flex-col justify-between space-y-3"
                >
                  <div className="space-y-2">
                    <h4 className="font-bold text-sm text-slate-900 flex items-center gap-2">
                      <Star className="w-4 h-4 text-amber-500" />
                      {h.poinHikmah}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {h.uraian}
                    </p>
                  </div>
                  <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-100 text-[11px] text-emerald-950 leading-snug">
                    <strong className="font-bold text-emerald-900">Dampak Kejiwaan: </strong>
                    {h.dampakKejiwaan}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ================= TAB 4: ISI POKOK AJARAN ================= */}
      {activeTab === 'isi-pokok' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-blue-100 shadow-sm space-y-6">
          <div className="flex items-center gap-2.5 pb-4 border-b border-slate-100">
            <span className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-800 font-bold flex items-center justify-center text-sm">
              4
            </span>
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                Enam Dimensi Isi Pokok Ajaran Kitab-Kitab Allah Swt.
              </h3>
              <p className="text-xs text-slate-500">
                Benang Merah Risalah Samawi Lintas Zaman Para Nabi
              </p>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            {materi.isiPokokAjaran.pengantar}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {materi.isiPokokAjaran.enamDimensiAjaran.map((dim, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-indigo-300 hover:shadow-sm transition-all space-y-2.5"
              >
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-sm text-indigo-950">{dim.dimensi}</h4>
                  <span className="text-sm font-arabic font-bold text-indigo-800">{dim.namaArab}</span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {dim.penjelasan}
                </p>

                <div className="pt-2 border-t border-slate-200 text-xs text-slate-800">
                  <span className="font-bold text-indigo-900">Contoh Implementasi Pelajar: </span>
                  {dim.contohImplementasi}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ================= TAB 5: KEISTIMEWAAN AL-QUR'AN ================= */}
      {activeTab === 'keistimewaan-quran' && (
        <div className="space-y-6">
          {/* Card Kedudukan Al-Muhaimin */}
          <div className="bg-gradient-to-br from-emerald-900 via-teal-900 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl space-y-5 border border-emerald-700/50">
            <div className="flex items-center justify-between pb-3 border-b border-emerald-700/40">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-7 h-7 text-amber-400" />
                <div>
                  <h3 className="text-lg font-black text-white">
                    Al-Qur'an sebagai "Al-Muhaimin" (Penyempurna & Pengoreksi Wahyu)
                  </h3>
                  <span className="text-xs text-emerald-200">
                    Berdasarkan Firman Allah Swt. dalam {materi.keistimewaanAlQuran.kedudukanAlMuhaimin.ayatRujukan}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setExpandedMuhaimin(!expandedMuhaimin)}
                className="p-1.5 rounded-lg bg-white/10 text-white hover:bg-white/20 cursor-pointer"
              >
                {expandedMuhaimin ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
            </div>

            {expandedMuhaimin && (
              <div className="space-y-4">
                <div className="p-4 bg-white/10 rounded-2xl border border-white/15 text-xs sm:text-sm text-emerald-50 leading-relaxed">
                  <strong className="text-amber-300 font-bold block mb-1">Peran Korektif & Penjaga Wahyu:</strong>
                  {materi.keistimewaanAlQuran.kedudukanAlMuhaimin.peranKorektif}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {materi.keistimewaanAlQuran.kedudukanAlMuhaimin.maknaAlMuhaimin.map((makna, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-black/20 border border-emerald-500/20 text-xs text-emerald-100 leading-snug flex items-start gap-2"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span>{makna}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* 6 Keistimewaan Utama */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-blue-100 shadow-sm space-y-6">
            <div className="flex items-center gap-2.5 pb-4 border-b border-slate-100">
              <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center text-sm">
                5
              </span>
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  Enam Keistimewaan Monumental Al-Qur'anul Karim
                </h3>
                <p className="text-xs text-slate-500">
                  Mukjizat Abadi yang Menjadikannya Kitab Suci Teragung Sepanjang Masa
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {materi.keistimewaanAlQuran.enamKeistimewaanUtama.map((istimewa) => (
                <div
                  key={istimewa.nomor}
                  className="p-5 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-emerald-300 hover:shadow-sm transition-all space-y-3"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h4 className="font-bold text-sm text-slate-900 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-emerald-700 text-white font-bold text-xs flex items-center justify-center">
                        {istimewa.nomor}
                      </span>
                      {istimewa.judul}
                    </h4>
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                      {istimewa.dalil}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {istimewa.penjelasanMendalam}
                  </p>

                  <div className="p-3 bg-white rounded-xl border border-emerald-100 text-xs text-slate-800">
                    <strong className="text-emerald-900 font-bold">Bukti Nyata Sejarah & Sains: </strong>
                    {istimewa.buktiNyata}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ================= TAB 6: GENERASI PECINTA AL-QUR'AN TOLERAN ================= */}
      {activeTab === 'generasi-toleran' && (
        <div className="space-y-6">
          {/* 4 Pilar Kecintaan */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-blue-100 shadow-sm space-y-6">
            <div className="flex items-center gap-2.5 pb-4 border-b border-slate-100">
              <span className="w-8 h-8 rounded-lg bg-blue-100 text-blue-800 font-bold flex items-center justify-center text-sm">
                1
              </span>
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  Empat Pilar Karakter Generasi Pecinta Al-Qur'an
                </h3>
                <p className="text-xs text-slate-500">
                  Langkah Terpadu Membangun Kedekatan Spiritual dengan Kalamullah
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {materi.generasiPecintaQuranToleran.empatPilarKecintaan.map((pilar, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl border border-slate-200 bg-white hover:border-blue-300 hover:shadow-md transition-all space-y-2.5 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-sm text-blue-950">{pilar.pilar}</h4>
                      <span className="text-xs font-arabic text-blue-800 font-bold">{pilar.istilahArab}</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {pilar.deskripsi}
                    </p>
                  </div>
                  <div className="p-3 bg-blue-50/60 rounded-xl border border-blue-100 text-xs text-blue-950">
                    <strong className="font-bold text-blue-900">Praktik Harian Pelajar: </strong>
                    {pilar.panduanPraktikPelajar}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 5 Prinsip Toleransi Qur'ani */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-blue-100 shadow-sm space-y-6">
            <div className="flex items-center gap-2.5 pb-4 border-b border-slate-100">
              <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center text-sm">
                2
              </span>
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  Lima Prinsip Toleransi (Tasamuh) Berbasis Tuntunan Al-Qur'an
                </h3>
                <p className="text-xs text-slate-500">
                  Menjaga Kerukunan Antarumat Beragama Tanpa Mengorbankan Akidah
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {materi.generasiPecintaQuranToleran.limaPrinsipToleransiQurani.map((prinsip, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl border border-slate-200 bg-slate-50/60 hover:bg-white hover:border-emerald-300 hover:shadow-sm transition-all space-y-2"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h4 className="font-bold text-sm text-slate-900 flex items-center gap-2">
                      <HeartHandshake className="w-4 h-4 text-emerald-600" />
                      {prinsip.prinsip}
                    </h4>
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                      {prinsip.dalil}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {prinsip.konteksKekinian}
                  </p>

                  <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs text-slate-800">
                    <strong className="text-emerald-900 font-bold">Sikap Nyata di Sekolah / Pergaulan: </strong>
                    {prinsip.sikapSiswaDiSekolah}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Studi Kasus Toleransi Nyata */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-blue-100 shadow-sm space-y-5">
            <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100">
              <span className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 font-bold flex items-center justify-center text-sm">
                3
              </span>
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  Studi Kasus Dilema Toleransi bagi Pelajar SMP
                </h3>
                <p className="text-xs text-slate-500">
                  Panduan Menentukan Sikap Benar vs Sikap Keliru
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {materi.generasiPecintaQuranToleran.studiKasusToleransi.map((sk, idx) => (
                <div key={idx} className="p-4 rounded-2xl border border-slate-200 bg-slate-50/40 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded-md font-bold text-[10px] bg-slate-200 text-slate-800">
                      Kasus {idx + 1}
                    </span>
                    <h5 className="font-bold text-xs text-slate-900">{sk.kasus}</h5>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-xs">
                    <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950">
                      <strong className="font-bold text-emerald-900 flex items-center gap-1 mb-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        Sikap yang Dianjurkan:
                      </strong>
                      {sk.analisisToleran}
                    </div>
                    <div className="p-2.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-950">
                      <strong className="font-bold text-rose-900 flex items-center gap-1 mb-0.5">
                        <VolumeX className="w-3.5 h-3.5 text-rose-600" />
                        Sikap yang Dilarang:
                      </strong>
                      {sk.laranganSikap}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Checklist Refleksi Mandiri */}
          <div className="bg-gradient-to-r from-blue-900 to-indigo-950 rounded-3xl p-6 text-white shadow-md space-y-4">
            <h4 className="text-sm font-bold text-white flex items-center gap-2">
              <ListChecks className="w-4 h-4 text-amber-400" />
              Lembar Refleksi Diri: Apakah Aku Sudah Menjadi Pelajar Qur'ani yang Toleran?
            </h4>
            <div className="space-y-2">
              {[
                'Aku rutin membaca Al-Qur\'an setiap hari minimal 1 lembar sehabis Magrib atau Subuh.',
                'Aku meyakini dengan sepenuh hati bahwa 4 kitab suci (Taurat, Zabur, Injil, Al-Qur\'an) berasal dari Allah Swt.',
                'Aku tidak pernah mengejek teman atau tetangga yang berbeda agama dan suku.',
                'Aku menolak ajakan mengikuti ibadah ritual agama lain secara santun tanpa merusak pertemanan.',
                'Aku siap bekerja sama dan tolong-menolong dengan semua orang dalam urusan kebersihan dan kemanusiaan.'
              ].map((item, idx) => (
                <label
                  key={idx}
                  onClick={() =>
                    setChecklistRefleksi(prev => ({
                      ...prev,
                      [idx]: !prev[idx]
                    }))
                  }
                  className="p-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-xs text-white flex items-center gap-3 cursor-pointer transition-all"
                >
                  <input
                    type="checkbox"
                    checked={!!checklistRefleksi[idx]}
                    onChange={() => {}}
                    className="w-4 h-4 rounded text-amber-500 focus:ring-0 cursor-pointer"
                  />
                  <span className={checklistRefleksi[idx] ? 'line-through opacity-70' : ''}>{item}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ================= TAB 7: EVALUASI HOTS (5 SOAL) ================= */}
      {activeTab === 'kuis-hots' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-blue-100 shadow-sm space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-100">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 font-bold flex items-center justify-center text-sm">
                7
              </span>
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  Evaluasi Mandiri HOTS Bab 2 (5 Soal Analisis)
                </h3>
                <p className="text-xs text-slate-500">
                  Uji Pemahaman Mendalam Konsep Iman kepada Kitab & Karakter Toleransi
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  setUserAnswers({});
                  setShowKuisResult(false);
                  showToast('Kuis berhasil direset!', 'info');
                }}
                className="px-3 py-1.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-50 flex items-center gap-1.5 cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                Ulangi Kuis
              </button>
              <button
                onClick={() => {
                  setShowKuisResult(true);
                  showToast('Hasil evaluasi berhasil dihitung!', 'success');
                }}
                className="px-4 py-1.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-amber-950 text-xs font-bold shadow-sm cursor-pointer"
              >
                Periksa Nilai Saya
              </button>
            </div>
          </div>

          {/* Banner Skor jika sudah submit */}
          {showKuisResult && (
            <div className={`p-5 rounded-2xl border text-center space-y-1.5 ${
              calculatedScore >= 80
                ? 'bg-emerald-50 border-emerald-200 text-emerald-950'
                : 'bg-amber-50 border-amber-200 text-amber-950'
            }`}>
              <div className="text-2xl font-black">
                Skor Evaluasi: {calculatedScore} / 100
              </div>
              <p className="text-xs">
                {calculatedScore >= 80
                  ? 'Mumtaz! Kamu telah menguasai materi iman kepada kitabullah dan keistimewaan Al-Qur\'an dengan sangat luar biasa!'
                  : 'Tetap semangat! Pelajari kembali pembahasan di bawah ini untuk memperdalam pemahamanmu.'}
              </p>
            </div>
          )}

          {/* Daftar Soal */}
          <div className="space-y-6">
            {materi.kuisHots.map((soal) => {
              const selectedOpt = userAnswers[soal.id];
              const isSubmitted = showKuisResult;

              return (
                <div
                  key={soal.id}
                  className="p-5 sm:p-6 rounded-2xl border border-slate-200 bg-slate-50/50 space-y-4"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-700 text-white text-xs font-bold flex items-center justify-center">
                      {soal.nomor}
                    </span>
                    <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Studi Kasus HOTS
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                    "{soal.kasus}"
                  </div>

                  <p className="font-bold text-xs sm:text-sm text-slate-900 leading-relaxed">
                    {soal.pertanyaan}
                  </p>

                  <div className="space-y-2">
                    {soal.pilihan.map((pil, pilIdx) => {
                      const isChosen = selectedOpt === pilIdx;
                      const isKey = soal.kunciJawaban === pilIdx;

                      let btnStyle = 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100';

                      if (isSubmitted) {
                        if (isKey) {
                          btnStyle = 'bg-emerald-100 border-emerald-400 text-emerald-950 font-bold';
                        } else if (isChosen && !isKey) {
                          btnStyle = 'bg-rose-100 border-rose-400 text-rose-950 font-medium';
                        }
                      } else if (isChosen) {
                        btnStyle = 'bg-blue-100 border-blue-400 text-blue-950 font-bold ring-1 ring-blue-400';
                      }

                      return (
                        <button
                          key={pilIdx}
                          onClick={() => {
                            if (!showKuisResult) {
                              setUserAnswers(prev => ({
                                ...prev,
                                [soal.id]: pilIdx
                              }));
                            }
                          }}
                          className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm transition-all flex items-start gap-2.5 cursor-pointer ${btnStyle}`}
                        >
                          <span className="w-5 h-5 rounded-full border border-current text-xs flex items-center justify-center shrink-0 mt-0.5">
                            {String.fromCharCode(65 + pilIdx)}
                          </span>
                          <span className="leading-snug">{pil}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Pembahasan jika sudah dicek */}
                  {isSubmitted && (
                    <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-xs text-slate-800 space-y-1">
                      <div className="flex items-center gap-1.5 font-bold text-blue-900">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        Pembahasan & Kunci Jawaban: {String.fromCharCode(65 + soal.kunciJawaban)}
                      </div>
                      <p className="leading-relaxed">{soal.pembahasan}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
