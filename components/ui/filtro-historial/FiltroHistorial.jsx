'use client'

import { useState } from "react";
import { useUIStore } from "../../../store";

export const FiltroHistorial = () => {

    const setHistorialTours = useUIStore((state) => state.setHistorialTours);
    const user = useUIStore((state) => state.user);
    const [formData, setFormData] = useState({
        cliente: "",
        mes: "",
    })

    const onChangeInput = ({ target }) => {
        setFormData({
            ...formData,
            [target.name]: target.value
        })
    }

    const onHandleSubmit = async (e) => {
        e.preventDefault();
        try {
            const resp = await fetch(`/api/buscador-historial?cliente=${formData?.cliente}&mes=${formData?.mes}&usuario=${user?.id}`);
            const data = await resp.json();
            setHistorialTours(data)
        } catch (error) {

        }
    }

    return (
        <form onSubmit={onHandleSubmit} className="max-w-sm mx-auto flex flex-col md:flex-row items-end gap-3 md:gap-5">
            <div className="flex flex-col gap-2 items-start">
                <label htmlFor="cliente" className="font-bold">Nombre cliente</label>
                <input onChange={(e) => onChangeInput(e)} value={formData.cliente} type="search" id="cliente" name="cliente" className="p-2 border border-green-700 rounded-lg" placeholder="Buscar cliente" />
            </div>
            <div className="flex flex-col gap-2 items-start">
                <label htmlFor="mes" className="font-bold">Mes del tour</label>
                <input onChange={(e) => onChangeInput(e)} value={formData.mes} type="month" id="mes" name="mes" className="p-2 border border-green-700 rounded-lg" placeholder="Buscar cliente" />
            </div>
            <input className="bg-green-700 text-white font-bold p-2 rounded-lg hover:cursor-pointer" type="submit" value="Buscar" />
        </form>
    )
}
