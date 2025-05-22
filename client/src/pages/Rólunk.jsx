import IntroText from "../components/IntroText";
import Loading from "../components/Loading/Loading";
import "./Rólunk.css";
import { useState } from 'react';


export default function Rólunk() {
   const [loading, setLoading] = useState(false);
  
    if(loading) return <Loading/>

  return (
    <div className="rolunk-container">
        <IntroText/>
    </div>
  );
}