const fs = require('fs')

const readStream = fs.createReadStream('./docs/exampleFile.txt', { encoding : 'utf-8'});

const writeStream = fs.createWriteStream('./docs/exampleFile2.txt');


    readStream.on('data', (chunk) => {
        console.log('--------New chunk ----------');
        console.log(chunk);


        writeStream.write('\n New chunk \n');
        writeStream.write(chunk);

    })
readStream.pipe(writeStream)

    
    