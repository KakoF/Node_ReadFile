var chokidar = require('chokidar');
var fs = require('fs')
const post = require('./post')
var xml2js = require('xml2js');
const parser = new xml2js.Parser({ attrkey: "ATTR" });


var watcher = chokidar.watch('Recebido/', {persistent: true});

watcher
  .on('add', function(path) {
    fs.readFile(path, function(err, data) {
        let xml_string = fs.readFileSync(path, "utf8");
        parser.parseString(xml_string, function(error, result) {
            if(error === null) {
                post.insert()
            }
            else {
                console.log(error);
            }
        });
    });
  })
  .on('change', function(path) {console.log('File', path, 'has been changed');})
  .on('unlink', function(path) {console.log('File', path, 'has been removed');})
  .on('error', function(error) {console.error('Error happened', error);})