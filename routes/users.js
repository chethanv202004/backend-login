const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/login_page_db");

const useschema=mongoose.Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  dob: {
    type: Date,
    required: true
  },
  place: {
    type: String,
    required: true
  },
  pincode: {
    type: String,
    required: true
  },
  educationqualification: {
    type: String,
    required: true
  }
})

module.exports=mongoose.model("login",useschema);