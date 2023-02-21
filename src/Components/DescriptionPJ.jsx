import React from 'react'

const DescriptionPJ = ({code}) => {

    let img;

    switch(code){
        case 'es':
            img = "src/assets/Obentancor_2d_mafalda_comic_style_smile_face_happy_white_backgr_173863b3-8ebc-4cb3-87b5-e213a92c2ab1.png";
            break;
        case 'en':
            img="src/assets/comic.png";
            break;
        case 'jp':
            img="src/assets/Obentancor_mate_and_thermos_anime_deep_in_abyss_character_style_6b6b2f84-f345-4e1d-a162-fd86362caf9d.png";
            break;
    }

  return (
    <>

        <img src={img} className="md:w-1/2 m-auto" alt="" />
    </>
  )
}

export default DescriptionPJ