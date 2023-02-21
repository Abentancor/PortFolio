import { useEffect, useState } from "react"
import IconMoon from "./Icon/IconMoon"
import IconSun from "./Icon/IconSun"


const initialStateDarkMode = localStorage.getItem('theme') === 'dark'

const ButtonDark = () => {

  const [darkMode, setDarkMode] = useState(initialStateDarkMode)

  useEffect(()=>{

    if(darkMode){
      document.documentElement.classList.add('dark')
      //localStorage.theme = 'dark'
      localStorage.setItem('theme', 'dark')
    }else{
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }

  }, [darkMode])

  return (

      <button onClick={()=> setDarkMode(!darkMode)} className='transition-all hover:scale-125  duration-1000'>
          {
            darkMode? <IconSun /> : <IconMoon/>
          }
      </button>
  )
}
export default ButtonDark;