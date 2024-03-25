'use client'

import { RxUpdate } from "react-icons/rx";

import Link from "next/link"
import { useUIStore } from "../../../../store";
import { AbonoCliente } from "../../../ui/AbonoCliente";
import { Proveedor } from "../../../ui/Proveedor";

export const Card = ({ tour }) => {

  const user = useUIStore((state) => state.user);
  const deleteHistorialTour = useUIStore((state) => state.deleteHistorialTour);


  const fechaInicio = new Date(tour?.inicio).toLocaleDateString();
  const fechaFinaliza = new Date(tour?.finaliza).toLocaleDateString();

  const onDelete = async (id) => {
    try {
      const resp = await fetch('/api/tour', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(id),
      });
      const data = await resp.json();
      deleteHistorialTour(data)
    } catch (error) {
      alert('No se puede eliminar el tour');
      throw error;
    }
  }

  return (
    <article className="rounded-lg overflow-hidden border p-3 mt-5">
      <h1 className="bg-green-500 p-2 text-xl rounded-lg text-white font-bold text-center">{tour.programa?.nombre}</h1>
      <ul className="flex flex-col gap-2 mt-3 relative">
        {
          (user.rol == 0) &&
          <li className="flex items-center gap-2 text-gray-500 absolute top-0 right-0"><RxUpdate /> {tour?.actualizado}</li>
        }
        <li><span className="font-bold">Categoria:</span> {tour?.categoria_tour?.nombre}</li>
        <li><span className="font-bold">Agencia:</span> {tour?.agencia?.nombre}</li>
        <li><span className="font-bold">Inicio:</span> {fechaInicio}</li>
        <li><span className="font-bold">Finaliza:</span> {fechaFinaliza}</li>
        <li><span className="font-bold">Valor proforma:</span> {tour?.valor_proforma}$</li>
        <li><span className="font-bold">Valor cobrado:</span> {tour?.valor_cobrado}$</li>
        <li><span className="font-bold">Por cobrar:</span> {tour.valor_proforma - tour?.valor_cobrado}</li>
        <li><span className="font-bold">Categoria:</span> {tour.categoria_hotel.nombre}</li>
        {
          (user.rol == 0) &&
          <li><span className="font-bold">Vendedor:</span> {tour?.user?.nombre}</li>
        }
      </ul>
      {
        tour?.proveedores?.length > 0 && (
          <div>
            <p className="font-bold mt-5">Pago de Proveedores:</p>
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left rtl:text-right">
                <tbody className="divide-y-2 divide-gray-300">
                  {
                    tour?.proveedores?.map((proveedor)=>(
                      <Proveedor proveedor={proveedor} key={proveedor?.id} />
                    ))
                  }
                </tbody>
              </table>
            </div>
          </div>
        )
      }
      {
        tour?.pago_cliente?.length > 0 &&
        <div>
          <p className="font-bold mt-5">Pago de Clientes:</p>
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right">
              <tbody className="divide-y-2 divide-gray-300">
                {
                  tour?.pago_cliente?.map((cliente) => (
                    <AbonoCliente key={cliente?.id} cliente={cliente} />
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      }
      <div className="flex justify-between mt-5">
        <button onClick={() => onDelete(tour?.id)} className="bg-red-700 hover:bg-red-800 text-white rounded py-2 px-5" type="">Eliminar</button>
        <Link className="bg-blue-700 hover:bg-blue-800 text-white rounded py-2 px-5" href={`tour/${tour?.id}`}>Editar</Link>
      </div>
    </article>
  )
}
