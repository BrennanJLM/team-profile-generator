const inquirer = require('inquirer');
const Employee = require('./Employee')

function Manager(officeNumber) {
    this.officeNumber = officeNumber

    inquirer
      .prompt({
          type: 'text',
          name: 'office number',
          message: 'What is your office number?'
          
      })
      .then(({ name }) => {
        this.employee = new Employee(name);

      }
    )};

    module.exports = Manager;