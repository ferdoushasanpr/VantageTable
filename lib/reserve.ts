"use server";

export const reservationInputHandler = async (formData: FormData) => {
  const name = formData.get("name");
  const phone = formData.get("phone");
  const date = formData.get("date");
  const time = formData.get("time");
  const guests = formData.get("guests");

  const data = { name, phone, date, time, guests };

  console.log(data);
};
