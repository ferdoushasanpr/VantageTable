# 🍽️ Gourmet Haven

**Gourmet Haven** is a full-stack restaurant management and food ordering platform built with **Next.js** designed to deliver a seamless experience for both customers and administrators.

Users can explore delicious dishes, filter menu items, and reserve tables, while admins can manage reservations and food items efficiently through a secure dashboard.

---

## 🚀 Tech Stack

- **Frontend & Backend:** Next.js

- **Styling:** Tailwind CSS

- **ORM:** Prisma ORM

- **Database:** PostgreSQL

- **Authentication:** Custom Admin Login (JWT / Session-based)

---

## 👥 User Features

### 🏠 Home Page

- 🎞️ Hero section with dynamic photo carousel

- 🍲 Latest food highlights

- 📋 Filterable food menu

- 📅 “Reserve Now” table reservation form

### 📖 Menu Page

- Complete list of available food items

- Category-based filtering

- Responsive design for all devices

---

## 🔐 Admin Features

### 📊 Reservation Management

- View all restaurant reservations

- Update reservation status

- Delete reservations

### 🍕 Food Management

- Add new food items

- Update existing food

- Delete food

- View complete food list

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
