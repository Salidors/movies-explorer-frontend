import React from 'react';
import './Toggle.css';

export default function Toggle({ isOn = false, onChange }) {
  return (
    <div className='toggle'>
      <label className='toggle__label'>
        <input type='checkbox' checked={isOn} onChange={onChange} />
        <span className='slider round'></span>
      </label>
      <span className='toggle__text'>Короткометражки</span>
    </div>
  );
}
