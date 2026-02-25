import { MealWhereInput } from "../../../prisma/generated/prisma/models"
import { prisma } from "../../lib/prisma"

const createMeals = async (payload: any) => {
    // payload type can change
    const mealsCreationByProvider = await prisma.meal.create({
        data: payload
    })
    return mealsCreationByProvider

}


const filterIngMeals = async ({ searchString, isAvailableBoolean,minPriceConversion,maxPriceConversion }:
    { searchString: string | "", isAvailableBoolean: boolean | undefined ,minPriceConversion:number | undefined,maxPriceConversion:number |undefined}) => {
console.log(minPriceConversion,"min");
// console.log(maxPriceConversion);
    let andConditions:MealWhereInput[]=[]
    // console.log(searchString);
    if(searchString){
        andConditions.push({
            OR:[
                {
                    mealName:{
                        contains:searchString,
                        mode:"insensitive"
                    }
                    
                    
                }
            ]
        })
    }


    if(typeof isAvailableBoolean==="boolean"){
        andConditions.push(
            {
                OR:[
                    {
                        isAvailable:isAvailableBoolean
                    }
                ]
            }
        )
    }
    

if( minPriceConversion !==undefined &&!isNaN(minPriceConversion)){
    andConditions.push(
        {
                    price:{
                        gte:minPriceConversion
                    }
                
                
            
        }
    )
}

if(maxPriceConversion!==undefined &&!isNaN(maxPriceConversion)){
    andConditions.push(
        {
            
                
                    price:{
                        lte:maxPriceConversion
                    }
                
                
            
        }
    )
}

const result= await prisma.meal.findMany(
        {
            where:{
                AND:andConditions,
                
            }
        }
    )
    // console.log(result);
    return result



}



export const mealsService = {
    createMeals,
    filterIngMeals
}