import { verifyUser } from "../middleware/VerifyUser.middleware.js";
import { Note } from "../models/Note.models.js";
import {Router} from 'express'
const router = Router();


router.post("/add",verifyUser,async(req,res)=>{
    try {
        const {title,description}  =req.body;
        console.log(title,description) // only check that we reciving the data or not
        const newNote = new Note({
            title,description,userId:req.user.id
        })
        await newNote.save();
        return res.status(200).json({success:true , message:"Note Created Successfully"})
    } catch (error) {
        console.log(error);
        return res.status(401).json({success:false , message:"Error While Adding the Notes"})
    }
})

export default router;