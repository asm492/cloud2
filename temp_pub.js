const { v4: uuidv4 } = require('uuid');
var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://localhost:8080')
var temp = 'temperature'
var humid = 'humidity'
//var message = String(temp)

var msg = '{"temperature" : "20",  "battery" : "98"}'

client.on('connect', () => {
    setInterval(() => {
        //Temperature
        client.publish(temp, msg)
        //client.publish(humid, String(parseInt(Math.random() * (1 - 100) + 100)))
        console.log('message sent')
    }, 5000)
})