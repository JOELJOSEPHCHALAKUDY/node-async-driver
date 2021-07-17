# Nodejs App to emulate a IoT driver


The main purpose of this project is to emulate asynchronous serial communication of a driver with IoT device.

[Link to the Device version of APP](https://github.com/JOELJOSEPHCHALAKUDY/node-async-device)

- Development time taken project

```

1.5 hour for brainstorming
3.5 hours for Developement
```


## Pre-reqs

To build and run this app locally you will need a few things:
- Install [Node.js](https://nodejs.org/en/)
- Install [VS Code](https://code.visualstudio.com/)
- MQTT Broker [Mosquitto](https://test.mosquitto.org/)

## Getting started

- Clone the repository

```
git clone --depth=1 https://github.com/JOELJOSEPHCHALAKUDY/node-async-driver.git
```
- Install dependencies
```
cd <project_name>
npm install
```
- Configure your env file

```
# create a .env file in the root folder and copy the content below
 intMQUsername=''

 intMQPassword=''

 intMQClientId=''

 intMQHost='mqtt://test.mosquitto.org'

 intMQPort=1883

```

- Cretate SymLink
```
npm link
```
- Run the project
```
npm start
```

- CLI Help Text
```
Usage: driver-cli [global options] command

Options:
  -v, --vers           output the current version
  -h, --help           display help for command

Commands:
  send|s <param_name>  Read a paramter value
  restart|rs           Restart device
  error|e              Read latest error code
  help [command]       display help for command


Function                       Alias        Description

version                        -v           To check the version of the driver-cli
driver-cli send <param_name>   s            To read current value  for a parameter from 
                                            device  eg : weight-value , temperature , battery-level
driver-cli restart             rs           To initate device retart
driver-cli error               e            To get latest error code
```

> **Note!** Please note that i have only implemented the first command for this demo

- Test driver-cli

```
driver-cli s battery-level
```

- Test driver-cli

```
driver-cli s temperature
```

- Test Response

```
Read for param:  temperature initated to device
Sending: temperature
Driver esatblished connection at : Sat Jul 17 2021 14:01:12 GMT+0530 (India Standard Time)
Sending Command ...
Received response from device as ASCII:   123 34 114 101 115 112 111 110 115 101 34 58 34 50 56 176 67 34 125
Received response from device as string:  {"response":"28°C"}
```

Finally,

## Deploying the app

There are many ways to deploy an Node app, and in general, nothing about the deployment process changes here 

## What's for future

- handling multiple deivces based on some device identiy
- using Production Ready Brokers like VerneMQ instead of Mosquitto
- adding more user friendly cli 
- possibly a web version of the cli that can be accessed from anywhere
