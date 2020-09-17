// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const { prompt } = require("inquirer");

const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, email, id);
        this.github = github;
    }

    getName() {
        return this.name
    }

    getEmail() {
        return this.email
    }

    getId() {
        return this.id
    }

    getGithub() {
        return this.github
    }
    
    getRole() {
        return "Engineer"
    }
};

module.exports = Engineer;
