import { NextResponse, NextRequest } from "next/server";
import prisma from "../../../lib/prisma";

export async function POST(request) {
    
    const body = await request.json();

    const user = await prisma.user.findUnique({
        where: {
          email: body.email,
        },
    })

    if(user){
        if(user.password == body.password){
            return NextResponse.json( {user, valido:true} );
        }
    }

    return NextResponse.json({ valido: false });
}