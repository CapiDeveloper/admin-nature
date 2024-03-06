'use client'

import clsx from "clsx";
import { useRouter } from "next/navigation";
import { useState } from "react"
import { CiUser } from "react-icons/ci"
import { useUIStore } from "../../store";

export const Formulario = () => {
  const router = useRouter();
  const addUser = useUIStore((state) => state.addUser)

  const [credenciales, setCredenciales] = useState({
    email: '',
    password: '',
    rol: 0
  });

  const onHandleSubmit = async (e) => {
    e.preventDefault();

    if ([credenciales.email, credenciales.password].includes('')) return;
    addUser( credenciales );
    router.push('/dashboard');
    return;
    // const data = await fetch('/api/autenticacion', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify( credenciales ),
    // })

    // const resp = await data.json()
    // if(resp.valido){
    //     addUser( resp.user );
    //     localStorage.setItem("sesion", JSON.stringify(credenciales))
    //     router.push('/dashboard');
    //     return;
    // }
    alert('Datos no validos');
  }
  return (
    <form className="max-w-sm mx-auto bg-white rounded-lg p-5">
      <CiUser size={50} color="white" className="mx-auto my-5 bg-blue-700 rounded-full p-2" />
      <legend className="text-3xl font-bold text-center">Iniciar Sesión</legend>
      <div className="my-5">
        <label htmlFor="email" className="block mb-2 text-base font-medium text-gray-900">Tu email</label>
        <input onChange={(e) => setCredenciales({
          ...credenciales,
          email: e.target.value
        })} type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="correo@correo.com" required />
      </div>
      <div className="mb-5">
        <label htmlFor="password" className="block mb-2 text-base font-medium text-gray-900">Tu contraseña</label>
        <input onChange={(e) => setCredenciales({
          ...credenciales,
          password: e.target.value
        })} type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
      </div>
      <div className="flex justify-end">
        <button
          disabled={[credenciales.email, credenciales.password].includes('')}
          onClick={onHandleSubmit}
          type="submit"
          className={clsx('text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center', {
            'cursor-not-allowed': [credenciales.email, credenciales.password].includes('')
          })}>
          Iniciar Sesión
        </button>
      </div>
    </form>
  )
}