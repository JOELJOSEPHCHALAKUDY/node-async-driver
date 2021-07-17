#!/usr/bin/env node

const program = require('commander');
const { prompt } = require('inquirer');

const operations = require(__base + "app/utils/operations");


// Promt Questions
const questions = [
    {
        type: 'input',
        name: 'Parameter',
        message: 'Parameter Name'
    },
];

program
  .name("driver-cli")
  .usage("[global options] command")

program.version('0.0.1', '-v, --vers', 'output the current version');

program.
    addHelpText('after',`

Function                       Alias        Description

version                        -v           To check the version of the customer-cli
driver-cli send <param_name>   s            To read current value  for a parameter from 
                                            device  eg : weight-value , temperature , battery-level
driver-cli restart             rs           To initate device retart
driver-cli error               e            To get latest error code
`);


// Send Command
program
  .command('send <param_name>')
  .alias('s')
  .description('Read a paramter value')
  .action((param_name) => operations.readParameter(param_name));


// Restart Command
program
  .command('restart')
  .alias('rs')
  .description('Restart device')
  .action(() => operations.restartDevice());

// ErrorCode Command
program
  .command('error')
  .alias('e')
  .description('Read latest error code')
  .action(() => operations.readErrorCode());


  try {
    program.parse(process.argv);
  } catch (err) {
    // custom processing...
    console.log('cli proccesing error',err)
  }