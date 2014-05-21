var debug = require('./libs/debug').log;
var example = require('./config/exsample');
var core = require('./libs/core');
var writer = require('./libs/core/writer');
var compress = require('./libs/core/compress');

var fs = require('fs');
var rs = fs.createReadStream('./sample.log');


debug('logdb','start logdb');

rs.on('unpipe',function(){
  debug('logdb','unpipe');
});
var st = writer.create('./','hoge.txt',function(stream){
  stream.on('complete',function(){
    debug('logdb','complete');
  });
  var c = new compress();
  rs.pipe(c).pipe(stream);
});

