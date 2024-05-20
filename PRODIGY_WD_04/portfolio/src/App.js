import './App.css';
import About from './components/About';
import Home from './components/Home';

import Project from './components/Project';
import Contact from './components/Contact';
import Resume from './components/Resume';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import SendMsg from './components/SendMsg';

function App() {
  return (
    <div>
    <Router>      
    <Routes> 
     <Route path='/about' element={<About/>} />
     <Route path='/home' element={<Home/>} />
     <Route path='/project' element={<Project/>} />          
     <Route path='/resume' element={<Resume/>} />          
     <Route path='/contact' element={<Contact/>} />          
     <Route path='/' element={<Home/>}/> 
      
     <Route path='/sendmsg' element={<SendMsg/>}/> 

    </Routes>
    </Router>

    {/* <About></About> */}
    </div>
  );
}

export default App;
