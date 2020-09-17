// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const { prompt } = require("inquirer");

const Employee = require("./Employee");

class Manager extends Employee {
    constructor(officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getManager() {
        return
            `Name: ${this.name}
            Age: ${this.name}
            Email: ${this.email}
            Office Number: ${this.officeNumber}`;
    }
};

module.exports = Manager;