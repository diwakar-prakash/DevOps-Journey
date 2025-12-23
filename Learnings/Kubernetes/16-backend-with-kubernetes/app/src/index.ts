import express from "express";
import { Request, Response } from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const tasks: { id: number, title: string }[] = [];

app.get('/health', ( req: Request, res : Response ) => {
    res.status(200).json({
        status : "ok",
    })
});

app.get('/tasks', ( req : Request, res : Response ) => {
    res.status(200).json({
        data : tasks
    })
})

app.post('/tasks', ( req : Request, res : Response ) => {
    const { title } = req.body;
    
    if(!title) {
        return res.status(400).json({
            message : "Title is required"
        })
    }

    const task = {
        id : tasks.length + 1,
        title
    }

    tasks.push(task);

    res.status(201).json({
        message : "The task has been added",
        tasks
    })
})


app.listen(PORT, () => {
    console.log(`Server is up BABY at the port ${PORT}`);
})
