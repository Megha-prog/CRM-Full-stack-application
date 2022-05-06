const express = require("express");
const serverConfig = require("./configs/server.config");
const app = express();
const dbConfig = require("./configs/db.config");
const mongoose  = require("mongoose");

mongoose.connect(dbConfig.DB_URL ,()=>{
  console.log("Mongoose connected");
})

require('./routes/auth.route')(app);
//  start the express server
app.listen(serverConfig.PORT,()=>{
  console.log("Application has started on the serverPort ",serverConfig.PORT);
})
