import { formatMoney } from "../helpers";
import useTienda from "../hooks/useTienda";
import ResumenProducto from "./ResumenProducto";

export default function Resume() {
  const {
    pedido,
    total,
    handleSubmitNuevoPedido,
    mostrarResumen,
    setMostrarResumen,
  } = useTienda();

  const comprobarPedido = () => pedido.length === 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSubmitNuevoPedido();
  };

  return (
    <aside
      className={`
        w-72 md:block fixed md:relative z-50 top-0 right-0 h-screen overflow-y-scroll p-5 bg-white shadow-lg transition-transform duration-300
        ${mostrarResumen ? "translate-x-0" : "translate-x-full"}
        md:translate-x-0
      `}
    >
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-black">Mi pedido</h1>
        {/* Botón para cerrar en mobile */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMostrarResumen(false)}
        >
          ✕
        </button>
      </div>
      <p className=" text-lg my-5">Resumen de tu pedido</p>

      <div className="py-5">
        {pedido.length === 0 ? (
          <p className="text-center text-2xl">No hay items en el pedido</p>
        ) : (
          pedido.map((producto) => (
            <ResumenProducto key={producto.id} producto={producto} />
          ))
        )}
      </div>

      <p className="text-xl mt-10">
        Total: <span className="font-bold">{formatMoney(total)}</span>
      </p>

      <form className="w-full" onSubmit={handleSubmit}>
        <div className="mt-5">
          <input
            type="submit"
            className={`${
              comprobarPedido() ? "bg-gray-200" : "bg-black hover:bg-slate-600"
            } px-5 py-2 rounded uppercase font-bold text-white text-center w-full cursor-pointer`}
            value="Confirmar pedido"
            disabled={comprobarPedido()}
          />
        </div>
      </form>
    </aside>
  );
}
