// routes/oder.js
const express = require("express");
const router = express.Router();
const Order = require("../models/order");

// Add a new drug to the oder
router.post("/add", async (req, res) => {
  try {
    const order = new Order({

    orderId: Number(req.body.orderId),  
    company: req.body.company,    
    drugName: req.body.drugName,
    quantity: Number(req.body.quantity),
    price: Number(req.body.price),
      
      
    });
    await order.save();
    res.json("Drug added to Order");
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Error adding drug to order" });
  }
});

// Get all drugs from the inventory
router.get("/", async (req, res) => {
  try {
    const order = await Order.find();
    res.json(order);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Error getting order" });
  }
});

// Get drug by id from the oder
router.get('/:id', async (req, res) => {
    try {
      const orderItem = await Order.findById(req.params.id);
      if (!orderItem) {
        return res.status(404).json({ message: 'Order item not found' });
      }
      res.json(orderItem);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server Error' });
    }
  });

// Update a drug in the Oder
router.put("update/:id", async (req, res) => {
  try {
    const order= await Order.findByIdAndUpdate(
      req.params.id,
      {
        orderId: {type: Number , require:true},
        company: {type: String , require:true},
        drugName: {type: String , require:true},
        quantity: {type: Number , require:true},
        price: {type: Number , require:true},
      },
      { new: true }
    );
    res.json({ status: "Drug updated in order", order });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Error updating drug in order" });
  }
});

// Delete a drug from the inventory
router.delete("/:id", async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.json({ status: "Drug deleted from order" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Error deleting drug from Order" });
  }
});

module.exports = router;