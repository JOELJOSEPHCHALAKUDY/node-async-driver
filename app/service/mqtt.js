const mqtt = require('mqtt');
const  { mqttService } = require(__base + 'app/config/index');

const options = {
  username: mqttService.mqttUsername,
  password: mqttService.mqttPassword,
  port: mqttService.mqttPort,
  clientId: 'mqttjs_' + Math.random().toString(16).substr(2, 8),
  protocolId: 'MQTT',
  protocolVersion: 4,
  keepalive: 60,
  reschedulePings: true,
  reconnectPeriod: 1000,
  connectTimeout: 30 * 1000,
  queueQoSZero: true,
};

const mqttClient = mqtt.connect(mqttService.mqttHostUrl, options);

mqttClient.on('connect', function () {
   console.log(`Driver esatblished connection at : ${new Date(Date.now())}`);
});


mqttClient.on('error', function(error){
  console.log(error)
  //client.end()
});


module.exports = mqttClient;
