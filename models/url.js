var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var linkSchema = new Schema({
  code: String,
  url: String
});

var Links = mongoose.model("Links", linkSchema);

module.exports = Links;