import React from 'react';
import './Signup.css';

const SignupPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

  };

  return (
    <div>
      <h2>Cadastro</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome e Sobrenome:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="nickname">Nickname:</label>
          <input type="text" id="nickname" name="nickname" required />
        </div>
        <div>
          <label htmlFor="country">País:</label>
          <select id="country" name="country">
            <option value="usa">Estados Unidos</option>
            <option value="uk">Reino Unido</option>
            {/* Adicione mais opções conforme necessário */}
          </select>
        </div>
        <div>
          <label htmlFor="phone">Telefone:</label>
          <input type="tel" id="phone" name="phone" required />
        </div>
        <div>
          <label htmlFor="timezone">Fuso Horário:</label>
          <select id="timezone" name="timezone">
            <option value="est">EST (Eastern Standard Time)</option>
            <option value="pst">PST (Pacific Standard Time)</option>
            {/* Adicione mais opções conforme necessário */}
          </select>
        </div>
        <div>
          <button type="submit">Cadastrar</button>
        </div>
      </form>
      <button onClick={() => window.location.href = '/login'}>Voltar para o Login</button>
    </div>
  );
};

export default SignupPage;
