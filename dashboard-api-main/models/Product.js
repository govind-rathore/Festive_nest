const mongoose = require("mongoose");
const Schmea = mongoose.Schema;

const ProductModel = new Schmea({
  Event_Name: {
    type: String,
    required: true,
  },
  Qrganizer_contact_number: {
    type: Number,
    required: false,
  },
  Hosted_By: {
    type: String,
    required: true,
  },
  Event_Type: {
    type: String,
    required: true,
  },
  Volunteers_Needed: {
    type: String,
    required: true,
  },

  Start_Time: {
    type: String,
    required: true,
  },

  End_Time: {
    type: String,
    required: true,
  },
  Event_Location: {
    type: String,
    required: true,
  },
  Email_Address: {
    type: String,
    required: true,
  },
   Sponsers_Name: {
    type: String,
    required: true,
  },
  Event_Date: {
    type: Date,
    required: true,
  },
  Ticket_Type: {
    type: String,
    required: true,
  },
  Ticket_URL: {
    type: String,
    required: true,
  },
  Event_Description: {
    type: String,
    required: true,
  },
  Image: {
    type: String, 
    required: true,
  },


  
},{timestamps:true});

module.exports = mongoose.model("products", ProductModel);
