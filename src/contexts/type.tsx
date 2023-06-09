export interface iAuthProvider {
    children: React.ReactNode
}

export interface iObjectUser {
    id: string;
    nome: string;
    tipo1: string;
    tipo2: string;
}
export interface iDataLogin {
    email: string;
    senha: string;
}

export interface iDataRegister {
    nome: string;
    senha: string;
    email: string;
    tipousuario: string;
}

export interface iMensagemUser {
    titulo: string
    reclamacao: string;
    destino: string;
    status: string;
    id_User: string;
}

export interface iSolucaoRegister
{
    idsetor: string;
    usuario: string;
    solucao: string;
}
export interface iMensagemBase {
    idmsg: string;
    msgtitulo: string;
    msgtxt: string;
    msgdata: string;
    msgdestino: string
    msgstatus: string;
    userid: string;
    resposta?: string;

}


export interface igraficoDate {
    tudo: number;
    faculdade: number;
    professor: number;
    direcao: number;
    servicosgerais: number;
    coordenacao: number;
    pfaculdade: number;
    pprofessor: number;
    pdirecao: number;
    pservicosgerais: number;
    pcoordenacao: number;
}

export interface iRespostaBase {
    isrpst: string;
    resposta: string;
    remetente: string;
    data: string;
}

export interface iRespostaUser {
    resposta: string;
    idmsg: string;
}
export interface iRespostaUser1 {
    msgresposta: string;
    msgstatus: string;
    msgdestino: string
    user_id: string;
}

export interface ibuscarMsg {
    userid: string;
    filter: string;
}

export interface ibuscarSolucao {
    idsetor: string;
    filter: string;
}

export interface iSolucaoBase
 {
    idslcs: string;
    idsetor: string;
    usuario: string
    solucoes: string;
    data: string;
}

export interface iAuthTypes {
    user: iObjectUser | null;
    
    showSolucoes(idmsg: ibuscarSolucao): Promise<iSolucaoBase[]>;
    showResposta(idmsg: string): Promise<iRespostaBase[]>;
    showDateGrafico(data: ibuscarMsg): Promise<igraficoDate | false>;
    showMensagem(data: ibuscarMsg): Promise<iMensagemBase[]>;
    
    registerSolucao(data: iSolucaoRegister): Promise<boolean>;
    registerMensagemUser(data: iMensagemUser): Promise<boolean>;
    registerRespostaUser(data: iRespostaUser): Promise<boolean>;
    registerUser(data: iDataRegister): Promise<boolean>;
    
    loginUser(data: iDataLogin): Promise<boolean>;
    logoutUser(data: iDataLogin): Promise<boolean>;
}
