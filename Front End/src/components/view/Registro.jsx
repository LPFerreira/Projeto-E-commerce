import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import './Registro.css'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const api = axios.create({
    baseURL: 'http://localhost:3000/'
})

function Registro() {
    const [users, setUsers] = useState([])
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();


    useEffect(() => {
        api.get('/users').then((response) => {
            setUsers(response.data)
        });

        const token = localStorage.getItem('token');
        if (token) {
            setIsLoggedIn(true);
        }
    }, []);

    const newUser = () => {
        if (!name.trim() || !email.trim() || !password.trim()) {
        alert("Por favor, preencha todos os campos obrigatórios (nome, email e senha).");
        return;
        }

        api.post('/users', {
            email, name, password
        }).then((response) => {
            alert("Registrado com sucesso");
            localStorage.setItem('welcomeMessage', 'true');

           navigate("/login");
        }).catch(error => {
           alert("Erro ao registrar o usuário. Tente novamente.");
        });
};
     
    const handleLogout = () => {
        localStorage.removeItem('token');
        alert('Logout realizado.');
        setIsLoggedIn(false);
        navigate("/registro");
    };
    

    // Se o usuário já está logado
    if (isLoggedIn) {
        return (
            <div className="container">
                <form>
                <h2>Você já é registrado.</h2>
                <h2>Deseja sair para registrar uma nova conta?</h2>
                <button className="bntLogout" onClick={handleLogout}>Fazer Logout</button>
                <button className="bntHome" onClick={() => navigate("/dashboard")}>Ir para o Home</button>
                </form>
            </div>
        );
    }
    return (
        <div className='container'>
            
            <form>
                <h1>Registrar</h1>
                <input className='nome' 
                placeholder='Nome' onChange={event => setName(event.target.value)} />

                <input className='email' 
                placeholder='Email' onChange={event => setEmail(event.target.value)} />

                <input type="password" className='password' 
                placeholder='Password' onChange={event => setPassword(event.target.value)} />

                <button type="button" className='bntForm' onClick={newUser}>Sign Up</button>
             

                <h2>Registrar com </h2>

                <nav className='navButton'>

                    <a href="https://www.facebook.com/login.php/"
                        id="facebook" className="facebook"> facebook <FontAwesomeIcon icon={faFacebook} />
                    </a>

                    <a href="https://www.google.com/"
                        id="google" className="google"> google <FontAwesomeIcon icon={faGoogle} />
                    </a>

                    <a href="https://www.github.com/"
                        id="github" className="github"> github <FontAwesomeIcon icon={faGithub} />
                    </a>
                </nav>
                <Link to={"/login"}>
                <h2>Já é registrado faça login</h2>
                </Link>
            </form>
        </div>
    )
}
export default Registro
