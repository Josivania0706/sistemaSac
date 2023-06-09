import { useContext, useState } from "react";
import './styleReclamar.css'
import { Header } from "../Header";
import { AuthContext } from "../../contexts/auth";
import { useNavigate } from "react-router-dom";
import { iMensagemUser } from "../../contexts/type";


export const Reclamacao = () => {
    const { registerMensagemUser, user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [titulo, setTitulo] = useState("");
    const [reclamacao, setReclamacao] = useState("");
    const [destino, setDestino] = useState("");
    const status = "1";
    const id_User:string = user!.id;


    const handleLogin = async () => {
        // Verifica se todos os campos obrigatórios estão preenchidos
        if (!titulo || !reclamacao || !destino) {
            alert("Por favor, preencha todos os campos obrigatórios.");
            return;
        }
        try {
           
            const data: iMensagemUser  = { titulo, reclamacao, destino, status, id_User }
        
            const isUser = await registerMensagemUser(data);

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
            <Header />

            <div className="cardReclame">
                <h2>Olá, qual a sua reclamação?</h2>

                <input
                    type="titulo"
                    placeholder="Título"
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                />

                <textarea
                    name={reclamacao}

                    placeholder="Digite seu texto aqui..."
                    value={reclamacao}
                    onChange={(e) => setReclamacao(e.target.value)}>
                </textarea>

                <select
                    className="select-estilizado"
                    value={destino}
                    onChange={(e) => setDestino(e.target.value)}
                >
                    <option value="">Setor</option>
                    <option value="3">Professor</option>
                    <option value="4">Direção</option>
                    <option value="6">Serviços gerais</option>
                    <option value="5">Coordenador</option>
                </select>

                <button onClick={handleLogin}>Cadastrar</button>
            </div>


        </div>

    );
};

export default Reclamacao;