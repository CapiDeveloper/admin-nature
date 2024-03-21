'use client'

import { CiReceipt } from "react-icons/ci"

import { useUIStore } from './../../../../store'
import { AgregarCliente } from '../acciones/AgregarCliente'
import { AgregarProveedor } from '../acciones/AgregarProveedor'
import { ModalCobroProveedor } from "../../../ui/modal/ModalCobroProveedor"
import { ModalCobroCliente } from "../../../ui/modal/ModalCobroCliente"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { ProveedorAcciones } from "../../../ui/acciones/ProveedorAcciones"
import { ModalEditarProveedor } from "../../../ui/modal/ModalEditarProveedor"
import { AbonoClienteAcciones } from "../../../ui/acciones/AbonoClienteAcciones"
import { ModalEditarCliente } from "../../../ui/modal/ModalEditarCliente"

export const Editar = ({ id }) => {

    const isOpenModalProveedor = useUIStore((state) => state.isOpenModalProveedor);
    const isOpenModalCliente = useUIStore((state) => state.isOpenModalCliente);
    const isOpenModalEditarCliente = useUIStore((state) => state.isOpenModalEditarCliente);
    const isOpenModalEditarProveedor = useUIStore((state) => state.isOpenModalEditarProveedor);
    const getProveedores = useUIStore((state) => state.getProveedores);
    const getPagoClientes = useUIStore((state) => state.getPagoClientes);
    const proveedorestour = useUIStore((state) => state.proveedorestour);
    const pagoClientesTour = useUIStore((state) => state.pagoClientesTour);

    const router = useRouter();
    const [tour, setTour] = useState({
        agencia: {},
        programa: {},
        id: "",
        nombre_pasajero: "",
        inicio: "",
        finaliza: "",
        num_pax: "",
        valor_proforma: "",
        numero_proforma: "",
        nota: "",
    })

    const formatoFechaParaInputDate = (fecha) => {
        return fecha.split('T')[0];
    }

    const onChangeValue = ({ target }) => {
        setTour({
            ...tour,
            [target.name]: target.value
        })
    }

    useEffect(() => {
        async function fetchData() {
            try {
                const [usersResponse, productsResponse, clientesResponse] = await Promise.all([
                    fetch(`/api/tour?id=${id}`),
                    fetch(`/api/proveedor?id=${id}`),
                    fetch(`/api/lista-clientes-especifico?id=${id}`),
                ]);
    
                const usersData = await usersResponse.json();
                const productsData = await productsResponse.json();
                const clientesData = await clientesResponse.json();
    
                setTour(usersData);
                getProveedores(productsData);
                getPagoClientes(clientesData);
    
    
            } catch (error) {
                alert('Error al obtener datos para editar')
                throw error;
            }
        }
        fetchData();
    }, [getPagoClientes, getProveedores,id]);

    const onHandleSubmit = async (e) => {
        e.preventDefault();
        try {
            const resp = await fetch('/api/tour', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(tour),
            });
            const data = await resp.json();
            if(data?.id){
                router.push('/dashboard/historial');
                return;
            }
            alert('No se puede actualizar el tour');
        } catch (error) {
            alert('No se puede actualizar el tour');
            throw error;
        }
    }
    return (
        <>
            <form onSubmit={onHandleSubmit} className="max-w-3xl mx-auto bg-white rounded-xl p-5 border-2 my-10">
                <legend className="text-2xl font-bold bg-blue-100 text-blue-950 text-center rounded-full px-5 py-2 flex items-center justify-center gap-2">Editar Tour <CiReceipt size={30} /></legend>
                <fieldset className="mt-5">
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 items-center sm:gap-10">
                        <div className="flex flex-col items-center justify-center">
                            <p className="block mb-2 text-base text-gray-900 font-bold">Tour</p>
                            <p>{tour.programa?.nombre}</p>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <p className="block mb-2 text-base text-gray-900 font-bold">Agencia</p>
                            <p>{tour.agencia?.nombre}</p>
                        </div>
                        <div>
                            <label htmlFor="nombre_pasajero" className="block mb-2 text-base font-medium text-gray-900">Nombre pasajero</label>
                            <input onChange={(e) => onChangeValue(e)} name="nombre_pasajero" value={tour.nombre_pasajero} type="text" id="nombre_pasajero" className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Ejemplo: Juan Perez" required />
                        </div>
                        <div>
                            <label htmlFor="inicio" className="block mb-2 text-base font-medium text-gray-900">Fecha de inicio</label>
                            <input onChange={(e) => {
                                setTour({
                                    ...tour,
                                    inicio: new Date(e.target.value).toISOString()
                                })
                            }} name="inicio" type="date" value={formatoFechaParaInputDate(tour.inicio)} id="inicio" className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Ejemplo: Travel Galápagos" required />
                        </div>
                        <div>
                            <label htmlFor="finaliza" className="block mb-2 text-base font-medium text-gray-900">Fecha finalización</label>
                            <input onChange={(e) => {
                                setTour({
                                    ...tour,
                                    finaliza: new Date(e.target.value).toISOString()
                                })
                            }} name="finaliza" type="date" value={formatoFechaParaInputDate(tour.finaliza)} id="finaliza" className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Ejemplo: Travel Galápagos" required />
                        </div>
                        <div>
                            <label htmlFor="num_pax" className="block mb-2 text-base font-medium text-gray-900">Número de PAX</label>
                            <input onChange={(e) => onChangeValue(e)} value={tour.num_pax} type="number" name="num_pax" id="num_pax" className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Ejemplo: 2" required />
                        </div>
                        <div>
                            <label htmlFor="valor_proforma" className="block mb-2 text-base font-medium text-gray-900">Valor proforma</label>
                            <input onChange={(e) => onChangeValue(e)} name="valor_proforma" value={tour.valor_proforma} type="number" id="valor_proforma" className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Ejemplo: 1.500" required />
                        </div>
                        <div>
                            <label htmlFor="numero_proforma" className="block mb-2 text-base font-medium text-gray-900">Número proforma</label>
                            <input onChange={(e) => onChangeValue(e)} name="numero_proforma" value={tour.numero_proforma} type="number" id="numero_proforma" className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Ejemplo: 98734234" required />
                        </div>
                    </div>
                </fieldset>
                <AgregarCliente id={id} />
                <table className="w-full text-sm text-left rtl:text-right mt-5">

                    <tbody>
                        {
                            pagoClientesTour?.map((cliente, index) => (
                                <AbonoClienteAcciones cliente={cliente} key={index} />
                            ))
                        }
                    </tbody>
                </table>
                <AgregarProveedor id={id} />
                <table className="w-full text-sm text-left rtl:text-right mt-5">

                    <tbody>
                        {
                            proveedorestour?.map((proveedor, index) => (
                                <ProveedorAcciones proveedor={proveedor} key={index} />
                            ))
                        }
                    </tbody>
                </table>
                <p className="text-end text-xl mt-7">Comision vendedor: <span className="font-bold border-b-2 border-b-green-600">{ ((tour?.valor_proforma * tour?.agencia?.porcentaje)/100).toString()  }$</span></p>
                
                <fieldset className="my-7">
                    <div>
                        <label htmlFor="nota" className="block mb-2 text-base font-medium text-gray-900">Notas</label>
                        <textarea id="nota" name="nota" onChange={(e) => onChangeValue(e)} value={tour?.nota} rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Ingrese informacion adicional si desea.."></textarea>
                    </div>
                </fieldset>
                <div className="flex justify-end">
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Guardar Cambios</button>
                </div>
            </form>
            {
                isOpenModalProveedor &&
                <ModalCobroProveedor />
            }
            {
                isOpenModalCliente &&
                <ModalCobroCliente />
            }
            {
                isOpenModalEditarProveedor &&
                <ModalEditarProveedor />
            }
            {
                isOpenModalEditarCliente &&
                <ModalEditarCliente />
            }
        </>
    )
}