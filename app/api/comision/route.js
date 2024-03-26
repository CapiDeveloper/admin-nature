import { NextResponse, NextRequest } from "next/server";
import prisma from "../../../lib/prisma";

export async function GET(request) {
    // 1. Obtenemos suma pago clientes y pago proveedores
    // const sumaClientes = await prisma.Pago_cliente.aggregate({
    //     _sum: {
    //         cantidad: true
    //     },
    //     where: { tourId: 'b3720d34-c99f-4f3a-a868-14383d1a8941' }
    // })
    // const sumaProveedores = await prisma.Proveedor.aggregate({
    //     _sum: {
    //         pago: true
    //     },
    //     where: { tourId: 'b3720d34-c99f-4f3a-a868-14383d1a8941' }
    // })

    // const comisionVendedor = parseFloat((sumaClientes?._sum?.cantidad - sumaProveedores?._sum?.pago) * .3);
    // 3. la resta de clientes y proveedores es la comision

    const comisionActualizar = await prisma.Comision.findUnique({
        where: {
            tourId: 'b3720d34-c99f-4f3a-a868-14383d1a8941'
        },
    })
    // await prisma.Comision.update({
    //     where: {
    //         tourId: 'b3720d34-c99f-4f3a-a868-14383d1a8941'
    //     },
    //     data: {
    //         cantidad: 20,
    //     }
    // });
    return NextResponse.json(comisionActualizar);
}