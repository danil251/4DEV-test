import React from 'react';
import s from './Input.module.css'

const Input = ({value, setValue, placeholder, type = 'text'}) => {
  return <input className={s.input} value={value} onChange={(e) => setValue(e.target.value)} type={type} placeholder={placeholder}/>
};

export default Input;
