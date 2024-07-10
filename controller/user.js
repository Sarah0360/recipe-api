import bcrypt from "bcrypt";
import { UserModel } from "../models/user.js";


// NOTE: the concept of login&logout doesn't exist in Basic Authentication
export const register = async (req, res , next )=> {try {
    
        // Hash/ user password
        const hashedPassword = bcrypt.hashSync(req.body.password, 10);
        // Create a new user
        await UserModel.create({
            ...req.body, 
            password: hashedPassword
        });
        // Return response
        res.status(201).json('User registered successfully');
} catch (error) {
  next (error);  
}
}

const login = async ()=>{}

const logout =async () =>{}

const profile = async()=> {}
