import React, { Suspense } from 'react';
import './App.css';
import Nav from './components/Nav';
import Carousel from './components/Carousel';
import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();

  return (
    <Suspense fallback={<div>{t('Loading...')}</div>}>
      <Nav />
      <Carousel />
      <Header />
      <MainContent />
      <Footer />
    </Suspense>
  );
}

export default App;
