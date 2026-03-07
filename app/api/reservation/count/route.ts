import { prisma } from "@/lib/prisma";

export const GET = async () => {
  try {
    const data = await prisma.reservation.count();

    return Response.json(
      {
        success: true,
        total: data,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Reservation Error:", error);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
