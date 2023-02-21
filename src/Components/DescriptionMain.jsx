import React, { useContext } from 'react'
import { LanguageContext } from '../Context/LanguageContext';
import DescriptionText from './DescriptionText'
import DescriptionPJ from './DescriptionPJ';

const DescriptionMain = () => {
    const { language } = useContext(LanguageContext);


  return (
    <>
    <main className='lg:flex grid px-2 md:w-2/3 content-center md:mt-16  mx-auto'>
        <DescriptionPJ code={language}/>
        <DescriptionText code={language}/>
    </main>
    </>
  )
}

export default DescriptionMain