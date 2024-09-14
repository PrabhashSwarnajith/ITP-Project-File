const express = require("express");
const router = express.Router();

const Test = require("../models/testModel");


//add test
router.post("/add", async (req, res) => {
  try {
    const test = new Test({
      testCode: Number(req.body.testCode),
      testName: req.body.testName,
      testDescription: req.body.testDescription,     
      testPrice: Number(req.body.testPrice),
    });
    await test.save();
    res.json("Test added successfully");
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Error adding test" });
  }
});

//get all tests
router.get("/", async (req, res) => {
  try {
    const test = await Test.find();
    res.json(test);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Error getting test" });
  }
});



//get test by id
router.get('/:id', async (req, res) => {
  try {
    const testItem = await Test.findById(req.params.id);
    if (!testItem) {
      return res.status(404).json({ message: 'Test item not found' });
    }
    res.json(testItem);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

//update tests
router.put('/update/:id', async (req, res) => {
  try {
    const test = await test.findByIdAndUpdate(
      req.params.id,
      {
        testCode: Number(req.body.testCode),
        testName: req.body.testName,
        testDescription: req.body.testDescription,     
        testPrice: Number(req.body.testPrice),
      },
      { new: true }
    );
    res.json({ status: "Test updated", test });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Error updating test " });
  }
});



//delete test
router.delete("/:id", async (req, res) => {
    try {
      await Test.findByIdAndDelete(req.params.id);
      res.json({ status: "Drug deleted from Test" });
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Error deleting drug from Test" });
    }
  });

module.exports = router;
