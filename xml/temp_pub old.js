var json2xml = require('json2xml');
const xml2js = require('xml2js');
var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://localhost:8080')
var topic = 'temperature_sensor'

//var msg = '<root><element><bn>urn:dev:ow:id57389217:</bn><n>voltage</n><u>V</u><v>5.3</v></element><element><u>Cel</u><v>21.8</v></element><element><u>%RH</u><v>38.0</v></element></root>'
//var jsn = '[{"bn":"urn:dev:ow:id57389217:","n":"voltage","u":"V","v":5.3},  {"u":"Cel","v":21.8} , {"u":"%RH","v":38.0}]'
var xml = '<sensml xmlns="urn:ietf:params:xml:ns:senml"><senml bn="urn:dev:ow:id57389217:" bt="1.276020076001e+09" bu="A" bver="5" n="voltage" u="V" v="5.3"></senml><senml u="Cel" t="1" v="21.8"></senml><senml u="%RH" t="1" v="38.0"></senml></sensml>'
   
client.on('connect', () => {
    setInterval(() => 
    {
        //var message = JSON.parse(jsn)
        //var xml = xml2js(x)
    
        xml2js.parseString(xml, (err, result) => {
            if(err) {
            throw err;
            } // `result` is a JavaScript object. convert it to a JSON string
            //const json = JSON.stringify(result, null, 4);
            //console.log(json);
            console.log(result)
            client.publish(topic, msg)
            });
        /*
        var jsn = JSON.parse(msg)
        client.publish(topic, msg)
        console.log('message sent')
        */
    }, 5000)
})


