const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path'); // Require path module

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

let gameData = {
  timer: 1.0,
  isGameRunning: true,
  crashPoint: null,
  countdown: 16
};

io.on('connection', (socket) => {
  console.log('New client connected');

  // Emit current game data to new clients
  socket.emit('gameUpdate', gameData);

  socket.on('gameStart', (data) => {
    gameData = { ...data };
    io.emit('gameUpdate', gameData);
  });

  socket.on('gameEnd', (data) => {
    gameData = { ...data };
    io.emit('gameUpdate', gameData);
  });

  socket.on('countdownUpdate', (countdown) => {
    gameData.countdown = countdown;
    io.emit('countdownUpdate', countdown);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

app.use(express.static(path.join(__dirname, "/frontend/build")));
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "/frontend/build/index.html"))
);

server.listen(4000, () => {
  console.log('Server is running on port 4000');
});
