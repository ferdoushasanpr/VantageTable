import { prisma } from "@/lib/prisma";

export const GET = async () => {
  try {
    const totalReservations = await prisma.reservation.count();
    const totalPendingReservations = await prisma.reservation.count({
      where: {
        status: "pending",
      },
    });
    const totalConfirmedGuests = await prisma.reservation.aggregate({
      _sum: {
        guests: true,
      },
      where: {
        status: "confirmed",
      },
    });

    return Response.json(
      {
        success: true,
        data: {
          totalReservations,
          totalPendingReservations,
          totalConfirmedGuests: totalConfirmedGuests._sum.guests || 0,
        },
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
