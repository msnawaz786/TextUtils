import React,{useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
const handConvertUp=()=>{
    // console.log("button clicked")
    let newText=text.toUpperCase();
    setText(newText)
}
const handConvertLow=()=>{
    let newText=text.toLowerCase()
    setText(newText);
    // console.log("lower clicked")

}
const handleRemoveExtraSpaces = () => {
    let newText = text.split(/\s+/).join(" ").trim();
    setText(newText);
};

const deleteText=()=>{
  setText("");
  confirm("Are you sure you want to delete these text")
}

const handleOnchange=(event)=>{
    // console.log("value changed")
    setText(event.target.value)
}




    const[text,setText]=useState("");
  return (
    <>
<div className='container'style={{color:props.mode==='dark'?'white':'black'}}>
<h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnchange} id="myBox" rows="8"style={{backgroundColor:props.mode
    ==='dark' ? '#23272f':'white', color:props.mode==='dark'?'white':'black'
  }}></textarea>
</div>
<button className='btn btn-primary' onClick={handConvertUp} >Convert To Upercaase</button>
<button className='btn btn-primary ms-3' onClick={handConvertLow}>Convert To Lowercase</button>
<button className='btn btn-primary ms-3' onClick={handleRemoveExtraSpaces}>Remove extra space</button>
<button className='btn btn-primary ms-3' onClick={deleteText}>Delete all text</button>
</div>
<div className="container my-5"style={{color:props.mode==='dark'?'white':'black'}}>
  <h1>Your text Summary here:--</h1>
  <p>{text.split(" ").length} word and {text.length} character</p>
  <p>{0.008 * text.split(" ").length} Minutes read...</p>
  <h1>Preview</h1>
  <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
</div>
</>
  )
}
TextForm.prototypes={
    heading:PropTypes.string
}


