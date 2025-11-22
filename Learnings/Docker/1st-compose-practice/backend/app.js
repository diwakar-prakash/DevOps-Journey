import express from "express";
import Redis from "ioredis";

const app = express();

const redis = new Redis({
    // yahan par aapko ( matlab us ), we have to write the service name along with it's port
    host : "redis",
    port : 6379
});

app.get('/', async ( req, res ) => {
    await redis.set("naam", "Diwakar, The Billionaire...");
    const valueOfThingsWeSet = await redis.get("naam");


    res.status(200).json({
        message : "Bool Bhai, kii haal hai",
        redisValue : valueOfThingsWeSet
    })
})

const PORT = 4000;

app.listen(PORT, ()=> {
    console.log("SERVER is UP BABYYY!!!");
})


