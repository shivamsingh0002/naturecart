import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { id, status } = await req.json();
    

    await prisma.order.update({
      where: {
        id,
      },
      data: {
        status,
      },
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}