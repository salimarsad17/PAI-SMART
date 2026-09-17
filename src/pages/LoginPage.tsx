import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthService } from '../services/authService';
import { UserRole } from '../types';
import { StorageService } from '../services/storageService';
import {
  Shield,
  GraduationCap,
  ArrowRight,
  Lock,
  User,
  AlertCircle,
  BookOpen,
  UserPlus,
  LogIn,
  Eye,
  EyeOff,
  CheckCircle2,
  Sun,
  Waves,
  Phone,
  Sparkles,
  Camera
} from 'lucide-react';
import { useToast } from '../components/common/Toast';

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { showToast } = useToast();

  // Mode: 'login' or 'register'
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');

  // Login form state
  const [role, setRole] = useState<UserRole>('SISWA');
  const [username, setUsername] = useState('siswa');
  const [password, setPassword] = useState('siswa123');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Register form state
  const [regRole, setRegRole] = useState<UserRole>('SISWA');
  const [regName, setRegName] = useState('');
  const [regUsername, setRegUsername] = useState('');
  const [regPassword, setRegPassword] = useState('');
  const [regConfirmPassword, setRegConfirmPassword] = useState('');
  const [showRegPassword, setShowRegPassword] = useState(false);
  const [regClassId, setRegClassId] = useState<'VII' | 'VIII' | 'IX'>('IX');
  const [regNis, setRegNis] = useState('');
  const [regNip, setRegNip] = useState('');
  const [regGender, setRegGender] = useState<'L' | 'P'>('L');
  const [regPhone, setRegPhone] = useState('');
  const [regErrorMsg, setRegErrorMsg] = useState('');
  const [regSuccessMsg, setRegSuccessMsg] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Background atmosphere switcher & brightness control
  const bgThemes = [
    {
      id: 'sekolah-tingkat-kubah',
      title: 'Gedung Sekolah Tingkat & Kubah Masjid Asri',
      badge: '🏫 Gedung Sekolah Tingkat & Kubah Masjid',
      url: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=2560&q=95'
    },
    {
      id: 'kampus-bertingkat',
      title: 'Gedung Kampus Sekolah Bertingkat & Kubah Megah',
      badge: '🏛️ Kampus Bertingkat & Kubah',
      url: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=2560&q=95'
    },
    {
      id: 'masjid-air-mancur',
      title: 'Masjid Sekolah, Air Mancur & Gedung Belajar',
      badge: '⛲ Air Mancur & Masjid Sekolah',
      url: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=2560&q=95'
    },
    {
      id: 'kompleks-menara',
      title: 'Kompleks Pendidikan Islam & Menara Masjid',
      badge: '🕌 Menara Masjid & Gedung Belajar',
      url: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=2560&q=95'
    }
  ];
  const [activeBgIndex, setActiveBgIndex] = useState(0);
  const [isBrightBoost, setIsBrightBoost] = useState(true);
  const [hideCardForPanorama, setHideCardForPanorama] = useState(false);

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

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setRegErrorMsg('');
    setRegSuccessMsg('');

    if (!regName.trim()) {
      setRegErrorMsg('Nama Lengkap wajib diisi.');
      return;
    }

    if (!regUsername.trim()) {
      setRegErrorMsg('Username Akun wajib diisi.');
      return;
    }

    if (regPassword.length < 4) {
      setRegErrorMsg('Password minimal 4 karakter.');
      return;
    }

    if (regPassword !== regConfirmPassword) {
      setRegErrorMsg('Konfirmasi password tidak cocok.');
      return;
    }

    if (regRole === 'SISWA' && !regNis.trim()) {
      setRegErrorMsg('Nomor Induk Siswa (NIS / NISN) wajib diisi.');
      return;
    }

    if (regRole === 'GURU' && !regNip.trim()) {
      setRegErrorMsg('NIP / NUPTK Guru wajib diisi.');
      return;
    }

    setIsSubmitting(true);

    try {
      const res = AuthService.registerAccount({
        name: regName.trim(),
        username: regUsername.trim(),
        password: regPassword,
        role: regRole,
        classId: regRole === 'SISWA' ? regClassId : undefined,
        nis: regRole === 'SISWA' ? regNis.trim() : undefined,
        nip: regRole === 'GURU' ? regNip.trim() : undefined,
        gender: regGender,
        phone: regPhone.trim()
      });

      if (res.success) {
        setRegSuccessMsg(res.message);
        showToast(res.message, 'success');

        // Automatic redirect to dashboard after slight delay
        setTimeout(() => {
          if (regRole === 'GURU') {
            navigate('/guru/dashboard');
          } else {
            navigate('/siswa/dashboard');
          }
        }, 1200);
      } else {
        setRegErrorMsg(res.message);
        showToast(res.message, 'error');
        setIsSubmitting(false);
      }
    } catch {
      setRegErrorMsg('Terjadi kesalahan saat memproses pendaftaran akun.');
      setIsSubmitting(false);
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

  const currentBg = bgThemes[activeBgIndex];

  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center p-3 sm:p-6 overflow-x-hidden font-sans select-none">
      {/* ========================================================================= */}
      {/* RESPONSIVE BRIGHT DAYLIGHT BACKGROUND: GEDUNG SEKOLAH TINGKAT & MASJID    */}
      {/* GAMBAR TERANG, JELAS, TAJAM & BERKUALITAS TINGGI TANPA OVERLAY GELAP      */}
      {/* ========================================================================= */}
      <div className="fixed inset-0 w-full h-full -z-10 overflow-hidden bg-sky-200">
        <img
          src={currentBg.url}
          alt={currentBg.title}
          referrerPolicy="no-referrer"
          className={`w-full h-full object-cover object-center transition-all duration-700 ${
            isBrightBoost
              ? 'filter brightness-[1.12] contrast-[1.06] saturate-[1.15]'
              : 'filter brightness-[1.02] contrast-[1.02] saturate-[1.05]'
          }`}
        />

        {/* Minimalist Daylight Lighting: Crystal clear & bright */}
        <div className="absolute inset-0 bg-sky-950/10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-200/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
      </div>

      {/* Top Floating Badge: School Identity, View Toggle & Bright Atmosphere */}
      <div className="w-full max-w-lg mb-3 flex flex-wrap items-center justify-between gap-2 px-2 z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/90 backdrop-blur-md rounded-full shadow-md border border-white/60 text-slate-900">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[11px] font-black text-black tracking-tight">
            UPT SMPN 2 REBANG TANGKAS
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          {/* Toggle Full Panorama View */}
          <button
            type="button"
            onClick={() => setHideCardForPanorama(!hideCardForPanorama)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/90 hover:bg-white text-black active:bg-emerald-600 active:text-amber-200 rounded-full shadow-md border border-white/60 text-[11px] font-bold transition-all cursor-pointer"
            title="Klik untuk melihat pemandangan sekolah dan masjid secara penuh"
          >
            <Camera className="w-3.5 h-3.5 text-amber-500" />
            <span>{hideCardForPanorama ? 'Tampilkan Form' : 'Lihat Pemandangan'}</span>
          </button>

          {/* Toggle Extra Brightness */}
          <button
            type="button"
            onClick={() => setIsBrightBoost(!isBrightBoost)}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full shadow-md text-[11px] font-bold transition-all cursor-pointer ${
              isBrightBoost
                ? 'bg-amber-400 text-amber-950 border border-amber-300 shadow-amber-300/30 font-black'
                : 'bg-white/90 text-black border border-white/60'
            }`}
            title="Pengaturan intensitas cahaya matahari"
          >
            <Sun className="w-3.5 h-3.5 text-amber-600 animate-spin-slow" />
            <span>{isBrightBoost ? '☀️ Terang Jelas' : '🌤️ Alami'}</span>
          </button>
        </div>
      </div>

      {/* Floating Panorama Bar (When user minimizes the card to inspect the clear background) */}
      {hideCardForPanorama && (
        <div className="w-full max-w-lg bg-white/95 backdrop-blur-md rounded-3xl p-5 shadow-2xl border border-white/90 text-center z-10 animate-in fade-in zoom-in-95 duration-200 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-100 rounded-full text-xs font-bold text-sky-900 border border-sky-200">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>Pemandangan Gedung Sekolah Tingkat & Masjid Kampus</span>
          </div>
          <h2 className="text-base font-black text-black">
            {currentBg.title}
          </h2>
          <p className="text-xs text-slate-600 font-medium">
            Latar belakang resolusi tinggi yang cerah, terang, dan jelas menampilkan gedung pembelajaran bertingkat, kubah masjid, dan air mancur.
          </p>

          {/* Switch scenes right inside panorama bar */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 pt-1">
            {bgThemes.map((theme, idx) => (
              <button
                key={theme.id}
                type="button"
                onClick={() => setActiveBgIndex(idx)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeBgIndex === idx
                    ? 'bg-blue-600 text-white shadow-md font-black'
                    : 'bg-sky-50 text-black border border-sky-200 hover:bg-sky-100'
                }`}
              >
                {theme.badge}
              </button>
            ))}
          </div>

          <div className="pt-2">
            <button
              type="button"
              onClick={() => setHideCardForPanorama(false)}
              className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 active:bg-emerald-600 active:text-amber-200 text-white rounded-2xl font-bold text-xs shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <LogIn className="w-4 h-4 text-amber-300" />
              <span>Buka Formulir Masuk / Daftar Akun</span>
            </button>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MAIN AUTHENTICATION CARD (LOGIN & DAFTAR AKUN) */}
      {/* ========================================================================= */}
      {!hideCardForPanorama && (
      <div className="w-full max-w-lg bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/80 overflow-hidden relative z-10 animate-in fade-in zoom-in-95 duration-200 transition-all">
        {/* Header Branding Card */}
        <div className="bg-gradient-to-r from-emerald-800 via-teal-800 to-sky-900 p-5 sm:p-7 text-white text-center relative overflow-hidden">
          {/* Subtle Islamic dome accent behind icon */}
          <div className="absolute -top-10 -right-10 w-36 h-36 bg-white/10 rounded-full blur-xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-36 h-36 bg-amber-400/10 rounded-full blur-xl pointer-events-none" />

          <div className="w-13 h-13 bg-white/15 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-2.5 border border-white/30 shadow-inner">
            <BookOpen className="w-7 h-7 text-amber-300 drop-shadow-sm" />
          </div>

          <span className="text-[10px] font-extrabold uppercase tracking-widest bg-emerald-700/90 px-3 py-1 rounded-full text-amber-200 border border-emerald-500/60 inline-block mb-1.5 shadow-xs">
            MEDIA PEMBELAJARAN PAI & BUDI PEKERTI
          </span>

          <h1 className="text-lg sm:text-2xl font-black tracking-tight leading-tight drop-shadow-xs">
            UPT SMPN 2 REBANG TANGKAS
          </h1>
          <p className="text-xs text-sky-100 font-semibold mt-0.5">
            Sistem Digital Kelas VII, VIII, dan IX Semester 1 & 2
          </p>
          <p className="text-[11px] text-amber-300 italic mt-1.5 font-medium">
            "{schoolProfile.slogan || 'Disiplin, Berprestasi, dan Berakhlak Mulia'}"
          </p>
        </div>

        {/* ========================================================================= */}
        {/* TOP TAB TOGGLE: MASUK vs DAFTAR AKUN */}
        {/* ========================================================================= */}
        <div className="px-5 pt-5 sm:px-7 sm:pt-6">
          <div className="grid grid-cols-2 gap-2 p-1.5 bg-sky-100/90 rounded-2xl border border-sky-200 shadow-inner">
            <button
              type="button"
              onClick={() => {
                setAuthMode('login');
                setErrorMsg('');
                setRegErrorMsg('');
              }}
              className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer active:bg-emerald-600 active:text-amber-200 ${
                authMode === 'login'
                  ? 'bg-blue-600 text-white shadow-md ring-2 ring-blue-300 border border-blue-500 font-black'
                  : 'bg-sky-50 text-black border border-sky-200 hover:bg-sky-200/70 font-bold'
              }`}
            >
              <LogIn className={`w-4 h-4 shrink-0 drop-shadow-2xs ${authMode === 'login' ? 'text-amber-300' : 'text-amber-500'}`} />
              <span className={authMode === 'login' ? 'text-white font-bold' : 'text-black font-bold'}>
                1. Masuk ke Akun
              </span>
            </button>

            <button
              type="button"
              onClick={() => {
                setAuthMode('register');
                setErrorMsg('');
                setRegErrorMsg('');
              }}
              className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer active:bg-emerald-600 active:text-amber-200 ${
                authMode === 'register'
                  ? 'bg-blue-600 text-white shadow-md ring-2 ring-blue-300 border border-blue-500 font-black'
                  : 'bg-sky-50 text-black border border-sky-200 hover:bg-sky-200/70 font-bold'
              }`}
            >
              <UserPlus className={`w-4 h-4 shrink-0 drop-shadow-2xs ${authMode === 'register' ? 'text-amber-300' : 'text-amber-500'}`} />
              <span className={authMode === 'register' ? 'text-white font-bold' : 'text-black font-bold'}>
                2. Daftar Akun Baru
              </span>
            </button>
          </div>
        </div>

        {/* Content Container */}
        <div className="p-5 sm:p-7 space-y-5">
          {/* ======================================================================= */}
          {/* VIEW 1: MASUK KE AKUN (LOGIN) */}
          {/* ======================================================================= */}
          {authMode === 'login' && (
            <div className="space-y-5 animate-in fade-in duration-200">
              {/* Role Toggle Tabs */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-black block">Pilih Peran Pengguna:</label>
                <div className="grid grid-cols-2 gap-2 p-1 bg-sky-50 rounded-2xl border border-sky-200">
                  <button
                    type="button"
                    onClick={() => handleRoleChange('SISWA')}
                    className={`flex items-center justify-center gap-2 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer active:bg-emerald-600 active:text-amber-200 ${
                      role === 'SISWA'
                        ? 'bg-blue-600 text-white shadow-sm ring-1 ring-blue-300 font-black'
                        : 'text-black hover:bg-sky-100 font-bold'
                    }`}
                  >
                    <GraduationCap className={`w-4 h-4 ${role === 'SISWA' ? 'text-amber-300' : 'text-amber-500'}`} />
                    <span>Siswa</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleRoleChange('GURU')}
                    className={`flex items-center justify-center gap-2 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer active:bg-emerald-600 active:text-amber-200 ${
                      role === 'GURU'
                        ? 'bg-blue-600 text-white shadow-sm ring-1 ring-blue-300 font-black'
                        : 'text-black hover:bg-sky-100 font-bold'
                    }`}
                  >
                    <Shield className={`w-4 h-4 ${role === 'GURU' ? 'text-amber-300' : 'text-amber-500'}`} />
                    <span>Guru</span>
                  </button>
                </div>
              </div>

              {/* Login Form */}
              <form onSubmit={handleLogin} className="space-y-3.5">
                {errorMsg && (
                  <div className="p-3 bg-rose-50 border border-rose-200 rounded-2xl text-xs text-rose-700 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
                    <span className="font-semibold">{errorMsg}</span>
                  </div>
                )}

                <div className="space-y-1">
                  <label className="text-xs font-bold text-black block">
                    {role === 'GURU' ? 'Username Guru / NIP' : 'Username / Nomor Induk Siswa (NIS)'}
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-amber-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={username}
                      onChange={e => setUsername(e.target.value)}
                      placeholder={role === 'GURU' ? 'Contoh: guru atau 19820512 200801 1 015' : 'Contoh: siswa atau 252607002'}
                      className="w-full pl-10 pr-4 py-2.5 bg-sky-50/70 border border-sky-200 rounded-xl text-xs sm:text-sm font-semibold text-black focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100 outline-hidden transition-all"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold text-black block">Password Akun</label>
                    <span className="text-[11px] text-slate-500 font-medium">Demo: {role === 'GURU' ? 'guru123' : 'siswa123'}</span>
                  </div>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-amber-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                      placeholder="Masukkan password"
                      className="w-full pl-10 pr-10 py-2.5 bg-sky-50/70 border border-sky-200 rounded-xl text-xs sm:text-sm font-semibold text-black focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100 outline-hidden transition-all"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 cursor-pointer p-1"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 active:bg-emerald-600 active:text-amber-200 text-white rounded-2xl font-bold text-sm shadow-md shadow-blue-600/20 flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <LogIn className="w-4 h-4 text-amber-300" />
                  <span>Masuk Sekarang</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>

              {/* Toggle to Register Notice */}
              <div className="text-center pt-2">
                <p className="text-xs text-slate-600 font-medium">
                  Belum punya akun media pembelajaran?{' '}
                  <button
                    type="button"
                    onClick={() => {
                      setAuthMode('register');
                      setErrorMsg('');
                    }}
                    className="text-blue-600 font-bold hover:underline cursor-pointer inline-flex items-center gap-1"
                  >
                    <span>Daftar Akun Baru di sini</span>
                    <Sparkles className="w-3 h-3 text-amber-500" />
                  </button>
                </p>
              </div>

              {/* Quick 1-Click Demo Buttons */}
              <div className="pt-3 border-t border-sky-100 space-y-2">
                <p className="text-[11px] text-center font-bold text-slate-500 uppercase tracking-wider">
                  Uji Coba Cepat (Akun Demo Resmi):
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={handleDemoSiswa}
                    className="py-2 px-3 bg-sky-50 hover:bg-sky-100 active:bg-emerald-600 active:text-amber-200 text-black rounded-xl text-xs font-bold border border-sky-200 flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <GraduationCap className="w-4 h-4 text-amber-500" />
                    <span>Demo Siswa</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleDemoGuru}
                    className="py-2 px-3 bg-sky-50 hover:bg-sky-100 active:bg-emerald-600 active:text-amber-200 text-black rounded-xl text-xs font-bold border border-sky-200 flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Shield className="w-4 h-4 text-amber-500" />
                    <span>Demo Guru</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* ======================================================================= */}
          {/* VIEW 2: DAFTAR AKUN BARU (REGISTRATION) */}
          {/* ======================================================================= */}
          {authMode === 'register' && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="bg-sky-50 border border-sky-200 rounded-2xl p-3.5 text-xs text-slate-700 space-y-1">
                <div className="flex items-center gap-2 font-bold text-black">
                  <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>Formulir Pendaftaran Pengguna Media PAI Digital</span>
                </div>
                <p className="text-[11px] text-slate-600 font-medium">
                  Silakan lengkapi biodata di bawah ini untuk membuat akun baru dan langsung mulai belajar.
                </p>
              </div>

              {/* Role Selection for Registration */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-black block">Daftar Sebagai:</label>
                <div className="grid grid-cols-2 gap-2 p-1 bg-sky-50 rounded-2xl border border-sky-200">
                  <button
                    type="button"
                    onClick={() => {
                      setRegRole('SISWA');
                      setRegErrorMsg('');
                    }}
                    className={`flex items-center justify-center gap-2 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer active:bg-emerald-600 active:text-amber-200 ${
                      regRole === 'SISWA'
                        ? 'bg-blue-600 text-white shadow-sm ring-1 ring-blue-300 font-black'
                        : 'text-black hover:bg-sky-100 font-bold'
                    }`}
                  >
                    <GraduationCap className={`w-4 h-4 ${regRole === 'SISWA' ? 'text-amber-300' : 'text-amber-500'}`} />
                    <span>Siswa Baru</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setRegRole('GURU');
                      setRegErrorMsg('');
                    }}
                    className={`flex items-center justify-center gap-2 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer active:bg-emerald-600 active:text-amber-200 ${
                      regRole === 'GURU'
                        ? 'bg-blue-600 text-white shadow-sm ring-1 ring-blue-300 font-black'
                        : 'text-black hover:bg-sky-100 font-bold'
                    }`}
                  >
                    <Shield className={`w-4 h-4 ${regRole === 'GURU' ? 'text-amber-300' : 'text-amber-500'}`} />
                    <span>Guru PAI</span>
                  </button>
                </div>
              </div>

              {/* Registration Form */}
              <form onSubmit={handleRegister} className="space-y-3">
                {regErrorMsg && (
                  <div className="p-3 bg-rose-50 border border-rose-200 rounded-2xl text-xs text-rose-700 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
                    <span className="font-semibold">{regErrorMsg}</span>
                  </div>
                )}

                {regSuccessMsg && (
                  <div className="p-3 bg-emerald-50 border border-emerald-300 rounded-2xl text-xs text-emerald-800 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
                    <span className="font-bold">{regSuccessMsg}</span>
                  </div>
                )}

                {/* Nama Lengkap */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-black block">
                    Nama Lengkap <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={regName}
                    onChange={e => setRegName(e.target.value)}
                    placeholder={regRole === 'SISWA' ? 'Contoh: Ahmad Maulana Yusuf' : 'Contoh: Nurul Hidayati, S.Pd.I.'}
                    className="w-full px-3.5 py-2.5 bg-sky-50/70 border border-sky-200 rounded-xl text-xs sm:text-sm font-semibold text-black focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100 outline-hidden transition-all"
                    required
                  />
                </div>

                {/* Siswa: Tingkat Kelas & NIS */}
                {regRole === 'SISWA' ? (
                  <div className="grid grid-cols-2 gap-2">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-black block">
                        Tingkat Kelas <span className="text-rose-500">*</span>
                      </label>
                      <select
                        value={regClassId}
                        onChange={e => setRegClassId(e.target.value as 'VII' | 'VIII' | 'IX')}
                        className="w-full px-3 py-2.5 bg-sky-50/70 border border-sky-200 rounded-xl text-xs sm:text-sm font-semibold text-black focus:border-blue-500 focus:bg-white outline-hidden cursor-pointer"
                      >
                        <option value="VII">Kelas VII (Tujuh)</option>
                        <option value="VIII">Kelas VIII (Delapan)</option>
                        <option value="IX">Kelas IX (Sembilan)</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-black block">
                        NIS / NISN <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={regNis}
                        onChange={e => setRegNis(e.target.value)}
                        placeholder="Contoh: 252607025"
                        className="w-full px-3.5 py-2.5 bg-sky-50/70 border border-sky-200 rounded-xl text-xs sm:text-sm font-semibold text-black focus:border-blue-500 focus:bg-white outline-hidden"
                        required
                      />
                    </div>
                  </div>
                ) : (
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-black block">
                      NIP / NUPTK Guru <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={regNip}
                      onChange={e => setRegNip(e.target.value)}
                      placeholder="Contoh: 19850412 201001 1 009"
                      className="w-full px-3.5 py-2.5 bg-sky-50/70 border border-sky-200 rounded-xl text-xs sm:text-sm font-semibold text-black focus:border-blue-500 focus:bg-white outline-hidden"
                      required
                    />
                  </div>
                )}

                {/* Jenis Kelamin & WhatsApp */}
                <div className="grid grid-cols-2 gap-2">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-black block">Jenis Kelamin</label>
                    <select
                      value={regGender}
                      onChange={e => setRegGender(e.target.value as 'L' | 'P')}
                      className="w-full px-3 py-2.5 bg-sky-50/70 border border-sky-200 rounded-xl text-xs sm:text-sm font-semibold text-black focus:border-blue-500 focus:bg-white outline-hidden cursor-pointer"
                    >
                      <option value="L">Laki-laki (Ikhwan)</option>
                      <option value="P">Perempuan (Akhwat)</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-black block">
                      No. WhatsApp / HP <span className="text-slate-400 font-normal">(opsional)</span>
                    </label>
                    <div className="relative">
                      <Phone className="w-3.5 h-3.5 text-amber-500 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        value={regPhone}
                        onChange={e => setRegPhone(e.target.value)}
                        placeholder="08xxxxxxxxxx"
                        className="w-full pl-9 pr-3 py-2.5 bg-sky-50/70 border border-sky-200 rounded-xl text-xs sm:text-sm font-semibold text-black focus:border-blue-500 focus:bg-white outline-hidden"
                      />
                    </div>
                  </div>
                </div>

                {/* Username Akun */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-black block">
                    Username untuk Login <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-amber-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={regUsername}
                      onChange={e => setRegUsername(e.target.value)}
                      placeholder="Pilih username unik (tanpa spasi)"
                      className="w-full pl-10 pr-4 py-2.5 bg-sky-50/70 border border-sky-200 rounded-xl text-xs sm:text-sm font-semibold text-black focus:border-blue-500 focus:bg-white outline-hidden"
                      required
                    />
                  </div>
                </div>

                {/* Password & Konfirmasi Password */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-black block">
                      Password <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <Lock className="w-3.5 h-3.5 text-amber-500 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type={showRegPassword ? 'text' : 'password'}
                        value={regPassword}
                        onChange={e => setRegPassword(e.target.value)}
                        placeholder="Min. 4 karakter"
                        className="w-full pl-8 pr-8 py-2.5 bg-sky-50/70 border border-sky-200 rounded-xl text-xs sm:text-sm font-semibold text-black focus:border-blue-500 focus:bg-white outline-hidden"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowRegPassword(!showRegPassword)}
                        className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 cursor-pointer"
                      >
                        {showRegPassword ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-black block">
                      Ulangi Password <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <Lock className="w-3.5 h-3.5 text-amber-500 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type={showRegPassword ? 'text' : 'password'}
                        value={regConfirmPassword}
                        onChange={e => setRegConfirmPassword(e.target.value)}
                        placeholder="Konfirmasi password"
                        className="w-full pl-8 pr-3 py-2.5 bg-sky-50/70 border border-sky-200 rounded-xl text-xs sm:text-sm font-semibold text-black focus:border-blue-500 focus:bg-white outline-hidden"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Register Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-2 py-3 px-4 bg-blue-600 hover:bg-blue-700 active:bg-emerald-600 active:text-amber-200 disabled:bg-slate-300 text-white rounded-2xl font-bold text-sm shadow-md shadow-blue-600/20 flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <UserPlus className="w-4 h-4 text-amber-300" />
                  <span>{isSubmitting ? 'Mendaftarkan Akun...' : 'Daftar & Buat Akun Sekarang'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>

              {/* Toggle to Login */}
              <div className="text-center pt-2">
                <p className="text-xs text-slate-600 font-medium">
                  Sudah memiliki akun?{' '}
                  <button
                    type="button"
                    onClick={() => {
                      setAuthMode('login');
                      setRegErrorMsg('');
                    }}
                    className="text-blue-600 font-bold hover:underline cursor-pointer inline-flex items-center gap-1"
                  >
                    <span>Masuk ke Akun di sini</span>
                    <LogIn className="w-3 h-3 text-amber-500" />
                  </button>
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer Background Scene Switcher */}
        <div className="p-3 bg-sky-50/90 border-t border-sky-100 flex flex-wrap items-center justify-between gap-2 px-5">
          <div className="flex items-center gap-1.5 text-[11px] text-black font-bold">
            <Camera className="w-3.5 h-3.5 text-amber-500" />
            <span>Pilihan Sudut Sekolah & Masjid:</span>
          </div>

          <div className="flex items-center gap-1">
            {bgThemes.map((theme, idx) => (
              <button
                key={theme.id}
                type="button"
                onClick={() => setActiveBgIndex(idx)}
                title={theme.title}
                className={`px-2 py-1 rounded-lg text-[10px] font-bold transition-all cursor-pointer ${
                  activeBgIndex === idx
                    ? 'bg-blue-600 text-white shadow-xs font-black'
                    : 'bg-white text-black border border-sky-200 hover:bg-sky-100 font-bold'
                }`}
              >
                {idx === 0 ? '🏫 Sekolah Tingkat' : idx === 1 ? '🏛️ Kampus' : idx === 2 ? '⛲ Air Mancur' : '🕌 Menara'}
              </button>
            ))}
          </div>
        </div>
      </div>
      )}

      {/* Footer System Info */}
      <div className="mt-4 text-center z-10 space-y-1">
        <p className="text-xs text-white font-bold drop-shadow-md">
          © 2026 UPT SMPN 2 Rebang Tangkas • Pembelajaran Digital PAI & Budi Pekerti
        </p>
        <p className="text-[11px] text-amber-200 font-semibold drop-shadow-md">
          Dilengkapi Materi Kurikulum Merdeka, Ujian CBT, Rangkuman Interaktif & Masterku AI
        </p>
      </div>
    </div>
  );
};

