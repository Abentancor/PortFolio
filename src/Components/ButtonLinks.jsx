import React, { useState } from 'react';

function ButtonLinks(props) {
    const [isHovering, setIsHovering] = useState(false);


    return (
      <a 
        href={props.link} target="_blank" rel="noopener noreferrer"
        className={` hover:text-cyan-500 relative flex gap-1 items-center cursor-pointer  fill-cyan-500 w-8 hover:scale-105 hover:saturate-200 hover:fill-cyan-500 transition-all ease-in-out duration-500` }
        onMouseOver={() => setIsHovering(true)}
        onMouseOut={() => setIsHovering(false)}
      >
          <props.icon className=''/>
          <p className={`text-white hidden sm:block absolute whitespace-nowrap text-sm left-0 transition-all duration-500 ease-linear ${isHovering ? 'translate-x-8 hover:block hover:text-cyan-500 dark:text-white' : '-z-50 '}`}>{props.text}</p>
      </a>
    );
  }
export default ButtonLinks;