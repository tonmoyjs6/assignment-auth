import { prisma } from "../../lib/prisma";







const createProviderProfile=async(payload:any)=>{
    const providerProfileCreation=await prisma.providerProfile.create({
        data:payload
    })
    return providerProfileCreation
}




const allProvider=async()=>{

    const provider=await prisma.providerProfile.findMany({
        include:{
            userInfo:true,
            meals:true
        }
    })
    
    return provider


}

const singleProviderProfileaAndMeanus=async(id:string)=>{
    const singleProviderInfo=await prisma.providerProfile.findUnique({
        where:{
            id:id
        },
        include:{
            meals:true
        }
    })
    return singleProviderInfo

}




export const providerProfileService={
    allProvider,
    createProviderProfile,
    singleProviderProfileaAndMeanus,
    
}



