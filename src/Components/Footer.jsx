import ButtonLinks from "./ButtonLinks"
import IconGitHub from "./icon/IconGitHub"
import IconLinkedIn from "./icon/IconLinkedIn"
import IconMail from "./icon/IconMail"
import IconFiverr from "./icon/IconFiverr"

const Footer = () => {
  return (
    <>
    <footer className='md:w-2/3 m-auto absolute md:bottom-1 left-0 right-0 flex justify-around gap-12  dark:text-white text-cyan-500'>
      <ButtonLinks text='github.com/Abentancor' link='https://github.com/Abentancor' icon={IconGitHub}/>
      <ButtonLinks text='Angelbentancor@gmail.com' link='mailto:Angelbentancor@gmail.com' icon={IconMail}/>
      <ButtonLinks text='fiverr.com/abentancode' link='https://es.fiverr.com/abentancode?up_rollout=true' icon={IconFiverr}/>
      <ButtonLinks text='linkedin.com/in/ángel-l-bentancor' link='https://www.linkedin.com/in/ángel-l-bentancor' icon={IconLinkedIn}/>
    </footer>
    </>
  )
}

export default Footer