const express = require("express");


const app = express();


const port = process.env.PORT || 5000;
const userRouter = require("./routers/userRouter");
const fileRouter = require("./routers/fileRouter");
const videoupload = require("./routers/videoupload");

const cors = require("cors");

app.use(cors({ origin: ["http://localhost:3000"] }));
app.use(express.json());





app.use(express.static("./uploads"));

app.use("/user", userRouter);
app.use("/share", fileRouter);
app.use("/file", videoupload);


app.get("/", (req, res) => {
  console.log("request from client!!");
  res.send("you got a response");
});

app.get("/add", (req, res) => {
  console.log("request from client on add!!");
  res.send("you got a response from add at root");
});

app.get("/home", (req, res) => {
  console.log("request from client at home!!");
  // res.send('you got a response from home');
  res.json({ message: "Success" });
});

app.listen(port, () => {
  // console.log('server started on port ' + port);
  console.log(`server started on port ${port}`);
});