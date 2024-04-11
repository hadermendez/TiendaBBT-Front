import useSWR from "swr"
import clienteAxios from "../config/axios"
import Producto from "../components/Producto"

// export default function Productos() {
export default function Disponibles({ disponible }) {

  const token = localStorage.getItem('AUTH_TOKEN')
  const fetcher = () => clienteAxios('/api/productos', {
    headers:{
      Authorization: `Bearer ${token}`
    }
  }).then(datos => datos.data)

  const {data, error, isLoading} = useSWR(
    '/api/productos', 
    fetcher, 
  {refreshInterval: 1000}
  )

  if(isLoading) return 'cargando...'
console.log(data.data)
console.log(disponible)
  return (
    <>      
      <div className=" mt-5 grid gap-4 grid-cols-1 md:grid-cols-3 xl:grid-cols-4">
          {data?.data?.filter(producto => producto.disponible === disponible).map(producto => (
            < Producto 
              key={producto.imagen}
              producto={producto}
              botonDisponible={disponible}
            />
          ))}
      </div>
    </>
  )
}
