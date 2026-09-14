import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  id?: string;
  title: string;
  value: string | number;
  subtitle?: string;
  icon: LucideIcon;
  color?: 'emerald' | 'amber' | 'blue' | 'purple' | 'rose' | 'indigo';
  onClick?: () => void;
}

const COLOR_CLASSES = {
  emerald: {
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
    iconBg: 'bg-emerald-100 text-emerald-700',
    valueText: 'text-emerald-900'
  },
  amber: {
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    iconBg: 'bg-amber-100 text-amber-700',
    valueText: 'text-amber-900'
  },
  blue: {
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    iconBg: 'bg-blue-100 text-blue-700',
    valueText: 'text-blue-900'
  },
  purple: {
    bg: 'bg-purple-50',
    border: 'border-purple-200',
    iconBg: 'bg-purple-100 text-purple-700',
    valueText: 'text-purple-900'
  },
  rose: {
    bg: 'bg-rose-50',
    border: 'border-rose-200',
    iconBg: 'bg-rose-100 text-rose-700',
    valueText: 'text-rose-900'
  },
  indigo: {
    bg: 'bg-indigo-50',
    border: 'border-indigo-200',
    iconBg: 'bg-indigo-100 text-indigo-700',
    valueText: 'text-indigo-900'
  }
};

export const StatCard: React.FC<StatCardProps> = ({
  id,
  title,
  value,
  subtitle,
  icon: Icon,
  color = 'emerald',
  onClick
}) => {
  const c = COLOR_CLASSES[color] || COLOR_CLASSES.emerald;

  return (
    <div
      id={id}
      onClick={onClick}
      className={`p-5 rounded-2xl border ${c.border} ${c.bg} bg-opacity-40 transition-all duration-200 hover:shadow-md ${
        onClick ? 'cursor-pointer active:scale-98' : ''
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="space-y-1">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">{title}</p>
          <p className={`text-2xl sm:text-3xl font-extrabold ${c.valueText}`}>{value}</p>
          {subtitle && <p className="text-xs text-slate-500">{subtitle}</p>}
        </div>
        <div className={`p-3.5 rounded-2xl ${c.iconBg} shadow-sm shrink-0`}>
          <Icon className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
};
