import mongoose from "mongoose";
import config from "./config.js"




mongoose
  .connect(config.mongo_uri)
  .then(() => console.log("Conectado a la DB"))
  .catch((error) => console.log(error));