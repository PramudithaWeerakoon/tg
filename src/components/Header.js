import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Header.css';

const Header = () => {
  const { currentLanguage, changeLanguage, languages, t } = useLanguage();

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-section" style={{ display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
          <img src="/images/softlogic.png" alt="Softlogic Stockbrokers Logo" style={{ height: '38px', width: '38px', borderRadius: '8px', background: 'white' }} />
          <h1 className="app-title">{t('tradingTips')}</h1>
        </div>
        
        <div className="language-selector">
          <label htmlFor="language-select">{t('selectLanguage')}: </label>
          <select 
            id="language-select"
            value={currentLanguage} 
            onChange={(e) => changeLanguage(e.target.value)}
            className="language-dropdown"
          >
            {Object.entries(languages).map(([code, name]) => (
              <option key={code} value={code}>
                {name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header;
