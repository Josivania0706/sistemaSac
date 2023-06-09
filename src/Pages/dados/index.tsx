import { useEffect, useState, useContext } from "react";
import { iMensagemBase, ibuscarMsg, igraficoDate } from "../../contexts/type";
import { AuthContext } from "../../contexts/auth";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import Header from "../Header";



ChartJS.register(ArcElement, Tooltip, Legend);


export const Dados = () => {

    const { showMensagem, user } = useContext(AuthContext);
    const [filter1, setfilter1] = useState("all");
    const [dados, setDados] = useState<iMensagemBase[]>([]);

    const [vetor, setVetor] = useState<any[]>([]);

    useEffect(() => {
        const match = async () => {
            try {
                const data: ibuscarMsg = {
                    userid: user!.id,
                    filter: filter1,
                };
                const msgs = await showMensagem(data);


                setDados(msgs)
                console.log("msg", dados)

                const filteredDadosProfessor = msgs
                    .filter((mensagem) => mensagem.msgdestino === '3')
                    .map((mensagem) => ({
                        idmsg: mensagem.idmsg,
                        msgtitulo: mensagem.msgtitulo,
                        msgtxt: mensagem.msgtxt,
                        msgdata: mensagem.msgdata,
                        msgdestino: mensagem.msgdestino,
                        msgstatus: mensagem.msgstatus,
                        userid: mensagem.userid,
                        resposta: mensagem.resposta,
                    }));

            
                const filteredDadosDirecao = msgs
                    .filter((mensagem) => mensagem.msgdestino === '4')
                    .map((mensagem) => ({
                        idmsg: mensagem.idmsg,
                        msgtitulo: mensagem.msgtitulo,
                        msgtxt: mensagem.msgtxt,
                        msgdata: mensagem.msgdata,
                        msgdestino: mensagem.msgdestino,
                        msgstatus: mensagem.msgstatus,
                        userid: mensagem.userid,
                        resposta: mensagem.resposta,
                    }));

                

                const filteredDadosC = msgs
                    .filter((mensagem) => mensagem.msgdestino === '5')
                    .map((mensagem) => ({
                        idmsg: mensagem.idmsg,
                        msgtitulo: mensagem.msgtitulo,
                        msgtxt: mensagem.msgtxt,
                        msgdata: mensagem.msgdata,
                        msgdestino: mensagem.msgdestino,
                        msgstatus: mensagem.msgstatus,
                        userid: mensagem.userid,
                        resposta: mensagem.resposta,
                    }));

               

                const filteredDadosSG = msgs
                    .filter((mensagem) => mensagem.msgdestino === '6')
                    .map((mensagem) => ({
                        idmsg: mensagem.idmsg,
                        msgtitulo: mensagem.msgtitulo,
                        msgtxt: mensagem.msgtxt,
                        msgdata: mensagem.msgdata,
                        msgdestino: mensagem.msgdestino,
                        msgstatus: mensagem.msgstatus,
                        userid: mensagem.userid,
                        resposta: mensagem.resposta,
                    }));

               

                const p = [filteredDadosProfessor.length, filteredDadosDirecao.length, filteredDadosC.length, filteredDadosSG.length]
                setVetor(p);
                console.log("vetor: ", vetor)

            } catch (error) {
                console.error("Erro ao carregar reclamações:", error);
                alert("Ocorreu um erro ao fazer login. Por favor, tente novamente.");
            }
        };
    
        match();
    }, []);


    const data = {


        labels: ['Professor', 'Coordenação', 'Direção', 'Serviço Geral'],
        datasets: [
            {
                label: 'qnt',
                data: vetor,
                backgroundColor: [
                    'rgba(255,0,0, 0.5)',
                    'rgba(75,0,130, 0.5)',
                    'rgba(0, 100, 0, 0.5)',
                    'rgba(0,139,139, 0.5)',

                ],
                borderColor: [
                    'rgba(255,0,0, 1)',
                    'rgba(75,0,130, 1)',
                    'rgba(0, 100, 0, 1)',
                    'rgba(0,139,139, 1)',

                ],
                borderWidth: 1,
            },
        ],
    };


    return (
        <>
            <Header />
            <div style={{ width: '500px', height: '400px', margin: '0 auto' }}>
                <h1>Gráfico das Reclamações</h1>

                <Pie data={data} />
            </div>
        </>
    )

}

