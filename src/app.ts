import express from "express"
import { authRouter } from "./modules/auth/auth.router"
import { providerRouter } from "./modules/providerprofile/providerprofile.router"
import { mealsRouter } from "./modules/meals/meals.router"


const app = express()
app.use(express.json())


app.use("/api/v1/auth",authRouter)
app.use("/api/v1/provider",providerRouter)
app.use("/api/v1/meals",mealsRouter)

export default app
