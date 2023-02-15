import { model } from "mongoose";
import animalSchema from "./schema.js";

const animalModel = model('animals',animalSchema)

export default animalModel;