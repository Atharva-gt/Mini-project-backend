const express = require("express");
const app = express();
const port = 5000 || process.env.PORT;
const cors = require("cors");
const userRouter = require("./routers/userRouter");
const fileRouter = require("./routers/fileRouter");
const videoupload =require("./routers/videoupload");

app.use(express.json());
app.use(cors({ origin: ["http://localhost:3000"] }));
app.use("/user", userRouter);
app.use("/share", fileRouter);
app.use("/file",videoupload);

app.listen(port, () => {
  console.log("server started ...");
});