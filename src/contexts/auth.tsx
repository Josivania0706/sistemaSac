import axios from "axios";
import { iAuthProvider, iAuthTypes, iDataLogin, iDataRegister, iMensagemBase, iMensagemUser, iObjectUser, iRespostaBase, iRespostaUser, iSolucaoBase, iSolucaoRegister, ibuscarMsg, ibuscarSolucao, igraficoDate } from "./type";
import { createContext, useState } from 'react';


export const api = axios.create({
    baseURL: 'http://sac.com/api',
    timeout: 5000
});

export const AuthContext = createContext({} as iAuthTypes);


export const AuthProvider = ({ children }: iAuthProvider) => {

    const [user, setUser] = useState<iObjectUser | null>(null);

   const registerSolucao = async(data: iSolucaoRegister) => {
    try {
        const response = await api.post('/solucoesform.php', data);

        if (response.status === 200) {//deu certo cadastrar a msg
            return true;
        } else {//O cadastro falhou
            alert('Não foi possível cadastrar!');
        }

    } catch (error) {
        console.log(error)
        alert('Ops, não foi possível acessar o banco');
        
    }
    return false;
   }
   
   
    const registerMensagemUser = async (data: iMensagemUser) => {
        try {
            const response = await api.post('/reclamacoesform.php', data);
    
            if (response.status === 200) {//deu certo cadastrar a msg
                return true;
            } else {//O cadastro falhou
                alert('Não foi possível cadastrar!');
            }

        } catch (error) {
            console.log(error)
            alert('Ops, não foi possível acessar o banco');
            
        }
        return false;
    }

    const registerRespostaUser = async(data:iRespostaUser) => {
        try {
            const response = await api.post('/respostasform.php', data);
            if (response.status === 200) {//deu certo cadastrar a msg
                return true;
            } else {//O cadastro falhou
                alert('Não foi possível cadastrar!');
            }
            
        } catch (error) {
            console.log(error)
            alert('Ops, não foi possível acessar o banco');
        }
        return false;
    }
    const showResposta = async(idmsg: string) =>{

        try {
            const response = await api.post('/rpstrow.php', idmsg);
           
           
            if (response.status === 200) {//deu certo cadastrar a msg
                return  response.data as iRespostaBase[];
            } 
        } catch (error) {
            console.log(error)
            alert('Ops, não foi possível acessar o banco');
            
        }
        return [];
    }

    const showSolucoes = async(data: ibuscarSolucao) => {
        try {
           
            const response = await api.post('/slcsrow.php', data);
            
           
            if (response.status === 200) {//deu certo cadastrar a msg
                return  response.data as iSolucaoBase[];
            } 
        } catch (error) {
            console.log(error)
            alert('Ops, não foi possível acessar o banco');
            
        }
        return [];
    }
    const showMensagem = async(data: ibuscarMsg) => {
        try {
           
            const response = await api.post('/msgrow.php', data);
           
           
            if (response.status === 200) {//deu certo cadastrar a msg
                return  response.data as iMensagemBase[];
            } 
        } catch (error) {
            console.log(error)
            alert('Ops, não foi possível acessar o banco');
            
        }
        return [];
    }

    const showDateGrafico = async(data: ibuscarMsg) => {
        try {
    
            const response = await api.post('/msgrow.php', data);
           
           
            if (response.status === 200) {//deu certo cadastrar a msg
                return  response.data as igraficoDate;
            } 
        } catch (error) {
            console.log(error)
            alert('Ops, não foi possível acessar o banco');
            
        }
        return false;
    }

    
    const registerUser = async (data: iDataRegister) => { //ok
        try {
            const response = await api.post('/cadastroform.php', data);
            

            if (response.status === 200) {//deu certo cadastrar
                return true;
            } else {//O registro falhou
                alert('Não foi possível cadastrar!');
            }

        } catch (error) {
            console.log(error)
            alert('Ops, não foi possível acessar o banco');
        }
        return false;
    }

    const loginUser = async (data: iDataLogin) => {
        try {
           
            const response = await api.post('/login.php', data);
          
            if (response.status === 200) {
                setUser(response.data)
              
                return true;
            } else {
                alert("Usuário não encontrado. Verifique suas credenciais.");
            }
        } catch (error) {
            console.log(error)
            alert('Ops, não foi possível acessar o banco');
        }
        return false;
    }

    const logoutUser = async (data: iDataLogin) => {
        try {
            const response = await api.post('/logout.php', data);
            if (response.status === 200) {
                setUser(null)
                return true;

            } else {
                alert("Não foi possível fazer logout.");
            }
        } catch (error) {
            alert('Ops, não foi possível acessar o banco');
        }
        return false;
    }

    return (
        <AuthContext.Provider value={{ user, showSolucoes, showResposta, showDateGrafico, showMensagem, registerSolucao, registerMensagemUser, registerRespostaUser, registerUser, loginUser, logoutUser }}>
            {children}
        </AuthContext.Provider>
    )
}
