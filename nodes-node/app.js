const fs = require('fs');
const os = require('os');
const notes =


const yargs = require('yargs');

const argv = yargs.argv;
let command = argv._[0];



console.log('Starting app');

if (command === 'add') {
  notes.addNote(argv.title, argv.body);
} else if
