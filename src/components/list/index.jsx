import Card from "../card";
import "./style.css";

function List({ listTransactions }) {
  return (
    <>
      <div className="fullScreen">
        <nav className="containerNav">
          <div className="divResumo">
            <p>Resumo financeiro</p>
          </div>
          <ul className="listaDeBtn">
            <button className="btnTodos"> Todos</button>
            <button className="btnEntrada">Entrada</button>
            <button className="btnSaida">Saida</button>
          </ul>
        </nav>
        <div className="cardTamanho">
          {listTransactions.length > 0 ? (
            listTransactions.map((item, i) => <Card key={i} item={item} />)
          ) : (
            <>
            <div className="divSemOperacoes">
              <div className="divBarraGrande"> </div>
              <div className="divBarraPequena"> </div>
            </div>
            <div className="divSemOperacoes">
            <div className="divBarraGrande"> </div>
            <div className="divBarraPequena"> </div>
          </div>
          <div className="divSemOperacoes">
          <div className="divBarraGrande"> </div>
          <div className="divBarraPequena"> </div>
        </div>
        </>
          )}
        </div>
      </div>
    </>
  );
}
export default List;
