import { NextResponse, NextRequest } from "next/server";
import prisma from "../../../lib/prisma";

export async function GET(request) {
    const categoria_tours = await prisma.CategoriaTour.findMany();
    return NextResponse.json(categoria_tours);
}