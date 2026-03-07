import { prisma } from "@/lib/prisma";

export const GET = async () => {
  try {
    const data = await prisma.reservation.findMany({
      orderBy: {
        createdAt: "desc",
      },
      take: 6,
    });

    return Response.json(
      {
        success: true,
        message: "Successfully fetched latest reservations",
        data: data,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Reservation Error:", error);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
