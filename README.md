# 🍽️ Gourmet Haven

**Gourmet Haven** is a full-stack restaurant management and food ordering platform built with **Next.js** designed to deliver a seamless experience for both customers and administrators. The project combines web development and AI by integrating a chatbot trained with LangChain using restaurant data from the database.

Users can explore delicious dishes, filter menu items, reserve tables, and interact with an AI-powered chatbot for instant assistance, while admins can manage reservations and food items efficiently through a secure dashboard.

---

## 🚀 Tech Stack

- **Frontend & Backend:** Next.js

- **Styling:** Tailwind CSS

- **ORM:** Prisma ORM

- **Database:** PostgreSQL

- **Authentication:** Custom Admin Login (JWT / Session-based)

---

## 👥 User Features

- 🍲 Latest food highlights

- 📋 Filterable food menu

- 📅 “Reserve Now” table reservation form

- Complete list of available food items

---

## 🔐 Admin Features

- View all restaurant reservations

- Update reservation status

- Delete reservations

- Add new food items

- Update existing food

- Delete food

- View complete food list

---

## 🤖 AI Chatbot

- Answers questions about: Meals available on the menu, Ingredients or descriptions of dishes, Pricing information, Reservation availability

---

## Screenshots

<img width="100%" height="100%" alt="localhost_3000_" src="https://github.com/user-attachments/assets/4f2e1879-e3ee-4197-8d0f-5a64895e81f0" />
<img width="100%" height="100%" alt="localhost_3000_menu" src="https://github.com/user-attachments/assets/bfd8525c-a2a4-45b8-bcec-829b3262a891" />
<img width="100%" height="100%" alt="localhost_3000_menu (1)" src="https://github.com/user-attachments/assets/ea3e2bd9-3647-4219-a4c3-102d3abf9f46" />
<img width="100%" height="100%" alt="localhost_3000_bookings" src="https://github.com/user-attachments/assets/259c80a8-ce2b-4677-9a94-142bc624fdf9" />
<img width="100%" height="100%" alt="localhost_3000_bookings (1)" src="https://github.com/user-attachments/assets/bce1df2e-8360-44f5-8e24-75f072a5791b" />
<img width="100%" height="100%" alt="localhost_3000_dashboard" src="https://github.com/user-attachments/assets/446104fd-7b3b-4a52-a803-f62fda804cc4" />
<img width="100%" height="100%" alt="localhost_3000_dashboard (1)" src="https://github.com/user-attachments/assets/cadc3a35-16e3-4994-9e28-a5bb730ad33d" />
<img width="100%" height="100%" alt="localhost_3000_dashboard (2)" src="https://github.com/user-attachments/assets/999aefd0-c737-4a27-a109-c1cacc6444b5" />
<img width="100%" height="100%" alt="localhost_3000_dashboard (3)" src="https://github.com/user-attachments/assets/128d2b82-50b5-46e9-90c1-244592d3d9d6" />

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/ferdoushasanpr/VantageTable.git
cd VantageTable
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Setup Environment Variables

Create a `.env` file in the root directory:

```env
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"
NEXTAUTH_SECRET="your_secret_key"
```

### 4️⃣ Setup Prisma

```bash
npx prisma migrate dev
npx prisma generate
```

### 5️⃣ Run the Development Server

```bash
npm run dev
```

App will be running at:

```
http://localhost:3000
```

---

## 🧱 Database Schema (High-Level)

- **User/Admin**

- **Food**

- **Reservation**

Managed using **Prisma ORM** with **PostgreSQL**.

---

## 🤝 Contributing

Contributions are welcome!
Feel free to fork the repo and submit a pull request.

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

Developed with ❤️ by Ferdous Hasan

---
