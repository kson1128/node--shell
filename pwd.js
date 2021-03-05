
let initial = process.stdout.write('prompt > ');

let func = process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();

  process.stdout.write(process.cwd());
  process.stdout.write('\nprompt > ');

})

module.exports = {
  initial,
  func
}
