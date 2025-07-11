import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

import Modal from "react-modal";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Sidebar from "../components/Sidebar";
import Resume from "../components/Resume";
import useTienda from "../hooks/useTienda";
import ModalProducto from "../components/ModalProducto";
import { useAuth } from "../hooks/useAuth";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

export default function Layout() {
  useAuth({ middleware: "auth" });
  const { modal } = useTienda();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    setMostrarResumen(false); // ← cerramos el resumen si se abre el menú
  };

  const { setMostrarResumen, mostrarResumen, pedido } = useTienda();
  const totalProductos = pedido.reduce(
    (total, item) => total + item.cantidad,
    0
  );

  // Bloquear scroll del body cuando el menú está abierto
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isSidebarOpen]);

  return (
    <>
      {/* Botón hamburguesa visible solo en móviles */}
      {/* Barra superior solo en mobile */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-white shadow p-4 flex items-center justify-between h-16">
        <button onClick={toggleSidebar} className="text-2xl">
          ☰
        </button>
        <h1 className="text-lg font-bold">
          {import.meta.env.VITE_COMPANY_NAME}
        </h1>
        <button
          onClick={() => setMostrarResumen(!mostrarResumen)}
          className="md:hidden absolute right-4 top-4"
        >
          🛒
          {totalProductos > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
              {totalProductos}
            </span>
          )}
        </button>
      </div>

      {/* Fondo oscuro (overlay) solo en móviles */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      <div className="md:flex min-h-screen">
        {/* Sidebar responsive */}
        <Sidebar isOpen={isSidebarOpen} toggleMenu={toggleSidebar} />

        {/* Contenido principal */}
        <main className="flex-1 h-screen overflow-y-auto bg-gray-100 p-3 pt-16 md:pt-3">
          <Outlet />

          {/* Resume al final del contenido en mobile */}
          <div className="block md:hidden mt-6">
            <Resume />
          </div>
        </main>

        {/* Resume como sidebar en desktop */}
        <div className="hidden md:block w-full md:w-72">
          <Resume />
        </div>
      </div>

      {/* Modal para detalle de producto */}
      <Modal isOpen={modal} style={customStyles}>
        <ModalProducto />
      </Modal>

      <ToastContainer />
    </>
  );
}
