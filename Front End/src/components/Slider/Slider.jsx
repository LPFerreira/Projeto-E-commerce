import { Swiper, SwiperSlide } from 'swiper/react'
import './Slider.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard, faGift, faHeadphones, faLocationDot, faPercent } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


function Slider() {
    const Banner = [
        { id: '1', image: "./src/components/img/Banner1.webp" },
        { id: '2', image: "./src/components/img/BannerML.webp" },
        { id: '3', image: "./src/components/img/Banner2.webp" },
    ]
    const imgBanner = [
        { id: '1', image: "./src/components/img/BannerMulher.webp" },
        { id: '2', image: "./src/components/img/BannerV.webp" },
        { id: '3', image: "./src/components/img/Banner3.webp" },
    ]
    const img = [
        { id: '1', image: "./src/components/img/cadeiragamer.webp" },
        { id: '2', image: "./src/components/img/camisafloral.webp" },
        { id: '3', image: "./src/components/img/mochila.webp" },
        { id: '4', image: "./src/components/img/leggings.webp" },
        { id: '5', image: "./src/components/img/travesseiro.webp" },
        { id: '6', image: "./src/components/img/quadro.webp" },
        { id: '7', image: "./src/components/img/frigideira.webp" },
    ]
    const imgReC = [
        { id: '1', image: "./src/components/img/casaco.webp" },
        { id: '2', image: "./src/components/img/3camisasmulher.webp" },
        { id: '3', image: "./src/components/img/camisa.webp" },
        { id: '4', image: "./src/components/img/chinelo.webp" },
        { id: '5', image: "./src/components/img/sapatenis.webp" },
        { id: '6', image: "./src/components/img/camisa.webp" },
        { id: '7', image: "./src/components/img/frigideira.webp" },
    ]
    const imgElet = [
        { id: '1', image: "./src/components/img/cafeteiraa.webp" },
        { id: '2', image: "./src/components/img/Airfryer.webp" },
        { id: '3', image: "./src/components/img/travesseiro.webp" },
        { id: '4', image: "./src/components/img/conjuntorecipiente.webp" },
        { id: '5', image: "./src/components/img/frigideira.webp" },
        { id: '6', image: "./src/components/img/ferramentas.webp" },
        { id: '7', image: "./src/components/img/espremedor.webp" },
    ]

    return (
        <>
            <div className='box'>
                <Swiper
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    navigation
                >
                    {Banner.map((item) => (
                        <SwiperSlide key={item.id}>
                            <img
                                src={item.image}
                                alt="Slider"
                                className="slide-banner"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>

                <Swiper
                    slidesPerView={5}
                    pagination={{ clickable: true }}
                    navigation
                >
                    {img.map((item) => (
                        <SwiperSlide key={item.id}>
                            <img
                                src={item.image}
                                alt="Slider"
                                className="slide-item"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className='legenda'>
                    <h3>Promoções</h3>
                </div>
                <div className="text">
                    <h2>Na nossa loja, você encontra produtos de qualidade, com preços justos,
                        entrega rápida e um atendimento feito com carinho e atenção.
                        Estamos aqui para tornar sua vida mais prática, conectando você ao que há de melhor em [moda, tecnologia, beleza, casa, etc.]</h2>
                    
                    <h2> 🔸 Navegue com segurança</h2>
                    <h2> 🔸 Receba no conforto da sua casa</h2>
                    <h2> 🔸 Pague com os melhores meios e total proteção</h2>
                    <h2>  Nosso compromisso é com a sua satisfação, do clique à entrega.</h2>

                    <h2> 🛒 Experimente agora!</h2>

                    <h2>  Porque comprar online pode (e deve) ser simples, confiável e especial.</h2>
                    <h2> Registra-se ou faça login...</h2>

                    <h2>  e ganhe 30% de desconto na primeira compra, não perca essa oportunidade!!!</h2>
                </div>
            </div>

            <div className='row'>
                <div className="cards">
                    <Link to={"/Location"}>
                        <h3>Insira sua localização</h3>
                        <FontAwesomeIcon icon={faLocationDot} style={{ color: "rgb(8, 8, 8)" }} />
                        <h3>Confira custos e prazos de entrega.</h3>
                        <button className="saberMais">Saber mais</button>
                    </Link>
                </div>
                <div className="cards">
                    <Link to={"/Vendidos"}>
                        <h3>Mais vendidos</h3>
                        <FontAwesomeIcon icon={faGift} style={{ color: "rgb(8, 8, 8)" }} />
                        <h3>Explore os produtos que são tendência.</h3>
                        <button className="saberMais">Saber mais</button>
                    </Link>
                </div>

                <div className="cards">
                    <Link to={"/search"}>
                        <h3>Promoções</h3>
                        <FontAwesomeIcon icon={faPercent} style={{ color: "rgb(8, 8, 8)" }} />
                        <h3>Confira produtos com preços baixos.</h3>
                        <button className="saberMais">Saber mais</button>
                    </Link>
                </div>

                <div className="cards">
                    <Link to={"/Pagamento"}>
                        <h3>Meios de pagamentos</h3>
                        <FontAwesomeIcon icon={faCreditCard} style={{ color: "rgb(8, 8, 8)" }} />
                        <h3>Pague suas compras com segurança.</h3>
                        <button className="saberMais">Saber mais</button>
                    </Link>
                </div>

                <div className="cards">
                    <Link to={"/Chat"}>
                        <h3>Precisa de ajuda?</h3>
                        <FontAwesomeIcon icon={faHeadphones} style={{ color: "rgb(8, 8, 8)" }} />
                        <h3>Fale conosco através do chat.</h3>
                        <button className="saberMais">Saber mais</button>
                    </Link>
                </div>
            </div>

            <div className='ofertas'>  //   Não perca as melhoras ofertas    //</div>

            <div className='box'>
                <Swiper
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    navigation
                >
                    {imgBanner.map((item) => (
                        <SwiperSlide key={item.id}>
                            <img
                                src={item.image}
                                alt="Slider"
                                className="slide-banner"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className='bntFinalizar'>
                    <button className="button">Recomendado</button>
                    <button className="button">Calçados</button>
                    <button className="button">Eletrodoméstico</button>
                    <button className="button">Mulher</button>
                    <button className="button">Homem</button>
                    <button className="button">Crianças</button>
                </div>


                <Swiper
                    slidesPerView={5}
                    pagination={{ clickable: true }}
                    navigation
                >
                    {imgReC.map((item) => (
                        <SwiperSlide key={item.id}>
                            <img
                                src={item.image}
                                alt="Slider"
                                className="slide-item"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className='legenda'>
                    <h3>Mais vendidos em roupas e calçados</h3>
                </div>

                <Swiper
                    slidesPerView={5}
                    pagination={{ clickable: true }}
                    navigation
                >
                    {imgElet.map((item) => (
                        <SwiperSlide key={item.id}>
                            <img
                                src={item.image}
                                alt="Slider"
                                className="slide-item"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className='legenda'>
                    <h3>Mais vendidos em casa e cozinha</h3>
                </div>
            </div>
        </>
    )
}
export default Slider