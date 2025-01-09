import './App.css'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'

function App() {
 

  return (
    <>
{/* with props */}
 <Navbar title="TextUtils" aboutText='About textutls'/>
 {/* if i set default props */}
 {/* <Navbar /> */}

{/* set about by default */}
 {/* <Navbar title="TextUtils"/> */}
 <div className='container my-3'>
 <TextForm  heading="Enter the text to analyze"/>
 </div>

    </>
  )
}

export default App
