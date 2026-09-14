import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { StorageService } from '../../services/storageService';
import { AuthService } from '../../services/authService';
import { Student, Material, Announcement, Exam } from '../../types';
import { StatCard } from '../../components/common/StatCard';
import { RecommendationCard } from '../../components/student/RecommendationCard';
import {
  BookOpen,
  Award,
  BarChart2,
  Sparkles,
  ArrowRight,
  Clock,
  Calendar,
  Bell,
  GraduationCap,
  PlayCircle,
  Trophy,
  CheckCircle2
} from 'lucide-react';
import { getLevelName } from '../../utils/exportUtils';

export const SiswaDashboardPage: React.FC = () => {
  const navigate = useNavigate();
  const currentUser = AuthService.getCurrentUser();
  const [student, setStudent] = useState<Student | null>(null);
  const [materials, setMaterials] = useState<Material[]>([]);
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [exams, setExams] = useState<Exam[]>([]);

  useEffect(() => {
    StorageService.init();
    const std = currentUser ? StorageService.getStudentById(currentUser.id) : null;
    setStudent(std || StorageService.getStudents()[1]);
    setMaterials(StorageService.getMaterials());
    setAnnouncements(StorageService.getAnnouncements());
    setExams(StorageService.getExams().filter(e => e.status === 'aktif'));
  }, [currentUser?.id]);

  const classLevel = (student?.classId || 'VII') as 'VII' | 'VIII' | 'IX';
  const classMaterials = materials.filter(m => m.gradeLevel === classLevel);
  const completedProgress = StorageService.getStudentProgress().filter(
    p => p.studentId === student?.id && p.isCompleted
  );
  const completedCount = completedProgress.length || (student?.completedMaterialsCount ?? 0);
  const totalMaterials = classMaterials.length || 10;
  const progressPercent = Math.min(100, Math.round((completedCount / totalMaterials) * 100));

  const uncompleted = classMaterials.filter(
    m => !completedProgress.some(p => p.materialId === m.id)
  );

  const lastStudied = classMaterials[0];

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-emerald-800 via-emerald-700 to-teal-800 rounded-3xl p-6 sm:p-8 text-white shadow-md relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/60 text-emerald-200 text-xs font-bold border border-emerald-600/40">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>{getLevelName(student?.level || 1)}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Assalamu'alaikum, {student?.name || 'Siswa'}!
            </h1>
            <p className="text-xs sm:text-sm text-emerald-100/90 max-w-xl">
              Selamat datang di Media Pembelajaran PAI UPT SMPN 2 Rebang Tangkas. Mari lanjutkan belajar dengan penuh semangat dan raih prestasi terbaikmu hari ini!
            </p>
          </div>

          <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 shrink-0">
            <img
              src={student?.avatar || 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&auto=format&fit=crop&q=80'}
              alt={student?.name}
              className="w-14 h-14 rounded-2xl object-cover border-2 border-white/40 shadow-sm"
            />
            <div className="space-y-0.5">
              <p className="text-xs font-bold text-amber-300 uppercase">Kelas {student?.classId || 'VII'}</p>
              <p className="text-sm font-extrabold text-white">{student?.name}</p>
              <p className="text-[11px] text-emerald-200">NIS: {student?.nis || '252607002'}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Masterku AI Quick Access Banner */}
      <div className="bg-gradient-to-r from-amber-500 via-amber-600 to-emerald-700 rounded-3xl p-5 text-white shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center shrink-0 backdrop-blur-xs">
            <Sparkles className="w-6 h-6 text-amber-200" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] uppercase tracking-wider font-extrabold px-2 py-0.5 rounded-md bg-white/20 text-white">
                Pustaka Baru
              </span>
              <span className="text-xs font-bold text-amber-100">Kemenag & Kemdikbud 2026</span>
            </div>
            <h3 className="text-base sm:text-lg font-black leading-tight text-white mt-0.5">
              Masterku AI — Al-Qur'an, Hadits 5 Perawi, Buku PAI CP 2026, 25 Nabi & Kisah Teladan
            </h3>
            <p className="text-xs text-amber-100/90 mt-0.5">
              Akses cepat pustaka digital terlengkap dengan audio murottal dan asisten belajar interaktif.
            </p>
          </div>
        </div>

        <button
          onClick={() => navigate('/siswa/masterku')}
          className="px-5 py-2.5 rounded-xl bg-white text-slate-900 font-extrabold text-xs hover:bg-amber-100 shadow-md transition-all shrink-0 flex items-center justify-center gap-2"
        >
          <span>Buka Masterku AI</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Stats Cards Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
        <StatCard
          title="Progres Belajar"
          value={`${progressPercent}%`}
          subtitle={`${completedCount} dari ${totalMaterials} materi`}
          icon={BarChart2}
          color="emerald"
        />
        <StatCard
          title="Materi Selesai"
          value={completedCount}
          subtitle={`Kelas ${classLevel}`}
          icon={BookOpen}
          color="blue"
        />
        <StatCard
          title="Nilai Rata-rata"
          value={student?.averageGrade || 88}
          subtitle={student && student.averageGrade >= 75 ? 'Tuntas (Di atas KKM)' : 'Perlu Bimbingan'}
          icon={Award}
          color="amber"
        />
        <StatCard
          title="Total XP Siswa"
          value={`${student?.xp || 450} XP`}
          subtitle={`Tingkat Level ${student?.level || 2}`}
          icon={Trophy}
          color="purple"
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Cols: Lanjutkan Belajar & Rekomendasi */}
        <div className="lg:col-span-2 space-y-6">
          {/* Personalized AI Recommendation Card */}
          <RecommendationCard
            uncompletedMaterials={uncompleted}
            needsRemedial={(student?.averageGrade || 0) < 75}
            lowestGradeTopic="Thaharah & Shalat Berjamaah"
          />

          {/* Quick Continue Learning Card */}
          {lastStudied && (
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <PlayCircle className="w-5 h-5 text-emerald-600" />
                  <h3 className="text-sm font-extrabold text-slate-800">Lanjutkan Belajar Materi Terakhir</h3>
                </div>
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                  {lastStudied.category}
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h4 className="text-base font-bold text-slate-900">{lastStudied.title}</h4>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2">{lastStudied.summary}</p>
                  <div className="flex items-center gap-3 mt-2 text-xs text-slate-400 font-medium">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{lastStudied.estimatedReadingMinutes} menit membaca</span>
                    </span>
                    <span className="flex items-center gap-1 text-amber-600 font-semibold">
                      <Award className="w-3.5 h-3.5" />
                      <span>+{lastStudied.xpReward} XP</span>
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => navigate(`/siswa/materi/${lastStudied.id}`)}
                  className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-xs flex items-center justify-center gap-1.5 shrink-0 transition-all active:scale-95"
                >
                  <span>Mulai Belajar</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Active Exams Row */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-emerald-600" />
                <h3 className="text-sm font-extrabold text-slate-800">Ujian & Asesmen Aktif</h3>
              </div>
              <button
                onClick={() => navigate('/siswa/ujian')}
                className="text-xs font-bold text-emerald-700 hover:text-emerald-800"
              >
                Lihat Semua
              </button>
            </div>

            <div className="space-y-2.5">
              {exams.map(exam => (
                <div
                  key={exam.id}
                  className="p-4 rounded-2xl border border-slate-200 hover:border-emerald-300 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white"
                >
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                      Kelas {exam.gradeLevel} • KKM: {exam.passingScore}
                    </span>
                    <h4 className="text-sm font-bold text-slate-900">{exam.title}</h4>
                    <p className="text-xs text-slate-400">Durasi: {exam.durationMinutes} Menit • {exam.category}</p>
                  </div>
                  <button
                    onClick={() => navigate('/siswa/ujian')}
                    className="px-4 py-2 bg-emerald-50 hover:bg-emerald-600 text-emerald-700 hover:text-white rounded-xl text-xs font-bold transition-colors shrink-0 text-center"
                  >
                    Kerjakan Ujian
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right 1 Col: Jadwal, Pengumuman, & Prestasi */}
        <div className="space-y-6">
          {/* Announcements Card */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-4">
            <div className="flex items-center gap-2">
              <Bell className="w-5 h-5 text-amber-500" />
              <h3 className="text-sm font-extrabold text-slate-800">Pengumuman Guru</h3>
            </div>

            <div className="space-y-3">
              {announcements.slice(0, 3).map(anc => (
                <div
                  key={anc.id}
                  className={`p-3.5 rounded-2xl border ${
                    anc.priority === 'Mendesak'
                      ? 'bg-rose-50/50 border-rose-200'
                      : 'bg-slate-50 border-slate-200'
                  } space-y-1`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                        anc.priority === 'Mendesak'
                          ? 'bg-rose-100 text-rose-700'
                          : 'bg-slate-200 text-slate-700'
                      }`}
                    >
                      {anc.priority}
                    </span>
                    <span className="text-[10px] text-slate-400">{anc.date}</span>
                  </div>
                  <h5 className="text-xs font-bold text-slate-800">{anc.title}</h5>
                  <p className="text-[11px] text-slate-600 line-clamp-2 leading-relaxed">{anc.content}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Jadwal Pembelajaran PAI */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-3">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-blue-600" />
              <h3 className="text-sm font-extrabold text-slate-800">Jadwal Pembelajaran PAI</h3>
            </div>
            <div className="space-y-2 text-xs">
              <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 flex justify-between items-center">
                <div>
                  <p className="font-bold text-slate-800">Senin (07.30 - 09.00)</p>
                  <p className="text-slate-500">PAI & Budi Pekerti Kelas VII</p>
                </div>
                <span className="text-[10px] font-semibold px-2 py-1 rounded bg-blue-100 text-blue-800">
                  Musholla / R. Kelas
                </span>
              </div>
              <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 flex justify-between items-center">
                <div>
                  <p className="font-bold text-slate-800">Selasa - Kamis (07.00)</p>
                  <p className="text-slate-500">Salat Dhuha & Tadarrus Juz 30</p>
                </div>
                <span className="text-[10px] font-semibold px-2 py-1 rounded bg-emerald-100 text-emerald-800">
                  Rutin
                </span>
              </div>
            </div>
          </div>

          {/* Quick Badges Preview */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-amber-500" />
                <h3 className="text-sm font-extrabold text-slate-800">Prestasi & Badges</h3>
              </div>
              <button
                onClick={() => navigate('/siswa/prestasi')}
                className="text-xs font-bold text-emerald-700 hover:text-emerald-800"
              >
                Lihat
              </button>
            </div>
            <div className="flex gap-2">
              {['Rajin Belajar', 'Ahli PAI', 'Juara Latihan'].map((badgeName, idx) => (
                <div
                  key={idx}
                  className="flex-1 p-2.5 rounded-2xl bg-amber-50/50 border border-amber-200 text-center space-y-1"
                >
                  <Award className="w-5 h-5 text-amber-600 mx-auto" />
                  <p className="text-[10px] font-bold text-slate-700 truncate">{badgeName}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
