import { NextResponse, NextRequest } from "next/server";
import prisma from "../../../lib/prisma";

export async function GET(request) {
    const url = new URL(request.url);
    const id = url.searchParams.get("id");

    const tours = await prisma.Tour.findMany({
        where: { userId: id },
        include: {
            programa: true,
            user: true,
            categoria_tour: true,
            categoria_hotel: true,
            agencia: true,
            proveedores: true,
            pago_cliente: true
        }
    });

    return NextResponse.json({ tours });
}