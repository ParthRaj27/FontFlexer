// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import TextForm from './components/About';


function App() {
  const [mode , setMode] = useState('light')
  const toggleMode = () =>{
    if(mode == 'light'){
      setMode('dark');
      // document.body.style.backgroundColor = '#343a40'
      document.body.style.backgroundColor = '#042743'
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white'
    }
  }
   return (
    <>
      <Navbar title="FontFlexer" mode={mode} toggleMode={toggleMode}/>
      <div className="container my-3">
      <TextForm heading="Try TextUtils - Word Counter , Character Counter , Remove Extra Spaces And More" mode={mode}/>
     {/* <About/> */}
     </div>
    </>
  );
}

export default App;
