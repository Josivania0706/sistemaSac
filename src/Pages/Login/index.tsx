import { useState } from "react";
import './styleLogin.css';
import { Link } from "react-router-dom";



export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleLogin = async () => {
   
  };

  return (
    <div >
      <div className="logo1">
        <img src="https://i.postimg.cc/mZMHWBqf/logo.png" alt="image host"/>
      </div>

      <div className="cardLogin1">
        <h2>Login</h2>
       
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Entrar</button>
        
        <Link to={"/recuperarsenha"}>Esqueci minha senha</Link>
        <p>Ainda não tem uma conta? <Link to="/register">Criar conta</Link></p>
      </div>

    </div>

  );
};

export default LoginPage;