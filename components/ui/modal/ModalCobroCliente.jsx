import { CiUser } from "react-icons/ci";
import { useUIStore } from "../../../store";

export const ModalCobroCliente = () => {

  const closeModalCliente = useUIStore((state) => state.closeModalCliente)

  return (
    <>
      <div className="flex items-center justify-center">
        <div>
          <div className="fixed inset-0 transition-opacity" aria-hidden="true">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>

          <div className="fixed z-10 inset-0 overflow-y-auto" x-cloak>
            <div className="flex items-end justify-center pt-4 px-4 pb-20 text-center sm:block sm:p-0">

              <div className="w-full inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">

                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
                      <CiUser />
                    </div>
                    <div className="w-full mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-headline"> Agregar cobro a Cliente </h3>
                      {/* <div className="mt-2">
                        <p className="text-sm text-gray-500"> Ingrese el nombre del cliente: </p>
                        <input type="text" className="mt-2 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:border-blue-500" placeholder="Nombre del proveedor aqui" />
                      </div> */}
                      <div className="mt-5">
                        <p className="text-sm text-gray-500"> Ingreser el pago al proveedor: </p>
                        <input min={1} type="number" className="mt-2 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:border-blue-500" placeholder="Pago al proveedor aqui" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"> Agregar </button>
                  <button onClick={closeModalCliente}  type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"> Cancelar </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
