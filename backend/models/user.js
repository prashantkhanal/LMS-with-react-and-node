const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    fullName: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      trim: true,
      required: true,
      min: 6,
      max: 25,
    },
    picture: {
      type: String,
      default: '/avatar.png',
    },
    role: {
      type: [String],
      default: ['Subscriber'],
      enum: ['Subscriber', 'Instructor', 'Admin'],
    },
    stripe_account_id: {},
    stripe_seller: {},
    stripeSession: {},
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);
