import React, { useEffect, useState } from 'react';
import { api } from '../Cart/provider.js';
import './Search.css';


function Search() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todas');

  const fetchProducts = () => {
    api.get('/products')
      .then((res) => {
        setProducts(res.data);
        setFilteredProducts(res.data);
      })
      .catch((err) => console.error("Erro ao buscar produtos:", err));
  };

  const handleAddToCart = (product) => {
    const itemToAdd = { ...product, quantity: 1 };
    api.post('/cart', itemToAdd)
      .then(() => alert(`"${product.name}" Adicionado ao carrinho.`))
      .catch(err => console.error("Erro ao adicionar ao carrinho:", err));
  };

  const handleSearch = () => {
    let filtered = [...products];

    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory !== 'Todas') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    setFilteredProducts(filtered);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    handleSearch();
  }, [searchTerm, selectedCategory, products]);

  
  const categories = ['Todas', ...new Set(products.map(p => p.category))];

  return (
    <main className="home-container">
      <h1>Produtos disponíveis</h1>

      <div className="filters">
        <input
          type="text"
          placeholder="Pesquisar por nome..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div className="product-list">
        {filteredProducts.length === 0 ? (
          <p>Nenhum produto encontrado.</p>
        ) : (
          filteredProducts.map(product => (
            <div key={product._id} className="product-card">
              <img src={product.imagem} alt={product.name} />
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>{product.category}</p>
                <p>Preço: {product.price} €</p>
                <button onClick={() => handleAddToCart(product)}>
                  Adicionar ao carrinho
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </main>
  );
  
}

export default Search;
