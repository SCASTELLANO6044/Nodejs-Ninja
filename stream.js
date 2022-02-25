const fs = require('fs');

const readstream = fs.createReadStream('./docs/blog2.txt');
const writestream = fs.createWriteStream('./docs/blog3.txt');
readstream.on('data', (chunk)=>{
    console.log('--------NEW CHUNK---------')
    console.log(chunk.toString());
    writestream.write('\nNew chunk\n');
    writestream.write(chunk.toString());
})