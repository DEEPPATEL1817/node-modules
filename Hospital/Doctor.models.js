import mongoose from "mongoose"



const doctorSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    salary:{
        type:String,
        required:true
    },
    qualification:{
        type:String,
        required:true
    },
    experienceINYears:{
        type:String,
        default:0
    },
    worksInHospitals:[
        {
            types:mongoose.Schema.Types.ObjectId,
            ref:"Hospital",
        }
    ]
},{timestamps:true})

export const Doctor = mongoose.model("Doctor",doctorSchema)