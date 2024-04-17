import { Link } from 'react-router-dom';
import './index.css';

/**
 * Componente para o formulário de cadastro de colaborador.
 * @returns {JSX.Element} O componente JSX do formulário de cadastro.
 */
export default function Cadastro(): JSX.Element {
  // Lista de cargos disponíveis
  const cargos = ['Gestor', 'Editor', 'Revisor'];

  return (
    <div className="App">
      {/* Formulário de cadastro */}
      <form className="user-form">
        <h2>Cadastre um Colaborador</h2>

        {/* Campo de entrada para o nome */}
        <div className="input-group">
          <label htmlFor="nome">Nome:</label>
          <input type="text" id="nome" placeholder="Digite o nome" />
        </div>

        {/* Campo de entrada para o e-mail */}
        <div className="input-group">
          <label htmlFor="email">E-mail:</label>
          <input type="email" id="email" placeholder="Digite o e-mail" />
        </div>

        {/* Campo de entrada para o CPF */}
        <div className="input-group">
          <label htmlFor="cpf">CPF:</label>
          <input type="text" id="cpf" placeholder="Digite o CPF" />
        </div>

        {/* Campo de entrada para a matrícula */}
        <div className="input-group">
          <label htmlFor="matricula">Matrícula:</label>
          <input type="text" id="matricula" placeholder="Digite a matrícula" />
        </div>

        {/* Campo de seleção para o cargo */}
        <div className="input-group">
          <label htmlFor="cargo">Cargo:</label>
          <select id="cargo">
            {/* Mapeia os cargos disponíveis em opções */}
            {cargos.map((cargo) => (
              <option key={cargo} value={cargo}>
                {cargo}
              </option>
            ))}
          </select>
        </div>

        {/* Campo de entrada para a senha */}
        <div className="input-group">
          <label htmlFor="senha">Senha:</label>
          <input type="password" id="senha" placeholder="Digite a senha" />
        </div>

        {/* Botão de envio do formulário */}
        <Link to="/"><button type="submit" className="btn btn-primary">Cadastrar</button></Link>
      </form>
    </div>
  );
}
