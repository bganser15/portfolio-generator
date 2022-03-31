const inquirer = require("inquirer");
// const fs = require("fs");
// const generatePage = require("./src/page-template");

inquirer
  .prompt([
    //questions via the prompt method in an array of objects
    {
      type: "input",
      name: "name",
      message: "What is your name?",
    },
  ])
  //promise
  .then((answers) => console.log(answers));
// const pageHTML = generatePage(name, github);

// fs.writeFile("./index.html", pageHTML, (err) => {
//   if (err) throw err;

//   console.log("Portfolio complete! Check out index.html to see the output!");
// });
