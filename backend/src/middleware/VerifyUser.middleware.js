import jwt from 'jsonwebtoken'
import {User} from '../models/User.models.js'
export const verifyUser = async(req,res,next)=>{
    try{
        const token = req.headers.authorization.replace("Bearer ","");
        // console.log(token) // only check that we recives the header (token) or not 
        // Check if we receive the token or not
        if(!token){
            return res.status(401).json({success:false , message:"Unauthorized User"})
        }
        // decode the token and verify its
        const decodedToken = jwt.verify(token,process.env.ACCESS_TOKEN_SECRET)
        // console.log(decodedToken)  // print the decoded token for debugging and testing purpose

        // Check if we get the decoded token or not
        if(!decodedToken){
            return res.status(401).json({success:false , message:"Wrong Token User"})
        }

        //  extract the User._id which is stored as id:user._id from the jwt Token
        // console.log(decodedToken.id);   // Decoded User Id
        const user = await User.findById(decodedToken?.id)
        // console.log(user) // Check that we have user or not
        // Check that we get the user or not
        if(!user) {
            return res.status(401).json({success:false , message:"No User Exist"})
        }
        const newUser = {name:user.name , id:user._id}
        req.user =  newUser;
        next()

    }catch(error){
            return res.status(500).json({success:false , message:"Please Login User"})
    }
}