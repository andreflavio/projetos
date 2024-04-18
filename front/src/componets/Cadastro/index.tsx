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
        <h2 className="mb-3">Cadastre um Colaborador</h2> {/* Adicionado classe do Bootstrap para margem inferior */}

        {/* Campo de entrada para o nome */}
        <div className="input-group mb-3"> {/* Adicionado classe do Bootstrap para margem inferior */}
          <label htmlFor="nome" className="form-label">Nome:</label> {/* Adicionado classe do Bootstrap para rótulos de formulário */}
          <input type="text" id="nome" placeholder="Digite o nome" className="form-control"/> {/* Adicionado classe do Bootstrap para campos de formulário */}
        </div>

        {/* Campo de entrada para o e-mail */}
        <div className="input-group mb-3">
          <label htmlFor="email" className="form-label">E-mail:</label>
          <input type="email" id="email" placeholder="Digite o e-mail" className="form-control"/>
        </div>

        {/* Campo de entrada para o CPF */}
        <div className="input-group mb-3">
          <label htmlFor="cpf" className="form-label">CPF:</label>
          <input type="text" id="cpf" placeholder="Digite o CPF" className="form-control"/>
        </div>

        {/* Campo de entrada para a matrícula */}
        <div className="input-group mb-3">
          <label htmlFor="matricula" className="form-label">Matrícula:</label>
          <input type="text" id="matricula" placeholder="Digite a matrícula" className="form-control"/>
        </div>

        {/* Campo de seleção para o cargo */}
        <div className="input-group mb-3">
          <label htmlFor="cargo" className="form-label">Cargo:</label>
          <select id="cargo" className="form-control">
            {/* Mapeia os cargos disponíveis em opções */}
            {cargos.map((cargo) => (
              <option key={cargo} value={cargo}>
                {cargo}
              </option>
            ))}
          </select>
        </div>

        {/* Campo de entrada para a senha */}
        <div className="input-group mb-3">
          <label htmlFor="senha" className="form-label">Senha:</label>
          <input type="password" id="senha" placeholder="Digite a senha" className="form-control"/>
        </div>

        {/* Botão de envio do formulário */}
        <Link to="/Acesso"><button type="submit" className="btn btn-primary mt-3">Cadastrar</button></Link> {/* Adicionado classe do Bootstrap para margem superior */}
      </form>
    </div>
  );
}
