

const mongoose = require("mongoose");
const config = require("../configs/index.js").default;
const logger = require("./logger.js");

let database;

const connect = async () => {
    const MONGODB_URL = config.DB_CONNECTION_STRING;

    if (database) return;

    mongoose.connect(MONGODB_URL)
      .then((connection) => {
        database = connection;
        logger.info("Database Synced");
      })
      .catch((err) =>{
        logger.error(err.message)
      })
}

 
module.exports= {connect};