import { NextResponse, NextRequest } from "next/server";
import prisma from "../../../lib/prisma";

export async function GET(request) {

    const estado_pago = await prisma.Estado_pago.findMany();

    return NextResponse.json( estado_pago );
}