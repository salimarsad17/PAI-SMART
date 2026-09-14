import React, { useState, useEffect } from 'react';
import { StorageService } from '../../services/storageService';
import { VideoItem, PAIKategori } from '../../types';
import {
  Video,
  Play,
  Plus,
  Edit2,
  Trash2,
  Search,
  Clock,
  Sparkles,
  ExternalLink,
  Eye,
  CheckCircle2
} from 'lucide-react';
import { useToast } from '../../components/common/Toast';
import { Modal } from '../../components/common/Modal';

export const GuruVideoPage: React.FC = () => {
  const { showToast } = useToast();
  const [videos, setVideos] = useState<VideoItem[]>([]);
  const [selectedClass, setSelectedClass] = useState<string>('Semua');
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [searchQuery, setSearchQuery] = useState('');

  // Modals
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [previewVideo, setPreviewVideo] = useState<VideoItem | null>(null);
  const [editingVideo, setEditingVideo] = useState<VideoItem | null>(null);

  // Form State
  const [formTitle, setFormTitle] = useState('');
  const [formCategory, setFormCategory] = useState<string>('Salat');
  const [formGrade, setFormGrade] = useState<'VII' | 'VIII' | 'IX'>('VII');
  const [formUrl, setFormUrl] = useState('');
  const [formDuration, setFormDuration] = useState('10:00');
  const [formDescription, setFormDescription] = useState('');
  const [formSummary, setFormSummary] = useState('');

  useEffect(() => {
    StorageService.init();
    setVideos(StorageService.getVideos());
  }, []);

  const categories = [
    'Semua',
    'Thaharah',
    'Salat',
    'Kisah Nabi',
    'Zakat',
    'Akhlak',
    'Sejarah Islam'
  ];

  const filteredVideos = videos.filter(v => {
    const matchClass = selectedClass === 'Semua' || v.gradeLevel === selectedClass;
    const matchCat = selectedCategory === 'Semua' || v.category === selectedCategory;
    const matchSearch =
      !searchQuery.trim() ||
      v.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchClass && matchCat && matchSearch;
  });

  const handleOpenAdd = () => {
    setEditingVideo(null);
    setFormTitle('');
    setFormCategory('Salat');
    setFormGrade('VII');
    setFormUrl('https://www.youtube.com/embed/dQw4w9WgXcQ');
    setFormDuration('10:00');
    setFormDescription('');
    setFormSummary('');
    setIsModalOpen(true);
  };

  const handleOpenEdit = (v: VideoItem) => {
    setEditingVideo(v);
    setFormTitle(v.title);
    setFormCategory(v.category);
    setFormGrade(v.gradeLevel as any);
    setFormUrl(v.videoUrl || v.youtubeUrl || '');
    setFormDuration(v.duration);
    setFormDescription(v.description);
    setFormSummary(v.summary || '');
    setIsModalOpen(true);
  };

  const handleDelete = (id: string, title: string) => {
    if (window.confirm(`Hapus video pembelajaran "${title}"?`)) {
      StorageService.deleteVideo(id);
      setVideos(prev => prev.filter(v => v.id !== id));
      if (previewVideo?.id === id) {
        setPreviewVideo(null);
      }
      showToast('Video pembelajaran berhasil dihapus.', 'success');
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formTitle.trim() || !formUrl.trim()) {
      showToast('Judul dan URL video wajib diisi.', 'error');
      return;
    }

    // Convert standard YouTube URL to embed if needed
    let processedUrl = formUrl.trim();
    if (processedUrl.includes('watch?v=')) {
      processedUrl = processedUrl.replace('watch?v=', 'embed/');
    } else if (processedUrl.includes('youtu.be/')) {
      processedUrl = processedUrl.replace('youtu.be/', 'www.youtube.com/embed/');
    }

    if (editingVideo) {
      const updated: VideoItem = {
        ...editingVideo,
        title: formTitle.trim(),
        category: formCategory,
        gradeLevel: formGrade,
        videoUrl: processedUrl,
        duration: formDuration.trim(),
        description: formDescription.trim(),
        summary: formSummary.trim()
      };
      StorageService.saveVideo(updated);
      setVideos(prev => prev.map(v => (v.id === updated.id ? updated : v)));
      if (previewVideo?.id === updated.id) {
        setPreviewVideo(updated);
      }
      showToast('Video pembelajaran berhasil diperbarui.', 'success');
    } else {
      const newVideo: VideoItem = {
        id: `video-${Date.now()}`,
        title: formTitle.trim(),
        category: formCategory,
        gradeLevel: formGrade,
        videoUrl: processedUrl,
        duration: formDuration.trim(),
        description: formDescription.trim(),
        summary: formSummary.trim(),
        thumbnail: 'https://images.unsplash.com/photo-1519817650390-64a93db51149?w=500&auto=format&fit=crop&q=60'
      };
      StorageService.saveVideo(newVideo);
      setVideos(prev => [newVideo, ...prev]);
      showToast('Video pembelajaran baru berhasil ditambahkan.', 'success');
    }
    setIsModalOpen(false);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Header */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-teal-50 text-teal-800 uppercase">
            Media Pembelajaran Digital
          </span>
          <h1 className="text-xl sm:text-2xl font-black text-slate-800 tracking-tight mt-1">
            Manajemen Video Pembelajaran PAI
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Kelola arsip konten video edukasi ibadah, kisah teladan, dan tafsir audio-visual untuk siswa.
          </p>
        </div>

        <button
          onClick={handleOpenAdd}
          className="flex items-center gap-1.5 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-xs transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>Tambah Video Baru</span>
        </button>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white rounded-3xl p-4 border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-3">
        {/* Class Filter */}
        <div className="flex items-center gap-1.5 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
          <span className="text-xs font-bold text-slate-400 uppercase mr-1">Tingkat:</span>
          {['Semua', 'VII', 'VIII', 'IX'].map(lvl => (
            <button
              key={lvl}
              onClick={() => setSelectedClass(lvl)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 ${
                selectedClass === lvl
                  ? 'bg-teal-700 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {lvl === 'Semua' ? 'Semua' : `Kelas ${lvl}`}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Cari judul atau topik video..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full pl-9.5 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-2xl text-xs focus:border-emerald-600 outline-hidden"
          />
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
              selectedCategory === cat
                ? 'bg-emerald-600 text-white'
                : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredVideos.map(video => (
          <div
            key={video.id}
            className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div className="relative aspect-video bg-slate-900 group">
              <iframe
                src={video.videoUrl}
                title={video.title}
                className="w-full h-full pointer-events-none"
              />
              <div
                onClick={() => setPreviewVideo(video)}
                className="absolute inset-0 bg-slate-900/40 hover:bg-slate-900/20 cursor-pointer flex items-center justify-center transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-white/90 text-emerald-800 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 ml-0.5 fill-current" />
                </div>
              </div>
              <span className="absolute bottom-2 right-2 bg-black/75 text-white text-[10px] font-bold px-2 py-0.5 rounded-md flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {video.duration}
              </span>
            </div>

            <div className="p-4 space-y-2.5 flex-1 flex flex-col justify-between">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-teal-50 text-teal-800">
                    {video.category}
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700">
                    Kelas {video.gradeLevel}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-slate-900 line-clamp-1">{video.title}</h3>
                <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                  {video.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => setPreviewVideo(video)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Putar Video</span>
                </button>

                <div className="flex items-center gap-1">
                  <button
                    onClick={() => handleOpenEdit(video)}
                    title="Edit Video"
                    className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(video.id, video.title)}
                    title="Hapus Video"
                    className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredVideos.length === 0 && (
        <div className="bg-white rounded-3xl p-12 text-center border border-slate-200">
          <Video className="w-12 h-12 text-slate-300 mx-auto mb-3" />
          <h3 className="font-bold text-slate-700 text-base">Tidak ada video yang sesuai</h3>
          <p className="text-xs text-slate-400 mt-1">
            Coba ubah kata kunci pencarian atau gunakan tombol "Tambah Video Baru".
          </p>
        </div>
      )}

      {/* Video Preview Modal */}
      <Modal
        isOpen={!!previewVideo}
        onClose={() => setPreviewVideo(null)}
        title={previewVideo?.title || 'Preview Video'}
      >
        {previewVideo && (
          <div className="space-y-4">
            <div className="aspect-video w-full rounded-2xl overflow-hidden bg-slate-950 shadow-inner">
              <iframe
                src={previewVideo.videoUrl}
                title={previewVideo.title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-teal-100 text-teal-800">
                  {previewVideo.category}
                </span>
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                  Kelas {previewVideo.gradeLevel}
                </span>
                <span className="text-xs text-slate-400 font-medium flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {previewVideo.duration}
                </span>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">{previewVideo.description}</p>

              {previewVideo.summary && (
                <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-100 text-xs text-slate-700 space-y-1">
                  <p className="font-bold text-emerald-900 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Ringkasan Pembelajaran:</span>
                  </p>
                  <p className="leading-relaxed">{previewVideo.summary}</p>
                </div>
              )}
            </div>
          </div>
        )}
      </Modal>

      {/* Add / Edit Video Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editingVideo ? 'Edit Video Pembelajaran' : 'Tambah Video Pembelajaran Baru'}
      >
        <form onSubmit={handleSave} className="space-y-4">
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-700">Judul Video</label>
            <input
              type="text"
              placeholder="Contoh: Tata Cara Salat Berjama'ah dan Salat Makmum Masbuq"
              value={formTitle}
              onChange={e => setFormTitle(e.target.value)}
              className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs outline-hidden focus:border-emerald-600"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700">Kategori</label>
              <select
                value={formCategory}
                onChange={e => setFormCategory(e.target.value)}
                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs outline-hidden"
              >
                {categories.filter(c => c !== 'Semua').map(c => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700">Tingkat Kelas</label>
              <select
                value={formGrade}
                onChange={e => setFormGrade(e.target.value as any)}
                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs outline-hidden"
              >
                <option value="VII">Kelas VII</option>
                <option value="VIII">Kelas VIII</option>
                <option value="IX">Kelas IX</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div className="col-span-2 space-y-1">
              <label className="text-xs font-bold text-slate-700">URL Video (YouTube Embed/Watch)</label>
              <input
                type="text"
                placeholder="https://www.youtube.com/watch?v=..."
                value={formUrl}
                onChange={e => setFormUrl(e.target.value)}
                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs outline-hidden focus:border-emerald-600"
                required
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700">Durasi</label>
              <input
                type="text"
                placeholder="Contoh: 12:45"
                value={formDuration}
                onChange={e => setFormDuration(e.target.value)}
                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs outline-hidden"
                required
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-700">Deskripsi Singkat</label>
            <textarea
              rows={2}
              placeholder="Jelaskan ringkasan materi video untuk pengantar siswa..."
              value={formDescription}
              onChange={e => setFormDescription(e.target.value)}
              className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs outline-hidden"
              required
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-700">Ringkasan Poin Pembelajaran (Opsional)</label>
            <textarea
              rows={2}
              placeholder="Catatan poin penting yang wajib dicatat siswa..."
              value={formSummary}
              onChange={e => setFormSummary(e.target.value)}
              className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs outline-hidden"
            />
          </div>

          <div className="pt-3 border-t border-slate-100 flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-xl text-xs font-bold text-slate-600"
            >
              Batal
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 rounded-xl text-xs font-bold text-white shadow-xs"
            >
              Simpan Video
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
