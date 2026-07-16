import User from "../models/user.model.js";
import Message from "../models/message.model.js";
import { getReceiverSocketId, io } from "../lib/socket.js";
import { hasImageKitConfig , uploadChatMedia } from "../lib/imageKit.js";
export async function getUsersForSidebar(req,res){
    try {
        
        const loggedInUserId = req.user._id;
        const filteredUsers = await User.find({_id : {$ne : loggedInUserId}}).select("-clerkId")

       res.status(200).json(filteredUsers)

    } catch (error) {
             console.log("Error in getUsersForSidebar" , error.message)
             res.status(500).json({message: "Internal Server Error "})
    }
}


export async function getConversationsForSidebar(req,res){


    try {
        const loggedInUserId = req.user._id;
        
    const conversations = await Message.aggregate([


        {$match : {$or : [{senderId : loggedInUserId} , {receiverId : loggedInUserId}]}},
        {
            $group : {
                _id : {$cond :[{$eq : ["$senderId" , loggedInUserId]} , "$receiverId" , "$senderId"]},
                lastMessageAt : {$max:"$createdAt"}
            }
        },

        {$sort : {lastMessageAt : -1}},

        {$lookup : {from: "users" , localField : "_id" , foreignField : "_id" , as : "user"}},
        {$replaceRoot : {newRoot: {$first : "$user"}}},

        {$project : {clerkId : 0}}


    ])

    res.status(200).json(conversations)
        
} catch (error) {
     console.log("Error in getConversationsForSidebar" , error.message)
     res.status(500).json({
      message: "internal Server Error"
     })
}
}



export async function getMessages(req,res){
    try {
        const {id : userToChatId} =req.params;
        const myId = req.user._id;


        const messages =await Message.find({
            $or:[
                {senderId : myId , receiverId : userToChatId},
                {senderId : userToChatId , receiverId : myId}
            ]
        }).sort({createdAt : 1})



        res.status(200).json(messages)
    } catch (error) {
             console.log("Error in getMessages" , error.message)
     res.status(500).json({
      message: "internal Server Error"
     })
    }
}


export async function sendMessage(req, res){
    try {
        

        const text = req.body.text?.trim();
        const {id: receiverId} =req.params;
        const senderId = req.user._id;

          if(!text && !req.file){
    return res.status(400).json({
        message:"Message cannot be empty"
    })
}

        if(req.file && !hasImageKitConfig()) {
             return res.status(500).json({message: "Media upload is not configured"})
        }


        let imageUrl;
        let videoUrl;

        if(req.file){
              const url = await uploadChatMedia(req.file);
        if(req.file.mimetype.startsWith("video/")) videoUrl =url;
        else imageUrl =url;
        }
      


        const newMessage = new Message ({
            senderId,
            receiverId,
            text,
            image: imageUrl,
            video : videoUrl,

        })

        await newMessage.save()


    const receiverSocketId = getReceiverSocketId(receiverId);

    if (receiverSocketId) {
      io.to(receiverSocketId).emit("newMessage", newMessage);
    }

        

        res.status(201).json(newMessage)

    } catch (error) {
                     console.log("Error in sendMessage" , error.message)
     res.status(500).json({
      message: "internal Server Error"
     })
    }
}