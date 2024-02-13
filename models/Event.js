const mongoose = require('mongoose');
const { Schema } = mongoose;

const eventSchema = new Schema({
  title: String, // String is shorthand for {type: String}
  active: Boolean,
});

const event = mongoose.model('event', eventSchema);
<<<<<<< HEAD

=======
>>>>>>> main
