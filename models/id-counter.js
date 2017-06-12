var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var idCounterSchema = new Schema({
    name: String,
    total: Number
});

var IdCounter = mongoose.model("id-counter", idCounterSchema);

module.exports = IdCounter;