import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import kep1 from "../images/kep1.png";
import kep2 from "../images/kep2.png";
import kep3 from "../images/kep3.png";
import video from "../videos/video1.mp4";
import poster from "../images/kep2.png"; // Előnézeti kép, készíts vagy cseréld!
import "./Rólunk.css";

export default function Rólunk() {
  const [contentVisible, setContentVisible] = useState(false);
  const [overlayVisible, setOverlayVisible] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);

  const images = [kep1, kep2, kep3];
  const motto = "Minőség. Szenvedély. Megbízhatóság.";

  const handleCanPlay = () => {
    setContentVisible(true);
    setVideoLoaded(true);
    setOverlayVisible(false);
  };

  return (
    <div className="rolunk-container">
      <section className="hero-rolunk-section">
        <div className="video-box">
          <motion.video
            className="hero-video"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata" // csak metaadatokat tölt be előre
            poster={poster} // előnézeti kép
            onCanPlay={handleCanPlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: videoLoaded ? 1 : 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <source src={video} type="video/mp4" />
            A böngésződ nem támogatja a videó lejátszást.
          </motion.video>

          {/* Overlay a videó felett */}
          <AnimatePresence>
            {overlayVisible && (
              <motion.div
                className="video-loading-overlay"
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            )}
          </AnimatePresence>
        </div>

        <div className="hero-overlay">
          <motion.h1
            className="hero-motto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {motto}
          </motion.h1>

          <motion.div
            className="scroll-indicator"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 0],
              y: [0, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            ↓
          </motion.div>
        </div>
      </section>

      <section className="content-section">
        <AnimatePresence>
          {contentVisible &&
            images.map((img, index) => (
              <motion.div
                className={`image-text-pair ${
                  index % 2 === 0 ? "left-image" : "right-image"
                }`}
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: index * 0.5 + 0.8 }}
              >
                <motion.img
                  src={img}
                  alt={`Kép ${index + 1}`}
                  className="side-image"
                  whileHover={{ scale: 1.015 }}
                />
                <p className="image-caption">
                  Ez a szöveg kapcsolódik a képhez {index + 1}.
                </p>
              </motion.div>
            ))}
        </AnimatePresence>
      </section>
    </div>
  );
}
