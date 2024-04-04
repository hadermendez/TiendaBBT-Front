
import useSWR from'swr'
import Producto from "../components/Producto";
import clienteAxios from "../config/axios";
import { productos as data } from "../data/productos";
import useTienda from "../hooks/useTienda";
export default function Inicio() {

  const {categoriaActual} = useTienda()
  const token = localStorage.getItem('AUTH_TOKEN')

  const fetcher = () => clienteAxios('api/productos',{
    headers:{
      Authorization: `Bearer ${token}`
    }
  }).then(data => data.data)
  const {data, error, isLoading} = useSWR('api/productos',fetcher,{
    refreshInterval: 1000,
  })
  console.log(data)
  console.log(error)
  // console.log(isloading)
//   return
  if(isLoading) return 'cargando...';
  const productos = data.data.filter(producto => producto.categoria_id === categoriaActual.id)

  return (
    <>
      <h1 className=" text-4xl font-black">{categoriaActual.nombre}</h1>
      <p className=" text-2xl my-10">
        Elige tu pedido.
      </p>
      <div className=" grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {productos.map(producto =>(
            < Producto 
              key={producto.imagen}
              producto={producto}
              botonAgregar={true}
            />
          ))}
      </div>
    </>
  )
}
