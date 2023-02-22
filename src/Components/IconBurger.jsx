import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom';
import ButtonDark from './ButtonDark';
import LanguageSelector from './LanguageSelector';
import { LanguageContext } from '../Context/LanguageContext';

const IconBurger = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { language, changeLanguage } = useContext(LanguageContext);

    return (
      <div className="relative inline-block sm:hidden  bg-slate-900 bg-opacity-20 border-3 ring ring-cyan-300  rounded-lg ">
        <button
          className="flex items-center p-2 text-cyan-500 hover:text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" stroke='' viewBox="0 0 24 24" fill="none">
            <path
              className={`${
                isOpen ? 'hidden' : 'block'
              } stroke-current stroke-width="2" stroke-linecap="round" stroke-linejoin="round"`}
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              className={`${
                isOpen ? 'block' : 'hidden'
              } stroke-current stroke-width="4" stroke-linecap="round" stroke-linejoin="round"`}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div
          className={`${ 
            isOpen ? 'block' : 'hidden'
          } mr-4 absolute mt-2 py-2 z-40 bg-white rounded-lg shadow-xl`}
        >
        <div className=" mr-4 fixed items-center right-0 top-10 text-right flex flex-col z-10  p-2 gap-2 mt-12 bg-slate-900 bg-opacity-90 ring ring-cyan-300 rounded-lg ">
            <LanguageSelector/>
            <ButtonDark/>
            <NavLink to='/about' className='text-cyan-400 font-semibold text-xl hover:scale-110 dark:hover:text-white transition-all ease-in-out duration-500' >{language === 'en'
          ? 'About'
          : language === 'es'
          ? 'Sobre mi'
          : 'について'}</NavLink>
            <NavLink to='/contact' className='text-cyan-400 font-semibold text-xl hover:scale-110 dark:hover:text-white transition-all ease-in-out duration-500'>{language === 'en'
          ? 'Contact'
          : language === 'es'
          ? 'Contacto'
          : 'お問い合わせ'}</NavLink>
        </div>
        </div>
      </div>
    );
  };

export default IconBurger