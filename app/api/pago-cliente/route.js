import { NextResponse, NextRequest } from "next/server";
import prisma from "../../../lib/prisma";

export async function POST(request) {

    const body = await request.json();

    const pago_cliente = await prisma.Pago_cliente.create({
        data: {
            cantidad: body.cantidad ,
            tourId: body.tourId ,
            metodo_pago_Id: body.metodo_pago_Id ,
            estado_pago_Id: body.estado_pago_Id ,
        }
    })

    const clienteCreado = await prisma.Pago_cliente.findMany({
        where: { id: pago_cliente?.id },
        include: {
            estado_pago:true,
            metodo_pago:true
        }
    });

    return NextResponse.json(clienteCreado);
}

export async function DELETE(request) {

    const body = await request.json();

    const pago_cliente = await prisma.Pago_cliente.deleteMany({
        where: { id: body }
    })

    return NextResponse.json(body);
}
export async function PUT(request) {

    const body = await request.json();

    const PagoActualizado = await prisma.Pago_cliente.update({
        where: { id: body.id },
        data: {
            cantidad: body.cantidad ,
            tourId: body.tourId ,
            metodo_pago_Id: body.metodo_pago_Id ,
            estado_pago_Id: body.estado_pago_Id ,
        }
    })

    const clienteCreado = await prisma.Pago_cliente.findMany({
        where: { id: PagoActualizado?.id },
        include: {
            estado_pago:true,
            metodo_pago:true
        }
    });

    return NextResponse.json(clienteCreado);
}