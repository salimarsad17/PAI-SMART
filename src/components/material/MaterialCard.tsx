import React from 'react';
import { Material } from '../../types';
import { BookOpen, CheckCircle, Clock, Award, ArrowRight } from 'lucide-react';

interface MaterialCardProps {
  material: Material;
  isCompleted?: boolean;
  onReadClick: () => void;
  onQuickToggleComplete?: () => void;
}

const CATEGORY_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  "AL-QUR'AN DAN HADIS": { bg: 'bg-emerald-50', text: 'text-emerald-800', border: 'border-emerald-200' },
  'AQIDAH': { bg: 'bg-indigo-50', text: 'text-indigo-800', border: 'border-indigo-200' },
  'AKHLAK': { bg: 'bg-pink-50', text: 'text-pink-800', border: 'border-pink-200' },
  'FIKIH': { bg: 'bg-teal-50', text: 'text-teal-800', border: 'border-teal-200' },
  'SEJARAH KEBUDAYAAN ISLAM': { bg: 'bg-amber-50', text: 'text-amber-800', border: 'border-amber-200' }
};

export const MaterialCard: React.FC<MaterialCardProps> = ({
  material,
  isCompleted,
  onReadClick,
  onQuickToggleComplete
}) => {
  const catStyle = CATEGORY_COLORS[material.category] || {
    bg: 'bg-slate-50',
    text: 'text-slate-800',
    border: 'border-slate-200'
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200 p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span
            className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${catStyle.bg} ${catStyle.text} ${catStyle.border} uppercase tracking-wider truncate max-w-[170px]`}
          >
            {material.category}
          </span>
          <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-600">
            Kelas {material.gradeLevel}
          </span>
        </div>

        {/* Title & Summary */}
        <h3
          onClick={onReadClick}
          className="text-base font-bold text-slate-800 group-hover:text-emerald-700 transition-colors cursor-pointer leading-snug"
        >
          {material.title}
        </h3>
        <p className="text-xs text-slate-500 line-clamp-2 mt-2 leading-relaxed">
          {material.summary}
        </p>

        {/* Learning Objectives Preview */}
        {material.learningObjectives?.length > 0 && (
          <div className="mt-3.5 pt-3 border-t border-slate-100 space-y-1">
            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Tujuan Pembelajaran:</p>
            <p className="text-xs text-slate-600 truncate flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
              <span>{material.learningObjectives[0]}</span>
            </p>
          </div>
        )}
      </div>

      {/* Footer Info & Action */}
      <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
        <div className="flex items-center gap-3 text-xs text-slate-400 font-medium">
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            <span>{material.estimatedReadingMinutes} mnt</span>
          </span>
          <span className="flex items-center gap-1 text-amber-600 font-semibold">
            <Award className="w-3.5 h-3.5" />
            <span>+{material.xpReward} XP</span>
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          {onQuickToggleComplete && (
            <button
              onClick={onQuickToggleComplete}
              className={`p-2 rounded-xl transition-colors ${
                isCompleted
                  ? 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200'
                  : 'bg-slate-100 text-slate-400 hover:bg-slate-200'
              }`}
              title={isCompleted ? 'Selesai dipelajari' : 'Tandai Selesai'}
            >
              <CheckCircle className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onReadClick}
            className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-emerald-50 hover:bg-emerald-600 text-emerald-700 hover:text-white text-xs font-bold transition-colors"
          >
            <span>Buka</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
