import { useState } from "react";
import "./App.css";
import Form from "./components/form";
import Card from "./components/card";
import List from "./components/list";
import header from "./img/header.png";
import SomaTotal from "./components/Total";

function App() {
  const [listTransactions, setListTransactions] = useState([]);

  function novaOperacao(adicionarOperacao) {
    setListTransactions([...listTransactions, adicionarOperacao]);
  }

  return (
    <div className="App">
      <header className="headerPrincipal">
        {" "}
        <img src={header} />{" "}
        <button className="btnInicio">Inicio</button>
      </header>
      <div className="App-div">
        <div className="fullScreen">
        <Form novaOperacao={novaOperacao} />
        <SomaTotal listTransactions={listTransactions} />
        </div>
        <List listTransactions={listTransactions} />
        
      </div>
    </div>
  );
}

export default App;
