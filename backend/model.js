const mongoose = require("mongoose"); //helps us in creating schema in mongodb
var infoSchema = new mongoose.Schema({
  bugtitle: {
    type: String,
    required: "Required"
  },
  status: {
    type: String,
    required: "Required"
  },
  comment: {
    type: String,
    required: "Required"
  },
  priority: {
    type: String,
    required: "Required"
  }
});

mongoose.model("CollectionOne", infoSchema);
