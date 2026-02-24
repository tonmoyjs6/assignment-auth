import express from 'express';
import { providerController } from './providerprofile.controller';



const router=express.Router()
router.get("/all",providerController.allProvider)
router.post("/create",providerController.createProviderProfile)
router.get("/single/:id",providerController.singleProviderProfileaAndMeanus)





export const providerRouter=router