import React, { useState, ChangeEvent, FormEvent } from 'react';
import './index.css';
import Credentials from '../../types';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
  const [credentials, setCredentials] = useState<Credentials>({ username: '', password: '' });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(credentials);
    // Aqui você pode enviar os dados do formulário para o backend ou fazer outras operações necessárias
  };

  return (
    <div className="App">
      <div className="login-container">
        <h1>ACESSE SUA CONTA</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">USUÁRIO</label>
            <input
              name="username"
              type="text"
              id="username"
              value={credentials.username}
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">SENHA</label>
            <input
              name="password"
              type="password"
              id="password"
              value={credentials.password}
              onChange={handleChange}
            />
          </div>
          <button type="submit">ENTRAR</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
