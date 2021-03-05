const ls = require('./ls')
const cat = require('./cat')

let initial = process.stdout.write('promptOne > ');




module.exports = function(){
  process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();

  if(cmd === 'cat') {
    cat();
  }

  if (cmd === 'ls'){
    ls();
  }
  if (cmd === 'pwd'){
  process.stdout.write(process.cwd());
  }
  process.stdout.write('\npromptTwo > ');

})}
//console.log(ls())

/*module.exports = {
  initial,
  func
}*/

//ls()
