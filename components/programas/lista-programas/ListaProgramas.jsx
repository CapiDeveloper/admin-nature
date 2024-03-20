'use client'
import { useEffect } from "react"
import { ProgramaAcciones } from "../programa-acciones/ProgramaAcciones";
import { useProgramaCrud } from "../../../store";

export const ListaProgramas = () => {
    const programas = useProgramaCrud((state) => state.programas);
    const getProgramas = useProgramaCrud((state) => state.getProgramas);

    useEffect(() => {
        const getListaPrograma = async () => {
            try {
                const resp = await fetch('/api/programas');
                const data = await resp.json();
                getProgramas(data);
            } catch (error) {
                alert('No se puede obtener data de los programas');
                throw error;
            }
        }
        getListaPrograma();
    }, [])

    return (
        <table className="w-full text-sm text-left mt-5">
            <tbody>
                {
                    (programas?.length > 0)&&
                    programas?.map((programa)=>(
                        <ProgramaAcciones programa={programa} key={programa.id} />
                    ))
                }
            </tbody>
        </table>
    )
}