// TODO: Write code to define and export the Employee class
const { prompt } = require("inquirer");

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.email = email;
        this.id = id;
    }

    getName() {
        return this.name;
    }

    getRole() {
        return "Employee";
    }

    getId() {
        return this.id;
    }
    
    getEmail() {
        return this.email;
    }



};

module.exports = Employee;
