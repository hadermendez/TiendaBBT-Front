import { formatMoney } from "../helpers";
import useTienda from "../hooks/useTienda";

export default function Producto({
  producto,
  botonAgregar = false,
  botonDisponible = false,
}) {
  const { handleClickModal, handleSetProdcuto, handleClickProductoAgotado } =
    useTienda();

  const { nombre, imagen, precio } = producto;
  // Obtiene la URL base de la API desde las variables de entorno
  const apiUrlBase = import.meta.env.VITE_API_URL;

  // Remueve el prefijo 'public/' de la ruta de la imagen y ajusta la ruta para apuntar a 'storage/imagenes/'
  const imagePath = imagen.replace("public/", "storage/");

  // Construye la URL completa de la imagen
  const imageUrl = new URL(imagePath, apiUrlBase).href;
  console.log(imageUrl);
  return (
    // <div className=" border p-3 shadow bg-white">
    <div className="border p-3 shadow bg-white rounded-lg flex flex-col h-full">
      <img
        src={imageUrl}
        alt={`imagen ${nombre}`}
        className="w-full h-40 object-cover rounded-md"
      />

      <div className="p-5">
        <h3 className="text-2xl font-bold">{nombre}</h3>
        <p className="mt-4 font-extrabold text-indigo-500 text-[clamp(1rem,4vw,1.5rem)] whitespace-nowrap overflow-hidden text-center">
          <span className="align-middle">$</span>{" "}
          {formatMoney(precio).replace("$", "")}
        </p>

        {botonAgregar && (
          <button
            type="button"
            className="mt-auto bg-black hover:bg-gray-700 text-white w-full py-2 mt-4 rounded font-semibold uppercase tracking-wide text-sm"
            onClick={() => {
              handleClickModal();
              handleSetProdcuto(producto);
            }}
          >
            Agregar
          </button>
        )}
        {botonDisponible ? (
          <button
            type="button"
            className=" bg-black hover:bg-gray-400 text-white w-full mt-5 p-3 uppercase font-bold"
            onClick={() => {
              handleClickProductoAgotado(producto.id);
            }}
          >
            Producto Agotado
          </button>
        ) : (
          !botonAgregar && (
            <button
              type="button"
              className=" bg-black hover:bg-gray-400 text-white w-full mt-5 p-3 uppercase font-bold"
              onClick={() => {
                handleClickProductoAgotado(producto.id);
              }}
            >
              Producto Disponible
            </button>
          )
        )}
      </div>
    </div>
  );
}
