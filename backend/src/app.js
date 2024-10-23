// importing Cookie Parser
// import cookieParser from 'cookie-parser';
// importing CORS
import cors from 'cors';
import express from 'express';
const app = express();

app.use(cors())
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({
    extended:true,limit:"50kb"
}))
// app.use(cookieParser());

// Routes
// Auth Router
import authrouter from './routes/auth.js'
app.use("/api/v1/auth",authrouter);
// Notes Router
import noteRouter from './routes/note.routes.js'
app.use("/api/v1/note",noteRouter)

export {app}