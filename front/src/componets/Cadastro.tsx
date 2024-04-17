
import './App.css';

export default function Login() {
  const cargos = ['Gestor', 'Editor', 'Revisor'];

  return (
    <div className="App">
      <form className="user-form">
        <h2>Cadastre um Colaborador</h2>

        <div className="input-group">
          <label htmlFor="nome">Nome:</label>
          <input type="text" id="nome" placeholder="Digite o nome" />
        </div>

        <div className="input-group">
          <label htmlFor="email">E-mail:</label>
          <input type="email" id="email" placeholder="Digite o e-mail" />
        </div>

        <div className="input-group">
          <label htmlFor="cpf">CPF:</label>
          <input type="text" id="cpf" placeholder="Digite o CPF" />
        </div>

        <div className="input-group">
          <label htmlFor="matricula">Matrícula:</label>
          <input type="text" id="matricula" placeholder="Digite a matrícula" />
        </div>

        <div className="input-group">
          <label htmlFor="cargo">Cargo:</label>
          <select id="cargo">
            {cargos.map((cargo) => (
              <option key={cargo} value={cargo}>
                {cargo}
              </option>
            ))}
          </select>
        </div>

        <div className="input-group">
          <label htmlFor="senha">Senha:</label>
          <input type="password" id="senha" placeholder="Digite a senha" />
        </div>

        <button type="submit" className="btn btn-primary">Cadastrar</button>
      </form>
    </div>
  );
}
