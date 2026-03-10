import { Request, Response } from "express";
import * as authService from "../services/auth.service";

export const signup = async (req: Request,res: Response) => {

 const user = await authService.signup(req.body);

 res.json(user);

};

export const login = async (req: Request,res: Response) => {

 const token = await authService.login(
  req.body.email,
  req.body.password
 );

 res.json({token});

};