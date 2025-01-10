import React,{useState} from 'react'
import './App.css'
import About from './components/About'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
const[mode, setMode]=useState('light')
const[btnText, setBtnText]=useState('Enable Dark Mode')


const toggleMode=()=>{
  if(mode==='light'){
    setMode('dark')
    document.body.style.backgroundColor='#23272f'
    setBtnText('Enable Light Mode')
//     setInterval(()=>{
// document.title="Textustils is amazing web app"
//     },2000)
//     setInterval(() => {
//       document.title="Install textUtils now"
//     }, 1500);
  }
  else{
    setMode('light')
    document.body.style.backgroundColor='white'
    setBtnText('Enable Dark Mode')
  }
}

  return (
    <>
{/* with props */}
 {/* if i set default props */}
 {/* <Navbar /> */}
{/* set about by default */}
 {/* <Navbar title="TextUtils"/> */}

<Router>
 <Navbar title="TextUtils" aboutText='About textutls' mode={mode} toggleMode={toggleMode} btnText={btnText}/>
 <div className='container my-3'>
 <Routes>

 <Route path="/about" element={<About />} />
 <Route path="/" element={<TextForm heading="Enter the text to analyze" mode={mode} />} />

        </Routes>
 </div>
 </Router>
    </>
  )
}

export default App
