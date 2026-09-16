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
  Eye,
  EyeOff,
  PenTool,
  Scale,
  Compass,
  FileText,
  Volume2
} from 'lucide-react';
import {
  MATERI_KELAS_8_SEM_1_BAB_1,
  HukumTajwidLamDanRa,
  MufradatAyat
} from '../../data/materiKelas8Sem1Bab1Data';
import { useToast } from '../common/Toast';

interface Props {
  onAskAI: (prompt: string) => void;
}

type Bab1K8SubTab =
  | 'ayat-hujurat'
  | 'ayat-baqarah'
  | 'tajwid-lam-ra'
  | 'hadits-terkait'
  | '4-keterampilan'
  | 'kuis-hots';

export const BukuPaiKelas8Sem1Bab1Detail: React.FC<Props> = ({ onAskAI }) => {
  const { showToast } = useToast();
  const [activeTab, setActiveTab] = useState<Bab1K8SubTab>('ayat-hujurat');

  // Filter Tajwid Table
  const [filterTajwidAyat, setFilterTajwidAyat] = useState<'Semua' | 'Q.S. Al-Hujurat: 13' | 'Q.S. Al-Baqarah: 256'>('Semua');
  const [filterTajwidKategori, setFilterTajwidKategori] = useState<string>('Semua');

  // Interactive Hafalan Mode (Hide/Show Arabic text for self-testing)
  const [hideArabicHujurat, setHideArabicHujurat] = useState<boolean>(false);
  const [hideArabicBaqarah, setHideArabicBaqarah] = useState<boolean>(false);

  // Kuis HOTS State
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});
  const [showKuisResult, setShowKuisResult] = useState(false);

  // Refleksi Kasus Toleransi Checklist
  const [refleksiSikapChecked, setRefleksiSikapChecked] = useState<Record<number, boolean>>({});

  // Copy helper
  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    showToast(`${label} berhasil disalin!`, 'success');
  };

  const materi = MATERI_KELAS_8_SEM_1_BAB_1;

  // Filtered Tajwid items
  const filteredTajwidList = materi.hukumTajwidLengkap.daftarPenerapanPadaAyat.filter(item => {
    const matchAyat = filterTajwidAyat === 'Semua' || item.ayatRujukan === filterTajwidAyat;
    const matchKategori = filterTajwidKategori === 'Semua' || item.kategori === filterTajwidKategori;
    return matchAyat && matchKategori;
  });

  // Score calculation
  const calculatedScore = showKuisResult
    ? Math.round(
        (materi.kuisHots.reduce((acc, q) => {
          return userAnswers[q.id] === q.kunciJawaban ? acc + 1 : acc;
        }, 0) /
          materi.kuisHots.length) *
          100
      )
    : 0;

  return (
    <div className="space-y-6 text-slate-800">
      {/* ================= HEADER HERO ================= */}
      <div className="bg-gradient-to-r from-emerald-900 via-teal-800 to-cyan-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden border border-emerald-700/50">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
        <div className="relative z-10">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-400 text-amber-950 flex items-center gap-1.5 shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              Kelas VIII • Semester 1 • Bab 1
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-emerald-700/60 text-emerald-100 border border-emerald-500/30">
              Elemen: {materi.elemenCp}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-teal-700/60 text-teal-100 border border-teal-500/30">
              Fase D (SMP/MTs)
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white mb-2">
            {materi.judulBab}
          </h2>
          <p className="text-emerald-200 text-sm sm:text-base font-normal max-w-4xl leading-relaxed mb-4">
            {materi.subJudul}
          </p>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/15 text-xs sm:text-sm text-emerald-50 leading-relaxed max-w-4xl">
            <p className="font-semibold text-amber-300 mb-1 flex items-center gap-1.5">
              <Lightbulb className="w-4 h-4" />
              Apersepsi Pembelajaran:
            </p>
            {materi.pengantar.apersepsi}
          </div>

          {/* Prompt AI Button Bar */}
          <div className="mt-5 flex flex-wrap gap-2 pt-2 border-t border-emerald-700/40">
            <button
              onClick={() =>
                onAskAI(
                  'Jelaskan secara mendalam tentang kandungan Q.S. Al-Hujurat ayat 13, Q.S. Al-Baqarah ayat 256, serta kaidah tajwid lam dan ra beserta contohnya.'
                )
              }
              className="px-3.5 py-2 bg-amber-400 hover:bg-amber-300 text-amber-950 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all shadow-md cursor-pointer"
            >
              <Bot className="w-4 h-4" />
              Tanya AI: Ringkasan Bab 1 Toleransi
            </button>
            <button
              onClick={() =>
                onAskAI(
                  'Berikan latihan cara membedakan Lam Jalalah Tafkhim dan Tarqiq serta Ra Tafkhim dan Tarqiq pada Q.S. Al-Hujurat 13 dan Q.S. Al-Baqarah 256.'
                )
              }
              className="px-3.5 py-2 bg-white/15 hover:bg-white/25 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <Bot className="w-4 h-4 text-emerald-300" />
              Tanya AI: Kaidah Tajwid Lam & Ra\'
            </button>
            <button
              onClick={() =>
                onAskAI(
                  'Bagaimana batasan toleransi dalam Islam antara ranah akidah dan ranah muamalah kemanusiaan menurut Q.S. Al-Baqarah 256?'
                )
              }
              className="px-3.5 py-2 bg-white/15 hover:bg-white/25 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <Bot className="w-4 h-4 text-amber-300" />
              Tanya AI: Batasan Toleransi Akidah vs Sosial
            </button>
          </div>
        </div>
      </div>

      {/* ================= SUB-NAVIGATION TABS ================= */}
      <div className="flex overflow-x-auto no-scrollbar gap-2 pb-1 border-b border-slate-200">
        <button
          onClick={() => setActiveTab('ayat-hujurat')}
          className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
            activeTab === 'ayat-hujurat'
              ? 'bg-emerald-600 text-white shadow-md'
              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          1. Q.S. Al-Hujurāt: 13
        </button>

        <button
          onClick={() => setActiveTab('ayat-baqarah')}
          className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
            activeTab === 'ayat-baqarah'
              ? 'bg-emerald-600 text-white shadow-md'
              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          2. Q.S. Al-Baqarah: 256
        </button>

        <button
          onClick={() => setActiveTab('tajwid-lam-ra')}
          className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
            activeTab === 'tajwid-lam-ra'
              ? 'bg-emerald-600 text-white shadow-md'
              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
          }`}
        >
          <Sparkles className="w-4 h-4 text-amber-500" />
          3. Tajwid Lam & Ra\'
        </button>

        <button
          onClick={() => setActiveTab('hadits-terkait')}
          className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
            activeTab === 'hadits-terkait'
              ? 'bg-emerald-600 text-white shadow-md'
              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
          }`}
        >
          <HeartHandshake className="w-4 h-4" />
          4. Hadis-Hadis Toleransi
        </button>

        <button
          onClick={() => setActiveTab('4-keterampilan')}
          className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
            activeTab === '4-keterampilan'
              ? 'bg-emerald-600 text-white shadow-md'
              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
          }`}
        >
          <PenTool className="w-4 h-4" />
          5. Panduan 4 Keterampilan
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
          6. Evaluasi HOTS (5 Soal)
        </button>
      </div>

      {/* ================= TAB 1: Q.S. AL-HUJURAT: 13 ================= */}
      {activeTab === 'ayat-hujurat' && (
        <div className="space-y-6">
          {/* Ayat Box */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-emerald-100 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-5 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center text-sm">
                  13
                </span>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Q.S. Al-Hujurāt [49]: Ayat 13
                  </h3>
                  <p className="text-xs text-slate-500">
                    Surah Madaniyyah • Prinsip Kesetaraan Derajat & Keragaman Manusia
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setHideArabicHujurat(!hideArabicHujurat)}
                  className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center gap-1.5 transition-all cursor-pointer"
                  title="Uji hafalan dengan menutup/membuka teks Arab"
                >
                  {hideArabicHujurat ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
                  {hideArabicHujurat ? 'Tampilkan Teks Arab' : 'Tutup Teks (Uji Hafalan)'}
                </button>
                <button
                  onClick={() =>
                    copyToClipboard(
                      `${materi.ayat1.teksArab}\n\nArtinya: "${materi.ayat1.terjemahanResmi}" (Q.S. Al-Hujurat: 13)`,
                      'Ayat & Terjemah'
                    )
                  }
                  className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-emerald-50 hover:bg-emerald-100 text-emerald-800 flex items-center gap-1.5 transition-all cursor-pointer"
                >
                  <Copy className="w-3.5 h-3.5" />
                  Salin Teks
                </button>
              </div>
            </div>

            {/* Arabic Text */}
            {!hideArabicHujurat ? (
              <div className="bg-emerald-50/50 rounded-2xl p-6 sm:p-8 border border-emerald-100/70 mb-5">
                <p className="text-2xl sm:text-3xl md:text-4xl text-right font-serif leading-loose sm:leading-loose md:leading-loose text-slate-900 font-medium tracking-wide">
                  {materi.ayat1.teksArab}
                </p>
              </div>
            ) : (
              <div className="bg-slate-50 rounded-2xl p-8 border border-dashed border-slate-300 text-center mb-5">
                <p className="text-sm font-bold text-slate-500 mb-1">
                  [ Mode Uji Hafalan Aktif ]
                </p>
                <p className="text-xs text-slate-400">
                  Cobalah lantunkan ayat ini dari ingatanmu secara tartil sebelum membuka kembali teks Arab.
                </p>
              </div>
            )}

            {/* Transliterasi & Terjemah */}
            <div className="space-y-4 text-sm sm:text-base">
              <div className="bg-slate-50 rounded-2xl p-4 sm:p-5 border border-slate-100">
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block mb-1">
                  Transliterasi Latin:
                </span>
                <p className="italic text-slate-700 leading-relaxed font-serif">
                  "{materi.ayat1.transliterasi}"
                </p>
              </div>

              <div className="bg-emerald-50/40 rounded-2xl p-4 sm:p-5 border border-emerald-100">
                <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block mb-1">
                  Terjemahan Resmi Kemenag RI:
                </span>
                <p className="text-slate-800 leading-relaxed font-medium">
                  "{materi.ayat1.terjemahanResmi}"
                </p>
              </div>
            </div>

            {/* Asbabun Nuzul */}
            <div className="mt-6 bg-amber-50 rounded-2xl p-5 border border-amber-200/70">
              <h4 className="text-sm font-bold text-amber-900 flex items-center gap-2 mb-2">
                <Lightbulb className="w-4 h-4 text-amber-600" />
                Asbabun Nuzul (Sebab Turunnya Ayat):
              </h4>
              <p className="text-xs sm:text-sm text-amber-950 leading-relaxed">
                {materi.ayat1.asbabunNuzul}
              </p>
            </div>
          </div>

          {/* Kandungan Tafsir */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Brain className="w-5 h-5 text-emerald-600" />
              Kandungan Makna & Tafsir Q.S. Al-Hujurāt: 13
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {materi.ayat1.kandunganTafsir.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 hover:bg-emerald-50/40 transition-all rounded-2xl p-4 sm:p-5 border border-slate-200/80 hover:border-emerald-200"
                >
                  <div className="flex items-center gap-2.5 mb-2">
                    <span className="w-6 h-6 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center">
                      {idx + 1}
                    </span>
                    <h4 className="font-bold text-sm text-slate-900">
                      {item.poin}
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.penjelasan}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Tabel Mufradat */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <BookmarkCheck className="w-5 h-5 text-teal-600" />
                Tabel Mufradat (Kosakata Pilihan) Q.S. Al-Hujurāt: 13
              </h3>
              <span className="text-xs text-slate-400 font-medium">
                {materi.ayat1.mufradat.length} Kosakata Kunci
              </span>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-200">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-emerald-800 text-white font-semibold text-xs uppercase tracking-wider">
                  <tr>
                    <th className="p-3.5">No</th>
                    <th className="p-3.5 text-right font-serif">Lafaz Arab</th>
                    <th className="p-3.5">Transliterasi</th>
                    <th className="p-3.5">Arti Kata</th>
                    <th className="p-3.5">Makna & Pelajaran</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {materi.ayat1.mufradat.map((m, idx) => (
                    <tr key={idx} className="hover:bg-emerald-50/30 transition-colors">
                      <td className="p-3.5 font-bold text-slate-400">{idx + 1}</td>
                      <td className="p-3.5 font-serif text-lg font-bold text-slate-900 text-right whitespace-nowrap">
                        {m.kataArab}
                      </td>
                      <td className="p-3.5 font-medium text-emerald-800 italic whitespace-nowrap">
                        {m.transliterasi}
                      </td>
                      <td className="p-3.5 font-bold text-slate-800">
                        {m.arti}
                      </td>
                      <td className="p-3.5 text-slate-600 text-xs">
                        {m.maknaPelajaran}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* ================= TAB 2: Q.S. AL-BAQARAH: 256 ================= */}
      {activeTab === 'ayat-baqarah' && (
        <div className="space-y-6">
          {/* Ayat Box */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-emerald-100 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-5 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-teal-100 text-teal-800 font-bold flex items-center justify-center text-sm">
                  256
                </span>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Q.S. Al-Baqarah [2]: Ayat 256
                  </h3>
                  <p className="text-xs text-slate-500">
                    Surah Madaniyyah • Prinsip Kebebasan Beragama & Tali Keimanan yang Kokoh
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setHideArabicBaqarah(!hideArabicBaqarah)}
                  className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center gap-1.5 transition-all cursor-pointer"
                  title="Uji hafalan dengan menutup/membuka teks Arab"
                >
                  {hideArabicBaqarah ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
                  {hideArabicBaqarah ? 'Tampilkan Teks Arab' : 'Tutup Teks (Uji Hafalan)'}
                </button>
                <button
                  onClick={() =>
                    copyToClipboard(
                      `${materi.ayat2.teksArab}\n\nArtinya: "${materi.ayat2.terjemahanResmi}" (Q.S. Al-Baqarah: 256)`,
                      'Ayat & Terjemah'
                    )
                  }
                  className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-emerald-50 hover:bg-emerald-100 text-emerald-800 flex items-center gap-1.5 transition-all cursor-pointer"
                >
                  <Copy className="w-3.5 h-3.5" />
                  Salin Teks
                </button>
              </div>
            </div>

            {/* Arabic Text */}
            {!hideArabicBaqarah ? (
              <div className="bg-teal-50/40 rounded-2xl p-6 sm:p-8 border border-teal-100 mb-5">
                <p className="text-2xl sm:text-3xl md:text-4xl text-right font-serif leading-loose sm:leading-loose md:leading-loose text-slate-900 font-medium tracking-wide">
                  {materi.ayat2.teksArab}
                </p>
              </div>
            ) : (
              <div className="bg-slate-50 rounded-2xl p-8 border border-dashed border-slate-300 text-center mb-5">
                <p className="text-sm font-bold text-slate-500 mb-1">
                  [ Mode Uji Hafalan Aktif ]
                </p>
                <p className="text-xs text-slate-400">
                  Cobalah lantunkan ayat 256 ini dari ingatanmu secara tartil sebelum membuka kembali teks Arab.
                </p>
              </div>
            )}

            {/* Transliterasi & Terjemah */}
            <div className="space-y-4 text-sm sm:text-base">
              <div className="bg-slate-50 rounded-2xl p-4 sm:p-5 border border-slate-100">
                <span className="text-xs font-bold text-teal-700 uppercase tracking-wider block mb-1">
                  Transliterasi Latin:
                </span>
                <p className="italic text-slate-700 leading-relaxed font-serif">
                  "{materi.ayat2.transliterasi}"
                </p>
              </div>

              <div className="bg-teal-50/30 rounded-2xl p-4 sm:p-5 border border-teal-100">
                <span className="text-xs font-bold text-teal-900 uppercase tracking-wider block mb-1">
                  Terjemahan Resmi Kemenag RI:
                </span>
                <p className="text-slate-800 leading-relaxed font-medium">
                  "{materi.ayat2.terjemahanResmi}"
                </p>
              </div>
            </div>

            {/* Asbabun Nuzul */}
            <div className="mt-6 bg-amber-50 rounded-2xl p-5 border border-amber-200/70">
              <h4 className="text-sm font-bold text-amber-900 flex items-center gap-2 mb-2">
                <Lightbulb className="w-4 h-4 text-amber-600" />
                Asbabun Nuzul (Sebab Turunnya Ayat):
              </h4>
              <p className="text-xs sm:text-sm text-amber-950 leading-relaxed">
                {materi.ayat2.asbabunNuzul}
              </p>
            </div>
          </div>

          {/* Kandungan Tafsir */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Brain className="w-5 h-5 text-teal-600" />
              Kandungan Makna & Tafsir Q.S. Al-Baqarah: 256
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {materi.ayat2.kandunganTafsir.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 hover:bg-teal-50/40 transition-all rounded-2xl p-4 sm:p-5 border border-slate-200/80 hover:border-teal-200"
                >
                  <div className="flex items-center gap-2.5 mb-2">
                    <span className="w-6 h-6 rounded-full bg-teal-700 text-white font-bold text-xs flex items-center justify-center">
                      {idx + 1}
                    </span>
                    <h4 className="font-bold text-sm text-slate-900">
                      {item.poin}
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.penjelasan}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Tabel Mufradat */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <BookmarkCheck className="w-5 h-5 text-teal-600" />
                Tabel Mufradat (Kosakata Pilihan) Q.S. Al-Baqarah: 256
              </h3>
              <span className="text-xs text-slate-400 font-medium">
                {materi.ayat2.mufradat.length} Kosakata Kunci
              </span>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-200">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-teal-900 text-white font-semibold text-xs uppercase tracking-wider">
                  <tr>
                    <th className="p-3.5">No</th>
                    <th className="p-3.5 text-right font-serif">Lafaz Arab</th>
                    <th className="p-3.5">Transliterasi</th>
                    <th className="p-3.5">Arti Kata</th>
                    <th className="p-3.5">Makna & Pelajaran</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {materi.ayat2.mufradat.map((m, idx) => (
                    <tr key={idx} className="hover:bg-teal-50/30 transition-colors">
                      <td className="p-3.5 font-bold text-slate-400">{idx + 1}</td>
                      <td className="p-3.5 font-serif text-lg font-bold text-slate-900 text-right whitespace-nowrap">
                        {m.kataArab}
                      </td>
                      <td className="p-3.5 font-medium text-teal-800 italic whitespace-nowrap">
                        {m.transliterasi}
                      </td>
                      <td className="p-3.5 font-bold text-slate-800">
                        {m.arti}
                      </td>
                      <td className="p-3.5 text-slate-600 text-xs">
                        {m.maknaPelajaran}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* ================= TAB 3: TAJWID LAM & RA' ================= */}
      {activeTab === 'tajwid-lam-ra' && (
        <div className="space-y-6">
          {/* Panduan Kaidah Cards */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-500" />
              Kaidah Teori Tajwid: Hukum Lam dan Ra\'
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mb-6">
              Pelajari kaidah dasar perbedaan bunyi tebal (Tafkhim / tebal berbobot) dan tipis (Tarqiq / tipis mendatar) pada Lam dan Ra\'.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              {materi.hukumTajwidLengkap.panduanKaidah.map((k, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 rounded-2xl p-5 border border-slate-200 flex flex-col justify-between"
                >
                  <div>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 uppercase tracking-wider inline-block mb-2">
                      Kaidah {idx + 1}
                    </span>
                    <h4 className="font-bold text-slate-900 text-sm mb-3">
                      {k.topik}
                    </h4>

                    <div className="space-y-2.5 text-xs text-slate-700">
                      <div className="p-3 bg-amber-50/80 rounded-xl border border-amber-200/60">
                        <strong className="text-amber-950 font-bold block mb-1">
                          🟢 Kaidah Tafkhim (Tebal):
                        </strong>
                        <p className="leading-relaxed">{k.kaidahTafkhim}</p>
                      </div>

                      <div className="p-3 bg-teal-50/80 rounded-xl border border-teal-200/60">
                        <strong className="text-teal-950 font-bold block mb-1">
                          🔵 Kaidah Tarqiq (Tipis):
                        </strong>
                        <p className="leading-relaxed">{k.kaidahTarqiq}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 pt-3 border-t border-slate-200 text-[11px] text-slate-500">
                    <strong className="text-slate-700">Cara Bunyi:</strong> {k.caraMembunyikan}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Filter Bar & Tabel Penerapan Pada Kedua Ayat */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
              <div>
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <BookmarkCheck className="w-5 h-5 text-emerald-600" />
                  Daftar Penerapan Hukum Tajwid pada Q.S. Al-Hujurat: 13 & Q.S. Al-Baqarah: 256
                </h3>
                <p className="text-xs text-slate-500">
                  Ditemukan {filteredTajwidList.length} lafaz berhukum Lam & Ra\'
                </p>
              </div>

              {/* Filters */}
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <select
                  value={filterTajwidAyat}
                  onChange={e => setFilterTajwidAyat(e.target.value as any)}
                  className="px-3 py-1.5 bg-slate-100 rounded-xl border border-slate-300 text-slate-700 font-semibold cursor-pointer"
                >
                  <option value="Semua">Semua Ayat</option>
                  <option value="Q.S. Al-Hujurat: 13">Q.S. Al-Hujurat: 13</option>
                  <option value="Q.S. Al-Baqarah: 256">Q.S. Al-Baqarah: 256</option>
                </select>

                <select
                  value={filterTajwidKategori}
                  onChange={e => setFilterTajwidKategori(e.target.value)}
                  className="px-3 py-1.5 bg-slate-100 rounded-xl border border-slate-300 text-slate-700 font-semibold cursor-pointer"
                >
                  <option value="Semua">Semua Kategori</option>
                  <option value="Lam Jalalah Tafkhim">Lam Jalalah Tafkhim</option>
                  <option value="Lam Jalalah Tarqiq">Lam Jalalah Tarqiq</option>
                  <option value="Lam Ta'rif Syamsiyah">Lam Ta'rif Syamsiyah</option>
                  <option value="Lam Ta'rif Qamariyah">Lam Ta'rif Qamariyah</option>
                  <option value="Ra Tafkhim">Ra' Tafkhim</option>
                  <option value="Ra Tarqiq">Ra' Tarqiq</option>
                </select>
              </div>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-200">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-900 text-white font-semibold text-xs uppercase tracking-wider">
                  <tr>
                    <th className="p-3.5">No</th>
                    <th className="p-3.5 text-right font-serif">Lafaz</th>
                    <th className="p-3.5">Ayat Rujukan</th>
                    <th className="p-3.5">Nama Hukum Tajwid</th>
                    <th className="p-3.5">Alasan Kaidah</th>
                    <th className="p-3.5">Cara Membaca</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredTajwidList.map((item, idx) => (
                    <tr key={idx} className="hover:bg-slate-50 transition-colors">
                      <td className="p-3.5 font-bold text-slate-400">{idx + 1}</td>
                      <td className="p-3.5 font-serif text-xl font-bold text-slate-900 text-right whitespace-nowrap">
                        {item.lafaz}
                      </td>
                      <td className="p-3.5 font-medium text-emerald-800 whitespace-nowrap">
                        {item.ayatRujukan}
                      </td>
                      <td className="p-3.5 font-bold whitespace-nowrap">
                        <span
                          className={`px-2.5 py-1 rounded-full text-xs ${
                            item.kategori.includes('Tafkhim')
                              ? 'bg-amber-100 text-amber-900'
                              : item.kategori.includes('Tarqiq')
                              ? 'bg-teal-100 text-teal-900'
                              : 'bg-indigo-100 text-indigo-900'
                          }`}
                        >
                          {item.hukum}
                        </span>
                      </td>
                      <td className="p-3.5 text-slate-700 text-xs leading-relaxed">
                        {item.alasanKaidah}
                      </td>
                      <td className="p-3.5 text-slate-600 text-xs italic">
                        {item.caraMembaca}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* ================= TAB 4: HADIS-HADIS TOLERANSI ================= */}
      {activeTab === 'hadits-terkait' && (
        <div className="space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
              <HeartHandshake className="w-5 h-5 text-rose-500" />
              Kumpulan Hadis Sahih tentang Toleransi & Kerukunan
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mb-6">
              Hadis-hadis Rasulullah saw. yang memperkuat dalil Al-Qur'an mengenai penghargaan hak asasi manusia, kesetaraan derajat, dan perlindungan warga negara non-muslim.
            </p>

            <div className="space-y-6">
              {materi.haditsTerkait.map((h, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 hover:border-emerald-300 transition-all"
                >
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200">
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full">
                      Hadis #{idx + 1} • {h.perawi}
                    </span>
                    <button
                      onClick={() =>
                        copyToClipboard(
                          `${h.matanArab}\n\nArtinya: "${h.terjemahan}" (${h.perawi})`,
                          'Hadis'
                        )
                      }
                      className="px-2.5 py-1 text-xs font-medium text-slate-500 hover:text-emerald-700 flex items-center gap-1 cursor-pointer"
                    >
                      <Copy className="w-3.5 h-3.5" /> Salin
                    </button>
                  </div>

                  {/* Matan Arab */}
                  <div className="bg-white rounded-xl p-5 border border-slate-100 mb-4">
                    <p className="text-xl sm:text-2xl font-serif text-right leading-loose text-slate-900 font-medium">
                      {h.matanArab}
                    </p>
                  </div>

                  {/* Transliterasi & Terjemah */}
                  <div className="space-y-2 mb-4 text-xs sm:text-sm">
                    <p className="italic text-slate-600 font-serif">
                      "{h.transliterasi}"
                    </p>
                    <p className="font-bold text-slate-800 leading-relaxed">
                      Artinya: "{h.terjemahan}"
                    </p>
                  </div>

                  {/* Syarah & Relevansi */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-3 border-t border-slate-200/60 text-xs">
                    <div className="bg-emerald-50/50 p-3 rounded-xl border border-emerald-100">
                      <strong className="text-emerald-950 font-bold block mb-1">
                        📖 Syarah (Penjelasan Ulama):
                      </strong>
                      <p className="text-slate-700">{h.syarahSingkat}</p>
                    </div>

                    <div className="bg-amber-50/50 p-3 rounded-xl border border-amber-100">
                      <strong className="text-amber-950 font-bold block mb-1">
                        🌱 Penerapan Karakter Pelajar:
                      </strong>
                      <p className="text-slate-700">{h.relevansiKehidupan}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ================= TAB 5: PANDUAN 4 KETERAMPILAN ================= */}
      {activeTab === '4-keterampilan' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 1. Membaca Tartil */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-2 mb-4 text-emerald-700 font-bold text-base">
                <Volume2 className="w-5 h-5" />
                1. Keterampilan Membaca Tartil
              </div>
              <p className="text-xs text-slate-500 mb-3">
                Langkah sistematis melatih kefasihan membaca sesuai makhraj dan hukum tajwid:
              </p>
              <ol className="space-y-2 text-xs sm:text-sm text-slate-700 list-decimal list-inside leading-relaxed mb-4">
                {materi.panduan4Keterampilan.membacaTartil.langkah.map((l, idx) => (
                  <li key={idx} className="pl-1">
                    {l}
                  </li>
                ))}
              </ol>
              <div className="bg-emerald-50 rounded-2xl p-3.5 border border-emerald-100 text-xs text-emerald-900">
                <strong className="font-bold block mb-1">Adab Tilawah:</strong>
                <ul className="list-disc list-inside space-y-1">
                  {materi.panduan4Keterampilan.membacaTartil.adabMembaca.map((a, idx) => (
                    <li key={idx}>{a}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 2. Menghafal Metode Tikrar */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-2 mb-4 text-teal-700 font-bold text-base">
                <Brain className="w-5 h-5" />
                2. Keterampilan Menghafal ({materi.panduan4Keterampilan.menghafalCepat.metode})
              </div>
              <p className="text-xs text-slate-500 mb-3">
                Metode pengulangan berjenjang yang terbukti memudahkan otak mengingat hafalan jangka panjang:
              </p>
              <div className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed mb-4">
                {materi.panduan4Keterampilan.menghafalCepat.langkahLangkah.map((s, idx) => (
                  <div key={idx} className="p-2.5 bg-slate-50 rounded-xl border border-slate-100">
                    {s}
                  </div>
                ))}
              </div>
              <div className="bg-amber-50 rounded-2xl p-3.5 border border-amber-200 text-xs text-amber-950">
                <strong className="font-bold block mb-1">💡 Tips Murajaah Mantap:</strong>
                {materi.panduan4Keterampilan.menghafalCepat.tipsMurajaah}
              </div>
            </div>

            {/* 3. Menulis Kaidah Khat */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-2 mb-4 text-indigo-700 font-bold text-base">
                <PenTool className="w-5 h-5" />
                3. Keterampilan Menulis Khat Kaligrafi
              </div>
              <p className="text-xs text-slate-500 mb-3">
                Kaidah menulis huruf Arab bergaris agar tulisan indah, rapi, dan mudah dibaca:
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700 list-disc list-inside leading-relaxed mb-4">
                {materi.panduan4Keterampilan.menulisKhatKaidah.kaidahPenulisan.map((k, idx) => (
                  <li key={idx}>{k}</li>
                ))}
              </ul>
              <div className="bg-indigo-50 rounded-2xl p-3.5 border border-indigo-100 text-xs text-indigo-900">
                <strong className="font-bold block mb-1">Fokus Huruf Penting:</strong>
                <ul className="list-disc list-inside space-y-1">
                  {materi.panduan4Keterampilan.menulisKhatKaidah.hurufPenting.map((h, idx) => (
                    <li key={idx}>{h}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 4. Menjelaskan & Refleksi Kasus Toleransi */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-2 mb-4 text-amber-700 font-bold text-base">
                <Scale className="w-5 h-5" />
                4. Keterampilan Menjelaskan Batasan Toleransi
              </div>
              <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200 text-xs text-slate-800 leading-relaxed mb-4">
                <strong className="font-bold text-emerald-800 block mb-1">
                  Definisi Tasamuh:
                </strong>
                {materi.panduan4Keterampilan.menjelaskanRefleksiToleransi.definisiToleransiIslam}
              </div>

              <div className="space-y-2.5 text-xs text-slate-700 mb-4">
                {materi.panduan4Keterampilan.menjelaskanRefleksiToleransi.batasToleransiAkidahVsMuamalah.map(
                  (b, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-slate-50 rounded-xl border border-slate-100 leading-relaxed"
                    >
                      {b}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Lembar Refleksi Studi Kasus Siswa */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
              <Users className="w-5 h-5 text-emerald-600" />
              Lembar Aksi Nyata & Refleksi Kasus Siswa di Lingkungan Sekolah
            </h3>
            <p className="text-xs text-slate-500 mb-5">
              Tandai checklist sikap terpuji yang siap kamu praktikkan ketika menghadapi situasi berikut:
            </p>

            <div className="space-y-3">
              {materi.panduan4Keterampilan.menjelaskanRefleksiToleransi.studiKasusToleransi.map(
                (item, idx) => (
                  <div
                    key={idx}
                    onClick={() =>
                      setRefleksiSikapChecked(prev => ({
                        ...prev,
                        [idx]: !prev[idx]
                      }))
                    }
                    className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-start gap-3 ${
                      refleksiSikapChecked[idx]
                        ? 'bg-emerald-50 border-emerald-300'
                        : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded-lg mt-0.5 flex items-center justify-center transition-all ${
                        refleksiSikapChecked[idx]
                          ? 'bg-emerald-600 text-white'
                          : 'border-2 border-slate-300 bg-white'
                      }`}
                    >
                      {refleksiSikapChecked[idx] && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>
                    <div className="text-xs sm:text-sm">
                      <p className="font-bold text-slate-900 mb-1">
                        Kasus {idx + 1}: {item.situasi}
                      </p>
                      <p className="text-emerald-900 font-medium">
                        👉 Sikap Siswa yang Tepat: {item.sikapSiswa}
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      )}

      {/* ================= TAB 6: KUIS HOTS ================= */}
      {activeTab === 'kuis-hots' && (
        <div className="space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-6 border-b border-slate-100">
              <div>
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <Award className="w-5 h-5 text-amber-500" />
                  Evaluasi Mandiri Soal HOTS (Higher Order Thinking Skills)
                </h3>
                <p className="text-xs text-slate-500">
                  Uji pemahamanmu dengan 5 butir soal penalaran dan analisis tajwid serta sikap toleransi.
                </p>
              </div>

              {showKuisResult && (
                <div className="flex items-center gap-3">
                  <div className="px-4 py-2 bg-emerald-100 text-emerald-900 rounded-2xl font-black text-sm">
                    Skor: {calculatedScore} / 100
                  </div>
                  <button
                    onClick={() => {
                      setUserAnswers({});
                      setShowKuisResult(false);
                    }}
                    className="px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" /> Ulangi
                  </button>
                </div>
              )}
            </div>

            {/* Questions List */}
            <div className="space-y-6">
              {materi.kuisHots.map(q => {
                const isAnswered = userAnswers[q.id] !== undefined;
                const selectedOpt = userAnswers[q.id];
                const isCorrect = selectedOpt === q.kunciJawaban;

                return (
                  <div
                    key={q.id}
                    className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3"
                  >
                    <div className="flex items-start gap-2.5">
                      <span className="w-6 h-6 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        {q.nomor}
                      </span>
                      <div className="text-xs sm:text-sm">
                        <p className="text-slate-500 italic mb-1.5 leading-relaxed bg-white p-3 rounded-xl border border-slate-100">
                          {q.kasus}
                        </p>
                        <p className="font-bold text-slate-900 leading-relaxed">
                          {q.pertanyaan}
                        </p>
                      </div>
                    </div>

                    {/* Options */}
                    <div className="space-y-2 pt-1 pl-8">
                      {q.pilihan.map((opt, optIdx) => {
                        const isChosen = selectedOpt === optIdx;
                        let optStyle = 'bg-white border-slate-200 hover:border-slate-300 text-slate-700';

                        if (showKuisResult) {
                          if (optIdx === q.kunciJawaban) {
                            optStyle = 'bg-emerald-50 border-emerald-400 text-emerald-950 font-bold';
                          } else if (isChosen && !isCorrect) {
                            optStyle = 'bg-rose-50 border-rose-400 text-rose-950';
                          }
                        } else if (isChosen) {
                          optStyle = 'bg-emerald-100 border-emerald-500 text-emerald-950 font-semibold';
                        }

                        return (
                          <button
                            key={optIdx}
                            disabled={showKuisResult}
                            onClick={() =>
                              setUserAnswers(prev => ({
                                ...prev,
                                [q.id]: optIdx
                              }))
                            }
                            className={`w-full p-3 rounded-xl border text-left text-xs sm:text-sm flex items-center gap-3 transition-all cursor-pointer ${optStyle}`}
                          >
                            <span className="w-6 h-6 rounded-lg bg-slate-100 text-slate-700 font-bold text-xs flex items-center justify-center shrink-0">
                              {String.fromCharCode(65 + optIdx)}
                            </span>
                            <span className="leading-relaxed">{opt}</span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Pembahasan */}
                    {showKuisResult && (
                      <div
                        className={`mt-3 p-4 rounded-xl text-xs sm:text-sm leading-relaxed border ${
                          isCorrect
                            ? 'bg-emerald-50/70 border-emerald-200 text-emerald-950'
                            : 'bg-rose-50/70 border-rose-200 text-rose-950'
                        }`}
                      >
                        <div className="flex items-center gap-1.5 font-bold mb-1">
                          {isCorrect ? (
                            <>
                              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                              <span className="text-emerald-800">Jawabanmu Benar!</span>
                            </>
                          ) : (
                            <>
                              <XCircle className="w-4 h-4 text-rose-600" />
                              <span className="text-rose-800">
                                Jawabanmu Kurang Tepat (Kunci: {String.fromCharCode(65 + q.kunciJawaban)})
                              </span>
                            </>
                          )}
                        </div>
                        <p className="text-slate-700">{q.pembahasan}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Action Bottom */}
            {!showKuisResult && (
              <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
                <button
                  disabled={Object.keys(userAnswers).length < materi.kuisHots.length}
                  onClick={() => setShowKuisResult(true)}
                  className={`px-6 py-3 rounded-2xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all ${
                    Object.keys(userAnswers).length === materi.kuisHots.length
                      ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg cursor-pointer'
                      : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                  }`}
                >
                  <ShieldCheck className="w-4 h-4" />
                  Periksa Jawaban Sekarang ({Object.keys(userAnswers).length}/{materi.kuisHots.length})
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
