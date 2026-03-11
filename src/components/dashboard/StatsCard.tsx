import React from 'react';

interface StatsCardProps {
  title: string;
  value: string | number;
  change: string;
  changeType: 'increase' | 'decrease';
  icon: React.ReactNode;
  bgColor: string;
  borderColor: string;
}

export default function StatsCard({
  title,
  value,
  change,
  changeType,
  icon,
  bgColor,
  borderColor,
}: StatsCardProps) {
  const changeColors = {
    increase: 'text-green-600 bg-green-50 dark:text-green-400 dark:bg-green-900/20',
    decrease: 'text-red-600 bg-red-50 dark:text-red-400 dark:bg-red-900/20',
  };

  return (
    <div className="group bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200/60 dark:border-slate-700/60 hover:shadow-lg hover:border-blue-200 dark:hover:border-blue-500 transition-all duration-200 cursor-pointer">
      <div className="flex items-center justify-between mb-4">
        <div className={`w-12 h-12 ${bgColor} rounded-xl flex items-center justify-center group-hover:opacity-80 transition-colors`}>
          {icon}
        </div>
        <span className={`text-xs font-medium ${changeColors[changeType]} px-2 py-1 rounded-full`}>
          {change}
        </span>
      </div>
      <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">{title}</h3>
      <p className="text-3xl font-bold text-slate-900 dark:text-slate-100">{value}</p>
      <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
        {changeType === 'increase' ? '+' : ''}{change.replace('%', '')} from last month
      </p>
    </div>
  );
}
