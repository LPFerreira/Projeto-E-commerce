import { useNavigate } from "react-router-dom";
import "./login.css"

function Logout() {
    const navigate = useNavigate();

    const handleLogout = () => {
        const token = localStorage.getItem('token');

        if (token) {
            localStorage.removeItem('token');
            alert('Logout realizado com sucesso!');
            navigate("/");
        } else {
            alert('Você já está deslogado.');
        }
    };

    return (
        <div className="container">
            <div className="clientes">
                <button className="Idioma">Idioma</button>
                <button className="Mudar">Mudar de conta</button>
                <button className="definições">Definições</button>
                <button className="Ajuda">Ajuda</button>
                <button className="Contacto">Contacto</button>
                <button className="feedback">Enviar feedback</button>
                <button className="Logout" onClick={handleLogout}>Sair</button>
            </div>
        </div>
    );
}

export default Logout;
