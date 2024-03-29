import { formatMoney } from "../helpers"
import useTienda from "../hooks/useTienda"

export default function Producto({producto}) {
    const { handleClickModal, handleSetProdcuto} = useTienda()

    const {nombre, imagen, precio} = producto
  return (
    <div className=" border p-3 shadow bg-white">
        <img 
            src={"/img/"+imagen+".jpg"} 
            alt={`imagen ${nombre}`}
            className="w-full" 
        />

        <div className="p-5">
            <h3 className="text-2xl font-bold">{nombre}</h3>
            <p className=" mt-5 font-black text-4xl text-indigo-500">
                {formatMoney(precio)}
            </p>
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
        </div>
    </div>
  )
}
