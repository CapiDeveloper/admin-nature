'use client'

import { CiReceipt } from "react-icons/ci"
import { useUIStore } from "../../../../store"
import { useState } from "react"

export const Registro = () => {

    const [data, setData] = useState({

    })

    const onChangeInput = ({target})=>{
        setData({
            ...data,
            [target.name]: target.value
        })
    }

    const onHandelSubmit = (e)=>{
        e.preventDefault();
        console.log(data)
    }
    return (
        <form onSubmit={onHandelSubmit} className="max-w-3xl mx-auto bg-white rounded-xl p-5 border-2 my-10">
                <legend className="text-2xl font-bold bg-blue-100 text-blue-950 text-center rounded-full px-5 py-2 flex items-center justify-center gap-2">Registrar Tour <CiReceipt size={30} /></legend>
                <fieldset className="mt-5">
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 items-center sm:gap-10">
                        <div>
                            <label htmlFor="nombre" className="block mb-2 text-base font-medium text-gray-900">Nombre Tour</label>
                            <input onChange={(e)=>onChangeInput(e)} type="text" name="nombre" id="nombre" className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Ejemplo: Mágico Isabela 5N/4N"  />
                        </div>
                        <div>
                            <label htmlFor="nombre_agencia_directa" className="block mb-2 text-base font-medium text-gray-900">Seleccione agencia/directo</label>
                            <select id="nombre_agencia_directa" name="nombre_agencia_directa" className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                <option value="" disabled>-- Seleccione --</option>
                                <option value="US">Mistral</option>
                                <option value="CA">Viator</option>
                                <option value="FR">Tour Radar</option>
                                <option value="DE">Expedia</option>
                                <option value="DE">Sommer Fernreisen</option>
                                <option value="DE">Academy Bay</option>
                                <option value="DE">Agencias directas</option>
                                <option value="DE">Pasajero directo</option>
                            </select>    
                        </div>
                        <div>
                            <label htmlFor="nombre_pasajero" className="block mb-2 text-base font-medium text-gray-900">Nombre pasajero</label>
                            <input onChange={(e)=>onChangeInput(e)} type="text" id="nombre_pasajero" name="nombre_pasajero" className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Ejemplo: Juan Perez"  />
                        </div>
                        <div>
                            <label htmlFor="nombre_agencia" className="block mb-2 text-base font-medium text-gray-900">Nombre agencia directa</label>
                            <input onChange={(e)=>onChangeInput(e)} type="text" id="nombre_agencia" name="nombre_agencia" className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Ejemplo: Travel Galápagos"  />
                        </div>
                        <div>
                            <label htmlFor="inicio" className="block mb-2 text-base font-medium text-gray-900">Fecha de inicio</label>
                            <input onChange={(e)=>onChangeInput(e)} type="date" id="inicio" name="inicio" className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Ejemplo: Travel Galápagos"  />
                        </div>
                        <div>
                            <label htmlFor="fin" className="block mb-2 text-base font-medium text-gray-900">Fecha finalización</label>
                            <input onChange={(e)=>onChangeInput(e)} type="date" id="fin" name="fin" className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Ejemplo: Travel Galápagos"  />
                        </div>
                        <div>
                            <label htmlFor="num_pax" className="block mb-2 text-base font-medium text-gray-900">Número de PAX</label>
                            <input onChange={(e)=>onChangeInput(e)} type="number" id="num_pax" name="num_pax" className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Ejemplo: 2"  />
                        </div>
                        <div>
                            <label htmlFor="valor_proforma" className="block mb-2 text-base font-medium text-gray-900">Valor proforma</label>
                            <input onChange={(e)=>onChangeInput(e)} type="number" id="valor_proforma" name="valor_proforma" className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Ejemplo: 1.500"  />
                        </div>
                        <div>
                            <label htmlFor="numero_proforma" className="block mb-2 text-base font-medium text-gray-900">Número proforma</label>
                            <input onChange={(e)=>onChangeInput(e)} type="number" id="numero_proforma" name="numero_proforma" className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Ejemplo: 98734234"  />
                        </div>
                    </div>
                </fieldset>
                <fieldset className="my-7">
                    <div>
                        <label htmlFor="nota" className="block mb-2 text-base font-medium text-gray-900">Notas</label>
                        <textarea id="nota" name="nota" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Ingrese informacion adicional si desea.."></textarea>
                    </div>
                </fieldset>
                <div className="flex justify-end">
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Registrar Tour</button>
                </div>
        </form>
    )
}