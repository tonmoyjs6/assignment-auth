import express from 'express';
import { authContorller } from './auth.controller';


const router=express.Router()
router.post("/create",authContorller.createUser)
router.post("/login",authContorller.loginUser)



export const authRouter=router