import { NextResponse, NextRequest } from "next/server";
import prisma from "../../../lib/prisma";

export async function GET(request) {

    const agencias = await prisma.Agencia.findMany();

    return NextResponse.json( agencias );
}