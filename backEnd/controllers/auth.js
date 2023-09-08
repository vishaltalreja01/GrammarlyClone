const jwt = require("jsonwebtoken");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const secretKey = "Damnnn";

exports.loginUser = async (req, res) => {
  try {
    const user = req.body;
    const foundUser = await User.findOne({ email: user.email });
    if (!foundUser) {
      res.status(404).send( "Invalid Credntials");
      return;
    }

    const match = await bcrypt.compare(user.password, foundUser.password);
    if (!match) {
      res.status(401).send("Incorrect Password");
      return;
    }
    //login
    const token = jwt.sign({ id: foundUser._id, ...user }, secretKey, {
      expiresIn: "3600s",
    });
    res
      
      .cookie('access_token', token)
      .status(200)
      .send({ message: "Logged in successfully 😊 👌" });
  } catch (err) {
    res.send(err);
  }
};

exports.signupUser = async (req, res) => {
  try {
const {name,email,password} = req.body;

    if(!name||!email||!password){
res.status(401).send("Please enter all required fields")
return;
    }

    const usersData = req.body;
    console.log({ usersData });

    //check if already a user with this email is already there
    const user = await User.findOne({ email: usersData.email });

    if (user) {
      res.status(400).send("User already Present");
      return;
    }

    const myPlaintextPassword = usersData.password;
    const hash = await bcrypt.hash(myPlaintextPassword, saltRounds);
    // Store hash in your password DB.
    const updatedUser = {
      name: usersData.name,
      email: usersData.email,
      phone: usersData.phone,
      password: hash,
    };
    //Store the user in database
    await User.create(updatedUser);
    res.send({ message: "User signed up successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Internal server error" });
  }
};
