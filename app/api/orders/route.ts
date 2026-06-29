import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const orders = await prisma.order.findMany({
      include: {
        items: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(orders);
  } catch (error) {
    console.error(error);

    return NextResponse.json([], {
      status: 500,
    });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    console.log("ORDER RECEIVED:", body);

    const order = await prisma.order.create({
      data: {
        customer: body.customer,
        phone: body.phone,
        email: body.email,
        address: body.address,
        amount: body.amount,
        paymentId: "COD",
        orderId: crypto.randomUUID(),
        status: "Pending",

        items: {
          create: body.items.map((item: any) => ({
            name: item.name,
            price: Number(item.price),
            quantity: item.quantity,
          })),
        },
      },
      include: {
        items: true,
      },
    });

    return NextResponse.json({
      success: true,
      order,
    });
  } catch (error) {
    console.error("ORDER ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        error: String(error),
      },
      {
        status: 500,
      }
    );
  }
}