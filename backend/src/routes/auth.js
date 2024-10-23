import { Router } from "express";
import bcrypt from "bcrypt";
import { User } from "../models/User.models.js";
import jwt from "jsonwebtoken";
const router = Router();

// Register User
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // console.log(email,name,password) // only use check that we get the response or not
    const user = await User.findOne({ email });
    if (user) {
      return res
        .status(401)
        .json({ success: false, message: "User Already Exist" });
    }
    // hashed the password
    const hashedPassword = await bcrypt.hash(password, 10);
    // console.log(hashedPassword) // check the crypted password
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    return res
      .status(200)
      .json({ success: true, message: "User Created Successfully" });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Error Adding User" });
  }
});

// Login Users
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    // console.log(email,password) // only use check that we get the response or not
    const user = await User.findOne({ email });
    // If user doesn't Exist
    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "User Not Exist" });
    }

    // Check the password using JWT
    const checkPassword = await bcrypt.compare(password, user.password);
    console.log(checkPassword); 
    
    //  if Password doesn't match
    if (!checkPassword) {
      return res
        .status(401)
        .json({ success: false, message: "Incorrect Password" });
    }

    // Generate Token with using the id the and ACCESS_TOKEN_SECRET
    const token =  jwt.sign({ id: user._id }, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
    });

    return res
      .status(200)
      .json({ success: true,token ,user:{name:user.name}, message: "User Logged in Successfully" });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Error While Logged in User" });
  }
});

export default router;
