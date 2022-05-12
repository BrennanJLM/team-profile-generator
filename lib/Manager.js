const inquirer = require('inquirer');
const Employee = require('./Employee')


class Manager extends Employee {
    constructor(name = '', id = '', email = '') {
      super(name, id, email);
  
      this.officeNumber = officeNumber
    }
}

    module.exports = Manager;