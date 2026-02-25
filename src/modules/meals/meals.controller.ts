import { RequestHandler } from "express"
import { mealsService } from "./meals.service"

const createMeals: RequestHandler = async (req, res) => {

    try {
        const result = await mealsService.createMeals(req.body)
        res.status(201).json(result)
    } catch (error) {
        res.status(400).json(error)
    }
}

const filterIngMeals: RequestHandler = async (req, res) => {
    const { search, isAvailable ,maxprice,minprice} = req.query
    console.log(minprice,maxprice);


    try {
        const searchString = typeof search === "string" ? search : ""
        const maxPriceConversion= typeof maxprice==="string"?Number(maxprice):undefined
        const minPriceConversion= typeof minprice==="string"? Number(minprice):undefined
        console.log(maxPriceConversion,minPriceConversion,"conversion");
        // console.log(searchString);

        const isAvailableBoolean = isAvailable === "true" ? true : isAvailable === "false" ? false : undefined
        
        const result = await mealsService.filterIngMeals({searchString, isAvailableBoolean,maxPriceConversion,minPriceConversion })
        res.status(200).json(result)

    } catch (error) {

    }


}


export const mealsController = {
    createMeals,
    filterIngMeals
}