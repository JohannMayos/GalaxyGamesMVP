// ForgotPassword.js

import React, { useState } from 'react';
import './ForgotPassword.css'; // Importe o arquivo CSS para estilização

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar o código de redefinição de senha por email
    setMessage(`Um email de redefinição de senha foi enviado para ${email}.`);
    setEmail('');
  };

  return (
    <div className="container">
      <h2>Esqueceu sua senha ?</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">Enviar código</button>
      </form>
      <p className="message">{message}</p>
      <button className="link-button" onClick={() => window.location.href = '/login'}>Voltar ao login</button>
    </div>
  );
};

export default ForgotPassword;
