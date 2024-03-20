import { NextResponse, NextRequest } from "next/server";
import prisma from "../../../lib/prisma";

export async function GET(request) {

    const tours = await prisma.Tour.findMany({
        include: {
            programa: true,
            user: true,
            categoria_tour: true,
            categoria_hotel: true,
            agencia: true
        }
    });

    return NextResponse.json( tours );
}