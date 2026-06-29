import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST() {
  const user = await prisma.user.update({
    where: {
      email: "YOUR_EMAIL_HERE",
    },
    data: {
      role: "ADMIN",
    },
  });

  return NextResponse.json(user);
}