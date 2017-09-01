const path = require('path');
const express = require('express');
const PORT = process.env.PORT || 8900;
const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);

io.on('connection', socket => {

  const posts = [
    {
      title: 'Post #1',
      content: 'Bojack Horseman'
    }
    ,{
      title: 'Post #2',
      content: 'Mr Peanutbutter'
    }
  ]

  socket.emit('wall:update', posts)
  let c = 3
  const intervalId = setInterval(() => {

    posts.push({
      title: `Post #${c}`,
      content: 'Yeah'
    })

    if (c === 6) {
      clearInterval(intervalId)
    }

    socket.emit('wall:update', posts)

    c++
  }, 3000)

  socket.on('wall:publish', post => {});

  socket.on('disconnect', () => {})
})

server.listen(PORT, error => {
  error
  ? console.error(error)
  : console.info(`Listening on port ${PORT}.`)
});
