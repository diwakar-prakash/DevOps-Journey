import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    try {
        res.status(200).json({
            message : `Everything is Okay here brother`
        })
    }
    catch (err) {
        res.status(404).json({
            message : `Things go fucked up brother
            
            {err.message}`
        })
    }
})

const PORT = 5000;

app.listen(PORT, () => {
    console.log("SERVER UP BABY.....");
})