import { useState } from 'react';
// components
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';
import Certificados from './components/Certificados';
import Skills from './components/Skills';
import { I18nextProvider } from 'react-i18next';

const App = () => {

    //Theme Dark-Light
    const [ theme, setTheme ] = useState('light');

    const themeToggle = ()=>{
      const newTheme = theme === 'light' ? 'dark' : 'light';
      setTheme(newTheme);
    }

  return (
    < I18nextProvider >
      <div className={`overflow-hidden App bg-gray-100 ${theme}`}>
        <Header themeToggle={ themeToggle } />
        <Banner />
        <About />
        <Services />
        <Nav/>
        <Work />
        <Certificados />
        <Skills />
        <Contact /> 
      </div>
    </I18nextProvider>
  );
};

export default App;
