import express from "express";
import User from "../models/User.js";

const router = express.Router();

// Hiển thị danh sách người dùng
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.render("index", { users });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Thêm người dùng mới
router.post("/add", async (req, res) => {
  const { name, email, phone, city, role, age } = req.body;
  const newUser = new User({ name, email, phone, city, role, age });
  try {
    await newUser.save();
    res.redirect("/");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Tìm kiếm người dùng
router.get("/search", async (req, res) => {
  const { name, email, role, minAge, maxAge } = req.query;
  const query = {};
  if (name) query.name = { $regex: name, $options: "i" };
  if (email) query.email = { $regex: email, $options: "i" };
  if (role) query.role = role;
  if (minAge) query.age = { $gte: minAge };
  if (maxAge) query.age = { $lte: maxAge };

  try {
    const users = await User.find(query);
    res.render("index", { users });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Chi tiết người dùng
router.get("/user/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    res.render("detail", { user });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

export default router;
