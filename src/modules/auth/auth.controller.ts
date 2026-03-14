import { Request, RequestHandler, Response } from "express";
import { authService } from "./auth.services";


const createUser:RequestHandler=async(req,res)=>{
    
    try {

        const result=await authService.createUser(req.body)
        res.status(201).json(result)
        
    } catch (error) {
        res.status(200).json(error)
        
    }



}

const loginUser:RequestHandler=async(req,res)=>{
    try {
        
        const result=await authService.loginUser(req.body)
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json(error)
    }

}

const getCurrentUser=async(req:Request,res:Response)=>{
    const result= await authService.getCurrentUser()

}

export const authContorller={
    createUser,
    loginUser,
    getCurrentUser
}