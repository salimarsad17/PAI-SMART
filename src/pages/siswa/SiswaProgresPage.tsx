import React, { useState, useEffect } from 'react';
import { StorageService } from '../../services/storageService';
import { AuthService } from '../../services/authService';
import { Material, StudentProgress } from '../../types';
import { RecommendationCard } from '../../components/student/RecommendationCard';
import {
  BarChart3,
  CheckCircle2,
  Circle,
  Clock,
  Award,
  BookOpen,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const SiswaProgresPage: React.FC = () => {
  const navigate = useNavigate();
  const currentUser = AuthService.getCurrentUser();

  const [materials, setMaterials] = useState<Material[]>([]);
  const [progressList, setProgressList] = useState<StudentProgress[]>([]);

  useEffect(() => {
    StorageService.init();
    const mats = StorageService.getMaterials();
    setMaterials(mats);
    if (currentUser) {
      setProgressList(
        StorageService.getStudentProgress().filter(p => p.studentId === currentUser.id)
      );
    }
  }, [currentUser?.id]);

  const completedMap = new Map<string, StudentProgress>(
    progressList.map(p => [p.materialId, p])
  );
  const completedCount = progressList.filter(p => p.isCompleted).length;
  const totalMaterials = materials.length;
  const percent = totalMaterials > 0 ? Math.round((completedCount / totalMaterials) * 100) : 0;

  const uncompleted = materials.filter(m => !completedMap.get(m.id)?.isCompleted);

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Header */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 uppercase">
            Monitoring Belajar
          </span>
          <h1 className="text-xl sm:text-2xl font-black text-slate-800 tracking-tight mt-1">
            Progres Belajar PAI Saya
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Lacak ketercapaian kompetensi per bab dan tuntaskan seluruh modul untuk meraih predikat wisuda PAI.
          </p>
        </div>

        <div className="flex items-center gap-3 bg-emerald-50 p-3.5 rounded-2xl border border-emerald-200">
          <div className="text-right">
            <p className="text-[10px] font-bold text-slate-500 uppercase">Total Ketuntasan</p>
            <p className="text-2xl font-black text-emerald-800">{percent}%</p>
          </div>
          <div className="w-12 h-12 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold text-xs shadow-sm">
            {completedCount}/{totalMaterials}
          </div>
        </div>
      </div>

      {/* Recommendation Card */}
      <RecommendationCard
        uncompletedMaterials={uncompleted}
        needsRemedial={false}
      />

      {/* Module Checklist Table */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="p-5 border-b border-slate-100 flex items-center justify-between">
          <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-emerald-600" />
            <span>Checklist Ketuntasan Modul Materi PAI</span>
          </h3>
          <span className="text-xs text-slate-400 font-semibold">
            {completedCount} Selesai • {totalMaterials - completedCount} Tersisa
          </span>
        </div>

        <div className="divide-y divide-slate-100">
          {materials.map((mat, idx) => {
            const prog = completedMap.get(mat.id);
            const isDone = prog?.isCompleted;

            return (
              <div
                key={mat.id}
                className={`p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-colors ${
                  isDone ? 'bg-emerald-50/20' : 'hover:bg-slate-50'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5">
                    {isDone ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    ) : (
                      <Circle className="w-5 h-5 text-slate-300" />
                    )}
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                        Kelas {mat.gradeLevel}
                      </span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-800">
                        {mat.category}
                      </span>
                      {isDone && (
                        <span className="text-[10px] font-bold text-emerald-700">
                          ✓ Selesai ({prog?.scoreAchieved ? `Nilai: ${prog.scoreAchieved}` : 'Dipahami'})
                        </span>
                      )}
                    </div>
                    <h4 className="text-sm font-bold text-slate-900">{mat.title}</h4>
                    <p className="text-xs text-slate-500 line-clamp-1">{mat.summary}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 sm:self-center shrink-0">
                  <button
                    onClick={() => navigate(`/siswa/materi/${mat.id}`)}
                    className="flex items-center gap-1.5 px-4 py-2 bg-slate-100 hover:bg-emerald-600 hover:text-white rounded-xl text-xs font-bold text-slate-700 transition-colors"
                  >
                    <span>{isDone ? 'Buka Kembali' : 'Pelajari Sekarang'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
