const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const { prompt } = require('inquirer');
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const Employee = require("./lib/Employee");

const employees = [];

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

const questionPrompt = [

    {
        type: "list",
        name: "begin",
        message: "Would you like to add a new employee?",
        choices: [
            "Yes",
            "No"
        ]
    },
    {
        type: "input",
        name: "name",
        message: "What is your name?",
        when: (answers) => answers.begin === "Yes" 

    },
    {
        type: "input",
        name: "email",
        message: "What is your email?",
        when: (answers) => answers.name
    },
    {
        type: "input",
        name: "id",
        message: "What is your employee ID number?",
        when: (answers) => answers.email
    },
    {
        type: "list",
        name: "role",
        message: "What is your role?",
        choices: [
            "Engineer",
            "Intern",
            "Manager",
        ],
        when: (answers) => answers.id
    },
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?",
        when: (answers) => answers.role === "Engineer",
    },
    {
        type: "input",
        name: "school",
        message: "Where do you attend school?",
        when: (answers) => answers.role === "Intern"
    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is your office number?",
        when: (answers) => answers.role === "Manager"
    }

]


function teamBuilder() {
    prompt(questionPrompt).then(answers => {
        
        if (answers.role === "Engineer") {
            const employee = new Engineer (answers.name, answers.email, answers.id, answers.github);
            employees.push(employee);
        } else if (answers.role === "Intern") {
            const employee = new Intern (answers.name, answers.email, answers.id, answers.school);
            employees.push(employee);

        } else if (answers.role === "Manager") {
            const employee = new Manager (answers.name, answers.email, answers.id, answers.officeNumber);
            employees.push(employee);
        };
        console.log(employees);

        if (answers.begin === "Yes"){
        teamBuilder();
        };
        fs.writeFile("Output/team.html", render(employees), function(err) {
            if (err) throw err;
        })

    });
};

teamBuilder();




// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
