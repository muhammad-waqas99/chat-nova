import mongoose from 'mongoose'
export async function connectDB() {
    try {
        const MONGO_DB_URI = process.env.MONGO_DB_URI;
        if (!MONGO_DB_URI) {
            throw new Error("MONGO_DB_URI is Required")
        }

        const con = await mongoose.connect(MONGO_DB_URI)
        console.log("MongoDB connected at :", con.connection.host)
    } catch (error) {
        console.log("Mongodb connection error ", error.message)
        process.exit(1)
    }
}