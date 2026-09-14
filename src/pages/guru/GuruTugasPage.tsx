import React, { useState, useEffect } from 'react';
import { StorageService } from '../../services/storageService';
import { Assignment, Submission, Student, PAIKategori } from '../../types';
import {
  ClipboardList,
  Plus,
  Edit2,
  Trash2,
  Search,
  CheckCircle2,
  Clock,
  Award,
  Users,
  Eye,
  Calendar,
  Save,
  MessageSquare
} from 'lucide-react';
import { useToast } from '../../components/common/Toast';
import { Modal } from '../../components/common/Modal';
import { formatDateIndo } from '../../utils/exportUtils';

export const GuruTugasPage: React.FC = () => {
  const { showToast } = useToast();
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [students, setStudents] = useState<Student[]>([]);
  const [selectedGrade, setSelectedGrade] = useState<string>('Semua');
  const [searchQuery, setSearchQuery] = useState('');

  // Modals
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingAssignment, setEditingAssignment] = useState<Assignment | null>(null);
  const [viewingSubmissionsAsg, setViewingSubmissionsAsg] = useState<Assignment | null>(null);
  const [gradingSubmission, setGradingSubmission] = useState<Submission | null>(null);

  // Form State for Assignment
  const [formTitle, setFormTitle] = useState('');
  const [formCategory, setFormCategory] = useState<PAIKategori>("AL-QUR'AN DAN HADIS");
  const [formGrade, setFormGrade] = useState<'VII' | 'VIII' | 'IX'>('VII');
  const [formInstructions, setFormInstructions] = useState('');
  const [formDeadline, setFormDeadline] = useState(
    new Date(Date.now() + 7 * 86400000).toISOString().substring(0, 10)
  );
  const [formMaxScore, setFormMaxScore] = useState(100);

  // Grading form state
  const [gradeScore, setGradeScore] = useState(90);
  const [gradeFeedback, setGradeFeedback] = useState('Bagus sekali, pemahaman dalil sangat tepat.');

  useEffect(() => {
    StorageService.init();
    setAssignments(StorageService.getAssignments());
    setSubmissions(StorageService.getSubmissions());
    setStudents(StorageService.getStudents());
  }, []);

  const filteredAssignments = assignments.filter(a => {
    const matchGrade = selectedGrade === 'Semua' || a.gradeLevel === selectedGrade;
    const matchSearch =
      !searchQuery.trim() ||
      a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (a.instructions || a.description || '').toLowerCase().includes(searchQuery.toLowerCase());
    return matchGrade && matchSearch;
  });

  const handleOpenAdd = () => {
    setEditingAssignment(null);
    setFormTitle('');
    setFormCategory("AL-QUR'AN DAN HADIS");
    setFormGrade('VII');
    setFormInstructions('');
    setFormDeadline(new Date(Date.now() + 7 * 86400000).toISOString().substring(0, 10));
    setFormMaxScore(100);
    setIsModalOpen(true);
  };

  const handleOpenEdit = (a: Assignment) => {
    setEditingAssignment(a);
    setFormTitle(a.title);
    setFormCategory(a.category as any);
    setFormGrade(a.gradeLevel as any);
    setFormInstructions(a.instructions || a.description || '');
    setFormDeadline(a.deadline ? a.deadline.substring(0, 10) : '');
    setFormMaxScore(a.maxScore || 100);
    setIsModalOpen(true);
  };

  const handleDelete = (id: string, title: string) => {
    if (window.confirm(`Hapus tugas "${title}"?`)) {
      StorageService.deleteAssignment(id);
      setAssignments(prev => prev.filter(a => a.id !== id));
      showToast('Tugas siswa berhasil dihapus.', 'success');
    }
  };

  const handleSaveAssignment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formTitle.trim()) {
      showToast('Judul tugas wajib diisi.', 'error');
      return;
    }

    if (editingAssignment) {
      const updated: Assignment = {
        ...editingAssignment,
        title: formTitle.trim(),
        category: formCategory,
        gradeLevel: formGrade,
        instructions: formInstructions.trim(),
        description: formInstructions.trim(),
        deadline: formDeadline,
        maxScore: Number(formMaxScore),
        createdAt: editingAssignment.createdAt || new Date().toISOString().substring(0, 10)
      };
      StorageService.saveAssignment(updated);
      setAssignments(prev => prev.map(a => (a.id === updated.id ? updated : a)));
      showToast('Tugas siswa berhasil diperbarui.', 'success');
    } else {
      const newAsg: Assignment = {
        id: `asg-${Date.now()}`,
        title: formTitle.trim(),
        category: formCategory,
        gradeLevel: formGrade,
        instructions: formInstructions.trim(),
        description: formInstructions.trim(),
        deadline: formDeadline,
        maxScore: Number(formMaxScore),
        createdAt: new Date().toISOString().substring(0, 10)
      };
      StorageService.saveAssignment(newAsg);
      setAssignments(prev => [newAsg, ...prev]);
      showToast('Tugas baru berhasil diterbitkan.', 'success');
    }
    setIsModalOpen(false);
  };

  const handleSaveGrade = (e: React.FormEvent) => {
    e.preventDefault();
    if (!gradingSubmission) return;

    const updatedSub: Submission = {
      ...gradingSubmission,
      score: Number(gradeScore),
      feedback: gradeFeedback.trim(),
      status: 'graded'
    };

    StorageService.saveSubmission(updatedSub);
    setSubmissions(prev => prev.map(s => (s.id === updatedSub.id ? updatedSub : s)));

    // Record into detailed grade
    StorageService.addGrade({
      id: `grade-${Date.now()}`,
      studentId: updatedSub.studentId,
      examId: updatedSub.assignmentId,
      examTitle: viewingSubmissionsAsg?.title || 'Tugas PAI',
      score: Number(gradeScore),
      submittedAt: new Date().toISOString(),
      gradeLevel: viewingSubmissionsAsg?.gradeLevel || 'VII',
      passingScore: 75,
      status: Number(gradeScore) >= 75 ? 'Tuntas' : 'Remedial'
    });

    showToast(`Nilai (${gradeScore}) dan catatan koreksi berhasil disimpan.`, 'success');
    setGradingSubmission(null);
  };

  const totalTugas = assignments.length;
  const totalSubmissions = submissions.length;
  const pendingGrading = submissions.filter(s => s.status === 'submitted' || !s.score).length;

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Header */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 uppercase">
            Penugasan & Portofolio Siswa
          </span>
          <h1 className="text-xl sm:text-2xl font-black text-slate-800 tracking-tight mt-1">
            Manajemen Tugas & Proyek Belajar PAI
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Rancang lembar kerja siswa, pantau pengumpulan berkas/catatan, dan berikan nilai serta umpan balik edukatif.
          </p>
        </div>

        <button
          onClick={handleOpenAdd}
          className="flex items-center gap-1.5 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-xs transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>Buat Tugas Baru</span>
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-xs">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
              <ClipboardList className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[11px] text-slate-400 font-semibold">Total Tugas Aktif</p>
              <p className="text-xl font-black text-slate-800">{totalTugas}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-xs">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[11px] text-slate-400 font-semibold">Jawaban Masuk</p>
              <p className="text-xl font-black text-slate-800">{totalSubmissions}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-xs">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[11px] text-slate-400 font-semibold">Perlu Dinilai</p>
              <p className="text-xl font-black text-amber-700">{pendingGrading}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-xs">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-purple-50 text-purple-700 flex items-center justify-center">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[11px] text-slate-400 font-semibold">Standar KKM</p>
              <p className="text-xl font-black text-slate-800">75</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white rounded-3xl p-4 border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-3">
        {/* Class Filter */}
        <div className="flex items-center gap-1.5 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
          <span className="text-xs font-bold text-slate-400 uppercase mr-1">Tingkat:</span>
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
              {lvl === 'Semua' ? 'Semua' : `Kelas ${lvl}`}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Cari judul tugas..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full pl-9.5 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-2xl text-xs focus:border-emerald-600 outline-hidden"
          />
        </div>
      </div>

      {/* Assignment List */}
      <div className="space-y-3">
        {filteredAssignments.map(asg => {
          const asgSubs = submissions.filter(s => s.assignmentId === asg.id);
          const asgPending = asgSubs.filter(s => s.status === 'submitted' || !s.score).length;

          return (
            <div
              key={asg.id}
              className="bg-white rounded-3xl border border-slate-200 p-5 shadow-xs hover:border-emerald-300 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div className="space-y-1.5 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-md bg-emerald-50 text-emerald-800">
                    {asg.category}
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700">
                    Kelas {asg.gradeLevel}
                  </span>
                  <span className="text-[10px] font-semibold text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    Batas: {formatDateIndo(asg.deadline)}
                  </span>
                </div>

                <h3 className="font-bold text-slate-900 text-sm sm:text-base">{asg.title}</h3>
                <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                  {asg.instructions || asg.description}
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0 pt-3 md:pt-0 border-t md:border-t-0 border-slate-100">
                <button
                  onClick={() => setViewingSubmissionsAsg(asg)}
                  className="flex items-center gap-1.5 px-3.5 py-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 rounded-xl text-xs font-bold transition-colors"
                >
                  <Users className="w-4 h-4" />
                  <span>Jawaban Siswa ({asgSubs.length})</span>
                  {asgPending > 0 && (
                    <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                  )}
                </button>

                <div className="flex items-center gap-1">
                  <button
                    onClick={() => handleOpenEdit(asg)}
                    title="Edit Tugas"
                    className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(asg.id, asg.title)}
                    title="Hapus Tugas"
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

      {filteredAssignments.length === 0 && (
        <div className="bg-white rounded-3xl p-12 text-center border border-slate-200">
          <ClipboardList className="w-12 h-12 text-slate-300 mx-auto mb-3" />
          <h3 className="font-bold text-slate-700 text-base">Belum ada tugas siswa</h3>
          <p className="text-xs text-slate-400 mt-1">
            Gunakan tombol "Buat Tugas Baru" untuk menambahkan lembar tugas.
          </p>
        </div>
      )}

      {/* Submissions Modal */}
      <Modal
        isOpen={!!viewingSubmissionsAsg}
        onClose={() => setViewingSubmissionsAsg(null)}
        title={`Jawaban Masuk: ${viewingSubmissionsAsg?.title || ''}`}
      >
        {viewingSubmissionsAsg && (
          <div className="space-y-4 max-h-[70vh] overflow-y-auto pr-1">
            {submissions.filter(s => s.assignmentId === viewingSubmissionsAsg.id).length === 0 ? (
              <div className="text-center py-8 text-slate-400 text-xs">
                Belum ada siswa yang mengirimkan jawaban untuk tugas ini.
              </div>
            ) : (
              submissions
                .filter(s => s.assignmentId === viewingSubmissionsAsg.id)
                .map(sub => {
                  const student = students.find(st => st.id === sub.studentId);
                  return (
                    <div
                      key={sub.id}
                      className="p-4 rounded-2xl border border-slate-200 bg-slate-50/50 space-y-2.5"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs font-bold text-slate-800">{student?.name || sub.studentName || 'Siswa'}</p>
                          <p className="text-[11px] text-slate-400">
                            Dikirim: {formatDateIndo(sub.submittedAt)}
                          </p>
                        </div>
                        {sub.score !== undefined ? (
                          <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800">
                            Nilai: {sub.score}
                          </span>
                        ) : (
                          <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-800">
                            Belum Dinilai
                          </span>
                        )}
                      </div>

                      <div className="p-3 bg-white rounded-xl border border-slate-100 text-xs text-slate-700">
                        <p className="font-semibold text-slate-900 mb-1">Teks Jawaban Siswa:</p>
                        <p className="whitespace-pre-line leading-relaxed">{sub.content || '-'}</p>
                      </div>

                      {sub.feedback && (
                        <div className="p-2.5 bg-emerald-50 rounded-xl border border-emerald-100 text-xs text-emerald-900">
                          <p className="font-semibold">Catatan Koreksi Guru:</p>
                          <p>{sub.feedback}</p>
                        </div>
                      )}

                      <div className="flex justify-end pt-1">
                        <button
                          onClick={() => {
                            setGradingSubmission(sub);
                            setGradeScore(sub.score || 85);
                            setGradeFeedback(sub.feedback || 'Tuntas, pemahaman materi sangat baik.');
                          }}
                          className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold shadow-xs transition-colors"
                        >
                          {sub.score !== undefined ? 'Koreksi Ulang Nilai' : 'Beri Nilai & Catatan'}
                        </button>
                      </div>
                    </div>
                  );
                })
            )}
          </div>
        )}
      </Modal>

      {/* Grade Form Modal */}
      <Modal
        isOpen={!!gradingSubmission}
        onClose={() => setGradingSubmission(null)}
        title="Input Penilaian Jawaban Tugas"
      >
        {gradingSubmission && (
          <form onSubmit={handleSaveGrade} className="space-y-4">
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700">Skor Nilai (0 - 100)</label>
              <input
                type="number"
                min={0}
                max={100}
                value={gradeScore}
                onChange={e => setGradeScore(Number(e.target.value))}
                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold outline-hidden focus:border-emerald-600"
                required
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700">Catatan / Umpan Balik Guru (Feedback)</label>
              <textarea
                rows={3}
                value={gradeFeedback}
                onChange={e => setGradeFeedback(e.target.value)}
                placeholder="Berikan masukan atau apresiasi kepada siswa..."
                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs outline-hidden"
              />
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-end gap-2">
              <button
                type="button"
                onClick={() => setGradingSubmission(null)}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-xl text-xs font-bold text-slate-600"
              >
                Batal
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 rounded-xl text-xs font-bold text-white shadow-xs"
              >
                Simpan Penilaian
              </button>
            </div>
          </form>
        )}
      </Modal>

      {/* Add / Edit Assignment Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editingAssignment ? 'Edit Tugas Siswa' : 'Buat Tugas Siswa Baru'}
      >
        <form onSubmit={handleSaveAssignment} className="space-y-4">
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-700">Judul Tugas</label>
            <input
              type="text"
              placeholder="Contoh: Rangkuman Ketentuan Thaharah dan Praktik Wudu"
              value={formTitle}
              onChange={e => setFormTitle(e.target.value)}
              className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs outline-hidden focus:border-emerald-600"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700">Kategori</label>
              <select
                value={formCategory}
                onChange={e => setFormCategory(e.target.value as any)}
                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs outline-hidden"
              >
                <option value="AL-QUR'AN DAN HADIS">AL-QUR'AN DAN HADIS</option>
                <option value="AQIDAH">AQIDAH</option>
                <option value="AKHLAK">AKHLAK</option>
                <option value="FIKIH">FIKIH</option>
                <option value="SEJARAH KEBUDAYAAN ISLAM">SEJARAH KEBUDAYAAN ISLAM</option>
              </select>
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700">Tingkat Kelas</label>
              <select
                value={formGrade}
                onChange={e => setFormGrade(e.target.value as any)}
                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs outline-hidden"
              >
                <option value="VII">Kelas VII</option>
                <option value="VIII">Kelas VIII</option>
                <option value="IX">Kelas IX</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700">Batas Waktu (Deadline)</label>
              <input
                type="date"
                value={formDeadline}
                onChange={e => setFormDeadline(e.target.value)}
                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs outline-hidden"
                required
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700">Skor Maksimal</label>
              <input
                type="number"
                min={50}
                max={100}
                value={formMaxScore}
                onChange={e => setFormMaxScore(Number(e.target.value))}
                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs outline-hidden"
                required
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-700">Petunjuk & Rincian Tugas</label>
            <textarea
              rows={4}
              placeholder="Tuliskan petunjuk pengerjaan langkah demi langkah untuk siswa..."
              value={formInstructions}
              onChange={e => setFormInstructions(e.target.value)}
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
              Simpan & Terbitkan
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
