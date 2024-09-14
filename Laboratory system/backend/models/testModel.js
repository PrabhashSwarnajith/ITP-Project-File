const mongoose = require("mongoose");

const testSchema = mongoose.Schema({

  testCode: {
    type: String,
    required: true,
    unique: true,
  },
  testName: {
    type: String,
    required: true
  },
  testDescription: {
    type: String,
    required: true
  },
  testPrice: {
    type: String,
    required: true
  },
  
})
module.exports = mongoose.model('Test',testSchema);
