import { useContext, useState } from "react";
import './style.css';
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../contexts/auth";



export const Register = () => {
    const { registerUser } = useContext(AuthContext)
    const navigate = useNavigate();
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfimarSenha] = useState("");
    const [tipousuario, setTipousuario] = useState("");

    const handleRegister = async () => {
        try {
            // Verifica se todos os campos obrigatórios estão preenchidos
            if (!nome || !email || !senha || !confirmarSenha || !tipousuario) {
                alert("Por favor, preencha todos os campos obrigatórios.");
                return;
            }//senha deve ter no mínimo 6 caracteres
            if (senha.length < 6) {
                alert("A senha deve ter no mínimo 6 caracteres.");
                return;
            }
            // Verifica se a senha é igual à confirmação da senha
            if (senha !== confirmarSenha) {
                alert("A senha e a confirmação da senha não coincidem.");
                return;
            }
            // Verifica se o email é válido usando uma expressão regular
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert("Por favor, insira um email válido.");
                return;
            }

            const data = {nome ,senha ,email, tipousuario}
           
            const isUser = await registerUser(data);
        
            if (isUser) {//deu certo cadastrar
                alert('Cadastrado com sucesso!');
                navigate("/");
                // Redirecione para a página desejada
            } else {// O registro falhou
                alert('Não foi possível cadastrar!');
            }
        } catch (error) {
            alert('Ops, não foi possível acessar o banco');
           
        }
    };


    return (
        <div >
            <div className="logo1">
                <img src="https://i.postimg.cc/mZMHWBqf/logo.png" alt="image host" />
            </div>

            <div className="cardLogin">
                <h2>Cadastro</h2>

                <input className="input_"
                    type="nome"
                    placeholder="Nome completo"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />
                <input className="input_"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />


                <div className="modo">
                    <input
                        className="inpuT"
                        type="password"
                        placeholder="Senha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                    />
                    <input
                        className="inpuT"
                        type="password"
                        placeholder="Confirmar senha"
                        value={confirmarSenha}
                        onChange={(e) => setConfimarSenha(e.target.value)}
                    />
                    <select
                        className="select-estilizado"
                        value={tipousuario}
                        onChange={(e) => setTipousuario(e.target.value)}
                    >
                        <option value="">Tipo de usuário</option>
                        <option value="1">Aluno</option>
                        <option value="2">Admin</option>
                        <option value="3">Professor</option>
                        <option value="4">Direção</option>
                        <option value="6">Serviços gerais</option>
                        <option value="5">Coordenador</option>
                    </select>
                </div>

                <button onClick={handleRegister}>Cadastrar</button>
                <p>Possui cadastro? <Link to={"/"}>Entrar</Link></p>
            </div>


        </div>

    );
};

export default Register;