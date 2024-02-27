import React, { useState } from 'react';
import './App.css';
import { Link } from 'react-router-dom';


const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Password:', password);
    // Aqui você pode adicionar a lógica para fazer login com os dados fornecidos
  };

  const handleForgotPassword = () => {
    // Aqui você pode adicionar a lógica para redirecionar para a tela de recuperação de senha
    console.log('Esqueceu sua senha?');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ marginBottom: 10 }}
      />
      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ marginBottom: 10 }}
      />
      <button onClick={handleLogin} style={{ marginBottom: 10 }}>Login</button>
      <button onClick={handleForgotPassword}><Link to='/forgetpass'>Esqueceu sua Senha?</Link></button>
    </div>
  );
};

export default LoginScreen;
