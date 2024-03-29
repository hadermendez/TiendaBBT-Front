import {createRef, useState} from "react"
import { Link } from "react-router-dom"
import Alerta from "../components/Alerta";
import { useAuth } from "../hooks/useAuth";

export default function Registro() {

    const nameRef = createRef();
    const emailRef = createRef();
    const passwordRef = createRef();
    const passwordConfirmationRef = createRef();

    const [errores, setErrores] = useState([])
    const {resgistro} = useAuth({
        middleware: 'guest',
        url: '/',
    })

    const handleSubmit = async e =>{
        e.preventDefault();

        const datos = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            password_confirmation: passwordConfirmationRef.current.value
       }

       resgistro(datos, setErrores)


    }
  return (
    <>
        <h1 className=" text-4xl font-black">Crea tu Cuenta</h1>
        <p>Completa el formulario para el registro</p>

        <div className="bg-white shadow-md rounded-md px-5 py-10">
            <form
                onSubmit={handleSubmit}
                noValidate
            >
            {errores ? errores.map(error => <Alerta key={error}>{error}</Alerta> ) : null}

                <div className=" mb-4">
                    <label 
                        htmlFor="name"
                        className=" text-slate-800"
                    >Nombre:</label>
                    <input 
                        type="text"
                        id="name"
                        className=" mt-2 w-full p-3 bg-gray-50"
                        name="name"
                        placeholder="Tu nombre"
                        ref={nameRef}
                    />
                </div>
                <div className=" mb-4">
                    <label 
                        htmlFor="email"
                        className=" text-slate-800"
                    >Email:</label>
                    <input 
                        type="email"
                        id="email"
                        className=" mt-2 w-full p-3 bg-gray-50"
                        name="email"
                        placeholder="Tu email"
                        ref={emailRef}

                    />
                </div>
                <div className=" mb-4">
                    <label 
                        htmlFor="password"
                        className=" text-slate-800"
                    >Password:</label>
                    <input 
                        type="password"
                        id="password"
                        className=" mt-2 w-full p-3 bg-gray-50"
                        name="password"
                        placeholder="Tu password"
                        ref={passwordRef}

                    />
                </div>
                <div className=" mb-4">
                    <label 
                        htmlFor="password_confirmation"
                        className=" text-slate-800"
                    >Repetir Password:</label>
                    <input 
                        type="password"
                        id="password_confirmation"
                        className=" mt-2 w-full p-3 bg-gray-50"
                        name="password_confirmation"
                        placeholder="Repetir password"
                        ref={passwordConfirmationRef}

                    />
                </div>
                <input 
                    type="submit"
                    value="Crear cuenta"
                    className=" bg-black hover:bg-gray-800 text-white w-full mt-5 p-3
                    uppercase font-bold cursor-pointer" 
                />
            </form>
        </div>
        <nav className="mt-5">
            <Link to="/auth/login">
                ¿Ya tienes Cuenta? Incia sesión
            </Link>
        </nav>
    </>
  )
}
