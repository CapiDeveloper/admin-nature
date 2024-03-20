export const ItemTour = ({ dato }) => {

    const formatoFecha = (fechaOriginal) => {

        // Crear un objeto de fecha a partir de la cadena original
        const fecha = new Date(fechaOriginal);

        // Definir opciones de formato para la fecha
        const opcionesDeFormato = { day: 'numeric', month: 'long', year: 'numeric' };

        // Aplicar el formato a la fecha
        const fechaFormateada = fecha.toLocaleString('es-ES', opcionesDeFormato);

        return fechaFormateada; // Salida: "8 de marzo de 2024"
    }

    return (
        <tr className="border-b">
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                { formatoFecha(dato?.inicio) }
            </td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
            { formatoFecha(dato?.finaliza) }
            </td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {dato?.agencia.nombre}
            </td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {dato?.categoria_tour?.nombre}
            </td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {dato?.programa?.nombre}
            </td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {dato?.categoria_hotel?.nombre}
            </td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {dato?.num_pax}
            </td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {dato?.user.nombre}
            </td>
        </tr>
    )
}
