import React from 'react';
import Header from './components/Header'
import Hero from './components/Hero'
import Quote from './components/Quote';
import WhyProtect from './components/WhyProtect';
import Cases from './components/Cases'
import ContactUs from './components/ContactUs';
import Footer from './components/Footer'
//function scripts



function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <div>
        <Quote />
        <WhyProtect />
      </div>
      <Cases />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
