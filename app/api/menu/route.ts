import { prisma } from "@/lib/prisma";

export const POST = async (req: Request) => {
  try {
    const { name, cat, price, desc, slug, image, status } = await req.json();

    if (!name || !cat || !price || !desc || !slug || !image || !status) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    const response = await prisma.food.create({
      data: {
        name,
        cat,
        price,
        desc,
        slug,
        image,
        status,
      },
    });

    return Response.json(
      {
        success: true,
        message: "Successfully Food Added.",
        data: response,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Menu Error:", error);

    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};

export const GET = async () => {
  try {
    const menus = await prisma.food.findMany();

    return Response.json(
      {
        success: true,
        message: "Successfully Fetched Menu",
        data: menus,
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

export const DELETE = async (req: Request) => {
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

    await prisma.food.delete({
      where: { id: parsedId },
    });

    return Response.json(
      {
        success: true,
        message: "Successfully deleted food item",
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Menu Error:", error);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
};
