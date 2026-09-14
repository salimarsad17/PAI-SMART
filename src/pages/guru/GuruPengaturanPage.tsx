import React, { useState, useEffect } from 'react';
import { StorageService } from '../../services/storageService';
import { GoogleSheetsService } from '../../services/googleSheetsService';
import { SchoolProfile, Teacher } from '../../types';
import {
  Settings,
  Database,
  Cloud,
  RotateCcw,
  Download,
  Upload,
  Save,
  CheckCircle2,
  AlertTriangle,
  RefreshCw,
  FileCode,
  Copy,
  ExternalLink,
  Check,
  X
} from 'lucide-react';
import { useToast } from '../../components/common/Toast';
import { downloadJson } from '../../utils/exportUtils';
import { CODE_GS_CONTENT } from '../../data/codeGsCode';
import { Modal } from '../../components/common/Modal';

export const GuruPengaturanPage: React.FC = () => {
  const { showToast } = useToast();
  const [profile, setProfile] = useState<SchoolProfile>(StorageService.getSchoolProfile());
  const [teacher, setTeacher] = useState<Teacher>(StorageService.getTeacherProfile());

  const [kkm, setKkm] = useState(75);
  const [tahunAjaran, setTahunAjaran] = useState('2025/2026');
  const [semester, setSemester] = useState('Ganjil');

  // Google Sheets state
  const [sheetUrl, setSheetUrl] = useState(GoogleSheetsService.getScriptUrl() || '');
  const [isTestingSheet, setIsTestingSheet] = useState(false);
  const [isSyncingAll, setIsSyncingAll] = useState(false);
  const [sheetStatus, setSheetStatus] = useState<boolean>(GoogleSheetsService.isConfigured());
  const [isCodeModalOpen, setIsCodeModalOpen] = useState(false);
  const [hasCopiedCode, setHasCopiedCode] = useState(false);

  useEffect(() => {
    StorageService.init();
    setProfile(StorageService.getSchoolProfile());
    setTeacher(StorageService.getTeacherProfile());
  }, []);

  const handleSaveGeneral = (e: React.FormEvent) => {
    e.preventDefault();
    StorageService.updateSchoolProfile(profile);
    StorageService.updateTeacherProfile(teacher);
    showToast('Pengaturan umum dan KKM berhasil disimpan.', 'success');
  };

  const handleTestGoogleSheets = async () => {
    if (!sheetUrl.trim()) {
      showToast('Masukkan URL Google Apps Script terlebih dahulu.', 'error');
      return;
    }
    setIsTestingSheet(true);
    GoogleSheetsService.setScriptUrl(sheetUrl.trim());
    const res = await GoogleSheetsService.testConnection();
    setIsTestingSheet(false);
    setSheetStatus(res.success);
    if (res.success) {
      showToast(res.message, 'success');
    } else {
      showToast(res.message, 'error');
    }
  };

  const handleSyncAll = async () => {
    if (!sheetUrl.trim()) {
      showToast('Simpan URL Google Apps Script terlebih dahulu sebelum sinkronisasi.', 'error');
      return;
    }
    setIsSyncingAll(true);
    GoogleSheetsService.setScriptUrl(sheetUrl.trim());
    const res = await GoogleSheetsService.syncAllToGoogleSheets();
    setIsSyncingAll(false);
    if (res.success) {
      setSheetStatus(true);
      showToast(res.message, 'success');
    } else {
      showToast(res.message, 'error');
    }
  };

  const handleCopyCodeGs = () => {
    navigator.clipboard.writeText(CODE_GS_CONTENT);
    setHasCopiedCode(true);
    showToast('Kode Code.gs berhasil disalin ke clipboard!', 'success');
    setTimeout(() => setHasCopiedCode(false), 2500);
  };

  const handleDownloadCodeGs = () => {
    const blob = new Blob([CODE_GS_CONTENT], { type: 'text/javascript;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Code.gs';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    showToast('File Code.gs berhasil diunduh.', 'success');
  };

  const handleBackupJson = () => {
    const backupData = StorageService.exportAllData();
    downloadJson(backupData, `PAI_SMART_BACKUP_${new Date().toISOString().substring(0, 10)}.json`);
    showToast('File backup data (JSON) berhasil diunduh.', 'success');
  };

  const handleRestoreJson = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = event => {
      try {
        const json = JSON.parse(event.target?.result as string);
        const success = StorageService.importAllData(json);
        if (success) {
          showToast('Data berhasil dipulihkan dari file backup!', 'success');
          setTimeout(() => window.location.reload(), 800);
        } else {
          showToast('Format file JSON tidak valid.', 'error');
        }
      } catch {
        showToast('Gagal membaca file JSON.', 'error');
      }
    };
    reader.readAsText(file);
  };

  const handleResetDefaults = () => {
    if (
      window.confirm(
        'PERINGATAN: Apakah Anda yakin ingin mereset seluruh data ke pengaturan awal bawaan (seed data)? Data perubahan akan dikembalikan.'
      )
    ) {
      StorageService.resetToDefaults();
      showToast('Data aplikasi telah dikembalikan ke kondisi awal bawaan.', 'success');
      setTimeout(() => window.location.reload(), 800);
    }
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto animate-in fade-in duration-200">
      {/* Header */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
            <Settings className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-black text-slate-800 tracking-tight">
              Pengaturan Sistem & Sinkronisasi
            </h1>
            <p className="text-xs text-slate-500 mt-0.5">
              Kelola parameter KKM, backup/restore data, serta integrasi Google Apps Script (Google Sheets).
            </p>
          </div>
        </div>
      </div>

      {/* 1. General Settings & KKM */}
      <form
        onSubmit={handleSaveGeneral}
        className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-5"
      >
        <h3 className="text-sm font-bold text-slate-800 border-b border-slate-100 pb-3 flex items-center gap-2">
          <span>Parameter Pembelajaran & Standar Nilai</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div className="space-y-1">
            <label className="font-bold text-slate-700">Standar KKM Default</label>
            <input
              type="number"
              value={kkm}
              onChange={e => setKkm(Number(e.target.value))}
              className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-black text-emerald-800 outline-hidden"
              required
            />
          </div>

          <div className="space-y-1">
            <label className="font-bold text-slate-700">Tahun Ajaran Aktif</label>
            <input
              type="text"
              value={tahunAjaran}
              onChange={e => setTahunAjaran(e.target.value)}
              className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-medium outline-hidden"
              required
            />
          </div>

          <div className="space-y-1">
            <label className="font-bold text-slate-700">Semester Berjalan</label>
            <select
              value={semester}
              onChange={e => setSemester(e.target.value)}
              className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-medium outline-hidden"
            >
              <option value="Ganjil">Semester 1 (Ganjil)</option>
              <option value="Genap">Semester 2 (Genap)</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-2">
          <div className="space-y-1">
            <label className="font-bold text-slate-700">Nama Guru PAI Pengampu</label>
            <input
              type="text"
              value={teacher.name}
              onChange={e => setTeacher({ ...teacher, name: e.target.value })}
              className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-medium outline-hidden"
              required
            />
          </div>
          <div className="space-y-1">
            <label className="font-bold text-slate-700">NIP Guru</label>
            <input
              type="text"
              value={teacher.nip}
              onChange={e => setTeacher({ ...teacher, nip: e.target.value })}
              className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-medium outline-hidden"
              required
            />
          </div>
        </div>

        <div className="flex justify-end pt-2">
          <button
            type="submit"
            className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-xs flex items-center gap-1.5"
          >
            <Save className="w-4 h-4" />
            <span>Simpan Pengaturan</span>
          </button>
        </div>
      </form>

      {/* 2. Google Sheets Cloud Sync Integration */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2">
            <Cloud className="w-5 h-5 text-emerald-600" />
            <h3 className="text-sm font-bold text-slate-800">Integrasi Cloud Google Sheets</h3>
          </div>
          <span
            className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${
              sheetStatus ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-600'
            }`}
          >
            {sheetStatus ? '● Terhubung ke Cloud' : '○ Menggunakan LocalStorage'}
          </span>
        </div>

        <p className="text-xs text-slate-600 leading-relaxed">
          Hubungkan aplikasi dengan Google Apps Script Web App untuk otomatis menyinkronkan data siswa, nilai, dan absensi ke spreadsheet Google Drive sekolah secara gratis tanpa database berbayar.
        </p>

        <div className="space-y-1 text-xs">
          <label className="font-bold text-slate-700">URL Web App Google Apps Script:</label>
          <input
            type="url"
            value={sheetUrl}
            onChange={e => setSheetUrl(e.target.value)}
            placeholder="https://script.google.com/macros/s/AKfycb.../exec"
            className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl font-mono text-xs outline-hidden"
          />
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
          <button
            type="button"
            onClick={() => setIsCodeModalOpen(true)}
            className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors"
          >
            <FileCode className="w-4 h-4 text-emerald-600" />
            <span>Lihat Kode Code.gs & Petunjuk Setup</span>
          </button>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={handleSyncAll}
              disabled={isSyncingAll || !sheetUrl.trim()}
              className="px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-xs disabled:opacity-50 transition-colors"
            >
              <Upload className={`w-3.5 h-3.5 ${isSyncingAll ? 'animate-bounce' : ''}`} />
              <span>{isSyncingAll ? 'Menyinkronkan...' : 'Sinkronkan Semua Data ke Spreadsheet'}</span>
            </button>

            <button
              type="button"
              onClick={handleTestGoogleSheets}
              disabled={isTestingSheet}
              className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-xs disabled:opacity-50 transition-colors"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isTestingSheet ? 'animate-spin' : ''}`} />
              <span>{isTestingSheet ? 'Menguji Koneksi...' : 'Simpan & Uji Koneksi'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* 3. Backup, Restore & Reset */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4">
        <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
          <Database className="w-5 h-5 text-blue-600" />
          <h3 className="text-sm font-bold text-slate-800">Cadangkan & Pulihkan Data (Backup / Restore)</h3>
        </div>

        <p className="text-xs text-slate-600 leading-relaxed">
          Simpan seluruh database lokal (materi, bank soal, nilai siswa, jurnal mengajar) ke dalam satu file JSON untuk keamanan data.
        </p>

        <div className="flex flex-wrap gap-3 pt-2">
          <button
            onClick={handleBackupJson}
            className="flex items-center gap-2 px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-colors"
          >
            <Download className="w-4 h-4" />
            <span>Download Backup JSON</span>
          </button>

          <label className="flex items-center gap-2 px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-colors cursor-pointer">
            <Upload className="w-4 h-4" />
            <span>Pulihkan dari File JSON</span>
            <input type="file" accept=".json" onChange={handleRestoreJson} className="hidden" />
          </label>

          <button
            onClick={handleResetDefaults}
            className="flex items-center gap-2 px-4 py-2.5 bg-rose-50 hover:bg-rose-100 text-rose-700 rounded-xl text-xs font-bold transition-colors ml-auto"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Reset ke Data Awal</span>
          </button>
        </div>
      </div>

      {/* Modal Kode Code.gs & Panduan Pemasangan */}
      <Modal
        isOpen={isCodeModalOpen}
        onClose={() => setIsCodeModalOpen(false)}
        title="Kode Google Apps Script (Code.gs) & Panduan Setup"
        size="xl"
      >
        <div className="space-y-5 text-xs">
          {/* Petunjuk Langkah Demi Langkah */}
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 text-emerald-950 space-y-2.5">
            <div className="flex items-center gap-2 font-black text-sm text-emerald-900">
              <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
              <span>Langkah Cepat Menghubungkan Google Sheet:</span>
            </div>
            <ol className="list-decimal list-inside space-y-1.5 text-xs text-emerald-900/90 leading-relaxed font-medium">
              <li>
                Buka <a href="https://drive.google.com" target="_blank" rel="noreferrer" className="underline font-bold text-emerald-800">Google Drive</a> dan buat <strong>Google Spreadsheet</strong> baru.
              </li>
              <li>
                Di menu Spreadsheet atas, klik <strong>Ekstensi (Extensions) &gt; Apps Script</strong>.
              </li>
              <li>
                Hapus seluruh isi default, lalu <strong>Salin &amp; Tempel</strong> seluruh kode di bawah ini ke file <code className="bg-emerald-100 px-1 py-0.5 rounded font-bold">Code.gs</code>.
              </li>
              <li>
                Pilih fungsi <code className="bg-emerald-100 px-1 py-0.5 rounded font-bold">setupSpreadsheet</code> di toolbar atas, lalu klik <strong>Jalankan (Run)</strong> untuk membuat sheet otomatis (Siswa, Nilai, Materi, BankSoal, Absensi, Jurnal). Berikan izin akses saat diminta Google.
              </li>
              <li>
                Klik tombol <strong>Terapkan (Deploy) &gt; Penerapan Baru (New Deployment)</strong>.
              </li>
              <li>
                Pilih jenis: <strong>Aplikasi Web (Web App)</strong>.
              </li>
              <li>
                Atur <em>Jalankan sebagai:</em> <strong>Saya</strong>, dan <em>Yang memiliki akses:</em> <strong className="text-rose-700 bg-rose-50 px-1 rounded">Siapa saja (Anyone)</strong>.
              </li>
              <li>
                Salin <strong>URL Aplikasi Web</strong> yang berakhiran <code className="bg-emerald-100 px-1 py-0.5 rounded font-bold">/exec</code> dan tempelkan pada kolom URL di menu Pengaturan ini.
              </li>
            </ol>
          </div>

          {/* Action Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-50 border border-slate-200 p-3 rounded-2xl">
            <div className="flex items-center gap-2 text-slate-700 font-bold">
              <FileCode className="w-4 h-4 text-emerald-600" />
              <span>Isi File: Code.gs (Google Apps Script)</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleCopyCodeGs}
                className="px-3.5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold flex items-center gap-1.5 shadow-xs transition-colors"
              >
                {hasCopiedCode ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{hasCopiedCode ? 'Tersalin!' : 'Salin Semua Kode'}</span>
              </button>
              <button
                type="button"
                onClick={handleDownloadCodeGs}
                className="px-3.5 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded-xl font-bold flex items-center gap-1.5 transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Unduh File Code.gs</span>
              </button>
            </div>
          </div>

          {/* Code Viewer */}
          <div className="relative border border-slate-200 rounded-2xl bg-slate-900 text-slate-100 p-4 font-mono text-[11px] leading-relaxed max-h-96 overflow-y-auto shadow-inner">
            <pre className="whitespace-pre">{CODE_GS_CONTENT}</pre>
          </div>

          <div className="flex justify-end pt-2">
            <button
              type="button"
              onClick={() => setIsCodeModalOpen(false)}
              className="px-5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl text-xs"
            >
              Tutup
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
