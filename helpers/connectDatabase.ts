import mongoose from "mongoose";

export default async function connectDatabase() {
  try {
    // create mongodb connection
    mongoose.set("strictQuery", true);
    await mongoose.connect(process.env.MONGO_URI as string, {
      appName: "nubis logistics",
    });

    console.log("database connected");
  } catch (error) {
    console.error("database failed to connect");
    console.error(error);
    process.exit(1);
  }
}
