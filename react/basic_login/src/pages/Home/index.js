import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button";
import useAuth from "../../hooks/useAuth";
import "./styles.css";

const Home = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="container">
      <h2>Home</h2>
      <Button Text="Sair" onClick={() => [signout(), navigate("/")]}>
        Sair
      </Button>
    </div>
  );
};

export default Home;
