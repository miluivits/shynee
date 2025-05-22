import Loading from '../components/Loading/Loading';
import { useState } from 'react';
import './Árak.css';

export default function Árak() {
  const [loading, setLoading] = useState(true);

  if(loading) return <Loading/>

  return <div className="arak-container"
  >Árak.
  </div>;
}