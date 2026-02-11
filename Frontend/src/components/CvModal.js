'use client'
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

const ModalCV = ({ isOpen, onClose }) => {

  // Cerrar con ESC
  useEffect(() => {
    if(!isOpen) return;

    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);

    // Bloquear scroll
    document.body.style.overflow = isOpen ? "hidden" : "auto";

    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center 
                     bg-black/70 backdrop-blur-xl"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 40 }}
            transition={{ type: "spring", stiffness: 120, damping: 18 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-[95%] max-w-5xl h-[85vh] 
                       rounded-3xl 
                       bg-white/70 dark:bg-neutral-900/80 
                       backdrop-blur-xl 
                       shadow-[0_20px_60px_rgba(0,0,0,0.4)]
                       border border-white/10 
                       overflow-hidden"
          >
            {/* Header */}
            <div className="flex justify-between items-center px-6 py-4 border-b border-white/10">
              <h3 className="text-lg font-semibold tracking-wide">
                Curriculum Vitae
              </h3>
              <button
                onClick={onClose}
                className="text-sm px-3 py-1 rounded-full 
                           hover:bg-black/10 dark:hover:bg-white/10 
                           transition"
              >
                Cerrar ✕
              </button>
            </div>

            {/* Preview */}
            <iframe
              src="/Roberto_Paredes_Fullstack_Developer.pdf"
              className="w-full h-[calc(85vh-120px)]"
              title="CV Preview"
            />

            {/* Footer */}
            <div className="flex justify-end px-6 py-1 border-t border-white/10">
              <a
                href="/Roberto_Paredes_FullStack_Developer.pdf"
                download="Roberto_Paredes_FullStack_Developer.pdf"
                className="px-6 py-2 rounded-full 
                           bg-gradient-to-r from-indigo-500 to-fuchsia-500 
                           text-white font-medium 
                           shadow-lg hover:scale-105 transition"
              >
                Descargar CV
              </a>
            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModalCV;
