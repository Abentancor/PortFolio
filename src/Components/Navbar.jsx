import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { LanguageContext } from '../Context/LanguageContext';
import ButtonDark from "./ButtonDark"
import IconLogo from "./icon/IconLogo";
import IconBurger from "./IconBurger"
import LanguageSelector from "./LanguageSelector"

const Navbar = () => {

  const { language, changeLanguage } = useContext(LanguageContext);
  

  return (
    <>
    <header className="flex items-center  justify-evenly">
      <NavLink to='/' className="flex items-center hover:scale-110 text-cyan-800  font-semibold transition-all ease-in-out duration-500">
            <IconLogo/>
            <h1 className="text-cyan-400 font-semibold dark:hover:text-white text-3xl ">AbentanCode</h1>
      </NavLink>

      <IconBurger/>
        
        <nav className="sm:flex gap-6 mt-4 hidden items-center">
            <NavLink to='/about' className='text-cyan-400 font-semibold text-xl hover:scale-110 dark:hover:text-white transition-all ease-in-out duration-500' >{language === 'en'
          ? 'about'
          : language === 'es'
          ? 'Sobre mi'
          : 'について'}</NavLink>
            <NavLink to='/contact' activeClassName="active" className='text-cyan-400 active:text-red-500 font-semibold text-xl hover:scale-110 dark:hover:text-white transition-all ease-in-out duration-500'>{language === 'en'
          ? 'contact'
          : language === 'es'
          ? 'Contacto'
          : 'お問い合わせ'}</NavLink>
         <ButtonDark/>
          <LanguageSelector/>
        </nav>
    </header>
    </>
  )
}

export default Navbar