import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { StorageService } from '../../services/storageService';
import { SchoolClass, Student } from '../../types';
import {
  Layers,
  Users,
  Plus,
  Edit2,
  Trash2,
  Search,
  GraduationCap,
  Award,
  ArrowRight,
  BookOpen
} from 'lucide-react';
import { useToast } from '../../components/common/Toast';
import { Modal } from '../../components/common/Modal';

export const GuruKelasPage: React.FC = () => {
  const navigate = useNavigate();
  const { showToast } = useToast();
  const [classes, setClasses] = useState<SchoolClass[]>([]);
  const [students, setStudents] = useState<Student[]>([]);
  const [selectedGrade, setSelectedGrade] = useState<string>('Semua');
  const [searchQuery, setSearchQuery] = useState('');

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingClass, setEditingClass] = useState<SchoolClass | null>(null);
  const [formName, setFormName] = useState('');
  const [formGradeLevel, setFormGradeLevel] = useState<'VII' | 'VIII' | 'IX'>('VII');
  const [formAcademicYear, setFormAcademicYear] = useState('2025/2026');
  const [formHomeroom, setFormHomeroom] = useState('');
  const [formStudentCount, setFormStudentCount] = useState(32);

  useEffect(() => {
    StorageService.init();
    setClasses(StorageService.getClasses());
    setStudents(StorageService.getStudents());
  }, []);

  const filteredClasses = classes.filter(c => {
    const matchGrade = selectedGrade === 'Semua' || c.gradeLevel === selectedGrade;
    const matchSearch =
      !searchQuery.trim() ||
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.homeroomTeacher.toLowerCase().includes(searchQuery.toLowerCase());
    return matchGrade && matchSearch;
  });

  const handleOpenAdd = () => {
    setEditingClass(null);
    setFormName('');
    setFormGradeLevel('VII');
    setFormAcademicYear('2025/2026');
    setFormHomeroom('');
    setFormStudentCount(30);
    setIsModalOpen(true);
  };

  const handleOpenEdit = (c: SchoolClass) => {
    setEditingClass(c);
    setFormName(c.name);
    setFormGradeLevel(c.gradeLevel);
    setFormAcademicYear(c.academicYear);
    setFormHomeroom(c.homeroomTeacher);
    setFormStudentCount(c.studentCount);
    setIsModalOpen(true);
  };

  const handleDelete = (id: string, name: string) => {
    if (window.confirm(`Hapus rombel kelas "${name}"?`)) {
      StorageService.deleteClass(id);
      setClasses(prev => prev.filter(c => c.id !== id));
      showToast('Data rombel kelas berhasil dihapus.', 'success');
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName.trim() || !formHomeroom.trim()) {
      showToast('Nama kelas dan wali kelas wajib diisi.', 'error');
      return;
    }

    if (editingClass) {
      const updated: SchoolClass = {
        ...editingClass,
        name: formName.trim(),
        gradeLevel: formGradeLevel,
        academicYear: formAcademicYear.trim(),
        homeroomTeacher: formHomeroom.trim(),
        studentCount: Number(formStudentCount)
      };
      StorageService.updateClass(updated);
      setClasses(prev => prev.map(c => (c.id === updated.id ? updated : c)));
      showToast('Data rombel kelas berhasil diperbarui.', 'success');
    } else {
      const newClass: SchoolClass = {
        id: `class-${Date.now()}`,
        name: formName.trim(),
        gradeLevel: formGradeLevel,
        academicYear: formAcademicYear.trim(),
        homeroomTeacher: formHomeroom.trim(),
        studentCount: Number(formStudentCount)
      };
      StorageService.addClass(newClass);
      setClasses(prev => [...prev, newClass]);
      showToast('Rombel kelas baru berhasil ditambahkan.', 'success');
    }
    setIsModalOpen(false);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Header */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 uppercase">
            Struktur Rombel & Kelas
          </span>
          <h1 className="text-xl sm:text-2xl font-black text-slate-800 tracking-tight mt-1">
            Data Rombongan Belajar (Kelas)
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Kelola data kelas, alokasi wali kelas, dan pantau sebaran siswa PAI di UPT SMPN 2 Rebang Tangkas.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => navigate('/guru/siswa')}
            className="flex items-center gap-1.5 px-3.5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-colors"
          >
            <Users className="w-4 h-4" />
            <span>Kelola Siswa</span>
          </button>
          <button
            onClick={handleOpenAdd}
            className="flex items-center gap-1.5 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-xs transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>Tambah Kelas Baru</span>
          </button>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="bg-white rounded-3xl p-4 border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-3">
        {/* Grade tabs */}
        <div className="flex items-center gap-1.5 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
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
              {lvl === 'Semua' ? 'Semua Tingkat' : `Tingkat ${lvl}`}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Cari kelas atau wali kelas..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full pl-9.5 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-2xl text-xs focus:border-emerald-600 outline-hidden"
          />
        </div>
      </div>

      {/* Classes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredClasses.map(cls => {
          const classStudents = students.filter(s => s.classId === cls.gradeLevel || s.classId === cls.name);
          const studentCount = cls.studentCount || classStudents.length || 32;
          const avgScore =
            classStudents.length > 0
              ? Math.round(classStudents.reduce((acc, s) => acc + (s.averageGrade || 0), 0) / classStudents.length)
              : 86;

          return (
            <div
              key={cls.id}
              className="bg-white rounded-3xl border border-slate-200 p-5 shadow-xs hover:border-emerald-300 transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-800 flex items-center justify-center font-black text-base border border-emerald-200">
                      {cls.gradeLevel}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-base">{cls.name}</h3>
                      <p className="text-[11px] text-slate-400">Tahun Ajaran {cls.academicYear}</p>
                    </div>
                  </div>

                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                    Aktif
                  </span>
                </div>

                <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 space-y-1.5 text-xs text-slate-600">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Wali Kelas:</span>
                    <span className="font-bold text-slate-800">{cls.homeroomTeacher}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Jumlah Siswa:</span>
                    <span className="font-bold text-slate-800">{studentCount} Orang</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Rata-rata Nilai PAI:</span>
                    <span className="font-bold text-emerald-700">{avgScore} (Tuntas)</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-3 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => navigate('/guru/siswa')}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800"
                >
                  <span>Daftar Siswa</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-1">
                  <button
                    onClick={() => handleOpenEdit(cls)}
                    title="Edit Kelas"
                    className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(cls.id, cls.name)}
                    title="Hapus Kelas"
                    className="p-2 rounded-xl text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filteredClasses.length === 0 && (
        <div className="bg-white rounded-3xl p-12 text-center border border-slate-200">
          <Layers className="w-12 h-12 text-slate-300 mx-auto mb-3" />
          <h3 className="font-bold text-slate-700 text-base">Tidak ada kelas yang sesuai</h3>
          <p className="text-xs text-slate-400 mt-1">
            Coba ubah kata kunci pencarian atau ganti filter tingkat kelas.
          </p>
        </div>
      )}

      {/* Add / Edit Class Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editingClass ? 'Edit Rombel Kelas' : 'Tambah Rombel Kelas Baru'}
      >
        <form onSubmit={handleSave} className="space-y-4">
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-700">Nama Kelas / Rombel</label>
            <input
              type="text"
              placeholder="Contoh: Kelas VII-A"
              value={formName}
              onChange={e => setFormName(e.target.value)}
              className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs outline-hidden focus:border-emerald-600"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700">Tingkat</label>
              <select
                value={formGradeLevel}
                onChange={e => setFormGradeLevel(e.target.value as any)}
                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs outline-hidden"
              >
                <option value="VII">Kelas VII (Tujuh)</option>
                <option value="VIII">Kelas VIII (Delapan)</option>
                <option value="IX">Kelas IX (Sembilan)</option>
              </select>
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700">Tahun Ajaran</label>
              <input
                type="text"
                placeholder="2025/2026"
                value={formAcademicYear}
                onChange={e => setFormAcademicYear(e.target.value)}
                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs outline-hidden"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700">Wali Kelas</label>
              <input
                type="text"
                placeholder="Nama Lengkap & Gelar"
                value={formHomeroom}
                onChange={e => setFormHomeroom(e.target.value)}
                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs outline-hidden"
                required
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700">Jumlah Siswa</label>
              <input
                type="number"
                min={1}
                max={50}
                value={formStudentCount}
                onChange={e => setFormStudentCount(Number(e.target.value))}
                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs outline-hidden"
                required
              />
            </div>
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
              Simpan Rombel
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
