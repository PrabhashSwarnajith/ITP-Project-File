const mongoose = require('mongoose');

const inventorySchema = mongoose.Schema({

  drugId: {type: Number , require:true,unique: true},
  name: {type: String , require:true},
  category: {type: String , require:true},
  storebox: {type: String , require:true},
  sellprice: {type: Number , require:true},
  quantity: {type: Number , require:true},
  company: {type: String , require:true},
  effects: {type: String , require:true},
  exdate: {type: String , require:true},
  Unit: {type: String , require:true},
  Reoderlevel: {type: String , require:true},
})

module.exports = mongoose.model('Inventory',inventorySchema);