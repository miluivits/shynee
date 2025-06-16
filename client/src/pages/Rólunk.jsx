import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import IntroText from "../components/IntroText";
import Loading from "../components/Loading/Loading";
import kep1 from '../images/kep1.png';
import kep2 from '../images/kep2.png';
import "./Rólunk.css";

export default function Rólunk() {
  const [loading] = useState(false);
  const [showImages, setShowImages] = useState(false);

  if (loading) return <Loading />;

  const imagesVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 1.2,
        ease: "easeOut"
      }
    }
  };

  const imageItemVariants = {
  hidden: { opacity: 0, y: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 2,
      ease: [0.25, 0.1, 0.25, 1] // cubic-bezier: finomabb
    }
  }
};


  const lineVariants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.5 }
    }
  };

  return (
    <div className="rolunk-container">
      <section className="intro-section">
        <IntroText onComplete={() => setShowImages(true)} />
      </section>

      <AnimatePresence>
        {showImages && (
          <>
            <motion.div
              className="divider-line"
              initial="hidden"
              animate="visible"
              variants={lineVariants}
            />
            <motion.section
              className="images-row"
              variants={imagesVariants}
              initial="hidden"
              animate="visible"
            >
              {[kep1, kep2].map((src, i) => (
                <motion.img
                  key={i}
                  src={src}
                  alt={`Kép ${i + 1}`}
                  className="full-image"
                  variants={imageItemVariants}
                  whileHover={{ scale: 1.01 }}
                />
              ))}
            </motion.section>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
