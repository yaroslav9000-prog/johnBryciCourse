import mongoose, { Schema, model } from "mongoose";
import { AccountOperation } from "./accounts.interface";
const result = require("dotenv").config();
const env = result.parsed;
const accountOperationSchema = new mongoose.Schema ({
    accountNum : {
        type: Number,
        required: true
    },
    operationType: {
        type: Object,
        required: true
    }
    
     
}, {    versionKey: false,
        toJSON: {virtuals: false},
        collection: env.ACCOUNTS_COLLECTION})

export const accountOperationModel = mongoose.model<AccountOperation>("AccountOperations",accountOperationSchema);
