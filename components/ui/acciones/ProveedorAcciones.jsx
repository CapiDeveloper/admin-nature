import { useUIStore } from "../../../store";

export const ProveedorAcciones = ({ proveedor }) => {

    const openModalEditarProveedor = useUIStore((state) => state.openModalEditarProveedor)
    const addIdProveedor = useUIStore((state) => state.addIdProveedor);
    const deleteProveedores = useUIStore((state) => state.deleteProveedores);

    const onDeleProveedor = async (id) => {
        try {
            const resp = await fetch('/api/proveedor', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(id),
            });

            const data = await resp.json();
            if (data?.id) {
                deleteProveedores(id)
                return;
            }
            return alert('No se puede eliminar el proveedor');
        } catch (error) {
            return alert('No se puede eliminar el proveedor');
        }
    }

    return (
        <tr className="bg-white border-b">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                {proveedor?.nombre}
            </th>
            <td className="px-6 py-4">
                {proveedor?.pago}
            </td>
            <td className="px-6 py-4">
                <span className={`bg-${proveedor?.estado_pago?.color}-200 text-${proveedor?.estado_pago?.color}-700 font-bold p-1 rounded-lg`}>{proveedor?.estado_pago?.nombre}</span>
            </td>
            {
                // (user?.rol == 0) &&
                <td className="px-6 py-4 flex gap-2">
                    <button onClick={() => {
                        addIdProveedor(proveedor?.id);
                        openModalEditarProveedor();
                    }} className="bg-blue-700 hover:bg-blue-900 text-white p-1 rounded-lg" type="button">Editar</button>
                    <button onClick={() => onDeleProveedor(proveedor?.id)} className="bg-red-700 hover:bg-red-900 text-white p-1 rounded-lg" type="button">Eliminar</button>
                </td>
            }
        </tr>
    )
}
