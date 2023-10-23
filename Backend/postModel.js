const mongoose = require('mongoose');

const contactShema= mongoose.Schema(
    {
    Prenom:"String",
    Nom:"String",
    Email:"String",
    Message:"String"
}
);

const Contact = mongoose.model('Contact',contactShema);
module.exports = Contact;
