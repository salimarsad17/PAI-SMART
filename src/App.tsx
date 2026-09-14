import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ToastProvider } from './components/common/Toast';
import { AuthService } from './services/authService';

// Layouts
import { StudentLayout } from './layouts/StudentLayout';
import { GuruLayout } from './layouts/GuruLayout';

// Auth
import { LoginPage } from './pages/LoginPage';

// Siswa Pages
import { SiswaDashboardPage } from './pages/siswa/SiswaDashboardPage';
import { SiswaMateriPage } from './pages/siswa/SiswaMateriPage';
import { SiswaMateriDetailPage } from './pages/siswa/SiswaMateriDetailPage';
import { SiswaQuranHaditsPage } from './pages/siswa/SiswaQuranHaditsPage';
import { SiswaVideoPage } from './pages/siswa/SiswaVideoPage';
import { SiswaLatihanPage } from './pages/siswa/SiswaLatihanPage';
import { SiswaUjianPage } from './pages/siswa/SiswaUjianPage';
import { SiswaNilaiPage } from './pages/siswa/SiswaNilaiPage';
import { SiswaTugasPage } from './pages/siswa/SiswaTugasPage';
import { SiswaProgresPage } from './pages/siswa/SiswaProgresPage';
import { SiswaPrestasiPage } from './pages/siswa/SiswaPrestasiPage';
import { SiswaProfilPage } from './pages/siswa/SiswaProfilPage';
import { SiswaMasterkuPage } from './pages/siswa/SiswaMasterkuPage';

// Guru Pages
import { GuruDashboardPage } from './pages/guru/GuruDashboardPage';
import { GuruProfilSekolahPage } from './pages/guru/GuruProfilSekolahPage';
import { GuruKelasSiswaPage } from './pages/guru/GuruKelasSiswaPage';
import { GuruMateriPage } from './pages/guru/GuruMateriPage';
import { GuruBankSoalPage } from './pages/guru/GuruBankSoalPage';
import { GuruUjianPage } from './pages/guru/GuruUjianPage';
import { GuruNilaiAnalisisPage } from './pages/guru/GuruNilaiAnalisisPage';
import { GuruJurnalPage } from './pages/guru/GuruJurnalPage';
import { GuruLaporanPage } from './pages/guru/GuruLaporanPage';
import { GuruPengaturanPage } from './pages/guru/GuruPengaturanPage';
import { GuruKelasPage } from './pages/guru/GuruKelasPage';
import { GuruVideoPage } from './pages/guru/GuruVideoPage';
import { GuruTugasPage } from './pages/guru/GuruTugasPage';
import { GuruAbsensiPage } from './pages/guru/GuruAbsensiPage';
import { GuruSikapPage } from './pages/guru/GuruSikapPage';
import { GuruPengumumanPage } from './pages/guru/GuruPengumumanPage';

// Root gate redirect
const RootRedirect: React.FC = () => {
  const user = AuthService.getCurrentUser();
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return user.role?.toUpperCase() === 'GURU' ? (
    <Navigate to="/guru/dashboard" replace />
  ) : (
    <Navigate to="/siswa/dashboard" replace />
  );
};

export default function App() {
  return (
    <ToastProvider>
      <BrowserRouter>
        <Routes>
          {/* Public Auth Route */}
          <Route path="/login" element={<LoginPage />} />

          {/* Root Redirect */}
          <Route path="/" element={<RootRedirect />} />

          {/* Student Sub-routes */}
          <Route path="/siswa" element={<StudentLayout />}>
            <Route index element={<Navigate to="/siswa/dashboard" replace />} />
            <Route path="dashboard" element={<SiswaDashboardPage />} />
            <Route path="masterku" element={<SiswaMasterkuPage />} />
            <Route path="materi" element={<SiswaMateriPage />} />
            <Route path="materi/:id" element={<SiswaMateriDetailPage />} />
            <Route path="quran" element={<SiswaQuranHaditsPage />} />
            <Route path="video" element={<SiswaVideoPage />} />
            <Route path="latihan" element={<SiswaLatihanPage />} />
            <Route path="ujian" element={<SiswaUjianPage />} />
            <Route path="nilai" element={<SiswaNilaiPage />} />
            <Route path="tugas" element={<SiswaTugasPage />} />
            <Route path="progres" element={<SiswaProgresPage />} />
            <Route path="prestasi" element={<SiswaPrestasiPage />} />
            <Route path="profil" element={<SiswaProfilPage />} />
          </Route>

          {/* Teacher Sub-routes */}
          <Route path="/guru" element={<GuruLayout />}>
            <Route index element={<Navigate to="/guru/dashboard" replace />} />
            <Route path="dashboard" element={<GuruDashboardPage />} />
            <Route path="masterku" element={<SiswaMasterkuPage />} />
            <Route path="profil-sekolah" element={<GuruProfilSekolahPage />} />
            <Route path="kelas" element={<GuruKelasPage />} />
            <Route path="siswa" element={<GuruKelasSiswaPage />} />
            <Route path="absensi" element={<GuruAbsensiPage />} />
            <Route path="sikap" element={<GuruSikapPage />} />
            <Route path="materi" element={<GuruMateriPage />} />
            <Route path="video" element={<GuruVideoPage />} />
            <Route path="soal" element={<GuruBankSoalPage />} />
            <Route path="ujian" element={<GuruUjianPage />} />
            <Route path="tugas" element={<GuruTugasPage />} />
            <Route path="nilai" element={<GuruNilaiAnalisisPage />} />
            <Route path="analisis" element={<GuruNilaiAnalisisPage />} />
            <Route path="jurnal" element={<GuruJurnalPage />} />
            <Route path="laporan" element={<GuruLaporanPage />} />
            <Route path="pengumuman" element={<GuruPengumumanPage />} />
            <Route path="quran" element={<SiswaQuranHaditsPage />} />
            <Route path="pengaturan" element={<GuruPengaturanPage />} />
          </Route>

          {/* Catch-all */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </ToastProvider>
  );
}
