import { useContext, useEffect, useState } from "react";
import { RiEmotionHappyLine } from "react-icons/ri";
import { HiOutlineEmojiSad } from "react-icons/hi";
import { Header } from "../../Pages/Header";
import { AuthContext } from "../../contexts/auth";
import { iMensagemBase, ibuscarMsg } from "../../contexts/type";
import './popup.css'

export const Responder = () => {
    const [resposta, setResposta] = useState("");
    const { showMensagem, user } = useContext(AuthContext);

    const [selectedOption, setSelectedOption] = useState("");
    const [filter1] = useState("all");
    const [dados, setDados] = useState<iMensagemBase[]>([]);
    const [selectedMessage, setSelectedMessage] = useState<iMensagemBase | null>(null);

    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
    };

    const handleCardClick = (message: iMensagemBase) => {
        setSelectedMessage(message);
    };

    useEffect(() => {
        const match = async () => {
            try {
                const data: ibuscarMsg = {
                    userid: user!.id,
                    filter: filter1,
                };
                const msgs = await showMensagem(data);
                setDados(msgs);
            } catch (error) {
                console.error("Erro ao carregar reclamações:", error);
                alert("Ocorreu um erro ao fazer login. Por favor, tente novamente.");
            }
        };

        match();
    }, []);

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
                                if (
                                    (selectedOption === "" || selectedOption === item.msgstatus) &&
                                    item.msgdestino === user.tipo1
                                ) {
                                    return (
                                        <li key={item.idms} onClick={() => handleCardClick(item)}>
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
                            <button>Enviar</button>
                            <button onClick={() => setSelectedMessage(null)}>Fechar</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
