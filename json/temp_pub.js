const { v4: uuidv4 } = require('uuid');
var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://localhost:8080')
var topic = 'temperature_sensor'

var msg = '[{"bn":"urn:dev:ow:id57389217:","n":"voltage","u":"V","v":5.3},  {"u":"Cel","v":21.8} , {"u":"%RH","v":38.0}]'
var jsn = JSON.parse(msg)
var message = JSON.stringify(jsn, null, 4)
client.on('connect', () => {
    setInterval(() => 
    {
        console.log(message)
        client.publish(topic, message)
 
    }, 5000)
})