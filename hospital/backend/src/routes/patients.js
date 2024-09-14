const router = require("express").Router();
let patient = require("../api/model/patient.js");
var bcrypt = require('bcryptjs');

router.route(`/add`).post((req, res) => {
    const name = req.body.name;
    const age = Number(req.body.age);
    const gender = req.body.gender;
    const email = req.body.email;
    const password = req.body.password;
    const birthday = Date(req.body.birthday);
    const IDnumber = Number(req.body.IDnumber);
    const TPnumber = Number(req.body.TPnumber);
    const address = req.body.address;

    const newPatient = new patient({
        
        name,
        age,
        gender,
        email,
        password,
        birthday,
        IDnumber,
        TPnumber,
        address
    })

    newPatient.save().then(() => {
        return res.status(200).json({
        success:"Request Send"
    });
    }).catch((err) => {
        console.log(err);
    })
})

router.post(`/login`, async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await patient.findOne({ email });
  
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      if (user.password !== password) {
        return res.status(401).json({ error: 'Invalid password' });
      }
  
      // Password matches, send success response
    //   return res.status(200).json({ message: 'Logged in successfully' });
    const userId = user._id;
    return res.status(200).json({ message: 'Logged in successfully', userId });

    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  });

  router.get(`/patient/:id`, (req,res) =>{
    console.log('hi2');
    let userID = req.params.id;
    console.log('hi3');
    patient.find({_id : userID}).then((details)=>{
        return res.status(200).json({
            success:true,
            existingRequests:details
        });
    });
})


router.post(`/login`, async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await patient.findOne({ email });
      console.log(email);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      const isMatch = await bcrypt.compare(password, user.password);
      console.log(user.password);
  
      if (!isMatch) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
  
      res.json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  });

router.route(`/login`).post((req, res) => {
    const { username, password } = req.body;
  
    // Check if user exists
    const user = patient.find(user => user.email === username && user.password === password);
    if (!user) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }
  
    // If user exists, log them in
    req.session.user = user;
    res.json({ success: true });
});


router.post(`/add`,(req,res) =>{
    let newPatient = new patient(req.body);
    console.log("hi6");
    newPatient.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Request Send"
        });
    });
    console.log("hi7");
});

router.route("/get").get((req,res) => {
    patient.find().then((patients) => {
        res.json(patients)
    }).catch((err) => {
        console.log(err)
    })
})

router.route("/update/:id").put(async (req, res) => {
    let userID = req.params.id;
    const {name, age, gender, email, password, birthday, IDnumber, TPnumber, address} = req.body;

    const updatePatient = {
        name,
        age,
        gender,
        email,
        password,
        birthday,
        IDnumber,
        TPnumber,
        address
    }
    
    const update = await patient.findByIdAndUpdate(userID, updatePatient).then(() => {

    res.status(200).send({status: "User updated"})
    }).catch((err) => {
      console.log(err);
      res.status(500).send({status: "Error with updating data", error: err.message});
    })
})


router.route("/delete/:id").delete(async(req, res) => {
    let userID = req.params.id;
    await patient.findByIdAndDelete(userID).then(() => {
        res.status(200).send({status: "User deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete user", error: err.message});
    })
})

router.route("/get/:id").get(async (req, res) => {
    let userID = req.params.id;
    const user = await patient.findById(userID).then((patient) => {
        res.status(200).send({status: "User fetched", patient})
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with user", error: err.message});
    })
})




module.exports = router;