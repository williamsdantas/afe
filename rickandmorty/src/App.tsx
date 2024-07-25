import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Personagem from './pages/personagem/personagem';
import Home from './pages/home/Home';
import {Wrapper} from './shared/wrapper/wrapper'
import Episodio from './pages/episodio/episodio';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Wrapper />}>
          <Route index element={<Home />} />
          <Route path="personagem" element={<Personagem />} />
          <Route path="episodio" element={<Episodio />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
