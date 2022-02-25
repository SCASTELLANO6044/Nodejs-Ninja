// Global object
console.log(__dirname)
console.log(__filename)
//importing other files
const xyz = require('./people')
console.log(xyz)
const os = requiere('os');
console.log(os.platform(), os.homedir());