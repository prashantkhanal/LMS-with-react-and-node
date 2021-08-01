const User = require('../models/user');
const { hashPassword } = require('../utils/auth');

const register = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    //BUG Cheacking the user
    if (!fullName) return res.status(400).json({ message: 'Name is required' });

    if (!password || password.length < 6)
      return res.status(400).json({
        message:
          'Password is required and password should be atleast 6 character long',
      });

    //BUG Checking the email

    let validateEmail = await User.findOne({ email }).exec();
    if (validateEmail)
      return res.status(400).json({ message: 'Email is already taken' });

    //BUG hashing the password
    const hashedPassword = await hashPassword(password);

    //BUG saving the user in database
    const user = new User({
      fullName,
      email,
      password: hashedPassword,
    });
    await user.save();
    return res.status(201).json({ message: 'User Create sucessfully' });
    console.log('User data' + user);
  } catch (error) {
    console.log('Error' + error);
    return res.status(400).json({ message: 'Error. Please try again Later' });
  }
};

module.exports = register;
