import { useContext, useEffect, useState } from "react";
import './styleHome.css';
import { Link, useLocation } from "react-router-dom";
import { RiEmotionHappyLine } from "react-icons/ri";
import { HiOutlineEmojiSad } from "react-icons/hi";
import { Header } from "../../Header/index";
import { AuthContext } from "../../../contexts/auth";
import { iMensagemBase, ibuscarMsg } from "../../../contexts/type";



export const Home = () => {

    const { showMensagem, user } = useContext(AuthContext);

    const location = useLocation();
    const [selectedOption, setSelectedOption] = useState('');
    const [filter1, setfilter1] = useState("all");
    const [dados, setDados] = useState<iMensagemBase[]>([]);
    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
    };
    

    useEffect(() => {
        const match = async () => {
            try {
                const data: ibuscarMsg = {
                    userid: user!.id,
                    filter: filter1,
                };
                const msgs = await showMensagem(data);
                setDados(msgs)

            } catch (error) {
                console.error("Erro ao carregar reclamações:", error);
                alert("Ocorreu um erro ao fazer login. Por favor, tente novamente.");
            }
        };

        match();
    }, []);





    const renderBody = () => {

        if (user!.tipo2 === "aluno") {
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



                        {user && dados.length > 0 ?
                            <div >
                                <ul className="conteudoReclamacao">
                                    {dados.map((item) => {
                                        if (selectedOption === '' || selectedOption === item.msgstatus) {
                                            return <li key={item.idms}>
                                                <p >{item.msgtitulo}</p>
                                                <p>{item.msgtxt}</p>
                                                <p className="horarioIcone">
                                                    <p>{item.msgdata}</p>
                                                    {item.msgstatus === "0" ? <div className="iconeHappy"><RiEmotionHappyLine title={"Respondido"} /></div> : <div className="iconeSad"><HiOutlineEmojiSad title={"Não respondido"} /></div>}
                                                </p>
                                            </li>;
                                        }
                                        return null;
                                    })}
                                </ul>

                            </div>
                            : (
                                <p>Você não possui histórico</p>
                            )
                        }
                    </div>

                </>
            );
        } else if (user!.tipo2 === "admin") {
            return (
                
                <>
                    <div className="divReclamacoes">

                        <h4>Reclamações</h4>
                        <div className="container">
                            <div className="row">
                                
                            
                            <div className="item-row">
                                    <h4 className={`item ${selectedOption === '3' ? 'active' : ''}`}// 0 representa todas reclamações respondidas
                                        onClick={() => handleOptionClick('3')}>
                                        Professor
                                    </h4>
                                </div >
                                <div className="item-row">
                                    <h4 className={`item ${selectedOption === '4' ? 'active' : ''}`}// 0 representa todas reclamações respondidas
                                        onClick={() => handleOptionClick('4')}>
                                        Direção
                                    </h4>
                                </div >
                                <div className="item-row">
                                    <h4 className={`item ${selectedOption === '5' ? 'active' : ''}`}// 0 representa todas reclamações respondidas
                                        onClick={() => handleOptionClick('5')}>
                                        Coordenador
                                    </h4>
                                </div >
                                <div className="item-row">
                                    <h4 className={`item ${selectedOption === '6' ? 'active' : ''}`}// 1 representa todas reclamações não lidas
                                        onClick={() => handleOptionClick('6')}>
                                       Serviços Gerais
                                    </h4>
                                </div>
                            </div>
                        </div>

                    </div>

                    {user && dados.length > 0 ?
                            <div >
                                <ul className="conteudoReclamacao">
                                    {dados.map((item) => {
                                        if ((selectedOption === '' || selectedOption === item.msgdestino)) {
                                            return <li key={item.idms}>
                                                <p >{item.msgtitulo}</p>
                                                <p>{item.msgtxt}</p>
                                                <p className="horarioIcone">
                                                    <p>{item.msgdata}</p>
                                                    {item.msgstatus === "0" ? <div className="iconeHappy"><RiEmotionHappyLine title={"Respondido"} /></div> : <div className="iconeSad"><HiOutlineEmojiSad title={"Não respondido"} /></div>}
                                                </p>
                                            </li>;
                                        }
                                        return null;
                                    })}
                                </ul>

                            </div>
                            : (
                                <p>Você não possui histórico</p>
                            )
                        }
                </>
            );
        } else if (user!.tipo2 === "setor") {
            return (
                <>
                    <div className="divReclamacoes">

                        <h1>Reclamações</h1>

                        <div className="container">
                            <div className="row">

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



                        {user && dados.length > 0 ?
                            <div >
                                <ul className="conteudoReclamacao">
                                    {dados.map((item) => {
                                        if ((selectedOption === '' || selectedOption === item.msgstatus) && user!.tipo1 === item.msgdestino) {
                                            return <li key={item.idms}>
                                                <p >{item.msgtitulo}</p>
                                                <p>{item.msgtxt}</p>
                                                <p className="horarioIcone">
                                                    <p>{item.msgdata}</p>
                                                    {item.msgstatus === "0" ? <div className="iconeHappy"><RiEmotionHappyLine title={"Respondido"} /></div> : <div className="iconeSad"><HiOutlineEmojiSad title={"Não respondido"} /></div>}
                                                </p>
                                            </li>;
                                        }
                                        return null;
                                    })}
                                </ul>

                            </div>
                            : (
                                <p>Você não possui histórico</p>
                            )
                        }
                    </div>

                </>
            );
        }
    }

    return (
        <div >

            <Header />
            {renderBody()}
        </div>


    );
};