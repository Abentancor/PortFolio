import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'

const App = () => {
  
  return (
    <>
    <div className="min-h-screen bg-center  bg-[url('/assets/MockUPdaycel.png')] lg:bg-[url('/assets/MockUPday.png')] bg-no-repeat bg-cover dark:bg-[url('/assets/mockupnightcel.png')] lg:dark:bg-[url('/assets/MockUpNight2.png')]">
      <Navbar/>
      <div className='md:mt-6'>
        <Outlet/>
      </div>
      <div className='mt-4 '>
      <Footer/>
      </div>
    </div>
    </>
  )
}

export default App