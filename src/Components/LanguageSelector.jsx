import React, { useContext } from 'react';
import { LanguageContext } from '../Context/LanguageContext';

import FlagsIcons from './icon/FlagsIcons';


const LanguageSelector = () => {
  const { language, changeLanguage } = useContext(LanguageContext);

  const handleLanguageChange = (event) => {
    changeLanguage(event.target.value);
  };

  return (
    <div className="text-center">
      <label
        className="mb-2 font-medium text-sm text-gray-600 hidden md:block"
        htmlFor="language"
      >
        {language === 'en'
          ? 'Select a language:'
          : language === 'es'
          ? 'Seleccione un idioma:'
          : '言語を選択:'}
      </label>
        <div className="flex flex-row-reverse gap-2 items-center p-1  border-2 border-cyan-400 rounded-lg ">
          <FlagsIcons code={language} />
      <select
        className="block w-full bg-transparent rounded-lg text-gray-600 py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
        id="language"
        value={language}
        onChange={handleLanguageChange}
        >
        <option className='' value="es">Español</option>
        <option className='' value="en">English</option>
        <option className='' value="jp">日本語</option>
      </select>
      </div>
      </div>

  );
};

export default LanguageSelector;
