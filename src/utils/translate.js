// Utility for real-time translation using Microsoft Translator Text API
// Usage: await translateText('Hello', 'si')
// Requires: process.env.REACT_APP_MS_TRANSLATOR_KEY and process.env.REACT_APP_MS_TRANSLATOR_REGION

const API_URL = 'https://api.cognitive.microsofttranslator.com/translate?api-version=3.0';

const cache = {};

export async function translateText(text, targetLang) {
  if (!text || targetLang === 'en') return text;
  const cacheKey = `${text}|${targetLang}`;
  if (cache[cacheKey]) return cache[cacheKey];
  try {
    const res = await fetch(`${API_URL}&to=${targetLang}`, {
      method: 'POST',
      headers: {
        'Ocp-Apim-Subscription-Key': process.env.REACT_APP_MS_TRANSLATOR_KEY,
        'Ocp-Apim-Subscription-Region': process.env.REACT_APP_MS_TRANSLATOR_REGION,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify([{ Text: text }]),
    });
    const data = await res.json();
    const translated = data[0]?.translations[0]?.text || text;
    cache[cacheKey] = translated;
    return translated;
  } catch (e) {
    return text; // fallback to English
  }
}
