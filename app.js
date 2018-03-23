
console.log('Starting app.js');

const yargs = require('yargs');
const notes = require('./notes');

const argv = yargs.argv;
let command = argv._[0];

if(command === 'add') {
    let note = notes.addNote(argv.title, argv.body);
    if(note) {
        console.log('Note created');
        console.log('--');
        console.log(`Title: ${note.title}`);
        console.log(`Body: ${note.body}`);
    } else {
        console.log('Note title taken');
    }
} else if(command === 'remove') {
    notes.removeNote(argv.title);
} else if(command === 'list') {
    notes.getAll();
} else if(command === 'read') {
    notes.getNote(argv.title);
} else {
    console.log('unknown command');
}