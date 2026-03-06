import { prisma } from "@/lib/prisma";

export const POST = async (req: Request) => {
  try {
    const { name, phone, date, time, guests } = await req.json();

    if (!name || !phone || !date || !time || !guests) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    const reservation = await prisma.reservation.create({
      data: {
        name,
        phone,
        date,
        time,
        guests,
      },
    });

    return Response.json(
      {
        success: true,
        message: "Successfully sent reservation request",
        data: reservation,
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

export const GET = async () => {
  try {
    const data = await prisma.reservation.findMany();

    return Response.json(
      {
        success: true,
        message: "Successfully Fetched Reservations",
        data: data,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Reservation Error:", error);

    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
};
