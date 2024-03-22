'use client'
import { useEffect, useState } from "react";
import { useProgramaCrud } from "../../../store";

export const AgregarPrograma = () => {
    const addProgramas = useProgramaCrud((state) => state.addProgramas);

    const [programas, setProgramas] = useState([]);
    const [infoPrograma, setInfoPrograma] = useState({
        nombre: "",
        categoriaTourId: "" 
    });
    const onChangeValue = ({ target }) => {
        setInfoPrograma({
            ...infoPrograma,
            [target.name]: target.value
        })
    }

    useEffect(() => {
        const getProgramas = async () => {
            try {
                const resp = await fetch('/api/categoria-tour');
                const data = await resp.json();
                setProgramas(data);
            } catch (error) {
                alert('Algo falla, comunincar con soporte')
                throw error;
            }
        }
        getProgramas();
    }, []);

    const onHandleSubmit = async(e) => {
        e.preventDefault();
        if ([infoPrograma?.nombre.trim(), infoPrograma?.categoriaTourId].includes('')) {
            alert('Todos los campos son obligatorios');
            return;
        }
        try {
            const res = await fetch('/api/programas', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(infoPrograma),
            });

            const programaCreado = await res.json();

            if(!programaCreado?.id){
                alert('No se puede guardar el programa');
                return;
            }
            addProgramas(programaCreado);
        } catch (error) {
            alert('No se puede guardar el programa');
            throw error;
        }
    }

    return (
        <form onSubmit={onHandleSubmit} className="w-full mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
            <div className="mt-5">
                <p className="text-sm text-gray-500 mb-3"> Nombre del programa: </p>
                <input onChange={(e) => onChangeValue(e)} value={infoPrograma.nombre} type="text" name="nombre" placeholder="Ejemplo: 4N/3D Magico Isabela" className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
            </div>
            <div className="mt-3">
                <p className="text-sm text-gray-500 mb-3"> Categoria del programa: </p>
                <select onChange={(e) => onChangeValue(e)} value={infoPrograma.categoriaTourId} name="categoriaTourId" id="categoriaTourId" className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                    <option value="" disabled>-- Seleccione --</option>
                    {
                        programas?.map(programa => (
                            <option key={programa?.id} value={programa?.id}>{programa?.nombre}</option>
                        ))
                    }
                </select>
            </div>
            <div className="py-3 sm:flex sm:justify-end">
                <button type="submit" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"> Agregar </button>
            </div>
        </form>
    )
}
