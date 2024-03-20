'use client'

import { CiUser } from "react-icons/ci";
import { useUIStore } from "../../../store";
import { useEffect, useState } from "react";

export const ModalCobroCliente = () => {

  const closeModalCliente = useUIStore((state) => state.closeModalCliente)
  const idTour = useUIStore((state) => state.idTour)
  const addPagoCliente = useUIStore((state) => state.addPagoCliente)

  const [metodoPago, setMetodoPago] = useState([]);
  const [estadoPago, setEstadoPago] = useState([]);

  const [infoCliente, setInfoCliente] = useState({
    cantidad: 0,
    tourId: "",
    metodo_pago_Id: "",
    estado_pago_Id: ""
  });

  const getInfo = async () => {
    try {
      const [resp1, resp2] = await Promise.all([
        fetch(`/api/estado-pago`),
        fetch('/api/metodo-pago'),
      ]);

      const data1 = await resp1.json();
      const data2 = await resp2.json();

      setEstadoPago(data1);
      setMetodoPago(data2)

    } catch (error) {
      alert('No se puede obtener informacion del pago');
      throw error
    }
  }

  useEffect(() => {
    getInfo();
  }, [])


  const onChangeValue = ({ target }) => {
    setInfoCliente({
      ...infoCliente,
      tourId: idTour,
      [target.name]: target.value
    })
  }

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    const validar = Object.values(infoCliente).includes("");
    if (validar) {
      alert("Todos los campos son obligatorios");
      return;
    }

    try {
      const resp = await fetch('/api/pago-cliente', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(infoCliente),
      });

      const resultado = await resp.json();
      addPagoCliente(resultado[0]);

    } catch (error) {
      alert('Algo fallo, comunicar a soporte');
      throw error;
    }
    closeModalCliente();
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

              <div className="w-full inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">

                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
                      <CiUser />
                    </div>
                    <form onSubmit={onHandleSubmit} className="w-full mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-headline"> Agregar cobro a Cliente </h3>
                      <div className="mt-3">
                        <p className="text-sm text-gray-500"> Estado del pago: </p>
                        <select onChange={(e) => onChangeValue(e)} value={infoCliente.estado_pago_Id} name="estado_pago_Id" id="estado_pago_Id" className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                          <option value="" disabled>-- Seleccione --</option>
                          {
                            estadoPago?.map((estado) => (
                              <option key={estado?.id} value={estado?.id}>{estado?.nombre}</option>
                            ))
                          }
                        </select>
                      </div>
                      <div className="mt-3">
                        <p className="text-sm text-gray-500"> Ingrese el metodo de pago: </p>
                        <select onChange={(e) => onChangeValue(e)} value={infoCliente.metodo_pago_Id} name="metodo_pago_Id" id="metodo_pago_Id" className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                          <option value="" disabled>-- Seleccione --</option>
                          {
                            metodoPago?.map((metodo) => (
                              <option key={metodo?.id} value={metodo?.id}>{metodo?.nombre}</option>
                            ))
                          }
                        </select>
                      </div>
                      <div className="mt-5">
                        <p className="text-sm text-gray-500"> Ingreser el cobro al cliente: </p>
                        <input onChange={(e) => onChangeValue(e)} value={infoCliente.cantidad} name="cantidad" id="cantidad" min={0} type="number" className="mt-2 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:border-blue-500" placeholder="Pago al proveedor aqui" />
                      </div>
                      <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:justify-end">
                        <button onClick={closeModalCliente} type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"> Cancelar </button>
                        <button type="submit" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"> Agregar </button>
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
