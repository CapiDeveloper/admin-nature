export const ClientePendiente = ({ clientes=[],ValorProforma }) => {
    const pagoTotal = ()=>{
        return clientes.reduce((acumulador,cliente)=>acumulador + parseFloat(cliente?.cantidad),0)
    }
  return (
    <>
        <div className="flex flex-col md:flex-row justify-end gap-5">
            <p className="text-end my-3 text-lg">Pago actual: <span className="font-bold">{ pagoTotal()}$</span></p>
            <p className="text-end my-3 text-lg">Pendiente: <span className="font-bold">{ ValorProforma - pagoTotal()}$</span></p>
        </div>
    </>
  )
}
