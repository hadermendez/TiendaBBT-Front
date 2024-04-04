import { formatMoney } from "../helpers"
import useSWR from "swr"
import clienteAxios from "../config/axios"
import useTienda from "../hooks/useTienda"

export default function Ordenes() {

  const token = localStorage.getItem('AUTH_TOKEN')
  const fetcher = () => clienteAxios('/api/pedidos', {
    headers:{
      Authorization: `Bearer ${token}`
    }
  })
  const {data, error, isLoading} = useSWR(
    '/api/pedidos', 
    fetcher, 
  {refreshInterval: 1000}
  )
  const {handleClickCompletarPedido} = useTienda()
  if(isLoading) return 'cargando...'


  return (
    <div>      
    <h1 className=" text-4xl font-black">Pedidos</h1>
    <p className=" text-2xl my-10">
      Administrar Pedidos.
    </p>
    <div className="grid grid-cols-2 gap-3">
      {data.data.data.map(pedido => (
        <div key={pedido.id} className="p-5 bg-white shadow space-y-2 border-b">
          <p className=" text-2xl font-bold text-slate-600">
            Contenido Pedido:
          </p>
          {pedido.productos.map(producto =>(
            <div
              key={producto.id}
              className='border-b border-b-slate-200 last-of-type:border-none py-4'
            >
              <p className="text-sm">ID: {producto.id}</p>
              <p>{producto.nombre}</p>
              <p>
                Cantidad:{' '}
                <span className="font-bold">{producto.pivot.cantidad} </span>
              </p>

            </div>
          ))}
          <div className=" text-lg font-bold text-slate-600">
            Cliente: {' '}
            <span className=" font-normal">
              <p>{pedido.user.name}</p>
              <p>{pedido.user.email}</p>
            </span>
          </div>
          <p className="text-lg font-bold text-amber-600 ">
            Total a Pagar: {' '}
            <span className=" font-normal text-slate-600">
            {formatMoney(pedido.total)}
            </span>
          </p>

          <button 
            type="button"
            className='bg-black  hover:bg-slate-600 px-5 py-2 rounded uppercase font-bold text-white text-center w-full cursor-pointer'
            onClick={() => handleClickCompletarPedido(pedido.id)}
          > 
            Completar </button>



        </div>
      ))}
    </div>
  </div>
  )
}
