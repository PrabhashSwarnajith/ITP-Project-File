// routes/inventory.js
const express = require("express");
const router = express.Router();
const Inventory = require("../models/inventory");

// Add a new drug to the inventory
router.post("/add", async (req, res) => {
  try {
    const inventory = new Inventory({
      drugId: Number(req.body.drugId),
      name: req.body.name,
      category: req.body.category,
      storebox: req.body.storebox,
      sellprice: Number(req.body.sellprice),
      quantity: Number(req.body.quantity),
      company: req.body.company,
      effects: req.body.effects,
      exdate: req.body.exdate,
      Unit: req.body.Unit,
     Reoderlevel: req.body.Reoderlevel
    });
    await inventory.save();
    res.json("Drug added to inventory");
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Error adding drug to inventory" });
  }
});

// Get all drugs from the inventory
router.get("/", async (req, res) => {
  try {
    const inventory = await Inventory.find();
    res.json(inventory);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Error getting inventory" });
  }
});

// Get drug by id from the inventory
router.get('/drug/:drugId', async (req, res) => {
  try {
    const inventoryItem = await Inventory.findOne({ drugId: req.params.drugId });
    if (!inventoryItem) {
      return res.status(404).json({ message: 'Inventory item not found' });
    }
    res.json(inventoryItem);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});
// Update a drug in the inventory
router.put('/update/:drugId', async (req, res) => {
  try {
    const inventory = await Inventory.findOneAndUpdate(
      { drugId: req.params.drugId },
      {
        drugId: Number(req.body.drugId),
        name: req.body.name,
        category: req.body.category,
        storebox: req.body.storebox,
        sellprice: Number(req.body.sellprice),
        quantity: Number(req.body.quantity),
        company: req.body.company,
        effects: req.body.effects,
        exdate: req.body.exdate,
        Unit: req.body.Unit,
        Reoderlevel: req.body.Reoderlevel
      },
      { new: true }
    );
    res.json({ status: 'Drug updated in inventory', inventory });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Error updating drug in inventory' });
  }
});

// Delete a drug from the inventory
router.delete("/:id", async (req, res) => {
  try {
    await Inventory.findByIdAndDelete(req.params.id);
    res.json({ status: "Drug deleted from inventory" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Error deleting drug from inventory" });
  }
});

module.exports = router;
