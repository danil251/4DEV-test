import React, {useEffect, useMemo} from 'react';
import {Route, Routes, useNavigate, useLocation} from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import MainPage from './pages/MainPage/MainPage';
import AccessError from './pages/AccessError/AccessError';


function App() {
  const navigate = useNavigate();
  const token = useMemo(() => localStorage.getItem('token'), []);
  const {pathname}  = useLocation()

  useEffect(() => {
    if (token) {
      navigate('/MainPage');
    } else if (!token && pathname !== '/') {
       navigate('/access-error');
    }
  }, [token]);

  return (
    <Routes>
      <Route path="/" element={<LoginPage/>}/>
      <Route path="/MainPage" element={<MainPage/>}/>
      <Route path="/access-error" element={<AccessError navigate={navigate}/>}/>
    </Routes>
  );
}

export default App;
