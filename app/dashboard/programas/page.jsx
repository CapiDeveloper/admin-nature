'use client'

import { FaFileSignature } from "react-icons/fa";
import { ListaProgramas } from "../../../components/programas/lista-programas/ListaProgramas";
import { AgregarPrograma, ModalEditarPrograma } from "../../../components";
import { useProgramaCrud } from "../../../store";

export default function Home() {
  const modalEditar = useProgramaCrud((state) => state.modalEditar);

  return (
    <>
      <div className="w-11/12 md:w-2/4 mx-auto">
        <div className="mx-auto flex items-center justify-center gap-3">
          <div className="bg-green-100 rounded-full h-10 w-10 flex justify-center items-center">
            <FaFileSignature size={25} />
          </div>
          <h3 className="text-xl leading-6 font-bold text-gray-900" id="modal-headline"> Agregar Programa </h3>
        </div>
        <AgregarPrograma />
        <ListaProgramas />
        {
          modalEditar&&
          <ModalEditarPrograma />
        }
      </div>
    </>
  );
}