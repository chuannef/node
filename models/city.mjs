import mongoose from "mongoose";
import User from '../models/user.mjs'; // Adjust the path if necessary
const Schema = mongoose.Schema;

const citySchema = new Schema({
  city: String,
  plate_no: String,
});

const City = mongoose.model("city", citySchema);

export default City