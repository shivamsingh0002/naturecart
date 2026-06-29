import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const items = await prisma.wishlist.findMany();

  return NextResponse.json(items);
}

export async function POST(req: Request) {
  const body = await req.json();

  const item = await prisma.wishlist.create({
    data: {
      userId: body.userId,
      productId: body.productId,
    },
  });

  return NextResponse.json(item);
}