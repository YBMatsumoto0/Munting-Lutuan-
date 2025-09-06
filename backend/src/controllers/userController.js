import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import {  findUserByUsername  /*createUser,*/} from "../models/userModel.js";

/*
export const register = async (req, res) => { 
  try {
    const { username, password, role_id } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);
    const userId = await createUser(username, hashedPassword, role_id);

    res.status(201).json({ message: "User registered", userId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}; for future enhancement */

// login 
export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await findUserByUsername(username);

    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    res.json({
      message: "Login successful",
      token,
      user: {
        id: user.id,
        username: user.username,
        role: user.role
      },
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};