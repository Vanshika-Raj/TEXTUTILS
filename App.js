import './App.css';
import Navbar from './components/Navbar';
import React, { useState } from 'react';
import Textform from './components/Textform';
import Alert from './components/Alert';
import About from './components/About';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import PropTypes from 'prop-types';

function App() {
  const [Mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (Mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
     <BrowserRouter>
        
        <Navbar title="textUtils" mode={Mode} toggleMode={toggleMode} AboutText="About Textutils" />
        <Alert alert={alert} />
        <div className='container my-3'>
          <Routes>
             
          <Route path="/about" element={<About />} />
            </Routes>
            <Routes>
             
              <Route exact path="/" element={<Textform showAlert={showAlert} heading="Enter the text" mode={Mode} />} />
            </Routes>
           
              {/* <Textform showAlert={showAlert} heading="Enter the text" mode={Mode} /> */}
          
        </div>
    </BrowserRouter>
    </>
  );
}

export default App;

