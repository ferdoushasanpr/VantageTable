import { prisma } from "@/lib/prisma";

export const DELETE = async (
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) => {
  try {
    const { id } = await params;

    if (!id) {
      return Response.json({ error: "Missing required id" }, { status: 400 });
    }

    const parsedId = parseInt(id);

    if (isNaN(parsedId)) {
      return Response.json({ error: "Invalid id format" }, { status: 400 });
    }

    await prisma.reservation.delete({
      where: { id: parsedId },
    });

    return Response.json(
      {
        success: true,
        message: "Successfully deleted reservation",
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Reservation Error:", error);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
};
