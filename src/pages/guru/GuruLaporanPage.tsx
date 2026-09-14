import React, { useState, useEffect } from 'react';
import { StorageService } from '../../services/storageService';
import { Student, GradeRecord, TeachingJournal } from '../../types';
import { Printer, Download, FileText, CheckCircle2, Award, BookOpen } from 'lucide-react';
import { triggerPrint, exportGradesToCsv, exportStudentsToCsv, downloadCsv, formatDateIndo } from '../../utils/exportUtils';
import { useToast } from '../../components/common/Toast';

export const GuruLaporanPage: React.FC = () => {
  const { showToast } = useToast();
  const [selectedReport, setSelectedReport] = useState<'REKAP_KELAS' | 'RAPOR_SISWA' | 'JURNAL_A4'>('REKAP_KELAS');
  const [selectedClass, setSelectedClass] = useState<'VII' | 'VIII' | 'IX'>('VII');
  const [selectedStudentId, setSelectedStudentId] = useState<string>('');

  const [students, setStudents] = useState<Student[]>([]);
  const [grades, setGrades] = useState<GradeRecord[]>([]);
  const [journals, setJournals] = useState<TeachingJournal[]>([]);

  useEffect(() => {
    StorageService.init();
    const stds = StorageService.getStudents();
    setStudents(stds);
    if (stds.length > 0) {
      setSelectedStudentId(stds[0].id);
    }
    setGrades(StorageService.getAllGrades());
    setJournals(StorageService.getJournals());
  }, []);

  const classStudents = students.filter(s => s.classId === selectedClass);
  const activeStudent = students.find(s => s.id === selectedStudentId) || students[0];
  const activeStudentGrades = grades.filter(g => g.studentId === activeStudent?.id);

  const handleExportCsv = () => {
    if (selectedReport === 'REKAP_KELAS') {
      const csv = exportGradesToCsv(grades.filter(g => g.gradeLevel === selectedClass));
      downloadCsv(csv, `Rekap_Nilai_Kelas_${selectedClass}_SMPN2_Rebang_Tangkas.csv`);
      showToast('Rekap nilai kelas berhasil diunduh.', 'success');
    } else {
      const csv = exportStudentsToCsv(students);
      downloadCsv(csv, `Data_Peserta_Didik_SMPN2_Rebang_Tangkas.csv`);
      showToast('Data siswa berhasil diunduh.', 'success');
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Header */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4 no-print">
        <div>
          <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 uppercase">
            Pusat Dokumen & Cetak Resmi
          </span>
          <h1 className="text-xl sm:text-2xl font-black text-slate-800 tracking-tight mt-1">
            Laporan Hasil Belajar & Administrasi Guru
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Cetak format resmi standar dinas (A4) untuk Rapor Nilai Siswa, Rekapitulasi Kelas, dan Jurnal Harian.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleExportCsv}
            className="flex items-center gap-1.5 px-3.5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-colors"
          >
            <Download className="w-4 h-4" />
            <span>Export CSV / Excel</span>
          </button>
          <button
            onClick={triggerPrint}
            className="flex items-center gap-1.5 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-xs transition-colors"
          >
            <Printer className="w-4 h-4" />
            <span>Cetak Dokumen Ini (A4)</span>
          </button>
        </div>
      </div>

      {/* Report Type Selector */}
      <div className="bg-white rounded-3xl p-4 border border-slate-200 shadow-xs flex flex-wrap items-center justify-between gap-3 no-print">
        <div className="flex items-center gap-2">
          {[
            { id: 'REKAP_KELAS', label: 'Rekapitulasi Nilai per Kelas' },
            { id: 'RAPOR_SISWA', label: 'Lembar Rapor PAI Siswa' },
            { id: 'JURNAL_A4', label: 'Cetak Jurnal Mengajar Guru' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setSelectedReport(tab.id as any)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedReport === tab.id
                  ? 'bg-slate-800 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Dynamic selectors based on active report */}
        {selectedReport === 'REKAP_KELAS' && (
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-500">Pilih Kelas:</span>
            {(['VII', 'VIII', 'IX'] as const).map(lvl => (
              <button
                key={lvl}
                onClick={() => setSelectedClass(lvl)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  selectedClass === lvl
                    ? 'bg-emerald-600 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Kelas {lvl}
              </button>
            ))}
          </div>
        )}

        {selectedReport === 'RAPOR_SISWA' && (
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-500">Pilih Siswa:</span>
            <select
              value={selectedStudentId}
              onChange={e => setSelectedStudentId(e.target.value)}
              className="p-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium outline-hidden"
            >
              {students.map(s => (
                <option key={s.id} value={s.id}>
                  {s.name} (Kelas {s.classId})
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      {/* PRINTABLE DOCUMENT AREA (A4 format with official header) */}
      <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm print:p-0 print:border-none print:shadow-none space-y-6 max-w-4xl mx-auto">
        {/* Kop Surat Sekolah Resmi */}
        <div className="border-b-4 border-double border-slate-800 pb-4 text-center space-y-1">
          <p className="text-xs font-bold tracking-widest uppercase text-slate-600">
            Pemerintah Kabupaten Way Kanan • Dinas Pendidikan dan Kebudayaan
          </p>
          <h2 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight uppercase">
            UPT SMP NEGERI 2 REBANG TANGKAS
          </h2>
          <p className="text-[11px] text-slate-500">
            NPSN: 10806676 • Jl. Lapangan Merdeka Karya Maju, Kec. Rebang Tangkas, Kab. Way Kanan, Lampung 34768
          </p>
          <p className="text-[11px] text-slate-500">
            Email: upt.smpn2rebangtangkas@gmail.com • Media Pembelajaran PAI Smart Learning
          </p>
        </div>

        {/* 1. REKAPITULASI KELAS */}
        {selectedReport === 'REKAP_KELAS' && (
          <div className="space-y-4 text-xs">
            <div className="text-center space-y-0.5">
              <h3 className="text-sm sm:text-base font-black text-slate-900 uppercase">
                Rekapitulasi Capaian Nilai Pendidikan Agama Islam & Budi Pekerti
              </h3>
              <p className="text-slate-500">
                Tingkat: <strong>Kelas {selectedClass}</strong> • Semester: Ganjil • Tahun Ajaran: 2025/2026 • KKM: 75
              </p>
            </div>

            <table className="w-full border-collapse border border-slate-300 text-left">
              <thead>
                <tr className="bg-slate-100 font-bold border-b border-slate-300">
                  <th className="p-2.5 border border-slate-300 text-center w-10">No</th>
                  <th className="p-2.5 border border-slate-300">NIS</th>
                  <th className="p-2.5 border border-slate-300">Nama Siswa</th>
                  <th className="p-2.5 border border-slate-300 text-center">L/P</th>
                  <th className="p-2.5 border border-slate-300 text-center">Nilai Rata-rata</th>
                  <th className="p-2.5 border border-slate-300 text-center">Ketuntasan (KKM 75)</th>
                </tr>
              </thead>
              <tbody>
                {classStudents.map((s, idx) => (
                  <tr key={s.id}>
                    <td className="p-2.5 border border-slate-300 text-center">{idx + 1}</td>
                    <td className="p-2.5 border border-slate-300 font-mono">{s.nis}</td>
                    <td className="p-2.5 border border-slate-300 font-bold">{s.name}</td>
                    <td className="p-2.5 border border-slate-300 text-center">{s.gender}</td>
                    <td className="p-2.5 border border-slate-300 text-center font-bold">{s.averageGrade}</td>
                    <td className="p-2.5 border border-slate-300 text-center font-bold">
                      {s.averageGrade >= 75 ? 'TUNTAS' : 'REMEDIAL'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* 2. LEMBAR RAPOR SISWA */}
        {selectedReport === 'RAPOR_SISWA' && activeStudent && (
          <div className="space-y-5 text-xs">
            <div className="text-center space-y-0.5">
              <h3 className="text-sm sm:text-base font-black text-slate-900 uppercase">
                Laporan Hasil Belajar Siswa (Rapor PAI)
              </h3>
              <p className="text-slate-500">Mata Pelajaran: Pendidikan Agama Islam dan Budi Pekerti</p>
            </div>

            {/* Biodata Mini */}
            <div className="grid grid-cols-2 gap-2 p-3 bg-slate-50 border border-slate-200 rounded-xl">
              <div>
                <p>Nama Siswa: <strong>{activeStudent.name}</strong></p>
                <p>NIS: <strong>{activeStudent.nis}</strong></p>
              </div>
              <div>
                <p>Kelas: <strong>{activeStudent.classId}</strong></p>
                <p>Kriteria Kelulusan Minimal (KKM): <strong>75</strong></p>
              </div>
            </div>

            <table className="w-full border-collapse border border-slate-300 text-left">
              <thead>
                <tr className="bg-slate-100 font-bold border-b border-slate-300">
                  <th className="p-2.5 border border-slate-300 text-center w-10">No</th>
                  <th className="p-2.5 border border-slate-300">Komponen Asesmen / Materi</th>
                  <th className="p-2.5 border border-slate-300 text-center">Standar KKM</th>
                  <th className="p-2.5 border border-slate-300 text-center">Nilai Angka</th>
                  <th className="p-2.5 border border-slate-300 text-center">Predikat & Keterangan</th>
                </tr>
              </thead>
              <tbody>
                {activeStudentGrades.length > 0 ? (
                  activeStudentGrades.map((g, idx) => (
                    <tr key={idx}>
                      <td className="p-2.5 border border-slate-300 text-center">{idx + 1}</td>
                      <td className="p-2.5 border border-slate-300 font-medium">{g.examTitle}</td>
                      <td className="p-2.5 border border-slate-300 text-center">{g.passingScore}</td>
                      <td className="p-2.5 border border-slate-300 text-center font-black text-slate-900">
                        {g.score}
                      </td>
                      <td className="p-2.5 border border-slate-300 text-center font-bold">
                        {g.score >= 85 ? 'Sangat Baik (A)' : g.score >= 75 ? 'Baik (B)' : 'Remedial (C)'}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="p-4 text-center text-slate-400 italic">
                      Belum ada rekapitulasi nilai untuk siswa ini.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}

        {/* 3. JURNAL MENGAJAR A4 */}
        {selectedReport === 'JURNAL_A4' && (
          <div className="space-y-4 text-xs">
            <div className="text-center space-y-0.5">
              <h3 className="text-sm sm:text-base font-black text-slate-900 uppercase">
                Rekap Jurnal Mengajar Guru PAI
              </h3>
              <p className="text-slate-500">
                Guru Mata Pelajaran: <strong>M. Syaifullah, S.Pd.I.</strong> (NIP: 19820512 200801 1 015)
              </p>
            </div>

            <table className="w-full border-collapse border border-slate-300 text-left">
              <thead>
                <tr className="bg-slate-100 font-bold border-b border-slate-300">
                  <th className="p-2 border border-slate-300 text-center w-8">No</th>
                  <th className="p-2 border border-slate-300">Hari / Tgl</th>
                  <th className="p-2 border border-slate-300 text-center">Kelas</th>
                  <th className="p-2 border border-slate-300">Materi Pokok & Kegiatan</th>
                  <th className="p-2 border border-slate-300">Refleksi / Hasil</th>
                </tr>
              </thead>
              <tbody>
                {journals.map((j, idx) => (
                  <tr key={j.id}>
                    <td className="p-2 border border-slate-300 text-center">{idx + 1}</td>
                    <td className="p-2 border border-slate-300">{formatDateIndo(j.date)}</td>
                    <td className="p-2 border border-slate-300 text-center font-bold">{j.gradeLevel}</td>
                    <td className="p-2 border border-slate-300">
                      <p className="font-bold">{j.materialTitle}</p>
                      <p className="text-slate-500 text-[11px]">{j.activitiesSummary}</p>
                    </td>
                    <td className="p-2 border border-slate-300 text-[11px]">{j.teacherReflection}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Tanda Tangan Resmi (Print Footer) */}
        <div className="pt-8 grid grid-cols-2 text-center text-xs text-slate-800">
          <div>
            <p>Mengetahui,</p>
            <p className="font-bold">Kepala UPT SMPN 2 Rebang Tangkas</p>
            <div className="h-20" />
            <p className="font-bold underline">H. AHMAD ROFI'I, M.Pd.</p>
            <p className="text-[11px] text-slate-500">NIP. 19710814 199802 1 003</p>
          </div>

          <div>
            <p>Rebang Tangkas, {new Date().toLocaleDateString('id-ID')}</p>
            <p className="font-bold">Guru Pendidikan Agama Islam,</p>
            <div className="h-20" />
            <p className="font-bold underline">M. SYAIFULLAH, S.Pd.I.</p>
            <p className="text-[11px] text-slate-500">NIP. 19820512 200801 1 015</p>
          </div>
        </div>
      </div>
    </div>
  );
};
