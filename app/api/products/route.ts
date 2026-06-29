import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);

    const search = searchParams.get("search") || "";
    const category = searchParams.get("category") || "";

    const products = await prisma.product.findMany({
      where: {
        AND: [
          {
            name: {
              contains: search,
            },
          },
          category ? { category } : {},
        ],
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(products);
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

    if (!body.image) {
      return NextResponse.json(
        {
          success: false,
          error: "Image is required",
        },
        { status: 400 }
      );
    }

    const product = await prisma.product.create({
      data: {
        name: body.name,
        description: body.description,
        price: Number(body.price),
        image: body.image,
        category: body.category,
        stock: Number(body.stock),
      },
    });

    return NextResponse.json({
      success: true,
      product,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error: String(error),
      },
      { status: 500 }
    );
  }
}