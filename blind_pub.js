
const { v4: uuidv4 } = require('uuid');
var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://localhost:8080')
var topic = 'blind_position'
var temp = parseInt(Math.random() * (1 - 30 ) + 30)
//var message = String(temp)
var sensorId = "blind_1"

client.on('connect',()=>{
setInterval(()=>{
    var message = "{'sensorId':sensorId, 'blind_position':String(parseInt(Math.random() * (0 - 100 ) + 100))}"
client.publish(topic, message)
console.log('message sent', message)
},5000)
})