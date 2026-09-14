import React, { useState, useEffect } from 'react';
import { StorageService } from '../../services/storageService';
import { AuthService } from '../../services/authService';
import { Exam, Question } from '../../types';
import {
  GraduationCap,
  Clock,
  KeyRound,
  AlertTriangle,
  CheckCircle2,
  HelpCircle,
  Award,
  ArrowRight,
  RotateCcw
} from 'lucide-react';
import { useToast } from '../../components/common/Toast';
import confetti from 'canvas-confetti';

export const SiswaUjianPage: React.FC = () => {
  const { showToast } = useToast();
  const currentUser = AuthService.getCurrentUser();

  const [exams, setExams] = useState<Exam[]>([]);
  const [activeExam, setActiveExam] = useState<Exam | null>(null);
  const [examQuestions, setExamQuestions] = useState<Question[]>([]);
  const [tokenInput, setTokenInput] = useState('');
  const [isTokenVerified, setIsTokenVerified] = useState(false);

  // CBT State
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [doubtful, setDoubtful] = useState<Record<string, boolean>>({});
  const [secondsLeft, setSecondsLeft] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [examResult, setExamResult] = useState<{ score: number; isPassed: boolean } | null>(null);

  useEffect(() => {
    StorageService.init();
    setExams(StorageService.getExams());
  }, []);

  // Timer countdown
  useEffect(() => {
    if (!isTokenVerified || isFinished) return;
    const timer = setInterval(() => {
      setSecondsLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [isTokenVerified, isFinished]);

  useEffect(() => {
    if (isTokenVerified && !isFinished && secondsLeft === 0 && activeExam) {
      handleSubmitExam();
    }
  }, [secondsLeft, isTokenVerified, isFinished, activeExam]);

  const handleSelectExam = (exam: Exam) => {
    setActiveExam(exam);
    setTokenInput('');
    setIsTokenVerified(false);
    setIsFinished(false);
    setExamResult(null);
    setCurrentIdx(0);
    setAnswers({});
    setDoubtful({});

    const allQ = StorageService.getQuestions();
    const matched = allQ.filter(q => q.gradeLevel === exam.gradeLevel);
    setExamQuestions(matched.length >= 5 ? matched.slice(0, 10) : allQ.slice(0, 10));
    setSecondsLeft(exam.durationMinutes * 60);
  };

  const handleVerifyToken = () => {
    if (!activeExam) return;
    if (activeExam.token && tokenInput.trim().toUpperCase() !== activeExam.token.toUpperCase()) {
      showToast('Token ujian tidak valid. Hubungi pengawas/guru.', 'error');
      return;
    }
    setIsTokenVerified(true);
    showToast('Token valid! Ujian dimulai. Selamat mengerjakan!', 'success');
  };

  const handleSelectAnswer = (qId: string, ans: any) => {
    setAnswers(prev => ({ ...prev, [qId]: ans }));
  };

  const toggleDoubtful = (qId: string) => {
    setDoubtful(prev => ({ ...prev, [qId]: !prev[qId] }));
  };

  const handleSubmitExam = () => {
    if (!activeExam) return;
    let earned = 0;
    let max = 0;

    examQuestions.forEach(q => {
      max += q.score;
      if (answers[q.id] === q.correctAnswer) {
        earned += q.score;
      }
    });

    const finalPct = max > 0 ? Math.round((earned / max) * 100) : 0;
    const passed = finalPct >= activeExam.passingScore;

    setExamResult({ score: finalPct, isPassed: passed });
    setIsFinished(true);

    if (currentUser) {
      StorageService.addGrade({
        studentId: currentUser.id,
        examId: activeExam.id,
        examTitle: activeExam.title,
        score: finalPct,
        submittedAt: new Date().toISOString(),
        gradeLevel: activeExam.gradeLevel,
        passingScore: activeExam.passingScore,
        status: passed ? 'TUNTAS' : 'BELUM TUNTAS'
      });
    }

    try {
      if (passed) {
        confetti({ particleCount: 90, spread: 70, origin: { y: 0.6 } });
      }
    } catch {
      // ignore
    }
    showToast('Ujian telah dikumpulkan dan nilai telah tersimpan!', 'success');
  };

  const formatTimer = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-900 to-teal-950 rounded-3xl p-6 sm:p-8 text-white shadow-md">
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-800/80 text-emerald-200 text-xs font-bold border border-emerald-700/60 w-fit mb-2">
          <GraduationCap className="w-3.5 h-3.5 text-amber-300" />
          <span>Computer Based Test (CBT) PAI</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
          Asesmen Sumatif & Ujian Online
        </h1>
        <p className="text-xs sm:text-sm text-emerald-100 mt-1 max-w-xl">
          Sistem penilaian sumatif resmi UPT SMPN 2 Rebang Tangkas berstandar kurikulum dengan pengawasan token dan waktu otomatis.
        </p>
      </div>

      {/* When no exam selected */}
      {!activeExam && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {exams.map(exam => (
            <div
              key={exam.id}
              className="bg-white rounded-3xl border border-slate-200 p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 uppercase">
                    Kelas {exam.gradeLevel}
                  </span>
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800">
                    Status: {exam.status.toUpperCase()}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900">{exam.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Kategori: {exam.category} • Standar Kelulusan Minimal (KKM):{' '}
                  <strong className="text-emerald-700">{exam.passingScore}</strong>
                </p>
                <div className="flex items-center gap-3 text-xs text-slate-500 pt-2 font-medium">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-slate-400" />
                    <span>{exam.durationMinutes} Menit</span>
                  </span>
                  {exam.token && (
                    <span className="flex items-center gap-1 text-amber-600 font-semibold">
                      <KeyRound className="w-4 h-4" />
                      <span>Membutuhkan Token Guru</span>
                    </span>
                  )}
                </div>
              </div>

              <button
                onClick={() => handleSelectExam(exam)}
                className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-xs flex items-center justify-center gap-2 transition-all"
              >
                <span>Pilih Ujian Ini</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Selected Exam: Token Gate */}
      {activeExam && !isTokenVerified && (
        <div className="max-w-md mx-auto bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-md text-center space-y-5">
          <div className="w-14 h-14 bg-emerald-50 text-emerald-700 rounded-2xl flex items-center justify-center mx-auto border border-emerald-100">
            <KeyRound className="w-7 h-7" />
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-slate-900">{activeExam.title}</h3>
            <p className="text-xs text-slate-500">
              Durasi: {activeExam.durationMinutes} Menit • KKM: {activeExam.passingScore}
            </p>
          </div>

          <div className="p-3 bg-amber-50 rounded-2xl border border-amber-200 text-xs text-amber-900 text-left">
            <p className="font-bold mb-1">Tata Tertib Ujian CBT:</p>
            <ul className="list-disc pl-4 space-y-0.5 text-[11px]">
              <li>Waktu berjalan otomatis saat tombol mulai diklik.</li>
              <li>Dilarang berpindah tab atau memuat ulang halaman.</li>
              <li>Token ujian diberikan oleh Guru Pengawas: <strong>{activeExam.token || 'PAI2026'}</strong></li>
            </ul>
          </div>

          <div className="space-y-1.5 text-left">
            <label className="text-xs font-bold text-slate-700">Masukkan Token Ujian:</label>
            <input
              type="text"
              value={tokenInput}
              onChange={e => setTokenInput(e.target.value.toUpperCase())}
              placeholder={activeExam.token ? `Contoh: ${activeExam.token}` : 'Masukkan token'}
              className="w-full text-center tracking-widest font-mono text-base font-bold py-3 bg-slate-50 border border-slate-200 rounded-2xl focus:border-emerald-600 outline-hidden"
            />
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setActiveExam(null)}
              className="flex-1 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-xl text-xs font-bold"
            >
              Batal
            </button>
            <button
              onClick={handleVerifyToken}
              className="flex-1 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-xs"
            >
              Mulai Ujian
            </button>
          </div>
        </div>
      )}

      {/* CBT In-Progress Workspace */}
      {activeExam && isTokenVerified && !isFinished && examQuestions.length > 0 && (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Question Area (3 Cols) */}
          <div className="lg:col-span-3 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
            {/* Header with question number and timer */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <span className="text-xs text-slate-500 font-semibold">
                  Soal Nomor <strong className="text-slate-900 text-base">{currentIdx + 1}</strong> dari {examQuestions.length}
                </span>
              </div>

              {/* Timer & Ragu-ragu checkbox */}
              <div className="flex items-center gap-3">
                <div
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-mono text-xs font-bold border ${
                    secondsLeft < 300
                      ? 'bg-rose-50 text-rose-700 border-rose-200 animate-pulse'
                      : 'bg-emerald-50 text-emerald-800 border-emerald-200'
                  }`}
                >
                  <Clock className="w-4 h-4" />
                  <span>{formatTimer(secondsLeft)}</span>
                </div>

                <button
                  onClick={() => toggleDoubtful(examQuestions[currentIdx].id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-colors ${
                    doubtful[examQuestions[currentIdx].id]
                      ? 'bg-amber-500 text-white border-amber-500'
                      : 'bg-slate-100 text-slate-600 border-slate-200 hover:bg-slate-200'
                  }`}
                >
                  {doubtful[examQuestions[currentIdx].id] ? '✓ Ragu-Ragu' : 'Ragu-Ragu'}
                </button>
              </div>
            </div>

            {/* Question Text */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-sm sm:text-base font-semibold text-slate-900 leading-relaxed">
              {examQuestions[currentIdx].questionText}
            </div>

            {/* Options */}
            <div className="space-y-2.5">
              {examQuestions[currentIdx].options?.map((opt, optIdx) => {
                const isSelected = answers[examQuestions[currentIdx].id] === opt;
                return (
                  <button
                    key={optIdx}
                    onClick={() => handleSelectAnswer(examQuestions[currentIdx].id, opt)}
                    className={`w-full text-left p-4 rounded-2xl border text-xs sm:text-sm font-medium transition-all flex items-center justify-between ${
                      isSelected
                        ? 'border-emerald-600 bg-emerald-50/80 text-emerald-900 shadow-2xs font-semibold'
                        : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                          isSelected ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-500'
                        }`}
                      >
                        {String.fromCharCode(65 + optIdx)}
                      </span>
                      <span>{opt}</span>
                    </div>
                    <div
                      className={`w-4 h-4 rounded-full border-2 ${
                        isSelected ? 'border-emerald-600 bg-emerald-600' : 'border-slate-300'
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Navigation buttons */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <button
                onClick={() => setCurrentIdx(prev => Math.max(0, prev - 1))}
                disabled={currentIdx === 0}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold disabled:opacity-40"
              >
                Sebelumnya
              </button>

              {currentIdx < examQuestions.length - 1 ? (
                <button
                  onClick={() => setCurrentIdx(prev => prev + 1)}
                  className="px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-xs"
                >
                  Selanjutnya
                </button>
              ) : (
                <button
                  onClick={handleSubmitExam}
                  className="px-6 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold shadow-md flex items-center gap-1.5"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Selesai & Kumpulkan</span>
                </button>
              )}
            </div>
          </div>

          {/* Question Palette (1 Col) */}
          <div className="bg-white rounded-3xl border border-slate-200 p-5 shadow-xs space-y-4 h-fit">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Nomor Soal CBT
            </h4>

            <div className="grid grid-cols-5 gap-2">
              {examQuestions.map((q, idx) => {
                const isAnswered = answers[q.id] !== undefined;
                const isDoubt = doubtful[q.id];
                const isCur = currentIdx === idx;

                let colorClass = 'bg-slate-100 text-slate-600 border-slate-200';
                if (isDoubt) {
                  colorClass = 'bg-amber-500 text-white border-amber-600';
                } else if (isAnswered) {
                  colorClass = 'bg-emerald-600 text-white border-emerald-700';
                }

                return (
                  <button
                    key={idx}
                    onClick={() => setCurrentIdx(idx)}
                    className={`w-full aspect-square rounded-xl text-xs font-bold border transition-transform ${colorClass} ${
                      isCur ? 'ring-2 ring-emerald-500 ring-offset-2 scale-105' : ''
                    }`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>

            {/* Legend */}
            <div className="space-y-1.5 pt-3 border-t border-slate-100 text-[11px] text-slate-500">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-md bg-emerald-600 inline-block" />
                <span>Sudah dijawab</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-md bg-amber-500 inline-block" />
                <span>Ragu-ragu</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-md bg-slate-200 inline-block" />
                <span>Belum dijawab</span>
              </div>
            </div>

            <button
              onClick={handleSubmitExam}
              className="w-full py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold shadow-xs transition-colors"
            >
              Kumpulkan Ujian
            </button>
          </div>
        </div>
      )}

      {/* Result View */}
      {isFinished && examResult && (
        <div className="max-w-xl mx-auto bg-white rounded-3xl border border-slate-200 p-8 shadow-lg text-center space-y-5">
          <div
            className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto ${
              examResult.isPassed
                ? 'bg-emerald-100 text-emerald-700'
                : 'bg-amber-100 text-amber-700'
            }`}
          >
            <Award className="w-8 h-8" />
          </div>

          <div className="space-y-1">
            <h2 className="text-2xl font-black text-slate-800">Hasil Asesmen Ujian</h2>
            <p className="text-xs text-slate-500">{activeExam?.title}</p>
          </div>

          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-2">
            <p className="text-xs uppercase font-bold text-slate-400">Nilai Akhir Siswa:</p>
            <p className="text-5xl font-black text-emerald-800">{examResult.score}</p>
            <p className="text-xs text-slate-600">
              Standar KKM: <strong>{activeExam?.passingScore}</strong> • Status:{' '}
              <span
                className={`font-bold px-2 py-0.5 rounded ${
                  examResult.isPassed
                    ? 'bg-emerald-100 text-emerald-800'
                    : 'bg-amber-100 text-amber-800'
                }`}
              >
                {examResult.isPassed ? 'TUNTAS (LULUS)' : 'BELUM TUNTAS (REMEDIAL)'}
              </span>
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => setActiveExam(null)}
              className="flex-1 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl text-xs font-bold shadow-xs"
            >
              Kembali ke Daftar Ujian
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
