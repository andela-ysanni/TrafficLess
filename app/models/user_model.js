var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  first_name: {
    type: String,
  },
  last_name: {
    type: String,
  },
  username: {
    type: String
  },
  password: {
    type: String,
  },
  email: {
    type: String
  },
  date_registered: {
    type: Date,
    default: Date.now
  }
});


// define our nerd model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('User', userSchema);

