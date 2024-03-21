'use client'

import { useEffect, useState } from "react";
import { Card } from "../../../components/dashboard/tour/card/Card";
import { useUIStore } from "../../../store";
import { FiltroHistorial, Spinner } from "../../../components";

export default function Home() {

  const user = useUIStore((state) => state.user);
  const setHistorialTours = useUIStore((state) => state.setHistorialTours);
  const historialTours = useUIStore((state) => state.historialTours);
  
  const [tours, setTours] = useState({
    cargando: true
  });

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const resp = await fetch(`/api/tours?id=${user.id}`);
        const toursData = await resp.json();
        setTours({
          cargando: false,
        });
        setHistorialTours(toursData.tours);
      } catch (error) {
        alert('Algo paso en el servidor, llamar a soporte')
        throw error;
      }
    };
    if (user.id == undefined) return;
    fetchTours();
  }, [user,setHistorialTours]);
  return (
    <>
      <FiltroHistorial />

      <div className="flex justify-end gap-5 w-11/12 mr-0 mt-10">
        <div className="flex items-center gap-2">
          <div className="h-5 w-5 rounded-full bg-red-500" />
          <p>Incompletos</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-5 w-5 rounded-full bg-green-500" />
          <p>Completos</p>
        </div>
      </div>
      {
        (tours.cargando == true) ?
          <Spinner /> :
          <div className="grid md:grid-cols-3 w-11/12 mx-auto mb-5 gap-5">
            {
              (historialTours?.length > 0) ?
                historialTours?.map((tour) => (
                  <Card key={tour.id} tour={tour} />
                )) : <p>No hay registros</p>
            }
          </div>
      }
    </>
  );
}