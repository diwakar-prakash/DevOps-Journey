import express from "express";

const app = express();

app.get('/', ( req, res ) => {
    res.status(200).json({
        message : "Bool Bhai, kii haal hai"
    })
})

const PORT = 4000;

app.listen(PORT, ()=> {
    console.log("SERVER is UP BABYYY!!!");
})


