import { createContext, useState, useEffect } from "react"
import {toast} from 'react-toastify'
import clienteAxios from '../config/axios';
import { categorias as categoriasDB } from "../data/categorias";
import { data } from "autoprefixer";

const TiendaContext = createContext();
const TiendaProvider =({children}) => {

    const[categorias, setCategorias] = useState([]);
    const[categoriaActual, setcategoriaActual] = useState({})
    const[modal, setModal] = useState(false);
    const[producto, setProducto] = useState({});
    const[pedido, setPedido] = useState([]);
    const[total, setTotal] = useState(0);

    useEffect (() =>{
        const nuevoTotal = pedido.reduce( 
            (total, producto) => (producto.precio * producto.cantidad) + total, 0 )
            setTotal(nuevoTotal)
    },[pedido])

    const obtenerCartegorias = async () =>{
        try {
            const {data} = await clienteAxios('api/categorias')
            setCategorias(data.data)
            setcategoriaActual(data.data[0])
        } catch (error) {
            console.log(error)
            
        }
    }

    useEffect(()=> {
        obtenerCartegorias();
    },[])


    const handleClickCategoria = id => {
        const categoria = categorias.filter(categoria => categoria.id === id)[0]
        setcategoriaActual(categoria)

    }

    const handleClickModal = () => {
    setModal(!modal)
    }

    const handleSetProdcuto = producto => {
        setProducto(producto)
    }

    const handleAgregarPedido = ({categoria_id, ...producto}) => {

        if(pedido.some( pedidoState => pedidoState.id === producto.id)){
            const pedidoActualizado = pedido.map(pedidoState => pedidoState.id === producto.id ? producto : pedidoState)
            setPedido(pedidoActualizado)
            toast.success('Pedido Actualizado')
        }else{
            setPedido([...pedido, producto])
            toast.success('Pedido Agregado')

       }
    }

    const handleEditCantidad = id => {
        const pedidoActualizar = pedido.filter ( producto => producto.id === id)[0]
        setProducto(pedidoActualizar)
        setModal(!modal)
    }
    const handleEliminarProductoPedido = id => {
        const pedidoActualizar = pedido.filter ( producto => producto.id !== id)
        setPedido(pedidoActualizar)
        toast.success('Pedido Eliminado')
    }

    const handleSubmitNuevoPedido = async () => {
        const token = localStorage.getItem('AUTH_TOKEN')
        try {
            const {data} = await clienteAxios.post('/api/pedidos',
            {
                total,
                productos: pedido.map(producto =>{
                    return {
                        id: producto.id,
                        cantidad: producto.cantidad,
                    }
                })
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            toast.success(data.message);
            setTimeout(()=>{
                setPedido([])
            },1000)
            
        } catch (error) {
            console.log(error)
        }
    }



    return(
        <TiendaContext.Provider
            value={{
                categorias,
                categoriaActual,
                handleClickCategoria,
                modal,
                handleClickModal,
                producto,
                handleSetProdcuto,
                pedido,
                handleAgregarPedido,
                handleEditCantidad,
                handleEliminarProductoPedido,
                total,
                handleSubmitNuevoPedido,
            }}
        >{children}</TiendaContext.Provider>
    )
}
export{
    TiendaProvider
}
export default TiendaContext