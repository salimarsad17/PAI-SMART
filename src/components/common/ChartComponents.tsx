import React from 'react';

interface BarData {
  label: string;
  value: number;
  color?: string;
}

export const ScoreBarChart: React.FC<{
  data: BarData[];
  title?: string;
  maxScore?: number;
}> = ({ data, title, maxScore = 100 }) => {
  return (
    <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
      {title && <h4 className="text-sm font-bold text-slate-700 mb-4">{title}</h4>}
      <div className="space-y-3">
        {data.map((item, idx) => {
          const pct = Math.min(100, Math.max(0, (item.value / maxScore) * 100));
          const barColor = item.color || (item.value >= 75 ? 'bg-emerald-500' : 'bg-amber-500');
          return (
            <div key={idx} className="space-y-1">
              <div className="flex justify-between text-xs font-medium text-slate-600">
                <span className="truncate max-w-[200px]">{item.label}</span>
                <span className="font-bold text-slate-800">{item.value} / {maxScore}</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-700 ease-out ${barColor}`}
                  style={{ width: `${pct}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const KetuntasanDonutChart: React.FC<{
  tuntasCount: number;
  belumTuntasCount: number;
  title?: string;
}> = ({ tuntasCount, belumTuntasCount, title = 'Ketuntasan Belajar (KKM 75)' }) => {
  const total = tuntasCount + belumTuntasCount;
  const percentage = total > 0 ? Math.round((tuntasCount / total) * 100) : 0;
  
  // Circumference for r=38 is 2 * PI * 38 ≈ 238.76
  const strokeDashoffset = total > 0 ? 238.76 - (238.76 * percentage) / 100 : 238.76;

  return (
    <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center justify-center text-center">
      <h4 className="text-sm font-bold text-slate-700 mb-3">{title}</h4>
      <div className="relative w-36 h-36 flex items-center justify-center my-2">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="38"
            stroke="#f1f5f9"
            strokeWidth="12"
            fill="transparent"
          />
          <circle
            cx="50"
            cy="50"
            r="38"
            stroke="#10b981"
            strokeWidth="12"
            strokeDasharray="238.76"
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            fill="transparent"
            className="transition-all duration-1000 ease-out"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-extrabold text-slate-800">{percentage}%</span>
          <span className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">Tuntas</span>
        </div>
      </div>
      <div className="flex gap-4 mt-2 text-xs">
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
          <span className="text-slate-600 font-medium">Tuntas: <strong>{tuntasCount}</strong></span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-slate-200 inline-block" />
          <span className="text-slate-600 font-medium">Remedial: <strong>{belumTuntasCount}</strong></span>
        </div>
      </div>
    </div>
  );
};

export const PerformanceLineChart: React.FC<{
  labels: string[];
  values: number[];
  title?: string;
}> = ({ labels, values, title = 'Tren Perkembangan Nilai Siswa' }) => {
  const points = values.map((val, idx) => {
    const x = (idx / (values.length - 1 || 1)) * 360 + 20;
    const y = 160 - (val / 100) * 120;
    return `${x},${y}`;
  }).join(' ');

  return (
    <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
      <h4 className="text-sm font-bold text-slate-700 mb-2">{title}</h4>
      <div className="w-full overflow-x-auto">
        <svg className="w-full h-44 min-w-[320px]" viewBox="0 0 400 180">
          {/* Grid lines */}
          <line x1="20" y1="40" x2="380" y2="40" stroke="#f1f5f9" strokeDasharray="3 3" />
          <line x1="20" y1="80" x2="380" y2="80" stroke="#f1f5f9" strokeDasharray="3 3" />
          <line x1="20" y1="120" x2="380" y2="120" stroke="#f1f5f9" strokeDasharray="3 3" />
          <line x1="20" y1="160" x2="380" y2="160" stroke="#e2e8f0" />

          {/* Polyline */}
          <polyline
            fill="none"
            stroke="#059669"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            points={points}
          />

          {/* Dots */}
          {values.map((val, idx) => {
            const x = (idx / (values.length - 1 || 1)) * 360 + 20;
            const y = 160 - (val / 100) * 120;
            return (
              <g key={idx}>
                <circle cx={x} cy={y} r="5" fill="#059669" stroke="#ffffff" strokeWidth="2" />
                <text x={x} y={y - 10} textAnchor="middle" fontSize="10" fontWeight="bold" fill="#334155">
                  {val}
                </text>
                <text x={x} y={175} textAnchor="middle" fontSize="9" fill="#64748b">
                  {labels[idx] || `Sesi ${idx + 1}`}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
};
