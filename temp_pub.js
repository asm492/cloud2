const { v4: uuidv4 } = require('uuid');
var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://localhost:8080')
var topic = 'temperature'
var temp = parseInt(Math.random() * (1 - 30 ) + 30)
//var message = String(temp)

client.on('connect',()=>{
setInterval(()=>{
client.publish('temperature', String(parseInt(Math.random() * (1 - 30 ) + 30)))
console.log('message sent')
},5000)
})