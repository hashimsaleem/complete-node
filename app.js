
console.log('Starting app.js');

const yargs = require('yargs');
const notes = require('./notes');

const argv = yargs.argv;
let command = argv._[0];

if(command === 'add') {
    let note = notes.addNote(argv.title, argv.body);
    if(note) {
        console.log('Note created');
        notes.logNote(note);
    } else {
        console.log('Note title taken');
    }
} else if(command === 'remove') {
    let removed = notes.removeNote(argv.title);
    let message = removed ? 'Note was removed' : 'Note not found';
    console.log(message);
} else if(command === 'list') {
    notes.getAll();
} else if(command === 'read') {
    let note = notes.getNote(argv.title);
    if(note) {
        console.log('Note found');
        notes.logNote(note);
    } else {
        console.log('Note not found');
    }
} else {
    console.log('unknown command');
}