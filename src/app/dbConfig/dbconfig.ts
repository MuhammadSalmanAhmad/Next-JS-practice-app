import mongoose from "mongoose";

export async function connect() {
  try {
    await mongoose.connect(
     // "mongodb+srv://salman:salman123@cluster0.wyv5d.mongodb.net/"
     process.env.mongo_uri!
    );
    const connection = mongoose.connection
    connection.on("error", console.error.bind(console, "connection error:"));
  } catch (error) {
    console.log("Error while connecting to database", error);
  }

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
