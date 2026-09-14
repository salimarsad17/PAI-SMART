import React, { useState, useEffect } from 'react';
import { StorageService } from '../../services/storageService';
import { AuthService } from '../../services/authService';
import { Assignment, AssignmentSubmission, Submission } from '../../types';
import { ClipboardList, Clock, CheckCircle2, Send, AlertCircle, FileText } from 'lucide-react';
import { useToast } from '../../components/common/Toast';
import { formatDateIndo } from '../../utils/exportUtils';
import { Modal } from '../../components/common/Modal';

export const SiswaTugasPage: React.FC = () => {
  const { showToast } = useToast();
  const currentUser = AuthService.getCurrentUser();

  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const [submissions, setSubmissions] = useState<AssignmentSubmission[]>([]);
  const [activeAssignment, setActiveAssignment] = useState<Assignment | null>(null);
  const [submissionContent, setSubmissionContent] = useState('');

  useEffect(() => {
    StorageService.init();
    setAssignments(StorageService.getAssignments());
    if (currentUser) {
      setSubmissions(
        StorageService.getSubmissions().filter(s => s.studentId === currentUser.id)
      );
    }
  }, [currentUser?.id]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!activeAssignment || !currentUser || !submissionContent.trim()) return;

    const newSub: Submission = {
      id: `sub-${Date.now()}`,
      assignmentId: activeAssignment.id,
      studentId: currentUser.id,
      studentName: currentUser.name,
      gradeLevel: activeAssignment.gradeLevel,
      content: submissionContent,
      submittedAt: new Date().toISOString(),
      status: 'Sudah dikumpulkan'
    };

    StorageService.saveSubmission(newSub);

    setSubmissions(prev => [
      ...prev.filter(s => s.assignmentId !== activeAssignment.id),
      newSub
    ]);

    showToast('Alhamdulillah! Tugas berhasil dikumpulkan.', 'success');
    setActiveAssignment(null);
    setSubmissionContent('');
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Banner */}
      <div className="bg-gradient-to-r from-amber-800 to-emerald-900 rounded-3xl p-6 sm:p-8 text-white shadow-md">
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-amber-700/80 text-amber-200 text-xs font-bold border border-amber-600/60 w-fit mb-2">
          <ClipboardList className="w-3.5 h-3.5" />
          <span>Tugas Mandiri & Proyek Budi Pekerti</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
          Tugas Siswa PAI & Budi Pekerti
        </h1>
        <p className="text-xs sm:text-sm text-amber-100 mt-1 max-w-xl">
          Kumpulkan resume materi, hafalan surat pendek, serta portofolio sikap berakhlak mulia kepada guru pengampu.
        </p>
      </div>

      {/* Assignment List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {assignments.map(asg => {
          const sub = submissions.find(s => s.assignmentId === asg.id);
          const isSubmitted = Boolean(sub);

          return (
            <div
              key={asg.id}
              className="bg-white rounded-3xl border border-slate-200 p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 uppercase">
                    Kelas {asg.gradeLevel}
                  </span>
                  <span
                    className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${
                      isSubmitted
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-amber-100 text-amber-800'
                    }`}
                  >
                    {isSubmitted ? 'Sudah Dikumpulkan' : 'Belum Dikumpulkan'}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-800">{asg.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{asg.description}</p>

                <div className="flex items-center gap-2 text-xs text-slate-400 pt-2 border-t border-slate-100">
                  <Clock className="w-3.5 h-3.5 text-rose-500" />
                  <span>Batas Waktu: {formatDateIndo(asg.deadline)}</span>
                </div>

                {/* Feedback from teacher if graded */}
                {sub && sub.score !== undefined && (
                  <div className="p-3 bg-emerald-50 rounded-2xl border border-emerald-100 text-xs space-y-1">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-emerald-900">Nilai Tugas:</span>
                      <span className="font-black text-emerald-800 text-sm">{sub.score} / 100</span>
                    </div>
                    {sub.feedback && (
                      <p className="text-slate-600 italic">
                        <strong>Catatan Guru:</strong> "{sub.feedback}"
                      </p>
                    )}
                  </div>
                )}
              </div>

              <div className="pt-2">
                <button
                  onClick={() => {
                    setActiveAssignment(asg);
                    setSubmissionContent(sub?.content || '');
                  }}
                  className={`w-full py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                    isSubmitted
                      ? 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs'
                  }`}
                >
                  <FileText className="w-4 h-4" />
                  <span>{isSubmitted ? 'Lihat / Edit Jawaban' : 'Kerjakan & Kirim Tugas'}</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Submission Modal */}
      {activeAssignment && (
        <Modal
          isOpen={Boolean(activeAssignment)}
          onClose={() => setActiveAssignment(null)}
          title={`Pengumpulan Tugas: ${activeAssignment.title}`}
          subtitle={`Batas Akhir: ${formatDateIndo(activeAssignment.deadline)}`}
          maxWidth="lg"
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs text-slate-700 space-y-1">
              <p className="font-bold text-slate-800">Instruksi Soal:</p>
              <p className="leading-relaxed">{activeAssignment.description}</p>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 block">
                Tuliskan Jawaban / Laporan Anda di Sini:
              </label>
              <textarea
                rows={6}
                value={submissionContent}
                onChange={e => setSubmissionContent(e.target.value)}
                placeholder="Ketik jawaban lengkap, ringkasan, atau tautan portofolio tugas Anda..."
                className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-xs sm:text-sm font-medium focus:border-emerald-600 outline-hidden focus:bg-white transition-all"
                required
              />
            </div>

            <div className="flex justify-end gap-2 pt-2 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setActiveAssignment(null)}
                className="px-4 py-2.5 rounded-xl bg-slate-100 text-slate-600 text-xs font-bold"
              >
                Batal
              </button>
              <button
                type="submit"
                className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-xs"
              >
                <Send className="w-4 h-4" />
                <span>Kirim Tugas ke Guru</span>
              </button>
            </div>
          </form>
        </Modal>
      )}
    </div>
  );
};
