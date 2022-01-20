// file system is called forth
const fs = require("fs");
// this fucntion takes the template data, and then writes a file
function writeFile(fileContent) {
  const readMeString = fileContent
  return new Promise((resolve, reject) => {
    fs.writeFile("./dist/README.md", readMeString, (err) => {
      // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
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
}
// this exports data from the page
module.exports = writeFile;
