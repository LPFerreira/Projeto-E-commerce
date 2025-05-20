import { useEffect, useState } from 'react';
import PageTitle from './PageTitle';
import Summary from './Summary';
import TableRow from './TableRow';
import './Cart.css';
import { api } from './provider';
import axios from 'axios';
import Footer from '../Footer/Footer';

function IndexCart() {
    const [cart, setCart] = useState([]);

    const productObject = {
        name: 'nome',
        category: 'categoria',
        price: 10.5,
        quantity: 1,

    };

    const fetchCart = () => {
         api.get('/cart').then((response) => {
    console.log('Dados recebidos do backend:', response.data);
    setCart(response.data);
  });
    }

    useEffect(() => {
        fetchCart();
    }, []);

    const handleAddItem = () => {

        console.log('disparou');

        api.post('/cart', productObject).then((response) => console.log(response));

    }
    const handleRemoveItem = (item) => {
        console.log('removido');
        console.log({ item })

      
        api.delete(`/cart/${item._id}`).then(response => {
            console.log(response);
            fetchCart();
        });

    };
    const handleUpdateItem = (item, action) => {

        let newQuantity = item.quantity;

        if(action === 'decrease'){
            if (newQuantity === 1) {
                return;
            }
            newQuantity -= 1;

        }
        if(action === 'increase'){
            newQuantity += 1;
        }

        const newData = {...item, quantity: newQuantity}
        console.log({ newData});
        delete newData._id;

        api.put(`/cart/${item._id}`, newData).then((response) => {
            console.log({response});
            fetchCart();
        });


    };

    const getTotal = () => {
    let sum = 0;

    for (let item of cart) {
        const price = parseFloat(item.price); 
        const quantity = parseInt(item.quantity) || 0;

        if (!isNaN(price)) {
            sum += price * quantity;
        }
    }

    return sum.toFixed(2);
    };
    
    const productTotal = getTotal();

    return (
        <>
            <main>
                <PageTitle data={'Seu carrinho'} />
                <div className='content'>
                    <section>
                        <table>
                            <thead>
                                <tr>
                                    <th>Produto</th>
                                    <th>Preço</th>
                                    <th>Quantidade</th>
                                    <th>Total</th>
                                    <th>-</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map((item) => (
                                    <TableRow 
                                    key={item._id} 
                                    data={item} 
                                    handleRemoveItem={handleRemoveItem}
                                    handleUpdateItem={handleUpdateItem} />
                                ))}
                                {cart.length === 0 && (
                                    <tr>
                                        <td colSpan='5' style={{ textAlign: "center" }}>
                                            <b>Carrinho de compras vazio.</b>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </section>
                    <aside>
                        <Summary total={productTotal} />
                    </aside>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default IndexCart;