import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import ButtonModal from '../Components/ButtonModal';
import { LanguageContext } from '../Context/LanguageContext';
import emailjs from '@emailjs/browser';

const Contact = () => {
  
  const service_id = import.meta.env.VITE_APP_SERVICE_ID;
  const template_id = import.meta.env.VITE_APP_TEMPLATE_ID;
  const public_key = import.meta.env.VITE_APP_PUBLIC_KEY;

  const { language, changeLanguage } = useContext(LanguageContext);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: 'onBlur' });

  const onSubmit = (data) => {
    emailjs.send(service_id, template_id, data, public_key)
      .then((result) => {
        console.log(result.text);
        setTimeout(() => {
          reset();
        }, 15000);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <>
        <main className='m-auto mb-28'>
            <form className=' relative grid grid-cols-1 w-2/3 m-auto md:w-1/4 text-white gap-4 ' onSubmit={handleSubmit(onSubmit)}>
              <label className=''>    
                  {language === 'en'
                  ? 'Name:'
                  : language === 'es'
                  ? 'Nombre:'
                  : '名前:'}
              </label>
              {errors.name && <p className='text-center font-bold text-md saturate-150 text-red-600/100 sm'>
              {language === 'en'
                  ? 'This field is required'
                  : language === 'es'
                  ? 'Este campo es obligatorio'
                  : 'このフィールドは必須です'}
                </p>}
              <input {...register('name',  
                {
                  required: true,
                  pattern: {
                    value: /^[a-zA-Z\s]+$/g,
                    message: 'Invalid name format'
                  },
                  setValueAs: (value) => value.trim()})}
                className='rounded-bl-lg rounded-tr-lg text-center text-black focus:shadow-lg focus:shadow-cyan-500 focus:ring-cyan-300 focus:ring-4 focus:scale-110 transition-all ease-in-out duration-1000' 
                  
                />
              <label className=''>    
                  {language === 'en'
                  ? 'Email:'
                  : language === 'es'
                  ? 'Email:'
                  : 'メールアドレス:'}
              </label>
              {errors.email && <p className='text-center font-bold text-md saturate-200 text-red-600/100 '>
              {language === 'en'
                  ? 'This field is required'
                  : language === 'es'
                  ? 'Este campo es obligatorio'
                  : 'このフィールドは必須です'}
                </p>}
                <input {...register('email',   
                {
                required: 'This field is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address'
                },
                setValueAs: (value) => value.trim()})} 
                className='rounded-bl-lg rounded-tr-lg text-center focus:scale-110 text-black focus:shadow-lg focus:shadow-cyan-400 focus:ring-cyan-300 focus:ring-4 transition-all ease-in-out duration-1000'
          
                />
              <label className=''>    
                  {language === 'en'
                  ? 'Message:'
                  : language === 'es'
                  ? 'mensaje:'
                  : 'メッセージ:'}
              </label>
              <textarea {...register('message')}  className=' resize-none h-24 rounded-bl-lg rounded-tr-lg px-2 focus:scale-110 text-black focus:shadow-lg focus:shadow-cyan-200 focus:ring-cyan-300 focus:ring-4 transition-all ease-in-out duration-1000'  />
              <ButtonModal isValid={isValid} className='font-semibold hover:text-cyan-500 hover:brightness-150 transition-all ease-in-out duration-1000 hover:scale-125 text-cyan-400 dark:text-white' type="submit"> 
              </ButtonModal>
            </form>
        </main>
    </>
  )
}

export default Contact