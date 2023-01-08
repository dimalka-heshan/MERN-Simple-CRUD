const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    const dbConStr = process.env.MONGODB_URL;
    mongoose.connect(dbConStr, () => {
      console.log("Database connected");
    });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

module.exports =  { connectDB };




