import React, { useState } from "react";
import Input from "../../Components/Inputs/index.js";
import Button from "../../Components/Button/index.js";
import './styles.css'
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [emailConf, setEmailConf] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { signup } = useAuth();

  const handleSignup = () => {
    if (!email | !emailConf | !senha) {
      setError("Preencha todos os campos");
      return;
    } else if (email !== emailConf) {
      setError("Os e-mails não são iguais");
      return;
    }

    const res = signup(email, senha);

    if (res) {
      setError(res);
      return;
    }

    alert("Usuário cadatrado com sucesso!");
    navigate("/");
  };

  return (
    <div className="container">
      <label id="label">SISTEMA DE LOGIN</label>
      <div className="content">
        <Input
          type="email"
          placeholder="Digite seu E-mail"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <Input type="email" placeholder="Confirme seu E-mail" value={emailConf} onChange={(e) => [setEmailConf(e.target.value), setError("")]}/>
        <Input type="password" placeholder="Crie sua Senha" value={senha} onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
        <label id="labelError">{error}</label>
        <Button Text="Inscrever-se" onClick={handleSignup} />
        <label id="LabelLogin">
          Já tem uma conta?
          <strong>
            <Link to="/">&nbsp;Entre</Link>
          </strong>
        </label>
      </div>
    </div>
  );
};

export default Signup;
