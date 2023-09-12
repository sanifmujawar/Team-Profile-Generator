const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs/promises");
const questions = require("./src/questions");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");
const { getMaxListeners } = require("process");
const { finished } = require("stream");

// TODO: Write Code to gather information about the development team members, and render the HTML file.

let team = [];

async function menuFunc() {
  let { menu } = await inquirer.prompt(questions.menuQuestion);
  if (menu === "Add an engineer") {
    engineer();
  } else if (menu === "Add an intern") {
    intern();
  } else {
    generate();
  }
}

async function manager() {
  let { name, id, email } = await inquirer.prompt(
    questions.employeeQuestions("Manager")
  );
  let { officeNumber } = await inquirer.prompt(questions.managerQuestion);
  team.push(new Manager(name, id, email, officeNumber));
  menuFunc();
}

async function engineer() {
  let { name, id, email } = await inquirer.prompt(
    questions.employeeQuestions("Engineer")
  );
  let { gitHubUsername } = await inquirer.prompt(questions.engineerQuestion);
  team.push(new Engineer(name, id, email, gitHubUsername));
  menuFunc();
}

async function intern() {
  let { name, id, email } = await inquirer.prompt(
    questions.employeeQuestions("Intern")
  );
  let { internSchool } = await inquirer.prompt(questions.internQuestion);
  team.push(new Intern(name, id, email, internSchool));
  menuFunc();
}

async function generate() {
  let htmlDoc = render(team);
  await fs.writeFile(outputPath, htmlDoc);
  console.log(`=====================================
=== The Team Profile is Generated ===
=====================================
The HTML file location is in the output directory:
${outputPath}`);
}

function appInit() {
  console.log(`==============================
=== Team Profile Generator ===
==============================
Add manager details:`);
  manager();
}

appInit();
