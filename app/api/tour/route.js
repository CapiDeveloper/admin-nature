import { NextResponse, NextRequest } from "next/server";
import prisma from "../../../lib/prisma";

export async function POST(request) {

    const body = await request.json();

    try {
        const tour = await prisma.Tour.create({
            data: {
                nombre_pasajero: body.nombre_pasajero,
                agenciaId: body.agenciaId,
                userId: body.userId,
                inicio: body.inicio,
                finaliza: body.finaliza,
                num_pax: parseInt(body.num_pax),
                valor_proforma: parseInt(body.valor_proforma),
                numero_proforma: parseInt(body.numero_proforma),
                nota: body.nota,
                valor_cobrado: 0,
                categoriaHotelId: body.categoriaHotelId,
                categoriaTourId: body.categoriaTourId,
                programaId: body.programaId
            }
        })

        const tourCreado = await prisma.Tour.findUnique({
            where: { id: tour?.id },
            include: {
                agencia: true
            }
        })

        const InicioFechaComision = body.inicio.split('T')[0].split('-')[0] + '-' + body.inicio.split('T')[0].split('-')[1];
        await prisma.Comision.create({
            data: {
                cantidad: ((parseInt(body.valor_proforma) * tourCreado?.agencia?.porcentaje) / 100),
                mes: InicioFechaComision,
                programaId: body.programaId,
                tourId: tour?.id,
                userId: body.userId
            }
        });
        // Creamos los gastos
        await prisma.Gasto.create({
            data: {
                tourId: tour?.id,
                cantidad: 0
            }
        });

        return NextResponse.json(tour);
    } catch (error) {
        return NextResponse.json(error);
    }
}
export async function PUT(request) {

    const body = await request.json();
    const tour = await prisma.Tour.update({
        where: { id: body?.id },
        data: {
            nombre_pasajero: body.nombre_pasajero,
            inicio: body.inicio,
            finaliza: body.finaliza,
            num_pax: parseInt(body.num_pax),
            valor_proforma: parseInt(body.valor_proforma),
            numero_proforma: parseInt(body.numero_proforma),
            nota: body.nota
        }
    })
    return NextResponse.json(tour);
}

export async function DELETE(request) {

    const body = await request.json();

    // Elimina proveedores
    try {
        await prisma.Proveedor.deleteMany({
            where: { tourId: body }
        })
    } catch (error) {

    }
    // Elimina Gastos
    try {
        await prisma.Gasto.deleteMany({
            where: { tourId: body }
        })
    } catch (error) {

    }
    // Elimina Comisiones
    try {
        await prisma.Comision.deleteMany({
            where: { tourId: body }
        })
    } catch (error) {

    }
    const tour = await prisma.Tour.delete({
        where: { id: body },
    })
    return NextResponse.json(tour);
}

export async function GET(request) {

    const url = new URL(request.url);
    const id = url.searchParams.get("id");

    const tour = await prisma.Tour.findUnique({
        where: { id },
        include: {
            programa: true,
            user: true,
            categoria_tour: true,
            categoria_hotel: true,
            agencia: true
        }
    });

    return NextResponse.json(tour);
}