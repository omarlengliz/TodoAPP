const express = require("express");
const dotenv = require("dotenv");
const connectDb = require("./config/database");
const errorHandler = require("./middleware/errorMiddleware");
const app = express();
dotenv.config();
connectDb();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const todoRoutes = require("./routes/todoRoutes");
const swagger = require('./utils/swagger');
app.use("/",swagger)
app.use("/todos", todoRoutes);
app.use(errorHandler);

module.exports=app