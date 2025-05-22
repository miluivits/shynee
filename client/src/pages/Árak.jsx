import Loading from '../components/Loading/Loading';
import { useState } from 'react';
import './Árak.css';
import Card from '../components/Card';
import { motion } from 'framer-motion';

export default function Árak() {
  const [loading, setLoading] = useState(false);

  if (loading) return <Loading />;

  const cards = [
    {
      color: "silver",
      title: "Basic",
      price: "1.000 Ft",
      subtitle: "Külső tisztítás",
      features: ["Habos előmosás", "Kézi mosás", "Felni tisztítás", "Szárítás"],
      buttonText: "Foglalj most",
    },
    {
      color: "gold",
      title: "Prémium",
      price: "2.000 Ft",
      subtitle: "Külső + belső tisztítás",
      features: ["Külső mosás", "Belső porszívózás", "Műanyagápolás", "Ablaktisztítás"],
      buttonText: "Prémium csomag",
    },
    {
      color: "blue",
      title: "Luxus",
      price: "3.000 Ft",
      subtitle: "Teljes prémium kezelés",
      features: [
        "Teljes külső-belső tisztítás",
        "Bőrápolás",
        "Illatosítás",
        "Viaszolás",
        "Felnifényesítés",
      ],
      buttonText: "Luxus élmény",
    },
  ];

  return (
    <div className="arak-container">
      {cards.map((card, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.4,
            delay: i * 0.35,
            ease: [0.25, 1, 0.5, 1] // easeOutQuart-like
          }}
        >
          <Card {...card} />
        </motion.div>
      ))}
    </div>
  );
}
