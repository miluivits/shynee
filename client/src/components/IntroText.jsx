import { motion } from "framer-motion";
import "./IntroText.css";

const text = `Ez nem csak autómosás. Ez törődés.`;

export default function IntroText() {
  const chars = Array.from(text);

  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 2,       // 2 másodperc várakozás indulás előtt
        staggerChildren: 0.03,  // 30ms delay karakterenként
      },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { ease: "easeOut" } },
  };

  return (
    <motion.div
      className="intro-typewriter"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {chars.map((char, i) => (
        <motion.span key={i} variants={child}>
          {char === "\n" ? <br /> : char}
        </motion.span>
      ))}
    </motion.div>
  );
}
