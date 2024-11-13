import { verifyUser } from "../middleware/VerifyUser.middleware.js";
import { Note } from "../models/Note.models.js";
import {Router} from 'express'
const router = Router();

// to fetch the data from the notes;
router.get("/",verifyUser,async(req,res)=>{
    try{
        console.log(req.user.id)
        const notes  = await Note.find({userId : req.user.id});
        return res.status(200).json({success:true,notes,message:"Successfully get the data"});
    }catch(error){
        return res.status(500).json({success:false,message:"Something went Wrong"})
    }
})


// to add the notes routes
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

// to Edit the notes routes
router.put("/:id",verifyUser,async(req,res)=>{
    try {
        const {id} =req.params;
        const {title,description}  =req.body;
        console.log(id,title,description) // only check that we reciving the data or not
        //  passing the (id,{object}) or (id,req.body)
        const updateNote = await Note.findByIdAndUpdate(id,{title,description});
        console.log(updateNote)
        return res.status(200).json({success:true , message:"Note Created Successfully",updateNote})
    } catch (error) {
        console.log(error);
        return res.status(401).json({success:false , message:"Error While Editing the Notes"})
    }
})

// to Edit the notes routes
router.delete("/:id",verifyUser,async(req,res)=>{
    try {
        const {id} =req.params;
        // console.log(id) // only check that we reciving the data or not
        //  passing the (id,{object}) or (id,req.body)
        const DeleteNote = await Note.findByIdAndDelete(id);
        // console.log(DeleteNote) // return the new Notes after deleting the one
        return res.status(200).json({success:true , message:"Note Deleted Successfully",DeleteNote})
    } catch (error) {
        console.log(error);
        return res.status(401).json({success:false , message:"Error While Deleting the Notes"})
    }
})
export default router;