import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Tfek from './modules/tfek/Tfek.jsx';
import OhMyFood from './modules/ohMyFood/OhMyFood.jsx';
import Govetia from './modules/govetia/Govetia.jsx';
import Tarawa from './modules/tarawa/Tarawa.tsx';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Govetia />} />
        <Route path="/tfek/*" element={<Tfek />} />
        <Route path="/tarawa" element={<Tarawa />} />
        <Route path="/ohMyFood" element={<OhMyFood />} />
        
      </Routes>
    </Router>
  );
}

export default App;

