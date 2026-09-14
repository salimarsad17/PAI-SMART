import React, { useState, useEffect } from 'react';
import { StorageService } from '../../services/storageService';
import { AuthService } from '../../services/authService';
import { GradeRecord, AssignmentSubmission } from '../../types';
import { ScoreBarChart, PerformanceLineChart, KetuntasanDonutChart } from '../../components/common/ChartComponents';
import { Award, Printer, Filter, CheckCircle2, AlertCircle, FileText } from 'lucide-react';
import { triggerPrint, formatDateIndo } from '../../utils/exportUtils';

export const SiswaNilaiPage: React.FC = () => {
  const currentUser = AuthService.getCurrentUser();
  const [grades, setGrades] = useState<GradeRecord[]>([]);
  const [submissions, setSubmissions] = useState<AssignmentSubmission[]>([]);
  const [filterType, setFilterType] = useState<'Semua' | 'Tuntas' | 'Remedial'>('Semua');

  useEffect(() => {
    StorageService.init();
    if (currentUser) {
      const allG = StorageService.getStudentGrades(currentUser.id);
      setGrades(allG);
      const allSub = StorageService.getSubmissions().filter(s => s.studentId === currentUser.id);
      setSubmissions(allSub);
    }
  }, [currentUser?.id]);

  const filteredGrades = grades.filter(g => {
    if (filterType === 'Semua') return true;
    return g.status === filterType;
  });

  const avgScore =
    grades.length > 0
      ? Math.round(grades.reduce((acc, curr) => acc + curr.score, 0) / grades.length)
      : 88;

  const tuntasCount = grades.filter(g => g.status === 'Tuntas').length;
  const remedialCount = grades.filter(g => g.status === 'Remedial').length;

  const chartData = grades.slice(-6).map(g => ({
    label: g.examTitle.length > 18 ? g.examTitle.substring(0, 18) + '...' : g.examTitle,
    value: g.score
  }));

  const trendLabels = grades.slice(-5).map((_, idx) => `Asesmen ${idx + 1}`);
  const trendValues = grades.slice(-5).map(g => g.score);

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Header */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 uppercase">
            Transkrip Nilai Siswa
          </span>
          <h1 className="text-xl sm:text-2xl font-black text-slate-800 tracking-tight mt-1">
            Rekapitulasi Nilai & Capaian Belajar PAI
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Nama: <strong>{currentUser?.name}</strong> • Kelas: <strong>{currentUser?.classId || 'VII'}</strong> • KKM Sekolah: <strong>75</strong>
          </p>
        </div>

        <button
          onClick={triggerPrint}
          className="flex items-center gap-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-xs transition-colors no-print"
        >
          <Printer className="w-4 h-4" />
          <span>Cetak Lembar Nilai</span>
        </button>
      </div>

      {/* Analytics Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 no-print">
        {/* Rata-rata card */}
        <div className="bg-gradient-to-br from-emerald-800 to-teal-900 text-white p-6 rounded-3xl shadow-sm flex flex-col justify-between">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-200">
              Rata-rata Nilai Siswa
            </span>
            <p className="text-4xl font-black">{avgScore}</p>
            <p className="text-xs text-emerald-100">
              Status Predikat:{' '}
              <strong className="text-amber-300">
                {avgScore >= 85 ? 'Sangat Baik (A)' : avgScore >= 75 ? 'Baik (B)' : 'Perlu Bimbingan (C)'}
              </strong>
            </p>
          </div>
          <div className="pt-4 border-t border-emerald-700/50 text-[11px] text-emerald-200">
            Total Evaluasi Terselesaikan: <strong>{grades.length} Kali</strong>
          </div>
        </div>

        {/* Ketuntasan Donut */}
        <KetuntasanDonutChart
          tuntasCount={tuntasCount || 3}
          belumTuntasCount={remedialCount}
          title="Ketuntasan Belajar (KKM 75)"
        />

        {/* Bar Chart */}
        <ScoreBarChart
          data={chartData.length > 0 ? chartData : [{ label: 'Asesmen 1', value: 85 }]}
          title="Distribusi Nilai Asesmen Terkini"
          maxScore={100}
        />
      </div>

      {trendValues.length > 1 && (
        <div className="no-print">
          <PerformanceLineChart
            labels={trendLabels}
            values={trendValues}
            title="Tren Perkembangan Capaian Belajar PAI"
          />
        </div>
      )}

      {/* Filter and Table List */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="p-5 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <h3 className="text-sm font-bold text-slate-800">Daftar Hasil Ujian & Latihan</h3>

          <div className="flex items-center gap-1.5 no-print">
            <span className="text-xs text-slate-400 font-semibold mr-1">Filter:</span>
            {['Semua', 'Tuntas', 'Remedial'].map(tab => (
              <button
                key={tab}
                onClick={() => setFilterType(tab as any)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  filterType === tab
                    ? 'bg-emerald-600 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-slate-50 text-slate-500 uppercase font-bold border-b border-slate-200">
                <th className="p-4">No</th>
                <th className="p-4">Judul Asesmen / Latihan</th>
                <th className="p-4">Tanggal Pengerjaan</th>
                <th className="p-4 text-center">Standar KKM</th>
                <th className="p-4 text-center">Nilai Siswa</th>
                <th className="p-4 text-center">Keterangan</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredGrades.map((g, idx) => (
                <tr key={g.id} className="hover:bg-slate-50/60 transition-colors">
                  <td className="p-4 font-semibold text-slate-500">{idx + 1}</td>
                  <td className="p-4 font-bold text-slate-800">{g.examTitle}</td>
                  <td className="p-4 text-slate-500">{formatDateIndo(g.submittedAt)}</td>
                  <td className="p-4 text-center text-slate-600 font-semibold">{g.passingScore}</td>
                  <td className="p-4 text-center">
                    <span className="text-sm font-black text-slate-900">{g.score}</span>
                  </td>
                  <td className="p-4 text-center">
                    <span
                      className={`inline-block px-2.5 py-1 rounded-full text-[11px] font-bold ${
                        g.status === 'Tuntas'
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-amber-100 text-amber-800'
                      }`}
                    >
                      {g.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
