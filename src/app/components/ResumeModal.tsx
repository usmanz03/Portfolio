import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, X, FileText, Cpu } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const handleDownload = (resumeType: 'swe' | 'aiml') => {
    const fileName = resumeType === 'swe' ? 'sweresume.pdf' : 'aimlresume.pdf';
    const displayName = resumeType === 'swe' ? 'SWE_Resume_Usman_Zafar.pdf' : 'AIML_Resume_Usman_Zafar.pdf';
    
    const link = document.createElement('a');
    link.href = `/${fileName}`;
    link.download = displayName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Close modal after download
    setTimeout(() => onClose(), 500);
  };

  const resumeOptions = [
    {
      type: 'swe' as const,
      title: 'Software Engineering Resume',
      description: 'Focused on web development, mobile apps, and software engineering experience',
      icon: <FileText className="w-8 h-8" />,
      gradient: 'from-blue-500 to-purple-600',
      hoverGradient: 'hover:from-blue-600 hover:to-purple-700'
    },
    {
      type: 'aiml' as const,
      title: 'AI/ML Resume',
      description: 'Highlighting machine learning, data science, and AI research experience',
      icon: <Cpu className="w-8 h-8" />,
      gradient: 'from-emerald-500 to-teal-600',
      hoverGradient: 'hover:from-emerald-600 hover:to-teal-700'
    }
  ];

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
                  Choose Resume Type
                </span>
              </motion.h2>
              <motion.p 
                className="text-slate-400 text-lg"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Select the resume that best fits your needs
              </motion.p>
            </div>

            {/* Resume Options */}
            <div className="grid gap-6">
              {resumeOptions.map((option, index) => (
                <motion.button
                  key={option.type}
                  onClick={() => handleDownload(option.type)}
                  className={`group relative bg-gradient-to-br from-slate-800/50 to-slate-700/30 rounded-2xl p-6 border border-slate-600/30 hover:border-emerald-500/50 transition-all duration-300 hover:scale-[1.02] text-left w-full`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className={`bg-gradient-to-r ${option.gradient} rounded-xl p-3 text-white group-hover:scale-110 transition-transform duration-200`}>
                      {option.icon}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                        {option.title}
                      </h3>
                      <p className="text-slate-400 mb-4 group-hover:text-slate-300 transition-colors">
                        {option.description}
                      </p>
                      
                      {/* Download Button */}
                      <div className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${option.gradient} ${option.hoverGradient} text-white rounded-lg font-semibold transition-all duration-200 group-hover:shadow-lg`}>
                        <Download className="w-4 h-4 mr-2" />
                        Download Resume
                      </div>
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-teal-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.button>
              ))}
            </div>

            {/* Footer Note */}
            <motion.div 
              className="text-center mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <p className="text-slate-500 text-sm">
                Both resumes are optimized for different career paths and opportunities
              </p>
            </motion.div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ResumeModal;