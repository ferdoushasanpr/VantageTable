"use server";

export const reservationInputHandler = async (formData: FormData) => {
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
  console.log("Reservation successful:", {
    name: name.trim(),
    phone: phone.trim(),
    date: new Date(date),
    time: time.trim(),
    guests: Number(guestsRaw),
  });
};
