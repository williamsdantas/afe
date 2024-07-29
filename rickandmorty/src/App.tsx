import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Personagem from './pages/personagem/personagem';
import Sobre from './pages/sobre/Sobre';
import { Wrapper } from './shared/wrapper/wrapper';
import Episodio from './pages/episodio/episodio';
import Localizacao from './pages/localizacao/localizacao';
import PersonagemDetalhes from './pages/personagem/personagemDetalhes';
import EpisodioDetalhes from './pages/episodio/episodioDetalhes';
import LocalizacaoDetalhes from './pages/localizacao/localizacaoDetalhes';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Wrapper />}>
          <Route index element={<Personagem />} />
          <Route path="personagem" element={<Personagem />} />
          <Route path="personagem/:id" element={<PersonagemDetalhes />} />
          <Route path="episodio" element={<Episodio />} />
          <Route path="/episodio/:id" element={<EpisodioDetalhes />} />
          <Route path="localizacao" element={<Localizacao />} />
          <Route path="/localizacao/:id" element={<LocalizacaoDetalhes />} />
          <Route path="sobre" element={<Sobre />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
