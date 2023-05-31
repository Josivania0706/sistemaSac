import { useState } from "react";
import './style.css';
import { Link } from "react-router-dom";



export const Register = () => {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfimarSenha] = useState("");
    const [categoria, setCategoria] = useState("");


    const handleLogin = async () => {
        try {

        } catch (error) {
            //setError(error.message);
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
                        value={categoria}
                        onChange={(e) => setCategoria(e.target.value)}
                    >
                        <option value="categoria1">default</option>
                        <option value="categoria2">Aluno</option>
                        <option value="categoria3">Admin</option>
                        <option value="categoria4">Professor</option>
                        <option value="categoria5">Direção</option>
                        <option value="categoria6">Serviços gerais</option>
                        <option value="categoria7">Coordenador</option>
                    </select>
                </div>

                <button onClick={handleLogin}>Cadastrar</button>
                <p>Possui cadastro? <Link to={"/"}>Entrar</Link></p>
            </div>


        </div>

            );
};

export default Register;