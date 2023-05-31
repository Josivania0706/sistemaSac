import { useEffect, useState } from "react";
import './styleAluno.css';
import { Link, useLocation } from "react-router-dom";
import { RiEmotionHappyLine } from "react-icons/ri";
import { HiOutlineEmojiSad } from "react-icons/hi";



export const Homealuno = () => {
    const location = useLocation();
    const [selectedOption, setSelectedOption] = useState('');
    const [dados, setDados] = useState([]);
    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
    };

    /*useEffect(() => {
        // Função para buscar os dados do banco de dados
        const buscarDadosDoBanco = async () => {
            // Realize a consulta ao banco de dados para obter as informações desejadas

            // Exemplo fictício de dados recuperados do banco de dados
            const dadosDoBanco = await buscarDados(); // Função para buscar os dados do banco de dados

            // Atualize o estado com os dados obtidos
            setDados(dadosDoBanco);
        };

        // Chame a função para buscar os dados ao montar o componente
        buscarDadosDoBanco();
    }, []);
    */

    const dat = [
        {
            "id": "1",
            "titulo": "Exemplo de Título 1",
            "conteudo": "Este é o conteúdo do exempSSlo 1. v Este é o conteúdo do exempSSlo 1. v Este é o conteúdo do exempSSlo 1. Este é o conteúdo do exempSSlo 1.",
            "horario": "2023-05-30T12:30:00Z",
            "status": "0",
        },
        {
            "id": "2",
            "titulo": "Exemplo de Título 2",
            "conteudo": "Este é o conteúdo do exemplo 2. Este é o conteúdo do exempSSlo 1.Este é o conteúdo do exempSSlo 1.",
            "horario": "2023-05-31T09:45:00Z",
            "status": "0",
        },
        {
            "id": "3",
            "titulo": "Exemplo de Título 3",
            "conteudo": "Este é o conteúdo do exemplo 3. Este é o conteúdo do exempSSlo 1. Este é o conteúdo do exempSSlo 1.",
            "horario": "2023-06-01T15:20:00Z",
            "status": "1",
        },
        {
            "id": "4",
            "titulo": "Exemplo de Título 4",
            "conteudo": "Este é o conteúdo do exempSSlo 1.",
            "horario": "2023-05-30T12:30:00Z",
            "status": "1",
        },
        {
            "id": "5",
            "titulo": "Exemplo de Título 5",
            "conteudo": "Este é o conteúdo do exemplo 2.",
            "horario": "2023-05-31T09:45:00Z",
            "status": "1",
        },
        {
            "id": "6",
            "titulo": "Exemplo de Título 6",
            "conteudo": "Este é o conteúdo do exemplo 3. Este é o conteúdo do exempSSlo 1.Este é o conteúdo do exempSSlo 1.",
            "horario": "2023-06-01T15:20:00Z",
            "status": "0",
        },
        {
            "id": "7",
            "titulo": "Exemplo de Título 7",
            "conteudo": "Este é o conteúdo do exempSSlo 1.",
            "horario": "2023-05-30T12:30:00Z",
            "status": "1",
        },
        {
            "id": "8",
            "titulo": "Exemplo de Título 8",
            "conteudo": "Este é o conteúdo do exemplo 2.Este é o conteúdo do exempSSlo 1.Este é o conteúdo do exempSSlo 1.",
            "horario": "2023-05-31T09:45:00Z",
            "status": "1",
        },
        {
            "id": "9",
            "titulo": "Exemplo de Título 9",
            "conteudo": "Este é o conteúdo do exemplo 3.",
            "horario": "2023-06-01T15:20:00Z",
            "status": "0",
        }
    ]

    return (
        <div >
            <div>
                <nav className="navbar">
                    <div className="logo">
                        <img className="colored-image" src="https://i.postimg.cc/mZMHWBqf/logo.png" alt="image host" />
                    </div>
                    <ul className="menu">
                        <li className={location.pathname === '/home/aluno' ? 'active' : ''}>
                            <Link to="/home/aluno">Home</Link></li>
                        <li className={location.pathname === '/reclamacoes' ? 'active' : ''}>
                            <Link to="/Home/aluno/reclamacoes">Reclamar</Link></li>
                        <li className={location.pathname === '/' ? 'active' : ''}>
                            <Link to="/">Sair</Link></li>

                    </ul>
                </nav>
            </div>


            <div className="divReclamacoes">

                <h1>Reclamações</h1>

                <div className="container">
                    <div className="row">
                        <div className="item-row">
                            <h4 className={`item ${selectedOption === '' ? 'active' : ''}`}// vazio representa todas reclamações
                                onClick={() => handleOptionClick('')}>
                                Últimas
                            </h4>
                        </div>
                        <div className="item-row">
                            <h4 className={`item ${selectedOption === '0' ? 'active' : ''}`}// 0 representa todas reclamações respondidas
                                onClick={() => handleOptionClick('0')}>
                                Respondidas
                            </h4>
                        </div >
                        <div className="item-row">
                            <h4 className={`item ${selectedOption === '1' ? 'active' : ''}`}// 1 representa todas reclamações não lidas
                                onClick={() => handleOptionClick('1')}>
                                Não Respondidas
                            </h4>
                        </div>
                    </div>
                </div>
                <div >
                    <ul className="conteudoReclamacao">
                        {dat.map((item) => {
                            if (selectedOption === '' || selectedOption === item.status) {
                                return <li key={item.id}>
                                    <p >{item.titulo}</p>
                                    <p>{item.conteudo}</p>
                                    <p className="horarioIcone">
                                        <p>{item.horario}</p>
                                        {item.status === "0" ? <div className="iconeHappy"><RiEmotionHappyLine title={"Respondido"} /></div> : <div className="iconeSad"><HiOutlineEmojiSad title={"Não respondido"} /></div>}
                                    </p>
                                </li>;
                            }
                            return null;
                        })}
                    </ul>

                </div>
            </div>


        </div>

    );
};