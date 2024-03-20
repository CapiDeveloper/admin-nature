import { useProgramaCrud } from "../../../store";

export const ProgramaAcciones = ({ programa }) => {

    const { id, nombre, categoria_tour } = programa;
    const deleteProgramas = useProgramaCrud((state) => state.deleteProgramas);
    const openModalPrograma = useProgramaCrud((state) => state.openModalPrograma);
    const addIdPrograma = useProgramaCrud((state) => state.addIdPrograma);

    const onDelete = async (id) => {
        try {
            const resp = await fetch('/api/programas', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(id),
            });
            const data = await resp.json();
            deleteProgramas(data)
        } catch (error) {
            alert('No se puede eliminar el tour');
            throw error;
        }
    }
    return (
        <tr className="bg-white border-b ">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                {nombre}
            </th>
            <td className="px-6 py-4">
                {categoria_tour?.nombre}
            </td>
            {
                <td className="px-6 py-4 flex gap-2">
                    <button onClick={()=>{
                        openModalPrograma();
                        addIdPrograma(id);
                    }} className="bg-blue-700 hover:bg-blue-900 text-white p-1 rounded-lg" type="button">Editar</button>
                    <button onClick={() => onDelete(id)} className="bg-red-700 hover:bg-red-900 text-white p-1 rounded-lg" type="button">Eliminar</button>
                </td>
            }
        </tr>
    )
}