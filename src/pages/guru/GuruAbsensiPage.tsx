import React, { useState, useEffect } from 'react';
import { StorageService } from '../../services/storageService';
import { Student, AttendanceRecord } from '../../types';
import {
  CalendarCheck,
  CheckCircle2,
  Clock,
  Printer,
  Download,
  Search,
  Save,
  Users,
  AlertCircle,
  HelpCircle,
  XCircle
} from 'lucide-react';
import { useToast } from '../../components/common/Toast';
import { triggerPrint, downloadCsv, formatDateIndo } from '../../utils/exportUtils';

type AttendStatus = 'hadir' | 'sakit' | 'izin' | 'alpa';

export const GuruAbsensiPage: React.FC = () => {
  const { showToast } = useToast();
  const [selectedClass, setSelectedClass] = useState<'VII' | 'VIII' | 'IX'>('VII');
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().substring(0, 10));
  const [searchQuery, setSearchQuery] = useState('');

  const [students, setStudents] = useState<Student[]>([]);
  const [attendanceRecords, setAttendanceRecords] = useState<AttendanceRecord[]>([]);
  const [currentAttendance, setCurrentAttendance] = useState<Record<string, AttendStatus>>({});

  useEffect(() => {
    StorageService.init();
    const stds = StorageService.getStudents();
    setStudents(stds);
    const recs = StorageService.getAttendance();
    setAttendanceRecords(recs);

    // Populate current attendance map for selected date and class
    loadAttendanceForDateAndClass(selectedDate, selectedClass, recs, stds);
  }, []);

  const loadAttendanceForDateAndClass = (
    date: string,
    cls: string,
    recs: AttendanceRecord[],
    stds: Student[]
  ) => {
    const classStds = stds.filter(s => s.classId === cls);
    const initialMap: Record<string, AttendStatus> = {};

    classStds.forEach(st => {
      const found = recs.find(r => r.studentId === st.id && r.date === date);
      if (found) {
        initialMap[st.id] = (found.status?.toLowerCase() as AttendStatus) || 'hadir';
      } else {
        // Default to hadir
        initialMap[st.id] = 'hadir';
      }
    });

    setCurrentAttendance(initialMap);
  };

  const handleClassChange = (cls: 'VII' | 'VIII' | 'IX') => {
    setSelectedClass(cls);
    loadAttendanceForDateAndClass(selectedDate, cls, attendanceRecords, students);
  };

  const handleDateChange = (date: string) => {
    setSelectedDate(date);
    loadAttendanceForDateAndClass(date, selectedClass, attendanceRecords, students);
  };

  const handleSetStatus = (studentId: string, status: AttendStatus) => {
    setCurrentAttendance(prev => ({
      ...prev,
      [studentId]: status
    }));
  };

  const handleMarkAllHadir = () => {
    const updated: Record<string, AttendStatus> = {};
    filteredStudents.forEach(st => {
      updated[st.id] = 'hadir';
    });
    setCurrentAttendance(prev => ({ ...prev, ...updated }));
    showToast('Seluruh siswa berhasil ditandai HADIR.', 'success');
  };

  const handleSaveAttendance = () => {
    const classStds = students.filter(s => s.classId === selectedClass);
    classStds.forEach(st => {
      const status = currentAttendance[st.id] || 'hadir';
      const record: AttendanceRecord = {
        id: `att-${selectedDate}-${st.id}`,
        studentId: st.id,
        studentName: st.name,
        gradeLevel: selectedClass,
        classId: selectedClass,
        date: selectedDate,
        status: status === 'hadir' ? 'Hadir' : status === 'sakit' ? 'Sakit' : status === 'izin' ? 'Izin' : 'Alpa',
        notes: ''
      };
      StorageService.saveAttendance(record);
    });

    const updatedRecs = StorageService.getAttendance();
    setAttendanceRecords(updatedRecs);
    showToast(`Presensi Kelas ${selectedClass} tanggal ${formatDateIndo(selectedDate)} berhasil disimpan!`, 'success');
  };

  const handleExportCsv = () => {
    const classStds = students.filter(s => s.classId === selectedClass);
    const headers = ['No', 'NIS', 'Nama Siswa', 'Kelas', 'Tanggal', 'Status Kehadiran'];
    const rows = classStds.map((s, idx) => [
      idx + 1,
      s.nis,
      `"${s.name}"`,
      s.classId,
      selectedDate,
      (currentAttendance[s.id] || 'hadir').toUpperCase()
    ]);

    const csvContent = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    downloadCsv(csvContent, `Presensi_PAI_Kelas_${selectedClass}_${selectedDate}.csv`);
    showToast('Data presensi berhasil diekspor ke CSV.', 'success');
  };

  const filteredStudents = students.filter(
    s =>
      s.classId === selectedClass &&
      (!searchQuery.trim() ||
        s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.nis.includes(searchQuery.trim()))
  );

  const hadirCount = filteredStudents.filter(s => (currentAttendance[s.id] || 'hadir') === 'hadir').length;
  const sakitCount = filteredStudents.filter(s => currentAttendance[s.id] === 'sakit').length;
  const izinCount = filteredStudents.filter(s => currentAttendance[s.id] === 'izin').length;
  const alpaCount = filteredStudents.filter(s => currentAttendance[s.id] === 'alpa').length;
  const totalInClass = filteredStudents.length;
  const percentage = totalInClass > 0 ? Math.round((hadirCount / totalInClass) * 100) : 100;

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Header */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4 no-print">
        <div>
          <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 uppercase">
            Presensi & Kedisiplinan Siswa
          </span>
          <h1 className="text-xl sm:text-2xl font-black text-slate-800 tracking-tight mt-1">
            Absensi Siswa Pembelajaran PAI
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Catat kehadiran peserta didik per pertemuan tatap muka di UPT SMPN 2 Rebang Tangkas.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={handleExportCsv}
            className="flex items-center gap-1.5 px-3.5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-colors"
          >
            <Download className="w-4 h-4" />
            <span>Export CSV</span>
          </button>
          <button
            onClick={triggerPrint}
            className="flex items-center gap-1.5 px-3.5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-colors"
          >
            <Printer className="w-4 h-4" />
            <span>Cetak A4</span>
          </button>
          <button
            onClick={handleSaveAttendance}
            className="flex items-center gap-1.5 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-xs transition-colors"
          >
            <Save className="w-4 h-4" />
            <span>Simpan Presensi</span>
          </button>
        </div>
      </div>

      {/* Control & Date Filter Bar */}
      <div className="bg-white rounded-3xl p-4 border border-slate-200 shadow-xs flex flex-col md:flex-row items-center justify-between gap-3 no-print">
        {/* Class selector */}
        <div className="flex items-center gap-1.5 w-full md:w-auto">
          <span className="text-xs font-bold text-slate-400 uppercase mr-1">Kelas:</span>
          {(['VII', 'VIII', 'IX'] as const).map(lvl => (
            <button
              key={lvl}
              onClick={() => handleClassChange(lvl)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                selectedClass === lvl
                  ? 'bg-emerald-700 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Kelas {lvl}
            </button>
          ))}
        </div>

        {/* Date Selector & Search */}
        <div className="flex flex-col sm:flex-row items-center gap-2 w-full md:w-auto">
          <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-xl w-full sm:w-auto">
            <span className="text-xs font-bold text-slate-500">Tanggal:</span>
            <input
              type="date"
              value={selectedDate}
              onChange={e => handleDateChange(e.target.value)}
              className="bg-transparent text-xs font-semibold text-slate-800 outline-hidden"
            />
          </div>

          <div className="relative w-full sm:w-56">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Cari siswa..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-xl text-xs outline-hidden focus:border-emerald-600"
            />
          </div>

          <button
            onClick={handleMarkAllHadir}
            className="px-3 py-1.5 bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border border-emerald-200 rounded-xl text-xs font-bold whitespace-nowrap transition-colors"
          >
            Semua Hadir
          </button>
        </div>
      </div>

      {/* Attendance Stats Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 no-print">
        <div className="bg-white p-4 rounded-2xl border border-slate-200 text-center">
          <p className="text-[10px] font-bold text-emerald-700 uppercase">Hadir</p>
          <p className="text-xl font-black text-emerald-800">{hadirCount}</p>
          <p className="text-[10px] text-slate-400">{percentage}% Kehadiran</p>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-slate-200 text-center">
          <p className="text-[10px] font-bold text-blue-700 uppercase">Sakit (S)</p>
          <p className="text-xl font-black text-blue-800">{sakitCount}</p>
          <p className="text-[10px] text-slate-400">Siswa</p>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-slate-200 text-center">
          <p className="text-[10px] font-bold text-amber-700 uppercase">Izin (I)</p>
          <p className="text-xl font-black text-amber-800">{izinCount}</p>
          <p className="text-[10px] text-slate-400">Siswa</p>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-slate-200 text-center">
          <p className="text-[10px] font-bold text-rose-700 uppercase">Alpa (A)</p>
          <p className="text-xl font-black text-rose-800">{alpaCount}</p>
          <p className="text-[10px] text-slate-400">Tanpa Keterangan</p>
        </div>

        <div className="bg-emerald-800 text-white p-4 rounded-2xl shadow-xs text-center col-span-2 sm:col-span-1">
          <p className="text-[10px] font-bold text-emerald-200 uppercase">Total Siswa</p>
          <p className="text-xl font-black">{totalInClass}</p>
          <p className="text-[10px] text-emerald-200">Kelas {selectedClass}</p>
        </div>
      </div>

      {/* Student List Table */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-emerald-600" />
            <h3 className="font-bold text-slate-800 text-sm">
              Daftar Presensi Siswa Kelas {selectedClass} ({filteredStudents.length} Siswa)
            </h3>
          </div>
          <span className="text-xs text-slate-400 font-medium">
            {formatDateIndo(selectedDate)}
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-500 font-bold border-b border-slate-100 uppercase tracking-wider text-[10px]">
              <tr>
                <th className="py-3 px-4 w-12 text-center">No</th>
                <th className="py-3 px-4">Nama Siswa</th>
                <th className="py-3 px-4 w-28">NIS</th>
                <th className="py-3 px-4 w-16 text-center">L/P</th>
                <th className="py-3 px-4 text-center">Status Kehadiran</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredStudents.map((std, idx) => {
                const status = currentAttendance[std.id] || 'hadir';

                return (
                  <tr key={std.id} className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-3 px-4 text-center text-slate-400 font-bold">{idx + 1}</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={std.avatar}
                          alt={std.name}
                          className="w-7 h-7 rounded-full object-cover border border-slate-200 shrink-0"
                        />
                        <span className="font-bold text-slate-900">{std.name}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-slate-500 font-mono">{std.nis}</td>
                    <td className="py-3 px-4 text-center font-bold text-slate-600">{std.gender}</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center justify-center gap-1.5">
                        {[
                          { id: 'hadir', label: 'Hadir (H)', color: 'emerald' },
                          { id: 'sakit', label: 'Sakit (S)', color: 'blue' },
                          { id: 'izin', label: 'Izin (I)', color: 'amber' },
                          { id: 'alpa', label: 'Alpa (A)', color: 'rose' }
                        ].map(st => {
                          const isSelected = status === st.id;
                          return (
                            <button
                              key={st.id}
                              type="button"
                              onClick={() => handleSetStatus(std.id, st.id as AttendStatus)}
                              className={`px-3 py-1.5 rounded-xl font-bold transition-all text-xs ${
                                isSelected
                                  ? st.id === 'hadir'
                                    ? 'bg-emerald-600 text-white shadow-xs'
                                    : st.id === 'sakit'
                                    ? 'bg-blue-600 text-white shadow-xs'
                                    : st.id === 'izin'
                                    ? 'bg-amber-600 text-white shadow-xs'
                                    : 'bg-rose-600 text-white shadow-xs'
                                  : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                              }`}
                            >
                              {st.label}
                            </button>
                          );
                        })}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
