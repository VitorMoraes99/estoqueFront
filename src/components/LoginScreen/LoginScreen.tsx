import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as C from "./styles";
import { api } from "../../api";

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  async function Login() {
    try {
      const res = await api.post("/users/login", {
        email,
        password,
      });
      localStorage.setItem("userToken", res.data.token);
      localStorage.setItem("userId", res.data.user.id);
      navigate("/");
    } catch (e) {
      console.log(e);
      alert("Falha ao fazer login");
    }
  }

  return (
    <C.Container>
      <C.BackgroundTop />
      <C.BackgroundBottom />
      <C.LoginBox>
        <C.LoginText>Login</C.LoginText>
        <C.Form
          onSubmit={(e) => {
            e.preventDefault();
            Login();
          }}
        >
          <C.Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <C.Input
            type="password"
            placeholder="Senha"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <C.Button type="submit">Entrar</C.Button>
        </C.Form>
        <C.RegisterText>
          <span>Não tem uma conta? </span>
          <Link to="/register" style={{ color: "teal" }}>
            Cadastre-se
          </Link>
        </C.RegisterText>
      </C.LoginBox>
    </C.Container>
  );
};

export default LoginScreen;
