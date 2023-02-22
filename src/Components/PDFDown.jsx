import React from 'react'
import IconPDF from './icon/IconPDF';

const PDFDown = ({code}) => {

    let pdfCV;

    switch (code){
        case 'es': 
            pdfCV='CV';
            break;
        case 'en':
            pdfCV='CV';
            break;
        case 'jp':
            pdfCV='履歴書';
            break
    }

  return (
    <>
        <a href="./assets/CV/CV Bentancor, Angel.pdf" target="_blank" rel="noopener noreferrer" className='flex items-center gap-1 text-cyan-400 font-semibold text-xl hover:scale-110   dark:hover:text-white transition-all ease-in-out duration-500'>
           <IconPDF/> {pdfCV}
        </a>
    </>
  )
}

export default PDFDown