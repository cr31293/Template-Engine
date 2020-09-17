// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const { prompt } = require("inquirer");

const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(githubID) {
        super(name, id, email);
        this.githubID = githubID;
    }

    getEngineer() {
        return
            `Name: ${this.name}
            Age: ${this.name}
            Email: ${this.email}
            Github ID: ${this.githubID}`;
    }
}

module.exports = Engineer;
