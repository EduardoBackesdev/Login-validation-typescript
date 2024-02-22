import {useState, ChangeEvent, FormEvent} from 'react';
import './Style/Login.css';

interface Props{
    login: string;
    password: string;
}

const Login = (props: Props)=> {

    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(login == props.login && password == props.password){
            alert("Voce esta logado")
        } else {
            alert("Seu login esta incorreto, tente novamente")
        }

        setLogin("");
        setPassword("");
    }




    return (
        <div className='Login'>
            <div className='image'>
                <img src="/Assets/Login.jpg" alt="" />
            </div>

            <div className='form'>
                <form onSubmit={handleSubmit}>
                    <img className='logo' src="/Assets/petmania.png" alt="" />
                    <input type="text" placeholder='Seu Login' value={login} onChange={(e)=> setLogin(e.target.value)} />
                    <input type="password" placeholder='Sua senha' value={password} onChange={(e)=> setPassword(e.target.value)}  />
                    <input id='login' type="submit" value="Entrar"/>
                    <p>Não possui conta? Cadastre-se agora!</p>
                </form>
            </div>
        </div>
    )


}

export default Login