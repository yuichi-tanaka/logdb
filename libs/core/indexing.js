var index = {};
var rev_index = {};
var max_index = 1;
module.exports.create_index = function(tag,val){
  if(!rev_index[val]){
    index[max_index] = val;
    rev_index[val] = max_index;
    max_index++;
  }
};
