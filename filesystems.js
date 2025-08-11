const fs = require('fs')


//reading file
fs.readFile('./docs/exampleFile.txt', (err, data) => {
    if(err) {
        console.log(err);
    } else {
        // console.log(data) //will show data objects
        console.log(data.toString()) //will show data objects
    }
})


//writing file
fs.writeFile('./docs/exampleFile.txt', "Hello, Siji", () => {
    console.log('File was written!!')
}) 


//directories
if(!fs.existsSync('./assets')) {
    fs.mkdir('./assets' ,  (err) => {
        if(err) {
            console.log(err)
        } else {
            console.log('---created!!-----')
        }
    })
} else {
    console.log("Already exist!!")
}


//delete file

if(fs.existsSync('./docs/exampleFile.txt')) {
    fs.unlink('./docs/exampleFile.txt', (err) => {
        if(err) console.log(err)
        else console.log('Deleted!!')
    })
}