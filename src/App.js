// import './App.css';
import './index.css';
import Home from './routes/Home';
import Projects from './routes/Projects';
import About from './routes/About';
import Contact from './routes/Contact';
import {Routes, Route} from 'react-router-dom';
import AllSkills from './routes/AllSkills';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/skills" element={<AllSkills/>}/>
    </Routes>
    </>
  );
}

export default App;
