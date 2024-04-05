import useTienda from "../hooks/useTienda";
export default function Categoria({categoria}) {

    const {handleClickCategoria, categoriaActual} = useTienda()
    const {icono, id, nombre} = categoria

    return (
    <div className={` ${categoriaActual.id === id ? " bg-slate-600 text-white" : 'bg-white'} flex items-center gap-4 border w-full p-2 hover:bg-slate-600 
    hover:text-white cursor-pointer`}>
            <img 
                src={`/img/icono_${icono}.svg`} 
                alt="Imagen Icono"
                className=" w-10"
                
            />
            <button 

              className=" text-lg font-bold cursor-pointer truncate"
              type="button"
              onClick={() => handleClickCategoria(id)}
            >
                {nombre} 
            </button>
    </div>
  )
}
