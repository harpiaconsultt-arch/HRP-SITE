import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LaudoEstrutural from './pages/LaudoEstrutural';
import PericiaJudicial from './pages/PericiaJudicial';
import Regularizacao from './pages/Regularizacao';
import VistoriaCautelar from './pages/VistoriaCautelar';
import BlogListPage from './pages/BlogListPage';
import BlogPostPage from './pages/BlogPostPage';
import WhatsAppFAB from './components/WhatsAppFAB';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/laudo-estrutural-barbacena" element={<LaudoEstrutural />} />
        <Route path="/assistente-tecnico-judicial" element={<PericiaJudicial />} />
        <Route path="/avcb-bombeiros-condominio" element={<Regularizacao />} />
        <Route path="/vistoria-cautelar-vizinhanca" element={<VistoriaCautelar />} />
        <Route path="/blog" element={<BlogListPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
      </Routes>
      <WhatsAppFAB />
      <BackToTop />
    </Router>
  );
}

export default App;