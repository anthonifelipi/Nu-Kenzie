import "./style.css";
import trash from "../../img/trash.png";

function Card({ item }) {
  const { valor, descricao, operacao } = item;
  return (
    <>
        <div className={operacao === "Entrada"? "containerEntrada" : "containerSaida"}>
          <div className="divCardTipo">
            <h3>{descricao}</h3>
            <span>{operacao}</span>
          </div>
          <div className="divCardValor">
            <p>{valor.toLocaleString('pt-BR', { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' })}</p>
            <img src={trash} alt="excluir" />
          </div>
        </div>
    </>
  );
}
export default Card;
