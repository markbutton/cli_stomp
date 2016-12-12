var mongoose = require('mongoose');

var contactSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    phoneNumber: Number,
    address: String
});

var Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;