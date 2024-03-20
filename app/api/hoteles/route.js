import { NextResponse, NextRequest } from "next/server";
import prisma from "../../../lib/prisma";

export async function GET(request) {

    const hoteles = await prisma.CategoriaHotel.findMany();

    return NextResponse.json( hoteles );
}