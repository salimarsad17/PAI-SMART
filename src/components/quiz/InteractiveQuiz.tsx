import React, { useState, useEffect } from 'react';
import { Question } from '../../types';
import {
  CheckCircle2,
  XCircle,
  Clock,
  RotateCcw,
  Award,
  ChevronRight,
  HelpCircle,
  Sparkles
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface InteractiveQuizProps {
  questions: Question[];
  title?: string;
  enableTimer?: boolean;
  durationMinutes?: number;
  onFinish?: (score: number, totalQuestions: number, percentage: number) => void;
  onClose?: () => void;
}

export const InteractiveQuiz: React.FC<InteractiveQuizProps> = ({
  questions,
  title = 'Latihan Soal Interaktif PAI',
  enableTimer = false,
  durationMinutes = 15,
  onFinish,
  onClose
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, any>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(durationMinutes * 60);

  // Timer countdown
  useEffect(() => {
    if (!enableTimer || isSubmitted) return;
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
  }, [enableTimer, isSubmitted]);

  useEffect(() => {
    if (enableTimer && !isSubmitted && secondsLeft === 0) {
      handleSubmitQuiz();
    }
  }, [enableTimer, isSubmitted, secondsLeft]);

  if (!questions || questions.length === 0) {
    return (
      <div className="p-8 text-center bg-white rounded-3xl border border-slate-200">
        <p className="text-sm font-semibold text-slate-600">Belum ada soal untuk materi ini.</p>
      </div>
    );
  }

  const currentQ = questions[currentIndex];

  const handleSelectSingle = (ans: string | boolean) => {
    setUserAnswers(prev => ({
      ...prev,
      [currentQ.id]: ans
    }));
  };

  const handleToggleComplex = (opt: string) => {
    const currentList: string[] = userAnswers[currentQ.id] || [];
    const updated = currentList.includes(opt)
      ? currentList.filter(item => item !== opt)
      : [...currentList, opt];
    setUserAnswers(prev => ({
      ...prev,
      [currentQ.id]: updated
    }));
  };

  const handleInputText = (text: string) => {
    setUserAnswers(prev => ({
      ...prev,
      [currentQ.id]: text
    }));
  };

  const calculateResult = () => {
    let earned = 0;
    let totalMax = 0;
    let correctCount = 0;

    questions.forEach(q => {
      totalMax += q.score;
      const userAns = userAnswers[q.id];

      if (q.type === 'pilihan_ganda' || q.type === 'benar_salah') {
        if (userAns === q.correctAnswer) {
          earned += q.score;
          correctCount++;
        }
      } else if (q.type === 'pilihan_ganda_kompleks') {
        const correctList = Array.isArray(q.correctAnswer) ? q.correctAnswer : [];
        const userList = Array.isArray(userAns) ? userAns : [];
        const isMatch =
          correctList.length === userList.length &&
          correctList.every(item => userList.includes(item));
        if (isMatch) {
          earned += q.score;
          correctCount++;
        }
      } else if (q.type === 'isian') {
        const correctStr = String(q.correctAnswer).trim().toLowerCase();
        const userStr = String(userAns || '').trim().toLowerCase();
        if (correctStr === userStr) {
          earned += q.score;
          correctCount++;
        }
      } else if (q.type === 'menjodohkan') {
        // Auto credit if user answered
        if (userAns !== undefined) {
          earned += q.score;
          correctCount++;
        }
      }
    });

    const percentage = totalMax > 0 ? Math.round((earned / totalMax) * 100) : 0;
    return { earned, totalMax, correctCount, percentage };
  };

  const handleSubmitQuiz = () => {
    setIsSubmitted(true);
    const result = calculateResult();
    try {
      if (result.percentage >= 75) {
        confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
      }
    } catch {
      // ignore
    }
    if (onFinish) {
      onFinish(result.earned, questions.length, result.percentage);
    }
  };

  const formatTimer = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  const result = calculateResult();

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
      {/* Quiz Top Header */}
      <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
            Latihan Interaktif
          </span>
          <h3 className="text-sm sm:text-base font-extrabold text-slate-800 mt-1">{title}</h3>
        </div>

        {enableTimer && !isSubmitted && (
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50 text-amber-800 border border-amber-200 font-mono text-xs font-bold">
            <Clock className="w-4 h-4 text-amber-600 animate-pulse" />
            <span>{formatTimer(secondsLeft)}</span>
          </div>
        )}
      </div>

      {/* Main Quiz Body */}
      {!isSubmitted ? (
        <div className="p-6 space-y-6">
          {/* Progress indicators */}
          <div className="flex items-center justify-between text-xs text-slate-500 font-semibold">
            <span>
              Soal No. <strong className="text-slate-800">{currentIndex + 1}</strong> dari {questions.length}
            </span>
            <span className="capitalize px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 text-[11px]">
              Tipe: {currentQ.type.replace('_', ' ')} • Bobot: {currentQ.score} poin
            </span>
          </div>

          {/* Progress bar */}
          <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
            <div
              className="bg-emerald-600 h-full rounded-full transition-all duration-300"
              style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
            />
          </div>

          {/* Question Prompt */}
          <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50/40 border border-emerald-100/80 text-sm sm:text-base font-semibold text-slate-900 leading-relaxed">
            {currentQ.questionText}
          </div>

          {/* Answer Options according to type */}
          <div className="space-y-2.5">
            {/* 1. Pilihan Ganda */}
            {currentQ.type === 'pilihan_ganda' &&
              currentQ.options?.map((opt, idx) => {
                const isSelected = userAnswers[currentQ.id] === opt;
                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectSingle(opt)}
                    className={`w-full text-left p-3.5 sm:p-4 rounded-2xl border text-xs sm:text-sm font-medium transition-all flex items-center justify-between ${
                      isSelected
                        ? 'border-emerald-600 bg-emerald-50/80 text-emerald-900 shadow-2xs'
                        : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                          isSelected ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-500'
                        }`}
                      >
                        {String.fromCharCode(65 + idx)}
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

            {/* 2. Benar / Salah */}
            {currentQ.type === 'benar_salah' && (
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: 'Benar', val: true },
                  { label: 'Salah', val: false }
                ].map(item => {
                  const isSelected = userAnswers[currentQ.id] === item.val;
                  return (
                    <button
                      key={String(item.val)}
                      onClick={() => handleSelectSingle(item.val)}
                      className={`p-4 rounded-2xl border text-sm font-bold transition-all text-center ${
                        isSelected
                          ? 'border-emerald-600 bg-emerald-50 text-emerald-900 shadow-xs'
                          : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700'
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>
            )}

            {/* 3. Pilihan Ganda Kompleks (Checkbox) */}
            {currentQ.type === 'pilihan_ganda_kompleks' && (
              <div className="space-y-2">
                <p className="text-[11px] text-slate-500 italic">Pilihlah semua jawaban yang tepat (bisa lebih dari satu):</p>
                {currentQ.options?.map((opt, idx) => {
                  const isChecked = (userAnswers[currentQ.id] || []).includes(opt);
                  return (
                    <button
                      key={idx}
                      onClick={() => handleToggleComplex(opt)}
                      className={`w-full text-left p-3.5 rounded-2xl border text-xs sm:text-sm font-medium transition-all flex items-center justify-between ${
                        isChecked
                          ? 'border-emerald-600 bg-emerald-50 text-emerald-900 shadow-2xs'
                          : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700'
                      }`}
                    >
                      <span>{opt}</span>
                      <div
                        className={`w-4 h-4 rounded-md border flex items-center justify-center ${
                          isChecked ? 'border-emerald-600 bg-emerald-600 text-white' : 'border-slate-300'
                        }`}
                      >
                        {isChecked && <CheckCircle2 className="w-3.5 h-3.5" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            )}

            {/* 4. Isian Singkat */}
            {currentQ.type === 'isian' && (
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-600">Ketik jawaban Anda:</label>
                <input
                  type="text"
                  value={userAnswers[currentQ.id] || ''}
                  onChange={e => handleInputText(e.target.value)}
                  placeholder="Ketik jawaban di sini..."
                  className="w-full p-3.5 rounded-2xl border border-slate-200 text-sm focus:border-emerald-600 focus:outline-hidden"
                />
              </div>
            )}

            {/* 5. Menjodohkan */}
            {currentQ.type === 'menjodohkan' && currentQ.matchingPairs && (
              <div className="space-y-2">
                <p className="text-xs text-slate-500">Pasangan Konsep dan Penjelasan:</p>
                <div className="space-y-2">
                  {currentQ.matchingPairs.map((pair, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-slate-50 border border-slate-200 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs"
                    >
                      <span className="font-bold text-slate-800">{pair.left}</span>
                      <span className="text-slate-400 hidden sm:inline">↔</span>
                      <span className="text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-xl border border-emerald-100 font-medium">
                        {pair.right}
                      </span>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => handleSelectSingle('matched')}
                  className={`mt-3 w-full py-2.5 rounded-xl border text-xs font-bold ${
                    userAnswers[currentQ.id]
                      ? 'bg-emerald-600 text-white border-emerald-600'
                      : 'bg-slate-100 text-slate-600 border-slate-200 hover:bg-slate-200'
                  }`}
                >
                  {userAnswers[currentQ.id] ? '✓ Pasangan Terpilih' : 'Pilih Pasangan Ini'}
                </button>
              </div>
            )}
          </div>

          {/* Navigation buttons */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-100">
            <button
              onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
              disabled={currentIndex === 0}
              className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 disabled:opacity-40"
            >
              Sebelumnya
            </button>

            {currentIndex < questions.length - 1 ? (
              <button
                onClick={() => setCurrentIndex(prev => prev + 1)}
                className="flex items-center gap-1.5 px-5 py-2 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-xs"
              >
                <span>Selanjutnya</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={handleSubmitQuiz}
                className="flex items-center gap-1.5 px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800 shadow-md"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Kumpulkan Jawaban</span>
              </button>
            )}
          </div>
        </div>
      ) : (
        /* Result & Pembahasan View */
        <div className="p-6 space-y-6">
          {/* Summary Box */}
          <div className="p-6 rounded-3xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200 text-center space-y-2">
            <div className="inline-flex p-3 rounded-full bg-emerald-100 text-emerald-800 mb-1">
              <Award className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-black text-slate-800">
              Hasil Latihan Anda: {result.percentage} / 100
            </h4>
            <p className="text-xs text-slate-600">
              Benar: <strong>{result.correctCount}</strong> dari {questions.length} soal • Status:{' '}
              <span
                className={`font-bold px-2 py-0.5 rounded-md ${
                  result.percentage >= 75 ? 'bg-emerald-200 text-emerald-800' : 'bg-amber-200 text-amber-800'
                }`}
              >
                {result.percentage >= 75 ? 'TUNTAS (LULUS KKM)' : 'PERLU PENGUATAN (REMEDIAL)'}
              </span>
            </p>
          </div>

          {/* Detail Pembahasan Soal per Soal */}
          <div className="space-y-4">
            <h5 className="text-sm font-bold text-slate-800">Pembahasan Lengkap:</h5>
            {questions.map((q, idx) => {
              const userAns = userAnswers[q.id];
              let isCorrect = false;

              if (q.type === 'pilihan_ganda' || q.type === 'benar_salah') {
                isCorrect = userAns === q.correctAnswer;
              } else if (q.type === 'pilihan_ganda_kompleks') {
                const correctList = Array.isArray(q.correctAnswer) ? q.correctAnswer : [];
                const userList = Array.isArray(userAns) ? userAns : [];
                isCorrect =
                  correctList.length === userList.length &&
                  correctList.every(item => userList.includes(item));
              } else if (q.type === 'isian') {
                isCorrect =
                  String(q.correctAnswer).trim().toLowerCase() ===
                  String(userAns || '').trim().toLowerCase();
              } else {
                isCorrect = userAns !== undefined;
              }

              return (
                <div
                  key={q.id}
                  className={`p-4 rounded-2xl border ${
                    isCorrect ? 'border-emerald-200 bg-emerald-50/30' : 'border-rose-200 bg-rose-50/30'
                  } space-y-2`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-xs font-bold text-slate-700">Soal No. {idx + 1}</span>
                    {isCorrect ? (
                      <span className="flex items-center gap-1 text-xs font-bold text-emerald-700">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Benar (+{q.score})</span>
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-xs font-bold text-rose-600">
                        <XCircle className="w-3.5 h-3.5" />
                        <span>Kurang Tepat (0)</span>
                      </span>
                    )}
                  </div>

                  <p className="text-xs font-medium text-slate-900">{q.questionText}</p>

                  <div className="text-xs space-y-1 pt-1 border-t border-slate-100">
                    <p className="text-slate-600">
                      <strong>Kunci Jawaban:</strong>{' '}
                      {Array.isArray(q.correctAnswer)
                        ? q.correctAnswer.join(', ')
                        : String(q.correctAnswer)}
                    </p>
                    <p className="text-slate-700 bg-white p-2.5 rounded-xl border border-slate-200 leading-relaxed">
                      <strong>Pembahasan:</strong> {q.explanation}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Repeat / Close */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-100">
            <button
              onClick={() => {
                setIsSubmitted(false);
                setCurrentIndex(0);
                setUserAnswers({});
                setSecondsLeft(durationMinutes * 60);
              }}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Ulangi Latihan</span>
            </button>
            {onClose && (
              <button
                onClick={onClose}
                className="px-5 py-2 rounded-xl text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800"
              >
                Selesai
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
