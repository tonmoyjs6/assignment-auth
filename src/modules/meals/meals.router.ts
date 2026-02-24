import express from 'express';
import { mealsController } from './meals.controller';



const router=express.Router()
// router.get("/all",providerController.allProvider)
router.post("/create",mealsController.createMeals)
router.get("/filter",mealsController.filterIngMeals)





export const mealsRouter=router