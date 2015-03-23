var mongoose = require('mongoose');

var updateSchema = mongoose.Schema({
  from: {
    type: String,
    default: ''
  },
  to: {
    type: String,
    default: ''
  },
  is: {
    type: String,
    default: ''
  },
  dueTo: {
    type: String,
    default: ''
  },
  postedOn: {
    type: Date,
    default: Date.now
  },
  user: [{ type : mongoose.Schema.ObjectId, ref : 'user' }]
});

module.exports = mongoose.model('update', updateSchema);




// var mongoose     = require('mongoose');
// var Schema       = mongoose.Schema;

// var BearSchema   = new Schema({
//     name: String
// });

// module.exports = mongoose.model('Bear', BearSchema);
