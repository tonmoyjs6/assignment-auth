import { NextFunction, Request, Response } from "express"
import { UserRole } from "../../prisma/generated/prisma/enums"

import  Jwt, { JwtPayload }  from "jsonwebtoken"
// import { JsonWebTokenError } from "jsonwebtoken";


declare global{
    namespace Express{
        interface Request{
           user?:{
                id:string;
                name:string;
                email:string
            }
            
        }
    }
}


export const checkAuth=(...roles:UserRole[])=>{


    return async(req:Request,res:Response,next:NextFunction)=>{

        if(!roles.length ){
            console.log("you are not unauthorized");
        }

        console.log(roles);
        const token= req.headers.authorization?.trim().split(" ")[1]
        if(!token){
            console.log("you not have any token");
        }

        const currentUser= Jwt.verify(token!,process.env.SECRET_KEY!)as string

        
        req.user={
            id:currentUser.id,
            name:currentUser.name,
            email:currentUser.email

        }
        
        



        next()

    }
}