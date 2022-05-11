const inquirer = require('inquirer')

function Employee(name, id, email) {
    this.name = name;

    this.id = id;
    this.email = email;

    inquirer
      .prompt({
          type: 'text',
          name: 'name',
          message: 'What is your name?'
      })
      .then(({ name }) => {
        this.employee = new Employee(name);

    inquirer
      .prompt({ 
            type: 'text',
            name: 'id',
            message: 'What is your id?'
        })
        .then(({ id }) => {
          this.employee = new Employee(id);

    inquirer
       .prompt({
            type: 'text',
            name: 'email', 
            message: 'What is your email?'
        })
        .then(({ email }) => {
          this.employee = new Employee(email);

          //getRole
  
              
  
          

        

        
      });
})})};

module.exports = Employee;