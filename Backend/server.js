const http = require("http");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const path = require('path');
const socketSetup = require("./socket");
const Message = require("./models/Message");

dotenv.config();
const app = express();
const server = http.createServer(app);
socketSetup(server);

//middleware
app.use(cors());
app.use(cors({ origin: "*" }));

app.use(express.json());
app.use("/api/auth", authRoutes);
app.use(express.static(path.join(__dirname,"../public")))
//Database
connectDB();

//Routes
app.get("/", (req, res) => {
  res.send("Chat App API is working ..");
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
