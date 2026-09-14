import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, BookOpen, Video, HelpCircle, FileText, Compass, X } from 'lucide-react';
import { StorageService } from '../../services/storageService';
import { QURAN_SURAHS, HADITH_ITEMS } from '../../data/quranData';

interface SearchResultItem {
  id: string;
  type: 'materi' | 'quran' | 'hadits' | 'video' | 'soal' | 'tugas';
  title: string;
  subtitle: string;
  badge: string;
  targetUrl: string;
}

export const SearchBarModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  role: 'GURU' | 'SISWA';
}> = ({ isOpen, onClose, role }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const materials = useMemo(() => StorageService.getMaterials(), [isOpen]);
  const videos = useMemo(() => StorageService.getItem('pai_videos', []), [isOpen]);
  const questions = useMemo(() => StorageService.getQuestions(), [isOpen]);
  const assignments = useMemo(() => StorageService.getAssignments(), [isOpen]);

  const results = useMemo<SearchResultItem[]>(() => {
    if (!query.trim() || query.trim().length < 2) return [];
    const q = query.toLowerCase();
    const items: SearchResultItem[] = [];

    // Search Materials
    materials.forEach(m => {
      if (m.title.toLowerCase().includes(q) || m.fullContent.toLowerCase().includes(q) || m.category.toLowerCase().includes(q)) {
        items.push({
          id: m.id,
          type: 'materi',
          title: m.title,
          subtitle: `Kelas ${m.gradeLevel} • ${m.category}`,
          badge: 'Materi PAI',
          targetUrl: role === 'GURU' ? '/guru/materi' : `/siswa/materi/${m.id}`
        });
      }
    });

    // Search Quran
    QURAN_SURAHS.forEach(s => {
      if (s.name.toLowerCase().includes(q) || s.translation.toLowerCase().includes(q)) {
        items.push({
          id: `surah-${s.number}`,
          type: 'quran',
          title: `Surat ${s.name} (${s.arabicName})`,
          subtitle: `${s.translation} • ${s.totalAyah} Ayat`,
          badge: 'Al-Qur\'an',
          targetUrl: role === 'GURU' ? '/guru/dashboard' : '/siswa/quran'
        });
      }
    });

    // Search Hadith
    HADITH_ITEMS.forEach(h => {
      if (h.title.toLowerCase().includes(q) || h.translation.toLowerCase().includes(q) || h.theme.toLowerCase().includes(q)) {
        items.push({
          id: h.id,
          type: 'hadits',
          title: h.title,
          subtitle: `${h.narrator} • Tema: ${h.theme}`,
          badge: 'Hadis',
          targetUrl: role === 'GURU' ? '/guru/dashboard' : '/siswa/quran'
        });
      }
    });

    // Search Videos
    (videos as Array<{ id: string; title: string; gradeLevel: string; category: string }>).forEach(v => {
      if (v.title.toLowerCase().includes(q) || v.category.toLowerCase().includes(q)) {
        items.push({
          id: v.id,
          type: 'video',
          title: v.title,
          subtitle: `Kelas ${v.gradeLevel} • ${v.category}`,
          badge: 'Video',
          targetUrl: role === 'GURU' ? '/guru/materi' : '/siswa/video'
        });
      }
    });

    // Search Questions
    questions.forEach(ques => {
      if (ques.questionText.toLowerCase().includes(q) || ques.explanation.toLowerCase().includes(q)) {
        items.push({
          id: ques.id,
          type: 'soal',
          title: ques.questionText.substring(0, 70) + '...',
          subtitle: `Kelas ${ques.gradeLevel} • Tingkat ${ques.difficulty}`,
          badge: 'Bank Soal',
          targetUrl: role === 'GURU' ? '/guru/soal' : '/siswa/latihan'
        });
      }
    });

    // Search Assignments
    assignments.forEach(asg => {
      if (asg.title.toLowerCase().includes(q) || asg.description.toLowerCase().includes(q)) {
        items.push({
          id: asg.id,
          type: 'tugas',
          title: asg.title,
          subtitle: `Kelas ${asg.gradeLevel} • Batas: ${asg.deadline.substring(0, 10)}`,
          badge: 'Tugas',
          targetUrl: role === 'GURU' ? '/guru/tugas' : '/siswa/tugas'
        });
      }
    });

    return items.slice(0, 12);
  }, [query, materials, videos, questions, assignments, role]);

  const handleSelect = (url: string) => {
    onClose();
    navigate(url);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 p-4 overflow-y-auto no-print">
      <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs" onClick={onClose} />

      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden z-10 flex flex-col">
        {/* Search Input Bar */}
        <div className="flex items-center px-5 py-4 border-b border-slate-100 gap-3">
          <Search className="w-5 h-5 text-emerald-600 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Cari materi PAI, ayat, hadis, video, bank soal, atau tugas..."
            className="w-full text-slate-800 placeholder-slate-400 bg-transparent text-sm sm:text-base outline-none font-medium"
            autoFocus
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-slate-400 hover:text-slate-600 rounded-lg"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2.5 py-1 text-xs font-semibold text-slate-500 bg-slate-100 hover:bg-slate-200 rounded-lg ml-2"
          >
            ESC
          </button>
        </div>

        {/* Results */}
        <div className="max-h-[60vh] overflow-y-auto p-3 space-y-1">
          {query.trim().length > 0 && query.trim().length < 2 && (
            <p className="text-center py-6 text-xs text-slate-400">Ketik minimal 2 karakter untuk mencari...</p>
          )}

          {query.trim().length >= 2 && results.length === 0 && (
            <div className="text-center py-10 space-y-2">
              <Compass className="w-8 h-8 text-slate-300 mx-auto" />
              <p className="text-sm font-semibold text-slate-600">Tidak ada hasil ditemukan</p>
              <p className="text-xs text-slate-400">Coba kata kunci lain seperti "wudu", "salat", "malaikat", atau "hadis"</p>
            </div>
          )}

          {results.map(item => {
            let IconComp = BookOpen;
            let badgeBg = 'bg-emerald-50 text-emerald-700 border-emerald-200';
            if (item.type === 'video') {
              IconComp = Video;
              badgeBg = 'bg-blue-50 text-blue-700 border-blue-200';
            } else if (item.type === 'soal') {
              IconComp = HelpCircle;
              badgeBg = 'bg-purple-50 text-purple-700 border-purple-200';
            } else if (item.type === 'tugas') {
              IconComp = FileText;
              badgeBg = 'bg-amber-50 text-amber-700 border-amber-200';
            }

            return (
              <div
                key={item.id}
                onClick={() => handleSelect(item.targetUrl)}
                className="flex items-center justify-between p-3 rounded-2xl hover:bg-emerald-50/60 cursor-pointer transition-colors group"
              >
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2.5 rounded-xl bg-slate-100 group-hover:bg-emerald-100 group-hover:text-emerald-700 text-slate-600 shrink-0 transition-colors">
                    <IconComp className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-slate-800 truncate group-hover:text-emerald-800">{item.title}</p>
                    <p className="text-xs text-slate-500 truncate">{item.subtitle}</p>
                  </div>
                </div>
                <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border shrink-0 ${badgeBg}`}>
                  {item.badge}
                </span>
              </div>
            );
          })}

          {!query && (
            <div className="p-4 text-xs text-slate-500 space-y-2">
              <p className="font-bold text-slate-700 uppercase tracking-wider text-[11px]">Saran Pencarian Populer:</p>
              <div className="flex flex-wrap gap-1.5">
                {['Thaharah', 'Wudu', 'Asmaul Husna', 'Salat Berjamaah', 'Zakat Fitrah', 'Wali Songo', 'Hadis Menuntut Ilmu'].map(term => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="px-3 py-1.5 bg-slate-100 hover:bg-emerald-50 hover:text-emerald-700 rounded-xl text-slate-600 transition-colors font-medium"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
