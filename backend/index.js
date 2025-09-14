import express from "express";
import cors from "cors";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

import Users from "./models/User.js"

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

    console.log({
      firstName,
      lastName,
      username,
      email,
      password: hashedPassword,
      country,
      city,
      address,
      role
    });

    // Respond with success (pretend)
    res.status(201).json({ message: "Registration successful" });
  } catch (err) {
    res.status(500).json({ error: "Registration failed" });
  }
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
