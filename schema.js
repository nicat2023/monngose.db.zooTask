import { Schema } from "mongoose";
const animalSchema = new Schema({
    name: String,
    type: String,
    country: String,
    gender: Boolean,
    age: Number
})
export default animalSchema;