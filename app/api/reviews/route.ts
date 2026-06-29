import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const reviews = await prisma.review.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return NextResponse.json(reviews);
}

export async function POST(req: Request) {
  const body = await req.json();

  const review = await prisma.review.create({
    data: {
      rating: Number(body.rating),
      comment: body.comment,
    },
  });

  return NextResponse.json(review);
}