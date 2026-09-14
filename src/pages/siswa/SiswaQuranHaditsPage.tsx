import React, { useState } from 'react';
import { QURAN_SURAHS, HADITH_ITEMS, QuranSurah, HadithItem } from '../../data/quranData';
import {
  BookMarked,
  Volume2,
  VolumeX,
  Search,
  BookOpen,
  Sparkles,
  Info,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import { useToast } from '../../components/common/Toast';

export const SiswaQuranHaditsPage: React.FC = () => {
  const { showToast } = useToast();
  const [activeTab, setActiveTab] = useState<'quran' | 'hadits'>('quran');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSurah, setSelectedSurah] = useState<QuranSurah>(QURAN_SURAHS[0]);
  const [selectedHadith, setSelectedHadith] = useState<HadithItem | null>(null);
  const [playingAudio, setPlayingAudio] = useState<string | null>(null);
  const [audioEl, setAudioEl] = useState<HTMLAudioElement | null>(null);

  const filteredSurahs = QURAN_SURAHS.filter(
    s =>
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.translation.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredHadiths = HADITH_ITEMS.filter(
    h =>
      h.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      h.theme.toLowerCase().includes(searchQuery.toLowerCase()) ||
      h.narrator.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handlePlayAudio = (audioUrl?: string, id?: string) => {
    if (!audioUrl) {
      showToast('Audio murottal belum tersedia untuk ayat ini.', 'info');
      return;
    }

    if (playingAudio === id && audioEl) {
      audioEl.pause();
      setPlayingAudio(null);
      return;
    }

    if (audioEl) {
      audioEl.pause();
    }

    const newAudio = new Audio(audioUrl);
    newAudio.play().catch(() => {
      showToast('Tidak dapat memutar audio saat ini.', 'error');
    });
    setAudioEl(newAudio);
    setPlayingAudio(id || null);

    newAudio.onended = () => {
      setPlayingAudio(null);
    };
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-emerald-900 to-teal-900 rounded-3xl p-6 sm:p-8 text-white shadow-md relative overflow-hidden">
        <div className="relative z-10 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-800/80 text-emerald-200 text-xs font-bold border border-emerald-700/60">
            <BookMarked className="w-3.5 h-3.5" />
            <span>Al-Qur'an & Hadis Pilihan SMP</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
            Kajian Ayat Al-Qur'an & Hadis Nabawi
          </h1>
          <p className="text-xs sm:text-sm text-emerald-100/90 max-w-2xl leading-relaxed">
            Dilengkapi teks Arab bersandarkan mushaf resmi (font Amiri), terjemahan resmi Kemenag RI, penjelasan hukum tajwid dasar, tafsir ringkas, serta audio murottal merdu.
          </p>
        </div>
      </div>

      {/* Tabs and Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-white p-4 rounded-3xl border border-slate-200 shadow-xs">
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <button
            onClick={() => {
              setActiveTab('quran');
              setSelectedHadith(null);
            }}
            className={`flex-1 sm:flex-initial px-5 py-2.5 rounded-2xl text-xs font-bold transition-all ${
              activeTab === 'quran'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Al-Qur'an Pilihan ({QURAN_SURAHS.length} Surat)
          </button>
          <button
            onClick={() => setActiveTab('hadits')}
            className={`flex-1 sm:flex-initial px-5 py-2.5 rounded-2xl text-xs font-bold transition-all ${
              activeTab === 'hadits'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Hadis Pilihan ({HADITH_ITEMS.length} Tema)
          </button>
        </div>

        {/* Search */}
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder={activeTab === 'quran' ? 'Cari surat Al-Qur\'an...' : 'Cari tema hadis...'}
            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-2xl text-xs font-medium focus:border-emerald-600 outline-hidden"
          />
        </div>
      </div>

      {/* Verification notice mandated by Section AP & L */}
      <div className="p-3 bg-amber-50 border border-amber-200 rounded-2xl flex items-center gap-2.5 text-xs text-amber-900">
        <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
        <p>
          <strong>Catatan Dalil:</strong> Teks Al-Qur'an dan Hadis diselaraskan untuk kurikulum SMP. Verifikasi teks dan pelafalan tajwid selalu melalui bimbingan Guru PAI dan mushaf Al-Qur'an resmi.
        </p>
      </div>

      {/* Main Display: Quran Mode */}
      {activeTab === 'quran' ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Surah List Column */}
          <div className="space-y-2 bg-white p-4 rounded-3xl border border-slate-200 shadow-xs max-h-[750px] overflow-y-auto">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider px-2 mb-2">
              Daftar Surat Pilihan SMP
            </h3>
            {filteredSurahs.map(surah => {
              const isSelected = selectedSurah.number === surah.number;
              return (
                <div
                  key={surah.number}
                  onClick={() => setSelectedSurah(surah)}
                  className={`p-3.5 rounded-2xl cursor-pointer transition-all flex items-center justify-between ${
                    isSelected
                      ? 'bg-emerald-50 border border-emerald-300 shadow-2xs'
                      : 'hover:bg-slate-50 border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-7 h-7 rounded-xl flex items-center justify-center text-xs font-bold ${
                        isSelected ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {surah.number}
                    </span>
                    <div>
                      <h4 className="text-xs font-bold text-slate-800">{surah.name}</h4>
                      <p className="text-[11px] text-slate-500">{surah.translation}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="font-arabic text-sm text-slate-700 font-bold block">
                      {surah.arabicName}
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium">
                      {surah.totalAyah} Ayat
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Surah View Column */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-3xl border border-slate-200 shadow-xs p-6 sm:p-8 space-y-6">
              {/* Surah Header Card */}
              <div className="bg-gradient-to-br from-emerald-800 to-teal-800 text-white p-6 rounded-3xl shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
                <div className="space-y-1">
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-emerald-700/70 text-emerald-200">
                    Surat Ke-{selectedSurah.number} • {selectedSurah.revelation}
                  </span>
                  <h2 className="text-2xl font-black">{selectedSurah.name}</h2>
                  <p className="text-xs text-emerald-100">
                    Arti: "{selectedSurah.translation}" • Terdiri dari {selectedSurah.totalAyah} Ayat
                  </p>
                </div>
                <div className="font-arabic text-4xl text-emerald-100 font-bold">
                  {selectedSurah.arabicName}
                </div>
              </div>

              {/* Bismillah for surahs other than At-Taubah */}
              {selectedSurah.number !== 9 && (
                <div className="text-center py-4 border-b border-slate-100">
                  <p className="font-arabic text-2xl text-slate-700">
                    بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
                  </p>
                  <p className="text-xs text-slate-400 italic mt-1">
                    Dengan nama Allah Yang Maha Pengasih, Maha Penyayang.
                  </p>
                </div>
              )}

              {/* Ayah List */}
              <div className="space-y-6">
                {selectedSurah.ayahs.map(ayah => {
                  const audioKey = `surah-${selectedSurah.number}-ayah-${ayah.numberInSurah}`;
                  const isPlaying = playingAudio === audioKey;

                  return (
                    <div
                      key={ayah.numberInSurah}
                      className="p-5 rounded-2xl border border-slate-100 hover:border-emerald-200 bg-slate-50/40 hover:bg-white transition-colors space-y-4"
                    >
                      {/* Ayah Control bar */}
                      <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                        <span className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center">
                          {ayah.numberInSurah}
                        </span>

                        <button
                          onClick={() => handlePlayAudio(ayah.audioUrl, audioKey)}
                          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                            isPlaying
                              ? 'bg-amber-500 text-white'
                              : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100'
                          }`}
                        >
                          {isPlaying ? (
                            <>
                              <VolumeX className="w-3.5 h-3.5" />
                              <span>Jeda Murottal</span>
                            </>
                          ) : (
                            <>
                              <Volume2 className="w-3.5 h-3.5" />
                              <span>Putar Murottal</span>
                            </>
                          )}
                        </button>
                      </div>

                      {/* Arabic Verse */}
                      <div className="text-right py-2">
                        <p className="font-arabic text-2xl sm:text-3xl text-slate-900 leading-loose">
                          {ayah.arabicText}
                        </p>
                      </div>

                      {/* Transliteration and Indonesian Translation */}
                      <div className="space-y-1.5 text-xs sm:text-sm text-slate-600 pt-2 border-t border-slate-100">
                        <p className="text-emerald-800 font-medium italic">{ayah.latinText}</p>
                        <p className="text-slate-800 font-normal">
                          <strong>Artinya:</strong> "{ayah.translation}"
                        </p>
                      </div>

                      {/* Tajweed Notes if any */}
                      {ayah.tajweedNotes && ayah.tajweedNotes.length > 0 && (
                        <div className="p-3 bg-emerald-50/60 rounded-xl border border-emerald-100 text-xs space-y-1">
                          <p className="font-bold text-emerald-800 flex items-center gap-1">
                            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                            <span>Hukum Tajwid Terkait:</span>
                          </p>
                          <div className="flex flex-wrap gap-1">
                            {ayah.tajweedNotes.map((tj, i) => (
                              <span
                                key={i}
                                className="px-2 py-0.5 bg-white rounded-md text-[11px] font-semibold text-emerald-700 border border-emerald-200"
                              >
                                {tj}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Brief Tafsir */}
                      {ayah.briefTafsir && (
                        <div className="p-3 bg-slate-100/70 rounded-xl text-xs text-slate-600">
                          <p className="font-bold text-slate-700 mb-0.5">Tafsir Ringkas Kemenag:</p>
                          <p className="leading-relaxed">{ayah.briefTafsir}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Hadith Mode */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredHadiths.map(hadith => (
            <div
              key={hadith.id}
              className="bg-white rounded-3xl border border-slate-200 p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 uppercase">
                    Tema: {hadith.theme}
                  </span>
                  <span className="text-xs text-slate-400 font-semibold">{hadith.narrator}</span>
                </div>

                <h3 className="text-base font-bold text-slate-800">{hadith.title}</h3>

                {/* Hadith Arabic */}
                <div className="p-4 bg-slate-900 rounded-2xl text-white text-right">
                  <p className="font-arabic text-xl leading-relaxed text-slate-100">
                    {hadith.arabicText}
                  </p>
                </div>

                {/* Indonesian Translation */}
                <div className="text-xs text-slate-700 leading-relaxed space-y-1">
                  <p className="font-semibold text-slate-500">Terjemahan:</p>
                  <p className="italic">"{hadith.translation}"</p>
                </div>

                {/* Explanation */}
                <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200 text-xs text-slate-600 space-y-1">
                  <p className="font-bold text-slate-800">Penjelasan Guru:</p>
                  <p className="leading-relaxed">{hadith.explanation}</p>
                </div>

                {/* Key Lessons */}
                {hadith.lessons && (
                  <div className="space-y-1 pt-2">
                    <p className="text-[11px] font-bold text-slate-500 uppercase">Pelajaran Penting:</p>
                    <ul className="text-xs text-slate-700 space-y-1">
                      {hadith.lessons.map((ls, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{ls}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
