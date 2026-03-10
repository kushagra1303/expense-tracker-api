import User from "../models/user.model";
import {hashPassword,comparePassword} from "../utils/hash";
import {generateToken} from "../utils/jwt";

export const signup = async (data:any) => {

 const existing = await User.findOne({email:data.email});

 if(existing){
  throw new Error("User already exists");
 }

 const password = await hashPassword(data.password);

 const user = await User.create({
  name:data.name,
  email:data.email,
  password
 });

 return user;
};


export const login = async (email:string,password:string) => {

 const user = await User.findOne({email});

 if(!user){
  throw new Error("Invalid credentials");
 }

 const match = await comparePassword(password,user.password);

 if(!match){
  throw new Error("Invalid credentials");
 }

 const token = generateToken(user._id.toString());

 return token;

};