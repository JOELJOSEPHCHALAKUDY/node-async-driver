#!/usr/bin/env node


global.__base = __dirname + '/';
global.uptime = Date.now(); 

// load enviornment if development mode
if (process.env.prod !== 'yes') {
    require('dotenv').config({ path: __base + '.env' });
}


 require(__base + "app/service/commands");
