import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar  from './components/navbar/navbar'; 
import Footer from './components/footer/footer';
import OurTechnology from './pages/OurTechnology/OurTechnology'
import AboutUs  from './pages/AboutUs/AboutUs';
import Contact from './pages/Contact/Contact';


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path={"/"} exact element={<OurTechnology />}></Route>
    <Route path={"/OurTechnology"} exact element={<OurTechnology />}></Route>
    <Route path={"/AboutUs"} exact element={<AboutUs />}></Route>
    <Route path={"/Contact"} exact element={<Contact />}></Route>
    </Routes>
<Footer/>
    </BrowserRouter>
  
    
  );
}

export default App;
