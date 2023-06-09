import { useContext, useEffect, useState } from "react";
import { RiEmotionHappyLine } from "react-icons/ri";
import { HiOutlineEmojiSad } from "react-icons/hi";
import { Header } from "../../Pages/Header";
import { AuthContext } from "../../contexts/auth";
import { iRespostaUser, iMensagemBase, ibuscarMsg, iRespostaBase } from "../../contexts/type";
import './popup.css'
import { useNavigate } from "react-router-dom";

export const Responder = () => {
    const [resposta, setResposta] = useState<string>();
    const { showMensagem, user, registerRespostaUser, showResposta } = useContext(AuthContext);
    const navigate = useNavigate();
    const [selectedOption, setSelectedOption] = useState("1");
    const [filter1] = useState("all");
    const [dados, setDados] = useState<iMensagemBase[]>([]);
    const [selectedMessage, setSelectedMessage] = useState<iMensagemBase | null>(null);

    const [respostabanco, setRespostabanco] = useState<iRespostaBase[]>([]);
  
    const [idmsg, setIdmsg] = useState<string>('');

    
    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
    };

    const handleCardClick = (message: iMensagemBase) => {
       
        setSelectedMessage(message);
        setIdmsg(message.idmsg);
      };

    useEffect(() => {
        const match = async () => {
            try {
                const data: ibuscarMsg = {
                    userid: user!.id,
                    filter: filter1,
                };
                const msgs = await showMensagem(data);
                const resp = await showResposta("1");
                setRespostabanco(resp)
               
                setDados(msgs);
                
            } catch (error) {
                console.error("Erro ao carregar reclamações:", error);
                alert("Ocorreu um erro ao fazer login. Por favor, tente novamente.");
            }
        };

        match();
    }, []);


    const handResposta = async () => {
        // Verifica se todos os campos obrigatórios estão preenchidos
        if (!resposta) {
            alert("Por favor, preencha o campo resposta.");
            return;
        }
        try {
            setIdmsg (selectedMessage!.idmsg)
            const data: iRespostaUser = { resposta, idmsg };
          
            const isUser = await registerRespostaUser(data);
           
            if (isUser) {
                navigate("/home");
            } else {
                alert("Usuário não encontrado. Verifique suas credenciais.");
            }
        } catch (error) {
            console.error("Erro ao fazer cadastro:", error);
            alert("Ocorreu um erro ao fazer cadstro. Por favor, tente novamente.");
        }
    };

    return (
        <div>
            <Header />

            <div className="divReclamacoes">
                <h1>Reclamações</h1>

                <div className="container">
                    <div className="row">
                        <div className="item-row">
                            <h4
                                className={`item ${selectedOption === "0" ? "active" : ""}`}
                                onClick={() => handleOptionClick("0")}
                            >
                                Respondidas
                            </h4>
                        </div>
                        <div className="item-row">
                            <h4
                                className={`item ${selectedOption === "1" ? "active" : ""}`}
                                onClick={() => handleOptionClick("1")}
                            >
                                Não Respondidas
                            </h4>
                        </div>
                    </div>
                </div>

                {user && dados.length > 0 ? (
                    <div>
                        <ul className="conteudoReclamacao">
                            {dados.map((item) => {
                                  const result = respostabanco.find((r) => r.remetente === item.idmsg);
                               
                                if (
                                    (selectedOption === "" || selectedOption === item.msgstatus) &&
                                    item.msgdestino === user.tipo1 && !result
                                ) 
                                {
                                    return (
                                        <li key={item.idmsg} onClick={() => {
                                            handleCardClick(item);
                                            setIdmsg(item.idmsg)
                                          }}>
                                            <p>{item.msgtitulo}</p>
                                            <p>{item.msgtxt}</p>
                                            
                                            <p className="horarioIcone">
                                                <p>{item.msgdata}</p>
                                                {item.msgstatus === "0" ? (
                                                    <div className="iconeHappy">
                                                        <RiEmotionHappyLine title={"Respondido"} />
                                                    </div>
                                                ) : (
                                                    <div className="iconeSad">
                                                        <HiOutlineEmojiSad title={"Não respondido"} />
                                                    </div>
                                                )}
                                            </p>
                                        </li>
                                    );
                                }
                             
                                if (
                                    (selectedOption === "" || ((selectedOption==="0"))) &&
                                    item.msgdestino === user.tipo1 && result
                                ) 
                                {
                                   
                                    return (
                                        <li key={item.idmsg} onClick={() => {
                                            
                                            setIdmsg(item.idmsg)
                                          }}>
                                            <p>{item.msgtitulo}</p>
                                            <p>{item.msgtxt}</p>
                                            
                                            {result && (
                                                <p className="corResposta">Resposta: {result.resposta}
                                                    <p>{result.data}</p>
                                                </p>
                                            )}

                                            <p className="horarioIcone">
                                                <p>{item.msgdata}</p>
                                                {item.msgstatus === "0" || result ? <div className="iconeHappy"><RiEmotionHappyLine title={"Respondido"} /></div> : <div className="iconeSad"><HiOutlineEmojiSad title={"Não respondido"} /></div>}

                                            </p>
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

                {selectedMessage && (

                    <div className="popup">
                        <div className="popup-content">
                            <h2>{selectedMessage.msgtitulo}</h2>
                            <p>{selectedMessage.msgtxt}</p>
                        
                            
                            <textarea placeholder="Responda aqui..."
                                value={resposta}
                                onChange={(e) => setResposta(e.target.value)}></textarea>
                            <button onClick={handResposta}>Enviar</button>
                            <button onClick={() => setSelectedMessage(null)}>Fechar</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
