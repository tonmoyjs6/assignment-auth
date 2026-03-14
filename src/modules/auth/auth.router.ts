import express from 'express';
import { authContorller } from './auth.controller';
import { checkAuth } from '../../middleware/checkAuth';


const router=express.Router()
router.post("/create",authContorller.createUser)
router.post("/login",authContorller.loginUser)
router.get("/me",checkAuth("CUSTOMER"),authContorller.getCurrentUser)



export const authRouter=router