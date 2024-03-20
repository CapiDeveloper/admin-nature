import { NextResponse, NextRequest } from "next/server";
import prisma from "../../../lib/prisma";

export async function GET(request) {

    const metodo_pago = await prisma.Metodo_pago.findMany();

    return NextResponse.json( metodo_pago );
}