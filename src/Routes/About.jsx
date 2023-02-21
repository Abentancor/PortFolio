import { useContext } from 'react'
import Carrousel from '../Components/AboutComponent/Carrousel';

import { LanguageContext } from '../Context/LanguageContext';
const sections = {
  about:{
      es:'¡Hola! Mi nombre es Bentancor Angel, soy de Argentina y me gustaría compartir un poco sobre mi experiencia y habilidades.',
      en:"Hi there! My name is Bentancor Angel, and I'm from Argentina. I'd like to share a bit about my experience and skills.",
      jp:'はじめまして！ベンタンコール・エンジェルと申します。アルゼンチン出身で、私の経験とスキルについて少し共有したいと思います。'
  },
  jobs:{
      es:'Actualmente trabajo como ayudante en una carpintería, también me he desempeño como electricista y en la reparación de PC. ',
      en:'Currently, I work as an assistant at a carpentry shop, and I also have experience as an electrician and in PC repair.',
      jp:'現在、私は木工店で助手として働いており、電気技師やPC修理の経験もあります。'
  },
  education:{
      es:'Sin embargo, mi verdadera pasión es el desarrollo web. He estado estudiando esta área durante más de 2 años, centrándome principalmente en el Front-End. Me gusta trabajar en proyectos con ReactJS y estilizarlos con TailwindCSS. He realizado diversos proyectos, incluyendo algunos de YouTube, y he participado en el Bootcamp de Personal (Digitallers). Además, he tomado cursos en Udemy para adquirir y mejorar mis habilidades en:',
      en:"However, my true passion is web development. I've been studying this field for over 2 years, focusing mainly on Front-End development. I enjoy working on projects with ReactJS and styling them with TailwindCSS. I have completed various projects, including some for YouTube, and I have participated in the Personal Bootcamp (Digitallers). Additionally, I have taken courses on Udemy to acquire and improve my skills in:",
      jp:'しかし、私の本当の情熱はWeb開発です。フロントエンド開発に主に焦点を当て、ReactJSを使用してプロジェクトを作成し、TailwindCSSでスタイリングすることが好きです。YouTube向けのプロジェクトを含め、様々なプロジェクトを行い、Personal（Digitallers）のブートキャンプに参加しています。さらに、以下のスキルを習得・向上するためにUdemyでコースを受講しています。'
  },
  motivation:{
    es:'Siempre estoy buscando nuevas oportunidades para aprender y mejorar en mi vida.',
    en:'I am always seeking new opportunities to learn and improve in my life.',
    jp:'私は常に人生で学び、成長するための新しい機会を求めています。'
  },
  languages:{
      es:'En cuanto a los idiomas, he aprendido japonés de forma autodidacta y he obtenido el nivel 3 del Nihongo Noryoku Shiken (JLPT). Aunque mi nivel de inglés no lo tengo claro, soy capaz de leer y entender el idioma hablado, aunque aún me falta práctica para poder hablarlo con fluidez.',
      en:"Regarding languages, I have taught myself Japanese and obtained level 3 of the Nihongo Noryoku Shiken (JLPT). Although I'm not sure about my English level, I am able to read and understand spoken English, but I need more practice to speak it fluently.",
      jp:'言語に関しては、独学で日本語を学び、日本語能力試験の3級を取得しました。英語のレベルについては自信がないのですが、英語を話すことにはもう少し練習が必要ですが、読み書きはできます。'
  }
 }

const About = () => {
  const { language } = useContext(LanguageContext);
  return (
    <>
    <main style={{webkitTextStroke: '0.5px black'}} className='p-2 text-justify bg-cyan-300 bg-opacity-10 backdrop-blur-sm rounded-xl border border-cyan-100 drop-shadow-lg tracking-wide md:m-auto mx-4 font-semibold md:grid grid-cols-10  md:w-3/4 text-white '>
   
    <img src="\assets\Foto.jpg" className='h-24 rounded-lg ' alt="" />
      <p className=' p-2 col-span-9  mb-2 border-b-2'>{sections.about[language]}
        <p className='col-span-10 rounded-md '>{sections.jobs[language]}</p>
      </p>

      <p className=' col-span-8 p-2 rounded-md'>{sections.education[language]}</p>
      <img src="\assets\yofondoVSC.jpeg" className='rounded-xl col-span-2' alt="" />
      <div className='col-span-10 py-2 border-b-2'>
          <Carrousel />
      </div>

      <p className='col-span-10 p-2 text-center mb-2 border-b-2'>{sections.motivation[language]}</p>

      <img src="\assets\Sin título.png" className='rounded-xl h-36 col-span-2' alt="" />
      <p className='col-span-8 p-2 rounded-md '>{sections.languages[language]}</p>

    </main>
    </>
  )
}

export default About