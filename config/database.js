const mongoose = require("mongoose");

const MONGODB = process.env.MONGODB_URL;
mongoose.set("strictQuery", true);

mongoose
  .connect(MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: process.env.DB_NAME,
  })
  .then(() => {
    console.log("Connect to MongooDB....");
  })
  .catch((err) => {
    console.log(err);
  });
