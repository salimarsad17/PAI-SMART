import React, { useState, useRef, useEffect } from 'react';
import {
  BookOpen,
  Volume2,
  VolumeX,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  ChevronRight,
  HelpCircle,
  Copy,
  Check,
  RotateCcw,
  Search,
  Bot,
  Heart,
  ShieldCheck,
  Clock,
  Compass,
  ListOrdered
} from 'lucide-react';
import {
  MACAM_SUJUD_DATA,
  AYAT_SAJDAH_LIST,
  QUIZ_BAB4_DATA,
  MacamSujud,
  AyatSajdah
} from '../../data/materiKelas7Sem1Bab4Data';

interface Props {
  onAskAI?: (prompt: string) => void;
}

type TabKey = 'pengertian' | 'bacaan' | 'tatacara' | 'ayatsajdah' | 'manfaat' | 'kuis';

export const BukuPaiKelas7Sem1Bab4Detail: React.FC<Props> = ({ onAskAI }) => {
  const [activeTab, setActiveTab] = useState<TabKey>('pengertian');
  const [selectedSujudId, setSelectedSujudId] = useState<'sujud-syukur' | 'sujud-sahwi' | 'sujud-tilawah'>('sujud-syukur');

  // Audio Player State for Ayat Sajdah
  const [playingAyahNomor, setPlayingAyahNomor] = useState<number | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Copy indicator
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  // Search & Filter for 15 Ayat Sajdah
  const [searchAyatQuery, setSearchAyatQuery] = useState('');
  const [selectedJuzFilter, setSelectedJuzFilter] = useState<string>('Semua');

  // Quiz State
  const [selectedAnswers, setSelectedAnswers] = useState<{ [id: number]: number }>({});
  const [showQuizResult, setShowQuizResult] = useState(false);

  // Active Sujud Object
  const currentSujud = MACAM_SUJUD_DATA.find(s => s.id === selectedSujudId) || MACAM_SUJUD_DATA[0];

  // Stop audio on unmount or tab switch
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const playAudio = (url: string, nomor: number) => {
    if (playingAyahNomor === nomor) {
      if (audioRef.current) {
        audioRef.current.pause();
        setPlayingAyahNomor(null);
      }
      return;
    }

    if (audioRef.current) {
      audioRef.current.pause();
    }

    const audio = new Audio(url);
    audioRef.current = audio;
    setPlayingAyahNomor(nomor);

    audio.play().catch(() => {
      setPlayingAyahNomor(null);
    });

    audio.onended = () => {
      setPlayingAyahNomor(null);
    };
  };

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  // Filter 15 Ayat Sajdah
  const filteredAyatSajdah = AYAT_SAJDAH_LIST.filter((item: AyatSajdah) => {
    const matchSearch =
      item.surahName.toLowerCase().includes(searchAyatQuery.toLowerCase()) ||
      item.translation.toLowerCase().includes(searchAyatQuery.toLowerCase()) ||
      item.latin.toLowerCase().includes(searchAyatQuery.toLowerCase()) ||
      item.contextKandungan.toLowerCase().includes(searchAyatQuery.toLowerCase()) ||
      item.surahNumber.toString().includes(searchAyatQuery);

    const matchJuz = selectedJuzFilter === 'Semua' || item.juz.toString() === selectedJuzFilter;
    return matchSearch && matchJuz;
  });

  // Calculate quiz score
  const quizScore = QUIZ_BAB4_DATA.reduce((acc, q) => {
    return acc + (selectedAnswers[q.id] === q.correctAnswer ? 20 : 0);
  }, 0);

  return (
    <div className="bg-white rounded-2xl border border-emerald-700/20 shadow-xl overflow-hidden text-slate-800">
      {/* ========================================================================= */}
      {/* HERO BANNER & HEADER */}
      {/* ========================================================================= */}
      <div className="bg-gradient-to-r from-teal-900 via-emerald-800 to-slate-900 p-6 sm:p-8 text-white relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-4xl space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-amber-400 text-amber-950 font-black text-xs tracking-wider uppercase">
              Buku Teks Interaktif PAI • Bab 4
            </span>
            <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-200 text-xs font-semibold">
              Fikih Ibadah • Kelas VII Semester 1
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-teal-400/20 text-teal-200 text-xs font-medium">
              Kurikulum Merdeka
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white">
            Menerapkan Ketentuan Macam-Macam Sujud di Luar Rukun Salat
          </h2>
          <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed max-w-3xl">
            Kajian fikih komprehensif mengenai <strong>Sujud Syukur</strong>, <strong>Sujud Sahwi</strong>, dan <strong>Sujud Tilawah</strong>:
            meliputi dalil naqli Al-Qur\'an & Hadis sahih, bacaan Arab berharakat, transliterasi Latin, panduan tata cara langkah-demi-langkah,
            daftar 15 Ayat Sajdah dengan audio tilawah qari internasional, serta hikmah pembentukan karakter tawadhu\'.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3 text-xs text-emerald-200/90 font-medium">
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 3 Macam Sujud Lengkap
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 15 Ayat Sajdah Al-Qur\'an
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Audio Tilawah & Kuis HOTS
            </span>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 6 NAVIGATION TABS */}
      {/* ========================================================================= */}
      <div className="border-b border-slate-200 bg-slate-50/80 sticky top-0 z-20 backdrop-blur-md">
        <div className="flex items-center gap-1 sm:gap-2 px-3 sm:px-6 py-2 overflow-x-auto scrollbar-none">
          {[
            { key: 'pengertian', label: '1. Pengertian & Dalil', icon: BookOpen },
            { key: 'bacaan', label: '2. Bacaan & Doa', icon: Volume2 },
            { key: 'tatacara', label: '3. Tata Cara Praktik', icon: ListOrdered },
            { key: 'ayatsajdah', label: '4. 15 Ayat Sajdah', icon: Compass },
            { key: 'manfaat', label: '5. Manfaat & Hikmah', icon: Heart },
            { key: 'kuis', label: '6. Kuis HOTS', icon: HelpCircle }
          ].map(tab => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as TabKey)}
                className={`flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20 font-black'
                    : 'text-slate-600 hover:text-emerald-700 hover:bg-emerald-50'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* TAB CONTENT CONTAINER */}
      {/* ========================================================================= */}
      <div className="p-4 sm:p-6 lg:p-8 space-y-8 bg-slate-50/30">
        {/* ========================================================================= */}
        {/* TAB 1: PENGERTIAN & DALIL */}
        {/* ========================================================================= */}
        {activeTab === 'pengertian' && (
          <div className="space-y-8">
            {/* Hakikat Sujud Overview Banner */}
            <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-emerald-50 via-teal-50 to-white border border-emerald-200/80 shadow-xs space-y-3">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-md bg-emerald-600 text-white font-bold text-xs">
                  Hakikat Kedudukan Sujud dalam Islam
                </span>
                <span className="text-xs text-slate-500 font-medium">HR. Muslim No. 482</span>
              </div>
              <h3 className="text-lg sm:text-xl font-black text-emerald-950">
                Sujud: Puncak Kedekatan Seorang Hamba dengan Allah Swt.
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Secara bahasa (etimologi), sujud bermakna <em>at-tadhallul wal-khudhū‘</em> (التَّذَلُّلُ وَالْخُضُوعُ) yaitu merendahkan diri, tunduk, dan pasrah.
                Secara istilah syariat, sujud adalah meletakkan dan menempelkan 7 anggota badan (dahi beserta hidung, kedua telapak tangan, kedua lutut, dan ujung jari-jari kedua kaki)
                ke atas lantai tempat sujud semata-mata mengharapkan ridha Allah Swt.
              </p>
              <div className="p-4 rounded-xl bg-white border border-emerald-200 text-sm italic text-emerald-900 leading-relaxed font-serif">
                "أَقْرَبُ مَا يَكُونُ الْعَبْدُ مِنْ رَبِّهِ وَهُوَ سَاجِدٌ فَأَكْثِرُوا الدُّعَاءَ"
                <br />
                <span className="font-sans not-italic text-xs text-slate-600 mt-1 block">
                  Artinya: "Sedekat-dekat seorang hamba dengan Tuhannya adalah ketika ia sedang sujud, maka perbanyaklah berdoa padanya." (HR. Muslim No. 482)
                </span>
              </div>
            </div>

            {/* Sujud Selector Chips */}
            <div className="space-y-3">
              <h4 className="font-black text-slate-900 text-base flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-emerald-600" />
                Pilih Jenis Sujud untuk Mempelajari Definisi & Dalilnya:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {MACAM_SUJUD_DATA.map(sujud => {
                  const isSelected = selectedSujudId === sujud.id;
                  return (
                    <button
                      key={sujud.id}
                      onClick={() => setSelectedSujudId(sujud.id)}
                      className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-emerald-800 text-white border-emerald-900 shadow-md ring-2 ring-emerald-500/50'
                          : 'bg-white text-slate-800 border-slate-200 hover:border-emerald-300 hover:bg-emerald-50/50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className={`text-xs font-bold uppercase tracking-wider ${isSelected ? 'text-emerald-300' : 'text-emerald-700'}`}>
                          {sujud.id.replace('sujud-', 'Sujud ')}
                        </span>
                        <span className="font-serif text-lg">{sujud.arabicName}</span>
                      </div>
                      <h5 className="font-black text-base mt-1">{sujud.name}</h5>
                      <p className={`text-xs mt-1 leading-snug line-clamp-2 ${isSelected ? 'text-emerald-100' : 'text-slate-500'}`}>
                        {sujud.shortDefinition}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Detailed View of Selected Sujud */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-6 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs">
                      {currentSujud.name}
                    </span>
                    <span className="font-serif text-xl font-bold text-emerald-700">{currentSujud.arabicName}</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1 font-semibold">
                    Hukum: <span className="text-emerald-700">{currentSujud.hukum}</span>
                  </p>
                </div>

                {onAskAI && (
                  <button
                    onClick={() => onAskAI(`Jelaskan secara lengkap fikih ${currentSujud.name}, dalilnya, dan sebab pelaksanaannya untuk siswa kelas 7!`)}
                    className="px-3 py-1.5 rounded-xl bg-amber-100 hover:bg-amber-200 text-amber-950 font-bold text-xs flex items-center gap-1.5 transition-all shadow-xs self-start sm:self-auto cursor-pointer"
                  >
                    <Bot className="w-4 h-4 text-amber-700" />
                    <span>Tanya AI tentang {currentSujud.name}</span>
                  </button>
                )}
              </div>

              {/* Full Definition */}
              <div className="space-y-2">
                <h5 className="font-bold text-sm text-slate-900 flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-emerald-600" />
                  Pengertian Menurut Istilah Syariat:
                </h5>
                <p className="text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100">
                  {currentSujud.fullDefinition}
                </p>
              </div>

              {/* Sebab-Sebab Pelaksanaan */}
              <div className="space-y-3">
                <h5 className="font-bold text-sm text-slate-900 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-teal-600" />
                  Sebab-Sebab Terjadinya {currentSujud.name}:
                </h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {currentSujud.reasons.map((reason, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-emerald-50/60 border border-emerald-100 flex items-start gap-2.5">
                      <div className="w-6 h-6 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </div>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                        {reason}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dalil Naqli Al-Qur'an / Hadits */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-900 to-emerald-950 text-white space-y-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="px-2.5 py-0.5 rounded bg-amber-400 text-amber-950 font-black text-xs">
                    Dalil Naqli Sahih
                  </span>
                  <span className="text-xs text-emerald-300 font-medium">
                    {currentSujud.dalilQuranHadis.source}
                  </span>
                </div>

                <p className="font-serif text-xl sm:text-2xl leading-loose text-right text-amber-100 pt-2" dir="rtl">
                  {currentSujud.dalilQuranHadis.arabic}
                </p>

                <div className="space-y-1.5 pt-2 border-t border-emerald-800/60">
                  <p className="text-xs font-semibold text-emerald-300 italic">
                    "{currentSujud.dalilQuranHadis.latin}"
                  </p>
                  <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed">
                    <strong>Terjemahan:</strong> {currentSujud.dalilQuranHadis.translation}
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-white/10 text-xs text-emerald-200/90 leading-relaxed">
                  <strong>Syarah Fikih:</strong> {currentSujud.dalilQuranHadis.syarah}
                </div>
              </div>

              {/* Larangan & Hal Penting */}
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200/70 space-y-2">
                <h6 className="text-xs font-bold text-amber-900 flex items-center gap-1.5 uppercase tracking-wide">
                  <AlertCircle className="w-4 h-4 text-amber-600" />
                  Peringatan Fikih Penting:
                </h6>
                <ul className="space-y-1 text-xs text-amber-950/90 list-disc list-inside">
                  {currentSujud.laranganPerhatian.map((warn, i) => (
                    <li key={i}>{warn}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Comparison Matrix Table */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 shadow-xs overflow-hidden">
              <h4 className="font-black text-slate-900 text-base flex items-center gap-2">
                <Compass className="w-5 h-5 text-emerald-600" />
                Matriks Perbandingan: Sujud Syukur vs Sujud Sahwi vs Sujud Tilawah
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-emerald-800 text-white">
                      <th className="p-3 font-bold rounded-tl-xl">Kriteria Fikih</th>
                      <th className="p-3 font-bold">Sujud Syukur</th>
                      <th className="p-3 font-bold">Sujud Sahwi</th>
                      <th className="p-3 font-bold rounded-tr-xl">Sujud Tilawah</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 font-medium text-slate-700">
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 font-bold text-slate-900 bg-slate-50">Tempat Pelaksanaan</td>
                      <td className="p-3 text-emerald-700 font-semibold">HANYA di luar salat</td>
                      <td className="p-3 text-blue-700 font-semibold">HANYA di dalam salat</td>
                      <td className="p-3 text-purple-700 font-semibold">Di dalam maupun di luar salat</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 font-bold text-slate-900 bg-slate-50">Jumlah Sujud</td>
                      <td className="p-3">1 (satu) kali sujud</td>
                      <td className="p-3">2 (dua) kali sujud</td>
                      <td className="p-3">1 (satu) kali sujud</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 font-bold text-slate-900 bg-slate-50">Sebab Utama</td>
                      <td className="p-3">Mendapat nikmat baru / selamat dari mara bahaya</td>
                      <td className="p-3">Lupa rukun, kelebihan, atau ragu jumlah rakaat</td>
                      <td className="p-3">Membaca atau mendengar 15 ayat Sajdah</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 font-bold text-slate-900 bg-slate-50">Salam Penutup</td>
                      <td className="p-3">Ya, diakhiri salam</td>
                      <td className="p-3">Ya, salam mengakhiri salat</td>
                      <td className="p-3">Ya (di luar salat), Tidak (di dalam salat)</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 font-bold text-slate-900 bg-slate-50">Hukum Dasar</td>
                      <td className="p-3">Sunnah Mu\'akkadah</td>
                      <td className="p-3">Sunnah Mu\'akkadah</td>
                      <td className="p-3">Sunnah Mu\'akkadah</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 2: BACAAN & DOA */}
        {/* ========================================================================= */}
        {activeTab === 'bacaan' && (
          <div className="space-y-8">
            <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-700 to-teal-800 text-white space-y-2 shadow-xs">
              <h3 className="text-lg sm:text-xl font-black">
                Kumpulan Bacaan dan Doa Sujud Lengkap
              </h3>
              <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
                Dilengkapi lafaz teks Arab asli berharakat lengkap, transliterasi Latin standar resmi Kemenag RI, terjemahan bahasa Indonesia,
                dan keterangan sumber hadits ma\'tsur.
              </p>
            </div>

            {MACAM_SUJUD_DATA.map(sujud => (
              <div key={sujud.id} className="bg-white rounded-2xl border border-slate-200 p-6 space-y-6 shadow-xs">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center text-sm">
                      {sujud.id === 'sujud-syukur' ? '1' : sujud.id === 'sujud-sahwi' ? '2' : '3'}
                    </span>
                    <h4 className="font-black text-slate-900 text-base sm:text-lg">
                      Bacaan {sujud.name} ({sujud.arabicName})
                    </h4>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">
                    {sujud.bacaanList.length} Pilihan Doa
                  </span>
                </div>

                <div className="space-y-4">
                  {sujud.bacaanList.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-slate-50 hover:bg-emerald-50/40 border border-slate-200/80 transition-all space-y-3"
                    >
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <span className="text-xs font-bold text-emerald-800 px-2.5 py-0.5 rounded-md bg-emerald-100/70">
                          {item.title}
                        </span>
                        <span className="text-[11px] text-slate-500 font-medium">
                          {item.sourceInfo}
                        </span>
                      </div>

                      {/* Arabic Text */}
                      <p className="font-serif text-xl sm:text-2xl text-right leading-loose text-slate-900 py-1" dir="rtl">
                        {item.arabic}
                      </p>

                      {/* Latin Transliteration */}
                      <p className="text-xs sm:text-sm font-semibold text-emerald-700 italic">
                        "{item.latin}"
                      </p>

                      {/* Translation */}
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                        <strong>Artinya:</strong> {item.translation}
                      </p>

                      <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-500">
                        <span className="italic">{item.note}</span>
                        <button
                          onClick={() => handleCopy(`${item.arabic}\n\n${item.latin}\n\nArtinya: ${item.translation}`, `${sujud.id}-${idx}`)}
                          className="px-2.5 py-1 rounded-lg bg-white hover:bg-slate-200 text-slate-700 font-medium flex items-center gap-1 border border-slate-200 transition-all cursor-pointer"
                        >
                          {copiedKey === `${sujud.id}-${idx}` ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-600" />
                              <span className="text-emerald-600 font-bold">Tersalin</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5 text-slate-500" />
                              <span>Salin Doa</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 3: TATA CARA PRAKTIK */}
        {/* ========================================================================= */}
        {activeTab === 'tatacara' && (
          <div className="space-y-8">
            <div className="p-5 rounded-2xl bg-gradient-to-r from-teal-800 to-emerald-900 text-white space-y-2 shadow-xs">
              <h3 className="text-lg sm:text-xl font-black">
                Panduan Langkah Praktik Fikih Sujud (Step-by-Step)
              </h3>
              <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
                Pelajari syarat sah, rukun ibadah, urutan gerakan, serta ketentuan khusus saat salat munfarid maupun salat berjamaah.
              </p>
            </div>

            {MACAM_SUJUD_DATA.map(sujud => (
              <div key={sujud.id} className="bg-white rounded-2xl border border-slate-200 p-6 space-y-6 shadow-xs">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div>
                    <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">
                      Tata Cara Praktik
                    </span>
                    <h4 className="font-black text-slate-900 text-base sm:text-lg">
                      {sujud.name} ({sujud.arabicName})
                    </h4>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 font-bold text-xs border border-emerald-200">
                    {sujud.tataCara.length} Skenario
                  </span>
                </div>

                <div className="space-y-6">
                  {sujud.tataCara.map((tc, tcIdx) => (
                    <div key={tcIdx} className="space-y-4 p-5 rounded-2xl bg-slate-50 border border-slate-200">
                      <h5 className="font-bold text-sm text-slate-900 flex items-center gap-2">
                        <ChevronRight className="w-4 h-4 text-emerald-600" />
                        {tc.kondisi}
                      </h5>

                      {/* Syarat & Rukun Badges */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                        <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-1.5">
                          <span className="font-bold text-emerald-800 block">Syarat Sah:</span>
                          <ul className="space-y-1 text-slate-600 list-disc list-inside">
                            {tc.syarat.map((s, i) => (
                              <li key={i}>{s}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-1.5">
                          <span className="font-bold text-teal-800 block">Rukun Pelaksanaan:</span>
                          <ul className="space-y-1 text-slate-600 list-disc list-inside">
                            {tc.rukun.map((r, i) => (
                              <li key={i}>{r}</li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Steps List */}
                      <div className="space-y-3 pt-2">
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                          Urutan Gerakan Langkah-demi-Langkah:
                        </span>
                        <div className="space-y-2">
                          {tc.steps.map(step => (
                            <div
                              key={step.stepNumber}
                              className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-start gap-3 hover:border-emerald-300 transition-all"
                            >
                              <div className="w-7 h-7 rounded-xl bg-emerald-600 text-white font-black text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                                {step.stepNumber}
                              </div>
                              <div className="space-y-0.5 flex-1">
                                <h6 className="font-bold text-xs sm:text-sm text-slate-900">
                                  {step.title}
                                </h6>
                                <p className="text-xs text-slate-600 leading-relaxed">
                                  {step.description}
                                </p>
                                {step.arabicPhrase && (
                                  <div className="pt-1">
                                    <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 font-serif text-xs font-bold border border-emerald-200">
                                      {step.arabicPhrase}
                                    </span>
                                  </div>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 4: 15 AYAT SAJDAH */}
        {/* ========================================================================= */}
        {activeTab === 'ayatsajdah' && (
          <div className="space-y-6">
            {/* Header with Search & Filter */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-emerald-950 to-teal-950 text-white space-y-4 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-400 text-amber-950 font-black text-xs">
                    Koleksi Mushaf Al-Qur'an
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
                    Daftar 15 Ayat Sajdah Lengkap dengan Audio Tilawah
                  </h3>
                  <p className="text-xs sm:text-sm text-emerald-200/90 leading-relaxed mt-1">
                    Di dalam mushaf Al-Qur\'an standar Kemenag RI, ayat-ayat ini ditandai dengan simbol kubah/mihrab sajdah <strong>(۩)</strong> di akhir ayat atau tepi halaman.
                  </p>
                </div>
              </div>

              {/* Search & Juz Filter Bar */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <div className="relative flex-1 w-full">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchAyatQuery}
                    onChange={(e) => setSearchAyatQuery(e.target.value)}
                    placeholder="Cari nama surah, terjemahan, atau kandungan ayat sajdah..."
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-emerald-200/50 text-xs sm:text-sm outline-none focus:bg-white/20 focus:border-amber-400 transition-all"
                  />
                  {searchAyatQuery && (
                    <button
                      onClick={() => setSearchAyatQuery('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-300 hover:text-white"
                    >
                      Batal
                    </button>
                  )}
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <span className="text-xs text-emerald-200 shrink-0 font-medium">Filter Juz:</span>
                  <select
                    value={selectedJuzFilter}
                    onChange={(e) => setSelectedJuzFilter(e.target.value)}
                    className="px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs outline-none focus:border-emerald-500 transition-all cursor-pointer w-full sm:w-auto"
                  >
                    <option value="Semua">Semua Juz (1 - 30)</option>
                    {Array.from(new Set(AYAT_SAJDAH_LIST.map(a => a.juz)))
                      .sort((a, b) => a - b)
                      .map(juz => (
                        <option key={juz} value={juz.toString()}>
                          Juz {juz}
                        </option>
                      ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Ayat List */}
            <div className="grid grid-cols-1 gap-4">
              {filteredAyatSajdah.length === 0 ? (
                <div className="p-8 text-center bg-white rounded-2xl border border-slate-200 text-slate-500 space-y-2">
                  <Compass className="w-8 h-8 text-slate-400 mx-auto" />
                  <p className="text-sm font-semibold">Tidak ditemukan ayat sajdah yang sesuai kata kunci pencarian.</p>
                  <button
                    onClick={() => { setSearchAyatQuery(''); setSelectedJuzFilter('Semua'); }}
                    className="px-3 py-1.5 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-lg hover:bg-emerald-200"
                  >
                    Reset Filter
                  </button>
                </div>
              ) : (
                filteredAyatSajdah.map(ayat => {
                  const isPlaying = playingAyahNomor === ayat.nomor;
                  return (
                    <div
                      key={ayat.nomor}
                      className={`p-5 rounded-2xl border transition-all ${
                        isPlaying
                          ? 'bg-emerald-50/80 border-emerald-500 shadow-md ring-1 ring-emerald-500'
                          : 'bg-white border-slate-200 hover:border-emerald-300 shadow-xs'
                      }`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-xl bg-emerald-700 text-white font-black text-xs flex items-center justify-center shrink-0">
                            {ayat.nomor}
                          </div>
                          <div>
                            <h4 className="font-black text-sm sm:text-base text-slate-900">
                              Q.S. {ayat.surahName} [{ayat.surahNumber}]: Ayat {ayat.ayahNumber}
                            </h4>
                            <span className="text-[11px] text-slate-500 font-semibold">
                              Juz {ayat.juz} • Simbol Sajdah: ۩
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => playAudio(ayat.audioUrl, ayat.nomor)}
                            className={`px-3 py-1.5 rounded-xl font-bold text-xs flex items-center gap-1.5 transition-all shadow-xs cursor-pointer ${
                              isPlaying
                                ? 'bg-amber-500 text-slate-950 font-black'
                                : 'bg-emerald-600 hover:bg-emerald-700 text-white'
                            }`}
                          >
                            {isPlaying ? (
                              <>
                                <VolumeX className="w-3.5 h-3.5" />
                                <span>Hentikan Tilawah</span>
                              </>
                            ) : (
                              <>
                                <Volume2 className="w-3.5 h-3.5" />
                                <span>Putar Tilawah Qari</span>
                              </>
                            )}
                          </button>
                        </div>
                      </div>

                      {/* Arabic Snippet */}
                      <p className="font-serif text-xl sm:text-2xl text-right leading-loose text-slate-900 py-3" dir="rtl">
                        {ayat.ayatSnippetArabic}
                      </p>

                      {/* Latin */}
                      <p className="text-xs sm:text-sm font-semibold text-emerald-700 italic">
                        "{ayat.latin}"
                      </p>

                      {/* Translation */}
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mt-1">
                        <strong>Terjemahan:</strong> {ayat.translation}
                      </p>

                      {/* Context / Kandungan */}
                      <div className="mt-3 p-3 rounded-xl bg-slate-50 border border-slate-200/70 text-xs text-slate-600 leading-relaxed">
                        <strong className="text-emerald-800">Kandungan Utama:</strong> {ayat.contextKandungan}
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 5: MANFAAT & HIKMAH */}
        {/* ========================================================================= */}
        {activeTab === 'manfaat' && (
          <div className="space-y-8">
            <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-800 to-teal-900 text-white space-y-2 shadow-xs">
              <h3 className="text-lg sm:text-xl font-black">
                Manfaat & Hikmah Ketentuan Sujud di Luar Rukun Salat
              </h3>
              <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
                Setiap bentuk sujud membawa dimensi tarbiyah spiritual: menumbuhkan kerendahan hati (tawadhu\'), membersihkan jiwa dari racun kesombongan,
                serta menepis jerat tipu daya setan.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {MACAM_SUJUD_DATA.map(sujud => (
                <div
                  key={sujud.id}
                  className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 shadow-xs flex flex-col justify-between hover:border-emerald-300 transition-all"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center text-sm">
                        <Heart className="w-4 h-4 text-emerald-700" />
                      </span>
                      <span className="font-serif text-lg text-emerald-700">{sujud.arabicName}</span>
                    </div>

                    <h4 className="font-black text-slate-900 text-base">
                      Hikmah {sujud.name}
                    </h4>

                    <ul className="space-y-2.5">
                      {sujud.manfaatHikmah.map((manfaat, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{manfaat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <span className="text-[11px] text-slate-500 font-semibold block">
                      Dimensi Karakter:
                    </span>
                    <span className="text-xs font-bold text-emerald-800">
                      {sujud.id === 'sujud-syukur'
                        ? 'Rasa Syukur & Anti-Takabur'
                        : sujud.id === 'sujud-sahwi'
                        ? 'Pengakuan Kelemahan & Tawadhu\''
                        : 'Kepatuhan Mutlak & Anti-Iblis'}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Hadits Quote Box */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-emerald-950 text-white space-y-3">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded bg-amber-400 text-amber-950 font-black text-xs">
                  Pelajaran Berharga Hadits Sujud
                </span>
                <span className="text-xs text-emerald-300">Tangisan Iblis saat Manusia Sujud Tilawah</span>
              </div>
              <p className="text-sm text-emerald-100 leading-relaxed">
                "Ketika anak Adam bersujud kepada Allah, setan menjauh sambil menangis dan meratapi kecongkakannya di masa lalu.
                Setan menyadari bahwa sujud adalah pintu gerbang surga, sedangkan keengganan untuk bersujud adalah tiket menuju neraka jahannam."
                (HR. Muslim No. 81)
              </p>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 6: KUIS HOTS */}
        {/* ========================================================================= */}
        {activeTab === 'kuis' && (
          <div className="space-y-8">
            <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-800 to-teal-900 text-white space-y-2 shadow-xs">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h3 className="text-lg sm:text-xl font-black">
                  Uji Pemahaman: Kuis Skenario Kasus Fikih HOTS (5 Soal)
                </h3>
                {showQuizResult && (
                  <span className="px-3 py-1 rounded-full bg-amber-400 text-amber-950 font-black text-xs">
                    Skor: {quizScore} / 100
                  </span>
                )}
              </div>
              <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
                Analisis setiap kasus nyata penerapan sujud di bawah ini untuk menguji kemampuan penalaran fikihmu.
              </p>
            </div>

            <div className="space-y-6">
              {QUIZ_BAB4_DATA.map((q, qIndex) => {
                const isAnswered = selectedAnswers[q.id] !== undefined;
                const isCorrect = selectedAnswers[q.id] === q.correctAnswer;
                return (
                  <div
                    key={q.id}
                    className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4"
                  >
                    {/* Scenario Box */}
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                      <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
                        Studi Kasus #{q.id}:
                      </span>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                        "{q.scenario}"
                      </p>
                    </div>

                    {/* Question */}
                    <h5 className="font-bold text-sm sm:text-base text-slate-900">
                      {q.question}
                    </h5>

                    {/* Options */}
                    <div className="space-y-2">
                      {q.options.map((opt, optIndex) => {
                        const isSelected = selectedAnswers[q.id] === optIndex;
                        return (
                          <button
                            key={optIndex}
                            onClick={() => {
                              setSelectedAnswers(prev => ({ ...prev, [q.id]: optIndex }));
                            }}
                            className={`w-full text-left p-3.5 rounded-xl border text-xs sm:text-sm transition-all cursor-pointer flex items-start gap-2.5 ${
                              isSelected
                                ? 'bg-emerald-50 border-emerald-500 font-bold text-emerald-950 ring-1 ring-emerald-500'
                                : 'bg-white border-slate-200 hover:border-slate-300 text-slate-700'
                            }`}
                          >
                            <span className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 text-xs ${
                              isSelected
                                ? 'bg-emerald-600 text-white border-emerald-600 font-bold'
                                : 'border-slate-300 text-slate-500'
                            }`}>
                              {String.fromCharCode(65 + optIndex)}
                            </span>
                            <span className="leading-snug">{opt}</span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Explanation if result shown */}
                    {showQuizResult && (
                      <div className={`p-4 rounded-xl text-xs sm:text-sm leading-relaxed ${
                        isCorrect
                          ? 'bg-emerald-50 border border-emerald-200 text-emerald-900'
                          : 'bg-red-50 border border-red-200 text-red-900'
                      }`}>
                        <div className="flex items-center gap-1.5 font-bold mb-1">
                          {isCorrect ? (
                            <>
                              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                              <span>Jawabanmu Tepat! (Kunci: {String.fromCharCode(65 + q.correctAnswer)})</span>
                            </>
                          ) : (
                            <>
                              <AlertCircle className="w-4 h-4 text-red-600" />
                              <span>Kurang Tepat. Jawaban Benar adalah {String.fromCharCode(65 + q.correctAnswer)}</span>
                            </>
                          )}
                        </div>
                        <p className="mt-1">{q.explanation}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Submit / Reset Actions */}
            <div className="flex items-center justify-between flex-wrap gap-4 pt-4 border-t border-slate-200">
              <span className="text-xs text-slate-500 font-medium">
                Terjawab: {Object.keys(selectedAnswers).length} dari {QUIZ_BAB4_DATA.length} soal
              </span>

              <div className="flex items-center gap-2">
                {showQuizResult ? (
                  <button
                    onClick={() => {
                      setSelectedAnswers({});
                      setShowQuizResult(false);
                    }}
                    className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs sm:text-sm flex items-center gap-1.5 transition-all cursor-pointer"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>Ulangi Kuis</span>
                  </button>
                ) : (
                  <button
                    onClick={() => setShowQuizResult(true)}
                    disabled={Object.keys(selectedAnswers).length === 0}
                    className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white font-bold text-xs sm:text-sm flex items-center gap-1.5 transition-all shadow-md cursor-pointer"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Periksa Jawaban & Tampilkan Skor</span>
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
