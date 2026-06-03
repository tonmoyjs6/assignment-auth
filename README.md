# 🍱 FoodHub - Meal Ordering Platform

FoodHub is a full-stack meal ordering platform that connects customers with food providers. Customers can browse meals, place orders, track delivery status, and leave reviews. Providers can manage menus and fulfill orders, while administrators oversee the entire platform.

---

## 🚀 Live Features

### 🌍 Public Features

* Browse all available meals
* Search and filter meals
* View meal details
* View provider profiles and menus
* Register and login

### 👤 Customer Features

* User registration & authentication
* Add meals to cart
* Place orders
* Track order status
* View order history
* Manage profile
* Leave reviews after purchase

### 🍳 Provider Features

* Provider registration
* Create and manage menu items
* View incoming orders
* Update order status
* Manage provider profile

### 🛡️ Admin Features

* View all users
* Manage user status
* View all orders
* Manage categories
* Platform monitoring

---

# 🏗️ Tech Stack

## Backend

* Node.js
* Express.js
* TypeScript

## Database

* MongoDB
* Mongoose

## Authentication

* JWT (JSON Web Token)
* bcrypt

## Validation

* Zod

## Development Tools

* ESLint
* Prettier
* ts-node-dev

---

# 📂 Project Structure

```bash
src
│
├── app
│   ├── modules
│   │   ├── auth
│   │   ├── user
│   │   ├── provider
│   │   ├── meal
│   │   ├── cart
│   │   ├── order
│   │   ├── review
│   │   └── category
│   │
│   ├── middleware
│   ├── routes
│   ├── utils
│   └── config
│
├── app.ts
└── server.ts
```

---

# 👥 User Roles

## Customer

Can:

* Browse meals
* Add items to cart
* Place orders
* View orders
* Leave reviews

## Provider

Can:

* Manage menu items
* View assigned orders
* Update order status

## Admin

Can:

* Manage users
* Manage categories
* View all orders
* Moderate platform content

---

# 🔄 Order Status Flow

```text
PLACED
   │
   ▼
PREPARING
   │
   ▼
READY
   │
   ▼
DELIVERED
```

Additional Status:

```text
CANCELLED
```

---

# 🗄️ Database Schema

## Users

```js
{
  name,
  email,
  password,
  phone,
  role,
  status,
  profileImage
}
```

## ProviderProfiles

```js
{
  user,
  restaurantName,
  address,
  description,
  logo
}
```

## Categories

```js
{
  name,
  description
}
```

## Meals

```js
{
  provider,
  category,
  title,
  description,
  image,
  price,
  stock,
  dietaryType
}
```

## Orders

```js
{
  customer,
  provider,
  items,
  totalPrice,
  deliveryAddress,
  status,
  paymentMethod
}
```

## Reviews

```js
{
  customer,
  meal,
  rating,
  comment
}
```

---

# 📄 API Documentation

## 🔐 Authentication

### Register

```http
POST /api/auth/register
```

Body:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "123456",
  "phone": "01700000000",
  "role": "customer"
}
```

### Login

```http
POST /api/auth/login
```

Body:

```json
{
  "email": "john@example.com",
  "password": "123456"
}
```

### Current User

```http
GET /api/auth/me
```

---

# 🍽️ Meals

### Get All Meals

```http
GET /api/meals
```

Query Parameters:

```text
search=
category=
minPrice=
maxPrice=
page=
limit=
sort=
```

### Get Single Meal

```http
GET /api/meals/:id
```

---

# 🏪 Providers

### Get All Providers

```http
GET /api/providers
```

### Get Provider Details

```http
GET /api/providers/:id
```

---

# 🛒 Cart

### Add Item

```http
POST /api/cart
```

### Get Cart

```http
GET /api/cart
```

### Remove Item

```http
DELETE /api/cart/:id
```

### Update Quantity

```http
PATCH /api/cart/:id
```

---

# 📦 Orders

### Create Order

```http
POST /api/orders
```

### My Orders

```http
GET /api/orders
```

### Order Details

```http
GET /api/orders/:id
```

### Cancel Order

```http
PATCH /api/orders/:id/cancel
```

---

# 🍳 Provider APIs

### Add Meal

```http
POST /api/provider/meals
```

### Update Meal

```http
PUT /api/provider/meals/:id
```

### Delete Meal

```http
DELETE /api/provider/meals/:id
```

### Provider Orders

```http
GET /api/provider/orders
```

### Update Order Status

```http
PATCH /api/provider/orders/:id
```

Request Body:

```json
{
  "status": "PREPARING"
}
```

---

# ⭐ Reviews

### Create Review

```http
POST /api/reviews
```

### Meal Reviews

```http
GET /api/reviews/meal/:mealId
```

---

# 🛡️ Admin APIs

### Get All Users

```http
GET /api/admin/users
```

### Update User Status

```http
PATCH /api/admin/users/:id
```

```json
{
  "status": "ACTIVE"
}
```

### Get All Orders

```http
GET /api/admin/orders
```

### Categories Management

```http
GET    /api/admin/categories
POST   /api/admin/categories
PATCH  /api/admin/categories/:id
DELETE /api/admin/categories/:id
```

---

# 🎨 Frontend Pages

## Public Pages

| Route          | Page             |
| -------------- | ---------------- |
| /              | Home             |
| /meals         | Meals            |
| /meals/:id     | Meal Details     |
| /providers     | Providers        |
| /providers/:id | Provider Details |
| /login         | Login            |
| /register      | Register         |

---

## Customer Pages

| Route       | Page          |
| ----------- | ------------- |
| /cart       | Cart          |
| /checkout   | Checkout      |
| /orders     | My Orders     |
| /orders/:id | Order Details |
| /profile    | Profile       |

---

## Provider Pages

| Route               | Page         |
| ------------------- | ------------ |
| /provider/dashboard | Dashboard    |
| /provider/menu      | Manage Meals |
| /provider/orders    | Orders       |
| /provider/profile   | Profile      |

---

## Admin Pages

| Route             | Page       |
| ----------------- | ---------- |
| /admin            | Dashboard  |
| /admin/users      | Users      |
| /admin/orders     | Orders     |
| /admin/categories | Categories |

---

# 🔒 Environment Variables

```env
PORT=5000

DATABASE_URL=

JWT_ACCESS_SECRET=
JWT_ACCESS_EXPIRES_IN=

BCRYPT_SALT_ROUNDS=10
```

---

# ⚙️ Installation

```bash
git clone <repository-url>

cd foodhub-backend

npm install
```

Create a `.env` file and configure environment variables.

Run development server:

```bash
npm run dev
```

Build project:

```bash
npm run build
```

Start production server:

```bash
npm start
```

---

# 📌 Future Improvements

* Online Payment Integration (Stripe/SSLCommerz)
* Real-time Order Tracking
* Notifications
* Coupon System
* Wishlist
* Analytics Dashboard
* Email Verification
* Forgot Password

---



---

# 📜 License

This project is licensed under the MIT License.
