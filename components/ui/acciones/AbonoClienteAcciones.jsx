import { useUIStore } from "../../../store";

export const AbonoClienteAcciones = ({cliente}) => {

  const addIdPago = useUIStore((state) => state.addIdPago);
  const openModalEditarCliente = useUIStore((state) => state.openModalEditarCliente);
  const deletePagoCliente = useUIStore((state) => state.deletePagoCliente);


  const onDeleteClient = async(info)=>{
    try {
      const resp = await fetch('/api/pago-cliente', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(info),
      });
      const data = await resp.json();
      if(data){
        // Actualizar estado de proveedores
        deletePagoCliente(info?.id)
        return;
      }
      return alert('No se puede Eliminar pago del cliente')
    } catch (error) {
      alert('No se puede Eliminar pago del cliente')
      throw error;
    }
  }
  const onAddIdPago = (info)=>{
    openModalEditarCliente();
    addIdPago(info);
  }

  return (
    <tr className="bg-white border-b ">
      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
      {cliente?.metodo_pago.nombre}
      </th>
      <td className="px-6 py-4">
        {cliente?.estado_pago.nombre}
      </td>
      <td className="px-6 py-4">
        {cliente?.cantidad}$
      </td>
      {
        // (user?.rol == 0) &&
        <td className="px-6 py-4 flex gap-2">
          <button onClick={()=>onAddIdPago(cliente?.id)} className="bg-blue-700 hover:bg-blue-900 text-white p-1 rounded-lg" type="button">Editar</button>
          <button onClick={()=>onDeleteClient(cliente)} className="bg-red-700 hover:bg-red-900 text-white p-1 rounded-lg" type="button">Eliminar</button>
        </td>
      }
    </tr>
  )
}
