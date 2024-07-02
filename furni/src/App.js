
import './App.css';
import Header from './component/Header';
import Home from './component/Home';
import Footer from './component/Footer';
import {Routes,Route} from 'react-router-dom';

 
function App() {
  return (
    <div className="App">
      <Header/>
      {/* <Home/> */}
    <Routes>
     <Route path='/' element= {<Home/>} />
    </Routes>
    



      <Footer/>

    </div>
  );
}

export default App;
