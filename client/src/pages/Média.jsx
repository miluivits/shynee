import Loading from '../components/Loading/Loading';
import './Média.css';
import { useState } from 'react';

export default function Média() {
   const [loading, setLoading] = useState(false);
  
    if(loading) return <Loading/>

  return <div className="media-container">
    Média oldal – képek, videók, stb.
    </div>;
}