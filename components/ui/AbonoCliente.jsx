export const AbonoCliente = ({ cliente }) => {

    const formatoFecha = (fecha) => {
        const fechaOriginal = new Date(fecha)
        const opcionesFormato = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', };
        return fechaOriginal.toLocaleDateString('es-ES', opcionesFormato);
    }

    return (
        <>
            <tr>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    Registro: {formatoFecha(cliente?.registro)}
                </th>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    Canceló: {cliente?.cantidad} $
                </th>
            </tr>
        </>
    )
}
