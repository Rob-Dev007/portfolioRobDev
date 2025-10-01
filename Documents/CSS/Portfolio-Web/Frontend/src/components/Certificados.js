import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn } from "../variants";
import { getCertificates } from "../services/data/getCertificates";
import { useTranslation } from "react-i18next";
import MotionWrapper from "../utils/motionWrappers";

const Certificados = () => {

  const certificates = getCertificates();
  const [selected, setSelected] = useState(null);
  
  const { t } = useTranslation();

  const handleSelect = (cert) => ()=>{
    setSelected(cert);
  }

  return (
    <section className="section my-24" id="certificados">
      <div className="container mx-auto">
        <motion.h2
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView={'show'}
          transition={{ duration: 0.6 }}
          viewport={{once: false, amount: 0.3}}
          className="h2 leading-tight text-accent font-bold mb-6"
        >
          {t("certification")}
        </motion.h2>

        <motion.p
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView={'show'}
          transition={{ duration: 0.6 }}
          viewport={{once: false, amount: 0.3}}
          className="max-w-md mb-12"
        >
            {t("certificationDescription")}
        </motion.p>

        {/* Grid de certificados */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {certificates.map((cert) => (
            <MotionWrapper
              key={cert.id}
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer rounded-xl overflow-hidden shadow-lg bg-white/5"
              onClick={handleSelect(cert)}
              variants={fadeIn('right', 0.3)}
              transition={{ duration: 0.6 }}
              viewport={{once: false, amount: 0.3}}
            >
              <img
                src={cert.src}
                alt={cert.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-4 text-center text-sm font-medium">{cert.title}</div>
            </MotionWrapper>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selected && (
            <motion.div
              className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="relative bg-white rounded-2xl overflow-hidden max-w-3xl w-full shadow-2xl"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={selected.src}
                  alt={selected.title}
                  loading="lazy"
                  className="w-full h-auto"
                />
                <button
                  onClick={handleSelect(null)}
                  className="absolute top-3 right-3 bg-black/70 text-white px-3 py-1 rounded-lg hover:bg-black transition"
                >
                  ✕
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Certificados;

