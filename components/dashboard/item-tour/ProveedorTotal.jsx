export const ProveedorTotal = ({ proveedores = [] }) => {
    const pagoTotal = ()=>{
        return proveedores.reduce((acumulador,proveedor)=>acumulador + parseFloat(proveedor?.pago),0)
    }
  return (
    <div className="text-end my-3 text-lg"> Gastos Total = <span className="font-bold">{ pagoTotal() }$</span></div>
  )
}
