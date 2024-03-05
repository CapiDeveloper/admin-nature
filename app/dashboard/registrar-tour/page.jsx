'use client'

import { Registro } from "../../../components";
import { useUIStore } from "../../../store";

export default function Home() {
  const user = useUIStore((state) => state.user)

  return (
    <>
      {
        (user.rol == 1) && (<Registro />)
      }
      <div>
        <img src="./sin-acceso.svg" alt="Sin acceso" />
        No puede regustrar
      </div>
    </>
  );
}
