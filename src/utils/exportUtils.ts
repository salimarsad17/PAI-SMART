/**
 * Export utilities for CSV, JSON, and printing reports
 */

export function exportToCSV(filename: string, rows: Record<string, unknown>[]): void {
  if (!rows || !rows.length) {
    alert('Tidak ada data untuk diekspor.');
    return;
  }

  const separator = ',';
  const keys = Object.keys(rows[0]);

  const csvContent =
    keys.map(k => `"${k}"`).join(separator) +
    '\n' +
    rows
      .map(row => {
        return keys
          .map(k => {
            const raw = row[k];
            let cell = raw === null || raw === undefined ? '' : String(raw);
            cell = cell.replace(/"/g, '""');
            return `"${cell}"`;
          })
          .join(separator);
      })
      .join('\n');

  downloadCsv(csvContent, filename.endsWith('.csv') ? filename : `${filename}.csv`);
}

export function downloadCsv(csvContent: string, filename: string): void {
  const blob = new Blob(['\uFEFF' + csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', filename.endsWith('.csv') ? filename : `${filename}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export function downloadJson(data: unknown, filename: string): void {
  const str = typeof data === 'string' ? data : JSON.stringify(data, null, 2);
  const blob = new Blob([str], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', filename.endsWith('.json') ? filename : `${filename}.json`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export function exportStudentsToCsv(students: any[]): string {
  const header = ['ID', 'NIS', 'Nama Siswa', 'Kelas', 'Jenis Kelamin', 'Rata-rata Nilai', 'XP', 'Level'];
  const rows = students.map(s => [
    `"${s.id || ''}"`,
    `"${s.nis || ''}"`,
    `"${s.name || ''}"`,
    `"${s.classId || ''}"`,
    `"${s.gender || ''}"`,
    `"${s.averageGrade ?? ''}"`,
    `"${s.xp ?? ''}"`,
    `"${s.level ?? ''}"`
  ]);
  return [header.join(','), ...rows.map(r => r.join(','))].join('\n');
}

export function exportGradesToCsv(grades: any[]): string {
  const header = ['ID Siswa', 'Judul Ujian/Materi', 'Kelas', 'Nilai', 'KKM', 'Status Ketuntasan', 'Tanggal'];
  const rows = grades.map(g => [
    `"${g.studentId || ''}"`,
    `"${(g.examTitle || g.title || '').replace(/"/g, '""')}"`,
    `"${g.gradeLevel || ''}"`,
    `"${g.score ?? ''}"`,
    `"${g.passingScore ?? 75}"`,
    `"${g.score >= (g.passingScore ?? 75) ? 'TUNTAS' : 'REMEDIAL'}"`,
    `"${g.submittedAt || g.completedAt || ''}"`
  ]);
  return [header.join(','), ...rows.map(r => r.join(','))].join('\n');
}

export function exportQuestionsToCsv(questions: any[]): string {
  const header = ['ID', 'Tingkat Kelas', 'Bab', 'Kategori', 'Tipe Soal', 'Tingkat Kesulitan', 'Pertanyaan', 'Kunci Jawaban', 'Skor'];
  const rows = questions.map(q => [
    `"${q.id || ''}"`,
    `"${q.gradeLevel || ''}"`,
    `"${q.chapter || ''}"`,
    `"${q.category || ''}"`,
    `"${q.type || ''}"`,
    `"${q.difficulty || ''}"`,
    `"${(q.questionText || '').replace(/"/g, '""')}"`,
    `"${String(q.correctAnswer || '').replace(/"/g, '""')}"`,
    `"${q.score ?? 10}"`
  ]);
  return [header.join(','), ...rows.map(r => r.join(','))].join('\n');
}

export function triggerPrint(): void {
  window.print();
}

export function formatDateIndo(dateStr?: string): string {
  if (!dateStr) return '-';
  try {
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return dateStr;
    return d.toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  } catch {
    return dateStr;
  }
}

export function getKetuntasanStatus(score: number, kkm = 75): 'TUNTAS' | 'BELUM TUNTAS' {
  return score >= kkm ? 'TUNTAS' : 'BELUM TUNTAS';
}

export function getLevelName(level: number): string {
  switch (level) {
    case 5:
      return 'Level 5 - Teladan';
    case 4:
      return 'Level 4 - Hebat';
    case 3:
      return 'Level 3 - Aktif';
    case 2:
      return 'Level 2 - Pembelajar';
    default:
      return 'Level 1 - Pemula';
  }
}
