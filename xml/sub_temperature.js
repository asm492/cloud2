var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://localhost:8080')
var topic = 'temperature'
const xml2js = require('xml2js');

client.on('message', (topic, message) => {
    const xml = message.toString()
    xml2js.parseString(xml, (err, result) => {
        if (err) {
            throw err;
        } // `result` is a JavaScript object. convert it to a JSON string
        const json = JSON.stringify(result, null, 4);
        console.log(json);
    });
    /*
        var parsed = JSON.parse(message)
        const jsn = JSON.stringify(parsed, null, 4);
        console.log(jsn); 
    */
})

client.on('connect', () => {
    client.subscribe(topic)
})