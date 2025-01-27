
import './App.css';
import Home from './component/Home';
import Footer from './component/Footer';
import {Routes,Route} from 'react-router-dom';
import Shop from './component/Shop';
import About from './component/About';
import Services from './component/Services';
import Blog from './component/Blog';
import Contact from './component/Contact';
import Navbar from './component/Navbar';


function App() {
  return (
    <div className="App">

      <Navbar/>
    
    <Routes>
     <Route path='/' element= {<Home/>} />
     <Route path='/shop' element= {<Shop/>} />
     <Route path='/about' element= {<About/>} />
     <Route path='/services' element= {<Services/>} />
     <Route path='/blog' element= {<Blog/>} />
     <Route path='/contact' element= {<Contact/>} />

    </Routes>
    
      <Footer/>

    </div>
  );
}

export default App;
