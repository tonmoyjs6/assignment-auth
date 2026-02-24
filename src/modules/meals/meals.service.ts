import { prisma } from "../../lib/prisma"

const createMeals=async(payload:any)=>{
// payload type can change
    const mealsCreationByProvider= await prisma.meal.create({
        data:payload
    })
    return mealsCreationByProvider
    
}


const filterIngMeals=async(payload:any)=>{

}

export const mealsService={
createMeals,
filterIngMeals
}