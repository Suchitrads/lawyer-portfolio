import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeSection } from './sections/Home';
import { AboutSection } from './sections/About';
import { ExpertiseSection } from './sections/Expertise';
import { EducationSection } from './sections/Education';
import { ExperienceSection } from './sections/Experience';
import { CredentialsSection } from './sections/Credentials';
import { AchievementsSection } from './sections/Achievements';
import { PublicationsSection } from './sections/Publications';
import { ContactSection } from './sections/Contact';
import { CertificateModal } from './components/CertificateModal';
import { ConsultationModal } from './components/ConsultationModal';
import { ArrowUp } from 'lucide-react';

export const App: React.FC = () => {
  const [isCertModalOpen, setIsCertModalOpen] = useState(false);
  const [isConsultModalOpen, setIsConsultModalOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#111111] flex flex-col font-sans selection:bg-[#111111] selection:text-[#FFFFFF]">
      
      {/* Scroll Progress Indicator Line */}
      <div
        className="scroll-progress-line"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
      />

      {/* Sticky Navigation */}
      <Navbar onOpenConsultation={() => setIsConsultModalOpen(true)} />

      {/* Main 9 Editorial Sections Exactly As Specified */}
      <main className="flex-1">
        {/* PAGE 01 — HOME / LANDING */}
        <HomeSection />

        {/* PAGE 02 — ABOUT ME */}
        <AboutSection />

        {/* PAGE 03 — AREAS OF EXPERTISE */}
        <ExpertiseSection />

        {/* PAGE 04 — EDUCATION */}
        <EducationSection />

        {/* PAGE 05 — PROFESSIONAL EXPERIENCE */}
        <ExperienceSection />

        {/* PAGE 06 — LICENCES & CERTIFICATIONS */}
        <CredentialsSection onViewCertificates={() => setIsCertModalOpen(true)} />

        {/* PAGE 07 — ACHIEVEMENTS & MILESTONES */}
        <AchievementsSection />

        {/* PAGE 08 — RESEARCH & PUBLICATIONS */}
        <PublicationsSection />

        {/* PAGE 09 — CONTACT */}
        <ContactSection />
      </main>

      {/* Editorial Footer */}
      <Footer />

      {/* Interactive Modal Dialogs (Modern Web Guidance Compliant) */}
      <CertificateModal
        isOpen={isCertModalOpen}
        onClose={() => setIsCertModalOpen(false)}
      />

      <ConsultationModal
        isOpen={isConsultModalOpen}
        onClose={() => setIsConsultModalOpen(false)}
      />

      {/* Back to top floating button */}
      <button
        type="button"
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-40 w-10 h-10 rounded-full bg-[#111111] text-[#FFFFFF] flex items-center justify-center shadow-lg transition-all duration-200 cursor-pointer ${
          showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3 pointer-events-none'
        }`}
        aria-label="Back to top"
      >
        <ArrowUp size={16} />
      </button>

    </div>
  );
};
