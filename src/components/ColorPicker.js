import React from 'react'

export default function ColorPicker(props) {
  return (
    <div>
       <div className='button-container'>
          <div className='red' onClick={props.changeBackgroundColor}></div>
          <div className='green' onClick={props.changeBackgroundColor}></div>
          <div className='blue' onClick={props.changeBackgroundColor}></div>
          <div className='orange' onClick={props.changeBackgroundColor}></div>
          <div className='pink' onClick={props.changeBackgroundColor}></div>
        </div>
    </div>
  )
}
