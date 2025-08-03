import bcrypt from "bcrypt";
import { Login, User } from "../model/user.js";

const loginHandler = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (email == "" || !email?.trim()) {
      return res.status(400).json("email is required");
    }

    if (password?.trim() == "" || !password?.trim()) {
      return res.status(400).json("password is required");
    }

    const userExisit = await User.findOne({ email });
    console.log(userExisit?.password, "?????");
    if (!userExisit) {
      return res.status(404).json("user not found");
    }

    const isMatch = await bcrypt.compare(password, userExisit.password);

    if (!isMatch) {
      return res.status(40).json("Invalid credentials");
    }

    return res.status(200).json("login successfully");
  } catch (error) {
    console.log(error);
  }
};

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (name == "" || !name?.trim()) {
      res.status(400).json("name is required");
      return;
    }

    if (email?.trim() == "" || !email?.trim()) {
      res.status(400).json("email is required");
      return;
    }

    const userExisit = await User.findOne({ email });
    if (userExisit) {
      res.status(404).json("user already exists");
      return;
    }
    const hasspassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      name: name?.trim(),
      email: email?.tolowerCase().trim(),
      password: hasspassword,
    });

    if (!newUser) {
      return res.status(400).json("user not created");
    } else {
      res.status(200).json("user created successfully");
    }
  } catch (error) {
    console.log("error from register", error);
    res.status(500).json("Internal server error", error);
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    if (users.length === 0) {
      return res.status(404).json("No users found");
    }
    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json("Internal server error");
  }
};

export { loginHandler, register, getAllUsers };
