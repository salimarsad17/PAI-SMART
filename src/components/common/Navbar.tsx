import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Menu,
  Search,
  LogOut,
  User as UserIcon,
  Shield,
  GraduationCap,
  Sparkles,
  ChevronDown
} from 'lucide-react';
import { AuthService } from '../../services/authService';
import { StorageService } from '../../services/storageService';
import { SearchBarModal } from './SearchBarModal';
import { User } from '../../types';

interface NavbarProps {
  currentUser: User | null;
  onToggleSidebar: () => void;
  onOpenAIModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentUser,
  onToggleSidebar,
  onOpenAIModal
}) => {
  const navigate = useNavigate();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const schoolProfile = StorageService.getSchoolProfile();
  const isGuru = currentUser?.role === 'GURU';

  const handleLogout = () => {
    AuthService.logout();
    navigate('/login');
  };

  const handleSwitchToGuru = () => {
    AuthService.loginAsDemo('GURU');
    setIsProfileMenuOpen(false);
    navigate('/guru/dashboard');
  };

  const handleSwitchToSiswa = () => {
    AuthService.loginAsDemo('SISWA');
    setIsProfileMenuOpen(false);
    navigate('/siswa/dashboard');
  };

  return (
    <>
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs no-print">
        <div className="px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          {/* Left: Mobile Hamburger & School Brand */}
          <div className="flex items-center gap-3">
            <button
              onClick={onToggleSidebar}
              className="lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-xl transition-colors focus:outline-hidden"
              aria-label="Toggle Sidebar"
            >
              <Menu className="w-5 h-5" />
            </button>

            <div
              onClick={() => navigate(isGuru ? '/guru/dashboard' : '/siswa/dashboard')}
              className="flex items-center gap-2.5 cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-700 flex items-center justify-center text-white font-black shadow-sm group-hover:scale-105 transition-transform">
                <span className="text-base tracking-tighter">PAI</span>
              </div>
              <div className="hidden sm:block">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-extrabold text-slate-800 tracking-tight leading-none group-hover:text-emerald-700 transition-colors">
                    PAI SMART LEARNING
                  </span>
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 uppercase tracking-wider">
                    SMP
                  </span>
                </div>
                <p className="text-[11px] font-medium text-slate-500 leading-tight mt-0.5">
                  {schoolProfile.name}
                </p>
              </div>
            </div>
          </div>

          {/* Middle: Quick Search Trigger */}
          <div className="flex-1 max-w-md hidden md:block">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="w-full flex items-center justify-between px-4 py-2 bg-slate-100/80 hover:bg-slate-100 text-slate-400 hover:text-slate-600 rounded-2xl text-xs font-medium border border-transparent hover:border-slate-200 transition-all shadow-2xs"
            >
              <span className="flex items-center gap-2">
                <Search className="w-4 h-4 text-emerald-600" />
                <span>Cari materi PAI, Al-Qur'an, video, soal...</span>
              </span>
              <kbd className="px-2 py-0.5 bg-white border border-slate-200 rounded-lg text-[10px] text-slate-400 font-semibold shadow-2xs">
                ⌘K
              </kbd>
            </button>
          </div>

          {/* Right: Actions, AI Assistant button, User & Quick Demo Switch */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search button mobile */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-xl"
              title="Pencarian"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* AI PAI Assistant button */}
            {onOpenAIModal && (
              <button
                onClick={onOpenAIModal}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white text-xs font-bold shadow-xs transition-all active:scale-95"
              >
                <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                <span className="hidden sm:inline">Tanya AI PAI</span>
              </button>
            )}

            {/* User Profile Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                className="flex items-center gap-2.5 p-1.5 sm:px-3 sm:py-1.5 rounded-2xl hover:bg-slate-100 transition-colors"
              >
                <img
                  src={currentUser?.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&auto=format&fit=crop&q=80'}
                  alt={currentUser?.name}
                  className="w-8 h-8 rounded-xl object-cover border border-slate-200"
                />
                <div className="text-left hidden lg:block">
                  <p className="text-xs font-bold text-slate-800 leading-tight truncate max-w-[130px]">
                    {currentUser?.name || 'Pengguna'}
                  </p>
                  <p className="text-[10px] text-slate-500 font-medium">
                    {isGuru ? 'Guru PAI' : `Siswa Kelas ${currentUser?.classId || 'VII'}`}
                  </p>
                </div>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 hidden sm:block" />
              </button>

              {/* Dropdown Menu */}
              {isProfileMenuOpen && (
                <div
                  className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-slate-200 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                  onClick={() => setIsProfileMenuOpen(false)}
                >
                  <div className="px-4 py-2 border-b border-slate-100">
                    <p className="text-xs font-bold text-slate-800 truncate">{currentUser?.name}</p>
                    <p className="text-[11px] text-slate-500">
                      {isGuru ? `NIP: ${currentUser?.nip || '-'}` : `NIS: ${currentUser?.nis || '-'}`}
                    </p>
                    <span className="inline-block mt-1 text-[10px] font-bold px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200">
                      {currentUser?.role}
                    </span>
                  </div>

                  <div className="py-1">
                    <button
                      onClick={() => navigate(isGuru ? '/guru/pengaturan' : '/siswa/profil')}
                      className="w-full text-left px-4 py-2 text-xs text-slate-700 hover:bg-slate-50 flex items-center gap-2.5 font-medium"
                    >
                      <UserIcon className="w-4 h-4 text-slate-400" />
                      <span>Lihat Profil Saya</span>
                    </button>
                  </div>

                  {/* Switch Demo Role Shortcut */}
                  <div className="border-t border-slate-100 py-1 bg-slate-50/50">
                    <p className="px-4 py-1 text-[10px] uppercase font-bold text-slate-400">Ganti Akun Demo</p>
                    <button
                      onClick={handleSwitchToGuru}
                      className={`w-full text-left px-4 py-1.5 text-xs flex items-center gap-2 ${
                        isGuru ? 'text-emerald-700 font-bold bg-emerald-50' : 'text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      <Shield className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Masuk sebagai Guru Demo</span>
                    </button>
                    <button
                      onClick={handleSwitchToSiswa}
                      className={`w-full text-left px-4 py-1.5 text-xs flex items-center gap-2 ${
                        !isGuru ? 'text-emerald-700 font-bold bg-emerald-50' : 'text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      <GraduationCap className="w-3.5 h-3.5 text-blue-600" />
                      <span>Masuk sebagai Siswa Demo</span>
                    </button>
                  </div>

                  <div className="border-t border-slate-100 pt-1">
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-xs text-rose-600 hover:bg-rose-50 flex items-center gap-2.5 font-semibold"
                    >
                      <LogOut className="w-4 h-4 text-rose-500" />
                      <span>Keluar (Logout)</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Global Search Dialog Modal */}
      <SearchBarModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        role={currentUser?.role || 'SISWA'}
      />
    </>
  );
};
