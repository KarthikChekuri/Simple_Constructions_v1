import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <div id="about" className="pt-24 -mt-24">
            <About />
        </div>
        <div id="services" className="pt-24 -mt-24">
            <Services />
        </div>
        <div id="projects" className="pt-24 -mt-24">
            <Projects />
        </div>
        <div id="contact" className="pt-24 -mt-24">
          <ContactCTA />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;