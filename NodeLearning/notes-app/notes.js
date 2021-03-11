"use strict";

const fs = require("fs");
const chalk = require("chalk");

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const listNotes = () => {
  const notesList = loadNotes();
  if (notesList.length) {
    console.log(chalk.bold.bgGreen("Your notes"));
    notesList.forEach((f) => {
      console.log(chalk.bold.yellow(f.title));
    });
  } else {
    console.log(chalk.bold.red("No notes found!"));
  }
};

const saveNotes = (notes) => {
  fs.writeFileSync("notes.json", JSON.stringify(notes));
};

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((f) => f.title === title);
  if (duplicateNote === undefined) {
    console.log("Note title taken!!!");
  } else {
    notes.push({
      title,
      body,
    });
    saveNotes(notes);
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const filteredNotes = notes.filter((f) => f.title !== title);
  if (notes.length > filteredNotes.length) {
    saveNotes(filteredNotes);
    console.log(chalk.bgGreen("Note removed!"));
  } else {
    console.log(chalk.bgRed("No note found!"));
  }
};

const readNote = (title) => {
  const notes = loadNotes();
  const noteObj = notes.find((f) => f.title === title);
  if (noteObj) {
    console.log(chalk.bold.green(noteObj.title));
    console.log(chalk.bold.green(noteObj.body));
  } else {
    console.log(chalk.red.bold("Note not found"));
  }
};

module.exports = {
  addNote,
  removeNote,
  listNotes,
  readNote,
};
