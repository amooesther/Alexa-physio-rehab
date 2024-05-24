import { BrowserRouter,Routes,Route } from 'react-router-dom';

import Home from './pages/home/Home';
import Contact from './pages/contact/Contact.jsx';
import Services from './pages/Services/Services.jsx';
import AboutUs from './pages/AboutUS/AboutUs.jsx';
import Login from './pages/Login/Login.jsx';
import Signup from './pages/Login/Signup.jsx';

function App() {
  return (
    <div >
      <BrowserRouter>      
      <Routes>
        <Route path="/" element={<Home/>} />        
        <Route path="/contact" element={<Contact/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/appointment" element={<AboutUs/>} />
        </Routes>    
    </BrowserRouter>
    </div>
  );
}

export default App;
