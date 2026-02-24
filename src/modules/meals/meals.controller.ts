import { RequestHandler } from "express"
import { mealsService } from "./meals.service"

const createMeals:RequestHandler=async(req,res)=>{

        try {
            const result= await mealsService.createMeals(req.body)
            res.status(201).json(result)
        } catch (error) {
            res.status(400).json(error)
        }
}

const filterIngMeals:RequestHandler=async(req,res)=>{
    

}


export const mealsController={
    createMeals,
    filterIngMeals
}