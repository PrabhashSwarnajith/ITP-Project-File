const express = require("express");
const router = express.Router();
const User = require("../models/userModel");


//add user

// http://localhost:3000/users/add

router.route("/add").post((req, res) => {
  let name = req.body.name;
  let age = Number(req.body.age);
  let gender = req.body.gender;
  let contact = Number(req.body.contact);
  let nic = req.body.nic;
  let email = req.body.email;
  let password = req.body.password;

  let newUser = new User({
    name: name,
    age: age,
    gender: gender,
    contact: contact,
    nic: nic,
    email: email,
    password: password,
  });

  newUser
    .save()
    .then(() => {
      res.status(200).json({ status: "User added successfully" });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({ status: "Error adding user"+newUser });
    });
});

//get all users 
// http://localhost:3000/users

router.route("/").get((req, res) => {
  User.find()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({ status: "Error getting users" });
    });
});

//get user by id
// http://localhost:3000/users/userFuckingIdHere
router.route("/:id").get((req, res) => {
  let id = req.params.id;
  User.findById(id)
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({ status: "Error getting user" });
    });
});

// router.route("/:id").put((req, res) => {
//   let id = req.params.id;
//   let name = req.body.name;
//   let age = Number(req.body.age);
//   let gender = req.body.gender;
//   let contact = Number(req.body.contact);
//   let nic = req.body.nic;
//   let email = req.body.email;
//   let password = req.body.password;

//   User.findById(id)
//     .then((user) => {
//       user.name = name;
//       user.age = age;
//       user.gender = gender;
//       user.contact = contact;
//       user.nic = nic;
//       user.email = email;
//       user.password = password;

//       user
//         .save()
//         .then(() => {
//           res.status(200).json({ status: "User updated successfully" });
//         })
//         .catch((err) => {
//           console.log(err);
//           res.status(400).json({ status: "Error updating user" });
//         });
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(400).json({ status: "Error updating user" });
//     });
// });

//update user 
// http://localhost:3000/users/update/userFuckingIdHere
router.put('/update/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(user);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});


//delete user
// http://localhost:3000/users/delete/userFuckingIdHere

router.delete('/delete/:id', async (req, res) => {
  try {
    const userId = req.params.id;
    const deletedUser = await User.findByIdAndDelete(userId);
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.json({ message: "User deleted successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
});







// router.route("/:id").delete((req, res) => {
//   let id = req.params.id;
//   User.findByIdAndDelete(id)
//     .then(() => {
//       res.status(200).json({ status: "User deleted successfully" });
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(400).json({ status: "Error deleting user" });
//     });
// });

module.exports = router;
