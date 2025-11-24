import express from "express";
import Redis from "ioredis";

const app = express();

const redis = new Redis({
    host : process.env.Redis_Host,
    port : process.env.Redis_Port
})

app.get("/", async ( req , res ) => {
    try {
        await redis.set("Favourite_Billionaire", "Stephen Schwarzman");
        const fb = await redis.get('Favourite_Billionaire');

        await redis.set("Favourite_City", "Miami");
        const fc = await redis.get("Favourite_City");

        res.status(200).json({
            message : "Check these things out about myself",
            favouriteBillionaire : fb,
            favourite_city : fc
        })
    }
    catch ( err ) {
        res.status(404).json({
            message : "Some error came"
        })
    }
})

const PORT = 4000;
app.listen(PORT, () => {
    console.log("Server Started - PID ", process.pid);
})