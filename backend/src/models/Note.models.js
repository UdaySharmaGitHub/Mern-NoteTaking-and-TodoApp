import mongoose from "mongoose"
// import { User } from "./User.models.js"

const noteSchema =new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    }
})

export const Note = mongoose.model("Note",noteSchema);