import "./Login.css"
import React, { useEffect, useState } from 'react';
import Logout from "./Logout";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

function Clientes () {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (!token) {
            alert("Você precisa estar logado.");
            navigate("/login");
            return;
        }

        try {
            const decoded = jwtDecode(token);
            setUser(decoded);
        } catch (error) {
            console.error("Erro ao decodificar o token:", error);
            localStorage.removeItem("token");
            navigate("/Homepage");
        }
    }, [navigate]);

    return (
        
        <div className="container">
            <form>
            
            {user && (
                <h2>Olá {user.name}! 
                Bem-vindo(a) à página de Clientes.</h2>
            )}
            <Logout />
            </form>
        </div>
    );
}

export default Clientes