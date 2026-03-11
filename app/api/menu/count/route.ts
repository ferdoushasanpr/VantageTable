import { prisma } from "@/lib/prisma";

export const GET = async () => {
  try {
    const totalFoods = await prisma.food.count();

    return Response.json(
      {
        success: true,
        data: {
          totalFoods,
        },
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Food Error:", error);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
