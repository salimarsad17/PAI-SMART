import React, { useState } from 'react';
import { StorageService } from '../../services/storageService';
import { VideoItem } from '../../types';
import { Video, Play, BookOpen, Clock, Filter, Sparkles, CheckCircle } from 'lucide-react';

export const SiswaVideoPage: React.FC = () => {
  const [videos, setVideos] = useState<VideoItem[]>(() =>
    StorageService.getItem('pai_videos', [])
  );
  const [selectedClass, setSelectedClass] = useState<string>('Semua');
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(videos[0] || null);

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
    return matchClass && matchCat;
  });

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-teal-900 to-emerald-900 rounded-3xl p-6 sm:p-8 text-white shadow-md">
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-800/80 text-emerald-200 text-xs font-bold border border-emerald-700/60 w-fit mb-2">
          <Video className="w-3.5 h-3.5 text-emerald-300" />
          <span>Media Edukasi Visual PAI</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
          Video Pembelajaran PAI & Budi Pekerti
        </h1>
        <p className="text-xs sm:text-sm text-teal-100 mt-1 max-w-xl">
          Visualisasikan tata cara ibadah wudu, salat fardu/jama'ah, serta hikmah sejarah Islam melalui animasi dan dokumenter edukatif.
        </p>
      </div>

      {/* Featured Video Player */}
      {activeVideo && (
        <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm space-y-4">
          <div className="aspect-video w-full rounded-2xl overflow-hidden bg-slate-950 shadow-inner">
            <iframe
              src={activeVideo.videoUrl}
              title={activeVideo.title}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 uppercase">
                {activeVideo.category}
              </span>
              <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                Kelas {activeVideo.gradeLevel}
              </span>
              <span className="text-[10px] font-medium text-slate-400 flex items-center gap-1">
                <Clock className="w-3 h-3" />
                <span>{activeVideo.duration}</span>
              </span>
            </div>

            <h2 className="text-xl font-bold text-slate-900">{activeVideo.title}</h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {activeVideo.description}
            </p>

            {activeVideo.summary && (
              <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100 text-xs text-slate-700 space-y-1 mt-3">
                <p className="font-bold text-emerald-900 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Ringkasan Isi Video Pembelajaran:</span>
                </p>
                <p className="leading-relaxed">{activeVideo.summary}</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Filter and Video Grid */}
      <div className="space-y-4">
        <div className="bg-white p-4 rounded-3xl border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-3">
          {/* Class Filter */}
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-1">Tingkat:</span>
            {['Semua', 'VII', 'VIII', 'IX'].map(lvl => (
              <button
                key={lvl}
                onClick={() => setSelectedClass(lvl)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  selectedClass === lvl
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {lvl === 'Semua' ? 'Semua' : `Kelas ${lvl}`}
              </button>
            ))}
          </div>

          {/* Category Filter */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar w-full sm:w-auto">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
                  selectedCategory === cat
                    ? 'bg-emerald-800 text-white font-bold'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredVideos.map(vid => {
            const isCurrent = activeVideo?.id === vid.id;
            return (
              <div
                key={vid.id}
                onClick={() => {
                  setActiveVideo(vid);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`bg-white rounded-3xl border p-4 shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between ${
                  isCurrent ? 'border-emerald-600 ring-2 ring-emerald-500/20' : 'border-slate-200'
                }`}
              >
                <div className="space-y-2.5">
                  <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-800 group">
                    <img
                      src={vid.thumbnailUrl}
                      alt={vid.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute inset-0 bg-slate-900/40 flex items-center justify-center group-hover:bg-slate-900/20 transition-colors">
                      <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-lg">
                        <Play className="w-5 h-5 ml-0.5 fill-current" />
                      </div>
                    </div>
                    <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-slate-900/80 text-[10px] text-white font-bold">
                      {vid.duration}
                    </span>
                  </div>

                  <div>
                    <div className="flex items-center justify-between text-[10px] font-bold text-slate-400 mb-1">
                      <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                        {vid.category}
                      </span>
                      <span>Kelas {vid.gradeLevel}</span>
                    </div>
                    <h3 className="text-sm font-bold text-slate-800 line-clamp-2 leading-snug">
                      {vid.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-slate-500 line-clamp-2 mt-2 leading-relaxed">
                  {vid.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
