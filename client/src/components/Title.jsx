import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import './Title.css';

const subText = "Burda & Co.";
const typingSpeed = 120;

export default function Title() {
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    let currentIndex = 0;

    const typeNextChar = () => {
      console.log("currentIndex:", currentIndex, "char:", subText[currentIndex]);
      if (currentIndex < subText.length) {
        const nextChar = subText[currentIndex];
        if (nextChar === undefined) {
          console.error("Undefined character at index", currentIndex);
          return;
        }
        setTypedText((prev) => prev + nextChar);
        currentIndex++;
        setTimeout(typeNextChar, typingSpeed);
      }
    };

    const timeoutId = setTimeout(typeNextChar, 2700);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="title-wrapper">
      <motion.h1
        className="home-title"
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          duration: 2.5,
          ease: [0.42, 0, 0.58, 1],
          delay: 0.3,
        }}
      >
        <motion.span
          className="highlighted-text"
          initial={{ letterSpacing: '0em', opacity: 0 }}
          animate={{ letterSpacing: '0.15em', opacity: 1 }}
          transition={{
            delay: 1.0,
            duration: 1.8,
            ease: "easeInOut",
          }}
        >
          SHYNEE
        </motion.span>
      </motion.h1>

      <div className="sub-title" style={{ marginTop: '0.2em', fontFamily: "'Playfair Display', serif", fontSize: 'clamp(0.8rem, 3vw, 2rem)'}}>
        <span className="typing-text">
          {typedText}
          <span className="cursor">|</span>
        </span>
      </div>
    </div>
  );
}
