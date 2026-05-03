import {Outlet} from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Footer } from "../components/Footer";

const MainLayout = () => {
  return (
    <div className='min-h-screen bg-black text-white px-96'>
      <Navbar/>
      <main className='pt-48'>
      <Outlet/>
      </main>
      <Footer/>  
    </div>
  )
}

export default MainLayout