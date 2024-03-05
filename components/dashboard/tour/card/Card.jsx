import Link from "next/link"

export const Card = () => {
  return (
    <article className="rounded-lg overflow-hidden border p-3">
        <h1 className="bg-green-500 p-2 text-xl rounded-lg text-white font-bold text-center">Mágico Isabela</h1>
        <ul className="flex flex-col gap-2 mt-3">
          <li><span className="font-bold">Agencia:</span> Maistral</li>
          <li><span className="font-bold">Fecha:</span> 22/01/2024 hasta 30/01/2024</li>
          <li><span className="font-bold">Valor proforma:</span> 1000$</li>
          <li><span className="font-bold">Valor cobrado:</span> 100$</li>
          <li><span className="font-bold">Por cobrar:</span> 100%</li>
          <li><span className="font-bold">Vendedor:</span> Christian Nieves</li>
          <li><span className="font-bold">Creado:</span> 10/01/2024</li>
          <li><span className="font-bold">Agencia:</span> Maistral</li>
        </ul>

        <div className="h-[2px] bg-gray-200 w-11/12 my-5 mx-auto"></div>

        <div className="relative overflow-x-auto">
          <table NameclassName="w-full text-sm text-left rtl:text-right">
Name
            <tbody>
              <tr className="bg-white border-b">
                <th scNameope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                  Prov1. Galapagos TNameours
                </th>
                <td className="px-6 py-4">
                  100$Name
                </td>
                <td className="px-6 py-4">
                  0$Name
                </td>
                <td className="px-6 py-4">
                  Por paNamegar
                </td>
              </tr>
              <tr className="bg-white border-b ">
                <th scNameope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                  Prov2. Galápagos TNameravelx
                </th>
                <td className="px-6 py-4">
                  200$Name
                </td>
                <td className="px-6 py-4">
                  100$Name
                </td>
                <td className="px-6 py-4">
                  AbonadNameo
                </td>
              </tr>
              <tr className="bg-white border-b ">
                <th scNameope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                  Prov2. Hotel ZuritNamea
                </th>
                <td className="px-6 py-4">
                  300$Name
                </td>
                <td className="px-6 py-4">
                  300$Name
                </td>
                <td className="px-6 py-4">
                  PagadoName
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="h-[2px] bg-gray-200 w-11/12 my-5 mx-auto"></div>

        <div className="relative overflow-x-auto">
          <table NameclassName="w-full text-sm text-left rtl:text-right">
Name
            <tbody>
              <tr className="bg-white border-b">
                <th scNameope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                  Abono 1Name
                </th>
                <td className="px-6 py-4">
                  22/01/Name2024
                </td>
                <td className="px-6 py-4">
                  PaypalName
                </td>
                <td className="px-6 py-4">
                  100$Name
                </td>
              </tr>
              <tr className="bg-white border-b ">
                <th scNameope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                  Abono FinalName
                </th>
                <td className="px-6 py-4">
                  25/01/Name2024
                </td>
                <td className="px-6 py-4">
                  Banco NamePichincha Nikolay
                </td>
                <td className="px-6 py-4">
                  900$Name
                </td>
              </tr>
              <tr className="bg-white border-b ">
                <th scNameope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                  Prov2. Hotel ZuritNamea
                </th>
                <td className="px-6 py-4">
                  300$Name
                </td>
                <td className="px-6 py-4">
                  300$Name
                </td>
                <td className="px-6 py-4">
                  PagadoName
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex justify-end mt-5">
            <Link className="bg-blue-700 hover:bg-blue-800 text-white rounded py-2 px-5" href={'tour/1'}>Editar</Link>
        </div>
      </article>
  )
}
