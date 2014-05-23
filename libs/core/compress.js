var util = require('util');
var Transform = require('stream').Transform;
var debug = require('../debug').log;

var compress = module.exports = function(options){
  Transform.call(this,options);
  this._buf = '';
};
util.inherits(compress,Transform);

compress.prototype._transform = function(chunk,enc,fn){
  var self = this;

  var rows = chunk.toString().split('\n');
  for(var i = 0; i < rows.length; i++){
    _parse_row(rows[i],'sample_tag',',');
  }
  self.push(chunk);
  //debug('compress','complress');
  fn();
};
compress.prototype._flush = function(fn){
  debug('compress','flush!');
};
var _parse_row = function(row,tags,sept){

};
