/**
 * Ruang Tumbuh - Prototype JavaScript Application
 * Integrasi Prinsip QS. An-Nahl: 125 pada Platform Web Edukasi & Bantuan KTIQ 2026
 * Clean, Modern, & Soothing White Aesthetic
 */

// ==========================================
// 1. DATA MASTER ARTIKEL PUSAT EDUKASI
// ==========================================
const articlesData = [
  {
    id: "art-1",
    title: "Memahami Istilah & Konsep Dasar: Menepis Prasangka dengan Fakta Ilmiah",
    category: "dasar",
    categoryLabel: "Konsep & Sains",
    excerpt: "Panduan literasi istilah umum seputar orientasi seksual, identitas, dan klarifikasi ilmiah dari WHO dan APA guna meluruskan stereotipe yang keliru.",
    date: "10 Oktober 2026",
    reviewer: "Dr. Laila M., M.Psi. (Penelaah Psikologi)",
    readTime: "4 menit baca",
    content: `
      <p class="text-slate-700 dark:text-slate-300 font-medium">Dalam mendiskusikan topik seksualitas dan psikologi, penggunaan istilah yang akurat dan berbasis sains adalah wujud dari kebijaksanaan berbasis ilmu pengetahuan (Hikmah).</p>
      
      <h4 class="font-bold text-slate-900 dark:text-white text-base mt-4">1. Klarifikasi Konsep & Istilah</h4>
      <p>Sering kali terjadi kerancuan antara orientasi seksual, identitas gender, dan ekspresi sosial. Orientasi seksual merujuk pada pola ketertarikan emosional dan romantis, sedangkan identitas gender merujuk pada persepsi batin seseorang mengenai gendernya.</p>
      
      <h4 class="font-bold text-slate-900 dark:text-white text-base mt-4">2. Pandangan Organisasi Kesehatan Dunia (WHO & APA)</h4>
      <p>Sejak tahun 1990 oleh WHO dan 1973 oleh American Psychological Association (APA), orientasi seksual non-heteroseksual tidak lagi diklasifikasikan sebagai gangguan jiwa (mental disorder). Tekanan psikologis yang dialami sering kali bersumber dari <em>minority stress</em>—yakni stigma sosial, perundungan, dan penolakan lingkungan, bukan karena orientasi itu sendiri.</p>

      <h4 class="font-bold text-slate-900 dark:text-white text-base mt-4">3. Bahaya Terapi Konversi</h4>
      <p>Organisasi medis internasional secara tegas menentang segala bentuk "terapi konversi" atau praktik pemaksaan perubahan orientasi karena terbukti secara klinis menyebabkan trauma mendalam, depresi berat, hingga peningkatan risiko bunuh diri. Pendekatan yang etis adalah memberikan konseling penerimaan diri, regulasi emosi, dan ruang aman.</p>
    `,
    references: [
      "American Psychological Association. (2020). Guidelines for Psychological Practice with Sexual Minority Persons.",
      "World Health Organization (WHO). (2019). ICD-11: Mental, behavioural or neurodevelopmental disorders.",
      "Himpunan Psikologi Indonesia (HIMPSI). Pedoman Layanan Konseling Tanpa Stigma."
    ]
  },
  {
    id: "art-2",
    title: "Prinsip Komunikasi yang Santun: Membangun Dialog Tanpa Stigma",
    category: "islam",
    categoryLabel: "Adab & Etika Sosial",
    excerpt: "Kajian mendalam penerapan tiga pilar komunikasi etis: Kebijaksanaan (Hikmah), Nasihat Santun (Mau'izhah Hasanah), dan Dialog Terbuka (Mujadalah bil Ahsan).",
    date: "8 Oktober 2026",
    reviewer: "Ust. Ahmad Fauzan, M.Ag. (Penelaah Studi Sosial-Keagamaan)",
    readTime: "5 menit baca",
    content: `
      <p class="text-slate-700 dark:text-slate-300 font-medium">Etika komunikasi universal menuntut kita menyampaikan kebaikan kepada sesama tanpa menghinakan martabat kemanusiaan atau menyebarkan kebencian.</p>

      <h4 class="font-bold text-slate-900 dark:text-white text-base mt-4">1. Al-Hikmah (Kebijaksanaan Kontekstual)</h4>
      <p>Hikmah berarti meletakkan sesuatu tepat pada tempatnya. Dalam konteks platform Ruang Tumbuh, hikmah diterjemahkan sebagai penyampaian informasi yang berdasarkan fakta yang valid, memahami kondisi psikologis lawan bicara, serta tidak tergesa-gesa menghakimi keadaan seseorang.</p>

      <h4 class="font-bold text-slate-900 dark:text-white text-base mt-4">2. Al-Mau'izhah Al-Hasanah (Nasihat yang Menyejukkan)</h4>
      <p>Nasihat yang baik adalah perkataan yang masuk ke hati dengan kelembutan, tidak menguliti aib di ruang publik, dan menumbuhkan motivasi kebajikan. Sangat penting menghindari perundungan dan kata-kata kasar yang membuat seseorang tertekan.</p>

      <h4 class="font-bold text-slate-900 dark:text-white text-base mt-4">3. Al-Mujadalah bil Ahsan (Diskusi Terbaik)</h4>
      <p>Bila terjadi pertukaran pikiran, dialog yang sehat mensyaratkan sikap saling menghormati pendapat, mendengarkan dengan empati, dan tidak memaksakan kehendak dengan intimidasi verbal.</p>
    `,
    references: [
      "Al-Qur'an Al-Karim, Surah An-Nahl [16]: 125 (Kementerian Agama RI).",
      "Shihab, M. Quraish. (2002). Tafsir Al-Mishbah: Nilai dan Etika Dialog Kemanusiaan.",
      "Pedoman Bermuamalah Melalui Media Sosial Tanpa Ujaran Kebencian."
    ]
  },
  {
    id: "art-3",
    title: "Stres Minoritas & Kesehatan Mental: Mengurai Beban Batin yang Terpendam",
    category: "mental",
    categoryLabel: "Kesehatan Mental",
    excerpt: "Mengenali tanda-tanda kelelahan psikologis akibat tekanan sosial, rasa bersalah berlebih, dan strategi regulasi emosi untuk menjaga kestabilan jiwa.",
    date: "5 Oktober 2026",
    reviewer: "Rian Pratama, S.Psi., M.A. (Praktisi Kesehatan Jiwa)",
    readTime: "4 menit baca",
    content: `
      <p>Banyak pemuda yang menghadapi tekanan identitas atau konflik nilai keluarga mengalami tekanan psikologis kronis yang dikenal sebagai <em>Minority Stress Theory</em> (Ilan Meyer).</p>

      <h4 class="font-bold text-slate-900 dark:text-white text-base mt-4">1. Gejala Kelelahan Emosional</h4>
      <ul class="list-disc pl-5 space-y-1">
        <li>Perasaan cemas terus-menerus dan takut ditolak oleh keluarga atau teman.</li>
        <li>Rasa bersalah berlebihan yang berujung pada membenci diri sendiri.</li>
        <li>Isolasi sosial dan enggan bercerita karena takut dihakimi atau disebarkan rahasianya.</li>
      </ul>

      <h4 class="font-bold text-slate-900 dark:text-white text-base mt-4">2. Kapan Harus Menghubungi Tenaga Profesional?</h4>
      <p>Jika perasaan sedih telah berlangsung lebih dari dua minggu berturut-turut, mengganggu pola tidur, menyebabkan hilangnya minat hidup, atau memicu dorongan menyakiti diri, itu adalah sinyal darurat untuk berkonsultasi ke psikolog klinis atau dokter spesialis kedokteran jiwa.</p>

      <h4 class="font-bold text-slate-900 dark:text-white text-base mt-4">3. Langkah Awal Regulasi Diri</h4>
      <p>Lakukan teknik pernapasan lambat, temukan setidaknya satu orang dewasa tepercaya yang mau mendengarkan tanpa menghakimi, dan hindari konsumsi konten media sosial yang toxic atau provokatif.</p>
    `,
    references: [
      "Meyer, I. H. (2003). Prejudice, social stress, and mental health in sexual minority populations. Psychological Bulletin.",
      "Kementerian Kesehatan RI. (2022). Buku Saku Deteksi Dini Masalah Kesehatan Jiwa Dewasa Muda.",
      "WHO World Mental Health Report: Transforming mental health for all (2022)."
    ]
  },
  {
    id: "art-4",
    title: "Membangun Relasi yang Sehat: Menjaga Batasan Diri yang Bermartabat",
    category: "relasi",
    categoryLabel: "Relasi Sehat & Batasan",
    excerpt: "Prinsip komunikasi asertif, persetujuan sadar (consent), serta deteksi dini relasi manipulatif atau berbahaya di lingkungan pergaulan.",
    date: "3 Oktober 2026",
    reviewer: "Siti Rahmawati, S.Sos. (Konselor Hubungan Sosial)",
    readTime: "3 menit baca",
    content: `
      <p>Hubungan yang sehat—baik pertemanan, keluarga, maupun personal—selalu dibangun di atas fondasi rasa saling menghargai, kejujuran, dan batasan pribadi yang jelas.</p>

      <h4 class="font-bold text-slate-900 dark:text-white text-base mt-4">Ciri Hubungan yang Sehat vs Hubungan Toksik</h4>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 my-3">
        <div class="p-3 bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-900 rounded-xl text-xs">
          <strong class="text-teal-800 dark:text-teal-300 block mb-1">Ciri Hubungan Sehat:</strong>
          Pendapatmu didengar, privasimu dihormati, kamu bebas mengatakan "tidak", dan tidak ada ancaman pemerasan atau pemaksaan.
        </div>
        <div class="p-3 bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900 rounded-xl text-xs">
          <strong class="text-rose-800 dark:text-rose-300 block mb-1">Tanda Hubungan Toksik:</strong>
          Gaslighting (membuat ragu atas kenyataan), ancaman membocorkan rahasia (blackmail), kontrol posesif, dan pelecehan verbal.
        </div>
      </div>

      <h4 class="font-bold text-slate-900 dark:text-white text-base mt-4">Cara Memasang Batasan Diri Secara Asertif</h4>
      <p>Katakan dengan tegas dan santun: "Aku merasa tidak nyaman jika kamu berbicara atau bertindak seperti itu, tolong hargai ruang pribadiku." Menetapkan batasan adalah hak asasi setiap individu demi keselamatan mental dan fisik.</p>
    `,
    references: [
      "Hall, K. (2018). The Importance of Boundaries in Mental Health & Interpersonal Relationships.",
      "Komisi Nasional Anti Kekerasan terhadap Perempuan. Panduan Deteksi Kekerasan Siber.",
      "UU Tindak Pidana Kekerasan Seksual (UU TPKS No. 12 Tahun 2022)."
    ]
  },
  {
    id: "art-5",
    title: "Literasi Digital & Perlindungan Privasi: Merespons Cyberbullying",
    category: "digital",
    categoryLabel: "Keamanan Digital",
    excerpt: "Panduan aman bermedia sosial, menjaga data pribadi dari ancaman doxxing, menyaring disinformasi, dan langkah melapor perundungan siber.",
    date: "1 Oktober 2026",
    reviewer: "Farhan Hakim, M.Kom. (Pakar Keamanan Digital)",
    readTime: "4 menit baca",
    content: `
      <p>Ruang digital sering kali menjadi tempat mencari informasi sekaligus medan perundungan (cyberbullying) jika tidak dibekali literasi yang kuat.</p>

      <h4 class="font-bold text-slate-900 dark:text-white text-base mt-4">1. Bahaya Doxxing & Pencurian Data</h4>
      <p>Doxxing adalah penyebaran informasi pribadi seseorang (identitas, alamat, riwayat chat) ke publik tanpa izin dengan maksud mempermalukan atau mengancam keselamatan. Jangan pernah membagikan identitas lengkap atau dokumen sensitif kepada orang yang baru dikenal di internet.</p>

      <h4 class="font-bold text-slate-900 dark:text-white text-base mt-4">2. Sikap saat Menghadapi Cyberbullying</h4>
      <ul class="list-disc pl-5 space-y-1">
        <li><strong>Dokumentasikan bukti:</strong> Tangkap layar (screenshot) seluruh ujaran kebencian atau ancaman.</li>
        <li><strong>Jangan terpancing berdebat agresif:</strong> Hal ini hanya akan memperbesar algoritma penyebaran.</li>
        <li><strong>Blokir dan laporkan akun:</strong> Gunakan fitur report platform sosial atau aduan konten resmi.</li>
        <li><strong>Cari bantuan circle aman:</strong> Jangan menanggung kecemasan sendirian.</li>
      </ul>
    `,
    references: [
      "UNESCO. (2021). Digital Citizenship Education and Online Safety Guidelines.",
      "Kementerian Komunikasi dan Informatika (Kominfo). Literasi Digital Indonesia: Aman Bermedia Digital.",
      "SAFEnet (Southeast Asia Freedom of Expression Network). Panduan Keamanan Digital Remaja."
    ]
  },
  {
    id: "art-6",
    title: "Etika Sosial & Martabat Insani: Menjaga Kedamaian Bermasyarakat",
    category: "islam",
    categoryLabel: "Adab & Etika Sosial",
    excerpt: "Membangun persaudaraan kemanusiaan universal dan adab bermasyarakat di tengah perbedaan pandangan moral.",
    date: "28 September 2026",
    reviewer: "Dewi Nuraini, M.Ag. (Studi Akhlak & Sosiologi)",
    readTime: "3 menit baca",
    content: `
      <p>Prinsip kemanusiaan universal menuntut setiap insan saling menjaga rasa aman satu sama lain. Perbedaan diciptakan agar manusia saling mengenal dengan baik, bukan saling merendahkan atau menzalimi.</p>

      <h4 class="font-bold text-slate-900 dark:text-white text-base mt-4">Adab Menjaga Martabat Orang Lain</h4>
      <p>Etika yang luhur melarang kita mencela fisik, mencaci maki, atau memanggil orang lain dengan panggilan yang buruk. Setiap individu berhak mendapatkan rasa aman dari kezaliman lisan dan tindakan kita.</p>

      <blockquote class="italic text-slate-600 dark:text-slate-400 border-l-4 border-teal-500 pl-3.5 py-1 my-3">
        "Orang yang berakhlak mulia adalah mereka yang membuat orang lain merasa aman dari gangguan lisan dan tangannya."
      </blockquote>
    `,
    references: [
      "Pedoman Etika Pergaulan dan Keadaban Publik Indonesia.",
      "Kementerian Agama RI. Moderasi Beragama dalam Ruang Publik Digital.",
      "Studi Psikologi Sosial tentang Empati dan Harmoni Kehidupan Bermasyarakat."
    ]
  }
];

// ==========================================
// 2. DATA PROGRAM 7 HARI (RUANG BERTUMBUH)
// ==========================================
const growthDaysData = [
  {
    day: 1,
    title: "Mengenali Keadaan Diri",
    subtitle: "Tuliskan satu hal yang sedang dipikirkan dan satu hal yang ingin dipahami.",
    badge: "Refleksi Batin",
    description: "Ambil jeda sejenak tanpa terburu-buru. Duduklah di tempat tenang, rasakan tubuhmu, dan renungkan apa yang saat ini paling menguras energimu secara jujur.",
    actionPrompt: "Tuliskan satu kalimat di Catatan Pribadi tentang perasaanmu hari ini."
  },
  {
    day: 2,
    title: "Mengelola Stres & Latihan Napas 4-7-8",
    subtitle: "Coba latihan napas perlahan atau jeda singkat; hentikan bila membuat tidak nyaman.",
    badge: "Kebugaran Saraf",
    description: "Ketika pikiran kacau, sistem saraf tubuh merespons dengan ketegangan. Latihan napas terarah 4 detik tarik napas, 7 detik tahan, dan 8 detik hembuskan terbukti meredakan adrenalin.",
    actionPrompt: "Gunakan tombol 'Mulai Latihan' di atas minimal 2 siklus pernapasan."
  },
  {
    day: 3,
    title: "Menjaga Kebutuhan Dasar Fisik",
    subtitle: "Tinjau pola istirahat, makan, aktivitas, dan waktu layar tanpa menyalahkan diri.",
    badge: "Kebutuhan Raga",
    description: "Sering kali stres emosi memburuk karena tubuh kurang tidur, asupan nutrisi rendah, atau paparan layar media sosial berlebihan hingga larut malam.",
    actionPrompt: "Kurangi waktu menatap layar gawai 30 menit sebelum tidur malam ini."
  },
  {
    day: 4,
    title: "Membangun Relasi yang Sehat",
    subtitle: "Identifikasi ciri komunikasi yang membuatmu merasa dihargai dan aman.",
    badge: "Batasan Diri",
    description: "Kenali apakah relasimu memberi rasa aman atau justru memicu rasa bersalah terus-menerus. Kamu berhak menjauh dari lingkungan yang merendahkan martabatmu.",
    actionPrompt: "Pelajari artikel 'Membangun Relasi yang Sehat' di Pusat Edukasi."
  },
  {
    day: 5,
    title: "Memetakan Lingkaran Dukungan Sosial",
    subtitle: "Pikirkan satu orang tepercaya yang dapat diajak berbicara jika dibutuhkan.",
    badge: "Lingkar Aman",
    description: "Kamu tidak harus menyelesaikan semua beban sendirian. Identifikasi 1 sosok: bisa teman dekat, guru yang bijak, konselor kampus, atau hotline profesional.",
    actionPrompt: "Simpan nomor kontak tepercaya atau hotline 119 di ponselmu."
  },
  {
    day: 6,
    title: "Refleksi Nilai & Kebaikan Pribadi",
    subtitle: "Renungkan nilai luhur yang ingin kamu pegang dan terapkan secara bijaksana.",
    badge: "Ketenangan Diri",
    description: "Renungkan bagaimana prinsip kejujuran, kasih sayang, dan kebijaksanaan dapat kamu hadirkan bagi dirimu sendiri terlebih dahulu.",
    actionPrompt: "Ucapkan satu kalimat afirmasi kasih sayang untuk dirimu sendiri hari ini."
  },
  {
    day: 7,
    title: "Menentukan Tujuan Kecil Mingguan",
    subtitle: "Pilih satu langkah realistis dan terjangkau untuk minggu berikutnya.",
    badge: "Langkah Nyata",
    description: "Pertumbuhan bukan tentang lompatan besar yang melelahkan, melainkan langkah kecil harian yang konsisten dilakukan dengan hati yang damai.",
    actionPrompt: "Tetapkan 1 target sederhana untuk merawat kesehatan mentalmu minggu depan."
  }
];

// ==========================================
// 3. DATA KUIS REFLEKSI (KENALI DIRIMU)
// ==========================================
const quizQuestions = [
  {
    question: "Apa yang paling menggambarkan kebutuhan atau perasaanmu saat ini?",
    options: [
      { text: "Saya sedang mencari informasi & edukasi ilmiah yang terpercaya", type: "edukasi" },
      { text: "Saya merasa cemas, tertekan, atau ingin belajar meredakan stres fisik", type: "stres" },
      { text: "Saya merasa bimbang dengan nilai pribadi, moral, atau hubungan sosial", type: "nilai" },
      { text: "Saya membutuhkan seseorang yang aman untuk diajak berbicara secara rahasia", type: "konseling" }
    ]
  },
  {
    question: "Ketika memikirkan hal tersebut, apa tantangan terbesar yang kamu hadapi?",
    options: [
      { text: "Terlalu banyak informasi yang menghakimi dan simpang siur di internet", type: "edukasi" },
      { text: "Tubuh dan pikiran terasa tegang, susah tidur, atau sering merasa cemas", type: "stres" },
      { text: "Khawatir dipermalukan atau diasingkan oleh lingkungan pergaulan/keluarga", type: "konseling" },
      { text: "Ingin membangun kebiasaan dan keseimbangan hidup yang lebih teratur", type: "bertumbuh" }
    ]
  },
  {
    question: "Bentuk langkah apa yang terasa paling nyaman dan aman untuk kamu coba hari ini?",
    options: [
      { text: "Membaca artikel singkat yang santun dan berbasis bukti ilmiah", type: "edukasi" },
      { text: "Mencoba latihan relaksasi napas dan memulihkan ritme harian", type: "bertumbuh" },
      { text: "Melihat informasi pilihan layanan konseling psikologis dan bimbingan", type: "konseling" },
      { text: "Menuliskan catatan pribadi untuk merapikan isi pikiran", type: "jurnal" }
    ]
  }
];

let quizCurrentStep = 0;
let quizAnswers = [];
let currentArticleTitle = "";
let breathingInterval = null;
let isBreathingActive = false;

// ==========================================
// 4. INISIALISASI HALAMAN
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  if (window.lucide) {
    lucide.createIcons();
  }

  // Check saved theme
  const savedTheme = localStorage.getItem("rt_theme");
  if (savedTheme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  // Check saved font size
  const savedFontSize = localStorage.getItem("rt_fontsize") || "normal";
  changeFontSize(savedFontSize, false);

  // Load journal from storage
  const savedJournal = localStorage.getItem("rt_journal");
  const journalInput = document.getElementById("user-journal");
  if (journalInput && savedJournal) {
    journalInput.value = savedJournal;
  }
  if (journalInput) {
    journalInput.addEventListener("input", () => {
      localStorage.setItem("rt_journal", journalInput.value);
      const statusEl = document.getElementById("journal-status");
      statusEl.classList.remove("hidden");
      setTimeout(() => statusEl.classList.add("hidden"), 2000);
    });
  }

  // Render initial components
  renderQuizStep();
  renderArticles(articlesData);
  renderGrowthJourney();
  updateGrowthCounter();

  // Set default active tab
  switchTab("beranda");
});

// ==========================================
// 5. SISTEM TAB & NAVIGASI (BERSIH TANPA ANGKA)
// ==========================================
function switchTab(tabId) {
  const tabs = ["beranda", "refleksi", "edukasi", "bertumbuh", "konseling", "tentang"];
  
  tabs.forEach(id => {
    const pane = document.getElementById(`tab-${id}`);
    const navBtn = document.getElementById(`nav-${id}`);
    
    if (pane) {
      if (id === tabId) {
        pane.classList.remove("hidden");
      } else {
        pane.classList.add("hidden");
      }
    }

    if (navBtn) {
      if (id === tabId) {
        navBtn.classList.add("active");
      } else {
        navBtn.classList.remove("active");
      }
    }
  });

  window.scrollTo({ top: 0, behavior: "smooth" });
  if (window.lucide) lucide.createIcons();
}

function toggleMobileMenu() {
  const menu = document.getElementById("mobile-menu");
  menu.classList.toggle("hidden");
}

// ==========================================
// 6. KENALI DIRIMU (REFLEKSI STEP-BY-STEP)
// ==========================================
function renderQuizStep() {
  const container = document.getElementById("quiz-question-container");
  const progressBar = document.getElementById("quiz-progress-bar");
  const stepIndicator = document.getElementById("quiz-step-indicator");
  const percentageIndicator = document.getElementById("quiz-percentage");
  const resultContainer = document.getElementById("quiz-result-container");

  if (!container) return;

  if (quizCurrentStep >= quizQuestions.length) {
    container.classList.add("hidden");
    resultContainer.classList.remove("hidden");
    renderQuizResult();
    return;
  }

  container.classList.remove("hidden");
  resultContainer.classList.add("hidden");

  const q = quizQuestions[quizCurrentStep];
  const progressPercent = Math.round(((quizCurrentStep + 1) / quizQuestions.length) * 100);
  
  if (progressBar) progressBar.style.width = `${progressPercent}%`;
  if (stepIndicator) stepIndicator.innerText = `Langkah ${quizCurrentStep + 1} dari ${quizQuestions.length}`;
  if (percentageIndicator) percentageIndicator.innerText = `${progressPercent}%`;

  container.innerHTML = `
    <div class="space-y-4">
      <h3 class="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug">
        ${q.question}
      </h3>
      <div class="space-y-2.5">
        ${q.options.map((opt) => `
          <button onclick="handleQuizAnswer('${opt.type}')" class="w-full text-left p-3.5 sm:p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-teal-500 hover:bg-teal-50/40 dark:hover:bg-teal-950/30 text-xs sm:text-sm text-slate-700 dark:text-slate-200 transition-all flex items-center justify-between group">
            <span class="pr-2 font-medium">${opt.text}</span>
            <i data-lucide="chevron-right" class="w-4 h-4 text-slate-400 group-hover:text-teal-600 group-hover:translate-x-1 transition-all"></i>
          </button>
        `).join("")}
      </div>
    </div>
  `;

  if (window.lucide) lucide.createIcons();
}

function handleQuizAnswer(type) {
  quizAnswers.push(type);
  quizCurrentStep++;
  renderQuizStep();
}

function renderQuizResult() {
  const resultText = document.getElementById("quiz-result-text");
  const actionsContainer = document.getElementById("quiz-result-actions");

  const counts = {};
  quizAnswers.forEach(ans => counts[ans] = (counts[ans] || 0) + 1);
  const primaryNeed = Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b, "edukasi");

  let summary = "";
  let actionsHtml = "";

  if (primaryNeed === "stres" || primaryNeed === "bertumbuh") {
    summary = "Berdasarkan refleksimu, tubuh dan pikiranmu tampak sedang mengalami ketegangan. Memulihkan energi fisik dan melatih ritme napas adalah prioritas terbaik saat ini.";
    actionsHtml = `
      <button onclick="switchTab('bertumbuh')" class="p-3 rounded-xl bg-teal-600 text-white font-bold text-xs hover:bg-teal-500 transition-colors flex items-center justify-center gap-2">
        <i data-lucide="activity" class="w-4 h-4"></i> Latihan Napas di Ruang Bertumbuh
      </button>
      <button onclick="switchTab('edukasi')" class="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold text-xs hover:bg-slate-200 transition-colors flex items-center justify-center gap-2">
        <i data-lucide="book-open" class="w-4 h-4"></i> Baca Artikel Kesehatan Mental
      </button>
    `;
  } else if (primaryNeed === "konseling") {
    summary = "Kamu mengindikasikan kebutuhan akan ruang berbicara yang aman dan bebas dari penghakiman. Mengetahui bahwa kamu tidak sendirian dan memahami pilihan rujukan dapat meringankan bebanmu.";
    actionsHtml = `
      <button onclick="switchTab('konseling')" class="p-3 rounded-xl bg-rose-600 text-white font-bold text-xs hover:bg-rose-500 transition-colors flex items-center justify-center gap-2">
        <i data-lucide="heart-handshake" class="w-4 h-4"></i> Lihat Pilihan Bantuan Konseling
      </button>
      <button onclick="openEmergencyModal()" class="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold text-xs hover:bg-slate-200 transition-colors flex items-center justify-center gap-2">
        <i data-lucide="phone-call" class="w-4 h-4"></i> Nomor Bantuan Krisis 119
      </button>
    `;
  } else {
    summary = "Kamu sedang berikhtiar mencari pemahaman yang jelas, berimbang, dan berlandaskan fakta ilmiah serta etika kemanusiaan. Membaca materi terstruktur adalah langkah yang sangat baik.";
    actionsHtml = `
      <button onclick="switchTab('edukasi')" class="p-3 rounded-xl bg-teal-600 text-white font-bold text-xs hover:bg-teal-500 transition-colors flex items-center justify-center gap-2">
        <i data-lucide="book-open" class="w-4 h-4"></i> Buka Pusat Edukasi
      </button>
      <button onclick="switchTab('bertumbuh')" class="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold text-xs hover:bg-slate-200 transition-colors flex items-center justify-center gap-2">
        <i data-lucide="sparkles" class="w-4 h-4"></i> Lihat Program 7 Hari
      </button>
    `;
  }

  resultText.innerText = summary;
  actionsContainer.innerHTML = actionsHtml;
  if (window.lucide) lucide.createIcons();
}

function resetQuiz() {
  quizCurrentStep = 0;
  quizAnswers = [];
  renderQuizStep();
}

function clearJournal() {
  const journalInput = document.getElementById("user-journal");
  if (journalInput && confirm("Apakah kamu yakin ingin mengosongkan catatan refleksi pribadimu?")) {
    journalInput.value = "";
    localStorage.removeItem("rt_journal");
    showToast("Catatan jurnal telah dihapus.");
  }
}

// ==========================================
// 7. PUSAT EDUKASI (SEARCH, FILTER, MODAL)
// ==========================================
let currentCategoryFilter = "all";

function renderArticles(list) {
  const grid = document.getElementById("articles-grid");
  const emptyState = document.getElementById("articles-empty");

  if (!grid) return;

  if (list.length === 0) {
    grid.innerHTML = "";
    emptyState.classList.remove("hidden");
    return;
  }

  emptyState.classList.add("hidden");
  grid.innerHTML = list.map(art => `
    <article class="wellness-card p-5 sm:p-6 rounded-2xl flex flex-col justify-between">
      <div class="space-y-3">
        <div class="flex items-center justify-between text-[11px] text-slate-400">
          <span class="px-2.5 py-0.5 rounded-full font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
            ${art.categoryLabel}
          </span>
          <span>${art.readTime}</span>
        </div>
        <h3 class="text-base font-bold text-slate-900 dark:text-white leading-snug hover:text-teal-600 transition-colors cursor-pointer" onclick="openArticleModal('${art.id}')">
          ${art.title}
        </h3>
        <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-3">
          ${art.excerpt}
        </p>
      </div>
      <div class="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
        <span class="text-[11px] text-slate-400">${art.date}</span>
        <button onclick="openArticleModal('${art.id}')" class="font-bold text-teal-600 dark:text-teal-400 hover:underline flex items-center gap-1">
          Baca Selengkapnya <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
        </button>
      </div>
    </article>
  `).join("");

  if (window.lucide) lucide.createIcons();
}

function filterCategory(cat) {
  currentCategoryFilter = cat;
  
  document.querySelectorAll(".cat-pill").forEach(pill => {
    if (pill.dataset.category === cat) {
      pill.classList.remove("text-slate-600", "dark:text-slate-400");
      pill.classList.add("bg-teal-600", "text-white", "shadow-sm");
    } else {
      pill.classList.remove("bg-teal-600", "text-white", "shadow-sm");
      pill.classList.add("text-slate-600", "dark:text-slate-400");
    }
  });

  applyFilters();
}

function handleArticleSearch() {
  applyFilters();
}

function applyFilters() {
  const query = (document.getElementById("article-search").value || "").toLowerCase().trim();
  
  const filtered = articlesData.filter(art => {
    const matchCat = currentCategoryFilter === "all" || art.category === currentCategoryFilter;
    const matchSearch = !query || art.title.toLowerCase().includes(query) || art.excerpt.toLowerCase().includes(query);
    return matchCat && matchSearch;
  });

  renderArticles(filtered);
}

function resetArticleFilter() {
  document.getElementById("article-search").value = "";
  filterCategory("all");
}

function openArticleModal(articleId) {
  const art = articlesData.find(a => a.id === articleId);
  if (!art) return;

  currentArticleTitle = art.title;
  document.getElementById("modal-category").innerText = art.categoryLabel;
  document.getElementById("modal-title").innerText = art.title;
  document.getElementById("modal-date").innerText = `Tanggal: ${art.date}`;
  document.getElementById("modal-reviewer").innerText = art.reviewer;
  document.getElementById("modal-content").innerHTML = art.content;
  
  document.getElementById("modal-references").innerHTML = art.references.map(ref => `
    <div class="leading-relaxed mb-1">• ${ref}</div>
  `).join("");

  document.getElementById("article-modal").classList.remove("hidden");
  if (window.lucide) lucide.createIcons();
}

function closeArticleModal() {
  document.getElementById("article-modal").classList.add("hidden");
}

// ==========================================
// 8. RUANG BERTUMBUH & LATIHAN NAPAS SOOTHING
// ==========================================
function renderGrowthJourney() {
  const listEl = document.getElementById("growth-journey-list");
  if (!listEl) return;

  const savedDone = JSON.parse(localStorage.getItem("rt_growth_done") || "[]");

  listEl.innerHTML = growthDaysData.map(item => {
    const isDone = savedDone.includes(item.day);
    return `
      <div class="wellness-card p-5 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-4 ${isDone ? 'bg-teal-50/30 dark:bg-teal-950/20 border-teal-200 dark:border-teal-900' : ''}">
        <div class="space-y-1.5 flex-1">
          <div class="flex items-center gap-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-bold ${isDone ? 'bg-teal-500 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'}">
              Hari ke-${item.day}
            </span>
            <span class="text-xs font-semibold text-slate-400 uppercase tracking-wider">${item.badge}</span>
          </div>
          <h4 class="text-base font-bold text-slate-900 dark:text-white">${item.title}</h4>
          <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">${item.description}</p>
          <div class="p-2.5 bg-slate-50 dark:bg-slate-950 rounded-xl text-[11px] text-slate-700 dark:text-slate-300 font-medium border border-slate-100 dark:border-slate-850 flex items-center gap-1.5">
            <i data-lucide="check-circle" class="w-3.5 h-3.5 text-teal-600 shrink-0"></i>
            <span><strong>Aktivitas:</strong> ${item.actionPrompt}</span>
          </div>
        </div>

        <div class="shrink-0 pt-2 md:pt-0">
          <button onclick="toggleDayProgress(${item.day})" class="w-full sm:w-auto px-4 py-2 rounded-xl text-xs font-bold transition-all ${isDone ? 'bg-teal-100 dark:bg-teal-900/40 text-teal-800 dark:text-teal-300 border border-teal-300 dark:border-teal-700' : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-teal-600 hover:text-white'}">
            ${isDone ? '✓ Sudah Selesai' : 'Tandai Selesai'}
          </button>
        </div>
      </div>
    `;
  }).join("");

  if (window.lucide) lucide.createIcons();
}

function toggleDayProgress(day) {
  let savedDone = JSON.parse(localStorage.getItem("rt_growth_done") || "[]");
  if (savedDone.includes(day)) {
    savedDone = savedDone.filter(d => d !== day);
    showToast(`Hari ke-${day} ditandai belum selesai.`);
  } else {
    savedDone.push(day);
    showToast(`Bagus! Hari ke-${day} berhasil diselesaikan.`);
  }
  localStorage.setItem("rt_growth_done", JSON.stringify(savedDone));
  renderGrowthJourney();
  updateGrowthCounter();
}

function updateGrowthCounter() {
  const savedDone = JSON.parse(localStorage.getItem("rt_growth_done") || "[]");
  const countEl = document.getElementById("growth-count");
  
  if (countEl) {
    countEl.innerText = `${savedDone.length}/7 Hari Selesai`;
  }
}

function resetGrowthProgress() {
  if (confirm("Ulangi seluruh progres 7 hari dari awal?")) {
    localStorage.removeItem("rt_growth_done");
    renderGrowthJourney();
    updateGrowthCounter();
    showToast("Progres mingguan diulang.");
  }
}

// Soothing Minimalist Breathing Guide (4-7-8 Technique)
function toggleBreathingGuide() {
  const btnText = document.getElementById("breathing-btn-text");
  const btnIcon = document.getElementById("breathing-btn-icon");
  const phaseEl = document.getElementById("breathing-phase");
  const circleEl = document.getElementById("breathing-zen-circle");

  if (isBreathingActive) {
    clearInterval(breathingInterval);
    isBreathingActive = false;
    btnText.innerText = "Mulai Latihan";
    btnIcon.setAttribute("data-lucide", "play");
    phaseEl.innerText = "Latihan selesai. Terima kasih telah mengambil jeda.";
    circleEl.innerText = "Napas";
    circleEl.style.transform = "scale(1)";
    circleEl.classList.remove("breathing-pulse-anim");
    if (window.lucide) lucide.createIcons();
    return;
  }

  isBreathingActive = true;
  btnText.innerText = "Hentikan Latihan";
  btnIcon.setAttribute("data-lucide", "square");
  if (window.lucide) lucide.createIcons();

  let phase = 0; // 0: Tarik (4s), 1: Tahan (7s), 2: Hembuskan (8s)
  let secondsLeft = 4;

  const runPhase = () => {
    if (phase === 0) {
      phaseEl.innerText = `Tarik Napas perlahan lewat hidung... (${secondsLeft}s)`;
      circleEl.innerText = "Tarik";
      circleEl.style.transform = "scale(1.35)";
    } else if (phase === 1) {
      phaseEl.innerText = `Tahan Napas dengan tenang... (${secondsLeft}s)`;
      circleEl.innerText = "Tahan";
    } else if (phase === 2) {
      phaseEl.innerText = `Hembuskan perlahan lewat mulut... (${secondsLeft}s)`;
      circleEl.innerText = "Lepas";
      circleEl.style.transform = "scale(0.9)";
    }

    secondsLeft--;

    if (secondsLeft < 0) {
      if (phase === 0) {
        phase = 1;
        secondsLeft = 7;
      } else if (phase === 1) {
        phase = 2;
        secondsLeft = 8;
      } else if (phase === 2) {
        phase = 0;
        secondsLeft = 4;
      }
    }
  };

  runPhase();
  breathingInterval = setInterval(runPhase, 1000);
}

// ==========================================
// 9. RUANG KONSELING & FORMULIR SIMULASI
// ==========================================
function setSimulasiType(type) {
  const selectEl = document.getElementById("simulasi-kategori");
  if (selectEl) {
    selectEl.value = type;
  }
  const formCard = document.getElementById("simulasi-form-card");
  if (formCard) {
    formCard.scrollIntoView({ behavior: "smooth" });
  }
}

function handleSimulasiSubmit(e) {
  e.preventDefault();
  const kategori = document.getElementById("simulasi-kategori").value;
  const metode = document.getElementById("simulasi-metode").value;

  const checkedCheckboxes = Array.from(document.querySelectorAll('input[name="simulasi-fokus"]:checked')).map(cb => cb.value);
  const fokusText = checkedCheckboxes.length > 0 ? checkedCheckboxes.join(", ") : "Umum";

  let katLabel = "Konseling Psikologis";
  if (kategori === "keagamaan") katLabel = "Konsultasi Bimbingan Nilai";
  if (kategori === "terpadu") katLabel = "Pendampingan Terpadu";

  let metLabel = "Pesan Teks Anonim";
  if (metode === "suara") metLabel = "Panggilan Suara";
  if (metode === "tatapmuka") metLabel = "Sesi Daring Tatap Muka";

  const resultBox = document.getElementById("simulasi-result-box");
  const summaryEl = document.getElementById("simulasi-summary-text");

  summaryEl.innerHTML = `
    Permintaan simulasi untuk <strong>${katLabel}</strong> via <strong>${metLabel}</strong> (Fokus: ${fokusText}) telah dicatat dalam alur pengujian antarmuka.<br>
    <em>Pemberitahuan Etis:</em> Pada versi produksi penuh, data ini akan diproses dengan enkripsi ujung-ke-ujung (E2EE) dan diverifikasi oleh asosiasi profesi resmi (HIMPSI).
  `;

  resultBox.classList.remove("hidden");
  showToast("Simulasi formulir dicatat.");
}

// ==========================================
// 10. MODAL UMPAN BALIK & DARURAT
// ==========================================
function openFeedbackModal(topic) {
  document.getElementById("feedback-topic").value = topic || "Platform Umum";
  document.getElementById("feedback-modal").classList.remove("hidden");
}

function closeFeedbackModal() {
  document.getElementById("feedback-modal").classList.add("hidden");
}

function handleFeedbackSubmit(e) {
  e.preventDefault();
  closeFeedbackModal();
  showToast("Terima kasih. Masukan Anda telah dicatat.");
}

function openEmergencyModal() {
  document.getElementById("emergency-modal").classList.remove("hidden");
}

function closeEmergencyModal() {
  document.getElementById("emergency-modal").classList.add("hidden");
}

// ==========================================
// 11. AKSESIBILITAS & UTILITAS
// ==========================================
function toggleDarkMode() {
  const isDark = document.documentElement.classList.toggle("dark");
  localStorage.setItem("rt_theme", isDark ? "dark" : "light");
  if (window.lucide) lucide.createIcons();
}

function changeFontSize(size, notify = true) {
  document.body.classList.remove("font-sm", "font-lg");
  
  const btnSm = document.getElementById("font-btn-sm");
  const btnMd = document.getElementById("font-btn-md");
  const btnLg = document.getElementById("font-btn-lg");

  [btnSm, btnMd, btnLg].forEach(btn => {
    if (btn) btn.classList.remove("font-bold", "text-teal-600", "dark:text-teal-400");
  });

  if (size === "small") {
    document.body.classList.add("font-sm");
    if (btnSm) btnSm.classList.add("font-bold", "text-teal-600", "dark:text-teal-400");
  } else if (size === "large") {
    document.body.classList.add("font-lg");
    if (btnLg) btnLg.classList.add("font-bold", "text-teal-600", "dark:text-teal-400");
  } else {
    if (btnMd) btnMd.classList.add("font-bold", "text-teal-600", "dark:text-teal-400");
  }

  localStorage.setItem("rt_fontsize", size);
  if (notify) showToast(`Ukuran teks diubah: ${size}`);
}

function showToast(msg) {
  const toast = document.getElementById("toast");
  const toastMsg = document.getElementById("toast-message");
  if (!toast || !toastMsg) return;

  toastMsg.innerText = msg;
  toast.classList.remove("translate-y-24", "opacity-0");
  toast.classList.add("translate-y-0", "opacity-100");

  setTimeout(() => {
    toast.classList.remove("translate-y-0", "opacity-100");
    toast.classList.add("translate-y-24", "opacity-0");
  }, 3000);
}
