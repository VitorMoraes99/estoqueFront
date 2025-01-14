import React from 'react';
import * as C from "./styles";
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    navigate("/login");
  };

  return (
    <C.Container>
      <C.Header>
        <C.Title>Controle de Estoque</C.Title>
      </C.Header>
      <C.LogoutButton onClick={handleLogout}>Sair</C.LogoutButton>
    </C.Container>
  );
};

export default Header;
