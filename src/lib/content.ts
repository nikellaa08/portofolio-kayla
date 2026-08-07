export type Lang = "id" | "en";

const idContent = {
  meta: {
    title: "Kayla — Customer Service & Admin Specialist",
    description:
      "Portofolio Ratu Balqis Kayla Lutflan Habilah — Customer Service & Administrative Support Specialist.",
  },
  nav: {
    brand: "KAYLA",
    toggleTheme: "Ganti mode terang/gelap",
    menu: "Buka menu",
    close: "Tutup menu",
    language: "Pilih bahasa",
    links: [
      { id: "home", label: "Beranda" },
      { id: "skills", label: "Status/Keahlian" },
      { id: "projects", label: "Quest/Proyek" },
      { id: "experience", label: "Pengalaman" },
      { id: "contact", label: "Kontak" },
    ],
  },
  hero: {
    badge: "TERSEDIA UNTUK BEKERJA",
    nameL1: "RATU BALQIS",
    nameL2: "KAYLA LUTFIAN HABILAH",
    role: "Customer Service & Administrative Support Specialist",
    tagline:
      "Profesional Layanan Pelanggan & Pengolahan Data yang Ketat, Rapi, dan Komunikatif. Berbekal latar belakang teknis sistem data untuk memberikan solusi administrasi dan pelayanan terbaik.",
    ctaProjects: "LIHAT PROYEK",
    ctaCv: "UNDUH CV",
    ctaContact: "HUBUNGI SAYA",
    avatarLabel: "CHARACTER",
    lvl: "LV. 05",
    hp: "HP",
    exp: "EXP",
    race: "RACE: HUMAN",
    classLabel: "CLASS: SUPPORT",
  },
  marquee: [
    "CUSTOMER SERVICE",
    "ADMIN SUPPORT",
    "DATA PROCESSING",
    "MICROSOFT OFFICE",
    "MYSQL",
    "PHP",
    "JAVASCRIPT",
    "NODE.JS",
    "NEXT.JS",
    "TAILWIND CSS",
    "GIT & GITHUB",
    "AI ASSISTANTS",
  ],
  stats: {
    kicker: "01 // STATUS",
    title: "CHARACTER STATUS & TECH STACK",
    subtitle: "Lembar status karakter & log peralatan",
    equipmentTitle: "EQUIPMENT LOG",
    categories: [
      {
        name: "Administrative & Productivity Tools",
        items: ["Microsoft Word", "Microsoft Excel", "Canva", "CapCut", "Freebuf"],
      },
      {
        name: "Technical & Data Tools",
        items: [
          "MySQL",
          "PHP",
          "JavaScript",
          "Node.js",
          "Next.js",
          "Tailwind CSS",
          "Git",
          "GitHub",
          "Visual Studio Code",
        ],
      },
      {
        name: "AI & Automation Assistants",
        items: ["OpenAI", "Gemini"],
      },
    ],
    traitsTitle: "CHARACTER TRAITS",
    traitsSub: "Soft skills — stat tambahan",
    traits: [
      {
        name: "Public Speaking & Presentasi",
        desc: "Teruji berbicara di hadapan 3 angkatan siswa",
        stat: 90,
      },
      {
        name: "Komunikasi Efektif & Empati Layanan",
        desc: "Ramah, jelas, dan berorientasi pada kebutuhan pengguna",
        stat: 95,
      },
      {
        name: "Ketelitian & Kerapian Administrasi Data",
        desc: "Detail-oriented dalam setiap pencatatan dan validasi",
        stat: 92,
      },
      {
        name: "Kerja Sama Tim & Koordinasi Interpersonal",
        desc: "Kolaboratif dalam organisasi dan pertunjukan publik",
        stat: 88,
      },
      {
        name: "Manajemen Waktu & Adaptabilitas",
        desc: "Cepat beradaptasi dengan alat dan lingkungan baru",
        stat: 85,
      },
    ],
    buffsTitle: "ACTIVE BUFFS",
    buffs: ["+20% Ketelitian", "+15% Komunikasi", "+10% Adaptabilitas"],
  },
  quests: {
    kicker: "02 // QUESTS",
    title: "QUEST LOG",
    subtitle: "Proyek unggulan & studi kasus",
    mainTag: "MAIN QUEST",
    active: "ACTIVE",
    completed: "SELESAI",
    main: {
      title: "Quote of the Day App",
      role: "Content & Data Maintenance Specialist",
      desc: "Pengelolaan dan pemeliharaan data konten harian secara terstruktur memanfaatkan API publik, memastikan keandalan alur informasi dan konsistensi tampilan antarmuka.",
      tech: ["JavaScript", "API Integration", "Web Maintenance"],
      reward: "REWARD: +500 EXP",
    },
    sideTag: "SIDE QUEST",
    side: [
      {
        title: "E-Commerce Customer Support & Inventory (Lumiere)",
        desc: "Penanganan simulasi alur transaksi, manajemen data inventaris produk, serta simulasi respon layanan pelanggan.",
        tech: ["Customer Support", "Inventory", "Transaction Flow"],
        emoji: "🛒",
        color: "red",
      },
      {
        title: "Digital Library Database Management",
        desc: "Pengelolaan dan validasi basis data peminjaman buku untuk akurasi arsip digital.",
        tech: ["Database", "Data Validation", "Digital Archive"],
        emoji: "📚",
        color: "yellow",
      },
    ],
  },
  experience: {
    kicker: "03 // EXP LOG",
    title: "ADVENTURE LOG",
    subtitle: "Pengalaman & rekam jejak",
    entries: [
      {
        tag: "Lv. 3 — SPEAKING",
        color: "blue",
        title: "Public Speaking & Komunikasi Publik (Kultum)",
        desc: "Penyampai materi ceramah singkat mengenai etika komunikasi (\"Fitnah lebih kejam dari pembunuhan\") di hadapan 3 angkatan siswa (Kelas 10–12). Mengasah keberanian public speaking, artikulasi, dan penyampaian pesan terstruktur.",
        bullets: [
          "Berbicara di hadapan 3 angkatan siswa",
          "Materi: etika komunikasi",
          "Kelas 10–12",
        ],
      },
      {
        tag: "Lv. 2 — ORGANISASI",
        color: "green",
        title: "Kegiatan Organisasi & Ekstrakurikuler",
        desc: "Pengalaman aktif di berbagai kegiatan non-akademik yang membentuk kerja sama tim dan keterampilan teknis.",
        subs: [
          {
            name: "Broadcasting",
            desc: "Pelatihan teknik pengambilan sudut foto dan video secara profesional.",
          },
          {
            name: "Teater, Hadroh, & Paduan Suara",
            desc: "Pengasahan keharmonisan kerja sama tim, ritme kerja, serta koordinasi antaranggota dalam pertunjukan publik.",
          },
        ],
      },
      {
        tag: "Lv. 1 — EDUKASI",
        color: "yellow",
        title: "Pendidikan",
        desc: "",
        schools: [
          {
            name: "SMK Jakarta Pusat 1",
            period: "2024 – 2027",
            detail: "Jurusan Rekayasa Perangkat Lunak (RPL)",
          },
          {
            name: "SMP Negeri 88 Jakarta",
            period: "2021 – 2024",
            detail: "",
          },
        ],
      },
    ],
  },
  contact: {
    kicker: "04 // CONTACT",
    title: "LET'S CONNECT",
    subtitle: "Siap membuka quest baru bersama Anda",
    note: "⚡ Respon cepat — balasan biasanya dalam 24 jam.",
    items: [
      {
        label: "EMAIL",
        value: "nikellaa08@gmail.com",
        href: "mailto:nikellaa08@gmail.com",
        emoji: "✉️",
        color: "yellow",
      },
      {
        label: "LINKEDIN",
        value: "linkedin.com/in/kayla-l-8b276b424",
        href: "https://www.linkedin.com/in/kayla-l-8b276b424",
        emoji: "💼",
        color: "blue",
      },
      {
        label: "WHATSAPP",
        value: "+62 857-7122-0340",
        href: "https://wa.me/6285771220340",
        emoji: "💬",
        color: "green",
      },
      {
        label: "GITHUB",
        value: "@nikellaa08",
        href: "https://github.com/nikellaa08",
        emoji: "🐙",
        color: "ink",
      },
    ],
    cvCta: "UNDUH CV",
    cvHint: "PDF",
    emailCta: "atau kirim email langsung",
  },
  footer: {
    text: "© 2026 Ratu Habibilah. Dibangun dengan Next.js & Tailwind CSS.",
    madeWith: "Dibuat dengan ♥ dan banyak kopi ☕",
  },
};

export type Content = typeof idContent;

const enContent: Content = {
  meta: {
    title: "Kayla — Customer Service & Admin Specialist",
    description:
      "Portfolio of Ratu Balqis Kayla Lutflan Habilah — Customer Service & Administrative Support Specialist.",
  },
  nav: {
    brand: "KAYLA",
    toggleTheme: "Toggle dark/light mode",
    menu: "Open menu",
    close: "Close menu",
    language: "Choose language",
    links: [
      { id: "home", label: "Home" },
      { id: "skills", label: "Status/Skills" },
      { id: "projects", label: "Quests/Projects" },
      { id: "experience", label: "Experience" },
      { id: "contact", label: "Contact" },
    ],
  },
  hero: {
    badge: "READY FOR WORK",
    nameL1: "RATU BALQIS",
    nameL2: "KAYLA LUTFIAN HABILAH",
    role: "Customer Service & Administrative Support Specialist",
    tagline:
      "A meticulous, organized, and communicative Customer Service & Data Processing professional. Backed by a technical background in data systems to deliver the best administrative solutions and service.",
    ctaProjects: "VIEW PROJECTS",
    ctaCv: "DOWNLOAD CV",
    ctaContact: "CONTACT ME",
    avatarLabel: "CHARACTER",
    lvl: "LV. 05",
    hp: "HP",
    exp: "EXP",
    race: "RACE: HUMAN",
    classLabel: "CLASS: SUPPORT",
  },
  marquee: [
    "CUSTOMER SERVICE",
    "ADMIN SUPPORT",
    "DATA PROCESSING",
    "MICROSOFT OFFICE",
    "MYSQL",
    "PHP",
    "JAVASCRIPT",
    "NODE.JS",
    "NEXT.JS",
    "TAILWIND CSS",
    "GIT & GITHUB",
    "AI ASSISTANTS",
  ],
  stats: {
    kicker: "01 // STATUS",
    title: "CHARACTER STATUS & TECH STACK",
    subtitle: "Character status sheet & equipment log",
    equipmentTitle: "EQUIPMENT LOG",
    categories: [
      {
        name: "Administrative & Productivity Tools",
        items: ["Microsoft Word", "Microsoft Excel", "Canva", "CapCut", "Freebuf"],
      },
      {
        name: "Technical & Data Tools",
        items: [
          "MySQL",
          "PHP",
          "JavaScript",
          "Node.js",
          "Next.js",
          "Tailwind CSS",
          "Git",
          "GitHub",
          "Visual Studio Code",
        ],
      },
      {
        name: "AI & Automation Assistants",
        items: ["OpenAI", "Gemini"],
      },
    ],
    traitsTitle: "CHARACTER TRAITS",
    traitsSub: "Soft skills — bonus stats",
    traits: [
      {
        name: "Public Speaking & Presentation",
        desc: "Proven speaking in front of 3 student cohorts",
        stat: 90,
      },
      {
        name: "Effective Communication & Service Empathy",
        desc: "Friendly, clear, and focused on user needs",
        stat: 95,
      },
      {
        name: "Accuracy & Neat Data Administration",
        desc: "Detail-oriented in every record and validation",
        stat: 92,
      },
      {
        name: "Teamwork & Interpersonal Coordination",
        desc: "Collaborative in organizations and public performances",
        stat: 88,
      },
      {
        name: "Time Management & Adaptability",
        desc: "Quick to adapt to new tools and environments",
        stat: 85,
      },
    ],
    buffsTitle: "ACTIVE BUFFS",
    buffs: ["+20% Accuracy", "+15% Communication", "+10% Adaptability"],
  },
  quests: {
    kicker: "02 // QUESTS",
    title: "QUEST LOG",
    subtitle: "Featured projects & case studies",
    mainTag: "MAIN QUEST",
    active: "ACTIVE",
    completed: "COMPLETED",
    main: {
      title: "Quote of the Day App",
      role: "Content & Data Maintenance Specialist",
      desc: "Structured management and maintenance of daily content data using a public API, ensuring reliable information flow and consistent interface display.",
      tech: ["JavaScript", "API Integration", "Web Maintenance"],
      reward: "REWARD: +500 EXP",
    },
    sideTag: "SIDE QUEST",
    side: [
      {
        title: "E-Commerce Customer Support & Inventory (Lumiere)",
        desc: "Handling simulated transaction flows, managing product inventory data, and simulating customer service responses.",
        tech: ["Customer Support", "Inventory", "Transaction Flow"],
        emoji: "🛒",
        color: "red",
      },
      {
        title: "Digital Library Database Management",
        desc: "Management and validation of a book-lending database for accurate digital archives.",
        tech: ["Database", "Data Validation", "Digital Archive"],
        emoji: "📚",
        color: "yellow",
      },
    ],
  },
  experience: {
    kicker: "03 // EXP LOG",
    title: "ADVENTURE LOG",
    subtitle: "Experience & track record",
    entries: [
      {
        tag: "Lv. 3 — SPEAKING",
        color: "blue",
        title: "Public Speaking & Public Communication (Kultum)",
        desc: "Delivered a short sermon on communication ethics (\"Slander is crueler than murder\") in front of 3 student cohorts (Grades 10–12). Honed public speaking courage, articulation, and structured message delivery.",
        bullets: [
          "Spoke in front of 3 student cohorts",
          "Topic: communication ethics",
          "Grades 10–12",
        ],
      },
      {
        tag: "Lv. 2 — ORGANIZATION",
        color: "green",
        title: "Organizational Activities & Extracurriculars",
        desc: "Active involvement in various non-academic activities that build teamwork and technical skills.",
        subs: [
          {
            name: "Broadcasting",
            desc: "Training in professional photo and video camera-angle techniques.",
          },
          {
            name: "Theater, Hadroh, & Choir",
            desc: "Sharpening team harmony, work rhythm, and member coordination in public performances.",
          },
        ],
      },
      {
        tag: "Lv. 1 — EDUCATION",
        color: "yellow",
        title: "Education",
        desc: "",
        schools: [
          {
            name: "SMK Jakarta Pusat 1 (Vocational HS)",
            period: "2024 – 2027",
            detail: "Software Engineering (RPL)",
          },
          {
            name: "SMP Negeri 88 Jakarta (Junior HS)",
            period: "2021 – 2024",
            detail: "",
          },
        ],
      },
    ],
  },
  contact: {
    kicker: "04 // CONTACT",
    title: "LET'S CONNECT",
    subtitle: "Ready to start a new quest with you",
    note: "⚡ Fast response — usually within 24 hours.",
    items: [
      {
        label: "EMAIL",
        value: "nikellaa08@gmail.com",
        href: "mailto:nikellaa08@gmail.com",
        emoji: "✉️",
        color: "yellow",
      },
      {
        label: "LINKEDIN",
        value: "linkedin.com/in/kayla-l-8b276b424",
        href: "https://www.linkedin.com/in/kayla-l-8b276b424",
        emoji: "💼",
        color: "blue",
      },
      {
        label: "WHATSAPP",
        value: "+62 857-7122-0340",
        href: "https://wa.me/6285771220340",
        emoji: "💬",
        color: "green",
      },
      {
        label: "GITHUB",
        value: "@nikellaa08",
        href: "https://github.com/nikellaa08",
        emoji: "🐙",
        color: "ink",
      },
    ],
    cvCta: "DOWNLOAD CV",
    cvHint: "PDF",
    emailCta: "or email me directly",
  },
  footer: {
    text: "© 2026 Ratu Habibilah. Built with Next.js & Tailwind CSS.",
    madeWith: "Made with ♥ and lots of coffee ☕",
  },
};

export const content: Record<Lang, Content> = { id: idContent, en: enContent };
