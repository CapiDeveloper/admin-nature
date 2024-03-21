'use client'

import { useCallback, useEffect, useState } from "react";
import { useUIStore } from "../../store";
import { ItemTour, Spinner } from "../../components";
import Image from "next/image";

export default function Home() {

  const user = useUIStore((state) => state.user)

  const [datos, setDatos] = useState({
    registros: [],
    cargando: true
  });

  useEffect(() => {
    const obtenerDatos = async() => {
      try {
        const response = await fetch('/api/lista-tours');
        const data = await response.json();
        setDatos({
          registros: data,
          cargando: false
        });
      } catch (error) {
        alert('Algo pasó, comunica con soporte');
        throw error;
      }
    };
    obtenerDatos();
  }, [user]);

  return (
    <>
      <div className="sm:flex justify-center items-center">
        <Image src="./travel-welcome.svg" height={300} width={200} alt="Travel" />
        <div className="flex items-center justify-center gap-5 text-2xl font-bold">
          <p className="">Disponibilidad</p>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              {
                (datos?.cargando == true) ?
                  <Spinner /> :
                  <table className="min-w-full">
                    <thead className="bg-white border-b">
                      <tr>
                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                          Inicio
                        </th>
                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                          Fin
                        </th>
                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                          Agencia
                        </th>
                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                          Programa
                        </th>
                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                          Tour
                        </th>
                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                          Categoria
                        </th>
                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                          # Pasajeros
                        </th>
                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                          Vendedor
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        (datos?.registros.length > 0) ?
                          datos?.registros?.map((dato, index) => (
                            <ItemTour key={index} dato={dato} />
                          )) :
                          <tr className="my-5 font-bold">
                            <td>No hay registros</td>
                          </tr>
                      }
                    </tbody>
                  </table>
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}