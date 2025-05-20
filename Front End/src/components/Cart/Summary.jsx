import React from 'react';


const Summary = ({ total }) => {
  return (
    <>
      <div className='box'>
        <div className='resultCompra'>Resumo da compra</div>
        <div className='info'>
          <div>
            <span>Sub-total</span>
            <span>{total}€</span>
          </div>
          <div>
            <span>Frete</span>
            <span>Gratuito</span>
          </div>
          <div>
            <button>
              Adicionar cupom de desconto
              <i className='bx bx-right-arrow-alt'></i>
            </button>
          </div>
        </div>
        <footer>
          <span>Total</span>
          <span>{total}€</span>
        </footer>
      </div>
      <button className='finalizar'>Finalizar Compra</button>
    </>
  );
};

export default Summary;