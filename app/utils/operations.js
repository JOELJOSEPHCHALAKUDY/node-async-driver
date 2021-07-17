const mqttService = require(__base + "app/service/mqtt");


module.exports = {

    readParameter: async (param_name) => {
        console.log(`Read for param:  ${param_name} initated to device`);

        // subscribe to response topic 
        await mqttService.subscribe('labforward/device-commands/res/#', function (err) {
            if (err) {
                console.log(err);
            } else {
                console.log('Sending Command ...')
            }
        });

        //publish read request to device
        await mqttService.publish(`labforward/device-commands/req`, `{"param_name":"${param_name}","request_type":"command"}`, function (err) {
            if (err) {
                console.log(err);
            } else {
                console.log(`Sending: ${param_name}`)
            }
        });

        try {
            
            //listen to incoming msg from device
            await mqttService.on('message', function (topic, message,packet) {
                if (topic == `labforward/device-commands/res`) {
                    let string_message = message.toString();
                    let ascii_payload = '';
                    for (var i = 0; i < string_message.length; i++) {
                        ascii_payload += ` ${string_message.charCodeAt(i)}`;
                    }
                    console.info('Received response from device as ASCII: ', ascii_payload);
                    console.info('Received response from device as string: ', string_message);
                    
                    // call to process.exit() to reslove commander issue
                    process.exit()

                }
            });

        } catch (error) {
            console.info('Could not access device data: ', error);
        }


    },

    restartDevice: async () => {
        console.log('restart initated')
    },

    restartDevice: async () => {
        console.log('Read Error code')
    },


}
