import { Outlet } from "react-router-dom"
export default function AuthLayout() {
  return (
    <main className=" max-w-4xl m-auto mt-10 md:mt-28 flex flex-col md:flex-row items-center">

      <img src="../img/Logo.png" 
           alt="Logo" 
           className="max-w-xs" 
           loading="lazy" width="150" height="auto" />

      <div className=" p-10 w-full min-h-[500px]" >
        <Outlet />
      </div>
    </main>
  )
}
