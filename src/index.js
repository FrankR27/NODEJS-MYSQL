import express from "express";
import cors from "cors";
import booksRoutes from "./routes/books.routes.js"
import {PORT} from './config.js'

const app = express();
app.use(express.json());
app.use(cors());
app.use(booksRoutes)

app.get("/", (req, res) => {
  res.send("Hola Mundo");
});

app.use((req, res, next) => {
  res.status(404).json({
    message: "endpoint not found"
  })
})

app.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`);
});
