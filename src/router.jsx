import { createBrowserRouter } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import AuthLayout from "./layouts/AuthLayout";
import Layout from "./layouts/Layout";
import Inicio from "./views/Inicio";
import Login from "./views/Login";
import Registro from "./views/Registro";
import AdminLayout from "./layouts/AdminLayout";
import Ordenes from "./views/Ordenes";
import Productos from "./views/Productos";
import Home from "./views/Home";

import NewProducto from "./components/NewProducto";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />, // Tu componente de landing
  },
  {
    path: "/",
    element: (
      <ErrorBoundary>
        <Layout />
      </ErrorBoundary>
    ),
    children: [
      {
        index: true,
        element: <Inicio />,
      },
    ],
  },
  {
    path: "/auth",
    element: (
      <ErrorBoundary>
        <AuthLayout />
      </ErrorBoundary>
    ),
    children: [
      {
        // index: true,
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/registro",
        element: <Registro />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Ordenes />,
      },
      {
        // index: true,
        path: "/admin/productos",
        element: <Productos />,
      },
      {
        // index: true,
        path: "/admin/nuevo-producto",
        element: <NewProducto />,
      },
    ],
  },
]);

export default router;
