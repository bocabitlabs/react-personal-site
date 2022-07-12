import React, { Suspense } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();

  return (
    <Suspense fallback={<div>{t('Loading...')}</div>}>
      <Header />
      <MainContent />
      <Footer />
    </Suspense>
  );
}

export default App;
