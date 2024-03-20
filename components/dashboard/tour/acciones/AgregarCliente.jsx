import { CiCirclePlus, CiUser } from "react-icons/ci";
import { useUIStore } from "../../../../store";

export const AgregarCliente = ({id}) => {

  const openModalCliente = useUIStore((state) => state.openModalCliente)
  const addIdTour = useUIStore((state) => state.addIdTour)

  const onOpenModal = (idTour)=>{
    openModalCliente();
    addIdTour(idTour);
  }

  return (
    <fieldset className="mt-7">
      <legend className="text-center font-bold mb-5 text-lg flex items-center gap-2">Cobro a Clientes <CiUser size={30} /></legend>
      <div className="flex justify-center">
        <button onClick={()=>onOpenModal(id)} type="button" className="flex gap-2 items-center text-white bg-blue-500 hover:bg-blue-600 rounded-lg p-2">
            Agregar cobro cliente
            <CiCirclePlus size={40} />
        </button>
      </div>
    </fieldset>
  )
}