const socketIO = require("socket.io");
const jwt = require("jsonwebtoken");
const User = require("./models/User");

const socketSetup = (server) => {
  const io = socketIO(server, {
    cors: {
      origin: "*",
    },
  });

  io.use(async (socket, next) => {
    const token = socket.handshake.auth.token;
    if (!token) return next(new Error("No token"));

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findById(decoded.id).select("username");
      if (!user) return next(new Error("User not found"));

      socket.user = user;
      next();
    } catch (err) {
      next(new Error("Invalid token"));
    }
  });

  io.on("connection", (socket) => {
    console.log(`✅ ${socket.user.username} connected`);

    socket.on("chatMessage", (data) => {
      io.emit("chatMessage", {
        username: socket.user.username,
        message: data.message,
      });
    });

    socket.on("disconnect", () => {
      console.log(`❌ ${socket.user.username} disconnected`);
    });
  });
};

module.exports = socketSetup;
