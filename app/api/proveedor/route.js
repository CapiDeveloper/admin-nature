import { NextResponse, NextRequest } from "next/server";
import prisma from "../../../lib/prisma";

export async function POST(request) {

    const body = await request.json();
    const fecha = new Date();

    const proveedor = await prisma.Proveedor.create({
        data: {
            nombre: body.nombre,
            pago: body.pago,
            fecha,
            tourId: body.tourId,
            estado_pago_Id: body.estado_pago_Id,
        }
    })
    const proveedorActualizado = await prisma.Proveedor.findMany({
        where:{ id: proveedor?.id },
        include: {
            estado_pago: true
        }
    })

    return NextResponse.json(proveedorActualizado);
}
export async function PUT(request) {

    const body = await request.json();

    const proveedorActualizado = await prisma.Proveedor.update({
        where: { id: body.id },
        data: {
            nombre: body.nombre,
            pago: body.pago,
            tourId: body.tourId,
            estado_pago_Id: body.estado_pago_Id,
        }
    })
    const proveedor = await prisma.Proveedor.findMany({
        where:{ id: body?.id },
        include: {
            estado_pago: true
        }
    })

    return NextResponse.json(proveedor);
}
export async function GET(request) {

    const url = new URL(request.url);
    const id = url.searchParams.get("id");

    const proveedor = await prisma.Proveedor.findMany({
        where: { tourId: id },
        include: {
            estado_pago:true
        }
    })
    return NextResponse.json(proveedor);
}
export async function DELETE(request) {

    const id = await request.json();

    const proveedorEliminado = await prisma.Proveedor.delete({
        where: { id }
    })
    return NextResponse.json(proveedorEliminado);
}