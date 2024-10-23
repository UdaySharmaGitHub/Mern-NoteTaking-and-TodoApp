import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async()=>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`Successfully connected to the MONGODB ${connectionInstance}`)
    } catch (error) {
        console.log(`Unable to connect with DB ${error}`);
        process.exit(1);
    }
}
export default connectDB;