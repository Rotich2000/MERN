const mongoose = require("mongoose");

const userShema = mongoose.Schema(
  {
    name: { type: String, required: [true, "Please add name!"] },
    email: {
      type: String,
      required: [true, "Please add email!"],
      unique: true,
    },
    password: { type: String, required: [true, "Please add a password!"] },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userShema);
