import React, { useEffect, useState } from "react";
import './Mensagem.css';
import Footer from "../Footer/Footer";

function Mensagem() {
    const [showWelcome, setShowWelcome] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        const welcome = localStorage.getItem('welcomeMessage');

        if (token) {
            setIsLoggedIn(true);
        }

        if (welcome === 'true') {
            setShowWelcome(true);
            localStorage.removeItem('welcomeMessage'); // mostrar só uma vez
        }
    }, []);

    return (
        <>
            <div className="bloco">
                {showWelcome ? (
                    <>
                        <h3 className="caixaMsg">🎉 Parabéns pelo registro!</h3>
                        <h3>🎁 Você ganhou <strong>30% de desconto</strong> na sua primeira compra!</h3>
                        <h3>Aproveite essa oportunidade única 😍</h3>
                    </>
                ) : isLoggedIn ? (
                    <>
                        <h3 className="caixaMsg">Caixa de mensagens vazia.</h3>
                    </>
                ) : (
                    <>
                        <h3 className="caixaMsg">Caixa de mensagens vazia.</h3>
                        <h3>Registre-se ou faça login...</h3>
                        <h3>e ganhe 30% de desconto na primeira compra!</h3>
                    </>
                )}
            </div>
            <Footer />
        </>
    );
}

export default Mensagem;
