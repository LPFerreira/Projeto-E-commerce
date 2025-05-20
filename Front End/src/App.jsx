import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/Header/Header';
import Registro from "./components/view/Registro";
import Login from "./components/view/Login";
import Logout from "./components/view/Logout";
import Mensagem from "./components/Mensagem/Mensagem";
import IndexCart from "./components/Cart/IndexCart";
import Homepage from "./components/Homepage/Homepage";
import Search from "./components/Search/Search";
import Clientes from "./components/view/Clientes";
import Dashboard from "./components/view/DashBoard";
import PrivateRoute from "./components/view/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      {/* 🔄 Header DENTRO do BrowserRouter */}
      <Header />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/search" element={<Search />} />
        <Route path="/mensagem" element={<Mensagem />} />
        <Route path="/cart" element={<IndexCart />} />
        <Route path="/clientes" element={<Clientes />} />

        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
