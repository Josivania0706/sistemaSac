import { useContext, useEffect, useState } from "react";
import { Header } from "../Header"
import { AuthContext } from "../../contexts/auth";
import { iMensagemBase, ibuscarMsg } from "../../contexts/type";
import { RiEmotionHappyLine } from "react-icons/ri";
import { HiOutlineEmojiSad } from "react-icons/hi";


export const Historico = () => {

    const { showMensagem, user } = useContext(AuthContext);

    const [selectedOption, setSelectedOption] = useState('');
    const [filter1] = useState("filter");
    const [dados, setDados] = useState<iMensagemBase[]>([]);

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
                                if (selectedOption === '' || selectedOption === item.msgstatus) {
                                    return (
                                        <li key={item.idms}>
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
                    <p>Você não possui histórico</p>
                )}
            </div>


        </div>
    );
};