'use client'

import Image from "next/image";
import { Registro } from "../../../components";
import { useUIStore } from "../../../store";

export default function Home() {
  const user = useUIStore((state) => state.user)

  return (
    <>
      {
        (user.rol == 1) ? (<Registro />):
        (<div className="flex flex-col items-center justify-center">
        <Image
          src={"/sin-acceso.svg"}
          height={300}
          width={300}
          alt="img"
        />
        <p className="font-bold text-2xl">No tiene acceso</p>
      </div>)
      }
    </>
  );
}
