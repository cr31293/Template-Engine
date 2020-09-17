// TODO: Write code to define and export the Employee class
const { prompt } = require("inquirer");

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getEmployee() {
        return
            `Name: ${this.name}
            Age: ${this.name}
            Email: ${this.email}`;
    }
};

module.exports = Employee;
