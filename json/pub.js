const { v4: uuidv4 } = require('uuid');
var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://localhost:8080')
var topic = 'temperature_sensor'

var temp = '[{"bn":"urn:dev:ow:id57389217:","n":"voltage","u":"V","v":5.3},  {"u":"Cel","v":21.8}]'
var humid = '[{"bn":"urn:dev:ow:id57389217:","n":"voltage","u":"V","v":5.3}, {"u":"%RH","v":38.0}]'


var jsn = JSON.parse(temp)
var message = JSON.stringify(jsn, null, 4)
client.on('connect', () => {
    setInterval(() => 
    {
        console.log(message)
        client.publish('temperature', message)
 
    }, 5000)
})


var jsn2 = JSON.parse(humid)
var message2 = JSON.stringify(jsn2, null, 4)
client.on('connect', () => {
    setInterval(() => 
    {
        console.log(message2)
        client.publish('humidity', message2)
 
    }, 5000)
})
