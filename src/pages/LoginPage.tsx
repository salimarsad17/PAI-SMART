import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthService } from '../services/authService';
import { UserRole } from '../types';
import { StorageService } from '../services/storageService';
import { Shield, GraduationCap, ArrowRight, Lock, User, AlertCircle, BookOpen } from 'lucide-react';
import { useToast } from '../components/common/Toast';

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { showToast } = useToast();
  const [role, setRole] = useState<UserRole>('SISWA');
  const [username, setUsername] = useState('siswa');
  const [password, setPassword] = useState('siswa123');
  const [errorMsg, setErrorMsg] = useState('');

  const schoolProfile = StorageService.getSchoolProfile();

  const handleRoleChange = (newRole: UserRole) => {
    setRole(newRole);
    if (newRole === 'GURU') {
      setUsername('guru');
      setPassword('guru123');
    } else {
      setUsername('siswa');
      setPassword('siswa123');
    }
    setErrorMsg('');
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    const res = AuthService.login(username, password, role);
    if (res.success) {
      showToast(res.message, 'success');
      if (role === 'GURU') {
        navigate('/guru/dashboard');
      } else {
        navigate('/siswa/dashboard');
      }
    } else {
      setErrorMsg(res.message);
      showToast(res.message, 'error');
    }
  };

  const handleDemoGuru = () => {
    setRole('GURU');
    AuthService.loginAsDemo('GURU');
    showToast('Masuk sebagai Guru Demo', 'success');
    navigate('/guru/dashboard');
  };

  const handleDemoSiswa = () => {
    setRole('SISWA');
    AuthService.loginAsDemo('SISWA');
    showToast('Masuk sebagai Siswa Demo (Aisyah)', 'success');
    navigate('/siswa/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 flex flex-col items-center justify-center p-4 sm:p-6 text-slate-800 relative overflow-hidden font-sans">
      {/* Background Islamic geometric accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Container */}
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden relative z-10 animate-in fade-in zoom-in-95 duration-200">
        {/* Header Branding */}
        <div className="bg-gradient-to-r from-emerald-800 to-teal-800 p-6 sm:p-8 text-white text-center relative">
          <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-3 border border-white/20 shadow-inner">
            <BookOpen className="w-7 h-7 text-emerald-300" />
          </div>
          <span className="text-[10px] font-extrabold uppercase tracking-widest bg-emerald-700/80 px-3 py-1 rounded-full text-emerald-200 border border-emerald-600/60 inline-block mb-2">
            MEDIA PEMBELAJARAN PAI SMP
          </span>
          <h1 className="text-xl sm:text-2xl font-black tracking-tight leading-tight">
            UPT SMPN 2 REBANG TANGKAS
          </h1>
          <p className="text-xs text-emerald-100/90 mt-1 font-medium">
            Pendidikan Agama Islam dan Budi Pekerti
          </p>
          <p className="text-[11px] text-amber-300 italic mt-2">
            "{schoolProfile.slogan}"
          </p>
        </div>

        {/* Role Toggle Tabs */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="grid grid-cols-2 gap-2 p-1 bg-slate-100 rounded-2xl">
            <button
              type="button"
              onClick={() => handleRoleChange('SISWA')}
              className={`flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold transition-all ${
                role === 'SISWA'
                  ? 'bg-white text-emerald-800 shadow-xs'
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              <GraduationCap className="w-4 h-4 text-emerald-600" />
              <span>Siswa</span>
            </button>
            <button
              type="button"
              onClick={() => handleRoleChange('GURU')}
              className={`flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold transition-all ${
                role === 'GURU'
                  ? 'bg-white text-emerald-800 shadow-xs'
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              <Shield className="w-4 h-4 text-emerald-600" />
              <span>Guru</span>
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-4">
            {errorMsg && (
              <div className="p-3 bg-rose-50 border border-rose-200 rounded-2xl text-xs text-rose-700 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 block">
                {role === 'GURU' ? 'Username Guru' : 'Username / NIS Siswa'}
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                  placeholder={role === 'GURU' ? 'Contoh: guru' : 'Contoh: siswa atau 252607002'}
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-xs sm:text-sm font-medium focus:border-emerald-600 focus:bg-white outline-hidden transition-all"
                  required
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 block">Password</label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="Masukkan password"
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-xs sm:text-sm font-medium focus:border-emerald-600 focus:bg-white outline-hidden transition-all"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 bg-emerald-700 hover:bg-emerald-800 active:scale-98 text-white rounded-2xl font-bold text-sm shadow-md shadow-emerald-700/20 flex items-center justify-center gap-2 transition-all"
            >
              <span>Masuk Sekarang</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Quick 1-Click Demo Buttons (Mandated by Section C) */}
          <div className="pt-3 border-t border-slate-100 space-y-2">
            <p className="text-[11px] text-center font-semibold text-slate-400 uppercase tracking-wider">
              Uji Coba Cepat (Akun Demo):
            </p>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={handleDemoSiswa}
                className="py-2.5 px-3 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 rounded-xl text-xs font-bold border border-emerald-200 flex items-center justify-center gap-1.5 transition-colors"
              >
                <GraduationCap className="w-4 h-4 text-emerald-600" />
                <span>Demo Siswa</span>
              </button>
              <button
                type="button"
                onClick={handleDemoGuru}
                className="py-2.5 px-3 bg-teal-50 hover:bg-teal-100 text-teal-800 rounded-xl text-xs font-bold border border-teal-200 flex items-center justify-center gap-1.5 transition-colors"
              >
                <Shield className="w-4 h-4 text-teal-600" />
                <span>Demo Guru</span>
              </button>
            </div>
            <p className="text-[10px] text-center text-slate-400 mt-1">
              Guru: guru / guru123 • Siswa: siswa / siswa123
            </p>
          </div>
        </div>
      </div>

      {/* Footer Info */}
      <p className="text-xs text-slate-400 mt-6 text-center font-medium">
        © 2026 UPT SMPN 2 Rebang Tangkas. Dikembangkan untuk Pembelajaran PAI Digital.
      </p>
    </div>
  );
};
