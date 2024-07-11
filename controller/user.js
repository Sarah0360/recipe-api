import bcrypt from "bcrypt";
import { UserModel } from "../models/user.js";


// NOTE: the concept of Signup,login&logout doesn't exist in Basic Authentication
export const register = async (req, res, next) => {
  try {

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
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, username, phone, password } = req.body;
    // Find a User using their Unique Identifier
    const user = await UserModel.findOne({
      $or: [
        { email: email },
        { username: username },
        { phone: phone },
      ]
    });
    if (!user) {
      res.status(401).json('No User found');
    } else {
      // Verify their Pasword
      const correctPassword = bcrypt.compareSync(password, user.password);
      if (!correctPassword) {
        res.status(401).json('Invalid Credentials');
      } else {
        // Generate a Session For them
        req.session.user = { id: user.id }
        // Return response
        res.status(200).json('Login Successful')
      }
    }
  } catch (error) {
    next(error);
  }
};

export const logout = async (req, res, next) => { 
try {
  // Destroy User Session
  req.session.destroy();
  // Return Response
  res.status(200).json('Logout Successfully')
} catch (error) {
  next(error);
}
};


export const profile = async (req, res, next) => {
  try {
    // Find User By Id
    const user = await UserModel
      .findById(req.session.user.id)
      .select({ password: false });
    // Return response
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
}










// export const profile = async () => {
//   // Find User By Id
// const user = await UserModel.findById(req.session.user.id);
// // Return response
// res.status(200).json(user);
// }