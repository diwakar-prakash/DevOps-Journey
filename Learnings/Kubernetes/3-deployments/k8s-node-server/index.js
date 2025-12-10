import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    try {
        res.status(200).json({
            message : "Everything is working fine and thank YOU for visiting"
        })
    }
    catch ( err ) {
        res.status(401).json({
            message : `The error came due to the following reason 
            
            ${err.message}`
        })
    }
})

const PORT = 4001;
app.listen(PORT, () => {
    console.log(`SERVER IS LISTENINg.... on the PORT ${PORT}`);
})

