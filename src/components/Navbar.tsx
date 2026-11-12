import React, { useState } from 'react';
import { portfolioConfig } from '../config/portfolio';
import { ArrowUpRight, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lawyer } = portfolioConfig;

  const navLinks = [
    { label: 'Home', href: '#home', emoji: '🏠' },
    { label: 'About', href: '#about', emoji: '👩‍⚖️' },
    { label: 'Expertise', href: '#expertise', emoji: '⚖️' },
    { label: 'Education', href: '#education', emoji: '🎓' },
    { label: 'Experience', href: '#experience', emoji: '💼' },
    { label: 'Achievements', href: '#achievements', emoji: '🏆' },
    { label: 'Contact', href: '#contact', emoji: '✉️' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#FAFAFA]/95 backdrop-blur-md border-b border-[#E5E5E5] transition-all">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
        
        {/* Minimal "A." Logo on the left */}
        <a 
          href="#home" 
          className="font-serif text-3xl font-normal tracking-tight text-[#111111] hover:opacity-80 transition-opacity"
          aria-label="Aarohi Desai Homepage"
        >
          {lawyer.brandLogo}
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-7 text-xs uppercase tracking-wider font-medium text-[#111111]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative py-1 text-[#111111] hover:text-[#777777] transition-colors flex items-center space-x-1"
            >
              <span>{link.label}</span>
            </a>
          ))}
        </nav>

        {/* Black Pill Consultation Button on the right with Calendar Emoji */}
        <div className="hidden sm:flex items-center">
          <button
            type="button"
            onClick={onOpenConsultation}
            className="bg-[#111111] text-[#FFFFFF] hover:bg-[#333333] transition-all px-5 py-2 rounded-full text-xs font-medium tracking-wide flex items-center space-x-1.5 cursor-pointer shadow-xs hover:shadow"
          >
            <span>📅 Consultation</span>
            <ArrowUpRight size={14} />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-[#111111] hover:bg-[#F1F1F1] rounded transition-colors"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#E5E5E5] bg-[#FFFFFF] px-6 py-5 space-y-4 shadow-lg">
          <nav className="flex flex-col space-y-3 text-xs uppercase tracking-wider font-medium text-[#111111]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 border-b border-[#F1F1F1] hover:text-[#777777] flex items-center space-x-2"
              >
                <span>{link.emoji}</span>
                <span>{link.label}</span>
              </a>
            ))}
          </nav>
          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenConsultation();
            }}
            className="w-full bg-[#111111] text-[#FFFFFF] py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-center flex items-center justify-center space-x-1.5"
          >
            <span>📅 Consultation</span>
            <ArrowUpRight size={14} />
          </button>
        </div>
      )}
    </header>
  );
};
