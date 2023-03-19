import React, { useContext } from 'react'
import { LanguageContext } from '../Context/LanguageContext'

const HowWork = () => {


    const {language} = useContext(LanguageContext)

    const translations = {
        en:{
            title:'How i Work',
            sketch:{
                title:'sketch',
                p:"I'm here to help you create your ideal website. First, we'll work together to create a sketch in 'figma' that includes the material you provide me or that you submit. We'll carefully analyze every detail to ensure the design is perfect and meets your expectations."
            },
            coding:{
                title:'Coding',
                p:"Once we've approved the sketch, I'll start coding your website, giving special attention to both the style and the functions you need, using the most important web technologies. I'll make sure the website is an exceptional user experience and meets all of your requirements. Additionally, I'll keep all versions of the development on Github so that you can have a detailed tracking of the project's progress."
            },
            deploys:{
                title:'Deploy',
                p:"Before your website is ready for launch, I'll perform a thorough review to ensure all functions are in perfect condition. If everything is good, I'll deliver the complete code along with the folder so that you can deploy it on the hosting of your choice. If you prefer, I can help you deploy it on the hosting you choose.",
            },
            finalmente:{
                title:"In summary",
                p:"I'm here to provide you with an exceptional experience in creating your website, with an attractive design and customized features that meet your needs. I'm ready to start working on your project!"
            }
        },
        es:{
            title:'Como Trabajo',
            sketch:{
                title:'Boceto',
                p:'Estoy listo para ayudarte a crear la página web de tus sueños. Lo primero que haremos es realizar un boceto en "figma" con el material que nos proporcionas o con el que entregues. Analizaremos cuidadosamente cada detalle para asegurarnos de que el diseño sea perfecto.'
            },
            coding:{
                title:'Codeando',
                p:'Una vez aprobado el boceto, empezaremos a codear tu página web, dando importancia al estilo y a las funciones que necesitas, utilizando las tecnologías web más importantes. Nos aseguraremos de que la página sea una experiencia de usuario excepcional. Además, mantendremos todas las versiones del desarrollo en Github para que puedas tener un seguimiento detallado del progreso del proyecto.'
            },
            deploys:{
                title:'Deploy',
                p:'Antes de que la página esté lista para el mundo, realizaremos una revisión exhaustiva para garantizar que todas las funciones estén en perfecto estado. Si todo está en orden, te entregaré el código completo junto con la carpeta para que puedas hacer el deploy en el hosting que desees. Si lo prefieres, puedo ayudarte a hacer el deploy en el hosting que elijas.'
            },
            finalmente:{
                title:"En resumen",
                p:'Estoy aquí para brindarte una experiencia excepcional en la creación de tu página web, con un diseño atractivo y funciones personalizadas que cumplan con tus necesidades. ¡Estoy listo para empezar a trabajar en tu proyecto!'
            }
            
        },
        jp:{
            title:'働き方',
            sketch:{
                title:'スケッチ',
                p:'あなたの理想のウェブサイトを作成するのを手伝うためにここにいます。まず、提供していただいた素材や提出していただいた素材を含めた「figma」でスケッチを作成します。デザインが完璧であることと、あなたの期待に応えることを確実にするため、細部にわたって注意深く分析します。'
            },
            coding:{
                title:'コーディングする',
                p:'スケッチが承認されたら、最も重要なウェブテクノロジーを使用して、スタイルと必要な機能の両方に特別な注意を払って、あなたのウェブサイトのコーディングを開始します。ウェブサイトが優れたユーザーエクスペリエンスであることを確認し、すべての要件に合致するようにします。さらに、GitHubで開発のすべてのバージョンを保持して、プロジェクトの進捗状況を詳しく追跡できるようにします。'
            },
            deploys:{
                title:'展開する',
                p:'ウェブサイトがリリースの準備ができる前に、すべての機能が完璧な状態であることを確認するために徹底的なレビューを実施します。すべてが問題なければ、完全なコードをフォルダと一緒にお届けして、希望するホスティングに展開することができます。希望される場合は、選択したホスティングに展開するのを手伝うこともできます。'
            },
            finalmente:{
                title:"要約すると",
                p:'魅力的なデザインとカスタマイズされた機能を備えた、あなたのウェブサイトを作成するために、優れたエクスペリエンスを提供するためにここにいます。プロジェクトに取り組む準備ができています！'
            }
        }
    }


    const { title,  sketch, coding, finalmente, deploys } = translations[language];


  return (
    <>
        <main className='text-white font-medium w-2/3 m-auto text-justify'>
            <h2 style={{webkitTextStroke: '1px black'}} className='bg-emerald-400 bg-opacity-10 backdrop-blur-sm rounded-xl border border-emerald-400 drop-shadow-lg tracking-wide px-8 py-4 w-fit  m-auto text-center text-3xl font-semibold my-6'>{title}</h2>
            <section className='mb-4 bg-cyan-500 bg-opacity-10 backdrop-blur-sm rounded-xl border border-cyan-300 drop-shadow-lg tracking-wide px-4 py-2'>
                <h3 className='text-xl '>{sketch.title}</h3>
                <p className=''>{sketch.p}</p>
            </section>
            <section className='mb-4 bg-emerald-500 bg-opacity-10 backdrop-blur-sm rounded-xl border border-emerald-400 drop-shadow-lg tracking-wide px-4 py-2' >
                <h3 className='text-xl '>{coding.title}</h3>
                <p>{coding.p}</p>
            </section>
            <section className='mb-4 bg-cyan-500 bg-opacity-10 backdrop-blur-sm rounded-xl border border-cyan-400 drop-shadow-lg tracking-wide px-4 py-2'>
                <h3  className='text-xl '>{deploys.title}</h3>
                <p>{deploys.p}</p>
            </section>
            <section className='mb-4 bg-emerald-500 bg-opacity-10 backdrop-blur-sm rounded-xl border border-emerald-400 drop-shadow-lg tracking-wide px-4 py-2'>
                <h3 className='text-xl '>{finalmente.title}</h3>
                <p>{finalmente.p}</p>
            </section>
        </main>
    </>
  )
}

export default HowWork