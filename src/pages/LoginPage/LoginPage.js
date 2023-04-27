import React, {useState} from 'react';
import s from './LoginPage.module.css';
import Input from '../../components/Input/Input';
import { v4 as uuidv4 } from 'uuid';
import {useNavigate} from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  const loginHandler = () => {
    if (login === 'admin' && password === 'admin') {
      localStorage.setItem('token', uuidv4());
      navigate('/MainPage');
    }
  }

  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <h2>Авторизация</h2>
        <Input placeholder={'Логин'} setValue={setLogin} value={login}/>
        <Input placeholder={'Пароль'} setValue={setPassword} value={password} type={'password'}/>
        <button onClick={loginHandler} className={s.btn}>Войти</button>
      </div>
    </div>

  );
};

export default LoginPage;
