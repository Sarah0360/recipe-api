import { Schema, model } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";

const userSchema = new Schema({
    name: { type: String, required: true },
    userName: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, unique: true , required: true},
    password: { type: String, required: true },
},{
timestamps: true
})

userSchema.plugin(toJSON)
export const UserModel = model('User', userSchema);