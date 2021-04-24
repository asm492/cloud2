const { v4: uuidv4 } = require('uuid');
var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://localhost:8080')
var topic = 'temperature_sensor'

//var message = String(temp)
//u = unit
//v = value
var msg = '[{"bn":"urn:dev:ow:id57389217:","n":"voltage","u":"V","v":5.3},  {"u":"Cel","v":21.8} , {"u":"%RH","v":38.0}]'

client.on('connect', () => {
    setInterval(() => 
    {
        var jsn = JSON.parse(msg)
        client.publish(topic, msg)
        console.log('message sent')
    }, 5000)
})