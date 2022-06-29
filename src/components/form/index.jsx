import "./styles.css";
import { useState } from "react";

function Form({ novaOperacao }) {
  const [valor, setValor] = useState("");
  const [descricao, setDescricao] = useState("");
  const [operacao, setOperacao] = useState("Entrada");

  function handler(event) {
    event.preventDefault();
    novaOperacao({
      valor: Number(valor),
      descricao: descricao,
      operacao: operacao,
    });
  }

  return (
    <>
      <form className="principal" onSubmit={handler}>
        <div className="divDescricao">
          <label className="labelDescricao">
            {" "}
            <p>Descrição</p>{" "}
          </label>
          <input
            className="inputDescricao"
            placeholder="Descrição"
            onChange={(event) => setDescricao(event.target.value)}
          />
          <span>Ex:Compra de uma camiseta</span>
        </div>

        <div className="posicao">
          <div className="divValor">
            <label className="labelValor">
              <p>Valor</p>
            </label>
            <input
              className="inputValor"
              placeholder="Valor"
              onChange={(event) => setValor(Number(event.target.value.replace("," , ".")))}
            />
          </div>

          <div className="divEntrada">
            <label className="labelTipoDeTransacao">
              {" "}
              <p>Tipo de transação</p>{" "}
            </label>
            <select
              className="selectEntrada"
              onChange={(event) => setOperacao(event.target.value)}
            >
              <option value="Entrada">Entrada</option>{" "}
              <option value="Saida">Saida</option>
            </select>
          </div>
        </div>

        <div className="divBtn">
          <button className="btnInserir" type="submit">
            Inserir Valor
          </button>
        </div>
      </form>
    </>
  );
}

export default Form;
