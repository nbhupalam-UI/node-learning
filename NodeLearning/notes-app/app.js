// const chalk = require("chalk");
// console.log(chalk.bold.bgGreen.inverse.white("Hello world!!!"));
// const validator = require("validator");

// const getNotes = require("./notes");

// console.log(getNotes());

// const { name } = require("./utils");
// console.log(name);
// console.log(process.argv[2]);
const yargs = require("yargs");
const notes = require("./notes");

// const [n1, n2] = yargs.argv["_"];

// console.log(n1, n2);

yargs.command({
  command: "add",
  describe: "Add a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.addNote(argv.title, argv.body);
  },
});

yargs.command({
  command: "remove",
  describe: "removing a note",
  builder: {
    title: {
      describe: "title of the note to be removed",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.removeNote(argv.title);
  },
});

yargs.command({
  command: "list",
  describe: "notes list",
  handler: function () {
    notes.listNotes();
  },
});

yargs.command({
  command: "read",
  describe: "read note",
  builder: {
    title: {
      describe: "note to read",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.readNote(argv.title);
  },
});

// console.log(yargs.argv);
yargs.parse();
