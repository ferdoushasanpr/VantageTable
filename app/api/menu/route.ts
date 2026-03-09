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
