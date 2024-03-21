import { NextResponse, NextRequest } from "next/server";
import prisma from "../../../lib/prisma";

export async function GET(request) {

    const VendedorUno = await prisma.comision.groupBy({
        where: {
            userId: "1", // cambiar este valor en produccion
        },
        by: ['mes'],
        _sum: {
            cantidad: true,
        },
        orderBy: {
            mes: 'asc',
          },
    });

    const VendedorDos = await prisma.comision.groupBy({
        where: {
            userId: "2", // cambiar este valor en produccion
        },
        by: ['mes'],
        _sum: {
            cantidad: true,
        },
        orderBy: {
            mes: 'asc',
          },
    });

    // const VendedorTres = await prisma.comision.groupBy({
    //     where: {
    //         userId: "2", // cambiar este valor en produccion
    //     },
    //     by: ['mes'],
    //     _sum: {
    //         cantidad: true,
    //     },
    //     orderBy: {
    //         mes: 'asc',
    //       },
    // });


    return NextResponse.json({
        VendedorUno,
        VendedorDos,
        // VendedorTres
    });
}