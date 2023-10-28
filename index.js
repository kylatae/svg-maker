const fs = require("fs")
const inquirer = require('inquirer');
const shape = require('./lib/shapes.js');

qPrompt = [
  {
    type: 'input',
    message: 'What 3 Characters do you want on your ',
    name: 'chars'
  },
  {
    type: 'input',
    message: 'What color would you like the text to be (Use Color Name or Hex (#AA0011) Default is Black)',
    name: 'charColor'
  },
  {
    type: 'list',
    message: 'What shape would you like around your logo?',
    name: 'shape',
    choices: ['circle', 'square', 'triangle']
  },
  {
    type: 'input',
    message: 'What color would you like the shape to be (Use Color Name or Hex (#AA0011) Default is Black)',
    name: 'shapeColor'
  },
  {
    type: 'input',
    message: 'Desired image height in pixels (width will be calculated based of height)',
    name: 'height'
  }
  
]


function init() {

  inquirer.prompt(qPrompt)
    .then((data)=>{
      shape(data)
    })
}

// Function call to initialize app
init();