import Loading from '../components/Loading/Loading';
import { useState } from 'react';
import './Árak.css';
import Card from '../components/Card';

export default function Árak() {
  const [loading, setLoading] = useState(false);

  if (loading) return <Loading />;

  return (
    <div className="arak-container">
      <Card
        color="szurkeg"
        title="Basic"
        price="1.000 Ft"
        subtitle="Külső tisztítás"
        features={["Habos előmosás", "Kézi mosás", "Felni tisztítás", "Szárítás"]}
        buttonText="Foglalj most"
      />

      <Card
        color="arany"
        title="Prémium"
        price="2.000 Ft"
        subtitle="Külső + belső tisztítás"
        features={["Külső mosás", "Belső porszívózás", "Műanyagápolás", "Ablaktisztítás"]}
        buttonText="Prémium csomag"
      />

      <Card
        color="gold"
        title="Luxus"
        price="3.000 Ft"
        subtitle="Teljes prémium kezelés"
        features={["Teljes külső-belső tisztítás", "Bőrápolás", "Illatosítás", "Viaszolás", "Felnifényesítés"]}
        buttonText="Luxus élmény"
      />

    </div>
  );
}
