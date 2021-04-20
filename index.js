//Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const templates = require("./src/template");

const employeeArr = [];

function Prompt() {
  inquirer.prompt([
      {
        type: "input",
        message: "What is your team managers name?",
        name: "managerName",
      },
      {
        type: "input",
        message: "What is your employee id number?",
        name: "id",
      },
      {
        type: "input",
        message: "What is your email address?",
        name: "email",
      },
      {
        type: "input",
        message: "What is your office number?",
        name: "officeNumber",
      },
    ])
    .then(({ managerName, id, email, officeNumber, addEmployee }) => {
      employeeArr.push(new Manager(managerName, id, email, officeNumber));
    //   console.log(employeeArr);
      mainMenu();
    });
}

Prompt()

const writeFile = (fileContent) => {
    return new Promise((resolve, reject) => {
      fs.writeFile("./dist/index.html", templates(fileContent), (err) => {
        if (err) {
          reject(err);

          return;
        }
        resolve({
          ok: true,
          message: "File created!",
        });
      });
    });
  };

function engineerEmp() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the Engineer's name?",
        name: "engineerName",
      },
      {
        type: "input",
        message: "What is the Engineer's ID?",
        name: "id",
      },
      {
        type: "input",
        message: "What is the Engineers email?",
        name: "email",
      },
      {
        type: "input",
        message: "What is the Engineers GitHub username?",
        name: "github",
      },
     
    ])
    .then(({ engineerName, id, email, github}) => {
      employeeArr.push(new Engineer(engineerName, id, email, github));
    //   console.log(employeeArr);
      mainMenu()
    });
}
function internEmp() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the Intern's name?",
        name: "internName",
      },
      {
        type: "input",
        message: "What is the Intern's ID?",
        name: "id",
      },
      {
        type: "input",
        message: "What is the Interns email?",
        name: "email",
      },
      {
        type: "input",
        message: "What is the Interns school?",
        name: "school",
      },
    
    ])
    .then(({ internName, id, email, school}) => {
      employeeArr.push(new Intern(internName, id, email, school));
    //   console.log(employeeArr);
      mainMenu()
    });
}
function mainMenu() {
  inquirer.prompt([
    {
      type: "list",
      message: "Would you like to add more employees to your team?",
      name: "addEmployee",
      choices: ["Engineer", "Intern", "Build Team"],
    },
  ]).then((answers)=> {
      if (answers.addEmployee==="Engineer") {
          engineerEmp()
      }else if(answers.addEmployee==="Intern"){
          internEmp()
      }else {
            writeFile(employeeArr)
      }
  })
}
