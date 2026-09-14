import React, { useState, useMemo, useRef } from 'react';
import {
  BookOpen,
  Volume2,
  Play,
  Pause,
  Copy,
  Check,
  Search,
  Bot,
  HelpCircle,
  Sparkles,
  ChevronRight,
  Bookmark,
  Share2,
  GraduationCap,
  Layers,
  HeartHandshake,
  CheckCircle2,
  XCircle,
  RotateCcw,
  VolumeX,
  FileText,
  ListOrdered,
  BookMarked
} from 'lucide-react';
import { MATERI_KELAS_VII_SEM_1, MufradatWord } from '../../data/materiKelas7Sem1Data';
import { useToast } from '../common/Toast';

interface Props {
  onAskAI: (prompt: string) => void;
}

type SubTabType = 'nisa' | 'anfal' | 'hadits' | 'aliflam' | 'mufradat' | 'latihan';

export const BukuPaiKelas7Sem1Detail: React.FC<Props> = ({ onAskAI }) => {
  const { showToast } = useToast();
  const [activeSubTab, setActiveSubTab] = useState<SubTabType>('nisa');

  // Audio Playback
  const [currentAudioUrl, setCurrentAudioUrl] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Mufradat State
  const [mufradatSource, setMufradatSource] = useState<'all' | 'nisa' | 'anfal'>('all');
  const [mufradatSearch, setMufradatSearch] = useState('');
  const [mufradatViewMode, setMufradatViewMode] = useState<'table' | 'cards'>('table');
  const [revealedCardId, setRevealedCardId] = useState<string | null>(null);

  // Tajwid Quiz State
  const [quizAnswers, setQuizAnswers] = useState<Record<string, 'Alif Lam Qomariyah' | 'Alif Lam Syamsiyah'>>({});
  const [showQuizResults, setShowQuizResults] = useState(false);

  // Handle Audio
  const handlePlayAudio = (url?: string) => {
    if (!url) {
      showToast('Audio tilawah belum tersedia untuk ayat ini', 'info');
      return;
    }

    if (currentAudioUrl === url) {
      audioRef.current?.pause();
      setCurrentAudioUrl(null);
      return;
    }

    if (audioRef.current) {
      audioRef.current.pause();
    }

    const audio = new Audio(url);
    audioRef.current = audio;
    setCurrentAudioUrl(url);

    audio.play().catch(() => {
      showToast('Gagal memutar audio tilawah. Periksa koneksi internet.', 'error');
      setCurrentAudioUrl(null);
    });

    audio.onended = () => {
      setCurrentAudioUrl(null);
    };
  };

  const copyText = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    showToast(`${label} berhasil disalin!`, 'success');
  };

  // Filtered Mufradat
  const filteredMufradat = useMemo(() => {
    let list: MufradatWord[] = [];
    if (mufradatSource === 'all') {
      list = [...MATERI_KELAS_VII_SEM_1.mufradatLengkap.anNisa136, ...MATERI_KELAS_VII_SEM_1.mufradatLengkap.alAnfal2_4];
    } else if (mufradatSource === 'nisa') {
      list = MATERI_KELAS_VII_SEM_1.mufradatLengkap.anNisa136;
    } else {
      list = MATERI_KELAS_VII_SEM_1.mufradatLengkap.alAnfal2_4;
    }

    if (!mufradatSearch.trim()) return list;

    const q = mufradatSearch.toLowerCase();
    return list.filter(
      item =>
        item.arabic.includes(q) ||
        item.latin.toLowerCase().includes(q) ||
        item.meaning.toLowerCase().includes(q) ||
        (item.tajwidHint && item.tajwidHint.toLowerCase().includes(q))
    );
  }, [mufradatSource, mufradatSearch]);

  const handleQuizAnswer = (soalId: string, answer: 'Alif Lam Qomariyah' | 'Alif Lam Syamsiyah') => {
    setQuizAnswers(prev => ({ ...prev, [soalId]: answer }));
  };

  const resetQuiz = () => {
    setQuizAnswers({});
    setShowQuizResults(false);
  };

  return (
    <div className="bg-white rounded-3xl border border-emerald-500/40 shadow-sm overflow-hidden space-y-6">
      {/* ========================================================================= */}
      {/* HERO BANNER BUKU PELAJARAN PAI KELAS VII SEMESTER 1 */}
      {/* ========================================================================= */}
      <div className="bg-gradient-to-r from-emerald-800 via-teal-800 to-emerald-900 p-6 sm:p-8 text-white relative overflow-hidden">
        {/* Subtle decorative circles */}
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-48 h-48 bg-emerald-600/20 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 -mb-10 w-40 h-40 bg-teal-500/20 rounded-full blur-xl pointer-events-none" />

        <div className="relative z-10 space-y-3 max-w-3xl">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-emerald-500/30 text-emerald-100 text-xs font-bold border border-emerald-400/30 backdrop-blur-xs flex items-center gap-1.5">
              <GraduationCap className="w-3.5 h-3.5" />
              Buku Pelajaran PAI & Budi Pekerti
            </span>
            <span className="px-3 py-1 rounded-full bg-amber-400/20 text-amber-200 text-xs font-bold border border-amber-400/30">
              Kelas VII • Semester 1
            </span>
            <span className="px-3 py-1 rounded-full bg-teal-400/20 text-teal-200 text-xs font-semibold border border-teal-400/30">
              Fase D (Kurikulum Merdeka 2026)
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-white leading-tight">
            {MATERI_KELAS_VII_SEM_1.babTitle}
          </h2>

          <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
            {MATERI_KELAS_VII_SEM_1.pengantar}
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-semibold text-emerald-200">Pokok Bahasan Utama:</span>
            {[
              '1. Q.S. An-Nisā’: 136',
              '2. Q.S. Al-Anfāl: 2-4',
              '3. Hadis Pentingnya Iman',
              '4. Hukum Bacaan Alif Lam',
              '5. Mufradat Perkata'
            ].map((tag, idx) => (
              <span
                key={idx}
                className="text-[11px] px-2 py-0.5 rounded-md bg-white/10 text-white font-medium border border-white/10"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* NAVIGATION TABS (5 MATERI LENGKAP) */}
      {/* ========================================================================= */}
      <div className="px-5 sm:px-8">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-200 scrollbar-none">
          {[
            { id: 'nisa', label: '1. Q.S. An-Nisā’: 136', icon: BookOpen },
            { id: 'anfal', label: '2. Q.S. Al-Anfāl: 2-4', icon: BookMarked },
            { id: 'hadits', label: '3. Hadis Pentingnya Iman', icon: FileText },
            { id: 'aliflam', label: '4. Hukum Bacaan Alif Lam', icon: Layers },
            { id: 'mufradat', label: '5. Mufradat & Terjemah Perkata', icon: ListOrdered },
            { id: 'latihan', label: '6. Kuis Tajwid & Refleksi', icon: Sparkles }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeSubTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveSubTab(tab.id as SubTabType)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap flex items-center gap-2 transition-all cursor-pointer ${
                  isActive
                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20 scale-102'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* TAB CONTENT 1: Q.S. AN-NISA' AYAT 136 */}
      {/* ========================================================================= */}
      {activeSubTab === 'nisa' && (
        <div className="px-5 sm:px-8 pb-8 space-y-6">
          <div className="bg-emerald-50/50 border border-emerald-200 rounded-2xl p-5 sm:p-6 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-emerald-200/80">
              <div>
                <span className="px-2.5 py-1 rounded-md bg-emerald-600 text-white font-bold text-xs">
                  Q.S. An-Nisā’ [4]: 136
                </span>
                <h3 className="font-black text-slate-900 text-lg mt-1">
                  Seruan Memperkokoh Rukun Iman dan Ancaman Kafir
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handlePlayAudio(MATERI_KELAS_VII_SEM_1.ayatAnNisa.ayatItem.audioUrl)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                    currentAudioUrl === MATERI_KELAS_VII_SEM_1.ayatAnNisa.ayatItem.audioUrl
                      ? 'bg-emerald-700 text-white'
                      : 'bg-white text-emerald-800 border border-emerald-300 hover:bg-emerald-100'
                  }`}
                >
                  {currentAudioUrl === MATERI_KELAS_VII_SEM_1.ayatAnNisa.ayatItem.audioUrl ? (
                    <>
                      <Pause className="w-3.5 h-3.5" />
                      <span>Jeda Murottal</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5" />
                      <span>Putar Audio</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() =>
                    copyText(
                      `${MATERI_KELAS_VII_SEM_1.ayatAnNisa.ayatItem.arabic}\n\n${MATERI_KELAS_VII_SEM_1.ayatAnNisa.ayatItem.latin}\n\n"${MATERI_KELAS_VII_SEM_1.ayatAnNisa.ayatItem.translationKemenag}" (Q.S. An-Nisa: 136)`,
                      'Teks Q.S. An-Nisa: 136'
                    )
                  }
                  className="p-2 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-slate-900 transition-all text-xs"
                  title="Salin Ayat & Terjemah"
                >
                  <Copy className="w-4 h-4" />
                </button>

                <button
                  onClick={() =>
                    onAskAI(
                      'Tolong jelaskan secara rinci asbabun nuzul dan kandungan akidah Q.S. An-Nisa ayat 136 untuk pelajaran PAI SMP Kelas 7!'
                    )
                  }
                  className="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-xs transition-all"
                >
                  <Bot className="w-3.5 h-3.5" />
                  <span>Tanya AI</span>
                </button>
              </div>
            </div>

            {/* Arabic Big Display */}
            <div className="bg-white rounded-2xl p-6 border border-emerald-100 shadow-xs text-right space-y-3">
              <p
                className="font-arabic text-2xl sm:text-3xl lg:text-4xl text-slate-900 font-semibold leading-[2.3] tracking-wide"
                dir="rtl"
              >
                {MATERI_KELAS_VII_SEM_1.ayatAnNisa.ayatItem.arabic}
              </p>
            </div>

            {/* Latin Transliteration */}
            <div className="bg-white/80 rounded-xl p-4 border border-emerald-100">
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 block mb-1">
                Transliterasi Latin:
              </span>
              <p className="text-xs sm:text-sm text-slate-700 font-medium italic leading-relaxed">
                {MATERI_KELAS_VII_SEM_1.ayatAnNisa.ayatItem.latin}
              </p>
            </div>

            {/* Translation Kemenag RI */}
            <div className="bg-white rounded-xl p-4 border border-emerald-100 space-y-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                Terjemahan Resmi Kemenag RI:
              </span>
              <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-normal">
                "{MATERI_KELAS_VII_SEM_1.ayatAnNisa.ayatItem.translationKemenag}"
              </p>
            </div>

            {/* Asbabun Nuzul */}
            <div className="bg-amber-50/80 border border-amber-200 rounded-xl p-4 space-y-2">
              <span className="text-xs font-black text-amber-900 flex items-center gap-1.5">
                <Bookmark className="w-4 h-4 text-amber-700" />
                Asbabun Nuzul (Sebab Turunnya Ayat):
              </span>
              <p className="text-xs text-amber-900/90 leading-relaxed">
                {MATERI_KELAS_VII_SEM_1.ayatAnNisa.ayatItem.asbabunNuzul}
              </p>
            </div>

            {/* Kandungan Pokok Ayat */}
            <div className="bg-white rounded-xl p-5 border border-emerald-200/70 space-y-3">
              <h4 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-emerald-600" />
                Kandungan Pokok Keimanan dalam Q.S. An-Nisā’: 136
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                {MATERI_KELAS_VII_SEM_1.ayatAnNisa.ayatItem.kandunganPoin.map((pt, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-[11px] shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span className="leading-relaxed">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB CONTENT 2: Q.S. AL-ANFAL AYAT 2-4 */}
      {/* ========================================================================= */}
      {activeSubTab === 'anfal' && (
        <div className="px-5 sm:px-8 pb-8 space-y-6">
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-slate-200">
              <div>
                <span className="px-2.5 py-1 rounded-md bg-teal-600 text-white font-bold text-xs">
                  Q.S. Al-Anfāl [8]: 2 - 4
                </span>
                <h3 className="font-black text-slate-900 text-lg mt-1">
                  Lima Ciri Orang Beriman Sejati (Mukmin Hakiki) & Balasannya
                </h3>
              </div>
              <button
                onClick={() =>
                  onAskAI(
                    'Jelaskan 5 karakteristik mukmin hakiki menurut Q.S. Al-Anfal ayat 2-4 dan bagaimana cara siswa SMP mempraktikkannya!'
                  )
                }
                className="px-3 py-1.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-xs transition-all self-start sm:self-auto"
              >
                <Bot className="w-3.5 h-3.5" />
                <span>Konsultasi AI</span>
              </button>
            </div>

            {/* Verses 2, 3, 4 */}
            <div className="space-y-4">
              {MATERI_KELAS_VII_SEM_1.ayatAlAnfal.ayatList.map((ay) => {
                const isPlaying = currentAudioUrl === ay.audioUrl;
                return (
                  <div
                    key={ay.verseNumber}
                    className="bg-white rounded-2xl border border-slate-200 p-5 space-y-3 shadow-xs hover:border-teal-400 transition-all"
                  >
                    <div className="flex items-center justify-between gap-3 pb-2 border-b border-slate-100">
                      <div className="flex items-center gap-2">
                        <span className="w-7 h-7 rounded-lg bg-teal-100 text-teal-800 flex items-center justify-center font-bold text-xs">
                          {ay.verseNumber}
                        </span>
                        <span className="font-bold text-slate-700 text-xs">
                          Q.S. Al-Anfāl Ayat {ay.verseNumber}
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => handlePlayAudio(ay.audioUrl)}
                          className={`p-2 rounded-lg text-xs font-semibold flex items-center gap-1 transition-all ${
                            isPlaying
                              ? 'bg-teal-600 text-white'
                              : 'bg-slate-100 hover:bg-teal-50 text-slate-700'
                          }`}
                          title="Dengarkan Tilawah"
                        >
                          {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                          <span className="hidden sm:inline">{isPlaying ? 'Jeda' : 'Tilawah'}</span>
                        </button>

                        <button
                          onClick={() =>
                            copyText(
                              `${ay.arabic}\n\n${ay.latin}\n\n"${ay.translationKemenag}" (Q.S. Al-Anfal: ${ay.verseNumber})`,
                              `Ayat ${ay.verseNumber}`
                            )
                          }
                          className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 transition-all text-xs"
                          title="Salin Ayat"
                        >
                          <Copy className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    {/* Arabic Text */}
                    <div className="text-right py-2">
                      <p
                        className="font-arabic text-2xl sm:text-3xl text-slate-900 font-semibold leading-[2.2] tracking-wide"
                        dir="rtl"
                      >
                        {ay.arabic}
                      </p>
                    </div>

                    {/* Latin */}
                    <p className="text-xs sm:text-sm font-medium text-teal-800 italic">
                      {ay.latin}
                    </p>

                    {/* Translation */}
                    <div className="pt-2 border-t border-slate-100 text-xs sm:text-sm text-slate-700 leading-relaxed">
                      <span className="font-semibold text-slate-900">Artinya: </span>
                      {ay.translationKemenag}
                    </div>

                    {/* Tafsir Ringkas */}
                    <div className="bg-slate-50 rounded-xl p-3 text-xs text-slate-600 space-y-1">
                      <span className="font-bold text-slate-800 block">Tafsir Wajiz:</span>
                      <p>{ay.tafsirWajiz}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Lima Karakteristik Mukmin Sejati Card Grid */}
            <div className="bg-gradient-to-br from-teal-50 to-emerald-50 border border-teal-200 rounded-2xl p-6 space-y-4 mt-6">
              <h4 className="font-black text-slate-900 text-base flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-teal-600" />
                5 Ciri-Ciri Utama Orang Beriman Sejati (Mukmin Hakiki):
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {MATERI_KELAS_VII_SEM_1.ayatAlAnfal.limaCiriMukminHakiki.map((ciri) => (
                  <div
                    key={ciri.nomor}
                    className="bg-white rounded-xl p-4 border border-teal-200 shadow-xs space-y-2 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="w-6 h-6 rounded-full bg-teal-600 text-white font-bold text-xs flex items-center justify-center">
                          {ciri.nomor}
                        </span>
                        <span className="text-[11px] font-bold text-teal-700 font-arabic text-right">
                          {ciri.istilahArab}
                        </span>
                      </div>
                      <h5 className="font-bold text-slate-900 text-xs sm:text-sm">
                        {ciri.judul}
                      </h5>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        {ciri.penjelasan}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-slate-100 mt-2">
                      <span className="text-[10px] font-bold text-emerald-800 block uppercase">
                        Aksi Nyata Siswa SMP:
                      </span>
                      <p className="text-[11px] text-emerald-900/90 italic mt-0.5">
                        "{ciri.relevansiSiswa}"
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 3 Keutamaan / Janji Balasan bagi Mukmin Hakiki */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 space-y-3 shadow-xs">
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-500" />
                Tiga Balasan Mulia bagi Mukmin Sejati (Q.S. Al-Anfāl: 4):
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {MATERI_KELAS_VII_SEM_1.ayatAlAnfal.keutamaanMukmin.map((k, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200 space-y-1">
                    <span className="font-arabic text-base font-bold text-amber-950 block">
                      {k.istilahArab}
                    </span>
                    <p className="font-bold text-xs text-amber-900">{k.arti}</p>
                    <p className="text-[11px] text-amber-800 leading-snug">{k.keterangan}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB CONTENT 3: HADIS-HADIS PENTINGNYA IMAN */}
      {/* ========================================================================= */}
      {activeSubTab === 'hadits' && (
        <div className="px-5 sm:px-8 pb-8 space-y-6">
          {/* Tiga Pilar Iman Banner */}
          <div className="bg-slate-900 text-white rounded-2xl p-6 space-y-4">
            <div>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-bold text-xs border border-emerald-400/30">
                Konsep Akidah Ahlussunnah
              </span>
              <h3 className="text-lg font-black text-white mt-1">
                Tiga Pilar Kesempurnaan Iman (Definisi Hakiki Iman)
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                Menurut kesepakatan para ulama, iman bukanlah sekadar pengakuan lisan, melainkan perpaduan utuh dari tiga dimensi:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                MATERI_KELAS_VII_SEM_1.haditsPentingnyaIman.tigaPilarIman.tashdiq,
                MATERI_KELAS_VII_SEM_1.haditsPentingnyaIman.tigaPilarIman.iqrar,
                MATERI_KELAS_VII_SEM_1.haditsPentingnyaIman.tigaPilarIman.amal
              ].map((pilar, idx) => (
                <div key={idx} className="bg-slate-800/80 rounded-xl p-4 border border-slate-700 space-y-2">
                  <span className="text-base font-arabic font-bold text-emerald-400 block">
                    {pilar.arab}
                  </span>
                  <p className="text-xs font-bold text-white">{pilar.latin}</p>
                  <p className="text-[11px] font-semibold text-emerald-200">"{pilar.arti}"</p>
                  <p className="text-[11px] text-slate-300 leading-relaxed">{pilar.uraian}</p>
                </div>
              ))}
            </div>
          </div>

          {/* List Hadits */}
          <div className="space-y-5">
            {MATERI_KELAS_VII_SEM_1.haditsPentingnyaIman.daftarHadits.map((hadits, idx) => (
              <div
                key={hadits.id}
                className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs space-y-4 hover:border-emerald-400 transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
                  <div>
                    <span className="px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 font-bold text-xs">
                      Hadis #{idx + 1}
                    </span>
                    <h4 className="font-bold text-slate-900 text-base mt-1">
                      {hadits.title}
                    </h4>
                    <p className="text-xs text-slate-500">
                      Perawi: <span className="font-semibold text-slate-700">{hadits.narrator}</span> • Rujukan:{' '}
                      <span className="font-semibold text-emerald-700">{hadits.kitabRef}</span>
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() =>
                        copyText(
                          `${hadits.arabic}\n\n${hadits.latin}\n\n"${hadits.translation}" (${hadits.kitabRef})`,
                          hadits.title
                        )
                      }
                      className="px-2.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs font-semibold flex items-center gap-1"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      <span>Salin</span>
                    </button>

                    <button
                      onClick={() =>
                        onAskAI(
                          `Jelaskan syarah ringkas hadis tentang: "${hadits.title}" (${hadits.kitabRef}) untuk siswa SMP!`
                        )
                      }
                      className="px-2.5 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-semibold flex items-center gap-1"
                    >
                      <Bot className="w-3.5 h-3.5" />
                      <span>Tanya AI</span>
                    </button>
                  </div>
                </div>

                {/* Hadits Arabic */}
                <div className="bg-slate-50 rounded-xl p-5 text-right">
                  <p
                    className="font-arabic text-xl sm:text-2xl text-slate-900 font-semibold leading-[2.2]"
                    dir="rtl"
                  >
                    {hadits.arabic}
                  </p>
                </div>

                {/* Latin */}
                <p className="text-xs sm:text-sm text-emerald-800 font-medium italic">
                  {hadits.latin}
                </p>

                {/* Translation */}
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-800 leading-relaxed">
                  <span className="font-bold text-slate-900">Terjemahan: </span>
                  {hadits.translation}
                </div>

                {/* Hikmah & Pelajaran */}
                <div className="bg-emerald-50/50 border border-emerald-100 rounded-xl p-4 space-y-2">
                  <span className="text-xs font-bold text-emerald-900 flex items-center gap-1.5">
                    <HeartHandshake className="w-4 h-4 text-emerald-600" />
                    Pelajaran & Hikmah untuk Siswa:
                  </span>
                  <ul className="list-disc list-inside space-y-1 text-xs text-emerald-900/90">
                    {hadits.hikmah.map((h, i) => (
                      <li key={i} className="leading-relaxed">{h}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB CONTENT 4: HUKUM BACAAN ALIF LAM (AL-TA'RIF) */}
      {/* ========================================================================= */}
      {activeSubTab === 'aliflam' && (
        <div className="px-5 sm:px-8 pb-8 space-y-6">
          {/* Pengertian Box */}
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5 space-y-2">
            <span className="text-xs font-bold text-blue-900 uppercase tracking-wider flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-blue-600" />
              Kaidah Ilmu Tajwid: Hukum Alif Lam (Al-Ta'rif)
            </span>
            <p className="text-xs sm:text-sm text-blue-950 leading-relaxed">
              {MATERI_KELAS_VII_SEM_1.hukumAlifLam.pengertianUmum}
            </p>
          </div>

          {/* Two Columns: Qomariyah vs Syamsiyah */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* ALIF LAM QOMARIYAH */}
            <div className="bg-white rounded-2xl border-2 border-emerald-400 p-6 space-y-4 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 font-black text-xs">
                  IDZHAR QOMARIYAH
                </span>
                <span className="text-xs font-bold text-slate-500">14 Huruf</span>
              </div>

              <div>
                <h4 className="text-lg font-black text-slate-900">
                  {MATERI_KELAS_VII_SEM_1.hukumAlifLam.qomariyah.nama}
                </h4>
                <p className="text-xs text-emerald-800 font-arabic text-base font-bold mt-0.5">
                  {MATERI_KELAS_VII_SEM_1.hukumAlifLam.qomariyah.istilahLain}
                </p>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                {MATERI_KELAS_VII_SEM_1.hukumAlifLam.qomariyah.artiBahasa}
              </p>

              {/* Ciri-Ciri */}
              <div className="bg-emerald-50/70 rounded-xl p-3.5 space-y-2">
                <span className="text-xs font-bold text-emerald-900 block">Ciri-Ciri Tajwid:</span>
                <ul className="space-y-1.5 text-xs text-emerald-900">
                  {MATERI_KELAS_VII_SEM_1.hukumAlifLam.qomariyah.ciriCiri.map((ciri, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                      <span>{ciri}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Rumus Hafalan 14 Huruf */}
              <div className="bg-slate-900 text-white rounded-xl p-4 space-y-2">
                <span className="text-[11px] font-bold text-emerald-400 block uppercase tracking-wide">
                  Bait Rumus Hafalan (14 Huruf):
                </span>
                <p className="text-center font-arabic text-xl text-emerald-300 font-bold py-1" dir="rtl">
                  {MATERI_KELAS_VII_SEM_1.hukumAlifLam.qomariyah.rumusHafalan}
                </p>
                <div className="flex flex-wrap justify-center gap-1 pt-1 border-t border-slate-800">
                  {MATERI_KELAS_VII_SEM_1.hukumAlifLam.qomariyah.hurufList.map((h, i) => (
                    <span
                      key={i}
                      className="w-7 h-7 rounded-md bg-slate-800 text-white font-arabic font-bold text-sm flex items-center justify-center border border-slate-700"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>

              {/* Contoh Lafal dalam Materi */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-bold text-slate-800 block">
                  Contoh Analisis Lafal dalam Ayat:
                </span>
                <div className="space-y-2">
                  {MATERI_KELAS_VII_SEM_1.hukumAlifLam.qomariyah.contohDalamAyat.map((c) => (
                    <div key={c.id} className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-arabic text-base font-bold text-slate-900">{c.lafalArabic}</span>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                          Huruf {c.namaHuruf} ({c.hurufBertemu})
                        </span>
                      </div>
                      <p className="text-slate-600 leading-snug">{c.alasanTajwid}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ALIF LAM SYAMSIYAH */}
            <div className="bg-white rounded-2xl border-2 border-amber-400 p-6 space-y-4 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 font-black text-xs">
                  IDGHAM SYAMSIYAH
                </span>
                <span className="text-xs font-bold text-slate-500">14 Huruf</span>
              </div>

              <div>
                <h4 className="text-lg font-black text-slate-900">
                  {MATERI_KELAS_VII_SEM_1.hukumAlifLam.syamsiyah.nama}
                </h4>
                <p className="text-xs text-amber-800 font-arabic text-base font-bold mt-0.5">
                  {MATERI_KELAS_VII_SEM_1.hukumAlifLam.syamsiyah.istilahLain}
                </p>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                {MATERI_KELAS_VII_SEM_1.hukumAlifLam.syamsiyah.artiBahasa}
              </p>

              {/* Ciri-Ciri */}
              <div className="bg-amber-50/70 rounded-xl p-3.5 space-y-2">
                <span className="text-xs font-bold text-amber-900 block">Ciri-Ciri Tajwid:</span>
                <ul className="space-y-1.5 text-xs text-amber-900">
                  {MATERI_KELAS_VII_SEM_1.hukumAlifLam.syamsiyah.ciriCiri.map((ciri, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-amber-600 mt-0.5 shrink-0" />
                      <span>{ciri}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 14 Huruf Syamsiyah */}
              <div className="bg-slate-900 text-white rounded-xl p-4 space-y-2">
                <span className="text-[11px] font-bold text-amber-400 block uppercase tracking-wide">
                  Daftar 14 Huruf Syamsiyah:
                </span>
                <div className="flex flex-wrap justify-center gap-1 py-1">
                  {MATERI_KELAS_VII_SEM_1.hukumAlifLam.syamsiyah.hurufList.map((h, i) => (
                    <span
                      key={i}
                      className="w-7 h-7 rounded-md bg-slate-800 text-amber-300 font-arabic font-bold text-sm flex items-center justify-center border border-slate-700"
                    >
                      {h}
                    </span>
                  ))}
                </div>
                <p className="text-[10px] text-slate-400 text-center">
                  Huruf yang bertanda tasydid saat didahului oleh Alif Lam
                </p>
              </div>

              {/* Contoh Lafal dalam Materi */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-bold text-slate-800 block">
                  Contoh Analisis Lafal dalam Ayat:
                </span>
                <div className="space-y-2">
                  {MATERI_KELAS_VII_SEM_1.hukumAlifLam.syamsiyah.contohDalamAyat.map((c) => (
                    <div key={c.id} className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-arabic text-base font-bold text-slate-900">{c.lafalArabic}</span>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-900">
                          Huruf {c.namaHuruf} ({c.hurufBertemu})
                        </span>
                      </div>
                      <p className="text-slate-600 leading-snug">{c.alasanTajwid}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* TABEL KOMPARASI PERBEDAAN */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 shadow-xs">
            <h4 className="font-black text-slate-900 text-base flex items-center gap-2">
              <Layers className="w-5 h-5 text-emerald-600" />
              Matriks Perbandingan: Alif Lam Qomariyah vs Alif Lam Syamsiyah
            </h4>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-slate-800 border-b border-slate-300">
                    <th className="p-3 font-bold">Indikator Pembeda</th>
                    <th className="p-3 font-bold text-emerald-800">Alif Lam Qomariyah (Idzhar)</th>
                    <th className="p-3 font-bold text-amber-800">Alif Lam Syamsiyah (Idgham)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {MATERI_KELAS_VII_SEM_1.hukumAlifLam.perbandinganTabel.map((row, i) => (
                    <tr key={i} className="hover:bg-slate-50/80">
                      <td className="p-3 font-semibold text-slate-900 bg-slate-50/50">{row.indikator}</td>
                      <td className="p-3 font-medium text-emerald-950">{row.qomariyah}</td>
                      <td className="p-3 font-medium text-amber-950">{row.syamsiyah}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB CONTENT 5: MUFRADAT DAN TERJEMAH PERKATA LENGKAP */}
      {/* ========================================================================= */}
      {activeSubTab === 'mufradat' && (
        <div className="px-5 sm:px-8 pb-8 space-y-6">
          {/* Header Controls */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="font-black text-slate-900 text-lg flex items-center gap-2">
                  <ListOrdered className="w-5 h-5 text-emerald-600" />
                  Kamus Mufradat (Kosa Kata Perkata) & Terjemah
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Menelaah makna kata demi kata Q.S. An-Nisā’: 136 dan Q.S. Al-Anfāl: 2-4 untuk mempermudah pemahaman dan hafalan.
                </p>
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl self-start sm:self-auto">
                <button
                  onClick={() => setMufradatViewMode('table')}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                    mufradatViewMode === 'table' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500'
                  }`}
                >
                  Mode Tabel
                </button>
                <button
                  onClick={() => setMufradatViewMode('cards')}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                    mufradatViewMode === 'cards' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500'
                  }`}
                >
                  Mode Kartu Flashcard
                </button>
              </div>
            </div>

            {/* Filter & Search Bar */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-3 border-t border-slate-100">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-slate-500">Filter Ayat:</span>
                {(['all', 'nisa', 'anfal'] as const).map((src) => (
                  <button
                    key={src}
                    onClick={() => setMufradatSource(src)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all border ${
                      mufradatSource === src
                        ? 'bg-emerald-600 text-white border-emerald-600'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {src === 'all' ? 'Semua Ayat' : src === 'nisa' ? 'Q.S. An-Nisā’: 136' : 'Q.S. Al-Anfāl: 2-4'}
                  </button>
                ))}
              </div>

              <div className="relative w-full sm:w-64">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={mufradatSearch}
                  onChange={(e) => setMufradatSearch(e.target.value)}
                  placeholder="Cari kata Arab/Latin/Arti..."
                  className="w-full pl-9 pr-3 py-1.5 rounded-xl border border-slate-200 text-xs text-slate-700 outline-none focus:border-emerald-500"
                />
              </div>
            </div>
          </div>

          {/* TABLE VIEW */}
          {mufradatViewMode === 'table' && (
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-emerald-800 text-white font-bold">
                      <th className="p-3.5 w-12 text-center">No</th>
                      <th className="p-3.5 text-right w-44">Lafal Arab</th>
                      <th className="p-3.5 w-44">Transliterasi</th>
                      <th className="p-3.5">Arti Perkata</th>
                      <th className="p-3.5 w-32">Surat & Ayat</th>
                      <th className="p-3.5">Kaidah Tajwid / Bahasa</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700">
                    {filteredMufradat.map((word, idx) => (
                      <tr key={word.id} className="hover:bg-emerald-50/40 transition-colors">
                        <td className="p-3.5 text-center font-bold text-slate-400">{idx + 1}</td>
                        <td className="p-3.5 text-right">
                          <span className="font-arabic text-xl font-bold text-slate-900 leading-relaxed block" dir="rtl">
                            {word.arabic}
                          </span>
                        </td>
                        <td className="p-3.5 font-semibold text-emerald-800 italic">
                          {word.latin}
                        </td>
                        <td className="p-3.5 font-bold text-slate-900">
                          {word.meaning}
                        </td>
                        <td className="p-3.5">
                          <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 font-semibold text-[11px]">
                            {word.surahRef}
                          </span>
                        </td>
                        <td className="p-3.5 text-[11px] text-slate-500">
                          {word.tajwidHint || '-'}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* CARDS / FLASHCARD VIEW */}
          {mufradatViewMode === 'cards' && (
            <div className="space-y-4">
              <p className="text-xs text-slate-500 italic text-center">
                Klik kartu kosa kata untuk membuka/menutup artinya (sangat baik untuk latihan menghafal kosa kata Al-Qur'an).
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {filteredMufradat.map((word) => {
                  const isRevealed = revealedCardId === word.id;
                  return (
                    <div
                      key={word.id}
                      onClick={() => setRevealedCardId(isRevealed ? null : word.id)}
                      className={`p-4 rounded-2xl border cursor-pointer transition-all flex flex-col justify-between min-h-[160px] text-center ${
                        isRevealed
                          ? 'bg-emerald-600 text-white border-emerald-600 shadow-md scale-102'
                          : 'bg-white text-slate-900 border-slate-200 hover:border-emerald-400 shadow-xs'
                      }`}
                    >
                      <div className="space-y-1">
                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded-md inline-block ${
                            isRevealed ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                          }`}
                        >
                          {word.surahRef}
                        </span>

                        <p className="font-arabic text-2xl font-bold py-2" dir="rtl">
                          {word.arabic}
                        </p>
                        <p className={`text-xs font-semibold italic ${isRevealed ? 'text-emerald-100' : 'text-emerald-700'}`}>
                          {word.latin}
                        </p>
                      </div>

                      <div className="pt-2 border-t border-dashed border-slate-200/50 mt-2">
                        {isRevealed ? (
                          <div className="space-y-1">
                            <p className="text-xs font-black text-amber-200">{word.meaning}</p>
                            {word.tajwidHint && (
                              <p className="text-[10px] text-emerald-100/80 leading-tight">{word.tajwidHint}</p>
                            )}
                          </div>
                        ) : (
                          <span className="text-[11px] font-bold text-slate-400">
                            Ketuk untuk lihat arti 👁️
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB CONTENT 6: KUIS TAJWID INTERAKTIF & REFLEKSI */}
      {/* ========================================================================= */}
      {activeSubTab === 'latihan' && (
        <div className="px-5 sm:px-8 pb-8 space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-5">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-black text-slate-900 text-lg flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-amber-500" />
                  Uji Kemahiran Tajwid: Tebak Alif Lam Qomariyah vs Syamsiyah
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Pilih hukum tajwid yang tepat untuk masing-masing contoh lafal dari ayat materi.
                </p>
              </div>

              {showQuizResults && (
                <button
                  onClick={resetQuiz}
                  className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold flex items-center gap-1.5"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Ulangi Kuis</span>
                </button>
              )}
            </div>

            {/* Quiz Questions */}
            <div className="space-y-4">
              {MATERI_KELAS_VII_SEM_1.kuisTajwidLatihan.map((soal, idx) => {
                const selected = quizAnswers[soal.id];
                const isCorrect = selected === soal.jawabanBenar;

                return (
                  <div
                    key={soal.id}
                    className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-3"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <span className="text-xs font-bold text-slate-700">
                        {idx + 1}. {soal.soal}
                      </span>
                      <span className="font-arabic text-xl font-bold text-emerald-800 bg-white px-3 py-1 rounded-lg border border-slate-200 shadow-2xs">
                        {soal.lafal}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      {(['Alif Lam Qomariyah', 'Alif Lam Syamsiyah'] as const).map((option) => (
                        <button
                          key={option}
                          onClick={() => handleQuizAnswer(soal.id, option)}
                          className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                            selected === option
                              ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                              : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>

                    {showQuizResults && selected && (
                      <div
                        className={`p-3 rounded-xl text-xs space-y-1 ${
                          isCorrect ? 'bg-emerald-50 text-emerald-900 border border-emerald-200' : 'bg-rose-50 text-rose-900 border border-rose-200'
                        }`}
                      >
                        <p className="font-bold flex items-center gap-1.5">
                          {isCorrect ? <CheckCircle2 className="w-4 h-4 text-emerald-600" /> : <XCircle className="w-4 h-4 text-rose-600" />}
                          {isCorrect ? 'Jawaban Benar!' : `Kurang Tepat (Jawaban yang benar: ${soal.jawabanBenar})`}
                        </p>
                        <p className="leading-relaxed">{soal.pembahasan}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {!showQuizResults && (
              <button
                onClick={() => {
                  if (Object.keys(quizAnswers).length < MATERI_KELAS_VII_SEM_1.kuisTajwidLatihan.length) {
                    showToast('Harap jawab seluruh pertanyaan kuis terlebih dahulu!', 'info');
                  }
                  setShowQuizResults(true);
                }}
                className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
              >
                Periksa Hasil Jawaban Tajwid
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
