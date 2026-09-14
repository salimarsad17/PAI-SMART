import React from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  BookOpen,
  BookMarked,
  HeartHandshake,
  Sparkles,
  Scale,
  Landmark,
  Video,
  FileQuestion,
  GraduationCap,
  Award,
  BarChart3,
  Trophy,
  User,
  LogOut,
  Building2,
  Users,
  Layers,
  Database,
  CalendarCheck,
  FileSpreadsheet,
  Smile,
  ClipboardList,
  Bell,
  Printer,
  Settings,
  X
} from 'lucide-react';
import { AuthService } from '../../services/authService';

interface SidebarProps {
  role: 'GURU' | 'SISWA';
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ role, isOpen, onClose }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    AuthService.logout();
    navigate('/login');
  };

  const studentNavGroups = [
    {
      group: 'Utama',
      items: [
        { label: 'Dashboard', icon: LayoutDashboard, path: '/siswa/dashboard' },
        { label: 'Masterku AI', icon: Sparkles, path: '/siswa/masterku', badge: 'Baru' },
        { label: 'Semua Materi PAI', icon: BookOpen, path: '/siswa/materi' }
      ]
    },
    {
      group: 'Kategori Keilmuan',
      items: [
        { label: 'Al-Qur\'an & Hadis', icon: BookMarked, path: '/siswa/quran' },
        { label: 'Aqidah', icon: Sparkles, path: '/siswa/materi?kategori=AQIDAH' },
        { label: 'Akhlak', icon: HeartHandshake, path: '/siswa/materi?kategori=AKHLAK' },
        { label: 'Fikih Ibadah', icon: Scale, path: '/siswa/materi?kategori=FIKIH' },
        { label: 'Sejarah Islam (SKI)', icon: Landmark, path: '/siswa/materi?kategori=SKI' }
      ]
    },
    {
      group: 'Aktivitas & Evaluasi',
      items: [
        { label: 'Video Pembelajaran', icon: Video, path: '/siswa/video' },
        { label: 'Latihan Soal', icon: FileQuestion, path: '/siswa/latihan' },
        { label: 'Ujian Online', icon: GraduationCap, path: '/siswa/ujian' },
        { label: 'Tugas Siswa', icon: ClipboardList, path: '/siswa/tugas' }
      ]
    },
    {
      group: 'Pencapaian',
      items: [
        { label: 'Nilai Saya', icon: Award, path: '/siswa/nilai' },
        { label: 'Progres Belajar', icon: BarChart3, path: '/siswa/progres' },
        { label: 'Prestasi & Sertifikat', icon: Trophy, path: '/siswa/prestasi' },
        { label: 'Profil Saya', icon: User, path: '/siswa/profil' }
      ]
    }
  ];

  const teacherNavGroups = [
    {
      group: 'Dashboard & Sekolah',
      items: [
        { label: 'Dashboard Guru', icon: LayoutDashboard, path: '/guru/dashboard' },
        { label: 'Masterku AI', icon: Sparkles, path: '/guru/masterku', badge: 'Pustaka' },
        { label: 'Profil Sekolah', icon: Building2, path: '/guru/profil-sekolah' },
        { label: 'Data Kelas', icon: Layers, path: '/guru/kelas' },
        { label: 'Data Siswa', icon: Users, path: '/guru/siswa' }
      ]
    },
    {
      group: 'Pembelajaran & Soal',
      items: [
        { label: 'Materi Pembelajaran', icon: BookOpen, path: '/guru/materi' },
        { label: 'Video Pembelajaran', icon: Video, path: '/guru/video' },
        { label: 'Bank Soal', icon: Database, path: '/guru/soal' },
        { label: 'Ujian Online', icon: GraduationCap, path: '/guru/ujian' },
        { label: 'Tugas Siswa', icon: ClipboardList, path: '/guru/tugas' }
      ]
    },
    {
      group: 'Penilaian & Jurnal',
      items: [
        { label: 'Nilai Siswa', icon: Award, path: '/guru/nilai' },
        { label: 'Analisis Nilai', icon: BarChart3, path: '/guru/analisis' },
        { label: 'Absensi Siswa', icon: CalendarCheck, path: '/guru/absensi' },
        { label: 'Jurnal Mengajar Guru', icon: FileSpreadsheet, path: '/guru/jurnal' },
        { label: 'Jurnal Sikap Siswa', icon: Smile, path: '/guru/sikap' }
      ]
    },
    {
      group: 'Informasi & Laporan',
      items: [
        { label: 'Pengumuman', icon: Bell, path: '/guru/pengumuman' },
        { label: 'Laporan & Cetak A4', icon: Printer, path: '/guru/laporan' },
        { label: 'Pengaturan', icon: Settings, path: '/guru/pengaturan' }
      ]
    }
  ];

  const navGroups = role === 'GURU' ? teacherNavGroups : studentNavGroups;

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-40 lg:hidden no-print"
          onClick={onClose}
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-40 w-64 bg-white border-r border-slate-200 transition-transform duration-300 ease-in-out lg:translate-x-0 flex flex-col no-print ${
          isOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full'
        }`}
      >
        {/* Header Branding */}
        <div className="h-16 px-5 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-emerald-600 flex items-center justify-center text-white font-bold shadow-xs">
              PAI
            </div>
            <div>
              <p className="text-xs font-bold text-slate-800 leading-tight">PAI SMART</p>
              <p className="text-[10px] text-slate-400 font-medium">SMPN 2 Rebang Tangkas</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="lg:hidden p-1.5 text-slate-400 hover:text-slate-600 rounded-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Links Scrollable */}
        <div className="flex-1 overflow-y-auto px-3 py-4 space-y-6">
          {navGroups.map((group, gIdx) => (
            <div key={gIdx} className="space-y-1">
              <p className="px-3 text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                {group.group}
              </p>
              <div className="space-y-0.5 mt-1">
                {group.items.map((item, iIdx) => {
                  const Icon = item.icon;
                  const isActive =
                    item.path.includes('?')
                      ? location.pathname + location.search === item.path
                      : location.pathname === item.path;

                  return (
                    <NavLink
                      key={iIdx}
                      to={item.path}
                      onClick={() => {
                        if (window.innerWidth < 1024) onClose();
                      }}
                      className={`flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                        isActive
                          ? 'bg-emerald-600 text-white shadow-xs font-bold'
                          : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                      }`}
                    >
                      <div className="flex items-center gap-3 truncate">
                        <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                        <span className="truncate">{item.label}</span>
                      </div>
                      {(item as any).badge && (
                        <span
                          className={`text-[9px] font-bold px-1.5 py-0.5 rounded-md ${
                            isActive
                              ? 'bg-emerald-700 text-amber-200'
                              : 'bg-amber-100 text-amber-800'
                          }`}
                        >
                          {(item as any).badge}
                        </span>
                      )}
                    </NavLink>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Logout & Identity */}
        <div className="p-3 border-t border-slate-100 bg-slate-50/70 space-y-2">
          <div className="px-2 py-1">
            <p className="text-[10px] font-bold text-slate-500 truncate">
              {role === 'GURU' ? 'Mode Guru / Pendidik' : 'Mode Peserta Didik'}
            </p>
            <p className="text-[10px] text-slate-400 truncate">Slogan: Belajar PAI Menyenangkan</p>
          </div>
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 px-3 py-2 text-xs font-bold text-rose-600 hover:bg-rose-50 rounded-xl transition-colors"
          >
            <LogOut className="w-4 h-4" />
            <span>Keluar Aplikasi</span>
          </button>
        </div>
      </aside>
    </>
  );
};
