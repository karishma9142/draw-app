import { Request, Response } from "express";

export const Signin = async (req : Request , res : Response) => {
    try {
        
    } catch (error) {
        console.log(error);
        res.status(200).json({
            msg : "intsernal server error"
        })
    }
}