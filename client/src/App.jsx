import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home      from './pages/Home';
import Rendelés  from './pages/Rendelés';
import Rolunk    from './pages/Rólunk';
import Kapcsolat from './pages/Kapcsolat';
import Layout    from './components/Layout';
import 'normalize.css';

function App() {
  return (
    <Router>
      <Routes>

        <Route element={<Layout />}>
          <Route index       element={<Home />} />
          <Route path="rendeles"  element={<Rendelés />} />
          <Route path="rolunk"    element={<Rolunk />} />
          <Route path="kapcsolat" element={<Kapcsolat />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
