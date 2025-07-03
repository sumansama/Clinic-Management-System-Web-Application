import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minLength: [3, "First Name Must Contain At Least 3 Characters!"],
  },
  lastName: {
    type: String,
    required: true,
    minLength: [3, "Last Name Must Contain At Least 3 Characters!"],
  },
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "Provide A Valid Email!"],
  },
phone: {
  type: String,
  required: true,
  validate: {
    validator: function (value) {
      return /^\d{11}$/.test(value); // exactly 11 digits
    },
    message: "Phone Number Must Contain Exactly 11 Digits!",
  },
},

  message: {
    type: String,
    required: true,
    minLength: [10, "Message Must Contain At Least 10 Characters!"],
  },
});

export const Message = mongoose.model("Message", messageSchema);
