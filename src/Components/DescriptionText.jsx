import React from 'react'

const DescriptionText = ({code}) => {

    let text;
    let summary;

    switch (code) {
        case 'es':
          text='Hola mi nombre es Ángel y soy un desarrollador web Frontend especializado en ReactJS y TailwindCSS. Me apasiona la creación de interfaces de usuario atractivas y funcionales para aplicaciones web. Gracias a mi conocimiento de ReactJS, tengo la capacidad de construir aplicaciones web escalables utilizando componentes. Además, el uso de TailwindCSS me permite crear interfaces coherentes y estilizadas a través de sus clases. Estoy atento a las últimas tendencias y tecnologías en el mundo del Frontend, y siempre estoy dispuesto a aprender y experimentar con nuevas herramientas y técnicas.';
          summary='Hola mi nombre es Ángel y soy un desarrollador web Frontend me gusta usar ReactJS y TailwindCSS.';
          break;
        case 'en':
            text="Hi, my name is Angel and I'm a Frontend web developer specialized in ReactJS and TailwindCSS. I'm passionate about creating attractive and functional user interfaces for web applications. Thanks to my knowledge of ReactJS, I have the ability to build scalable web applications using components. Additionally, the use of TailwindCSS allows me to create consistent and stylized interfaces through its classes. I'm attentive to the latest trends and technologies in the world of Frontend, and I'm always willing to learn and experiment with new tools and techniques. ";
            summary="Hi, my name is Angel and I'm a Frontend web developer specialized in ReactJS and TailwindCSS.";
            break;
        case 'jp':
          text='初めまして、私はエンジェルと申します。私はフロントエンドウェブ開発者です、ウェブサイトを作るために、ReactJSとTailwindCSSを使用しています。ReactJSの知識を活用することで、コンポーネントを使用してスケーラブルなWebアプリケーションを構築できる能力があります。さらに、TailwindCSSの使用により、そのクラスを通じて一貫性のあるスタイリッシュなインターフェースを作成できます。フロントエンドの世界での最新のトレンドや技術に注意を払い、常に新しいツールや技術を学び、実験することに意欲的です。';
          summary="初めまして、私はエンジェルと申します。私はフロントエンドウェブ開発者です。"
          break;
        }
        return <p style={{webkitTextStroke: '0.7px black'}} className=" border-cyan-400  text-white text-justify lg:order-last order-first  md:block md:text-lg font-bold md:h-full mt-8 px-4 py-1 bg-cyan-400 bg-opacity-10 backdrop-blur-sm rounded border drop-shadow-lg tracking-wide">{window.innerWidth < 768 ? summary : text}</p>;
      }



export default DescriptionText