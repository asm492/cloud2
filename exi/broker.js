var mosca = require('mosca');
var settings = { port: 8080 }
const EXI4JSON = require('exificient.js')

var broker = new mosca.Server(settings)
var mongc = require('mongodb').MongoClient
var url = "mongodb+srv://cloudassignment2:4hw1LmvFdP32xN4R@cluster0.yqxoa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"


broker.on('ready', () => {
    console.log('Broker is ready!')
})
broker.on('published', (packet) => {
    var j = EXI4JSON.parse(packet.payload)
    message = j.toString()
    console.log(message)
    mongc.connect(url, (error, client) => {
        var myCol = client.db('assignment2').collection('topics') 
        myCol.insertOne({
            message: message
        }, () => {
            console.log(message)
            console.log('Data is saved to MongoDB')
            client.close()
        })
    })
})