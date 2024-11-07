const express = require("express");
const router = express.Router();
const User = require("../models/User");



// POST - CREATE USER added
// router.post('/', async (req, res) => {
//   try {
//     const { name, email, password } = req.body;
    
//     // Check if user already exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: 'User already exists' });
//     }
    
//     // Create new user
//     const newUser = new User(req.body);
//     await newUser.save();

//     res.status(201).json(newUser);
//   } catch (error) {
//     console.error("Error creating user:", error);
//     res.status(500).json({ message: 'Failed to create user', error: error.message });
//   }
// });


// DELETE 

router.delete("/:id", async (req, res) => {
    try {
      await User.findByIdAndDelete(req.params.id);
  
      res.status(200).json("The user has been deleted");
    } catch (error) {
      res.status(500).json("You are not authorized for this operation");
    }
  });

  //GET ALL USERS
  
  router.get("/", async (req, res) => {
    try {
      const users = await User.find().sort({ createdAt: -1 });
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json(error);
    }
  });

 module.exports = router;
