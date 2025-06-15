import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import tradingTipsData from '../data/tradingTipsData_new.json';
import './TradingTipDetail.css';

const TradingTipDetail = () => {
  const { id } = useParams();
  const { currentLanguage, t } = useLanguage();
  
  // Scroll to top when component mounts or id changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  
  const tip = tradingTipsData.find(tip => tip.id === parseInt(id));

  if (!tip) {
    return (
      <div className="tip-detail-page">
        <div className="container">
          <div className="not-found">
            <h2>Trading tip not found</h2>
            <Link to="/" className="back-btn">{t('backToTips')}</Link>
          </div>
        </div>
      </div>
    );
  }
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
    <div className="tip-detail-page">
      <div className="container">
        <div className="navigation">
          <Link to="/" className="back-btn">
            ← {t('backToTips')}
          </Link>
        </div>

        <article className="tip-detail">
          <header className="tip-header">
            <div className="tip-image-container">              <img 
                src={tip.image} 
                alt={tip.title[currentLanguage]}                className="tip-detail-image"                onError={(e) => {
                  e.target.src = '/images/SSB-Logo.png';
                }}
              />
            </div>
            
            <div className="tip-header-content">
              <div className="tip-meta">
                <span 
                  className="tip-category"
                  style={{ background: categoryColors[tip.category] || 'linear-gradient(45deg, #1e3c72, #2a5298)' }}
                >
                  {tip.category}
                </span>
                <span className="tip-publish-date">
                  {t('publishedOn')}: {formatDate(tip.publishDate)}
                </span>
              </div>
              
              <h1 className="tip-detail-title">{tip.title[currentLanguage]}</h1>
              
              <div className="tip-summary-section">
                <p className="tip-detail-summary">{tip.summary[currentLanguage]}</p>
              </div>
            </div>
          </header>

          <div className="tip-body">
            <div className="tip-stats-detail">
              <div className="stats-grid">
                <div className="stat-item">                  <div className="stat-icon">📊</div>
                  <div className="stat-content">
                    <span className="stat-label">{t('category')}</span>
                    <span className="stat-value">{tip.category}</span>
                  </div>
                </div>
                
                <div className="stat-item">
                  <div className="stat-icon">💰</div>
                  <div className="stat-content">
                    <span className="stat-label">{t('expectedReturn')}</span>
                    <span className="stat-value">{tip.expectedReturn}</span>
                  </div>
                </div>
                
                <div className="stat-item">
                  <div className="stat-icon">⏰</div>
                  <div className="stat-content">
                    <span className="stat-label">{t('timeFrame')}</span>
                    <span className="stat-value">{tip.timeFrame}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="tip-content-section">
              <h2 className="section-title">{t('detailedAnalysis')}</h2>
              <div className="tip-detailed-content">
                <p>{tip.content[currentLanguage]}</p>
              </div>
            </div>

            <div className="disclaimer">
              <h3>
                {currentLanguage === 'en' && 'Disclaimer'}
                {currentLanguage === 'si' && 'අවවාදය'}
                {currentLanguage === 'ta' && 'மறுப்பு'}
              </h3>
              <p>
                {currentLanguage === 'en' && 'This information is for educational purposes only and should not be considered as financial advice. Please consult with a qualified financial advisor before making any investment decisions. Past performance does not guarantee future results.'}
                {currentLanguage === 'si' && 'මෙම තොරතුරු අධ්‍යාපනික අරමුණු සඳහා පමණක් වන අතර මූල්‍ය උපදේශ ලෙස නොසැලකිය යුතුය. කිසියම් ආයෝජන තීරණයක් ගැනීමට පෙර සුදුසුකම් ලත් මූල්‍ය උපදේශකයෙකුගෙන් උපදේශ ලබා ගන්න. අතීත කාර්ය සාධනය අනාගත ප්‍රතිඵල සහතික නොකරයි.'}
                {currentLanguage === 'ta' && 'இந்த தகவல் கல்வி நோக்கங்களுக்காக மட்டுமே மற்றும் நிதி ஆலோசனையாக கருதப்படக்கூடாது. எந்தவொரு முதலீட்டு முடிவுகளையும் எடுப்பதற்கு முன்பு தகுதிவாய்ந்த நிதி ஆலோசகரை அணுகவும். கடந்தகால செயல்திறன் எதிர்கால முடிவுகளுக்கு உத்தரவாதம் அளிக்காது.'}
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default TradingTipDetail;
