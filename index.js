import express from "express";
import morgan from "morgan";
import { connectDB } from "./config/connectDB.mjs";
import rootRouter from "./routes/root.mjs";

connectDB();
const app = express();

app.use(morgan("combined"));
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");

app.use("/", rootRouter);

app.listen(3000, () => {
  console.log("Server Started!!!");
});