import express from "express";
import  {protectRoute}  from "../middleware/auth.middleware.js";
import  {getConversationsForSidebar, getMessages, getUsersForSidebar, sendMessage}  from "../controllers/message.controller.js";
const router = express.Router()

import {upload}  from "../middleware/multer.middleware.js"



router.use(protectRoute)

router.get('/users'  , getUsersForSidebar)
router.get('/conversations' , getConversationsForSidebar)
router.get('/:id'  , getMessages)
router.post('/send/:id' , upload.single("media") , sendMessage)


export default router;