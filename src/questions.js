const menuQuestion = [
    {
      type: "list",
      name: "menu",
      message: "Member type to add in the team:",
      choices: ["Add an engineer", "Add an intern", "Finish building the team"],
    },
  ];
  
  function employeeQuestions(type) {
    let questions = [
      {
        type: "input",
        name: "name",
        message: `${type} Name:`,
        default() {
          if (type === "Manager") {
            return "Lionel Messi";
          }
          if (type === "Engineer") {
            return "Cristiano Ronaldo";
          }
          if (type === "Intern") {
            return "Kylian Mbappe";
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "ID:",
        default() {
          if (type === "Manager") {
            return "30";
          }
          if (type === "Engineer") {
            return "7";
          }
          if (type === "Intern") {
            return "10";
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Email address:",
        default() {
          if (type === "Manager") {
            return "messi@example.com";
          }
          if (type === "Engineer") {
            return "ronaldo@example.com";
          }
          if (type === "Intern") {
            return "mbappe@example.com";
          }
        },
      },
    ];
    return questions;
  };
  
  const managerQuestion = [
    {
      type: "input",
      name: "officeNumber",
      message: "Office number",
      default() {
        return "0888888888";
      },
    },
  ];
  
  const engineerQuestion = [
    {
      type: "input",
      name: "gitHubUsername",
      message: "GitHub username",
      default() {
        return "ronaldo";
      },
    },
  ];
  
  const internQuestion = [
    {
      type: "input",
      name: "internSchool",
      message: "School",
      default() {
        return "PSG";
      },
    },
  ];
  
  module.exports = {
    menuQuestion,
    employeeQuestions,
    managerQuestion,
    engineerQuestion,
    internQuestion,
  };