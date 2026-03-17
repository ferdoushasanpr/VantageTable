import { prisma } from "@/lib/prisma";

export const GET = async (req: Request) => {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return Response.json({ error: "Missing required id" }, { status: 400 });
    }

    const parsedId = parseInt(id);

    if (isNaN(parsedId)) {
      return Response.json({ error: "Invalid id format" }, { status: 400 });
    }

    const food = await prisma.food.findFirst({
      where: { id: parsedId },
    });

    return Response.json(
      {
        success: true,
        message: "Successfully fetched food item",
        data: food,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Menu Error:", error);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
};
