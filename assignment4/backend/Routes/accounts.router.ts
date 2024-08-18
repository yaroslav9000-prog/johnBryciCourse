import {Request, Response, Router} from "express";
import { accountOperationModel } from "../utils/accounts/accounts.model";

export const accountOperations = Router();

accountOperations.get("/:accountNum", async (req: Request, res: Response)=>{
    const currNum = req.params.accountNum;
    
    const resultsForID: any[] = []; 
    (await accountOperationModel.find({accountNum: currNum})).map((item)=> resultsForID.push(item));
    res.status(200).json({"results": resultsForID});
})
accountOperations.post("/", async(req: Request, res: Response)=>{
    const currOperation = {accountNum: req.params.accountNum, ...req.body};
    await accountOperationModel.create(currOperation);
    return res.status(200).json({"msg": "your operation was added"});
})