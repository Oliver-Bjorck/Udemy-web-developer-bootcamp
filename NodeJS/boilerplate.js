const fs = require('fs');  //fs allows us to access and interact with the file system
const folderName = process.argv[2] || 'Project'; //this stores the argument as the new folder name

// fs.mkdir('ExampleDirectory', { recursive: true }, (err) => {
//     console.log("In the callback");
//     if (err) throw err;
//   }); 
try {
    fs.mkdirSync(folderName); //this creates a new folder with the folder name the user designated
    fs.writeFileSync(`${folderName}/index.html`)
    fs.writeFileSync(`${folderName}/styles.css`)
    fs.writeFileSync(`${folderName}/app.js`)
} catch (e) {
    console.log("Somethng went wrong!")
    console.log(e);
}
