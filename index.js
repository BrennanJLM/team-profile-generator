const inquirer = require('inquirer');
const Employee = require('./Employee');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const Manager = require('./Manager');

// // function Managers(managerName, managerId, managerEmail) {

//     this.managerName = managerName;
//     this.managerId = managerId;
//     this.managerEmail = managerEmail;

// }

manager1 = new Manager()

//intern and engineer array
interns = []
engineers = []

inquirer.prompt([
        
    {
        type: 'text',
        name: 'managername',
        message: 'What is the team managers name?',
       
    },
    {
        type: 'text',
        name: 'managerid',
        message: 'What is the team managers id?',
      
    },
    {
        type: 'text',
        name: 'manageremail',
        message: 'What is the team managers email?',
       
    },
 ])
//create manager
.then ((answer) => {

   manager1.name = answer.managername
   manager1.id = answer.managerid
   manager1.email = answer.manageremail
  
})

this.questions = [
    {
        type: "list",
        name: "role",
        message: "Select an employee role to add a new team member or select 'Finish' to exit.",
        choices: ["Engineer", "Intern", "Custom", "Finish"]
    },

employee1 = new Employee()

//intern and engineer array

inquirer.prompt([
        
    {
        type: 'text',
        name: 'name',
        message: 'What is your name?'
       
    },
    {
        type: 'text',
        name: 'id',
        message: 'What is your id?'
      
    },
    {
        type: 'text',
        name: 'email', 
        message: 'What is your email?'
       
    },
 ])
//create manager
.then ((answer) => {

   employee1.name = answer.name
   employee1.id = answer.id
   employee1.email = answer.email
  
})
]





//   inquirer
//     .prompt({
//       type: 'list',
//       name: 'internOrEngineer',
//       message: 'Would you like to add an intern or engineer?'
//     })
