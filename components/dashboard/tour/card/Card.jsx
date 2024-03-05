'use client'

import { RxUpdate } from "react-icons/rx";

import Link from "next/link"
import { useUIStore } from "../../../../store";

export const Card = () => {

  const user = useUIStore((state) => state.user)

  return (
    <article className="rounded-lg overflow-hidden border p-3">
      <h1 className="bg-green-500 p-2 text-xl rounded-lg text-white font-bold text-center">Mágico Isabela</h1>
      <ul className="flex flex-col gap-2 mt-3 relative">
        {
          (user.rol == 1) &&
          <li className="flex items-center gap-2 text-gray-500 absolute top-0 right-0"><RxUpdate /> 24/12/2024</li>
        }
        <li><span className="font-bold">Agencia:</span> Maistral</li>
        <li><span className="font-bold">Fecha:</span> 22/01/2024 hasta 30/01/2024</li>
        <li><span className="font-bold">Valor proforma:</span> 1000$</li>
        <li><span className="font-bold">Valor cobrado:</span> 100$</li>
        <li><span className="font-bold">Por cobrar:</span> 0</li>
        <li><span className="font-bold">Vendedor:</span> Christian Nieves</li>
        <li><span className="font-bold">Creado:</span> 10/01/2024</li>
      </ul>

      <div className="h-[2px] bg-gray-200 w-11/12 my-5 mx-auto"></div>

      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right">

          <tbody>
            <tr className="bg-white border-b">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                Prov1. Galapagos Tours
              </th>
              <td className="px-6 py-4">
                100$
              </td>
              <td className="px-6 py-4">
                0$
              </td>
              <td className="px-6 py-4">
                <span className="bg-red-200 text-red-700 font-bold p-1 rounded-lg">Por Pagar</span>
              </td>
            </tr>
            <tr className="bg-white border-b ">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                Prov2. Galápagos Travelx
              </th>
              <td className="px-6 py-4">
                200$
              </td>
              <td className="px-6 py-4">
                100$
              </td>
              <td className="px-6 py-4">
                <span className="bg-indigo-200 text-indigo-700 font-bold p-1 rounded-lg">Abonado</span>
              </td>
            </tr>
            <tr className="bg-white border-b ">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                Prov2. Hotel Zurita
              </th>
              <td className="px-6 py-4">
                300$
              </td>
              <td className="px-6 py-4">
                300$
              </td>
              <td className="px-6 py-4">
                <span className="bg-green-200 text-green-700 font-bold p-1 rounded-lg">Pagado</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="h-[2px] bg-gray-200 w-11/12 my-5 mx-auto"></div>

      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right">

          <tbody>
            <tr className="bg-white border-b">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                Abono 1
              </th>
              <td className="px-6 py-4">
                22/01/2024
              </td>
              <td className="px-6 py-4">
                Paypal
              </td>
              <td className="px-6 py-4">
                100$
              </td>
            </tr>
            <tr className="bg-white border-b ">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                Abono Final
              </th>
              <td className="px-6 py-4">
                25/01/2024
              </td>
              <td className="px-6 py-4">
                Banco Pichincha Nikolay
              </td>
              <td className="px-6 py-4">
                900$
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex justify-end mt-5">
        <Link className="bg-blue-700 hover:bg-blue-800 text-white rounded py-2 px-5" href={'tour/1'}>Editar</Link>
      </div>
    </article>
  )
}
