import { motion } from 'framer-motion';
import './Title.css';

export default function Title() {
  return (
    <motion.h1
      className="home-title"
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: 2.5,            // még lassabb megjelenés
        ease: [0.42, 0, 0.58, 1], // smooth ease-in-out
        delay: 0.3,
      }}
    >
      <motion.span
        className="highlighted-text"
        initial={{ letterSpacing: '0em', opacity: 0 }}
        animate={{ letterSpacing: '0.15em', opacity: 1 }}
        transition={{
          delay: 1.0,             // megvárja az első animációt + picit később kezd
          duration: 1.8,          // lassú, finom opacity változás
          ease: "easeInOut",
        }}
      >
        ILOVECOCKS
      </motion.span>
    </motion.h1>
  );
}
