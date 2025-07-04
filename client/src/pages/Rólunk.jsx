import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import kep1 from "../images/kep1.png";
import kep2 from "../images/kep2.png";
import kep3 from "../images/kep3.png";
import video from "../videos/video1.mp4";
import poster from "../images/kep2.png";
import "./Rólunk.css";

export default function Rólunk() {
  const [contentVisible, setContentVisible] = useState(false);
  const [overlayVisible, setOverlayVisible] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);

  // 🔁 ÚJ: képek szövegekkel
  const imageData = [
    {
      image: kep1,
      text: "Ez az első kép szövege – testreszabható.",
    },
    {
      image: kep2,
      text: "Ez a második képhez tartozó egyedi leírás.",
    },
    {
      image: kep3,
      text: "Harmadik képszöveg, amit külön állíthatsz.",
    },
  ];

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
            preload="metadata"
            poster={poster}
            onCanPlay={handleCanPlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: videoLoaded ? 1 : 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <source src={video} type="video/mp4" />
            A böngésződ nem támogatja a videó lejátszást.
          </motion.video>

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
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
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

      {/* Átmenet hullámmal */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <svg
          className="section-divider"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 150"
          preserveAspectRatio="none"
        >
          <path
            fill="#1e252b"
            d="M0,64L80,90.7C160,117,320,171,480,176C640,181,800,139,960,112C1120,85,1280,75,1360,69.3L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>
      </motion.div>

      <section className="content-section">
        <AnimatePresence>
          {contentVisible &&
            imageData.map((item, index) => (
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
                  src={item.image}
                  alt={`Kép ${index + 1}`}
                  className="side-image"
                  whileHover={{ scale: 1.015 }}
                />
                <p className="image-caption">{item.text}</p>
              </motion.div>
            ))}
        </AnimatePresence>
      </section>
    </div>
  );
}
