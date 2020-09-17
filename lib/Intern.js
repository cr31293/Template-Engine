// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const { prompt } = require("inquirer");

const Employee = require("./Employee");

class Intern extends Employee {
    constructor(school) {
        super(name, id, email);
        this.school = school;
    }

    getIntern() {
        return
            `Name: ${this.name}
            Age: ${this.name}
            Email: ${this.email}
            School: ${this.school}`;
    }
}

module.exports = Intern;
