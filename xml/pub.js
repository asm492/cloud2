var json2xml = require('json2xml');
const xml2js = require('xml2js');
var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://localhost:8080')
var topic = 'temperature_sensor'

var temp = '{"sensml": {"xmlns": "urn:ietf:params:xml:ns:senml","senml": [{"bn": "urn:dev:ow:id57389217:","bt": "1.276020076001e+09","bu": "A","bver": "5","n": "voltage","u": "V","v": "5.3"},{"u": "Cel","t": "1","v": "21.8"}]}}'
var humid ='{"sensml": {"xmlns": "urn:ietf:params:xml:ns:senml","senml": [{"bn": "urn:dev:ow:id57389217:","bt": "1.276020076001e+09","bu": "A","bver": "5","n": "voltage","u": "V","v": "5.3"},{"u": "%RH","t": "1","v": "38.0"}]}}'

var jsonObj = JSON.parse(temp)
var msg = json2xml(jsonObj)
client.on('connect', () => {
    setInterval(() => 
    {
        console.log(msg)
        client.publish('temperature', msg) 
    }, 5000)
})

var jsonObj2 = JSON.parse(humid)
var msg2 = json2xml(jsonObj2)
client.on('connect', () => {
    setInterval(() => 
    {
        console.log(msg2)
        client.publish('humidity', msg2) 
    }, 5000)
})


/*
var json2xml = require('json2xml');
const xml2js = require('xml2js');
var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://localhost:8080')
var topic = 'temperature_sensor'

var data = '{"sensml": {"xmlns": "urn:ietf:params:xml:ns:senml","senml": [{"bn": "urn:dev:ow:id57389217:","bt": "1.276020076001e+09","bu": "A","bver": "5","n": "voltage","u": "V","v": "5.3"},{"u": "Cel","t": "1","v": "21.8"},{"u": "%RH","t": "1","v": "38.0"}]},"#omitxmldeclaration": "yes"}'
   
var jsonObj = JSON.parse(data)
var msg = json2xml(jsonObj)
client.on('connect', () => {
    setInterval(() => 
    {
        console.log(msg)
        client.publish(topic, msg) 
    }, 5000)
})
*/