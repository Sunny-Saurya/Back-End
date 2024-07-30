import mongoose from "mongoose"

// small schema

const hospitalSchema  = new mongoose.Schema({

    name : {
      type : String,
      required : true,
    },

    addressLine1 : {
      type : String,
      required : true,
    },

    city : {
      type : String,
      required : true,
    },

    pincode : {
      type : String,
      required : true,
    },

    specializedIn : 
      [
        {
          type : String
        }
      ],

})

const doctorSchema = new mongoose.Schema({

  name : {
    type : String,
    required : true
  },

  salary : {
    type : Number,
    required : true
  },

  qualification : {
    type : String,
    required : true
  },

  experienceInYears: {
    type : Number,
    default : 0
  },

  worksInHospitals : {
    type : [
      {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Hospital"
      },
    ]
  }

},{timestamps : true})

export const Doctor = mongoose.model("Doctor", doctorSchema)