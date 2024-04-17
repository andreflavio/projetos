import { Link } from "react-router-dom";
import "./index.css";
import logo from "../../../assets/logo.jpg";
import home from "../../../assets/botao_home.jpg";
import dashboard from "../../../assets/botao_dashboard.jpg";
import equipe from "../../../assets/botao_equipe.jpg";
import projeto from "../../../assets/botao_projeto.jpg";

export default function Atibaia() {
    return (
        <div className="menu">
            <div className="navbar">
                <div className="logo-div">
                    <img className="logo" src={logo} alt="" />
                </div>
                <div className="border-bottom"></div>
                {/* Quadrado ao lado direito com cargo e status */}
                <div className="cargo-status">
                    <div><img className="logo1" src={logo} alt="" /></div>
                    <div className="status_">
                        <div className="cargo">Gestor</div>
                        <div className="status">Status: Disponível</div>
                    </div>
                </div>
                <div className="border-bottom"></div>
                <div className="navegar">
                    <Link to="/Acesso"><div><img className="fav-botao" src={home} alt="" /> <span>Home</span></div></Link>
                    <Link to="/"><div><img className="fav-botao" src={dashboard} alt="" /> <span>Dashboard</span></div></Link>
                    <Link to="/"><div><img className="fav-botao" src={equipe} alt="" /> <span>Equipe</span></div></Link>
                    <Link to="/"><div><img className="fav-botao" src={projeto} alt="" /> <span>Projeto</span></div></Link>
                </div>
            </div>
            <div className="meio">
                <div className="home"></div>
                <div className="relatorio"> Status Entregas: Atibaia
                    <div>
                        <h2>Relatório</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Analista</th>
                                    <th>Finalizado</th>
                                    <th>Não Finalizado</th>
                                    <th>Validado</th>
                                    <th>Não Validado</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Aqui você pode mapear os dados e gerar as linhas da tabela dinamicamente */}
                                {/* Exemplo de linha estática */}
                                <tr>
                                    <td>Analista 1</td>
                                    <td>81</td>
                                    <td>126</td>
                                    <td>0</td>
                                    <td>207</td>
                                </tr>
                                <tr>
                                    <td>Analista 2</td>
                                    <td>782</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>782</td>
                                </tr>
                                {/* Adicione mais linhas conforme necessário */}
                            </tbody>
                        </table>
                    </div>
                </div>


            </div>

        </div>
    );
}