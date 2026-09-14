import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { StorageService } from '../../services/storageService';
import { AuthService } from '../../services/authService';
import { Material, Question } from '../../types';
import { InteractiveQuiz } from '../../components/quiz/InteractiveQuiz';
import { AIAssistantModal } from '../../components/student/AIAssistantModal';
import {
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  Clock,
  Award,
  Sparkles,
  AlertCircle,
  Video,
  Play,
  FileQuestion,
  Share2
} from 'lucide-react';
import { useToast } from '../../components/common/Toast';
import confetti from 'canvas-confetti';

export const SiswaMateriDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { showToast } = useToast();
  const currentUser = AuthService.getCurrentUser();

  const [material, setMaterial] = useState<Material | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const [isAIModalOpen, setIsAIModalOpen] = useState(false);

  useEffect(() => {
    StorageService.init();
    const mat = StorageService.getMaterialById(id || '');
    if (mat) {
      setMaterial(mat);
      // Load questions for this material or related grade
      const allQ = StorageService.getQuestions();
      const matchedQ = allQ.filter(
        q => q.materialId === mat.id || q.gradeLevel === mat.gradeLevel
      );
      setQuestions(matchedQ.slice(0, 5));

      // Check completion
      if (currentUser) {
        const progress = StorageService.getStudentProgress().find(
          p => p.studentId === currentUser.id && p.materialId === mat.id
        );
        setIsCompleted(Boolean(progress?.isCompleted));
      }
    }
  }, [id, currentUser?.id]);

  if (!material) {
    return (
      <div className="text-center py-20 bg-white rounded-3xl border border-slate-200 space-y-3">
        <BookOpen className="w-12 h-12 text-slate-300 mx-auto" />
        <h3 className="text-base font-bold text-slate-700">Materi Tidak Ditemukan</h3>
        <p className="text-xs text-slate-400">Modul materi pembelajaran tidak ada atau telah dipindahkan.</p>
        <button
          onClick={() => navigate('/siswa/materi')}
          className="px-4 py-2 bg-emerald-600 text-white rounded-xl text-xs font-bold"
        >
          Kembali ke Daftar Materi
        </button>
      </div>
    );
  }

  const handleMarkCompleted = () => {
    if (!currentUser) return;
    StorageService.markMaterialCompleted(currentUser.id, material.id);
    setIsCompleted(true);
    try {
      confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
    } catch {
      // ignore
    }
    showToast(`Alhamdulillah! Materi selesai dipelajari (+${material.xpReward} XP)`, 'success');
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto animate-in fade-in duration-200">
      {/* Back and Navigation Bar */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-emerald-700 bg-white px-3 py-2 rounded-xl border border-slate-200 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali</span>
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsAIModalOpen(true)}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 text-xs font-bold border border-emerald-200 transition-colors"
          >
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span>Tanya AI tentang Bab Ini</span>
          </button>
        </div>
      </div>

      {/* Main Material Card Content */}
      <article className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
        {/* Header Hero */}
        <div className="p-6 sm:p-8 border-b border-slate-100 bg-gradient-to-br from-slate-50 to-emerald-50/30">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200 uppercase tracking-wider">
              {material.category}
            </span>
            <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
              Kelas {material.gradeLevel}
            </span>
            <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-500">
              Bab {material.chapter}
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {material.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 mt-4 text-xs text-slate-500 font-medium">
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4 text-slate-400" />
              <span>Estimasi {material.estimatedReadingMinutes} menit membaca</span>
            </span>
            <span className="flex items-center gap-1 text-amber-600 font-semibold">
              <Award className="w-4 h-4" />
              <span>Hadiah +{material.xpReward} XP</span>
            </span>
            {isCompleted && (
              <span className="flex items-center gap-1 text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded-md">
                <CheckCircle2 className="w-4 h-4" />
                <span>Telah Selesai</span>
              </span>
            )}
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-8 text-slate-800 leading-relaxed text-sm sm:text-base">
          {/* Tujuan Pembelajaran */}
          {material.learningObjectives?.length > 0 && (
            <section className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Tujuan Pembelajaran:
              </h3>
              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                {material.learningObjectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0 mt-2" />
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Ringkasan Intisari */}
          <section className="space-y-2">
            <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-emerald-600" />
              <span>Ringkasan Materi</span>
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed p-4 bg-emerald-50/50 rounded-2xl border border-emerald-100">
              {material.summary}
            </p>
          </section>

          {/* Dalil Al-Qur'an / Hadis (with Amiri Arabic font & disclaimer) */}
          {(material.quranVerse || material.hadith) && (
            <section className="space-y-3">
              <h3 className="text-base font-extrabold text-slate-900">
                Dalil Naqli (Al-Qur'an & Hadis)
              </h3>

              {material.quranVerse && (
                <div className="p-5 rounded-2xl bg-emerald-900 text-white space-y-3 shadow-md">
                  <div className="flex items-center justify-between text-xs text-emerald-200 border-b border-emerald-700/50 pb-2">
                    <span className="font-bold">Q.S. {material.quranVerse.surah}</span>
                    <span>Ayat {material.quranVerse.ayah}</span>
                  </div>
                  {/* Arabic text styled with Amiri font and RTL */}
                  <p className="font-arabic text-2xl sm:text-3xl text-right leading-loose py-2 text-emerald-50">
                    {material.quranVerse.arabicText}
                  </p>
                  <p className="text-xs sm:text-sm text-emerald-100/90 italic pt-1 border-t border-emerald-800">
                    <strong>Artinya:</strong> "{material.quranVerse.translation}"
                  </p>
                </div>
              )}

              {material.hadith && (
                <div className="p-5 rounded-2xl bg-slate-900 text-white space-y-3 shadow-md">
                  <div className="flex items-center justify-between text-xs text-slate-300 border-b border-slate-700 pb-2">
                    <span className="font-bold">Hadis Riwayat {material.hadith.narrator}</span>
                  </div>
                  <p className="font-arabic text-xl sm:text-2xl text-right leading-loose py-2 text-slate-50">
                    {material.hadith.arabicText}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-200 italic pt-1 border-t border-slate-800">
                    <strong>Artinya:</strong> "{material.hadith.translation}"
                  </p>
                </div>
              )}

              {/* Verification disclaimer mandate */}
              <div className="flex items-start gap-2 p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-800">
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <p>
                  <strong>Catatan Verifikasi:</strong> Verifikasi teks dan sumber dalil melalui mushaf resmi Kementerian Agama RI atau bimbingan Guru PAI di kelas.
                </p>
              </div>
            </section>
          )}

          {/* Full Content */}
          <section className="space-y-3">
            <h3 className="text-base font-extrabold text-slate-900">Uraian Materi Lengkap</h3>
            <div className="prose max-w-none text-slate-700 text-sm sm:text-base leading-relaxed whitespace-pre-line space-y-3">
              {material.fullContent}
            </div>
          </section>

          {/* Contoh Kehidupan Sehari-hari */}
          {material.dailyLifeExample && (
            <section className="p-5 rounded-2xl bg-blue-50/50 border border-blue-200 space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-blue-900">
                Penerapan dalam Kehidupan Sehari-hari (Budi Pekerti):
              </h3>
              <p className="text-xs sm:text-sm text-blue-950 leading-relaxed">
                {material.dailyLifeExample}
              </p>
            </section>
          )}

          {/* Video Embed Section */}
          {material.videoUrl && (
            <section className="space-y-3 pt-2">
              <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                <Video className="w-5 h-5 text-rose-600" />
                <span>Video Pendukung Pembelajaran</span>
              </h3>
              <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-slate-900">
                <iframe
                  src={material.videoUrl}
                  title={material.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </section>
          )}

          {/* Action Completion Button */}
          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-slate-800">
                {isCompleted ? 'Materi Selesai Dipelajari' : 'Selesaikan Pembelajaran'}
              </h4>
              <p className="text-xs text-slate-500">
                {isCompleted
                  ? 'Anda telah menandai materi ini dan memperoleh XP prestasi.'
                  : 'Klik tombol di bawah untuk mencatat progres belajarmu dan klaim XP!'}
              </p>
            </div>

            <div className="flex items-center gap-2">
              {!isCompleted ? (
                <button
                  onClick={handleMarkCompleted}
                  className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-xs flex items-center gap-2 transition-transform active:scale-95"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Tandai Selesai & Klaim XP</span>
                </button>
              ) : (
                <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-100 px-4 py-2 rounded-xl">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Telah Tuntas</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </article>

      {/* Interactive Quiz Toggle for this Material */}
      {questions.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between bg-white p-5 rounded-3xl border border-slate-200 shadow-xs">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-purple-50 text-purple-700">
                <FileQuestion className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-800">Uji Pemahaman Materi Ini</h3>
                <p className="text-xs text-slate-500">
                  Tersedia {questions.length} soal interaktif untuk menguji pemahaman bab ini.
                </p>
              </div>
            </div>

            <button
              onClick={() => setShowQuiz(!showQuiz)}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-purple-600 hover:bg-purple-700 text-white transition-colors"
            >
              {showQuiz ? 'Tutup Latihan' : 'Mulai Latihan'}
            </button>
          </div>

          {showQuiz && (
            <InteractiveQuiz
              questions={questions}
              title={`Latihan Soal: ${material.title}`}
              enableTimer={false}
              onClose={() => setShowQuiz(false)}
            />
          )}
        </div>
      )}

      {/* AI Assistant Modal for this Material */}
      <AIAssistantModal
        isOpen={isAIModalOpen}
        onClose={() => setIsAIModalOpen(false)}
      />
    </div>
  );
};
