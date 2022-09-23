import React from 'react'
import './css/Input_option.css'
function Input_option(props) {
  return (
    <div className='Input_option'>
        <props.Icon style={{color:props.color}}/>
        <h4 className='text' style={{color:props.text_color}}>{props.text}</h4>
    </div>
  )
}

export default Input_option