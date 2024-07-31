const userService = require("../services/userService");
const auth = require("../middlewares/auth");
const validation = require("../validators/userValidation");
const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();

// Register new organiser:-
const registerUser = async (req, res) => {
  try {
    const { error } = validation.validateNewUser(req.body);
    console.log(error);
    if (error)
      return res
        .status(400)
        .json({ status: false, message: error.details[0].message });
    
    let { name, email, password } = req.body;
    name = name.toLowerCase().trim();
    email = email.toLowerCase().trim();
    
    const existingEmail = await userService.isExistingEmail(email);
    if (existingEmail) {
      return res
        .status(404)
        .json({ status: false, message: "This email is already in use" });
    }
    
    const hashPassword = await auth.hashedPassword(password);
    const userData = {
      name,
      email,
      password: hashPassword,
    };
    
    const userInfo = await userService.createNewUser(userData);
    
    return res.status(201).json({
      status: true,
      message: "User registered successfully",
      data: userInfo,
    });
    
  } catch (error) {
    console.log(error);
    return res.status(500).send({ status: false, message: error.message });
  }
};

// Login existing organiser(user):-
const loginUser = async (req, res) => {
  const { error } = validation.validateLoginUser(req.body);
  if (error)
    return res
      .status(400)
      .json({ status: false, message: error.details[0].message });
  
  let { email, password } = req.body;
  email = email.toLowerCase().trim();
  
  const findUser = await userService.isExistingEmail(email);
  if (!findUser)
    return res.status(404).json({
      status: false,
      message: `User is not registered with this ${email}`,
    });
  
  const matchPassword = await auth.comparePassword(password, findUser.password);
  if (!matchPassword) {
    return res.status(403).json({ status: false, message: "Wrong password" });
  }
  
  const token = auth.generateToken({
    email: findUser.email,
    id: findUser._id,
  });
  
  return res.status(200).json({
    status: true,
    message: "Logged in successfully",
    token: token,
    data: findUser,
  });
};

module.exports = { registerUser, loginUser };
