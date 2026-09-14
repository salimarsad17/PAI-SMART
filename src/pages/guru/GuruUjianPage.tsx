import React, { useState, useEffect } from 'react';
import { StorageService } from '../../services/storageService';
import { Exam } from '../../types';
import { GraduationCap, Plus, Clock, KeyRound, CheckCircle2, AlertCircle } from 'lucide-react';
import { useToast } from '../../components/common/Toast';
import { Modal } from '../../components/common/Modal';

export const GuruUjianPage: React.FC = () => {
  const { showToast } = useToast();
  const [exams, setExams] = useState<Exam[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Form states
  const [formTitle, setFormTitle] = useState('');
  const [formGrade, setFormGrade] = useState<'VII' | 'VIII' | 'IX'>('VII');
  const [formDuration, setFormDuration] = useState(60);
  const [formCategory, setFormCategory] = useState<'Formatif' | 'Sumatif Tengah Semester' | 'Sumatif Akhir Semester'>('Sumatif Akhir Semester');
  const [formPassing, setFormPassing] = useState(75);
  const [formToken, setFormToken] = useState('PAI' + Math.floor(100 + Math.random() * 900));

  useEffect(() => {
    StorageService.init();
    setExams(StorageService.getExams());
  }, []);

  const handleCreateExam = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formTitle.trim()) return;

    const newExam: Exam = {
      id: `exam-${Date.now()}`,
      title: formTitle.trim(),
      gradeLevel: formGrade,
      durationMinutes: Number(formDuration),
      passingScore: Number(formPassing),
      category: formCategory,
      token: formToken.toUpperCase(),
      status: 'active',
      startDate: new Date().toISOString(),
      endDate: new Date(Date.now() + 7 * 86400000).toISOString()
    };

    StorageService.addExam(newExam);
    setExams(prev => [...prev, newExam]);
    showToast('Jadwal & Token Ujian CBT berhasil dibuat.', 'success');
    setIsModalOpen(false);
  };

  const toggleStatus = (exam: Exam) => {
    const updated: Exam = {
      ...exam,
      status: exam.status === 'active' ? 'completed' : 'active'
    };
    StorageService.updateExam(updated);
    setExams(prev => prev.map(e => (e.id === updated.id ? updated : e)));
    showToast(`Status ujian diperbarui ke: ${updated.status}`, 'success');
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Header */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 uppercase">
            Computer Based Test (CBT)
          </span>
          <h1 className="text-xl sm:text-2xl font-black text-slate-800 tracking-tight mt-1">
            Manajemen Jadwal & Token Ujian
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Buat sesi ujian sumatif, aktifkan token akses siswa, dan pantau durasi pengerjaan.
          </p>
        </div>

        <button
          onClick={() => {
            setFormToken('PAI' + Math.floor(100 + Math.random() * 900));
            setIsModalOpen(true);
          }}
          className="flex items-center gap-1.5 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-xs transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>Buat Jadwal Ujian Baru</span>
        </button>
      </div>

      {/* Exam Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {exams.map(exam => (
          <div
            key={exam.id}
            className="bg-white rounded-3xl border border-slate-200 p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 uppercase">
                  Kelas {exam.gradeLevel}
                </span>
                <span
                  className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${
                    exam.status === 'active'
                      ? 'bg-emerald-100 text-emerald-800'
                      : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  {exam.status === 'active' ? 'Aktif Berlangsung' : 'Selesai'}
                </span>
              </div>

              <h3 className="text-base font-bold text-slate-900">{exam.title}</h3>
              <p className="text-xs text-slate-500">Kategori: {exam.category}</p>

              <div className="flex items-center gap-4 text-xs text-slate-600 pt-1">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>{exam.durationMinutes} Menit</span>
                </span>
                <span className="flex items-center gap-1">
                  <span className="font-bold text-slate-700">KKM:</span>
                  <span className="text-emerald-700 font-bold">{exam.passingScore}</span>
                </span>
              </div>

              {/* Token Display Box */}
              <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <KeyRound className="w-4 h-4 text-amber-600" />
                  <span className="text-xs font-bold text-amber-900">Token Ujian CBT:</span>
                </div>
                <span className="font-mono font-black text-sm tracking-widest text-amber-900 bg-white px-3 py-1 rounded-xl border border-amber-300">
                  {exam.token || 'TIDAK PAKAI TOKEN'}
                </span>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[11px] text-slate-400">
                Berlaku s.d: {new Date(exam.endDate).toLocaleDateString('id-ID')}
              </span>
              <button
                onClick={() => toggleStatus(exam)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors ${
                  exam.status === 'active'
                    ? 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    : 'bg-emerald-600 text-white hover:bg-emerald-700'
                }`}
              >
                {exam.status === 'active' ? 'Tutup Ujian' : 'Aktifkan Kembali'}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Buat Ujian */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Buat Sesi Ujian CBT PAI"
        maxWidth="md"
      >
        <form onSubmit={handleCreateExam} className="space-y-4 text-xs">
          <div className="space-y-1">
            <label className="font-bold text-slate-700">Judul Ujian</label>
            <input
              type="text"
              value={formTitle}
              onChange={e => setFormTitle(e.target.value)}
              placeholder="Contoh: Asesmen Sumatif Akhir Semester Ganjil PAI"
              className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl font-medium outline-hidden"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="font-bold text-slate-700">Kelas Target</label>
              <select
                value={formGrade}
                onChange={e => setFormGrade(e.target.value as any)}
                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl font-medium outline-hidden"
              >
                <option value="VII">Kelas VII</option>
                <option value="VIII">Kelas VIII</option>
                <option value="IX">Kelas IX</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="font-bold text-slate-700">Durasi (Menit)</label>
              <input
                type="number"
                value={formDuration}
                onChange={e => setFormDuration(Number(e.target.value))}
                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl font-medium outline-hidden"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="font-bold text-slate-700">Standar KKM</label>
              <input
                type="number"
                value={formPassing}
                onChange={e => setFormPassing(Number(e.target.value))}
                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl font-medium outline-hidden"
                required
              />
            </div>

            <div className="space-y-1">
              <label className="font-bold text-slate-700">Token Akses</label>
              <input
                type="text"
                value={formToken}
                onChange={e => setFormToken(e.target.value.toUpperCase())}
                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl font-mono font-bold tracking-widest outline-hidden"
                required
              />
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
              Simpan & Terbitkan
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
