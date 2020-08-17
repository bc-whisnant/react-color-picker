import React from 'react';

export default function ColorPicker(props) {
  return (
    <div className={props.colorPickerClass} onClick={props.changeBackgroundColor}></div>
  );
}
