import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../contexts/auth";
import { iSolucaoBase, ibuscarSolucao } from "../../../contexts/type";
import Header from "../../Header";


export const Mostrarsolucoes = () => {

    const { showSolucoes, user, registerRespostaUser, showResposta } = useContext(AuthContext);
    const [solucao, setRespostabanco] = useState<iSolucaoBase[]>([]);
    const [filter1, setFilter1] = useState("all");
    const [selectedOption, setSelectedOption] = useState("");

    useEffect(() => {
        const match = async () => {
            try {
                const data: ibuscarSolucao = {
                    idsetor: user!.tipo1,
                    filter: filter1,
                };


                const resul = await showSolucoes(data);
                setRespostabanco(resul)
                console.log(resul)

            } catch (error) {
                console.error("Erro ao carregar reclamações:", error);
                alert("Ocorreu um erro ao fazer login. Por favor, tente novamente.");
            }
        };

        match();
    }, []);

    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
    };

    const renderBody = () => {

        if (user!.tipo2 === "admin") {
            return (
                <>
                    <div className="divReclamacoes">

                        <h1>Reclamações</h1>

                        <div className="container">
                            <div className="row">
                                <div className="item-row">
                                    <h4 className={`item ${selectedOption === '' ? 'active' : ''}`}// vazio representa todas reclamações
                                        onClick={() => handleOptionClick('')}>
                                        Todas
                                    </h4>
                                </div>
                                <div className="item-row">
                                    <h4 className={`item ${selectedOption === '0' ? 'active' : ''}`}// 0 representa todas reclamações respondidas
                                        onClick={() => handleOptionClick('0')}>
                                        Professor
                                    </h4>
                                </div >
                                <div className="item-row">
                                    <h4 className={`item ${selectedOption === '1' ? 'active' : ''}`}// 1 representa todas reclamações não lidas
                                        onClick={() => handleOptionClick('1')}>
                                        Direção
                                    </h4>
                                </div>
                                <div className="item-row">
                                    <h4 className={`item ${selectedOption === '2' ? 'active' : ''}`}// 1 representa todas reclamações não lidas
                                        onClick={() => handleOptionClick('2')}>
                                        Coordenação
                                    </h4>
                                </div>
                                <div className="item-row">
                                    <h4 className={`item ${selectedOption === '3' ? 'active' : ''}`}// 1 representa todas reclamações não lidas
                                        onClick={() => handleOptionClick('3')}>
                                        Serviço Gerais
                                    </h4>
                                </div>
                            </div>
                        </div>


                        {user && solucao.length > 0 ?
                            <div >
                                <ul className="conteudoReclamacao">
                                    {solucao.map((item) => {
                                        console.log("soplucao ", item.solucoes)

                                        if (selectedOption === '') {
                                            return <li key={item.idslcs}  >
                                                <p >{item.solucoes}</p>
                                                <p>{item.data}</p>
                                            </li>;
                                        }

                                        if (selectedOption === "0" && item.idsetor === "3") {
                                            return <li key={item.idslcs} >
                                                <p >{item.solucoes}</p>
                                                <p>{item.data}</p>
                                            </li>;
                                        }

                                        if (selectedOption === "1" && item.idsetor === "4") {
                                            return <li key={item.idslcs} >
                                                <p >{item.solucoes}</p>
                                                <p>{item.data}</p>
                                            </li>;
                                        }
                                        if (selectedOption === "2" && item.idsetor === "5") {
                                            return <li key={item.idslcs} >
                                                <p >{item.solucoes}</p>
                                                <p>{item.data}</p>
                                            </li>;
                                        }
                                        if (selectedOption === "3" && item.idsetor === "6") {
                                            return <li key={item.idslcs} >
                                                <p >{item.solucoes}</p>
                                                <p>{item.data}</p>
                                            </li>;
                                        }
                                        return null;
                                    })}
                                </ul>

                            </div>
                            : (
                                <p>Não possui histórico</p>
                            )
                        }

                    </div>

                </>
            )
        }

        if (user!.tipo2 === "setor") {
            return (
                <>
                    {user && solucao.length > 0 ? (
                        <div>
                            <ul className="conteudoReclamacao">
                                {solucao.map((item) => {
                                    if (item.idsetor === user!.tipo1) {
                                        
                                        return (

                                            <li key={item.idslcs}>

                                                <p>{item.solucoes}</p>
                                                <p>{item.data}</p>
                                            </li>
                                        );
                                    }
                                    return null;
                                })}
                            </ul>
                        </div>
                    ) : (
                        <p>Não possui histórico</p>
                    )}
                </>
            );
        }
    }

    return (
        <>
            <Header />
            <h1 className="divReclamacoes"  style={{ textAlign: "center",  color: "#06394C" }}>Soluções Gerais</h1>
            {renderBody()}
        </>

    )
}