import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import video from "../videos/video1.mp4";
import poster from "../images/kep2.png";
import kep1 from "../images/kep1.png";
import kep2 from "../images/kep2.png";
import kep3 from "../images/kep3.png";
import shynee from "../images/shyneeindex.png";
import "./Rólunk.css";

export default function Rólunk() {
  const [contentVisible, setContentVisible] = useState(false);
  const [overlayVisible, setOverlayVisible] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [showReplay, setShowReplay] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const videoRef = useRef(null);

  const motto = "Minőség. Szenvedély. Megbízhatóság.";

  const imageData = [
    { image: shynee, text: "Ez az első kép szövege – testreszabható." },
    { image: kep2, text: "Ez a második képhez tartozó egyedi leírás." },
    { image: kep3, text: "Harmadik képszöveg, amit külön állíthatsz." },
  ];

  useEffect(() => {
    // iOS detektálás
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    setIsIOS(/iPad|iPhone|iPod/.test(userAgent));
  }, []);

  const handleCanPlay = () => {
    setContentVisible(true);
    setVideoLoaded(true);
    setOverlayVisible(false);
  };

  const handleFullscreen = () => {
    const video = videoRef.current;
    if (!video) return;

    setShowReplay(false);

    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.webkitEnterFullscreen) {
      video.webkitEnterFullscreen();
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) {
      video.msRequestFullscreen();
    } else {
      alert("A fullscreen nem támogatott ezen az eszközön.");
    }
  };

  const handleReplay = () => {
    const video = videoRef.current;
    if (video) {
      video.currentTime = 0;
      video.play();
      setShowReplay(false);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const resumePlayback = () => {
      setShowReplay(true);
    };

    if (isIOS) {
      video.addEventListener("webkitendfullscreen", resumePlayback);
    }

    document.addEventListener("fullscreenchange", resumePlayback);
    document.addEventListener("webkitfullscreenchange", resumePlayback);
    document.addEventListener("MSFullscreenChange", resumePlayback);

    return () => {
      if (isIOS) {
        video.removeEventListener("webkitendfullscreen", resumePlayback);
      }
      document.removeEventListener("fullscreenchange", resumePlayback);
      document.removeEventListener("webkitfullscreenchange", resumePlayback);
      document.removeEventListener("MSFullscreenChange", resumePlayback);
    };
  }, [isIOS]);

  return (
    <div className="rolunk-container">
      <section className="hero-rolunk-section">
        <div className="video-box">
          <motion.video
            ref={videoRef}
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

          <button
            className="video-control-btn fullscreen-btn"
            onClick={handleFullscreen}
            aria-label="Fullscreen"
          >
            ⛶
          </button>

          {/* Replay gomb csak iOS-en */}
          {isIOS && showReplay && (
            <button
              className="video-control-btn replay-btn"
              onClick={handleReplay}
              aria-label="Replay"
            />
          )}

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
            animate={{ opacity: [0, 1, 0], y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            ↓
          </motion.div>
        </div>
      </section>

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
