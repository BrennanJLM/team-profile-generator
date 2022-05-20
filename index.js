"use strict";

//MODULES ############################################################################
const inquirer = require('inquirer');
const json2html = require('node-json2html');
const fs = require('fs');

//SCRIPTS ############################################################################

const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');


//FUNCTIONS ############################################################################
const GetManager = async() => {
  return await inquirer.prompt([
    {
      type: 'text',
      name: 'name',
      message: 'What is the team managers name?',
    },
    {
      type: 'text',
      name: 'id',
      message: 'What is the team managers id?',
    },
    {
      type: 'text',
      name: 'email',
      message: 'What is the team managers email?',
    },
    {
      type: 'text',
      name: 'office',
      message: 'What is the team managers office number?',
    },
  ]);
};

const GetOptions = async() => {
  return await inquirer.prompt([
    {
      type: 'list',
      name: 'role',
      message: "Select an employee role to add a new team member or select 'Finish' to exit.",
      choices: ['Intern','Engineer',new inquirer.Separator(),'Finish'],
      default: 2,
    },
  ]);
};

const GetIntern = async() => {
  return inquirer.prompt([
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
  ]);
};

const GetEngineer = async() => {
  return await inquirer.prompt([
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

  .then ((answer) => {
    const writeFile = fileContent => {
        return new Promise((resolve, reject) => {
          fs.writeFile('./dist.index.html', fileContent, err => {
            if (err) {
              reject(err);
              return;
            }
      
            resolve({
              ok: true,
              message: 'File created!'
            });
          });
        });
    };

})};

const BuildJSON = async() => {
  let rtn = false;
  try {
    //get manager
    let m_ans = await GetManager();
    //intern and engineer array
    let interns = [];
    let engineers = [];
    //add employees
    let run = true;
    while(run) {
      let o_ans = await GetOptions();
      switch(o_ans.role) {
        case 'Intern':
          let i_ans = await GetIntern();
          interns.push(new Intern(i_ans.name, i_ans.id, i_ans.email, i_ans.school));
          break;
        case 'Engineer':
          let e_ans = await GetEngineer();
          engineers.push(new Engineer(e_ans.name, e_ans.id, e_ans.email, e_ans.github));
          break;
        default:
          run = false;
      }
    };
    
    rtn = JSON.stringify({
      'manager': new Manager(m_ans.name, m_ans.id, m_ans.email, m_ans.office),
      'interns': interns,
      'engineers': engineers,
    });
    console.log(rtn);
  } catch(err) {
    console.log(err);
  }
  return rtn;
};




//PROGRAM ############################################################################
const main = async() => {
  let data = await BuildJSON();

  let template = [
    {'<>':'h1','text':'Manager'},
    {'<>':'div','text':'Name: ${manager.name} ID: ${manager.id} Email: ${manager.email} Office Number: ${manager.office}'},
    {'<>':'h2','text':'Interns'},
    {'<>':'ul','html':[
      {'<>':'li','text':'${name} ${id} ${email} ${school}','{}':function(){return(this.interns)}}
    ]},
    {'<>':'h2','text':'Engineers'},
    {'<>':'ul','html':[
      {'<>':'li','text':'${name} ${id} ${email} ${github}','{}':function(){return(this.engineers)}}
    ]}
  ];

  let html = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      </head>
      <body>
  `;

  html += json2html.render(data, template);

  html += `
      </body>
    </html>
  `;

  console.log(html);
};



main();
