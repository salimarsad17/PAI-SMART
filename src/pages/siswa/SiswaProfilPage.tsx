import React, { useState } from 'react';
import { AuthService } from '../../services/authService';
import { StorageService } from '../../services/storageService';
import { User, Lock, Award, BookOpen, Clock, ShieldCheck } from 'lucide-react';
import { useToast } from '../../components/common/Toast';
import { getLevelName } from '../../utils/exportUtils';

export const SiswaProfilPage: React.FC = () => {
  const { showToast } = useToast();
  const currentUser = AuthService.getCurrentUser();
  const student = currentUser ? StorageService.getStudentById(currentUser.id) : null;

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPassword || newPassword.length < 5) {
      showToast('Password baru minimal 5 karakter.', 'error');
      return;
    }
    if (newPassword !== confirmPassword) {
      showToast('Konfirmasi password tidak cocok.', 'error');
      return;
    }
    showToast('Alhamdulillah! Password berhasil diperbarui.', 'success');
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto animate-in fade-in duration-200">
      {/* Header Banner */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center gap-6">
        <img
          src={
            student?.avatar ||
            'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&auto=format&fit=crop&q=80'
          }
          alt={student?.name}
          className="w-24 h-24 rounded-3xl object-cover border-4 border-emerald-100 shadow-md"
        />
        <div className="space-y-1 text-center sm:text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200 mb-1">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Peserta Didik Aktif</span>
          </div>
          <h1 className="text-2xl font-black text-slate-900">{student?.name || 'Aisyah Rahma'}</h1>
          <p className="text-xs text-slate-500">
            NIS: <strong>{student?.nis || '252607002'}</strong> • Kelas: <strong>{student?.classId || 'VII'}</strong> • Sekolah: UPT SMPN 2 Rebang Tangkas
          </p>
          <p className="text-xs font-bold text-amber-700 pt-1">
            {getLevelName(student?.level || 2)} ({student?.xp || 450} XP)
          </p>
        </div>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-xs text-center">
          <BookOpen className="w-6 h-6 text-emerald-600 mx-auto mb-1" />
          <p className="text-xl font-black text-slate-800">{student?.completedMaterialsCount || 6}</p>
          <p className="text-[11px] text-slate-400 font-semibold">Materi Tuntas</p>
        </div>
        <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-xs text-center">
          <Award className="w-6 h-6 text-amber-600 mx-auto mb-1" />
          <p className="text-xl font-black text-slate-800">{student?.averageGrade || 90}</p>
          <p className="text-[11px] text-slate-400 font-semibold">Nilai Rata-rata</p>
        </div>
        <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-xs text-center">
          <Clock className="w-6 h-6 text-blue-600 mx-auto mb-1" />
          <p className="text-xl font-black text-slate-800">4.5 Jam</p>
          <p className="text-[11px] text-slate-400 font-semibold">Waktu Belajar</p>
        </div>
        <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-xs text-center">
          <User className="w-6 h-6 text-purple-600 mx-auto mb-1" />
          <p className="text-xl font-black text-slate-800">Level {student?.level || 2}</p>
          <p className="text-[11px] text-slate-400 font-semibold">Tingkat Karakter</p>
        </div>
      </div>

      {/* Change Password Form */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4">
        <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
          <Lock className="w-5 h-5 text-emerald-600" />
          <h3 className="text-sm font-bold text-slate-800">Ganti Password Akun Siswa</h3>
        </div>

        <form onSubmit={handlePasswordChange} className="space-y-4 max-w-md">
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-700">Password Lama</label>
            <input
              type="password"
              value={currentPassword}
              onChange={e => setCurrentPassword(e.target.value)}
              placeholder="Masukkan password lama"
              className="w-full p-3 bg-slate-50 border border-slate-200 rounded-2xl text-xs font-medium focus:border-emerald-600 outline-hidden"
              required
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-700">Password Baru</label>
            <input
              type="password"
              value={newPassword}
              onChange={e => setNewPassword(e.target.value)}
              placeholder="Minimal 5 karakter"
              className="w-full p-3 bg-slate-50 border border-slate-200 rounded-2xl text-xs font-medium focus:border-emerald-600 outline-hidden"
              required
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-700">Ulangi Password Baru</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              placeholder="Ketik ulang password baru"
              className="w-full p-3 bg-slate-50 border border-slate-200 rounded-2xl text-xs font-medium focus:border-emerald-600 outline-hidden"
              required
            />
          </div>

          <button
            type="submit"
            className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-xs transition-colors"
          >
            Simpan Password Baru
          </button>
        </form>
      </div>
    </div>
  );
};
