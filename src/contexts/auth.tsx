import axios from "axios";
import { iAuthProvider, iAuthTypes, iDataLogin, iDataRegister, iMensagemBase, iMensagemUser, iObjectUser, ibuscarMsg } from "./type";
import { createContext, useState } from 'react';


export const api = axios.create({
    baseURL: 'http://sac.com/api',
    timeout: 5000
});

export const AuthContext = createContext({} as iAuthTypes);


export const AuthProvider = ({ children }: iAuthProvider) => {

    const [user, setUser] = useState<iObjectUser | null>(null);

    const registerMensagemUser = async (data: iMensagemUser) => {
        try {
            const response = await api.post('/reclamacoesProcesso.php', data);
    
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

    const showMensagem = async(data: ibuscarMsg) => {
        try {
            const response = await api.post('/msgrow.php', data);
            console.log("recebido: ",response.data)
           
            if (response.status === 200) {//deu certo cadastrar a msg
                return  response.data as iMensagemBase[];
            } 
        } catch (error) {
            console.log(error)
            alert('Ops, não foi possível acessar o banco');
            
        }
        return [];
    }
    const registerUser = async (data: iDataRegister) => { //ok
        try {
            const response = await api.post('/formcadastro.php', data);
            console.log(response)

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
                console.log(user)
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
        <AuthContext.Provider value={{ user,showMensagem, registerMensagemUser, registerUser, loginUser, logoutUser }}>
            {children}
        </AuthContext.Provider>
    )
}
