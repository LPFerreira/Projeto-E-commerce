import React, { useState, useEffect } from 'react';
import "./Login.css";
import { api } from '../Cart/provider.js';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsLoggedIn(true);
        }
    }, []);


    const handleLogin = async (event) => {
        event.preventDefault();

        try {
            const response = await api.post('http://localhost:3000/login', {
                email,
                password
            });

            const token = response.data.data.token;

            localStorage.setItem("token", token);

            alert('Login realizado com sucesso!');
            navigate("/dashboard");
            

        } catch (error) {
            alert(error.response?.data?.message || "Erro ao fazer login.");
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        alert("Você foi deslogado.");
        setIsLoggedIn(false);
    };

    if (isLoggedIn) {
          return (
            <div className='container'>
                <form>
                <h2>Você já está logado.</h2>
                <h2>Deseja sair para fazer login com outra conta?</h2>
                <button className="bntLogout" onClick={handleLogout}>Fazer Logout</button>
                <button className="bntHome" onClick={() => navigate('/dashboard')}>Ir para o Home</button>
                </form>
            </div>
        );
    }



    return (
        <>
            <div className='container'>
                <form onSubmit={handleLogin}>
                    <h1>Login</h1>
                    <input
                        className='email'
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        className='password'
                        placeholder="Senha"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button className="submit">Entrar</button>
                    <h3>Esqueceu sua senha?</h3>
                    <Link to={"/Registro"}>
                    <h3>Registra-se</h3>
                    </Link>
                </form>
            </div>
            
        </>
    );
}

export default Login;
