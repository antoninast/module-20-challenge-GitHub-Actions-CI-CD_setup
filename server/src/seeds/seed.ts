import db from "../config/connection.js";
import Question from "../models/Question.js";
import cleanDB from "./cleanDb.js";

// import pythonQuestions from './pythonQuestions.json' assert { type: 'json' };

// db.once('open', async () => {
//   await cleanDB('Question', 'questions');

//   await Question.insertMany(pythonQuestions);

//   console.log('Questions seeded!');
//   process.exit(0);
// });


import { promises as fs } from 'fs';
import path from 'path';

const __dirname = path.dirname(new URL(import.meta.url).pathname);

async function loadPythonQuestions() {
  const data = await fs.readFile(path.join(__dirname, './pythonQuestions.json'), 'utf-8');
  return JSON.parse(data);
}

db.once('open', async () => {
  await cleanDB('Question', 'questions');

  const pythonQuestions = await loadPythonQuestions();

  await Question.insertMany(pythonQuestions);

  console.log('Questions seeded!');
  process.exit(0);
});
