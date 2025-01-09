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

const handleOnchange=(event)=>{
    // console.log("value changed")
    setText(event.target.value)
}




    const[text,setText]=useState("Enter text here");
  return (
<div>
<h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnchange} id="myBox" rows="8"></textarea>
</div>
<button className='btn btn-primary' onClick={handConvertUp} >Convert To Upercaase</button>
<button className='btn btn-primary ms-3' onClick={handConvertLow}>Convert To Lowercase</button>
<button className='btn btn-primary ms-3' onClick={handleRemoveExtraSpaces}>Remove extra space</button>

</div>
  )
}
TextForm.prototypes={
    heading:PropTypes.string
}


