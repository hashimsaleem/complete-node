
console.log('Starting app.js');

const yargs = require('yargs');
const notes = require('./notes');

const argv = yargs.argv;
let command = argv._[0];

if(command === 'add') {
    notes.addNote(argv.title, argv.body);
} else if(command === 'remove') {
    notes.removeNote(argv.title);
} else if(command === 'list') {
    notes.getAll();
} else if(command === 'read') {
    notes.getNote(argv.title);
} else {
    console.log('unknown command');
}