import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('en');

  const languages = {
    en: 'English',
    si: 'සිංහල',
    ta: 'தமிழ்'
  };
  const translations = {
    en: {
      tradingTips: 'Softlogic Stockbrokers Trading Tips',
      readMore: 'Read More',
      backToTips: 'Back to Tips',
      selectLanguage: 'Select Language',
      latestTips: 'Latest Trading Tips',
      tipDetails: 'Tip Details',
      publishedOn: 'Published on',
      category: 'Category',
      riskLevel: 'Risk Level',
      expectedReturn: 'Expected Return',
      timeFrame: 'Time Frame',
      description: 'Description',
      detailedAnalysis: 'Detailed Analysis'
    },    si: {
      tradingTips: 'සොෆ්ට්ලොජික් කොටස් තැරකරුවන් වෙළඳ ඉඟි',
      readMore: 'වැඩිදුර කියවන්න',
      backToTips: 'ඉඟි වෙත ආපසු',
      selectLanguage: 'භාෂාව තෝරන්න',
      latestTips: 'නවතම වෙළඳ ඉඟි',
      tipDetails: 'ඉඟිය පිළිබඳ විස්තර',
      publishedOn: 'ප්‍රකාශ කළ දිනය',
      category: 'කාණ්ඩය',
      riskLevel: 'අවදානම් මට්ටම',
      expectedReturn: 'අපේක්ෂිත ප්‍රතිලාභය',
      timeFrame: 'කාල සීමාව',
      description: 'විස්තරය',
      detailedAnalysis: 'සවිස්තර විශ්ලේෂණය'
    },    ta: {
      tradingTips: 'சாப்ட்லாஜிக் பங்கு தரகர்கள் வர்த்தக உதவிக்குறிப்புகள்',
      readMore: 'மேலும் படிக்க',
      backToTips: 'குறிப்புகளுக்கு திரும்ப',
      selectLanguage: 'மொழியைத் தேர்ந்தெடுக்கவும்',
      latestTips: 'சமீபத்திய வர்த்தக உதவிக்குறிப்புகள்',
      tipDetails: 'குறிப்பு விவரங்கள்',
      publishedOn: 'வெளியிடப்பட்ட தேதி',
      category: 'வகை',
      riskLevel: 'ஆபத்து நிலை',
      expectedReturn: 'எதிர்பார்க்கும் வருமானம்',
      timeFrame: 'கால அளவு',
      description: 'விளக்கம்',
      detailedAnalysis: 'விரிவான பகுப்பாய்வு'
    }
  };

  const t = (key) => {
    return translations[currentLanguage][key] || key;
  };

  const changeLanguage = (lang) => {
    setCurrentLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{
      currentLanguage,
      changeLanguage,
      languages,
      t
    }}>
      {children}
    </LanguageContext.Provider>
  );
};
