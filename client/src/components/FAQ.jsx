import React, { useState } from 'react';
import './FAQ.css';

const faqs = [
  {
    question: 'Milyen szolgáltatásokat kínál az autókozmetika?',
    answer: 'Teljes körű külső-belső tisztítás, kézi mosás, polírozás, viaszolás, kerámia bevonat, kárpittisztítás és szagmentesítés.'
  },
  {
    question: 'Kell időpontot foglalni?',
    answer: 'Igen, kérjük mindig foglalj előre időpontot online vagy telefonon, hogy biztosítani tudjuk a helyed.'
  },
  {
    question: 'Mennyi ideig tart egy kezelés?',
    answer: 'A szolgáltatás típusától függően általában 1,5 - 4 órát vesz igénybe.'
  },
  {
    question: 'Milyen autók jöhetnek?',
    answer: 'Személyautók, SUV-ok, furgonok – minden típust tisztítunk, akár új, akár használt.'
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-wrapper">
      <h2 className="faq-heading">FAQ</h2>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-block ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggle(index)}
          >
            <div className="faq-question">
              <span>{faq.question}</span>
              <span className={`arrow ${activeIndex === index ? 'rotated' : ''}`}>⌄</span>
            </div>
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
