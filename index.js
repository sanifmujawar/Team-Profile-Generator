const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs/promises");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");
const { getMaxListeners } = require("process");
const { finished } = require("stream");

// TODO: Write Code to gather information about the development team members, and render the HTML file.

let team = [];

function menuFunc() {
  inquirer.prompt([
    {
      type: "list",
      name: "menu",
      message: "Menu:",
      choices: ["Add an engineer", "Add an intern", "Finish building the team"],
    },
  ])
  .then((res) => {
    // console.log("res", res)
    if (res.menu === "Add an engineer") {
      engineer();
    } else if (res.menu === "Add an intern") {
      intern();
    } else {
      console.log("Building the team finished!");
      console.log("The html is generatedi in the output directory!");
      let htmlDoc = render(team);
      fs.writeFile(outputPath, htmlDoc);
    }
  });
}


async function manager() {
  let { name, employeeId, email, officeNumber } = await inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Team Manager Name:",
      default() {
        return "Messi";
      },
    },
    {
      type: "input",
      name: "employeeId",
      message: "Employee ID:",
      default() {
        return "10";
      },
    },
    {
      type: "input",
      name: "email",
      message: "Email address:",
      default() {
        return "messi@gmail.com";
      },
    },
    {
      type: "input",
      name: "officeNumber",
      message: "Office number",
      default() {
        return "0888888888";
      },
    },
  ]);
  team.push(new Manager(name, employeeId, email, officeNumber));
  menuFunc();
}

async function engineer() {
  let { engineerName, engineerId, engineerEmail, gitHubUsername } =
    await inquirer.prompt([
      {
        type: "input",
        name: "engineerName",
        message: "Engineer Name:",
        default() {
          return "Mbappe";
        },
      },
      {
        type: "input",
        name: "engineerId",
        message: "Engineer ID:",
        default() {
          return "9";
        },
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "Engineer Email address:",
        default() {
          return "mbappe@gmail.com";
        },
      },
      {
        type: "input",
        name: "gitHubUsername",
        message: "GitHub username",
        default() {
          return "mbappe";
        },
      },
    ]);
  team.push(
    new Engineer(engineerName, engineerId, engineerEmail, gitHubUsername)
  );
  menuFunc();
}

async function intern() {
  let { internName, internId, internEmail, internSchool } =
    await inquirer.prompt([
      {
        type: "input",
        name: "internName",
        message: "Intern Name:",
        default() {
          return "Ronaldo";
        },
      },
      {
        type: "input",
        name: "internId",
        message: "Intern ID:",
        default() {
          return "7";
        },
      },
      {
        type: "input",
        name: "internEmail",
        message: "Intern Email address:",
        default() {
          return "ronaldo@gmail.com";
        },
      },
      {
        type: "input",
        name: "internSchool",
        message: "School",
        default() {
          return "Man.UTD";
        },
      },
    ]);
  team.push(new Intern(internName, internId, internEmail, internSchool));
  menuFunc();
}

async function appInit() {
  // team.push(new Manager("Messi", "2", "messi@gmail.com", "0111"));
  // team.push(new Manager("Messi", "2", "messi@gmail.com", "0111"));
  // team.push(new Manager("Messi", "2", "messi@gmail.com", "0111"));
  // team.push(new Engineer("Mbappe", "1", "test@gmail.com", "0888"));
  // team.push(new Intern("Ronaldo", "3", "ronaldo@gmail.com", "0777"));
  await manager();
}

appInit();