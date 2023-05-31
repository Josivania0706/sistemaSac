import { useState } from "react";

import './styleReclamar.css'


export const Reclamacao = () => {
    const [titulo, setTitulo] = useState("");
    const [reclamacao, setReclamacao] = useState("");
    const [setor, setSetor] = useState("");



    const handleLogin = async () => {

    };

    return (
        <div >

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
                    value={setor}
                    onChange={(e) => setSetor(e.target.value)}
                >
                    <option value="categoria1">default</option>
                    <option value="categoria2">Aluno</option>
                    <option value="categoria4">Professor</option>
                    <option value="categoria5">Direção</option>
                    <option value="categoria6">Serviços gerais</option>
                    <option value="categoria7">Coordenador</option>
                </select>

                <button onClick={handleLogin}>Cadastrar</button>
            </div>


        </div>

    );
};

export default Reclamacao;