import { NextResponse, NextRequest } from "next/server";
import prisma from "../../../lib/prisma";

export async function GET(request) {

    const url = new URL(request.url);
    const id = url.searchParams.get("id");

    const proveedor = await prisma.Proveedor.findUnique({
        where: { id },
    })
    return NextResponse.json(proveedor);
}