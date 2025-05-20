import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import Homepage from '../Homepage/Homepage';
import { jwtDecode } from 'jwt-decode';
import "./login.css"

function Dashboard() {
  const [data, setData] = useState(null);
  const [user, setUser] = useState(null);

  const navigate = useNavigate(); //

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      alert('Você precisa estar logado.');
      navigate("/login"); 
      return;
    }
    try {
      const decoded = jwtDecode(token);
      setUser(decoded); 
    } catch (err) {
      console.error("Erro ao decodificar o token:", err);
      localStorage.removeItem('token');
      navigate("/login");
    }

    axios.get('http://localhost:3000/rotaAutenticada', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(response => {
      setData(response.data.message);
    })
    .catch(err => {
      alert('Token inválido ou expirado. Faça login novamente.');
      localStorage.removeItem('token');
      navigate("/"); 
    });

  }, [navigate]);

  return (
    <div className='home'>
        {user && 
        <h2>Seja bem-vindo(a),<h1>{user.name}!</h1></h2>}
      <Homepage />
    </div>
  );
}

export default Dashboard;
