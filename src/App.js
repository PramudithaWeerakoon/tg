import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import TradingTipsPage from './components/TradingTipsPage';
import TradingTipDetail from './components/TradingTipDetail';
import { LanguageProvider } from './context/LanguageContext';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <LanguageProvider>
      <Router basename="/TradingTip">
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<TradingTipsPage />} />
            <Route path="/tip/:id" element={<TradingTipDetail />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
