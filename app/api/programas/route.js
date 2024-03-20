import { NextResponse, NextRequest } from "next/server";
import prisma from "../../../lib/prisma";

export async function GET(request) {

    const programas = await prisma.Programa.findMany({
        include: {
            categoria_tour: true
        }
    });

    return NextResponse.json( programas );
}

export async function POST(request) {
    const body = await request.json();
    const programaCreado = await prisma.Programa.create({
        data: {
            nombre: body?.nombre,
            categoriaTourId: body?.categoriaTourId
        }
    });
    const programaRegresar = await prisma.Programa.findUnique({
        where: { id: programaCreado?.id },
        include: {
            categoria_tour: true
        }
    });
    return NextResponse.json( programaRegresar );
}

export async function DELETE(request) {
    const body = await request.json();
    await prisma.Programa.deleteMany({
        where: { id: body }
    });
    return NextResponse.json( body );
}

export async function PUT(request) {
    const body = await request.json();

    const programaActualizado = await prisma.Programa.update({
        where: { id:body?.id },
        data: {
            nombre: body?.nombre,
            categoriaTourId: body?.categoriaTourId
        }
    });
    const programaRegresar = await prisma.Programa.findUnique({
        where: { id: programaActualizado?.id },
        include: {
            categoria_tour: true
        }
    })

    return NextResponse.json( programaRegresar );
}