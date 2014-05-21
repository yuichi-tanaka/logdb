
var fs = require('fs');
var debug = require('../debug').log;
var stream_list = {};

module.exports.create = function(path,name,fn){
  if(stream_list[path+name]) return fn(stream_list[path+name]);
  var _t = fs.createWriteStream(path+name);
  _t.on('open',function(id){
    stream_list[path+name] = _t;
    fn(stream_list[path+name]);
  });
};
