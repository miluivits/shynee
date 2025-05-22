import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/Home';
import Arak from './pages/Árak';
import Rolunk from './pages/Rólunk';
import Media from './pages/Média';
import Navbar from './components/Navbar/Navbar';
import Kapcsolat from './pages/Kapcsolat';
import 'normalize.css';


function App() {

  useEffect(() => {
    // Always reset scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/arak" element={<Arak />} />
        <Route path="/rolunk" element={<Rolunk />} />
        <Route path="/media" element={<Media />} />
        <Route path="/kapcsolat" element={<Kapcsolat/>}/>
      </Routes>
    </Router>
  );
}

export default App;