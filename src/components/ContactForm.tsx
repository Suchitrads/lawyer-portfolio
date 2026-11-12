import React, { useState } from 'react';
import { ArrowUpRight, ChevronDown } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: 'error', message: 'Please complete your name, email, and message.' });
      return;
    }

    setIsSubmitting(true);
    setStatus(null);

    // Simulate dispatch to chambers
    setTimeout(() => {
      setIsSubmitting(false);
      const refId = 'AD-' + Math.floor(1000 + Math.random() * 9000);
      setStatus({
        type: 'success',
        message: `Thank you, ${formData.name}. Your enquiry has been received (Ref: ${refId}). Adv. Aarohi Desai will review and respond shortly.`,
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 900);
  };

  return (
    <div className="bg-[#F1F1F1] rounded-2xl p-6 sm:p-8">
      <form onSubmit={handleSubmit} className="space-y-3.5">
        
        {/* Your Name */}
        <div>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full px-4 py-3 bg-[#FFFFFF] rounded-lg text-sm text-[#111111] placeholder:text-[#888888] border-0 focus:ring-1 focus:ring-[#111111] focus:outline-none transition-all shadow-2xs"
          />
        </div>

        {/* Your Email */}
        <div>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full px-4 py-3 bg-[#FFFFFF] rounded-lg text-sm text-[#111111] placeholder:text-[#888888] border-0 focus:ring-1 focus:ring-[#111111] focus:outline-none transition-all shadow-2xs"
          />
        </div>

        {/* Subject Select */}
        <div className="relative">
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-[#FFFFFF] rounded-lg text-sm text-[#111111] border-0 focus:ring-1 focus:ring-[#111111] focus:outline-none transition-all appearance-none shadow-2xs pr-10 cursor-pointer"
          >
            <option value="" disabled className="text-[#888888]">
              Subject
            </option>
            <option value="Civil Dispute Consultation">⚖️ Civil Dispute Consultation</option>
            <option value="Criminal Law Representation">🛡️ Criminal Law Representation</option>
            <option value="Corporate & Commercial Advisory">💼 Corporate & Commercial Advisory</option>
            <option value="Family / Matrimonial Settlement">👨‍👩‍👧 Family / Matrimonial Settlement</option>
            <option value="Intellectual Property Protection">💡 Intellectual Property Protection</option>
            <option value="Constitutional Writ Petition">📜 Constitutional Writ Petition</option>
            <option value="Other Legal Enquiry">📋 Other Legal Enquiry</option>
          </select>
          <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-[#777777]">
            <ChevronDown size={16} />
          </div>
        </div>

        {/* Your Message */}
        <div>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="w-full px-4 py-3 bg-[#FFFFFF] rounded-lg text-sm text-[#111111] placeholder:text-[#888888] border-0 focus:ring-1 focus:ring-[#111111] focus:outline-none transition-all resize-none shadow-2xs"
          />
        </div>

        {/* Status message */}
        {status && (
          <div
            className={`p-3 rounded-lg text-xs font-sans ${
              status.type === 'success'
                ? 'bg-[#FFFFFF] border border-[#111111] text-[#111111]'
                : 'bg-[#FFFFFF] border border-red-500 text-red-600'
            }`}
          >
            {status.message}
          </div>
        )}

        {/* Solid Black Pill Submit Button with Emoji */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-[#111111] text-[#FFFFFF] hover:bg-[#333333] transition-all px-8 py-3 rounded-full text-xs sm:text-sm font-medium tracking-wide flex items-center space-x-2 cursor-pointer shadow-xs hover:shadow disabled:opacity-50"
          >
            <span>✉️ {isSubmitting ? 'Sending...' : 'Send Message'}</span>
            <ArrowUpRight size={15} />
          </button>
        </div>

      </form>
    </div>
  );
};
