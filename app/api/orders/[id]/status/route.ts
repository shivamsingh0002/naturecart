import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  try {
    const body = await req.json();

    const order = await prisma.order.update({
      where: {
        id,
      },
      data: {
        status: body.status,
      },
    });

    if (global.io) {
      global.io.to(id).emit("orderUpdated", {
        orderId: id,
        status: body.status,
      });
    }

    return NextResponse.json(order);
  } catch (err) {
    console.error(err);

    return NextResponse.json(
      { error: "Failed to update order" },
      { status: 500 }
    );
  }
}