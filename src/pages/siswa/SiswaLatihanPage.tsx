import React, { useState, useEffect } from 'react';
import { StorageService } from '../../services/storageService';
import { AuthService } from '../../services/authService';
import { Question, Material } from '../../types';
import { InteractiveQuiz } from '../../components/quiz/InteractiveQuiz';
import { FileQuestion, Clock, CheckCircle2, Play, BookOpen } from 'lucide-react';
import { useToast } from '../../components/common/Toast';

export const SiswaLatihanPage: React.FC = () => {
  const { showToast } = useToast();
  const currentUser = AuthService.getCurrentUser();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [materials, setMaterials] = useState<Material[]>([]);
  const [selectedClass, setSelectedClass] = useState<string>('Semua');
  const [activePackage, setActivePackage] = useState<string | null>(null);
  const [activeQuizQuestions, setActiveQuizQuestions] = useState<Question[]>([]);

  useEffect(() => {
    StorageService.init();
    setQuestions(StorageService.getQuestions());
    setMaterials(StorageService.getMaterials());
  }, []);

  const handleStartPackage = (pkgTitle: string, qList: Question[]) => {
    setActivePackage(pkgTitle);
    setActiveQuizQuestions(qList);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFinishQuiz = (earned: number, totalQ: number, pct: number) => {
    if (currentUser) {
      StorageService.addGrade({
        studentId: currentUser.id,
        examId: 'latihan-mandiri',
        examTitle: activePackage || 'Latihan Soal Mandiri',
        score: pct,
        submittedAt: new Date().toISOString(),
        gradeLevel: currentUser.classId || 'VII',
        passingScore: 75,
        status: pct >= 75 ? 'TUNTAS' : 'BELUM TUNTAS'
      });
      showToast(`Hasil latihan tersimpan ke Nilai Saya (${pct}/100)`, 'success');
    }
  };

  const filteredMaterials = materials.filter(
    m => selectedClass === 'Semua' || m.gradeLevel === selectedClass
  );

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-purple-900 to-indigo-900 rounded-3xl p-6 sm:p-8 text-white shadow-md">
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-purple-800/80 text-purple-200 text-xs font-bold border border-purple-700/60 w-fit mb-2">
          <FileQuestion className="w-3.5 h-3.5 text-purple-300" />
          <span>Asesmen Formatif & Latihan Mandiri</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
          Latihan Soal Interaktif PAI
        </h1>
        <p className="text-xs sm:text-sm text-purple-100 mt-1 max-w-xl">
          Pilihan Ganda, Benar/Salah, Kompleks, Isian Singkat, dan Menjodohkan dengan koreksi otomatis dan pembahasan mendalam.
        </p>
      </div>

      {/* Active Quiz if student started one */}
      {activePackage && activeQuizQuestions.length > 0 ? (
        <div className="space-y-4">
          <button
            onClick={() => setActivePackage(null)}
            className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-50"
          >
            ← Kembali ke Daftar Paket Latihan
          </button>
          <InteractiveQuiz
            questions={activeQuizQuestions}
            title={activePackage}
            enableTimer={true}
            durationMinutes={15}
            onFinish={handleFinishQuiz}
            onClose={() => setActivePackage(null)}
          />
        </div>
      ) : (
        /* Package Selector Grid */
        <div className="space-y-4">
          {/* Class Filter */}
          <div className="bg-white p-4 rounded-3xl border border-slate-200 shadow-xs flex items-center gap-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-2">Tingkat Kelas:</span>
            {['Semua', 'VII', 'VIII', 'IX'].map(lvl => (
              <button
                key={lvl}
                onClick={() => setSelectedClass(lvl)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  selectedClass === lvl
                    ? 'bg-purple-700 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {lvl === 'Semua' ? 'Semua' : `Kelas ${lvl}`}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* General practice set */}
            <div className="bg-gradient-to-br from-white to-purple-50/40 rounded-3xl border border-purple-200 p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-purple-100 text-purple-800 uppercase">
                  Campuran Semua Bab
                </span>
                <h3 className="text-base font-bold text-slate-900">
                  Paket Simulasi Formatif Lengkap
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Latihan 10 soal acak dari seluruh kategori PAI (Al-Qur'an, Hadis, Aqidah, Akhlak, Fikih, SKI).
                </p>
                <div className="flex items-center gap-3 text-xs text-slate-500 font-medium">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>Timer 15 Menit</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-600" />
                    <span>{questions.length} Soal Tersedia</span>
                  </span>
                </div>
              </div>

              <button
                onClick={() => handleStartPackage('Simulasi Formatif Campuran', questions.slice(0, 10))}
                className="mt-5 w-full py-2.5 bg-purple-700 hover:bg-purple-800 text-white rounded-xl text-xs font-bold shadow-xs flex items-center justify-center gap-1.5 transition-all"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>Mulai Latihan Sekarang</span>
              </button>
            </div>

            {/* Per Material Sets */}
            {filteredMaterials.map(mat => {
              const matchedQ = questions.filter(
                q => q.materialId === mat.id || q.gradeLevel === mat.gradeLevel
              );
              const qCount = matchedQ.length || 3;

              return (
                <div
                  key={mat.id}
                  className="bg-white rounded-3xl border border-slate-200 p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 uppercase">
                        {mat.category}
                      </span>
                      <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                        Kelas {mat.gradeLevel}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 leading-snug">
                      Latihan: {mat.title}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                      {mat.summary}
                    </p>

                    <div className="flex items-center gap-3 text-xs text-slate-500 font-medium">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        <span>10 Menit</span>
                      </span>
                      <span className="flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        <span>{qCount} Soal Modul</span>
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleStartPackage(`Latihan: ${mat.title}`, matchedQ.length > 0 ? matchedQ : questions.slice(0, 3))}
                    className="mt-5 w-full py-2.5 bg-slate-100 hover:bg-purple-700 text-slate-700 hover:text-white rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5"
                  >
                    <Play className="w-4 h-4 fill-current" />
                    <span>Mulai Soal Bab Ini</span>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
