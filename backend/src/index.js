import {app} from './app.js'
import connectDB from './db/db.js'
import dotenv from 'dotenv'
import cors from 'cors';
app.use(cors())
dotenv.config({
    path:'./.env'
})

// this is good approach to connect the DB which return promise
connectDB().then(()=>{
    const port = process.env.PORT || 3000;
    app.listen(port,()=>{
        console.log(`Server Listing at the port ${port}`);
    })
}).catch((error)=> console.log(`Unable to connect the mongoDB ${error}`));
