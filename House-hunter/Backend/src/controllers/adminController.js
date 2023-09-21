const asyncHandler = require('express-async-handler');
const { secret } = require('../controllers/agentController');
const Admin = require('../models/adminModel');
const Agent = require('../models/agentModel');
const jwt = require('jsonwebtoken');

//@desc register Admin
//@router POST /api/admin
//public
const adminSignUp = asyncHandler(async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    res.status(400);
    throw new Error('All fields are required!!');
  }

  // Check if admin exists
  const admins = await Admin.find();
  if (admins.length !== 0) {
    res.status(401);
    throw new Error('Only one Admin account is allowed!!');
  }

  // Create user without hashing the password
  const admin = await Admin.create({
    username,
    password,
  });

  if (admin) {
    res.status(201).json({ admin });
  } else {
    res.status(400);
    throw new Error('Something Went Wrong!!');
  }
});

//@desc Admin login
//@router POST /api/admin
//public
const adminLogin = asyncHandler(async (req, res) => {
  const { username, password } = req.body;
  const admin = await Admin.findOne({ username: username });
  if (admin && admin.password === password) {
    res.status(200).json({
      _id: admin.id,
      username: admin.username,
      token: generateToken(admin.id),
    });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

//generate token
const generateToken = (id) => {
  return jwt.sign({ id }, secret, {
    expiresIn: '1d',
  });
};

//fetch agents by admin
const allAgents = asyncHandler(async (req, res) => {
  const agents = await Agent.find();
  if (agents) {
    res.status(200).json(agents);
  } else {
    res.status(404).json('No agents found.');
  }
});

module.exports = {
  adminSignUp,
  adminLogin,
  allAgents,
};
