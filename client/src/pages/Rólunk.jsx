import React, { useState } from 'react';
import IntroText from "../components/IntroText";
import Loading from "../components/Loading/Loading";
import Gallery from '../components/Gallery';
import kep1 from '../images/kep1.png';
import kep2 from '../images/kep2.png';
import "./Rólunk.css";

export default function Rólunk() {
  const [loading, setLoading] = useState(false);

  if (loading) return <Loading />;

  const galleryImages = [
    { src: kep1, alt: 'Kép 1' },
    { src: kep2, alt: 'Kép 2' }
  ];

  return (
    <div className="rolunk-container">
      <section className="intro-section">
        <IntroText />
      </section>

      <section className="gallery-section">
        <h2 className="gallery-title">Galéria</h2>
        <Gallery images={galleryImages} />
      </section>
    </div>
  );
}
