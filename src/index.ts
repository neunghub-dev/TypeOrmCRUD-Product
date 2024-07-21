import express from 'express';
import { AppDataSource } from "./data-source";
import { Request, Response } from "express";
import router from './routes';
const app = express();
app.use(express.json());
app.use("/api/v1", router);

app.get("*", (req: Request, res: Response) => {
  res.status(200).json({ message: "Hello World" });
});

AppDataSource.initialize()
  .then(async () => {
    app.listen(3000, () => {
      console.log("Server is running on http://localhost:" + 3000);
    });
    console.log("Data Source has been initialized!");
  })
  .catch((error) => console.log(error));