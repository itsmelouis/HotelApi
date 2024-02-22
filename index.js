import express from "express";
import cors from "cors";
import { router as hotelRouter } from "./routes/hotel.route.js";
import { router as clientsRouter } from "./routes/clients.route.js";

const app = express();
const port = 3000;

app.use(cors());


app.use(express.json());
app.use("/hotel", hotelRouter);
app.use("/clients", clientsRouter);


app.listen(port, () => {
  console.log(`App started 🧨, listening to port ${port}`);
});
