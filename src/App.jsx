import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutProduct from './components/AboutProduct';
import ProductShowcase from './components/ProductShowcase';
import InnovatorProfile from './components/InnovatorProfile';
import ProductInfo from './components/ProductInfo';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BoafoWidgetInitializer from './components/BoafoWidgetInitializer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutProduct />
        <ProductShowcase />
        <InnovatorProfile />
        <ProductInfo />
        <Contact />
      </main>
      <Footer />
      <BoafoWidgetInitializer />
    </>
  );
}

export default App;
