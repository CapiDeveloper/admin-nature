import { NextResponse, NextRequest } from "next/server";
import prisma from "../../../lib/prisma";

export async function GET(request) {

    const url = new URL(request.url);
    const id = url.searchParams.get("id");

    const pago = await prisma.Pago_cliente.findUnique({
        where: { id },
    })
    return NextResponse.json(pago);
}