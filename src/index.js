const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);

io.on("connection", function(socket) {
  socket.on("new-message", function(data) {
    console.log({ socketId: socket.id })
    io.emit("new-remote-message", data);
  });
});

// sending to individual socketid
// socket.broadcast.to(socketid).emit('message', 'for your eyes only');

http.listen(4000, function() {
  console.log("listening on *:4000");
});