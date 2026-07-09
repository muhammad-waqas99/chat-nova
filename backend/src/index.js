import express from "express";
import cors from "cors";
import { clerkMiddleware } from '@clerk/express'
import dotenv from "dotenv";
import { connectDB } from "./lib/db.js";
import dns from "dns";
import path from "path"
import fs from "fs"


const publicDir = path.join(process.cwd() , "public")

dns.setServers(['8.8.8.8','1.1.1.1'])
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(clerkMiddleware())
app.use(cors({origin : process.env.FRONTEND_URL , credentials : true}));
app.use(express.json());




if (fs.existsSync(publicDir)){

  app.use(express.static(publicDir))
  app.get('/{*any}' , (req,res,next) =>{
        res.sendFile(path.join(publicDir, "index.html") , (err) => next(err))
  })
}
app.get("/health", (req, res) => {
  res.status(200).json({ ok: true });
});






async function startServer() {
  try {
    await connectDB();

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
  } catch (err) {
    console.error("Server failed to start:", err.message);
    process.exit(1);
  }
}

startServer();