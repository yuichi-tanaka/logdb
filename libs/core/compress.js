var util = require('util');
var Transform = require('stream').Transform;
var debug = require('../debug').log;
var indexing = require('./indexing').create_index;

var compress = module.exports = function(options){
  Transform.call(this,options);
  this._buf = '';
};
util.inherits(compress,Transform);

compress.prototype._transform = function(chunk,enc,fn){
  var self = this;
  var _ret;
  for(var i = 0; i < chunk.toString().length; i++){
    if(chunk[i] === 10 || chunk[i] === 13){
      _ret=_parse_row(self._buf,'sample_tag',' ');
      self._buf = '';
      _indexing(_ret);
      continue;
    }
    self._buf += String.fromCharCode(chunk[i]);
  };

  self.push('');
  //debug('compress','complress');
  fn();
};
compress.prototype._flush = function(fn){
  debug('compress','flush!');
  fn();
};

var _parse_row = function(row,tags,sept){
  if(row.length <= 0) return;
  var ar = row.split(sept);
  return ar;
};

var _indexing = function(ar_row){
  for(var i = 0; i < ar_row.length;i++){
    indexing(ar_row[i]);
  }
};
