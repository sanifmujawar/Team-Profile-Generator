// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee.js");

/* 
In addition to Employee’s properties and methods, Intern will also have the following: 
school
getSchool()
getRole()—overridden to return 'Intern' 
*/

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return "Intern";
  }
}

module.exports = Intern;