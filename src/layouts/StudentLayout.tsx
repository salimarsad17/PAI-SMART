import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Navbar } from '../components/common/Navbar';
import { Sidebar } from '../components/common/Sidebar';
import { AIAssistantModal } from '../components/student/AIAssistantModal';
import { AuthService } from '../services/authService';
import { StorageService } from '../services/storageService';
import { User } from '../types';

export const StudentLayout: React.FC = () => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState<User | null>(() => AuthService.getCurrentUser());
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isAIModalOpen, setIsAIModalOpen] = useState(false);

  useEffect(() => {
    StorageService.init();
    const handleAuthChange = () => {
      const u = AuthService.getCurrentUser();
      setCurrentUser(u);
      if (!u || u.role !== 'SISWA') {
        navigate('/login');
      }
    };

    window.addEventListener('auth_state_changed', handleAuthChange);

    const initial = AuthService.getCurrentUser();
    if (!initial) {
      AuthService.loginAsDemo('SISWA');
    } else if (initial.role !== 'SISWA') {
      navigate('/login');
    }

    return () => {
      window.removeEventListener('auth_state_changed', handleAuthChange);
    };
  }, [navigate]);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      {/* Sidebar navigation */}
      <Sidebar
        role="SISWA"
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <div className="lg:pl-64 flex flex-col flex-1">
        {/* Top Navbar */}
        <Navbar
          currentUser={currentUser}
          onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
          onOpenAIModal={() => setIsAIModalOpen(true)}
        />

        {/* Main Routed Page Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto">
          <Outlet />
        </main>

        {/* Footer with school identity */}
        <footer className="mt-auto py-6 px-4 sm:px-8 border-t border-slate-200 bg-white text-center text-xs text-slate-500 space-y-1 no-print">
          <p className="font-bold text-slate-700">
            PAI SMART LEARNING • UPT SMPN 2 REBANG TANGKAS
          </p>
          <p className="text-emerald-700 font-medium">
            "Belajar PAI dengan Mudah, Interaktif, dan Menyenangkan"
          </p>
          <p className="text-[11px] text-slate-400">
            Pendidikan Agama Islam dan Budi Pekerti • Kelas VII, VIII, IX • Kab. Way Kanan, Lampung
          </p>
        </footer>
      </div>

      {/* AI Assistant Modal */}
      <AIAssistantModal
        isOpen={isAIModalOpen}
        onClose={() => setIsAIModalOpen(false)}
      />
    </div>
  );
};
