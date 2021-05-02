# Assignment 2 - Cloud technologies

### Scenario

We have chosen smart home as our scenario. Our smart home consist of a device which measures temperature and humidity. The device is battery powered and it reports the battery voltage to the broker as well.

### Payloads

We have separated the different payloads (EXI, JSON and XML) into different files. As an example we have created two different subscribers for JSON and XML, one for temperature and volt, and one for humidity and volt. The same device (publisher) publishes on two different topics.