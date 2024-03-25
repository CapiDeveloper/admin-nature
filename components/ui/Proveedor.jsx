export const Proveedor = ({ proveedor }) => {

    const formatoFecha = (fecha) => {
        const fechaOriginal = new Date(fecha)
        const opcionesFormato = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', };
        return fechaOriginal.toLocaleDateString('es-ES', opcionesFormato);
    }

    return (
        <tr className="bg-white border-b">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                { proveedor?.nombre }
            </th>
            <td className="px-6 py-4">
                { proveedor?.pago}$
            </td>
            <td className="px-6 py-4">
                Registrado: {formatoFecha(proveedor?.fecha)}
            </td>
        </tr>
    )
}