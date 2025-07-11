import useTienda from "../hooks/useTienda";
import Categoria from "./Categoria";
import { useAuth } from "../hooks/useAuth";

export default function Sidebar({ isOpen, toggleMenu }) {
  const { categorias } = useTienda();
  const { logout, user } = useAuth({ middleware: "auth" });

  return (
    <aside
      className={`
    fixed top-16 left-0 z-40 bg-white w-64 h-[calc(100vh-4rem)] shadow-lg overflow-y-auto
    transform transition-transform duration-300 ease-in-out
    md:relative md:translate-x-0 md:w-72 md:h-auto md:top-0
    ${isOpen ? "translate-x-0" : "-translate-x-full"}
  `}
    >
      <div className="p-6">
        <img src="/img/logo.svg" alt="Logo" className="w-32 mb-4 mx-auto" />
        <p className="text-center text-lg mb-6">Hola, {user?.name}</p>

        <div className="space-y-2">
          {categorias.map((categoria) => (
            <Categoria key={categoria.id} categoria={categoria} />
          ))}
        </div>

        <button
          onClick={logout}
          className="bg-red-500 text-white font-bold w-full py-2 mt-8 rounded hover:bg-red-600"
        >
          Cancelar Orden
        </button>
      </div>

      {/* Botón de cerrar solo en mobile */}
      <button
        className="absolute top-4 right-4 md:hidden text-xl font-bold"
        onClick={toggleMenu}
      >
        ✕
      </button>
    </aside>
  );
}
