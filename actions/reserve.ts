"use server";

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

  const response = await fetch(`${process.env.APP_URL}/api/reservation`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name.trim(),
      phone: phone.trim(),
      date: new Date(date),
      time: time.trim(),
      guests: Number(guestsRaw),
    }),
  });

  const data = await response.json();

  if (!data.success) {
    return { error: data.message };
  }

  redirect("/bookings");
};

export const getAllReservations = async () => {
  const data = await fetch(`${process.env.APP_URL}/api/reservation`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const reservations = await data.json();

  return reservations;
};

export const getLatestReservations = async () => {
  const data = await fetch(`${process.env.APP_URL}/api/reservation/latest`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const reservations = await data.json();

  return reservations;
};

export const getCountReservations = async () => {
  const data = await fetch(`${process.env.APP_URL}/api/reservation/count`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const reservations = await data.json();

  return reservations;
};

export const updateReservationStatus = async (id: number, status: string) => {
  const response = await fetch(`${process.env.APP_URL}/api/reservation`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id, status }),
  });

  if (!response.ok) {
    throw new Error("Failed to update reservation status");
  }

  const data = await response.json();
  revalidatePath("/reservations");

  return data;
};

export const deleteReservation = async (id: number) => {
  const response = await fetch(`${process.env.APP_URL}/api/reservation/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to delete reservation");
  }

  const data = await response.json();

  return data;
};
