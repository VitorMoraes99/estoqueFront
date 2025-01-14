import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as C from "./styles";
import { api } from "../../api";

const RegisterScreen: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [age, setAge] = useState<number>(0);
  const navigate = useNavigate();

  async function Register() {
    try {
      const res = await api.post("/register", {
        email,
        password,
        name,
        age: Number(age),
      });
      alert("Usuário criado com sucesso!");
      navigate("/login");
    } catch (e) {
      console.log(e);
      alert("Falha ao criar conta");
    }
  }

  return (
    <C.Container>
      <C.BackgroundTop />
      <C.BackgroundBottom />
      <C.RegisterBox>
        <C.Title>Cadastro</C.Title>
        <C.Form onSubmit={(e) => { e.preventDefault(); Register(); }}>
          <C.Input
            type="text"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <C.Input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <C.Input
            type="number"
            placeholder="Idade"
            required
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
          />
          <C.Input
            type="password"
            placeholder="Crie sua senha"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <C.Button type="submit">Cadastrar</C.Button>
        </C.Form>
        <C.LoginLink>
          Já tem uma conta? <Link to="/login">Faça login</Link>
        </C.LoginLink>
      </C.RegisterBox>
    </C.Container>
  );
};

export default RegisterScreen;
