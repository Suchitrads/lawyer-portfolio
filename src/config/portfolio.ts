export interface Stat {
  number: string;
  label: string;
  emoji?: string;
}

export interface ValueItem {
  title: string;
  description: string;
  emoji: string;
  iconName?: string;
}

export interface PracticeArea {
  id: string;
  number: string;
  title: string;
  emoji: string;
  summary: string;
  details: string;
  statutes: string;
}

export interface EducationItem {
  period: string;
  title: string;
  institution: string;
  bullet: string;
  emoji: string;
}

export interface ExperienceItem {
  period: string;
  title: string;
  institution: string;
  bullets: string[];
  emoji: string;
}

export interface CredentialCard {
  title: string;
  emoji: string;
  icon: 'id' | 'certificate';
  lines: string[];
}

export interface AchievementItem {
  title: string;
  subtitle: string;
  emoji: string;
  icon: 'trophy' | 'star' | 'book' | 'users';
}

export interface PublicationItem {
  title: string;
  journal: string;
  emoji: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  linkedin: string;
}

export const portfolioConfig = {
  lawyer: {
    name: "Aarohi Desai",
    firstName: "Aarohi",
    lastName: "Desai",
    brandLogo: "A.",
    label: "⚖️ ADVOCATE —",
    designation: "Lawyer · Legal Consultant",
    tagline: "Passionate about law,\nCommitted to justice.",
    heroImage: "/images/exact/hero-portrait-studio-hd.jpg",
    heroImageAlt: "/images/exact/hero-composition-hd.png",
    aboutImage: "/images/exact/about-portrait-studio-hd.jpg",
    aboutImageAlt: "/images/exact/about-photo-hd.png",
    signatureImage: "/images/exact/signature-hd.png",
    stats: [
      { number: "5+", label: "Years of Practice", emoji: "⏱️" },
      { number: "100+", label: "Cases Handled", emoji: "📁" },
      { number: "10+", label: "Areas of Expertise", emoji: "⚖️" },
    ],
  },

  about: {
    label: "👩‍⚖️ ABOUT ME —",
    heading: "An Advocate\nfor What Matters.",
    bio: "I'm Aarohi Desai, a lawyer with a strong interest in litigation, legal research and rights-based advocacy. I believe in using law as a tool to create fair, practical and people-centred solutions.",
    values: [
      {
        title: "Integrity",
        description: "in practice",
        emoji: "⚖️",
        iconName: "scales",
      },
      {
        title: "Client",
        description: "focused",
        emoji: "👥",
        iconName: "users",
      },
      {
        title: "Research",
        description: "driven",
        emoji: "📖",
        iconName: "book",
      },
    ],
  },

  expertise: {
    label: "⚖️ EXPERTISE —",
    heading: "Areas of\nPractice",
    description: "Legal support across a\nwide spectrum of matters.",
    illustration: "/images/exact/lady-justice-complete.png",
    items: [
      {
        id: "civil",
        number: "01",
        title: "Civil Litigation",
        emoji: "⚖️",
        summary: "Representation before High Courts and appellate tribunals in commercial breach claims, permanent injunctions, recovery suits, and execution decrees.",
        details: "Comprehensive litigation representation in High Courts and trial courts for breach of contract, specific performance, property disputes, and appellate civil remedies under the Code of Civil Procedure.",
        statutes: "Code of Civil Procedure, 1908 • Specific Relief Act, 1963",
      },
      {
        id: "criminal",
        number: "02",
        title: "Criminal Law",
        emoji: "🛡️",
        summary: "Trial defense, anticipatory & regular bail, economic offences, and Section 482 quashing petitions.",
        details: "Strategic counsel in criminal trials, bail applications, financial fraud investigations, regulatory proceedings, and quashing petitions before the High Court.",
        statutes: "Code of Criminal Procedure / BNSS • IPC / BNS • Special Criminal Acts",
      },
      {
        id: "corporate",
        number: "03",
        title: "Corporate & Commercial Law",
        emoji: "💼",
        summary: "Commercial contracts, corporate advisory, dispute resolution, and regulatory compliance.",
        details: "Structuring agreements, resolving shareholder disputes, conducting commercial arbitration, and advising on corporate governance and compliance mandates.",
        statutes: "Companies Act, 2013 • Arbitration & Conciliation Act, 1996",
      },
      {
        id: "family",
        number: "04",
        title: "Family Law",
        emoji: "👨‍👩‍👧",
        summary: "Matrimonial settlements, custody arrangements, succession, wills, and private family arrangements.",
        details: "Discreet counsel in matrimonial disputes, child custody, maintenance petitions, succession planning, probate of wills, and family settlements.",
        statutes: "Family Courts Act, 1984 • Indian Succession Act, 1925",
      },
      {
        id: "ip",
        number: "05",
        title: "Intellectual Property Rights",
        emoji: "💡",
        summary: "Trademarks, copyright enforcement, licensing agreements, and digital rights protection.",
        details: "Protecting brand identity, filing trademark registrations, prosecuting infringement actions, and managing copyright and intellectual asset licensing.",
        statutes: "Trade Marks Act, 1999 • Copyright Act, 1957",
      },
      {
        id: "constitutional",
        number: "06",
        title: "Constitutional Law",
        emoji: "📜",
        summary: "Extraordinary writ jurisdiction under Article 226 before the High Court and public law litigation.",
        details: "Filing and arguing writ petitions challenging arbitrary executive actions, protecting fundamental freedoms, and pursuing public interest remedies.",
        statutes: "Constitution of India (Articles 14, 19, 21, 226)",
      },
    ],
  },

  education: {
    label: "🎓 EDUCATION —",
    heading: "Academic\nJourney",
    description: "A foundation in law,\nshaped by learning\nand exploration.",
    illustration: "/images/exact/books-education-complete.png",
    timeline: [
      {
        period: "2021 – 2023",
        title: "LL.M. in Constitutional Law",
        institution: "National Law University (NLU)",
        bullet: "Specialisation in Fundamental Rights",
        emoji: "🎓",
      },
      {
        period: "2018 – 2021",
        title: "LL.B. (Bachelor of Laws)",
        institution: "University of Kerala",
        bullet: "Top 10% of the batch",
        emoji: "📜",
      },
      {
        period: "2015 – 2018",
        title: "B.A. in Political Science",
        institution: "University of Calicut",
        bullet: "Graduated with Distinction",
        emoji: "🏛️",
      },
    ],
  },

  experience: {
    label: "💼 EXPERIENCE —",
    heading: "Professional\nExperience",
    description: "A progressive journey\nin legal practice\nand litigation.",
    illustration: "/images/exact/gavel-complete.png",
    timeline: [
      {
        period: "2023 – Present",
        title: "Associate Advocate",
        institution: "High Court of Kerala",
        bullets: [
          "Representing clients in civil and writ matters",
          "Legal research, drafting and case preparation",
        ],
        emoji: "⚖️",
      },
      {
        period: "2021 – 2023",
        title: "Legal Associate",
        institution: "LexLaw Partners (Law Firm)",
        bullets: [
          "Assisted in corporate and commercial matters",
          "Conducted legal research and due diligence",
        ],
        emoji: "💼",
      },
      {
        period: "2019 – 2021",
        title: "Legal Intern",
        institution: "Various Chambers",
        bullets: [
          "Research, drafting and court assist",
        ],
        emoji: "📚",
      },
    ],
  },

  credentials: {
    label: "📜 CREDENTIALS —",
    heading: "Licences &\nCertifications",
    description: "Professional registrations\nand recognised certifications.",
    illustration: "/images/exact/seal-complete.png",
    certificateImage: "/images/bar-certificate.svg",
    cards: [
      {
        title: "Bar Council Registration",
        emoji: "🪪",
        icon: "id" as const,
        lines: [
          "Enrolment No. : [Your Enrolment Number]",
          "State Bar Council : Kerala",
          "Date of Enrolment : [DD MMM YYYY]",
        ],
      },
      {
        title: "Certificate of Practice",
        emoji: "📜",
        icon: "certificate" as const,
        lines: [
          "[Issuing Authority]",
          "Valid Till : [DD MMM YYYY]",
        ],
      },
    ],
  },

  achievements: {
    label: "🏆 ACHIEVEMENTS —",
    heading: "Recognitions\n& Milestones",
    description: "Notable accomplishments\nthroughout my legal journey.",
    illustration: "/images/exact/botanical-complete.png",
    items: [
      {
        title: "Winner – National Moot Court Competition",
        subtitle: "(Year)",
        emoji: "🏆",
        icon: "trophy" as const,
      },
      {
        title: "Best Paper – Legal Research Conference",
        subtitle: "(Year)",
        emoji: "⭐",
        icon: "star" as const,
      },
      {
        title: 'Published Article – "Title of the Article"',
        subtitle: "(Journal / Platform, Year)",
        emoji: "📰",
        icon: "book" as const,
      },
      {
        title: "Member – Indian Association of Lawyers",
        subtitle: "(Since YYYY)",
        emoji: "🤝",
        icon: "users" as const,
      },
    ],
  },

  publications: {
    label: "📚 PUBLICATIONS —",
    heading: "Research &\nPublications",
    description: "Contributions to legal\ndiscourse and practice.",
    illustration: "/images/exact/books-education-complete.png",
    items: [
      {
        title: "The Evolving Scope of Digital Privacy in India",
        journal: "Journal of Law & Policy, 2023",
        emoji: "📑",
      },
      {
        title: "A Study on Bail Jurisprudence in Criminal Law",
        journal: "Legal Research Review, 2022",
        emoji: "📑",
      },
      {
        title: "Women's Rights and Constitutional Protection",
        journal: "Conference Proceedings, 2021",
        emoji: "📑",
      },
    ],
  },

  contact: {
    label: "✉️ CONTACT —",
    heading: "Let's\nConnect",
    description: "For consultations,\ncollaborations or\nprofessional enquiries.",
    email: "aarohi.desai@lawmail.com",
    phone: "+91 98765 43210",
    location: "Kochi, Kerala",
    linkedin: "linkedin.com/in/aarohidesai",
    illustration: "/images/exact/architecture-complete.png",
  },
};
