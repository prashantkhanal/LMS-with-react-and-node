const User = require('../models/user');
const jwt = require('jsonwebtoken');

const { hashPassword, compareHashPassword } = require('../utils/auth');

exports.register = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    //*------------->Cheacking the user--------------->
    console.log('backend nodejs');
    if (!fullName) return res.status(400).json({ message: 'Name is required' });
    if (!password || password.length < 6)
      return res.status(400).json({
        message:
          'Password is required and password should be atleast 6 character long',
      });
    //*------------->Checking the email--------------->

    let validateEmail = await User.findOne({ email }).exec();
    if (validateEmail)
      return res.status(400).json({ message: 'Email is already taken' });
    //*------------->hashing the password--------------->

    const hashedPassword = await hashPassword(password);
    //*------------->saving the user in database--------------->

    const user = new User({
      fullName,
      email,
      password: hashedPassword,
    });
    await user.save();
    return res.status(201).json({ message: 'User Create sucessfully' });
  } catch (error) {
    console.log('Error' + error);
    return res.status(400).json({ message: 'Error. Please try again Later' });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    //*------------->Checking the user in the database--------------->

    const user = await User.findOne({ email }).exec();
    if (!user) return res.status(400).json({ message: 'User not found' });

    //*------------->Comparing the password--------------->

    const match = await compareHashPassword(password, user.password);
    if (!match) return res.status(400).json({ message: 'Invalid Credentails' });

    //*------------->Create the json web token to user--------------->

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '7d',
    });

    //*------------->returning to the user token and user exculuding the cockie--------------->

    user.password = undefined;
    //send the cockie
    //*------------->--------------->

    res.cookie('token', token, {
      httpOnly: true,
    });
    //send the user as a json response
    res.json({ data: user });
  } catch (error) {
    console.log('Error', error);
    return res.status(400).json({ message: 'Please try again' });
  }
};

exports.logout = async (req, res) => {
  try {
    //clearing the cookie
    res.clearCookie('token');
    return res.status(200).json({ message: 'Logout successful' });
  } catch (err) {
    console.log('Error', err);
  }
};
