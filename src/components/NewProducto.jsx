import useTienda from "../hooks/useTienda"
import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom'
import clienteAxios from "../config/axios";
import { toast } from "react-toastify";

export default function NewProducto() {

// const { handleSubmitNuevoProducto} = useTienda()
    const { categorias} = useTienda()

    const navigate = useNavigate();
    // Estado para cada campo del formulario
    const [nombre, setNombre] = useState('');
    const [imagen, setImagen] = useState(null);
    const [precio, setPrecio] = useState('');
    const [categoria, setCategoria] = useState('');
    const [disponible, setDisponible] = useState(false);

    const handleSubmitNuevoProducto = async (e) => {
        e.preventDefault(); // Prevenir el comportamiento por defecto del formulario
    
        const formData = new FormData();
        formData.append('nombre', nombre);
        formData.append('imagen', imagen);
        formData.append('precio', precio);
        formData.append('categoria', categoria);
        formData.append('disponible', disponible);

        // console.log(formData)
        const token = localStorage.getItem('AUTH_TOKEN');
    
        try {
            const {data} = await clienteAxios.post('/api/productos', formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    // No establezcas 'Content-Type' aquí, el navegador lo hará automáticamente para FormData
                }
            });
            console.log(data)
            toast.success(data.message);
            // setTimeout(() => {
                navigate('/admin/productos'); // Ajusta esto a tu ruta deseada
            // }, 1000);
            
    

        } catch (error) {
            console.error(error);
            if (error.response) {
                // Si hay respuesta de la API con un mensaje de error, puedes mostrarlo
                toast.error(error.response.data.message);
            } else {
                toast.error("Error al crear el producto");
            }
        }
    };



      
  return (
    <>

        <form 
            className="max-w-lg mx-auto my-10 p-5 border rounded-lg" 
            onSubmit={handleSubmitNuevoProducto}
            enctype="multipart/form-data" 
        >
        <h2 className="text-2xl font-semibold mb-5">Nuevo Producto</h2>

        <div className="mb-4">
            <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">
            Nombre
            </label>
            <input
            type="text"
            id="nombre"
            name="nombre"
            onChange={(e) => setNombre(e.target.value)}
            required
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
        </div>

        <div className="mb-4">
            <label htmlFor="imagen" className="block text-sm font-medium text-gray-700">
            Imagen
            </label>
            <input
            type="file"
            id="imagen"
            name="imagen"
            accept="image/*"
            onChange={(e) => 
                setImagen(e.target.files[0])
                // setImagen(e.target.value)
            }
            // required
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
            />
        </div>

        <div className="mb-4">
            <label htmlFor="precio" className="block text-sm font-medium text-gray-700">
            Precio
            </label>
            <input
            type="number"
            id="precio"
            name="precio"
            onChange={(e) => setPrecio(e.target.value)}
            required
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
        </div>

        <div className="mb-4">
            <label htmlFor="categoria" className="block text-sm font-medium text-gray-700">
            Categoría
            </label>
            <select
            id="categoria"
            name="categoria"
            onChange={(e) => setCategoria(e.target.value)}
            required
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            >
            <option value="">Selecciona una categoría</option>
            {categorias.map((categoria) => (
                <option key={categoria.id} value={categoria.id}>
                {categoria.nombre} 
                </option>
            ))}
            </select>
        </div>

        <div className="mb-4 flex items-center">
            <input
            type="checkbox"
            id="disponible"
            name="disponible"
            onChange={(e) => setDisponible(e.target.value)}
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label htmlFor="disponible" className="ml-2 block text-sm text-gray-900">
            Disponible
            </label>
        </div>

        <button
            type="submit"
            className="mt-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
            Agregar Producto
        </button>
        </form>

        
    </>
  )
}
