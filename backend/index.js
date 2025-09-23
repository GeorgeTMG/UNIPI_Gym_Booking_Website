import express from "express";
import cors from "cors";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

import User from "./models/User.js"

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

// Connect to database
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

// Register
app.post("/register", async (req, res) => {
  try {
    const { firstName, lastName, username, email, password, country, city, address } = req.body;

    // Hash the password
    const salt = await bcrypt.genSalt(10); // generate random string to add to password
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      firstName,
      lastName,
      country,
      city,
      address,
      email,
      username,
      password: hashedPassword,
      role: "pending"
    });

    await newUser.save();

    // Respond with success (201 because resource is created but it awaits admin approval)
    res.status(201).json({ message: "Registration successful, awaiting admin approval"});
  } catch (err) {
    // Respond with error
    res.status(500).json({ error: "Registration failed" });
  }
});

// Login
app.post("/api/auth/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find user
    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ message: "Invalid username or password" });

    // Check password
    const isMatch = await bcrypt.compare(password, user.passwordHash);
    if (!isMatch) return res.status(400).json({ message: "Invalid username or password" });

    // If account not approved yet
    if (user.role === "pending") {
      return res.status(403).json({ message: "Your account is awaiting admin approval." });
    }

    // Create JWT
    const token = jwt.sign(
      { id: user._id, role: user.role }, 
      process.env.JWT_SECRET, 
      { expiresIn: "1h" }
    );

    res.json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        username: user.username,
        role: user.role
      }
    });

  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
