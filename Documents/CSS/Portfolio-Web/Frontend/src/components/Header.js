//import logo from '../assets/Logo.svg'
import { BsSun,  BsMoon } from 'react-icons/bs';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FlagIcon } from 'react-flag-kit';
import './i18n';

const Header = ( {themeToggle} ) => {
  
  const [ enabled, setEnabled ] = useState(false);
  const { i18n } = useTranslation();

  //Button Switch
  const handleChange = ()=>{
    setEnabled(!enabled);

    themeToggle();
  };

  // Función to change lenguage
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return <header className='md:py-10 py-6 container mx-auto flex justify-between'>
      <div className='flex justify-between items-center gap-3'>
        <a href='/home'>
          RobDev
        </a> 
      </div>
      <div className='flex gap-4 items-center justify-between'>
        <div className='flex flex-between items-center gap-4'>
            <button onClick={() => changeLanguage('en')}> 
              <FlagIcon code="US" className='w-8' />
            </button>
            <button onClick={() => changeLanguage('es')}>
              <FlagIcon code="ES" className='w-8' />
            </button> 
        </div>
          <div className={`relative inline-flex items-center h-6 rounded-full w-15 p-1 cursor-pointer transition-colors duration-200 ${enabled ? 'bg-blue-400' : 'bg-fuchsia-600'}`}>
            <BsSun className='font-bold'/>
            <span
              className={`transform transition-transform duration-200 ease-in-out inline-block w-5 h-5 rounded-full shadow bg-white ${enabled ? '-translate-x-4' : 'translate-x-4'}`}
              onClick={ handleChange }
            />
            <BsMoon className='font-bold'/>
          </div>
      </div>
  </header>;

};

export default Header;
