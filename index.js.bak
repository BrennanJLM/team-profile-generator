const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

manager1 = new Manager()
employee1 = new Engineer()
employee2 = new Intern()

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
    {
        type: 'text',
        name: 'officeNumber',
        message: 'What is the team managers office number?',
       
    },

 ])
//create manager
.then ((answer) => {

   manager1.name = answer.managername
   manager1.id = answer.managerid
   manager1.email = answer.manageremail
   
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
    {
        type: 'text',
        name: 'github', 
        message: 'What is your github username?'
       
    },
 ])
//create employee
.then ((answer) => {

   employee1.name = answer.name
   employee1.id = answer.id
   employee1.email = answer.email
   employee1.github = answer.github
  
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
    {
        type: 'text',
        name: 'school', 
        message: 'What is your school name?'
       
    },
 ])
//create employee
.then ((answer) => {

   employee2.name = answer.name
   employee2.id = answer.id
   employee2.email = answer.email
   employee2.school = answer.school
  
})
})
})


// this.questions = [
//     {
//         type: "list",
//         name: "role",
//         message: "Select an employee role to add a new team member or select 'Finish' to exit.",
//         choices: ["Engineer", "Intern", "Finish"]
//     },



//intern and engineer array
 
// s]






