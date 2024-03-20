'use client'

import { FaWpforms } from "react-icons/fa";
import { useUIStore } from "../../../store";
import { useEffect, useState } from "react";

export const ModalCobroProveedor = () => {

  const closeModalProveedor = useUIStore((state) => state.closeModalProveedor)
  const addProveedores = useUIStore((state) => state.addProveedores);
  const idTour = useUIStore((state) => state.idTour);

  const [estadoPago, setEstadoPago] = useState([]);

  const [infoProveedor, setInfoProveedor] = useState({
    nombre: "",
    pago: 0,
    tourId: "",
    estado_pago_Id: ""
  });

  const getInfo = async () => {
    try {
      const resp = await fetch(`/api/estado-pago`);
      const data = await resp.json();
      setEstadoPago(data);
    } catch (error) {
      alert('No se puede obtener estados pago');
      throw error
    }
  }

  useEffect(() => {
    getInfo();
  }, []);

  const onChangeInput = ({ target }) => {
    setInfoProveedor({
      ...infoProveedor,
      tourId: idTour,
      [target.name]: target.value
    });
  }

  const onHandleSubmit = async (e) => {
    e.preventDefault();

    const validar = Object.values(infoProveedor).includes("");
    if (validar) {
      alert("Todos los campos son obligatorios");
      return;
    }

    try {
      const resp = await fetch('/api/proveedor', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(infoProveedor),
      });
      const resultado = await resp.json()

      if (resultado[0]) {
        addProveedores(resultado[0])
      }
    } catch (error) {
      alert('No se puede agregar un proveedor')
      throw error;
    }
    closeModalProveedor();
  }

  return (
    <>
      <div className="flex items-center justify-center">
        <div>
          <div className="fixed inset-0 transition-opacity" aria-hidden="true">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>

          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-end justify-center pt-4 px-4 pb-20 text-center sm:block sm:p-0">

              <div className="w-full inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" aria-labelledby="modal-headline">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">

                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
                      <FaWpforms />
                    </div>
                    <form onSubmit={onHandleSubmit} className="w-full mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <label className="text-lg leading-6 font-medium text-gray-900" id="modal-headline"> Agregar cobro a Proveedor </label>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500"> Ingrese el nombre del proveedor: </p>
                        <input onChange={(e) => onChangeInput(e)} name="nombre" type="text" className="mt-2 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:border-blue-500" placeholder="Nombre del proveedor aqui" />
                      </div>
                      <div className="mt-5">
                        <p className="text-sm text-gray-500"> Ingreser el pago al proveedor: </p>
                        <input onChange={(e) => onChangeInput(e)} name="pago" min={1} type="number" className="mt-2 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:border-blue-500" placeholder="Pago al proveedor aqui" />
                      </div>
                      <div className="mt-5">
                        <p className="text-sm text-gray-500 mb-3"> Estado del pago: </p>
                        <select onChange={(e) => onChangeInput(e)} value={infoProveedor.estado_pago_Id} name="estado_pago_Id" id="estado_pago_Id" className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                          <option value="" disabled>-- Seleccione --</option>
                          {
                            estadoPago?.map((estado) =>(
                              <option key={estado?.id} value={estado?.id}>{estado?.nombre}</option>
                            ))
                          }
                        </select>
                      </div>
                      <div className="bg-gray-50 py-3 sm:flex sm:flex-row-reverse">
                        <button type="submit" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"> Agregar </button>
                        <button onClick={closeModalProveedor} type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"> Cancelar </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}