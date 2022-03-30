const fs = require("fs");
//accepts function from page-template.js
const generatePage = require("./src/page-template.js");
const profileDataArgs = process.argv.slice(2, process.argv.length);
//assignment destructuring - new array we created from slice giving those a varaible name of name and github
const [name, github] = profileDataArgs;

//generate page is an async function here
fs.writeFile("index.html", generatePage(name, github), (err) => {
  if (err) throw err;

  console.log("Portfolio complete! Check out index.html to see the output!");
});

/* console.log(profileDataArgs);

const printProfileData = (profileDataArr) => {
  // This...
  for (let i = 0; i < profileDataArr.length; i += 1) {
    console.log(profileDataArr[i]);
  }

  console.log("================");

  // Is the same as this...

  profileDataArr.forEach((profileItem) => console.log(profileItem));
};

printProfileData(profileDataArgs); */
