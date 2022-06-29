import "./style.css";

function SomaTotal({ listTransactions }) {
  return (
    <div className="divSomaTotal">
      <div className="divtextoValorTotal">
        <h3>Valor Total</h3>
        <span>o valor se refere ao saldo</span>
      </div>
      <div className="divValorTotal">
        <p>
          {listTransactions.reduce((acc, cur) => {
            return cur.operacao === "Entrada"
              ? (acc + cur.valor)
              : (acc - cur.valor);
          }, 0).toLocaleString("pt-BR", {
            minimumFractionDigits: 2,
            style: "currency",
            currency: "BRL"})}
        </p>
      </div>
    </div>
  );
}

export default SomaTotal;
