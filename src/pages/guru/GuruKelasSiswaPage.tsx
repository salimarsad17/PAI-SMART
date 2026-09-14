import React, { useState, useEffect } from 'react';
import { StorageService } from '../../services/storageService';
import { Student } from '../../types';
import {
  Users,
  Search,
  Plus,
  Download,
  Upload,
  Edit2,
  Trash2,
  CheckCircle2,
  Filter,
  GraduationCap
} from 'lucide-react';
import { exportStudentsToCsv, downloadCsv } from '../../utils/exportUtils';
import { useToast } from '../../components/common/Toast';
import { Modal } from '../../components/common/Modal';

export const GuruKelasSiswaPage: React.FC = () => {
  const { showToast } = useToast();
  const [students, setStudents] = useState<Student[]>([]);
  const [selectedClass, setSelectedClass] = useState<'Semua' | 'VII' | 'VIII' | 'IX'>('Semua');
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingStudent, setEditingStudent] = useState<Student | null>(null);

  // Form states
  const [formName, setFormName] = useState('');
  const [formNis, setFormNis] = useState('');
  const [formClass, setFormClass] = useState<'VII' | 'VIII' | 'IX'>('VII');
  const [formGender, setFormGender] = useState<'L' | 'P'>('L');

  useEffect(() => {
    StorageService.init();
    setStudents(StorageService.getStudents());
  }, []);

  const filteredStudents = students.filter(s => {
    const matchClass = selectedClass === 'Semua' || s.classId === selectedClass;
    const matchQuery =
      !searchQuery.trim() ||
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.nis.includes(searchQuery);
    return matchClass && matchQuery;
  });

  const handleOpenAdd = () => {
    setEditingStudent(null);
    setFormName('');
    setFormNis(`2526070${Math.floor(10 + Math.random() * 90)}`);
    setFormClass(selectedClass === 'Semua' ? 'VII' : selectedClass);
    setFormGender('L');
    setIsModalOpen(true);
  };

  const handleOpenEdit = (student: Student) => {
    setEditingStudent(student);
    setFormName(student.name);
    setFormNis(student.nis);
    setFormClass(student.classId);
    setFormGender(student.gender);
    setIsModalOpen(true);
  };

  const handleDelete = (id: string, name: string) => {
    if (window.confirm(`Hapus data siswa "${name}"?`)) {
      StorageService.deleteStudent(id);
      setStudents(prev => prev.filter(s => s.id !== id));
      showToast('Data siswa berhasil dihapus.', 'success');
    }
  };

  const handleSaveStudent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName.trim() || !formNis.trim()) {
      showToast('Nama dan NIS wajib diisi.', 'error');
      return;
    }

    if (editingStudent) {
      const updated: Student = {
        ...editingStudent,
        name: formName.trim(),
        nis: formNis.trim(),
        classId: formClass,
        gender: formGender
      };
      StorageService.updateStudent(updated);
      setStudents(prev => prev.map(s => (s.id === updated.id ? updated : s)));
      showToast('Data siswa berhasil diperbarui.', 'success');
    } else {
      const newStudent: Student = {
        id: `std-${Date.now()}`,
        name: formName.trim(),
        nis: formNis.trim(),
        classId: formClass,
        gender: formGender,
        averageGrade: 80,
        attendancePercentage: 100,
        completedMaterialsCount: 0,
        xp: 100,
        level: 1,
        badges: ['badge-1'],
        avatar:
          formGender === 'P'
            ? 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&auto=format&fit=crop&q=80'
            : 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&auto=format&fit=crop&q=80'
      };
      StorageService.addStudent(newStudent);
      setStudents(prev => [...prev, newStudent]);
      showToast('Siswa baru berhasil ditambahkan.', 'success');
    }
    setIsModalOpen(false);
  };

  const handleExportCsv = () => {
    const csvContent = exportStudentsToCsv(filteredStudents);
    downloadCsv(csvContent, `Data_Siswa_PAI_Kelas_${selectedClass}_SMPN2_Rebang_Tangkas.csv`);
    showToast('Data siswa berhasil diexport ke CSV.', 'success');
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Header */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 uppercase">
            Manajemen Peserta Didik
          </span>
          <h1 className="text-xl sm:text-2xl font-black text-slate-800 tracking-tight mt-1">
            Data Kelas & Siswa PAI
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Total {students.length} Peserta Didik aktif terdaftar di UPT SMPN 2 Rebang Tangkas.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleExportCsv}
            className="flex items-center gap-1.5 px-3.5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-colors"
          >
            <Download className="w-4 h-4" />
            <span>Export CSV</span>
          </button>
          <button
            onClick={handleOpenAdd}
            className="flex items-center gap-1.5 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-xs transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>Tambah Siswa</span>
          </button>
        </div>
      </div>

      {/* Class Level Tabs and Search Filter */}
      <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 w-full sm:w-auto">
          {['Semua', 'VII', 'VIII', 'IX'].map(lvl => (
            <button
              key={lvl}
              onClick={() => setSelectedClass(lvl as any)}
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
            placeholder="Cari nama atau NIS siswa..."
            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:border-emerald-600 outline-hidden"
          />
        </div>
      </div>

      {/* Student Table */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-slate-50 text-slate-500 uppercase font-bold border-b border-slate-200">
                <th className="p-4">No</th>
                <th className="p-4">NIS</th>
                <th className="p-4">Nama Siswa</th>
                <th className="p-4 text-center">Kelas</th>
                <th className="p-4 text-center">L/P</th>
                <th className="p-4 text-center">Rata-rata Nilai</th>
                <th className="p-4 text-center">Kehadiran</th>
                <th className="p-4 text-center">Ketuntasan (KKM 75)</th>
                <th className="p-4 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredStudents.map((std, idx) => {
                const isTuntas = (std.averageGrade || 0) >= 75;
                return (
                  <tr key={std.id} className="hover:bg-slate-50/60 transition-colors">
                    <td className="p-4 font-semibold text-slate-400">{idx + 1}</td>
                    <td className="p-4 font-mono font-medium text-slate-600">{std.nis}</td>
                    <td className="p-4">
                      <div className="flex items-center gap-2.5">
                        <img
                          src={std.avatar}
                          alt={std.name}
                          className="w-7 h-7 rounded-lg object-cover border border-slate-200"
                        />
                        <span className="font-bold text-slate-800">{std.name}</span>
                      </div>
                    </td>
                    <td className="p-4 text-center font-bold text-slate-700">Kelas {std.classId}</td>
                    <td className="p-4 text-center text-slate-600">{std.gender}</td>
                    <td className="p-4 text-center font-black text-slate-900 text-sm">
                      {std.averageGrade || 0}
                    </td>
                    <td className="p-4 text-center text-slate-600 font-semibold">
                      {std.attendancePercentage || 100}%
                    </td>
                    <td className="p-4 text-center">
                      <span
                        className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                          isTuntas
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'bg-amber-100 text-amber-800'
                        }`}
                      >
                        {isTuntas ? 'Tuntas' : 'Remedial'}
                      </span>
                    </td>
                    <td className="p-4 text-center">
                      <div className="flex items-center justify-center gap-1.5">
                        <button
                          onClick={() => handleOpenEdit(std)}
                          className="p-1.5 text-slate-400 hover:text-emerald-700 hover:bg-emerald-50 rounded-lg transition-colors"
                          title="Edit Siswa"
                        >
                          <Edit2 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => handleDelete(std.id, std.name)}
                          className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                          title="Hapus Siswa"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add / Edit Student Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editingStudent ? 'Edit Data Siswa' : 'Tambah Siswa Baru'}
        subtitle="Kelola profil peserta didik PAI UPT SMPN 2 Rebang Tangkas"
        maxWidth="md"
      >
        <form onSubmit={handleSaveStudent} className="space-y-4 text-xs">
          <div className="space-y-1">
            <label className="font-bold text-slate-700">Nama Lengkap Siswa</label>
            <input
              type="text"
              value={formName}
              onChange={e => setFormName(e.target.value)}
              placeholder="Contoh: Muhammad Farhan"
              className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-emerald-600 outline-hidden font-medium"
              required
            />
          </div>

          <div className="space-y-1">
            <label className="font-bold text-slate-700">Nomor Induk Siswa (NIS)</label>
            <input
              type="text"
              value={formNis}
              onChange={e => setFormNis(e.target.value)}
              placeholder="Contoh: 252607001"
              className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-emerald-600 outline-hidden font-medium"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="font-bold text-slate-700">Tingkat Kelas</label>
              <select
                value={formClass}
                onChange={e => setFormClass(e.target.value as any)}
                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-emerald-600 outline-hidden font-medium"
              >
                <option value="VII">Kelas VII</option>
                <option value="VIII">Kelas VIII</option>
                <option value="IX">Kelas IX</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="font-bold text-slate-700">Jenis Kelamin</label>
              <select
                value={formGender}
                onChange={e => setFormGender(e.target.value as any)}
                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-emerald-600 outline-hidden font-medium"
              >
                <option value="L">Laki-laki (L)</option>
                <option value="P">Perempuan (P)</option>
              </select>
            </div>
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
              {editingStudent ? 'Simpan Perubahan' : 'Tambahkan Siswa'}
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
