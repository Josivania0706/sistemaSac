import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";

export const Header = () => {
    const { user } = useContext(AuthContext);
    const location = useLocation();

    const renderLinks = () => {
      
        if (user!.tipo2 === "aluno") {
            return (
                <>
                    <li className={location.pathname === "/home" ? "active" : ""}>
                        <Link to="/home">Início</Link>
                    </li>
                    <li className={location.pathname === "/home/responder" ? "active" : ""}>
                        <Link to="/home/reclamacao">Reclamar</Link>
                    </li>
                    <li className={location.pathname === "/home/historico" ? "active" : ""}>
                        <Link to="/home/historico">Histórico</Link>
                    </li>
                    <li className={location.pathname === "/" ? "active" : ""}>
                        <Link to="/">Sair</Link>
                    </li>
                </>
            );
        } else if (user!.tipo2 === "admin") {
            return (
                <>
                    <li className={location.pathname === "/home" ? "active" : ""}>
                        <Link to="/home">Início</Link>
                    </li>
                    <li className={location.pathname === "/home/dados" ? "active" : ""}>
                        <Link to="/home/dados">Dados</Link>
                    </li>
                    <li className={location.pathname === "/home/mostrarsolucao" ? "active" : ""}>
                        <Link to="/home/mostrarsolucao">Soluções</Link>
                    </li>
                 
                    <li className={location.pathname === "/" ? "active" : ""}>
                        <Link to="/">Sair</Link>
                    </li>
                </>
            );
        } else if (user!.tipo2 === "setor") {
            return (
                <>
                    <li className={location.pathname === "/home" ? "active" : ""}>
                        <Link to="/home">Início</Link>
                    </li>
                    <li className={location.pathname === "/home/responder" ? "active" : ""}>
                        <Link to="/home/responder">Responder</Link>
                    </li>
                    <li className={location.pathname === "/home/solucoes" ? "active" : ""}>
                        <Link to="/home/solucoes">Criar soluções</Link>
                    </li>
                    <li className={location.pathname === "/home/mostrarsolucao" ? "active" : ""}>
                        <Link to="/home/mostrarsolucao">Soluções</Link>
                    </li>
                    <li className={location.pathname === "/" ? "active" : ""}>
                        <Link to="/">Sair</Link>
                    </li>
                </>
            );
        }
    }

    return (
        <div>
          <nav className="navbar">
            <div className="logo">
              <img className="colored-image" src="https://i.postimg.cc/mZMHWBqf/logo.png" alt="image host" />
            </div>
            <ul className="menu">
              {renderLinks()}
            </ul>
          </nav>
        </div>
      );
    };
    
    export default Header;