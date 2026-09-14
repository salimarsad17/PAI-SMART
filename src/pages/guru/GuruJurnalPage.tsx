import React, { useState, useEffect } from 'react';
import { StorageService } from '../../services/storageService';
import { TeachingJournal } from '../../types';
import { FileSpreadsheet, Plus, Printer, Edit2, Trash2, CheckCircle2, Clock } from 'lucide-react';
import { useToast } from '../../components/common/Toast';
import { Modal } from '../../components/common/Modal';
import { triggerPrint, formatDateIndo } from '../../utils/exportUtils';

export const GuruJurnalPage: React.FC = () => {
  const { showToast } = useToast();
  const [journals, setJournals] = useState<TeachingJournal[]>([]);
  const [selectedClass, setSelectedClass] = useState<string>('Semua');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingJournal, setEditingJournal] = useState<TeachingJournal | null>(null);

  // Form states
  const [formDate, setFormDate] = useState(new Date().toISOString().substring(0, 10));
  const [formGrade, setFormGrade] = useState<'VII' | 'VIII' | 'IX'>('VII');
  const [formPeriod, setFormPeriod] = useState('1-2 (07.30 - 08.50)');
  const [formMeetingNo, setFormMeetingNo] = useState(1);
  const [formMaterial, setFormMaterial] = useState('Thaharah dan Tata Cara Bersuci dari Hadas');
  const [formObjective, setFormObjective] = useState('Siswa mampu menjelaskan ketentuan bersuci dan mempraktikkan wudu dengan benar.');
  const [formSummary, setFormSummary] = useState('Pendahuluan: Salam dan tadarus bersama. Inti: Demonstrasi rukun wudu. Penutup: Refleksi dan penugasan.');
  const [formReflection, setFormReflection] = useState('Siswa sangat antusias saat praktik wudu bergantian di musholla sekolah.');
  const [formStudentNotes, setFormStudentNotes] = useState('Seluruh siswa hadir lengkap, 2 siswa aktif bertanya tentang tayammum.');
  const [formStatus, setFormStatus] = useState<'Selesai' | 'Tertunda'>('Selesai');

  useEffect(() => {
    StorageService.init();
    setJournals(StorageService.getJournals());
  }, []);

  const filteredJournals = journals.filter(
    j => selectedClass === 'Semua' || j.gradeLevel === selectedClass
  );

  const handleOpenAdd = () => {
    setEditingJournal(null);
    setFormDate(new Date().toISOString().substring(0, 10));
    setFormGrade('VII');
    setFormPeriod('1-2 (07.30 - 08.50)');
    setFormMeetingNo(journals.length + 1);
    setFormMaterial('Thaharah dan Tata Cara Bersuci');
    setFormObjective('Siswa mampu memahami rukun dan mempraktikkan wudu.');
    setFormSummary('Pendahuluan: Doa & Tadarus. Inti: Materi dan demonstrasi. Penutup: Tanya jawab & doa.');
    setFormReflection('KBM berjalan efektif dan kondusif.');
    setFormStudentNotes('Semua siswa hadir dan berpartisipasi aktif.');
    setFormStatus('Selesai');
    setIsModalOpen(true);
  };

  const handleOpenEdit = (j: TeachingJournal) => {
    setEditingJournal(j);
    setFormDate(j.date);
    setFormGrade(j.gradeLevel);
    setFormPeriod(j.period);
    setFormMeetingNo(j.meetingNo);
    setFormMaterial(j.materialTitle);
    setFormObjective(j.learningObjective);
    setFormSummary(j.activitiesSummary);
    setFormReflection(j.teacherReflection);
    setFormStudentNotes(j.studentNotes);
    setFormStatus(j.status);
    setIsModalOpen(true);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Hapus entri jurnal mengajar ini?')) {
      StorageService.deleteJournal(id);
      setJournals(prev => prev.filter(j => j.id !== id));
      showToast('Entri jurnal berhasil dihapus.', 'success');
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();

    const payload: TeachingJournal = {
      id: editingJournal ? editingJournal.id : `jurnal-${Date.now()}`,
      date: formDate,
      gradeLevel: formGrade,
      period: formPeriod,
      meetingNo: Number(formMeetingNo),
      materialTitle: formMaterial,
      learningObjective: formObjective,
      activitiesSummary: formSummary,
      teacherReflection: formReflection,
      studentNotes: formStudentNotes,
      status: formStatus
    };

    if (editingJournal) {
      StorageService.updateJournal(payload);
      setJournals(prev => prev.map(j => (j.id === payload.id ? payload : j)));
      showToast('Jurnal mengajar berhasil diperbarui.', 'success');
    } else {
      StorageService.addJournal(payload);
      setJournals(prev => [payload, ...prev]);
      showToast('Jurnal mengajar baru berhasil dicatat.', 'success');
    }
    setIsModalOpen(false);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Header */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-teal-50 text-teal-800 uppercase">
            Administrasi Guru PAI
          </span>
          <h1 className="text-xl sm:text-2xl font-black text-slate-800 tracking-tight mt-1">
            Jurnal Mengajar Guru PAI
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Dokumentasi agenda pembelajaran harian, kegiatan apersepsi, inti, refleksi, serta catatan peserta didik.
          </p>
        </div>

        <div className="flex items-center gap-2 no-print">
          <button
            onClick={triggerPrint}
            className="flex items-center gap-1.5 px-3.5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-colors"
          >
            <Printer className="w-4 h-4" />
            <span>Cetak Jurnal (A4)</span>
          </button>
          <button
            onClick={handleOpenAdd}
            className="flex items-center gap-1.5 px-4 py-2.5 bg-teal-700 hover:bg-teal-800 text-white rounded-xl text-xs font-bold shadow-xs transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>Catat Jurnal Baru</span>
          </button>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="bg-white rounded-3xl p-3 border border-slate-200 shadow-xs flex items-center justify-between no-print">
        <div className="flex items-center gap-2">
          {['Semua', 'VII', 'VIII', 'IX'].map(lvl => (
            <button
              key={lvl}
              onClick={() => setSelectedClass(lvl)}
              className={`px-4 py-2 rounded-2xl text-xs font-bold transition-all ${
                selectedClass === lvl
                  ? 'bg-teal-700 text-white shadow-xs'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              {lvl === 'Semua' ? 'Semua Kelas' : `Kelas ${lvl}`}
            </button>
          ))}
        </div>
        <span className="text-xs text-slate-400 font-semibold px-2">
          Total: {filteredJournals.length} Catatan
        </span>
      </div>

      {/* Jurnal List */}
      <div className="space-y-4">
        {filteredJournals.map(j => (
          <div
            key={j.id}
            className="bg-white rounded-3xl border border-slate-200 p-6 shadow-xs space-y-4 hover:border-teal-300 transition-all"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-teal-100 text-teal-900">
                  Kelas {j.gradeLevel}
                </span>
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
                  Pertemuan Ke-{j.meetingNo}
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  Jam Ke: {j.period} • Tanggal: <strong>{formatDateIndo(j.date)}</strong>
                </span>
              </div>

              <div className="flex items-center gap-2 no-print">
                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    j.status === 'Selesai'
                      ? 'bg-emerald-100 text-emerald-800'
                      : 'bg-amber-100 text-amber-800'
                  }`}
                >
                  {j.status}
                </span>
                <button
                  onClick={() => handleOpenEdit(j)}
                  className="p-1.5 text-slate-400 hover:text-teal-700 rounded-lg"
                  title="Edit Jurnal"
                >
                  <Edit2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleDelete(j.id)}
                  className="p-1.5 text-slate-400 hover:text-rose-600 rounded-lg"
                  title="Hapus Jurnal"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="space-y-2 text-xs">
              <div>
                <p className="font-bold text-slate-900 text-sm">{j.materialTitle}</p>
                <p className="text-slate-500 mt-0.5">
                  <strong>Tujuan Pembelajaran:</strong> {j.learningObjective}
                </p>
              </div>

              <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100">
                <p className="font-bold text-slate-700">Ringkasan Kegiatan Pembelajaran:</p>
                <p className="text-slate-600 mt-0.5 leading-relaxed">{j.activitiesSummary}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                <div className="p-3 bg-teal-50/50 rounded-2xl border border-teal-100">
                  <p className="font-bold text-teal-900">Refleksi Guru:</p>
                  <p className="text-slate-700 mt-0.5 leading-relaxed">{j.teacherReflection}</p>
                </div>
                <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100">
                  <p className="font-bold text-slate-700">Catatan Khusus Siswa:</p>
                  <p className="text-slate-600 mt-0.5 leading-relaxed">{j.studentNotes}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Add / Edit Jurnal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editingJournal ? 'Edit Jurnal Mengajar' : 'Catat Jurnal Mengajar Baru'}
        maxWidth="2xl"
      >
        <form onSubmit={handleSave} className="space-y-4 text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
            <div className="space-y-1">
              <label className="font-bold text-slate-700">Tanggal</label>
              <input
                type="date"
                value={formDate}
                onChange={e => setFormDate(e.target.value)}
                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-medium outline-hidden"
                required
              />
            </div>
            <div className="space-y-1">
              <label className="font-bold text-slate-700">Kelas</label>
              <select
                value={formGrade}
                onChange={e => setFormGrade(e.target.value as any)}
                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-medium outline-hidden"
              >
                <option value="VII">Kelas VII</option>
                <option value="VIII">Kelas VIII</option>
                <option value="IX">Kelas IX</option>
              </select>
            </div>
            <div className="space-y-1">
              <label className="font-bold text-slate-700">Jam Ke</label>
              <input
                type="text"
                value={formPeriod}
                onChange={e => setFormPeriod(e.target.value)}
                placeholder="1-2"
                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-medium outline-hidden"
                required
              />
            </div>
            <div className="space-y-1">
              <label className="font-bold text-slate-700">Pertemuan Ke</label>
              <input
                type="number"
                value={formMeetingNo}
                onChange={e => setFormMeetingNo(Number(e.target.value))}
                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-medium outline-hidden"
                required
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="font-bold text-slate-700">Materi Pokok / KD</label>
            <input
              type="text"
              value={formMaterial}
              onChange={e => setFormMaterial(e.target.value)}
              className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-medium outline-hidden"
              required
            />
          </div>

          <div className="space-y-1">
            <label className="font-bold text-slate-700">Tujuan Pembelajaran</label>
            <input
              type="text"
              value={formObjective}
              onChange={e => setFormObjective(e.target.value)}
              className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-medium outline-hidden"
              required
            />
          </div>

          <div className="space-y-1">
            <label className="font-bold text-slate-700">Ringkasan Kegiatan Pembelajaran</label>
            <textarea
              rows={3}
              value={formSummary}
              onChange={e => setFormSummary(e.target.value)}
              className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-medium outline-hidden"
              required
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="font-bold text-slate-700">Refleksi Guru</label>
              <textarea
                rows={2}
                value={formReflection}
                onChange={e => setFormReflection(e.target.value)}
                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-medium outline-hidden"
              />
            </div>
            <div className="space-y-1">
              <label className="font-bold text-slate-700">Catatan Siswa / Kehadiran</label>
              <textarea
                rows={2}
                value={formStudentNotes}
                onChange={e => setFormStudentNotes(e.target.value)}
                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-medium outline-hidden"
              />
            </div>
          </div>

          <div className="flex justify-end gap-2 pt-3 border-t border-slate-100">
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="px-4 py-2 bg-slate-100 text-slate-600 rounded-xl font-bold"
            >
              Batal
            </button>
            <button
              type="submit"
              className="px-5 py-2 bg-teal-700 hover:bg-teal-800 text-white rounded-xl font-bold shadow-xs"
            >
              Simpan Jurnal
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
