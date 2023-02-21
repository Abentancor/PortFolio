import React, { useContext, useState } from 'react';
import { LanguageContext } from '../Context/LanguageContext';

const ButtonModal = ({ className, isValid, onSubmit }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { language, changeLanguage } = useContext(LanguageContext);

  const toggleModal = () => {
    if (isValid) {
      setIsModalOpen(!isModalOpen);
      onSubmit();
    }
  };

  return (
    <>
      <button className={className}  onClick={toggleModal}>                  
      {language === 'en'
                  ? 'Send'
                  : language === 'es'
                  ? 'Enviar'
                  : '送信'}
      </button>
      {isModalOpen && (
        <div className='self-center justify-self-center z-40 flex flex-col absolute  rounded-bl-lg rounded-tr-lg ring-cyan-300 ring-4 text-black  font-semibold content-center  shadow-lg shadow-cyan-500 p-6 bg-gradient-to-b from-sky-600 to-slate-900 '>
          <h3 className='mb-4 text-center text-2xl text-green-500 contrast-200'>      
            {language === 'en'
                    ? 'Success'
                    : language === 'es'
                    ? 'Bien Hecho'
                    : '成功'
            }
          </h3>
          <p className='mb-4'>
            {language === 'en'
                  ? 'your consult has sended'
                  : language === 'es'
                  ? 'Mensaje enviado'
                  : 'ご連絡ありがとうございました'
            }
          </p>
          <button className='items-center hover:text-cyan-500 cursor-pointer hover:underline underline-offset-4 hover:brightness-150 transition-all ease-in-out duration-1000 hover:scale-125 text-white' onClick={toggleModal}>
          {language === 'en'
                  ? 'Close'
                  : language === 'es'
                  ? 'Cerrar'
                  : '閉じる'}
          </button>
          
        </div>
        
      )}
      
    </>
  );
};

export default ButtonModal;