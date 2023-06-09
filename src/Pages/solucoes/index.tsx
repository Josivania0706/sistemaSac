import { useNavigate } from "react-router-dom";
import { iMensagemUser, iSolucaoRegister } from "../../contexts/type";
import Header from "../Header"
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/auth";

export const Solucoes = () => {
    const { registerSolucao, user } = useContext(AuthContext);
    const navigate = useNavigate();
   
    const [solucao, setReclamacao] = useState("");
    const status = "1";
    const id_User: string = user!.id;


    const handleLogin = async () => {
        // Verifica se todos os campos obrigatórios estão preenchidos
        if (!solucao) {
            alert("Por favor, preencha todos os campos obrigatórios.");
            return;
        }
        try {
        
            const data: iSolucaoRegister = {
                idsetor: user!.tipo1,
                usuario: user!.nome,
                solucao: solucao,
            }

            const isUser = await registerSolucao(data);

            if (isUser) {
                navigate("/home");
            } else {
                alert("Não foi possível cadastrar solução.");
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
                <h2>Solução</h2>

                <textarea
                    name={solucao}

                    placeholder="Digite seu texto aqui..."
                    value={solucao}
                    onChange={(e) => setReclamacao(e.target.value)}>
                </textarea>

                <button onClick={handleLogin}>Cadastrar</button>
            </div>


        </div>

    );
}

