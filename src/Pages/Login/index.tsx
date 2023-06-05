import { useState, useContext } from "react";
import './styleLogin.css';
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../contexts/auth";


export const LoginPage = () => {
  const { loginUser } = useContext(AuthContext)
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");


  const handleLogin = async () => {
    try {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert("Por favor, insira um email válido.");
        return;
      }
      if (senha.length < 6) {
        alert("A senha deve ter no mínimo 6 caracteres.");
        return;
      }
      const data = {email,senha}
      const isUser = await loginUser(data);


      if (isUser) {
        navigate("/home");
      } else {
        alert("Usuário não encontrado. Verifique suas credenciais.");
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      alert("Ocorreu um erro ao fazer login. Por favor, tente novamente.");
    }
  };

  return (
    <div >
      <div className="logo1">
        <img src="https://i.postimg.cc/mZMHWBqf/logo.png" alt="image host" />
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
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <button onClick={handleLogin}>Entrar</button>

        <Link to={"/recuperarsenha"}>Esqueci minha senha</Link>
        <p>Ainda não tem uma conta? <Link to="/register">Criar conta</Link></p>
      </div>

    </div>

  );
};

export default LoginPage;