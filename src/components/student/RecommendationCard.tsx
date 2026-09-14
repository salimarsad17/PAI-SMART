import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AlertCircle, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { Material } from '../../types';

interface RecommendationCardProps {
  uncompletedMaterials: Material[];
  needsRemedial: boolean;
  lowestGradeTopic?: string;
  onExploreClick?: () => void;
}

export const RecommendationCard: React.FC<RecommendationCardProps> = ({
  uncompletedMaterials,
  needsRemedial,
  lowestGradeTopic
}) => {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-br from-emerald-900 to-teal-950 rounded-3xl p-6 text-white shadow-md relative overflow-hidden">
      {/* Background Islamic pattern circle */}
      <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-emerald-700/20 rounded-full blur-2xl pointer-events-none" />

      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-2 text-emerald-300 font-bold text-xs uppercase tracking-wider">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>Rekomendasi Belajar Anda</span>
        </div>
        <span className="text-[10px] font-semibold bg-emerald-800/80 px-2.5 py-0.5 rounded-full text-emerald-200 border border-emerald-700/60">
          Personalized AI
        </span>
      </div>

      <div className="mt-3 space-y-2">
        {needsRemedial ? (
          <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-amber-500/15 border border-amber-400/30 text-xs text-amber-200">
            <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <p>
              <strong>Perlu Penguatan Materi:</strong> Berdasarkan hasil evaluasi terkini, Anda disarankan mengulang kembali materi{' '}
              <span className="text-white font-bold underline underline-offset-2">
                {lowestGradeTopic || 'Thaharah dan Tata Cara Bersuci'}
              </span>{' '}
              sebelum mengikuti Asesmen Sumatif berikutnya.
            </p>
          </div>
        ) : (
          <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-emerald-800/30 border border-emerald-600/30 text-xs text-emerald-100">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <p>
              <strong>Progres Sangat Baik!</strong> Anda telah menuntaskan sebagian besar materi pokok dengan nilai di atas KKM. Lanjutkan ke bab berikutnya untuk membuka lencana penghargaan baru!
            </p>
          </div>
        )}

        {uncompletedMaterials.length > 0 && (
          <div className="pt-2">
            <p className="text-xs text-emerald-300/80 font-medium mb-2">Materi Berikutnya yang Direkomendasikan:</p>
            <div className="flex flex-col sm:flex-row gap-2">
              {uncompletedMaterials.slice(0, 2).map(mat => (
                <div
                  key={mat.id}
                  onClick={() => navigate(`/siswa/materi/${mat.id}`)}
                  className="flex-1 p-3 rounded-2xl bg-emerald-950/70 border border-emerald-700/50 hover:border-emerald-400 cursor-pointer transition-all flex items-center justify-between group"
                >
                  <div className="min-w-0 pr-2">
                    <span className="text-[10px] uppercase font-bold text-amber-300 block truncate">
                      {mat.category}
                    </span>
                    <p className="text-xs font-bold text-white truncate group-hover:text-emerald-300 transition-colors">
                      {mat.title}
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-1 transition-transform shrink-0" />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
