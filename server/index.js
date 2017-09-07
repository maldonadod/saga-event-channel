const path = require('path');
const express = require('express');
const PORT = process.env.PORT || 8900;
const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const messages = []

io.on('connection', socket => {

  socket.emit('pull:message', messages)

  socket.on('push:message', incoming => {

    const {user,message} = incoming

    messages.unshift(incoming)

    io.sockets.emit('pull:message', messages)
  })

  socket.on('disconnect', () => {})
})

server.listen(PORT, error => {
  error
  ? console.error(error)
  : console.info(`Listening on port ${PORT}.`)
});
