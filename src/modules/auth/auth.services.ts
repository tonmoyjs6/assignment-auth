import { prisma } from "../../lib/prisma"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { UserRole } from "../../../prisma/generated/prisma/enums"

const createUser=async({name,email,password,role}:{name:string,email:string,password:string,role?:UserRole})=>{
    const hashPassWord=await bcrypt.hash(password,10)


    const result= await prisma.user.create({
        data:{
            name,
            email,
            password:hashPassWord,
            role:role ?? "CUSTOMER"
        }
    })

    const {password:userPasswordHash,...newResult}=result
    
    return newResult

}


const loginUser=async({password,email}:{password:string,email:string})=>{

    const result= await prisma.user.findUnique({
        where:{
            email:email
            
            
        }
        
        
    })
    const checkPassWord= await bcrypt.compare(password,result?.password!)

    if(!result){
        throw new Error("You are unAuthorized, first Sign Up")

    }
    if(!checkPassWord){
        throw new Error("you are password unAuthorized")
    }

    const token=  jwt.sign(result,process.env.SECRET_KEY!,{expiresIn:"2d"})
    
    const tokenAndResult={token,result}
    return tokenAndResult
    


    
}

export const authService={
    createUser,
    loginUser
}