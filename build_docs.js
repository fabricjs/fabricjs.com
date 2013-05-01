var exec = require('child_process').exec;
var command = 'jsdoc-3.1.1/jsdoc lib/fabric.js -d docs';

console.log('Running:', command);

var start = new Date();
exec(command, function (error, output) {
  console.log(output);
  console.log('completed in ', (new Date() - start) / 1000 + 's');
});
