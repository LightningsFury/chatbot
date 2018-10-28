var express = require('express');
var app = express();
const http = require('http');
const serv = http.Server(app)
const io = require('socket.io')(serv, {});
setInterval(() => {
    http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(request, response) {
  console.log(`Pinged ${Date()}`)
  response.sendFile(__dirname + '/views/index.html');
});
app.use('/', express.static(__dirname + '/views'));

// listen for requests :)
let locx, locy
io.on('connection', async function(socket){
console.log(socket)
  socket.on('question', async function(data) {
    bot.create(async function(err, session) {
      socket.emit('processing', {})
            await bot.ask(data.q, function(err, response) {
              console.log('done')
                socket.emit('res', {res: response});
            });
  })
  
  })

})

var cleverbot = require("cleverbot.io"),
    bot = new cleverbot('qhY7iqEzBTmn0qyX', '5X0scD1ubqNjO54j04YJUuhWfK6M5LSi');
bot.setNick('python');

serv.listen(3000, function(){
  console.log('listening on *:3000');
});