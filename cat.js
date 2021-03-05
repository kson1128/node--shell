const fs = require('fs')

// import { readFile } from 'fs';

module.exports = function() {
  fs.readFile('/etc/passwd', (err, data) => {
    if (err) throw err;
    console.log(data);
  });

}
