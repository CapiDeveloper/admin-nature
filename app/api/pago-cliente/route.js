import { NextResponse, NextRequest } from "next/server";
import prisma from "../../../lib/prisma";

export async function POST(request) {

    const body = await request.json();

    const pago_cliente = await prisma.Pago_cliente.create({
        data: {
            cantidad: body.cantidad,
            tourId: body.tourId,
            metodo_pago_Id: body.metodo_pago_Id,
            estado_pago_Id: body.estado_pago_Id,
        }
    })

    // Crear gasto (proveedor) en caso de que sea WeTravel
    if (body.metodo_pago_Id == 4) {
        try {
            await prisma.Proveedor.create({
                data: {
                    nombre: 'WeTravel',
                    pago: 15,
                    fecha: new Date(),
                    tourId: body.tourId,
                    estado_pago_Id: body.estado_pago_Id,
                }
            })
        } catch (error) {
            console.log(error);
        }
    }

    // Actualizar comision
    // 1. Obtenemos suma pago clientes y pago proveedores
    const sumaClientes = await prisma.Pago_cliente.aggregate({
        _sum: {
            cantidad: true
        },
        where: { tourId: body.tourId }
    })
    const sumaProveedores = await prisma.Proveedor.aggregate({
        _sum: {
            pago: true
        },
        where: { tourId: body.tourId }
    })
    
    // 2. Obtenemos el procentaje de la agencia
    const porcentageAgencia = await prisma.Tour.findUnique({
        where: { id: body?.tourId },
        include: {
            agencia: true
        }
    })
    const comisionVendedor = parseFloat((sumaClientes?._sum?.cantidad - sumaProveedores?._sum?.pago)*porcentageAgencia?.agencia?.porcentaje);
    // 3. la resta de clientes y proveedores es la comision
    await prisma.Comision.update({
        where: { tourId: body?.tourId },
        data: {
            cantidad: comisionVendedor,
        }
    });

    // Rgresamos el pago cliente creado
    const clienteCreado = await prisma.Pago_cliente.findMany({
        where: { id: pago_cliente?.id },
        include: {
            estado_pago: true,
            metodo_pago: true
        }
    });

    return NextResponse.json(clienteCreado);
}

export async function DELETE(request) {

    const body = await request.json();

    // Eliminamos pago cliente
    try {
        await prisma.Pago_cliente.deleteMany({
            where: { id: body?.id }
        })
    } catch (error) {
        console.log(error)
    }

    // Actualizar comision
    // 1. Obtenemos suma pago clientes y pago proveedores
    const sumaClientes = await prisma.Pago_cliente.aggregate({
        _sum: {
            cantidad: true
        },
        where: { tourId: body?.tourId }
    })
    const sumaProveedores = await prisma.Proveedor.aggregate({
        _sum: {
            pago: true
        },
        where: { tourId: body?.tourId }
    })

    // 2. la resta de clientes y proveedores es la comision
    await prisma.Comision.update({
        where: { tourId: body?.tourId },
        data: {
            cantidad: (parseFloat(sumaClientes) - parseFloat(sumaProveedores)),
        }
    });

    return NextResponse.json(body);
}
export async function PUT(request) {

    const body = await request.json();

    const PagoActualizado = await prisma.Pago_cliente.update({
        where: { id: body.id },
        data: {
            cantidad: body.cantidad,
            tourId: body.tourId,
            metodo_pago_Id: body.metodo_pago_Id,
            estado_pago_Id: body.estado_pago_Id,
        }
    })

    // Puede ser que cambie un gasto de metodo de pago - Quitar wetravel como gasto
    if (body.metodo_pago_Id !== 4) {
        try {
            await prisma.Proveedor.delete({
                where: { tourId: body.tourId, nombre: 'WeTravel' }
            })
        } catch (error) {
            console.log(error)
        }
    }

    // Actualizar comision
    // 1. Obtenemos suma pago clientes y pago proveedores
    const sumaClientes = await prisma.Pago_cliente.aggregate({
        _sum: {
            cantidad: true
        },
        where: { tourId: body?.tourId }
    })
    const sumaProveedores = await prisma.Proveedor.aggregate({
        _sum: {
            pago: true
        },
        where: { tourId: body?.tourId }
    })

    // 2. la resta de clientes y proveedores es la comision
    await prisma.Comision.update({
        where: { tourId: body?.tourId },
        data: {
            cantidad: parseFloat(sumaClientes) - parseFloat(sumaProveedores),
        }
    });

    const clienteActualizado = await prisma.Pago_cliente.findMany({
        where: { id: PagoActualizado?.id },
        include: {
            estado_pago: true,
            metodo_pago: true
        }
    });

    return NextResponse.json(clienteActualizado);
}