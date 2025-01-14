import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
`;

export const BackgroundTop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 50%;
  background-color: teal;
  z-index: -1;
`;

export const BackgroundBottom = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50%;
  background-color: teal;
  z-index: -1;
`;

export const LoginBox = styled.div`
  background: white;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column; /* Adiciona esta linha para empilhar os inputs verticalmente */
  align-items: stretch; /* Certifique-se de que os inputs ocupem toda a largura disponível */
`;

export const Input = styled.input`
  margin-bottom: 20px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;

  &:focus {
    border-color: #3498db;
    outline: none;
  }
`;

export const Button = styled.button`
  padding: 10px;
  font-size: 16px;
  color: white;
  background-color: teal;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: darkcyan;
  }
`;
