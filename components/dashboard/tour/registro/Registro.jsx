import { CiReceipt } from "react-icons/ci"

export const Registro = () => {

    return (
        <form className="max-w-3xl mx-auto bg-white rounded-xl p-5 border-2 my-10">
                <legend className="text-2xl font-bold bg-blue-100 text-blue-950 text-center rounded-full px-5 py-2 flex items-center justify-center gap-2">Registrar Tour <CiReceipt size={30} /></legend>
                <fieldset className="mt-5">
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 items-center sm:gap-10">
                        <div>
                            <label for="tour" className="block mb-2 text-base font-medium text-gray-900">Nombre Tour</label>
                            <input type="text" id="tour" className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Ejemplo: Mágico Isabela 5N/4N" required />
                        </div>
                        <div>
                            <label for="countries" className="block mb-2 text-base font-medium text-gray-900">Seleccione agencia/directo</label>
                            <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                <option selected disabled>-- Seleccione --</option>
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
                            <label for="nombre" className="block mb-2 text-base font-medium text-gray-900">Nombre pasajero</label>
                            <input type="text" id="nombre" className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Ejemplo: Juan Perez" required />
                        </div>
                        <div>
                            <label for="agencia" className="block mb-2 text-base font-medium text-gray-900">Nombre agencia directa</label>
                            <input type="text" id="agencia" className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Ejemplo: Travel Galápagos" required />
                        </div>
                        <div>
                            <label for="inicio" className="block mb-2 text-base font-medium text-gray-900">Fecha de inicio</label>
                            <input type="date" id="inicio" className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Ejemplo: Travel Galápagos" required />
                        </div>
                        <div>
                            <label for="fin" className="block mb-2 text-base font-medium text-gray-900">Fecha finalización</label>
                            <input type="date" id="fin" className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Ejemplo: Travel Galápagos" required />
                        </div>
                        <div>
                            <label for="pax" className="block mb-2 text-base font-medium text-gray-900">Número de PAX</label>
                            <input type="number" id="pax" className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Ejemplo: 2" required />
                        </div>
                        <div>
                            <label for="valor_proforma" className="block mb-2 text-base font-medium text-gray-900">Valor proforma</label>
                            <input type="number" id="valor_proforma" className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Ejemplo: 1.500" required />
                        </div>
                        <div>
                            <label for="numero_proforma" className="block mb-2 text-base font-medium text-gray-900">Número proforma</label>
                            <input type="number" id="numero_proforma" className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Ejemplo: 98734234" required />
                        </div>
                    </div>
                </fieldset>
                <fieldset className="my-7">
                    <div>
                        <label for="message" className="block mb-2 text-base font-medium text-gray-900">Notas</label>
                        <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Ingrese informacion adicional si desea.."></textarea>
                    </div>
                </fieldset>
                <div className="flex justify-end">
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Registrar Tour</button>
                </div>
        </form>
    )
}