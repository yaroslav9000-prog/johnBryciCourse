import {NextFunction, Request, Response } from "express";

export const logEvent= (req: Request, res: Response, next: NextFunction)=>{
    console.log(req.body, req.method, req.originalUrl);
    next();
}