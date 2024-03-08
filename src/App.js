import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About'
import React, { useState } from 'react';
// import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
 
function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert,setAlert] = useState(null)

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type,
    })
    setTimeout(()=>{
      setAlert(null)
    },3000)
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert(`${mode} Mode has been enabled`,"success")
      document.title = "TextUtils-Dark Mode"
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert(`${mode} Mode has been enabled`,"success")
      document.title = "TextUtils-Light Mode"
    }
  }
  return (
    <>
    {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
    {/* <Navbar/> */}
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} showAlert={showAlert} />
    <Alert alert={alert}  />
    <div className="container my-3">
    <TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} />
    </div>
    {/* <About/> */}
   {/* <BrowserRouter>
   <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} showAlert={showAlert} />
    <Alert alert={alert}  />
    <div className="container my-3">
    <TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} />
    </div>
     <Routes>
      <Route path='/' element={<TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} />} ></Route>
      <Route path='/about' element={<About></About>} ></Route>
     </Routes>
   </BrowserRouter> */}
    </> 
  );
}

export default App;