import React from 'react';
import { Certificate } from '../../types';
import { Printer, X, Award, CheckCircle2 } from 'lucide-react';
import { triggerPrint, formatDateIndo } from '../../utils/exportUtils';
import confetti from 'canvas-confetti';

export const CertificateView: React.FC<{
  certificate: Certificate;
  onClose?: () => void;
}> = ({ certificate, onClose }) => {
  const handlePrint = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // ignore
    }
    triggerPrint();
  };

  return (
    <div className="space-y-4">
      {/* Control Buttons (hidden on print) */}
      <div className="no-print flex items-center justify-between pb-2">
        <div className="flex items-center gap-2">
          <Award className="w-5 h-5 text-emerald-600" />
          <span className="text-sm font-bold text-slate-800">Sertifikat Kelulusan Modul PAI</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-xs transition-colors"
          >
            <Printer className="w-4 h-4" />
            <span>Cetak Sertifikat (A4)</span>
          </button>
          {onClose && (
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-xl"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>

      {/* Printable Certificate Canvas (Standard A4 design) */}
      <div className="w-full bg-white border-8 border-double border-emerald-800 p-8 sm:p-12 rounded-2xl shadow-lg relative overflow-hidden text-center text-slate-800 my-auto">
        {/* Decorative corner ornaments */}
        <div className="absolute top-3 left-3 w-12 h-12 border-t-4 border-l-4 border-amber-600" />
        <div className="absolute top-3 right-3 w-12 h-12 border-t-4 border-r-4 border-amber-600" />
        <div className="absolute bottom-3 left-3 w-12 h-12 border-b-4 border-l-4 border-amber-600" />
        <div className="absolute bottom-3 right-3 w-12 h-12 border-b-4 border-r-4 border-amber-600" />

        {/* Top Header */}
        <div className="space-y-1 mb-6">
          <div className="inline-flex items-center justify-center p-3 rounded-full bg-emerald-50 text-emerald-800 mb-2">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <p className="text-xs uppercase font-bold tracking-widest text-emerald-800">
            KEMENTERIAN PENDIDIKAN DAN KEBUDAYAAN
          </p>
          <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
            {certificate.schoolName}
          </h1>
          <p className="text-xs text-slate-500 font-medium">
            Kecamatan Rebang Tangkas, Kabupaten Way Kanan, Provinsi Lampung
          </p>
          <div className="w-32 h-0.5 bg-amber-600 mx-auto mt-2" />
        </div>

        {/* Title */}
        <div className="my-6 space-y-1">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-emerald-950 tracking-wider">
            SERTIFIKAT PENGHARGAAN
          </h2>
          <p className="text-xs text-slate-500">Nomor: {certificate.certificateNumber}</p>
        </div>

        {/* Recipient details */}
        <div className="space-y-3 my-6 max-w-xl mx-auto">
          <p className="text-xs text-slate-600">Diberikan dengan bangga kepada:</p>
          <h3 className="text-xl sm:text-2xl font-black text-emerald-800 tracking-tight underline decoration-amber-500 decoration-2 underline-offset-8">
            {certificate.studentName}
          </h3>
          <p className="text-xs font-semibold text-slate-700">
            Peserta Didik {certificate.gradeLevel}
          </p>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-2">
            Telah menyelesaikan seluruh rangkaian kegiatan pembelajaran, tugas mandiri, serta asesmen sumatif pada:
          </p>
          <p className="text-sm sm:text-base font-bold text-slate-900 bg-emerald-50/60 p-2.5 rounded-xl border border-emerald-100">
            "{certificate.moduleTitle}"
          </p>
          <p className="text-xs text-slate-600">
            Dengan predikat capaian nilai: <span className="font-extrabold text-emerald-800 text-base">{certificate.score}</span> / 100 (Sangat Memuaskan / Tuntas).
          </p>
        </div>

        {/* Signatures */}
        <div className="grid grid-cols-2 gap-8 pt-8 mt-6 border-t border-slate-200 text-xs">
          <div>
            <p className="text-slate-500">Mengetahui,</p>
            <p className="font-bold text-slate-800">Kepala Sekolah</p>
            <div className="h-16 flex items-end justify-center">
              <div className="w-32 border-b border-dashed border-slate-400" />
            </div>
            <p className="font-bold text-slate-900 mt-1">Drs. H. Mulyadi, M.Pd.</p>
            <p className="text-[10px] text-slate-500">NIP. 19680315 199303 1 004</p>
          </div>

          <div>
            <p className="text-slate-500">Rebang Tangkas, {formatDateIndo(certificate.issueDate)}</p>
            <p className="font-bold text-slate-800">Guru PAI dan Budi Pekerti</p>
            <div className="h-16 flex items-end justify-center">
              <div className="w-32 border-b border-dashed border-slate-400" />
            </div>
            <p className="font-bold text-slate-900 mt-1">{certificate.teacherName}</p>
            <p className="text-[10px] text-slate-500">NIP. 19820512 200801 1 015</p>
          </div>
        </div>
      </div>
    </div>
  );
};
