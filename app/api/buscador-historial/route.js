import { NextResponse, NextRequest } from "next/server";
import prisma from "../../../lib/prisma";

export async function GET(request) {
    const url = new URL(request.url);

    const cliente = url.searchParams.get("cliente")?.trim();
    const usuario = url.searchParams.get("usuario");
    const mesSeleccionado = url.searchParams.get("mes");

    let tours;

    // Si se proporciona un nombre de cliente, filtrar por nombre de cliente
    if (cliente !== null && cliente !== "") {
        tours = await prisma.Tour.findMany({
            where: {
                userId: usuario,
                nombre_pasajero: {
                    contains: cliente
                }
            },
            include: {
                programa: true,
                user: true,
                categoria_tour: true,
                categoria_hotel: true,
                agencia: true
            }
        });
    } else {
        // Si no se proporciona un nombre de cliente, obtener todos los tours del usuario
        tours = await prisma.Tour.findMany({
            where: {
                userId: usuario
            },
            include: {
                programa: true,
                user: true,
                categoria_tour: true,
                categoria_hotel: true,
                agencia: true
            }
        });
    }

    // Si se proporciona un mes, filtrar los tours por mes
    if (mesSeleccionado !== null && mesSeleccionado !== "") {
        tours = tours.filter(tour => {
            const fechaObjeto = new Date(tour.inicio);
            const mes = fechaObjeto.getMonth() + 1;
            const year = fechaObjeto.getFullYear();
            const mesCorrecto = mes < 10 ? "0" + mes : mes.toString();
            const comparar = `${year}-${mesCorrecto}`;
            return comparar === mesSeleccionado;
        });
    }

    return NextResponse.json(tours);
}