import express from "express"
import app from "./app"
import { prisma } from "./lib/prisma"

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

const main = async () => {

    try {


        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`)
        })
        await prisma.$connect()



    } catch (error) {
        console.log(error);
        await prisma.$disconnect();
        process.exit(1);


    }

}
main()



