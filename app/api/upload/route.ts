import { NextResponse } from "next/server";
import cloudinary from "@/lib/cloudinary";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const uploaded = await cloudinary.uploader.upload(
      body.image,
      {
        folder: "naturecart",
      }
    );

    return NextResponse.json({
      success: true,
      url: uploaded.secure_url,
    });
  } catch (error) {
    console.error("UPLOAD ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        error: String(error),
      },
      { status: 500 }
    );
  }
}