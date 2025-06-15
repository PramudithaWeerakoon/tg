import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import tradingTipsData from '../data/tradingTipsData_new.json';
import './TradingTipsPage.css';

const TradingTipsPage = () => {
  const { currentLanguage, t } = useLanguage();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(currentLanguage === 'en' ? 'en-US' : 
                                   currentLanguage === 'si' ? 'si-LK' : 'ta-LK');
  };

  const categoryColors = {
    'Textiles': 'linear-gradient(45deg, #ff512f, #dd2476)',
    'Diversified Holdings': 'linear-gradient(45deg, #1e3c72, #2a5298)',
    'Manufacturing': 'linear-gradient(45deg, #f7971e, #ffd200)',
    'Conglomerate': 'linear-gradient(45deg, #11998e, #38ef7d)',
    'Export Manufacturing': 'linear-gradient(45deg, #2980b9, #6dd5fa)',
    'Renewable Energy': 'linear-gradient(45deg, #43cea2, #185a9d)'
    // Add more categories and colors as needed
  };

  return (
    <div className="trading-tips-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">{t('latestTips')}</h1>
          <p className="page-subtitle">
            {currentLanguage === 'en' && "Stay updated with our latest market insights and investment opportunities"}
            {currentLanguage === 'si' && "අපගේ නවතම වෙළඳපල තීක්ෂ්ණ බුද්ධිය සහ ආයෝජන අවස්ථා සමඟ යාවත්කාලීන වන්න"}
            {currentLanguage === 'ta' && "எங்கள் சமீபத்திய சந்தை நுண்ணறிவுகள் மற்றும் முதலீட்டு வாய்ப்புகளுடன் புதுப்பித்த நிலையில் இருங்கள்"}
          </p>
        </div>

        <div className="tips-grid">
          {tradingTipsData.map((tip) => (
            <div key={tip.id} className="tip-card">
              <div className="tip-image">                <img 
                  src={tip.image} 
                  alt={tip.title[currentLanguage]}                  onError={(e) => {
                    e.target.src = '/images/SSB-Logo.png';
                  }}                />
              </div>
              
              <div className="tip-content">
                <div className="tip-meta">
                  <span 
                    className="tip-category"
                    style={{ background: categoryColors[tip.category] || 'linear-gradient(45deg, #1e3c72, #2a5298)' }}
                  >
                    {tip.category}
                  </span>
                  <span className="tip-date">{formatDate(tip.publishDate)}</span>
                </div>
                
                <div className="tip-title-row" style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginBottom: '1rem'}}>
                  <h3 className="tip-title" style={{marginBottom: 0}}>{tip.title[currentLanguage]}</h3>
                </div>

                <p className="tip-summary">{tip.summary[currentLanguage]}</p>
                <div style={{flexGrow: 1}}></div>
                <Link to={`/tip/${tip.id}`} className="read-more-btn" style={{marginTop: 'auto',marginBottom:'10px', alignSelf: 'flex-start'}}>
                  {t('readMore')}
                </Link>
                <div className="tip-stats">
                  <div className="stat">
                    <span className="stat-label">{t('expectedReturn')}:</span>
                    <span className="stat-value">{tip.expectedReturn}</span>
                  </div>
                  <div className="stat">
                    <span className="stat-label">{t('timeFrame')}:</span>
                    <span className="stat-value">{tip.timeFrame}</span>
                  </div>
                  {tip.currentPrice && (
                    <div className="stat">
                      <span className="stat-label">Current Price:</span>
                      <span className="stat-value">{tip.currentPrice}</span>
                    </div>
                  )}
                  {tip.targetPrice && (
                    <div className="stat">
                      <span className="stat-label">Target Price:</span>
                      <span className="stat-value">{tip.targetPrice}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TradingTipsPage;
