import React, { useEffect, useRef, useState } from 'react';
import { X, Calendar, Clock, Check } from 'lucide-react';
import { portfolioConfig } from '../config/portfolio';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    area: 'civil',
    date: '',
    timeSlot: 'morning',
    notes: '',
  });

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      setSubmitted(false);
      if (!dialog.open) {
        dialog.showModal();
      }
    } else {
      if (dialog.open) {
        dialog.close();
      }
    }
  }, [isOpen]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (
      e.clientX < rect.left ||
      e.clientX > rect.right ||
      e.clientY < rect.top ||
      e.clientY > rect.bottom
    ) {
      onClose();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <dialog
      ref={dialogRef}
      onCancel={onClose}
      onClick={handleBackdropClick}
      className="editorial-modal"
      aria-labelledby="consultation-modal-title"
    >
      <div className="flex items-center justify-between p-5 border-b border-[#E5E5E5] bg-[#FFFFFF]">
        <div>
          <h2 id="consultation-modal-title" className="font-serif text-xl text-[#111111]">
            Schedule a Legal Consultation
          </h2>
          <span className="text-xs text-[#777777] font-mono">
            Chambers of Aarohi Desai · High Court Practice
          </span>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="p-1.5 hover:bg-[#F1F1F1] rounded text-[#111111] transition-colors cursor-pointer"
          aria-label="Close Consultation Modal"
        >
          <X size={18} />
        </button>
      </div>

      <div className="p-6 bg-[#FAFAFA] max-h-[75vh] overflow-y-auto">
        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#111111] text-white flex items-center justify-center mx-auto">
              <Check size={24} />
            </div>
            <h3 className="font-serif text-2xl text-[#111111]">Consultation Request Logged</h3>
            <p className="text-xs sm:text-sm text-[#777777] max-w-md mx-auto leading-relaxed">
              Thank you, <strong>{formData.name || 'Counsel'}</strong>. Your consultation preferences have been recorded. Chambers staff will contact you via email at <strong>{formData.email}</strong> to confirm docket clearance and consultation time.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-4 bg-[#111111] text-[#FFFFFF] px-6 py-2.5 text-xs font-semibold uppercase tracking-wider cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
            <div className="p-3 bg-[#F1F1F1] border border-[#E5E5E5] text-xs text-[#777777] leading-relaxed">
              <strong>Notice Regarding Privilege:</strong> General consultation intake is preliminary. Please do not submit privileged secrets or original case files through web forms.
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-mono uppercase text-[#111111] font-semibold mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Chandra"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#FFFFFF] border border-[#E5E5E5] text-[#111111] focus:outline-none focus:border-[#111111]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase text-[#111111] font-semibold mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="ramesh@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#FFFFFF] border border-[#E5E5E5] text-[#111111] focus:outline-none focus:border-[#111111]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-mono uppercase text-[#111111] font-semibold mb-1">
                  Contact Phone *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765-XXXXX"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#FFFFFF] border border-[#E5E5E5] text-[#111111] focus:outline-none focus:border-[#111111]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase text-[#111111] font-semibold mb-1">
                  Practice Area *
                </label>
                <select
                  value={formData.area}
                  onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#FFFFFF] border border-[#E5E5E5] text-[#111111] focus:outline-none focus:border-[#111111]"
                >
                  {portfolioConfig.expertise.items.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.title}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-mono uppercase text-[#111111] font-semibold mb-1">
                  Preferred Date
                </label>
                <div className="relative">
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#FFFFFF] border border-[#E5E5E5] text-[#111111] focus:outline-none focus:border-[#111111]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase text-[#111111] font-semibold mb-1">
                  Time Preference
                </label>
                <select
                  value={formData.timeSlot}
                  onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#FFFFFF] border border-[#E5E5E5] text-[#111111] focus:outline-none focus:border-[#111111]"
                >
                  <option value="morning">Morning (10:00 — 12:30 IST)</option>
                  <option value="afternoon">Afternoon (14:00 — 16:30 IST)</option>
                  <option value="evening">Evening (17:00 — 18:30 IST)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-mono uppercase text-[#111111] font-semibold mb-1">
                Brief Non-Confidential Matter Summary
              </label>
              <textarea
                rows={3}
                placeholder="Brief summary of matter, forum, and urgency..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-[#FFFFFF] border border-[#E5E5E5] text-[#111111] focus:outline-none focus:border-[#111111] resize-y"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-[#111111] text-[#FFFFFF] py-3 text-xs font-semibold uppercase tracking-wider hover:bg-[#333333] transition-colors cursor-pointer"
              >
                Submit Consultation Request
              </button>
            </div>
          </form>
        )}
      </div>
    </dialog>
  );
};
