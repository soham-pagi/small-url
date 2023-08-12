require("dotenv").config();
const mongoose = require("mongoose");

const mongoDBUri = `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@mycluster.ngdhthx.mongodb.net/${process.env.MONGO_DB_NAME}?retryWrites=true&w=majority`;

console.log(mongoDBUri);

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(mongoDBUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

module.exports = connectDB;
