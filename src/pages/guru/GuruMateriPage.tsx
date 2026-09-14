import React, { useState, useEffect } from 'react';
import { StorageService } from '../../services/storageService';
import { Material, PAIKategori } from '../../types';
import { BookOpen, Plus, Edit2, Trash2, Search, Sparkles, Clock, Award } from 'lucide-react';
import { useToast } from '../../components/common/Toast';
import { Modal } from '../../components/common/Modal';

export const GuruMateriPage: React.FC = () => {
  const { showToast } = useToast();
  const [materials, setMaterials] = useState<Material[]>([]);
  const [selectedClass, setSelectedClass] = useState<string>('Semua');
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingMaterial, setEditingMaterial] = useState<Material | null>(null);

  // Form states
  const [formTitle, setFormTitle] = useState('');
  const [formCategory, setFormCategory] = useState<PAIKategori>("AL-QUR'AN DAN HADIS");
  const [formGrade, setFormGrade] = useState<'VII' | 'VIII' | 'IX'>('VII');
  const [formChapter, setFormChapter] = useState(1);
  const [formSummary, setFormSummary] = useState('');
  const [formFullContent, setFormFullContent] = useState('');
  const [formDailyLife, setFormDailyLife] = useState('');

  useEffect(() => {
    StorageService.init();
    setMaterials(StorageService.getMaterials());
  }, []);

  const filteredMaterials = materials.filter(m => {
    const matchClass = selectedClass === 'Semua' || m.gradeLevel === selectedClass;
    const matchQuery =
      !searchQuery.trim() ||
      m.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchClass && matchQuery;
  });

  const handleOpenAdd = () => {
    setEditingMaterial(null);
    setFormTitle('');
    setFormCategory("AL-QUR'AN DAN HADIS");
    setFormGrade('VII');
    setFormChapter(1);
    setFormSummary('');
    setFormFullContent('');
    setFormDailyLife('');
    setIsModalOpen(true);
  };

  const handleOpenEdit = (m: Material) => {
    setEditingMaterial(m);
    setFormTitle(m.title);
    setFormCategory(m.category);
    setFormGrade(m.gradeLevel);
    setFormChapter(m.chapter);
    setFormSummary(m.summary);
    setFormFullContent(m.fullContent);
    setFormDailyLife(m.dailyLifeExample || '');
    setIsModalOpen(true);
  };

  const handleDelete = (id: string, title: string) => {
    if (window.confirm(`Hapus materi "${title}"?`)) {
      StorageService.deleteMaterial(id);
      setMaterials(prev => prev.filter(m => m.id !== id));
      showToast('Materi berhasil dihapus.', 'success');
    }
  };

  const handleSaveMaterial = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formTitle.trim() || !formFullContent.trim()) {
      showToast('Judul dan isi materi wajib diisi.', 'error');
      return;
    }

    if (editingMaterial) {
      const updated: Material = {
        ...editingMaterial,
        title: formTitle,
        category: formCategory,
        gradeLevel: formGrade,
        chapter: Number(formChapter),
        summary: formSummary,
        fullContent: formFullContent,
        dailyLifeExample: formDailyLife
      };
      StorageService.updateMaterial(updated);
      setMaterials(prev => prev.map(m => (m.id === updated.id ? updated : m)));
      showToast('Materi berhasil diperbarui.', 'success');
    } else {
      const newMat: Material = {
        id: `mat-${Date.now()}`,
        title: formTitle,
        category: formCategory,
        gradeLevel: formGrade,
        chapter: Number(formChapter),
        summary: formSummary || formTitle,
        fullContent: formFullContent,
        learningObjectives: ['Memahami dan menerapkan materi dalam kehidupan'],
        dailyLifeExample: formDailyLife || 'Berperilaku santun dan berakhlak mulia di sekolah.',
        estimatedReadingMinutes: 10,
        xpReward: 50,
        references: ['Buku Siswa PAI SMP Kemendikbudristek RI']
      };
      StorageService.addMaterial(newMat);
      setMaterials(prev => [...prev, newMat]);
      showToast('Materi baru berhasil ditambahkan.', 'success');
    }
    setIsModalOpen(false);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Header */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 uppercase">
            Kurikulum PAI & Budi Pekerti
          </span>
          <h1 className="text-xl sm:text-2xl font-black text-slate-800 tracking-tight mt-1">
            Manajemen Materi Pembelajaran
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Total {materials.length} modul bahan ajar aktif untuk Kelas VII, VIII, dan IX.
          </p>
        </div>

        <button
          onClick={handleOpenAdd}
          className="flex items-center gap-1.5 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-xs transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>Tambah Materi Baru</span>
        </button>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          {['Semua', 'VII', 'VIII', 'IX'].map(lvl => (
            <button
              key={lvl}
              onClick={() => setSelectedClass(lvl)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedClass === lvl
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {lvl === 'Semua' ? 'Semua Kelas' : `Kelas ${lvl}`}
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Cari materi PAI..."
            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:border-emerald-600 outline-hidden"
          />
        </div>
      </div>

      {/* Materials List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredMaterials.map(mat => (
          <div
            key={mat.id}
            className="bg-white rounded-3xl border border-slate-200 p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 uppercase">
                  {mat.category}
                </span>
                <span className="text-xs font-bold text-slate-600">Kelas {mat.gradeLevel}</span>
              </div>

              <h3 className="text-base font-bold text-slate-800 leading-snug">{mat.title}</h3>
              <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed">{mat.summary}</p>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[11px] text-slate-400 font-medium">
                Bab {mat.chapter} • +{mat.xpReward} XP
              </span>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => handleOpenEdit(mat)}
                  className="p-1.5 text-slate-400 hover:text-emerald-700 hover:bg-emerald-50 rounded-lg transition-colors"
                  title="Edit Materi"
                >
                  <Edit2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleDelete(mat.id, mat.title)}
                  className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                  title="Hapus Materi"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add / Edit Material Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editingMaterial ? 'Edit Modul Materi PAI' : 'Tambah Modul Materi PAI'}
        maxWidth="2xl"
      >
        <form onSubmit={handleSaveMaterial} className="space-y-4 text-xs">
          <div className="space-y-1">
            <label className="font-bold text-slate-700">Judul Materi Pembelajaran</label>
            <input
              type="text"
              value={formTitle}
              onChange={e => setFormTitle(e.target.value)}
              placeholder="Contoh: Thaharah dan Tata Cara Bersuci dari Hadas"
              className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-emerald-600 outline-hidden font-medium"
              required
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="space-y-1">
              <label className="font-bold text-slate-700">Kategori Keilmuan</label>
              <select
                value={formCategory}
                onChange={e => setFormCategory(e.target.value as PAIKategori)}
                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-emerald-600 outline-hidden font-medium"
              >
                <option value="AL-QUR'AN DAN HADIS">Al-Qur'an dan Hadis</option>
                <option value="AQIDAH">Aqidah</option>
                <option value="AKHLAK">Akhlak</option>
                <option value="FIKIH">Fikih</option>
                <option value="SEJARAH KEBUDAYAAN ISLAM">Sejarah Kebudayaan Islam</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="font-bold text-slate-700">Tingkat Kelas</label>
              <select
                value={formGrade}
                onChange={e => setFormGrade(e.target.value as any)}
                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-emerald-600 outline-hidden font-medium"
              >
                <option value="VII">Kelas VII</option>
                <option value="VIII">Kelas VIII</option>
                <option value="IX">Kelas IX</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="font-bold text-slate-700">Nomor Bab</label>
              <input
                type="number"
                min={1}
                max={20}
                value={formChapter}
                onChange={e => setFormChapter(Number(e.target.value))}
                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-emerald-600 outline-hidden font-medium"
                required
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="font-bold text-slate-700">Ringkasan / Intisari</label>
            <textarea
              rows={2}
              value={formSummary}
              onChange={e => setFormSummary(e.target.value)}
              placeholder="Tuliskan ringkasan singkat materi..."
              className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-emerald-600 outline-hidden font-medium"
            />
          </div>

          <div className="space-y-1">
            <label className="font-bold text-slate-700">Uraian Materi Lengkap</label>
            <textarea
              rows={7}
              value={formFullContent}
              onChange={e => setFormFullContent(e.target.value)}
              placeholder="Tuliskan uraian lengkap materi pembelajaran..."
              className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-emerald-600 outline-hidden font-medium font-sans"
              required
            />
          </div>

          <div className="space-y-1">
            <label className="font-bold text-slate-700">Contoh Kehidupan Sehari-hari (Budi Pekerti)</label>
            <input
              type="text"
              value={formDailyLife}
              onChange={e => setFormDailyLife(e.target.value)}
              placeholder="Contoh: Menjaga kebersihan musholla dan tertib berwudu."
              className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-emerald-600 outline-hidden font-medium"
            />
          </div>

          <div className="flex justify-end gap-2 pt-4 border-t border-slate-100">
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="px-4 py-2 bg-slate-100 text-slate-600 rounded-xl font-bold"
            >
              Batal
            </button>
            <button
              type="submit"
              className="px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold shadow-xs"
            >
              {editingMaterial ? 'Simpan Perubahan' : 'Terbitkan Materi'}
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
