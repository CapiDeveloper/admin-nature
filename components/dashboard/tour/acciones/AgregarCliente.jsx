import { CiCirclePlus, CiUser } from "react-icons/ci";

export const AgregarCliente = () => {
  return (
    <fieldset className="mt-7">
      <legend className="text-center font-bold mb-5 text-lg flex items-center gap-2">Cobro a Clientes <CiUser size={30} /></legend>
      <div className="flex justify-center">
        <button type="button" className="flex gap-2 items-center text-white bg-blue-500 hover:bg-blue-600 rounded-lg p-2">
            Agregar cobro cliente
            <CiCirclePlus size={40} />
        </button>
      </div>
    </fieldset>
  )
}