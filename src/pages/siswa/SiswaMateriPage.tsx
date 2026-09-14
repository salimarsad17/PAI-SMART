import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { StorageService } from '../../services/storageService';
import { AuthService } from '../../services/authService';
import { Material, PAIKategori } from '../../types';
import { MaterialCard } from '../../components/material/MaterialCard';
import { Search, Filter, BookOpen, CheckCircle, Sparkles } from 'lucide-react';
import { useToast } from '../../components/common/Toast';

export const SiswaMateriPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { showToast } = useToast();

  const currentUser = AuthService.getCurrentUser();
  const initialClass = (currentUser?.classId as 'VII' | 'VIII' | 'IX') || 'VII';

  const [selectedClass, setSelectedClass] = useState<'Semua' | 'VII' | 'VIII' | 'IX'>('Semua');
  const [selectedCategory, setSelectedCategory] = useState<string>(
    searchParams.get('kategori') || 'Semua'
  );
  const [searchQuery, setSearchQuery] = useState('');
  const [materials, setMaterials] = useState<Material[]>([]);
  const [completedIds, setCompletedIds] = useState<string[]>([]);

  const katParam = searchParams.get('kategori');

  useEffect(() => {
    StorageService.init();
    setMaterials(StorageService.getMaterials());

    const progress = StorageService.getStudentProgress().filter(
      p => p.studentId === currentUser?.id && p.isCompleted
    );
    setCompletedIds(progress.map(p => p.materialId));

    if (katParam) {
      if (katParam === 'SKI') {
        setSelectedCategory('SEJARAH KEBUDAYAAN ISLAM');
      } else {
        setSelectedCategory(katParam);
      }
    }
  }, [katParam, currentUser?.id]);

  const categories = [
    'Semua',
    "AL-QUR'AN DAN HADIS",
    'AQIDAH',
    'AKHLAK',
    'FIKIH',
    'SEJARAH KEBUDAYAAN ISLAM'
  ];

  const filteredMaterials = materials.filter(m => {
    const matchClass = selectedClass === 'Semua' || m.gradeLevel === selectedClass;
    const matchCat = selectedCategory === 'Semua' || m.category === selectedCategory;
    const matchQuery =
      !searchQuery.trim() ||
      m.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchClass && matchCat && matchQuery;
  });

  const handleToggleComplete = (materialId: string) => {
    if (!currentUser) return;
    if (completedIds.includes(materialId)) {
      showToast('Materi ini telah Anda selesaikan sebelumnya.', 'info');
    } else {
      StorageService.markMaterialCompleted(currentUser.id, materialId);
      setCompletedIds(prev => [...prev, materialId]);
      showToast('Alhamdulillah! Materi ditandai selesai (+50 XP)', 'success');
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Header Banner */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200 mb-2">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Kurikulum PAI & Budi Pekerti SMP</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-black text-slate-800 tracking-tight">
            Materi Pembelajaran PAI
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Pelajari modul Al-Qur'an, Hadis, Aqidah, Akhlak, Fikih, dan Sejarah Kebudayaan Islam secara interaktif.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <div className="text-right hidden sm:block">
            <p className="text-xs text-slate-500">Materi Selesai</p>
            <p className="text-lg font-extrabold text-emerald-700">
              {completedIds.length} <span className="text-xs font-normal text-slate-400">/ {materials.length}</span>
            </p>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-xs space-y-4">
        {/* Class Filter Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-100">
          <div className="flex items-center gap-1.5 overflow-x-auto">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-1">Tingkat:</span>
            {['Semua', 'VII', 'VIII', 'IX'].map(lvl => (
              <button
                key={lvl}
                onClick={() => setSelectedClass(lvl as any)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  selectedClass === lvl
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                }`}
              >
                {lvl === 'Semua' ? 'Semua Kelas' : `Kelas ${lvl}`}
              </button>
            ))}
          </div>

          {/* Search box */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Cari judul materi..."
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:border-emerald-600 outline-hidden"
            />
          </div>
        </div>

        {/* Category Filter Chips */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-1 shrink-0">Kategori:</span>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors shrink-0 ${
                selectedCategory === cat
                  ? 'bg-emerald-800 text-white shadow-2xs font-bold'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Materials Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredMaterials.map(mat => (
          <MaterialCard
            key={mat.id}
            material={mat}
            isCompleted={completedIds.includes(mat.id)}
            onReadClick={() => navigate(`/siswa/materi/${mat.id}`)}
            onQuickToggleComplete={() => handleToggleComplete(mat.id)}
          />
        ))}
      </div>

      {filteredMaterials.length === 0 && (
        <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 space-y-2">
          <BookOpen className="w-10 h-10 text-slate-300 mx-auto" />
          <h4 className="text-sm font-bold text-slate-700">Materi Tidak Ditemukan</h4>
          <p className="text-xs text-slate-400 max-w-sm mx-auto">
            Tidak ada materi yang sesuai dengan filter kelas atau kategori yang Anda pilih. Silakan atur kembali filter di atas.
          </p>
        </div>
      )}
    </div>
  );
};
