'use client'

import { CiReceipt } from "react-icons/ci"
import { useEffect, useState } from "react"
import { useUIStore } from "../../../../store"
import { useRouter } from "next/navigation"

export const Registro = () => {
    const router = useRouter()
    const user = useUIStore((state) => state.user)

    const [registro, setRegistro] = useState({
        nombre_pasajero: "",
        agenciaId: "",
        userId: "",
        inicio: "",
        finaliza: "",
        num_pax: "",
        valor_proforma: "",
        numero_proforma: "",
        nota: "",
        categoriaHotelId: "",
        categoriaTourId: "",
        programaId: ""
    })

    const [info, setInfo] = useState({
        agencias: [],
        hoteles: [],
        categorias: [],
        programas: [],
    });

    const getAgencias = async () => {
        try {
            const [resp1, resp2, resp3, resp4] = await Promise.all([
                fetch('/api/agencia'),
                fetch('/api/hoteles'),
                fetch('/api/categoria-tour'),
                fetch('/api/programas')
            ]);

            const data1 = await resp1.json();
            const data2 = await resp2.json();
            const data3 = await resp3.json();
            const data4 = await resp4.json();

            // Luego, puedes combinar los datos en una estructura que tenga sentido para tu aplicación
            const combinedData = {
                agencias: data1,
                hoteles: data2,
                categorias: data3,
                programas: data4,
            };

            return combinedData;
        } catch (error) {
            alert('Algo ha fallado, comunicar con soporte')
            throw error; // Puedes manejar el error aquí o simplemente lanzarlo para que se maneje más arriba
        }
    };

    useEffect(() => {
        const fetchAgencias = async () => {
            try {
                const data = await getAgencias();
                setInfo({
                    agencias: data.agencias,
                    hoteles: data.hoteles,
                    categorias: data.categorias,
                    programas: data.programas,
                });
            } catch (error) {
                alert('Algo ha fallado en el servidor');
                throw error;
            }
        };

        fetchAgencias();
    }, []);

    const onChangeInput = ({ target }) => {
        setRegistro({
            ...registro,
            'userId': user?.id,
            [target.name]: target.value
        });
    }

    const onHandelSubmit = async (e) => {
        e.preventDefault();

        const validar = Object.values(registro).includes("");
        
        if(validar){
            alert('Todos los campos son obligatorios');
            return;
        }
        
        try {
            const res = await fetch('/api/tour', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(registro),
            });
            const tourCreado = await res.json();
            if(tourCreado?.id){
                router.push('/dashboard/historial');
                return;
            }
            return alert('Comunicar ncon soporte, algo ha fallado')
        } catch (error) {
            return alert('Algo ha fallado, no se puede registrar')
        }
    }

    return (
        <form onSubmit={onHandelSubmit} className="max-w-3xl mx-auto bg-white rounded-xl p-5 border-2 my-10">
            <legend className="text-2xl font-bold bg-blue-100 text-blue-950 text-center rounded-full px-5 py-2 flex items-center justify-center gap-2">Registrar Tour <CiReceipt size={30} /></legend>
            <fieldset className="mt-5">
                <div className="grid sm:grid-cols-2 md:grid-cols-3 items-center sm:gap-10">
                    <div>
                        <label htmlFor="programaId" className="block mb-2 text-base font-medium text-gray-900">Programas</label>
                        <select onChange={(e) => {
                            setRegistro({
                                ...registro,
                                programaId: e.target.value
                            })
                        }} id="programaId" name="programaId" value={registro.programaId} className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                            <option value="" disabled>--Selecciona--</option>
                            {
                                info.programas.map(agencia => (
                                    <option key={agencia.id} value={agencia.id}>{agencia.nombre}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div>
                        <label htmlFor="categoriaTourId" className="block mb-2 text-base font-medium text-gray-900">Categoria Programa</label>
                        <select onChange={(e) => {
                            setRegistro({
                                ...registro,
                                categoriaTourId: e.target.value
                            })
                        }} id="categoriaTourId" name="categoriaTourId" value={registro.categoriaTourId} className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                            <option value="" disabled>-- Seleccione --</option>
                            {
                                info.categorias.map(agencia => (
                                    <option key={agencia.id} value={agencia.id}>{agencia.nombre}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div>
                        <label htmlFor="categoriaHotelId" className="block mb-2 text-base font-medium text-gray-900">Categorias Hotel</label>
                        <select onChange={(e) => {
                            setRegistro({
                                ...registro,
                                categoriaHotelId: e.target.value
                            })
                        }} id="categoriaHotelId" name="categoriaHotelId" value={registro.categoriaHotelId} className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                            <option value="" disabled>-- Seleccione --</option>
                            {
                                info.hoteles.map(agencia => (
                                    <option key={agencia.id} value={agencia.id}>{agencia.nombre}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div>
                        <label htmlFor="agenciaId" className="block mb-2 text-base font-medium text-gray-900">Seleccione agencia/directo</label>
                        <select onChange={(e) => {
                            setRegistro({
                                ...registro,
                                agenciaId: e.target.value
                            })
                        }} id="agenciaId" name="agenciaId" value={registro.agenciaId} className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                            <option value="" disabled>-- Seleccione --</option>
                            {
                                info.agencias.map(agencia => (
                                    <option key={agencia.id} value={agencia.id}>{agencia.nombre}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div>
                        <label htmlFor="nombre_pasajero" className="block mb-2 text-base font-medium text-gray-900">Nombre pasajero</label>
                        <input onChange={(e) => onChangeInput(e)} type="text" id="nombre_pasajero" name="nombre_pasajero" className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Ejemplo: Juan Perez" />
                    </div>
                    <div>
                        <label htmlFor="inicio" className="block mb-2 text-base font-medium text-gray-900">Fecha de inicio</label>
                        <input onChange={(e) => {
                            setRegistro({
                                ...registro,
                                inicio: new Date(e.target.value).toISOString()
                            })
                        }} type="date" id="inicio" name="inicio" className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                    </div>
                    <div>
                        <label htmlFor="finaliza" className="block mb-2 text-base font-medium text-gray-900">Fecha finalización</label>
                        <input onChange={(e) => {
                            setRegistro({
                                ...registro,
                                finaliza: new Date(e.target.value).toISOString()
                            })
                        }} type="date" id="finaliza" name="finaliza" className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                    </div>
                    <div>
                        <label htmlFor="num_pax" className="block mb-2 text-base font-medium text-gray-900">Número de PAX</label>
                        <input onChange={(e) => onChangeInput(e)} type="number" id="num_pax" name="num_pax" className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Ejemplo: 2" />
                    </div>
                    <div>
                        <label htmlFor="numero_proforma" className="block mb-2 text-base font-medium text-gray-900">Número proforma</label>
                        <input onChange={(e) => onChangeInput(e)} type="number" id="numero_proforma" name="numero_proforma" className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Ejemplo: 98734234" />
                    </div>
                    <div>
                        <label htmlFor="valor_proforma" className="block mb-2 text-base font-medium text-gray-900">Valor proforma</label>
                        <input onChange={(e) => onChangeInput(e)} type="number" id="valor_proforma" name="valor_proforma" className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Ejemplo: 1.500" />
                    </div>
                </div>
            </fieldset>
            <fieldset className="my-7">
                <div>
                    <label htmlFor="nota" className="block mb-2 text-base font-medium text-gray-900">Notas</label>
                    <textarea onChange={(e) => onChangeInput(e)} id="nota" name="nota" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Ingrese informacion adicional si desea.."></textarea>
                </div>
            </fieldset>
            <div className="flex justify-end">
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Registrar Tour</button>
            </div>
        </form>
    )
}