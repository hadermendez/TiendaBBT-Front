import {createBrowserRouter} from 'react-router-dom'
import AuthLayout from './layouts/AuthLayout'
import Layout from './layouts/Layout'
import Inicio from './views/Inicio'
import Login from './views/Login'
import Registro from './views/Registro'
import AdminLayout from './layouts/AdminLayout'
import Ordenes from './views/Ordenes'
import Productos from './views/Productos'
import NewProducto from './components/NewProducto'

const router = createBrowserRouter([
    {
        path: '/',
        element:<Layout />,
        children:[
            {
                index: true,
                element: <Inicio />
            }
        ]
    },
    {
        path: '/auth',
        element:<AuthLayout />,
        children: [
            {
                // index: true,
                path: '/auth/login',
                element: <Login />
            },
            {
                path: '/auth/registro',
                element: <Registro />
            }
        ]
    },
    {
        path: '/admin',
        element:<AdminLayout />,
        children: [
            {
                index: true,
                element: <Ordenes />
            },
            {
                // index: true,
                path: '/admin/productos',
                element: <Productos />
            },
            {
                // index: true,
                path: '/admin/nuevo-producto',
                element: <NewProducto />
            },
        
        ]
    }

])

export default router