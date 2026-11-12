/**
 * Maya Lin | Advocate & Legal Counsel — Personal Portfolio Script
 * Minimalist, creative & interactive black-and-white legal portfolio.
 */

// Default configuration for profile customizer
const DEFAULT_PROFILE = {
  lawyerFullName: "Maya Lin",
  lawyerName: "Maya Lin",
  lawyerDegreeSuffix: ", LL.M.",
  lawyerDesignationShort: "Advocate & Legal Counsel",
  lawyerDesignationFull: "Advocate & Independent Legal Counsel",
  lawyerTagline: "“Passionate about law. Committed to justice.”",
  lawyerBioIntro: "Hello! I'm an independent lawyer helping individuals, founders, and creative businesses navigate legal questions with clarity, empathy, and strategic rigor. I believe legal guidance should be approachable, transparent, and grounded in real-world solutions rather than confusing jargon.",
  heroStatus: "Passionate about law. Committed to justice.",
  barAuthority: "Bar Council of Delhi & BCI",
  barEnrollment: "[BAR/ENR/2018/XXXX]",
  barDate: "18 September 2018",
  barCOP: "[COP/2026/ACTIVE-XXXX]",
  chambersAddress: "Chambers 18, Lawyers Court Enclave, Opposite High Court Gate 2, New Delhi — 110001",
  chambersPhone: "+91 (11) 2338-XXXX / +91 9811X-XXXXX",
  chambersEmail: "counsel@mayalinlaw.com",
  statYears: "8+",
  statMatters: "240+",
  statBarRoll: "High Court",
  avatarSrc: "/images/avatar-lawyer-cute.svg"
};

document.addEventListener("DOMContentLoaded", () => {
  initCustomCursor();
  initScrollProgress();
  initStickyHeader();
  initMobileDrawer();
  initScrollSpy();
  initExpertiseInteractiveList();
  initCertificateModal();
  initAvatarSwitcher();
  initContactForm();
  initVCardDownload();
  initBackToTop();
  initCMSCustomizer();
});

/* --------------------------------------------------------------------------
   1. Minimalist Custom Cursor (Desktop Only)
   -------------------------------------------------------------------------- */
function initCustomCursor() {
  const cursor = document.getElementById("custom-cursor");
  if (!cursor || window.matchMedia("(pointer: coarse)").matches) return;

  let mouseX = 0, mouseY = 0;
  let cursorX = 0, cursorY = 0;

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  const interactiveElements = document.querySelectorAll("a, button, input, select, textarea, .expertise-item");
  interactiveElements.forEach((el) => {
    el.addEventListener("mouseenter", () => cursor.classList.add("hovering"));
    el.addEventListener("mouseleave", () => cursor.classList.remove("hovering"));
  });

  function renderCursor() {
    cursorX += (mouseX - cursorX) * 0.2;
    cursorY += (mouseY - cursorY) * 0.2;
    cursor.style.left = `${cursorX}px`;
    cursor.style.top = `${cursorY}px`;
    requestAnimationFrame(renderCursor);
  }
  requestAnimationFrame(renderCursor);
}

/* --------------------------------------------------------------------------
   2. Scroll Progress Bar
   -------------------------------------------------------------------------- */
function initScrollProgress() {
  const bar = document.getElementById("scroll-progress");
  if (!bar) return;

  window.addEventListener("scroll", () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight > 0) {
      const progress = (window.scrollY / totalHeight) * 100;
      bar.style.width = `${progress}%`;
      bar.setAttribute("aria-valuenow", Math.round(progress));
    }
  }, { passive: true });
}

/* --------------------------------------------------------------------------
   3. Sticky Header
   -------------------------------------------------------------------------- */
function initStickyHeader() {
  const header = document.getElementById("main-header");
  if (!header) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      header.classList.add("shadow-xs");
    } else {
      header.classList.remove("shadow-xs");
    }
  }, { passive: true });
}

/* --------------------------------------------------------------------------
   4. Mobile Navigation Drawer
   -------------------------------------------------------------------------- */
function initMobileDrawer() {
  const toggleBtn = document.getElementById("mobile-menu-toggle");
  const drawer = document.getElementById("mobile-nav-drawer");
  const hamburger = document.getElementById("hamburger-icon");
  const close = document.getElementById("close-icon");
  if (!toggleBtn || !drawer) return;

  const toggle = (forceClose = false) => {
    const isExpanded = forceClose ? true : toggleBtn.getAttribute("aria-expanded") === "true";
    if (isExpanded) {
      drawer.classList.add("hidden");
      toggleBtn.setAttribute("aria-expanded", "false");
      if (hamburger) hamburger.classList.remove("hidden");
      if (close) close.classList.add("hidden");
    } else {
      drawer.classList.remove("hidden");
      toggleBtn.setAttribute("aria-expanded", "true");
      if (hamburger) hamburger.classList.add("hidden");
      if (close) close.classList.remove("hidden");
    }
  };

  toggleBtn.addEventListener("click", () => toggle());

  drawer.querySelectorAll("a, button").forEach(elem => {
    elem.addEventListener("click", () => toggle(true));
  });
}

/* --------------------------------------------------------------------------
   5. Scroll Spy Navigation Highlight
   -------------------------------------------------------------------------- */
function initScrollSpy() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll("#desktop-nav a.minimal-nav-link");

  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navLinks.forEach(link => {
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active-nav");
          } else {
            link.classList.remove("active-nav");
          }
        });
      }
    });
  }, {
    rootMargin: "-25% 0px -60% 0px",
    threshold: 0
  });

  sections.forEach(section => observer.observe(section));
}

/* --------------------------------------------------------------------------
   6. Creative Interactive Expertise List (Accordions with hover preview)
   -------------------------------------------------------------------------- */
function initExpertiseInteractiveList() {
  const items = document.querySelectorAll(".expertise-item");

  items.forEach(item => {
    item.addEventListener("click", () => {
      const wasActive = item.classList.contains("active");

      // Close all other items
      items.forEach(i => i.classList.remove("active"));

      // Toggle clicked item
      if (!wasActive) {
        item.classList.add("active");
      }
    });
  });
}

/* --------------------------------------------------------------------------
   7. Certificate Modal (MWG Native <dialog>)
   -------------------------------------------------------------------------- */
function initCertificateModal() {
  const modal = document.getElementById("certificate-modal");
  const openButtons = [
    document.getElementById("trigger-cert-preview"),
    document.getElementById("btn-open-cert-modal")
  ];

  openButtons.forEach(btn => {
    if (btn && modal) {
      btn.addEventListener("click", () => {
        modal.showModal();
      });
    }
  });

  // Light dismiss fallback for browsers without native closedby="any"
  if (modal && !('closedBy' in HTMLDialogElement.prototype)) {
    let pressedOutside = false;
    const outside = (e) => {
      const r = modal.getBoundingClientRect();
      return e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom;
    };
    modal.addEventListener('pointerdown', (e) => { pressedOutside = outside(e); });
    modal.addEventListener('pointerup', (e) => {
      if (pressedOutside && outside(e)) modal.close();
    });
  }
}

/* --------------------------------------------------------------------------
   8. Cute Avatar Character Switcher
   -------------------------------------------------------------------------- */
function initAvatarSwitcher() {
  const switchBtn = document.getElementById("switch-avatar-btn");
  const avatarImg = document.getElementById("hero-avatar-img");
  if (!switchBtn || !avatarImg) return;

  const avatars = [
    "/images/avatar-lawyer-cute.svg",
    "/images/avatar-lawyer-alt.svg"
  ];
  let currentIdx = 0;

  switchBtn.addEventListener("click", () => {
    currentIdx = (currentIdx + 1) % avatars.length;
    avatarImg.style.transform = "scale(0.85)";
    setTimeout(() => {
      avatarImg.src = avatars[currentIdx];
      avatarImg.style.transform = "scale(1)";
    }, 150);
  });
}

/* --------------------------------------------------------------------------
   9. Contact Form Handling
   -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById("contact-enquiry-form");
  const feedback = document.getElementById("contact-feedback");
  const submitBtn = document.getElementById("contact-submit-btn");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    // Safety check for confidential privileged records in public form
    const messageInput = document.getElementById("form-message");
    const text = (messageInput ? messageInput.value : "").toLowerCase();
    const sensitiveWords = ["confidential settlement", "trade secret", "bank password", "insider deal"];
    if (sensitiveWords.some(w => text.includes(w))) {
      showFeedback("⚠️ Privacy Advisory: Please avoid disclosing confidential trade secrets or sensitive bank credentials in this public intake form. We will request case dossiers upon direct consultation.", "error");
      return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = "Sending Message...";

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.textContent = "Send Message";

      const nameVal = document.getElementById("form-name")?.value || "Friend";
      const refCode = "ML-" + Math.floor(1000 + Math.random() * 9000);

      showFeedback(`
        ✓ Thank you, <strong>${escapeHTML(nameVal)}</strong>! Your message has been received (Ref: <strong>${refCode}</strong>). I will review and reply within one business day.
      `, "success");

      form.reset();
    }, 900);
  });

  function showFeedback(msg, type) {
    if (!feedback) return;
    feedback.innerHTML = msg;
    feedback.classList.remove("hidden", "bg-[#111111]", "text-white", "bg-neutral-100", "text-neutral-900");

    if (type === "success") {
      feedback.classList.add("bg-[#111111]", "text-white");
    } else {
      feedback.classList.add("bg-neutral-100", "text-neutral-900", "border", "border-neutral-300");
    }

    feedback.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
}

/* --------------------------------------------------------------------------
   10. vCard Generator
   -------------------------------------------------------------------------- */
function initVCardDownload() {
  const btn = document.getElementById("btn-vcard-download");
  if (!btn) return;

  btn.addEventListener("click", () => {
    const vCardData = [
      "BEGIN:VCARD",
      "VERSION:3.0",
      "FN:Maya Lin, Advocate",
      "N:Lin;Maya;;Advocate;",
      "ORG:Maya Lin Legal Chambers",
      "TITLE:Advocate & Legal Counsel",
      "TEL;TYPE=WORK,VOICE:+91112338XXXX",
      "EMAIL;TYPE=PREF,INTERNET:counsel@mayalinlaw.com",
      "ADR;TYPE=WORK:;;Chambers 18, Lawyers Court Enclave;New Delhi;;110001;India",
      "URL:https://mayalinlaw.com",
      "NOTE:Enrolment No: [BAR/ENR/2018/XXXX] - High Court Practice",
      "END:VCARD"
    ].join("\r\n");

    const blob = new Blob([vCardData], { type: "text/vcard;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Maya_Lin_Advocate.vcf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  });
}

/* --------------------------------------------------------------------------
   11. Back to Top Button
   -------------------------------------------------------------------------- */
function initBackToTop() {
  const btn = document.getElementById("back-to-top");
  if (!btn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      btn.classList.add("visible");
    } else {
      btn.classList.remove("visible");
    }
  }, { passive: true });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* --------------------------------------------------------------------------
   12. Live CMS / Customizer Drawer
   -------------------------------------------------------------------------- */
function initCMSCustomizer() {
  const panel = document.getElementById("cms-panel");
  const openButtons = [
    document.getElementById("top-cms-btn"),
    document.getElementById("mobile-open-cms"),
    document.getElementById("footer-cms-btn"),
    document.getElementById("floating-cms-btn")
  ];
  const closeBtn = document.getElementById("close-cms-btn");
  const saveBtn = document.getElementById("cms-save-btn");
  const resetBtn = document.getElementById("cms-reset-btn");

  // Inputs
  const cmsName = document.getElementById("cms-name");
  const cmsDegree = document.getElementById("cms-degree");
  const cmsDesignation = document.getElementById("cms-designation");
  const cmsTagline = document.getElementById("cms-tagline");
  const cmsEnrolment = document.getElementById("cms-enrolment");
  const cmsCOP = document.getElementById("cms-cop");

  const avatarOptions = document.querySelectorAll(".avatar-option-btn");
  let selectedAvatar = DEFAULT_PROFILE.avatarSrc;

  // Load from local storage
  const saved = loadProfile();
  applyProfile(saved);
  populateInputs(saved);

  const openDrawer = () => panel && panel.classList.remove("translate-x-full");
  const closeDrawer = () => panel && panel.classList.add("translate-x-full");

  openButtons.forEach(b => b && b.addEventListener("click", openDrawer));
  if (closeBtn) closeBtn.addEventListener("click", closeDrawer);

  // Avatar select in CMS
  avatarOptions.forEach(btn => {
    btn.addEventListener("click", () => {
      avatarOptions.forEach(b => {
        b.classList.remove("border-2", "border-[#111111]");
        b.classList.add("border-[#E4E4E7]");
      });
      btn.classList.remove("border-[#E4E4E7]");
      btn.classList.add("border-2", "border-[#111111]");
      selectedAvatar = btn.getAttribute("data-avatar-src");
      const heroAvatar = document.getElementById("hero-avatar-img");
      if (heroAvatar) heroAvatar.src = selectedAvatar;
    });
  });

  // Save button
  if (saveBtn) {
    saveBtn.addEventListener("click", () => {
      const updated = {
        ...saved,
        lawyerName: cmsName ? cmsName.value : DEFAULT_PROFILE.lawyerName,
        lawyerFullName: cmsName ? cmsName.value : DEFAULT_PROFILE.lawyerFullName,
        lawyerDegreeSuffix: cmsDegree ? cmsDegree.value : DEFAULT_PROFILE.lawyerDegreeSuffix,
        lawyerDesignationFull: cmsDesignation ? cmsDesignation.value : DEFAULT_PROFILE.lawyerDesignationFull,
        lawyerTagline: cmsTagline ? cmsTagline.value : DEFAULT_PROFILE.lawyerTagline,
        barEnrollment: cmsEnrolment ? cmsEnrolment.value : DEFAULT_PROFILE.barEnrollment,
        barCOP: cmsCOP ? cmsCOP.value : DEFAULT_PROFILE.barCOP,
        avatarSrc: selectedAvatar
      };

      localStorage.setItem("mayalin_profile_cfg", JSON.stringify(updated));
      applyProfile(updated);
      closeDrawer();
    });
  }

  // Reset button
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      if (confirm("Reset to default profile values?")) {
        localStorage.removeItem("mayalin_profile_cfg");
        applyProfile(DEFAULT_PROFILE);
        populateInputs(DEFAULT_PROFILE);
        closeDrawer();
      }
    });
  }

  function loadProfile() {
    try {
      const data = localStorage.getItem("mayalin_profile_cfg");
      return data ? { ...DEFAULT_PROFILE, ...JSON.parse(data) } : DEFAULT_PROFILE;
    } catch {
      return DEFAULT_PROFILE;
    }
  }

  function populateInputs(cfg) {
    if (cmsName) cmsName.value = cfg.lawyerFullName;
    if (cmsDegree) cmsDegree.value = cfg.lawyerDegreeSuffix;
    if (cmsDesignation) cmsDesignation.value = cfg.lawyerDesignationFull;
    if (cmsTagline) cmsTagline.value = cfg.lawyerTagline;
    if (cmsEnrolment) cmsEnrolment.value = cfg.barEnrollment;
    if (cmsCOP) cmsCOP.value = cfg.barCOP;
    selectedAvatar = cfg.avatarSrc || DEFAULT_PROFILE.avatarSrc;
  }

  function applyProfile(cfg) {
    document.querySelectorAll("[data-custom-key]").forEach(el => {
      const key = el.getAttribute("data-custom-key");
      if (cfg[key] !== undefined) {
        el.textContent = cfg[key];
      }
    });

    const heroAvatar = document.getElementById("hero-avatar-img");
    if (heroAvatar && cfg.avatarSrc) {
      heroAvatar.src = cfg.avatarSrc;
    }
  }
}

function escapeHTML(str) {
  return str.replace(/[&<>'"]/g, 
    tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
  );
}
