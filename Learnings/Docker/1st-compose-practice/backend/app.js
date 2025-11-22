import express from "express";
import Redis from "ioredis";

const app = express();

const redis = new Redis({
    // yahan par aapko ( matlab us ), we have to write the service name along with it's port
    host : process.env.Redis_Host,
    port : process.env.Redis_Port
});

app.get('/', async ( req, res ) => {
    await redis.set("naam", "Diwakar, The Billionaire...");
    const valueOfNameThing = await redis.get("naam");

    await redis.set("friend", "Vivek and Harsh are friend of mine.")
    const valueofFriendThing = await redis.get("friend");

    res.status(200).json({
        message : "Bool Bhai, kii haal hai",
        redisvalues : {
            naam : valueOfNameThing,
            friend : valueofFriendThing
        }
    })
})

const PORT = 4000;

app.listen(PORT, ()=> {
    console.log("SERVER is UP BABYYY!!!");
})


