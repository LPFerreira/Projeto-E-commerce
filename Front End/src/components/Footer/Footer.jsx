import './Footer.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub, faInstagram, faTelegram, faWhatsapp, faYoutube } from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return (
        <>
            <div className="footer">
                <ul>
                    <li> <a href="/" id="redesociais">Siga-nos  <FontAwesomeIcon icon={faFacebook} /> <FontAwesomeIcon icon={faWhatsapp} />  <FontAwesomeIcon icon={faInstagram} /> <FontAwesomeIcon icon={faTelegram} />  <FontAwesomeIcon icon={faGithub} /> <FontAwesomeIcon icon={faYoutube} /> </a> </li>

                    <li> <a href="/" className="sobre">Categorias </a> </li>
                    <li> <a href="/" className="sobre">Pagamentos seguros</a> </li>
                    <li> <a href="/" className="sobre">Lista de presentes</a> </li>
                    <li> <a href="/" className="sobre">Publicidade</a> </li>
                    <li> <a href="/" className="sobre">Trabalhe conosco</a> </li>
                    <li> <a href="/" className="sobre">Programa de Afiliados</a> </li>
                    <li> <a href="/" className="sobre">Contacto</a> </li>
                    <li> <a href="/" className="sobre">informações</a> </li>
                    <li> <a href="/" className="sobre">Qualidade e segurança</a> </li>
                    <li> <a href="/" className="sobre">Transporte seguro</a> </li>
                    <li> <a href="/" className="sobre">Termos e condições</a> </li>
                    <li> <h2>Todos os direitos reservados © 2025</h2> </li>
                </ul>
            </div>
        </>
    )
}

export default Footer