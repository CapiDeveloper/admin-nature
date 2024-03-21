'use client'

import { useEffect, useState } from "react";
import { PagoVendedor } from "../../../components";
import { BsPersonArmsUp } from "react-icons/bs";
import { GrRestroomWomen } from "react-icons/gr";

export default function Home() {

  const [datos, setDatos] = useState({
    VendedorUno: [],
    VendedorDos: [],
    cargando: false
  });

  useEffect(() => {

    const obtenerDatos = async () => {
      try {
        setDatos({ ...datos, cargando: true })
        const response = await fetch('/api/comisiones');
        const data = await response.json();
        setDatos({
          VendedorUno: data?.VendedorUno,
          VendedorDos: data?.VendedorDos,
          cargando: false
        });
      } catch (error) {
        alert('Algo paso, comunicar con soporte')
        throw error;
      }
    };
    obtenerDatos();
  }, []);


  return (
    <>
      <h1 className="font-bold text-xl text-center">Pago a vendedores</h1>
      <div className="flex justify-center gap-3 items-center mt-10 mb-2">
        <h2>Christian Nieves</h2>
        <BsPersonArmsUp size={25} />
      </div>
      <div className="w-11/12 md:w-10/12 mx-auto gap-2 md:gap-5 grid md:grid-cols-2 lg:grid-cols-6">
        <PagoVendedor pagos={datos?.VendedorUno} />
      </div>
      <div className="flex justify-center gap-3 items-center mt-10 mb-2">
        <h2>María Belen</h2>
        <GrRestroomWomen size={30} />
      </div>
      <div className="w-11/12 md:w-10/12 mx-auto gap-2 md:gap-5 grid md:grid-cols-2 lg:grid-cols-6">
        <PagoVendedor pagos={datos?.VendedorDos} />
      </div>
    </>
  );
}