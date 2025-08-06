# 💬 Real-Time Chat Application

A full-stack real-time chat app built with **Node.js**, **Express**, **Socket.IO**, and **MongoDB**, featuring modern UI, JWT authentication, and 1-to-1 messaging.

## 🚀 Features

- 🧑‍💻 User Registration & Login (JWT-based)
- 📩 Real-time messaging using Socket.IO
- 🔐 Secure authentication and session handling
- 💬 Chat messages stored in MongoDB
- 🎯 One-to-one private chat support
- 🧭 Modern, responsive, and aesthetic UI
- 👀 User join/leave notifications
- 🗑️ Clear chat & logout options

---

## 🛠️ Tech Stack

| Tech       | Usage                           |
|------------|----------------------------------|
| Node.js    | Backend runtime                 |
| Express.js | Web framework                   |
| Socket.IO  | Real-time communication         |
| MongoDB    | Database for user & message data|
| JWT        | Authentication                  |
| HTML/CSS   | Frontend UI                     |
| JavaScript | Client-side interactivity       |

---

## 📂 Project Structure

chat-app/
│
├── public/ # Static frontend files
│ ├── css/ # Styles
│ ├── js/ # Frontend logic
│ └── login.html # Login page
│ └── register.html # Registration page
│ └── chat.html # Main chat UI
│
├── controllers/ # Route controllers
├── models/ # MongoDB Mongoose schemas
├── routes/ # Express route definitions
├── middleware/ # Auth middleware
│
├── server.js # Entry point
├── config.js # DB & JWT config
├── .env # Environment variables
└── package.json # NPM dependencies


---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/rohanhalaj18/Chat-Application.git
cd chat-app

2. Install Dependencies
npm install

3. Create .env File
Create a .env file in the root directory and add:
env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000

4. Run the App
npm start
Visit: http://localhost:5000


🤝 Contributing
Feel free to open issues or submit pull requests!

📜 License
This project is licensed under the MIT License.

📬 Connect With Me
LinkedIn: www.linkedin.com/in/rohan-halaj

GitHub: @rohanhalaj17
