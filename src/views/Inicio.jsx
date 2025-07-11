import useSWR from "swr";
import Producto from "../components/Producto";
import clienteAxios from "../config/axios";
import { productos as data } from "../data/productos";
import useTienda from "../hooks/useTienda";

import ErrorBoundary from "../components/ErrorBoundary";

export default function Inicio() {
  const { categoriaActual } = useTienda();
  const token = localStorage.getItem("AUTH_TOKEN");

  const fetcher = () =>
    clienteAxios("api/productos", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((data) => data.data);
  const { data, error, isLoading } = useSWR("api/productos", fetcher, {
    refreshInterval: 1000,
  });
  console.log(data);
  console.log(error);
  // console.log(isloading)
  //   return
  if (isLoading) return <div>Cargando...</div>;
  if (error) return <div>Error al cargar</div>;
  if (!data) return <div>Cargando...</div>;
  const productos = data.data.filter(
    (producto) => producto.categoria_id === categoriaActual.id
  );

  return (
    // <>
    <ErrorBoundary>
      <div>
        <h1 className="text-4xl font-black">
          {categoriaActual ? categoriaActual.nombre : "Cargando categoría..."}
        </h1>

        <p className=" text-2xl my-10">Elige tu pedido.</p>
        <div className=" grid gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {/* <div className=" grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3"> */}
          {productos
            ?.filter((producto) => producto.disponible)
            .map((producto) => (
              <Producto
                key={producto.imagen}
                producto={producto}
                botonAgregar={true}
              />
            ))}
        </div>
      </div>
    </ErrorBoundary>
  );
}
