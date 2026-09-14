import React, { useState, useEffect } from 'react';
import { StorageService } from '../../services/storageService';
import { Student, AttitudeRecord, AttitudeScale } from '../../types';
import {
  Smile,
  Plus,
  Edit2,
  Trash2,
  Search,
  CheckCircle2,
  Printer,
  Download,
  Award,
  Sparkles,
  Users
} from 'lucide-react';
import { useToast } from '../../components/common/Toast';
import { Modal } from '../../components/common/Modal';
import { triggerPrint, downloadCsv, formatDateIndo } from '../../utils/exportUtils';

export const GuruSikapPage: React.FC = () => {
  const { showToast } = useToast();
  const [attitudes, setAttitudes] = useState<AttitudeRecord[]>([]);
  const [students, setStudents] = useState<Student[]>([]);
  const [selectedClass, setSelectedClass] = useState<string>('Semua');
  const [searchQuery, setSearchQuery] = useState('');

  // Modals
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingRecord, setEditingRecord] = useState<AttitudeRecord | null>(null);

  // Form State
  const [formStudentId, setFormStudentId] = useState('');
  const [formDate, setFormDate] = useState(new Date().toISOString().substring(0, 10));
  const [formReligius, setFormReligius] = useState<AttitudeScale>(4);
  const [formJujur, setFormJujur] = useState<AttitudeScale>(4);
  const [formDisiplin, setFormDisiplin] = useState<AttitudeScale>(3);
  const [formTanggungJawab, setFormTanggungJawab] = useState<AttitudeScale>(4);
  const [formSantun, setFormSantun] = useState<AttitudeScale>(4);
  const [formPeduli, setFormPeduli] = useState<AttitudeScale>(4);
  const [formKerjaSama, setFormKerjaSama] = useState<AttitudeScale>(3);
  const [formTeacherNotes, setFormTeacherNotes] = useState('Siswa menunjukkan adab yang sangat santun dan rajin salat dhuha berjamaah.');

  useEffect(() => {
    StorageService.init();
    const atts = StorageService.getAttitudes();
    setAttitudes(atts);
    const stds = StorageService.getStudents();
    setStudents(stds);
    if (stds.length > 0) {
      setFormStudentId(stds[0].id);
    }
  }, []);

  const filteredAttitudes = attitudes.filter(a => {
    const matchClass = selectedClass === 'Semua' || a.gradeLevel === selectedClass;
    const matchSearch =
      !searchQuery.trim() ||
      a.studentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.teacherNotes.toLowerCase().includes(searchQuery.toLowerCase());
    return matchClass && matchSearch;
  });

  const handleOpenAdd = () => {
    setEditingRecord(null);
    if (students.length > 0) {
      setFormStudentId(students[0].id);
    }
    setFormDate(new Date().toISOString().substring(0, 10));
    setFormReligius(4);
    setFormJujur(4);
    setFormDisiplin(3);
    setFormTanggungJawab(4);
    setFormSantun(4);
    setFormPeduli(4);
    setFormKerjaSama(3);
    setFormTeacherNotes('Siswa berakhlak mulia, rajin berdoa sebelum dan sesudah belajar.');
    setIsModalOpen(true);
  };

  const handleOpenEdit = (rec: AttitudeRecord) => {
    setEditingRecord(rec);
    setFormStudentId(rec.studentId);
    setFormDate(rec.date);
    setFormReligius(rec.religius);
    setFormJujur(rec.jujur);
    setFormDisiplin(rec.disiplin);
    setFormTanggungJawab(rec.tanggungJawab);
    setFormSantun(rec.santun);
    setFormPeduli(rec.peduli);
    setFormKerjaSama(rec.kerjaSama);
    setFormTeacherNotes(rec.teacherNotes);
    setIsModalOpen(true);
  };

  const handleDelete = (id: string, name: string) => {
    if (window.confirm(`Hapus catatan jurnal sikap siswa "${name}"?`)) {
      StorageService.deleteAttitude(id);
      setAttitudes(prev => prev.filter(a => a.id !== id));
      showToast('Jurnal sikap berhasil dihapus.', 'success');
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    const st = students.find(s => s.id === formStudentId);
    if (!st) {
      showToast('Pilih siswa terlebih dahulu.', 'error');
      return;
    }

    if (editingRecord) {
      const updated: AttitudeRecord = {
        ...editingRecord,
        studentId: st.id,
        studentName: st.name,
        gradeLevel: st.classId,
        date: formDate,
        religius: formReligius,
        jujur: formJujur,
        disiplin: formDisiplin,
        tanggungJawab: formTanggungJawab,
        santun: formSantun,
        peduli: formPeduli,
        kerjaSama: formKerjaSama,
        teacherNotes: formTeacherNotes.trim()
      };
      StorageService.saveAttitude(updated);
      setAttitudes(prev => prev.map(a => (a.id === updated.id ? updated : a)));
      showToast('Jurnal sikap siswa berhasil diperbarui.', 'success');
    } else {
      const newRec: AttitudeRecord = {
        id: `att-rec-${Date.now()}`,
        studentId: st.id,
        studentName: st.name,
        gradeLevel: st.classId,
        date: formDate,
        religius: formReligius,
        jujur: formJujur,
        disiplin: formDisiplin,
        tanggungJawab: formTanggungJawab,
        santun: formSantun,
        peduli: formPeduli,
        kerjaSama: formKerjaSama,
        teacherNotes: formTeacherNotes.trim()
      };
      StorageService.saveAttitude(newRec);
      setAttitudes(prev => [newRec, ...prev]);
      showToast('Catatan sikap baru berhasil ditambahkan.', 'success');
    }
    setIsModalOpen(false);
  };

  const handleExportCsv = () => {
    const headers = [
      'No',
      'Nama Siswa',
      'Kelas',
      'Tanggal',
      'Religius',
      'Jujur',
      'Disiplin',
      'Tanggung Jawab',
      'Santun',
      'Peduli',
      'Kerja Sama',
      'Catatan Guru'
    ];
    const rows = filteredAttitudes.map((a, idx) => [
      idx + 1,
      `"${a.studentName}"`,
      a.gradeLevel,
      a.date,
      a.religius,
      a.jujur,
      a.disiplin,
      a.tanggungJawab,
      a.santun,
      a.peduli,
      a.kerjaSama,
      `"${a.teacherNotes.replace(/"/g, '""')}"`
    ]);

    const csvContent = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    downloadCsv(csvContent, `Jurnal_Sikap_Siswa_PAI_${selectedClass}.csv`);
    showToast('Data jurnal sikap berhasil diekspor ke CSV.', 'success');
  };

  const scaleLabels: Record<AttitudeScale, string> = {
    1: 'Perlu Bimbingan',
    2: 'Cukup',
    3: 'Baik',
    4: 'Sangat Baik'
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Header */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4 no-print">
        <div>
          <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 uppercase">
            Penilaian Karakter & Profil Pelajar Pancasila
          </span>
          <h1 className="text-xl sm:text-2xl font-black text-slate-800 tracking-tight mt-1">
            Jurnal Penilaian Sikap Spiritual & Sosial
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Observasi perkembangan akhlakul karimah, keteladanan ibadah, dan budi pekerti peserta didik PAI.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={handleExportCsv}
            className="flex items-center gap-1.5 px-3.5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-colors"
          >
            <Download className="w-4 h-4" />
            <span>Export CSV</span>
          </button>
          <button
            onClick={triggerPrint}
            className="flex items-center gap-1.5 px-3.5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-colors"
          >
            <Printer className="w-4 h-4" />
            <span>Cetak A4</span>
          </button>
          <button
            onClick={handleOpenAdd}
            className="flex items-center gap-1.5 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-xs transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>Catat Sikap Siswa</span>
          </button>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white rounded-3xl p-4 border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-3 no-print">
        {/* Class Filter */}
        <div className="flex items-center gap-1.5 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
          <span className="text-xs font-bold text-slate-400 uppercase mr-1">Tingkat:</span>
          {['Semua', 'VII', 'VIII', 'IX'].map(lvl => (
            <button
              key={lvl}
              onClick={() => setSelectedClass(lvl)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 ${
                selectedClass === lvl
                  ? 'bg-emerald-700 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {lvl === 'Semua' ? 'Semua' : `Kelas ${lvl}`}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Cari siswa atau catatan sikap..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full pl-9.5 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-2xl text-xs focus:border-emerald-600 outline-hidden"
          />
        </div>
      </div>

      {/* Attitude Records Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredAttitudes.map(rec => {
          const avgScore = (
            (rec.religius +
              rec.jujur +
              rec.disiplin +
              rec.tanggungJawab +
              rec.santun +
              rec.peduli +
              rec.kerjaSama) /
            7
          ).toFixed(1);

          return (
            <div
              key={rec.id}
              className="bg-white rounded-3xl border border-slate-200 p-5 shadow-xs hover:border-emerald-300 transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">{rec.studentName}</h3>
                    <p className="text-[11px] text-slate-400">
                      Kelas {rec.gradeLevel} • Observasi: {formatDateIndo(rec.date)}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800">
                      Rerata {avgScore} / 4.0
                    </span>
                  </div>
                </div>

                {/* Badges of attitudes */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px]">
                  <div className="p-2 bg-slate-50 rounded-xl border border-slate-100">
                    <span className="text-slate-400 block text-[10px]">Religius</span>
                    <span className="font-bold text-slate-800">{scaleLabels[rec.religius]}</span>
                  </div>
                  <div className="p-2 bg-slate-50 rounded-xl border border-slate-100">
                    <span className="text-slate-400 block text-[10px]">Jujur</span>
                    <span className="font-bold text-slate-800">{scaleLabels[rec.jujur]}</span>
                  </div>
                  <div className="p-2 bg-slate-50 rounded-xl border border-slate-100">
                    <span className="text-slate-400 block text-[10px]">Disiplin</span>
                    <span className="font-bold text-slate-800">{scaleLabels[rec.disiplin]}</span>
                  </div>
                  <div className="p-2 bg-slate-50 rounded-xl border border-slate-100">
                    <span className="text-slate-400 block text-[10px]">Santun</span>
                    <span className="font-bold text-slate-800">{scaleLabels[rec.santun]}</span>
                  </div>
                </div>

                {/* Notes */}
                <div className="p-3 bg-emerald-50/60 rounded-2xl border border-emerald-100 text-xs text-slate-700">
                  <p className="font-bold text-emerald-900 mb-0.5">Catatan Perilaku & Tindak Lanjut Guru:</p>
                  <p className="leading-relaxed">{rec.teacherNotes}</p>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-end gap-1 no-print">
                <button
                  onClick={() => handleOpenEdit(rec)}
                  title="Edit Jurnal"
                  className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                >
                  <Edit2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleDelete(rec.id, rec.studentName)}
                  title="Hapus Jurnal"
                  className="p-2 rounded-xl text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {filteredAttitudes.length === 0 && (
        <div className="bg-white rounded-3xl p-12 text-center border border-slate-200">
          <Smile className="w-12 h-12 text-slate-300 mx-auto mb-3" />
          <h3 className="font-bold text-slate-700 text-base">Belum ada jurnal penilaian sikap</h3>
          <p className="text-xs text-slate-400 mt-1">
            Gunakan tombol "Catat Sikap Siswa" untuk mencatat observasi sikap peserta didik.
          </p>
        </div>
      )}

      {/* Add / Edit Attitude Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editingRecord ? 'Edit Catatan Sikap Siswa' : 'Tambah Penilaian Sikap Siswa'}
      >
        <form onSubmit={handleSave} className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700">Pilih Siswa</label>
              <select
                value={formStudentId}
                onChange={e => setFormStudentId(e.target.value)}
                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs outline-hidden"
              >
                {students.map(s => (
                  <option key={s.id} value={s.id}>
                    {s.name} (Kelas {s.classId})
                  </option>
                ))}
              </select>
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700">Tanggal Observasi</label>
              <input
                type="date"
                value={formDate}
                onChange={e => setFormDate(e.target.value)}
                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs outline-hidden"
                required
              />
            </div>
          </div>

          <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200 space-y-2.5 text-xs">
            <p className="font-bold text-slate-800">Skala Sikap (1: Bimbingan, 2: Cukup, 3: Baik, 4: Sangat Baik)</p>
            
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-[11px] text-slate-600 block mb-1">Sikap Religius (Ibadah & Doa)</label>
                <select
                  value={formReligius}
                  onChange={e => setFormReligius(Number(e.target.value) as AttitudeScale)}
                  className="w-full p-2 bg-white border border-slate-200 rounded-lg text-xs"
                >
                  <option value={4}>4 - Sangat Baik</option>
                  <option value={3}>3 - Baik</option>
                  <option value={2}>2 - Cukup</option>
                  <option value={1}>1 - Perlu Bimbingan</option>
                </select>
              </div>
              <div>
                <label className="text-[11px] text-slate-600 block mb-1">Kejujuran (Integritas)</label>
                <select
                  value={formJujur}
                  onChange={e => setFormJujur(Number(e.target.value) as AttitudeScale)}
                  className="w-full p-2 bg-white border border-slate-200 rounded-lg text-xs"
                >
                  <option value={4}>4 - Sangat Baik</option>
                  <option value={3}>3 - Baik</option>
                  <option value={2}>2 - Cukup</option>
                  <option value={1}>1 - Perlu Bimbingan</option>
                </select>
              </div>
              <div>
                <label className="text-[11px] text-slate-600 block mb-1">Kedisiplinan</label>
                <select
                  value={formDisiplin}
                  onChange={e => setFormDisiplin(Number(e.target.value) as AttitudeScale)}
                  className="w-full p-2 bg-white border border-slate-200 rounded-lg text-xs"
                >
                  <option value={4}>4 - Sangat Baik</option>
                  <option value={3}>3 - Baik</option>
                  <option value={2}>2 - Cukup</option>
                  <option value={1}>1 - Perlu Bimbingan</option>
                </select>
              </div>
              <div>
                <label className="text-[11px] text-slate-600 block mb-1">Kesantunan (Adab)</label>
                <select
                  value={formSantun}
                  onChange={e => setFormSantun(Number(e.target.value) as AttitudeScale)}
                  className="w-full p-2 bg-white border border-slate-200 rounded-lg text-xs"
                >
                  <option value={4}>4 - Sangat Baik</option>
                  <option value={3}>3 - Baik</option>
                  <option value={2}>2 - Cukup</option>
                  <option value={1}>1 - Perlu Bimbingan</option>
                </select>
              </div>
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-700">Catatan Observasi & Tindak Lanjut Guru</label>
            <textarea
              rows={3}
              placeholder="Deskripsikan contoh perilaku nyata yang teramati saat pembelajaran atau di luar kelas..."
              value={formTeacherNotes}
              onChange={e => setFormTeacherNotes(e.target.value)}
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
              Simpan Jurnal Sikap
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
