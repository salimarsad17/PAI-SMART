import React, { useState } from 'react';
import { Sparkles, Send, Bot, User, AlertCircle, RefreshCw, BookOpen } from 'lucide-react';
import { Modal } from '../common/Modal';
import { StorageService } from '../../services/storageService';
import { HADITH_ITEMS, QURAN_SURAHS } from '../../data/quranData';

interface ChatMessage {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  timestamp: string;
  hasDalilWarning?: boolean;
}

const PRESET_QUESTIONS = [
  'Jelaskan kandungan Q.S. An-Nisa ayat 136 tentang iman.',
  'Sebutkan 5 ciri mukmin hakiki dalam Q.S. Al-Anfal 2-4.',
  'Jelaskan hadis tentang pentingnya dan manisnya iman.',
  'Apa perbedaan hukum Alif Lam Qomariyah dan Syamsiyah?',
  'Tampilkan mufradat perkata Q.S. An-Nisa 136 dan Al-Anfal 2-4.',
  'Bagaimana tata cara wudu yang benar?'
];

export const AIAssistantModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
}> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'ai',
      text: 'Assalamu\'alaikum! Saya AI PAI Assistant UPT SMPN 2 Rebang Tangkas. Saya siap membantumu memahami materi Pendidikan Agama Islam dan Budi Pekerti (Kelas VII, VIII, IX). Ada yang ingin kamu tanyakan hari ini?',
      timestamp: 'Baru saja'
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const generateAnswer = (question: string): { text: string; hasWarning: boolean } => {
    const q = question.toLowerCase();
    const materials = StorageService.getMaterials();

    // Check matching material
    const matched = materials.find(m =>
      q.includes(m.title.toLowerCase()) ||
      m.title.toLowerCase().split(' ').some(w => w.length > 4 && q.includes(w))
    );

    if (q.includes('an-nisa') || q.includes('annisa') || q.includes('136')) {
      return {
        text: `**Q.S. An-Nisā’ [4] Ayat 136 (Pentingnya Rukun Iman)**:\n\n*Lafal*:\nيٰٓاَيُّهَا الَّذِيْنَ اٰمَنُوْٓا اٰمِنُوْا بِاللّٰهِ وَرَسُوْلِهٖ وَالْكِتٰبِ الَّذِيْ نَزَّلَ عَلٰى رَسُوْلِهٖ وَالْكِتٰبِ الَّذِيْٓ اَنْزَلَ مِنْ قَبْلُ ۗوَمَنْ يَّكْفُرْ بِاللّٰهِ وَمَلٰۤىِٕكَتِهٖ وَكُتُبِهٖ وَرُسُلِهٖ وَالْيَوْمِ الْاٰخِرِ فَقَدْ ضَلَّ ضَلٰلًاۢ بَعِيْدًا\n\n*Artinya*:\n"Wahai orang-orang yang beriman! Tetaplah beriman kepada Allah dan Rasul-Nya dan kepada Kitab (Al-Qur'an) yang diturunkan kepada Rasul-Nya serta kitab yang diturunkan sebelumnya. Barangsiapa ingkar kepada Allah, malaikat-malaikat-Nya, kitab-kitab-Nya, rasul-rasul-Nya, dan hari kemudian, maka sungguh, orang itu telah tersesat sangat jauh."\n\n**Kandungan Inti**:\n1. Perintah memperbarui dan mengistiqamahkan rukun iman agar meresap ke dalam hati dan perbuatan.\n2. Kewajiban mengimani Al-Qur'an dan kitab-kitab Allah yang turun sebelumnya.\n3. Peringatan keras: Mengingkari satu saja rukun iman akan terjerumus ke dalam kesesatan yang nyata.`,
        hasWarning: true
      };
    }

    if (q.includes('al-anfal') || q.includes('anfal') || q.includes('mukmin hakiki') || q.includes('2-4')) {
      return {
        text: `**Q.S. Al-Anfāl [8] Ayat 2-4 (5 Karakteristik Mukmin Sejati)**:\n\n1. **Gemetar Hati**: Hati bergetar penuh rasa takzim dan khauf saat nama Allah disebut (*wajilat qulūbuhum*).\n2. **Iman Bertambah**: Keimanan bertambah kuat saat menyimak lantunan ayat Al-Qur'an (*zādathum īmānā*).\n3. **Tawakal Bulat**: Berserah diri dan optimis kepada Allah setelah berikhtiar (*wa 'alā rabbihim yatawakkalūn*).\n4. **Mendirikan Salat**: Istiqamah menjaga salat fardu tepat waktu dengan khusyuk (*yuqīmūnaṣ-ṣalāh*).\n5. **Dermawan / Gemar Berinfak**: Menginfakkan sebagian rezeki di jalan kebajikan (*yunfiqūn*).\n\n**Balasan Allah (Ayat 4)**:\nMemperoleh kedudukan mulia (*darajāt*), ampunan dosa (*maghfirah*), dan rezeki mulia tanpa hisab (*rizqun karīm*) di surga.`,
        hasWarning: true
      };
    }

    if (q.includes('alif lam') || q.includes('qomariyah') || q.includes('syamsiyah')) {
      return {
        text: `**Hukum Bacaan Alif Lam / Al-Ta'rif (Materi Tajwid Kelas VII)**:\n\n1. **Alif Lam Qomariyah (Idzhar Qomariyah)**:\n- Ciri: Huruf lam berharakat sukun (ـلْ), huruf sesudahnya TIDAK bertasydid.\n- Cara baca: Dibaca jelas (Izhar).\n- 14 Huruf: ا ب غ ح ج ك و خ ف ع ق ي م هـ (Rumus: *abghi hajjaka wakhaf 'aqīmah*).\n- Contoh: الْكِتٰبِ (Al-kitāb), الْمُؤْمِنُونَ (Al-mu'minūn), الْيَوْمِ (Al-yaum).\n\n2. **Alif Lam Syamsiyah (Idgham Syamsiyah)**:\n- Ciri: Huruf lam tidak berharakat sukun, huruf sesudahnya BERTASYDID (ـّ).\n- Cara baca: Bunyi 'L' dileburkan ke huruf syamsiyah sesudahnya.\n- 14 Huruf: ط ث ص ر ت ض ذ ن د س ظ ز ش ل.\n- Contoh: الصَّلَاةَ (Aṣ-ṣalāh), الرَّسُولُ (Ar-rasūl), الَّذِينَ (Allażīna).`,
        hasWarning: false
      };
    }

    if (q.includes('mufradat') || q.includes('arti perkata') || q.includes('kosa kata')) {
      return {
        text: `**Glosarium Mufradat PAI Kelas VII Semester 1**:\n\n**Q.S. An-Nisā’: 136**:\n- يٰٓاَيُّهَا : Wahai\n- الَّذِيْنَ اٰمَنُوْٓا : Orang-orang yang telah beriman\n- اٰمِنُوْا : Tetaplah beriman / perkokohlah imanmu!\n- نَزَّلَ : Menurunkan secara berangsur-angsur\n- ضَلٰلًاۢ بَعِيْدًا : Kesesatan yang sangat jauh\n\n**Q.S. Al-Anfāl: 2-4**:\n- وَجِلَتْ قُلُوْبُهُمْ : Gemetar bergetar hati mereka\n- زَادَتْهُمْ إِيْمَانًا : Bertambah kuat keimanan mereka\n- يَتَوَكَّلُوْنَ : Mereka bertawakal berserah diri\n- الْمُؤْمِنُوْنَ حَقًّا : Orang-orang yang benar-benar beriman sejati\n- رِزْقٌ كَرِيْمٌ : Rezeki yang mulia tiada terputus`,
        hasWarning: true
      };
    }

    if (q.includes('pentingnya iman') || (q.includes('hadis') && q.includes('iman')) || (q.includes('hadits') && q.includes('iman')) || q.includes('manisnya iman')) {
      return {
        text: `**Hadis-Hadis Nabi SAW tentang Pentingnya Iman**:\n\n1. **Hadis Jibril (HR. Muslim No. 8)**: Menegaskan 6 rukun iman (Allah, Malaikat, Kitab, Rasul, Hari Akhir, Qadha & Qadar) sebagai rukun pokok akidah Islam.\n2. **Tiga Kunci Manisnya Iman / Halāwatul Īmān (HR. Bukhari No. 16 & Muslim No. 43)**:\n- Mencintai Allah dan Rasul melebihi segalanya.\n- Mencintai sesama manusia semata-mata karena Allah.\n- Benci kembali pada kekafiran sebagaimana benci dilemparkan ke dalam api neraka.\n3. **Cabang-Cabang Iman (HR. Muslim No. 35)**: Iman memiliki 70 lebih cabang, puncaknya kalimat *Lā ilāha illallāh*, terendahnya menyingkirkan duri/sampah dari jalanan sekolah/umum, dan rasa malu adalah cabang keimanan.\n\n**Tiga Dimensi Keimanan**: Tashdiq bil Qalbi (hati), Iqrar bil Lisani (ucapan), dan 'Amal bil Arkani (amalan anggota badan).`,
        hasWarning: true
      };
    }

    if (q.includes('iman kepada allah')) {
      return {
        text: `**Pengertian Iman kepada Allah SWT**:\n\nSecara bahasa, iman berarti percaya atau yakin. Secara syariat, iman kepada Allah adalah meyakini dalam hati, mengucapkan dengan lisan, dan mengamalkan dengan anggota badan bahwa Allah SWT adalah satu-satunya Tuhan Pencipta alam semesta (Tauhid Rububiyyah dan Uluhiyyah).\n\n**Contoh Kehidupan Sehari-hari Siswa SMP**:\nKetika kamu sendirian di kamar atau saat ujian, kamu tetap jujur tidak menyontek karena yakin Allah Maha Melihat (*Al-Bashir*) dan Maha Mengetahui (*Al-'Alim*).\n\n**Dalil Terkait**: Q.S. Al-Ikhlas: 1-4 dan Al-Baqarah: 255 (Ayat Kursi).`,
        hasWarning: true
      };
    }

    if (q.includes('wudu') || q.includes('wudhu')) {
      return {
        text: `**Tata Cara Wudu yang Benar Sesuai Syariat**:\n\n1. Membaca basmalah dan niat bersuci dari hadas kecil.\n2. Membasuh kedua telapak tangan hingga sela-sela jari.\n3. Berkumur-kumur dan istinsyaq (menghirup air ke hidung lalu mengeluarkannya) sebanyak 3 kali.\n4. Membasuh seluruh muka (termasuk dahi hingga dagu) sebanyak 3 kali.\n5. Membasuh kedua tangan sampai siku sebanyak 3 kali (dahulukan kanan).\n6. Mengusap sebagian kepala/rambut dan kedua telinga.\n7. Membasuh kedua kaki sampai mata kaki sebanyak 3 kali secara sempurna.\n8. Berdoa setelah wudu dengan tertib.\n\n**Contoh Kehidupan Sehari-hari**:\nBerwudu dengan tertib dan hemat air di tempat wudu musholla sekolah sebelum salat Zhuhur berjamaah.`,
        hasWarning: true
      };
    }

    if (q.includes('salat') || q.includes('shalat')) {
      return {
        text: `**Hikmah Salat Fardu dan Salat Berjamaah**:\n\n1. **Mencegah Perbuatan Keji dan Mungkar**: Menjaga hati dan pikiran kita tetap bersih.\n2. **Mendapatkan Pahala Berlipat**: Salat berjamaah berlipat 27 derajat dibanding salat sendirian.\n3. **Melatih Kedisiplinan Waktu**: Melatih siswa tepat waktu dan teratur.\n4. **Mempererat Ukhuwah**: Merapatkan shaf menumbuhkan rasa persaudaraan dan kesetaraan antarsesama kawan.\n\n**Referensi**: Q.S. Al-'Ankabut ayat 45.`,
        hasWarning: true
      };
    }

    if (q.includes('wali songo') || q.includes('walisongo')) {
      return {
        text: `**Sejarah dan Metode Dakwah Wali Songo**:\n\nWali Songo adalah sembilan ulama besar penyebar Islam di Pulau Jawa pada abad ke-15 hingga 16 Masehi. Mereka berdakwah dengan metode damai, santun, dan memadukan ajaran Islam dengan kearifan budaya Nusantara (akulturasi).\n\n**Contohnya**:\nSunan Kalijaga menggunakan media kesenian wayang kulit dan tembang Ilir-Ilir, sedangkan Sunan Kudus menghormati adat setempat dengan tidak menyembelih sapi sebagai bentuk toleransi sosial.\n\n**Hikmah bagi Siswa**:\nMenghormati keragaman adat istiadat dan menyebarkan kebaikan dengan perkataan yang santun.`,
        hasWarning: false
      };
    }

    if (q.includes('zakat')) {
      return {
        text: `**Perbedaan Zakat Fitrah dan Zakat Mal**:\n\n1. **Zakat Fitrah**: Zakat diri untuk menyucikan jiwa yang dikeluarkan pada bulan Ramadan sebelum salat Idulfitri sebesar 2,5 kg beras/makanan pokok per jiwa.\n2. **Zakat Mal**: Zakat harta kekayaan (emas, tabungan, pertanian, perniagaan) yang telah mencapai batas minimal (nisab) dan tersimpan selama 1 tahun (haul) sebesar 2,5%.\n\n**Penerima Zakat (Mustahik)**: Diberikan kepada 8 asnaf (golongan), terutama fakir dan miskin.\n\n**Hikmah**:\nMenumbuhkan empati sosial dan membersihkan harta dari hak orang lain.`,
        hasWarning: true
      };
    }

    // Default intelligent educational response
    if (matched) {
      return {
        text: `Mengenai materi **${matched.title}** (Kelas ${matched.gradeLevel} - ${matched.category}):\n\n${matched.summary}\n\n**Tujuan Pembelajaran**:\n- ${matched.learningObjectives.join('\n- ')}\n\n**Penerapan Sehari-hari**: ${matched.dailyLifeExample}\n\n**Referensi**: ${matched.references.join(', ')}.`,
        hasWarning: Boolean(matched.quranVerse || matched.hadith)
      };
    }

    return {
      text: `Pertanyaan yang bagus tentang *"${question}"*.\n\nDalam pembelajaran Pendidikan Agama Islam, hal ini berkaitan dengan pengamalan akhlakul karimah dan pemahaman nilai-nilai keislaman. Pelajarilah modul yang relevan di menu Materi, atau tanyakan kembali topik spesifik seperti iman, thaharah, akhlak mulia, atau sejarah Islam!`,
      hasWarning: false
    };
  };

  const handleSend = (textToSend?: string) => {
    const text = textToSend || inputText;
    if (!text.trim()) return;

    const userMsg: ChatMessage = {
      id: Math.random().toString(),
      sender: 'user',
      text,
      timestamp: 'Baru saja'
    };

    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    setTimeout(() => {
      const { text: answerText, hasWarning } = generateAnswer(text);
      const aiMsg: ChatMessage = {
        id: Math.random().toString(),
        sender: 'ai',
        text: answerText,
        timestamp: 'Baru saja',
        hasDalilWarning: hasWarning
      };
      setMessages(prev => [...prev, aiMsg]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="AI PAI Assistant - UPT SMPN 2 Rebang Tangkas"
      subtitle="Sahabat Belajar Pendidikan Agama Islam Interaktif"
      maxWidth="2xl"
    >
      <div className="flex flex-col h-[520px]">
        {/* Verification banner disclaimer mandated by prompt */}
        <div className="p-3 bg-amber-50 border border-amber-200 rounded-2xl flex items-start gap-2.5 text-xs text-amber-900 mb-3 shrink-0">
          <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <p>
            <strong>Catatan Penting:</strong> Jawaban AI disusun untuk membantu pemahaman siswa tingkat SMP.
            Verifikasi teks dalil Al-Qur'an dan hadis selalu melalui guru PAI atau mushaf resmi tepercaya.
          </p>
        </div>

        {/* Chat Stream */}
        <div className="flex-1 overflow-y-auto space-y-3.5 pr-1">
          {messages.map(msg => {
            const isAI = msg.sender === 'ai';
            return (
              <div
                key={msg.id}
                className={`flex gap-3 ${isAI ? 'items-start' : 'items-start flex-row-reverse'}`}
              >
                <div
                  className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                    isAI
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'bg-slate-700 text-white'
                  }`}
                >
                  {isAI ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
                </div>

                <div className={`max-w-[85%] space-y-1.5`}>
                  <div
                    className={`p-4 rounded-2xl text-xs sm:text-sm leading-relaxed whitespace-pre-line shadow-2xs ${
                      isAI
                        ? 'bg-slate-50 border border-slate-200 text-slate-800 rounded-tl-xs'
                        : 'bg-emerald-600 text-white rounded-tr-xs'
                    }`}
                  >
                    {msg.text}
                  </div>

                  {msg.hasDalilWarning && (
                    <p className="text-[11px] text-slate-400 italic px-1 flex items-center gap-1">
                      <BookOpen className="w-3 h-3 text-emerald-600" />
                      <span>Verifikasi teks dan sumber melalui sumber resmi/tepercaya.</span>
                    </p>
                  )}
                </div>
              </div>
            );
          })}

          {isTyping && (
            <div className="flex items-center gap-2 text-xs text-slate-400 pl-11">
              <RefreshCw className="w-3.5 h-3.5 animate-spin text-emerald-600" />
              <span>AI PAI Assistant sedang menyusun penjelasan...</span>
            </div>
          )}
        </div>

        {/* Preset chips */}
        <div className="pt-2 pb-2 overflow-x-auto flex gap-1.5 no-scrollbar shrink-0">
          {PRESET_QUESTIONS.map((q, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(q)}
              className="text-[11px] whitespace-nowrap px-2.5 py-1 bg-slate-100 hover:bg-emerald-100 hover:text-emerald-800 text-slate-600 rounded-full font-medium transition-colors shrink-0"
            >
              {q}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="pt-2 border-t border-slate-100 flex items-center gap-2 shrink-0">
          <input
            type="text"
            value={inputText}
            onChange={e => setInputText(e.target.value)}
            onKeyDown={e => {
              if (e.key === 'Enter') handleSend();
            }}
            placeholder="Tanyakan materi PAI (misal: wudu, salat, Wali Songo, zakat)..."
            className="flex-1 px-4 py-2.5 bg-slate-100 rounded-2xl text-xs sm:text-sm outline-none border border-transparent focus:border-emerald-500 focus:bg-white transition-all"
          />
          <button
            onClick={() => handleSend()}
            disabled={!inputText.trim()}
            className="p-2.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 disabled:opacity-40 text-white shadow-xs transition-transform active:scale-95"
            title="Kirim Pertanyaan"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </Modal>
  );
};
