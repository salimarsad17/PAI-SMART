import React, { useState, useEffect } from 'react';
import { StorageService } from '../../services/storageService';
import { Question, QuestionType, DifficultyLevel } from '../../types';
import {
  FileQuestion,
  Plus,
  Edit2,
  Trash2,
  Download,
  Filter,
  Eye,
  CheckCircle2,
  Search,
  Sparkles
} from 'lucide-react';
import { useToast } from '../../components/common/Toast';
import { Modal } from '../../components/common/Modal';
import { exportQuestionsToCsv, downloadCsv } from '../../utils/exportUtils';

export const GuruBankSoalPage: React.FC = () => {
  const { showToast } = useToast();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [selectedClass, setSelectedClass] = useState<string>('Semua');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('Semua');
  const [selectedType, setSelectedType] = useState<string>('Semua');
  const [searchQuery, setSearchQuery] = useState('');

  // Modals
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [previewQ, setPreviewQ] = useState<Question | null>(null);
  const [editingQ, setEditingQ] = useState<Question | null>(null);

  // Form states
  const [formText, setFormText] = useState('');
  const [formType, setFormType] = useState<QuestionType>('PILIHAN_GANDA');
  const [formGrade, setFormGrade] = useState<'VII' | 'VIII' | 'IX'>('VII');
  const [formDifficulty, setFormDifficulty] = useState<DifficultyLevel>('SEDANG');
  const [formScore, setFormScore] = useState(10);
  const [formOptions, setFormOptions] = useState<string[]>(['', '', '', '']);
  const [formCorrect, setFormCorrect] = useState('');
  const [formExplanation, setFormExplanation] = useState('');

  useEffect(() => {
    StorageService.init();
    setQuestions(StorageService.getQuestions());
  }, []);

  const filteredQuestions = questions.filter(q => {
    const matchClass = selectedClass === 'Semua' || q.gradeLevel === selectedClass;
    const matchDiff = selectedDifficulty === 'Semua' || q.difficulty === selectedDifficulty;
    const matchType = selectedType === 'Semua' || q.type === selectedType;
    const matchSearch =
      !searchQuery.trim() ||
      q.questionText.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.explanation.toLowerCase().includes(searchQuery.toLowerCase());
    return matchClass && matchDiff && matchType && matchSearch;
  });

  const handleOpenAdd = () => {
    setEditingQ(null);
    setFormText('');
    setFormType('PILIHAN_GANDA');
    setFormGrade('VII');
    setFormDifficulty('SEDANG');
    setFormScore(10);
    setFormOptions(['', '', '', '']);
    setFormCorrect('');
    setFormExplanation('');
    setIsModalOpen(true);
  };

  const handleOpenEdit = (q: Question) => {
    setEditingQ(q);
    setFormText(q.questionText);
    setFormType(q.type);
    setFormGrade(q.gradeLevel);
    setFormDifficulty(q.difficulty);
    setFormScore(q.score);
    setFormOptions(q.options || ['', '', '', '']);
    setFormCorrect(String(q.correctAnswer));
    setFormExplanation(q.explanation);
    setIsModalOpen(true);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Hapus butir soal ini dari bank soal?')) {
      StorageService.deleteQuestion(id);
      setQuestions(prev => prev.filter(q => q.id !== id));
      showToast('Soal berhasil dihapus.', 'success');
    }
  };

  const handleSaveQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formText.trim()) {
      showToast('Teks butir soal wajib diisi.', 'error');
      return;
    }

    const payload: Question = {
      id: editingQ ? editingQ.id : `q-${Date.now()}`,
      gradeLevel: formGrade,
      type: formType,
      difficulty: formDifficulty,
      questionText: formText,
      options: formType === 'PILIHAN_GANDA' ? formOptions : undefined,
      correctAnswer: formCorrect,
      explanation: formExplanation,
      score: Number(formScore)
    };

    if (editingQ) {
      StorageService.updateQuestion(payload);
      setQuestions(prev => prev.map(q => (q.id === payload.id ? payload : q)));
      showToast('Soal berhasil diperbarui.', 'success');
    } else {
      StorageService.addQuestion(payload);
      setQuestions(prev => [...prev, payload]);
      showToast('Soal baru berhasil ditambahkan.', 'success');
    }
    setIsModalOpen(false);
  };

  const handleExport = () => {
    const csv = exportQuestionsToCsv(filteredQuestions);
    downloadCsv(csv, `Bank_Soal_PAI_Kelas_${selectedClass}.csv`);
    showToast('Bank soal berhasil diexport ke CSV.', 'success');
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Header */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-purple-50 text-purple-800 uppercase">
            Bank Soal & Asesmen PAI
          </span>
          <h1 className="text-xl sm:text-2xl font-black text-slate-800 tracking-tight mt-1">
            Pengelolaan Bank Soal Terpadu
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Total {questions.length} butir instrumen soal pilihan ganda, benar/salah, isian, dan kompleks.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleExport}
            className="flex items-center gap-1.5 px-3.5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-colors"
          >
            <Download className="w-4 h-4" />
            <span>Export CSV</span>
          </button>
          <button
            onClick={handleOpenAdd}
            className="flex items-center gap-1.5 px-4 py-2.5 bg-purple-700 hover:bg-purple-800 text-white rounded-xl text-xs font-bold shadow-xs transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>Buat Soal Baru</span>
          </button>
        </div>
      </div>

      {/* Filters Bar */}
      <div className="bg-white rounded-3xl p-4 sm:p-5 border border-slate-200 shadow-xs space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          {/* Class filter */}
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-bold text-slate-400 mr-1">Kelas:</span>
            {['Semua', 'VII', 'VIII', 'IX'].map(lvl => (
              <button
                key={lvl}
                onClick={() => setSelectedClass(lvl)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  selectedClass === lvl
                    ? 'bg-purple-700 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {lvl === 'Semua' ? 'Semua' : `Kelas ${lvl}`}
              </button>
            ))}
          </div>

          {/* Difficulty filter */}
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-bold text-slate-400 mr-1">Tingkat:</span>
            {['Semua', 'MUDAH', 'SEDANG', 'SUKAR'].map(d => (
              <button
                key={d}
                onClick={() => setSelectedDifficulty(d)}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                  selectedDifficulty === d
                    ? 'bg-slate-800 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {d}
              </button>
            ))}
          </div>

          {/* Search box */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Cari butir soal..."
              className="w-full pl-9 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:border-purple-600 outline-hidden"
            />
          </div>
        </div>
      </div>

      {/* Questions List */}
      <div className="space-y-3">
        {filteredQuestions.map((q, idx) => (
          <div
            key={q.id}
            className="bg-white rounded-3xl border border-slate-200 p-5 shadow-xs hover:border-purple-200 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
          >
            <div className="space-y-1.5 flex-1">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                  Kelas {q.gradeLevel}
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-purple-50 text-purple-800">
                  {q.type.replace('_', ' ')}
                </span>
                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                    q.difficulty === 'MUDAH'
                      ? 'bg-emerald-50 text-emerald-800'
                      : q.difficulty === 'SEDANG'
                      ? 'bg-blue-50 text-blue-800'
                      : 'bg-rose-50 text-rose-800'
                  }`}
                >
                  {q.difficulty}
                </span>
                <span className="text-[10px] text-slate-400">Bobot: {q.score} Poin</span>
              </div>

              <p className="text-xs sm:text-sm font-bold text-slate-800 line-clamp-2">
                {idx + 1}. {q.questionText}
              </p>

              {q.options && (
                <p className="text-[11px] text-slate-500 line-clamp-1">
                  Pilihan: {q.options.join(' • ')}
                </p>
              )}
            </div>

            <div className="flex items-center gap-1 shrink-0">
              <button
                onClick={() => setPreviewQ(q)}
                className="p-2 text-slate-400 hover:text-purple-700 hover:bg-purple-50 rounded-xl transition-colors"
                title="Pratinjau Soal & Pembahasan"
              >
                <Eye className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleOpenEdit(q)}
                className="p-2 text-slate-400 hover:text-emerald-700 hover:bg-emerald-50 rounded-xl transition-colors"
                title="Edit Soal"
              >
                <Edit2 className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleDelete(q.id)}
                className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-colors"
                title="Hapus Soal"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Preview Modal */}
      {previewQ && (
        <Modal
          isOpen={Boolean(previewQ)}
          onClose={() => setPreviewQ(null)}
          title="Pratinjau Butir Soal & Kunci"
          subtitle={`Kelas ${previewQ.gradeLevel} • ${previewQ.type}`}
          maxWidth="lg"
        >
          <div className="space-y-4 text-xs">
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-sm font-bold text-slate-800 leading-relaxed">
              {previewQ.questionText}
            </div>

            {previewQ.options && (
              <div className="space-y-2">
                <p className="font-bold text-slate-700">Pilihan Jawaban:</p>
                {previewQ.options.map((opt, i) => (
                  <div
                    key={i}
                    className={`p-3 rounded-xl border flex items-center gap-2 ${
                      opt === previewQ.correctAnswer
                        ? 'border-emerald-500 bg-emerald-50 text-emerald-900 font-bold'
                        : 'border-slate-200 bg-white'
                    }`}
                  >
                    <span className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center font-bold text-[10px]">
                      {String.fromCharCode(65 + i)}
                    </span>
                    <span>{opt}</span>
                  </div>
                ))}
              </div>
            )}

            <div className="p-4 bg-purple-50/60 rounded-2xl border border-purple-200 space-y-1">
              <p className="font-bold text-purple-900 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-purple-700" />
                <span>Kunci Jawaban: {String(previewQ.correctAnswer)}</span>
              </p>
              <p className="text-slate-700 mt-1 leading-relaxed">
                <strong>Pembahasan:</strong> {previewQ.explanation}
              </p>
            </div>
          </div>
        </Modal>
      )}

      {/* Add / Edit Question Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editingQ ? 'Edit Butir Soal PAI' : 'Buat Butir Soal Baru'}
        maxWidth="xl"
      >
        <form onSubmit={handleSaveQuestion} className="space-y-4 text-xs">
          <div className="grid grid-cols-3 gap-3">
            <div className="space-y-1">
              <label className="font-bold text-slate-700">Tingkat Kelas</label>
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
              <label className="font-bold text-slate-700">Tingkat Kesukaran</label>
              <select
                value={formDifficulty}
                onChange={e => setFormDifficulty(e.target.value as any)}
                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-medium outline-hidden"
              >
                <option value="MUDAH">Mudah</option>
                <option value="SEDANG">Sedang</option>
                <option value="SUKAR">Sukar</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="font-bold text-slate-700">Bobot Nilai</label>
              <input
                type="number"
                value={formScore}
                onChange={e => setFormScore(Number(e.target.value))}
                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-medium outline-hidden"
                required
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="font-bold text-slate-700">Teks Pertanyaan / Soal</label>
            <textarea
              rows={3}
              value={formText}
              onChange={e => setFormText(e.target.value)}
              placeholder="Tuliskan teks pertanyaan soal PAI..."
              className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl font-medium outline-hidden"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="font-bold text-slate-700">Pilihan Jawaban (A, B, C, D):</label>
            {formOptions.map((opt, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-lg bg-slate-100 flex items-center justify-center font-bold">
                  {String.fromCharCode(65 + i)}
                </span>
                <input
                  type="text"
                  value={opt}
                  onChange={e => {
                    const next = [...formOptions];
                    next[i] = e.target.value;
                    setFormOptions(next);
                  }}
                  placeholder={`Pilihan ${String.fromCharCode(65 + i)}`}
                  className="flex-1 p-2 bg-slate-50 border border-slate-200 rounded-xl font-medium outline-hidden"
                />
              </div>
            ))}
          </div>

          <div className="space-y-1">
            <label className="font-bold text-slate-700">Kunci Jawaban Benar</label>
            <input
              type="text"
              value={formCorrect}
              onChange={e => setFormCorrect(e.target.value)}
              placeholder="Tuliskan jawaban yang benar persis seperti di pilihan"
              className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-medium outline-hidden"
              required
            />
          </div>

          <div className="space-y-1">
            <label className="font-bold text-slate-700">Pembahasan Soal</label>
            <textarea
              rows={2}
              value={formExplanation}
              onChange={e => setFormExplanation(e.target.value)}
              placeholder="Penjelasan hukum fikih atau tafsir terkait jawaban..."
              className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl font-medium outline-hidden"
            />
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
              className="px-5 py-2 bg-purple-700 hover:bg-purple-800 text-white rounded-xl font-bold shadow-xs"
            >
              {editingQ ? 'Simpan Perubahan' : 'Tambahkan ke Bank Soal'}
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
