const ls = require('./ls')

let initial = process.stdout.write('promptOne > ');

module.exports = function(){
  process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();
  if (cmd === 'ls'){
    ls()
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