import { NextResponse, NextRequest } from "next/server";
import prisma from "../../../lib/prisma";

export async function GET(request) {
    const url = new URL(request.url);
    const id = url.searchParams.get("id");

    const cliente = await prisma.Pago_cliente.findMany({
        where: { tourId: id },
        include: {
            estado_pago:true,
            metodo_pago:true
        }
    });
    return NextResponse.json(cliente);
}