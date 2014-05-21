var util = require('util');
var Transform = require('stream').Transform;
var debug = require('../debug').log;

var compress = module.exports = function(options){
  Transform.call(this,options);
};
util.inherits(compress,Transform);

compress.prototype._transform = function(chunk,enc,fn){
  var self = this;
  self.push(chunk);
  debug('compress','complress');
  fn();
};
//compress.prototype._flush = function(){};

