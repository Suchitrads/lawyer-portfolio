import React, { useEffect, useRef } from 'react';
import { portfolioConfig } from '../config/portfolio';
import { X, Download, CheckCircle } from 'lucide-react';

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ isOpen, onClose }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const { credentials } = portfolioConfig;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      if (!dialog.open) {
        dialog.showModal();
      }
    } else {
      if (dialog.open) {
        dialog.close();
      }
    }
  }, [isOpen]);

  // Light dismiss fallback
  const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const rect = dialog.getBoundingClientRect();
    const isOutside =
      e.clientX < rect.left ||
      e.clientX > rect.right ||
      e.clientY < rect.top ||
      e.clientY > rect.bottom;
    if (isOutside) {
      onClose();
    }
  };

  return (
    <dialog
      ref={dialogRef}
      onCancel={onClose}
      onClick={handleBackdropClick}
      className="editorial-modal"
      aria-labelledby="cert-modal-title"
    >
      <div className="flex items-center justify-between p-5 border-b border-[#E5E5E5] bg-[#FFFFFF]">
        <div className="flex items-center space-x-2">
          <CheckCircle size={18} className="text-[#111111]" />
          <div>
            <h2 id="cert-modal-title" className="font-serif text-lg text-[#111111]">
              Bar Council Registration Certificate
            </h2>
            <span className="text-[10px] font-mono uppercase text-[#777777]">
              Verified Regulatory Roll • [BCI/D/2021/XXXX]
            </span>
          </div>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="p-1.5 hover:bg-[#F1F1F1] rounded text-[#111111] transition-colors cursor-pointer"
          aria-label="Close Certificate Modal"
        >
          <X size={18} />
        </button>
      </div>

      <div className="p-6 bg-[#FAFAFA] max-h-[75vh] overflow-y-auto space-y-6">
        <div className="bg-[#FFFFFF] p-3 border border-[#E5E5E5] shadow-xs">
          <img
            src={credentials.certificateImage}
            alt="Official Certificate of Practice Document"
            className="w-full h-auto"
            width={800}
            height={560}
          />
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2 text-xs text-[#777777]">
          <div>
            <span className="font-semibold text-[#111111] block">Verification Status: Active Enrolment</span>
            <span className="text-[11px]">Enrolled under Section 24 of the Advocates Act with All-India Court Rights.</span>
          </div>

          <a
            href={credentials.certificateImage}
            download="Aarohi_Desai_Bar_Certificate.svg"
            className="bg-[#111111] text-[#FFFFFF] px-4 py-2 text-xs font-semibold uppercase tracking-wider flex items-center space-x-2 hover:bg-[#333333] transition-colors"
          >
            <Download size={13} />
            <span>Download Certificate</span>
          </a>
        </div>
      </div>
    </dialog>
  );
};
