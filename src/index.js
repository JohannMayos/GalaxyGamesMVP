import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './Home';
import LoginScreen from './login/Login';
import SignupPage from './Signup';
import ForgotPassword from './ForgotPassword';
import GameHome from './GameHome'
import GameDetailsPage from './GameDetailsPage';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginScreen />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/forgetpass' element={<ForgotPassword />} />
        <Route path='/gamehome' element={<GameHome />} />
        <Route path='/game:1' element={<GameDetailsPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

function Index(){
  
}

export default Index

reportWebVitals();
