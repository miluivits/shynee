import Loading from "../components/Loading/Loading";
import "./Rólunk.css";
import { useState } from 'react';


export default function Rólunk() {
   const [loading, setLoading] = useState(true);
  
    if(loading) return <Loading/>

  return (
    <div className="rolunk-container">
        <h1>Welcome to Rólunk</h1>
    </div>
  );
}