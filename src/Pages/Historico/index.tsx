import { useContext, useEffect, useState } from "react";
import { Header } from "../Header"
import { AuthContext } from "../../contexts/auth";
import { iMensagemBase, iRespostaBase, ibuscarMsg } from "../../contexts/type";
import { RiEmotionHappyLine } from "react-icons/ri";
import { HiOutlineEmojiSad } from "react-icons/hi";


export const Historico = () => {

    const { showMensagem, user, showResposta } = useContext(AuthContext);

    const [selectedOption, setSelectedOption] = useState('');
    const [filter1] = useState("filter");
    const [dados, setDados] = useState<iMensagemBase[]>([]);
    const [resposta, setResposta] = useState<iRespostaBase[]>([]);

    useEffect(() => {
        const match = async () => {
            try {
                const data: ibuscarMsg = {
                    userid: user!.id,
                    filter: filter1,
                };
                const msgs = await showMensagem(data);
                setDados(msgs)
                const resp = await showResposta("1");
                setResposta(resp)
                console.log(user)
              

            } catch (error) {
                console.error("Erro ao carregar reclamações:", error);
                alert("Ocorreu um erro ao buscar reclamações. Por favor, tente novamente.");
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
                            <h4 >
                                Histórico
                            </h4>
                        </div>
                    </div>
                </div>


                {user && dados.length > 0 ? (
                    <div>
                        <ul className="conteudoReclamacao">
                            {dados.map((item) => {
                                const result = resposta.find((r) => r.remetente === item.idmsg);
                                if (selectedOption === '') {//aluno
                                    return (
                                        <li key={item.idmsg}>
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
                                console.log("idd", item.idmsg === result?.remetente)
                                if ((item.idmsg === result?.remetente && item.userid === user.id)
                                    && (item.msgdestino === user.tipo1)) {//setor
                                        
                                    return (
                                        <li key={item.idmsg}>
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
                    <p>Você não possui histórico</p>
                )}

            </div>


        </div>
    );
};