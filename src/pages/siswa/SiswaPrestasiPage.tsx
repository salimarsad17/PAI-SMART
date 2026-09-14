import React, { useState, useEffect } from 'react';
import { StorageService } from '../../services/storageService';
import { AuthService } from '../../services/authService';
import { Student, Certificate } from '../../types';
import { CertificateView } from '../../components/student/CertificateView';
import { Trophy, Award, Sparkles, Star, Printer, Medal, ShieldCheck } from 'lucide-react';
import { getLevelName } from '../../utils/exportUtils';
import { Modal } from '../../components/common/Modal';

export const SiswaPrestasiPage: React.FC = () => {
  const currentUser = AuthService.getCurrentUser();
  const [student, setStudent] = useState<Student | null>(null);
  const [allStudents, setAllStudents] = useState<Student[]>([]);
  const [activeCert, setActiveCert] = useState<Certificate | null>(null);

  useEffect(() => {
    StorageService.init();
    const list = StorageService.getStudents();
    setAllStudents(list.sort((a, b) => b.xp - a.xp));
    const cur = list.find(s => s.id === currentUser?.id) || list[1];
    setStudent(cur);
  }, [currentUser?.id]);

  const badges = [
    { name: 'Rajin Belajar', desc: 'Menyelesaikan 5 modul materi pertama', icon: Star, unlocked: true },
    { name: 'Ahli Tajwid', desc: 'Mempelajari hukum bacaan nun sukun & mad', icon: Award, unlocked: true },
    { name: 'Juara Ujian', desc: 'Memperoleh nilai 100 pada asesmen sumatif', icon: Trophy, unlocked: (student?.averageGrade || 0) >= 85 },
    { name: 'Bintang Salat', desc: 'Hafal tata cara salat fardu & jama\' qasar', icon: Sparkles, unlocked: true },
    { name: 'Pelajar Berakhlak', desc: 'Mendapat catatan sikap positif dari guru', icon: ShieldCheck, unlocked: true },
    { name: 'Cendekiawan Muda', desc: 'Mencapai Level 3 atau lebih tinggi', icon: Medal, unlocked: (student?.level || 1) >= 3 }
  ];

  const handleOpenCertificate = (modulName: string) => {
    if (!student) return;
    const cert: Certificate = {
      id: `cert-${Date.now()}`,
      studentName: student.name,
      studentId: student.id,
      gradeLevel: `Kelas ${student.classId}`,
      moduleTitle: modulName,
      score: student.averageGrade || 90,
      issueDate: new Date().toISOString().substring(0, 10),
      teacherName: 'M. Syaifullah, S.Pd.I.',
      schoolName: 'UPT SMPN 2 REBANG TANGKAS',
      certificateNumber: `PAI/SMART/2026/${Math.floor(1000 + Math.random() * 9000)}`
    };
    setActiveCert(cert);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-700 via-emerald-800 to-teal-900 rounded-3xl p-6 sm:p-8 text-white shadow-md">
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-amber-600/60 text-amber-100 text-xs font-bold border border-amber-500/40 w-fit mb-2">
          <Trophy className="w-3.5 h-3.5 text-amber-300" />
          <span>Gamifikasi & Penghargaan Prestasi</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
          Prestasi, Level, & Sertifikat Kelulusan
        </h1>
        <p className="text-xs sm:text-sm text-amber-100/90 mt-1 max-w-xl">
          Kumpulkan XP dari membaca materi, mengerjakan latihan, dan ujian untuk membuka lencana serta sertifikat resmi A4.
        </p>
      </div>

      {/* Level & XP Overview Card */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-5">
          <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-white shadow-md">
            <Trophy className="w-10 h-10" />
          </div>
          <div className="space-y-1">
            <span className="text-xs font-bold text-amber-700 uppercase">
              Tingkatan Karakter PAI
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">
              {getLevelName(student?.level || 2)} (Level {student?.level || 2})
            </h2>
            <p className="text-xs text-slate-500">
              Total Akumulasi: <strong className="text-emerald-700 font-extrabold">{student?.xp || 450} XP</strong>
            </p>
          </div>
        </div>

        <div className="w-full sm:w-64 space-y-2">
          <div className="flex justify-between text-xs font-semibold text-slate-600">
            <span>Progres Menuju Level Berikutnya</span>
            <span className="text-emerald-700">75%</span>
          </div>
          <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
            <div className="bg-amber-500 h-full rounded-full w-3/4 transition-all duration-500" />
          </div>
          <p className="text-[10px] text-slate-400 text-right">+150 XP lagi untuk naik level</p>
        </div>
      </div>

      {/* Badges Grid */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-xs space-y-4">
        <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2">
          <Award className="w-4 h-4 text-emerald-600" />
          <span>Lencana Prestasi Belajar (Badges)</span>
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          {badges.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div
                key={idx}
                className={`p-4 rounded-2xl border text-center space-y-2 transition-all ${
                  b.unlocked
                    ? 'bg-amber-50/50 border-amber-200 shadow-2xs'
                    : 'bg-slate-50 border-slate-200 opacity-50'
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-2xl mx-auto flex items-center justify-center ${
                    b.unlocked ? 'bg-amber-500 text-white shadow-xs' : 'bg-slate-200 text-slate-400'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <p className="text-xs font-bold text-slate-800">{b.name}</p>
                <p className="text-[10px] text-slate-500 leading-tight">{b.desc}</p>
                <span
                  className={`inline-block text-[9px] font-bold px-2 py-0.5 rounded-full ${
                    b.unlocked
                      ? 'bg-emerald-100 text-emerald-800'
                      : 'bg-slate-200 text-slate-500'
                  }`}
                >
                  {b.unlocked ? 'Terbuka' : 'Terkunci'}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Leaderboard and Certificate Generation Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Leaderboard Class */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xs p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2">
              <Medal className="w-4 h-4 text-amber-500" />
              <span>Papan Peringkat Kelas (Leaderboard)</span>
            </h3>
            <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
              Berdasarkan XP
            </span>
          </div>

          <div className="space-y-2">
            {allStudents.map((std, idx) => {
              const isCurrentUser = std.id === student?.id;
              return (
                <div
                  key={std.id}
                  className={`p-3.5 rounded-2xl border flex items-center justify-between transition-colors ${
                    isCurrentUser
                      ? 'bg-emerald-50 border-emerald-300 font-bold'
                      : 'bg-slate-50/50 border-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-7 h-7 rounded-xl flex items-center justify-center text-xs font-bold ${
                        idx === 0
                          ? 'bg-amber-500 text-white'
                          : idx === 1
                          ? 'bg-slate-400 text-white'
                          : idx === 2
                          ? 'bg-amber-700 text-white'
                          : 'bg-slate-200 text-slate-600'
                      }`}
                    >
                      {idx + 1}
                    </span>
                    <img
                      src={std.avatar}
                      alt={std.name}
                      className="w-8 h-8 rounded-xl object-cover border border-slate-200"
                    />
                    <div>
                      <p className="text-xs text-slate-900 leading-tight">
                        {std.name} {isCurrentUser && '(Anda)'}
                      </p>
                      <p className="text-[10px] text-slate-400">Kelas {std.classId}</p>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-xs font-black text-emerald-800">{std.xp} XP</span>
                    <span className="block text-[10px] text-slate-400">
                      Level {std.level}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Certificate Generator */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xs p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2">
              <Printer className="w-4 h-4 text-emerald-600" />
              <span>Sertifikat Kelulusan Modul A4</span>
            </h3>
            <span className="text-xs text-slate-400 font-semibold">Siap Cetak</span>
          </div>

          <p className="text-xs text-slate-600 leading-relaxed">
            Siswa yang berhasil menuntaskan modul materi PAI dengan nilai di atas KKM berhak mencetak sertifikat resmi bertanda tangan Kepala Sekolah dan Guru PAI.
          </p>

          <div className="space-y-3 pt-2">
            {[
              'Thaharah dan Tata Cara Bersuci',
              'Iman kepada Allah dan Asmaul Husna',
              'Salat Berjamaah dan Pembiasaan Karakter Mulia'
            ].map((moduleTitle, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-emerald-50/40 border border-emerald-200 flex items-center justify-between gap-3"
              >
                <div>
                  <h4 className="text-xs font-bold text-slate-800">{moduleTitle}</h4>
                  <p className="text-[10px] text-emerald-700 font-semibold">
                    Predikat: Tuntas • Siap Dicetak Format A4
                  </p>
                </div>
                <button
                  onClick={() => handleOpenCertificate(moduleTitle)}
                  className="px-3.5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-xs flex items-center gap-1.5 shrink-0 transition-all"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Lihat & Cetak</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Certificate Modal */}
      {activeCert && (
        <Modal
          isOpen={Boolean(activeCert)}
          onClose={() => setActiveCert(null)}
          title="Pratinjau Sertifikat Kelulusan"
          maxWidth="4xl"
        >
          <CertificateView
            certificate={activeCert}
            onClose={() => setActiveCert(null)}
          />
        </Modal>
      )}
    </div>
  );
};
