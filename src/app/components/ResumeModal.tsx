import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, X, FileText } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Usman_Zafar_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Close modal after download
    setTimeout(() => onClose(), 500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            className="relative bg-gradient-to-br from-slate-800/95 to-emerald-900/20 backdrop-blur-xl rounded-3xl p-8 border border-emerald-800/30 max-w-2xl w-full mx-4 shadow-2xl"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 text-slate-400 hover:text-white hover:bg-slate-700/50 rounded-full transition-all duration-200"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Header */}
            <div className="text-center mb-8">
              <motion.h2 
                className="text-3xl font-bold mb-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  Download Resume
                </span>
              </motion.h2>
              <motion.p 
                className="text-slate-400 text-lg"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Click below to download my professional resume
              </motion.p>
            </div>

            {/* Resume Download Button */}
            <div className="flex justify-center">
              <motion.button
                onClick={handleDownload}
                className="group relative bg-gradient-to-br from-slate-800/50 to-slate-700/30 rounded-2xl p-8 border border-slate-600/30 hover:border-emerald-500/50 transition-all duration-300 hover:scale-[1.02] text-center w-full max-w-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex flex-col items-center gap-4">
                  {/* Icon */}
                  <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl p-4 text-white group-hover:scale-110 transition-transform duration-200">
                    <FileText className="w-10 h-10" />
                  </div>
                  
                  {/* Content */}
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                      Professional Resume
                    </h3>
                    <p className="text-slate-400 mb-4 group-hover:text-slate-300 transition-colors">
                      Full experience, skills, and education details
                    </p>
                    
                    {/* Download Button */}
                    <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white rounded-lg font-semibold transition-all duration-200 group-hover:shadow-lg">
                      <Download className="w-5 h-5 mr-2" />
                      Download PDF
                    </div>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-teal-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ResumeModal;