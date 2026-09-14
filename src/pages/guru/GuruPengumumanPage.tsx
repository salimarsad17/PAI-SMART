import React, { useState, useEffect } from 'react';
import { StorageService } from '../../services/storageService';
import { Announcement } from '../../types';
import {
  Bell,
  Plus,
  Edit2,
  Trash2,
  Search,
  AlertTriangle,
  Info,
  Calendar,
  CheckCircle2,
  Clock
} from 'lucide-react';
import { useToast } from '../../components/common/Toast';
import { Modal } from '../../components/common/Modal';
import { formatDateIndo } from '../../utils/exportUtils';

export const GuruPengumumanPage: React.FC = () => {
  const { showToast } = useToast();
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [selectedGrade, setSelectedGrade] = useState<string>('Semua');
  const [searchQuery, setSearchQuery] = useState('');

  // Modals
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingAnnouncement, setEditingAnnouncement] = useState<Announcement | null>(null);

  // Form states
  const [formTitle, setFormTitle] = useState('');
  const [formContent, setFormContent] = useState('');
  const [formGrade, setFormGrade] = useState<'Semua' | 'VII' | 'VIII' | 'IX'>('Semua');
  const [formPriority, setFormPriority] = useState<'Biasa' | 'Penting' | 'Mendesak'>('Penting');
  const [formAuthor, setFormAuthor] = useState('M. Syaifullah, S.Pd.I.');

  useEffect(() => {
    StorageService.init();
    setAnnouncements(StorageService.getAnnouncements());
    const teacher = StorageService.getTeacherProfile();
    if (teacher?.name) {
      setFormAuthor(teacher.name);
    }
  }, []);

  const filteredAnnouncements = announcements.filter(a => {
    const matchGrade = selectedGrade === 'Semua' || a.gradeLevel === selectedGrade;
    const matchSearch =
      !searchQuery.trim() ||
      a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchGrade && matchSearch;
  });

  const handleOpenAdd = () => {
    setEditingAnnouncement(null);
    setFormTitle('');
    setFormContent('');
    setFormGrade('Semua');
    setFormPriority('Penting');
    setIsModalOpen(true);
  };

  const handleOpenEdit = (a: Announcement) => {
    setEditingAnnouncement(a);
    setFormTitle(a.title);
    setFormContent(a.content);
    setFormGrade(a.gradeLevel as any);
    setFormPriority(a.priority);
    setFormAuthor(a.author);
    setIsModalOpen(true);
  };

  const handleDelete = (id: string, title: string) => {
    if (window.confirm(`Hapus pengumuman "${title}"?`)) {
      StorageService.deleteAnnouncement(id);
      setAnnouncements(prev => prev.filter(a => a.id !== id));
      showToast('Pengumuman berhasil dihapus.', 'success');
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formTitle.trim() || !formContent.trim()) {
      showToast('Judul dan isi pengumuman wajib diisi.', 'error');
      return;
    }

    if (editingAnnouncement) {
      const updated: Announcement = {
        ...editingAnnouncement,
        title: formTitle.trim(),
        content: formContent.trim(),
        gradeLevel: formGrade,
        priority: formPriority,
        author: formAuthor.trim()
      };
      StorageService.saveAnnouncement(updated);
      setAnnouncements(prev => prev.map(a => (a.id === updated.id ? updated : a)));
      showToast('Pengumuman berhasil diperbarui.', 'success');
    } else {
      const newAnc: Announcement = {
        id: `anc-${Date.now()}`,
        title: formTitle.trim(),
        content: formContent.trim(),
        gradeLevel: formGrade,
        priority: formPriority,
        date: new Date().toISOString().substring(0, 10),
        author: formAuthor.trim()
      };
      StorageService.saveAnnouncement(newAnc);
      setAnnouncements(prev => [newAnc, ...prev]);
      showToast('Pengumuman baru berhasil diterbitkan.', 'success');
    }
    setIsModalOpen(false);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Header */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 uppercase">
            Pusat Informasi & Notifikasi
          </span>
          <h1 className="text-xl sm:text-2xl font-black text-slate-800 tracking-tight mt-1">
            Manajemen Pengumuman Sekolah & Pembelajaran
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Sampaikan jadwal ujian, tugas proyek, serta kegiatan keagamaan Islam kepada peserta didik.
          </p>
        </div>

        <button
          onClick={handleOpenAdd}
          className="flex items-center gap-1.5 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-xs transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>Buat Pengumuman Baru</span>
        </button>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white rounded-3xl p-4 border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-3">
        {/* Class Filter */}
        <div className="flex items-center gap-1.5 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
          <span className="text-xs font-bold text-slate-400 uppercase mr-1">Sasaran:</span>
          {['Semua', 'VII', 'VIII', 'IX'].map(lvl => (
            <button
              key={lvl}
              onClick={() => setSelectedGrade(lvl)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 ${
                selectedGrade === lvl
                  ? 'bg-emerald-700 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {lvl === 'Semua' ? 'Semua Kelas' : `Kelas ${lvl}`}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Cari pengumuman..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full pl-9.5 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-2xl text-xs focus:border-emerald-600 outline-hidden"
          />
        </div>
      </div>

      {/* Announcements List */}
      <div className="space-y-4">
        {filteredAnnouncements.map(anc => {
          const isUrgent = anc.priority === 'Mendesak';
          const isImportant = anc.priority === 'Penting';

          return (
            <div
              key={anc.id}
              className={`bg-white rounded-3xl border p-5 shadow-xs transition-all flex flex-col justify-between space-y-3 ${
                isUrgent
                  ? 'border-rose-300 bg-rose-50/20'
                  : isImportant
                  ? 'border-amber-300 bg-amber-50/20'
                  : 'border-slate-200'
              }`}
            >
              <div className="space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-[10px] font-bold px-2.5 py-0.5 rounded-md ${
                        isUrgent
                          ? 'bg-rose-100 text-rose-800'
                          : isImportant
                          ? 'bg-amber-100 text-amber-800'
                          : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      {anc.priority}
                    </span>
                    <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-md bg-emerald-50 text-emerald-800">
                      Sasaran: {anc.gradeLevel === 'Semua' ? 'Seluruh Siswa' : `Kelas ${anc.gradeLevel}`}
                    </span>
                  </div>

                  <span className="text-[11px] text-slate-400 flex items-center gap-1 font-medium">
                    <Clock className="w-3.5 h-3.5" />
                    {formatDateIndo(anc.date)}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900">{anc.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 whitespace-pre-line leading-relaxed">
                  {anc.content}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                <span>Diterbitkan oleh: <strong>{anc.author}</strong></span>

                <div className="flex items-center gap-1">
                  <button
                    onClick={() => handleOpenEdit(anc)}
                    title="Edit Pengumuman"
                    className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(anc.id, anc.title)}
                    title="Hapus Pengumuman"
                    className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filteredAnnouncements.length === 0 && (
        <div className="bg-white rounded-3xl p-12 text-center border border-slate-200">
          <Bell className="w-12 h-12 text-slate-300 mx-auto mb-3" />
          <h3 className="font-bold text-slate-700 text-base">Belum ada pengumuman yang diterbitkan</h3>
          <p className="text-xs text-slate-400 mt-1">
            Gunakan tombol "Buat Pengumuman Baru" untuk membagikan pengumuman penting.
          </p>
        </div>
      )}

      {/* Add / Edit Announcement Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editingAnnouncement ? 'Edit Pengumuman' : 'Buat Pengumuman Baru'}
      >
        <form onSubmit={handleSave} className="space-y-4">
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-700">Judul Pengumuman</label>
            <input
              type="text"
              placeholder="Contoh: Jadwal Asesmen Sumatif Tengah Semester (STS) Ganjil"
              value={formTitle}
              onChange={e => setFormTitle(e.target.value)}
              className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs outline-hidden focus:border-emerald-600"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700">Sasaran Tingkat Kelas</label>
              <select
                value={formGrade}
                onChange={e => setFormGrade(e.target.value as any)}
                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs outline-hidden"
              >
                <option value="Semua">Semua Tingkat (VII, VIII, IX)</option>
                <option value="VII">Hanya Kelas VII</option>
                <option value="VIII">Hanya Kelas VIII</option>
                <option value="IX">Hanya Kelas IX</option>
              </select>
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700">Tingkat Prioritas</label>
              <select
                value={formPriority}
                onChange={e => setFormPriority(e.target.value as any)}
                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs outline-hidden"
              >
                <option value="Biasa">Biasa (Informasi Umum)</option>
                <option value="Penting">Penting</option>
                <option value="Mendesak">Mendesak (Segera)</option>
              </select>
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-700">Isi Pesan Pengumuman</label>
            <textarea
              rows={4}
              placeholder="Tuliskan isi pengumuman secara jelas dan informatif untuk siswa..."
              value={formContent}
              onChange={e => setFormContent(e.target.value)}
              className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs outline-hidden"
              required
            />
          </div>

          <div className="pt-3 border-t border-slate-100 flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-xl text-xs font-bold text-slate-600"
            >
              Batal
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 rounded-xl text-xs font-bold text-white shadow-xs"
            >
              Terbitkan Pengumuman
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
