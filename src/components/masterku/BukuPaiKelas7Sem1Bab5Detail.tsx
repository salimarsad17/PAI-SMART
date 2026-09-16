import React, { useState } from 'react';
import {
  BookOpen,
  Crown,
  Building2,
  Shield,
  ShieldCheck,
  Landmark,
  BookMarked,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  ChevronRight,
  HelpCircle,
  Copy,
  Check,
  RotateCcw,
  Bot,
  Heart,
  Scale,
  TrendingDown,
  History,
  Users,
  Award,
  Milestone,
  ArrowRight,
  Quote
} from 'lucide-react';
import {
  SEJARAH_BERDIRINYA_DATA,
  KHALIFAH_PENTING_LIST,
  KEMAJUAN_PERADABAN_DATA,
  FAKTOR_KEMUNDURAN_DATA,
  HIKMAH_SEJARAH_DATA,
  QUIZ_BAB5_DATA,
  KhalifahPenting,
  BidangKemajuan
} from '../../data/materiKelas7Sem1Bab5Data';

interface Props {
  onAskAI?: (prompt: string) => void;
}

type TabKey = 'sejarah' | 'khalifah' | 'kemajuan' | 'kemunduran' | 'hikmah' | 'kuis';

export const BukuPaiKelas7Sem1Bab5Detail: React.FC<Props> = ({ onAskAI }) => {
  const [activeTab, setActiveTab] = useState<TabKey>('sejarah');
  const [selectedKhalifahId, setSelectedKhalifahId] = useState<string>('muawiyah-1');
  const [selectedKemajuanId, setSelectedKemajuanId] = useState<string>('administrasi-birokrasi');

  // Copy indicator
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  // Quiz State
  const [selectedAnswers, setSelectedAnswers] = useState<{ [id: number]: number }>({});
  const [showQuizResult, setShowQuizResult] = useState(false);

  // Active Khalifah
  const currentKhalifah = KHALIFAH_PENTING_LIST.find(k => k.id === selectedKhalifahId) || KHALIFAH_PENTING_LIST[0];

  // Active Kemajuan
  const currentKemajuan = KEMAJUAN_PERADABAN_DATA.find(k => k.id === selectedKemajuanId) || KEMAJUAN_PERADABAN_DATA[0];

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  // Calculate quiz score
  const quizScore = QUIZ_BAB5_DATA.reduce((acc, q) => {
    return acc + (selectedAnswers[q.id] === q.correctAnswer ? 20 : 0);
  }, 0);

  return (
    <div className="bg-white rounded-2xl border border-emerald-700/20 shadow-xl overflow-hidden text-slate-800">
      {/* ========================================================================= */}
      {/* HERO BANNER & HEADER */}
      {/* ========================================================================= */}
      <div className="bg-gradient-to-r from-amber-900 via-emerald-950 to-slate-900 p-6 sm:p-8 text-white relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-4xl space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-amber-400 text-amber-950 font-black text-xs tracking-wider uppercase">
              Buku Teks Interaktif PAI • Bab 5
            </span>
            <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-200 text-xs font-semibold">
              Sejarah Peradaban Islam (SPI) • Kelas VII Semester 1
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-amber-400/20 text-amber-200 text-xs font-medium">
              Kurikulum Merdeka
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white leading-tight">
            Merefleksikan Sejarah dan Peran Kekhalifahan Islam Paska Khulafaur Rasyidin: Bani Umayyah Periode Damaskus (41–132 H / 661–750 M)
          </h2>
          <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed max-w-3xl">
            Eksplorasi historis mendalam tentang dinasti kekhalifahan Islam pertama: telaah peristiwa rekonsiliasi <strong>\'Amul Jama\'ah (41 H)</strong>,
            kiprah <strong>khalifah-khalifah penentu sejarah</strong> (Muawiyah, Abdul Malik, Al-Walid, hingga Umar bin Abdul Aziz sang Khalifah Adil),
            puncak <strong>kemajuan peradaban di 3 benua</strong>, analisis kritis <strong>faktor kemunduran</strong>, serta <strong>hikmah dan ibrah</strong> bagi generasi muda.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3 text-xs text-amber-200/90 font-medium">
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4 text-amber-400" /> Sejarah Berdirinya & \'Amul Jama\'ah
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4 text-amber-400" /> 6 Khalifah Penting & Kebijakan
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4 text-amber-400" /> 4 Pilar Kemajuan & Kodifikasi Hadis
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4 text-amber-400" /> Faktor Runtuh & Kuis HOTS
            </span>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 6 NAVIGATION TABS */}
      {/* ========================================================================= */}
      <div className="border-b border-slate-200 bg-slate-50/90 sticky top-0 z-20 backdrop-blur-md">
        <div className="flex items-center gap-1 sm:gap-2 px-3 sm:px-6 py-2 overflow-x-auto scrollbar-none">
          {[
            { key: 'sejarah', label: '1. Sejarah Berdirinya', icon: History },
            { key: 'khalifah', label: '2. Khalifah Penting', icon: Crown },
            { key: 'kemajuan', label: '3. Kemajuan Peradaban', icon: Building2 },
            { key: 'kemunduran', label: '4. Faktor Kemunduran', icon: TrendingDown },
            { key: 'hikmah', label: '5. Hikmah & Keteladanan', icon: Heart },
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
                    ? 'bg-emerald-700 text-white shadow-md shadow-emerald-700/20 font-black'
                    : 'text-slate-600 hover:text-emerald-800 hover:bg-emerald-50'
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
      <div className="p-4 sm:p-6 lg:p-8 space-y-8 bg-slate-50/40">
        {/* ========================================================================= */}
        {/* TAB 1: SEJARAH BERDIRINYA */}
        {/* ========================================================================= */}
        {activeTab === 'sejarah' && (
          <div className="space-y-6">
            {/* Context Box */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <span className="p-2 rounded-xl bg-amber-100 text-amber-800">
                    <History className="w-5 h-5" />
                  </span>
                  <div>
                    <h3 className="text-lg font-black text-slate-800">
                      Latar Belakang Berdirinya Daulah Bani Umayyah di Damaskus
                    </h3>
                    <p className="text-xs text-slate-500">
                      Periode Kekuasaan: 41 – 132 Hijriyah / 661 – 750 Masehi (Berlangsung selama ± 90 Tahun)
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => onAskAI?.('Jelaskan secara lengkap sejarah berdirinya Daulah Bani Umayyah di Damaskus dan peristiwa Amul Jama\'ah 41 H!')}
                  className="px-3 py-1.5 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold hover:bg-emerald-100 transition-all flex items-center gap-1.5"
                >
                  <Bot className="w-3.5 h-3.5" />
                  <span>Tanya AI tentang Sejarah Berdirinya</span>
                </button>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                {SEJARAH_BERDIRINYA_DATA.historicalContext}
              </p>

              {/* Quick Info Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="p-3 bg-amber-50/70 border border-amber-200/60 rounded-xl text-center">
                  <span className="text-xs font-semibold text-amber-700 block">Pendiri Daulah</span>
                  <span className="text-sm font-black text-amber-950">Muawiyah bin Abi Sufyan</span>
                </div>
                <div className="p-3 bg-emerald-50/70 border border-emerald-200/60 rounded-xl text-center">
                  <span className="text-xs font-semibold text-emerald-700 block">Tahun Berdiri</span>
                  <span className="text-sm font-black text-emerald-950">41 H / 661 M (\'Amul Jama\'ah)</span>
                </div>
                <div className="p-3 bg-blue-50/70 border border-blue-200/60 rounded-xl text-center">
                  <span className="text-xs font-semibold text-blue-700 block">Pusat Ibukota</span>
                  <span className="text-sm font-black text-blue-950">Damaskus (Syam/Suriah)</span>
                </div>
                <div className="p-3 bg-purple-50/70 border border-purple-200/60 rounded-xl text-center">
                  <span className="text-xs font-semibold text-purple-700 block">Jumlah Khalifah</span>
                  <span className="text-sm font-black text-purple-950">14 Khalifah (90 Tahun)</span>
                </div>
              </div>
            </div>

            {/* Timeline Perjalanan */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
                <Milestone className="w-5 h-5 text-emerald-700" />
                <h3 className="text-base font-black text-slate-800">
                  Garis Kronologi Historis Menuju Lahirnya Dinasti Umayyah Damaskus
                </h3>
              </div>

              <div className="space-y-4 relative before:absolute before:left-4 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
                {SEJARAH_BERDIRINYA_DATA.timelineEvents.map((t, idx) => (
                  <div key={idx} className="relative pl-9 space-y-1">
                    <span className="absolute left-2.5 top-1.5 w-3.5 h-3.5 rounded-full bg-emerald-600 border-2 border-white shadow" />
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-0.5 bg-emerald-100 text-emerald-900 font-black text-xs rounded-lg">
                        {t.year}
                      </span>
                      <h4 className="font-bold text-slate-800 text-sm sm:text-base">
                        {t.event}
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {t.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Rekonsiliasi Akbar: Amul Jama'ah Spotlight */}
            <div className="bg-gradient-to-br from-emerald-50 via-teal-50 to-amber-50 p-6 rounded-2xl border border-emerald-200 shadow-sm space-y-3">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-emerald-700" />
                <h3 className="text-base font-black text-emerald-950">
                  Sorotan Faktual: Jiwa Besar Sayyidina Hasan bin Ali r.a. dalam \'Amul Jama\'ah (41 H)
                </h3>
              </div>
              <p className="text-sm text-emerald-900 leading-relaxed">
                Tindakan mulia Sayyidina Hasan bin Ali r.a. yang menyerahkan kekuasaan kepada Muawiyah bin Abi Sufyan di Kufah demi mengakhiri perang saudara dan menyelamatkan darah kaum muslimin adalah perwujudan nyata dari sabda kakeknya tercinta, Rasulullah SAW:
              </p>
              <div className="p-4 bg-white/80 rounded-xl border border-emerald-200 space-y-2">
                <p className="text-right font-arabic text-lg sm:text-xl text-emerald-950 leading-loose" dir="rtl">
                  «إِنَّ ابْنِي هَذَا سَيِّدٌ، وَلَعَلَّ اللَّهَ أَنْ يُصْلِحَ بِهِ بَيْنَ فِئَتَيْنِ عَظِيمَتَيْنِ مِنَ الْمُسْلِمِينَ»
                </p>
                <p className="text-xs text-slate-500 italic">
                  (Innabnī hādzā sayyidun, wa la\'allallāha an yuṣliḥa bihī bayna fi\'atayni \'aẓīmatayni minal-muslimīn)
                </p>
                <p className="text-xs sm:text-sm font-semibold text-slate-800">
                  Artinya: "Sesungguhnya anakku (cucuku) ini adalah sayyid (pemimpin), dan dengannya Allah kelak akan mendamaikan dua kelompok besar dari kaum muslimin." (H.R. Bukhari No. 2704).
                </p>
              </div>
            </div>

            {/* Perbandingan Sistem: Khulafaur Rasyidin vs Umayyah */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
                <Scale className="w-5 h-5 text-indigo-700" />
                <h3 className="text-base font-black text-slate-800">
                  {SEJARAH_BERDIRINYA_DATA.perbandinganSistem.title}
                </h3>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700 border-b border-slate-200">
                      <th className="p-3 font-bold w-1/4">Aspek Perbandingan</th>
                      <th className="p-3 font-bold w-3/8 text-emerald-900 bg-emerald-50/50">Era Khulafaur Rasyidin</th>
                      <th className="p-3 font-bold w-3/8 text-amber-900 bg-amber-50/50">Era Daulah Bani Umayyah</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {SEJARAH_BERDIRINYA_DATA.perbandinganSistem.aspects.map((asp, idx) => (
                      <tr key={idx} className="hover:bg-slate-50">
                        <td className="p-3 font-bold text-slate-800 bg-slate-50/50">{asp.aspect}</td>
                        <td className="p-3 text-slate-700 bg-emerald-50/20">{asp.khulafaurRasyidin}</td>
                        <td className="p-3 text-slate-700 bg-amber-50/20">{asp.baniUmayyah}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 2: KHALIFAH PENTING */}
        {/* ========================================================================= */}
        {activeTab === 'khalifah' && (
          <div className="space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-2 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
              <div>
                <h3 className="text-base sm:text-lg font-black text-slate-800">
                  Enam Khalifah Paling Berpengaruh dalam Daulah Bani Umayyah Damaskus
                </h3>
                <p className="text-xs text-slate-500">
                  Pilih khalifah di bawah ini untuk melihat biografi, kebijakan pokok, capaian monumental, dan dampak sejarahnya.
                </p>
              </div>
              <button
                onClick={() => onAskAI?.(`Jelaskan secara mendalam tentang biografi dan jasa-jasa Khalifah ${currentKhalifah.name} selama memimpin Daulah Bani Umayyah di Damaskus!`)}
                className="px-3 py-1.5 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold hover:bg-emerald-100 transition-all flex items-center gap-1.5"
              >
                <Bot className="w-3.5 h-3.5" />
                <span>Tanya AI tentang {currentKhalifah.name}</span>
              </button>
            </div>

            {/* Khalifah Selector Chips */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3">
              {KHALIFAH_PENTING_LIST.map(kh => {
                const isSelected = kh.id === selectedKhalifahId;
                return (
                  <button
                    key={kh.id}
                    onClick={() => setSelectedKhalifahId(kh.id)}
                    className={`p-3 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? 'bg-emerald-700 text-white border-emerald-800 shadow-md shadow-emerald-700/20'
                        : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-2xl">{kh.avatarIcon}</span>
                      <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${isSelected ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'}`}>
                        {kh.reignYearsHijri}
                      </span>
                    </div>
                    <div className="mt-2">
                      <h4 className="font-black text-xs sm:text-sm line-clamp-1">{kh.name}</h4>
                      <p className={`text-[10px] truncate ${isSelected ? 'text-emerald-100' : 'text-slate-400'}`}>
                        {kh.reignPeriod}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Selected Khalifah Detail Card */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-6">
              {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-3xl">{currentKhalifah.avatarIcon}</span>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                        {currentKhalifah.name}
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold text-emerald-700">
                        {currentKhalifah.titleGelar}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="text-left sm:text-right space-y-0.5">
                  <span className="text-xs font-bold text-slate-400 block">Masa Pemerintahan</span>
                  <span className="text-sm sm:text-base font-black text-slate-800">
                    {currentKhalifah.reignPeriod} ({currentKhalifah.reignYearsHijri})
                  </span>
                  <span className="text-xs font-arabic text-slate-500 block" dir="rtl">
                    {currentKhalifah.arabicName}
                  </span>
                </div>
              </div>

              {/* Kata Mutiara / Prinsip Kepemimpinan */}
              <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 relative">
                <Quote className="w-5 h-5 text-amber-500 absolute top-3 left-3 opacity-40" />
                <p className="text-xs sm:text-sm italic font-medium text-amber-950 pl-6 leading-relaxed">
                  {currentKhalifah.quoteKataMutiara}
                </p>
              </div>

              {/* Biografi Singkat */}
              <div className="space-y-2">
                <h4 className="text-sm font-black text-slate-800 flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-emerald-700" />
                  Profil & Karakteristik Kepemimpinan
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {currentKhalifah.biography}
                </p>
              </div>

              {/* Kebijakan Pokok */}
              <div className="space-y-3">
                <h4 className="text-sm font-black text-slate-800 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-blue-700" />
                  Kebijakan-Kebijakan Strategis
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {currentKhalifah.keyPolicies.map((pol, i) => (
                    <div key={i} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70 space-y-1">
                      <div className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-900">
                        <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-black flex items-center justify-center shrink-0">
                          {i + 1}
                        </span>
                        <span>{pol.title}</span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed pl-6.5">
                        {pol.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Capaian Monumental */}
              <div className="space-y-2">
                <h4 className="text-sm font-black text-slate-800 flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-amber-600" />
                  Capaian & Prestasi Monumental
                </h4>
                <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                  {currentKhalifah.monumentalAchievements.map((ach, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Dampak Sejarah */}
              <div className="p-3.5 rounded-xl bg-slate-100 border border-slate-200 text-xs sm:text-sm text-slate-700 space-y-1">
                <span className="font-bold text-slate-900 block">Dampak Historis Jangka Panjang:</span>
                <p className="leading-relaxed text-slate-600">{currentKhalifah.historicalImpact}</p>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 3: KEMAJUAN DAULAH UMAYYAH */}
        {/* ========================================================================= */}
        {activeTab === 'kemajuan' && (
          <div className="space-y-6">
            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-wrap items-center justify-between gap-2">
              <div>
                <h3 className="text-base sm:text-lg font-black text-slate-800">
                  Empat Pilar Kemajuan Peradaban Daulah Bani Umayyah Damaskus
                </h3>
                <p className="text-xs text-slate-500">
                  Inovasi tata kelola birokrasi, ekspansi 3 benua, arsitektur monumental, serta pembukuan hadis dan bahasa.
                </p>
              </div>
              <button
                onClick={() => onAskAI?.('Jelaskan kemajuan-kemajuan peradaban Daulah Bani Umayyah di Damaskus dalam bidang administrasi, militer, arsitektur, dan ilmu pengetahuan!')}
                className="px-3 py-1.5 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold hover:bg-emerald-100 transition-all flex items-center gap-1.5"
              >
                <Bot className="w-3.5 h-3.5" />
                <span>Tanya AI tentang Kemajuan Umayyah</span>
              </button>
            </div>

            {/* Kemajuan 4 Subtabs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {KEMAJUAN_PERADABAN_DATA.map(kem => {
                const isSelected = kem.id === selectedKemajuanId;
                return (
                  <button
                    key={kem.id}
                    onClick={() => setSelectedKemajuanId(kem.id)}
                    className={`p-4 rounded-2xl border text-left transition-all cursor-pointer space-y-1 ${
                      isSelected
                        ? 'bg-emerald-700 text-white border-emerald-800 shadow-md shadow-emerald-700/20'
                        : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200'
                    }`}
                  >
                    <span className="text-xs font-bold font-arabic block" dir="rtl">
                      {kem.arabicTerm}
                    </span>
                    <h4 className="font-black text-xs sm:text-sm line-clamp-1">{kem.title}</h4>
                    <p className={`text-[11px] line-clamp-2 ${isSelected ? 'text-emerald-100' : 'text-slate-500'}`}>
                      {kem.summary}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Selected Kemajuan Detail View */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-6">
              <div className="border-b border-slate-100 pb-3 space-y-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg sm:text-xl font-black text-slate-900">
                    {currentKemajuan.title}
                  </h3>
                  <span className="text-xs font-arabic text-emerald-800 font-bold" dir="rtl">
                    {currentKemajuan.arabicTerm}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {currentKemajuan.summary}
                </p>
              </div>

              {/* Highlights Items */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentKemajuan.highlights.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-md bg-emerald-600 text-white text-xs font-black flex items-center justify-center shrink-0">
                        {idx + 1}
                      </span>
                      <h4 className="text-xs sm:text-sm font-black text-slate-900">
                        {item.name}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed pl-7">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>

              {/* Famous Artifact / Figure Highlight Box */}
              <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200 flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <span className="text-xs font-black text-amber-900 uppercase tracking-wider">
                    Tokoh / Artefak Bersejarah Kunci: {currentKemajuan.famousArtifactOrFigure.title}
                  </span>
                  <p className="text-xs sm:text-sm text-amber-950 leading-relaxed">
                    {currentKemajuan.famousArtifactOrFigure.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 4: FAKTOR KEMUNDURAN */}
        {/* ========================================================================= */}
        {activeTab === 'kemunduran' && (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <span className="p-2 rounded-xl bg-rose-100 text-rose-800">
                    <TrendingDown className="w-5 h-5" />
                  </span>
                  <div>
                    <h3 className="text-lg font-black text-slate-800">
                      Analisis Kritis: Lima Faktor Utama Kemunduran & Keruntuhan Bani Umayyah Damaskus
                    </h3>
                    <p className="text-xs text-slate-500">
                      Keruntuhan Imperium pada Tahun 132 H / 750 M Pasca-Pertempuran Sungai Zab
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => onAskAI?.('Jelaskan apa saja faktor penyebab runtuhnya Daulah Bani Umayyah di Damaskus pada tahun 132 H / 750 M!')}
                  className="px-3 py-1.5 rounded-xl bg-rose-50 text-rose-700 border border-rose-200 text-xs font-bold hover:bg-rose-100 transition-all flex items-center gap-1.5"
                >
                  <Bot className="w-3.5 h-3.5" />
                  <span>Tanya AI tentang Faktor Kemunduran</span>
                </button>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Sebagaimana hukum sejarah (sunnatullah), setiap peradaban yang meninggalkan prinsip keadilan, terbelah oleh perpecahan internal, dan tenggelam dalam hedonisme niscaya akan mengalami kemunduran. Keruntuhan Daulah Umayyah bukan terjadi secara tiba-tiba, melainkan akumulasi dari krisis internal yang telah mengakar selama beberapa dekade.
              </p>
            </div>

            {/* 5 Factors Cards */}
            <div className="space-y-4">
              {FAKTOR_KEMUNDURAN_DATA.map((fk) => (
                <div key={fk.number} className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-3">
                  <div className="flex items-center gap-2.5">
                    <span className="w-7 h-7 rounded-xl bg-rose-600 text-white font-black text-xs sm:text-sm flex items-center justify-center shrink-0">
                      {fk.number}
                    </span>
                    <h4 className="text-sm sm:text-base font-black text-slate-900">
                      {fk.title}
                    </h4>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/70 space-y-1">
                      <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">Pemicu / Sebab:</span>
                      <p className="text-xs text-slate-700 leading-relaxed">{fk.cause}</p>
                    </div>
                    <div className="p-3 bg-rose-50/50 rounded-xl border border-rose-200/60 space-y-1">
                      <span className="text-[11px] font-bold text-rose-700 uppercase tracking-wider block">Dampak yang Ditimbulkan:</span>
                      <p className="text-xs text-rose-950 leading-relaxed">{fk.impact}</p>
                    </div>
                  </div>

                  <div className="p-3 bg-amber-50/60 rounded-xl border border-amber-200/70 space-y-1 text-xs">
                    <span className="font-bold text-amber-900 block">Kajian Analisis & Pelajaran (Ibrah):</span>
                    <p className="text-amber-950 leading-relaxed">{fk.analysis}</p>
                    <p className="text-amber-800 italic font-semibold mt-1">💡 Ibrah: "{fk.lesson}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 5: HIKMAH & KETELADANAN */}
        {/* ========================================================================= */}
        {activeTab === 'hikmah' && (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <span className="p-2 rounded-xl bg-emerald-100 text-emerald-800">
                    <Heart className="w-5 h-5" />
                  </span>
                  <div>
                    <h3 className="text-lg font-black text-slate-800">
                      Hikmah Sejarah & Pembentukan Karakter Pelajar Muslim
                    </h3>
                    <p className="text-xs text-slate-500">
                      Mengambil Ibrah untuk Kehidupan Sehari-hari Siswa di Sekolah, Keluarga, dan Masyarakat
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => onAskAI?.('Apa saja hikmah dan pelajaran berharga dari sejarah Daulah Bani Umayyah di Damaskus yang dapat diterapkan oleh pelajar SMP saat ini?')}
                  className="px-3 py-1.5 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold hover:bg-emerald-100 transition-all flex items-center gap-1.5"
                >
                  <Bot className="w-3.5 h-3.5" />
                  <span>Tanya AI tentang Hikmah Sejarah</span>
                </button>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Mempelajari sejarah Islam bukan sekadar menghafal tahun dan nama khalifah, melainkan mengambil intisari keteladanan (ibrah) agar kita mampu mengulangi kejayaannya dan menghindari kesalahan fatal yang pernah dilakukan generasi terdahulu.
              </p>
            </div>

            {/* Hikmah List */}
            <div className="space-y-4">
              {HIKMAH_SEJARAH_DATA.map(h => (
                <div key={h.point} className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-3">
                  <div className="flex items-center gap-2.5">
                    <span className="w-7 h-7 rounded-xl bg-emerald-700 text-white font-black text-xs sm:text-sm flex items-center justify-center shrink-0">
                      {h.point}
                    </span>
                    <div>
                      <h4 className="text-sm sm:text-base font-black text-slate-900">
                        {h.title}
                      </h4>
                      <p className="text-xs text-emerald-800 font-semibold">{h.subTitle}</p>
                    </div>
                  </div>

                  {h.dalilRujukan && (
                    <div className="p-3 bg-emerald-50/70 rounded-xl border border-emerald-200 space-y-1">
                      <span className="text-[11px] font-bold text-emerald-900 block">{h.dalilRujukan.surah}</span>
                      <p className="font-arabic text-sm sm:text-base text-right text-emerald-950" dir="rtl">
                        {h.dalilRujukan.arabic}
                      </p>
                      <p className="text-xs text-slate-700 italic">"{h.dalilRujukan.translation}"</p>
                    </div>
                  )}

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {h.explanation}
                  </p>

                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 space-y-1.5">
                    <span className="text-[11px] font-black text-slate-700 uppercase tracking-wider block">
                      Aplikasi Nyata bagi Siswa Sekolah:
                    </span>
                    <ul className="space-y-1 text-xs text-slate-600">
                      {h.realLifeApplication.map((app, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{app}</span>
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
        {/* TAB 6: KUIS EVALUASI HOTS */}
        {/* ========================================================================= */}
        {activeTab === 'kuis' && (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-wrap items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-emerald-700" />
                  <h3 className="text-lg font-black text-slate-900">
                    Uji Pemahaman HOTS: Sejarah Bani Umayyah Damaskus
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-500">
                  Kerjakan 5 soal skenario analitis (20 poin per soal). Nilai maksimal 100.
                </p>
              </div>

              <div className="flex items-center gap-2">
                {showQuizResult && (
                  <button
                    onClick={() => {
                      setSelectedAnswers({});
                      setShowQuizResult(false);
                    }}
                    className="px-3 py-2 rounded-xl bg-slate-100 text-slate-700 text-xs font-bold hover:bg-slate-200 transition-all flex items-center gap-1.5"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Ulangi Kuis</span>
                  </button>
                )}
                <button
                  onClick={() => setShowQuizResult(true)}
                  disabled={Object.keys(selectedAnswers).length < QUIZ_BAB5_DATA.length}
                  className={`px-4 py-2 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 ${
                    Object.keys(selectedAnswers).length === QUIZ_BAB5_DATA.length
                      ? 'bg-emerald-600 text-white shadow-md hover:bg-emerald-700 cursor-pointer'
                      : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                  }`}
                >
                  <Check className="w-4 h-4" />
                  <span>Lihat Skor & Pembahasan</span>
                </button>
              </div>
            </div>

            {/* Result Score Banner */}
            {showQuizResult && (
              <div
                className={`p-6 rounded-2xl border text-center space-y-2 ${
                  quizScore >= 80
                    ? 'bg-emerald-50 border-emerald-300 text-emerald-950'
                    : 'bg-amber-50 border-amber-300 text-amber-950'
                }`}
              >
                <span className="text-3xl font-black block">Skor Kamu: {quizScore} / 100</span>
                <p className="text-xs sm:text-sm max-w-lg mx-auto">
                  {quizScore === 100
                    ? '🎉 Sempurna! Kamu memiliki pemahaman analitis sejarah Islam yang sangat luar biasa dan mendalam!'
                    : quizScore >= 80
                    ? '👏 Sangat Baik! Kamu sudah menguasai substansi materi Bani Umayyah Damaskus dengan matang.'
                    : '💪 Tetap semangat! Cermati kembali materi dan penjelasan di bawah untuk memperdalam pemahamanmu.'}
                </p>
              </div>
            )}

            {/* Questions List */}
            <div className="space-y-6">
              {QUIZ_BAB5_DATA.map((q, qIndex) => {
                const isAnswered = selectedAnswers[q.id] !== undefined;
                const selectedOpt = selectedAnswers[q.id];
                const isCorrect = selectedOpt === q.correctAnswer;

                return (
                  <div key={q.id} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 text-xs font-black">
                          Soal {qIndex + 1} of {QUIZ_BAB5_DATA.length}
                        </span>
                        {showQuizResult && (
                          <span
                            className={`px-2 py-0.5 rounded text-xs font-bold ${
                              isCorrect ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                            }`}
                          >
                            {isCorrect ? '✓ Benar (+20)' : '✗ Belum Tepat (0)'}
                          </span>
                        )}
                      </div>

                      {/* Scenario Box */}
                      <div className="p-3.5 bg-slate-50 border-l-4 border-emerald-600 rounded-r-xl text-xs sm:text-sm text-slate-700 italic">
                        {q.scenario}
                      </div>

                      <h4 className="text-sm sm:text-base font-bold text-slate-900">
                        {q.question}
                      </h4>
                    </div>

                    {/* Options */}
                    <div className="space-y-2">
                      {q.options.map((opt, optIndex) => {
                        const isThisSelected = selectedOpt === optIndex;
                        let optStyle = 'bg-white border-slate-200 hover:border-emerald-400 hover:bg-slate-50 text-slate-700';

                        if (showQuizResult) {
                          if (optIndex === q.correctAnswer) {
                            optStyle = 'bg-emerald-100/70 border-emerald-500 text-emerald-950 font-bold';
                          } else if (isThisSelected && !isCorrect) {
                            optStyle = 'bg-rose-100/70 border-rose-500 text-rose-950 line-through';
                          } else {
                            optStyle = 'bg-slate-50 border-slate-200 text-slate-400 opacity-60';
                          }
                        } else if (isThisSelected) {
                          optStyle = 'bg-emerald-50 border-emerald-600 text-emerald-950 font-bold shadow-sm';
                        }

                        return (
                          <button
                            key={optIndex}
                            disabled={showQuizResult}
                            onClick={() => {
                              setSelectedAnswers(prev => ({
                                ...prev,
                                [q.id]: optIndex
                              }));
                            }}
                            className={`w-full text-left p-3 sm:p-3.5 rounded-xl border text-xs sm:text-sm transition-all flex items-start gap-2.5 cursor-pointer ${optStyle}`}
                          >
                            <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                              {String.fromCharCode(65 + optIndex)}
                            </span>
                            <span className="leading-relaxed">{opt}</span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Explanation */}
                    {showQuizResult && (
                      <div className="p-4 bg-emerald-50/60 rounded-xl border border-emerald-200 space-y-1 text-xs sm:text-sm text-emerald-950">
                        <span className="font-bold flex items-center gap-1 text-emerald-800">
                          <CheckCircle2 className="w-4 h-4" /> Pembahasan Ilmiah:
                        </span>
                        <p className="leading-relaxed">{q.explanation}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
