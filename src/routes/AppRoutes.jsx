import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Projects from '../pages/Projects';


const AppRoutes = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<MainLayout/>}>
            <Route index element={<Home/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="contact" element={<Contact/>}/>
            <Route path="projects" element={<Projects/>}/>
        </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;
