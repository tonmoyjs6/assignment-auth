import { RequestHandler } from "express";
import { providerProfileService } from "./providerprofile.service";




const createProviderProfile:RequestHandler=async(req,res)=>{

        try {
            const result= await providerProfileService.createProviderProfile(req.body)
            res.status(201).json(result)
        } catch (error) {
            res.status(400).json(error)
        }
}



const allProvider:RequestHandler=async(req,res)=>{

        try {
            const result= await providerProfileService.allProvider()
            res.status(200).json(result)
        } catch (error) {
            res.status(400).json(error)
        }
}



const singleProviderProfileaAndMeanus:RequestHandler=async(req,res)=>{
    const {id}=req.params 
    
     try {
        if(typeof id==="string"){
            const result= await providerProfileService.singleProviderProfileaAndMeanus(id)
            res.status(200).json(result)

        }
            
        } catch (error) {
            res.status(400).json(error)
        }

}

export const providerController={
    allProvider,
    createProviderProfile,
    singleProviderProfileaAndMeanus
}