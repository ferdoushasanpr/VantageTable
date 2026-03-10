import { prisma } from "@/lib/prisma";

export const GET = async (
  req: Request,
  { params }: { params: Promise<{ slug: string }> },
) => {
  const { slug } = await params;
  try {
    const result = await prisma.food.findFirst({ where: { slug: slug } });

    if (!result) {
      return Response.json(
        {
          success: false,
          message: "Menu not found",
          data: null,
        },
        { status: 404 },
      );
    }

    return Response.json(
      {
        success: true,
        message: "Successfully Fetched Menu",
        data: result,
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
