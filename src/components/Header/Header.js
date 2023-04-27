import React from 'react';
import s from './Header.module.css';
import {useNavigate} from 'react-router-dom';

const Header = ({createTask}) => {

  const navigate = useNavigate();
  const logoutHandler = () => {
    localStorage.removeItem('token')
    navigate('/')
  }
  return (
    <div className={s.container}>
      <button onClick={createTask} className={s.newTask}>+ Новая задача</button>
      <button onClick={logoutHandler} className={s.newTask}>Выход</button>
    </div>
  );
};

export default Header;
