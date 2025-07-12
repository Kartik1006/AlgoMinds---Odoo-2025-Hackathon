const express = require('express');
const http = require('http');
const { Server } = require("socket.io");
const connectDB = require('./config/db');
const cors = require('cors');
require('dotenv').config();

const app = express();
const server = http.createServer(app);

// --- Socket.IO Integration ---
const io = new Server(server, {
  cors: {
    origin: "*", // Be more specific in production! e.g., "http://localhost:3000"
    methods: ["GET", "POST"]
  }
});

// Middleware for socket to be accessible in controllers
app.use((req, res, next) => {
  req.io = io;
  next();
});

// Real-time connection logic
io.on('connection', (socket) => {
  console.log('a user connected:', socket.id);
  
  // Join a room based on user ID to send private notifications
  socket.on('join_user_room', (userId) => {
      socket.join(userId);
      console.log(`User ${socket.id} joined room ${userId}`);
  });
  
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

// We need to export 'io' to use in controllers
// This is a simple way to do it.
let socketIOInstance;
module.exports.init = function() {
    socketIOInstance = io;
    return io;
};
module.exports.getIO = function() {
    if (!socketIOInstance) {
        throw new Error("Socket.io not initialized!");
    }
    return socketIOInstance;
}
// ------------------------------

// Connect Database
connectDB();

// Init Middleware
app.use(cors());
app.use(express.json({ extended: false }));

// Define Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/questions', require('./routes/questionRoutes'));
// Add other routes here (e.g., users, admin)

app.get('/', (req, res) => res.send('API Running'));

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// Initialize socket.io after server starts
module.exports.init(server);