import { formatMoney } from "../helpers"
import useTienda from "../hooks/useTienda"

export default function Producto({producto, botonAgregar = false, botonDisponible = false}) {
    const { handleClickModal, handleSetProdcuto,handleClickProductoAgotado} = useTienda()

    const {nombre, imagen, precio} = producto
        // Obtiene la URL base de la API desde las variables de entorno
    const apiUrlBase = import.meta.env.VITE_API_URL;

    // Remueve el prefijo 'public/' de la ruta de la imagen y ajusta la ruta para apuntar a 'storage/imagenes/'
    const imagePath = imagen.replace('public/', 'storage/');

    // Construye la URL completa de la imagen
    const imageUrl = new URL(imagePath, apiUrlBase).href;
    console.log(imageUrl)
  return (
    <div className=" border p-3 shadow bg-white">
        <img 
            src={imageUrl} 
            alt={`imagen ${nombre}`}
            className="w-full" 
        />

        <div className="p-5">
            <h3 className="text-2xl font-bold">{nombre}</h3>
            <p className=" mt-5 font-black text-4xl text-indigo-500">
                {formatMoney(precio)}
            </p>
            {botonAgregar && (

                <button
                    type="button"
                    className=" bg-black hover:bg-gray-400 text-white w-full mt-5 p-3 uppercase font-bold"
                    onClick={()=>{
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
                    onClick={()=>{
                        handleClickProductoAgotado(producto.id);
                    }}    
                    >
                    Producto Agotado
                </button>
            ):!(botonAgregar) && (
                <button
                    type="button"
                    className=" bg-black hover:bg-gray-400 text-white w-full mt-5 p-3 uppercase font-bold"
                    onClick={()=>{
                        handleClickProductoAgotado(producto.id);
                    }}    
                    >
                    Producto Disponible
                </button>
            )}
            
        </div>
    </div>
  )
}
