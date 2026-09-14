import React, { useState, useEffect } from 'react';
import { StorageService } from '../../services/storageService';
import { SchoolProfile } from '../../types';
import { Building2, Mail, MapPin, Award, Edit3, Save, CheckCircle2 } from 'lucide-react';
import { useToast } from '../../components/common/Toast';

export const GuruProfilSekolahPage: React.FC = () => {
  const { showToast } = useToast();
  const [profile, setProfile] = useState<SchoolProfile>(StorageService.getSchoolProfile());
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<SchoolProfile>(profile);

  useEffect(() => {
    StorageService.init();
    const p = StorageService.getSchoolProfile();
    setProfile(p);
    setFormData(p);
  }, []);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    StorageService.updateSchoolProfile(formData);
    setProfile(formData);
    setIsEditing(false);
    showToast('Profil sekolah berhasil diperbarui.', 'success');
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Header Banner */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-3xl bg-emerald-600 flex items-center justify-center text-white font-black text-2xl shadow-md">
            SMP
          </div>
          <div>
            <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 uppercase tracking-wider">
              Data Resmi Satuan Pendidikan
            </span>
            <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mt-1">
              {profile.name}
            </h1>
            <p className="text-xs text-slate-500">
              NPSN: <strong>{profile.npsn}</strong> • Status: <strong>{profile.status}</strong> • Kab. Way Kanan, Lampung
            </p>
          </div>
        </div>

        <button
          onClick={() => {
            if (isEditing) {
              setFormData(profile);
              setIsEditing(false);
            } else {
              setIsEditing(true);
            }
          }}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
            isEditing
              ? 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs'
          }`}
        >
          <Edit3 className="w-4 h-4" />
          <span>{isEditing ? 'Batal Edit' : 'Edit Profil Sekolah'}</span>
        </button>
      </div>

      {isEditing ? (
        /* Edit Form */
        <form onSubmit={handleSave} className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
          <h3 className="text-base font-bold text-slate-800 border-b border-slate-100 pb-3">
            Formulir Pembaruan Data Satuan Pendidikan
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="space-y-1">
              <label className="font-bold text-slate-700">Nama Sekolah</label>
              <input
                type="text"
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-emerald-600 outline-hidden font-medium"
                required
              />
            </div>
            <div className="space-y-1">
              <label className="font-bold text-slate-700">NPSN</label>
              <input
                type="text"
                value={formData.npsn}
                onChange={e => setFormData({ ...formData, npsn: e.target.value })}
                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-emerald-600 outline-hidden font-medium"
                required
              />
            </div>
            <div className="space-y-1">
              <label className="font-bold text-slate-700">SK Pendirian</label>
              <input
                type="text"
                value={formData.skPendirian}
                onChange={e => setFormData({ ...formData, skPendirian: e.target.value })}
                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-emerald-600 outline-hidden font-medium"
              />
            </div>
            <div className="space-y-1">
              <label className="font-bold text-slate-700">SK Izin Operasional</label>
              <input
                type="text"
                value={formData.skOperasional}
                onChange={e => setFormData({ ...formData, skOperasional: e.target.value })}
                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-emerald-600 outline-hidden font-medium"
              />
            </div>
            <div className="space-y-1 md:col-span-2">
              <label className="font-bold text-slate-700">Alamat Lengkap</label>
              <input
                type="text"
                value={formData.address}
                onChange={e => setFormData({ ...formData, address: e.target.value })}
                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-emerald-600 outline-hidden font-medium"
                required
              />
            </div>
            <div className="space-y-1">
              <label className="font-bold text-slate-700">Email Sekolah</label>
              <input
                type="email"
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-emerald-600 outline-hidden font-medium"
                required
              />
            </div>
            <div className="space-y-1">
              <label className="font-bold text-slate-700">Slogan PAI Smart Learning</label>
              <input
                type="text"
                value={formData.slogan}
                onChange={e => setFormData({ ...formData, slogan: e.target.value })}
                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-emerald-600 outline-hidden font-medium"
                required
              />
            </div>
            <div className="space-y-1 md:col-span-2">
              <label className="font-bold text-slate-700">Visi Sekolah</label>
              <textarea
                rows={2}
                value={formData.visi}
                onChange={e => setFormData({ ...formData, visi: e.target.value })}
                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-emerald-600 outline-hidden font-medium"
              />
            </div>
          </div>

          <div className="flex justify-end gap-2 pt-4 border-t border-slate-100">
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className="px-5 py-2.5 bg-slate-100 text-slate-600 rounded-xl text-xs font-bold"
            >
              Batal
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-xs"
            >
              <Save className="w-4 h-4" />
              <span>Simpan Perubahan</span>
            </button>
          </div>
        </form>
      ) : (
        /* Read Only Detailed View */
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
            <div>
              <h3 className="text-base font-bold text-slate-900 mb-3">Identitas Satuan Pendidikan</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                  <p className="text-slate-400 font-semibold">Bentuk Pendidikan</p>
                  <p className="text-slate-800 font-bold text-sm mt-0.5">{profile.bentukPendidikan}</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                  <p className="text-slate-400 font-semibold">Status Kepemilikan</p>
                  <p className="text-slate-800 font-bold text-sm mt-0.5">{profile.statusKepemilikan}</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                  <p className="text-slate-400 font-semibold">SK Pendirian Sekolah</p>
                  <p className="text-slate-800 font-bold text-sm mt-0.5">{profile.skPendirian}</p>
                  <p className="text-[10px] text-slate-500">Tanggal: {profile.tanggalSkPendirian}</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                  <p className="text-slate-400 font-semibold">SK Izin Operasional</p>
                  <p className="text-slate-800 font-bold text-sm mt-0.5">{profile.skOperasional}</p>
                  <p className="text-[10px] text-slate-500">Tanggal: {profile.tanggalSkOperasional}</p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-base font-bold text-slate-900">Visi & Misi Sekolah</h3>
              <div className="p-4 bg-emerald-50/50 rounded-2xl border border-emerald-100 space-y-1">
                <p className="text-xs font-bold text-emerald-900 uppercase">Visi:</p>
                <p className="text-xs sm:text-sm text-slate-800 italic">"{profile.visi}"</p>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                <p className="text-xs font-bold text-slate-700 uppercase">Misi Satuan Pendidikan:</p>
                <ul className="space-y-1 text-xs text-slate-700">
                  {profile.misi?.map((m, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0 mt-1.5" />
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column: Kontak & Guru Pengampu */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-xs space-y-4">
              <h3 className="text-sm font-bold text-slate-900">Alamat & Narahubung</h3>
              <div className="space-y-3 text-xs text-slate-700">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <p className="leading-relaxed">{profile.address}</p>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-emerald-600 shrink-0" />
                  <p>{profile.email}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-xs space-y-3">
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 uppercase">
                Guru PAI & Budi Pekerti
              </span>
              <h3 className="text-base font-black text-slate-900">{profile.guruPaiName}</h3>
              <p className="text-xs text-slate-500">NIP: {profile.guruPaiNip}</p>
              <div className="p-3 bg-slate-50 rounded-2xl text-[11px] text-slate-600">
                Bertanggung jawab penuh atas penyelenggaraan KBM PAI Kelas VII, VIII, dan IX.
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
