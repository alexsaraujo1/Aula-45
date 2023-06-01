import TabelaProdutos from "./TabelaProdutos";

export default function Estoque({ produtos }) {
  return (
    <>
      <p> Componente Estoque</p>
      <BarraPesquisa />
      <TabelaProdutos produtos={produtos} />
    </>
  );
}

function BarraPesquisa() {
  return (
    <form>
      <input type="text" placeholder="Pesquisar..." />
      <label>
        <input type="checkbox" />
        Somente mostrar produtos em estoque
      </label>
    </form>
  );
}
