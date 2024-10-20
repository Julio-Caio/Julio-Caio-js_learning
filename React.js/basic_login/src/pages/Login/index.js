import React, { useState } from "react";
import Input from "../../Components/Inputs/index.js";
import Button from "../../Components/Button/index.js";
import "./styles.css";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Signin = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email | !senha) {
      setError("Preencha todos os campos");
      return;
    }

    const res = signin(email, senha);

    if (res) {
      setError(res);
      return;
    }

    navigate("/home");
  };

  return (
    <div className="container">
      <label id="label">SISTEMA DE LOGIN</label>
      <div className="content">
        <Input type="email" placeholder="Digite seu E-mail"
          value={email} onChange={(e) => [setEmail(e.target.value), setError("")]}/>
        <Input type="password" placeholder="Digite sua Senha" value={senha} onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
        <label id="labelError">{error}</label>
        <Button Text="Entrar" onClick={handleLogin} />
        <label id="LabelSignup">
          Não tem uma conta?
          <strong id="strong">
            <Link to="/signup">&nbsp;Cadastre-se</Link>
          </strong>
        </label>
      </div>
    </div>
  );
};

export default Signin;
