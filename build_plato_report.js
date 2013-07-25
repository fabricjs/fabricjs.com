var exec = require('child_process').exec;
var command = 'plato -r -d report ../fabric.js/src';

console.log('Running:', command);

var start = new Date();
exec(command, function (error, output) {
  console.log(output);
  console.log('Completed in ', (new Date() - start) / 1000 + 's');
});
