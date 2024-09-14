const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({

  orderId: {type: Number , require:true ,unique: true},
  company: {type: String , require:true},
  drugName: {type: String , require:true},
  quantity: {type: Number , require:true},
  price: {type: Number , require:true},
    
  
})

module.exports = mongoose.model('Order',orderSchema);
