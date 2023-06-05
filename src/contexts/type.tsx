export interface iAuthProvider {
    children: React.ReactNode
}

// export interface iObjectUser {
//     id: number;
//     name: string;
//     email: string;
//     senha: string;
//     tipo: string;
// }
export interface iObjectUser {
    id: number;
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
    status: number;
    id_User: number;
}
export interface iMensagemBase {
    idms: string;
    msgtitulo: string;
    msgtxt: string;
    msgdata: string;
    msgdestino: string
    msgstatus: string;
    user_id: string;
}

export interface ibuscarMsg {
    userid: Number;
    filter: string;
}

export interface iAuthTypes {
    user: iObjectUser | null;
    showMensagem(data: ibuscarMsg): Promise<iMensagemBase[]>; 
    registerMensagemUser(data: iMensagemUser): Promise<boolean>;
    registerUser(data: iDataRegister): Promise<boolean>;
    loginUser(data: iDataLogin): Promise<boolean>;
    logoutUser(data: iDataLogin): Promise<boolean>;
}
