import express from "express";
import cors from "cors";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

import User from "./models/User.js"

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

// Connect to database
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

app.post("/register", async (req, res) => {
  try {
    const { firstName, lastName, username, email, password, country, city, address } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

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

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
