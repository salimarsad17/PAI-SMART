import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { StorageService } from '../../services/storageService';
import { AuthService } from '../../services/authService';
import { Teacher, Student, Material, Question, GradeRecord } from '../../types';
import { StatCard } from '../../components/common/StatCard';
import { ScoreBarChart, KetuntasanDonutChart } from '../../components/common/ChartComponents';
import {
  Users,
  Layers,
  BookOpen,
  Database,
  Award,
  CheckCircle2,
  PlusCircle,
  FileQuestion,
  GraduationCap,
  FileSpreadsheet,
  Printer,
  Sparkles,
  ArrowRight,
  TrendingUp
} from 'lucide-react';
import { formatDateIndo } from '../../utils/exportUtils';

export const GuruDashboardPage: React.FC = () => {
  const navigate = useNavigate();
  const currentUser = AuthService.getCurrentUser();

  const [teacher, setTeacher] = useState<Teacher | null>(null);
  const [students, setStudents] = useState<Student[]>([]);
  const [materials, setMaterials] = useState<Material[]>([]);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [grades, setGrades] = useState<GradeRecord[]>([]);

  useEffect(() => {
    StorageService.init();
    setTeacher(StorageService.getTeacherProfile());
    setStudents(StorageService.getStudents());
    setMaterials(StorageService.getMaterials());
    setQuestions(StorageService.getQuestions());
    setGrades(StorageService.getAllGrades());
  }, []);

  const totalSiswa = students.length;
  const totalMateri = materials.length;
  const totalBankSoal = questions.length;
  const totalKelas = 3; // VII, VIII, IX

  const avgGrade =
    students.length > 0
      ? Math.round(
          students.reduce((acc, s) => acc + (s.averageGrade || 0), 0) / students.length
        )
      : 86;

  const tuntasCount = students.filter(s => s.averageGrade >= 75).length;
  const belumTuntasCount = totalSiswa - tuntasCount;
  const ketuntasanPct = totalSiswa > 0 ? Math.round((tuntasCount / totalSiswa) * 100) : 100;

  const barChartData = [
    { label: 'Kelas VII', value: 88, color: 'bg-emerald-500' },
    { label: 'Kelas VIII', value: 84, color: 'bg-teal-500' },
    { label: 'Kelas IX', value: 89, color: 'bg-indigo-500' }
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Teacher Profile Banner */}
      <div className="bg-gradient-to-r from-emerald-900 via-teal-900 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-md relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-800/80 text-emerald-200 text-xs font-bold border border-emerald-700/60">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Portal Guru PAI & Budi Pekerti</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Assalamu'alaikum, {teacher?.name || 'Bapak Guru'}!
            </h1>
            <p className="text-xs sm:text-sm text-emerald-100 max-w-xl">
              NIP: {teacher?.nip || '19820512 200801 1 015'} • Satminkal: UPT SMPN 2 Rebang Tangkas • Kelola pembelajaran digital, bank soal, dan evaluasi siswa secara terpadu.
            </p>
          </div>

          {/* Quick Stats Pill */}
          <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 shrink-0">
            <div className="text-right">
              <p className="text-[10px] font-bold text-amber-300 uppercase">Ketuntasan Klasikal</p>
              <p className="text-2xl font-black text-white">{ketuntasanPct}%</p>
              <p className="text-[10px] text-emerald-200">Target KKM ≥ 75</p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-emerald-600 flex items-center justify-center text-white font-bold shadow-xs">
              <TrendingUp className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>

      {/* Metric Cards Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        <StatCard
          title="Total Siswa PAI"
          value={totalSiswa}
          subtitle="Kelas VII, VIII, IX"
          icon={Users}
          color="emerald"
          onClick={() => navigate('/guru/siswa')}
        />
        <StatCard
          title="Total Modul Materi"
          value={totalMateri}
          subtitle="5 Kategori PAI"
          icon={BookOpen}
          color="blue"
          onClick={() => navigate('/guru/materi')}
        />
        <StatCard
          title="Bank Soal Aktif"
          value={totalBankSoal}
          subtitle="Semua Jenis Soal"
          icon={Database}
          color="purple"
          onClick={() => navigate('/guru/soal')}
        />
        <StatCard
          title="Rata-rata Nilai"
          value={avgGrade}
          subtitle="Di atas KKM 75"
          icon={Award}
          color="amber"
          onClick={() => navigate('/guru/nilai')}
        />
      </div>

      {/* Quick Action Bar (Mandated by Section E) */}
      <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-xs space-y-3">
        <p className="text-xs font-bold uppercase tracking-wider text-slate-400 px-1">
          Aksi Cepat Guru (Quick Actions):
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
          {[
            { label: 'Tambah Materi', icon: PlusCircle, path: '/guru/materi', color: 'text-emerald-700 bg-emerald-50 border-emerald-200' },
            { label: 'Buat Soal', icon: FileQuestion, path: '/guru/soal', color: 'text-purple-700 bg-purple-50 border-purple-200' },
            { label: 'Buat Ujian', icon: GraduationCap, path: '/guru/ujian', color: 'text-blue-700 bg-blue-50 border-blue-200' },
            { label: 'Input Nilai', icon: Award, path: '/guru/nilai', color: 'text-amber-700 bg-amber-50 border-amber-200' },
            { label: 'Jurnal Mengajar', icon: FileSpreadsheet, path: '/guru/jurnal', color: 'text-teal-700 bg-teal-50 border-teal-200' },
            { label: 'Cetak Laporan', icon: Printer, path: '/guru/laporan', color: 'text-slate-700 bg-slate-100 border-slate-200' }
          ].map((act, idx) => {
            const Icon = act.icon;
            return (
              <button
                key={idx}
                onClick={() => navigate(act.path)}
                className={`p-3 rounded-2xl border text-left flex flex-col justify-between gap-2 hover:shadow-xs transition-all active:scale-95 ${act.color}`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-xs font-bold leading-snug">{act.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Analytics and Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Ketuntasan Donut */}
        <KetuntasanDonutChart
          tuntasCount={tuntasCount}
          belumTuntasCount={belumTuntasCount}
          title="Persentase Ketuntasan Siswa (KKM 75)"
        />

        {/* Class Comparison Chart */}
        <div className="lg:col-span-2">
          <ScoreBarChart
            data={barChartData}
            title="Rata-rata Nilai PAI per Tingkat Kelas (SMPN 2 Rebang Tangkas)"
            maxScore={100}
          />
        </div>
      </div>

      {/* Recent Student Activity & Top Achievers */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top 5 Students */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xs p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2">
              <Award className="w-4 h-4 text-emerald-600" />
              <span>Siswa Berprestasi Teratas (Berdasarkan XP)</span>
            </h3>
            <button
              onClick={() => navigate('/guru/siswa')}
              className="text-xs font-bold text-emerald-700 hover:text-emerald-800"
            >
              Kelola Siswa
            </button>
          </div>

          <div className="space-y-2">
            {students.slice(0, 5).map((std, idx) => (
              <div
                key={std.id}
                className="p-3 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center text-xs font-bold">
                    {idx + 1}
                  </span>
                  <img
                    src={std.avatar}
                    alt={std.name}
                    className="w-8 h-8 rounded-xl object-cover border border-slate-200"
                  />
                  <div>
                    <p className="text-xs font-bold text-slate-900">{std.name}</p>
                    <p className="text-[10px] text-slate-500">
                      Kelas {std.classId} • NIS: {std.nis}
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-xs font-black text-emerald-800">{std.averageGrade}</span>
                  <span className="block text-[10px] text-slate-400 font-medium">
                    {std.xp} XP
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Submissions / Exam grades */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xs p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-blue-600" />
              <span>Aktivitas Evaluasi Terbaru</span>
            </h3>
            <button
              onClick={() => navigate('/guru/nilai')}
              className="text-xs font-bold text-emerald-700 hover:text-emerald-800"
            >
              Lihat Rekap Nilai
            </button>
          </div>

          <div className="space-y-2.5">
            {grades.slice(-5).reverse().map((gr, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-2xl border border-slate-100 hover:border-emerald-200 bg-slate-50/50 flex items-center justify-between"
              >
                <div className="space-y-0.5">
                  <p className="text-xs font-bold text-slate-800">{gr.examTitle}</p>
                  <p className="text-[11px] text-slate-400">
                    Kelas {gr.gradeLevel} • {formatDateIndo(gr.submittedAt)}
                  </p>
                </div>
                <div className="text-right">
                  <span
                    className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-bold ${
                      gr.status === 'Tuntas'
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-amber-100 text-amber-800'
                    }`}
                  >
                    {gr.score} ({gr.status})
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
