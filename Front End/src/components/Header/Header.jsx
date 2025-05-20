import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import './Header.css';



function Header() {
    const [hasMessage, setHasMessage] = useState(false);

    useEffect(() => {
        const welcome = localStorage.getItem('welcomeMessage');
        if (welcome === 'true') {
            setHasMessage(true);
        }
    }, []);


    return (
        <>  
           
            <header id="header">
              <div>
                <Link to={"/dashboard"} className="logo">Mercado Livre</Link>
              </div>
                
                <nav>
                    <Link to={"/search"}> 
                    <FontAwesomeIcon icon={faMagnifyingGlass}  style={{ color: "rgb(8, 8, 8)" }} /> 
                    </Link>

                    <Link to={"/mensagem"} className="message-link">
                        <FontAwesomeIcon icon={faEnvelope} style={{ color: "rgb(8, 8, 8)" }} />
                        {hasMessage && <span className="notification-dot"></span>}
                    </Link>

                    <Link to={"/Cart"}>
                        <FontAwesomeIcon icon={faCartShopping} style={{ color: "rgb(8, 8, 8)" }} />
                    </Link>

                    <Link to={"/Registro"}>
                        <button className="bntSignUp">Sign Up </button>
                    </Link>
                    <Link to={"/Login"}>
                        <button className="bntLogin">Login </button>
                    </Link>

                      <Link to={"/Clientes"}>
                        <FontAwesomeIcon icon={faUser} style={{ color: "rgb(8, 8, 8)" }} />
                    </Link>
                </nav>
                
            </header>

            <div className="subHeader">
                <nav>
                    <Link to={"/Search"}>Categorias</Link>

                    <Link to={"/Search"}>Favoritos</Link>
                        
                    <Link to={"/Search"}>Roupas para todas as idades</Link>

                    <Link to={"/Search"}>Casa e cozinha</Link>

                    <Link to={"/Search"}>Mulheres</Link>

                    <Link to={"/Search"}>Homens</Link>

                    <Link to={"/Search"}>Crianças</Link>
                       
                </nav>
            </div>
        </>
    )
}
export default Header;