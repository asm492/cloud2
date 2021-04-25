var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://localhost:8080')
var topic = 'humidity'
const xml2js = require('xml2js');

client.on('message', (topic, message) => {
    var parsed = JSON.parse(message)
    const jsn = JSON.stringify(parsed, null, 4);
    console.log(jsn); 
})

client.on('connect', () => {
    client.subscribe(topic)
})