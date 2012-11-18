var exec = require('child_process').exec;

var command = 'java -jar jsdoc-toolkit/jsrun.jar \
                         jsdoc-toolkit/app/run.js -a \
                         -t=jsdoc-toolkit/templates/jsdoc \
                         -d=docs lib/fabric.js';

var start = new Date();
exec(command, function (error, output) {
  console.log(output);
  console.log('completed in ', (new Date() - start) / 1000 + 's');
});