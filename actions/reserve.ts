"use server";

import { ReservationStatus } from "@/app/generated/prisma/client";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

type ReservationFormState = {
  error?: string;
};

export const reservationInputHandler = async (
  prevState: ReservationFormState,
  formData: FormData,
) => {
  const name = formData.get("name") as string | null;
  const phone = formData.get("phone") as string | null;
  const date = formData.get("date") as string | null;
  const time = formData.get("time") as string | null;
  const guestsRaw = formData.get("guests") as string | null;

  // Validation
  if (!name || name.trim().length < 2) {
    throw new Error("Name is required and must be at least 2 characters.");
  }

  if (!phone || !/^\+?\d{7,15}$/.test(phone)) {
    throw new Error("Phone is required and must be a valid number.");
  }

  if (!date || isNaN(Date.parse(date))) {
    throw new Error("Date is required and must be a valid date.");
  }

  if (!time || !/^\d{2}:\d{2}$/.test(time)) {
    throw new Error("Time is required and must be in HH:MM format.");
  }

  if (!guestsRaw || isNaN(Number(guestsRaw)) || Number(guestsRaw) < 1) {
    throw new Error("Guests is required and must be a number greater than 0.");
  }

  // Check existing reservation
  const existingReservation = await prisma.reservation.findFirst({
    where: {
      date: new Date(date),
      time: time.trim(),
    },
  });

  if (existingReservation) {
    return {
      error: "Reservation already exists for this time and date",
    };
  }

  // Create reservation
  await prisma.reservation.create({
    data: {
      name: name.trim(),
      phone: phone.trim(),
      date: new Date(date),
      time: time.trim(),
      guests: Number(guestsRaw),
    },
  });

  revalidatePath("/reservations");
  revalidatePath("/bookings");

  redirect("/bookings");
};

export const getAllReservations = async () => {
  const reservations = await prisma.reservation.findMany();

  return reservations;
};

export const getLatestReservations = async () => {
  const reservations = await prisma.reservation.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: 6,
  });

  return reservations;
};

export const getCountReservations = async () => {
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

  return {
    totalReservations,
    totalPendingReservations,
    totalConfirmedGuests: totalConfirmedGuests._sum.guests || 0,
  };
};

export const updateReservationStatus = async (
  id: number,
  status: ReservationStatus,
) => {
  if (!id || !status) {
    throw new Error("Missing required fields");
  }

  const reservation = await prisma.reservation.update({
    where: { id },
    data: { status },
  });

  revalidatePath("/reservations");

  return reservation;
};

export const deleteReservation = async (id: number) => {
  if (!id) {
    throw new Error("Reservation id is required");
  }

  await prisma.reservation.delete({
    where: { id },
  });

  revalidatePath("/reservations");

  return {
    success: true,
    message: "Successfully deleted reservation",
  };
};
